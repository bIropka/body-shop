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

    $('.get-callback').click(function () {
        $('.window').fadeIn();
    });
    
    $('.window').click(function (event) {
        $target = $(event.target);
        if (!$target.closest($('form')).length) $('.window').fadeOut();
        if ($target.hasClass('close-window')) $('.window').fadeOut();
    });
    
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

    $('.car ul li').hover(function() {

        var currentPart = $(this).attr('class');
        switch (currentPart) {

            case 'bumper':
                if (!$('#bumper-red').hasClass('active')) {
                    $('#bumper-red').addClass('active');
                } else {
                    $('#bumper-red').addClass('chosen');
                }
                break;

            case 'door':
                if (!$('#door-red').hasClass('active')) {
                    $('#door-red').addClass('active');
                } else {
                    $('#door-red').addClass('chosen');
                }
                break;

            case 'fenders':
                if (!$('#fenders-red').hasClass('active')) {
                    $('#fenders-red').addClass('active');
                } else {
                    $('#fenders-red').addClass('chosen');
                }
                break;

            case 'quarter-panels':
                if (!$('#quarter-red').hasClass('active')) {
                    $('#quarter-red').addClass('active');
                } else {
                    $('#quarter-red').addClass('chosen');
                }
                break;

            case 'hood':
                if (!$('#hood-red').hasClass('active')) {
                    $('#hood-red').addClass('active');
                } else {
                    $('#hood-red').addClass('chosen');
                }
                break;

            case 'trunk':
                if (!$('#trunk-red').hasClass('active')) {
                    $('#trunk-red').addClass('active');
                } else {
                    $('#trunk-red').addClass('chosen');
                }
                break;

            case 'roof':
                if (!$('#roof-red').hasClass('active')) {
                    $('#roof-red').addClass('active');
                } else {
                    $('#roof-red').addClass('chosen');
                }
                break;

            case 'rockers':
                if (!$('#rockers-red').hasClass('active')) {
                    $('#rockers-red').addClass('active');
                } else {
                    $('#rockers-red').addClass('chosen');
                }
                break;
        }

    },
    function() {

        var currentPart = $(this).attr('class');
        switch (currentPart) {

            case 'bumper':
                if ($('#bumper-red').hasClass('chosen')) {
                    $('#bumper-red').removeClass('chosen');
                } else {
                    $('#bumper-red').removeClass('active');
                }
                break;

            case 'door':
                if ($('#door-red').hasClass('chosen')) {
                    $('#door-red').removeClass('chosen');
                } else {
                    $('#door-red').removeClass('active');
                }
                break;

            case 'fenders':
                if ($('#fenders-red').hasClass('chosen')) {
                    $('#fenders-red').removeClass('chosen');
                } else {
                    $('#fenders-red').removeClass('active');
                }
                break;

            case 'quarter-panels':
                if ($('#quarter-red').hasClass('chosen')) {
                    $('#quarter-red').removeClass('chosen');
                } else {
                    $('#quarter-red').removeClass('active');
                }
                break;

            case 'hood':
                if ($('#hood-red').hasClass('chosen')) {
                    $('#hood-red').removeClass('chosen');
                } else {
                    $('#hood-red').removeClass('active');
                }
                break;

            case 'trunk':
                if ($('#trunk-red').hasClass('chosen')) {
                    $('#trunk-red').removeClass('chosen');
                } else {
                    $('#trunk-red').removeClass('active');
                }
                break;

            case 'roof':
                if ($('#roof-red').hasClass('chosen')) {
                    $('#roof-red').removeClass('chosen');
                } else {
                    $('#roof-red').removeClass('active');
                }
                break;

            case 'rockers':
                if ($('#rockers-red').hasClass('chosen')) {
                    $('#rockers-red').removeClass('chosen');
                } else {
                    $('#rockers-red').removeClass('active');
                }
                break;
        }

    });

    $('.parts-chooser li').click(function() {
        $(this).toggleClass('active');

        var currentChoice = $(this).index();
        switch (currentChoice) {
            case 0:
                $('#bumper-red').toggleClass('active');
                break;
            case 1:
                $('#door-red').toggleClass('active');
                break;
            case 2:
                $('#fenders-red').toggleClass('active');
                break;
            case 3:
                $('#quarter-red').toggleClass('active');
                break;
            case 4:
                $('#hood-red').toggleClass('active');
                break;
            case 5:
                $('#trunk-red').toggleClass('active');
                break;
            case 6:
                $('#roof-red').toggleClass('active');
                break;
            case 7:
                $('#rockers-red').toggleClass('active');
                break;
            
        }

    });
    
    $('.upload-set input').on('change', function() {
        
        $(this).parent().addClass('filled');
        
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

    /*******************************
     ******* forms scripts *********
     ******************************/

    $(function($) {
        $('form').validatr({
            showall: true,
            valid: function() {
                // Получение ID формы
                var fieldMessage = $(this).find('.field-message');
                var formID = $(this).attr('id');
                // Добавление решётки к имени ID
                var formNm = $('#' + formID);
                var scriptFile;
                if (formID == 'form-price') scriptFile = 'mail-price.php';
                if (formID == 'form-tow-car') scriptFile = 'mail-tow-car.php';
                if (formID == 'form-modal') scriptFile = 'mail-modal.php';
                $.ajax({
                    type: "POST",
                    url: scriptFile,
                    data: formNm.serialize(),
                    success: function (data) {
                        $(fieldMessage).addClass('success');
                        $(fieldMessage).html('Success!!!');
                    },
                    error: function (data) {
                        $(fieldMessage).addClass('error');
                        $(fieldMessage).html('Error!!!');

                    }
                });
                return false;
            }
        });
    });

});

