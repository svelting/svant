import{S as e,i as t,s as n,x as o,e as c,t as a,a as s,C as r,b as i,f as l,g as p,d as h,c as d,D as m,j as f,k as $,E as u,a5 as g,a6 as b,v as k,w as C,G as x,h as v,q as y,n as D}from"./client.6ddc1f6e.js";import{E,D as w}from"./DocsTable.ebf3a4e3.js";import"./index.8d2617b6.js";import A from"./basic.demo.513f70e5.js";import B from"./disabled.demo.4d5c74b8.js";import P from"./controlled.demo.e6880860.js";import G from"./group.demo.b3a19fd3.js";import O from"./checkall.demo.47753653.js";import j from"./groupslot.demo.9110dee8.js";function S(e){let t,n;return{c(){t=c("p"),n=a("Basic usage of checkbox."),this.h()},l(e){t=i(e,"P",{slot:!0});var o=l(t);n=p(o,"Basic usage of checkbox."),o.forEach(h),this.h()},h(){v(t,"slot","description")},m(e,o){f(e,t,o),$(t,n)},d(e){e&&h(t)}}}function L(e){let t,n;return{c(){t=c("p"),n=a("Disabled checkbox."),this.h()},l(e){t=i(e,"P",{slot:!0});var o=l(t);n=p(o,"Disabled checkbox."),o.forEach(h),this.h()},h(){v(t,"slot","description")},m(e,o){f(e,t,o),$(t,n)},d(e){e&&h(t)}}}function T(e){let t,n;return{c(){t=c("p"),n=a("Communicated with other components."),this.h()},l(e){t=i(e,"P",{slot:!0});var o=l(t);n=p(o,"Communicated with other components."),o.forEach(h),this.h()},h(){v(t,"slot","description")},m(e,o){f(e,t,o),$(t,n)},d(e){e&&h(t)}}}function V(e){let t,n;return{c(){t=c("p"),n=a("Generate a group of checkboxes from an array."),this.h()},l(e){t=i(e,"P",{slot:!0});var o=l(t);n=p(o,"Generate a group of checkboxes from an array."),o.forEach(h),this.h()},h(){v(t,"slot","description")},m(e,o){f(e,t,o),$(t,n)},d(e){e&&h(t)}}}function I(e){let t,n,o,s,r;return{c(){t=c("p"),n=a("The "),o=c("code"),s=a("indeterminate"),r=a(" property can help you to achieve a 'check all' effect."),this.h()},l(e){t=i(e,"P",{slot:!0});var c=l(t);n=p(c,"The "),o=i(c,"CODE",{});var a=l(o);s=p(a,"indeterminate"),a.forEach(h),r=p(c," property can help you to achieve a 'check all' effect."),c.forEach(h),this.h()},h(){v(t,"slot","description")},m(e,c){f(e,t,c),$(t,n),$(t,o),$(o,s),$(t,r)},d(e){e&&h(t)}}}function N(e){let t,n;return{c(){t=c("p"),n=a("Instead of using the options attribute you can just provide the checkboxes in the slot"),this.h()},l(e){t=i(e,"P",{slot:!0});var o=l(t);n=p(o,"Instead of using the options attribute you can just provide the checkboxes in the slot"),o.forEach(h),this.h()},h(){v(t,"slot","description")},m(e,o){f(e,t,o),$(t,n)},d(e){e&&h(t)}}}function H(e){let t,n,v,y,D,H,U,W,z,q,F,J,K,M,Q,R,X,Y,Z,_,ee,te,ne;const oe=new E({props:{id:"demo-type",title:"Basic",demoComponent:A,demoCode:'<Checkbox on:change="{onChange}">Checkbox</Checkbox>\n\n<script>\n  import { Checkbox } from "svant";\n  function onChange({ detail }) {\n    console.log(`checked = ${detail.target.checked}`);\n  }\n<\/script>\n',$$slots:{description:[S]},$$scope:{ctx:e}}}),ce=new E({props:{id:"demo-type",title:"Disabled",demoComponent:B,demoCode:'<div>\n  <Checkbox disabled />\n  <br />\n  <Checkbox defaultChecked disabled />\n</div>\n\n<script>\n  import { Checkbox } from "svant";\n<\/script>\n',$$slots:{description:[L]},$$scope:{ctx:e}}}),ae=new E({props:{id:"demo-type",title:"Controlled Checkbox",demoComponent:P,demoCode:'<div>\n  <p style="{{ marginBottom: \'20px\' }}">\n    <Checkbox {checked} {disabled} on:change="{onChange}">{label}</Checkbox>\n  </p>\n  <p>\n    <Button type="primary" size="small" on:click="{toggleChecked}">\n      {!checked ? \'Check\' : \'Uncheck\'}\n    </Button>\n    <Button\n      style="{{ margin: \'0 10px\' }}"\n      type="primary"\n      size="small"\n      on:click="{toggleDisable}">\n      {!disabled ? \'Disable\' : \'Enable\'}\n    </Button>\n  </p>\n</div>\n\n<script>\n  import { Checkbox } from "svant";\n  import { Button } from "svant";\n  let checked = true;\n  let disabled = false;\n  let label;\n  $: label = `${checked ? "Checked" : "Unchecked"}-${\n    disabled ? "Disabled" : "Enabled"\n  }`;\n  function toggleChecked() {\n    checked = !checked;\n  }\n\n  function toggleDisable() {\n    disabled = !disabled;\n  }\n\n  function onChange({ detail }) {\n    console.log("checked = ", detail.target.checked);\n    checked = detail.target.checked;\n  }\n<\/script>\n',$$slots:{description:[T]},$$scope:{ctx:e}}}),se=new E({props:{id:"demo-type",title:"Checkbox Group",demoComponent:G,demoCode:'<div>\n  <CheckboxGroup\n    options="{plainOptions}"\n    defaultValue="{[\'Apple\']}"\n    on:change="{onChange}" />\n  <br />\n  <br />\n  <CheckboxGroup {options} defaultValue="{[\'Pear\']}" on:change="{onChange}" />\n  <br />\n  <br />\n  <CheckboxGroup\n    options="{optionsWithDisabled}"\n    disabled\n    defaultValue="{[\'Apple\']}"\n    on:change="{onChange}" />\n</div>\n\n<script>\n  import { CheckboxGroup } from "svant";\n\n  const plainOptions = ["Apple", "Pear", "Orange"];\n  const options = [\n    { label: "Apple", value: "Apple" },\n    { label: "Pear", value: "Pear" },\n    { label: "Orange", value: "Orange", disabled: true }\n  ];\n  const optionsWithDisabled = [\n    { label: "Apple", value: "Apple" },\n    { label: "Pear", value: "Pear" },\n    { label: "Orange", value: "Orange" }\n  ];\n\n  function onChange({ detail: checkedValues }) {\n    console.log("checked = ", checkedValues);\n  }\n<\/script>\n',$$slots:{description:[V]},$$scope:{ctx:e}}}),re=new E({props:{id:"demo-type",title:"Check all",demoComponent:O,demoCode:'<div>\n  <div className="site-checkbox-all-wrapper">\n    <Checkbox\n      {indeterminate}\n      on:change="{onCheckAllChange}"\n      checked="{checkAll}">\n      Check all\n    </Checkbox>\n  </div>\n  <br />\n  <CheckboxGroup\n    options="{plainOptions}"\n    value="{checkedList}"\n    on:change="{onChange}" />\n</div>\n\n<script>\n  import { CheckboxGroup, Checkbox } from "svant";\n\n  const plainOptions = ["Apple", "Pear", "Orange"];\n  let checkedList = ["Apple", "Orange"];\n  let indeterminate = true;\n  let checkAll = false;\n\n  function onChange({ detail }) {\n    checkedList = detail;\n    indeterminate =\n      checkedList.length && checkedList.length < plainOptions.length;\n    checkAll = checkedList.length === plainOptions.length;\n  }\n\n  function onCheckAllChange({ detail }) {\n    console.log(detail.target.checked);\n    checkedList = detail.target.checked ? plainOptions : [];\n    indeterminate = false;\n    checkAll = detail.target.checked;\n  }\n<\/script>\n',$$slots:{description:[I]},$$scope:{ctx:e}}}),ie=new E({props:{id:"demo-type",title:"Checkbox Group With Slot",demoComponent:j,demoCode:'<CheckboxGroup style="{{ width: \'100%\' }}" on:change="{onChange}">\n  <Checkbox value="A">A</Checkbox>\n  <Checkbox value="B">B</Checkbox>\n  <Checkbox value="C">C</Checkbox>\n  <Checkbox value="D">D</Checkbox>\n  <Checkbox value="E">E</Checkbox>\n</CheckboxGroup>\n\n<script>\n  import { CheckboxGroup, Checkbox } from "svant";\n  function onChange({ detail }) {\n    console.log("checked = ", detail);\n  }\n<\/script>\n',$$slots:{description:[N]},$$scope:{ctx:e}}}),le=[e[0]];let pe={};for(let e=0;e<le.length;e+=1)pe=o(pe,le[e]);const he=new w({props:pe}),de=[e[1]];let me={};for(let e=0;e<de.length;e+=1)me=o(me,de[e]);const fe=new w({props:me}),$e=[e[2]];let ue={};for(let e=0;e<$e.length;e+=1)ue=o(ue,$e[e]);const ge=new w({props:ue}),be=[e[3]];let ke={};for(let e=0;e<be.length;e+=1)ke=o(ke,be[e]);const Ce=new w({props:ke}),xe=[e[4]];let ve={};for(let e=0;e<xe.length;e+=1)ve=o(ve,xe[e]);const ye=new w({props:ve});return{c(){t=c("h1"),n=a("Checkbox"),v=s(),y=c("p"),D=a("Description of the Checkbox's function."),H=s(),U=c("h2"),W=a("Examples"),z=s(),r(oe.$$.fragment),q=s(),r(ce.$$.fragment),F=s(),r(ae.$$.fragment),J=s(),r(se.$$.fragment),K=s(),r(re.$$.fragment),M=s(),r(ie.$$.fragment),Q=s(),R=c("h2"),X=a("API"),Y=s(),r(he.$$.fragment),Z=s(),r(fe.$$.fragment),_=s(),r(ge.$$.fragment),ee=s(),r(Ce.$$.fragment),te=s(),r(ye.$$.fragment)},l(e){t=i(e,"H1",{});var o=l(t);n=p(o,"Checkbox"),o.forEach(h),v=d(e),y=i(e,"P",{});var c=l(y);D=p(c,"Description of the Checkbox's function."),c.forEach(h),H=d(e),U=i(e,"H2",{});var a=l(U);W=p(a,"Examples"),a.forEach(h),z=d(e),m(oe.$$.fragment,e),q=d(e),m(ce.$$.fragment,e),F=d(e),m(ae.$$.fragment,e),J=d(e),m(se.$$.fragment,e),K=d(e),m(re.$$.fragment,e),M=d(e),m(ie.$$.fragment,e),Q=d(e),R=i(e,"H2",{});var s=l(R);X=p(s,"API"),s.forEach(h),Y=d(e),m(he.$$.fragment,e),Z=d(e),m(fe.$$.fragment,e),_=d(e),m(ge.$$.fragment,e),ee=d(e),m(Ce.$$.fragment,e),te=d(e),m(ye.$$.fragment,e)},m(e,o){f(e,t,o),$(t,n),f(e,v,o),f(e,y,o),$(y,D),f(e,H,o),f(e,U,o),$(U,W),f(e,z,o),u(oe,e,o),f(e,q,o),u(ce,e,o),f(e,F,o),u(ae,e,o),f(e,J,o),u(se,e,o),f(e,K,o),u(re,e,o),f(e,M,o),u(ie,e,o),f(e,Q,o),f(e,R,o),$(R,X),f(e,Y,o),u(he,e,o),f(e,Z,o),u(fe,e,o),f(e,_,o),u(ge,e,o),f(e,ee,o),u(Ce,e,o),f(e,te,o),u(ye,e,o),ne=!0},p(e,[t]){const n={};32&t&&(n.$$scope={dirty:t,ctx:e}),oe.$set(n);const o={};32&t&&(o.$$scope={dirty:t,ctx:e}),ce.$set(o);const c={};32&t&&(c.$$scope={dirty:t,ctx:e}),ae.$set(c);const a={};32&t&&(a.$$scope={dirty:t,ctx:e}),se.$set(a);const s={};32&t&&(s.$$scope={dirty:t,ctx:e}),re.$set(s);const r={};32&t&&(r.$$scope={dirty:t,ctx:e}),ie.$set(r);const i=1&t?g(le,[b(e[0])]):{};he.$set(i);const l=2&t?g(de,[b(e[1])]):{};fe.$set(l);const p=4&t?g($e,[b(e[2])]):{};ge.$set(p);const h=8&t?g(be,[b(e[3])]):{};Ce.$set(h);const d=16&t?g(xe,[b(e[4])]):{};ye.$set(d)},i(e){ne||(k(oe.$$.fragment,e),k(ce.$$.fragment,e),k(ae.$$.fragment,e),k(se.$$.fragment,e),k(re.$$.fragment,e),k(ie.$$.fragment,e),k(he.$$.fragment,e),k(fe.$$.fragment,e),k(ge.$$.fragment,e),k(Ce.$$.fragment,e),k(ye.$$.fragment,e),ne=!0)},o(e){C(oe.$$.fragment,e),C(ce.$$.fragment,e),C(ae.$$.fragment,e),C(se.$$.fragment,e),C(re.$$.fragment,e),C(ie.$$.fragment,e),C(he.$$.fragment,e),C(fe.$$.fragment,e),C(ge.$$.fragment,e),C(Ce.$$.fragment,e),C(ye.$$.fragment,e),ne=!1},d(e){e&&h(t),e&&h(v),e&&h(y),e&&h(H),e&&h(U),e&&h(z),x(oe,e),e&&h(q),x(ce,e),e&&h(F),x(ae,e),e&&h(J),x(se,e),e&&h(K),x(re,e),e&&h(M),x(ie,e),e&&h(Q),e&&h(R),e&&h(Y),x(he,e),e&&h(Z),x(fe,e),e&&h(_),x(ge,e),e&&h(ee),x(Ce,e),e&&h(te),x(ye,e)}}}function U(e){return[{title:"Checkbox Attributes",columns:["Property","Description","Type","Default"],data:[{property:"autoFocus",description:"Set focus when component mounted.",type:"Boolean",default:"false"},{property:"checked",description:"Specifies whether the checkbox is selected.",type:"Boolean",default:"false"},{property:"defaultChecked",description:"Specifies the initial state: whether or not the checkbox is selected.",type:"Boolean",default:"false"},{property:"disabled",description:"Disable checkbox.",type:"Boolean",default:"false"},{property:"indeterminate",description:"Indeterminate checked state of checkbox.",type:"Boolean",default:"false"}]},{title:"CheckboxGroup Attributes",columns:["Property","Description","Type","Default"],data:[{property:"defaultValue",description:"Default selected value.",type:"String[]",default:"[]"},{property:"disabled",description:"Disable all checkboxes.",type:"Boolean",default:"false"},{property:"name",description:'The name property of all input[type="checkbox"] children',type:"String",default:"-"},{property:"options",description:"Specifies options.",type:'String[] | [{label:"",value:"",disabled:false}]',default:"[]"},{property:"value",description:"Used for setting the currently selected value.",type:"String[]",default:"[]"}]},{title:"Checkbox Events",columns:["Name","Description"],data:[{name:"change",description:"Triggers when the checkbox checked state changes."}]},{title:"CheckboxGroup Events",columns:["Name","Description"],data:[{name:"change",description:"Triggers when the checkbox group value changes"}]},{title:"CheckboxGroup Bind",columns:["Name","Description"],data:[{name:"focus",description:"Let's you bind to the input focus method"},{name:"blur",description:"Let's you bind to the input blur method"}]}]}class W extends e{constructor(e){super(),t(this,e,U,H,n,{})}}function z(e){let t,n,o;const a=new W({});return{c(){t=s(),n=c("div"),r(a.$$.fragment),this.h()},l(e){y('[data-svelte="svelte-cf1c3i"]',document.head).forEach(h),t=d(e),n=i(e,"DIV",{class:!0});var o=l(n);m(a.$$.fragment,o),o.forEach(h),this.h()},h(){document.title="Checkbox",v(n,"class","markdown api-container")},m(e,c){f(e,t,c),f(e,n,c),u(a,n,null),o=!0},p:D,i(e){o||(k(a.$$.fragment,e),o=!0)},o(e){C(a.$$.fragment,e),o=!1},d(e){e&&h(t),e&&h(n),x(a)}}}export default class extends e{constructor(e){super(),t(this,e,null,z,n,{})}}