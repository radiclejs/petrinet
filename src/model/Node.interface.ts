import {InputArcInterface} from './InputArc.interface'
import {OutputArcInterface} from './OutputArc.interface'

export interface NodeInterface {

  getId(): string

  getInputArcs(): InputArcInterface[]

  getOutputArcs(): OutputArcInterface[]
}
