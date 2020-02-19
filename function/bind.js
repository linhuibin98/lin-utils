"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var call_1 = require("./call");
// 实现bind
/*
  实现原理
  1. 返回一个新函数
  2. 利用call实现
  3. 区别是bind返回一个新函数,可以在调用bind时,先预设参数
*/
function bind(fn, obj) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    return function newFn() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return call_1["default"].apply(void 0, __spreadArrays([fn, obj], rest, args));
    };
}
exports["default"] = bind;
