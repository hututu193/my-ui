停，，，<template>
  <div class="checkbox-group">
    <Checkbox
      v-for="option in options"
      :key="option.value"
      :label="option.label"
      :value="option.value"
      :model-value="isSelected(option.value)"
      :disabled="isDisabled(option.value)"
      @update:modelValue="val => handleChange(option.value, val)"
    />
  </div>
</template>

<script setup lang="ts">
import Checkbox from './Checkbox.vue';
import { reactive, onMounted } from 'vue';

const props = defineProps<{
  modelValue: (string | number)[],
  options: { label: string; value: string | number; disabled?: boolean }[],
  max?: number,
  min?: number
}>();

const emit = defineEmits(['update:modelValue']);

// 当前选中项
const selected = reactive<string[]>([]);

onMounted(() => {
  const availableValues = props.options.filter(o => !o.disabled).map(o => o.value as string);
// console.log('qwer   ' +availableValues);
  if ((!props.modelValue || props.modelValue.length === 0) && props.min) {
    // 自动选中前 min 个非禁用项
    const initial = availableValues.slice(0, props.min);
    selected.push(...initial);
    emit('update:modelValue', [...selected]);
  } else if (props.modelValue) {
    // 只保留用户传入的非禁用项
    const initial = props.modelValue.filter(v => availableValues.includes(v as string)).map(v => v as string);
    selected.push(...initial);
    emit('update:modelValue', [...selected]);
  }
});

// console.log(selected);
// console.log(props.options);
// 判断是否选中
const isSelected = (val: string | number) => {
  return selected.includes(val as string);
};

// 判断是否禁用
const isDisabled = (val: string | number) => {
  const option = props.options.find(o => o.value === val);
  if (!option) return false;

  // 原本 disabled
  if (option.disabled) return true;

  // max 限制：未选中且已达上限
  if (props.max && !selected. includes(val as string)) {
    return selected.length >= props.max;
  }

  // min 限制：选中数量 = min，已选中项不能取消
  if (props.min && selected.length <= props.min && selected.includes(val as string)) {
    return true;
  }

  return false;
};

// 处理变化
const handleChange = (val: string | number, checked: boolean) => {
  const value = val as string;

  if (checked) {
    if (!selected.includes(value)) {
      if (props.max && selected.length >= props.max) return;
      selected.push(value);
    }
  } else {
    // 如果取消操作会导致选中数量 < min，则阻止取消
    if (props.min && selected.length <= props.min) return;
    selected.splice(selected.indexOf(value), 1);
  }

  emit('update:modelValue', [...selected]);
};
</script>

<script lang="ts">
  export default {
    name: 'CheckboxGroup'
  }
</script>


<style scoped>
.checkbox-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>