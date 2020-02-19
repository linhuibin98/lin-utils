"use strict";
// 创建一个切片数组，去除array尾部的n个元素。（n默认值为1。）
exports.__esModule = true;
function dropRight(array, n) {
    if (n === void 0) { n = 1; }
    if (n < array.length) {
        return array.slice(0, array.length - n);
    }
    else {
        return [];
    }
}
exports["default"] = dropRight;
