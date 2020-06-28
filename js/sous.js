$(function () {
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
});
