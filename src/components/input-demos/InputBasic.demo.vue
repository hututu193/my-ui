<template>
  <div class="demo-block">
    <h2 class="demo-title">基础输入框</h2>
    <p class="demo-description">使用v-model进行双向绑定: {{ value }}</p>
    <Input v-model="value" placeholder="请输入内容"/>
  </div>
</template>

<script lang="ts">
  import {Input} from '../../lib';
  import { ref } from 'vue';
  export default{
    name: 'InputBasic.demo.vue',
    components: {Input},
    setup(){
      const value = ref('')
      return{
        value,
      }
   }
  }
</script>
