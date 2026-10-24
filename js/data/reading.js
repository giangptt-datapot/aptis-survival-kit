(function () {
  const D = (globalThis.AptisData = globalThis.AptisData || {});

  D.reading = {
    /* ------------------------------------------------------------------
       PART 1 - Sentence comprehension
       ------------------------------------------------------------------ */
    sentence: [
      {
        id: "rs1",
        title: "Signs and notices",
        level: "B1",
        items: [
          {
            q: "Visitors must ___ at reception before they enter the building.",
            o: ["sign up", "sign in", "sign off"],
            a: 1,
            e: "sign in = ghi tên/đăng ký khi vào toà nhà. sign up = đăng ký tham gia (khoá học, dịch vụ); sign off = kết thúc (thư, chương trình), không hợp ngữ cảnh lễ tân."
          },
          {
            q: "NO PARKING. Vehicles left here will ___ away.",
            o: ["be towed", "tow", "towing"],
            a: 0,
            e: "Xe là vật bị kéo đi nên dùng bị động tương lai: will be + V3 (will be towed away). 'tow' và 'towing' không đi sau will theo nghĩa bị động."
          },
          {
            q: "SORRY - the lift is out of ___. Please use the stairs.",
            o: ["work", "function", "order"],
            a: 2,
            e: "out of order = (máy móc) bị hỏng, cụm cố định trên biển báo. 'out of work' nghĩa là thất nghiệp; 'out of function' không tồn tại."
          },
          {
            q: "Please keep your receipt. You will need it ___ you want to return the item.",
            o: ["unless", "if", "although"],
            a: 1,
            e: "Cần hoá đơn NẾU muốn trả hàng -> if. unless = trừ khi (nghĩa ngược lại); although = mặc dù (không có ý nhượng bộ ở đây)."
          },
          {
            q: "Passengers ___ not to leave their bags unattended.",
            o: ["are asked", "ask", "are asking"],
            a: 0,
            e: "Hành khách là người được yêu cầu nên dùng bị động: are asked not to + V. 'ask' và 'are asking' đều là chủ động, sai nghĩa."
          }
        ]
      },
      {
        id: "rs2",
        title: "Messages and short emails",
        level: "B1",
        items: [
          {
            q: "Sorry I'm late, Kate! I got stuck in traffic ___ an accident on the main road.",
            o: ["because", "because of", "so"],
            a: 1,
            e: "Sau chỗ trống là một cụm danh từ (an accident) nên dùng because of. 'because' cần một mệnh đề đầy đủ; 'so' chỉ kết quả, không dùng để nêu nguyên nhân."
          },
          {
            q: "Hi Jo, could you send me the report ___ you have a moment? There's no rush.",
            o: ["whenever", "whatever", "wherever"],
            a: 0,
            e: "whenever = bất cứ khi nào (rảnh), hợp với 'no rush'. whatever = bất cứ điều gì; wherever = bất cứ nơi đâu - không hợp nghĩa."
          },
          {
            q: "Thanks for the invitation, but I'm afraid I won't be able ___ the party on Saturday.",
            o: ["attend", "attending", "to attend"],
            a: 2,
            e: "Cấu trúc be able to + V (nguyên mẫu): won't be able to attend. Không dùng 'be able attend' hay 'be able attending'."
          },
          {
            q: "Dear Sir or Madam, I am writing to ___ about a faulty hairdryer that I bought from your shop last week.",
            o: ["complaint", "complain", "complaining"],
            a: 1,
            e: "I am writing to + V nguyên mẫu để nêu mục đích: to complain about. 'complaint' là danh từ (a complaint about...); 'to complaining' sai cấu trúc."
          },
          {
            q: "Could you buy some milk on your way home? We've almost ___ out.",
            o: ["run", "gone", "finished"],
            a: 0,
            e: "run out (of something) = cạn, hết. 'gone out' = đi ra ngoài; 'finished out' không phải cụm đúng."
          }
        ]
      },
      {
        id: "rs3",
        title: "Announcements at work",
        level: "B1",
        items: [
          {
            q: "NOTICE: Due to maintenance work, the Wi-Fi will be ___ between 6 p.m. and 8 p.m. tonight.",
            o: ["unable", "unavailable", "impossible"],
            a: 1,
            e: "unavailable = không có sẵn/không dùng được (nói về dịch vụ, thiết bị). 'unable' chỉ dùng cho người (unable to do); 'impossible' không dùng để nói một thứ 'không dùng được' theo cách này."
          },
          {
            q: "Staff who would like to take annual leave should ___ their manager at least two weeks in advance.",
            o: ["announce", "reply", "notify"],
            a: 2,
            e: "notify somebody = thông báo cho ai (có tân ngữ trực tiếp). announce không đi với người làm tân ngữ; reply phải có 'to' (reply to)."
          },
          {
            q: "Please hand in your timesheets ___ Friday at the latest.",
            o: ["by", "until", "since"],
            a: 0,
            e: "by + mốc thời gian = chậm nhất vào lúc đó (by Friday at the latest). until chỉ kéo dài liên tục đến một lúc; since dùng với thì hoàn thành, nói điểm bắt đầu."
          },
          {
            q: "We are pleased to ___ that Maria Lopez has joined the finance team as our new accountant.",
            o: ["tell", "announce", "speak"],
            a: 1,
            e: "announce that + mệnh đề = thông báo rằng. 'tell' cần tân ngữ (tell you that...); 'speak' không đi với 'that'."
          },
          {
            q: "If you ___ any problems with your laptop, please call the IT helpdesk on extension 214.",
            o: ["will have", "would have", "have"],
            a: 2,
            e: "Câu điều kiện loại 1: If + hiện tại đơn (have), mệnh lệnh/will ở mệnh đề chính. Không dùng will hoặc would ngay sau If."
          }
        ]
      },
      {
        id: "rs4",
        title: "Formal notices and policies",
        level: "B2",
        items: [
          {
            q: "Please note that goods cannot be returned ___ they are accompanied by a receipt.",
            o: ["unless", "provided", "otherwise"],
            a: 0,
            e: "cannot be returned unless... = không được trả trừ khi có hoá đơn. 'provided' (miễn là) làm câu vô nghĩa ('không được trả miễn là có hoá đơn'); 'otherwise' là trạng từ, không nối mệnh đề."
          },
          {
            q: "Owing to unforeseen circumstances, the conference has been postponed ___ further notice.",
            o: ["for", "until", "by"],
            a: 1,
            e: "until further notice = cho đến khi có thông báo mới, cụm cố định. 'for further notice' và 'by further notice' không tồn tại."
          },
          {
            q: "All employees are strongly ___ to back up their files before the system upgrade on Friday.",
            o: ["demanded", "proposed", "advised"],
            a: 2,
            e: "be advised to + V = được khuyến cáo nên làm. demand và propose không dùng bị động với 'to + V' theo cách này (propose to do = dự định làm)."
          },
          {
            q: "Applications for annual leave are subject ___ approval by your line manager.",
            o: ["to", "of", "with"],
            a: 0,
            e: "be subject to + danh từ = tuỳ thuộc vào/phải được (phê duyệt). Giới từ đi kèm cố định là 'to'."
          },
          {
            q: "Please note that the warranty does not ___ damage caused by misuse.",
            o: ["protect", "cover", "hold"],
            a: 1,
            e: "cover = bao gồm/chi trả (bảo hành, bảo hiểm có cover thiệt hại). protect đi với 'against/from'; hold không dùng với nghĩa này."
          }
        ]
      },
      {
        id: "rs5",
        title: "Everyday messages: phrasal verbs and idioms",
        level: "B2",
        items: [
          {
            q: "Hi all, the meeting has been ___ forward to Wednesday, so please check your calendars.",
            o: ["brought", "taken", "put"],
            a: 0,
            e: "bring forward = dời lên sớm hơn (ngược với put back/postpone). 'put forward' = đề xuất; 'taken forward' = tiếp tục thực hiện một kế hoạch."
          },
          {
            q: "I'd love to join you for lunch, but I'm ___ up with work at the moment.",
            o: ["put", "kept", "tied"],
            a: 2,
            e: "be tied up (with something) = bận rộn, không rảnh. put up with = chịu đựng; kept up with = theo kịp - đều không hợp câu."
          },
          {
            q: "Don't worry about the new software. Ask Priya - she's worked here for years and really knows the ___.",
            o: ["strings", "ropes", "ways"],
            a: 1,
            e: "know the ropes = hiểu rõ cách mọi việc vận hành (thành ngữ). 'pull strings' là thành ngữ khác (dùng quan hệ); 'know the ways' không phải cụm tự nhiên."
          },
          {
            q: "By the time we got to the conference room, the presentation ___.",
            o: ["had already started", "has already started", "already starts"],
            a: 0,
            e: "By the time + quá khứ đơn (we got) -> mệnh đề chính dùng quá khứ hoàn thành: had already started (xảy ra trước). Hiện tại hoàn thành và hiện tại đơn sai thì."
          },
          {
            q: "I can't come on Tuesday. Would it be possible to ___ the appointment for next week?",
            o: ["rebuild", "rearrange", "remember"],
            a: 1,
            e: "rearrange = sắp xếp lại (lịch hẹn) sang thời điểm khác. rebuild = xây lại; remember = nhớ - không hợp nghĩa."
          }
        ]
      },
      {
        id: "rs6",
        title: "Grammar in context",
        level: "B2",
        items: [
          {
            q: "Notice to staff: the manager, ___ office is on the third floor, will see visitors only by appointment.",
            o: ["who", "which", "whose"],
            a: 2,
            e: "whose + danh từ (office) = 'văn phòng của người quản lý' (sở hữu). who/which thay cho chủ ngữ hoặc tân ngữ, không đứng trước danh từ sở hữu."
          },
          {
            q: "Message from Dan: 'If I ___ about the delay earlier, I would have called you.'",
            o: ["knew", "had known", "would know"],
            a: 1,
            e: "Điều kiện loại 3 (trái với quá khứ): If + had + V3, would have + V3. 'knew' là loại 2; 'would know' không đứng sau If."
          },
          {
            q: "Reminder: neither the manager nor the assistants ___ aware of the change in the opening hours.",
            o: ["were", "was", "is"],
            a: 0,
            e: "Với neither...nor, động từ hoà hợp với chủ ngữ GẦN NHẤT: 'the assistants' (số nhiều) -> were. was/is là số ít nên sai."
          },
          {
            q: "Hi Sam, Lucy suggested ___ the meeting to next week because so many people are on holiday.",
            o: ["moving", "to move", "move"],
            a: 0,
            e: "suggest + V-ing (suggested moving). Không dùng suggest + to V; 'suggest move' cần có 'that she move/we move'."
          },
          {
            q: "I'm not used ___ up so early, so I'm always tired in the morning.",
            o: ["to get", "to getting", "getting"],
            a: 1,
            e: "be used to + V-ing = quen với việc gì. 'to' ở đây là giới từ nên theo sau là V-ing (getting). Đừng nhầm với 'used to + V' (đã từng)."
          }
        ]
      }
    ],

    /* ------------------------------------------------------------------
       PART 2 - Text cohesion (ordering)
       ------------------------------------------------------------------ */
    ordering: [
      {
        id: "ro1",
        title: "A day of travelling",
        level: "B1",
        first: "Last Saturday I decided to visit my aunt, who lives in a small village near Bristol.",
        order: [
          "First, I took a taxi to the station and bought a ticket for the ten o'clock train.",
          "However, when I got to the platform, an announcement said that this train had been cancelled.",
          "As a result, I had to wait for an hour until the next one arrived.",
          "Finally, I reached my aunt's house at lunchtime, and she had already prepared a delicious meal for us."
        ],
        e: "'First' mở đầu chuỗi hành động (taxi -> ga -> mua vé). 'However ... this train' đối lập với kế hoạch đi tàu 10 giờ và 'this train' chỉ chuyến tàu vừa nhắc ở câu trước. 'As a result' nêu hậu quả của việc tàu bị huỷ, và 'the next one' = chuyến tàu kế tiếp. 'Finally' kết thúc hành trình khi đã đến nơi."
      },
      {
        id: "ro2",
        title: "A new employee's first day",
        level: "B1",
        first: "Tom started his new job at a marketing agency on Monday morning.",
        order: [
          "When he arrived, the receptionist gave him a security card and asked him to wait in the lobby.",
          "After a few minutes, his manager came down and took him upstairs to meet the rest of the team.",
          "They all welcomed him warmly, and one of them offered to show him around the building.",
          "By the end of the day, Tom felt much more relaxed because everyone had been so friendly."
        ],
        e: "'When he arrived' là bước đầu tiên (đến nơi, ở sảnh). 'After a few minutes' nối tiếp, và câu này giới thiệu 'the team'. 'They all' chỉ cả nhóm vừa nhắc nên phải đứng sau câu có 'the rest of the team'. 'By the end of the day' tổng kết cảm giác của Tom nên là câu cuối; 'everyone had been so friendly' nhắc lại sự chào đón ở câu trước."
      },
      {
        id: "ro3",
        title: "Hybrid working",
        level: "B2",
        first: "Many companies have recently introduced hybrid working, which allows staff to split their week between home and the office.",
        order: [
          "At first, this arrangement seemed to benefit everyone, since employees saved money and time on commuting.",
          "Over time, however, some managers noticed that communication between team members had become less spontaneous.",
          "To deal with this problem, several firms now require everyone to be in the office on the same two days each week.",
          "Such a compromise, they believe, keeps the flexibility that people value while still protecting the team spirit."
        ],
        e: "'this arrangement' nhắc lại hybrid working ở câu đầu; 'At first' mở đầu giai đoạn đầu. 'Over time, however' đối lập với 'At first' (ban đầu tốt, về sau xuất hiện vấn đề). 'this problem' chỉ vấn đề giao tiếp kém tự nhiên vừa nêu. 'Such a compromise' tóm lại giải pháp 'hai ngày cố định' nên phải là câu cuối; 'they' = several firms."
      },
      {
        id: "ro4",
        title: "A complaint about a product",
        level: "B2",
        first: "Last week I bought a pair of wireless headphones from your online shop.",
        order: [
          "Unfortunately, they stopped working after only three days, even though I had followed the instructions carefully.",
          "I therefore contacted your customer service team, but nobody has replied to my message yet.",
          "For this reason, I am writing to ask for a full refund or a replacement as soon as possible.",
          "Finally, I would be grateful if you could reply within seven days."
        ],
        e: "'they' ở câu 2 chỉ 'headphones' trong câu đầu; 'Unfortunately' nêu sự cố. 'I therefore contacted' là hệ quả của sự cố (therefore) và 'nobody has replied yet' là vấn đề mới. 'For this reason' tổng kết cả hai vấn đề để đưa ra yêu cầu chính (hoàn tiền/đổi hàng). 'Finally' đưa ra lời đề nghị kết thư về thời hạn trả lời."
      },
      {
        id: "ro5",
        title: "Why sleep matters",
        level: "B2",
        first: "Most adults need between seven and nine hours of sleep a night, yet many of us regularly get far less.",
        order: [
          "One reason for this is that we tend to use phones and tablets late in the evening.",
          "The bright light from these screens tricks the brain into thinking it is still daytime.",
          "Consequently, people find it harder to fall asleep, and they wake up feeling tired the next morning.",
          "Experts therefore recommend switching off all devices at least an hour before going to bed."
        ],
        e: "'One reason for this' giải thích hiện tượng 'ngủ ít' ở câu đầu. 'these screens' chỉ phones and tablets vừa nhắc. 'Consequently' nêu hậu quả của việc não bị đánh lừa bởi ánh sáng. 'therefore recommend' đưa ra lời khuyên dựa trên toàn bộ lập luận trước đó nên là câu cuối."
      },
      {
        id: "ro6",
        title: "Organising a surprise party",
        level: "B1",
        first: "My colleagues and I wanted to organise a surprise party for our manager's fiftieth birthday.",
        order: [
          "First of all, we had to choose a day when she would not suspect anything.",
          "Once we had decided on a Friday evening, Jenny booked a table at her favourite Italian restaurant.",
          "On the day, we told her that we were just going out for a quiet dinner after work.",
          "When she walked in and saw the whole department waiting, she was so surprised that she burst into tears."
        ],
        e: "'First of all' là bước đầu tiên (chọn ngày). 'Once we had decided on a Friday evening' chỉ có nghĩa sau khi đã chọn ngày, rồi mới đặt bàn. 'On the day' là ngày diễn ra sự kiện, 'a quiet dinner' nhắc lại bữa tối ở nhà hàng. 'When she walked in' là khoảnh khắc cuối cùng, kết quả của kế hoạch."
      }
    ],

    /* ------------------------------------------------------------------
       PART 3 - Opinion matching (short texts)
       ------------------------------------------------------------------ */
    shortMatch: [
      {
        id: "rm1",
        title: "Working from home",
        topic: "Remote working",
        intro: "Four people give their opinions about working from home.",
        people: [
          {
            n: "Anna",
            t: "I've worked from home for two years and I wouldn't go back. I save nearly two hours a day on commuting, and I can concentrate much better without interruptions from colleagues. My only worry is the cost: my electricity bill has gone up a lot in winter, and my company doesn't pay anything towards it."
          },
          {
            n: "Ben",
            t: "Honestly, I find it quite lonely. At home I can go a whole day without speaking to anyone, and it's very difficult to switch off in the evening because my laptop is always sitting there on the kitchen table. I prefer the office, where I can chat to the team and have lunch with them."
          },
          {
            n: "Chloe",
            t: "For me, flexibility is the biggest advantage. I take my daughter to school in the morning and finish my work after she goes to bed, which the office would never allow. Still, I do think younger staff would learn faster in the office, because they can watch how experienced colleagues deal with problems."
          },
          {
            n: "Dev",
            t: "As a team leader, I was nervous at first because I couldn't see what everyone was doing. In fact, productivity has improved, as long as we agree clear targets. However, we all meet in person once a month, because ideas seem to flow more easily face to face than on a video call."
          }
        ],
        qs: [
          {
            q: "Who is pleased that their working hours can be arranged around looking after a child?",
            a: 2,
            e: "Chloe: 'I take my daughter to school ... and finish my work after she goes to bed' + 'flexibility is the biggest advantage'."
          },
          {
            q: "Who is concerned about extra household costs that the employer does not cover?",
            a: 0,
            e: "Anna: 'my electricity bill has gone up a lot in winter, and my company doesn't pay anything towards it'."
          },
          {
            q: "Who feels cut off from other people during the day?",
            a: 1,
            e: "Ben: 'I find it quite lonely ... I can go a whole day without speaking to anyone'. Những người khác không nhắc đến sự cô lập."
          },
          {
            q: "Who was worried about supervising other people at the beginning?",
            a: 3,
            e: "Dev: 'I was nervous at first because I couldn't see what everyone was doing' - đây là quản lý nhóm (team leader)."
          },
          {
            q: "Who has gained a lot of time by not travelling to work?",
            a: 0,
            e: "Anna: 'I save nearly two hours a day on commuting' (commuting = đi làm, travelling to work)."
          },
          {
            q: "Who thinks that regular meetings in the same room produce better ideas?",
            a: 3,
            e: "Dev: 'we all meet in person once a month, because ideas seem to flow more easily face to face'. Chloe chỉ nói nhân viên trẻ học nhanh hơn ở văn phòng, không nói về ý tưởng."
          },
          {
            q: "Who finds it hard to stop working once the day is over?",
            a: 1,
            e: "Ben: 'it's very difficult to switch off in the evening' (switch off = ngừng nghĩ về công việc) vì laptop luôn ở trên bàn."
          }
        ]
      },
      {
        id: "rm2",
        title: "Getting around the city",
        topic: "City transport",
        intro: "Four people talk about the way they travel around their city.",
        people: [
          {
            n: "Hannah",
            t: "I cycle to work every day, even in the rain. It's quicker than the bus during rush hour and it keeps me fit, which is great because I sit at a desk all day. The only problem is that there are very few safe cycle lanes, and I've had a few close calls with lorries."
          },
          {
            n: "Raj",
            t: "I take the metro because it's cheap and reliable. A monthly pass costs less than a week's petrol, and I can read or answer emails on the way. What I don't like is how crowded it gets at half past eight; sometimes I have to let two trains go before I can get on."
          },
          {
            n: "Mia",
            t: "Where I live, there's only one bus an hour, so I need my car, particularly for the school run and the weekly shop. I'd rather use public transport, but it simply isn't practical. I know traffic is terrible, but I'd happily pay a bit more for parking if the council built more car parks near the centre."
          },
          {
            n: "Oliver",
            t: "Since I retired, I've stopped using any kind of vehicle in town. Walking is free, and I notice so much more: shops, gardens, even small cafés I'd never seen. My only complaint is that pavements are often blocked by parked cars and scooters, so I'm forced to walk in the road."
          }
        ],
        qs: [
          {
            q: "Who feels that driving is necessary because public transport is so infrequent?",
            a: 2,
            e: "Mia: 'there's only one bus an hour, so I need my car' (infrequent = không thường xuyên)."
          },
          {
            q: "Who has nearly been hit by large vehicles?",
            a: 0,
            e: "Hannah: 'I've had a few close calls with lorries' (close call = suýt gặp nguy hiểm; lorries = xe tải lớn)."
          },
          {
            q: "Who is irritated that people leave vehicles where others need to walk?",
            a: 3,
            e: "Oliver: 'pavements are often blocked by parked cars and scooters' + 'My only complaint'."
          },
          {
            q: "Who is able to catch up with work or reading while travelling?",
            a: 1,
            e: "Raj: 'I can read or answer emails on the way' (on the way = trong lúc di chuyển)."
          },
          {
            q: "Who is glad that their way of travelling keeps them in good shape?",
            a: 0,
            e: "Hannah: 'it keeps me fit' (fit = khoẻ mạnh, cân đối). Oliver chỉ nói đi bộ miễn phí, không nhắc đến sức khoẻ."
          },
          {
            q: "Who would be willing to pay more if there were more parking spaces?",
            a: 2,
            e: "Mia: 'I'd happily pay a bit more for parking if the council built more car parks'."
          },
          {
            q: "Who dislikes how full the trains are at certain times?",
            a: 1,
            e: "Raj: 'how crowded it gets at half past eight; sometimes I have to let two trains go'."
          }
        ]
      },
      {
        id: "rm3",
        title: "Studying online",
        topic: "Online learning",
        intro: "Four adults talk about their experience of studying online.",
        people: [
          {
            n: "Elena",
            t: "I finished my professional qualification entirely online, and I'd recommend it to anyone with a full-time job, because you can study whenever you like. The downside is that nobody checks whether you've done the work, so you need a lot of self-discipline. I nearly gave up twice, but I'm glad I didn't."
          },
          {
            n: "Marcus",
            t: "I tried an online language course, but I found it hard to stay motivated without a teacher in front of me. I made far more progress when I joined a weekly conversation class in person, because speaking to real people forced me to use what I had learned instead of just clicking on answers."
          },
          {
            n: "Priya",
            t: "What I like about online classes is the price. My course costs about half of what a classroom course would, and I don't have to pay for travel or accommodation. Also, every lecture is recorded, so if I don't understand something I can simply watch it again as many times as I need."
          },
          {
            n: "Tom",
            t: "I teach online for a living, and the biggest challenge is technology. If someone's internet connection drops, they miss half of the lesson. On the other hand, my students come from all over the world, which makes discussions more interesting than in a normal classroom where everyone is from the same town."
          }
        ],
        qs: [
          {
            q: "Who points out that online study is cheaper than the alternative?",
            a: 2,
            e: "Priya: 'My course costs about half of what a classroom course would' (cheaper = rẻ hơn), lại không phải trả tiền đi lại, chỗ ở."
          },
          {
            q: "Who thinks that technical faults are the main difficulty?",
            a: 3,
            e: "Tom: 'the biggest challenge is technology. If someone's internet connection drops, they miss half of the lesson'."
          },
          {
            q: "Who completed a professional qualification without ever attending a classroom?",
            a: 0,
            e: "Elena: 'I finished my professional qualification entirely online' (entirely online = hoàn toàn trực tuyến)."
          },
          {
            q: "Who made better progress after changing to lessons with real people?",
            a: 1,
            e: "Marcus: 'I made far more progress when I joined a weekly conversation class in person'."
          },
          {
            q: "Who can go over a lesson again if it was unclear?",
            a: 2,
            e: "Priya: 'every lecture is recorded, so if I don't understand something I can simply watch it again'."
          },
          {
            q: "Who says that online groups are more varied in background than classroom groups?",
            a: 3,
            e: "Tom: 'my students come from all over the world ... more interesting than in a normal classroom where everyone is from the same town'."
          },
          {
            q: "Who nearly stopped studying more than once?",
            a: 0,
            e: "Elena: 'I nearly gave up twice' (gave up = bỏ cuộc). Marcus chỉ nói khó giữ động lực, không nói suýt bỏ."
          }
        ]
      },
      {
        id: "rm4",
        title: "Fast food: friend or enemy?",
        topic: "Fast food",
        intro: "Four people give their views on fast food.",
        people: [
          {
            n: "Kate",
            t: "As a nurse, I see the results of poor diets every day. Fast food is high in salt and sugar, and people often eat it too quickly to notice they're full. I'm not saying you can never have a burger, but it shouldn't be a daily habit, especially for children, who copy what their parents do."
          },
          {
            n: "Dan",
            t: "I work night shifts at a warehouse, and there's hardly anything open at three in the morning except a drive-through. It's cheap, it's fast and, frankly, it's often the only choice I have. I do try to cook at weekends, but during the week I simply don't have the energy."
          },
          {
            n: "Sofia",
            t: "I own a small restaurant, so you'd expect me to dislike fast food chains, but I don't. They've made people more interested in eating out, and many of my customers started with burgers before discovering what good cooking tastes like. My real concern is local suppliers, who find it hard to compete on price."
          },
          {
            n: "Jack",
            t: "A lot of my friends say fast food is unhealthy, but the menus have changed. You can get salads, fruit and grilled chicken now, and calorie information is printed on everything. I think it comes down to personal choice. If you eat sensibly the rest of the time, one meal out won't do any harm."
          }
        ],
        qs: [
          {
            q: "Who has very few choices of where to eat because of their working hours?",
            a: 1,
            e: "Dan: 'night shifts ... hardly anything open at three in the morning except a drive-through ... the only choice I have'."
          },
          {
            q: "Who says that restaurants now offer lighter, more nutritious options?",
            a: 3,
            e: "Jack: 'the menus have changed. You can get salads, fruit and grilled chicken now'."
          },
          {
            q: "Who thinks big chains have encouraged more people to dine out?",
            a: 2,
            e: "Sofia: 'They've made people more interested in eating out' (dine out = ăn ngoài hàng)."
          },
          {
            q: "Who thinks that parents' behaviour influences what their children eat?",
            a: 0,
            e: "Kate: 'children, who copy what their parents do'. Kate là y tá nên lo về thói quen ăn uống hằng ngày của trẻ em."
          },
          {
            q: "Who is too tired to prepare meals during the working week?",
            a: 1,
            e: "Dan: 'during the week I simply don't have the energy' (cuối tuần thì anh ấy vẫn cố nấu ăn)."
          },
          {
            q: "Who believes people should be free to decide for themselves what to eat?",
            a: 3,
            e: "Jack: 'I think it comes down to personal choice' (personal choice = lựa chọn cá nhân)."
          },
          {
            q: "Who is concerned about the future of nearby food producers?",
            a: 2,
            e: "Sofia: 'My real concern is local suppliers, who find it hard to compete on price' (local suppliers = nhà cung cấp địa phương)."
          }
        ]
      }
    ],

    /* ------------------------------------------------------------------
       PART 4 - Long text / heading matching
       ------------------------------------------------------------------ */
    longMatch: [
      {
        id: "rl1",
        title: "Honey bees",
        level: "B1",
        paras: [
          {
            t: "When a worker bee finds a good patch of flowers, she flies back to the hive and performs a special dance. The angle of her movements shows the others which direction to fly in, and the length of the dance tells them how far away the flowers are. Scientists were amazed that an insect could pass on such exact information."
          },
          {
            t: "A young worker bee spends the first days of her life cleaning the hive and feeding the babies. A little later she begins to build the wax cells, and after about three weeks she is old enough to leave the hive and search for food. In other words, every bee does a series of different tasks as she grows older."
          },
          {
            t: "Every hive has just one queen, and she is the only bee that lays eggs. On a warm day in summer she can lay up to two thousand eggs a day. The workers feed her and keep her warm, and if she dies or becomes too weak, they quickly raise a new one from a young larva."
          },
          {
            t: "Bees collect a sweet liquid called nectar from flowers and store it in a special stomach. Back at the hive, they pass it from one bee to another, and each one adds chemicals that change its structure. Finally, the liquid is placed in wax cells, where fanning wings dry it until it becomes thick and ready to eat."
          },
          {
            t: "In many countries, the number of bees has fallen sharply over the last twenty years. Farmers use chemicals that harm the insects, and the loss of wild flowers means there is less food for them. Changes in the weather and a tiny insect called the varroa mite also cause problems. Without bees, many of the crops we eat would not grow."
          }
        ],
        headings: [
          "The mother of the whole colony",
          "A language without words",
          "From plant juice to stored food",
          "Reasons for a worrying decline",
          "A busy life with many different tasks",
          "How to make a home for bees in your garden"
        ],
        a: [1, 4, 0, 2, 3],
        e: [
          "Đoạn 1: con ong nhảy múa để báo hướng và khoảng cách của hoa cho đồng loại -> 'A language without words' (giao tiếp không cần lời).",
          "Đoạn 2: ong thợ làm hết việc này đến việc khác theo độ tuổi (dọn tổ, nuôi ấu trùng, xây ô sáp, tìm thức ăn) -> 'A busy life with many different tasks'.",
          "Đoạn 3: mỗi tổ chỉ có một ong chúa, duy nhất đẻ trứng và được ong thợ chăm sóc -> 'The mother of the whole colony'.",
          "Đoạn 4: quá trình biến mật hoa thành mật ong (truyền từ con này sang con khác, làm khô trong ô sáp) -> 'From plant juice to stored food'.",
          "Đoạn 5: số lượng ong giảm vì hoá chất, mất hoa dại, thời tiết, ký sinh trùng -> 'Reasons for a worrying decline'. Tiêu đề thừa: 'How to make a home for bees in your garden' (đoạn văn không hề nói về việc nuôi ong trong vườn)."
        ]
      },
      {
        id: "rl2",
        title: "A weekend by the sea",
        level: "B1",
        paras: [
          {
            t: "There are plenty of places to stay. Backpackers can share a dormitory in the old customs house, while families often choose a flat with a kitchen close to the beach. Anyone looking for something special might book a room in the grand hotel on the hill, which has a swimming pool and a view over the whole bay."
          },
          {
            t: "Most visitors arrive in July and August, when the weather is warmest and the beach is full of families. However, if you prefer peace and quiet, spring or early autumn may suit you better. The sea is colder then, but the streets are empty, hotels cost less and you can walk along the cliffs without meeting anyone."
          },
          {
            t: "The town is famous for its seafood. Fishermen bring in fresh crab and mackerel every morning, and several small restaurants near the harbour serve them just a few hours later. For a cheaper meal, try the fish and chips from the stall next to the clock tower, but be prepared to queue, especially at lunchtime."
          },
          {
            t: "The coastal path is the main attraction, with views of high white cliffs and small hidden beaches. Walkers can follow it for up to twenty kilometres, while those who prefer something easier can take a boat trip around the bay. In the evenings, many people watch the sunset from the harbour wall."
          },
          {
            t: "There is a direct train from the capital every two hours, and the journey takes about three and a half hours. Buses from the nearest city are cheaper but much slower. Driving is possible, but the roads in the centre are narrow and parking is expensive, so most locals recommend leaving your vehicle at the station car park outside town."
          }
        ],
        headings: [
          "A short history of the harbour",
          "Deciding when to visit",
          "Fresh dishes from the local waters",
          "Different ways of arriving",
          "Fun for those who love fresh air",
          "Somewhere to sleep whatever you can spend"
        ],
        a: [5, 1, 2, 4, 3],
        e: [
          "Đoạn 1: nơi ở cho mọi túi tiền (ký túc xá cho khách ba lô, căn hộ cho gia đình, khách sạn sang trọng) -> 'Somewhere to sleep whatever you can spend'.",
          "Đoạn 2: so sánh mùa hè đông đúc với mùa xuân/đầu thu yên tĩnh, rẻ hơn -> 'Deciding when to visit' (chọn thời điểm đi).",
          "Đoạn 3: hải sản tươi, nhà hàng gần bến cảng, cá và khoai tây chiên -> 'Fresh dishes from the local waters' (món ăn từ biển địa phương).",
          "Đoạn 4: đường mòn ven biển, đi bộ, chuyến đi thuyền, ngắm hoàng hôn -> 'Fun for those who love fresh air' (hoạt động ngoài trời).",
          "Đoạn 5: tàu hoả, xe buýt, ô tô và lời khuyên gửi xe -> 'Different ways of arriving'. Tiêu đề thừa: 'A short history of the harbour' (không có đoạn nào nói về lịch sử)."
        ]
      },
      {
        id: "rl3",
        title: "The story of a baker",
        level: "B2",
        paras: [
          {
            t: "Rosa Delgado was born in a small town in northern Spain, where her grandmother ran the local bakery. From the age of seven, Rosa got up at four every morning to help knead the dough before school. She later said that the smell of fresh bread was the one thing that made her feel that she belonged."
          },
          {
            t: "After finishing school, she left home for London, where she spent three years working in several bakeries and taking evening classes in business. The hours were long and the pay was low, but she saved carefully and filled notebooks with ideas. By twenty-five she knew exactly what she wanted: a bakery that combined traditional recipes with modern, healthy ingredients."
          },
          {
            t: "Her first shop, opened in 2009, nearly ended her career. She had borrowed a large sum of money and chosen a cheap location in a quiet street, assuming that good bread would attract customers anywhere. Within a year she was forced to close, owing more than she could repay. 'I had the product,' she often says, 'but not the plan.'"
          },
          {
            t: "Determined to try again, Rosa moved to a busy shopping district and offered customers free samples. The new bakery was an immediate hit, and by 2015 she had eleven branches across the country. Newspapers described her as the baker who had changed the way people think about bread, although she insists the real credit belongs to her staff."
          },
          {
            t: "Today Rosa spends much of her time on a training programme for young people who have left school without qualifications. Students learn baking skills and basic accounting, and the best are offered jobs in her shops. 'Someone gave me a chance once,' she explains. 'It would be selfish not to do the same for others.'"
          }
        ],
        headings: [
          "An expensive lesson",
          "Helping the next generation",
          "A bitter dispute with her family",
          "Growing up in a family business",
          "Quick expansion after a fresh start",
          "Gaining skills in a foreign city"
        ],
        a: [3, 5, 0, 4, 1],
        e: [
          "Đoạn 1: lớn lên trong tiệm bánh của bà, dậy sớm giúp nhào bột từ năm 7 tuổi -> 'Growing up in a family business'.",
          "Đoạn 2: sang London làm việc ở nhiều tiệm bánh và học buổi tối -> 'Gaining skills in a foreign city'.",
          "Đoạn 3: cửa hàng đầu tiên thất bại vì vay nhiều tiền, chọn chỗ sai, phải đóng cửa -> 'An expensive lesson' (bài học đắt giá).",
          "Đoạn 4: chuyển sang khu mua sắm đông đúc, thành công ngay, có 11 chi nhánh -> 'Quick expansion after a fresh start' (khởi đầu lại rồi mở rộng nhanh).",
          "Đoạn 5: hiện nay chị dạy nghề cho thanh niên không có bằng cấp -> 'Helping the next generation'. Tiêu đề thừa: 'A bitter dispute with her family' (không có xung đột gia đình nào được nhắc đến)."
        ]
      },
      {
        id: "rl4",
        title: "Electric cars",
        level: "B2",
        paras: [
          {
            t: "Owners of electric cars often report that they spend far less on fuel than they used to. Electricity is generally cheaper than petrol, and the motors have fewer moving parts, so servicing costs less too. The cars themselves are still expensive to buy, however, which is why many drivers choose to lease them rather than pay the full price at once."
          },
          {
            t: "Anyone with a driveway can simply plug the car in overnight, but millions of people live in flats and have nowhere to park off the street. For them, public chargers are the only option, and these are often busy or out of order. Until the network grows, the lack of convenient charging points will keep many potential buyers away."
          },
          {
            t: "Electric cars produce no exhaust fumes, which makes the air in busy cities much cleaner. Critics point out, though, that making the batteries uses large amounts of energy and rare metals, so the overall benefit depends on how the electricity is produced. Even so, most studies suggest that over its lifetime an electric car causes less pollution than a petrol one."
          },
          {
            t: "Drivers who switch often say they love the quiet, smooth ride and the instant power. A full charge now takes most models well over three hundred kilometres, which is more than enough for daily journeys, and the lack of engine noise makes travelling far more relaxing, especially in heavy traffic."
          },
          {
            t: "Several governments have announced that they will ban new petrol and diesel cars within the next fifteen years. Manufacturers are already responding by launching dozens of new electric models, and many experts expect prices to fall as production increases. If these predictions are correct, the petrol car may soon seem as old-fashioned as the horse and cart."
          }
        ],
        headings: [
          "How green are they really?",
          "What the next decade may bring",
          "Saving money after paying a high price",
          "The history of the first motor vehicles",
          "Trouble finding power away from home",
          "A different feeling behind the wheel"
        ],
        a: [2, 4, 0, 5, 1],
        e: [
          "Đoạn 1: chi phí nhiên liệu và bảo dưỡng thấp nhưng giá mua cao -> 'Saving money after paying a high price' (tiết kiệm về sau, nhưng trả giá cao lúc đầu).",
          "Đoạn 2: người ở chung cư không có chỗ sạc riêng, trạm sạc công cộng thường bận hoặc hỏng -> 'Trouble finding power away from home'.",
          "Đoạn 3: không có khí thải nhưng sản xuất pin tốn năng lượng; so sánh tổng thể về ô nhiễm -> 'How green are they really?' (thực sự thân thiện với môi trường đến mức nào).",
          "Đoạn 4: cảm giác lái êm, yên tĩnh, tăng tốc tức thì và quãng đường đủ dùng -> 'A different feeling behind the wheel'.",
          "Đoạn 5: nhiều chính phủ sẽ cấm xe xăng/dầu, giá xe điện dự kiến giảm -> 'What the next decade may bring' (điều mười năm tới có thể mang lại). Tiêu đề thừa: 'The history of the first motor vehicles' (không có thông tin lịch sử)."
        ]
      },
      {
        id: "rl5",
        title: "Community gardens in cities",
        level: "B2",
        paras: [
          {
            t: "The idea is simple: a piece of unused land, often between buildings, is turned into a shared place where local people grow vegetables, fruit and flowers. Some began as protests against empty, rubbish-filled sites, while others were started by councils. Today, they can be found on rooftops and car parks as well as in ordinary parks."
          },
          {
            t: "Regular gardening is a gentle form of exercise, and several studies have shown that spending time among plants lowers stress. Gardeners also tend to eat more vegetables, simply because they have grown them themselves. For people who spend all day in offices or small flats, an hour with the soil can feel like a holiday."
          },
          {
            t: "Neighbours who might otherwise never speak often become friends when they work side by side. Elderly residents pass on knowledge to young families, and children learn where their food comes from. Many gardens hold open days or cooking events, which bring together people of different ages and backgrounds who would rarely meet elsewhere."
          },
          {
            t: "Plants absorb carbon dioxide, and the soil soaks up rainwater that might otherwise flood the streets. Flowers attract bees and butterflies, which are rare in city centres. Because the food is grown locally, it travels only a few metres to the kitchen instead of hundreds of kilometres in a lorry."
          },
          {
            t: "Despite their popularity, community gardens face serious problems. The land usually belongs to someone else, and a gardener may wake up to find that a developer plans to build flats on it. There is also the question of money: tools, seeds and water all cost something, and volunteers can lose interest after the first enthusiastic summer."
          }
        ],
        headings: [
          "Good for body and mind",
          "Why city life is so expensive",
          "An uncertain future",
          "Benefits for wildlife and the planet",
          "Making use of neglected corners",
          "A way to build community spirit"
        ],
        a: [4, 0, 5, 3, 2],
        e: [
          "Đoạn 1: giới thiệu ý tưởng biến đất bỏ hoang thành nơi trồng trọt chung -> 'Making use of neglected corners' (tận dụng những góc bị bỏ quên).",
          "Đoạn 2: làm vườn là vận động nhẹ, giảm căng thẳng, ăn nhiều rau hơn -> 'Good for body and mind' (tốt cho thể chất và tinh thần).",
          "Đoạn 3: hàng xóm thành bạn, người già truyền kinh nghiệm, sự kiện gắn kết nhiều thế hệ -> 'A way to build community spirit'.",
          "Đoạn 4: hấp thụ CO2, giữ nước mưa, thu hút ong bướm, giảm quãng đường vận chuyển thực phẩm -> 'Benefits for wildlife and the planet'.",
          "Đoạn 5: đất thuộc người khác, nguy cơ bị xây nhà, thiếu tiền, tình nguyện viên mất hứng -> 'An uncertain future' (tương lai bấp bênh). Tiêu đề thừa: 'Why city life is so expensive' (không có đoạn nào bàn về chi phí sống ở thành phố)."
        ]
      }
    ]
  };
})();
