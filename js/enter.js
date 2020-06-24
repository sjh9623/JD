$(function () {
  console.log(1);
  $("#fr").click(function () {
    $(".enter-flimg").hide();
    $(".enter-fr").show();
  });
  $("#fl").click(function () {
    $(".enter-fr").hide();
    $(".enter-flimg").show();
  });
  $("#btn").click(function () {
    if ($("#username").val() == "" || $("#password").val() == "") {
      alert("!账号或密码错误，请重新输入");
    } else {
      $.get(
        "http://jx.xuzhixiang.top/ap/api/login.php",
        {
          username: $("#username").val(),
          password: $("#password").val(),
        },
        function (data) {
          if (data["code"] == 1) {
            location.href = "../html/index.html";
          } else {
            alert("！请输入正确的账号或密码");
          }
        }
      );
    }
  });
});
