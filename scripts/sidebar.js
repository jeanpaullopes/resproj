const openMenu = document.getElementById("openMenu");
const sidebar = document.getElementById("sidebar");

openMenu.addEventListener("click", () => {
    sidebar.classList.toggle("open");
});

sidebar.addEventListener("click", () => {
    sidebar.classList.toggle("open");
})

let promotions = document.createElement('a');
promotions.innerHTML = "Ver Promoções";
promotions.href = "/htmls/promotions.html";

let delivery = document.createElement('a');
delivery.innerHTML = "Pedir um Delivery";
delivery.href = "/htmls/homepage.html";

let tracking = document.createElement('a');
tracking.innerHTML = "Acompanhar Pedido";
tracking.href = "/htmls/trackorder.html";

let work = document.createElement('a');
work.innerHTML = "Trabalhe Conosco";
work.href = "/htmls/homepage.html";

sidebar.appendChild(promotions);
sidebar.appendChild(delivery);
sidebar.appendChild(tracking);
sidebar.appendChild(work);

if (localStorage.getItem("isClient") === "false") {
    let comanda = document.createElement('a')
    comanda.innerHTML = "Gerenciar Mesas";
    comanda.href = "/htmls/reservations.html";
    comanda.style.color = "lightgreen"

    let management = document.createElement('a')
    management.innerHTML = "Gerenciar Cardápio";
    management.href = "/htmls/management.html";
    management.style.color = "lightgreen"
    
    let manage = document.createElement('a')
    manage.innerHTML = "Adicionar Pizza";
    manage.href = "/htmls/manage.html";
    manage.style.color = "lightgreen"

    sidebar.appendChild(comanda);
    sidebar.appendChild(management);
    sidebar.appendChild(manage);
}