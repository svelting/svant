import{_ as t,a as n,i as e,s as a,b as r,S as c,a8 as s,J as o,K as f,l as i,L as u,A as l,B as h,d as v,N as p,e as d,t as g,c as $,g as m,h as b,j as y,f as x,w as k,m as R,x as w,ax as M,O as S,o as j,p as A,M as N,aK as B,aZ as C,F as D}from"./client.f90ccfb2.js";import{T as K}from"./index.64a5a485.js";function P(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function E(t,n,e){var a=t.slice();return a[3]=n[e],a}function F(t){var n,e,a=t[3].label+"";return{c:function(){n=g(a),e=$()},l:function(t){n=y(t,a),e=x(t)},m:function(t,a){i(t,n,a),i(t,e,a)},p:function(t,e){1&e&&a!==(a=t[3].label+"")&&D(n,a)},d:function(t){t&&v(n),t&&v(e)}}}function J(t,n){var e,a;var r=new K({props:{checked:n[3].selected,$$slots:{default:[F]},$$scope:{ctx:n}}});return r.$on("click",(function(){for(var t,e=arguments.length,a=new Array(e),r=0;r<e;r++)a[r]=arguments[r];return(t=n)[2].apply(t,[n[3]].concat(a))})),{key:t,first:null,c:function(){e=s(),o(r.$$.fragment),this.h()},l:function(t){e=s(),f(r.$$.fragment,t),this.h()},h:function(){this.first=e},m:function(t,n){i(t,e,n),u(r,t,n),a=!0},p:function(t,e){n=t;var a={};1&e&&(a.checked=n[3].selected),65&e&&(a.$$scope={dirty:e,ctx:n}),r.$set(a)},i:function(t){a||(l(r.$$.fragment,t),a=!0)},o:function(t){h(r.$$.fragment,t),a=!1},d:function(t){t&&v(e),p(r,t)}}}function L(t){for(var n,e,a,r,c,o=[],f=new Map,u=t[0],p=function(t){return t[3].label},j=0;j<u.length;j+=1){var A=E(t,u,j),C=p(A);f.set(C,o[j]=J(C,A))}return{c:function(){n=d("span"),e=g("Categories:"),a=$();for(var t=0;t<o.length;t+=1)o[t].c();r=s(),this.h()},l:function(t){n=m(t,"SPAN",{style:!0});var c=b(n);e=y(c,"Categories:"),c.forEach(v),a=x(t);for(var f=0;f<o.length;f+=1)o[f].l(t);r=s(),this.h()},h:function(){k(n,"margin-right","8px")},m:function(t,s){i(t,n,s),R(n,e),i(t,a,s);for(var f=0;f<o.length;f+=1)o[f].m(t,s);i(t,r,s),c=!0},p:function(t,n){var e=w(n,1)[0];if(3&e){var a=t[0];N(),o=M(o,e,p,1,t,a,f,r.parentNode,B,J,r,E),S()}},i:function(t){if(!c){for(var n=0;n<u.length;n+=1)l(o[n]);c=!0}},o:function(t){for(var n=0;n<o.length;n+=1)h(o[n]);c=!1},d:function(t){t&&v(n),t&&v(a);for(var e=0;e<o.length;e+=1)o[e].d(t);t&&v(r)}}}function O(t,n,e){var a=[{label:"Movies",selected:!1},{label:"Books",selected:!0},{label:"Music",selected:!1},{label:"Sports",selected:!1}],r=function(t){var n=C(a),r=n.find((function(n){return n.label===t}));r.selected=!r.selected,e(0,a=C(n))};return[a,r,function(t){r(t.label)}]}var T=function(s){t(i,c);var o,f=(o=i,function(){var t,n=j(o);if(P()){var e=j(this).constructor;t=Reflect.construct(n,arguments,e)}else t=n.apply(this,arguments);return A(this,t)});function i(t){var c;return n(this,i),c=f.call(this),e(r(c),t,O,L,a,{}),c}return i}();export default T;
