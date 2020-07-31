function quit_login() {
		mui.plusReady(function() {
			var curr = plus.webview.currentWebview();
			var wvs = plus.webview.all();

			for (i = 0, len = wvs.length; i < len; i++) {

				if (wvs[i].getURL() != curr.getURL()) {
					plus.webview.close(wvs[i]);
				}
			}
			plus.webview.open('index.html');
			curr.close();
		});
	}


	function to_myinfo(user) {
		mui.init();
		mui.openWindow({
			url: 'myinfo.html',
			extras: {
				user: user,
			}
		});
	}

	function to_about() {
		mui.init();
		mui.openWindow({
			url: 'about.html',
		});
	}

	function to_question(user) {
		mui.init();
		mui.openWindow({
			url: 'question.html',
			extras: {
				user: user,
			}
		});
	}
	
	function is_bind_mail(request_url,user) {
		mui.init();
		mui.plusReady(function() {
			var self = plus.webview.currentWebview();
			var user = self.user;
			// var s ="";
	
			// for (var p in user) {
			// 	s= s+"n "+p+": "+user[p];
			// }
			// mui.toast(s);
			var isbanmail_url = request_url + 'EmailFindByUserAccount?userAccount=' + user.userAccount;
			// alert(search_url);
			mui.ajax({
				type: 'GET',
				url: isbanmail_url,
				timeout: 10000,
				dataType: "json",
				success: function(data) {
	
					if (data.data != null) {
						var dev_data = new Array();
						dev_data = data.data;
						if(dev_data.length == 0){
							to_email(user);
						}else{
							to_undoemail(user);
						}
						
					}
				},
				error: function(xhr, type, errorThrown) {
					mui.toast("服务器内部出错！");
				}
			});
		});
	}
