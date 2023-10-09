const headerBurger = document.querySelector('.header-burger'),
      menu = document.querySelector('.menu'),
      menuClose = document.querySelector('.menu-close'),     
      header = document.querySelector('.header'),
      headerUsers = document.querySelectorAll('.header .header__user'),
      userInfoSidebar = document.querySelector('.user-info-sidebar'),
      userInfoSidebarClose = document.querySelectorAll('.user-info-sidebar .close'),
      search = document.querySelector('.search'),
      body = document.querySelector('body'),
      headerSearch = document.querySelectorAll('.header-search__btn'),
      searchInp = document.querySelector('.search__inp'),
      clearSearchBtn = document.querySelector('.clear-search'),
      searchClose = document.querySelector('.header-search__close'),
      resultTitle = document.querySelector('.search-result__text'),
      searchItemAll = document.querySelector('.search-item__all'),
      searchResults = document.querySelectorAll('.search-result__title'),
      result = document.querySelector('.result-avatar'),
      downloadAvatar = document.querySelector('.download-avatar'),
      saveAvatar = document.querySelector('.save-avatar__btn'),
      cropperImgs = document.querySelectorAll('.cropper_img'),
      uploadAvatar = document.getElementById('uploadInput'),
      editAvatarBtn = document.querySelector('.edit-avatar__btn'),
      modalEditAvatarClose = document.querySelector('.modal-edit-avatar__close'),
      modalEditAvatar = document.querySelector('.modal-edit-avatar'),
      changePersonalDetailsClose = document.querySelector('.change-personal-details__close'),
      changePersonalDetails = document.querySelector('.change-personal-details'),
      changePassword = document.querySelector('.change-password'),
      changePasswordClose = document.querySelector('.change-password__close'),
      editPersonalDetailsBtn = document.getElementById('editPersonalDetailsBtn'),
      editPasswordBtn = document.getElementById('editPasswordBtn')



editPersonalDetailsBtn.addEventListener('click', () => {
  changePersonalDetails.classList.remove('d-none')
});

changePersonalDetailsClose.addEventListener('click', () => {
  changePersonalDetails.classList.add('d-none')
});

editPasswordBtn.addEventListener('click', () => {
  changePassword.classList.remove('d-none')
});

changePasswordClose.addEventListener('click', () => {
  changePassword.classList.add('d-none')
});


// Загрузить фото

  editAvatarBtn.addEventListener('click', () => {
    modalEditAvatar.classList.remove('d-none');
    modalEditAvatar.children[0].classList.remove('d-none');
    modalEditAvatar.children[1].classList.add('d-none');
  });

  modalEditAvatarClose.addEventListener('click', () => {
    modalEditAvatar.classList.add('d-none')
  });

    let cropper = '';
  
    uploadAvatar.addEventListener('change', (e) => {
    if (e.target.files.length) {
        const reader = new FileReader();
        reader.onload = (e)=> {
        if(e.target.result){
                    let img = document.getElementById('avatarPhoto');
                    img.src = e.target.result
                    img.parentElement.classList.remove('d-none');
                    downloadAvatar.classList.add('border-0', 'rounded-0')
                    cropper = new Cropper(img);
        }
        };
        reader.readAsDataURL(e.target.files[0]);
    }
    });

    saveAvatar.addEventListener('click',(e)=>{
    e.preventDefault();
    let imgSrc = cropper.getCroppedCanvas({
        }).toDataURL();
        cropperImgs.forEach(cropped => {
          cropped.src = imgSrc;
        });
        
        modalEditAvatar.children[0].classList.add('d-none');
        modalEditAvatar.children[1].classList.remove('d-none');
    });
    


    headerBurger.addEventListener('click', ()=> {
      menu.classList.add('showMenu');
      body.classList.add('overflow-hidden'); 
  });
  
  menuClose.addEventListener('click', ()=> {
      menu.classList.remove('showMenu');
      body.classList.remove('overflow-hidden'); 
  });
  
headerUsers.forEach(headerUser => {
  headerUser.addEventListener('click', () => {
    userInfoSidebar.classList.add('showSidebar');
    body.classList.add('overflow-hidden');
  });
})


userInfoSidebarClose.forEach(close => {
  close.addEventListener('click', () => {
    userInfoSidebar.classList.remove('showSidebar');
    body.classList.remove('overflow-hidden');
  })
})

let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if(scrollTop > lastScrollTop) {
    header.children[0].children[0].classList.add('shadow-sm')
  } else {
  }
  lastScrollTop = scrollTop
  if(lastScrollTop == 0) {
    header.children[0].children[0].classList.remove('shadow-sm')
  }
});


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
});


searchClose.addEventListener('click', () => {
  search.classList.remove('showSearch');
  body.classList.remove('overflow-hidden');
});

window.onclick = function(e) {
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
  if(e.target == modalEditAvatar) {
    modalEditAvatar.classList.add('d-none')
  }
}

$(document).ready(function () {
  $(".phone").inputmask("+7 (999) 999-99-99");
});

