// 深克隆一个对象

export default function cloneDeep(target: any): any{
  // 原始类型直接返回
  if (typeof target !== 'object' && typeof target !== 'function') {
    return target
  }
  // const result = Array.isArray(target) ? [] : {}
  const result = {}

  Object.keys(target).forEach(key => {
    if(result[key]){ return;}
    result[key] = target[key]
  })
  
  return result
}

let arr = [1, 2, { a: 3, b: 4 }]
let obj = {a: 1, b: {c: 2, d: 3}}

console.log(cloneDeep(obj))