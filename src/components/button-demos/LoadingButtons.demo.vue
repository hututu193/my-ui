
<template>
  <div class="demo-block">
    <h2 class="demo-title">加载按钮</h2>
    <Button loading>加载中</Button>
    <Button>加载完毕</Button>
  </div>
</template>

<script lang="ts">
    import {Button} from '../../lib';
    export default{
      components:{ Button }
    }
</script>