import {PlaceInterface} from './Place.interface'
import {TokenInterface} from './Token.interface'

export interface PlaceMarkingInterface {
  getId(): string

  getPlace(): PlaceInterface

  setPlace(place: PlaceInterface): void

  removeToken(token: TokenInterface): void

  getTokens(): TokenInterface[]

  setTokens(tokens: TokenInterface[]): void
}
