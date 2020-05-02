import{_ as o,a as n,i as t,s as e,b as i,S as a,C as s,e as r,t as l,c,J as d,g as f,h as p,j as u,d as m,f as h,K as y,l as $,m as g,L as b,x as v,aj as M,ak as w,A as C,B as k,N as E,o as O,p as x,k as B,n as T}from"./client.3592589c.js";import{E as S,D}from"./DocsTable.50b9091a.js";import"./index.0d2b1b57.js";import P from"./basic.demo.bb2972a1.js";import j from"./async.demo.9e801f5e.js";import A from"./footer.demo.74965489.js";import I from"./confirm.demo.b5d538c3.js";import"./ModalInfoExample.80093816.js";import V from"./information.demo.321fc5c3.js";import K from"./update-destroy.demo.b371fc3a.js";import L from"./positioning.demo.80dd4835.js";import R from"./destroy-all.demo.97ecb3b0.js";function W(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(o){return!1}}function N(o){var n,t;return{c:function(){n=r("p"),t=l("Asynchronously close a modal dialog when a the OK button is pressed. For example, you can use this pattern when you submit a form."),this.h()},l:function(o){n=f(o,"P",{slot:!0});var e=p(n);t=u(e,"Asynchronously close a modal dialog when a the OK button is pressed. For example, you can use this pattern when you submit a form."),e.forEach(m),this.h()},h:function(){B(n,"slot","description")},m:function(o,e){$(o,n,e),g(n,t)},d:function(o){o&&m(n)}}}function F(o){var n,t,e,i,a,s;return{c:function(){n=r("div"),t=r("p"),e=l("A more complex example which define a customized footer button bar. The dialog will change to loading state after clicking the submit button, and when the loading is done, the modal dialog will be closed."),i=c(),a=r("p"),s=l("You could set the footer prop to null if you don't need default footer buttons."),this.h()},l:function(o){n=f(o,"DIV",{slot:!0});var r=p(n);t=f(r,"P",{});var l=p(t);e=u(l,"A more complex example which define a customized footer button bar. The dialog will change to loading state after clicking the submit button, and when the loading is done, the modal dialog will be closed."),l.forEach(m),i=h(r),a=f(r,"P",{});var c=p(a);s=u(c,"You could set the footer prop to null if you don't need default footer buttons."),c.forEach(m),r.forEach(m),this.h()},h:function(){B(n,"slot","description")},m:function(o,r){$(o,n,r),g(n,t),g(t,e),g(n,i),g(n,a),g(a,s)},d:function(o){o&&m(n)}}}function U(o){var n,t,e,i,a,s,c,d,h,y,b;return{c:function(){n=r("p"),t=l("Use "),e=r("code"),i=l("Modal.confirm()"),a=l(" to show a confirmation modal dialog. The "),s=r("code"),c=l("onOk"),d=l(" and "),h=r("code"),y=l("onCancel"),b=l(" buttons can return a promise and will delay the modal from closing until completed."),this.h()},l:function(o){n=f(o,"P",{slot:!0});var r=p(n);t=u(r,"Use "),e=f(r,"CODE",{});var l=p(e);i=u(l,"Modal.confirm()"),l.forEach(m),a=u(r," to show a confirmation modal dialog. The "),s=f(r,"CODE",{});var $=p(s);c=u($,"onOk"),$.forEach(m),d=u(r," and "),h=f(r,"CODE",{});var g=p(h);y=u(g,"onCancel"),g.forEach(m),b=u(r," buttons can return a promise and will delay the modal from closing until completed."),r.forEach(m),this.h()},h:function(){B(n,"slot","description")},m:function(o,r){$(o,n,r),g(n,t),g(n,e),g(e,i),g(n,a),g(n,s),g(s,c),g(n,d),g(n,h),g(h,y),g(n,b)},d:function(o){o&&m(n)}}}function z(o){var n,t;return{c:function(){n=r("p"),t=l("The information modal dialog is used to communicate system status. Only one button is used to close the dialog."),this.h()},l:function(o){n=f(o,"P",{slot:!0});var e=p(n);t=u(e,"The information modal dialog is used to communicate system status. Only one button is used to close the dialog."),e.forEach(m),this.h()},h:function(){B(n,"slot","description")},m:function(o,e){$(o,n,e),g(n,t)},d:function(o){o&&m(n)}}}function Y(o){var n,t,e,i,a,s,c,d;return{c:function(){n=r("p"),t=l("Use Svelte's built in "),e=r("code"),i=l("$set"),a=l(" function to update the modal. The "),s=r("code"),c=l("Modal.destroy()"),d=l(" function will destroy a modal."),this.h()},l:function(o){n=f(o,"P",{slot:!0});var r=p(n);t=u(r,"Use Svelte's built in "),e=f(r,"CODE",{});var l=p(e);i=u(l,"$set"),l.forEach(m),a=u(r," function to update the modal. The "),s=f(r,"CODE",{});var h=p(s);c=u(h,"Modal.destroy()"),h.forEach(m),d=u(r," function will destroy a modal."),r.forEach(m),this.h()},h:function(){B(n,"slot","description")},m:function(o,r){$(o,n,r),g(n,t),g(n,e),g(e,i),g(n,a),g(n,s),g(s,c),g(n,d)},d:function(o){o&&m(n)}}}function G(o){var n,t;return{c:function(){n=r("p"),t=l("You can use the centered prop, or set the verticalPosition's top or bottom to position the modal."),this.h()},l:function(o){n=f(o,"P",{slot:!0});var e=p(n);t=u(e,"You can use the centered prop, or set the verticalPosition's top or bottom to position the modal."),e.forEach(m),this.h()},h:function(){B(n,"slot","description")},m:function(o,e){$(o,n,e),g(n,t)},d:function(o){o&&m(n)}}}function H(o){var n,t,e,i;return{c:function(){n=r("p"),t=r("code"),e=l("Modal.destroyAll()"),i=l(" will destroy all confirmation modal dialogs."),this.h()},l:function(o){n=f(o,"P",{slot:!0});var a=p(n);t=f(a,"CODE",{});var s=p(t);e=u(s,"Modal.destroyAll()"),s.forEach(m),i=u(a," will destroy all confirmation modal dialogs."),a.forEach(m),this.h()},h:function(){B(n,"slot","description")},m:function(o,a){$(o,n,a),g(n,t),g(t,e),g(n,i)},d:function(o){o&&m(n)}}}function q(o){for(var n,t,e,i,a,O,x,B,T,W,q,J,Q,_,X,Z,oo,no,to,eo,io,ao,so,ro,lo,co,fo,po,uo,mo,ho,yo,$o,go,bo,vo,Mo,wo,Co,ko,Eo,Oo,xo,Bo,To,So,Do,Po,jo,Ao,Io,Vo,Ko,Lo,Ro,Wo,No,Fo,Uo,zo,Yo,Go,Ho,qo,Jo,Qo,_o=new S({props:{id:"demo-basic",title:"Basic",demoComponent:P,demoCode:'<Button type="primary" on:click="{showModal}">Open Modal</Button>\n<Modal\n  title="Basic Modal"\n  {visible}\n  on:ok="{openAnother}"\n  on:cancel="{closeModal}">\n  <p>Some contents...</p>\n  <p>Some contents...</p>\n  <p>Some contents...</p>\n</Modal>\n\n<script>\n  import { Modal, Button } from "svant";\n\n  let visible = false;\n\n  function showModal() {\n    visible = true;\n  }\n\n  function closeModal() {\n    visible = false;\n  }\n\n  function openAnother() {\n    Modal.confirm({\n      content: "Are you sure?",\n      onOk: () => {\n        closeModal();\n      }\n    });\n  }\n<\/script>\n'}}),Xo=new S({props:{id:"demo-async-close",title:"Asynchronously Close",demoComponent:j,demoCode:'<Button type="primary" on:click="{showModal}">\n  Open Modal with async logic\n</Button>\n<Modal\n  title="Title"\n  {visible}\n  on:ok="{handleOk}"\n  {confirmLoading}\n  on:cancel="{handleCancel}">\n  <p>{ModalText}</p>\n</Modal>\n\n<script>\n  import { Modal, Button } from "svant";\n\n  let visible = false;\n  let ModalText = "Content of the modal";\n  let confirmLoading = false;\n\n  function showModal() {\n    visible = true;\n  }\n\n  function handleOk() {\n    ModalText = "The modal will be closed after two seconds";\n    confirmLoading = true;\n\n    setTimeout(() => {\n      visible = false;\n      confirmLoading = false;\n      ModalText = "Content of the modal";\n    }, 2000);\n  }\n\n  function handleCancel() {\n    console.log("Cancel button pressed");\n    visible = false;\n  }\n<\/script>\n',$$slots:{description:[N]},$$scope:{ctx:o}}}),Zo=new S({props:{id:"demo-custom-footer",title:"Customized Footer",demoComponent:A,demoCode:'<Button type="primary" on:click="{showModal}">\n  Open Modal with customized footer\n</Button>\n<Modal {visible} title="Title" on:ok="{closeModal}" on:cancel="{closeModal}">\n  <p>Some contents...</p>\n  <p>Some contents...</p>\n  <p>Some contents...</p>\n  <p>Some contents...</p>\n  <p>Some contents...</p>\n\n  <span slot="footer">\n    <Button on:click="{closeModal}">Return</Button>\n    <Button type="primary" on:click="{closeModal}">Submit</Button>\n  </span>\n</Modal>\n\n<script>\n  import { Modal, Button } from "svant";\n\n  let visible = false;\n\n  function showModal() {\n    visible = true;\n  }\n\n  function closeModal() {\n    visible = false;\n  }\n<\/script>\n',$$slots:{description:[F]},$$scope:{ctx:o}}}),on=new S({props:{id:"demo-confirm",title:"Confirmation Modal Dialog",demoComponent:I,demoCode:'<Button on:click="{showConfirm}">Confirm</Button>\n<Button on:click="{showDeleteConfirm}" type="dashed">Delete</Button>\n<Button on:click="{showPropsConfirm}" type="dashed">With extra props</Button>\n<Button on:click="{showPromiseConfirm}">Confirm with Promise</Button>\n\n<script>\n  import { Button, Modal } from "svant";\n  import { ExclamationCircleOutlined } from "svant/icons";\n\n  const { confirm } = Modal;\n\n  function showConfirm() {\n    confirm({\n      title: "Do you want to delete these items?",\n      icon: ExclamationCircleOutlined,\n      content: "Some descriptions",\n      onOk() {\n        console.log("OK");\n      },\n      onCancel() {\n        console.log("Cancel");\n      }\n    });\n  }\n\n  function showDeleteConfirm() {\n    confirm({\n      title: "Are you sure delete this task?",\n      icon: ExclamationCircleOutlined,\n      content: "Some descriptions",\n      okText: "Yes",\n      okType: "danger",\n      cancelText: "No",\n      onOk() {\n        console.log("OK");\n      },\n      onCancel() {\n        console.log("Cancel");\n      }\n    });\n  }\n\n  function showPropsConfirm() {\n    confirm({\n      title: "Are you sure delete this task?",\n      icon: ExclamationCircleOutlined,\n      content: "Some descriptions",\n      okText: "Yes",\n      okType: "danger",\n      okButtonProps: {\n        disabled: true\n      },\n      cancelText: "No",\n      onOk() {\n        console.log("OK");\n      },\n      onCancel() {\n        console.log("Cancel");\n      }\n    });\n  }\n\n  function showPromiseConfirm() {\n    confirm({\n      title: "Do you want to delete these items?",\n      icon: ExclamationCircleOutlined,\n      content:\n        "When clicked the OK button, this dialog will be closed after 1 second",\n      onOk() {\n        return new Promise((resolve, reject) => {\n          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);\n        }).catch(() => console.log("Oops errors!"));\n      },\n      onCancel() {}\n    });\n  }\n<\/script>\n',$$slots:{description:[U]},$$scope:{ctx:o}}}),nn=new S({props:{id:"demo-information",title:"Information Modal Dialog",demoComponent:V,demoCode:'<div class="information-buttons">\n  <Button on:click="{info}">Info</Button>\n  <Button on:click="{success}">Success</Button>\n  <Button on:click="{error}">Error</Button>\n  <Button on:click="{warning}">Warning</Button>\n</div>\n\n<script>\n  import { Button, Modal } from "svant";\n  import ModalInfoContent from "./ModalInfoExample.svelte";\n\n  function info() {\n    Modal.info({\n      title: "This is a notification message",\n      content: ModalInfoContent,\n      autoFocusButton: "ok",\n      onOk() {\n        console.log("OK Clicked");\n      }\n    });\n  }\n\n  function success() {\n    Modal.success({\n      content: "some messages...some messages..."\n    });\n  }\n\n  function error() {\n    Modal.error({\n      title: "This is an error message",\n      content: "some messages...some messages..."\n    });\n  }\n\n  function warning() {\n    Modal.warning({\n      title: "This is a warning message",\n      content: "some messages...some messages...",\n      closeable: true\n    });\n  }\n<\/script>\n',$$slots:{description:[z]},$$scope:{ctx:o}}}),tn=new S({props:{id:"demo-update-destroy",title:"Manually Updating and Destroying",demoComponent:K,demoCode:'<Button on:click="{countDown}">Open modal to close in 3s</Button>\n\n<script>\n  import { Button, Modal } from "svant";\n\n  function countDown() {\n    let secondsToGo = 3;\n    const modal = Modal.success({\n      title: "This is a notification message",\n      content: `This modal will be destroyed after ${secondsToGo} second.`\n    });\n    const timer = setInterval(() => {\n      secondsToGo -= 1;\n      modal.$set({\n        content: `This modal will be destroyed after ${secondsToGo} second.`\n      });\n    }, 1000);\n    setTimeout(() => {\n      clearInterval(timer);\n      modal.destroy();\n    }, secondsToGo * 1000);\n  }\n<\/script>\n',$$slots:{description:[Y]},$$scope:{ctx:o}}}),en=new S({props:{id:"demo-update-positioning",title:"Positioning",demoComponent:L,demoCode:'<Button type="primary" on:click="{() => setModal1Visible(true)}">\n  Open 20px from the top\n</Button>\n\n<Button type="primary" on:click="{() => setModal2Visible(true)}">\n  Vertically centered\n</Button>\n\n<Modal\n  title="Top right corner"\n  verticalPosition="{{ top: \'20px\' }}"\n  visible="{modal1Visible}"\n  on:ok="{() => setModal1Visible(false)}"\n  on:cancel="{() => setModal1Visible(false)}">\n  <p>some contents...</p>\n  <p>some contents...</p>\n  <p>some contents...</p>\n</Modal>\n\n<Modal\n  title="Vertically centered modal dialog"\n  centered\n  visible="{modal2Visible}"\n  on:ok="{() => setModal2Visible(false)}"\n  on:cancel="{() => setModal2Visible(false)}">\n  <p>some contents...</p>\n  <p>some contents...</p>\n  <p>some contents...</p>\n</Modal>\n\n<script>\n  import { Button, Modal } from "svant";\n\n  export let modal1Visible = false;\n  export let modal2Visible = false;\n\n  function setModal1Visible(visible) {\n    modal1Visible = visible;\n  }\n\n  function setModal2Visible(visible) {\n    modal2Visible = visible;\n  }\n<\/script>\n',$$slots:{description:[G]},$$scope:{ctx:o}}}),an=new S({props:{id:"demo-destroy-all",title:"Destroying all Modals Open",demoComponent:R,demoCode:'<Button on:click="{showAll}">Show Modal</Button>\n\n<script>\n  import { Button, Modal } from "svant";\n  import { ExclamationCircleOutlined } from "svant/icons";\n\n  const { confirm } = Modal;\n\n  function showAll() {\n    for (let i = 0; i < 3; i += 1) {\n      setTimeout(() => {\n        confirm({\n          icon: ExclamationCircleOutlined,\n          content: "Clicking any button will close all three",\n          onOk() {\n            destroyAll();\n          },\n          onCancel() {\n            destroyAll();\n          }\n        });\n      }, i * 500);\n    }\n  }\n\n  function destroyAll() {\n    Modal.destroyAll();\n  }\n<\/script>\n',$$slots:{description:[H]},$$scope:{ctx:o}}}),sn=[o[0]],rn={},ln=0;ln<sn.length;ln+=1)rn=s(rn,sn[ln]);for(var cn=new D({props:rn}),dn=[o[1]],fn={},pn=0;pn<dn.length;pn+=1)fn=s(fn,dn[pn]);for(var un=new D({props:fn}),mn=[o[2]],hn={},yn=0;yn<mn.length;yn+=1)hn=s(hn,mn[yn]);var $n=new D({props:hn});return{c:function(){n=r("h1"),t=l("Modal"),e=c(),i=r("p"),a=l("Description of the Modal's function."),O=c(),x=r("h2"),B=l("Examples"),T=c(),d(_o.$$.fragment),W=c(),d(Xo.$$.fragment),q=c(),d(Zo.$$.fragment),J=c(),d(on.$$.fragment),Q=c(),d(nn.$$.fragment),_=c(),d(tn.$$.fragment),X=c(),d(en.$$.fragment),Z=c(),d(an.$$.fragment),oo=c(),no=r("h2"),to=l("API"),eo=c(),d(cn.$$.fragment),io=c(),d(un.$$.fragment),ao=c(),so=r("h3"),ro=l("Modal.method()"),lo=c(),co=r("p"),fo=l("There are five ways to display the information based on the content's nature:"),po=c(),uo=r("ul"),mo=r("li"),ho=r("code"),yo=l("Modal.info"),$o=c(),go=r("li"),bo=r("code"),vo=l("Modal.success"),Mo=c(),wo=r("li"),Co=r("code"),ko=l("Modal.error"),Eo=c(),Oo=r("li"),xo=r("code"),Bo=l("Modal.warning"),To=c(),So=r("li"),Do=r("code"),Po=l("Modal.confirm"),jo=c(),Ao=r("p"),Io=l("The items listed above are all functions, expecting a settings object as parameter. The settings object takes any of the props above as attributes."),Vo=c(),Ko=r("blockquote"),Lo=r("p"),Ro=l("Note: The "),Wo=r("code"),No=l("closeable"),Fo=l(" and "),Uo=r("code"),zo=l("maskClosable"),Yo=l(" props default to false for these types of modals."),Go=c(),Ho=r("p"),qo=l("Additionally these options are available:"),Jo=c(),d($n.$$.fragment)},l:function(o){n=f(o,"H1",{});var s=p(n);t=u(s,"Modal"),s.forEach(m),e=h(o),i=f(o,"P",{});var r=p(i);a=u(r,"Description of the Modal's function."),r.forEach(m),O=h(o),x=f(o,"H2",{});var l=p(x);B=u(l,"Examples"),l.forEach(m),T=h(o),y(_o.$$.fragment,o),W=h(o),y(Xo.$$.fragment,o),q=h(o),y(Zo.$$.fragment,o),J=h(o),y(on.$$.fragment,o),Q=h(o),y(nn.$$.fragment,o),_=h(o),y(tn.$$.fragment,o),X=h(o),y(en.$$.fragment,o),Z=h(o),y(an.$$.fragment,o),oo=h(o),no=f(o,"H2",{});var c=p(no);to=u(c,"API"),c.forEach(m),eo=h(o),y(cn.$$.fragment,o),io=h(o),y(un.$$.fragment,o),ao=h(o),so=f(o,"H3",{});var d=p(so);ro=u(d,"Modal.method()"),d.forEach(m),lo=h(o),co=f(o,"P",{});var $=p(co);fo=u($,"There are five ways to display the information based on the content's nature:"),$.forEach(m),po=h(o),uo=f(o,"UL",{});var g=p(uo);mo=f(g,"LI",{});var b=p(mo);ho=f(b,"CODE",{});var v=p(ho);yo=u(v,"Modal.info"),v.forEach(m),b.forEach(m),$o=h(g),go=f(g,"LI",{});var M=p(go);bo=f(M,"CODE",{});var w=p(bo);vo=u(w,"Modal.success"),w.forEach(m),M.forEach(m),Mo=h(g),wo=f(g,"LI",{});var C=p(wo);Co=f(C,"CODE",{});var k=p(Co);ko=u(k,"Modal.error"),k.forEach(m),C.forEach(m),Eo=h(g),Oo=f(g,"LI",{});var E=p(Oo);xo=f(E,"CODE",{});var S=p(xo);Bo=u(S,"Modal.warning"),S.forEach(m),E.forEach(m),To=h(g),So=f(g,"LI",{});var D=p(So);Do=f(D,"CODE",{});var P=p(Do);Po=u(P,"Modal.confirm"),P.forEach(m),D.forEach(m),g.forEach(m),jo=h(o),Ao=f(o,"P",{});var j=p(Ao);Io=u(j,"The items listed above are all functions, expecting a settings object as parameter. The settings object takes any of the props above as attributes."),j.forEach(m),Vo=h(o),Ko=f(o,"BLOCKQUOTE",{});var A=p(Ko);Lo=f(A,"P",{});var I=p(Lo);Ro=u(I,"Note: The "),Wo=f(I,"CODE",{});var V=p(Wo);No=u(V,"closeable"),V.forEach(m),Fo=u(I," and "),Uo=f(I,"CODE",{});var K=p(Uo);zo=u(K,"maskClosable"),K.forEach(m),Yo=u(I," props default to false for these types of modals."),I.forEach(m),A.forEach(m),Go=h(o),Ho=f(o,"P",{});var L=p(Ho);qo=u(L,"Additionally these options are available:"),L.forEach(m),Jo=h(o),y($n.$$.fragment,o)},m:function(o,s){$(o,n,s),g(n,t),$(o,e,s),$(o,i,s),g(i,a),$(o,O,s),$(o,x,s),g(x,B),$(o,T,s),b(_o,o,s),$(o,W,s),b(Xo,o,s),$(o,q,s),b(Zo,o,s),$(o,J,s),b(on,o,s),$(o,Q,s),b(nn,o,s),$(o,_,s),b(tn,o,s),$(o,X,s),b(en,o,s),$(o,Z,s),b(an,o,s),$(o,oo,s),$(o,no,s),g(no,to),$(o,eo,s),b(cn,o,s),$(o,io,s),b(un,o,s),$(o,ao,s),$(o,so,s),g(so,ro),$(o,lo,s),$(o,co,s),g(co,fo),$(o,po,s),$(o,uo,s),g(uo,mo),g(mo,ho),g(ho,yo),g(uo,$o),g(uo,go),g(go,bo),g(bo,vo),g(uo,Mo),g(uo,wo),g(wo,Co),g(Co,ko),g(uo,Eo),g(uo,Oo),g(Oo,xo),g(xo,Bo),g(uo,To),g(uo,So),g(So,Do),g(Do,Po),$(o,jo,s),$(o,Ao,s),g(Ao,Io),$(o,Vo,s),$(o,Ko,s),g(Ko,Lo),g(Lo,Ro),g(Lo,Wo),g(Wo,No),g(Lo,Fo),g(Lo,Uo),g(Uo,zo),g(Lo,Yo),$(o,Go,s),$(o,Ho,s),g(Ho,qo),$(o,Jo,s),b($n,o,s),Qo=!0},p:function(o,n){var t=v(n,1)[0],e={};8&t&&(e.$$scope={dirty:t,ctx:o}),Xo.$set(e);var i={};8&t&&(i.$$scope={dirty:t,ctx:o}),Zo.$set(i);var a={};8&t&&(a.$$scope={dirty:t,ctx:o}),on.$set(a);var s={};8&t&&(s.$$scope={dirty:t,ctx:o}),nn.$set(s);var r={};8&t&&(r.$$scope={dirty:t,ctx:o}),tn.$set(r);var l={};8&t&&(l.$$scope={dirty:t,ctx:o}),en.$set(l);var c={};8&t&&(c.$$scope={dirty:t,ctx:o}),an.$set(c);var d=1&t?M(sn,[w(o[0])]):{};cn.$set(d);var f=2&t?M(dn,[w(o[1])]):{};un.$set(f);var p=4&t?M(mn,[w(o[2])]):{};$n.$set(p)},i:function(o){Qo||(C(_o.$$.fragment,o),C(Xo.$$.fragment,o),C(Zo.$$.fragment,o),C(on.$$.fragment,o),C(nn.$$.fragment,o),C(tn.$$.fragment,o),C(en.$$.fragment,o),C(an.$$.fragment,o),C(cn.$$.fragment,o),C(un.$$.fragment,o),C($n.$$.fragment,o),Qo=!0)},o:function(o){k(_o.$$.fragment,o),k(Xo.$$.fragment,o),k(Zo.$$.fragment,o),k(on.$$.fragment,o),k(nn.$$.fragment,o),k(tn.$$.fragment,o),k(en.$$.fragment,o),k(an.$$.fragment,o),k(cn.$$.fragment,o),k(un.$$.fragment,o),k($n.$$.fragment,o),Qo=!1},d:function(o){o&&m(n),o&&m(e),o&&m(i),o&&m(O),o&&m(x),o&&m(T),E(_o,o),o&&m(W),E(Xo,o),o&&m(q),E(Zo,o),o&&m(J),E(on,o),o&&m(Q),E(nn,o),o&&m(_),E(tn,o),o&&m(X),E(en,o),o&&m(Z),E(an,o),o&&m(oo),o&&m(no),o&&m(eo),E(cn,o),o&&m(io),E(un,o),o&&m(ao),o&&m(so),o&&m(lo),o&&m(co),o&&m(po),o&&m(uo),o&&m(jo),o&&m(Ao),o&&m(Vo),o&&m(Ko),o&&m(Go),o&&m(Ho),o&&m(Jo),E($n,o)}}}function J(o){return[{title:"Attributes",columns:["Property","Description","Type","Default"],data:[{property:"bodyStyle",description:"Body style for modal body element. Such as height, padding etc.",type:"String|Object",default:""},{property:"cancelText",description:"Text of the Cancel button.",type:"String",default:"Cancel"},{property:"centered",description:"Centered Modal",type:"Boolean",default:"false"},{property:"closable",description:"Whether a close (x) button is visible on top right of the modal dialog or not.",type:"Boolean",default:"true"},{property:"closeIcon",description:"Custom close icon.",type:"SvelteComponent",default:"CloseOutlined"},{property:"confirmLoading",description:"Whether to apply loading visual effect for OK button or not.",type:"Boolean",default:"false"},{property:"mask",description:"Whether show mask or not.",type:"Boolean",default:"true"},{property:"maskClosable",description:"Whether to close the modal dialog when the mask (area outside the modal) is clicked.",type:"Boolean",default:"true"},{property:"maskStyle",description:"Style for modal's mask element.",type:"String|Object",default:""},{property:"okText",description:"Text of the OK button.",type:"String",default:"OK"},{property:"okType",description:"Button `type` of the OK button.",type:"String",default:"primary"},{property:"okButtonProps",description:"The OK button props.",type:"Object",default:"{}"},{property:"cancelButtonProps",description:"The Cancel button props.",type:"Object",default:"{}"},{property:"verticalPosition",description:"The vertical position of the modal (top or bottom)",type:"Object",default:"{}"},{property:"title",description:"The modal dialog's title",type:"String",default:"-"},{property:"visible",description:"Whether the modal dialog is visible or not.",type:"Boolean",default:"false"},{property:"width",description:"Width of the modal dialog.",type:"String",default:"520px"},{property:"wrapClassName",description:"The class name of the container of the modal dialog.",type:"String",default:"-"},{property:"zIndex",description:"The `z-index` of the Modal.",type:"Number",default:"1000"},{property:"autoFocusButton",description:"Specify which button to autofocus when the modal opens.",type:"null|'ok'|'cancel'",default:"ok"},{property:"keyboard",description:"Whether the escape key will close the modal.",type:"Boolean",default:"true"}]},{title:"Events",columns:["Name","Description"],data:[{name:"cancel",description:"Specify a function that will be called when a user clicks mask, close button on top right or Cancel button."},{name:"ok",description:"Specify a function that will be called when a user clicks the OK button."},{property:"after-close",description:"Specify a function that will be called when modal is closed completely."}]},{title:"Modal.method() Attributes",columns:["Property","Description","Type","Default"],data:[{property:"content",description:"Content for the modal body.",type:"String|SvelteComponent",default:"-"},{property:"icon",description:"Custom icon to display next to the content.",type:"SvelteComponent",default:"Depends on the modal method"},{property:"onCancel",description:"Specify a function that will be called when a user clicks mask, close button on top right or Cancel button.",type:"Function",default:"-"},{property:"onOk",description:"Specify a function that will be called when a user clicks the OK button.",type:"Function",default:"-"}]}]}var Q=function(s){o(c,a);var r,l=(r=c,function(){var o,n=O(r);if(W()){var t=O(this).constructor;o=Reflect.construct(n,arguments,t)}else o=n.apply(this,arguments);return x(this,o)});function c(o){var a;return n(this,c),a=l.call(this),t(i(a),o,J,q,e,{}),a}return c}();function _(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(o){return!1}}function X(o){var n,t,e=new Q({});return{c:function(){n=r("div"),d(e.$$.fragment),this.h()},l:function(o){n=f(o,"DIV",{class:!0});var t=p(n);y(e.$$.fragment,t),t.forEach(m),this.h()},h:function(){B(n,"class","markdown api-container")},m:function(o,i){$(o,n,i),b(e,n,null),t=!0},p:T,i:function(o){t||(C(e.$$.fragment,o),t=!0)},o:function(o){k(e.$$.fragment,o),t=!1},d:function(o){o&&m(n),E(e)}}}var Z=function(s){o(c,a);var r,l=(r=c,function(){var o,n=O(r);if(_()){var t=O(this).constructor;o=Reflect.construct(n,arguments,t)}else o=n.apply(this,arguments);return x(this,o)});function c(o){var a;return n(this,c),a=l.call(this),t(i(a),o,null,X,e,{}),a}return c}();export default Z;
