import{_ as t,a as n,i as o,s as e,b as c,S as a,J as r,c as f,K as i,f as s,L as u,l,x as $,A as p,B as m,N as d,d as g,o as v,p as h,t as y,j as x,e as w,g as b,h as R,m as j,F as C}from"./client.41f6a35a.js";import{B as L,M}from"./index.eefff4ff.js";function T(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function k(t){var n;return{c:function(){n=y("Open Modal with async logic")},l:function(t){n=x(t,"Open Modal with async logic")},m:function(t,o){l(t,n,o)},d:function(t){t&&g(n)}}}function B(t){var n,o;return{c:function(){n=w("p"),o=y(t[1])},l:function(e){n=b(e,"P",{});var c=R(n);o=x(c,t[1]),c.forEach(g)},m:function(t,e){l(t,n,e),j(n,o)},p:function(t,n){2&n&&C(o,t[1])},d:function(t){t&&g(n)}}}function D(t){var n,o,e=new L({props:{type:"primary",$$slots:{default:[k]},$$scope:{ctx:t}}});e.$on("click",t[3]);var c=new M({props:{title:"Title",visible:t[0],confirmLoading:t[2],$$slots:{default:[B]},$$scope:{ctx:t}}});return c.$on("ok",t[4]),c.$on("cancel",t[5]),{c:function(){r(e.$$.fragment),n=f(),r(c.$$.fragment)},l:function(t){i(e.$$.fragment,t),n=s(t),i(c.$$.fragment,t)},m:function(t,a){u(e,t,a),l(t,n,a),u(c,t,a),o=!0},p:function(t,n){var o=$(n,1)[0],a={};64&o&&(a.$$scope={dirty:o,ctx:t}),e.$set(a);var r={};1&o&&(r.visible=t[0]),4&o&&(r.confirmLoading=t[2]),66&o&&(r.$$scope={dirty:o,ctx:t}),c.$set(r)},i:function(t){o||(p(e.$$.fragment,t),p(c.$$.fragment,t),o=!0)},o:function(t){m(e.$$.fragment,t),m(c.$$.fragment,t),o=!1},d:function(t){d(e,t),t&&g(n),d(c,t)}}}function O(t,n,o){var e=!1,c="Content of the modal",a=!1;return[e,c,a,function(){o(0,e=!0)},function(){o(1,c="The modal will be closed after two seconds"),o(2,a=!0),setTimeout((function(){o(0,e=!1),o(2,a=!1),o(1,c="Content of the modal")}),2e3)},function(){console.log("Cancel button pressed"),o(0,e=!1)}]}var P=function(r){t(s,a);var f,i=(f=s,function(){var t,n=v(f);if(T()){var o=v(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return h(this,t)});function s(t){var a;return n(this,s),a=i.call(this),o(c(a),t,O,D,e,{}),a}return s}();export default P;
