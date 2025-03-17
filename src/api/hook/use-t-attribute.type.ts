import {RvPath} from "rhine-var";

export type UseTAttribute = <T = any>(path?: string) => {
  sid: string,
  nid: string,
  state: T | null,
  set: (key: string | RvPath, value: any) => void,
  check: (key: string | RvPath) => void,
}
