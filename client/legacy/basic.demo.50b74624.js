import{_ as t,a as n,i as e,s as c,b as a,S as r,J as o,c as s,K as f,f as i,L as u,l as $,x as l,A as p,B as m,N as g,d,o as v,p as h,t as x,j as y,e as T,g as b,h as w,k as R,m as k}from"./client.f90ccfb2.js";import{T as j,m as C}from"./index.64a5a485.js";function L(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function P(t){var n;return{c:function(){n=x("Tag 1")},l:function(t){n=y(t,"Tag 1")},m:function(t,e){$(t,n,e)},d:function(t){t&&d(n)}}}function A(t){var n,e;return{c:function(){n=T("a"),e=x("Link"),this.h()},l:function(t){n=b(t,"A",{href:!0});var c=w(n);e=y(c,"Link"),c.forEach(d),this.h()},h:function(){R(n,"href","https://svant.dev")},m:function(t,c){$(t,n,c),k(n,e)},d:function(t){t&&d(n)}}}function D(t){var n;return{c:function(){n=x("Tag 2")},l:function(t){n=y(t,"Tag 2")},m:function(t,e){$(t,n,e)},d:function(t){t&&d(n)}}}function S(t){var n;return{c:function(){n=x("Prevent Close")},l:function(t){n=y(t,"Prevent Close")},m:function(t,e){$(t,n,e)},d:function(t){t&&d(n)}}}function B(t){var n,e,c,a,r=new j({props:{$$slots:{default:[P]},$$scope:{ctx:t}}}),v=new j({props:{$$slots:{default:[A]},$$scope:{ctx:t}}}),h=new j({props:{closable:!0,$$slots:{default:[D]},$$scope:{ctx:t}}});h.$on("close",E);var x=new j({props:{closable:!0,$$slots:{default:[S]},$$scope:{ctx:t}}});return x.$on("close",J),{c:function(){o(r.$$.fragment),n=s(),o(v.$$.fragment),e=s(),o(h.$$.fragment),c=s(),o(x.$$.fragment)},l:function(t){f(r.$$.fragment,t),n=i(t),f(v.$$.fragment,t),e=i(t),f(h.$$.fragment,t),c=i(t),f(x.$$.fragment,t)},m:function(t,o){u(r,t,o),$(t,n,o),u(v,t,o),$(t,e,o),u(h,t,o),$(t,c,o),u(x,t,o),a=!0},p:function(t,n){var e=l(n,1)[0],c={};1&e&&(c.$$scope={dirty:e,ctx:t}),r.$set(c);var a={};1&e&&(a.$$scope={dirty:e,ctx:t}),v.$set(a);var o={};1&e&&(o.$$scope={dirty:e,ctx:t}),h.$set(o);var s={};1&e&&(s.$$scope={dirty:e,ctx:t}),x.$set(s)},i:function(t){a||(p(r.$$.fragment,t),p(v.$$.fragment,t),p(h.$$.fragment,t),p(x.$$.fragment,t),a=!0)},o:function(t){m(r.$$.fragment,t),m(v.$$.fragment,t),m(h.$$.fragment,t),m(x.$$.fragment,t),a=!1},d:function(t){g(r,t),t&&d(n),g(v,t),t&&d(e),g(h,t),t&&d(c),g(x,t)}}}function E(){C.info("Tag 2 closed")}function J(t){t.detail.preventClose(),C.info("Tag 3 clicked but close was prevented")}var K=function(o){t(i,r);var s,f=(s=i,function(){var t,n=v(s);if(L()){var e=v(this).constructor;t=Reflect.construct(n,arguments,e)}else t=n.apply(this,arguments);return h(this,t)});function i(t){var r;return n(this,i),r=f.call(this),e(a(r),t,null,B,c,{}),r}return i}();export default K;
