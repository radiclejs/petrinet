import {InputArcInterface} from './InputArc.interface'
import {OutputArcInterface} from './OutputArc.interface'

export interface NodeInterface {

  getId(): number

  getInputArcs(): InputArcInterface[]

  getOutputArcs(): OutputArcInterface[]
}
