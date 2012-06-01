chrome.tabs.getSelected(null,getUrl);
//alert('a');
//document.getElementById('_a').innerHTML = "正在解析，请稍等......"
//setTimeout("document.getElementById('videoUrl').innerHTML = \"正在解析，请稍等......\"",10);
setTimeout("getDownload();",5);
//getDownload()
function getDownload(){
	xmlHttp=new XMLHttpRequest();
	xmlHttp.overrideMimeType('text/xml');
	xmlHttp.open("GET",parseUrl , false);
	xmlHttp.setRequestHeader("Content-Type", "text/html; charset=utf-8");
  	xmlHttp.send(null); 
	content = xmlHttp.responseText;
	var re = /<td align=left[\s\S]+<td align=left/;
	var res = re.exec(content);
	var x = /<a href=[^<>]+>[\s\S]+<\/a>/;
	var m = x.exec(res);
	if(m)
	document.getElementById('videoUrl').innerHTML = m;
	else
	document.getElementById('videoUrl').innerHTML = "<p>抱歉，未找到地址！点击<a href = "+parseUrl+ " target=\"_blank\" id=\"click\">这里</a>试试！</p>" ;
}
function getUrl(tab){
	currentUrl = tab.url;	
	parseUrl = 'http://www.flvcd.com/parse.php?kw=' + currentUrl;
 }