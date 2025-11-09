<template>
    <div>
        <slot />
    </div>
</template>

<script lang="ts">
    export default{
        props:{
            title:{
                type: String,
                required: true
            },
            disabled:{
                type: Boolean,
                required: false
            }
        }

    }
</script>