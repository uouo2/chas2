$(function () {
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


    // 서브 섹션03 - 주전자 애니메이션 
  $(window).scroll(function () {
    $('.woww').each(function () {
      let sectionOST = $(this).offset().top - 700
      if ($(window).scrollTop() >= sectionOST) {
        $(this).addClass('ani')
      }
    })
  })


    // 서브 섹션4
    // $('.part1').mouseenter(function () {
    //     $('.tea-box').show()
    // })





    // 서브 섹션5 - 슬라이드
    $('.wrap1-pop').click(function () {
        $('.wrap1').css('opacity', '1')
        $('.wrap2, .wrap3, .wrap4').css('opacity', '0')
    })

    $('.wrap2-pop').click(function () {
        $('.wrap2').css('opacity', '1')
        $('.wrap1, .wrap3, .wrap4').css('opacity', '0')
    })

    $('.wrap3-pop').click(function () {
        $('.wrap3').css('opacity', '1')
        $('.wrap1, .wrap2, .wrap4').css('opacity', '0')
    })

    $('.wrap4-pop').click(function () {
        $('.wrap4').css('opacity', '1')
        $('.wrap1, .wrap2, .wrap3').css('opacity', '0')
    })

})
    // gotop
    $(window).scroll(function () {
        console.log($(window).scrollTop())

        if ($(window).scrollTop() >= 600) {
            $('.gotop').fadeIn()
        } else {
            $('.gotop').fadeOut()
        }
    })
    $('.gotop').click(function (e) {
        e.preventDefault()
        $('html,body').stop().animate({
            scrollTop: 0
        }, 600)
    })
  // 푸터등장 -> 버튼이 위에서 고정
  var $btn = $('.gotop');
  var offsetBottom = 230;
  var defaultBottom = 30;

  $(window).on('scroll resize', function () {
    var scrollTop = $(window).scrollTop();
    var winHeight = $(window).height();
    var docHeight = $(document).height();
    var remaining = docHeight - (scrollTop + winHeight);

    if (remaining <= offsetBottom) {

      $btn.css('bottom', offsetBottom - remaining + defaultBottom + 'px');
    } else {
      $btn.css('bottom', defaultBottom + 'px');
    }
  });
// uo
// $(function(){
//     $('.wrap1-pop').click(function(){
//         $('.wrap1').css('opacity','1')
//         $('.wrap2, .wrap3, .wrap4').css('opacity','0')
//     })

//     $('.wrap2-pop').click(function(){
//         $('.wrap2').css('opacity','1')
//         $('.wrap1, .wrap3, .wrap4').css('opacity','0')
//     })

//     $('.wrap3-pop').click(function(){
//         $('.wrap3').css('opacity','1')
//         $('.wrap1, .wrap2, .wrap4').css('opacity','0')
//     })

//     $('.wrap4-pop').click(function(){
//         $('.wrap4').css('opacity','1')
//         $('.wrap1, .wrap2, .wrap3').css('opacity','0')
//     })
// })