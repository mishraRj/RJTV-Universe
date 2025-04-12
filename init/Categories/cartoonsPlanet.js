const cartoonShows = [
    {
        title: "Shaun the Sheep",
        watch: "https://www.youtube.com/embed/AE4lObko-D8",
        genre: ["Comedy", "Animation"],
        language: ["Hindi"],
        channel: "CartoonsPlanet",
        type: "cartoon", // Movie, Series, Anime !?
        season: 4,
        homeShow: true,
        description: "Shaun The Sheep is a cheeky and mischievous sheep at Mossy Bottom farm who's the leader of the flock and always plays slapstick jokes, pranks and causes trouble especially on Farmer X and his grumpy guide dog, Bitzer.",
        image: {
            url: "https://res.cloudinary.com/donfkhjlz/image/upload/v1744258238/shaun_fpuva5.webp",
            filname: "TheNun"
        },
        banner: "https://res.cloudinary.com/donfkhjlz/image/upload/v1744258235/AS_6_ifspln.webp",
        trailer: "https://www.youtube.com/embed/bM9HfzdH9zU",
        year: 2007
    },
    {
        title: "Motu Patlu",
        watch: "https://www.youtube.com/embed/cLGStRDf0Hk",
        genre: ["Comedy", "Animation"],
        language: ["Hindi"],
        channel: "CartoonsPlanet",
        type: "cartoon", // Movie, Series, Anime !?
        season: 20,
        homeShow: true,
        description: "Motu and Patlu, two friends living in Fufuri Nagar, always get themselves into hilarious situations and later rescued merely by luck, using the help from Ghasita Ram, Inspector Chingam and Dr. Jhatka.",
        image: {
            url: "https://res.cloudinary.com/donfkhjlz/image/upload/v1744258236/MP_n0rgi0.webp",
            filname: "conjuring2"
        },
        banner: "https://res.cloudinary.com/donfkhjlz/image/upload/v1744258232/AS_21_eqmhxd.webp",
        trailer: "https://www.youtube.com/embed/W2P1jPZAZtU",
        year: 2012
    },
    {
        title: "Tom and Jerry",
        watch: "https://www.youtube.com/embed/ifa2bWKu3Ko",
        genre: ["Comedy", "Animation"],
        language: ["English"],
        channel: "CartoonsPlanet",
        type: "cartoon", // Movie, Series, Anime !?
        season: 5,
        homeShow: true,
        description: "A cat-and-mouse brawl chasing each other.",
        image: {
            url: "https://res.cloudinary.com/donfkhjlz/image/upload/v1744258239/TomndJerry_c9omu4.webp",
            filname: "TheNun"
        },
        banner: "https://res.cloudinary.com/donfkhjlz/image/upload/v1744258234/AS_8_srslva.webp",
        trailer: "https://www.youtube.com/embed/-ML6LvPWDAM",
        year: 2011
    },
    {
        title: "Ben 10: Ominverse",
        watch: "https://www.youtube.com/embed/soDGpyBCSLU",
        genre: ["Action", "Thriller"],
        language: ["Hindi", "English"],
        channel: "CartoonsPlanet",
        type: "cartoon", // Movie, Series, Anime !?
        season: 8,
        homeShow: true,
        description: "The continuing adventures of Ben Tennyson (Yuri Lowenthal) and his new partner, Rook Blonko (Bumper Robinson).",
        image: {
            url: "https://res.cloudinary.com/donfkhjlz/image/upload/v1744258234/Ben10_Omni_rxkn77.webp",
            filname: "conjuring2"
        },
        banner: "https://res.cloudinary.com/donfkhjlz/image/upload/v1744258233/AS_25_sfoeke.webp",
        trailer: "https://www.youtube.com/embed/b1x7cf1gKVU",
        year: 2012
    },
    {
        title: "Oggy and the Cockroaches",
        watch: "https://www.youtube.com/embed/VsVimm8SMiM",
        genre: ["Comedy", "Animation"],
        language: ["Hindi"],
        channel: "CartoonsPlanet",
        type: "cartoon", // Movie, Series, Anime !?
        season: 10,
        homeShow: true,
        trending: true,
        description: "Oggy beats some cockroaches through four time periods.",
        image: {
            url: "https://res.cloudinary.com/donfkhjlz/image/upload/v1744258237/oac_k5js1w.webp",
            filname: "TheNun"
        },
        banner: "https://res.cloudinary.com/donfkhjlz/image/upload/v1744258233/AS_3_tapgth.webp",
        trailer: "https://www.youtube.com/embed/z26G1Jx77kY",
        year: 2013
    },
    {
        title: "Kick Buttowski: Suburban Daredevil",
        watch: "https://www.youtube.com/embed/qMnGF7cOAus",
        genre: ["Comedy", "Animation"],
        language: ["Hindi", "English"],
        channel: "CartoonsPlanet",
        type: "cartoon", // Movie, Series, Anime !?
        season: 2,
        homeShow: true,
        description: "A satirical look at a 10-year-old boy who aspires to be the most hardcore daredevil in existence.",
        image: {
            url: "https://res.cloudinary.com/donfkhjlz/image/upload/v1744258236/KB_jop4xj.webp",
            filname: "conjuring2"
        },
        banner: "https://res.cloudinary.com/donfkhjlz/image/upload/v1744258232/AS_23_js0yuh.webp",
        trailer: "https://www.youtube.com/embed/bO3a-DGDRO0",
        year: 2010
    },
    {
        title: "Horrid Henry",
        watch: "https://www.youtube.com/embed/OOMeuE8tTy0",
        genre: ["Comedy", "Animation"],
        language: ["Hindi", "English"],
        channel: "CartoonsPlanet",
        type: "cartoon", // Movie, Series, Anime !?
        season: 5,
        homeShow: true,
        description: "Horrible Henry, he lives an unfair life and feels that the rest of the world is against him and maintains a constant war with the adults.",
        image: {
            url: "https://res.cloudinary.com/donfkhjlz/image/upload/v1744258236/Henry_l9s80m.webp",
            filname: "TheNun"
        },
        banner: "https://res.cloudinary.com/donfkhjlz/image/upload/v1744258232/AS_2_hpnkqu.webp",
        trailer: "https://www.youtube.com/embed/rzznHi-oQIc",
        year: 2006
    },
    {
        title: "Ben 10: Alien Force",
        watch: "https://www.youtube.com/embed/EJQadHIFiQg",
        genre: ["Action", "Thriller"],
        language: ["Hindi", "English"],
        channel: "CartoonsPlanet",
        type: "cartoon", // Movie, Series, Anime !?
        season: 3,
        homeShow: true,
        trending: true,
        randomTrailer: true,
        randomTrailerLink: "https://cdn.jsdelivr.net/gh/mishraRj/rjtv-trailers/Trailers/b10.mp4",
        randomImageLink: "https://res.cloudinary.com/dber1ydc9/image/upload/v1744096347/Ben10_gkv45r_pzswmx_dvd6d7.png",
        description: "Fifteen-year-old Ben Tennyson must utilize the Omnitrix yet again in order to locate his missing Grandpa Max, accompanied by his cousin Gwen and former enemy Kevin 11.",
        image: {
            url: "https://res.cloudinary.com/donfkhjlz/image/upload/v1744258229/B10AF_hfyqvq.webp",
            filname: "conjuring2"
        },
        banner: "https://res.cloudinary.com/donfkhjlz/image/upload/v1744258233/AS_26_uhfglj.webp",
        trailer: "https://www.youtube.com/embed/kdBp2Sh--vw",
        year: 2008
    },
    {
        title: "Courage the Cowardly Dog",
        watch: "https://www.youtube.com/embed/LbEs0kHG2VE",
        genre: ["Horror", "Comedy"],
        language: ["Hindi", "English"],
        channel: "CartoonsPlanet",
        type: "cartoon", // Movie, Series, Anime !?
        season: 4,
        homeShow: true,
        description: "The offbeat adventures of Courage, a cowardly dog who must overcome his own fears to heroically defend his unknowing farmer owners from all kinds of dangers, paranormal events and menaces that appear around their land.",
        image: {
            url: "https://res.cloudinary.com/donfkhjlz/image/upload/v1744258235/CTCD_ykzrya.webp",
            filname: "TheNun"
        },
        banner: "https://res.cloudinary.com/donfkhjlz/image/upload/v1744258229/AS_10_zfu9fj.webp",
        trailer: "https://www.youtube.com/embed/fsFEa-AOl3M",
        year: 1999
    },
    {
        title: "Mr. Bean: The Animated Series",
        watch: "https://www.youtube.com/embed/o5uXq9bmD1s",
        genre: ["Comedy", "Animation"],
        language: ["Hindi", "English"],
        channel: "CartoonsPlanet",
        type: "cartoon", // Movie, Series, Anime !?
        season: 5,
        homeShow: true,
        description: "A clueless yet clever loner bungles his way through life in London.",
        image: {
            url: "https://res.cloudinary.com/donfkhjlz/image/upload/v1744258237/MrBean_zpeunk.webp",
            filname: "conjuring2"
        },
        banner: "https://res.cloudinary.com/donfkhjlz/image/upload/v1744258229/AS_1_enqgum.webp",
        trailer: "https://www.youtube.com/embed/RYBfHE5xfvU",
        year: 2002
    },
    {
        title: "Chhota Bheem",
        watch: "https://www.youtube.com/embed/Lqb8Ov9H5lI",
        genre: ["Comedy", "Animation"],
        language: ["Hindi", "English"],
        channel: "CartoonsPlanet",
        type: "cartoon", // Movie, Series, Anime !?
        season: 12,
        homeShow: true,
        description: "Chhota Bheem is an Indian animated series adventures about a boy named Bheem and his friends in fictional village of Dholakpur.Bheem and his friends are usually involved in protecting the village from various evil forces.",
        image: {
            url: "https://res.cloudinary.com/donfkhjlz/image/upload/v1744258235/CB_qo3qa9.webp",
            filname: "TheNun"
        },
        banner: "https://res.cloudinary.com/donfkhjlz/image/upload/v1744258233/AS_24_jev4ga.webp",
        trailer: "https://www.youtube.com/embed/5TN_9xCrWFA",
        year: 2008
    },
    {
        title: "Adventure Time",
        watch: "https://www.youtube.com/embed/3GTt3UWyH3g",
        genre: ["Horror", "Comedy"],
        language: ["Hindi", "English"],
        channel: "CartoonsPlanet",
        type: "cartoon", // Movie, Series, Anime !?
        season: 7,
        homeShow: true,
        description: "A 12-year-old boy and his best friend, a wise 28-year-old dog with magical powers, go on a series of surreal adventures in a remote future.",
        image: {
            url: "https://res.cloudinary.com/donfkhjlz/image/upload/v1744258229/AT_hbijkq.webp",
            filname: "conjuring2"
        },
        banner: "https://res.cloudinary.com/donfkhjlz/image/upload/v1744258232/AS_22_pqrehj.webp",
        trailer: "https://www.youtube.com/embed/tbthkoGiw9I",
        year: 2010
    },
    {
        title: "Avatar: The Last Airbender",
        watch: "https://www.youtube.com/embed/-pSqebZsBzs",
        genre: ["Action", "Adventure", "Fantasy"],
        language: ["Hindi", "English"],
        channel: "CartoonsPlanet",
        type: "cartoon", // Movie, Series, Anime !?
        season: 4,
        homeShow: false,
        description: "Aang, the last Airbender and Avatar, embarks on a quest to master the four elements and bring balance to the world.",
        image: {
            url: "https://res.cloudinary.com/donfkhjlz/image/upload/v1744258229/avatar_s7o22x.webp",
            filename: "Avatar_The_Last_Airbender"
        },
        banner: "https://res.cloudinary.com/donfkhjlz/image/upload/v1744258230/AS_16_gmhq0y.webp",
        trailer: "https://youtu.be/ooVvH2IYz0w",
        year: 2005
    },
    {
        title: "Ben 10 Classic",
        watch: "https://www.youtube.com/embed/EdTgh76Q4Mg",
        genre: ["Action", "Sci-Fi", "Adventure"],
        language: ["Hindi", "English"],
        channel: "CartoonsPlanet",
        type: "cartoon", // Movie, Series, Anime !?
        season: 4,
        homeShow: false,
        description: "Ben Tennyson discovers an alien watch, the Omnitrix, which gives him the ability to transform into various powerful aliens.",
        image: {
            url: "https://res.cloudinary.com/donfkhjlz/image/upload/v1744258235/ben_10__s4pl0k.webp",
            filename: "Ben10_Classic"
        },
        banner: "https://res.cloudinary.com/donfkhjlz/image/upload/v1744258231/AS_18_y9cnaz.webp",
        trailer: "https://youtu.be/NrhqEKDohxU",
        year: 2005
    },
    {
        title: "Ben 10: Ultimate Alien",
        watch: "https://www.youtube.com/embed/hNBDtBfv6wE?list=PLD7E4B63582E0479D",
        genre: ["Action", "Sci-Fi", "Adventure"],
        language: ["Hindi", "English"],
        channel: "CartoonsPlanet",
        type: "cartoon", // Movie, Series, Anime !?
        season: 3,
        homeShow: false,
        description: "Ben Tennyson, now 16 years old, faces even more powerful alien threats with his new Ultimatrix device.",
        image: {
            url: "https://res.cloudinary.com/donfkhjlz/image/upload/v1744258234/Ben_10UA_ycjl7c.webp",
            filename: "Ben10_Ultimate_Alien"
        },
        banner: "https://res.cloudinary.com/donfkhjlz/image/upload/v1744258232/AS_19_ecmziw.webp",
        trailer: "https://youtu.be/NDNyZ4dIP54",
        year: 2010
    },
    {
        title: "Disenchantment",
        watch: "https://www.youtube.com/embed/_MyY_ixJMEI",
        genre: ["Comedy", "Fantasy", "Adventure"],
        language: ["Hindi","English"],
        channel: "CartoonsPlanet",
        type: "cartoon", // Movie, Series, Anime !?
        season: 5,
        homeShow: false,
        description: "A rebellious princess named Bean, along with her elf companion and a demon, explores the medieval fantasy kingdom of Dreamland.",
        image: {
            url: "https://res.cloudinary.com/donfkhjlz/image/upload/v1744258235/Disenchantment_q97ta7.webp",
            filename: "Disenchantment"
        },
        banner: "https://res.cloudinary.com/donfkhjlz/image/upload/v1744258233/AS_20_uigybj.webp",
        trailer: "https://youtu.be/M9XrFzLYi-Y",
        year: 2018
    },
    {
        title: "Family Guy",
        watch: "https://www.youtube.com/embed/Z7Ra8Wa-WMI",
        genre: ["Comedy", "Sitcom"],
        language: ["English"],
        channel: "CartoonsPlanet",
        type: "cartoon", // Movie, Series, Anime !?
        season: 23,
        homeShow: false,
        description: "Follows the misadventures of the Griffin family in the fictional town of Quahog, Rhode Island.",
        image: {
            url: "https://res.cloudinary.com/donfkhjlz/image/upload/v1744258235/family-guy__l22sbx.webp",
            filename: "Family_Guy"
        },
        banner: "https://res.cloudinary.com/donfkhjlz/image/upload/v1744258231/AS_11_tirquo.webp",
        trailer: "https://youtu.be/drWuVyvrOLU",
        year: 1999
    },
    {
        title: "Invincible",
        watch: "https://www.youtube.com/embed/TqxXVNejouM",
        genre: ["Action", "Superhero", "Sci-Fi"],
        language: ["English"],
        channel: "CartoonsPlanet",
        type: "cartoon", // Movie, Series, Anime !?
        season: 3,
        homeShow: true,
        trending: true,
        description: "Mark Grayson, a teenager, discovers his powers and struggles to follow in the footsteps of his powerful superhero father, Omni-Man.",
        image: {
            url: "https://res.cloudinary.com/donfkhjlz/image/upload/v1744258236/invincible_c6ylap.webp",
            filename: "Invincible"
        },
        banner: "https://res.cloudinary.com/donfkhjlz/image/upload/v1744258229/AS_13_z93bni.webp",
        trailer: "https://youtu.be/-bfAVpuko5o",
        year: 2021
    },
    {
        title: "Kid vs Kat",
        watch: "https://www.youtube.com/embed/URK0wdQeTl4",
        genre: ["Comedy", "Action"],
        language: ["Hindi", "English"],
        channel: "CartoonsPlanet",
        type: "cartoon", // Movie, Series, Anime !?
        season: 2,
        homeShow: false,
        description: "A young boy named Coop battles his mischievous, evil alien cat, who constantly tries to outsmart him.",
        image: {
            url: "https://res.cloudinary.com/donfkhjlz/image/upload/v1744258236/kid_vs_kat_bkvjhf.webp",
            filename: "Kid_vs_Kat"
        },
        banner: "https://res.cloudinary.com/donfkhjlz/image/upload/v1744258229/AS_14_ftbdny.webp",
        trailer: "https://youtu.be/zowSzwG-xQI",
        year: 2008
    },
    {
        title: "Looney Tunes",
        watch: "https://www.youtube.com/embed/KUwZP4dA6MU",
        genre: ["Comedy", "Slapstick"],
        language: ["English"],
        channel: "CartoonsPlanet",
        type: "cartoon", // Movie, Series, Anime !?
        season: 3,
        homeShow: false,
        description: "A classic animated series featuring beloved characters like Bugs Bunny, Daffy Duck, and Porky Pig in hilarious adventures.",
        image: {
            url: "https://res.cloudinary.com/donfkhjlz/image/upload/v1744258236/LT_gzhopr.webp",
            filename: "Looney_Tunes"
        },
        banner: "https://res.cloudinary.com/donfkhjlz/image/upload/v1744258230/AS_15_wsdycz.webp",
        trailer: "https://youtu.be/nalw1XRAiMI",
        year: 1930
    },
    {
        title: "Ultimate Spider-Man",
        watch: "https://www.youtube.com/embed/2mk_iCjxMnQ",
        genre: ["Action", "Superhero"],
        language: ["Hindi", "English"],
        channel: "CartoonsPlanet",
        type: "cartoon", // Movie, Series, Anime !?
        season: 4,
        homeShow: false,
        description: "Teenage Peter Parker balances high school with his role as Spider-Man, training under S.H.I.E.L.D. to become the ultimate hero.",
        image: {
            url: "https://res.cloudinary.com/donfkhjlz/image/upload/v1744258239/Ultm_SP_xuvhlt.webp",
            filename: "Ultimate_Spider_Man"
        },
        banner: "https://res.cloudinary.com/donfkhjlz/image/upload/v1744258234/AS_9_cmu8jt.webp",
        trailer: "https://youtu.be/IYJNIj4s2SY",
        year: 2012
    },
    {
        title: "Hulk and The Agents of S.M.A.S.H",
        watch: "https://www.youtube.com/embed/guQaVgi9OIU",
        genre: ["Action", "Superhero"],
        language: ["Hindi", "English"],
        channel: "CartoonsPlanet",
        type: "cartoon", // Movie, Series, Anime !?
        season: 2,
        homeShow: false,
        description: "Hulk teams up with She-Hulk, Red Hulk, A-Bomb, and Skaar to battle threats too big for the Avengers to handle.",
        image: {
            url: "https://res.cloudinary.com/donfkhjlz/image/upload/v1744258236/hulk_c2rq8u.webp",
            filename: "Hulk_Agents_SMASH"
        },
        banner: "https://res.cloudinary.com/donfkhjlz/image/upload/v1744258230/AS_12_kkfqet.webp",
        trailer: "https://youtu.be/XADlOedNfKc",
        year: 2013
    },
    {
        title: "Avengers Assemble",
        watch: "https://www.youtube.com/embed/gF1nCb7QvbA",
        genre: ["Action", "Superhero"],
        language: ["Hindi", "English"],
        channel: "CartoonsPlanet",
        type: "cartoon", // Movie, Series, Anime !?
        season: 5,
        homeShow: false,
        description: "The Avengers unite to battle powerful enemies and protect the world from impending dangers.",
        image: {
            url: "https://res.cloudinary.com/donfkhjlz/image/upload/v1744258229/Avgrs_Assmbl_f3khv2.webp",
            filename: "Avengers_Assemble"
        },
        banner: "https://res.cloudinary.com/donfkhjlz/image/upload/v1744258231/AS_17_gacfvc.webp",
        trailer: "https://youtu.be/30Gy8Q8wQMo",
        year: 2013
    },
    {
        title: "Phineas & Ferb",
        watch: "https://www.youtube.com/embed/ZA0iHu8cqpY",
        genre: ["Comedy", "Adventure"],
        language: ["Hindi", "English"],
        channel: "CartoonsPlanet",
        type: "cartoon", // Movie, Series, Anime !?
        season: 5,
        homeShow: true,
        description: "Stepbrothers Phineas and Ferb embark on exciting adventures while their pet platypus, Perry, secretly fights Dr. Doofenshmirtz.",
        image: {
            url: "https://res.cloudinary.com/donfkhjlz/image/upload/v1744258237/PanF_xwgdqq.webp",
            filename: "Phineas_Ferb"
        },
        banner: "https://res.cloudinary.com/donfkhjlz/image/upload/v1744258233/AS_4_axocee.webp",
        trailer: "https://youtu.be/TfN906USOt8",
        year: 2007
    },
    {
        title: "Rick and Morty",
        watch: "https://www.youtube.com/embed/3YFW5HoAeKo",
        genre: ["Comedy", "Sci-Fi", "Adventure"],
        language: ["English"],
        channel: "CartoonsPlanet",
        type: "cartoon", // Movie, Series, Anime !?
        season: 6,
        homeShow: false,
        description: "Rick, a mad scientist, takes his timid grandson Morty on dangerous and absurd interdimensional adventures.",
        image: {
            url: "https://res.cloudinary.com/donfkhjlz/image/upload/v1744258237/RickndM_ujx67v.webp",
            filename: "Rick_and_Morty"
        },
        banner: "https://res.cloudinary.com/donfkhjlz/image/upload/v1744258233/AS_5_oseiew.webp",
        trailer: "https://youtu.be/hl1U0bxTHbY",
        year: 2013
    },
    {
        title: "The Legend of Hanuman",
        watch: "https://www.youtube.com/embed/RLR46zUb1i4",
        genre: ["Mythological", "Adventure", "Action"],
        language: ["Hindi"],
        channel: "CartoonsPlanet",
        type: "cartoon", // Movie, Series, Anime !?
        season: 5,
        homeShow: false,
        latest: true,
        description: "A beautifully animated series narrating the story of Lord Hanuman and his journey from an ordinary being to a divine legend.",
        image: {
            url: "https://res.cloudinary.com/donfkhjlz/image/upload/v1744258238/TLH_kd6m8p.webp",
            filename: "Legend_of_Hanuman"
        },
        banner: "https://res.cloudinary.com/donfkhjlz/image/upload/v1744258234/AS_7_qqvf3v.webp",
        trailer: "https://youtu.be/Af49v6rUXmQ",
        year: 2021
    }
];

const cartoonMovies = [
    {
        title: "The Croods",
        watch: "https://www.youtube.com/embed/FGH6bgVvrBQ",
        genre: ["Animation", "Comedy", "Adventure"],
        language: ["Hindi", "English"],
        channel: "CartoonsPlanet",
        type: "movie", // Movie, Series, Anime !?
        homeShow: true,
        recommended: true,
        description: "In the primeval era, Grug and his family risk the dangers of their surroundings to find a new dwelling place. Along the way, they meet a modern boy who woos them with his adventurous ways.",
        image: {
            url: "https://res.cloudinary.com/dfeejwrim/image/upload/v1744092794/theCroods_re0yuz_scqjib.webp",
            filname: "TheNun"
        },
        banner: "https://res.cloudinary.com/dfeejwrim/image/upload/v1744092789/CROODS_vb6mb7.webp",
        trailer: "https://www.youtube.com/embed/4fVCKy69zUY",
        year: 2013
    },
    {
        title: "Rio",
        watch: "https://www.youtube.com/embed/MsmmwCjYUZs",
        genre: ["Fantasy", "Comedy", "Adventure"],
        language: ["Hindi", "English"],
        channel: "CartoonsPlanet",
        type: "movie", // Movie, Series, Anime !?
        homeShow: true,
        description: "When Blu, a domesticated macaw from small-town Minnesota, meets the fiercely independent Jewel, he takes off on an adventure to Rio de Janeiro with the bird of his dreams.she and her children witness strange, paranormal events in their house.",
        image: {
            url: "https://res.cloudinary.com/dfeejwrim/image/upload/v1744092793/Rio_u9ihqs_d4msju.webp",
            filname: "conjuring2"
        },
        banner: "https://res.cloudinary.com/dfeejwrim/image/upload/v1744092791/Rio_daud0z.webp",
        trailer: "https://www.youtube.com/embed/P1GRO31ve5Q",
        year: 2011
    },
    {
        title: "Toy Story",
        watch: "https://www.youtube.com/embed/nVeNlaUCa2E",
        genre: ["Fantasy", "Comedy", "Adventure"],
        language: ["Hindi", "English"],
        channel: "CartoonsPlanet",
        type: "movie", // Movie, Series, Anime !?
        homeShow: true,
        recommended: true,
        description: "A cowboy doll is profoundly threatened and jealous when a new spaceman action figure supplants him as top toy in a boy's bedroom.",
        image: {
            url: "https://res.cloudinary.com/dfeejwrim/image/upload/v1744092794/toyStory_v28jfg_w7mt31.webp",
            filname: "TheNun"
        },
        banner: "https://res.cloudinary.com/dfeejwrim/image/upload/v1744092791/TS_nbyvyw.webp",
        trailer: "https://www.youtube.com/embed/v-PjgYDrg70",
        year: 1995
    },
    {
        title: "Megamind",
        watch: "https://www.youtube.com/embed/zeGRvFbWbz8",
        genre: ["Fantasy", "Comedy"],
        language: ["Hindi", "English"],
        channel: "CartoonsPlanet",
        type: "movie", // Movie, Series, Anime !?
        homeShow: true,
        description: "Evil genius Megamind finally defeats his do-gooder nemesis, Metro Man, but is left without a purpose in a superhero-free world.",
        image: {
            url: "https://res.cloudinary.com/dfeejwrim/image/upload/v1744092793/Megamind_s8pikp_h0fnvc.webp",
            filname: "conjuring2"
        },
        banner: "https://res.cloudinary.com/dfeejwrim/image/upload/v1744092790/MGM_cycbra.webp",
        trailer: "https://www.youtube.com/embed/ead9HCX9fe4",
        year: 2010
    },
    {
        title: "The Jungle Book",
        watch: "https://www.youtube.com/embed/k90yDFh7Ihs",
        genre: ["Fantasy", "Comedy"],
        language: ["Hindi", "English"],
        channel: "CartoonsPlanet",
        type: "movie", // Movie, Series, Anime !?
        homeShow: true,
        recommended: true,
        description: "Bagheera the Panther and Baloo the Bear have a difficult time trying to convince a boy to leave the jungle for human civilization.",
        image: {
            url: "https://res.cloudinary.com/dfeejwrim/image/upload/v1744092792/jungleBook_kdrr6m_kvba5x.webp",
            filname: "TheNun"
        },
        banner: "https://res.cloudinary.com/dfeejwrim/image/upload/v1744092788/689161_nos4ye_n9fl7y.webp",
        trailer: "https://www.youtube.com/embed/xFdtyGoVSDE",
        year: 1967
    },
    {
        title: "Ratatouille",
        watch: "https://www.youtube.com/embed/7DFL8yzuQQg",
        genre: ["Fantasy", "Comedy"],
        language: ["Hindi", "English"],
        channel: "CartoonsPlanet",
        type: "movie", // Movie, Series, Anime !?
        homeShow: true,
        description: "A rat who can cook makes an unusual alliance with a young kitchen worker at a famous Paris restaurant.",
        image: {
            url: "https://res.cloudinary.com/dfeejwrim/image/upload/v1744092793/Rata_pdd1gi_dbvkml.webp",
            filname: "conjuring2"
        },
        banner: "https://res.cloudinary.com/dfeejwrim/image/upload/v1744092790/rata_xfxmm9.webp",
        trailer: "https://www.youtube.com/embed/-L7JYRHAxyc",
        year: 2007
    },
    {
        title: "Kung fu panda 3",
        watch: "https://www.youtube.com/embed/ob-UQgVXZC0",
        genre: ["Fantasy", "Comedy", "Action"],
        language: ["Hindi", "English"],
        channel: "CartoonsPlanet",
        type: "movie", // Movie, Series, Anime !?
        homeShow: true,
        recommended: true,
        description: "Continuing his legendary adventures of awesomeness, Po must face two hugely epic, but different threats: one supernatural and the other a little closer to home.",
        image: {
            url: "https://res.cloudinary.com/dfeejwrim/image/upload/v1744092792/KFP3_ocaovp_lqt2ks.webp",
            filname: "TheNun"
        },
        banner: "https://res.cloudinary.com/dfeejwrim/image/upload/v1744092789/KFP3_rgxa4k.webp",
        trailer: "https://www.youtube.com/embed/7U6RzqwNTF8",
        year: 2016
    },
    {
        title: "Boss Baby",
        watch: "https://www.youtube.com/embed/k0Mhm8zSerQ",
        genre: ["Fantasy", "Comedy"],
        language: ["Hindi", "English"],
        channel: "CartoonsPlanet",
        type: "movie", // Movie, Series, Anime !?
        homeShow: true,
        description: "A suit-wearing, briefcase-carrying baby pairs up with his 7-year old brother to stop the dastardly plot of the CEO of Puppy Co.",
        image: {
            url: "https://res.cloudinary.com/dfeejwrim/image/upload/v1744092792/bossBaby_byqk0j_fcvkxg.webp",
            filname: "conjuring2"
        },
        banner: "https://res.cloudinary.com/dfeejwrim/image/upload/v1744092789/BSBB_tvihya.webp",
        trailer: "https://www.youtube.com/embed/t1ps4uvMm24",
        year: 2017
    },
    {
        title: "How to train your dragon",
        watch: "https://www.youtube.com/embed/FM4TwH22ayI",
        genre: ["Fantasy", "Comedy", "Action"],
        language: ["Hindi", "English"],
        channel: "CartoonsPlanet",
        type: "movie", // Movie, Series, Anime !?
        homeShow: true,
        description: "A hapless young Viking who aspires to hunt dragons becomes the unlikely friend of a young dragon himself, and learns there may be more to the creatures than he assumed.",
        image: {
            url: "https://res.cloudinary.com/dfeejwrim/image/upload/v1744092792/HTTYD_yvhxhm_me6pr3.webp",
            filname: "TheNun"
        },
        banner: "https://res.cloudinary.com/dfeejwrim/image/upload/v1744092788/HTTD_jmtysy.webp",
        trailer: "https://www.youtube.com/embed/2AKsAxrhqgM",
        year: 2010
    },
    {
        title: "Ice Age: The Meltdown",
        watch: "https://www.youtube.com/embed/l5FGbp01BHQ",
        genre: ["Fantasy", "Comedy"],
        language: ["Hindi", "English"],
        channel: "CartoonsPlanet",
        type: "movie", // Movie, Series, Anime !?
        homeShow: true,
        description: "Manny, Sid and Diego discover that the ice age is coming to an end, and join everybody for a journey to higher ground. On the trip, they discover that Manny is not in fact the last of the woolly mammoths.",
        image: {
            url: "https://res.cloudinary.com/dfeejwrim/image/upload/v1744092792/ia2_ktc7ed_bhaokc.webp",
            filname: "TheNun"
        },
        banner: "https://res.cloudinary.com/dfeejwrim/image/upload/v1744092788/IA_p88kgs.webp",
        trailer: "https://www.youtube.com/embed/N2WtX3VLQhE",
        year: 2006
    },
    {
        title: "Abominable",
        watch: "https://www.youtube.com/embed/chvjkV0jRh8",
        genre: ["Adventure", "Fantasy", "Comedy"],
        language: ["Hindi", "English"],
        channel: "CartoonsPlanet",
        type: "movie", // Movie, Series, Anime !?
        homeShow: true,
        recommended: true,
        description: "A group of misfits embarks on an epic adventure to reunite a young Yeti with his family while outrunning evil scientists who seek to capture him.",
        image: {
            url: "https://res.cloudinary.com/dfeejwrim/image/upload/v1744092788/Abominable_vqpold_kdimve.webp",
            filename: "Abominable"
        },
        banner: "https://res.cloudinary.com/dfeejwrim/image/upload/v1744092788/ABM_aa8d7v.webp",
        trailer: "https://youtu.be/Ap0NRJD-2ts",
        year: 2019
    },
    {
        title: "Aladdin",
        watch: "https://www.youtube.com/embed/FxYpf2Mc_WU",
        genre: ["Fantasy", "Adventure", "Musical"],
        language: ["Hindi", "English"],
        channel: "CartoonsPlanet",
        type: "movie", // Movie, Series, Anime !?
        homeShow: true,
        description: "A street rat named Aladdin discovers a magical lamp that grants him three wishes, leading him on an adventure to win the heart of Princess Jasmine and defeat the evil sorcerer Jafar.",
        image: {
            url: "https://res.cloudinary.com/dfeejwrim/image/upload/v1744092787/Alladin_zmwn79_waai3c.webp",
            filename: "Aladdin_1992"
        },
        banner: "https://res.cloudinary.com/dfeejwrim/image/upload/v1744092789/ADN_qlahmj.webp",
        trailer: "https://youtu.be/eTjHiQKJUDY",
        year: 1992
    },
    {
        title: "Cars",
        watch: "https://www.youtube.com/embed/fdGWRq1dVBA",
        genre: ["Comedy", "Adventure", "Sports"],
        language: ["Hindi", "English"],
        channel: "CartoonsPlanet",
        type: "movie", // Movie, Series, Anime !?
        homeShow: true,
        description: "Lightning McQueen, a hotshot race car, gets stranded in a small town and learns valuable life lessons before heading to the biggest race of his career.",
        image: {
            url: "https://res.cloudinary.com/dfeejwrim/image/upload/v1744092792/cars_dy2hc5_qyx8dp.webp",
            filename: "Cars"
        },
        banner: "https://res.cloudinary.com/dfeejwrim/image/upload/v1744092789/cars_hcwx30_yqipjy.webp",
        trailer: "https://youtu.be/W_H7_tDHFE8",
        year: 2006
    },
    {
        title: "Despicable Me",
        watch: "https://www.youtube.com/embed/OtpXe5w9m1g",
        genre: ["Comedy", "Adventure"],
        language: ["Hindi", "English"],
        channel: "CartoonsPlanet",
        type: "movie", // Movie, Series, Anime !?
        homeShow: false,
        description: "A supervillain named Gru plans to steal the moon but finds his heart changed when he adopts three little orphan girls.",
        image: {
            url: "https://res.cloudinary.com/dfeejwrim/image/upload/v1744092792/DME_v3oer4_mvyjuy.webp",
            filename: "Despicable_Me"
        },
        banner: "https://res.cloudinary.com/dfeejwrim/image/upload/v1744092789/DME_atdku7_tgqqp1.webp",
        trailer: "https://youtu.be/zzCZ1W_CUoI",
        year: 2010
    },
    {
        title: "Minions",
        watch: "https://www.youtube.com/embed/FqkEEX0QEDM",
        genre: ["Comedy", "Adventure"],
        language: ["Hindi", "English"],
        channel: "CartoonsPlanet",
        type: "movie", // Movie, Series, Anime !?
        homeShow: false,
        description: "Minions have existed since the beginning of time, searching for the most despicable master to serve, leading them to an unexpected adventure.",
        image: {
            url: "https://res.cloudinary.com/dfeejwrim/image/upload/v1744092793/mINIONS_habqjs_j6ss5o.webp",
            filename: "Minions"
        },
        banner: "https://res.cloudinary.com/dfeejwrim/image/upload/v1744092790/minions_w3k3ig_abgwub.webp",
        trailer: "https://youtu.be/eisKxhjBnZ0",
        year: 2015
    },
    {
        title: "Encanto",
        watch: "https://www.youtube.com/embed/j9fhAW6_rvI",
        genre: ["Fantasy", "Musical", "Comedy"],
        language: ["Hindi", "English"],
        channel: "CartoonsPlanet",
        type: "movie", // Movie, Series, Anime !?
        homeShow: false,
        recommended: true,
        description: "In a magical house in Colombia, young Mirabel discovers that she may be the only one who can save her extraordinary family’s powers.",
        image: {
            url: "https://res.cloudinary.com/dfeejwrim/image/upload/v1744092792/encanto_h3o45m_xvpht0.webp",
            filename: "Encanto"
        },
        banner: "https://res.cloudinary.com/dfeejwrim/image/upload/v1744092790/encanto_bigojl_zmrftw.webp",
        trailer: "https://youtu.be/pt6vfJCCIAI",
        year: 2021
    },
    {
        title: "Hanuman",
        watch: "https://www.youtube.com/embed/NSmzueYlFUY",
        genre: ["Mythological", "Adventure", "Action"],
        language: ["Hindi"],
        channel: "CartoonsPlanet",
        type: "movie", // Movie, Series, Anime !?
        homeShow: false,
        recommended: true,
        description: "A beautifully animated tale depicting the life of Lord Hanuman and his incredible journey of devotion, strength, and courage.",
        image: {
            url: "https://res.cloudinary.com/donfkhjlz/image/upload/v1744258235/Hanuman_l0utqc.webp",
            filename: "Hanuman_2005"
        },
        banner: "https://res.cloudinary.com/dfeejwrim/image/upload/v1744092790/hanuman_kwyshw_p0o9be.webp",
        trailer: "https://youtu.be/giUPNNlxb_E",
        year: 2005
    },
    {
        title: "Happy Feet",
        watch: "https://www.youtube.com/embed/MjVFOqvH6-w",
        genre: ["Comedy", "Adventure", "Musical"],
        language: ["Hindi", "English"],
        channel: "CartoonsPlanet",
        type: "movie", // Movie, Series, Anime !?
        homeShow: false,
        description: "In a world where penguins must sing to find their soulmates, one penguin stands out with his extraordinary dancing skills.",
        image: {
            url: "https://res.cloudinary.com/dfeejwrim/image/upload/v1744092792/happyfeet_kvedfh_kptoju.webp",
            filename: "Happy_Feet"
        },
        banner: "https://res.cloudinary.com/dfeejwrim/image/upload/v1744092788/HF_xbwiji.webp",
        trailer: "https://www.youtube.com/embed/NF75QyhWmBs",
        year: 2006
    },
    {
        title: "Madagascar",
        watch: "https://www.youtube.com/embed/y-TudJQJhVc",
        genre: ["Comedy", "Adventure"],
        language: ["Hindi", "English"],
        channel: "CartoonsPlanet",
        type: "movie", // Movie, Series, Anime !?
        homeShow: false,
        recommended: true,
        description: "A group of pampered zoo animals accidentally ends up in Madagascar, where they must adapt to the wild life.",
        image: {
            url: "https://res.cloudinary.com/dfeejwrim/image/upload/v1744092792/madagascar_yzey0v_gpllpi.webp",
            filename: "Madagascar"
        },
        banner: "https://res.cloudinary.com/dfeejwrim/image/upload/v1744092789/MADGSCR_edcknx.webp",
        trailer: "https://youtu.be/fq5zU9T_Hl4",
        year: 2005
    },
    {
        title: "Raya and The Lost Dragon",
        watch: "https://www.youtube.com/embed/-ynuMPeYmnA",
        genre: ["Adventure", "Fantasy", "Action"],
        language: ["Hindi", "English"],
        channel: "CartoonsPlanet",
        type: "movie", // Movie, Series, Anime !?
        homeShow: true,
        recommended: true,
        description: "Raya, a lone warrior, embarks on a journey to find the last dragon and restore peace to the divided world of Kumandra.",
        image: {
            url: "https://res.cloudinary.com/dfeejwrim/image/upload/v1744092793/raya_kbuufz_rtvsxc.webp",
            filename: "Raya_and_The_Lost_Dragon"
        },
        banner: "https://res.cloudinary.com/dfeejwrim/image/upload/v1744092790/Raya_iyzmem_wc1ndc.webp",
        trailer: "https://youtu.be/1VIZ89FEjYI",
        year: 2021
    },
    {
        title: "Shark Tale",
        watch: "https://www.youtube.com/embed/62kRBC-zADg",
        genre: ["Comedy", "Adventure"],
        language: ["Hindi", "English"],
        channel: "CartoonsPlanet",
        type: "movie", // Movie, Series, Anime !?
        homeShow: false,
        recommended: true,
        description: "Oscar, a small fish with big dreams, gets tangled in an underwater mafia war after falsely claiming to have defeated a shark.",
        image: {
            url: "https://res.cloudinary.com/dfeejwrim/image/upload/v1744092793/sharkTale_ok8sd2_omtagj.webp",
            filename: "Shark_Tale"
        },
        banner: "https://res.cloudinary.com/dfeejwrim/image/upload/v1744092791/shark-tale_gpzraw_xescbo.webp",
        trailer: "https://youtu.be/b5EcRbTWm2A",
        year: 2004
    },
    {
        title: "Shrek",
        watch: "https://www.youtube.com/embed/DGJ4bgit6o0",
        genre: ["Comedy", "Fantasy", "Adventure"],
        language: ["Hindi", "English"],
        channel: "CartoonsPlanet",
        type: "movie", // Movie, Series, Anime !?
        homeShow: false,
        recommended: true,
        description: "Shrek, an ogre who loves his solitude, embarks on a journey to rescue Princess Fiona and discovers that true beauty comes from within.",
        image: {
            url: "https://res.cloudinary.com/dfeejwrim/image/upload/v1744092794/shrek_rk5tjt_wxuqdo.webp",
            filename: "Shrek"
        },
        banner: "https://res.cloudinary.com/dfeejwrim/image/upload/v1744092791/shrek_iplx84_tll1ue.webp",
        trailer: "https://youtu.be/CwXOrWvPBPk",
        year: 2001
    },
    {
        title: "The Good Dinosaur",
        watch: "https://www.youtube.com/embed/hlImMTs4-34",
        genre: ["Adventure", "Fantasy", "Family"],
        language: ["Hindi", "English"],
        channel: "CartoonsPlanet",
        type: "movie", // Movie, Series, Anime !?
        homeShow: false,
        description: "In a world where dinosaurs never went extinct, a young Apatosaurus named Arlo embarks on a journey to find his way home with the help of an unlikely human friend.",
        image: {
            url: "https://res.cloudinary.com/dfeejwrim/image/upload/v1744092792/goodDiana_tqsup6_oify35.webp",
            filename: "The_Good_Dinosaur"
        },
        banner: "https://res.cloudinary.com/dfeejwrim/image/upload/v1744092790/GD_qjsz9f.webp",
        trailer: "https://youtu.be/O-RgquKVTPE",
        year: 2015
    },
    {
        title: "The Wild",
        watch: "https://www.youtube.com/embed/jFMfD9Cinh4",
        genre: ["Comedy", "Adventure"],
        language: ["Hindi", "English"],
        channel: "CartoonsPlanet",
        type: "movie", // Movie, Series, Anime !?
        homeShow: true,
        recommended: true,
        description: "A lion cub from the New York Zoo gets shipped to Africa, and his father, along with his animal friends, embarks on a wild rescue mission.",
        image: {
            url: "https://res.cloudinary.com/dfeejwrim/image/upload/v1744092794/theWild_qs7jsq_xicgqd.webp",
            filename: "The_Wild"
        },
        banner: "https://res.cloudinary.com/dfeejwrim/image/upload/v1744092791/the_wild_phuhky_gt8unl.webp",
        trailer: "https://youtu.be/2Ud851VoYzU",
        year: 2006
    },
    {
        title: "UP",
        watch: "https://www.youtube.com/embed/6dq8kM0RNVQ",
        genre: ["Adventure", "Comedy", "Drama"],
        language: ["Hindi", "English"],
        channel: "CartoonsPlanet",
        type: "movie", // Movie, Series, Anime !?
        homeShow: true,
        recommended: true,
        description: "A widowed old man fulfills his lifelong dream of flying to South America by tying thousands of balloons to his house, unknowingly bringing along an enthusiastic young explorer.",
        image: {
            url: "https://res.cloudinary.com/dfeejwrim/image/upload/v1744092794/UP_lwcf0v_dxpe5h.webp",
            filename: "UP"
        },
        banner: "https://res.cloudinary.com/dfeejwrim/image/upload/v1744092791/up_evujdf_iauapa.webp",
        trailer: "https://youtu.be/HWEW_qTLSEE",
        year: 2009
    }
];

// ✅ Export multiple categories correctly
module.exports = {
    cartoonShows,
    cartoonMovies
};