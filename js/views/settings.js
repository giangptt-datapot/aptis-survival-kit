/* Cài đặt: mục tiêu, giao diện, trợ năng, giọng đọc, sao lưu/khôi phục dữ liệu */
(function () {
  const A = (globalThis.Aptis = globalThis.Aptis || {});
  const ui = A.ui;
  const { h } = ui;
  const U = A.util;

  const setProfile = (patch, refresh) => {
    A.store.update('profile', (p) => Object.assign(p, patch));
    A.applyPrefs && A.applyPrefs();
    A.bus.emit('xp', 0);
    if (refresh) ui.router.refresh();
  };

  ui.router.add(
    '/settings',
    () => {
      const p = A.store.get('profile');
      const root = h('div', null, ui.PageHeader({ title: 'Cài đặt', sub: 'Mọi thay đổi được lưu ngay trong trình duyệt này.' }));

      // --- Mục tiêu ---
      root.append(
        ui.Card(
          { title: 'Mục tiêu học' },
          h(
            'div',
            { class: 'form' },
            h('label', { class: 'field' }, h('span', null, 'Tên hiển thị'), h('input', { type: 'text', maxlength: 40, value: p.name, onChange: (e) => setProfile({ name: e.target.value.trim() }) })),
            h('label', { class: 'field' }, h('span', null, 'Thời lượng mỗi ngày'), h('select', { onChange: (e) => (setProfile({ dailyMinutes: Number(e.target.value) }), ui.toast('Đã cập nhật nhiệm vụ theo thời lượng mới.', { icon: '✅' })) }, [30, 60, 90].map((v) => h('option', { value: v, selected: p.dailyMinutes === v }, v + ' phút/ngày')))),
            h('label', { class: 'field' }, h('span', null, 'Ngày thi dự kiến'), h('input', { type: 'date', value: p.examDate, onChange: (e) => setProfile({ examDate: e.target.value }) })),
            h('label', { class: 'field' }, h('span', null, 'Ngày 1 của lộ trình'), h('input', { type: 'date', value: p.startDate || U.dateKey(), onChange: (e) => e.target.value && setProfile({ startDate: e.target.value }) })),
          ),
          h('div', { class: 'quiz-actions' }, ui.Button({ label: 'Đặt Ngày 1 = hôm nay', kind: 'secondary', onClick: async () => { if (await ui.confirm('Đặt lại Ngày 1 thành hôm nay? Tiến độ đã làm vẫn giữ nguyên nhưng lịch sẽ dịch theo.')) (setProfile({ startDate: U.dateKey() }, true), ui.toast('Đã đặt Ngày 1 là hôm nay.', { icon: '📅' })); } })),
        ),
      );

      // --- Giao diện & trợ năng ---
      const radio = (name, val, label, cur, onSet) => h('label', { class: ['choice', cur === val && 'selected'] }, h('input', { type: 'radio', name, value: val, checked: cur === val, onChange: () => onSet(val) }), h('strong', null, label));
      const check = (label, key, desc) => h('label', { class: 'switch-row' }, h('input', { type: 'checkbox', checked: !!p[key], onChange: (e) => setProfile({ [key]: e.target.checked }) }), h('span', null, h('strong', null, label), desc && h('span', { class: 'muted small' }, ' — ' + desc)));
      root.append(
        ui.Card(
          { title: 'Giao diện & trợ năng' },
          h('fieldset', { class: 'field' }, h('legend', null, 'Chủ đề màu'), h('div', { class: 'choices' }, [['auto', 'Theo hệ thống'], ['light', 'Sáng'], ['dark', 'Tối']].map(([v, l]) => radio('theme', v, l, p.theme, (x) => setProfile({ theme: x }, true))))),
          h('label', { class: 'field' }, h('span', null, `Cỡ chữ: ${p.fontScale}%`), h('input', { type: 'range', min: 85, max: 140, step: 5, value: p.fontScale, onInput: (e) => ((e.target.previousSibling.textContent = `Cỡ chữ: ${e.target.value}%`), setProfile({ fontScale: Number(e.target.value) })) })),
          check('Giảm chuyển động', 'reduceMotion', 'tắt hiệu ứng chuyển cảnh'),
          check('Chế độ tập trung', 'focusMode', 'ẩn menu khi luyện tập (có nút thoát ở góc)'),
          check('Âm thanh bíp', 'sound', 'báo hết giờ'),
        ),
      );

      // --- Giọng đọc ---
      const voiceSel = h('select', { 'aria-label': 'Giọng đọc', onChange: (e) => setProfile({ ttsVoice: e.target.value }) });
      const fillVoices = () => {
        ui.clear(voiceSel);
        voiceSel.append(h('option', { value: '' }, 'Tự động (ưu tiên Anh-Anh)'));
        A.tts.voices().forEach((v) => voiceSel.append(h('option', { value: v.voiceURI, selected: p.ttsVoice === v.voiceURI }, `${v.name} (${v.lang})`)));
      };
      fillVoices();
      if (globalThis.speechSynthesis) setTimeout(fillVoices, 600);
      root.append(
        ui.Card(
          { title: 'Giọng đọc (Listening & phát âm)', sub: A.tts.supported ? 'Dùng giọng có sẵn trong trình duyệt/hệ điều hành, hoạt động offline.' : 'Trình duyệt này không hỗ trợ đọc văn bản.' },
          h('div', { class: 'form' }, h('label', { class: 'field' }, h('span', null, 'Giọng'), voiceSel), h('label', { class: 'field' }, h('span', null, `Tốc độ: ${p.ttsRate}`), h('input', { type: 'range', min: 0.6, max: 1.3, step: 0.05, value: p.ttsRate, onInput: (e) => ((e.target.previousSibling.textContent = `Tốc độ: ${e.target.value}`), setProfile({ ttsRate: Number(e.target.value) })) }))),
          ui.Button({ label: '🔊 Nghe thử', kind: 'secondary', disabled: !A.tts.supported, onClick: () => A.tts.speak('Hello! This is a sample of the voice you will hear in the listening practice.', { gender: 'f' }) }),
        ),
      );

      // --- Dữ liệu ---
      const fileIn = h('input', { type: 'file', accept: 'application/json,.json', hidden: true, onChange: (e) => {
        const f = e.target.files[0];
        if (!f) return;
        const r = new FileReader();
        r.onload = async () => {
          try {
            const obj = JSON.parse(r.result);
            if (!(await ui.confirm('Khôi phục sẽ GHI ĐÈ toàn bộ dữ liệu hiện tại bằng file này. Tiếp tục?', { danger: true, ok: 'Khôi phục' }))) return;
            A.store.importAll(obj);
            A.applyPrefs();
            ui.toast('Đã khôi phục dữ liệu.', { kind: 'good', icon: '✅' });
            ui.router.go('#/');
          } catch (err) {
            ui.toast('Không đọc được file: ' + err.message, { kind: 'warn', icon: '⚠️', ms: 6000 });
          }
        };
        r.readAsText(f);
      } });
      root.append(
        ui.Card(
          { title: 'Dữ liệu của bạn', sub: `Lưu trong LocalStorage của trình duyệt này (~${A.store.sizeKB()} KB)${A.store.available ? '' : ' — LocalStorage đang bị chặn, dữ liệu chỉ tồn tại trong phiên này!'}.` },
          h('p', { class: 'muted' }, 'Không có tài khoản hay máy chủ: xoá dữ liệu trình duyệt hoặc đổi trình duyệt/máy sẽ mất tiến độ. Hãy sao lưu định kỳ.'),
          h('div', { class: 'quiz-actions' }, ui.Button({ label: '⬇ Sao lưu (JSON)', kind: 'primary', onClick: () => {
            const blob = new Blob([JSON.stringify(A.store.exportAll(), null, 2)], { type: 'application/json' });
            const a = h('a', { href: URL.createObjectURL(blob), download: `aptis-backup-${U.dateKey()}.json` });
            document.body.append(a);
            a.click();
            a.remove();
          } }), ui.Button({ label: '⬆ Khôi phục từ file', kind: 'secondary', onClick: () => fileIn.click() }), ui.Button({ label: 'Xoá toàn bộ dữ liệu', kind: 'danger', onClick: async () => { if (await ui.confirm('Xoá TOÀN BỘ tiến độ, điểm, huy hiệu? Không thể hoàn tác (trừ khi bạn đã sao lưu).', { danger: true, ok: 'Xoá hết' })) { A.store.resetAll(); A.applyPrefs(); ui.router.go('#/welcome'); } } }), fileIn),
        ),
      );

      root.append(
        ui.Card(
          { title: 'Phím tắt' },
          h('table', { class: 'table' }, h('tbody', null, [['1 – 4', 'Chọn đáp án trong quiz'], ['Enter', 'Kiểm tra / câu tiếp theo'], ['Space', 'Lật flashcard'], ['1 – 4 (sau khi lật)', 'Chấm Quên / Khó / Được / Dễ'], ['B', 'Đánh dấu từ'], ['S', 'Nghe phát âm từ']].map(([k, d]) => h('tr', null, h('th', { scope: 'row' }, h('kbd', null, k)), h('td', null, d))))),
        ),
      );
      return { title: 'Cài đặt', module: 'settings', node: root };
    },
    'settings',
  );
})();
