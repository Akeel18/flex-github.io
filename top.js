// JavaScript for the "Go to Top" button

// Get a reference to the button element
const goToTopButton = document.getElementById('goToTopButton');

// Add a click event listener to scroll to the top when clicked
goToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Show the button when the user scrolls down 300 pixels
window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        goToTopButton.style.display = 'block';
    } else {
        goToTopButton.style.display = 'none';
    }
};
