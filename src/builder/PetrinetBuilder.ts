import {PlaceInterface} from '../model/Place.interface'
import {Place} from '../model/Place'
import {TransitionInterface} from '../model/Transition.interface'
import {Transition} from '../model/Transition'
import { FactoryInterface } from '../model/Factory.interface'
import {NodeInterface} from '../model/Node.interface'
import {PetrinetInterface} from '../model/Petrinet.interface'

export class PetrinetBuilder {
  private places: PlaceInterface[] = []

  private transitions: TransitionInterface[] = []

  private factory: FactoryInterface

  constructor(factory: FactoryInterface) {
    this.factory = factory
  }

  place(): PlaceInterface {
    let place = this.factory.createPlace()
    this.places.push(place)
    return place
  }

  transition(): TransitionInterface {
    let transition = this.factory.createTransition()
    this.transitions.push(transition)
    return transition
  }

  connect(source: NodeInterface, target: NodeInterface, weight: number): this {
    let arc
    if (source instanceof Place && target instanceof Transition) {
      arc = this.factory.createInputArc()
      arc.setPlace(source)
      arc.setTransition(target)
    } else if (source instanceof Transition && target instanceof Place) {
      arc = this.factory.createOutputArc()
      arc.setPlace(target)
      arc.setTransition(source)
    } else {
      throw new Error('An arc must connect a place to a transition or vice-versa.')
    }

    arc.setWeight(weight)
    source.addOutputArc(arc)
    target.addInputArc(arc)

    return this
  }

  getPetrinet(): PetrinetInterface {
    let petrinet = this.factory.createPetrinet()
    petrinet.setPlaces(this.places)
    petrinet.setTransitions(this.transitions)

    return petrinet
  }
}
