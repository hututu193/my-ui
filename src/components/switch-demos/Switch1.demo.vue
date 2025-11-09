<template>
  <div class="demo-block">
    <h2 class="demo-title">常规用法</h2>
    <Switch v-model:value="bool" />
  </div>
</template>

<script lang="ts">
import {Switch} from '../../lib'
import { ref } from 'vue'
export default {
  name: 'Switch1Demo',
  components: {
    Switch,
  },
  setup() {
    const bool = ref(false)
    return {
      bool
    }
  }
}
</script>