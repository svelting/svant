import{S as e,i as t,s,e as a,C as c,a as n,b as $,f as r,D as o,d as l,c as i,h as d,j as f,k as p,E as m,v as u,w as h,G as g,t as k,g as x,A as y}from"./client.6ddc1f6e.js";import{c as b,d as E}from"./index.8d2617b6.js";function v(e){let t;return{c(){t=k(e[2])},l(s){t=x(s,e[2])},m(e,s){f(e,t,s)},p(e,s){4&s&&y(t,e[2])},d(e){e&&l(t)}}}function D(e){let t,s=e[0]?"Uncheck":"Check";return{c(){t=k(s)},l(e){t=x(e,s)},m(e,s){f(e,t,s)},p(e,a){1&a&&s!==(s=e[0]?"Uncheck":"Check")&&y(t,s)},d(e){e&&l(t)}}}function w(e){let t,s=e[1]?"Enable":"Disable";return{c(){t=k(s)},l(e){t=x(e,s)},m(e,s){f(e,t,s)},p(e,a){2&a&&s!==(s=e[1]?"Enable":"Disable")&&y(t,s)},d(e){e&&l(t)}}}function C(e){let t,s,k,x,y,C,j;const U=new b({props:{checked:e[0],disabled:e[1],$$slots:{default:[v]},$$scope:{ctx:e}}});U.$on("change",e[5]);const z=new E({props:{type:"primary",size:"small",$$slots:{default:[D]},$$scope:{ctx:e}}});z.$on("click",e[3]);const P=new E({props:{style:{margin:"0 10px"},type:"primary",size:"small",$$slots:{default:[w]},$$scope:{ctx:e}}});return P.$on("click",e[4]),{c(){t=a("div"),s=a("p"),c(U.$$.fragment),x=n(),y=a("p"),c(z.$$.fragment),C=n(),c(P.$$.fragment),this.h()},l(e){t=$(e,"DIV",{});var a=r(t);s=$(a,"P",{style:!0});var c=r(s);o(U.$$.fragment,c),c.forEach(l),x=i(a),y=$(a,"P",{});var n=r(y);o(z.$$.fragment,n),C=i(n),o(P.$$.fragment,n),n.forEach(l),a.forEach(l),this.h()},h(){d(s,"style",k={marginBottom:"20px"})},m(e,a){f(e,t,a),p(t,s),m(U,s,null),p(t,x),p(t,y),m(z,y,null),p(y,C),m(P,y,null),j=!0},p(e,[t]){const s={};1&t&&(s.checked=e[0]),2&t&&(s.disabled=e[1]),68&t&&(s.$$scope={dirty:t,ctx:e}),U.$set(s);const a={};65&t&&(a.$$scope={dirty:t,ctx:e}),z.$set(a);const c={};66&t&&(c.$$scope={dirty:t,ctx:e}),P.$set(c)},i(e){j||(u(U.$$.fragment,e),u(z.$$.fragment,e),u(P.$$.fragment,e),j=!0)},o(e){h(U.$$.fragment,e),h(z.$$.fragment,e),h(P.$$.fragment,e),j=!1},d(e){e&&l(t),g(U),g(z),g(P)}}}function j(e,t,s){let a,c=!0,n=!1;return e.$$.update=()=>{3&e.$$.dirty&&s(2,a=`${c?"Checked":"Unchecked"}-${n?"Disabled":"Enabled"}`)},[c,n,a,function(){s(0,c=!c)},function(){s(1,n=!n)},function({detail:e}){console.log("checked = ",e.target.checked),s(0,c=e.target.checked)}]}export default class extends e{constructor(e){super(),t(this,e,j,C,s,{})}}