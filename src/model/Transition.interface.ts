import {InputArcInterface} from './InputArc.interface'
import {OutputArcInterface} from './OutputArc.interface'
import {NodeInterface} from './Node.interface'

export interface TransitionInterface extends NodeInterface {
  addInputArc(arc: InputArcInterface): void

  addOutputArc(arc: OutputArcInterface): void
}

