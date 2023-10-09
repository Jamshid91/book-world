const favorites = document.querySelectorAll('.favorite');

favorites.forEach(favorite => {
  favorite.addEventListener('click', () => {
    favorite.classList.toggle('favorite_check')
  })
});


// Популярное
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

// Бестселлеры
const bestsellers = new Swiper('.bestsellers-slider', {
    navigation: {
        nextEl: '.bestsellers-slider-next',
        prevEl: '.bestsellers-slider-prev',
      },
      pagination: {
        el: '.bestsellers-slide-pagination',
        type: 'fraction',
        renderFraction: function(currentClass, tottalClass) {
            return `+ <span class="' + ${currentClass} +'"></span> `+ ' из ' + `<span class="' + ${tottalClass} +'"></span> ` 
        }
      },

      keyboard: {
        enabled: true,
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


  // Этими книгами интересуются
  const interested = new Swiper('.interested-slider', {
    navigation: {
        nextEl: '.interested-slider-next',
        prevEl: '.interested-slider-prev',
      },
      pagination: {
        el: '.interested-slide-pagination',
        type: 'fraction',
        renderFraction: function(currentClass, tottalClass) {
            return `<span class="' + ${currentClass} +'"></span> `+ ' из ' + `<span class="' + ${tottalClass} +'"></span> ` 
        }
      },
  
      watchOverflow: true,
      
    breakpoints: {
        320: {
            slidesPerView: 1.2,
        },
        576: {
            slidesPerView: 2.2,
        },
        768: {
            slidesPerView: 3.2,
        },
        992: {
            slidesPerView: 5.2,
        },
    }
  });

    // Этими книгами интересуются
    const aside = new Swiper('.aside-slider-left', {
      pagination: {
        el: '.swiper-pagination-left',
        clickable: true,
      },
    
        watchOverflow: true,
        slidesPerView: 1,
        spaceBetween: 50,
    });

        // Этими книгами интересуются
        const asideRight = new Swiper('.aside-slider-right', {
          pagination: {
            el: '.swiper-pagination-right',
            clickable: true,
          },
        
            watchOverflow: true,
            slidesPerView: 1,
            spaceBetween: 50,
        });

    // Этими книгами интересуются
    const thematic = new Swiper('.thematic-slider', {
      pagination: {
        el: '.swiper-pagination-thematic',
        clickable: true,
      },
    
        watchOverflow: true,
        slidesPerView: 1,
        spaceBetween: 50,

              centeredSlides: true,
              lazyLoading: true,
              loop: true,

              
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
          slidesPerView: 5,
      },
  }
    });
