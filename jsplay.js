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
