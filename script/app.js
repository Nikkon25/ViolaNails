$(document).ready(function () {
    $("#main_courses_slider").owlCarousel({
        nav: true,
        navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1,
                nav: 0,
                dots: true

            },
            321: {
                nav: 1,
                items: 1
            },
            768: {
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
        autoplay: 0,
        loop: true,
        smartSpeed: 800,
        slideTransition: 'linear',
        responsive: {
            0: {
                items: 1,
                nav: 0,
                dots: true

            },
            768: {
                items: 1,
                nav: true
            }
        },


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