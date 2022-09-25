const slider = () => {
    const swiper = new Swiper('.swiperr', {
        pagination: {
            el: '.swiper-pagination',
          },
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
        effect: "fade",
        speed: 1000
    });
}
slider();