import{D as B}from"./Demo-DJ0aKjG9.js";import{_ as $,c as p,o as l,i as w,r as x,l as k,m as S,p as E,q as N,a as _,F as y,s as V,g as q,u as R,n as F,b as v,h as I,t as U,e as g,f as i,w as T}from"./index-D4wJtrRX.js";const z={props:{title:{type:String,required:!0},disabled:{type:Boolean,required:!1}}};function L(o,e,r,t,a,d){return l(),p("div",null,[w(o.$slots,"default")])}const C=$(z,[["render",L]]),M={props:{selected:{type:String}},setup(o,e){const r=e.slots.default?.()?e.slots.default():[],t=x(),a=x(),d=x(),n=k(()=>r.map((u,f)=>{if(!u.props)return console.warn(`Tab at index ${f} has no props`),{title:`Tab ${f}`,disabled:!1};const b=u.props.disabled!==void 0;return{title:u.props.title,disabled:b}}));S([()=>o.selected,n],([s,u])=>{const f=u.find(b=>b.title===s);if(f&&f.disabled){const b=u.find(h=>!h.disabled);b&&e.emit("update:selected",b.title)}},{immediate:!0}),E(()=>{N(()=>{if(t.value&&a.value&&d.value){const{width:s}=t.value.getBoundingClientRect(),{left:u}=d.value.getBoundingClientRect(),{left:f}=t.value.getBoundingClientRect(),b=f-u;a.value.style.left=b+"px",a.value.style.width=s+"px"}})});const m=k(()=>r.find(s=>s.props?.title===o.selected));r.forEach(s=>{if(s.type!==C)throw new Error("Tabs子组件必须是Tab")});const c=r.map(s=>s.props?.title);return{current:m,defaults:r,titles:c,select:s=>{s.disabled||e.emit("update:selected",s.title)},selectedItem:t,indicator:a,container:d,tabData:n}}},j={class:"gulu-tabs"},A={class:"gulu-tabs-nav",ref:"container"},G=["onClick"],H={key:0,class:"gulu-tabs-nav-item-disabled-icon"},J={class:"gulu-tabs-nav-indicator",ref:"indicator"},K={class:"gulu-tabs-content"};function O(o,e,r,t,a,d){return l(),p("div",j,[_("div",A,[(l(!0),p(y,null,V(t.tabData,(n,m)=>(l(),p("div",{class:F(["gulu-tabs-nav-item",{selected:n.title===r.selected,"gulu-tabs-nav-item-disabled":n.disabled}]),ref_for:!0,ref:c=>{n.title===r.selected&&(t.selectedItem=c)},key:m,onClick:c=>t.select(n)},[v(U(n.title)+" ",1),n.disabled?(l(),p("span",H,"🚫")):I("",!0)],10,G))),128)),_("div",J,null,512)],512),_("div",K,[(l(),q(R(t.current),{class:"gulu-tabs-content-item",key:t.current&&t.current.props?t.current.props.title:"empty"}))])])}const D=$(M,[["render",O]]),P={components:{Tab:C,Tabs:D},setup(){return{x:x("导航1")}}},Q={class:"demo-block"};function W(o,e,r,t,a,d){const n=g("Tab"),m=g("Tabs");return l(),p("div",Q,[e[3]||(e[3]=_("h2",{class:"demo-title"},"基础用法",-1)),i(m,{selected:t.x,"onUpdate:selected":e[0]||(e[0]=c=>t.x=c)},{default:T(()=>[i(n,{title:"导航1"},{default:T(()=>[...e[1]||(e[1]=[v("内容1",-1)])]),_:1}),i(n,{title:"导航2"},{default:T(()=>[...e[2]||(e[2]=[v("内容2",-1)])]),_:1})]),_:1},8,["selected"])])}const X=$(P,[["render",W]]),Y={components:{Tab:C,Tabs:D},setup(){return{x:x("导航1")}}},Z={class:"demo-block"};function ee(o,e,r,t,a,d){const n=g("Tab"),m=g("Tabs");return l(),p("div",Z,[e[4]||(e[4]=_("h2",{class:"demo-title"},"带禁用功能的Tabs",-1)),i(m,{selected:t.x,"onUpdate:selected":e[0]||(e[0]=c=>t.x=c)},{default:T(()=>[i(n,{title:"导航1"},{default:T(()=>[...e[1]||(e[1]=[v("内容1",-1)])]),_:1}),i(n,{title:"导航2",disabled:""},{default:T(()=>[...e[2]||(e[2]=[v("这个标签被禁用了",-1)])]),_:1}),i(n,{title:"导航3"},{default:T(()=>[...e[3]||(e[3]=[v("内容3",-1)])]),_:1})]),_:1},8,["selected"])])}const te=$(Y,[["render",ee]]),ne=`<template>\r
  <div class="demo-block">\r
    <h2 class="demo-title">基础用法</h2>\r
    <Tabs v-model:selected="x">\r
      <Tab title="导航1">内容1</Tab>\r
      <Tab title="导航2">内容2</Tab>\r
    </Tabs>\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
  import {Tab} from '../../lib';\r
  import {Tabs} from '../../lib'\r
  import {ref} from 'vue'\r
  export default {\r
    components:{\r
      Tab,\r
      Tabs\r
    },\r
    setup(){\r
      const x = ref('导航1')\r
      return {x}\r
    }\r
  }\r
<\/script>`,se=`<template>\r
    <div class="demo-block">\r
      <h2 class="demo-title">带禁用功能的Tabs</h2>\r
      <Tabs v-model:selected="x">\r
        <Tab title="导航1">内容1</Tab>\r
        <Tab title="导航2" disabled>这个标签被禁用了</Tab>\r
        <Tab title="导航3">内容3</Tab>\r
      </Tabs>\r
    </div>\r
</template>\r
\r
<script lang="ts">\r
  import {Tab} from '../../lib';\r
  import {Tabs} from '../../lib'\r
  import {ref} from 'vue'\r
  export default {\r
    components:{\r
      Tab,\r
      Tabs\r
    },\r
    setup(){\r
      const x = ref('导航1')\r
      return {x}\r
    }\r
  }\r
<\/script>`,re={name:"SwitchDemo",components:{Demo:B},setup(){return{BasicTab:X,DisabledTab:te,basicTabSource:ne,disabledTabSource:se}}};function oe(o,e,r,t,a,d){const n=g("Demo");return l(),p(y,null,[e[0]||(e[0]=_("h1",null,"Tab 组件示例",-1)),i(n,{component:t.BasicTab,sourceCode:t.basicTabSource},null,8,["component","sourceCode"]),i(n,{component:t.DisabledTab,sourceCode:t.disabledTabSource},null,8,["component","sourceCode"])],64)}const de=$(re,[["render",oe]]);export{de as default};
