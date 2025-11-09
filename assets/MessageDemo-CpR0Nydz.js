import{D as k}from"./Demo-DJ0aKjG9.js";import{v as f,r as v,p as y,g as M,o as p,w as C,c as m,h as B,n as L,t as I,A as T,_ as g,k as S,B as b,a as c,f as w,e as D}from"./index-D4wJtrRX.js";const E=f({__name:"Message",props:{message:{},type:{},duration:{}},emits:["destroy"],setup(i,{emit:o}){const s=i,e=o,r=v(!1);return y(()=>{r.value=!0;const t=s.duration??3e3;t>0&&setTimeout(()=>{r.value=!1,setTimeout(()=>e("destroy"),300)},t)}),(t,a)=>(p(),M(T,{name:"fade"},{default:C(()=>[r.value?(p(),m("div",{key:0,class:L(["message",i.type])},I(i.message),3)):B("",!0)]),_:1}))}}),$=g(E,[["__scopeId","data-v-caaa4cc1"]]),x={},d={"top-left":[],"top-right":[],"bottom-left":[],"bottom-right":[],"top-center":[]};function l(i,o,s,e="top-center"){if(!x[e]){const n=document.createElement("div");n.style.position="fixed",n.style.zIndex="9999",n.style.display="flex",n.style.flexDirection="column",n.style.pointerEvents="none",n.style.gap="8px",e.includes("top")?n.style.top="20px":n.style.bottom="20px",e==="top-center"?(n.style.left="50%",n.style.transform="translateX(-50%)",n.style.alignItems="center"):e.includes("left")?n.style.left="20px":n.style.right="20px",document.body.appendChild(n),x[e]=n}d[e]||(d[e]=[]);const r=x[e];if(!r)return()=>{};const t=document.createElement("div");r.appendChild(t);const a=S($,{message:i,type:o,duration:s,onDestroy:()=>{b(null,t),t.remove();const n=d[e];if(n){const u=n.findIndex(h=>h.wrapper===t);u>-1&&n.splice(u,1),_(e)}}});return b(a,t),requestAnimationFrame(()=>{const n=t.offsetHeight,u=d[e];u&&(u.push({wrapper:t,height:n}),_(e))}),()=>{b(null,t),t.remove();const n=d[e];if(n){const u=n.findIndex(h=>h.wrapper===t);u>-1&&(n.splice(u,1),_(e))}}}function _(i){const o=d[i];if(!o)return;let s=0;if(i.startsWith("bottom"))for(let e=o.length-1;e>=0;e--){const r=o[e],{wrapper:t,height:a}=r;t.style.transform=`translateY(-${s}px)`,s+=a+8}else o.forEach(e=>{if(!e)return;const{wrapper:r,height:t}=e;r.style.transform=`translateY(${s}px)`,s+=t+8})}const q={class:"demo-block"},P={name:"MessageBase"},R=f({...P,setup(i){const o=()=>l("这是普通提示"),s=()=>l("操作成功","success",2e3),e=()=>l("警告警告","warning",4e3),r=()=>l("错误提示","error",5e3);return(t,a)=>(p(),m("div",q,[a[0]||(a[0]=c("h2",{class:"demo-title"},"基础提示",-1)),c("div",{class:"btn-group"},[c("button",{onClick:o},"普通提示"),c("button",{onClick:s},"成功"),c("button",{onClick:e},"警告"),c("button",{onClick:r},"错误")])]))}}),z=g(R,[["__scopeId","data-v-3956a56d"]]),W={class:"demo-block"},N={name:"MessageLoading"},V=f({...N,setup(i){const o=()=>{const s=l("正在加载中...","loading",0);setTimeout(()=>{s(),l("加载成功","success",2e3)},3e3)};return(s,e)=>(p(),m("div",W,[e[0]||(e[0]=c("h2",{class:"demo-title"},"加载提示",-1)),c("button",{onClick:o},"加载中 → 自动变成功")]))}}),A=g(V,[["__scopeId","data-v-46965b68"]]),Y={class:"demo-block"},F={name:"MessagePosition"},H=f({...F,setup(i){const o=()=>l("左上角提示","info",3e3,"top-left"),s=()=>l("右上角提示","info",3e3,"top-right"),e=()=>l("左下角提示","info",3e3,"bottom-left"),r=()=>l("右下角提示","info",3e3,"bottom-right");return(t,a)=>(p(),m("div",Y,[a[0]||(a[0]=c("h2",{class:"demo-title"},"自定义位置（角落提示）",-1)),c("div",{class:"btn-group"},[c("button",{onClick:o},"左上角"),c("button",{onClick:s},"右上角"),c("button",{onClick:e},"左下角"),c("button",{onClick:r},"右下角")])]))}}),X=g(H,[["__scopeId","data-v-29106e7b"]]),j=`<template>\r
  <div class="demo-block">\r
    <h2 class="demo-title">基础提示</h2>\r
    <div class="btn-group">\r
      <button @click="showInfo">普通提示</button>\r
      <button @click="showSuccess">成功</button>\r
      <button @click="showWarning">警告</button>\r
      <button @click="showError">错误</button>\r
    </div>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { showMessage } from './message'\r
const showInfo = () => showMessage('这是普通提示')\r
const showSuccess = () => showMessage('操作成功', 'success', 2000)\r
const showWarning = () => showMessage('警告警告', 'warning', 4000)\r
const showError = () => showMessage('错误提示', 'error', 5000)\r
<\/script>\r
\r
<script lang="ts">\r
  export default{\r
    name: 'MessageBase'\r
  }\r
<\/script>\r
\r
<style scoped>\r
.demo-block {\r
  display: flex;\r
  flex-direction: column;\r
  gap: 12px;\r
}\r
.btn-group {\r
  display: flex;\r
  flex-wrap: wrap;\r
  gap: 10px;\r
}\r
button {\r
  padding: 6px 14px;\r
  font-size: 16px;\r
  border-radius: 6px;\r
  background: #444;\r
  color: white;\r
  border: none;\r
  cursor: pointer;\r
}\r
button:hover {\r
  background: #555;\r
}\r
</style>\r
`,G=`<template>\r
  <div class="demo-block">\r
    <h2 class="demo-title">加载提示</h2>\r
    <button @click="showLoading">加载中 → 自动变成功</button>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { showMessage } from './message'\r
const showLoading = () => {\r
  const close = showMessage('正在加载中...', 'loading', 0)\r
  setTimeout(() => {\r
    close()\r
    showMessage('加载成功', 'success', 2000)\r
  }, 3000)\r
}\r
<\/script>\r
\r
<script lang="ts">\r
  export default{\r
    name: 'MessageLoading'\r
  }\r
<\/script>\r
\r
<style scoped>\r
.demo-block {\r
  display: flex;\r
  flex-direction: column;\r
  gap: 12px;\r
  align-items: flex-start; /* 添加这行，让内容左对齐 */\r
}\r
button {\r
  padding: 6px 14px;\r
  font-size: 16px;\r
  border-radius: 6px;\r
  background: #444;\r
  color: white;\r
  border: none;\r
  cursor: pointer;\r
}\r
button:hover {\r
  background: #555;\r
}\r
</style>\r
`,J=`<template>\r
  <div class="demo-block">\r
    <h2 class="demo-title">自定义位置（角落提示）</h2>\r
    <div class="btn-group">\r
      <button @click="showTopLeft">左上角</button>\r
      <button @click="showTopRight">右上角</button>\r
      <button @click="showBottomLeft">左下角</button>\r
      <button @click="showBottomRight">右下角</button>\r
    </div>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { showMessage } from './message'\r
const showTopLeft = () => showMessage('左上角提示', 'info', 3000, 'top-left')\r
const showTopRight = () => showMessage('右上角提示', 'info', 3000, 'top-right')\r
const showBottomLeft = () => showMessage('左下角提示', 'info', 3000, 'bottom-left')\r
const showBottomRight = () => showMessage('右下角提示', 'info', 3000, 'bottom-right')\r
<\/script>\r
\r
\r
<script lang="ts">\r
  export default{\r
    name: 'MessagePosition'\r
  }\r
<\/script>\r
\r
\r
<style scoped>\r
.demo-block {\r
  display: flex;\r
  flex-direction: column;\r
  gap: 12px;\r
}\r
.btn-group {\r
  display: flex;\r
  flex-wrap: wrap;\r
  gap: 10px;\r
}\r
button {\r
  padding: 6px 14px;\r
   font-size: 16px;\r
  border-radius: 6px;\r
  background: #444;\r
  color: white;\r
  border: none;\r
  cursor: pointer;\r
}\r
button:hover {\r
  background: #555;\r
}\r
</style>\r
`,K={name:"MessageDemo",components:{Demo:k},setup(){return{MessageBase:z,MessageLoading:A,MessagePosition:X,messageBaseSource:j,messageLoadingSource:G,messagePositionSource:J}}};function O(i,o,s,e,r,t){const a=D("Demo");return p(),m("div",null,[o[0]||(o[0]=c("h1",null,"Message 消息提示组件示例",-1)),w(a,{component:e.MessageBase,sourceCode:e.messageBaseSource},null,8,["component","sourceCode"]),w(a,{component:e.MessageLoading,sourceCode:e.messageLoadingSource},null,8,["component","sourceCode"]),w(a,{component:e.MessagePosition,sourceCode:e.messagePositionSource},null,8,["component","sourceCode"])])}const ee=g(K,[["render",O]]);export{ee as default};
