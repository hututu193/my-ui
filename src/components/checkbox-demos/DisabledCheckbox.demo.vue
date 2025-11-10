<template>
  <div>
    <h2 class="demo-title">禁用状态</h2>
    <p class="demo-description">通过设置 disabled 禁用选项</p>
    <CheckboxGroup
      v-model="selectedValues"
      :options="checkboxOptions"
    />
    <p>选中值：{{ selectedValues }}</p>
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
      { label: '草莓', value: 'strawberry', disabled: true },
    ];
    return { selectedValues, checkboxOptions };
  },
});
</script>
