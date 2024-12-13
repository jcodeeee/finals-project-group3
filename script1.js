let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const thumbnails = document.querySelectorAll('.thumbnail');
const totalSlides = slides.length;

document.getElementById('next').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlides();
});

document.getElementById('prev').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlides();
});

function showSlide(index) {
    currentSlide = index;
    updateSlides();
}

function updateSlides() {
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentSlide);
    });

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.classList.toggle('active', index === currentSlide);
    });
}
