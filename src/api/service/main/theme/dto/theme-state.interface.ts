import { ThemeBackground } from '@/api/service/main/theme/dto/theme-background.enum'
import { ThemeColor } from '@/api/service/main/theme/dto/theme-color.enum'
import { ThemeShape } from '@/api/service/main/theme/dto/theme-shape.enum'

export default interface ThemeState {
  background: ThemeBackground
  color: ThemeColor
  shape: ThemeShape
}
