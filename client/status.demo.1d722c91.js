import{S as t,i as n,s,C as e,a as c,D as o,c as $,E as r,j as i,v as a,w as f,G as l,d as m,t as u,g as p}from"./client.7bc990f1.js";import{B as g,n as d}from"./index.fa29be7f.js";function x(t){let n;return{c(){n=u("Success")},l(t){n=p(t,"Success")},m(t,s){i(t,n,s)},d(t){t&&m(n)}}}function h(t){let n;return{c(){n=u("Info")},l(t){n=p(t,"Info")},m(t,s){i(t,n,s)},d(t){t&&m(n)}}}function w(t){let n;return{c(){n=u("Warning")},l(t){n=p(t,"Warning")},m(t,s){i(t,n,s)},d(t){t&&m(n)}}}function k(t){let n;return{c(){n=u("Error")},l(t){n=p(t,"Error")},m(t,s){i(t,n,s)},d(t){t&&m(n)}}}function y(t){let n,s,u,p;const d=new g({props:{$$slots:{default:[x]},$$scope:{ctx:t}}});d.$on("click",t[0]);const y=new g({props:{$$slots:{default:[h]},$$scope:{ctx:t}}});y.$on("click",t[1]);const T=new g({props:{$$slots:{default:[w]},$$scope:{ctx:t}}});T.$on("click",t[2]);const j=new g({props:{$$slots:{default:[k]},$$scope:{ctx:t}}});return j.$on("click",t[3]),{c(){e(d.$$.fragment),n=c(),e(y.$$.fragment),s=c(),e(T.$$.fragment),u=c(),e(j.$$.fragment)},l(t){o(d.$$.fragment,t),n=$(t),o(y.$$.fragment,t),s=$(t),o(T.$$.fragment,t),u=$(t),o(j.$$.fragment,t)},m(t,e){r(d,t,e),i(t,n,e),r(y,t,e),i(t,s,e),r(T,t,e),i(t,u,e),r(j,t,e),p=!0},p(t,[n]){const s={};32&n&&(s.$$scope={dirty:n,ctx:t}),d.$set(s);const e={};32&n&&(e.$$scope={dirty:n,ctx:t}),y.$set(e);const c={};32&n&&(c.$$scope={dirty:n,ctx:t}),T.$set(c);const o={};32&n&&(o.$$scope={dirty:n,ctx:t}),j.$set(o)},i(t){p||(a(d.$$.fragment,t),a(y.$$.fragment,t),a(T.$$.fragment,t),a(j.$$.fragment,t),p=!0)},o(t){f(d.$$.fragment,t),f(y.$$.fragment,t),f(T.$$.fragment,t),f(j.$$.fragment,t),p=!1},d(t){l(d,t),t&&m(n),l(y,t),t&&m(s),l(T,t),t&&m(u),l(j,t)}}}function T(t){const n={message:"Notification Title",description:"This is the content of the notification. This is the content of the notification. This is the content of the notification."};return[function(){d.success(n)},function(){d.info(n)},function(){d.warning(n)},function(){d.error(n)}]}export default class extends t{constructor(t){super(),n(this,t,T,y,s,{})}}
