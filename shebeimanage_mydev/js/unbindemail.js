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
		// alert(search_url);
		mui.prompt("若解除绑定邮箱，请输入密码确定","请在此输入密码","解除绑定邮箱",['确认','取消'],function(e) {
			if(e.index == 0){
				//alert(e.value);
				var unbind_url = request_url + 'EmailUnbind?userAccount=' + user.userAccount + '&userPassword=' + e.value;
				mui.ajax({
					type: 'GET',
					url: unbind_url,
					timeout: 10000,
					dataType: "json",
					success: function(data) {
				
						if (data.message == "success") {
							mui.toast("解绑成功！");
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
			}
		},'div');
		document.querySelector('.mui-popup-input input').type='password' ;
	});
}