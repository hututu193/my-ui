import{D as I}from"./Demo-DJ0aKjG9.js";import{v as f,r as m,l as x,p as N,C as O,c as u,a as i,h as C,F as D,s as w,t as b,D as $,x as z,y as T,o as s,b as B,g as W,E as _,G as F,i as R,f as v,_ as g,e as G}from"./index-D4wJtrRX.js";const K=["onClick"],j={key:1},q={key:0,style:{position:"absolute",top:"100%",left:"0",width:"100%",border:"1px solid #ccc","border-radius":"4px",margin:"0",padding:"0","list-style":"none",background:"#fff","z-index":"10","max-height":"200px","overflow-y":"auto"}},H={style:{padding:"4px","border-bottom":"1px solid #eee"}},y=f({name:"Select",__name:"Select",props:{options:{},modelValue:{},multiple:{type:Boolean}},emits:["update:modelValue"],setup(d,{emit:t}){const e=d,a=t,l=m(!1),o=m(null),n=m(e.multiple?Array.isArray(e.modelValue)?e.modelValue:[]:e.modelValue||"");function h(){l.value=!l.value}const M=x(()=>e.multiple?Array.isArray(n.value)&&n.value.length>0:!!n.value);function A(r){if(e.multiple){const p=n.value;p.includes(r)?n.value=p.filter(c=>c!==r):n.value=[...p,r],a("update:modelValue",n.value)}else n.value=r,a("update:modelValue",r),l.value=!1}function k(r){o.value&&!o.value.contains(r.target)&&(l.value=!1)}N(()=>{document.addEventListener("click",k)}),O(()=>{document.removeEventListener("click",k)});const L=()=>{n.value=e.multiple?[]:"",a("update:modelValue",n.value)};function U(r){e.multiple&&(n.value=n.value.filter(p=>p!==r),a("update:modelValue",n.value))}const V=x(()=>{const r=e.multiple?n.value:[n.value];return e.options.filter(p=>r.includes(p.value))}),S=m(""),E=x(()=>S.value?e.options.filter(r=>r.label.toLowerCase().includes(S.value.toLowerCase())):e.options);return(r,p)=>(s(),u("div",{ref_key:"selectRef",ref:o,style:{position:"relative",width:"250px"}},[i("div",{style:{padding:"6px",border:"1px solid #ccc","border-radius":"4px",cursor:"pointer",display:"flex","flex-wrap":"wrap",gap:"4px","align-items":"center"},onClick:h},[e.multiple&&V.value.length?(s(!0),u(D,{key:0},w(V.value,c=>(s(),u("span",{key:c.value,style:{background:"#eee",padding:"2px 6px","border-radius":"4px",display:"flex","align-items":"center"}},[B(b(c.label)+" ",1),i("span",{onClick:$(Ve=>U(c.value),["stop"]),style:{"margin-left":"4px",cursor:"pointer"}}," ❌ ",8,K)]))),128)):(s(),u("span",j,b(V.value[0]?.label||"请选择"),1)),M.value?(s(),u("span",{key:2,onClick:$(L,["stop"]),style:{cursor:"pointer",color:"#999","margin-left":"auto"}},"❌")):C("",!0)]),l.value?(s(),u("ul",q,[i("li",H,[z(i("input",{type:"text","onUpdate:modelValue":p[0]||(p[0]=c=>S.value=c),placeholder:"搜索...",style:{width:"100%",padding:"4px","box-sizing":"border-box"}},null,512),[[T,S.value]])]),(s(!0),u(D,null,w(E.value,c=>(s(),W(_(P),{key:c.value,value:c.value,label:c.label,selectedValue:n.value,disabled:c.disabled,onSelect:A},null,8,["value","label","selectedValue","disabled"]))),128))])):C("",!0)],512))}}),J={name:"Option"},P=f({...J,props:{value:{},label:{},selectedValue:{},disabled:{type:Boolean}},emits:["select"],setup(d,{emit:t}){const e=d,a=t,l=x(()=>Array.isArray(e.selectedValue)?e.selectedValue.includes(e.value):e.value===e.selectedValue);function o(){e.disabled||(console.log(e.value),a("select",e.value))}return(n,h)=>(s(),u("li",{onClick:o,style:F({padding:"8px",background:l.value?"#eee":"#fff",color:d.disabled?"#aaa":"#000",cursor:d.disabled?"not-allowed":"pointer"})},[R(n.$slots,"default",{},()=>[B(b(d.label),1)])],4))}}),Q={class:"demo-block"},X={class:"demo-result"},Y={name:"SelectBase"},Z=f({...Y,setup(d){const t=m(""),e=[{label:"苹果",value:"apple"},{label:"香蕉",value:"banana"},{label:"橙子",value:"orange"},{label:"葡萄",value:"grape"}];return(a,l)=>(s(),u("div",Q,[l[1]||(l[1]=i("h2",{class:"demo-title"},"基础用法",-1)),v(_(y),{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=o=>t.value=o),options:e},null,8,["modelValue"]),i("div",X,"选中值: "+b(t.value),1)]))}}),ee=g(Z,[["__scopeId","data-v-5c5f85ba"]]),le={class:"demo-block"},ne={class:"demo-result"},te={name:"SelectMultiple"},ae=f({...te,setup(d){const t=m([]),e=[{label:"苹果",value:"apple"},{label:"香蕉",value:"banana"},{label:"橙子",value:"orange"},{label:"葡萄",value:"grape"}];return(a,l)=>(s(),u("div",le,[l[1]||(l[1]=i("h2",{class:"demo-title"},"多选模式",-1)),v(_(y),{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=o=>t.value=o),options:e,multiple:""},null,8,["modelValue"]),i("div",ne,"选中值: "+b(t.value),1)]))}}),oe=g(ae,[["__scopeId","data-v-e33b7c18"]]),re={class:"demo-block"},se={class:"demo-result"},ue={name:"SelectDisabled"},ie=f({...ue,setup(d){const t=m(""),e=[{label:"苹果",value:"apple"},{label:"香蕉",value:"banana",disabled:!0},{label:"橙子",value:"orange"},{label:"西瓜",value:"watermelon"},{label:"菠萝",value:"pineapple"}];return(a,l)=>(s(),u("div",re,[l[1]||(l[1]=i("h2",{class:"demo-title"},"禁用状态",-1)),v(_(y),{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=o=>t.value=o),options:e},null,8,["modelValue"]),i("div",se,"选中值: "+b(t.value),1)]))}}),ce=g(ie,[["__scopeId","data-v-1810a828"]]),de={class:"demo-block"},pe={class:"demo-result"},me={name:"SelectSearch"},ve=f({...me,setup(d){const t=m(""),e=[{label:"苹果",value:"apple"},{label:"香蕉",value:"banana"},{label:"橙子",value:"orange"},{label:"葡萄",value:"grape"},{label:"西瓜",value:"watermelon"},{label:"菠萝",value:"pineapple"}];return(a,l)=>(s(),u("div",de,[l[1]||(l[1]=i("h2",{class:"demo-title"},"搜索功能",-1)),v(_(y),{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=o=>t.value=o),options:e},null,8,["modelValue"]),i("div",pe,"选中值: "+b(t.value),1)]))}}),be=g(ve,[["__scopeId","data-v-2374af1a"]]),fe=`<template>\r
  <div class="demo-block">\r
    <h2 class="demo-title">基础用法</h2>\r
    <Select v-model="singleValue" :options="options" />\r
    <div class="demo-result">选中值: {{ singleValue }}</div>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
import { Select } from '../../lib'\r
const singleValue = ref('')\r
const options = [\r
  { label: '苹果', value: 'apple' },\r
  { label: '香蕉', value: 'banana' },\r
  { label: '橙子', value: 'orange' },\r
  { label: '葡萄', value: 'grape' },\r
]\r
<\/script>\r
\r
<script lang="ts">\r
  export default {\r
    name: 'SelectBase'\r
  }\r
<\/script>\r
\r
<style scoped>\r
.demo-block {\r
  margin-bottom: 16px;\r
}\r
.demo-result {\r
  margin-top: 8px;\r
  font-family: monospace;\r
  color: #059669;\r
}\r
</style>\r
`,_e=`<template>\r
  <div class="demo-block">\r
    <h2 class="demo-title">多选模式</h2>\r
    <Select v-model="multiValue" :options="options" multiple />\r
    <div class="demo-result">选中值: {{ multiValue }}</div>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
import { Select } from '../../lib'\r
const multiValue = ref<string[]>([])\r
const options = [\r
  { label: '苹果', value: 'apple' },\r
  { label: '香蕉', value: 'banana' },\r
  { label: '橙子', value: 'orange' },\r
  { label: '葡萄', value: 'grape' }\r
]\r
<\/script>\r
\r
<script lang="ts">\r
  export default {\r
    name: 'SelectMultiple'\r
  }\r
<\/script>\r
\r
<style scoped>\r
.demo-block {\r
  margin-bottom: 16px;\r
}\r
.demo-result {\r
  margin-top: 8px;\r
  font-family: monospace;\r
  color: #059669;\r
}\r
</style>\r
`,ge=`<template>\r
  <div class="demo-block">\r
    <h2 class="demo-title">禁用状态</h2>\r
    <Select v-model="value" :options="optionsWithDisabled" />\r
    <div class="demo-result">选中值: {{ value }}</div>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
import { Select } from '../../lib'\r
const value = ref('')\r
const optionsWithDisabled = [\r
  { label: '苹果', value: 'apple' },\r
  { label: '香蕉', value: 'banana', disabled: true },\r
  { label: '橙子', value: 'orange' },\r
  { label: '西瓜', value: 'watermelon' },\r
  { label: '菠萝', value: 'pineapple' }\r
]\r
<\/script>\r
\r
<script lang="ts">\r
  export default {\r
    name: 'SelectDisabled'\r
  }\r
<\/script>\r
\r
<style scoped>\r
.demo-block {\r
  margin-bottom: 16px;\r
}\r
.demo-result {\r
  margin-top: 8px;\r
  font-family: monospace;\r
  color: #059669;\r
}\r
</style>\r
`,Se=`<template>\r
  <div class="demo-block">\r
    <h2 class="demo-title">搜索功能</h2>\r
    <Select v-model="value" :options="options" />\r
    <div class="demo-result">选中值: {{ value }}</div>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
import { Select } from '../../lib'\r
const value = ref('')\r
const options = [\r
  { label: '苹果', value: 'apple' },\r
  { label: '香蕉', value: 'banana' },\r
  { label: '橙子', value: 'orange' },\r
  { label: '葡萄', value: 'grape' },\r
  { label: '西瓜', value: 'watermelon' },\r
  { label: '菠萝', value: 'pineapple' }\r
]\r
<\/script>\r
\r
\r
<script lang="ts">\r
  export default {\r
    name: 'SelectSearch'\r
  }\r
<\/script>\r
<style scoped>\r
.demo-block {\r
  margin-bottom: 16px;\r
}\r
.demo-result {\r
  margin-top: 8px;\r
  font-family: monospace;\r
  color: #059669;\r
}\r
</style>\r
`,xe={name:"SelectDemo",components:{Demo:I},setup(){return{SelectBase:ee,SelectMultiple:oe,SelectDisabled:ce,SelectSearch:be,selectBaseSource:fe,selectMultipleSource:_e,selectDisabledSource:ge,selectSearchSource:Se}}};function ye(d,t,e,a,l,o){const n=G("Demo");return s(),u("div",null,[t[0]||(t[0]=i("h1",null,"Select 选择器组件示例",-1)),v(n,{component:a.SelectBase,sourceCode:a.selectBaseSource},null,8,["component","sourceCode"]),v(n,{component:a.SelectMultiple,sourceCode:a.selectMultipleSource},null,8,["component","sourceCode"]),v(n,{component:a.SelectDisabled,sourceCode:a.selectDisabledSource},null,8,["component","sourceCode"]),v(n,{component:a.SelectSearch,sourceCode:a.selectSearchSource},null,8,["component","sourceCode"])])}const Ce=g(xe,[["render",ye]]);export{Ce as default};
