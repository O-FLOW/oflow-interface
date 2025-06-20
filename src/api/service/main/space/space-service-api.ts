import Page from '@/api/service/main/space/dto/page/page'
import { ScreenSize } from '@/api/service/main/space/dto/screen/screen-size.enum'
import Screen from '@/api/service/main/space/dto/screen/screen.interface'

export type StepChangeSubscriber = (
  sid: string,
  step: unknown,
  lastSid: string,
  lastStep: unknown,
) => void

export default interface SpaceServiceApi {
  page: Page

  screen: Screen

  subscribeStepChange(subscriber: StepChangeSubscriber): void

  unsubscribeStepChange(subscriber: StepChangeSubscriber): void

  isBoxMode(): boolean

  setScreenSize(size: ScreenSize): void
}
