<template>
  <div>
    <h2 class="demo-title">基础用法</h2>
    <p class="demo-description">基础多选逻辑，无 min/max 限制</p>
    <CheckboxGroup
      v-model="selectedValues"
      :options="checkboxOptions"
    />
    <p class="demo-result">选中值：{{ selectedValues }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import {CheckboxGroup} from '../../lib';
export default defineComponent({
  components: { CheckboxGroup },
  setup() {
    const selectedValues = ref<string[]>([]);
    const checkboxOptions = [
      { label: '苹果', value: 'apple' },
      { label: '香蕉', value: 'banana' },
      { label: '橙子', value: 'orange', disabled: true },
      { label: '葡萄', value: 'grape' },
      { label: '西瓜', value: 'watermelon' },   
    ];
    return { selectedValues, checkboxOptions };
  },
});
</script>
