(function () {
  const D = (globalThis.AptisData = globalThis.AptisData || {});

  D.writing = [
    /* ===================== TASK 1 – Short answers (form) ===================== */
    {
      id: "w1-1",
      task: 1,
      title: "Join a language club",
      context:
        "You want to join an English conversation club at your local community centre. Fill in the membership form. Write short answers (1–5 words) to Questions 1–5, then write 20–30 words for Question 6.\n(Điền đơn đăng ký câu lạc bộ: 5 câu đầu chỉ cần cụm ngắn, câu 6 viết 1–2 câu hoàn chỉnh.)",
      parts: [
        {
          prompt: "What is your full name?",
          min: 1,
          max: 5,
          sample: "Tran Minh Chau",
          hint: "Viết họ tên đầy đủ, viết hoa chữ cái đầu mỗi từ. Không cần câu hoàn chỉnh."
        },
        {
          prompt: "What do you do for a living?",
          min: 1,
          max: 5,
          sample: "I'm an accounts assistant",
          hint: "Một cụm danh từ (accounts assistant) hoặc \"I'm a / an ...\" đều được."
        },
        {
          prompt: "Which skill do you most want to improve?",
          min: 1,
          max: 5,
          sample: "My spoken fluency",
          hint: "Chọn một kỹ năng: speaking, listening, writing, pronunciation..."
        },
        {
          prompt: "Why are you joining the club?",
          min: 1,
          max: 5,
          sample: "To meet new people",
          hint: "Dùng \"To + động từ\" để trả lời ngắn gọn lý do."
        },
        {
          prompt: "How often can you come?",
          min: 1,
          max: 5,
          sample: "Every Thursday evening",
          hint: "Trả lời tần suất: twice a month, every Monday..."
        },
        {
          prompt: "Please tell us briefly about your experience of learning English.",
          min: 20,
          max: 30,
          sample:
            "I have studied English for three years, mostly online. Although my grammar is quite good, I lack confidence when speaking, so I hope to practise with other members.",
          hint: "Viết 2 câu: 1 câu về quá trình học, 1 câu về điểm yếu/mục tiêu. Dùng although hoặc so để nối."
        }
      ],
      phrases: [
        "I'm a / an ... (nghề nghiệp)",
        "To improve my ...",
        "To meet new people",
        "Twice a week / month",
        "Every Thursday evening",
        "I have studied ... for ... years",
        "Although ..., I ...",
        "I lack confidence when ...",
        "I hope to practise with ...",
        "mostly online"
      ],
      tips: [
        "Câu 1–5 chỉ được 1–5 từ: đừng viết câu dài, vì vượt giới hạn có thể bị trừ điểm.",
        "Câu 6 (20–30 từ): viết 2 câu hoàn chỉnh, có một từ nối như although, so, because để thể hiện trình độ B1–B2.",
        "Trả lời đúng ý câu hỏi trước, rồi mới thêm chi tiết. Soát lại chính tả tên riêng và viết hoa."
      ]
    },
    {
      id: "w1-2",
      task: 1,
      title: "Book a guided city tour",
      context:
        "You are booking a guided walking tour of the old town in your holiday destination. Complete the booking form. Write 1–5 words for Questions 1–5, then write 20–30 words for Question 6.\n(Điền form đặt tour: 5 câu ngắn + 1 câu viết 20–30 từ.)",
      parts: [
        {
          prompt: "What is your surname?",
          min: 1,
          max: 5,
          sample: "Nguyen",
          hint: "Chỉ cần viết họ (surname / family name), không cần viết cả tên."
        },
        {
          prompt: "Where are you from?",
          min: 1,
          max: 5,
          sample: "Da Nang, Vietnam",
          hint: "Thành phố + quốc gia là đủ."
        },
        {
          prompt: "How many people are in your group?",
          min: 1,
          max: 5,
          sample: "Four adults, one child",
          hint: "Nói rõ số người lớn / trẻ em."
        },
        {
          prompt: "Which kind of tour do you prefer?",
          min: 1,
          max: 5,
          sample: "Food and street art",
          hint: "Ví dụ: history, food, architecture, night tour."
        },
        {
          prompt: "When would you like to start?",
          min: 1,
          max: 5,
          sample: "Ten o'clock, Saturday morning",
          hint: "Giờ + ngày. Viết giờ bằng chữ cho an toàn: ten o'clock."
        },
        {
          prompt: "Is there anything else we should know about your group?",
          min: 20,
          max: 30,
          sample:
            "One of us uses a wheelchair, so we would be grateful if the route avoided steep hills and stairs. We would also like a guide who speaks slowly.",
          hint: "Nêu nhu cầu đặc biệt bằng giọng lịch sự: we would be grateful if..., we would also like..."
        }
      ],
      phrases: [
        "We would be grateful if ...",
        "We would also like ...",
        "a guide who speaks slowly",
        "avoid steep hills and stairs",
        "a group of four adults",
        "Saturday morning",
        "one of us uses / needs ...",
        "as soon as possible",
        "It would be helpful if ..."
      ],
      tips: [
        "Họ (surname) khác tên gọi (first name): đọc kỹ từ khoá trong câu hỏi trước khi viết.",
        "Câu 6 là yêu cầu bổ sung: dùng giọng lịch sự (would be grateful, would also like) thay cho giọng ra lệnh.",
        "Giờ và số lượng nên viết rõ, tránh viết tắt dễ gây hiểu nhầm. Không cần viết \"I\" ở đầu mọi cụm ngắn."
      ]
    },
    {
      id: "w1-3",
      task: 1,
      title: "Register for an online course",
      context:
        "You want to sign up for an online course at a training website. Complete the registration form. Write 1–5 words for Questions 1–5, then write 20–30 words for Question 6.\n(Đăng ký khoá học trực tuyến: 5 câu ngắn + 1 câu viết dài hơn.)",
      parts: [
        {
          prompt: "What is your job title?",
          min: 1,
          max: 5,
          sample: "Marketing executive",
          hint: "Chức danh công việc, ví dụ: sales manager, IT technician."
        },
        {
          prompt: "Which course do you want to take?",
          min: 1,
          max: 5,
          sample: "Data analysis for beginners",
          hint: "Ghi tên khoá học, không cần câu đầy đủ."
        },
        {
          prompt: "How would you describe your computer skills?",
          min: 1,
          max: 5,
          sample: "Confident with spreadsheets",
          hint: "Dùng tính từ: basic, intermediate, advanced, confident..."
        },
        {
          prompt: "How did you hear about the course?",
          min: 1,
          max: 5,
          sample: "From a colleague",
          hint: "From a friend / colleague, through social media, on your website..."
        },
        {
          prompt: "What time of day suits you best?",
          min: 1,
          max: 5,
          sample: "Early morning before work",
          hint: "Early morning, lunchtime, after work, at weekends..."
        },
        {
          prompt: "Why do you think this course will help your career?",
          min: 20,
          max: 30,
          sample:
            "It will help me analyse sales figures and present clear results to my manager. As a result, I hope to be considered for a senior position next year.",
          hint: "Nêu lợi ích cụ thể (will help me...) rồi nối bằng As a result để nói mục tiêu nghề nghiệp."
        }
      ],
      phrases: [
        "It will help me (to) ...",
        "As a result, I hope to ...",
        "be considered for a senior position",
        "analyse sales figures",
        "present clear results",
        "I would like to develop my skills in ...",
        "confident with ...",
        "from a colleague / through social media",
        "work towards a promotion"
      ],
      tips: [
        "Trả lời bằng cụm danh từ hoặc tính từ là đủ ở câu 1–5. Đừng chép lại cả câu hỏi.",
        "Câu 6: nêu lý do cụ thể (analyse sales figures) tốt hơn lý do chung chung như \"it is good for me\".",
        "Dùng một từ nối (As a result, Therefore, so) để câu trả lời có tính liên kết, gần với yêu cầu mức B2."
      ]
    },
    {
      id: "w1-4",
      task: 1,
      title: "Join a sports centre",
      context:
        "You are joining a new sports centre in your neighbourhood. Fill in the membership form. Write 1–5 words for Questions 1–5, then write 20–30 words for Question 6.\n(Điền đơn thành viên trung tâm thể thao: 5 câu ngắn + 1 câu 20–30 từ.)",
      parts: [
        {
          prompt: "What is your full name?",
          min: 1,
          max: 5,
          sample: "Pham Quoc Bao",
          hint: "Họ tên đầy đủ, viết hoa chữ cái đầu."
        },
        {
          prompt: "What is your favourite sport?",
          min: 1,
          max: 5,
          sample: "Badminton, definitely",
          hint: "Tên môn thể thao; có thể thêm một trạng từ nhấn mạnh."
        },
        {
          prompt: "How often do you exercise?",
          min: 1,
          max: 5,
          sample: "About three times weekly",
          hint: "Trạng từ tần suất: twice a week, every day, once a month..."
        },
        {
          prompt: "Do you have any health problems?",
          min: 1,
          max: 5,
          sample: "No, only a sore knee",
          hint: "No / None, hoặc nêu ngắn gọn vấn đề: a sore knee, back pain."
        },
        {
          prompt: "When do you prefer to train?",
          min: 1,
          max: 5,
          sample: "After work, around six",
          hint: "Thời điểm trong ngày: before work, at lunchtime, in the evening."
        },
        {
          prompt: "Describe what you usually do to stay healthy.",
          min: 20,
          max: 30,
          sample:
            "I play badminton with colleagues twice a week and walk to work when the weather is fine. I also cook at home, so I eat less fast food.",
          hint: "Liệt kê 2–3 thói quen (thể thao, ăn uống) bằng thì hiện tại đơn và trạng từ tần suất."
        }
      ],
      phrases: [
        "twice a week / three times a month",
        "to stay healthy / to keep fit",
        "I try to ...",
        "when the weather is fine",
        "so I eat less fast food",
        "I walk / cycle to work",
        "a sore knee / back pain",
        "after work, around six",
        "I play ... with colleagues"
      ],
      tips: [
        "Câu hỏi về sức khoẻ: trả lời trung thực và ngắn gọn, không cần giải thích dài ở câu 4.",
        "Câu 6 dùng thì hiện tại đơn cho thói quen: I play, I walk, I try. Kết hợp trạng từ tần suất (usually, twice a week).",
        "Dùng \"so\" hoặc \"because\" để nối hai ý, giúp bài mượt hơn mà không vượt quá 30 từ."
      ]
    },

    /* ===================== TASK 2 – Social media / chat ===================== */
    {
      id: "w2-1",
      task: 2,
      title: "Online book club chat",
      context:
        "You are a member of an online book club. Read the three messages from other members and reply to each one. Write 30–40 words for each reply.\n(Trả lời 3 tin nhắn trong nhóm chat: mỗi câu 30–40 từ, giọng thân thiện.)",
      parts: [
        {
          prompt:
            "Maya: Hi everyone! I'm trying to read more this year, but I never seem to find the time. When do you usually read, and where?",
          min: 30,
          max: 40,
          sample:
            "Hi Maya! I usually read on the train to work, because it's the only quiet time I get all day. At weekends I also read in bed, although I often fall asleep after twenty minutes!",
          hint: "Trả lời đủ hai ý: khi nào và ở đâu. Thêm một chi tiết vui để tự nhiên."
        },
        {
          prompt:
            "Daniel: Do you prefer paper books or e-books? I can't decide which to buy for my birthday.",
          min: 30,
          max: 40,
          sample:
            "Personally, I prefer e-books because I can carry hundreds of them on one device, which is perfect for travelling. That said, nothing beats the smell of a paper book, so it really depends on your habits.",
          hint: "Nêu lựa chọn + lý do, rồi dùng \"That said\" để đưa ý đối lập."
        },
        {
          prompt:
            "Priya: Our next meeting is on the last Friday of the month. What kind of book would you like us to read next, and why?",
          min: 30,
          max: 40,
          sample:
            "I'd love to read a crime novel next, since the plot keeps you guessing until the very end. It would also give us plenty to discuss, especially if everyone tries to guess the culprit before the final chapter.",
          hint: "Đề xuất thể loại sách, giải thích bằng since / because, rồi thêm lợi ích cho cả nhóm."
        }
      ],
      phrases: [
        "Personally, I prefer ... because ...",
        "That said, ...",
        "It really depends on ...",
        "I'd love to ...",
        "..., although I often ...",
        "It would also give us plenty to discuss.",
        "nothing beats ...",
        "which is perfect for ...",
        "keep you guessing"
      ],
      tips: [
        "Task 2 là chat thân mật: có thể dùng câu cảm thán, \"Hi Maya!\", nhưng vẫn phải đủ 30–40 từ và đúng ngữ pháp.",
        "Mỗi câu trả lời nên có cấu trúc: trả lời thẳng câu hỏi, đưa lý do, thêm một chi tiết hoặc ý đối lập.",
        "Gọi tên người gửi ở đầu để thể hiện bạn đang trả lời đúng tin nhắn đó."
      ]
    },
    {
      id: "w2-2",
      task: 2,
      title: "Working from home forum",
      context:
        "You are a member of an online forum for office workers. Read the three messages and write a reply to each one. Write 30–40 words for each reply.\n(Diễn đàn nhân viên văn phòng: trả lời 3 tin, mỗi tin 30–40 từ.)",
      parts: [
        {
          prompt:
            "Sam: My company is thinking about letting us work from home three days a week. Would you like that? Why or why not?",
          min: 30,
          max: 40,
          sample:
            "Hi Sam! I'd love that, to be honest. I'd save two hours of commuting every day and could spend that time exercising. However, I'd probably miss chatting with my colleagues, so I'd still go in twice a week.",
          hint: "Nêu quan điểm rõ ràng (love / wouldn't like), kèm lý do và một nhược điểm bằng However."
        },
        {
          prompt:
            "Karen: I find it hard to switch off after work when I'm at home. Do you have any tips for keeping a good work-life balance?",
          min: 30,
          max: 40,
          sample:
            "Good question, Karen! What works for me is finishing at a fixed time and closing my laptop completely. I also go for a short walk afterwards, so my brain understands that the working day is over.",
          hint: "Đưa 2 lời khuyên cụ thể. Cấu trúc \"What works for me is ...\" rất hữu ích."
        },
        {
          prompt:
            "Leo: What do you miss most, or enjoy most, about working in an office with other people?",
          min: 30,
          max: 40,
          sample:
            "What I enjoy most is the team spirit. When we work side by side, it's much easier to solve problems quickly and to share ideas. On the other hand, I definitely don't miss the noisy open-plan space!",
          hint: "Chọn miss HOẶC enjoy, rồi có thể thêm điểm đối lập bằng On the other hand."
        }
      ],
      phrases: [
        "to be honest, ...",
        "I'd save ... every day",
        "However, I'd probably miss ...",
        "What works for me is ...",
        "switch off after work",
        "work-life balance",
        "team spirit",
        "side by side",
        "On the other hand, ...",
        "open-plan office"
      ],
      tips: [
        "Khi được hỏi \"Would you like...? Why or why not?\" hãy chọn một phía rõ ràng rồi giải thích, đừng trả lời lấp lửng.",
        "Lời khuyên (tips) nên là hai việc cụ thể, nối bằng \"and\" hoặc \"also\", thay vì chỉ nói \"you should relax\".",
        "Đếm từ: 30 từ khoảng 2 câu ngắn + 1 câu phụ; đừng viết một câu quá dài dễ sai ngữ pháp."
      ]
    },
    {
      id: "w2-3",
      task: 2,
      title: "Our City group chat",
      context:
        "You are in a group chat called \"Our City\" with other people who live in your town. Read the three messages and reply to each one. Write 30–40 words for each reply.\n(Nhóm chat về thành phố: trả lời 3 tin nhắn, mỗi tin 30–40 từ.)",
      parts: [
        {
          prompt:
            "Ellie: The council wants to make the city centre car-free. What do you think of the idea?",
          min: 30,
          max: 40,
          sample:
            "I think it's a great idea, as long as public transport is frequent and cheap. Cleaner air and quieter streets would make the centre far more pleasant, although shop owners might worry about losing customers.",
          hint: "Nêu ý kiến + điều kiện (as long as) + một mối lo ngại bằng although."
        },
        {
          prompt:
            "Raj: I'm new here. Can you recommend a good place to spend a free Sunday?",
          min: 30,
          max: 40,
          sample:
            "Welcome, Raj! I'd recommend the riverside park, which has a lovely walking path and a small market on Sundays. You could then have lunch at one of the cafés nearby. It's the perfect way to explore.",
          hint: "Chào người mới, đề xuất 1 địa điểm + hoạt động đi kèm. Dùng mệnh đề quan hệ (which has ...)."
        },
        {
          prompt:
            "Mina: How do you usually get around the city, and are you happy with public transport?",
          min: 30,
          max: 40,
          sample:
            "I usually take the bus, because it stops right outside my flat. Overall, I'm quite happy with it, but the service is unreliable during rush hour, so I sometimes cycle instead when the weather is good.",
          hint: "Trả lời cả hai ý: phương tiện thường dùng và mức độ hài lòng (có điểm cộng và điểm trừ)."
        }
      ],
      phrases: [
        "I think it's a great idea, as long as ...",
        "Cleaner air and quieter streets",
        "I'd recommend ..., which has ...",
        "It's the perfect way to ...",
        "get around the city",
        "Overall, I'm quite happy with ...",
        "unreliable during rush hour",
        "I sometimes ... instead",
        "although ... might worry about ..."
      ],
      tips: [
        "Khi có hai câu hỏi trong một tin nhắn (How...? and are you happy...?), hãy trả lời cả hai, nếu không sẽ mất điểm nội dung.",
        "Dùng từ vựng chủ đề thành phố: rush hour, public transport, city centre, council, pollution.",
        "Dùng \"which\" để thêm thông tin cho địa điểm: câu dài vừa phải nhưng vẫn B2."
      ]
    },
    {
      id: "w2-4",
      task: 2,
      title: "Technology and daily life chat",
      context:
        "You are in a group chat with colleagues about technology and daily life. Read the three messages and reply to each one. Write 30–40 words for each reply.\n(Chat nhóm đồng nghiệp về công nghệ: trả lời 3 tin, mỗi tin 30–40 từ.)",
      parts: [
        {
          prompt:
            "Oliver: I've just bought a smartwatch, but I'm not sure it's worth it. Do you use any gadgets to make your life easier?",
          min: 30,
          max: 40,
          sample:
            "Congratulations, Oliver! My favourite gadget is a robot vacuum cleaner. It cleans the flat while I'm at work, which saves me a lot of time. Honestly, I'd recommend it to anyone with a busy schedule.",
          hint: "Nêu tên thiết bị, công dụng và lời khuyên cuối cùng (I'd recommend it to ...)."
        },
        {
          prompt:
            "Chloe: My teenage son spends hours on his phone. Do you think children use screens too much nowadays?",
          min: 30,
          max: 40,
          sample:
            "I'm afraid I do, Chloe. Screens are useful for homework, but too much time online can harm sleep and concentration. Perhaps you could agree on a few phone-free hours each evening, so the whole family relaxes together.",
          hint: "Nêu ý kiến, cân bằng ưu/nhược điểm, rồi gợi ý giải pháp bằng Perhaps you could ..."
        },
        {
          prompt:
            "Ben: There's a free online course on digital skills at work. Have you ever learned something online, and would you recommend it?",
          min: 30,
          max: 40,
          sample:
            "Yes, I learnt basic Excel from video tutorials last year, and it was really helpful. The only drawback is that you need self-discipline, so I'd recommend setting a regular time each week, as you would for a class.",
          hint: "Dùng thì quá khứ đơn cho kinh nghiệm đã qua (learnt), rồi đưa lời khuyên bằng I'd recommend + V-ing."
        }
      ],
      phrases: [
        "My favourite gadget is ...",
        "which saves me a lot of time",
        "I'd recommend it to anyone with ...",
        "I'm afraid I do.",
        "too much time online can harm ...",
        "Perhaps you could agree on ...",
        "The only drawback is that ...",
        "self-discipline",
        "I'd recommend setting ..."
      ],
      tips: [
        "Câu hỏi \"Have you ever...?\" nên trả lời bằng thì quá khứ đơn kèm mốc thời gian (last year) để kể trải nghiệm cụ thể.",
        "\"I'm afraid I do\" là cách đồng ý lịch sự khi nói điều không vui; hữu ích khi đưa ý kiến tiêu cực.",
        "Kết thúc bằng một lời khuyên giúp bài trả lời tự nhiên và đủ độ dài."
      ]
    },

    /* ===================== TASK 3 – Informal email ===================== */
    {
      id: "w3-1",
      task: 3,
      title: "Weekend hiking invitation",
      context:
        "Your friend Jack has sent you this message: \"I'm planning a hike in the hills this Saturday. Would you like to come? We could leave early and have a picnic at the top.\" Write an email to Jack. Say whether you can come and what you will bring. Write 40–50 words.\n(Email thân mật cho bạn: 40–50 từ, gồm lời chào và lời kết ngắn.)",
      parts: [
        {
          prompt:
            "Write an email to Jack. Say whether you can come and what you will bring. Write 40–50 words.",
          min: 40,
          max: 50,
          sample:
            "Hi Jack,\n\nThanks for inviting me! I'd love to come, although I haven't been hiking for ages, so please choose an easy route. I'll bring sandwiches and plenty of water. Hopefully it won't rain! Shall we meet at the station at seven?\n\nSpeak soon,\nLinh",
          hint: "Cảm ơn lời mời, nhận lời, nêu đồ mang theo, đề xuất giờ gặp. Lời chào thân mật: Hi Jack, ... Speak soon."
        }
      ],
      phrases: [
        "Thanks for inviting me!",
        "I'd love to come, although ...",
        "I haven't ... for ages",
        "I'll bring ...",
        "plenty of water",
        "Hopefully it won't rain!",
        "Shall we meet at ...?",
        "Speak soon, / Best wishes,",
        "Let me know if ..."
      ],
      tips: [
        "Email thân mật: dùng dạng rút gọn (I'd, I'll), câu cảm thán và lời chào đơn giản (Hi Jack,). Không dùng \"Dear Sir\".",
        "Trả lời đủ các ý đề yêu cầu: có đi được không và mang gì. Thêm một câu hỏi cuối thư để thân thiện.",
        "Từ chào và tên người ký cũng được tính vào số từ, nên viết thật gọn khi gần chạm 50 từ."
      ]
    },
    {
      id: "w3-2",
      task: 3,
      title: "A friend is visiting your city",
      context:
        "Your friend Sophie is visiting your city next month. She has asked what she should see and where she should stay. Write an email to Sophie. Give her advice. Write 40–50 words.\n(Bạn sắp đến thăm: gợi ý nơi tham quan và chỗ ở trong 40–50 từ.)",
      parts: [
        {
          prompt:
            "Write an email to Sophie. Tell her what to see in your city and where to stay. Write 40–50 words.",
          min: 40,
          max: 50,
          sample:
            "Hi Sophie,\n\nI can't wait to see you! You must visit the old town, which is beautiful at sunset, and the night market, where the street food is fantastic. As for accommodation, a hotel near the river would be ideal. Let me know when you arrive!\n\nLove,\nLinh",
          hint: "Gợi ý 2 điểm tham quan + 1 chỗ ở; dùng \"You must visit...\" và \"As for ...\"."
        }
      ],
      phrases: [
        "I can't wait to see you!",
        "You must visit ...",
        "..., which is beautiful at sunset",
        "..., where the street food is fantastic",
        "As for accommodation, ...",
        "would be ideal",
        "Let me know when you arrive!",
        "You should definitely try ...",
        "Love, / Take care,"
      ],
      tips: [
        "Dùng mệnh đề quan hệ (which / where) để mô tả địa điểm ngắn gọn mà vẫn đa dạng cấu trúc.",
        "Phân ý rõ ràng: câu 1 chào hỏi, câu 2 điểm tham quan, câu 3 chỗ ở, câu cuối hẹn gặp.",
        "Dùng \"accommodation\" (không đếm được) và \"hotel near the river\" thay cho mô tả chung chung."
      ]
    },
    {
      id: "w3-3",
      task: 3,
      title: "Advice about a new laptop",
      context:
        "Your friend Tom wants to buy a new laptop for work and study. He has asked what he should look for. Write an email to Tom. Give him advice and ask about his budget. Write 40–50 words.\n(Cho bạn lời khuyên mua laptop và hỏi ngân sách: 40–50 từ.)",
      parts: [
        {
          prompt:
            "Write an email to Tom. Give him some advice about buying a laptop and ask how much he wants to spend. Write 40–50 words.",
          min: 40,
          max: 50,
          sample:
            "Hi Tom,\n\nGood luck with the search! I'd suggest looking for a lightweight model with a long battery life, since you travel a lot. Make sure it has at least eight gigabytes of memory, too. How much are you planning to spend?\n\nBest,\nLinh",
          hint: "Đưa 2 lời khuyên (nhẹ, pin lâu, bộ nhớ) và kết thúc bằng câu hỏi về ngân sách."
        }
      ],
      phrases: [
        "Good luck with ...!",
        "I'd suggest looking for ...",
        "a lightweight model",
        "a long battery life",
        "since you travel a lot",
        "Make sure it has ...",
        "How much are you planning to spend?",
        "It's worth paying a bit more for ...",
        "Best, / All the best,"
      ],
      tips: [
        "Khi cho lời khuyên: I'd suggest + V-ing, Make sure (that) ..., It's worth + V-ing là các cấu trúc B2 dễ dùng.",
        "Nhớ làm đủ hai yêu cầu: cho lời khuyên VÀ hỏi ngân sách. Thiếu một ý sẽ mất điểm nội dung.",
        "Dùng since / because gắn lý do vào lời khuyên để bài thuyết phục và dài đủ."
      ]
    },
    {
      id: "w3-4",
      task: 3,
      title: "Joining a photography club",
      context:
        "Your friend Anna has heard that you've joined a photography club. She wants to know what you do there and whether she should join. Write an email to Anna. Write 40–50 words.\n(Kể về câu lạc bộ và mời bạn tham gia: 40–50 từ.)",
      parts: [
        {
          prompt:
            "Write an email to Anna. Tell her about the club and say whether she should join. Write 40–50 words.",
          min: 40,
          max: 50,
          sample:
            "Hi Anna,\n\nThe club is brilliant! We meet every Wednesday evening, and each month we go on a photo walk somewhere new. Everyone is friendly, even complete beginners, so you'd fit in easily. Why don't you come along next week and try it?\n\nCheers,\nLinh",
          hint: "Nêu tần suất sinh hoạt, hoạt động, không khí câu lạc bộ, rồi mời bạn bằng Why don't you ...?"
        }
      ],
      phrases: [
        "The club is brilliant!",
        "We meet every ...",
        "go on a photo walk",
        "Everyone is friendly, even ...",
        "complete beginners",
        "you'd fit in easily",
        "Why don't you come along ...?",
        "give it a try",
        "Cheers, / Speak soon,"
      ],
      tips: [
        "Dùng từ vựng Anh-Anh thân mật: brilliant, cheers, come along; các từ này làm bài tự nhiên hơn.",
        "Cấu trúc gợi ý ngắn gọn: Why don't you ...? / You should ... / Come along ... đều phù hợp khi mời bạn bè.",
        "Chia thư thành 3 phần: nhận xét chung, chi tiết hoạt động, lời mời. Mỗi phần 1 câu là đủ cho 40–50 từ."
      ]
    },

    /* ===================== TASK 4 – Formal email ===================== */
    {
      id: "w4-1",
      task: 4,
      title: "Complaint about a faulty product",
      context:
        "You ordered a coffee machine from an online shop called HomeBrew Direct. It arrived late and part of it was broken. Write an email to the customer service manager. Explain the problems and say what you would like the company to do. Write 120–150 words.\n(Email trang trọng phàn nàn: chào hỏi, nêu mục đích, 2–3 vấn đề có từ nối, yêu cầu giải quyết, lời kết.)",
      parts: [
        {
          prompt:
            "Write a formal email to the customer service manager. Explain what went wrong and what you want the company to do. Write 120–150 words.",
          min: 120,
          max: 150,
          sample:
            "Dear Sir or Madam,\n\nI am writing to complain about a coffee machine that I ordered from your website on 3 March.\n\nFirstly, the delivery arrived five days late, even though I had paid extra for express service. Moreover, when the parcel finally came, the water tank was cracked, so the machine is completely unusable. I have attached a photograph of the damage for your reference. What is more, I phoned your helpline twice, but nobody called me back.\n\nAs a result, I would like you to send a replacement as soon as possible. Alternatively, I would be happy to accept a full refund, including the cost of express delivery.\n\nI would be grateful if you could reply by the end of this week. I look forward to hearing from you.\n\nYours faithfully,\nLinh Tran",
          hint: "Cấu trúc: Dear Sir or Madam → mục đích → Firstly/Moreover/What is more → yêu cầu (replacement/refund) → I look forward to hearing from you → Yours faithfully."
        }
      ],
      phrases: [
        "I am writing to complain about ...",
        "Firstly, ... Moreover, ...",
        "even though I had paid extra for ...",
        "What is more, ...",
        "As a result, I would like you to ...",
        "Alternatively, I would be happy to accept ...",
        "a full refund / a replacement",
        "I would be grateful if you could ...",
        "I look forward to hearing from you.",
        "Yours faithfully,"
      ],
      tips: [
        "Thư trang trọng: không dùng dạng rút gọn (I am, I would), không dùng từ lóng. \"Dear Sir or Madam\" đi với \"Yours faithfully\"; \"Dear Mr / Ms X\" đi với \"Yours sincerely\".",
        "Nêu mục đích ngay câu đầu (I am writing to ...), sau đó 2–3 vấn đề nối bằng Firstly, Moreover, What is more.",
        "Phần yêu cầu giải quyết phải cụ thể (replacement hoặc refund, trước thời hạn nào) thì thư mới có sức thuyết phục."
      ]
    },
    {
      id: "w4-2",
      task: 4,
      title: "Asking for course information",
      context:
        "You saw an advertisement for an evening course in Project Management at Brightfield College. Write an email to the course coordinator, Ms Patel. Explain why you are interested and ask for more information. Write 120–150 words.\n(Email xin thông tin khoá học: nêu lý do quan tâm, đặt 3 câu hỏi cụ thể, lời kết trang trọng.)",
      parts: [
        {
          prompt:
            "Write a formal email to Ms Patel. Say why you are interested in the course and ask for information about it. Write 120–150 words.",
          min: 120,
          max: 150,
          sample:
            "Dear Ms Patel,\n\nI am writing to enquire about the evening course in Project Management that is advertised on your college website.\n\nI am currently working as an office coordinator, and I would like to develop my skills in order to apply for a managerial position next year.\n\nFirstly, could you tell me how much the course costs and whether I can pay in instalments? In addition, I would like to know how many hours of study are required each week, since I work full time. Finally, could you let me know if a certificate is awarded at the end?\n\nI would also appreciate it if you could send me a brochure and the dates of the next intake.\n\nThank you for your help. I look forward to hearing from you.\n\nYours sincerely,\nTran Minh Chau",
          hint: "Chào theo tên (Dear Ms Patel) → lý do quan tâm → Firstly / In addition / Finally cho 3 câu hỏi → cảm ơn → Yours sincerely."
        }
      ],
      phrases: [
        "I am writing to enquire about ...",
        "that is advertised on your website",
        "I would like to develop my skills in order to ...",
        "Could you tell me how much ... costs?",
        "whether I can pay in instalments",
        "In addition, I would like to know ...",
        "Finally, could you let me know if ...?",
        "I would also appreciate it if you could ...",
        "Thank you for your help.",
        "Yours sincerely,"
      ],
      tips: [
        "Câu hỏi gián tiếp lịch sự hơn: \"Could you tell me how much it costs?\" (không đảo ngữ), \"I would like to know whether ...\".",
        "Mỗi câu hỏi nên được đánh dấu bằng từ nối thứ tự: Firstly, In addition, Finally. Giám khảo dễ thấy cấu trúc bài.",
        "Biết tên người nhận (Ms Patel) thì kết thư bằng \"Yours sincerely\"; không biết tên mới dùng \"Yours faithfully\"."
      ]
    },
    {
      id: "w4-3",
      task: 4,
      title: "Suggestion to your manager",
      context:
        "Your manager, Mr Hughes, has asked all staff for ideas to improve well-being at your company. Write an email to him. Make suggestions and explain why they would help. Write 120–150 words.\n(Email đề xuất với quản lý: nêu mục đích, 2 đề xuất kèm lý do, lời kết lịch sự.)",
      parts: [
        {
          prompt:
            "Write a formal email to Mr Hughes. Suggest ways of improving staff well-being and explain why your ideas would help. Write 120–150 words.",
          min: 120,
          max: 150,
          sample:
            "Dear Mr Hughes,\n\nI am writing in response to your request for ideas to improve staff well-being at our company.\n\nFirstly, I would suggest introducing flexible working hours. At the moment, many of us spend more than an hour in rush-hour traffic, which is tiring and stressful. If employees could start between eight and ten, they would arrive calmer and probably work more efficiently.\n\nIn addition, I believe a quiet room would be very useful. Open-plan offices can be noisy, so a place where staff could concentrate or simply rest for ten minutes would benefit everyone, especially those who work on complex tasks.\n\nI am confident that these changes would improve morale and productivity at a low cost. I would be happy to discuss them in more detail.\n\nYours sincerely,\nHoa Nguyen",
          hint: "Dùng câu điều kiện loại 2 (If employees could..., they would...) để giải thích lợi ích của đề xuất."
        }
      ],
      phrases: [
        "I am writing in response to ...",
        "I would suggest introducing ...",
        "At the moment, many of us ...",
        "which is tiring and stressful",
        "If employees could ..., they would ...",
        "In addition, I believe ... would be very useful.",
        "would benefit everyone",
        "improve morale and productivity",
        "I would be happy to discuss ... in more detail.",
        "Yours sincerely,"
      ],
      tips: [
        "Khi đề xuất: I would suggest + V-ing, I believe ... would be ..., It might be a good idea to ...; tránh ra lệnh (You must ...).",
        "Câu điều kiện loại 2 (If + past simple, would + V) là cấu trúc B2 quan trọng để giải thích lợi ích của đề xuất.",
        "Mỗi đề xuất = 1 đoạn: ý chính, lý do, lợi ích. Hai đoạn như vậy cộng lời chào và lời kết là đủ 120–150 từ."
      ]
    },
    {
      id: "w4-4",
      task: 4,
      title: "Letter to the editor: transport",
      context:
        "A local magazine has published an article about transport in your town. It asks readers how life could be made easier for people who do not own a car. Write an email to the editor with your suggestions. Write 120–150 words.\n(Thư gửi ban biên tập: nêu 3 đề xuất có từ nối, kết thư lịch sự.)",
      parts: [
        {
          prompt:
            "Write a formal email to the editor. Give your opinion and suggest ways to help people who do not have a car. Write 120–150 words.",
          min: 120,
          max: 150,
          sample:
            "Dear Editor,\n\nI am writing in reference to your recent article on transport in our town, and I would like to suggest some ways of making life easier for residents who do not own a car.\n\nFirst of all, the bus service needs to run more frequently, particularly in the evenings. At present, the last bus leaves at nine, which makes it impossible for shift workers to get home safely.\n\nSecondly, the town should build protected cycle lanes. Many people would cycle to work if the roads were safer, and this would also reduce traffic and pollution.\n\nFinally, I believe that discounted monthly tickets for students and pensioners would encourage more people to leave their cars at home.\n\nThank you for raising this important issue. I hope that the council will consider these ideas.\n\nYours faithfully,\nHoa Nguyen",
          hint: "Dùng First of all / Secondly / Finally cho 3 đề xuất; dùng \"Dear Editor\" kết bằng \"Yours faithfully\"."
        }
      ],
      phrases: [
        "I am writing in reference to ...",
        "I would like to suggest ...",
        "First of all, ... Secondly, ... Finally, ...",
        "needs to run more frequently",
        "At present, ...",
        "which makes it impossible for ... to ...",
        "would encourage more people to ...",
        "reduce traffic and pollution",
        "I hope that the council will consider ...",
        "Yours faithfully,"
      ],
      tips: [
        "Thư gửi tòa soạn: bắt đầu bằng việc nhắc đến bài báo (in reference to your recent article) để nêu rõ mục đích viết.",
        "Ba đề xuất = ba đoạn ngắn, mỗi đoạn có từ nối thứ tự (First of all, Secondly, Finally) và một lý do hoặc kết quả mong đợi.",
        "Dùng \"which\" để nối cả mệnh đề với hậu quả: ... which makes it impossible for ... to ... — đây là cấu trúc B2 tự nhiên."
      ]
    }
  ];
})();
