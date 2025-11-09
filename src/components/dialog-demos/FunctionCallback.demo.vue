<template>
  <div class="demo-block">
    <h2 class="demo-title">函数方式 - 回调确认</h2>
    <div class="demo-actions">
      <Button @click="confirmDelete" level="primary">删除确认</Button>
      <Button @click="confirmSubmit">提交确认</Button>
      <Button @click="confirmAsync" >异步操作</Button>
    </div>
    <div class="demo-feedback" v-if="feedback">
      {{ feedback }}
    </div>
  </div>
</template>

<script lang="ts">
import {Button} from '../../lib'
import { openDialog } from '../../lib/openDialog'
import { ref } from 'vue'
export default {
  name: 'FunctionCallbackDemo',
  components: {
    Button
  },
  setup() {
    const feedback = ref('') 
    const confirmDelete = () => {
      feedback.value = '等待用户确认删除...'
      openDialog({
        title: '确认删除',
        content: '删除后数据将无法恢复，确定要继续吗？',
        onOk: () => {
          feedback.value = '✅ 执行删除操作...'
          // 模拟异步操作
          setTimeout(() => {
            feedback.value = '删除成功！'
          }, 1000)
        },
        onCancel: () => {
          feedback.value = '❌ 用户取消了删除操作'
        }
      })
    }   
    const confirmSubmit = () => {
      feedback.value = '等待用户确认提交...'
      openDialog({
        title: '提交确认',
        content: '请确认信息无误后提交',
        onOk: () => {
          feedback.value = '✅ 提交中...'
          setTimeout(() => {
            feedback.value = '提交成功！'
          }, 1500)
        },
        onCancel: () => {
          feedback.value = '❌ 取消提交，继续编辑'
        }
      })
    }
    const confirmAsync = () => {
      feedback.value = '打开异步操作确认对话框...'
      openDialog({
        title: '异步操作',
        content: '这个操作需要一些时间处理，确定要继续吗？',
        onOk: () => {
          feedback.value = ' 正在处理中，请稍候...'
          // 模拟长时间操作
          setTimeout(() => {
            feedback.value = '✅ 异步操作完成！'
          }, 3000)
        },
        onCancel: () => {
          feedback.value = '❌ 用户取消了异步操作'
        }
      })
    }  
    return {
      feedback,
      confirmDelete,
      confirmSubmit,
      confirmAsync
    }
  }
}
</script>

<style scoped>
.demo-actions {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}

.demo-feedback {
  padding: 12px;
  background: #f6ffed;
  border: 1px solid #b7eb8f;
  border-radius: 4px;
  font-size: 14px;
}
</style>