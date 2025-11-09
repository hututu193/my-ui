<template>
  <div class="demo-block">
    <h2 class="demo-title">支持 disabled</h2>
    <Switch v-model:value="bool" disabled />
  </div>
</template>

<script lang="ts">
import {Switch} from '../../lib'
import { ref } from 'vue'
export default {
  name: 'Switch2Demo',
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