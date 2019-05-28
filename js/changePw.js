function changePw() {
  if ($("#username").val() == "") {
    alert("请输入用户名");
    return;
  }
  if ($("#password").val() == "") {
    alert("请输入原密码");
    return;
  }
  var newpaw = $("#newpaw").val(), newpaw_repeat = $("#newpaw_repeat").val();
  if (newpaw != newpaw_repeat) {
    alert("新密码与确认密码不匹配。请重新输入！");
  } else if (newpaw.length < 6) {
    alert("新密码不到6位！请输入长度不少于6位的新密码");
  } else {
    alert("修改成功。按确定返回登录页");
    window.location.href = "loginReg.html";
  }
}