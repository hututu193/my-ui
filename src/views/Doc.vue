<template>
<div  class="layout">

    <Topnav toggleMenuButtonVisible class="nav" />

    <div class="content">
      <!-- 边栏 -->
      <aside v-if="menuVisible">
        <h2>文档</h2>
        <ol>
            <li>
              <router-link to="/doc/intro">介绍</router-link>
            </li>
            <li>
              <router-link to="/doc/install">安装</router-link>
            </li>
            <li>
              <router-link to="/doc/get-started">开始使用</router-link>
            </li>
          </ol>

           <h2>组件列表</h2>
        <ol>
          
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/input">Input 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/message">Message 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/checkbox">Checkbox 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/select">Select 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li> 
         
          
        </ol>
      </aside>
      <!-- 内容区 -->
      <main>
        <router-view />
      </main>
    </div>
    
  </div>
  
</template>


<script lang="ts">
import Topnav from '../components/Topnav.vue';
import { inject, onMounted} from 'vue';
import type {Ref}  from 'vue'
import { menuVisibleKey } from '../types/types'  // 导入

export default{
    name: 'Doc',
    components:{Topnav},
    setup(){
         const {menuVisible, updateMenuVisible} = inject(menuVisibleKey) as {
        menuVisible: Ref<boolean>
        updateMenuVisible: () => void
      }
      onMounted(() => {
        // 在桌面端，确保边栏显示
        if (window.innerWidth > 500 && !menuVisible.value) {
          updateMenuVisible && updateMenuVisible()
        }
      })
      
      return{menuVisible}
    }
}
</script>


<style lang="scss" scoped>
$aside-index: 10;

/* $nav-index: 30;   // 顶部导航栏应该最高 */

.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
    
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    /* position: relative; // 添加定位  */
    @media (max-width: 500px) {
      padding-left: 0; 
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 28px;
    /* z-index: 1; // 内容区设置较低的 z-index */
    /* background: lightgreen; */
  }
}
aside {
  /* background: lightblue; */
  /* 添加背景色 */
  background: white;
  width: 150px;
  padding: 16px 0;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 90px;
  height: 100%;
  z-index: $aside-index;
  box-shadow: rgba(51, 51, 51, 0.1) 5px 0px 5px 0px;
  > h2 {
    margin-bottom: 4px;
    padding: 0 16px;
  }
  > ol {
    > li {
      a{
        display: block;
        padding: 4px 16px;
        text-decoration: none;
        transition: all 200ms ease; // 添加过渡效果
        border-radius: 4px; // 可选：添加圆角
        /* margin: 2px 8px; // 可选：添加一些间距 */
         // 鼠标悬浮状态
        /* &:hover {
          background-color: rgb(228, 254, 254); // 红色背景
         
        } */
        
        // 选中状态（当前路由）
        &.router-link-active {
          background-color: rgb(229, 254, 254); // 红色背景
          
          /* font-weight: bold; // 可选：加粗文字 */
        }
      }
      
    }
  }
}

main {
  overflow: auto;
}
</style>