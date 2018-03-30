export class PlaceMarkingNotFoundException extends Error {
  constructor() {
    super()
    this.message = 'place marking not found'
  }
}
