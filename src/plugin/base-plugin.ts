import {PluginType} from "./dto/plugin-type.enum";
import {ThemeColor} from "@/api/service/main/theme/dto/theme-color.enum";

export default interface BasePlugin {
  id: string  // 插件 ID
  name: string  // 插件项目名
  version: string
  description: string
  
  type: PluginType
  theme: ThemeColor

  loadApi?: () => void

  data?: any

  onInstall?: () => Promise<void>
  onEnable?: () => Promise<void>
  onDisable?: () => Promise<void>
  onUninstall?: () => Promise<void>
}

