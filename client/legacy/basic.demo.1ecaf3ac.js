import{_ as t,a as n,i as o,s as c,b as e,S as r,J as a,c as s,K as f,f as i,L as u,l as $,x as l,A as p,B as m,N as d,d as v,o as h,p as y,t as g,j as x,e as S,g as R,h as M,m as P}from"./client.e6de3845.js";import{c as b,M as j}from"./index.30122d32.js";function k(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function E(t){var n;return{c:function(){n=g("Open Modal")},l:function(t){n=x(t,"Open Modal")},m:function(t,o){$(t,n,o)},d:function(t){t&&v(n)}}}function O(t){var n,o,c,e,r,a,f,u;return{c:function(){n=S("p"),o=g("Some contents..."),c=s(),e=S("p"),r=g("Some contents..."),a=s(),f=S("p"),u=g("Some contents...")},l:function(t){n=R(t,"P",{});var s=M(n);o=x(s,"Some contents..."),s.forEach(v),c=i(t),e=R(t,"P",{});var $=M(e);r=x($,"Some contents..."),$.forEach(v),a=i(t),f=R(t,"P",{});var l=M(f);u=x(l,"Some contents..."),l.forEach(v)},m:function(t,s){$(t,n,s),P(n,o),$(t,c,s),$(t,e,s),P(e,r),$(t,a,s),$(t,f,s),P(f,u)},d:function(t){t&&v(n),t&&v(c),t&&v(e),t&&v(a),t&&v(f)}}}function w(t){var n,o,c=new b({props:{type:"primary",$$slots:{default:[E]},$$scope:{ctx:t}}});c.$on("click",t[1]);var e=new j({props:{title:"Basic Modal",visible:t[0],$$slots:{default:[O]},$$scope:{ctx:t}}});return e.$on("ok",t[3]),e.$on("cancel",t[2]),{c:function(){a(c.$$.fragment),n=s(),a(e.$$.fragment)},l:function(t){f(c.$$.fragment,t),n=i(t),f(e.$$.fragment,t)},m:function(t,r){u(c,t,r),$(t,n,r),u(e,t,r),o=!0},p:function(t,n){var o=l(n,1)[0],r={};16&o&&(r.$$scope={dirty:o,ctx:t}),c.$set(r);var a={};1&o&&(a.visible=t[0]),16&o&&(a.$$scope={dirty:o,ctx:t}),e.$set(a)},i:function(t){o||(p(c.$$.fragment,t),p(e.$$.fragment,t),o=!0)},o:function(t){m(c.$$.fragment,t),m(e.$$.fragment,t),o=!1},d:function(t){d(c,t),t&&v(n),d(e,t)}}}function A(t,n,o){var c=!1;function e(){o(0,c=!1)}return[c,function(){o(0,c=!0)},e,function(){j.confirm({content:"Are you sure?",onOk:function(){e()}})}]}var B=function(a){t(i,r);var s,f=(s=i,function(){var t,n=h(s);if(k()){var o=h(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return y(this,t)});function i(t){var r;return n(this,i),r=f.call(this),o(e(r),t,A,w,c,{}),r}return i}();export default B;
