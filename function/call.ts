// 实现call

/*
  实现原理
  1. 利用对象方法中的this指向该对象
  2. 在目标对象设置一个属性指向该函数
  3. 传入参数,执行该函数, 可能有返回值
  4. 删除对象的属性
*/

export default function call(fn: any, obj: any, ...rest: any): any {
  // 在目标对象设置一个属性指向该函数
  obj._fn = fn
  // 传入参数,执行该函数, 可能有返回值
  let result = obj._fn(...rest)
  // 删除对象的属性
  delete obj._fn
  return result
}