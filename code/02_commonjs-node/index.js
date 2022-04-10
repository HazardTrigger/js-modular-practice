// 导入模块，每个js文件是一个模块，导入时不加.js后缀
let module1 = require('./modules/module1')
let module2 = require('./modules/module2')
let module3 = require('./modules/module3')
let uniq = require('uniq')

module1.foo()
module2()
module3.foo()
console.log(uniq(module3.arr))