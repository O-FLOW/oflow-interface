export default function throttle<T extends (...args: any[]) => void>(func: T, wait: number): T {
  if (wait === 0) {
    return func
  }

  let lastArgs: Parameters<T> | undefined,
    lastExec = 0,
    lastThis: any,
    timeout: ReturnType<typeof setTimeout> | null = null

  function execute() {
    lastExec = Date.now()
    func.apply(lastThis, lastArgs!)
  }

  const throttled = function (this: any, ...args: Parameters<T>) {
    const now = Date.now(),
      elapsed = now - lastExec

    lastArgs = args
    lastThis = this // eslint-disable-line @typescript-eslint/no-this-alias

    if (lastExec === 0) {
      setTimeout(execute, 1)
      return
    }

    if (timeout) {
      clearTimeout(timeout)
      timeout = null
    }

    if (elapsed < wait) {
      timeout = setTimeout(() => {
        execute()
        timeout = null
      }, wait - elapsed)
    } else {
      execute()
    }
  } as T

  return throttled
}
