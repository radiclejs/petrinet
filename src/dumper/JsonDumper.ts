import { DumperInterface } from './Dumper.interface'
import {Petrinet, Marking} from '../model'

export class JsonDumper implements DumperInterface {
  dump(petrinet: Petrinet, marking: Marking = null) {}
}
