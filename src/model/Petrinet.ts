import {PetrinetInterface} from './Petrinet.interface'
import {PlaceInterface} from './Place.interface'
import {TransitionInterface} from './Transition.interface'
import * as uuid from 'uuid'

export class Petrinet implements PetrinetInterface {

  protected id: string

  protected places: PlaceInterface[]

  protected transitions: TransitionInterface[]

  constructor() {
    this.places = []
    this.transitions = []
    this.id = 'petrinet_' + uuid()
  }

  getId(): string {
    return this.id
  }

  addPlace(place: PlaceInterface) {
    this.places.push(place)
  }

  hasPlace(place: PlaceInterface): boolean {
    return this.places.includes(place)
  }

  removePlace(place: PlaceInterface) {
    this.places = this.places.filter(curPlace => {
      return curPlace.getId() === place.getId()
    })
  }

  setPlaces(places: PlaceInterface[]) {
    this.places = places
  }

  getPlaces(): PlaceInterface[] {
    return this.places
  }

  addTransition(transition: TransitionInterface) {
    this.transitions.push(transition)
  }

  hasTransition(transition: TransitionInterface): boolean {
    return this.transitions.includes(transition)
  }

  removeTransition(transition: TransitionInterface) {
    this.transitions = this.transitions.filter(curTransition => {
      return curTransition.getId() === transition.getId()
    })
  }

  setTransitions(transitions: TransitionInterface[]) {
    this.transitions = transitions
  }

  getTransitions(): TransitionInterface[] {
    return this.transitions
  }
}
