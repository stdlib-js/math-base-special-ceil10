"use strict";var t=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var a=t(function(P,u){
var v=require('@stdlib/math-base-assert-is-nan/dist'),n=require('@stdlib/math-base-assert-is-infinite/dist'),s=require('@stdlib/math-base-special-pow/dist'),q=require('@stdlib/math-base-special-floor/dist'),f=require('@stdlib/math-base-special-ceil/dist'),l=require('@stdlib/math-base-special-log10/dist'),o=require('@stdlib/constants-float64-max-base10-exponent/dist'),c=require('@stdlib/constants-float64-min-base10-exponent-subnormal/dist'),p=require('@stdlib/constants-float64-pinf/dist');function I(r){var e,i;return v(r)||n(r)||r===0?r:(r<0?(r=-r,e=-1):e=1,i=l(r),e===-1?i=q(i):i=f(i),i<=c?e*0:i>o?p:e*s(10,i))}u.exports=I
});var M=a();module.exports=M;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
