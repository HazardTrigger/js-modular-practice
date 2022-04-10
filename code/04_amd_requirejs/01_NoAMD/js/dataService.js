// 非amd实现模块依赖，将函数挂载到window
(function (window) {
    let name = 'dataservice.js'
    function getName() {
        return name
    }
    window.dataService = {getName}
})(window)