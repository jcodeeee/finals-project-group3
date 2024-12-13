// Get the hamburger icon and the navigation links
const hamburgerIcon = document.getElementById("hamburger-icon");
const navLinks = document.getElementById("nav-links");

// Toggle the visibility of the nav-links when the hamburger icon is clicked
hamburgerIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

