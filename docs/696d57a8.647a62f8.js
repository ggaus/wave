(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{160:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),o=(n(0),n(298)),p={title:"Plot / App"},c={unversionedId:"examples/plot-app",id:"examples/plot-app",isDocsHomePage:!1,title:"Plot / App",description:"Make a plot from an app.",source:"@site/docs/examples/plot-app.md",slug:"/examples/plot-app",permalink:"/wave/docs/examples/plot-app",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/examples/plot-app.md",version:"current",sidebar:"someSidebar",previous:{title:"Plot / Form",permalink:"/wave/docs/examples/plot-form"},next:{title:"Plot / Events",permalink:"/wave/docs/examples/plot-events"}},i=[],l={rightToc:i};function u(e){var t=e.components,p=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,p,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Make a plot from an app."),Object(o.b)("div",{className:"cover",style:{backgroundImage:"url("+n(378).default+")"}}),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),"from .synth import FakeMultiCategoricalSeries as F\nfrom h2o_wave import main, app, data, Q, ui\n\nn = 10\nk = 5\nf = F(groups=k)\nvalues = [(g, t, x) for x in [f.next() for _ in range(n)] for g, t, x, dx in x]\n\n\n@app('/demo')\nasync def serve(q: Q):\n    v = q.page.add('example', ui.plot_card(\n        box='1 1 4 6',\n        title='Intervals, stacked',\n        data=data('country product price', n * k),\n        plot=ui.plot([ui.mark(\n            coord='rect',\n            type='interval',\n            x='=product',\n            y='=price',\n            y_min=0,\n            color='=country',\n            stack='auto',\n        )]),\n    ))\n    v.data = values\n    await q.page.save()\n")))}u.isMDXComponent=!0},298:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),s=u(n),m=r,d=s["".concat(p,".").concat(m)]||s[m]||f[m]||o;return n?a.a.createElement(d,c(c({ref:t},l),{},{components:n})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,p[1]=c;for(var l=2;l<o;l++)p[l]=n[l];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},378:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/plot-app-6a492804251cf9ef3fcd33cf721b725f.png"}}]);