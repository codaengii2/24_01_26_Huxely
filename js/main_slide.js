$(document).ready(function () {
  let main_w = $("#img_slide li").width();
  let slideCount = 0;

  const i = $("#img_slide>li").each(function (index) {
    $(this).attr("data-index", index);
  });

  // console.log(i);

  // console.log(main_w);

  $("#btn_box>.right").click(function () {
    slideCount++;
    if (slideCount > 2) {
      slideCount = 0;
    }
    updateSlideCount();
    $("#img_slide").animate(
      {
        left: -main_w * 2,
      },
      1000,
      function () {
        $(this)
          .css({
            left: -main_w,
          })
          .find(".main_slide")
          .eq(0)
          .appendTo("#img_slide");
      }
    );

    console.log(slideCount);
  });

  $("#btn_box>.left").click(function () {
    slideCount--;
    $("#img_slide").animate(
      {
        left: 0,
      },
      1000,
      function () {
        $(this)
          .css({
            left: -main_w,
          })
          .find(".main_slide")
          .last()
          .prependTo("#img_slide");
      }
    );

    if (slideCount < 0) {
      slideCount = 2;
    }
    updateSlideCount();
  });

  function time() {
    si = setInterval(function () {
      $("#btn_box>.right").trigger("click");
    }, 5000);
  }

  time();

  function updateSlideCount() {
    const btnNum = $(".btn_num p:nth-child(1)");
    btnNum.text(slideCount + 1);
  }
}); //end
