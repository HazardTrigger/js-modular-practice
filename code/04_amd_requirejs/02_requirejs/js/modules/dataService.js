// 使用amd规范定义模块
define(function () {
    let name = 'dataService.js'
    function getName() {
        return name
    }

    return {getName}
})