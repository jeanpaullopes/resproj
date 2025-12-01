const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let userEmail = event.target[1].value
    let userName = event.target[0].value
    login(userEmail, userName);
})

function login(email, name) {
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userName", name);
    window.location.href = "/index.html"
}