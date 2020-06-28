$(function () {
  // $.get("http://jx.xuzhixiang.top/ap/api/productlist.php").then((res) => {
  //   console.log(res);
  // });
  //   console.log(1);
  //   var pimg =
  //     "https://img13.360buyimg.com/jdcms/s300x300_jfs/t1/116007/6/805/348141/5e90729fE3a250e67/4cb904bc0af96d97.jpg.webp";
  //   var pname = "111";
  //   var pprice = 99;
  //   var pdesc =
  //     "2020夏季新款男鞋透气男士运动鞋户外休闲网面小白鞋时尚百搭网鞋韩版潮流鞋子 米色 39";
  //   var uid = 34209;
  //   $.post(
  //     "http://jx.xuzhixiang.top/ap/api/goods/goods-add.php",
  //     { pimg, pname, pprice, pdesc, uid },
  //     function (data) {
  //       console.log(data);
  //     }
  //   );
  var uid = 34209;

  $.get("http://jx.xuzhixiang.top/ap/api/productlist.php", { uid }).then(
    (res) => {
      console.log(res);
      var str = "";
      var data1 = res.data;
      data1.forEach((item) => {
        str += `
        <li id="sp-li">
        <a href="http://localhost:5050/html/liebiao.html">
          <img src=${item.pimg} alt="">
          <h4>${item.pdesc}</h4>
          <p id="sp-p">
            <span>￥${item.pprice}</span>
            <span class="fr">卷</span>
          </p>
        </a>
        <div id="sp-d">
          <a href="">找相似</a>
        </div>
      </li> 
        `;
      });
      $("#ul-sp").html(str);
    }
  );
});
