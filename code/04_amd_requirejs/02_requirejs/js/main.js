// 配置模块路径，require模块并使用相关函数
(function () {
    requirejs.config({
        baseUrl: 'js/', // 模块根目录
        paths: {
           dataService: './modules/dataService', // 模块路径
           alerter: './modules/alerter'
        }
    })
    requirejs(['alerter'], function (alerter) { // require alerter模块
        alerter.showMsg()
    })
})()