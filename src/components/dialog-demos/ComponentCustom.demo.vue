<template>
  <div class="demo-block">
    <h2 class="demo-title">组件方式 - 自定义内容</h2>
    <Button @click="showDialog = true">打开自定义对话框</Button>   
    <Dialog v-model:visible="showDialog">
      <template v-slot:title>
        <strong style="color: #1890ff;">自定义标题</strong>
      </template>
      <template v-slot:content>
        <div>
          <strong>复杂内容区域</strong>
          <p>这里可以包含任何 Vue 组件</p>
          <Button>内部按钮示例</Button>
          <div  style="margin-top: 8px;">
            <input placeholder="输入框示例" />
          </div>
        </div>
      </template>
    </Dialog>
  </div>
</template>

<script lang="ts">
import {Dialog} from '../../lib'
import {Button} from '../../lib'
import { ref } from 'vue'
export default {
  name: 'ComponentCustomDemo',
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