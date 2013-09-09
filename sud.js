
// Find pizza in Mountain View using Yelp

var page_explore = require('webpage').create(),
    url_explore = 'http://173.mo.msudrf.ru/modules.php?name=sud_delo&op=rd&delo_table=G1_DOCUMENT&delo_id=1540005&G1_DOCUMENT__CASE_NUMBERSS=&G1_DOCUMENT__JUDGE=&G1_DOCUMENT__CATEGORY=%25CF%25F0%25EE%25F7%25E8%25E5%2520%25E8%25F1%25EA%25EE%25E2%25FB%25E5%2520%25E4%25E5%25EB%25E0&G1_DOCUMENT__RESULT_DATE1D=&G1_DOCUMENT__RESULT_DATE2D=&G1_DOCUMENT__LOAD_DATE1D=&G1_DOCUMENT__LOAD_DATE2D=&Submit=%CD%E0%E9%F2%E8';
/*
page_explore.open(url_explore, function (status) {
    if (status !== 'success') {
        console.log('Unable to access network in explore');
    } else {
        var results = page_explore.evaluate(function() {
            var list = document.getElementById('divSDPcontainer').getElementsByTagName('TABLE')[0].getElementsByTagName('tr');
			var delo = [], url = [], fio = [], all = [], kat = [], date = [], tmp = [], i;
            for (i = 1; i < list.length; i+=1) {
				
				all[i-1] = 'insert into tbl1 values("' + list[i].getElementsByTagName('td')[0].innerText.replace(/^\u00a0+/,"") + '","' + list[i].getElementsByTagName('td')[1].children[0].href + '","' + list[i].getElementsByTagName('td')[2].innerText.replace(/^\u00a0+/,"") + '","' + list[i].getElementsByTagName('td')[3].innerText.replace(/^\u00a0+/,"") + '","' + list[i].getElementsByTagName('td')[4].innerText.replace(/^\u00a0+/,"") + '");';

            }

            return all;//.push(list[2].getElementsByTagName('td').innerHTML);
        });
        console.log(results.join('\n'));
    }
    phantom.exit();
});
*/



// Find pizza in Mountain View using Yelp

var page = require('webpage').create(),
    url = 'http://173.mo.msudrf.ru/modules.php?name=sud_delo&op=rd&delo_table=G1_DOCUMENT&delo_id=1540005&G1_DOCUMENT__CASE_NUMBERSS=&G1_DOCUMENT__JUDGE=&G1_DOCUMENT__CATEGORY=%25CF%25F0%25EE%25F7%25E8%25E5%2520%25E8%25F1%25EA%25EE%25E2%25FB%25E5%2520%25E4%25E5%25EB%25E0&G1_DOCUMENT__RESULT_DATE1D=&G1_DOCUMENT__RESULT_DATE2D=&G1_DOCUMENT__LOAD_DATE1D=&G1_DOCUMENT__LOAD_DATE2D=&Submit=%CD%E0%E9%F2%E8';
/*
page.open(url, function (status) {
    if (status !== 'success') {
        console.log('Unable to access network');
    } else {
        var results = page.evaluate(function() {
            var list = document.getElementById('divSDPcontainer').getElementsByTagName('TABLE')[1].getElementsByTagName('tr');
			var delo = [], url = [], fio = [], all = [], kat = [], date = [], tmp = [], i;
            for (i = 1; i < list.length; i+=1) {
                //delo.push(list[i].getElementsByTagName('td')[0].innerText);
				//url.push(list[i].getElementsByTagName('td')[1].children[0].href);
				//fio.push(list[i].getElementsByTagName('td')[2].innerText);
				//kat.push(list[i].getElementsByTagName('td')[3].innerText);
				//date.push(list[i].getElementsByTagName('td')[4].innerText);
				
				all[i-1] = 'insert into tbl1 values("' + list[i].getElementsByTagName('td')[0].innerText.replace(/^\u00a0+/,"") + '","' + list[i].getElementsByTagName('td')[1].children[0].href + '","' + list[i].getElementsByTagName('td')[2].innerText.replace(/^\u00a0+/,"") + '","' + list[i].getElementsByTagName('td')[3].innerText.replace(/^\u00a0+/,"") + '","' + list[i].getElementsByTagName('td')[4].innerText.replace(/^\u00a0+/,"") + '");';

            }
			//all = tmp.concat(list.length-1, delo, url, fio, kat, date);
			//all.concat(delo);
			//all.push(url);
			//all.push(fio);
			//all.push(kat);
			//all.push(date);
			//all.shift();
			//all.shift();
            return all;//.push(list[2].getElementsByTagName('td').innerHTML);
        });
        console.log(results.join('\n'));
    }
    //phantom.exit();
    page.close();
});
*/
console.log("qwe");

page_explore.open(url, function (status) {
    if (status !== 'success') {
        console.log('Unable to access network');
    } else {
        var results = page_explore.evaluate(function() {
            var list = document.querySelector('div#divSDPcontainer').innerText;
			//var delo = [], url = [], fio = [], all = [], kat = [], date = [], tmp = [], i;
            //for (i = 0; i < list.length; i++) {
			//	all.push(list[i].innerHTML);
            //}

            return list;
        });
        console.log(results);
    }
	page_explore.close();
    phantom.exit();
});

//phantom.exit();

/*

hasAttribute('href')

http://173.mo.msudrf.ru/modules.php?name=sud_delo&op=rd&pageNum_Recordset1=2&totalRows_Recordset1=64&delo_table=G1_DOCUMENT&delo_id=1540005&G1_DOCUMENT__CASE_NUMBERSS=&G1_DOCUMENT__JUDGE=&G1_DOCUMENT__CATEGORY=%25CF%25F0%25EE%25F7%25E8%25E5%2520%25E8%25F1%25EA%25EE%25E2%25FB%25E5%2520%25E4%25E5%25EB%25E0&G1_DOCUMENT__RESULT_DATE1D=&G1_DOCUMENT__RESULT_DATE2D=&G1_DOCUMENT__LOAD_DATE1D=&G1_DOCUMENT__LOAD_DATE2D=&Submit=%CD%E0%E9%F2%E8&vnkod=50MS0173

Судебные акты
В настоящий момент сервер, на котором расположен модуль сопряжения с БД «АМИРС», недоступен.
Попробуйте обратиться к данной странице позже.


*/
