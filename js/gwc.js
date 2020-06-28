$(function () {
  var id = 34209;
  $.get("http://jx.xuzhixiang.top/ap/api/cart-list.php", { id }, function (
    data
  ) {
    var str = ``;
    var data = data["data"];
    console.log(data);
    var nums = 0;
    var prices = 0;
    data.forEach((item) => {
      let zj = item.pprice * item.pnum;
      str += `
        <div class="info warp">
        <ul>
          <li class="info_1"><input type="checkbox" class="checkbox" checked/></li>
          <li class="info_2"><img src=${item.pimg} width="80px" /></li>
          <li class="info_3"><a>${item.pdesc}</a></li>
          <li class="info_4"><a>颜色：灰色+粉红</a></li>
          <li class="info_5">${item.pprice}</li>
          <li class="info_6">
            <button class="mi">-</button>
            <input type="text" name="" id="" class="p-num" value=${item.pnum} />
            <button class="bot">+</button>
          </li>
          <li class="info_7">${zj}</li>
          <li>
            <a class="qxiao" data-pid=${item.pid}>删除</a><br />
            <a>已到我的关注</a>
          </li>
        </ul>
      </div>
        `;
      nums += Number(item.pnum);
      prices += zj;
    });
    $(".list").append(str);
    $(".nums").text(nums);
    $(".prices").text(prices);
    $(".checkbox").click(function () {
      if ($(".checkbox:checked").length === $(".checkbox").length) {
        $("#quanxuan").prop("checked", true);
      } else {
        $("#quanxuan").prop("checked", false);
      }

      let cnum = 0;
      let cprice = 0;
      let arr = $(".checkbox:checked");

      for (let i = 0; i < arr.length; i++) {
        let num = Number($(arr[i]).parent().parent().find(".p-num").val());
        let price = Number($(arr[i]).parent().parent().find(".info_7").text());
        cnum += num;
        cprice += price;
      }
      $(".nums").text(cnum);
      $(".prices").text(cprice);
    });
    $(".mi").click(function () {
      let val = Number($(this).next().val());

      if (val > 1) {
        val--;
      } else {
        val = 1;
      }
      $(this).next().val(val);

      $(this)
        .parent()
        .next()
        .text(Number($(this).parent().prev().text()) * val);
      let cnum = 0;
      let cprice = 0;
      let arr = $(".checkbox:checked");

      for (let i = 0; i < arr.length; i++) {
        let num = Number($(arr[i]).parent().parent().find(".p-num").val());
        let price = Number($(arr[i]).parent().parent().find(".info_7").text());
        cnum += num;
        cprice += price;
      }
      $(".nums").text(cnum);
      $(".prices").text(cprice);
    });
    $(".bot").click(function () {
      let val = Number($(this).prev().val());

      val++;
      $(this).prev().val(val);

      $(this)
        .parent()
        .next()
        .text(Number($(this).parent().prev().text()) * val);
      let cnum = 0;
      let cprice = 0;
      let arr = $(".checkbox:checked");

      for (let i = 0; i < arr.length; i++) {
        let num = Number($(arr[i]).parent().parent().find(".p-num").val());
        let price = Number($(arr[i]).parent().parent().find(".info_7").text());
        cnum += num;
        cprice += price;
      }
      $(".nums").text(cnum);
      $(".prices").text(cprice);
    });

    $(".qxiao").click(function () {
      $.get(
        "http://jx.xuzhixiang.top/ap/api/cart-delete.php",
        { uid: id, pid: $(this).data("pid") },
        () => {
          $(this).parent().parent().parent().remove();
          let cnum = 0;
          let cprice = 0;
          let arr = $(".checkbox:checked");

          for (let i = 0; i < arr.length; i++) {
            let num = Number($(arr[i]).parent().parent().find(".p-num").val());
            let price = Number(
              $(arr[i]).parent().parent().find(".info_7").text()
            );
            cnum += num;
            cprice += price;
          }
          $(".nums").text(cnum);
          $(".prices").text(cprice);
        }
      );
    });
    $("#quanxuan").click(function () {
      let b = $(".checkbox");
      let a = $(this).prop("checked");
      for (let i = 0; i < b.length; i++) {
        $(b[i]).prop("checked", a);
      }
      let cnum = 0;
      let cprice = 0;
      let arr = $(".checkbox:checked");

      for (let i = 0; i < arr.length; i++) {
        let num = Number($(arr[i]).parent().parent().find(".p-num").val());
        let price = Number($(arr[i]).parent().parent().find(".info_7").text());
        cnum += num;
        cprice += price;
      }
      $(".nums").text(cnum);
      $(".prices").text(cprice);
    });
  });
});
