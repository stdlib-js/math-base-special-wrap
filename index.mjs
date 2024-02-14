// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-trunc@v0.1.1-esm/index.mjs";function e(e,n,r){var a;return s(e)||s(n)||s(r)||r<=n?NaN:(0===e&&(e=0),0===n&&(n=0),0===r&&(r=0),n<=e&&e<r?e:(a=r-n,e<n&&(e+=a*(t((n-e)/a)+1)),n+(e-n)%a))}export{e as default};
//# sourceMappingURL=index.mjs.map
