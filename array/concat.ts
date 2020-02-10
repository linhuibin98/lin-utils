// concat
// 创建一个新数组，将array与任何数组 或 值连接在一起。

import castArray from './castArray'
import copyArray from './copyArray'

function concat(...rest: any[]): any[] {
  let length: number = rest.length
  let array: any[] = castArray(rest[0])

  if (length < 2) {
    return length ? copyArray(array) : []
  }

  for(let i = 1; i < length; i++) {
    let value = rest[i]
    if (value instanceof Array) {
      for (let j = 0; j < value.length; j++) {
        array.push(value[j])
      }
    } else {
      array.push(value)
    }
  }

  return array
}

export default concat