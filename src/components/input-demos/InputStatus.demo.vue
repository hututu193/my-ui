<template>
  <div class="demo-block">
    <h2 class="demo-title">动态状态输入框</h2>
      <p class="demo-description">根据输入内容动态切换状态：</p>
      <Input
      v-model="value"
      :class="`gulu-input--${status}`"
      placeholder="请输入用户名"
      />
      <div class="status-info" v-if="status">
        <p :class="`${status}-text`">{{ message }}</p>
      </div>
  </div>
</template>

<script lang="ts">

import { ref, computed } from 'vue'
import {Input} from '../../lib'
export default{
  name: 'InputStatus.demo.vue',
  components:{Input},
  setup() {
    const value = ref('')
    const status = computed(() => {
      if (value.value === '') return 'error'
      if (value.value.length < 3) return 'warning'
      return 'success'
    })
    const message = computed(() => {
      switch (status.value) {
        case 'error':
          return '输入不能为空'
        case 'warning':
          return '长度太短（至少3个字符）'
        case 'success':
          return '输入格式正确 ✅'
        default:
          return ''
      }
      })
    return{value, status, message}
  }
}
</script>

<style scoped lang="scss">
.demo-section {
  margin-top: 20px;
}

.status-info {
  margin-top: 8px;
  font-size: 14px;
}

.error-text {
  color: #f56c6c;
}

.warning-text {
  color: #e6a23c;
}

.success-text {
  color: #67c23a;
}
p{
  padding: 4px 0;
    }
</style>
