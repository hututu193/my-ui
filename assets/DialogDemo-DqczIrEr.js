import{B as D,D as S}from"./Demo-DJ0aKjG9.js";import{_ as k,e as u,g as x,h as y,o as f,a as r,i as w,f as l,w as s,b as a,T as _,r as b,c as v,j as $,k as B,t as N}from"./index-D4wJtrRX.js";const I={props:{visible:{type:Boolean,default:!1},closeOnClickOverlay:{type:Boolean,default:!0}},components:{Button:D},emits:["update:visible","ok","cancel"],setup(t,n){const i=()=>{n.emit("update:visible",!1)};return{close:i,onClickOverlay:()=>{t.closeOnClickOverlay&&i()},ok:()=>{n.emit("ok"),i()},cancel:()=>{n.emit("cancel"),i()}}}},T={class:"gulu-dialog-wrapper"},h={class:"gulu-dialog"};function F(t,n,i,o,d,p){const e=u("Button");return i.visible?(f(),x(_,{key:0,to:"body"},[r("div",{class:"gulu-dialog-overlay",onClick:n[0]||(n[0]=(...c)=>o.onClickOverlay&&o.onClickOverlay(...c))}),r("div",T,[r("div",h,[r("header",null,[w(t.$slots,"title"),r("span",{onClick:n[1]||(n[1]=(...c)=>o.close&&o.close(...c)),class:"gulu-dialog-close"})]),r("main",null,[w(t.$slots,"content")]),r("footer",null,[l(e,{level:"main",onClick:o.ok},{default:s(()=>[...n[2]||(n[2]=[a("OK",-1)])]),_:1},8,["onClick"]),l(e,{onClick:o.cancel},{default:s(()=>[...n[3]||(n[3]=[a("Cancel",-1)])]),_:1},8,["onClick"])])])])])):y("",!0)}const C=k(I,[["render",F]]),A={name:"ComponentBasicDemo",components:{Dialog:C,Button:D},setup(){return{showDialog:b(!1)}}},V={class:"demo-block"};function W(t,n,i,o,d,p){const e=u("Button"),c=u("Dialog");return f(),v("div",V,[n[5]||(n[5]=r("h2",{class:"demo-title"},"组件方式 - 基础对话框",-1)),l(e,{onClick:n[0]||(n[0]=m=>o.showDialog=!0)},{default:s(()=>[...n[2]||(n[2]=[a("打开对话框",-1)])]),_:1}),l(c,{visible:o.showDialog,"onUpdate:visible":n[1]||(n[1]=m=>o.showDialog=m)},{title:s(()=>[...n[3]||(n[3]=[a("提示信息",-1)])]),content:s(()=>[...n[4]||(n[4]=[r("p",null,"这是一个基础的对话框示例",-1)])]),_:1},8,["visible"])])}const U=k(A,[["render",W]]),E={name:"ComponentCustomDemo",components:{Dialog:C,Button:D},setup(){return{showDialog:b(!1)}}},j={class:"demo-block"};function z(t,n,i,o,d,p){const e=u("Button"),c=u("Dialog");return f(),v("div",j,[n[8]||(n[8]=r("h2",{class:"demo-title"},"组件方式 - 自定义内容",-1)),l(e,{onClick:n[0]||(n[0]=m=>o.showDialog=!0)},{default:s(()=>[...n[2]||(n[2]=[a("打开自定义对话框",-1)])]),_:1}),l(c,{visible:o.showDialog,"onUpdate:visible":n[1]||(n[1]=m=>o.showDialog=m)},{title:s(()=>[...n[3]||(n[3]=[r("strong",{style:{color:"#1890ff"}},"自定义标题",-1)])]),content:s(()=>[r("div",null,[n[5]||(n[5]=r("strong",null,"复杂内容区域",-1)),n[6]||(n[6]=r("p",null,"这里可以包含任何 Vue 组件",-1)),l(e,null,{default:s(()=>[...n[4]||(n[4]=[a("内部按钮示例",-1)])]),_:1}),n[7]||(n[7]=r("div",{style:{"margin-top":"8px"}},[r("input",{placeholder:"输入框示例"})],-1))])]),_:1},8,["visible"])])}const K=k(E,[["render",z]]),q={name:"ComponentNoOverlayDemo",components:{Dialog:C,Button:D},setup(){return{showDialog:b(!1)}}},G={class:"demo-block"};function H(t,n,i,o,d,p){const e=u("Button"),c=u("Dialog");return f(),v("div",G,[n[5]||(n[5]=r("h2",{class:"demo-title"},"组件方式 - 遮罩层是否关闭",-1)),n[6]||(n[6]=r("p",{class:"demo-description"},"通过closeOnClickOverlay设置遮罩层是否关闭 Dialog",-1)),l(e,{onClick:n[0]||(n[0]=m=>o.showDialog=!0)},{default:s(()=>[...n[2]||(n[2]=[a("打开对话框",-1)])]),_:1}),l(c,{visible:o.showDialog,"onUpdate:visible":n[1]||(n[1]=m=>o.showDialog=m),closeOnClickOverlay:!1},{title:s(()=>[...n[3]||(n[3]=[a("提示信息",-1)])]),content:s(()=>[...n[4]||(n[4]=[r("p",null,"这是一个基础的对话框示例",-1)])]),_:1},8,["visible"])])}const J=k(q,[["render",H]]),g=t=>{const{title:n,content:i,onOk:o,onCancel:d,closeOnClickOverlay:p=!0}=t,e=document.createElement("div");document.body.appendChild(e);const c=()=>{m.unmount(),e.remove()},m=$({render(){return B(C,{visible:!0,closeOnClickOverlay:p,"onUpdate:visible":O=>{O===!1&&c()},onOk:()=>{o?.(),c()},onCancel:()=>{d?.(),c()}},{title:()=>B("div",n),content:()=>B("div",i)})}});m.mount(e)},L={name:"FunctionBasicDemo",components:{Button:D},setup(){return{showInfo:()=>{g({title:"系统通知",content:"您的操作已成功完成！"})},showWarning:()=>{g({title:"温馨提示",content:"请确保您已保存所有更改。"})},showSuccess:()=>{g({title:"操作成功",content:"数据保存成功！"})}}}},M={class:"demo-block"};function P(t,n,i,o,d,p){const e=u("Button");return f(),v("div",M,[n[3]||(n[3]=r("h2",{class:"demo-title"},"函数方式 - 基础提示",-1)),l(e,{onClick:o.showInfo},{default:s(()=>[...n[0]||(n[0]=[a("信息提示",-1)])]),_:1},8,["onClick"]),l(e,{onClick:o.showSuccess},{default:s(()=>[...n[1]||(n[1]=[a("成功提示",-1)])]),_:1},8,["onClick"]),l(e,{onClick:o.showWarning,level:"danger"},{default:s(()=>[...n[2]||(n[2]=[a("警告提示",-1)])]),_:1},8,["onClick"])])}const Q=k(L,[["render",P]]),R={name:"FunctionCallbackDemo",components:{Button:D},setup(){const t=b("");return{feedback:t,confirmDelete:()=>{t.value="等待用户确认删除...",g({title:"确认删除",content:"删除后数据将无法恢复，确定要继续吗？",onOk:()=>{t.value="✅ 执行删除操作...",setTimeout(()=>{t.value="删除成功！"},1e3)},onCancel:()=>{t.value="❌ 用户取消了删除操作"}})},confirmSubmit:()=>{t.value="等待用户确认提交...",g({title:"提交确认",content:"请确认信息无误后提交",onOk:()=>{t.value="✅ 提交中...",setTimeout(()=>{t.value="提交成功！"},1500)},onCancel:()=>{t.value="❌ 取消提交，继续编辑"}})},confirmAsync:()=>{t.value="打开异步操作确认对话框...",g({title:"异步操作",content:"这个操作需要一些时间处理，确定要继续吗？",onOk:()=>{t.value=" 正在处理中，请稍候...",setTimeout(()=>{t.value="✅ 异步操作完成！"},3e3)},onCancel:()=>{t.value="❌ 用户取消了异步操作"}})}}}},X={class:"demo-block"},Y={class:"demo-actions"},Z={key:0,class:"demo-feedback"};function nn(t,n,i,o,d,p){const e=u("Button");return f(),v("div",X,[n[3]||(n[3]=r("h2",{class:"demo-title"},"函数方式 - 回调确认",-1)),r("div",Y,[l(e,{onClick:o.confirmDelete,level:"primary"},{default:s(()=>[...n[0]||(n[0]=[a("删除确认",-1)])]),_:1},8,["onClick"]),l(e,{onClick:o.confirmSubmit},{default:s(()=>[...n[1]||(n[1]=[a("提交确认",-1)])]),_:1},8,["onClick"]),l(e,{onClick:o.confirmAsync},{default:s(()=>[...n[2]||(n[2]=[a("异步操作",-1)])]),_:1},8,["onClick"])]),o.feedback?(f(),v("div",Z,N(o.feedback),1)):y("",!0)])}const on=k(R,[["render",nn],["__scopeId","data-v-f811188d"]]),tn=`<template>\r
  <div class="demo-block">\r
    <h2 class="demo-title">组件方式 - 基础对话框</h2>\r
    <Button @click="showDialog = true">打开对话框</Button>\r
    <Dialog v-model:visible="showDialog">\r
      <template v-slot:title>提示信息</template>\r
      <template v-slot:content>\r
        <p>这是一个基础的对话框示例</p>\r
      </template>\r
    </Dialog>\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
import {Dialog} from '../../lib'\r
import {Button} from '../../lib'\r
import { ref } from 'vue'\r
export default {\r
  name: 'ComponentBasicDemo',\r
  components: {\r
    Dialog,\r
    Button\r
  },\r
  setup() {\r
    const showDialog = ref(false)\r
    return { showDialog }\r
  }\r
}\r
<\/script>`,en=`<template>\r
  <div class="demo-block">\r
    <h2 class="demo-title">组件方式 - 自定义内容</h2>\r
    <Button @click="showDialog = true">打开自定义对话框</Button>   \r
    <Dialog v-model:visible="showDialog">\r
      <template v-slot:title>\r
        <strong style="color: #1890ff;">自定义标题</strong>\r
      </template>\r
      <template v-slot:content>\r
        <div>\r
          <strong>复杂内容区域</strong>\r
          <p>这里可以包含任何 Vue 组件</p>\r
          <Button>内部按钮示例</Button>\r
          <div  style="margin-top: 8px;">\r
            <input placeholder="输入框示例" />\r
          </div>\r
        </div>\r
      </template>\r
    </Dialog>\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
import {Dialog} from '../../lib'\r
import {Button} from '../../lib'\r
import { ref } from 'vue'\r
export default {\r
  name: 'ComponentCustomDemo',\r
  components: {\r
    Dialog,\r
    Button\r
  },\r
  setup() {\r
    const showDialog = ref(false)\r
    return { showDialog }\r
  }\r
}\r
<\/script>`,rn=`<template>\r
  <div class="demo-block">\r
    <h2 class="demo-title">组件方式 - 遮罩层是否关闭</h2>\r
    <p class="demo-description">通过closeOnClickOverlay设置遮罩层是否关闭 Dialog</p>\r
    <Button @click="showDialog = true">打开对话框</Button>\r
    <Dialog v-model:visible="showDialog" :closeOnClickOverlay="false">\r
      <template v-slot:title>提示信息</template>\r
      <template v-slot:content>\r
        <p>这是一个基础的对话框示例</p>\r
      </template>\r
    </Dialog>\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
import {Dialog} from '../../lib'\r
import {Button} from '../../lib'\r
import { ref } from 'vue'\r
export default {\r
  name: 'ComponentNoOverlayDemo',\r
  components: {\r
    Dialog,\r
    Button\r
  },\r
  setup() {\r
    const showDialog = ref(false)\r
    return { showDialog }\r
  }\r
}\r
<\/script>`,ln=`<template>\r
  <div class="demo-block">\r
    <h2 class="demo-title">函数方式 - 基础提示</h2>\r
    <Button @click="showInfo">信息提示</Button>\r
    <Button @click="showSuccess">成功提示</Button>\r
    <Button @click="showWarning" level="danger">警告提示</Button>\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
import {Button} from '../../lib'\r
import { openDialog } from '../../lib/openDialog'\r
export default {\r
  name: 'FunctionBasicDemo',\r
  components: {\r
    Button\r
  },\r
  setup() {\r
    const showInfo = () => {\r
      openDialog({\r
        title: '系统通知',\r
        content: '您的操作已成功完成！'\r
      })\r
    }    \r
    const showSuccess = () => {\r
      openDialog({\r
        title: '操作成功',\r
        content: '数据保存成功！'\r
      })\r
    }\r
    const showWarning = () => {\r
      openDialog({\r
        title: '温馨提示',\r
        content: '请确保您已保存所有更改。'\r
      })\r
    }\r
    return {\r
      showInfo,\r
      showWarning,\r
      showSuccess\r
    }\r
  }\r
}\r
<\/script>`,sn=`<template>\r
  <div class="demo-block">\r
    <h2 class="demo-title">函数方式 - 回调确认</h2>\r
    <div class="demo-actions">\r
      <Button @click="confirmDelete" level="primary">删除确认</Button>\r
      <Button @click="confirmSubmit">提交确认</Button>\r
      <Button @click="confirmAsync" >异步操作</Button>\r
    </div>\r
    <div class="demo-feedback" v-if="feedback">\r
      {{ feedback }}\r
    </div>\r
  </div>\r
</template>\r
\r
<script lang="ts">\r
import {Button} from '../../lib'\r
import { openDialog } from '../../lib/openDialog'\r
import { ref } from 'vue'\r
export default {\r
  name: 'FunctionCallbackDemo',\r
  components: {\r
    Button\r
  },\r
  setup() {\r
    const feedback = ref('') \r
    const confirmDelete = () => {\r
      feedback.value = '等待用户确认删除...'\r
      openDialog({\r
        title: '确认删除',\r
        content: '删除后数据将无法恢复，确定要继续吗？',\r
        onOk: () => {\r
          feedback.value = '✅ 执行删除操作...'\r
          // 模拟异步操作\r
          setTimeout(() => {\r
            feedback.value = '删除成功！'\r
          }, 1000)\r
        },\r
        onCancel: () => {\r
          feedback.value = '❌ 用户取消了删除操作'\r
        }\r
      })\r
    }   \r
    const confirmSubmit = () => {\r
      feedback.value = '等待用户确认提交...'\r
      openDialog({\r
        title: '提交确认',\r
        content: '请确认信息无误后提交',\r
        onOk: () => {\r
          feedback.value = '✅ 提交中...'\r
          setTimeout(() => {\r
            feedback.value = '提交成功！'\r
          }, 1500)\r
        },\r
        onCancel: () => {\r
          feedback.value = '❌ 取消提交，继续编辑'\r
        }\r
      })\r
    }\r
    const confirmAsync = () => {\r
      feedback.value = '打开异步操作确认对话框...'\r
      openDialog({\r
        title: '异步操作',\r
        content: '这个操作需要一些时间处理，确定要继续吗？',\r
        onOk: () => {\r
          feedback.value = ' 正在处理中，请稍候...'\r
          // 模拟长时间操作\r
          setTimeout(() => {\r
            feedback.value = '✅ 异步操作完成！'\r
          }, 3000)\r
        },\r
        onCancel: () => {\r
          feedback.value = '❌ 用户取消了异步操作'\r
        }\r
      })\r
    }  \r
    return {\r
      feedback,\r
      confirmDelete,\r
      confirmSubmit,\r
      confirmAsync\r
    }\r
  }\r
}\r
<\/script>\r
\r
<style scoped>\r
.demo-actions {\r
  display: flex;\r
  gap: 12px;\r
  margin-bottom: 16px;\r
  flex-wrap: wrap;\r
}\r
\r
.demo-feedback {\r
  padding: 12px;\r
  background: #f6ffed;\r
  border: 1px solid #b7eb8f;\r
  border-radius: 4px;\r
  font-size: 14px;\r
}\r
</style>`,an={name:"DialogDemo",components:{Demo:S},setup(){return{ComponentBasic:U,ComponentCustom:K,ComponentNoOverlay:J,FunctionBasic:Q,FunctionCallback:on,componentBasicSource:tn,componentCustomSource:en,componentNoOverlaySource:rn,functionBasicSource:ln,functionCallbackSource:sn}}};function cn(t,n,i,o,d,p){const e=u("Demo");return f(),v("div",null,[n[0]||(n[0]=r("h1",null,"Dialog 组件示例",-1)),n[1]||(n[1]=r("h2",null,"组件调用方式",-1)),n[2]||(n[2]=r("p",{class:"demo-description"},"适合复杂内容、自定义UI、需要插槽的场景",-1)),l(e,{component:o.ComponentBasic,sourceCode:o.componentBasicSource},null,8,["component","sourceCode"]),l(e,{component:o.ComponentCustom,sourceCode:o.componentCustomSource},null,8,["component","sourceCode"]),l(e,{component:o.ComponentNoOverlay,sourceCode:o.componentNoOverlaySource},null,8,["component","sourceCode"]),n[3]||(n[3]=r("h2",null,"函数调用方式",-1)),n[4]||(n[4]=r("p",{class:"demo-description"},"适合简单提示、确认操作、工具函数调用的场景",-1)),l(e,{component:o.FunctionBasic,sourceCode:o.functionBasicSource},null,8,["component","sourceCode"]),l(e,{component:o.FunctionCallback,sourceCode:o.functionCallbackSource},null,8,["component","sourceCode"])])}const dn=k(an,[["render",cn],["__scopeId","data-v-c6f8999e"]]);export{dn as default};
