document.addEventListener("DOMContentLoaded", () => {

let allPizzas = [];

fetch("../json/menu.json")
    .then(response => response.json())
    .then(data => {
        allPizzas = [
            ...data.menu.pizzas_salgadas.map(p => ({ ...p, categoria: "salgadas" })),
            ...data.menu.pizzas_doces.map(p => ({ ...p, categoria: "doces" }))
        ];
        renderPizzas(allPizzas);
        const selectFilter = document.getElementById("filter-category");
        if (selectFilter) {
            selectFilter.addEventListener("change", () => {
                const filtro = selectFilter.value;
                if (filtro === "all") {
                    renderPizzas(allPizzas);
                } else {
                    const filtradas = allPizzas.filter(p => p.categoria === filtro);
                    renderPizzas(filtradas);
                }
            });
        }
    })

function renderPizzas(lista) {
    const container = document.getElementById("pizza-list");
    container.innerHTML = "";
    lista.forEach(pizza => {
        const card = `
            <div class="management-pizza-card">
                <img src="${pizza.imagem}" class="management-pizza-img">

                <div class="management-pizza-info">
                    <div class="management-title-line">
                        <h2>${pizza.nome}</h2>
                        <span class="management-tag">${pizza.categoria}</span>
                    </div>

                    <div class="management-info-row">
                        <span><img src="../img/Group.png"> ${pizza.tempo_preparo_min}min</span>
                        <span><img src="../img/Star 1.png"> ${pizza.nota_estrelas}</span>
                    </div>

                    <div class="management-price-row">
                        <span>Preço (Média): </span>
                        <span class="price">R$ ${pizza.precos.media.toFixed(2)}</span>
                    </div>

                    <div class="management-size-prices">
                        <span>P: R$ ${pizza.precos.pequena.toFixed(2)}</span>
                        <span>M: R$ ${pizza.precos.media.toFixed(2)}</span>
                        <span>G: R$ ${pizza.precos.grande.toFixed(2)}</span>
                    </div>

                    <div class="management-actions">
                        <button class="management-edit-btn">Editar</button>
                        <button class="management-disable-btn">Desabilitar</button>
                        <a href="#"><img src="../img/Trash.png" class="management-delete-btn"></a>
                    </div>
                </div>
            </div>
        `;

        container.insertAdjacentHTML("beforeend", card);

        const newCard = container.lastElementChild;
        const disableBtn = newCard.querySelector(".management-disable-btn");

        disableBtn.addEventListener("click", () => {
            newCard.classList.toggle("disabled");
            disableBtn.textContent =
                newCard.classList.contains("disabled")
                    ? "Ativar"
                    : "Desabilitar";
        });
    });
}
});
