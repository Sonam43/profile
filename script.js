function toggleMenu() {
    const navbar = document.getElementById("navbar");
    const hamburger = document.querySelector(".hamburger");

    // Toggle active class on navbar and hamburger
    navbar.classList.toggle("active");
    hamburger.classList.toggle("active");
}
