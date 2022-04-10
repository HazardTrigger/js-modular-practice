(function () {
    requirejs.config({
        baseUrl: 'js/',
        paths: {
           dataService: './modules/dataService',
           alerter: './modules/alerter'
        }
    })
    requirejs(['alerter'], function (alerter) {
        alerter.showMsg()
    })
})()