<template>
  <div ref="selectRef" style="position: relative; width: 250px;">
    <!-- 显示区域 -->
    <div
      style="padding: 6px; border: 1px solid #ccc; border-radius: 4px; cursor: pointer; display: flex; flex-wrap: wrap; gap: 4px; align-items: center;"
      @click="toggleOpen"
    >
      <!-- 多选显示 -->
      <template v-if="props.multiple && selectedLabels.length">
        <span
          v-for="opt in selectedLabels"
          :key="opt.value"
          style="background: #eee; padding: 2px 6px; border-radius: 4px; display: flex; align-items: center;"
        >
          {{ opt.label }}
          <span @click.stop="removeTag(opt.value)" style="margin-left:4px; cursor:pointer;">
            ❌
          </span>
        </span>
      </template>

      <!-- 单选显示 -->
      <span v-else>{{ selectedLabels[0]?.label || '请选择' }}</span>

      <!-- 清空按钮 -->
      <span
        v-if="hasSelected"
        @click.stop="clearSelected"
        style="cursor: pointer; color: #999; margin-left: auto;"
      >❌</span>
    </div>

    <!-- 下拉选项 -->
    <ul
      v-if="open"
      style="position: absolute; top: 100%; left: 0; width: 100%; border: 1px solid #ccc; border-radius: 4px; margin: 0; padding: 0; list-style: none; background: #fff; z-index: 10; max-height: 200px; overflow-y: auto;"
    >
      <li style="padding: 4px; border-bottom: 1px solid #eee;">
        <input type="text"
          v-model="searchKeyword"
          placeholder="搜索..."
          style="width: 100%; padding: 4px; box-sizing: border-box;"
        />
      </li>

      <Option
        v-for="opt in filterOption" :key="opt.value"
        :value="opt.value"
        :label="opt.label"
        :selectedValue="selected"
        :disabled="opt.disabled"
        @select="handleSelect"
      />
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import {Option} from './index'
// import type { OptionType } from '../types/select' // 导入类型
// 使用 defineOptions 设置组件名称
defineOptions({
  name: 'Select'
})


interface OptionType {
  label: string
  value: string
  disabled?: boolean
}

const props = defineProps<{
  options: OptionType[]
  modelValue?: string | string[]
  multiple?: boolean
}>()

const emit = defineEmits<{ (e: 'update:modelValue', value: string | string[]): void }>()

const open = ref(false)
const selectRef = ref<HTMLElement | null>(null)

const selected = ref<string | string[]>(props.multiple
  ? (Array.isArray(props.modelValue) ? props.modelValue : [])
  : (props.modelValue || '')
)

// 切换下拉框
function toggleOpen() {
  open.value = !open.value
}

const hasSelected = computed(() => {
  if (props.multiple) {
    return Array.isArray(selected.value) && selected.value.length > 0
  } else {
   return !!selected.value
  }
})

// 选择逻辑
function handleSelect(value: string) {
  if (props.multiple) {
    const arr = selected.value as string[]
    if (arr.includes(value)) {
      selected.value = arr.filter(v => v !== value) // 移除已选项
    } else {
      selected.value = [...arr, value] // 添加新选项
    }
    emit('update:modelValue', selected.value)
  } else {
    selected.value = value
    emit('update:modelValue', value)
    open.value = false
  }
}

// 点击外部关闭
function handleClickOutside(event: MouseEvent) {
  if (selectRef.value && !selectRef.value.contains(event.target as Node)) {
    open.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})
onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})

// 清空
const clearSelected = () => {
  selected.value = props.multiple ? [] : ''
  emit('update:modelValue', selected.value)
}

// 删除 tag
function removeTag(value: string) {
  if (!props.multiple) return
  selected.value = (selected.value as string[]).filter(v => v !== value)
  emit('update:modelValue', selected.value)
}

// 已选标签
const selectedLabels = computed(() => {
  const selArr = props.multiple ? (selected.value as string[]) : [selected.value as string]
  return props.options.filter(opt => selArr.includes(opt.value))
})

// 搜索关键词
const searchKeyword = ref('')

// 过滤选项
const filterOption = computed(() => {
  if (!searchKeyword.value) return props.options
  return props.options.filter(opt =>
    opt.label.toLowerCase().includes(searchKeyword.value.toLowerCase())
  )
})
</script>

