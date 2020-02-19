"use strict";
// 深克隆一个对象
exports.__esModule = true;
function cloneDeep(target) {
    // 原始类型直接返回
    if (typeof target !== 'object' && typeof target !== 'function') {
        return target;
    }
    // const result = Array.isArray(target) ? [] : {}
    var result = {};
    Object.keys(target).forEach(function (key) {
        if (result[key]) {
            return;
        }
        result[key] = target[key];
    });
    return result;
}
exports["default"] = cloneDeep;
