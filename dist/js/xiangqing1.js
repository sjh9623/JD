// 数据列表
var uid = 34209;
var id = location.search.slice(1).split("=")[1];

$.get("http://jx.xuzhixiang.top/ap/api/detail.php", { id }).then((res) => {
  console.log(res);
  var str = "";

  var data1 = res.data;
  console.log(data1);
  str += `
    <div class="preview_wrap">
        <div class="preview_img">
          <img
            src=${data1.pimg}
            alt=""
          />
          <!-- 遮挡层 -->
          <div class="mask"></div>
          <!-- 放大版的图片 -->
          <div class="big">
            <img
              src=${data1.pimg}
              alt=""
              class="bigImg"
            />
          </div>
        </div>
      </div>
    `;
  $("#h-js").html(`${data1.pdesc}`);

  $(".preview_wrap").html(str);
});
window.addEventListener("load", function () {
  // 放大镜效果
  // 1.鼠标经过区域 遮挡层和大图片显示和隐藏
  // 2.鼠标移动 遮挡层跟着移动 主要是获得鼠标移动时不断变化的位置赋值给遮挡层
  // 3.遮挡层与大图片位置与之对应 按比例移动

  // 1.鼠标经过preview_img时 遮挡层和大图片显示 和 隐藏
  // 获取事件源
  var preview_img = this.document.querySelector(".preview_img");
  var mask = this.document.querySelector(".mask");
  var big = this.document.querySelector(".big");
  // 注册事件
  preview_img.addEventListener("mouseover", function () {
    mask.style.display = "block";
    big.style.display = "block";
  });
  preview_img.addEventListener("mouseleave", function () {
    mask.style.display = "none";
    big.style.display = "none";
  });
  // 2.鼠标移动 更新遮挡层的位置
  // 给区域添加侦听器,只要鼠标一移动 就更新遮挡层的位置  切记:只有开启定位的盒子 才可以使用left和top值
  preview_img.addEventListener("mousemove", function (e) {
    // (1) 经过时 就要获得鼠标在preview_img里面的坐标
    var mouseX = e.pageX - preview_img.offsetLeft - 153;
    var mouseY = e.pageY - preview_img.offsetTop - 141;
    // console.log(mouseX, mouseY);
    // (2) 更新遮挡层的位置
    // a.如果直接赋值的话:鼠标是在遮挡层的左上角,为了美观鼠标应该在遮挡层的中心位置 - 盒子高\宽的一半
    var maskX = mouseX - mask.offsetWidth / 2;
    var maskY = mouseY - mask.offsetHeight / 2;
    // b.此时还会出现一个问题:遮挡层在preview_img区域之外也出现了  我们只需要在区域内显示 区域外不显示
    // 所以 我们需要一个判断条件 left的最大值(previwe_img.width-mask.width)和最小值(0)
    var maskMax = preview_img.offsetWidth - mask.offsetWidth;
    if (maskX <= 0) {
      maskX = 0;
    } else if (maskX >= maskMax) {
      maskX = maskMax;
    }
    if (maskY <= 0) {
      maskY = 0;
    } else if (maskY >= maskMax) {
      maskY = maskMax;
    }
    mask.style.left = maskX + "px";
    mask.style.top = maskY + "px";
    // console.log(mask.style.left, mask.style.top);

    // 3.大图片跟随遮挡层的移动而移动
    // 有一个核心算法: 遮挡层移动位置/遮挡层最大移动位置 = 大图片移动位置/大图片最大移动位置
    // 遮挡层移动位置:maskX maxkY; 遮挡层最大移动位置:maskMax
    // 大图片移动位置: bigX bigY; 大图片最大移动位置:bigMax
    // (1)bigMax = 图片尺寸-装图片盒子的尺寸  图片比盒子大
    var bigImg = document.querySelector(".bigImg");
    var bigMax = bigImg.offsetWidth - big.offsetWidth;
    // (2) bigX = 遮挡层移动位置 * 大图片最大移动位置 / 遮挡层最大移动位置
    var bigX = (maskX * bigMax) / maskMax;
    var bigY = (maskY * bigMax) / maskMax;
    // (3) 大图片的left和top值: big系列的值  的负值
    bigImg.style.left = -bigX + "px";
    bigImg.style.top = -bigY + "px";
  });
});
