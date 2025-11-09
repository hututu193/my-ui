import Dialog from "./Dialog.vue";
import { createApp, h } from 'vue';

interface DialogOptions {
    title: string;
    content: string;
    onOk?: () => void;
    onCancel?: () => void;
    closeOnClickOverlay?: boolean;
}

export const openDialog = (options: DialogOptions) => {
    const { title, content, onOk, onCancel, closeOnClickOverlay = true } = options;

    // 1. 创建容器
    const div = document.createElement('div');
    document.body.appendChild(div);

    // 2. 定义关闭逻辑
    const close = () => {
        app.unmount();
        div.remove();
    };

    // 3. 创建应用实例
    const app = createApp({
        render() {
            return h(
                Dialog,
                {
                    visible: true,
                    closeOnClickOverlay,
                    "onUpdate:visible": (newVisible: boolean) => {
                        if (newVisible === false) {
                            close();
                        }
                    },
                    onOk: () => {
                        onOk?.();
                        close();
                    },
                    onCancel: () => {
                        onCancel?.();
                        close();
                    }
                },
                {
                    title: () => h('div', title),
                    content: () => h('div', content)
                }
            );
        }
    });

    app.mount(div);
};