<template>
  <div class="demo-block">
    <h2 class="demo-title">函数方式 - 基础提示</h2>
    <Button @click="showInfo">信息提示</Button>
    <Button @click="showSuccess">成功提示</Button>
    <Button @click="showWarning" level="danger">警告提示</Button>
  </div>
</template>

<script lang="ts">
import {Button} from '../../lib'
import { openDialog } from '../../lib/openDialog'
export default {
  name: 'FunctionBasicDemo',
  components: {
    Button
  },
  setup() {
    const showInfo = () => {
      openDialog({
        title: '系统通知',
        content: '您的操作已成功完成！'
      })
    }    
    const showSuccess = () => {
      openDialog({
        title: '操作成功',
        content: '数据保存成功！'
      })
    }
    const showWarning = () => {
      openDialog({
        title: '温馨提示',
        content: '请确保您已保存所有更改。'
      })
    }
    return {
      showInfo,
      showWarning,
      showSuccess
    }
  }
}
</script>