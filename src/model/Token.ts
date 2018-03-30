import {TokenInterface} from './Token.interface'
import * as uuid from 'uuid'

export class Token implements TokenInterface {
  protected id: string

  constructor() {
    this.id = 'token_' + uuid()
  }

  getId(): string {
    return this.id
  }
}
