const nav_toggle = document.querySelector(".nav-toggle")
const links = document.querySelector(".links")

nav_toggle.addEventListener('click', function () {

    //this is another way to do the toggle but less optimized
    // if (links.classList.contains("show-links")) {
    //     links.classList.remove("show-links")
    // }
    // else {
    //     links.classList.add("show-links")
    // }

    links.classList.toggle("show-links")
})