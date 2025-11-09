<template>
    <div class="gulu-tabs">
        <div class="gulu-tabs-nav" ref="container">
            <div class="gulu-tabs-nav-item"
            :class="{selected: t.title === selected,
                'gulu-tabs-nav-item-disabled': t.disabled
            }"
            :ref="el => {if(t.title === selected) selectedItem = el as HTMLDivElement}"
            v-for="(t, index) in tabData " :key="index"
            @click="select(t)"
            >{{ t.title }}
            <span v-if="t.disabled" class="gulu-tabs-nav-item-disabled-icon">🚫</span>
        </div>      
            
             <!-- 指示器必须在 nav 内，以便相对于 nav 定位 -->
            <div class="gulu-tabs-nav-indicator" ref="indicator"></div>
        </div>
        
        <div class="gulu-tabs-content">
            <component class = "gulu-tabs-content-item"
            :is="current"
            :key="current && current.props ? current.props.title : 'empty'"/>
        </div>        
    </div>
</template>

<script lang="ts">
    import Tab from './Tab.vue';
    import { computed, onMounted, ref, watchEffect, watch} from 'vue'

    export default{
        props:{
            selected:{
                type: String
            }
        },
        setup(props, context){
            const defaults = context.slots.default?.() ? context.slots.default() : []
            const selectedItem = ref<HTMLDivElement>()
            const indicator = ref<HTMLDivElement>()
            const container = ref<HTMLDivElement>()
            // 收集所有 tab 的数据
            const tabData = computed(() =>{

                // console.log('所有defaults:', defaults) // 查看完整的 defaults 结构

                const data = defaults.map((tag, index) =>{
                     // 添加空值检查
        if (!tag.props) {
            console.warn(`Tab at index ${index} has no props`)
            return {
                title: `Tab ${index}`,
                disabled: false
            }
        }

        //              console.log(`Tab ${index} 的完整props:`, tag.props)
        // console.log(`Tab ${index} 的disabled值:`, tag.props.disabled)
                      // 正确处理布尔属性：只要存在 disabled 属性，就视为 true
        const isDisabled = tag.props.disabled !== undefined
                    return {
                    title: tag.props.title,
                    disabled: isDisabled
                }
            }
            )
                    // console.log('处理后的Tab数据:', data)
                return data
            })
        //    const dex = JSON.parse(JSON.parse(defaults))
        //    console.log('de'+defaults);
          


            watch([() => props.selected, tabData], ([newSelected, newTabData]) =>{
                const currentTab = newTabData.find(t => t.title === newSelected)
                // console.log('ct' + currentTab);
                
                if(currentTab &&currentTab.disabled){
                     // 如果当前选中的标签被禁用了，切换到第一个可用的标签
                     const firstEnabled = newTabData.find(t => !t.disabled)
                     
                     if(firstEnabled){
                        context.emit('update:selected', firstEnabled.title)
                     }
                }
            
            }, {immediate: true})

            // 确保选中的不是禁用标签
           
            //设置底部蓝色线条
            onMounted(() =>{
                watchEffect(() =>{
                    if(selectedItem.value && indicator.value && container.value){
                        const {width} = selectedItem.value.getBoundingClientRect()
                        
                        // console.log(indicator.value);
                        // console.log(width);
                        const {left: left1} = container.value.getBoundingClientRect()
                        const {left: left2} = selectedItem.value.getBoundingClientRect()
                        const left = left2 - left1
                        indicator.value.style.left = left + 'px'
                        indicator.value.style.width = width + 'px'
                    }
                
            })
            })
            
            //内容区展示
            const current = computed(() =>{
                return defaults.find(tag => tag.props?.title === props.selected)
            })
            //抛出错误
            defaults.forEach(tag =>{
                if(tag.type !== Tab){
                    throw new Error('Tabs子组件必须是Tab')
                }
            })

            
            const titles = defaults.map(tag =>{
                return tag.props?.title
            })

            const select = (tab:{title: string, disabled: boolean}) =>{
                if(tab.disabled){
                    return //完全阻止禁用标签
                }
                context.emit('update:selected', tab.title)
            }
            
            return {
                current, defaults, titles, select, 
                selectedItem, indicator, container,
                tabData
            }
        }
    }


</script>

<style lang="scss">
    $blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
  $disabled-color: #bfbfbf;

    .gulu-tabs {
        &-nav {
            display: flex;
            color: $color;
            border-bottom: 1px solid $border-color;
            position: relative;
            align-items: center;

            &-item {
                padding: 8px 0 !important;
                margin: 0 16px !important;
                cursor: pointer;
                position: relative;
                display: flex;
                align-items: center;
                gap: 4px;

                 &:first-child {
                    margin-left: 0;
                }

                &.selected {
                    color: $blue;
                }
                // 禁用状态样式
                 &.gulu-tabs-nav-item-disabled {
                    color: $disabled-color;
                    cursor: not-allowed;
                    
                    &:hover {
                        color: $disabled-color;
                    }
                }

                &-disabled-icon {
                    font-size: 12px;
                }
            }
        }
        
        &-content {
            padding: 8px 16px !important;
        }
    }




.gulu-tabs-nav-indicator {
  position: absolute;
  height: 3px;
  background: $blue;
  bottom: -1px;
  left: 0;
  width: 0;
  transform: translateX(0);
  transition: all 250ms;
  /* transition: transform 250ms ease, width 250ms ease !important; */
  /* transition: transform 350ms cubic-bezier(0.22, 1, 0.36, 1), width 250ms ease; */
  border-radius: 2px; // 小圆角，看起来更精致
}
</style>