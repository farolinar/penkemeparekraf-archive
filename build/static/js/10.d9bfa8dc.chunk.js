(this["webpackJsonpweb-pen"]=this["webpackJsonpweb-pen"]||[]).push([[10],{36:function(e,t,n){"use strict";n.r(t);n(0);var o=n(38),r=n.n(o),i=(n(34),n(46)),l=n(7);t.default=function(){return Object(l.jsxs)("div",{className:"footer-wrapper",children:[Object(l.jsx)("h2",{children:"Kontak Kami"}),Object(l.jsx)("p",{children:"Hubungi kontak person dibawah ini untuk terhubung dengan kami"}),Object(l.jsx)("div",{className:"footer-contact-wrapper",children:Object(l.jsxs)("div",{className:"footer-contact",children:[Object(l.jsx)(r.a,{children:Object(l.jsx)("img",{src:i.a,alt:"email"})}),Object(l.jsx)("a",{href:"mailto:penfilm@kemenparekraf.go.id",target:"_blank",rel:"noreferrer",children:"penfilm@kemenparekraf.go.id"})]})})]})}},38:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.forceVisible=t.forceCheck=t.lazyload=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(0),i=c(r),l=c(n(9)),a=n(39),u=c(n(40)),s=c(n(41)),f=c(n(42));function c(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function v(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var h=0,m=0,b=0,y=0,A="data-lazyload-listened",g=[],w=[],E=!1;try{var k=Object.defineProperty({},"passive",{get:function(){E=!0}});window.addEventListener("test",null,k)}catch(P){}var j=!!E&&{capture:!1,passive:!0},O=function(e){var t=e.ref;if(t instanceof HTMLElement){var n=(0,u.default)(t);(e.props.overflow&&n!==t.ownerDocument&&n!==document&&n!==document.documentElement?function(e,t){var n=e.ref,o=void 0,r=void 0,i=void 0,l=void 0;try{var a=t.getBoundingClientRect();o=a.top,r=a.left,i=a.height,l=a.width}catch(P){o=h,r=m,i=y,l=b}var u=window.innerHeight||document.documentElement.clientHeight,s=window.innerWidth||document.documentElement.clientWidth,f=Math.max(o,0),c=Math.max(r,0),d=Math.min(u,o+i)-f,p=Math.min(s,r+l)-c,v=void 0,A=void 0,g=void 0,w=void 0;try{var E=n.getBoundingClientRect();v=E.top,A=E.left,g=E.height,w=E.width}catch(P){v=h,A=m,g=y,w=b}var k=v-f,j=A-c,O=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return k-O[0]<=d&&k+g+O[1]>=0&&j-O[0]<=p&&j+w+O[1]>=0}(e,n):function(e){var t=e.ref;if(!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))return!1;var n=void 0,o=void 0;try{var r=t.getBoundingClientRect();n=r.top,o=r.height}catch(P){n=h,o=y}var i=window.innerHeight||document.documentElement.clientHeight,l=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return n-l[0]<=i&&n+o+l[1]>=0}(e))?e.visible||(e.props.once&&w.push(e),e.visible=!0,e.forceUpdate()):e.props.once&&e.visible||(e.visible=!1,e.props.unmountIfInvisible&&e.forceUpdate())}},C=function(){w.forEach((function(e){var t=g.indexOf(e);-1!==t&&g.splice(t,1)})),w=[]},T=function(){for(var e=0;e<g.length;++e){var t=g[e];O(t)}C()},x=void 0,M=null,_=function(e){function t(e){d(this,t);var n=p(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.visible=!1,n.setRef=n.setRef.bind(n),n}return v(t,e),o(t,[{key:"componentDidMount",value:function(){var e=window,t=this.props.scrollContainer;t&&"string"===typeof t&&(e=e.document.querySelector(t));var n=void 0!==this.props.debounce&&"throttle"===x||"debounce"===x&&void 0===this.props.debounce;if(n&&((0,a.off)(e,"scroll",M,j),(0,a.off)(window,"resize",M,j),M=null),M||(void 0!==this.props.debounce?(M=(0,s.default)(T,"number"===typeof this.props.debounce?this.props.debounce:300),x="debounce"):void 0!==this.props.throttle?(M=(0,f.default)(T,"number"===typeof this.props.throttle?this.props.throttle:300),x="throttle"):M=T),this.props.overflow){var o=(0,u.default)(this.ref);if(o&&"function"===typeof o.getAttribute){var r=+o.getAttribute(A)+1;1===r&&o.addEventListener("scroll",M,j),o.setAttribute(A,r)}}else if(0===g.length||n){var i=this.props,l=i.scroll,c=i.resize;l&&(0,a.on)(e,"scroll",M,j),c&&(0,a.on)(window,"resize",M,j)}g.push(this),O(this)}},{key:"shouldComponentUpdate",value:function(){return this.visible}},{key:"componentWillUnmount",value:function(){if(this.props.overflow){var e=(0,u.default)(this.ref);if(e&&"function"===typeof e.getAttribute){var t=+e.getAttribute(A)-1;0===t?(e.removeEventListener("scroll",M,j),e.removeAttribute(A)):e.setAttribute(A,t)}}var n=g.indexOf(this);-1!==n&&g.splice(n,1),0===g.length&&"undefined"!==typeof window&&((0,a.off)(window,"resize",M,j),(0,a.off)(window,"scroll",M,j))}},{key:"setRef",value:function(e){e&&(this.ref=e)}},{key:"render",value:function(){var e=this.props,t=e.height,n=e.children,o=e.placeholder,r=e.className,l=e.classNamePrefix,a=e.style;return i.default.createElement("div",{className:l+"-wrapper "+r,ref:this.setRef,style:a},this.visible?n:o||i.default.createElement("div",{style:{height:t},className:l+"-placeholder"}))}}]),t}(r.Component);_.propTypes={className:l.default.string,classNamePrefix:l.default.string,once:l.default.bool,height:l.default.oneOfType([l.default.number,l.default.string]),offset:l.default.oneOfType([l.default.number,l.default.arrayOf(l.default.number)]),overflow:l.default.bool,resize:l.default.bool,scroll:l.default.bool,children:l.default.node,throttle:l.default.oneOfType([l.default.number,l.default.bool]),debounce:l.default.oneOfType([l.default.number,l.default.bool]),placeholder:l.default.node,scrollContainer:l.default.oneOfType([l.default.string,l.default.object]),unmountIfInvisible:l.default.bool,style:l.default.object},_.defaultProps={className:"",classNamePrefix:"lazyload",once:!1,offset:0,overflow:!1,resize:!1,scroll:!0,unmountIfInvisible:!1};var N=function(e){return e.displayName||e.name||"Component"};t.lazyload=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){return function(n){function r(){d(this,r);var e=p(this,(r.__proto__||Object.getPrototypeOf(r)).call(this));return e.displayName="LazyLoad"+N(t),e}return v(r,n),o(r,[{key:"render",value:function(){return i.default.createElement(_,e,i.default.createElement(t,this.props))}}]),r}(r.Component)}},t.default=_,t.forceCheck=T,t.forceVisible=function(){for(var e=0;e<g.length;++e){var t=g[e];t.visible=!0,t.forceUpdate()}C()}},39:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.on=function(e,t,n,o){o=o||!1,e.addEventListener?e.addEventListener(t,n,o):e.attachEvent&&e.attachEvent("on"+t,(function(t){n.call(e,t||window.event)}))},t.off=function(e,t,n,o){o=o||!1,e.removeEventListener?e.removeEventListener(t,n,o):e.detachEvent&&e.detachEvent("on"+t,n)}},40:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!(e instanceof HTMLElement))return document.documentElement;for(var t="absolute"===e.style.position,n=/(scroll|auto)/,o=e;o;){if(!o.parentNode)return e.ownerDocument||document.documentElement;var r=window.getComputedStyle(o),i=r.position,l=r.overflow,a=r["overflow-x"],u=r["overflow-y"];if("static"===i&&t)o=o.parentNode;else{if(n.test(l)&&n.test(a)&&n.test(u))return o;o=o.parentNode}}return e.ownerDocument||e.documentElement||document.documentElement}},41:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var o=void 0,r=void 0,i=void 0,l=void 0,a=void 0,u=function u(){var s=+new Date-l;s<t&&s>=0?o=setTimeout(u,t-s):(o=null,n||(a=e.apply(i,r),o||(i=null,r=null)))};return function(){i=this,r=arguments,l=+new Date;var s=n&&!o;return o||(o=setTimeout(u,t)),s&&(a=e.apply(i,r),i=null,r=null),a}}},42:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var o,r;return t||(t=250),function(){var i=n||this,l=+new Date,a=arguments;o&&l<o+t?(clearTimeout(r),r=setTimeout((function(){o=l,e.apply(i,a)}),t)):(o=l,e.apply(i,a))}}},46:function(e,t,n){"use strict";t.a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAgCAMAAAC4saEMAAAAAXNSR0IB2cksfwAAAMZQTFRFAAAA////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////w08d2gAAAEJ0Uk5TABCA2Pz/K+Dh69CCxgra+bAD6VL9lmt5h14Bo/pGBrvyMA/mHxrXEinvxAkqPfisVJFvdYxdjaiDFr32pTud7Dzk95PFgQAAAUlJREFUeJzV1Nd2gkAQBuAf4bdr7AUVC5aoscdYokbf/6UyoCeKAnqbueAM7MeybBkASkDV6BeaGlAgEQz5snOEgtJjWJJI1C8iIsIKYtYr8QS8IxG3SAxJ8o1MpT1hOmWLJDRmsjky7ynzZC6boQYZLQrSe9EDFqWtAPlrW6Ikt2VXWJaWEq5Sr5DVmgusVcmKfiNh1MlG8wE2G2TdwK1EK0qa7TvYNsloC06JjqxAt+eAva7MeAf3Eu99cjC8gcMB2f/Ao8RoTE6uK5CekOMR3CSmsgKzPzmTGZ/CXWIuk7e45AvJ5/CS+JTmpZ0tJfuCt9RX8sn1Bpu1DGSl+0gYW2uHfVuXrQE/icTusst3ji3rIoH9Qf1RD3vnQ1fpGv9Jyol7QVonTk7x8Sk8WqdYKsPpGT2erMpgVxvTt9qY52rzegV7uSr+Ak19G6xvoefuAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=10.d9bfa8dc.chunk.js.map