$(document).ready(function(){

  //섹션 슬라이드
  $('.menu_slide_wrap').slick({
    infinite: true,
    slideToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    dots: false,
    draggable: false,
  });

  //마우스 커서
  function cursorMove (e){
    let $cursor = $('.arrow_eff');
    TweenMax.to(
      $cursor, 0.5, {
        x: e.clientX - 45,
        y: e.clientY -30,
        ease: Power3.easeOut
      });
  }

  //왼쪽
  $(".slick_prev").wrapAll($("<div class='prev_box'></div>"));
  $(".prev_box").prepend($("<p class='arrow_eff'></p>"));

  //오른쪽
  $(".slick_next").wrapAll($("<div class='next_box'></div>"));
  $(".next_box").prepend($("<p class='arrow_eff'></p>"));

  //커서영역
  $('.prev_box, .next_box').mousemove(cursorMove);

  //커서on
  $('.slick_prev').hover(function(){
    $('prev_box').toggleClass('on');
  });

  $('slick_next').hover(function(){
    $('.next_box').toggleClass('on');
  });

});//end