import{S as t,i as e,s as $,C as s,a as n,D as r,c as a,E as c,j as o,v as f,w as m,G as l,d,t as p,g as i}from"./client.6ddc1f6e.js";import{d as u}from"./index.8d2617b6.js";function g(t){let e;return{c(){e=p("Primary")},l(t){e=i(t,"Primary")},m(t,$){o(t,e,$)},d(t){t&&d(e)}}}function x(t){let e;return{c(){e=p("Default")},l(t){e=i(t,"Default")},m(t,$){o(t,e,$)},d(t){t&&d(e)}}}function y(t){let e;return{c(){e=p("Dashed")},l(t){e=i(t,"Dashed")},m(t,$){o(t,e,$)},d(t){t&&d(e)}}}function w(t){let e;return{c(){e=p("Link")},l(t){e=i(t,"Link")},m(t,$){o(t,e,$)},d(t){t&&d(e)}}}function D(t){let e,$,p,i;const D=new u({props:{type:"primary",$$slots:{default:[g]},$$scope:{ctx:t}}}),h=new u({props:{$$slots:{default:[x]},$$scope:{ctx:t}}}),j=new u({props:{type:"dashed",$$slots:{default:[y]},$$scope:{ctx:t}}}),k=new u({props:{type:"link",$$slots:{default:[w]},$$scope:{ctx:t}}});return{c(){s(D.$$.fragment),e=n(),s(h.$$.fragment),$=n(),s(j.$$.fragment),p=n(),s(k.$$.fragment)},l(t){r(D.$$.fragment,t),e=a(t),r(h.$$.fragment,t),$=a(t),r(j.$$.fragment,t),p=a(t),r(k.$$.fragment,t)},m(t,s){c(D,t,s),o(t,e,s),c(h,t,s),o(t,$,s),c(j,t,s),o(t,p,s),c(k,t,s),i=!0},p(t,[e]){const $={};1&e&&($.$$scope={dirty:e,ctx:t}),D.$set($);const s={};1&e&&(s.$$scope={dirty:e,ctx:t}),h.$set(s);const n={};1&e&&(n.$$scope={dirty:e,ctx:t}),j.$set(n);const r={};1&e&&(r.$$scope={dirty:e,ctx:t}),k.$set(r)},i(t){i||(f(D.$$.fragment,t),f(h.$$.fragment,t),f(j.$$.fragment,t),f(k.$$.fragment,t),i=!0)},o(t){m(D.$$.fragment,t),m(h.$$.fragment,t),m(j.$$.fragment,t),m(k.$$.fragment,t),i=!1},d(t){l(D,t),t&&d(e),l(h,t),t&&d($),l(j,t),t&&d(p),l(k,t)}}}export default class extends t{constructor(t){super(),e(this,t,null,D,$,{})}}