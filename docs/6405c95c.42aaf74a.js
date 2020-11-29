(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{153:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return s}));var a=n(2),r=n(6),o=(n(0),n(298)),c={title:"Realtime Sync"},l={unversionedId:"realtime",id:"realtime",isDocsHomePage:!1,title:"Realtime Sync",description:"Wave's realtime sync feature enables all connected users to see up to date content.",source:"@site/docs/realtime.md",slug:"/realtime",permalink:"/wave/docs/realtime",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/realtime.md",version:"current",sidebar:"someSidebar",previous:{title:"Routing",permalink:"/wave/docs/routing"},next:{title:"Background Tasks",permalink:"/wave/docs/background"}},i=[],b={rightToc:i};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Wave's realtime sync feature enables all connected users to see up to date content. "),Object(o.b)("p",null,"Pages created by Wave scripts are automatically synced across all users. "),Object(o.b)("p",null,"Pages created by Wave apps need to explicitly enable realtime sync. This is because apps support multiple users and multiple clients (browser tabs) by default, and, depending on the problem you're trying to solve, it's up to you to decide whether your app's UI should be synced across all users, synced across one user, or not synced at all."),Object(o.b)("p",null,"To enable realtime sync in a Wave app, pass the ",Object(o.b)("inlineCode",{parentName:"p"},"mode")," argument to ",Object(o.b)("inlineCode",{parentName:"p"},"@app()"),":"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"mode='broadcast'")," syncs across all users."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"mode='multicast'")," syncs across one user (in other words, all the clients for that user)."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"mode='unicast'")," disables sync. This is the default.")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py",metastring:"{3}","{3}":!0}),"from h2o_wave import Q, main, app, ui\n\n@app('/foo', mode='broadcast')\nasync def serve(q: Q):\n    pass\n")),Object(o.b)("p",null,"If you change the mode, make sure you store run-time state appropriate to the mode. Generally:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"th"},"mode")),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Store state in"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"broadcast")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"q.app"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"multicast")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"q.user"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"unicast")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"q.client"))))))}s.isMDXComponent=!0},298:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,m=p["".concat(c,".").concat(d)]||p[d]||u[d]||o;return n?r.a.createElement(m,l(l({ref:t},b),{},{components:n})):r.a.createElement(m,l({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var b=2;b<o;b++)c[b]=n[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);