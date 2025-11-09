import{D as g}from"./Demo-DJ0aKjG9.js";import{v as h,r as k,c as m,o as d,a as u,t as x,_ as v,z as _,p as O,F as $,s as G,g as w,e as f,f as b}from"./index-D4wJtrRX.js";const y={class:"checkbox"},D=["checked","disabled"],B=h({__name:"Checkbox",props:{label:{},value:{},modelValue:{type:Boolean},disabled:{type:Boolean}},emits:["update:modelValue"],setup(l,{emit:e}){const o=l,t=e,n=k(null),p=s=>{if(o.disabled){n.value&&(n.value.checked=!!o.modelValue);return}const i=s.target;t("update:modelValue",i.checked)};return(s,i)=>(d(),m("label",y,[u("input",{ref_key:"inp",ref:n,type:"checkbox",checked:l.modelValue,disabled:l.disabled,onChange:p},null,40,D),u("span",null,x(l.label),1)]))}}),S=v(B,[["__scopeId","data-v-0d2da1a1"]]),U={class:"checkbox-group"},L={name:"CheckboxGroup"},F=h({...L,props:{modelValue:{},options:{},max:{},min:{}},emits:["update:modelValue"],setup(l,{emit:e}){const o=l,t=e,n=_([]);O(()=>{const c=o.options.filter(r=>!r.disabled).map(r=>r.value);if((!o.modelValue||o.modelValue.length===0)&&o.min){const r=c.slice(0,o.min);n.push(...r),t("update:modelValue",[...n])}else if(o.modelValue){const r=o.modelValue.filter(a=>c.includes(a)).map(a=>a);n.push(...r),t("update:modelValue",[...n])}});const p=c=>n.includes(c),s=c=>{const r=o.options.find(a=>a.value===c);return r?r.disabled?!0:o.max&&!n.includes(c)?n.length>=o.max:!!(o.min&&n.length<=o.min&&n.includes(c)):!1},i=(c,r)=>{const a=c;if(r){if(!n.includes(a)){if(o.max&&n.length>=o.max)return;n.push(a)}}else{if(o.min&&n.length<=o.min)return;n.splice(n.indexOf(a),1)}t("update:modelValue",[...n])};return(c,r)=>(d(),m("div",U,[(d(!0),m($,null,G(l.options,a=>(d(),w(S,{key:a.value,label:a.label,value:a.value,"model-value":p(a.value),disabled:s(a.value),"onUpdate:modelValue":C=>i(a.value,C)},null,8,["label","value","model-value","disabled","onUpdate:modelValue"]))),128))]))}}),V=v(F,[["__scopeId","data-v-88b70e46"]]),I=h({components:{CheckboxGroup:V},setup(){return{selectedValues:k([]),checkboxOptions:[{label:"苹果",value:"apple"},{label:"香蕉",value:"banana"},{label:"橙子",value:"orange"},{label:"葡萄",value:"grape",disabled:!0},{label:"西瓜",value:"watermelon"},{label:"草莓",value:"strawberry"},{label:"菠萝",value:"pineapple"},{label:"奇异果",value:"kiwi"}]}}});function N(l,e,o,t,n,p){const s=f("CheckboxGroup");return d(),m("div",null,[e[1]||(e[1]=u("h2",{class:"demo-title"},"可选数量限制",-1)),e[2]||(e[2]=u("p",{class:"demo-description"},"通过 min/max 限制的多选逻辑",-1)),b(s,{modelValue:l.selectedValues,"onUpdate:modelValue":e[0]||(e[0]=i=>l.selectedValues=i),options:l.checkboxOptions,min:2,max:4},null,8,["modelValue","options"]),u("p",null,"选中值："+x(l.selectedValues),1)])}const z=v(I,[["render",N]]),E=h({components:{CheckboxGroup:V},setup(){return{selectedValues:k([]),checkboxOptions:[{label:"苹果",value:"apple"},{label:"香蕉",value:"banana"},{label:"橙子",value:"orange",disabled:!0},{label:"葡萄",value:"grape"},{label:"西瓜",value:"watermelon"},{label:"草莓",value:"strawberry",disabled:!0}]}}});function M(l,e,o,t,n,p){const s=f("CheckboxGroup");return d(),m("div",null,[e[1]||(e[1]=u("h2",{class:"demo-title"},"禁用状态",-1)),e[2]||(e[2]=u("p",{class:"demo-description"},"通过设置 disabled 禁用选项",-1)),b(s,{modelValue:l.selectedValues,"onUpdate:modelValue":e[0]||(e[0]=i=>l.selectedValues=i),options:l.checkboxOptions},null,8,["modelValue","options"]),u("p",null,"选中值："+x(l.selectedValues),1)])}const j=v(E,[["render",M]]),q=h({components:{CheckboxGroup:V},setup(){return{selectedValues:k([]),checkboxOptions:[{label:"苹果",value:"apple"},{label:"香蕉",value:"banana"},{label:"橙子",value:"orange",disabled:!0},{label:"葡萄",value:"grape"},{label:"西瓜",value:"watermelon"}]}}});function A(l,e,o,t,n,p){const s=f("CheckboxGroup");return d(),m("div",null,[e[1]||(e[1]=u("h2",{class:"demo-title"},"基础用法",-1)),e[2]||(e[2]=u("p",{class:"demo-description"},"基础多选逻辑，无 min/max 限制",-1)),b(s,{modelValue:l.selectedValues,"onUpdate:modelValue":e[0]||(e[0]=i=>l.selectedValues=i),options:l.checkboxOptions},null,8,["modelValue","options"]),u("p",null,"选中值："+x(l.selectedValues),1)])}const H=v(q,[["render",A]]),J=`<template>\r
  <div>\r
    <h2 class="demo-title">可选数量限制</h2>\r
    <p class="demo-description">通过 min/max 限制的多选逻辑</p>\r
    <CheckboxGroup\r
      v-model="selectedValues"\r
      :options="checkboxOptions"\r
      :min="2"\r
      :max="4"\r
    />\r
    <p>选中值：{{ selectedValues }}</p>\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
import { defineComponent, ref } from 'vue';\r
import {CheckboxGroup} from '../../lib';\r
export default defineComponent({\r
  components: { CheckboxGroup },\r
  setup() {\r
    const selectedValues = ref<string[]>([]);\r
    const checkboxOptions = [\r
      { label: '苹果', value: 'apple' },\r
      { label: '香蕉', value: 'banana' },\r
      { label: '橙子', value: 'orange' },\r
      { label: '葡萄', value: 'grape', disabled: true },\r
      { label: '西瓜', value: 'watermelon' },\r
      { label: '草莓', value: 'strawberry' },\r
      { label: '菠萝', value: 'pineapple' },\r
      { label: '奇异果', value: 'kiwi' },\r
    ];\r
    return { selectedValues, checkboxOptions };\r
  },\r
});\r
<\/script>\r
`,K=`<template>\r
  <div>\r
    <h2 class="demo-title">禁用状态</h2>\r
    <p class="demo-description">通过设置 disabled 禁用选项</p>\r
    <CheckboxGroup\r
      v-model="selectedValues"\r
      :options="checkboxOptions"\r
    />\r
    <p>选中值：{{ selectedValues }}</p>\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
import { defineComponent, ref } from 'vue';\r
import {CheckboxGroup} from '../../lib';\r
export default defineComponent({\r
  components: { CheckboxGroup },\r
  setup() {\r
    const selectedValues = ref<string[]>([]);\r
    const checkboxOptions = [\r
      { label: '苹果', value: 'apple' },\r
      { label: '香蕉', value: 'banana' },\r
      { label: '橙子', value: 'orange', disabled: true },\r
      { label: '葡萄', value: 'grape' },\r
      { label: '西瓜', value: 'watermelon' },\r
      { label: '草莓', value: 'strawberry', disabled: true },\r
    ];\r
    return { selectedValues, checkboxOptions };\r
  },\r
});\r
<\/script>\r
`,P=`<template>\r
  <div>\r
    <h2 class="demo-title">基础用法</h2>\r
    <p class="demo-description">基础多选逻辑，无 min/max 限制</p>\r
    <CheckboxGroup\r
      v-model="selectedValues"\r
      :options="checkboxOptions"\r
    />\r
    <p>选中值：{{ selectedValues }}</p>\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
import { defineComponent, ref } from 'vue';\r
import {CheckboxGroup} from '../../lib';\r
export default defineComponent({\r
  components: { CheckboxGroup },\r
  setup() {\r
    const selectedValues = ref<string[]>([]);\r
    const checkboxOptions = [\r
      { label: '苹果', value: 'apple' },\r
      { label: '香蕉', value: 'banana' },\r
      { label: '橙子', value: 'orange', disabled: true },\r
      { label: '葡萄', value: 'grape' },\r
      { label: '西瓜', value: 'watermelon' },   \r
    ];\r
    return { selectedValues, checkboxOptions };\r
  },\r
});\r
<\/script>\r
`,Q={name:"CheckboxDemo",components:{Demo:g},setup(){return{LimitCheckbox:z,DisabledCheckbox:j,BasicCheckbox:H,limitCheckboxSource:J,disabledCheckboxSource:K,basicCheckboxSource:P}}};function R(l,e,o,t,n,p){const s=f("Demo");return d(),m("div",null,[e[0]||(e[0]=u("h1",null,"Checkbox 组件示例",-1)),b(s,{component:t.BasicCheckbox,sourceCode:t.basicCheckboxSource},null,8,["component","sourceCode"]),b(s,{component:t.DisabledCheckbox,sourceCode:t.disabledCheckboxSource},null,8,["component","sourceCode"]),b(s,{component:t.LimitCheckbox,sourceCode:t.limitCheckboxSource},null,8,["component","sourceCode"])])}const X=v(Q,[["render",R]]);export{X as default};
