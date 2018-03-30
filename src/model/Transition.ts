import {NodeAbstract} from './Node.abstract'
import {TransitionInterface} from './Transition.interface'
import {InputArcInterface} from './InputArc.interface'
import {OutputArcInterface} from './OutputArc.interface'
import * as uuid from 'uuid'

export class Transition extends NodeAbstract implements TransitionInterface {
  constructor() {
    super()
    this.id = 'transition_' + uuid()
  }

  addInputArc(arc: InputArcInterface) {
    this.inputArcs.push(arc)
  }

  addOutputArc(arc: OutputArcInterface) {
    this.outputArcs.push(arc)
  }
}
