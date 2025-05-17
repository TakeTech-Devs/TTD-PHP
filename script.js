document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".sticky-navbar");
    const navbarCollapse = document.querySelector("#navbarNav");
    const navbarToggler = document.querySelector(".navbar-toggler");

    // Initialize Bootstrap collapse
    const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });

    // Sticky navbar scroll behavior
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // Toggle collapse on small screens
    navbarToggler.addEventListener("click", function () {
        bsCollapse.toggle();
    });
});


/* Carousel & Feedback Slick Sliders */
// $(document).ready(function () {
    
//     $('.carousel-slider').slick({
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 2000,
//         arrows: false,
//         centerMode: true,
//         responsive: [
//             { breakpoint: 1024, settings: { slidesToShow: 1 } },
//             { breakpoint: 768, settings: { slidesToShow: 1 } }
//         ]
//     });

    
//     $('.feedback-container').slick({
//         vertical: true,
//         verticalSwiping: true,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 2500,
//         infinite: true,
//         arrows: false,
//         dots: false
//     });
// });
