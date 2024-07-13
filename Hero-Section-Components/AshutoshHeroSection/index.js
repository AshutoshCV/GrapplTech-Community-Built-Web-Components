// Get the navbar
var navbar = document.querySelector('.navbar');

// Initial scroll position
var lastScrollTop = 0;

// Function to handle scroll event
window.addEventListener('scroll', function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // If scrolling down and past 50px, hide navbar
    if (scrollTop > lastScrollTop && scrollTop > 50) {
        navbar.style.top = '-60px'; // Adjust based on navbar height
    } else {
        navbar.style.top = '0';
    }

    // Update last scroll position
    lastScrollTop = scrollTop;
});
