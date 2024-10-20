let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    currentSlide = (index + totalSlides) % totalSlides; // Wrap around
    slides.style.transform = 'translateX(' + (-currentSlide * 100) + '%)';
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

// Show the first slide initially
showSlide(currentSlide);
