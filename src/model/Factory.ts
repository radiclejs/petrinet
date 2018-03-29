import {FactoryInterface} from './Factory.interface'
import {Petrinet} from './Petrinet'
import {Place} from './Place'
import {Transition} from './Transition'
import {InputArc} from './InputArc'
import {OutputArc} from './OutputArc'
import {PlaceMarking} from './PlaceMarking'
import {Token} from './Token'
import {Marking} from './Marking'

export class Factory implements FactoryInterface {

  createPetrinet(): Petrinet {
    return new Petrinet()
  }

  createPlace(): Place {
    return new Place()
  }

  createTransition(): Transition {
    return new Transition()
  }

  createInputArc(): InputArc {
    return new InputArc()
  }

  createOutputArc(): OutputArc {
    return new OutputArc()
  }

  createPlaceMarking(): PlaceMarking {
    return new PlaceMarking()
  }

  createToken(): Token {
    return new Token()
  }

  createMarking(): Marking {
    return new Marking()
  }
}
