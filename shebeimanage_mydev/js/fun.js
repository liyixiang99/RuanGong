function is_special_less5(a) {
	var flag = 0;
	if(a.length < 5){
		flag = 2;
		return flag;
	}
	for (var i = 0; i < a.length; i++) {
		if ((0 <= a[i] && a[i] <= 9) || ('a' <= a[i] && a[i] <= 'z') || ('A' <= a[i] && a[i] <= 'Z')) {
				continue;

			} else {
				flag = 1;
			}
		}
	return flag;
}

function is_special(a){
	var flag = 0;
	for (var i = 0; i < a.length; i++) {
		if ((0 <= a[i] && a[i] <= 9) || ('a' <= a[i] && a[i] <= 'z') || ('A' <= a[i] && a[i] <= 'Z')||(a[i]=='_')) {
				continue;
	
			} else {
				flag = 1;
			}
		}
	return flag;
}	
function is_num(a){
	var flag = 0;
	for (var i = 0; i < a.length; i++) {
		if ((0 <= a[i] && a[i] <= 9)) {
				continue;
	
			} else {
				flag = 1;
			}
		}
	return flag;
	
}
function date_chin(yue){
	var date_map = new Map();
	date_map.set("Jan","1");
	date_map.set("Feb","2");
	date_map.set("Mar","3");
	date_map.set("Apr","4");
	date_map.set("May","5");
	date_map.set("Jun","6");
	date_map.set("Jul","7");
	date_map.set("Aug","8");
	date_map.set("Sep","9");
	date_map.set("Oct","10");
	date_map.set("Nov","11");
	date_map.set("Dec","12");
	return date_map.get(yue);
}
	
function quan_chin(quan){
	var quan_map = new Map();
	quan_map.set(-1,"内测");
	quan_map.set(1,"初级");
	quan_map.set(2,"中级");
	quan_map.set(3,"高级");
	return quan_map.get(quan);
}