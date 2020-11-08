import{S as e,i as s,s as t,x as n,e as o,t as a,a as r,C as i,b as c,f as m,g as d,d as p,c as l,D as f,j as g,k as u,E as h,a4 as $,a5 as v,v as y,w as E,G as w,h as b,q as C,n as D}from"./client.eb590d12.js";import{E as x,D as B,P as T}from"./DocsTable.4529a657.js";import"./index.2afee243.js";import O from"./basic.demo.0fabf104.js";import k from"./status.demo.85f05c7c.js";import P from"./duration.demo.b37c3634.js";import A from"./loading.demo.31cf9550.js";import I from"./promise.demo.42df795e.js";import j from"./update.demo.a8a9ecf1.js";function L(e){let s,t;return{c(){s=o("p"),t=a("A basic example of an information message."),this.h()},l(e){s=c(e,"P",{slot:!0});var n=m(s);t=d(n,"A basic example of an information message."),n.forEach(p),this.h()},h(){b(s,"slot","description")},m(e,n){g(e,s,n),u(s,t)},d(e){e&&p(s)}}}function M(e){let s,t,n,r,i,l,f,h,$,v,y;return{c(){s=o("p"),t=a("System status can be communicated using "),n=o("code"),r=a("success"),i=a(", "),l=o("code"),f=a("warning"),h=a(", or "),$=o("code"),v=a("error"),y=a(" messages."),this.h()},l(e){s=c(e,"P",{slot:!0});var o=m(s);t=d(o,"System status can be communicated using "),n=c(o,"CODE",{});var a=m(n);r=d(a,"success"),a.forEach(p),i=d(o,", "),l=c(o,"CODE",{});var g=m(l);f=d(g,"warning"),g.forEach(p),h=d(o,", or "),$=c(o,"CODE",{});var u=m($);v=d(u,"error"),u.forEach(p),y=d(o," messages."),o.forEach(p),this.h()},h(){b(s,"slot","description")},m(e,o){g(e,s,o),u(s,t),u(s,n),u(n,r),u(s,i),u(s,l),u(l,f),u(s,h),u(s,$),u($,v),u(s,y)},d(e){e&&p(s)}}}function S(e){let s,t,n,i,f,h,$,v,y,E,w,C,D,x,B,T,O,k;return{c(){s=o("div"),t=o("p"),n=a("Customize the message display duration by using the "),i=o("code"),f=a("duration"),h=a(" option. The default is "),$=o("code"),v=a("3000"),y=a(" (3 seconds)."),E=r(),w=o("p"),C=a("The message will never dismiss if the "),D=o("code"),x=a("duration"),B=a(" is set to "),T=o("code"),O=a("0"),k=a("."),this.h()},l(e){s=c(e,"DIV",{slot:!0});var o=m(s);t=c(o,"P",{});var a=m(t);n=d(a,"Customize the message display duration by using the "),i=c(a,"CODE",{});var r=m(i);f=d(r,"duration"),r.forEach(p),h=d(a," option. The default is "),$=c(a,"CODE",{});var g=m($);v=d(g,"3000"),g.forEach(p),y=d(a," (3 seconds)."),a.forEach(p),E=l(o),w=c(o,"P",{});var u=m(w);C=d(u,"The message will never dismiss if the "),D=c(u,"CODE",{});var b=m(D);x=d(b,"duration"),b.forEach(p),B=d(u," is set to "),T=c(u,"CODE",{});var P=m(T);O=d(P,"0"),P.forEach(p),k=d(u,"."),u.forEach(p),o.forEach(p),this.h()},h(){b(s,"slot","description")},m(e,o){g(e,s,o),u(s,t),u(t,n),u(t,i),u(i,f),u(t,h),u(t,$),u($,v),u(t,y),u(s,E),u(s,w),u(w,C),u(w,D),u(D,x),u(w,B),u(w,T),u(T,O),u(w,k)},d(e){e&&p(s)}}}function q(e){let s,t,n,r,i;return{c(){s=o("p"),t=a("Display a global loading indicator, which can be dismissed asynchronously. The resolved value of the message call promise is a "),n=o("code"),r=a("destroy"),i=a(" function."),this.h()},l(e){s=c(e,"P",{slot:!0});var o=m(s);t=d(o,"Display a global loading indicator, which can be dismissed asynchronously. The resolved value of the message call promise is a "),n=c(o,"CODE",{});var a=m(n);r=d(a,"destroy"),a.forEach(p),i=d(o," function."),o.forEach(p),this.h()},h(){b(s,"slot","description")},m(e,o){g(e,s,o),u(s,t),u(s,n),u(n,r),u(s,i)},d(e){e&&p(s)}}}function N(e){let s,t,n,r;return{c(){s=o("p"),t=o("code"),n=a("message"),r=a(" provides a promise interface for performing actions after it closes. This example will display a new message when the old message closes."),this.h()},l(e){s=c(e,"P",{slot:!0});var o=m(s);t=c(o,"CODE",{});var a=m(t);n=d(a,"message"),a.forEach(p),r=d(o," provides a promise interface for performing actions after it closes. This example will display a new message when the old message closes."),o.forEach(p),this.h()},h(){b(s,"slot","description")},m(e,o){g(e,s,o),u(s,t),u(t,n),u(s,r)},d(e){e&&p(s)}}}function F(e){let s,t,n,r,i;return{c(){s=o("p"),t=a("A message can be updated by using a unique "),n=o("code"),r=a("key"),i=a("."),this.h()},l(e){s=c(e,"P",{slot:!0});var o=m(s);t=d(o,"A message can be updated by using a unique "),n=c(o,"CODE",{});var a=m(n);r=d(a,"key"),a.forEach(p),i=d(o,"."),o.forEach(p),this.h()},h(){b(s,"slot","description")},m(e,o){g(e,s,o),u(s,t),u(s,n),u(n,r),u(s,i)},d(e){e&&p(s)}}}function G(e){let s,t,b,C,D,G,H,z,R,U,V,W,J,K,Q,X,Y,Z,_,ee,se,te,ne,oe,ae,re,ie,ce,me,de,pe,le,fe,ge,ue,he,$e,ve,ye,Ee,we,be,Ce,De,xe,Be,Te,Oe,ke,Pe,Ae,Ie,je,Le,Me,Se,qe,Ne,Fe,Ge,He,ze,Re,Ue;const Ve=new x({props:{id:"message-demo-basic",title:"Basic",demoComponent:O,demoCode:'<Button type="primary" on:click="{info}">Display message</Button>\n\n<script>\n  import { message, Button } from "svant";\n\n  const info = () => {\n    message.info("This is a basic message");\n  };\n<\/script>\n',$$slots:{description:[L]},$$scope:{ctx:e}}}),We=new x({props:{id:"message-demo-statuses",title:"Status",demoComponent:k,demoCode:'<Button on:click="{success}">Success</Button>\n<Button on:click="{error}">Error</Button>\n<Button on:click="{warning}">Warning</Button>\n\n<script>\n  import { Button, message } from "svant";\n\n  const success = () => {\n    message.success("This is a success message");\n  };\n\n  const error = () => {\n    message.error("This is an error message");\n  };\n\n  const warning = () => {\n    message.warning("This is a warning message");\n  };\n<\/script>\n',$$slots:{description:[M]},$$scope:{ctx:e}}}),Je=new x({props:{id:"message-demo-duration",title:"Custom Duration",demoComponent:P,demoCode:'<Button type="primary" on:click="{success}">Customized display duration</Button>\n<Button type="primary" on:click="{infinite}">Open never closing message</Button>\n\n<script>\n  import { Button, message } from "svant";\n\n  const success = () => {\n    message.success({\n      content:\n        "This is a prompt message for success, and it will disappear in 1 second",\n      duration: 1000\n    });\n  };\n\n  const infinite = () => {\n    message.info({\n      content: "This is a prompt that will never close",\n      duration: 0\n    });\n  };\n<\/script>\n',$$slots:{description:[S]},$$scope:{ctx:e}}}),Ke=new x({props:{id:"message-demo-loading",title:"Loading Indicator",demoComponent:A,demoCode:'<Button type="primary" on:click="{loading}">Display a loading indicator</Button>\n\n<script>\n  import { Button, message } from "svant";\n\n  const loading = async () => {\n    const hideMessage = await message.loading({\n      content: "Action in progress..",\n      duration: 0\n    });\n\n    setTimeout(hideMessage, 2500);\n  };\n<\/script>\n',$$slots:{description:[q]},$$scope:{ctx:e}}}),Qe=new x({props:{id:"message-demo-promise",title:"Promise Interface",demoComponent:I,demoCode:'<Button type="primary" on:click="{startAction}">\n  Display sequential messages\n</Button>\n\n<script>\n  import { Button, message } from "svant";\n  import { FireFilled } from "svant/icons";\n\n  const startAction = () => {\n    message\n      .loading({ content: "Action in progress..", duration: 1500 })\n      .then(() =>\n        message.success({ content: "Loading finished", duration: 800 })\n      )\n      .then(() =>\n        message.error({\n          // we want the icon to be red\n          content: "Loading finished is finished",\n          duration: 1500,\n          icon: FireFilled\n        })\n      );\n  };\n<\/script>\n',$$slots:{description:[N]},$$scope:{ctx:e}}}),Xe=new x({props:{id:"message-demo-update",title:"Updating a Message",demoComponent:j,demoCode:'<Button type="primary" on:click="{openMessage}">Open the message box</Button>\n\n<script>\n  import { Button, message } from "svant";\n\n  const key = "updatable";\n\n  const openMessage = () => {\n    message.loading({ content: "Loading...", key });\n    setTimeout(() => {\n      message.success({ content: "Loaded!", key, duration: 1000 });\n    }, 1000);\n  };\n<\/script>\n',$$slots:{description:[F]},$$scope:{ctx:e}}}),Ye=[e[1]];let Ze={};for(let e=0;e<Ye.length;e+=1)Ze=n(Ze,Ye[e]);const _e=new B({props:Ze}),es=new T({props:{language:"javascript",source:e[0]}}),ss=[e[2]];let ts={};for(let e=0;e<ss.length;e+=1)ts=n(ts,ss[e]);const ns=new B({props:ts});return{c(){s=o("h1"),t=a("Message"),b=r(),C=o("p"),D=a("Display global messages as feedback in response to user operations."),G=r(),H=o("h2"),z=a("Examples"),R=r(),i(Ve.$$.fragment),U=r(),i(We.$$.fragment),V=r(),i(Je.$$.fragment),W=r(),i(Ke.$$.fragment),J=r(),i(Qe.$$.fragment),K=r(),i(Xe.$$.fragment),Q=r(),X=o("h2"),Y=a("API"),Z=r(),_=o("p"),ee=a("This component provides the following static methods:"),se=r(),te=o("ul"),ne=o("li"),oe=o("code"),ae=a("message.success"),re=r(),ie=o("li"),ce=o("code"),me=a("message.error"),de=r(),pe=o("li"),le=o("code"),fe=a("message.info"),ge=r(),ue=o("li"),he=o("code"),$e=a("message.warning"),ve=r(),ye=o("li"),Ee=o("code"),we=a("message.warn // alias of warning"),be=r(),Ce=o("li"),De=o("code"),xe=a("message.loading"),Be=r(),Te=o("p"),Oe=a("Each returns a promise that resolves when the message closes."),ke=r(),Pe=o("p"),Ae=a("If no additional configuration is needed, a string can be passed as the argument and will render as the content of the message. Otherwise a config object should be passed."),Ie=r(),i(_e.$$.fragment),je=r(),Le=o("h3"),Me=a("Global Configuration"),Se=r(),qe=o("p"),Ne=a("A "),Fe=o("code"),Ge=a("message.config"),He=a(" method is also provided."),ze=r(),i(es.$$.fragment),Re=r(),i(ns.$$.fragment)},l(e){s=c(e,"H1",{});var n=m(s);t=d(n,"Message"),n.forEach(p),b=l(e),C=c(e,"P",{});var o=m(C);D=d(o,"Display global messages as feedback in response to user operations."),o.forEach(p),G=l(e),H=c(e,"H2",{});var a=m(H);z=d(a,"Examples"),a.forEach(p),R=l(e),f(Ve.$$.fragment,e),U=l(e),f(We.$$.fragment,e),V=l(e),f(Je.$$.fragment,e),W=l(e),f(Ke.$$.fragment,e),J=l(e),f(Qe.$$.fragment,e),K=l(e),f(Xe.$$.fragment,e),Q=l(e),X=c(e,"H2",{});var r=m(X);Y=d(r,"API"),r.forEach(p),Z=l(e),_=c(e,"P",{});var i=m(_);ee=d(i,"This component provides the following static methods:"),i.forEach(p),se=l(e),te=c(e,"UL",{});var g=m(te);ne=c(g,"LI",{});var u=m(ne);oe=c(u,"CODE",{});var h=m(oe);ae=d(h,"message.success"),h.forEach(p),u.forEach(p),re=l(g),ie=c(g,"LI",{});var $=m(ie);ce=c($,"CODE",{});var v=m(ce);me=d(v,"message.error"),v.forEach(p),$.forEach(p),de=l(g),pe=c(g,"LI",{});var y=m(pe);le=c(y,"CODE",{});var E=m(le);fe=d(E,"message.info"),E.forEach(p),y.forEach(p),ge=l(g),ue=c(g,"LI",{});var w=m(ue);he=c(w,"CODE",{});var x=m(he);$e=d(x,"message.warning"),x.forEach(p),w.forEach(p),ve=l(g),ye=c(g,"LI",{});var B=m(ye);Ee=c(B,"CODE",{});var T=m(Ee);we=d(T,"message.warn // alias of warning"),T.forEach(p),B.forEach(p),be=l(g),Ce=c(g,"LI",{});var O=m(Ce);De=c(O,"CODE",{});var k=m(De);xe=d(k,"message.loading"),k.forEach(p),O.forEach(p),g.forEach(p),Be=l(e),Te=c(e,"P",{});var P=m(Te);Oe=d(P,"Each returns a promise that resolves when the message closes."),P.forEach(p),ke=l(e),Pe=c(e,"P",{});var A=m(Pe);Ae=d(A,"If no additional configuration is needed, a string can be passed as the argument and will render as the content of the message. Otherwise a config object should be passed."),A.forEach(p),Ie=l(e),f(_e.$$.fragment,e),je=l(e),Le=c(e,"H3",{});var I=m(Le);Me=d(I,"Global Configuration"),I.forEach(p),Se=l(e),qe=c(e,"P",{});var j=m(qe);Ne=d(j,"A "),Fe=c(j,"CODE",{});var L=m(Fe);Ge=d(L,"message.config"),L.forEach(p),He=d(j," method is also provided."),j.forEach(p),ze=l(e),f(es.$$.fragment,e),Re=l(e),f(ns.$$.fragment,e)},m(e,n){g(e,s,n),u(s,t),g(e,b,n),g(e,C,n),u(C,D),g(e,G,n),g(e,H,n),u(H,z),g(e,R,n),h(Ve,e,n),g(e,U,n),h(We,e,n),g(e,V,n),h(Je,e,n),g(e,W,n),h(Ke,e,n),g(e,J,n),h(Qe,e,n),g(e,K,n),h(Xe,e,n),g(e,Q,n),g(e,X,n),u(X,Y),g(e,Z,n),g(e,_,n),u(_,ee),g(e,se,n),g(e,te,n),u(te,ne),u(ne,oe),u(oe,ae),u(te,re),u(te,ie),u(ie,ce),u(ce,me),u(te,de),u(te,pe),u(pe,le),u(le,fe),u(te,ge),u(te,ue),u(ue,he),u(he,$e),u(te,ve),u(te,ye),u(ye,Ee),u(Ee,we),u(te,be),u(te,Ce),u(Ce,De),u(De,xe),g(e,Be,n),g(e,Te,n),u(Te,Oe),g(e,ke,n),g(e,Pe,n),u(Pe,Ae),g(e,Ie,n),h(_e,e,n),g(e,je,n),g(e,Le,n),u(Le,Me),g(e,Se,n),g(e,qe,n),u(qe,Ne),u(qe,Fe),u(Fe,Ge),u(qe,He),g(e,ze,n),h(es,e,n),g(e,Re,n),h(ns,e,n),Ue=!0},p(e,[s]){const t={};8&s&&(t.$$scope={dirty:s,ctx:e}),Ve.$set(t);const n={};8&s&&(n.$$scope={dirty:s,ctx:e}),We.$set(n);const o={};8&s&&(o.$$scope={dirty:s,ctx:e}),Je.$set(o);const a={};8&s&&(a.$$scope={dirty:s,ctx:e}),Ke.$set(a);const r={};8&s&&(r.$$scope={dirty:s,ctx:e}),Qe.$set(r);const i={};8&s&&(i.$$scope={dirty:s,ctx:e}),Xe.$set(i);const c=2&s?$(Ye,[v(e[1])]):{};_e.$set(c);const m=4&s?$(ss,[v(e[2])]):{};ns.$set(m)},i(e){Ue||(y(Ve.$$.fragment,e),y(We.$$.fragment,e),y(Je.$$.fragment,e),y(Ke.$$.fragment,e),y(Qe.$$.fragment,e),y(Xe.$$.fragment,e),y(_e.$$.fragment,e),y(es.$$.fragment,e),y(ns.$$.fragment,e),Ue=!0)},o(e){E(Ve.$$.fragment,e),E(We.$$.fragment,e),E(Je.$$.fragment,e),E(Ke.$$.fragment,e),E(Qe.$$.fragment,e),E(Xe.$$.fragment,e),E(_e.$$.fragment,e),E(es.$$.fragment,e),E(ns.$$.fragment,e),Ue=!1},d(e){e&&p(s),e&&p(b),e&&p(C),e&&p(G),e&&p(H),e&&p(R),w(Ve,e),e&&p(U),w(We,e),e&&p(V),w(Je,e),e&&p(W),w(Ke,e),e&&p(J),w(Qe,e),e&&p(K),w(Xe,e),e&&p(Q),e&&p(X),e&&p(Z),e&&p(_),e&&p(se),e&&p(te),e&&p(Be),e&&p(Te),e&&p(ke),e&&p(Pe),e&&p(Ie),w(_e,e),e&&p(je),e&&p(Le),e&&p(Se),e&&p(qe),e&&p(ze),w(es,e),e&&p(Re),w(ns,e)}}}function H(e){return["message.config({\n  top: 100,\n  duration: 2000,\n  maxCount: 3,\n  rtl: true,\n});",{title:"Config Attributes",columns:["Property","Description","Type","Default"],data:[{property:"content",description:"Content of the message",type:"String",default:"-"},{property:"duration",description:"Time (milliseconds) before auto-dismiss, don't dismiss if set to 0",type:"Number",default:"3000"},{property:"icon",description:"Custom icon",type:"SvelteComponent",default:"-"},{property:"key",description:"A unique identifier for the message",type:"String|Number",default:"-"}]},{title:"Global Config Options",columns:["Property","Description","Type","Default"],data:[{property:"duration",description:"Time before auto-dismiss, in milliseconds",type:"Number",default:"3000"},{property:"maxCount",description:"Max messages to show at one time, drop oldest if limit is exceeded",type:"Number",default:""},{property:"top",description:"Distance from top (pixels)",type:"Number",default:""},{property:"top",description:"Whether to enable RTL (Right to left) mode",type:"Boolean",default:"false"}]}]}class z extends e{constructor(e){super(),s(this,e,H,G,t,{})}}function R(e){let s,t,n;const a=new z({});return{c(){s=r(),t=o("div"),i(a.$$.fragment),this.h()},l(e){C('[data-svelte="svelte-6h1peq"]',document.head).forEach(p),s=l(e),t=c(e,"DIV",{class:!0});var n=m(t);f(a.$$.fragment,n),n.forEach(p),this.h()},h(){document.title="Message",b(t,"class","markdown api-container")},m(e,o){g(e,s,o),g(e,t,o),h(a,t,null),n=!0},p:D,i(e){n||(y(a.$$.fragment,e),n=!0)},o(e){E(a.$$.fragment,e),n=!1},d(e){e&&p(s),e&&p(t),w(a)}}}export default class extends e{constructor(e){super(),s(this,e,null,R,t,{})}}