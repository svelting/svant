import{S as e,i as a,s as n,e as l,C as r,a as s,b as t,f as o,D as p,c as $,d as f,j as u,E as g,k as c,n as d,v as i,w as m,G as b}from"./client.6ddc1f6e.js";import{e as v}from"./index.8d2617b6.js";function A(e){let a,n,A,P,O,w,B,R,V,j,x,k;const D=new v({props:{options:e[0],defaultValue:["Apple"]}});D.$on("change",h);const E=new v({props:{options:e[1],defaultValue:["Pear"]}});E.$on("change",h);const C=new v({props:{options:e[2],disabled:!0,defaultValue:["Apple"]}});return C.$on("change",h),{c(){a=l("div"),r(D.$$.fragment),n=s(),A=l("br"),P=s(),O=l("br"),w=s(),r(E.$$.fragment),B=s(),R=l("br"),V=s(),j=l("br"),x=s(),r(C.$$.fragment)},l(e){a=t(e,"DIV",{});var l=o(a);p(D.$$.fragment,l),n=$(l),A=t(l,"BR",{}),P=$(l),O=t(l,"BR",{}),w=$(l),p(E.$$.fragment,l),B=$(l),R=t(l,"BR",{}),V=$(l),j=t(l,"BR",{}),x=$(l),p(C.$$.fragment,l),l.forEach(f)},m(e,l){u(e,a,l),g(D,a,null),c(a,n),c(a,A),c(a,P),c(a,O),c(a,w),g(E,a,null),c(a,B),c(a,R),c(a,V),c(a,j),c(a,x),g(C,a,null),k=!0},p:d,i(e){k||(i(D.$$.fragment,e),i(E.$$.fragment,e),i(C.$$.fragment,e),k=!0)},o(e){m(D.$$.fragment,e),m(E.$$.fragment,e),m(C.$$.fragment,e),k=!1},d(e){e&&f(a),b(D),b(E),b(C)}}}function h({detail:e}){console.log("checked = ",e)}function P(e){return[["Apple","Pear","Orange"],[{label:"Apple",value:"Apple"},{label:"Pear",value:"Pear"},{label:"Orange",value:"Orange",disabled:!0}],[{label:"Apple",value:"Apple"},{label:"Pear",value:"Pear"},{label:"Orange",value:"Orange"}]]}export default class extends e{constructor(e){super(),a(this,e,P,A,n,{})}}