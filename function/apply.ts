import call from './call'

// 实现apply

/*
  1.  利用call实现
  2. call和apply只有参数上不一样
*/

export default function apply(fn: any, obj: any, param: Array<any>): any {
  return call(fn, obj, ...param)
}
