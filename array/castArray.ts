// castArray 非数组转换为数组
function castArray(value: any): any[] {
  if (value instanceof Array) {
    return value
  } else {
    return [value]
  }
}

export default castArray