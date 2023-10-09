const productPhotos = document.querySelectorAll('.product-photos-list'),
      photoHome = document.getElementById('photoHome'),
      addToCollection = document.querySelector('.addToCollection'),
      addedEmoji = document.querySelector('.put-reaction .added-emoji'),
      emojis = document.querySelectorAll('.put-reaction .emoji'),
      addingToCollectionInp = document.querySelectorAll('.addingToCollection__inp'),
      addingToCollectionBtn = document.getElementById('addingToCollectionBtn'),
      modalAddingToCollection = document.querySelector('.modal-addingToCollection'),
      addingToCollectionClose = document.getElementById('addingToCollectionClose'),
      modalAddedClose = document.getElementById('modalAddedClose'),
      addedTextCollection = document.querySelector('.added__text-collection'),
      expectedTextBtns = document.querySelectorAll('.expected-text__btn'),
      reviewsOpenBtn = document.querySelectorAll('.reviews-open__btn'),
      formReview = document.querySelector('.review-form'),
      formInputs = document.querySelectorAll('.review-form .review-form__inp'),
      formMessage = document.querySelectorAll('.review-form  .review-form__text'),
      formCheck = document.querySelector('.review-form  #check'),
      formBtn = document.getElementById('addingToReviewBtn'),
      error = document.querySelector('small.error'),
      modalAddingToReview = document.querySelector('.modal-addingToReview'),
      addingToReviewClose = document.getElementById('addingToReviewClose'),
      addedToReviewClose = document.getElementById('addedToReviewClose'),
      leaveReviewBtn = document.getElementById('leaveReviewBtn'),
      favorites = document.querySelectorAll('.favorite')




      favorites.forEach(favorite => {
        favorite.addEventListener('click', () => {
          favorite.classList.toggle('favorite_check')
        })
      });

// Modal Оставьте свои отзыв
leaveReviewBtn.addEventListener('click', () => {
    modalAddingToReview.classList.remove('d-none');
    body.classList.add('overflow-hidden'); 
    modalAddingToReview.children[0].classList.remove('d-none');
    modalAddingToReview.children[1].classList.add('d-none');
})
const [userName, titleReview] = formInputs,
      [comment, pros, minus] = formMessage;
formReview.addEventListener('submit', (e) => {
    e.preventDefault();
});

formBtn.addEventListener('click', (e) => {
    checkInputs();
    if(error.innerHTML == '') {
        const values = {
          'Имя или псевдоним': userName.value,
          'Заголовок': titleReview.value,
          'Комментарий': comment.value,
          'плюсы книги': pros.value,
          'минусы книги': minus.value
        }
    
        formBtn.type = 'submit'
        e.preventDefault();
    
        formBtn.parentElement.parentElement.parentElement.classList.add('d-none');
        formBtn.parentElement.parentElement.parentElement.nextElementSibling.classList.remove('d-none');
    
        console.log(values)
      }
});

function checkInputs() {
 const userNameValue = userName.value.trim(),
      titleReviewValue = titleReview.value.trim(),
      commentValue = comment.value.trim(),
      prosValue = pros.value.trim(),
      minusValue = minus.value.trim()
  
    if(userNameValue === '') {
      setErrorFor(userName, '1px solid #FF0000')
    } else {
      setSuccesFor(userName)
    }
  
    if(titleReviewValue === '') {
      setErrorFor(titleReview, '1px solid #FF0000')
    }else {
      setSuccesFor(titleReview)
    }
  
    
    if(commentValue === '') {
      setErrorFor(comment, '1px solid #FF0000')
    }else {
      setSuccesFor(comment)
    }

    if(prosValue === '') {
        setErrorFor(pros, '1px solid #FF0000')
      }else {
        setSuccesFor(pros)
      }
      if(minusValue === '') {
        setErrorFor(minus, '1px solid #FF0000')
      }else {
        setSuccesFor(minus)
      }

      if(formCheck.checked == false) {
        setErrorFor(formCheck)
      }else {
        setSuccesFor(formCheck)
      }
  }
  
  function setErrorFor(input, border) {
      error.classList.add('inputError');
      input.classList.add('inputError');
      error.innerHTML = ' '
      input.style.borderBottom = border
  }
  
  function setSuccesFor(input) {
      input.style.borderBottom = '1px solid #F3A93C'
      input.classList.remove('inputError');
      input.classList.add('inputSucces');
      error.innerHTML = ''
  } 

    addingToReviewClose.addEventListener('click', () => {
    modalAddingToReview.classList.add('d-none');
    body.classList.remove('overflow-hidden'); 
    });
    addedToReviewClose.addEventListener('click', () => {
        modalAddingToReview.classList.add('d-none');
        body.classList.remove('overflow-hidden'); 
    });


// О книге
let count = 0;
expectedTextBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        if(count == 0) {
            btn.parentElement.parentElement.classList.add('showInfoText');
            btn.children[0].textContent = 'Свернуть'
            return count = 1;
        } else {
            btn.parentElement.parentElement.classList.remove('showInfoText');
            btn.children[0].textContent = 'Читать полностью'
            return count = 0;
        }
    });
});


// Добавление в коллекцию
addingToCollectionBtn.addEventListener('click', () => {
    let selected = document.querySelector('input[name="collection"]:checked')
    if(selected) {
        addedTextCollection.textContent = selected.value
        addToCollection.classList.add('added');
        addingToCollectionBtn.parentElement.parentElement.classList.add('d-none');
        addingToCollectionBtn.parentElement.parentElement.nextElementSibling.classList.remove('d-none');
    }
});

addToCollection.addEventListener('click', () => {
    modalAddingToCollection.classList.remove('d-none');
    body.classList.add('overflow-hidden');
    addingToCollectionBtn.parentElement.parentElement.classList.remove('d-none');
    addingToCollectionBtn.parentElement.parentElement.nextElementSibling.classList.add('d-none');
});

addingToCollectionClose.addEventListener('click', () => {
    modalAddingToCollection.classList.add('d-none');
    body.classList.remove('overflow-hidden');
});

modalAddedClose.addEventListener('click', () => {
    modalAddingToCollection.classList.add('d-none');
    body.classList.remove('overflow-hidden');
});

window.onclick = function(e) {
    if(e.target == modalAddingToCollection) {
        modalAddingToCollection.classList.add('d-none');
        body.classList.remove('overflow-hidden');
    }
    if(e.target == modalAddingToReview) {
        modalAddingToReview.classList.add('d-none');
        body.classList.remove('overflow-hidden');
    }
    if(e.target == search) {
        search.classList.remove('showSearch');
        body.classList.remove('overflow-hidden'); 
    }
    if(e.target == search) {
        search.classList.remove('showSearch');
        body.classList.remove('overflow-hidden'); 
    }
    if(e.target == userInfoSidebar) {
      userInfoSidebar.classList.remove('showSidebar');
      body.classList.remove('overflow-hidden');
    }
    if(e.target == menu){
      menu.classList.remove('showMenu');
      body.classList.remove('overflow-hidden'); 
    }
  }

productPhotos.forEach(photo => {
    photo.addEventListener('click', () => {
        productPhotos.forEach(photoActive => {
            photoActive.classList.remove('active')
        })
        photoHome.src = photo.firstElementChild.src
        photo.classList.add('active')
    });
});

emojis.forEach(emoji => {
    emoji.addEventListener('click', () => {
        addedEmoji.innerHTML = emoji.innerHTML
    })
});

// Копировать ссылку
const btnCopy = document.querySelector('.copy_btn');
    btnCopy.addEventListener('click', () => {
    let copied = btnCopy.children[2];
    let copyText = btnCopy.children[3].textContent;
    let inputElem = document.createElement('input');
    inputElem.type = 'text';

    inputElem.value = copyText;

    document.body.appendChild(inputElem);
    inputElem.select();
    document.execCommand('copy');
    inputElem.style.display = 'none'

    copied.style.visibility = 'visible';

    setTimeout(() => {
      copied.style.visibility = 'hidden';
    }, 800);
  });


//   Отзывы о книге
let count2 = 0
reviewsOpenBtn.forEach(review => {
    review.addEventListener('click', () => {
            if(count2 == 0) {
                review.parentElement.previousElementSibling.classList.add('showAllReviews');
                review.children[0].textContent = 'Свернуть'
                review.classList.add('clickedBtn')
                console.dir(review.parentElement)
                return count2 = 1;
            } else {
                review.parentElement.previousElementSibling.classList.remove('showAllReviews');
                review.children[0].textContent = 'Читать полностью'
                review.classList.remove('clickedBtn')
                return count2 = 0;
            }
    })
})




// Книги из серии
const booksSeries = new Swiper('.books-series-slider', {
    navigation: {
        nextEl: '.books-series-slider-next',
        prevEl: '.books-series-slider-prev',
      },
      pagination: {
        el: '.books-series-slide-pagination',
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
    
// Книги из серии
const otherLanguages = new Swiper('.other-languages-slider', {
    navigation: {
        nextEl: '.other-languages-slider-next',
        prevEl: '.other-languages-slider-prev',
      },
      pagination: {
        el: '.other-languages-slide-pagination',
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

//   Вы смотрели
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