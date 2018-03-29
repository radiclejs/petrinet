import {PlaceInterface} from './Place.interface'
import {PlaceMarkingInterface} from './PlaceMarking.interface'

export interface MarkingInterface {
  getId(): number

  getPlaceMarking(place: PlaceInterface)

  addPlaceMarking(placeMarking: PlaceMarkingInterface)

  setPlaceMarkings(placeMarkings: PlaceMarkingInterface[])
}
