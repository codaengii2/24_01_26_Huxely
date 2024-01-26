$(document).ready(function () {
  // let swiper = new Swiper(".space_slider", {
  //   slidesPerView: "auto",
  //   mousewheel: true,
  //   freeMode: true,
  //   slidesOffsetAfter: 400,
  //   infinite: true,
  // });

  const promo_w = $('.slide').width();

  $('.p_right').click(function(){
    $('.space_slider').animate({
      left: -promo_w, 
    },4000,function(){
      $(this).css({
        left: 0,
      }).find('.slide').eq(0).appendTo('.space_slider');
    });
  });

  function time(){
    si = setInterval(function(){
      $('.p_right').trigger('click');
    },4000);
  }

  time();






}); //end
