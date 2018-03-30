import {PlaceInterface} from './Place.interface'
import {TransitionInterface} from './Transition.interface'

export interface ArcInterface {

  getId(): string

  setPlace(place: PlaceInterface)

  getPlace(): PlaceInterface

  setTransition(transition: TransitionInterface)

  getTransition(): TransitionInterface

  setWeight(weight: number)

  getWeight(): number
}
