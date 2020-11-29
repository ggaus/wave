(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{180:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return i})),a.d(n,"metadata",(function(){return l})),a.d(n,"rightToc",(function(){return c})),a.d(n,"default",(function(){return s}));var t=a(2),r=a(6),o=(a(0),a(298)),i={title:"Form"},l={unversionedId:"examples/form",id:"examples/form",isDocsHomePage:!1,title:"Form",description:"Use a form to collect data or show textual information.",source:"@site/docs/examples/form.md",slug:"/examples/form",permalink:"/wave/docs/examples/form",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/examples/form.md",version:"current",sidebar:"someSidebar",previous:{title:"Layout / Responsive",permalink:"/wave/docs/examples/layout-responsive"},next:{title:"Form / Text",permalink:"/wave/docs/examples/text"}},c=[],u={rightToc:c};function s(e){var n=e.components,i=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},u,i,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Use a form to collect data or show textual information."),Object(o.b)("div",{className:"cover",style:{backgroundImage:"url("+a(395).default+")"}}),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-py"}),"from synth import FakeCategoricalSeries\nfrom h2o_wave import main, app, Q, ui, pack, data\nimport random\n\nhtml = '''\n<ol>\n    <li>Spam</li>\n    <li>Ham</li>\n    <li>Eggs</li>\n</ol>\n'''\nmenu = '''\n<ol>\n{{#each dishes}}\n<li><strong>{{name}}</strong> costs {{price}}</li>\n{{/each}}\n</ol\n'''\nspec = '''\n{\n  \"description\": \"A simple bar plot with embedded data.\",\n  \"mark\": \"bar\",\n  \"encoding\": {\n    \"x\": {\"field\": \"a\", \"type\": \"ordinal\"},\n    \"y\": {\"field\": \"b\", \"type\": \"quantitative\"}\n  }\n}\n'''\nf = FakeCategoricalSeries()\nn = 20\n\n\n# Generate random datum between 1 and 100\ndef rnd(): return random.randint(1, 100)\n\n\n@app('/demo')\nasync def serve(q: Q):\n    q.page['example'] = ui.form_card(box='1 1 4 10', items=[\n        ui.text_xl(content='Extra-large text, for headings.'),\n        ui.text_l(content='Large text, for sub-headings.'),\n        ui.text_m(content='Body text, for paragraphs and other content.'),\n        ui.text_s(content='Small text, for small print.'),\n        ui.text_xs(content='Extra-small text, for really small print.'),\n        ui.separator(label='A separator sections forms'),\n        ui.progress(label='A progress bar'),\n        ui.progress(label='A progress bar'),\n        ui.message_bar(type='success', text='Message bar'),\n        ui.textbox(name='textbox', label='Textbox'),\n        ui.label(label='Checkboxes'),\n        ui.checkbox(name='checkbox1', label='A checkbox'),\n        ui.checkbox(name='checkbox1', label='Another checkbox'),\n        ui.checkbox(name='checkbox1', label='Yet another checkbox'),\n        ui.toggle(name='toggle', label='Toggle'),\n        ui.choice_group(name='choice_group', label='Choice group', choices=[\n            ui.choice(name=x, label=x) for x in ['Egg', 'Bacon', 'Spam']\n        ]),\n        ui.checklist(name='checklist', label='Checklist', choices=[\n            ui.choice(name=x, label=x) for x in ['Egg', 'Bacon', 'Spam']\n        ]),\n        ui.dropdown(name='dropdown', label='Dropdown', choices=[\n            ui.choice(name=x, label=x) for x in ['Egg', 'Bacon', 'Spam']\n        ]),\n        ui.dropdown(name='dropdown', label='Multi-valued Dropdown', values=[], choices=[\n            ui.choice(name=x, label=x) for x in ['Egg', 'Bacon', 'Spam']\n        ]),\n        ui.combobox(name='combobox', label='Combobox', choices=['Choice 1', 'Choice 2', 'Choice 3']),\n        ui.slider(name='slider', label='Slider'),\n        ui.range_slider(name='range_slider', label='Range slider', max=99),\n        ui.spinbox(name='spinbox', label='Spinbox'),\n        ui.date_picker(name='date_picker', label='Date picker'),\n        ui.color_picker(name='color_picker', label='Color picker'),\n        ui.buttons([\n            ui.button(name='primary_button', label='Primary', primary=True),\n            ui.button(name='standard_button', label='Standard'),\n            ui.button(name='standard_disabled_button', label='Standard', disabled=True),\n        ]),\n        ui.file_upload(name='file_upload', label='File upload'),\n        ui.table(name='table', columns=[\n            ui.table_column(name='col1', label='Column 1'),\n            ui.table_column(name='col2', label='Column 2'),\n        ], rows=[\n            ui.table_row(name='row1', cells=['Text A', 'Text B']),\n            ui.table_row(name='row2', cells=['Text C', 'Text D']),\n            ui.table_row(name='row3', cells=['Text E', 'Text F']),\n        ]),\n        ui.link(label='Link'),\n        ui.tabs(name='tabs', items=[\n            ui.tab(name='email', label='Mail', icon='Mail'),\n            ui.tab(name='events', label='Events', icon='Calendar'),\n            ui.tab(name='spam', label='Spam'),\n        ]),\n        ui.expander(name='expander', label='Expander'),\n        ui.frame(path='https://example.com'),\n        ui.markup(content=html),\n        ui.template(\n            content=menu,\n            data=pack(dict(dishes=[\n                dict(name='Spam', price='$2.00'),\n                dict(name='Ham', price='$3.45'),\n                dict(name='Eggs', price='$1.75'),\n            ]))\n        ),\n        ui.picker(name='picker', label='Picker', choices=[\n            ui.choice('choice1', label='Choice 1'),\n            ui.choice('choice2', label='Choice 2'),\n            ui.choice('choice3', label='Choice 3'),\n        ]),\n        ui.stepper(name='stepper', items=[\n            ui.step(label='Step 1', icon='MailLowImportance'),\n            ui.step(label='Step 2', icon='TaskManagerMirrored'),\n            ui.step(label='Step 3', icon='Cafe'),\n        ]),\n        ui.visualization(\n            plot=ui.plot([ui.mark(type='interval', x='=product', y='=price', y_min=0)]),\n            data=data(fields='product price', rows=[(c, x) for c, x, _ in [f.next() for _ in range(n)]], pack=True),\n        ),\n        ui.vega_visualization(\n            specification=spec,\n            data=data(fields=[\"a\", \"b\"], rows=[\n                [\"A\", rnd()], [\"B\", rnd()], [\"C\", rnd()],\n                [\"D\", rnd()], [\"E\", rnd()], [\"F\", rnd()],\n                [\"G\", rnd()], [\"H\", rnd()], [\"I\", rnd()]\n            ], pack=True),\n        ),\n        ui.button(name='show_inputs', label='Submit', primary=True),\n    ])\n    await q.page.save()\n")))}s.isMDXComponent=!0},298:function(e,n,a){"use strict";a.d(n,"a",(function(){return p})),a.d(n,"b",(function(){return d}));var t=a(0),r=a.n(t);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function c(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=r.a.createContext({}),s=function(e){var n=r.a.useContext(u),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},p=function(e){var n=s(e.components);return r.a.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var a=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(a),b=t,d=p["".concat(i,".").concat(b)]||p[b]||m[b]||o;return a?r.a.createElement(d,l(l({ref:n},u),{},{components:a})):r.a.createElement(d,l({ref:n},u))}));function d(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=a.length,i=new Array(o);i[0]=b;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:t,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},395:function(e,n,a){"use strict";a.r(n),n.default=a.p+"assets/images/form-b0f5fccd418b3d5e40f559cf1d60cb46.png"}}]);