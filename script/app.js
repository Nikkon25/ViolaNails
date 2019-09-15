$(document).ready(function () {
    $("#main_courses_slider").owlCarousel({
        nav: true,
        navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>']
    });
    $("#main_reviews_slider").owlCarousel({
        nav: true,
        navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
        items: 1,
        autoplay: true,
        loop: true,
        smartSpeed: 800,
    });


});