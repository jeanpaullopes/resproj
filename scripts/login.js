const form = document.querySelector(".login-form");
const radioInput = document.querySelector(".radio-input")

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let userEmail = event.target[1].value
    let userName = event.target[0].value

    let isClient = radioInput.checked;
    login(userEmail, userName, isClient);
})

function login(email, name, isClient) {
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userName", name);
    localStorage.setItem("isClient", isClient);
    window.location.href = "/htmls/homepage.html";
}