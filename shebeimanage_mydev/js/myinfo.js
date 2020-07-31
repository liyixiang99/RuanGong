function my_info() {
		mui.init();
		mui.plusReady(function() {
			var self = plus.webview.currentWebview();
			var user = self.user;
			document.getElementById("username").innerHTML = user.userName;
			document.getElementById("username1").innerHTML = user.userName;
			document.getElementById("myinfo_hao").innerHTML = user.userAccount;
			// document.getElementById("myinfo_id").innerHTML = user.userId;
			if (user.userAuthority == 3) {
				document.getElementById("myinfo_auth").innerHTML = "租借用户";
			} else if (user.userAuthority == 2) {
				document.getElementById("myinfo_auth").innerHTML = "设备负责人";
			} else if (user.userAuthority == 1) {
				document.getElementById("myinfo_auth").innerHTML = "经办人";
			} else if (user.userAuthority == 0) {
				document.getElementById("myinfo_auth").innerHTML = "领导";
			} else if (user.userAuthority == -1) {
				document.getElementById("myinfo_auth").innerHTML = "测试用户";
			}
		});
	}
