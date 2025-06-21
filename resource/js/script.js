const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevSlide = document.querySelector('.prev-slide');
const nextSlide = document.querySelector('.next-slide');
let currentIndex = 0;

function showSlide(index) {
    if (index >= slides.length) currentIndex = 0;
    else if (index < 0) currentIndex = slides.length - 1;
    else currentIndex = index;
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevSlide.addEventListener('click', () => showSlide(currentIndex - 1));
nextSlide.addEventListener('click', () => showSlide(currentIndex + 1));

// Auto-slide every 5 seconds
setInterval(() => showSlide(currentIndex + 1), 5000);