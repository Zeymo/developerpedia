"use strict";(self.webpackChunkdeveloperpedia=self.webpackChunkdeveloperpedia||[]).push([[1146],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=s(n),k=a,u=c["".concat(p,".").concat(k)]||c[k]||m[k]||o;return n?r.createElement(u,l(l({ref:t},d),{},{components:n})):r.createElement(u,l({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},4616:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1},l="\u6d4f\u89c8\u5668\u5185\u83b7\u53d6\u7528\u6237\u59d4\u6258\u7684\u8bbf\u95ee\u51ed\u8bc1",i={unversionedId:"develop/permission/token/browser/get_user_app_token_browser",id:"develop/permission/token/browser/get_user_app_token_browser",title:"\u6d4f\u89c8\u5668\u5185\u83b7\u53d6\u7528\u6237\u59d4\u6258\u7684\u8bbf\u95ee\u51ed\u8bc1",description:"\u5e94\u7528\u53d7\u7528\u6237\u7684\u59d4\u6258\u8bbf\u95ee\u7528\u6237\u8d44\u6e90\u65f6\uff08\u59d4\u6258\u8bbf\u95ee\uff09\uff0c\u53ef\u53c2\u8003\u672c\u6587\u6d41\u7a0b\u83b7\u53d6\u7528\u6237\u59d4\u6258\u7684\u8bbf\u95ee\u51ed\u8bc1\u3002",source:"@site/docs/develop/permission/token/browser/get_user_app_token_browser.md",sourceDirName:"develop/permission/token/browser",slug:"/develop/permission/token/browser/get_user_app_token_browser",permalink:"/developerpedia/docs/develop/permission/token/browser/get_user_app_token_browser",draft:!1,editUrl:"https://github.com/open-dingtalk/developerpedia/tree/main/docs/develop/permission/token/browser/get_user_app_token_browser.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u6d4f\u89c8\u5668\u5185",permalink:"/developerpedia/docs/category/\u6d4f\u89c8\u5668\u5185"},next:{title:"\u6d4f\u89c8\u5668\u5185\u83b7\u53d6\u5e94\u7528\u7684\u8bbf\u95ee\u51ed\u8bc1",permalink:"/developerpedia/docs/develop/permission/token/browser/get_app_only_token_browser"}},p={},s=[{value:"\u6b65\u9aa4\u4e00\uff1a\u5e94\u7528\u914d\u7f6e",id:"\u6b65\u9aa4\u4e00\u5e94\u7528\u914d\u7f6e",level:2},{value:"\u6b65\u9aa4\u4e8c\uff1a\u83b7\u53d6 Access Token",id:"\u6b65\u9aa4\u4e8c\u83b7\u53d6-access-token",level:2},{value:"\u6b65\u9aa42-1\uff1a\u83b7\u53d6\u6388\u6743\u7801",id:"\u6b65\u9aa42-1\u83b7\u53d6\u6388\u6743\u7801",level:3},{value:"\u6b65\u9aa42-2\uff1a\u7528\u6388\u6743\u7801\u5151\u6362\u8bbf\u95ee\u51ed\u8bc1 Access Token",id:"\u6b65\u9aa42-2\u7528\u6388\u6743\u7801\u5151\u6362\u8bbf\u95ee\u51ed\u8bc1-access-token",level:3},{value:"\u6b65\u9aa4\u4e09\uff1a\u4f7f\u7528 Access Token \u8c03\u7528 OpenAPI",id:"\u6b65\u9aa4\u4e09\u4f7f\u7528-access-token-\u8c03\u7528-openapi",level:2}],d={toc:s},c="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(c,(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6d4f\u89c8\u5668\u5185\u83b7\u53d6\u7528\u6237\u59d4\u6258\u7684\u8bbf\u95ee\u51ed\u8bc1"},"\u6d4f\u89c8\u5668\u5185\u83b7\u53d6\u7528\u6237\u59d4\u6258\u7684\u8bbf\u95ee\u51ed\u8bc1"),(0,a.kt)("p",null,"\u5e94\u7528\u53d7\u7528\u6237\u7684\u59d4\u6258\u8bbf\u95ee\u7528\u6237\u8d44\u6e90\u65f6\uff08",(0,a.kt)("a",{parentName:"p",href:"/docs/learn/permission/intro/delegated_permission"},"\u59d4\u6258\u8bbf\u95ee"),"\uff09\uff0c\u53ef\u53c2\u8003\u672c\u6587\u6d41\u7a0b\u83b7\u53d6\u7528\u6237\u59d4\u6258\u7684\u8bbf\u95ee\u51ed\u8bc1\u3002"),(0,a.kt)("h2",{id:"\u6b65\u9aa4\u4e00\u5e94\u7528\u914d\u7f6e"},"\u6b65\u9aa4\u4e00\uff1a\u5e94\u7528\u914d\u7f6e"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u767b\u5f55\u9489\u9489\u5f00\u53d1\u8005\u540e\u53f0"),(0,a.kt)("li",{parentName:"ol"},"\u8fdb\u5165\u5df2\u521b\u5efa\u7684\u5e94\u7528\uff0c\u5728\u201c\u51ed\u8bc1\u4e0e\u57fa\u7840\u4fe1\u606f\u201d\u91cc\u53ef\u4ee5\u770b\u5230\u5e94\u7528\u7684 ClientId \u548c ClientSecret \u3002\n",(0,a.kt)("img",{alt:"\u5e94\u7528\u7684ClientId\u548cClientSecret",src:n(1978).Z,width:"1431",height:"394"})),(0,a.kt)("li",{parentName:"ol"},"\u5728\u201c\u5b89\u5168\u8bbe\u7f6e\u201d\u7684\u201c\u91cd\u5b9a\u5411URL\u201d\u4e2d\u914d\u7f6e\u91cd\u5b9a\u5411\u5730\u5740\u3002\u4e3a\u4fbf\u4e8e\u8c03\u8bd5\uff0c\u6d4b\u8bd5\u9636\u6bb5\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"li",href:"http://127.0.0.1:8000"},"http://127.0.0.1:8000")," \uff0c\u6d4b\u8bd5\u901a\u8fc7\u540e\u6362\u6210\u516c\u7f51\u53ef\u8bbf\u95ee\u5730\u5740\u5373\u53ef\u3002\n",(0,a.kt)("img",{alt:"\u914d\u7f6e\u56de\u8c03\u5730\u5740",src:n(5575).Z,width:"1451",height:"724"})),(0,a.kt)("li",{parentName:"ol"},"\u7ed9\u4f60\u7684\u5e94\u7528\u52fe\u9009\u9700\u8981\u8c03\u7528\u7684 OpenAPI \u5bf9\u5e94\u7684\u59d4\u6258\u7c7b\u578b\u6743\u9650\u70b9\u3002\u6bd4\u5982 ",(0,a.kt)("inlineCode",{parentName:"li"},"Contact.User.Read")," \u3002")),(0,a.kt)("admonition",{title:"Note",type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},'\u76ee\u524d\uff0c\u6743\u9650\u7ba1\u7406\u4e2d\u7684\u201c\u4e2a\u4eba\u6743\u9650"\u7c7b\u76ee\u4e0b\u7684\u6743\u9650\u70b9\u662f',(0,a.kt)("strong",{parentName:"li"},"\u59d4\u6258\u6743\u9650\u70b9"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5176\u4ed6\u7c7b\u76ee\u4e0b\u7684\u6743\u9650\u70b9\u5747\u4e3a",(0,a.kt)("strong",{parentName:"li"},"\u5e94\u7528\u6743\u9650\u70b9"),"\uff0c\u5982\u679c\u9700\u8981\u4f7f\u7528\u5e94\u7528\u6388\u6743\uff0c\u8bf7\u79fb\u6b65",(0,a.kt)("a",{parentName:"li",href:"/docs/learn/permission/token/app_only_token"},"\u5e94\u7528\u7684\u8bbf\u95ee\u51ed\u8bc1"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6743\u9650\u70b9\u7684\u7c7b\u522b\uff0c\u5373\u6743\u9650\u70b9\u662f\u59d4\u6258\u6743\u9650\u70b9\u8fd8\u662f\u5e94\u7528\u6743\u9650\u70b9\uff0c\u5c06\u5728\u5f00\u53d1\u8005\u540e\u53f0\u7684\u6743\u9650\u7ba1\u7406\u4e2d\u900f\u51fa\uff0c\u656c\u8bf7\u671f\u5f85\u3002"))),(0,a.kt)("h2",{id:"\u6b65\u9aa4\u4e8c\u83b7\u53d6-access-token"},"\u6b65\u9aa4\u4e8c\uff1a\u83b7\u53d6 Access Token"),(0,a.kt)("p",null,"\u9489\u9489\u5f00\u653e\u5e73\u53f0\u63d0\u4f9b\u7684\u59d4\u6258\u8bbf\u95ee\u6388\u6743\uff0c\u9075\u5faa OAuth 2.0 \u6807\u51c6\u7684\u6388\u6743\u7801\u6a21\u5f0f ",(0,a.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc6749#section-4.1"},"RFC 6749 Authorization Code Grant"),"\u3002\n",(0,a.kt)("img",{alt:"\u6388\u6743\u7801\u6a21\u5f0f\u65f6\u5e8f\u56fe",src:n(5608).Z,width:"2300",height:"1656"})),(0,a.kt)("h3",{id:"\u6b65\u9aa42-1\u83b7\u53d6\u6388\u6743\u7801"},"\u6b65\u9aa42-1\uff1a\u83b7\u53d6\u6388\u6743\u7801"),(0,a.kt)("p",null,"\u6309\u7167\u4e0b\u65b9\u6559\u7a0b\u6784\u5efa\u6388\u6743\u94fe\u63a5\u3002"),(0,a.kt)("admonition",{title:"\u5f00\u53d1\u8005Tip",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u628a\u62fc\u63a5\u597d\u7684\u94fe\u63a5\u8d34\u5230\u6d4f\u89c8\u5668\u91cc\uff0c\u5373\u53ef\u9884\u89c8\u9489\u9489\u63d0\u4f9b\u7684\u6388\u6743\u670d\u52a1\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},"https://login.dingtalk.com/oauth2/auth?\nclient_id={your_client_id}\n&redirect_uri={your_redirect_uri}\n&state={your_string}\n&response_type=code\n&prompt=consent\n&scope=openid\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u662f\u5426\u5fc5\u586b"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"client_id"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u5e94\u7528\u7684 ClientID\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"redirect_uri"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u9489\u9489\u5904\u7406\u5b8c\u8bf7\u6c42\u540e\u4f1a\u628a\u54cd\u5e94\u53d1\u9001\u5230\u6b64\u91cd\u5b9a\u5411\u5730\u5740\u3002\u6b64\u91cd\u5b9a\u5411\u5730\u5740\u5fc5\u987b\u6ce8\u518c\u5728\u5bf9\u5e94\u7684\u5e94\u7528\u91cc\u3002\u8bf7\u6c42\u4e2d\u7684\u5730\u5740\u5fc5\u987b\u662fURL\u7f16\u7801\u7684\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"state"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u63a8\u8350\u4f7f\u7528"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u8fd9\u4e2a\u503c\u4f1a\u5728\u54cd\u5e94\u4e2d\u539f\u6837\u8fd4\u56de\uff0c\u5b83\u53ef\u4ee5\u662f\u60a8\u60f3\u8981\u7684\u4efb\u4f55\u5185\u5bb9\u7684\u5b57\u7b26\u4e32\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"response_type"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u8bf7\u56fa\u5b9a\u586b\u5199code\u3002\u76ee\u524d\u9489\u9489\u53ea\u63d0\u4f9b\u4e86\u6388\u6743\u7801\u4e00\u79cd\u6388\u6743\u54cd\u5e94\u6a21\u5f0f\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"prompt"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u56fa\u5b9a\u586b\u5199consent\uff0c\u4f1a\u8fdb\u5165\u6388\u6743\u786e\u8ba4\u9875\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"scope"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u662f"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u6388\u6743\u8303\u56f4\uff0c\u9ed8\u8ba4\u5c55\u793a\u5e94\u7528\u4e0a\u7533\u8bf7\u7684\u6240\u6709\u59d4\u6258\u7c7b\u578b\u7684\u6743\u9650\u70b9\u3002",(0,a.kt)("br",null),"\u5982\u586b\u5199openid\uff0c\u6388\u6743\u540e\u8c03\u7528\u76f8\u5e94 OpenAPI ",(0,a.kt)("a",{parentName:"td",href:"https://open.dingtalk.com/document/isvapp/dingtalk-retrieve-user-information#"},"\u83b7\u53d6\u7528\u6237\u901a\u8baf\u5f55\u4e2a\u4eba\u4fe1\u606f"),"\uff0c\u83b7\u53d6\u7528\u6237userId\u3002",(0,a.kt)("br",null))))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7528\u6237\u4f1a\u7ecf\u5386\u767b\u5f55\u548c\u6388\u6743\uff1a\n",(0,a.kt)("img",{alt:"\u6d4f\u89c8\u5668\u5185\u7528\u6237\u6388\u6743UI",src:n(5933).Z,width:"2173",height:"845"}))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http",metastring:'title="\u6210\u529f\u7684\u54cd\u5e94"',title:'"\u6210\u529f\u7684\u54cd\u5e94"'},"GET http://127.0.0.1:8000?authCode=xxxx&state={your_string}\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"authCode"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u6388\u6743\u7801")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"state"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u8fd9\u4e2a\u503c\u4f1a\u5728\u54cd\u5e94\u4e2d\u539f\u6837\u8fd4\u56de\uff0c\u5b83\u53ef\u4ee5\u662f\u60a8\u60f3\u8981\u7684\u4efb\u4f55\u5185\u5bb9\u7684\u5b57\u7b26\u4e32\u3002")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http",metastring:'title="\u5931\u8d25\u7684\u54cd\u5e94"',title:'"\u5931\u8d25\u7684\u54cd\u5e94"'},"GET http://127.0.0.1:8000?error=xxxx&state={your_string}\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"error"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u9519\u8bef\u539f\u56e0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"state"),(0,a.kt)("td",{parentName:"tr",align:"left"},"\u8fd9\u4e2a\u503c\u4f1a\u5728\u54cd\u5e94\u4e2d\u539f\u6837\u8fd4\u56de\uff0c\u5b83\u53ef\u4ee5\u662f\u60a8\u60f3\u8981\u7684\u4efb\u4f55\u5185\u5bb9\u7684\u5b57\u7b26\u4e32\u3002")))),(0,a.kt)("h3",{id:"\u6b65\u9aa42-2\u7528\u6388\u6743\u7801\u5151\u6362\u8bbf\u95ee\u51ed\u8bc1-access-token"},"\u6b65\u9aa42-2\uff1a\u7528\u6388\u6743\u7801\u5151\u6362\u8bbf\u95ee\u51ed\u8bc1 Access Token"),(0,a.kt)("p",null,"\u53c2\u8003\u5b98\u65b9\u6587\u6863\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://open.dingtalk.com/document/isvapp/obtain-user-token#"},"\u83b7\u53d6\u7528\u6237\u59d4\u6258\u7684\u8bbf\u95ee\u51ed\u8bc1 Access Token")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http",metastring:"request",request:!0},'POST /v1.0/oauth2/userAccessToken HTTP/1.1\nHost:api.dingtalk.com\nContent-Type:application/json\n\n{\n  "clientId" : "suitexxx",\n  "clientSecret" : "dingxxx",\n  "code" : "mrtjjwdmxxx",\n  "refreshToken" : "",\n  "grantType" : "authorization_code"\n}\n')),(0,a.kt)("h2",{id:"\u6b65\u9aa4\u4e09\u4f7f\u7528-access-token-\u8c03\u7528-openapi"},"\u6b65\u9aa4\u4e09\uff1a\u4f7f\u7528 Access Token \u8c03\u7528 OpenAPI"),(0,a.kt)("p",null,"\u606d\u559c\u4f60\u6210\u529f\u83b7\u5f97\u7528\u6237\u59d4\u6258\u7684\u8bbf\u95ee\u51ed\u8bc1\uff0c\u4f60\u53ef\u4ee5\u7528\u5b83\u8bf7\u6c42\u5bf9\u5e94\u7684 OpenAPI \u3002\u5982\u679c Refresh Token \u8fc7\u671f\uff0c\u91cd\u590d\u4e0a\u8ff0\u6b65\u9aa4\u3002"))}m.isMDXComponent=!0},1978:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/client_id_secret-8b0e82c3f41722b13eed05412cc58242.png"},5575:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/redirect_uri_config-2c8afa8e71c59697833c5ec57f7a34b1.png"},5933:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/auth_code_flow_browser_ui-1803e134f8ab67c3e07a2508736d64d0.png"},5608:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/auth_code_flow_sequence-f4ed136b04221e9737484c192f2fc78d.png"}}]);