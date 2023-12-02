"use strict";var a=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var i=a(function(N,s){
var f=require('@stdlib/math-base-assert-is-nan/dist'),c=require('@stdlib/math-base-special-trunc/dist');function o(e,r,t){var u;return f(e)||f(r)||f(t)||t<=r?NaN:(e===0&&(e=0),r===0&&(r=0),t===0&&(t=0),r<=e&&e<t?e:(u=t-r,e<r&&(e+=u*(c((r-e)/u)+1)),r+(e-r)%u))}s.exports=o
});var p=i();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
