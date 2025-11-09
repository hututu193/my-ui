<template>
    <div class="demo-block">
      <h2 class="demo-title">带禁用功能的Tabs</h2>
      <Tabs v-model:selected="x">
        <Tab title="导航1">内容1</Tab>
        <Tab title="导航2" disabled>这个标签被禁用了</Tab>
        <Tab title="导航3">内容3</Tab>
      </Tabs>
    </div>
</template>

<script lang="ts">
  import {Tab} from '../../lib';
  import {Tabs} from '../../lib'
  import {ref} from 'vue'
  export default {
    components:{
      Tab,
      Tabs
    },
    setup(){
      const x = ref('导航1')
      return {x}
    }
  }
</script>