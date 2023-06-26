import loadPage from './loadpage.js';
import cleanPage from './cleanpage.js';
import renderMenu from './menu.js';
import renderContact from './contact.js';

function renderNavBar() {
    const CONTENT = document.querySelector('#content');

    const HEADER = document.createElement('div');
    HEADER.classList.add('header');
    CONTENT.appendChild(HEADER);

    const TITLE = document.createElement('h1');
    TITLE.classList.add('header-title');
    TITLE.innerText = 'El museo del jamón';
    HEADER.appendChild(TITLE);

    const NAVBAR = document.createElement('nav');
    NAVBAR.classList.add('navbar');
    HEADER.appendChild(NAVBAR);

    const HOME = document.createElement('button');
    HOME.classList.add('home');
    HOME.innerText = 'HOME';
    HOME.addEventListener('click', function () {
        cleanPage();
        loadPage();
    });
    NAVBAR.appendChild(HOME);

    const MENU = document.createElement('button');
    MENU.classList.add('menu');
    MENU.innerText = 'MENU';
    MENU.addEventListener('click', function () {
        cleanPage();
        renderMenu();
    });
    NAVBAR.appendChild(MENU);

    const CONTACT = document.createElement('button');
    CONTACT.classList.add('contact');
    CONTACT.innerText = 'CONTACT';
    CONTACT.addEventListener('click', function () {
        cleanPage();
        renderContact();
    });
    NAVBAR.appendChild(CONTACT);
};

export default renderNavBar;