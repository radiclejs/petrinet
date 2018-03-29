import {PlaceMarking} from '../model/PlaceMarking'
import { Factory } from '../model/Factory'
import {Place} from '../model/Place'
import {Token} from '../model/Token'
import {Marking} from '../model/Marking';

export class MarkingBuilder {
  private placeMarkings: PlaceMarking[]

  private factory: Factory

  constructor(factory: Factory) {
    this.factory = factory
  }

  mark($place: Place, $tokens: Token[] | number | Token) {
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

  getMarking(): Marking {
    let marking = this.factory.createMarking()
    marking.setPlaceMarkings(this.placeMarkings)

    return marking
  }
}
