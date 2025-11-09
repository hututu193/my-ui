<template>
  <li
    @click="handleClick"
    :style="{
      padding: '8px',
      background: isSelected ? '#eee' : '#fff',
      color: disabled ? '#aaa' : '#000',
      cursor: disabled ? 'not-allowed' : 'pointer'
    }"
  >
    <slot>{{ label }}</slot>
  </li>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  value: string
  label: string
  selectedValue: string | string[]
  disabled?: boolean
}>()

const emit = defineEmits<{ (e: 'select', value: string): void }>()

const isSelected = computed(() => {
  if (Array.isArray(props.selectedValue)) {
    return props.selectedValue.includes(props.value)
  }
  return props.value === props.selectedValue
})

function handleClick() {
  if (props.disabled) return
  console.log(props.value);
  emit('select', props.value)
}
</script>

<script lang="ts">
export default { name: 'Option' }
</script>
