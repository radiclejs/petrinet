import { DumperInterface } from './Dumper.interface'
import {PetrinetInterface, MarkingInterface, NodeInterface} from '../model'
import * as jsonfile from 'jsonfile'

export class JsonDumper implements DumperInterface {
  // 连线数据
  getArcData(arc) {
    return {
      id: arc.getId(),
      placeId: arc.getPlace().getId(),
      transitionId: arc.getTransition().getId()
    }
  }

  // 单个节点数据
  getNodeData(node: NodeInterface) {
    let inputArcs = []
    let outputArcs = []

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
  getNodesData(nodes: NodeInterface[]) {
    return nodes.map(node => {
      return this.getNodeData(node)
    })
  }

  toJSON(petrinet: PetrinetInterface): string {
    let data = {
      places: [],
      transitions: []
    }

    data.places = this.getNodesData(petrinet.getPlaces())
    data.transitions = this.getNodesData(petrinet.getTransitions())

    return JSON.stringify(data)
  }

  dump(petrinet: PetrinetInterface, marking: MarkingInterface = null) {
    console.log(marking)
    const jsonString = this.toJSON(petrinet)
    jsonfile.writeFileSync('./petrinet.json', JSON.parse(jsonString), {spaces: 2})
  }
}
