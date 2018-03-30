import {PetrinetInterface, MarkingInterface} from '../model'

export interface DumperInterface {
  dump(petrinet: PetrinetInterface, marking: MarkingInterface | null): void
}
