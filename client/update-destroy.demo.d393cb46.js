import{S as s,i as e,s as t,C as o,D as n,E as a,v as c,w as l,G as r,t as i,g as d,j as $,d as m}from"./client.6ddc1f6e.js";import{d as f,M as u}from"./index.8d2617b6.js";function p(s){let e;return{c(){e=i("Open modal to close in 3s")},l(s){e=d(s,"Open modal to close in 3s")},m(s,t){$(s,e,t)},d(s){s&&m(e)}}}function g(s){let e;const t=new f({props:{$$slots:{default:[p]},$$scope:{ctx:s}}});return t.$on("click",x),{c(){o(t.$$.fragment)},l(s){n(t.$$.fragment,s)},m(s,o){a(t,s,o),e=!0},p(s,[e]){const o={};1&e&&(o.$$scope={dirty:e,ctx:s}),t.$set(o)},i(s){e||(c(t.$$.fragment,s),e=!0)},o(s){l(t.$$.fragment,s),e=!1},d(s){r(t,s)}}}function x(){let s=3;const e=u.success({title:"This is a notification message",content:`This modal will be destroyed after ${s} second.`}),t=setInterval(()=>{s-=1,e.$set({content:`This modal will be destroyed after ${s} second.`})},1e3);setTimeout(()=>{clearInterval(t),e.destroy()},1e3*s)}export default class extends s{constructor(s){super(),e(this,s,null,g,t,{})}}
