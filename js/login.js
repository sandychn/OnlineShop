var logId;
var regId;
function logReg() {
  logId.style = "display: none";
  regId.style = "display: block";
}
function regLog() {
  logId.style.display = "display: block";
  regId.style.display = "display: none";
}
function login() {
  alert("恭喜您，登录成功");
}
function reg() {
  alert("恭喜您，注册成功");
  window.location.href = "loginReg.html";
}
function submit() {
  alert("恭喜您，密码修改成功");
}
function GetQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
}
function initReg() {
  logId = document.getElementById("log");
  regId = document.getElementById("reg");
  var tmp = GetQueryString("register");
  if (tmp == 1) {
    logReg();
    document.title = "Online Shop :: 注册";
  } else {
    document.title = "Online Shop :: 登录";
  }
}
