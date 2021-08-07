const backToTopDOM = document.querySelector('.back-to-top');
const stickyDOM = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTopDOM.classList.remove('hide');
    } else {
        backToTopDOM.classList.add('hide');
    }
    if (window.scrollY > 150) {
        stickyDOM.classList.add('sticky');
        stickyDOM.classList.remove('notSticky');
    } else {
        stickyDOM.classList.remove('sticky');
        stickyDOM.classList.add('notSticky');
    }
})


