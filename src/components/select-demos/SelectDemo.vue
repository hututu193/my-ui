<template>
  <div>
    <h1>Select 选择器组件示例</h1>

    <!-- 基础用法 -->
    <Demo :component="SelectBase" :sourceCode="selectBaseSource" />

    <!-- 多选模式 -->
    <Demo :component="SelectMultiple" :sourceCode="selectMultipleSource" />

    <!-- 禁用状态 -->
    <Demo :component="SelectDisabled" :sourceCode="selectDisabledSource" />

    <!-- 搜索功能 -->
    <Demo :component="SelectSearch" :sourceCode="selectSearchSource" />
  </div>
</template>

<script lang="ts">
import Demo from '../Demo.vue'

// 引入 demo 子组件
import SelectBase from './SelectBase.demo.vue'
import SelectMultiple from './SelectMultiple.demo.vue'
import SelectDisabled from './SelectDisabled.demo.vue'
import SelectSearch from './SelectSearch.demo.vue'

// 导入原始源码
import selectBaseSource from './SelectBase.demo.vue?raw'
import selectMultipleSource from './SelectMultiple.demo.vue?raw'
import selectDisabledSource from './SelectDisabled.demo.vue?raw'
import selectSearchSource from './SelectSearch.demo.vue?raw'

export default {
  name: 'SelectDemo',
  components: {
    Demo
  },
  setup() {
    return {
      SelectBase,
      SelectMultiple,
      SelectDisabled,
      SelectSearch,
      selectBaseSource,
      selectMultipleSource,
      selectDisabledSource,
      selectSearchSource
    }
  }
}


</script>
