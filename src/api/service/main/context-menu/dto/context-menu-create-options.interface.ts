import {MenuLineCreateOptions} from "@/api/service/main/context-menu/dto/menu-line-create-options.interface";
import {ThemeColor} from "@/api/service/main/space/dto/theme/theme-color";

export interface ContextMenuCreateOptions {
  id?: string, // 菜单唯一id
  lines?: MenuLineCreateOptions[]  // 菜单内容
  x?: number,  // 菜单所在x轴
  y?: number,  // 菜单所在y轴
  closeOnOutsideClick?: boolean,  // 点击外部后关闭 默认为 false
  theme?: ThemeColor,

  onClose?: () => void,
}