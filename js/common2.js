$(function () {
    // 헤더 bg
    $(window).scroll('scroll', function () {
        if ($(window).scrollTop() > 0) {
            $('.navwrap').addClass('scrolled');
        } else {
            $('.navwrap').removeClass('scrolled');
        }
    });

    // 헤더
    $('.mainmenu').mouseenter(function (e) {
        e.preventDefault()
        $('.submenu').show();
        $('.navwrap').addClass('long')
    })
    $('.navwrap').mouseleave(function () {
        $('.submenu').hide();
        $('.navwrap').removeClass('long')
    })
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 0) {
            $('.mainlogoa').show();
            $('.mainlogo').hide();
            $('.last-nav').addClass('size')
            $('.navwrap').addClass('size')
            $('.submenu').addClass('size')

        }
        else {
            $('.mainlogoa').hide();
            $('.mainlogo').show();
            $('.last-nav').removeClass('size')
            $('.navwrap').removeClass('size')
            $('.submenu').removeClass('size')

        }
    })

    $('.mainmenu').mouseenter(function (e) {
        e.preventDefault()
        $('.submenu').show();
        $('.navwrap').addClass('long')
    })
    $('.navwrap').mouseleave(function () {
        $('.submenu').hide();
        $('.navwrap').removeClass('long')
    })
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 0) {
            $('.mainlogoa').show();
            $('.mainlogo').hide();
            $('.last-nav').addClass('size')
            $('.navwrap').addClass('size')
            $('.submenu').addClass('size')

        }
        else {
            $('.mainlogoa').hide();
            $('.mainlogo').show();
            $('.last-nav').removeClass('size')
            $('.navwrap').removeClass('size')
            $('.submenu').removeClass('size')

        }
    })

})