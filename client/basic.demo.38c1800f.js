import{S as s,i as t,s as a,C as e,D as n,E as r,v as i,w as o,G as c,t as $,g as m,j as f,d as p}from"./client.7d5f28db.js";import{B as l,m as d}from"./index.9f1e07e4.js";function u(s){let t;return{c(){t=$("Display message")},l(s){t=m(s,"Display message")},m(s,a){f(s,t,a)},d(s){s&&p(t)}}}function g(s){let t;const a=new l({props:{type:"primary",$$slots:{default:[u]},$$scope:{ctx:s}}});return a.$on("click",s[0]),{c(){e(a.$$.fragment)},l(s){n(a.$$.fragment,s)},m(s,e){r(a,s,e),t=!0},p(s,[t]){const e={};2&t&&(e.$$scope={dirty:t,ctx:s}),a.$set(e)},i(s){t||(i(a.$$.fragment,s),t=!0)},o(s){o(a.$$.fragment,s),t=!1},d(s){c(a,s)}}}function x(s){return[()=>{d.info("This is a basic message")}]}export default class extends s{constructor(s){super(),t(this,s,x,g,a,{})}}