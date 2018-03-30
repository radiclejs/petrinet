import {MarkingInterface} from './Marking.interface'
import {PlaceMarkingInterface} from './PlaceMarking.interface'
import {PlaceInterface} from './Place.interface'
import * as uuid from 'uuid'

export class Marking implements MarkingInterface {
  constructor() {
    this.placeMarkings = []
    this.id = 'marking_' + uuid()
  }

  id: string

  placeMarkings: PlaceMarkingInterface[]

  getId(): string {
    return this.id
  }

  getPlaceMarking(place: PlaceInterface): PlaceMarkingInterface | null {
    let placeMarkings = this.placeMarkings.filter(placeMarking => placeMarking.getPlace() === place)

    return placeMarkings.length ? placeMarkings[0] : null
  }

  addPlaceMarking(placeMarking: PlaceMarkingInterface) {
    if (this.placeMarkings.includes(placeMarking)) {
      throw new Error('Cannot add two placeMarkings for the same place.')
    }

    this.placeMarkings.push(placeMarking)
  }

  setPlaceMarkings(placeMarkings: PlaceMarkingInterface[]) {
    this.placeMarkings = placeMarkings
  }

  removePlaceMarking(placeMarking: PlaceMarkingInterface) {
    let index = this.placeMarkings.indexOf(placeMarking)
    if (index > -1) {
      this.placeMarkings.splice(index, 1)
    }
  }

  getPlaceMarkings(): PlaceMarkingInterface[] {
    return this.placeMarkings
  }
}
