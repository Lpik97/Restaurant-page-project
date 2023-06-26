import renderNavBar from "./navbar";

function renderMenu () {
    renderNavBar();

    const CONTENT = document.querySelector('#content');

    const STARTERS = document.createElement('div');
    STARTERS.classList.add('starters');
    CONTENT.appendChild(STARTERS);

    const STARTERS_CARDS = document.createElement('div');
    STARTERS_CARDS.classList.add('starters-cards');
    STARTERS.appendChild(STARTERS_CARDS);

    const CARD_1 = document.createElement('div');
    CARD_1.classList.add('card');
    CARD_1.innerHTML = `
    <h1 class="card-title">Tortilla de patatas</h1>
    <img class="card-img" alt="tortilla de patatas" src="https://sixhungryfeet.com/wp-content/uploads/2020/10/spanish-omelette-7.jpg">
    <p class="card-desc"> Exquisita tortilla de patatas elaborada en el dia </p>
    `
    STARTERS_CARDS.appendChild(CARD_1);


    const CARD_2 = document.createElement('div');
    CARD_2.classList.add('card');
    CARD_2.innerHTML = `
    <h1 class="card-title">Pepito</h1>
    <img class="card-img" alt="Pepito" src="https://farm8.staticflickr.com/7478/26845034706_0494a030eb_b.jpg">
    <p class="card-desc"> Pepito de lomo, tomates y algo de cebollita </p>
    `
    STARTERS_CARDS.appendChild(CARD_2);

    const CARD_3 = document.createElement('div');
    CARD_3.classList.add('card');
    CARD_3.innerHTML = `
    <h1 class="card-title">Chorizos fritos</h1>
    <img class="card-img" alt="Chorizos frito" src="https://www.thespruceeats.com/thmb/N269SZNvi6bwhl7dpg8xksmkByg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-90202661-5a21596ab39d03003949f4e2.jpg">
    <p class="card-desc"> Cuenco de chorizos de puerco fritos </p>
    `
    STARTERS_CARDS.appendChild(CARD_3);

    const CARD_4 = document.createElement('div');
    CARD_4.classList.add('card');
    CARD_4.innerHTML = `
    <h1 class="card-title">Patatas bravas</h1>
    <img class="card-img" alt="Patatas bravas" src="https://www.jocooks.com/wp-content/uploads/2023/02/patatas-bravas-1-18.jpg">
    <p class="card-desc"> Patatas bravas </p>
    `
    STARTERS_CARDS.appendChild(CARD_4);

    const CARD_5 = document.createElement('div');
    CARD_5.classList.add('card');
    CARD_5.innerHTML = `
    <h1 class="card-title">Tapeo variado</h1>
    <img class="card-img" alt="Tapeo variado" src="https://madudafhuset.lovbjerg.dk/File/63302/Tapas.jfif?width=590&stretchmode=UniformToMax&ticks=638001310870000000">
    <p class="card-desc"> Tapeo de quesos, jamon, aceitunas y demas </p>
    `
    STARTERS_CARDS.appendChild(CARD_5);

    const CARD_6 = document.createElement('div');
    CARD_6.classList.add('card');
    CARD_6.innerHTML = `
    <h1 class="card-title">Patatas con carne</h1>
    <img class="card-img" alt="Patatas con carne" src="https://images.immediate.co.uk/production/volatile/sites/30/2022/05/Meatball-Patatas-Bravas-2dcb0fc.jpg?quality=90&resize=556,505">
    <p class="card-desc"> Cuenco de patatas con carne </p>
    `
    STARTERS_CARDS.appendChild(CARD_6);
}

export default renderMenu;