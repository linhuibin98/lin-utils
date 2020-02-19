// 防抖

export default function debounce(fn: () => any, delay: number) {
  let timer: number
  return (): void => {
    if (timer) window.clearTimeout(timer)
    timer = window.setTimeout(() => {
      fn()
    }, delay)
  }
}