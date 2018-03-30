import { Factory } from '../src/model/Factory'
import { PetrinetBuilder } from '../src/builder/PetrinetBuilder'
import { JsonDumper } from '../src/dumper/JsonDumper'
import {PetrinetInterface} from '../src/model/Petrinet.interface'

function createPetrinet(): PetrinetInterface {
  let $factory = new Factory()
  let $builder = new PetrinetBuilder($factory)

  let p1 = $builder.place()
  let p2 = $builder.place()
  let p3 = $builder.place()
  let p4 = $builder.place()

  let t1 = $builder.transition()
  let t2 = $builder.transition()

  $builder.connect(p1, t1, 1)
  $builder.connect(t1, p2, 1)
  $builder.connect(t1, p3, 1)
  $builder.connect(p2, t2, 1)
  $builder.connect(p3, t2, 1)
  $builder.connect(t2, p4, 1)

  return $builder.getPetrinet()
}

// function createPetrinetInstance(petrinet: PetrinetInterface) {
//   console.log(petrinet)
// }


// 创建流程结构
const PetrinetStructure = createPetrinet()

// 创建流程实例
// const petrinetInstance = createPetrinetInstance(PetrinetStructure)

// 运行流程实例


const dumper = new JsonDumper()

// 生成json数据文件
dumper.dump(PetrinetStructure)
