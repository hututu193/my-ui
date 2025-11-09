<template>
  <article class="markdown-body" v-html="content">
  </article>
</template>

<script lang="ts">
import { ref, watchEffect } from 'vue';

export default {
  // 组件名称
  name: 'MarkdownViewer', 
  
  // 接收 Markdown 文件的路径作为属性
  props: {
    path: {
      type: String,
      required: true
    }
  },

  setup(props) {
    const content = ref<string>('');

    watchEffect(() => {
      // 动态导入 Markdown 文件。
      // 因为 vite.config.ts 中已设置 exportType: 'html'，
      // 所以 result.default 应该直接是 HTML 字符串。
      import(/* @vite-ignore */ props.path).then(result => {
        if (typeof result.default === 'string') {
          content.value = result.default;
        } else {
          // 仅作为调试和回退，理论上不会走到这里
          console.error("Markdown content is still an unexpected object:", result);
          content.value = '<h1>Error: Check Vite Config exportType!</h1><p>Markdown data not exported as a string.</p>';
        }
      }).catch(e => {
        console.error("Failed to load markdown content:", e);
        content.value = '<h1>Error loading document.</h1><p>Check the file path and network.</p>';
      });
    });

    return {
      content
    };
  }
};
</script>

<!-- <style scoped>
.markdown-body {
  padding: 16px 32px;
  max-width: 800px;
  margin: 0 auto;
}
</style> -->