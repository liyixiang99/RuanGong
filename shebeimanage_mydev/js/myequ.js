function search_fuze_zujie(request_url) {
	mui.init();
	mui.plusReady(function() {
		var self = plus.webview.currentWebview();
		var user = self.user;

		// var s ="";

		// for (var p in user) {
		// 	s= s+"n "+p+": "+user[p];
		// }
		// alert(s);
		var search_man_url = request_url + 'devManagerAccount?managerAccount=' + user.userAccount;
		var search_zujie_url = request_url + 'devDevUserAccount?userAccount=' + user.userAccount;
		// alert(search_url);
		mui.ajax({
			type: 'GET',
			url: search_man_url,
			timeout: 10000,
			dataType: "json",
			success: function(data) {

				if ((data.data != null) && (user.userAuthority < 3)) {
					var dev_data = new Array();
					dev_data = data.data;
					for(i=0;i<dev_data.length;i++){
								if (dev_data[i].devWorkStatus == 1) {
									dev_data[i].devWorkStatus= "正常";
								} else if (dev_data[i].devWorkStatus == 2) {
									dev_data[i].devWorkStatus= "报废";
								} else if (dev_data[i].devWorkStatus == 3) {
									dev_data[i].devWorkStatus= "故障";
								} else if (dev_data[i].devWorkStatus == 4) {
									dev_data[i].devWorkStatus= "维修";
								} else if (dev_data[i].devWorkStatus == 5) {
									dev_data[i].devWorkStatus="待报废";
								}
					}
					var temp_stable = document.getElementById('temp_stable').innerHTML;
					document.getElementById('fuze').innerHTML = template(temp_stable, {
						list: dev_data
					});
				}
			},
			error: function(xhr, type, errorThrown) {
				mui.toast("服务器内部出错！");
			}
		});
		mui.ajax({
			type: 'GET',
			url: search_zujie_url,
			
			timeout: 10000,
			dataType: "json",
			success: function(data) {

				if ((data.data != null)) {
					var dev_data = new Array();
					dev_data = data.data;
					for(i=0;i<dev_data.length;i++){
								if (dev_data[i].devWorkStatus == 1) {
									dev_data[i].devWorkStatus= "正常";
								} else if (dev_data[i].devWorkStatus == 2) {
									dev_data[i].devWorkStatus= "报废";
								} else if (dev_data[i].devWorkStatus == 3) {
									dev_data[i].devWorkStatus= "故障";
								} else if (dev_data[i].devWorkStatus == 4) {
									dev_data[i].devWorkStatus= "维修";
								} else if (dev_data[i].devWorkStatus == 5) {
									dev_data[i].devWorkStatus="待报废";
								}
					}
					var temp_stable = document.getElementById('temp_zu').innerHTML;
					document.getElementById('zujie').innerHTML = template(temp_stable, {
						list: dev_data
					});
				}
			},
			error: function(xhr, type, errorThrown) {
				mui.toast("服务器内部出错！");
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
		var search_man_url = request_url + 'devManagerAccount?managerAccount=' + user.userAccount;
		//alert(search_man_url);
		mui.ajax({
			type: 'GET',
			url: search_man_url,
			timeout: 10000,
			dataType: "json",
			success: function(data) {

				if ((data.data != null)) {
					var dev_data = new Array();
					dev_data = data.data;
					var dev_chadata = dev_data[dev_data_num];
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
							s= s+"\n"+"设备价格（元）"+": "+dev_chadata[p];
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
							s= s+"\n"+"设备保质期（天）"+": "+dev_chadata[p];
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

function more_zujie(dev_data_num, request_url) {
	mui.init();
	mui.plusReady(function() {
		var self = plus.webview.currentWebview();
		var user = self.user;

		// var s ="";

		// for (var p in user) {
		// 	s= s+"n "+p+": "+user[p];
		// }
		// alert(s);
		var search_zujie_url = request_url + 'devDevUserAccount?userAccount=' + user.userAccount;
		// alert(search_url);
		mui.ajax({
			type: 'GET',
			url: search_zujie_url,
			timeout: 10000,
			dataType: "json",
			success: function(data) {

				if ((data.data != null)) {
					var dev_data = new Array();
					dev_data = data.data;
					var dev_chadata = dev_data[dev_data_num];
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
							s= s+"\n"+"设备保质期（天）"+": "+dev_chadata[p];
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
							if(dev_chadata[p]!="null"){
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

function add_xiu(request_url, dev_data_num) {
	mui.init();
	mui.plusReady(function() {
		var self = plus.webview.currentWebview();
		var user = self.user;

		// var s ="";

		// for (var p in user) {
		// 	s= s+"n "+p+": "+user[p];
		// }
		// alert(s);
		var add_fix_url = request_url + 'devAddFixRecord?userAccount=' + user.userAccount + '&devId=' + dev_data_num;
		mui.ajax({
			type: 'GET',
			url: add_fix_url,
			timeout: 10000,
			dataType: "json",
			success: function(data) {
				mui.toast(data.message);
				search_fuze_zujie(request_url);
			},
			error: function(xhr, type, errorThrown) {
				mui.toast("服务器内部出错！");
			}
		});
	});
}

function add_damage(request_url, dev_data_num) {
	mui.init();
	mui.plusReady(function() {
		var self = plus.webview.currentWebview();
		var user = self.user;

		// var s ="";

		// for (var p in user) {
		// 	s= s+"n "+p+": "+user[p];
		// }
		// alert(s);
		var add_damage_url = request_url + 'devAddDamageRecord?userAccount=' + user.userAccount + '&devId=' + dev_data_num;
		mui.ajax({
			type: 'GET',
			url: add_damage_url,
			timeout: 10000,
			dataType: "json",
			success: function(data) {
				mui.toast(data.message);
				search_fuze_zujie(request_url);
			},
			error: function(xhr, type, errorThrown) {
				mui.toast("服务器内部出错！");
			}
		});
	});
}

function add_scrap(request_url, dev_data_num) {
	mui.init();
	mui.plusReady(function() {
		var self = plus.webview.currentWebview();
		var user = self.user;

		// var s ="";

		// for (var p in user) {
		// 	s= s+"n "+p+": "+user[p];
		// }
		// alert(s);
		var add_scrap_url = request_url + 'devAddScrapRecord?userAccount=' + user.userAccount + '&devId=' + dev_data_num;
		mui.ajax({
			type: 'GET',
			url: add_scrap_url,
			timeout: 10000,
			dataType: "json",
			success: function(data) {
				mui.toast(data.message);
				search_fuze_zujie(request_url);
			},
			error: function(xhr, type, errorThrown) {
				mui.toast("服务器内部出错！");
			}
		});
	});
}


function add_record(request_url, dev_data_num, num) {
	var record_se = document.getElementById("record-" + num);
	var record_type = record_se.options[record_se.selectedIndex].value;
	if (record_type == "item-2") {
		add_xiu(request_url, dev_data_num);
	} else if (record_type == "item-3") {
		add_damage(request_url, dev_data_num);
	} else if (record_type == "item-4") {
		add_scrap(request_url, dev_data_num);
	} else if (record_type == "item-1") {
		alert("请选择您要添加的记录类型！")
	}
}


function back(request_url, dev_data_num) {
	mui.init();
	mui.plusReady(function() {
		var self = plus.webview.currentWebview();
		var user = self.user;

		// var s ="";

		// for (var p in user) {
		// 	s= s+"n "+p+": "+user[p];
		// }
		// alert(s);
		var back_url = request_url + 'devRevert?userAccount=' + user.userAccount + '&devId=' + dev_data_num;
		mui.ajax({
			type: 'GET',
			url: back_url,
			timeout: 10000,
			dataType: "json",
			success: function(data) {
				mui.toast(data.message);
				search_fuze_zujie(request_url);
			},
			error: function(xhr, type, errorThrown) {
				mui.toast("服务器内部出错！");
			}
		});
	});
}

function add_guzhang(dev_data_num,request_url) {
	mui.init();
	mui.plusReady(function() {
		var self = plus.webview.currentWebview();
		var user = self.user;

		// var s ="";
		// for (var p in user) {
		// 	s= s+"n "+p+": "+user[p];
		// }
		// alert(s);
		var add_xiuli_url = request_url + 'logAddRepairRecord?userAccount=' + user.userAccount + '&devId=' + dev_data_num;
		mui.ajax({
			type: 'GET',
			url: add_xiuli_url,
			timeout: 10000,
			dataType: "json",
			success: function(data) {
				mui.toast(data.message);
				search_fuze_zujie(request_url);
			},
			error: function(xhr, type, errorThrown) {
				mui.toast("服务器内部出错！");
			}
		});
	});
}
