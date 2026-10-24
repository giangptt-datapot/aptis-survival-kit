(function () {
  const D = (globalThis.AptisData = globalThis.AptisData || {});

  D.listening = [
    /* ===================== CONVERSATION ===================== */
    {
      id: "l-conv-1",
      type: "conversation",
      title: "Booking a meeting room",
      level: "B1",
      setting: "Hai đồng nghiệp trao đổi về việc đặt phòng họp cho buổi khách đến thăm công ty.",
      speakers: { "Anna": "f", "Tom": "m" },
      script: [
        { s: "Anna", t: "Hi, Tom. Have you got a minute? I need to book a meeting room for the client visit." },
        { s: "Tom", t: "Sure. When is the visit?" },
        { s: "Anna", t: "Next Tuesday. Actually, no, sorry. They've just emailed me. They're coming on Wednesday instead." },
        { s: "Tom", t: "OK, Wednesday. What time?" },
        { s: "Anna", t: "Ten o'clock. So I need the room from half past nine, to get everything ready." },
        { s: "Tom", t: "Right. Let me check the system. Hmm, Room Two is free, but it only holds six people." },
        { s: "Anna", t: "That's too small. There will be eight of us." },
        { s: "Tom", t: "Then Room Four is better. It holds twelve, and it has a big screen. But it's on the third floor." },
        { s: "Anna", t: "That's fine. How long can I have it for?" },
        { s: "Tom", t: "Until one o'clock. After that, the finance team has it." },
        { s: "Anna", t: "That's perfect. We'll have lunch at twelve anyway. Oh, and could you order some sandwiches?" },
        { s: "Tom", t: "I can't, I'm afraid. You need to ask Beth in reception. She does the catering. I'll send you her extension number." },
        { s: "Anna", t: "Great. Thanks, Tom." },
        { s: "Tom", t: "No problem. I'll put your name on the booking." }
      ],
      qs: [
        {
          q: "When will the clients visit the company?",
          o: ["On Tuesday at ten o'clock", "On Wednesday at ten o'clock", "On Wednesday at half past nine"],
          a: 1,
          e: "Anna đổi ngày: “Next Tuesday. Actually, no, sorry... They're coming on Wednesday instead.” Khách đến lúc “Ten o'clock”; half past nine chỉ là giờ Anna cần phòng để chuẩn bị."
        },
        {
          q: "Why does Anna choose Room Four?",
          o: ["It is big enough for them", "It is on the ground floor", "It is free all day"],
          a: 0,
          e: "Room Two “only holds six people” còn họ có tám người, Room Four “holds twelve”. Room Four ở tầng ba (không phải tầng trệt) và chỉ trống “until one o'clock”, không phải cả ngày."
        },
        {
          q: "What does Tom suggest Anna do about the sandwiches?",
          o: ["Ask the finance team to order them", "Order them through Tom", "Speak to Beth in reception"],
          a: 2,
          e: "Tom nói “I can't, I'm afraid. You need to ask Beth in reception.” Tom chỉ gửi số máy lẻ của Beth, không tự đặt đồ ăn; đội tài chính chỉ là nhóm dùng phòng sau một giờ."
        }
      ],
      keywords: ["client visit", "Wednesday", "half past nine", "holds twelve", "until one o'clock", "reception", "extension number"],
      traps: [
        "Người nói đổi ý: ban đầu là Tuesday nhưng đính chính thành Wednesday; chỉ có Wednesday là đáp án.",
        "Có hai mốc giờ gần nhau: ten o'clock (giờ khách đến) và half past nine (giờ cần phòng để chuẩn bị).",
        "Tom từ chối đặt bánh sandwich (“I can't”) và chỉ nhờ hỏi Beth; đừng chọn đáp án nói Tom sẽ đặt giúp."
      ]
    },
    {
      id: "l-conv-2",
      type: "conversation",
      title: "A faulty kettle",
      level: "B1",
      setting: "Một khách hàng mang ấm đun nước bị hỏng đến cửa hàng để khiếu nại.",
      speakers: { "Helen": "f", "Dan": "m" },
      script: [
        { s: "Dan", t: "Good afternoon. Can I help you?" },
        { s: "Helen", t: "Yes, I hope so. I bought this kettle here about two weeks ago, but it's stopped working." },
        { s: "Dan", t: "Oh dear, I'm sorry to hear that. Do you have the receipt?" },
        { s: "Helen", t: "Well, I did. I think I left it at home. But I paid by card, so I've brought my bank statement. Is that all right?" },
        { s: "Dan", t: "Let me see. Yes, that shows the date and the name of the shop, so that's fine." },
        { s: "Helen", t: "Great. So can I get my money back? It cost thirty-five pounds." },
        { s: "Dan", t: "Actually, our policy is to offer a replacement first. We only give money back if we have no more in stock." },
        { s: "Helen", t: "I see. Do you have the same one?" },
        { s: "Dan", t: "Let me check. Hmm, we only have the blue one now. The silver one you bought has sold out." },
        { s: "Helen", t: "I don't mind the colour. Blue is fine." },
        { s: "Dan", t: "Good. And the new one comes with a three-year guarantee, so you're covered if anything goes wrong again." },
        { s: "Helen", t: "That's lovely. Thank you for your help." },
        { s: "Dan", t: "You're welcome. I'll just get it from the back." }
      ],
      qs: [
        {
          q: "What does Helen show Dan instead of a receipt?",
          o: ["The guarantee card", "A photo of the kettle", "Her bank statement"],
          a: 2,
          e: "Helen nói: “I paid by card, so I've brought my bank statement.” Dan đồng ý vì tài liệu đó có ngày mua và tên cửa hàng. Không có thẻ bảo hành hay ảnh nào được nhắc tới."
        },
        {
          q: "What does Dan offer Helen?",
          o: ["Her thirty-five pounds back", "A replacement kettle", "A discount on her next visit"],
          a: 1,
          e: "Dan nói: “our policy is to offer a replacement first.” Helen hỏi hoàn tiền (thirty-five pounds) nhưng chỉ được hoàn nếu hết hàng; ở đây vẫn còn ấm màu xanh. Không có giảm giá lần sau."
        },
        {
          q: "What will Dan do next?",
          o: ["Get the new kettle from the back", "Call the manager", "Check the stock again"],
          a: 0,
          e: "Câu cuối: “I'll just get it from the back.” Dan đã kiểm tra kho (“Let me check”) rồi nên không cần kiểm tra lại, và không nhắc gì đến quản lý."
        }
      ],
      keywords: ["receipt", "bank statement", "money back", "replacement", "in stock", "sold out", "three-year guarantee"],
      traps: [
        "Helen quên biên lai nhưng dùng sao kê ngân hàng; từ “receipt” xuất hiện nhiều lần nhưng không phải thứ cô ấy đưa ra.",
        "Helen xin hoàn tiền nhưng Dan đề nghị đổi sản phẩm mới trước; hoàn tiền chỉ khi hết hàng.",
        "Có hai màu (blue và silver): chiếc silver đã bán hết, chiếc blue mới là chiếc Helen nhận."
      ]
    },
    {
      id: "l-conv-3",
      type: "conversation",
      title: "Asking for directions",
      level: "B1",
      setting: "Một du khách hỏi người địa phương đường đến khách sạn.",
      speakers: { "Paul": "m", "Sue": "f" },
      script: [
        { s: "Paul", t: "Excuse me, sorry to bother you. Is the Grand Hotel near here?" },
        { s: "Sue", t: "The Grand Hotel? Yes, it's quite close. Go straight on until you reach the traffic lights, then turn left. No, wait, sorry, turn right. The left road goes to the station." },
        { s: "Paul", t: "So, straight on, then right at the lights." },
        { s: "Sue", t: "That's it. Then walk past the library and the post office. The hotel is next to a bank, opposite the park." },
        { s: "Paul", t: "How long will it take on foot?" },
        { s: "Sue", t: "About ten minutes. But there's a bus too. The number twelve stops right outside the hotel." },
        { s: "Paul", t: "Where can I catch it?" },
        { s: "Sue", t: "From the stop just over there, in front of the supermarket. They run every fifteen minutes." },
        { s: "Paul", t: "Ten minutes' walk is fine. It's a nice day. Oh, one more thing. Is there a cash machine around here?" },
        { s: "Sue", t: "There's one at the bank next to the hotel. So you won't need to make a special trip." },
        { s: "Paul", t: "Perfect. Thank you so much." },
        { s: "Sue", t: "No problem. Enjoy your stay!" }
      ],
      qs: [
        {
          q: "Where does Paul need to turn?",
          o: ["Left at the traffic lights", "Right at the traffic lights", "Right at the station"],
          a: 1,
          e: "Sue đính chính: “turn left. No, wait, sorry, turn right. The left road goes to the station.” Paul nhắc lại “straight on, then right at the lights” và Sue xác nhận “That's it.”"
        },
        {
          q: "Where exactly is the Grand Hotel?",
          o: ["Opposite the library", "Next to the post office", "Next to a bank"],
          a: 2,
          e: "“The hotel is next to a bank, opposite the park.” Thư viện và bưu điện chỉ là những nơi đi ngang qua trên đường; đối diện khách sạn là công viên, không phải thư viện."
        },
        {
          q: "How will Paul get to the hotel?",
          o: ["He will walk", "He will take the number twelve bus", "He will catch a train"],
          a: 0,
          e: "Paul nói: “Ten minutes' walk is fine. It's a nice day.” Xe buýt số 12 được nhắc nhưng anh ấy không chọn; nhà ga chỉ xuất hiện khi Sue nói đường bên trái dẫn đến ga."
        }
      ],
      keywords: ["traffic lights", "turn right", "library", "post office", "next to a bank", "opposite the park", "cash machine"],
      traps: [
        "Sue nói nhầm “turn left” rồi sửa thành “turn right”; đáp án đúng là câu sau khi đính chính.",
        "Có nhiều địa điểm gây nhiễu (library, post office, park, supermarket, station) nhưng chỉ “next to a bank” mô tả vị trí khách sạn.",
        "Xe buýt số 12 được nhắc kỹ, nhưng Paul quyết định đi bộ; hãy nghe câu trả lời cuối của người nói."
      ]
    },
    {
      id: "l-conv-4",
      type: "conversation",
      title: "Changing the weekend plan",
      level: "B2",
      setting: "Hai người bạn đổi kế hoạch cuối tuần vì dự báo thời tiết xấu.",
      speakers: { "Nina": "f", "Jack": "m" },
      script: [
        { s: "Nina", t: "Hi, Jack. So, are we still on for the walk in the hills on Saturday?" },
        { s: "Jack", t: "Well, that's what I wanted to talk about. I've just seen the forecast, and it looks awful. Heavy rain all day." },
        { s: "Nina", t: "Oh, that's a shame. I'd already bought the sandwiches." },
        { s: "Jack", t: "I know. How about we do something indoors instead? There's a pottery class in town. It starts at eleven and costs about thirty pounds each." },
        { s: "Nina", t: "Hmm, pottery's not really my thing. I'd be hopeless. What about the new exhibition at the art gallery? I've heard it's brilliant." },
        { s: "Jack", t: "Actually, that's a good idea. I think it's free on Saturdays, too. We could go for lunch afterwards." },
        { s: "Nina", t: "Lovely. Should we drive?" },
        { s: "Jack", t: "Not really. Parking in the centre is a nightmare, and it's expensive. The train is much easier, and it only takes twenty minutes." },
        { s: "Nina", t: "You're right. Shall we meet at the station at ten?" },
        { s: "Jack", t: "Let's make it quarter past ten. I never manage to get there on time, and the train leaves at half past." },
        { s: "Nina", t: "Ha, fair enough. Quarter past ten it is. I'll bring the sandwiches anyway. We can eat them on the train." }
      ],
      qs: [
        {
          q: "Why do Nina and Jack cancel the walk?",
          o: ["Nina has to work", "The hills are closed to visitors", "Heavy rain is forecast"],
          a: 2,
          e: "Jack: “I've just seen the forecast, and it looks awful. Heavy rain all day.” Không có lý do công việc hay việc đóng cửa; Nina chỉ tiếc vì đã mua sandwich."
        },
        {
          q: "What do they decide to do instead?",
          o: ["Visit an art exhibition", "Go to a pottery class", "Have a picnic in the park"],
          a: 0,
          e: "Jack đề xuất lớp làm gốm nhưng Nina từ chối (“pottery's not really my thing”). Cô đề nghị triển lãm ở phòng tranh và Jack đồng ý: “that's a good idea.”"
        },
        {
          q: "How will they travel, and when will they meet?",
          o: ["By car, at ten o'clock", "By train, at quarter past ten", "By train, at half past ten"],
          a: 1,
          e: "Họ chọn tàu vì đỗ xe ở trung tâm đắt đỏ. Nina đề nghị mười giờ, nhưng Jack sửa: “Let's make it quarter past ten.” Half past ten (10:30) chỉ là giờ tàu chạy."
        }
      ],
      keywords: ["forecast", "heavy rain", "pottery class", "exhibition", "art gallery", "parking", "quarter past ten"],
      traps: [
        "Có hai phương án trong nhà (pottery và exhibition); Nina từ chối pottery nên đáp án là triển lãm.",
        "Nina đề nghị gặp lúc ten rồi Jack sửa thành quarter past ten; half past ten là giờ tàu chạy, dễ nhầm.",
        "Phương tiện: Nina hỏi “Should we drive?” nhưng Jack nói “Not really”; chỉ nghe câu có ‘yes/no’ rõ ràng."
      ]
    },

    /* ===================== ANNOUNCEMENT ===================== */
    {
      id: "l-ann-1",
      type: "announcement",
      title: "Delay at the railway station",
      level: "B1",
      setting: "Thông báo trên loa của nhà ga về chuyến tàu đi Manchester bị trễ.",
      speakers: { "Announcer": "f" },
      script: [
        { s: "Announcer", t: "Good morning, ladies and gentlemen. This is an announcement for passengers travelling to Manchester. The ten fifteen service from Platform Four has been delayed by about twenty minutes. This is because of a signal problem near Birmingham. The train will now leave at ten thirty-five. Please note that it will now depart from Platform Six, not Platform Four. Passengers should use the footbridge, or the lift at the end of the platform." },
        { s: "Announcer", t: "The nine fifty service to Leeds is not affected and will leave from Platform Two as planned. We would also like to remind passengers that the café on Platform One is closed today for repairs. However, hot drinks are available from the kiosk next to the ticket office." },
        { s: "Announcer", t: "Finally, if you have a ticket for the ten fifteen train, you can use it on the ten thirty-five without any extra charge. We apologise for any inconvenience this may cause, and thank you for your patience." }
      ],
      qs: [
        {
          q: "Why is the ten fifteen train late?",
          o: ["A signal problem", "Bad weather", "A shortage of drivers"],
          a: 0,
          e: "“This is because of a signal problem near Birmingham.” Thời tiết và thiếu tài xế không được nhắc tới."
        },
        {
          q: "Which platform will the Manchester train leave from?",
          o: ["Platform Four", "Platform Two", "Platform Six"],
          a: 2,
          e: "“It will now depart from Platform Six, not Platform Four.” Platform Four là sân ga cũ, còn Platform Two là sân ga của chuyến đi Leeds."
        },
        {
          q: "What can passengers with a ticket for the ten fifteen train do?",
          o: ["Get their money back at the desk", "Use the ticket on the later train", "Pay a small extra charge to travel"],
          a: 1,
          e: "“You can use it on the ten thirty-five without any extra charge.” Vé vẫn dùng được cho chuyến muộn hơn, không cần trả thêm và không nhắc đến hoàn tiền."
        }
      ],
      keywords: ["delayed", "twenty minutes", "signal problem", "Platform Six", "ten thirty-five", "footbridge", "without any extra charge"],
      traps: [
        "Nhiều số và sân ga (Four, Six, Two, One): chỉ Platform Six là sân ga mới của tàu đi Manchester.",
        "Giờ tàu: ten fifteen là giờ ban đầu, ten thirty-five mới là giờ khởi hành mới (trễ hai mươi phút).",
        "Thông tin gây nhiễu: quán cà phê đóng cửa, chuyến đi Leeds không bị ảnh hưởng; không liên quan đến câu hỏi."
      ]
    },
    {
      id: "l-ann-2",
      type: "announcement",
      title: "Our office move",
      level: "B1",
      setting: "Quản lý nhân sự thông báo cho cả công ty về việc chuyển văn phòng.",
      speakers: { "Karen": "f" },
      script: [
        { s: "Karen", t: "Hello, everyone. This is Karen from Human Resources with some important news about our office move. As you know, we are leaving this building soon. Originally, the move was planned for the fifteenth, but because of some delays with the new offices, it will now take place on Saturday the twenty-second." },
        { s: "Karen", t: "On Friday the twenty-first, everybody should pack their personal things into the blue boxes that you will find outside the lift. Please write your name and your department clearly on every box. Please don't pack your computers, though. The IT team will take care of those on Friday afternoon." },
        { s: "Karen", t: "Our new address is Bridge Street, which is only five minutes from the central station. There is a small car park, but it has just thirty spaces, so we will all need to share. If you usually drive to work, please send me an email by next Wednesday, and I will give out the parking passes." },
        { s: "Karen", t: "Finally, there will be a welcome lunch in the new building on the following Tuesday. Thank you very much." }
      ],
      qs: [
        {
          q: "When will the move take place?",
          o: ["On the fifteenth", "On the twenty-first", "On the twenty-second"],
          a: 2,
          e: "“Originally, the move was planned for the fifteenth, but... it will now take place on Saturday the twenty-second.” Ngày hai mươi mốt là ngày đóng gói đồ cá nhân."
        },
        {
          q: "What should staff do with their computers?",
          o: ["Leave them for the IT team", "Pack them in the blue boxes", "Take them home on Friday"],
          a: 0,
          e: "“Please don't pack your computers, though. The IT team will take care of those.” Hộp màu xanh chỉ dành cho đồ cá nhân."
        },
        {
          q: "What must people who drive to work do by next Wednesday?",
          o: ["Collect a pass from reception", "Send Karen an email", "Pay for a parking space"],
          a: 1,
          e: "“If you usually drive to work, please send me an email by next Wednesday, and I will give out the parking passes.” Karen là người phát thẻ, không nhắc đến lễ tân hay việc trả tiền."
        }
      ],
      keywords: ["move", "delays", "twenty-second", "blue boxes", "IT team", "car park", "parking passes"],
      traps: [
        "Ngày chuyển văn phòng đã đổi từ ngày mười lăm sang hai mươi hai; ngày hai mươi mốt chỉ là ngày đóng gói.",
        "“Please don't pack your computers”: nghe kỹ từ phủ định, máy tính do đội IT xử lý.",
        "Car park chỉ có ba mươi chỗ, nhưng câu hỏi là người đi xe phải làm gì trước thứ Tư tuần sau (gửi email)."
      ]
    },
    {
      id: "l-ann-3",
      type: "announcement",
      title: "A voicemail from a colleague",
      level: "B2",
      setting: "Tin nhắn thoại của một đồng nghiệp gửi trước buổi thuyết trình quan trọng.",
      speakers: { "Maria": "f" },
      script: [
        { s: "Maria", t: "Hi, Daniel, it's Maria. I'm sorry to leave a message, but I couldn't get through on your mobile. It's about tomorrow's presentation to the board. I know we said we'd meet at nine, but I've just had a call from the airport. My flight from Edinburgh has been cancelled, so they've put me on a later one, and I won't arrive until the afternoon." },
        { s: "Maria", t: "Could you possibly start without me? The slides are all on the shared drive, in the folder called Board Meeting. I've updated the sales figures, so please use the latest version, not the one from last week." },
        { s: "Maria", t: "Oh, and one more thing. The projector in the main meeting room has been playing up, so you might want to ask the IT team to take a look before the meeting. If that doesn't work, we can use the screen in Room Five." },
        { s: "Maria", t: "Anyway, I should land at about two, and I'll come straight to the office. Call me back this evening if there's any problem. I'll be at my sister's until about ten. Thanks, Daniel. Bye." }
      ],
      qs: [
        {
          q: "Why can't Maria come to the meeting at nine?",
          o: ["She is stuck in traffic", "Her flight has been cancelled", "She is feeling ill"],
          a: 1,
          e: "“My flight from Edinburgh has been cancelled, so they've put me on a later one.” Maria không nhắc đến kẹt xe hay bệnh."
        },
        {
          q: "What does Maria ask Daniel to do about the slides?",
          o: ["Print last week's version", "Email them to the board", "Use the updated version"],
          a: 2,
          e: "“Please use the latest version, not the one from last week.” File nằm trên shared drive, trong thư mục Board Meeting; không ai yêu cầu in hay gửi email."
        },
        {
          q: "If the projector in the main room still doesn't work, what can they do?",
          o: ["Use the screen in Room Five", "Cancel the presentation", "Wait until Maria arrives"],
          a: 0,
          e: "“If that doesn't work, we can use the screen in Room Five.” Việc nhờ đội IT xem máy chiếu là bước đầu tiên, còn Room Five là phương án dự phòng; không có chuyện hủy buổi thuyết trình."
        }
      ],
      keywords: ["presentation", "board", "flight cancelled", "later one", "shared drive", "latest version", "Room Five"],
      traps: [
        "Cuộc họp dự định lúc nine nhưng Maria sẽ chỉ tới sau hai giờ chiều; nghe kỹ lý do (chuyến bay bị hủy).",
        "Có hai phiên bản slide: “the latest version” (đúng) và “the one from last week” (sai, bị phủ định).",
        "Câu hỏi hỏi phương án khi cách đầu tiên (nhờ IT) không hiệu quả: đáp án là phương án sau “If that doesn't work”."
      ]
    },
    {
      id: "l-ann-4",
      type: "announcement",
      title: "Welcome to Harlow Castle",
      level: "B2",
      setting: "Hướng dẫn viên chào đón và dặn dò một đoàn khách tham quan lâu đài.",
      speakers: { "Ian": "m" },
      script: [
        { s: "Ian", t: "Good morning, everyone, and welcome to Harlow Castle. My name's Ian, and I'll be your guide today. Before we start, a few practical points. The tour lasts about ninety minutes, and we'll finish in the gift shop." },
        { s: "Ian", t: "Now, photography is allowed in the courtyard and the gardens, but not inside the castle, I'm afraid, as the flash can damage the old paintings. Please also leave any large bags in the lockers by the entrance. The lockers cost one pound, but you get the coin back afterwards." },
        { s: "Ian", t: "We'll begin in the Great Hall, then climb the tower. There are a hundred and twenty steps, so if you'd rather not do that, there's a shorter route that avoids the stairs. Just let me know." },
        { s: "Ian", t: "After that, we'll have a twenty-minute break at the tea room. Please be back at the fountain by twelve fifteen sharp. The coach leaves at one o'clock, and I'm afraid it can't wait for anyone. Right, if there are no questions, let's make a start. Please follow me." }
      ],
      qs: [
        {
          q: "What does the guide say about taking photographs?",
          o: ["They are not allowed anywhere", "They are only allowed outside the castle", "They are allowed if visitors don't use a flash"],
          a: 1,
          e: "“Photography is allowed in the courtyard and the gardens, but not inside the castle.” Flash chỉ là lý do cấm trong lâu đài, không phải điều kiện để được chụp."
        },
        {
          q: "What can visitors do if they don't want to climb the tower?",
          o: ["Take a shorter route without stairs", "Wait for the group in the tea room", "Ask for a lift"],
          a: 0,
          e: "“There's a shorter route that avoids the stairs. Just let me know.” Không có thang máy, và phòng trà chỉ là nơi nghỉ sau chuyến tham quan."
        },
        {
          q: "What time must visitors be back at the fountain?",
          o: ["At one o'clock", "At twelve thirty", "At twelve fifteen"],
          a: 2,
          e: "“Please be back at the fountain by twelve fifteen sharp.” One o'clock là giờ xe khách rời đi, không phải giờ tập trung ở đài phun nước."
        }
      ],
      keywords: ["guide", "ninety minutes", "photography", "courtyard", "lockers", "shorter route", "twelve fifteen"],
      traps: [
        "Cấm chụp ảnh bên trong lâu đài nhưng cho phép ở sân và vườn; lý do là đèn flash, không phải “chụp được nếu tắt flash”.",
        "Nhiều con số gây nhiễu: ninety minutes, one pound, a hundred and twenty steps, twenty-minute break.",
        "Hai mốc giờ gần nhau: twelve fifteen (tập trung ở đài phun nước) và one o'clock (xe khách rời đi)."
      ]
    },

    /* ===================== INTERVIEW ===================== */
    {
      id: "l-int-1",
      type: "interview",
      title: "From accountant to baker",
      level: "B1",
      setting: "Phỏng vấn trên đài phát thanh với một người bỏ nghề kế toán để mở tiệm bánh.",
      speakers: { "Laura": "f", "Mark": "m" },
      script: [
        { s: "Laura", t: "Welcome back to Morning Voices. My guest today is Mark Reed, who left a job in finance to open a bakery. Mark, welcome." },
        { s: "Mark", t: "Thanks, Laura. It's good to be here." },
        { s: "Laura", t: "So, why did you change careers?" },
        { s: "Mark", t: "Well, I worked as an accountant for twelve years. I was fine at it, but I was never really happy. Then one winter I started baking bread at weekends, just for fun. My friends loved it, and they said I should sell it." },
        { s: "Laura", t: "And how long ago was that?" },
        { s: "Mark", t: "Four years ago. I opened the shop last spring, actually. Before that, I sold at a market on Saturdays." },
        { s: "Laura", t: "Was it difficult at the beginning?" },
        { s: "Mark", t: "Very. The hardest part was getting up at four in the morning. I'm not a morning person at all! And I had no idea how much flour a bakery uses. But now I love it." },
        { s: "Laura", t: "What's your most popular product?" },
        { s: "Mark", t: "People expect me to say the sourdough, but it's actually the cheese and onion rolls. We sell about two hundred every week." },
        { s: "Laura", t: "Any plans for the future?" },
        { s: "Mark", t: "Yes, I'd like to start evening classes, so people can learn to bake at home." }
      ],
      qs: [
        {
          q: "How long did Mark work as an accountant?",
          o: ["Four years", "Twelve years", "Two years"],
          a: 1,
          e: "“I worked as an accountant for twelve years.” Four years là thời gian từ khi anh ấy bắt đầu nướng bánh đến nay."
        },
        {
          q: "What was the hardest thing for Mark at the beginning?",
          o: ["Finding customers", "Buying enough flour", "Getting up very early"],
          a: 2,
          e: "“The hardest part was getting up at four in the morning.” Chuyện bột mì chỉ là điều anh ấy không ngờ tới (“no idea how much flour”), không phải điều khó nhất; việc tìm khách không được nhắc."
        },
        {
          q: "Which product is the most popular?",
          o: ["Cheese and onion rolls", "Sourdough bread", "Chocolate cakes"],
          a: 0,
          e: "“People expect me to say the sourdough, but it's actually the cheese and onion rolls.” Sourdough là điều người ta đoán, không phải sự thật."
        }
      ],
      keywords: ["accountant", "twelve years", "baking bread", "four in the morning", "flour", "cheese and onion rolls", "evening classes"],
      traps: [
        "Hai con số về thời gian: twelve years (làm kế toán) và four years ago (bắt đầu làm bánh).",
        "Có nhiều khó khăn được nhắc (dậy sớm, lượng bột); “the hardest” là dậy lúc bốn giờ sáng.",
        "Mark nói người ta thường đoán là sourdough, nhưng “it's actually...” mới là thông tin đúng (cheese and onion rolls)."
      ]
    },
    {
      id: "l-int-2",
      type: "interview",
      title: "A garden for the neighbourhood",
      level: "B1",
      setting: "Người dẫn chương trình phỏng vấn người sáng lập một khu vườn cộng đồng.",
      speakers: { "Chris": "m", "Priya": "f" },
      script: [
        { s: "Chris", t: "Today we're talking about a community garden in the east of the city. With me is Priya Patel, who started it. Priya, tell us about it." },
        { s: "Priya", t: "Thanks, Chris. Well, two years ago the land was just an empty car park. Nobody used it, and it was covered in rubbish. A few neighbours and I asked the council if we could turn it into a garden." },
        { s: "Chris", t: "And the council said yes?" },
        { s: "Priya", t: "Eventually. It took six months, but they agreed. Now we have about forty members." },
        { s: "Chris", t: "What do you grow?" },
        { s: "Priya", t: "Mostly vegetables, like tomatoes, beans and potatoes. We also have a small area for flowers, which the children look after. Anything extra that we grow, we sell to a local restaurant." },
        { s: "Chris", t: "How much does it cost to join?" },
        { s: "Priya", t: "It's free, actually. We used to charge ten pounds a year, but we stopped last month, because a local supermarket now gives us money for tools and seeds." },
        { s: "Chris", t: "And can anyone come along?" },
        { s: "Priya", t: "Of course. We meet every Sunday morning from ten. You don't need any experience. Just bring a pair of gloves, and we'll provide the rest." }
      ],
      qs: [
        {
          q: "What was the land used for before the garden?",
          o: ["It was a car park", "It was a football pitch", "It was a market"],
          a: 0,
          e: "“Two years ago the land was just an empty car park. Nobody used it.” Sân bóng và chợ không được nhắc tới."
        },
        {
          q: "What happens to the extra vegetables?",
          o: ["They are given to the council", "They are given to the children", "They are sold to a restaurant"],
          a: 2,
          e: "“Anything extra that we grow, we sell to a local restaurant.” Trẻ em chỉ chăm sóc khu trồng hoa; hội đồng chỉ là bên cho phép sử dụng đất."
        },
        {
          q: "How much does it cost to join the garden now?",
          o: ["Ten pounds a year", "It is free", "Ten pounds a month"],
          a: 1,
          e: "“It's free, actually. We used to charge ten pounds a year, but we stopped last month.” Mười bảng mỗi năm là mức phí cũ."
        }
      ],
      keywords: ["community garden", "empty car park", "council", "forty members", "sell to a restaurant", "free", "Sunday morning"],
      traps: [
        "Mức phí cũ (ten pounds a year) bị bãi bỏ từ tháng trước; hiện tại thì miễn phí.",
        "Nhiều con số xuất hiện: two years, six months, forty members, ten pounds; mỗi câu hỏi chỉ hỏi một con số.",
        "“Anything extra” là rau thừa, bán cho nhà hàng; đừng nhầm với khu hoa do trẻ em chăm sóc."
      ]
    },
    {
      id: "l-int-3",
      type: "interview",
      title: "Learning to run at forty",
      level: "B2",
      setting: "Phỏng vấn một phụ nữ bắt đầu chạy bộ ở tuổi bốn mươi và nay chạy marathon.",
      speakers: { "Ben": "m", "Hannah": "f" },
      script: [
        { s: "Ben", t: "With me in the studio is Hannah Clarke, who took up running only five years ago, and who is now preparing for her third marathon. Hannah, how did it all start?" },
        { s: "Hannah", t: "Well, it was a bit of an accident, really. I'd put on quite a lot of weight after my second child, and my doctor told me I needed more exercise. I hated the gym, so I thought I'd try running. The first time, I managed about two minutes before I had to stop." },
        { s: "Ben", t: "Two minutes! So what kept you going?" },
        { s: "Hannah", t: "Honestly, it was the local running club. I joined expecting everyone to be much faster than me, but they were so welcoming. Nobody cared about speed." },
        { s: "Ben", t: "And now you're running marathons." },
        { s: "Hannah", t: "Yes, although my first one wasn't a great success. I'd trained for four months, but I started far too quickly, and I had to walk the last six miles. Still, I finished in just under five hours." },
        { s: "Ben", t: "What advice would you give to beginners?" },
        { s: "Hannah", t: "Don't compare yourself with others, and don't buy expensive shoes straight away. Wait until you're sure you'll stick with it. Oh, and find some friends to run with. That matters more than any training plan." }
      ],
      qs: [
        {
          q: "Why did Hannah start running?",
          o: ["She had always loved sport", "A friend persuaded her to join a club", "Her doctor told her to exercise more"],
          a: 2,
          e: "“My doctor told me I needed more exercise. I hated the gym, so I thought I'd try running.” Câu lạc bộ chạy bộ chỉ giúp cô tiếp tục chạy, không phải lý do bắt đầu."
        },
        {
          q: "What encouraged Hannah to keep running?",
          o: ["The wish to run faster than others", "The friendly atmosphere at the club", "A new pair of expensive shoes"],
          a: 1,
          e: "“It was the local running club... they were so welcoming. Nobody cared about speed.” Cô còn khuyên người mới đừng vội mua giày đắt tiền."
        },
        {
          q: "What went wrong in Hannah's first marathon?",
          o: ["She set off too quickly", "She hadn't trained for long enough", "She hurt her foot"],
          a: 0,
          e: "“I started far too quickly, and I had to walk the last six miles.” Cô đã tập bốn tháng (“I'd trained for four months”) nên không phải thiếu luyện tập; chấn thương không được nhắc đến."
        }
      ],
      keywords: ["took up running", "doctor", "hated the gym", "running club", "welcoming", "started too quickly", "beginners"],
      traps: [
        "Nguyên nhân bắt đầu (bác sĩ khuyên tập thể dục) khác với nguyên nhân tiếp tục (sự thân thiện của câu lạc bộ).",
        "“I'd trained for four months” cho thấy cô đã tập đủ lâu; lỗi thật sự là chạy quá nhanh lúc đầu.",
        "Các chi tiết gây nhiễu: hai phút đầu tiên, sáu dặm cuối phải đi bộ, gần năm tiếng; mỗi câu hỏi chỉ hỏi đúng một chi tiết."
      ]
    },
    {
      id: "l-int-4",
      type: "interview",
      title: "Working the night shift",
      level: "B2",
      setting: "Phỏng vấn một y tá làm ca đêm tại bệnh viện về lý do chọn, khó khăn và điều anh ấy nhớ.",
      speakers: { "Sarah": "f", "Omar": "m" },
      script: [
        { s: "Sarah", t: "Tonight on Working Lives, we hear from Omar Hassan, a nurse who has worked nights at a city hospital for nearly eight years. Omar, most people prefer the daytime. Why nights?" },
        { s: "Omar", t: "Well, originally it was just temporary. I needed the extra pay, which is about twenty per cent more, because my wife and I were saving for a house. But then I got used to it, and now I wouldn't change." },
        { s: "Sarah", t: "Isn't it exhausting?" },
        { s: "Omar", t: "It can be. The first month was brutal, I won't lie. I couldn't sleep properly during the day. What helped was darkening the bedroom with thick curtains and keeping the same routine even on my days off. Many colleagues don't do that, and they struggle." },
        { s: "Sarah", t: "What do you like about it?" },
        { s: "Omar", t: "It's calmer. There are fewer visitors, so we have more time to talk to patients. People often open up at three in the morning." },
        { s: "Sarah", t: "And what do you miss?" },
        { s: "Omar", t: "Honestly, family dinners. I leave at half past six in the evening, just when everyone sits down to eat. So we make up for it with a big breakfast together after my shift." }
      ],
      qs: [
        {
          q: "Why did Omar first choose to work nights?",
          o: ["To earn extra money", "To spend more time with patients", "To avoid busy visiting hours"],
          a: 0,
          e: "“Originally it was just temporary. I needed the extra pay... because my wife and I were saving for a house.” Việc có nhiều thời gian với bệnh nhân là điều anh thích sau này, không phải lý do ban đầu."
        },
        {
          q: "What helped Omar to sleep during the day?",
          o: ["Taking sleeping tablets after every shift", "Moving to a quieter part of the city", "Darkening the bedroom and keeping a routine"],
          a: 2,
          e: "“What helped was darkening the bedroom with thick curtains and keeping the same routine.” Không có thuốc ngủ hay chuyển nhà nào được nhắc đến."
        },
        {
          q: "What does Omar miss most about working nights?",
          o: ["Sleeping at night", "Having dinner with his family", "Eating breakfast with his family"],
          a: 1,
          e: "“Honestly, family dinners.” Bữa sáng cùng gia đình là cách bù lại (“we make up for it with a big breakfast”), không phải điều anh nhớ."
        }
      ],
      keywords: ["night shift", "extra pay", "twenty per cent", "brutal", "thick curtains", "family dinners", "big breakfast"],
      traps: [
        "Lý do ban đầu (tiền) khác với điều anh thích bây giờ (ca đêm yên tĩnh); đọc kỹ chữ “first/originally”.",
        "Hai bữa ăn gần nhau: dinner (điều anh nhớ) và breakfast (cách bù lại); đáp án là dinner.",
        "Nhiều đồng nghiệp “struggle” vì không giữ thói quen ngủ; đừng nhầm đó là cách giúp Omar."
      ]
    },

    /* ===================== DISCUSSION ===================== */
    {
      id: "l-dis-1",
      type: "discussion",
      title: "Choosing a team-building activity",
      level: "B1",
      setting: "Ba đồng nghiệp bàn nên tổ chức hoạt động gắn kết nhóm nào với ngân sách hạn chế.",
      speakers: { "Grace": "f", "Sam": "m", "Ruth": "f" },
      script: [
        { s: "Grace", t: "Right, we need to decide where to take the team on the twentieth. The budget is twenty-five pounds per person." },
        { s: "Sam", t: "I think we should go bowling. It's fun, everyone can join in, and it's only fifteen pounds each, including shoes." },
        { s: "Ruth", t: "Hmm, bowling is a bit noisy, though. We'd hardly be able to talk to each other. I'd prefer something outdoors, like a picnic in Central Park." },
        { s: "Grace", t: "A picnic is lovely in summer, but this is October. What about an escape room? It's twenty-two pounds each, and you have to work together to solve puzzles, so it's good for team building." },
        { s: "Sam", t: "Yes, but only six people can play in one room, and we're fourteen." },
        { s: "Grace", t: "Oh, I hadn't thought of that. We'd need to split into groups." },
        { s: "Ruth", t: "Well, that might be fun, with the groups competing." },
        { s: "Sam", t: "True. But the escape room is miles away, and we don't have a minibus." },
        { s: "Ruth", t: "OK, then how about bowling after all, but we have dinner first at a quiet restaurant so we can chat?" },
        { s: "Grace", t: "Now that's a good compromise. Bowling is fifteen pounds, which leaves ten pounds for food." },
        { s: "Sam", t: "Great. I'll book it." }
      ],
      qs: [
        {
          q: "Why doesn't Ruth like Sam's first idea?",
          o: ["It is too noisy to talk", "It is too expensive", "It is too far away"],
          a: 0,
          e: "Ruth: “Bowling is a bit noisy, though. We'd hardly be able to talk to each other.” Bowling chỉ mười lăm bảng, trong ngân sách; chuyện quá xa là lý do loại bỏ escape room."
        },
        {
          q: "Why do they finally reject the escape room?",
          o: ["It costs more than their budget", "It is difficult to get to", "It can't hold the whole team"],
          a: 1,
          e: "Sam: “The escape room is miles away, and we don't have a minibus.” Giá hai mươi hai bảng nằm trong ngân sách hai mươi lăm; vấn đề số người đã được giải quyết bằng cách chia nhóm."
        },
        {
          q: "What will they do on the twentieth?",
          o: ["Go bowling and then have dinner", "Play games in Central Park", "Have dinner and then go bowling"],
          a: 2,
          e: "Ruth: “bowling after all, but we have dinner first.” Grace gọi đó là “a good compromise”. Thứ tự là ăn tối trước rồi mới chơi bowling; picnic không được chọn vì đang tháng Mười."
        }
      ],
      keywords: ["budget", "bowling", "noisy", "picnic", "escape room", "minibus", "compromise"],
      traps: [
        "Người nói đổi ý nhiều lần; đáp án cuối cùng là bowling sau khi ăn tối, không phải escape room hay picnic.",
        "Các con số (twenty-five, fifteen, twenty-two, six, fourteen) dễ gây nhầm; chỉ vài con số liên quan đến câu hỏi.",
        "Vấn đề số người của escape room được giải quyết bằng chia nhóm; lý do bị loại cuối cùng là quá xa và không có xe."
      ]
    },
    {
      id: "l-dis-2",
      type: "discussion",
      title: "Working from home",
      level: "B2",
      setting: "Ba đồng nghiệp thảo luận có nên tăng số ngày làm việc tại nhà lên ba ngày mỗi tuần hay không.",
      speakers: { "Olivia": "f", "Marcus": "m", "Elena": "f" },
      script: [
        { s: "Olivia", t: "So, the question is whether we should let staff work from home three days a week instead of two. Marcus, you were against it, weren't you?" },
        { s: "Marcus", t: "Well, not exactly against. I just worry about the new starters. They learn so much by watching more experienced people, and that's hard to do through a screen." },
        { s: "Elena", t: "I see your point, but honestly, I get far more done at home. In the office, I'm interrupted every ten minutes. Last month I finished a report in two days at home that normally takes me a week." },
        { s: "Marcus", t: "That's fine for you, Elena, because you've been here for ten years. For someone in their first month, it's different." },
        { s: "Olivia", t: "What if the new starters came in four days a week for their first six months, and then moved to three days at home?" },
        { s: "Elena", t: "That seems fair to me. I'd also like to keep one fixed day when everyone is in, so we can hold meetings face to face." },
        { s: "Marcus", t: "Yes, Wednesday would be best. If that was guaranteed, I'd support the change." },
        { s: "Olivia", t: "Good. So we agree, three days at home for experienced staff, and a trial period for the rest. I'll write it up and send it round on Friday." }
      ],
      qs: [
        {
          q: "What worries Marcus most?",
          o: ["Staff will work fewer hours", "Clients will become unhappy", "New employees will learn less"],
          a: 2,
          e: "Marcus: “I just worry about the new starters. They learn so much by watching more experienced people.” Anh ấy nói mình không hẳn phản đối (“not exactly against”) và không nhắc đến giờ làm hay khách hàng."
        },
        {
          q: "Why does Elena prefer working from home?",
          o: ["She is interrupted much less", "Her office is far from her house", "She has more time for meetings"],
          a: 0,
          e: "Elena: “In the office, I'm interrupted every ten minutes... I finished a report in two days at home.” Cô không nhắc đến khoảng cách; họp trực tiếp là điều cô muốn giữ một ngày cố định."
        },
        {
          q: "What condition does Marcus give for supporting the change?",
          o: ["New starters must work from home on Fridays", "A fixed day when everyone is in the office", "Everyone must work from home on Wednesdays"],
          a: 1,
          e: "Marcus: “Wednesday would be best. If that was guaranteed, I'd support the change.” Tức là một ngày cố định cả nhóm có mặt ở văn phòng (Wednesday), không phải làm ở nhà. Friday chỉ là ngày Olivia gửi bản tổng hợp."
        }
      ],
      keywords: ["three days", "new starters", "experienced people", "interrupted", "face to face", "fixed day", "trial period"],
      traps: [
        "Marcus “not exactly against” và có điều kiện; nghe điều kiện cuối cùng mới biết ông ủng hộ khi nào.",
        "Ngày Wednesday là ngày mọi người đều ở văn phòng, không phải ngày làm việc ở nhà; Friday chỉ là ngày Olivia gửi văn bản.",
        "Nhiều con số gây nhiễu (ten minutes, two days, a week, ten years, four days, six months); câu hỏi chỉ cần ý kiến và lý do."
      ]
    },
    {
      id: "l-dis-3",
      type: "discussion",
      title: "Spending the office budget",
      level: "B2",
      setting: "Ba đồng nghiệp tranh luận cách dùng khoản ngân sách còn dư của phòng ban.",
      speakers: { "Nadia": "f", "Ollie": "m", "Gemma": "f" },
      script: [
        { s: "Nadia", t: "Right, so we have one thousand five hundred pounds left in the budget, and we need to spend it before the end of March. Any ideas?" },
        { s: "Ollie", t: "I'd like to buy standing desks. Lots of us have back problems from sitting all day. They cost about two hundred pounds each, so we could buy six." },
        { s: "Gemma", t: "Hmm, I'm not sure. Six desks for a team of twelve doesn't seem fair. Who would get them? I'd rather spend the money on a training course. There's an excellent one on presentation skills for nine hundred pounds." },
        { s: "Ollie", t: "But a course only helps people for a few days. A desk is for life." },
        { s: "Nadia", t: "Well, what I think the whole team would really notice is a new coffee machine. The one we have keeps breaking. A good one costs about four hundred." },
        { s: "Gemma", t: "Honestly, Nadia, that's not very important." },
        { s: "Nadia", t: "Maybe not, but it would make everybody happy. And if we buy the machine, we'd still have eleven hundred left for something else." },
        { s: "Ollie", t: "That's true. We could use it for four desks, then, for the people with the worst backs." },
        { s: "Gemma", t: "OK. If we choose carefully, I can agree to that. We can ask the team to vote for the course next year." }
      ],
      qs: [
        {
          q: "Why does Gemma object to buying standing desks?",
          o: ["They are too expensive", "There wouldn't be enough for everyone", "Nobody has back problems"],
          a: 1,
          e: "Gemma: “Six desks for a team of twelve doesn't seem fair. Who would get them?” Giá hai trăm bảng mỗi bàn do Ollie nêu ra, không phải lý do cô phản đối; và Ollie nói nhiều người bị đau lưng."
        },
        {
          q: "Why does Nadia suggest a new coffee machine?",
          o: ["It is cheaper than the other ideas", "Everyone has asked for one", "The current one often breaks"],
          a: 2,
          e: "Nadia: “The one we have keeps breaking.” Cô nói máy mới “would make everybody happy”, nhưng không nói mọi người đã yêu cầu; giá khoảng bốn trăm bảng chỉ để tính số tiền còn lại."
        },
        {
          q: "What do they decide to buy in the end?",
          o: ["A coffee machine and four standing desks", "Six standing desks and a training course", "A coffee machine and a training course"],
          a: 0,
          e: "Nadia: mua máy cà phê thì còn “eleven hundred left”. Ollie: “We could use it for four desks.” Gemma: “I can agree to that.” Khóa đào tạo để dành cho năm sau."
        }
      ],
      keywords: ["budget", "standing desks", "back problems", "training course", "coffee machine", "eleven hundred", "vote"],
      traps: [
        "Ba ý tưởng cạnh tranh với nhiều mức giá (two hundred, nine hundred, four hundred); đáp án cuối là kết quả sau khi cả ba đồng ý.",
        "Số lượng bàn đổi từ six (ý ban đầu của Ollie) thành four (quyết định cuối cùng).",
        "Gemma phản đối vì tính công bằng chứ không phải giá hay việc không ai đau lưng; khóa học bị hoãn sang năm sau."
      ]
    },
    {
      id: "l-dis-4",
      type: "discussion",
      title: "Cars or bikes?",
      level: "B2",
      setting: "Ba đồng nghiệp bàn việc chuyển một phần bãi đỗ xe công ty thành nơi để xe đạp.",
      speakers: { "Fiona": "f", "Raj": "m", "Tom": "m" },
      script: [
        { s: "Fiona", t: "Thanks for coming. As you know, the landlord wants to turn most of our car park into a bike shed. Raj, you drive in every day. How do you feel about that?" },
        { s: "Raj", t: "Honestly, I'm not thrilled. I live twenty miles away, and there's no direct train. If I lose my space, I'd have to park in the multi-storey, which costs six pounds a day." },
        { s: "Tom", t: "I understand, Raj, but only about ten people park here regularly, and the car park has fifty spaces. It's mostly empty. Meanwhile, I cycle every day, and I have to lock my bike to a fence in the rain." },
        { s: "Raj", t: "Yes, but the car park isn't empty on Mondays and Fridays. Lots of people drive in on those days, because they come for meetings." },
        { s: "Fiona", t: "That's a fair point. So how about a compromise? We keep thirty spaces, and turn the other twenty into bike storage with a roof and some showers?" },
        { s: "Tom", t: "Showers would be a real bonus. I'd be happy with that." },
        { s: "Raj", t: "I could live with that, as long as visitors can still park. We can't make clients walk from the multi-storey." },
        { s: "Fiona", t: "Agreed. I'll tell the landlord we accept the plan, on condition that fifteen of the thirty spaces are kept for visitors." },
        { s: "Raj", t: "Well, that works for me." }
      ],
      qs: [
        {
          q: "What is Raj's main worry about the landlord's plan?",
          o: ["He would have to cycle twenty miles", "He doesn't want to share the space", "He might have to pay for parking nearby"],
          a: 2,
          e: "Raj: “If I lose my space, I'd have to park in the multi-storey, which costs six pounds a day.” Anh sống cách hai mươi dặm nhưng không nói sẽ đạp xe; không có chuyện không muốn chia sẻ chỗ đỗ."
        },
        {
          q: "What problem does Tom mention about the present situation?",
          o: ["There is nowhere dry to leave his bike", "Cycling to work is dangerous", "The bike shed is too small"],
          a: 0,
          e: "Tom: “I cycle every day, and I have to lock my bike to a fence in the rain.” Hiện chưa có nhà để xe đạp (đó là đề xuất của chủ nhà), và Tom không nói đạp xe nguy hiểm."
        },
        {
          q: "What condition does Fiona set for accepting the plan?",
          o: ["Showers must be installed", "Some spaces must be kept for visitors", "The landlord must pay for the roof"],
          a: 1,
          e: "Fiona: “on condition that fifteen of the thirty spaces are kept for visitors.” Vòi sen và mái che là một phần của đề xuất thỏa hiệp, không phải điều kiện cuối; chủ nhà trả tiền mái che không được nhắc tới."
        }
      ],
      keywords: ["car park", "bike shed", "multi-storey", "six pounds a day", "compromise", "showers", "on condition that"],
      traps: [
        "Số chỗ đỗ thay đổi: năm mươi chỗ ban đầu, giữ lại ba mươi, trong đó mười lăm dành cho khách; đọc kỹ số nào được hỏi.",
        "Raj lo về chi phí đỗ xe nơi khác, không phải chuyện đạp xe hai mươi dặm (anh sống xa nhưng không có ý đạp xe).",
        "Mái che và vòi sen nằm trong đề xuất thỏa hiệp của Fiona; điều kiện cuối cùng để chấp nhận là chỗ đỗ dành cho khách."
      ]
    }
  ];
})();
