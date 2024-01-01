"use strict";var t=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var n=t(function(z,u){
var y=require('@stdlib/strided-base-smap/dist'),j=require('@stdlib/math-base-special-floorf/dist');function x(e,r,a,i,s){return y(e,r,a,i,s,j)}u.exports=x
});var f=t(function(A,v){
var R=require('@stdlib/strided-base-smap/dist').ndarray,_=require('@stdlib/math-base-special-floorf/dist');function E(e,r,a,i,s,d,m){return R(e,r,a,i,s,d,m,_)}v.exports=E
});var p=t(function(B,c){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=n(),b=f();O(q,"ndarray",b);c.exports=q
});var g=require("path").join,h=require('@stdlib/utils-try-require/dist'),k=p(),o,l=h(g(__dirname,"./native.js"));l instanceof Error?o=k:o=l;module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
