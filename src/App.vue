<template>
 <router-view/>
</template>

<script lang="ts">
import { provide, ref, onMounted, onUnmounted } from 'vue';
import {router} from './router'
import { menuVisibleKey } from './types/types'  // 导入

export default{
  name: 'App',
  setup(){
    const windowWidth = ref(document.documentElement.clientWidth)
    const menuVisible = ref(windowWidth.value > 500)
    
    function updateMenuVisible(){
      menuVisible.value = !menuVisible.value
    }

    const handleResize = () => {
      windowWidth.value = document.documentElement.clientWidth
      if (windowWidth.value <= 500) {
        menuVisible.value = false
      } else {
        menuVisible.value = true
      }
    }
    
    onMounted(() => {
      window.addEventListener('resize', handleResize)
    })
    
    onUnmounted(() => {
      window.removeEventListener('resize', handleResize)
    })

    // 用 menuVisibleKey 替换字符串
    provide(menuVisibleKey, {menuVisible, updateMenuVisible})

    router.afterEach(() => {
      if (windowWidth.value <= 500) {
        menuVisible.value = false
      } else if (windowWidth.value > 500) {
        menuVisible.value = true
      }
    })
  }
}
</script>