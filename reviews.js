const REVIEWS = [
  {
    "title": "Mulholland Drive",
    "slug": "mulholland-drive",
    "rating": 7.0,
    "date": "2026-03-01",
    "year": 2026,
    "review": "Not flawless, but deeply watchable. The pacing is steadier than I expected. I liked how the film leaves a little space for the audience.",
    "runtime": 102,
    "tags": [
      "Action",
      "Sci-Fi"
    ]
  },
  {
    "title": "Lost in Translation",
    "slug": "lost-in-translation",
    "rating": 9.5,
    "date": "2026-02-13",
    "year": 2026,
    "review": "A very strong watch. The emotional beats feel earned rather than forced. It stays coherent even when it becomes messy on purpose.",
    "runtime": 131,
    "tags": [
      "Mystery",
      "Romance"
    ]
  },
  {
    "title": "The Departed",
    "slug": "the-departed",
    "rating": 8.0,
    "date": "2026-01-28",
    "year": 2026,
    "review": "A melancholic film where the direction keeps everything elegantly controlled. The central idea is clear without becoming simplistic.",
    "runtime": 102,
    "tags": [
      "Mystery",
      "Crime"
    ]
  },
  {
    "title": "The Revenant",
    "slug": "the-revenant",
    "rating": 8.5,
    "date": "2026-01-13",
    "year": 2026,
    "review": "A funny film where the direction keeps everything elegantly controlled. The movie feels confident without showing off.",
    "runtime": 109,
    "tags": [
      "Comedy",
      "Thriller"
    ]
  },
  {
    "title": "Spotlight",
    "slug": "spotlight",
    "rating": 6.5,
    "date": "2025-12-28",
    "year": 2025,
    "review": "Not flawless, but deeply watchable. It is far more intimate than its premise suggests. The movie feels confident without showing off.",
    "runtime": 117,
    "tags": [
      "Arthouse",
      "Romance"
    ]
  },
  {
    "title": "Birdman",
    "slug": "birdman",
    "rating": 7.5,
    "date": "2025-12-12",
    "year": 2025,
    "review": "A very strong watch. Its performances do most of the heavy lifting. It never loses sight of the characters beneath the concept.",
    "runtime": 138,
    "tags": [
      "Crime",
      "Sci-Fi"
    ]
  },
  {
    "title": "Roma",
    "slug": "roma",
    "rating": 6.5,
    "date": "2025-11-26",
    "year": 2025,
    "review": "I admired how it is far more intimate than its premise suggests. I liked how the film leaves a little space for the audience.",
    "runtime": 102,
    "tags": [
      "Crime",
      "Classic"
    ]
  },
  {
    "title": "Capernaum",
    "slug": "capernaum",
    "rating": 9.0,
    "date": "2025-11-11",
    "year": 2025,
    "review": "A very strong watch. The emotional beats feel earned rather than forced. I liked how the film leaves a little space for the audience.",
    "runtime": 152,
    "tags": [
      "Mystery",
      "Sci-Fi"
    ]
  },
  {
    "title": "The Lives of Others",
    "slug": "the-lives-of-others",
    "rating": 9.5,
    "date": "2025-10-26",
    "year": 2025,
    "review": "I admired how the writing quietly sneaks up on you. It is the kind of movie that improves once you sit with it.",
    "runtime": 95,
    "tags": [
      "Action",
      "Comedy"
    ]
  },
  {
    "title": "Paris, Texas",
    "slug": "paris-texas",
    "rating": 6.5,
    "date": "2025-10-10",
    "year": 2025,
    "review": "Not flawless, but deeply watchable. Every scene feels deliberately shaped. It never loses sight of the characters beneath the concept.",
    "runtime": 102,
    "tags": [
      "Arthouse",
      "Romance"
    ]
  },
  {
    "title": "In the Mood for Love",
    "slug": "in-the-mood-for-love",
    "rating": 8.0,
    "date": "2025-09-24",
    "year": 2025,
    "review": "A patient film where it is far more intimate than its premise suggests. The movie feels confident without showing off.",
    "runtime": 117,
    "tags": [
      "Sci-Fi",
      "Crime"
    ]
  },
  {
    "title": "Yi Yi",
    "slug": "yi-yi",
    "rating": 7.0,
    "date": "2025-09-08",
    "year": 2025,
    "review": "A very strong watch. The writing quietly sneaks up on you. I would happily revisit it for the craft alone.",
    "runtime": 124,
    "tags": [
      "Sci-Fi",
      "Drama"
    ]
  },
  {
    "title": "Chungking Express",
    "slug": "chungking-express",
    "rating": 6.5,
    "date": "2025-08-24",
    "year": 2025,
    "review": "Not flawless, but deeply watchable. It is far more intimate than its premise suggests. It stays coherent even when it becomes messy on purpose.",
    "runtime": 152,
    "tags": [
      "Romance",
      "Classic"
    ]
  },
  {
    "title": "Amélie",
    "slug": "am-lie",
    "rating": 8.0,
    "date": "2025-08-08",
    "year": 2025,
    "review": "This one is sharp in the best way: focused, clear, and emotionally direct. I liked how the film leaves a little space for the audience.",
    "runtime": 145,
    "tags": [
      "Sci-Fi",
      "Action"
    ]
  },
  {
    "title": "The Green Knight",
    "slug": "the-green-knight",
    "rating": 8.0,
    "date": "2025-07-23",
    "year": 2025,
    "review": "A intense film where it balances style and substance unusually well. I would happily revisit it for the craft alone.",
    "runtime": 152,
    "tags": [
      "Sci-Fi",
      "Arthouse"
    ]
  },
  {
    "title": "First Reformed",
    "slug": "first-reformed",
    "rating": 8.5,
    "date": "2025-07-07",
    "year": 2025,
    "review": "This one is precise in the best way: focused, clear, and emotionally direct. It looks beautiful without becoming empty.",
    "runtime": 124,
    "tags": [
      "Thriller",
      "Classic"
    ]
  },
  {
    "title": "The Favourite",
    "slug": "the-favourite",
    "rating": 9.5,
    "date": "2025-06-21",
    "year": 2025,
    "review": "Not flawless, but deeply watchable. The final act lands with surprising force. It stays coherent even when it becomes messy on purpose.",
    "runtime": 95,
    "tags": [
      "Sci-Fi",
      "Action"
    ]
  },
  {
    "title": "The Lobster",
    "slug": "the-lobster",
    "rating": 7.5,
    "date": "2025-06-06",
    "year": 2025,
    "review": "Not flawless, but deeply watchable. It is far more intimate than its premise suggests. The central idea is clear without becoming simplistic.",
    "runtime": 102,
    "tags": [
      "Mystery",
      "Comedy"
    ]
  },
  {
    "title": "Midsommar",
    "slug": "midsommar",
    "rating": 7.5,
    "date": "2025-05-21",
    "year": 2025,
    "review": "I admired how it trusts silence more than exposition. The movie feels confident without showing off.",
    "runtime": 145,
    "tags": [
      "Romance",
      "Classic"
    ]
  },
  {
    "title": "Hereditary",
    "slug": "hereditary",
    "rating": 8.0,
    "date": "2025-05-05",
    "year": 2025,
    "review": "This one is sharp in the best way: focused, clear, and emotionally direct. It never loses sight of the characters beneath the concept.",
    "runtime": 138,
    "tags": [
      "Thriller",
      "Arthouse"
    ]
  },
  {
    "title": "Nightcrawler",
    "slug": "nightcrawler",
    "rating": 9.5,
    "date": "2025-04-19",
    "year": 2025,
    "review": "I admired how the emotional beats feel earned rather than forced. The central idea is clear without becoming simplistic.",
    "runtime": 124,
    "tags": [
      "Sci-Fi",
      "Crime"
    ]
  },
  {
    "title": "Gone Girl",
    "slug": "gone-girl",
    "rating": 9.0,
    "date": "2025-04-04",
    "year": 2025,
    "review": "A very strong watch. The direction keeps everything elegantly controlled. It never loses sight of the characters beneath the concept.",
    "runtime": 109,
    "tags": [
      "Thriller",
      "Mystery"
    ]
  },
  {
    "title": "The Master",
    "slug": "the-master",
    "rating": 7.0,
    "date": "2025-03-19",
    "year": 2025,
    "review": "I admired how the writing quietly sneaks up on you. The soundtrack is used sparingly and effectively.",
    "runtime": 152,
    "tags": [
      "Comedy",
      "Mystery"
    ]
  },
  {
    "title": "Incendies",
    "slug": "incendies",
    "rating": 8.0,
    "date": "2025-03-03",
    "year": 2025,
    "review": "Not flawless, but deeply watchable. It trusts silence more than exposition. It is the kind of movie that improves once you sit with it.",
    "runtime": 117,
    "tags": [
      "Comedy",
      "Mystery"
    ]
  },
  {
    "title": "A Separation",
    "slug": "a-separation",
    "rating": 8.0,
    "date": "2025-02-15",
    "year": 2025,
    "review": "I admired how the pacing is steadier than I expected. The central idea is clear without becoming simplistic.",
    "runtime": 138,
    "tags": [
      "Romance",
      "Classic"
    ]
  },
  {
    "title": "The Tree of Life",
    "slug": "the-tree-of-life",
    "rating": 9.5,
    "date": "2025-01-30",
    "year": 2025,
    "review": "This one is intense in the best way: focused, clear, and emotionally direct. I would happily revisit it for the craft alone.",
    "runtime": 109,
    "tags": [
      "Comedy",
      "Arthouse"
    ]
  },
  {
    "title": "Black Swan",
    "slug": "black-swan",
    "rating": 6.5,
    "date": "2025-01-15",
    "year": 2025,
    "review": "I admired how the writing quietly sneaks up on you. It is the kind of movie that improves once you sit with it.",
    "runtime": 102,
    "tags": [
      "Drama",
      "Action"
    ]
  },
  {
    "title": "Blue Valentine",
    "slug": "blue-valentine",
    "rating": 7.0,
    "date": "2024-12-30",
    "year": 2024,
    "review": "A very strong watch. The emotional beats feel earned rather than forced. The smaller moments are what make it memorable.",
    "runtime": 124,
    "tags": [
      "Action",
      "Comedy"
    ]
  },
  {
    "title": "Frances Ha",
    "slug": "frances-ha",
    "rating": 8.0,
    "date": "2024-12-14",
    "year": 2024,
    "review": "A very strong watch. The emotional beats feel earned rather than forced. It never loses sight of the characters beneath the concept.",
    "runtime": 124,
    "tags": [
      "Mystery",
      "Comedy"
    ]
  },
  {
    "title": "Inside Llewyn Davis",
    "slug": "inside-llewyn-davis",
    "rating": 6.5,
    "date": "2024-11-28",
    "year": 2024,
    "review": "A very strong watch. The emotional beats feel earned rather than forced. I would happily revisit it for the craft alone.",
    "runtime": 152,
    "tags": [
      "Romance",
      "Sci-Fi"
    ]
  },
  {
    "title": "Carol",
    "slug": "carol",
    "rating": 9.0,
    "date": "2024-11-13",
    "year": 2024,
    "review": "A very strong watch. It balances style and substance unusually well. It never loses sight of the characters beneath the concept.",
    "runtime": 117,
    "tags": [
      "Drama",
      "Romance"
    ]
  },
  {
    "title": "Room",
    "slug": "room",
    "rating": 7.5,
    "date": "2024-10-28",
    "year": 2024,
    "review": "I admired how every scene feels deliberately shaped. It never loses sight of the characters beneath the concept.",
    "runtime": 95,
    "tags": [
      "Mystery",
      "Thriller"
    ]
  },
  {
    "title": "Manchester by the Sea",
    "slug": "manchester-by-the-sea",
    "rating": 9.5,
    "date": "2024-10-12",
    "year": 2024,
    "review": "I admired how its performances do most of the heavy lifting. The central idea is clear without becoming simplistic.",
    "runtime": 124,
    "tags": [
      "Crime",
      "Comedy"
    ]
  },
  {
    "title": "The Florida Project",
    "slug": "the-florida-project",
    "rating": 7.5,
    "date": "2024-09-26",
    "year": 2024,
    "review": "Not flawless, but deeply watchable. Its performances do most of the heavy lifting. I would happily revisit it for the craft alone.",
    "runtime": 117,
    "tags": [
      "Thriller",
      "Romance"
    ]
  },
  {
    "title": "Call Me by Your Name",
    "slug": "call-me-by-your-name",
    "rating": 6.5,
    "date": "2024-09-10",
    "year": 2024,
    "review": "This one is melancholic in the best way: focused, clear, and emotionally direct. It looks beautiful without becoming empty.",
    "runtime": 124,
    "tags": [
      "Crime",
      "Sci-Fi"
    ]
  },
  {
    "title": "Phantom Thread",
    "slug": "phantom-thread",
    "rating": 8.0,
    "date": "2024-08-26",
    "year": 2024,
    "review": "Not flawless, but deeply watchable. The writing quietly sneaks up on you. It stays coherent even when it becomes messy on purpose.",
    "runtime": 138,
    "tags": [
      "Comedy",
      "Action"
    ]
  },
  {
    "title": "Once Upon a Time in Hollywood",
    "slug": "once-upon-a-time-in-hollywood",
    "rating": 9.0,
    "date": "2024-08-10",
    "year": 2024,
    "review": "I admired how its performances do most of the heavy lifting. The smaller moments are what make it memorable.",
    "runtime": 138,
    "tags": [
      "Drama",
      "Action"
    ]
  },
  {
    "title": "Glass Onion",
    "slug": "glass-onion",
    "rating": 7.5,
    "date": "2024-07-25",
    "year": 2024,
    "review": "Not flawless, but deeply watchable. It balances style and substance unusually well. The central idea is clear without becoming simplistic.",
    "runtime": 131,
    "tags": [
      "Action",
      "Classic"
    ]
  },
  {
    "title": "Knives Out",
    "slug": "knives-out",
    "rating": 6.5,
    "date": "2024-07-09",
    "year": 2024,
    "review": "This one is tender in the best way: focused, clear, and emotionally direct. It never loses sight of the characters beneath the concept.",
    "runtime": 117,
    "tags": [
      "Comedy",
      "Drama"
    ]
  },
  {
    "title": "The Lighthouse",
    "slug": "the-lighthouse",
    "rating": 9.5,
    "date": "2024-06-24",
    "year": 2024,
    "review": "A sharp film where every scene feels deliberately shaped. The smaller moments are what make it memorable.",
    "runtime": 131,
    "tags": [
      "Drama",
      "Action"
    ]
  },
  {
    "title": "Uncut Gems",
    "slug": "uncut-gems",
    "rating": 7.0,
    "date": "2024-06-08",
    "year": 2024,
    "review": "Not flawless, but deeply watchable. The writing quietly sneaks up on you. It looks beautiful without becoming empty.",
    "runtime": 102,
    "tags": [
      "Action",
      "Sci-Fi"
    ]
  },
  {
    "title": "Promising Young Woman",
    "slug": "promising-young-woman",
    "rating": 9.5,
    "date": "2024-05-23",
    "year": 2024,
    "review": "I admired how it balances style and substance unusually well. I would happily revisit it for the craft alone.",
    "runtime": 131,
    "tags": [
      "Mystery",
      "Arthouse"
    ]
  },
  {
    "title": "Minari",
    "slug": "minari",
    "rating": 9.0,
    "date": "2024-05-07",
    "year": 2024,
    "review": "A gorgeous film where the pacing is steadier than I expected. I would happily revisit it for the craft alone.",
    "runtime": 102,
    "tags": [
      "Drama",
      "Crime"
    ]
  },
  {
    "title": "Nomadland",
    "slug": "nomadland",
    "rating": 7.0,
    "date": "2024-04-21",
    "year": 2024,
    "review": "Not flawless, but deeply watchable. The direction keeps everything elegantly controlled. It looks beautiful without becoming empty.",
    "runtime": 117,
    "tags": [
      "Comedy",
      "Crime"
    ]
  },
  {
    "title": "Another Round",
    "slug": "another-round",
    "rating": 9.0,
    "date": "2024-04-06",
    "year": 2024,
    "review": "A restless film where it is far more intimate than its premise suggests. It never loses sight of the characters beneath the concept.",
    "runtime": 152,
    "tags": [
      "Arthouse",
      "Mystery"
    ]
  },
  {
    "title": "Licorice Pizza",
    "slug": "licorice-pizza",
    "rating": 7.0,
    "date": "2024-03-21",
    "year": 2024,
    "review": "I admired how the pacing is steadier than I expected. I liked how the film leaves a little space for the audience.",
    "runtime": 138,
    "tags": [
      "Romance",
      "Crime"
    ]
  },
  {
    "title": "Top Gun: Maverick",
    "slug": "top-gun-maverick",
    "rating": 6.5,
    "date": "2024-03-05",
    "year": 2024,
    "review": "Not flawless, but deeply watchable. The pacing is steadier than I expected. The soundtrack is used sparingly and effectively.",
    "runtime": 95,
    "tags": [
      "Comedy",
      "Classic"
    ]
  },
  {
    "title": "The Batman",
    "slug": "the-batman",
    "rating": 7.0,
    "date": "2024-02-18",
    "year": 2024,
    "review": "Not flawless, but deeply watchable. It balances style and substance unusually well. The movie feels confident without showing off.",
    "runtime": 152,
    "tags": [
      "Action",
      "Romance"
    ]
  },
  {
    "title": "Oppenheimer",
    "slug": "oppenheimer",
    "rating": 7.5,
    "date": "2024-02-02",
    "year": 2024,
    "review": "A very strong watch. The final act lands with surprising force. The smaller moments are what make it memorable.",
    "runtime": 124,
    "tags": [
      "Thriller",
      "Classic"
    ]
  },
  {
    "title": "Barbie",
    "slug": "barbie",
    "rating": 6.5,
    "date": "2024-01-18",
    "year": 2024,
    "review": "Not flawless, but deeply watchable. It balances style and substance unusually well. The soundtrack is used sparingly and effectively.",
    "runtime": 152,
    "tags": [
      "Thriller",
      "Mystery"
    ]
  },
  {
    "title": "Killers of the Flower Moon",
    "slug": "killers-of-the-flower-moon",
    "rating": 7.5,
    "date": "2024-01-02",
    "year": 2024,
    "review": "This one is patient in the best way: focused, clear, and emotionally direct. The movie feels confident without showing off.",
    "runtime": 102,
    "tags": [
      "Drama",
      "Romance"
    ]
  },
  {
    "title": "All of Us Strangers",
    "slug": "all-of-us-strangers",
    "rating": 7.0,
    "date": "2023-12-17",
    "year": 2023,
    "review": "A very strong watch. It trusts silence more than exposition. The smaller moments are what make it memorable.",
    "runtime": 102,
    "tags": [
      "Mystery",
      "Comedy"
    ]
  },
  {
    "title": "The Zone of Interest",
    "slug": "the-zone-of-interest",
    "rating": 9.5,
    "date": "2023-12-01",
    "year": 2023,
    "review": "I admired how it is far more intimate than its premise suggests. It looks beautiful without becoming empty.",
    "runtime": 117,
    "tags": [
      "Comedy",
      "Action"
    ]
  },
  {
    "title": "Poor Things",
    "slug": "poor-things",
    "rating": 8.0,
    "date": "2023-11-16",
    "year": 2023,
    "review": "I admired how the final act lands with surprising force. The movie feels confident without showing off.",
    "runtime": 124,
    "tags": [
      "Classic",
      "Sci-Fi"
    ]
  },
  {
    "title": "Saltburn",
    "slug": "saltburn",
    "rating": 7.5,
    "date": "2023-10-31",
    "year": 2023,
    "review": "I admired how the emotional beats feel earned rather than forced. I liked how the film leaves a little space for the audience.",
    "runtime": 124,
    "tags": [
      "Action",
      "Classic"
    ]
  },
  {
    "title": "May December",
    "slug": "may-december",
    "rating": 8.5,
    "date": "2023-10-15",
    "year": 2023,
    "review": "I admired how the final act lands with surprising force. I liked how the film leaves a little space for the audience.",
    "runtime": 95,
    "tags": [
      "Thriller",
      "Classic"
    ]
  },
  {
    "title": "Civil War",
    "slug": "civil-war",
    "rating": 9.0,
    "date": "2023-09-29",
    "year": 2023,
    "review": "A tender film where it balances style and substance unusually well. The smaller moments are what make it memorable.",
    "runtime": 131,
    "tags": [
      "Sci-Fi",
      "Arthouse"
    ]
  },
  {
    "title": "Challengers",
    "slug": "challengers",
    "rating": 7.0,
    "date": "2023-09-13",
    "year": 2023,
    "review": "I admired how it trusts silence more than exposition. I liked how the film leaves a little space for the audience.",
    "runtime": 95,
    "tags": [
      "Sci-Fi",
      "Classic"
    ]
  },
  {
    "title": "Anatomy of a Fall",
    "slug": "anatomy-of-a-fall",
    "rating": 7.5,
    "date": "2023-08-29",
    "year": 2023,
    "review": "This one is gorgeous in the best way: focused, clear, and emotionally direct. It stays coherent even when it becomes messy on purpose.",
    "runtime": 117,
    "tags": [
      "Action",
      "Romance"
    ]
  },
  {
    "title": "The Holdovers",
    "slug": "the-holdovers",
    "rating": 9.0,
    "date": "2023-08-13",
    "year": 2023,
    "review": "Not flawless, but deeply watchable. It trusts silence more than exposition. The soundtrack is used sparingly and effectively.",
    "runtime": 138,
    "tags": [
      "Drama",
      "Action"
    ]
  },
  {
    "title": "Perfect Days",
    "slug": "perfect-days",
    "rating": 8.5,
    "date": "2023-07-28",
    "year": 2023,
    "review": "This one is melancholic in the best way: focused, clear, and emotionally direct. I would happily revisit it for the craft alone.",
    "runtime": 109,
    "tags": [
      "Crime",
      "Sci-Fi"
    ]
  },
  {
    "title": "Shoplifters",
    "slug": "shoplifters",
    "rating": 7.5,
    "date": "2023-07-12",
    "year": 2023,
    "review": "A very strong watch. The pacing is steadier than I expected. It never loses sight of the characters beneath the concept.",
    "runtime": 95,
    "tags": [
      "Drama",
      "Action"
    ]
  },
  {
    "title": "Decision to Leave",
    "slug": "decision-to-leave",
    "rating": 9.0,
    "date": "2023-06-27",
    "year": 2023,
    "review": "Not flawless, but deeply watchable. It is far more intimate than its premise suggests. The smaller moments are what make it memorable.",
    "runtime": 95,
    "tags": [
      "Classic",
      "Drama"
    ]
  },
  {
    "title": "Burning",
    "slug": "burning",
    "rating": 9.0,
    "date": "2023-06-11",
    "year": 2023,
    "review": "A very strong watch. It trusts silence more than exposition. It never loses sight of the characters beneath the concept.",
    "runtime": 152,
    "tags": [
      "Crime",
      "Thriller"
    ]
  },
  {
    "title": "The Handmaiden",
    "slug": "the-handmaiden",
    "rating": 9.0,
    "date": "2023-05-26",
    "year": 2023,
    "review": "Not flawless, but deeply watchable. The pacing is steadier than I expected. It looks beautiful without becoming empty.",
    "runtime": 145,
    "tags": [
      "Arthouse",
      "Comedy"
    ]
  },
  {
    "title": "Memories of Murder",
    "slug": "memories-of-murder",
    "rating": 6.5,
    "date": "2023-05-10",
    "year": 2023,
    "review": "I admired how it trusts silence more than exposition. I would happily revisit it for the craft alone.",
    "runtime": 95,
    "tags": [
      "Action",
      "Thriller"
    ]
  },
  {
    "title": "Oldboy",
    "slug": "oldboy",
    "rating": 9.5,
    "date": "2023-04-24",
    "year": 2023,
    "review": "I admired how it balances style and substance unusually well. It is the kind of movie that improves once you sit with it.",
    "runtime": 117,
    "tags": [
      "Classic",
      "Romance"
    ]
  },
  {
    "title": "Pan's Labyrinth",
    "slug": "pan-s-labyrinth",
    "rating": 7.0,
    "date": "2023-04-09",
    "year": 2023,
    "review": "This one is restrained in the best way: focused, clear, and emotionally direct. It stays coherent even when it becomes messy on purpose.",
    "runtime": 124,
    "tags": [
      "Romance",
      "Sci-Fi"
    ]
  },
  {
    "title": "Children of Men",
    "slug": "children-of-men",
    "rating": 9.5,
    "date": "2023-03-24",
    "year": 2023,
    "review": "I admired how it trusts silence more than exposition. The soundtrack is used sparingly and effectively.",
    "runtime": 102,
    "tags": [
      "Sci-Fi",
      "Classic"
    ]
  },
  {
    "title": "The Prestige",
    "slug": "the-prestige",
    "rating": 9.5,
    "date": "2023-03-08",
    "year": 2023,
    "review": "This one is patient in the best way: focused, clear, and emotionally direct. The smaller moments are what make it memorable.",
    "runtime": 145,
    "tags": [
      "Sci-Fi",
      "Romance"
    ]
  },
  {
    "title": "Memento",
    "slug": "memento",
    "rating": 9.5,
    "date": "2023-02-20",
    "year": 2023,
    "review": "I admired how it is far more intimate than its premise suggests. It is the kind of movie that improves once you sit with it.",
    "runtime": 117,
    "tags": [
      "Comedy",
      "Romance"
    ]
  },
  {
    "title": "Interstellar",
    "slug": "interstellar",
    "rating": 8.0,
    "date": "2023-02-05",
    "year": 2023,
    "review": "Not flawless, but deeply watchable. Its performances do most of the heavy lifting. It is the kind of movie that improves once you sit with it.",
    "runtime": 131,
    "tags": [
      "Drama",
      "Thriller"
    ]
  },
  {
    "title": "The Matrix",
    "slug": "the-matrix",
    "rating": 7.5,
    "date": "2023-01-20",
    "year": 2023,
    "review": "A very strong watch. The writing quietly sneaks up on you. The movie feels confident without showing off.",
    "runtime": 124,
    "tags": [
      "Drama",
      "Comedy"
    ]
  },
  {
    "title": "Fight Club",
    "slug": "fight-club",
    "rating": 7.0,
    "date": "2023-01-04",
    "year": 2023,
    "review": "Not flawless, but deeply watchable. The emotional beats feel earned rather than forced. It never loses sight of the characters beneath the concept.",
    "runtime": 95,
    "tags": [
      "Crime",
      "Romance"
    ]
  },
  {
    "title": "Se7en",
    "slug": "se7en",
    "rating": 8.0,
    "date": "2022-12-19",
    "year": 2022,
    "review": "Not flawless, but deeply watchable. The writing quietly sneaks up on you. The central idea is clear without becoming simplistic.",
    "runtime": 95,
    "tags": [
      "Thriller",
      "Drama"
    ]
  },
  {
    "title": "The Silence of the Lambs",
    "slug": "the-silence-of-the-lambs",
    "rating": 8.0,
    "date": "2022-12-03",
    "year": 2022,
    "review": "A very strong watch. It trusts silence more than exposition. I liked how the film leaves a little space for the audience.",
    "runtime": 145,
    "tags": [
      "Thriller",
      "Arthouse"
    ]
  },
  {
    "title": "Aliens",
    "slug": "aliens",
    "rating": 8.0,
    "date": "2022-11-18",
    "year": 2022,
    "review": "This one is gorgeous in the best way: focused, clear, and emotionally direct. It never loses sight of the characters beneath the concept.",
    "runtime": 138,
    "tags": [
      "Thriller",
      "Crime"
    ]
  },
  {
    "title": "Alien",
    "slug": "alien",
    "rating": 8.0,
    "date": "2022-11-02",
    "year": 2022,
    "review": "Not flawless, but deeply watchable. The direction keeps everything elegantly controlled. It looks beautiful without becoming empty.",
    "runtime": 131,
    "tags": [
      "Mystery",
      "Romance"
    ]
  },
  {
    "title": "Goodfellas",
    "slug": "goodfellas",
    "rating": 7.5,
    "date": "2022-10-17",
    "year": 2022,
    "review": "Not flawless, but deeply watchable. It is far more intimate than its premise suggests. The soundtrack is used sparingly and effectively.",
    "runtime": 95,
    "tags": [
      "Comedy",
      "Romance"
    ]
  },
  {
    "title": "The Irishman",
    "slug": "the-irishman",
    "rating": 8.5,
    "date": "2022-10-01",
    "year": 2022,
    "review": "I admired how the direction keeps everything elegantly controlled. It never loses sight of the characters beneath the concept.",
    "runtime": 145,
    "tags": [
      "Mystery",
      "Arthouse"
    ]
  },
  {
    "title": "Zodiac",
    "slug": "zodiac",
    "rating": 9.5,
    "date": "2022-09-15",
    "year": 2022,
    "review": "I admired how it is far more intimate than its premise suggests. The movie feels confident without showing off.",
    "runtime": 131,
    "tags": [
      "Comedy",
      "Classic"
    ]
  },
  {
    "title": "Heat",
    "slug": "heat",
    "rating": 7.5,
    "date": "2022-08-31",
    "year": 2022,
    "review": "This one is restless in the best way: focused, clear, and emotionally direct. I would happily revisit it for the craft alone.",
    "runtime": 124,
    "tags": [
      "Drama",
      "Crime"
    ]
  },
  {
    "title": "Tár",
    "slug": "t-r",
    "rating": 6.5,
    "date": "2022-08-15",
    "year": 2022,
    "review": "A very strong watch. It trusts silence more than exposition. The central idea is clear without becoming simplistic.",
    "runtime": 124,
    "tags": [
      "Sci-Fi",
      "Classic"
    ]
  },
  {
    "title": "Ex Machina",
    "slug": "ex-machina",
    "rating": 8.5,
    "date": "2022-07-30",
    "year": 2022,
    "review": "This one is gorgeous in the best way: focused, clear, and emotionally direct. It stays coherent even when it becomes messy on purpose.",
    "runtime": 109,
    "tags": [
      "Mystery",
      "Comedy"
    ]
  },
  {
    "title": "The Worst Person in the World",
    "slug": "the-worst-person-in-the-world",
    "rating": 8.5,
    "date": "2022-07-14",
    "year": 2022,
    "review": "This one is sharp in the best way: focused, clear, and emotionally direct. The soundtrack is used sparingly and effectively.",
    "runtime": 117,
    "tags": [
      "Crime",
      "Comedy"
    ]
  },
  {
    "title": "Before Midnight",
    "slug": "before-midnight",
    "rating": 7.0,
    "date": "2022-06-29",
    "year": 2022,
    "review": "This one is gorgeous in the best way: focused, clear, and emotionally direct. I liked how the film leaves a little space for the audience.",
    "runtime": 109,
    "tags": [
      "Comedy",
      "Sci-Fi"
    ]
  },
  {
    "title": "Before Sunset",
    "slug": "before-sunset",
    "rating": 7.0,
    "date": "2022-06-13",
    "year": 2022,
    "review": "Not flawless, but deeply watchable. The direction keeps everything elegantly controlled. It never loses sight of the characters beneath the concept.",
    "runtime": 109,
    "tags": [
      "Comedy",
      "Classic"
    ]
  },
  {
    "title": "Before Sunrise",
    "slug": "before-sunrise",
    "rating": 6.5,
    "date": "2022-05-28",
    "year": 2022,
    "review": "This one is gorgeous in the best way: focused, clear, and emotionally direct. The smaller moments are what make it memorable.",
    "runtime": 145,
    "tags": [
      "Drama",
      "Comedy"
    ]
  },
  {
    "title": "Eternal Sunshine of the Spotless Mind",
    "slug": "eternal-sunshine-of-the-spotless-mind",
    "rating": 9.5,
    "date": "2022-05-12",
    "year": 2022,
    "review": "Not flawless, but deeply watchable. The final act lands with surprising force. I would happily revisit it for the craft alone.",
    "runtime": 138,
    "tags": [
      "Action",
      "Romance"
    ]
  },
  {
    "title": "There Will Be Blood",
    "slug": "there-will-be-blood",
    "rating": 6.5,
    "date": "2022-04-26",
    "year": 2022,
    "review": "A melancholic film where every scene feels deliberately shaped. The soundtrack is used sparingly and effectively.",
    "runtime": 102,
    "tags": [
      "Crime",
      "Arthouse"
    ]
  },
  {
    "title": "No Country for Old Men",
    "slug": "no-country-for-old-men",
    "rating": 7.5,
    "date": "2022-04-11",
    "year": 2022,
    "review": "A restless film where the emotional beats feel earned rather than forced. It is the kind of movie that improves once you sit with it.",
    "runtime": 117,
    "tags": [
      "Romance",
      "Mystery"
    ]
  },
  {
    "title": "Blade Runner 2049",
    "slug": "blade-runner-2049",
    "rating": 8.5,
    "date": "2022-03-26",
    "year": 2022,
    "review": "Not flawless, but deeply watchable. Its performances do most of the heavy lifting. The movie feels confident without showing off.",
    "runtime": 145,
    "tags": [
      "Sci-Fi",
      "Arthouse"
    ]
  },
  {
    "title": "Prisoners",
    "slug": "prisoners",
    "rating": 8.5,
    "date": "2022-03-10",
    "year": 2022,
    "review": "A funny film where the writing quietly sneaks up on you. It is the kind of movie that improves once you sit with it.",
    "runtime": 145,
    "tags": [
      "Crime",
      "Sci-Fi"
    ]
  },
  {
    "title": "Little Women",
    "slug": "little-women",
    "rating": 7.0,
    "date": "2022-02-22",
    "year": 2022,
    "review": "This one is sharp in the best way: focused, clear, and emotionally direct. It is the kind of movie that improves once you sit with it.",
    "runtime": 145,
    "tags": [
      "Classic",
      "Mystery"
    ]
  },
  {
    "title": "The Farewell",
    "slug": "the-farewell",
    "rating": 7.0,
    "date": "2022-02-07",
    "year": 2022,
    "review": "Not flawless, but deeply watchable. Every scene feels deliberately shaped. It stays coherent even when it becomes messy on purpose.",
    "runtime": 145,
    "tags": [
      "Comedy",
      "Arthouse"
    ]
  },
  {
    "title": "Lady Bird",
    "slug": "lady-bird",
    "rating": 7.0,
    "date": "2022-01-22",
    "year": 2022,
    "review": "This one is sharp in the best way: focused, clear, and emotionally direct. It is the kind of movie that improves once you sit with it.",
    "runtime": 131,
    "tags": [
      "Comedy",
      "Crime"
    ]
  },
  {
    "title": "The Grand Budapest Hotel",
    "slug": "the-grand-budapest-hotel",
    "rating": 9.0,
    "date": "2022-01-06",
    "year": 2022,
    "review": "A very strong watch. It balances style and substance unusually well. It never loses sight of the characters beneath the concept.",
    "runtime": 109,
    "tags": [
      "Comedy",
      "Mystery"
    ]
  },
  {
    "title": "Everything Everywhere All at Once",
    "slug": "everything-everywhere-all-at-once",
    "rating": 9.0,
    "date": "2021-12-21",
    "year": 2021,
    "review": "This one is tender in the best way: focused, clear, and emotionally direct. It stays coherent even when it becomes messy on purpose.",
    "runtime": 95,
    "tags": [
      "Romance",
      "Comedy"
    ]
  },
  {
    "title": "Sound of Metal",
    "slug": "sound-of-metal",
    "rating": 8.5,
    "date": "2021-12-05",
    "year": 2021,
    "review": "Not flawless, but deeply watchable. It trusts silence more than exposition. I liked how the film leaves a little space for the audience.",
    "runtime": 138,
    "tags": [
      "Action",
      "Mystery"
    ]
  },
  {
    "title": "Drive My Car",
    "slug": "drive-my-car",
    "rating": 7.5,
    "date": "2021-11-20",
    "year": 2021,
    "review": "This one is patient in the best way: focused, clear, and emotionally direct. The smaller moments are what make it memorable.",
    "runtime": 109,
    "tags": [
      "Crime",
      "Comedy"
    ]
  },
  {
    "title": "The Banshees of Inisherin",
    "slug": "the-banshees-of-inisherin",
    "rating": 7.0,
    "date": "2021-11-04",
    "year": 2021,
    "review": "I admired how the pacing is steadier than I expected. It stays coherent even when it becomes messy on purpose.",
    "runtime": 109,
    "tags": [
      "Mystery",
      "Thriller"
    ]
  },
  {
    "title": "Aftersun",
    "slug": "aftersun",
    "rating": 6.5,
    "date": "2021-10-19",
    "year": 2021,
    "review": "This one is restrained in the best way: focused, clear, and emotionally direct. The soundtrack is used sparingly and effectively.",
    "runtime": 124,
    "tags": [
      "Romance",
      "Mystery"
    ]
  },
  {
    "title": "Dune: Part Two",
    "slug": "dune-part-two",
    "rating": 7.0,
    "date": "2021-10-03",
    "year": 2021,
    "review": "A precise film where it trusts silence more than exposition. The central idea is clear without becoming simplistic.",
    "runtime": 102,
    "tags": [
      "Sci-Fi",
      "Crime"
    ]
  },
  {
    "title": "Dune",
    "slug": "dune",
    "rating": 9.5,
    "date": "2021-09-18",
    "year": 2021,
    "review": "Not flawless, but deeply watchable. Every scene feels deliberately shaped. It stays coherent even when it becomes messy on purpose.",
    "runtime": 117,
    "tags": [
      "Classic",
      "Sci-Fi"
    ]
  },
  {
    "title": "Past Lives",
    "slug": "past-lives",
    "rating": 7.0,
    "date": "2021-09-02",
    "year": 2021,
    "review": "A precise film where the writing quietly sneaks up on you. It never loses sight of the characters beneath the concept.",
    "runtime": 109,
    "tags": [
      "Arthouse",
      "Crime"
    ]
  },
  {
    "title": "Portrait of a Lady on Fire",
    "slug": "portrait-of-a-lady-on-fire",
    "rating": 8.5,
    "date": "2021-08-17",
    "year": 2021,
    "review": "A restrained film where the final act lands with surprising force. The central idea is clear without becoming simplistic.",
    "runtime": 117,
    "tags": [
      "Action",
      "Drama"
    ]
  },
  {
    "title": "Get Out",
    "slug": "get-out",
    "rating": 8.0,
    "date": "2021-08-01",
    "year": 2021,
    "review": "Not flawless, but deeply watchable. The direction keeps everything elegantly controlled. It looks beautiful without becoming empty.",
    "runtime": 131,
    "tags": [
      "Comedy",
      "Thriller"
    ]
  },
  {
    "title": "Her",
    "slug": "her",
    "rating": 7.0,
    "date": "2021-07-16",
    "year": 2021,
    "review": "I admired how it is far more intimate than its premise suggests. I would happily revisit it for the craft alone.",
    "runtime": 95,
    "tags": [
      "Sci-Fi",
      "Romance"
    ]
  },
  {
    "title": "Mad Max: Fury Road",
    "slug": "mad-max-fury-road",
    "rating": 6.5,
    "date": "2021-07-01",
    "year": 2021,
    "review": "A tender film where it is far more intimate than its premise suggests. It is the kind of movie that improves once you sit with it.",
    "runtime": 131,
    "tags": [
      "Thriller",
      "Mystery"
    ]
  },
  {
    "title": "La La Land",
    "slug": "la-la-land",
    "rating": 8.5,
    "date": "2021-06-15",
    "year": 2021,
    "review": "A restrained film where it trusts silence more than exposition. I would happily revisit it for the craft alone.",
    "runtime": 152,
    "tags": [
      "Arthouse",
      "Thriller"
    ]
  },
  {
    "title": "The Social Network",
    "slug": "the-social-network",
    "rating": 6.5,
    "date": "2021-05-30",
    "year": 2021,
    "review": "A very strong watch. It is far more intimate than its premise suggests. The movie feels confident without showing off.",
    "runtime": 138,
    "tags": [
      "Comedy",
      "Arthouse"
    ]
  },
  {
    "title": "Arrival",
    "slug": "arrival",
    "rating": 9.0,
    "date": "2021-05-14",
    "year": 2021,
    "review": "I admired how the emotional beats feel earned rather than forced. It is the kind of movie that improves once you sit with it.",
    "runtime": 117,
    "tags": [
      "Action",
      "Mystery"
    ]
  },
  {
    "title": "Moonlight",
    "slug": "moonlight",
    "rating": 9.5,
    "date": "2021-04-28",
    "year": 2021,
    "review": "I admired how it is far more intimate than its premise suggests. It looks beautiful without becoming empty.",
    "runtime": 124,
    "tags": [
      "Action",
      "Romance"
    ]
  },
  {
    "title": "Whiplash",
    "slug": "whiplash",
    "rating": 9.0,
    "date": "2021-04-13",
    "year": 2021,
    "review": "I admired how the final act lands with surprising force. I would happily revisit it for the craft alone.",
    "runtime": 124,
    "tags": [
      "Thriller",
      "Mystery"
    ]
  },
  {
    "title": "Spirited Away",
    "slug": "spirited-away",
    "rating": 8.5,
    "date": "2021-03-28",
    "year": 2021,
    "review": "A very strong watch. The emotional beats feel earned rather than forced. The central idea is clear without becoming simplistic.",
    "runtime": 138,
    "tags": [
      "Thriller",
      "Comedy"
    ]
  },
  {
    "title": "Parasite",
    "slug": "parasite",
    "rating": 7.0,
    "date": "2021-03-12",
    "year": 2021,
    "review": "A very strong watch. Every scene feels deliberately shaped. The soundtrack is used sparingly and effectively.",
    "runtime": 138,
    "tags": [
      "Arthouse",
      "Thriller"
    ]
  },
  {
    "title": "The Dark Knight",
    "slug": "the-dark-knight",
    "rating": 6.5,
    "date": "2021-02-24",
    "year": 2021,
    "review": "I admired how it balances style and substance unusually well. The central idea is clear without becoming simplistic.",
    "runtime": 109,
    "tags": [
      "Comedy",
      "Classic"
    ]
  },
  {
    "title": "Inception",
    "slug": "inception",
    "rating": 9.0,
    "date": "2021-02-09",
    "year": 2021,
    "review": "This one is patient in the best way: focused, clear, and emotionally direct. I would happily revisit it for the craft alone.",
    "runtime": 152,
    "tags": [
      "Arthouse",
      "Action"
    ]
  },
  {
    "title": "Pulp Fiction",
    "slug": "pulp-fiction",
    "rating": 7.5,
    "date": "2021-01-24",
    "year": 2021,
    "review": "Not flawless, but deeply watchable. It trusts silence more than exposition. I would happily revisit it for the craft alone.",
    "runtime": 145,
    "tags": [
      "Arthouse",
      "Classic"
    ]
  },
  {
    "title": "The Godfather",
    "slug": "the-godfather",
    "rating": 9.0,
    "date": "2021-01-08",
    "year": 2021,
    "review": "A very strong watch. The writing quietly sneaks up on you. It looks beautiful without becoming empty.",
    "runtime": 95,
    "tags": [
      "Thriller",
      "Mystery"
    ]
  }
];