import{_ as e,a as n,i as t,s as a,b as o,S as s,C as l,e as r,t as i,c,J as p,g as d,h as f,j as h,d as m,f as u,K as $,l as y,m as C,L as g,x as v,aj as P,ak as x,A as w,B as b,N as k,o as A,p as K,k as T,n as E}from"./client.3592589c.js";import{E as D,D as O}from"./DocsTable.50b9091a.js";import"./index.0d2b1b57.js";import j from"./basic.demo.252db54f.js";import R from"./accordion.demo.635e7d55.js";import S from"./nested.demo.b6b5311c.js";import I from"./borderless.demo.4fa281e4.js";import B from"./custom-panel.demo.096c35a2.js";import N from"./hide-arrow.demo.02631772.js";import Y from"./right-arrow.demo.665f85d9.js";import z from"./custom-header.demo.7dd7d0b1.js";import H from"./manual-active.demo.1faf560e.js";function F(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function M(e){var n,t;return{c:function(){n=r("p"),t=i("By default, any number of panels can be expanded at a time. The first panel is expanded in this example."),this.h()},l:function(e){n=d(e,"P",{slot:!0});var a=f(n);t=h(a,"By default, any number of panels can be expanded at a time. The first panel is expanded in this example."),a.forEach(m),this.h()},h:function(){T(n,"slot","description")},m:function(e,a){y(e,n,a),C(n,t)},d:function(e){e&&m(n)}}}function G(e){var n,t;return{c:function(){n=r("p"),t=i("In accordion mode, only one panel can be expanded at a time."),this.h()},l:function(e){n=d(e,"P",{slot:!0});var a=f(n);t=h(a,"In accordion mode, only one panel can be expanded at a time."),a.forEach(m),this.h()},h:function(){T(n,"slot","description")},m:function(e,a){y(e,n,a),C(n,t)},d:function(e){e&&m(n)}}}function U(e){var n,t,a,o,s;return{c:function(){n=r("p"),t=i("A "),a=r("code"),o=i("Collapse"),s=i(" can be nested inside another."),this.h()},l:function(e){n=d(e,"P",{slot:!0});var l=f(n);t=h(l,"A "),a=d(l,"CODE",{});var r=f(a);o=h(r,"Collapse"),r.forEach(m),s=h(l," can be nested inside another."),l.forEach(m),this.h()},h:function(){T(n,"slot","description")},m:function(e,l){y(e,n,l),C(n,t),C(n,a),C(a,o),C(n,s)},d:function(e){e&&m(n)}}}function q(e){var n,t,a,o,s;return{c:function(){n=r("p"),t=i("A border-less version of the "),a=r("code"),o=i("Collapse"),s=i("."),this.h()},l:function(e){n=d(e,"P",{slot:!0});var l=f(n);t=h(l,"A border-less version of the "),a=d(l,"CODE",{});var r=f(a);o=h(r,"Collapse"),r.forEach(m),s=h(l,"."),l.forEach(m),this.h()},h:function(){T(n,"slot","description")},m:function(e,l){y(e,n,l),C(n,t),C(n,a),C(a,o),C(n,s)},d:function(e){e&&m(n)}}}function J(e){var n,t;return{c:function(){n=r("p"),t=i("Customize the Collapse icon and the styles for each panel. Note: the icon will rotate when opening the panel."),this.h()},l:function(e){n=d(e,"P",{slot:!0});var a=f(n);t=h(a,"Customize the Collapse icon and the styles for each panel. Note: the icon will rotate when opening the panel."),a.forEach(m),this.h()},h:function(){T(n,"slot","description")},m:function(e,a){y(e,n,a),C(n,t)},d:function(e){e&&m(n)}}}function L(e){var n,t,a,o,s,l,c,p;return{c:function(){n=r("p"),t=i("You can hide the arrow icon by passing "),a=r("code"),o=i("hideArrow"),s=i(" to "),l=r("code"),c=i("CollapsePanel"),p=i(" component."),this.h()},l:function(e){n=d(e,"P",{slot:!0});var r=f(n);t=h(r,"You can hide the arrow icon by passing "),a=d(r,"CODE",{});var i=f(a);o=h(i,"hideArrow"),i.forEach(m),s=h(r," to "),l=d(r,"CODE",{});var u=f(l);c=h(u,"CollapsePanel"),u.forEach(m),p=h(r," component."),r.forEach(m),this.h()},h:function(){T(n,"slot","description")},m:function(e,r){y(e,n,r),C(n,t),C(n,a),C(a,o),C(n,s),C(n,l),C(l,c),C(n,p)},d:function(e){e&&m(n)}}}function V(e){var n,t;return{c:function(){n=r("p"),t=i("You can move the arrow to the right side of the panel as well."),this.h()},l:function(e){n=d(e,"P",{slot:!0});var a=f(n);t=h(a,"You can move the arrow to the right side of the panel as well."),a.forEach(m),this.h()},h:function(){T(n,"slot","description")},m:function(e,a){y(e,n,a),C(n,t)},d:function(e){e&&m(n)}}}function _(e){var n,t,a,o,s;return{c:function(){n=r("p"),t=i("You can use the "),a=r("code"),o=i("header"),s=i(" slot to customize a panel's header."),this.h()},l:function(e){n=d(e,"P",{slot:!0});var l=f(n);t=h(l,"You can use the "),a=d(l,"CODE",{});var r=f(a);o=h(r,"header"),r.forEach(m),s=h(l," slot to customize a panel's header."),l.forEach(m),this.h()},h:function(){T(n,"slot","description")},m:function(e,l){y(e,n,l),C(n,t),C(n,a),C(a,o),C(n,s)},d:function(e){e&&m(n)}}}function Q(e){var n,t,a,o,s,l,c,p,u,$,g;return{c:function(){n=r("p"),t=i("For more control over what opens and when it opens, use the "),a=r("code"),o=i("customKey"),s=i(" prop. The "),l=r("code"),c=i("on:change"),p=i(" event exposes the "),u=r("code"),$=i("lastKeyClicked"),g=i("."),this.h()},l:function(e){n=d(e,"P",{slot:!0});var r=f(n);t=h(r,"For more control over what opens and when it opens, use the "),a=d(r,"CODE",{});var i=f(a);o=h(i,"customKey"),i.forEach(m),s=h(r," prop. The "),l=d(r,"CODE",{});var y=f(l);c=h(y,"on:change"),y.forEach(m),p=h(r," event exposes the "),u=d(r,"CODE",{});var C=f(u);$=h(C,"lastKeyClicked"),C.forEach(m),g=h(r,"."),r.forEach(m),this.h()},h:function(){T(n,"slot","description")},m:function(e,r){y(e,n,r),C(n,t),C(n,a),C(a,o),C(n,s),C(n,l),C(l,c),C(n,p),C(n,u),C(u,$),C(n,g)},d:function(e){e&&m(n)}}}function W(e){for(var n,t,a,o,s,A,K,T,E,F,W,X,Z,ee,ne,te,ae,oe,se,le,re,ie,ce,pe,de,fe=new D({props:{id:"demo-basic",title:"Basic",demoComponent:j,demoCode:'<Collapse defaultActiveKey="{[\'1\']}" on:change="{callback}">\n  <CollapsePanel header="This is panel header 1" key="1">\n    <p>{text}</p>\n  </CollapsePanel>\n  <CollapsePanel header="This is panel header 2" key="2">\n    <p>{text}</p>\n  </CollapsePanel>\n  <CollapsePanel header="This is panel header 3" key="3" disabled>\n    <p>{text}</p>\n  </CollapsePanel>\n</Collapse>\n\n<script>\n  import { Collapse, CollapsePanel } from "svant";\n\n  const text = `\n    A dog is a type of domesticated animal.\n    Known for its loyalty and faithfulness,\n    it can be found as a welcome guest in many households across the world.\n  `;\n\n  function callback({ detail }) {\n    console.log(detail.currentActiveKey);\n  }\n<\/script>\n',$$slots:{description:[M]},$$scope:{ctx:e}}}),he=new D({props:{id:"demo-accordion",title:"Accordion",demoComponent:R,demoCode:'<Collapse accordion>\n  <CollapsePanel header="This is panel header 1" key="1">\n    <p>{text}</p>\n  </CollapsePanel>\n  <CollapsePanel header="This is panel header 2" key="2">\n    <p>{text}</p>\n  </CollapsePanel>\n  <CollapsePanel header="This is panel header 3" key="3">\n    <p>{text}</p>\n  </CollapsePanel>\n</Collapse>\n\n<script>\n  import { Collapse, CollapsePanel } from "svant";\n\n  const text = `\n    A dog is a type of domesticated animal.\n    Known for its loyalty and faithfulness,\n    it can be found as a welcome guest in many households across the world.\n  `;\n<\/script>\n',$$slots:{description:[G]},$$scope:{ctx:e}}}),me=new D({props:{id:"demo-nested",title:"Nested",demoComponent:S,demoCode:'<Collapse on:change="{callback}">\n  <CollapsePanel header="This is panel header 1" key="1">\n    <Collapse>\n      <CollapsePanel header="This is panel nest panel" key="1">\n        <p>{text}</p>\n      </CollapsePanel>\n      <CollapsePanel header="This is panel nest panel" key="2">\n        <p>{text}</p>\n      </CollapsePanel>\n    </Collapse>\n  </CollapsePanel>\n  <CollapsePanel header="This is panel header 2" key="2">\n    <p>{text}</p>\n  </CollapsePanel>\n  <CollapsePanel header="This is panel header 3" key="3">\n    <p>{text}</p>\n  </CollapsePanel>\n</Collapse>\n\n<script>\n  import { Collapse, CollapsePanel } from "svant";\n\n  const text = `\n    A dog is a type of domesticated animal.\n    Known for its loyalty and faithfulness,\n    it can be found as a welcome guest in many households across the world.\n  `;\n\n  function callback(event) {\n    console.log(event.detail.currentActiveKey);\n  }\n<\/script>\n',$$slots:{description:[U]},$$scope:{ctx:e}}}),ue=new D({props:{id:"demo-borderless",title:"Borderless",demoComponent:I,demoCode:'<Collapse borderless defaultActiveKey="{[\'1\']}">\n  <CollapsePanel header="This is panel header 1" key="1">\n    <p class="collapse-text">{text}</p>\n  </CollapsePanel>\n  <CollapsePanel header="This is panel header 2" key="2">\n    <p class="collapse-text">{text}</p>\n  </CollapsePanel>\n  <CollapsePanel header="This is panel header 3" key="3">\n    <p class="collapse-text">{text}</p>\n  </CollapsePanel>\n</Collapse>\n\n<script>\n  import { Collapse, CollapsePanel } from "svant";\n\n  const text = `\n    A dog is a type of domesticated animal.\n    Known for its loyalty and faithfulness,\n    it can be found as a welcome guest in many households across the world.\n  `;\n<\/script>\n\n<style>\n  .collapse-text {\n    padding-left: 24px;\n  }\n</style>\n',$$slots:{description:[q]},$$scope:{ctx:e}}}),$e=new D({props:{id:"demo-custom-panel",title:"Custom Panels",demoComponent:B,demoCode:'<Collapse\n  borderless\n  defaultActiveKey="{[\'1\']}"\n  expandIcon="{CaretRightOutlined}"\n  class="{{ \'site-collapse-custom-collapse\': true }}">\n  <CollapsePanel\n    header="This is panel header 1"\n    key="1"\n    class="site-collapse-custom-panel">\n    <p>{text}</p>\n  </CollapsePanel>\n  <CollapsePanel\n    header="This is panel header 2"\n    key="2"\n    class="site-collapse-custom-panel">\n    <p>{text}</p>\n  </CollapsePanel>\n  <CollapsePanel\n    header="This is panel header 3"\n    key="3"\n    class="site-collapse-custom-panel">\n    <p>{text}</p>\n  </CollapsePanel>\n</Collapse>\n\n<script>\n  import { Collapse, CollapsePanel } from "svant";\n  import { CaretRightOutlined } from "svant/icons";\n\n  const text = `\n    A dog is a type of domesticated animal.\n    Known for its loyalty and faithfulness,\n    it can be found as a welcome guest in many households across the world.\n  `;\n<\/script>\n\n<style>\n  :global(.site-collapse-custom-collapse) {\n    background: #fff;\n  }\n\n  :global(.site-collapse-custom-panel) {\n    background: #fff;\n    border-radius: 2px;\n    margin-bottom: 24px;\n    border-bottom: 0px !important;\n    overflow: hidden;\n  }\n\n  :global(.site-collapse-custom-panel .ant-collapse-content) {\n    background: rgba(0, 102, 204, 0.1) !important;\n    margin-left: 40px;\n  }\n</style>\n',$$slots:{description:[J]},$$scope:{ctx:e}}}),ye=new D({props:{id:"demo-hide-arrow",title:"Hide Arrow",demoComponent:N,demoCode:'<Collapse defaultActiveKey="{[\'1\']}">\n  <CollapsePanel header="This is panel header with arrow icon" key="1">\n    <p>{text}</p>\n  </CollapsePanel>\n  <CollapsePanel\n    hideArrow\n    header="This is panel header with no arrow icon"\n    key="2">\n    <p>{text}</p>\n  </CollapsePanel>\n</Collapse>\n\n<script>\n  import { Collapse, CollapsePanel } from "svant";\n\n  const text = `\n    A dog is a type of domesticated animal.\n    Known for its loyalty and faithfulness,\n    it can be found as a welcome guest in many households across the world.\n  `;\n<\/script>\n',$$slots:{description:[L]},$$scope:{ctx:e}}}),Ce=new D({props:{id:"demo-arrow-position",title:"Arrow Position",demoComponent:Y,demoCode:'<Collapse defaultActiveKey="{[\'1\']}" expandIconPosition="right">\n  <CollapsePanel header="This is panel header 1" key="1">\n    <div>{text}</div>\n  </CollapsePanel>\n  <CollapsePanel header="This is panel header 2" key="2">\n    <div>{text}</div>\n  </CollapsePanel>\n  <CollapsePanel header="This is panel header 3" key="3">\n    <div>{text}</div>\n  </CollapsePanel>\n</Collapse>\n\n<script>\n  import { Collapse, CollapsePanel } from "svant";\n  import { SettingOutlined } from "svant/icons";\n\n  const text = `\n    A dog is a type of domesticated animal.\n    Known for its loyalty and faithfulness,\n    it can be found as a welcome guest in many households across the world.\n  `;\n<\/script>\n',$$slots:{description:[V]},$$scope:{ctx:e}}}),ge=new D({props:{id:"demo-custom-header",title:"Custom Panel Header",demoComponent:z,demoCode:'<Collapse defaultActiveKey="{[\'1\']}">\n  <CollapsePanel key="1">\n    <div slot="header" class="geared-panel">\n      <span>Custom header from the slot</span>\n      <span on:click|stopPropagation="{onGearClicked}">\n        <SettingOutlined />\n      </span>\n    </div>\n    <div>{text}</div>\n  </CollapsePanel>\n  <CollapsePanel header="This is panel header 2" key="2">\n    <div>{text}</div>\n  </CollapsePanel>\n  <CollapsePanel header="This is panel header 3" key="3">\n    <div>{text}</div>\n  </CollapsePanel>\n</Collapse>\n\n<script>\n  import { Collapse, CollapsePanel } from "svant";\n  import { SettingOutlined } from "svant/icons";\n\n  const text = `\n    A dog is a type of domesticated animal.\n    Known for its loyalty and faithfulness,\n    it can be found as a welcome guest in many households across the world.\n  `;\n\n  function onGearClicked(event) {\n    console.log("Gear clicked but did not open the panel");\n  }\n<\/script>\n\n<style>\n  .geared-panel {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n</style>\n',$$slots:{description:[_]},$$scope:{ctx:e}}}),ve=new D({props:{id:"demo-custom-manual-active",title:"Manual Custom Key",demoComponent:H,demoCode:'<Collapse {activeKey} on:click="{handleClick}">\n  <CollapsePanel header="This is panel header 1" key="1">\n    <p>{text}</p>\n  </CollapsePanel>\n  <CollapsePanel header="This is panel header 2" key="2">\n    <p>{text}</p>\n  </CollapsePanel>\n  <CollapsePanel header="This is panel header 3" key="3">\n    <p>{text}</p>\n  </CollapsePanel>\n</Collapse>\n\n<script>\n  import { Collapse, CollapsePanel, Modal } from "svant";\n\n  const text = `\n    A dog is a type of domesticated animal.\n    Known for its loyalty and faithfulness,\n    it can be found as a welcome guest in many households across the world.\n  `;\n\n  let activeKey = ["1"];\n\n  function handleClick({ detail }) {\n    const { lastKeyClicked } = detail;\n    const alreadyOpen = activeKey.includes(lastKeyClicked);\n    const message = `Are you sure you want to ${\n      alreadyOpen ? "close" : "open"\n    } this panel`;\n    const callback = () => {\n      if (alreadyOpen) {\n        // Make sure to reassign activeKey so it\'s\n        activeKey = activeKey.splice(activeKey.indexOf(lastKeyClicked), 0);\n      } else {\n        activeKey = [...activeKey, lastKeyClicked];\n      }\n    };\n    Modal.confirm({\n      content: message,\n      onOk: callback\n    });\n  }\n<\/script>\n',$$slots:{description:[Q]},$$scope:{ctx:e}}}),Pe=[e[0]],xe={},we=0;we<Pe.length;we+=1)xe=l(xe,Pe[we]);for(var be=new O({props:xe}),ke=[e[1]],Ae={},Ke=0;Ke<ke.length;Ke+=1)Ae=l(Ae,ke[Ke]);for(var Te=new O({props:Ae}),Ee=[e[2]],De={},Oe=0;Oe<Ee.length;Oe+=1)De=l(De,Ee[Oe]);for(var je=new O({props:De}),Re=[e[3]],Se={},Ie=0;Ie<Re.length;Ie+=1)Se=l(Se,Re[Ie]);var Be=new O({props:Se});return{c:function(){n=r("h1"),t=i("Collapse"),a=c(),o=r("p"),s=i("A content area which can be collapsed and expanded."),A=c(),K=r("h2"),T=i("Examples"),E=c(),p(fe.$$.fragment),F=c(),p(he.$$.fragment),W=c(),p(me.$$.fragment),X=c(),p(ue.$$.fragment),Z=c(),p($e.$$.fragment),ee=c(),p(ye.$$.fragment),ne=c(),p(Ce.$$.fragment),te=c(),p(ge.$$.fragment),ae=c(),p(ve.$$.fragment),oe=c(),se=r("h2"),le=i("API"),re=c(),p(be.$$.fragment),ie=c(),p(Te.$$.fragment),ce=c(),p(je.$$.fragment),pe=c(),p(Be.$$.fragment)},l:function(e){n=d(e,"H1",{});var l=f(n);t=h(l,"Collapse"),l.forEach(m),a=u(e),o=d(e,"P",{});var r=f(o);s=h(r,"A content area which can be collapsed and expanded."),r.forEach(m),A=u(e),K=d(e,"H2",{});var i=f(K);T=h(i,"Examples"),i.forEach(m),E=u(e),$(fe.$$.fragment,e),F=u(e),$(he.$$.fragment,e),W=u(e),$(me.$$.fragment,e),X=u(e),$(ue.$$.fragment,e),Z=u(e),$($e.$$.fragment,e),ee=u(e),$(ye.$$.fragment,e),ne=u(e),$(Ce.$$.fragment,e),te=u(e),$(ge.$$.fragment,e),ae=u(e),$(ve.$$.fragment,e),oe=u(e),se=d(e,"H2",{});var c=f(se);le=h(c,"API"),c.forEach(m),re=u(e),$(be.$$.fragment,e),ie=u(e),$(Te.$$.fragment,e),ce=u(e),$(je.$$.fragment,e),pe=u(e),$(Be.$$.fragment,e)},m:function(e,l){y(e,n,l),C(n,t),y(e,a,l),y(e,o,l),C(o,s),y(e,A,l),y(e,K,l),C(K,T),y(e,E,l),g(fe,e,l),y(e,F,l),g(he,e,l),y(e,W,l),g(me,e,l),y(e,X,l),g(ue,e,l),y(e,Z,l),g($e,e,l),y(e,ee,l),g(ye,e,l),y(e,ne,l),g(Ce,e,l),y(e,te,l),g(ge,e,l),y(e,ae,l),g(ve,e,l),y(e,oe,l),y(e,se,l),C(se,le),y(e,re,l),g(be,e,l),y(e,ie,l),g(Te,e,l),y(e,ce,l),g(je,e,l),y(e,pe,l),g(Be,e,l),de=!0},p:function(e,n){var t=v(n,1)[0],a={};16&t&&(a.$$scope={dirty:t,ctx:e}),fe.$set(a);var o={};16&t&&(o.$$scope={dirty:t,ctx:e}),he.$set(o);var s={};16&t&&(s.$$scope={dirty:t,ctx:e}),me.$set(s);var l={};16&t&&(l.$$scope={dirty:t,ctx:e}),ue.$set(l);var r={};16&t&&(r.$$scope={dirty:t,ctx:e}),$e.$set(r);var i={};16&t&&(i.$$scope={dirty:t,ctx:e}),ye.$set(i);var c={};16&t&&(c.$$scope={dirty:t,ctx:e}),Ce.$set(c);var p={};16&t&&(p.$$scope={dirty:t,ctx:e}),ge.$set(p);var d={};16&t&&(d.$$scope={dirty:t,ctx:e}),ve.$set(d);var f=1&t?P(Pe,[x(e[0])]):{};be.$set(f);var h=2&t?P(ke,[x(e[1])]):{};Te.$set(h);var m=4&t?P(Ee,[x(e[2])]):{};je.$set(m);var u=8&t?P(Re,[x(e[3])]):{};Be.$set(u)},i:function(e){de||(w(fe.$$.fragment,e),w(he.$$.fragment,e),w(me.$$.fragment,e),w(ue.$$.fragment,e),w($e.$$.fragment,e),w(ye.$$.fragment,e),w(Ce.$$.fragment,e),w(ge.$$.fragment,e),w(ve.$$.fragment,e),w(be.$$.fragment,e),w(Te.$$.fragment,e),w(je.$$.fragment,e),w(Be.$$.fragment,e),de=!0)},o:function(e){b(fe.$$.fragment,e),b(he.$$.fragment,e),b(me.$$.fragment,e),b(ue.$$.fragment,e),b($e.$$.fragment,e),b(ye.$$.fragment,e),b(Ce.$$.fragment,e),b(ge.$$.fragment,e),b(ve.$$.fragment,e),b(be.$$.fragment,e),b(Te.$$.fragment,e),b(je.$$.fragment,e),b(Be.$$.fragment,e),de=!1},d:function(e){e&&m(n),e&&m(a),e&&m(o),e&&m(A),e&&m(K),e&&m(E),k(fe,e),e&&m(F),k(he,e),e&&m(W),k(me,e),e&&m(X),k(ue,e),e&&m(Z),k($e,e),e&&m(ee),k(ye,e),e&&m(ne),k(Ce,e),e&&m(te),k(ge,e),e&&m(ae),k(ve,e),e&&m(oe),e&&m(se),e&&m(re),k(be,e),e&&m(ie),k(Te,e),e&&m(ce),k(je,e),e&&m(pe),k(Be,e)}}}function X(e){return[{title:"Collapse Attributes",columns:["Property","Description","Type","Default"],data:[{property:"activeKey",description:"Used to override the collapse auto functionality. Allows for manual control over what is open",type:"Array",default:""},{property:"defaultActiveKey",description:"An array of the keys to be initially opened",type:"Array",default:""},{property:"borderless",description:"Removes the borders",type:"Boolean",default:"false"},{property:"accordion",description:"If true, only one panel opens at a time",type:"Boolean",default:"false"},{property:"expandIcon",description:"Allows for a customize collapse icon",type:"SvelteComponent",default:"RightOutlined"},{property:"class",description:"Custom classes or class object for the Collapse wrapper",type:"String | Object",default:""},{property:"expandIconPosition",description:"The icon can be displayed on the left or the right",type:"String - `left` | `right`",default:""}]},{title:"CollapsePanel Attributes",columns:["Property","Description","Type","Default"],data:[{property:"disabled",description:"If true, panel cannot be opened or closed",type:"Boolean",default:"false"},{property:"header",description:"Title of the panel (Can be replaced with the header slot)",type:"String",default:""},{property:"key",description:"Unique key identifying the panel from among its siblings",type:"String",default:""},{property:"class",description:"Custom classes or class object for the panel",type:"String",default:""},{property:"hideArrow",description:"Ability to hide the collapse arrow icon",type:"Boolean",default:"false"}]},{title:"Collapse Events",columns:["Name","Description"],data:[{name:"click",description:"Fired when a panel header is clicked"},{name:"change",description:"Fired when a panel is opened or closed"}]},{title:"CollapsePanel Slots",columns:["Name","Description"],data:[{name:"header",description:"Custom content for the panel header"}]}]}var Z=function(l){e(c,s);var r,i=(r=c,function(){var e,n=A(r);if(F()){var t=A(this).constructor;e=Reflect.construct(n,arguments,t)}else e=n.apply(this,arguments);return K(this,e)});function c(e){var s;return n(this,c),s=i.call(this),t(o(s),e,X,W,a,{}),s}return c}();function ee(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function ne(e){var n,t,a=new Z({});return{c:function(){n=r("div"),p(a.$$.fragment),this.h()},l:function(e){n=d(e,"DIV",{class:!0});var t=f(n);$(a.$$.fragment,t),t.forEach(m),this.h()},h:function(){T(n,"class","markdown api-container")},m:function(e,o){y(e,n,o),g(a,n,null),t=!0},p:E,i:function(e){t||(w(a.$$.fragment,e),t=!0)},o:function(e){b(a.$$.fragment,e),t=!1},d:function(e){e&&m(n),k(a)}}}var te=function(l){e(c,s);var r,i=(r=c,function(){var e,n=A(r);if(ee()){var t=A(this).constructor;e=Reflect.construct(n,arguments,t)}else e=n.apply(this,arguments);return K(this,e)});function c(e){var s;return n(this,c),s=i.call(this),t(o(s),e,null,ne,a,{}),s}return c}();export default te;
