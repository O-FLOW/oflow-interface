import {StoredRhineVar, RvPath} from "rhine-var";
import RvStep from "../../sync/interface/step/rv-step.interface";
import {TSubscriber} from "@/api/service/target/dto/t-subscriber.type";

export default interface TStepServiceApi {

  state: StoredRhineVar<RvStep>

  subscribe(subscriber: TSubscriber): () => void

  unsubscribe(subscriber: TSubscriber): void

  set<T>(path: string | RvPath, value: any): void

  get<T>(path: string | RvPath): T

}
