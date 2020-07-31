function finish(resquest_url) {
	mui.init();
	var dev_name = document.getElementById("dev_name").value;
	var dev_type = document.getElementById("dev_type").value;
	var dev_num = document.getElementById("dev_num").value;
	var dev_prise = document.getElementById("dev_prise").value;
	var dev_period = document.getElementById("dev_period").value;
	// var charge_account = document.getElementById("charge_account").value;
	// var manager_account = document.getElementById("manager_account").value;
	var dev_auth = document.getElementById("dev_auth").value;
	
	var cha_name = is_special(dev_name);
	var cha_type = is_special(dev_type);
	var cha_num = is_num(dev_num);
	var cha_prise = is_num(dev_prise);
	var cha_period = is_num(dev_period);
	
	if(dev_name.length==0){
		mui.toast("设备名称不能为空！");
		return ;
	}
	if(dev_type.length==0){
		mui.toast("设备类型不能为空！");
		return ;
	}
	if(dev_num.length==0){
		mui.toast("设备数量不能为空！");
		return ;
	}
	if(dev_prise.length==0){
		mui.toast("设备价格不能为空！");
		return ;
	}
	if(dev_period.length==0){
		mui.toast("设备保质期不能为空！");
		return ;
	}
	if((cha_name==1)||(cha_type==1)||(cha_num==1)||(cha_prise==1)||(cha_period==1)){
		mui.toast("您输入的格式不正确！提示：字母或数字");
		return ;
	}
		
	if(dev_num>5){
		mui.toast("抱歉！目前一次最多购置5个设备！");
		return ;
	}
	mui.plusReady(function() {
		var self = plus.webview.currentWebview();
		var user = self.user;
		var charge_account = user.userAccount;
		// var s ="";

		// for (var p in user) {
		// 	s= s+"n "+p+": "+user[p];
		// }
		// alert(s);
		var add_buy_url = request_url + 'devBuyTemp?devName=' + dev_name + '&devType=' + dev_type + '&devPrise=' + dev_prise +
			'&devPeriod=' + dev_period + '&chargeAccount=' + charge_account + '&devAuth=' + dev_auth + '&number=' + dev_num;
		mui.ajax({
			type: 'GET',
			url: add_buy_url,
			timeout: 10000,
			dataType: "json",
			success: function(data) {

				if (data.message == "success") {
					mui.toast("添加成功！");
					mui.back();
				} else {
					mui.toast(data.message);
				}

			},
			error: function(xhr, type, errorThrown) {
				mui.toast("服务器内部出错！");
			}
		});
	});
	// var s ="";

	// for (var p in buymore_new) {
	// 	s= s+"n "+p+": "+buymore_new[p];
	// }
	// alert(s);
}


function quit() {
	mui.init();
	mui.plusReady(function() {
		mui.back();
	});
}
