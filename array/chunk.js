"use strict";
// 将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。
exports.__esModule = true;
/**
 * 参数
 * array (Array): 需要处理的数组
 * [size=1] (number): 每个数组区块的长度
 * 返回
 * (Array): 返回一个包含拆分区块的新数组（相当于一个二维数组）。
 */
function chunk(array, size) {
    if (size === void 0) { size = 1; }
    var result = [];
    var index = size;
    var middle = array.slice(0, index);
    while (middle.length) {
        result.push(middle);
        middle = array.slice(index, index + size);
        index = index + size;
    }
    return result;
}
exports["default"] = chunk;
