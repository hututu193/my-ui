<template>
  <transition name="fade">
    <div v-if="visible" class="message" :class="type">{{ message }}</div>
  </transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps<{
  message: string
  type?: 'info' | 'success' | 'warning' | 'error' | 'loading'
  duration?: number
}>()

const emit = defineEmits(['destroy'])
const visible = ref(false)

onMounted(() => {
  visible.value = true
  const time = props.duration ?? 3000
  if (time > 0) {
    setTimeout(() => {
      visible.value = false
      setTimeout(() => emit('destroy'), 300)
    }, time)
  }
})
</script>

<style scoped>
.message {
  padding: 8px 16px;
  border-radius: 6px;
  background: #333;
  color: white;
  min-width: 120px;
  text-align: center;
  transition: all 0.3s;
}
/* 动画 */
.fade-enter-from { opacity: 0; transform: translateY(-20px); }
.fade-leave-to { opacity: 0; transform: translateY(-20px); }
/* 类型样式 */
.message.success { background: #4caf50; }
.message.error { background: #f44336; }
.message.warning { background: #ff9800; }
.message.info { background: #2196f3; }
.message.loading { background: #9c27b0; }
</style>
