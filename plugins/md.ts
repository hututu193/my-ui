const mdToJs = async (str: string) => {
    const result = await remark().use(html).process(str)
    const content = JSON.stringify(result.toString())

    return `
<template>
  <div class="markdown-content" v-html="content"></div>
</template>

<script>
export default {
  name: 'MarkdownContent',
  data() {
    return {
      content: ${content}
    }
  }
}
</script>

<style>
.markdown-content {
  line-height: 1.6;
}
.markdown-content h1 {
  border-bottom: 1px solid #eaecef;
  padding-bottom: 0.3em;
}
</style>
    `.trim()
}