var asideDoucument;

function init_aside() {
  asideDoucument = document.getElementById("gotoTopImage");
  asideDoucument.onmouseover = function() {
    asideDoucument.src = "image/gotoTopHover.jpg";
  };
  asideDoucument.onmouseout = function() {
    asideDoucument.src = "image/gotoTop.jpg";
  };
}

$(function() {
  $(window).scroll(function() {
    /* 判断滚动条 距离页面顶部的距离 100可以自定义*/
    if ($(window).scrollTop() > 150) {
      $("#gotoTopImage").fadeIn(100); /* 这里用.show()也可以 只是效果太丑 */
    } else {
      $("#gotoTopImage").fadeOut(100);
    }
  });
});

$(function() {
  $("#gotoTopImage").on("click", function() {
    $("body,html").animate(
      {
        scrollTop: 0
      },
      100
    );
    return false;
  });
});
