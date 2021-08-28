document.addEventListener('DOMContentLoaded', () => {
    const navList = document.querySelector('.nav__list');
    const navToggle = document.querySelector('.nav__toggle');

    function navBarToggle(){
        navList.classList.toggle('nav__list--visible');
    }

    navToggle.addEventListener('click', navBarToggle);
})