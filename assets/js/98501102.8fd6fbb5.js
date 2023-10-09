"use strict";(self.webpackChunkdeveloperpedia=self.webpackChunkdeveloperpedia||[]).push([[3507],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>b});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),d=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=d(e.components);return o.createElement(l.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(t),m=r,b=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return t?o.createElement(b,s(s({ref:n},c),{},{components:t})):o.createElement(b,s({ref:n},c))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var d=2;d<a;d++)s[d]=t[d];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>s});var o=t(7294),r=t(6010);const a={tabItem:"tabItem_Ymn6"};function s(e){let{children:n,hidden:t,className:s}=e;return o.createElement("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,s),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>I});var o=t(7462),r=t(7294),a=t(6010),s=t(2466),i=t(6550),l=t(1980),d=t(7392),c=t(12);function u(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:o,default:r}}=e;return{value:n,label:t,attributes:o,default:r}}))}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??u(t);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:t}=e;const o=(0,i.k6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(o.location.search);n.set(a,e),o.replace({...o.location,search:n.toString()})}),[a,o])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,a=p(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const o=t.find((e=>e.default))??t[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:a}))),[l,d]=b({queryString:t,groupId:o}),[u,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,a]=(0,c.Nk)(t);return[o,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:o}),f=(()=>{const e=l??u;return m({value:e,tabValues:a})?e:null})();(0,r.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),g(e)}),[d,g,a]),tabValues:a}}var f=t(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:n,block:t,selectedValue:i,selectValue:l,tabValues:d}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),p=e=>{const n=e.currentTarget,t=c.indexOf(n),o=d[t].value;o!==i&&(u(n),l(o))},m=e=>{let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n)},d.map((e=>{let{value:n,label:t,attributes:s}=e;return r.createElement("li",(0,o.Z)({role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,key:n,ref:e=>c.push(e),onKeyDown:m,onClick:p},s,{className:(0,a.Z)("tabs__item",h.tabItem,s?.className,{"tabs__item--active":i===n})}),t??n)})))}function v(e){let{lazy:n,children:t,selectedValue:o}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==o}))))}function y(e){const n=g(e);return r.createElement("div",{className:(0,a.Z)("tabs-container",h.tabList)},r.createElement(k,(0,o.Z)({},e,n)),r.createElement(v,(0,o.Z)({},e,n)))}function I(e){const n=(0,f.Z)();return r.createElement(y,(0,o.Z)({key:String(n)},e))}},1044:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>b,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var o=t(7462),r=(t(7294),t(3905)),a=t(4866),s=t(5162);const i={sidebar_position:4},l="\u63a5\u6536\u7684\u6d88\u606f\u7c7b\u578b",d={unversionedId:"learn/bot/message",id:"learn/bot/message",title:"\u63a5\u6536\u7684\u6d88\u606f\u7c7b\u578b",description:"\u673a\u5668\u4eba\u63a5\u6536\u6d88\u606f\u5305\u542b\u591a\u79cd\u7c7b\u578b\uff0c\u6bcf\u79cd\u7c7b\u578b\u90fd\u662f JSON \u683c\u5f0f\uff0c\u8be5\u6587\u6863\u63cf\u8ff0\u5404\u79cd\u7c7b\u578b\u7684\u6d88\u606f\u793a\u4f8b\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u4e86\u89e3\u5404\u79cd\u6d88\u606f\u7c7b\u578b\u7684\u6570\u636e\u683c\u5f0f\u3002",source:"@site/docs/learn/bot/message.md",sourceDirName:"learn/bot",slug:"/learn/bot/message",permalink:"/developerpedia/docs/learn/bot/message",draft:!1,editUrl:"https://github.com/open-dingtalk/developerpedia/tree/main/docs/learn/bot/message.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u6982\u8ff0",permalink:"/developerpedia/docs/learn/bot/webhook/overview"},next:{title:"Stream Mode",permalink:"/developerpedia/docs/category/stream-mode-1"}},c={},u=[{value:"\u5404\u7c7b\u578b\u6d88\u606f\u4f53\u63cf\u8ff0",id:"\u5404\u7c7b\u578b\u6d88\u606f\u4f53\u63cf\u8ff0",level:2},{value:"\u4e0b\u8f7d\u6d88\u606f\u4e2d\u7684\u6587\u4ef6",id:"\u4e0b\u8f7d\u6d88\u606f\u4e2d\u7684\u6587\u4ef6",level:2},{value:"\u901a\u8fc7 DownloadCode \u4e0b\u8f7d",id:"\u901a\u8fc7-downloadcode-\u4e0b\u8f7d",level:3},{value:"\u901a\u8fc7 fileId \u4e0b\u8f7d",id:"\u901a\u8fc7-fileid-\u4e0b\u8f7d",level:3},{value:"\u76f8\u5173\u94fe\u63a5",id:"\u76f8\u5173\u94fe\u63a5",level:2}],p={toc:u},m="wrapper";function b(e){let{components:n,...t}=e;return(0,r.kt)(m,(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u63a5\u6536\u7684\u6d88\u606f\u7c7b\u578b"},"\u63a5\u6536\u7684\u6d88\u606f\u7c7b\u578b"),(0,r.kt)("p",null,"\u673a\u5668\u4eba\u63a5\u6536\u6d88\u606f\u5305\u542b\u591a\u79cd\u7c7b\u578b\uff0c\u6bcf\u79cd\u7c7b\u578b\u90fd\u662f JSON \u683c\u5f0f\uff0c\u8be5\u6587\u6863\u63cf\u8ff0\u5404\u79cd\u7c7b\u578b\u7684\u6d88\u606f\u793a\u4f8b\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u4e86\u89e3\u5404\u79cd\u6d88\u606f\u7c7b\u578b\u7684\u6570\u636e\u683c\u5f0f\u3002"),(0,r.kt)("h2",{id:"\u5404\u7c7b\u578b\u6d88\u606f\u4f53\u63cf\u8ff0"},"\u5404\u7c7b\u578b\u6d88\u606f\u4f53\u63cf\u8ff0"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u6d88\u606f\u4f53\u4e2d\u5b57\u6bb5\u63cf\u8ff0\u53ef\u4ee5\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"https://open.dingtalk.com/document/orgapp/receive-message"},"\u5b98\u65b9\u6587\u6863\uff1a\u673a\u5668\u4eba\u63a5\u6536\u6d88\u606f"),"\u3002"),(0,r.kt)(a.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"text",label:"\u6587\u672c",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "conversationId": "cide****4g=",\n  "chatbotCorpId": "ding****6741",\n  "chatbotUserId": "$:LWC****ihY/",\n  "msgId": "msgY****Pw==",\n  "senderNick": "\u5f20\u4e09",\n  "isAdmin": true,\n  "senderStaffId": "042***297",\n  "sessionWebhookExpiredTime": 1695289035996,\n  "createAt": 1695283635765,\n  "senderCorpId": "ding****6741",\n  "conversationType": "1",\n  "senderId": "$:LWC****PA==",\n  "sessionWebhook": "https://oapi.dingtalk.com/robot/sendBySession?session=79b48****4d4b",\n  "robotCode": "ding****c6gk",\n  "msgtype": "text",\n  "text": {\n    "content": "hello DingTalk!"\n  }\n}\n'))),(0,r.kt)(s.Z,{value:"picture",label:"\u56fe\u7247",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "conversationId": "cide****P4g=",\n  "chatbotCorpId": "ding****6741",\n  "chatbotUserId": "$:LWC****hY/",\n  "msgId": "msgg*****fg==",\n  "senderNick": "\u5f20\u4e09",\n  "isAdmin": true,\n  "senderStaffId": "042***297",\n  "sessionWebhookExpiredTime": 1695289579622,\n  "createAt": 1695284179371,\n  "senderCorpId": "ding****6741",\n  "conversationType": "1",\n  "senderId": "$:LWC****PA==",\n  "sessionWebhook": "https://oapi.dingtalk.com/robot/sendBySession?session=79b4****4d4b",\n  "robotCode": "ding****c6gk",\n  "msgtype": "picture",\n  "content": {\n    "pictureDownloadCode": "pWjA****ks=",\n    "downloadCode": "mIof****JE0E"\n  }\n}\n'))),(0,r.kt)(s.Z,{value:"video",label:"\u89c6\u9891",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "conversationId": "cide****4g=",\n  "chatbotCorpId": "ding****6741",\n  "chatbotUserId": "$:LWC****hY/",\n  "msgId": "msgu****nw==",\n  "senderNick": "\u5f20\u4e09",\n  "isAdmin": true,\n  "senderStaffId": "042***297",\n  "sessionWebhookExpiredTime": 1695290236983,\n  "createAt": 1695284836804,\n  "senderCorpId": "ding****6741",\n  "conversationType": "1",\n  "senderId": "$:LWC****PA==",\n  "sessionWebhook": "https://oapi.dingtalk.com/robot/sendBySession?session=79b4****4d4b",\n  "robotCode": "ding****c6gk",\n  "msgtype": "video",\n  "content": {\n    "duration": "5",\n    "videoType": "mp4",\n    "downloadCode": "mIof****SaqP"\n  }\n}\n'))),(0,r.kt)(s.Z,{value:"audio",label:"\u8bed\u97f3",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "conversationId": "cide****P4g=",\n  "chatbotCorpId": "ding****6741",\n  "chatbotUserId": "$:LWC****ihY/",\n  "msgId": "msg8****SA==",\n  "senderNick": "\u5f20\u4e09",\n  "isAdmin": true,\n  "senderStaffId": "042***297",\n  "sessionWebhookExpiredTime": 1695290404201,\n  "createAt": 1695284999360,\n  "senderCorpId": "ding****6741",\n  "conversationType": "1",\n  "senderId": "$:LWC****PA==",\n  "sessionWebhook": "https://oapi.dingtalk.com/robot/sendBySession?session=79b4****4d4b",\n  "robotCode": "ding****c6gk",\n  "msgtype": "audio",\n  "content": {\n    "downloadCode": "mIof****7g==",\n    "recognition": "\u9489\u9489PaaS\u5f00\u653e\u4e2d\u5fc3\uff0c\u81f4\u529b\u4e3a\u4f01\u4e1a\u2026\u2026"\n  }\n}\n')),(0,r.kt)("admonition",{title:"\u6e29\u99a8\u63d0\u793a",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u8bed\u97f3\u6d88\u606f\u4f53\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"content.recognition")," \u5b57\u6bb5\u5bf9\u5e94\u4e86\u8bed\u97f3\u8f6c\u6587\u5b57\u7684\u8bc6\u522b\u7ed3\u679c\uff0c\u4e3a\u6587\u5b57\u5904\u7406\u63d0\u4f9b\u4e86\u6781\u5927\u7684\u4fbf\u5229\u3002\u652f\u6301\u4e2d\u6587\u548c\u82f1\u6587\uff0c\u53ef\u4ee5\u6839\u636e\u5b9e\u9645\u573a\u666f\u9700\u8981\u4f7f\u7528\u8be5\u4fe1\u606f\u3002"))),(0,r.kt)(s.Z,{value:"file",label:"\u6587\u4ef6",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "conversationId": "cide****P4g=",\n  "chatbotCorpId": "ding****6741",\n  "chatbotUserId": "$:LWC****ihY/",\n  "msgId": "msg2****kg==",\n  "senderNick": "\u5f20\u4e09",\n  "isAdmin": true,\n  "senderStaffId": "042***297",\n  "sessionWebhookExpiredTime": 1695290663444,\n  "createAt": 1695285263144,\n  "senderCorpId": "ding****6741",\n  "conversationType": "1",\n  "senderId": "$:LWC****PA==",\n  "sessionWebhook": "https://oapi.dingtalk.com/robot/sendBySession?session=79b4****4d4b",\n  "robotCode": "ding****c6gk",\n  "msgtype": "file",\n  "content": {\n    "spaceId": "223***573",\n    "fileName": "foobar.zip",\n    "downloadCode": "LJYY****bw==",\n    "fileId": "117***848"\n  }\n}\n'))),(0,r.kt)(s.Z,{value:"richText",label:"\u5bcc\u6587\u672c",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "conversationId": "cide****P4g=",\n  "chatbotCorpId": "ding****6741",\n  "chatbotUserId": "$:LWC****ihY/",\n  "msgId": "msg4****cg==",\n  "senderNick": "\u5f20\u4e09",\n  "isAdmin": true,\n  "senderStaffId": "042****297",\n  "sessionWebhookExpiredTime": 1695291140392,\n  "createAt": 1695285740173,\n  "senderCorpId": "ding****6741",\n  "conversationType": "1",\n  "senderId": "$:LWC****PA==",\n  "sessionWebhook": "https://oapi.dingtalk.com/robot/sendBySession?session=79b4****4d4b",\n  "robotCode": "ding****c6gk",\n  "msgtype": "richText",\n  "content": {\n    "richText": [\n      {\n        "text": "\u8fd9\u4e2a\u95ee\u9898\u793a\u4f8b\u56fe\u5982\u4e0b\uff1a"\n      },\n      {\n        "pictureDownloadCode": "pWjA****SjIg",\n        "downloadCode": "mIof****7A==",\n        "type": "picture"\n      },\n      {\n        "text": "\u901a\u8fc7\u4ee5\u4e0a\u793a\u610f\u56fe\u53ef\u4ee5\u660e\u767d\u5b8c\u6574\u7684\u4ea4\u4e92\u6d41\u7a0b"\n      }\n    ]\n  }\n}\n'))),(0,r.kt)(s.Z,{value:"unknown",label:"\u6682\u4e0d\u652f\u6301\u7684\u7c7b\u578b",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "conversationId": "cide****P4g=",\n  "chatbotCorpId": "ding*****6741",\n  "chatbotUserId": "$:LWC****ihY/",\n  "msgId": "msgN****Uw==",\n  "senderNick": "\u5f20\u4e09",\n  "isAdmin": true,\n  "senderStaffId": "042***297",\n  "sessionWebhookExpiredTime": 1695290850075,\n  "createAt": 1695285449885,\n  "senderCorpId": "ding****6741",\n  "conversationType": "1",\n  "senderId": "$:LWC****PA==",\n  "sessionWebhook": "https://oapi.dingtalk.com/robot/sendBySession?session=79b48****4d4b",\n  "ai_robot_sessionid": "",\n  "robotCode": "ding****c6gk",\n  "msgtype": "unknownMsgType",\n  "content": {\n    "unknownMsgType": "\u7528\u6237\u53d1\u9001\u4e86\u4e00\u6761\u6d88\u606f\uff0c\u673a\u5668\u4eba\u6682\u4e0d\u652f\u6301\u63a5\u6536\u3002"\n  }\n}\n')))),(0,r.kt)("h2",{id:"\u4e0b\u8f7d\u6d88\u606f\u4e2d\u7684\u6587\u4ef6"},"\u4e0b\u8f7d\u6d88\u606f\u4e2d\u7684\u6587\u4ef6"),(0,r.kt)("p",null,"\u5bf9\u4e8e\u975e\u6587\u672c\u7c7b\u578b\u7684\u6d88\u606f\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0a\u6d88\u606f\u4f53 content \u5b57\u6bb5\u62ff\u5230\u6587\u4ef6\u7684\u6807\u8bc6\uff0c\u901a\u8fc7 OpenAPI \u53ef\u4ee5\u4e0b\u8f7d\u6587\u4ef6\u3002\u5177\u4f53\u65b9\u6cd5\u5982\u4e0b\u6240\u793a\u3002"),(0,r.kt)("h3",{id:"\u901a\u8fc7-downloadcode-\u4e0b\u8f7d"},"\u901a\u8fc7 DownloadCode \u4e0b\u8f7d"),(0,r.kt)("p",null,"\u5305\u62ec downloadCode \u548c pictureDownloadCode\u3002"),(0,r.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7",(0,r.kt)("a",{parentName:"p",href:"https://open.dingtalk.com/document/orgapp/download-the-file-content-of-the-robot-receiving-message"},"\u4e0b\u8f7d\u673a\u5668\u4eba\u63a5\u6536\u6d88\u606f\u7684\u6587\u4ef6\u5185\u5bb9"),"\u83b7\u5f97\u6587\u4ef6\u4e0b\u8f7d\u94fe\u63a5\u3002"),(0,r.kt)("h3",{id:"\u901a\u8fc7-fileid-\u4e0b\u8f7d"},"\u901a\u8fc7 fileId \u4e0b\u8f7d"),(0,r.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7",(0,r.kt)("a",{parentName:"p",href:"https://open.dingtalk.com/document/orgapp/obtains-the-download-information-about-a-file"},"\u83b7\u53d6\u6587\u4ef6\u4e0b\u8f7d\u4fe1\u606f"),"\u63a5\u53e3\u83b7\u53d6\u6587\u4ef6\u4e0b\u8f7d\u94fe\u63a5\u3002"),(0,r.kt)("p",null,"\u6ce8\u610f\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8be5\u63a5\u53e3\u4e2d\u7684 dentryId \u5bf9\u5e94\u6d88\u606f\u4f53\u4e2d\u7684 fileId")),(0,r.kt)("h2",{id:"\u76f8\u5173\u94fe\u63a5"},"\u76f8\u5173\u94fe\u63a5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://open.dingtalk.com/document/orgapp/receive-message"},"\u5b98\u65b9\u6587\u6863\uff1a\u673a\u5668\u4eba\u63a5\u6536\u6d88\u606f")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://open.dingtalk.com/document/orgapp/download-the-file-content-of-the-robot-receiving-message"},"\u5b98\u65b9\u6587\u6863\uff1a\u4e0b\u8f7d\u673a\u5668\u4eba\u63a5\u6536\u6d88\u606f\u7684\u6587\u4ef6\u5185\u5bb9")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://open.dingtalk.com/document/orgapp/obtains-the-download-information-about-a-file"},"\u5b98\u65b9\u6587\u6863\uff1a\u83b7\u53d6\u4f01\u4e1a\u5b58\u50a8\u4e2d\u6587\u4ef6\u7684\u4e0b\u8f7d\u4fe1\u606f"))))}b.isMDXComponent=!0}}]);