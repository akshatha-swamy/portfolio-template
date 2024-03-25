//onClick of hamburger  icon, open and close the hamburger div

document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector('.hamburger');
    const hamburgerOptions = document.querySelector('.hamburger-options');

    hamburger.addEventListener('click', function() {
        if (window.innerWidth <= 768) { // Check if viewport width is less than or equal to 768px (mobile view)
            hamburgerOptions.classList.toggle('active');
        }
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) { // Check if viewport width is greater than 768px (laptop and tablet view)
            hamburgerOptions.classList.remove('active');
        }
    });
});


//on scroll animation
let sections = document.querySelectorAll('section');

// Define scroll event handler
window.addEventListener('scroll', () => {
    sections.forEach(section => {
        let top = window.scrollY; // Get the current scroll position of the window

        //Calculate the offset of the section from the top of the document,
        // subtracting an additional 300 pixels to adjust for earlier activation
        let offset = section.offsetTop-300;
        
        let height = section.offsetHeight;
        // Check if the top of the section is within the viewport
        if (top >= offset && top < offset + height) {
            section.classList.add('show-animate');
        } else {
            //For animation to occur  when scrolling up as well
            section.classList.remove('show-animate');
        }
    });
});


