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
// 实现apply
/*
  1.  利用call实现
  2. call和apply只有参数上不一样
*/
function apply(fn, obj, param) {
    return call_1["default"].apply(void 0, __spreadArrays([fn, obj], param));
}
exports["default"] = apply;
