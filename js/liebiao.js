$(function () {
  var uid = 34209;

  $.get("http://jx.xuzhixiang.top/ap/api/productlist.php", { uid }).then(
    (res) => {
      console.log(res);
      var str = "";
      var data1 = res.data;
      data1.forEach((item) => {
        str += `
          <li id="sp-li" pid=${item.pid}>
          <a href="http://localhost:5050/html/xiangqing.html?pid=${item.pid}">
            <img
              src=${item.pimg}
              alt=""
              class="max-img"
            />
            <div class="min-img">
              <ul class="min-ul">
                <li class="min-li">
                  <img
                    src=${item.pimg}
                    alt=""
                  />
                  <img
                    src=${item.pimg}
                    alt=""
                  />
                  <img
                    src=${item.pimg}
                    alt=""
                  />
                  <img
                    src=${item.pimg}
                    alt=""
                  />
                  <img
                    src=${item.pimg}
                    alt=""
                  />
                </li>
              </ul>
            </div>
            <span class="jg">￥</span>
            <span class="jg">${item.pprice}</span>
            <h4>
            ${item.pdesc}
            </h4>

            <div class="p1">
              <span class="span1">1.1万 +</span>
              <span>条评价</span>
            </div>
          </a>
          <div class="tj" data-pid=${item.pid}>加入购物车</div>
        </li>
          `;
      });
      $("#ul-lb").html(str);
      $(".tj").click(function () {
        console.log(1);
        $.get(
          "http://jx.xuzhixiang.top/ap/api/add-product.php",
          { uid, pid: $(this).data("pid"), pnum: 1 },
          function (data) {
            console.log(data);
          }
        );
      });
    }
  );
});
