const animes = [
    {
        title: "Frieren: Beyond Journey's End",
        watch: "https://www.youtube.com/embed/QACW04Df_go",
        genre: ["Shonen", "Fantasy", "Action"],
        language: ["Hindi", "English", "Japaneese"],
        channel: "AnimePlanet",
        type: "anime", // Movie, Series, Anime !?
        season: 1,
        homeShow: true,
        recommended: true,
        description: "Elf mage Frieren and her fellow adventurers have defeated the Demon King and brought peace to the land. But Frieren will long outlive the rest of her former party. How will she come to understand what life means to the people around her?",
        image: {
            url: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744431417/anime_29_pztjo8.webp",
            filname: "TheNun"
        },
        banner: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744437201/bannerAnime_44_csk3g8.webp",
        trailer: "https://www.youtube.com/embed/QACW04Df_go",
        year: 2024
    },
    {
        title: "One Punch Man",
        watch: "https://www.youtube.com/embed/km2OPUctni4",
        genre: ["Shonen", "Fantasy", "Action"],
        language: ["Hindi", "English", "Japaneese"],
        channel: "AnimePlanet",
        type: "anime", // Movie, Series, Anime !?
        season: 2,
        homeShow: true,
        description: "The story of Saitama, a hero that does it just for fun & can defeat his enemies with a single punch.",
        image: {
            url: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744431893/anime_5_kd3njx.webp",
            filname: "conjuring2"
        },
        banner: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744437204/bannerAnime_8_k46lgd.webp",
        trailer: "https://www.youtube.com/embed/Poo5lqoWSGw",
        year: 2015
    },
    {
        title: "My Dressup Darling",
        watch: "https://www.youtube.com/embed/uuIhCE0QpUw",
        genre: ["Romance", "Comedy"],
        language: ["Hindi", "English", "Japaneese"],
        channel: "AnimePlanet",
        type: "anime", // Movie, Series, Anime !?
        season: 1,
        homeShow: true,
        description: "A quiet loner and the popular girl at school find common ground, making their cosplay dreams come true.",
        image: {
            url: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744431414/anime_15_ztizyj.webp",
            filname: "TheNun"
        },
        banner: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744437173/bannerAnime_11_egydci.webp",
        trailer: "https://www.youtube.com/embed/8oveGY6h6T8",
        year: 2022
    },
    {
        title: "Shinchan",
        watch: "https://www.youtube.com/embed/VH2xAqU1rs8",
        genre: ["Comedy"],
        language: ["Hindi", "English", "Japaneese"],
        channel: "AnimePlanet",
        type: "anime", // Movie, Series, Anime !?
        season: 29,
        homeShow: true,
        recommended: true,
        description: "Shinchan is the naughtiest 5 year old boy around. He is smitten with older women, an urge he never manages to saturate. This page covers the original Japanese version as aired in Japan.",
        image: {
            url: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744431414/anime_10_k4bozt.webp",
            filname: "conjuring2"
        },
        banner: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744437205/bannerAnime_9_z4eqj2.webp",
        trailer: "https://www.youtube.com/embed/UuJCgzTuQxg",
        year: 1992
    },
    {
        title: "My Hero Academia",
        watch: "https://www.youtube.com/embed/7ez0AjMYvek",
        genre: ["Shonen", "Fantasy", "Action"],
        language: ["Hindi", "English", "Japaneese"],
        channel: "AnimePlanet",
        type: "anime", // Movie, Series, Anime !?
        season: 7,
        homeShow: true,
        description: "A superhero-admiring boy enrolls in a prestigious hero academy and learns what it really means to be a hero, after the strongest superhero grants him his own powers.",
        image: {
            url: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744431414/anime_14_zuv35u.webp",
            filname: "TheNun"
        },
        banner: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744437201/bannerAnime_43_oi1dao.webp",
        trailer: "https://www.youtube.com/embed/T5HMoxJRhRY",
        year: 2016
    },
    {
        title: "One Piece",
        watch: "https://www.youtube.com/embed/rlw8KlbFHdU",
        genre: ["Shonen", "Fantasy", "Action"],
        language: ["Hindi", "English", "Japaneese"],
        channel: "AnimePlanet",
        type: "anime", // Movie, Series, Anime !?
        season: 22,
        homeShow: true,
        trending: true,
        recommended: true,
        randomTrailer: true,
        randomTrailerLink: "https://cdn.jsdelivr.net/gh/mishraRj/rjtv-trailers/Trailers/op2.mp4",
        randomImageLink: "https://res.cloudinary.com/dber1ydc9/image/upload/v1744096348/One_Piece_ojephy_dershs_ycoysf.png",
        description: "Monkey D. Luffy sets off on an adventure with his pirate crew in hopes of finding the greatest treasure ever, known as the One Piece.",
        image: {
            url: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744431415/anime_21_fcbcgr.webp",
            filname: "conjuring2"
        },
        banner: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744437200/bannerAnime_42_dcw4of.webp",
        trailer: "https://www.youtube.com/embed/MCb13lbVGE0",
        year: 1999
    },
    {
        title: "Naruto Jumpover",
        watch: "https://www.youtube.com/embed/vPNy6XNIs_w",
        genre: ["Shonen", "Fantasy", "Action"],
        language: ["Hindi", "English", "Japaneese"],
        channel: "AnimePlanet",
        type: "anime", // Movie, Series, Anime !?
        season: 9,
        homeShow: true,
        recommended: true,
        description: "Naruto Uzumaki, a mischievous adolescent ninja, struggles as he searches for recognition and dreams of becoming the Hokage, the village's leader and strongest ninja.",
        image: {
            url: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744431415/anime_16_a42yrx.webp",
            filname: "TheNun"
        },
        banner: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744437178/bannerAnime_19_ssuftc.webp",
        trailer: "https://www.youtube.com/embed/-G9BqkgZXRA",
        year: 2002
    },
    {
        title: "Attack on Titan",
        watch: "https://www.youtube.com/embed/RM-e-U0N2F0",
        genre: ["Shonen", "Fantasy", "Action"],
        language: ["Hindi", "English", "Japaneese"],
        channel: "AnimePlanet",
        type: "anime", // Movie, Series, Anime !?
        season: 4,
        homeShow: true,
        trending: true,
        recommended: true,
        description: "After his hometown is destroyed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction.",
        image: {
            url: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744431892/anime_46_cdaopi.webp",
            filname: "conjuring2"
        },
        banner: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744437187/bannerAnime_34_tkh2pz.webp",
        trailer: "https://www.youtube.com/embed/LV-nazLVmgo",
        year: 2013
    },
    {
        title: "Doraemon",
        watch: "https://www.youtube.com/embed/fF0GBvfKd1I",
        genre: ["Comedy", "Slice-of-life"],
        language: ["Hindi", "English", "Japaneese"],
        channel: "AnimePlanet",
        type: "anime", // Movie, Series, Anime !?
        season: 20,
        homeShow: true,
        trending: true,
        description: "The misadventures of Doraemon, a robot cat from the future, who with his gadgets, is sent back in time to help make Nobita Nobi, a boy without much talent, a better person.",
        image: {
            url: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744431436/anime_33_wqdtqf.webp",
            filname: "TheNun"
        },
        banner: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744437174/bannerAnime_10_cgsgf5.webp",
        trailer: "https://www.youtube.com/embed/tuIzdRIGChM",
        year: 2005
    },
    {
        title: "Demon Slayer: Kimetsu no Yaiba",
        watch: "https://www.youtube.com/embed/wyiZWYMilgk",
        genre: ["Shonen", "Fantasy", "Action"],
        language: ["Hindi", "English", "Japaneese"],
        channel: "AnimePlanet",
        type: "anime", // Movie, Series, Anime !?
        season: 4,
        homeShow: true,
        randomTrailer: true,
        randomTrailerLink: "https://cdn.jsdelivr.net/gh/mishraRj/rjtv-trailers/Trailers/ds.mp4",
        randomImageLink: "https://res.cloudinary.com/dber1ydc9/image/upload/v1744096347/DS_k6ccmy_huoxur_regs2y.png",
        description: "A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon slowly. Tanjiro sets out to become a demon slayer to avenge his family and cure his sister.",
        image: {
            url: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744431422/anime_32_zd4pvy.webp",
            filname: "conjuring2"
        },
        banner: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744437201/bannerAnime_45_chprq2.webp",
        trailer: "https://www.youtube.com/embed/VQGCKyvzIM4",
        year: 2019
    },
    {
        title: "Death Note",
        watch: "https://www.youtube.com/embed/6Mzpu-iLilo",
        genre: ["Shonen", "Fantasy", "Horror"],
        language: ["Hindi", "English", "Japaneese"],
        channel: "AnimePlanet",
        type: "anime", // Movie, Series, Anime !?
        season: 1,
        homeShow: true,
        description: "An intelligent high school student goes on a secret crusade to eliminate criminals from the world after discovering a notebook capable of killing anyone whose name is written into it.",
        image: {
            url: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744431892/anime_44_pq5gim.webp",
            filname: "TheNun"
        },
        banner: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744437191/bannerAnime_40_mv7xfj.webp",
        trailer: "https://www.youtube.com/embed/NlJZ-YgAt-c",
        year: 2006
    },
    {
        title: "Dragon Ball Z",
        watch: "https://www.youtube.com/embed/8q6iCkMY66k",
        genre: ["Shonen", "Fantasy", "Action"],
        language: ["Hindi", "English", "Japaneese"],
        channel: "AnimePlanet",
        type: "anime", // Movie, Series, Anime !?
        season: 9,
        homeShow: true,
        recommended: true,
        description: "With the help of the powerful Dragonballs, a team of fighters led by the saiyan warrior Goku defend the planet earth from extraterrestrial enemies.",
        image: {
            url: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744431892/anime_43_zr8lmv.webp",
            filname: "conjuring2"
        },
        banner: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744437204/bannerAnime_6_dkyw6r.webp",
        trailer: "https://www.youtube.com/embed/nmjqOiJAlk4",
        year: 1996
    },
    {
        title: "Akebi's Sailor Uniform",
        watch: "https://www.youtube.com/embed/DEVghJ4qhLw",
        genre: ["Slice of Life"],
        language: ["Japanese", "Hindi", "English"],
        channel: "AnimePlanet",
        type: "anime", // Movie, Series, Anime !?
        season: 1,
        type: "anime", // Movie, Series, Anime !?
        season: 1,
        homeShow: false,
        description: "Komichi Akebi has always dreamed of wearing a sailor-style school uniform. Upon entering Roubai Academy, she gets the chance and embarks on a heartwarming journey of friendship and self-discovery.",
        image: {
            url: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744431892/anime_45_tv84bk.webp",
            filename: "Akebis_Sailor_Uniform"
        },
        banner: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744437202/bannerAnime_46_whe9nd.webp",
        trailer: "https://www.youtube.com/embed/7TbjT9KGYvo",
        year: 2022
    },
    {
        title: "Beyblade",
        watch: "https://www.youtube.com/embed/REtqlkg_jWo",
        genre: ["Action", "Adventure", "Sports"],
        language: ["Japanese", "English", "Hindi"],
        channel: "AnimePlanet",
        type: "anime", // Movie, Series, Anime !?
        season: 9,
        homeShow: false,
        recommended: true,
        description: "A group of passionate Bladers come together to compete in high-stakes Beyblade battles, aiming to become the best in the world.",
        image: {
            url: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744431437/anime_38_obba9z.webp",
            filename: "Beyblade"
        },
        banner: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744437188/bannerAnime_35_mlthno.webp",
        trailer: "https://www.youtube.com/embed/TuhBWcHi8k0",
        year: 2001
    },
    {
        title: "Boruto: Naruto Next Generations",
        watch: "https://www.youtube.com/embed/CZJBkQQTiCo",
        genre: ["Action", "Adventure", "Fantasy"],
        language: ["Japanese", "English", "Hindi"],
        channel: "AnimePlanet",
        type: "anime", // Movie, Series, Anime !?
        season: 7,
        homeShow: false,
        description: "Following in his father's footsteps, Boruto Uzumaki embarks on his own ninja journey, facing new challenges and adversaries in the Hidden Leaf Village.",
        image: {
            url: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744431437/anime_39_wdqtar.webp",
            filename: "Boruto"
        },
        banner: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744437188/bannerAnime_36_nxbm3m.webp",
        trailer: "https://www.youtube.com/embed/ppLE9xycGm4",
        year: 2017
    },
    {
        title: "Dragon Ball",
        watch: "https://www.youtube.com/embed/38wGMu5QOzc",
        genre: ["Action", "Adventure", "Fantasy"],
        language: ["Japanese", "English", "Hindi"],
        channel: "AnimePlanet",
        type: "anime", // Movie, Series, Anime !?
        season: 8,
        homeShow: false,
        recommended: true,
        description: "Young Goku embarks on a quest to find the seven Dragon Balls, encountering formidable foes and making lifelong friends along the way.",
        image: {
            url: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744431892/anime_41_mhftxq.webp",
            filename: "Dragon_Ball"
        },
        banner: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744437189/bannerAnime_37_m9l3qi.webp",
        trailer: "https://www.youtube.com/embed/gqIEgmqljM8",
        year: 1986
    },
    {
        title: "Dragon Ball Super",
        watch: "https://www.youtube.com/embed/tfjL-xI-D5A",
        genre: ["Action", "Adventure", "Fantasy"],
        language: ["Japanese", "English", "Hindi"],
        channel: "AnimePlanet",
        type: "anime", // Movie, Series, Anime !?
        season: 5,
        homeShow: false,
        randomTrailer: true,
        randomTrailerLink: "https://cdn.jsdelivr.net/gh/mishraRj/rjtv-trailers/Trailers/dbs.mp4",
        randomImageLink: "https://res.cloudinary.com/dber1ydc9/image/upload/v1744096346/DBS_f2cle9_lr207v_m78wci.png",
        description: "Goku and his friends face new powerful foes and participate in multiverse tournaments, pushing their limits beyond imagination.",
        image: {
            url: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744431892/anime_42_l968to.webp",
            filename: "Dragon_Ball_Super"
        },
        banner: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744437189/bannerAnime_38_w0ak8v.webp",
        trailer: "https://www.youtube.com/embed/_DDm-2h8sbw",
        year: 2015
    },
    {
        title: "Full Metal Alchemist Brotherhood",
        watch: "https://www.youtube.com/embed/b1AIAyzeT7I",
        genre: ["Action", "Adventure", "Fantasy"],
        language: ["Japanese", "English", "Hindi"],
        channel: "AnimePlanet",
        type: "anime", // Movie, Series, Anime !?
        season: 2,
        homeShow: false,
        description: "Two brothers, Edward and Alphonse Elric, use alchemy to bring their mother back to life, but the attempt leaves Edward without an arm and Alphonse without a body. They embark on a journey to find the Philosopher's Stone.",
        image: {
            url: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744431417/anime_30_vtaeuf.webp",
            filename: "FMA_Brotherhood"
        },
        banner: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744437183/bannerAnime_28_hjbiqe.webp",
        trailer: "https://www.youtube.com/embed/-GoNo0DGroU",
        year: 2009
    },
    {
        title: "God Eater",
        watch: "https://www.youtube.com/embed/ClL_l-Z0-ys",
        genre: ["Action", "Sci-Fi", "Fantasy"],
        language: ["Japanese", "English"],
        channel: "AnimePlanet",
        type: "anime", // Movie, Series, Anime !?
        season: 1,
        homeShow: false,
        description: "In a post-apocalyptic world, humanity's last hope lies with God Eaters — warriors who wield powerful weapons to defeat monstrous Aragami threatening their survival.",
        image: {
            url: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744431417/anime_31_kmrlq3.webp",
            filename: "God_Eater"
        },
        banner: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744437184/bannerAnime_29_giwpkr.webp",
        trailer: "https://www.youtube.com/embed/2LUfrT5hZM4",
        year: 2015
    },
    {
        title: "Hellsing",
        watch: "https://www.youtube.com/embed/JaWy0AbytoE",
        genre: ["Action", "Horror", "Supernatural"],
        language: ["Japanese", "English"],
        channel: "AnimePlanet",
        type: "anime", // Movie, Series, Anime !?
        season: 2,
        homeShow: true,
        description: "The Hellsing Organization fights to protect England from supernatural threats, with the powerful vampire Alucard as their greatest weapon.",
        image: {
            url: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744431416/anime_22_os8kwe.webp",
            filename: "Hellsing"
        },
        banner: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744437180/bannerAnime_22_bs1xar.webp",
        trailer: "https://www.youtube.com/embed/8Hbhtq9ugPg",
        year: 2001
    },
    {
        title: "Hunter X Hunter",
        watch: "https://www.youtube.com/embed/e9xImbJJVw8",
        genre: ["Action", "Adventure", "Fantasy"],
        language: ["Japanese", "English", "Hindi"],
        channel: "AnimePlanet",
        type: "anime", // Movie, Series, Anime !?
        season: 6,
        homeShow: false,
        description: "Young Gon Freecss embarks on a quest to become a Hunter and find his father, meeting loyal friends and facing powerful enemies along the way.",
        image: {
            url: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744431416/anime_24_fmvipy.webp",
            filename: "Hunter_X_Hunter"
        },
        banner: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744437181/bannerAnime_24_w5ro2p.webp",
        trailer: "https://www.youtube.com/embed/d6kBeJjTGnY",
        year: 2011
    },
    {
        title: "Jujutsu Kaisen",
        watch: "https://www.youtube.com/embed/d78fGOMCGcA",
        genre: ["Action", "Supernatural", "Dark Fantasy"],
        language: ["Japanese", "English", "Hindi"],
        channel: "AnimePlanet",
        type: "anime", // Movie, Series, Anime !?
        season: 3,
        homeShow: false,
        recommended: true,
        description: "Yuji Itadori joins the Tokyo Jujutsu High to combat curses and protect humanity after consuming a powerful curse himself.",
        image: {
            url: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744431416/anime_26_xfakc7.webp",
            filename: "Jujutsu_Kaisen"
        },
        banner: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744437182/bannerAnime_25_ifg1xr.webp",
        trailer: "https://www.youtube.com/embed/pkKu9hLT-t8",
        year: 2020
    },
    {
        title: "Kiteretsu",
        watch: "https://www.youtube.com/embed/6TNIKbgBurg",
        genre: ["Comedy", "Adventure", "Sci-Fi"],
        language: ["Japanese", "Hindi"],
        channel: "AnimePlanet",
        type: "anime", // Movie, Series, Anime !?
        season: 1,
        homeShow: false,
        description: "Kiteretsu, a young inventor, creates fantastic gadgets and adventures alongside his robot friend Korosuke.",
        image: {
            url: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744431416/anime_27_hiuyjr.webp",
            filename: "Kiteretsu"
        },
        banner: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744437183/bannerAnime_27_srl1k1.webp",
        trailer: "https://www.youtube.com/embed/mEEsjJjB40Q",
        year: 1988
    },
    {
        title: "Kochikame",
        watch: "https://www.youtube.com/embed/rOO_AqqeOFw?list=PL_FCTgiNzNIICeyGBC0jCCt4-bqvqoThp",
        genre: ["Comedy", "Slice of Life"],
        language: ["Japanese", "Hindi"],
        channel: "AnimePlanet",
        type: "anime", // Movie, Series, Anime !?
        season: 1,
        homeShow: false,
        description: "Kankichi Ryotsu, a trouble-making yet loveable police officer, navigates everyday life with hilarious antics and bizarre inventions.",
        image: {
            url: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744431417/anime_28_fud8ow.webp",
            filename: "Kochikame"
        },
        banner: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744437177/bannerAnime_18_mmsb4h.webp",
        trailer: "https://www.youtube.com/embed/KSzRiA4xeEA",
        year: 1996
    },
    {
        title: "Naruto Shippuden",
        watch: "https://www.youtube.com/embed/4xkhPieAbq0",
        genre: ["Action", "Adventure", "Fantasy"],
        language: ["Japanese", "English", "Hindi"],
        channel: "AnimePlanet",
        type: "anime", // Movie, Series, Anime !?
        season: 22,
        homeShow: false,
        recommended: true,
        randomTrailer: true,
        randomTrailerLink: "https://cdn.jsdelivr.net/gh/mishraRj/rjtv-trailers/Trailers/ns.mp4",
        randomImageLink: "https://res.cloudinary.com/dber1ydc9/image/upload/v1744096350/NS_uh9spn_v8jzw7_atmpzs.png",
        description: "Naruto Uzumaki returns to his village after two years of training to face the looming threat of Akatsuki while striving to protect his friends and become the Hokage.",
        image: {
            url: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744431415/anime_17_ggopdh.webp",
            filename: "Naruto_Shippuden"
        },
        banner: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744437192/bannerAnime_41_c6xfzb.webp",
        trailer: "https://www.youtube.com/embed/vEv-93G6LfM",
        year: 2007
    },
    {
        title: "Ninja Hattori",
        watch: "https://www.youtube.com/embed/8CyBBf4WVDU",
        genre: ["Comedy", "Adventure"],
        language: ["Japanese", "Hindi"],
        channel: "AnimePlanet",
        type: "anime", // Movie, Series, Anime !?
        season: 4,
        homeShow: false,
        recommended: true,
        description: "Ninja Hattori, a skilled ninja, helps his friend Kenichi overcome challenges in school and life with his ninja techniques.",
        image: {
            url: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744431415/anime_19_paodfv.webp",
            filename: "Ninja_Hattori"
        },
        banner: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744437180/bannerAnime_20_nbpfly.webp",
        trailer: "https://www.youtube.com/embed/9Bp55kw5E3M",
        year: 1981
    },
    {
        title: "Obochama Kun",
        watch: "https://www.youtube.com/embed/zAHbhwH6gPE",
        genre: ["Comedy", "Slice of Life"],
        language: ["Japanese", "Hindi"],
        channel: "AnimePlanet",
        type: "anime", // Movie, Series, Anime !?
        season: 2,
        homeShow: false,
        description: "The hilarious misadventures of Obochama, a wealthy but spoiled child, navigating life with his eccentric friends.",
        image: {
            url: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744431415/anime_20_pbedn5.webp",
            filename: "Obochama_Kun"
        },
        banner: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744437179/bannerAnime_21_g9077u.webp",
        trailer: "https://www.youtube.com/embed/5UOk-p8wp28",
        year: 1989
    },
    {
        title: "Vinland Saga",
        watch: "https://www.youtube.com/embed/Kg2D1SrUw48",
        genre: ["Action", "Adventure", "Historical"],
        language: ["Japanese", "English"],
        channel: "AnimePlanet",
        type: "anime", // Movie, Series, Anime !?
        season: 2,
        homeShow: false,
        recommended: true,
        description: "Thorfinn embarks on a journey filled with war and vengeance, seeking to avenge his father's death while discovering the true meaning of life.",
        image: {
            url: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744431453/anime_4_dsr67j.webp",
            filename: "Vinland_Saga"
        },
        banner: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744437203/bannerAnime_5_u3wght.webp",
        trailer: "https://www.youtube.com/embed/Ph50sNkApVM",
        year: 2019
    },
    {
        title: "Perman",
        watch: "https://www.youtube.com/embed/GG6Kut5b1lE?list=PL-BBhvleXlRfUVma1nMb8qgeuO8dI68py",
        genre: ["Comedy", "Adventure"],
        language: ["Japanese", "Hindi"],
        channel: "AnimePlanet",
        type: "anime", // Movie, Series, Anime !?
        season: 9,
        homeShow: false,
        description: "Mitsuo, a young boy, is chosen to be a superhero called 'Perman'. He must balance his superhero duties with his daily life.",
        image: {
            url: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744431893/anime_6_lyr2zm.webp",
            filename: "Perman"
        },
        banner: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744437173/bannerAnime_12_xgzgvh.webp",
        trailer: "https://www.youtube.com/embed/sRmn79a_H1g",
        year: 1967
    },
    {
        title: "Pokemon",
        watch: "https://www.youtube.com/embed/qvMitRMiczs?list=PLxjFnCWdSoEUR0iBvTDaTrCVeAn7_fi1E",
        genre: ["Adventure", "Fantasy", "Action"],
        language: ["Japanese", "English", "Hindi"],
        channel: "AnimePlanet",
        type: "anime", // Movie, Series, Anime !?
        season: 21,
        homeShow: false,
        description: "Ash Ketchum embarks on his journey to become a Pokémon Master, encountering various challenges, friends, and Pokémon along the way.",
        image: {
            url: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744431893/anime_7_u7kuqk.webp",
            filename: "Pokemon"
        },
        banner: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744437174/bannerAnime_13_yplfms.webp",
        trailer: "https://www.youtube.com/embed/NWf5u7gLogE",
        year: 1997
    },
    {
        title: "Ranking of Kings",
        watch: "https://www.youtube.com/embed/jNYt_vpP9Jo",
        genre: ["Fantasy", "Adventure", "Drama"],
        language: ["Japanese", "English"],
        channel: "AnimePlanet",
        type: "anime", // Movie, Series, Anime !?
        season: 2,
        homeShow: false,
        description: "Prince Bojji, a deaf and powerless prince, embarks on a courageous journey to prove his worth and claim his rightful place as king.",
        image: {
            url: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744431893/anime_9_uobzrx.webp",
            filename: "Ranking_of_Kings"
        },
        banner: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744437174/bannerAnime_15_sqjbvg.webp",
        trailer: "https://www.youtube.com/embed/Tr1ahorojPg",
        year: 2021
    },
    {
        title: "Spy X Family",
        watch: "https://www.youtube.com/embed/1AQtGDYVs7k",
        genre: ["Action", "Comedy", "Slice of Life"],
        language: ["Japanese", "English", "Hindi"],
        channel: "AnimePlanet",
        type: "anime", // Movie, Series, Anime !?
        season: 2,
        homeShow: false,
        recommended: true,
        description: "Twilight, a skilled spy, must build a fake family to infiltrate an elite school. Unbeknownst to him, his 'wife' is an assassin, and his 'daughter' is a telepath.",
        image: {
            url: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744431417/anime_3_d7lgnf.webp",
            filename: "Spy_X_Family"
        },
        banner: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744437190/bannerAnime_4_eiifli.webp",
        trailer: "https://www.youtube.com/embed/CCXLUQzuigw",
        year: 2022
    },
    {
        title: "Welcome to the NHK",
        watch: "https://www.youtube.com/embed/_MVw_NT7uPM",
        genre: ["Psychological", "Drama", "Slice of Life"],
        language: ["Japanese", "English"],
        channel: "AnimePlanet",
        type: "anime", // Movie, Series, Anime !?
        season: 1,
        homeShow: false,
        description: "Tatsuhiro Satou, a recluse struggling with paranoia and social anxiety, battles his inner demons and conspiracy theories while trying to reconnect with society.",
        image: {
            url: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744431415/anime_18_z9ykwt.webp",
            filename: "Welcome_to_NHK"
        },
        banner: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744437204/bannerAnime_7_ahngfd.webp",
        trailer: "https://www.youtube.com/embed/QYLsjJ8RThQ",
        year: 2006
    },
    {
        title: "Zatch Bell",
        watch: "https://www.youtube.com/embed/YVPd6-_0MUQ",
        genre: ["Action", "Fantasy", "Adventure"],
        language: ["Japanese", "English", "Hindi"],
        channel: "AnimePlanet",
        type: "anime", // Movie, Series, Anime !?
        season: 1,
        homeShow: true,
        description: "Kiyo Takamine partners with Zatch Bell, a young demon, in a battle to become the demon world's king by defeating other Mamodo with spell books.",
        image: {
            url: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744431415/anime_2_wfmmql.webp",
            filename: "Zatch_Bell"
        },
        banner: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744437178/bannerAnime_2_ckvk9p.webp",
        trailer: "https://www.youtube.com/embed/YEFm9Vn9-lw",
        year: 2003
    },
    {
    title: "Solo Leveling",
    watch: "https://www.youtube.com/embed/IrHTT2IEKpE",
    genre: ["Action", "Fantasy", "Adventure"],
    language: ["Japanese", "English"],
    channel: "AnimePlanet",
    type: "anime",
    season: 2,
    homeShow: true,
    recommended: true,
    description: "Jinwoo Sung, the weakest hunter, gains the ability to level up infinitely after surviving a deadly dungeon. Now, he rises from the bottom to become the strongest hunter.",
    image: {
        url: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744431414/anime_12_mgdlwb.webp",
        filename: "Solo_Leveling"
    },
    banner: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744437176/bannerAnime_17_el0dfx.webp",
    trailer: "https://www.youtube.com/embed/bssSj4cKsrI",
    year: 2024
    },
    {
        title: "Dragon Ball Daima",
        watch: "https://www.youtube.com/embed/YUDbl9qBihk",
        genre: ["Shonen", "Action", "Thriller"],
        channel: "AnimePlanet",
        language: ["Hindi", "English", "Japaneese"],
        datasetType: "latestReleases",
        latest: true,
        type: "anime", // Movie, Series, Anime !?
        homeShow: true,
        description: "Goku and his friends mysteriously transform into younger versions of themselves. Now, they must embark on a new adventure across the universe to uncover the truth and restore their original forms.",
        image: {
            url: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744431126/DB_Daima_jebc7c.webp",
            filename: "DeadpoolNdWolv"
        },
        banner: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744430912/LR_1_rhgf2a.webp",
        trailer: "https://www.youtube.com/embed/0wMBz2xdI_s",
        year: 2025
    }
];

const animeMovies = [
    {
        title: "Doraemon Movie: Doraebian Night",
        watch: "https://www.youtube.com/embed/d5DYvfvLy70?list=PLTkWEyjQddDwwr1DRgYvwGMoqHN8oGgN5",
        genre: ["Adventure", "Fantasy", "Comedy"],
        language: ["Japanese", "Hindi"],
        channel: "AnimePlanet",
        type: "movie", // Movie, Series, Anime !?
        homeShow: true,
        recommended: true,
        description: "Doraemon and friends get transported to the world of Arabian Nights, where they must face dangerous encounters and thrilling adventures to return home safely.",
        image: {
            url: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744431436/anime_34_ddybpx.webp",
            filename: "Doraebian_Night"
        },
        banner: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744437185/bannerAnime_30_dpwkm4.webp",
        trailer: "https://www.youtube.com/embed/52hZDbqgGZI",
        year: 1991
    },
    {
        title: "Doraemon: Nobita and the Three Magical Swordsmen",
        watch: "https://www.youtube.com/embed/F9EcP_KpaE4",
        genre: ["Adventure", "Fantasy", "Comedy"],
        language: ["Japanese", "Hindi"],
        channel: "AnimePlanet",
        type: "movie", // Movie, Series, Anime !?
        homeShow: true,
        description: "In a magical dream world, Doraemon and his friends become brave swordsmen tasked with saving a kingdom from an evil threat.",
        image: {
            url: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744431437/anime_37_kwiln0.webp",
            filename: "Three_Magical_Swordsmen"
        },
        banner: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744437185/bannerAnime_31_cpqxdd.webp",
        trailer: "https://www.youtube.com/embed/1gSSg9-iVXY",
        year: 1994
    },
    {
        title: "Doraemon: Nobita's Great Adventure in the South Seas",
        watch: "https://www.youtube.com/embed/yBaJ_bdvMWU",
        genre: ["Adventure", "Fantasy", "Comedy"],
        language: ["Japanese", "Hindi"],
        channel: "AnimePlanet",
        type: "movie", // Movie, Series, Anime !?
        homeShow: false,
        recommended: true,
        description: "Doraemon and friends embark on a thrilling adventure in the deep seas, facing pirates and dangerous underwater creatures.",
        image: {
            url: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744431436/anime_35_qqbfov.webp",
            filename: "Doraemon_South_Seas"
        },
        banner: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744437186/bannerAnime_32_ramqnu.webp",
        trailer: "https://www.youtube.com/embed/yBaJ_bdvMWU",
        year: 1998
    },
    {
        title: "Doraemon: Nobita and the Steel Troops",
        watch: "https://www.youtube.com/embed/g_ssgGiUIkE",
        genre: ["Adventure", "Sci-Fi", "Action"],
        language: ["Japanese", "Hindi"],
        channel: "AnimePlanet",
        type: "movie", // Movie, Series, Anime !?
        homeShow: false,
        description: "Doraemon and Nobita must save the world from an army of steel robots threatening to conquer Earth.",
        image: {
            url: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744431436/anime_36_krovz5.webp",
            filename: "Doraemon_Steel_Troops"
        },
        banner: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744437187/bannerAnime_33_t3m1w6.webp",
        trailer: "https://www.youtube.com/embed/QfgR6o5-Rxc",
        year: 1986
    },
    {
        title: "Howl's Moving Castle",
        watch: "https://www.youtube.com/embed/ARCQf2CEr8k",
        genre: ["Adventure", "Fantasy", "Romance"],
        language: ["Japanese", "English"],
        channel: "AnimePlanet",
        type: "movie", // Movie, Series, Anime !?
        homeShow: false,
        recommended: true,
        description: "Sophie, a young woman, is cursed by a witch and transformed into an old woman. She seeks refuge in the magical moving castle of the wizard Howl, embarking on an enchanting journey of love and self-discovery.",
        image: {
            url: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744431416/anime_23_uiaotf.webp",
            filename: "Howls_Moving_Castle"
        },
        banner: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744437180/bannerAnime_23_zbbwnm.webp",
        trailer: "https://www.youtube.com/embed/DJeUGpcle8s",
        year: 2004
    },
    {
        title: "Ramayana: The Legend of Prince Rama",
        watch: "https://www.youtube.com/embed/tNSjiqxvxRw?list=PLH2vTfKoGZeERD0TrpU0BNARE8OS85lho",
        genre: ["Mythology", "Adventure", "Action"],
        language: ["Japanese", "Hindi", "English"],
        channel: "AnimePlanet",
        type: "movie", // Movie, Series, Anime !?
        homeShow: false,
        recommended: true,
        description: "A stunning retelling of the Indian epic Ramayana, showcasing the heroic journey of Prince Rama as he battles the demon king Ravana to rescue his wife, Sita.",
        image: {
            url: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744431893/anime_8_sysega.webp",
            filename: "Ramayana_Legend_Of_Rama"
        },
        banner: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744437174/bannerAnime_14_nc6d1o.webp",
        trailer: "https://www.youtube.com/embed/QPkdkknzUkQ",
        year: 1992
    },
    {
        title: "A Silent Voice",
        watch: "https://www.youtube.com/embed/MsqyMDF0Wpw",
        genre: ["Drama", "Slice of Life", "Romance"],
        language: ["Japanese", "English"],
        channel: "AnimePlanet",
        type: "movie", // Movie, Series, Anime !?
        homeShow: false,
        description: "A touching story about redemption and forgiveness as a former bully tries to make amends with a deaf girl he once tormented.",
        image: {
            url: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744431414/anime_11_iq6cvf.webp",
            filename: "Silent_Voice"
        },
        banner: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744437174/bannerAnime_16_ewh92k.webp",
        trailer: "https://www.youtube.com/embed/TQK9By9qQiw",
        year: 2016
    },
    {
        title: "Spirited Away",
        watch: "https://www.youtube.com/embed/70NhEBzLKU8",
        genre: ["Adventure", "Fantasy", "Mystery"],
        language: ["Japanese", "English"],
        channel: "AnimePlanet",
        type: "movie", // Movie, Series, Anime !?
        homeShow: false,
        recommended: true,
        description: "Chihiro, a young girl, enters a mysterious world of spirits and must work at a magical bathhouse to save her parents, who have been transformed into pigs.",
        image: {
            url: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744431414/anime_13_x0lli8.webp",
            filename: "Spirited_Away"
        },
        banner: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744437184/bannerAnime_3_fcp80r.webp",
        trailer: "https://www.youtube.com/embed/fDUFP7EeXLE",
        year: 2001
    },
    {
        title: "Your Name",
        watch: "https://www.youtube.com/embed/frIul5u5dXc",
        genre: ["Romance", "Fantasy", "Drama"],
        language: ["Japanese", "English"],
        channel: "AnimePlanet",
        type: "movie", // Movie, Series, Anime !?
        homeShow: false,
        recommended: true,
        description: "Two strangers find themselves mysteriously connected through vivid dreams and body-swapping, embarking on a journey to find each other.",
        image: {
            url: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744431413/anime_1_kbga8n.webp",
            filename: "Your_Name"
        },
        banner: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744437173/bannerAnime_1_aiy2rw.webp",
        trailer: "https://www.youtube.com/embed/s0wTdCQoc2k",
        year: 2016
    },
    {
        title: "Dragon Ball Super: Superhero",
        watch: "https://www.youtube.com/embed/ZQb93cgk_VE",
        genre: ["Shonen", "Fantasy", "Action"],
        language: ["Hindi", "English"],
        channel: "AnimePlanet",
        type: "movie", // Movie, Series, Anime !?
        homeShow: true,
        trending: true,
        recommended: true,
        randomTrailer: true,
        randomTrailerLink: "https://cdn.jsdelivr.net/gh/mishraRj/rjtv-trailers/Trailers/dbssh.mp4",
        randomImageLink: "https://res.cloudinary.com/dber1ydc9/image/upload/v1744096347/DBS_SuperHero_r9jel5_i60mda_yyxicl.png",
        description: "Piccolo and Gohan join forces to protect Earth from a new threat as the Red Ribbon Army resurfaces, unleashing powerful androids in an epic battle for survival.",
        image: {
            url: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744431483/anime_40_trz5z7.webp",
            filname: "conjuring2"
        },
        banner: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744437190/bannerAnime_39_th5jgu.webp",
        trailer: "https://www.youtube.com/embed/5nY9eXbRzlg",
        year: 2022
    },
    {
        title: "Jujutsu Kaise: Zero",
        watch: "https://www.youtube.com/embed/9xnSDHDW5QQ",
        genre: ["Shonen", "Fantasy", "Action"],
        language: ["Hindi", "English"],
        channel: "AnimePlanet",
        type: "movie", // Movie, Series, Anime !?
        homeShow: true,
        trending: true,
        recommended: true,
        randomTrailer: true,
        randomTrailerLink: "https://cdn.jsdelivr.net/gh/mishraRj/rjtv-trailers/Trailers/jjk.mp4",
        randomImageLink: "https://res.cloudinary.com/dber1ydc9/image/upload/v1744096347/JJk0_pgzidx_nxoewd_swkyvh.png",
        description: "Yuta Okkotsu gains control of an extremely powerful, cursed spirit and gets enrolled in the Tokyo Prefectural Jujutsu High School by sorcerers to help him control his power and keep an eye on him",
        image: {
            url: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744431416/anime_25_ikgh90.webp",
            filname: "conjuring2"
        },
        banner: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744437182/bannerAnime_26_wovvjb.webp",
        trailer: "https://www.youtube.com/embed/2docezZl574",
        year: 2022
    },
];

module.exports = { animes, animeMovies } ;