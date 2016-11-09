$(document).ready(function () {

    /******************************
     ******* scroll scripts
     ******************************/

    $('nav ul li a[href^="#"]').click(function(){
        $('nav ul li a').removeClass('active');
        $(this).addClass('active');
        /*if ($(window).width() < '981'){
            $('.burger').removeClass('active');
        }*/
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top - 50}, 600);
        return false;
    });

    if ($(window).scrollTop() >= 63) {
        $('.header-bottom').addClass('fixed');
        $('.banner').css('margin-top', '80px');
    } else {
        $('.header-bottom').removeClass('fixed');
        $('.banner').css('margin-top', '0');
    }

    if ($(window).scrollTop() < $('#price').offset().top - 200) {
        $('nav ul li.active').removeClass('active');
        $('nav ul li:nth-child(1)').addClass('active');
    }
    else if ($(window).scrollTop() < $('#projects').offset().top - 200) {
        $('nav ul li.active').removeClass('active');
        $('nav ul li:nth-child(2)').addClass('active');
    }
    else if ($(window).scrollTop() < $('#how-we-work').offset().top - 200) {
        $('nav ul li.active').removeClass('active');
        $('nav ul li:nth-child(3)').addClass('active');
    }
    else if ($(window).scrollTop() < $('.tow-car').offset().top - 200) {
        $('nav ul li.active').removeClass('active');
        $('nav ul li:nth-child(4)').addClass('active');
    } else {
        $('nav ul li.active').removeClass('active');
        $('nav ul li:nth-child(5)').addClass('active');
    }

    $(window).scroll(function() {

        if ($(window).scrollTop() >= 63) {
            $('.header-bottom').addClass('fixed');
            $('.banner').css('margin-top', '80px');
        } else {
            $('.header-bottom').removeClass('fixed');
            $('.banner').css('margin-top', '0');
        }
        

        if ($(window).scrollTop() < $('#price').offset().top - 200) {
            $('nav ul li.active').removeClass('active');
            $('nav ul li:nth-child(1)').addClass('active');
        }
        else if ($(window).scrollTop() < $('#projects').offset().top - 200) {
            $('nav ul li.active').removeClass('active');
            $('nav ul li:nth-child(2)').addClass('active');
        }
        else if ($(window).scrollTop() < $('#how-we-work').offset().top - 200) {
            $('nav ul li.active').removeClass('active');
            $('nav ul li:nth-child(3)').addClass('active');
        }
        else if ($(window).scrollTop() < $('.tow-car').offset().top - 200) {
            $('nav ul li.active').removeClass('active');
            $('nav ul li:nth-child(4)').addClass('active');
        } else {
            $('nav ul li.active').removeClass('active');
            $('nav ul li:nth-child(5)').addClass('active');
        }


    });

    /******************************
     ******* init scripts
     ******************************/

    if ($(window).width() < '992'){

    } else {

    }

    $(window).resize(function(){
        if ($(window).width() < '992'){

        } else {
            
        }
    });

    /******************************
     ******* clicks
     ******************************/
    

    /*******************************
     ******* slider scripts ********
     ******************************/

    $('.slider-logisticians').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1366,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 981,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 360,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

});

