import{_ as t,a as n,i as a,s as r,b as e,S as s,e as o,J as u,g as c,h as i,K as f,d as l,w as h,l as p,L as v,x as d,A as m,B as $,N as g,o as y,p as x,E as R,aN as w,aO as D}from"./client.3d737a22.js";import{I as E}from"./index.8c189d6a.js";function j(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function B(t){var n,a,r;function e(n){t[3].call(null,n)}var s={placeholder:"Basic usage"};void 0!==t[0]&&(s.value=t[0]);var y=new E({props:s});return R.push((function(){return w(y,"value",e)})),y.$on("input",t[1]),y.$on("enter",t[2]),{c:function(){n=o("div"),u(y.$$.fragment),this.h()},l:function(t){n=c(t,"DIV",{style:!0});var a=i(n);f(y.$$.fragment,a),a.forEach(l),this.h()},h:function(){h(n,"width","50%"),h(n,"min-width","230px")},m:function(t,a){p(t,n,a),v(y,n,null),r=!0},p:function(t,n){var r=d(n,1)[0],e={};!a&&1&r&&(a=!0,e.value=t[0],D((function(){return a=!1}))),y.$set(e)},i:function(t){r||(m(y.$$.fragment,t),r=!0)},o:function(t){$(y.$$.fragment,t),r=!1},d:function(t){t&&l(n),g(y)}}}function I(t,n,a){var r="";return[r,function(){console.log("Current value is:",r)},function(){console.log("Enter pressed, the value is:",r)},function(t){a(0,r=t)}]}var N=function(o){t(i,s);var u,c=(u=i,function(){var t,n=y(u);if(j()){var a=y(this).constructor;t=Reflect.construct(n,arguments,a)}else t=n.apply(this,arguments);return x(this,t)});function i(t){var s;return n(this,i),s=c.call(this),a(e(s),t,I,B,r,{}),s}return i}();export default N;