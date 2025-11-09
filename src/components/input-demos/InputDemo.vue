<template>
    <div>
        <h1>Input  组件示例</h1>
        <Demo :component="InputBasic" :sourceCode="basicSource"/>
        <Demo :component="InputDisabled" :sourceCode="disabledSource"/>
        <Demo :component="InputReadonly" :sourceCode="redonlySource"/>
        <Demo :component="InputStatus" :sourceCode="statusSource"/>
    </div>
</template>

<script lang="ts">
    import InputBasic from './InputBasic.demo.vue';
    import InputStatus from './InputStatus.demo.vue';
    import InputDisabled from './InputDisabled.demo.vue';
    import InputReadonly from './InputReadonly.demo.vue';
    import Demo from '../Demo.vue';
    import basicSource from './InputBasic.demo.vue?raw'
    import statusSource from './InputStatus.demo.vue?raw';
    import disabledSource from'./InputDisabled.demo.vue?raw'
    import redonlySource from './InputReadonly.demo.vue?raw'
    export default{
        name: 'InputDemo',
        components:{
            Demo
        },
        setup(){
             return {
                InputBasic,
                InputDisabled,
                InputReadonly,
                InputStatus,
                basicSource,
                statusSource,
                disabledSource,
                redonlySource
            }
        }
    }
     

</script>