"use strict";
// 创建一个切片数组，去除array前面的n个元素。（n默认值为1。）
exports.__esModule = true;
function drop(array, n) {
    if (n === void 0) { n = 1; }
    return array.slice(n);
}
exports["default"] = drop;
