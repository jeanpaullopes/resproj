let userName = localStorage.getItem("userName");
let userEmail = localStorage.getItem("userEmail");
const logoutButton = document.querySelector(".logout-button");

const nameElem = document.querySelector(".user-name");

if (userName) nameElem.innerText = userName;
else console.log("nome nao encontrado");


const emailElem = document.querySelector(".user-email");
if (userEmail) emailElem.innerText = userEmail;
else console.log("email nao encontrado");

logoutButton.addEventListener("click", logout);

function logout() {
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userName");
    window.location.href = "/index.html";
}