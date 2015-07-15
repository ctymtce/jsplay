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

