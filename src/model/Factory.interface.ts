import {PetrinetInterface} from './Petrinet.interface'
import {PlaceInterface} from './Place.interface'
import {TransitionInterface} from './Transition.interface'
import {InputArcInterface} from './InputArc.interface'
import {OutputArcInterface} from './OutputArc.interface'
import {PlaceMarkingInterface} from './PlaceMarking.interface'
import {TokenInterface} from './Token.interface'
import {MarkingInterface} from './Marking.interface'

export interface FactoryInterface {
  createPetrinet(): PetrinetInterface
  createPlace(): PlaceInterface
  createTransition(): TransitionInterface
  createInputArc(): InputArcInterface
  createOutputArc(): OutputArcInterface
  createPlaceMarking(): PlaceMarkingInterface
  createToken(): TokenInterface
  createMarking(): MarkingInterface
}
