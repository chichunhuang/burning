"use strict";(self.webpackChunkburny=self.webpackChunkburny||[]).push([[1158],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(r),u=a,f=m["".concat(c,".").concat(u)]||m[u]||d[u]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8705:(e,t,r)=>{r.r(t),r.d(t,{RotatedImage:()=>m,assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=r(7462),a=(r(7294),r(3905)),o=r(6697);const i={sidebarDepth:4},l="All Artifacts",c={unversionedId:"template/Gallery",id:"template/Gallery",title:"All Artifacts",description:"color of this span is crimson",source:"@site/docs/template/Gallery.md",sourceDirName:"template",slug:"/template/Gallery",permalink:"/burning/docs/template/Gallery",draft:!1,tags:[],version:"current",frontMatter:{sidebarDepth:4},sidebar:"tutorialSidebar",previous:{title:"How to List All Artifacts",permalink:"/burning/docs/template/CodeBlock"},next:{title:"How to List All Artifacts",permalink:"/burning/docs/template/ListCurrent"}},s={},p=[],m=e=>{let{img:t,degree:r="-45",width:n="100%",marginleft:o="20px"}=e;return(0,a.kt)("span",{style:{marginLeft:o}},(0,a.kt)("img",{src:t,style:{transform:"rotate("+r+"deg)"},width:n}))},d={toc:p,RotatedImage:m},u="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"all-artifacts"},"All Artifacts"),(0,a.kt)(m,{img:o.Z,width:"30%",mdxType:"RotatedImage"}),(0,a.kt)("span",{style:{color:"crimson",backgroundColor:"pink"}}," color of this span is crimson "),(0,a.kt)(m,{img:o.Z,degree:"0",width:"30%",mdxType:"RotatedImage"}),(0,a.kt)(m,{img:o.Z,width:"30%",mdxType:"RotatedImage"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\n<RotatedImage img={logo} degree=\"0\" width=\"30%\" ></RotatedImage>\n<RotatedImage img={logo} degree=\"0\" width=\"30%\" ></RotatedImage>\n\n\nexport const RotatedImage = ({img, degree, width='100%', marginleft='20px' }) => (\n //\u7a7a\u884c\u5831\u932f\n<span style={{\n  marginLeft: marginleft\n}}>\n  <img  src={img} \n        style={{ transform: 'rotate('+degree +'deg)' }}\n        width={width}\n      />\n </span>\n\n);\n\n// \u6ce8\u610f \n1. marginLeft: marginleft \u9019\u500b\u662f\u5728 style \u4e4b\u4e2d, \u9019\u908a\u6c92\u5927\u62ec\u865f\n2. width={width} \u9019\u500b\u662f\u5728 HTML element \u4e4b\u4e2d\n3. react componemt \u4e2d\u7684 JSX \u524d\u5f8c\u90fd\u4e0d\u53ef\u4ee5\u6709\u7a7a\u884c\n")))}f.isMDXComponent=!0},6697:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/docusaurus-social-card-956871f92b9963b4ab0080ff5eb13e77.jpg"}}]);