<template>
  <div>
    <div class="topnavAndBanner">
      <Topnav :toggleMenuButtonVisible="true" class="nav" />
      
      <div class="banner">
        <h1>Cora UI</h1>
        <h2>基于 Vue3 的 UI 框架</h2>
        <p class="actions">
          <a href="https://github.com/hututu193/Cora-UI">GitHub</a>
          <router-link to="/doc/intro">开始</router-link>
        </p>
      </div>
    </div>
    
    <div class="features">
      <ul>
        <li>
          <Vvvuelogo class="icon" />
          <h3>基于 Vue 3</h3>
          <p>完全兼容Vue3 Composition API</p>
        </li>
        <li>
          <Tslogo class="icon" />
          <h3>基于 TypeScript</h3>
          <p>源代码采用 TypeScript 书写（非严格检查）</p>
        </li>
        <li>
          <Tool class="icon" />
          <h3>易用性</h3>
          <p>组件API简洁明了，快速上手</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
import Topnav from '../components/Topnav.vue';
import Tslogo from '../components/icons/Tslogo.svg';
import Vvvuelogo from '../components/icons/Vvvuelogo.svg';
import Tool from '../components/icons/Tool.svg';

defineOptions({
  name: 'Home'
});
</script>

<style lang="scss" scoped>
/* 样式保持不变 */
$blue: #58c2d4;
$color: #146d85;

.topnavAndBanner {
  background: #e6ffff;
  background: linear-gradient(145deg, rgba(230, 255, 255, 1) 0%, rgba(199, 244, 251, 1) 100%); 
  clip-path: ellipse(80% 60% at 50% 40%)
}

.features {
  margin: 40px auto;
  width: 90%;
  max-width: 1200px;

  > ul {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    margin: 0;
    gap: 0px;

    > li {
      width: 30%;
      min-width: 280px;
      margin: 16px 0;
      display: grid;
      grid-template-columns: minmax(72px, 100px) 1fr;
      grid-template-rows: auto auto;
      grid-template-areas:
        "icon title"
        "icon text";
      align-items: center;
      box-sizing: border-box;
      padding: 8px 12px;
      gap: 16px;

      > .icon {
        grid-area: icon;
        width: 72px;
        height: 72px;
        justify-self: start;
        flex-shrink: 0;
      }

      > h3 {
        grid-area: title;
        margin: 0;
        align-self: end;
        font-size: 26px;
        line-height: 42px;
        white-space: nowrap;
      }

      > p {
        grid-area: text;
        margin: 6px 0 0 0;
        font-size: 18px;
        line-height: 24px;
      }
    }
  }
}

@media (max-width: 800px) {
  .features > ul > li {
    width: 100%;
    grid-template-columns: 80px 1fr;
    
    > .icon { 
      width: 64px; 
      height: 64px; 
    }
    
    > h3 { 
      font-size: 22px; 
      white-space: normal;
    }
  }
}

.banner {
  color: $color;
  padding: 120px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > .actions {
    padding: 30px 0;
    
    a {
      margin: 0 8px;
      background: $blue;
      color: white;
      display: inline-block;
      font-size: 20px;
      border-radius: 20px;
      padding: 8px 24px;
      text-decoration: none;
      
      &:hover {
        text-decoration: none;
        opacity: 0.9;
      }
    }
  }
}
</style>