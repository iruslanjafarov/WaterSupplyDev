import "../styles/style.scss";

const burger = document.querySelector(".burger"), headerLinks = document.querySelector(".header-links");

burger.addEventListener("click", () => {
    burger.classList.toggle("burger_active")
    headerLinks.classList.toggle("header-links_active");
});