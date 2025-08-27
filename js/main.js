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
    if ($(window).scrollTop() > 40) {
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

  // 섹션01의 스크롤화살표 클릭 시, 페이지 이동
  $('.scroll').click(function () {
    $('html,body').animate({
      scrollTop: $('.section02').offset().top
    }, 500)
  })

  // gotop
  $(window).scroll(function () {
    console.log($(window).scrollTop())

    if ($(window).scrollTop() >= 600) {
      $('.gotop').fadeIn()
    } else {
      $('.gotop').fadeOut()
    }

    var footerTop = $('footer').offset().top;
    var btnTop = $(this).scrollTop() + $(window).height() - $('.gotop').outerHeight() - 50;
    if (btnTop >= footerTop) {
      $('.gotop').css('bottom', '250px');
    } else {
      $('.gotop').css('bottom', '30px');
    }

  })
  $('.gotop').click(function (e) {
    e.preventDefault()
    $('html,body').stop().animate({
      scrollTop: 0
    }, 600)
  })

  // 푸터등장 -> 버튼이 위에서 고정
  // var scrollTop = $(window).scrollTop();
  // var winHeight = $(window).height();
  // var docHeight = $(document).height();
  // var topfixed = docHeight - (scrollTop + winHeight);

  // if (topfixed <= 250) {
  //   $('.gotop').css("bottom", "250px");
  // }

  // 섹션02 - 茶 흩어지는 애니메이션
  $(window).scroll(function () {
    $('.wo').each(function () {
      let sectionintro = $(this).offset().top - 1000
      if ($(window).scrollTop() >= sectionintro) {
        $(this).addClass('move')
      }
    })
  })

  // 섹션03 : 해달 클릭 이벤트 (달 클릭 유도, 2회 클릭 후 애니메이션은 사라짐)
  $('.outline').click(function () {
    if ($('.moon').hasClass('on')) {
      $('.moon').removeClass('on')
      $('.sun').removeClass('off')
      $('.slide2').fadeOut()
      $('.slide1').fadeIn()
      $('.outline').hide()
    } else {
      $('.moon').addClass('on')
      $('.sun').addClass('off')
      $('.slide1').fadeOut()
      $('.slide2').fadeIn()
    }
  })

  $('.moon').click(function () {
    if ($('.moon').hasClass('on')) {
      $('.moon').removeClass('on')
      $('.sun').removeClass('off')
      $('.slide2').fadeOut()
      $('.slide1').fadeIn()
    } else {
      $('.moon').addClass('on')
      $('.sun').addClass('off')
      $('.slide1').fadeOut()
      $('.slide2').fadeIn()
    }
  })

  $('.sun').click(function () {
    if ($('.sun').hasClass('off')) {
      $('.sun').removeClass('off')
      $('.moon').removeClass('on')
      $('.slide2').fadeOut()
      $('.slide1').fadeIn()
    } else {
      $('.sun').addClass('off')
      $('.moon').addClass('on')
      $('.slide1').fadeOut()
      $('.slide2').fadeIn()
    }
  })

  // 섹션03 - 물방울 애니메이션 
  $(window).scroll(function () {
    $('.wow').each(function () {
      let sectionOST = $(this).offset().top - 700
      if ($(window).scrollTop() >= sectionOST) {
        $(this).addClass('ani')
      }
    })
  })


  // 섹션04
  $(window).scroll(function () {
    $('.typoh').each(function () {
      let section04 = $(this).offset().top - 700
      if ($(window).scrollTop() >= section04) {
        $(this).addClass('ani')
      }
    })
  })
  $(window).scroll(function () {
    $('.typoaimg').each(function () {
      let section04 = $(this).offset().top - 700
      if ($(window).scrollTop() >= section04) {
        $(this).addClass('ani')
      }
    })
  })

  $(window).scroll(function () {
    $('.typo-img').each(function () {
      let section04 = $(this).offset().top - 700
      if ($(window).scrollTop() >= section04) {
        $(this).addClass('ani')
      }
    })
  })

  //섹션06
  var animationExecuted = false;

  $(window).scroll(function () {
    if (animationExecuted) return;

    var scrollTop = $(window).scrollTop();
    var windowHeight = $(window).height();
    var section06Offset = $('.section06').offset().top;

    if (scrollTop > section06Offset - windowHeight / 2) {
      $('.section06 .bg-img img:first-child').animate({
        left: '-=170px',
        opacity: 1
      }, 1500);

      $('.section06 .bg-img img:last-child').animate({
        right: '-=170px',
        opacity: 1
      }, 1500);

      animationExecuted = true;
    }
  });

})
