/* 
==============================================
* Hugo Lime - v1.0
==============================================

==============================================
* Coded By : wilber https://www.wilber.co.ke
==============================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
* Copyright 2018 wilber
*/

$(document).ready(function(){
  
  //Activating tooltip
  $('[data-toggle="tooltip"]').tooltip();

  //Smooth scroll
  $('a').click(function(){
    var hash = $(this).attr('href').split('#')[1];
    $('html, body').animate({
        scrollTop: $('#' + hash).offset().top
    }, 500);
    return false;
  });

});