import {FactoryInterface} from './Factory.interface'
import {Petrinet} from './Petrinet'
import { PetrinetInterface} from './Petrinet.interface'
import {Place} from './Place'
import {PlaceInterface} from './Place.interface'
import {Transition} from './Transition'
import {TransitionInterface} from './Transition.interface'
import {InputArc} from './InputArc'
import { InputArcInterface } from './InputArc.interface'
import {OutputArc} from './OutputArc'
import {OutputArcInterface} from './OutputArc.interface'
import {PlaceMarking} from './PlaceMarking'
import {PlaceMarkingInterface} from './PlaceMarking.interface'
import {Token} from './Token'
import {TokenInterface} from './Token.interface'
import {Marking} from './Marking'
import {MarkingInterface} from './Marking.interface'

export class Factory implements FactoryInterface {

  createPetrinet(): PetrinetInterface {
    return new Petrinet()
  }

  createPlace(): PlaceInterface {
    return new Place()
  }

  createTransition(): TransitionInterface {
    return new Transition()
  }

  createInputArc(): InputArcInterface {
    return new InputArc()
  }

  createOutputArc(): OutputArcInterface {
    return new OutputArc()
  }

  createPlaceMarking(): PlaceMarkingInterface {
    return new PlaceMarking()
  }

  createToken(): TokenInterface {
    return new Token()
  }

  createMarking(): MarkingInterface {
    return new Marking()
  }
}
