import{S as t,i as e,s as $,aQ as n,C as a,a as s,e as r,D as o,c,b as i,E as l,j as m,v as p,w as f,G as d,d as g,t as u,g as y}from"./client.eb590d12.js";import{B as x}from"./index.2afee243.js";function k(t){let e;return{c(){e=u("Loading")},l(t){e=y(t,"Loading")},m(t,$){m(t,e,$)},d(t){t&&g(e)}}}function w(t){let e;return{c(){e=u("Loading")},l(t){e=y(t,"Loading")},m(t,$){m(t,e,$)},d(t){t&&g(e)}}}function L(t){let e;return{c(){e=u("Click me!")},l(t){e=y(t,"Click me!")},m(t,$){m(t,e,$)},d(t){t&&g(e)}}}function C(t){let e;return{c(){e=u("Click me!")},l(t){e=y(t,"Click me!")},m(t,$){m(t,e,$)},d(t){t&&g(e)}}}function b(t){let e;return{c(){e=u("With 2s Delay")},l(t){e=y(t,"With 2s Delay")},m(t,$){m(t,e,$)},d(t){t&&g(e)}}}function h(t){let e;return{c(){e=u("Stop Loading")},l(t){e=y(t,"Stop Loading")},m(t,$){m(t,e,$)},d(t){t&&g(e)}}}function j(t){let e,$,u,y,j,D,S,B;const W=new x({props:{type:"primary",loading:!0,$$slots:{default:[k]},$$scope:{ctx:t}}}),v=new x({props:{type:"primary",size:"small",loading:!0,$$slots:{default:[w]},$$scope:{ctx:t}}}),z=new x({props:{type:"primary",loading:t[0],$$slots:{default:[L]},$$scope:{ctx:t}}});z.$on("click",t[3]);const E=new x({props:{type:"primary",icon:n,loading:t[1],$$slots:{default:[C]},$$scope:{ctx:t}}});E.$on("click",t[4]);const G=new x({props:{type:"primary",loading:t[2],$$slots:{default:[b]},$$scope:{ctx:t}}});G.$on("click",t[5]);const Q=new x({props:{type:"primary",$$slots:{default:[h]},$$scope:{ctx:t}}});return Q.$on("click",t[6]),{c(){a(W.$$.fragment),e=s(),a(v.$$.fragment),$=s(),u=r("br"),y=s(),a(z.$$.fragment),j=s(),a(E.$$.fragment),D=s(),a(G.$$.fragment),S=s(),a(Q.$$.fragment)},l(t){o(W.$$.fragment,t),e=c(t),o(v.$$.fragment,t),$=c(t),u=i(t,"BR",{}),y=c(t),o(z.$$.fragment,t),j=c(t),o(E.$$.fragment,t),D=c(t),o(G.$$.fragment,t),S=c(t),o(Q.$$.fragment,t)},m(t,n){l(W,t,n),m(t,e,n),l(v,t,n),m(t,$,n),m(t,u,n),m(t,y,n),l(z,t,n),m(t,j,n),l(E,t,n),m(t,D,n),l(G,t,n),m(t,S,n),l(Q,t,n),B=!0},p(t,[e]){const $={};128&e&&($.$$scope={dirty:e,ctx:t}),W.$set($);const n={};128&e&&(n.$$scope={dirty:e,ctx:t}),v.$set(n);const a={};1&e&&(a.loading=t[0]),128&e&&(a.$$scope={dirty:e,ctx:t}),z.$set(a);const s={};2&e&&(s.loading=t[1]),128&e&&(s.$$scope={dirty:e,ctx:t}),E.$set(s);const r={};4&e&&(r.loading=t[2]),128&e&&(r.$$scope={dirty:e,ctx:t}),G.$set(r);const o={};128&e&&(o.$$scope={dirty:e,ctx:t}),Q.$set(o)},i(t){B||(p(W.$$.fragment,t),p(v.$$.fragment,t),p(z.$$.fragment,t),p(E.$$.fragment,t),p(G.$$.fragment,t),p(Q.$$.fragment,t),B=!0)},o(t){f(W.$$.fragment,t),f(v.$$.fragment,t),f(z.$$.fragment,t),f(E.$$.fragment,t),f(G.$$.fragment,t),f(Q.$$.fragment,t),B=!1},d(t){d(W,t),t&&g(e),d(v,t),t&&g($),t&&g(u),t&&g(y),d(z,t),t&&g(j),d(E,t),t&&g(D),d(G,t),t&&g(S),d(Q,t)}}}function D(t,e,$){let n,a=!1,s=!1;return[a,s,n,()=>{$(0,a=!0)},()=>{$(1,s=!0)},()=>{$(2,n={delay:2e3})},()=>{$(0,a=!1),$(1,s=!1),$(2,n=null)}]}export default class extends t{constructor(t){super(),e(this,t,D,j,$,{})}}