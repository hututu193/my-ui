<template>
<div class="demo">
  <!-- 移除固定的 h2 标题 -->
  <div class="demo-component">
    <component :is="component" v-if="component" />
    <div v-else>组件未加载</div>
  </div>
  <div class="demo-actions">
    <button @click="hideCode" v-if="codeVisible">隐藏代码</button>
    <button @click="showCode" v-else>查看代码</button>
  </div>
  <div class="demo-code" v-if="codeVisible">
    <pre class="language-html" v-html="html" />
  </div>
</div>
</template>

<script lang="ts">
import { computed, ref } from 'vue'
import Button from '../lib/Button.vue'
import Prism from 'prismjs'
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-typescript'
import 'prismjs/themes/prism.css'

export default {
  components: {
    Button
  },
  props: {
    component: Object,
    sourceCode: String
  },
  setup(props) {
    const codeVisible = ref(false)
    
    const showCode = () =>{
      codeVisible.value = true
    }

    const hideCode = () =>{
      codeVisible.value = false
    }
 const html = computed(() => {
  const rawCode = props.sourceCode || props.component?.__sourceCode
  
  if (!rawCode) {
    return '<span style="color: #999">暂无源代码</span>'
  }
  
  try {
    // 使用贪婪匹配提取完整的模板部分（从第一个 <template> 到最后一个 </template>）
    const templateStart = rawCode.indexOf('<template>')
    const templateEnd = rawCode.lastIndexOf('</template>')
    
    // 提取脚本部分
    const scriptMatch = rawCode.match(/<script[^>]*>([\s\S]*?)<\/script>/is)
    
    let result = ''
    
    // 高亮模板部分
    if (templateStart !== -1 && templateEnd !== -1) {
      const templateContent = rawCode.substring(templateStart, templateEnd + '</template>'.length)
      result += Prism.highlight(
        templateContent, 
        Prism.languages.html!, // 添加 ! 断言，告诉 TypeScript 这个值一定存在
        'html'
      )
    }
    
    // 高亮脚本部分
    if (scriptMatch && scriptMatch[0]) {
      if (result) result += '\n\n'
      const scriptContent = scriptMatch[0]
      const isTypeScript = scriptContent.includes('lang="ts"') || scriptContent.includes("lang='ts'")
      const language = isTypeScript ? 'typescript' : 'javascript'
      
      // 添加类型断言
      const languageGrammar = Prism.languages[language] || Prism.languages.javascript!
      result += Prism.highlight(
        scriptContent, 
        languageGrammar, 
        language
      )
    }
    
    // 如果没有匹配到模板或脚本，回退到显示整个文件
    if (!result) {
      result = Prism.highlight(
        rawCode, 
        Prism.languages.html!, // 添加 ! 断言
        'html'
      )
    }
    
    return result
  } catch (error) {
    console.error('Prism highlight error:', error)
    return rawCode.replace(/</g, '&lt;').replace(/>/g, '&gt;')
  }
})

    return {
      html,
      codeVisible,
      showCode,
      hideCode,
    }
  }
}
</script>

<style lang="scss" scoped>
.demo{
  padding: 10px 16px;
  border: 1px solid #d7dade;
  border-radius: 8px;
  margin-bottom: 32px;
  margin-top: 18px;
  background: #fff;
}

.demo-actions {
  padding: 12px 0 4px 0;
  border-top: 1px solid #dbdde1;
  margin-top: 16px;
}

button{
  font-size: 16px;
  color: rgb(51, 51, 51);
  padding: 4px 12px;
  border: 1px solid rgb(217, 217, 217);
  background-color: white;
  border-radius: 6px;
  cursor: pointer;
  outline: none;
}

button:hover {
  color: rgb(5, 200, 244);
  border-color: rgb(5, 200, 244);
}

button:active {
  color: rgb(5, 200, 244);
  border-color: rgb(5, 200, 244);
  background-color: rgba(5, 200, 244, 0.05); /* 添加轻微背景色变化 */
}

.demo-code {
  margin-top: 16px;
  border-top: 1px solid #ebedf0;
  padding-top: 16px;
}
/* .demo-description{
  margin-bottom: 4px;
} */

.demo-component {
  margin-bottom: 12px;
}
</style>

<style lang="scss">
/* 最简单的全局样式 */
.demo-title {
  margin-bottom: 12px;
  color: #333;
  font-size: 24px;
  font-weight: 600;
  /* border-left: 4px solid #58c2d4; */
  /* padding-bottom: 8px; */
}
.demo-description {
  /* color: #666; */
  margin-bottom: 16px;
  padding: 8px 12px;
  background: #f5f5f5;
  border-radius: 4px;
}
</style>
