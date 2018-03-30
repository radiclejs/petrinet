import {PlaceMarkingInterface} from '../model/PlaceMarking.interface'
import { FactoryInterface } from '../model/Factory.interface'
import {PlaceInterface} from '../model/Place.interface'
import {TokenInterface} from '../model/Token.interface'
import {Token} from '../model/Token'
import {MarkingInterface} from '../model/Marking.interface';

export class MarkingBuilder {
  private placeMarkings: PlaceMarkingInterface[]

  private factory: FactoryInterface

  constructor(factory: FactoryInterface) {
    this.factory = factory
  }

  mark($place: PlaceInterface, $tokens: TokenInterface[] | number | TokenInterface): this {
    let tokens = []
    if (Number.isInteger(Number($tokens))) {
      const tokensCount = $tokens

      for (let i = 0; i < tokensCount; i++) {
        tokens.push(this.factory.createToken())
      }
    } else if ($tokens instanceof Token) {
      tokens.push($tokens)
    } else if (Array.isArray($tokens)) {
      tokens = $tokens
    } else {
      throw new Error('The $tokens argument must be an array, integer or a Petrinet\Model\TokenInterface instance.')
    }

    let placeMarking = this.factory.createPlaceMarking()
    placeMarking.setPlace($place)
    placeMarking.setTokens(tokens)

    this.placeMarkings.push(placeMarking)

    return this
  }

  getMarking(): MarkingInterface {
    let marking = this.factory.createMarking()
    marking.setPlaceMarkings(this.placeMarkings)

    return marking
  }
}
