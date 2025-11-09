<template>
<div>
  <h1>Dialog 组件示例</h1>
  
  <h2>组件调用方式</h2>
  <p class="demo-description">适合复杂内容、自定义UI、需要插槽的场景</p>
  <Demo :component="ComponentBasic" :sourceCode="componentBasicSource" />
  <Demo :component="ComponentCustom" :sourceCode="componentCustomSource" />
  <Demo :component="ComponentNoOverlay" :sourceCode="componentNoOverlaySource" />
  
  <h2>函数调用方式</h2>
  <p class="demo-description">适合简单提示、确认操作、工具函数调用的场景</p>
  <Demo :component="FunctionBasic" :sourceCode="functionBasicSource" />
  <Demo :component="FunctionCallback" :sourceCode="functionCallbackSource" />
</div>
</template>

<script lang="ts">
import ComponentBasic from './ComponentBasic.demo.vue'
import ComponentCustom from './ComponentCustom.demo.vue'
import ComponentNoOverlay from './ComponentNoOverlay.demo.vue'
import FunctionBasic from './FunctionBasic.demo.vue'
import FunctionCallback from './FunctionCallback.demo.vue'
import Demo from '../Demo.vue'

// 导入源代码
import componentBasicSource from './ComponentBasic.demo.vue?raw'
import componentCustomSource from './ComponentCustom.demo.vue?raw'
import componentNoOverlaySource from './ComponentNoOverlay.demo.vue?raw'
import functionBasicSource from './FunctionBasic.demo.vue?raw'
import functionCallbackSource from './FunctionCallback.demo.vue?raw'

export default {
  name: 'DialogDemo',
  components: {
    Demo
  },
  setup() {
    return {
      ComponentBasic,
      ComponentCustom,
      ComponentNoOverlay,
      FunctionBasic,
      FunctionCallback,
      componentBasicSource,
      componentCustomSource,
      componentNoOverlaySource,
      functionBasicSource,
      functionCallbackSource
    }
  }
}
</script>

<style scoped>
h2 {
  margin: 12px 0 16px 0;
  padding-bottom: 8px;
  border-bottom: 1px solid #ebedf0;
  color: #1f2f3d;
}


</style>