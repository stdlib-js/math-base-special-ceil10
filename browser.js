// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";function r(r){return r!=r}var e=Number.POSITIVE_INFINITY,n=Number,t=n.NEGATIVE_INFINITY;function i(r){return r===e||r===t}var a=Math.floor;function o(r){return a(r)===r}function u(r){return o(r/2)}function c(r){return u(r>0?r-1:r+1)}var f=Math.sqrt;function s(r){return Math.abs(r)}var l="function"==typeof Object.defineProperty?Object.defineProperty:null,p=Object.defineProperty;function y(r){return"number"==typeof r}function g(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function d(r,e,n){var t=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=n?r+g(i):g(i)+r,t&&(r="-"+r)),r}var h=String.prototype.toLowerCase,v=String.prototype.toUpperCase;function w(r){var e,n,t;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,t=parseInt(n,10),!isFinite(t)){if(!y(n))throw new Error("invalid integer. Value: "+n);t=0}return t<0&&("u"===r.specifier||10!==e)&&(t=4294967295+t+1),t<0?(n=(-t).toString(e),r.precision&&(n=d(n,r.precision,r.padRight)),n="-"+n):(n=t.toString(e),t||r.precision?r.precision&&(n=d(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===v.call(r.specifier)?v.call(n):h.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function b(r){return"string"==typeof r}var m=Math.abs,A=String.prototype.toLowerCase,I=String.prototype.toUpperCase,_=String.prototype.replace,E=/e\+(\d)$/,N=/e-(\d)$/,U=/^(\d+)$/,T=/^(\d+)e/,F=/\.0$/,S=/\.0*e/,x=/(\..*[^0])0*e/;function k(r){var e,n,t=parseFloat(r.arg);if(!isFinite(t)){if(!y(r.arg))throw new Error("invalid floating-point number. Value: "+n);t=r.arg}switch(r.specifier){case"e":case"E":n=t.toExponential(r.precision);break;case"f":case"F":n=t.toFixed(r.precision);break;case"g":case"G":m(t)<1e-4?((e=r.precision)>0&&(e-=1),n=t.toExponential(e)):n=t.toPrecision(r.precision),r.alternate||(n=_.call(n,x,"$1e"),n=_.call(n,S,"e"),n=_.call(n,F,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=_.call(n,E,"e+0$1"),n=_.call(n,N,"e-0$1"),r.alternate&&(n=_.call(n,U,"$1."),n=_.call(n,T,"$1.e")),t>=0&&r.sign&&(n=r.sign+n),n=r.specifier===I.call(r.specifier)?I.call(n):A.call(n)}function j(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function V(r,e,n){var t=e-r.length;return t<0?r:r=n?r+j(t):j(t)+r}var O=String.fromCharCode,G=isNaN,$=Array.isArray;function H(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function W(r){var e,n,t,i,a,o,u,c,f;if(!$(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",u=1,c=0;c<r.length;c++)if(b(t=r[c]))o+=t;else{if(e=void 0!==t.precision,!(t=H(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(u=t.mapping),n=t.flags,f=0;f<n.length;f++)switch(i=n.charAt(f)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[u],10),u+=1,G(t.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[u],10),u+=1,G(t.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[u],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=w(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!G(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=G(a)?String(t.arg):O(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=k(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=d(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=V(t.arg,t.width,t.padRight)),o+=t.arg||"",u+=1}return o}var C=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function L(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function P(r){var e,n,t,i;for(n=[],i=0,t=C.exec(r);t;)(e=r.slice(i,C.lastIndex-t[0].length)).length&&n.push(e),n.push(L(t)),i=C.lastIndex,t=C.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function R(r){return"string"==typeof r}function M(r){var e,n;if(!R(r))throw new TypeError(M("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[P(r)],n=1;n<arguments.length;n++)e.push(arguments[n]);return W.apply(null,e)}var Y=Object.prototype,Z=Y.toString,X=Y.__defineGetter__,q=Y.__defineSetter__,z=Y.__lookupGetter__,B=Y.__lookupSetter__,D=function(){try{return l({},"x",{}),!0}catch(r){return!1}}()?p:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===Z.call(r))throw new TypeError(M("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===Z.call(n))throw new TypeError(M("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(z.call(r,e)||B.call(r,e)?(t=r.__proto__,r.__proto__=Y,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&X&&X.call(r,e,n.get),o&&q&&q.call(r,e,n.set),r};function J(r,e,n){D(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}var K,Q="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),rr=Object.prototype.toString,er=Object.prototype.hasOwnProperty,nr="function"==typeof Symbol?Symbol:void 0,tr="function"==typeof nr?nr.toStringTag:"",ir=Q&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,i,a;if(null==r)return rr.call(r);n=r[tr],a=tr,e=null!=(i=r)&&er.call(i,a);try{r[tr]=void 0}catch(e){return rr.call(r)}return t=rr.call(r),e?r[tr]=n:delete r[tr],t}:function(r){return rr.call(r)},ar="function"==typeof Uint32Array,or="function"==typeof Uint32Array?Uint32Array:null,ur="function"==typeof Uint32Array?Uint32Array:void 0;K=function(){var r,e,n;if("function"!=typeof or)return!1;try{e=new or(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(ar&&n instanceof Uint32Array||"[object Uint32Array]"===ir(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?ur:function(){throw new Error("not implemented")};var cr,fr=K,sr="function"==typeof Float64Array,lr="function"==typeof Float64Array?Float64Array:null,pr="function"==typeof Float64Array?Float64Array:void 0;cr=function(){var r,e,n;if("function"!=typeof lr)return!1;try{e=new lr([1,3.14,-3.14,NaN]),n=e,r=(sr&&n instanceof Float64Array||"[object Float64Array]"===ir(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?pr:function(){throw new Error("not implemented")};var yr,gr=cr,dr="function"==typeof Uint8Array,hr="function"==typeof Uint8Array?Uint8Array:null,vr="function"==typeof Uint8Array?Uint8Array:void 0;yr=function(){var r,e,n;if("function"!=typeof hr)return!1;try{e=new hr(e=[1,3.14,-3.14,256,257]),n=e,r=(dr&&n instanceof Uint8Array||"[object Uint8Array]"===ir(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?vr:function(){throw new Error("not implemented")};var wr,br=yr,mr="function"==typeof Uint16Array,Ar="function"==typeof Uint16Array?Uint16Array:null,Ir="function"==typeof Uint16Array?Uint16Array:void 0;wr=function(){var r,e,n;if("function"!=typeof Ar)return!1;try{e=new Ar(e=[1,3.14,-3.14,65536,65537]),n=e,r=(mr&&n instanceof Uint16Array||"[object Uint16Array]"===ir(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Ir:function(){throw new Error("not implemented")};var _r,Er={uint16:wr,uint8:br};(_r=new Er.uint16(1))[0]=4660;var Nr,Ur,Tr=52===new Er.uint8(_r.buffer)[0];!0===Tr?(Nr=1,Ur=0):(Nr=0,Ur=1);var Fr={HIGH:Nr,LOW:Ur},Sr=new gr(1),xr=new fr(Sr.buffer),kr=Fr.HIGH,jr=Fr.LOW;function Vr(r,e,n,t){return Sr[0]=r,e[t]=xr[kr],e[t+n]=xr[jr],e}function Or(r){return Vr(r,[0,0],1,0)}J(Or,"assign",Vr);var Gr=!0===Tr?0:1,$r=new gr(1),Hr=new fr($r.buffer);function Wr(r,e){return $r[0]=r,Hr[Gr]=e>>>0,$r[0]}function Cr(r){return 0|r}var Lr,Pr,Rr=n.NEGATIVE_INFINITY,Mr=2147483647,Yr=!0===Tr?1:0,Zr=new gr(1),Xr=new fr(Zr.buffer);function qr(r){return Zr[0]=r,Xr[Yr]}!0===Tr?(Lr=1,Pr=0):(Lr=0,Pr=1);var zr={HIGH:Lr,LOW:Pr},Br=new gr(1),Dr=new fr(Br.buffer),Jr=zr.HIGH,Kr=zr.LOW;function Qr(r,e){return Dr[Jr]=r,Dr[Kr]=e,Br[0]}var re=[0,0];function ee(r,e){var n,t;return Or.assign(r,re,1,0),n=re[0],n&=Mr,t=qr(e),Qr(n|=t&=2147483648,re[1])}var ne=!0===Tr?1:0,te=new gr(1),ie=new fr(te.buffer);function ae(r,e){return te[0]=r,ie[ne]=e>>>0,te[0]}var oe=1023,ue=1048576,ce=[1,1.5],fe=[0,.5849624872207642],se=[0,1.350039202129749e-8],le=n.NEGATIVE_INFINITY;function pe(e,n,t,a){return r(e)||i(e)?(n[a]=e,n[a+t]=0,n):0!==e&&s(e)<22250738585072014e-324?(n[a]=4503599627370496*e,n[a+t]=-52,n):(n[a]=e,n[a+t]=0,n)}J((function(r){return pe(r,[0,0],1,0)}),"assign",pe);var ye=[0,0],ge=[0,0];function de(n,t){var a,o;return 0===t||0===n||r(n)||i(n)?n:(pe(n,ye,1,0),t+=ye[1],t+=function(r){var e=qr(r);return(e=(2146435072&e)>>>20)-oe|0}(n=ye[0]),t<-1074?ee(0,n):t>1023?n<0?le:e:(t<=-1023?(t+=52,o=2220446049250313e-31):o=1,Or.assign(n,ge,1,0),a=ge[0],a&=2148532223,o*Qr(a|=t+oe<<20,ge[1])))}var he=1048575,ve=1048576,we=1083179008,be=1e300,me=1e-300,Ae=[0,0],Ie=[0,0];function _e(n,t){var a,u,l,p,y,g,d,h,v,w,b,m,A,I;if(r(n)||r(t))return NaN;if(Or.assign(t,Ae,1,0),y=Ae[0],0===Ae[1]){if(0===t)return 1;if(1===t)return n;if(-1===t)return 1/n;if(.5===t)return f(n);if(-.5===t)return 1/f(n);if(2===t)return n*n;if(3===t)return n*n*n;if(4===t)return(n*=n)*n;if(i(t))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:s(r)<1==(n===e)?0:e}(n,t)}if(Or.assign(n,Ae,1,0),p=Ae[0],0===Ae[1]){if(0===p)return function(r,n){return n===Rr?e:n===e?0:n>0?c(n)?r:0:c(n)?ee(e,r):e}(n,t);if(1===n)return 1;if(-1===n&&c(t))return-1;if(i(n))return n===Rr?_e(-0,-t):t<0?0:e}if(n<0&&!1===o(t))return(n-n)/(n-n);if(l=s(n),a=p&Mr|0,u=y&Mr|0,d=y>>>31|0,g=(g=p>>>31|0)&&c(t)?-1:1,u>1105199104){if(u>1139802112)return function(r,e){return(qr(r)&Mr)<=1072693247?e<0?1/0:0:e>0?1/0:0}(n,t);if(a<1072693247)return 1===d?g*be*be:g*me*me;if(a>1072693248)return 0===d?g*be*be:g*me*me;b=function(r,e){var n,t,i,a,o,u;return n=(o=1.9259629911266175e-8*(i=e-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((t=Wr(t=(a=1.4426950216293335*i)+o,0))-a),r[0]=t,r[1]=n,r}(Ie,l)}else b=function(r,e,n){var t,i,a,o,u,c,f,s,l,p,y,g,d,h,v,w,b,m,A,I,_;return m=0,n<ue&&(m-=53,n=qr(e*=9007199254740992)),m+=(n>>20)-oe|0,n=1072693248|(A=1048575&n|0),A<=235662?I=0:A<767610?I=1:(I=0,m+=1,n-=ue),o=Wr(i=(w=(e=ae(e,n))-(f=ce[I]))*(b=1/(e+f)),0),t=524288+(n>>1|536870912),c=ae(0,t+=I<<18),v=(a=i*i)*a*(0===(_=a)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),c=Wr(c=3+(a=o*o)+(v+=(u=b*(w-o*c-o*(e-(c-f))))*(o+i)),0),d=(y=-7.028461650952758e-9*(l=Wr(l=(w=o*c)+(b=u*c+(v-(c-3-a))*i),0))+.9617966939259756*(b-(l-w))+se[I])-((g=Wr(g=(p=.9617967009544373*l)+y+(s=fe[I])+(h=m),0))-h-s-p),r[0]=g,r[1]=d,r}(Ie,l,a);if(m=(w=(t-(h=Wr(t,0)))*b[0]+t*b[1])+(v=h*b[0]),Or.assign(m,Ae,1,0),A=Cr(Ae[0]),I=Cr(Ae[1]),A>=we){if(0!=(A-we|I))return g*be*be;if(w+8008566259537294e-32>m-v)return g*be*be}else if((A&Mr)>=1083231232){if(0!=(A-3230714880|I))return g*me*me;if(w<=m-v)return g*me*me}return m=function(r,e,n){var t,i,a,o,u,c,f,s,l,p;return l=((s=r&Mr|0)>>20)-oe|0,f=0,s>1071644672&&(i=ae(0,((f=r+(ve>>l+1)>>>0)&~(he>>(l=((f&Mr)>>20)-oe|0)))>>>0),f=(f&he|ve)>>20-l>>>0,r<0&&(f=-f),e-=i),r=Cr(r=qr(c=1-((c=(a=.6931471824645996*(i=Wr(i=n+e,0)))+(o=.6931471805599453*(n-(i-e))+-1.904654299957768e-9*i))*(t=c-(i=c*c)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=o-(c-a))+c*u)-c))),(r+=f<<20>>>0)>>20<=0?de(c,f):ae(c,r)}(A,v,w),g*m}var Ee=Math.ceil,Ne=n.NEGATIVE_INFINITY,Ue=1048575,Te=.4342944818781689;function Fe(e){var n,t,i,a,o,u,c;return r(e)||e<0?NaN:0===e?Ne:(o=0,(t=qr(e))<1048576&&(o-=54,t=qr(e*=0x40000000000000)),t>=2146435072?e+e:(o+=(t>>20)-oe|0,u=o+=(a=614244+(t&=1048575)&1048576|0)>>20|0,i=function(r){var e,n,t,i,a,o,u,c,f,s,l;return i=qr(r),a=r-1,(Ue&2+i)<3?0===a?0:a*a*(.3333333333333333*a-.5):(s=(i&=Ue)-398458|0,l=440401-i|0,n=(f=(u=(o=a/(2+a))*o)*u)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(f),t=u*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(f),c=t+n,(s|=l)>0?o*((e=.5*a*a)+c)-e:o*(c-a))}(e=ae(e,t|1072693248^a)),c=3694239077158931e-28*u+25082946711645275e-27*((e-=1)+i),(c+=(e-(n=Wr(e,0))+i)*Te+n*Te)+.30102999566361177*u))}return function(n){var t,o;return r(n)||i(n)||0===n?n:(n<0?(n=-n,t=-1):t=1,o=Fe(n),(o=-1===t?a(o):Ee(o))<=-324?0*t:o>308?e:t*_e(10,o))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).ceil10=e();
//# sourceMappingURL=browser.js.map
