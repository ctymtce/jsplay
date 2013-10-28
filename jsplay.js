//替换所有换行符
function replaceEnter(str){
    return str.replace(/(\n|\r|(\r\n)|(\u0085)|(\u2028)|(\u2029))/g, '');
}


//tr实现slideUp用jqery 
tr.find('td').animate({'paddingTop':0,'paddingBottom':0,height:0}).wrapInner('<div style="display: block;" />') .parent().find('td > div').slideUp(500, function(){
    //$(this).parent().parent().remove(); 
    tr.remove();});
