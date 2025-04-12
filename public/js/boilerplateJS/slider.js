const newSwiper = new Swiper('#slider-wrapper', {

    loop: false,
    spaceBetween: 10,
    slidesPerGroup: 3,
    loopedSlides: 9,
    watchOverflow: true,

    autoplay: {
                delay: 5000, // 5 seconds
                disableOnInteraction: false, // Keeps autoplay running even if user interacts
            },

  // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
  // Responsive Breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            grabCursor: true,
            watchOverflow: true,
            autoplay: {
                delay: 5000, // 10 seconds
                disableOnInteraction: true, // Keeps autoplay running off even user interacts
            },
        },
        301: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            grabCursor: true,
            watchOverflow: true,
            autoplay: {
                delay: 5000, // 10 seconds
                disableOnInteraction: true, // Keeps autoplay running off even user interacts
            },
        },
        471: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            grabCursor: true,
            watchOverflow: true,
            autoplay: {
                delay: 5000, // 10 seconds
                disableOnInteraction: true, // Keeps autoplay running off even user interacts
            },
        },
        768: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            watchOverflow: true,
            autoplay: false // Disable autoplay for 4 slides
        },
        1024: {
            slidesPerView: 5,
            slidesPerGroup: 5,
            watchOverflow: true,
            autoplay: false // Disable autoplay for 4 slides
        },
    }
});