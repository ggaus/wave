(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{298:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,f=p["".concat(s,".").concat(m)]||p[m]||b[m]||o;return n?a.a.createElement(f,i(i({ref:t},c),{},{components:n})):a.a.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},317:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/table-f4d13c60963beb31475a54192f62b47d.png"},70:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),o=(n(0),n(298)),s={title:"Table"},i={unversionedId:"examples/table",id:"examples/table",isDocsHomePage:!1,title:"Table",description:"Use a table to display tabular data.",source:"@site/docs/examples/table.md",slug:"/examples/table",permalink:"/wave/docs/examples/table",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/examples/table.md",version:"current",sidebar:"someSidebar",previous:{title:"Table / Markdown",permalink:"/wave/docs/examples/table-markdown"},next:{title:"Table / Sort",permalink:"/wave/docs/examples/table-sort"}},l=[],c={rightToc:l};function u(e){var t=e.components,s=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,s,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Use a table to display tabular data."),Object(o.b)("div",{className:"cover",style:{backgroundImage:"url("+n(317).default+")"}}),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),"import random\nfrom faker import Faker\nfrom h2o_wave import main, app, Q, ui\n\nfake = Faker()\n\n_id = 0\n\n\nclass Issue:\n    def __init__(self, text: str, status: str, progress: float, icon: str, notifications: str, created: str):\n        global _id\n        _id += 1\n        self.id = f'I{_id}'\n        self.text = text\n        self.status = status\n        self.views = 0\n        self.progress = progress\n        self.icon = icon\n        self.notifications = notifications\n        self.created = created\n\n\n# Create some issues\nissues = [\n    Issue(\n        text=fake.sentence(),\n        status=('Closed' if i % 2 == 0 else 'Open'),\n        progress=random.random(),\n        icon=('BoxCheckmarkSolid' if random.random() > 0.5 else 'BoxMultiplySolid'),\n        notifications=('Off' if random.random() > 0.5 else 'On'),\n        created=fake.iso8601()) for i in range(100)\n]\n\n# Create columns for our issue table.\ncolumns = [\n    ui.table_column(name='text', label='Issue', sortable=True, searchable=True, max_width='300'),\n    ui.table_column(name='status', label='Status', filterable=True),\n    ui.table_column(name='notifications', label='Notifications', filterable=True),\n    ui.table_column(name='done', label='Done', cell_type=ui.icon_table_cell_type()),\n    ui.table_column(name='views', label='Views', sortable=True, data_type='number'),\n    ui.table_column(name='progress', label='Progress', cell_type=ui.progress_table_cell_type()),\n    ui.table_column(name='created', label='Created', sortable=True, data_type='time'),\n]\n\n\n@app('/demo')\nasync def serve(q: Q):\n    q.page['form'] = ui.form_card(box='1 1 -1 11', items=[\n        ui.table(\n            name='issues',\n            columns=columns,\n            rows=[ui.table_row(\n                name=issue.id,\n                cells=[issue.text, issue.status, issue.notifications, issue.icon,\n                  str(issue.views), issue.progress, issue.created]\n                ) for issue in issues],\n            groupable=True,\n            downloadable=True,\n            resettable=True,\n            height='800px'\n        )\n    ])\n    await q.page.save()\n")))}u.isMDXComponent=!0}}]);