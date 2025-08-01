import { AbstractMesh, NodeMaterial, PBRMaterial } from '@babylonjs/core'
import { RvPath } from 'rhine-var'

import { RvMaterialNodeInput } from '@/api/service/sync/interface/step/attributes/material/node/rv-material-node.interface'
import RvMaterial from '@/api/service/sync/interface/step/attributes/material/rv-material.interface'

export default interface RsMaterialServiceApi {
  updateMaterial(
    nid: string,
    mesh: AbstractMesh,
    path: string[] | RvPath,
    value: unknown,
    rvMaterial: RvMaterial,
  ): void

  updateGeneralMaterialSingle(mesh: AbstractMesh, path: RvPath, value: unknown): void

  updatePBRMaterialSingle(
    mesh: AbstractMesh,
    material: PBRMaterial,
    path: RvPath,
    value: unknown,
  ): void

  updateNodeMaterialSingle(
    material: NodeMaterial,
    path: RvPath,
    value: unknown,
    inputs: RvMaterialNodeInput[],
  ): void
}
