import NumberUtils from "./number-utils";

export default class MathUtils {
  static toDegrees(angle: number) {
    return angle * (180 / Math.PI)
  }

  static toRadians(angle: number) {
    return angle * (Math.PI / 180)
  }

  static approximatelyEqual(n1: number, n2: number, bias: number = 1e-6) {
    return Math.abs(n1 - n2) < bias
  }

  static getDistance(x1: number, y1: number, x2: number, y2: number): number {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
  }

  static getDistance3d(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): number {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) + Math.pow(z2 - z1, 2))
  }

  static getNearestNumberIndex(x: number, list: number[]) {
    let min = Infinity
    let index = -1
    for (let i = 0; i < list.length; i++) {
      let distance = Math.abs(x - list[i])
      if (distance < min) {
        min = distance
        index = i
      }
    }
    return index
  }
}
