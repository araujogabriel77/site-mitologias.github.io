let body = document.body;
let menu = document.getElementById('menu-mobi');
let icone = document.getElementById('icone-menu');
let btn = document.getElementById('btn-menu');
const links = document.querySelectorAll('.menu-mobi a[href^="#"]');

btn.addEventListener('click', abreMenu);

links.forEach(item => {
    item.addEventListener('click', abreMenu);
})

function abreMenu() {
    body.classList.toggle('open-menu');
    menu.classList.toggle('no-active-mobi');
    icone.classList.toggle('rotate');
}

// Menu deuses

const navGods = document.querySelectorAll('.nav-gods a[href^="#"]');

navGods.forEach(item => {
    item.addEventListener('click', scrollToId);
})

function getScrollTopByHref(element) {
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
}
function scrollToId(event) {
    event.preventDefault();
    const to = getScrollTopByHref(event.target) - 20;

    scrollToPosition(to);
}
function scrollToPosition(to) {
    window.scroll({
        top: to,
        behavior: "smooth",
    });
}