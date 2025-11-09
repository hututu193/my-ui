<template>
  <div>
    <h1>Checkbox 组件示例</h1>
      <Demo :component="BasicCheckbox" :sourceCode="basicCheckboxSource" />

      <Demo :component="DisabledCheckbox" :sourceCode="disabledCheckboxSource" />
            
      <Demo :component="LimitCheckbox" :sourceCode="limitCheckboxSource" />

  </div>
</template>

<script lang="ts">
import LimitCheckbox from './LimitCheckbox.demo.vue'
import DisabledCheckbox from './DisabledCheckbox.demo.vue'
import BasicCheckbox from './BasicCheckbox.demo.vue'
import Demo from '../Demo.vue'

// 导入源码，用 ?raw 获取
import limitCheckboxSource from './LimitCheckbox.demo.vue?raw'
import disabledCheckboxSource from './DisabledCheckbox.demo.vue?raw'
import basicCheckboxSource from './BasicCheckbox.demo.vue?raw'

export default {
  name: 'CheckboxDemo',
  components: {
    Demo
  },
  setup() {
    return {
      LimitCheckbox,
      DisabledCheckbox,
      BasicCheckbox,
      limitCheckboxSource,
      disabledCheckboxSource,
      basicCheckboxSource
    }
  }
}
</script>
