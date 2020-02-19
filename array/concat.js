"use strict";
// concat
// 创建一个新数组，将array与任何数组 或 值连接在一起。
exports.__esModule = true;
var castArray_1 = require("./castArray");
var copyArray_1 = require("./copyArray");
function concat() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    var length = rest.length;
    var array = castArray_1["default"](rest[0]);
    if (length < 2) {
        return length ? copyArray_1["default"](array) : [];
    }
    for (var i = 1; i < length; i++) {
        var value = rest[i];
        if (value instanceof Array) {
            for (var j = 0; j < value.length; j++) {
                array.push(value[j]);
            }
        }
        else {
            array.push(value);
        }
    }
    return array;
}
exports["default"] = concat;
