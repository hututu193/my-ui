import{D as w}from"./Demo-DJ0aKjG9.js";import{_ as l,c,o as i,a,n as S,r as f,e as p,f as s}from"./index-D4wJtrRX.js";const b={props:{value:Boolean},setup(t,o){return{toggle:()=>{o.emit("update:value",!t.value)}}}};function v(t,o,r,n,m,u){return i(),c("button",{class:S(["gulu-switch",{"gulu-checked":r.value}]),onClick:o[0]||(o[0]=(...e)=>n.toggle&&n.toggle(...e))},[...o[1]||(o[1]=[a("span",null,null,-1)])],2)}const h=l(b,[["render",v]]),_={name:"Switch1Demo",components:{Switch:h},setup(){return{bool:f(!1)}}},D={class:"demo-block"};function g(t,o,r,n,m,u){const e=p("Switch");return i(),c("div",D,[o[1]||(o[1]=a("h2",{class:"demo-title"},"常规用法",-1)),s(e,{value:n.bool,"onUpdate:value":o[0]||(o[0]=d=>n.bool=d)},null,8,["value"])])}const $=l(_,[["render",g]]),k={name:"Switch2Demo",components:{Switch:h},setup(){return{bool:f(!1)}}},x={class:"demo-block"};function C(t,o,r,n,m,u){const e=p("Switch");return i(),c("div",x,[o[1]||(o[1]=a("h2",{class:"demo-title"},"支持 disabled",-1)),s(e,{value:n.bool,"onUpdate:value":o[0]||(o[0]=d=>n.bool=d),disabled:""},null,8,["value"])])}const B=l(k,[["render",C]]),N=`<template>\r
  <div class="demo-block">\r
    <h2 class="demo-title">常规用法</h2>\r
    <Switch v-model:value="bool" />\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
import {Switch} from '../../lib'\r
import { ref } from 'vue'\r
export default {\r
  name: 'Switch1Demo',\r
  components: {\r
    Switch,\r
  },\r
  setup() {\r
    const bool = ref(false)\r
    return {\r
      bool\r
    }\r
  }\r
}\r
<\/script>`,U=`<template>\r
  <div class="demo-block">\r
    <h2 class="demo-title">支持 disabled</h2>\r
    <Switch v-model:value="bool" disabled />\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
import {Switch} from '../../lib'\r
import { ref } from 'vue'\r
export default {\r
  name: 'Switch2Demo',\r
  components: {\r
    Switch,\r
  },\r
  setup() {\r
    const bool = ref(false)\r
    return {\r
      bool\r
    }\r
  }\r
}\r
<\/script>`,V={name:"SwitchDemo",components:{Demo:w},setup(){return{Switch1Demo:$,Switch2Demo:B,switch1Source:N,switch2Source:U}}};function z(t,o,r,n,m,u){const e=p("Demo");return i(),c("div",null,[o[0]||(o[0]=a("h1",null,"Switch 组件示例",-1)),s(e,{component:n.Switch1Demo,sourceCode:n.switch1Source},null,8,["component","sourceCode"]),s(e,{component:n.Switch2Demo,sourceCode:n.switch2Source},null,8,["component","sourceCode"])])}const q=l(V,[["render",z]]);export{q as default};
