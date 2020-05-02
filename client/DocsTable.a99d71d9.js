import{l as e,m as t,S as n,i as a,s as r,o as i,e as s,a as o,b as l,f as c,d as u,c as d,p as f,h as g,j as p,k as h,r as m,u as v,v as y,w as b,x as k,y as $,z as w,H as x,t as E,g as A,A as F,B as S,C,D as T,E as j,F as _,G as P,I as O,J as L,K as N,L as D,M as I,N as M,O as H,P as R,Q as z,R as B,n as q,T as Z}from"./client.d8862006.js";import{C as V,a as W}from"./index.113e7ac2.js";var G=e((function(e){var n=function(e){var t=/\blang(?:uage)?-([\w-]+)\b/i,n=0,a={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(t){return t instanceof r?new r(t.type,e(t.content),t.alias):Array.isArray(t)?t.map(e):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function e(t,n){var r,i,s=a.util.type(t);switch(n=n||{},s){case"Object":if(i=a.util.objId(t),n[i])return n[i];for(var o in r={},n[i]=r,t)t.hasOwnProperty(o)&&(r[o]=e(t[o],n));return r;case"Array":return i=a.util.objId(t),n[i]?n[i]:(r=[],n[i]=r,t.forEach((function(t,a){r[a]=e(t,n)})),r);default:return t}},getLanguage:function(e){for(;e&&!t.test(e.className);)e=e.parentElement;return e?(e.className.match(t)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(a){var e=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(a.stack)||[])[1];if(e){var t=document.getElementsByTagName("script");for(var n in t)if(t[n].src==e)return t[n]}return null}}},languages:{extend:function(e,t){var n=a.util.clone(a.languages[e]);for(var r in t)n[r]=t[r];return n},insertBefore:function(e,t,n,r){var i=(r=r||a.languages)[e],s={};for(var o in i)if(i.hasOwnProperty(o)){if(o==t)for(var l in n)n.hasOwnProperty(l)&&(s[l]=n[l]);n.hasOwnProperty(o)||(s[o]=i[o])}var c=r[e];return r[e]=s,a.languages.DFS(a.languages,(function(t,n){n===c&&t!=e&&(this[t]=s)})),s},DFS:function e(t,n,r,i){i=i||{};var s=a.util.objId;for(var o in t)if(t.hasOwnProperty(o)){n.call(t,o,t[o],r||o);var l=t[o],c=a.util.type(l);"Object"!==c||i[s(l)]?"Array"!==c||i[s(l)]||(i[s(l)]=!0,e(l,n,o,i)):(i[s(l)]=!0,e(l,n,null,i))}}},plugins:{},highlightAll:function(e,t){a.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var r={callback:n,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",r),r.elements=Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),a.hooks.run("before-all-elements-highlight",r);for(var i,s=0;i=r.elements[s++];)a.highlightElement(i,!0===t,r.callback)},highlightElement:function(n,r,i){var s=a.util.getLanguage(n),o=a.languages[s];n.className=n.className.replace(t,"").replace(/\s+/g," ")+" language-"+s;var l=n.parentNode;l&&"pre"===l.nodeName.toLowerCase()&&(l.className=l.className.replace(t,"").replace(/\s+/g," ")+" language-"+s);var c={element:n,language:s,grammar:o,code:n.textContent};function u(e){c.highlightedCode=e,a.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,a.hooks.run("after-highlight",c),a.hooks.run("complete",c),i&&i.call(c.element)}if(a.hooks.run("before-sanity-check",c),!c.code)return a.hooks.run("complete",c),void(i&&i.call(c.element));if(a.hooks.run("before-highlight",c),c.grammar)if(r&&e.Worker){var d=new Worker(a.filename);d.onmessage=function(e){u(e.data)},d.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else u(a.highlight(c.code,c.grammar,c.language));else u(a.util.encode(c.code))},highlight:function(e,t,n){var i={code:e,grammar:t,language:n};return a.hooks.run("before-tokenize",i),i.tokens=a.tokenize(i.code,i.grammar),a.hooks.run("after-tokenize",i),r.stringify(a.util.encode(i.tokens),i.language)},tokenize:function(e,t){var n=t.rest;if(n){for(var l in n)t[l]=n[l];delete t.rest}var c=new i;return s(c,c.head,e),function e(t,n,i,l,c,u,d){for(var f in i)if(i.hasOwnProperty(f)&&i[f]){var g=i[f];g=Array.isArray(g)?g:[g];for(var p=0;p<g.length;++p){if(d&&d==f+","+p)return;var h=g[p],m=h.inside,v=!!h.lookbehind,y=!!h.greedy,b=0,k=h.alias;if(y&&!h.pattern.global){var $=h.pattern.toString().match(/[imsuy]*$/)[0];h.pattern=RegExp(h.pattern.source,$+"g")}h=h.pattern||h;for(var w=l.next,x=c;w!==n.tail;x+=w.value.length,w=w.next){var E=w.value;if(n.length>t.length)return;if(!(E instanceof r)){var A=1;if(y&&w!=n.tail.prev){if(h.lastIndex=x,!(j=h.exec(t)))break;var F=j.index+(v&&j[1]?j[1].length:0),S=j.index+j[0].length,C=x;for(C+=w.value.length;F>=C;)w=w.next,C+=w.value.length;if(C-=w.value.length,x=C,w.value instanceof r)continue;for(var T=w;T!==n.tail&&(C<S||"string"==typeof T.value&&!T.prev.value.greedy);T=T.next)A++,C+=T.value.length;A--,E=t.slice(x,C),j.index-=x}else{h.lastIndex=0;var j=h.exec(E)}if(j){v&&(b=j[1]?j[1].length:0);F=j.index+b,j=j[0].slice(b),S=F+j.length;var _=E.slice(0,F),P=E.slice(S),O=w.prev;_&&(O=s(n,O,_),x+=_.length),o(n,O,A);var L=new r(f,m?a.tokenize(j,m):j,k,j,y);if(w=s(n,O,L),P&&s(n,w,P),A>1&&e(t,n,i,w.prev,x,!0,f+","+p),u)break}else if(u)break}}}}}(e,c,t,c.head,0),function(e){var t=[],n=e.head.next;for(;n!==e.tail;)t.push(n.value),n=n.next;return t}(c)},hooks:{all:{},add:function(e,t){var n=a.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=a.hooks.all[e];if(n&&n.length)for(var r,i=0;r=n[i++];)r(t)}},Token:r};function r(e,t,n,a,r){this.type=e,this.content=t,this.alias=n,this.length=0|(a||"").length,this.greedy=!!r}function i(){var e={value:null,prev:null,next:null},t={value:null,prev:e,next:null};e.next=t,this.head=e,this.tail=t,this.length=0}function s(e,t,n){var a=t.next,r={value:n,prev:t,next:a};return t.next=r,a.prev=r,e.length++,r}function o(e,t,n){for(var a=t.next,r=0;r<n&&a!==e.tail;r++)a=a.next;t.next=a,a.prev=t,e.length-=r}if(e.Prism=a,r.stringify=function e(t,n){if("string"==typeof t)return t;if(Array.isArray(t)){var r="";return t.forEach((function(t){r+=e(t,n)})),r}var i={type:t.type,content:e(t.content,n),tag:"span",classes:["token",t.type],attributes:{},language:n},s=t.alias;s&&(Array.isArray(s)?Array.prototype.push.apply(i.classes,s):i.classes.push(s)),a.hooks.run("wrap",i);var o="";for(var l in i.attributes)o+=" "+l+'="'+(i.attributes[l]||"").replace(/"/g,"&quot;")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+o+">"+i.content+"</"+i.tag+">"},!e.document)return e.addEventListener?(a.disableWorkerMessageHandler||e.addEventListener("message",(function(t){var n=JSON.parse(t.data),r=n.language,i=n.code,s=n.immediateClose;e.postMessage(a.highlight(i,a.languages[r],r)),s&&e.close()}),!1),a):a;var l=a.util.currentScript();function c(){a.manual||a.highlightAll()}if(l&&(a.filename=l.src,l.hasAttribute("data-manual")&&(a.manual=!0)),!a.manual){var u=document.readyState;"loading"===u||"interactive"===u&&l&&l.defer?document.addEventListener("DOMContentLoaded",c):window.requestAnimationFrame?window.requestAnimationFrame(c):window.setTimeout(c,16)}return a}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=n),void 0!==t&&(t.Prism=n),n.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:(?!<!--)[^"'\]]|"[^"]*"|'[^']*'|<!--[\s\S]*?-->)*\]\s*)?>/i,greedy:!0},cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))})),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(e,t){var a={};a["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[t]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;var r={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};r["language-"+t]={pattern:/[\s\S]+/,inside:n.languages[t]};var i={};i[e]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,(function(){return e})),"i"),lookbehind:!0,greedy:!0,inside:r},n.languages.insertBefore("markup","cdata",i)}}),n.languages.xml=n.languages.extend("markup",{}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,function(e){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\((?!\s*\))\s*)(?:[^()]|\((?:[^()]|\([^()]*\))*\))+?(?=\s*\))/,lookbehind:!0,alias:"selector"}}},url:{pattern:RegExp("url\\((?:"+t.source+"|[^\n\r()]*)\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/}},selector:RegExp("[^{}\\s](?:[^{};\"']|"+t.source+")*?(?=\\s*\\{)"),string:{pattern:t,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:n.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:e.languages.css}},alias:"language-css"}},n.tag))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,function:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/--|\+\+|\*\*=?|=>|&&|\|\||[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?[.?]?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*[\s\S]*?\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}}}),n.languages.markup&&n.languages.markup.tag.addInlined("script","javascript"),n.languages.js=n.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(e){e=e||document;var t={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(e.querySelectorAll("pre[data-src]")).forEach((function(e){if(!e.hasAttribute("data-src-loaded")){for(var a,r=e.getAttribute("data-src"),i=e,s=/\blang(?:uage)?-([\w-]+)\b/i;i&&!s.test(i.className);)i=i.parentNode;if(i&&(a=(e.className.match(s)||[,""])[1]),!a){var o=(r.match(/\.(\w+)$/)||[,""])[1];a=t[o]||o}var l=document.createElement("code");l.className="language-"+a,e.textContent="",l.textContent="Loading…",e.appendChild(l);var c=new XMLHttpRequest;c.open("GET",r,!0),c.onreadystatechange=function(){4==c.readyState&&(c.status<400&&c.responseText?(l.textContent=c.responseText,n.highlightElement(l),e.setAttribute("data-src-loaded","")):c.status>=400?l.textContent="✖ Error "+c.status+" while fetching file: "+c.statusText:l.textContent="✖ Error: File does not exist or is empty")},c.send(null)}}))},document.addEventListener("DOMContentLoaded",(function(){self.Prism.fileHighlight()})))}));const Y="(if|else if|await|then|catch|each|html|debug)";function J(e){let t;return{c(){this.h()},l(e){this.h()},h(){t=new x(e[2],null)},m(e,n){t.m(e,n)},p(e,n){4&n&&t.p(e[2])},d(e){e&&t.d()}}}function K(e){let t;return{c(){t=E(e[2])},l(n){t=A(n,e[2])},m(e,n){p(e,t,n)},p(e,n){4&n&&F(t,e[2])},d(e){e&&u(t)}}}function U(e){let t,n,a,r,k,$,w;const x=e[8].default,E=i(x,e,e[7],null);function A(e,t){return"none"===e[0]?K:J}let F=A(e),S=F(e);return{c(){t=s("code"),E&&E.c(),n=o(),a=s("pre"),r=s("code"),S.c(),this.h()},l(e){t=l(e,"CODE",{style:!0});var i=c(t);E&&E.l(i),i.forEach(u),n=d(e),a=l(e,"PRE",{class:!0,"command-line":!0,"data-output":!0});var s=c(a);r=l(s,"CODE",{class:!0});var o=c(r);S.l(o),o.forEach(u),s.forEach(u),this.h()},h(){f(t,"display","none"),g(r,"class",k="language-"+e[0]),g(a,"class",$="language-"+e[0]),g(a,"command-line",""),g(a,"data-output","2-17")},m(i,s){p(i,t,s),E&&E.m(t,null),e[9](t),p(i,n,s),p(i,a,s),h(a,r),S.m(r,null),w=!0},p(e,[t]){E&&E.p&&128&t&&E.p(m(x,e,e[7],null),v(x,e[7],t,null)),F===(F=A(e))&&S?S.p(e,t):(S.d(1),S=F(e),S&&(S.c(),S.m(r,null))),(!w||1&t&&k!==(k="language-"+e[0]))&&g(r,"class",k),(!w||1&t&&$!==($="language-"+e[0]))&&g(a,"class",$)},i(e){w||(y(E,e),w=!0)},o(e){b(E,e),w=!1},d(r){r&&u(t),E&&E.d(r),e[9](null),r&&u(n),r&&u(a),S.d()}}}Prism.languages.svelte=Prism.languages.extend("markup",{each:{pattern:new RegExp("{#each(?:(?:\\{(?:(?:\\{(?:[^{}])*\\})|(?:[^{}]))*\\})|(?:[^{}]))*}"),inside:{"language-javascript":[{pattern:/(as[\s\S]*)\([\s\S]*\)(?=\s*\})/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(as[\s]*)[\s\S]*(?=\s*)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(#each[\s]*)[\s\S]*(?=as)/,lookbehind:!0,inside:Prism.languages.javascript}],keyword:/#each|as/,punctuation:/{|}/}},block:{pattern:new RegExp("{[#:/@]/s"+Y+"(?:(?:\\{(?:(?:\\{(?:[^{}])*\\})|(?:[^{}]))*\\})|(?:[^{}]))*}"),inside:{punctuation:/^{|}$/,keyword:[new RegExp("[#:/@]"+Y+"( )*"),/as/,/then/],"language-javascript":{pattern:/[\s\S]*/,inside:Prism.languages.javascript}}},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?:"[^"]*"|'[^']*'|{[\s\S]+?}(?=[\s/>])))|(?=[\s/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"language-javascript":{pattern:/\{(?:(?:\{(?:(?:\{(?:[^{}])*\})|(?:[^{}]))*\})|(?:[^{}]))*\}/,inside:Prism.languages.javascript},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}],"language-javascript":{pattern:/{[\s\S]+}/,inside:Prism.languages.javascript}}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},"language-javascript":{pattern:/\{(?:(?:\{(?:(?:\{(?:[^{}])*\})|(?:[^{}]))*\})|(?:[^{}]))*\}/,lookbehind:!0,inside:Prism.languages.javascript}}),Prism.languages.svelte.tag.inside["attr-value"].inside.entity=Prism.languages.svelte.entity,Prism.hooks.add("wrap",e=>{"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Object.defineProperty(Prism.languages.svelte.tag,"addInlined",{value:function(e,t){const n={};n["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[t]},n.cdata=/^<!\[CDATA\[|\]\]>$/i;const a={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:n}};a["language-"+t]={pattern:/[\s\S]+/,inside:Prism.languages[t]};const r={};r[e]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,e),"i"),lookbehind:!0,greedy:!0,inside:a},Prism.languages.insertBefore("svelte","cdata",r)}}),Prism.languages.svelte.tag.addInlined("style","css"),Prism.languages.svelte.tag.addInlined("script","javascript");const X=e=>e,Q=G;G.highlightElement;function ee(e,t,n){let a,r,{language:i="javascript"}=t,{source:s=""}=t,{transform:o=(e=>e)}=t;function l(){const e=Q.languages[i];let t=s||a.textContent;t=X(t),t=o(t),n(2,r="none"===i?t:Q.highlight(t,e,i))}let{$$slots:c={},$$scope:u}=t;return e.$set=e=>{n(6,t=k(k({},t),$(e))),"language"in e&&n(0,i=e.language),"source"in e&&n(3,s=e.source),"transform"in e&&n(4,o=e.transform),"$$scope"in e&&n(7,u=e.$$scope)},e.$$.update=()=>{t&&(s||a)&&l()},t=$(t),[i,a,r,s,o,l,t,u,c,function(e){w[e?"unshift":"push"](()=>{n(1,a=e)})}]}class te extends n{constructor(e){super(),a(this,e,ee,U,r,{language:0,source:3,transform:4})}}var ne=S(e((function(e,t){
/*!
 * clipboard.js v2.0.6
 * https://clipboardjs.com/
 * 
 * Licensed MIT © Zeno Rocha
 */
var n;n=function(){return function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t){e.exports=function(e){var t;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName){var n=e.hasAttribute("readonly");n||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),n||e.removeAttribute("readonly"),t=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var a=window.getSelection(),r=document.createRange();r.selectNodeContents(e),a.removeAllRanges(),a.addRange(r),t=a.toString()}return t}},function(e,t){function n(){}n.prototype={on:function(e,t,n){var a=this.e||(this.e={});return(a[e]||(a[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){var a=this;function r(){a.off(e,r),t.apply(n,arguments)}return r._=t,this.on(e,r,n)},emit:function(e){for(var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),a=0,r=n.length;a<r;a++)n[a].fn.apply(n[a].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),a=n[e],r=[];if(a&&t)for(var i=0,s=a.length;i<s;i++)a[i].fn!==t&&a[i].fn._!==t&&r.push(a[i]);return r.length?n[e]=r:delete n[e],this}},e.exports=n,e.exports.TinyEmitter=n},function(e,t,n){var a=n(3),r=n(4);e.exports=function(e,t,n){if(!e&&!t&&!n)throw new Error("Missing required arguments");if(!a.string(t))throw new TypeError("Second argument must be a String");if(!a.fn(n))throw new TypeError("Third argument must be a Function");if(a.node(e))return function(e,t,n){return e.addEventListener(t,n),{destroy:function(){e.removeEventListener(t,n)}}}(e,t,n);if(a.nodeList(e))return function(e,t,n){return Array.prototype.forEach.call(e,(function(e){e.addEventListener(t,n)})),{destroy:function(){Array.prototype.forEach.call(e,(function(e){e.removeEventListener(t,n)}))}}}(e,t,n);if(a.string(e))return function(e,t,n){return r(document.body,e,t,n)}(e,t,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},function(e,t){t.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},t.nodeList=function(e){var n=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in e&&(0===e.length||t.node(e[0]))},t.string=function(e){return"string"==typeof e||e instanceof String},t.fn=function(e){return"[object Function]"===Object.prototype.toString.call(e)}},function(e,t,n){var a=n(5);function r(e,t,n,a,r){var s=i.apply(this,arguments);return e.addEventListener(n,s,r),{destroy:function(){e.removeEventListener(n,s,r)}}}function i(e,t,n,r){return function(n){n.delegateTarget=a(n.target,t),n.delegateTarget&&r.call(e,n)}}e.exports=function(e,t,n,a,i){return"function"==typeof e.addEventListener?r.apply(null,arguments):"function"==typeof n?r.bind(null,document).apply(null,arguments):("string"==typeof e&&(e=document.querySelectorAll(e)),Array.prototype.map.call(e,(function(e){return r(e,t,n,a,i)})))}},function(e,t){if("undefined"!=typeof Element&&!Element.prototype.matches){var n=Element.prototype;n.matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}e.exports=function(e,t){for(;e&&9!==e.nodeType;){if("function"==typeof e.matches&&e.matches(t))return e;e=e.parentNode}}},function(e,t,n){n.r(t);var a=n(0),r=n.n(a),i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.resolveOptions(t),this.initSelection()}return s(e,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var e=this,t="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return e.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[t?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=r()(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=r()(this.target),this.copyText()}},{key:"copyText",value:function(){var e=void 0;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(e){this.emitter.emit(e?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(e){if(void 0!==e){if(!e||"object"!==(void 0===e?"undefined":i(e))||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=e}},get:function(){return this._target}}]),e}(),l=n(1),c=n.n(l),u=n(2),d=n.n(u),f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),p=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return a.resolveOptions(n),a.listenClick(e),a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),g(t,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===f(e.container)?e.container:document.body}},{key:"listenClick",value:function(e){var t=this;this.listener=d()(e,"click",(function(e){return t.onClick(e)}))}},{key:"onClick",value:function(e){var t=e.delegateTarget||e.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new o({action:this.action(t),target:this.target(t),text:this.text(t),container:this.container,trigger:t,emitter:this})}},{key:"defaultAction",value:function(e){return h("action",e)}},{key:"defaultTarget",value:function(e){var t=h("target",e);if(t)return document.querySelector(t)}},{key:"defaultText",value:function(e){return h("text",e)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],t="string"==typeof e?[e]:e,n=!!document.queryCommandSupported;return t.forEach((function(e){n=n&&!!document.queryCommandSupported(e)})),n}}]),t}(c.a);function h(e,t){var n="data-clipboard-"+e;if(t.hasAttribute(n))return t.getAttribute(n)}t.default=p}]).default},e.exports=n()})));const ae=e=>({}),re=e=>({});function ie(e){let t,n,a;var r=e[7]?I:D;if(r)var i=new r({props:{width:"1.5em",height:"1.5em"}});return{c(){t=s("div"),i&&C(i.$$.fragment),this.h()},l(e){t=l(e,"DIV",{class:!0,"data-clipboard-text":!0});var n=c(t);i&&T(i.$$.fragment,n),n.forEach(u),this.h()},h(){g(t,"class","copy-icon clipboard svelte-txr1fp"),g(t,"data-clipboard-text",e[3]),H(t,"green-icon",e[7])},m(r,s,o){p(r,t,s),i&&j(i,t,null),n=!0,o&&R(a),a=[z(t,"mouseenter",e[9]),z(t,"mouseleave",e[10])]},p(e,a){if(r!==(r=e[7]?I:D)){if(i){_();const e=i;b(e.$$.fragment,1,0,()=>{P(e,1)}),O()}r?(i=new r({props:{width:"1.5em",height:"1.5em"}}),C(i.$$.fragment),y(i.$$.fragment,1),j(i,t,null)):i=null}(!n||8&a)&&g(t,"data-clipboard-text",e[3]),128&a&&H(t,"green-icon",e[7])},i(e){n||(i&&y(i.$$.fragment,e),n=!0)},o(e){i&&b(i.$$.fragment,e),n=!1},d(e){e&&u(t),i&&P(i),R(a)}}}function se(e){let t,n,a,r,i,m,v,k,$;const w=new M({props:{width:"1.5em",height:"1.5em"}});let x=e[6]&&ie(e);return{c(){t=s("div"),n=s("div"),a=s("div"),C(w.$$.fragment),r=o(),i=s("span"),m=E(e[5]),v=o(),x&&x.c(),this.h()},l(s){t=l(s,"DIV",{slot:!0,class:!0});var o=c(t);n=l(o,"DIV",{class:!0});var f=c(n);a=l(f,"DIV",{class:!0});var g=c(a);T(w.$$.fragment,g),r=d(g),i=l(g,"SPAN",{style:!0});var p=c(i);m=A(p,e[5]),p.forEach(u),g.forEach(u),f.forEach(u),v=d(o),x&&x.l(o),o.forEach(u),this.h()},h(){f(i,"margin","2px 0 0 .5rem"),g(a,"class","toggle-code svelte-txr1fp"),g(n,"class","toggle-code-wrapper svelte-txr1fp"),g(t,"slot","header"),g(t,"class","demo-panel-header svelte-txr1fp")},m(s,o,l){p(s,t,o),h(t,n),h(n,a),j(w,a,null),h(a,r),h(a,i),h(i,m),h(t,v),x&&x.m(t,null),k=!0,l&&$(),$=z(n,"click",e[8])},p(e,n){(!k||32&n)&&F(m,e[5]),e[6]?x?(x.p(e,n),y(x,1)):(x=ie(e),x.c(),y(x,1),x.m(t,null)):x&&(_(),b(x,1,1,()=>{x=null}),O())},i(e){k||(y(w.$$.fragment,e),y(x),k=!0)},o(e){b(w.$$.fragment,e),b(x),k=!1},d(e){e&&u(t),P(w),x&&x.d(),$()}}}function oe(e){let t,n;const a=new te({props:{language:"svelte",source:e[3]}});return{c(){t=o(),C(a.$$.fragment)},l(e){t=d(e),T(a.$$.fragment,e)},m(e,r){p(e,t,r),j(a,e,r),n=!0},p(e,t){const n={};8&t&&(n.source=e[3]),a.$set(n)},i(e){n||(y(a.$$.fragment,e),n=!0)},o(e){b(a.$$.fragment,e),n=!1},d(e){e&&u(t),P(a,e)}}}function le(e){let t;const n=new W({props:{key:"1",hideArrow:!0,class:"demo-code-collapse-panel",$$slots:{default:[oe],header:[se]},$$scope:{ctx:e}}});return{c(){C(n.$$.fragment)},l(e){T(n.$$.fragment,e)},m(e,a){j(n,e,a),t=!0},p(e,t){const a={};65768&t&&(a.$$scope={dirty:t,ctx:e}),n.$set(a)},i(e){t||(y(n.$$.fragment,e),t=!0)},o(e){b(n.$$.fragment,e),t=!1},d(e){P(n,e)}}}function ce(e){let t,n,a,r,f,k,$,w,x;const S=e[15].description,L=i(S,e,e[16],re);var N=e[2];if(N)var D=new N({});const I=new V({props:{activeKey:e[4],class:"demo-code-collapse",$$slots:{default:[le]},$$scope:{ctx:e}}});return{c(){t=s("div"),n=s("h3"),a=E(e[1]),r=o(),L&&L.c(),f=o(),k=s("section"),$=s("section"),D&&C(D.$$.fragment),w=o(),C(I.$$.fragment),this.h()},l(i){t=l(i,"DIV",{id:!0});var s=c(t);n=l(s,"H3",{});var o=c(n);a=A(o,e[1]),o.forEach(u),r=d(s),L&&L.l(s),f=d(s),k=l(s,"SECTION",{class:!0});var g=c(k);$=l(g,"SECTION",{class:!0});var p=c($);D&&T(D.$$.fragment,p),p.forEach(u),w=d(g),T(I.$$.fragment,g),g.forEach(u),s.forEach(u),this.h()},h(){g($,"class","code-box-demo"),g(k,"class","code-box"),g(t,"id",e[0])},m(e,i){p(e,t,i),h(t,n),h(n,a),h(t,r),L&&L.m(t,null),h(t,f),h(t,k),h(k,$),D&&j(D,$,null),h(k,w),j(I,k,null),x=!0},p(e,[n]){if((!x||2&n)&&F(a,e[1]),L&&L.p&&65536&n&&L.p(m(S,e,e[16],re),v(S,e[16],n,ae)),N!==(N=e[2])){if(D){_();const e=D;b(e.$$.fragment,1,0,()=>{P(e,1)}),O()}N?(D=new N({}),C(D.$$.fragment),y(D.$$.fragment,1),j(D,$,null)):D=null}const r={};16&n&&(r.activeKey=e[4]),65768&n&&(r.$$scope={dirty:n,ctx:e}),I.$set(r),(!x||1&n)&&g(t,"id",e[0])},i(e){x||(y(L,e),D&&y(D.$$.fragment,e),y(I.$$.fragment,e),x=!0)},o(e){b(L,e),D&&b(D.$$.fragment,e),b(I.$$.fragment,e),x=!1},d(e){e&&u(t),L&&L.d(e),D&&P(D),P(I)}}}function ue(e,t,n){let a,{id:r}=t,{title:i}=t,{demoComponent:s}=t,{demoCode:o}=t,l=[],c="View Code",u=!1,d=!1,f=!1,g=D;function p(){n(7,d=!0)}L(()=>{a=new ne(".clipboard"),n(6,u=ne.isSupported()),a.on("success",p)}),N(()=>{a&&a.destroy()});let{$$slots:h={},$$scope:m}=t;return e.$set=e=>{"id"in e&&n(0,r=e.id),"title"in e&&n(1,i=e.title),"demoComponent"in e&&n(2,s=e.demoComponent),"demoCode"in e&&n(3,o=e.demoCode),"$$scope"in e&&n(16,m=e.$$scope)},e.$$.update=()=>{4224&e.$$.dirty&&(g=d&&f?I:D),16&e.$$.dirty&&n(5,c=l.includes("1")?"Hide Code":"View Code")},[r,i,s,o,l,c,u,d,function(){n(4,l=l.includes("1")?[]:["1"])},function(){n(12,f=!0)},function(){n(7,d=!1),n(12,f=!1)},a,f,g,p,h,m]}class de extends n{constructor(e){super(),a(this,e,ue,ce,r,{id:0,title:1,demoComponent:2,demoCode:3})}}function fe(e,t,n){const a=e.slice();return a[6]=t[n],a}function ge(e,t,n){const a=e.slice();return a[3]=t[n],a}function pe(e,t,n){const a=e.slice();return a[6]=t[n],a}function he(e,t){let n,a,r=t[6]+"";return{key:e,first:null,c(){n=s("th"),a=E(r),this.h()},l(e){n=l(e,"TH",{});var t=c(n);a=A(t,r),t.forEach(u),this.h()},h(){this.first=n},m(e,t){p(e,n,t),h(n,a)},p(e,t){2&t&&r!==(r=e[6]+"")&&F(a,r)},d(e){e&&u(n)}}}function me(e,t){let n,a,r=t[3][t[6].toLowerCase()]+"";return{key:e,first:null,c(){n=s("td"),a=E(r),this.h()},l(e){n=l(e,"TD",{});var t=c(n);a=A(t,r),t.forEach(u),this.h()},h(){this.first=n},m(e,t){p(e,n,t),h(n,a)},p(e,t){6&t&&r!==(r=e[3][e[6].toLowerCase()]+"")&&F(a,r)},d(e){e&&u(n)}}}function ve(e,t){let n,a,r=[],i=new Map,f=t[1];const g=e=>`${e[6].toLowerCase()}-${e[3][e[6].toLowerCase()]}`;for(let e=0;e<f.length;e+=1){let n=fe(t,f,e),a=g(n);i.set(a,r[e]=me(a,n))}return{key:e,first:null,c(){n=s("tr");for(let e=0;e<r.length;e+=1)r[e].c();a=o(),this.h()},l(e){n=l(e,"TR",{});var t=c(n);for(let e=0;e<r.length;e+=1)r[e].l(t);a=d(t),t.forEach(u),this.h()},h(){this.first=n},m(e,t){p(e,n,t);for(let e=0;e<r.length;e+=1)r[e].m(n,null);h(n,a)},p(e,t){if(6&t){const s=e[1];r=B(r,t,g,1,e,s,i,n,Z,me,a,fe)}},d(e){e&&u(n);for(let e=0;e<r.length;e+=1)r[e].d()}}}function ye(e){let t,n,a,r,i,f,m,v,y=[],b=new Map,k=[],$=new Map,w=e[1];const x=e=>e[6];for(let t=0;t<w.length;t+=1){let n=pe(e,w,t),a=x(n);b.set(a,y[t]=he(a,n))}let S=e[2];const C=e=>`${e[1][0].toLowerCase()}-${e[3][e[1][0].toLowerCase()]}`;for(let t=0;t<S.length;t+=1){let n=ge(e,S,t),a=C(n);$.set(a,k[t]=ve(a,n))}return{c(){t=s("h3"),n=E(e[0]),a=o(),r=s("table"),i=s("thead"),f=s("tr");for(let e=0;e<y.length;e+=1)y[e].c();m=o(),v=s("tbody");for(let e=0;e<k.length;e+=1)k[e].c();this.h()},l(s){t=l(s,"H3",{});var o=c(t);n=A(o,e[0]),o.forEach(u),a=d(s),r=l(s,"TABLE",{class:!0});var g=c(r);i=l(g,"THEAD",{});var p=c(i);f=l(p,"TR",{});var h=c(f);for(let e=0;e<y.length;e+=1)y[e].l(h);h.forEach(u),p.forEach(u),m=d(g),v=l(g,"TBODY",{});var b=c(v);for(let e=0;e<k.length;e+=1)k[e].l(b);b.forEach(u),g.forEach(u),this.h()},h(){g(r,"class","docs-table")},m(e,s){p(e,t,s),h(t,n),p(e,a,s),p(e,r,s),h(r,i),h(i,f);for(let e=0;e<y.length;e+=1)y[e].m(f,null);h(r,m),h(r,v);for(let e=0;e<k.length;e+=1)k[e].m(v,null)},p(e,[t]){if(1&t&&F(n,e[0]),2&t){const n=e[1];y=B(y,t,x,1,e,n,b,f,Z,he,null,pe)}if(6&t){const n=e[2];k=B(k,t,C,1,e,n,$,v,Z,ve,null,ge)}},i:q,o:q,d(e){e&&u(t),e&&u(a),e&&u(r);for(let e=0;e<y.length;e+=1)y[e].d();for(let e=0;e<k.length;e+=1)k[e].d()}}}function be(e,t,n){let{title:a="Attributes"}=t,{columns:r=["Property","Description","Type","Default"]}=t,{data:i}=t;return e.$set=e=>{"title"in e&&n(0,a=e.title),"columns"in e&&n(1,r=e.columns),"data"in e&&n(2,i=e.data)},[a,r,i]}class ke extends n{constructor(e){super(),a(this,e,be,ye,r,{title:0,columns:1,data:2})}}export{ke as D,de as E};
