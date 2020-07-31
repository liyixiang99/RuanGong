function login_m(request_url) {
	mui.init();
	var password = document.getElementById("password").value;
	var useraccount = document.getElementById("account").value;
	var cha_psd = is_special_less5(password);
	var cha_ua = is_special_less5(useraccount);

	if (cha_psd == 1 || cha_ua == 1) {
		mui.toast("输入的格式不正确！应输入数字或字母！");
		return;
	}
	if (cha_psd == 2 || cha_ua == 2) {
		mui.toast("输入的账号或密码长度应大于5！");
		return;
	}
	if (useraccount.length == 0) {
		mui.toast("账号不能为空！");
		return;

	} else if (password.length == 0) {
		mui.toast("密码不能为空！");
		return;
	} else {
		var loginurl = request_url + 'login?userAccount=' + useraccount + '&userPassword=' + password;
		mui.plusReady(function() {
			mui.ajax({
				type: 'GET',
				url: loginurl,
				timeout: 10000,
				dataType: "json",
				success: function(data) {
					if (data.data != null) {
						var user_s = JSON.stringify(data.data);
						user_s = user_s.substring(1, user_s.length - 1);
						var user = JSON.parse(user_s);
					}
					// var s ="";

					// for (var p in user) {
					// 	s= s+"n "+p+": "+user[p];
					// }
					// alert(s);

					if (data.code == 0) {
						mui.toast(data.message);
						mui.openWindow({
							url:'main.html',
							// url: 'lineVis.html',
							extras: {
								user: user,
							},
							id:'main_1',
						});
					} else {
						mui.toast(data.message);
					}
				},
				error: function(xhr, type, errorThrown) {
					mui.toast("服务器内部出错！");
				}
			});
		});
	}
}
