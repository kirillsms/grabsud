var page = require('webpage').create();
page.onConsoleMessage = function(msg) {
    console.log(msg);
};
page.onLoadFinished = function(status){
    if (!status){
        console.log('fail');
        phantom.exit();
    }
    page.render("1.png");
    setTimeout(closepage(),1000);
    //phantom.exit();
};
function closepage(){
	page.close();
	phantom.exit();
}
page.open("http://whoer.net/");
