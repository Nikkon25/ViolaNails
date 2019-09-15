$(document).ready(function () {
    $("#main_courses_slider").owlCarousel({
        nav: true,
        navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true

            },
            600: {
                items: 2,
                nav: true
            },
            1040: {
                items: 3
            }
        },
    });
    $("#main_reviews_slider").owlCarousel({
        nav: true,
        navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
        items: 1,
        autoplay: true,
        loop: true,
        smartSpeed: 800,
        slideTransition: 'linear',


    });
    $("#main_banner").owlCarousel({
        nav: false,

        items: 1,
        // autoplay: true,
        loop: true,
        pullDrag: false,
        touchDrag: false,
        mouseDrag: false,
        smartSpeed: 800,
        autoplaySpeed: 5000,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut'

    });


});