const avaliarButton = document.querySelectorAll(".pizza-order-more-options-rate");
const popup = document.querySelector(".avaliacao-popup");
const avaliarCloseButton = document.querySelector(".avaliacao-popup-close");
const form = document.querySelector(".avaliacao-popup-form");
let orderSelected;

avaliarButton.forEach((button) => {
    button.addEventListener("click", () => {
        orderSelected = button.parentElement.parentElement;
        showAvaliar();
    })
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const ratingOrder = document.querySelector("#order").value;
    const ratingReception = document.querySelector("#reception").value;
    
    avaliar(orderSelected, ratingOrder, ratingReception);

    popup.classList.remove("activated");
    form.reset();
});

avaliarCloseButton.addEventListener("click", hideAvaliar);

function hideAvaliar() {
    popup.classList.remove("activated");
}

function showAvaliar() {
    popup.classList.add("activated");
}

function avaliar(order, ratingOrder, ratingReception) {
    const rating = document.createElement("h5");
    rating.classList.add("order-rating");
    rating.textContent = `Avaliado: ${ratingOrder}⭐ Comida - ${ratingReception}⭐ Atendimento`;
    
    let lastRating = order.querySelector(".order-rating");
    if (lastRating) {
        order.removeChild(lastRating);
    } 

    if (!(ratingOrder + ratingReception == 0)) {
        order.appendChild(rating);
    }
}