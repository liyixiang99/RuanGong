function my_apply(request_url) {
		mui.init();
		mui.plusReady(function() {
			var self = plus.webview.currentWebview();
			var user = self.user;

			// var s ="";

			// for (var p in user) {
			// 	s= s+"n "+p+": "+user[p];
			// }
			// alert(s);
			var search_app_url = request_url + 'userLogs?userAccount=' + user.userAccount;
			// alert(search_url);
			mui.ajax({
				type: 'GET',
				url: search_app_url,
				timeout: 10000,
				dataType: "json",
				success: function(data) {

					if ((data.data != null)) {
						var log_data = new Array();
						log_data = data.data;
						var now_data = new Array();
						var al_data = new Array();
						for (i = 0, j = 0, k = 0; i < log_data.length; i++) {
							if ((log_data[i].tokenStatus != 3)&&(log_data[i].senderAccount==user.userAccount)) {
								al_data[j] = log_data[i];
								j++;
							} else if ((log_data[i].tokenStatus == 3)&&(log_data[i].senderAccount==user.userAccount)) {
								now_data[k] = log_data[i];
								k++;
							}
						}
						al_data.sort(function(x,y){
							return y.logId-x.logId;
						});
						for(i=0;i<al_data.length;i++){
								if (al_data[i].tokenId == 0) {
									al_data[i].tokenId="购置申请";
								} else if (al_data[i].tokenId == 1) {
									al_data[i].tokenId= "借取申请";
								} else if (al_data[i].tokenId== 2) {
									al_data[i].tokenId= "归还申请";
								} else if (al_data[i].tokenId == 3) {
									al_data[i].tokenId= "修理申请";
								} else if (al_data[i].tokenId == 4) {
									al_data[i].tokenId= "故障申请";
								} else if (al_data[i].tokenId == 5) {
									al_data[i].tokenId="报废申请";
								} else if (al_data[i].tokenId == 6) {
									al_data[i].tokenId="确认申请";
								}else if (al_data[i].tokenId ==7) {
									al_data[i].tokenId="报修申请";
								}
						}
						for(i=0;i<now_data.length;i++){
								if (now_data[i].tokenId == 0) {
									now_data[i].tokenId="购置申请";
								} else if (now_data[i].tokenId == 1) {
									now_data[i].tokenId= "借取申请";
								} else if (now_data[i].tokenId== 2) {
									now_data[i].tokenId= "归还申请";
								} else if (now_data[i].tokenId == 3) {
									now_data[i].tokenId= "修理申请";
								} else if (now_data[i].tokenId == 4) {
									now_data[i].tokenId= "故障申请";
								} else if (now_data[i].tokenId == 5) {
									now_data[i].tokenId="报废申请";
								} else if (now_data[i].tokenId == 6) {
									now_data[i].tokenId="确认申请";
								}else if (now_data[i].tokenId == 7) {
									now_data[i].tokenId="报修申请";
								}
						}
						var temp_now_shen = document.getElementById('temp_now_shen').innerHTML;
						document.getElementById('shen_now').innerHTML = template(temp_now_shen, {
							list: now_data
						});
						var temp_al_shen = document.getElementById('temp_al_shen').innerHTML;
						document.getElementById('shen_al').innerHTML = template(temp_al_shen, {
							list: al_data
						});
						// 	var s ="";

						// 	for (var p in dev_chadata) {
						// 		s= s+"\n"+p+": "+dev_chadata[p];
						// 	}
						// 	alert(s);
					}
				},
				error: function(xhr, type, errorThrown) {
					mui.toast("服务器内部出错！");
				}
			});
		});
	}

	function app_more(type, log_num, request_url) {
		mui.init();
		mui.plusReady(function() {
			var self = plus.webview.currentWebview();
			var user = self.user;

			// var s ="";

			// for (var p in user) {
			// 	s= s+"n "+p+": "+user[p];
			// }
			// alert(s);
			var search_app_url = request_url + 'userLogs?userAccount=' + user.userAccount;
			// alert(search_url);
			mui.ajax({
				type: 'GET',
				url: search_app_url,
				timeout: 10000,
				dataType: "json",
				success: function(data) {

					if ((data.data != null)) {
						var log_data = new Array();
						log_data = data.data;
						var now_data = new Array();
						var al_data = new Array();
						for (i = 0, j = 0, k = 0; i < log_data.length; i++) {
							if ((log_data[i].tokenStatus != 3)&&(log_data[i].senderAccount==user.userAccount)) {
								al_data[j] = log_data[i];
								j++;
							} else if ((log_data[i].tokenStatus == 3)&&(log_data[i].senderAccount==user.userAccount)) {
								now_data[k] = log_data[i];
								k++;
							}
						}
						al_data.sort(function(x,y){
							return y.logId-x.logId;
						});
						if (type == 0) {
							var xian_log = al_data[log_num];

						} else if (type == 1) {
							var xian_log = now_data[log_num];
						}

						var s = "";

						for (var p in xian_log) {
							if (p == "logId") {
								s = s + "\n" + "申请编号" + ": " + xian_log[p];
							} else if (p == "devId") {
								s = s + "\n" + "设备编号" + ": " + xian_log[p];
							} else if (p == "devStatus") {
								if (xian_log[p] == 1) {
									s = s + "\n" + "设备出借状态" + ": " + "空闲";
								} else if (xian_log[p] == 2) {
									s = s + "\n" + "设备出借状态" + ": " + "出借";
								}
							} else if (p == "devWorkStatus") {
								if (xian_log[p] == 1) {
									s = s + "\n" + "设备状态" + ": " + "正常";
								} else if (xian_log[p] == 2) {
									s = s + "\n" + "设备状态" + ": " + "报废";
								} else if (xian_log[p] == 3) {
									s = s + "\n" + "设备状态" + ": " + "故障";
								} else if (xian_log[p] == 4) {
									s = s + "\n" + "设备状态" + ": " + "维修";
								} else if (xian_log[p] == 5) {
									s = s + "\n" + "设备状态" + ": " + "待报废";
								}
							} else if (p == "tokenId") {
								if (xian_log[p] == 0) {
									s = s + "\n" + "指令编号" + ": " + "购置";
								} else if (xian_log[p] == 1) {
									s = s + "\n" + "指令编号" + ": " + "借取";
								} else if (xian_log[p] == 2) {
									s = s + "\n" + "指令编号" + ": " + "归还";
								} else if (xian_log[p] == 3) {
									s = s + "\n" + "指令编号" + ": " + "修理";
								} else if (xian_log[p] == 4) {
									s = s + "\n" + "指令编号" + ": " + "故障";
								} else if (xian_log[p] == 5) {
									s = s + "\n" + "指令编号" + ": " + "报废";
								} else if (xian_log[p] == 6) {
									s = s + "\n" + "指令编号" + ": " + "确认";
								}
							} else if (p == "tokenStatus") {
								if (xian_log[p] == 1) {
									s = s + "\n" + "指令执行状态" + ": " + "执行成功";
								} else if (xian_log[p] == 2) {
									s = s + "\n" + "指令执行状态" + ": " + "执行失败";
								} else if (xian_log[p] == 3) {
									s = s + "\n" + "指令执行状态" + ": " + "待办";
								} else if (xian_log[p] == 4) {
									s = s + "\n" + "指令执行状态" + ": " + "已撤回";
								}
							} else if (p == "senderAccount") {
								s = s + "\n" + "执行操作用户账号" + ": " + xian_log[p];
							} else if (p == "receiver_account") {
								s = s + "\n" + "接收人账号" + ": " + xian_log[p];
							} else if (p == "change_time") {
								s = s + "\n" + "更改日期" + ": " + xian_log[p];
							} else if (p == "auth") {
								s = s + "\n" + "权限" + ": " + quan_chin(xian_log[p]);
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


	function back_app(logid, request_url) {
		mui.init();
		mui.plusReady(function() {
			var self = plus.webview.currentWebview();
			var user = self.user;

			// var s ="";

			// for (var p in user) {
			// 	s= s+"n "+p+": "+user[p];
			// }
			// alert(s);
			var app_back_url = request_url + 'logCancelRecord?userAccount=' + user.userAccount + '&logId=' + logid +
				'&logStatus=3';
			// alert(search_url);
			mui.ajax({
				type: 'GET',
				url: app_back_url,
				timeout: 10000,
				dataType: "json",
				success: function(data) {

					if ((data.code == 0)) {
						mui.toast("取消成功！")
						my_apply(request_url);
					}
					// 	var s ="";

					// 	for (var p in dev_chadata) {
					// 		s= s+"\n"+p+": "+dev_chadata[p];
					// 	}
					// 	alert(s);
				},
				error: function(xhr, type, errorThrown) {
					mui.toast("服务器内部出错！");
				}
			});
		});
	}
