import {PlaceInterface} from './Place.interface'
import {PlaceMarkingInterface} from './PlaceMarking.interface'

export interface MarkingInterface {
  getId(): string

  getPlaceMarking(place: PlaceInterface): PlaceMarkingInterface | null

  addPlaceMarking(placeMarking: PlaceMarkingInterface): void

  setPlaceMarkings(placeMarkings: PlaceMarkingInterface[]): void
}
