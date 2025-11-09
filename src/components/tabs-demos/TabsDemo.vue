<template>
  
  <h1>Tab 组件示例</h1>
  <Demo 
    :component="BasicTab" 
    :sourceCode="basicTabSource" 
  />
  <Demo 
  :component="DisabledTab"
  :sourceCode="disabledTabSource"/>
  
</template>

<script lang="ts">
  import BasicTab from './BasicTab.demo.vue'
  import DisabledTab from './DisabledTab.demo.vue'
  import basicTabSource from './BasicTab.demo.vue?raw'
  import disabledTabSource from './DisabledTab.demo.vue?raw'
  import Demo from '../Demo.vue'
  
  export default {
  name: 'SwitchDemo',
  components: {
    Demo
  },
  setup() {
    return {
      BasicTab,
      DisabledTab,
      basicTabSource,
      disabledTabSource
    }
  }
}
</script>

