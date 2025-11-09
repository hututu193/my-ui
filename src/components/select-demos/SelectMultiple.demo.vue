<template>
  <div class="demo-block">
    <h2 class="demo-title">多选模式</h2>
    <Select v-model="multiValue" :options="options" multiple />
    <div class="demo-result">选中值: {{ multiValue }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Select } from '../../lib'
const multiValue = ref<string[]>([])
const options = [
  { label: '苹果', value: 'apple' },
  { label: '香蕉', value: 'banana' },
  { label: '橙子', value: 'orange' },
  { label: '葡萄', value: 'grape' }
]
</script>

<script lang="ts">
  export default {
    name: 'SelectMultiple'
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
