import {TransitionInterface} from '../model/Transition.interface'
import {MarkingInterface} from '../model/Marking.interface'

export interface TransitionServiceInterface {
  isEnabled(transition: TransitionInterface, marking: MarkingInterface): boolean

  fire(transition: TransitionInterface, marking: MarkingInterface): void
}
