// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-trunc@esm/index.mjs";var e=s,r=t;var a=function(s,t,a){var n;return e(s)||e(t)||e(a)||a<=t?NaN:(0===s&&(s=0),0===t&&(t=0),0===a&&(a=0),t<=s&&s<a?s:(n=a-t,s<t&&(s+=n*(r((t-s)/n)+1)),t+(s-t)%n))};export{a as default};
//# sourceMappingURL=index.mjs.map
