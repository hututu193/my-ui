import type { Ref } from 'vue'

export interface MenuVisibleContext {
    menuVisible: Ref<boolean>
    updateMenuVisible: () => void
}

export const menuVisibleKey = Symbol('menuVisible')