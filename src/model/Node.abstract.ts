import {InputArcInterface} from './InputArc.interface'
import {OutputArcInterface} from './OutputArc.interface'

export abstract class NodeAbstract {
  protected id: number

  protected inputArcs: InputArcInterface[]

  protected outputArcs: OutputArcInterface[]

  getId(): number {
    return this.id
  }

  hasInputArc(inputArc: InputArcInterface): boolean {
    return this.inputArcs.includes(inputArc)
  }

  removeInputArc(inputArc: InputArcInterface) {
    let index = this.inputArcs.indexOf(inputArc)
    if (index > -1) {
      this.inputArcs.splice(index, 1)
    }
  }

  getInputArcs(): InputArcInterface[] {
    return this.inputArcs
  }

  hasOutputArc(outputArc: OutputArcInterface): boolean {
    return this.outputArcs.includes(outputArc)
  }

  removeOutputArc(outputArc: OutputArcInterface) {
    let index = this.outputArcs.indexOf(outputArc)
    if (index > -1) {
      this.outputArcs.splice(index, 1)
    }
  }

  getOutputArcs(): OutputArcInterface[] {
    return this.outputArcs
  }
}
