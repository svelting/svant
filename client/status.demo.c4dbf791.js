import{S as s,i as t,s as e,C as n,a as r,D as $,c,E as a,j as o,v as i,w as f,G as m,d as g,t as l,g as u}from"./client.7bc990f1.js";import{B as p,m as d}from"./index.fa29be7f.js";function x(s){let t;return{c(){t=l("Success")},l(s){t=u(s,"Success")},m(s,e){o(s,t,e)},d(s){s&&g(t)}}}function w(s){let t;return{c(){t=l("Error")},l(s){t=u(s,"Error")},m(s,e){o(s,t,e)},d(s){s&&g(t)}}}function h(s){let t;return{c(){t=l("Warning")},l(s){t=u(s,"Warning")},m(s,e){o(s,t,e)},d(s){s&&g(t)}}}function j(s){let t,e,l;const u=new p({props:{$$slots:{default:[x]},$$scope:{ctx:s}}});u.$on("click",s[0]);const d=new p({props:{$$slots:{default:[w]},$$scope:{ctx:s}}});d.$on("click",s[1]);const j=new p({props:{$$slots:{default:[h]},$$scope:{ctx:s}}});return j.$on("click",s[2]),{c(){n(u.$$.fragment),t=r(),n(d.$$.fragment),e=r(),n(j.$$.fragment)},l(s){$(u.$$.fragment,s),t=c(s),$(d.$$.fragment,s),e=c(s),$(j.$$.fragment,s)},m(s,n){a(u,s,n),o(s,t,n),a(d,s,n),o(s,e,n),a(j,s,n),l=!0},p(s,[t]){const e={};8&t&&(e.$$scope={dirty:t,ctx:s}),u.$set(e);const n={};8&t&&(n.$$scope={dirty:t,ctx:s}),d.$set(n);const r={};8&t&&(r.$$scope={dirty:t,ctx:s}),j.$set(r)},i(s){l||(i(u.$$.fragment,s),i(d.$$.fragment,s),i(j.$$.fragment,s),l=!0)},o(s){f(u.$$.fragment,s),f(d.$$.fragment,s),f(j.$$.fragment,s),l=!1},d(s){m(u,s),s&&g(t),m(d,s),s&&g(e),m(j,s)}}}function k(s){return[()=>{d.success("This is a success message")},()=>{d.error("This is an error message")},()=>{d.warning("This is a warning message")}]}export default class extends s{constructor(s){super(),t(this,s,k,j,e,{})}}
