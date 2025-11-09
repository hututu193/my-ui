
<template>
  <div class="demo-block">
    <h2 class="demo-title">禁用按钮</h2>
    <Button disabled>禁用按钮</Button>
    <Button theme="link" disabled>禁用链接按钮</Button>
    <Button theme="text" disabled>禁用按钮</Button>
  </div>
</template>

<script lang="ts">
    import {Button} from '../../lib';
    export default{
      components:{Button }
    }
</script>