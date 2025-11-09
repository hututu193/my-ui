<template>
  <label class="checkbox">
    <input
      ref="inp"
      type="checkbox"
      :checked="modelValue"
      :disabled="disabled"
      @change="onChange"
    />
    <span>{{ label }}</span>
  </label>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  label: string,
  value: string | number,
  modelValue: boolean,
  disabled?: boolean
}>();

// ✅ 修改这里
const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>();

const inp = ref<HTMLInputElement | null>(null);

const onChange = (e: Event) => {
  if (props.disabled) {
    if (inp.value) {
      inp.value.checked = !!props.modelValue;
    }
    return;
  }
  const target = e.target as HTMLInputElement;
  emit('update:modelValue', target.checked);
};
</script>

<style scoped>
.checkbox {
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>
 
