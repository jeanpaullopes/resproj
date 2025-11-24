async function getMenuItens() {
    const res = await fetch('/json/menu.json');
    const data = await res.json();
    console.log(data.menu);
    const container = document.querySelector(".main-selector-pizza");

    const pizzas = [
        ...(data.menu.pizzas_salgadas || []),
        ...(data.menu.pizzas_doces || [])
    ];

    for (const item of pizzas) {
        createItemCard(item.nome, "descricao temporaria", item.tempo_preparo_min, item.nota_estrelas, item.precos.grande, item.imagem, container)
    }
}

function createItemCard(name, description, time, rating, price, image, parent) {
    const pizza = document.createElement('div');
    pizza.className = 'pizza';
    pizza.innerHTML = `
        <div class="pizza-image">
            <img src="${image || '/img/default.png'}" width="96" height="96" alt="${name}">
        </div>
        <div class="pizza-info">
            <h4 class="pizza-info-name">${name}</h4>
            <h5 class="pizza-info-more">${description}</h5>
            <h5 class="pizza-info-size-rating">${time}min | ${rating}⭐</h5>
            <h4 class="pizza-info-price">R$${price},00</h4>
        </div>
        <span class="pizza-more">Ver Mais -></span>
    `;
    parent.appendChild(pizza);
}

/*<div class="pizza">
    <div class="pizza-image">
        <img src="/img/calabreso.png" width="96px" height="96px">
    </div>
    <div class="pizza-info">
        <h4 class="pizza-info-name">Pizza de Calabresa</h4>
        <h5 class="pizza-info-more">Calabresa, muçarela, molho</h5>
        <h5 class="pizza-info-size-rating">25cm | 4.5⭐</h5>
        <h4 class="pizza-info-price">R$42.90</h4>
    </div>
    <span class="pizza-more">Ver Mais -></span>
</div>*/

getMenuItens();