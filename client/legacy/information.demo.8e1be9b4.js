import{_ as n,a as t,i as s,s as e,b as o,S as c,e as r,J as a,c as i,g as f,h as u,K as $,f as l,d as m,k as g,l as p,L as d,m as v,x as h,A as x,B as y,N as k,o as w,p as b,t as R,j}from"./client.3d737a22.js";import{B as E,M as I}from"./index.8c189d6a.js";import S from"./ModalInfoExample.21e3b3b0.js";function B(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}function D(n){var t;return{c:function(){t=R("Info")},l:function(n){t=j(n,"Info")},m:function(n,s){p(n,t,s)},d:function(n){n&&m(t)}}}function T(n){var t;return{c:function(){t=R("Success")},l:function(n){t=j(n,"Success")},m:function(n,s){p(n,t,s)},d:function(n){n&&m(t)}}}function K(n){var t;return{c:function(){t=R("Error")},l:function(n){t=j(n,"Error")},m:function(n,s){p(n,t,s)},d:function(n){n&&m(t)}}}function M(n){var t;return{c:function(){t=R("Warning")},l:function(n){t=j(n,"Warning")},m:function(n,s){p(n,t,s)},d:function(n){n&&m(t)}}}function O(n){var t,s,e,o,c,w=new E({props:{$$slots:{default:[D]},$$scope:{ctx:n}}});w.$on("click",W);var b=new E({props:{$$slots:{default:[T]},$$scope:{ctx:n}}});b.$on("click",A);var R=new E({props:{$$slots:{default:[K]},$$scope:{ctx:n}}});R.$on("click",C);var j=new E({props:{$$slots:{default:[M]},$$scope:{ctx:n}}});return j.$on("click",F),{c:function(){t=r("div"),a(w.$$.fragment),s=i(),a(b.$$.fragment),e=i(),a(R.$$.fragment),o=i(),a(j.$$.fragment),this.h()},l:function(n){t=f(n,"DIV",{class:!0});var c=u(t);$(w.$$.fragment,c),s=l(c),$(b.$$.fragment,c),e=l(c),$(R.$$.fragment,c),o=l(c),$(j.$$.fragment,c),c.forEach(m),this.h()},h:function(){g(t,"class","information-buttons")},m:function(n,r){p(n,t,r),d(w,t,null),v(t,s),d(b,t,null),v(t,e),d(R,t,null),v(t,o),d(j,t,null),c=!0},p:function(n,t){var s=h(t,1)[0],e={};1&s&&(e.$$scope={dirty:s,ctx:n}),w.$set(e);var o={};1&s&&(o.$$scope={dirty:s,ctx:n}),b.$set(o);var c={};1&s&&(c.$$scope={dirty:s,ctx:n}),R.$set(c);var r={};1&s&&(r.$$scope={dirty:s,ctx:n}),j.$set(r)},i:function(n){c||(x(w.$$.fragment,n),x(b.$$.fragment,n),x(R.$$.fragment,n),x(j.$$.fragment,n),c=!0)},o:function(n){y(w.$$.fragment,n),y(b.$$.fragment,n),y(R.$$.fragment,n),y(j.$$.fragment,n),c=!1},d:function(n){n&&m(t),k(w),k(b),k(R),k(j)}}}function W(){I.info({title:"This is a notification message",content:S,autoFocusButton:"ok",onOk:function(){console.log("OK Clicked")}})}function A(){I.success({content:"some messages...some messages..."})}function C(){I.error({title:"This is an error message",content:"some messages...some messages..."})}function F(){I.warning({title:"This is a warning message",content:"some messages...some messages...",closeable:!0})}var J=function(r){n(f,c);var a,i=(a=f,function(){var n,t=w(a);if(B()){var s=w(this).constructor;n=Reflect.construct(t,arguments,s)}else n=t.apply(this,arguments);return b(this,n)});function f(n){var c;return t(this,f),c=i.call(this),s(o(c),n,null,O,e,{}),c}return f}();export default J;