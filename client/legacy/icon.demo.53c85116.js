import{_ as t,a as n,i as c,s as e,b as o,S as r,bg as a,bh as f,bi as s,J as i,c as $,K as u,f as l,L as m,l as p,x as d,A as g,B as v,N as h,d as x,o as b,p as y,t as w,j as k,bj as R,e as j,g as L,h as S,k as T,m as A}from"./client.47d9c280.js";import{T as D}from"./index.0a2ad9d9.js";function F(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function I(t){var n;return{c:function(){n=w("Twitter")},l:function(t){n=k(t,"Twitter")},m:function(t,c){p(t,n,c)},d:function(t){t&&x(n)}}}function N(t){var n;return{c:function(){n=w("Youtube")},l:function(t){n=k(t,"Youtube")},m:function(t,c){p(t,n,c)},d:function(t){t&&x(n)}}}function P(t){var n;return{c:function(){n=w("Facebook")},l:function(t){n=k(t,"Facebook")},m:function(t,c){p(t,n,c)},d:function(t){t&&x(n)}}}function Y(t){var n,c,e,o,r=new R({});return{c:function(){i(r.$$.fragment),n=$(),c=j("span"),e=w("LinkedIn"),this.h()},l:function(t){u(r.$$.fragment,t),n=l(t),c=L(t,"SPAN",{class:!0});var o=S(c);e=k(o,"LinkedIn"),o.forEach(x),this.h()},h:function(){T(c,"class","linkedin-text svelte-61xp31")},m:function(t,a){m(r,t,a),p(t,n,a),p(t,c,a),A(c,e),o=!0},i:function(t){o||(g(r.$$.fragment,t),o=!0)},o:function(t){v(r.$$.fragment,t),o=!1},d:function(t){h(r,t),t&&x(n),t&&x(c)}}}function B(t){var n,c,e,o,r=new D({props:{icon:a,color:"#55acee",$$slots:{default:[I]},$$scope:{ctx:t}}}),b=new D({props:{icon:f,color:"#cd201f",$$slots:{default:[N]},$$scope:{ctx:t}}}),y=new D({props:{icon:s,color:"#3b5999",$$slots:{default:[P]},$$scope:{ctx:t}}}),w=new D({props:{color:"#55acee",$$slots:{default:[Y]},$$scope:{ctx:t}}});return{c:function(){i(r.$$.fragment),n=$(),i(b.$$.fragment),c=$(),i(y.$$.fragment),e=$(),i(w.$$.fragment)},l:function(t){u(r.$$.fragment,t),n=l(t),u(b.$$.fragment,t),c=l(t),u(y.$$.fragment,t),e=l(t),u(w.$$.fragment,t)},m:function(t,a){m(r,t,a),p(t,n,a),m(b,t,a),p(t,c,a),m(y,t,a),p(t,e,a),m(w,t,a),o=!0},p:function(t,n){var c=d(n,1)[0],e={};1&c&&(e.$$scope={dirty:c,ctx:t}),r.$set(e);var o={};1&c&&(o.$$scope={dirty:c,ctx:t}),b.$set(o);var a={};1&c&&(a.$$scope={dirty:c,ctx:t}),y.$set(a);var f={};1&c&&(f.$$scope={dirty:c,ctx:t}),w.$set(f)},i:function(t){o||(g(r.$$.fragment,t),g(b.$$.fragment,t),g(y.$$.fragment,t),g(w.$$.fragment,t),o=!0)},o:function(t){v(r.$$.fragment,t),v(b.$$.fragment,t),v(y.$$.fragment,t),v(w.$$.fragment,t),o=!1},d:function(t){h(r,t),t&&x(n),h(b,t),t&&x(c),h(y,t),t&&x(e),h(w,t)}}}var E=function(a){t(i,r);var f,s=(f=i,function(){var t,n=b(f);if(F()){var c=b(this).constructor;t=Reflect.construct(n,arguments,c)}else t=n.apply(this,arguments);return y(this,t)});function i(t){var r;return n(this,i),r=s.call(this),c(o(r),t,null,B,e,{}),r}return i}();export default E;