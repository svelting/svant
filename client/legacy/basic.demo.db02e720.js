import{_ as t,a as n,i,s as o,b as c,S as e,J as a,K as r,L as f,x as s,A as u,B as l,N as p,o as h,p as $,t as d,j as m,l as y,d as v}from"./client.47d9c280.js";import{B as x,n as g,m as R}from"./index.0a2ad9d9.js";function T(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function b(t){var n;return{c:function(){n=d("Open the notification box")},l:function(t){n=m(t,"Open the notification box")},m:function(t,i){y(t,n,i)},d:function(t){t&&v(n)}}}function j(t){var n,i=new x({props:{type:"primary",$$slots:{default:[b]},$$scope:{ctx:t}}});return i.$on("click",t[0]),{c:function(){a(i.$$.fragment)},l:function(t){r(i.$$.fragment,t)},m:function(t,o){f(i,t,o),n=!0},p:function(t,n){var o=s(n,1)[0],c={};2&o&&(c.$$scope={dirty:o,ctx:t}),i.$set(c)},i:function(t){n||(u(i.$$.fragment,t),n=!0)},o:function(t){l(i.$$.fragment,t),n=!1},d:function(t){p(i,t)}}}function k(t){return[function(){g.open({message:"Notification Title",description:"This is the content of the notification. This is the content of the notification. This is the content of the notification.",onClick:function(){R.info("Notification Clicked!")}})}]}var N=function(a){t(s,e);var r,f=(r=s,function(){var t,n=h(r);if(T()){var i=h(this).constructor;t=Reflect.construct(n,arguments,i)}else t=n.apply(this,arguments);return $(this,t)});function s(t){var e;return n(this,s),e=f.call(this),i(c(e),t,k,j,o,{}),e}return s}();export default N;