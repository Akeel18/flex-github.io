let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = "block";
        } else {
            slide.style.display = "none";
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function startSlideshow() {
    setInterval(nextSlide, 3000); // Change slide every 3 seconds (adjust as needed)
}

showSlide(currentSlide); // Show the first slide
startSlideshow(); // Start the automatic slideshow

