
// MENU
$(document).ready(function () {

  let burg = $('.btn-menu');
  let close = $('.btn-close');
  let menu = $('.header-top_menu')

  burg.on('click', function () {
    menu.css({ left: '0' })

  })
  close.on('click', function () {
    menu.css({ left: '-285px' })
  })
  // MENU

  // SLIDE
  $('.gallery-slider').slick({
    centerMode: true,
    prevArrow: '<button type="button" class="gallery_btn slick-prev"></button>',
    nextArrow: '<button type="button" class="gallery_btn slick-next"></button>',
    centerPadding: '150px',
    slidesToShow: 3,

    responsive: [
      {
        breakpoint: 1199.98,
        settings: {
          centerPadding: '90px',
        }
      },
      {
        breakpoint: 991.98,
        settings: {
          centerPadding: '60px',
        }
      },
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 1,
          variableWidth: true,
        }
      },
      {
        breakpoint: 575.98,
        settings: {
          arrows: false,
          slidesToShow: 1,
          variableWidth: true,
        }
      },
    ]
  });
  // SLIDE
  // PICTURE OPEN

  $('.minimized').on('click', function (event) {
    let img = $(this).attr('src');
    console.log(img)
    $('.gallery').append('<div id="overlay"></div><div id="magnify"><img src="' + img + '"><div id="close-popup">&times</div></div>');
    $('#overlay, #magnify').show();
  });
  $('body').on('click', '#overlay, #close-popup, #magnify', function (event) {
    event.preventDefault();
    $('#overlay, #magnify').fadeOut('fast', function () {
    });
  });


  // PICTURE OPEN
  // video
  $('.button-block').click(function (e) {
    e.preventDefault();
    $('#video').get(0).play()
    $('#video').attr('controls', 'true')
    $(this).hide()
    $('.over-video').hide()
  });
  $('#video').on('ended', function () {
    $('#video').removeAttr('controls');
    $('.over-video').show()
    $('.button-block').show()

  });

  // REVIEWS SLIDER
  $('.reviews-content').slick({
    prevArrow: '<button type="button" class="reviews_btn slick-prev"></button>',
    nextArrow: '<button type="button" class="reviews_btn slick-next"></button>',
    slidesToShow: 1,

  });
});