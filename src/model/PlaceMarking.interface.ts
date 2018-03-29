import {PlaceInterface} from './Place.interface'
import {TokenInterface} from './Token.interface'

export interface PlaceMarkingInterface {
  getId(): number

  getPlace(): PlaceInterface

  setPlace(place: PlaceInterface)

  removeToken(token: TokenInterface)

  getTokens(): TokenInterface[]

  setTokens(tokens: TokenInterface[])
}
