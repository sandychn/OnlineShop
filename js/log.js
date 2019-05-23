var logId = document.getElementById("log");
var regId = document.getElementById("reg");
function logReg() {
  logId.style.display = "none";
	regId.style.display = "block";
}
function regLog() {
  logId.style.display = "block";
	regId.style.display = "none";
}
function login() {
	alert("恭喜您，登录成功");
}
function reg() {
  alert("恭喜您，注册成功");
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
  var tmp = GetQueryString("register");
  if (tmp == 1) {
		logReg();
		document.title = "Online Shop :: 注册";
	} else {
		document.title = "Online Shop :: 登录";
	}
}
