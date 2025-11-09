<template>
  <div class="demo-block">
    <h2 class="demo-title">搜索功能</h2>
    <Select v-model="value" :options="options" />
    <div class="demo-result">选中值: {{ value }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Select } from '../../lib'
const value = ref('')
const options = [
  { label: '苹果', value: 'apple' },
  { label: '香蕉', value: 'banana' },
  { label: '橙子', value: 'orange' },
  { label: '葡萄', value: 'grape' },
  { label: '西瓜', value: 'watermelon' },
  { label: '菠萝', value: 'pineapple' }
]
</script>


<script lang="ts">
  export default {
    name: 'SelectSearch'
  }
</script>
<style scoped>
.demo-block {
  margin-bottom: 16px;
}
.demo-result {
  margin-top: 8px;
  font-family: monospace;
  color: #059669;
}
</style>
