<template>
  <div class="demo-block">
    <h2 class="demo-title">基础用法</h2>
    <Select v-model="singleValue" :options="options" />
    <div class="demo-result">选中值: {{ singleValue }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Select } from '../../lib'
const singleValue = ref('')
const options = [
  { label: '苹果', value: 'apple' },
  { label: '香蕉', value: 'banana' },
  { label: '橙子', value: 'orange' },
  { label: '葡萄', value: 'grape' },
]
</script>

<script lang="ts">
  export default {
    name: 'SelectBase'
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
