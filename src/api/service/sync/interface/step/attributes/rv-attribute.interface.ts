import RvLocation from "@/api/service/sync/interface/step/attributes/location/rv-location.interface";
import {RvMaterial} from "@/api/service/sync/interface/step/attributes/material/rv-material.interface";

export default interface RvAttribute {
  location?: RvLocation
  material?: RvMaterial
}
