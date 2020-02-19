// 深克隆一个对象

export default function cloneDeep(target: any): any{
  // 原始类型直接返回
  if (typeof target !== 'object' && typeof target !== 'function') {
    return target
  }
  // const result = Array.isArray(target) ? [] : {}
  const result: any = {}

  Object.keys(target).forEach(key => {
    if(result[key]){ return;}
    result[key] = target[key]
  })
  
  return result
}