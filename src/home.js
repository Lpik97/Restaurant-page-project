import renderNavBar from "./navbar";

function renderHome() {
    renderNavBar();
    
    const CONTENT = document.querySelector('#content');

    const HERO = document.createElement('div');
    HERO.classList.add('hero');
    CONTENT.appendChild(HERO);

    const HERO_DESC = document.createElement('p');
    HERO_DESC.classList.add('hero-desc');
    HERO_DESC.innerText = 'Ven y pasate un momentazo oyendo al Manolo contar unos chistacos'
    HERO.appendChild(HERO_DESC);
}

export default renderHome;