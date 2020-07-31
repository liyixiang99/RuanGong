	
function yes_email(request_url){
	mui.init();
	var user_email = document.getElementById("user_email").value;
	var user_password=document.getElementById("user_password").value;
	mui.plusReady(function() {
		var self = plus.webview.currentWebview();
		var user = self.user;
		// var s ="";
	
		// for (var p in user) {
		// 	s= s+"n "+p+": "+user[p];
		// }
		// alert(s);
		if(user_password.length==0){
			mui.toast("密码不能为空！");
		}	
		if(user_email.length==0){
			mui.toast("邮箱不能为空！");
		}
		else if(user_email.length!=0){
			var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
			isok= reg.test(user_email);
			if(!isok){
				mui.toast("您输入的邮箱格式不正确！");
			}
		}
		var add_mail_url = request_url + 'EmailBind?userAccount=' + user.userAccount +'&userPassword=' + user_password + '&emailAddress=' + user_email;
		//alert(add_mail_url);
		mui.ajax({
			type: 'GET',
			url: add_mail_url,
			timeout: 10000,
			dataType: "json",
			success: function(data) {
	
				if (data.message == "success") {
					mui.toast("添加成功！");
					mui.back();
				} else if(data.message == "Wrong password"){
					mui.toast("密码错误！");
					//alert(user_password);
					//alert(user.userPassord);
				}else{
					mui.toast(data.message);
				}
	
			},
			error: function(xhr, type, errorThrown) {
				mui.toast("服务器内部出错！");
			}
		});
	});
}

function unbind_mail(request_url) {
	mui.init();
	mui.plusReady(function() {
		var self = plus.webview.currentWebview();
		var user = self.user;
		// var s ="";

		// for (var p in user) {
		// 	s= s+"n "+p+": "+user[p];
		// }
		// mui.toast(s);
		var search_url = request_url + '9' + user.userAccount;
		http://aaedion.club:8002/api/EmailUnbind?userAccount=17182626&userPassword=17182626
		// alert(search_url);
		mui.ajax({
			type: 'GET',
			url: search_url,
			timeout: 10000,
			dataType: "json",
			success: function(data) {

				if (data.data != null) {
					var dev_data = new Array();
					dev_data = data.data;
					if(dev_data.length == 0){
					    var btn_is_mail = ['稍后再说', '现在绑定'];
						mui.confirm("您还没有绑定邮箱!\n若您不绑定邮箱,您将无法通过邮箱获得您关注设备的事实信息。","提示",btn_is_mail,function(e) {
							if (e.index == 1) {
								to_email(user);
							}
						});
					}	
					
				}
			},
			error: function(xhr, type, errorThrown) {
				mui.toast("服务器内部出错！");
			}
		});
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
		var search_url = request_url + 'EmailFindByUserAccount?userAccount=' + user.userAccount;
		// alert(search_url);
		mui.ajax({
			type: 'GET',
			url: search_url,
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