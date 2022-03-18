export let renderMenu = () => {

    let menuButton = document.getElementById("collapse-button");
    let menu = document.getElementById("menu");

    menuButton.addEventListener("click", () => {
        menuButton.classList.toggle("active"); 
        menu.classList.toggle("active");
    });
}