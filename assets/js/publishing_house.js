const popular = new Swiper('.popular-slider', {
    navigation: {
        nextEl: '.popular-slider-next',
        prevEl: '.popular-slider-prev',
      },
      pagination: {
        el: '.popular-slide-pagination',
        type: 'fraction',
        renderFraction: function(currentClass, tottalClass) {
            return `<span class="' + ${currentClass} +'"></span> `+ ' из ' + `<span class="' + ${tottalClass} +'"></span> ` 
        }
      },
  
      watchOverflow: true,
      
    breakpoints: {
        320: {
            slidesPerView: 1.5,
                loop: true,
        },
        576: {
            slidesPerView: 2.2,
                loop: false,
        },
        768: {
            slidesPerView: 3.2,
        },
        992: {
            slidesPerView: 5.2,
        },
    }
  });