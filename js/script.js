let hamburger = document.querySelector(".fa-bars");
let x = document.querySelector(".fa-times");
let navbar = document.querySelector(".navbar");
let icons  = document.querySelector(".icons");

hamburger.addEventListener("click", showHide);
function showHide() {
    navbar.style.display = "flex";
    icons.style.display = "block";
    x.style.display = "block";
    hamburger.style.display = "none";
    x.addEventListener("click", close);
    function close() {
        navbar.style.display = "none";
        icons.style.display = "none";
        x.style.display = "none";
        hamburger.style.display = "block";
    }
}