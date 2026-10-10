// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){return r!=r}var t=Math.floor,a=Math.ceil;function n(n,e,o){var u,f;return r(n)||r(e)||r(o)||o<=e?NaN:(0===n&&(n=0),0===e&&(e=0),0===o&&(o=0),e<=n&&n<o?n:(u=o-e,n<e&&(n+=u*(((f=(e-n)/u)<0?a(f):t(f))+1)),e+(n-e)%u))}export{n as default};
//# sourceMappingURL=mod.js.map
