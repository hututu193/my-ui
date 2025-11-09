<template>
  <div class="demo-block">
      <h2 class="demo-title">文字按钮</h2>
      <Button theme="text" level="main">主要文字按钮</Button>
      <Button theme="text">普通文字按钮</Button>
      <Button theme="text" level="danger">危险文字按钮</Button>
  </div>
</template>

<script lang="ts">
    import {Button} from '../../lib';
    export default{
      components:{Button }
    }
</script>