import renderNavBar from "./navbar";

function renderContact () {
    renderNavBar();

    const CONTENT = document.querySelector('#content');

    const CONTACT_BACKGROUND = document.createElement('div');
    CONTACT_BACKGROUND.classList.add('contact-background');
    CONTENT.appendChild(CONTACT_BACKGROUND);

    const CONTACT_CARD = document.createElement('div');
    CONTACT_CARD.classList.add('contact-card');
    CONTACT_BACKGROUND.appendChild(CONTACT_CARD);

    const CONTACT_NUMBER = document.createElement('h1');
    CONTACT_NUMBER.classList.add('contact-number');
    CONTACT_NUMBER.innerHTML = '4583-4832'
    CONTACT_CARD.appendChild(CONTACT_NUMBER);

    const CONTACT_ADRESS = document.createElement('p');
    CONTACT_ADRESS.classList.add('contact-adress');
    CONTACT_ADRESS.innerHTML = 'C. Mayor, 7, 28012 Madrid, Spain'
    CONTACT_CARD.appendChild(CONTACT_ADRESS);

    const CONTACT_MAP = document.createElement('div');
    CONTACT_MAP.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1555283.9812510284!2d-5.023995775!3d40.416293100000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42287ef7b2ea4f%3A0xe3b77b0c922a34c3!2sMuseo%20del%20Jam%C3%B3n!5e0!3m2!1sen!2sdk!4v1687770557077!5m2!1sen!2sdk" width="600" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    CONTACT_CARD.appendChild(CONTACT_MAP)
};

export default renderContact;