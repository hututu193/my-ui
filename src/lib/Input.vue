<template>
  <div class="gulu-input-wrapper">
    <input
      v-model="innerValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :class="[
        'gulu-input',
        status && `gulu-input--${status}`,
        disabled && 'gulu-input--disabled'
      ]"  
      @input="onInput"
    />
    <p v-if="message" class="gulu-input-message" :class="`gulu-input-message--${status}`">
      {{ message }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, defineProps, defineEmits } from 'vue'

const props = defineProps({
  modelValue: String,
  placeholder: String,
  disabled: Boolean,
  readonly: Boolean,
  status: {
    type: String,
    default: '', // 可选: 'error' | 'warning' | 'success'
  },
  message: {
    type: String,
    default: '', // 显示在输入框下方的小提示文字
  },
})

const emit = defineEmits(['update:modelValue'])

const innerValue = ref(props.modelValue || '')

watch(
  () => props.modelValue,
  (val) => {
    innerValue.value = val || ''
  }
)

function onInput(e: Event) {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
}
</script>

<style scoped>
.gulu-input {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
  transition: all 0.2s ease;
  outline: none;
}

/* 基础交互 */
.gulu-input:focus {
  border-color: #409eff;
  box-shadow: 0 0 3px rgba(64, 158, 255, 0.3);
}

/* 状态样式 */
.gulu-input--error {
  border-color: #f56c6c;
  box-shadow: 0 0 3px rgba(245, 108, 108, 0.3);
}

.gulu-input--warning {
  border-color: #e6a23c;
  box-shadow: 0 0 3px rgba(230, 162, 60, 0.3);
}

.gulu-input--success {
  border-color: #67c23a;
  box-shadow: 0 0 3px rgba(103, 194, 58, 0.3);
}

/* 禁用状态 */
.gulu-input--disabled {
  background: #f5f7fa;
  cursor: not-allowed;
}

/* 底部提示文字 */
.gulu-input-message {
  font-size: 12px;
  margin-top: 4px;
}

.gulu-input-message--error {
  color: #f56c6c;
}
.gulu-input-message--warning {
  color: #e6a23c;
}
.gulu-input-message--success {
  color: #67c23a;
}
</style>
