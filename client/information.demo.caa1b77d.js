import{S as s,i as t,s as e,e as n,C as o,a,b as c,f as $,D as r,c as i,d as l,h as m,j as f,E as u,k as g,v as p,w as d,G as x,t as h,g as k}from"./client.9668a923.js";import{c as w,M as b}from"./index.ae1e0bb1.js";import E from"./ModalInfoExample.22195468.js";function j(s){let t;return{c(){t=h("Info")},l(s){t=k(s,"Info")},m(s,e){f(s,t,e)},d(s){s&&l(t)}}}function y(s){let t;return{c(){t=h("Success")},l(s){t=k(s,"Success")},m(s,e){f(s,t,e)},d(s){s&&l(t)}}}function I(s){let t;return{c(){t=h("Error")},l(s){t=k(s,"Error")},m(s,e){f(s,t,e)},d(s){s&&l(t)}}}function v(s){let t;return{c(){t=h("Warning")},l(s){t=k(s,"Warning")},m(s,e){f(s,t,e)},d(s){s&&l(t)}}}function S(s){let t,e,h,k,b;const E=new w({props:{$$slots:{default:[j]},$$scope:{ctx:s}}});E.$on("click",T);const S=new w({props:{$$slots:{default:[y]},$$scope:{ctx:s}}});S.$on("click",C);const O=new w({props:{$$slots:{default:[I]},$$scope:{ctx:s}}});O.$on("click",D);const W=new w({props:{$$slots:{default:[v]},$$scope:{ctx:s}}});return W.$on("click",M),{c(){t=n("div"),o(E.$$.fragment),e=a(),o(S.$$.fragment),h=a(),o(O.$$.fragment),k=a(),o(W.$$.fragment),this.h()},l(s){t=c(s,"DIV",{class:!0});var n=$(t);r(E.$$.fragment,n),e=i(n),r(S.$$.fragment,n),h=i(n),r(O.$$.fragment,n),k=i(n),r(W.$$.fragment,n),n.forEach(l),this.h()},h(){m(t,"class","information-buttons")},m(s,n){f(s,t,n),u(E,t,null),g(t,e),u(S,t,null),g(t,h),u(O,t,null),g(t,k),u(W,t,null),b=!0},p(s,[t]){const e={};1&t&&(e.$$scope={dirty:t,ctx:s}),E.$set(e);const n={};1&t&&(n.$$scope={dirty:t,ctx:s}),S.$set(n);const o={};1&t&&(o.$$scope={dirty:t,ctx:s}),O.$set(o);const a={};1&t&&(a.$$scope={dirty:t,ctx:s}),W.$set(a)},i(s){b||(p(E.$$.fragment,s),p(S.$$.fragment,s),p(O.$$.fragment,s),p(W.$$.fragment,s),b=!0)},o(s){d(E.$$.fragment,s),d(S.$$.fragment,s),d(O.$$.fragment,s),d(W.$$.fragment,s),b=!1},d(s){s&&l(t),x(E),x(S),x(O),x(W)}}}function T(){b.info({title:"This is a notification message",content:E,autoFocusButton:"ok",onOk(){console.log("OK Clicked")}})}function C(){b.success({content:"some messages...some messages..."})}function D(){b.error({title:"This is an error message",content:"some messages...some messages..."})}function M(){b.warning({title:"This is a warning message",content:"some messages...some messages...",closeable:!0})}export default class extends s{constructor(s){super(),t(this,s,null,S,e,{})}}
