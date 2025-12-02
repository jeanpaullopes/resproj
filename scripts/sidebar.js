const openMenu = document.getElementById("openMenu");
const sidebar = document.getElementById("sidebar");
const isClient = localStorage.getItem("isClient");

openMenu.addEventListener("click", () => {
    sidebar.classList.toggle("open");
});

sidebar.addEventListener("click", () => {
    sidebar.classList.toggle("open");
})

if (isClient) {
    let management = document.createElement('a')
    management.innerHTML = "Gerenciamento";
    management.href = "/htmls/management.html";
    management.style.color = "lightgreen"
    
    let manage = document.createElement('a')
    manage.innerHTML = "Adicionar Pizza";
    manage.href = "/htmls/manage.html";
    manage.style.color = "lightgreen"

    sidebar.appendChild(management)
    sidebar.appendChild(manage)
    console.log(management);
}