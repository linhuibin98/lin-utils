"use strict";
// 实现call
exports.__esModule = true;
/*
  实现原理
  1. 利用这一特点，将函数作为对象的属性，由对象进行调用，即可改变函数this指向，这种被称为隐式绑定。
  2. 在目标对象设置一个属性指向该函数
  3. 传入参数,执行该函数, 可能有返回值
  4. 删除对象的属性
*/
function call(fn, obj) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    // 在目标对象设置一个属性指向该函数
    obj._fn = fn;
    // 传入参数,执行该函数, 可能有返回值
    var result = obj._fn.apply(obj, rest);
    // 删除对象的属性
    delete obj._fn;
    return result;
}
exports["default"] = call;
