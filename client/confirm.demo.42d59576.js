import{S as e,i as t,s as o,K as n,a as s,M as c,c as r,N as a,j as l,v as $,w as i,O as m,d,t as f,g as p,a7 as u}from"./client.e374c2b6.js";import{b as g,M as x}from"./index.8d85b5d2.js";function h(e){let t;return{c(){t=f("Confirm")},l(e){t=p(e,"Confirm")},m(e,o){l(e,t,o)},d(e){e&&d(t)}}}function k(e){let t;return{c(){t=f("Delete")},l(e){t=p(e,"Delete")},m(e,o){l(e,t,o)},d(e){e&&d(t)}}}function y(e){let t;return{c(){t=f("With extra props")},l(e){t=p(e,"With extra props")},m(e,o){l(e,t,o)},d(e){e&&d(t)}}}function w(e){let t;return{c(){t=f("Confirm with Promise")},l(e){t=p(e,"Confirm with Promise")},m(e,o){l(e,t,o)},d(e){e&&d(t)}}}function C(e){let t,o,f,p;const u=new g({props:{$$slots:{default:[h]},$$scope:{ctx:e}}});u.$on("click",e[0]);const x=new g({props:{type:"dashed",$$slots:{default:[k]},$$scope:{ctx:e}}});x.$on("click",e[1]);const C=new g({props:{type:"dashed",$$slots:{default:[y]},$$scope:{ctx:e}}});C.$on("click",e[2]);const O=new g({props:{$$slots:{default:[w]},$$scope:{ctx:e}}});return O.$on("click",e[3]),{c(){n(u.$$.fragment),t=s(),n(x.$$.fragment),o=s(),n(C.$$.fragment),f=s(),n(O.$$.fragment)},l(e){c(u.$$.fragment,e),t=r(e),c(x.$$.fragment,e),o=r(e),c(C.$$.fragment,e),f=r(e),c(O.$$.fragment,e)},m(e,n){a(u,e,n),l(e,t,n),a(x,e,n),l(e,o,n),a(C,e,n),l(e,f,n),a(O,e,n),p=!0},p(e,[t]){const o={};32&t&&(o.$$scope={dirty:t,ctx:e}),u.$set(o);const n={};32&t&&(n.$$scope={dirty:t,ctx:e}),x.$set(n);const s={};32&t&&(s.$$scope={dirty:t,ctx:e}),C.$set(s);const c={};32&t&&(c.$$scope={dirty:t,ctx:e}),O.$set(c)},i(e){p||($(u.$$.fragment,e),$(x.$$.fragment,e),$(C.$$.fragment,e),$(O.$$.fragment,e),p=!0)},o(e){i(u.$$.fragment,e),i(x.$$.fragment,e),i(C.$$.fragment,e),i(O.$$.fragment,e),p=!1},d(e){m(u,e),e&&d(t),m(x,e),e&&d(o),m(C,e),e&&d(f),m(O,e)}}}function O(e){const{confirm:t}=x;return[function(){t({title:"Do you want to delete these items?",icon:u,content:"Some descriptions",onOk(){console.log("OK")},onCancel(){console.log("Cancel")}})},function(){t({title:"Are you sure delete this task?",icon:u,content:"Some descriptions",okText:"Yes",okType:"danger",cancelText:"No",onOk(){console.log("OK")},onCancel(){console.log("Cancel")}})},function(){t({title:"Are you sure delete this task?",icon:u,content:"Some descriptions",okText:"Yes",okType:"danger",okButtonProps:{disabled:!0},cancelText:"No",onOk(){console.log("OK")},onCancel(){console.log("Cancel")}})},function(){t({title:"Do you want to delete these items?",icon:u,content:"When clicked the OK button, this dialog will be closed after 1 second",onOk:()=>new Promise((e,t)=>{setTimeout(Math.random()>.5?e:t,1e3)}).catch(()=>console.log("Oops errors!")),onCancel(){}})}]}export default class extends e{constructor(e){super(),t(this,e,O,C,o,{})}}
