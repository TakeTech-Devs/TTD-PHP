document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".sticky-navbar");
    const navLinks = document.querySelectorAll(".nav-link");
    const navbarCollapse = document.querySelector("#navbarNav");
    const navbarToggler = document.querySelector(".navbar-toggler");
    const yearTabs = document.querySelectorAll(".about-container-header");
    const categoryTabs = document.querySelectorAll("#subTabs > div");
    const memoryGrids = document.querySelectorAll(".memory-grid");
    const cards = document.querySelectorAll('.image-wrap');

    let selectedYear = "2023";
    let selectedCategory = "Ceremony";

    // Navbar scroll style
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // Auto-close mobile navbar & set active link
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navLinks.forEach(nav => nav.classList.remove("active-link"));
            this.classList.add("active-link");

            if (window.innerWidth < 992) {
                const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                if (bsCollapse) {
                    bsCollapse.hide();
                }
            }
        });
    });

    // Sync aria-expanded attribute
    navbarCollapse.addEventListener('shown.bs.collapse', function () {
        navbarToggler.setAttribute('aria-expanded', 'true');
    });

    navbarCollapse.addEventListener('hidden.bs.collapse', function () {
        navbarToggler.setAttribute('aria-expanded', 'false');
    });

    // Memories tab logic
    function updateDisplay() {
        memoryGrids.forEach(grid => {
            const matchYear = grid.getAttribute("data-year") === selectedYear;
            const matchCategory = grid.getAttribute("data-category") === selectedCategory;
            grid.classList.toggle("d-none", !(matchYear && matchCategory));
        });
    }

    yearTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            yearTabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            selectedYear = tab.getAttribute("data-year");
            updateDisplay();
        });
    });

    categoryTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            categoryTabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            selectedCategory = tab.getAttribute("data-category");
            updateDisplay();
        });
    });

    updateDisplay();


// Image card active toggle (event delegation)
document.addEventListener('click', function (e) {
    const clicked = e.target.closest('.image-wrap');
    if (!clicked) return;

    document.querySelectorAll('.image-wrap').forEach(c => c.classList.remove('active'));
    clicked.classList.add('active');
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
