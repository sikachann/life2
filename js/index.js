const swiper = new Swiper(".swiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    loop: true,
    speed: 1000,
    slidesPerView: 1.5,
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 5000,
    },
    breakpoints: {
        0: {
        slidesPerView: 1.0,
        },
        790:{
            slidesPerView:1.5
        }
        },
    });