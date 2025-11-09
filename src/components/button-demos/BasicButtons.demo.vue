
<template>
  <div class="demo-block">
    <h2 class="demo-title">基础按钮</h2>
    <Button level="primary">默认按钮</Button>
    <Button level="main">主要按钮</Button>
    <Button level="danger">危险按钮</Button>
  </div>
</template>

<script lang="ts">
    import {Button} from '../../lib';
    export default{
      components:{Button }
    }
</script>