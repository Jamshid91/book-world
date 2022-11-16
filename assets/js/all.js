const theBest = new Swiper('.theBest-slider', {
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },

    centeredSlides: true,
    lazyLoading: true,
    loop: true,
    watchOverflow: true,
    slidesPerView: 1,
    spaceBetween: 40,
    direction: 'horizontal',

            
  breakpoints: {
    320: {
        slidesPerView: 1.8,
    },
    576: {
        slidesPerView: 3,
    },
    768: {
        slidesPerView: 3.5,
    },
    992: {
        slidesPerView: 8.5,
    },
}
  });