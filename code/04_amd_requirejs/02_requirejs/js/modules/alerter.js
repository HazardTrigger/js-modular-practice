define(['dataService'], function(dataService) {
    let msg = 'alerter.js'
    function showMsg() {
        console.log(msg, dataService.getName())
    }
    return {showMsg}
})