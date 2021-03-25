const burgerIcon = document.querySelector(".burger-icon");
const menu = document.querySelector(".menu");
const links = document.querySelectorAll(".menu-link");

burgerIcon.addEventListener("click", () => {
    menu.classList.toggle("show");
});

links.forEach(function(menuLink){
    menuLink.addEventListener("click", () => {
        menu.classList.toggle("show");

    });
});


console.log(burgerIcon);
console.log(menu);
console.log(links)