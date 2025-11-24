let filter = "";

if (window.location.pathname == "/index.html") filter = "salgadas";
else {
    document.getElementById('filter-all').addEventListener('click', (event) => {
        filter = "";
        for (children of event.target.parentElement.children) {
            children.className = "select";
        }
        event.target.className = "selected"
        getMenuItens();
    });

    document.getElementById('filter-salgadas').addEventListener('click', (event) => {
        filter = "salgadas";
        for (children of event.target.parentElement.children) {
            children.className = "select";
        }
        event.target.className = "selected"
        
        getMenuItens();
    });

    document.getElementById('filter-doces').addEventListener('click', (event) => {
        filter = "doces";
        for (children of event.target.parentElement.children) {
            children.className = "select";
        }
        event.target.className = "selected"
        getMenuItens();
    });

    document.getElementById('filter-bebidas').addEventListener('click', (event) => {
        filter = "bebidas";
        for (children of event.target.parentElement.children) {
            children.className = "select";
        }
        event.target.className = "selected"
        getMenuItens();
    });
}

async function getMenuItens() {
    const res = await fetch('/json/menu.json');
    const data = await res.json();
    const container = document.querySelector(".main-selector-pizza");
    let pizzas = []

    container.innerHTML = '';

    if (filter === "") {
        pizzas = [
            ...(data.menu.pizzas_salgadas || []),
            ...(data.menu.pizzas_doces || [])
        ];
    } else if (filter === "salgadas") {
        pizzas = [
            ...(data.menu.pizzas_salgadas || []),
        ];
    } else if (filter === "doces") {
        pizzas = [
            ...(data.menu.pizzas_doces || []),
        ];
    } else if (filter === "bebidas") {
        pizzas = [
            ...(data.menu.bebidas || []),
        ];
    }

    for (const item of pizzas) {
        if (filter != "bebidas") {
            createItemCard(item.nome, "descricao temporaria", item.tempo_preparo_min, item.nota_estrelas + "⭐", item.precos.grande, item.imagem, container);
        } else createItemCard(item.nome, item.tipo, "3", item.tamanho, item.preco, item.imagem, container);
    }
}

function createItemCard(name, description, time, rating, price, image, parent) {
    const pizza = document.createElement('div');
    pizza.className = 'pizza';
    pizza.innerHTML = `
        <div class="pizza-image">
            <img src="${image}" width="96" height="96" alt="${name}">
        </div>
        <div class="pizza-info">
            <h4 class="pizza-info-name">${name}</h4>
            <h5 class="pizza-info-more">${description}</h5>
            <h5 class="pizza-info-size-rating">${time}min | ${rating}</h5>
            <h4 class="pizza-info-price">R$${price},00</h4>
        </div>
        <span class="pizza-more">Ver Mais -></span>
    `;

    parent.appendChild(pizza);
}

getMenuItens();