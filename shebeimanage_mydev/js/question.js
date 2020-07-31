	
function que_fin(){
	mui.init();
	mui.plusReady(function () {
	    var curr = plus.webview.currentWebview();
		mui.toast("感谢您的反馈！");
		curr.close();
	});
}