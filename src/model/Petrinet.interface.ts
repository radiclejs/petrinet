import {TransitionInterface} from './Transition.interface'
import {PlaceInterface} from './Place.interface'

export interface PetrinetInterface {
  getId(): string

  getTransitions(): TransitionInterface[]

  setTransitions(transitions: TransitionInterface[]): void

  getPlaces(): PlaceInterface[]

  setPlaces(places: PlaceInterface[]): void
}
