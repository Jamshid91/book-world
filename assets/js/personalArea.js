const userPass = document.getElementById('userPass'),
      eyesOpen = document.querySelector('.eyes-open'),
      eyesClose = document.querySelector('.eyes-close')


eyesOpen.addEventListener('click', () => {
    if(userPass.getAttribute('type') == 'password') {
        userPass.setAttribute('type', 'text') 
    }
});

eyesClose.addEventListener('click', () => {
    if(userPass.getAttribute('type') == 'text') {
        userPass.setAttribute('type', 'password') 
    }
});