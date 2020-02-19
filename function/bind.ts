import call from './call'

// 实现bind

/*
  实现原理
  1. 返回一个新函数
  2. 利用call实现
  3. 区别是bind返回一个新函数,可以在调用bind时,先预设参数
*/

export default function bind(fn: any, obj: any, ...rest: any): any {
  return function newFn(...args: any): any {
    return call(fn, obj, ...rest, ...args)
  }
}