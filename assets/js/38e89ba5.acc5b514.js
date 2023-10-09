"use strict";(self.webpackChunkdeveloperpedia=self.webpackChunkdeveloperpedia||[]).push([[6393],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),m=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=m(r),u=n,k=d["".concat(p,".").concat(u)]||d[u]||s[u]||o;return r?a.createElement(k,l(l({ref:t},c),{},{components:r})):a.createElement(k,l({ref:t},c))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:n,l[1]=i;for(var m=2;m<o;m++)l[m]=r[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3125:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:1},l="\u6982\u8ff0",i={unversionedId:"learn/stream/overview",id:"learn/stream/overview",title:"\u6982\u8ff0",description:"\u9489\u9489\u5e73\u53f0\u4e0e\u5f00\u53d1\u8005\u5e94\u7528\u4e4b\u95f4\u6709\u591a\u79cd\u5f62\u5f0f\u7684\u6570\u636e\u4ea4\u4e92\uff0c\u9489\u9489\u57282023\u5e74\u5168\u65b0\u63a8\u51fa\u6765\u7684 Stream Mode \u53ef\u4ee5\u6781\u5927\u7684\u51cf\u8f7b\u5e94\u7528\u5f00\u53d1\u548c\u8fd0\u7ef4\u7684\u8d1f\u62c5\uff0c\u503c\u5f97\u5b66\u4e60\u548c\u4f7f\u7528\u3002\u672c\u6587\u4e3a Stream Mode \u63d0\u4f9b\u4e00\u4e2a\u6982\u8ff0\u6027\u7684\u4ecb\u7ecd\uff0c\u8ba9\u5f00\u53d1\u8005\u5bf9 Stream Mode \u6709\u4e2a\u521d\u6b65\u4e86\u89e3\u3002",source:"@site/docs/learn/stream/overview.md",sourceDirName:"learn/stream",slug:"/learn/stream/overview",permalink:"/developerpedia/docs/learn/stream/overview",draft:!1,editUrl:"https://github.com/open-dingtalk/developerpedia/tree/main/docs/learn/stream/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Stream Mode",permalink:"/developerpedia/docs/category/stream-mode-1"},next:{title:"\u534f\u8bae\u63cf\u8ff0",permalink:"/developerpedia/docs/learn/stream/protocol"}},p={},m=[{value:"\u4f18\u70b9",id:"\u4f18\u70b9",level:2},{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u76f8\u5173\u94fe\u63a5",id:"\u76f8\u5173\u94fe\u63a5",level:2}],c={toc:m},d="wrapper";function s(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"\u9489\u9489\u5e73\u53f0\u4e0e\u5f00\u53d1\u8005\u5e94\u7528\u4e4b\u95f4\u6709\u591a\u79cd\u5f62\u5f0f\u7684\u6570\u636e\u4ea4\u4e92\uff0c\u9489\u9489\u57282023\u5e74\u5168\u65b0\u63a8\u51fa\u6765\u7684 Stream Mode \u53ef\u4ee5\u6781\u5927\u7684\u51cf\u8f7b\u5e94\u7528\u5f00\u53d1\u548c\u8fd0\u7ef4\u7684\u8d1f\u62c5\uff0c\u503c\u5f97\u5b66\u4e60\u548c\u4f7f\u7528\u3002\u672c\u6587\u4e3a Stream Mode \u63d0\u4f9b\u4e00\u4e2a\u6982\u8ff0\u6027\u7684\u4ecb\u7ecd\uff0c\u8ba9\u5f00\u53d1\u8005\u5bf9 Stream Mode \u6709\u4e2a\u521d\u6b65\u4e86\u89e3\u3002")),(0,n.kt)("p",null,"\u9489\u9489\u4e0e\u5f00\u53d1\u8005\u7684\u5e94\u7528\u7684\u670d\u52a1\u7aef\u4e4b\u95f4\u6709\u4e24\u79cd\u65b9\u5411\u8c03\u7528\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"\u5f00\u53d1\u8005\u5e94\u7528\u8c03\u7528\u9489\u9489"),"\uff0c\u901a\u8fc7 REST API \u65b9\u5f0f\u3002\u4f8b\u5982\uff1a\u901a\u8fc7\u90e8\u95e8 ID \u67e5\u8be2\u6210\u5458\u5217\u8868\uff0c\u901a\u8fc7\u7528\u6237 ID \u67e5\u8be2\u65e5\u7a0b\u5fd9\u95f2"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"\u9489\u9489\u8c03\u7528\u5f00\u53d1\u8005\u5e94\u7528"),"\uff0c\u901a\u8fc7 Webhook \u6216\u8005 Stream \u6a21\u5f0f\u3002\u4f8b\u5982",(0,n.kt)("a",{parentName:"li",href:"https://open.dingtalk.com/document/orgapp/stream"},"\u4e8b\u4ef6\u8ba2\u9605"),"\u3001",(0,n.kt)("a",{parentName:"li",href:"https://open.dingtalk.com/document/orgapp/the-creation-and-installation-of-the-application-robot-in-the"},"\u673a\u5668\u4eba\u6536\u6d88\u606f"),"\u3001",(0,n.kt)("a",{parentName:"li",href:"https://open.dingtalk.com/document/orgapp/create-and-deliver-cards"},"\u5361\u7247\u56de\u8c03"),"\u7b49")),(0,n.kt)("p",null,"\u8865\u5145\u8bf4\u660e\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u5728\u6781\u5c11\u90e8\u5206\u201c",(0,n.kt)("em",{parentName:"li"},"\u5f00\u53d1\u8005\u5e94\u7528\u8c03\u7528\u9489\u9489"),"\u201d\u7684\u573a\u666f\uff0c\u4e5f\u652f\u6301 Webhook \u65b9\u5f0f\uff0c\u4f8b\u5982 ",(0,n.kt)("a",{parentName:"li",href:"/docs/learn/bot/webhook/overview"},"\u7fa4\u81ea\u5b9a\u4e49\u673a\u5668\u4eba")," \u652f\u6301\u901a\u8fc7 Webhook \u65b9\u5f0f\u53d1\u9001\u6d88\u606f\u5230\u9489\u9489\u804a\u5929\u7fa4\u4e2d"),(0,n.kt)("li",{parentName:"ol"},"Stream \u6a21\u5f0f\u5f53\u524d\u4ec5\u652f\u6301\u201d",(0,n.kt)("em",{parentName:"li"},"\u9489\u9489\u8c03\u7528\u5f00\u53d1\u8005\u5e94\u7528"),"\u201c\uff0c\u5f00\u53d1\u8005\u6709\u4e00\u5b9a\u7684\u9700\u6c42\u5e0c\u671b\u901a\u8fc7 Stream \u6a21\u5f0f\u5b9e\u73b0\u201d",(0,n.kt)("em",{parentName:"li"},"\u5f00\u53d1\u8005\u5e94\u7528\u8c03\u7528\u9489\u9489"),"\u201c\uff0c\u672a\u6765\u6839\u636e\u9700\u8981\u8bc4\u4f30\u662f\u5426\u652f\u6301\u8be5\u7279\u6027")),(0,n.kt)("h2",{id:"\u4f18\u70b9"},"\u4f18\u70b9"),(0,n.kt)("p",null,"\u9489\u9489\u673a\u5668\u4eba\u6536\u53d1\u6d88\u606f\u652f\u6301 Webhook \u548c Stream \u4e24\u79cd\u6a21\u5f0f\uff0c\u5f3a\u70c8\u63a8\u8350\u91c7\u7528 Stream \u6a21\u5f0f\uff0c\u4e3b\u8981\u4f18\u70b9\u6709\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u96f6\u516c\u7f51IP"),"\uff1a\u4e0d\u9700\u8981\u4f9d\u8d56\u516c\u7f51IP\u6216\u57df\u540d\uff0c\u4e5f\u4e0d\u9700\u8981\u66b4\u9732\u516c\u7f51IP\uff0c\u51cf\u5c11\u4e86\u516c\u7f51\u66b4\u9732\u670d\u52a1\u7684\u5b89\u5168\u98ce\u9669\u5e76\u964d\u4f4e\u4e86\u5f00\u53d1\u95e8\u69db\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u96f6\u52a0\u89e3\u5bc6/\u7b7e\u540d/TLS\u8bc1\u4e66\u7ba1\u7406"),"\uff1a\u4f7f\u7528\u5e94\u7528\u8eab\u4efd\u5bf9\u8fde\u63a5\u8fdb\u884c\u9274\u6743\uff0c\u901a\u8fc7\u53cd\u5411\u8fde\u63a5\u7684\u65b9\u5f0f\u4e0e\u9489\u9489\u5f00\u653e\u5e73\u53f0\u5efa\u7acbTLS\u52a0\u5bc6\u8fde\u63a5\uff0c\u63d0\u4f9b\u4e86\u5feb\u901f\u3001\u5b89\u5168\u7684\u901a\u4fe1\u4f53\u9a8c\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u96f6\u9632\u706b\u5899\u767d\u540d\u5355"),"\uff1aStream \u6a21\u5f0f\u4e0b\u5f00\u53d1\u8005\u65e0\u9700\u5411\u516c\u7f51\u5f00\u653e\u63d0\u4f9b\u4efb\u4f55\u670d\u52a1\u7aef\u53e3\uff0c\u65e0\u9700\u90e8\u7f72\u9632\u706b\u5899\u548c\u914d\u7f6e\u767d\u540d\u5355\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u96f6\u7f51\u5173\u90e8\u7f72"),"\uff1a\u901a\u8fc7\u53cd\u5411\u8fde\u63a5\u7684\u65b9\u5f0f\u5efa\u7acb\u901a\u9053\uff0c\u5f00\u53d1\u8005\u53ea\u9700\u4fdd\u8bc1\u8fd0\u884c\u73af\u5883\u5177\u5907\u516c\u7f51\u8bbf\u95ee\u80fd\u529b\u5373\u53ef\uff0c\u65e0\u9700\u90e8\u7f72\u7f51\u5173\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u96f6\u5185\u7f51\u7a7f\u900f"),"\uff1a\u5f00\u53d1\u8005\u65e0\u9700\u5728\u672c\u5730\u642d\u5efa\u5185\u7f51\u7a7f\u900f\u5de5\u5177\uff0c\u901a\u8fc7 Stream \u6a21\u5f0f\u5728\u672c\u5730\u5f00\u53d1\u73af\u5883\u4e2d\u5373\u53ef\u63a5\u6536\u5361\u7247\u56de\u8c03\u3002")),(0,n.kt)("h2",{id:"\u529f\u80fd"},"\u529f\u80fd"),(0,n.kt)("p",null,"\u5f53\u524d Stream \u6a21\u5f0f\u5df2\u7ecf\u652f\u6301\u8fd9\u4e9b\u529f\u80fd"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u673a\u5668\u4eba\u6536\u6d88\u606f\uff1a\u521b\u5efa\u804a\u5929\u673a\u5668\u4eba\uff0c\u901a\u8fc7 Stream \u6a21\u5f0f\u6765\u63a5\u6536\u53d1\u9001\u7ed9\u673a\u5668\u4eba\u7684\u6d88\u606f\uff0c",(0,n.kt)("a",{parentName:"li",href:"https://open.dingtalk.com/document/orgapp/the-creation-and-installation-of-the-application-robot-in-the"},"\u70b9\u6b64\u94fe\u63a5")),(0,n.kt)("li",{parentName:"ol"},"\u4e8b\u4ef6\u8ba2\u9605\uff1a\u5404\u7c7b\u4e8b\u4ef6\u53d8\u66f4\u901a\u77e5\uff0c\u4f8b\u5982\u5458\u5de5\u5165\u804c\u79bb\u804c\u3001\u5ba1\u6279\u4efb\u52a1\u72b6\u6001\u53d8\u5316\u7b49\uff0c",(0,n.kt)("a",{parentName:"li",href:"https://open.dingtalk.com/document/orgapp/stream"},"\u70b9\u6b64\u94fe\u63a5")),(0,n.kt)("li",{parentName:"ol"},"\u4e92\u52a8\u5361\u7247\u56de\u8c03\uff1a\u521b\u5efa\u5e76\u53d1\u9001\u4e92\u52a8\u5361\u7247\u5230\u804a\u5929\u4f1a\u8bdd\u4e2d\uff0c\u5f53\u7528\u6237\u5728\u4e92\u52a8\u5361\u7247\u70b9\u51fb\u6216\u5176\u4ed6\u4ea4\u4e92\u65f6\u5019\uff0c\u53ef\u4ee5\u901a\u8fc7 Stream \u6a21\u5f0f\u63a5\u6536\u5230\u8fd9\u4e2a\u4e92\u52a8\u64cd\u4f5c\u5185\u5bb9\uff0c",(0,n.kt)("a",{parentName:"li",href:"https://open.dingtalk.com/document/orgapp/create-and-deliver-cards"},"\u70b9\u6b64\u94fe\u63a5"))),(0,n.kt)("p",null,"\u5176\u4ed6\u573a\u666f\u540e\u7eed\u4f1a\u6301\u7eed\u652f\u6301\u4e0a\uff0c\u5305\u62ec",(0,n.kt)("a",{parentName:"p",href:"https://open.dingtalk.com/document/orgapp/guide-for-enhancing-the-access-link-of-enterprise-internal-applications"},"\u94fe\u63a5\u589e\u5f3a"),"\u7684\u56de\u8c03\u7b49\uff0c\u53ef\u4ee5\u901a\u8fc7",(0,n.kt)("a",{parentName:"p",href:"/docs/explore/support"},"\u6280\u672f\u652f\u6301"),"\u7684\u65b9\u5f0f\u63d0\u4ea4\u53cd\u9988\u3002"),(0,n.kt)("h2",{id:"\u76f8\u5173\u94fe\u63a5"},"\u76f8\u5173\u94fe\u63a5"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/develop/sdk/overview"},"Stream Mode SDK")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://open.dingtalk.com/document/direction/stream-mode-protocol-access-description"},"\u5b98\u65b9\u6587\u6863\uff1aStream Mode \u534f\u8bae\u6587\u6863")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://open.dingtalk.com/document/resourcedownload/introduction-to-stream-mode"},"\u5b98\u65b9\u6587\u6863\uff1a\u670d\u52a1\u7aef Stream \u6a21\u5f0f\u4ecb\u7ecd"))))}s.isMDXComponent=!0}}]);