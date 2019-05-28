var timeDelay = 1500;
var nowImage, imgs, imgCount;
var offset = new Array();
var mainOffset = 0;
var marginWidth = 35; /* 30 from img + 5 from box-shadow */
var timer;

function init_slider() {
  $(window).resize(function() {
    mainOffset = document.getElementById("carousel").offsetWidth / 2.0;
  });
  nowImage = 0;
  imgs = $("#slider img");
  imgCount = imgs.length;
  var htmlNav = "<ul>";
  var len = 0;
  offset[0] = 0;
  for (var i = 0; i < imgCount; ++i) {
    var wid = imgs.eq(i).prop("width");
    offset[i + 1] = offset[i] + wid + marginWidth;
    len += wid;
    len += marginWidth;
    if (this.curDisplay == i) {
      htmlNav += "<li class=on><a>" + i + "</a></li>";
    } else {
      htmlNav += "<li><a>" + i + "</a></li>";
    }
  }
  htmlNav += "</ul>";
  $("#slider").append('<div id="sliderNav">' + htmlNav + "</div>");
  $("#slider #carousel ul").css({
    width: len
  });
  // add button click event.
  $("#sliderNav ul li").on("click", function() {
    var id = $(this).index();
    if (id != nowImage) {
      clearInterval(timer);
      $("#slider #sliderNav li")
        .eq(nowImage)
        .removeClass("on");
      nowImage = id;
      $("#slider #sliderNav li")
        .eq(nowImage)
        .addClass("on");
      $("#slider #carousel ul").css({
        transform: "translateX(" + (mainOffset - offset[nowImage] - imgs.eq(nowImage).prop("width") / 2) + "px)"
      });
      timer = setInterval("nextImg()", timeDelay);
    }
  });
  for (var i = 0; i < imgCount; ++i) {
    imgs.eq(i).mouseover(function() {
      clearInterval(timer);
    });
    imgs.eq(i).mouseout(function() {
      timer = setInterval("nextImg()", timeDelay);
    });
  }
  mainOffset = document.getElementById("carousel").offsetWidth / 2.0;
  $("#slider #carousel ul").css({
    transform: "translateX(" + (mainOffset - offset[nowImage] - imgs.eq(nowImage).prop("width") / 2) + "px)"
  });
  timer = setInterval("nextImg()", timeDelay);
  $("#slider #sliderNav li")
    .eq(nowImage)
    .addClass("on");
}

function nextImg() {
  $("#slider #sliderNav li")
    .eq(nowImage)
    .removeClass("on");
  nowImage = (nowImage + 1) % imgCount;
  $("#slider #sliderNav li")
    .eq(nowImage)
    .addClass("on");
  $("#slider #carousel ul").css({
    transform: "translateX(" + (mainOffset - offset[nowImage] - imgs.eq(nowImage).prop("width") / 2) + "px)"
  });
}
