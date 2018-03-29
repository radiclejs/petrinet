import {Petrinet, Marking} from '../model'

export interface DumperInterface {
  dump(petrinet: Petrinet, marking: Marking)
}
