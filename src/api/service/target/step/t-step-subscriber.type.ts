import { RvPath } from "rhine-var";
import { TChangeType } from "../dto/t-change-type.enum";

export type TStepSubscriber = (
  type: TChangeType,
  path: RvPath,
  value: any,
  oldValue: any,
) => void
