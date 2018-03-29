import {NodeAbstract} from './Node.abstract'
import {PlaceInterface} from './Place.interface'
import {InputArcInterface} from './InputArc.interface'
import {OutputArcInterface} from './OutputArc.interface'

export class Place extends NodeAbstract implements PlaceInterface {
  addInputArc(arc: OutputArcInterface) {
    this.inputArcs.push(arc)
  }

  addOutputArc(arc: InputArcInterface) {
    this.outputArcs.push(arc)
  }
}
