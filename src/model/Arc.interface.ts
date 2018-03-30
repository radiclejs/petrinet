import {PlaceInterface} from './Place.interface'
import {TransitionInterface} from './Transition.interface'

export interface ArcInterface {

  getId(): string

  setPlace(place: PlaceInterface): void

  getPlace(): PlaceInterface

  setTransition(transition: TransitionInterface): void

  getTransition(): TransitionInterface

  setWeight(weight: number): void

  getWeight(): number
}
