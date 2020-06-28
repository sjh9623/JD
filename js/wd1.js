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
  $(window).scroll(function () {
    if ($(this).scrollTop() > 700) {
      $(".seek-box").css({
        width: "100%",
        margin: "0 auto",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 50,
        background: "white",
        borderBottom: "2px solid red",
      });

      $(".zc-img").css({
        backgroundPosition: " 0 -120px",
        width: "125px",
        height: "40px",
        overflow: "hidden",
      });
    } else {
      $(".seek-box").css({
        position: "",
        top: "",
        zIndex: "",
        background: "",
        borderBottom: "none",
      });
    }
  });
  // 搜索

  $(".sous-tx").on("input", function () {
    $("#oul").css({
      display: "block",
    });

    let val = $(this).val();
    console.log(val);
    $.ajax({
      type: "get",
      url: `https://suggest.taobao.com/sug?code=utf-8&q=${val}&_ksTS=1591257683085_275&callback=?&k=1&area=c2c&bucketid=18`,
      dataType: "jsonp",

      success: function (data) {
        console.log(data);
        let result = data.result;
        let str = "";
        result.forEach((item) => {
          str += `
          <li >
          <a href="">${item[0]}</a>
        </li>`;
        });
        $("#oul").html(str);
      },
    });
  });
  //失去光标
  $(".sous-tx").blur(function () {
    $("#oul").css({
      display: "none",
    });
  });
  // 倒计时
  var starttime = new Date("2020/11/20");
  setInterval(function () {
    var nowtime = new Date();
    var time = starttime - nowtime;
    var day = parseInt(time / 1000 / 60 / 60 / 24);
    var hour = parseInt((time / 1000 / 60 / 60) % 24);
    var minute = parseInt((time / 1000 / 60) % 60);
    var seconds = parseInt((time / 1000) % 60);
    $(".timmer__unit--hour").html(hour);
    $(".timmer__unit--minute").html(minute);
    $(".timmer__unit--second").html(seconds);
  }, 1000);
  let uid = sessionStorage.getItem("userMsg");

  $(".gwc-a").click(function () {
    console.log(1);
    if (!uid) {
      $(".gwc-a").attr("href", "http://localhost:5050/html/enter.html");
    } else {
      $(".gwc-a").attr("href", "http://localhost:5050/html/gwc.html");
    }
  });
});
