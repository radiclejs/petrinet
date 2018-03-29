import {InputArcInterface} from './InputArc.interface'
import {OutputArcInterface} from './OutputArc.interface'
import {NodeInterface} from './Node.interface'

export interface PlaceInterface extends NodeInterface {
  addInputArc(arc: OutputArcInterface)

  addOutputArc(arc: InputArcInterface)
}
