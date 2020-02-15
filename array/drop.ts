// 创建一个切片数组，去除array前面的n个元素。（n默认值为1。）

export default function drop(array: Array<any>, n: number = 1): Array<any> {
  return array.slice(n)
} 