//替换所有换行符
function replaceEnter(str){
    return str.replace(/(\n|\r|(\r\n)|(\u0085)|(\u2028)|(\u2029))/g, '');
}

