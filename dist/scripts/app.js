require.register("main", function(exports, require, module){
  'use strict';

var amountScrolled = 1200;
$(window).scroll(function () {
  if ($(window).scrollTop() > amountScrolled) {
    $('a.back-to-top').fadeIn('slow');
  } else {
    $('a.back-to-top').fadeOut('slow');
  }
});
$('a.back-to-top').click(function () {
  $('body, html').animate({
    scrollTop: 0
  }, 700);
  return false;
});

(function () {
  'use strict';

  $(document).ready(function () {
    $('body').prepend(JST.application());

    $('.show-portfolio').on('click', function (e) {
      $('.menu-portfolio').toggleClass('is-active');
      $('.menu-portfolio').effect("bounce", "slow");
    });

    $('.show-about').on('click', function (e) {
      $('.menu-about').toggleClass('is-active');
    });

    $('.show-contact').on('click', function (e) {
      $('.menu-contact').toggleClass('is-active');
    });

    $('.body').on('click', function (e) {

      $('.menu-portfolio').toggleClass('is-active');
      $('.menu-contact').toggleClass('is-active');
      $('.menu-about').toggleClass('is-active');
    });
  });
})();
  
});

//# sourceMappingURL=app.js.map