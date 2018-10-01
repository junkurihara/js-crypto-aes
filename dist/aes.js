"use strict";var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard"),_interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports.encrypt=encrypt,exports.decrypt=decrypt;var _regenerator=_interopRequireDefault(require("@babel/runtime/regenerator")),_asyncToGenerator2=_interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator")),util=_interopRequireWildcard(require("./util.js")),_params=_interopRequireDefault(require("./params.js"));/**
 * aes.js
 */ /**
 * Check if the given algorithm spec is valid.
 * @param name
 * @param iv
 * @param tagLength
 */function assertAlgorithms(a){var b=Number.isInteger,c=a.name,d=a.iv,e=a.tagLength;if(0>Object.keys(_params.default.ciphers).indexOf(c))throw new Error("UnsupportedAlgorithm");if(_params.default.ciphers[c].ivLength){if(!(d instanceof Uint8Array))throw new Error("InvalidArguments");if(2>d.byteLength||14<d.byteLength)throw new Error("InvalidIVLength");if(_params.default.ciphers[c].staticIvLength&&_params.default.ciphers[c].ivLength!==d.byteLength)throw new Error("InvalidIVLength")}if(_params.default.ciphers[c].tagLength&&e){if(!b(e))throw new Error("InvalidArguments");if(4>e||16<e)throw new Error("InvalidTagLength")}}/**
 * Encrypt with AES
 * @param msg
 * @param key
 * @param name
 * @param iv
 * @return {Promise<Uint8Array>}
 */function encrypt(){return _encrypt.apply(this,arguments)}/**
 * Decrypt with AES
 * @param data
 * @param key
 * @param name
 * @param iv
 * @return {Promise<Uint8Array>}
 */function _encrypt(){return _encrypt=(0,_asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function a(b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r;return _regenerator.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(e=d.name,f=void 0===e?"AES-GCM":e,g=d.iv,h=d.tagLength,b instanceof Uint8Array&&c instanceof Uint8Array){a.next=3;break}throw new Error("InvalidArguments");case 3:return assertAlgorithms({name:f,iv:g,tagLength:h}),_params.default.ciphers[f].tagLength&&!h&&(h=_params.default.ciphers[f].tagLength),a.next=7,util.getWebCrypto();case 7:return i=a.sent,a.next=10,util.getNodeCrypto();case 10:if(j=a.sent,"undefined"==typeof i||"function"!=typeof i.importKey||"function"!=typeof i.encrypt){a.next=22;break}return"AES-GCM"===f&&(l={name:f,iv:g,tagLength:8*h}),a.next=15,i.importKey("raw",c,l,!1,["encrypt","decrypt"]);case 15:return m=a.sent,a.next=18,i.encrypt(l,m,b);case 18:k=a.sent,k=new Uint8Array(k),a.next=38;break;case 22:if("undefined"==typeof j){a.next=37;break}n=_params.default.ciphers[f].nodePrefix,n="".concat(n,"-").concat((8*c.byteLength).toString(),"-"),n+=_params.default.ciphers[f].nodeSuffix,"AES-GCM"===f&&(o=j.createCipheriv(n,c,g,{authTagLength:h})),p=new Uint8Array(o.update(b)),q=new Uint8Array(o.final()),r=new Uint8Array([]),"AES-GCM"===f&&(r=new Uint8Array(o.getAuthTag())),k=new Uint8Array(p.length+q.length+r.length),k.set(p),k.set(q,p.length),k.set(r,p.length+q.length),a.next=38;break;case 37:throw new Error("UnsupportedEnvironment");case 38:return a.abrupt("return",k);case 39:case"end":return a.stop();}},a,this)})),_encrypt.apply(this,arguments)}function decrypt(){return _decrypt.apply(this,arguments)}function _decrypt(){return _decrypt=(0,_asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function a(b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;return _regenerator.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(e=d.name,f=void 0===e?"AES-GCM":e,g=d.iv,h=d.tagLength,b instanceof Uint8Array&&c instanceof Uint8Array){a.next=3;break}throw new Error("InvalidArguments");case 3:return assertAlgorithms({name:f,iv:g,tagLength:h}),_params.default.ciphers[f].tagLength&&!h&&(h=_params.default.ciphers[f].tagLength),a.next=7,util.getWebCrypto();case 7:return i=a.sent,a.next=10,util.getNodeCrypto();case 10:if(j=a.sent,"undefined"==typeof i||"function"!=typeof i.importKey||"function"!=typeof i.encrypt){a.next=22;break}return"AES-GCM"===f&&(l={name:f,iv:g,tagLength:8*h}),a.next=15,i.importKey("raw",c,l,!1,["encrypt","decrypt"]);case 15:return m=a.sent,a.next=18,i.decrypt(l,m,b).catch(function(){throw new Error("DecryptionFailure")});case 18:k=a.sent,k=new Uint8Array(k),a.next=41;break;case 22:if("undefined"==typeof j){a.next=40;break}n=_params.default.ciphers[f].nodePrefix,n="".concat(n,"-").concat((8*c.byteLength).toString(),"-"),n+=_params.default.ciphers[f].nodeSuffix,"AES-GCM"===f&&(o=j.createDecipheriv(n,c,g,{authTagLength:h}),p=b.slice(0,b.length-h),q=b.slice(b.length-h),o.setAuthTag(q)),r=o.update(p),a.prev=28,s=o.final(),a.next=35;break;case 32:throw a.prev=32,a.t0=a["catch"](28),new Error("DecryptionFailure");case 35:k=new Uint8Array(s.length+r.length),k.set(r),k.set(s,r.length),a.next=41;break;case 40:throw new Error("UnsupportedEnvironment");case 41:return a.abrupt("return",k);case 42:case"end":return a.stop();}},a,this,[[28,32]])})),_decrypt.apply(this,arguments)}