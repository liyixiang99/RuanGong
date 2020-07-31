function load_xian() {
	mui.init();
	mui.plusReady(function() {
		var self = plus.webview.currentWebview();
		user = self.user;
		document.getElementById("main_username").innerHTML = user.userName;
	});
	
}

function load_xian_my() {
	mui.init();
	mui.plusReady(function() {
		var self = plus.webview.currentWebview();
		user = self.user;
		document.getElementById("my_username").innerHTML = user.userName;
		if (user.userAuthority == 3) {
			document.getElementById("my_auth").innerHTML = "租借用户";
		} else if (user.userAuthority == 2) {
			document.getElementById("my_auth").innerHTML = "设备负责人";
		} else if (user.userAuthority == 1) {
			document.getElementById("my_auth").innerHTML = "经办人";
		} else if (user.userAuthority == 0) {
			document.getElementById("my_auth").innerHTML = "领导";
		} else if (user.userAuthority == -1) {
			document.getElementById("my_auth").innerHTML = "内测用户";
		}
	});
}

function to_myequ(user) {
	mui.init();
	mui.openWindow({
		url: 'myequipment.html',
		extras: {
			user: user,
		}
	});
}

function to_myapp(user) {
	mui.init();
	mui.openWindow({
		url: 'apply.html',
		extras: {
			user: user,
		}
	});
}

function to_arrange(user) {
	mui.init();
	mui.openWindow({
		url: 'arrange.html',
		extras: {
			user: user,
		},
	});
}

function to_mine(user) {
	mui.init();
	mui.openWindow({
		url: 'mine.html',
		extras: {
			user: user,
		}
	});
}

function to_main(user) {
	mui.init();
	mui.plusReady(function() {
		var curr = plus.webview.currentWebview();
		var main_1 = plus.webview.getWebviewById('main_1');  
		       main_1.reload();  
		mui.openWindow({
			url: 'main.html',
			extras: {
				user: user,
			},
			id:'main_1',
		});
		curr.close();
	});
}

function to_search(user) {
	mui.init();
	mui.openWindow({
		url: 'search.html',
		extras: {
			user: user,
		}
	});
}

function to_buymore(user) {
	mui.init();
	mui.openWindow({
		url: 'buymore.html',
		extras: {
			user: user,
		}
	});
}

function to_checkEquipment(user) {
	mui.init();
	mui.openWindow({
		url: 'checkequipment.html',
		extras: {
			user: user,
		}
	});
}

function to_follow(user) {
	mui.init();
	mui.openWindow({
		url: 'follow.html',
		extras: {
			user: user,
		}
	});
}

	function to_email(user) {
		mui.init();
		mui.openWindow({
			url: 'email.html',
			extras: {
				user: user,
			}
		});
	}
	
	function to_undoemail(user) {
		mui.init();
		mui.openWindow({
			url: 'undoemail.html',
			extras: {
				user: user,
			}
		});
	}