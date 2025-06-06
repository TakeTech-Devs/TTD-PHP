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

    // If clicked already has 'active', remove it and exit
    if (clicked.classList.contains('active')) {
        clicked.classList.remove('active');
        return;
    }

    // Else, remove 'active' from all and add to clicked
    document.querySelectorAll('.image-wrap').forEach(c => c.classList.remove('active'));
    clicked.classList.add('active');
});


});

/* Carousel & Feedback Slick Sliders */
$(document).ready(function () {
    $('.carousel-slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        centerPadding: '60px',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        variableWidth: true,
        arrows: false,
        centerMode: true,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 1 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } }
        ]
    });
    $('#customPrevBtn').on('click', function(){
        $('.carousel-slider').slick('slickPrev');
    });

    $('#customNextBtn').on('click', function(){
        $('.carousel-slider').slick('slickNext');
    });
    
    $('.feedback-container').slick({
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        infinite: false,
        arrows: false,
        dots: false
    });
    $('.profile-gallery').slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        variableWidth: true,
        arrows: true,
        centerMode: true,
        responsive: [
            { breakpoint: 768, settings: { slidesToShow: 1,} }
        ]
      });
});
