import{S as e,i as n,s as t,x as o,e as c,t as a,a as s,C as r,b as i,f as l,g as p,d as h,c as d,D as m,j as f,k as $,E as u,a4 as b,a5 as g,v as k,w as C,G as x,h as v,q as y,n as D}from"./client.7d5f28db.js";import{E as w,D as E}from"./DocsTable.e16f0640.js";import"./index.9f1e07e4.js";import A from"./basic.demo.533adb1a.js";import B from"./disabled.demo.f2021d45.js";import P from"./controlled.demo.0a56de7b.js";import G from"./group.demo.22d01110.js";import O from"./checkall.demo.ebc16ae4.js";import j from"./groupslot.demo.ff1ea49d.js";function L(e){let n,t;return{c(){n=c("p"),t=a("Basic usage of checkbox."),this.h()},l(e){n=i(e,"P",{slot:!0});var o=l(n);t=p(o,"Basic usage of checkbox."),o.forEach(h),this.h()},h(){v(n,"slot","description")},m(e,o){f(e,n,o),$(n,t)},d(e){e&&h(n)}}}function S(e){let n,t;return{c(){n=c("p"),t=a("Disabled checkbox."),this.h()},l(e){n=i(e,"P",{slot:!0});var o=l(n);t=p(o,"Disabled checkbox."),o.forEach(h),this.h()},h(){v(n,"slot","description")},m(e,o){f(e,n,o),$(n,t)},d(e){e&&h(n)}}}function T(e){let n,t;return{c(){n=c("p"),t=a("Communicated with other components."),this.h()},l(e){n=i(e,"P",{slot:!0});var o=l(n);t=p(o,"Communicated with other components."),o.forEach(h),this.h()},h(){v(n,"slot","description")},m(e,o){f(e,n,o),$(n,t)},d(e){e&&h(n)}}}function I(e){let n,t;return{c(){n=c("p"),t=a("Generate a group of checkboxes from an array."),this.h()},l(e){n=i(e,"P",{slot:!0});var o=l(n);t=p(o,"Generate a group of checkboxes from an array."),o.forEach(h),this.h()},h(){v(n,"slot","description")},m(e,o){f(e,n,o),$(n,t)},d(e){e&&h(n)}}}function N(e){let n,t,o,s,r;return{c(){n=c("p"),t=a("The "),o=c("code"),s=a("indeterminate"),r=a(" property can help you to achieve a 'check all' effect."),this.h()},l(e){n=i(e,"P",{slot:!0});var c=l(n);t=p(c,"The "),o=i(c,"CODE",{});var a=l(o);s=p(a,"indeterminate"),a.forEach(h),r=p(c," property can help you to achieve a 'check all' effect."),c.forEach(h),this.h()},h(){v(n,"slot","description")},m(e,c){f(e,n,c),$(n,t),$(n,o),$(o,s),$(n,r)},d(e){e&&h(n)}}}function H(e){let n,t;return{c(){n=c("p"),t=a("Instead of using the options attribute you can just provide the checkboxes in the slot"),this.h()},l(e){n=i(e,"P",{slot:!0});var o=l(n);t=p(o,"Instead of using the options attribute you can just provide the checkboxes in the slot"),o.forEach(h),this.h()},h(){v(n,"slot","description")},m(e,o){f(e,n,o),$(n,t)},d(e){e&&h(n)}}}function U(e){let n,t,v,y,D,U,V,W,z,q,F,J,K,M,Q,R,X,Y,Z,_;const ee=new w({props:{id:"demo-type",title:"Basic",demoComponent:A,demoCode:'<Checkbox bind:checked on:change="{onChange}">Checkbox</Checkbox>\n\n<script>\n  import { Checkbox } from "svant";\n\n  let checked = false;\n\n  function onChange() {\n    console.log(`checked = ${checked}`);\n  }\n<\/script>\n',$$slots:{description:[L]},$$scope:{ctx:e}}}),ne=new w({props:{id:"demo-type",title:"Disabled",demoComponent:B,demoCode:'<div>\n  <Checkbox disabled />\n  <br />\n  <Checkbox bind:checked disabled />\n</div>\n\n<script>\n  import { Checkbox } from "svant";\n\n  let checked = true;\n<\/script>\n',$$slots:{description:[S]},$$scope:{ctx:e}}}),te=new w({props:{id:"demo-type",title:"Controlled Checkbox",demoComponent:P,demoCode:'<div>\n  <p style="{{ marginBottom: \'20px\' }}">\n    <Checkbox bind:checked {disabled} on:change="{onChange}">{label}</Checkbox>\n  </p>\n  <p>\n    <Button type="primary" size="small" on:click="{toggleChecked}">\n      {!checked ? \'Check\' : \'Uncheck\'}\n    </Button>\n    <Button\n      style="{{ margin: \'0 10px\' }}"\n      type="primary"\n      size="small"\n      on:click="{toggleDisable}">\n      {!disabled ? \'Disable\' : \'Enable\'}\n    </Button>\n  </p>\n</div>\n\n<script>\n  import { Checkbox } from "svant";\n  import { Button } from "svant";\n  let checked = true;\n  let disabled = false;\n  let label;\n  $: label = `${checked ? "Checked" : "Unchecked"}-${\n    disabled ? "Disabled" : "Enabled"\n  }`;\n  function toggleChecked() {\n    checked = !checked;\n  }\n\n  function toggleDisable() {\n    disabled = !disabled;\n  }\n\n  function onChange() {\n    console.log("checked = ", checked);\n  }\n<\/script>\n',$$slots:{description:[T]},$$scope:{ctx:e}}}),oe=new w({props:{id:"demo-type",title:"Checkbox Group",demoComponent:G,demoCode:'<div>\n  <CheckboxGroup\n    options="{plainOptions}"\n    bind:value="{value1}"\n    on:change="{onChange}" />\n  <br />\n  <br />\n  <CheckboxGroup {options} bind:value="{value2}" on:change="{onChange}" />\n  <br />\n  <br />\n  <CheckboxGroup\n    options="{optionsWithDisabled}"\n    disabled\n    bind:value="{value3}"\n    on:change="{onChange}" />\n</div>\n\n<script>\n  import { CheckboxGroup } from "svant";\n\n  let value1 = ["Apple"];\n  let value2 = ["Pear"];\n  let value3 = ["Apple"];\n\n  const plainOptions = ["Apple", "Pear", "Orange"];\n  const options = [\n    { label: "Apple", value: "Apple" },\n    { label: "Pear", value: "Pear" },\n    { label: "Orange", value: "Orange", disabled: true }\n  ];\n  const optionsWithDisabled = [\n    { label: "Apple", value: "Apple" },\n    { label: "Pear", value: "Pear" },\n    { label: "Orange", value: "Orange" }\n  ];\n\n  function onChange({ detail: checkedValues }) {\n    console.log("checked = ", checkedValues);\n  }\n<\/script>\n',$$slots:{description:[I]},$$scope:{ctx:e}}}),ce=new w({props:{id:"demo-type",title:"Check all",demoComponent:O,demoCode:'<div>\n  <div className="site-checkbox-all-wrapper">\n    <Checkbox\n      {indeterminate}\n      on:change="{onCheckAllChange}"\n      checked="{checkAll}">\n      Check all\n    </Checkbox>\n  </div>\n  <br />\n  <CheckboxGroup\n    options="{plainOptions}"\n    bind:value="{checkedList}"\n    on:change="{onChange}" />\n</div>\n\n<script>\n  import { CheckboxGroup, Checkbox } from "svant";\n\n  const plainOptions = ["Apple", "Pear", "Orange"];\n  let checkedList = ["Apple", "Orange"];\n  let indeterminate = true;\n  let checkAll = false;\n\n  function onChange({ detail }) {\n    indeterminate =\n      checkedList.length && checkedList.length < plainOptions.length;\n    checkAll = checkedList.length === plainOptions.length;\n  }\n\n  function onCheckAllChange({ detail }) {\n    console.log(detail.target.checked);\n    checkedList = detail.target.checked ? plainOptions : [];\n    indeterminate = false;\n    checkAll = detail.target.checked;\n  }\n<\/script>\n',$$slots:{description:[N]},$$scope:{ctx:e}}}),ae=new w({props:{id:"demo-type",title:"Checkbox Group With Slot",demoComponent:j,demoCode:'<CheckboxGroup bind:value style="{{ width: \'100%\' }}" on:change="{onChange}">\n  <Checkbox value="A">A</Checkbox>\n  <Checkbox value="B">B</Checkbox>\n  <Checkbox value="C">C</Checkbox>\n  <Checkbox value="D">D</Checkbox>\n  <Checkbox value="E">E</Checkbox>\n</CheckboxGroup>\n\n<script>\n  import { CheckboxGroup, Checkbox } from "svant";\n  let value = [];\n  function onChange() {\n    console.log("checked = ", value);\n  }\n<\/script>\n',$$slots:{description:[H]},$$scope:{ctx:e}}}),se=[e[0]];let re={};for(let e=0;e<se.length;e+=1)re=o(re,se[e]);const ie=new E({props:re}),le=[e[1]];let pe={};for(let e=0;e<le.length;e+=1)pe=o(pe,le[e]);const he=new E({props:pe}),de=[e[2]];let me={};for(let e=0;e<de.length;e+=1)me=o(me,de[e]);const fe=new E({props:me}),$e=[e[3]];let ue={};for(let e=0;e<$e.length;e+=1)ue=o(ue,$e[e]);const be=new E({props:ue}),ge=[e[4]];let ke={};for(let e=0;e<ge.length;e+=1)ke=o(ke,ge[e]);const Ce=new E({props:ke});return{c(){n=c("h1"),t=a("Checkbox"),v=s(),y=c("h2"),D=a("Examples"),U=s(),r(ee.$$.fragment),V=s(),r(ne.$$.fragment),W=s(),r(te.$$.fragment),z=s(),r(oe.$$.fragment),q=s(),r(ce.$$.fragment),F=s(),r(ae.$$.fragment),J=s(),K=c("h2"),M=a("API"),Q=s(),r(ie.$$.fragment),R=s(),r(he.$$.fragment),X=s(),r(fe.$$.fragment),Y=s(),r(be.$$.fragment),Z=s(),r(Ce.$$.fragment)},l(e){n=i(e,"H1",{});var o=l(n);t=p(o,"Checkbox"),o.forEach(h),v=d(e),y=i(e,"H2",{});var c=l(y);D=p(c,"Examples"),c.forEach(h),U=d(e),m(ee.$$.fragment,e),V=d(e),m(ne.$$.fragment,e),W=d(e),m(te.$$.fragment,e),z=d(e),m(oe.$$.fragment,e),q=d(e),m(ce.$$.fragment,e),F=d(e),m(ae.$$.fragment,e),J=d(e),K=i(e,"H2",{});var a=l(K);M=p(a,"API"),a.forEach(h),Q=d(e),m(ie.$$.fragment,e),R=d(e),m(he.$$.fragment,e),X=d(e),m(fe.$$.fragment,e),Y=d(e),m(be.$$.fragment,e),Z=d(e),m(Ce.$$.fragment,e)},m(e,o){f(e,n,o),$(n,t),f(e,v,o),f(e,y,o),$(y,D),f(e,U,o),u(ee,e,o),f(e,V,o),u(ne,e,o),f(e,W,o),u(te,e,o),f(e,z,o),u(oe,e,o),f(e,q,o),u(ce,e,o),f(e,F,o),u(ae,e,o),f(e,J,o),f(e,K,o),$(K,M),f(e,Q,o),u(ie,e,o),f(e,R,o),u(he,e,o),f(e,X,o),u(fe,e,o),f(e,Y,o),u(be,e,o),f(e,Z,o),u(Ce,e,o),_=!0},p(e,[n]){const t={};32&n&&(t.$$scope={dirty:n,ctx:e}),ee.$set(t);const o={};32&n&&(o.$$scope={dirty:n,ctx:e}),ne.$set(o);const c={};32&n&&(c.$$scope={dirty:n,ctx:e}),te.$set(c);const a={};32&n&&(a.$$scope={dirty:n,ctx:e}),oe.$set(a);const s={};32&n&&(s.$$scope={dirty:n,ctx:e}),ce.$set(s);const r={};32&n&&(r.$$scope={dirty:n,ctx:e}),ae.$set(r);const i=1&n?b(se,[g(e[0])]):{};ie.$set(i);const l=2&n?b(le,[g(e[1])]):{};he.$set(l);const p=4&n?b(de,[g(e[2])]):{};fe.$set(p);const h=8&n?b($e,[g(e[3])]):{};be.$set(h);const d=16&n?b(ge,[g(e[4])]):{};Ce.$set(d)},i(e){_||(k(ee.$$.fragment,e),k(ne.$$.fragment,e),k(te.$$.fragment,e),k(oe.$$.fragment,e),k(ce.$$.fragment,e),k(ae.$$.fragment,e),k(ie.$$.fragment,e),k(he.$$.fragment,e),k(fe.$$.fragment,e),k(be.$$.fragment,e),k(Ce.$$.fragment,e),_=!0)},o(e){C(ee.$$.fragment,e),C(ne.$$.fragment,e),C(te.$$.fragment,e),C(oe.$$.fragment,e),C(ce.$$.fragment,e),C(ae.$$.fragment,e),C(ie.$$.fragment,e),C(he.$$.fragment,e),C(fe.$$.fragment,e),C(be.$$.fragment,e),C(Ce.$$.fragment,e),_=!1},d(e){e&&h(n),e&&h(v),e&&h(y),e&&h(U),x(ee,e),e&&h(V),x(ne,e),e&&h(W),x(te,e),e&&h(z),x(oe,e),e&&h(q),x(ce,e),e&&h(F),x(ae,e),e&&h(J),e&&h(K),e&&h(Q),x(ie,e),e&&h(R),x(he,e),e&&h(X),x(fe,e),e&&h(Y),x(be,e),e&&h(Z),x(Ce,e)}}}function V(e){return[{title:"Checkbox Attributes",columns:["Property","Description","Type","Default"],data:[{property:"autoFocus",description:"Set focus when component mounted.",type:"Boolean",default:"false"},{property:"checked",description:"Specifies whether the checkbox is selected. Can be used for 2 way binding.",type:"Boolean",default:"false"},{property:"disabled",description:"Disable checkbox.",type:"Boolean",default:"false"},{property:"indeterminate",description:"Indeterminate checked state of checkbox.",type:"Boolean",default:"false"}]},{title:"CheckboxGroup Attributes",columns:["Property","Description","Type","Default"],data:[{property:"disabled",description:"Disable all checkboxes.",type:"Boolean",default:"false"},{property:"name",description:'The name property of all input[type="checkbox"] children.',type:"String",default:"-"},{property:"options",description:"Specifies options.",type:'String[] | [{label:"",value:"",disabled:false}]',default:"[]"},{property:"value",description:"Used for setting the currently selected value.",type:"String[]",default:"[]"}]},{title:"Checkbox Events",columns:["Name","Description"],data:[{name:"change",description:"Triggers when the checkbox checked state changes."}]},{title:"CheckboxGroup Events",columns:["Name","Description"],data:[{name:"change",description:"Triggers when the checkbox group value changes."}]},{title:"Checkbox Bind",columns:["Name","Description"],data:[{name:"focus",description:"Let's you bind to the input focus method."},{name:"blur",description:"Let's you bind to the input blur method."}]}]}class W extends e{constructor(e){super(),n(this,e,V,U,t,{})}}function z(e){let n,t,o;const a=new W({});return{c(){n=s(),t=c("div"),r(a.$$.fragment),this.h()},l(e){y('[data-svelte="svelte-cf1c3i"]',document.head).forEach(h),n=d(e),t=i(e,"DIV",{class:!0});var o=l(t);m(a.$$.fragment,o),o.forEach(h),this.h()},h(){document.title="Checkbox",v(t,"class","markdown api-container")},m(e,c){f(e,n,c),f(e,t,c),u(a,t,null),o=!0},p:D,i(e){o||(k(a.$$.fragment,e),o=!0)},o(e){C(a.$$.fragment,e),o=!1},d(e){e&&h(n),e&&h(t),x(a)}}}export default class extends e{constructor(e){super(),n(this,e,null,z,t,{})}}