$(function () {
  $("#btn").click(function () {
    if ($("#username").val() == "" || $("#password").val() == "") {
      alert("！用户名或密码不能为空");
    } else {
      console.log($("#username").val(), $("#password").val());
      $.get(
        `http://jx.xuzhixiang.top/ap/api/checkname.php?username=` +
          $("#username").val(),
        function (data) {
          console.log(
            `http://jx.xuzhixiang.top/ap/api/checkname.php?username=` +
              $("#username").val()
          );
          if (data["code"] != 1) {
            alert(data["msg"]);
          } else {
            $.get(
              "http://jx.xuzhixiang.top/ap/api/reg.php",
              {
                username: $("#username").val(),
                password: $("#password").val(),
              },
              function (data) {
                console.log(data);
                if (data["code"] == 0) {
                  alert(data["msg"]);
                } else {
                  alert("注册成功，快去登录吧！");
                  setTimeout(() => {
                    location.href = "../html/enter.html";
                  }, 2000);
                }
              }
            );
          }
        }
      );
    }
    return false;
  });
});
