// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(e){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,i=n.__defineSetter__,u=n.__lookupGetter__,l=n.__lookupSetter__,f=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var f,c,_,p;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(u.call(e,r)||l.call(e,r)?(f=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=f):e[r]=t.value),_="get"in t,p="set"in t,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&a&&a.call(e,r,t.get),p&&i&&i.call(e,r,t.set),e};function c(e,r,t){f(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function _(e,r,t,n,o,a){var i,u,l;if(e<=0)return n;for(i=t<0?(1-e)*t:0,u=o<0?(1-e)*o:0,l=0;l<e;l++)n[u]=a(r[i]),i+=t,u+=o;return n}function p(e,r,t,n,o,a,i,u){var l,f,c;if(e<=0)return o;for(l=n,f=i,c=0;c<e;c++)o[f]=u(r[l]),l+=t,f+=a;return o}c(_,"ndarray",p);var d=Math.floor;function y(e,r,t,n,o){return _(e,r,t,n,o,d)}function s(e,r,t,n,o,a,i){return p(e,r,t,n,o,a,i,d)}c(y,"ndarray",s),e.default=y,e.ndarray=s,Object.defineProperty(e,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((e="undefined"!=typeof globalThis?globalThis:e||self).sfloor={});
//# sourceMappingURL=browser.js.map
