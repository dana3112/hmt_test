(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Fixed Navbar
    $(window).scroll(function () {
        if ($(window).width() < 992) {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-white shadow');
            } else {
                $('.fixed-top').removeClass('bg-white shadow dark');
            }
        } else {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-white shadow ').css('top', 0).css('border-bottom','1px solid #ffffff30');
            } else {
                $('.fixed-top').removeClass('bg-white shadow ').css('top', 0).css('border-bottom','1px solid #ffffff30');
            }
        }
    });

    $(window).scroll(function () {
        if ($(window).width() < 992) {
            if ($(this).scrollTop() > 45) {
                $('.navbar-collapse .nav-link').css('color', '#333'),
                $('.navbar-collapse .logo').attr('src', 'img/logo_2.png');
            } else {
                $('.navbar-collapse .nav-link ').css('color', '#fff'),
                $('.navbar-collapse .logo').attr('src', 'img/logo.png');
            }
        } else {
            if ($(this).scrollTop() > 45) {
               $('.navbar-collapse .nav-link ').css('color', '#333'),
               $('.logo').attr('src', 'img/logo_2.png');
            } else {
                $('.navbar-collapse .nav-link ').css('color', '#fff'),
                $('.logo').attr('src', 'img/logo.png');
            }
        }
    });

    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    }); 

    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 3000,
        items: 1,
        dots: true,
        loop: true,
    });

    $(window).scroll(function () {
        if ($(window).width() < 992) {
            if ($(this).scrollTop() > 45) {
                $('.b_btn').css('border-color', '#333');
                // $('.logo').attr('src', 'img/logo_2.png');
            } else {
                $('.b_btn').css('border-color', 'rgb(255 255 255 / 50%)');
                // $('.logo').attr('src', 'img/logo.png');
            }
        } 
    });    
    


    // Project carousel
    $(".project-carousel").owlCarousel({
        slidesPerView: 1,
        autoplay: true,
        smartSpeed: 1000,
        margin: 0,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
			0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
            1108:{
                times:4
            } 

        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
			576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    //sub_tab menu

    
})(jQuery);

