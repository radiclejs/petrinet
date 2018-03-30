import { Factory } from '../src/model/Factory'
import { PetrinetBuilder } from '../src/builder/PetrinetBuilder'
import { JsonDumper } from '../src/dumper/JsonDumper'
import {PetrinetInterface} from '../src/model/Petrinet.interface'
import { MarkingBuilder } from '../src/builder/MarkingBuilder'

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

function createMarking(petrinet: PetrinetInterface) {
  let $factory = new Factory()
  let $markingBuilder = new MarkingBuilder($factory)

  let p1 = petrinet.getPlaces()[0]
  let p2 = petrinet.getPlaces()[1]

  $markingBuilder.mark(p1, 3)
  $markingBuilder.mark(p2, 2)

  return $markingBuilder.getMarking()
}


// 创建流程结构
var petrinet = createPetrinet()

// 生成json数据文件
var dumper = new JsonDumper()
dumper.dump(petrinet, null)

// 创建流程实例
var marking = createMarking(petrinet)

// 运行流程实例
Object.assign(window, {
  petrinet,
  marking,
})



