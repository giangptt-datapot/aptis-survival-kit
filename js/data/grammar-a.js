(function () {
  const D = (globalThis.AptisData = globalThis.AptisData || {});
  D.grammar = D.grammar || [];

  D.grammar.push(
    /* =====================================================================
       1. TENSES
       ===================================================================== */
    {
      id: "tenses",
      title: "Present / Past / Future",
      vi: "Các thì: hiện tại, quá khứ, tương lai",
      icon: "⏰",
      summary:
        "Phần Grammar của Aptis hay cho một câu có mốc thời gian (since, ago, by the time, while...) rồi bắt bạn chọn đúng thì của động từ. Nắm chắc dấu hiệu thời gian là đủ ăn điểm phần này.",
      explain: [
        {
          h: "Present Simple vs Present Continuous",
          body:
            "**Present Simple** (V-s/es) dùng cho thói quen, sự thật, lịch trình cố định: ‘every day, usually, often, never’. " +
            "**Present Continuous** (am/is/are + V-ing) dùng cho việc **đang xảy ra lúc nói**, tình huống **tạm thời**, hoặc **kế hoạch đã sắp xếp**. " +
            "Động từ chỉ trạng thái (**know, understand, like, want, need, believe, belong, prefer**) thường KHÔNG dùng thì tiếp diễn. " +
            "Dùng ‘always’ + tiếp diễn để phàn nàn về thói quen gây khó chịu.",
          ex: [
            ["She works in HR.", "Cô ấy làm ở phòng nhân sự."],
            ["She is working from home this week.", "Tuần này cô ấy đang làm việc ở nhà."],
            ["I don't understand this email.", "Tôi không hiểu email này."],
            ["He is always leaving his dirty mugs in the sink.", "Anh ta cứ để cốc bẩn trong bồn rửa hoài."]
          ]
        },
        {
          h: "Present Perfect vs Past Simple (và Present Perfect Continuous)",
          body:
            "**Past Simple** (V2/-ed): việc đã kết thúc ở một **thời điểm xác định trong quá khứ** (‘yesterday, last week, in 2019, two days ago’). " +
            "**Present Perfect** (have/has + V3): quá khứ có **liên hệ với hiện tại** — kinh nghiệm (‘ever, never, twice’), kết quả còn thấy (‘just, already, yet’), hoặc việc kéo dài đến nay (‘for, since, so far, this week’). " +
            "**Present Perfect Continuous** (have/has been + V-ing) nhấn mạnh **quá trình kéo dài**; còn Present Perfect đơn nhấn mạnh **kết quả hoặc số lượng** đã hoàn thành. " +
            "Phân biệt **been** (đã đến và đã quay về) với **gone** (đã đi, chưa về).",
          ex: [
            ["I have lived in Hanoi for six years.", "Tôi sống ở Hà Nội được sáu năm rồi."],
            ["I lived in Da Nang in 2018.", "Tôi từng sống ở Đà Nẵng năm 2018."],
            ["I've been answering emails all morning, and I've replied to forty of them.", "Tôi trả lời email cả buổi sáng và đã trả lời xong bốn mươi cái."],
            ["Tom has gone to London, so he isn't here today.", "Tom đã đi London (chưa về), nên hôm nay anh ấy không ở đây."],
            ["Tom has been to London twice.", "Tom đã từng đến London hai lần."]
          ]
        },
        {
          h: "Past Simple vs Past Continuous",
          body:
            "**Past Simple** kể các sự kiện nối tiếp nhau, đã kết thúc hẳn. " +
            "**Past Continuous** (was/were + V-ing) mô tả **hoàn cảnh nền** hoặc việc **đang diễn ra thì bị cắt ngang** bởi một hành động ngắn (chia Past Simple). " +
            "Hay đi với **while, when, as**. Hai việc song song cùng lúc: dùng continuous cho cả hai với ‘while’.",
          ex: [
            ["I was walking to the station when I saw an accident.", "Tôi đang đi bộ ra ga thì thấy một vụ tai nạn."],
            ["She opened the file, read the message and called her boss.", "Cô ấy mở tệp, đọc tin nhắn rồi gọi cho sếp."],
            ["While Tom was cooking, Anna was setting the table.", "Trong lúc Tom nấu ăn thì Anna dọn bàn."]
          ]
        },
        {
          h: "Past Perfect (và Past Perfect Continuous)",
          body:
            "**Past Perfect** (had + V3) dùng cho việc xảy ra **trước** một mốc hoặc một hành động khác trong quá khứ. " +
            "Hay đi với ‘by the time, before, after, when, already, just’. " +
            "**Past Perfect Continuous** (had been + V-ing) nhấn mạnh việc kéo dài cho đến mốc quá khứ đó, thường giải thích nguyên nhân hoặc trạng thái lúc ấy.",
          ex: [
            ["By the time the manager joined the call, we had already finished the agenda.", "Khi quản lý vào cuộc gọi thì chúng tôi đã xong phần chương trình họp rồi."],
            ["She was exhausted because she had been working since six.", "Cô ấy kiệt sức vì đã làm việc từ sáu giờ."],
            ["I realised I had left my keys at the office.", "Tôi nhận ra mình đã để quên chìa khoá ở văn phòng."]
          ]
        },
        {
          h: "Nói về tương lai: will, going to, Present Continuous, Present Simple",
          body:
            "**will**: quyết định ngay lúc nói, lời hứa, lời đề nghị, dự đoán theo ý kiến. " +
            "**be going to**: ý định đã có từ trước, hoặc dự đoán dựa vào **bằng chứng hiện tại**. " +
            "**Present Continuous**: kế hoạch đã sắp xếp (có giờ, người, nơi cụ thể). " +
            "**Present Simple**: lịch trình, thời gian biểu. " +
            "Sau **when, as soon as, before, after, until** dùng thì hiện tại để nói về tương lai, KHÔNG dùng will. " +
            "**was going to** diễn tả dự định trong quá khứ nhưng đã không thực hiện.",
          ex: [
            ["It's cold in here. I'll close the window.", "Trong này lạnh quá. Để tôi đóng cửa sổ."],
            ["Look at those clouds! It's going to rain.", "Nhìn đám mây kia kìa! Trời sắp mưa."],
            ["I'm meeting the client at ten tomorrow.", "Mai mười giờ tôi gặp khách hàng."],
            ["The train leaves at 6.15.", "Chuyến tàu khởi hành lúc 6 giờ 15."],
            ["I'll send you the file as soon as I get to the office.", "Tôi sẽ gửi bạn tệp ngay khi tới văn phòng."],
            ["We were going to book a table, but the restaurant was full.", "Chúng tôi định đặt bàn, nhưng nhà hàng đã hết chỗ."]
          ]
        }
      ],
      tips: [
        "Nhìn dấu hiệu thời gian trước tiên: yesterday / last week / in 2019 / ago → Past Simple; for / since / so far / ever / never / just / already / yet → Present Perfect. Không dùng Present Perfect với mốc xác định: ‘I have seen him yesterday’ là sai.",
        "Động từ trạng thái (know, like, want, need, believe, understand, belong) không dùng tiếp diễn: ‘I am knowing’ hay ‘I'm not understanding’ là lỗi hay gặp. Chọn ‘know’, ‘don't understand’.",
        "Sau when / as soon as / before / until / if nói về tương lai phải dùng thì hiện tại, không dùng will: ‘I'll call you when I will arrive’ là sai → ‘when I arrive’. Với ‘by the time’, hành động xảy ra trước thường chia hoàn thành (had + V3 / will have + V3)."
      ],
      b1: [
        {
          q: "Please be quiet. The manager ___ an important phone call in her office.",
          o: ["takes", "is taking", "has taken", "took"],
          a: 1,
          e: "‘Please be quiet’ cho thấy việc đang diễn ra ngay lúc nói → Present Continuous: is taking. ‘takes’ (hiện tại đơn) chỉ thói quen, ‘has taken’ nhấn kết quả đã xong, ‘took’ là quá khứ; cả ba đều không diễn tả việc đang xảy ra."
        },
        {
          q: "I ___ in this company since 2019, so I know most of the staff.",
          o: ["work", "am working", "have worked", "worked"],
          a: 2,
          e: "Since + mốc thời gian → Present Perfect: have worked (việc kéo dài từ quá khứ đến nay). ‘work’ và ‘am working’ không đi với since; ‘worked’ chỉ việc đã kết thúc, trái với ‘I know most of the staff’ (vẫn đang làm ở đó)."
        },
        {
          q: "We ___ the budget when the fire alarm suddenly went off.",
          o: ["discuss", "have discussed", "are discussing", "were discussing"],
          a: 3,
          e: "Một việc đang diễn ra (thảo luận) thì bị việc khác cắt ngang (chuông báo cháy, Past Simple) → Past Continuous: were discussing. ‘discuss’ và ‘are discussing’ là hiện tại, ‘have discussed’ là Present Perfect; cả ba sai thì so với ‘went off’."
        },
        {
          q: "‘The phone is ringing!’ — ‘OK, I ___ it.’",
          o: ["will answer", "am going to answer", "answer", "am answering"],
          a: 0,
          e: "Quyết định tức thời ngay lúc nói → will: I'll answer. ‘am going to answer’ dành cho ý định đã có sẵn từ trước, ‘am answering’ là đang làm hoặc kế hoạch đã sắp xếp, ‘answer’ (hiện tại đơn) không diễn tả quyết định tức thời."
        },
        {
          q: "Sorry I'm late. I ___ the wrong bus and had to walk the last two kilometres.",
          o: ["was taking", "have taken", "take", "took"],
          a: 3,
          e: "Kể một việc đã xong trong quá khứ, nối tiếp với ‘had to walk’ → Past Simple: took. ‘was taking’ chỉ việc đang diễn ra (không phải chuỗi sự kiện), ‘have taken’ không đi với ‘had to walk’ (quá khứ), ‘take’ sai thì."
        },
        {
          q: "I can't find Mr Lee. He ___ to a meeting in Leeds, so he won't be back until tomorrow.",
          o: ["has been", "has gone", "had been", "goes"],
          a: 1,
          e: "‘has gone to’ = đã đi và hiện vẫn ở đó (chưa về), khớp với ‘won't be back until tomorrow’. ‘has been to’ = đã từng đến và đã quay về nên mâu thuẫn; ‘had been’ là quá khứ hoàn thành, ‘goes’ là thói quen — cả hai đều không hợp ngữ cảnh."
        },
        {
          q: "By the time we got to the cinema, the film ___.",
          o: ["started", "has started", "had started", "was starting"],
          a: 2,
          e: "By the time + Past Simple (got) → việc xảy ra trước đó chia Past Perfect: had started (phim đã bắt đầu trước khi chúng tôi đến). ‘started’ không thể hiện thứ tự trước–sau; ‘has started’ là hiện tại hoàn thành; ‘was starting’ là đang bắt đầu, sai nghĩa."
        },
        {
          q: "Sorry, I ___ what you mean. Could you explain it again, please?",
          o: ["don't understand", "am not understanding", "wasn't understanding", "won't understand"],
          a: 0,
          e: "‘understand’ là động từ trạng thái, không dùng tiếp diễn → don't understand (hiện tại đơn). ‘am not understanding’ và ‘wasn't understanding’ sai vì lý do đó; ‘won't understand’ là tương lai, không hợp với ‘what you mean’ vừa được nói."
        },
        {
          q: "I'll text you as soon as the meeting ___.",
          o: ["will finish", "is going to finish", "finishes", "would finish"],
          a: 2,
          e: "Sau as soon as / when / before / until, nói về tương lai vẫn dùng thì hiện tại → finishes. Không dùng will, going to hay would trong mệnh đề chỉ thời gian."
        }
      ],
      b2: [
        {
          q: "I ___ three reports since lunch, so I'm ready to send them all.",
          o: ["have been writing", "have written", "wrote", "am writing"],
          a: 1,
          e: "Có số lượng đã hoàn thành (three reports, ready to send) và ‘since lunch’ → Present Perfect đơn: have written (nhấn kết quả/số lượng). ‘have been writing’ nhấn quá trình đang tiếp diễn, không hợp khi việc đã xong; ‘wrote’ không đi với since; ‘am writing’ sai thì."
        },
        {
          q: "Hardly ___ the presentation when the projector broke down.",
          o: ["did I start", "I started", "I had started", "had I started"],
          a: 3,
          e: "Hardly / Scarcely / No sooner đứng đầu câu → đảo ngữ với Past Perfect: ‘Hardly had I started ... when ...’. ‘did I start’ sai thì; ‘I started’ và ‘I had started’ không đảo trợ động từ lên trước chủ ngữ nên sai cấu trúc."
        },
        {
          q: "By the time I retire, I ___ for this company for more than thirty years.",
          o: ["will have been working", "will work", "have worked", "am working"],
          a: 0,
          e: "‘By the time I retire’ là mốc tương lai; việc kéo dài đến mốc đó với ‘for + khoảng thời gian’ → Future Perfect Continuous: will have been working. ‘will work’ không diễn tả khoảng thời gian tích luỹ; ‘have worked’ và ‘am working’ không khớp với mốc tương lai."
        },
        {
          q: "It's the first time I ___ such a long delay at an airport.",
          o: ["experienced", "am experiencing", "have experienced", "had experienced"],
          a: 2,
          e: "Cấu trúc ‘It's the first/second time + S + have/has + V3’. ‘experienced’ (Past Simple) và ‘am experiencing’ sai cấu trúc này; ‘had experienced’ chỉ dùng khi mệnh đề chính ở quá khứ (‘It was the first time I had experienced...’)."
        },
        {
          q: "I ___ call you last night, but I fell asleep on the sofa.",
          o: ["will", "am going to", "have been going to", "was going to"],
          a: 3,
          e: "‘was going to + V’ = dự định trong quá khứ nhưng không thực hiện, khớp với ‘but I fell asleep’. ‘will’ và ‘am going to’ nói về hiện tại/tương lai; ‘have been going to’ không tự nhiên và không đi với ‘last night’."
        },
        {
          q: "I won't sign anything until the lawyer ___ the contract.",
          o: ["will check", "checked", "has checked", "would check"],
          a: 2,
          e: "Sau until vẫn dùng hiện tại cho tương lai; ở đây việc kiểm tra phải HOÀN TẤT trước khi ký nên dùng Present Perfect: has checked (thay cho Future Perfect). ‘will check’ và ‘would check’ không dùng sau until; ‘checked’ là quá khứ, sai thời gian."
        },
        {
          q: "When I was a child, we ___ a small flat above a bakery.",
          o: ["used to have", "would have", "were having", "have had"],
          a: 0,
          e: "‘used to’ dùng được cho cả thói quen lẫn TRẠNG THÁI trong quá khứ (sở hữu một căn hộ). ‘would’ chỉ dùng cho hành động lặp lại, không dùng cho trạng thái; ‘were having’ là việc đang diễn ra tạm thời; ‘have had’ là Present Perfect, không đi với ‘When I was a child’."
        },
        {
          q: "When I met Linh, she ___ in Hue for three years, so she knew the city very well.",
          o: ["lived", "had been living", "has lived", "was living"],
          a: 1,
          e: "Việc kéo dài (for three years) và hoàn tất trước mốc quá khứ ‘When I met Linh’ → Past Perfect Continuous: had been living. ‘lived’ không thể hiện việc xảy ra trước; ‘has lived’ là hiện tại hoàn thành; ‘was living’ không đi với ‘for three years’ để diễn tả khoảng thời gian tích luỹ."
        }
      ]
    },

    /* =====================================================================
       2. CONDITIONALS
       ===================================================================== */
    {
      id: "conditionals",
      title: "Conditionals & Wishes",
      vi: "Câu điều kiện & câu ước",
      icon: "🔀",
      summary:
        "Aptis thường cho nửa câu có ‘if’ rồi bắt chọn nửa còn lại (hoặc ngược lại), kèm bẫy unless / as long as / in case / wish. Chỉ cần nhìn thì của động từ ở mệnh đề if là biết loại câu điều kiện.",
      explain: [
        {
          h: "Zero & First Conditional",
          body:
            "**Zero** (If + hiện tại, hiện tại): sự thật chung, quy trình, điều luôn đúng; có thể thay ‘if’ bằng ‘when’. " +
            "**First** (If + Present Simple, will/can/may/lệnh): tình huống có thật, có thể xảy ra ở tương lai. " +
            "Mệnh đề **if** KHÔNG dùng will. Hai mệnh đề đổi chỗ được; khi mệnh đề if đứng đầu câu thì có dấu phẩy.",
          ex: [
            ["If you heat ice, it melts.", "Nếu đun nóng, đá sẽ tan."],
            ["If you press this button, the machine switches off.", "Nếu nhấn nút này, máy sẽ tắt."],
            ["If the printer breaks down, we'll use the one upstairs.", "Nếu máy in hỏng, chúng ta sẽ dùng máy ở tầng trên."],
            ["If you see Tom, tell him to call me.", "Nếu gặp Tom thì bảo anh ấy gọi cho tôi."]
          ]
        },
        {
          h: "Second Conditional",
          body:
            "**If + Past Simple, would + V**: tình huống **không có thật ở hiện tại** hoặc **rất khó xảy ra** trong tương lai. " +
            "Cũng dùng để khuyên: **If I were you, I'd ...**. Với mọi ngôi đều dùng được **were** (trang trọng), văn nói hay dùng was. " +
            "Không đặt would trong mệnh đề if.",
          ex: [
            ["If I had a car, I would drive to work.", "Nếu có xe hơi, tôi sẽ lái xe đi làm."],
            ["If I were you, I'd talk to your manager first.", "Nếu tôi là bạn, tôi sẽ nói chuyện với quản lý trước."],
            ["What would you do if you won a million pounds?", "Bạn sẽ làm gì nếu trúng một triệu bảng?"]
          ]
        },
        {
          h: "Third & Mixed Conditionals",
          body:
            "**Third**: If + **Past Perfect**, would (not) have + V3 → điều trái với sự thật ở quá khứ (tiếc nuối, trách móc). " +
            "**Mixed** là trộn hai thời: (a) **quá khứ → hiện tại**: If + Past Perfect, would + V (‘nếu hồi đó... thì bây giờ...’); " +
            "(b) **hiện tại → quá khứ**: If + Past Simple, would have + V3 (‘nếu bản chất/tình trạng hiện nay khác thì chuyện hồi đó đã khác’). " +
            "Có thể dùng could/might thay would.",
          ex: [
            ["If you had told me, I would have helped you.", "Nếu bạn đã nói với tôi thì tôi đã giúp bạn rồi."],
            ["If I had studied medicine, I would be a doctor now.", "Nếu hồi đó tôi học y thì bây giờ tôi là bác sĩ."],
            ["If he were more confident, he would have applied for the manager's job last year.", "Nếu anh ấy tự tin hơn thì năm ngoái anh ấy đã ứng tuyển vị trí quản lý."]
          ]
        },
        {
          h: "wish / If only (và It's time)",
          body:
            "**wish / If only + Past Simple**: ước điều trái với hiện tại. " +
            "**wish / If only + Past Perfect**: tiếc nuối về quá khứ. " +
            "**wish + would**: muốn người/việc khác thay đổi (thường là bực mình); không dùng ‘I wish I would’ với cùng một chủ ngữ. " +
            "Tương tự: **It's (high) time + Past Simple** (đã đến lúc phải làm gì). Với wish, dùng **were** cho mọi ngôi: I wish I were taller.",
          ex: [
            ["I wish I lived closer to the office.", "Giá mà tôi sống gần văn phòng hơn."],
            ["If only I had listened to your advice!", "Giá mà tôi đã nghe lời khuyên của bạn!"],
            ["I wish you would stop tapping your pen.", "Tôi ước bạn thôi gõ bút đi."],
            ["It's time you updated your CV.", "Đã đến lúc bạn cập nhật CV của mình."]
          ]
        },
        {
          h: "unless, as long as, in case, otherwise và đảo ngữ",
          body:
            "**unless** = if ... not (bản thân đã có nghĩa phủ định nên không thêm not). " +
            "**as long as / provided (that) / providing** = miễn là, chỉ khi (điều kiện bắt buộc). " +
            "**in case** = phòng khi (làm TRƯỚC), khác với **if** (nếu xảy ra thì MỚI làm). " +
            "**otherwise** = nếu không thì. " +
            "Đảo ngữ trang trọng thay if: **Should you need...** (First), **Were I to...** (Second), **Had I known...** (Third). " +
            "**But for / If it hadn't been for + danh từ** = nếu không nhờ/vì..., đi với would have + V3.",
          ex: [
            ["I won't go to the party unless Tom goes too.", "Tôi sẽ không đi dự tiệc trừ khi Tom cũng đi."],
            ["You can use my laptop as long as you save your files on the server.", "Bạn có thể dùng máy tính xách tay của tôi miễn là bạn lưu tệp lên máy chủ."],
            ["Take a jacket in case it gets cold.", "Mang theo áo khoác phòng khi trời lạnh."],
            ["Should you have any questions, please call me.", "Nếu bạn có câu hỏi nào, xin hãy gọi cho tôi."],
            ["If it hadn't been for your advice, I would have made a terrible mistake.", "Nếu không nhờ lời khuyên của bạn, tôi đã mắc một sai lầm tệ hại."]
          ]
        }
      ],
      tips: [
        "Không đặt will/would trong mệnh đề if: ‘If it will rain’ → ‘If it rains’; ‘If I would have time’ → ‘If I had time’. Ngoại lệ lịch sự (‘if you will wait a moment’) không xuất hiện ở mức Aptis B2.",
        "Nhìn thì ở mệnh đề if để biết loại: hiện tại → First, Past Simple → Second, Past Perfect → Third. Nếu mốc thời gian lệch nhau (một vế quá khứ, một vế ‘now’) hãy nghĩ đến mixed conditional.",
        "‘unless’ đã có nghĩa phủ định nên không viết ‘unless you don't’. ‘in case’ ≠ ‘if’: ‘Take an umbrella in case it rains’ = mang ô trước, phòng khi mưa; ‘if it rains’ = nếu mưa thì mới làm gì đó."
      ],
      b1: [
        {
          q: "If it ___ tomorrow, we'll move the picnic to the canteen.",
          o: ["will rain", "rained", "would rain", "rains"],
          a: 3,
          e: "‘we'll move’ là First Conditional → mệnh đề if dùng Present Simple: rains. Không dùng will/would trong mệnh đề if; ‘rained’ là thì quá khứ (Second Conditional) nên không khớp với ‘we'll move’."
        },
        {
          q: "If the client doesn't reply within 24 hours, we ___ a reminder. It's our standard procedure.",
          o: ["would send", "sent", "send", "have sent"],
          a: 2,
          e: "‘our standard procedure’ → quy trình luôn đúng = Zero Conditional (if + hiện tại, hiện tại): send. ‘would send’ dành cho giả định trái thực tế (Second); ‘sent’ là quá khứ; ‘have sent’ không hợp với vế if ở hiện tại và nghĩa ‘quy trình’."
        },
        {
          q: "If I ___ more free time, I would learn Japanese.",
          o: ["have", "had", "would have", "will have"],
          a: 1,
          e: "‘would learn’ → Second Conditional (không có thật ở hiện tại) → mệnh đề if dùng Past Simple: had. ‘have’ thuộc First Conditional (cần will), còn ‘would have’ và ‘will have’ không được dùng trong mệnh đề if."
        },
        {
          q: "If I were you, I ___ that job offer. It's a great opportunity.",
          o: ["would accept", "will accept", "accept", "had accepted"],
          a: 0,
          e: "‘If I were you’ là cấu trúc khuyên bảo của Second Conditional → would + V: would accept. ‘will accept’ (First), ‘accept’ và ‘had accepted’ không khớp với mệnh đề if dùng ‘were’."
        },
        {
          q: "If we had left earlier, we ___ the train.",
          o: ["would catch", "will catch", "had caught", "would have caught"],
          a: 3,
          e: "If + Past Perfect (had left) → Third Conditional → would have + V3: would have caught. ‘would catch’ (Second) và ‘will catch’ (First) sai thì; ‘had caught’ không phải dạng của mệnh đề chính."
        },
        {
          q: "We'll cancel the picnic ___ the weather improves.",
          o: ["if", "unless", "as long as", "in case"],
          a: 1,
          e: "unless = if ... not: ‘huỷ dã ngoại trừ khi thời tiết khá lên’ → hợp lý. ‘if’ (nếu thời tiết khá lên thì huỷ), ‘as long as’ (miễn là thời tiết khá lên thì huỷ) và ‘in case’ (phòng khi thời tiết khá lên) đều vô lý về nghĩa."
        },
        {
          q: "You can borrow my car ___ you drive carefully.",
          o: ["as long as", "unless", "in case", "although"],
          a: 0,
          e: "as long as = miễn là (điều kiện để được phép). ‘unless’ (trừ khi bạn lái cẩn thận) đảo ngược nghĩa; ‘in case’ (phòng khi) và ‘although’ (mặc dù) không hợp ngữ cảnh."
        },
        {
          q: "I wish I ___ a bigger flat. This one is far too small.",
          o: ["have", "would have", "had", "have had"],
          a: 2,
          e: "wish + Past Simple = ước điều trái với hiện tại: had. ‘have’ (hiện tại) không dùng sau wish cho điều không có thật; ‘would have’ dành cho người/vật khác thay đổi, không dùng với chủ ngữ ‘I’; ‘have had’ sai thì."
        },
        {
          q: "If only I ___ the email before I sent it! Now the whole team knows about my mistake.",
          o: ["checked", "had checked", "would check", "have checked"],
          a: 1,
          e: "If only + Past Perfect = tiếc nuối chuyện đã xảy ra trong quá khứ (‘before I sent it’, ‘Now ... knows’): had checked. ‘checked’ chỉ ước điều trái với hiện tại; ‘would check’ nói về việc thay đổi sau này; ‘have checked’ sai cấu trúc."
        }
      ],
      b2: [
        {
          q: "If I had accepted the offer in Singapore, I ___ in a much bigger flat now.",
          o: ["would live", "would have lived", "will be living", "lived"],
          a: 0,
          e: "Vế if ở quá khứ (had accepted) nhưng kết quả ở HIỆN TẠI (now) → mixed conditional: would + V (would live). ‘would have lived’ là Third thuần nên sai khi có ‘now’; ‘will be living’ và ‘lived’ sai thì."
        },
        {
          q: "If she weren't so careless, she ___ that mistake in the invoice last week.",
          o: ["wouldn't make", "wouldn't have made", "hadn't made", "won't have made"],
          a: 1,
          e: "Vế if nói tính cách hiện tại (weren't so careless) nhưng kết quả ở QUÁ KHỨ (last week) → mixed: would(n't) have + V3: wouldn't have made. ‘wouldn't make’ chỉ hiện tại/tương lai nên sai với ‘last week’; ‘hadn't made’ không phải mệnh đề chính; ‘won't have made’ sai thì."
        },
        {
          q: "___ you need any further assistance, please contact the helpdesk.",
          o: ["Were", "Had", "Should", "Would"],
          a: 2,
          e: "Đảo ngữ trang trọng thay cho ‘If you should need...’ (First Conditional) là Should + S + V. ‘Were’ dùng cho Second (Were I to...), ‘Had’ dùng cho Third (Had I known...), còn ‘Would’ không tạo đảo ngữ điều kiện."
        },
        {
          q: "___ I known about the delay, I would have booked an earlier flight.",
          o: ["Should", "Would", "Did", "Had"],
          a: 3,
          e: "Third Conditional dạng đảo ngữ: Had + S + V3 (= If I had known). ‘Should’ thuộc First Conditional; ‘Would’ và ‘Did’ không tạo thành đảo ngữ điều kiện cho quá khứ."
        },
        {
          q: "I wish you ___ whistling. It's driving me mad.",
          o: ["stop", "would stop", "had stopped", "were stopping"],
          a: 1,
          e: "wish + would + V = bực mình về hành động đang diễn ra và muốn người khác thay đổi: would stop. ‘stop’ sai dạng sau wish; ‘had stopped’ là tiếc nuối về quá khứ; ‘were stopping’ sai nghĩa (không diễn tả yêu cầu dừng hẳn)."
        },
        {
          q: "It's high time we ___ a more reliable booking system.",
          o: ["would introduce", "introduce", "will introduce", "introduced"],
          a: 3,
          e: "It's (high) time + S + Past Simple: ‘đã đến lúc phải làm gì’, dù nghĩa là hiện tại. ‘introduce’ (hiện tại) và ‘will introduce’ sai cấu trúc; ‘would introduce’ không dùng sau It's time."
        },
        {
          q: "I'll write down the address ___ I forget it.",
          o: ["unless", "in case", "if", "as long as"],
          a: 1,
          e: "in case = phòng khi: ghi trước, lúc chưa quên. ‘if’ nghĩa là ghi SAU KHI đã quên → vô lý; ‘unless’ (trừ khi quên) và ‘as long as’ (miễn là quên) sai nghĩa."
        },
        {
          q: "Unless you ___ by nine, we will start the meeting without you.",
          o: ["arrive", "will arrive", "don't arrive", "aren't arriving"],
          a: 0,
          e: "‘unless’ = if ... not, tự nó đã mang nghĩa phủ định nên động từ phải ở dạng khẳng định, hiện tại đơn: arrive. ‘don't arrive’ và ‘aren't arriving’ tạo phủ định kép; ‘will arrive’ không dùng sau unless."
        },
        {
          q: "But for the heavy snow, the conference ___ as planned last Friday.",
          o: ["would go ahead", "had gone ahead", "would have gone ahead", "will go ahead"],
          a: 2,
          e: "‘But for + danh từ’ = nếu không vì (= If it hadn't been for), đi với Third Conditional: would have + V3, khớp mốc quá khứ ‘last Friday’: would have gone ahead. ‘would go ahead’ là hiện tại/tương lai giả định, ‘will go ahead’ là tương lai, ‘had gone ahead’ không phải mệnh đề chính."
        }
      ]
    },

    /* =====================================================================
       3. PASSIVE
       ===================================================================== */
    {
      id: "passive",
      title: "The Passive Voice",
      vi: "Câu bị động",
      icon: "🔄",
      summary:
        "Aptis hay hỏi dạng ‘be + V3’ đúng thì, bị động với modal, ‘have something done’ và cấu trúc báo cáo ‘is said to...’. Bẫy kinh điển: nội động từ (happen, take place) không có bị động.",
      explain: [
        {
          h: "Cấu tạo bị động: be + past participle",
          body:
            "Công thức: **chủ ngữ + be (đúng thì) + V3**. Tân ngữ của câu chủ động trở thành chủ ngữ. " +
            "Dùng khi **người làm không biết, không quan trọng hoặc hiển nhiên**; chỉ thêm **by + người làm** khi thông tin đó quan trọng. " +
            "Chia ‘be’ theo thì: hiện tại đơn **is/are done**, hiện tại tiếp diễn **is/are being done**, quá khứ đơn **was/were done**, quá khứ tiếp diễn **was/were being done**, hiện tại hoàn thành **has/have been done**, quá khứ hoàn thành **had been done**, tương lai **will be done** / **is going to be done**. " +
            "Chỉ động từ **có tân ngữ (transitive)** mới có bị động.",
          ex: [
            ["The invoices were sent yesterday.", "Các hoá đơn đã được gửi hôm qua."],
            ["Rice is grown in many parts of Vietnam.", "Lúa gạo được trồng ở nhiều vùng của Việt Nam."],
            ["The road is being repaired at the moment.", "Con đường hiện đang được sửa."],
            ["The results will be announced on Monday.", "Kết quả sẽ được công bố vào thứ Hai."],
            ["The contract had been signed before I arrived.", "Hợp đồng đã được ký trước khi tôi đến."]
          ]
        },
        {
          h: "Bị động với modal, to-infinitive và gerund",
          body:
            "**Modal + be + V3** (hiện tại/tương lai): must be sent, can be done. " +
            "**Modal perfect + been + V3** (quá khứ): should have been told, must have been deleted. " +
            "**to be + V3**: sau want, need, expect, be going... " +
            "**being + V3**: sau giới từ và động từ như enjoy, hate, avoid, without, about (‘not being invited’). " +
            "Lưu ý **make**: chủ động là ‘make him work’ (không có to) nhưng bị động phải có to: ‘He was made to work’.",
          ex: [
            ["Passwords must be changed every three months.", "Mật khẩu phải được đổi ba tháng một lần."],
            ["The door should have been locked last night.", "Cánh cửa lẽ ra phải được khoá từ tối qua."],
            ["He hates being kept waiting.", "Anh ấy ghét bị bắt phải chờ."],
            ["The students were made to wear uniforms.", "Học sinh bị bắt mặc đồng phục."]
          ]
        },
        {
          h: "have / get something done (thể truyền khiến)",
          body:
            "**have + vật + V3** = nhờ/thuê người khác làm gì cho mình, hoặc bị ai đó làm gì (thường là chuyện không may). " +
            "**get + vật + V3** thân mật hơn. Chia ‘have’ theo thì: I'm having my hair cut; I had my bag stolen. " +
            "Đừng nhầm với **have + người + V nguyên mẫu** (I'll have my assistant book the room). " +
            "Nếu tự mình làm thì dùng câu chủ động: I repaired the laptop myself.",
          ex: [
            ["I'm having my flat painted next week.", "Tuần sau tôi sẽ thuê người sơn lại căn hộ."],
            ["She had her bag stolen on the train.", "Cô ấy bị trộm mất túi trên tàu."],
            ["I must get my car serviced.", "Tôi phải đưa xe đi bảo dưỡng."],
            ["I repaired my laptop myself.", "Tôi tự sửa máy tính xách tay của mình."]
          ]
        },
        {
          h: "Bị động báo cáo: It is said that... / He is said to...",
          body:
            "Dùng với **say, think, believe, report, expect, know, consider, understand** để nói thông tin chung chung, chưa kiểm chứng (tin tức, báo cáo). " +
            "Hai cách: (1) **It + be + V3 + that + mệnh đề**; (2) **Chủ ngữ + be + V3 + to + V**. " +
            "Ở cách (2): **to + V** (cùng thời điểm hoặc tương lai), **to be + V-ing** (đang diễn ra), **to have + V3** (xảy ra TRƯỚC thời điểm nói), **to be + V3** (bị động bên trong).",
          ex: [
            ["It is said that the company will move to Da Nang.", "Nghe nói công ty sẽ chuyển đến Đà Nẵng."],
            ["The company is said to be losing money.", "Nghe nói công ty đang thua lỗ."],
            ["The thief is thought to have entered through the window.", "Người ta cho rằng tên trộm đã vào qua cửa sổ."],
            ["The new office is expected to be opened next year.", "Văn phòng mới dự kiến được khai trương vào năm sau."]
          ]
        },
        {
          h: "Lỗi hay gặp với bị động",
          body:
            "(1) **Nội động từ** (happen, occur, arrive, take place, die, seem, appear) KHÔNG có bị động: ✗ ‘was happened’ → ✓ ‘happened’. " +
            "(2) Động từ chỉ trạng thái như have (sở hữu), fit, suit, resemble, lack thường không dùng bị động. " +
            "(3) Cụm động từ giữ nguyên giới từ/tiểu từ: ‘The complaint is being looked into.’ " +
            "(4) Động từ hai tân ngữ (give, offer, send) thường chọn người nhận làm chủ ngữ: ‘Mr Tran was offered a promotion.’ " +
            "(5) **get + V3** dùng cho việc bất ngờ xảy ra với ai: got fired, got lost, got promoted.",
          ex: [
            ["An accident happened on the motorway this morning.", "Sáng nay có một vụ tai nạn trên đường cao tốc."],
            ["The meeting will take place in Room 4.", "Cuộc họp sẽ diễn ra ở Phòng 4."],
            ["Mr Tran was offered a promotion last week.", "Tuần trước anh Trần được đề nghị thăng chức."],
            ["She got promoted after only a year.", "Cô ấy được thăng chức chỉ sau một năm."]
          ]
        }
      ],
      tips: [
        "Chỉ động từ có tân ngữ mới bị động được. happen, occur, arrive, take place, seem là nội động từ: ‘was happened’ và ‘was taken place’ đều sai. Gặp ‘yesterday + ___ ’ với các động từ này, chọn dạng chủ động.",
        "Công thức luôn là be (chia đúng thì) + V3. Chú ý V3 bất quy tắc (written, taken, built, stolen) và chọn đúng be / been / being: sau modal là ‘be’, sau have/has/had là ‘been’, sau giới từ (about, without, after) là ‘being’.",
        "‘have something done’ là have + vật + V3, không phải V-ing hay V nguyên mẫu. Với ‘is said / believed / reported to...’, nếu việc xảy ra trước thời điểm nói thì dùng ‘to have + V3’; nếu đang diễn ra thì dùng ‘to be + V-ing’ hoặc ‘to + V’."
      ],
      b1: [
        {
          q: "The new software ___ by the IT team last month.",
          o: ["installed", "is installing", "has installed", "was installed"],
          a: 3,
          e: "Phần mềm là vật bị tác động và có mốc ‘last month’ → bị động quá khứ đơn: was installed. ‘installed’ thiếu be; ‘is installing’ và ‘has installed’ là dạng chủ động, sai nghĩa với ‘by the IT team’ và sai thì."
        },
        {
          q: "English ___ in many countries around the world.",
          o: ["speaks", "is spoken", "spoke", "is speaking"],
          a: 1,
          e: "Sự thật chung, chủ ngữ ‘English’ là thứ bị nói → bị động hiện tại đơn: is spoken. Các dạng còn lại là chủ động nên sai nghĩa (tiếng Anh không tự ‘nói’)."
        },
        {
          q: "My car is at the garage. It ___ at the moment.",
          o: ["repairs", "is repaired", "is being repaired", "has repaired"],
          a: 2,
          e: "‘at the moment’ → đang diễn ra và chiếc xe là vật được sửa → bị động hiện tại tiếp diễn: is being repaired. ‘is repaired’ diễn tả sự thật/thói quen, còn ‘repairs’ và ‘has repaired’ là dạng chủ động."
        },
        {
          q: "Don't worry, the report ___ by Friday.",
          o: ["will be finished", "will finish", "is finishing", "finishes"],
          a: 0,
          e: "Báo cáo là thứ được hoàn thành, mốc tương lai ‘by Friday’ → bị động tương lai: will be finished. Các lựa chọn còn lại là chủ động, mà báo cáo không thể tự hoàn thành."
        },
        {
          q: "Look! The office ___ — it looks so much brighter now.",
          o: ["is painting", "has been painted", "was painting", "painted"],
          a: 1,
          e: "‘Look!’ + kết quả nhìn thấy ngay hiện tại → bị động Present Perfect: has been painted. ‘is painting’ và ‘was painting’ là chủ động tiếp diễn; ‘painted’ thiếu be và chỉ việc trong quá khứ."
        },
        {
          q: "I need to ___ my passport renewed before the trip.",
          o: ["make", "do", "have", "take"],
          a: 2,
          e: "have + vật + V3 = nhờ/thuê người khác làm gì cho mình: have my passport renewed. make, do, take không tạo được cấu trúc này."
        },
        {
          q: "All applications must ___ before the end of the month.",
          o: ["send", "been sent", "be sending", "be sent"],
          a: 3,
          e: "Modal + be + V3: must be sent (hồ sơ là vật được gửi). ‘send’ là chủ động, ‘been sent’ chỉ đi sau have/has/had, ‘be sending’ là tiếp diễn chủ động."
        },
        {
          q: "The meeting room ___ when I arrived, so I had to wait outside.",
          o: ["cleaned", "was cleaning", "was being cleaned", "has been cleaned"],
          a: 2,
          e: "Việc dọn đang diễn ra tại một thời điểm trong quá khứ (when I arrived) và phòng là vật được dọn → bị động quá khứ tiếp diễn: was being cleaned. ‘cleaned’ thiếu be, ‘was cleaning’ là chủ động, ‘has been cleaned’ là hiện tại hoàn thành nên sai thì."
        },
        {
          q: "A strange thing ___ at the office yesterday.",
          o: ["happened", "was happened", "has happened", "was happen"],
          a: 0,
          e: "‘happen’ là nội động từ nên không có bị động: happened (Past Simple, có ‘yesterday’). ‘was happened’ và ‘was happen’ sai ngữ pháp; ‘has happened’ (Present Perfect) không đi với mốc xác định ‘yesterday’."
        }
      ],
      b2: [
        {
          q: "The CEO is believed ___ the country before the news broke.",
          o: ["to leave", "to have left", "to be leaving", "having left"],
          a: 1,
          e: "‘is believed’ ở hiện tại, nhưng việc rời đi xảy ra TRƯỚC (before the news broke) → bị động báo cáo + to have + V3: to have left. ‘to leave’ (cùng thời điểm/tương lai) và ‘to be leaving’ (đang diễn ra) sai thời điểm; ‘having left’ sai cấu trúc sau ‘is believed’."
        },
        {
          q: "The factory is reported ___ more than 500 people, although the exact figure is unclear.",
          o: ["to have employed", "to be employed", "employing", "to employ"],
          a: 3,
          e: "Việc tuyển dụng đang diễn ra cùng thời điểm với ‘is reported’ → to + V nguyên mẫu: to employ (nhà máy là bên thuê người). ‘to have employed’ nói việc đã xảy ra trước; ‘to be employed’ mang nghĩa bị động (nhà máy bị thuê); ‘employing’ sai cấu trúc."
        },
        {
          q: "I'm having the contract ___ by a lawyer before I sign it.",
          o: ["checked", "check", "checking", "to check"],
          a: 0,
          e: "have + vật + V3 = nhờ người khác làm, ở đây có ‘by a lawyer’: having the contract checked. ‘check’, ‘checking’, ‘to check’ không đúng cấu trúc (muốn dùng V nguyên mẫu phải viết ‘have a lawyer check the contract’)."
        },
        {
          q: "The error ___ before the report was sent to the client. Now he is furious.",
          o: ["should notice", "should have noticed", "should have been noticed", "should be noticed"],
          a: 2,
          e: "‘The error’ là vật bị tác động, việc đáng lẽ đã phải làm trong quá khứ → modal perfect bị động: should have been noticed. ‘should have noticed’ là chủ động (lỗi không tự ‘nhận ra’); ‘should notice’ và ‘should be noticed’ không mang nghĩa quá khứ (‘before the report was sent’)."
        },
        {
          q: "She was very upset about not ___ to the planning meeting.",
          o: ["inviting", "being invited", "invited", "be invited"],
          a: 1,
          e: "Sau giới từ ‘about’ dùng V-ing; cô ấy là người được mời nên cần bị động dạng gerund: not being invited. ‘inviting’ là chủ động; ‘invited’ và ‘be invited’ không đứng được sau giới từ."
        },
        {
          q: "The new tax is expected ___ next April.",
          o: ["to introduce", "introducing", "being introduced", "to be introduced"],
          a: 3,
          e: "‘is expected’ + to V; thuế là thứ được áp dụng nên cần bị động nguyên mẫu: to be introduced. ‘to introduce’ là chủ động (thuế không tự áp dụng); ‘introducing’ và ‘being introduced’ sai cấu trúc sau ‘is expected’."
        },
        {
          q: "At the last place I worked, we were made ___ overtime almost every weekend.",
          o: ["to work", "work", "working", "worked"],
          a: 0,
          e: "‘make’ ở chủ động đi với V không to (They made us work), nhưng khi chuyển sang BỊ ĐỘNG phải thêm to: were made to work. ‘work’, ‘working’ và ‘worked’ đều sai cấu trúc này."
        },
        {
          q: "Don't worry. Your complaint is currently being looked ___ by our legal team.",
          o: ["on", "for", "into", "up"],
          a: 2,
          e: "‘look into’ = điều tra, xem xét kỹ → bị động giữ nguyên giới từ: is being looked into. ‘look for’ = tìm kiếm, ‘look up’ = tra cứu, ‘look on’ = đứng xem; không cái nào hợp nghĩa với việc xử lý một khiếu nại."
        }
      ]
    },

    /* =====================================================================
       4. RELATIVE CLAUSES
       ===================================================================== */
    {
      id: "relative",
      title: "Relative Clauses",
      vi: "Mệnh đề quan hệ",
      icon: "🔗",
      summary:
        "Aptis hay hỏi chọn who / which / that / whose / where, phân biệt có hay không dấu phẩy, bỏ đại từ quan hệ, và các cấu trúc trang trọng như ‘some of whom’, ‘in which’. Đọc danh từ đứng trước và xem chỗ trống đóng vai gì là xong.",
      explain: [
        {
          h: "who, which, that, whose, where, when",
          body:
            "**who** (người), **which** (vật, sự việc), **that** (người hoặc vật, chỉ trong mệnh đề xác định), " +
            "**whose + danh từ** (sở hữu, cho cả người lẫn vật), **where** (nơi chốn = in/at which), **when** (thời gian = on/at/in which). " +
            "Nếu đại từ làm CHỦ NGỮ của mệnh đề phụ thì sau nó đi thẳng động từ: ‘the man who called’. " +
            "Nếu làm TÂN NGỮ thì sau nó vẫn còn chủ ngữ khác: ‘the man (who) I called’. " +
            "Không lặp lại đại từ: ✗ ‘The report which I wrote it’.",
          ex: [
            ["The colleague who sits opposite me comes from Leeds.", "Đồng nghiệp ngồi đối diện tôi đến từ Leeds."],
            ["This is the book that changed my life.", "Đây là cuốn sách đã thay đổi cuộc đời tôi."],
            ["She's the colleague whose laptop broke yesterday.", "Cô ấy là đồng nghiệp có chiếc laptop bị hỏng hôm qua."],
            ["The café where we met is closed now.", "Quán cà phê nơi chúng ta gặp nhau giờ đã đóng cửa."],
            ["Monday is the day when the office is busiest.", "Thứ Hai là ngày văn phòng bận rộn nhất."]
          ]
        },
        {
          h: "Defining vs non-defining",
          body:
            "**Defining** (xác định): cần thiết để biết nói về ai/cái gì; KHÔNG có dấu phẩy; dùng được **that**; có thể bỏ đại từ nếu nó là tân ngữ. " +
            "**Non-defining** (không xác định): chỉ là thông tin thêm, bỏ đi câu vẫn đủ nghĩa; có dấu phẩy (hoặc ngắt giọng); KHÔNG dùng **that**, KHÔNG bỏ được đại từ; thường đi với tên riêng hoặc danh từ duy nhất (my mother, Hanoi).",
          ex: [
            ["The manager who hired me is leaving.", "Người quản lý đã tuyển tôi sắp nghỉ. (có nhiều quản lý, câu chỉ rõ là ai)"],
            ["My manager, who hired me last year, is leaving.", "Quản lý của tôi, người đã tuyển tôi năm ngoái, sắp nghỉ."],
            ["The conference, which lasted three days, was very useful.", "Hội nghị, kéo dài ba ngày, rất bổ ích."],
            ["Mr Evans, whom you met yesterday, is our new director.", "Ông Evans, người bạn gặp hôm qua, là giám đốc mới của chúng ta."]
          ]
        },
        {
          h: "Bỏ đại từ quan hệ và rút gọn mệnh đề",
          body:
            "Trong mệnh đề **xác định**, nếu đại từ là **tân ngữ** thì có thể bỏ: ‘the book (that) I borrowed’, ‘the people (who) I work with’. " +
            "Nếu là **chủ ngữ** thì KHÔNG được bỏ. " +
            "Có thể **rút gọn**: bỏ đại từ + be, giữ **V-ing** (chủ động) hoặc **V3** (bị động): ‘the man (who is) standing there’, ‘the documents (which were) sent yesterday’.",
          ex: [
            ["The book I borrowed from you is great.", "Cuốn sách tôi mượn của bạn rất hay."],
            ["The colleague I share an office with is on holiday.", "Đồng nghiệp chung phòng với tôi đang đi nghỉ."],
            ["The woman standing by the door is our new colleague.", "Người phụ nữ đứng cạnh cửa là đồng nghiệp mới của chúng ta."],
            ["The photos taken at the party are online now.", "Những bức ảnh chụp ở bữa tiệc giờ đã có trên mạng."]
          ]
        },
        {
          h: "which cho cả mệnh đề; that sau all / only / superlative; what",
          body:
            "**, which** có thể thay cho **cả mệnh đề đứng trước** (luôn có dấu phẩy): ‘She passed, which surprised everyone.’ " +
            "Sau **all, everything, something, nothing, the only, the first, so sánh nhất** thường dùng **that** (hoặc bỏ). " +
            "**what** = ‘the thing that’, không đi sau danh từ: ‘what I meant’ ✓, ‘the thing what I meant’ ✗.",
          ex: [
            ["He arrived late, which annoyed everybody.", "Anh ấy đến muộn, điều đó làm mọi người khó chịu."],
            ["Everything that he said was true.", "Mọi điều anh ấy nói đều đúng."],
            ["It was the best film that I have ever seen.", "Đó là bộ phim hay nhất tôi từng xem."],
            ["I don't know what you mean.", "Tôi không biết bạn có ý gì."]
          ]
        },
        {
          h: "Giới từ + whom/which; some of whom, both of which",
          body:
            "Trang trọng: giới từ đứng TRƯỚC whom/which: ‘the colleague with whom I worked’. " +
            "Thân mật: giới từ đứng cuối mệnh đề: ‘the colleague (who) I worked with’. " +
            "Sau giới từ KHÔNG dùng that hay who. " +
            "Còn có: **some/many/all/both/none + of whom/which** (chỉ dùng trong mệnh đề không xác định), **in which case** (trong trường hợp đó), **the reason why**.",
          ex: [
            ["The woman with whom I share an office is moving to Leeds.", "Người phụ nữ chung văn phòng với tôi sắp chuyển đến Leeds."],
            ["The house in which she grew up is now a museum.", "Ngôi nhà cô ấy lớn lên giờ là một bảo tàng."],
            ["We invited forty guests, many of whom were colleagues.", "Chúng tôi mời bốn mươi khách, nhiều người trong số đó là đồng nghiệp."],
            ["The meeting may overrun, in which case we'll order lunch.", "Cuộc họp có thể kéo dài quá giờ, khi đó chúng ta sẽ đặt bữa trưa."]
          ]
        }
      ],
      tips: [
        "Mệnh đề không xác định (có dấu phẩy) không dùng that và không bỏ được đại từ: ✗ ‘My sister, that lives in Hue’ → ✓ ‘My sister, who lives in Hue’. Đây là bẫy rất quen thuộc.",
        "Không lặp lại chủ ngữ/tân ngữ: ✗ ‘the report which I wrote it’. Chỉ bỏ được đại từ khi nó là tân ngữ (có chủ ngữ khác ngay sau): ‘the man I met’ ✓, nhưng ‘the man met me’ ✗ (khi muốn nói ‘người đã gặp tôi’ phải giữ who).",
        "Khi làm bài, hãy nhìn danh từ đứng trước (người, vật, nơi chốn, thời gian) rồi tự hỏi chỗ trống đóng vai gì: chủ ngữ (who/which/that), sở hữu (whose + danh từ), nơi chốn (where), cả mệnh đề (which sau dấu phẩy). Sau giới từ chỉ dùng whom/which."
      ],
      b1: [
        {
          q: "The woman ___ works in reception is called Hana.",
          o: ["which", "who", "whose", "whom"],
          a: 1,
          e: "Danh từ chỉ người và chỗ trống là CHỦ NGỮ của ‘works’ → who. ‘which’ dành cho vật, ‘whose’ cần danh từ theo sau, ‘whom’ chỉ dùng cho tân ngữ."
        },
        {
          q: "This is the laptop ___ I bought last week.",
          o: ["who", "what", "that", "whose"],
          a: 2,
          e: "Danh từ chỉ vật, mệnh đề xác định (không có dấu phẩy) → that (cũng có thể bỏ). ‘who’ dành cho người, ‘what’ không đi sau danh từ, ‘whose’ cần danh từ theo sau."
        },
        {
          q: "That's the man ___ car was stolen last night.",
          o: ["who", "which", "whom", "whose"],
          a: 3,
          e: "Chỉ sở hữu (xe của người đàn ông) và có danh từ ‘car’ theo sau → whose. ‘who’, ‘whom’, ‘which’ đứng một mình không thay được cho ‘his’."
        },
        {
          q: "The restaurant ___ we had lunch was very noisy.",
          o: ["where", "who", "which", "whose"],
          a: 0,
          e: "Danh từ chỉ nơi chốn và sau chỗ trống đã có đủ chủ ngữ + động từ (we had lunch) → where (= at which). ‘which’ sẽ cần giới từ (at which / which ... at); ‘who’ dành cho người; ‘whose’ chỉ sở hữu."
        },
        {
          q: "My brother, ___ lives in Canada, is visiting us in July.",
          o: ["that", "who", "whose", "where"],
          a: 1,
          e: "Đây là mệnh đề không xác định (có dấu phẩy, thông tin thêm) nên không dùng that; người làm chủ ngữ → who. ‘whose’ cần danh từ theo sau, ‘where’ chỉ nơi chốn."
        },
        {
          q: "Which sentence about a report is correct?",
          o: [
            "The report that I wrote it was long.",
            "The report what I wrote was long.",
            "The report who I wrote was long.",
            "The report that I wrote was long."
          ],
          a: 3,
          e: "‘that’ đã thay cho ‘the report’ (tân ngữ của wrote) nên không được lặp lại ‘it’. ‘what’ không đi sau danh từ; ‘who’ chỉ dùng cho người."
        },
        {
          q: "She passed her driving test at the first attempt, ___ made her parents very proud.",
          o: ["that", "what", "which", "who"],
          a: 2,
          e: "Sau dấu phẩy, ‘, which’ thay cho cả mệnh đề đứng trước (việc cô ấy đỗ). ‘that’ không dùng sau dấu phẩy; ‘what’ không làm đại từ quan hệ trong câu này; ‘who’ chỉ dùng cho người."
        },
        {
          q: "The people ___ I work with are very friendly.",
          o: ["who", "whose", "which", "where"],
          a: 0,
          e: "Danh từ chỉ người, làm tân ngữ của ‘work with’ (giới từ để cuối mệnh đề) → who (hoặc whom/that, hoặc bỏ). ‘whose’ cần danh từ theo sau, ‘which’ dành cho vật, ‘where’ chỉ nơi chốn."
        },
        {
          q: "I'll never forget the day ___ I started my first job.",
          o: ["which", "who", "when", "where"],
          a: 2,
          e: "Danh từ chỉ thời gian và mệnh đề phía sau đủ chủ-vị → when (= on which). ‘which’ cần giới từ (on which), ‘who’ dành cho người, ‘where’ dành cho nơi chốn."
        }
      ],
      b2: [
        {
          q: "The woman ___ I co-wrote the report is now on maternity leave.",
          o: ["who with", "whom with", "with who", "with whom"],
          a: 3,
          e: "Giới từ đứng trước đại từ quan hệ (văn phong trang trọng) thì đại từ phải là whom: with whom. ‘who with’ và ‘whom with’ sai trật tự; ‘with who’ sai vì sau giới từ phải dùng whom, không dùng who."
        },
        {
          q: "We interviewed fifteen candidates, ___ had previous experience in sales.",
          o: ["some of which", "some of whom", "some of who", "some whom"],
          a: 1,
          e: "Lượng từ + of + whom (chỉ người) làm chủ ngữ của mệnh đề không xác định: some of whom. ‘some of which’ dùng cho vật; ‘some of who’ sai vì sau of phải là whom; ‘some whom’ thiếu of."
        },
        {
          q: "The documents ___ to the client yesterday contained several errors.",
          o: ["sent", "sending", "were sent", "which sending"],
          a: 0,
          e: "Rút gọn mệnh đề quan hệ bị động (which were sent → sent): sent. ‘sending’ là chủ động (tài liệu không tự gửi); ‘were sent’ khiến câu có hai động từ chính không được nối; ‘which sending’ sai cấu trúc."
        },
        {
          q: "The trip may be postponed, ___ we will refund your deposit in full.",
          o: ["which case", "in which case", "that case", "in what case"],
          a: 1,
          e: "‘in which case’ = trong trường hợp đó, dùng để nối hai mệnh đề trang trọng. ‘which case’ thiếu giới từ in; ‘that case’ không phải đại từ quan hệ nên không nối được mệnh đề; ‘in what case’ sai cấu trúc."
        },
        {
          q: "She was the first woman ___ ever led the company.",
          o: ["which", "whose", "that", "whom"],
          a: 2,
          e: "Sau ‘the first / the only / so sánh nhất’ thường dùng that, kể cả với người; ở đây ‘that’ làm chủ ngữ của ‘led’. ‘which’ dùng cho vật, ‘whose’ cần danh từ theo sau, ‘whom’ không làm chủ ngữ được."
        },
        {
          q: "That is exactly ___ I meant when I said we needed more flexibility.",
          o: ["that", "which", "who", "what"],
          a: 3,
          e: "what = ‘the thing that’, tự mang nghĩa của cả tiền ngữ: ‘exactly what I meant’. ‘that’ và ‘which’ cần một danh từ đứng ngay trước làm tiền ngữ, mà ‘exactly’ không phải danh từ; ‘who’ chỉ dùng cho người."
        },
        {
          q: "Which sentence about a hotel is grammatically correct?",
          o: [
            "The hotel, in which we stayed, was spotless.",
            "The hotel, in that we stayed, was spotless.",
            "The hotel, which we stayed, was spotless.",
            "The hotel, where we stayed in, was spotless."
          ],
          a: 0,
          e: "Mệnh đề không xác định + giới từ đứng trước đại từ: in which. ‘in that’ sai vì that không đi sau giới từ; ‘which we stayed’ thiếu giới từ in; ‘where we stayed in’ thừa giới từ vì where đã bao hàm in which."
        },
        {
          q: "The two proposals, ___ were rejected, would have cost over a million pounds.",
          o: ["both which", "both of them", "both of which", "both of that"],
          a: 2,
          e: "Lượng từ + of which nối mệnh đề không xác định: both of which. ‘both of them’ là đại từ thường, không nối được hai mệnh đề bằng dấu phẩy; ‘both which’ thiếu of; ‘both of that’ sai vì that không đi sau giới từ."
        },
        {
          q: "In which sentence can the relative pronoun be left out?",
          o: [
            "The colleague who sits next to me is moving to Leeds.",
            "The email which came this morning is from HR.",
            "The colleague who I sit next to is moving to Leeds.",
            "The students who attend the course are mostly adults."
          ],
          a: 2,
          e: "Chỉ bỏ được đại từ quan hệ khi nó là TÂN NGỮ trong mệnh đề xác định: ‘who I sit next to’ (I là chủ ngữ mới) → ‘The colleague I sit next to is moving to Leeds.’ Ở ba câu còn lại, who/which là CHỦ NGỮ của sits / came / attend nên không được bỏ."
        }
      ]
    }
  );
})();
