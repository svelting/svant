import{S as t,i as o,s as e,C as n,D as i,E as s,v as c,w as a,G as f,t as r,g as l,j as m,d as p}from"./client.7bc990f1.js";import{B as $,n as u,m as h}from"./index.fa29be7f.js";function d(t){let o;return{c(){o=r("Open the notification box")},l(t){o=l(t,"Open the notification box")},m(t,e){m(t,o,e)},d(t){t&&p(o)}}}function x(t){let o;const e=new $({props:{type:"primary",$$slots:{default:[d]},$$scope:{ctx:t}}});return e.$on("click",t[0]),{c(){n(e.$$.fragment)},l(t){i(e.$$.fragment,t)},m(t,n){s(e,t,n),o=!0},p(t,[o]){const n={};2&o&&(n.$$scope={dirty:o,ctx:t}),e.$set(n)},i(t){o||(c(e.$$.fragment,t),o=!0)},o(t){a(e.$$.fragment,t),o=!1},d(t){f(e,t)}}}function y(t){return[()=>{u.open({message:"Notification Title",description:"This is the content of the notification. This is the content of the notification. This is the content of the notification.",key:"custom_key",onClose:()=>{h.info("Notification closed")},button:{type:"primary",size:"small",text:"Confirm",onClick:()=>{h.info("Close button clicked!"),u.close("custom_key")}}})}]}export default class extends t{constructor(t){super(),o(this,t,y,x,e,{})}}
