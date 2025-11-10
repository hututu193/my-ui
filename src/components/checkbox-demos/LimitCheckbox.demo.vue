<template>
  <div>
    <h2 class="demo-title">可选数量限制</h2>
    <p class="demo-description">通过 min/max 限制的多选逻辑</p>
    <CheckboxGroup
      v-model="selectedValues"
      :options="checkboxOptions"
      :min="2"
      :max="4"
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
      { label: '橙子', value: 'orange' },
      { label: '葡萄', value: 'grape', disabled: true },
      { label: '西瓜', value: 'watermelon' },
      { label: '草莓', value: 'strawberry' },
      { label: '菠萝', value: 'pineapple' },
      { label: '奇异果', value: 'kiwi' },
    ];
    return { selectedValues, checkboxOptions };
  },
});
</script>
