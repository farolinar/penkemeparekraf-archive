(this["webpackJsonpweb-pen"]=this["webpackJsonpweb-pen"]||[]).push([[8],{38:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.forceVisible=t.forceCheck=t.lazyload=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),i=d(a),o=d(n(9)),s=n(39),l=d(n(40)),c=d(n(41)),u=d(n(42));function d(e){return e&&e.__esModule?e:{default:e}}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function h(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var m=0,b=0,v=0,j=0,g="data-lazyload-listened",y=[],O=[],w=!1;try{var x=Object.defineProperty({},"passive",{get:function(){w=!0}});window.addEventListener("test",null,x)}catch(I){}var k=!!w&&{capture:!1,passive:!0},P=function(e){var t=e.ref;if(t instanceof HTMLElement){var n=(0,l.default)(t);(e.props.overflow&&n!==t.ownerDocument&&n!==document&&n!==document.documentElement?function(e,t){var n=e.ref,r=void 0,a=void 0,i=void 0,o=void 0;try{var s=t.getBoundingClientRect();r=s.top,a=s.left,i=s.height,o=s.width}catch(I){r=m,a=b,i=j,o=v}var l=window.innerHeight||document.documentElement.clientHeight,c=window.innerWidth||document.documentElement.clientWidth,u=Math.max(r,0),d=Math.max(a,0),f=Math.min(l,r+i)-u,p=Math.min(c,a+o)-d,h=void 0,g=void 0,y=void 0,O=void 0;try{var w=n.getBoundingClientRect();h=w.top,g=w.left,y=w.height,O=w.width}catch(I){h=m,g=b,y=j,O=v}var x=h-u,k=g-d,P=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return x-P[0]<=f&&x+y+P[1]>=0&&k-P[0]<=p&&k+O+P[1]>=0}(e,n):function(e){var t=e.ref;if(!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))return!1;var n=void 0,r=void 0;try{var a=t.getBoundingClientRect();n=a.top,r=a.height}catch(I){n=m,r=j}var i=window.innerHeight||document.documentElement.clientHeight,o=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return n-o[0]<=i&&n+r+o[1]>=0}(e))?e.visible||(e.props.once&&O.push(e),e.visible=!0,e.forceUpdate()):e.props.once&&e.visible||(e.visible=!1,e.props.unmountIfInvisible&&e.forceUpdate())}},E=function(){O.forEach((function(e){var t=y.indexOf(e);-1!==t&&y.splice(t,1)})),O=[]},N=function(){for(var e=0;e<y.length;++e){var t=y[e];P(t)}E()},_=void 0,T=null,C=function(e){function t(e){f(this,t);var n=p(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.visible=!1,n.setRef=n.setRef.bind(n),n}return h(t,e),r(t,[{key:"componentDidMount",value:function(){var e=window,t=this.props.scrollContainer;t&&"string"===typeof t&&(e=e.document.querySelector(t));var n=void 0!==this.props.debounce&&"throttle"===_||"debounce"===_&&void 0===this.props.debounce;if(n&&((0,s.off)(e,"scroll",T,k),(0,s.off)(window,"resize",T,k),T=null),T||(void 0!==this.props.debounce?(T=(0,c.default)(N,"number"===typeof this.props.debounce?this.props.debounce:300),_="debounce"):void 0!==this.props.throttle?(T=(0,u.default)(N,"number"===typeof this.props.throttle?this.props.throttle:300),_="throttle"):T=N),this.props.overflow){var r=(0,l.default)(this.ref);if(r&&"function"===typeof r.getAttribute){var a=+r.getAttribute(g)+1;1===a&&r.addEventListener("scroll",T,k),r.setAttribute(g,a)}}else if(0===y.length||n){var i=this.props,o=i.scroll,d=i.resize;o&&(0,s.on)(e,"scroll",T,k),d&&(0,s.on)(window,"resize",T,k)}y.push(this),P(this)}},{key:"shouldComponentUpdate",value:function(){return this.visible}},{key:"componentWillUnmount",value:function(){if(this.props.overflow){var e=(0,l.default)(this.ref);if(e&&"function"===typeof e.getAttribute){var t=+e.getAttribute(g)-1;0===t?(e.removeEventListener("scroll",T,k),e.removeAttribute(g)):e.setAttribute(g,t)}}var n=y.indexOf(this);-1!==n&&y.splice(n,1),0===y.length&&"undefined"!==typeof window&&((0,s.off)(window,"resize",T,k),(0,s.off)(window,"scroll",T,k))}},{key:"setRef",value:function(e){e&&(this.ref=e)}},{key:"render",value:function(){var e=this.props,t=e.height,n=e.children,r=e.placeholder,a=e.className,o=e.classNamePrefix,s=e.style;return i.default.createElement("div",{className:o+"-wrapper "+a,ref:this.setRef,style:s},this.visible?n:r||i.default.createElement("div",{style:{height:t},className:o+"-placeholder"}))}}]),t}(a.Component);C.propTypes={className:o.default.string,classNamePrefix:o.default.string,once:o.default.bool,height:o.default.oneOfType([o.default.number,o.default.string]),offset:o.default.oneOfType([o.default.number,o.default.arrayOf(o.default.number)]),overflow:o.default.bool,resize:o.default.bool,scroll:o.default.bool,children:o.default.node,throttle:o.default.oneOfType([o.default.number,o.default.bool]),debounce:o.default.oneOfType([o.default.number,o.default.bool]),placeholder:o.default.node,scrollContainer:o.default.oneOfType([o.default.string,o.default.object]),unmountIfInvisible:o.default.bool,style:o.default.object},C.defaultProps={className:"",classNamePrefix:"lazyload",once:!1,offset:0,overflow:!1,resize:!1,scroll:!0,unmountIfInvisible:!1};var z=function(e){return e.displayName||e.name||"Component"};t.lazyload=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){return function(n){function a(){f(this,a);var e=p(this,(a.__proto__||Object.getPrototypeOf(a)).call(this));return e.displayName="LazyLoad"+z(t),e}return h(a,n),r(a,[{key:"render",value:function(){return i.default.createElement(C,e,i.default.createElement(t,this.props))}}]),a}(a.Component)}},t.default=C,t.forceCheck=N,t.forceVisible=function(){for(var e=0;e<y.length;++e){var t=y[e];t.visible=!0,t.forceUpdate()}E()}},39:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.on=function(e,t,n,r){r=r||!1,e.addEventListener?e.addEventListener(t,n,r):e.attachEvent&&e.attachEvent("on"+t,(function(t){n.call(e,t||window.event)}))},t.off=function(e,t,n,r){r=r||!1,e.removeEventListener?e.removeEventListener(t,n,r):e.detachEvent&&e.detachEvent("on"+t,n)}},40:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!(e instanceof HTMLElement))return document.documentElement;for(var t="absolute"===e.style.position,n=/(scroll|auto)/,r=e;r;){if(!r.parentNode)return e.ownerDocument||document.documentElement;var a=window.getComputedStyle(r),i=a.position,o=a.overflow,s=a["overflow-x"],l=a["overflow-y"];if("static"===i&&t)r=r.parentNode;else{if(n.test(o)&&n.test(s)&&n.test(l))return r;r=r.parentNode}}return e.ownerDocument||e.documentElement||document.documentElement}},41:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var r=void 0,a=void 0,i=void 0,o=void 0,s=void 0,l=function l(){var c=+new Date-o;c<t&&c>=0?r=setTimeout(l,t-c):(r=null,n||(s=e.apply(i,a),r||(i=null,a=null)))};return function(){i=this,a=arguments,o=+new Date;var c=n&&!r;return r||(r=setTimeout(l,t)),c&&(s=e.apply(i,a),i=null,a=null),s}}},42:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var r,a;return t||(t=250),function(){var i=n||this,o=+new Date,s=arguments;r&&o<r+t?(clearTimeout(a),a=setTimeout((function(){r=o,e.apply(i,s)}),t)):(r=o,e.apply(i,s))}}},45:function(e,t,n){"use strict";t.a=n.p+"static/media/program-tactical-hero.6ab072b3.png"},53:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(38),i=n.n(a),o=n.p+"static/media/highlight-1.dfca6dbb.jpg",s=n.p+"static/media/highlight-2.d433767e.jpg",l=n.p+"static/media/highlight-3.4cddc23d.jpg",c=n.p+"static/media/highlight-4.e2756de6.jpg",u=n.p+"static/media/about-us-shape.11cd09f0.png",d=n.p+"static/media/about-us-hero.409f73e8.png",f=n(45),p=(n(53),n(6)),h=n(7),m=Object(r.lazy)((function(){return n.e(17).then(n.bind(null,35))})),b=Object(r.lazy)((function(){return Promise.all([n.e(4),n.e(16)]).then(n.bind(null,77))})),v=[{src:o,name:"highlight-one"},{src:s,name:"highlight-two"},{src:l,name:"highlight-three"},{src:c,name:"highlight-four"}];t.default=function(e){return Object(h.jsxs)(m,{children:[Object(h.jsxs)("div",{className:"home-image-carousel-wrapper",children:[Object(h.jsx)(b,{children:v.map((function(e,t){return Object(h.jsxs)("div",{style:{position:"relative"},className:"carousel-image-wrapper",children:[Object(h.jsx)("img",{src:e.src,alt:e.name}),Object(h.jsx)("div",{style:{width:"100%",height:"100%",backgroundColor:"#000",opacity:"0.3",zIndex:1,position:"absolute",top:0,left:0}})]},"highlight-".concat(t))}))}),Object(h.jsxs)("div",{className:"home-title-wrapper",children:[Object(h.jsxs)("h1",{children:["Program ",Object(h.jsx)("br",{})," Pemulihan Ekonomi Nasional"]}),Object(h.jsx)("h2",{children:"Subsektor Film"}),Object(h.jsx)("div",{className:"home-subtitle-wrapper",children:Object(h.jsxs)("p",{children:["Kementerian Pariwisata & Ekonomi Kreatif / ",Object(h.jsx)("br",{})," Badan Pariwisata & Ekonomi Kreatif "]})})]})]}),Object(h.jsxs)("div",{className:"home-about-us-wrapper",children:[Object(h.jsx)(i.a,{children:Object(h.jsx)("img",{className:"home-about-us-upper-divider",src:u,alt:""})}),Object(h.jsxs)("div",{className:"home-about-us-content",children:[Object(h.jsx)("div",{}),Object(h.jsxs)("div",{className:"home-about-us-text",children:[Object(h.jsx)("h3",{children:"Tentang Kami"}),Object(h.jsx)("p",{children:"Program Pemulihan Ekonomi Nasional (Program PEN) adalah rangkaian kegiatan untuk pemulihan perekonomian nasional yang merupakan bagian dari kebijakan keuangan negara yang dilaksanakan oleh Pemerintah untuk mempercepat penanganan pandemi Coronavirus Disease 2019 (COVID-19)."}),Object(h.jsx)("button",{onClick:function(){return window.location.href=p.b.aboutUs},className:"green-button",children:"Selengkapnya"})]}),Object(h.jsx)("div",{}),Object(h.jsx)(i.a,{children:Object(h.jsx)("img",{src:d,alt:"about-us"})}),Object(h.jsx)("div",{})]})]}),Object(h.jsx)("div",{className:"home-our-program-wrapper",children:Object(h.jsx)("div",{className:"home-our-program-content",children:Object(h.jsxs)("div",{className:"our-program-content-new",children:[Object(h.jsx)(i.a,{children:Object(h.jsx)("img",{src:f.a,alt:"program-kami"})}),Object(h.jsxs)("div",{className:"our-program-content-text",children:[Object(h.jsx)("h2",{children:"Program Kami"}),Object(h.jsx)("h3",{children:"Bantuan Pemerintah Promosi Taktikal Film Indonesia"}),Object(h.jsx)("p",{children:"Bertujuan untuk meningkatkan awareness masyarakat untuk tetap mendukung kemajuan dan pengembangan industri perfilman Indonesia melalui kegiatan promosi Film Indonesia Siap Tayang yang telah memiliki jadwal tayang di media penayangan multiplatform legal pada jangka waktu Oktober - November 2021."}),Object(h.jsx)("button",{children:Object(h.jsx)("a",{href:p.b.program,children:"Selengkapnya"})})]})]})})}),Object(h.jsx)("div",{className:"home-register-wrapper",children:Object(h.jsxs)("div",{className:"home-register-content",children:[Object(h.jsx)("h2",{children:"Pendaftaran"}),Object(h.jsx)("p",{children:"Undangan bagi Rumah Produksi Film Indonesia untuk berpartisipasi dan mendaftar dalam program Pemulihan Ekonomi Nasional (PEN) Subsektor Film melalui Skema Bantuan Pemerintah Promosi Taktikal Film Indonesia dan Skema Bantuan Pemerintah Produksi Film Indonesia"}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("p",{children:"Pendaftaran akan berlangsung mulai"}),Object(h.jsx)("p",{children:"17 - 27 September 2021"}),Object(h.jsxs)("div",{className:"home-register-button",children:[Object(h.jsx)("button",{children:Object(h.jsx)("a",{href:p.b.registerTerms,children:"Syarat Pendaftaran"})}),Object(h.jsx)("button",{children:Object(h.jsx)("a",{href:p.b.downloadForm,children:"Unduh Formulir"})}),Object(h.jsx)("button",{children:Object(h.jsx)("a",{href:p.b.uploadForm,children:"Unggah Formulir"})})]})]})})]})}}}]);
//# sourceMappingURL=8.e27c9e15.chunk.js.map