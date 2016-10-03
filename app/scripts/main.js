'use strict';
/*jshint camelcase: false */
/* global $ */
/*eslint-disable no-unused-vars*/
$(document).ready(function() {
    // SET FULL HEIGHT
    $(function() {
        var winHeight = $(window).height();
        $('.full-height').css({
            'height': winHeight,
            'width': '100%'
        });


    });
    // SCROLL DOWN WINDOW HEIGHT
    $(document).on('click', '.scroll-down', function(event) {
        event.preventDefault();
        var viewportHeight = $(window).height();

        $('html, body').animate({
            scrollTop: viewportHeight
        }, 500);
    });
    $(document).on('click', '.scroll-down2', function(event) {
        event.preventDefault();
        var viewportHeight2 = $(window).height();

        $("html, body").animate({ scrollTop: $(document).height()-viewportHeight2 });
    });



    // TRIGGER ANIMATION WHEN USER SCROLLS TO THE ELEMENT
    $(window).scroll(function() {
        // screen02
        $('#bg02').each(function() {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 400) {
                $(this).addClass('slideRight');
            }
        });
        $('#man').each(function() {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 600) {
                $(this).addClass('slideDown');
            }
        });
        $('#manImg').each(function() {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 600) {
                $(this).addClass('animationOpacity');
            }
        });
        $('#buttons').each(function() {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 900) {
                $(this).addClass('slideUp');
            }
        });
        $('#buttonsBg').each(function() {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 800) {
                $(this).addClass('animationOpacity');
            }
        });

        // screen03
        $('#foto').each(function() {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 400) {
                $(this).addClass('slideRight');
            }
        });
        $('#txt01').each(function() {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 600) {
                $(this).addClass('slideLeft');
            }
        });
        $('#txt02').each(function() {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 800) {
                $(this).addClass('slideRight');
            }
        });
        $('#btnGoTo').each(function() {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 900) {
                $(this).addClass('slideUp');
            }
        });


    });

    // REVEAL PROP WHEN CLICKED
    $('#btnShades').on('click', function() {
        $('#shades').addClass('show');
        $(this).remove();
    });
    $('#btnCocoLoco').on('click', function() {
        $('#cocoLoco').addClass('show');
        $(this).remove();
    });
    $('#btnCar').on('click', function() {
        $('#car').addClass('show');
        $(this).remove();
    });
    $('#btnHat').on('click', function() {
        $('#hat').addClass('show');
        $(this).remove();
    });
    $('#btnHouse').on('click', function() {
        $('#house').addClass('show');
        $(this).remove();
    });
    $('.btnProp').on('click', function() {
        if ($('#propList li a').length === 0) {
            $('#propList').fadeOut('slow');
        }
    });

    // SET OPACITY
    $('.opacity').delay(1200).animate({
        opacity: 1
    }, 100);
});
