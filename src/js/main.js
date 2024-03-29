// noinspection JSVoidFunctionReturnValueUsed

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

// Start Animation Loading Screen

window.onload = function () {
    setTimeout(function() {
        document.querySelector('#loader').classList.add('hide');

        setTimeout(function() {
            document.querySelector('#loader').style.display = 'none';

        }, 700);
    }, 2500);
};


// Spiral Animation

const word = "Software Engineering Student";
const length = word.length;
const animationDuration = 4000;

const characters = word.split("").forEach((char, i) => {
    function createElement(offset) {
        const div = document.createElement("div");
        div.innerHTML = char=== " " ? "&nbsp;" : char;
        div.className = "spiral-char";
        div.style.animationDelay = `-${i * (animationDuration/length) - offset}ms`;
        return div;
    }

    document.getElementById("spiral").append(createElement(0));
    document.getElementById("spiral1").append(createElement(-1 * (animationDuration/2)));
});

// End Animation Loading Screen

// Copyright Footer

const year = new Date().getFullYear();

const copy_container = document.querySelector('#copyright');

copy_container.innerHTML = `Adam Ousmer &copy; ${year}`;


