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
        if($(window).width() > '980') {
            $('.header-bottom').addClass('fixed');
            $('.banner').css('margin-top', '80px');
        }
    } else {
        if($(window).width() > '980') {
            $('.header-bottom').removeClass('fixed');
            $('.banner').css('margin-top', '0');
        }
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
            if($(window).width() > '980') {
                $('.header-bottom').addClass('fixed');
                $('.banner').css('margin-top', '80px');
            }
        } else {
            if($(window).width() > '980') {
                $('.header-bottom').removeClass('fixed');
                $('.banner').css('margin-top', '0');
            }
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

    $('.slider-projects').slick();

});

