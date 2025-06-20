import { Color3 } from '@babylonjs/core'

export default interface LightAnimationApi {
  play(
    data: { intensity?: number; diffuseColor?: string; specularColor?: string },
    duration?: number,
    quickMode?: boolean,
  ): void

  intensity(value: number, duration?: number, quickMode?: boolean): void

  diffuseColor(color: Color3 | string, duration?: number, quickMode?: boolean): void

  specularColor(color: Color3 | string, duration?: number, quickMode?: boolean): void
}
