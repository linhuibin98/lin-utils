// 创建一个切片数组，去除array尾部的n个元素。（n默认值为1。）

export default function dropRight(array: Array<any>, n: number = 1): Array<any> {
  
  if (n < array.length) {
    return array.slice(0, array.length - n)
  } else {
    return []
  }
}