const button = document.querySelector("#button-hamburguer")
const menu = document.querySelector("#menu-items")
//const navbar = document.querySelector("#navbar")

button.addEventListener("click", (e) => {
    menu.classList.toggle("hidden")
    button.classList.toggle("rotate-90")
    console.log(e.target)
})