$(function () {
  $('[data-slider]').each(function () {
    const $slider = $(this);
    const $track = $slider.find('.slider-track');
    const $slides = $slider.find('.slide');
    const total = $slides.length;

    let currentIndex = 1;
    let autoplayInterval;

    function updateSlider() {
      const slidesToShow = window.innerWidth <= 768 ? 2 : 3;
      const slideWidth = 100 / slidesToShow;
      const offset = -((currentIndex - 1) * slideWidth);

      $track.css('transform', `translateX(${offset}%)`);
      $slides.css('width', `${slideWidth}%`);
      $slides.removeClass('active');
      $slides.eq(currentIndex).addClass('active');
    }


    function nextSlide() {
      currentIndex = (currentIndex + 1) % total;
      updateSlider();
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + total) % total;
      updateSlider();
    }

    function startAutoplay() {
      autoplayInterval = setInterval(nextSlide, 3000);
    }

    function stopAutoplay() {
      clearInterval(autoplayInterval);
    }

    // Initial setup
    updateSlider();
    startAutoplay();

    // Navigation buttons
    $slider.find('.next').on('click', () => {
      nextSlide();
      stopAutoplay(); startAutoplay();
    });

    $slider.find('.prev').on('click', () => {
      prevSlide();
      stopAutoplay(); startAutoplay();
    });

    // Drag to slide
    let startX = 0;
    let isDragging = false;

    $track.on('mousedown touchstart', function (e) {
      stopAutoplay();
      isDragging = true;
      startX = e.pageX || e.originalEvent.touches[0].pageX;
    });

    $(document).on('mouseup touchend', function (e) {
      if (!isDragging) return;
      const endX = e.pageX || e.originalEvent.changedTouches[0].pageX;
      const delta = endX - startX;
      if (delta > 50) prevSlide();
      else if (delta < -50) nextSlide();
      startAutoplay();
      isDragging = false;
    });
  });
});
