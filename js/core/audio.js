/* Dịch vụ âm thanh trong trình duyệt: đọc văn bản (TTS), ghi âm, bấm giờ, tiếng bíp */
(function () {
  const A = (globalThis.Aptis = globalThis.Aptis || {});
  const U = A.util;

  /* ---------------- Text-to-speech ---------------- */
  const synth = globalThis.speechSynthesis;
  let voices = [];
  let run = 0; // mã lượt phát — dùng để huỷ lượt cũ
  const FEMALE = /female|zira|samantha|hazel|susan|libby|sonia|fiona|karen|serena|victoria|moira|tessa|amy|emma|joanna|kate|jenny|aria/i;
  const MALE = /(^|\W)male|david|daniel|george|ryan|thomas|oliver|alex|fred|mark|guy|brian|james|arthur|eric/i;

  function loadVoices() {
    if (!synth) return [];
    voices = synth.getVoices().filter((v) => /^en/i.test(v.lang));
    return voices;
  }
  if (synth) {
    loadVoices();
    synth.addEventListener && synth.addEventListener('voiceschanged', loadVoices);
  }

  const TTS = (A.tts = {
    supported: !!(synth && globalThis.SpeechSynthesisUtterance),
    voices: () => (voices.length ? voices : loadVoices()),
    playing: false,

    /** Chọn giọng theo giới tính; ưu tiên en-GB, rồi giọng người dùng chọn */
    pickVoice(gender, slot = 0) {
      const vs = TTS.voices();
      if (!vs.length) return null;
      const chosen = A.store && A.store.get('profile').ttsVoice;
      const pref = (list) => list.find((v) => /en-GB/i.test(v.lang)) || list[0];
      const byGender = vs.filter((v) => (gender === 'f' ? FEMALE.test(v.name) : MALE.test(v.name)));
      if (byGender.length) return byGender[slot % byGender.length] && slot > 0 ? byGender[slot % byGender.length] : pref(byGender);
      const c = vs.find((v) => v.voiceURI === chosen);
      if (c && slot === 0) return c;
      return vs[(slot + (gender === 'f' ? 0 : 1)) % vs.length];
    },

    stop() {
      run++;
      TTS.playing = false;
      if (synth) synth.cancel();
    },

    /** Đọc một đoạn văn. Trả về Promise (resolve khi xong hoặc bị huỷ). */
    speak(text, { gender = 'f', rate, slot = 0, lang = 'en-GB', pitch } = {}) {
      return new Promise((resolve) => {
        if (!TTS.supported) return resolve(false);
        const my = ++run;
        synth.cancel();
        const u = new globalThis.SpeechSynthesisUtterance(text);
        const v = TTS.pickVoice(gender, slot);
        if (v) {
          u.voice = v;
          u.lang = v.lang;
        } else u.lang = lang;
        u.rate = rate || (A.store ? A.store.get('profile').ttsRate : 0.95);
        u.pitch = pitch || (v && (gender === 'f' ? FEMALE.test(v.name) : MALE.test(v.name)) ? 1 : gender === 'f' ? 1.15 : 0.85);
        const done = () => resolve(my === run);
        u.onend = done;
        u.onerror = done;
        TTS.playing = true;
        synth.speak(u);
      });
    },

    /**
     * Phát cả kịch bản hội thoại. opts: { rate, onLine(i), shouldStop() }
     * Trả về Promise<boolean> (true nếu phát hết).
     */
    async playScript(script, speakers, { rate, onLine, pauseMs = 350 } = {}) {
      if (!TTS.supported) return false;
      const my = ++run;
      const slots = {};
      let n = 0;
      Object.keys(speakers).forEach((k) => (slots[k] = n++));
      TTS.playing = true;
      for (let i = 0; i < script.length; i++) {
        if (my !== run) return false;
        onLine && onLine(i);
        const line = script[i];
        const gender = speakers[line.s] || 'f';
        // slot theo thứ tự giới tính để hai người cùng giới có giọng khác nhau
        const sameGender = Object.keys(speakers).filter((k) => speakers[k] === gender);
        const slot = sameGender.indexOf(line.s);
        const ok = await new Promise((resolve) => {
          const u = new globalThis.SpeechSynthesisUtterance(line.t);
          const v = TTS.pickVoice(gender, slot);
          if (v) {
            u.voice = v;
            u.lang = v.lang;
          } else u.lang = 'en-GB';
          u.rate = rate || (A.store ? A.store.get('profile').ttsRate : 0.95);
          u.pitch = gender === 'f' ? 1.12 + slot * 0.1 : 0.85 - slot * 0.05;
          u.onend = () => resolve(true);
          u.onerror = () => resolve(false);
          synth.cancel();
          synth.speak(u);
        });
        if (my !== run) return false;
        if (!ok) break;
        await new Promise((r) => setTimeout(r, pauseMs));
      }
      if (my === run) {
        TTS.playing = false;
        onLine && onLine(-1);
        return true;
      }
      return false;
    },
  });

  /* ---------------- Ghi âm ---------------- */
  const Recorder = (A.recorder = {
    supported: !!(globalThis.navigator && navigator.mediaDevices && navigator.mediaDevices.getUserMedia && globalThis.MediaRecorder),
    _rec: null,
    _stream: null,
    _chunks: [],
    _t0: 0,

    /** Bắt đầu ghi. Ném lỗi nếu bị từ chối quyền mic. */
    async start() {
      if (!Recorder.supported) throw new Error('Trình duyệt không hỗ trợ ghi âm.');
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      Recorder._stream = stream;
      Recorder._chunks = [];
      const rec = new MediaRecorder(stream);
      rec.ondataavailable = (e) => e.data.size && Recorder._chunks.push(e.data);
      rec.start();
      Recorder._rec = rec;
      Recorder._t0 = Date.now();
    },

    /** Dừng và trả về { url, seconds } */
    stop() {
      return new Promise((resolve) => {
        const rec = Recorder._rec;
        if (!rec || rec.state === 'inactive') return resolve(null);
        rec.onstop = () => {
          const blob = new Blob(Recorder._chunks, { type: rec.mimeType || 'audio/webm' });
          Recorder._stream && Recorder._stream.getTracks().forEach((t) => t.stop());
          Recorder._rec = null;
          resolve({ url: URL.createObjectURL(blob), seconds: Math.round((Date.now() - Recorder._t0) / 1000) });
        };
        rec.stop();
      });
    },
    cancel() {
      try {
        if (Recorder._rec && Recorder._rec.state !== 'inactive') Recorder._rec.stop();
        Recorder._stream && Recorder._stream.getTracks().forEach((t) => t.stop());
      } catch (e) {
        /* bỏ qua */
      }
      Recorder._rec = null;
    },
  });

  /* ---------------- Bíp & bấm giờ ---------------- */
  let actx = null;
  A.beep = (freq = 880, ms = 180) => {
    try {
      if (A.store && !A.store.get('profile').sound) return;
      actx = actx || new (globalThis.AudioContext || globalThis.webkitAudioContext)();
      const o = actx.createOscillator();
      const g = actx.createGain();
      o.frequency.value = freq;
      g.gain.value = 0.06;
      o.connect(g);
      g.connect(actx.destination);
      o.start();
      o.stop(actx.currentTime + ms / 1000);
    } catch (e) {
      /* không phát được âm thanh */
    }
  };

  /** Bộ đếm lùi/đếm tiến chính xác theo đồng hồ hệ thống. */
  A.createTimer = ({ seconds = 60, countUp = false, onTick, onEnd } = {}) => {
    let t0 = 0;
    let acc = 0; // giây đã trôi trước khi tạm dừng
    let h = null;
    const t = {
      running: false,
      elapsed: () => acc + (t.running ? (Date.now() - t0) / 1000 : 0),
      remaining: () => Math.max(0, seconds - t.elapsed()),
      start() {
        if (t.running) return;
        t.running = true;
        t0 = Date.now();
        h = setInterval(() => {
          const el = t.elapsed();
          onTick && onTick(countUp ? el : Math.max(0, seconds - el), el);
          if (!countUp && el >= seconds) {
            t.stop();
            onEnd && onEnd();
          }
        }, 250);
        onTick && onTick(countUp ? acc : seconds - acc, acc);
      },
      pause() {
        if (!t.running) return;
        acc = t.elapsed();
        t.running = false;
        clearInterval(h);
      },
      stop() {
        acc = t.elapsed();
        t.running = false;
        clearInterval(h);
      },
      reset(newSeconds) {
        t.stop();
        acc = 0;
        if (newSeconds != null) seconds = newSeconds;
        onTick && onTick(countUp ? 0 : seconds, 0);
      },
    };
    return t;
  };

  /* ---------------- Theo dõi thời gian học chủ động ---------------- */
  const Activity = (A.activity = {
    module: 'home',
    lastInput: Date.now(),
    keepAlive: 0, // giây còn được tính là "đang học" dù không chạm (nghe, bấm giờ)
    _h: null,
    _pending: 0,
    ping() {
      Activity.lastInput = Date.now();
    },
    /** Đánh dấu hoạt động thụ động kéo dài (đang nghe audio, đồng hồ đang chạy) */
    hold(sec = 5) {
      Activity.keepAlive = Math.max(Activity.keepAlive, sec);
    },
    setModule(m) {
      Activity.module = m;
    },
    start() {
      if (Activity._h) return;
      ['pointerdown', 'keydown', 'scroll', 'touchstart', 'input'].forEach((ev) => globalThis.addEventListener(ev, Activity.ping, { passive: true }));
      Activity._h = setInterval(() => {
        if (document.hidden) return;
        const idle = (Date.now() - Activity.lastInput) / 1000;
        const active = idle < 90 || Activity.keepAlive > 0;
        if (Activity.keepAlive > 0) Activity.keepAlive -= 1;
        if (!active || Activity.module === 'settings') return;
        const dl = A.store.dayLog();
        dl.sec += 1;
        dl.by[Activity.module] = (dl.by[Activity.module] || 0) + 1;
        Activity._pending++;
        if (Activity._pending >= 10) Activity.flush();
      }, 1000);
      globalThis.addEventListener('pagehide', Activity.flush);
      document.addEventListener('visibilitychange', () => document.hidden && Activity.flush());
    },
    flush() {
      if (Activity._pending) {
        A.store.save('log');
        Activity._pending = 0;
        A.bus && A.bus.emit('tick');
      }
    },
  });
})();
