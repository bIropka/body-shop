$(document).ready(function () {

    function getInternetExplorerVersion() {
        var rv = -1;
        if (navigator.appName == 'Microsoft Internet Explorer')
        {
            var ua = navigator.userAgent;
            var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
            if (re.exec(ua) != null)
                rv = parseFloat( RegExp.$1 );
        }
        else if (navigator.appName == 'Netscape')
        {
            var ua = navigator.userAgent;
            var re  = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
            if (re.exec(ua) != null)
                rv = parseFloat( RegExp.$1 );
        }
        return rv;
    }

    if(getInternetExplorerVersion()!==-1){
        $('.car').css('display', 'none');
        $('.car-ie').css('display', 'block');
    } else {
        $('.car-ie').css('display', 'none');
        $('.car').css('display', 'block');
    }

    setTimeout(function() {
        $('.slider').animate({opacity: 1}, 500);
    }, 250);

    /******************************
     ******* scroll scripts
     ******************************/

    if ($(window).width() < '981'){
        $('.cash').addClass('active');
        $('.cash-sub-title').addClass('active');
        $('#how-we-work .sub-title').appendTo('.mobile-controls');
        $('.languages').prependTo('nav');
    } else {
        $('#how-we-work .tab').removeClass('active');
        $('#how-we-work .sub-title').removeClass('active');
        $('.cash-sub-title').prependTo('.cash');
        $('.insurance-sub-title').prependTo('.insurance');
        $('.languages').prependTo('.header-top .wrapper');
    }

    $(window).resize(function(){
        if ($(window).width() < '981'){
            $('.cash').addClass('active');
            $('.cash-sub-title').addClass('active');
            $('#how-we-work .sub-title').appendTo('.mobile-controls');
            $('.languages').prependTo('nav');
        } else {
            $('#how-we-work .tab').removeClass('active');
            $('#how-we-work .sub-title').removeClass('active');
            $('.cash-sub-title').prependTo('.cash');
            $('.insurance-sub-title').prependTo('.insurance');
            $('.languages').prependTo('.header-top .wrapper');
        }
    });

    $('nav ul li a[href^="#"]').click(function(){
        $('nav ul li a').removeClass('active');
        $(this).addClass('active');
        if ($(window).width() < '981'){
            $('nav').slideUp(200);
        }
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top - 50}, 600);
        return false;
    });

    if ($(window).scrollTop() >= 63) {
        $('.header-bottom').addClass('fixed');
        $('.banner').addClass('mt');
    } else {
        $('.header-bottom').removeClass('fixed');
        $('.banner').removeClass('mt');
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
                $('.banner').addClass('mt');
        } else {
                $('.header-bottom').removeClass('fixed');
                $('.banner').removeClass('mt');
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
     ******* clicks
     ******************************/

    $('.burger').click(function() {
        $('nav').slideToggle(200);
    });

    $('.mobile-controls .sub-title').click(function() {
        $(this).addClass('active');
        $(this).siblings('.sub-title').removeClass('active');
        if($(this).hasClass('cash-sub-title')) {
            $('.insurance').removeClass('active');
            $('.cash').addClass('active');
        } else {
            $('.cash').removeClass('active');
            $('.insurance').addClass('active');
        }
    });

    $('.parts-chooser li').click(function() {
        $(this).toggleClass('active');

        var currentChoice = $(this).index();
        switch (currentChoice) {
            case 0:
                $('#bumper-red').toggleClass()
                break;
            case 1:
                $('#door-red').toggleClass()
                break;
            case 2:
                $('#fenders-red').toggleClass()
                break;
            case 3:
                $('#quarter-red').toggleClass()
                break;
            case 4:
                $('#hood-red').toggleClass()
                break;
            case 5:
                $('#trunk-red').toggleClass()
                break;
            case 6:
                $('#roof-red').toggleClass()
                break;
            case 7:
                $('#rockers-red').toggleClass()
                break;
            
        }

    });


    /*******************************
     ******* slider scripts ********
     ******************************/

    $('.slider-projects').slick({
        responsive: [
            {
                breakpoint: 981,
                settings: {
                    centerMode: true
                }
            }
        ]
    });

    $('.slider-brands').slick();

});

