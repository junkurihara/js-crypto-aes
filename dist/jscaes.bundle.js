!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("crypto")):"function"==typeof define&&define.amd?define(["crypto"],e):"object"==typeof exports?exports.jscaes=e(require("crypto")):t.jscaes=e(t.crypto)}(this,function(t){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/Users/jun/ProjectJavaScript/js_crypto_aes/dist",r(r.s=2)}([function(t,e,r){t.exports=r(3)},function(t,e){function r(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}t.exports=function(t){return function(){var e=this,n=arguments;return new Promise(function(o,i){var a=t.apply(e,n);function c(t){r(a,o,i,c,u,"next",t)}function u(t){r(a,o,i,c,u,"throw",t)}c(void 0)})}}},function(t,e,r){t.exports=r(6)},function(t,e,r){var n=function(){return this||"object"==typeof self&&self}()||Function("return this")(),o=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,i=o&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=r(4),o)n.regeneratorRuntime=i;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}},function(t,e){!function(e){"use strict";var r,n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag",s="object"==typeof t,f=e.regeneratorRuntime;if(f)s&&(t.exports=f);else{(f=e.regeneratorRuntime=s?t.exports:{}).wrap=x;var h="suspendedStart",p="suspendedYield",l="executing",y="completed",g={},d={};d[a]=function(){return this};var v=Object.getPrototypeOf,w=v&&v(v(U([])));w&&w!==n&&o.call(w,a)&&(d=w);var m=j.prototype=L.prototype=Object.create(d);E.prototype=m.constructor=j,j.constructor=E,j[u]=E.displayName="GeneratorFunction",f.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===E||"GeneratorFunction"===(e.displayName||e.name))},f.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,j):(t.__proto__=j,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(m),t},f.awrap=function(t){return{__await:t}},A(S.prototype),S.prototype[c]=function(){return this},f.AsyncIterator=S,f.async=function(t,e,r,n){var o=new S(x(t,e,r,n));return f.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},A(m),m[u]="Generator",m[a]=function(){return this},m.toString=function(){return"[object Generator]"},f.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},f.values=U,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=o.call(a,"catchLoc"),s=o.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:U(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),g}}}function x(t,e,r,n){var o=e&&e.prototype instanceof L?e:L,i=Object.create(o.prototype),a=new P(n||[]);return i._invoke=function(t,e,r){var n=h;return function(o,i){if(n===l)throw new Error("Generator is already running");if(n===y){if("throw"===o)throw i;return G()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=O(a,r);if(c){if(c===g)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=l;var u=b(t,e,r);if("normal"===u.type){if(n=r.done?y:p,u.arg===g)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=y,r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function b(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function L(){}function E(){}function j(){}function A(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function S(t){var e;this._invoke=function(r,n){function i(){return new Promise(function(e,i){!function e(r,n,i,a){var c=b(t[r],t,n);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"==typeof s&&o.call(s,"__await")?Promise.resolve(s.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(s).then(function(t){u.value=t,i(u)},function(t){return e("throw",t,i,a)})}a(c.arg)}(r,n,e,i)})}return e=e?e.then(i,i):i()}}function O(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,O(t,e),"throw"===e.method))return g;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var o=b(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,g;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,g):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function U(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}return{next:G}}function G(){return{value:r,done:!0}}}(function(){return this||"object"==typeof self&&self}()||Function("return this")())},function(e,r){e.exports=t},function(t,e,r){"use strict";r.r(e);var n=r(0),o=r.n(n),i=r(1),a=r.n(i);function c(){if("undefined"!=typeof window)return window.crypto?window.crypto.subtle:void 0}function u(){return"undefined"==typeof window?r(5):void 0}var s={ciphers:{"AES-GCM":{nodePrefix:"aes",nodeSuffix:"gcm",ivLength:12,tagLength:16,staticIvLength:!0}}};function f(t){var e=Number.isInteger,r=t.name,n=t.iv,o=t.tagLength;if(0>Object.keys(s.ciphers).indexOf(r))throw new Error("UnsupportedAlgorithm");if(s.ciphers[r].ivLength){if(!(n instanceof Uint8Array))throw new Error("InvalidArguments");if(2>n.byteLength||14<n.byteLength)throw new Error("InvalidIVLength");if(s.ciphers[r].staticIvLength&&s.ciphers[r].ivLength!==n.byteLength)throw new Error("InvalidIVLength")}if(s.ciphers[r].tagLength&&o){if(!e(o))throw new Error("InvalidArguments");if(4>o||16<o)throw new Error("InvalidTagLength")}}function h(){return p.apply(this,arguments)}function p(){return(p=a()(o.a.mark(function t(e,r,n){var i,a,h,p,l,y,g,d,v,w,m,x,b,L;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(i=n.name,a=void 0===i?"AES-GCM":i,h=n.iv,p=n.tagLength,e instanceof Uint8Array&&r instanceof Uint8Array){t.next=3;break}throw new Error("InvalidArguments");case 3:return f({name:a,iv:h,tagLength:p}),s.ciphers[a].tagLength&&!p&&(p=s.ciphers[a].tagLength),t.next=7,c();case 7:return l=t.sent,t.next=10,u();case 10:if(y=t.sent,void 0===l||"function"!=typeof l.importKey||"function"!=typeof l.encrypt){t.next=22;break}return"AES-GCM"===a&&(d={name:a,iv:h,tagLength:8*p}),t.next=15,l.importKey("raw",r,d,!1,["encrypt","decrypt"]);case 15:return v=t.sent,t.next=18,l.encrypt(d,v,e);case 18:g=t.sent,g=new Uint8Array(g),t.next=38;break;case 22:if(void 0===y){t.next=37;break}w=s.ciphers[a].nodePrefix,w="".concat(w,"-").concat((8*r.byteLength).toString(),"-"),w+=s.ciphers[a].nodeSuffix,"AES-GCM"===a&&(m=y.createCipheriv(w,r,h,{authTagLength:p})),x=new Uint8Array(m.update(e)),b=new Uint8Array(m.final()),L=new Uint8Array([]),"AES-GCM"===a&&(L=new Uint8Array(m.getAuthTag())),(g=new Uint8Array(x.length+b.length+L.length)).set(x),g.set(b,x.length),g.set(L,x.length+b.length),t.next=38;break;case 37:throw new Error("UnsupportedEnvironment");case 38:return t.abrupt("return",g);case 39:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function l(){return y.apply(this,arguments)}function y(){return(y=a()(o.a.mark(function t(e,r,n){var i,a,h,p,l,y,g,d,v,w,m,x,b,L,E;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(i=n.name,a=void 0===i?"AES-GCM":i,h=n.iv,p=n.tagLength,e instanceof Uint8Array&&r instanceof Uint8Array){t.next=3;break}throw new Error("InvalidArguments");case 3:return f({name:a,iv:h,tagLength:p}),s.ciphers[a].tagLength&&!p&&(p=s.ciphers[a].tagLength),t.next=7,c();case 7:return l=t.sent,t.next=10,u();case 10:if(y=t.sent,void 0===l||"function"!=typeof l.importKey||"function"!=typeof l.encrypt){t.next=22;break}return"AES-GCM"===a&&(d={name:a,iv:h,tagLength:8*p}),t.next=15,l.importKey("raw",r,d,!1,["encrypt","decrypt"]);case 15:return v=t.sent,t.next=18,l.decrypt(d,v,e).catch(function(){throw new Error("DecryptionFailure")});case 18:g=t.sent,g=new Uint8Array(g),t.next=41;break;case 22:if(void 0===y){t.next=40;break}w=s.ciphers[a].nodePrefix,w="".concat(w,"-").concat((8*r.byteLength).toString(),"-"),w+=s.ciphers[a].nodeSuffix,"AES-GCM"===a&&(m=y.createDecipheriv(w,r,h,{authTagLength:p}),x=e.slice(0,e.length-p),b=e.slice(e.length-p),m.setAuthTag(b)),L=m.update(x),t.prev=28,E=m.final(),t.next=35;break;case 32:throw t.prev=32,t.t0=t.catch(28),new Error("DecryptionFailure");case 35:(g=new Uint8Array(E.length+L.length)).set(L),g.set(E,L.length),t.next=41;break;case 40:throw new Error("UnsupportedEnvironment");case 41:return t.abrupt("return",g);case 42:case"end":return t.stop()}},t,this,[[28,32]])}))).apply(this,arguments)}r.d(e,"encrypt",function(){return h}),r.d(e,"decrypt",function(){return l});e.default={encrypt:h,decrypt:l}}])});