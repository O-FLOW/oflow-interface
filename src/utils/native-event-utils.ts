import MathUtils from "./math-utils";

export default class NativeEventUtils {
  static getEventPosition(e: MouseEvent | TouchEvent | any): [x: number, y: number] {
    if (e.type && e.type.includes('touch')) {
      if (e.touches.length) {
        let x = e.touches[0].clientX;
        let y = e.touches[0].clientY;
        return [x, y]
      } else {
        let x = e.changedTouches[0].clientX;
        let y = e.changedTouches[0].clientY;
        return [x, y]
      }
    } else {
      return [e.clientX, e.clientY]
    }
  }

  static getDistanceBetweenEvents(e1: MouseEvent | TouchEvent, e2: MouseEvent | TouchEvent): number {
    let [x1, y1] = NativeEventUtils.getEventPosition(e1)
    let [x2, y2] = NativeEventUtils.getEventPosition(e2)
    return MathUtils.getDistance(x1, y1, x2, y2);
  }

  static preventDefaultListener(e: MouseEvent | TouchEvent | any) {
    e.preventDefault()
  }

  static stopPropagationListener(e: MouseEvent | TouchEvent | any) {
    e.stopPropagation()
  }

  static stopImmediatePropagationListener(e: MouseEvent | TouchEvent | any) {
    e.stopImmediatePropagation()
  }

  static preventDefaultStopPropagationListener(e: MouseEvent | TouchEvent | any) {
    e.preventDefault()
    e.stopPropagation()
  }
}
