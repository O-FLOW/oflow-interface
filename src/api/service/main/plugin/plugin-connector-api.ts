import BasePlugin from "../../../../plugin/base-plugin";
import { OfpApi } from "@/api/ofp-api";

export default interface PluginConnectorApi {

  load(plugin: BasePlugin): void

  getOfpApi(): OfpApi

}
