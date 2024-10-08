const moviesData = [
    {
        "id": 1,
        "title": "Iron Man",
        "release_date": "2008-05-02",
        "duration": 126,
        "cover_url": "https://res.cloudinary.com/augustomarcelo/image/upload/v1675206317/mcuapi/gallery/Movies/iron_man/posters/1.jpg",
        "trailer_url": "https://players.brightcove.net/5359769168001/BJemW31x6g_default/index.html?videoId=5786306590001",
        "phase": 1,
        "saga": "Infinity Saga",
        "chronology": 3,
        "post_credit_scenes": 1
    },
    {
        "id": 2,
        "title": "The Incredible Hulk",
        "release_date": "2008-06-13",
        "duration": 112,
        "cover_url": "https://res.cloudinary.com/augustomarcelo/image/upload/v1675206567/mcuapi/gallery/Movies/the_incredible_hulk/posters/1.jpg",
        "trailer_url": "https://players.brightcove.net/5359769168001/rkg9u15t7b_default/index.html?videoId=5786823800001",
        "phase": 1,
        "saga": "Infinity Saga",
        "chronology": 5,
        "post_credit_scenes": 1
    },
    {
        "id": 3,
        "title": "Iron Man 2",
        "release_date": "2010-05-07",
        "duration": 124,
        "cover_url": "https://res.cloudinary.com/augustomarcelo/image/upload/v1675206796/mcuapi/gallery/Movies/iron_man_2/posters/1.jpg",
        "trailer_url": "https://players.brightcove.net/5359769168001/BJemW31x6g_default/index.html?videoId=5786616628001",
        "phase": 1,
        "saga": "Infinity Saga",
        "chronology": 4,
        "post_credit_scenes": 1
    },
    {
        "id": 4,
        "title": "Thor",
        "release_date": "2011-05-06",
        "duration": 115,
        "cover_url": "https://res.cloudinary.com/augustomarcelo/image/upload/v1675206905/mcuapi/gallery/Movies/thor/posters/1.jpg",
        "trailer_url": "https://players.brightcove.net/5359769168001/rkg9u15t7b_default/index.html?videoId=5806335470001",
        "phase": 1,
        "saga": "Infinity Saga",
        "chronology": 6,
        "post_credit_scenes": 1
    },
    {
        "id": 5,
        "title": "Captain America: The First Avenger",
        "release_date": "2011-07-22",
        "duration": 124,
        "cover_url": "https://res.cloudinary.com/augustomarcelo/image/upload/v1675207074/mcuapi/gallery/Movies/captain_america_the_first_avenger/posters/1.jpg",
        "trailer_url": "https://players.brightcove.net/5359769168001/rkg9u15t7b_default/index.html?videoId=5806328337001",
        "phase": 1,
        "saga": "Infinity Saga",
        "chronology": 1,
        "post_credit_scenes": 1
    },
    {
        "id": 6,
        "title": "The Avengers",
        "release_date": "2012-05-04",
        "duration": 143,
        "cover_url": "https://res.cloudinary.com/augustomarcelo/image/upload/v1675207189/mcuapi/gallery/Movies/the_avengers/posters/1.jpg",
        "trailer_url": "https://players.brightcove.net/5359769168001/rkg9u15t7b_default/index.html?videoId=5806331374001",
        "phase": 1,
        "saga": "Infinity Saga",
        "chronology": 7,
        "post_credit_scenes": 2
    },
    {
        "id": 7,
        "title": "Iron Man 3",
        "release_date": "2013-05-03",
        "duration": 130,
        "cover_url": "https://res.cloudinary.com/augustomarcelo/image/upload/v1675207306/mcuapi/gallery/Movies/iron_man_3/posters/1.jpg",
        "trailer_url": "https://players.brightcove.net/5359769168001/rkg9u15t7b_default/index.html?videoId=5806307374001",
        "phase": 2,
        "saga": "Infinity Saga",
        "chronology": 8,
        "post_credit_scenes": 1
    },
    {
        "id": 8,
        "title": "Thor: The Dark World",
        "release_date": "2013-11-08",
        "duration": 112,
        "cover_url": "https://res.cloudinary.com/augustomarcelo/image/upload/v1675207480/mcuapi/gallery/Movies/thor_the_dark_world/posters/1.jpg",
        "trailer_url": "https://players.brightcove.net/5359769168001/rkg9u15t7b_default/index.html?videoId=5793459089001",
        "phase": 2,
        "saga": "Infinity Saga",
        "chronology": 9,
        "post_credit_scenes": 2
    },
    {
        "id": 9,
        "title": "Captain America: The Winter Soldier",
        "release_date": "2014-04-04",
        "duration": 136,
        "cover_url": "https://res.cloudinary.com/augustomarcelo/image/upload/v1675207589/mcuapi/gallery/Movies/captain_america_the_winter_soldier/posters/1.jpg",
        "trailer_url": "https://players.brightcove.net/5359769168001/rkg9u15t7b_default/index.html?videoId=5791035995001",
        "phase": 2,
        "saga": "Infinity Saga",
        "chronology": 10,
        "post_credit_scenes": 2
    },
    {
        "id": 10,
        "title": "Guardians of the Galaxy",
        "release_date": "2014-08-01",
        "duration": 121,
        "cover_url": "https://res.cloudinary.com/augustomarcelo/image/upload/v1675207727/mcuapi/gallery/Movies/guardians_of_the_galaxy/posters/1.jpg",
        "trailer_url": "https://players.brightcove.net/5359769168001/rkg9u15t7b_default/index.html?videoId=5791076711001",
        "phase": 2,
        "saga": "Infinity Saga",
        "chronology": 11,
        "post_credit_scenes": 2
    },
    {
        "id": 11,
        "title": "Avengers: Age of Ultron",
        "release_date": "2015-05-01",
        "duration": 141,
        "cover_url": "https://res.cloudinary.com/augustomarcelo/image/upload/v1675207859/mcuapi/gallery/Movies/avengers_age_of_ultron/posters/1.jpg",
        "trailer_url": "https://players.brightcove.net/5359769168001/rkg9u15t7b_default/index.html?videoId=5790937227001",
        "phase": 2,
        "saga": "Infinity Saga",
        "chronology": 13,
        "post_credit_scenes": 1
    },
    {
        "id": 12,
        "title": "Ant-Man",
        "release_date": "2015-07-17",
        "duration": 117,
        "cover_url": "https://res.cloudinary.com/augustomarcelo/image/upload/v1675207953/mcuapi/gallery/Movies/ant-man/posters/1.jpg",
        "trailer_url": "https://players.brightcove.net/5359769168001/rkg9u15t7b_default/index.html?videoId=5790932937001",
        "phase": 2,
        "saga": "Infinity Saga",
        "chronology": 14,
        "post_credit_scenes": 2
    },
    {
        "id": 13,
        "title": "Captain America: Civil War",
        "release_date": "2016-05-06",
        "duration": 147,
        "cover_url": "https://res.cloudinary.com/augustomarcelo/image/upload/v1675208047/mcuapi/gallery/Movies/captain_america_civil_war/posters/1.jpg",
        "trailer_url": "https://players.brightcove.net/5359769168001/rkg9u15t7b_default/index.html?videoId=5790932946001",
        "phase": 3,
        "saga": "Infinity Saga",
        "chronology": 15,
        "post_credit_scenes": 2
    },
    {
        "id": 14,
        "title": "Doctor Strange",
        "release_date": "2016-11-04",
        "duration": 115,
        "cover_url": "https://res.cloudinary.com/augustomarcelo/image/upload/v1675208132/mcuapi/gallery/Movies/doctor_strange/posters/1.jpg",
        "trailer_url": "https://players.brightcove.net/5359769168001/rkg9u15t7b_default/index.html?videoId=5790930123001",
        "phase": 3,
        "saga": "Infinity Saga",
        "chronology": 19,
        "post_credit_scenes": 2
    },
    {
        "id": 15,
        "title": "Guardians of the Galaxy Vol. 2",
        "release_date": "2017-05-05",
        "duration": 136,
        "cover_url": "https://res.cloudinary.com/augustomarcelo/image/upload/v1675208240/mcuapi/gallery/Movies/guardians_of_galaxy_vol_2/posters/1.jpg",
        "trailer_url": "https://players.brightcove.net/5359769168001/rkg9u15t7b_default/index.html?videoId=5790932955001",
        "phase": 3,
        "saga": "Infinity Saga",
        "chronology": 12,
        "post_credit_scenes": 5
    },
    {
        "id": 16,
        "title": "Spider-Man: Homecoming",
        "release_date": "2017-07-07",
        "duration": 133,
        "cover_url": "https://res.cloudinary.com/augustomarcelo/image/upload/v1675208337/mcuapi/gallery/Movies/spider-man_homecoming/posters/1.jpg",
        "trailer_url": "https://players.brightcove.net/5359769168001/rkg9u15t7b_default/index.html?videoId=5790932452001",
        "phase": 3,
        "saga": "Infinity Saga",
        "chronology": 17,
        "post_credit_scenes": 2
    },
    {
        "id": 17,
        "title": "Thor: Ragnarok",
        "release_date": "2017-11-03",
        "duration": 130,
        "cover_url": "https://res.cloudinary.com/augustomarcelo/image/upload/v1675211289/mcuapi/gallery/Movies/thor_ragnarok/posters/1.jpg",
        "trailer_url": "https://players.brightcove.net/5359769168001/rkg9u15t7b_default/index.html?videoId=5793457593001",
        "phase": 3,
        "saga": "Infinity Saga",
        "chronology": 20,
        "post_credit_scenes": 2
    },
    {
        "id": 18,
        "title": "Black Panther",
        "release_date": "2018-02-16",
        "duration": 134,
        "cover_url": "https://res.cloudinary.com/augustomarcelo/image/upload/v1675211435/mcuapi/gallery/Movies/black_panther/posters/1.jpg",
        "trailer_url": "https://players.brightcove.net/5359769168001/rkg9u15t7b_default/index.html?videoId=5738791807001",
        "phase": 3,
        "saga": "Infinity Saga",
        "chronology": 18,
        "post_credit_scenes": 2
    },
    {
        "id": 19,
        "title": "Avengers: Infinity War",
        "release_date": "2018-04-27",
        "duration": 149,
        "cover_url": "https://res.cloudinary.com/augustomarcelo/image/upload/v1675211514/mcuapi/gallery/Movies/avengers_infinity_war/posters/1.jpg",
        "trailer_url": "https://players.brightcove.net/5359769168001/rkg9u15t7b_default/index.html?videoId=5662084610001",
        "phase": 3,
        "saga": "Infinity Saga",
        "chronology": 22,
        "post_credit_scenes": 1
    },
    {
        "id": 20,
        "title": "Ant-Man and The Wasp",
        "release_date": "2018-07-06",
        "duration": 125,
        "cover_url": "https://res.cloudinary.com/augustomarcelo/image/upload/v1675211606/mcuapi/gallery/Movies/ant-man_and_the_wasp/posters/1.jpg",
        "trailer_url": "https://players.brightcove.net/5359769168001/rkg9u15t7b_default/index.html?videoId=5722251911001",
        "phase": 3,
        "saga": "Infinity Saga",
        "chronology": 21,
        "post_credit_scenes": 2
    },
    {
        "id": 21,
        "title": "Captain Marvel",
        "release_date": "2019-03-08",
        "duration": 125,
        "cover_url": "https://res.cloudinary.com/augustomarcelo/image/upload/v1675211712/mcuapi/gallery/Movies/captain_marvel/posters/1.jpg",
        "trailer_url": "https://youtu.be/Z1BCujX3pw8",
        "phase": 3,
        "saga": "Infinity Saga",
        "chronology": 2,
        "post_credit_scenes": 2
    },
    {
        "id": 22,
        "title": "Avengers: Endgame",
        "release_date": "2019-04-26",
        "duration": 182,
        "cover_url": "https://res.cloudinary.com/augustomarcelo/image/upload/v1675211808/mcuapi/gallery/Movies/avengers_endgame/posters/1.jpg",
        "trailer_url": "https://players.brightcove.net/5359769168001/rkg9u15t7b_default/index.html?videoId=6027157990001",
        "phase": 3,
        "saga": "Infinity Saga",
        "chronology": 23,
        "post_credit_scenes": 0
    },
    {
        "id": 23,
        "title": "Spider-Man: Far From Home",
        "release_date": "2019-07-02",
        "duration": 129,
        "cover_url": "https://res.cloudinary.com/augustomarcelo/image/upload/v1675211910/mcuapi/gallery/Movies/spider-man_far_from_home/posters/1.jpg",
        "trailer_url": "https://players.brightcove.net/5359769168001/rkg9u15t7b_default/index.html?videoId=6033358625001",
        "phase": 3,
        "saga": "Infinity Saga",
        "chronology": 24,
        "post_credit_scenes": 2
    },
    {
        "id": 24,
        "title": "Black Widow",
        "release_date": "2021-07-09",
        "duration": 135,
        "cover_url": "https://res.cloudinary.com/augustomarcelo/image/upload/v1675212009/mcuapi/gallery/Movies/black_widow/posters/1.jpg",
        "trailer_url": "https://youtu.be/RxAtuMu_ph4",
        "phase": 4,
        "saga": "Infinity Saga",
        "chronology": 16,
        "post_credit_scenes": 1
    },
    {
        "id": 25,
        "title": "Shang-Chi and The Legend of The Ten Rings",
        "release_date": "2021-09-03",
        "duration": 132,
        "cover_url": "https://res.cloudinary.com/augustomarcelo/image/upload/v1675212103/mcuapi/gallery/Movies/shang-chi_and_the_legends_of_the_ten_rings/posters/1.jpg",
        "trailer_url": "https://players.brightcove.net/5359769168001/BJemW31x6g_default/index.html?videoId=6249384204001",
        "phase": 4,
        "saga": "Multiverse Saga",
        "chronology": 25,
        "post_credit_scenes": 2
    },
    {
        "id": 26,
        "title": "Eternals",
        "release_date": "2021-11-05",
        "duration": 157,
        "cover_url": "https://res.cloudinary.com/augustomarcelo/image/upload/v1675212199/mcuapi/gallery/Movies/eternals/posters/1.jpg",
        "trailer_url": "https://youtu.be/x_me3xsvDgk",
        "phase": 4,
        "saga": "Multiverse Saga",
        "chronology": 26,
        "post_credit_scenes":

            2
    },
    {
        "id": 27,
        "title": "Spider-Man: No Way Home",
        "release_date": "2021-12-17",
        "duration": 148,
        "cover_url": "https://res.cloudinary.com/augustomarcelo/image/upload/v1675212281/mcuapi/gallery/Movies/spider-man_no_way_home/posters/1.jpg",
        "trailer_url": "https://youtu.be/ZYzbalQ6Lg8",
        "phase": 4,
        "saga": "Multiverse Saga",
        "chronology": 27,
        "post_credit_scenes": 2
    },
    {
        "id": 28,
        "title": "Doctor Strange in the Multiverse of Madness",
        "release_date": "2022-05-06",
        "duration": 126,
        "cover_url": "https://res.cloudinary.com/augustomarcelo/image/upload/v1675212381/mcuapi/gallery/Movies/doctor_strange_in_the_multiverse_of_madness/posters/2.jpg",
        "trailer_url": "https://youtu.be/aWzlQ2N6qqg",
        "phase": 4,
        "saga": "Multiverse Saga",
        "chronology": 28,
        "post_credit_scenes": 2
    },
    {
        "id": 29,
        "title": "Thor: Love and Thunder",
        "release_date": "2022-07-08",
        "duration": 119,
        "cover_url": "https://res.cloudinary.com/augustomarcelo/image/upload/v1653410371/mcuapi/gallery/Movies/thor_love_and_thunder/3.jpg",
        "trailer_url": "https://youtu.be/Go8nTmfrQd8",
        "phase": 4,
        "saga": "Multiverse Saga",
        "chronology": 29,
        "post_credit_scenes": 2
    },
    {
        "id": 30,
        "title": "Black Panther: Wakanda Forever",
        "release_date": "2022-11-11",
        "duration": 161,
        "cover_url": "https://res.cloudinary.com/augustomarcelo/image/upload/v1665238515/mcuapi/gallery/Movies/black_panther_wakanda_forever/posters/3.jpg",
        "trailer_url": "https://youtu.be/_Z3QKkl1WyM",
        "phase": 4,
        "saga": "Multiverse Saga",
        "chronology": 30,
        "post_credit_scenes": 1
    },
    {
        "id": 31,
        "title": "Ant-Man and The Wasp: Quantumania",
        "release_date": "2023-02-17",
        "duration": 124,
        "cover_url": "https://res.cloudinary.com/augustomarcelo/image/upload/v1666736814/mcuapi/gallery/Movies/ant-man_and_the_wasp_quantumania/posters/2.jpg",
        "trailer_url": "https://youtu.be/5WfTEZJnv_8",
        "phase": 5,
        "saga": "Multiverse Saga",
        "chronology": 31,
        "post_credit_scenes": 2
    },
    {
        "id": 32,
        "title": "Guardians of the Galaxy Vol. 3",
        "release_date": "2023-05-05",
        "duration": 149,
        "cover_url": "https://res.cloudinary.com/augustomarcelo/image/upload/v1676543203/mcuapi/gallery/Movies/guardians_of_the_galaxy_vol_3/posters/3.jpg",
        "trailer_url": "https://youtu.be/JqcncLPi9zw",
        "phase": 5,
        "saga": "Multiverse Saga",
        "chronology": 32,
        "post_credit_scenes": 2
    },
    {
        "id": 33,
        "title": "The Marvels",
        "release_date": "2023-11-10",
        "duration": 105,
        "cover_url": "https://res.cloudinary.com/augustomarcelo/image/upload/v1679777423/mcuapi/gallery/Movies/the_marvels/posters/3.jpg",
        "trailer_url": "https://youtu.be/wS_qbDztgVY",
        "phase": 5,
        "saga": "Multiverse Saga",
        "chronology": 33,
        "post_credit_scenes": 1
    },
    {
        "id": 37,
        "title": "Deadpool & Wolverine",
        "release_date": "2024-07-26",
        "duration": 137,
        "cover_url": "https://res.cloudinary.com/augustomarcelo/image/upload/v1723381548/mcuapi/gallery/Movies/deadpool_3/posters/3.jpg",
        "trailer_url": "https://youtu.be/Idh8n5XuYIA",
        "phase": 6,
        "saga": "Multiverse Saga",
        "chronology": 37,
        "post_credit_scenes": 1
    },
    {
        "id": 34,
        "title": "Captain America: Brave New Order",
        "release_date": "2025-02-14",
        "duration": 0,
        "cover_url": "https://res.cloudinary.com/augustomarcelo/image/upload/v1721063529/mcuapi/gallery/Movies/captain_america_brave_new_order/posters/2.jpg",
        "trailer_url": "https://youtu.be/O_A8HdCDaWM",
        "phase": 5,
        "saga": "Multiverse Saga",
        "chronology": 34,
        "post_credit_scenes": 0
    },
    {
        "id": 38,
        "title": "Fantastic Four",
        "release_date": "2025-07-25",
        "duration": 0,
        "cover_url": "https://res.cloudinary.com/augustomarcelo/image/upload/v1675213108/mcuapi/gallery/Movies/fantastic_four/posters/1.jpg",
        "trailer_url": null,
        "phase": 6,
        "saga": "Multiverse Saga",
        "chronology": 38,
        "post_credit_scenes": 0
    },
    {
        "id": 35,
        "title": "Thunderbolts",
        "release_date": "2025-07-25",
        "duration": 0,
        "cover_url": "https://res.cloudinary.com/augustomarcelo/image/upload/v1658747271/mcuapi/gallery/Movies/thunderbolts/posters/1.jpg",
        "trailer_url": null,
        "phase": 5,
        "saga": "Multiverse Saga",
        "chronology": 35,
        "post_credit_scenes": 0
    },
    {
        "id": 36,
        "title": "Blade",
        "release_date": "2025-11-07",
        "duration": 0,
        "cover_url": "https://res.cloudinary.com/augustomarcelo/image/upload/v1675212923/mcuapi/gallery/Movies/blade/1.jpg",
        "trailer_url": null,
        "phase": 5,
        "saga": "Multiverse Saga",
        "chronology": 36,
        "post_credit_scenes": 0
    },
    {
        "id": 39,
        "title": "Avengers: The Kang Dynasty",
        "release_date": "2026-05-01",
        "duration": 0,
        "cover_url": "https://res.cloudinary.com/augustomarcelo/image/upload/v1658747672/mcuapi/gallery/Movies/avengers_the_kang_dynasty/posters/1.jpg",
        "trailer_url": null,
        "phase": 6,
        "saga": "Multiverse Saga",
        "chronology": 39,
        "post_credit_scenes": 0
    },
    {
        "id": 40,
        "title": "Avengers: Secret Wars",
        "release_date": "2027-05-07",
        "duration": 0,
        "cover_url": "https://res.cloudinary.com/augustomarcelo/image/upload/v1658747837/mcuapi/gallery/Movies/avengers_secret_wars/posters/1.jpg",
        "trailer_url": null,
        "phase": 6,
        "saga": "Multiverse Saga",
        "chronology": 40,
        "post_credit_scenes": 0
    }
];
