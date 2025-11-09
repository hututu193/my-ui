import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import { createWebHashHistory, createRouter } from 'vue-router'

const routes = [
    { path: '/', component: Home },
    {
        path: '/doc',
        component: Doc,
        children: [
            // 默认页

            { path: '', component: () => import('./markdown/intro.md') },

            // Markdown 文件
            { path: 'intro', component: () => import('./markdown/intro.md') },
            { path: 'get-started', component: () => import('./markdown/get-started.md') },
            { path: 'install', component: () => import('./markdown/install.md') },

            // Demo 组件
            { path: "switch", component: () => import('./components/switch-demos/SwitchDemo.vue') },
            { path: "button", component: () => import('./components/button-demos/ButtonDemo.vue') },
            { path: "dialog", component: () => import('./components/dialog-demos/DialogDemo.vue') },
            { path: "tabs", component: () => import('./components/tabs-demos/TabsDemo.vue') },
            { path: "input", component: () => import('./components/input-demos/InputDemo.vue') },

            { path: "checkbox", component: () => import('./components/checkbox-demos/CheckboxDemo.vue') },
            { path: "message", component: () => import('./components/message-demos/MessageDemo.vue') },
            { path: "select", component: () => import('./components/select-demos/SelectDemo.vue') }
        ]
    },
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
