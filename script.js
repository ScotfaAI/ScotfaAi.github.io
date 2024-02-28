document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector(".nav-links");
    // Initially hide the navigation links
    nav.style.transform = "translateX(100%)";

    const navSlide = () => {
        const burger = document.querySelector(".burger");
        const navLinks = document.querySelectorAll(".nav-links a");

        burger.addEventListener("click", () => {
            // Toggle nav
            nav.classList.toggle("nav-active");

            // Animate links
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = "";
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });

            // Burger Animation
            burger.classList.toggle("toggle");
        });
    };

    navSlide();
});
