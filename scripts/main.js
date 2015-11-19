
(function(){
  'use strict';

  $(document).ready(function(){
    $('body').prepend(JST.application());
    
    $('.show-portfolio').on('click', function(e){
    $('.menu-portfolio').toggleClass('is-active');
    });
    
    $('.show-about').on('click', function(e){
    $('.menu-about').toggleClass('is-active');
    });
    
    $('.show-contact').on('click', function(e){
    $('.menu-contact').toggleClass('is-active');
    });
    
  });
  
  
})();