import{S as t,i as e,s as n,C as s,D as $,E as a,v as o,w as c,G as r,z as l,ay as f,az as i,a as p,c as u,j as m,d,t as g,g as x}from"./client.7d5f28db.js";import{R as y,i as v}from"./index.9f1e07e4.js";function h(t){let e;return{c(){e=g("Option A")},l(t){e=x(t,"Option A")},m(t,n){m(t,e,n)},d(t){t&&d(e)}}}function O(t){let e;return{c(){e=g("Option B")},l(t){e=x(t,"Option B")},m(t,n){m(t,e,n)},d(t){t&&d(e)}}}function w(t){let e;return{c(){e=g("Option C")},l(t){e=x(t,"Option C")},m(t,n){m(t,e,n)},d(t){t&&d(e)}}}function j(t){let e,n,l;const f=new v({props:{value:1,style:t[1],$$slots:{default:[h]},$$scope:{ctx:t}}}),i=new v({props:{value:2,style:t[1],$$slots:{default:[O]},$$scope:{ctx:t}}}),g=new v({props:{value:3,style:t[1],$$slots:{default:[w]},$$scope:{ctx:t}}});return{c(){s(f.$$.fragment),e=p(),s(i.$$.fragment),n=p(),s(g.$$.fragment)},l(t){$(f.$$.fragment,t),e=u(t),$(i.$$.fragment,t),n=u(t),$(g.$$.fragment,t)},m(t,s){a(f,t,s),m(t,e,s),a(i,t,s),m(t,n,s),a(g,t,s),l=!0},p(t,e){const n={};16&e&&(n.$$scope={dirty:e,ctx:t}),f.$set(n);const s={};16&e&&(s.$$scope={dirty:e,ctx:t}),i.$set(s);const $={};16&e&&($.$$scope={dirty:e,ctx:t}),g.$set($)},i(t){l||(o(f.$$.fragment,t),o(i.$$.fragment,t),o(g.$$.fragment,t),l=!0)},o(t){c(f.$$.fragment,t),c(i.$$.fragment,t),c(g.$$.fragment,t),l=!1},d(t){r(f,t),t&&d(e),r(i,t),t&&d(n),r(g,t)}}}function C(t){let e,n;function p(e){t[3].call(null,e)}let u={$$slots:{default:[j]},$$scope:{ctx:t}};void 0!==t[0]&&(u.value=t[0]);const m=new y({props:u});return l.push(()=>f(m,"value",p)),m.$on("change",t[2]),{c(){s(m.$$.fragment)},l(t){$(m.$$.fragment,t)},m(t,e){a(m,t,e),n=!0},p(t,[n]){const s={};16&n&&(s.$$scope={dirty:n,ctx:t}),!e&&1&n&&(e=!0,s.value=t[0],i(()=>e=!1)),m.$set(s)},i(t){n||(o(m.$$.fragment,t),n=!0)},o(t){c(m.$$.fragment,t),n=!1},d(t){r(m,t)}}}function b(t,e,n){let s=1;return[s,{display:"block",height:"30px",lineHeight:"30px"},function(){console.log("radio checked",s)},function(t){s=t,n(0,s)}]}export default class extends t{constructor(t){super(),e(this,t,b,C,n,{})}}