(function () {
  const D = (globalThis.AptisData = globalThis.AptisData || {});

  D.speaking = {
    /* ===================== PART 1 – Personal information ===================== */
    p1: [
      {
        id: "s1-1",
        topic: "Daily routine",
        qs: [
          "Can you tell me about your typical weekday?",
          "What time do you usually get up, and what do you do first?",
          "Is your routine different at weekends? How?"
        ],
        sample: [
          "Well, a typical weekday starts quite early for me. I get up at six, have a quick breakfast and then take the bus to the office, where I usually work until about half past five.",
          "Actually, I'm not really a morning person, so I set two alarms! The first thing I do is make a strong cup of coffee, and I check my messages while it cools down.",
          "Yes, it's completely different. At weekends I stay in bed until nine, meet friends for brunch and don't look at my work emails at all, which helps me recharge for the week ahead."
        ]
      },
      {
        id: "s1-2",
        topic: "Hometown",
        qs: [
          "Where are you from, and what is it like?",
          "What do you like most about your hometown?",
          "Would you like to live there in the future? Why or why not?"
        ],
        sample: [
          "I come from a medium-sized city on the coast in the south of the country. It's quite lively, with lots of cafés and a long beach, but it can get very crowded in summer.",
          "What I like most is the food and the friendly people. Everyone knows their neighbours, and there's a real sense of community, which you don't always find in bigger cities.",
          "Well, maybe one day. I'd like to live abroad for a few years first, but I think I'd move back eventually, because my family is there and the lifestyle is more relaxed."
        ]
      },
      {
        id: "s1-3",
        topic: "Family and friends",
        qs: [
          "Can you tell me about your family?",
          "Who do you spend most of your free time with?",
          "How do you keep in touch with friends who live far away?"
        ],
        sample: [
          "There are five of us: my parents, my younger sister, my brother and me. We're quite close, and we have dinner together every Sunday, which is when we catch up on everything.",
          "Mostly with my best friend, Hana. We've known each other since primary school, so we can talk about anything. Usually we go for coffee or watch a film at her place.",
          "Well, I mainly use video calls and messaging apps. Actually, we have a group chat where we share photos and jokes every day, so it almost feels as if we still live nearby."
        ]
      },
      {
        id: "s1-4",
        topic: "Work and study",
        qs: [
          "Do you work or study at the moment?",
          "What do you enjoy most about it?",
          "Is there anything you would like to change about your job or studies?"
        ],
        sample: [
          "I work as a marketing assistant in a small company. My main tasks are writing social media posts and preparing reports, and I've been in the job for about two years now.",
          "What I enjoy most is the variety. Every day is different, and I get to work with creative people. Also, my colleagues are really supportive, which makes the office a pleasant place.",
          "Honestly, I'd like to have more flexible hours. Sometimes the commute takes ages, so being able to work from home a couple of days a week would make a big difference."
        ]
      },
      {
        id: "s1-5",
        topic: "Free time and hobbies",
        qs: [
          "What do you like doing in your free time?",
          "How long have you had this hobby?",
          "Is there a new hobby you would like to try?"
        ],
        sample: [
          "I'm really into photography, so I often walk around the city with my camera at weekends. I also enjoy reading, especially detective stories, although I rarely have time during the week.",
          "Let me think... I picked up photography about three years ago, when I bought my first camera on holiday. Since then, I've taken thousands of pictures, and I've got a lot better.",
          "Well, I've always wanted to try pottery. It looks relaxing, and you can make something useful at the end. Actually, I'm thinking of signing up for a beginners' class next month."
        ]
      },
      {
        id: "s1-6",
        topic: "Food and cooking",
        qs: [
          "What kind of food do you enjoy most?",
          "Do you prefer eating at home or in restaurants?",
          "Can you cook? What is the best dish you can make?"
        ],
        sample: [
          "I love spicy food, especially noodle soups and anything with lots of fresh herbs. I also have a sweet tooth, so I can never say no to a good chocolate cake.",
          "It depends, really. During the week I eat at home because it's cheaper and healthier, but at weekends I like trying new restaurants with friends. It's a nice way to relax.",
          "Yes, I can cook a few dishes. My speciality is chicken curry, which my friends always ask for. To be honest, I learnt it from a video, so it's nothing complicated."
        ]
      },
      {
        id: "s1-7",
        topic: "Holidays and travel",
        qs: [
          "Where did you go on your last holiday?",
          "Do you prefer relaxing holidays or active ones?",
          "Where would you like to go next, and why?"
        ],
        sample: [
          "Last summer I spent a week at the seaside with my family. The weather was fantastic, and we just swam, ate seafood and walked along the beach in the evenings.",
          "Well, I used to prefer lying on the beach, but these days I like a mixture. What I mean is, I enjoy exploring a city in the morning and relaxing by the pool in the afternoon.",
          "I'd love to visit Japan because I'm fascinated by the culture and the food. Actually, I've already started saving money, and I'm hoping to go in about two years' time."
        ]
      },
      {
        id: "s1-8",
        topic: "Shopping",
        qs: [
          "Where do you usually buy your clothes?",
          "Do you prefer shopping online or in shops?",
          "Tell me about something you bought recently."
        ],
        sample: [
          "I usually go to a shopping centre near my flat, because there are lots of shops in one place. However, I sometimes buy from second-hand shops, as they are cheaper and more original.",
          "Honestly, I prefer shopping online. It's much quicker, and I can compare prices easily. The only problem is that I can't try things on, so I occasionally have to send them back.",
          "Last week I bought a pair of comfortable walking shoes. Actually, my old ones had fallen apart, so I needed new ones urgently. They were on sale, which was a lovely surprise."
        ]
      }
    ],

    /* ===================== PART 2 – Describe a picture ===================== */
    p2: [
      {
        id: "s2-1",
        title: "People working in a café",
        emoji: "☕🧑‍💻",
        scene:
          "The picture shows a small, cosy café on a rainy afternoon. A young woman in a green jumper is sitting at a wooden table by the window, typing on a laptop with a cup of coffee beside her. At the next table, two men in business clothes are looking at some papers and talking quietly. Behind the counter, a barista is making a drink. The room looks warm and busy, with soft lighting and plants on the shelves. Everyone seems focused.",
        qs: [
          "Why do you think some people prefer to work in cafés instead of offices?",
          "Do you ever study or work in a café? Why or why not?"
        ],
        sample:
          "In this picture I can see a cosy café on a rainy day. A young woman is working on her laptop next to the window, and there's a cup of coffee on her table. Behind her, two men in suits seem to be having a business meeting. I think they are probably freelancers, because they look relaxed but focused. The atmosphere seems calm and friendly. As for your question, people choose cafés because they want a change of scenery. Actually, I do that sometimes myself. At home I get distracted by housework, whereas in a café I can concentrate.",
        vocab: ["cosy", "freelancer", "barista", "remote working", "get distracted", "atmosphere", "a change of scenery", "concentrate"]
      },
      {
        id: "s2-2",
        title: "A family picnic in the park",
        emoji: "🧺🌳",
        scene:
          "A family of six is having a picnic on a sunny Sunday in a large park. They are sitting on a red blanket under a big oak tree. The father is cutting up a watermelon, the mother is pouring orange juice, and a grandmother is smiling at a toddler who is holding a ball. Two older children are playing badminton nearby. There are sandwiches, fruit and a basket on the blanket. The weather is warm and everybody looks relaxed and happy.",
        qs: [
          "What do you think the family is celebrating or enjoying?",
          "Do you prefer spending your free time outdoors or at home? Why?"
        ],
        sample:
          "This picture shows a family having a picnic in a park on a sunny day. There are six of them, from three generations: a grandmother, two parents and three children. The father is cutting a watermelon while the mother pours some juice, and two of the children are playing badminton in the background. I think they are celebrating something, maybe a birthday, or they might just be enjoying the weekend together. Personally, I prefer spending my free time outdoors. When the weather is nice, I'd much rather go to a park with friends than stay at home, because fresh air makes me feel more energetic.",
        vocab: ["picnic", "blanket", "toddler", "generation", "relaxed", "basket", "spend quality time", "fresh air"]
      },
      {
        id: "s2-3",
        title: "A busy railway station",
        emoji: "🚉🧳",
        scene:
          "It's rush hour at a large railway station. Crowds of commuters are walking quickly across the main hall, many of them carrying bags, coffee cups or umbrellas. A large board above them shows departure times and platform numbers. In the foreground, a tourist with a huge backpack is looking at a map and seems confused, while a station worker in a yellow jacket points the way. Some people are queuing at the ticket machines. The mood is hectic and rather stressful.",
        qs: [
          "How do you think the people in the picture are feeling?",
          "Do you enjoy travelling by train? Why or why not?"
        ],
        sample:
          "In this picture I can see a very busy railway station during rush hour. Lots of commuters are hurrying across the hall, and many of them are carrying bags or umbrellas. In the foreground, there's a tourist with a big backpack who looks confused, so a station worker is helping him find the right platform. I imagine most people feel stressed because they don't want to miss their trains. As for travelling by train, I really enjoy it. Actually, it's my favourite way to travel, because I can look out of the window, read a book and relax, instead of worrying about traffic jams.",
        vocab: ["commuter", "rush hour", "platform", "departure board", "hectic", "queue", "confused", "miss a train"]
      },
      {
        id: "s2-4",
        title: "Colleagues in a meeting",
        emoji: "👥📊",
        scene:
          "Six colleagues are sitting around a long table in a bright meeting room. On the wall behind them, a screen shows a colourful bar chart. A woman in a blue blazer is standing and explaining the figures, using a pen to point at the screen. Two men are taking notes on their laptops, while another woman is nodding and drinking from a water bottle. There are notebooks, glasses and a jug of water on the table. Everyone looks serious but interested.",
        qs: [
          "What do you think the meeting is about?",
          "Do you find meetings useful or a waste of time? Why?"
        ],
        sample:
          "The picture shows six colleagues in a meeting room. A woman in a blue blazer is presenting a bar chart on a screen, and the others are listening carefully, taking notes or nodding. I would guess they're discussing sales figures or the results of a project, because the chart looks quite detailed. Everybody seems serious but interested. To answer your question, I think meetings can be very useful if they are well organised. However, when they are too long or have no clear purpose, they're a complete waste of time. In my experience, the best meetings are short, and everyone leaves knowing exactly what to do next.",
        vocab: ["blazer", "bar chart", "figures", "take notes", "presentation", "agenda", "a waste of time", "well organised"]
      },
      {
        id: "s2-5",
        title: "A street market",
        emoji: "🛒🍎",
        scene:
          "This is a lively outdoor market on a sunny morning. Rows of stalls are covered with colourful umbrellas, selling fruit, vegetables, flowers and fresh bread. In the centre, an elderly stallholder is weighing some apples for a customer, who is holding a cloth shopping bag. A little girl is pointing at some strawberries while her father checks his wallet. Behind them, a few people are chatting and tasting cheese. The atmosphere is friendly and noisy.",
        qs: [
          "What are the advantages of buying food at a market?",
          "How often do you shop at markets or in supermarkets?"
        ],
        sample:
          "In this picture there's a lively street market on a sunny morning. The stalls are covered with colourful umbrellas and are full of fruit, vegetables and flowers. In the middle, an elderly stallholder is weighing apples for a customer, and a little girl is pointing at some strawberries. I think the atmosphere is cheerful and friendly. One advantage of buying food at a market is that it's usually fresher and cheaper than in a supermarket. Also, you can chat to the sellers. Personally, I do most of my shopping at the supermarket because it's convenient, but I go to the market at weekends when I have more time.",
        vocab: ["stall", "stallholder", "fresh produce", "weigh", "customer", "lively", "bargain", "supermarket"]
      },
      {
        id: "s2-6",
        title: "Friends hiking in the mountains",
        emoji: "🥾⛰️",
        scene:
          "Four friends are hiking along a narrow path high in the mountains. They are wearing waterproof jackets, strong boots and large backpacks. The one in front is holding a map and pointing ahead, while the others are stopping to take photos of the valley below. The sky is partly cloudy and there is still some snow on the peaks. Everyone looks tired but cheerful, and one of them is drinking water from a bottle.",
        qs: [
          "Why do you think people enjoy activities like hiking?",
          "Would you like to go on a trip like this? Why or why not?"
        ],
        sample:
          "This picture shows four friends hiking in the mountains. They are walking along a narrow path, and they're wearing waterproof jackets and carrying heavy backpacks. One of them is holding a map, while the others are taking photos of the beautiful valley. They look tired but really happy. I think people enjoy hiking because it lets them escape from city life and get some exercise at the same time. Personally, I'd love to go on a trip like this, although I'm not very fit at the moment. What I mean is, I'd need to start with an easy route and build up gradually.",
        vocab: ["hike", "waterproof", "backpack", "peak", "valley", "narrow path", "escape from city life", "fit"]
      }
    ],

    /* ===================== PART 3 – Compare two pictures ===================== */
    p3: [
      {
        id: "s3-1",
        title: "Travelling by train or by car",
        emojiA: "🚆",
        emojiB: "🚗",
        sceneA:
          "A modern train is travelling through green countryside. Inside, passengers are sitting in comfortable seats. A man is reading a newspaper, a woman is working on a laptop, and two students are sharing headphones and laughing. Through the large window, you can see fields and hills passing by.",
        sceneB:
          "A man is driving a small car along a motorway in heavy traffic. There are cars all around him, and he looks tense, gripping the steering wheel. On the passenger seat there is a map and a takeaway coffee. It is raining slightly, and the brake lights ahead are glowing red.",
        qs: [
          "What are the advantages and disadvantages of each way of travelling?",
          "Which would you choose for a long journey, and why?"
        ],
        sample:
          "Both pictures show people travelling, but in very different ways. In the first picture, passengers are on a train, whereas in the second a man is driving his car in heavy traffic. Unlike the driver, the train passengers can relax, read or even work, so the journey is more productive. On the other hand, the driver has more freedom because he can leave whenever he wants and go directly to his destination. However, he looks stressed, and traffic jams waste a lot of time. Personally, I would choose the train for a long journey. It is cheaper, better for the environment and much less tiring. That said, for a short trip with luggage, I would probably take the car.",
        vocab: ["whereas", "unlike", "on the other hand", "traffic jam", "destination", "productive", "stressful", "better for the environment"]
      },
      {
        id: "s3-2",
        title: "Studying at home or in a library",
        emojiA: "🏠",
        emojiB: "📚",
        sceneA:
          "A young man is studying at a desk in his bedroom. He is wearing a hoodie, and there's a mug of tea next to his laptop. His bed is unmade, and a cat is sleeping on a pile of books behind him. His phone is on the desk, and the room is untidy.",
        sceneB:
          "In a large university library, rows of students sit at long tables under bright lights. Some are reading thick books, others are typing quietly. Tall bookshelves fill the background, and a sign on the wall says 'Silence, please'. Everyone seems concentrated, and there are no phones in sight.",
        qs: [
          "What are the differences between studying at home and in a library?",
          "Where do you study best, and why?"
        ],
        sample:
          "Both pictures show students studying, but the places are quite different. In the first picture, a young man is working in his bedroom, whereas in the second, lots of students are studying together in a library. Unlike the library, which is silent and tidy, the bedroom looks relaxed but a bit messy, and there are more distractions, such as the phone and the cat. On the other hand, studying at home is more comfortable, and you don't have to travel. Personally, I would choose the library when I have an important exam, because it helps me stay focused. However, for light reading, I prefer my own room.",
        vocab: ["distraction", "stay focused", "silent", "untidy", "comfortable", "exam", "whereas", "unlike"]
      },
      {
        id: "s3-3",
        title: "Eating out or cooking at home",
        emojiA: "🍽️",
        emojiB: "🍳",
        sceneA:
          "A couple is having dinner in a stylish restaurant. The table has a white tablecloth, candles and two glasses of wine. A waiter is bringing a main course to them, and other diners are chatting at the tables around them. The couple look smart and are smiling at each other.",
        sceneB:
          "A young woman is cooking in a small, bright kitchen. She's chopping vegetables on a wooden board while a pan of pasta sauce is bubbling on the hob. Her sleeves are rolled up, and a recipe book lies open on the counter. There are bowls, spices and fresh herbs everywhere.",
        qs: [
          "Why do some people prefer eating out to cooking at home?",
          "Which of these would you choose for a special occasion?"
        ],
        sample:
          "Both pictures are about having a meal, but the situations are very different. In the first picture, a couple is eating out in an elegant restaurant, whereas in the second, a woman is preparing a meal herself in her kitchen. Eating out is more relaxing because someone else does the cooking and washing-up. Unlike cooking at home, it's also more expensive. On the other hand, cooking at home is healthier, and you can choose exactly what goes into your food. For a special occasion, such as an anniversary, I would definitely choose the restaurant. However, on a normal weekday I would rather cook at home, because it's cheaper and more satisfying.",
        vocab: ["stylish", "main course", "washing-up", "ingredients", "special occasion", "healthier", "cheaper", "whereas"]
      },
      {
        id: "s3-4",
        title: "Shopping online or in a shop",
        emojiA: "🛍️",
        emojiB: "💻",
        sceneA:
          "A woman is sitting on her sofa in her pyjamas, holding a laptop on her knees and a credit card in one hand. On the screen there are rows of shoes with discount signs. A cup of tea stands on the coffee table, and a delivery box is already waiting by the door.",
        sceneB:
          "Two friends are walking through a busy shopping centre on Saturday afternoon, carrying several shopping bags. They have stopped in front of a shop window to look at some jackets. Around them, crowds of people are queuing at the tills and shop assistants are folding clothes.",
        qs: [
          "What are the pros and cons of shopping online compared with going to the shops?",
          "Which do you prefer, and why?"
        ],
        sample:
          "Both pictures show people shopping, but in completely different ways. In the first picture, a woman is buying shoes online from her sofa, whereas in the second, two friends are walking around a busy shopping centre. The main advantage of shopping online is that it's quick and comfortable, and you can compare prices easily. Unlike in a shop, however, you can't try anything on. On the other hand, going to the shops is more sociable and you can take your purchases home immediately. Personally, I prefer a mixture. I usually buy basic things online, but for clothes I like going to the shops with a friend, because it's more fun.",
        vocab: ["discount", "compare prices", "delivery", "queue", "try on", "sociable", "purchase", "convenient"]
      },
      {
        id: "s3-5",
        title: "Exercising in a gym or outdoors",
        emojiA: "🏋️",
        emojiB: "🏃",
        sceneA:
          "People are exercising in a modern gym with mirrors and bright lights. A man is lifting weights, a woman is running on a treadmill, and a trainer is helping a beginner with a machine. Loud music is playing, and a clock on the wall shows seven in the evening.",
        sceneB:
          "A woman is jogging along a path beside a river early in the morning. The sun is rising, and there is mist over the water. She is wearing running shoes and headphones, and a dog is running beside her. Trees and a few other joggers can be seen in the background.",
        qs: [
          "What are the benefits of exercising in a gym compared with exercising outdoors?",
          "Which would you choose, and why?"
        ],
        sample:
          "Both pictures show people exercising, but the settings are very different. In the first picture, people are working out in a modern gym, whereas in the second, a woman is jogging beside a river at sunrise. The gym has the advantage that you can exercise whatever the weather, and there are trainers to help you. Unlike the gym, running outdoors is free and the fresh air is very refreshing. On the other hand, it's not much fun in the rain. Personally, I would choose running outdoors, because I find the gym a bit boring and crowded. However, in winter, I might use the gym instead.",
        vocab: ["work out", "treadmill", "lift weights", "trainer", "jog", "refreshing", "membership", "whatever the weather"]
      }
    ],

    /* ===================== PART 4 – Discussion ===================== */
    p4: [
      {
        id: "s4-1",
        topic: "Technology at work",
        qs: [
          "How has technology changed the way people work in the last ten years?",
          "Do you think technology makes employees more productive, or does it distract them?",
          "Will robots and artificial intelligence replace human workers in the future?"
        ],
        sample: [
          "Well, I think technology has completely changed the way we work. Ten years ago, we sent a lot of paper documents, whereas now almost everything is done by email or in the cloud. As a result, it's much faster to share information, even with colleagues in other countries.",
          "It's a bit of both, really. On the one hand, tools like spreadsheets save hours of work. On the other hand, constant notifications can be very distracting. Personally, I find I'm most productive when I turn off my phone for an hour and focus on one task.",
          "I don't think robots will replace everyone, but they'll certainly take over repetitive jobs, such as data entry or factory work. What I mean is that humans will still be needed for creative tasks and for jobs that require empathy, like teaching or nursing. So we'll need to retrain."
        ]
      },
      {
        id: "s4-2",
        topic: "Public transport and cars",
        qs: [
          "Why do many people prefer to drive rather than use public transport?",
          "What could governments do to encourage people to use buses and trains?",
          "Do you think cars will disappear from city centres one day?"
        ],
        sample: [
          "I think the main reason is convenience. A car takes you from door to door, and you don't have to wait in the rain or share a crowded bus. In addition, in many areas the public transport is simply unreliable, so people have no real alternative.",
          "Governments could start by making tickets cheaper and services more frequent. Actually, if a bus arrives every five minutes and costs very little, many drivers would think twice. Building more cycle lanes and park-and-ride car parks on the edge of town would also help.",
          "I'm not sure they'll disappear completely, but I do think they'll become much less common. Many cities are already introducing low-emission zones and car-free days. In the future, I imagine we'll mostly use shared electric vehicles, trams and bikes in the centre, while cars stay on the outskirts."
        ]
      },
      {
        id: "s4-3",
        topic: "Online learning",
        qs: [
          "What are the main advantages of studying online?",
          "Do you think online courses can replace classroom teaching completely?",
          "What skills do students need to learn successfully on their own?"
        ],
        sample: [
          "The biggest advantage is flexibility. You can study at any time and from anywhere, which is perfect if you work full time. It's also usually cheaper than a classroom course, and you can repeat the lessons as many times as you need.",
          "I don't think so. Although online courses are convenient, you miss the face-to-face contact with teachers and classmates. When you're learning a language, for example, speaking practice with real people is essential. So I think a combination of online and classroom learning works best.",
          "First of all, students need self-discipline, because nobody is checking whether they have logged in. They also need good time-management skills and the ability to look for help when they get stuck. Finally, basic digital skills are important, so they don't waste time on technical problems."
        ]
      },
      {
        id: "s4-4",
        topic: "Working from home",
        qs: [
          "What are the benefits of working from home for employees and companies?",
          "What problems can remote workers face?",
          "Would you prefer to work from home full time? Why or why not?"
        ],
        sample: [
          "For employees, the biggest benefit is saving time and money on commuting. Many people also say they can concentrate better at home. For companies, there are advantages as well, such as lower office costs and the chance to hire talented people who live far away.",
          "Well, the main problem is loneliness. Without colleagues around, some people feel isolated, and it can be harder to ask for help quickly. Another difficulty is separating work from private life. Actually, a lot of remote workers end up working longer hours than they did in the office.",
          "Not full time, to be honest. I would like to work from home two or three days a week because it gives me peace and quiet. However, I'd still want to meet my team in person regularly, because I think creative ideas often come from casual conversations."
        ]
      },
      {
        id: "s4-5",
        topic: "Social media",
        qs: [
          "How has social media changed the way people communicate?",
          "Is it a good idea to limit children's use of social media?",
          "Do you think people share too much personal information online?"
        ],
        sample: [
          "Social media has made communication faster and easier. We can message someone on the other side of the world in seconds. On the downside, though, people sometimes prefer typing to talking, so face-to-face conversations are becoming less common, especially among young people.",
          "Yes, I think some limits would be sensible. Children can see inappropriate content or compare themselves with unrealistic images. Perhaps parents could set a time limit and talk to their children about online safety, rather than banning social media completely, which would be difficult anyway.",
          "Honestly, yes. Many people post their address, holiday plans and even photos of their children without thinking about who might see them. That can be dangerous. I always check my privacy settings and I think twice before posting anything personal."
        ]
      },
      {
        id: "s4-6",
        topic: "Health and sport",
        qs: [
          "Why do some people find it difficult to stay fit?",
          "Should schools and workplaces do more to encourage exercise?",
          "Is it better to exercise alone or with other people?"
        ],
        sample: [
          "The main reason is lack of time. After a long day at work, many people feel exhausted and prefer to relax on the sofa. Another reason is motivation. It's easy to start a new routine in January and give up by February.",
          "Definitely. Schools could offer more sport lessons and a wider choice of activities, so that every child finds something they enjoy. Likewise, employers could offer gym discounts or organise lunchtime walks. Healthy employees take fewer sick days, so it benefits the company too.",
          "I think it depends on your personality. Exercising with others is more motivating, because you don't want to let your friends down. On the other hand, training alone is more flexible and lets you work at your own pace. Personally, I like running alone but playing team sports at weekends."
        ]
      }
    ],

    /* ===================== PART 5 – Long turn (PREP) ===================== */
    p5: [
      {
        id: "s5-1",
        topic: "Learning new skills as an adult",
        qs: [
          "Why do adults decide to learn new skills?",
          "What difficulties do adult learners face?",
          "Describe a skill you would like to learn and explain why."
        ],
        points: [
          "Why adults learn new skills (career, personal interest)",
          "Challenges: time, money, confidence",
          "How to overcome these problems",
          "A skill you would like to learn"
        ],
        sample:
          "Well, I'd like to talk about learning new skills as an adult, and my main point is that it's one of the best investments you can make, whatever your age.\n\nThe first reason is that skills open doors at work. Jobs change so quickly that the qualifications you got at university may be out of date after ten years. For example, a colleague of mine, who works in accounting, started an evening course in data analysis last year. Within six months she was producing reports that used to be sent to another department, and her manager noticed.\n\nAnother reason is personal satisfaction. When you're an adult, you often feel that you've stopped growing, so mastering something new, like cooking, photography or a foreign language, makes you feel more confident.\n\nOf course, adult learners face real challenges. The biggest one is time, because most of us have full-time jobs and family duties. Money and fear of failure can also be problems. What I mean is that many adults worry they'll look silly in front of younger classmates. However, these obstacles are manageable. You can study for twenty minutes a day, use free online lessons, and join a group of people at a similar level.\n\nPersonally, I'd love to learn to play the guitar, because music helps me relax after a long day.\n\nSo, to sum up, learning new skills as an adult improves your career, your confidence and your happiness, and it's never too late to start."
      },
      {
        id: "s5-2",
        topic: "Keeping fit and healthy",
        qs: [
          "Why is it important to keep fit?",
          "What stops people from exercising regularly?",
          "What do you do to stay healthy?"
        ],
        points: [
          "Physical and mental benefits of exercise",
          "Obstacles: lack of time, motivation, money",
          "Simple ways to build exercise into your day",
          "Your own routine"
        ],
        sample:
          "Well, I'd like to talk about why keeping fit is so important, and my point is that regular exercise improves almost every part of your life.\n\nThe main reason is health. People who exercise regularly have a lower risk of heart disease, and they usually sleep better too. But it isn't only about the body. Exercise also reduces stress and improves your mood. For example, when I have had a difficult day at work, a thirty-minute walk is often enough to clear my head, and I come home feeling much calmer.\n\nOf course, many people find it hard to stay active. The biggest obstacle is time, because long working hours leave little energy for the gym. Another problem is motivation. People start with enthusiasm, but after a few weeks of bad weather they give up. What I mean is that you don't need expensive equipment or a membership to be fit. You can get off the bus a stop early, take the stairs instead of the lift, or do ten minutes of stretching at home.\n\nPersonally, I try to be active every day. I cycle to work three times a week and play badminton with colleagues on Fridays. Because it's a social activity, I never skip it.\n\nSo, to sum up, keeping fit protects your health, boosts your mood and doesn't have to be difficult. The key is to find small, enjoyable habits that you can keep up for years."
      },
      {
        id: "s5-3",
        topic: "Tourism: good or bad for cities?",
        qs: [
          "How does tourism benefit a city?",
          "What problems can too many tourists cause?",
          "How can cities manage tourism better?"
        ],
        points: [
          "Economic benefits: jobs and income",
          "Problems: crowds, high prices, damage",
          "Solutions: limits, taxes, quiet seasons",
          "Your opinion"
        ],
        sample:
          "In my opinion, tourism is generally good for cities, but only if it is managed carefully. That's the main point I'd like to make.\n\nFirstly, tourism brings money and jobs. Hotels, restaurants, taxi drivers and souvenir sellers all depend on visitors. In many places, tourism is the biggest employer. For example, in a small coastal town that I visited last year, almost every family earned part of its income from tourists, and the streets were full of life. Tourism also encourages cities to protect their history, because old buildings and museums attract visitors.\n\nHowever, there are real problems when too many people arrive at once. Local residents often complain about crowded streets, noise and rising prices, because rents go up when apartments are turned into holiday flats. In addition, large crowds can damage historic sites and increase pollution. What I mean is that a city can become a place where nobody wants to live, only to visit.\n\nFortunately, there are solutions. Cities can limit the number of daily visitors to popular sites, charge a small tourist tax and promote less famous areas, so that crowds are spread out. Encouraging people to visit in the quiet season would also help.\n\nTo sum up, tourism can bring great benefits, but authorities must protect residents and heritage at the same time. If the balance is right, everybody wins, including the visitors themselves."
      },
      {
        id: "s5-4",
        topic: "Working in a team or alone",
        qs: [
          "What are the benefits of working in a team?",
          "When is it better to work alone?",
          "What makes a good team member?"
        ],
        points: [
          "Benefits of teamwork: ideas, support, speed",
          "Advantages of working alone: focus, control",
          "Qualities of a good team member",
          "Your own preference"
        ],
        sample:
          "Well, I'd like to argue that working in a team is usually better than working alone, although both have their place.\n\nThe first reason is that a team brings together different skills and ideas. When people with different backgrounds discuss a problem, they often find solutions that one person would never think of. For example, at my last job we had to launch a new product in a month. The designer, the salesperson and I each had a different view, and by combining them we finished two days early.\n\nAnother benefit is support. When you are stuck or stressed, a colleague can help or simply encourage you, which makes work much more enjoyable.\n\nThat said, working alone is better for tasks that need deep concentration, such as writing a report or analysing data. Meetings and constant questions can be distracting, and in a group, some people do less than their share. What I mean is that you need to choose the method that suits the task.\n\nAs for the qualities of a good team member, I think the most important are reliability, good communication and the ability to listen to others.\n\nSo, to sum up, teamwork gives you creativity, speed and support, but it works best when each person takes responsibility. For tasks that demand silence and focus, I would happily work on my own."
      },
      {
        id: "s5-5",
        topic: "Studying or living abroad",
        qs: [
          "Why do people choose to study or live abroad?",
          "What difficulties might they face?",
          "Would you like to live in another country? Why or why not?"
        ],
        points: [
          "Benefits: language, career, independence",
          "Difficulties: homesickness, culture shock, cost",
          "How to prepare",
          "Your own wish"
        ],
        sample:
          "I strongly believe that spending some time abroad is a valuable experience, and I'd like to explain why.\n\nFirst of all, living in another country is the fastest way to improve a language. When you have to order food, rent a flat or make friends in English every day, you learn much more than in any classroom. It also looks impressive on a CV, because employers like candidates who are independent and adaptable. For example, a cousin of mine studied in Ireland for a year, and when she came back she got a job in an international company almost immediately.\n\nOf course, it isn't always easy. Many people feel homesick, especially in the first months, and the cost of living can be high. Culture shock is also common. What I mean is that even simple things, such as how people greet each other, can feel strange. However, these difficulties can be reduced. You can learn about the country in advance, save money before you leave and join student groups where you can meet people quickly.\n\nPersonally, I would love to live abroad for a couple of years. I'd like to see how people live in another culture and, at the same time, improve my English.\n\nSo, to sum up, studying or living abroad develops your language, your career and your character, and the challenges are worth it if you prepare properly."
      },
      {
        id: "s5-6",
        topic: "Children and technology",
        qs: [
          "How do children use technology today?",
          "What are the advantages and disadvantages?",
          "What advice would you give to parents?"
        ],
        points: [
          "How children use devices (games, videos, school)",
          "Advantages: learning, creativity",
          "Disadvantages: sleep, attention, health",
          "Advice for parents"
        ],
        sample:
          "My main point is that technology can be very good for children, as long as adults set sensible limits.\n\nFirst of all, today's children are growing up with phones and tablets, and they can learn from them in a way that wasn't possible before. They can watch science videos, practise languages with apps and even learn to code. Many schools also use tablets for homework, so devices are now part of normal education. For example, my nephew, who is nine, learnt the names of all the planets from a free app, and he now corrects his teachers!\n\nHowever, too much screen time causes problems. Children who spend hours online often sleep badly, find it harder to concentrate and do less exercise. Some are also exposed to content that is not suitable for their age. What I mean is that a tablet can be a great teacher, but it can also be a very distracting toy.\n\nSo what should parents do? In my opinion, they should set clear rules, such as no devices at meals or in the bedroom, and they should choose educational content together with their children. It is also important to encourage other activities, such as sport, reading and playing outside.\n\nTo sum up, technology is neither good nor bad in itself. If children use it in moderation and under supervision, it can be a powerful tool for learning, creativity and fun."
      }
    ]
  };
})();
