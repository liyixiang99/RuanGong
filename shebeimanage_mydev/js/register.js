function to_register() {
		mui.init();
		mui.openWindow({
			url: 'register.html',
		});
	}

	function register_m(request_url) {
		mui.init();
		var q_password = document.getElementById("q_password").value;
		var s_password = document.getElementById("s_password").value;
		var useraccount = document.getElementById("account").value;
		var username = document.getElementById("username").value;
		var cha_qpd = is_special(q_password);
		var cha_spd = is_special(s_password);
		var cha_ua = is_special(useraccount);
		var cha_un = is_special(username);


		if (cha_qpd == 1 || cha_spd == 1 || cha_ua == 1 || cha_un == 1) {
			mui.toast("输入的格式不正确！应输入数字或字母！");
			return;
		}
		if (useraccount.length == 0) {
			mui.toast("账号不能为空！");
			return;

		} else if (username.length == 0) {
			mui.toast("用户名不能为空！");
			return;
		} else if (s_password.length == 0) {
			mui.toast("请填写设置的密码！");
			return;
		} else if (q_password.length == 0) {
			mui.toast("请填写确认密码！");
			return;
		} else {
			if (s_password != q_password) {
				mui.toast("设置密码和确认密码不一致！");
				return;
			} else {
				var registerurl = request_url + 'register?userAccount=' + useraccount + '&userName=' + username + '&userPassword=' +
					s_password;
				mui.plusReady(function() {
					mui.ajax({
						type: 'GET',
						url: registerurl,
						timeout: 10000,
						success: function(data) {
							// var s ="";

							// for (var p in data) {
							// 	s= s+"n "+p+": "+data[p];
							// }
							// alert(s);
							if (data.code == 0) {
								mui.toast(data.message);
								mui.openWindow({
									url:'index.html'
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
	}
