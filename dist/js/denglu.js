class Index {
  constructor() {
    // 显示登录中的用户
    this.init();
    // 退出事件
    this.addEvent();
  }
  init() {
    // 获取之后，简单处理数据
    this.m = sessionStorage.getItem("userMsg");
    this.m = this.m ? this.m : null;
    // 如果有登录成功后的信息
    if (this.m) {
      // 显示登录的用户名
      $("#userName").text(this.m);
      // 隐藏登录注册键
      $("#denglu").css({ display: "none" });
      $("#zuce").css({ display: "none" });
      // 显示用户名和退出键
      $("#userName").css({ display: "inline-block" });
      $("#logout").css({ display: "inline-block" });
    }
  }
  addEvent() {
    $("#logout").click(function () {
      sessionStorage.removeItem("userMsg");
      location.reload();
    });
  }
}
new Index();
