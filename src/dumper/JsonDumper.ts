import { DumperInterface } from './Dumper.interface'
import {PetrinetInterface, MarkingInterface, NodeInterface, ArcInterface} from '../model'
import * as jsonfile from 'jsonfile'

interface ArcSchema {
  id: string
  placeId: string
  transitionId: string
}

interface NodeSchema {
  id: string
  inputArcs: ArcSchema[]
  outputArcs: ArcSchema[]
}

interface PetrinetSchema {
  id: string
  places: NodeSchema[]
  transitions: NodeSchema[]
}

export class JsonDumper implements DumperInterface {
  // 连线数据
  getArcData(arc: ArcInterface): ArcSchema {
    return {
      id: arc.getId(),
      placeId: arc.getPlace().getId(),
      transitionId: arc.getTransition().getId()
    }
  }

  // 单个节点数据
  getNodeData(node: NodeInterface): NodeSchema {
    let inputArcs: ArcSchema[] = []
    let outputArcs: ArcSchema[] = []

    node.getInputArcs().forEach(arc => {
      inputArcs.push(this.getArcData(arc))
    })

    node.getOutputArcs().forEach(arc => {
      outputArcs.push(this.getArcData(arc))
    })

    return {
      id: node.getId(),
      inputArcs,
      outputArcs
    }
  }

  // 一类节点的数据
  getNodesData(nodes: NodeInterface[]): NodeSchema[] {
    return nodes.map(node => {
      return this.getNodeData(node)
    })
  }

  toJSON(petrinet: PetrinetInterface): string {
    let data: PetrinetSchema = {
      id: petrinet.getId(),
      places: [],
      transitions: []
    }

    data.places = this.getNodesData(petrinet.getPlaces())
    data.transitions = this.getNodesData(petrinet.getTransitions())

    return JSON.stringify(data)
  }

  dump(petrinet: PetrinetInterface, marking: MarkingInterface | null): void {
    console.log(marking)
    const jsonString = this.toJSON(petrinet)
    jsonfile.writeFileSync('./petrinet.json', JSON.parse(jsonString), {spaces: 2})
  }
}
