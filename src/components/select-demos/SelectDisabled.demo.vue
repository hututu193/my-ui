<template>
  <div class="demo-block">
    <h2 class="demo-title">禁用状态</h2>
    <Select v-model="value" :options="optionsWithDisabled" />
    <div class="demo-result">选中值: {{ value }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Select } from '../../lib'
const value = ref('')
const optionsWithDisabled = [
  { label: '苹果', value: 'apple' },
  { label: '香蕉', value: 'banana', disabled: true },
  { label: '橙子', value: 'orange' },
  { label: '西瓜', value: 'watermelon' },
  { label: '菠萝', value: 'pineapple' }
]
</script>

<script lang="ts">
  export default {
    name: 'SelectDisabled'
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
