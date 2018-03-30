export class TransitionNotEnabledException extends Error {
  constructor() {
    super()
    this.message = 'transition not enabled'
  }
}
