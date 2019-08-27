//替换所有换行符
function replaceEnter(str){
    return str.replace(/(\n|\r|(\r\n)|(\u0085)|(\u2028)|(\u2029))/g, '');
}


//tr实现slideUp用jqery 
tr.find('td').animate({'paddingTop':0,'paddingBottom':0,height:0}).wrapInner('<div style="display: block;" />') .parent().find('td > div').slideUp(500, function(){
    //$(this).parent().parent().remove(); 
    tr.remove();});
//tr实现slideDown用jqery 
$('#my_table > tbody > tr.my_row').find('td').wrapInner('<div style="display: none;" />').parent().find('td > div').slideDown(700, function(){
  var $set = $(this);
  $set.replaceWith($set.contents());
 });

//js的反调试
(function(){(function(c){(function d(){try{var u=function(x){if(1!==(""+x/x).length||0===x%20)(function(){}).constructor("debugger")();else debugger;u(++x)};u(0)}catch(e){c.setTimeout(d,50)}})()})(document.body.appendChild(document.createElement("frame")).contentWindow)})();

//获取位置信息(lon,lat)
<script>
    navigator.geolocation.getCurrentPosition( // 该函数有如下三个参数
        function(pos){ // 如果成果则执行该<a class="baidu-highlight " target="_blank" href="https://www.baidu.com/s?wd=%E5%9B%9E%E8%B0%83%E5%87%BD%E6%95%B0&tn=44039180_cpr&fenlei=mv6quAkxTZn0IZRqIHckPjm4nH00T1Y3uyfsnHb4uHT4PHNBnv7-0ZwV5Hcvrjm3rH6sPfKWUMw85HfYnjn4nH6sgvPsT6K1TL0qnfK1TL0z5HD0IgF_5y9YIZ0lQzqlpA-bmyt8mh7GuZR8mvqVQL7dugPYpyq8Q1m3njf4P1DsnHm1nj03n1fdn6">回调函数</a>
            alert(
                '  经度：' + pos.coords.latitude +
                '  纬度：' + pos.coords.longitude +
                '  高度：' + pos.coords.altitude +
                '  精确度(经纬)：' + pos.coords.accuracy +
                '  精确度(高度)：' + pos.coords.altitudeAccuracy +
                '  速度：' + pos.coords.speed
            );
        }, function(err){ // 如果失败则执行该<a class="baidu-highlight " target="_blank" href="https://www.baidu.com/s?wd=%E5%9B%9E%E8%B0%83%E5%87%BD%E6%95%B0&tn=44039180_cpr&fenlei=mv6quAkxTZn0IZRqIHckPjm4nH00T1Y3uyfsnHb4uHT4PHNBnv7-0ZwV5Hcvrjm3rH6sPfKWUMw85HfYnjn4nH6sgvPsT6K1TL0qnfK1TL0z5HD0IgF_5y9YIZ0lQzqlpA-bmyt8mh7GuZR8mvqVQL7dugPYpyq8Q1m3njf4P1DsnHm1nj03n1fdn6">回调函数</a>
            alert(err.message);
        }, { // 附带参数
            enableHighAccuracy: false, // 提高精度(耗费资源)
            timeout: 3000, // 超过timeout则调用失败的<a class="baidu-highlight " target="_blank" href="https://www.baidu.com/s?wd=%E5%9B%9E%E8%B0%83%E5%87%BD%E6%95%B0&tn=44039180_cpr&fenlei=mv6quAkxTZn0IZRqIHckPjm4nH00T1Y3uyfsnHb4uHT4PHNBnv7-0ZwV5Hcvrjm3rH6sPfKWUMw85HfYnjn4nH6sgvPsT6K1TL0qnfK1TL0z5HD0IgF_5y9YIZ0lQzqlpA-bmyt8mh7GuZR8mvqVQL7dugPYpyq8Q1m3njf4P1DsnHm1nj03n1fdn6">回调函数</a>
            maximumAge: 1000 // 获取到的地理信息的有效期，超过有效期则重新获取一次位置信息
        }
    );
</script>



/*
* desc: 数组旋转
*@clockwise --- bool 是否顺时针
*@times     --- int  旋转次数
* var t = [
*   [1,1,1],
*   [1,1,1],
* ];
* t = t.rotate(true, 1);
* t => 1,1
*      1,1
*      1,1
*
*/
Array.prototype.rotate = function(clockwise, times){
	if('object' != typeof(this[0])) return this;
	var r = this.length-1;
	var c = this[0].length-1;
	var rotated = new Array();
	if(clockwise){//顺时针
		for(var i=0; i<=r; i++){
			for(var j=0; j<=c; j++){
				if('undefined' == typeof(rotated[j]))rotated[j] = new Array();
				rotated[j][r-i] = this[i][j];
			}
		}
	}else{
		for(var i=0; i<=r; i++){
			for(var j=0; j<=c; j++){
				if('undefined' == typeof(rotated[c-j]))rotated[c-j] = new Array();
				rotated[c-j][i] = this[i][j];
			}
		}
	}
	if(times > 1){
		for(var t=1; t<times; t++){
			rotated = rotated.rotate(clockwise, 1);
		}
	}
	return rotated;
};

function appendHtml(html, root){
    root = root || document.querySelectorAll('body')[0];
    var node = document.createElement("div"),
        fragment = document.createDocumentFragment(),
        childs = null,
        i = 0;
    node.innerHTML = html;
    childs = node.childNodes;
    for( ; i<childs.length; i++){
        fragment.appendChild(childs[i]);
    }
    root.appendChild(fragment);
    childs = null;
    fragment = null;
    node = null;
}
//eg: appendHtml("<div><a>中华人民共和国</a></div>");

function appendCss(cssText){
  var style = document.createElement("style");
  style.type = "text/css";
  try{
      // firefox、safari、chrome和Opera
      style.appendChild(document.createTextNode(cssText));
  }catch(ex) {
      // IE早期的浏览器 ,需要使用style元素的stylesheet属性的cssText属性
      style.styleSheet.cssText = cssText;
  }
  document.getElementsByTagName("head")[0].appendChild(style);
}
//appendCss('a{color:red}');
