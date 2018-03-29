import {NodeAbstract} from './Node.abstract'
import {TransitionInterface} from './Transition.interface'
import {InputArcInterface} from './InputArc.interface'
import {OutputArcInterface} from './OutputArc.interface'

export class Transition extends NodeAbstract implements TransitionInterface {
  addInputArc(arc: InputArcInterface) {
    this.inputArcs.push(arc)
  }

  addOutputArc(arc: OutputArcInterface) {
    this.outputArcs.push(arc)
  }
}
