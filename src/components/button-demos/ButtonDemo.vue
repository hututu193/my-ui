<template>
  <h1>Button 组件示例</h1>
  <Demo :component="BasicButtons"
  :sourceCode="basicSource"/>
  <Demo :component="LinkButtons"
  :sourceCode="linkSource"/>
  <Demo :component="WordButtons"
  :sourceCode="wordSource"/>
  <Demo :component="DisabledButtons"
  :sourceCode="disabledSource"/>
  <Demo :component="LoadingButtons"
  :sourceCode="loadingSource"/>
  <Demo :component="SizeButtons"
  :sourceCode="sizeSource"/>
</template>

<script lang="ts">
  import BasicButtons from './BasicButtons.demo.vue';
  import LinkButtons from './LinkButtons.demo.vue';
  import WordButtons from './WordButtons.demo.vue';
  import DisabledButtons from './DisabledButtons.demo.vue';
  import LoadingButtons from './LoadingButtons.demo.vue';
  import SizeButtons from './SizeButtons.demo.vue';

  // 导入源代码
import basicSource from './BasicButtons.demo.vue?raw'
import linkSource from './LinkButtons.demo.vue?raw'
import wordSource from './WordButtons.demo.vue?raw'
import disabledSource from './DisabledButtons.demo.vue?raw'
import loadingSource from './LoadingButtons.demo.vue?raw'
import sizeSource from './SizeButtons.demo.vue?raw'

import Demo from '../Demo.vue'
  
  // import Button from '../lib/Button.vue'
  export default{
    components:{Demo},
    setup(){
     
      return {
      BasicButtons,
      LinkButtons,
      WordButtons,
      DisabledButtons,
      LoadingButtons,
      SizeButtons,
      basicSource,
      linkSource,
      wordSource,
      disabledSource,
      loadingSource,
      sizeSource
    }
    }
  }

</script>