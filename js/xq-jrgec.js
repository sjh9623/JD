$(function () {
  let uid = sessionStorage.getItem("userMsg");

  $(".jr").click(function () {
    console.log(uid);
    if (!uid) {
      location.href = "http://localhost:5050/html/enter.html";
    } else {
      location.href = "http://localhost:5050/html/gwc.html";
    }
  });
  let num = $(".Ipt").val();
  $(".mi").click(function () {
    if (num != 1) {
      num--;
      $(".Ipt").val(num);
    }
  });
  $(".pr").click(function () {
    num++;
    $(".Ipt").val(num);
  });
});
