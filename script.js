document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        // Optional: Animate the burger icon into a cross
        burger.classList.toggle('toggle');
    });
});
