// 使用amd规范定义模块，同时引入一个依赖模块
define(['dataService'], function(dataService) {
    let msg = 'alerter.js'
    function showMsg() {
        console.log(msg, dataService.getName())
    }
    return {showMsg}
})