<template>
  <div class="demo-block">        
    <h2 class="demo-title">禁用状态</h2>
    <p class="demo-description">disabled 禁用属性输入框</p>
    <Input :modelValue="disabledValue" disabled placeholder="禁用状态"/>
  </div>
</template>

<script lang="ts">
  import {Input} from '../../lib';
  import { ref } from 'vue';
  export default {
    name: 'InputDisabled.demo.vue',
    components: {Input},
    setup(){
      const disabledValue = ref('这是禁用的状态')
      return {disabledValue,}
    }
  }
</script>