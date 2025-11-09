import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Markdown from 'unplugin-vue-markdown/vite'
import svgLoader from 'vite-svg-loader'

export default defineConfig({
  base: '/Cora-UI/',
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown({}),
    svgLoader({
      svgo: true,
      defaultImport: 'component'
    })
  ]
})