"use strict";

var _module = require("./module1.js");

var _module2 = require("./module2.js");

var _module3 = _interopRequireDefault(require("./module3.js"));

var _jquery = _interopRequireDefault(require("jquery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _module.foo)();
(0, _module.bar)();
(0, _module2.fun)();
(0, _module2.fun2)();
(0, _module3["default"])();
console.log("arr", _module.arr);
(0, _jquery["default"])('body').css('background', 'red');