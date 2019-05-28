window.onload = function() {
  //获取数量事件元素
  var jian = document.getElementsByClassName("jian");
  var jia = document.getElementsByClassName("jia");
  var txt = document.getElementsByClassName("txt");
  //获取小计元素
  var price = document.getElementsByClassName("price");
  var small_price = document.getElementsByClassName("small_price");
  //获取选项框元素
  var btn = document.getElementsByClassName("btn");
  var all_btn = document.getElementsByClassName("all_btn")[0];
  //获取总价事件元素
  var all_price = document.getElementsByClassName("all_price")[0];
  //获取删除事件元素
  var del = document.getElementsByClassName("del");
  var list = document.getElementsByClassName("list");
  //获取全部删除元素
  var all_del = document.getElementsByClassName("all_del")[0];
  //获取结算元素
  var pay = document.getElementsByClassName("pay")[0];

  for (var i = 0; i < jian.length; i++) {
    //添加数量事件
    jian[i].index = i; //标记对象索引
    jian[i].onclick = function() {
      var val = txt[this.index].value;
      val--;
      if (val <= 0) {
        val = 1;
      }
      txt[this.index].value = val;
      smallprice();
      allprice();
    };
    jia[i].index = i;
    jia[i].onclick = function() {
      var val = txt[this.index].value;
      val++;
      txt[this.index].value = val;
      smallprice();
      allprice();
    };

    //添加选项框点击事件
    btn[i].onclick = function() {
      allprice();
    };

    //结算事件
    pay.onclick = function() {
      for (var i = 0; i < small_price.length; ++i) {
        if (btn[i].checked) {
          alert("您一共消费" + all_price.innerHTML + "元");
          return;
        }
      }
      alert("请勾选要下单的商品");
    };

    //添加删除单行事件
    del[i].index = i;
    del[i].onclick = function() {
      list[this.index].remove();
      for (var k = 0; k < del.length; k++) {
        del[k].index = k;
      }
      allprice();
    };
  }

  //添加全部删除事件
  all_del.onclick = function() {
    for (var i = 0; i < btn.length; i++) {
      if (btn[i].checked) {
        list[i].remove();
        i--;
      }
    }
    allprice();
  };

  //添加小计事件
  function smallprice() {
    for (var i = 0; i < price.length; i++) {
      small_price[i].innerHTML = (txt[i].value * parseFloat(price[i].innerHTML)).toFixed(2);
    }
  }

  //添加选项框事件
  all_btn.onclick = function() {
    for (var i = 0; i < btn.length; i++) {
      btn[i].checked = true;
    }
    allprice();
  };

  //总价事件
  function allprice() {
    var title = 0.0;
    for (var i = 0; i < small_price.length; i++) {
      if (btn[i].checked) {
        title += parseFloat(small_price[i].innerHTML);
      }
    }
    all_price.innerHTML = "￥" + title.toFixed(2);
  }
};
