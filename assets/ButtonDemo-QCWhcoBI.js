import{B as f,D as _}from"./Demo-DJ0aKjG9.js";import{_ as l,e as d,c as u,o as i,a as m,f as o,w as r,b as s,F as b}from"./index-D4wJtrRX.js";const v={components:{Button:f}},$={class:"demo-block"};function x(a,t,c,e,p,B){const n=d("Button");return i(),u("div",$,[t[3]||(t[3]=m("h2",{class:"demo-title"},"基础按钮",-1)),o(n,{level:"primary"},{default:r(()=>[...t[0]||(t[0]=[s("默认按钮",-1)])]),_:1}),o(n,{level:"main"},{default:r(()=>[...t[1]||(t[1]=[s("主要按钮",-1)])]),_:1}),o(n,{level:"danger"},{default:r(()=>[...t[2]||(t[2]=[s("危险按钮",-1)])]),_:1})])}const k=l(v,[["render",x]]),g={components:{Button:f}},C={class:"demo-block"};function S(a,t,c,e,p,B){const n=d("Button");return i(),u("div",C,[t[3]||(t[3]=m("h2",{class:"demo-title"},"链接按钮",-1)),o(n,{theme:"link",level:"main"},{default:r(()=>[...t[0]||(t[0]=[s("主要链接按钮",-1)])]),_:1}),o(n,{theme:"link"},{default:r(()=>[...t[1]||(t[1]=[s("普通链接按钮",-1)])]),_:1}),o(n,{theme:"link",level:"danger"},{default:r(()=>[...t[2]||(t[2]=[s("危险链接按钮",-1)])]),_:1})])}const z=l(g,[["render",S]]),h={components:{Button:f}},D={class:"demo-block"};function w(a,t,c,e,p,B){const n=d("Button");return i(),u("div",D,[t[3]||(t[3]=m("h2",{class:"demo-title"},"文字按钮",-1)),o(n,{theme:"text",level:"main"},{default:r(()=>[...t[0]||(t[0]=[s("主要文字按钮",-1)])]),_:1}),o(n,{theme:"text"},{default:r(()=>[...t[1]||(t[1]=[s("普通文字按钮",-1)])]),_:1}),o(n,{theme:"text",level:"danger"},{default:r(()=>[...t[2]||(t[2]=[s("危险文字按钮",-1)])]),_:1})])}const L=l(h,[["render",w]]),N={components:{Button:f}},V={class:"demo-block"};function y(a,t,c,e,p,B){const n=d("Button");return i(),u("div",V,[t[3]||(t[3]=m("h2",{class:"demo-title"},"禁用按钮",-1)),o(n,{disabled:""},{default:r(()=>[...t[0]||(t[0]=[s("禁用按钮",-1)])]),_:1}),o(n,{theme:"link",disabled:""},{default:r(()=>[...t[1]||(t[1]=[s("禁用链接按钮",-1)])]),_:1}),o(n,{theme:"text",disabled:""},{default:r(()=>[...t[2]||(t[2]=[s("禁用按钮",-1)])]),_:1})])}const F=l(N,[["render",y]]),W={components:{Button:f}},E={class:"demo-block"};function T(a,t,c,e,p,B){const n=d("Button");return i(),u("div",E,[t[2]||(t[2]=m("h2",{class:"demo-title"},"加载按钮",-1)),o(n,{loading:""},{default:r(()=>[...t[0]||(t[0]=[s("加载中",-1)])]),_:1}),o(n,null,{default:r(()=>[...t[1]||(t[1]=[s("加载完毕",-1)])]),_:1})])}const j=l(W,[["render",T]]),q={components:{Button:f}},A={class:"demo-block"};function G(a,t,c,e,p,B){const n=d("Button");return i(),u("div",A,[t[3]||(t[3]=m("h2",{class:"demo-title"},"不同尺寸",-1)),o(n,{size:"big",theme:"text"},{default:r(()=>[...t[0]||(t[0]=[s("大大大",-1)])]),_:1}),o(n,{theme:"text"},{default:r(()=>[...t[1]||(t[1]=[s("普普通",-1)])]),_:1}),o(n,{size:"small",theme:"text"},{default:r(()=>[...t[2]||(t[2]=[s("小小小",-1)])]),_:1})])}const H=l(q,[["render",G]]),I=`\r
<template>\r
  <div class="demo-block">\r
    <h2 class="demo-title">基础按钮</h2>\r
    <Button level="primary">默认按钮</Button>\r
    <Button level="main">主要按钮</Button>\r
    <Button level="danger">危险按钮</Button>\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
    import {Button} from '../../lib';\r
    export default{\r
      components:{Button }\r
    }\r
<\/script>`,J=`\r
<template>\r
  <div class="demo-block">\r
    <h2 class="demo-title">链接按钮</h2>\r
    <Button theme="link" level="main">主要链接按钮</Button>\r
    <Button theme="link">普通链接按钮</Button>\r
    <Button theme="link" level="danger">危险链接按钮</Button>\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
    import {Button} from '../../lib';\r
    export default{\r
      components:{Button }\r
    }\r
<\/script>`,K=`<template>\r
  <div class="demo-block">\r
      <h2 class="demo-title">文字按钮</h2>\r
      <Button theme="text" level="main">主要文字按钮</Button>\r
      <Button theme="text">普通文字按钮</Button>\r
      <Button theme="text" level="danger">危险文字按钮</Button>\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
    import {Button} from '../../lib';\r
    export default{\r
      components:{Button }\r
    }\r
<\/script>`,M=`\r
<template>\r
  <div class="demo-block">\r
    <h2 class="demo-title">禁用按钮</h2>\r
    <Button disabled>禁用按钮</Button>\r
    <Button theme="link" disabled>禁用链接按钮</Button>\r
    <Button theme="text" disabled>禁用按钮</Button>\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
    import {Button} from '../../lib';\r
    export default{\r
      components:{Button }\r
    }\r
<\/script>`,O=`\r
<template>\r
  <div class="demo-block">\r
    <h2 class="demo-title">加载按钮</h2>\r
    <Button loading>加载中</Button>\r
    <Button>加载完毕</Button>\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
    import {Button} from '../../lib';\r
    export default{\r
      components:{ Button }\r
    }\r
<\/script>`,P=`\r
<template>\r
  <div class="demo-block">\r
    <h2 class="demo-title">不同尺寸</h2>\r
      <Button size="big" theme="text">大大大</Button>\r
      <Button theme="text">普普通</Button>\r
      <Button size="small" theme="text">小小小</Button>\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
    import {Button} from '../../lib';\r
    export default{\r
      components:{Button }\r
    }\r
<\/script>`,Q={components:{Demo:_},setup(){return{BasicButtons:k,LinkButtons:z,WordButtons:L,DisabledButtons:F,LoadingButtons:j,SizeButtons:H,basicSource:I,linkSource:J,wordSource:K,disabledSource:M,loadingSource:O,sizeSource:P}}};function R(a,t,c,e,p,B){const n=d("Demo");return i(),u(b,null,[t[0]||(t[0]=m("h1",null,"Button 组件示例",-1)),o(n,{component:e.BasicButtons,sourceCode:e.basicSource},null,8,["component","sourceCode"]),o(n,{component:e.LinkButtons,sourceCode:e.linkSource},null,8,["component","sourceCode"]),o(n,{component:e.WordButtons,sourceCode:e.wordSource},null,8,["component","sourceCode"]),o(n,{component:e.DisabledButtons,sourceCode:e.disabledSource},null,8,["component","sourceCode"]),o(n,{component:e.LoadingButtons,sourceCode:e.loadingSource},null,8,["component","sourceCode"]),o(n,{component:e.SizeButtons,sourceCode:e.sizeSource},null,8,["component","sourceCode"])],64)}const Y=l(Q,[["render",R]]);export{Y as default};
