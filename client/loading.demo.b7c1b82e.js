import{S as t,i as e,s as $,av as n,C as s,a,e as r,D as o,c,b as i,E as l,j as m,v as p,w as d,G as f,d as g,t as u,g as y}from"./client.6ddc1f6e.js";import{d as x}from"./index.8d2617b6.js";function k(t){let e;return{c(){e=u("Loading")},l(t){e=y(t,"Loading")},m(t,$){m(t,e,$)},d(t){t&&g(e)}}}function w(t){let e;return{c(){e=u("Loading")},l(t){e=y(t,"Loading")},m(t,$){m(t,e,$)},d(t){t&&g(e)}}}function L(t){let e;return{c(){e=u("Click me!")},l(t){e=y(t,"Click me!")},m(t,$){m(t,e,$)},d(t){t&&g(e)}}}function C(t){let e;return{c(){e=u("Click me!")},l(t){e=y(t,"Click me!")},m(t,$){m(t,e,$)},d(t){t&&g(e)}}}function b(t){let e;return{c(){e=u("With 2s Delay")},l(t){e=y(t,"With 2s Delay")},m(t,$){m(t,e,$)},d(t){t&&g(e)}}}function h(t){let e;return{c(){e=u("Stop Loading")},l(t){e=y(t,"Stop Loading")},m(t,$){m(t,e,$)},d(t){t&&g(e)}}}function j(t){let e,$,u,y,j,D,S,v;const W=new x({props:{type:"primary",loading:!0,$$slots:{default:[k]},$$scope:{ctx:t}}}),z=new x({props:{type:"primary",size:"small",loading:!0,$$slots:{default:[w]},$$scope:{ctx:t}}}),B=new x({props:{type:"primary",loading:t[0],$$slots:{default:[L]},$$scope:{ctx:t}}});B.$on("click",t[3]);const E=new x({props:{type:"primary",icon:n,loading:t[1],$$slots:{default:[C]},$$scope:{ctx:t}}});E.$on("click",t[4]);const G=new x({props:{type:"primary",loading:t[2],$$slots:{default:[b]},$$scope:{ctx:t}}});G.$on("click",t[5]);const R=new x({props:{type:"primary",$$slots:{default:[h]},$$scope:{ctx:t}}});return R.$on("click",t[6]),{c(){s(W.$$.fragment),e=a(),s(z.$$.fragment),$=a(),u=r("br"),y=a(),s(B.$$.fragment),j=a(),s(E.$$.fragment),D=a(),s(G.$$.fragment),S=a(),s(R.$$.fragment)},l(t){o(W.$$.fragment,t),e=c(t),o(z.$$.fragment,t),$=c(t),u=i(t,"BR",{}),y=c(t),o(B.$$.fragment,t),j=c(t),o(E.$$.fragment,t),D=c(t),o(G.$$.fragment,t),S=c(t),o(R.$$.fragment,t)},m(t,n){l(W,t,n),m(t,e,n),l(z,t,n),m(t,$,n),m(t,u,n),m(t,y,n),l(B,t,n),m(t,j,n),l(E,t,n),m(t,D,n),l(G,t,n),m(t,S,n),l(R,t,n),v=!0},p(t,[e]){const $={};128&e&&($.$$scope={dirty:e,ctx:t}),W.$set($);const n={};128&e&&(n.$$scope={dirty:e,ctx:t}),z.$set(n);const s={};1&e&&(s.loading=t[0]),128&e&&(s.$$scope={dirty:e,ctx:t}),B.$set(s);const a={};2&e&&(a.loading=t[1]),128&e&&(a.$$scope={dirty:e,ctx:t}),E.$set(a);const r={};4&e&&(r.loading=t[2]),128&e&&(r.$$scope={dirty:e,ctx:t}),G.$set(r);const o={};128&e&&(o.$$scope={dirty:e,ctx:t}),R.$set(o)},i(t){v||(p(W.$$.fragment,t),p(z.$$.fragment,t),p(B.$$.fragment,t),p(E.$$.fragment,t),p(G.$$.fragment,t),p(R.$$.fragment,t),v=!0)},o(t){d(W.$$.fragment,t),d(z.$$.fragment,t),d(B.$$.fragment,t),d(E.$$.fragment,t),d(G.$$.fragment,t),d(R.$$.fragment,t),v=!1},d(t){f(W,t),t&&g(e),f(z,t),t&&g($),t&&g(u),t&&g(y),f(B,t),t&&g(j),f(E,t),t&&g(D),f(G,t),t&&g(S),f(R,t)}}}function D(t,e,$){let n,s=!1,a=!1;return[s,a,n,()=>{$(0,s=!0)},()=>{$(1,a=!0)},()=>{$(2,n={delay:2e3})},()=>{$(0,s=!1),$(1,a=!1),$(2,n=null)}]}export default class extends t{constructor(t){super(),e(this,t,D,j,$,{})}}
