<template>
  <div>
    <h1>Message 消息提示组件示例</h1>

    <!-- 基础提示 -->
    <Demo :component="MessageBase" :sourceCode="messageBaseSource" />

    <!-- 加载提示 -->
    <Demo :component="MessageLoading" :sourceCode="messageLoadingSource" />

    <!-- 角落提示 -->
    <Demo :component="MessagePosition" :sourceCode="messagePositionSource" />
  </div>
</template>

<script lang="ts">
import Demo from '../Demo.vue'

// 三个演示模块
import MessageBase from './MessageBase.demo.vue'
import MessageLoading from './MessageLoading.demo.vue'
import MessagePosition from './MessagePosition.demo.vue'

// 导入原始源代码（vite 可用 ?raw）
import messageBaseSource from './MessageBase.demo.vue?raw'
import messageLoadingSource from './MessageLoading.demo.vue?raw'
import messagePositionSource from './MessagePosition.demo.vue?raw'

export default {
  name: 'MessageDemo',
  components: {
    Demo
  },
  setup() {
    return {
      MessageBase,
      MessageLoading,
      MessagePosition,
      messageBaseSource,
      messageLoadingSource,
      messagePositionSource
    }
  }
}
</script>
