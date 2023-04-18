"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[814],{5005:function(e,t,r){r.d(t,{Z:function(){return b}});var n=r(7462),o=r(4316),a=r(7294);var i=function(e,t){const r=(0,a.useRef)(null),n=(0,a.useRef)(null),{0:o,1:i}=(0,a.useState)(1),s=(0,a.useMemo)((()=>t.filter((t=>{let{node:{frontmatter:{categories:r}}}=t;return"All"===e||r.includes(e)}))),[e]);return(0,a.useEffect)((()=>{n.current=new IntersectionObserver(((e,t)=>{e[0].isIntersecting&&(i((e=>e+1)),t.unobserve(e[0].target))}))}),[]),(0,a.useEffect)((()=>i(1)),[e]),(0,a.useEffect)((()=>{10*o>=s.length||null===r.current||0===r.current.children.length||null===n.current||n.current.observe(r.current.children[r.current.children.length-1])}),[o,e]),{containerRef:r,postList:s.slice(0,10*o)}},s=r(1883),l=r(8032),c=r(917);const p=(0,o.Z)(s.Link,{target:"e1eg5kak7"})({name:"92gcjj",styles:"display:flex;flex-direction:column;border-radius:5px;box-shadow:rgba(0, 0, 0, 0.1) 0px 4px 16px 0px;transition:0.3s box-shadow;transform:translateY(0);transition:transform 0.3s ease-out;cursor:pointer;&:hover{box-shadow:rgba(0, 0, 0, 0.2) 0px 7px 16px 0px;transform:translateY(-7px);transition-delay:0s;}"}),u=(0,o.Z)(l.G,{target:"e1eg5kak6"})({name:"iypyoi",styles:"width:100%;height:200px;border-radius:5px 5px 0 0"}),d=(0,o.Z)("div",{target:"e1eg5kak5"})({name:"1fget0s",styles:"flex:1;display:flex;flex-direction:column;padding:15px;background-color:var(--element);border-radius:5px"}),f=(0,o.Z)("div",{target:"e1eg5kak4"})({name:"kw2b4d",styles:"display:-webkit-box;overflow:hidden;margin-bottom:3px;text-overflow:ellipsis;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:20px;font-weight:700"}),m=(0,o.Z)("div",{target:"e1eg5kak3"})({name:"xm5j9w",styles:"font-size:14px;font-weight:400;opacity:0.7"}),g=(0,o.Z)("div",{target:"e1eg5kak2"})({name:"1bobky6",styles:"display:flex;flex-wrap:wrap;margin-top:10px;margin:10px -5px"}),y=(0,o.Z)("div",{target:"e1eg5kak1"})({name:"1bzcbme",styles:"margin:2.5px 5px;padding:3px 5px;border-radius:3px;background:black;font-size:14px;font-weight:700;color:white"}),x=(0,o.Z)("div",{target:"e1eg5kak0"})({name:"1wehmme",styles:"display:-webkit-box;overflow:hidden;margin-top:auto;text-overflow:ellipsis;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:16px;opacity:0.8"});var h=function(e){let{title:t,date:r,categories:n,summary:o,thumbnail:{childImageSharp:{gatsbyImageData:a}},link:i}=e;return(0,c.tZ)(p,{to:i},(0,c.tZ)(u,{image:a,alt:"Post Item Image"}),(0,c.tZ)(d,null,(0,c.tZ)(f,null,t),(0,c.tZ)(m,null,r),(0,c.tZ)(g,null,n.map((e=>(0,c.tZ)(y,{key:e},e)))),(0,c.tZ)(x,null,o)))};const w=(0,o.Z)("div",{target:"es8e92y0"})({name:"13asz48",styles:"display:grid;grid-template-columns:1fr 1fr 1fr 1fr 1fr;width:100%;max-width:1728px;grid-gap:30px;margin:0 auto;padding:40px 0 100px;@media (max-width: 1919px){grid-template-columns:1fr 1fr 1fr 1fr;width:1376px;}@media (max-width: 1440px){grid-template-columns:1fr 1fr 1fr;width:1024px;}@media (max-width: 1056px){grid-template-columns:1fr 1fr;width:calc(100% - 2rem);}@media (max-width: 768px){grid-template-columns:1fr;width:calc(100% - 2rem);}"});var b=function(e){let{selectedCategory:t,posts:r}=e;const{containerRef:o,postList:a}=i(t,r);return(0,c.tZ)(w,{ref:o},a.map((e=>{let{node:{id:t,fields:{slug:r},frontmatter:o}}=e;return(0,c.tZ)(h,(0,n.Z)({},o,{link:r,key:t}))})))}},9941:function(e,t,r){r.d(t,{Z:function(){return k}});var n=r(4316),o=r(7294),a=r(1883),i=r(917);const s=(0,n.Z)("div",{target:"e1kn8q5k1"})({name:"136wo76",styles:"display:flex;flex-direction:column;flex-wrap:wrap;width:192px;position:absolute;top:45px;left:-100px;background-color:white;box-shadow:rgba(0, 0, 0, 0.1) 0px 0px 8px 0px;/* @media (max-width: 768px) {\n    width: 100%;\n    margin-top: 50px;\n    padding: 0 20px;\n  } */"}),l=(0,n.Z)((e=>{let{active:t,...r}=e;return(0,i.tZ)(a.Link,r)}),{target:"e1kn8q5k0"})("display:flex;align-items:center;min-width:auto;height:40px;background-color:var(--element);padding:0.75rem 1rem;font-size:0.875rem;font-weight:",(e=>{let{active:t}=e;return t?"600":"400"}),";color:",(e=>{let{active:t}=e;return t?"var(--velog)":"#6e6d7a"}),";cursor:pointer;&:last-of-type{margin-right:0;}&:hover{background-color:var(--catebg);}");var c=function(e){let{selectedCategory:t,categoryList:r}=e;return(0,i.tZ)(s,null,Object.entries(r).map((e=>{let[r,n]=e;return(0,i.tZ)(l,{to:("최신"===window.sessionStorage.getItem("tense")?"/recent":"")+"/?category="+r,active:r===t,key:r},r," (",n,")")})))},p=r(9899),u=r(4480);const d=(0,n.Z)("div",{target:"egdq25k8"})({name:"1vrzpln",styles:"position:relative;margin-top:1.5rem!important;display:flex;justify-content:space-between;align-items:center;width:100%;max-width:1728px;height:48px;margin:0 auto;@media (max-width: 1919px){width:1376px;}@media (max-width: 1440px){width:1024px;}@media (max-width: 1056px){width:calc(100% - 2rem);}@media (max-width: 768px){width:calc(100% - 2rem);}"}),f=(0,n.Z)("div",{target:"egdq25k7"})({name:"1x4vf4z",styles:"width:224px;height:48px;position:relative;display:flex;align-items:center"}),m=(0,n.Z)("div",{target:"egdq25k6"})({name:"1ncd12y",styles:"width:7rem;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;font-size:1.125rem;text-decoration:none;height:3rem;cursor:pointer"}),g=(0,n.Z)("div",{target:"egdq25k5"})({name:"b793x4",styles:"margin-top:0.4rem;margin-right:0.5rem;font-size:1.5rem"}),y=(0,n.Z)("div",{target:"egdq25k4"})({name:"1yqomfo",styles:"display:flex;justify-content:center;align-items:center;width:24px;height:24px"}),x=(0,n.Z)("div",{target:"egdq25k3"})({name:"pl96zj",styles:"background-color:var(--element);color:var(--category);height:2rem;width:6rem;border-radius:4px;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between;padding-left:0.5rem;padding-right:0.5rem;font-weight:600;font-size:1.5rem;margin-left:-5px;box-shadow:rgba(0, 0, 0, 0.08) 0px 0px 4px;cursor:pointer;@media (max-width: 1024px){width:5.25rem;font-size:1.5rem;}"}),h=(0,n.Z)("span",{target:"egdq25k2"})({name:"94cqpw",styles:"font-size:0.875rem;@media (max-width: 1024px){font-size:0.75rem;}"}),w=(0,n.Z)("div",{target:"egdq25k1"})({name:"13d5orm",styles:"position:absolute;z-index:1;top:8px;left:230px"}),b=(0,n.Z)("div",{target:"egdq25k0"})({name:"gyrhut",styles:"position:absolute;width:50%;height:2px;bottom:0px;background:var(--border1);transition:left 0.3s ease-out"});function k(){const[e,t]=(0,u.FV)(p.Uv),r=e=>{t(e),"undefined"!=typeof window&&sessionStorage.setItem("tense","트렌딩"===e?"트렌딩":"최신")};(0,o.useEffect)((()=>{const e=sessionStorage.getItem("tense");"트렌딩"!==e&&"최신"!==e||t(e),sessionStorage.getItem("category")&&sessionStorage.setItem("category","close")}),[]);const n=(0,u.sJ)(p.sq),a=(0,u.sJ)(p.p2);console.log(a),console.log(n);const[s,l]=(0,u.FV)(p.RJ);return(0,i.tZ)(d,null,(0,i.tZ)(f,null,(0,i.tZ)("a",{href:"/"},(0,i.tZ)(m,{className:"트렌딩"===e?"active":"",onClick:()=>r("트렌딩"),style:{color:"트렌딩"===e?"var( --tenseactiv)":"var( --tense)"}},(0,i.tZ)(g,null,(0,i.tZ)("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 24 24",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg"},(0,i.tZ)("path",{d:"M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"}))),(0,i.tZ)("span",null,"트렌딩"))),(0,i.tZ)("a",{href:"/recent"},(0,i.tZ)(m,{className:"최신"===e?"active":"",onClick:()=>r("최신"),style:{color:"최신"===e?"var( --tenseactiv)":"var( --tense)"}},(0,i.tZ)(g,null,(0,i.tZ)("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 24 24",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg"},(0,i.tZ)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"}))),(0,i.tZ)("span",null,"최신"))),(0,i.tZ)(b,{style:{left:"트렌딩"===e?"0%":"50%"}}),(0,i.tZ)(w,{onClick:()=>{l("open"===s?"close":"open")}},(0,i.tZ)(x,null,(0,i.tZ)(h,null,String(n)),(0,i.tZ)("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 24 24",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg"},(0,i.tZ)("path",{d:"M7 10l5 5 5-5z"}))),"open"===s&&(0,i.tZ)(c,{categoryList:a,selectedCategory:n}))),(0,i.tZ)(y,null,(0,i.tZ)("svg",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 24 24",height:"1.5em",width:"1.5em",xmlns:"http://www.w3.org/2000/svg"},(0,i.tZ)("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}))))}},9899:function(e,t,r){r.d(t,{RJ:function(){return i},Uv:function(){return s},p2:function(){return a},sq:function(){return o}});var n=r(4480);const o=(0,n.cn)({key:"selectedCategoryState",default:"All"}),a=(0,n.cn)({key:"categoryListState",default:{}}),i=(0,n.cn)({key:"categoryState",default:"close"}),s=(0,n.cn)({key:"activeTabState",default:"트렌딩"})},6685:function(e,t,r){r.d(t,{Z:function(){return I}});var n={};r.r(n),r.d(n,{exclude:function(){return F},extract:function(){return k},parse:function(){return v},parseUrl:function(){return j},pick:function(){return S},stringify:function(){return Z},stringifyUrl:function(){return C}});const o="%[a-f0-9]{2}",a=new RegExp("("+o+")|([^%]+?)","gi"),i=new RegExp("("+o+")+","gi");function s(e,t){try{return[decodeURIComponent(e.join(""))]}catch{}if(1===e.length)return e;t=t||1;const r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],s(r),s(n))}function l(e){try{return decodeURIComponent(e)}catch{let t=e.match(a)||[];for(let r=1;r<t.length;r++)t=(e=s(t,r).join("")).match(a)||[];return e}}function c(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return decodeURIComponent(e)}catch{return function(e){const t={"%FE%FF":"��","%FF%FE":"��"};let r=i.exec(e);for(;r;){try{t[r[0]]=decodeURIComponent(r[0])}catch{const e=l(r[0]);e!==r[0]&&(t[r[0]]=e)}r=i.exec(e)}t["%C2"]="�";const n=Object.keys(t);for(const o of n)e=e.replace(new RegExp(o,"g"),t[o]);return e}(e)}}function p(e,t){if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===e||""===t)return[];const r=e.indexOf(t);return-1===r?[]:[e.slice(0,r),e.slice(r+t.length)]}function u(e,t){const r={};if(Array.isArray(t))for(const n of t){const t=Object.getOwnPropertyDescriptor(e,n);t?.enumerable&&Object.defineProperty(r,n,t)}else for(const n of Reflect.ownKeys(e)){const o=Object.getOwnPropertyDescriptor(e,n);if(o.enumerable){t(n,e[n],e)&&Object.defineProperty(r,n,o)}}return r}const d=e=>null==e,f=e=>encodeURIComponent(e).replace(/[!'()*]/g,(e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`)),m=Symbol("encodeFragmentIdentifier");function g(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function y(e,t){return t.encode?t.strict?f(e):encodeURIComponent(e):e}function x(e,t){return t.decode?c(e):e}function h(e){return Array.isArray(e)?e.sort():"object"==typeof e?h(Object.keys(e)).sort(((e,t)=>Number(e)-Number(t))).map((t=>e[t])):e}function w(e){const t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function b(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function k(e){const t=(e=w(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function v(e,t){g((t={decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1,...t}).arrayFormatSeparator);const r=function(e){let t;switch(e.arrayFormat){case"index":return(e,r,n)=>{t=/\[(\d*)]$/.exec(e),e=e.replace(/\[\d*]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return(e,r,n)=>{t=/(\[])$/.exec(e),e=e.replace(/\[]$/,""),t?void 0!==n[e]?n[e]=[...n[e],r]:n[e]=[r]:n[e]=r};case"colon-list-separator":return(e,r,n)=>{t=/(:list)$/.exec(e),e=e.replace(/:list$/,""),t?void 0!==n[e]?n[e]=[...n[e],r]:n[e]=[r]:n[e]=r};case"comma":case"separator":return(t,r,n)=>{const o="string"==typeof r&&r.includes(e.arrayFormatSeparator),a="string"==typeof r&&!o&&x(r,e).includes(e.arrayFormatSeparator);r=a?x(r,e):r;const i=o||a?r.split(e.arrayFormatSeparator).map((t=>x(t,e))):null===r?r:x(r,e);n[t]=i};case"bracket-separator":return(t,r,n)=>{const o=/(\[])$/.test(t);if(t=t.replace(/\[]$/,""),!o)return void(n[t]=r?x(r,e):r);const a=null===r?[]:r.split(e.arrayFormatSeparator).map((t=>x(t,e)));void 0!==n[t]?n[t]=[...n[t],...a]:n[t]=a};default:return(e,t,r)=>{void 0!==r[e]?r[e]=[...[r[e]].flat(),t]:r[e]=t}}}(t),n=Object.create(null);if("string"!=typeof e)return n;if(!(e=e.trim().replace(/^[?#&]/,"")))return n;for(const o of e.split("&")){if(""===o)continue;const e=t.decode?o.replace(/\+/g," "):o;let[a,i]=p(e,"=");void 0===a&&(a=e),i=void 0===i?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?i:x(i,t),r(x(a,t),i,n)}for(const[o,a]of Object.entries(n))if("object"==typeof a&&null!==a)for(const[e,r]of Object.entries(a))a[e]=b(r,t);else n[o]=b(a,t);return!1===t.sort?n:(!0===t.sort?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce(((e,t)=>{const r=n[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[t]=h(r):e[t]=r,e}),Object.create(null))}function Z(e,t){if(!e)return"";g((t={encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:",",...t}).arrayFormatSeparator);const r=r=>t.skipNull&&d(e[r])||t.skipEmptyString&&""===e[r],n=function(e){switch(e.arrayFormat){case"index":return t=>(r,n)=>{const o=r.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[y(t,e),"[",o,"]"].join("")]:[...r,[y(t,e),"[",y(o,e),"]=",y(n,e)].join("")]};case"bracket":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[y(t,e),"[]"].join("")]:[...r,[y(t,e),"[]=",y(n,e)].join("")];case"colon-list-separator":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[y(t,e),":list="].join("")]:[...r,[y(t,e),":list=",y(n,e)].join("")];case"comma":case"separator":case"bracket-separator":{const t="bracket-separator"===e.arrayFormat?"[]=":"=";return r=>(n,o)=>void 0===o||e.skipNull&&null===o||e.skipEmptyString&&""===o?n:(o=null===o?"":o,0===n.length?[[y(r,e),t,y(o,e)].join("")]:[[n,y(o,e)].join(e.arrayFormatSeparator)])}default:return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,y(t,e)]:[...r,[y(t,e),"=",y(n,e)].join("")]}}(t),o={};for(const[i,s]of Object.entries(e))r(i)||(o[i]=s);const a=Object.keys(o);return!1!==t.sort&&a.sort(t.sort),a.map((r=>{const o=e[r];return void 0===o?"":null===o?y(r,t):Array.isArray(o)?0===o.length&&"bracket-separator"===t.arrayFormat?y(r,t)+"[]":o.reduce(n(r),[]).join("&"):y(r,t)+"="+y(o,t)})).filter((e=>e.length>0)).join("&")}function j(e,t){t={decode:!0,...t};let[r,n]=p(e,"#");return void 0===r&&(r=e),{url:r?.split("?")?.[0]??"",query:v(k(e),t),...t&&t.parseFragmentIdentifier&&n?{fragmentIdentifier:x(n,t)}:{}}}function C(e,t){t={encode:!0,strict:!0,[m]:!0,...t};const r=w(e.url).split("?")[0]||"";let n=Z({...v(k(e.url),{sort:!1}),...e.query},t);n&&(n=`?${n}`);let o=function(e){let t="";const r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(e.url);if(e.fragmentIdentifier){const n=new URL(r);n.hash=e.fragmentIdentifier,o=t[m]?n.hash:`#${e.fragmentIdentifier}`}return`${r}${n}${o}`}function S(e,t,r){r={parseFragmentIdentifier:!0,[m]:!1,...r};const{url:n,query:o,fragmentIdentifier:a}=j(e,r);return C({url:n,query:u(o,t),fragmentIdentifier:a},r)}function F(e,t,r){return S(e,Array.isArray(t)?e=>!t.includes(e):(e,r)=>!t(e,r),r)}var I=n}}]);
//# sourceMappingURL=0c4cdc70b932cf3bbeb74bf4a34299c3d3bc0c27-c82833fc7c49e202c8ca.js.map