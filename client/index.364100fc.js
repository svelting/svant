import{S as e,i as r,s as a,x as t,e as n,t as m,a as o,K as c,b as i,f as s,g as p,d,c as u,M as f,h as l,j as b,k as h,N as $,a0 as g,a1 as B,v as I,w as v,O as A,n as E}from"./client.e374c2b6.js";import{P as w,D as y}from"./DocsTable.0438f7c6.js";import"./index.8d85b5d2.js";import S from"./basic.demo.29eccc1f.js";import C from"./icon.demo.abbe2bef.js";import D from"./separator.demo.0cf3118e.js";import H from"./multiple-separator.demo.1184a371.js";function O(e){let r,a,E,O,x,j,P,T,U,k,L,R,V,M,z,W,K,N,q,F,G,J,Q,X,Y,Z,_,ee,re,ae,te,ne,me,oe,ce,ie,se,pe,de,ue,fe,le,be,he,$e,ge,Be,Ie,ve,Ae;const Ee=new S({}),we=new w({props:{language:"svelte",source:'<Breadcrumb>\n  <BreadcrumbItem>Home</BreadcrumbItem>\n  <BreadcrumbItem href="/">Application Center</BreadcrumbItem>\n  <BreadcrumbItem href="/">Application List</BreadcrumbItem>\n  <BreadcrumbItem>An Application</BreadcrumbItem>\n</Breadcrumb>\n\n<script>\n  import { Breadcrumb, BreadcrumbItem } from "svant";\n<\/script>\n'}}),ye=new C({}),Se=new w({props:{language:"svelte",source:'<Breadcrumb>\n  <BreadcrumbItem href="/">\n    <HomeOutlined />\n  </BreadcrumbItem>\n  <BreadcrumbItem href="/">\n    <UserOutlined />\n    <span>Application List</span>\n  </BreadcrumbItem>\n  <BreadcrumbItem>Application</BreadcrumbItem>\n</Breadcrumb>\n\n<script>\n  import { Breadcrumb, BreadcrumbItem } from "svant";\n  import { HomeOutlined, UserOutlined } from "svant/icons";\n<\/script>\n'}}),Ce=new D({}),De=new w({props:{language:"svelte",source:'<Breadcrumb separator=">">\n  <BreadcrumbItem>Home</BreadcrumbItem>\n  <BreadcrumbItem href="/">Application Center</BreadcrumbItem>\n  <BreadcrumbItem href="/">Application List</BreadcrumbItem>\n  <BreadcrumbItem>An Application</BreadcrumbItem>\n</Breadcrumb>\n\n<br />\n\n<Breadcrumb separator="{CaretRightOutlined}">\n  <BreadcrumbItem>Home</BreadcrumbItem>\n  <BreadcrumbItem href="/">Application Center</BreadcrumbItem>\n  <BreadcrumbItem href="/">Application List</BreadcrumbItem>\n  <BreadcrumbItem>An Application</BreadcrumbItem>\n</Breadcrumb>\n\n<script>\n  import { Breadcrumb, BreadcrumbItem } from "svant";\n  import { CaretRightOutlined } from "svant/icons";\n<\/script>\n'}}),He=new H({}),Oe=new w({props:{language:"svelte",source:'<Breadcrumb separator="/">\n  <BreadcrumbItem separator="{CaretRightOutlined}">Home</BreadcrumbItem>\n  <BreadcrumbItem href="/">Application Center</BreadcrumbItem>\n  <BreadcrumbItem href="/" separator="{CaretRightOutlined}">\n    Application List\n  </BreadcrumbItem>\n  <BreadcrumbItem>An Application</BreadcrumbItem>\n</Breadcrumb>\n\n<script>\n  import { Breadcrumb, BreadcrumbItem } from "svant";\n  import { CaretRightOutlined } from "svant/icons";\n<\/script>\n'}}),xe=[e[0]];let je={};for(let e=0;e<xe.length;e+=1)je=t(je,xe[e]);const Pe=new y({props:je}),Te=[e[1]];let Ue={};for(let e=0;e<Te.length;e+=1)Ue=t(Ue,Te[e]);const ke=new y({props:Ue});return{c(){r=n("h1"),a=m("Breadcrumb"),E=o(),O=n("p"),x=m("A breadcrumb displays the current location within a hierarchy. It allows going back to states higher up in the hierarchy."),j=o(),P=n("h2"),T=m("Examples"),U=o(),k=n("h3"),L=m("Basic Usage"),R=o(),V=n("div"),c(Ee.$$.fragment),M=o(),c(we.$$.fragment),z=o(),W=n("h3"),K=m("With Icons"),N=o(),q=n("div"),c(ye.$$.fragment),F=o(),c(Se.$$.fragment),G=o(),J=n("h3"),Q=m("Configuring the Separator"),X=o(),Y=n("p"),Z=m("The separator can be changed using the "),_=n("code"),ee=m("separator"),re=m(" prop on the "),ae=n("code"),te=m("Breadcrumb"),ne=m(" component. Either a string or a Svelte component (for example - an icon component) can be passed."),me=o(),oe=n("div"),c(Ce.$$.fragment),ce=o(),c(De.$$.fragment),ie=o(),se=n("h3"),pe=m("Using Multiple Separators"),de=o(),ue=n("p"),fe=m("The separator can be customized for each BreadcrumbItem individually as well."),le=o(),be=n("div"),c(He.$$.fragment),he=o(),c(Oe.$$.fragment),$e=o(),ge=n("h2"),Be=m("API"),Ie=o(),c(Pe.$$.fragment),ve=o(),c(ke.$$.fragment),this.h()},l(e){r=i(e,"H1",{});var t=s(r);a=p(t,"Breadcrumb"),t.forEach(d),E=u(e),O=i(e,"P",{});var n=s(O);x=p(n,"A breadcrumb displays the current location within a hierarchy. It allows going back to states higher up in the hierarchy."),n.forEach(d),j=u(e),P=i(e,"H2",{});var m=s(P);T=p(m,"Examples"),m.forEach(d),U=u(e),k=i(e,"H3",{});var o=s(k);L=p(o,"Basic Usage"),o.forEach(d),R=u(e),V=i(e,"DIV",{id:!0});var c=s(V);f(Ee.$$.fragment,c),c.forEach(d),M=u(e),f(we.$$.fragment,e),z=u(e),W=i(e,"H3",{});var l=s(W);K=p(l,"With Icons"),l.forEach(d),N=u(e),q=i(e,"DIV",{id:!0});var b=s(q);f(ye.$$.fragment,b),b.forEach(d),F=u(e),f(Se.$$.fragment,e),G=u(e),J=i(e,"H3",{});var h=s(J);Q=p(h,"Configuring the Separator"),h.forEach(d),X=u(e),Y=i(e,"P",{});var $=s(Y);Z=p($,"The separator can be changed using the "),_=i($,"CODE",{});var g=s(_);ee=p(g,"separator"),g.forEach(d),re=p($," prop on the "),ae=i($,"CODE",{});var B=s(ae);te=p(B,"Breadcrumb"),B.forEach(d),ne=p($," component. Either a string or a Svelte component (for example - an icon component) can be passed."),$.forEach(d),me=u(e),oe=i(e,"DIV",{id:!0});var I=s(oe);f(Ce.$$.fragment,I),I.forEach(d),ce=u(e),f(De.$$.fragment,e),ie=u(e),se=i(e,"H3",{});var v=s(se);pe=p(v,"Using Multiple Separators"),v.forEach(d),de=u(e),ue=i(e,"P",{});var A=s(ue);fe=p(A,"The separator can be customized for each BreadcrumbItem individually as well."),A.forEach(d),le=u(e),be=i(e,"DIV",{id:!0});var w=s(be);f(He.$$.fragment,w),w.forEach(d),he=u(e),f(Oe.$$.fragment,e),$e=u(e),ge=i(e,"H2",{});var y=s(ge);Be=p(y,"API"),y.forEach(d),Ie=u(e),f(Pe.$$.fragment,e),ve=u(e),f(ke.$$.fragment,e),this.h()},h(){l(V,"id","components-breadcrumb-demo-basic"),l(q,"id","components-breadcrumb-demo-icon"),l(oe,"id","components-breadcrumb-demo-text-separator"),l(be,"id","components-breadcrumb-demo-text-separator")},m(e,t){b(e,r,t),h(r,a),b(e,E,t),b(e,O,t),h(O,x),b(e,j,t),b(e,P,t),h(P,T),b(e,U,t),b(e,k,t),h(k,L),b(e,R,t),b(e,V,t),$(Ee,V,null),b(e,M,t),$(we,e,t),b(e,z,t),b(e,W,t),h(W,K),b(e,N,t),b(e,q,t),$(ye,q,null),b(e,F,t),$(Se,e,t),b(e,G,t),b(e,J,t),h(J,Q),b(e,X,t),b(e,Y,t),h(Y,Z),h(Y,_),h(_,ee),h(Y,re),h(Y,ae),h(ae,te),h(Y,ne),b(e,me,t),b(e,oe,t),$(Ce,oe,null),b(e,ce,t),$(De,e,t),b(e,ie,t),b(e,se,t),h(se,pe),b(e,de,t),b(e,ue,t),h(ue,fe),b(e,le,t),b(e,be,t),$(He,be,null),b(e,he,t),$(Oe,e,t),b(e,$e,t),b(e,ge,t),h(ge,Be),b(e,Ie,t),$(Pe,e,t),b(e,ve,t),$(ke,e,t),Ae=!0},p(e,[r]){const a=1&r?g(xe,[B(e[0])]):{};Pe.$set(a);const t=2&r?g(Te,[B(e[1])]):{};ke.$set(t)},i(e){Ae||(I(Ee.$$.fragment,e),I(we.$$.fragment,e),I(ye.$$.fragment,e),I(Se.$$.fragment,e),I(Ce.$$.fragment,e),I(De.$$.fragment,e),I(He.$$.fragment,e),I(Oe.$$.fragment,e),I(Pe.$$.fragment,e),I(ke.$$.fragment,e),Ae=!0)},o(e){v(Ee.$$.fragment,e),v(we.$$.fragment,e),v(ye.$$.fragment,e),v(Se.$$.fragment,e),v(Ce.$$.fragment,e),v(De.$$.fragment,e),v(He.$$.fragment,e),v(Oe.$$.fragment,e),v(Pe.$$.fragment,e),v(ke.$$.fragment,e),Ae=!1},d(e){e&&d(r),e&&d(E),e&&d(O),e&&d(j),e&&d(P),e&&d(U),e&&d(k),e&&d(R),e&&d(V),A(Ee),e&&d(M),A(we,e),e&&d(z),e&&d(W),e&&d(N),e&&d(q),A(ye),e&&d(F),A(Se,e),e&&d(G),e&&d(J),e&&d(X),e&&d(Y),e&&d(me),e&&d(oe),A(Ce),e&&d(ce),A(De,e),e&&d(ie),e&&d(se),e&&d(de),e&&d(ue),e&&d(le),e&&d(be),A(He),e&&d(he),A(Oe,e),e&&d($e),e&&d(ge),e&&d(Ie),A(Pe,e),e&&d(ve),A(ke,e)}}}function x(e){return[{title:"Breadcrumb Attributes",columns:["Property","Description","Type","Default"],data:[{property:"separator",description:"Sets the separator used for the component",type:"String or Svelte component",default:"/"}]},{title:"BreadcrumbItem Attributes",columns:["Property","Description","Type","Default"],data:[{property:"href",description:"If set, the item will be wrapper in a link",type:"String",default:""},{property:"separator",description:"Sets the individual separator for the item",type:"String or Svelte component",default:"/"}]}]}class j extends e{constructor(e){super(),r(this,e,x,O,a,{})}}function P(e){let r,a;const t=new j({});return{c(){r=n("div"),c(t.$$.fragment),this.h()},l(e){r=i(e,"DIV",{class:!0});var a=s(r);f(t.$$.fragment,a),a.forEach(d),this.h()},h(){l(r,"class","markdown api-container")},m(e,n){b(e,r,n),$(t,r,null),a=!0},p:E,i(e){a||(I(t.$$.fragment,e),a=!0)},o(e){v(t.$$.fragment,e),a=!1},d(e){e&&d(r),A(t)}}}export default class extends e{constructor(e){super(),r(this,e,null,P,a,{})}}
