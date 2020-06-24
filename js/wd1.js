// 点击取消顶部图片
$(function () {
  $("#off").click(function () {
    $(".top-banner").hide();
  });

  // 轮播图
  var swiper = new Swiper(".slider", {
    loop: true,
    autoplay: {
      delay: 2000,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var swiper1 = new Swiper(".slider1", {
    loop: true,
    direction: "vertical",
    slidesPerView: 3,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    spaceBetween: 12,
  });

  // 京东秒杀轮播
  var swiper = new Swiper(".sek-wimg", {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 4,
    loop: true,
    loopFillGroupWithBlank: true,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    spaceBetween: 1,
  });
  // 右侧轮播图
  var swiper3 = new Swiper(".sk-frimg", {
    loop: true,
    // spaceBetween: 30,
    // centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".sk-tow",
      clickable: true,
    },
  });
  $("#sp-li").hover(
    function () {
      $("#sp-p").hide();
      $("#sp-d").show();
      return false;
    },
    function () {
      $("#sp-p").show();
      $("#sp-d").hide();
      return false;
    }
  );
});
