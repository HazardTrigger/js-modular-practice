// 引入定义好的模块，自定义模块需要带上.js文件尾缀，npm下载的包不需要
import {foo, bar, arr} from './module1.js'
import {fun, fun2} from './module2.js'
import module3 from './module3.js'
import $ from 'jquery'

foo()
bar()
fun()
fun2()
module3()
console.log("arr", arr)
$('body').css('background', 'red')