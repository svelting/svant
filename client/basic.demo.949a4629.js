import{S as t,i as n,s as e,C as s,a as o,D as a,c,E as r,j as $,v as f,w as i,G as m,d as l,t as p,g as d,e as u,b as g,f as x,k as S}from"./client.6ddc1f6e.js";import{d as v,M as y}from"./index.8d2617b6.js";function b(t){let n;return{c(){n=p("Open Modal")},l(t){n=d(t,"Open Modal")},m(t,e){$(t,n,e)},d(t){t&&l(n)}}}function h(t){let n,e,s,a,r,f,i,m;return{c(){n=u("p"),e=p("Some contents..."),s=o(),a=u("p"),r=p("Some contents..."),f=o(),i=u("p"),m=p("Some contents...")},l(t){n=g(t,"P",{});var o=x(n);e=d(o,"Some contents..."),o.forEach(l),s=c(t),a=g(t,"P",{});var $=x(a);r=d($,"Some contents..."),$.forEach(l),f=c(t),i=g(t,"P",{});var p=x(i);m=d(p,"Some contents..."),p.forEach(l)},m(t,o){$(t,n,o),S(n,e),$(t,s,o),$(t,a,o),S(a,r),$(t,f,o),$(t,i,o),S(i,m)},d(t){t&&l(n),t&&l(s),t&&l(a),t&&l(f),t&&l(i)}}}function k(t){let n,e;const p=new v({props:{type:"primary",$$slots:{default:[b]},$$scope:{ctx:t}}});p.$on("click",t[1]);const d=new y({props:{title:"Basic Modal",visible:t[0],$$slots:{default:[h]},$$scope:{ctx:t}}});return d.$on("ok",t[3]),d.$on("cancel",t[2]),{c(){s(p.$$.fragment),n=o(),s(d.$$.fragment)},l(t){a(p.$$.fragment,t),n=c(t),a(d.$$.fragment,t)},m(t,s){r(p,t,s),$(t,n,s),r(d,t,s),e=!0},p(t,[n]){const e={};16&n&&(e.$$scope={dirty:n,ctx:t}),p.$set(e);const s={};1&n&&(s.visible=t[0]),16&n&&(s.$$scope={dirty:n,ctx:t}),d.$set(s)},i(t){e||(f(p.$$.fragment,t),f(d.$$.fragment,t),e=!0)},o(t){i(p.$$.fragment,t),i(d.$$.fragment,t),e=!1},d(t){m(p,t),t&&l(n),m(d,t)}}}function E(t,n,e){let s=!1;function o(){e(0,s=!1)}return[s,function(){e(0,s=!0)},o,function(){y.confirm({content:"Are you sure?",onOk:()=>{o()}})}]}export default class extends t{constructor(t){super(),n(this,t,E,k,e,{})}}