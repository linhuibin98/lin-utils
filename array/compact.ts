// 创建一个新数组，包含原数组中所有的非假值元素。例如false, null, 0, "", undefined, 和 NaN 都是被认为是“假值”。

function compact(array: any[]): any[] {
  const result= []

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element) {
      result.push(element)
    }
  }

  return result
}