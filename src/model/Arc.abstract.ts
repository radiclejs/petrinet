import { ArcInterface } from './Arc.interface'
import { PlaceInterface } from './Place.interface'
import { TransitionInterface } from './Transition.interface'
import * as uuid from 'uuid'

export abstract class AbstractArc implements ArcInterface {
  protected id: string

  protected place: PlaceInterface

  protected transition: TransitionInterface

  protected weight: number

  constructor() {
    this.id = 'arc_' + uuid()
  }

  getId(): string {
    return this.id
  }

  setPlace(place: PlaceInterface) {
    this.place = place
  }

  getPlace(): PlaceInterface {
    return this.place
  }

  setTransition(transition: TransitionInterface) {
    this.transition = transition
  }

  getTransition(): TransitionInterface {
    return this.transition
  }

  setWeight(weight: number) {
    if (weight < 0) {
      throw new Error('The weight must be a positive integer.')
    }

    this.weight = weight
  }

  getWeight(): number {
    return this.weight
  }
}
