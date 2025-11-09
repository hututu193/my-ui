<!-- 在 SwitchDemo 容器组件中 -->
<template>
<div>
  <h1>Switch 组件示例</h1>
  <Demo 
    :component="Switch1Demo" 
    :sourceCode="switch1Source" 
  />
  <Demo 
    :component="Switch2Demo" 
    :sourceCode="switch2Source" 
  />
</div>
</template>

<script lang="ts">
import Switch1Demo from './Switch1.demo.vue'
import Switch2Demo from './Switch2.demo.vue'
import Demo from '../Demo.vue'
// 导入原始文件内容
import switch1Source from './Switch1.demo.vue?raw'
import switch2Source from './Switch2.demo.vue?raw'

export default {
  name: 'SwitchDemo',
  components: {
    Demo
  },
  setup() {
    return {
      Switch1Demo,
      Switch2Demo,
      switch1Source,
      switch2Source
    }
  }
}
</script>
