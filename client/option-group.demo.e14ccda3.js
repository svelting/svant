import{S as e,i as t,s as $,C as a,D as n,E as s,v as r,w as l,G as c,z as o,ay as f,az as m,a as g,c as u,j as i,d as p,n as d}from"./client.7d5f28db.js";import{S as x,g as y,O as v}from"./index.9f1e07e4.js";function w(e){let t,$;const o=new v({props:{value:"jack",label:"Jack"}}),f=new v({props:{value:"lucy",label:"Lucy"}});return{c(){a(o.$$.fragment),t=g(),a(f.$$.fragment)},l(e){n(o.$$.fragment,e),t=u(e),n(f.$$.fragment,e)},m(e,a){s(o,e,a),i(e,t,a),s(f,e,a),$=!0},p:d,i(e){$||(r(o.$$.fragment,e),r(f.$$.fragment,e),$=!0)},o(e){l(o.$$.fragment,e),l(f.$$.fragment,e),$=!1},d(e){c(o,e),e&&p(t),c(f,e)}}}function b(e){let t;const $=new v({props:{value:"yiminghe",label:"Yiminghe"}});return{c(){a($.$$.fragment)},l(e){n($.$$.fragment,e)},m(e,a){s($,e,a),t=!0},p:d,i(e){t||(r($.$$.fragment,e),t=!0)},o(e){l($.$$.fragment,e),t=!1},d(e){c($,e)}}}function h(e){let t,$;const o=new y({props:{label:"Manager",$$slots:{default:[w]},$$scope:{ctx:e}}}),f=new y({props:{label:"Engineer",$$slots:{default:[b]},$$scope:{ctx:e}}});return{c(){a(o.$$.fragment),t=g(),a(f.$$.fragment)},l(e){n(o.$$.fragment,e),t=u(e),n(f.$$.fragment,e)},m(e,a){s(o,e,a),i(e,t,a),s(f,e,a),$=!0},p(e,t){const $={};4&t&&($.$$scope={dirty:t,ctx:e}),o.$set($);const a={};4&t&&(a.$$scope={dirty:t,ctx:e}),f.$set(a)},i(e){$||(r(o.$$.fragment,e),r(f.$$.fragment,e),$=!0)},o(e){l(o.$$.fragment,e),l(f.$$.fragment,e),$=!1},d(e){c(o,e),e&&p(t),c(f,e)}}}function j(e){let t,$;function g(t){e[1].call(null,t)}let u={style:{width:200},$$slots:{default:[h]},$$scope:{ctx:e}};void 0!==e[0]&&(u.value=e[0]);const i=new x({props:u});return o.push(()=>f(i,"value",g)),{c(){a(i.$$.fragment)},l(e){n(i.$$.fragment,e)},m(e,t){s(i,e,t),$=!0},p(e,[$]){const a={};4&$&&(a.$$scope={dirty:$,ctx:e}),!t&&1&$&&(t=!0,a.value=e[0],m(()=>t=!1)),i.$set(a)},i(e){$||(r(i.$$.fragment,e),$=!0)},o(e){l(i.$$.fragment,e),$=!1},d(e){c(i,e)}}}function k(e,t,$){let a="lucy";return[a,function(e){a=e,$(0,a)}]}export default class extends e{constructor(e){super(),t(this,e,k,j,$,{})}}