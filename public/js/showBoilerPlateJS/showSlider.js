const swiper = new Swiper('.slider-wrapper', {

    loop: true,
    grabCursor: true,
    spaceBetween: 30,

    // Autoplay Feature
    autoplay: {
        delay: 6000, // 10 seconds
        disableOnInteraction: false, // Keeps autoplay running even if user interacts
    },
    
  // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

  // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
  // Responsive Breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        500: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }
});