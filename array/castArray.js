"use strict";
exports.__esModule = true;
// castArray 非数组转换为数组
function castArray(value) {
    if (value instanceof Array) {
        return value;
    }
    else {
        return [value];
    }
}
exports["default"] = castArray;
