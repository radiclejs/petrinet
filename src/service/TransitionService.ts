import {TransitionServiceInterface} from './TransitionService.interface'
import { Factory } from '../model/Factory'
import {Transition} from '../model/Transition'
import {Marking} from '../model/Marking'
import { TransitionNotEnabledException } from '../exceptions'

export class TransitionService implements TransitionServiceInterface {
  private factory: Factory

  constructor($factory: Factory) {
    this.factory = $factory
  }

  isEnabled($transition: Transition, $marking: Marking): boolean {
    let $inputArcs = $transition.getInputArcs()

    if (!$inputArcs.length) {
        return false
    }

    return $inputArcs.every(inputArc => {
      let place = inputArc.getPlace()
      let placeMarking = $marking.getPlaceMarking(place)

      if (!placeMarking) {
        return false
      }

      if (placeMarking.getTokens().length < inputArc.getWeight()) {
        return false
      }
    })
  }

  fire(transition: Transition, marking: Marking) {
    if (!this.isEnabled(transition, marking)) {
      throw new TransitionNotEnabledException()
    }

    let inputArcs = transition.getInputArcs()
    let outputArcs = transition.getOutputArcs()

    // 消费 input place 拥有的 tokens
    inputArcs.forEach(inputArc => {
      const weight = inputArc.getWeight()
      const place = inputArc.getPlace()
      let placeMarking = marking.getPlaceMarking(place)
      let tokens = placeMarking.getTokens()

      for (let i = 0; i < weight; i++) {
        placeMarking.removeToken(tokens[i])
      }
    })

    // 生产tokens 给到 output places
    outputArcs.forEach(outputArc => {
      const weight = outputArc.getWeight()
      const place = outputArc.getPlace()
      let placeMarking = marking.getPlaceMarking(place)

      if (placeMarking === null) {
        placeMarking = this.factory.createPlaceMarking()
        placeMarking.setPlace(place)
        marking.addPlaceMarking(placeMarking)
      }

      let tokens = []

      for (let i = 0; i < weight; i++) {
        tokens.push(this.factory.createToken())
      }

      placeMarking.setTokens(tokens)
    })
  }
}
