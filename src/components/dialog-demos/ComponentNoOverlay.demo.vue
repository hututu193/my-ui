<template>
  <div class="demo-block">
    <h2 class="demo-title">组件方式 - 遮罩层是否关闭</h2>
    <p class="demo-description">通过closeOnClickOverlay设置遮罩层是否关闭 Dialog</p>
    <Button @click="showDialog = true">打开对话框</Button>
    <Dialog v-model:visible="showDialog" :closeOnClickOverlay="false">
      <template v-slot:title>提示信息</template>
      <template v-slot:content>
        <p>这是一个基础的对话框示例</p>
      </template>
    </Dialog>
  </div>
</template>

<script lang="ts">
import {Dialog} from '../../lib'
import {Button} from '../../lib'
import { ref } from 'vue'
export default {
  name: 'ComponentNoOverlayDemo',
  components: {
    Dialog,
    Button
  },
  setup() {
    const showDialog = ref(false)
    return { showDialog }
  }
}
</script>