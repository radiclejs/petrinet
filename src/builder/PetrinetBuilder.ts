import Place from '../model/Place'
import Transition from '../model/Transition'
import { Factory } from '../model/Factory'
import Node from '../model/Node.interface'

export class PetrinetBuilder {
  private places: Place[] = []

  private transitions: Transition[] = []

  private factory: Factory

  constructor(factory: Factory) {
    this.factory = factory
  }

  place() {
    let place = this.factory.createPlace()
    this.places.push(place)
    return place
  }

  transition() {
    let transition = this.factory.createTransition()
    this.transitions.push(transition)
    return transition
  }

  connect(source: Node, target: Node, weight: number) {
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

  getPetrinet() {
    let petrinet = this.factory.createPetrinet()
    petrinet.setPlaces(this.places)
    petrinet.setTransitions(this.transitions)

    return petrinet
  }
}
