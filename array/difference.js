"use strict";
// 创建一个具有唯一array值的数组，每个值不包含在其他给定的数组中。
exports.__esModule = true;
/**
 * 即创建一个新数组，这个数组中的值，为第一个数字（array 参数）排除了给定数组中的值。）
 * 该方法使用 SameValueZero做相等比较。结果值的顺序是由第一个数组中的顺序确定
 */
//  实现思路, 遍历需要筛选的数组, 与其他数组比较是否存在
function difference(array) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    var exit = false;
    var result = array.filter(function (value) {
        rest.some(function (item) {
            exit = item.includes(value);
            return exit;
        });
        return !exit;
    });
    return result;
}
exports["default"] = difference;
