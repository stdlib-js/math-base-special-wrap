// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=function(r){return r!=r},t=Math.floor,a=Math.ceil,n=t,u=a;var e=r,o=function(r){return r<0?u(r):n(r)};var f=function(r,t,a){var n;return e(r)||e(t)||e(a)||a<=t?NaN:(0===r&&(r=0),0===t&&(t=0),0===a&&(a=0),t<=r&&r<a?r:(n=a-t,r<t&&(r+=n*(o((t-r)/n)+1)),t+(r-t)%n))};export{f as default};
//# sourceMappingURL=mod.js.map
