const editBooks = document.querySelectorAll('.editBook')


editBooks.forEach(edit => {
    edit.addEventListener('click', () => {
        edit.nextElementSibling.classList.toggle('showEditBook')
    })
})
