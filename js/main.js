
jQuery(document).ready(function($) {

var nav = $('.navbar-fixed-top');
$(window).scroll(function(){
     var scroll=$(window).scrollTop();
     if(scroll>= 300){
       nav.removeClass('normal').addClass('efecto');
     }else{
       nav.removeClass('efecto').addClass('normal');
     }
});


$(function(){
 
    $(document).on( 'scroll', function(){
 
      if ($(window).scrollTop() > 300) {
      $('.scroll-top-wrapper').addClass('show');
    } else {
      $('.scroll-top-wrapper').removeClass('show');
    }
  });
 
  $('.scroll-top-wrapper').on('click', scrollToTop);
});
 
function scrollToTop() {
  verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
  element = $('body');
  offset = element.offset();
  offsetTop = offset.top;
  $('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
}

  "use strict";



  //stats
  jQuery('.appear').appear();
  var runOnce = true;
  jQuery(".stats").on("appear", function(data) {
    var counters = {};
    var i = 0;
    if (runOnce) {
      jQuery('.number').each(function() {
        counters[this.id] = $(this).html();
        i++;
      });
      jQuery.each(counters, function(i, val) {
        //console.log(i + ' - ' +val);
        jQuery({
          countNum: 0
        }).animate({
          countNum: val
        }, {
          duration: 3000,
          easing: 'linear',
          step: function() {
            jQuery('#' + i).text(Math.floor(this.countNum));
          }
        });
      });
      runOnce = false;
    }
  });

  //parallax
  if ($('.parallax').length) {
    $(window).stellar({
      responsive: true,
      scrollProperty: 'scroll',
      parallaxElements: false,
      horizontalScrolling: false,
      horizontalOffset: 0,
      verticalOffset: 0
    });

  }



  //scroll to top
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }
  });
  $('.scrollup').click(function() {
    $("html, body").animate({
      scrollTop: 0
    }, 1000);
    return false;
  });




  

});
