function init_count() {
  if (document.cookie == "") {
    document.cookie = "indexcount=0";
  }
  var x = parseInt(getCookie("indexcount")) + 1;
  document.cookie = "indexcount=" + x;
  $("footer").append("<br/>主页访问计数: " + x);
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
