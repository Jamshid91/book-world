const addToCollection = document.querySelector('.addToCollection'),
      addingToCollectionBtn = document.getElementById('addingToCollectionBtn'),
      modalAddingToCollection = document.querySelector('.modal-addingToCollection'),
      addingToCollectionClose = document.getElementById('addingToCollectionClose'),
      modalAddedClose = document.getElementById('modalAddedClose'),
      reviewsOpenBtn = document.querySelectorAll('.reviews-open__btn'),
      formCreateCollection = document.querySelector('.createCollection-form'),
      formInputs = document.querySelectorAll('.createCollection-form__inp'),
      formCheck = document.querySelector('.review-form  #check'),
      formBtn = document.getElementById('createCollectionBtn'),
      error = document.querySelector('small.error'),
      modalCreateCollection = document.querySelector('.modal-createCollection'),
      createCollectionClose = document.getElementById('createCollectionClose'),
      addedToCollectionClose = document.getElementById('addedToCollectionClose'),
      creatCollectionBtn = document.getElementById('creatCollectionBtn')


// Modal Создание коллекции
creatCollectionBtn.addEventListener('click', () => {
    modalCreateCollection.classList.remove('d-none');
    body.classList.add('overflow-hidden'); 
    modalCreateCollection.children[0].classList.remove('d-none');
    modalCreateCollection.children[1].classList.add('d-none');
});
const [myBook, descriptionBook] = formInputs
formCreateCollection.addEventListener('submit', (e) => {
    e.preventDefault();
});

formBtn.addEventListener('click', (e) => {
    checkInputs();
    if(error.innerHTML == '') {
        const values = {
          'название новой коллекции': myBook.value,
          'Описания': descriptionBook.value
        }
    
        formBtn.type = 'submit'
        e.preventDefault();
    
        formBtn.parentElement.parentElement.parentElement.classList.add('d-none');
        formBtn.parentElement.parentElement.parentElement.nextElementSibling.classList.remove('d-none');
    
        console.log(values)
      }
});

function checkInputs() {
 const myBookValue = myBook.value.trim(),
       descriptionBookValue = descriptionBook.value.trim()
  
    if(myBookValue === '') {
      setErrorFor(myBook, '1px solid #FF0000')
    } else {
      setSuccesFor(myBook)
    }
  
    if(descriptionBookValue === '') {
      setErrorFor(descriptionBook, '1px solid #FF0000')
    }else {
      setSuccesFor(descriptionBook)
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

  createCollectionClose.addEventListener('click', () => {
    modalCreateCollection.classList.add('d-none');
    body.classList.remove('overflow-hidden'); 
    });
    addedToCollectionClose.addEventListener('click', () => {
        modalCreateCollection.classList.add('d-none');
        body.classList.remove('overflow-hidden'); 
    });
    

    // Modal Создание коллекции
    addingToCollectionBtn.addEventListener('click', () => {
        let selected = document.querySelector('input[name="collection"]:checked')
        if(selected) {
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
        if(e.target == modalCreateCollection) {
            modalCreateCollection.classList.add('d-none');
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
















// requestAnInvoiceSubmit.addEventListener('click', (e) => {
//   checkInputs();
//   if(error.innerHTML == '') {
//       const values = {
//         'Собщение': message.value,
//         'Реквизиты': requisites.value,
//         'Файл': file.value
//       }
  
//       requestAnInvoiceSubmit.type = 'submit'
//       e.preventDefault();
  
//       requestAnInvoiceSubmit.parentElement.parentElement.classList.add('hidden');
//       requestAnInvoiceSubmit.parentElement.parentElement.nextElementSibling.classList.remove('hidden');
  
//       console.log(values)
//     }
// });

// function checkInputs() {
// const messageValue = message.value.trim(),
//     requisitesValue = requisites.value.trim(),
//     fileValue = file.value.trim()

//   if(messageValue === '') {
//     setErrorFor(message, '1px solid #FF0000')
//   } else {
//     setSuccesFor(message)
//   }

//   if(requisitesValue === '') {
//     setErrorFor(requisites, '1px solid #FF0000')
//   }else {
//     setSuccesFor(requisites)
//   }
  
//   if(fileValue === '') {
//       setErrorFor(file, '1px solid #FF0000')
//     }else {
//       setSuccesFor(file)
//     }
// }

// function setErrorFor(input, border) {
//     error.classList.add('inputError');
//     input.classList.add('inputError');
//     error.innerHTML = ' '
//     input.style.border = border
// }

// function setSuccesFor(input) {
//     input.style.border = '1px solid #F3A93C'
//     input.classList.remove('inputError');
//     input.classList.add('inputSucces');
//     error.innerHTML = ''
// } 
