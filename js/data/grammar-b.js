(function () {
  const D = (globalThis.AptisData = globalThis.AptisData || {});
  D.grammar = D.grammar || [];
  D.grammar.push(
    /* =====================================================================
       1. REPORTED SPEECH
       ===================================================================== */
    {
      id: "reported",
      title: "Reported Speech",
      vi: "Câu tường thuật: lùi thì, đổi đại từ, reporting verbs",
      icon: "💬",
      summary:
        "Aptis hay hỏi lùi thì và đổi từ chỉ thời gian/nơi chốn, cấu trúc đi sau reporting verbs (suggest, advise, admit, deny, promise…) và trật tự từ trong câu hỏi tường thuật.",
      explain: [
        {
          h: "Lùi thì (backshift)",
          body:
            "Khi động từ tường thuật ở **quá khứ** (said, told, asked…), động từ trong câu gốc thường **lùi một bậc**: present simple → **past simple**; present continuous → **past continuous**; present perfect → **past perfect**; will → **would**; can → **could**; may → **might**; must → **had to**. Past simple có thể giữ nguyên hoặc lùi thành **past perfect**. Các modal **would, could, should, might, ought to** giữ nguyên.",
          ex: [
            ["“I work in HR,” she said. → She said (that) she worked in HR.", "Cô ấy nói cô ấy làm ở phòng nhân sự."],
            ["“We have finished the report,” they told us. → They told us (that) they had finished the report.", "Họ nói với chúng tôi là họ đã hoàn thành báo cáo."],
            ["“I'll call you,” he said. → He said he would call me.", "Anh ấy nói sẽ gọi cho tôi."],
            ["“I can't come,” Mia said. → Mia said she couldn't come.", "Mia nói cô ấy không thể đến."]
          ]
        },
        {
          h: "Đổi đại từ, từ chỉ thời gian và nơi chốn",
          body:
            "Đại từ và tính từ sở hữu đổi theo **người nói / người nghe** (I → he/she, my → his/her, you → me/him/them). Từ chỉ thời gian và nơi chốn đổi theo mốc kể lại: **now → then**, **today → that day**, **tonight → that night**, **yesterday → the day before / the previous day**, **tomorrow → the next day / the following day**, **last week → the week before**, **next month → the following month**, **ago → before**, **here → there**, **this/these → that/those**. Nếu kể lại ngay trong cùng ngày, cùng nơi thì **không cần đổi**.",
          ex: [
            ["“I'll see you here tomorrow,” Ben said to me. → Ben told me he would see me there the next day.", "Ben nói sẽ gặp tôi ở đó vào ngày hôm sau."],
            ["“I bought this laptop two days ago,” she said. → She said she had bought that laptop two days before.", "Cô ấy nói đã mua chiếc laptop đó hai ngày trước đó."],
            ["“We're meeting the client today,” he said. → He said they were meeting the client that day.", "Anh ấy nói hôm đó họ gặp khách hàng."]
          ]
        },
        {
          h: "Reporting verbs và cấu trúc đi kèm",
          body:
            "**say** không có tân ngữ trực tiếp (said that…, said to me that…), còn **tell** luôn có người nghe (told me that…). Các reporting verbs chia theo mẫu: **V + to V**: promise, offer, refuse, agree, threaten, claim; **V + O + to V**: advise, ask, tell, warn, remind, invite, encourage, order, persuade; **V + V-ing**: suggest, admit, deny, recommend; **V + that-clause**: suggest, admit, deny, promise, explain, claim (suggest that + S + should + V, hoặc chỉ V nguyên mẫu); **V + giới từ + V-ing**: apologise for, insist on, accuse sb of, blame sb for, congratulate sb on. **Không** nói suggest me to V hay admit to V.",
          ex: [
            ["She promised to send the file by noon.", "Cô ấy hứa sẽ gửi tập tin trước trưa."],
            ["My manager advised me to check the contract.", "Quản lý khuyên tôi kiểm tra hợp đồng."],
            ["Tom suggested taking the early train.", "Tom đề nghị đi chuyến tàu sớm."],
            ["Tom suggested that we should take the early train.", "Tom đề nghị chúng ta nên đi chuyến tàu sớm."],
            ["He admitted losing the keys, and she denied taking the money.", "Anh ấy thừa nhận làm mất chìa khoá, còn cô ấy chối là đã lấy tiền."],
            ["They apologised for being late.", "Họ xin lỗi vì đến muộn."]
          ]
        },
        {
          h: "Câu hỏi và mệnh lệnh tường thuật",
          body:
            "**Câu hỏi Yes/No**: ask / wonder + **if / whether** + S + V (lùi thì), **không đảo ngữ**, không dùng do/does/did, không có dấu ?. **Câu hỏi Wh-**: ask + từ để hỏi + S + V. **Mệnh lệnh / yêu cầu**: tell / ask / order + O + **(not) to V**. Khi nói về lựa chọn giữa các phương án dùng **whether + to V** (whether to accept); **if** không đi với to V.",
          ex: [
            ["“Do you speak French?” she asked me. → She asked me if I spoke French.", "Cô ấy hỏi tôi có nói được tiếng Pháp không."],
            ["“Where is the meeting room?” he asked. → He asked where the meeting room was.", "Anh ấy hỏi phòng họp ở đâu."],
            ["“Don't be late,” the manager told us. → The manager told us not to be late.", "Quản lý dặn chúng tôi đừng đến muộn."],
            ["“Could you open the window?” she asked. → She asked me to open the window.", "Cô ấy nhờ tôi mở cửa sổ."],
            ["I couldn't decide whether to accept the offer.", "Tôi không quyết định được có nên nhận lời đề nghị hay không."]
          ]
        },
        {
          h: "Khi nào không cần lùi thì",
          body:
            "Không lùi thì khi: (1) động từ tường thuật ở **hiện tại / hiện tại hoàn thành** (She says she is busy); (2) nội dung là **sự thật hiển nhiên** hoặc **vẫn đúng ở thời điểm kể** (The teacher said water boils at 100°C); (3) động từ đã là **would, could, should, might, ought to, used to** hoặc **past perfect**; (4) câu điều kiện loại 2 và 3 giữ nguyên. Lưu ý: khi đã đổi từ chỉ thời gian sang then / the day before / the following week thì câu phải được lùi thì cho nhất quán.",
          ex: [
            ["The teacher said that water boils at 100°C.", "Cô giáo nói nước sôi ở 100°C."],
            ["Paula says she is busy this week.", "Paula nói tuần này cô ấy bận."],
            ["“We should leave early,” Jim said. → Jim said we should leave early.", "Jim nói chúng ta nên đi sớm."],
            ["“If I had more time, I would learn Spanish,” she said. → She said that if she had more time, she would learn Spanish.", "Cô ấy nói nếu có thêm thời gian thì cô ấy sẽ học tiếng Tây Ban Nha."]
          ]
        }
      ],
      tips: [
        "Lỗi hay gặp: “She said me…” hoặc “He told that…”. Quy tắc: **said (to me)** nhưng **told me**. Câu hỏi tường thuật không đảo ngữ: ✗ She asked where did I live → ✓ She asked where I lived.",
        "Nhớ khung của reporting verbs: suggest + V-ing / that + S + (should) V (✗ suggest me to V); admit/deny + V-ing; advise/remind/warn + O + to V; promise/refuse/threaten/claim + to V; insist on / apologise for + V-ing.",
        "Mẹo Aptis: thấy từ chỉ thời gian đã đổi (then, the day before, the following week, there) nghĩa là câu phải lùi thì. Modal would/could/should/might/ought to thì giữ nguyên, đừng ‘lùi’ thêm. Câu điều kiện loại 2, 3 cũng giữ nguyên."
      ],
      b1: [
        {
          q: "When I phoned her last night, Paula said she ___ dinner at that moment.",
          o: ["is having", "was having", "has had", "will have"],
          a: 1,
          e: "Đáp án đúng: was having. Động từ tường thuật said ở quá khứ và sự việc đã xong (tối qua), nên present continuous “I am having dinner” lùi thành past continuous. “is having” không lùi thì nên không hợp với at that moment (mốc quá khứ); “has had” và “will have” sai thì và sai nghĩa."
        },
        {
          q: "The receptionist told ___ that the meeting had been cancelled.",
          o: ["me", "to me", "for me"],
          a: 0,
          e: "Đáp án đúng: me. Tell luôn đi thẳng với người nghe (told me that…). “to me” dùng với say (said to me that…), còn “for me” sai giới từ."
        },
        {
          q: "“I'll send you the file tomorrow,” Jack said. → Jack said he ___ me the file the next day.",
          o: ["will send", "sends", "has sent", "would send"],
          a: 3,
          e: "Đáp án đúng: would send. Will lùi thành would, và the next day (đã đổi từ tomorrow) cho thấy đây là tương lai tính từ mốc quá khứ. “will send” không lùi thì nên mâu thuẫn với the next day; “sends” và “has sent” sai thì và sai nghĩa."
        },
        {
          q: "“Don't touch the screen,” the technician said. → The technician told us ___ the screen.",
          o: ["don't touch", "not touch", "not to touch", "not touching"],
          a: 2,
          e: "Đáp án đúng: not to touch. Mệnh lệnh tường thuật dùng tell + O + (not) to V. “don't touch” giữ nguyên dạng câu trực tiếp; “not touch” thiếu to; “not touching” sai dạng động từ sau tell + O."
        },
        {
          q: "“Where do you live?” she asked me. → She asked me where ___.",
          o: ["I lived", "do I live", "did I live", "I would live"],
          a: 0,
          e: "Đáp án đúng: I lived. Câu hỏi tường thuật dùng trật tự câu khẳng định (chủ ngữ + động từ) và lùi thì (live → lived). “do I live” và “did I live” vẫn đảo trợ động từ như câu hỏi trực tiếp; “I would live” đổi nghĩa thành giả định."
        },
        {
          q: "“I have lost my passport,” he said. → He said he ___ his passport.",
          o: ["has lost", "would lose", "was losing", "had lost"],
          a: 3,
          e: "Đáp án đúng: had lost. Present perfect lùi thành past perfect khi tường thuật. “has lost” không lùi thì; “would lose” là tương lai; “was losing” là quá khứ tiếp diễn nên sai nghĩa (hộ chiếu đã mất rồi, không phải đang mất)."
        },
        {
          q: "The manager asked me ___ I had finished the report.",
          o: ["that", "what", "if"],
          a: 2,
          e: "Đáp án đúng: if. Câu hỏi Yes/No tường thuật dùng if hoặc whether. “that” dành cho câu kể; “what” là từ hỏi và sẽ đòi hỏi một thành phần còn thiếu, trong khi mệnh đề I had finished the report đã đầy đủ."
        },
        {
          q: "My boss ___ me to finish the report by Friday.",
          o: ["said", "told", "suggested", "admitted"],
          a: 1,
          e: "Đáp án đúng: told. Mẫu V + O + to V đi với tell (told me to finish). “said me to finish” sai; suggested và admitted không dùng cấu trúc O + to V (suggested finishing / that…, admitted finishing)."
        },
        {
          q: "She ___ going to the cinema, but we preferred to stay at home.",
          o: ["suggested", "invited", "told", "persuaded"],
          a: 0,
          e: "Đáp án đúng: suggested. Suggest đi với V-ing (suggested going). Invite, tell và persuade phải có tân ngữ + to V (invited us to go) nên không đi với going."
        },
        {
          q: "Lisa told me in March, “I saw him yesterday.” Now it is June, and I report it: Lisa told me she had seen him ___.",
          o: ["yesterday", "the day before", "the day after", "tomorrow"],
          a: 1,
          e: "Đáp án đúng: the day before. Past simple lùi thành had seen và yesterday đổi thành the day before (hoặc the previous day) khi kể lại ở thời điểm khác. “yesterday” chỉ đúng nếu kể lại ngay hôm đó, còn ở đây đã cách vài tháng; “the day after” và “tomorrow” chỉ tương lai nên mâu thuẫn với had seen."
        }
      ],
      b2: [
        {
          q: "I asked the HR officer ___ to apply now or wait until the next recruitment round.",
          o: ["if", "that", "whether", "what"],
          a: 2,
          e: "Đáp án đúng: whether. Khi nói về lựa chọn giữa các phương án (…or…) và đi với to V thì dùng whether + to V; if không đi với to-infinitive. “that” không dùng cho câu hỏi; “what to apply” đòi tân ngữ và không hợp với or wait."
        },
        {
          q: "The auditor suggested that the department ___ its expenses more closely.",
          o: ["to monitor", "should monitor", "monitoring"],
          a: 1,
          e: "Đáp án đúng: should monitor. Suggest that + S + (should) + V nguyên mẫu (cũng có thể bỏ should, dùng nguyên mẫu). Không dùng suggest that + S + to V; “monitoring” không có dạng động từ chia nên không làm vị ngữ của the department."
        },
        {
          q: "“I've been waiting since nine,” she complained when the bus finally arrived. → She complained that she ___ since nine.",
          o: ["has been waiting", "would be waiting", "will have been waiting", "had been waiting"],
          a: 3,
          e: "Đáp án đúng: had been waiting. Present perfect continuous lùi thành past perfect continuous. “has been waiting” không lùi thì (động từ tường thuật complained ở quá khứ); “would be waiting” và “will have been waiting” là dạng tương lai, sai nghĩa."
        },
        {
          q: "Despite our protests, Karen insisted ___ the whole bill herself.",
          o: ["to pay", "on paying", "for paying", "paying"],
          a: 1,
          e: "Đáp án đúng: on paying. Insist đi với giới từ on + V-ing (insist on paying). “to pay” và “for paying” sai giới từ; “paying” trực tiếp thiếu giới từ on."
        },
        {
          q: "He denied ___ the document, although the system log showed that he had.",
          o: ["having deleted", "to have deleted", "to delete", "deleted"],
          a: 0,
          e: "Đáp án đúng: having deleted. Deny + V-ing (dạng hoàn thành having + V3 nhấn mạnh việc xảy ra trước). Deny không đi với to V nên “to have deleted” và “to delete” sai; “deleted” đứng một mình sau deny không đúng cấu trúc."
        },
        {
          q: "“If I had checked the schedule, I wouldn't have missed the flight,” Ravi said. → Ravi said that if he had checked the schedule, he ___ the flight.",
          o: ["won't have missed", "hadn't missed", "wouldn't miss", "wouldn't have missed"],
          a: 3,
          e: "Đáp án đúng: wouldn't have missed. Câu điều kiện loại 3 đã ở past perfect / would have + V3 nên khi tường thuật vẫn giữ nguyên. “won't have missed” đổi would thành will (lùi ngược); “hadn't missed” sai cấu trúc mệnh đề chính; “wouldn't miss” biến thành giả định hiện tại."
        },
        {
          q: "Martin claimed ___ the invoice before the deadline, but nobody could find a record of it.",
          o: ["to sending", "to have sent", "that he send", "him to send"],
          a: 1,
          e: "Đáp án đúng: to have sent. Claim + to V (to have + V3 cho việc đã xảy ra trước đó). “to sending” sai dạng; “that he send” (nguyên mẫu giả định) chỉ dùng sau suggest/insist/demand, không dùng sau claim; claim không có mẫu O + to V."
        },
        {
          q: "“What have you been doing since you left university?” the manager asked me. → The manager asked me what I ___ since I had left university.",
          o: ["was doing", "did I do", "had been doing", "would do"],
          a: 2,
          e: "Đáp án đúng: had been doing. Present perfect continuous lùi thành past perfect continuous. Câu hỏi tường thuật không đảo ngữ nên “did I do” sai; “was doing” không đi với since (cần thì hoàn thành); “would do” sai nghĩa."
        },
        {
          q: "Her doctor warned her ___ too much coffee.",
          o: ["against drinking", "against drink", "for drinking", "to drinking"],
          a: 0,
          e: "Đáp án đúng: against drinking. Warn sb against + V-ing (cũng có thể nói warn sb not to drink). “against drink” sai vì sau giới từ cần V-ing khi có tân ngữ too much coffee; “for drinking” và “to drinking” sai giới từ."
        },
        {
          q: "The CEO ___ the staff that the offices would be closed over the holiday.",
          o: ["told", "said", "explained", "suggested"],
          a: 0,
          e: "Đáp án đúng: told. Tell + O + that-clause. Say, explain và suggest không đi thẳng với người nghe; muốn dùng phải thêm to (said to the staff, explained to the staff, suggested to the staff)."
        }
      ]
    },

    /* =====================================================================
       2. MODAL VERBS
       ===================================================================== */
    {
      id: "modals",
      title: "Modal Verbs",
      vi: "Động từ khuyết thiếu: can, could, must, should, would…",
      icon: "🔑",
      summary:
        "Aptis hay hỏi must / have to / mustn't / don't have to, suy đoán (must / can't / might + have + V3), should have / needn't have, be able to và phân biệt would với used to.",
      explain: [
        {
          h: "Khả năng, xin phép, đề nghị (can, could, may, be able to)",
          body:
            "**can** = khả năng hoặc được phép ở hiện tại; **could** = khả năng chung trong quá khứ hoặc cách hỏi lịch sự; **may** trang trọng hơn khi xin phép. Với **một thành công cụ thể trong quá khứ** dùng **was/were able to** hoặc **managed to** (không dùng could ở câu khẳng định). Modal **không có dạng nguyên mẫu hay -ing**, nên sau to / will / have dùng **be able to**. Đề nghị giúp: **Shall I…? / Can I…?**; nhờ vả lịch sự: **Could / Would you…?**.",
          ex: [
            ["I could swim when I was five.", "Hồi năm tuổi tôi đã biết bơi."],
            ["We were able to book the last two seats.", "Chúng tôi đã đặt được hai ghế cuối cùng."],
            ["Could I use your phone, please?", "Tôi dùng điện thoại của bạn được không ạ?"],
            ["Shall I carry that for you?", "Để tôi xách giúp bạn nhé?"],
            ["She'll be able to start next month.", "Tháng sau cô ấy sẽ có thể bắt đầu."]
          ]
        },
        {
          h: "Nghĩa vụ, cấm đoán, không cần thiết (must, have to, mustn't, needn't)",
          body:
            "**must** = người nói thấy cần thiết / quy định; **have to** = bắt buộc từ bên ngoài (luật, nội quy, cấp trên) và là dạng dùng cho quá khứ (**had to**) và tương lai (**will have to**). **mustn't** = **cấm**. **don't have to / needn't** = **không cần** (được phép nhưng không bắt buộc). Quá khứ của must (nghĩa vụ) là **had to**. **needn't have + V3** = đã làm nhưng hóa ra không cần; **didn't need to** = không cần (và có thể đã không làm).",
          ex: [
            ["Visitors must sign in at reception.", "Khách phải ký tên ở quầy lễ tân."],
            ["I have to wear a uniform at work.", "Tôi phải mặc đồng phục khi đi làm."],
            ["You mustn't use your phone during the exam.", "Bạn không được dùng điện thoại trong lúc thi."],
            ["You don't have to come in on Saturday.", "Thứ Bảy bạn không cần đến công ty."],
            ["We needn't have hurried; the meeting was postponed.", "Lẽ ra chúng tôi không cần vội; cuộc họp bị hoãn."]
          ]
        },
        {
          h: "Lời khuyên, chỉ trích, tiếc nuối (should, ought to, had better, should have)",
          body:
            "**should** và **ought to** = nên (ý kiến, lời khuyên); **had better + V** = tốt hơn là nên (có hậu quả nếu không làm; dùng cho hiện tại/tương lai); **could** = gợi ý một khả năng. Phủ định: **shouldn't**, **oughtn't to**. **If I were you, I'd…** là cách khuyên mềm mỏng. Về quá khứ: **should have + V3** = lẽ ra nên làm (nhưng đã không làm), **shouldn't have + V3** = lẽ ra không nên làm (mà đã làm), **could have + V3** = lẽ ra đã có thể làm. Sau should / had better luôn là **động từ nguyên mẫu không to** (chỉ ought to có **to**).",
          ex: [
            ["You should see a doctor about that cough.", "Bạn nên đi khám về cái ho đó."],
            ["You'd better leave now or you'll miss the train.", "Bạn nên đi ngay, không thì lỡ tàu."],
            ["If I were you, I'd check the contract first.", "Nếu tôi là bạn, tôi sẽ kiểm tra hợp đồng trước."],
            ["You should have told me earlier.", "Lẽ ra bạn nên nói với tôi sớm hơn."],
            ["We could have won the contract if we had been better prepared.", "Lẽ ra chúng tôi đã có thể giành hợp đồng nếu chuẩn bị tốt hơn."]
          ]
        },
        {
          h: "Suy đoán: hiện tại và quá khứ",
          body:
            "Mức chắc chắn giảm dần: **must** (chắc chắn là) > **should / ought to** (hẳn là, theo dự kiến) > **may / might / could** (có thể) > **can't / couldn't** (chắc chắn không). Phủ định của must khi suy đoán là **can't**, **không** phải mustn't. Hiện tại: modal + be (+ V-ing). Quá khứ: **must have + V3** (chắc chắn đã), **can't / couldn't have + V3** (chắc chắn đã không), **may / might / could have + V3** (có thể đã). Hãy tìm manh mối trong câu: bằng chứng rõ → must / can't; chỉ phỏng đoán (perhaps, I'm not sure) → might / may.",
          ex: [
            ["That must be Tom — he said he'd arrive at six.", "Chắc là Tom — anh ấy nói sáu giờ sẽ đến."],
            ["She can't be at home; the lights are off.", "Cô ấy không thể ở nhà; đèn tắt hết."],
            ["He must have missed the bus; he's never late.", "Chắc anh ấy lỡ xe buýt; anh ấy chưa bao giờ trễ."],
            ["She can't have read the email; she hasn't replied.", "Chắc cô ấy chưa đọc email; cô ấy chưa trả lời."],
            ["I might have left my keys in the car.", "Có thể tôi để quên chìa khoá trong xe."]
          ]
        },
        {
          h: "would, used to và cách nói lịch sự",
          body:
            "**would** chỉ **thói quen lặp lại trong quá khứ**, nhưng chỉ dùng với **hành động**; với **trạng thái** (have, be, live, like) phải dùng **used to**. **used to** chỉ cả thói quen lẫn trạng thái cũ (phủ định/nghi vấn: didn't use to). **would** còn dùng để nhờ vả, đề nghị lịch sự (Would you mind…? Would you like…?), khuyên (I'd…), và **would rather + V** (thích hơn). Đừng nhầm với **be used to + V-ing** (quen với).",
          ex: [
            ["When I was a child, we would visit my grandparents every Sunday.", "Hồi nhỏ, Chủ nhật nào chúng tôi cũng đến thăm ông bà."],
            ["We used to have a small house by the sea.", "Chúng tôi từng có một ngôi nhà nhỏ ven biển."],
            ["Would you mind closing the window?", "Bạn có phiền đóng cửa sổ không?"],
            ["I'd rather take the train than drive.", "Tôi thích đi tàu hơn là lái xe."]
          ]
        }
      ],
      tips: [
        "Sau modal luôn là động từ nguyên mẫu không to, không thêm -s/-ing (✗ She can to swim, ✗ He musts go). Chỉ ought to có to. Câu hỏi và phủ định không mượn do/does: Can you…? You can't…",
        "mustn't ≠ don't have to: mustn't = CẤM, don't have to / needn't = KHÔNG CẦN. Suy đoán phủ định dùng can't (✗ mustn't). Quá khứ của must (nghĩa vụ) là had to; sau to / will / have dùng be able to chứ không dùng can.",
        "Mẹo Aptis: nhìn manh mối để chọn mức chắc chắn: bằng chứng rõ (the lights are off, she hasn't replied) → must have / can't have; ‘perhaps, I'm not sure’ → might / may have. Câu chê trách ‘lẽ ra’ → should have + V3; ‘đã làm mà hóa ra không cần’ → needn't have + V3."
      ],
      b1: [
        {
          q: "In this company, all visitors ___ sign in at reception before entering the building.",
          o: ["have to", "might", "can't", "needn't"],
          a: 0,
          e: "Đáp án đúng: have to. Đây là nội quy bắt buộc nên dùng have to (phải). “might” chỉ khả năng; “can't” (không được) và “needn't” (không cần) đều ngược nghĩa với việc yêu cầu ký tên."
        },
        {
          q: "You ___ park here. It's a no-parking zone, and you'll get a fine.",
          o: ["don't have to", "mustn't", "needn't", "might not"],
          a: 1,
          e: "Đáp án đúng: mustn't, nghĩa là cấm. “don't have to” và “needn't” là không cần (được phép nhưng không bắt buộc) nên sai nghĩa; “might not” chỉ là có thể không, không diễn tả sự cấm."
        },
        {
          q: "The company is providing free sandwiches, so you ___ bring your own lunch tomorrow.",
          o: ["mustn't", "can't", "don't have to"],
          a: 2,
          e: "Đáp án đúng: don't have to, nghĩa là không cần thiết (bạn vẫn có thể mang nếu muốn). “mustn't” và “can't” là cấm, trong khi ngữ cảnh chỉ nói công ty đã có đồ ăn."
        },
        {
          q: "You look really tired. I think you ___ take a few days off.",
          o: ["can't", "mustn't", "needn't", "should"],
          a: 3,
          e: "Đáp án đúng: should, dùng để khuyên. “can't” và “mustn't” (không được) hay “needn't” (không cần) đều trái với ý khuyên nên nghỉ vài ngày."
        },
        {
          q: "Listen! Someone is knocking at the door. It ___ be Jack – he said he would come at six.",
          o: ["must", "can't", "needn't", "mustn't"],
          a: 0,
          e: "Đáp án đúng: must. Có cơ sở khá chắc chắn (Jack hẹn sáu giờ) nên suy đoán bằng must be. “can't be” là chắc chắn không phải; “needn't” và “mustn't” không dùng để suy đoán."
        },
        {
          q: "Sarah ___ be at the office. I've just seen her at the airport with her suitcase.",
          o: ["must", "needn't", "mustn't", "can't"],
          a: 3,
          e: "Đáp án đúng: can't. Bằng chứng (đang ở sân bay) cho thấy chắc chắn cô ấy không ở văn phòng, nên dùng can't be. “must be” có nghĩa ngược lại; “mustn't” là cấm chứ không dùng để suy đoán phủ định; “needn't” là không cần."
        },
        {
          q: "When I was a student, I ___ run ten kilometres without stopping.",
          o: ["can", "could", "must", "may"],
          a: 1,
          e: "Đáp án đúng: could, khả năng chung trong quá khứ. “can” là hiện tại; “must” (bắt buộc) và “may” (có thể) không diễn tả khả năng đã có."
        },
        {
          q: "___ I borrow your dictionary, please?",
          o: ["Would", "Must", "Could", "Ought"],
          a: 2,
          e: "Đáp án đúng: Could. Could I…? là cách xin phép lịch sự. “Would I…” không dùng để xin phép (would thường đi với you: Would you…?); “Must I…?” nghĩa là tôi có bắt buộc phải…; “Ought I” cần có to và mang nghĩa tôi có nên."
        },
        {
          q: "You'd better ___ the manager before you sign the contract.",
          o: ["to ask", "ask", "asking", "asked"],
          a: 1,
          e: "Đáp án đúng: ask. Had better (’d better) + động từ nguyên mẫu không to. “to ask”, “asking” và “asked” đều sai dạng sau had better."
        },
        {
          q: "___ I carry your bag? It looks very heavy.",
          o: ["Must", "Ought", "Would", "Shall"],
          a: 3,
          e: "Đáp án đúng: Shall. Shall I…? là lời đề nghị giúp đỡ. “Must I…?” là tôi có phải…; “Ought I” cần to và nghĩa là tôi có nên; “Would I” không dùng để đề nghị."
        }
      ],
      b2: [
        {
          q: "We took umbrellas to the outdoor event, but it didn't rain at all. We ___ them.",
          o: ["mustn't have taken", "needn't have taken", "couldn't take", "shouldn't take"],
          a: 1,
          e: "Đáp án đúng: needn't have taken, nghĩa là đã làm một việc hóa ra không cần thiết. “mustn't have taken” không phải cấu trúc đúng (suy đoán phủ định dùng can't have); “couldn't take” (không thể mang) và “shouldn't take” (thì hiện tại) sai thì và sai nghĩa."
        },
        {
          q: "The report was full of errors. You ___ it more carefully before sending it to the client.",
          o: ["must check", "mustn't have checked", "needn't check", "should have checked"],
          a: 3,
          e: "Đáp án đúng: should have checked, lời chê trách về việc đáng lẽ phải làm trong quá khứ. “must check” và “needn't check” là hiện tại/tương lai, không hợp với việc đã gửi báo cáo; “mustn't have checked” không phải cấu trúc chuẩn."
        },
        {
          q: "Rosa ___ asleep when I called. I could see her typing a reply to someone else at that very moment.",
          o: ["might have been", "must have been", "should have been", "can't have been"],
          a: 3,
          e: "Đáp án đúng: can't have been. Bằng chứng rõ ràng (đang gõ trả lời người khác) cho thấy chắc chắn cô ấy không ngủ. “must have been” có nghĩa ngược lại; “might have been” chỉ là có thể nên không hợp với bằng chứng chắc chắn; “should have been” là lẽ ra nên ngủ, sai nghĩa."
        },
        {
          q: "After three hours of trying, we finally ___ get the server working again.",
          o: ["could", "can", "were able to", "may"],
          a: 2,
          e: "Đáp án đúng: were able to. Đây là một thành công cụ thể, xảy ra một lần trong quá khứ (finally) nên dùng was/were able to hoặc managed to. Could ở câu khẳng định chỉ khả năng chung; can và may sai thì."
        },
        {
          q: "Last year, all employees ___ attend the safety training, but this year it is optional.",
          o: ["must", "had to", "have to", "should"],
          a: 1,
          e: "Đáp án đúng: had to, nghĩa vụ trong quá khứ (must không có dạng quá khứ). “must” và “have to” là hiện tại, mâu thuẫn với Last year; “should” chỉ lời khuyên và không hợp thì."
        },
        {
          q: "When I was a child, we ___ a small house by the sea; we sold it when I was twelve.",
          o: ["used to have", "would have", "use to have", "would to have"],
          a: 0,
          e: "Đáp án đúng: used to have, vì đây là trạng thái trong quá khứ (có một ngôi nhà). Would chỉ dùng cho thói quen / hành động lặp lại, không dùng cho trạng thái; “use to have” thiếu -d ở câu khẳng định; “would to have” sai cấu trúc."
        },
        {
          q: "I can't find my keys anywhere. I ___ them on the bus this morning, but I'm not sure.",
          o: ["must have left", "can't have left", "might have left", "should have left"],
          a: 2,
          e: "Đáp án đúng: might have left, vì người nói chỉ phỏng đoán (I'm not sure). “must have left” (chắc chắn) mâu thuẫn với I'm not sure; “can't have left” (chắc chắn không) ngược nghĩa; “should have left” là lẽ ra nên để lại, sai nghĩa."
        },
        {
          q: "The train ___ arrive at 9.15, but it is already 9.40 and there is still no sign of it.",
          o: ["is supposed to", "must", "can", "might"],
          a: 0,
          e: "Đáp án đúng: is supposed to, nghĩa là theo lịch trình thì phải đến. “must” (bắt buộc / suy đoán chắc chắn), “can” và “might” (có thể) không diễn tả việc tàu lẽ ra đến lúc 9.15 theo lịch."
        },
        {
          q: "I'd love to ___ speak Spanish fluently, but I've never had the time to study it.",
          o: ["can", "be able to", "could", "may"],
          a: 1,
          e: "Đáp án đúng: be able to. Sau to cần động từ nguyên mẫu, mà modal (can, could, may) không có dạng nguyên mẫu nên phải dùng be able to."
        },
        {
          q: "We ___ the project earlier, but the client kept changing the brief.",
          o: ["could have finished", "can have finished", "must finish", "should finish"],
          a: 0,
          e: "Đáp án đúng: could have finished, nghĩa là lẽ ra đã có thể hoàn thành (nhưng không xảy ra vì khách đổi yêu cầu). “can have finished” không dùng cho khả năng quá khứ này; “must finish” và “should finish” là thì hiện tại, không hợp với kept changing (quá khứ)."
        }
      ]
    },

    /* =====================================================================
       3. ARTICLES & QUANTIFIERS
       ===================================================================== */
    {
      id: "articles",
      title: "Articles & Quantifiers",
      vi: "Mạo từ (a / an / the / không mạo từ) và lượng từ",
      icon: "🔤",
      summary:
        "Aptis hay hỏi a/an – the – không mạo từ, danh từ không đếm được (advice, information, news), lượng từ (much/many, few/a few, little/a little) và các cụm cố định như in hospital, at work, the Netherlands.",
      explain: [
        {
          h: "A / An: mạo từ bất định",
          body:
            "Dùng **a/an** trước danh từ **đếm được số ít** khi nói đến một thứ lần đầu, khi nói nghề nghiệp, hoặc với nghĩa ‘mỗi’ (twice **a** week). Chọn **a** hay **an** theo **ÂM đầu**, không theo chữ cái: **an** + âm nguyên âm (**an** hour, **an** MBA, **an** umbrella), **a** + âm phụ âm (**a** university /juː/, **a** one-day course, **a** European). Các cấu trúc cố định: **such a / what a / quite a / half an hour**.",
          ex: [
            ["She's an engineer at a software company.", "Cô ấy là kỹ sư ở một công ty phần mềm."],
            ["It's an hour's drive from here.", "Từ đây lái xe mất một giờ."],
            ["I go to the gym twice a week.", "Tôi đi phòng gym hai lần một tuần."],
            ["What a lovely office!", "Văn phòng đẹp quá!"],
            ["He's studying for an MBA at a university in Leeds.", "Anh ấy đang học MBA ở một trường đại học tại Leeds."]
          ]
        },
        {
          h: "The: mạo từ xác định",
          body:
            "Dùng **the** khi người nghe biết chính xác đang nói đến cái nào: (1) **đã nhắc ở lần trước** (I bought a laptop… **The** laptop…); (2) **duy nhất** (the sun, the Internet, the government); (3) có **bổ nghĩa xác định** (the woman who called); (4) **so sánh nhất, số thứ tự, the same, the only, the next/last**; (5) **nhóm người** (the rich, the unemployed, the British); (6) **nhạc cụ** (play the piano); (7) **sông, biển, dãy núi, quần đảo, sa mạc** (the Thames, the Pacific, the Alps, the Sahara) và **quốc gia dạng số nhiều / liên bang** (the Netherlands, the Philippines, the UK, the USA).",
          ex: [
            ["I bought a laptop and a printer. The printer was expensive.", "Tôi mua một cái laptop và một cái máy in. Cái máy in rất đắt."],
            ["She is the only person here who speaks German.", "Cô ấy là người duy nhất ở đây nói tiếng Đức."],
            ["The unemployed need more support.", "Người thất nghiệp cần được hỗ trợ nhiều hơn."],
            ["We're flying over the Alps to the Netherlands.", "Chúng tôi bay qua dãy Alps đến Hà Lan."],
            ["Who is the tallest person in your team?", "Ai là người cao nhất trong nhóm bạn?"]
          ]
        },
        {
          h: "Không mạo từ (zero article)",
          body:
            "Không dùng mạo từ khi nói **chung chung** với danh từ **số nhiều hoặc không đếm được** (Life is short; Cats are independent), trước **tên người, thành phố, hầu hết quốc gia, núi đơn, hồ, tên phố** (France, Mount Everest, Lake Windermere, Oxford Street), trước **ngôn ngữ, môn học, môn thể thao, bữa ăn** (speak English, study maths, play tennis, have lunch), với phương tiện **by bus / by car**, và trong **cụm cố định**: at home, at work, at school/university (đi học), in hospital / in prison (BrE, nói về bệnh nhân / người bị giam), go to bed, at night, on holiday, in fact. Lưu ý **the University of Manchester** (có of) nhưng **Manchester University**.",
          ex: [
            ["Life has become more stressful in recent years.", "Cuộc sống ngày càng áp lực những năm gần đây."],
            ["She speaks English and French, and plays tennis at weekends.", "Cô ấy nói tiếng Anh và tiếng Pháp, và chơi tennis vào cuối tuần."],
            ["My father is in hospital after an operation.", "Bố tôi đang nằm viện sau một ca mổ."],
            ["She studied at the University of Manchester.", "Cô ấy học ở Đại học Manchester."],
            ["I usually go to work by bus.", "Tôi thường đi làm bằng xe buýt."]
          ]
        },
        {
          h: "Danh từ không đếm được và lượng từ",
          body:
            "**Không đếm được** (không dùng a/an, không thêm -s): information, advice, news, furniture, luggage, equipment, research, progress, traffic, accommodation, work, travel. Muốn đếm phải dùng đơn vị: **a piece of** advice, **an item of** furniture. Lượng từ: **much / a little / little** + không đếm được; **many / a few / few** + đếm được số nhiều; **a lot of** dùng cho cả hai. **a few / a little** = có một ít (nghĩa tích cực); **few / little** = hầu như không có (nghĩa tiêu cực). **some** dùng trong câu khẳng định và lời mời; **any** dùng trong phủ định, nghi vấn và sau hardly.",
          ex: [
            ["Could you give me some advice about my CV?", "Bạn cho tôi vài lời khuyên về CV được không?"],
            ["How much luggage have you got? Only a few bags.", "Bạn mang bao nhiêu hành lý? Chỉ vài túi thôi."],
            ["There are only a few seats left, and there is little time to decide.", "Chỉ còn vài chỗ, và hầu như không còn thời gian để quyết định."],
            ["I haven't got any information about the course yet.", "Tôi chưa có thông tin nào về khoá học."],
            ["Would you like some coffee?", "Bạn dùng chút cà phê nhé?"]
          ]
        },
        {
          h: "Nhắc lại lần hai và các cặp đổi nghĩa",
          body:
            "Cùng một danh từ nhưng **có the / không the thì nghĩa khác**: **go to school** (đi học) ≠ **go to the school** (đến tòa nhà trường, ví dụ họp phụ huynh); **in hospital** (nằm viện) ≠ **in the hospital** (ở trong tòa nhà bệnh viện, ví dụ đi thăm). **next week / last year / this morning** không có the. Một số danh từ vừa đếm được vừa không đếm được, nghĩa đổi: **experience** (kinh nghiệm) ≠ **an experience** (một trải nghiệm); **paper** (giấy) ≠ **a paper** (bài báo / tờ báo); **work** (công việc) ≠ **a work** (tác phẩm).",
          ex: [
            ["She has extensive experience in project management.", "Cô ấy có nhiều kinh nghiệm quản lý dự án."],
            ["Visiting Hanoi was an unforgettable experience.", "Đến thăm Hà Nội là một trải nghiệm khó quên."],
            ["I need to go to the school to talk to my son's teacher.", "Tôi phải đến trường để nói chuyện với giáo viên của con trai."],
            ["Please print it on paper, not on a screen.", "Hãy in ra giấy, đừng đọc trên màn hình."],
            ["She published a paper on climate change.", "Cô ấy đã đăng một bài báo về biến đổi khí hậu."]
          ]
        }
      ],
      tips: [
        "Lỗi người Việt hay gặp: bỏ mạo từ trước danh từ đếm được số ít (✗ I have car → ✓ I have a car) và thêm a/an/-s cho danh từ không đếm được (✗ an advice, a news, informations, furnitures → ✓ some advice, some news, some information, some furniture).",
        "Chọn a/an theo ÂM: an hour, an MBA, an SMS (âm nguyên âm); a university, a one-day trip, a European (âm phụ âm). Chọn the khi người nghe biết rõ đang nói đến cái nào: nhắc lần hai, duy nhất, có bổ nghĩa xác định, so sánh nhất, the only / the same.",
        "Mẹo Aptis về lượng từ: xét danh từ đếm được hay không trước (many / few / a few + đếm được; much / little / a little + không đếm được). Few / little mang nghĩa tiêu cực (rất ít), a few / a little mang nghĩa tích cực (một ít). Sau hardly / barely / scarcely dùng any."
      ],
      b1: [
        {
          q: "I need ___ advice about my CV before I apply for the job.",
          o: ["an", "a", "some", "many"],
          a: 2,
          e: "Đáp án đúng: some. Advice là danh từ không đếm được nên không dùng a/an và cũng không dùng many (chỉ đi với đếm được số nhiều)."
        },
        {
          q: "My sister works as ___ engineer for a large construction company.",
          o: ["a", "an", "the", "no article"],
          a: 1,
          e: "Đáp án đúng: an. Nghề nghiệp dùng a/an, và engineer bắt đầu bằng âm nguyên âm /e/ nên dùng an. “a” sai âm; “the” không hợp vì chưa xác định; không mạo từ sai vì engineer là danh từ đếm được số ít."
        },
        {
          q: "I bought a laptop and a printer yesterday. ___ printer was very expensive.",
          o: ["The", "A", "An", "No article"],
          a: 0,
          e: "Đáp án đúng: The. Printer đã được nhắc ở câu trước (lần hai), người nghe biết đó là cái nào nên dùng the. “A”/“An” dùng cho lần nhắc đầu; không mạo từ sai với danh từ đếm được số ít."
        },
        {
          q: "We play ___ football every Saturday morning in the park.",
          o: ["the", "a", "an", "no article"],
          a: 3,
          e: "Đáp án đúng: không mạo từ. Tên môn thể thao (play football, play tennis) không dùng mạo từ. “the”, “a” và “an” đều sai."
        },
        {
          q: "How ___ money do you spend on lunch every day?",
          o: ["many", "much", "few", "a lot"],
          a: 1,
          e: "Đáp án đúng: much. Money là danh từ không đếm được nên dùng How much. “many” chỉ đi với đếm được số nhiều; “few” không dùng sau How trong câu hỏi số lượng này; “a lot” thiếu of và không đi sau how."
        },
        {
          q: "There are only ___ people in the office today, so it's very quiet.",
          o: ["a few", "a little", "much", "any"],
          a: 0,
          e: "Đáp án đúng: a few. People là danh từ đếm được số nhiều nên dùng a few (một vài). “a little” và “much” dùng với danh từ không đếm được; “any” dùng trong câu phủ định hoặc nghi vấn, không đi với only."
        },
        {
          q: "___ news about the merger was a big surprise for everyone.",
          o: ["A", "An", "The", "Many"],
          a: 2,
          e: "Đáp án đúng: The. News là danh từ không đếm được nên không dùng A/An hay Many; dùng The vì đây là tin cụ thể đã được xác định (about the merger)."
        },
        {
          q: "What ___ beautiful view! You can see the whole city from here.",
          o: ["a", "an", "the", "no article"],
          a: 0,
          e: "Đáp án đúng: a. Câu cảm thán What + a + (tính từ) + danh từ đếm được số ít; beautiful bắt đầu bằng âm phụ âm /b/ nên dùng a. “an” sai âm; “the” và không mạo từ không dùng trong cấu trúc cảm thán này."
        },
        {
          q: "It's very late. I'm going to ___ bed now.",
          o: ["the", "no article", "a", "an"],
          a: 1,
          e: "Đáp án đúng: không mạo từ. Go to bed là cụm cố định, không có mạo từ. “the”, “a” và “an” đều sai."
        },
        {
          q: "In 2019 he climbed ___ Mount Everest with a team of experienced guides.",
          o: ["the", "a", "an", "no article"],
          a: 3,
          e: "Đáp án đúng: không mạo từ. Tên một ngọn núi đơn (Mount Everest) không dùng the; chỉ dãy núi mới có the (the Alps). “a” và “an” không dùng với tên riêng."
        }
      ],
      b2: [
        {
          q: "She is ___ only person in the department who speaks fluent German.",
          o: ["an", "a", "the", "no article"],
          a: 2,
          e: "Đáp án đúng: the. Sau only, the same, the first/last và so sánh nhất luôn dùng the. “an”/“a” sai vì đã xác định duy nhất; không mạo từ sai vì person là danh từ đếm được số ít."
        },
        {
          q: "After work, he studies for ___ MBA at a business school in London.",
          o: ["a", "an", "no article"],
          a: 1,
          e: "Đáp án đúng: an. MBA đọc là /ˌem biː ˈeɪ/, bắt đầu bằng âm nguyên âm nên dùng an (chọn theo âm, không theo chữ cái). “a” sai âm; không mạo từ sai vì danh từ đếm được số ít."
        },
        {
          q: "My cousin has just moved to ___ Netherlands for a new job.",
          o: ["the", "a", "no article"],
          a: 0,
          e: "Đáp án đúng: the. Tên quốc gia dạng số nhiều (the Netherlands, the Philippines) hoặc có Kingdom / States / Republic đều dùng the. “a” và không mạo từ đều sai."
        },
        {
          q: "She has ___ extensive experience in project management and customer service.",
          o: ["an", "a", "the", "no article"],
          a: 3,
          e: "Đáp án đúng: không mạo từ. Experience nghĩa là ‘kinh nghiệm’ là danh từ không đếm được nên không dùng a/an; “the” sai vì chưa xác định. (Khi nghĩa là một trải nghiệm cụ thể thì đếm được: an interesting experience.)"
        },
        {
          q: "He's very unfriendly, so he has ___ friends in this office.",
          o: ["a few", "few", "a little", "little"],
          a: 1,
          e: "Đáp án đúng: few. Friends đếm được số nhiều và ngữ cảnh tiêu cực (unfriendly) nên dùng few (rất ít, gần như không có). “a few” mang nghĩa tích cực (có một vài) nên mâu thuẫn; “a little” và “little” chỉ đi với danh từ không đếm được."
        },
        {
          q: "I'm afraid there is hardly ___ time left, so we must decide now.",
          o: ["some", "a few", "a little", "any"],
          a: 3,
          e: "Đáp án đúng: any. Hardly mang nghĩa phủ định nên đi với any (hardly any). “some” và “a little” không đi với hardly; “a few” dùng cho danh từ đếm được số nhiều, mà time là không đếm được."
        },
        {
          q: "___ unemployed need more support from the government than they currently receive.",
          o: ["The", "An", "No article"],
          a: 0,
          e: "Đáp án đúng: The. The + tính từ chỉ một nhóm người (the unemployed, the rich, the elderly). “An” sai; không mạo từ sai vì unemployed là tính từ, không đứng một mình làm chủ ngữ để chỉ nhóm người."
        },
        {
          q: "She studied at ___ University of Manchester before moving to London.",
          o: ["a", "no article", "the"],
          a: 2,
          e: "Đáp án đúng: the. Cấu trúc the University of + địa danh bắt buộc có the (còn dạng Manchester University thì không có the). “a” và không mạo từ đều sai."
        },
        {
          q: "___ life has become much more stressful for office workers over the last decade.",
          o: ["No article", "The", "A"],
          a: 0,
          e: "Đáp án đúng: không mạo từ. Nói chung chung về cuộc sống (danh từ không đếm được, nghĩa tổng quát) thì không dùng mạo từ. “The life” chỉ dùng khi bị giới hạn (the life of a nurse); “A life” sai vì ở nghĩa này danh từ không đếm được."
        },
        {
          q: "She has booked ___ one-day course in London for next month.",
          o: ["an", "a", "the"],
          a: 1,
          e: "Đáp án đúng: a. One phát âm /wʌn/ bắt đầu bằng âm phụ âm /w/ nên dùng a. “an” sai vì chọn theo âm chứ không theo chữ cái; “the” sai vì course mới được nhắc lần đầu."
        }
      ]
    },

    /* =====================================================================
       4. PREPOSITIONS
       ===================================================================== */
    {
      id: "prepositions",
      title: "Prepositions",
      vi: "Giới từ: thời gian, nơi chốn, chuyển động, đi kèm từ và cụm cố định",
      icon: "🧭",
      summary:
        "Aptis hay hỏi in/on/at, for/since/during, by/until, giới từ đi sau tính từ – động từ – danh từ (interested in, depend on, increase in) và cụm cố định như in charge of, on behalf of, by mistake.",
      explain: [
        {
          h: "Giới từ chỉ thời gian: in / on / at, for / since / during, by / until",
          body:
            "**at** + giờ / thời điểm: at 6 p.m., at noon, at night, at the weekend (BrE), at Christmas. **on** + ngày / ngày cụ thể: on Monday, on 14 March, on Friday morning, on my birthday. **in** + tháng / năm / mùa / buổi: in May, in 2024, in winter, in the morning; **in** + khoảng thời gian = sau bao lâu nữa (in two weeks). **for** + khoảng thời gian (for three years), **since** + mốc thời gian (since 2023), **during** + danh từ chỉ sự kiện (during the meeting). **by** = chậm nhất vào lúc (by Friday), **until / till** = liên tục cho đến khi (stay until 5 p.m.).",
          ex: [
            ["The meeting starts at 9 a.m. on Monday.", "Cuộc họp bắt đầu lúc 9 giờ sáng thứ Hai."],
            ["I've worked here for three years, since 2023.", "Tôi làm ở đây ba năm rồi, từ năm 2023."],
            ["Please send me the report by Friday.", "Hãy gửi báo cáo cho tôi chậm nhất vào thứ Sáu."],
            ["I'll be in the office until six.", "Tôi sẽ ở văn phòng đến sáu giờ."],
            ["My phone rang twice during the lesson.", "Điện thoại tôi reo hai lần trong giờ học."]
          ]
        },
        {
          h: "Giới từ chỉ nơi chốn: in / on / at",
          body:
            "**in** = bên trong một không gian / khu vực: in the room, in London, in a car / taxi. **on** = trên bề mặt, tầng lầu, và phương tiện công cộng: on the table, on the second floor, on the bus / train / plane, on the left. **at** = một điểm / địa điểm hoạt động: at the station, at the door, at work, at a conference, at the bus stop. **arrive in** + thành phố / quốc gia; **arrive at** + địa điểm nhỏ (the airport, the hotel); không có giới từ với home / here / there (get home, arrive here).",
          ex: [
            ["She's waiting for you at the station.", "Cô ấy đang đợi bạn ở nhà ga."],
            ["The files are on the second floor, in the manager's office.", "Hồ sơ ở tầng hai, trong văn phòng của quản lý."],
            ["We arrived in Edinburgh at noon and at the hotel an hour later.", "Chúng tôi đến Edinburgh vào buổi trưa và đến khách sạn một giờ sau đó."],
            ["I came to work on the bus, but he came in his car.", "Tôi đi làm bằng xe buýt, còn anh ấy đi ô tô riêng."]
          ]
        },
        {
          h: "Giới từ chuyển động",
          body:
            "**to** = đến (go to the bank); **into / out of** = vào / ra khỏi (walk into the room); **onto / off** = lên / xuống (get off the bus); **across** = băng qua một bề mặt (across the road, across the river); **through** = xuyên qua không gian có hai bên (through a tunnel, through the park); **along** = dọc theo (along the river); **past** = đi ngang qua (past the bank); **towards** = hướng về; **over / under** = vượt qua phía trên / bên dưới (over the bridge, under the bridge); **up / down** = lên / xuống dốc, cầu thang. Phân biệt: **across** (bề mặt) – **through** (xuyên không gian) – **over** (vượt lên trên).",
          ex: [
            ["We drove through a tunnel and across a long bridge.", "Chúng tôi lái xe qua một đường hầm rồi qua một cây cầu dài."],
            ["Go along this road, go past the bank and turn left.", "Đi dọc con đường này, đi qua ngân hàng rồi rẽ trái."],
            ["He walked into the meeting room without knocking.", "Anh ấy bước vào phòng họp mà không gõ cửa."],
            ["The train goes under the river.", "Tàu chạy dưới lòng sông."]
          ]
        },
        {
          h: "Tính từ / động từ / danh từ + giới từ",
          body:
            "Phải học theo **cụm**. **Tính từ**: good / bad at, interested in, keen on, afraid of, proud of, tired of, responsible for, famous for, worried about, satisfied with, committed to, married to, similar to, different from. **Động từ**: depend / rely on, listen to, wait for, look for / after, apply for, belong to, suffer from, believe in, benefit from, complain about, consist of, succeed in, insist on, object to, accuse sb of, apologise for, prefer A to B, agree with (người) / to (đề nghị) / on (vấn đề). **Danh từ**: increase / rise in, demand for, reason for, solution to, key to, access to, damage to, cause of, difference between, attitude to, effect on. Sau giới từ dùng **danh từ hoặc V-ing** (kể cả khi giới từ là to: object to working, committed to improving).",
          ex: [
            ["I'm interested in joining the new project team.", "Tôi quan tâm đến việc tham gia nhóm dự án mới."],
            ["The success of the project depends on the budget.", "Thành công của dự án phụ thuộc vào ngân sách."],
            ["There has been a rise in the number of complaints.", "Số lượng khiếu nại đã tăng lên."],
            ["Many staff object to working at weekends.", "Nhiều nhân viên phản đối việc làm vào cuối tuần."],
            ["She is responsible for training new employees.", "Cô ấy chịu trách nhiệm đào tạo nhân viên mới."]
          ]
        },
        {
          h: "Giới từ trong cụm cố định và các cặp dễ nhầm",
          body:
            "Cụm cố định: **in charge of**, **on behalf of**, **by mistake / by accident**, **on purpose**, **in advance**, **at least**, **on average**, **in fact**, **in favour of**, **in terms of**, **on the other hand**, **out of the question**, **at stake**, **under pressure**, **in a hurry**, **on holiday**, **on business**, **at risk**, **by hand / by post / by card**, **in cash**, **on the phone**. Cặp dễ nhầm: **in time** (kịp giờ) ≠ **on time** (đúng giờ); **at the end of** (vào cuối) ≠ **in the end** (cuối cùng); **besides** (ngoài ra) ≠ **beside** (bên cạnh); **during** (trong lúc) ≠ **for** (bao lâu); **by** (chậm nhất) ≠ **until** (liên tục đến khi).",
          ex: [
            ["She is in charge of the sales team.", "Cô ấy phụ trách nhóm kinh doanh."],
            ["I'm writing on behalf of the whole department.", "Tôi viết thư này thay mặt cho cả phòng."],
            ["Sorry, I deleted the file by mistake.", "Xin lỗi, tôi xoá nhầm tập tin."],
            ["The train was late, but I arrived in time to catch the next one.", "Tàu bị trễ, nhưng tôi vẫn đến kịp để đi chuyến tiếp theo."],
            ["Besides the salary, the job offers a company car.", "Ngoài lương, công việc còn có xe công ty."]
          ]
        }
      ],
      tips: [
        "Sau giới từ là danh từ hoặc V-ing, không phải động từ nguyên mẫu: ✗ interested in join → ✓ interested in joining. Chú ý ‘to’ là giới từ trong look forward to, be used to, object to, be committed to → theo sau là V-ing.",
        "Học giới từ theo cụm, đừng dịch từng chữ từ tiếng Việt: depend ON (✗ from), arrive IN London / AT the airport, good AT, interested IN, responsible FOR, by mistake (✗ in mistake), on behalf of, prefer A TO B.",
        "Mẹo Aptis: for + khoảng thời gian / since + mốc / during + sự kiện; by = chậm nhất vào / until = đến tận; in time = kịp / on time = đúng giờ; in the end = cuối cùng / at the end of = vào cuối. Nhìn từ đứng ngay sau chỗ trống (một con số? một ngày? một giờ?) để chọn in / on / at."
      ],
      b1: [
        {
          q: "The meeting starts ___ 9 a.m., so please don't be late.",
          o: ["in", "on", "at", "by"],
          a: 2,
          e: "Đáp án đúng: at, dùng với giờ cụ thể. “in” dùng cho tháng, năm, buổi; “on” dùng cho ngày; “by” (chậm nhất vào) không hợp với động từ starts."
        },
        {
          q: "My birthday is ___ 14 March, so let's celebrate at the weekend.",
          o: ["at", "on", "in", "of"],
          a: 1,
          e: "Đáp án đúng: on, dùng với ngày cụ thể (on 14 March). “at” dùng cho giờ; “in” dùng với tháng đứng một mình (in March) chứ không đi với số ngày; “of” sai."
        },
        {
          q: "I've lived in this city ___ 2019.",
          o: ["for", "from", "during", "since"],
          a: 3,
          e: "Đáp án đúng: since, đi với mốc thời gian (2019) và thì hiện tại hoàn thành. “for” dùng với khoảng thời gian (for five years); “from” cần có to/until; “during” đi với danh từ chỉ sự kiện."
        },
        {
          q: "I've worked in this office ___ three years.",
          o: ["for", "since", "during", "at"],
          a: 0,
          e: "Đáp án đúng: for, dùng với khoảng thời gian (three years). “since” đi với mốc thời gian; “during” đi với danh từ chỉ sự kiện; “at” sai."
        },
        {
          q: "Please send me the final report ___ Friday at the latest.",
          o: ["by", "until", "at", "for"],
          a: 0,
          e: "Đáp án đúng: by, nghĩa là chậm nhất vào (hạn chót), khớp với at the latest. “until” nghĩa là liên tục cho đến khi; “at” và “for” sai trong cấu trúc này."
        },
        {
          q: "We arrived ___ the airport two hours before our flight.",
          o: ["at", "in", "to", "on"],
          a: 0,
          e: "Đáp án đúng: at. Arrive at + địa điểm nhỏ (sân bay, khách sạn, nhà ga). “in” dùng với thành phố / quốc gia (arrive in Paris); “to” sau arrive là sai; “on” sai."
        },
        {
          q: "She's very good ___ solving customer problems.",
          o: ["in", "at", "on", "for"],
          a: 1,
          e: "Đáp án đúng: at. Cụm cố định good at + V-ing / danh từ. “in”, “on” và “for” đều sai giới từ đi với good."
        },
        {
          q: "I'm interested ___ joining the new project team.",
          o: ["on", "at", "about", "in"],
          a: 3,
          e: "Đáp án đúng: in. Cụm cố định interested in + V-ing. “on”, “at” và “about” không đi với interested."
        },
        {
          q: "The manager is responsible ___ training all new staff.",
          o: ["of", "for", "to", "about"],
          a: 1,
          e: "Đáp án đúng: for. Cụm cố định responsible for + V-ing / danh từ. “of” và “about” sai giới từ; “to” chỉ dùng khi nói chịu trách nhiệm trước ai (responsible to the director), không đi với training."
        },
        {
          q: "I don't have a car, so I go to work ___ bus.",
          o: ["with", "in", "by", "at"],
          a: 2,
          e: "Đáp án đúng: by. By + phương tiện, không có mạo từ (by bus, by car, by train). “with”, “in” và “at” sai trong cách nói này."
        },
        {
          q: "We had to drive ___ a long tunnel to get to the other side of the mountain.",
          o: ["across", "past", "over", "through"],
          a: 3,
          e: "Đáp án đúng: through, nghĩa là xuyên qua một không gian có hai bên (đường hầm). “across” là băng qua một bề mặt; “past” là đi ngang qua mà không đi vào; “over” là vượt phía trên."
        },
        {
          q: "Who is ___ charge of the new marketing campaign?",
          o: ["at", "on", "in", "under"],
          a: 2,
          e: "Đáp án đúng: in. Cụm cố định in charge of = phụ trách. “at”, “on” và “under” không tạo thành cụm này."
        }
      ],
      b2: [
        {
          q: "The train was delayed, but I still got to the station ___ time to catch the last bus.",
          o: ["in", "on", "at", "by"],
          a: 0,
          e: "Đáp án đúng: in. In time (to + V) = kịp để làm gì. “on time” nghĩa là đúng giờ theo lịch và không đi với to catch theo nghĩa kịp; “at time” và “by time” không phải cụm cố định."
        },
        {
          q: "A pay rise of twenty per cent is simply ___ the question; we don't have the budget.",
          o: ["off", "out of", "against", "without"],
          a: 1,
          e: "Đáp án đúng: out of. Out of the question = không thể được. “off”, “against” và “without” the question không phải cụm cố định."
        },
        {
          q: "I'm writing ___ behalf of the whole team to thank you for your support.",
          o: ["by", "for", "with", "on"],
          a: 3,
          e: "Đáp án đúng: on. On behalf of = thay mặt cho. “by”, “for” và “with” behalf of không tồn tại trong tiếng Anh chuẩn."
        },
        {
          q: "Our new director is fully committed ___ improving customer service.",
          o: ["for", "with", "to", "in"],
          a: 2,
          e: "Đáp án đúng: to. Be committed to + V-ing / danh từ (to là giới từ nên theo sau là V-ing: committed to improving). “for”, “with” và “in” không đi với committed theo nghĩa tận tâm với."
        },
        {
          q: "___ salary, the two job offers are similar, but the second one has better benefits.",
          o: ["On terms of", "In terms of", "By terms of", "At terms of"],
          a: 1,
          e: "Đáp án đúng: In terms of = xét về mặt (salary). “On terms of”, “By terms of” và “At terms of” không phải cụm đúng."
        },
        {
          q: "Most of our customers prefer paying by card ___ paying in cash.",
          o: ["than", "from", "to", "against"],
          a: 2,
          e: "Đáp án đúng: to. Cấu trúc prefer A to B (A và B đều là danh từ hoặc V-ing). Không dùng than sau prefer ở dạng này (muốn dùng than/rather than phải đổi thành prefer to pay by card rather than in cash); “from” và “against” sai."
        },
        {
          q: "___ the salary, the job offers free private healthcare and flexible hours.",
          o: ["Between", "Beside", "Behind", "Besides"],
          a: 3,
          e: "Đáp án đúng: Besides = ngoài ra, thêm vào. “Beside” là ở bên cạnh (nơi chốn); “Between” là ở giữa hai; “Behind” là ở phía sau."
        },
        {
          q: "All staff will benefit ___ the new training programme.",
          o: ["from", "of", "by", "with"],
          a: 0,
          e: "Đáp án đúng: from. Benefit from = hưởng lợi từ. “of”, “by” và “with” không đi với benefit."
        },
        {
          q: "If we lose this client, the jobs of fifty people will be ___ stake.",
          o: ["to", "at", "with", "in"],
          a: 1,
          e: "Đáp án đúng: at. At stake = đang bị đe dọa, có nguy cơ mất. “to”, “with” và “in” stake không phải cụm cố định."
        },
        {
          q: "There has been a sharp increase ___ the number of online orders this year.",
          o: ["of", "on", "in", "for"],
          a: 2,
          e: "Đáp án đúng: in. Increase in + danh từ (sự tăng về cái gì). Dùng of khi theo sau là con số (an increase of 10 per cent); “on” và “for” sai."
        }
      ]
    }
  );
})();
