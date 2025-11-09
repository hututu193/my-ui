
<template>
  <div class="demo-block">
    <h2 class="demo-title">不同尺寸</h2>
      <Button size="big" theme="text">大大大</Button>
      <Button theme="text">普普通</Button>
      <Button size="small" theme="text">小小小</Button>
  </div>
</template>

<script lang="ts">
    import {Button} from '../../lib';
    export default{
      components:{Button }
    }
</script>