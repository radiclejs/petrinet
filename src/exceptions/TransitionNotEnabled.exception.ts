export class TransitionNotEnabledException extends Error {
  constructor(...args) {
    super(...args)
    this.message = 'transition not enabled'
  }
}
