(function () {
  const D = (globalThis.AptisData = globalThis.AptisData || {});

  // Hai đề song song A / B: cùng cấu trúc, cùng độ khó, khác hoàn toàn câu hỏi và văn bản.
  // Thứ tự trong vocab / grammar: 4 câu A2 (nghĩa, đồng nghĩa, collocation, điền từ), rồi 4 câu B1, rồi 4 câu B2 (cùng kiểu).
  D.diagnostic = {
    A: {
      vocab: [
        // ---- A2 ----
        { lvl: "A2", q: "What does 'borrow' mean?", o: ["To give something to a person for a short time", "To take something from a person and give it back later", "To buy something at a very low price", "To keep something that is not yours"], a: 1, e: "borrow = mượn (lấy đồ của người khác dùng tạm rồi trả). Đáp án đầu là nghĩa của lend (cho mượn) — bẫy rất hay gặp vì borrow/lend dễ nhầm; đáp án thứ ba là mua rẻ; đáp án cuối gần với steal (lấy cắp)." },
        { lvl: "A2", q: "Which word has almost the SAME meaning as 'big'?", o: ["Narrow", "Quiet", "Large", "Short"], a: 2, e: "large = lớn, đồng nghĩa với big. Narrow = hẹp, quiet = yên tĩnh, short = ngắn/thấp." },
        { lvl: "A2", q: "Could you ___ me a favour, please?", o: ["do", "make", "give", "take"], a: 0, e: "Cụm cố định: do someone a favour = giúp ai một việc. Người Việt hay nói nhầm 'make a favour'. give và take không đi với favour theo nghĩa này." },
        { lvl: "A2", q: "I can't carry all these bags. Can you ___ me, please?", o: ["tell", "make", "let", "help"], a: 3, e: "help me = giúp tôi (mang túi). tell me = nói cho tôi biết, make me = bắt tôi làm gì, let me = cho phép tôi — đều không hợp ngữ cảnh." },
        // ---- B1 ----
        { lvl: "B1", q: "What does 'reliable' mean?", o: ["Very expensive but good quality", "Always happy to talk to other people", "Not interested in other people", "Able to be trusted to do what you expect"], a: 3, e: "reliable = đáng tin cậy (luôn làm đúng như đã hứa), ví dụ a reliable colleague/car. Các đáp án còn lại lần lượt gần với luxury, sociable (hoà đồng), indifferent (thờ ơ)." },
        { lvl: "B1", q: "Which word means the SAME as 'purchase' (verb)?", o: ["buy", "sell", "borrow", "return"], a: 0, e: "purchase (v) = buy, cách nói trang trọng hơn. sell = bán (trái nghĩa), borrow = mượn, return = trả lại." },
        { lvl: "B1", q: "I'm sorry, I think I ___ a mistake in your bill.", o: ["did", "got", "made", "had"], a: 2, e: "Collocation: make a mistake = mắc lỗi. 'do a mistake' là lỗi người Việt rất hay gặp (do dịch từ 'làm lỗi'). got/had a mistake không tự nhiên." },
        { lvl: "B1", q: "Our flight was ___ because of the fog, so we arrived four hours late.", o: ["cancelled", "delayed", "missed", "postponed"], a: 1, e: "delayed = bị hoãn/trễ giờ nhưng vẫn bay (nên 'arrived four hours late'). cancelled = bị huỷ hẳn (không đến nơi), missed = lỡ chuyến, postponed = dời sang ngày khác, thường dùng cho sự kiện/kế hoạch." },
        // ---- B2 ----
        { lvl: "B2", q: "What does 'reluctant' mean?", o: ["Very eager to help other people", "Easy to persuade", "Not willing to do something and slow to agree", "Unable to make any decision at all"], a: 2, e: "reluctant = miễn cưỡng, không sẵn lòng (She was reluctant to accept the offer). Eager là trái nghĩa; 'easy to persuade' và 'unable to decide' là bẫy do suy đoán." },
        { lvl: "B2", q: "Which word is closest in meaning to 'considerable' in 'a considerable amount of money'?", o: ["thoughtful", "slight", "unexpected", "substantial"], a: 3, e: "considerable (đứng trước danh từ) = đáng kể, khá lớn ≈ substantial. Bẫy: considerate mới là 'chu đáo, biết quan tâm người khác' (≈ thoughtful) — hai từ gần dạng nhưng khác nghĩa. slight = nhỏ, trái nghĩa." },
        { lvl: "B2", q: "We worked all weekend to ___ the deadline.", o: ["catch", "meet", "win", "fit"], a: 1, e: "Collocation: meet a deadline = kịp hạn chót. catch dùng với bus/train, win với giải thưởng, fit không đi với deadline." },
        { lvl: "B2", q: "Please be more ___ to your colleagues' feelings when you give them feedback.", o: ["sensitive", "sensible", "sensational", "sensory"], a: 0, e: "sensitive to = nhạy cảm, biết để ý đến cảm xúc. Bẫy: sensible = hợp lý, biết điều; sensational = giật gân/gây chấn động; sensory = thuộc giác quan." }
      ],
      grammar: [
        // ---- A2 ----
        { lvl: "A2", q: "Look! It ___ outside, so take an umbrella.", o: ["is raining", "rains", "rained", "has rain"], a: 0, e: "'Look!' cho thấy việc đang xảy ra ngay lúc nói nên dùng Present Continuous: is raining. 'rains' dùng cho thói quen/sự thật chung; 'rained' là quá khứ; 'has rain' sai cấu trúc." },
        { lvl: "A2", q: "We ___ to the cinema last Saturday.", o: ["go", "are going", "have gone", "went"], a: 3, e: "'last Saturday' là mốc quá khứ đã kết thúc nên dùng Past Simple: went. Không dùng Present Perfect (have gone) với mốc thời gian quá khứ cụ thể." },
        { lvl: "A2", q: "The meeting is ___ Monday at ten o'clock.", o: ["in", "on", "at", "by"], a: 1, e: "Dùng on trước ngày trong tuần (on Monday, on 5th May). at dùng cho giờ giấc (at ten o'clock), in cho tháng/năm/buổi (in May, in the morning)." },
        { lvl: "A2", q: "My brother is ___ engineer. He works for a big company.", o: ["a", "some", "an", "the"], a: 2, e: "Nghề nghiệp dùng a/an. Từ 'engineer' bắt đầu bằng âm nguyên âm /e/ nên dùng an. 'some' không đi với danh từ đếm được số ít; 'the' chỉ dùng khi đã xác định." },
        // ---- B1 ----
        { lvl: "B1", q: "If it ___ tomorrow, we'll cancel the picnic.", o: ["would rain", "will rain", "rains", "rained"], a: 2, e: "Điều kiện loại 1 (có thể xảy ra ở tương lai): If + hiện tại đơn, will + V. Không dùng will/would trong mệnh đề if, và 'rained' là loại 2 (không có thật)." },
        { lvl: "B1", q: "If I ___ more money, I would travel around the world.", o: ["have", "had", "would have", "will have"], a: 1, e: "Điều kiện loại 2 (giả định không có thật ở hiện tại): If + quá khứ đơn, would + V. 'have' là loại 1 nên đi với will; 'would have/will have' không được dùng trong mệnh đề if." },
        { lvl: "B1", q: "This is ___ film I have ever seen. I almost fell asleep.", o: ["the most boring", "more boring", "the boringest", "the more boring"], a: 0, e: "So sánh nhất của tính từ dài (≥ 2 âm tiết): the most + adj. 'have ever seen' là dấu hiệu so sánh nhất. 'more boring' là so sánh hơn (cần than); 'boringest' sai vì boring là tính từ dài." },
        { lvl: "B1", q: "The report ___ by the team yesterday.", o: ["wrote", "is written", "has written", "was written"], a: 3, e: "Bị động quá khứ đơn: was/were + V3. 'The report' là vật bị tác động và có 'yesterday' nên dùng was written. 'wrote' là chủ động; 'is written' sai thì; 'has written' là chủ động." },
        // ---- B2 ----
        { lvl: "B2", q: "If I ___ harder at school, I would have a better job now.", o: ["studied", "would study", "have studied", "had studied"], a: 3, e: "Điều kiện hỗn hợp: giả định sai ở QUÁ KHỨ → kết quả ở HIỆN TẠI: If + had + V3, would + V. 'studied' sẽ thành loại 2 (nói về hiện tại) nên sai nghĩa; would/have studied không dùng trong mệnh đề if." },
        { lvl: "B2", q: "The report, ___ I read on the train, was full of mistakes.", o: ["that", "what", "which", "who"], a: 2, e: "Mệnh đề quan hệ không xác định (có dấu phẩy) cho vật dùng which; KHÔNG dùng that sau dấu phẩy. what không làm đại từ quan hệ khi có tiền ngữ; who dành cho người." },
        { lvl: "B2", q: "Reported speech: 'Where did you park the car?' → He asked me ___.", o: ["where I had parked the car", "where had I parked the car", "where did I park the car", "where I have parked the car"], a: 0, e: "Câu hỏi tường thuật: đổi you → I, lùi thì (quá khứ đơn → quá khứ hoàn thành) và dùng trật tự câu khẳng định (không đảo trợ động từ). Hai đáp án có đảo ngữ sai; 'have parked' không lùi thì đúng." },
        { lvl: "B2", q: "I can't find my wallet. I ___ it on the bus.", o: ["must leave", "must have left", "should leave", "can have left"], a: 1, e: "Suy đoán chắc chắn về quá khứ: must have + V3 (chắc là đã để quên). must leave/should leave nói về hiện tại/tương lai; 'can have left' không dùng cho suy đoán khẳng định." }
      ],
      reading: [
        {
          passage: "Hi everyone,\n\nJust a quick message about our team lunch. We usually go to the Italian restaurant on Fridays, but it is closed this week because the kitchen is being repaired. So I have booked a table at the Thai restaurant next to the station instead. It is a little more expensive, but the food is really good and there is plenty of space for our group. We will meet in reception at half past twelve. If you cannot come, please tell me by Thursday morning, because the restaurant needs to know how many people are coming. Oh, and if you don't like spicy food, don't worry. They have some mild dishes too.\n\nSee you on Friday!\nMaria",
          qs: [
            { lvl: "A2", q: "Why can't the team go to the Italian restaurant on Friday?", o: ["It is too far from the office.", "It is closed for repairs.", "It is full of other customers."], a: 1, e: "Bài viết: 'it is closed this week because the kitchen is being repaired' → đóng cửa để sửa chữa. Hai đáp án kia không được nhắc đến (chỉ có nhà hàng Thái 'next to the station' và 'plenty of space')." },
            { lvl: "B1", q: "What must people do if they cannot come to the lunch?", o: ["Tell Maria by Thursday morning.", "Meet Maria in reception at half past twelve.", "Book a table at the Thai restaurant."], a: 0, e: "Câu 'please tell me by Thursday morning' nêu rõ việc cần làm. Đáp án thứ hai là giờ và nơi tập trung (thông tin gây nhiễu); đáp án thứ ba là việc Maria đã làm rồi." },
            { lvl: "B1", q: "Why does Maria mention the mild dishes?", o: ["She wants everyone to try something spicy.", "She is worried the restaurant is too expensive.", "She knows some people may not like spicy food."], a: 2, e: "Suy luận: Maria nói 'if you don't like spicy food, don't worry' → cô biết có người có thể không thích đồ cay và muốn trấn an họ. Chuyện giá cả được nhắc ở câu khác, không liên quan đến món nhạt." }
          ]
        },
        {
          passage: "Many companies have discovered that letting employees work from home can reduce costs and keep staff happy. However, a recent study suggests that the picture is more complicated. Although most people said they were more productive at home, those who worked remotely five days a week felt less connected to their colleagues and were less likely to be promoted. Managers admitted that they tended to notice the people they saw every day. The researchers do not recommend abandoning remote work altogether. Instead, they suggest that companies should encourage staff to spend two or three days in the office, so that the benefits of flexibility are not outweighed by the loss of contact. Whether employees will accept such a compromise remains to be seen.",
          qs: [
            { lvl: "B1", q: "According to the study, what was true of people who worked from home five days a week?", o: ["They produced less work than other people.", "They received fewer emails than other people.", "They felt less connected to their colleagues."], a: 2, e: "Bài viết: 'felt less connected to their colleagues'. Đáp án đầu sai vì phần lớn người được hỏi nói mình làm việc hiệu quả hơn ở nhà; đáp án thứ hai không được nhắc đến." },
            { lvl: "B2", q: "What does the passage suggest about why remote workers were less likely to be promoted?", o: ["Their work was of poorer quality.", "Managers paid more attention to people who were physically present.", "They did not want to take on more responsibility."], a: 1, e: "Suy luận từ câu 'managers tended to notice the people they saw every day': người ở văn phòng được chú ý nhiều hơn. Đáp án đầu mâu thuẫn với việc họ làm việc hiệu quả; đáp án cuối không có trong bài." },
            { lvl: "B2", q: "What is the writer's attitude in the last sentence?", o: ["Uncertain whether employees will agree to the suggestion.", "Sure that companies will welcome the suggestion.", "Angry that remote work might come to an end."], a: 0, e: "'remains to be seen' = chưa biết trước được, vẫn còn bỏ ngỏ → người viết không chắc nhân viên có chấp nhận thoả hiệp hay không. Người viết không thể hiện sự chắc chắn hay tức giận." }
          ]
        }
      ],
      listening: [
        {
          speakers: { Anna: "f", Tom: "m" },
          script: [
            { s: "Anna", t: "Hello, Tom. Are you free on Thursday? I'd like to show you the new training room." },
            { s: "Tom", t: "Thursday? Let me think. I have a meeting at ten o'clock, but I'm free after eleven." },
            { s: "Anna", t: "Good. Shall we say half past eleven?" },
            { s: "Tom", t: "Hmm, I usually have lunch at twelve. Could we meet a bit earlier, at a quarter past eleven?" },
            { s: "Anna", t: "Yes, that's fine. The room is on the third floor, next to the library." },
            { s: "Tom", t: "Oh, I thought it was on the second floor." },
            { s: "Anna", t: "No, it moved last month. Take the lift and turn left." },
            { s: "Tom", t: "Great. Do I need to bring anything?" },
            { s: "Anna", t: "Just your laptop. See you on Thursday." }
          ],
          qs: [
            { lvl: "A2", q: "Which day will Anna and Tom meet?", o: ["Tuesday", "Wednesday", "Thursday"], a: 2, e: "Anna hỏi 'Are you free on Thursday?' và kết thúc bằng 'See you on Thursday' → Thursday." },
            { lvl: "B1", q: "What time will they meet?", o: ["At a quarter past eleven", "At half past eleven", "At twelve"], a: 0, e: "Anna đề nghị half past eleven nhưng Tom đề nghị sớm hơn 'at a quarter past eleven' và Anna đồng ý. Half past eleven là giờ bị thay đổi; twelve là giờ ăn trưa của Tom." },
            { lvl: "B1", q: "Where is the new training room?", o: ["On the second floor", "On the third floor", "Next to reception"], a: 1, e: "Tom nghĩ là tầng hai nhưng Anna đính chính: 'on the third floor, next to the library' (cạnh thư viện, không phải quầy lễ tân)." }
          ]
        },
        {
          speakers: { Laura: "f", Ben: "m" },
          script: [
            { s: "Laura", t: "Ben, have you looked at the venues for the annual conference? I still can't decide." },
            { s: "Ben", t: "I have. The hotel by the river is the most popular, but it's expensive. They want four thousand pounds for two days." },
            { s: "Laura", t: "That's more than we planned to spend. What about the university?" },
            { s: "Ben", t: "It's much cheaper, only fifteen hundred, and there's plenty of parking. The trouble is that the main hall holds a hundred and twenty people, and we're expecting about a hundred and fifty." },
            { s: "Laura", t: "Hmm. Though, to be fair, only about a hundred turned up last year, even though a hundred and forty had booked." },
            { s: "Ben", t: "That's true. So we might get away with it." },
            { s: "Laura", t: "I'd rather not take the risk. If people are standing at the back, it won't look professional. Could we use the hotel's smaller room instead?" },
            { s: "Ben", t: "I'll ask them. If they can offer a discount, I think we should go for it." },
            { s: "Laura", t: "Agreed. Let's decide by Friday." }
          ],
          qs: [
            { lvl: "B1", q: "What is the main problem with the university?", o: ["The main hall may not be big enough.", "There is not enough parking.", "It costs more than the hotel."], a: 0, e: "Ben: 'the main hall holds a hundred and twenty people' mà dự kiến khoảng một trăm năm mươi người. Parking thì 'plenty'; trường rẻ hơn khách sạn (fifteen hundred so với four thousand)." },
            { lvl: "B2", q: "Why does Laura hesitate to choose the university, even though fewer people came last year?", o: ["She thinks the fee is too high.", "She thinks a crowded hall would look unprofessional.", "She doesn't trust Ben's figures."], a: 1, e: "Laura nói 'I'd rather not take the risk. If people are standing at the back, it won't look professional.' Số người năm ngoái chỉ là lý lẽ Ben dùng; Laura vẫn lo ngại về hình ảnh. Giá không phải vấn đề với trường." },
            { lvl: "B2", q: "What will Ben do next?", o: ["Book the university hall.", "Count how many people have booked.", "Ask the hotel whether it can reduce the price."], a: 2, e: "Ben: 'I'll ask them. If they can offer a discount...' → hỏi khách sạn về giảm giá. Quyết định cuối cùng chỉ hẹn 'by Friday'; không ai nói sẽ đặt trường hay đếm số người đăng ký." }
          ]
        }
      ]
    },

    B: {
      vocab: [
        // ---- A2 ----
        { lvl: "A2", q: "What does 'repair' mean?", o: ["To throw something away", "To make something dirty", "To buy something new", "To fix something that is broken"], a: 3, e: "repair = sửa chữa (làm cho đồ hỏng chạy/dùng lại được). Các đáp án khác lần lượt là nghĩa của throw away, make dirty và buy." },
        { lvl: "A2", q: "Which word has almost the SAME meaning as 'begin'?", o: ["start", "finish", "stay", "wait"], a: 0, e: "start = bắt đầu, đồng nghĩa với begin. finish = kết thúc (trái nghĩa), stay = ở lại, wait = chờ." },
        { lvl: "A2", q: "We ___ a great time at the party last night.", o: ["did", "had", "made", "took"], a: 1, e: "Collocation: have a great time = vui vẻ (quá khứ: had). do/make/take không đi với 'a great time' theo nghĩa này." },
        { lvl: "A2", q: "I'm sorry, I can't come tonight. I have to ___ my sister's children.", o: ["look at", "look for", "look after", "look like"], a: 2, e: "look after = chăm sóc, trông nom. look at = nhìn vào, look for = tìm kiếm, look like = trông giống." },
        // ---- B1 ----
        { lvl: "B1", q: "What does 'ambitious' mean?", o: ["Often feeling worried about work", "Wanting very much to succeed and achieve things", "Always arriving early", "Quiet and shy in meetings"], a: 1, e: "ambitious = nhiều tham vọng, rất muốn thành công (an ambitious young manager). Các đáp án còn lại mô tả anxious (lo lắng), punctual (đúng giờ), shy (nhút nhát)." },
        { lvl: "B1", q: "Which word means the SAME as 'require'?", o: ["offer", "allow", "need", "refuse"], a: 2, e: "require = cần, đòi hỏi (This job requires experience) ≈ need. offer = đề nghị, allow = cho phép, refuse = từ chối." },
        { lvl: "B1", q: "Could you ___ me a lift to the station? My car is at the garage.", o: ["take", "bring", "lend", "give"], a: 3, e: "Collocation Anh-Anh: give someone a lift = cho ai đi nhờ xe. take me to the station (chở tôi đến ga) cần giới từ chỉ nơi đến, 'take me a lift' sai; bring ngược hướng; lend = cho mượn đồ." },
        { lvl: "B1", q: "I can't afford a new car, so I'm going to buy a ___ one.", o: ["second-hand", "second-class", "secondary", "second-rate"], a: 0, e: "second-hand = đã qua sử dụng, nên rẻ hơn. second-class = hạng hai (vé tàu, thư), secondary = thứ cấp (secondary school), second-rate = chất lượng kém." },
        // ---- B2 ----
        { lvl: "B2", q: "What does 'stubborn' mean?", o: ["Refusing to change your opinion, even when others disagree", "Willing to listen to other people's ideas", "Easily upset by criticism", "Very careful with money"], a: 0, e: "stubborn = bướng bỉnh, cứng đầu, không chịu thay đổi ý kiến. Các đáp án còn lại gần với open-minded, sensitive (dễ tự ái) và thrifty (tiết kiệm)." },
        { lvl: "B2", q: "Which word is closest in meaning to 'adequate' in 'The room was adequate for our needs'?", o: ["luxurious", "sufficient", "enormous", "generous"], a: 1, e: "adequate = đủ dùng, tạm đủ ≈ sufficient. luxurious = sang trọng, enormous = khổng lồ, generous = hào phóng/rộng rãi — đều mạnh hơn nhiều so với 'chỉ vừa đủ'." },
        { lvl: "B2", q: "The new policy will ___ little difference to ordinary workers.", o: ["do", "give", "have", "make"], a: 3, e: "Collocation: make a difference / make little difference = tạo ra (ít) khác biệt. 'have little effect' mới đi với have; do và give không đi với difference." },
        { lvl: "B2", q: "The new rules will ___ all staff, including part-time workers.", o: ["effect", "afford", "affect", "effort"], a: 2, e: "affect (v) = ảnh hưởng đến; effect (n) = tác động/kết quả. Bẫy kinh điển affect/effect; afford = đủ khả năng chi trả; effort = nỗ lực." }
      ],
      grammar: [
        // ---- A2 ----
        { lvl: "A2", q: "Be quiet, please! The baby ___.", o: ["sleeps", "sleep", "is sleeping", "has slept"], a: 2, e: "Việc đang diễn ra ngay lúc nói nên dùng Present Continuous: is sleeping. 'sleeps' diễn tả thói quen; 'sleep' sai chia động từ với 'the baby'; 'has slept' sai nghĩa." },
        { lvl: "A2", q: "I ___ my keys yesterday, so I couldn't open the door.", o: ["lost", "lose", "have lost", "am losing"], a: 0, e: "'yesterday' là mốc quá khứ cụ thể và 'couldn't' cũng ở quá khứ nên dùng Past Simple: lost. Present Perfect không đi với yesterday." },
        { lvl: "A2", q: "We arrived ___ the airport two hours early.", o: ["in", "to", "on", "at"], a: 3, e: "arrive at + địa điểm nhỏ/điểm đến cụ thể (airport, station); arrive in + thành phố/nước. 'arrive to' là lỗi người Việt hay mắc (dịch từ 'đến')." },
        { lvl: "A2", q: "I had ___ sandwich and an apple for lunch.", o: ["an", "a", "the", "these"], a: 1, e: "'sandwich' là danh từ đếm được số ít, nhắc đến lần đầu và bắt đầu bằng phụ âm /s/ nên dùng a. 'an' chỉ đứng trước nguyên âm; 'the' chỉ dùng khi đã xác định; 'these' đi với số nhiều." },
        // ---- B1 ----
        { lvl: "B1", q: "If you ___ the report today, I'll check it tomorrow.", o: ["will finish", "finish", "finished", "would finish"], a: 1, e: "Điều kiện loại 1: If + hiện tại đơn (finish), will + V. Không dùng will/would trong mệnh đề if; 'finished' tạo thành loại 2 nên sẽ phải đi với would." },
        { lvl: "B1", q: "If she ___ my number, she would call me.", o: ["knows", "would know", "has known", "knew"], a: 3, e: "Điều kiện loại 2 (thực tế là cô ấy không biết số): If + quá khứ đơn (knew), would + V. 'knows' là loại 1 (sẽ đi với will); would know không dùng trong mệnh đề if." },
        { lvl: "B1", q: "This is ___ meal I have ever eaten. It was perfect.", o: ["the deliciousest", "the more delicious", "the most delicious", "most delicious"], a: 2, e: "So sánh nhất của tính từ dài: the most + adj. 'deliciousest' sai vì delicious là tính từ dài; 'the more delicious' là so sánh hơn; thiếu 'the' trước most thì sai trong cấu trúc này." },
        { lvl: "B1", q: "This bridge ___ in 1920.", o: ["was built", "built", "is built", "has been built"], a: 0, e: "Bị động quá khứ đơn: was/were + V3, vì cầu 'được xây' vào năm 1920 (mốc quá khứ). 'built' là chủ động; 'is built' và 'has been built' sai thì với mốc quá khứ cụ thể." },
        // ---- B2 ----
        { lvl: "B2", q: "If we ___ the earlier train, we would be at the hotel by now.", o: ["had caught", "caught", "would catch", "have caught"], a: 0, e: "Điều kiện hỗn hợp: điều kiện ở QUÁ KHỨ (đã không bắt kịp chuyến tàu sớm) → kết quả ở HIỆN TẠI ('by now'): If + had + V3, would + V. 'caught' sẽ nói về hiện tại; would catch không dùng trong mệnh đề if." },
        { lvl: "B2", q: "My brother, ___ lives in Canada, is visiting us next month.", o: ["that", "whom", "who", "which"], a: 2, e: "Mệnh đề quan hệ không xác định (có dấu phẩy), chủ ngữ là người: who. KHÔNG dùng that sau dấu phẩy; whom chỉ làm tân ngữ; which dành cho vật." },
        { lvl: "B2", q: "Reported speech: 'Do you know the answer?' → She asked me ___ the answer.", o: ["whether had I known", "if I knew", "did I know", "that I knew"], a: 1, e: "Câu hỏi Yes/No tường thuật: if/whether + chủ ngữ + động từ lùi thì (know → knew), không đảo ngữ. 'did I know' còn đảo ngữ; 'that' dùng cho câu kể, không dùng cho câu hỏi." },
        { lvl: "B2", q: "Sam ___ be at the gym. I saw him in the office five minutes ago.", o: ["mustn't", "shouldn't", "won't", "can't"], a: 3, e: "Suy đoán chắc chắn là KHÔNG thể: can't be. 'mustn't' mang nghĩa cấm đoán, không dùng để suy đoán phủ định; 'shouldn't/won't' không diễn tả sự suy luận từ bằng chứng." }
      ],
      reading: [
        {
          passage: "Hello everyone,\n\nI'm writing about our end-of-course party. We planned to have it at Sam's flat on Saturday, but Sam has to travel to Manchester for his sister's wedding, so we are moving the party to Sunday afternoon instead. It will now be in the school garden, and we will start at three o'clock. The school has agreed to let us use the kitchen, so we don't need to pay for a room. Please tell me by Friday evening if you are coming, so that I can buy enough food. Everyone should bring one drink. And if the weather is bad, don't worry. We can use the big classroom.\n\nBest wishes,\nDaniel",
          qs: [
            { lvl: "A2", q: "Why is the party not on Saturday?", o: ["Sam will be away at a family wedding.", "The school garden is closed.", "Daniel is working that day."], a: 0, e: "Bài viết: 'Sam has to travel to Manchester for his sister's wedding' → Sam đi dự đám cưới của chị gái. Hai đáp án kia không được nhắc đến." },
            { lvl: "B1", q: "When must people tell Daniel if they are coming?", o: ["By Saturday morning.", "On Sunday at three o'clock.", "By Friday evening."], a: 2, e: "'Please tell me by Friday evening' → trước tối thứ Sáu. Sunday at three o'clock là giờ bắt đầu tiệc (thông tin gây nhiễu); Saturday là ngày tiệc ban đầu." },
            { lvl: "B1", q: "Why does Daniel mention the big classroom?", o: ["The garden may be too small for everyone.", "He is thinking about what to do if the weather is bad.", "He wants to start the party earlier."], a: 1, e: "Suy luận: 'if the weather is bad, don't worry. We can use the big classroom' → lớp học là phương án dự phòng nếu trời xấu. Không có thông tin nào về việc vườn nhỏ hay đổi giờ." }
          ]
        },
        {
          passage: "Open-plan offices were introduced to encourage teamwork and save space, but a growing number of studies question whether they really work. In one survey, more than half of employees said that noise and interruptions made it hard to concentrate, and many wore headphones simply to avoid conversations. Surprisingly, face-to-face contact between colleagues actually fell after the move to open-plan, as people sent more emails to avoid disturbing others. Some companies have responded by creating quiet rooms where staff can work alone for a few hours. Architects argue that the problem is not the design itself but the way it is used, and that clear rules about noise would solve most complaints. Whether such rules would be enough is still a matter of debate.",
          qs: [
            { lvl: "B1", q: "What did many employees do to avoid conversations?", o: ["They used the quiet rooms.", "They wore headphones.", "They sent fewer emails."], a: 1, e: "Bài viết: 'many wore headphones simply to avoid conversations'. Quiet rooms là biện pháp của công ty; còn nhân viên gửi NHIỀU email hơn, không phải ít hơn." },
            { lvl: "B2", q: "What does the passage suggest about face-to-face contact in open-plan offices?", o: ["It decreased, because people tried not to disturb each other.", "It increased, because people sat closer together.", "It stayed the same as before."], a: 0, e: "'face-to-face contact ... actually fell ... as people sent more emails to avoid disturbing others' → giao tiếp trực tiếp giảm, trái với kỳ vọng. Đáp án thứ hai là điều người ta mong đợi nhưng 'Surprisingly' cho thấy ngược lại." },
            { lvl: "B2", q: "What does the writer think about the architects' suggestion at the end of the passage?", o: ["Convinced that the architects are wrong.", "Sure that rules will end all complaints.", "Not certain that rules alone would solve the problem."], a: 2, e: "'is still a matter of debate' = vẫn còn tranh luận, chưa chắc chắn. Người viết không khẳng định kiến trúc sư sai, cũng không chắc quy định sẽ giải quyết hết (đó là ý kiến của kiến trúc sư)." }
          ]
        }
      ],
      listening: [
        {
          speakers: { Helen: "f", James: "m" },
          script: [
            { s: "Helen", t: "Good morning, Riverside Dental Practice. How can I help?" },
            { s: "James", t: "Hello. This is James Carter. I have an appointment on Tuesday, but I need to change it." },
            { s: "Helen", t: "No problem. We have a free place on Wednesday at ten past nine, or at twenty to eleven." },
            { s: "James", t: "Hmm, I start work at half past nine. Could I come at twenty to eleven?" },
            { s: "Helen", t: "Yes, of course. Please remember we have moved to a new building in Park Road." },
            { s: "James", t: "Park Road? I thought the practice was still in High Street." },
            { s: "Helen", t: "It was, but we moved last month. It's opposite the station." },
            { s: "James", t: "Should I bring anything?" },
            { s: "Helen", t: "Only your appointment card. See you on Wednesday." }
          ],
          qs: [
            { lvl: "A2", q: "Which day is James's new appointment?", o: ["Tuesday", "Wednesday", "Friday"], a: 1, e: "Lịch cũ là Tuesday nhưng anh đổi sang Wednesday ('See you on Wednesday'). Tuesday là ngày cũ (bẫy)." },
            { lvl: "B1", q: "What time will James come?", o: ["Ten past nine", "Half past nine", "Twenty to eleven"], a: 2, e: "James chọn 'twenty to eleven' (mười một giờ kém hai mươi = 10:40). Ten past nine là phương án còn lại Helen đưa ra; half past nine là giờ James bắt đầu đi làm." },
            { lvl: "B1", q: "Where is the practice now?", o: ["In Park Road", "In High Street", "Next to the station"], a: 0, e: "Helen: 'we have moved to a new building in Park Road'. High Street là địa chỉ cũ; phòng khám ở 'opposite the station' (đối diện ga), không phải 'next to' (cạnh)." }
          ]
        },
        {
          speakers: { Priya: "f", Jack: "m" },
          script: [
            { s: "Priya", t: "Jack, I've looked at the training options for the new software. I think we have two choices." },
            { s: "Jack", t: "Go on." },
            { s: "Priya", t: "First, a company from Leeds will send a trainer to us. It's very good, but it costs two thousand pounds for the day." },
            { s: "Jack", t: "That's a lot. What's the other option?" },
            { s: "Priya", t: "An online course. It's only three hundred pounds per person, so for twelve people it comes to three thousand six hundred pounds. Hmm, that's actually more expensive than the trainer." },
            { s: "Jack", t: "Right, so the trainer wins on price. What's the downside?" },
            { s: "Priya", t: "The trainer can only teach groups of ten, and we have twelve staff. So two people would miss out." },
            { s: "Jack", t: "Well, Mina and Carlos are leaving next month anyway, so they don't really need it." },
            { s: "Priya", t: "That's true, but I'd still prefer everybody to be trained at the same time. It would look unfair otherwise." },
            { s: "Jack", t: "Fair enough. Why don't you ask the company if they can make an exception?" }
          ],
          qs: [
            { lvl: "B1", q: "How much does the trainer cost for the day?", o: ["Three hundred pounds", "Three thousand six hundred pounds", "Two thousand pounds"], a: 2, e: "Priya: 'it costs two thousand pounds for the day'. Three hundred pounds là giá khoá online cho MỖI người; three thousand six hundred là tổng giá khoá online cho mười hai người." },
            { lvl: "B2", q: "What does Priya realise about the online course?", o: ["It would cost more than the trainer for the whole team.", "It is cheaper per person than it first seems.", "It can only be taken in groups of ten."], a: 0, e: "Priya tính 300 × 12 = 3.600 bảng, 'more expensive than the trainer' (2.000 bảng). Giới hạn nhóm mười người là của giảng viên đến trực tiếp, không phải khoá online." },
            { lvl: "B2", q: "Why doesn't Priya agree that two people can miss the training?", o: ["She thinks they will not leave the company.", "She thinks it would seem unfair to them.", "She wants a cheaper option."], a: 1, e: "Priya: 'I'd still prefer everybody to be trained at the same time. It would look unfair otherwise.' Cô không phủ nhận việc hai người sắp nghỉ ('That's true') và giá không phải lý do của riêng chuyện này." }
          ]
        }
      ]
    }
  };
})();
