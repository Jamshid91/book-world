const authorInfo = document.querySelector('.author-info-item__texts'),
      openAllInfo = document.querySelector('.open-allInfo-text');

let count = 0;

openAllInfo.addEventListener('click', () => {
    if(count == 0) {
        authorInfo.parentElement.classList.add('showInfoText');
        openAllInfo.children[0].textContent = 'Свернуть'
        return count = 1;
    } else {
        authorInfo.parentElement.classList.remove('showInfoText');
        openAllInfo.children[0].textContent = 'Читать полностью'
        return count = 0;
    }
});


const watched = new Swiper('.watched-slider', {
    navigation: {
        nextEl: '.watched-slider-next',
        prevEl: '.watched-slider-prev',
      },
      pagination: {
        el: '.watched-slide-pagination',
        type: 'fraction',
        renderFraction: function(currentClass, tottalClass) {
            return `<span class="' + ${currentClass} +'"></span> `+ ' из ' + `<span class="' + ${tottalClass} +'"></span> ` 
        }
      },
  
      watchOverflow: true,
      spaceBetween: 10,
      
    breakpoints: {
        320: {
            slidesPerView: 1.2,
                loop: true,
        },
        576: {
            slidesPerView: 1.8,
                loop: false,
        },
        768: {
            slidesPerView: 2.2,
        },
        992: {
            slidesPerView: 3.2,
        },
        1350: {
            slidesPerView: 4.2,
        },
    }
  });