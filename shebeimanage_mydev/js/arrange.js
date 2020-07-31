var w_bao_data= new Array();
var w_buy_data= new Array();
var w_man_data= new Array();
var w_xiu_data =new Array();
function sleep(interval) {
				return new Promise(resolve => {
					setTimeout(resolve, interval);
				})
			}
	
async function yibu(){
	await sleep(500);
	var temp_arrange = document.getElementById('temp_arrange').innerHTML;
	document.getElementById('bao_arrange').innerHTML = template(temp_arrange, {
		bao_list: w_bao_data,
		buy_list: w_buy_data,
		manager_list: w_man_data,
		xiu_list: w_xiu_data
	});
}			
function load_dai(request_url) {
		mui.init();
		var self;
		var user;
		// var arrange_baoload_url;
		// var arrange_buyload_url;
		// var arrange_manager_url;
		mui.plusReady(function() {
			self = plus.webview.currentWebview();
			user = self.user;
			// alert(user);
			// var s ="";

			// for (var p in user) {
			// 	s= s+"n "+p+": "+user[p];
			// }
			// alert(s);
			 var arrange_baoload_url = request_url + 'devFindScrapRecord?userAccount=' + user.userAccount;
			 var arrange_buyload_url = request_url + 'logFindBuyTempRecord?userAccount=' + user.userAccount;
			 var arrange_manager_url = request_url + 'userAuth?userAuth=2';
			 var arrange_xiuload_url = request_url + 'logFindRepairLog?userAccount='+user.userAccount;
			// var w_bao_data= new Array();
			// var w_buy_data= new Array();
			// var w_man_data= new Array();
			// alert(arrange_buyload_url);
			////////////////////////////报废申请////////////////////////////////////////////
			mui.ajax({
				type: 'GET',
				url: arrange_baoload_url,
				timeout: 10000,
				dataType: "json",
				success: function(data) {

					if ((data.data != null) && (user.userAuthority == 0)) {
						var bao_data = new Array();
						bao_data = data.data;
						for(i=0;i<bao_data.length;i++){
								if (bao_data[i].tokenId == 0) {
									bao_data[i].tokenId="购置申请";
								} else if (bao_data[i].tokenId == 1) {
									bao_data[i].tokenId= "借取申请";
								} else if (bao_data[i].tokenId== 2) {
									bao_data[i].tokenId= "归还申请";
								} else if (bao_data[i].tokenId == 3) {
									bao_data[i].tokenId= "修理申请";
								} else if (bao_data[i].tokenId == 4) {
									bao_data[i].tokenId= "故障申请";
								} else if (bao_data[i].tokenId == 5) {
									bao_data[i].tokenId="报废申请";
								} else if (bao_data[i].tokenId == 6) {
									bao_data[i].tokenId="确认申请";
								}
						}
						w_bao_data=bao_data;
						// var temp_arrange = document.getElementById('temp_arrange').innerHTML;
						// document.getElementById('bao_arrange').innerHTML = template(temp_arrange, {
						// 	list: w_bao_data
						// });
					}
					// alert(w_bao_data[0]);
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
			////////////////////////购置申请/////////////////////////////////////////////////
			
			mui.ajax({
				type: 'GET',
				url: arrange_buyload_url,
				timeout: 10000,
				dataType: "json",
				success: function(data) {
			
					if ((data.data != null) && (user.userAuthority == 0)) {
						var buy_data = new Array();
						buy_data = data.data;
						// alert(buy_data[0].tokenId);
						for(i=0;i<buy_data.length;i++){
								if (buy_data[i].tokenId == 0) {
									buy_data[i].tokenId="购置申请";
								} else if (buy_data[i].tokenId == 1) {
									buy_data[i].tokenId= "借取申请";
								} else if (buy_data[i].tokenId== 2) {
									buy_data[i].tokenId= "归还申请";
								} else if (buy_data[i].tokenId == 3) {
									buy_data[i].tokenId= "修理申请";
								} else if (buy_data[i].tokenId == 4) {
									buy_data[i].tokenId= "故障申请";
								} else if (buy_data[i].tokenId == 5) {
									buy_data[i].tokenId="报废申请";
								} else if (buy_data[i].tokenId == 6) {
									buy_data[i].tokenId="确认申请";
								}
						}
						 w_buy_data=buy_data;
						// alert(w_buy_data[0].tokenId);
						// var temp_arrange = document.getElementById('temp_arrange').innerHTML;
						// document.getElementById('bao_arrange').innerHTML = template(temp_arrange, {
						// 	list: w_buy_data
						// });
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
			//////////////////负责人申请////////////////////////////////////
			
			mui.ajax({
				type: 'GET',
				url: arrange_manager_url,
				timeout: 10000,
				dataType: "json",
				success: function(data) {
			
					if ((data.data != null)) {
						var man_data = new Array();
						man_data = data.data;
						
						 w_man_data=man_data;
						// var temp_arrange = document.getElementById('temp_arrange').innerHTML;
						// document.getElementById('bao_arrange').innerHTML = template(temp_arrange, {
						// 	list: w_man_data
						// });
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
			//////////////报修申请//////////////////////////////
			mui.ajax({
				type: 'GET',
				url: arrange_xiuload_url,
				timeout: 10000,
				dataType: "json",
				success: function(data) {
			
					if ((data.data != null) && (user.userAuthority ==2)) {
						var xiu_data = new Array();
						xiu_data = data.data;
						// alert(buy_data[0].tokenId);
						for(i=0;i<xiu_data.length;i++){
								if (xiu_data[i].tokenId == 0) {
									xiu_data[i].tokenId="购置申请";
								} else if (xiu_data[i].tokenId == 1) {
									xiu_data[i].tokenId= "借取申请";
								} else if (xiu_data[i].tokenId== 2) {
									xiu_data[i].tokenId= "归还申请";
								} else if (xiu_data[i].tokenId == 3) {
									xiu_data[i].tokenId= "修理申请";
								} else if (xiu_data[i].tokenId == 4) {
									xiu_data[i].tokenId= "故障申请";
								} else if (xiu_data[i].tokenId == 5) {
									xiu_data[i].tokenId="报废申请";
								} else if (xiu_data[i].tokenId == 6) {
									xiu_data[i].tokenId="确认申请";
								}
								else if (xiu_data[i].tokenId == 7) {
									xiu_data[i].tokenId="报修申请";
								}
						}
						 w_xiu_data=xiu_data;
						// alert(w_buy_data[0].tokenId);
						// var temp_arrange = document.getElementById('temp_arrange').innerHTML;
						// document.getElementById('bao_arrange').innerHTML = template(temp_arrange, {
						// 	list: w_buy_data
						// });
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
		yibu();
	}	

	function yes_arrange(logid, request_url,type) {         ///////////type=0 报废 type==1 报修
		mui.init();
		mui.plusReady(function() {
			var self = plus.webview.currentWebview();
			var user = self.user;

			// var s ="";

			// for (var p in user) {
			// 	s= s+"n "+p+": "+user[p];
			// }
			// alert(s);
			var arrange_yes_url;
			var arrange_yes_url_0 = request_url + 'devDealScrapRecord?userAccount=' + user.userAccount + '&logId=' + logid +
				'&logStatus=1';
			var arrange_yes_url_1 = request_url + 'logDealRepairLog?userAccount=' + user.userAccount + '&logId=' + logid +
				'&logStatus=1';
				if(type==0){
					arrange_yes_url=arrange_yes_url_0;
				}
				else if(type==1){
					arrange_yes_url=arrange_yes_url_1;
				}
			// alert(search_url);
			mui.ajax({
				type: 'GET',
				url: arrange_yes_url,
				timeout: 10000,
				dataType: "json",
				success: function(data) {

					if ((data.code == 0)) {
						mui.toast("确认成功！")
						load_dai(request_url);
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

	function no_arrange(logid, request_url,type) {
		mui.init();
		mui.plusReady(function() {
			var self = plus.webview.currentWebview();
			var user = self.user;

			// var s ="";

			// for (var p in user) {
			// 	s= s+"n "+p+": "+user[p];
			// }
			// alert(s);
			var arrange_no_url;
			var arrange_no_url_0 = request_url + 'devDealScrapRecord?userAccount=' + user.userAccount + '&logId=' + logid +
				'&logStatus=2';
			var arrange_no_url_1 = request_url + 'logDealRepairLog?userAccount=' + user.userAccount + '&logId=' + logid +
				'&logStatus=2';
				if(type==0){
					arrange_no_url=arrange_no_url_0;
				}
				else if(type==1){
					arrange_no_url=arrange_no_url_1;
				}
			mui.ajax({
				type: 'GET',
				url: arrange_no_url,
				timeout: 10000,
				dataType: "json",
				success: function(data) {

					if ((data.code == 0)) {
						mui.toast("驳回成功！")
						load_dai(request_url);
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

	function more_arr(dev_id, request_url,type) {  //type=0 报废申请的更多  type=1 购置申请的更多   type =2 报修申请的更多
		mui.init();
		mui.plusReady(function() {
			var self = plus.webview.currentWebview();
			var user = self.user;

			// var s ="";

			// for (var p in user) {
			// 	s= s+"n "+p+": "+user[p];
			// }
			// alert(s);
			// alert(dev_id);
			var arrange_load_url;	
			if(type==0){
				arrange_load_url = request_url + 'devId?devId=' + dev_id;
			}
				
			else if(type==1){
				arrange_load_url = request_url + 'devFindTemp?devId=' + dev_id;
			}
			else if(type==2){
				arrange_load_url = request_url + 'devId?devId=' + dev_id;
			}
			// alert(user.userAuthority);
			mui.ajax({
				type: 'GET',
				url: arrange_load_url,
				timeout: 10000,
				dataType: "json",
				success: function(data) {
					if ((data.data != null)) {
						var dev_data = data.data[0];
							var s ="";
							//alert(dev_data);
							for (var p in dev_data) {
								if ((p == "devWorkStatus") || (p == "devStatus")) {
						
									if (p == "devWorkStatus") {
										if (dev_data[p] == 1) {
											s = s + "\n" + "设备状态" + ": " + "正常";
										} else if (dev_data[p] == 2) {
											s = s + "\n" + "设备状态" + ": " + "报废";
										} else if (dev_data[p] == 3) {
											s = s + "\n" + "设备状态" + ": " + "故障";
										} else if (dev_data[p] == 4) {
											s = s + "\n" + "设备状态" + ": " + "维修";
										} else if (dev_data[p] == 5) {
											s = s + "\n" + "设备状态" + ": " + "待报废";
										}
									} else if (p == "devStatus") {
										if (dev_data[p] == 1) {
											s = s + "\n" + "设备出借状态" + ": " + "空闲";
										} else if (dev_data[p] == 2) {
											s = s + "\n" + "设备出借状态" + ": " + "出借";
										}
									}
								} 
								else if(p=="devId"){
									s= s+"\n"+"设备序号"+": "+dev_data[p];
								}
								else if(p=="devName"){
									s= s+"\n"+"设备名称"+": "+dev_data[p];
								}
								else if(p=="devType"){
									s= s+"\n"+"设备类型"+": "+dev_data[p];
								}
								else if(p=="devPrise"){
									s= s+"\n"+"设备价格（元）"+": "+dev_data[p];
								}
								else if(p=="devDate"){
									var data=new Array();
									var ti_me=new Array();
									data=dev_data[p].split(" ");
									ti_me=data[3].split(":");
									var mon=date_chin(data[1]);
									s= s+"\n"+"设备日期"+": "+data[5]+ "年" + mon + "月" + data[2]+"日"+"  "+ ti_me[0]+":"+ ti_me[1];
								}
								else if(p=="devPeriod"){
									s= s+"\n"+"设备保质期（天）"+": "+dev_data[p];
								}
								else if(p=="chargeAccount"){
									s= s+"\n"+"经办人"+": "+dev_data[p];
								}
								else if(p=="managerAccount"){
									if(dev_data[p]==null){
										s= s+"\n"+"设备负责人"+": 无";
									}
									else{
									s= s+"\n"+"设备负责人"+": "+dev_data[p];
									}
								}
								else if(p=="devAuth"){
									s= s+"\n"+"设备权限"+": "+quan_chin(dev_data[p]);
								}
								else if(p=="userAccount"){
									if(dev_data[p]!=null){
									s= s+"\n"+"用户账号"+": "+dev_data[p];
									}
									else {
										s= s+"\n"+"用户账号"+": 无";
									}
								}
							}
							alert(s);
						}
						// alert(data.message);
				},
				error: function(xhr, type, errorThrown) {
					mui.toast("服务器内部出错！");
				}
			});
		});
	}

	
function who_manager(sel_num,logid,request_url){
	mui.init();
	mui.plusReady(function() {
		var self = plus.webview.currentWebview();
		var user = self.user;
		// alert(sel_num);
		var manager_account_se = document.getElementById("sel_manager-"+sel_num);
		var manager_account = manager_account_se.options[manager_account_se.selectedIndex].value;
		// alert(manager_account);
		// var s ="";
		// for (var p in user) {
		// 	s= s+"n "+p+": "+user[p];
		// }
		// alert(s);
		var que_manager_url = request_url + 'logDealBuyTempRecord?userAccount=' + user.userAccount + '&managerAccount=' + manager_account +  '&logId=' + logid +'&logStatus=3';
		mui.ajax({
			type: 'GET',
			url: que_manager_url,
			timeout: 10000,
			dataType: "json",
			success: function(data) {
	
				if ((data.code == 0)) {
					mui.toast("确认成功！")
					load_dai(request_url);
				}
				else{
					mui.toast("操作失败！")
					load_dai(request_url);
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