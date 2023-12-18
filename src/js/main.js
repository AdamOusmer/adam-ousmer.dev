const nav = document.querySelector('#menu');
const menu = document.querySelector('nav');

let menuOpen = false;

nav.addEventListener('click', function () {
    if (!menuOpen) {
        menu.classList.add('active');
        nav.classList.add('active');
        menuOpen = true;
    }
    else {
        nav.classList.remove('active');
        menu.classList.remove('active');
        menuOpen = false;
    }
});