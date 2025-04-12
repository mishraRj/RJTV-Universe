const phase1 = [
    {
        title: "Spider-Man",
        watch: "https://www.youtube.com/embed/UDSfJaVC0KY",
        genre: ["Action", "Adventure", "Superhero"],
        language: ["Hindi", "English"],
        channel: "MarvelPlanet",
        mcuPhase: 0,
        category: "Sony",
        type: "movie", // Movie, Series, Anime !?
        homeShow: false,
        description: "Peter Parker, a high school student, gains spider-like abilities and must face the Green Goblin while balancing his personal life.",
        image: {
            url: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106836/SpideRmAN_1_sbj9pq_vyle9y.webp",
            filename: "Spider_Man_2002"
        },
        banner: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106783/sp1_xfy31k_favl4z.webp",
        trailer: "https://www.youtube.com/embed/t06RUxPbp_c",
        year: 2002
    },
    {
        title: "Spider-Man 2",
        watch: "https://www.youtube.com/embed/r_W6mXqzJNU",
        genre: ["Action", "Adventure", "Superhero"],
        language: ["Hindi", "English"],
        channel: "MarvelPlanet",
        mcuPhase: 0,
        category: "Sony",
        type: "movie", // Movie, Series, Anime !?
        homeShow: false,
        description: "Peter Parker struggles with his dual identity as Spider-Man while facing a new enemy, Doctor Octopus.",
        image: {
            url: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106835/sp2_dgbvmf_i1nvna.webp",
            filename: "Spider_Man_2"
        },
        banner: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106783/sp2_xwoqla_usyi28.webp",
        trailer: "https://www.youtube.com/embed/1s9Yln0YwCw",
        year: 2004
    },
    {
        title: "Spider-Man 3",
        watch: "https://www.youtube.com/embed/HTZsyW9um8c",
        genre: ["Action", "Adventure", "Superhero"],
        language: ["Hindi", "English"],
        channel: "MarvelPlanet",
        mcuPhase: 0,
        category: "Sony",
        type: "movie", // Movie, Series, Anime !?
        homeShow: false,
        description: "Peter Parker faces new challenges as he battles the Sandman, the return of Harry Osborn, and his own dark side due to the symbiote.",
        image: {
            url: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106835/sp3_m2dzfv_xu6hhz.webp",
            filename: "Spider_Man_3"
        },
        banner: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106783/sp3_cx7uoi_uecdav.webp",
        trailer: "https://www.youtube.com/embed/e5wUilOeOmg",
        year: 2007
    },
    {
        title: "The Amazing Spider-Man",
        watch: "https://www.youtube.com/embed/o_JzihiWvlQ",
        genre: ["Action", "Adventure", "Superhero"],
        language: ["Hindi", "English"],
        channel: "MarvelPlanet",
        mcuPhase: 0,
        category: "Sony",
        type: "movie", // Movie, Series, Anime !?
        homeShow: false,
        description: "A teenage Peter Parker discovers his father's research and faces the deadly Lizard while learning to be a hero.",
        image: {
            url: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106777/AmzSP1_fhn1wm_auyiwk.webp",
            filename: "The_Amazing_Spider_Man"
        },
        banner: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106779/AMXSP1_nphzju_e6ildz.webp",
        trailer: "https://www.youtube.com/embed/-tnxzJ0SSOw",
        year: 2012
    },
    {
        title: "The Amazing Spider-Man 2",
        watch: "https://www.youtube.com/embed/2d5-SzWQ-2k",
        genre: ["Action", "Adventure", "Superhero"],
        language: ["Hindi", "English"],
        channel: "MarvelPlanet",
        mcuPhase: 0,
        category: "Sony",
        type: "movie", // Movie, Series, Anime !?
        homeShow: false,
        description: "Peter Parker battles Electro, faces the return of Harry Osborn, and learns painful truths about his past.",
        image: {
            url: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106778/AMZSP2_dwra57_lmbf4t.webp",
            filename: "The_Amazing_Spider_Man_2"
        },
        banner: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106779/AMZSP2_ynb2ia_shym22.webp",
        trailer: "https://www.youtube.com/embed/nbp3Ra3Yp74",
        year: 2014
    },
    {
        title: "Iron Man",
        watch: "https://www.youtube.com/embed/WNu6fRo_7fg",
        genre: ["Fantasy", "Action", "Sci-Fi"],
        language: ["Hindi", "English"],
        channel: "MarvelPlanet",
        mcuPhase: 1,
        type: "movie", // Movie, Series, Anime !?
        homeShow: false,
        description: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
        image: {
            url: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106833/IM1_jxa7ue_l0tikm.webp",
            filename: "Iron_Man"
        },
        banner: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106782/iron-man_pjy7dk_c86gy2.webp",
        trailer: "https://www.youtube.com/embed/8ugaeA-nMTc",
        year: 2008
    },
    {
        title: "The Incredible Hulk",
        watch: "https://www.youtube.com/embed/DIhrvt8o2io",
        genre: ["Fantasy", "Action", "Sci-Fi"],
        language: ["Hindi", "English"],
        channel: "MarvelPlanet",
        mcuPhase: 1,
        type: "movie", // Movie, Series, Anime !?
        homeShow: false,
        description: "Bruce Banner, a scientist on the run from the U.S. government, must find a cure for the monster inside him while being pursued by a relentless enemy.",
        image: {
            url: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106836/The_Incredible_Hulk_u6zdgo_zi35o6.webp",
            filename: "Incredible_Hulk"
        },
        banner: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106784/the-incredible-hulk_lqjidi_du6ubn.webp",
        trailer: "https://www.youtube.com/embed/xbqNb2PFKKA",
        year: 2008
    },
    {
        title: "Iron Man 2",
        watch: "https://www.youtube.com/embed/fFBYy8PFxHg",
        genre: ["Fantasy", "Action", "Sci-Fi"],
        language: ["Hindi", "English"],
        channel: "MarvelPlanet",
        mcuPhase: 1,
        type: "movie", // Movie, Series, Anime !?
        homeShow: false,
        description: "With the world now aware of his identity as Iron Man, Tony Stark faces pressure from the government and a new enemy, Whiplash.",
        image: {
            url: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106834/iron-man2_jrqycu_anzhkr.webp",
            filename: "Iron_Man_2"
        },
        banner: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106783/SGVO745-iron-man-2-wallpaper-hd_heocv3_nkpbdd.webp",
        trailer: "https://www.youtube.com/embed/BoohRoVA9WQ",
        year: 2010
    },
    {
        title: "Thor",
        watch: "https://www.youtube.com/embed/_IfYZZDTays",
        genre: ["Fantasy", "Action", "Adventure"],
        language: ["Hindi", "English"],
        channel: "MarvelPlanet",
        mcuPhase: 1,
        type: "movie", // Movie, Series, Anime !?
        homeShow: false,
        description: "The powerful but arrogant god Thor is cast out of Asgard and forced to live among humans on Earth, where he learns humility.",
        image: {
            url: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106837/Thor_s3x8rb_r6migx.webp",
            filename: "Thor"
        },
        banner: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106785/Thor_g7n9h8_svqr4j.webp",
        trailer: "https://www.youtube.com/embed/JOddp-nlNvQ",
        year: 2011
    },
    {
        title: "Captain America: The First Avenger",
        watch: "https://www.youtube.com/embed/gZa82Xz1nys",
        genre: ["Fantasy", "Action", "Adventure"],
        language: ["Hindi", "English"],
        channel: "MarvelPlanet",
        mcuPhase: 1,
        type: "movie", // Movie, Series, Anime !?
        homeShow: false,
        description: "Steve Rogers, a weak but determined soldier, is transformed into Captain America and must battle the Nazi organization Hydra.",
        image: {
            url: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106786/CA1_crbpjj_bxf62j.webp",
            filename: "Captain_America_First_Avenger"
        },
        banner: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106780/CA1_mefr4y_yvs1qw.webp",
        trailer: "https://www.youtube.com/embed/JerVrbLldXw",
        year: 2011
    },
    {
        title: "The Avengers",
        watch: "https://www.youtube.com/embed/atOgj_ZaO7M",
        genre: ["Fantasy", "Action", "Sci-Fi"],
        language: ["Hindi", "English"],
        channel: "MarvelPlanet",
        mcuPhase: 1,
        category: "Avengers",
        type: "movie", // Movie, Series, Anime !?
        homeShow: true,
        description: "Earth's mightiest heroes must come together to stop Loki and his alien army from enslaving humanity.",
        image: {
            url: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106778/Avengers_sn4eea_iiuqvj.webp",
            filename: "The_Avengers"
        },
        banner: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106786/wp2613062-wallpaper-avengers_ytgk9k_wwrq8b.webp",
        trailer: "https://www.youtube.com/embed/NxUCAnAjHKo",
        year: 2012
    }
];

const phase2 = [
    {
        title: "Iron Man 3",
        watch: "https://www.youtube.com/embed/cseyd_CRKF0",
        genre: ["Fantasy", "Action", "Sci-Fi"],
        language: ["Hindi", "English"],
        channel: "MarvelPlanet",
        mcuPhase: 2,
        type: "movie", // Movie, Series, Anime !?
        homeShow: false,
        description: "Tony Stark faces a powerful terrorist known as the Mandarin and must rely on his ingenuity and allies to protect those he loves.",
        image: {
            url: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106834/IM3_ypkhxp_vdh8ie.webp",
            filename: "Iron_Man_3"
        },
        banner: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106782/im3_bvktrg_kqo7pq.webp",
        trailer: "https://www.youtube.com/embed/f_h95mEd4TI",
        year: 2013
    },
    {
        title: "Thor: The Dark World",
        watch: "https://www.youtube.com/embed/-oGAMiZoCu8",
        genre: ["Fantasy", "Action", "Adventure"],
        language: ["Hindi", "English"],
        channel: "MarvelPlanet",
        mcuPhase: 2,
        type: "movie", // Movie, Series, Anime !?
        homeShow: false,
        recommended: true,
        description: "Thor teams up with Loki to stop Malekith, the dark elf, from using the Aether to plunge the universe into darkness.",
        image: {
            url: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106837/Thor2_zxzeby_h9cfnk.webp",
            filename: "Thor_Dark_World"
        },
        banner: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106784/Thor2_iatrqn_lletrv.webp",
        trailer: "https://www.youtube.com/embed/npvJ9FTgZbM",
        year: 2013
    },
    {
        title: "Captain America: The Winter Soldier",
        watch: "https://www.youtube.com/embed/2bWWBjKEiZA",
        genre: ["Fantasy", "Action", "Thriller"],
        language: ["Hindi", "English"],
        channel: "MarvelPlanet",
        mcuPhase: 2,
        type: "movie", // Movie, Series, Anime !?
        homeShow: false,
        recommended: true,
        description: "Steve Rogers struggles to embrace his role in the modern world and battles the mysterious Winter Soldier, a deadly assassin with a shocking identity.",
        image: {
            url: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106796/CA2_ya2re2_f42ugq.webp",
            filename: "Captain_America_Winter_Soldier"
        },
        banner: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106780/CA2_p7mwse_uzyjek.webp",
        trailer: "https://www.youtube.com/embed/7SlILk2WMTI",
        year: 2014
    },
    {
        title: "Guardians of the Galaxy Vol. 1",
        watch: "https://www.youtube.com/embed/S3wf3Pf_oEs",
        genre: ["Fantasy", "Action", "Comedy"],
        language: ["Hindi", "English"],
        channel: "MarvelPlanet",
        mcuPhase: 2,
        type: "movie", // Movie, Series, Anime !?
        homeShow: false,
        recommended: true,
        description: "A group of intergalactic criminals, led by Star-Lord, must work together to stop the fanatical villain Ronan from obtaining an all-powerful orb.",
        image: {
            url: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106833/GOG1_ynfm2d_a65w7k.webp",
            filename: "Guardians_of_the_Galaxy_Vol_1"
        },
        banner: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106781/GOG1_xg2wl5_bu5zyi.webp",
        trailer: "https://www.youtube.com/embed/d96cjJhvlMA",
        year: 2014
    },
    {
        title: "Avengers: Age of Ultron",
        watch: "https://www.youtube.com/embed/gjq6jwgSk64",
        genre: ["Fantasy", "Action", "Sci-Fi"],
        language: ["Hindi", "English"],
        channel: "MarvelPlanet",
        mcuPhase: 2,
        category: "Avengers",
        type: "movie", // Movie, Series, Anime !?
        homeShow: false,
        description: "The Avengers must assemble once again to stop Ultron, an AI bent on wiping out humanity, while also encountering new powerful allies.",
        image: {
            url: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106778/avengers-age-of-ultron_ar9awc_gxws9g.webp",
            filename: "Avengers_Age_of_Ultron"
        },
        banner: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106780/avengers-age-of-ultron_t61vsp_f9hhzy.webp",
        trailer: "https://www.youtube.com/embed/ZeIa7xGDq8c",
        year: 2015
    },
    {
        title: "Ant-Man",
        watch: "https://www.youtube.com/embed/W86hhvgAPNQ",
        genre: ["Fantasy", "Action", "Comedy"],
        language: ["Hindi", "English"],
        channel: "MarvelPlanet",
        mcuPhase: 2,
        type: "movie", // Movie, Series, Anime !?
        homeShow: false,
        description: "Con artist Scott Lang must embrace his inner hero when he is given a suit that allows him to shrink in size while increasing his strength.",
        image: {
            url: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106778/Ant_Man_nrdaid_k1lcwy.webp",
            filename: "Ant_Man"
        },
        banner: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106779/Ant_Man_yr6jj5_yntzqn.webp",
        trailer: "https://www.youtube.com/embed/aunT6UaU99Q",
        year: 2015
    }
];

const phase3 = [
    {
        title: "Captain America: Civil War",
        watch: "https://www.youtube.com/embed/GV9AEEIeHrQ",
        genre: ["Fantasy", "Action", "Thriller"],
        language: ["Hindi", "English"],
        channel: "MarvelPlanet",
        mcuPhase: 3,
        type: "movie", // Movie, Series, Anime !?
        homeShow: true,
        recommended: true,
        description: "Political interference in the Avengers' activities causes a rift between Captain America and Iron Man, leading to a hero-on-hero showdown.",
        image: {
            url: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106814/Civil_War_xwfftx_qkcb2g.webp",
            filename: "Captain_America_Civil_War"
        },
        banner: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106785/wp1809485-captain-america-civil-war-wallpapers_rspczt_z2iv2b.webp",
        trailer: "https://www.youtube.com/embed/IxxmvrrSSNQ",
        year: 2016
    },
    {
        title: "Doctor Strange",
        watch: "https://www.youtube.com/embed/DCrFkaZL254",
        genre: ["Fantasy", "Action", "Sci-Fi"],
        language: ["Hindi", "English"],
        channel: "MarvelPlanet",
        mcuPhase: 3,
        type: "movie", // Movie, Series, Anime !?
        homeShow: true,
        description: "A brilliant surgeon loses his hands in an accident and discovers the mystical arts, becoming the Sorcerer Supreme to protect reality itself.",
        image: {
            url: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106832/Doctor_Strange_npghim_cyqiug.webp",
            filename: "Doctor_Strange"
        },
        banner: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106785/wp2028630-dr-strange-wallpapers_thsu5j_fejm5k.webp",
        trailer: "https://www.youtube.com/embed/2aZEtr86NE0",
        year: 2016
    },
    {
        title: "Guardians of the Galaxy Vol. 2",
        watch: "https://www.youtube.com/embed/LwycTov0WtU",
        genre: ["Fantasy", "Action", "Comedy"],
        language: ["Hindi", "English"],
        channel: "MarvelPlanet",
        mcuPhase: 3,
        type: "movie", // Movie, Series, Anime !?
        homeShow: false,
        recommended: true,
        description: "Star-Lord and his crew face personal revelations and new threats as they unravel the mystery of Peter Quill's parentage.",
        image: {
            url: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106833/GOG2_wwggfq_zfq6pl.webp",
            filename: "Guardians_of_the_Galaxy_Vol_2"
        },
        banner: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106781/gog2_o9iv40_w05new.webp",
        trailer: "https://www.youtube.com/embed/wUn05hdkhjM",
        year: 2017
    },
    {
        title: "Spider-Man: Homecoming",
        watch: "https://www.youtube.com/embed/kihlcXGgPEU",
        genre: ["Fantasy", "Action", "Adventure"],
        language: ["Hindi", "English"],
        channel: "MarvelPlanet",
        mcuPhase: 3,
        category: "Sony",
        type: "movie", // Movie, Series, Anime !?
        homeShow: false,
        description: "Peter Parker, with guidance from Tony Stark, learns to balance his life as a high school student and his role as Spider-Man while facing the Vulture.",
        image: {
            url: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106836/SP_HomeComing_ysssnl_uehhih.webp",
            filename: "Spider_Man_Homecoming"
        },
        banner: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106783/SP_HomeComing_laqxrg_qzqyay.webp",
        trailer: "https://www.youtube.com/embed/xuaChFO2Q0Y",
        year: 2017
    },
    {
        title: "Thor: Ragnarok",
        watch: "https://www.youtube.com/embed/JZ_IqU4kELA",
        genre: ["Fantasy", "Action", "Comedy"],
        language: ["Hindi", "English"],
        channel: "MarvelPlanet",
        mcuPhase: 3,
        type: "movie", // Movie, Series, Anime !?
        homeShow: true,
        recommended: true,
        description: "Thor must escape from the planet Sakaar and stop Ragnarok, the destruction of Asgard, while battling his long-lost sister, Hela.",
        image: {
            url: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106837/thor3_rfm7s0_pcsubf.webp",
            filename: "Thor_Ragnarok"
        },
        banner: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106786/wp2497195-thor-ragnarok-hd-wallpapers_zmn5dm_vsu83p.webp",
        trailer: "https://www.youtube.com/embed/NNvt4OS7mhA",
        year: 2017
    },
    {
        title: "Black Panther",
        watch: "https://www.youtube.com/embed/4MVQXdtrEQM",
        genre: ["Fantasy", "Action", "Sci-Fi"],
        language: ["Hindi", "English"],
        channel: "MarvelPlanet",
        mcuPhase: 3,
        type: "movie", // Movie, Series, Anime !?
        homeShow: true,
        recommended: true,
        description: "T'Challa returns to Wakanda as king, but he must defend his nation against an outsider who challenges his right to the throne.",
        image: {
            url: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106786/BP_v8jakx_whzcpz.webp",
            filename: "Black_Panther"
        },
        banner: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106780/black-panther-in-wakanda-pfrdpcml5xwh40a0_hwo2mu_s5hrdw.webp",
        trailer: "https://www.youtube.com/embed/8HLovZBBebE",
        year: 2018
    },
    {
        title: "Avengers: Infinity War",
        watch: "https://www.youtube.com/embed/EpI3x6gf2uA",
        genre: ["Fantasy", "Action", "Sci-Fi"],
        language: ["Hindi", "English"],
        channel: "MarvelPlanet",
        mcuPhase: 3,
        category: "Avengers",
        type: "movie", // Movie, Series, Anime !?
        homeShow: true,
        recommended: true,
        description: "The Avengers and their allies must stop Thanos from collecting all six Infinity Stones and wiping out half of all life in the universe.",
        image: {
            url: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106778/Avengers_Infinity_War_bghglz_f89yih.webp",
            filename: "Avengers_Infinity_War"
        },
        banner: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106779/913734_lygmbw_wqecy1.webp",
        trailer: "https://www.youtube.com/embed/twXfolLOiHc",
        year: 2018
    },
    {
        title: "Ant-Man and the Wasp",
        watch: "https://www.youtube.com/embed/RRz8C6qat9M",
        genre: ["Fantasy", "Action", "Comedy"],
        language: ["Hindi", "English"],
        channel: "MarvelPlanet",
        mcuPhase: 3,
        type: "movie", // Movie, Series, Anime !?
        homeShow: false,
        description: "Scott Lang teams up with Hope van Dyne, aka The Wasp, on a new mission that uncovers secrets from their past.",
        image: {
            url: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106778/Ant_Man_and_Wasp_cqgcmt_lx6dnw.webp",
            filename: "Ant_Man_and_The_Wasp"
        },
        banner: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106779/Ant_Man_and_wasp_vxonee_w3bakh.webp",
        trailer: "https://www.youtube.com/embed/MJkn2hTQtZs",
        year: 2018
    },
    {
        title: "Captain Marvel",
        watch: "https://www.youtube.com/embed/gGV-JOOq6z4",
        genre: ["Fantasy", "Action", "Sci-Fi"],
        language: ["Hindi", "English"],
        channel: "MarvelPlanet",
        mcuPhase: 3,
        type: "movie", // Movie, Series, Anime !?
        homeShow: false,
        description: "Carol Danvers becomes one of the universe's most powerful heroes as Earth is caught in the middle of a galactic war between alien races.",
        image: {
            url: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106831/CM_xfxgow_frewc9.webp",
            filename: "Captain_Marvel"
        },
        banner: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106780/CM_n0ikot_gqsona.webp",
        trailer: "https://www.youtube.com/embed/QyUE4xibgAM",
        year: 2019
    },
    {
        title: "Avengers: Endgame",
        watch: "https://www.youtube.com/embed/um9vDMoH5ns",
        genre: ["Fantasy", "Action", "Sci-Fi"],
        language: ["Hindi", "English"],
        channel: "MarvelPlanet",
        mcuPhase: 3,
        category: "Avengers",
        type: "movie", // Movie, Series, Anime !?
        homeShow: true,
        trending: true,
        recommended: true,
        description: "The surviving Avengers devise a plan to restore those lost in the Snap, leading to an epic showdown against Thanos.",
        image: {
            url: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106832/Endgame_rgodqd_aaxxww.webp",
            filename: "Avengers_Endgame"
        },
        banner: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106778/1003220_ptabeq_icrwo2.webp",
        trailer: "https://www.youtube.com/embed/LPhqL4DqzBg",
        year: 2019
    },
    {
        title: "Spider-Man: Far From Home",
        watch: "https://www.youtube.com/embed/EgiJtMkgTIA",
        genre: ["Fantasy", "Action", "Adventure"],
        language: ["Hindi", "English"],
        channel: "MarvelPlanet",
        mcuPhase: 3,
        category: "Sony",
        type: "movie", // Movie, Series, Anime !?
        homeShow: false,
        description: "Peter Parker goes on a European vacation but is drawn into a battle against mysterious elemental creatures, with Mysterio offering unexpected help.",
        image: {
            url: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106836/SP_Far_From_Home_nvf7ao_ijrm8d.webp",
            filename: "Spider_Man_Far_From_Home"
        },
        banner: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106783/spider-man-far-from-home_k3cxan_qamm3v.webp",
        trailer: "https://www.youtube.com/embed/VJfBMtAmvbw",
        year: 2019
    },
    {
        title: "Venom",
        watch: "https://www.youtube.com/embed/8MO_dtnpiHc",
        genre: ["Action", "Sci-Fi", "Thriller"],
        language: ["Hindi", "English"],
        channel: "MarvelPlanet",
        mcuPhase: 3,
        category: "Sony",
        type: "movie", // Movie, Series, Anime !?
        homeShow: false,
        description: "Journalist Eddie Brock becomes the host of an alien symbiote that grants him superhuman abilities, transforming him into the lethal protector, Venom.",
        image: {
            url: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106837/Venom_tmxpwu_xq6uf9.webp",
            filename: "Venom"
        },
        banner: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106785/Venom_yt0dpa_fvvggc.webp",
        trailer: "https://www.youtube.com/embed/ISh7OmmhApU",
        year: 2018
    },
    {
        title: "Spider-Man: Into the Spider-Verse",
        watch: "https://www.youtube.com/embed/Uk08PZBLU1g",
        genre: ["Animation", "Action", "Adventure"],
        language: ["Hindi", "English"],
        channel: "MarvelPlanet",
        mcuPhase: 3,
        category: "Sony",
        type: "movie", // Movie, Series, Anime !?
        homeShow: false,
        recommended: true,
        description: "Teenager Miles Morales becomes Spider-Man and joins forces with different Spider-People from other dimensions to save the multiverse.",
        image: {
            url: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106836/SP_into_SPverse_rztas7_efzdju.webp",
            filename: "Spider_Man_Into_The_Spiderverse"
        },
        banner: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106784/SP_into_SpVerse_m3su3j_jyeosy.webp",
        trailer: "https://www.youtube.com/embed/LXCaGFnbHfY",
        year: 2018
    },
    {
        title: "Spider-Man: Across the Spider-Verse",
        watch: "https://www.youtube.com/embed/k80e7aQGSJ0",
        genre: ["Animation", "Action", "Adventure"],
        language: ["Hindi", "English"],
        channel: "MarvelPlanet",
        mcuPhase: 3,
        category: "Sony",
        type: "movie", // Movie, Series, Anime !?
        homeShow: false,
        recommended: true,
        description: "Miles Morales embarks on a thrilling journey across the multiverse, encountering new allies and dangerous foes in an epic Spider-People battle.",
        image: {
            url: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106836/SP_Across_Spiderverse_srpfsz_brwk2d.webp",
            filename: "Spider_Man_Across_The_Spiderverse"
        },
        banner: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106784/SP_into_SpVerse_m3su3j_jyeosy.webp",
        trailer: "https://www.youtube.com/embed/1cJAHCO147g",
        year: 2023
    }
];

const phase4 = [
    {
        title: "WandaVision",
        watch: "https://www.youtube.com/embed/vXgHNdx63Q4",
        genre: ["Fantasy", "Drama", "Superhero"],
        language: ["Hindi", "English"],
        channel: "MarvelPlanet",
        mcuPhase: 4,
        type: "Series", // Movie, Series, Anime !?
        season: 1,
        homeShow: false,
        description: "Wanda Maximoff and Vision find themselves in a suburban fantasy world, but as they start questioning reality, dark secrets unfold.",
        image: {
            url: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106838/wV_xnh5rd_extqwq.webp",
            filename: "WandaVision"
        },
        banner: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106786/WV_phqzwb_akw5or.webp",
        trailer: "https://www.youtube.com/embed/sj9J2ecsSpo",
        year: 2021
    },
    {
        title: "The Falcon and The Winter Soldier",
        watch: "https://www.youtube.com/embed/bA10OW0hOEg",
        genre: ["Action", "Drama", "Superhero"],
        language: ["Hindi", "English"],
        channel: "MarvelPlanet",
        mcuPhase: 4,
        type: "Series", // Movie, Series, Anime !?
        season: 1,
        homeShow: false,
        description: "Sam Wilson and Bucky Barnes team up to fight new threats while struggling to carry on Captain America's legacy.",
        image: {
            url: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106833/FAWS_gk4ece_kwhrhx.webp",
            filename: "Falcon_And_The_Winter_Soldier"
        },
        banner: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106784/the-falcon-and-the-winter-soldier_xovg4a_nwwjkr.webp",
        trailer: "https://www.youtube.com/embed/f1lJA95IzBM",
        year: 2021
    },
    {
        title: "Loki",
        watch: "https://www.youtube.com/embed/jztc5bBqtgA",
        genre: ["Fantasy", "Sci-Fi", "Superhero"],
        language: ["Hindi", "English"],
        channel: "MarvelPlanet",
        mcuPhase: 4,
        type: "Series", // Movie, Series, Anime !?
        season: 2,
        homeShow: false,
        description: "After escaping with the Tesseract, Loki is captured by the Time Variance Authority and embarks on a time-traveling adventure that reshapes reality.",
        image: {
            url: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106834/loki_ujxaps_s0npyo.webp",
            filename: "Loki"
        },
        banner: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106779/184982-3840x2160-desktop-4k-loki-wallpaper-photo_wm9pf6_xkd4ps.webp",
        trailer: "https://www.youtube.com/embed/h8Sw2Grt0JU",
        year: 2021
    },
    {
        title: "Black Widow",
        watch: "https://www.youtube.com/embed/fJNNWY-eMWA",
        genre: ["Action", "Thriller", "Superhero"],
        language: ["Hindi", "English"],
        channel: "MarvelPlanet",
        mcuPhase: 4,
        type: "movie", // Movie, Series, Anime !?
        homeShow: false,
        description: "Natasha Romanoff confronts the darker parts of her past when a dangerous conspiracy tied to her origins arises.",
        image: {
            url: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106786/BW_jz8asd_xf4ffb.webp",
            filename: "Black_Widow"
        },
        banner: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106780/BW_kcauob_bqpxd4.webp",
        trailer: "https://www.youtube.com/embed/K7J9fvGyAm4",
        year: 2021
    },
    {
        title: "What If...?",
        watch: "https://www.youtube.com/embed/YEMAgUh7k80",
        genre: ["Animation", "Sci-Fi", "Superhero"],
        language: ["Hindi", "English"],
        channel: "MarvelPlanet",
        mcuPhase: 4,
        type: "Series", // Movie, Series, Anime !?
        season: 3,
        homeShow: false,
        description: "This animated anthology series explores alternate realities where key moments in the Marvel Universe unfold differently.",
        image: {
            url: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106837/WHat_if_mrkxyi_mucmk3.webp",
            filename: "What_If"
        },
        banner: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106785/What_if_br4b6c_x2fyam.webp",
        trailer: "https://www.youtube.com/embed/x9D0uUKJ5KI",
        year: 2021
    },
    {
        title: "Shang-Chi and the Legend of the Ten Rings",
        watch: "https://www.youtube.com/embed/gxCtHmPOqtg",
        genre: ["Action", "Fantasy", "Superhero"],
        language: ["Hindi", "English"],
        channel: "MarvelPlanet",
        mcuPhase: 4,
        type: "movie", // Movie, Series, Anime !?
        homeShow: true,
        trending: true,
        recommended: true,
        description: "Shang-Chi, a skilled martial artist, must confront his past and stop his father's dangerous plans involving the Ten Rings organization.",
        image: {
            url: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106835/SCHI_rrrkts_yfs24p.webp",
            filename: "Shang_Chi"
        },
        banner: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106786/wp9790961-shang-chi-and-the-legend-of-the-ten-rings-wallpapers_whnr0p_unmlsp.webp",
        trailer: "https://www.youtube.com/embed/6Vddfmcm4uY",
        year: 2021
    },
    {
        title: "Venom: Let There Be Carnage",
        watch: "https://www.youtube.com/embed/5cPFmJwY-1o",
        genre: ["Action", "Sci-Fi", "Thriller"],
        language: ["Hindi", "English"],
        channel: "MarvelPlanet",
        mcuPhase: 4,
        category: "Sony",
        type: "movie", // Movie, Series, Anime !?
        homeShow: false,
        recommended: true,
        description: "Eddie Brock struggles to coexist with Venom while facing the threat of Carnage, an even more dangerous symbiote.",
        image: {
            url: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106837/Venom2_pawy3f_z3llso.webp",
            filename: "Venom_Let_There_Be_Carnage"
        },
        banner: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106785/VEnom2_dsntsp_oah609.webp",
        trailer: "https://www.youtube.com/embed/9ek-lOWt2No",
        year: 2021
    },
    {
        title: "Eternals",
        watch: "https://www.youtube.com/embed/DCs7QKTHZo8",
        genre: ["Fantasy", "Sci-Fi", "Superhero"],
        language: ["Hindi", "English"],
        channel: "MarvelPlanet",
        mcuPhase: 4,
        type: "movie", // Movie, Series, Anime !?
        homeShow: false,
        description: "A group of immortal beings, the Eternals, emerge from hiding to protect humanity from the Deviants, an ancient enemy.",
        image: {
            url: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106832/Eternals_yj2aet_dwt3t0.webp",
            filename: "Eternals"
        },
        banner: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106781/Eternals_u23hsd_hvimmk.webp",
        trailer: "https://www.youtube.com/embed/hzerUSVFxlg",
        year: 2022
    },
    {
        title: "Hawkeye",
        watch: "https://www.youtube.com/embed/OBilFB8syZw",
        genre: ["Action", "Superhero", "Adventure"],
        language: ["Hindi", "English"],
        channel: "MarvelPlanet",
        mcuPhase: 4,
        type: "Series", // Movie, Series, Anime !?
        season: 1,
        homeShow: false,
        description: "Clint Barton teams up with young archer Kate Bishop as they uncover a criminal conspiracy just before Christmas.",
        image: {
            url: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106833/hawkeye_aypcxj_muhcra.webp",
            filename: "Hawkeye"
        },
        banner: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106782/Hawkeye_zouixr_tz9yj5.webp",
        trailer: "https://www.youtube.com/embed/5VYb3B1ETlk",
        year: 2021
    },
    {
        title: "Spider-Man: No Way Home",
        watch: "https://www.youtube.com/embed/ioeoCbDiMvE",
        genre: ["Action", "Adventure", "Superhero"],
        language: ["Hindi", "English"],
        channel: "MarvelPlanet",
        mcuPhase: 4,
        category: "Sony",
        type: "movie", // Movie, Series, Anime !?
        homeShow: false,
        trending: true,
        recommended: true,
        randomTrailer: true,
        randomTrailerLink: "https://cdn.jsdelivr.net/gh/mishraRj/rjtv-trailers/Trailers/nwh.mp4",
        randomImageLink: "https://res.cloudinary.com/donfkhjlz/image/upload/v1744032812/NWH_m3oqxq_de6wra.png",
        description: "Peter Parker seeks Doctor Strange help to restore his secret identity, but a spell goes wrong and brings villains from other universes.",
        image: {
            url: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106836/SP_NWH_zbv1jj_jvqgzx.webp",
            filename: "Spider_Man_No_Way_Home"
        },
        banner: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106784/SP_NWH_chjugn_vsjdrb.webp",
        trailer: "https://www.youtube.com/embed/Hi4ktzK9g0I",
        year: 2021
    },
    {
        title: "Moon Knight",
        watch: "https://www.youtube.com/embed/ahP63bKS2V8",
        genre: ["Action", "Fantasy", "Superhero"],
        language: ["Hindi", "English"],
        channel: "MarvelPlanet",
        mcuPhase: 4,
        type: "Series", // Movie, Series, Anime !?
        season: 1,
        homeShow: true,
        recommended: true,
        description: "Marc Spector, a mercenary with dissociative identity disorder, becomes Moon Knight, the avatar of an Egyptian god, while struggling with his past.",
        image: {
            url: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106834/Moon_Knight_mffwte_y1c5c6.webp",
            filename: "Moon_Knight"
        },
        banner: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106779/8311436_mgyiqv_tscgwg.webp",
        trailer: "https://www.youtube.com/embed/XSCMoxVQaCE",
        year: 2022
    },
    {
        title: "Morbius",
        watch: "https://www.youtube.com/embed/NFcRmAjaiOU",
        genre: ["Action", "Sci-Fi", "Thriller"],
        language: ["Hindi", "English"],
        channel: "MarvelPlanet",
        mcuPhase: 4,
        category: "Sony",
        type: "movie", // Movie, Series, Anime !?
        homeShow: false,
        description: "Biochemist Michael Morbius accidentally turns himself into a vampire while attempting to cure a rare blood disease.",
        image: {
            url: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106835/mORBIU_i1trp4_ove1gv.webp",
            filename: "Morbius"
        },
        banner: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106782/Morbius_zwdvgp_ebjqsi.webp",
        trailer: "https://www.youtube.com/embed/vqD7nYSPJCU",
        year: 2022
    },
    {
        title: "Ms. Marvel",
        watch: "https://www.youtube.com/embed/EWb7fLLf6pY",
        genre: ["Fantasy", "Comedy", "Superhero"],
        language: ["Hindi", "English"],
        channel: "MarvelPlanet",
        mcuPhase: 4,
        type: "Series", // Movie, Series, Anime !?
        season: 1,
        homeShow: false,
        description: "Teenager Kamala Khan discovers she has cosmic powers and must balance her superhero journey with her life as a Pakistani-American high school student.",
        image: {
            url: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106835/ms_marvel_vwsu9o_cnm40u.webp",
            filename: "Ms_Marvel"
        },
        banner: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106783/MS_Marvel_rw0mkj_u6ypvk.webp",
        trailer: "https://www.youtube.com/embed/xXQEheM6rbY",
        year: 2022
    },
    {
        title: "Doctor Strange in the Multiverse of Madness",
        watch: "https://www.youtube.com/embed/55vwdbMGiaY",
        genre: ["Fantasy", "Horror", "Superhero"],
        language: ["Hindi", "English"],
        channel: "MarvelPlanet",
        mcuPhase: 4,
        type: "movie", // Movie, Series, Anime !?
        homeShow: false,
        description: "Doctor Strange teams up with America Chavez to travel across the Multiverse and battle a powerful Scarlet Witch who threatens reality itself.",
        image: {
            url: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106832/DS_MOM_xezg7i_i8ypja.webp",
            filename: "Doctor_Strange_Multiverse_Of_Madness"
        },
        banner: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106780/DS_MOM_xzog7m_g1zncc.webp",
        trailer: "https://www.youtube.com/embed/-mjWrrKgwJM",
        year: 2022
    },
    {
        title: "I Am Groot",
        watch: "https://www.youtube.com/embed/8akr6_oQTV4",
        genre: ["Animation", "Comedy", "Superhero"],
        language: ["Hindi", "English"],
        channel: "MarvelPlanet",
        mcuPhase: 4,
        type: "Series", // Movie, Series, Anime !?
        season: 2,
        homeShow: false,
        description: "A collection of short animated episodes following Baby Groot as he embarks on small but mischievous adventures.",
        image: {
            url: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106834/i_am_groot_shukgn_xhjtu6.webp",
            filename: "I_Am_Groot"
        },
        banner: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106782/I_am_groot_mo63we_fx16yn.webp",
        trailer: "https://www.youtube.com/embed/1cNBV3LG5n0",
        year: 2022
    },
    {
        title: "She-Hulk: Attorney at Law",
        watch: "https://www.youtube.com/embed/TnnTBTw8r4g",
        genre: ["Comedy", "Superhero"],
        language: ["Hindi", "English"],
        channel: "MarvelPlanet",
        mcuPhase: 4,
        type: "Series", // Movie, Series, Anime !?
        season: 1,
        homeShow: false,
        description: "Jennifer Walters, a lawyer specializing in superhuman legal cases, navigates her career while balancing her new life as She-Hulk.",
        image: {
            url: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106835/She_Hulk_icfmih_hq2q4x.webp",
            filename: "She_Hulk"
        },
        banner: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106783/She_Hulk_rlgvq8_gdj3py.webp",
        trailer: "https://www.youtube.com/embed/D5avZDHx-vw",
        year: 2022
    },
    {
        title: "Thor: Love and Thunder",
        watch: "https://www.youtube.com/embed/75Rx4YwTiFo",
        genre: ["Action", "Fantasy", "Superhero"],
        language: ["Hindi", "English"],
        channel: "MarvelPlanet",
        mcuPhase: 4,
        type: "movie", // Movie, Series, Anime !?
        homeShow: false,
        description: "Thor embarks on a quest for inner peace but must return to action when Gorr the God Butcher threatens the gods' extinction.",
        image: {
            url: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106837/Thor4_ii9f6g_ga9hfk.webp",
            filename: "Thor_Love_And_Thunder"
        },
        banner: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106784/Thor4_klkhlz_mdfwbf.webp",
        trailer: "https://www.youtube.com/embed/sFTD5vBfRGY",
        year: 2022
    }
];

const phase5 = [
    {
        title: "Ant-Man and the Wasp: Quantumania",
        watch: "https://www.youtube.com/embed/tH4p4MfRDl0",
        genre: ["Action", "Adventure", "Superhero"],
        language: ["Hindi", "English"],
        channel: "MarvelPlanet",
        mcuPhase: 5,
        type: "movie", // Movie, Series, Anime !?
        homeShow: false,
        description: "Scott Lang and Hope Van Dyne explore the Quantum Realm, where they encounter Kang the Conqueror and must fight for their survival.",
        image: {
            url: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106777/Ant_man_3_zbpw0n_zk2fx0.webp",
            filename: "AntMan_Quantumania"
        },
        banner: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106779/Ant_Man_3_di2clm_qusfry.webp",
        trailer: "https://www.youtube.com/embed/TT5OlqNSbK4",
        year: 2023
    },
    {
        title: "Secret Invasion",
        watch: "https://www.youtube.com/embed/dP4RPPIOHBw",
        genre: ["Action", "Sci-Fi", "Superhero"],
        language: ["Hindi", "English"],
        channel: "MarvelPlanet",
        mcuPhase: 5,
        type: "Series", // Movie, Series, Anime !?
        season: 1,
        homeShow: false,
        description: "Nick Fury uncovers a Skrull invasion on Earth and assembles a team to prevent an intergalactic war.",
        image: {
            url: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106835/secret-invasion_dcops3_myadzx.webp",
            filename: "Secret_Invasion"
        },
        banner: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106783/secret-invasion_vxplrt_df0x7v.webp",
        trailer: "https://www.youtube.com/embed/QsmgZYdZcIE",
        year: 2023
    },
    {
        title: "Guardians of the Galaxy Vol. 3",
        watch: "https://www.youtube.com/embed/MynDM74cdZM",
        genre: ["Action", "Adventure", "Comedy"],
        language: ["Hindi", "English"],
        channel: "MarvelPlanet",
        mcuPhase: 5,
        type: "movie", // Movie, Series, Anime !?
        homeShow: false,
        description: "The Guardians embark on one final adventure as they confront their past and face a powerful new enemy.",
        image: {
            url: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106833/gotg-vol-3_ia95ao_tpyj2w.webp",
            filename: "Guardians_Vol_3"
        },
        banner: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106781/GOG3_frgtmr_p5ydna.webp",
        trailer: "https://www.youtube.com/embed/fRL9UiVp_nk",
        year: 2023
    },
    {
        title: "Echo",
        watch: "https://www.youtube.com/embed/CIyBSXAO62s",
        genre: ["Action", "Crime", "Superhero"],
        language: ["Hindi", "English"],
        channel: "MarvelPlanet",
        mcuPhase: 5,
        type: "Series",
        season: 1,
        homeShow: false,  
        description: "Maya Lopez must confront her past, reconnect with her Native American heritage, and forge her own path as Echo.",
        image: {
            url: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106832/eCHO_xgdoya_se7pzt.webp",
            filename: "Echo"
        },
        banner: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106781/echo_atugya_ei9xkm.webp",
        trailer: "https://www.youtube.com/embed/ZciCB9bsa60",
        year: 2023
    },
    {
        title: "The Marvels",
        watch: "https://www.youtube.com/embed/51SuyDm11SE",
        genre: ["Action", "Sci-Fi", "Superhero"],
        language: ["Hindi", "English"],
        channel: "MarvelPlanet",
        mcuPhase: 5,
        type: "movie", // Movie, Series, Anime !?
        homeShow: false,
        description: "Carol Danvers, Monica Rambeau, and Kamala Khan must team up to restore balance to the universe when their powers become entangled.",
        image: {
            url: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106836/The_Marvels_gorb6b_pbwise.webp",
            filename: "The_Marvels"
        },
        banner: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106784/The_Marvels_pcil2c_qphr5k.webp",
        trailer: "https://www.youtube.com/embed/gLuhrhEfQBc",
        year: 2023
    },
    {
        title: "Madame Web",
        watch: "https://www.youtube.com/embed/3sRD5C4p2ow",
        genre: ["Action", "Thriller", "Superhero"],
        language: ["Hindi", "English"],
        channel: "MarvelPlanet",
        mcuPhase: 5,
        type: "movie",
        homeShow: false, 
        description: "Cassandra Webb, a clairvoyant mutant, must protect three young women from a dangerous future that threatens them all.",
        image: {
            url: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106835/MW_ozda8a_ejwtsx.webp",
            filename: "Madame_Web"
        },
        banner: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106782/Madame_Web_ohljk4_ppdz5p.webp",
        trailer: "https://www.youtube.com/embed/_1ofD-6u8RI",
        year: 2024
    },
    {
        title: "Deadpool & Wolverine",
        watch: "https://www.youtube.com/embed/pkTMUIka_CQ",
        genre: ["Action", "Comedy", "Superhero"],
        language: ["Hindi", "English"],
        channel: "MarvelPlanet",
        mcuPhase: 5,
        type: "movie", // Movie, Series, Anime !?
        homeShow: false,
        description: "Deadpool and Wolverine embark on an unexpected adventure that will change the Marvel universe forever.",
        image: {
            url: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106832/D_W_n5plld_gy2inj.webp",
            filename: "Deadpool_Wolverine"
        },
        banner: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106781/d_w_s4y3wy_um5fm2.webp",
        trailer: "https://www.youtube.com/embed/ea94nqoxnVQ",
        year: 2024
    },
    {
        title: "Agatha: All Along",
        watch: "https://www.youtube.com/embed/C4fdBHhXJdM",
        genre: ["Mystery", "Fantasy", "Superhero"],
        language: ["Hindi", "English"],
        channel: "MarvelPlanet",
        mcuPhase: 5,
        type: "Series",
        season: 1,
        homeShow: false,
        description: "Agatha Harkness returns in her own dark magical adventure, exploring her origins and uncovering ancient secrets.",
        image: {
            url: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106777/agathaallalong_hvylxm_uxblvt.webp",
            filename: "Agatha_All_Along"
        },
        banner: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106779/Agataha_juqmo8_avvsou.webp",
        trailer: "https://www.youtube.com/embed/B_4cKlRkE60",
        year: 2024
    },
    {
        title: "Venom: The Last Dance",
        watch: "https://www.youtube.com/embed/9X-MRXInJtM",
        genre: ["Action", "Sci-Fi", "Superhero"],
        language: ["Hindi", "English"],
        channel: "MarvelPlanet",
        mcuPhase: 5,
        category: "Sony",
        type: "movie",
        homeShow: false, 
        description: "Eddie Brock and Venom face their biggest challenge yet in a final battle that will decide their fate.",
        image: {
            url: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106837/Venom_3_hcv9yl_eo6fki.webp",
            filename: "Venom_Last_Dance"
        },
        banner: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106785/Venom3_ywzpgk_edvljm.webp",
        trailer: "https://www.youtube.com/embed/VWB8RM9qHPg",
        year: 2024
    },
    {
        title: "Kraven the Hunter",
        watch: "https://www.youtube.com/embed/ik7hA8yVmNk",
        genre: ["Action", "Thriller", "Superhero"],
        language: ["Hindi", "English"],
        channel: "MarvelPlanet",
        mcuPhase: 5,
        category: "Sony",
        type: "movie",
        homeShow: false, 
        description: "Sergei Kravinoff, a deadly hunter, embarks on a brutal journey to prove himself as the greatest predator of all.",
        image: {
            url: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106834/Kraven_yztipo_ocu9nj.webp",
            filename: "Kraven_The_Hunter"
        },
        banner: "https://res.cloudinary.com/dzagwvljs/image/upload/v1744106782/Kraven_yrawqy_jwbqnf.webp",
        trailer: "https://www.youtube.com/embed/-qSyvnUnfF8",
        year: 2025
    },
    {
        title: "Daredevil Born Again",
        watch: "https://www.youtube.com/embed/x0D-T3yr-kE",
        genre: ["Superhero", "Action", "Thriller"],
        language: ["Hindi", "English"],
        channel: "MarvelPlanet",
        mcuPhase: 5,
        latest: true,
        type: "movie", // Movie, Series, Anime !?
        homeShow: true,
        description: "Matt Murdock returns to Hell Kitchen, facing new enemies and old threats as he rebuilds his life as both a lawyer and the Devil of Hell's Kitchen. But a sinister conspiracy puts everything he stands for at risk.",
        image: {
            url: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744431126/DDVLBA_p9uzyl.webp",
            filename: "DDVL Born Again"
        },
        banner: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744431126/LR_5_ry3cll.webp",
        trailer: "https://www.youtube.com/embed/z0hqaXwgSi4",
        year: 2025
    },
    {
        title: "Captain America Brave New World",
        watch: "https://www.youtube.com/embed/sVIUkLhSDuM",
        genre: ["Superhero", "Action", "Thriller"],
        language: ["Hindi", "English"],
        channel: "MarvelPlanet",
        mcuPhase: 5,
        latest: true,
        type: "movie", // Movie, Series, Anime !?
        homeShow: true,
        description: "Sam Wilson, the new Captain America, battles political intrigue and emerging global threats as he fights to prove himself worthy of the shield while uncovering a dangerous conspiracy that could shake the world.",
        image: {
            url: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744431126/CapAm_BNW_weeuky.webp",
            filename: "DeadpoolNdWolv"
        },
        banner: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744431124/LR_3_jzvtla.webp",
        trailer: "https://www.youtube.com/embed/gwB8C7YCpH0",
        year: 2025
    },
]

// ✅ Export multiple categories correctly
module.exports = { phase1, phase2, phase3, phase4, phase5 }