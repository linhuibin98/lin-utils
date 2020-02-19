// 节流
export default function throttle(fn: () => any, delay: number) {
  let lastTime = 0
  return (): void => {
    let currentTime = new Date().getTime()
    if (currentTime - lastTime > delay) {
      fn()
      lastTime = currentTime
    }
  }
}