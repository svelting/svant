import{S as t,i as e,s,C as n,a as o,D as a,c,E as r,j as i,v as l,w as $,G as f,d,t as m,g as p,e as u,b as g,f as h,k as w,A as x}from"./client.eb590d12.js";import{B as b,M as y}from"./index.2afee243.js";function v(t){let e;return{c(){e=m("Open Modal with async logic")},l(t){e=p(t,"Open Modal with async logic")},m(t,s){i(t,e,s)},d(t){t&&d(e)}}}function C(t){let e,s;return{c(){e=u("p"),s=m(t[1])},l(n){e=g(n,"P",{});var o=h(e);s=p(o,t[1]),o.forEach(d)},m(t,n){i(t,e,n),w(e,s)},p(t,e){2&e&&x(s,t[1])},d(t){t&&d(e)}}}function j(t){let e,s;const m=new b({props:{type:"primary",$$slots:{default:[v]},$$scope:{ctx:t}}});m.$on("click",t[3]);const p=new y({props:{title:"Title",visible:t[0],confirmLoading:t[2],$$slots:{default:[C]},$$scope:{ctx:t}}});return p.$on("ok",t[4]),p.$on("cancel",t[5]),{c(){n(m.$$.fragment),e=o(),n(p.$$.fragment)},l(t){a(m.$$.fragment,t),e=c(t),a(p.$$.fragment,t)},m(t,n){r(m,t,n),i(t,e,n),r(p,t,n),s=!0},p(t,[e]){const s={};64&e&&(s.$$scope={dirty:e,ctx:t}),m.$set(s);const n={};1&e&&(n.visible=t[0]),4&e&&(n.confirmLoading=t[2]),66&e&&(n.$$scope={dirty:e,ctx:t}),p.$set(n)},i(t){s||(l(m.$$.fragment,t),l(p.$$.fragment,t),s=!0)},o(t){$(m.$$.fragment,t),$(p.$$.fragment,t),s=!1},d(t){f(m,t),t&&d(e),f(p,t)}}}function k(t,e,s){let n=!1,o="Content of the modal",a=!1;return[n,o,a,function(){s(0,n=!0)},function(){s(1,o="The modal will be closed after two seconds"),s(2,a=!0),setTimeout(()=>{s(0,n=!1),s(2,a=!1),s(1,o="Content of the modal")},2e3)},function(){console.log("Cancel button pressed"),s(0,n=!1)}]}export default class extends t{constructor(t){super(),e(this,t,k,j,s,{})}}