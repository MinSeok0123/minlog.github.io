"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[470],{9297:function(e,t,o){var r=o(4316),i=o(7294),n=o(640),a=o.n(n),l=o(6042),d=o(917);const s=(0,r.Z)("div",{target:"e1ijh0y18"})({name:"1zgj01",styles:"display:flex;flex-direction:column;width:768px;margin:0 auto;padding:10px 0;word-break:break-all;line-height:1.8;font-size:16px;font-weight:400;p{padding:3px 0;}img{display:block;margin:3rem auto;max-width:100%;}h1,h2,h3{font-weight:800;margin-bottom:30px;@media (max-width: 768px){margin-bottom:10px;}}*+h1,*+h2,*+h3{margin-top:80px;@media (max-width: 768px){margin-top:30px;}}hr+h1,hr+h2,hr+h3{margin-top:0;}h1{font-size:30px;}h2{font-size:25px;}h3{font-size:20px;}blockquote{margin:2rem 0px;border-left:4px solid var(--velog);border-top-right-radius:4px;border-bottom-right-radius:4px;background:var(--bg-element2);padding:1rem 1rem 1rem 2rem;color:var(--text1);}ol,ul{margin-left:20px;padding:30px 0;}hr{border:1px solid var(--hr);margin:100px 0;}a{color:#4263eb;text-decoration:underline;}pre[class*='language-']{margin:30px 0;padding:15px;font-size:15px;@media (max-width: 768px){font-size:0.75rem;margin:20px 0;}::-webkit-scrollbar-thumb{background:rgba(255, 255, 255, 0.5);border-radius:3px;}}code[class*='language-'],pre[class*='language-']{tab-size:2;background:var(--prism-bg);color:var(--prism-default-text);}@media (max-width: 768px){width:100%;padding:80px 20px;line-height:1.6;font-size:14px;h1{font-size:23px;}h2{font-size:20px;}h3{font-size:17px;}img{width:100%;}hr{margin:50px 0;}}"}),c=(0,r.Z)("div",{target:"e1ijh0y17"})({name:"o80hwm",styles:"position:absolute;right:calc((100vw - 728px) / 2 - 340px);width:240px;overflow:hidden auto;padding:0.25rem 0.75rem;line-height:1.5;border-left:2px solid var(--border4);color:var(--text3);max-height:calc(100vh - 128px);font-size:0.875rem;@media (max-width: 1500px){right:calc((100vw - 728px) / 2 - 280px);}@media (max-width: 1200px){display:none;}a:hover{color:var(--text1);}div{display:block;transition:all 0.125s ease-in 0s;}.toc-level-1{margin-left:0;}.toc-level-2{margin-top:4px;margin-left:12px;}.toc-level-3{margin-top:4px;margin-left:24px;}"}),p=(0,r.Z)("div",{target:"e1ijh0y16"})({name:"8glmej",styles:"position:absolute;left:calc((100vw - 728px) / 2 - 140px);height:150px;width:64px;display:flex;@media (max-width: 1200px){display:none;}"}),m=(0,r.Z)("div",{target:"e1ijh0y15"})({name:"yj0bj1",styles:"width:4rem;background:var(--bg-element2);border:1px solid var(--border4);border-radius:2rem;padding:0.5rem;display:flex;flex-direction:column;-webkit-box-align:center;align-items:center"}),g=(0,r.Z)("div",{target:"e1ijh0y14"})({name:"gj8xbn",styles:"height:3rem;width:3rem;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;background:var(--bg-element1);border:1px solid var(--border3);border-radius:1.5rem;color:var(--text3);cursor:pointer;z-index:5;:hover{border-color:var(--text1);color:var(--text1);}"}),h=(0,r.Z)("svg",{target:"e1ijh0y13"})({name:"rrel8y",styles:"width:24px;height:24px"}),x=(0,r.Z)("div",{target:"e1ijh0y12"})({name:"7rttet",styles:"margin-top:0.5rem;color:var(--text2);line-height:1;font-size:0.75rem;margin-bottom:1rem;font-weight:bold"}),b=(0,r.Z)("div",{target:"e1ijh0y11"})({name:"gj8xbn",styles:"height:3rem;width:3rem;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;background:var(--bg-element1);border:1px solid var(--border3);border-radius:1.5rem;color:var(--text3);cursor:pointer;z-index:5;:hover{border-color:var(--text1);color:var(--text1);}"}),u=(0,r.Z)("svg",{target:"e1ijh0y10"})({name:"rrel8y",styles:"width:24px;height:24px"}),w=e=>{let{headings:t}=e;const{0:o,1:r}=(0,i.useState)(null),{0:n,1:s}=(0,i.useState)(!1);(0,i.useEffect)((()=>{function e(){const e=document.documentElement.scrollTop||document.body.scrollTop,t=document.querySelectorAll(".markdown-body h1, .markdown-body h2, .markdown-body h3"),o=Array.from(t).map((t=>({top:t.getBoundingClientRect().top+e,id:t.getAttribute("id")||""}))),i=o.findIndex((t=>{let{top:o}=t;return o>e+80}));r(-1===i?o.length-1:i>0?i-1:null),s(e>240)}return window.addEventListener("scroll",e),e(),()=>{window.removeEventListener("scroll",e)}}),[]);const{0:w,1:f}=(0,i.useState)(0),{0:y,1:v}=(0,i.useState)();(0,i.useEffect)((()=>{(async()=>{try{const e=window.location.pathname,t=decodeURIComponent(e.replace(/^\/+|\/+$/g,"")),o=await fetch("https://port-0-minlog-be-dihik2mliwbygs1.sel4.cloudtype.app/api/get_count/"+encodeURIComponent(t),{method:"POST"});if(!o.ok)throw new Error("네트워크 응답이 좋지 않았습니다.");{const e=await o.json();f(e.like_count),v(e.liked),console.log(e.liked)}}catch(e){console.log("조회수, 좋아요를 불러오는데 에러 발생:",e)}})()}),[]);return(0,d.tZ)(i.Fragment,null,(0,d.tZ)(p,{style:{position:n?"fixed":"absolute",top:n?"112px":"355px"}},(0,d.tZ)(m,null,(0,d.tZ)(g,{onClick:async()=>{try{const e=window.location.pathname,t=decodeURIComponent(e.replace(/^\/+|\/+$/g,"")),o=await fetch("https://port-0-minlog-be-dihik2mliwbygs1.sel4.cloudtype.app/api/like/"+encodeURIComponent(t),{method:"PUT"});if(!o.ok)throw new Error("네트워크 응답이 좋지 않았습니다.");{const e=await o.json();f(e.like_count),v(e.liked),console.log(e.liked)}}catch(e){console.log("좋아요를 업데이트하는 동안 에러 발생:",e)}},style:{backgroundColor:y?"rgb(56, 217, 169)":"",color:y?"var(--button-text)":"",borderColor:y?"rgb(56, 217, 169)":""}},(0,d.tZ)(h,null,(0,d.tZ)("path",{fill:"currentColor",d:"M18 1l-6 4-6-4-6 5v7l12 10 12-10v-7z"}))),(0,d.tZ)(x,null,w),(0,d.tZ)(b,{onClick:()=>{const e=window.location.href;a()(e),l.Am.success("링크가 복사되었습니다.",{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored",transition:l.BW})}},(0,d.tZ)(u,null,(0,d.tZ)("path",{fill:"currentColor",d:"M5 7c2.761 0 5 2.239 5 5s-2.239 5-5 5-5-2.239-5-5 2.239-5 5-5zm11.122 12.065c-.073.301-.122.611-.122.935 0 2.209 1.791 4 4 4s4-1.791 4-4-1.791-4-4-4c-1.165 0-2.204.506-2.935 1.301l-5.488-2.927c-.23.636-.549 1.229-.943 1.764l5.488 2.927zm7.878-15.065c0-2.209-1.791-4-4-4s-4 1.791-4 4c0 .324.049.634.122.935l-5.488 2.927c.395.535.713 1.127.943 1.764l5.488-2.927c.731.795 1.77 1.301 2.935 1.301 2.209 0 4-1.791 4-4z"}))),(0,d.tZ)(l.Ix,null))),(0,d.tZ)(c,{style:{position:n?"fixed":"absolute",top:n?"112px":"355px"}},t.map(((e,t)=>(0,d.tZ)("div",{key:e.id,className:"toc-level-"+e.level,style:{...t===o&&{transform:"scale(1.05)",display:"block",transition:"all 0.125s ease-in 0s",color:"var(--text1)"}}},(0,d.tZ)("a",{href:"#"+e.id},e.text))))))};t.Z=function(e){let{html:t}=e;const[o,r]=i.useState([]);return(0,i.useEffect)((()=>{const e=document.querySelectorAll(".markdown-body h1, .markdown-body h2, .markdown-body h3"),t=Array.from(e).map((e=>({id:e.getAttribute("id")||"",text:e.textContent||"",level:Number(e.tagName.charAt(1))})));r(t)}),[]),(0,i.useEffect)((()=>{const e=window.location.pathname,t=decodeURIComponent(e.replace(/^\/+|\/+$/g,""));fetch("https://port-0-minlog-be-dihik2mliwbygs1.sel4.cloudtype.app/api/view_count/"+encodeURIComponent(t),{method:"POST"}).then((e=>{e.ok?console.log("조회수 업데이트 성공"):console.log("조회수 업데이트 실패")})).catch((e=>{console.log("조회수를 업데이트하는 중에 오류가 발생했습니다.:",e)}))}),[]),(0,d.tZ)(i.Fragment,null,(0,d.tZ)(w,{headings:o}),(0,d.tZ)(s,{className:"markdown-body",dangerouslySetInnerHTML:{__html:t}}))}}}]);
//# sourceMappingURL=63a8ec3f-f66e7051e7b2be69fc44.js.map