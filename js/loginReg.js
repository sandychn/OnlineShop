var logId, regId;
function logReg() {
  logId.style = "display: none";
  regId.style = "display: block";
}
function regLog() {
  logId.style.display = "display: block";
  regId.style.display = "display: none";
}
function login() {
  var username = $("#username").val(),
    password = $("#password").val();
  if (username != "" && password != "") {
    alert("登录成功。按确定进入主页");
    window.location.href = "index.html";
  }
}
function reg() {
  var username = $("#change_username").val();
  if (username == "") {
    alert("请输入用户名");
  }
  password = $("#password").val();
  alert("注册成功。按确定返回到登录页");
  window.location.href = "loginReg.html";
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
function register() {
  if ($("#reg_username").val() == "") {
    alert("请输入用户名");
    return;
  }
  var newpaw = $("#reg_password").val(),
    newpaw_repeat = $("#reg_password_repeat").val();
  if (newpaw != newpaw_repeat) {
    alert("密码与确认密码不匹配。请重新输入！");
  } else if (newpaw.length < 6) {
    alert("密码不到6位！请输入长度不少于6位的密码");
  } else {
    alert("注册成功。按确定返回登录页");
    window.location.href = "loginReg.html";
  }
}
