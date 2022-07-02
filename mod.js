// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=function(r){return r!=r},t=Math.floor,n=Math.ceil,a=t,u=n;var e=function(r){return r<0?u(r):a(r)};function o(t,n,a){var u;return r(t)||r(n)||r(a)||a<=n?NaN:(0===t&&(t=0),0===n&&(n=0),0===a&&(a=0),n<=t&&t<a?t:(u=a-n,t<n&&(t+=u*(e((n-t)/u)+1)),n+(t-n)%u))}export{o as default};
//# sourceMappingURL=mod.js.map
