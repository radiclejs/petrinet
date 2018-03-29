import {TokenInterface} from './Token.interface'

export class Token implements TokenInterface {
  protected id: number

  getId(): number {
    return this.id
  }
}
