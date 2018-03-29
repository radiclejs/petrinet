import { ArcInterface } from './Arc.interface'
import { PlaceInterface } from './Place.interface'
import { TransitionInterface } from './Transition.interface'

export abstract class AbstractArc implements ArcInterface {
  protected id: number

  protected place: PlaceInterface

  protected transition: TransitionInterface

  protected weight: number

  getId(): number {
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
