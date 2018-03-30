import {PlaceMarkingInterface} from './PlaceMarking.interface'
import {PlaceInterface} from './Place.interface'
import {TokenInterface} from './Token.interface'
import * as uuid from 'uuid'

export class PlaceMarking implements PlaceMarkingInterface {
  constructor() {
    this.tokens = []
    this.id = 'placeMarking_' + uuid()
  }

  protected id: string

  protected place: PlaceInterface

  protected tokens: TokenInterface[]

  getId() {
    return this.id
  }

  addToken(token: TokenInterface) {
    this.tokens.push(token)
  }

  hasToken(token: TokenInterface): boolean {
    return this.tokens.includes(token)
  }

  removeToken(token: TokenInterface) {
    let index = this.tokens.indexOf(token)
    if (index > -1) {
      this.tokens.splice(index, 1)
    }
  }

  setTokens(tokens: TokenInterface[]) {
    this.tokens = tokens
  }

  getTokens(): TokenInterface[] {
    return this.tokens
  }

  setPlace(place: PlaceInterface) {
    this.place = place
  }

  getPlace(): PlaceInterface {
    return this.place
  }
}
