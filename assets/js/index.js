const headerBurger = document.querySelector('.header-burger'),
      menu = document.querySelector('.menu'),
      menuClose = document.querySelector('.menu-close'),
      favorites = document.querySelectorAll('.favorite'),      
      header = document.querySelector('.header'),
      search = document.querySelector('.search'),
      body = document.querySelector('body'),
      headerSearch = document.querySelectorAll('.header-search__btn'),
      searchInp = document.querySelector('.search__inp'),
      clearSearchBtn = document.querySelector('.clear-search'),
      searchClose = document.querySelector('.header-search__close'),
      resultTitle = document.querySelector('.search-result__text'),
      searchItemAll = document.querySelector('.search-item__all'),
      searchResults = document.querySelectorAll('.search-result__title');



      headerBurger.addEventListener('click', ()=> {
        menu.classList.add('showMenu');
        body.classList.add('overflow-hidden'); 
    });
    
    menuClose.addEventListener('click', ()=> {
        menu.classList.remove('showMenu');
        body.classList.remove('overflow-hidden'); 
    });


let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if(scrollTop > lastScrollTop) {
    header.style.top = '-150px'
  } else {
    header.style.top = '0'
    header.children[0].children[0].classList.add('shadow-sm')
  }
  lastScrollTop = scrollTop
  if(lastScrollTop == 0) {
    header.children[0].children[0].classList.remove('shadow-sm')
  }
})


document.querySelector('.search__inp').oninput = function () {
let val = this.value.trim();
if(val != '') {
  resultTitle.classList.add('d-none')
  searchResults.forEach(elem => {
      if(elem.innerText.search(val) == -1) {
          elem.innerHTML = elem.innerText; 
          elem.parentElement.parentElement.parentElement.classList.remove('hide')
          search.classList.add('showSearch');
          body.classList.add('overflow-hidden');
          searchItemAll.classList.remove('d-flex');
          clearSearchBtn.classList.remove('d-none');
      } else {
          elem.parentElement.parentElement.parentElement.classList.add('hide');
          let str = elem.innerText;
          elem.innerHTML = insertMark(str, elem.innerText.search(val), val.length);
          searchItemAll.classList.add('d-flex');
          clearSearchBtn.classList.remove('d-none');
      }
  });

}
else {
  resultTitle.classList.remove('d-none');
  searchItemAll.classList.remove('d-flex');
  clearSearchBtn.classList.add('d-none');
  searchResults.forEach(elem => {
      elem.parentElement.parentElement.parentElement.classList.remove('hide');
      elem.innerHTML = elem.innerText;
  });
}

}

function insertMark(string,pos,len) {
return string.slice(0,pos) + "<span class='mark'>"+string.slice(pos,pos+len)+"</span>"+string.slice(pos+len)
};

clearSearchBtn.addEventListener('click', () => {
  searchInp.value = '';
  clearSearchBtn.classList.add('d-none');
  searchItemAll.classList.remove('d-flex');
  resultTitle.classList.remove('d-none');
  searchResults.forEach(elem => {
    elem.parentElement.parentElement.parentElement.classList.remove('hide')
  });
});

headerSearch.forEach(btn => {
  btn.addEventListener('click', () => {
    search.classList.add('showSearch');
    body.classList.add('overflow-hidden');
  });
})


searchClose.addEventListener('click', () => {
  search.classList.remove('showSearch');
  body.classList.remove('overflow-hidden');
});

window.onclick = function(e) {
  if(e.target == search) {
      search.classList.remove('showSearch');
      body.classList.remove('overflow-hidden'); 
  }
}

favorites.forEach(favorite => {
  favorite.addEventListener('click', () => {
    favorite.classList.toggle('favorite_check')
  })
})


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
            return `<span class="' + ${currentClass} +'"></span> `+ ' из ' + `<span class="' + ${tottalClass} +'"></span> ` 
        }
      },

      keyboard: {
        enabled: true,
      },

      watchOverflow: true,
      
    breakpoints: {
        320: {
            slidesPerView: 1.5,
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
