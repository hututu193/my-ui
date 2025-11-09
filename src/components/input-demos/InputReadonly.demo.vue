<template>
  <div class="demo-block">
    <h2 class="demo-title">只读属性</h2>
    <p class="demo-description">readonly只读属性输入框</p>
    <Input readonly :modelValue="readonlyValue"/>
  </div>
</template>

<script lang="ts">
  import { Input } from '../../lib';
  import { ref } from 'vue';
  export default {
  name: 'InputReadonly.demo.vue',
  components: {Input},
  setup(){            
    const readonlyValue = ref('这是只读内容')
    return {readonlyValue}
  }
  }
</script>