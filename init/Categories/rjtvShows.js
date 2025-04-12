const dramas = [
    {
        title: "Ramayan",
        watch: "https://www.youtube.com/embed/6El8Ia4fYDc",
        genre: ["Mythological", "Drama"],
        language: ["Hindi"],
        channel: "RjtvShows",
        category: "dharmic",
        type: "drama", // Movie, Series, Anime !?
        homeShow: true,
        description: "An adaptation of the ancient epic in which the exiled Prince Rama and his brother Laxman set out to save Rama's wife, Sita, who has been kidnapped by the demon king of Lanka Ravana.",
        image: {
            url: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744431174/DS_9_m67an2.webp",
            filename: "DeadpoolNdWolv"
        },
        banner: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744431171/bannerDS_9_ywkeg8.webp",
        trailer: "https://www.youtube.com/embed/I0K832TXj40",
        year: 1987
    },
    {
        title: "Shri Krishna",
        watch: "https://www.youtube.com/embed/W_pHO7f00Is",
        genre: ["Mythological", "Drama"],
        language: ["Hindi"],
        channel: "RjtvShows",
        category: "dharmic",
        type: "drama", // Movie, Series, Anime !?
        homeShow: true,
        description: "When evil takes over the world, Lord Vishnu incarnates into the world as Shri Krishna for the protection of the righteous and the destruction of the wicked.",
        image: {
            url: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744431172/DS_1_uplwe6.webp",
            filename: "DeadpoolNdWolv"
        },
        banner: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744431170/bannerDS_13_jxbxeq.webp",
        trailer: "https://www.youtube.com/embed/tgvFuLCrNsY",
        year: 1993
    },
    {
        title: "Radha Krishn",
        watch: "https://www.youtube.com/embed/bUxf7-X8M8w",
        genre: ["Mythological", "Drama"],
        language: ["Hindi"],
        channel: "RjtvShows",
        category: "dharmic",
        type: "drama", // Movie, Series, Anime !?
        homeShow: true,
        description: "The story of Radha and Krishna is the epitome of eternal love, which transcends eras and emotions.",
        image: {
            url: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744431174/DS_8_ppydxn.webp",
            filename: "DeadpoolNdWolv"
        },
        banner: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744431170/bannerDS_3_rhrbbe.webp",
        trailer: "https://www.youtube.com/embed/pAktFNiVpj0",
        year: 2018
    },
    {
        title: "Devon Ke Dev... Mahadev",
        watch: "https://www.youtube.com/embed/6Ln-XHD2le4",
        genre: ["Mythological", "Drama"],
        language: ["Hindi"],
        channel: "RjtvShows",
        category: "dharmic",
        type: "drama", // Movie, Series, Anime !?
        homeShow: true,
        description: "He is supreme being and the destroyer of evil. Witness the story of Lord Shiva, his Avatars and his union with Shakti that shaped the universe.",
        image: {
            url: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744431173/DS_6_psy8cy.webp",
            filename: "DeadpoolNdWolv"
        },
        banner: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744431171/bannerDS_4_snjrmo.webp",
        trailer: "https://www.youtube.com/embed/k86safvkMyk",
        year: 2011
    },
    {
        title: "Mahabharat",
        watch: "https://www.youtube.com/embed/MaE9PTj5hqM",
        genre: ["Mythological", "Drama"],
        language: ["Hindi"],
        channel: "RjtvShows",
        category: "dharmic",
        type: "drama", // Movie, Series, Anime !?
        homeShow: true,
        trending: true,
        randomTrailer: true,
        randomTrailerLink: "https://cdn.jsdelivr.net/gh/mishraRj/rjtv-trailers/Trailers/Mahabharat.mp4",
        randomImageLink: "https://res.cloudinary.com/dber1ydc9/image/upload/v1744096347/Mahabhart_bwluut_ufiq79_kd6nev.png",
        description: "The mother of all wars, the epitome of all rivalries, the cauldron of emotions, insecurities, jealousies, and power play - Mahabharat.",
        image: {
            url: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744431173/DS_5_vmnb5j.webp",
            filename: "DeadpoolNdWolv"
        },
        banner: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744431171/bannerDS_7_o3js2q.webp",
        trailer: "https://www.youtube.com/embed/Ff3YIV0lwME",
        year: 2013
    },
    {
        title: "Mahabharat",
        watch: "https://www.youtube.com/embed/Up7NgU8aKVc",
        genre: ["Mythological", "Drama"],
        language: ["Hindi"],
        channel: "RjtvShows",
        category: "dharmic",
        type: "drama", // Movie, Series, Anime !?
        homeShow: true,
        description: "When a dynastic struggle between the collateral branches of the Kuru clan, the Kauravas and Pandavas lead them to the threshold of war, Lord Krishna decides to step in and take control of the situation.",
        image: {
            url: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744431173/DS_14_num73q.webp",
            filename: "DeadpoolNdWolv"
        },
        banner: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744431169/bannerDS_10_xzu1l5.webp",
        trailer: "https://www.youtube.com/embed/wn58MwIP43s",
        year: 1998
    },
    {
        title: "Neeli Chhatri Wale",
        watch: "https://www.youtube.com/embed/GSPM7cw6d9Y",
        genre: ["Comedy", "Drama"],
        language: ["Hindi"],
        channel: "RjtvShows",
        category: "Non-Dharmic",
        type: "comedy",
        homeShow: true,
        description: "A lighthearted comedy-drama about a man who can see and talk to Lord Shiva, who helps him navigate life's challenges.",
        image: {
            url: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744431173/DS_7_oygrvx.webp",
            filename: "NeeliChhatriWale"
        },
        banner: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744431171/bannerDS_8_eyyvmm.webp",
        trailer: "https://www.youtube.com/embed/2KxrsaPlSEA",
        year: 2014
    },
    {
        title: "Bhabhi Ji Ghar Per Hain",
        watch: "https://www.youtube.com/embed/MZrQLlw04G8",
        genre: ["Comedy"],
        language: ["Hindi"],
        channel: "RjtvShows",
        category: "Non-Dharmic",
        type: "comedy",
        homeShow: true,
        description: "A hilarious sitcom about two neighboring couples and their funny misadventures.",
        image: {
            url: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744431172/DS_13_f4kbvh.webp",
            filename: "BhabhiJiGharParHain"
        },
        banner: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744431169/bannerDS_12_tjn36g.webp",
        trailer: "https://www.youtube.com/embed/LyoxxM8CCT4",
        year: 2015
    },
    {
        title: "Happu Ki Ultan Paltan",
        watch: "https://www.youtube.com/embed/4x13bF8X5Ak",
        genre: ["Comedy"],
        language: ["Hindi"],
        channel: "RjtvShows",
        category: "Non-Dharmic",
        type: "comedy",
        homeShow: true,
        description: "A spin-off of 'Bhabhi Ji Ghar Par Hain' focusing on Inspector Happu Singh and his quirky family life.",
        image: {
            url: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744431173/DS_15_wxttpb.webp",
            filename: "HappuKiUltanPaltan"
        },
        banner: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744431170/bannerDS_15_vmyf7t.webp",
        trailer: "https://www.youtube.com/embed/uq4YZPRAEmg",
        year: 2019
    },
    {
        title: "Taarak Mehta Ka Oolta Chashma",
        watch: "https://www.youtube.com/embed/rJE5jzi4q2Y",
        genre: ["Comedy", "Drama"],
        language: ["Hindi"],
        channel: "RjtvShows",
        category: "Non-Dharmic",
        type: "comedy",
        homeShow: true,
        description: "One of India's longest-running sitcoms, depicting the lives of diverse families in Gokuldham Society.",
        image: {
            url: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744431173/DS_2_n8bzp2.webp",
            filename: "TarakMehtaKaOoltaChashma"
        },
        banner: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744431170/bannerDS_2_oictda.webp",
        trailer: "https://www.youtube.com/embed/_KAZb58AIhQ",
        year: 2008
    },
    {
        title: "Shapath: Super Cops vs Super Villains",
        watch: "https://www.youtube.com/embed/Id23PfQDSAk",
        genre: ["Crime"],
        language: ["Hindi"],
        channel: "RjtvShows",
        category: "Non-Dharmic",
        type: "action",
        homeShow: true,
        description: "A crime-action series where a team of cops battles against super-powered criminals and villains.",
        image: {
            url: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744431172/DS_10_yxyzwb.webp",
            filename: "ShapathSuperCopsVsSuperVillains"
        },
        banner: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744431169/bannerDS_1_xybixx.webp",
        trailer: "https://www.youtube.com/embed/FUv4tNhUWFo",
        year: 2012
    },
    {
        title: "The Adventures of Hatim",
        watch: "https://www.youtube.com/embed/obZhbeiXALs",
        genre: ["Fantasy", "Adventure"],
        language: ["Hindi"],
        channel: "RjtvShows",
        category: "Non-Dharmic",
        type: "fantasy",
        homeShow: true,
        randomTrailer: true,
        randomTrailerLink: "https://cdn.jsdelivr.net/gh/mishraRj/rjtv-trailers/Trailers/hatim.mp4",
        randomImageLink: "https://res.cloudinary.com/dber1ydc9/image/upload/v1744096347/Hatim_fllzuc_afxvdz_hggdde.webp",
        description: "A fantasy adventure series based on the Arabian tales of Prince Hatim and his journey to solve seven riddles.",
        image: {
            url: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744431173/DS_3_tqtyqy.webp",
            filename: "TheAdventuresOfHatim"
        },
        banner: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744431170/bannerDS_14_j8xszd.webp",
        trailer: "https://www.youtube.com/embed/fAVkWeIbNmU",
        year: 2013
    },
    {
        title: "Alif Laila",
        watch: "https://www.youtube.com/embed/X6olClEGjtU",
        genre: ["Fantasy", "Drama"],
        language: ["Hindi"],
        channel: "RjtvShows",
        category: "Non-Dharmic",
        type: "fantasy",
        homeShow: true,
        description: "A magical tale based on 'One Thousand and One Nights' featuring stories of genies, kings, and adventures.",
        image: {
            url: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744431172/DS_11_havfn9.webp",
            filename: "AlifLaila"
        },
        banner: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744431170/bannerDS_11_isczvz.webp",
        trailer: "https://www.youtube.com/embed/G6IpaVUZYgQ",
        year: 1997
    },
    {
        title: "Jodha Akbar",
        watch: "https://www.youtube.com/embed/40bN3MWMWps",
        genre: ["Historical", "Drama"],
        language: ["Hindi"],
        channel: "RjtvShows",
        category: "Non-Dharmic",
        type: "historical",
        homeShow: true,
        description: "A historical drama series portraying the life and journey of Jodha Bai, the Rajput princess who married Emperor Akbar.",
        image: {
            url: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744431173/DS_4_tap7mc.webp",
            filename: "Jodha"
        },
        banner: "https://res.cloudinary.com/dgzelkbmu/image/upload/v1744431171/bannerDS_5_bhhves.webp",
        trailer: "https://www.youtube.com/embed/MoM05q4wPQI",
        year: 2013
    }
];

// ✅ Export multiple categories correctly
module.exports = dramas;