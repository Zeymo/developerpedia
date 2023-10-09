"use strict";(self.webpackChunkdeveloperpedia=self.webpackChunkdeveloperpedia||[]).push([[7730],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,k=d["".concat(p,".").concat(u)]||d[u]||c[u]||i;return n?r.createElement(k,l(l({ref:t},m),{},{components:n})):r.createElement(k,l({ref:t},m))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5056:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:3},l="\u5e94\u7528\u8bbf\u95ee",o={unversionedId:"learn/permission/intro/application_permission",id:"learn/permission/intro/application_permission",title:"\u5e94\u7528\u8bbf\u95ee",description:"\u5e94\u7528\u4ee5\u5e94\u7528\u7684\u8eab\u4efd\u8bbf\u95ee\u8d44\u6e90\u3002",source:"@site/docs/learn/permission/intro/application_permission.md",sourceDirName:"learn/permission/intro",slug:"/learn/permission/intro/application_permission",permalink:"/developerpedia/docs/learn/permission/intro/application_permission",draft:!1,editUrl:"https://github.com/open-dingtalk/developerpedia/tree/main/docs/learn/permission/intro/application_permission.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u59d4\u6258\u8bbf\u95ee",permalink:"/developerpedia/docs/learn/permission/intro/delegated_permission"},next:{title:"\u8bbf\u95ee\u51ed\u8bc1",permalink:"/developerpedia/docs/category/\u8bbf\u95ee\u51ed\u8bc1"}},p={},s=[{value:"\u4ec0\u4e48\u65f6\u5019\u9700\u8981\u4f7f\u7528\u5e94\u7528\u8bbf\u95ee\uff1f",id:"\u4ec0\u4e48\u65f6\u5019\u9700\u8981\u4f7f\u7528\u5e94\u7528\u8bbf\u95ee",level:2},{value:"\u4f5c\u4e3a\u4e00\u4e2a\u5e94\u7528\u5411\u7ba1\u7406\u5458\u7533\u8bf7\u6743\u9650",id:"\u4f5c\u4e3a\u4e00\u4e2a\u5e94\u7528\u5411\u7ba1\u7406\u5458\u7533\u8bf7\u6743\u9650",level:2},{value:"\u5e94\u7528\u8bbf\u95ee\u793a\u4f8b\u2014\u2014\u901a\u8fc7DingTalk Graph\u81ea\u52a8\u53d1\u9001\u90ae\u4ef6",id:"\u5e94\u7528\u8bbf\u95ee\u793a\u4f8b\u901a\u8fc7dingtalk-graph\u81ea\u52a8\u53d1\u9001\u90ae\u4ef6",level:2}],m={toc:s},d="wrapper";function c(e){let{components:t,...i}=e;return(0,a.kt)(d,(0,r.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5e94\u7528\u8bbf\u95ee"},"\u5e94\u7528\u8bbf\u95ee"),(0,a.kt)("p",null,"\u5e94\u7528\u4ee5\u5e94\u7528\u7684\u8eab\u4efd\u8bbf\u95ee\u8d44\u6e90\u3002"),(0,a.kt)("p",null,"\u5f53\u4e00\u4e2a\u5e94\u7528\u60f3\u76f4\u63a5\u901a\u8fc7 OpenAPI \u8bbf\u95ee\u8d44\u6e90\u65f6\uff0c\u5e94\u7528\u7684\u8bbf\u95ee\u4e0d\u53d7\u5230\u67d0\u4e2a\u767b\u5f55\u7528\u6237\u201c\u80fd\u5426\u64cd\u4f5c\u201d\u6216\u8005\u201c\u6587\u4ef6\u662f\u5426\u5c5e\u4e8e\u7528\u6237\u201d\u7684\u9650\u5236\u3002\u5e94\u7528\u7528\u81ea\u5df1\u7684\u5e94\u7528\u7684\u8eab\u4efd\u8c03\u7528 OpenAPI \uff0c\u4e14\u53ea\u6709\u7ba1\u7406\u5458\u53ef\u4ee5\u6388\u6743\uff0c\u8fd9\u79cd\u573a\u666f\u88ab\u79f0\u4e3a\u5e94\u7528\u8bbf\u95ee\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"\u5e94\u7528\u8bbf\u95ee"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u7528\u8bbf\u95ee\u51ed\u8bc1\u5b9e\u73b0\u5e94\u7528\u8bbf\u95ee"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("img",{alt:"\u5e94\u7528\u8bbf\u95ee\u7b80\u56fe",src:n(161).Z,width:"1044",height:"958"})),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("img",{alt:"\u5e94\u7528\u8bbf\u95ee\u51ed\u8bc1\u8bbf\u95ee",src:n(9306).Z,width:"906",height:"360"}))))),(0,a.kt)("h2",{id:"\u4ec0\u4e48\u65f6\u5019\u9700\u8981\u4f7f\u7528\u5e94\u7528\u8bbf\u95ee"},"\u4ec0\u4e48\u65f6\u5019\u9700\u8981\u4f7f\u7528\u5e94\u7528\u8bbf\u95ee\uff1f"),(0,a.kt)("p",null,"\u901a\u5e38\uff0c\u5e94\u7528\u8bbf\u95ee\u6bd4\u59d4\u6258\u8bbf\u95ee\u6709\u66f4\u5927\u7684\u5f71\u54cd\u8303\u56f4\u548c\u5a01\u529b\uff0c\u6240\u4ee5\u4f60\u6700\u597d\u5728\u5fc5\u987b\u4f7f\u7528\u5e94\u7528\u8bbf\u95ee\u7684\u65f6\u5019\u4f7f\u7528\u5b83\u3002\u4e0b\u9762\u662f\u4f7f\u7528\u5e94\u7528\u8bbf\u95ee\u7684\u5e38\u89c1\u573a\u666f\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5e94\u7528\u9700\u8981\u81ea\u52a8\u8fd0\u884c\uff0c\u6ca1\u6709\u4e0e\u7528\u6237\u7684\u4ea4\u4e92\u3002\u4f8b\u5982\uff0c\u4e00\u4e2a\u811a\u672c\uff0c\u68c0\u67e5\u6765\u81ea\u7279\u5b9a\u8054\u7cfb\u4eba\u7684\u90ae\u4ef6\u5e76\u81ea\u52a8\u56de\u590d\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5e94\u7528\u9700\u8981\u8bbf\u95ee\u7684\u8d44\u6e90\u5c5e\u4e8e\u591a\u4e2a\u7528\u6237\u3002\u4f8b\u5982\uff0c\u4e00\u4e2a\u5907\u4efd\u5e94\u7528\uff0c\u9700\u8981\u4ece\u4e0d\u540c\u7684\u6e20\u9053\u83b7\u53d6\u6570\u636e\uff0c\u8fd9\u4e9b\u6570\u636e\u6765\u81ea\u4e0d\u540c\u7684\u7528\u6237\u3002")),(0,a.kt)("h2",{id:"\u4f5c\u4e3a\u4e00\u4e2a\u5e94\u7528\u5411\u7ba1\u7406\u5458\u7533\u8bf7\u6743\u9650"},"\u4f5c\u4e3a\u4e00\u4e2a\u5e94\u7528\u5411\u7ba1\u7406\u5458\u7533\u8bf7\u6743\u9650"),(0,a.kt)("p",null,"\u9274\u4e8e\u5e94\u7528\u6743\u9650\u8f83\u5927\u7684\u5f71\u54cd\u9762\uff0c\u5e94\u7528\u6743\u9650\u9879\u5fc5\u987b\u7531\u4f7f\u7528\u5e94\u7528\u7684\u7ec4\u7ec7\u7684\u7ba1\u7406\u5458\u5b8c\u6210\u6388\u6743\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9996\u5148\uff0c\u5f00\u53d1\u8005\u9700\u8981\u5728\u5f00\u53d1\u8005\u540e\u53f0\u4e3a\u5e94\u7528\u52fe\u9009\u6240\u9700\u7684\u5e94\u7528\u6743\u9650\u9879\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5176\u6b21\uff0c\u4f60\u7684\u5e94\u7528\u9700\u8981\u88ab\u4f7f\u7528\u8005\u7ec4\u7ec7\u7684\u7ba1\u7406\u5458\u6388\u6743\u3002\u7ba1\u7406\u5458\u53ef\u4ee5\u7ed9\u4f60\u7684\u5e94\u7528\u6388\u6743\u7684\u573a\u666f\u6709\u4ee5\u4e0b\u4e09\u79cd\uff1a",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"\u7ba1\u7406\u5458\u901a\u8fc7\u5e94\u7528\u5e02\u573a\u5f00\u901a\u4f60\u7684\u5e94\u7528\u65f6\u5b8c\u6210\u6388\u6743\uff0c\u8be6\u89c1",(0,a.kt)("a",{parentName:"li",href:"/docs/learn/permission/manage/app_store_consent"},"\u5e94\u7528\u5f00\u901a\u65f6\u6388\u6743"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u7ba1\u7406\u5458\u5728\u5de5\u4f5c\u53f0\u4e2d\u4e3b\u52a8\u624b\u52a8\u4e3a\u4f60\u7684\u5e94\u7528\u6388\u6743\uff0c\u8be6\u89c1",(0,a.kt)("a",{parentName:"li",href:"/docs/learn/permission/manage/workbench_consent"},"\u5de5\u4f5c\u53f0\u6743\u9650\u7ba1\u7406"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u4f60\u7684\u5e94\u7528\u7f16\u7801\u4e3a\u5728\u5e94\u7528\u5185\u4e3a\u7ba1\u7406\u5458\u5c55\u793a\u6388\u6743\u7a97\u53e3\uff0c\u52a8\u6001\u8bf7\u6c42\u7ba1\u7406\u5458\u6388\u6743\uff0c\u8be6\u89c1",(0,a.kt)("a",{parentName:"li",href:"/docs/develop/permission/token/jsapi/get_app_only_token_jsapi"},"\u9489\u9489\u7aef\u5185\u83b7\u53d6\u5e94\u7528\u7684\u8bbf\u95ee\u51ed\u8bc1"),"\u3002"))),(0,a.kt)("li",{parentName:"ul"},"\u540c\u6837\u7684\uff0c",(0,a.kt)("strong",{parentName:"li"},"\u8bf7\u9075\u5faa\u6700\u5c0f\u6743\u9650\u539f\u5219"),"\uff1a\u6c38\u8fdc\u4e0d\u8981\u5411\u7528\u6237\u8bf7\u6c42\u4f60\u7684\u5e94\u7528\u7528\u4e0d\u5230\u7684\u6743\u9650\u9879\u3002\u4f8b\u5982\uff0c\u5982\u679c\u4f60\u7684\u5e94\u7528\u60f3\u8981\u5217\u51fa\u7528\u6237\u7684\u804a\u5929\u5217\u8868\u800c\u4e0d\u662f\u6bcf\u4e00\u6761\u804a\u5929\u6d88\u606f\uff0c\u4f60\u9700\u8981\u8bf7\u6c42\u83b7\u53d6 ",(0,a.kt)("inlineCode",{parentName:"li"},"Chat.ReadBasic")," \u800c\u4e0d\u662f ",(0,a.kt)("inlineCode",{parentName:"li"},"Chat.Read")," \u3002",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"* \u8fd9\u53ef\u4ee5\u5e2e\u52a9\u4f60\u7684\u5e94\u7528\u5728\u88ab\u653b\u9677\u65f6\u964d\u4f4e\u5b89\u5168\u98ce\u9669\uff0c\u4e5f\u53ef\u4ee5\u5e2e\u52a9\u4f60\u7684\u5e94\u7528\u66f4\u5bb9\u6613\u5730\u901a\u8fc7\u7ba1\u7406\u5458\u7684\u6388\u6743\u540c\u610f\u3002\n* \u5982\u679c\u7528\u6237\u6000\u7591\u4f60\u7684\u5e94\u7528\u5b58\u5728\u8d85\u91cf\u83b7\u53d6\u6743\u9650\u7684\u884c\u4e3a\uff0c\u5e73\u53f0\u4f1a\u5c06\u6536\u5230\u7684\u7528\u6237\u53cd\u9988\u540c\u6b65\u7ed9\u4f60\u7684\u5e94\u7528\u3002\n")),(0,a.kt)("admonition",{parentName:"li",title:"Note ",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u7684\u5e94\u7528\u662f\u8ba9\u7528\u6237\u767b\u5f55\u5e76\u7ba1\u7406\u81ea\u5df1\u8d44\u6e90\u7684\uff0c\u7edd\u5bf9\u4e0d\u80fd\u4f7f\u7528\u5e94\u7528\u8bbf\u95ee\u3002\u201c\u7528\u6237\u53ef\u4ee5\u767b\u5f55\u5e76\u7ba1\u7406\u81ea\u5df1\u8d44\u6e90\u201d\u7684\u8fd9\u4e00\u7c7b\u573a\u666f\u4e0b\uff0c\u53ea\u6709\u4f7f\u7528",(0,a.kt)("a",{parentName:"p",href:"/docs/learn/permission/intro/delegated_permission"},"\u59d4\u6258\u8bbf\u95ee"),"\uff0c\u624d\u80fd\u6ee1\u8db3",(0,a.kt)("strong",{parentName:"p"},"\u6700\u5c0f\u6743\u9650\u539f\u5219"),"\u3002")))),(0,a.kt)("h2",{id:"\u5e94\u7528\u8bbf\u95ee\u793a\u4f8b\u901a\u8fc7dingtalk-graph\u81ea\u52a8\u53d1\u9001\u90ae\u4ef6"},"\u5e94\u7528\u8bbf\u95ee\u793a\u4f8b\u2014\u2014\u901a\u8fc7DingTalk Graph\u81ea\u52a8\u53d1\u9001\u90ae\u4ef6"),(0,a.kt)("p",null,"\u4f8b\u5982\uff1a\u5c0f\u660e\u5e0c\u671b\u6bcf\u6b21\u6709\u4eba\u751f\u65e5\u7684\u65f6\u5019\u901a\u8fc7\u90ae\u4ef6\u901a\u77e5\u56e2\u961f\u91cc\u7684\u6240\u6709\u4eba\u3002 \u4e8e\u662f\u4ed6\u5199\u4e86\u4e00\u4e2a\u811a\u672c\uff0c\u8bbe\u7f6e\u4e86\u6bcf\u4e2a\u4eba\u7684\u751f\u65e5\uff0c\u5e76\u4e14\u5728\u6709\u4eba\u751f\u65e5\u7684\u90a3\u5929\u81ea\u52a8\u8c03\u7528\u53d1\u90ae\u4ef6\u7684 OpenAPI \u3002 \u811a\u672c\u5728\u6ca1\u6709\u4efb\u4f55\u4eba\u4ea4\u4e92\u7684\u60c5\u51b5\u4e0b\u8fd0\u884c\uff0c\u56e0\u6b64\u6388\u6743\u670d\u52a1\u5668\u53ea\u4f1a\u6821\u9a8c\u5e94\u7528\u7684\u6743\u9650\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6388\u6743\u670d\u52a1\u5668\u4f1a\u6821\u9a8c\u5e94\u7528\u662f\u5426\u88ab\u7ba1\u7406\u5458\u6388\u4e88\u4e86\u6743\u9650\u9879 ",(0,a.kt)("inlineCode",{parentName:"li"},"Mail.Send")," \u3002\u5982\u679c ",(0,a.kt)("inlineCode",{parentName:"li"},"Mail.Send")," \u6ca1\u6709\u88ab\u6388\u4e88\u7ed9\u5e94\u7528\uff0c\u6388\u6743\u670d\u52a1\u5668\u4f1a\u62d2\u7edd\u5e94\u7528\u7684\u8c03\u7528\u8bf7\u6c42\u3002")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"POST/users/{id}/{unionId}/sendMail"),(0,a.kt)("th",{parentName:"tr",align:null},"\u5e94\u7528\u88ab\u6388\u4e88\u4e86 ",(0,a.kt)("inlineCode",{parentName:"th"},"Mail.Send")),(0,a.kt)("th",{parentName:"tr",align:null},"\u5e94\u7528\u6ca1\u6709\u88ab\u6388\u4e88 ",(0,a.kt)("inlineCode",{parentName:"th"},"Mail.Send")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u811a\u672c\u4f7f\u7528\u5c0f\u660e\u7684\u90ae\u7bb1\u53d1\u90ae\u4ef6"),(0,a.kt)("td",{parentName:"tr",align:null},"200 - \u5141\u8bb8\u8bbf\u95ee\u3002\u7ba1\u7406\u5458\u5141\u8bb8\u5e94\u7528\u4ee5\u4efb\u4f55\u4eba\u7684\u8eab\u4efd\u53d1\u9001\u90ae\u4ef6\u3002"),(0,a.kt)("td",{parentName:"tr",align:null},"403 - \u65e0\u6743\u9650\u3002\u7ba1\u7406\u5458\u4e0d\u5141\u8bb8\u8fd9\u4e2a\u5e94\u7528\u53d1\u90ae\u4ef6\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u811a\u672c\u521b\u5efa\u4e86\u4e00\u4e2a\u4e13\u95e8\u7684\u90ae\u7bb1\u53d1\u90ae\u4ef6"),(0,a.kt)("td",{parentName:"tr",align:null},"200 - \u5141\u8bb8\u8bbf\u95ee\u3002\u7ba1\u7406\u5458\u5141\u8bb8\u5e94\u7528\u4ee5\u4efb\u4f55\u4eba\u7684\u8eab\u4efd\u53d1\u9001\u90ae\u4ef6\u3002"),(0,a.kt)("td",{parentName:"tr",align:null},"403 - \u65e0\u6743\u9650\u3002\u7ba1\u7406\u5458\u4e0d\u5141\u8bb8\u8fd9\u4e2a\u5e94\u7528\u53d1\u90ae\u4ef6\u3002")))))}c.isMDXComponent=!0},161:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/application_access_overview-c5ad7de5a32e1f39eeef5e0a8251d7f8.png"},9306:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/application_access_with_token-1f009805640003cba9ed5365858ac245.png"}}]);