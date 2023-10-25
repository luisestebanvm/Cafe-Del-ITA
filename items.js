/* Carrusel de imagenes index-----------------------------------------------*/

document.addEventListener("DOMContentLoaded", function () {
    const carouselInner = document.querySelector(".carousel-inner");
    const images = document.querySelectorAll(".carousel-inner img");
    const imageWidth = images[0].clientWidth;
    let index = 0;

    function nextSlide() {
        index = (index + 2) % images.length;
        updateCarousel();
    }

    function updateCarousel() {
        const offset = -index * imageWidth;
        carouselInner.style.transform = `translateX(${offset}px)`;
    }

    setInterval(nextSlide, 3000);
});
