(this["webpackJsonpweb-pen"]=this["webpackJsonpweb-pen"]||[]).push([[10,22],{102:function(e,t,n){},155:function(e,t,n){"use strict";n.r(t);n(0),n(44);var o=n(40),r=n.p+"static/media/about-us-text.e20a1a6f.png",i=n.p+"static/media/about-us-hero.b5590115.jpg",a=n.p+"static/media/about-us-selection-clean.57caa182.png",l=(n(102),n(1));t.default=function(){return Object(l.jsxs)(o.default,{children:[Object(l.jsxs)("div",{className:"about-us-main-wrapper",children:[Object(l.jsx)("h2",{children:"Tentang Kami"}),Object(l.jsxs)("div",{className:"about-us-content",children:[Object(l.jsx)("div",{children:Object(l.jsx)("img",{src:r,alt:"about-us"})}),Object(l.jsx)("div",{className:"lazyload-wrapper",children:Object(l.jsx)("img",{src:i,alt:"about-us"})})]})]}),Object(l.jsxs)("div",{className:"about-us-selection-wrapper",children:[Object(l.jsx)("div",{className:"about-us-bg-filter"}),Object(l.jsx)("h2",{children:"Alur Seleksi Proposal Program PEN Film"}),Object(l.jsx)("div",{className:"about-us-selection-content-wrapper",children:Object(l.jsx)("div",{className:"about-us-selection-content",children:Object(l.jsx)("div",{className:"lazyload-wrapper",children:Object(l.jsx)("img",{src:a,alt:"about-us"})})})})]})]})}},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var o=n(0),r=(n(39),n(1)),i=Object(o.lazy)((function(){return n.e(23).then(n.bind(null,42))})),a=Object(o.lazy)((function(){return n.e(14).then(n.bind(null,41))}));t.default=function(e){return Object(r.jsxs)("div",{className:"app",children:[Object(r.jsx)(i,{}),e.children,!e.withoutFooter&&Object(r.jsx)(a,{})]})}},44:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.forceVisible=t.forceCheck=t.lazyload=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(0),i=f(r),a=f(n(8)),l=n(45),s=f(n(46)),u=f(n(47)),c=f(n(48));function f(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function v(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var h=0,b=0,m=0,y=0,w="data-lazyload-listened",j=[],g=[],O=!1;try{var E=Object.defineProperty({},"passive",{get:function(){O=!0}});window.addEventListener("test",null,E)}catch(k){}var x=!!O&&{capture:!1,passive:!0},_=function(e){var t=e.ref;if(t instanceof HTMLElement){var n=(0,s.default)(t);(e.props.overflow&&n!==t.ownerDocument&&n!==document&&n!==document.documentElement?function(e,t){var n=e.ref,o=void 0,r=void 0,i=void 0,a=void 0;try{var l=t.getBoundingClientRect();o=l.top,r=l.left,i=l.height,a=l.width}catch(k){o=h,r=b,i=y,a=m}var s=window.innerHeight||document.documentElement.clientHeight,u=window.innerWidth||document.documentElement.clientWidth,c=Math.max(o,0),f=Math.max(r,0),d=Math.min(s,o+i)-c,p=Math.min(u,r+a)-f,v=void 0,w=void 0,j=void 0,g=void 0;try{var O=n.getBoundingClientRect();v=O.top,w=O.left,j=O.height,g=O.width}catch(k){v=h,w=b,j=y,g=m}var E=v-c,x=w-f,_=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return E-_[0]<=d&&E+j+_[1]>=0&&x-_[0]<=p&&x+g+_[1]>=0}(e,n):function(e){var t=e.ref;if(!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))return!1;var n=void 0,o=void 0;try{var r=t.getBoundingClientRect();n=r.top,o=r.height}catch(k){n=h,o=y}var i=window.innerHeight||document.documentElement.clientHeight,a=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return n-a[0]<=i&&n+o+a[1]>=0}(e))?e.visible||(e.props.once&&g.push(e),e.visible=!0,e.forceUpdate()):e.props.once&&e.visible||(e.visible=!1,e.props.unmountIfInvisible&&e.forceUpdate())}},N=function(){g.forEach((function(e){var t=j.indexOf(e);-1!==t&&j.splice(t,1)})),g=[]},P=function(){for(var e=0;e<j.length;++e){var t=j[e];_(t)}N()},z=void 0,T=null,C=function(e){function t(e){d(this,t);var n=p(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.visible=!1,n.setRef=n.setRef.bind(n),n}return v(t,e),o(t,[{key:"componentDidMount",value:function(){var e=window,t=this.props.scrollContainer;t&&"string"===typeof t&&(e=e.document.querySelector(t));var n=void 0!==this.props.debounce&&"throttle"===z||"debounce"===z&&void 0===this.props.debounce;if(n&&((0,l.off)(e,"scroll",T,x),(0,l.off)(window,"resize",T,x),T=null),T||(void 0!==this.props.debounce?(T=(0,u.default)(P,"number"===typeof this.props.debounce?this.props.debounce:300),z="debounce"):void 0!==this.props.throttle?(T=(0,c.default)(P,"number"===typeof this.props.throttle?this.props.throttle:300),z="throttle"):T=P),this.props.overflow){var o=(0,s.default)(this.ref);if(o&&"function"===typeof o.getAttribute){var r=+o.getAttribute(w)+1;1===r&&o.addEventListener("scroll",T,x),o.setAttribute(w,r)}}else if(0===j.length||n){var i=this.props,a=i.scroll,f=i.resize;a&&(0,l.on)(e,"scroll",T,x),f&&(0,l.on)(window,"resize",T,x)}j.push(this),_(this)}},{key:"shouldComponentUpdate",value:function(){return this.visible}},{key:"componentWillUnmount",value:function(){if(this.props.overflow){var e=(0,s.default)(this.ref);if(e&&"function"===typeof e.getAttribute){var t=+e.getAttribute(w)-1;0===t?(e.removeEventListener("scroll",T,x),e.removeAttribute(w)):e.setAttribute(w,t)}}var n=j.indexOf(this);-1!==n&&j.splice(n,1),0===j.length&&"undefined"!==typeof window&&((0,l.off)(window,"resize",T,x),(0,l.off)(window,"scroll",T,x))}},{key:"setRef",value:function(e){e&&(this.ref=e)}},{key:"render",value:function(){var e=this.props,t=e.height,n=e.children,o=e.placeholder,r=e.className,a=e.classNamePrefix,l=e.style;return i.default.createElement("div",{className:a+"-wrapper "+r,ref:this.setRef,style:l},this.visible?n:o||i.default.createElement("div",{style:{height:t},className:a+"-placeholder"}))}}]),t}(r.Component);C.propTypes={className:a.default.string,classNamePrefix:a.default.string,once:a.default.bool,height:a.default.oneOfType([a.default.number,a.default.string]),offset:a.default.oneOfType([a.default.number,a.default.arrayOf(a.default.number)]),overflow:a.default.bool,resize:a.default.bool,scroll:a.default.bool,children:a.default.node,throttle:a.default.oneOfType([a.default.number,a.default.bool]),debounce:a.default.oneOfType([a.default.number,a.default.bool]),placeholder:a.default.node,scrollContainer:a.default.oneOfType([a.default.string,a.default.object]),unmountIfInvisible:a.default.bool,style:a.default.object},C.defaultProps={className:"",classNamePrefix:"lazyload",once:!1,offset:0,overflow:!1,resize:!1,scroll:!0,unmountIfInvisible:!1};var M=function(e){return e.displayName||e.name||"Component"};t.lazyload=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){return function(n){function r(){d(this,r);var e=p(this,(r.__proto__||Object.getPrototypeOf(r)).call(this));return e.displayName="LazyLoad"+M(t),e}return v(r,n),o(r,[{key:"render",value:function(){return i.default.createElement(C,e,i.default.createElement(t,this.props))}}]),r}(r.Component)}},t.default=C,t.forceCheck=P,t.forceVisible=function(){for(var e=0;e<j.length;++e){var t=j[e];t.visible=!0,t.forceUpdate()}N()}},45:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.on=function(e,t,n,o){o=o||!1,e.addEventListener?e.addEventListener(t,n,o):e.attachEvent&&e.attachEvent("on"+t,(function(t){n.call(e,t||window.event)}))},t.off=function(e,t,n,o){o=o||!1,e.removeEventListener?e.removeEventListener(t,n,o):e.detachEvent&&e.detachEvent("on"+t,n)}},46:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!(e instanceof HTMLElement))return document.documentElement;for(var t="absolute"===e.style.position,n=/(scroll|auto)/,o=e;o;){if(!o.parentNode)return e.ownerDocument||document.documentElement;var r=window.getComputedStyle(o),i=r.position,a=r.overflow,l=r["overflow-x"],s=r["overflow-y"];if("static"===i&&t)o=o.parentNode;else{if(n.test(a)&&n.test(l)&&n.test(s))return o;o=o.parentNode}}return e.ownerDocument||e.documentElement||document.documentElement}},47:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var o=void 0,r=void 0,i=void 0,a=void 0,l=void 0,s=function s(){var u=+new Date-a;u<t&&u>=0?o=setTimeout(s,t-u):(o=null,n||(l=e.apply(i,r),o||(i=null,r=null)))};return function(){i=this,r=arguments,a=+new Date;var u=n&&!o;return o||(o=setTimeout(s,t)),u&&(l=e.apply(i,r),i=null,r=null),l}}},48:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var o,r;return t||(t=250),function(){var i=n||this,a=+new Date,l=arguments;o&&a<o+t?(clearTimeout(r),r=setTimeout((function(){o=a,e.apply(i,l)}),t)):(o=a,e.apply(i,l))}}}}]);
//# sourceMappingURL=10.583be3a9.chunk.js.map