// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";function r(r){return r!=r}var n=Number.POSITIVE_INFINITY,t=Number.NEGATIVE_INFINITY;function e(r){return r===n||r===t}var o=Math.floor;function i(r){return o(r)===r}function u(r){return i(r/2)}function f(r){return u(r>0?r-1:r+1)}var a=Math.sqrt;function c(r){return Math.abs(r)}var l,y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),p=Object.prototype.toString,v=Object.prototype.hasOwnProperty,b="function"==typeof Symbol?Symbol.toStringTag:"";l=y&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,o,i;if(null==r)return p.call(r);t=r[b],i=b,n=null!=(o=r)&&v.call(o,i);try{r[b]=void 0}catch(n){return p.call(r)}return e=p.call(r),n?r[b]=t:delete r[b],e}:function(r){return p.call(r)};var w,d=l,s="function"==typeof Uint32Array,A="function"==typeof Uint32Array?Uint32Array:null,_="function"==typeof Uint32Array?Uint32Array:void 0;w=function(){var r,n,t;if("function"!=typeof A)return!1;try{n=new A(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(s&&t instanceof Uint32Array||"[object Uint32Array]"===d(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?_:function(){throw new Error("not implemented")};var m,h=w,U="function"==typeof Float64Array,g="function"==typeof Float64Array?Float64Array:null,j="function"==typeof Float64Array?Float64Array:void 0;m=function(){var r,n,t;if("function"!=typeof g)return!1;try{n=new g([1,3.14,-3.14,NaN]),t=n,r=(U&&t instanceof Float64Array||"[object Float64Array]"===d(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?j:function(){throw new Error("not implemented")};var I,N=m,O="function"==typeof Uint8Array,S="function"==typeof Uint8Array?Uint8Array:null,E="function"==typeof Uint8Array?Uint8Array:void 0;I=function(){var r,n,t;if("function"!=typeof S)return!1;try{n=new S(n=[1,3.14,-3.14,256,257]),t=n,r=(O&&t instanceof Uint8Array||"[object Uint8Array]"===d(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?E:function(){throw new Error("not implemented")};var F,T=I,H="function"==typeof Uint16Array,G="function"==typeof Uint16Array?Uint16Array:null,P="function"==typeof Uint16Array?Uint16Array:void 0;F=function(){var r,n,t;if("function"!=typeof G)return!1;try{n=new G(n=[1,3.14,-3.14,65536,65537]),t=n,r=(H&&t instanceof Uint16Array||"[object Uint16Array]"===d(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?P:function(){throw new Error("not implemented")};var x,L={uint16:F,uint8:T};(x=new L.uint16(1))[0]=4660;var M,V,W=52===new L.uint8(x.buffer)[0];!0===W?(M=1,V=0):(M=0,V=1);var k={HIGH:M,LOW:V},Y=new N(1),q=new h(Y.buffer),C=k.HIGH,z=k.LOW;function B(r,n){return Y[0]=n,r[0]=q[C],r[1]=q[z],r}function D(r,n){return 1===arguments.length?B([0,0],r):B(r,n)}var J=!0===W?0:1,K=new N(1),Q=new h(K.buffer);function R(r,n){return K[0]=r,Q[J]=n>>>0,K[0]}function X(r){return 0|r}var Z,$,rr=!0===W?1:0,nr=new N(1),tr=new h(nr.buffer);function er(r){return nr[0]=r,tr[rr]}!0===W?(Z=1,$=0):(Z=0,$=1);var or={HIGH:Z,LOW:$},ir=new N(1),ur=new h(ir.buffer),fr=or.HIGH,ar=or.LOW;function cr(r,n){return ur[fr]=r,ur[ar]=n,ir[0]}var lr=[0,0];function yr(r,n){var t,e;return D(lr,r),t=lr[0],t&=2147483647,e=er(n),cr(t|=e&=2147483648,lr[1])}var pr=!0===W?1:0,vr=new N(1),br=new h(vr.buffer);function wr(r,n){return vr[0]=r,br[pr]=n>>>0,vr[0]}var dr,sr=1023,Ar=1048576,_r=[1,1.5],mr=[0,.5849624872207642],hr=[0,1.350039202129749e-8],Ur="function"==typeof Object.defineProperty?Object.defineProperty:null,gr=Object.defineProperty,jr=Object.prototype,Ir=jr.toString,Nr=jr.__defineGetter__,Or=jr.__defineSetter__,Sr=jr.__lookupGetter__,Er=jr.__lookupSetter__;function Fr(n,t,o,i){return r(n)||e(n)?(t[i]=n,t[i+o]=0,t):0!==n&&c(n)<22250738585072014e-324?(t[i]=4503599627370496*n,t[i+o]=-52,t):(t[i]=n,t[i+o]=0,t)}dr=function(){try{return Ur({},"x",{}),!0}catch(r){return!1}}()?gr:function(r,n,t){var e,o,i,u;if("object"!=typeof r||null===r||"[object Array]"===Ir.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===Ir.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((o="value"in t)&&(Sr.call(r,n)||Er.call(r,n)?(e=r.__proto__,r.__proto__=jr,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),i="get"in t,u="set"in t,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&Nr&&Nr.call(r,n,t.get),u&&Or&&Or.call(r,n,t.set),r},dr((function(r){return Fr(r,[0,0],1,0)}),"assign",{configurable:!1,enumerable:!1,writable:!1,value:Fr});var Tr=[0,0],Hr=[0,0];function Gr(o,i){var u,f;return 0===i||0===o||r(o)||e(o)?o:(Fr(o,Tr,1,0),i+=Tr[1],i+=function(r){var n=er(r);return(n=(2146435072&n)>>>20)-sr|0}(o=Tr[0]),i<-1074?yr(0,o):i>1023?o<0?t:n:(i<=-1023?(i+=52,f=2220446049250313e-31):f=1,D(Hr,o),u=Hr[0],u&=2148532223,f*cr(u|=i+sr<<20,Hr[1])))}var Pr=2147483647,xr=1048575,Lr=1048576,Mr=2147483647,Vr=1083179008,Wr=1e300,kr=1e-300,Yr=[0,0],qr=[0,0];function Cr(o,u){var l,y,p,v,b,w,d,s,A,_,m,h,U,g;if(r(o)||r(u))return NaN;if(D(Yr,u),b=Yr[0],0===Yr[1]){if(0===u)return 1;if(1===u)return o;if(-1===u)return 1/o;if(.5===u)return a(o);if(-.5===u)return 1/a(o);if(2===u)return o*o;if(3===u)return o*o*o;if(4===u)return(o*=o)*o;if(e(u))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:c(r)<1==(t===n)?0:n}(o,u)}if(D(Yr,o),v=Yr[0],0===Yr[1]){if(0===v)return function(r,e){return e===t?n:e===n?0:e>0?f(e)?r:0:f(e)?yr(n,r):n}(o,u);if(1===o)return 1;if(-1===o&&f(u))return-1;if(e(o))return o===t?Cr(-0,-u):u<0?0:n}if(o<0&&!1===i(u))return(o-o)/(o-o);if(p=c(o),l=v&Mr|0,y=b&Mr|0,d=b>>>31|0,w=(w=v>>>31|0)&&f(u)?-1:1,y>1105199104){if(y>1139802112)return function(r,n){return(2147483647&er(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(o,u);if(l<1072693247)return 1===d?w*Wr*Wr:w*kr*kr;if(l>1072693248)return 0===d?w*Wr*Wr:w*kr*kr;m=function(r,n){var t,e,o,i,u,f;return t=(u=1.9259629911266175e-8*(o=n-1)-o*o*(0===(f=o)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=R(e=(i=1.4426950216293335*o)+u,0))-i),r[0]=e,r[1]=t,r}(qr,p)}else m=function(r,n,t){var e,o,i,u,f,a,c,l,y,p,v,b,w,d,s,A,_,m,h,U,g;return m=0,t<Ar&&(m-=53,t=er(n*=9007199254740992)),m+=(t>>20)-sr|0,t=1072693248|(h=1048575&t|0),h<=235662?U=0:h<767610?U=1:(U=0,m+=1,t-=Ar),u=R(o=(A=(n=wr(n,t))-(c=_r[U]))*(_=1/(n+c)),0),e=524288+(t>>1|536870912),a=wr(0,e+=U<<18),s=(i=o*o)*i*(0===(g=i)?.5999999999999946:.5999999999999946+g*(.4285714285785502+g*(.33333332981837743+g*(.272728123808534+g*(.23066074577556175+.20697501780033842*g))))),a=R(a=3+(i=u*u)+(s+=(f=_*(A-u*a-u*(n-(a-c))))*(u+o)),0),w=(v=-7.028461650952758e-9*(y=R(y=(A=u*a)+(_=f*a+(s-(a-3-i))*o),0))+.9617966939259756*(_-(y-A))+hr[U])-((b=R(b=(p=.9617967009544373*y)+v+(l=mr[U])+(d=m),0))-d-l-p),r[0]=b,r[1]=w,r}(qr,p,l);if(_=(u-(s=R(u,0)))*m[0]+u*m[1],A=s*m[0],D(Yr,h=_+A),U=X(Yr[0]),g=X(Yr[1]),U>=Vr){if(0!=(U-Vr|g))return w*Wr*Wr;if(_+8008566259537294e-32>h-A)return w*Wr*Wr}else if((U&Mr)>=1083231232){if(0!=(U-3230714880|g))return w*kr*kr;if(_<=h-A)return w*kr*kr}return h=function(r,n,t){var e,o,i,u,f,a,c,l,y,p;return y=((l=r&Pr|0)>>20)-sr|0,c=0,l>1071644672&&(o=wr(0,((c=r+(Lr>>y+1)>>>0)&~(xr>>(y=((c&Pr)>>20)-sr|0)))>>>0),c=(c&xr|Lr)>>20-y>>>0,r<0&&(c=-c),n-=o),r=X(r=er(a=1-((a=(i=.6931471824645996*(o=R(o=t+n,0)))+(u=.6931471805599453*(t-(o-n))+-1.904654299957768e-9*o))*(e=a-(o=a*a)*(0===(p=o)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=u-(a-i))+a*f)-a))),(r+=c<<20>>>0)>>20<=0?Gr(a,c):wr(a,r)}(U,A,_),w*h}var zr=Math.ceil,Br=1048575,Dr=.4342944818781689;function Jr(n){var e,o,i,u,f,a,c;return r(n)||n<0?NaN:0===n?t:(f=0,(o=er(n))<1048576&&(f-=54,o=er(n*=0x40000000000000)),o>=2146435072?n+n:(f+=(o>>20)-sr|0,a=f+=(u=614244+(o&=1048575)&1048576|0)>>20|0,i=function(r){var n,t,e,o,i,u,f,a,c,l,y;return o=er(r),i=r-1,(Br&2+o)<3?0===i?0:i*i*(.3333333333333333*i-.5):(l=(o&=Br)-398458|0,y=440401-o|0,t=(c=(f=(u=i/(2+i))*u)*f)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(c),e=f*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(c),a=e+t,(l|=y)>0?u*((n=.5*i*i)+a)-n:u*(a-i))}(n=wr(n,o|1072693248^u)),c=3694239077158931e-28*a+25082946711645275e-27*((n-=1)+i),(c+=(n-(e=R(n,0))+i)*Dr+e*Dr)+.30102999566361177*a))}return function(t){var i,u;return r(t)||e(t)||0===t?t:(t<0?(t=-t,i=-1):i=1,u=Jr(t),(u=-1===i?o(u):zr(u))<=-324?0*i:u>308?n:i*Cr(10,u))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).ceil10=n();
//# sourceMappingURL=browser.js.map
