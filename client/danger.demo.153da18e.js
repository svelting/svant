import{S as t,i as e,s as $,K as s,a as n,M as r,c as a,N as c,j as o,v as f,w as l,O as m,d,t as p,g as i}from"./client.e374c2b6.js";import{b as g}from"./index.8d85b5d2.js";function u(t){let e;return{c(){e=p("Primary")},l(t){e=i(t,"Primary")},m(t,$){o(t,e,$)},d(t){t&&d(e)}}}function x(t){let e;return{c(){e=p("Default")},l(t){e=i(t,"Default")},m(t,$){o(t,e,$)},d(t){t&&d(e)}}}function y(t){let e;return{c(){e=p("link")},l(t){e=i(t,"link")},m(t,$){o(t,e,$)},d(t){t&&d(e)}}}function k(t){let e;return{c(){e=p("link")},l(t){e=i(t,"link")},m(t,$){o(t,e,$)},d(t){t&&d(e)}}}function w(t){let e,$,p,i;const w=new g({props:{type:"primary",danger:!0,$$slots:{default:[u]},$$scope:{ctx:t}}}),b=new g({props:{danger:!0,$$slots:{default:[x]},$$scope:{ctx:t}}}),j=new g({props:{type:"dashed",danger:!0,$$slots:{default:[y]},$$scope:{ctx:t}}}),h=new g({props:{type:"link",danger:!0,$$slots:{default:[k]},$$scope:{ctx:t}}});return{c(){s(w.$$.fragment),e=n(),s(b.$$.fragment),$=n(),s(j.$$.fragment),p=n(),s(h.$$.fragment)},l(t){r(w.$$.fragment,t),e=a(t),r(b.$$.fragment,t),$=a(t),r(j.$$.fragment,t),p=a(t),r(h.$$.fragment,t)},m(t,s){c(w,t,s),o(t,e,s),c(b,t,s),o(t,$,s),c(j,t,s),o(t,p,s),c(h,t,s),i=!0},p(t,[e]){const $={};1&e&&($.$$scope={dirty:e,ctx:t}),w.$set($);const s={};1&e&&(s.$$scope={dirty:e,ctx:t}),b.$set(s);const n={};1&e&&(n.$$scope={dirty:e,ctx:t}),j.$set(n);const r={};1&e&&(r.$$scope={dirty:e,ctx:t}),h.$set(r)},i(t){i||(f(w.$$.fragment,t),f(b.$$.fragment,t),f(j.$$.fragment,t),f(h.$$.fragment,t),i=!0)},o(t){l(w.$$.fragment,t),l(b.$$.fragment,t),l(j.$$.fragment,t),l(h.$$.fragment,t),i=!1},d(t){m(w,t),t&&d(e),m(b,t),t&&d($),m(j,t),t&&d(p),m(h,t)}}}export default class extends t{constructor(t){super(),e(this,t,null,w,$,{})}}