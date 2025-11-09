import{D as y}from"./Demo-DJ0aKjG9.js";import{v as x,r as m,m as h,c as u,x as $,h as V,y as S,a as o,n as f,t as g,o as d,_ as i,e as v,f as l,l as b}from"./index-D4wJtrRX.js";const k={class:"gulu-input-wrapper"},C=["placeholder","disabled","readonly"],D=x({__name:"Input",props:{modelValue:String,placeholder:String,disabled:Boolean,readonly:Boolean,status:{type:String,default:""},message:{type:String,default:""}},emits:["update:modelValue"],setup(t,{emit:e}){const s=t,n=e,a=m(s.modelValue||"");h(()=>s.modelValue,r=>{a.value=r||""});function c(r){n("update:modelValue",r.target.value)}return(r,p)=>(d(),u("div",k,[$(o("input",{"onUpdate:modelValue":p[0]||(p[0]=_=>a.value=_),placeholder:t.placeholder,disabled:t.disabled,readonly:t.readonly,class:f(["gulu-input",t.status&&`gulu-input--${t.status}`,t.disabled&&"gulu-input--disabled"]),onInput:c},null,42,C),[[S,a.value]]),t.message?(d(),u("p",{key:0,class:f(["gulu-input-message",`gulu-input-message--${t.status}`])},g(t.message),3)):V("",!0)]))}}),I=i(D,[["__scopeId","data-v-b929da87"]]),w={name:"InputBasic.demo.vue",components:{Input:I},setup(){return{value:m("")}}},B={class:"demo-block"},R={class:"demo-description"};function N(t,e,s,n,a,c){const r=v("Input");return d(),u("div",B,[e[1]||(e[1]=o("h2",{class:"demo-title"},"基础输入框",-1)),o("p",R,"使用v-model进行双向绑定: "+g(n.value),1),l(r,{modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=p=>n.value=p),placeholder:"请输入内容"},null,8,["modelValue"])])}const U=i(w,[["render",N]]),z={name:"InputStatus.demo.vue",components:{Input:I},setup(){const t=m(""),e=b(()=>t.value===""?"error":t.value.length<3?"warning":"success"),s=b(()=>{switch(e.value){case"error":return"输入不能为空";case"warning":return"长度太短（至少3个字符）";case"success":return"输入格式正确 ✅";default:return""}});return{value:t,status:e,message:s}}},E={class:"demo-block"},M={key:0,class:"status-info"};function T(t,e,s,n,a,c){const r=v("Input");return d(),u("div",E,[e[1]||(e[1]=o("h2",{class:"demo-title"},"动态状态输入框",-1)),e[2]||(e[2]=o("p",{class:"demo-description"},"根据输入内容动态切换状态：",-1)),l(r,{modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=p=>n.value=p),class:f(`gulu-input--${n.status}`),placeholder:"请输入用户名"},null,8,["modelValue","class"]),n.status?(d(),u("div",M,[o("p",{class:f(`${n.status}-text`)},g(n.message),3)])):V("",!0)])}const j=i(z,[["render",T],["__scopeId","data-v-559ed7a9"]]),q={name:"InputDisabled.demo.vue",components:{Input:I},setup(){return{disabledValue:m("这是禁用的状态")}}},A={class:"demo-block"};function F(t,e,s,n,a,c){const r=v("Input");return d(),u("div",A,[e[0]||(e[0]=o("h2",{class:"demo-title"},"禁用状态",-1)),e[1]||(e[1]=o("p",{class:"demo-description"},"disabled 禁用属性输入框",-1)),l(r,{modelValue:n.disabledValue,disabled:"",placeholder:"禁用状态"},null,8,["modelValue"])])}const G=i(q,[["render",F]]),H={name:"InputReadonly.demo.vue",components:{Input:I},setup(){return{readonlyValue:m("这是只读内容")}}},J={class:"demo-block"};function K(t,e,s,n,a,c){const r=v("Input");return d(),u("div",J,[e[0]||(e[0]=o("h2",{class:"demo-title"},"只读属性",-1)),e[1]||(e[1]=o("p",{class:"demo-description"},"readonly只读属性输入框",-1)),l(r,{readonly:"",modelValue:n.readonlyValue},null,8,["modelValue"])])}const L=i(H,[["render",K]]),O=`<template>\r
  <div class="demo-block">\r
    <h2 class="demo-title">基础输入框</h2>\r
    <p class="demo-description">使用v-model进行双向绑定: {{ value }}</p>\r
    <Input v-model="value" placeholder="请输入内容"/>\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
  import {Input} from '../../lib';\r
  import { ref } from 'vue';\r
  export default{\r
    name: 'InputBasic.demo.vue',\r
    components: {Input},\r
    setup(){\r
      const value = ref('')\r
      return{\r
        value,\r
      }\r
   }\r
  }\r
<\/script>\r
`,P=`<template>\r
  <div class="demo-block">\r
    <h2 class="demo-title">动态状态输入框</h2>\r
      <p class="demo-description">根据输入内容动态切换状态：</p>\r
      <Input\r
      v-model="value"\r
      :class="\`gulu-input--\${status}\`"\r
      placeholder="请输入用户名"\r
      />\r
      <div class="status-info" v-if="status">\r
        <p :class="\`\${status}-text\`">{{ message }}</p>\r
      </div>\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
\r
import { ref, computed } from 'vue'\r
import {Input} from '../../lib'\r
export default{\r
  name: 'InputStatus.demo.vue',\r
  components:{Input},\r
  setup() {\r
    const value = ref('')\r
    const status = computed(() => {\r
      if (value.value === '') return 'error'\r
      if (value.value.length < 3) return 'warning'\r
      return 'success'\r
    })\r
    const message = computed(() => {\r
      switch (status.value) {\r
        case 'error':\r
          return '输入不能为空'\r
        case 'warning':\r
          return '长度太短（至少3个字符）'\r
        case 'success':\r
          return '输入格式正确 ✅'\r
        default:\r
          return ''\r
      }\r
      })\r
    return{value, status, message}\r
  }\r
}\r
<\/script>\r
\r
<style scoped lang="scss">\r
.demo-section {\r
  margin-top: 20px;\r
}\r
\r
.status-info {\r
  margin-top: 8px;\r
  font-size: 14px;\r
}\r
\r
.error-text {\r
  color: #f56c6c;\r
}\r
\r
.warning-text {\r
  color: #e6a23c;\r
}\r
\r
.success-text {\r
  color: #67c23a;\r
}\r
p{\r
  padding: 4px 0;\r
    }\r
</style>\r
`,Q=`<template>\r
  <div class="demo-block">        \r
    <h2 class="demo-title">禁用状态</h2>\r
    <p class="demo-description">disabled 禁用属性输入框</p>\r
    <Input :modelValue="disabledValue" disabled placeholder="禁用状态"/>\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
  import {Input} from '../../lib';\r
  import { ref } from 'vue';\r
  export default {\r
    name: 'InputDisabled.demo.vue',\r
    components: {Input},\r
    setup(){\r
      const disabledValue = ref('这是禁用的状态')\r
      return {disabledValue,}\r
    }\r
  }\r
<\/script>`,W=`<template>\r
  <div class="demo-block">\r
    <h2 class="demo-title">只读属性</h2>\r
    <p class="demo-description">readonly只读属性输入框</p>\r
    <Input readonly :modelValue="readonlyValue"/>\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
  import { Input } from '../../lib';\r
  import { ref } from 'vue';\r
  export default {\r
  name: 'InputReadonly.demo.vue',\r
  components: {Input},\r
  setup(){            \r
    const readonlyValue = ref('这是只读内容')\r
    return {readonlyValue}\r
  }\r
  }\r
<\/script>`,X={name:"InputDemo",components:{Demo:y},setup(){return{InputBasic:U,InputDisabled:G,InputReadonly:L,InputStatus:j,basicSource:O,statusSource:P,disabledSource:Q,redonlySource:W}}};function Y(t,e,s,n,a,c){const r=v("Demo");return d(),u("div",null,[e[0]||(e[0]=o("h1",null,"Input 组件示例",-1)),l(r,{component:n.InputBasic,sourceCode:n.basicSource},null,8,["component","sourceCode"]),l(r,{component:n.InputDisabled,sourceCode:n.disabledSource},null,8,["component","sourceCode"]),l(r,{component:n.InputReadonly,sourceCode:n.redonlySource},null,8,["component","sourceCode"]),l(r,{component:n.InputStatus,sourceCode:n.statusSource},null,8,["component","sourceCode"])])}const ne=i(X,[["render",Y]]);export{ne as default};
