import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
    plugins: [vue()],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/lib/index.ts'),
            name: 'CoraUI',
            fileName: (format) => `index.${format}.js`
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue'
                }
            }
        },
        cssCodeSplit: true, // ✅ 新增：样式单独打包
        outDir: 'dist/lib'  // ✅ 新增：明确输出目录
    }
})