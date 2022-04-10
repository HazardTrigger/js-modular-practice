// 在立即执行函数中添加已经挂载的模块并在新的模块调用
(function (window, dataService) {
    let msg = 'alerter.js'
    function showMsg() {
        console.log(msg, dataService.getName())
    }
    window.alerter = {showMsg}
})(window, dataService)