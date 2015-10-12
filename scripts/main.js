(function(){
  'use strict';

  $(document).ready(function(){
    $('body').prepend(JST.application());
    $('.show-menu').on('click', function(e){
    console.log("showmenu")
  $('.menu-items').toggleClass('is-active');
    });
  });
  
  
})();
