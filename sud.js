/* VARS */

var page = require('webpage').create(),
    url = 'http://173.mo.msudrf.ru/modules.php?name=sud_delo&op=rd&delo_table=G1_DOCUMENT&delo_id=1540005&G1_DOCUMENT__CASE_NUMBERSS=&G1_DOCUMENT__JUDGE=&G1_DOCUMENT__CATEGORY=%25CF%25F0%25EE%25F7%25E8%25E5%2520%25E8%25F1%25EA%25EE%25E2%25FB%25E5%2520%25E4%25E5%25EB%25E0&G1_DOCUMENT__RESULT_DATE1D=&G1_DOCUMENT__RESULT_DATE2D=&G1_DOCUMENT__LOAD_DATE1D=&G1_DOCUMENT__LOAD_DATE2D=&Submit=%CD%E0%E9%F2%E8',
	fs = require('fs');//, all = [];

/* FUNCTIONS WEBPAGE */

page.onConsoleMessage = function(msg) {
    console.log(msg);
};
page.onLoadFinished = function(status){
    if (!status){
        console.log('Unable to access network in explore');
        phantom.exit(1);
    }
    var res = pagedo();
    write_sql_to_file(res);
    setTimeout(closepage(),100);
};
function closepage(){
	page.close();
	phantom.exit(0);
}
function pagedo(){
	var results = page.evaluate(function(){
		var list = document.getElementById('divSDPcontainer').getElementsByTagName('TABLE')[1].getElementsByTagName('tr');
		var i, arrbuf = [], buf;
		for (i = 1; i < list.length; i+=1) {
			arrbuf[i-1] = 'insert into tbl1 values("' + list[i].getElementsByTagName('td')[0].innerText.replace(/^\u00a0+/,"") + '","' + list[i].getElementsByTagName('td')[1].children[0].href + '","' + list[i].getElementsByTagName('td')[2].innerText.replace(/^\u00a0+/,"") + '","' + list[i].getElementsByTagName('td')[3].innerText.replace(/^\u00a0+/,"") + '","' + list[i].getElementsByTagName('td')[4].innerText.replace(/^\u00a0+/,"") + '");';
		}
		buf = arrbuf.join('\n');
		return buf;
	});
	return results;
}

page.open(url);

/* FUNCTIONS FS */
function write_sql_to_file(all){
console.log(all);
fs.write("./cmd.sql",all+"\n","w");
phantom.exit(0);
}


/*

hasAttribute('href')

http://173.mo.msudrf.ru/modules.php?name=sud_delo&op=rd&pageNum_Recordset1=2&totalRows_Recordset1=64&delo_table=G1_DOCUMENT&delo_id=1540005&G1_DOCUMENT__CASE_NUMBERSS=&G1_DOCUMENT__JUDGE=&G1_DOCUMENT__CATEGORY=%25CF%25F0%25EE%25F7%25E8%25E5%2520%25E8%25F1%25EA%25EE%25E2%25FB%25E5%2520%25E4%25E5%25EB%25E0&G1_DOCUMENT__RESULT_DATE1D=&G1_DOCUMENT__RESULT_DATE2D=&G1_DOCUMENT__LOAD_DATE1D=&G1_DOCUMENT__LOAD_DATE2D=&Submit=%CD%E0%E9%F2%E8&vnkod=50MS0173

Судебные акты
В настоящий момент сервер, на котором расположен модуль сопряжения с БД «АМИРС», недоступен.
Попробуйте обратиться к данной странице позже.


*/
