$(document).ready(function () {
  company_init($(window).width());

  $(window).resize(function () {
    company_init($(window).width());
  });
  // 动态设置视频高度
  $(".company-video").css("height", $(".company-banner").height());
  //swiper
  new Swiper(".team-container", {
    slidesPerView: 3,
    spaceBetween: 9,
    slidesPerGroup: 3,
    breakpoints: {
      //小于992
      992: {
        slidesPerView: 2,
        spaceBetween: 10,
        slidesPerGroup: 2,
      },
    },
    navigation: {
      nextEl: ".team-next",
      prevEl: ".team-prev",
    },
  });

  new Swiper(".timeline-container", {
    slidesPerView: 4,
    spaceBetween: 0,
    breakpoints: {
      //小于1060
      1060: {
        slidesPerView: 3,
      },
      //小于795
      795: {
        slidesPerView: 2,
      },
      //小于530
      530: {
        slidesPerView: 1,
      },
    },
    navigation: {
      nextEl: ".timeline-next",
      prevEl: ".timeline-prev",
    },
  });

  function company_init(windowWidth) {
    var WandH;

    if (windowWidth >= 1200) {
      WandH =
        (parseInt($(".info-num").width()) -
          parseInt($(".info-num > li").css("marginLeft")) * 10) /
        5;
    } else if (windowWidth >= 992) {
      WandH =
        (parseInt($(".info-num").width()) -
          parseInt($(".info-num > li").css("marginLeft")) * 10) /
        5;
    } else if (windowWidth >= 768) {
      WandH =
        (parseInt($(".info-num").width()) -
          parseInt($(".info-num > li").css("marginLeft")) * 10) /
        5;
    } else if (windowWidth >= 414) {
      WandH =
        (parseInt($(".info-num").width()) -
          parseInt($(".info-num > li").css("marginLeft")) * 6) /
        3;
    } else {
      $(".info-num > li").css({
        margin: "4px",

        "font-size": "10px",
      });

      WandH =
        (parseInt($(".info-num").width()) -
          parseInt($(".info-num > li").css("marginLeft")) * 6) /
        3;
    }

    //设置首页数字的宽于高

    $(".info-num > li").css({
      width: WandH,
      height: WandH,
    });
  }
});
