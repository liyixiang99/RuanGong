	
function search(request_url){
	search_wzj_text(request_url);
	get_follow(request_url);
}

function get_follow(request_url) {
	mui.init();
	mui.plusReady(function() {
		var self = plus.webview.currentWebview();
		var user = self.user;
		// var s ="";
		// for (var p in user) {
		// 	s= s+"n "+p+": "+user[p];
		// }
		// alert(s);
		var get_follow_url = request_url + "AttentionFindRecord?userAccount=" + user.userAccount;
		// alert(search_url);
		mui.ajax({
			type: 'GET',
			url: get_follow_url,
			timeout: 10000,
			dataType: "json",
			success: function(data) {
				if (data.data != null) {
					var dev_data = new Array();
					dev_data = data.data;
					search_yzj_text(request_url,dev_data);
				} else {
					alert(dev_data);
					print(dev_data);
				}
			},
			error: function(xhr, type, errorThrown) {
				alert("服务器内部出错！");
			}
		});
	});
}

function search_wzj_text(request_url) {
	mui.init();
	mui.plusReady(function() {
		var self = plus.webview.currentWebview();
		var user = self.user;
		// var s ="";

		// for (var p in user) {
		// 	s= s+"n "+p+": "+user[p];
		// }
		// mui.toast(s);
		var searchwt_url = request_url + 'devUserAccount?userAccount=' + user.userAccount;
		 //alert(search_url);
		mui.ajax({
			type: 'GET',
			url: searchwt_url,
			timeout: 10000,
			dataType: "json",
			success: function(data) {

				if (data.data != null) {
					var dev_data = new Array();
					dev_data = data.data;
					var temp_data = new Array();
					var i =0;
					var j =0;
					for(var i = 0,j = 0;i < dev_data.length;i++){
							
						if(dev_data[i].devWorkStatus == 1 && dev_data[i].devStatus == 1){
							temp_data[j] = dev_data[i];
							j++;
						}
					}
					var temp_stable = document.getElementById('temp_stable_wzj').innerHTML;
					document.getElementById('tb').innerHTML = template(temp_stable, {
						list: temp_data
					});
				}
			},
			error: function(xhr, type, errorThrown) {
				mui.toast("服务器内部出错！");
			}
		});
	});
}

function search_yzj_text(request_url,followlist) {
	mui.init();
	mui.plusReady(function() {
		var self = plus.webview.currentWebview();
		var user = self.user;
		// var s ="";

		// for (var p in user) {
		// 	s= s+"n "+p+": "+user[p];
		// }
		// mui.toast(s);
		var searchyt_url = request_url + 'devUserAccount?userAccount=' + user.userAccount;
		// alert(search_url);
		mui.ajax({
			type: 'GET',
			url: searchyt_url,
			timeout: 10000,
			dataType: "json",
			success: function(data) {

				if (data.data != null) {
					var dev_data = new Array();
					dev_data = data.data;
					var temp_data = new Array();
					var i =0;
					var j =0;
					for(i = 0,j = 0;i < dev_data.length;i++){
							
						if(dev_data[i].devStatus == 2){
							temp_data[j] = dev_data[i];
							j++;
						}
					}
					var temp_stable = document.getElementById('temp_stable_yzj').innerHTML;
					document.getElementById('tb_yzj').innerHTML = template(temp_stable, {
						list: temp_data,
						fl_list:followlist
					});
				}
			},
			error: function(xhr, type, errorThrown) {
				mui.toast("服务器内部出错！");
			}
		});
	});
}

function search_s(dev_id, request_url) {
	mui.init();
	mui.plusReady(function() {
		var self = plus.webview.currentWebview();
		var user = self.user;

		// var s ="";

		// for (var p in user) {
		// 	s= s+"n "+p+": "+user[p];
		// }
		// alert(s);
		var searchs_url = request_url + "devLend?userAccount=" + user.userAccount + "&devId=" + dev_id;
		// alert(search_url);
		mui.ajax({
			type: 'GET',
			url: searchs_url,
			timeout: 10000,
			dataType: "json",
			success: function(data) {

				if (data.data != null) {
					var dev_data = new Array();
					dev_data = data.data;
					alert("租借成功");
					search(request_url);
				} else {
					alert(dev_data);
					print(dev_data);
					search(request_url);
				}
			},
			error: function(xhr, type, errorThrown) {
				alert("服务器内部出错！");
			}
		});
	});
}

function search_yzj(dev_id, request_url) {
	mui.init();
	mui.plusReady(function() {
		var self = plus.webview.currentWebview();
		var user = self.user;

		// var s ="";

		// for (var p in user) {
		// 	s= s+"n "+p+": "+user[p];
		// }
		// alert(s);
		var searchy_url = request_url + "AttentionAddRecord?userAccount=" + user.userAccount + "&devId=" + dev_id;
		 //alert(search_url);
		mui.ajax({
			type: 'GET',
			url: searchy_url,
			timeout: 10000,
			dataType: "json",
			success: function(data) {

				if (data.message == "success") {
					var dev_data = new Array();
					dev_data = data.data;
					alert("已添加关注！");
					search(request_url);
				} else if(data.message == "already attention this device"){
					alert("您已经关注了此设备！");
					search(request_url);
				}
			},
			error: function(xhr, type, errorThrown) {
				alert("服务器内部出错！");
			}
		});
	});
}

function more(dev_data_num, request_url) {
	mui.init();
	mui.plusReady(function() {
		var self = plus.webview.currentWebview();
		var user = self.user;

		// var s ="";

		// for (var p in user) {
		// 	s= s+"n "+p+": "+user[p];
		// }
		// alert(s);
		var more_url = request_url + 'devId?devId=' + dev_data_num;
		// alert(search_url);
		mui.ajax({
			type: 'GET',
			url: more_url,
			timeout: 10000,
			dataType: "json",
			success: function(data) {

				if ((data.data != null)) {
					var dev_data = new Array();
					dev_data = data.data;
					var dev_chadata = dev_data[0];
					var s = "";
					for (var p in dev_chadata) {

						if ((p == "devWorkStatus") || (p == "devStatus")) {

							if (p == "devWorkStatus") {
								if (dev_chadata[p] == 1) {
									s = s + "\n" + "设备状态" + ": " + "正常";
								} else if (dev_chadata[p] == 2) {
									s = s + "\n" + "设备状态" + ": " + "报废";
								} else if (dev_chadata[p] == 3) {
									s = s + "\n" + "设备状态" + ": " + "故障";
								} else if (dev_chadata[p] == 4) {
									s = s + "\n" + "设备状态" + ": " + "维修";
								} else if (dev_chadata[p] == 5) {
									s = s + "\n" + "设备状态" + ": " + "待报废";
								}
							} else if (p == "devStatus") {
								if (dev_chadata[p] == 1) {
									s = s + "\n" + "设备出借状态" + ": " + "空闲";
								} else if (dev_chadata[p] == 2) {
									s = s + "\n" + "设备出借状态" + ": " + "出借";
								}
							}
						} 
						else if(p=="devId"){
							s= s+"\n"+"设备序号"+": "+dev_chadata[p];
						}
						else if(p=="devName"){
							s= s+"\n"+"设备名称"+": "+dev_chadata[p];
						}
						else if(p=="devType"){
							s= s+"\n"+"设备类型"+": "+dev_chadata[p];
						}
						else if(p=="devPrise"){
							s= s+"\n"+"设备价格(元)"+": "+dev_chadata[p];
						}
						else if(p=="devDate"){
							var data=new Array();
							var ti_me=new Array();
							data=dev_chadata[p].split(" ");
							ti_me=data[3].split(":");
							var mon=date_chin(data[1]);
							s= s+"\n"+"设备日期"+": "+data[5]+ "年" + mon + "月" + data[2]+"日"+"  "+ ti_me[0]+":"+ ti_me[1];
						}
						else if(p=="devPeriod"){
							s= s+"\n"+"设备保质期"+": "+dev_chadata[p];
						}
						else if(p=="chargeAccount"){
							s= s+"\n"+"经办人"+": "+dev_chadata[p];
						}
						else if(p=="managerAccount"){
							s= s+"\n"+"设备负责人"+": "+dev_chadata[p];
						}
						else if(p=="devAuth"){
							s= s+"\n"+"设备权限"+": "+quan_chin(dev_chadata[p]);
						}
						else if(p=="userAccount"){
							if(dev_chadata[p]!=null){
							s= s+"\n"+"用户账号"+": "+dev_chadata[p];
							}
							else {
								s= s+"\n"+"用户账号"+": 无";
							}
						}
					}
					alert(s);
				}
			},
			error: function(xhr, type, errorThrown) {
				mui.toast("服务器内部出错！");
			}
		});
	});

	// var s ="";

	// for (var p in dev_data) {
	// 	s= s+"n "+p+": "+dev_data[p];
	// }
	// alert(s);
}
