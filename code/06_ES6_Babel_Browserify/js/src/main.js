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