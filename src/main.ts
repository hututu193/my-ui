import { createApp } from 'vue'
import App from './App.vue'
import './lib/gulu.scss'
import './index.scss';
import 'github-markdown-css'

import { router } from './router'
// ----------------------------------------------------
// 解决 useHead() 错误的必要导入 (您需要安装 @vueuse/head 或 unhead)
import { createHead } from '@vueuse/head'

// 1. 初始化 Head 管理器
const head = createHead()
// ----------------------------------------------------

const app = createApp(App)

// 2. 挂载 Head 管理器，提供 useHead 所需的上下文
app.use(head)

app.use(router)

app.mount('#app')