(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var cd={exports:{}},jo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xg;function Yy(){if(Xg)return jo;Xg=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:d,ref:l!==void 0?l:null,props:c}}return jo.Fragment=e,jo.jsx=i,jo.jsxs=i,jo}var jg;function Zy(){return jg||(jg=1,cd.exports=Yy()),cd.exports}var w=Zy(),ud={exports:{}},mt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wg;function Ky(){if(Wg)return mt;Wg=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),y=Symbol.for("react.activity"),g=Symbol.iterator;function T(S){return S===null||typeof S!="object"?null:(S=g&&S[g]||S["@@iterator"],typeof S=="function"?S:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U=Object.assign,b={};function v(S,k,re){this.props=S,this.context=k,this.refs=b,this.updater=re||A}v.prototype.isReactComponent={},v.prototype.setState=function(S,k){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,k,"setState")},v.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function F(){}F.prototype=v.prototype;function P(S,k,re){this.props=S,this.context=k,this.refs=b,this.updater=re||A}var D=P.prototype=new F;D.constructor=P,U(D,v.prototype),D.isPureReactComponent=!0;var V=Array.isArray;function O(){}var L={H:null,A:null,T:null,S:null},E=Object.prototype.hasOwnProperty;function N(S,k,re){var _e=re.ref;return{$$typeof:r,type:S,key:k,ref:_e!==void 0?_e:null,props:re}}function X(S,k){return N(S.type,k,S.props)}function G(S){return typeof S=="object"&&S!==null&&S.$$typeof===r}function j(S){var k={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(re){return k[re]})}var Q=/\/+/g;function te(S,k){return typeof S=="object"&&S!==null&&S.key!=null?j(""+S.key):k.toString(36)}function q(S){switch(S.status){case"fulfilled":return S.value;case"rejected":throw S.reason;default:switch(typeof S.status=="string"?S.then(O,O):(S.status="pending",S.then(function(k){S.status==="pending"&&(S.status="fulfilled",S.value=k)},function(k){S.status==="pending"&&(S.status="rejected",S.reason=k)})),S.status){case"fulfilled":return S.value;case"rejected":throw S.reason}}throw S}function I(S,k,re,_e,Me){var J=typeof S;(J==="undefined"||J==="boolean")&&(S=null);var se=!1;if(S===null)se=!0;else switch(J){case"bigint":case"string":case"number":se=!0;break;case"object":switch(S.$$typeof){case r:case e:se=!0;break;case _:return se=S._init,I(se(S._payload),k,re,_e,Me)}}if(se)return Me=Me(S),se=_e===""?"."+te(S,0):_e,V(Me)?(re="",se!=null&&(re=se.replace(Q,"$&/")+"/"),I(Me,k,re,"",function(Be){return Be})):Me!=null&&(G(Me)&&(Me=X(Me,re+(Me.key==null||S&&S.key===Me.key?"":(""+Me.key).replace(Q,"$&/")+"/")+se)),k.push(Me)),1;se=0;var me=_e===""?".":_e+":";if(V(S))for(var we=0;we<S.length;we++)_e=S[we],J=me+te(_e,we),se+=I(_e,k,re,J,Me);else if(we=T(S),typeof we=="function")for(S=we.call(S),we=0;!(_e=S.next()).done;)_e=_e.value,J=me+te(_e,we++),se+=I(_e,k,re,J,Me);else if(J==="object"){if(typeof S.then=="function")return I(q(S),k,re,_e,Me);throw k=String(S),Error("Objects are not valid as a React child (found: "+(k==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":k)+"). If you meant to render a collection of children, use an array instead.")}return se}function z(S,k,re){if(S==null)return S;var _e=[],Me=0;return I(S,_e,"","",function(J){return k.call(re,J,Me++)}),_e}function Y(S){if(S._status===-1){var k=S._result;k=k(),k.then(function(re){(S._status===0||S._status===-1)&&(S._status=1,S._result=re)},function(re){(S._status===0||S._status===-1)&&(S._status=2,S._result=re)}),S._status===-1&&(S._status=0,S._result=k)}if(S._status===1)return S._result.default;throw S._result}var ae=typeof reportError=="function"?reportError:function(S){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var k=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof S=="object"&&S!==null&&typeof S.message=="string"?String(S.message):String(S),error:S});if(!window.dispatchEvent(k))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",S);return}console.error(S)},H={map:z,forEach:function(S,k,re){z(S,function(){k.apply(this,arguments)},re)},count:function(S){var k=0;return z(S,function(){k++}),k},toArray:function(S){return z(S,function(k){return k})||[]},only:function(S){if(!G(S))throw Error("React.Children.only expected to receive a single React element child.");return S}};return mt.Activity=y,mt.Children=H,mt.Component=v,mt.Fragment=i,mt.Profiler=l,mt.PureComponent=P,mt.StrictMode=s,mt.Suspense=m,mt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=L,mt.__COMPILER_RUNTIME={__proto__:null,c:function(S){return L.H.useMemoCache(S)}},mt.cache=function(S){return function(){return S.apply(null,arguments)}},mt.cacheSignal=function(){return null},mt.cloneElement=function(S,k,re){if(S==null)throw Error("The argument must be a React element, but you passed "+S+".");var _e=U({},S.props),Me=S.key;if(k!=null)for(J in k.key!==void 0&&(Me=""+k.key),k)!E.call(k,J)||J==="key"||J==="__self"||J==="__source"||J==="ref"&&k.ref===void 0||(_e[J]=k[J]);var J=arguments.length-2;if(J===1)_e.children=re;else if(1<J){for(var se=Array(J),me=0;me<J;me++)se[me]=arguments[me+2];_e.children=se}return N(S.type,Me,_e)},mt.createContext=function(S){return S={$$typeof:d,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null},S.Provider=S,S.Consumer={$$typeof:c,_context:S},S},mt.createElement=function(S,k,re){var _e,Me={},J=null;if(k!=null)for(_e in k.key!==void 0&&(J=""+k.key),k)E.call(k,_e)&&_e!=="key"&&_e!=="__self"&&_e!=="__source"&&(Me[_e]=k[_e]);var se=arguments.length-2;if(se===1)Me.children=re;else if(1<se){for(var me=Array(se),we=0;we<se;we++)me[we]=arguments[we+2];Me.children=me}if(S&&S.defaultProps)for(_e in se=S.defaultProps,se)Me[_e]===void 0&&(Me[_e]=se[_e]);return N(S,J,Me)},mt.createRef=function(){return{current:null}},mt.forwardRef=function(S){return{$$typeof:p,render:S}},mt.isValidElement=G,mt.lazy=function(S){return{$$typeof:_,_payload:{_status:-1,_result:S},_init:Y}},mt.memo=function(S,k){return{$$typeof:h,type:S,compare:k===void 0?null:k}},mt.startTransition=function(S){var k=L.T,re={};L.T=re;try{var _e=S(),Me=L.S;Me!==null&&Me(re,_e),typeof _e=="object"&&_e!==null&&typeof _e.then=="function"&&_e.then(O,ae)}catch(J){ae(J)}finally{k!==null&&re.types!==null&&(k.types=re.types),L.T=k}},mt.unstable_useCacheRefresh=function(){return L.H.useCacheRefresh()},mt.use=function(S){return L.H.use(S)},mt.useActionState=function(S,k,re){return L.H.useActionState(S,k,re)},mt.useCallback=function(S,k){return L.H.useCallback(S,k)},mt.useContext=function(S){return L.H.useContext(S)},mt.useDebugValue=function(){},mt.useDeferredValue=function(S,k){return L.H.useDeferredValue(S,k)},mt.useEffect=function(S,k){return L.H.useEffect(S,k)},mt.useEffectEvent=function(S){return L.H.useEffectEvent(S)},mt.useId=function(){return L.H.useId()},mt.useImperativeHandle=function(S,k,re){return L.H.useImperativeHandle(S,k,re)},mt.useInsertionEffect=function(S,k){return L.H.useInsertionEffect(S,k)},mt.useLayoutEffect=function(S,k){return L.H.useLayoutEffect(S,k)},mt.useMemo=function(S,k){return L.H.useMemo(S,k)},mt.useOptimistic=function(S,k){return L.H.useOptimistic(S,k)},mt.useReducer=function(S,k,re){return L.H.useReducer(S,k,re)},mt.useRef=function(S){return L.H.useRef(S)},mt.useState=function(S){return L.H.useState(S)},mt.useSyncExternalStore=function(S,k,re){return L.H.useSyncExternalStore(S,k,re)},mt.useTransition=function(){return L.H.useTransition()},mt.version="19.2.8",mt}var qg;function Vh(){return qg||(qg=1,ud.exports=Ky()),ud.exports}var Ke=Vh(),fd={exports:{}},Wo={},dd={exports:{}},hd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yg;function Qy(){return Yg||(Yg=1,(function(r){function e(I,z){var Y=I.length;I.push(z);e:for(;0<Y;){var ae=Y-1>>>1,H=I[ae];if(0<l(H,z))I[ae]=z,I[Y]=H,Y=ae;else break e}}function i(I){return I.length===0?null:I[0]}function s(I){if(I.length===0)return null;var z=I[0],Y=I.pop();if(Y!==z){I[0]=Y;e:for(var ae=0,H=I.length,S=H>>>1;ae<S;){var k=2*(ae+1)-1,re=I[k],_e=k+1,Me=I[_e];if(0>l(re,Y))_e<H&&0>l(Me,re)?(I[ae]=Me,I[_e]=Y,ae=_e):(I[ae]=re,I[k]=Y,ae=k);else if(_e<H&&0>l(Me,Y))I[ae]=Me,I[_e]=Y,ae=_e;else break e}}return z}function l(I,z){var Y=I.sortIndex-z.sortIndex;return Y!==0?Y:I.id-z.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var d=Date,p=d.now();r.unstable_now=function(){return d.now()-p}}var m=[],h=[],_=1,y=null,g=3,T=!1,A=!1,U=!1,b=!1,v=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function D(I){for(var z=i(h);z!==null;){if(z.callback===null)s(h);else if(z.startTime<=I)s(h),z.sortIndex=z.expirationTime,e(m,z);else break;z=i(h)}}function V(I){if(U=!1,D(I),!A)if(i(m)!==null)A=!0,O||(O=!0,j());else{var z=i(h);z!==null&&q(V,z.startTime-I)}}var O=!1,L=-1,E=5,N=-1;function X(){return b?!0:!(r.unstable_now()-N<E)}function G(){if(b=!1,O){var I=r.unstable_now();N=I;var z=!0;try{e:{A=!1,U&&(U=!1,F(L),L=-1),T=!0;var Y=g;try{t:{for(D(I),y=i(m);y!==null&&!(y.expirationTime>I&&X());){var ae=y.callback;if(typeof ae=="function"){y.callback=null,g=y.priorityLevel;var H=ae(y.expirationTime<=I);if(I=r.unstable_now(),typeof H=="function"){y.callback=H,D(I),z=!0;break t}y===i(m)&&s(m),D(I)}else s(m);y=i(m)}if(y!==null)z=!0;else{var S=i(h);S!==null&&q(V,S.startTime-I),z=!1}}break e}finally{y=null,g=Y,T=!1}z=void 0}}finally{z?j():O=!1}}}var j;if(typeof P=="function")j=function(){P(G)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,te=Q.port2;Q.port1.onmessage=G,j=function(){te.postMessage(null)}}else j=function(){v(G,0)};function q(I,z){L=v(function(){I(r.unstable_now())},z)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(I){I.callback=null},r.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<I?Math.floor(1e3/I):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(I){switch(g){case 1:case 2:case 3:var z=3;break;default:z=g}var Y=g;g=z;try{return I()}finally{g=Y}},r.unstable_requestPaint=function(){b=!0},r.unstable_runWithPriority=function(I,z){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var Y=g;g=I;try{return z()}finally{g=Y}},r.unstable_scheduleCallback=function(I,z,Y){var ae=r.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?ae+Y:ae):Y=ae,I){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=Y+H,I={id:_++,callback:z,priorityLevel:I,startTime:Y,expirationTime:H,sortIndex:-1},Y>ae?(I.sortIndex=Y,e(h,I),i(m)===null&&I===i(h)&&(U?(F(L),L=-1):U=!0,q(V,Y-ae))):(I.sortIndex=H,e(m,I),A||T||(A=!0,O||(O=!0,j()))),I},r.unstable_shouldYield=X,r.unstable_wrapCallback=function(I){var z=g;return function(){var Y=g;g=z;try{return I.apply(this,arguments)}finally{g=Y}}}})(hd)),hd}var Zg;function Jy(){return Zg||(Zg=1,dd.exports=Qy()),dd.exports}var pd={exports:{}},Fn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kg;function $y(){if(Kg)return Fn;Kg=1;var r=Vh();function e(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)h+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,h,_){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:y==null?null:""+y,children:m,containerInfo:h,implementation:_}}var d=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Fn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Fn.createPortal=function(m,h){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return c(m,h,null,_)},Fn.flushSync=function(m){var h=d.T,_=s.p;try{if(d.T=null,s.p=2,m)return m()}finally{d.T=h,s.p=_,s.d.f()}},Fn.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,s.d.C(m,h))},Fn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Fn.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var _=h.as,y=p(_,h.crossOrigin),g=typeof h.integrity=="string"?h.integrity:void 0,T=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;_==="style"?s.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:y,integrity:g,fetchPriority:T}):_==="script"&&s.d.X(m,{crossOrigin:y,integrity:g,fetchPriority:T,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Fn.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var _=p(h.as,h.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&s.d.M(m)},Fn.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var _=h.as,y=p(_,h.crossOrigin);s.d.L(m,_,{crossOrigin:y,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Fn.preloadModule=function(m,h){if(typeof m=="string")if(h){var _=p(h.as,h.crossOrigin);s.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:_,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else s.d.m(m)},Fn.requestFormReset=function(m){s.d.r(m)},Fn.unstable_batchedUpdates=function(m,h){return m(h)},Fn.useFormState=function(m,h,_){return d.H.useFormState(m,h,_)},Fn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Fn.version="19.2.8",Fn}var Qg;function eS(){if(Qg)return pd.exports;Qg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),pd.exports=$y(),pd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jg;function tS(){if(Jg)return Wo;Jg=1;var r=Jy(),e=Vh(),i=eS();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(s(188))}function h(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===o)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var x=!1,R=u.child;R;){if(R===a){x=!0,a=u,o=f;break}if(R===o){x=!0,o=u,a=f;break}R=R.sibling}if(!x){for(R=f.child;R;){if(R===a){x=!0,a=f,o=u;break}if(R===o){x=!0,o=f,a=u;break}R=R.sibling}if(!x)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function _(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=_(t),n!==null)return n;t=t.sibling}return null}var y=Object.assign,g=Symbol.for("react.element"),T=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),F=Symbol.for("react.consumer"),P=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),L=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),X=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function j(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var Q=Symbol.for("react.client.reference");function te(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Q?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case U:return"Fragment";case v:return"Profiler";case b:return"StrictMode";case V:return"Suspense";case O:return"SuspenseList";case N:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case A:return"Portal";case P:return t.displayName||"Context";case F:return(t._context.displayName||"Context")+".Consumer";case D:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case L:return n=t.displayName||null,n!==null?n:te(t.type)||"Memo";case E:n=t._payload,t=t._init;try{return te(t(n))}catch{}}return null}var q=Array.isArray,I=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},ae=[],H=-1;function S(t){return{current:t}}function k(t){0>H||(t.current=ae[H],ae[H]=null,H--)}function re(t,n){H++,ae[H]=t.current,t.current=n}var _e=S(null),Me=S(null),J=S(null),se=S(null);function me(t,n){switch(re(J,n),re(Me,t),re(_e,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?hg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=hg(n),t=pg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}k(_e),re(_e,t)}function we(){k(_e),k(Me),k(J)}function Be(t){t.memoizedState!==null&&re(se,t);var n=_e.current,a=pg(n,t.type);n!==a&&(re(Me,t),re(_e,a))}function De(t){Me.current===t&&(k(_e),k(Me)),se.current===t&&(k(se),Go._currentValue=Y)}var nt,$e;function Ge(t){if(nt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);nt=n&&n[1]||"",$e=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+nt+t+$e}var rt=!1;function ot(t,n){if(!t||rt)return"";rt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Te=function(){throw Error()};if(Object.defineProperty(Te.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Te,[])}catch(ge){var pe=ge}Reflect.construct(t,[],Te)}else{try{Te.call()}catch(ge){pe=ge}t.call(Te.prototype)}}else{try{throw Error()}catch(ge){pe=ge}(Te=t())&&typeof Te.catch=="function"&&Te.catch(function(){})}}catch(ge){if(ge&&pe&&typeof ge.stack=="string")return[ge.stack,pe.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),x=f[0],R=f[1];if(x&&R){var W=x.split(`
`),le=R.split(`
`);for(u=o=0;o<W.length&&!W[o].includes("DetermineComponentFrameRoot");)o++;for(;u<le.length&&!le[u].includes("DetermineComponentFrameRoot");)u++;if(o===W.length||u===le.length)for(o=W.length-1,u=le.length-1;1<=o&&0<=u&&W[o]!==le[u];)u--;for(;1<=o&&0<=u;o--,u--)if(W[o]!==le[u]){if(o!==1||u!==1)do if(o--,u--,0>u||W[o]!==le[u]){var Se=`
`+W[o].replace(" at new "," at ");return t.displayName&&Se.includes("<anonymous>")&&(Se=Se.replace("<anonymous>",t.displayName)),Se}while(1<=o&&0<=u);break}}}finally{rt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Ge(a):""}function qe(t,n){switch(t.tag){case 26:case 27:case 5:return Ge(t.type);case 16:return Ge("Lazy");case 13:return t.child!==n&&n!==null?Ge("Suspense Fallback"):Ge("Suspense");case 19:return Ge("SuspenseList");case 0:case 15:return ot(t.type,!1);case 11:return ot(t.type.render,!1);case 1:return ot(t.type,!0);case 31:return Ge("Activity");default:return""}}function pt(t){try{var n="",a=null;do n+=qe(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var lt=Object.prototype.hasOwnProperty,yt=r.unstable_scheduleCallback,Ot=r.unstable_cancelCallback,tn=r.unstable_shouldYield,$=r.unstable_requestPaint,Ft=r.unstable_now,Ut=r.unstable_getCurrentPriorityLevel,B=r.unstable_ImmediatePriority,M=r.unstable_UserBlockingPriority,ie=r.unstable_NormalPriority,de=r.unstable_LowPriority,xe=r.unstable_IdlePriority,Ce=r.log,Le=r.unstable_setDisableYieldValue,ve=null,ye=null;function Ne(t){if(typeof Ce=="function"&&Le(t),ye&&typeof ye.setStrictMode=="function")try{ye.setStrictMode(ve,t)}catch{}}var Ve=Math.clz32?Math.clz32:tt,Ie=Math.log,Oe=Math.LN2;function tt(t){return t>>>=0,t===0?32:31-(Ie(t)/Oe|0)|0}var it=256,ft=262144,K=4194304;function Re(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function be(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,f=t.suspendedLanes,x=t.pingedLanes;t=t.warmLanes;var R=o&134217727;return R!==0?(o=R&~f,o!==0?u=Re(o):(x&=R,x!==0?u=Re(x):a||(a=R&~t,a!==0&&(u=Re(a))))):(R=o&~f,R!==0?u=Re(R):x!==0?u=Re(x):a||(a=o&~t,a!==0&&(u=Re(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Ue(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function He(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ae(){var t=K;return K<<=1,(K&62914560)===0&&(K=4194304),t}function Qe(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function je(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function nn(t,n,a,o,u,f){var x=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var R=t.entanglements,W=t.expirationTimes,le=t.hiddenUpdates;for(a=x&~a;0<a;){var Se=31-Ve(a),Te=1<<Se;R[Se]=0,W[Se]=-1;var pe=le[Se];if(pe!==null)for(le[Se]=null,Se=0;Se<pe.length;Se++){var ge=pe[Se];ge!==null&&(ge.lane&=-536870913)}a&=~Te}o!==0&&Gt(t,o,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(x&~n))}function Gt(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Ve(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function ti(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Ve(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function ni(t,n){var a=n&-n;return a=(a&42)!==0?1:eo(a),(a&(t.suspendedLanes|n))!==0?0:a}function eo(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function to(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function no(){var t=z.p;return t!==0?t:(t=window.event,t===void 0?32:zg(t.type))}function Zs(t,n){var a=z.p;try{return z.p=t,n()}finally{z.p=a}}var Fi=Math.random().toString(36).slice(2),mn="__reactFiber$"+Fi,Cn="__reactProps$"+Fi,Wn="__reactContainer$"+Fi,ps="__reactEvents$"+Fi,ol="__reactListeners$"+Fi,ll="__reactHandles$"+Fi,ms="__reactResources$"+Fi,Ua="__reactMarker$"+Fi;function La(t){delete t[mn],delete t[Cn],delete t[ps],delete t[ol],delete t[ll]}function ta(t){var n=t[mn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Wn]||a[mn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Sg(t);t!==null;){if(a=t[mn])return a;t=Sg(t)}return n}t=a,a=t.parentNode}return null}function na(t){if(t=t[mn]||t[Wn]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function gs(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Oa(t){var n=t[ms];return n||(n=t[ms]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function gn(t){t[Ua]=!0}var cl=new Set,C={};function ee(t,n){he(t,n),he(t+"Capture",n)}function he(t,n){for(C[t]=n,t=0;t<n.length;t++)cl.add(n[t])}var ce=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ue={},ze={};function Xe(t){return lt.call(ze,t)?!0:lt.call(ue,t)?!1:ce.test(t)?ze[t]=!0:(ue[t]=!0,!1)}function Pe(t,n,a){if(Xe(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Ye(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function We(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function at(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function xt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function et(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(x){a=""+x,f.call(this,x)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Pt(t){if(!t._valueTracker){var n=xt(t)?"checked":"value";t._valueTracker=et(t,n,""+t[n])}}function an(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=xt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function Qt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Vt=/[\n"\\]/g;function kt(t){return t.replace(Vt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function ke(t,n,a,o,u,f,x,R){t.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?t.type=x:t.removeAttribute("type"),n!=null?x==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+at(n)):t.value!==""+at(n)&&(t.value=""+at(n)):x!=="submit"&&x!=="reset"||t.removeAttribute("value"),n!=null?bt(t,x,at(n)):a!=null?bt(t,x,at(a)):o!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+at(R):t.removeAttribute("name")}function zn(t,n,a,o,u,f,x,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Pt(t);return}a=a!=null?""+at(a):"",n=n!=null?""+at(n):a,R||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=R?t.checked:!!o,t.defaultChecked=!!o,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(t.name=x),Pt(t)}function bt(t,n,a){n==="number"&&Qt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function bn(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+at(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function ii(t,n,a){if(n!=null&&(n=""+at(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+at(a):""}function Ai(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(q(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=at(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),Pt(t)}function ai(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Xt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function sn(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Xt.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function wi(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&sn(t,u,o)}else for(var f in n)n.hasOwnProperty(f)&&sn(t,f,n[f])}function Ht(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Pa=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function xs(t){return Pa.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ia(){}var su=null;function ru(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ks=null,Qs=null;function dp(t){var n=na(t);if(n&&(t=n.stateNode)){var a=t[Cn]||null;e:switch(t=n.stateNode,n.type){case"input":if(ke(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+kt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[Cn]||null;if(!u)throw Error(s(90));ke(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&an(o)}break e;case"textarea":ii(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&bn(t,!!a.multiple,n,!1)}}}var ou=!1;function hp(t,n,a){if(ou)return t(n,a);ou=!0;try{var o=t(n);return o}finally{if(ou=!1,(Ks!==null||Qs!==null)&&(Kl(),Ks&&(n=Ks,t=Qs,Qs=Ks=null,dp(n),t)))for(n=0;n<t.length;n++)dp(t[n])}}function io(t,n){var a=t.stateNode;if(a===null)return null;var o=a[Cn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var aa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lu=!1;if(aa)try{var ao={};Object.defineProperty(ao,"passive",{get:function(){lu=!0}}),window.addEventListener("test",ao,ao),window.removeEventListener("test",ao,ao)}catch{lu=!1}var Ia=null,cu=null,ul=null;function pp(){if(ul)return ul;var t,n=cu,a=n.length,o,u="value"in Ia?Ia.value:Ia.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var x=a-t;for(o=1;o<=x&&n[a-o]===u[f-o];o++);return ul=u.slice(t,1<o?1-o:void 0)}function fl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function dl(){return!0}function mp(){return!1}function qn(t){function n(a,o,u,f,x){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(a=t[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?dl:mp,this.isPropagationStopped=mp,this}return y(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=dl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=dl)},persist:function(){},isPersistent:dl}),n}var vs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hl=qn(vs),so=y({},vs,{view:0,detail:0}),Wv=qn(so),uu,fu,ro,pl=y({},so,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ro&&(ro&&t.type==="mousemove"?(uu=t.screenX-ro.screenX,fu=t.screenY-ro.screenY):fu=uu=0,ro=t),uu)},movementY:function(t){return"movementY"in t?t.movementY:fu}}),gp=qn(pl),qv=y({},pl,{dataTransfer:0}),Yv=qn(qv),Zv=y({},so,{relatedTarget:0}),du=qn(Zv),Kv=y({},vs,{animationName:0,elapsedTime:0,pseudoElement:0}),Qv=qn(Kv),Jv=y({},vs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),$v=qn(Jv),e_=y({},vs,{data:0}),xp=qn(e_),t_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},n_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},i_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function a_(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=i_[t])?!!n[t]:!1}function hu(){return a_}var s_=y({},so,{key:function(t){if(t.key){var n=t_[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=fl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?n_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hu,charCode:function(t){return t.type==="keypress"?fl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?fl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),r_=qn(s_),o_=y({},pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vp=qn(o_),l_=y({},so,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hu}),c_=qn(l_),u_=y({},vs,{propertyName:0,elapsedTime:0,pseudoElement:0}),f_=qn(u_),d_=y({},pl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),h_=qn(d_),p_=y({},vs,{newState:0,oldState:0}),m_=qn(p_),g_=[9,13,27,32],pu=aa&&"CompositionEvent"in window,oo=null;aa&&"documentMode"in document&&(oo=document.documentMode);var x_=aa&&"TextEvent"in window&&!oo,_p=aa&&(!pu||oo&&8<oo&&11>=oo),yp=" ",Sp=!1;function bp(t,n){switch(t){case"keyup":return g_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Js=!1;function v_(t,n){switch(t){case"compositionend":return Mp(n);case"keypress":return n.which!==32?null:(Sp=!0,yp);case"textInput":return t=n.data,t===yp&&Sp?null:t;default:return null}}function __(t,n){if(Js)return t==="compositionend"||!pu&&bp(t,n)?(t=pp(),ul=cu=Ia=null,Js=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return _p&&n.locale!=="ko"?null:n.data;default:return null}}var y_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ep(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!y_[t.type]:n==="textarea"}function Tp(t,n,a,o){Ks?Qs?Qs.push(o):Qs=[o]:Ks=o,n=ic(n,"onChange"),0<n.length&&(a=new hl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var lo=null,co=null;function S_(t){og(t,0)}function ml(t){var n=gs(t);if(an(n))return t}function Ap(t,n){if(t==="change")return n}var wp=!1;if(aa){var mu;if(aa){var gu="oninput"in document;if(!gu){var Cp=document.createElement("div");Cp.setAttribute("oninput","return;"),gu=typeof Cp.oninput=="function"}mu=gu}else mu=!1;wp=mu&&(!document.documentMode||9<document.documentMode)}function Rp(){lo&&(lo.detachEvent("onpropertychange",Np),co=lo=null)}function Np(t){if(t.propertyName==="value"&&ml(co)){var n=[];Tp(n,co,t,ru(t)),hp(S_,n)}}function b_(t,n,a){t==="focusin"?(Rp(),lo=n,co=a,lo.attachEvent("onpropertychange",Np)):t==="focusout"&&Rp()}function M_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ml(co)}function E_(t,n){if(t==="click")return ml(n)}function T_(t,n){if(t==="input"||t==="change")return ml(n)}function A_(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var si=typeof Object.is=="function"?Object.is:A_;function uo(t,n){if(si(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!lt.call(n,u)||!si(t[u],n[u]))return!1}return!0}function Dp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Up(t,n){var a=Dp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Dp(a)}}function Lp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Lp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Op(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Qt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Qt(t.document)}return n}function xu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var w_=aa&&"documentMode"in document&&11>=document.documentMode,$s=null,vu=null,fo=null,_u=!1;function Pp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;_u||$s==null||$s!==Qt(o)||(o=$s,"selectionStart"in o&&xu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),fo&&uo(fo,o)||(fo=o,o=ic(vu,"onSelect"),0<o.length&&(n=new hl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=$s)))}function _s(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var er={animationend:_s("Animation","AnimationEnd"),animationiteration:_s("Animation","AnimationIteration"),animationstart:_s("Animation","AnimationStart"),transitionrun:_s("Transition","TransitionRun"),transitionstart:_s("Transition","TransitionStart"),transitioncancel:_s("Transition","TransitionCancel"),transitionend:_s("Transition","TransitionEnd")},yu={},Ip={};aa&&(Ip=document.createElement("div").style,"AnimationEvent"in window||(delete er.animationend.animation,delete er.animationiteration.animation,delete er.animationstart.animation),"TransitionEvent"in window||delete er.transitionend.transition);function ys(t){if(yu[t])return yu[t];if(!er[t])return t;var n=er[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Ip)return yu[t]=n[a];return t}var zp=ys("animationend"),Fp=ys("animationiteration"),Bp=ys("animationstart"),C_=ys("transitionrun"),R_=ys("transitionstart"),N_=ys("transitioncancel"),Hp=ys("transitionend"),Gp=new Map,Su="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Su.push("scrollEnd");function Ci(t,n){Gp.set(t,n),ee(n,[t])}var gl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},gi=[],tr=0,bu=0;function xl(){for(var t=tr,n=bu=tr=0;n<t;){var a=gi[n];gi[n++]=null;var o=gi[n];gi[n++]=null;var u=gi[n];gi[n++]=null;var f=gi[n];if(gi[n++]=null,o!==null&&u!==null){var x=o.pending;x===null?u.next=u:(u.next=x.next,x.next=u),o.pending=u}f!==0&&Vp(a,u,f)}}function vl(t,n,a,o){gi[tr++]=t,gi[tr++]=n,gi[tr++]=a,gi[tr++]=o,bu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Mu(t,n,a,o){return vl(t,n,a,o),_l(t)}function Ss(t,n){return vl(t,null,null,n),_l(t)}function Vp(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Ve(a),t=f.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function _l(t){if(50<Oo)throw Oo=0,Lf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var nr={};function D_(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ri(t,n,a,o){return new D_(t,n,a,o)}function Eu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function sa(t,n){var a=t.alternate;return a===null?(a=ri(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function kp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function yl(t,n,a,o,u,f){var x=0;if(o=t,typeof t=="function")Eu(t)&&(x=1);else if(typeof t=="string")x=Iy(t,a,_e.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case N:return t=ri(31,a,n,u),t.elementType=N,t.lanes=f,t;case U:return bs(a.children,u,f,n);case b:x=8,u|=24;break;case v:return t=ri(12,a,n,u|2),t.elementType=v,t.lanes=f,t;case V:return t=ri(13,a,n,u),t.elementType=V,t.lanes=f,t;case O:return t=ri(19,a,n,u),t.elementType=O,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case P:x=10;break e;case F:x=9;break e;case D:x=11;break e;case L:x=14;break e;case E:x=16,o=null;break e}x=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=ri(x,a,n,u),n.elementType=t,n.type=o,n.lanes=f,n}function bs(t,n,a,o){return t=ri(7,t,o,n),t.lanes=a,t}function Tu(t,n,a){return t=ri(6,t,null,n),t.lanes=a,t}function Xp(t){var n=ri(18,null,null,0);return n.stateNode=t,n}function Au(t,n,a){return n=ri(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var jp=new WeakMap;function xi(t,n){if(typeof t=="object"&&t!==null){var a=jp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:pt(n)},jp.set(t,n),n)}return{value:t,source:n,stack:pt(n)}}var ir=[],ar=0,Sl=null,ho=0,vi=[],_i=0,za=null,Hi=1,Gi="";function ra(t,n){ir[ar++]=ho,ir[ar++]=Sl,Sl=t,ho=n}function Wp(t,n,a){vi[_i++]=Hi,vi[_i++]=Gi,vi[_i++]=za,za=t;var o=Hi;t=Gi;var u=32-Ve(o)-1;o&=~(1<<u),a+=1;var f=32-Ve(n)+u;if(30<f){var x=u-u%5;f=(o&(1<<x)-1).toString(32),o>>=x,u-=x,Hi=1<<32-Ve(n)+u|a<<u|o,Gi=f+t}else Hi=1<<f|a<<u|o,Gi=t}function wu(t){t.return!==null&&(ra(t,1),Wp(t,1,0))}function Cu(t){for(;t===Sl;)Sl=ir[--ar],ir[ar]=null,ho=ir[--ar],ir[ar]=null;for(;t===za;)za=vi[--_i],vi[_i]=null,Gi=vi[--_i],vi[_i]=null,Hi=vi[--_i],vi[_i]=null}function qp(t,n){vi[_i++]=Hi,vi[_i++]=Gi,vi[_i++]=za,Hi=n.id,Gi=n.overflow,za=t}var Rn=null,$t=null,Rt=!1,Fa=null,yi=!1,Ru=Error(s(519));function Ba(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw po(xi(n,t)),Ru}function Yp(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[mn]=t,n[Cn]=o,a){case"dialog":Et("cancel",n),Et("close",n);break;case"iframe":case"object":case"embed":Et("load",n);break;case"video":case"audio":for(a=0;a<Io.length;a++)Et(Io[a],n);break;case"source":Et("error",n);break;case"img":case"image":case"link":Et("error",n),Et("load",n);break;case"details":Et("toggle",n);break;case"input":Et("invalid",n),zn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Et("invalid",n);break;case"textarea":Et("invalid",n),Ai(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||fg(n.textContent,a)?(o.popover!=null&&(Et("beforetoggle",n),Et("toggle",n)),o.onScroll!=null&&Et("scroll",n),o.onScrollEnd!=null&&Et("scrollend",n),o.onClick!=null&&(n.onclick=ia),n=!0):n=!1,n||Ba(t,!0)}function Zp(t){for(Rn=t.return;Rn;)switch(Rn.tag){case 5:case 31:case 13:yi=!1;return;case 27:case 3:yi=!0;return;default:Rn=Rn.return}}function sr(t){if(t!==Rn)return!1;if(!Rt)return Zp(t),Rt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Yf(t.type,t.memoizedProps)),a=!a),a&&$t&&Ba(t),Zp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));$t=yg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));$t=yg(t)}else n===27?(n=$t,$a(t.type)?(t=$f,$f=null,$t=t):$t=n):$t=Rn?bi(t.stateNode.nextSibling):null;return!0}function Ms(){$t=Rn=null,Rt=!1}function Nu(){var t=Fa;return t!==null&&(Qn===null?Qn=t:Qn.push.apply(Qn,t),Fa=null),t}function po(t){Fa===null?Fa=[t]:Fa.push(t)}var Du=S(null),Es=null,oa=null;function Ha(t,n,a){re(Du,n._currentValue),n._currentValue=a}function la(t){t._currentValue=Du.current,k(Du)}function Uu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Lu(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var x=u.child;f=f.firstContext;e:for(;f!==null;){var R=f;f=u;for(var W=0;W<n.length;W++)if(R.context===n[W]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),Uu(f.return,a,t),o||(x=null);break e}f=R.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(s(341));x.lanes|=a,f=x.alternate,f!==null&&(f.lanes|=a),Uu(x,a,t),x=null}else x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===t){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function rr(t,n,a,o){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(s(387));if(x=x.memoizedProps,x!==null){var R=u.type;si(u.pendingProps.value,x.value)||(t!==null?t.push(R):t=[R])}}else if(u===se.current){if(x=u.alternate,x===null)throw Error(s(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Go):t=[Go])}u=u.return}t!==null&&Lu(n,t,a,o),n.flags|=262144}function bl(t){for(t=t.firstContext;t!==null;){if(!si(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ts(t){Es=t,oa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Nn(t){return Kp(Es,t)}function Ml(t,n){return Es===null&&Ts(t),Kp(t,n)}function Kp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},oa===null){if(t===null)throw Error(s(308));oa=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else oa=oa.next=n;return a}var U_=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},L_=r.unstable_scheduleCallback,O_=r.unstable_NormalPriority,xn={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ou(){return{controller:new U_,data:new Map,refCount:0}}function mo(t){t.refCount--,t.refCount===0&&L_(O_,function(){t.controller.abort()})}var go=null,Pu=0,or=0,lr=null;function P_(t,n){if(go===null){var a=go=[];Pu=0,or=Bf(),lr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Pu++,n.then(Qp,Qp),n}function Qp(){if(--Pu===0&&go!==null){lr!==null&&(lr.status="fulfilled");var t=go;go=null,or=0,lr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function I_(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Jp=I.S;I.S=function(t,n){P0=Ft(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&P_(t,n),Jp!==null&&Jp(t,n)};var As=S(null);function Iu(){var t=As.current;return t!==null?t:Jt.pooledCache}function El(t,n){n===null?re(As,As.current):re(As,n.pool)}function $p(){var t=Iu();return t===null?null:{parent:xn._currentValue,pool:t}}var cr=Error(s(460)),zu=Error(s(474)),Tl=Error(s(542)),Al={then:function(){}};function em(t){return t=t.status,t==="fulfilled"||t==="rejected"}function tm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(ia,ia),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,im(t),t;default:if(typeof n.status=="string")n.then(ia,ia);else{if(t=Jt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,im(t),t}throw Cs=n,cr}}function ws(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Cs=a,cr):a}}var Cs=null;function nm(){if(Cs===null)throw Error(s(459));var t=Cs;return Cs=null,t}function im(t){if(t===cr||t===Tl)throw Error(s(483))}var ur=null,xo=0;function wl(t){var n=xo;return xo+=1,ur===null&&(ur=[]),tm(ur,t,n)}function vo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Cl(t,n){throw n.$$typeof===g?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function am(t){function n(ne,Z){if(t){var oe=ne.deletions;oe===null?(ne.deletions=[Z],ne.flags|=16):oe.push(Z)}}function a(ne,Z){if(!t)return null;for(;Z!==null;)n(ne,Z),Z=Z.sibling;return null}function o(ne){for(var Z=new Map;ne!==null;)ne.key!==null?Z.set(ne.key,ne):Z.set(ne.index,ne),ne=ne.sibling;return Z}function u(ne,Z){return ne=sa(ne,Z),ne.index=0,ne.sibling=null,ne}function f(ne,Z,oe){return ne.index=oe,t?(oe=ne.alternate,oe!==null?(oe=oe.index,oe<Z?(ne.flags|=67108866,Z):oe):(ne.flags|=67108866,Z)):(ne.flags|=1048576,Z)}function x(ne){return t&&ne.alternate===null&&(ne.flags|=67108866),ne}function R(ne,Z,oe,Ee){return Z===null||Z.tag!==6?(Z=Tu(oe,ne.mode,Ee),Z.return=ne,Z):(Z=u(Z,oe),Z.return=ne,Z)}function W(ne,Z,oe,Ee){var st=oe.type;return st===U?Se(ne,Z,oe.props.children,Ee,oe.key):Z!==null&&(Z.elementType===st||typeof st=="object"&&st!==null&&st.$$typeof===E&&ws(st)===Z.type)?(Z=u(Z,oe.props),vo(Z,oe),Z.return=ne,Z):(Z=yl(oe.type,oe.key,oe.props,null,ne.mode,Ee),vo(Z,oe),Z.return=ne,Z)}function le(ne,Z,oe,Ee){return Z===null||Z.tag!==4||Z.stateNode.containerInfo!==oe.containerInfo||Z.stateNode.implementation!==oe.implementation?(Z=Au(oe,ne.mode,Ee),Z.return=ne,Z):(Z=u(Z,oe.children||[]),Z.return=ne,Z)}function Se(ne,Z,oe,Ee,st){return Z===null||Z.tag!==7?(Z=bs(oe,ne.mode,Ee,st),Z.return=ne,Z):(Z=u(Z,oe),Z.return=ne,Z)}function Te(ne,Z,oe){if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return Z=Tu(""+Z,ne.mode,oe),Z.return=ne,Z;if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case T:return oe=yl(Z.type,Z.key,Z.props,null,ne.mode,oe),vo(oe,Z),oe.return=ne,oe;case A:return Z=Au(Z,ne.mode,oe),Z.return=ne,Z;case E:return Z=ws(Z),Te(ne,Z,oe)}if(q(Z)||j(Z))return Z=bs(Z,ne.mode,oe,null),Z.return=ne,Z;if(typeof Z.then=="function")return Te(ne,wl(Z),oe);if(Z.$$typeof===P)return Te(ne,Ml(ne,Z),oe);Cl(ne,Z)}return null}function pe(ne,Z,oe,Ee){var st=Z!==null?Z.key:null;if(typeof oe=="string"&&oe!==""||typeof oe=="number"||typeof oe=="bigint")return st!==null?null:R(ne,Z,""+oe,Ee);if(typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case T:return oe.key===st?W(ne,Z,oe,Ee):null;case A:return oe.key===st?le(ne,Z,oe,Ee):null;case E:return oe=ws(oe),pe(ne,Z,oe,Ee)}if(q(oe)||j(oe))return st!==null?null:Se(ne,Z,oe,Ee,null);if(typeof oe.then=="function")return pe(ne,Z,wl(oe),Ee);if(oe.$$typeof===P)return pe(ne,Z,Ml(ne,oe),Ee);Cl(ne,oe)}return null}function ge(ne,Z,oe,Ee,st){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number"||typeof Ee=="bigint")return ne=ne.get(oe)||null,R(Z,ne,""+Ee,st);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case T:return ne=ne.get(Ee.key===null?oe:Ee.key)||null,W(Z,ne,Ee,st);case A:return ne=ne.get(Ee.key===null?oe:Ee.key)||null,le(Z,ne,Ee,st);case E:return Ee=ws(Ee),ge(ne,Z,oe,Ee,st)}if(q(Ee)||j(Ee))return ne=ne.get(oe)||null,Se(Z,ne,Ee,st,null);if(typeof Ee.then=="function")return ge(ne,Z,oe,wl(Ee),st);if(Ee.$$typeof===P)return ge(ne,Z,oe,Ml(Z,Ee),st);Cl(Z,Ee)}return null}function Ze(ne,Z,oe,Ee){for(var st=null,It=null,Je=Z,_t=Z=0,At=null;Je!==null&&_t<oe.length;_t++){Je.index>_t?(At=Je,Je=null):At=Je.sibling;var zt=pe(ne,Je,oe[_t],Ee);if(zt===null){Je===null&&(Je=At);break}t&&Je&&zt.alternate===null&&n(ne,Je),Z=f(zt,Z,_t),It===null?st=zt:It.sibling=zt,It=zt,Je=At}if(_t===oe.length)return a(ne,Je),Rt&&ra(ne,_t),st;if(Je===null){for(;_t<oe.length;_t++)Je=Te(ne,oe[_t],Ee),Je!==null&&(Z=f(Je,Z,_t),It===null?st=Je:It.sibling=Je,It=Je);return Rt&&ra(ne,_t),st}for(Je=o(Je);_t<oe.length;_t++)At=ge(Je,ne,_t,oe[_t],Ee),At!==null&&(t&&At.alternate!==null&&Je.delete(At.key===null?_t:At.key),Z=f(At,Z,_t),It===null?st=At:It.sibling=At,It=At);return t&&Je.forEach(function(as){return n(ne,as)}),Rt&&ra(ne,_t),st}function ct(ne,Z,oe,Ee){if(oe==null)throw Error(s(151));for(var st=null,It=null,Je=Z,_t=Z=0,At=null,zt=oe.next();Je!==null&&!zt.done;_t++,zt=oe.next()){Je.index>_t?(At=Je,Je=null):At=Je.sibling;var as=pe(ne,Je,zt.value,Ee);if(as===null){Je===null&&(Je=At);break}t&&Je&&as.alternate===null&&n(ne,Je),Z=f(as,Z,_t),It===null?st=as:It.sibling=as,It=as,Je=At}if(zt.done)return a(ne,Je),Rt&&ra(ne,_t),st;if(Je===null){for(;!zt.done;_t++,zt=oe.next())zt=Te(ne,zt.value,Ee),zt!==null&&(Z=f(zt,Z,_t),It===null?st=zt:It.sibling=zt,It=zt);return Rt&&ra(ne,_t),st}for(Je=o(Je);!zt.done;_t++,zt=oe.next())zt=ge(Je,ne,_t,zt.value,Ee),zt!==null&&(t&&zt.alternate!==null&&Je.delete(zt.key===null?_t:zt.key),Z=f(zt,Z,_t),It===null?st=zt:It.sibling=zt,It=zt);return t&&Je.forEach(function(qy){return n(ne,qy)}),Rt&&ra(ne,_t),st}function Kt(ne,Z,oe,Ee){if(typeof oe=="object"&&oe!==null&&oe.type===U&&oe.key===null&&(oe=oe.props.children),typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case T:e:{for(var st=oe.key;Z!==null;){if(Z.key===st){if(st=oe.type,st===U){if(Z.tag===7){a(ne,Z.sibling),Ee=u(Z,oe.props.children),Ee.return=ne,ne=Ee;break e}}else if(Z.elementType===st||typeof st=="object"&&st!==null&&st.$$typeof===E&&ws(st)===Z.type){a(ne,Z.sibling),Ee=u(Z,oe.props),vo(Ee,oe),Ee.return=ne,ne=Ee;break e}a(ne,Z);break}else n(ne,Z);Z=Z.sibling}oe.type===U?(Ee=bs(oe.props.children,ne.mode,Ee,oe.key),Ee.return=ne,ne=Ee):(Ee=yl(oe.type,oe.key,oe.props,null,ne.mode,Ee),vo(Ee,oe),Ee.return=ne,ne=Ee)}return x(ne);case A:e:{for(st=oe.key;Z!==null;){if(Z.key===st)if(Z.tag===4&&Z.stateNode.containerInfo===oe.containerInfo&&Z.stateNode.implementation===oe.implementation){a(ne,Z.sibling),Ee=u(Z,oe.children||[]),Ee.return=ne,ne=Ee;break e}else{a(ne,Z);break}else n(ne,Z);Z=Z.sibling}Ee=Au(oe,ne.mode,Ee),Ee.return=ne,ne=Ee}return x(ne);case E:return oe=ws(oe),Kt(ne,Z,oe,Ee)}if(q(oe))return Ze(ne,Z,oe,Ee);if(j(oe)){if(st=j(oe),typeof st!="function")throw Error(s(150));return oe=st.call(oe),ct(ne,Z,oe,Ee)}if(typeof oe.then=="function")return Kt(ne,Z,wl(oe),Ee);if(oe.$$typeof===P)return Kt(ne,Z,Ml(ne,oe),Ee);Cl(ne,oe)}return typeof oe=="string"&&oe!==""||typeof oe=="number"||typeof oe=="bigint"?(oe=""+oe,Z!==null&&Z.tag===6?(a(ne,Z.sibling),Ee=u(Z,oe),Ee.return=ne,ne=Ee):(a(ne,Z),Ee=Tu(oe,ne.mode,Ee),Ee.return=ne,ne=Ee),x(ne)):a(ne,Z)}return function(ne,Z,oe,Ee){try{xo=0;var st=Kt(ne,Z,oe,Ee);return ur=null,st}catch(Je){if(Je===cr||Je===Tl)throw Je;var It=ri(29,Je,null,ne.mode);return It.lanes=Ee,It.return=ne,It}finally{}}}var Rs=am(!0),sm=am(!1),Ga=!1;function Fu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Bu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Va(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ka(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Bt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=_l(t),Vp(t,null,a),n}return vl(t,o,n,a),_l(t)}function _o(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,ti(t,a)}}function Hu(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=x:f=f.next=x,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Gu=!1;function yo(){if(Gu){var t=lr;if(t!==null)throw t}}function So(t,n,a,o){Gu=!1;var u=t.updateQueue;Ga=!1;var f=u.firstBaseUpdate,x=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var W=R,le=W.next;W.next=null,x===null?f=le:x.next=le,x=W;var Se=t.alternate;Se!==null&&(Se=Se.updateQueue,R=Se.lastBaseUpdate,R!==x&&(R===null?Se.firstBaseUpdate=le:R.next=le,Se.lastBaseUpdate=W))}if(f!==null){var Te=u.baseState;x=0,Se=le=W=null,R=f;do{var pe=R.lane&-536870913,ge=pe!==R.lane;if(ge?(Tt&pe)===pe:(o&pe)===pe){pe!==0&&pe===or&&(Gu=!0),Se!==null&&(Se=Se.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var Ze=t,ct=R;pe=n;var Kt=a;switch(ct.tag){case 1:if(Ze=ct.payload,typeof Ze=="function"){Te=Ze.call(Kt,Te,pe);break e}Te=Ze;break e;case 3:Ze.flags=Ze.flags&-65537|128;case 0:if(Ze=ct.payload,pe=typeof Ze=="function"?Ze.call(Kt,Te,pe):Ze,pe==null)break e;Te=y({},Te,pe);break e;case 2:Ga=!0}}pe=R.callback,pe!==null&&(t.flags|=64,ge&&(t.flags|=8192),ge=u.callbacks,ge===null?u.callbacks=[pe]:ge.push(pe))}else ge={lane:pe,tag:R.tag,payload:R.payload,callback:R.callback,next:null},Se===null?(le=Se=ge,W=Te):Se=Se.next=ge,x|=pe;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;ge=R,R=ge.next,ge.next=null,u.lastBaseUpdate=ge,u.shared.pending=null}}while(!0);Se===null&&(W=Te),u.baseState=W,u.firstBaseUpdate=le,u.lastBaseUpdate=Se,f===null&&(u.shared.lanes=0),Ya|=x,t.lanes=x,t.memoizedState=Te}}function rm(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function om(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)rm(a[t],n)}var fr=S(null),Rl=S(0);function lm(t,n){t=xa,re(Rl,t),re(fr,n),xa=t|n.baseLanes}function Vu(){re(Rl,xa),re(fr,fr.current)}function ku(){xa=Rl.current,k(fr),k(Rl)}var oi=S(null),Si=null;function Xa(t){var n=t.alternate;re(dn,dn.current&1),re(oi,t),Si===null&&(n===null||fr.current!==null||n.memoizedState!==null)&&(Si=t)}function Xu(t){re(dn,dn.current),re(oi,t),Si===null&&(Si=t)}function cm(t){t.tag===22?(re(dn,dn.current),re(oi,t),Si===null&&(Si=t)):ja()}function ja(){re(dn,dn.current),re(oi,oi.current)}function li(t){k(oi),Si===t&&(Si=null),k(dn)}var dn=S(0);function Nl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Qf(a)||Jf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ca=0,vt=null,Yt=null,vn=null,Dl=!1,dr=!1,Ns=!1,Ul=0,bo=0,hr=null,z_=0;function cn(){throw Error(s(321))}function ju(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!si(t[a],n[a]))return!1;return!0}function Wu(t,n,a,o,u,f){return ca=f,vt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,I.H=t===null||t.memoizedState===null?Wm:lf,Ns=!1,f=a(o,u),Ns=!1,dr&&(f=fm(n,a,o,u)),um(t),f}function um(t){I.H=To;var n=Yt!==null&&Yt.next!==null;if(ca=0,vn=Yt=vt=null,Dl=!1,bo=0,hr=null,n)throw Error(s(300));t===null||_n||(t=t.dependencies,t!==null&&bl(t)&&(_n=!0))}function fm(t,n,a,o){vt=t;var u=0;do{if(dr&&(hr=null),bo=0,dr=!1,25<=u)throw Error(s(301));if(u+=1,vn=Yt=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}I.H=qm,f=n(a,o)}while(dr);return f}function F_(){var t=I.H,n=t.useState()[0];return n=typeof n.then=="function"?Mo(n):n,t=t.useState()[0],(Yt!==null?Yt.memoizedState:null)!==t&&(vt.flags|=1024),n}function qu(){var t=Ul!==0;return Ul=0,t}function Yu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Zu(t){if(Dl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Dl=!1}ca=0,vn=Yt=vt=null,dr=!1,bo=Ul=0,hr=null}function Vn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vn===null?vt.memoizedState=vn=t:vn=vn.next=t,vn}function hn(){if(Yt===null){var t=vt.alternate;t=t!==null?t.memoizedState:null}else t=Yt.next;var n=vn===null?vt.memoizedState:vn.next;if(n!==null)vn=n,Yt=t;else{if(t===null)throw vt.alternate===null?Error(s(467)):Error(s(310));Yt=t,t={memoizedState:Yt.memoizedState,baseState:Yt.baseState,baseQueue:Yt.baseQueue,queue:Yt.queue,next:null},vn===null?vt.memoizedState=vn=t:vn=vn.next=t}return vn}function Ll(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Mo(t){var n=bo;return bo+=1,hr===null&&(hr=[]),t=tm(hr,t,n),n=vt,(vn===null?n.memoizedState:vn.next)===null&&(n=n.alternate,I.H=n===null||n.memoizedState===null?Wm:lf),t}function Ol(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Mo(t);if(t.$$typeof===P)return Nn(t)}throw Error(s(438,String(t)))}function Ku(t){var n=null,a=vt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=vt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ll(),vt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=X;return n.index++,a}function ua(t,n){return typeof n=="function"?n(t):n}function Pl(t){var n=hn();return Qu(n,Yt,t)}function Qu(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=t.baseQueue,f=o.pending;if(f!==null){if(u!==null){var x=u.next;u.next=f.next,f.next=x}n.baseQueue=u=f,o.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var R=x=null,W=null,le=n,Se=!1;do{var Te=le.lane&-536870913;if(Te!==le.lane?(Tt&Te)===Te:(ca&Te)===Te){var pe=le.revertLane;if(pe===0)W!==null&&(W=W.next={lane:0,revertLane:0,gesture:null,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null}),Te===or&&(Se=!0);else if((ca&pe)===pe){le=le.next,pe===or&&(Se=!0);continue}else Te={lane:0,revertLane:le.revertLane,gesture:null,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null},W===null?(R=W=Te,x=f):W=W.next=Te,vt.lanes|=pe,Ya|=pe;Te=le.action,Ns&&a(f,Te),f=le.hasEagerState?le.eagerState:a(f,Te)}else pe={lane:Te,revertLane:le.revertLane,gesture:le.gesture,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null},W===null?(R=W=pe,x=f):W=W.next=pe,vt.lanes|=Te,Ya|=Te;le=le.next}while(le!==null&&le!==n);if(W===null?x=f:W.next=R,!si(f,t.memoizedState)&&(_n=!0,Se&&(a=lr,a!==null)))throw a;t.memoizedState=f,t.baseState=x,t.baseQueue=W,o.lastRenderedState=f}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function Ju(t){var n=hn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var x=u=u.next;do f=t(f,x.action),x=x.next;while(x!==u);si(f,n.memoizedState)||(_n=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function dm(t,n,a){var o=vt,u=hn(),f=Rt;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var x=!si((Yt||u).memoizedState,a);if(x&&(u.memoizedState=a,_n=!0),u=u.queue,tf(mm.bind(null,o,u,t),[t]),u.getSnapshot!==n||x||vn!==null&&vn.memoizedState.tag&1){if(o.flags|=2048,pr(9,{destroy:void 0},pm.bind(null,o,u,a,n),null),Jt===null)throw Error(s(349));f||(ca&127)!==0||hm(o,n,a)}return a}function hm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=vt.updateQueue,n===null?(n=Ll(),vt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function pm(t,n,a,o){n.value=a,n.getSnapshot=o,gm(n)&&xm(t)}function mm(t,n,a){return a(function(){gm(n)&&xm(t)})}function gm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!si(t,a)}catch{return!0}}function xm(t){var n=Ss(t,2);n!==null&&Jn(n,t,2)}function $u(t){var n=Vn();if(typeof t=="function"){var a=t;if(t=a(),Ns){Ne(!0);try{a()}finally{Ne(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:t},n}function vm(t,n,a,o){return t.baseState=a,Qu(t,Yt,typeof o=="function"?o:ua)}function B_(t,n,a,o,u){if(Fl(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};I.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,_m(n,f)):(f.next=a.next,n.pending=a.next=f)}}function _m(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var f=I.T,x={};I.T=x;try{var R=a(u,o),W=I.S;W!==null&&W(x,R),ym(t,n,R)}catch(le){ef(t,n,le)}finally{f!==null&&x.types!==null&&(f.types=x.types),I.T=f}}else try{f=a(u,o),ym(t,n,f)}catch(le){ef(t,n,le)}}function ym(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Sm(t,n,o)},function(o){return ef(t,n,o)}):Sm(t,n,a)}function Sm(t,n,a){n.status="fulfilled",n.value=a,bm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,_m(t,a)))}function ef(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,bm(n),n=n.next;while(n!==o)}t.action=null}function bm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Mm(t,n){return n}function Em(t,n){if(Rt){var a=Jt.formState;if(a!==null){e:{var o=vt;if(Rt){if($t){t:{for(var u=$t,f=yi;u.nodeType!==8;){if(!f){u=null;break t}if(u=bi(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){$t=bi(u.nextSibling),o=u.data==="F!";break e}}Ba(o)}o=!1}o&&(n=a[0])}}return a=Vn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mm,lastRenderedState:n},a.queue=o,a=km.bind(null,vt,o),o.dispatch=a,o=$u(!1),f=of.bind(null,vt,!1,o.queue),o=Vn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=B_.bind(null,vt,u,f,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function Tm(t){var n=hn();return Am(n,Yt,t)}function Am(t,n,a){if(n=Qu(t,n,Mm)[0],t=Pl(ua)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Mo(n)}catch(x){throw x===cr?Tl:x}else o=n;n=hn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(vt.flags|=2048,pr(9,{destroy:void 0},H_.bind(null,u,a),null)),[o,f,t]}function H_(t,n){t.action=n}function wm(t){var n=hn(),a=Yt;if(a!==null)return Am(n,a,t);hn(),n=n.memoizedState,a=hn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function pr(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=vt.updateQueue,n===null&&(n=Ll(),vt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Cm(){return hn().memoizedState}function Il(t,n,a,o){var u=Vn();vt.flags|=t,u.memoizedState=pr(1|n,{destroy:void 0},a,o===void 0?null:o)}function zl(t,n,a,o){var u=hn();o=o===void 0?null:o;var f=u.memoizedState.inst;Yt!==null&&o!==null&&ju(o,Yt.memoizedState.deps)?u.memoizedState=pr(n,f,a,o):(vt.flags|=t,u.memoizedState=pr(1|n,f,a,o))}function Rm(t,n){Il(8390656,8,t,n)}function tf(t,n){zl(2048,8,t,n)}function G_(t){vt.flags|=4;var n=vt.updateQueue;if(n===null)n=Ll(),vt.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Nm(t){var n=hn().memoizedState;return G_({ref:n,nextImpl:t}),function(){if((Bt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Dm(t,n){return zl(4,2,t,n)}function Um(t,n){return zl(4,4,t,n)}function Lm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Om(t,n,a){a=a!=null?a.concat([t]):null,zl(4,4,Lm.bind(null,n,t),a)}function nf(){}function Pm(t,n){var a=hn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&ju(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function Im(t,n){var a=hn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&ju(n,o[1]))return o[0];if(o=t(),Ns){Ne(!0);try{t()}finally{Ne(!1)}}return a.memoizedState=[o,n],o}function af(t,n,a){return a===void 0||(ca&1073741824)!==0&&(Tt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=z0(),vt.lanes|=t,Ya|=t,a)}function zm(t,n,a,o){return si(a,n)?a:fr.current!==null?(t=af(t,a,o),si(t,n)||(_n=!0),t):(ca&42)===0||(ca&1073741824)!==0&&(Tt&261930)===0?(_n=!0,t.memoizedState=a):(t=z0(),vt.lanes|=t,Ya|=t,n)}function Fm(t,n,a,o,u){var f=z.p;z.p=f!==0&&8>f?f:8;var x=I.T,R={};I.T=R,of(t,!1,n,a);try{var W=u(),le=I.S;if(le!==null&&le(R,W),W!==null&&typeof W=="object"&&typeof W.then=="function"){var Se=I_(W,o);Eo(t,n,Se,fi(t))}else Eo(t,n,o,fi(t))}catch(Te){Eo(t,n,{then:function(){},status:"rejected",reason:Te},fi())}finally{z.p=f,x!==null&&R.types!==null&&(x.types=R.types),I.T=x}}function V_(){}function sf(t,n,a,o){if(t.tag!==5)throw Error(s(476));var u=Bm(t).queue;Fm(t,u,n,Y,a===null?V_:function(){return Hm(t),a(o)})}function Bm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:Y},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Hm(t){var n=Bm(t);n.next===null&&(n=t.alternate.memoizedState),Eo(t,n.next.queue,{},fi())}function rf(){return Nn(Go)}function Gm(){return hn().memoizedState}function Vm(){return hn().memoizedState}function k_(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=fi();t=Va(a);var o=ka(n,t,a);o!==null&&(Jn(o,n,a),_o(o,n,a)),n={cache:Ou()},t.payload=n;return}n=n.return}}function X_(t,n,a){var o=fi();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Fl(t)?Xm(n,a):(a=Mu(t,n,a,o),a!==null&&(Jn(a,t,o),jm(a,n,o)))}function km(t,n,a){var o=fi();Eo(t,n,a,o)}function Eo(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Fl(t))Xm(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var x=n.lastRenderedState,R=f(x,a);if(u.hasEagerState=!0,u.eagerState=R,si(R,x))return vl(t,n,u,0),Jt===null&&xl(),!1}catch{}finally{}if(a=Mu(t,n,u,o),a!==null)return Jn(a,t,o),jm(a,n,o),!0}return!1}function of(t,n,a,o){if(o={lane:2,revertLane:Bf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Fl(t)){if(n)throw Error(s(479))}else n=Mu(t,a,o,2),n!==null&&Jn(n,t,2)}function Fl(t){var n=t.alternate;return t===vt||n!==null&&n===vt}function Xm(t,n){dr=Dl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function jm(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,ti(t,a)}}var To={readContext:Nn,use:Ol,useCallback:cn,useContext:cn,useEffect:cn,useImperativeHandle:cn,useLayoutEffect:cn,useInsertionEffect:cn,useMemo:cn,useReducer:cn,useRef:cn,useState:cn,useDebugValue:cn,useDeferredValue:cn,useTransition:cn,useSyncExternalStore:cn,useId:cn,useHostTransitionStatus:cn,useFormState:cn,useActionState:cn,useOptimistic:cn,useMemoCache:cn,useCacheRefresh:cn};To.useEffectEvent=cn;var Wm={readContext:Nn,use:Ol,useCallback:function(t,n){return Vn().memoizedState=[t,n===void 0?null:n],t},useContext:Nn,useEffect:Rm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Il(4194308,4,Lm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Il(4194308,4,t,n)},useInsertionEffect:function(t,n){Il(4,2,t,n)},useMemo:function(t,n){var a=Vn();n=n===void 0?null:n;var o=t();if(Ns){Ne(!0);try{t()}finally{Ne(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Vn();if(a!==void 0){var u=a(n);if(Ns){Ne(!0);try{a(n)}finally{Ne(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=X_.bind(null,vt,t),[o.memoizedState,t]},useRef:function(t){var n=Vn();return t={current:t},n.memoizedState=t},useState:function(t){t=$u(t);var n=t.queue,a=km.bind(null,vt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:nf,useDeferredValue:function(t,n){var a=Vn();return af(a,t,n)},useTransition:function(){var t=$u(!1);return t=Fm.bind(null,vt,t.queue,!0,!1),Vn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=vt,u=Vn();if(Rt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Jt===null)throw Error(s(349));(Tt&127)!==0||hm(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Rm(mm.bind(null,o,f,t),[t]),o.flags|=2048,pr(9,{destroy:void 0},pm.bind(null,o,f,a,n),null),a},useId:function(){var t=Vn(),n=Jt.identifierPrefix;if(Rt){var a=Gi,o=Hi;a=(o&~(1<<32-Ve(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Ul++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=z_++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:rf,useFormState:Em,useActionState:Em,useOptimistic:function(t){var n=Vn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=of.bind(null,vt,!0,a),a.dispatch=n,[t,n]},useMemoCache:Ku,useCacheRefresh:function(){return Vn().memoizedState=k_.bind(null,vt)},useEffectEvent:function(t){var n=Vn(),a={impl:t};return n.memoizedState=a,function(){if((Bt&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},lf={readContext:Nn,use:Ol,useCallback:Pm,useContext:Nn,useEffect:tf,useImperativeHandle:Om,useInsertionEffect:Dm,useLayoutEffect:Um,useMemo:Im,useReducer:Pl,useRef:Cm,useState:function(){return Pl(ua)},useDebugValue:nf,useDeferredValue:function(t,n){var a=hn();return zm(a,Yt.memoizedState,t,n)},useTransition:function(){var t=Pl(ua)[0],n=hn().memoizedState;return[typeof t=="boolean"?t:Mo(t),n]},useSyncExternalStore:dm,useId:Gm,useHostTransitionStatus:rf,useFormState:Tm,useActionState:Tm,useOptimistic:function(t,n){var a=hn();return vm(a,Yt,t,n)},useMemoCache:Ku,useCacheRefresh:Vm};lf.useEffectEvent=Nm;var qm={readContext:Nn,use:Ol,useCallback:Pm,useContext:Nn,useEffect:tf,useImperativeHandle:Om,useInsertionEffect:Dm,useLayoutEffect:Um,useMemo:Im,useReducer:Ju,useRef:Cm,useState:function(){return Ju(ua)},useDebugValue:nf,useDeferredValue:function(t,n){var a=hn();return Yt===null?af(a,t,n):zm(a,Yt.memoizedState,t,n)},useTransition:function(){var t=Ju(ua)[0],n=hn().memoizedState;return[typeof t=="boolean"?t:Mo(t),n]},useSyncExternalStore:dm,useId:Gm,useHostTransitionStatus:rf,useFormState:wm,useActionState:wm,useOptimistic:function(t,n){var a=hn();return Yt!==null?vm(a,Yt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Ku,useCacheRefresh:Vm};qm.useEffectEvent=Nm;function cf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:y({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var uf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=fi(),u=Va(o);u.payload=n,a!=null&&(u.callback=a),n=ka(t,u,o),n!==null&&(Jn(n,t,o),_o(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=fi(),u=Va(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=ka(t,u,o),n!==null&&(Jn(n,t,o),_o(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=fi(),o=Va(a);o.tag=2,n!=null&&(o.callback=n),n=ka(t,o,a),n!==null&&(Jn(n,t,a),_o(n,t,a))}};function Ym(t,n,a,o,u,f,x){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,x):n.prototype&&n.prototype.isPureReactComponent?!uo(a,o)||!uo(u,f):!0}function Zm(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&uf.enqueueReplaceState(n,n.state,null)}function Ds(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=y({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function Km(t){gl(t)}function Qm(t){console.error(t)}function Jm(t){gl(t)}function Bl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function $m(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function ff(t,n,a){return a=Va(a),a.tag=3,a.payload={element:null},a.callback=function(){Bl(t,n)},a}function e0(t){return t=Va(t),t.tag=3,t}function t0(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;t.payload=function(){return u(f)},t.callback=function(){$m(n,a,o)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(t.callback=function(){$m(n,a,o),typeof u!="function"&&(Za===null?Za=new Set([this]):Za.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function j_(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&rr(n,a,u,!0),a=oi.current,a!==null){switch(a.tag){case 31:case 13:return Si===null?Ql():a.alternate===null&&un===0&&(un=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Al?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),If(t,o,u)),!1;case 22:return a.flags|=65536,o===Al?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),If(t,o,u)),!1}throw Error(s(435,a.tag))}return If(t,o,u),Ql(),!1}if(Rt)return n=oi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Ru&&(t=Error(s(422),{cause:o}),po(xi(t,a)))):(o!==Ru&&(n=Error(s(423),{cause:o}),po(xi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=xi(o,a),u=ff(t.stateNode,o,u),Hu(t,u),un!==4&&(un=2)),!1;var f=Error(s(520),{cause:o});if(f=xi(f,a),Lo===null?Lo=[f]:Lo.push(f),un!==4&&(un=2),n===null)return!0;o=xi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=ff(a.stateNode,o,t),Hu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Za===null||!Za.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=e0(u),t0(u,t,a,o),Hu(a,u),!1}a=a.return}while(a!==null);return!1}var df=Error(s(461)),_n=!1;function Dn(t,n,a,o){n.child=t===null?sm(n,null,a,o):Rs(n,t.child,a,o)}function n0(t,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var x={};for(var R in o)R!=="ref"&&(x[R]=o[R])}else x=o;return Ts(n),o=Wu(t,n,a,x,f,u),R=qu(),t!==null&&!_n?(Yu(t,n,u),fa(t,n,u)):(Rt&&R&&wu(n),n.flags|=1,Dn(t,n,o,u),n.child)}function i0(t,n,a,o,u){if(t===null){var f=a.type;return typeof f=="function"&&!Eu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,a0(t,n,f,o,u)):(t=yl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!yf(t,u)){var x=f.memoizedProps;if(a=a.compare,a=a!==null?a:uo,a(x,o)&&t.ref===n.ref)return fa(t,n,u)}return n.flags|=1,t=sa(f,o),t.ref=n.ref,t.return=n,n.child=t}function a0(t,n,a,o,u){if(t!==null){var f=t.memoizedProps;if(uo(f,o)&&t.ref===n.ref)if(_n=!1,n.pendingProps=o=f,yf(t,u))(t.flags&131072)!==0&&(_n=!0);else return n.lanes=t.lanes,fa(t,n,u)}return hf(t,n,a,o,u)}function s0(t,n,a,o){var u=o.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return r0(t,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&El(n,f!==null?f.cachePool:null),f!==null?lm(n,f):Vu(),cm(n);else return o=n.lanes=536870912,r0(t,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(El(n,f.cachePool),lm(n,f),ja(),n.memoizedState=null):(t!==null&&El(n,null),Vu(),ja());return Dn(t,n,u,a),n.child}function Ao(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function r0(t,n,a,o,u){var f=Iu();return f=f===null?null:{parent:xn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&El(n,null),Vu(),cm(n),t!==null&&rr(t,n,o,!0),n.childLanes=u,null}function Hl(t,n){return n=Vl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function o0(t,n,a){return Rs(n,t.child,null,a),t=Hl(n,n.pendingProps),t.flags|=2,li(n),n.memoizedState=null,t}function W_(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Rt){if(o.mode==="hidden")return t=Hl(n,o),n.lanes=536870912,Ao(null,t);if(Xu(n),(t=$t)?(t=_g(t,yi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:za!==null?{id:Hi,overflow:Gi}:null,retryLane:536870912,hydrationErrors:null},a=Xp(t),a.return=n,n.child=a,Rn=n,$t=null)):t=null,t===null)throw Ba(n);return n.lanes=536870912,null}return Hl(n,o)}var f=t.memoizedState;if(f!==null){var x=f.dehydrated;if(Xu(n),u)if(n.flags&256)n.flags&=-257,n=o0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(_n||rr(t,n,a,!1),u=(a&t.childLanes)!==0,_n||u){if(o=Jt,o!==null&&(x=ni(o,a),x!==0&&x!==f.retryLane))throw f.retryLane=x,Ss(t,x),Jn(o,t,x),df;Ql(),n=o0(t,n,a)}else t=f.treeContext,$t=bi(x.nextSibling),Rn=n,Rt=!0,Fa=null,yi=!1,t!==null&&qp(n,t),n=Hl(n,o),n.flags|=4096;return n}return t=sa(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Gl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function hf(t,n,a,o,u){return Ts(n),a=Wu(t,n,a,o,void 0,u),o=qu(),t!==null&&!_n?(Yu(t,n,u),fa(t,n,u)):(Rt&&o&&wu(n),n.flags|=1,Dn(t,n,a,u),n.child)}function l0(t,n,a,o,u,f){return Ts(n),n.updateQueue=null,a=fm(n,o,a,u),um(t),o=qu(),t!==null&&!_n?(Yu(t,n,f),fa(t,n,f)):(Rt&&o&&wu(n),n.flags|=1,Dn(t,n,a,f),n.child)}function c0(t,n,a,o,u){if(Ts(n),n.stateNode===null){var f=nr,x=a.contextType;typeof x=="object"&&x!==null&&(f=Nn(x)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=uf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Fu(n),x=a.contextType,f.context=typeof x=="object"&&x!==null?Nn(x):nr,f.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(cf(n,a,x,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&uf.enqueueReplaceState(f,f.state,null),So(n,o,f,u),yo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var R=n.memoizedProps,W=Ds(a,R);f.props=W;var le=f.context,Se=a.contextType;x=nr,typeof Se=="object"&&Se!==null&&(x=Nn(Se));var Te=a.getDerivedStateFromProps;Se=typeof Te=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,Se||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||le!==x)&&Zm(n,f,o,x),Ga=!1;var pe=n.memoizedState;f.state=pe,So(n,o,f,u),yo(),le=n.memoizedState,R||pe!==le||Ga?(typeof Te=="function"&&(cf(n,a,Te,o),le=n.memoizedState),(W=Ga||Ym(n,a,W,o,pe,le,x))?(Se||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=le),f.props=o,f.state=le,f.context=x,o=W):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Bu(t,n),x=n.memoizedProps,Se=Ds(a,x),f.props=Se,Te=n.pendingProps,pe=f.context,le=a.contextType,W=nr,typeof le=="object"&&le!==null&&(W=Nn(le)),R=a.getDerivedStateFromProps,(le=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==Te||pe!==W)&&Zm(n,f,o,W),Ga=!1,pe=n.memoizedState,f.state=pe,So(n,o,f,u),yo();var ge=n.memoizedState;x!==Te||pe!==ge||Ga||t!==null&&t.dependencies!==null&&bl(t.dependencies)?(typeof R=="function"&&(cf(n,a,R,o),ge=n.memoizedState),(Se=Ga||Ym(n,a,Se,o,pe,ge,W)||t!==null&&t.dependencies!==null&&bl(t.dependencies))?(le||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ge,W),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ge,W)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&pe===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&pe===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ge),f.props=o,f.state=ge,f.context=W,o=Se):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&pe===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&pe===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,Gl(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=Rs(n,t.child,null,u),n.child=Rs(n,null,a,u)):Dn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=fa(t,n,u),t}function u0(t,n,a,o){return Ms(),n.flags|=256,Dn(t,n,a,o),n.child}var pf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function mf(t){return{baseLanes:t,cachePool:$p()}}function gf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ui),t}function f0(t,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,x;if((x=f)||(x=t!==null&&t.memoizedState===null?!1:(dn.current&2)!==0),x&&(u=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,t===null){if(Rt){if(u?Xa(n):ja(),(t=$t)?(t=_g(t,yi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:za!==null?{id:Hi,overflow:Gi}:null,retryLane:536870912,hydrationErrors:null},a=Xp(t),a.return=n,n.child=a,Rn=n,$t=null)):t=null,t===null)throw Ba(n);return Jf(t)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,u?(ja(),u=n.mode,R=Vl({mode:"hidden",children:R},u),o=bs(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=mf(a),o.childLanes=gf(t,x,a),n.memoizedState=pf,Ao(null,o)):(Xa(n),xf(n,R))}var W=t.memoizedState;if(W!==null&&(R=W.dehydrated,R!==null)){if(f)n.flags&256?(Xa(n),n.flags&=-257,n=vf(t,n,a)):n.memoizedState!==null?(ja(),n.child=t.child,n.flags|=128,n=null):(ja(),R=o.fallback,u=n.mode,o=Vl({mode:"visible",children:o.children},u),R=bs(R,u,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,Rs(n,t.child,null,a),o=n.child,o.memoizedState=mf(a),o.childLanes=gf(t,x,a),n.memoizedState=pf,n=Ao(null,o));else if(Xa(n),Jf(R)){if(x=R.nextSibling&&R.nextSibling.dataset,x)var le=x.dgst;x=le,o=Error(s(419)),o.stack="",o.digest=x,po({value:o,source:null,stack:null}),n=vf(t,n,a)}else if(_n||rr(t,n,a,!1),x=(a&t.childLanes)!==0,_n||x){if(x=Jt,x!==null&&(o=ni(x,a),o!==0&&o!==W.retryLane))throw W.retryLane=o,Ss(t,o),Jn(x,t,o),df;Qf(R)||Ql(),n=vf(t,n,a)}else Qf(R)?(n.flags|=192,n.child=t.child,n=null):(t=W.treeContext,$t=bi(R.nextSibling),Rn=n,Rt=!0,Fa=null,yi=!1,t!==null&&qp(n,t),n=xf(n,o.children),n.flags|=4096);return n}return u?(ja(),R=o.fallback,u=n.mode,W=t.child,le=W.sibling,o=sa(W,{mode:"hidden",children:o.children}),o.subtreeFlags=W.subtreeFlags&65011712,le!==null?R=sa(le,R):(R=bs(R,u,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,Ao(null,o),o=n.child,R=t.child.memoizedState,R===null?R=mf(a):(u=R.cachePool,u!==null?(W=xn._currentValue,u=u.parent!==W?{parent:W,pool:W}:u):u=$p(),R={baseLanes:R.baseLanes|a,cachePool:u}),o.memoizedState=R,o.childLanes=gf(t,x,a),n.memoizedState=pf,Ao(t.child,o)):(Xa(n),a=t.child,t=a.sibling,a=sa(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(x=n.deletions,x===null?(n.deletions=[t],n.flags|=16):x.push(t)),n.child=a,n.memoizedState=null,a)}function xf(t,n){return n=Vl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Vl(t,n){return t=ri(22,t,null,n),t.lanes=0,t}function vf(t,n,a){return Rs(n,t.child,null,a),t=xf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function d0(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Uu(t.return,n,a)}function _f(t,n,a,o,u,f){var x=t.memoizedState;x===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=o,x.tail=a,x.tailMode=u,x.treeForkCount=f)}function h0(t,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var x=dn.current,R=(x&2)!==0;if(R?(x=x&1|2,n.flags|=128):x&=1,re(dn,x),Dn(t,n,o,a),o=Rt?ho:0,!R&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&d0(t,a,n);else if(t.tag===19)d0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Nl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),_f(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Nl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}_f(n,!0,a,null,f,o);break;case"together":_f(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function fa(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ya|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(rr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=sa(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=sa(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function yf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&bl(t)))}function q_(t,n,a){switch(n.tag){case 3:me(n,n.stateNode.containerInfo),Ha(n,xn,t.memoizedState.cache),Ms();break;case 27:case 5:Be(n);break;case 4:me(n,n.stateNode.containerInfo);break;case 10:Ha(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Xu(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Xa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?f0(t,n,a):(Xa(n),t=fa(t,n,a),t!==null?t.sibling:null);Xa(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(rr(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return h0(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),re(dn,dn.current),o)break;return null;case 22:return n.lanes=0,s0(t,n,a,n.pendingProps);case 24:Ha(n,xn,t.memoizedState.cache)}return fa(t,n,a)}function p0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)_n=!0;else{if(!yf(t,a)&&(n.flags&128)===0)return _n=!1,q_(t,n,a);_n=(t.flags&131072)!==0}else _n=!1,Rt&&(n.flags&1048576)!==0&&Wp(n,ho,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=ws(n.elementType),n.type=t,typeof t=="function")Eu(t)?(o=Ds(t,o),n.tag=1,n=c0(null,n,t,o,a)):(n.tag=0,n=hf(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===D){n.tag=11,n=n0(null,n,t,o,a);break e}else if(u===L){n.tag=14,n=i0(null,n,t,o,a);break e}}throw n=te(t)||t,Error(s(306,n,""))}}return n;case 0:return hf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Ds(o,n.pendingProps),c0(t,n,o,u,a);case 3:e:{if(me(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Bu(t,n),So(n,o,null,a);var x=n.memoizedState;if(o=x.cache,Ha(n,xn,o),o!==f.cache&&Lu(n,[xn],a,!0),yo(),o=x.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=u0(t,n,o,a);break e}else if(o!==u){u=xi(Error(s(424)),n),po(u),n=u0(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for($t=bi(t.firstChild),Rn=n,Rt=!0,Fa=null,yi=!0,a=sm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ms(),o===u){n=fa(t,n,a);break e}Dn(t,n,o,a)}n=n.child}return n;case 26:return Gl(t,n),t===null?(a=Tg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Rt||(a=n.type,t=n.pendingProps,o=ac(J.current).createElement(a),o[mn]=n,o[Cn]=t,Un(o,a,t),gn(o),n.stateNode=o):n.memoizedState=Tg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Be(n),t===null&&Rt&&(o=n.stateNode=bg(n.type,n.pendingProps,J.current),Rn=n,yi=!0,u=$t,$a(n.type)?($f=u,$t=bi(o.firstChild)):$t=u),Dn(t,n,n.pendingProps.children,a),Gl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Rt&&((u=o=$t)&&(o=My(o,n.type,n.pendingProps,yi),o!==null?(n.stateNode=o,Rn=n,$t=bi(o.firstChild),yi=!1,u=!0):u=!1),u||Ba(n)),Be(n),u=n.type,f=n.pendingProps,x=t!==null?t.memoizedProps:null,o=f.children,Yf(u,f)?o=null:x!==null&&Yf(u,x)&&(n.flags|=32),n.memoizedState!==null&&(u=Wu(t,n,F_,null,null,a),Go._currentValue=u),Gl(t,n),Dn(t,n,o,a),n.child;case 6:return t===null&&Rt&&((t=a=$t)&&(a=Ey(a,n.pendingProps,yi),a!==null?(n.stateNode=a,Rn=n,$t=null,t=!0):t=!1),t||Ba(n)),null;case 13:return f0(t,n,a);case 4:return me(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Rs(n,null,o,a):Dn(t,n,o,a),n.child;case 11:return n0(t,n,n.type,n.pendingProps,a);case 7:return Dn(t,n,n.pendingProps,a),n.child;case 8:return Dn(t,n,n.pendingProps.children,a),n.child;case 12:return Dn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ha(n,n.type,o.value),Dn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Ts(n),u=Nn(u),o=o(u),n.flags|=1,Dn(t,n,o,a),n.child;case 14:return i0(t,n,n.type,n.pendingProps,a);case 15:return a0(t,n,n.type,n.pendingProps,a);case 19:return h0(t,n,a);case 31:return W_(t,n,a);case 22:return s0(t,n,a,n.pendingProps);case 24:return Ts(n),o=Nn(xn),t===null?(u=Iu(),u===null&&(u=Jt,f=Ou(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Fu(n),Ha(n,xn,u)):((t.lanes&a)!==0&&(Bu(t,n),So(n,null,null,a),yo()),u=t.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ha(n,xn,o)):(o=f.cache,Ha(n,xn,o),o!==u.cache&&Lu(n,[xn],a,!0))),Dn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function da(t){t.flags|=4}function Sf(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(G0())t.flags|=8192;else throw Cs=Al,zu}else t.flags&=-16777217}function m0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Ng(n))if(G0())t.flags|=8192;else throw Cs=Al,zu}function kl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ae():536870912,t.lanes|=n,vr|=n)}function wo(t,n){if(!Rt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function en(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function Y_(t,n,a){var o=n.pendingProps;switch(Cu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(n),null;case 1:return en(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),la(xn),we(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(sr(n)?da(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Nu())),en(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(da(n),f!==null?(en(n),m0(n,f)):(en(n),Sf(n,u,null,o,a))):f?f!==t.memoizedState?(da(n),en(n),m0(n,f)):(en(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&da(n),en(n),Sf(n,u,t,o,a)),null;case 27:if(De(n),a=J.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&da(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return en(n),null}t=_e.current,sr(n)?Yp(n):(t=bg(u,o,a),n.stateNode=t,da(n))}return en(n),null;case 5:if(De(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&da(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return en(n),null}if(f=_e.current,sr(n))Yp(n);else{var x=ac(J.current);switch(f){case 1:f=x.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=x.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=x.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?x.createElement("select",{is:o.is}):x.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?x.createElement(u,{is:o.is}):x.createElement(u)}}f[mn]=n,f[Cn]=o;e:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)f.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break e;for(;x.sibling===null;){if(x.return===null||x.return===n)break e;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=f;e:switch(Un(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&da(n)}}return en(n),Sf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&da(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=J.current,sr(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Rn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[mn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||fg(t.nodeValue,a)),t||Ba(n,!0)}else t=ac(t).createTextNode(o),t[mn]=n,n.stateNode=t}return en(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=sr(n),a!==null){if(t===null){if(!o)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[mn]=n}else Ms(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;en(n),t=!1}else a=Nu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(li(n),n):(li(n),null);if((n.flags&128)!==0)throw Error(s(558))}return en(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=sr(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[mn]=n}else Ms(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;en(n),u=!1}else u=Nu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(li(n),n):(li(n),null)}return li(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),kl(n,n.updateQueue),en(n),null);case 4:return we(),t===null&&kf(n.stateNode.containerInfo),en(n),null;case 10:return la(n.type),en(n),null;case 19:if(k(dn),o=n.memoizedState,o===null)return en(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)wo(o,!1);else{if(un!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Nl(t),f!==null){for(n.flags|=128,wo(o,!1),t=f.updateQueue,n.updateQueue=t,kl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)kp(a,t),a=a.sibling;return re(dn,dn.current&1|2),Rt&&ra(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&Ft()>Yl&&(n.flags|=128,u=!0,wo(o,!1),n.lanes=4194304)}else{if(!u)if(t=Nl(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,kl(n,t),wo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Rt)return en(n),null}else 2*Ft()-o.renderingStartTime>Yl&&a!==536870912&&(n.flags|=128,u=!0,wo(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(t=o.last,t!==null?t.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ft(),t.sibling=null,a=dn.current,re(dn,u?a&1|2:a&1),Rt&&ra(n,o.treeForkCount),t):(en(n),null);case 22:case 23:return li(n),ku(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(en(n),n.subtreeFlags&6&&(n.flags|=8192)):en(n),a=n.updateQueue,a!==null&&kl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&k(As),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),la(xn),en(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Z_(t,n){switch(Cu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return la(xn),we(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return De(n),null;case 31:if(n.memoizedState!==null){if(li(n),n.alternate===null)throw Error(s(340));Ms()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(li(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Ms()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return k(dn),null;case 4:return we(),null;case 10:return la(n.type),null;case 22:case 23:return li(n),ku(),t!==null&&k(As),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return la(xn),null;case 25:return null;default:return null}}function g0(t,n){switch(Cu(n),n.tag){case 3:la(xn),we();break;case 26:case 27:case 5:De(n);break;case 4:we();break;case 31:n.memoizedState!==null&&li(n);break;case 13:li(n);break;case 19:k(dn);break;case 10:la(n.type);break;case 22:case 23:li(n),ku(),t!==null&&k(As);break;case 24:la(xn)}}function Co(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var f=a.create,x=a.inst;o=f(),x.destroy=o}a=a.next}while(a!==u)}}catch(R){Wt(n,n.return,R)}}function Wa(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&t)===t){var x=o.inst,R=x.destroy;if(R!==void 0){x.destroy=void 0,u=n;var W=a,le=R;try{le()}catch(Se){Wt(u,W,Se)}}}o=o.next}while(o!==f)}}catch(Se){Wt(n,n.return,Se)}}function x0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{om(n,a)}catch(o){Wt(t,t.return,o)}}}function v0(t,n,a){a.props=Ds(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Wt(t,n,o)}}function Ro(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){Wt(t,n,u)}}function Vi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Wt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Wt(t,n,u)}else a.current=null}function _0(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Wt(t,t.return,u)}}function bf(t,n,a){try{var o=t.stateNode;xy(o,t.type,a,n),o[Cn]=n}catch(u){Wt(t,t.return,u)}}function y0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&$a(t.type)||t.tag===4}function Mf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||y0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&$a(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ef(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ia));else if(o!==4&&(o===27&&$a(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Ef(t,n,a),t=t.sibling;t!==null;)Ef(t,n,a),t=t.sibling}function Xl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&$a(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Xl(t,n,a),t=t.sibling;t!==null;)Xl(t,n,a),t=t.sibling}function S0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Un(n,o,a),n[mn]=t,n[Cn]=a}catch(f){Wt(t,t.return,f)}}var ha=!1,yn=!1,Tf=!1,b0=typeof WeakSet=="function"?WeakSet:Set,An=null;function K_(t,n){if(t=t.containerInfo,Wf=fc,t=Op(t),xu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var x=0,R=-1,W=-1,le=0,Se=0,Te=t,pe=null;t:for(;;){for(var ge;Te!==a||u!==0&&Te.nodeType!==3||(R=x+u),Te!==f||o!==0&&Te.nodeType!==3||(W=x+o),Te.nodeType===3&&(x+=Te.nodeValue.length),(ge=Te.firstChild)!==null;)pe=Te,Te=ge;for(;;){if(Te===t)break t;if(pe===a&&++le===u&&(R=x),pe===f&&++Se===o&&(W=x),(ge=Te.nextSibling)!==null)break;Te=pe,pe=Te.parentNode}Te=ge}a=R===-1||W===-1?null:{start:R,end:W}}else a=null}a=a||{start:0,end:0}}else a=null;for(qf={focusedElem:t,selectionRange:a},fc=!1,An=n;An!==null;)if(n=An,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,An=t;else for(;An!==null;){switch(n=An,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var Ze=Ds(a.type,u);t=o.getSnapshotBeforeUpdate(Ze,f),o.__reactInternalSnapshotBeforeUpdate=t}catch(ct){Wt(a,a.return,ct)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Kf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Kf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,An=t;break}An=n.return}}function M0(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ma(t,a),o&4&&Co(5,a);break;case 1:if(ma(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(x){Wt(a,a.return,x)}else{var u=Ds(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(x){Wt(a,a.return,x)}}o&64&&x0(a),o&512&&Ro(a,a.return);break;case 3:if(ma(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{om(t,n)}catch(x){Wt(a,a.return,x)}}break;case 27:n===null&&o&4&&S0(a);case 26:case 5:ma(t,a),n===null&&o&4&&_0(a),o&512&&Ro(a,a.return);break;case 12:ma(t,a);break;case 31:ma(t,a),o&4&&A0(t,a);break;case 13:ma(t,a),o&4&&w0(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=sy.bind(null,a),Ty(t,a))));break;case 22:if(o=a.memoizedState!==null||ha,!o){n=n!==null&&n.memoizedState!==null||yn,u=ha;var f=yn;ha=o,(yn=n)&&!f?ga(t,a,(a.subtreeFlags&8772)!==0):ma(t,a),ha=u,yn=f}break;case 30:break;default:ma(t,a)}}function E0(t){var n=t.alternate;n!==null&&(t.alternate=null,E0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&La(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var rn=null,Yn=!1;function pa(t,n,a){for(a=a.child;a!==null;)T0(t,n,a),a=a.sibling}function T0(t,n,a){if(ye&&typeof ye.onCommitFiberUnmount=="function")try{ye.onCommitFiberUnmount(ve,a)}catch{}switch(a.tag){case 26:yn||Vi(a,n),pa(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:yn||Vi(a,n);var o=rn,u=Yn;$a(a.type)&&(rn=a.stateNode,Yn=!1),pa(t,n,a),Fo(a.stateNode),rn=o,Yn=u;break;case 5:yn||Vi(a,n);case 6:if(o=rn,u=Yn,rn=null,pa(t,n,a),rn=o,Yn=u,rn!==null)if(Yn)try{(rn.nodeType===9?rn.body:rn.nodeName==="HTML"?rn.ownerDocument.body:rn).removeChild(a.stateNode)}catch(f){Wt(a,n,f)}else try{rn.removeChild(a.stateNode)}catch(f){Wt(a,n,f)}break;case 18:rn!==null&&(Yn?(t=rn,xg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Ar(t)):xg(rn,a.stateNode));break;case 4:o=rn,u=Yn,rn=a.stateNode.containerInfo,Yn=!0,pa(t,n,a),rn=o,Yn=u;break;case 0:case 11:case 14:case 15:Wa(2,a,n),yn||Wa(4,a,n),pa(t,n,a);break;case 1:yn||(Vi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&v0(a,n,o)),pa(t,n,a);break;case 21:pa(t,n,a);break;case 22:yn=(o=yn)||a.memoizedState!==null,pa(t,n,a),yn=o;break;default:pa(t,n,a)}}function A0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Ar(t)}catch(a){Wt(n,n.return,a)}}}function w0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ar(t)}catch(a){Wt(n,n.return,a)}}function Q_(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new b0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new b0),n;default:throw Error(s(435,t.tag))}}function jl(t,n){var a=Q_(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=ry.bind(null,t,o);o.then(u,u)}})}function Zn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=t,x=n,R=x;e:for(;R!==null;){switch(R.tag){case 27:if($a(R.type)){rn=R.stateNode,Yn=!1;break e}break;case 5:rn=R.stateNode,Yn=!1;break e;case 3:case 4:rn=R.stateNode.containerInfo,Yn=!0;break e}R=R.return}if(rn===null)throw Error(s(160));T0(f,x,u),rn=null,Yn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)C0(n,t),n=n.sibling}var Ri=null;function C0(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Zn(n,t),Kn(t),o&4&&(Wa(3,t,t.return),Co(3,t),Wa(5,t,t.return));break;case 1:Zn(n,t),Kn(t),o&512&&(yn||a===null||Vi(a,a.return)),o&64&&ha&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ri;if(Zn(n,t),Kn(t),o&512&&(yn||a===null||Vi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Ua]||f[mn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Un(f,o,a),f[mn]=t,gn(f),o=f;break e;case"link":var x=Cg("link","href",u).get(o+(a.href||""));if(x){for(var R=0;R<x.length;R++)if(f=x[R],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(R,1);break t}}f=u.createElement(o),Un(f,o,a),u.head.appendChild(f);break;case"meta":if(x=Cg("meta","content",u).get(o+(a.content||""))){for(R=0;R<x.length;R++)if(f=x[R],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(R,1);break t}}f=u.createElement(o),Un(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[mn]=t,gn(f),o=f}t.stateNode=o}else Rg(u,t.type,t.stateNode);else t.stateNode=wg(u,o,t.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?Rg(u,t.type,t.stateNode):wg(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&bf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Zn(n,t),Kn(t),o&512&&(yn||a===null||Vi(a,a.return)),a!==null&&o&4&&bf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Zn(n,t),Kn(t),o&512&&(yn||a===null||Vi(a,a.return)),t.flags&32){u=t.stateNode;try{ai(u,"")}catch(Ze){Wt(t,t.return,Ze)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,bf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(Tf=!0);break;case 6:if(Zn(n,t),Kn(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(Ze){Wt(t,t.return,Ze)}}break;case 3:if(oc=null,u=Ri,Ri=sc(n.containerInfo),Zn(n,t),Ri=u,Kn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Ar(n.containerInfo)}catch(Ze){Wt(t,t.return,Ze)}Tf&&(Tf=!1,R0(t));break;case 4:o=Ri,Ri=sc(t.stateNode.containerInfo),Zn(n,t),Kn(t),Ri=o;break;case 12:Zn(n,t),Kn(t);break;case 31:Zn(n,t),Kn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,jl(t,o)));break;case 13:Zn(n,t),Kn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(ql=Ft()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,jl(t,o)));break;case 22:u=t.memoizedState!==null;var W=a!==null&&a.memoizedState!==null,le=ha,Se=yn;if(ha=le||u,yn=Se||W,Zn(n,t),yn=Se,ha=le,Kn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||W||ha||yn||Us(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){W=a=n;try{if(f=W.stateNode,u)x=f.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{R=W.stateNode;var Te=W.memoizedProps.style,pe=Te!=null&&Te.hasOwnProperty("display")?Te.display:null;R.style.display=pe==null||typeof pe=="boolean"?"":(""+pe).trim()}}catch(Ze){Wt(W,W.return,Ze)}}}else if(n.tag===6){if(a===null){W=n;try{W.stateNode.nodeValue=u?"":W.memoizedProps}catch(Ze){Wt(W,W.return,Ze)}}}else if(n.tag===18){if(a===null){W=n;try{var ge=W.stateNode;u?vg(ge,!0):vg(W.stateNode,!1)}catch(Ze){Wt(W,W.return,Ze)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,jl(t,a))));break;case 19:Zn(n,t),Kn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,jl(t,o)));break;case 30:break;case 21:break;default:Zn(n,t),Kn(t)}}function Kn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(y0(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=Mf(t);Xl(t,f,u);break;case 5:var x=a.stateNode;a.flags&32&&(ai(x,""),a.flags&=-33);var R=Mf(t);Xl(t,R,x);break;case 3:case 4:var W=a.stateNode.containerInfo,le=Mf(t);Ef(t,le,W);break;default:throw Error(s(161))}}catch(Se){Wt(t,t.return,Se)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function R0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;R0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ma(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)M0(t,n.alternate,n),n=n.sibling}function Us(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Wa(4,n,n.return),Us(n);break;case 1:Vi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&v0(n,n.return,a),Us(n);break;case 27:Fo(n.stateNode);case 26:case 5:Vi(n,n.return),Us(n);break;case 22:n.memoizedState===null&&Us(n);break;case 30:Us(n);break;default:Us(n)}t=t.sibling}}function ga(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,f=n,x=f.flags;switch(f.tag){case 0:case 11:case 15:ga(u,f,a),Co(4,f);break;case 1:if(ga(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(le){Wt(o,o.return,le)}if(o=f,u=o.updateQueue,u!==null){var R=o.stateNode;try{var W=u.shared.hiddenCallbacks;if(W!==null)for(u.shared.hiddenCallbacks=null,u=0;u<W.length;u++)rm(W[u],R)}catch(le){Wt(o,o.return,le)}}a&&x&64&&x0(f),Ro(f,f.return);break;case 27:S0(f);case 26:case 5:ga(u,f,a),a&&o===null&&x&4&&_0(f),Ro(f,f.return);break;case 12:ga(u,f,a);break;case 31:ga(u,f,a),a&&x&4&&A0(u,f);break;case 13:ga(u,f,a),a&&x&4&&w0(u,f);break;case 22:f.memoizedState===null&&ga(u,f,a),Ro(f,f.return);break;case 30:break;default:ga(u,f,a)}n=n.sibling}}function Af(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&mo(a))}function wf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&mo(t))}function Ni(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)N0(t,n,a,o),n=n.sibling}function N0(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ni(t,n,a,o),u&2048&&Co(9,n);break;case 1:Ni(t,n,a,o);break;case 3:Ni(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&mo(t)));break;case 12:if(u&2048){Ni(t,n,a,o),t=n.stateNode;try{var f=n.memoizedProps,x=f.id,R=f.onPostCommit;typeof R=="function"&&R(x,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(W){Wt(n,n.return,W)}}else Ni(t,n,a,o);break;case 31:Ni(t,n,a,o);break;case 13:Ni(t,n,a,o);break;case 23:break;case 22:f=n.stateNode,x=n.alternate,n.memoizedState!==null?f._visibility&2?Ni(t,n,a,o):No(t,n):f._visibility&2?Ni(t,n,a,o):(f._visibility|=2,mr(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Af(x,n);break;case 24:Ni(t,n,a,o),u&2048&&wf(n.alternate,n);break;default:Ni(t,n,a,o)}}function mr(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,x=n,R=a,W=o,le=x.flags;switch(x.tag){case 0:case 11:case 15:mr(f,x,R,W,u),Co(8,x);break;case 23:break;case 22:var Se=x.stateNode;x.memoizedState!==null?Se._visibility&2?mr(f,x,R,W,u):No(f,x):(Se._visibility|=2,mr(f,x,R,W,u)),u&&le&2048&&Af(x.alternate,x);break;case 24:mr(f,x,R,W,u),u&&le&2048&&wf(x.alternate,x);break;default:mr(f,x,R,W,u)}n=n.sibling}}function No(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:No(a,o),u&2048&&Af(o.alternate,o);break;case 24:No(a,o),u&2048&&wf(o.alternate,o);break;default:No(a,o)}n=n.sibling}}var Do=8192;function gr(t,n,a){if(t.subtreeFlags&Do)for(t=t.child;t!==null;)D0(t,n,a),t=t.sibling}function D0(t,n,a){switch(t.tag){case 26:gr(t,n,a),t.flags&Do&&t.memoizedState!==null&&zy(a,Ri,t.memoizedState,t.memoizedProps);break;case 5:gr(t,n,a);break;case 3:case 4:var o=Ri;Ri=sc(t.stateNode.containerInfo),gr(t,n,a),Ri=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Do,Do=16777216,gr(t,n,a),Do=o):gr(t,n,a));break;default:gr(t,n,a)}}function U0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Uo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];An=o,O0(o,t)}U0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)L0(t),t=t.sibling}function L0(t){switch(t.tag){case 0:case 11:case 15:Uo(t),t.flags&2048&&Wa(9,t,t.return);break;case 3:Uo(t);break;case 12:Uo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Wl(t)):Uo(t);break;default:Uo(t)}}function Wl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];An=o,O0(o,t)}U0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Wa(8,n,n.return),Wl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Wl(n));break;default:Wl(n)}t=t.sibling}}function O0(t,n){for(;An!==null;){var a=An;switch(a.tag){case 0:case 11:case 15:Wa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:mo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,An=o;else e:for(a=t;An!==null;){o=An;var u=o.sibling,f=o.return;if(E0(o),o===a){An=null;break e}if(u!==null){u.return=f,An=u;break e}An=f}}}var J_={getCacheForType:function(t){var n=Nn(xn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Nn(xn).controller.signal}},$_=typeof WeakMap=="function"?WeakMap:Map,Bt=0,Jt=null,Mt=null,Tt=0,jt=0,ci=null,qa=!1,xr=!1,Cf=!1,xa=0,un=0,Ya=0,Ls=0,Rf=0,ui=0,vr=0,Lo=null,Qn=null,Nf=!1,ql=0,P0=0,Yl=1/0,Zl=null,Za=null,Mn=0,Ka=null,_r=null,va=0,Df=0,Uf=null,I0=null,Oo=0,Lf=null;function fi(){return(Bt&2)!==0&&Tt!==0?Tt&-Tt:I.T!==null?Bf():no()}function z0(){if(ui===0)if((Tt&536870912)===0||Rt){var t=ft;ft<<=1,(ft&3932160)===0&&(ft=262144),ui=t}else ui=536870912;return t=oi.current,t!==null&&(t.flags|=32),ui}function Jn(t,n,a){(t===Jt&&(jt===2||jt===9)||t.cancelPendingCommit!==null)&&(yr(t,0),Qa(t,Tt,ui,!1)),je(t,a),((Bt&2)===0||t!==Jt)&&(t===Jt&&((Bt&2)===0&&(Ls|=a),un===4&&Qa(t,Tt,ui,!1)),ki(t))}function F0(t,n,a){if((Bt&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Ue(t,n),u=o?ny(t,n):Pf(t,n,!0),f=o;do{if(u===0){xr&&!o&&Qa(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!ey(a)){u=Pf(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var x=0;else x=t.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;e:{var R=t;u=Lo;var W=R.current.memoizedState.isDehydrated;if(W&&(yr(R,x).flags|=256),x=Pf(R,x,!1),x!==2){if(Cf&&!W){R.errorRecoveryDisabledLanes|=f,Ls|=f,u=4;break e}f=Qn,Qn=u,f!==null&&(Qn===null?Qn=f:Qn.push.apply(Qn,f))}u=x}if(f=!1,u!==2)continue}}if(u===1){yr(t,0),Qa(t,n,0,!0);break}e:{switch(o=t,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Qa(o,n,ui,!qa);break e;case 2:Qn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=ql+300-Ft(),10<u)){if(Qa(o,n,ui,!qa),be(o,0,!0)!==0)break e;va=n,o.timeoutHandle=mg(B0.bind(null,o,a,Qn,Zl,Nf,n,ui,Ls,vr,qa,f,"Throttled",-0,0),u);break e}B0(o,a,Qn,Zl,Nf,n,ui,Ls,vr,qa,f,null,-0,0)}}break}while(!0);ki(t)}function B0(t,n,a,o,u,f,x,R,W,le,Se,Te,pe,ge){if(t.timeoutHandle=-1,Te=n.subtreeFlags,Te&8192||(Te&16785408)===16785408){Te={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ia},D0(n,f,Te);var Ze=(f&62914560)===f?ql-Ft():(f&4194048)===f?P0-Ft():0;if(Ze=Fy(Te,Ze),Ze!==null){va=f,t.cancelPendingCommit=Ze(q0.bind(null,t,n,f,a,o,u,x,R,W,Se,Te,null,pe,ge)),Qa(t,f,x,!le);return}}q0(t,n,f,a,o,u,x,R,W)}function ey(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!si(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Qa(t,n,a,o){n&=~Rf,n&=~Ls,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var f=31-Ve(u),x=1<<f;o[f]=-1,u&=~x}a!==0&&Gt(t,a,n)}function Kl(){return(Bt&6)===0?(Po(0),!1):!0}function Of(){if(Mt!==null){if(jt===0)var t=Mt.return;else t=Mt,oa=Es=null,Zu(t),ur=null,xo=0,t=Mt;for(;t!==null;)g0(t.alternate,t),t=t.return;Mt=null}}function yr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,yy(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),va=0,Of(),Jt=t,Mt=a=sa(t.current,null),Tt=n,jt=0,ci=null,qa=!1,xr=Ue(t,n),Cf=!1,vr=ui=Rf=Ls=Ya=un=0,Qn=Lo=null,Nf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Ve(o),f=1<<u;n|=t[u],o&=~f}return xa=n,xl(),a}function H0(t,n){vt=null,I.H=To,n===cr||n===Tl?(n=nm(),jt=3):n===zu?(n=nm(),jt=4):jt=n===df?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ci=n,Mt===null&&(un=1,Bl(t,xi(n,t.current)))}function G0(){var t=oi.current;return t===null?!0:(Tt&4194048)===Tt?Si===null:(Tt&62914560)===Tt||(Tt&536870912)!==0?t===Si:!1}function V0(){var t=I.H;return I.H=To,t===null?To:t}function k0(){var t=I.A;return I.A=J_,t}function Ql(){un=4,qa||(Tt&4194048)!==Tt&&oi.current!==null||(xr=!0),(Ya&134217727)===0&&(Ls&134217727)===0||Jt===null||Qa(Jt,Tt,ui,!1)}function Pf(t,n,a){var o=Bt;Bt|=2;var u=V0(),f=k0();(Jt!==t||Tt!==n)&&(Zl=null,yr(t,n)),n=!1;var x=un;e:do try{if(jt!==0&&Mt!==null){var R=Mt,W=ci;switch(jt){case 8:Of(),x=6;break e;case 3:case 2:case 9:case 6:oi.current===null&&(n=!0);var le=jt;if(jt=0,ci=null,Sr(t,R,W,le),a&&xr){x=0;break e}break;default:le=jt,jt=0,ci=null,Sr(t,R,W,le)}}ty(),x=un;break}catch(Se){H0(t,Se)}while(!0);return n&&t.shellSuspendCounter++,oa=Es=null,Bt=o,I.H=u,I.A=f,Mt===null&&(Jt=null,Tt=0,xl()),x}function ty(){for(;Mt!==null;)X0(Mt)}function ny(t,n){var a=Bt;Bt|=2;var o=V0(),u=k0();Jt!==t||Tt!==n?(Zl=null,Yl=Ft()+500,yr(t,n)):xr=Ue(t,n);e:do try{if(jt!==0&&Mt!==null){n=Mt;var f=ci;t:switch(jt){case 1:jt=0,ci=null,Sr(t,n,f,1);break;case 2:case 9:if(em(f)){jt=0,ci=null,j0(n);break}n=function(){jt!==2&&jt!==9||Jt!==t||(jt=7),ki(t)},f.then(n,n);break e;case 3:jt=7;break e;case 4:jt=5;break e;case 7:em(f)?(jt=0,ci=null,j0(n)):(jt=0,ci=null,Sr(t,n,f,7));break;case 5:var x=null;switch(Mt.tag){case 26:x=Mt.memoizedState;case 5:case 27:var R=Mt;if(x?Ng(x):R.stateNode.complete){jt=0,ci=null;var W=R.sibling;if(W!==null)Mt=W;else{var le=R.return;le!==null?(Mt=le,Jl(le)):Mt=null}break t}}jt=0,ci=null,Sr(t,n,f,5);break;case 6:jt=0,ci=null,Sr(t,n,f,6);break;case 8:Of(),un=6;break e;default:throw Error(s(462))}}iy();break}catch(Se){H0(t,Se)}while(!0);return oa=Es=null,I.H=o,I.A=u,Bt=a,Mt!==null?0:(Jt=null,Tt=0,xl(),un)}function iy(){for(;Mt!==null&&!tn();)X0(Mt)}function X0(t){var n=p0(t.alternate,t,xa);t.memoizedProps=t.pendingProps,n===null?Jl(t):Mt=n}function j0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=l0(a,n,n.pendingProps,n.type,void 0,Tt);break;case 11:n=l0(a,n,n.pendingProps,n.type.render,n.ref,Tt);break;case 5:Zu(n);default:g0(a,n),n=Mt=kp(n,xa),n=p0(a,n,xa)}t.memoizedProps=t.pendingProps,n===null?Jl(t):Mt=n}function Sr(t,n,a,o){oa=Es=null,Zu(n),ur=null,xo=0;var u=n.return;try{if(j_(t,u,n,a,Tt)){un=1,Bl(t,xi(a,t.current)),Mt=null;return}}catch(f){if(u!==null)throw Mt=u,f;un=1,Bl(t,xi(a,t.current)),Mt=null;return}n.flags&32768?(Rt||o===1?t=!0:xr||(Tt&536870912)!==0?t=!1:(qa=t=!0,(o===2||o===9||o===3||o===6)&&(o=oi.current,o!==null&&o.tag===13&&(o.flags|=16384))),W0(n,t)):Jl(n)}function Jl(t){var n=t;do{if((n.flags&32768)!==0){W0(n,qa);return}t=n.return;var a=Y_(n.alternate,n,xa);if(a!==null){Mt=a;return}if(n=n.sibling,n!==null){Mt=n;return}Mt=n=t}while(n!==null);un===0&&(un=5)}function W0(t,n){do{var a=Z_(t.alternate,t);if(a!==null){a.flags&=32767,Mt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Mt=t;return}Mt=t=a}while(t!==null);un=6,Mt=null}function q0(t,n,a,o,u,f,x,R,W){t.cancelPendingCommit=null;do $l();while(Mn!==0);if((Bt&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=bu,nn(t,a,f,x,R,W),t===Jt&&(Mt=Jt=null,Tt=0),_r=n,Ka=t,va=a,Df=f,Uf=u,I0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,oy(ie,function(){return J0(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=I.T,I.T=null,u=z.p,z.p=2,x=Bt,Bt|=4;try{K_(t,n,a)}finally{Bt=x,z.p=u,I.T=o}}Mn=1,Y0(),Z0(),K0()}}function Y0(){if(Mn===1){Mn=0;var t=Ka,n=_r,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=I.T,I.T=null;var o=z.p;z.p=2;var u=Bt;Bt|=4;try{C0(n,t);var f=qf,x=Op(t.containerInfo),R=f.focusedElem,W=f.selectionRange;if(x!==R&&R&&R.ownerDocument&&Lp(R.ownerDocument.documentElement,R)){if(W!==null&&xu(R)){var le=W.start,Se=W.end;if(Se===void 0&&(Se=le),"selectionStart"in R)R.selectionStart=le,R.selectionEnd=Math.min(Se,R.value.length);else{var Te=R.ownerDocument||document,pe=Te&&Te.defaultView||window;if(pe.getSelection){var ge=pe.getSelection(),Ze=R.textContent.length,ct=Math.min(W.start,Ze),Kt=W.end===void 0?ct:Math.min(W.end,Ze);!ge.extend&&ct>Kt&&(x=Kt,Kt=ct,ct=x);var ne=Up(R,ct),Z=Up(R,Kt);if(ne&&Z&&(ge.rangeCount!==1||ge.anchorNode!==ne.node||ge.anchorOffset!==ne.offset||ge.focusNode!==Z.node||ge.focusOffset!==Z.offset)){var oe=Te.createRange();oe.setStart(ne.node,ne.offset),ge.removeAllRanges(),ct>Kt?(ge.addRange(oe),ge.extend(Z.node,Z.offset)):(oe.setEnd(Z.node,Z.offset),ge.addRange(oe))}}}}for(Te=[],ge=R;ge=ge.parentNode;)ge.nodeType===1&&Te.push({element:ge,left:ge.scrollLeft,top:ge.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<Te.length;R++){var Ee=Te[R];Ee.element.scrollLeft=Ee.left,Ee.element.scrollTop=Ee.top}}fc=!!Wf,qf=Wf=null}finally{Bt=u,z.p=o,I.T=a}}t.current=n,Mn=2}}function Z0(){if(Mn===2){Mn=0;var t=Ka,n=_r,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=I.T,I.T=null;var o=z.p;z.p=2;var u=Bt;Bt|=4;try{M0(t,n.alternate,n)}finally{Bt=u,z.p=o,I.T=a}}Mn=3}}function K0(){if(Mn===4||Mn===3){Mn=0,$();var t=Ka,n=_r,a=va,o=I0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Mn=5:(Mn=0,_r=Ka=null,Q0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Za=null),to(a),n=n.stateNode,ye&&typeof ye.onCommitFiberRoot=="function")try{ye.onCommitFiberRoot(ve,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=I.T,u=z.p,z.p=2,I.T=null;try{for(var f=t.onRecoverableError,x=0;x<o.length;x++){var R=o[x];f(R.value,{componentStack:R.stack})}}finally{I.T=n,z.p=u}}(va&3)!==0&&$l(),ki(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Lf?Oo++:(Oo=0,Lf=t):Oo=0,Po(0)}}function Q0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,mo(n)))}function $l(){return Y0(),Z0(),K0(),J0()}function J0(){if(Mn!==5)return!1;var t=Ka,n=Df;Df=0;var a=to(va),o=I.T,u=z.p;try{z.p=32>a?32:a,I.T=null,a=Uf,Uf=null;var f=Ka,x=va;if(Mn=0,_r=Ka=null,va=0,(Bt&6)!==0)throw Error(s(331));var R=Bt;if(Bt|=4,L0(f.current),N0(f,f.current,x,a),Bt=R,Po(0,!1),ye&&typeof ye.onPostCommitFiberRoot=="function")try{ye.onPostCommitFiberRoot(ve,f)}catch{}return!0}finally{z.p=u,I.T=o,Q0(t,n)}}function $0(t,n,a){n=xi(a,n),n=ff(t.stateNode,n,2),t=ka(t,n,2),t!==null&&(je(t,2),ki(t))}function Wt(t,n,a){if(t.tag===3)$0(t,t,a);else for(;n!==null;){if(n.tag===3){$0(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Za===null||!Za.has(o))){t=xi(a,t),a=e0(2),o=ka(n,a,2),o!==null&&(t0(a,o,n,t),je(o,2),ki(o));break}}n=n.return}}function If(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new $_;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Cf=!0,u.add(a),t=ay.bind(null,t,n,a),n.then(t,t))}function ay(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Jt===t&&(Tt&a)===a&&(un===4||un===3&&(Tt&62914560)===Tt&&300>Ft()-ql?(Bt&2)===0&&yr(t,0):Rf|=a,vr===Tt&&(vr=0)),ki(t)}function eg(t,n){n===0&&(n=Ae()),t=Ss(t,n),t!==null&&(je(t,n),ki(t))}function sy(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),eg(t,a)}function ry(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),eg(t,a)}function oy(t,n){return yt(t,n)}var ec=null,br=null,zf=!1,tc=!1,Ff=!1,Ja=0;function ki(t){t!==br&&t.next===null&&(br===null?ec=br=t:br=br.next=t),tc=!0,zf||(zf=!0,cy())}function Po(t,n){if(!Ff&&tc){Ff=!0;do for(var a=!1,o=ec;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var x=o.suspendedLanes,R=o.pingedLanes;f=(1<<31-Ve(42|t)+1)-1,f&=u&~(x&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,ag(o,f))}else f=Tt,f=be(o,o===Jt?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Ue(o,f)||(a=!0,ag(o,f));o=o.next}while(a);Ff=!1}}function ly(){tg()}function tg(){tc=zf=!1;var t=0;Ja!==0&&_y()&&(t=Ja);for(var n=Ft(),a=null,o=ec;o!==null;){var u=o.next,f=ng(o,n);f===0?(o.next=null,a===null?ec=u:a.next=u,u===null&&(br=a)):(a=o,(t!==0||(f&3)!==0)&&(tc=!0)),o=u}Mn!==0&&Mn!==5||Po(t),Ja!==0&&(Ja=0)}function ng(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var x=31-Ve(f),R=1<<x,W=u[x];W===-1?((R&a)===0||(R&o)!==0)&&(u[x]=He(R,n)):W<=n&&(t.expiredLanes|=R),f&=~R}if(n=Jt,a=Tt,a=be(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(jt===2||jt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Ot(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ue(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&Ot(o),to(a)){case 2:case 8:a=M;break;case 32:a=ie;break;case 268435456:a=xe;break;default:a=ie}return o=ig.bind(null,t),a=yt(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&Ot(o),t.callbackPriority=2,t.callbackNode=null,2}function ig(t,n){if(Mn!==0&&Mn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if($l()&&t.callbackNode!==a)return null;var o=Tt;return o=be(t,t===Jt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(F0(t,o,n),ng(t,Ft()),t.callbackNode!=null&&t.callbackNode===a?ig.bind(null,t):null)}function ag(t,n){if($l())return null;F0(t,n,!0)}function cy(){Sy(function(){(Bt&6)!==0?yt(B,ly):tg()})}function Bf(){if(Ja===0){var t=or;t===0&&(t=it,it<<=1,(it&261888)===0&&(it=256)),Ja=t}return Ja}function sg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:xs(""+t)}function rg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function uy(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=sg((u[Cn]||null).action),x=o.submitter;x&&(n=(n=x[Cn]||null)?sg(n.formAction):x.getAttribute("formAction"),n!==null&&(f=n,x=null));var R=new hl("action","action",null,o,u);t.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ja!==0){var W=x?rg(u,x):new FormData(u);sf(a,{pending:!0,data:W,method:u.method,action:f},null,W)}}else typeof f=="function"&&(R.preventDefault(),W=x?rg(u,x):new FormData(u),sf(a,{pending:!0,data:W,method:u.method,action:f},f,W))},currentTarget:u}]})}}for(var Hf=0;Hf<Su.length;Hf++){var Gf=Su[Hf],fy=Gf.toLowerCase(),dy=Gf[0].toUpperCase()+Gf.slice(1);Ci(fy,"on"+dy)}Ci(zp,"onAnimationEnd"),Ci(Fp,"onAnimationIteration"),Ci(Bp,"onAnimationStart"),Ci("dblclick","onDoubleClick"),Ci("focusin","onFocus"),Ci("focusout","onBlur"),Ci(C_,"onTransitionRun"),Ci(R_,"onTransitionStart"),Ci(N_,"onTransitionCancel"),Ci(Hp,"onTransitionEnd"),he("onMouseEnter",["mouseout","mouseover"]),he("onMouseLeave",["mouseout","mouseover"]),he("onPointerEnter",["pointerout","pointerover"]),he("onPointerLeave",["pointerout","pointerover"]),ee("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ee("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ee("onBeforeInput",["compositionend","keypress","textInput","paste"]),ee("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ee("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ee("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Io));function og(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var x=o.length-1;0<=x;x--){var R=o[x],W=R.instance,le=R.currentTarget;if(R=R.listener,W!==f&&u.isPropagationStopped())break e;f=R,u.currentTarget=le;try{f(u)}catch(Se){gl(Se)}u.currentTarget=null,f=W}else for(x=0;x<o.length;x++){if(R=o[x],W=R.instance,le=R.currentTarget,R=R.listener,W!==f&&u.isPropagationStopped())break e;f=R,u.currentTarget=le;try{f(u)}catch(Se){gl(Se)}u.currentTarget=null,f=W}}}}function Et(t,n){var a=n[ps];a===void 0&&(a=n[ps]=new Set);var o=t+"__bubble";a.has(o)||(lg(n,t,2,!1),a.add(o))}function Vf(t,n,a){var o=0;n&&(o|=4),lg(a,t,o,n)}var nc="_reactListening"+Math.random().toString(36).slice(2);function kf(t){if(!t[nc]){t[nc]=!0,cl.forEach(function(a){a!=="selectionchange"&&(hy.has(a)||Vf(a,!1,t),Vf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[nc]||(n[nc]=!0,Vf("selectionchange",!1,n))}}function lg(t,n,a,o){switch(zg(n)){case 2:var u=Gy;break;case 8:u=Vy;break;default:u=ad}a=u.bind(null,n,a,t),u=void 0,!lu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Xf(t,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var R=o.stateNode.containerInfo;if(R===u)break;if(x===4)for(x=o.return;x!==null;){var W=x.tag;if((W===3||W===4)&&x.stateNode.containerInfo===u)return;x=x.return}for(;R!==null;){if(x=ta(R),x===null)return;if(W=x.tag,W===5||W===6||W===26||W===27){o=f=x;continue e}R=R.parentNode}}o=o.return}hp(function(){var le=f,Se=ru(a),Te=[];e:{var pe=Gp.get(t);if(pe!==void 0){var ge=hl,Ze=t;switch(t){case"keypress":if(fl(a)===0)break e;case"keydown":case"keyup":ge=r_;break;case"focusin":Ze="focus",ge=du;break;case"focusout":Ze="blur",ge=du;break;case"beforeblur":case"afterblur":ge=du;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ge=gp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ge=Yv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ge=c_;break;case zp:case Fp:case Bp:ge=Qv;break;case Hp:ge=f_;break;case"scroll":case"scrollend":ge=Wv;break;case"wheel":ge=h_;break;case"copy":case"cut":case"paste":ge=$v;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ge=vp;break;case"toggle":case"beforetoggle":ge=m_}var ct=(n&4)!==0,Kt=!ct&&(t==="scroll"||t==="scrollend"),ne=ct?pe!==null?pe+"Capture":null:pe;ct=[];for(var Z=le,oe;Z!==null;){var Ee=Z;if(oe=Ee.stateNode,Ee=Ee.tag,Ee!==5&&Ee!==26&&Ee!==27||oe===null||ne===null||(Ee=io(Z,ne),Ee!=null&&ct.push(zo(Z,Ee,oe))),Kt)break;Z=Z.return}0<ct.length&&(pe=new ge(pe,Ze,null,a,Se),Te.push({event:pe,listeners:ct}))}}if((n&7)===0){e:{if(pe=t==="mouseover"||t==="pointerover",ge=t==="mouseout"||t==="pointerout",pe&&a!==su&&(Ze=a.relatedTarget||a.fromElement)&&(ta(Ze)||Ze[Wn]))break e;if((ge||pe)&&(pe=Se.window===Se?Se:(pe=Se.ownerDocument)?pe.defaultView||pe.parentWindow:window,ge?(Ze=a.relatedTarget||a.toElement,ge=le,Ze=Ze?ta(Ze):null,Ze!==null&&(Kt=c(Ze),ct=Ze.tag,Ze!==Kt||ct!==5&&ct!==27&&ct!==6)&&(Ze=null)):(ge=null,Ze=le),ge!==Ze)){if(ct=gp,Ee="onMouseLeave",ne="onMouseEnter",Z="mouse",(t==="pointerout"||t==="pointerover")&&(ct=vp,Ee="onPointerLeave",ne="onPointerEnter",Z="pointer"),Kt=ge==null?pe:gs(ge),oe=Ze==null?pe:gs(Ze),pe=new ct(Ee,Z+"leave",ge,a,Se),pe.target=Kt,pe.relatedTarget=oe,Ee=null,ta(Se)===le&&(ct=new ct(ne,Z+"enter",Ze,a,Se),ct.target=oe,ct.relatedTarget=Kt,Ee=ct),Kt=Ee,ge&&Ze)t:{for(ct=py,ne=ge,Z=Ze,oe=0,Ee=ne;Ee;Ee=ct(Ee))oe++;Ee=0;for(var st=Z;st;st=ct(st))Ee++;for(;0<oe-Ee;)ne=ct(ne),oe--;for(;0<Ee-oe;)Z=ct(Z),Ee--;for(;oe--;){if(ne===Z||Z!==null&&ne===Z.alternate){ct=ne;break t}ne=ct(ne),Z=ct(Z)}ct=null}else ct=null;ge!==null&&cg(Te,pe,ge,ct,!1),Ze!==null&&Kt!==null&&cg(Te,Kt,Ze,ct,!0)}}e:{if(pe=le?gs(le):window,ge=pe.nodeName&&pe.nodeName.toLowerCase(),ge==="select"||ge==="input"&&pe.type==="file")var It=Ap;else if(Ep(pe))if(wp)It=T_;else{It=M_;var Je=b_}else ge=pe.nodeName,!ge||ge.toLowerCase()!=="input"||pe.type!=="checkbox"&&pe.type!=="radio"?le&&Ht(le.elementType)&&(It=Ap):It=E_;if(It&&(It=It(t,le))){Tp(Te,It,a,Se);break e}Je&&Je(t,pe,le),t==="focusout"&&le&&pe.type==="number"&&le.memoizedProps.value!=null&&bt(pe,"number",pe.value)}switch(Je=le?gs(le):window,t){case"focusin":(Ep(Je)||Je.contentEditable==="true")&&($s=Je,vu=le,fo=null);break;case"focusout":fo=vu=$s=null;break;case"mousedown":_u=!0;break;case"contextmenu":case"mouseup":case"dragend":_u=!1,Pp(Te,a,Se);break;case"selectionchange":if(w_)break;case"keydown":case"keyup":Pp(Te,a,Se)}var _t;if(pu)e:{switch(t){case"compositionstart":var At="onCompositionStart";break e;case"compositionend":At="onCompositionEnd";break e;case"compositionupdate":At="onCompositionUpdate";break e}At=void 0}else Js?bp(t,a)&&(At="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(At="onCompositionStart");At&&(_p&&a.locale!=="ko"&&(Js||At!=="onCompositionStart"?At==="onCompositionEnd"&&Js&&(_t=pp()):(Ia=Se,cu="value"in Ia?Ia.value:Ia.textContent,Js=!0)),Je=ic(le,At),0<Je.length&&(At=new xp(At,t,null,a,Se),Te.push({event:At,listeners:Je}),_t?At.data=_t:(_t=Mp(a),_t!==null&&(At.data=_t)))),(_t=x_?v_(t,a):__(t,a))&&(At=ic(le,"onBeforeInput"),0<At.length&&(Je=new xp("onBeforeInput","beforeinput",null,a,Se),Te.push({event:Je,listeners:At}),Je.data=_t)),uy(Te,t,le,a,Se)}og(Te,n)})}function zo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function ic(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=io(t,a),u!=null&&o.unshift(zo(t,u,f)),u=io(t,n),u!=null&&o.push(zo(t,u,f))),t.tag===3)return o;t=t.return}return[]}function py(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function cg(t,n,a,o,u){for(var f=n._reactName,x=[];a!==null&&a!==o;){var R=a,W=R.alternate,le=R.stateNode;if(R=R.tag,W!==null&&W===o)break;R!==5&&R!==26&&R!==27||le===null||(W=le,u?(le=io(a,f),le!=null&&x.unshift(zo(a,le,W))):u||(le=io(a,f),le!=null&&x.push(zo(a,le,W)))),a=a.return}x.length!==0&&t.push({event:n,listeners:x})}var my=/\r\n?/g,gy=/\u0000|\uFFFD/g;function ug(t){return(typeof t=="string"?t:""+t).replace(my,`
`).replace(gy,"")}function fg(t,n){return n=ug(n),ug(t)===n}function Zt(t,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||ai(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&ai(t,""+o);break;case"className":Ye(t,"class",o);break;case"tabIndex":Ye(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ye(t,a,o);break;case"style":wi(t,o,f);break;case"data":if(n!=="object"){Ye(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=xs(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Zt(t,n,"name",u.name,u,null),Zt(t,n,"formEncType",u.formEncType,u,null),Zt(t,n,"formMethod",u.formMethod,u,null),Zt(t,n,"formTarget",u.formTarget,u,null)):(Zt(t,n,"encType",u.encType,u,null),Zt(t,n,"method",u.method,u,null),Zt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=xs(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=ia);break;case"onScroll":o!=null&&Et("scroll",t);break;case"onScrollEnd":o!=null&&Et("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=xs(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":Et("beforetoggle",t),Et("toggle",t),Pe(t,"popover",o);break;case"xlinkActuate":We(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":We(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":We(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":We(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":We(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":We(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":We(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":We(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":We(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Pe(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Bi.get(a)||a,Pe(t,a,o))}}function jf(t,n,a,o,u,f){switch(a){case"style":wi(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?ai(t,o):(typeof o=="number"||typeof o=="bigint")&&ai(t,""+o);break;case"onScroll":o!=null&&Et("scroll",t);break;case"onScrollEnd":o!=null&&Et("scrollend",t);break;case"onClick":o!=null&&(t.onclick=ia);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!C.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[Cn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Pe(t,a,o)}}}function Un(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Et("error",t),Et("load",t);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var x=a[f];if(x!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Zt(t,n,f,x,a,null)}}u&&Zt(t,n,"srcSet",a.srcSet,a,null),o&&Zt(t,n,"src",a.src,a,null);return;case"input":Et("invalid",t);var R=f=x=u=null,W=null,le=null;for(o in a)if(a.hasOwnProperty(o)){var Se=a[o];if(Se!=null)switch(o){case"name":u=Se;break;case"type":x=Se;break;case"checked":W=Se;break;case"defaultChecked":le=Se;break;case"value":f=Se;break;case"defaultValue":R=Se;break;case"children":case"dangerouslySetInnerHTML":if(Se!=null)throw Error(s(137,n));break;default:Zt(t,n,o,Se,a,null)}}zn(t,f,R,W,le,x,u,!1);return;case"select":Et("invalid",t),o=x=f=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":f=R;break;case"defaultValue":x=R;break;case"multiple":o=R;default:Zt(t,n,u,R,a,null)}n=f,a=x,t.multiple=!!o,n!=null?bn(t,!!o,n,!1):a!=null&&bn(t,!!o,a,!0);return;case"textarea":Et("invalid",t),f=u=o=null;for(x in a)if(a.hasOwnProperty(x)&&(R=a[x],R!=null))switch(x){case"value":o=R;break;case"defaultValue":u=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:Zt(t,n,x,R,a,null)}Ai(t,o,u,f);return;case"option":for(W in a)if(a.hasOwnProperty(W)&&(o=a[W],o!=null))switch(W){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Zt(t,n,W,o,a,null)}return;case"dialog":Et("beforetoggle",t),Et("toggle",t),Et("cancel",t),Et("close",t);break;case"iframe":case"object":Et("load",t);break;case"video":case"audio":for(o=0;o<Io.length;o++)Et(Io[o],t);break;case"image":Et("error",t),Et("load",t);break;case"details":Et("toggle",t);break;case"embed":case"source":case"link":Et("error",t),Et("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(le in a)if(a.hasOwnProperty(le)&&(o=a[le],o!=null))switch(le){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Zt(t,n,le,o,a,null)}return;default:if(Ht(n)){for(Se in a)a.hasOwnProperty(Se)&&(o=a[Se],o!==void 0&&jf(t,n,Se,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&Zt(t,n,R,o,a,null))}function xy(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,x=null,R=null,W=null,le=null,Se=null;for(ge in a){var Te=a[ge];if(a.hasOwnProperty(ge)&&Te!=null)switch(ge){case"checked":break;case"value":break;case"defaultValue":W=Te;default:o.hasOwnProperty(ge)||Zt(t,n,ge,null,o,Te)}}for(var pe in o){var ge=o[pe];if(Te=a[pe],o.hasOwnProperty(pe)&&(ge!=null||Te!=null))switch(pe){case"type":f=ge;break;case"name":u=ge;break;case"checked":le=ge;break;case"defaultChecked":Se=ge;break;case"value":x=ge;break;case"defaultValue":R=ge;break;case"children":case"dangerouslySetInnerHTML":if(ge!=null)throw Error(s(137,n));break;default:ge!==Te&&Zt(t,n,pe,ge,o,Te)}}ke(t,x,R,W,le,Se,f,u);return;case"select":ge=x=R=pe=null;for(f in a)if(W=a[f],a.hasOwnProperty(f)&&W!=null)switch(f){case"value":break;case"multiple":ge=W;default:o.hasOwnProperty(f)||Zt(t,n,f,null,o,W)}for(u in o)if(f=o[u],W=a[u],o.hasOwnProperty(u)&&(f!=null||W!=null))switch(u){case"value":pe=f;break;case"defaultValue":R=f;break;case"multiple":x=f;default:f!==W&&Zt(t,n,u,f,o,W)}n=R,a=x,o=ge,pe!=null?bn(t,!!a,pe,!1):!!o!=!!a&&(n!=null?bn(t,!!a,n,!0):bn(t,!!a,a?[]:"",!1));return;case"textarea":ge=pe=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Zt(t,n,R,null,o,u)}for(x in o)if(u=o[x],f=a[x],o.hasOwnProperty(x)&&(u!=null||f!=null))switch(x){case"value":pe=u;break;case"defaultValue":ge=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Zt(t,n,x,u,o,f)}ii(t,pe,ge);return;case"option":for(var Ze in a)if(pe=a[Ze],a.hasOwnProperty(Ze)&&pe!=null&&!o.hasOwnProperty(Ze))switch(Ze){case"selected":t.selected=!1;break;default:Zt(t,n,Ze,null,o,pe)}for(W in o)if(pe=o[W],ge=a[W],o.hasOwnProperty(W)&&pe!==ge&&(pe!=null||ge!=null))switch(W){case"selected":t.selected=pe&&typeof pe!="function"&&typeof pe!="symbol";break;default:Zt(t,n,W,pe,o,ge)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ct in a)pe=a[ct],a.hasOwnProperty(ct)&&pe!=null&&!o.hasOwnProperty(ct)&&Zt(t,n,ct,null,o,pe);for(le in o)if(pe=o[le],ge=a[le],o.hasOwnProperty(le)&&pe!==ge&&(pe!=null||ge!=null))switch(le){case"children":case"dangerouslySetInnerHTML":if(pe!=null)throw Error(s(137,n));break;default:Zt(t,n,le,pe,o,ge)}return;default:if(Ht(n)){for(var Kt in a)pe=a[Kt],a.hasOwnProperty(Kt)&&pe!==void 0&&!o.hasOwnProperty(Kt)&&jf(t,n,Kt,void 0,o,pe);for(Se in o)pe=o[Se],ge=a[Se],!o.hasOwnProperty(Se)||pe===ge||pe===void 0&&ge===void 0||jf(t,n,Se,pe,o,ge);return}}for(var ne in a)pe=a[ne],a.hasOwnProperty(ne)&&pe!=null&&!o.hasOwnProperty(ne)&&Zt(t,n,ne,null,o,pe);for(Te in o)pe=o[Te],ge=a[Te],!o.hasOwnProperty(Te)||pe===ge||pe==null&&ge==null||Zt(t,n,Te,pe,o,ge)}function dg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function vy(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,x=u.initiatorType,R=u.duration;if(f&&R&&dg(x)){for(x=0,R=u.responseEnd,o+=1;o<a.length;o++){var W=a[o],le=W.startTime;if(le>R)break;var Se=W.transferSize,Te=W.initiatorType;Se&&dg(Te)&&(W=W.responseEnd,x+=Se*(W<R?1:(R-le)/(W-le)))}if(--o,n+=8*(f+x)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Wf=null,qf=null;function ac(t){return t.nodeType===9?t:t.ownerDocument}function hg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function pg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Yf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Zf=null;function _y(){var t=window.event;return t&&t.type==="popstate"?t===Zf?!1:(Zf=t,!0):(Zf=null,!1)}var mg=typeof setTimeout=="function"?setTimeout:void 0,yy=typeof clearTimeout=="function"?clearTimeout:void 0,gg=typeof Promise=="function"?Promise:void 0,Sy=typeof queueMicrotask=="function"?queueMicrotask:typeof gg<"u"?function(t){return gg.resolve(null).then(t).catch(by)}:mg;function by(t){setTimeout(function(){throw t})}function $a(t){return t==="head"}function xg(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),Ar(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Fo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Fo(a);for(var f=a.firstChild;f;){var x=f.nextSibling,R=f.nodeName;f[Ua]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=x}}else a==="body"&&Fo(t.ownerDocument.body);a=u}while(a);Ar(n)}function vg(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function Kf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Kf(a),La(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function My(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Ua])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=bi(t.nextSibling),t===null)break}return null}function Ey(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=bi(t.nextSibling),t===null))return null;return t}function _g(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=bi(t.nextSibling),t===null))return null;return t}function Qf(t){return t.data==="$?"||t.data==="$~"}function Jf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Ty(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function bi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var $f=null;function yg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return bi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Sg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function bg(t,n,a){switch(n=ac(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Fo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);La(t)}var Mi=new Map,Mg=new Set;function sc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var _a=z.d;z.d={f:Ay,r:wy,D:Cy,C:Ry,L:Ny,m:Dy,X:Ly,S:Uy,M:Oy};function Ay(){var t=_a.f(),n=Kl();return t||n}function wy(t){var n=na(t);n!==null&&n.tag===5&&n.type==="form"?Hm(n):_a.r(t)}var Mr=typeof document>"u"?null:document;function Eg(t,n,a){var o=Mr;if(o&&typeof n=="string"&&n){var u=kt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Mg.has(u)||(Mg.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Un(n,"link",t),gn(n),o.head.appendChild(n)))}}function Cy(t){_a.D(t),Eg("dns-prefetch",t,null)}function Ry(t,n){_a.C(t,n),Eg("preconnect",t,n)}function Ny(t,n,a){_a.L(t,n,a);var o=Mr;if(o&&t&&n){var u='link[rel="preload"][as="'+kt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+kt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+kt(a.imageSizes)+'"]')):u+='[href="'+kt(t)+'"]';var f=u;switch(n){case"style":f=Er(t);break;case"script":f=Tr(t)}Mi.has(f)||(t=y({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Mi.set(f,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Bo(f))||n==="script"&&o.querySelector(Ho(f))||(n=o.createElement("link"),Un(n,"link",t),gn(n),o.head.appendChild(n)))}}function Dy(t,n){_a.m(t,n);var a=Mr;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+kt(o)+'"][href="'+kt(t)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Tr(t)}if(!Mi.has(f)&&(t=y({rel:"modulepreload",href:t},n),Mi.set(f,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ho(f)))return}o=a.createElement("link"),Un(o,"link",t),gn(o),a.head.appendChild(o)}}}function Uy(t,n,a){_a.S(t,n,a);var o=Mr;if(o&&t){var u=Oa(o).hoistableStyles,f=Er(t);n=n||"default";var x=u.get(f);if(!x){var R={loading:0,preload:null};if(x=o.querySelector(Bo(f)))R.loading=5;else{t=y({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Mi.get(f))&&ed(t,a);var W=x=o.createElement("link");gn(W),Un(W,"link",t),W._p=new Promise(function(le,Se){W.onload=le,W.onerror=Se}),W.addEventListener("load",function(){R.loading|=1}),W.addEventListener("error",function(){R.loading|=2}),R.loading|=4,rc(x,n,o)}x={type:"stylesheet",instance:x,count:1,state:R},u.set(f,x)}}}function Ly(t,n){_a.X(t,n);var a=Mr;if(a&&t){var o=Oa(a).hoistableScripts,u=Tr(t),f=o.get(u);f||(f=a.querySelector(Ho(u)),f||(t=y({src:t,async:!0},n),(n=Mi.get(u))&&td(t,n),f=a.createElement("script"),gn(f),Un(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function Oy(t,n){_a.M(t,n);var a=Mr;if(a&&t){var o=Oa(a).hoistableScripts,u=Tr(t),f=o.get(u);f||(f=a.querySelector(Ho(u)),f||(t=y({src:t,async:!0,type:"module"},n),(n=Mi.get(u))&&td(t,n),f=a.createElement("script"),gn(f),Un(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function Tg(t,n,a,o){var u=(u=J.current)?sc(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Er(a.href),a=Oa(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Er(a.href);var f=Oa(u).hoistableStyles,x=f.get(t);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,x),(f=u.querySelector(Bo(t)))&&!f._p&&(x.instance=f,x.state.loading=5),Mi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Mi.set(t,a),f||Py(u,t,a,x.state))),n&&o===null)throw Error(s(528,""));return x}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Tr(a),a=Oa(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Er(t){return'href="'+kt(t)+'"'}function Bo(t){return'link[rel="stylesheet"]['+t+"]"}function Ag(t){return y({},t,{"data-precedence":t.precedence,precedence:null})}function Py(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Un(n,"link",a),gn(n),t.head.appendChild(n))}function Tr(t){return'[src="'+kt(t)+'"]'}function Ho(t){return"script[async]"+t}function wg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+kt(a.href)+'"]');if(o)return n.instance=o,gn(o),o;var u=y({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),gn(o),Un(o,"style",u),rc(o,a.precedence,t),n.instance=o;case"stylesheet":u=Er(a.href);var f=t.querySelector(Bo(u));if(f)return n.state.loading|=4,n.instance=f,gn(f),f;o=Ag(a),(u=Mi.get(u))&&ed(o,u),f=(t.ownerDocument||t).createElement("link"),gn(f);var x=f;return x._p=new Promise(function(R,W){x.onload=R,x.onerror=W}),Un(f,"link",o),n.state.loading|=4,rc(f,a.precedence,t),n.instance=f;case"script":return f=Tr(a.src),(u=t.querySelector(Ho(f)))?(n.instance=u,gn(u),u):(o=a,(u=Mi.get(f))&&(o=y({},a),td(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),gn(u),Un(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,rc(o,a.precedence,t));return n.instance}function rc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,x=0;x<o.length;x++){var R=o[x];if(R.dataset.precedence===n)f=R;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function ed(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function td(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var oc=null;function Cg(t,n,a){if(oc===null){var o=new Map,u=oc=new Map;u.set(a,o)}else u=oc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[Ua]||f[mn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(n)||"";x=t+x;var R=o.get(x);R?R.push(f):o.set(x,[f])}}return o}function Rg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Iy(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Ng(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function zy(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Er(o.href),f=n.querySelector(Bo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=lc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,gn(f);return}f=n.ownerDocument||n,o=Ag(o),(u=Mi.get(u))&&ed(o,u),f=f.createElement("link"),gn(f);var x=f;x._p=new Promise(function(R,W){x.onload=R,x.onerror=W}),Un(f,"link",o),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=lc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var nd=0;function Fy(t,n){return t.stylesheets&&t.count===0&&uc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&uc(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&nd===0&&(nd=62500*vy());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&uc(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>nd?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function lc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)uc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var cc=null;function uc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,cc=new Map,n.forEach(By,t),cc=null,lc.call(t))}function By(t,n){if(!(n.state.loading&4)){var a=cc.get(t);if(a)var o=a.get(null);else{a=new Map,cc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var x=u[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),o=x)}o&&a.set(null,o)}u=n.instance,x=u.getAttribute("data-precedence"),f=a.get(x)||o,f===o&&a.set(null,u),a.set(x,u),this.count++,o=lc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Go={$$typeof:P,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function Hy(t,n,a,o,u,f,x,R,W){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Qe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qe(0),this.hiddenUpdates=Qe(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=W,this.incompleteTransitions=new Map}function Dg(t,n,a,o,u,f,x,R,W,le,Se,Te){return t=new Hy(t,n,a,x,W,le,Se,Te,R),n=1,f===!0&&(n|=24),f=ri(3,null,null,n),t.current=f,f.stateNode=t,n=Ou(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Fu(f),t}function Ug(t){return t?(t=nr,t):nr}function Lg(t,n,a,o,u,f){u=Ug(u),o.context===null?o.context=u:o.pendingContext=u,o=Va(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=ka(t,o,n),a!==null&&(Jn(a,t,n),_o(a,t,n))}function Og(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function id(t,n){Og(t,n),(t=t.alternate)&&Og(t,n)}function Pg(t){if(t.tag===13||t.tag===31){var n=Ss(t,67108864);n!==null&&Jn(n,t,67108864),id(t,67108864)}}function Ig(t){if(t.tag===13||t.tag===31){var n=fi();n=eo(n);var a=Ss(t,n);a!==null&&Jn(a,t,n),id(t,n)}}var fc=!0;function Gy(t,n,a,o){var u=I.T;I.T=null;var f=z.p;try{z.p=2,ad(t,n,a,o)}finally{z.p=f,I.T=u}}function Vy(t,n,a,o){var u=I.T;I.T=null;var f=z.p;try{z.p=8,ad(t,n,a,o)}finally{z.p=f,I.T=u}}function ad(t,n,a,o){if(fc){var u=sd(o);if(u===null)Xf(t,n,o,dc,a),Fg(t,o);else if(Xy(u,t,n,a,o))o.stopPropagation();else if(Fg(t,o),n&4&&-1<ky.indexOf(t)){for(;u!==null;){var f=na(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=Re(f.pendingLanes);if(x!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;x;){var W=1<<31-Ve(x);R.entanglements[1]|=W,x&=~W}ki(f),(Bt&6)===0&&(Yl=Ft()+500,Po(0))}}break;case 31:case 13:R=Ss(f,2),R!==null&&Jn(R,f,2),Kl(),id(f,2)}if(f=sd(o),f===null&&Xf(t,n,o,dc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else Xf(t,n,o,null,a)}}function sd(t){return t=ru(t),rd(t)}var dc=null;function rd(t){if(dc=null,t=ta(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=p(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return dc=t,null}function zg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ut()){case B:return 2;case M:return 8;case ie:case de:return 32;case xe:return 268435456;default:return 32}default:return 32}}var od=!1,es=null,ts=null,ns=null,Vo=new Map,ko=new Map,is=[],ky="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Fg(t,n){switch(t){case"focusin":case"focusout":es=null;break;case"dragenter":case"dragleave":ts=null;break;case"mouseover":case"mouseout":ns=null;break;case"pointerover":case"pointerout":Vo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ko.delete(n.pointerId)}}function Xo(t,n,a,o,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=na(n),n!==null&&Pg(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function Xy(t,n,a,o,u){switch(n){case"focusin":return es=Xo(es,t,n,a,o,u),!0;case"dragenter":return ts=Xo(ts,t,n,a,o,u),!0;case"mouseover":return ns=Xo(ns,t,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Vo.set(f,Xo(Vo.get(f)||null,t,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,ko.set(f,Xo(ko.get(f)||null,t,n,a,o,u)),!0}return!1}function Bg(t){var n=ta(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Zs(t.priority,function(){Ig(a)});return}}else if(n===31){if(n=p(a),n!==null){t.blockedOn=n,Zs(t.priority,function(){Ig(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function hc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=sd(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);su=o,a.target.dispatchEvent(o),su=null}else return n=na(a),n!==null&&Pg(n),t.blockedOn=a,!1;n.shift()}return!0}function Hg(t,n,a){hc(t)&&a.delete(n)}function jy(){od=!1,es!==null&&hc(es)&&(es=null),ts!==null&&hc(ts)&&(ts=null),ns!==null&&hc(ns)&&(ns=null),Vo.forEach(Hg),ko.forEach(Hg)}function pc(t,n){t.blockedOn===n&&(t.blockedOn=null,od||(od=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,jy)))}var mc=null;function Gg(t){mc!==t&&(mc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){mc===t&&(mc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(rd(o||a)===null)continue;break}var f=na(a);f!==null&&(t.splice(n,3),n-=3,sf(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Ar(t){function n(W){return pc(W,t)}es!==null&&pc(es,t),ts!==null&&pc(ts,t),ns!==null&&pc(ns,t),Vo.forEach(n),ko.forEach(n);for(var a=0;a<is.length;a++){var o=is[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<is.length&&(a=is[0],a.blockedOn===null);)Bg(a),a.blockedOn===null&&is.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],x=u[Cn]||null;if(typeof f=="function")x||Gg(a);else if(x){var R=null;if(f&&f.hasAttribute("formAction")){if(u=f,x=f[Cn]||null)R=x.formAction;else if(rd(u)!==null)continue}else R=x.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),Gg(a)}}}function Vg(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(x){return u=x})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function ld(t){this._internalRoot=t}gc.prototype.render=ld.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=fi();Lg(a,o,t,n,null,null)},gc.prototype.unmount=ld.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Lg(t.current,2,null,t,null,null),Kl(),n[Wn]=null}};function gc(t){this._internalRoot=t}gc.prototype.unstable_scheduleHydration=function(t){if(t){var n=no();t={blockedOn:null,target:t,priority:n};for(var a=0;a<is.length&&n!==0&&n<is[a].priority;a++);is.splice(a,0,t),a===0&&Bg(t)}};var kg=e.version;if(kg!=="19.2.8")throw Error(s(527,kg,"19.2.8"));z.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=h(n),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var Wy={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xc.isDisabled&&xc.supportsFiber)try{ve=xc.inject(Wy),ye=xc}catch{}}return Wo.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",u=Km,f=Qm,x=Jm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=Dg(t,1,!1,null,null,a,o,null,u,f,x,Vg),t[Wn]=n.current,kf(t),new ld(n)},Wo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,u="",f=Km,x=Qm,R=Jm,W=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(W=a.formState)),n=Dg(t,1,!0,n,a??null,o,u,W,f,x,R,Vg),n.context=Ug(null),a=n.current,o=fi(),o=eo(o),u=Va(o),u.callback=null,ka(a,u,o),a=o,n.current.lanes=a,je(n,a),ki(n),t[Wn]=n.current,kf(t),new gc(n)},Wo.version="19.2.8",Wo}var $g;function nS(){if($g)return fd.exports;$g=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),fd.exports=tS(),fd.exports}var iS=nS();/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const kh="constructor_palabras_3d_state_v1";function nv(){return new Date().toISOString().split("T")[0]}function Kd(){return[{id:"daily_facil",title:"Desafío Constructor Novato",description:"Construye 3 palabras correctamente.",difficulty:"facil",targetCount:3,currentCount:0,completed:!1,claimed:!1,rewardCoins:25,rewardGems:1,type:"words_count"},{id:"daily_medio",title:"Desafío Maestro de Sílabas",description:"Completa 5 palabras sin cometer errores.",difficulty:"medio",targetCount:5,currentCount:0,completed:!1,claimed:!1,rewardCoins:50,rewardGems:3,type:"streak_words"},{id:"daily_experto",title:"Desafío Gran Arquitecto",description:"Forma 8 palabras de tu grado escolar.",difficulty:"experto",targetCount:8,currentCount:0,completed:!1,claimed:!1,rewardCoins:100,rewardGems:5,type:"grade_words"}]}const Bs={currentGrade:1,coins:20,gems:1,purchasedParts:[],customization:{wallColor:"#fef08a",roofColor:"#ef4444",doorColor:"#d97706",windowColor:"#38bdf8",chimneyColor:"#b91c1c",fenceColor:"#ffffff"},activeWordIndex:0,soundEnabled:!0,voiceEnabled:!0,dailyChallenges:Kd(),parentStats:{totalWordsCompleted:0,correctFirstAttempt:0,totalAttempts:0,totalCoinsEarned:20,timeSpentSeconds:0,completedWordsHistory:[],lettersPracticed:{},difficultLetters:{},dailyStreak:1,lastPlayedDate:nv()}};function aS(){var r,e,i;if(typeof window>"u")return Bs;try{const s=localStorage.getItem(kh);if(!s)return Bs;const l=JSON.parse(s),c=nv();let d=l.dailyChallenges||Kd();const p=(r=l.parentStats)==null?void 0:r.lastPlayedDate;return p&&p!==c&&(d=Kd()),{...Bs,...l,customization:{...Bs.customization,...l.customization||{}},parentStats:{...Bs.parentStats,...l.parentStats||{},lastPlayedDate:c,dailyStreak:p===c?((e=l.parentStats)==null?void 0:e.dailyStreak)||1:(((i=l.parentStats)==null?void 0:i.dailyStreak)||0)+1},dailyChallenges:d}}catch{return Bs}}function sS(r){if(!(typeof window>"u"))try{localStorage.setItem(kh,JSON.stringify(r))}catch(e){console.error("Failed to save to localStorage:",e)}}function rS(){return typeof window<"u"&&localStorage.removeItem(kh),Bs}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xh="185",oS=0,ex=1,lS=2,Hc=1,iv=2,el=3,hs=0,ei=1,Ta=2,wa=0,kr=1,tx=2,nx=3,ix=4,cS=5,Gs=100,uS=101,fS=102,dS=103,hS=104,pS=200,mS=201,gS=202,xS=203,Qd=204,Jd=205,vS=206,_S=207,yS=208,SS=209,bS=210,MS=211,ES=212,TS=213,AS=214,$d=0,eh=1,th=2,Wr=3,nh=4,ih=5,ah=6,sh=7,jh=0,wS=1,CS=2,Ki=0,av=1,sv=2,rv=3,ov=4,lv=5,cv=6,uv=7,fv=300,Ws=301,qr=302,md=303,gd=304,eu=306,rh=1e3,Aa=1001,oh=1002,Pn=1003,RS=1004,vc=1005,Gn=1006,xd=1007,Xs=1008,mi=1009,dv=1010,hv=1011,nl=1012,Wh=1013,$i=1014,Yi=1015,Ra=1016,qh=1017,Yh=1018,il=1020,pv=35902,mv=35899,gv=1021,xv=1022,Ii=1023,Na=1026,js=1027,vv=1028,Zh=1029,qs=1030,Kh=1031,Qh=1033,Gc=33776,Vc=33777,kc=33778,Xc=33779,lh=35840,ch=35841,uh=35842,fh=35843,dh=36196,hh=37492,ph=37496,mh=37488,gh=37489,Wc=37490,xh=37491,vh=37808,_h=37809,yh=37810,Sh=37811,bh=37812,Mh=37813,Eh=37814,Th=37815,Ah=37816,wh=37817,Ch=37818,Rh=37819,Nh=37820,Dh=37821,Uh=36492,Lh=36494,Oh=36495,Ph=36283,Ih=36284,qc=36285,zh=36286,NS=3200,Yc=0,DS=1,fs="",Ti="srgb",Zc="srgb-linear",Kc="linear",qt="srgb",wr=7680,ax=519,US=512,LS=513,OS=514,Jh=515,PS=516,IS=517,$h=518,zS=519,sx=35044,rx="300 es",Zi=2e3,al=2001;function FS(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Qc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function BS(){const r=Qc("canvas");return r.style.display="block",r}const ox={};function lx(...r){const e="THREE."+r.shift();console.log(e,...r)}function _v(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function ut(...r){r=_v(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...r)}}function Lt(...r){r=_v(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...r)}}function Xr(...r){const e=r.join(" ");e in ox||(ox[e]=!0,ut(...r))}function HS(r,e,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const GS={[$d]:eh,[th]:ah,[nh]:sh,[Wr]:ih,[eh]:$d,[ah]:th,[sh]:nh,[ih]:Wr};class Ys{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,e);e.target=null}}}const Bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vd=Math.PI/180,Fh=180/Math.PI;function sl(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Bn[r&255]+Bn[r>>8&255]+Bn[r>>16&255]+Bn[r>>24&255]+"-"+Bn[e&255]+Bn[e>>8&255]+"-"+Bn[e>>16&15|64]+Bn[e>>24&255]+"-"+Bn[i&63|128]+Bn[i>>8&255]+"-"+Bn[i>>16&255]+Bn[i>>24&255]+Bn[s&255]+Bn[s>>8&255]+Bn[s>>16&255]+Bn[s>>24&255]).toLowerCase()}function Dt(r,e,i){return Math.max(e,Math.min(i,r))}function VS(r,e){return(r%e+e)%e}function _d(r,e,i){return(1-i)*r+i*e}function qo(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function $n(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const op=class op{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Dt(this.x,e.x,i.x),this.y=Dt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Dt(this.x,e,i),this.y=Dt(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Dt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Dt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,d=this.y-e.y;return this.x=c*s-d*l+e.x,this.y=c*l+d*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};op.prototype.isVector2=!0;let wt=op;class Qr{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,d,p){let m=s[l+0],h=s[l+1],_=s[l+2],y=s[l+3],g=c[d+0],T=c[d+1],A=c[d+2],U=c[d+3];if(y!==U||m!==g||h!==T||_!==A){let b=m*g+h*T+_*A+y*U;b<0&&(g=-g,T=-T,A=-A,U=-U,b=-b);let v=1-p;if(b<.9995){const F=Math.acos(b),P=Math.sin(F);v=Math.sin(v*F)/P,p=Math.sin(p*F)/P,m=m*v+g*p,h=h*v+T*p,_=_*v+A*p,y=y*v+U*p}else{m=m*v+g*p,h=h*v+T*p,_=_*v+A*p,y=y*v+U*p;const F=1/Math.sqrt(m*m+h*h+_*_+y*y);m*=F,h*=F,_*=F,y*=F}}e[i]=m,e[i+1]=h,e[i+2]=_,e[i+3]=y}static multiplyQuaternionsFlat(e,i,s,l,c,d){const p=s[l],m=s[l+1],h=s[l+2],_=s[l+3],y=c[d],g=c[d+1],T=c[d+2],A=c[d+3];return e[i]=p*A+_*y+m*T-h*g,e[i+1]=m*A+_*g+h*y-p*T,e[i+2]=h*A+_*T+p*g-m*y,e[i+3]=_*A-p*y-m*g-h*T,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,d=e._order,p=Math.cos,m=Math.sin,h=p(s/2),_=p(l/2),y=p(c/2),g=m(s/2),T=m(l/2),A=m(c/2);switch(d){case"XYZ":this._x=g*_*y+h*T*A,this._y=h*T*y-g*_*A,this._z=h*_*A+g*T*y,this._w=h*_*y-g*T*A;break;case"YXZ":this._x=g*_*y+h*T*A,this._y=h*T*y-g*_*A,this._z=h*_*A-g*T*y,this._w=h*_*y+g*T*A;break;case"ZXY":this._x=g*_*y-h*T*A,this._y=h*T*y+g*_*A,this._z=h*_*A+g*T*y,this._w=h*_*y-g*T*A;break;case"ZYX":this._x=g*_*y-h*T*A,this._y=h*T*y+g*_*A,this._z=h*_*A-g*T*y,this._w=h*_*y+g*T*A;break;case"YZX":this._x=g*_*y+h*T*A,this._y=h*T*y+g*_*A,this._z=h*_*A-g*T*y,this._w=h*_*y-g*T*A;break;case"XZY":this._x=g*_*y-h*T*A,this._y=h*T*y-g*_*A,this._z=h*_*A+g*T*y,this._w=h*_*y+g*T*A;break;default:ut("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],d=i[1],p=i[5],m=i[9],h=i[2],_=i[6],y=i[10],g=s+p+y;if(g>0){const T=.5/Math.sqrt(g+1);this._w=.25/T,this._x=(_-m)*T,this._y=(c-h)*T,this._z=(d-l)*T}else if(s>p&&s>y){const T=2*Math.sqrt(1+s-p-y);this._w=(_-m)/T,this._x=.25*T,this._y=(l+d)/T,this._z=(c+h)/T}else if(p>y){const T=2*Math.sqrt(1+p-s-y);this._w=(c-h)/T,this._x=(l+d)/T,this._y=.25*T,this._z=(m+_)/T}else{const T=2*Math.sqrt(1+y-s-p);this._w=(d-l)/T,this._x=(c+h)/T,this._y=(m+_)/T,this._z=.25*T}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dt(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,d=e._w,p=i._x,m=i._y,h=i._z,_=i._w;return this._x=s*_+d*p+l*h-c*m,this._y=l*_+d*m+c*p-s*h,this._z=c*_+d*h+s*m-l*p,this._w=d*_-s*p-l*m-c*h,this._onChangeCallback(),this}slerp(e,i){let s=e._x,l=e._y,c=e._z,d=e._w,p=this.dot(e);p<0&&(s=-s,l=-l,c=-c,d=-d,p=-p);let m=1-i;if(p<.9995){const h=Math.acos(p),_=Math.sin(h);m=Math.sin(m*h)/_,i=Math.sin(i*h)/_,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const lp=class lp{constructor(e=0,i=0,s=0){this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(cx.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(cx.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,d=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*d,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,d=e.y,p=e.z,m=e.w,h=2*(d*l-p*s),_=2*(p*i-c*l),y=2*(c*s-d*i);return this.x=i+m*h+d*y-p*_,this.y=s+m*_+p*h-c*y,this.z=l+m*y+c*_-d*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Dt(this.x,e.x,i.x),this.y=Dt(this.y,e.y,i.y),this.z=Dt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Dt(this.x,e,i),this.y=Dt(this.y,e,i),this.z=Dt(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Dt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,d=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*d-s*m,this.z=s*p-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return yd.copy(this).projectOnVector(e),this.sub(yd)}reflect(e){return this.sub(yd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Dt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};lp.prototype.isVector3=!0;let fe=lp;const yd=new fe,cx=new Qr,cp=class cp{constructor(e,i,s,l,c,d,p,m,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,d,p,m,h)}set(e,i,s,l,c,d,p,m,h){const _=this.elements;return _[0]=e,_[1]=l,_[2]=p,_[3]=i,_[4]=c,_[5]=m,_[6]=s,_[7]=d,_[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,d=s[0],p=s[3],m=s[6],h=s[1],_=s[4],y=s[7],g=s[2],T=s[5],A=s[8],U=l[0],b=l[3],v=l[6],F=l[1],P=l[4],D=l[7],V=l[2],O=l[5],L=l[8];return c[0]=d*U+p*F+m*V,c[3]=d*b+p*P+m*O,c[6]=d*v+p*D+m*L,c[1]=h*U+_*F+y*V,c[4]=h*b+_*P+y*O,c[7]=h*v+_*D+y*L,c[2]=g*U+T*F+A*V,c[5]=g*b+T*P+A*O,c[8]=g*v+T*D+A*L,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],p=e[5],m=e[6],h=e[7],_=e[8];return i*d*_-i*p*h-s*c*_+s*p*m+l*c*h-l*d*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],p=e[5],m=e[6],h=e[7],_=e[8],y=_*d-p*h,g=p*m-_*c,T=h*c-d*m,A=i*y+s*g+l*T;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const U=1/A;return e[0]=y*U,e[1]=(l*h-_*s)*U,e[2]=(p*s-l*d)*U,e[3]=g*U,e[4]=(_*i-l*m)*U,e[5]=(l*c-p*i)*U,e[6]=T*U,e[7]=(s*m-h*i)*U,e[8]=(d*i-s*c)*U,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,d,p){const m=Math.cos(c),h=Math.sin(c);return this.set(s*m,s*h,-s*(m*d+h*p)+d+e,-l*h,l*m,-l*(-h*d+m*p)+p+i,0,0,1),this}scale(e,i){return Xr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Sd.makeScale(e,i)),this}rotate(e){return Xr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Sd.makeRotation(-e)),this}translate(e,i){return Xr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Sd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};cp.prototype.isMatrix3=!0;let gt=cp;const Sd=new gt,ux=new gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fx=new gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kS(){const r={enabled:!0,workingColorSpace:Zc,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===qt&&(l.r=Ca(l.r),l.g=Ca(l.g),l.b=Ca(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===qt&&(l.r=jr(l.r),l.g=jr(l.g),l.b=jr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===fs?Kc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Xr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Xr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Zc]:{primaries:e,whitePoint:s,transfer:Kc,toXYZ:ux,fromXYZ:fx,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Ti},outputColorSpaceConfig:{drawingBufferColorSpace:Ti}},[Ti]:{primaries:e,whitePoint:s,transfer:qt,toXYZ:ux,fromXYZ:fx,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Ti}}}),r}const Nt=kS();function Ca(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function jr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Cr;class XS{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Cr===void 0&&(Cr=Qc("canvas")),Cr.width=e.width,Cr.height=e.height;const l=Cr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=Cr}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Qc("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=Ca(c[d]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ca(i[s]/255)*255):i[s]=Ca(i[s]);return{data:i,width:e.width,height:e.height}}else return ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let jS=0;class ep{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jS++}),this.uuid=sl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,p=l.length;d<p;d++)l[d].isDataTexture?c.push(bd(l[d].image)):c.push(bd(l[d]))}else c=bd(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function bd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?XS.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ut("Texture: Unable to serialize Texture."),{})}let WS=0;const Md=new fe;class Xn extends Ys{constructor(e=Xn.DEFAULT_IMAGE,i=Xn.DEFAULT_MAPPING,s=Aa,l=Aa,c=Gn,d=Xs,p=Ii,m=mi,h=Xn.DEFAULT_ANISOTROPY,_=fs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:WS++}),this.uuid=sl(),this.name="",this.source=new ep(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=h,this.format=p,this.internalFormat=null,this.type=m,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Md).x}get height(){return this.source.getSize(Md).y}get depth(){return this.source.getSize(Md).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){ut(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ut(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case rh:e.x=e.x-Math.floor(e.x);break;case Aa:e.x=e.x<0?0:1;break;case oh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case rh:e.y=e.y-Math.floor(e.y);break;case Aa:e.y=e.y<0?0:1;break;case oh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=fv;Xn.DEFAULT_ANISOTROPY=1;const up=class up{constructor(e=0,i=0,s=0,l=1){this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,d=e.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const m=e.elements,h=m[0],_=m[4],y=m[8],g=m[1],T=m[5],A=m[9],U=m[2],b=m[6],v=m[10];if(Math.abs(_-g)<.01&&Math.abs(y-U)<.01&&Math.abs(A-b)<.01){if(Math.abs(_+g)<.1&&Math.abs(y+U)<.1&&Math.abs(A+b)<.1&&Math.abs(h+T+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const P=(h+1)/2,D=(T+1)/2,V=(v+1)/2,O=(_+g)/4,L=(y+U)/4,E=(A+b)/4;return P>D&&P>V?P<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(P),l=O/s,c=L/s):D>V?D<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),s=O/l,c=E/l):V<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(V),s=L/c,l=E/c),this.set(s,l,c,i),this}let F=Math.sqrt((b-A)*(b-A)+(y-U)*(y-U)+(g-_)*(g-_));return Math.abs(F)<.001&&(F=1),this.x=(b-A)/F,this.y=(y-U)/F,this.z=(g-_)/F,this.w=Math.acos((h+T+v-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Dt(this.x,e.x,i.x),this.y=Dt(this.y,e.y,i.y),this.z=Dt(this.z,e.z,i.z),this.w=Dt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Dt(this.x,e,i),this.y=Dt(this.y,e,i),this.z=Dt(this.z,e,i),this.w=Dt(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Dt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};up.prototype.isVector4=!0;let ln=up;class qS extends Ys{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new ln(0,0,e,i),this.scissorTest=!1,this.viewport=new ln(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:s.depth},c=new Xn(l),d=s.count;for(let p=0;p<d;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:Gn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new ep(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qi extends qS{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class yv extends Xn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Aa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class YS extends Xn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Aa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const $c=class $c{constructor(e,i,s,l,c,d,p,m,h,_,y,g,T,A,U,b){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,d,p,m,h,_,y,g,T,A,U,b)}set(e,i,s,l,c,d,p,m,h,_,y,g,T,A,U,b){const v=this.elements;return v[0]=e,v[4]=i,v[8]=s,v[12]=l,v[1]=c,v[5]=d,v[9]=p,v[13]=m,v[2]=h,v[6]=_,v[10]=y,v[14]=g,v[3]=T,v[7]=A,v[11]=U,v[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $c().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,s=e.elements,l=1/Rr.setFromMatrixColumn(e,0).length(),c=1/Rr.setFromMatrixColumn(e,1).length(),d=1/Rr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,d=Math.cos(s),p=Math.sin(s),m=Math.cos(l),h=Math.sin(l),_=Math.cos(c),y=Math.sin(c);if(e.order==="XYZ"){const g=d*_,T=d*y,A=p*_,U=p*y;i[0]=m*_,i[4]=-m*y,i[8]=h,i[1]=T+A*h,i[5]=g-U*h,i[9]=-p*m,i[2]=U-g*h,i[6]=A+T*h,i[10]=d*m}else if(e.order==="YXZ"){const g=m*_,T=m*y,A=h*_,U=h*y;i[0]=g+U*p,i[4]=A*p-T,i[8]=d*h,i[1]=d*y,i[5]=d*_,i[9]=-p,i[2]=T*p-A,i[6]=U+g*p,i[10]=d*m}else if(e.order==="ZXY"){const g=m*_,T=m*y,A=h*_,U=h*y;i[0]=g-U*p,i[4]=-d*y,i[8]=A+T*p,i[1]=T+A*p,i[5]=d*_,i[9]=U-g*p,i[2]=-d*h,i[6]=p,i[10]=d*m}else if(e.order==="ZYX"){const g=d*_,T=d*y,A=p*_,U=p*y;i[0]=m*_,i[4]=A*h-T,i[8]=g*h+U,i[1]=m*y,i[5]=U*h+g,i[9]=T*h-A,i[2]=-h,i[6]=p*m,i[10]=d*m}else if(e.order==="YZX"){const g=d*m,T=d*h,A=p*m,U=p*h;i[0]=m*_,i[4]=U-g*y,i[8]=A*y+T,i[1]=y,i[5]=d*_,i[9]=-p*_,i[2]=-h*_,i[6]=T*y+A,i[10]=g-U*y}else if(e.order==="XZY"){const g=d*m,T=d*h,A=p*m,U=p*h;i[0]=m*_,i[4]=-y,i[8]=h*_,i[1]=g*y+U,i[5]=d*_,i[9]=T*y-A,i[2]=A*y-T,i[6]=p*_,i[10]=U*y+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ZS,e,KS)}lookAt(e,i,s){const l=this.elements;return di.subVectors(e,i),di.lengthSq()===0&&(di.z=1),di.normalize(),ss.crossVectors(s,di),ss.lengthSq()===0&&(Math.abs(s.z)===1?di.x+=1e-4:di.z+=1e-4,di.normalize(),ss.crossVectors(s,di)),ss.normalize(),_c.crossVectors(di,ss),l[0]=ss.x,l[4]=_c.x,l[8]=di.x,l[1]=ss.y,l[5]=_c.y,l[9]=di.y,l[2]=ss.z,l[6]=_c.z,l[10]=di.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,d=s[0],p=s[4],m=s[8],h=s[12],_=s[1],y=s[5],g=s[9],T=s[13],A=s[2],U=s[6],b=s[10],v=s[14],F=s[3],P=s[7],D=s[11],V=s[15],O=l[0],L=l[4],E=l[8],N=l[12],X=l[1],G=l[5],j=l[9],Q=l[13],te=l[2],q=l[6],I=l[10],z=l[14],Y=l[3],ae=l[7],H=l[11],S=l[15];return c[0]=d*O+p*X+m*te+h*Y,c[4]=d*L+p*G+m*q+h*ae,c[8]=d*E+p*j+m*I+h*H,c[12]=d*N+p*Q+m*z+h*S,c[1]=_*O+y*X+g*te+T*Y,c[5]=_*L+y*G+g*q+T*ae,c[9]=_*E+y*j+g*I+T*H,c[13]=_*N+y*Q+g*z+T*S,c[2]=A*O+U*X+b*te+v*Y,c[6]=A*L+U*G+b*q+v*ae,c[10]=A*E+U*j+b*I+v*H,c[14]=A*N+U*Q+b*z+v*S,c[3]=F*O+P*X+D*te+V*Y,c[7]=F*L+P*G+D*q+V*ae,c[11]=F*E+P*j+D*I+V*H,c[15]=F*N+P*Q+D*z+V*S,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],d=e[1],p=e[5],m=e[9],h=e[13],_=e[2],y=e[6],g=e[10],T=e[14],A=e[3],U=e[7],b=e[11],v=e[15],F=m*T-h*g,P=p*T-h*y,D=p*g-m*y,V=d*T-h*_,O=d*g-m*_,L=d*y-p*_;return i*(U*F-b*P+v*D)-s*(A*F-b*V+v*O)+l*(A*P-U*V+v*L)-c*(A*D-U*O+b*L)}determinantAffine(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[1],d=e[5],p=e[9],m=e[2],h=e[6],_=e[10];return i*(d*_-p*h)-s*(c*_-p*m)+l*(c*h-d*m)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],p=e[5],m=e[6],h=e[7],_=e[8],y=e[9],g=e[10],T=e[11],A=e[12],U=e[13],b=e[14],v=e[15],F=i*p-s*d,P=i*m-l*d,D=i*h-c*d,V=s*m-l*p,O=s*h-c*p,L=l*h-c*m,E=_*U-y*A,N=_*b-g*A,X=_*v-T*A,G=y*b-g*U,j=y*v-T*U,Q=g*v-T*b,te=F*Q-P*j+D*G+V*X-O*N+L*E;if(te===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const q=1/te;return e[0]=(p*Q-m*j+h*G)*q,e[1]=(l*j-s*Q-c*G)*q,e[2]=(U*L-b*O+v*V)*q,e[3]=(g*O-y*L-T*V)*q,e[4]=(m*X-d*Q-h*N)*q,e[5]=(i*Q-l*X+c*N)*q,e[6]=(b*D-A*L-v*P)*q,e[7]=(_*L-g*D+T*P)*q,e[8]=(d*j-p*X+h*E)*q,e[9]=(s*X-i*j-c*E)*q,e[10]=(A*O-U*D+v*F)*q,e[11]=(y*D-_*O-T*F)*q,e[12]=(p*N-d*G-m*E)*q,e[13]=(i*G-s*N+l*E)*q,e[14]=(U*P-A*V-b*F)*q,e[15]=(_*V-y*P+g*F)*q,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,d=e.x,p=e.y,m=e.z,h=c*d,_=c*p;return this.set(h*d+s,h*p-l*m,h*m+l*p,0,h*p+l*m,_*p+s,_*m-l*d,0,h*m-l*p,_*m+l*d,c*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,d){return this.set(1,s,c,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,d=i._y,p=i._z,m=i._w,h=c+c,_=d+d,y=p+p,g=c*h,T=c*_,A=c*y,U=d*_,b=d*y,v=p*y,F=m*h,P=m*_,D=m*y,V=s.x,O=s.y,L=s.z;return l[0]=(1-(U+v))*V,l[1]=(T+D)*V,l[2]=(A-P)*V,l[3]=0,l[4]=(T-D)*O,l[5]=(1-(g+v))*O,l[6]=(b+F)*O,l[7]=0,l[8]=(A+P)*L,l[9]=(b-F)*L,l[10]=(1-(g+U))*L,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinantAffine();if(c===0)return s.set(1,1,1),i.identity(),this;let d=Rr.set(l[0],l[1],l[2]).length();const p=Rr.set(l[4],l[5],l[6]).length(),m=Rr.set(l[8],l[9],l[10]).length();c<0&&(d=-d),Di.copy(this);const h=1/d,_=1/p,y=1/m;return Di.elements[0]*=h,Di.elements[1]*=h,Di.elements[2]*=h,Di.elements[4]*=_,Di.elements[5]*=_,Di.elements[6]*=_,Di.elements[8]*=y,Di.elements[9]*=y,Di.elements[10]*=y,i.setFromRotationMatrix(Di),s.x=d,s.y=p,s.z=m,this}makePerspective(e,i,s,l,c,d,p=Zi,m=!1){const h=this.elements,_=2*c/(i-e),y=2*c/(s-l),g=(i+e)/(i-e),T=(s+l)/(s-l);let A,U;if(m)A=c/(d-c),U=d*c/(d-c);else if(p===Zi)A=-(d+c)/(d-c),U=-2*d*c/(d-c);else if(p===al)A=-d/(d-c),U=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return h[0]=_,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=y,h[9]=T,h[13]=0,h[2]=0,h[6]=0,h[10]=A,h[14]=U,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,i,s,l,c,d,p=Zi,m=!1){const h=this.elements,_=2/(i-e),y=2/(s-l),g=-(i+e)/(i-e),T=-(s+l)/(s-l);let A,U;if(m)A=1/(d-c),U=d/(d-c);else if(p===Zi)A=-2/(d-c),U=-(d+c)/(d-c);else if(p===al)A=-1/(d-c),U=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return h[0]=_,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=y,h[9]=0,h[13]=T,h[2]=0,h[6]=0,h[10]=A,h[14]=U,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}};$c.prototype.isMatrix4=!0;let fn=$c;const Rr=new fe,Di=new fn,ZS=new fe(0,0,0),KS=new fe(1,1,1),ss=new fe,_c=new fe,di=new fe,dx=new fn,hx=new Qr;class Da{constructor(e=0,i=0,s=0,l=Da.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],d=l[4],p=l[8],m=l[1],h=l[5],_=l[9],y=l[2],g=l[6],T=l[10];switch(i){case"XYZ":this._y=Math.asin(Dt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,T),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Dt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(p,T),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-y,c),this._z=0);break;case"ZXY":this._x=Math.asin(Dt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-y,T),this._z=Math.atan2(-d,h)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Dt(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(g,T),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,h));break;case"YZX":this._z=Math.asin(Dt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,h),this._y=Math.atan2(-y,c)):(this._x=0,this._y=Math.atan2(p,T));break;case"XZY":this._z=Math.asin(-Dt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-_,T),this._y=0);break;default:ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return dx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dx,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return hx.setFromEuler(this),this.setFromQuaternion(hx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Da.DEFAULT_ORDER="XYZ";class Sv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let QS=0;const px=new fe,Nr=new Qr,ya=new fn,yc=new fe,Yo=new fe,JS=new fe,$S=new Qr,mx=new fe(1,0,0),gx=new fe(0,1,0),xx=new fe(0,0,1),vx={type:"added"},eb={type:"removed"},Dr={type:"childadded",child:null},Ed={type:"childremoved",child:null};class In extends Ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:QS++}),this.uuid=sl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=In.DEFAULT_UP.clone();const e=new fe,i=new Da,s=new Qr,l=new fe(1,1,1);function c(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new fn},normalMatrix:{value:new gt}}),this.matrix=new fn,this.matrixWorld=new fn,this.matrixAutoUpdate=In.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Nr.setFromAxisAngle(e,i),this.quaternion.multiply(Nr),this}rotateOnWorldAxis(e,i){return Nr.setFromAxisAngle(e,i),this.quaternion.premultiply(Nr),this}rotateX(e){return this.rotateOnAxis(mx,e)}rotateY(e){return this.rotateOnAxis(gx,e)}rotateZ(e){return this.rotateOnAxis(xx,e)}translateOnAxis(e,i){return px.copy(e).applyQuaternion(this.quaternion),this.position.add(px.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(mx,e)}translateY(e){return this.translateOnAxis(gx,e)}translateZ(e){return this.translateOnAxis(xx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ya.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?yc.copy(e):yc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Yo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ya.lookAt(Yo,yc,this.up):ya.lookAt(yc,Yo,this.up),this.quaternion.setFromRotationMatrix(ya),l&&(ya.extractRotation(l.matrixWorld),Nr.setFromRotationMatrix(ya),this.quaternion.premultiply(Nr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Lt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vx),Dr.child=e,this.dispatchEvent(Dr),Dr.child=null):Lt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(eb),Ed.child=e,this.dispatchEvent(Ed),Ed.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ya.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ya.multiply(e.parent.matrixWorld)),e.applyMatrix4(ya),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vx),Dr.child=e,this.dispatchEvent(Dr),Dr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yo,e,JS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yo,$S,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,s=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i,s=!1){const l=this.parent;if(e===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),i===!0){const c=this.children;for(let d=0,p=c.length;d<p;d++)c[d].updateWorldMatrix(!1,!0,s)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let h=0,_=m.length;h<_;h++){const y=m[h];c(e.shapes,y)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,h=this.material.length;m<h;m++)p.push(c(e.materials,this.material[m]));l.material=p}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(e.animations,m))}}if(i){const p=d(e.geometries),m=d(e.materials),h=d(e.textures),_=d(e.images),y=d(e.shapes),g=d(e.skeletons),T=d(e.animations),A=d(e.nodes);p.length>0&&(s.geometries=p),m.length>0&&(s.materials=m),h.length>0&&(s.textures=h),_.length>0&&(s.images=_),y.length>0&&(s.shapes=y),g.length>0&&(s.skeletons=g),T.length>0&&(s.animations=T),A.length>0&&(s.nodes=A)}return s.object=l,s;function d(p){const m=[];for(const h in p){const _=p[h];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}In.DEFAULT_UP=new fe(0,1,0);In.DEFAULT_MATRIX_AUTO_UPDATE=!0;In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ln extends In{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tb={type:"move"};class Td{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ln,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ln,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new fe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new fe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ln,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new fe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new fe,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,d=null;const p=this._targetRay,m=this._grip,h=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(h&&e.hand){d=!0;for(const U of e.hand.values()){const b=i.getJointPose(U,s),v=this._getHandJoint(h,U);b!==null&&(v.matrix.fromArray(b.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=b.radius),v.visible=b!==null}const _=h.joints["index-finger-tip"],y=h.joints["thumb-tip"],g=_.position.distanceTo(y.position),T=.02,A=.005;h.inputState.pinching&&g>T+A?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=T-A&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));p!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(tb)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),h!==null&&(h.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Ln;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const bv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rs={h:0,s:0,l:0},Sc={h:0,s:0,l:0};function Ad(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class ht{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Ti){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Nt.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Nt.workingColorSpace){return this.r=e,this.g=i,this.b=s,Nt.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Nt.workingColorSpace){if(e=VS(e,1),i=Dt(i,0,1),s=Dt(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,d=2*s-c;this.r=Ad(d,c,e+1/3),this.g=Ad(d,c,e),this.b=Ad(d,c,e-1/3)}return Nt.colorSpaceToWorking(this,l),this}setStyle(e,i=Ti){function s(c){c!==void 0&&parseFloat(c)<1&&ut("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=l[1],p=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ut("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);ut("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Ti){const s=bv[e.toLowerCase()];return s!==void 0?this.setHex(s,i):ut("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ca(e.r),this.g=Ca(e.g),this.b=Ca(e.b),this}copyLinearToSRGB(e){return this.r=jr(e.r),this.g=jr(e.g),this.b=jr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ti){return Nt.workingToColorSpace(Hn.copy(this),e),Math.round(Dt(Hn.r*255,0,255))*65536+Math.round(Dt(Hn.g*255,0,255))*256+Math.round(Dt(Hn.b*255,0,255))}getHexString(e=Ti){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Nt.workingColorSpace){Nt.workingToColorSpace(Hn.copy(this),i);const s=Hn.r,l=Hn.g,c=Hn.b,d=Math.max(s,l,c),p=Math.min(s,l,c);let m,h;const _=(p+d)/2;if(p===d)m=0,h=0;else{const y=d-p;switch(h=_<=.5?y/(d+p):y/(2-d-p),d){case s:m=(l-c)/y+(l<c?6:0);break;case l:m=(c-s)/y+2;break;case c:m=(s-l)/y+4;break}m/=6}return e.h=m,e.s=h,e.l=_,e}getRGB(e,i=Nt.workingColorSpace){return Nt.workingToColorSpace(Hn.copy(this),i),e.r=Hn.r,e.g=Hn.g,e.b=Hn.b,e}getStyle(e=Ti){Nt.workingToColorSpace(Hn.copy(this),e);const i=Hn.r,s=Hn.g,l=Hn.b;return e!==Ti?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(rs),this.setHSL(rs.h+e,rs.s+i,rs.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(rs),e.getHSL(Sc);const s=_d(rs.h,Sc.h,i),l=_d(rs.s,Sc.s,i),c=_d(rs.l,Sc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Hn=new ht;ht.NAMES=bv;class nb extends In{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Da,this.environmentIntensity=1,this.environmentRotation=new Da,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ui=new fe,Sa=new fe,wd=new fe,ba=new fe,Ur=new fe,Lr=new fe,_x=new fe,Cd=new fe,Rd=new fe,Nd=new fe,Dd=new ln,Ud=new ln,Ld=new ln;class Pi{constructor(e=new fe,i=new fe,s=new fe){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Ui.subVectors(e,i),l.cross(Ui);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){Ui.subVectors(l,i),Sa.subVectors(s,i),wd.subVectors(e,i);const d=Ui.dot(Ui),p=Ui.dot(Sa),m=Ui.dot(wd),h=Sa.dot(Sa),_=Sa.dot(wd),y=d*h-p*p;if(y===0)return c.set(0,0,0),null;const g=1/y,T=(h*m-p*_)*g,A=(d*_-p*m)*g;return c.set(1-T-A,A,T)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,ba)===null?!1:ba.x>=0&&ba.y>=0&&ba.x+ba.y<=1}static getInterpolation(e,i,s,l,c,d,p,m){return this.getBarycoord(e,i,s,l,ba)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ba.x),m.addScaledVector(d,ba.y),m.addScaledVector(p,ba.z),m)}static getInterpolatedAttribute(e,i,s,l,c,d){return Dd.setScalar(0),Ud.setScalar(0),Ld.setScalar(0),Dd.fromBufferAttribute(e,i),Ud.fromBufferAttribute(e,s),Ld.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(Dd,c.x),d.addScaledVector(Ud,c.y),d.addScaledVector(Ld,c.z),d}static isFrontFacing(e,i,s,l){return Ui.subVectors(s,i),Sa.subVectors(e,i),Ui.cross(Sa).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ui.subVectors(this.c,this.b),Sa.subVectors(this.a,this.b),Ui.cross(Sa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Pi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return Pi.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return Pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let d,p;Ur.subVectors(l,s),Lr.subVectors(c,s),Cd.subVectors(e,s);const m=Ur.dot(Cd),h=Lr.dot(Cd);if(m<=0&&h<=0)return i.copy(s);Rd.subVectors(e,l);const _=Ur.dot(Rd),y=Lr.dot(Rd);if(_>=0&&y<=_)return i.copy(l);const g=m*y-_*h;if(g<=0&&m>=0&&_<=0)return d=m/(m-_),i.copy(s).addScaledVector(Ur,d);Nd.subVectors(e,c);const T=Ur.dot(Nd),A=Lr.dot(Nd);if(A>=0&&T<=A)return i.copy(c);const U=T*h-m*A;if(U<=0&&h>=0&&A<=0)return p=h/(h-A),i.copy(s).addScaledVector(Lr,p);const b=_*A-T*y;if(b<=0&&y-_>=0&&T-A>=0)return _x.subVectors(c,l),p=(y-_)/(y-_+(T-A)),i.copy(l).addScaledVector(_x,p);const v=1/(b+U+g);return d=U*v,p=g*v,i.copy(s).addScaledVector(Ur,d).addScaledVector(Lr,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class rl{constructor(e=new fe(1/0,1/0,1/0),i=new fe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Li.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Li.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Li.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,p=c.count;d<p;d++)e.isMesh===!0?e.getVertexPosition(d,Li):Li.fromBufferAttribute(c,d),Li.applyMatrix4(e.matrixWorld),this.expandByPoint(Li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),bc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),bc.copy(s.boundingBox)),bc.applyMatrix4(e.matrixWorld),this.union(bc)}const l=e.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Li),Li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zo),Mc.subVectors(this.max,Zo),Or.subVectors(e.a,Zo),Pr.subVectors(e.b,Zo),Ir.subVectors(e.c,Zo),os.subVectors(Pr,Or),ls.subVectors(Ir,Pr),Os.subVectors(Or,Ir);let i=[0,-os.z,os.y,0,-ls.z,ls.y,0,-Os.z,Os.y,os.z,0,-os.x,ls.z,0,-ls.x,Os.z,0,-Os.x,-os.y,os.x,0,-ls.y,ls.x,0,-Os.y,Os.x,0];return!Od(i,Or,Pr,Ir,Mc)||(i=[1,0,0,0,1,0,0,0,1],!Od(i,Or,Pr,Ir,Mc))?!1:(Ec.crossVectors(os,ls),i=[Ec.x,Ec.y,Ec.z],Od(i,Or,Pr,Ir,Mc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ma[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ma[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ma[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ma[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ma[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ma[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ma[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ma[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ma),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ma=[new fe,new fe,new fe,new fe,new fe,new fe,new fe,new fe],Li=new fe,bc=new rl,Or=new fe,Pr=new fe,Ir=new fe,os=new fe,ls=new fe,Os=new fe,Zo=new fe,Mc=new fe,Ec=new fe,Ps=new fe;function Od(r,e,i,s,l){for(let c=0,d=r.length-3;c<=d;c+=3){Ps.fromArray(r,c);const p=l.x*Math.abs(Ps.x)+l.y*Math.abs(Ps.y)+l.z*Math.abs(Ps.z),m=e.dot(Ps),h=i.dot(Ps),_=s.dot(Ps);if(Math.max(-Math.max(m,h,_),Math.min(m,h,_))>p)return!1}return!0}const Sn=new fe,Tc=new wt;let ib=0;class Ji extends Ys{constructor(e,i,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ib++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=sx,this.updateRanges=[],this.gpuType=Yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Tc.fromBufferAttribute(this,i),Tc.applyMatrix3(e),this.setXY(i,Tc.x,Tc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)Sn.fromBufferAttribute(this,i),Sn.applyMatrix3(e),this.setXYZ(i,Sn.x,Sn.y,Sn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)Sn.fromBufferAttribute(this,i),Sn.applyMatrix4(e),this.setXYZ(i,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)Sn.fromBufferAttribute(this,i),Sn.applyNormalMatrix(e),this.setXYZ(i,Sn.x,Sn.y,Sn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)Sn.fromBufferAttribute(this,i),Sn.transformDirection(e),this.setXYZ(i,Sn.x,Sn.y,Sn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=qo(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=$n(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=qo(i,this.array)),i}setX(e,i){return this.normalized&&(i=$n(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=qo(i,this.array)),i}setY(e,i){return this.normalized&&(i=$n(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=qo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=$n(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=qo(i,this.array)),i}setW(e,i){return this.normalized&&(i=$n(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=$n(i,this.array),s=$n(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=$n(i,this.array),s=$n(s,this.array),l=$n(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=$n(i,this.array),s=$n(s,this.array),l=$n(l,this.array),c=$n(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sx&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Mv extends Ji{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class Ev extends Ji{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class jn extends Ji{constructor(e,i,s){super(new Float32Array(e),i,s)}}const ab=new rl,Ko=new fe,Pd=new fe;class tp{constructor(e=new fe,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):ab.setFromPoints(e).getCenter(s);let l=0;for(let c=0,d=e.length;c<d;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ko.subVectors(e,this.center);const i=Ko.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Ko,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ko.copy(e.center).add(Pd)),this.expandByPoint(Ko.copy(e.center).sub(Pd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let sb=0;const Ei=new fn,Id=new In,zr=new fe,hi=new rl,Qo=new rl,wn=new fe;class zi extends Ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sb++}),this.uuid=sl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(FS(e)?Ev:Mv)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new gt().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ei.makeRotationFromQuaternion(e),this.applyMatrix4(Ei),this}rotateX(e){return Ei.makeRotationX(e),this.applyMatrix4(Ei),this}rotateY(e){return Ei.makeRotationY(e),this.applyMatrix4(Ei),this}rotateZ(e){return Ei.makeRotationZ(e),this.applyMatrix4(Ei),this}translate(e,i,s){return Ei.makeTranslation(e,i,s),this.applyMatrix4(Ei),this}scale(e,i,s){return Ei.makeScale(e,i,s),this.applyMatrix4(Ei),this}lookAt(e){return Id.lookAt(e),Id.updateMatrix(),this.applyMatrix4(Id.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zr).negate(),this.translate(zr.x,zr.y,zr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const d=e[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new jn(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new fe(-1/0,-1/0,-1/0),new fe(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];hi.setFromBufferAttribute(c),this.morphTargetsRelative?(wn.addVectors(this.boundingBox.min,hi.min),this.boundingBox.expandByPoint(wn),wn.addVectors(this.boundingBox.max,hi.max),this.boundingBox.expandByPoint(wn)):(this.boundingBox.expandByPoint(hi.min),this.boundingBox.expandByPoint(hi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tp);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new fe,1/0);return}if(e){const s=this.boundingSphere.center;if(hi.setFromBufferAttribute(e),i)for(let c=0,d=i.length;c<d;c++){const p=i[c];Qo.setFromBufferAttribute(p),this.morphTargetsRelative?(wn.addVectors(hi.min,Qo.min),hi.expandByPoint(wn),wn.addVectors(hi.max,Qo.max),hi.expandByPoint(wn)):(hi.expandByPoint(Qo.min),hi.expandByPoint(Qo.max))}hi.getCenter(s);let l=0;for(let c=0,d=e.count;c<d;c++)wn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(wn));if(i)for(let c=0,d=i.length;c<d;c++){const p=i[c],m=this.morphTargetsRelative;for(let h=0,_=p.count;h<_;h++)wn.fromBufferAttribute(p,h),m&&(zr.fromBufferAttribute(e,h),wn.add(zr)),l=Math.max(l,s.distanceToSquared(wn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;let d=this.getAttribute("tangent");(d===void 0||d.count!==s.count)&&(d=new Ji(new Float32Array(4*s.count),4),this.setAttribute("tangent",d));const p=[],m=[];for(let E=0;E<s.count;E++)p[E]=new fe,m[E]=new fe;const h=new fe,_=new fe,y=new fe,g=new wt,T=new wt,A=new wt,U=new fe,b=new fe;function v(E,N,X){h.fromBufferAttribute(s,E),_.fromBufferAttribute(s,N),y.fromBufferAttribute(s,X),g.fromBufferAttribute(c,E),T.fromBufferAttribute(c,N),A.fromBufferAttribute(c,X),_.sub(h),y.sub(h),T.sub(g),A.sub(g);const G=1/(T.x*A.y-A.x*T.y);isFinite(G)&&(U.copy(_).multiplyScalar(A.y).addScaledVector(y,-T.y).multiplyScalar(G),b.copy(y).multiplyScalar(T.x).addScaledVector(_,-A.x).multiplyScalar(G),p[E].add(U),p[N].add(U),p[X].add(U),m[E].add(b),m[N].add(b),m[X].add(b))}let F=this.groups;F.length===0&&(F=[{start:0,count:e.count}]);for(let E=0,N=F.length;E<N;++E){const X=F[E],G=X.start,j=X.count;for(let Q=G,te=G+j;Q<te;Q+=3)v(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}const P=new fe,D=new fe,V=new fe,O=new fe;function L(E){V.fromBufferAttribute(l,E),O.copy(V);const N=p[E];P.copy(N),P.sub(V.multiplyScalar(V.dot(N))).normalize(),D.crossVectors(O,N);const G=D.dot(m[E])<0?-1:1;d.setXYZW(E,P.x,P.y,P.z,G)}for(let E=0,N=F.length;E<N;++E){const X=F[E],G=X.start,j=X.count;for(let Q=G,te=G+j;Q<te;Q+=3)L(e.getX(Q+0)),L(e.getX(Q+1)),L(e.getX(Q+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==i.count)s=new Ji(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,T=s.count;g<T;g++)s.setXYZ(g,0,0,0);const l=new fe,c=new fe,d=new fe,p=new fe,m=new fe,h=new fe,_=new fe,y=new fe;if(e)for(let g=0,T=e.count;g<T;g+=3){const A=e.getX(g+0),U=e.getX(g+1),b=e.getX(g+2);l.fromBufferAttribute(i,A),c.fromBufferAttribute(i,U),d.fromBufferAttribute(i,b),_.subVectors(d,c),y.subVectors(l,c),_.cross(y),p.fromBufferAttribute(s,A),m.fromBufferAttribute(s,U),h.fromBufferAttribute(s,b),p.add(_),m.add(_),h.add(_),s.setXYZ(A,p.x,p.y,p.z),s.setXYZ(U,m.x,m.y,m.z),s.setXYZ(b,h.x,h.y,h.z)}else for(let g=0,T=i.count;g<T;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),d.fromBufferAttribute(i,g+2),_.subVectors(d,c),y.subVectors(l,c),_.cross(y),s.setXYZ(g+0,_.x,_.y,_.z),s.setXYZ(g+1,_.x,_.y,_.z),s.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)wn.fromBufferAttribute(e,i),wn.normalize(),e.setXYZ(i,wn.x,wn.y,wn.z)}toNonIndexed(){function e(p,m){const h=p.array,_=p.itemSize,y=p.normalized,g=new h.constructor(m.length*_);let T=0,A=0;for(let U=0,b=m.length;U<b;U++){p.isInterleavedBufferAttribute?T=m[U]*p.data.stride+p.offset:T=m[U]*_;for(let v=0;v<_;v++)g[A++]=h[T++]}return new Ji(g,_,y)}if(this.index===null)return ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new zi,s=this.index.array,l=this.attributes;for(const p in l){const m=l[p],h=e(m,s);i.setAttribute(p,h)}const c=this.morphAttributes;for(const p in c){const m=[],h=c[p];for(let _=0,y=h.length;_<y;_++){const g=h[_],T=e(g,s);m.push(T)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let p=0,m=d.length;p<m;p++){const h=d[p];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(e[h]=m[h]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const h=s[m];e.data.attributes[m]=h.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],_=[];for(let y=0,g=h.length;y<g;y++){const T=h[y];_.push(T.toJSON(e.data))}_.length>0&&(l[m]=_,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const h in l){const _=l[h];this.setAttribute(h,_.clone(i))}const c=e.morphAttributes;for(const h in c){const _=[],y=c[h];for(let g=0,T=y.length;g<T;g++)_.push(y[g].clone(i));this.morphAttributes[h]=_}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let h=0,_=d.length;h<_;h++){const y=d[h];this.addGroup(y.start,y.count,y.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let rb=0;class Jr extends Ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rb++}),this.uuid=sl(),this.name="",this.type="Material",this.blending=kr,this.side=hs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qd,this.blendDst=Jd,this.blendEquation=Gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ht(0,0,0),this.blendAlpha=0,this.depthFunc=Wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ax,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wr,this.stencilZFail=wr,this.stencilZPass=wr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){ut(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ut(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector2&&s&&s.isVector2||l&&l.isEuler&&s&&s.isEuler||l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==kr&&(s.blending=this.blending),this.side!==hs&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Qd&&(s.blendSrc=this.blendSrc),this.blendDst!==Jd&&(s.blendDst=this.blendDst),this.blendEquation!==Gs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Wr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ax&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==wr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==wr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const d=[];for(const p in c){const m=c[p];delete m.metadata,d.push(m)}return d}if(i){const c=l(e.textures),d=l(e.images);c.length>0&&(s.textures=c),d.length>0&&(s.images=d)}return s}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ht().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new wt().fromArray(s)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new wt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ea=new fe,zd=new fe,Ac=new fe,cs=new fe,Fd=new fe,wc=new fe,Bd=new fe;class ob{constructor(e=new fe,i=new fe(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ea)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ea.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ea.copy(this.origin).addScaledVector(this.direction,i),Ea.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){zd.copy(e).add(i).multiplyScalar(.5),Ac.copy(i).sub(e).normalize(),cs.copy(this.origin).sub(zd);const c=e.distanceTo(i)*.5,d=-this.direction.dot(Ac),p=cs.dot(this.direction),m=-cs.dot(Ac),h=cs.lengthSq(),_=Math.abs(1-d*d);let y,g,T,A;if(_>0)if(y=d*m-p,g=d*p-m,A=c*_,y>=0)if(g>=-A)if(g<=A){const U=1/_;y*=U,g*=U,T=y*(y+d*g+2*p)+g*(d*y+g+2*m)+h}else g=c,y=Math.max(0,-(d*g+p)),T=-y*y+g*(g+2*m)+h;else g=-c,y=Math.max(0,-(d*g+p)),T=-y*y+g*(g+2*m)+h;else g<=-A?(y=Math.max(0,-(-d*c+p)),g=y>0?-c:Math.min(Math.max(-c,-m),c),T=-y*y+g*(g+2*m)+h):g<=A?(y=0,g=Math.min(Math.max(-c,-m),c),T=g*(g+2*m)+h):(y=Math.max(0,-(d*c+p)),g=y>0?c:Math.min(Math.max(-c,-m),c),T=-y*y+g*(g+2*m)+h);else g=d>0?-c:c,y=Math.max(0,-(d*g+p)),T=-y*y+g*(g+2*m)+h;return s&&s.copy(this.origin).addScaledVector(this.direction,y),l&&l.copy(zd).addScaledVector(Ac,g),T}intersectSphere(e,i){Ea.subVectors(e.center,this.origin);const s=Ea.dot(this.direction),l=Ea.dot(Ea)-s*s,c=e.radius*e.radius;if(l>c)return null;const d=Math.sqrt(c-l),p=s-d,m=s+d;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,d,p,m;const h=1/this.direction.x,_=1/this.direction.y,y=1/this.direction.z,g=this.origin;return h>=0?(s=(e.min.x-g.x)*h,l=(e.max.x-g.x)*h):(s=(e.max.x-g.x)*h,l=(e.min.x-g.x)*h),_>=0?(c=(e.min.y-g.y)*_,d=(e.max.y-g.y)*_):(c=(e.max.y-g.y)*_,d=(e.min.y-g.y)*_),s>d||c>l||((c>s||isNaN(s))&&(s=c),(d<l||isNaN(l))&&(l=d),y>=0?(p=(e.min.z-g.z)*y,m=(e.max.z-g.z)*y):(p=(e.max.z-g.z)*y,m=(e.min.z-g.z)*y),s>m||p>l)||((p>s||s!==s)&&(s=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,Ea)!==null}intersectTriangle(e,i,s,l,c){Fd.subVectors(i,e),wc.subVectors(s,e),Bd.crossVectors(Fd,wc);let d=this.direction.dot(Bd),p;if(d>0){if(l)return null;p=1}else if(d<0)p=-1,d=-d;else return null;cs.subVectors(this.origin,e);const m=p*this.direction.dot(wc.crossVectors(cs,wc));if(m<0)return null;const h=p*this.direction.dot(Fd.cross(cs));if(h<0||m+h>d)return null;const _=-p*cs.dot(Bd);return _<0?null:this.at(_/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jc extends Jr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Da,this.combine=jh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yx=new fn,Is=new ob,Cc=new tp,Sx=new fe,Rc=new fe,Nc=new fe,Dc=new fe,Hd=new fe,Uc=new fe,bx=new fe,Lc=new fe;class dt extends In{constructor(e=new zi,i=new Jc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const p=this.morphTargetInfluences;if(c&&p){Uc.set(0,0,0);for(let m=0,h=c.length;m<h;m++){const _=p[m],y=c[m];_!==0&&(Hd.fromBufferAttribute(y,e),d?Uc.addScaledVector(Hd,_):Uc.addScaledVector(Hd.sub(i),_))}i.add(Uc)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Cc.copy(s.boundingSphere),Cc.applyMatrix4(c),Is.copy(e.ray).recast(e.near),!(Cc.containsPoint(Is.origin)===!1&&(Is.intersectSphere(Cc,Sx)===null||Is.origin.distanceToSquared(Sx)>(e.far-e.near)**2))&&(yx.copy(c).invert(),Is.copy(e.ray).applyMatrix4(yx),!(s.boundingBox!==null&&Is.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Is)))}_computeIntersections(e,i,s){let l;const c=this.geometry,d=this.material,p=c.index,m=c.attributes.position,h=c.attributes.uv,_=c.attributes.uv1,y=c.attributes.normal,g=c.groups,T=c.drawRange;if(p!==null)if(Array.isArray(d))for(let A=0,U=g.length;A<U;A++){const b=g[A],v=d[b.materialIndex],F=Math.max(b.start,T.start),P=Math.min(p.count,Math.min(b.start+b.count,T.start+T.count));for(let D=F,V=P;D<V;D+=3){const O=p.getX(D),L=p.getX(D+1),E=p.getX(D+2);l=Oc(this,v,e,s,h,_,y,O,L,E),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=b.materialIndex,i.push(l))}}else{const A=Math.max(0,T.start),U=Math.min(p.count,T.start+T.count);for(let b=A,v=U;b<v;b+=3){const F=p.getX(b),P=p.getX(b+1),D=p.getX(b+2);l=Oc(this,d,e,s,h,_,y,F,P,D),l&&(l.faceIndex=Math.floor(b/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let A=0,U=g.length;A<U;A++){const b=g[A],v=d[b.materialIndex],F=Math.max(b.start,T.start),P=Math.min(m.count,Math.min(b.start+b.count,T.start+T.count));for(let D=F,V=P;D<V;D+=3){const O=D,L=D+1,E=D+2;l=Oc(this,v,e,s,h,_,y,O,L,E),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=b.materialIndex,i.push(l))}}else{const A=Math.max(0,T.start),U=Math.min(m.count,T.start+T.count);for(let b=A,v=U;b<v;b+=3){const F=b,P=b+1,D=b+2;l=Oc(this,d,e,s,h,_,y,F,P,D),l&&(l.faceIndex=Math.floor(b/3),i.push(l))}}}}function lb(r,e,i,s,l,c,d,p){let m;if(e.side===ei?m=s.intersectTriangle(d,c,l,!0,p):m=s.intersectTriangle(l,c,d,e.side===hs,p),m===null)return null;Lc.copy(p),Lc.applyMatrix4(r.matrixWorld);const h=i.ray.origin.distanceTo(Lc);return h<i.near||h>i.far?null:{distance:h,point:Lc.clone(),object:r}}function Oc(r,e,i,s,l,c,d,p,m,h){r.getVertexPosition(p,Rc),r.getVertexPosition(m,Nc),r.getVertexPosition(h,Dc);const _=lb(r,e,i,s,Rc,Nc,Dc,bx);if(_){const y=new fe;Pi.getBarycoord(bx,Rc,Nc,Dc,y),l&&(_.uv=Pi.getInterpolatedAttribute(l,p,m,h,y,new wt)),c&&(_.uv1=Pi.getInterpolatedAttribute(c,p,m,h,y,new wt)),d&&(_.normal=Pi.getInterpolatedAttribute(d,p,m,h,y,new fe),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const g={a:p,b:m,c:h,normal:new fe,materialIndex:0};Pi.getNormal(Rc,Nc,Dc,g.normal),_.face=g,_.barycoord=y}return _}class cb extends Xn{constructor(e=null,i=1,s=1,l,c,d,p,m,h=Pn,_=Pn,y,g){super(null,d,p,m,h,_,l,c,y,g),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Gd=new fe,ub=new fe,fb=new gt;class Hs{constructor(e=new fe(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Gd.subVectors(s,i).cross(ub.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,s=!0){const l=e.delta(Gd),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const d=-(e.start.dot(this.normal)+this.constant)/c;return s===!0&&(d<0||d>1)?null:i.copy(e.start).addScaledVector(l,d)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||fb.getNormalMatrix(e),l=this.coplanarPoint(Gd).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zs=new tp,db=new wt(.5,.5),Pc=new fe;class np{constructor(e=new Hs,i=new Hs,s=new Hs,l=new Hs,c=new Hs,d=new Hs){this.planes=[e,i,s,l,c,d]}set(e,i,s,l,c,d){const p=this.planes;return p[0].copy(e),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(c),p[5].copy(d),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Zi,s=!1){const l=this.planes,c=e.elements,d=c[0],p=c[1],m=c[2],h=c[3],_=c[4],y=c[5],g=c[6],T=c[7],A=c[8],U=c[9],b=c[10],v=c[11],F=c[12],P=c[13],D=c[14],V=c[15];if(l[0].setComponents(h-d,T-_,v-A,V-F).normalize(),l[1].setComponents(h+d,T+_,v+A,V+F).normalize(),l[2].setComponents(h+p,T+y,v+U,V+P).normalize(),l[3].setComponents(h-p,T-y,v-U,V-P).normalize(),s)l[4].setComponents(m,g,b,D).normalize(),l[5].setComponents(h-m,T-g,v-b,V-D).normalize();else if(l[4].setComponents(h-m,T-g,v-b,V-D).normalize(),i===Zi)l[5].setComponents(h+m,T+g,v+b,V+D).normalize();else if(i===al)l[5].setComponents(m,g,b,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),zs.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zs)}intersectsSprite(e){zs.center.set(0,0,0);const i=db.distanceTo(e.center);return zs.radius=.7071067811865476+i,zs.applyMatrix4(e.matrixWorld),this.intersectsSphere(zs)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Pc.x=l.normal.x>0?e.max.x:e.min.x,Pc.y=l.normal.y>0?e.max.y:e.min.y,Pc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Pc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Tv extends Xn{constructor(e=[],i=Ws,s,l,c,d,p,m,h,_){super(e,i,s,l,c,d,p,m,h,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Yr extends Xn{constructor(e,i,s=$i,l,c,d,p=Pn,m=Pn,h,_=Na,y=1){if(_!==Na&&_!==js)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:i,depth:y};super(g,l,c,d,p,m,_,s,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ep(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class hb extends Yr{constructor(e,i=$i,s=Ws,l,c,d=Pn,p=Pn,m,h=Na){const _={width:e,height:e,depth:1},y=[_,_,_,_,_,_];super(e,e,i,s,l,c,d,p,m,h),this.image=y,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Av extends Xn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class pn extends zi{constructor(e=1,i=1,s=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:d};const p=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],h=[],_=[],y=[];let g=0,T=0;A("z","y","x",-1,-1,s,i,e,d,c,0),A("z","y","x",1,-1,s,i,-e,d,c,1),A("x","z","y",1,1,e,s,i,l,d,2),A("x","z","y",1,-1,e,s,-i,l,d,3),A("x","y","z",1,-1,e,i,s,l,c,4),A("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new jn(h,3)),this.setAttribute("normal",new jn(_,3)),this.setAttribute("uv",new jn(y,2));function A(U,b,v,F,P,D,V,O,L,E,N){const X=D/L,G=V/E,j=D/2,Q=V/2,te=O/2,q=L+1,I=E+1;let z=0,Y=0;const ae=new fe;for(let H=0;H<I;H++){const S=H*G-Q;for(let k=0;k<q;k++){const re=k*X-j;ae[U]=re*F,ae[b]=S*P,ae[v]=te,h.push(ae.x,ae.y,ae.z),ae[U]=0,ae[b]=0,ae[v]=O>0?1:-1,_.push(ae.x,ae.y,ae.z),y.push(k/L),y.push(1-H/E),z+=1}}for(let H=0;H<E;H++)for(let S=0;S<L;S++){const k=g+S+q*H,re=g+S+q*(H+1),_e=g+(S+1)+q*(H+1),Me=g+(S+1)+q*H;m.push(k,re,Me),m.push(re,_e,Me),Y+=6}p.addGroup(T,Y,N),T+=Y,g+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Oi extends zi{constructor(e=1,i=1,s=1,l=32,c=1,d=!1,p=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:d,thetaStart:p,thetaLength:m};const h=this;l=Math.floor(l),c=Math.floor(c);const _=[],y=[],g=[],T=[];let A=0;const U=[],b=s/2;let v=0;F(),d===!1&&(e>0&&P(!0),i>0&&P(!1)),this.setIndex(_),this.setAttribute("position",new jn(y,3)),this.setAttribute("normal",new jn(g,3)),this.setAttribute("uv",new jn(T,2));function F(){const D=new fe,V=new fe;let O=0;const L=(i-e)/s;for(let E=0;E<=c;E++){const N=[],X=E/c,G=X*(i-e)+e;for(let j=0;j<=l;j++){const Q=j/l,te=Q*m+p,q=Math.sin(te),I=Math.cos(te);V.x=G*q,V.y=-X*s+b,V.z=G*I,y.push(V.x,V.y,V.z),D.set(q,L,I).normalize(),g.push(D.x,D.y,D.z),T.push(Q,1-X),N.push(A++)}U.push(N)}for(let E=0;E<l;E++)for(let N=0;N<c;N++){const X=U[N][E],G=U[N+1][E],j=U[N+1][E+1],Q=U[N][E+1];(e>0||N!==0)&&(_.push(X,G,Q),O+=3),(i>0||N!==c-1)&&(_.push(G,j,Q),O+=3)}h.addGroup(v,O,0),v+=O}function P(D){const V=A,O=new wt,L=new fe;let E=0;const N=D===!0?e:i,X=D===!0?1:-1;for(let j=1;j<=l;j++)y.push(0,b*X,0),g.push(0,X,0),T.push(.5,.5),A++;const G=A;for(let j=0;j<=l;j++){const te=j/l*m+p,q=Math.cos(te),I=Math.sin(te);L.x=N*I,L.y=b*X,L.z=N*q,y.push(L.x,L.y,L.z),g.push(0,X,0),O.x=q*.5+.5,O.y=I*.5*X+.5,T.push(O.x,O.y),A++}for(let j=0;j<l;j++){const Q=V+j,te=G+j;D===!0?_.push(te,te+1,Q):_.push(te+1,te,Q),E+=3}h.addGroup(v,E,D===!0?1:2),v+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oi(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Vs extends Oi{constructor(e=1,i=1,s=32,l=1,c=!1,d=0,p=Math.PI*2){super(0,e,i,s,l,c,d,p),this.type="ConeGeometry",this.parameters={radius:e,height:i,radialSegments:s,heightSegments:l,openEnded:c,thetaStart:d,thetaLength:p}}static fromJSON(e){return new Vs(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class tu extends zi{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,d=i/2,p=Math.floor(s),m=Math.floor(l),h=p+1,_=m+1,y=e/p,g=i/m,T=[],A=[],U=[],b=[];for(let v=0;v<_;v++){const F=v*g-d;for(let P=0;P<h;P++){const D=P*y-c;A.push(D,-F,0),U.push(0,0,1),b.push(P/p),b.push(1-v/m)}}for(let v=0;v<m;v++)for(let F=0;F<p;F++){const P=F+h*v,D=F+h*(v+1),V=F+1+h*(v+1),O=F+1+h*v;T.push(P,D,O),T.push(D,V,O)}this.setIndex(T),this.setAttribute("position",new jn(A,3)),this.setAttribute("normal",new jn(U,3)),this.setAttribute("uv",new jn(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tu(e.width,e.height,e.widthSegments,e.heightSegments)}}class Vr extends zi{constructor(e=1,i=32,s=16,l=0,c=Math.PI*2,d=0,p=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:d,thetaLength:p},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(d+p,Math.PI);let h=0;const _=[],y=new fe,g=new fe,T=[],A=[],U=[],b=[];for(let v=0;v<=s;v++){const F=[],P=v/s,D=d+P*p,V=e*Math.cos(D),O=Math.sqrt(e*e-V*V);let L=0;v===0&&d===0?L=.5/i:v===s&&m===Math.PI&&(L=-.5/i);for(let E=0;E<=i;E++){const N=E/i,X=l+N*c;y.x=-O*Math.cos(X),y.y=V,y.z=O*Math.sin(X),A.push(y.x,y.y,y.z),g.copy(y).normalize(),U.push(g.x,g.y,g.z),b.push(N+L,1-P),F.push(h++)}_.push(F)}for(let v=0;v<s;v++)for(let F=0;F<i;F++){const P=_[v][F+1],D=_[v][F],V=_[v+1][F],O=_[v+1][F+1];(v!==0||d>0)&&T.push(P,D,O),(v!==s-1||m<Math.PI)&&T.push(D,V,O)}this.setIndex(T),this.setAttribute("position",new jn(A,3)),this.setAttribute("normal",new jn(U,3)),this.setAttribute("uv",new jn(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Zr(r){const e={};for(const i in r){e[i]={};for(const s in r[i]){const l=r[i][s];if(Mx(l))l.isRenderTargetTexture?(ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone();else if(Array.isArray(l))if(Mx(l[0])){const c=[];for(let d=0,p=l.length;d<p;d++)c[d]=l[d].clone();e[i][s]=c}else e[i][s]=l.slice();else e[i][s]=l}}return e}function kn(r){const e={};for(let i=0;i<r.length;i++){const s=Zr(r[i]);for(const l in s)e[l]=s[l]}return e}function Mx(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function pb(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function wv(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Nt.workingColorSpace}const mb={clone:Zr,merge:kn};var gb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ea extends Jr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gb,this.fragmentShader=xb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zr(e.uniforms),this.uniformsGroups=pb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const s in e.uniforms){const l=e.uniforms[s];switch(this.uniforms[s]={},l.type){case"t":this.uniforms[s].value=i[l.value]||null;break;case"c":this.uniforms[s].value=new ht().setHex(l.value);break;case"v2":this.uniforms[s].value=new wt().fromArray(l.value);break;case"v3":this.uniforms[s].value=new fe().fromArray(l.value);break;case"v4":this.uniforms[s].value=new ln().fromArray(l.value);break;case"m3":this.uniforms[s].value=new gt().fromArray(l.value);break;case"m4":this.uniforms[s].value=new fn().fromArray(l.value);break;default:this.uniforms[s].value=l.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)this.extensions[s]=e.extensions[s];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class vb extends ea{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class _b extends Jr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yc,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Da,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class on extends Jr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yc,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Da,this.combine=jh,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class yb extends Jr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=NS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Sb extends Jr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class nu extends In{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new ht(e),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}class bb extends nu{constructor(e,i,s){super(e,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(In.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ht(i)}copy(e,i){return super.copy(e,i),this.groundColor.copy(e.groundColor),this}toJSON(e){const i=super.toJSON(e);return i.object.groundColor=this.groundColor.getHex(),i}}const Vd=new fn,Ex=new fe,Tx=new fe;class Cv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new wt(512,512),this.mapType=mi,this.map=null,this.mapPass=null,this.matrix=new fn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new np,this._frameExtents=new wt(1,1),this._viewportCount=1,this._viewports=[new ln(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;Ex.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ex),Tx.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(Tx),i.updateMatrixWorld(),Vd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vd,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===al||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Vd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ic=new fe,zc=new Qr,Xi=new fe;class Rv extends In{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fn,this.projectionMatrix=new fn,this.projectionMatrixInverse=new fn,this.coordinateSystem=Zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ic,zc,Xi),Xi.x===1&&Xi.y===1&&Xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ic,zc,Xi.set(1,1,1)).invert()}updateWorldMatrix(e,i,s=!1){super.updateWorldMatrix(e,i,s),this.matrixWorld.decompose(Ic,zc,Xi),Xi.x===1&&Xi.y===1&&Xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ic,zc,Xi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const us=new fe,Ax=new wt,wx=new wt;class pi extends Rv{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Fh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fh*2*Math.atan(Math.tan(vd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){us.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(us.x,us.y).multiplyScalar(-e/us.z),us.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(us.x,us.y).multiplyScalar(-e/us.z)}getViewSize(e,i){return this.getViewBounds(e,Ax,wx),i.subVectors(wx,Ax)}setViewOffset(e,i,s,l,c,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(vd*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,h=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*s/h,l*=d.width/m,s*=d.height/h}const p=this.filmOffset;p!==0&&(c+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Mb extends Cv{constructor(){super(new pi(90,1,.5,500)),this.isPointLightShadow=!0}}class Eb extends nu{constructor(e,i,s=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new Mb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class ip extends Rv{constructor(e=-1,i=1,s=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,d=s+e,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,d=c+h*this.view.width,p-=_*this.view.offsetY,m=p-_*this.view.height}this.projectionMatrix.makeOrthographic(c,d,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Tb extends Cv{constructor(){super(new ip(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ab extends nu{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(In.DEFAULT_UP),this.updateMatrix(),this.target=new In,this.shadow=new Tb}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class wb extends nu{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const Fr=-90,Br=1;class Cb extends In{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new pi(Fr,Br,e,i);l.layers=this.layers,this.add(l);const c=new pi(Fr,Br,e,i);c.layers=this.layers,this.add(c);const d=new pi(Fr,Br,e,i);d.layers=this.layers,this.add(d);const p=new pi(Fr,Br,e,i);p.layers=this.layers,this.add(p);const m=new pi(Fr,Br,e,i);m.layers=this.layers,this.add(m);const h=new pi(Fr,Br,e,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,d,p,m]=i;for(const h of i)this.remove(h);if(e===Zi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===al)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of i)this.add(h),h.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,p,m,h,_]=this.children,y=e.getRenderTarget(),g=e.getActiveCubeFace(),T=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const U=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let b=!1;e.isWebGLRenderer===!0?b=e.state.buffers.depth.getReversed():b=e.reversedDepthBuffer,e.setRenderTarget(s,0,l),b&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(s,1,l),b&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),e.setRenderTarget(s,2,l),b&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(s,3,l),b&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(s,4,l),b&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),s.texture.generateMipmaps=U,e.setRenderTarget(s,5,l),b&&e.autoClear===!1&&e.clearDepth(),e.render(i,_),e.setRenderTarget(y,g,T),e.xr.enabled=A,s.texture.needsPMREMUpdate=!0}}class Rb extends pi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Nb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ut("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}const fp=class fp{constructor(e,i,s,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let s=0;s<4;s++)this.elements[s]=e[s+i];return this}set(e,i,s,l){const c=this.elements;return c[0]=e,c[2]=i,c[1]=s,c[3]=l,this}};fp.prototype.isMatrix2=!0;let Cx=fp;function Rx(r,e,i,s){const l=Db(s);switch(i){case gv:return r*e;case vv:return r*e/l.components*l.byteLength;case Zh:return r*e/l.components*l.byteLength;case qs:return r*e*2/l.components*l.byteLength;case Kh:return r*e*2/l.components*l.byteLength;case xv:return r*e*3/l.components*l.byteLength;case Ii:return r*e*4/l.components*l.byteLength;case Qh:return r*e*4/l.components*l.byteLength;case Gc:case Vc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case kc:case Xc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ch:case fh:return Math.max(r,16)*Math.max(e,8)/4;case lh:case uh:return Math.max(r,8)*Math.max(e,8)/2;case dh:case hh:case mh:case gh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ph:case Wc:case xh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case vh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case _h:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case yh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Sh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case bh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Mh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Eh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Th:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Ah:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case wh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Ch:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Rh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Nh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Dh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Uh:case Lh:case Oh:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Ph:case Ih:return Math.ceil(r/4)*Math.ceil(e/4)*8;case qc:case zh:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Db(r){switch(r){case mi:case dv:return{byteLength:1,components:1};case nl:case hv:case Ra:return{byteLength:2,components:1};case qh:case Yh:return{byteLength:2,components:4};case $i:case Wh:case Yi:return{byteLength:4,components:1};case pv:case mv:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xh}}));typeof window<"u"&&(window.__THREE__?ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Nv(){let r=null,e=!1,i=null,s=null;function l(c,d){i(c,d),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&r!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function Ub(r){const e=new WeakMap;function i(p,m){const h=p.array,_=p.usage,y=h.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,h,_),p.onUploadCallback();let T;if(h instanceof Float32Array)T=r.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)T=r.HALF_FLOAT;else if(h instanceof Uint16Array)p.isFloat16BufferAttribute?T=r.HALF_FLOAT:T=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)T=r.SHORT;else if(h instanceof Uint32Array)T=r.UNSIGNED_INT;else if(h instanceof Int32Array)T=r.INT;else if(h instanceof Int8Array)T=r.BYTE;else if(h instanceof Uint8Array)T=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)T=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:T,bytesPerElement:h.BYTES_PER_ELEMENT,version:p.version,size:y}}function s(p,m,h){const _=m.array,y=m.updateRanges;if(r.bindBuffer(h,p),y.length===0)r.bufferSubData(h,0,_);else{y.sort((T,A)=>T.start-A.start);let g=0;for(let T=1;T<y.length;T++){const A=y[g],U=y[T];U.start<=A.start+A.count+1?A.count=Math.max(A.count,U.start+U.count-A.start):(++g,y[g]=U)}y.length=g+1;for(let T=0,A=y.length;T<A;T++){const U=y[T];r.bufferSubData(h,U.start*_.BYTES_PER_ELEMENT,_,U.start,U.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=e.get(p);m&&(r.deleteBuffer(m.buffer),e.delete(p))}function d(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const _=e.get(p);(!_||_.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const h=e.get(p);if(h===void 0)e.set(p,i(p,m));else if(h.version<p.version){if(h.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,p,m),h.version=p.version}}return{get:l,remove:c,update:d}}var Lb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ob=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Pb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ib=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Hb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Vb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Wb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,qb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Yb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Zb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,$b=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,eM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,tM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,nM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,iM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,aM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,sM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,oM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cM="gl_FragColor = linearToOutputTexel( gl_FragColor );",uM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,dM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,hM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,pM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,gM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_M=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,SM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,MM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,EM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,TM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,AM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,CM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,RM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,NM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,DM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,UM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,LM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,OM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,PM=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,IM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,FM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,BM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,HM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,GM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,VM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,kM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,XM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,WM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,YM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ZM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,KM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,QM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,JM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,$M=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,e1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,t1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,n1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,i1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,a1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,s1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,r1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,o1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,l1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,c1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,u1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,f1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,d1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,h1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,p1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,m1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,g1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,x1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,v1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,_1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,y1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,S1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,b1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,M1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,E1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,T1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,A1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,w1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,C1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,R1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,N1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,D1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,U1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const L1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,O1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,F1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,H1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,G1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,V1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,k1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,X1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,W1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,q1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Y1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Z1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,K1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,J1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,eE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,tE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,aE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,lE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,St={alphahash_fragment:Lb,alphahash_pars_fragment:Ob,alphamap_fragment:Pb,alphamap_pars_fragment:Ib,alphatest_fragment:zb,alphatest_pars_fragment:Fb,aomap_fragment:Bb,aomap_pars_fragment:Hb,batching_pars_vertex:Gb,batching_vertex:Vb,begin_vertex:kb,beginnormal_vertex:Xb,bsdfs:jb,iridescence_fragment:Wb,bumpmap_pars_fragment:qb,clipping_planes_fragment:Yb,clipping_planes_pars_fragment:Zb,clipping_planes_pars_vertex:Kb,clipping_planes_vertex:Qb,color_fragment:Jb,color_pars_fragment:$b,color_pars_vertex:eM,color_vertex:tM,common:nM,cube_uv_reflection_fragment:iM,defaultnormal_vertex:aM,displacementmap_pars_vertex:sM,displacementmap_vertex:rM,emissivemap_fragment:oM,emissivemap_pars_fragment:lM,colorspace_fragment:cM,colorspace_pars_fragment:uM,envmap_fragment:fM,envmap_common_pars_fragment:dM,envmap_pars_fragment:hM,envmap_pars_vertex:pM,envmap_physical_pars_fragment:TM,envmap_vertex:mM,fog_vertex:gM,fog_pars_vertex:xM,fog_fragment:vM,fog_pars_fragment:_M,gradientmap_pars_fragment:yM,lightmap_pars_fragment:SM,lights_lambert_fragment:bM,lights_lambert_pars_fragment:MM,lights_pars_begin:EM,lights_toon_fragment:AM,lights_toon_pars_fragment:wM,lights_phong_fragment:CM,lights_phong_pars_fragment:RM,lights_physical_fragment:NM,lights_physical_pars_fragment:DM,lights_fragment_begin:UM,lights_fragment_maps:LM,lights_fragment_end:OM,lightprobes_pars_fragment:PM,logdepthbuf_fragment:IM,logdepthbuf_pars_fragment:zM,logdepthbuf_pars_vertex:FM,logdepthbuf_vertex:BM,map_fragment:HM,map_pars_fragment:GM,map_particle_fragment:VM,map_particle_pars_fragment:kM,metalnessmap_fragment:XM,metalnessmap_pars_fragment:jM,morphinstance_vertex:WM,morphcolor_vertex:qM,morphnormal_vertex:YM,morphtarget_pars_vertex:ZM,morphtarget_vertex:KM,normal_fragment_begin:QM,normal_fragment_maps:JM,normal_pars_fragment:$M,normal_pars_vertex:e1,normal_vertex:t1,normalmap_pars_fragment:n1,clearcoat_normal_fragment_begin:i1,clearcoat_normal_fragment_maps:a1,clearcoat_pars_fragment:s1,iridescence_pars_fragment:r1,opaque_fragment:o1,packing:l1,premultiplied_alpha_fragment:c1,project_vertex:u1,dithering_fragment:f1,dithering_pars_fragment:d1,roughnessmap_fragment:h1,roughnessmap_pars_fragment:p1,shadowmap_pars_fragment:m1,shadowmap_pars_vertex:g1,shadowmap_vertex:x1,shadowmask_pars_fragment:v1,skinbase_vertex:_1,skinning_pars_vertex:y1,skinning_vertex:S1,skinnormal_vertex:b1,specularmap_fragment:M1,specularmap_pars_fragment:E1,tonemapping_fragment:T1,tonemapping_pars_fragment:A1,transmission_fragment:w1,transmission_pars_fragment:C1,uv_pars_fragment:R1,uv_pars_vertex:N1,uv_vertex:D1,worldpos_vertex:U1,background_vert:L1,background_frag:O1,backgroundCube_vert:P1,backgroundCube_frag:I1,cube_vert:z1,cube_frag:F1,depth_vert:B1,depth_frag:H1,distance_vert:G1,distance_frag:V1,equirect_vert:k1,equirect_frag:X1,linedashed_vert:j1,linedashed_frag:W1,meshbasic_vert:q1,meshbasic_frag:Y1,meshlambert_vert:Z1,meshlambert_frag:K1,meshmatcap_vert:Q1,meshmatcap_frag:J1,meshnormal_vert:$1,meshnormal_frag:eE,meshphong_vert:tE,meshphong_frag:nE,meshphysical_vert:iE,meshphysical_frag:aE,meshtoon_vert:sE,meshtoon_frag:rE,points_vert:oE,points_frag:lE,shadow_vert:cE,shadow_frag:uE,sprite_vert:fE,sprite_frag:dE},Fe={common:{diffuse:{value:new ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},envMapRotation:{value:new gt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new fe},probesMax:{value:new fe},probesResolution:{value:new fe}},points:{diffuse:{value:new ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new ht(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},qi={basic:{uniforms:kn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:St.meshbasic_vert,fragmentShader:St.meshbasic_frag},lambert:{uniforms:kn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new ht(0)},envMapIntensity:{value:1}}]),vertexShader:St.meshlambert_vert,fragmentShader:St.meshlambert_frag},phong:{uniforms:kn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new ht(0)},specular:{value:new ht(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:St.meshphong_vert,fragmentShader:St.meshphong_frag},standard:{uniforms:kn([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag},toon:{uniforms:kn([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new ht(0)}}]),vertexShader:St.meshtoon_vert,fragmentShader:St.meshtoon_frag},matcap:{uniforms:kn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:St.meshmatcap_vert,fragmentShader:St.meshmatcap_frag},points:{uniforms:kn([Fe.points,Fe.fog]),vertexShader:St.points_vert,fragmentShader:St.points_frag},dashed:{uniforms:kn([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:St.linedashed_vert,fragmentShader:St.linedashed_frag},depth:{uniforms:kn([Fe.common,Fe.displacementmap]),vertexShader:St.depth_vert,fragmentShader:St.depth_frag},normal:{uniforms:kn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:St.meshnormal_vert,fragmentShader:St.meshnormal_frag},sprite:{uniforms:kn([Fe.sprite,Fe.fog]),vertexShader:St.sprite_vert,fragmentShader:St.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:St.background_vert,fragmentShader:St.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new gt}},vertexShader:St.backgroundCube_vert,fragmentShader:St.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:St.cube_vert,fragmentShader:St.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:St.equirect_vert,fragmentShader:St.equirect_frag},distance:{uniforms:kn([Fe.common,Fe.displacementmap,{referencePosition:{value:new fe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:St.distance_vert,fragmentShader:St.distance_frag},shadow:{uniforms:kn([Fe.lights,Fe.fog,{color:{value:new ht(0)},opacity:{value:1}}]),vertexShader:St.shadow_vert,fragmentShader:St.shadow_frag}};qi.physical={uniforms:kn([qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new ht(0)},specularColor:{value:new ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag};const Fc={r:0,b:0,g:0},hE=new fn,Dv=new gt;Dv.set(-1,0,0,0,1,0,0,0,1);function pE(r,e,i,s,l,c){const d=new ht(0);let p=l===!0?0:1,m,h,_=null,y=0,g=null;function T(F){let P=F.isScene===!0?F.background:null;if(P&&P.isTexture){const D=F.backgroundBlurriness>0;P=e.get(P,D)}return P}function A(F){let P=!1;const D=T(F);D===null?b(d,p):D&&D.isColor&&(b(D,1),P=!0);const V=r.xr.getEnvironmentBlendMode();V==="additive"?i.buffers.color.setClear(0,0,0,1,c):V==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||P)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function U(F,P){const D=T(P);D&&(D.isCubeTexture||D.mapping===eu)?(h===void 0&&(h=new dt(new pn(1,1,1),new ea({name:"BackgroundCubeMaterial",uniforms:Zr(qi.backgroundCube.uniforms),vertexShader:qi.backgroundCube.vertexShader,fragmentShader:qi.backgroundCube.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(V,O,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=D,h.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(hE.makeRotationFromEuler(P.backgroundRotation)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Dv),h.material.toneMapped=Nt.getTransfer(D.colorSpace)!==qt,(_!==D||y!==D.version||g!==r.toneMapping)&&(h.material.needsUpdate=!0,_=D,y=D.version,g=r.toneMapping),h.layers.enableAll(),F.unshift(h,h.geometry,h.material,0,0,null)):D&&D.isTexture&&(m===void 0&&(m=new dt(new tu(2,2),new ea({name:"BackgroundMaterial",uniforms:Zr(qi.background.uniforms),vertexShader:qi.background.vertexShader,fragmentShader:qi.background.fragmentShader,side:hs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=D,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.toneMapped=Nt.getTransfer(D.colorSpace)!==qt,D.matrixAutoUpdate===!0&&D.updateMatrix(),m.material.uniforms.uvTransform.value.copy(D.matrix),(_!==D||y!==D.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,_=D,y=D.version,g=r.toneMapping),m.layers.enableAll(),F.unshift(m,m.geometry,m.material,0,0,null))}function b(F,P){F.getRGB(Fc,wv(r)),i.buffers.color.setClear(Fc.r,Fc.g,Fc.b,P,c)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(F,P=1){d.set(F),p=P,b(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(F){p=F,b(d,p)},render:A,addToRenderList:U,dispose:v}}function mE(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,d=!1;function p(G,j,Q,te,q){let I=!1;const z=y(G,te,Q,j);c!==z&&(c=z,h(c.object)),I=T(G,te,Q,q),I&&A(G,te,Q,q),q!==null&&e.update(q,r.ELEMENT_ARRAY_BUFFER),(I||d)&&(d=!1,D(G,j,Q,te),q!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function m(){return r.createVertexArray()}function h(G){return r.bindVertexArray(G)}function _(G){return r.deleteVertexArray(G)}function y(G,j,Q,te){const q=te.wireframe===!0;let I=s[j.id];I===void 0&&(I={},s[j.id]=I);const z=G.isInstancedMesh===!0?G.id:0;let Y=I[z];Y===void 0&&(Y={},I[z]=Y);let ae=Y[Q.id];ae===void 0&&(ae={},Y[Q.id]=ae);let H=ae[q];return H===void 0&&(H=g(m()),ae[q]=H),H}function g(G){const j=[],Q=[],te=[];for(let q=0;q<i;q++)j[q]=0,Q[q]=0,te[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:Q,attributeDivisors:te,object:G,attributes:{},index:null}}function T(G,j,Q,te){const q=c.attributes,I=j.attributes;let z=0;const Y=Q.getAttributes();for(const ae in Y)if(Y[ae].location>=0){const S=q[ae];let k=I[ae];if(k===void 0&&(ae==="instanceMatrix"&&G.instanceMatrix&&(k=G.instanceMatrix),ae==="instanceColor"&&G.instanceColor&&(k=G.instanceColor)),S===void 0||S.attribute!==k||k&&S.data!==k.data)return!0;z++}return c.attributesNum!==z||c.index!==te}function A(G,j,Q,te){const q={},I=j.attributes;let z=0;const Y=Q.getAttributes();for(const ae in Y)if(Y[ae].location>=0){let S=I[ae];S===void 0&&(ae==="instanceMatrix"&&G.instanceMatrix&&(S=G.instanceMatrix),ae==="instanceColor"&&G.instanceColor&&(S=G.instanceColor));const k={};k.attribute=S,S&&S.data&&(k.data=S.data),q[ae]=k,z++}c.attributes=q,c.attributesNum=z,c.index=te}function U(){const G=c.newAttributes;for(let j=0,Q=G.length;j<Q;j++)G[j]=0}function b(G){v(G,0)}function v(G,j){const Q=c.newAttributes,te=c.enabledAttributes,q=c.attributeDivisors;Q[G]=1,te[G]===0&&(r.enableVertexAttribArray(G),te[G]=1),q[G]!==j&&(r.vertexAttribDivisor(G,j),q[G]=j)}function F(){const G=c.newAttributes,j=c.enabledAttributes;for(let Q=0,te=j.length;Q<te;Q++)j[Q]!==G[Q]&&(r.disableVertexAttribArray(Q),j[Q]=0)}function P(G,j,Q,te,q,I,z){z===!0?r.vertexAttribIPointer(G,j,Q,q,I):r.vertexAttribPointer(G,j,Q,te,q,I)}function D(G,j,Q,te){U();const q=te.attributes,I=Q.getAttributes(),z=j.defaultAttributeValues;for(const Y in I){const ae=I[Y];if(ae.location>=0){let H=q[Y];if(H===void 0&&(Y==="instanceMatrix"&&G.instanceMatrix&&(H=G.instanceMatrix),Y==="instanceColor"&&G.instanceColor&&(H=G.instanceColor)),H!==void 0){const S=H.normalized,k=H.itemSize,re=e.get(H);if(re===void 0)continue;const _e=re.buffer,Me=re.type,J=re.bytesPerElement,se=Me===r.INT||Me===r.UNSIGNED_INT||H.gpuType===Wh;if(H.isInterleavedBufferAttribute){const me=H.data,we=me.stride,Be=H.offset;if(me.isInstancedInterleavedBuffer){for(let De=0;De<ae.locationSize;De++)v(ae.location+De,me.meshPerAttribute);G.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let De=0;De<ae.locationSize;De++)b(ae.location+De);r.bindBuffer(r.ARRAY_BUFFER,_e);for(let De=0;De<ae.locationSize;De++)P(ae.location+De,k/ae.locationSize,Me,S,we*J,(Be+k/ae.locationSize*De)*J,se)}else{if(H.isInstancedBufferAttribute){for(let me=0;me<ae.locationSize;me++)v(ae.location+me,H.meshPerAttribute);G.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let me=0;me<ae.locationSize;me++)b(ae.location+me);r.bindBuffer(r.ARRAY_BUFFER,_e);for(let me=0;me<ae.locationSize;me++)P(ae.location+me,k/ae.locationSize,Me,S,k*J,k/ae.locationSize*me*J,se)}}else if(z!==void 0){const S=z[Y];if(S!==void 0)switch(S.length){case 2:r.vertexAttrib2fv(ae.location,S);break;case 3:r.vertexAttrib3fv(ae.location,S);break;case 4:r.vertexAttrib4fv(ae.location,S);break;default:r.vertexAttrib1fv(ae.location,S)}}}}F()}function V(){N();for(const G in s){const j=s[G];for(const Q in j){const te=j[Q];for(const q in te){const I=te[q];for(const z in I)_(I[z].object),delete I[z];delete te[q]}}delete s[G]}}function O(G){if(s[G.id]===void 0)return;const j=s[G.id];for(const Q in j){const te=j[Q];for(const q in te){const I=te[q];for(const z in I)_(I[z].object),delete I[z];delete te[q]}}delete s[G.id]}function L(G){for(const j in s){const Q=s[j];for(const te in Q){const q=Q[te];if(q[G.id]===void 0)continue;const I=q[G.id];for(const z in I)_(I[z].object),delete I[z];delete q[G.id]}}}function E(G){for(const j in s){const Q=s[j],te=G.isInstancedMesh===!0?G.id:0,q=Q[te];if(q!==void 0){for(const I in q){const z=q[I];for(const Y in z)_(z[Y].object),delete z[Y];delete q[I]}delete Q[te],Object.keys(Q).length===0&&delete s[j]}}}function N(){X(),d=!0,c!==l&&(c=l,h(c.object))}function X(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:N,resetDefaultState:X,dispose:V,releaseStatesOfGeometry:O,releaseStatesOfObject:E,releaseStatesOfProgram:L,initAttributes:U,enableAttribute:b,disableUnusedAttributes:F}}function gE(r,e,i){let s;function l(m){s=m}function c(m,h){r.drawArrays(s,m,h),i.update(h,s,1)}function d(m,h,_){_!==0&&(r.drawArraysInstanced(s,m,h,_),i.update(h,s,_))}function p(m,h,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,h,0,_);let g=0;for(let T=0;T<_;T++)g+=h[T];i.update(g,s,1)}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=p}function xE(r,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(L){return!(L!==Ii&&s.convert(L)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(L){const E=L===Ra&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==mi&&s.convert(L)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Yi&&!E)}function m(L){if(L==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const _=m(h);_!==h&&(ut("WebGLRenderer:",h,"not supported, using",_,"instead."),h=_);const y=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&ut("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const T=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),A=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),U=r.getParameter(r.MAX_TEXTURE_SIZE),b=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),F=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),P=r.getParameter(r.MAX_VARYING_VECTORS),D=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),V=r.getParameter(r.MAX_SAMPLES),O=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:p,precision:h,logarithmicDepthBuffer:y,reversedDepthBuffer:g,maxTextures:T,maxVertexTextures:A,maxTextureSize:U,maxCubemapSize:b,maxAttributes:v,maxVertexUniforms:F,maxVaryings:P,maxFragmentUniforms:D,maxSamples:V,samples:O}}function vE(r){const e=this;let i=null,s=0,l=!1,c=!1;const d=new Hs,p=new gt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(y,g){const T=y.length!==0||g||s!==0||l;return l=g,s=y.length,T},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(y,g){i=_(y,g,0)},this.setState=function(y,g,T){const A=y.clippingPlanes,U=y.clipIntersection,b=y.clipShadows,v=r.get(y);if(!l||A===null||A.length===0||c&&!b)c?_(null):h();else{const F=c?0:s,P=F*4;let D=v.clippingState||null;m.value=D,D=_(A,g,P,T);for(let V=0;V!==P;++V)D[V]=i[V];v.clippingState=D,this.numIntersection=U?this.numPlanes:0,this.numPlanes+=F}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function _(y,g,T,A){const U=y!==null?y.length:0;let b=null;if(U!==0){if(b=m.value,A!==!0||b===null){const v=T+U*4,F=g.matrixWorldInverse;p.getNormalMatrix(F),(b===null||b.length<v)&&(b=new Float32Array(v));for(let P=0,D=T;P!==U;++P,D+=4)d.copy(y[P]).applyMatrix4(F,p),d.normal.toArray(b,D),b[D+3]=d.constant}m.value=b,m.needsUpdate=!0}return e.numPlanes=U,e.numIntersection=0,b}}const ds=4,Nx=[.125,.215,.35,.446,.526,.582],ks=20,_E=256,Jo=new ip,Dx=new ht;let kd=null,Xd=0,jd=0,Wd=!1;const yE=new fe;class Ux{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,c={}){const{size:d=256,position:p=yE}=c;kd=this._renderer.getRenderTarget(),Xd=this._renderer.getActiveCubeFace(),jd=this._renderer.getActiveMipmapLevel(),Wd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Px(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ox(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(kd,Xd,jd),this._renderer.xr.enabled=Wd,e.scissorTest=!1,Hr(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Ws||e.mapping===qr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),kd=this._renderer.getRenderTarget(),Xd=this._renderer.getActiveCubeFace(),jd=this._renderer.getActiveMipmapLevel(),Wd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:Ra,format:Ii,colorSpace:Zc,depthBuffer:!1},l=Lx(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lx(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=SE(c)),this._blurMaterial=ME(c,e,i),this._ggxMaterial=bE(c,e,i)}return l}_compileMaterial(e){const i=new dt(new zi,e);this._renderer.compile(i,Jo)}_sceneToCubeUV(e,i,s,l,c){const m=new pi(90,1,i,s),h=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],y=this._renderer,g=y.autoClear,T=y.toneMapping;y.getClearColor(Dx),y.toneMapping=Ki,y.autoClear=!1,y.state.buffers.depth.getReversed()&&(y.setRenderTarget(l),y.clearDepth(),y.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new dt(new pn,new Jc({name:"PMREM.Background",side:ei,depthWrite:!1,depthTest:!1})));const U=this._backgroundBox,b=U.material;let v=!1;const F=e.background;F?F.isColor&&(b.color.copy(F),e.background=null,v=!0):(b.color.copy(Dx),v=!0);for(let P=0;P<6;P++){const D=P%3;D===0?(m.up.set(0,h[P],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[P],c.y,c.z)):D===1?(m.up.set(0,0,h[P]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[P],c.z)):(m.up.set(0,h[P],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[P]));const V=this._cubeSize;Hr(l,D*V,P>2?V:0,V,V),y.setRenderTarget(l),v&&y.render(U,m),y.render(e,m)}y.toneMapping=T,y.autoClear=g,e.background=F}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Ws||e.mapping===qr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Px()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ox());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const p=c.uniforms;p.envMap.value=e;const m=this._cubeSize;Hr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(d,Jo)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,p=this._lodMeshes[s];p.material=d;const m=d.uniforms,h=s/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),y=Math.sqrt(h*h-_*_),g=0+h*1.25,T=y*g,{_lodMax:A}=this,U=this._sizeLods[s],b=3*U*(s>A-ds?s-A+ds:0),v=4*(this._cubeSize-U);m.envMap.value=e.texture,m.roughness.value=T,m.mipInt.value=A-i,Hr(c,b,v,3*U,2*U),l.setRenderTarget(c),l.render(p,Jo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=A-s,Hr(e,b,v,3*U,2*U),l.setRenderTarget(e),l.render(p,Jo)}_blur(e,i,s,l,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,s,l,"latitudinal",c),this._halfBlur(d,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,d,p){const m=this._renderer,h=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Lt("blur direction must be either latitudinal or longitudinal!");const _=3,y=this._lodMeshes[l];y.material=h;const g=h.uniforms,T=this._sizeLods[s]-1,A=isFinite(c)?Math.PI/(2*T):2*Math.PI/(2*ks-1),U=c/A,b=isFinite(c)?1+Math.floor(_*U):ks;b>ks&&ut(`sigmaRadians, ${c}, is too large and will clip, as it requested ${b} samples when the maximum is set to ${ks}`);const v=[];let F=0;for(let L=0;L<ks;++L){const E=L/U,N=Math.exp(-E*E/2);v.push(N),L===0?F+=N:L<b&&(F+=2*N)}for(let L=0;L<v.length;L++)v[L]=v[L]/F;g.envMap.value=e.texture,g.samples.value=b,g.weights.value=v,g.latitudinal.value=d==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:P}=this;g.dTheta.value=A,g.mipInt.value=P-s;const D=this._sizeLods[l],V=3*D*(l>P-ds?l-P+ds:0),O=4*(this._cubeSize-D);Hr(i,V,O,3*D,2*D),m.setRenderTarget(i),m.render(y,Jo)}}function SE(r){const e=[],i=[],s=[];let l=r;const c=r-ds+1+Nx.length;for(let d=0;d<c;d++){const p=Math.pow(2,l);e.push(p);let m=1/p;d>r-ds?m=Nx[d-r+ds-1]:d===0&&(m=0),i.push(m);const h=1/(p-2),_=-h,y=1+h,g=[_,_,y,_,y,y,_,_,y,y,_,y],T=6,A=6,U=3,b=2,v=1,F=new Float32Array(U*A*T),P=new Float32Array(b*A*T),D=new Float32Array(v*A*T);for(let O=0;O<T;O++){const L=O%3*2/3-1,E=O>2?0:-1,N=[L,E,0,L+2/3,E,0,L+2/3,E+1,0,L,E,0,L+2/3,E+1,0,L,E+1,0];F.set(N,U*A*O),P.set(g,b*A*O);const X=[O,O,O,O,O,O];D.set(X,v*A*O)}const V=new zi;V.setAttribute("position",new Ji(F,U)),V.setAttribute("uv",new Ji(P,b)),V.setAttribute("faceIndex",new Ji(D,v)),s.push(new dt(V,null)),l>ds&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function Lx(r,e,i){const s=new Qi(r,e,i);return s.texture.mapping=eu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Hr(r,e,i,s,l){r.viewport.set(e,i,s,l),r.scissor.set(e,i,s,l)}function bE(r,e,i){return new ea({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:_E,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:iu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:wa,depthTest:!1,depthWrite:!1})}function ME(r,e,i){const s=new Float32Array(ks),l=new fe(0,1,0);return new ea({name:"SphericalGaussianBlur",defines:{n:ks,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:iu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wa,depthTest:!1,depthWrite:!1})}function Ox(){return new ea({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:iu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wa,depthTest:!1,depthWrite:!1})}function Px(){return new ea({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:iu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wa,depthTest:!1,depthWrite:!1})}function iu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Uv extends Qi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new Tv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new pn(5,5,5),c=new ea({name:"CubemapFromEquirect",uniforms:Zr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:ei,blending:wa});c.uniforms.tEquirect.value=i;const d=new dt(l,c),p=i.minFilter;return i.minFilter===Xs&&(i.minFilter=Gn),new Cb(1,10,this).update(e,d),i.minFilter=p,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,s,l);e.setRenderTarget(c)}}function EE(r){let e=new WeakMap,i=new WeakMap,s=null;function l(g,T=!1){return g==null?null:T?d(g):c(g)}function c(g){if(g&&g.isTexture){const T=g.mapping;if(T===md||T===gd)if(e.has(g)){const A=e.get(g).texture;return p(A,g.mapping)}else{const A=g.image;if(A&&A.height>0){const U=new Uv(A.height);return U.fromEquirectangularTexture(r,g),e.set(g,U),g.addEventListener("dispose",h),p(U.texture,g.mapping)}else return null}}return g}function d(g){if(g&&g.isTexture){const T=g.mapping,A=T===md||T===gd,U=T===Ws||T===qr;if(A||U){let b=i.get(g);const v=b!==void 0?b.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==v)return s===null&&(s=new Ux(r)),b=A?s.fromEquirectangular(g,b):s.fromCubemap(g,b),b.texture.pmremVersion=g.pmremVersion,i.set(g,b),b.texture;if(b!==void 0)return b.texture;{const F=g.image;return A&&F&&F.height>0||U&&F&&m(F)?(s===null&&(s=new Ux(r)),b=A?s.fromEquirectangular(g):s.fromCubemap(g),b.texture.pmremVersion=g.pmremVersion,i.set(g,b),g.addEventListener("dispose",_),b.texture):null}}}return g}function p(g,T){return T===md?g.mapping=Ws:T===gd&&(g.mapping=qr),g}function m(g){let T=0;const A=6;for(let U=0;U<A;U++)g[U]!==void 0&&T++;return T===A}function h(g){const T=g.target;T.removeEventListener("dispose",h);const A=e.get(T);A!==void 0&&(e.delete(T),A.dispose())}function _(g){const T=g.target;T.removeEventListener("dispose",_);const A=i.get(T);A!==void 0&&(i.delete(T),A.dispose())}function y(){e=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:y}}function TE(r){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=r.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Xr("WebGLRenderer: "+s+" extension not supported."),l}}}function AE(r,e,i,s){const l={},c=new WeakMap;function d(y){const g=y.target;g.index!==null&&e.remove(g.index);for(const A in g.attributes)e.remove(g.attributes[A]);g.removeEventListener("dispose",d),delete l[g.id];const T=c.get(g);T&&(e.remove(T),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function p(y,g){return l[g.id]===!0||(g.addEventListener("dispose",d),l[g.id]=!0,i.memory.geometries++),g}function m(y){const g=y.attributes;for(const T in g)e.update(g[T],r.ARRAY_BUFFER)}function h(y){const g=[],T=y.index,A=y.attributes.position;let U=0;if(A===void 0)return;if(T!==null){const F=T.array;U=T.version;for(let P=0,D=F.length;P<D;P+=3){const V=F[P+0],O=F[P+1],L=F[P+2];g.push(V,O,O,L,L,V)}}else{const F=A.array;U=A.version;for(let P=0,D=F.length/3-1;P<D;P+=3){const V=P+0,O=P+1,L=P+2;g.push(V,O,O,L,L,V)}}const b=new(A.count>=65535?Ev:Mv)(g,1);b.version=U;const v=c.get(y);v&&e.remove(v),c.set(y,b)}function _(y){const g=c.get(y);if(g){const T=y.index;T!==null&&g.version<T.version&&h(y)}else h(y);return c.get(y)}return{get:p,update:m,getWireframeAttribute:_}}function wE(r,e,i){let s;function l(y){s=y}let c,d;function p(y){c=y.type,d=y.bytesPerElement}function m(y,g){r.drawElements(s,g,c,y*d),i.update(g,s,1)}function h(y,g,T){T!==0&&(r.drawElementsInstanced(s,g,c,y*d,T),i.update(g,s,T))}function _(y,g,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,g,0,c,y,0,T);let U=0;for(let b=0;b<T;b++)U+=g[b];i.update(U,s,1)}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=h,this.renderMultiDraw=_}function CE(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,d,p){switch(i.calls++,d){case r.TRIANGLES:i.triangles+=p*(c/3);break;case r.LINES:i.lines+=p*(c/2);break;case r.LINE_STRIP:i.lines+=p*(c-1);break;case r.LINE_LOOP:i.lines+=p*c;break;case r.POINTS:i.points+=p*c;break;default:Lt("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function RE(r,e,i){const s=new WeakMap,l=new ln;function c(d,p,m){const h=d.morphTargetInfluences,_=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,y=_!==void 0?_.length:0;let g=s.get(p);if(g===void 0||g.count!==y){let X=function(){E.dispose(),s.delete(p),p.removeEventListener("dispose",X)};var T=X;g!==void 0&&g.texture.dispose();const A=p.morphAttributes.position!==void 0,U=p.morphAttributes.normal!==void 0,b=p.morphAttributes.color!==void 0,v=p.morphAttributes.position||[],F=p.morphAttributes.normal||[],P=p.morphAttributes.color||[];let D=0;A===!0&&(D=1),U===!0&&(D=2),b===!0&&(D=3);let V=p.attributes.position.count*D,O=1;V>e.maxTextureSize&&(O=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const L=new Float32Array(V*O*4*y),E=new yv(L,V,O,y);E.type=Yi,E.needsUpdate=!0;const N=D*4;for(let G=0;G<y;G++){const j=v[G],Q=F[G],te=P[G],q=V*O*4*G;for(let I=0;I<j.count;I++){const z=I*N;A===!0&&(l.fromBufferAttribute(j,I),L[q+z+0]=l.x,L[q+z+1]=l.y,L[q+z+2]=l.z,L[q+z+3]=0),U===!0&&(l.fromBufferAttribute(Q,I),L[q+z+4]=l.x,L[q+z+5]=l.y,L[q+z+6]=l.z,L[q+z+7]=0),b===!0&&(l.fromBufferAttribute(te,I),L[q+z+8]=l.x,L[q+z+9]=l.y,L[q+z+10]=l.z,L[q+z+11]=te.itemSize===4?l.w:1)}}g={count:y,texture:E,size:new wt(V,O)},s.set(p,g),p.addEventListener("dispose",X)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",d.morphTexture,i);else{let A=0;for(let b=0;b<h.length;b++)A+=h[b];const U=p.morphTargetsRelative?1:1-A;m.getUniforms().setValue(r,"morphTargetBaseInfluence",U),m.getUniforms().setValue(r,"morphTargetInfluences",h)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function NE(r,e,i,s,l){let c=new WeakMap;function d(h){const _=l.render.frame,y=h.geometry,g=e.get(h,y);if(c.get(g)!==_&&(e.update(g),c.set(g,_)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),c.get(h)!==_&&(i.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,r.ARRAY_BUFFER),c.set(h,_))),h.isSkinnedMesh){const T=h.skeleton;c.get(T)!==_&&(T.update(),c.set(T,_))}return g}function p(){c=new WeakMap}function m(h){const _=h.target;_.removeEventListener("dispose",m),s.releaseStatesOfObject(_),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:d,dispose:p}}const DE={[av]:"LINEAR_TONE_MAPPING",[sv]:"REINHARD_TONE_MAPPING",[rv]:"CINEON_TONE_MAPPING",[ov]:"ACES_FILMIC_TONE_MAPPING",[cv]:"AGX_TONE_MAPPING",[uv]:"NEUTRAL_TONE_MAPPING",[lv]:"CUSTOM_TONE_MAPPING"};function UE(r,e,i,s,l,c){const d=new Qi(e,i,{type:r,depthBuffer:l,stencilBuffer:c,samples:s?4:0,depthTexture:l?new Yr(e,i):void 0}),p=new Qi(e,i,{type:Ra,depthBuffer:!1,stencilBuffer:!1}),m=new zi;m.setAttribute("position",new jn([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new jn([0,2,0,0,2,0],2));const h=new vb({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),_=new dt(m,h),y=new ip(-1,1,1,-1,0,1);let g=null,T=null,A=!1,U,b=null,v=[],F=!1;this.setSize=function(P,D){d.setSize(P,D),p.setSize(P,D);for(let V=0;V<v.length;V++){const O=v[V];O.setSize&&O.setSize(P,D)}},this.setEffects=function(P){v=P,F=v.length>0&&v[0].isRenderPass===!0;const D=d.width,V=d.height;for(let O=0;O<v.length;O++){const L=v[O];L.setSize&&L.setSize(D,V)}},this.begin=function(P,D){if(A||P.toneMapping===Ki&&v.length===0)return!1;if(b=D,D!==null){const V=D.width,O=D.height;(d.width!==V||d.height!==O)&&this.setSize(V,O)}return F===!1&&P.setRenderTarget(d),U=P.toneMapping,P.toneMapping=Ki,!0},this.hasRenderPass=function(){return F},this.end=function(P,D){P.toneMapping=U,A=!0;let V=d,O=p;for(let L=0;L<v.length;L++){const E=v[L];if(E.enabled!==!1&&(E.render(P,O,V,D),E.needsSwap!==!1)){const N=V;V=O,O=N}}if(g!==P.outputColorSpace||T!==P.toneMapping){g=P.outputColorSpace,T=P.toneMapping,h.defines={},Nt.getTransfer(g)===qt&&(h.defines.SRGB_TRANSFER="");const L=DE[T];L&&(h.defines[L]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=V.texture,P.setRenderTarget(b),P.render(_,y),b=null,A=!1},this.isCompositing=function(){return A},this.dispose=function(){d.depthTexture&&d.depthTexture.dispose(),d.dispose(),p.dispose(),m.dispose(),h.dispose()}}const Lv=new Xn,Bh=new Yr(1,1),Ov=new yv,Pv=new YS,Iv=new Tv,Ix=[],zx=[],Fx=new Float32Array(16),Bx=new Float32Array(9),Hx=new Float32Array(4);function $r(r,e,i){const s=r[0];if(s<=0||s>0)return r;const l=e*i;let c=Ix[l];if(c===void 0&&(c=new Float32Array(l),Ix[l]=c),e!==0){s.toArray(c,0);for(let d=1,p=0;d!==e;++d)p+=i,r[d].toArray(c,p)}return c}function En(r,e){if(r.length!==e.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==e[i])return!1;return!0}function Tn(r,e){for(let i=0,s=e.length;i<s;i++)r[i]=e[i]}function au(r,e){let i=zx[e];i===void 0&&(i=new Int32Array(e),zx[e]=i);for(let s=0;s!==e;++s)i[s]=r.allocateTextureUnit();return i}function LE(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function OE(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(En(i,e))return;r.uniform2fv(this.addr,e),Tn(i,e)}}function PE(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(En(i,e))return;r.uniform3fv(this.addr,e),Tn(i,e)}}function IE(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(En(i,e))return;r.uniform4fv(this.addr,e),Tn(i,e)}}function zE(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(En(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),Tn(i,e)}else{if(En(i,s))return;Hx.set(s),r.uniformMatrix2fv(this.addr,!1,Hx),Tn(i,s)}}function FE(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(En(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),Tn(i,e)}else{if(En(i,s))return;Bx.set(s),r.uniformMatrix3fv(this.addr,!1,Bx),Tn(i,s)}}function BE(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(En(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),Tn(i,e)}else{if(En(i,s))return;Fx.set(s),r.uniformMatrix4fv(this.addr,!1,Fx),Tn(i,s)}}function HE(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function GE(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(En(i,e))return;r.uniform2iv(this.addr,e),Tn(i,e)}}function VE(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(En(i,e))return;r.uniform3iv(this.addr,e),Tn(i,e)}}function kE(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(En(i,e))return;r.uniform4iv(this.addr,e),Tn(i,e)}}function XE(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function jE(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(En(i,e))return;r.uniform2uiv(this.addr,e),Tn(i,e)}}function WE(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(En(i,e))return;r.uniform3uiv(this.addr,e),Tn(i,e)}}function qE(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(En(i,e))return;r.uniform4uiv(this.addr,e),Tn(i,e)}}function YE(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(Bh.compareFunction=i.isReversedDepthBuffer()?$h:Jh,c=Bh):c=Lv,i.setTexture2D(e||c,l)}function ZE(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||Pv,l)}function KE(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||Iv,l)}function QE(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||Ov,l)}function JE(r){switch(r){case 5126:return LE;case 35664:return OE;case 35665:return PE;case 35666:return IE;case 35674:return zE;case 35675:return FE;case 35676:return BE;case 5124:case 35670:return HE;case 35667:case 35671:return GE;case 35668:case 35672:return VE;case 35669:case 35673:return kE;case 5125:return XE;case 36294:return jE;case 36295:return WE;case 36296:return qE;case 35678:case 36198:case 36298:case 36306:case 35682:return YE;case 35679:case 36299:case 36307:return ZE;case 35680:case 36300:case 36308:case 36293:return KE;case 36289:case 36303:case 36311:case 36292:return QE}}function $E(r,e){r.uniform1fv(this.addr,e)}function eT(r,e){const i=$r(e,this.size,2);r.uniform2fv(this.addr,i)}function tT(r,e){const i=$r(e,this.size,3);r.uniform3fv(this.addr,i)}function nT(r,e){const i=$r(e,this.size,4);r.uniform4fv(this.addr,i)}function iT(r,e){const i=$r(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function aT(r,e){const i=$r(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function sT(r,e){const i=$r(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function rT(r,e){r.uniform1iv(this.addr,e)}function oT(r,e){r.uniform2iv(this.addr,e)}function lT(r,e){r.uniform3iv(this.addr,e)}function cT(r,e){r.uniform4iv(this.addr,e)}function uT(r,e){r.uniform1uiv(this.addr,e)}function fT(r,e){r.uniform2uiv(this.addr,e)}function dT(r,e){r.uniform3uiv(this.addr,e)}function hT(r,e){r.uniform4uiv(this.addr,e)}function pT(r,e,i){const s=this.cache,l=e.length,c=au(i,l);En(s,c)||(r.uniform1iv(this.addr,c),Tn(s,c));let d;this.type===r.SAMPLER_2D_SHADOW?d=Bh:d=Lv;for(let p=0;p!==l;++p)i.setTexture2D(e[p]||d,c[p])}function mT(r,e,i){const s=this.cache,l=e.length,c=au(i,l);En(s,c)||(r.uniform1iv(this.addr,c),Tn(s,c));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||Pv,c[d])}function gT(r,e,i){const s=this.cache,l=e.length,c=au(i,l);En(s,c)||(r.uniform1iv(this.addr,c),Tn(s,c));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||Iv,c[d])}function xT(r,e,i){const s=this.cache,l=e.length,c=au(i,l);En(s,c)||(r.uniform1iv(this.addr,c),Tn(s,c));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||Ov,c[d])}function vT(r){switch(r){case 5126:return $E;case 35664:return eT;case 35665:return tT;case 35666:return nT;case 35674:return iT;case 35675:return aT;case 35676:return sT;case 5124:case 35670:return rT;case 35667:case 35671:return oT;case 35668:case 35672:return lT;case 35669:case 35673:return cT;case 5125:return uT;case 36294:return fT;case 36295:return dT;case 36296:return hT;case 35678:case 36198:case 36298:case 36306:case 35682:return pT;case 35679:case 36299:case 36307:return mT;case 35680:case 36300:case 36308:case 36293:return gT;case 36289:case 36303:case 36311:case 36292:return xT}}class _T{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=JE(i.type)}}class yT{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=vT(i.type)}}class ST{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const p=l[c];p.setValue(e,i[p.id],s)}}}const qd=/(\w+)(\])?(\[|\.)?/g;function Gx(r,e){r.seq.push(e),r.map[e.id]=e}function bT(r,e,i){const s=r.name,l=s.length;for(qd.lastIndex=0;;){const c=qd.exec(s),d=qd.lastIndex;let p=c[1];const m=c[2]==="]",h=c[3];if(m&&(p=p|0),h===void 0||h==="["&&d+2===l){Gx(i,h===void 0?new _T(p,r,e):new yT(p,r,e));break}else{let y=i.map[p];y===void 0&&(y=new ST(p),Gx(i,y)),i=y}}}class jc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const p=e.getActiveUniform(i,d),m=e.getUniformLocation(i,p.name);bT(p,m,this)}const l=[],c=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(d):c.push(d);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,d=i.length;c!==d;++c){const p=i[c],m=s[p.id];m.needsUpdate!==!1&&p.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const d=e[l];d.id in i&&s.push(d)}return s}}function Vx(r,e,i){const s=r.createShader(e);return r.shaderSource(s,i),r.compileShader(s),s}const MT=37297;let ET=0;function TT(r,e){const i=r.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let d=l;d<c;d++){const p=d+1;s.push(`${p===e?">":" "} ${p}: ${i[d]}`)}return s.join(`
`)}const kx=new gt;function AT(r){Nt._getMatrix(kx,Nt.workingColorSpace,r);const e=`mat3( ${kx.elements.map(i=>i.toFixed(4))} )`;switch(Nt.getTransfer(r)){case Kc:return[e,"LinearTransferOETF"];case qt:return[e,"sRGBTransferOETF"];default:return ut("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Xx(r,e,i){const s=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const p=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+TT(r.getShaderSource(e),p)}else return c}function wT(r,e){const i=AT(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const CT={[av]:"Linear",[sv]:"Reinhard",[rv]:"Cineon",[ov]:"ACESFilmic",[cv]:"AgX",[uv]:"Neutral",[lv]:"Custom"};function RT(r,e){const i=CT[e];return i===void 0?(ut("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Bc=new fe;function NT(){Nt.getLuminanceCoefficients(Bc);const r=Bc.x.toFixed(4),e=Bc.y.toFixed(4),i=Bc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function DT(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(tl).join(`
`)}function UT(r){const e=[];for(const i in r){const s=r[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function LT(r,e){const i={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(e,l),d=c.name;let p=1;c.type===r.FLOAT_MAT2&&(p=2),c.type===r.FLOAT_MAT3&&(p=3),c.type===r.FLOAT_MAT4&&(p=4),i[d]={type:c.type,location:r.getAttribLocation(e,d),locationSize:p}}return i}function tl(r){return r!==""}function jx(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wx(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const OT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hh(r){return r.replace(OT,IT)}const PT=new Map;function IT(r,e){let i=St[e];if(i===void 0){const s=PT.get(e);if(s!==void 0)i=St[s],ut('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Hh(i)}const zT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qx(r){return r.replace(zT,FT)}function FT(r,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Yx(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const BT={[Hc]:"SHADOWMAP_TYPE_PCF",[el]:"SHADOWMAP_TYPE_VSM"};function HT(r){return BT[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const GT={[Ws]:"ENVMAP_TYPE_CUBE",[qr]:"ENVMAP_TYPE_CUBE",[eu]:"ENVMAP_TYPE_CUBE_UV"};function VT(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":GT[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const kT={[qr]:"ENVMAP_MODE_REFRACTION"};function XT(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":kT[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const jT={[jh]:"ENVMAP_BLENDING_MULTIPLY",[wS]:"ENVMAP_BLENDING_MIX",[CS]:"ENVMAP_BLENDING_ADD"};function WT(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":jT[r.combine]||"ENVMAP_BLENDING_NONE"}function qT(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function YT(r,e,i,s){const l=r.getContext(),c=i.defines;let d=i.vertexShader,p=i.fragmentShader;const m=HT(i),h=VT(i),_=XT(i),y=WT(i),g=qT(i),T=DT(i),A=UT(c),U=l.createProgram();let b,v,F=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(b=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(tl).join(`
`),b.length>0&&(b+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(tl).join(`
`),v.length>0&&(v+=`
`)):(b=[Yx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(tl).join(`
`),v=[Yx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+_:"",i.envMap?"#define "+y:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ki?"#define TONE_MAPPING":"",i.toneMapping!==Ki?St.tonemapping_pars_fragment:"",i.toneMapping!==Ki?RT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",St.colorspace_pars_fragment,wT("linearToOutputTexel",i.outputColorSpace),NT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(tl).join(`
`)),d=Hh(d),d=jx(d,i),d=Wx(d,i),p=Hh(p),p=jx(p,i),p=Wx(p,i),d=qx(d),p=qx(p),i.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,b=[T,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,v=["#define varying in",i.glslVersion===rx?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===rx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const P=F+b+d,D=F+v+p,V=Vx(l,l.VERTEX_SHADER,P),O=Vx(l,l.FRAGMENT_SHADER,D);l.attachShader(U,V),l.attachShader(U,O),i.index0AttributeName!==void 0?l.bindAttribLocation(U,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(U,0,"position"),l.linkProgram(U);function L(G){if(r.debug.checkShaderErrors){const j=l.getProgramInfoLog(U)||"",Q=l.getShaderInfoLog(V)||"",te=l.getShaderInfoLog(O)||"",q=j.trim(),I=Q.trim(),z=te.trim();let Y=!0,ae=!0;if(l.getProgramParameter(U,l.LINK_STATUS)===!1)if(Y=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,U,V,O);else{const H=Xx(l,V,"vertex"),S=Xx(l,O,"fragment");Lt("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(U,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+q+`
`+H+`
`+S)}else q!==""?ut("WebGLProgram: Program Info Log:",q):(I===""||z==="")&&(ae=!1);ae&&(G.diagnostics={runnable:Y,programLog:q,vertexShader:{log:I,prefix:b},fragmentShader:{log:z,prefix:v}})}l.deleteShader(V),l.deleteShader(O),E=new jc(l,U),N=LT(l,U)}let E;this.getUniforms=function(){return E===void 0&&L(this),E};let N;this.getAttributes=function(){return N===void 0&&L(this),N};let X=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return X===!1&&(X=l.getProgramParameter(U,MT)),X},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(U),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=ET++,this.cacheKey=e,this.usedTimes=1,this.program=U,this.vertexShader=V,this.fragmentShader=O,this}let ZT=0;class KT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,s){const l=this._getShaderCacheForMaterial(e);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(s)===!1&&(l.add(s),s.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new QT(e),i.set(e,s)),s}}class QT{constructor(e){this.id=ZT++,this.code=e,this.usedTimes=0}}function JT(r){return r===qs||r===Wc||r===qc}function $T(r,e,i,s,l,c){const d=new Sv,p=new KT,m=new Set,h=[],_=new Map,y=s.logarithmicDepthBuffer;let g=s.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(E){return m.add(E),E===0?"uv":`uv${E}`}function U(E,N,X,G,j,Q){const te=G.fog,q=j.geometry,I=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?G.environment:null,z=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,Y=e.get(E.envMap||I,z),ae=Y&&Y.mapping===eu?Y.image.height:null,H=T[E.type];E.precision!==null&&(g=s.getMaxPrecision(E.precision),g!==E.precision&&ut("WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));const S=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,k=S!==void 0?S.length:0;let re=0;q.morphAttributes.position!==void 0&&(re=1),q.morphAttributes.normal!==void 0&&(re=2),q.morphAttributes.color!==void 0&&(re=3);let _e,Me,J,se;if(H){const je=qi[H];_e=je.vertexShader,Me=je.fragmentShader}else{_e=E.vertexShader,Me=E.fragmentShader;const je=p.getVertexShaderStage(E),nn=p.getFragmentShaderStage(E);p.update(E,je,nn),J=je.id,se=nn.id}const me=r.getRenderTarget(),we=r.state.buffers.depth.getReversed(),Be=j.isInstancedMesh===!0,De=j.isBatchedMesh===!0,nt=!!E.map,$e=!!E.matcap,Ge=!!Y,rt=!!E.aoMap,ot=!!E.lightMap,qe=!!E.bumpMap&&E.wireframe===!1,pt=!!E.normalMap,lt=!!E.displacementMap,yt=!!E.emissiveMap,Ot=!!E.metalnessMap,tn=!!E.roughnessMap,$=E.anisotropy>0,Ft=E.clearcoat>0,Ut=E.dispersion>0,B=E.iridescence>0,M=E.sheen>0,ie=E.transmission>0,de=$&&!!E.anisotropyMap,xe=Ft&&!!E.clearcoatMap,Ce=Ft&&!!E.clearcoatNormalMap,Le=Ft&&!!E.clearcoatRoughnessMap,ve=B&&!!E.iridescenceMap,ye=B&&!!E.iridescenceThicknessMap,Ne=M&&!!E.sheenColorMap,Ve=M&&!!E.sheenRoughnessMap,Ie=!!E.specularMap,Oe=!!E.specularColorMap,tt=!!E.specularIntensityMap,it=ie&&!!E.transmissionMap,ft=ie&&!!E.thicknessMap,K=!!E.gradientMap,Re=!!E.alphaMap,be=E.alphaTest>0,Ue=!!E.alphaHash,He=!!E.extensions;let Ae=Ki;E.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(Ae=r.toneMapping);const Qe={shaderID:H,shaderType:E.type,shaderName:E.name,vertexShader:_e,fragmentShader:Me,defines:E.defines,customVertexShaderID:J,customFragmentShaderID:se,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,batching:De,batchingColor:De&&j._colorsTexture!==null,instancing:Be,instancingColor:Be&&j.instanceColor!==null,instancingMorph:Be&&j.morphTexture!==null,outputColorSpace:me===null?r.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:Nt.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:nt,matcap:$e,envMap:Ge,envMapMode:Ge&&Y.mapping,envMapCubeUVHeight:ae,aoMap:rt,lightMap:ot,bumpMap:qe,normalMap:pt,displacementMap:lt,emissiveMap:yt,normalMapObjectSpace:pt&&E.normalMapType===DS,normalMapTangentSpace:pt&&E.normalMapType===Yc,packedNormalMap:pt&&E.normalMapType===Yc&&JT(E.normalMap.format),metalnessMap:Ot,roughnessMap:tn,anisotropy:$,anisotropyMap:de,clearcoat:Ft,clearcoatMap:xe,clearcoatNormalMap:Ce,clearcoatRoughnessMap:Le,dispersion:Ut,iridescence:B,iridescenceMap:ve,iridescenceThicknessMap:ye,sheen:M,sheenColorMap:Ne,sheenRoughnessMap:Ve,specularMap:Ie,specularColorMap:Oe,specularIntensityMap:tt,transmission:ie,transmissionMap:it,thicknessMap:ft,gradientMap:K,opaque:E.transparent===!1&&E.blending===kr&&E.alphaToCoverage===!1,alphaMap:Re,alphaTest:be,alphaHash:Ue,combine:E.combine,mapUv:nt&&A(E.map.channel),aoMapUv:rt&&A(E.aoMap.channel),lightMapUv:ot&&A(E.lightMap.channel),bumpMapUv:qe&&A(E.bumpMap.channel),normalMapUv:pt&&A(E.normalMap.channel),displacementMapUv:lt&&A(E.displacementMap.channel),emissiveMapUv:yt&&A(E.emissiveMap.channel),metalnessMapUv:Ot&&A(E.metalnessMap.channel),roughnessMapUv:tn&&A(E.roughnessMap.channel),anisotropyMapUv:de&&A(E.anisotropyMap.channel),clearcoatMapUv:xe&&A(E.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&A(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&A(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&A(E.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&A(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&A(E.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&A(E.sheenRoughnessMap.channel),specularMapUv:Ie&&A(E.specularMap.channel),specularColorMapUv:Oe&&A(E.specularColorMap.channel),specularIntensityMapUv:tt&&A(E.specularIntensityMap.channel),transmissionMapUv:it&&A(E.transmissionMap.channel),thicknessMapUv:ft&&A(E.thicknessMap.channel),alphaMapUv:Re&&A(E.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(pt||$),vertexNormals:!!q.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!q.attributes.uv&&(nt||Re),fog:!!te,useFog:E.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||q.attributes.normal===void 0&&pt===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:y,reversedDepthBuffer:we,skinning:j.isSkinnedMesh===!0,hasPositionAttribute:q.attributes.position!==void 0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:re,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:Q.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:E.dithering,shadowMapEnabled:r.shadowMap.enabled&&X.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ae,decodeVideoTexture:nt&&E.map.isVideoTexture===!0&&Nt.getTransfer(E.map.colorSpace)===qt,decodeVideoTextureEmissive:yt&&E.emissiveMap.isVideoTexture===!0&&Nt.getTransfer(E.emissiveMap.colorSpace)===qt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ta,flipSided:E.side===ei,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:He&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&E.extensions.multiDraw===!0||De)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Qe.vertexUv1s=m.has(1),Qe.vertexUv2s=m.has(2),Qe.vertexUv3s=m.has(3),m.clear(),Qe}function b(E){const N=[];if(E.shaderID?N.push(E.shaderID):(N.push(E.customVertexShaderID),N.push(E.customFragmentShaderID)),E.defines!==void 0)for(const X in E.defines)N.push(X),N.push(E.defines[X]);return E.isRawShaderMaterial===!1&&(v(N,E),F(N,E),N.push(r.outputColorSpace)),N.push(E.customProgramCacheKey),N.join()}function v(E,N){E.push(N.precision),E.push(N.outputColorSpace),E.push(N.envMapMode),E.push(N.envMapCubeUVHeight),E.push(N.mapUv),E.push(N.alphaMapUv),E.push(N.lightMapUv),E.push(N.aoMapUv),E.push(N.bumpMapUv),E.push(N.normalMapUv),E.push(N.displacementMapUv),E.push(N.emissiveMapUv),E.push(N.metalnessMapUv),E.push(N.roughnessMapUv),E.push(N.anisotropyMapUv),E.push(N.clearcoatMapUv),E.push(N.clearcoatNormalMapUv),E.push(N.clearcoatRoughnessMapUv),E.push(N.iridescenceMapUv),E.push(N.iridescenceThicknessMapUv),E.push(N.sheenColorMapUv),E.push(N.sheenRoughnessMapUv),E.push(N.specularMapUv),E.push(N.specularColorMapUv),E.push(N.specularIntensityMapUv),E.push(N.transmissionMapUv),E.push(N.thicknessMapUv),E.push(N.combine),E.push(N.fogExp2),E.push(N.sizeAttenuation),E.push(N.morphTargetsCount),E.push(N.morphAttributeCount),E.push(N.numDirLights),E.push(N.numPointLights),E.push(N.numSpotLights),E.push(N.numSpotLightMaps),E.push(N.numHemiLights),E.push(N.numRectAreaLights),E.push(N.numDirLightShadows),E.push(N.numPointLightShadows),E.push(N.numSpotLightShadows),E.push(N.numSpotLightShadowsWithMaps),E.push(N.numLightProbes),E.push(N.shadowMapType),E.push(N.toneMapping),E.push(N.numClippingPlanes),E.push(N.numClipIntersection),E.push(N.depthPacking)}function F(E,N){d.disableAll(),N.instancing&&d.enable(0),N.instancingColor&&d.enable(1),N.instancingMorph&&d.enable(2),N.matcap&&d.enable(3),N.envMap&&d.enable(4),N.normalMapObjectSpace&&d.enable(5),N.normalMapTangentSpace&&d.enable(6),N.clearcoat&&d.enable(7),N.iridescence&&d.enable(8),N.alphaTest&&d.enable(9),N.vertexColors&&d.enable(10),N.vertexAlphas&&d.enable(11),N.vertexUv1s&&d.enable(12),N.vertexUv2s&&d.enable(13),N.vertexUv3s&&d.enable(14),N.vertexTangents&&d.enable(15),N.anisotropy&&d.enable(16),N.alphaHash&&d.enable(17),N.batching&&d.enable(18),N.dispersion&&d.enable(19),N.batchingColor&&d.enable(20),N.gradientMap&&d.enable(21),N.packedNormalMap&&d.enable(22),N.vertexNormals&&d.enable(23),E.push(d.mask),d.disableAll(),N.fog&&d.enable(0),N.useFog&&d.enable(1),N.flatShading&&d.enable(2),N.logarithmicDepthBuffer&&d.enable(3),N.reversedDepthBuffer&&d.enable(4),N.skinning&&d.enable(5),N.morphTargets&&d.enable(6),N.morphNormals&&d.enable(7),N.morphColors&&d.enable(8),N.premultipliedAlpha&&d.enable(9),N.shadowMapEnabled&&d.enable(10),N.doubleSided&&d.enable(11),N.flipSided&&d.enable(12),N.useDepthPacking&&d.enable(13),N.dithering&&d.enable(14),N.transmission&&d.enable(15),N.sheen&&d.enable(16),N.opaque&&d.enable(17),N.pointsUvs&&d.enable(18),N.decodeVideoTexture&&d.enable(19),N.decodeVideoTextureEmissive&&d.enable(20),N.alphaToCoverage&&d.enable(21),N.numLightProbeGrids>0&&d.enable(22),N.hasPositionAttribute&&d.enable(23),E.push(d.mask)}function P(E){const N=T[E.type];let X;if(N){const G=qi[N];X=mb.clone(G.uniforms)}else X=E.uniforms;return X}function D(E,N){let X=_.get(N);return X!==void 0?++X.usedTimes:(X=new YT(r,N,E,l),h.push(X),_.set(N,X)),X}function V(E){if(--E.usedTimes===0){const N=h.indexOf(E);h[N]=h[h.length-1],h.pop(),_.delete(E.cacheKey),E.destroy()}}function O(E){p.remove(E)}function L(){p.dispose()}return{getParameters:U,getProgramCacheKey:b,getUniforms:P,acquireProgram:D,releaseProgram:V,releaseShaderCache:O,programs:h,dispose:L}}function eA(){let r=new WeakMap;function e(d){return r.has(d)}function i(d){let p=r.get(d);return p===void 0&&(p={},r.set(d,p)),p}function s(d){r.delete(d)}function l(d,p,m){r.get(d)[p]=m}function c(){r=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function tA(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function Zx(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Kx(){const r=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function d(g){let T=0;return g.isInstancedMesh&&(T+=2),g.isSkinnedMesh&&(T+=1),T}function p(g,T,A,U,b,v){let F=r[e];return F===void 0?(F={id:g.id,object:g,geometry:T,material:A,materialVariant:d(g),groupOrder:U,renderOrder:g.renderOrder,z:b,group:v},r[e]=F):(F.id=g.id,F.object=g,F.geometry=T,F.material=A,F.materialVariant=d(g),F.groupOrder=U,F.renderOrder=g.renderOrder,F.z=b,F.group=v),e++,F}function m(g,T,A,U,b,v){const F=p(g,T,A,U,b,v);A.transmission>0?s.push(F):A.transparent===!0?l.push(F):i.push(F)}function h(g,T,A,U,b,v){const F=p(g,T,A,U,b,v);A.transmission>0?s.unshift(F):A.transparent===!0?l.unshift(F):i.unshift(F)}function _(g,T,A){i.length>1&&i.sort(g||tA),s.length>1&&s.sort(T||Zx),l.length>1&&l.sort(T||Zx),A&&(i.reverse(),s.reverse(),l.reverse())}function y(){for(let g=e,T=r.length;g<T;g++){const A=r[g];if(A.id===null)break;A.id=null,A.object=null,A.geometry=null,A.material=null,A.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:h,finish:y,sort:_}}function nA(){let r=new WeakMap;function e(s,l){const c=r.get(s);let d;return c===void 0?(d=new Kx,r.set(s,[d])):l>=c.length?(d=new Kx,c.push(d)):d=c[l],d}function i(){r=new WeakMap}return{get:e,dispose:i}}function iA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new fe,color:new ht};break;case"SpotLight":i={position:new fe,direction:new fe,color:new ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new fe,color:new ht,distance:0,decay:0};break;case"HemisphereLight":i={direction:new fe,skyColor:new ht,groundColor:new ht};break;case"RectAreaLight":i={color:new ht,position:new fe,halfWidth:new fe,halfHeight:new fe};break}return r[e.id]=i,i}}}function aA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let sA=0;function rA(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function oA(r){const e=new iA,i=aA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new fe);const l=new fe,c=new fn,d=new fn;function p(h){let _=0,y=0,g=0;for(let N=0;N<9;N++)s.probe[N].set(0,0,0);let T=0,A=0,U=0,b=0,v=0,F=0,P=0,D=0,V=0,O=0,L=0;h.sort(rA);for(let N=0,X=h.length;N<X;N++){const G=h[N],j=G.color,Q=G.intensity,te=G.distance;let q=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===qs?q=G.shadow.map.texture:q=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)_+=j.r*Q,y+=j.g*Q,g+=j.b*Q;else if(G.isLightProbe){for(let I=0;I<9;I++)s.probe[I].addScaledVector(G.sh.coefficients[I],Q);L++}else if(G.isDirectionalLight){const I=e.get(G);if(I.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const z=G.shadow,Y=i.get(G);Y.shadowIntensity=z.intensity,Y.shadowBias=z.bias,Y.shadowNormalBias=z.normalBias,Y.shadowRadius=z.radius,Y.shadowMapSize=z.mapSize,s.directionalShadow[T]=Y,s.directionalShadowMap[T]=q,s.directionalShadowMatrix[T]=G.shadow.matrix,F++}s.directional[T]=I,T++}else if(G.isSpotLight){const I=e.get(G);I.position.setFromMatrixPosition(G.matrixWorld),I.color.copy(j).multiplyScalar(Q),I.distance=te,I.coneCos=Math.cos(G.angle),I.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),I.decay=G.decay,s.spot[U]=I;const z=G.shadow;if(G.map&&(s.spotLightMap[V]=G.map,V++,z.updateMatrices(G),G.castShadow&&O++),s.spotLightMatrix[U]=z.matrix,G.castShadow){const Y=i.get(G);Y.shadowIntensity=z.intensity,Y.shadowBias=z.bias,Y.shadowNormalBias=z.normalBias,Y.shadowRadius=z.radius,Y.shadowMapSize=z.mapSize,s.spotShadow[U]=Y,s.spotShadowMap[U]=q,D++}U++}else if(G.isRectAreaLight){const I=e.get(G);I.color.copy(j).multiplyScalar(Q),I.halfWidth.set(G.width*.5,0,0),I.halfHeight.set(0,G.height*.5,0),s.rectArea[b]=I,b++}else if(G.isPointLight){const I=e.get(G);if(I.color.copy(G.color).multiplyScalar(G.intensity),I.distance=G.distance,I.decay=G.decay,G.castShadow){const z=G.shadow,Y=i.get(G);Y.shadowIntensity=z.intensity,Y.shadowBias=z.bias,Y.shadowNormalBias=z.normalBias,Y.shadowRadius=z.radius,Y.shadowMapSize=z.mapSize,Y.shadowCameraNear=z.camera.near,Y.shadowCameraFar=z.camera.far,s.pointShadow[A]=Y,s.pointShadowMap[A]=q,s.pointShadowMatrix[A]=G.shadow.matrix,P++}s.point[A]=I,A++}else if(G.isHemisphereLight){const I=e.get(G);I.skyColor.copy(G.color).multiplyScalar(Q),I.groundColor.copy(G.groundColor).multiplyScalar(Q),s.hemi[v]=I,v++}}b>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Fe.LTC_FLOAT_1,s.rectAreaLTC2=Fe.LTC_FLOAT_2):(s.rectAreaLTC1=Fe.LTC_HALF_1,s.rectAreaLTC2=Fe.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=y,s.ambient[2]=g;const E=s.hash;(E.directionalLength!==T||E.pointLength!==A||E.spotLength!==U||E.rectAreaLength!==b||E.hemiLength!==v||E.numDirectionalShadows!==F||E.numPointShadows!==P||E.numSpotShadows!==D||E.numSpotMaps!==V||E.numLightProbes!==L)&&(s.directional.length=T,s.spot.length=U,s.rectArea.length=b,s.point.length=A,s.hemi.length=v,s.directionalShadow.length=F,s.directionalShadowMap.length=F,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=F,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=D+V-O,s.spotLightMap.length=V,s.numSpotLightShadowsWithMaps=O,s.numLightProbes=L,E.directionalLength=T,E.pointLength=A,E.spotLength=U,E.rectAreaLength=b,E.hemiLength=v,E.numDirectionalShadows=F,E.numPointShadows=P,E.numSpotShadows=D,E.numSpotMaps=V,E.numLightProbes=L,s.version=sA++)}function m(h,_){let y=0,g=0,T=0,A=0,U=0;const b=_.matrixWorldInverse;for(let v=0,F=h.length;v<F;v++){const P=h[v];if(P.isDirectionalLight){const D=s.directional[y];D.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(b),y++}else if(P.isSpotLight){const D=s.spot[T];D.position.setFromMatrixPosition(P.matrixWorld),D.position.applyMatrix4(b),D.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(b),T++}else if(P.isRectAreaLight){const D=s.rectArea[A];D.position.setFromMatrixPosition(P.matrixWorld),D.position.applyMatrix4(b),d.identity(),c.copy(P.matrixWorld),c.premultiply(b),d.extractRotation(c),D.halfWidth.set(P.width*.5,0,0),D.halfHeight.set(0,P.height*.5,0),D.halfWidth.applyMatrix4(d),D.halfHeight.applyMatrix4(d),A++}else if(P.isPointLight){const D=s.point[g];D.position.setFromMatrixPosition(P.matrixWorld),D.position.applyMatrix4(b),g++}else if(P.isHemisphereLight){const D=s.hemi[U];D.direction.setFromMatrixPosition(P.matrixWorld),D.direction.transformDirection(b),U++}}}return{setup:p,setupView:m,state:s}}function Qx(r){const e=new oA(r),i=[],s=[],l=[];function c(g){y.camera=g,i.length=0,s.length=0,l.length=0}function d(g){i.push(g)}function p(g){s.push(g)}function m(g){l.push(g)}function h(){e.setup(i)}function _(g){e.setupView(i,g)}const y={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:y,setupLights:h,setupLightsView:_,pushLight:d,pushShadow:p,pushLightProbeGrid:m}}function lA(r){let e=new WeakMap;function i(l,c=0){const d=e.get(l);let p;return d===void 0?(p=new Qx(r),e.set(l,[p])):c>=d.length?(p=new Qx(r),d.push(p)):p=d[c],p}function s(){e=new WeakMap}return{get:i,dispose:s}}const cA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,fA=[new fe(1,0,0),new fe(-1,0,0),new fe(0,1,0),new fe(0,-1,0),new fe(0,0,1),new fe(0,0,-1)],dA=[new fe(0,-1,0),new fe(0,-1,0),new fe(0,0,1),new fe(0,0,-1),new fe(0,-1,0),new fe(0,-1,0)],Jx=new fn,$o=new fe,Yd=new fe;function hA(r,e,i){let s=new np;const l=new wt,c=new wt,d=new ln,p=new yb,m=new Sb,h={},_=i.maxTextureSize,y={[hs]:ei,[ei]:hs,[Ta]:Ta},g=new ea({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:cA,fragmentShader:uA}),T=g.clone();T.defines.HORIZONTAL_PASS=1;const A=new zi;A.setAttribute("position",new Ji(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const U=new dt(A,g),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hc;let v=this.type;this.render=function(O,L,E){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||O.length===0)return;this.type===iv&&(ut("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Hc);const N=r.getRenderTarget(),X=r.getActiveCubeFace(),G=r.getActiveMipmapLevel(),j=r.state;j.setBlending(wa),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const Q=v!==this.type;Q&&L.traverse(function(te){te.material&&(Array.isArray(te.material)?te.material.forEach(q=>q.needsUpdate=!0):te.material.needsUpdate=!0)});for(let te=0,q=O.length;te<q;te++){const I=O[te],z=I.shadow;if(z===void 0){ut("WebGLShadowMap:",I,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;l.copy(z.mapSize);const Y=z.getFrameExtents();l.multiply(Y),c.copy(z.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/Y.x),l.x=c.x*Y.x,z.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/Y.y),l.y=c.y*Y.y,z.mapSize.y=c.y));const ae=r.state.buffers.depth.getReversed();if(z.camera._reversedDepth=ae,z.map===null||Q===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===el){if(I.isPointLight){ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Qi(l.x,l.y,{format:qs,type:Ra,minFilter:Gn,magFilter:Gn,generateMipmaps:!1}),z.map.texture.name=I.name+".shadowMap",z.map.depthTexture=new Yr(l.x,l.y,Yi),z.map.depthTexture.name=I.name+".shadowMapDepth",z.map.depthTexture.format=Na,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Pn,z.map.depthTexture.magFilter=Pn}else I.isPointLight?(z.map=new Uv(l.x),z.map.depthTexture=new hb(l.x,$i)):(z.map=new Qi(l.x,l.y),z.map.depthTexture=new Yr(l.x,l.y,$i)),z.map.depthTexture.name=I.name+".shadowMap",z.map.depthTexture.format=Na,this.type===Hc?(z.map.depthTexture.compareFunction=ae?$h:Jh,z.map.depthTexture.minFilter=Gn,z.map.depthTexture.magFilter=Gn):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Pn,z.map.depthTexture.magFilter=Pn);z.camera.updateProjectionMatrix()}const H=z.map.isWebGLCubeRenderTarget?6:1;for(let S=0;S<H;S++){if(z.map.isWebGLCubeRenderTarget)r.setRenderTarget(z.map,S),r.clear();else{S===0&&(r.setRenderTarget(z.map),r.clear());const k=z.getViewport(S);d.set(c.x*k.x,c.y*k.y,c.x*k.z,c.y*k.w),j.viewport(d)}if(I.isPointLight){const k=z.camera,re=z.matrix,_e=I.distance||k.far;_e!==k.far&&(k.far=_e,k.updateProjectionMatrix()),$o.setFromMatrixPosition(I.matrixWorld),k.position.copy($o),Yd.copy(k.position),Yd.add(fA[S]),k.up.copy(dA[S]),k.lookAt(Yd),k.updateMatrixWorld(),re.makeTranslation(-$o.x,-$o.y,-$o.z),Jx.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Jx,k.coordinateSystem,k.reversedDepth)}else z.updateMatrices(I);s=z.getFrustum(),D(L,E,z.camera,I,this.type)}z.isPointLightShadow!==!0&&this.type===el&&F(z,E),z.needsUpdate=!1}v=this.type,b.needsUpdate=!1,r.setRenderTarget(N,X,G)};function F(O,L){const E=e.update(U);g.defines.VSM_SAMPLES!==O.blurSamples&&(g.defines.VSM_SAMPLES=O.blurSamples,T.defines.VSM_SAMPLES=O.blurSamples,g.needsUpdate=!0,T.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Qi(l.x,l.y,{format:qs,type:Ra})),g.uniforms.shadow_pass.value=O.map.depthTexture,g.uniforms.resolution.value=O.mapSize,g.uniforms.radius.value=O.radius,r.setRenderTarget(O.mapPass),r.clear(),r.renderBufferDirect(L,null,E,g,U,null),T.uniforms.shadow_pass.value=O.mapPass.texture,T.uniforms.resolution.value=O.mapSize,T.uniforms.radius.value=O.radius,r.setRenderTarget(O.map),r.clear(),r.renderBufferDirect(L,null,E,T,U,null)}function P(O,L,E,N){let X=null;const G=E.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(G!==void 0)X=G;else if(X=E.isPointLight===!0?m:p,r.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const j=X.uuid,Q=L.uuid;let te=h[j];te===void 0&&(te={},h[j]=te);let q=te[Q];q===void 0&&(q=X.clone(),te[Q]=q,L.addEventListener("dispose",V)),X=q}if(X.visible=L.visible,X.wireframe=L.wireframe,N===el?X.side=L.shadowSide!==null?L.shadowSide:L.side:X.side=L.shadowSide!==null?L.shadowSide:y[L.side],X.alphaMap=L.alphaMap,X.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,X.map=L.map,X.clipShadows=L.clipShadows,X.clippingPlanes=L.clippingPlanes,X.clipIntersection=L.clipIntersection,X.displacementMap=L.displacementMap,X.displacementScale=L.displacementScale,X.displacementBias=L.displacementBias,X.wireframeLinewidth=L.wireframeLinewidth,X.linewidth=L.linewidth,E.isPointLight===!0&&X.isMeshDistanceMaterial===!0){const j=r.properties.get(X);j.light=E}return X}function D(O,L,E,N,X){if(O.visible===!1)return;if(O.layers.test(L.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&X===el)&&(!O.frustumCulled||s.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,O.matrixWorld);const Q=e.update(O),te=O.material;if(Array.isArray(te)){const q=Q.groups;for(let I=0,z=q.length;I<z;I++){const Y=q[I],ae=te[Y.materialIndex];if(ae&&ae.visible){const H=P(O,ae,N,X);O.onBeforeShadow(r,O,L,E,Q,H,Y),r.renderBufferDirect(E,null,Q,H,O,Y),O.onAfterShadow(r,O,L,E,Q,H,Y)}}}else if(te.visible){const q=P(O,te,N,X);O.onBeforeShadow(r,O,L,E,Q,q,null),r.renderBufferDirect(E,null,Q,q,O,null),O.onAfterShadow(r,O,L,E,Q,q,null)}}const j=O.children;for(let Q=0,te=j.length;Q<te;Q++)D(j[Q],L,E,N,X)}function V(O){O.target.removeEventListener("dispose",V);for(const E in h){const N=h[E],X=O.target.uuid;X in N&&(N[X].dispose(),delete N[X])}}}function pA(r,e){function i(){let K=!1;const Re=new ln;let be=null;const Ue=new ln(0,0,0,0);return{setMask:function(He){be!==He&&!K&&(r.colorMask(He,He,He,He),be=He)},setLocked:function(He){K=He},setClear:function(He,Ae,Qe,je,nn){nn===!0&&(He*=je,Ae*=je,Qe*=je),Re.set(He,Ae,Qe,je),Ue.equals(Re)===!1&&(r.clearColor(He,Ae,Qe,je),Ue.copy(Re))},reset:function(){K=!1,be=null,Ue.set(-1,0,0,0)}}}function s(){let K=!1,Re=!1,be=null,Ue=null,He=null;return{setReversed:function(Ae){if(Re!==Ae){const Qe=e.get("EXT_clip_control");Ae?Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.ZERO_TO_ONE_EXT):Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.NEGATIVE_ONE_TO_ONE_EXT),Re=Ae;const je=He;He=null,this.setClear(je)}},getReversed:function(){return Re},setTest:function(Ae){Ae?me(r.DEPTH_TEST):we(r.DEPTH_TEST)},setMask:function(Ae){be!==Ae&&!K&&(r.depthMask(Ae),be=Ae)},setFunc:function(Ae){if(Re&&(Ae=GS[Ae]),Ue!==Ae){switch(Ae){case $d:r.depthFunc(r.NEVER);break;case eh:r.depthFunc(r.ALWAYS);break;case th:r.depthFunc(r.LESS);break;case Wr:r.depthFunc(r.LEQUAL);break;case nh:r.depthFunc(r.EQUAL);break;case ih:r.depthFunc(r.GEQUAL);break;case ah:r.depthFunc(r.GREATER);break;case sh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ue=Ae}},setLocked:function(Ae){K=Ae},setClear:function(Ae){He!==Ae&&(He=Ae,Re&&(Ae=1-Ae),r.clearDepth(Ae))},reset:function(){K=!1,be=null,Ue=null,He=null,Re=!1}}}function l(){let K=!1,Re=null,be=null,Ue=null,He=null,Ae=null,Qe=null,je=null,nn=null;return{setTest:function(Gt){K||(Gt?me(r.STENCIL_TEST):we(r.STENCIL_TEST))},setMask:function(Gt){Re!==Gt&&!K&&(r.stencilMask(Gt),Re=Gt)},setFunc:function(Gt,ti,ni){(be!==Gt||Ue!==ti||He!==ni)&&(r.stencilFunc(Gt,ti,ni),be=Gt,Ue=ti,He=ni)},setOp:function(Gt,ti,ni){(Ae!==Gt||Qe!==ti||je!==ni)&&(r.stencilOp(Gt,ti,ni),Ae=Gt,Qe=ti,je=ni)},setLocked:function(Gt){K=Gt},setClear:function(Gt){nn!==Gt&&(r.clearStencil(Gt),nn=Gt)},reset:function(){K=!1,Re=null,be=null,Ue=null,He=null,Ae=null,Qe=null,je=null,nn=null}}}const c=new i,d=new s,p=new l,m=new WeakMap,h=new WeakMap;let _={},y={},g={},T=new WeakMap,A=[],U=null,b=!1,v=null,F=null,P=null,D=null,V=null,O=null,L=null,E=new ht(0,0,0),N=0,X=!1,G=null,j=null,Q=null,te=null,q=null;const I=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,Y=0;const ae=r.getParameter(r.VERSION);ae.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(ae)[1]),z=Y>=1):ae.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),z=Y>=2);let H=null,S={};const k=r.getParameter(r.SCISSOR_BOX),re=r.getParameter(r.VIEWPORT),_e=new ln().fromArray(k),Me=new ln().fromArray(re);function J(K,Re,be,Ue){const He=new Uint8Array(4),Ae=r.createTexture();r.bindTexture(K,Ae),r.texParameteri(K,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(K,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Qe=0;Qe<be;Qe++)K===r.TEXTURE_3D||K===r.TEXTURE_2D_ARRAY?r.texImage3D(Re,0,r.RGBA,1,1,Ue,0,r.RGBA,r.UNSIGNED_BYTE,He):r.texImage2D(Re+Qe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,He);return Ae}const se={};se[r.TEXTURE_2D]=J(r.TEXTURE_2D,r.TEXTURE_2D,1),se[r.TEXTURE_CUBE_MAP]=J(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[r.TEXTURE_2D_ARRAY]=J(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),se[r.TEXTURE_3D]=J(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),p.setClear(0),me(r.DEPTH_TEST),d.setFunc(Wr),qe(!1),pt(ex),me(r.CULL_FACE),rt(wa);function me(K){_[K]!==!0&&(r.enable(K),_[K]=!0)}function we(K){_[K]!==!1&&(r.disable(K),_[K]=!1)}function Be(K,Re){return g[K]!==Re?(r.bindFramebuffer(K,Re),g[K]=Re,K===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Re),K===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Re),!0):!1}function De(K,Re){let be=A,Ue=!1;if(K){be=T.get(Re),be===void 0&&(be=[],T.set(Re,be));const He=K.textures;if(be.length!==He.length||be[0]!==r.COLOR_ATTACHMENT0){for(let Ae=0,Qe=He.length;Ae<Qe;Ae++)be[Ae]=r.COLOR_ATTACHMENT0+Ae;be.length=He.length,Ue=!0}}else be[0]!==r.BACK&&(be[0]=r.BACK,Ue=!0);Ue&&r.drawBuffers(be)}function nt(K){return U!==K?(r.useProgram(K),U=K,!0):!1}const $e={[Gs]:r.FUNC_ADD,[uS]:r.FUNC_SUBTRACT,[fS]:r.FUNC_REVERSE_SUBTRACT};$e[dS]=r.MIN,$e[hS]=r.MAX;const Ge={[pS]:r.ZERO,[mS]:r.ONE,[gS]:r.SRC_COLOR,[Qd]:r.SRC_ALPHA,[bS]:r.SRC_ALPHA_SATURATE,[yS]:r.DST_COLOR,[vS]:r.DST_ALPHA,[xS]:r.ONE_MINUS_SRC_COLOR,[Jd]:r.ONE_MINUS_SRC_ALPHA,[SS]:r.ONE_MINUS_DST_COLOR,[_S]:r.ONE_MINUS_DST_ALPHA,[MS]:r.CONSTANT_COLOR,[ES]:r.ONE_MINUS_CONSTANT_COLOR,[TS]:r.CONSTANT_ALPHA,[AS]:r.ONE_MINUS_CONSTANT_ALPHA};function rt(K,Re,be,Ue,He,Ae,Qe,je,nn,Gt){if(K===wa){b===!0&&(we(r.BLEND),b=!1);return}if(b===!1&&(me(r.BLEND),b=!0),K!==cS){if(K!==v||Gt!==X){if((F!==Gs||V!==Gs)&&(r.blendEquation(r.FUNC_ADD),F=Gs,V=Gs),Gt)switch(K){case kr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case tx:r.blendFunc(r.ONE,r.ONE);break;case nx:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ix:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Lt("WebGLState: Invalid blending: ",K);break}else switch(K){case kr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case tx:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case nx:Lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ix:Lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Lt("WebGLState: Invalid blending: ",K);break}P=null,D=null,O=null,L=null,E.set(0,0,0),N=0,v=K,X=Gt}return}He=He||Re,Ae=Ae||be,Qe=Qe||Ue,(Re!==F||He!==V)&&(r.blendEquationSeparate($e[Re],$e[He]),F=Re,V=He),(be!==P||Ue!==D||Ae!==O||Qe!==L)&&(r.blendFuncSeparate(Ge[be],Ge[Ue],Ge[Ae],Ge[Qe]),P=be,D=Ue,O=Ae,L=Qe),(je.equals(E)===!1||nn!==N)&&(r.blendColor(je.r,je.g,je.b,nn),E.copy(je),N=nn),v=K,X=!1}function ot(K,Re){K.side===Ta?we(r.CULL_FACE):me(r.CULL_FACE);let be=K.side===ei;Re&&(be=!be),qe(be),K.blending===kr&&K.transparent===!1?rt(wa):rt(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.blendColor,K.blendAlpha,K.premultipliedAlpha),d.setFunc(K.depthFunc),d.setTest(K.depthTest),d.setMask(K.depthWrite),c.setMask(K.colorWrite);const Ue=K.stencilWrite;p.setTest(Ue),Ue&&(p.setMask(K.stencilWriteMask),p.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),p.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),yt(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?me(r.SAMPLE_ALPHA_TO_COVERAGE):we(r.SAMPLE_ALPHA_TO_COVERAGE)}function qe(K){G!==K&&(K?r.frontFace(r.CW):r.frontFace(r.CCW),G=K)}function pt(K){K!==oS?(me(r.CULL_FACE),K!==j&&(K===ex?r.cullFace(r.BACK):K===lS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):we(r.CULL_FACE),j=K}function lt(K){K!==Q&&(z&&r.lineWidth(K),Q=K)}function yt(K,Re,be){K?(me(r.POLYGON_OFFSET_FILL),(te!==Re||q!==be)&&(te=Re,q=be,d.getReversed()&&(Re=-Re),r.polygonOffset(Re,be))):we(r.POLYGON_OFFSET_FILL)}function Ot(K){K?me(r.SCISSOR_TEST):we(r.SCISSOR_TEST)}function tn(K){K===void 0&&(K=r.TEXTURE0+I-1),H!==K&&(r.activeTexture(K),H=K)}function $(K,Re,be){be===void 0&&(H===null?be=r.TEXTURE0+I-1:be=H);let Ue=S[be];Ue===void 0&&(Ue={type:void 0,texture:void 0},S[be]=Ue),(Ue.type!==K||Ue.texture!==Re)&&(H!==be&&(r.activeTexture(be),H=be),r.bindTexture(K,Re||se[K]),Ue.type=K,Ue.texture=Re)}function Ft(){const K=S[H];K!==void 0&&K.type!==void 0&&(r.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function Ut(){try{r.compressedTexImage2D(...arguments)}catch(K){Lt("WebGLState:",K)}}function B(){try{r.compressedTexImage3D(...arguments)}catch(K){Lt("WebGLState:",K)}}function M(){try{r.texSubImage2D(...arguments)}catch(K){Lt("WebGLState:",K)}}function ie(){try{r.texSubImage3D(...arguments)}catch(K){Lt("WebGLState:",K)}}function de(){try{r.compressedTexSubImage2D(...arguments)}catch(K){Lt("WebGLState:",K)}}function xe(){try{r.compressedTexSubImage3D(...arguments)}catch(K){Lt("WebGLState:",K)}}function Ce(){try{r.texStorage2D(...arguments)}catch(K){Lt("WebGLState:",K)}}function Le(){try{r.texStorage3D(...arguments)}catch(K){Lt("WebGLState:",K)}}function ve(){try{r.texImage2D(...arguments)}catch(K){Lt("WebGLState:",K)}}function ye(){try{r.texImage3D(...arguments)}catch(K){Lt("WebGLState:",K)}}function Ne(K){return y[K]!==void 0?y[K]:r.getParameter(K)}function Ve(K,Re){y[K]!==Re&&(r.pixelStorei(K,Re),y[K]=Re)}function Ie(K){_e.equals(K)===!1&&(r.scissor(K.x,K.y,K.z,K.w),_e.copy(K))}function Oe(K){Me.equals(K)===!1&&(r.viewport(K.x,K.y,K.z,K.w),Me.copy(K))}function tt(K,Re){let be=h.get(Re);be===void 0&&(be=new WeakMap,h.set(Re,be));let Ue=be.get(K);Ue===void 0&&(Ue=r.getUniformBlockIndex(Re,K.name),be.set(K,Ue))}function it(K,Re){const Ue=h.get(Re).get(K);m.get(Re)!==Ue&&(r.uniformBlockBinding(Re,Ue,K.__bindingPointIndex),m.set(Re,Ue))}function ft(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),d.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),_={},y={},H=null,S={},g={},T=new WeakMap,A=[],U=null,b=!1,v=null,F=null,P=null,D=null,V=null,O=null,L=null,E=new ht(0,0,0),N=0,X=!1,G=null,j=null,Q=null,te=null,q=null,_e.set(0,0,r.canvas.width,r.canvas.height),Me.set(0,0,r.canvas.width,r.canvas.height),c.reset(),d.reset(),p.reset()}return{buffers:{color:c,depth:d,stencil:p},enable:me,disable:we,bindFramebuffer:Be,drawBuffers:De,useProgram:nt,setBlending:rt,setMaterial:ot,setFlipSided:qe,setCullFace:pt,setLineWidth:lt,setPolygonOffset:yt,setScissorTest:Ot,activeTexture:tn,bindTexture:$,unbindTexture:Ft,compressedTexImage2D:Ut,compressedTexImage3D:B,texImage2D:ve,texImage3D:ye,pixelStorei:Ve,getParameter:Ne,updateUBOMapping:tt,uniformBlockBinding:it,texStorage2D:Ce,texStorage3D:Le,texSubImage2D:M,texSubImage3D:ie,compressedTexSubImage2D:de,compressedTexSubImage3D:xe,scissor:Ie,viewport:Oe,reset:ft}}function mA(r,e,i,s,l,c,d){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new wt,_=new WeakMap,y=new Set;let g;const T=new WeakMap;let A=!1;try{A=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function U(B,M){return A?new OffscreenCanvas(B,M):Qc("canvas")}function b(B,M,ie){let de=1;const xe=Ut(B);if((xe.width>ie||xe.height>ie)&&(de=ie/Math.max(xe.width,xe.height)),de<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){const Ce=Math.floor(de*xe.width),Le=Math.floor(de*xe.height);g===void 0&&(g=U(Ce,Le));const ve=M?U(Ce,Le):g;return ve.width=Ce,ve.height=Le,ve.getContext("2d").drawImage(B,0,0,Ce,Le),ut("WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+Ce+"x"+Le+")."),ve}else return"data"in B&&ut("WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),B;return B}function v(B){return B.generateMipmaps}function F(B){r.generateMipmap(B)}function P(B){return B.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?r.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function D(B,M,ie,de,xe,Ce=!1){if(B!==null){if(r[B]!==void 0)return r[B];ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let Le;de&&(Le=e.get("EXT_texture_norm16"),Le||ut("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ve=M;if(M===r.RED&&(ie===r.FLOAT&&(ve=r.R32F),ie===r.HALF_FLOAT&&(ve=r.R16F),ie===r.UNSIGNED_BYTE&&(ve=r.R8),ie===r.UNSIGNED_SHORT&&Le&&(ve=Le.R16_EXT),ie===r.SHORT&&Le&&(ve=Le.R16_SNORM_EXT)),M===r.RED_INTEGER&&(ie===r.UNSIGNED_BYTE&&(ve=r.R8UI),ie===r.UNSIGNED_SHORT&&(ve=r.R16UI),ie===r.UNSIGNED_INT&&(ve=r.R32UI),ie===r.BYTE&&(ve=r.R8I),ie===r.SHORT&&(ve=r.R16I),ie===r.INT&&(ve=r.R32I)),M===r.RG&&(ie===r.FLOAT&&(ve=r.RG32F),ie===r.HALF_FLOAT&&(ve=r.RG16F),ie===r.UNSIGNED_BYTE&&(ve=r.RG8),ie===r.UNSIGNED_SHORT&&Le&&(ve=Le.RG16_EXT),ie===r.SHORT&&Le&&(ve=Le.RG16_SNORM_EXT)),M===r.RG_INTEGER&&(ie===r.UNSIGNED_BYTE&&(ve=r.RG8UI),ie===r.UNSIGNED_SHORT&&(ve=r.RG16UI),ie===r.UNSIGNED_INT&&(ve=r.RG32UI),ie===r.BYTE&&(ve=r.RG8I),ie===r.SHORT&&(ve=r.RG16I),ie===r.INT&&(ve=r.RG32I)),M===r.RGB_INTEGER&&(ie===r.UNSIGNED_BYTE&&(ve=r.RGB8UI),ie===r.UNSIGNED_SHORT&&(ve=r.RGB16UI),ie===r.UNSIGNED_INT&&(ve=r.RGB32UI),ie===r.BYTE&&(ve=r.RGB8I),ie===r.SHORT&&(ve=r.RGB16I),ie===r.INT&&(ve=r.RGB32I)),M===r.RGBA_INTEGER&&(ie===r.UNSIGNED_BYTE&&(ve=r.RGBA8UI),ie===r.UNSIGNED_SHORT&&(ve=r.RGBA16UI),ie===r.UNSIGNED_INT&&(ve=r.RGBA32UI),ie===r.BYTE&&(ve=r.RGBA8I),ie===r.SHORT&&(ve=r.RGBA16I),ie===r.INT&&(ve=r.RGBA32I)),M===r.RGB&&(ie===r.UNSIGNED_SHORT&&Le&&(ve=Le.RGB16_EXT),ie===r.SHORT&&Le&&(ve=Le.RGB16_SNORM_EXT),ie===r.UNSIGNED_INT_5_9_9_9_REV&&(ve=r.RGB9_E5),ie===r.UNSIGNED_INT_10F_11F_11F_REV&&(ve=r.R11F_G11F_B10F)),M===r.RGBA){const ye=Ce?Kc:Nt.getTransfer(xe);ie===r.FLOAT&&(ve=r.RGBA32F),ie===r.HALF_FLOAT&&(ve=r.RGBA16F),ie===r.UNSIGNED_BYTE&&(ve=ye===qt?r.SRGB8_ALPHA8:r.RGBA8),ie===r.UNSIGNED_SHORT&&Le&&(ve=Le.RGBA16_EXT),ie===r.SHORT&&Le&&(ve=Le.RGBA16_SNORM_EXT),ie===r.UNSIGNED_SHORT_4_4_4_4&&(ve=r.RGBA4),ie===r.UNSIGNED_SHORT_5_5_5_1&&(ve=r.RGB5_A1)}return(ve===r.R16F||ve===r.R32F||ve===r.RG16F||ve===r.RG32F||ve===r.RGBA16F||ve===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ve}function V(B,M){let ie;return B?M===null||M===$i||M===il?ie=r.DEPTH24_STENCIL8:M===Yi?ie=r.DEPTH32F_STENCIL8:M===nl&&(ie=r.DEPTH24_STENCIL8,ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===$i||M===il?ie=r.DEPTH_COMPONENT24:M===Yi?ie=r.DEPTH_COMPONENT32F:M===nl&&(ie=r.DEPTH_COMPONENT16),ie}function O(B,M){return v(B)===!0||B.isFramebufferTexture&&B.minFilter!==Pn&&B.minFilter!==Gn?Math.log2(Math.max(M.width,M.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?M.mipmaps.length:1}function L(B){const M=B.target;M.removeEventListener("dispose",L),N(M),M.isVideoTexture&&_.delete(M),M.isHTMLTexture&&y.delete(M)}function E(B){const M=B.target;M.removeEventListener("dispose",E),G(M)}function N(B){const M=s.get(B);if(M.__webglInit===void 0)return;const ie=B.source,de=T.get(ie);if(de){const xe=de[M.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&X(B),Object.keys(de).length===0&&T.delete(ie)}s.remove(B)}function X(B){const M=s.get(B);r.deleteTexture(M.__webglTexture);const ie=B.source,de=T.get(ie);delete de[M.__cacheKey],d.memory.textures--}function G(B){const M=s.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),s.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(M.__webglFramebuffer[de]))for(let xe=0;xe<M.__webglFramebuffer[de].length;xe++)r.deleteFramebuffer(M.__webglFramebuffer[de][xe]);else r.deleteFramebuffer(M.__webglFramebuffer[de]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[de])}else{if(Array.isArray(M.__webglFramebuffer))for(let de=0;de<M.__webglFramebuffer.length;de++)r.deleteFramebuffer(M.__webglFramebuffer[de]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let de=0;de<M.__webglColorRenderbuffer.length;de++)M.__webglColorRenderbuffer[de]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[de]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const ie=B.textures;for(let de=0,xe=ie.length;de<xe;de++){const Ce=s.get(ie[de]);Ce.__webglTexture&&(r.deleteTexture(Ce.__webglTexture),d.memory.textures--),s.remove(ie[de])}s.remove(B)}let j=0;function Q(){j=0}function te(){return j}function q(B){j=B}function I(){const B=j;return B>=l.maxTextures&&ut("WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+l.maxTextures),j+=1,B}function z(B){const M=[];return M.push(B.wrapS),M.push(B.wrapT),M.push(B.wrapR||0),M.push(B.magFilter),M.push(B.minFilter),M.push(B.anisotropy),M.push(B.internalFormat),M.push(B.format),M.push(B.type),M.push(B.generateMipmaps),M.push(B.premultiplyAlpha),M.push(B.flipY),M.push(B.unpackAlignment),M.push(B.colorSpace),M.join()}function Y(B,M){const ie=s.get(B);if(B.isVideoTexture&&$(B),B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&ie.__version!==B.version){const de=B.image;if(de===null)ut("WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)ut("WebGLRenderer: Texture marked for update but image is incomplete");else{we(ie,B,M);return}}else B.isExternalTexture&&(ie.__webglTexture=B.sourceTexture?B.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,ie.__webglTexture,r.TEXTURE0+M)}function ae(B,M){const ie=s.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&ie.__version!==B.version){we(ie,B,M);return}else B.isExternalTexture&&(ie.__webglTexture=B.sourceTexture?B.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,ie.__webglTexture,r.TEXTURE0+M)}function H(B,M){const ie=s.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&ie.__version!==B.version){we(ie,B,M);return}i.bindTexture(r.TEXTURE_3D,ie.__webglTexture,r.TEXTURE0+M)}function S(B,M){const ie=s.get(B);if(B.isCubeDepthTexture!==!0&&B.version>0&&ie.__version!==B.version){Be(ie,B,M);return}i.bindTexture(r.TEXTURE_CUBE_MAP,ie.__webglTexture,r.TEXTURE0+M)}const k={[rh]:r.REPEAT,[Aa]:r.CLAMP_TO_EDGE,[oh]:r.MIRRORED_REPEAT},re={[Pn]:r.NEAREST,[RS]:r.NEAREST_MIPMAP_NEAREST,[vc]:r.NEAREST_MIPMAP_LINEAR,[Gn]:r.LINEAR,[xd]:r.LINEAR_MIPMAP_NEAREST,[Xs]:r.LINEAR_MIPMAP_LINEAR},_e={[US]:r.NEVER,[zS]:r.ALWAYS,[LS]:r.LESS,[Jh]:r.LEQUAL,[OS]:r.EQUAL,[$h]:r.GEQUAL,[PS]:r.GREATER,[IS]:r.NOTEQUAL};function Me(B,M){if(M.type===Yi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Gn||M.magFilter===xd||M.magFilter===vc||M.magFilter===Xs||M.minFilter===Gn||M.minFilter===xd||M.minFilter===vc||M.minFilter===Xs)&&ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(B,r.TEXTURE_WRAP_S,k[M.wrapS]),r.texParameteri(B,r.TEXTURE_WRAP_T,k[M.wrapT]),(B===r.TEXTURE_3D||B===r.TEXTURE_2D_ARRAY)&&r.texParameteri(B,r.TEXTURE_WRAP_R,k[M.wrapR]),r.texParameteri(B,r.TEXTURE_MAG_FILTER,re[M.magFilter]),r.texParameteri(B,r.TEXTURE_MIN_FILTER,re[M.minFilter]),M.compareFunction&&(r.texParameteri(B,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(B,r.TEXTURE_COMPARE_FUNC,_e[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Pn||M.minFilter!==vc&&M.minFilter!==Xs||M.type===Yi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||s.get(M).__currentAnisotropy){const ie=e.get("EXT_texture_filter_anisotropic");r.texParameterf(B,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,l.getMaxAnisotropy())),s.get(M).__currentAnisotropy=M.anisotropy}}}function J(B,M){let ie=!1;B.__webglInit===void 0&&(B.__webglInit=!0,M.addEventListener("dispose",L));const de=M.source;let xe=T.get(de);xe===void 0&&(xe={},T.set(de,xe));const Ce=z(M);if(Ce!==B.__cacheKey){xe[Ce]===void 0&&(xe[Ce]={texture:r.createTexture(),usedTimes:0},d.memory.textures++,ie=!0),xe[Ce].usedTimes++;const Le=xe[B.__cacheKey];Le!==void 0&&(xe[B.__cacheKey].usedTimes--,Le.usedTimes===0&&X(M)),B.__cacheKey=Ce,B.__webglTexture=xe[Ce].texture}return ie}function se(B,M,ie){return Math.floor(Math.floor(B/ie)/M)}function me(B,M,ie,de){const Ce=B.updateRanges;if(Ce.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,M.width,M.height,ie,de,M.data);else{Ce.sort((Ve,Ie)=>Ve.start-Ie.start);let Le=0;for(let Ve=1;Ve<Ce.length;Ve++){const Ie=Ce[Le],Oe=Ce[Ve],tt=Ie.start+Ie.count,it=se(Oe.start,M.width,4),ft=se(Ie.start,M.width,4);Oe.start<=tt+1&&it===ft&&se(Oe.start+Oe.count-1,M.width,4)===it?Ie.count=Math.max(Ie.count,Oe.start+Oe.count-Ie.start):(++Le,Ce[Le]=Oe)}Ce.length=Le+1;const ve=i.getParameter(r.UNPACK_ROW_LENGTH),ye=i.getParameter(r.UNPACK_SKIP_PIXELS),Ne=i.getParameter(r.UNPACK_SKIP_ROWS);i.pixelStorei(r.UNPACK_ROW_LENGTH,M.width);for(let Ve=0,Ie=Ce.length;Ve<Ie;Ve++){const Oe=Ce[Ve],tt=Math.floor(Oe.start/4),it=Math.ceil(Oe.count/4),ft=tt%M.width,K=Math.floor(tt/M.width),Re=it,be=1;i.pixelStorei(r.UNPACK_SKIP_PIXELS,ft),i.pixelStorei(r.UNPACK_SKIP_ROWS,K),i.texSubImage2D(r.TEXTURE_2D,0,ft,K,Re,be,ie,de,M.data)}B.clearUpdateRanges(),i.pixelStorei(r.UNPACK_ROW_LENGTH,ve),i.pixelStorei(r.UNPACK_SKIP_PIXELS,ye),i.pixelStorei(r.UNPACK_SKIP_ROWS,Ne)}}function we(B,M,ie){let de=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(de=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(de=r.TEXTURE_3D);const xe=J(B,M),Ce=M.source;i.bindTexture(de,B.__webglTexture,r.TEXTURE0+ie);const Le=s.get(Ce);if(Ce.version!==Le.__version||xe===!0){if(i.activeTexture(r.TEXTURE0+ie),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const be=Nt.getPrimaries(Nt.workingColorSpace),Ue=M.colorSpace===fs?null:Nt.getPrimaries(M.colorSpace),He=M.colorSpace===fs||be===Ue?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,He)}i.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment);let ye=b(M.image,!1,l.maxTextureSize);ye=Ft(M,ye);const Ne=c.convert(M.format,M.colorSpace),Ve=c.convert(M.type);let Ie=D(M.internalFormat,Ne,Ve,M.normalized,M.colorSpace,M.isVideoTexture);Me(de,M);let Oe;const tt=M.mipmaps,it=M.isVideoTexture!==!0,ft=Le.__version===void 0||xe===!0,K=Ce.dataReady,Re=O(M,ye);if(M.isDepthTexture)Ie=V(M.format===js,M.type),ft&&(it?i.texStorage2D(r.TEXTURE_2D,1,Ie,ye.width,ye.height):i.texImage2D(r.TEXTURE_2D,0,Ie,ye.width,ye.height,0,Ne,Ve,null));else if(M.isDataTexture)if(tt.length>0){it&&ft&&i.texStorage2D(r.TEXTURE_2D,Re,Ie,tt[0].width,tt[0].height);for(let be=0,Ue=tt.length;be<Ue;be++)Oe=tt[be],it?K&&i.texSubImage2D(r.TEXTURE_2D,be,0,0,Oe.width,Oe.height,Ne,Ve,Oe.data):i.texImage2D(r.TEXTURE_2D,be,Ie,Oe.width,Oe.height,0,Ne,Ve,Oe.data);M.generateMipmaps=!1}else it?(ft&&i.texStorage2D(r.TEXTURE_2D,Re,Ie,ye.width,ye.height),K&&me(M,ye,Ne,Ve)):i.texImage2D(r.TEXTURE_2D,0,Ie,ye.width,ye.height,0,Ne,Ve,ye.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){it&&ft&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Re,Ie,tt[0].width,tt[0].height,ye.depth);for(let be=0,Ue=tt.length;be<Ue;be++)if(Oe=tt[be],M.format!==Ii)if(Ne!==null)if(it){if(K)if(M.layerUpdates.size>0){const He=Rx(Oe.width,Oe.height,M.format,M.type);for(const Ae of M.layerUpdates){const Qe=Oe.data.subarray(Ae*He/Oe.data.BYTES_PER_ELEMENT,(Ae+1)*He/Oe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,be,0,0,Ae,Oe.width,Oe.height,1,Ne,Qe)}M.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,be,0,0,0,Oe.width,Oe.height,ye.depth,Ne,Oe.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,be,Ie,Oe.width,Oe.height,ye.depth,0,Oe.data,0,0);else ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?K&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,be,0,0,0,Oe.width,Oe.height,ye.depth,Ne,Ve,Oe.data):i.texImage3D(r.TEXTURE_2D_ARRAY,be,Ie,Oe.width,Oe.height,ye.depth,0,Ne,Ve,Oe.data)}else{it&&ft&&i.texStorage2D(r.TEXTURE_2D,Re,Ie,tt[0].width,tt[0].height);for(let be=0,Ue=tt.length;be<Ue;be++)Oe=tt[be],M.format!==Ii?Ne!==null?it?K&&i.compressedTexSubImage2D(r.TEXTURE_2D,be,0,0,Oe.width,Oe.height,Ne,Oe.data):i.compressedTexImage2D(r.TEXTURE_2D,be,Ie,Oe.width,Oe.height,0,Oe.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?K&&i.texSubImage2D(r.TEXTURE_2D,be,0,0,Oe.width,Oe.height,Ne,Ve,Oe.data):i.texImage2D(r.TEXTURE_2D,be,Ie,Oe.width,Oe.height,0,Ne,Ve,Oe.data)}else if(M.isDataArrayTexture)if(it){if(ft&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Re,Ie,ye.width,ye.height,ye.depth),K)if(M.layerUpdates.size>0){const be=Rx(ye.width,ye.height,M.format,M.type);for(const Ue of M.layerUpdates){const He=ye.data.subarray(Ue*be/ye.data.BYTES_PER_ELEMENT,(Ue+1)*be/ye.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Ue,ye.width,ye.height,1,Ne,Ve,He)}M.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,Ne,Ve,ye.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Ie,ye.width,ye.height,ye.depth,0,Ne,Ve,ye.data);else if(M.isData3DTexture)it?(ft&&i.texStorage3D(r.TEXTURE_3D,Re,Ie,ye.width,ye.height,ye.depth),K&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,Ne,Ve,ye.data)):i.texImage3D(r.TEXTURE_3D,0,Ie,ye.width,ye.height,ye.depth,0,Ne,Ve,ye.data);else if(M.isFramebufferTexture){if(ft)if(it)i.texStorage2D(r.TEXTURE_2D,Re,Ie,ye.width,ye.height);else{let be=ye.width,Ue=ye.height;for(let He=0;He<Re;He++)i.texImage2D(r.TEXTURE_2D,He,Ie,be,Ue,0,Ne,Ve,null),be>>=1,Ue>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in r){const be=r.canvas;if(be.hasAttribute("layoutsubtree")||be.setAttribute("layoutsubtree","true"),ye.parentNode!==be){be.appendChild(ye),y.add(M),be.onpaint=Ue=>{const He=Ue.changedElements;for(const Ae of y)He.includes(Ae.image)&&(Ae.needsUpdate=!0)},be.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,ye);else{const He=r.RGBA,Ae=r.RGBA,Qe=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,He,Ae,Qe,ye)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(tt.length>0){if(it&&ft){const be=Ut(tt[0]);i.texStorage2D(r.TEXTURE_2D,Re,Ie,be.width,be.height)}for(let be=0,Ue=tt.length;be<Ue;be++)Oe=tt[be],it?K&&i.texSubImage2D(r.TEXTURE_2D,be,0,0,Ne,Ve,Oe):i.texImage2D(r.TEXTURE_2D,be,Ie,Ne,Ve,Oe);M.generateMipmaps=!1}else if(it){if(ft){const be=Ut(ye);i.texStorage2D(r.TEXTURE_2D,Re,Ie,be.width,be.height)}K&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Ne,Ve,ye)}else i.texImage2D(r.TEXTURE_2D,0,Ie,Ne,Ve,ye);v(M)&&F(de),Le.__version=Ce.version,M.onUpdate&&M.onUpdate(M)}B.__version=M.version}function Be(B,M,ie){if(M.image.length!==6)return;const de=J(B,M),xe=M.source;i.bindTexture(r.TEXTURE_CUBE_MAP,B.__webglTexture,r.TEXTURE0+ie);const Ce=s.get(xe);if(xe.version!==Ce.__version||de===!0){i.activeTexture(r.TEXTURE0+ie);const Le=Nt.getPrimaries(Nt.workingColorSpace),ve=M.colorSpace===fs?null:Nt.getPrimaries(M.colorSpace),ye=M.colorSpace===fs||Le===ve?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const Ne=M.isCompressedTexture||M.image[0].isCompressedTexture,Ve=M.image[0]&&M.image[0].isDataTexture,Ie=[];for(let Ae=0;Ae<6;Ae++)!Ne&&!Ve?Ie[Ae]=b(M.image[Ae],!0,l.maxCubemapSize):Ie[Ae]=Ve?M.image[Ae].image:M.image[Ae],Ie[Ae]=Ft(M,Ie[Ae]);const Oe=Ie[0],tt=c.convert(M.format,M.colorSpace),it=c.convert(M.type),ft=D(M.internalFormat,tt,it,M.normalized,M.colorSpace),K=M.isVideoTexture!==!0,Re=Ce.__version===void 0||de===!0,be=xe.dataReady;let Ue=O(M,Oe);Me(r.TEXTURE_CUBE_MAP,M);let He;if(Ne){K&&Re&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Ue,ft,Oe.width,Oe.height);for(let Ae=0;Ae<6;Ae++){He=Ie[Ae].mipmaps;for(let Qe=0;Qe<He.length;Qe++){const je=He[Qe];M.format!==Ii?tt!==null?K?be&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Qe,0,0,je.width,je.height,tt,je.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Qe,ft,je.width,je.height,0,je.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):K?be&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Qe,0,0,je.width,je.height,tt,it,je.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Qe,ft,je.width,je.height,0,tt,it,je.data)}}}else{if(He=M.mipmaps,K&&Re){He.length>0&&Ue++;const Ae=Ut(Ie[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Ue,ft,Ae.width,Ae.height)}for(let Ae=0;Ae<6;Ae++)if(Ve){K?be&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,Ie[Ae].width,Ie[Ae].height,tt,it,Ie[Ae].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,ft,Ie[Ae].width,Ie[Ae].height,0,tt,it,Ie[Ae].data);for(let Qe=0;Qe<He.length;Qe++){const nn=He[Qe].image[Ae].image;K?be&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Qe+1,0,0,nn.width,nn.height,tt,it,nn.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Qe+1,ft,nn.width,nn.height,0,tt,it,nn.data)}}else{K?be&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,tt,it,Ie[Ae]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,ft,tt,it,Ie[Ae]);for(let Qe=0;Qe<He.length;Qe++){const je=He[Qe];K?be&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Qe+1,0,0,tt,it,je.image[Ae]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Qe+1,ft,tt,it,je.image[Ae])}}}v(M)&&F(r.TEXTURE_CUBE_MAP),Ce.__version=xe.version,M.onUpdate&&M.onUpdate(M)}B.__version=M.version}function De(B,M,ie,de,xe,Ce){const Le=c.convert(ie.format,ie.colorSpace),ve=c.convert(ie.type),ye=D(ie.internalFormat,Le,ve,ie.normalized,ie.colorSpace),Ne=s.get(M),Ve=s.get(ie);if(Ve.__renderTarget=M,!Ne.__hasExternalTextures){const Ie=Math.max(1,M.width>>Ce),Oe=Math.max(1,M.height>>Ce);xe===r.TEXTURE_3D||xe===r.TEXTURE_2D_ARRAY?i.texImage3D(xe,Ce,ye,Ie,Oe,M.depth,0,Le,ve,null):i.texImage2D(xe,Ce,ye,Ie,Oe,0,Le,ve,null)}i.bindFramebuffer(r.FRAMEBUFFER,B),tn(M)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,de,xe,Ve.__webglTexture,0,Ot(M)):(xe===r.TEXTURE_2D||xe>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,de,xe,Ve.__webglTexture,Ce),i.bindFramebuffer(r.FRAMEBUFFER,null)}function nt(B,M,ie){if(r.bindRenderbuffer(r.RENDERBUFFER,B),M.depthBuffer){const de=M.depthTexture,xe=de&&de.isDepthTexture?de.type:null,Ce=V(M.stencilBuffer,xe),Le=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;tn(M)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ot(M),Ce,M.width,M.height):ie?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ot(M),Ce,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,Ce,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Le,r.RENDERBUFFER,B)}else{const de=M.textures;for(let xe=0;xe<de.length;xe++){const Ce=de[xe],Le=c.convert(Ce.format,Ce.colorSpace),ve=c.convert(Ce.type),ye=D(Ce.internalFormat,Le,ve,Ce.normalized,Ce.colorSpace);tn(M)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ot(M),ye,M.width,M.height):ie?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ot(M),ye,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,ye,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function $e(B,M,ie){const de=M.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,B),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const xe=s.get(M.depthTexture);if(xe.__renderTarget=M,(!xe.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),de){if(xe.__webglInit===void 0&&(xe.__webglInit=!0,M.depthTexture.addEventListener("dispose",L)),xe.__webglTexture===void 0){xe.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,xe.__webglTexture),Me(r.TEXTURE_CUBE_MAP,M.depthTexture);const Ne=c.convert(M.depthTexture.format),Ve=c.convert(M.depthTexture.type);let Ie;M.depthTexture.format===Na?Ie=r.DEPTH_COMPONENT24:M.depthTexture.format===js&&(Ie=r.DEPTH24_STENCIL8);for(let Oe=0;Oe<6;Oe++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,Ie,M.width,M.height,0,Ne,Ve,null)}}else Y(M.depthTexture,0);const Ce=xe.__webglTexture,Le=Ot(M),ve=de?r.TEXTURE_CUBE_MAP_POSITIVE_X+ie:r.TEXTURE_2D,ye=M.depthTexture.format===js?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(M.depthTexture.format===Na)tn(M)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ye,ve,Ce,0,Le):r.framebufferTexture2D(r.FRAMEBUFFER,ye,ve,Ce,0);else if(M.depthTexture.format===js)tn(M)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ye,ve,Ce,0,Le):r.framebufferTexture2D(r.FRAMEBUFFER,ye,ve,Ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ge(B){const M=s.get(B),ie=B.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==B.depthTexture){const de=B.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),de){const xe=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,de.removeEventListener("dispose",xe)};de.addEventListener("dispose",xe),M.__depthDisposeCallback=xe}M.__boundDepthTexture=de}if(B.depthTexture&&!M.__autoAllocateDepthBuffer)if(ie)for(let de=0;de<6;de++)$e(M.__webglFramebuffer[de],B,de);else{const de=B.texture.mipmaps;de&&de.length>0?$e(M.__webglFramebuffer[0],B,0):$e(M.__webglFramebuffer,B,0)}else if(ie){M.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(i.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[de]),M.__webglDepthbuffer[de]===void 0)M.__webglDepthbuffer[de]=r.createRenderbuffer(),nt(M.__webglDepthbuffer[de],B,!1);else{const xe=B.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ce=M.__webglDepthbuffer[de];r.bindRenderbuffer(r.RENDERBUFFER,Ce),r.framebufferRenderbuffer(r.FRAMEBUFFER,xe,r.RENDERBUFFER,Ce)}}else{const de=B.texture.mipmaps;if(de&&de.length>0?i.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),nt(M.__webglDepthbuffer,B,!1);else{const xe=B.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ce=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Ce),r.framebufferRenderbuffer(r.FRAMEBUFFER,xe,r.RENDERBUFFER,Ce)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function rt(B,M,ie){const de=s.get(B);M!==void 0&&De(de.__webglFramebuffer,B,B.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),ie!==void 0&&Ge(B)}function ot(B){const M=B.texture,ie=s.get(B),de=s.get(M);B.addEventListener("dispose",E);const xe=B.textures,Ce=B.isWebGLCubeRenderTarget===!0,Le=xe.length>1;if(Le||(de.__webglTexture===void 0&&(de.__webglTexture=r.createTexture()),de.__version=M.version,d.memory.textures++),Ce){ie.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(M.mipmaps&&M.mipmaps.length>0){ie.__webglFramebuffer[ve]=[];for(let ye=0;ye<M.mipmaps.length;ye++)ie.__webglFramebuffer[ve][ye]=r.createFramebuffer()}else ie.__webglFramebuffer[ve]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){ie.__webglFramebuffer=[];for(let ve=0;ve<M.mipmaps.length;ve++)ie.__webglFramebuffer[ve]=r.createFramebuffer()}else ie.__webglFramebuffer=r.createFramebuffer();if(Le)for(let ve=0,ye=xe.length;ve<ye;ve++){const Ne=s.get(xe[ve]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=r.createTexture(),d.memory.textures++)}if(B.samples>0&&tn(B)===!1){ie.__webglMultisampledFramebuffer=r.createFramebuffer(),ie.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,ie.__webglMultisampledFramebuffer);for(let ve=0;ve<xe.length;ve++){const ye=xe[ve];ie.__webglColorRenderbuffer[ve]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,ie.__webglColorRenderbuffer[ve]);const Ne=c.convert(ye.format,ye.colorSpace),Ve=c.convert(ye.type),Ie=D(ye.internalFormat,Ne,Ve,ye.normalized,ye.colorSpace,B.isXRRenderTarget===!0),Oe=Ot(B);r.renderbufferStorageMultisample(r.RENDERBUFFER,Oe,Ie,B.width,B.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ve,r.RENDERBUFFER,ie.__webglColorRenderbuffer[ve])}r.bindRenderbuffer(r.RENDERBUFFER,null),B.depthBuffer&&(ie.__webglDepthRenderbuffer=r.createRenderbuffer(),nt(ie.__webglDepthRenderbuffer,B,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Ce){i.bindTexture(r.TEXTURE_CUBE_MAP,de.__webglTexture),Me(r.TEXTURE_CUBE_MAP,M);for(let ve=0;ve<6;ve++)if(M.mipmaps&&M.mipmaps.length>0)for(let ye=0;ye<M.mipmaps.length;ye++)De(ie.__webglFramebuffer[ve][ye],B,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ye);else De(ie.__webglFramebuffer[ve],B,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);v(M)&&F(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Le){for(let ve=0,ye=xe.length;ve<ye;ve++){const Ne=xe[ve],Ve=s.get(Ne);let Ie=r.TEXTURE_2D;(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Ie=B.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ie,Ve.__webglTexture),Me(Ie,Ne),De(ie.__webglFramebuffer,B,Ne,r.COLOR_ATTACHMENT0+ve,Ie,0),v(Ne)&&F(Ie)}i.unbindTexture()}else{let ve=r.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(ve=B.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(ve,de.__webglTexture),Me(ve,M),M.mipmaps&&M.mipmaps.length>0)for(let ye=0;ye<M.mipmaps.length;ye++)De(ie.__webglFramebuffer[ye],B,M,r.COLOR_ATTACHMENT0,ve,ye);else De(ie.__webglFramebuffer,B,M,r.COLOR_ATTACHMENT0,ve,0);v(M)&&F(ve),i.unbindTexture()}B.depthBuffer&&Ge(B)}function qe(B){const M=B.textures;for(let ie=0,de=M.length;ie<de;ie++){const xe=M[ie];if(v(xe)){const Ce=P(B),Le=s.get(xe).__webglTexture;i.bindTexture(Ce,Le),F(Ce),i.unbindTexture()}}}const pt=[],lt=[];function yt(B){if(B.samples>0){if(tn(B)===!1){const M=B.textures,ie=B.width,de=B.height;let xe=r.COLOR_BUFFER_BIT;const Ce=B.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Le=s.get(B),ve=M.length>1;if(ve)for(let Ne=0;Ne<M.length;Ne++)i.bindFramebuffer(r.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ne,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Le.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ne,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer);const ye=B.texture.mipmaps;ye&&ye.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Ne=0;Ne<M.length;Ne++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(xe|=r.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(xe|=r.STENCIL_BUFFER_BIT)),ve){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Le.__webglColorRenderbuffer[Ne]);const Ve=s.get(M[Ne]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ve,0)}r.blitFramebuffer(0,0,ie,de,0,0,ie,de,xe,r.NEAREST),m===!0&&(pt.length=0,lt.length=0,pt.push(r.COLOR_ATTACHMENT0+Ne),B.depthBuffer&&B.resolveDepthBuffer===!1&&(pt.push(Ce),lt.push(Ce),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,lt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,pt))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ve)for(let Ne=0;Ne<M.length;Ne++){i.bindFramebuffer(r.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ne,r.RENDERBUFFER,Le.__webglColorRenderbuffer[Ne]);const Ve=s.get(M[Ne]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Le.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ne,r.TEXTURE_2D,Ve,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.resolveDepthBuffer===!1&&m){const M=B.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function Ot(B){return Math.min(l.maxSamples,B.samples)}function tn(B){const M=s.get(B);return B.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function $(B){const M=d.render.frame;_.get(B)!==M&&(_.set(B,M),B.update())}function Ft(B,M){const ie=B.colorSpace,de=B.format,xe=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||ie!==Zc&&ie!==fs&&(Nt.getTransfer(ie)===qt?(de!==Ii||xe!==mi)&&ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Lt("WebGLTextures: Unsupported texture color space:",ie)),M}function Ut(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(h.width=B.naturalWidth||B.width,h.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(h.width=B.displayWidth,h.height=B.displayHeight):(h.width=B.width,h.height=B.height),h}this.allocateTextureUnit=I,this.resetTextureUnits=Q,this.getTextureUnits=te,this.setTextureUnits=q,this.setTexture2D=Y,this.setTexture2DArray=ae,this.setTexture3D=H,this.setTextureCube=S,this.rebindTextures=rt,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=yt,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=De,this.useMultisampledRTT=tn,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function gA(r,e){function i(s,l=fs){let c;const d=Nt.getTransfer(l);if(s===mi)return r.UNSIGNED_BYTE;if(s===qh)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Yh)return r.UNSIGNED_SHORT_5_5_5_1;if(s===pv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===mv)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===dv)return r.BYTE;if(s===hv)return r.SHORT;if(s===nl)return r.UNSIGNED_SHORT;if(s===Wh)return r.INT;if(s===$i)return r.UNSIGNED_INT;if(s===Yi)return r.FLOAT;if(s===Ra)return r.HALF_FLOAT;if(s===gv)return r.ALPHA;if(s===xv)return r.RGB;if(s===Ii)return r.RGBA;if(s===Na)return r.DEPTH_COMPONENT;if(s===js)return r.DEPTH_STENCIL;if(s===vv)return r.RED;if(s===Zh)return r.RED_INTEGER;if(s===qs)return r.RG;if(s===Kh)return r.RG_INTEGER;if(s===Qh)return r.RGBA_INTEGER;if(s===Gc||s===Vc||s===kc||s===Xc)if(d===qt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Gc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Vc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Xc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Gc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Vc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===kc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Xc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===lh||s===ch||s===uh||s===fh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===lh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ch)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===uh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===fh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===dh||s===hh||s===ph||s===mh||s===gh||s===Wc||s===xh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===dh||s===hh)return d===qt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===ph)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===mh)return c.COMPRESSED_R11_EAC;if(s===gh)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Wc)return c.COMPRESSED_RG11_EAC;if(s===xh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===vh||s===_h||s===yh||s===Sh||s===bh||s===Mh||s===Eh||s===Th||s===Ah||s===wh||s===Ch||s===Rh||s===Nh||s===Dh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===vh)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===_h)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===yh)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Sh)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===bh)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Mh)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Eh)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Th)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ah)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===wh)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ch)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Rh)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Nh)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Dh)return d===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Uh||s===Lh||s===Oh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===Uh)return d===qt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Lh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Oh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Ph||s===Ih||s===qc||s===zh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===Ph)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Ih)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===qc)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===zh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===il?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const xA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class _A{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new Av(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new ea({vertexShader:xA,fragmentShader:vA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new dt(new tu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yA extends Ys{constructor(e,i){super();const s=this;let l=null,c=1,d=null,p="local-floor",m=1,h=null,_=null,y=null,g=null,T=null,A=null;const U=typeof XRWebGLBinding<"u",b=new _A,v={},F=i.getContextAttributes();let P=null,D=null;const V=[],O=[],L=new wt;let E=null;const N=new pi;N.viewport=new ln;const X=new pi;X.viewport=new ln;const G=[N,X],j=new Rb;let Q=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let se=V[J];return se===void 0&&(se=new Td,V[J]=se),se.getTargetRaySpace()},this.getControllerGrip=function(J){let se=V[J];return se===void 0&&(se=new Td,V[J]=se),se.getGripSpace()},this.getHand=function(J){let se=V[J];return se===void 0&&(se=new Td,V[J]=se),se.getHandSpace()};function q(J){const se=O.indexOf(J.inputSource);if(se===-1)return;const me=V[se];me!==void 0&&(me.update(J.inputSource,J.frame,h||d),me.dispatchEvent({type:J.type,data:J.inputSource}))}function I(){l.removeEventListener("select",q),l.removeEventListener("selectstart",q),l.removeEventListener("selectend",q),l.removeEventListener("squeeze",q),l.removeEventListener("squeezestart",q),l.removeEventListener("squeezeend",q),l.removeEventListener("end",I),l.removeEventListener("inputsourceschange",z);for(let J=0;J<V.length;J++){const se=O[J];se!==null&&(O[J]=null,V[J].disconnect(se))}Q=null,te=null,b.reset();for(const J in v)delete v[J];e.setRenderTarget(P),T=null,g=null,y=null,l=null,D=null,Me.stop(),s.isPresenting=!1,e.setPixelRatio(E),e.setSize(L.width,L.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){c=J,s.isPresenting===!0&&ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){p=J,s.isPresenting===!0&&ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||d},this.setReferenceSpace=function(J){h=J},this.getBaseLayer=function(){return g!==null?g:T},this.getBinding=function(){return y===null&&U&&(y=new XRWebGLBinding(l,i)),y},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(J){if(l=J,l!==null){if(P=e.getRenderTarget(),l.addEventListener("select",q),l.addEventListener("selectstart",q),l.addEventListener("selectend",q),l.addEventListener("squeeze",q),l.addEventListener("squeezestart",q),l.addEventListener("squeezeend",q),l.addEventListener("end",I),l.addEventListener("inputsourceschange",z),F.xrCompatible!==!0&&await i.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(L),U&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,we=null,Be=null;F.depth&&(Be=F.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,me=F.stencil?js:Na,we=F.stencil?il:$i);const De={colorFormat:i.RGBA8,depthFormat:Be,scaleFactor:c};y=this.getBinding(),g=y.createProjectionLayer(De),l.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),D=new Qi(g.textureWidth,g.textureHeight,{format:Ii,type:mi,depthTexture:new Yr(g.textureWidth,g.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:F.stencil,colorSpace:e.outputColorSpace,samples:F.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const me={antialias:F.antialias,alpha:!0,depth:F.depth,stencil:F.stencil,framebufferScaleFactor:c};T=new XRWebGLLayer(l,i,me),l.updateRenderState({baseLayer:T}),e.setPixelRatio(1),e.setSize(T.framebufferWidth,T.framebufferHeight,!1),D=new Qi(T.framebufferWidth,T.framebufferHeight,{format:Ii,type:mi,colorSpace:e.outputColorSpace,stencilBuffer:F.stencil,resolveDepthBuffer:T.ignoreDepthValues===!1,resolveStencilBuffer:T.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(m),h=null,d=await l.requestReferenceSpace(p),Me.setContext(l),Me.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function z(J){for(let se=0;se<J.removed.length;se++){const me=J.removed[se],we=O.indexOf(me);we>=0&&(O[we]=null,V[we].disconnect(me))}for(let se=0;se<J.added.length;se++){const me=J.added[se];let we=O.indexOf(me);if(we===-1){for(let De=0;De<V.length;De++)if(De>=O.length){O.push(me),we=De;break}else if(O[De]===null){O[De]=me,we=De;break}if(we===-1)break}const Be=V[we];Be&&Be.connect(me)}}const Y=new fe,ae=new fe;function H(J,se,me){Y.setFromMatrixPosition(se.matrixWorld),ae.setFromMatrixPosition(me.matrixWorld);const we=Y.distanceTo(ae),Be=se.projectionMatrix.elements,De=me.projectionMatrix.elements,nt=Be[14]/(Be[10]-1),$e=Be[14]/(Be[10]+1),Ge=(Be[9]+1)/Be[5],rt=(Be[9]-1)/Be[5],ot=(Be[8]-1)/Be[0],qe=(De[8]+1)/De[0],pt=nt*ot,lt=nt*qe,yt=we/(-ot+qe),Ot=yt*-ot;if(se.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ot),J.translateZ(yt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Be[10]===-1)J.projectionMatrix.copy(se.projectionMatrix),J.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const tn=nt+yt,$=$e+yt,Ft=pt-Ot,Ut=lt+(we-Ot),B=Ge*$e/$*tn,M=rt*$e/$*tn;J.projectionMatrix.makePerspective(Ft,Ut,B,M,tn,$),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function S(J,se){se===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(se.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(l===null)return;let se=J.near,me=J.far;b.texture!==null&&(b.depthNear>0&&(se=b.depthNear),b.depthFar>0&&(me=b.depthFar)),j.near=X.near=N.near=se,j.far=X.far=N.far=me,(Q!==j.near||te!==j.far)&&(l.updateRenderState({depthNear:j.near,depthFar:j.far}),Q=j.near,te=j.far),j.layers.mask=J.layers.mask|6,N.layers.mask=j.layers.mask&-5,X.layers.mask=j.layers.mask&-3;const we=J.parent,Be=j.cameras;S(j,we);for(let De=0;De<Be.length;De++)S(Be[De],we);Be.length===2?H(j,N,X):j.projectionMatrix.copy(N.projectionMatrix),k(J,j,we)};function k(J,se,me){me===null?J.matrix.copy(se.matrixWorld):(J.matrix.copy(me.matrixWorld),J.matrix.invert(),J.matrix.multiply(se.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(se.projectionMatrix),J.projectionMatrixInverse.copy(se.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Fh*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(g===null&&T===null))return m},this.setFoveation=function(J){m=J,g!==null&&(g.fixedFoveation=J),T!==null&&T.fixedFoveation!==void 0&&(T.fixedFoveation=J)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(j)},this.getCameraTexture=function(J){return v[J]};let re=null;function _e(J,se){if(_=se.getViewerPose(h||d),A=se,_!==null){const me=_.views;T!==null&&(e.setRenderTargetFramebuffer(D,T.framebuffer),e.setRenderTarget(D));let we=!1;me.length!==j.cameras.length&&(j.cameras.length=0,we=!0);for(let $e=0;$e<me.length;$e++){const Ge=me[$e];let rt=null;if(T!==null)rt=T.getViewport(Ge);else{const qe=y.getViewSubImage(g,Ge);rt=qe.viewport,$e===0&&(e.setRenderTargetTextures(D,qe.colorTexture,qe.depthStencilTexture),e.setRenderTarget(D))}let ot=G[$e];ot===void 0&&(ot=new pi,ot.layers.enable($e),ot.viewport=new ln,G[$e]=ot),ot.matrix.fromArray(Ge.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(Ge.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(rt.x,rt.y,rt.width,rt.height),$e===0&&(j.matrix.copy(ot.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),we===!0&&j.cameras.push(ot)}const Be=l.enabledFeatures;if(Be&&Be.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&U){y=s.getBinding();const $e=y.getDepthInformation(me[0]);$e&&$e.isValid&&$e.texture&&b.init($e,l.renderState)}if(Be&&Be.includes("camera-access")&&U){e.state.unbindTexture(),y=s.getBinding();for(let $e=0;$e<me.length;$e++){const Ge=me[$e].camera;if(Ge){let rt=v[Ge];rt||(rt=new Av,v[Ge]=rt);const ot=y.getCameraImage(Ge);rt.sourceTexture=ot}}}}for(let me=0;me<V.length;me++){const we=O[me],Be=V[me];we!==null&&Be!==void 0&&Be.update(we,se,h||d)}re&&re(J,se),se.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:se}),A=null}const Me=new Nv;Me.setAnimationLoop(_e),this.setAnimationLoop=function(J){re=J},this.dispose=function(){}}}const SA=new fn,zv=new gt;zv.set(-1,0,0,0,1,0,0,0,1);function bA(r,e){function i(b,v){b.matrixAutoUpdate===!0&&b.updateMatrix(),v.value.copy(b.matrix)}function s(b,v){v.color.getRGB(b.fogColor.value,wv(r)),v.isFog?(b.fogNear.value=v.near,b.fogFar.value=v.far):v.isFogExp2&&(b.fogDensity.value=v.density)}function l(b,v,F,P,D){v.isNodeMaterial?v.uniformsNeedUpdate=!1:v.isMeshBasicMaterial?c(b,v):v.isMeshLambertMaterial?(c(b,v),v.envMap&&(b.envMapIntensity.value=v.envMapIntensity)):v.isMeshToonMaterial?(c(b,v),y(b,v)):v.isMeshPhongMaterial?(c(b,v),_(b,v),v.envMap&&(b.envMapIntensity.value=v.envMapIntensity)):v.isMeshStandardMaterial?(c(b,v),g(b,v),v.isMeshPhysicalMaterial&&T(b,v,D)):v.isMeshMatcapMaterial?(c(b,v),A(b,v)):v.isMeshDepthMaterial?c(b,v):v.isMeshDistanceMaterial?(c(b,v),U(b,v)):v.isMeshNormalMaterial?c(b,v):v.isLineBasicMaterial?(d(b,v),v.isLineDashedMaterial&&p(b,v)):v.isPointsMaterial?m(b,v,F,P):v.isSpriteMaterial?h(b,v):v.isShadowMaterial?(b.color.value.copy(v.color),b.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(b,v){b.opacity.value=v.opacity,v.color&&b.diffuse.value.copy(v.color),v.emissive&&b.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(b.map.value=v.map,i(v.map,b.mapTransform)),v.alphaMap&&(b.alphaMap.value=v.alphaMap,i(v.alphaMap,b.alphaMapTransform)),v.bumpMap&&(b.bumpMap.value=v.bumpMap,i(v.bumpMap,b.bumpMapTransform),b.bumpScale.value=v.bumpScale,v.side===ei&&(b.bumpScale.value*=-1)),v.normalMap&&(b.normalMap.value=v.normalMap,i(v.normalMap,b.normalMapTransform),b.normalScale.value.copy(v.normalScale),v.side===ei&&b.normalScale.value.negate()),v.displacementMap&&(b.displacementMap.value=v.displacementMap,i(v.displacementMap,b.displacementMapTransform),b.displacementScale.value=v.displacementScale,b.displacementBias.value=v.displacementBias),v.emissiveMap&&(b.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,b.emissiveMapTransform)),v.specularMap&&(b.specularMap.value=v.specularMap,i(v.specularMap,b.specularMapTransform)),v.alphaTest>0&&(b.alphaTest.value=v.alphaTest);const F=e.get(v),P=F.envMap,D=F.envMapRotation;P&&(b.envMap.value=P,b.envMapRotation.value.setFromMatrix4(SA.makeRotationFromEuler(D)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&b.envMapRotation.value.premultiply(zv),b.reflectivity.value=v.reflectivity,b.ior.value=v.ior,b.refractionRatio.value=v.refractionRatio),v.lightMap&&(b.lightMap.value=v.lightMap,b.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,b.lightMapTransform)),v.aoMap&&(b.aoMap.value=v.aoMap,b.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,b.aoMapTransform))}function d(b,v){b.diffuse.value.copy(v.color),b.opacity.value=v.opacity,v.map&&(b.map.value=v.map,i(v.map,b.mapTransform))}function p(b,v){b.dashSize.value=v.dashSize,b.totalSize.value=v.dashSize+v.gapSize,b.scale.value=v.scale}function m(b,v,F,P){b.diffuse.value.copy(v.color),b.opacity.value=v.opacity,b.size.value=v.size*F,b.scale.value=P*.5,v.map&&(b.map.value=v.map,i(v.map,b.uvTransform)),v.alphaMap&&(b.alphaMap.value=v.alphaMap,i(v.alphaMap,b.alphaMapTransform)),v.alphaTest>0&&(b.alphaTest.value=v.alphaTest)}function h(b,v){b.diffuse.value.copy(v.color),b.opacity.value=v.opacity,b.rotation.value=v.rotation,v.map&&(b.map.value=v.map,i(v.map,b.mapTransform)),v.alphaMap&&(b.alphaMap.value=v.alphaMap,i(v.alphaMap,b.alphaMapTransform)),v.alphaTest>0&&(b.alphaTest.value=v.alphaTest)}function _(b,v){b.specular.value.copy(v.specular),b.shininess.value=Math.max(v.shininess,1e-4)}function y(b,v){v.gradientMap&&(b.gradientMap.value=v.gradientMap)}function g(b,v){b.metalness.value=v.metalness,v.metalnessMap&&(b.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,b.metalnessMapTransform)),b.roughness.value=v.roughness,v.roughnessMap&&(b.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,b.roughnessMapTransform)),v.envMap&&(b.envMapIntensity.value=v.envMapIntensity)}function T(b,v,F){b.ior.value=v.ior,v.sheen>0&&(b.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),b.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(b.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,b.sheenColorMapTransform)),v.sheenRoughnessMap&&(b.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,b.sheenRoughnessMapTransform))),v.clearcoat>0&&(b.clearcoat.value=v.clearcoat,b.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(b.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,b.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(b.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===ei&&b.clearcoatNormalScale.value.negate())),v.dispersion>0&&(b.dispersion.value=v.dispersion),v.iridescence>0&&(b.iridescence.value=v.iridescence,b.iridescenceIOR.value=v.iridescenceIOR,b.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(b.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,b.iridescenceMapTransform)),v.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),v.transmission>0&&(b.transmission.value=v.transmission,b.transmissionSamplerMap.value=F.texture,b.transmissionSamplerSize.value.set(F.width,F.height),v.transmissionMap&&(b.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,b.transmissionMapTransform)),b.thickness.value=v.thickness,v.thicknessMap&&(b.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=v.attenuationDistance,b.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(b.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(b.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=v.specularIntensity,b.specularColor.value.copy(v.specularColor),v.specularColorMap&&(b.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,b.specularColorMapTransform)),v.specularIntensityMap&&(b.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,b.specularIntensityMapTransform))}function A(b,v){v.matcap&&(b.matcap.value=v.matcap)}function U(b,v){const F=e.get(v).light;b.referencePosition.value.setFromMatrixPosition(F.matrixWorld),b.nearDistance.value=F.shadow.camera.near,b.farDistance.value=F.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function MA(r,e,i,s){let l={},c={},d=[];const p=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(D,V){const O=V.program;s.uniformBlockBinding(D,O)}function h(D,V){let O=l[D.id];O===void 0&&(b(D),O=_(D),l[D.id]=O,D.addEventListener("dispose",F));const L=V.program;s.updateUBOMapping(D,L);const E=e.render.frame;c[D.id]!==E&&(g(D),c[D.id]=E)}function _(D){const V=y();D.__bindingPointIndex=V;const O=r.createBuffer(),L=D.__size,E=D.usage;return r.bindBuffer(r.UNIFORM_BUFFER,O),r.bufferData(r.UNIFORM_BUFFER,L,E),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,V,O),O}function y(){for(let D=0;D<p;D++)if(d.indexOf(D)===-1)return d.push(D),D;return Lt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(D){const V=l[D.id],O=D.uniforms,L=D.__cache;r.bindBuffer(r.UNIFORM_BUFFER,V);for(let E=0,N=O.length;E<N;E++){const X=O[E];if(Array.isArray(X))for(let G=0,j=X.length;G<j;G++)T(X[G],E,G,L);else T(X,E,0,L)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function T(D,V,O,L){if(U(D,V,O,L)===!0){const E=D.__offset,N=D.value;if(Array.isArray(N)){let X=0;for(let G=0;G<N.length;G++){const j=N[G],Q=v(j);A(j,D.__data,X),typeof j!="number"&&typeof j!="boolean"&&!j.isMatrix3&&!ArrayBuffer.isView(j)&&(X+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}}else A(N,D.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,E,D.__data)}}function A(D,V,O){typeof D=="number"||typeof D=="boolean"?V[0]=D:D.isMatrix3?(V[0]=D.elements[0],V[1]=D.elements[1],V[2]=D.elements[2],V[3]=0,V[4]=D.elements[3],V[5]=D.elements[4],V[6]=D.elements[5],V[7]=0,V[8]=D.elements[6],V[9]=D.elements[7],V[10]=D.elements[8],V[11]=0):ArrayBuffer.isView(D)?V.set(new D.constructor(D.buffer,D.byteOffset,V.length)):D.toArray(V,O)}function U(D,V,O,L){const E=D.value,N=V+"_"+O;if(L[N]===void 0)return typeof E=="number"||typeof E=="boolean"?L[N]=E:ArrayBuffer.isView(E)?L[N]=E.slice():L[N]=E.clone(),!0;{const X=L[N];if(typeof E=="number"||typeof E=="boolean"){if(X!==E)return L[N]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(X.equals(E)===!1)return X.copy(E),!0}}return!1}function b(D){const V=D.uniforms;let O=0;const L=16;for(let N=0,X=V.length;N<X;N++){const G=Array.isArray(V[N])?V[N]:[V[N]];for(let j=0,Q=G.length;j<Q;j++){const te=G[j],q=Array.isArray(te.value)?te.value:[te.value];for(let I=0,z=q.length;I<z;I++){const Y=q[I],ae=v(Y),H=O%L,S=H%ae.boundary,k=H+S;O+=S,k!==0&&L-k<ae.storage&&(O+=L-k),te.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=O,O+=ae.storage}}}const E=O%L;return E>0&&(O+=L-E),D.__size=O,D.__cache={},this}function v(D){const V={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(V.boundary=4,V.storage=4):D.isVector2?(V.boundary=8,V.storage=8):D.isVector3||D.isColor?(V.boundary=16,V.storage=12):D.isVector4?(V.boundary=16,V.storage=16):D.isMatrix3?(V.boundary=48,V.storage=48):D.isMatrix4?(V.boundary=64,V.storage=64):D.isTexture?ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(D)?(V.boundary=16,V.storage=D.byteLength):ut("WebGLRenderer: Unsupported uniform value type.",D),V}function F(D){const V=D.target;V.removeEventListener("dispose",F);const O=d.indexOf(V.__bindingPointIndex);d.splice(O,1),r.deleteBuffer(l[V.id]),delete l[V.id],delete c[V.id]}function P(){for(const D in l)r.deleteBuffer(l[D]);d=[],l={},c={}}return{bind:m,update:h,dispose:P}}const EA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ji=null;function TA(){return ji===null&&(ji=new cb(EA,16,16,qs,Ra),ji.name="DFG_LUT",ji.minFilter=Gn,ji.magFilter=Gn,ji.wrapS=Aa,ji.wrapT=Aa,ji.generateMipmaps=!1,ji.needsUpdate=!0),ji}class AA{constructor(e={}){const{canvas:i=BS(),context:s=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:y=!1,reversedDepthBuffer:g=!1,outputBufferType:T=mi}=e;this.isWebGLRenderer=!0;let A;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=s.getContextAttributes().alpha}else A=d;const U=T,b=new Set([Qh,Kh,Zh]),v=new Set([mi,$i,nl,il,qh,Yh]),F=new Uint32Array(4),P=new Int32Array(4),D=new fe;let V=null,O=null;const L=[],E=[];let N=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const X=this;let G=!1,j=null,Q=null,te=null,q=null;this._outputColorSpace=Ti;let I=0,z=0,Y=null,ae=-1,H=null;const S=new ln,k=new ln;let re=null;const _e=new ht(0);let Me=0,J=i.width,se=i.height,me=1,we=null,Be=null;const De=new ln(0,0,J,se),nt=new ln(0,0,J,se);let $e=!1;const Ge=new np;let rt=!1,ot=!1;const qe=new fn,pt=new fe,lt=new ln,yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ot=!1;function tn(){return Y===null?me:1}let $=s;function Ft(C,ee){return i.getContext(C,ee)}try{const C={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:_,failIfMajorPerformanceCaveat:y};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Xh}`),i.addEventListener("webglcontextlost",nn,!1),i.addEventListener("webglcontextrestored",Gt,!1),i.addEventListener("webglcontextcreationerror",ti,!1),$===null){const ee="webgl2";if($=Ft(ee,C),$===null)throw Ft(ee)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(C){throw Lt("WebGLRenderer: "+C.message),C}let Ut,B,M,ie,de,xe,Ce,Le,ve,ye,Ne,Ve,Ie,Oe,tt,it,ft,K,Re,be,Ue,He,Ae;function Qe(){Ut=new TE($),Ut.init(),Ue=new gA($,Ut),B=new xE($,Ut,e,Ue),M=new pA($,Ut),B.reversedDepthBuffer&&g&&M.buffers.depth.setReversed(!0),Q=$.createFramebuffer(),te=$.createFramebuffer(),q=$.createFramebuffer(),ie=new CE($),de=new eA,xe=new mA($,Ut,M,de,B,Ue,ie),Ce=new EE(X),Le=new Ub($),He=new mE($,Le),ve=new AE($,Le,ie,He),ye=new NE($,ve,Le,He,ie),K=new RE($,B,xe),tt=new vE(de),Ne=new $T(X,Ce,Ut,B,He,tt),Ve=new bA(X,de),Ie=new nA,Oe=new lA(Ut),ft=new pE(X,Ce,M,ye,A,m),it=new hA(X,ye,B),Ae=new MA($,ie,B,M),Re=new gE($,Ut,ie),be=new wE($,Ut,ie),ie.programs=Ne.programs,X.capabilities=B,X.extensions=Ut,X.properties=de,X.renderLists=Ie,X.shadowMap=it,X.state=M,X.info=ie}Qe(),U!==mi&&(N=new UE(U,i.width,i.height,p,l,c));const je=new yA(X,$);this.xr=je,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const C=Ut.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ut.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(C){C!==void 0&&(me=C,this.setSize(J,se,!1))},this.getSize=function(C){return C.set(J,se)},this.setSize=function(C,ee,he=!0){if(je.isPresenting){ut("WebGLRenderer: Can't change size while VR device is presenting.");return}J=C,se=ee,i.width=Math.floor(C*me),i.height=Math.floor(ee*me),he===!0&&(i.style.width=C+"px",i.style.height=ee+"px"),N!==null&&N.setSize(i.width,i.height),this.setViewport(0,0,C,ee)},this.getDrawingBufferSize=function(C){return C.set(J*me,se*me).floor()},this.setDrawingBufferSize=function(C,ee,he){J=C,se=ee,me=he,i.width=Math.floor(C*he),i.height=Math.floor(ee*he),this.setViewport(0,0,C,ee)},this.setEffects=function(C){if(U===mi){Lt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let ee=0;ee<C.length;ee++)if(C[ee].isOutputPass===!0){ut("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(S)},this.getViewport=function(C){return C.copy(De)},this.setViewport=function(C,ee,he,ce){C.isVector4?De.set(C.x,C.y,C.z,C.w):De.set(C,ee,he,ce),M.viewport(S.copy(De).multiplyScalar(me).round())},this.getScissor=function(C){return C.copy(nt)},this.setScissor=function(C,ee,he,ce){C.isVector4?nt.set(C.x,C.y,C.z,C.w):nt.set(C,ee,he,ce),M.scissor(k.copy(nt).multiplyScalar(me).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(C){M.setScissorTest($e=C)},this.setOpaqueSort=function(C){we=C},this.setTransparentSort=function(C){Be=C},this.getClearColor=function(C){return C.copy(ft.getClearColor())},this.setClearColor=function(){ft.setClearColor(...arguments)},this.getClearAlpha=function(){return ft.getClearAlpha()},this.setClearAlpha=function(){ft.setClearAlpha(...arguments)},this.clear=function(C=!0,ee=!0,he=!0){let ce=0;if(C){let ue=!1;if(Y!==null){const ze=Y.texture.format;ue=b.has(ze)}if(ue){const ze=Y.texture.type,Xe=v.has(ze),Pe=ft.getClearColor(),Ye=ft.getClearAlpha(),We=Pe.r,at=Pe.g,xt=Pe.b;Xe?(F[0]=We,F[1]=at,F[2]=xt,F[3]=Ye,$.clearBufferuiv($.COLOR,0,F)):(P[0]=We,P[1]=at,P[2]=xt,P[3]=Ye,$.clearBufferiv($.COLOR,0,P))}else ce|=$.COLOR_BUFFER_BIT}ee&&(ce|=$.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),he&&(ce|=$.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ce!==0&&$.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),j=C},this.dispose=function(){i.removeEventListener("webglcontextlost",nn,!1),i.removeEventListener("webglcontextrestored",Gt,!1),i.removeEventListener("webglcontextcreationerror",ti,!1),ft.dispose(),Ie.dispose(),Oe.dispose(),de.dispose(),Ce.dispose(),ye.dispose(),He.dispose(),Ae.dispose(),Ne.dispose(),je.dispose(),je.removeEventListener("sessionstart",mn),je.removeEventListener("sessionend",Cn),Wn.stop()};function nn(C){C.preventDefault(),lx("WebGLRenderer: Context Lost."),G=!0}function Gt(){lx("WebGLRenderer: Context Restored."),G=!1;const C=ie.autoReset,ee=it.enabled,he=it.autoUpdate,ce=it.needsUpdate,ue=it.type;Qe(),ie.autoReset=C,it.enabled=ee,it.autoUpdate=he,it.needsUpdate=ce,it.type=ue}function ti(C){Lt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ni(C){const ee=C.target;ee.removeEventListener("dispose",ni),eo(ee)}function eo(C){to(C),de.remove(C)}function to(C){const ee=de.get(C).programs;ee!==void 0&&(ee.forEach(function(he){Ne.releaseProgram(he)}),C.isShaderMaterial&&Ne.releaseShaderCache(C))}this.renderBufferDirect=function(C,ee,he,ce,ue,ze){ee===null&&(ee=yt);const Xe=ue.isMesh&&ue.matrixWorld.determinantAffine()<0,Pe=Oa(C,ee,he,ce,ue);M.setMaterial(ce,Xe);let Ye=he.index,We=1;if(ce.wireframe===!0){if(Ye=ve.getWireframeAttribute(he),Ye===void 0)return;We=2}const at=he.drawRange,xt=he.attributes.position;let et=at.start*We,Pt=(at.start+at.count)*We;ze!==null&&(et=Math.max(et,ze.start*We),Pt=Math.min(Pt,(ze.start+ze.count)*We)),Ye!==null?(et=Math.max(et,0),Pt=Math.min(Pt,Ye.count)):xt!=null&&(et=Math.max(et,0),Pt=Math.min(Pt,xt.count));const an=Pt-et;if(an<0||an===1/0)return;He.setup(ue,ce,Pe,he,Ye);let Qt,Vt=Re;if(Ye!==null&&(Qt=Le.get(Ye),Vt=be,Vt.setIndex(Qt)),ue.isMesh)ce.wireframe===!0?(M.setLineWidth(ce.wireframeLinewidth*tn()),Vt.setMode($.LINES)):Vt.setMode($.TRIANGLES);else if(ue.isLine){let kt=ce.linewidth;kt===void 0&&(kt=1),M.setLineWidth(kt*tn()),ue.isLineSegments?Vt.setMode($.LINES):ue.isLineLoop?Vt.setMode($.LINE_LOOP):Vt.setMode($.LINE_STRIP)}else ue.isPoints?Vt.setMode($.POINTS):ue.isSprite&&Vt.setMode($.TRIANGLES);if(ue.isBatchedMesh)if(Ut.get("WEBGL_multi_draw"))Vt.renderMultiDraw(ue._multiDrawStarts,ue._multiDrawCounts,ue._multiDrawCount);else{const kt=ue._multiDrawStarts,ke=ue._multiDrawCounts,zn=ue._multiDrawCount,bt=Ye?Le.get(Ye).bytesPerElement:1,bn=de.get(ce).currentProgram.getUniforms();for(let ii=0;ii<zn;ii++)bn.setValue($,"_gl_DrawID",ii),Vt.render(kt[ii]/bt,ke[ii])}else if(ue.isInstancedMesh)Vt.renderInstances(et,an,ue.count);else if(he.isInstancedBufferGeometry){const kt=he._maxInstanceCount!==void 0?he._maxInstanceCount:1/0,ke=Math.min(he.instanceCount,kt);Vt.renderInstances(et,an,ke)}else Vt.render(et,an)};function no(C,ee,he){C.transparent===!0&&C.side===Ta&&C.forceSinglePass===!1?(C.side=ei,C.needsUpdate=!0,La(C,ee,he),C.side=hs,C.needsUpdate=!0,La(C,ee,he),C.side=Ta):La(C,ee,he)}this.compile=function(C,ee,he=null){he===null&&(he=C),O=Oe.get(he),O.init(ee),E.push(O),he.traverseVisible(function(ue){ue.isLight&&ue.layers.test(ee.layers)&&(O.pushLight(ue),ue.castShadow&&O.pushShadow(ue))}),C!==he&&C.traverseVisible(function(ue){ue.isLight&&ue.layers.test(ee.layers)&&(O.pushLight(ue),ue.castShadow&&O.pushShadow(ue))}),O.setupLights();const ce=new Set;return C.traverse(function(ue){if(!(ue.isMesh||ue.isPoints||ue.isLine||ue.isSprite))return;const ze=ue.material;if(ze)if(Array.isArray(ze))for(let Xe=0;Xe<ze.length;Xe++){const Pe=ze[Xe];no(Pe,he,ue),ce.add(Pe)}else no(ze,he,ue),ce.add(ze)}),O=E.pop(),ce},this.compileAsync=function(C,ee,he=null){const ce=this.compile(C,ee,he);return new Promise(ue=>{function ze(){if(ce.forEach(function(Xe){de.get(Xe).currentProgram.isReady()&&ce.delete(Xe)}),ce.size===0){ue(C);return}setTimeout(ze,10)}Ut.get("KHR_parallel_shader_compile")!==null?ze():setTimeout(ze,10)})};let Zs=null;function Fi(C){Zs&&Zs(C)}function mn(){Wn.stop()}function Cn(){Wn.start()}const Wn=new Nv;Wn.setAnimationLoop(Fi),typeof self<"u"&&Wn.setContext(self),this.setAnimationLoop=function(C){Zs=C,je.setAnimationLoop(C),C===null?Wn.stop():Wn.start()},je.addEventListener("sessionstart",mn),je.addEventListener("sessionend",Cn),this.render=function(C,ee){if(ee!==void 0&&ee.isCamera!==!0){Lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;j!==null&&j.renderStart(C,ee);const he=je.enabled===!0&&je.isPresenting===!0,ce=N!==null&&(Y===null||he)&&N.begin(X,Y);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),ee.parent===null&&ee.matrixWorldAutoUpdate===!0&&ee.updateMatrixWorld(),je.enabled===!0&&je.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(je.cameraAutoUpdate===!0&&je.updateCamera(ee),ee=je.getCamera()),C.isScene===!0&&C.onBeforeRender(X,C,ee,Y),O=Oe.get(C,E.length),O.init(ee),O.state.textureUnits=xe.getTextureUnits(),E.push(O),qe.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),Ge.setFromProjectionMatrix(qe,Zi,ee.reversedDepth),ot=this.localClippingEnabled,rt=tt.init(this.clippingPlanes,ot),V=Ie.get(C,L.length),V.init(),L.push(V),je.enabled===!0&&je.isPresenting===!0){const Xe=X.xr.getDepthSensingMesh();Xe!==null&&ps(Xe,ee,-1/0,X.sortObjects)}ps(C,ee,0,X.sortObjects),V.finish(),X.sortObjects===!0&&V.sort(we,Be,ee.reversedDepth),Ot=je.enabled===!1||je.isPresenting===!1||je.hasDepthSensing()===!1,Ot&&ft.addToRenderList(V,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),rt===!0&&tt.beginShadows();const ue=O.state.shadowsArray;if(it.render(ue,C,ee),rt===!0&&tt.endShadows(),(ce&&N.hasRenderPass())===!1){const Xe=V.opaque,Pe=V.transmissive;if(O.setupLights(),ee.isArrayCamera){const Ye=ee.cameras;if(Pe.length>0)for(let We=0,at=Ye.length;We<at;We++){const xt=Ye[We];ll(Xe,Pe,C,xt)}Ot&&ft.render(C);for(let We=0,at=Ye.length;We<at;We++){const xt=Ye[We];ol(V,C,xt,xt.viewport)}}else Pe.length>0&&ll(Xe,Pe,C,ee),Ot&&ft.render(C),ol(V,C,ee)}Y!==null&&z===0&&(xe.updateMultisampleRenderTarget(Y),xe.updateRenderTargetMipmap(Y)),ce&&N.end(X),C.isScene===!0&&C.onAfterRender(X,C,ee),He.resetDefaultState(),ae=-1,H=null,E.pop(),E.length>0?(O=E[E.length-1],xe.setTextureUnits(O.state.textureUnits),rt===!0&&tt.setGlobalState(X.clippingPlanes,O.state.camera)):O=null,L.pop(),L.length>0?V=L[L.length-1]:V=null,j!==null&&j.renderEnd()};function ps(C,ee,he,ce){if(C.visible===!1)return;if(C.layers.test(ee.layers)){if(C.isGroup)he=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(ee);else if(C.isLightProbeGrid)O.pushLightProbeGrid(C);else if(C.isLight)O.pushLight(C),C.castShadow&&O.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Ge.intersectsSprite(C)){ce&&lt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(qe);const Xe=ye.update(C),Pe=C.material;Pe.visible&&V.push(C,Xe,Pe,he,lt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Ge.intersectsObject(C))){const Xe=ye.update(C),Pe=C.material;if(ce&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),lt.copy(C.boundingSphere.center)):(Xe.boundingSphere===null&&Xe.computeBoundingSphere(),lt.copy(Xe.boundingSphere.center)),lt.applyMatrix4(C.matrixWorld).applyMatrix4(qe)),Array.isArray(Pe)){const Ye=Xe.groups;for(let We=0,at=Ye.length;We<at;We++){const xt=Ye[We],et=Pe[xt.materialIndex];et&&et.visible&&V.push(C,Xe,et,he,lt.z,xt)}}else Pe.visible&&V.push(C,Xe,Pe,he,lt.z,null)}}const ze=C.children;for(let Xe=0,Pe=ze.length;Xe<Pe;Xe++)ps(ze[Xe],ee,he,ce)}function ol(C,ee,he,ce){const{opaque:ue,transmissive:ze,transparent:Xe}=C;O.setupLightsView(he),rt===!0&&tt.setGlobalState(X.clippingPlanes,he),ce&&M.viewport(S.copy(ce)),ue.length>0&&ms(ue,ee,he),ze.length>0&&ms(ze,ee,he),Xe.length>0&&ms(Xe,ee,he),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function ll(C,ee,he,ce){if((he.isScene===!0?he.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[ce.id]===void 0){const et=Ut.has("EXT_color_buffer_half_float")||Ut.has("EXT_color_buffer_float");O.state.transmissionRenderTarget[ce.id]=new Qi(1,1,{generateMipmaps:!0,type:et?Ra:mi,minFilter:Xs,samples:Math.max(4,B.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Nt.workingColorSpace})}const ze=O.state.transmissionRenderTarget[ce.id],Xe=ce.viewport||S;ze.setSize(Xe.z*X.transmissionResolutionScale,Xe.w*X.transmissionResolutionScale);const Pe=X.getRenderTarget(),Ye=X.getActiveCubeFace(),We=X.getActiveMipmapLevel();X.setRenderTarget(ze),X.getClearColor(_e),Me=X.getClearAlpha(),Me<1&&X.setClearColor(16777215,.5),X.clear(),Ot&&ft.render(he);const at=X.toneMapping;X.toneMapping=Ki;const xt=ce.viewport;if(ce.viewport!==void 0&&(ce.viewport=void 0),O.setupLightsView(ce),rt===!0&&tt.setGlobalState(X.clippingPlanes,ce),ms(C,he,ce),xe.updateMultisampleRenderTarget(ze),xe.updateRenderTargetMipmap(ze),Ut.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let Pt=0,an=ee.length;Pt<an;Pt++){const Qt=ee[Pt],{object:Vt,geometry:kt,material:ke,group:zn}=Qt;if(ke.side===Ta&&Vt.layers.test(ce.layers)){const bt=ke.side;ke.side=ei,ke.needsUpdate=!0,Ua(Vt,he,ce,kt,ke,zn),ke.side=bt,ke.needsUpdate=!0,et=!0}}et===!0&&(xe.updateMultisampleRenderTarget(ze),xe.updateRenderTargetMipmap(ze))}X.setRenderTarget(Pe,Ye,We),X.setClearColor(_e,Me),xt!==void 0&&(ce.viewport=xt),X.toneMapping=at}function ms(C,ee,he){const ce=ee.isScene===!0?ee.overrideMaterial:null;for(let ue=0,ze=C.length;ue<ze;ue++){const Xe=C[ue],{object:Pe,geometry:Ye,group:We}=Xe;let at=Xe.material;at.allowOverride===!0&&ce!==null&&(at=ce),Pe.layers.test(he.layers)&&Ua(Pe,ee,he,Ye,at,We)}}function Ua(C,ee,he,ce,ue,ze){C.onBeforeRender(X,ee,he,ce,ue,ze),C.modelViewMatrix.multiplyMatrices(he.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ue.onBeforeRender(X,ee,he,ce,C,ze),ue.transparent===!0&&ue.side===Ta&&ue.forceSinglePass===!1?(ue.side=ei,ue.needsUpdate=!0,X.renderBufferDirect(he,ee,ce,ue,C,ze),ue.side=hs,ue.needsUpdate=!0,X.renderBufferDirect(he,ee,ce,ue,C,ze),ue.side=Ta):X.renderBufferDirect(he,ee,ce,ue,C,ze),C.onAfterRender(X,ee,he,ce,ue,ze)}function La(C,ee,he){ee.isScene!==!0&&(ee=yt);const ce=de.get(C),ue=O.state.lights,ze=O.state.shadowsArray,Xe=ue.state.version,Pe=Ne.getParameters(C,ue.state,ze,ee,he,O.state.lightProbeGridArray),Ye=Ne.getProgramCacheKey(Pe);let We=ce.programs;ce.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?ee.environment:null,ce.fog=ee.fog;const at=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;ce.envMap=Ce.get(C.envMap||ce.environment,at),ce.envMapRotation=ce.environment!==null&&C.envMap===null?ee.environmentRotation:C.envMapRotation,We===void 0&&(C.addEventListener("dispose",ni),We=new Map,ce.programs=We);let xt=We.get(Ye);if(xt!==void 0){if(ce.currentProgram===xt&&ce.lightsStateVersion===Xe)return na(C,Pe),xt}else Pe.uniforms=Ne.getUniforms(C),j!==null&&C.isNodeMaterial&&j.build(C,he,Pe),C.onBeforeCompile(Pe,X),xt=Ne.acquireProgram(Pe,Ye),We.set(Ye,xt),ce.uniforms=Pe.uniforms;const et=ce.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(et.clippingPlanes=tt.uniform),na(C,Pe),ce.needsLights=cl(C),ce.lightsStateVersion=Xe,ce.needsLights&&(et.ambientLightColor.value=ue.state.ambient,et.lightProbe.value=ue.state.probe,et.directionalLights.value=ue.state.directional,et.directionalLightShadows.value=ue.state.directionalShadow,et.spotLights.value=ue.state.spot,et.spotLightShadows.value=ue.state.spotShadow,et.rectAreaLights.value=ue.state.rectArea,et.ltc_1.value=ue.state.rectAreaLTC1,et.ltc_2.value=ue.state.rectAreaLTC2,et.pointLights.value=ue.state.point,et.pointLightShadows.value=ue.state.pointShadow,et.hemisphereLights.value=ue.state.hemi,et.directionalShadowMatrix.value=ue.state.directionalShadowMatrix,et.spotLightMatrix.value=ue.state.spotLightMatrix,et.spotLightMap.value=ue.state.spotLightMap,et.pointShadowMatrix.value=ue.state.pointShadowMatrix),ce.lightProbeGrid=O.state.lightProbeGridArray.length>0,ce.currentProgram=xt,ce.uniformsList=null,xt}function ta(C){if(C.uniformsList===null){const ee=C.currentProgram.getUniforms();C.uniformsList=jc.seqWithValue(ee.seq,C.uniforms)}return C.uniformsList}function na(C,ee){const he=de.get(C);he.outputColorSpace=ee.outputColorSpace,he.batching=ee.batching,he.batchingColor=ee.batchingColor,he.instancing=ee.instancing,he.instancingColor=ee.instancingColor,he.instancingMorph=ee.instancingMorph,he.skinning=ee.skinning,he.morphTargets=ee.morphTargets,he.morphNormals=ee.morphNormals,he.morphColors=ee.morphColors,he.morphTargetsCount=ee.morphTargetsCount,he.numClippingPlanes=ee.numClippingPlanes,he.numIntersection=ee.numClipIntersection,he.vertexAlphas=ee.vertexAlphas,he.vertexTangents=ee.vertexTangents,he.toneMapping=ee.toneMapping}function gs(C,ee){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;D.setFromMatrixPosition(ee.matrixWorld);for(let he=0,ce=C.length;he<ce;he++){const ue=C[he];if(ue.texture!==null&&ue.boundingBox.containsPoint(D))return ue}return null}function Oa(C,ee,he,ce,ue){ee.isScene!==!0&&(ee=yt),xe.resetTextureUnits();const ze=ee.fog,Xe=ce.isMeshStandardMaterial||ce.isMeshLambertMaterial||ce.isMeshPhongMaterial?ee.environment:null,Pe=Y===null?X.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Nt.workingColorSpace,Ye=ce.isMeshStandardMaterial||ce.isMeshLambertMaterial&&!ce.envMap||ce.isMeshPhongMaterial&&!ce.envMap,We=Ce.get(ce.envMap||Xe,Ye),at=ce.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,xt=!!he.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),et=!!he.morphAttributes.position,Pt=!!he.morphAttributes.normal,an=!!he.morphAttributes.color;let Qt=Ki;ce.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Qt=X.toneMapping);const Vt=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,kt=Vt!==void 0?Vt.length:0,ke=de.get(ce),zn=O.state.lights;if(rt===!0&&(ot===!0||C!==H)){const Ht=C===H&&ce.id===ae;tt.setState(ce,C,Ht)}let bt=!1;ce.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==zn.state.version||ke.outputColorSpace!==Pe||ue.isBatchedMesh&&ke.batching===!1||!ue.isBatchedMesh&&ke.batching===!0||ue.isBatchedMesh&&ke.batchingColor===!0&&ue.colorTexture===null||ue.isBatchedMesh&&ke.batchingColor===!1&&ue.colorTexture!==null||ue.isInstancedMesh&&ke.instancing===!1||!ue.isInstancedMesh&&ke.instancing===!0||ue.isSkinnedMesh&&ke.skinning===!1||!ue.isSkinnedMesh&&ke.skinning===!0||ue.isInstancedMesh&&ke.instancingColor===!0&&ue.instanceColor===null||ue.isInstancedMesh&&ke.instancingColor===!1&&ue.instanceColor!==null||ue.isInstancedMesh&&ke.instancingMorph===!0&&ue.morphTexture===null||ue.isInstancedMesh&&ke.instancingMorph===!1&&ue.morphTexture!==null||ke.envMap!==We||ce.fog===!0&&ke.fog!==ze||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==tt.numPlanes||ke.numIntersection!==tt.numIntersection)||ke.vertexAlphas!==at||ke.vertexTangents!==xt||ke.morphTargets!==et||ke.morphNormals!==Pt||ke.morphColors!==an||ke.toneMapping!==Qt||ke.morphTargetsCount!==kt||!!ke.lightProbeGrid!=O.state.lightProbeGridArray.length>0)&&(bt=!0):(bt=!0,ke.__version=ce.version);let bn=ke.currentProgram;bt===!0&&(bn=La(ce,ee,ue),j&&ce.isNodeMaterial&&j.onUpdateProgram(ce,bn,ke));let ii=!1,Ai=!1,ai=!1;const Xt=bn.getUniforms(),sn=ke.uniforms;if(M.useProgram(bn.program)&&(ii=!0,Ai=!0,ai=!0),ce.id!==ae&&(ae=ce.id,Ai=!0),ke.needsLights){const Ht=gs(O.state.lightProbeGridArray,ue);ke.lightProbeGrid!==Ht&&(ke.lightProbeGrid=Ht,Ai=!0)}if(ii||H!==C){M.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Xt.setValue($,"projectionMatrix",C.projectionMatrix),Xt.setValue($,"viewMatrix",C.matrixWorldInverse);const Bi=Xt.map.cameraPosition;Bi!==void 0&&Bi.setValue($,pt.setFromMatrixPosition(C.matrixWorld)),B.logarithmicDepthBuffer&&Xt.setValue($,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&Xt.setValue($,"isOrthographic",C.isOrthographicCamera===!0),H!==C&&(H=C,Ai=!0,ai=!0)}if(ke.needsLights&&(zn.state.directionalShadowMap.length>0&&Xt.setValue($,"directionalShadowMap",zn.state.directionalShadowMap,xe),zn.state.spotShadowMap.length>0&&Xt.setValue($,"spotShadowMap",zn.state.spotShadowMap,xe),zn.state.pointShadowMap.length>0&&Xt.setValue($,"pointShadowMap",zn.state.pointShadowMap,xe)),ue.isSkinnedMesh){Xt.setOptional($,ue,"bindMatrix"),Xt.setOptional($,ue,"bindMatrixInverse");const Ht=ue.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),Xt.setValue($,"boneTexture",Ht.boneTexture,xe))}ue.isBatchedMesh&&(Xt.setOptional($,ue,"batchingTexture"),Xt.setValue($,"batchingTexture",ue._matricesTexture,xe),Xt.setOptional($,ue,"batchingIdTexture"),Xt.setValue($,"batchingIdTexture",ue._indirectTexture,xe),Xt.setOptional($,ue,"batchingColorTexture"),ue._colorsTexture!==null&&Xt.setValue($,"batchingColorTexture",ue._colorsTexture,xe));const wi=he.morphAttributes;if((wi.position!==void 0||wi.normal!==void 0||wi.color!==void 0)&&K.update(ue,he,bn),(Ai||ke.receiveShadow!==ue.receiveShadow)&&(ke.receiveShadow=ue.receiveShadow,Xt.setValue($,"receiveShadow",ue.receiveShadow)),(ce.isMeshStandardMaterial||ce.isMeshLambertMaterial||ce.isMeshPhongMaterial)&&ce.envMap===null&&ee.environment!==null&&(sn.envMapIntensity.value=ee.environmentIntensity),sn.dfgLUT!==void 0&&(sn.dfgLUT.value=TA()),Ai){if(Xt.setValue($,"toneMappingExposure",X.toneMappingExposure),ke.needsLights&&gn(sn,ai),ze&&ce.fog===!0&&Ve.refreshFogUniforms(sn,ze),Ve.refreshMaterialUniforms(sn,ce,me,se,O.state.transmissionRenderTarget[C.id]),ke.needsLights&&ke.lightProbeGrid){const Ht=ke.lightProbeGrid;sn.probesSH.value=Ht.texture,sn.probesMin.value.copy(Ht.boundingBox.min),sn.probesMax.value.copy(Ht.boundingBox.max),sn.probesResolution.value.copy(Ht.resolution)}jc.upload($,ta(ke),sn,xe)}if(ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(jc.upload($,ta(ke),sn,xe),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&Xt.setValue($,"center",ue.center),Xt.setValue($,"modelViewMatrix",ue.modelViewMatrix),Xt.setValue($,"normalMatrix",ue.normalMatrix),Xt.setValue($,"modelMatrix",ue.matrixWorld),ce.uniformsGroups!==void 0){const Ht=ce.uniformsGroups;for(let Bi=0,Pa=Ht.length;Bi<Pa;Bi++){const xs=Ht[Bi];Ae.update(xs,bn),Ae.bind(xs,bn)}}return bn}function gn(C,ee){C.ambientLightColor.needsUpdate=ee,C.lightProbe.needsUpdate=ee,C.directionalLights.needsUpdate=ee,C.directionalLightShadows.needsUpdate=ee,C.pointLights.needsUpdate=ee,C.pointLightShadows.needsUpdate=ee,C.spotLights.needsUpdate=ee,C.spotLightShadows.needsUpdate=ee,C.rectAreaLights.needsUpdate=ee,C.hemisphereLights.needsUpdate=ee}function cl(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(C,ee,he){const ce=de.get(C);ce.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ce.__autoAllocateDepthBuffer===!1&&(ce.__useRenderToTexture=!1),de.get(C.texture).__webglTexture=ee,de.get(C.depthTexture).__webglTexture=ce.__autoAllocateDepthBuffer?void 0:he,ce.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,ee){const he=de.get(C);he.__webglFramebuffer=ee,he.__useDefaultFramebuffer=ee===void 0},this.setRenderTarget=function(C,ee=0,he=0){Y=C,I=ee,z=he;let ce=null,ue=!1,ze=!1;if(C){const Pe=de.get(C);if(Pe.__useDefaultFramebuffer!==void 0){M.bindFramebuffer($.FRAMEBUFFER,Pe.__webglFramebuffer),S.copy(C.viewport),k.copy(C.scissor),re=C.scissorTest,M.viewport(S),M.scissor(k),M.setScissorTest(re),ae=-1;return}else if(Pe.__webglFramebuffer===void 0)xe.setupRenderTarget(C);else if(Pe.__hasExternalTextures)xe.rebindTextures(C,de.get(C.texture).__webglTexture,de.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const at=C.depthTexture;if(Pe.__boundDepthTexture!==at){if(at!==null&&de.has(at)&&(C.width!==at.image.width||C.height!==at.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");xe.setupDepthRenderbuffer(C)}}const Ye=C.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(ze=!0);const We=de.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(We[ee])?ce=We[ee][he]:ce=We[ee],ue=!0):C.samples>0&&xe.useMultisampledRTT(C)===!1?ce=de.get(C).__webglMultisampledFramebuffer:Array.isArray(We)?ce=We[he]:ce=We,S.copy(C.viewport),k.copy(C.scissor),re=C.scissorTest}else S.copy(De).multiplyScalar(me).floor(),k.copy(nt).multiplyScalar(me).floor(),re=$e;if(he!==0&&(ce=Q),M.bindFramebuffer($.FRAMEBUFFER,ce)&&M.drawBuffers(C,ce),M.viewport(S),M.scissor(k),M.setScissorTest(re),ue){const Pe=de.get(C.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Pe.__webglTexture,he)}else if(ze){const Pe=ee;for(let Ye=0;Ye<C.textures.length;Ye++){const We=de.get(C.textures[Ye]);$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0+Ye,We.__webglTexture,he,Pe)}}else if(C!==null&&he!==0){const Pe=de.get(C.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,Pe.__webglTexture,he)}ae=-1},this.readRenderTargetPixels=function(C,ee,he,ce,ue,ze,Xe,Pe=0){if(!(C&&C.isWebGLRenderTarget)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=de.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Xe!==void 0&&(Ye=Ye[Xe]),Ye){M.bindFramebuffer($.FRAMEBUFFER,Ye);try{const We=C.textures[Pe],at=We.format,xt=We.type;if(C.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+Pe),!B.textureFormatReadable(at)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!B.textureTypeReadable(xt)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ee>=0&&ee<=C.width-ce&&he>=0&&he<=C.height-ue&&$.readPixels(ee,he,ce,ue,Ue.convert(at),Ue.convert(xt),ze)}finally{const We=Y!==null?de.get(Y).__webglFramebuffer:null;M.bindFramebuffer($.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(C,ee,he,ce,ue,ze,Xe,Pe=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ye=de.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Xe!==void 0&&(Ye=Ye[Xe]),Ye)if(ee>=0&&ee<=C.width-ce&&he>=0&&he<=C.height-ue){M.bindFramebuffer($.FRAMEBUFFER,Ye);const We=C.textures[Pe],at=We.format,xt=We.type;if(C.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+Pe),!B.textureFormatReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!B.textureTypeReadable(xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=$.createBuffer();$.bindBuffer($.PIXEL_PACK_BUFFER,et),$.bufferData($.PIXEL_PACK_BUFFER,ze.byteLength,$.STREAM_READ),$.readPixels(ee,he,ce,ue,Ue.convert(at),Ue.convert(xt),0);const Pt=Y!==null?de.get(Y).__webglFramebuffer:null;M.bindFramebuffer($.FRAMEBUFFER,Pt);const an=$.fenceSync($.SYNC_GPU_COMMANDS_COMPLETE,0);return $.flush(),await HS($,an,4),$.bindBuffer($.PIXEL_PACK_BUFFER,et),$.getBufferSubData($.PIXEL_PACK_BUFFER,0,ze),$.deleteBuffer(et),$.deleteSync(an),ze}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,ee=null,he=0){const ce=Math.pow(2,-he),ue=Math.floor(C.image.width*ce),ze=Math.floor(C.image.height*ce),Xe=ee!==null?ee.x:0,Pe=ee!==null?ee.y:0;xe.setTexture2D(C,0),$.copyTexSubImage2D($.TEXTURE_2D,he,0,0,Xe,Pe,ue,ze),M.unbindTexture()},this.copyTextureToTexture=function(C,ee,he=null,ce=null,ue=0,ze=0){let Xe,Pe,Ye,We,at,xt,et,Pt,an;const Qt=C.isCompressedTexture?C.mipmaps[ze]:C.image;if(he!==null)Xe=he.max.x-he.min.x,Pe=he.max.y-he.min.y,Ye=he.isBox3?he.max.z-he.min.z:1,We=he.min.x,at=he.min.y,xt=he.isBox3?he.min.z:0;else{const sn=Math.pow(2,-ue);Xe=Math.floor(Qt.width*sn),Pe=Math.floor(Qt.height*sn),C.isDataArrayTexture?Ye=Qt.depth:C.isData3DTexture?Ye=Math.floor(Qt.depth*sn):Ye=1,We=0,at=0,xt=0}ce!==null?(et=ce.x,Pt=ce.y,an=ce.z):(et=0,Pt=0,an=0);const Vt=Ue.convert(ee.format),kt=Ue.convert(ee.type);let ke;ee.isData3DTexture?(xe.setTexture3D(ee,0),ke=$.TEXTURE_3D):ee.isDataArrayTexture||ee.isCompressedArrayTexture?(xe.setTexture2DArray(ee,0),ke=$.TEXTURE_2D_ARRAY):(xe.setTexture2D(ee,0),ke=$.TEXTURE_2D),M.activeTexture($.TEXTURE0),M.pixelStorei($.UNPACK_FLIP_Y_WEBGL,ee.flipY),M.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),M.pixelStorei($.UNPACK_ALIGNMENT,ee.unpackAlignment);const zn=M.getParameter($.UNPACK_ROW_LENGTH),bt=M.getParameter($.UNPACK_IMAGE_HEIGHT),bn=M.getParameter($.UNPACK_SKIP_PIXELS),ii=M.getParameter($.UNPACK_SKIP_ROWS),Ai=M.getParameter($.UNPACK_SKIP_IMAGES);M.pixelStorei($.UNPACK_ROW_LENGTH,Qt.width),M.pixelStorei($.UNPACK_IMAGE_HEIGHT,Qt.height),M.pixelStorei($.UNPACK_SKIP_PIXELS,We),M.pixelStorei($.UNPACK_SKIP_ROWS,at),M.pixelStorei($.UNPACK_SKIP_IMAGES,xt);const ai=C.isDataArrayTexture||C.isData3DTexture,Xt=ee.isDataArrayTexture||ee.isData3DTexture;if(C.isDepthTexture){const sn=de.get(C),wi=de.get(ee),Ht=de.get(sn.__renderTarget),Bi=de.get(wi.__renderTarget);M.bindFramebuffer($.READ_FRAMEBUFFER,Ht.__webglFramebuffer),M.bindFramebuffer($.DRAW_FRAMEBUFFER,Bi.__webglFramebuffer);for(let Pa=0;Pa<Ye;Pa++)ai&&($.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,de.get(C).__webglTexture,ue,xt+Pa),$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,de.get(ee).__webglTexture,ze,an+Pa)),$.blitFramebuffer(We,at,Xe,Pe,et,Pt,Xe,Pe,$.DEPTH_BUFFER_BIT,$.NEAREST);M.bindFramebuffer($.READ_FRAMEBUFFER,null),M.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else if(ue!==0||C.isRenderTargetTexture||de.has(C)){const sn=de.get(C),wi=de.get(ee);M.bindFramebuffer($.READ_FRAMEBUFFER,te),M.bindFramebuffer($.DRAW_FRAMEBUFFER,q);for(let Ht=0;Ht<Ye;Ht++)ai?$.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,sn.__webglTexture,ue,xt+Ht):$.framebufferTexture2D($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,sn.__webglTexture,ue),Xt?$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,wi.__webglTexture,ze,an+Ht):$.framebufferTexture2D($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,wi.__webglTexture,ze),ue!==0?$.blitFramebuffer(We,at,Xe,Pe,et,Pt,Xe,Pe,$.COLOR_BUFFER_BIT,$.NEAREST):Xt?$.copyTexSubImage3D(ke,ze,et,Pt,an+Ht,We,at,Xe,Pe):$.copyTexSubImage2D(ke,ze,et,Pt,We,at,Xe,Pe);M.bindFramebuffer($.READ_FRAMEBUFFER,null),M.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else Xt?C.isDataTexture||C.isData3DTexture?$.texSubImage3D(ke,ze,et,Pt,an,Xe,Pe,Ye,Vt,kt,Qt.data):ee.isCompressedArrayTexture?$.compressedTexSubImage3D(ke,ze,et,Pt,an,Xe,Pe,Ye,Vt,Qt.data):$.texSubImage3D(ke,ze,et,Pt,an,Xe,Pe,Ye,Vt,kt,Qt):C.isDataTexture?$.texSubImage2D($.TEXTURE_2D,ze,et,Pt,Xe,Pe,Vt,kt,Qt.data):C.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,ze,et,Pt,Qt.width,Qt.height,Vt,Qt.data):$.texSubImage2D($.TEXTURE_2D,ze,et,Pt,Xe,Pe,Vt,kt,Qt);M.pixelStorei($.UNPACK_ROW_LENGTH,zn),M.pixelStorei($.UNPACK_IMAGE_HEIGHT,bt),M.pixelStorei($.UNPACK_SKIP_PIXELS,bn),M.pixelStorei($.UNPACK_SKIP_ROWS,ii),M.pixelStorei($.UNPACK_SKIP_IMAGES,Ai),ze===0&&ee.generateMipmaps&&$.generateMipmap(ke),M.unbindTexture()},this.initRenderTarget=function(C){de.get(C).__webglFramebuffer===void 0&&xe.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?xe.setTextureCube(C,0):C.isData3DTexture?xe.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?xe.setTexture2DArray(C,0):xe.setTexture2D(C,0),M.unbindTexture()},this.resetState=function(){I=0,z=0,Y=null,M.reset(),He.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Nt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Nt._getUnpackColorSpace()}}/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wA=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),CA=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,s)=>s?s.toUpperCase():i.toLowerCase()),$x=r=>{const e=CA(r);return e.charAt(0).toUpperCase()+e.slice(1)},Fv=(...r)=>r.filter((e,i,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===i).join(" ").trim(),RA=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var NA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DA=Ke.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:d,...p},m)=>Ke.createElement("svg",{ref:m,...NA,width:e,height:e,stroke:r,strokeWidth:s?Number(i)*24/Number(e):i,className:Fv("lucide",l),...!c&&!RA(p)&&{"aria-hidden":"true"},...p},[...d.map(([h,_])=>Ke.createElement(h,_)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ct=(r,e)=>{const i=Ke.forwardRef(({className:s,...l},c)=>Ke.createElement(DA,{ref:c,iconNode:e,className:Fv(`lucide-${wA($x(r))}`,`lucide-${r}`,s),...l}));return i.displayName=$x(r),i};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UA=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],LA=Ct("arrow-right",UA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OA=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],Bv=Ct("award",OA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PA=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Hv=Ct("book-open",PA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IA=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],zA=Ct("calendar",IA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FA=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],BA=Ct("check",FA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HA=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],GA=Ct("chevron-left",HA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VA=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],kA=Ct("chevron-right",VA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XA=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],jA=Ct("circle-alert",XA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WA=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],qA=Ct("circle-check-big",WA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YA=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],ap=Ct("circle-check",YA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZA=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],KA=Ct("circle-question-mark",ZA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QA=[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]],Kr=Ct("coins",QA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JA=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],ev=Ct("download",JA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $A=[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]],e2=Ct("flame",$A);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t2=[["path",{d:"M10.5 3 8 9l4 13 4-13-2.5-6",key:"b3dvk1"}],["path",{d:"M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z",key:"7w4byz"}],["path",{d:"M2 9h20",key:"16fsjt"}]],Gv=Ct("gem",t2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n2=[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]],i2=Ct("gift",n2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a2=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],s2=Ct("graduation-cap",a2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r2=[["path",{d:"m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9",key:"1hayfq"}],["path",{d:"m18 15 4-4",key:"16gjal"}],["path",{d:"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5",key:"15ts47"}]],Gh=Ct("hammer",r2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o2=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],l2=Ct("house",o2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c2=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],u2=Ct("lightbulb",c2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f2=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],d2=Ct("lock",f2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h2=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],p2=Ct("moon",h2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m2=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],Zd=Ct("palette",m2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g2=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],Vv=Ct("rotate-ccw",g2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x2=[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]],v2=Ct("rotate-cw",x2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _2=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],y2=Ct("shield-check",_2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S2=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],b2=Ct("smartphone",S2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M2=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],sp=Ct("sparkles",M2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E2=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],T2=Ct("sun",E2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A2=[["path",{d:"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",key:"1n3hpd"}],["path",{d:"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",key:"rfe1zi"}],["path",{d:"M18 9h1.5a1 1 0 0 0 0-5H18",key:"7xy6bh"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6 9H4.5a1 1 0 0 1 0-5H6",key:"tex48p"}]],w2=Ct("trophy",A2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C2=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],R2=Ct("users",C2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N2=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],kv=Ct("volume-2",N2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D2=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],U2=Ct("volume-x",D2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L2=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],O2=Ct("wifi-off",L2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P2=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],I2=Ct("zoom-in",P2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z2=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],F2=Ct("zoom-out",z2),B2=({purchasedParts:r,customization:e,newlyAddedPartId:i})=>{const s=Ke.useRef(null),l=Ke.useRef(null),c=Ke.useRef(null),d=Ke.useRef(null),p=Ke.useRef([]),m=Ke.useRef(null),h=Ke.useRef(null),_=Ke.useRef(null),y=Ke.useRef(null),g=Ke.useRef(!1),T=Ke.useRef({x:0,y:0}),A=Ke.useRef({azimuth:.8,elevation:.45,distance:11}),[U,b]=Ke.useState(!1);Ke.useEffect(()=>{const L=s.current;if(!L)return;const E=L.clientWidth||600,N=L.clientHeight||450,X=new nb;X.background=new ht(U?988970:12313082),l.current=X;const G=new pi(42,E/N,.1,1e3);y.current=G,v();const j=new AA({antialias:!0,alpha:!0});j.setSize(E,N),j.setPixelRatio(Math.min(window.devicePixelRatio,2)),j.shadowMap.enabled=!0,j.shadowMap.type=iv,c.current=j,L.innerHTML="",L.appendChild(j.domElement);const Q=new bb(16777215,4473924,.9);Q.position.set(0,50,0),X.add(Q),_.current=Q;const te=new Ab(16775910,1.4);te.position.set(12,22,14),te.castShadow=!0,te.shadow.mapSize.width=1024,te.shadow.mapSize.height=1024,te.shadow.camera.near=.5,te.shadow.camera.far=60,te.shadow.camera.left=-10,te.shadow.camera.right=10,te.shadow.camera.top=10,te.shadow.camera.bottom=-10,X.add(te),h.current=te;const q=new wb(16777215,.4);X.add(q);const I=new Ln;X.add(I);const z=new Oi(5.8,5.4,.8,32),Y=new on({color:4906624}),ae=new dt(z,Y);ae.position.y=-.4,ae.receiveShadow=!0,I.add(ae);const H=new Oi(5.4,1.8,2,32),S=new on({color:7877903}),k=new dt(H,S);k.position.y=-1.8,k.receiveShadow=!0,I.add(k);const re=new Ln;for(let qe=0;qe<4;qe++){const pt=F();pt.position.set((Math.random()-.5)*20,6+Math.random()*3,(Math.random()-.5)*20),re.add(pt)}X.add(re),m.current=re;const _e=new Ln;X.add(_e),d.current=_e;const Me=qe=>{g.current=!0,T.current={x:qe.clientX,y:qe.clientY}},J=qe=>{if(!g.current)return;const pt=qe.clientX-T.current.x,lt=qe.clientY-T.current.y;A.current.azimuth-=pt*.008,A.current.elevation=Math.max(.1,Math.min(Math.PI/2.3,A.current.elevation+lt*.008)),T.current={x:qe.clientX,y:qe.clientY},v()},se=()=>{g.current=!1},me=qe=>{qe.touches.length===1&&(g.current=!0,T.current={x:qe.touches[0].clientX,y:qe.touches[0].clientY})},we=qe=>{if(!g.current||qe.touches.length!==1)return;const pt=qe.touches[0].clientX-T.current.x,lt=qe.touches[0].clientY-T.current.y;A.current.azimuth-=pt*.008,A.current.elevation=Math.max(.1,Math.min(Math.PI/2.3,A.current.elevation+lt*.008)),T.current={x:qe.touches[0].clientX,y:qe.touches[0].clientY},v()},Be=()=>{g.current=!1},De=qe=>{qe.preventDefault(),A.current.distance=Math.max(6,Math.min(18,A.current.distance+qe.deltaY*.01)),v()},nt=j.domElement;nt.addEventListener("mousedown",Me),window.addEventListener("mousemove",J),window.addEventListener("mouseup",se),nt.addEventListener("touchstart",me,{passive:!0}),window.addEventListener("touchmove",we,{passive:!0}),window.addEventListener("touchend",Be),nt.addEventListener("wheel",De,{passive:!1});const $e=new ResizeObserver(qe=>{for(const pt of qe){const lt=pt.contentRect.width,yt=pt.contentRect.height;lt>0&&yt>0&&(G.aspect=lt/yt,G.updateProjectionMatrix(),j.setSize(lt,yt))}});$e.observe(L);let Ge,rt=new Nb;const ot=()=>{Ge=requestAnimationFrame(ot);const qe=rt.getDelta(),pt=rt.getElapsedTime();m.current&&m.current.children.forEach((lt,yt)=>{lt.position.x+=qe*(.3+yt*.1),lt.position.x>14&&(lt.position.x=-14)}),p.current.length>0&&p.current.forEach((lt,yt)=>{lt.position.y+=qe*.9,lt.position.x+=Math.sin(pt*2+yt)*qe*.2;const Ot=lt.scale.x+qe*.3;lt.scale.set(Ot,Ot,Ot),lt.position.y>4.8&&(lt.position.y=3.2,lt.position.x=1,lt.position.z=-.5,lt.scale.set(.2,.2,.2))}),j.render(X,G)};return ot(),()=>{cancelAnimationFrame(Ge),$e.disconnect(),nt.removeEventListener("mousedown",Me),window.removeEventListener("mousemove",J),window.removeEventListener("mouseup",se),nt.removeEventListener("touchstart",me),window.removeEventListener("touchmove",we),window.removeEventListener("touchend",Be),nt.removeEventListener("wheel",De),j.dispose()}},[]);const v=()=>{if(!y.current)return;const{azimuth:L,elevation:E,distance:N}=A.current,X=N*Math.cos(E)*Math.sin(L),G=N*Math.sin(E),j=N*Math.cos(E)*Math.cos(L);y.current.position.set(X,G,j),y.current.lookAt(0,1.2,0)};Ke.useEffect(()=>{!l.current||!h.current||!_.current||(U?(l.current.background=new ht(593174),h.current.color.setHex(8490232),h.current.intensity=.5,_.current.intensity=.3):(l.current.background=new ht(12313082),h.current.color.setHex(16775910),h.current.intensity=1.4,_.current.intensity=.9))},[U]),Ke.useEffect(()=>{const L=d.current;if(!L)return;for(;L.children.length>0;){const N=L.children[0];L.remove(N)}p.current=[];const E=N=>r.includes(N);if(E("foundation")){const N=new pn(4.2,.4,3.8),X=new on({color:9741240}),G=new dt(N,X);G.position.set(0,.2,0),G.receiveShadow=!0,G.castShadow=!0,L.add(G);const j=new pn(4.4,.15,4),Q=new on({color:6583435}),te=new dt(j,Q);te.position.set(0,.08,0),te.receiveShadow=!0,L.add(te)}if(E("walls")){const N=new on({color:new ht(e.wallColor)}),X=new pn(3.6,2.2,3.2),G=new dt(X,N);G.position.set(0,1.5,0),G.castShadow=!0,G.receiveShadow=!0,L.add(G);const j=new pn(3.7,.15,3.3),Q=new on({color:4674921}),te=new dt(j,Q);te.position.set(0,.45,0),L.add(te)}if(E("roof")){const N=new on({color:new ht(e.roofColor)}),X=new Vs(2.8,1.6,4),G=new dt(X,N);G.position.set(0,3.4,0),G.rotation.y=Math.PI/4,G.castShadow=!0,G.receiveShadow=!0,L.add(G);const j=new Vs(2.95,.2,4),Q=new on({color:8330525}),te=new dt(j,Q);te.position.set(0,2.65,0),te.rotation.y=Math.PI/4,L.add(te)}if(E("door")){const N=new Ln,X=new pn(1,1.5,.1),G=new on({color:7877903}),j=new dt(X,G);j.position.set(0,1.15,1.62),N.add(j);const Q=new pn(.85,1.38,.08),te=new on({color:new ht(e.doorColor)}),q=new dt(Q,te);q.position.set(0,1.15,1.65),N.add(q);const I=new Vr(.06,12,12),z=new _b({color:16436245,metalness:.8,roughness:.2}),Y=new dt(I,z);Y.position.set(.28,1.12,1.72),N.add(Y);const ae=new pn(1.2,.15,.4),H=new on({color:9741240}),S=new dt(ae,H);S.position.set(0,.42,1.8),N.add(S),L.add(N)}if(E("windows")){const N=new Ln,X=new on({color:new ht(e.windowColor)}),G=new on({color:16777215}),j=new pn(.7,.7,.08),Q=new pn(.8,.8,.06),te=new dt(Q,G);te.position.set(-1.1,1.8,1.62);const q=new dt(j,X);q.position.set(-1.1,1.8,1.64),N.add(te),N.add(q);const I=new dt(Q,G);I.position.set(1.1,1.8,1.62);const z=new dt(j,X);z.position.set(1.1,1.8,1.64),N.add(I),N.add(z);const Y=new dt(Q,G);Y.position.set(-1.82,1.8,0),Y.rotation.y=Math.PI/2;const ae=new dt(j,X);ae.position.set(-1.84,1.8,0),ae.rotation.y=Math.PI/2,N.add(Y),N.add(ae),[-1.1,1.1].forEach(H=>{const S=new dt(new pn(.04,.7,.1),G);S.position.set(H,1.8,1.65);const k=new dt(new pn(.7,.04,.1),G);k.position.set(H,1.8,1.65),N.add(S),N.add(k)}),L.add(N)}if(E("chimney")){const N=new Ln,X=new on({color:new ht(e.chimneyColor)}),G=new pn(.5,1.4,.5),j=new dt(G,X);j.position.set(1,3.2,-.5),j.castShadow=!0,N.add(j);const Q=new pn(.65,.12,.65),te=new dt(Q,X);te.position.set(1,3.9,-.5),N.add(te);const q=[];for(let I=0;I<4;I++){const z=new Vr(.12+I*.05,8,8),Y=new Jc({color:15857145,transparent:!0,opacity:.7-I*.15}),ae=new dt(z,Y);ae.position.set(1+(Math.random()-.5)*.1,3.4+I*.35,-.5),N.add(ae),q.push(ae)}p.current=q,L.add(N)}if(E("path")){const N=new Ln,X=new on({color:13358561});[{x:0,z:2.1,r:.35},{x:-.1,z:2.7,r:.38},{x:.15,z:3.3,r:.4},{x:-.05,z:3.9,r:.36},{x:.1,z:4.5,r:.32}].forEach(j=>{const Q=new Oi(j.r,j.r+.05,.08,12),te=new dt(Q,X);te.position.set(j.x,.04,j.z),te.receiveShadow=!0,N.add(te)}),L.add(N)}if(E("fence")){const N=new Ln,X=new on({color:new ht(e.fenceColor)}),G=(j,Q,te,q)=>{const I=te-j,z=q-Q,Y=Math.sqrt(I*I+z*z),ae=Math.atan2(I,z),H=Math.floor(Y/.5);for(let _e=0;_e<=H;_e++){const Me=_e/H,J=j+I*Me,se=Q+z*Me,me=new pn(.08,.6,.08),we=new dt(me,X);we.position.set(J,.3,se),we.castShadow=!0,N.add(we)}const S=new pn(.04,.06,Y),k=new dt(S,X);k.position.set((j+te)/2,.42,(Q+q)/2),k.rotation.y=ae,N.add(k);const re=new dt(S,X);re.position.set((j+te)/2,.18,(Q+q)/2),re.rotation.y=ae,N.add(re)};G(-3.8,3.2,-3.8,-2.8),G(3.8,3.2,3.8,-2.8),G(-3.8,-2.8,3.8,-2.8),G(-3.8,3.2,-.9,3.2),G(.9,3.2,3.8,3.2),L.add(N)}if(E("garden")){const N=new Ln,X=new on({color:2278750});[{x:-1.6,z:2.1,r:.4},{x:1.6,z:2.1,r:.45},{x:-2.3,z:1.4,r:.5},{x:2.4,z:1.2,r:.52}].forEach(Q=>{const te=new Vr(Q.r,12,12),q=new dt(te,X);q.position.set(Q.x,Q.r*.7,Q.z),q.castShadow=!0,N.add(q)});const j=[15680580,16096779,15485081,3900150,16777215];for(let Q=0;Q<16;Q++){const te=j[Q%j.length],q=new on({color:te}),I=new Oi(.12,.1,.05,8),z=new dt(I,q),Y=Math.random()*Math.PI*2,ae=2.4+Math.random()*1.8;z.position.set(Math.cos(Y)*ae,.08,Math.sin(Y)*ae),N.add(z)}L.add(N)}if(E("decorations")){const N=new Ln,X=P(-3.2,-1.8,1.1);N.add(X);const G=P(3.2,-1.5,.9);N.add(G);const j=new on({color:7877903}),Q=new dt(new Oi(.04,.04,.7,8),j);Q.position.set(-.7,.35,3.8),N.add(Q);const te=new on({color:15680580}),q=new dt(new pn(.2,.18,.3),te);q.position.set(-.7,.72,3.8),N.add(q);const I=new Ln,z=new on({color:3359061}),Y=new dt(new Oi(.05,.06,2,8),z);Y.position.set(1.5,1,3.5),I.add(Y);const ae=new Jc({color:16707722}),H=new dt(new Oi(.16,.12,.28,6),ae);H.position.set(1.5,2.05,3.5),I.add(H);const S=new Eb(16436245,1.2,4);S.position.set(1.5,2.05,3.5),I.add(S),N.add(I),L.add(N)}i&&(L.scale.set(1.08,1.08,1.08),setTimeout(()=>{d.current&&d.current.scale.set(1,1,1)},250))},[r,e,i]);function F(){const L=new Ln,E=new on({color:16777215,transparent:!0,opacity:.9});return[{r:.6,x:0,y:0,z:0},{r:.45,x:-.5,y:-.1,z:0},{r:.5,x:.5,y:-.05,z:0},{r:.35,x:.2,y:.3,z:.1}].forEach(X=>{const G=new dt(new Vr(X.r,8,8),E);G.position.set(X.x,X.y,X.z),L.add(G)}),L}function P(L,E,N=1){const X=new Ln,G=new on({color:7877903}),j=new dt(new Oi(.12*N,.16*N,1*N,8),G);j.position.set(0,.5*N,0),j.castShadow=!0,X.add(j);const Q=new on({color:1409085}),te=new dt(new Vs(.9*N,1.1*N,7),Q);te.position.set(0,1.2*N,0),te.castShadow=!0,X.add(te);const q=new dt(new Vs(.7*N,.9*N,7),Q);q.position.set(0,1.7*N,0),q.castShadow=!0,X.add(q);const I=new dt(new Vs(.5*N,.7*N,7),Q);return I.position.set(0,2.1*N,0),I.castShadow=!0,X.add(I),X.position.set(L,0,E),X}const D=()=>{A.current.azimuth+=Math.PI/4,v()},V=()=>{A.current.distance=Math.max(6,A.current.distance-2),v()},O=()=>{A.current.distance=Math.min(18,A.current.distance+2),v()};return w.jsxs("div",{className:"relative w-full h-full min-h-[320px] lg:min-h-[460px] rounded-3xl overflow-hidden shadow-inner border-4 border-white/60 bg-gradient-to-b from-sky-200 via-sky-100 to-emerald-100",children:[w.jsx("div",{ref:s,className:"w-full h-full cursor-grab active:cursor-grabbing touch-none select-none"}),w.jsxs("div",{className:"absolute top-4 left-4 pointer-events-none bg-white/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-sky-200/70 shadow-sm flex items-center gap-2 text-xs font-semibold text-slate-700",children:[w.jsx(sp,{className:"w-3.5 h-3.5 text-amber-500 animate-spin"}),w.jsx("span",{children:"Gira y explora tu casa en 3D"})]}),w.jsxs("div",{className:"absolute top-4 right-4 flex flex-col gap-2 z-10",children:[w.jsx("button",{onClick:D,className:"w-11 h-11 rounded-2xl bg-white/90 hover:bg-white text-slate-700 shadow-md border border-slate-200 flex items-center justify-center btn-3d active:scale-95 transition",title:"Girar vista 3D","aria-label":"Girar vista 3D",children:w.jsx(v2,{className:"w-5 h-5 text-sky-600"})}),w.jsx("button",{onClick:V,className:"w-11 h-11 rounded-2xl bg-white/90 hover:bg-white text-slate-700 shadow-md border border-slate-200 flex items-center justify-center btn-3d active:scale-95 transition",title:"Acercar cámara","aria-label":"Acercar cámara",children:w.jsx(I2,{className:"w-5 h-5 text-emerald-600"})}),w.jsx("button",{onClick:O,className:"w-11 h-11 rounded-2xl bg-white/90 hover:bg-white text-slate-700 shadow-md border border-slate-200 flex items-center justify-center btn-3d active:scale-95 transition",title:"Alejar cámara","aria-label":"Alejar cámara",children:w.jsx(F2,{className:"w-5 h-5 text-amber-600"})}),w.jsx("button",{onClick:()=>b(!U),className:"w-11 h-11 rounded-2xl bg-white/90 hover:bg-white text-slate-700 shadow-md border border-slate-200 flex items-center justify-center btn-3d active:scale-95 transition",title:U?"Cambiar a modo Día":"Cambiar a modo Noche","aria-label":"Cambiar día y noche",children:U?w.jsx(T2,{className:"w-5 h-5 text-amber-500"}):w.jsx(p2,{className:"w-5 h-5 text-indigo-600"})})]}),w.jsxs("div",{className:"absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-slate-200 shadow-lg flex items-center gap-3 text-xs md:text-sm font-bold text-slate-800",children:[w.jsxs("span",{className:"flex items-center gap-1.5 text-emerald-700",children:[w.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"}),"Partes construidas: ",r.length," / 10"]}),w.jsx("div",{className:"w-24 md:w-32 bg-slate-200 h-2.5 rounded-full overflow-hidden",children:w.jsx("div",{className:"h-full bg-emerald-500 rounded-full transition-all duration-500",style:{width:`${r.length/10*100}%`}})})]})]})};var rp={};(function r(e,i,s,l){var c=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),d=typeof Path2D=="function"&&typeof DOMMatrix=="function",p=(function(){if(!e.OffscreenCanvas)return!1;try{var H=new OffscreenCanvas(1,1),S=H.getContext("2d");S.fillRect(0,0,1,1);var k=H.transferToImageBitmap();S.createPattern(k,"no-repeat")}catch{return!1}return!0})();function m(){}function h(H){var S=i.exports.Promise,k=S!==void 0?S:e.Promise;return typeof k=="function"?new k(H):(H(m,m),null)}var _=(function(H,S){return{transform:function(k){if(H)return k;if(S.has(k))return S.get(k);var re=new OffscreenCanvas(k.width,k.height),_e=re.getContext("2d");return _e.drawImage(k,0,0),S.set(k,re),re},clear:function(){S.clear()}}})(p,new Map),y=(function(){var H=Math.floor(16.666666666666668),S,k,re={},_e=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(S=function(Me){var J=Math.random();return re[J]=requestAnimationFrame(function se(me){_e===me||_e+H-1<me?(_e=me,delete re[J],Me()):re[J]=requestAnimationFrame(se)}),J},k=function(Me){re[Me]&&cancelAnimationFrame(re[Me])}):(S=function(Me){return setTimeout(Me,H)},k=function(Me){return clearTimeout(Me)}),{frame:S,cancel:k}})(),g=(function(){var H,S,k={};function re(_e){function Me(J,se){_e.postMessage({options:J||{},callback:se})}_e.init=function(se){var me=se.transferControlToOffscreen();_e.postMessage({canvas:me},[me])},_e.fire=function(se,me,we){if(S)return Me(se,null),S;var Be=Math.random().toString(36).slice(2);return S=h(function(De){function nt($e){$e.data.callback===Be&&(delete k[Be],_e.removeEventListener("message",nt),S=null,_.clear(),we(),De())}_e.addEventListener("message",nt),Me(se,Be),k[Be]=nt.bind(null,{data:{callback:Be}})}),S},_e.reset=function(){_e.postMessage({reset:!0});for(var se in k)k[se](),delete k[se]}}return function(){if(H)return H;if(!s&&c){var _e=["var CONFETTI, SIZE = {}, module = {};","("+r.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{H=new Worker(URL.createObjectURL(new Blob([_e])))}catch(Me){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",Me),null}re(H)}return H}})(),T={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function A(H,S){return S?S(H):H}function U(H){return H!=null}function b(H,S,k){return A(H&&U(H[S])?H[S]:T[S],k)}function v(H){return H<0?0:Math.floor(H)}function F(H,S){return Math.floor(Math.random()*(S-H))+H}function P(H){return parseInt(H,16)}function D(H){return H.map(V)}function V(H){var S=String(H).replace(/[^0-9a-f]/gi,"");return S.length<6&&(S=S[0]+S[0]+S[1]+S[1]+S[2]+S[2]),{r:P(S.substring(0,2)),g:P(S.substring(2,4)),b:P(S.substring(4,6))}}function O(H){var S=b(H,"origin",Object);return S.x=b(S,"x",Number),S.y=b(S,"y",Number),S}function L(H){H.width=document.documentElement.clientWidth,H.height=document.documentElement.clientHeight}function E(H){var S=H.getBoundingClientRect();H.width=S.width,H.height=S.height}function N(H){var S=document.createElement("canvas");return S.style.position="fixed",S.style.top="0px",S.style.left="0px",S.style.pointerEvents="none",S.style.zIndex=H,S}function X(H,S,k,re,_e,Me,J,se,me){H.save(),H.translate(S,k),H.rotate(Me),H.scale(re,_e),H.arc(0,0,1,J,se,me),H.restore()}function G(H){var S=H.angle*(Math.PI/180),k=H.spread*(Math.PI/180);return{x:H.x,y:H.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:H.startVelocity*.5+Math.random()*H.startVelocity,angle2D:-S+(.5*k-Math.random()*k),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:H.color,shape:H.shape,tick:0,totalTicks:H.ticks,decay:H.decay,drift:H.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:H.gravity*3,ovalScalar:.6,scalar:H.scalar,flat:H.flat}}function j(H,S){S.x+=Math.cos(S.angle2D)*S.velocity+S.drift,S.y+=Math.sin(S.angle2D)*S.velocity+S.gravity,S.velocity*=S.decay,S.flat?(S.wobble=0,S.wobbleX=S.x+10*S.scalar,S.wobbleY=S.y+10*S.scalar,S.tiltSin=0,S.tiltCos=0,S.random=1):(S.wobble+=S.wobbleSpeed,S.wobbleX=S.x+10*S.scalar*Math.cos(S.wobble),S.wobbleY=S.y+10*S.scalar*Math.sin(S.wobble),S.tiltAngle+=.1,S.tiltSin=Math.sin(S.tiltAngle),S.tiltCos=Math.cos(S.tiltAngle),S.random=Math.random()+2);var k=S.tick++/S.totalTicks,re=S.x+S.random*S.tiltCos,_e=S.y+S.random*S.tiltSin,Me=S.wobbleX+S.random*S.tiltCos,J=S.wobbleY+S.random*S.tiltSin;if(H.fillStyle="rgba("+S.color.r+", "+S.color.g+", "+S.color.b+", "+(1-k)+")",H.beginPath(),d&&S.shape.type==="path"&&typeof S.shape.path=="string"&&Array.isArray(S.shape.matrix))H.fill(z(S.shape.path,S.shape.matrix,S.x,S.y,Math.abs(Me-re)*.1,Math.abs(J-_e)*.1,Math.PI/10*S.wobble));else if(S.shape.type==="bitmap"){var se=Math.PI/10*S.wobble,me=Math.abs(Me-re)*.1,we=Math.abs(J-_e)*.1,Be=S.shape.bitmap.width*S.scalar,De=S.shape.bitmap.height*S.scalar,nt=new DOMMatrix([Math.cos(se)*me,Math.sin(se)*me,-Math.sin(se)*we,Math.cos(se)*we,S.x,S.y]);nt.multiplySelf(new DOMMatrix(S.shape.matrix));var $e=H.createPattern(_.transform(S.shape.bitmap),"no-repeat");$e.setTransform(nt),H.globalAlpha=1-k,H.fillStyle=$e,H.fillRect(S.x-Be/2,S.y-De/2,Be,De),H.globalAlpha=1}else if(S.shape==="circle")H.ellipse?H.ellipse(S.x,S.y,Math.abs(Me-re)*S.ovalScalar,Math.abs(J-_e)*S.ovalScalar,Math.PI/10*S.wobble,0,2*Math.PI):X(H,S.x,S.y,Math.abs(Me-re)*S.ovalScalar,Math.abs(J-_e)*S.ovalScalar,Math.PI/10*S.wobble,0,2*Math.PI);else if(S.shape==="star")for(var Ge=Math.PI/2*3,rt=4*S.scalar,ot=8*S.scalar,qe=S.x,pt=S.y,lt=5,yt=Math.PI/lt;lt--;)qe=S.x+Math.cos(Ge)*ot,pt=S.y+Math.sin(Ge)*ot,H.lineTo(qe,pt),Ge+=yt,qe=S.x+Math.cos(Ge)*rt,pt=S.y+Math.sin(Ge)*rt,H.lineTo(qe,pt),Ge+=yt;else H.moveTo(Math.floor(S.x),Math.floor(S.y)),H.lineTo(Math.floor(S.wobbleX),Math.floor(_e)),H.lineTo(Math.floor(Me),Math.floor(J)),H.lineTo(Math.floor(re),Math.floor(S.wobbleY));return H.closePath(),H.fill(),S.tick<S.totalTicks}function Q(H,S,k,re,_e){var Me=S.slice(),J=H.getContext("2d"),se,me,we=h(function(Be){function De(){se=me=null,J.clearRect(0,0,re.width,re.height),_.clear(),_e(),Be()}function nt(){s&&!(re.width===l.width&&re.height===l.height)&&(re.width=H.width=l.width,re.height=H.height=l.height),!re.width&&!re.height&&(k(H),re.width=H.width,re.height=H.height),J.clearRect(0,0,re.width,re.height),Me=Me.filter(function($e){return j(J,$e)}),Me.length?se=y.frame(nt):De()}se=y.frame(nt),me=De});return{addFettis:function(Be){return Me=Me.concat(Be),we},canvas:H,promise:we,reset:function(){se&&y.cancel(se),me&&me()}}}function te(H,S){var k=!H,re=!!b(S||{},"resize"),_e=!1,Me=b(S,"disableForReducedMotion",Boolean),J=c&&!!b(S||{},"useWorker"),se=J?g():null,me=k?L:E,we=H&&se?!!H.__confetti_initialized:!1,Be=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,De;function nt(Ge,rt,ot){for(var qe=b(Ge,"particleCount",v),pt=b(Ge,"angle",Number),lt=b(Ge,"spread",Number),yt=b(Ge,"startVelocity",Number),Ot=b(Ge,"decay",Number),tn=b(Ge,"gravity",Number),$=b(Ge,"drift",Number),Ft=b(Ge,"colors",D),Ut=b(Ge,"ticks",Number),B=b(Ge,"shapes"),M=b(Ge,"scalar"),ie=!!b(Ge,"flat"),de=O(Ge),xe=qe,Ce=[],Le=H.width*de.x,ve=H.height*de.y;xe--;)Ce.push(G({x:Le,y:ve,angle:pt,spread:lt,startVelocity:yt,color:Ft[xe%Ft.length],shape:B[F(0,B.length)],ticks:Ut,decay:Ot,gravity:tn,drift:$,scalar:M,flat:ie}));return De?De.addFettis(Ce):(De=Q(H,Ce,me,rt,ot),De.promise)}function $e(Ge){var rt=Me||b(Ge,"disableForReducedMotion",Boolean),ot=b(Ge,"zIndex",Number);if(rt&&Be)return h(function(yt){yt()});k&&De?H=De.canvas:k&&!H&&(H=N(ot),document.body.appendChild(H)),re&&!we&&me(H);var qe={width:H.width,height:H.height};se&&!we&&se.init(H),we=!0,se&&(H.__confetti_initialized=!0);function pt(){if(se){var yt={getBoundingClientRect:function(){if(!k)return H.getBoundingClientRect()}};me(yt),se.postMessage({resize:{width:yt.width,height:yt.height}});return}qe.width=qe.height=null}function lt(){De=null,re&&(_e=!1,e.removeEventListener("resize",pt)),k&&H&&(document.body.contains(H)&&document.body.removeChild(H),H=null,we=!1)}return re&&!_e&&(_e=!0,e.addEventListener("resize",pt,!1)),se?se.fire(Ge,qe,lt):nt(Ge,qe,lt)}return $e.reset=function(){se&&se.reset(),De&&De.reset()},$e}var q;function I(){return q||(q=te(null,{useWorker:!0,resize:!0})),q}function z(H,S,k,re,_e,Me,J){var se=new Path2D(H),me=new Path2D;me.addPath(se,new DOMMatrix(S));var we=new Path2D;return we.addPath(me,new DOMMatrix([Math.cos(J)*_e,Math.sin(J)*_e,-Math.sin(J)*Me,Math.cos(J)*Me,k,re])),we}function Y(H){if(!d)throw new Error("path confetti are not supported in this browser");var S,k;typeof H=="string"?S=H:(S=H.path,k=H.matrix);var re=new Path2D(S),_e=document.createElement("canvas"),Me=_e.getContext("2d");if(!k){for(var J=1e3,se=J,me=J,we=0,Be=0,De,nt,$e=0;$e<J;$e+=2)for(var Ge=0;Ge<J;Ge+=2)Me.isPointInPath(re,$e,Ge,"nonzero")&&(se=Math.min(se,$e),me=Math.min(me,Ge),we=Math.max(we,$e),Be=Math.max(Be,Ge));De=we-se,nt=Be-me;var rt=10,ot=Math.min(rt/De,rt/nt);k=[ot,0,0,ot,-Math.round(De/2+se)*ot,-Math.round(nt/2+me)*ot]}return{type:"path",path:S,matrix:k}}function ae(H){var S,k=1,re="#000000",_e='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof H=="string"?S=H:(S=H.text,k="scalar"in H?H.scalar:k,_e="fontFamily"in H?H.fontFamily:_e,re="color"in H?H.color:re);var Me=10*k,J=""+Me+"px "+_e,se=new OffscreenCanvas(Me,Me),me=se.getContext("2d");me.font=J;var we=me.measureText(S),Be=Math.ceil(we.actualBoundingBoxRight+we.actualBoundingBoxLeft),De=Math.ceil(we.actualBoundingBoxAscent+we.actualBoundingBoxDescent),nt=2,$e=we.actualBoundingBoxLeft+nt,Ge=we.actualBoundingBoxAscent+nt;Be+=nt+nt,De+=nt+nt,se=new OffscreenCanvas(Be,De),me=se.getContext("2d"),me.font=J,me.fillStyle=re,me.fillText(S,$e,Ge);var rt=1/k;return{type:"bitmap",bitmap:se.transferToImageBitmap(),matrix:[rt,0,0,rt,-Be*rt/2,-De*rt/2]}}i.exports=function(){return I().apply(this,arguments)},i.exports.reset=function(){I().reset()},i.exports.create=te,i.exports.shapeFromPath=Y,i.exports.shapeFromText=ae})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),rp,!1);const Xv=rp.exports;rp.exports.create;/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const tv=[{id:"g1_casa",word:"CASA",syllables:["CA","SA"],hint:"¡El hogar que estamos construyendo con mucho amor!",category:"construccion",iconEmoji:"🏠",grade:1,funFact:"Las primeras casas de la historia se hacían de ramas y barro."},{id:"g1_sol",word:"SOL",syllables:["SOL"],hint:"Brilla en el cielo y llena de luz el jardín.",category:"naturaleza",iconEmoji:"☀️",grade:1,funFact:"El sol nos da calor y energía limpia para nuestra casa."},{id:"g1_mesa",word:"MESA",syllables:["ME","SA"],hint:"Mueble donde comemos y dibujamos los planos de la casa.",category:"hogar",iconEmoji:"🪵",grade:1,funFact:"Las mesas se construyen comúnmente con madera de pino o roble."},{id:"g1_pala",word:"PALA",syllables:["PA","LA"],hint:"Herramienta para cavar la tierra de los cimientos.",category:"construccion",iconEmoji:"⛏️",grade:1,funFact:"La pala ayuda al albañil a mezclar la arena con el agua."},{id:"g1_luna",word:"LUNA",syllables:["LU","NA"],hint:"Ilumina la noche sobre el tejado de nuestra casita.",category:"naturaleza",iconEmoji:"🌙",grade:1},{id:"g1_pato",word:"PATO",syllables:["PA","TO"],hint:"Ave que nada feliz en la laguna del jardín.",category:"animales",iconEmoji:"🦆",grade:1},{id:"g1_gato",word:"GATO",syllables:["GA","TO"],hint:"Mascota juguetona que duerme en el tejado.",category:"animales",iconEmoji:"🐱",grade:1},{id:"g1_flor",word:"FLOR",syllables:["FLOR"],hint:"Planta de colores que adorna la entrada.",category:"naturaleza",iconEmoji:"🌸",grade:1},{id:"g1_sapo",word:"SAPO",syllables:["SA","PO"],hint:"Salta en el césped del patio verde.",category:"animales",iconEmoji:"🐸",grade:1},{id:"g1_dado",word:"DADO",syllables:["DA","DO"],hint:"Tiene puntos y forma de cubo, como un bloque de construcción.",category:"hogar",iconEmoji:"🎲",grade:1},{id:"g1_nube",word:"NUBE",syllables:["NU","BE"],hint:"Flota suave como algodón sobre el tejado.",category:"naturaleza",iconEmoji:"☁️",grade:1},{id:"g1_vela",word:"VELA",syllables:["VE","LA"],hint:"Alumbra con una pequeña llama cálida.",category:"hogar",iconEmoji:"🕯️",grade:1},{id:"g2_clavo",word:"CLAVO",syllables:["CLA","VO"],hint:"Pieza de metal que sostiene las tablas de madera.",category:"construccion",iconEmoji:"🔩",grade:2,funFact:"Los clavos antiguos se forjaban uno a uno con fuego y martillo."},{id:"g2_planta",word:"PLANTA",syllables:["PLAN","TA"],hint:"Crece verde junto a la pared de la casa.",category:"naturaleza",iconEmoji:"🌱",grade:2},{id:"g2_brazo",word:"BRAZO",syllables:["BRA","ZO"],hint:"¡Con él levantamos ladrillos y herramientas!",category:"construccion",iconEmoji:"💪",grade:2},{id:"g2_techo",word:"TECHO",syllables:["TE","CHO"],hint:"Cubre la casa para que no nos moje la lluvia.",category:"construccion",iconEmoji:"🛖",grade:2},{id:"g2_playa",word:"PLAYA",syllables:["PLA","YA"],hint:"Lugar de arena fina de donde sacamos arena para mezclar.",category:"naturaleza",iconEmoji:"🏖️",grade:2},{id:"g2_cofre",word:"COFRE",syllables:["CO","FRE"],hint:"Caja resistente donde guardamos las monedas ganadas.",category:"fantasia",iconEmoji:"📦",grade:2},{id:"g2_puerta",word:"PUERTA",syllables:["PUER","TA"],hint:"Se abre con una llave para dar la bienvenida.",category:"construccion",iconEmoji:"🚪",grade:2},{id:"g2_pintura",word:"PINTURA",syllables:["PIN","TU","RA"],hint:"Líquido de colores que da vida a las paredes.",category:"construccion",iconEmoji:"🎨",grade:2},{id:"g2_ladrillo",word:"LADRILLO",syllables:["LA","DRI","LLO"],hint:"Bloque rojizo de arcilla cocida para hacer muros fuertes.",category:"construccion",iconEmoji:"🧱",grade:2},{id:"g2_tronco",word:"TRONCO",syllables:["TRON","CO"],hint:"Tallo fuerte del árbol usado para vigas de madera.",category:"naturaleza",iconEmoji:"🪵",grade:2},{id:"g3_cemento",word:"CEMENTO",syllables:["CE","MEN","TO"],hint:"Polvo gris que al mezclar con agua y arena une los ladrillos.",category:"construccion",iconEmoji:"🏗️",grade:3,funFact:"Los antiguos romanos inventaron un cemento tan fuerte que aún sigue en pie."},{id:"g3_ventana",word:"VENTANA",syllables:["VEN","TA","NA"],hint:"Abertura de cristal para ver el sol y que entre aire fresco.",category:"construccion",iconEmoji:"🪟",grade:3},{id:"g3_madera",word:"MADERA",syllables:["MA","DE","RA"],hint:"Material natural cálido para pisos y marcos.",category:"construccion",iconEmoji:"🪵",grade:3},{id:"g3_escalera",word:"ESCALERA",syllables:["ES","CA","LE","RA"],hint:"Peldaños para subir al segundo piso o al desván.",category:"construccion",iconEmoji:"🪜",grade:3},{id:"g3_balcon",word:"BALCÓN",syllables:["BAL","CÓN"],hint:"Mirador en alto con barandilla para disfrutar la vista.",category:"construccion",iconEmoji:"🏰",grade:3},{id:"g3_martillo",word:"MARTILLO",syllables:["MAR","TI","LLO"],hint:"Herramienta pesada para golpear y asegurar clavos.",category:"construccion",iconEmoji:"🔨",grade:3},{id:"g3_jardin",word:"JARDÍN",syllables:["JAR","DÍN"],hint:"Espacio lleno de césped, mariposas y flores alrededor.",category:"naturaleza",iconEmoji:"🪴",grade:3},{id:"g3_camino",word:"CAMINO",syllables:["CA","MI","NO"],hint:"Sendero de piedras que va de la cerca hasta la puerta.",category:"construccion",iconEmoji:"🛤️",grade:3},{id:"g4_chimenea",word:"CHIMENEA",syllables:["CHI","ME","NE","A"],hint:"Conducto vertical que saca el humo de la fogata al cielo.",category:"construccion",iconEmoji:"🔥",grade:4},{id:"g4_albanil",word:"ALBAÑIL",syllables:["AL","BA","ÑIL"],hint:"Experto constructor que levanta paredes con precisión.",category:"construccion",iconEmoji:"👷",grade:4},{id:"g4_edificio",word:"EDIFICIO",syllables:["E","DI","FI","CIO"],hint:"Gran construcción de varios pisos para vivir o trabajar.",category:"construccion",iconEmoji:"🏢",grade:4},{id:"g4_electricidad",word:"ELECTRICIDAD",syllables:["E","LEC","TRI","CI","DAD"],hint:"Energía que viaja por cables y enciende las luces.",category:"construccion",iconEmoji:"⚡",grade:4},{id:"g4_paisaje",word:"PAISAJE",syllables:["PAI","SA","JE"],hint:"Extensión de colinas, cielo y árboles que rodea la casa.",category:"naturaleza",iconEmoji:"🏞️",grade:4},{id:"g4_hormigon",word:"HORMIGÓN",syllables:["HOR","MI","GÓN"],hint:"Mezcla ultra resistente de piedras, arena y cemento.",category:"construccion",iconEmoji:"🏗️",grade:4},{id:"g5_cimientos",word:"CIMIENTOS",syllables:["CI","MIEN","TOS"],hint:"Bases subterráneas firmes que soportan todo el peso de la casa.",category:"construccion",iconEmoji:"🧱",grade:5,funFact:"¡Si los cimientos son profundos y sólidos, la casa resiste vientos y terremotos!"},{id:"g5_estructura",word:"ESTRUCTURA",syllables:["ES","TRUC","TU","RA"],hint:"El esqueleto de vigas y columnas que sostiene techos y paredes.",category:"construccion",iconEmoji:"📐",grade:5},{id:"g5_herramientas",word:"HERRAMIENTAS",syllables:["HE","RRA","MIEN","TAS"],hint:"Conjunto de útiles como cinta métrica, nivel, taladro y llaves.",category:"construccion",iconEmoji:"🧰",grade:5},{id:"g5_aislamiento",word:"AISLAMIENTO",syllables:["AIS","LA","MIEN","TO"],hint:"Capa especial que mantiene la casa tibia en invierno y fresca en verano.",category:"construccion",iconEmoji:"❄️",grade:5},{id:"g5_geometria",word:"GEOMETRÍA",syllables:["GEO","ME","TRÍ","A"],hint:"Ciencia de las figuras (cuadrados, triángulos) para diseñar la casa.",category:"escuela",iconEmoji:"📏",grade:5},{id:"g6_arquitecto",word:"ARQUITECTO",syllables:["AR","QUI","TEC","TO"],hint:"Profesional que dibuja y sueña cómo será la casa perfecta.",category:"escuela",iconEmoji:"🏛️",grade:6,funFact:'La palabra arquitecto viene del griego y significa "jefe constructor".'},{id:"g6_construccion",word:"CONSTRUCCIÓN",syllables:["CONS","TRUC","CIÓN"],hint:"El arte y técnica de edificar casas, puentes y monumentos.",category:"construccion",iconEmoji:"🏗️",grade:6},{id:"g6_sustentable",word:"SUSTENTABLE",syllables:["SUS","TEN","TA","BLE"],hint:"Edificación ecológica que cuida la naturaleza y ahorra agua y luz.",category:"naturaleza",iconEmoji:"♻️",grade:6},{id:"g6_planificacion",word:"PLANIFICACIÓN",syllables:["PLA","NI","FI","CA","CIÓN"],hint:"Organización de los pasos antes de colocar el primer ladrillo.",category:"escuela",iconEmoji:"📋",grade:6},{id:"g6_iluminacion",word:"ILUMINACIÓN",syllables:["I","LU","MI","NA","CIÓN"],hint:"Distribución perfecta de lámparas y tragaluces para la casa.",category:"hogar",iconEmoji:"💡",grade:6}];function H2(r){const e=tv.filter(i=>i.grade===r);return e.length>0?e:tv.filter(i=>i.grade===1)}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */let Gr=null;function Fs(){if(typeof window>"u")return null;if(!Gr){const r=window.AudioContext||window.webkitAudioContext;r&&(Gr=new r)}return Gr&&Gr.state==="suspended"&&Gr.resume(),Gr}const On={coin:(r=!0)=>{if(!r)return;const e=Fs();if(!e)return;const i=e.currentTime,s=e.createOscillator(),l=e.createGain();s.type="sine",s.frequency.setValueAtTime(987.77,i),s.frequency.setValueAtTime(1318.51,i+.08),l.gain.setValueAtTime(.2,i),l.gain.exponentialRampToValueAtTime(.001,i+.35),s.connect(l),l.connect(e.destination),s.start(i),s.stop(i+.35)},cardPop:(r=!0)=>{if(!r)return;const e=Fs();if(!e)return;const i=e.currentTime,s=e.createOscillator(),l=e.createGain();s.type="triangle",s.frequency.setValueAtTime(440,i),s.frequency.exponentialRampToValueAtTime(880,i+.06),l.gain.setValueAtTime(.15,i),l.gain.exponentialRampToValueAtTime(.01,i+.08),s.connect(l),l.connect(e.destination),s.start(i),s.stop(i+.08)},cardReturn:(r=!0)=>{if(!r)return;const e=Fs();if(!e)return;const i=e.currentTime,s=e.createOscillator(),l=e.createGain();s.type="sine",s.frequency.setValueAtTime(520,i),s.frequency.exponentialRampToValueAtTime(320,i+.07),l.gain.setValueAtTime(.12,i),l.gain.exponentialRampToValueAtTime(.01,i+.09),s.connect(l),l.connect(e.destination),s.start(i),s.stop(i+.09)},success:(r=!0)=>{if(!r)return;const e=Fs();if(!e)return;[523.25,659.25,783.99,1046.5].forEach((s,l)=>{const c=e.currentTime+l*.09,d=e.createOscillator(),p=e.createGain();d.type="sine",d.frequency.setValueAtTime(s,c),p.gain.setValueAtTime(.18,c),p.gain.exponentialRampToValueAtTime(.001,c+.28),d.connect(p),p.connect(e.destination),d.start(c),d.stop(c+.28)})},build:(r=!0)=>{if(!r)return;const e=Fs();if(!e)return;const i=e.currentTime,s=e.createOscillator(),l=e.createGain();s.type="triangle",s.frequency.setValueAtTime(220,i),s.frequency.exponentialRampToValueAtTime(60,i+.15),l.gain.setValueAtTime(.3,i),l.gain.exponentialRampToValueAtTime(.01,i+.2),s.connect(l),l.connect(e.destination),s.start(i),s.stop(i+.2);const c=e.createOscillator(),d=e.createGain();c.type="sine",c.frequency.setValueAtTime(1200,i+.02),d.gain.setValueAtTime(.1,i+.02),d.gain.exponentialRampToValueAtTime(.001,i+.25),c.connect(d),d.connect(e.destination),c.start(i+.02),c.stop(i+.25)},error:(r=!0)=>{if(!r)return;const e=Fs();if(!e)return;const i=e.currentTime,s=e.createOscillator(),l=e.createGain();s.type="sine",s.frequency.setValueAtTime(320,i),s.frequency.setValueAtTime(260,i+.12),l.gain.setValueAtTime(.15,i),l.gain.exponentialRampToValueAtTime(.01,i+.25),s.connect(l),l.connect(e.destination),s.start(i),s.stop(i+.25)},fanfare:(r=!0)=>{if(!r)return;const e=Fs();if(!e)return;[{f:523.25,d:.12,t:0},{f:659.25,d:.12,t:.12},{f:783.99,d:.14,t:.24},{f:1046.5,d:.45,t:.38}].forEach(({f:s,d:l,t:c})=>{const d=e.currentTime+c,p=e.createOscillator(),m=e.createGain();p.type="triangle",p.frequency.setValueAtTime(s,d),m.gain.setValueAtTime(.2,d),m.gain.exponentialRampToValueAtTime(.001,d+l),p.connect(m),m.connect(e.destination),p.start(d),p.stop(d+l)})}},Wi={speak:(r,e=!0,i=.9)=>{if(!(!e||typeof window>"u"||!window.speechSynthesis))try{window.speechSynthesis.cancel();const s=new SpeechSynthesisUtterance(r);s.lang="es-ES",s.rate=i,s.pitch=1.15;const c=window.speechSynthesis.getVoices().find(d=>d.lang.startsWith("es")||d.lang.includes("ES")||d.lang.includes("MX"));c&&(s.voice=c),window.speechSynthesis.speak(s)}catch{}},speakLetter:(r,e=!0)=>{Wi.speak(r.toUpperCase(),e,.85)},speakSyllable:(r,e=!0)=>{Wi.speak(r,e,.85)},speakWord:(r,e=!0)=>{Wi.speak(`¡${r}!`,e,.9)}},G2=({currentGrade:r,onGradeChange:e,onWordCompleted:i,onGoToShop:s,soundEnabled:l,voiceEnabled:c})=>{const d=Ke.useMemo(()=>H2(r),[r]),[p,m]=Ke.useState(0),h=d[p]||d[0],[_,y]=Ke.useState([]),[g,T]=Ke.useState([]),[A,U]=Ke.useState(0),[b,v]=Ke.useState(!1),[F,P]=Ke.useState(!1),[D,V]=Ke.useState(!1),[O,L]=Ke.useState(null),E=Ke.useMemo(()=>h.word.toUpperCase().split(""),[h]);Ke.useEffect(()=>{const z=h.word.toUpperCase().split("");y(new Array(z.length).fill(null)),U(0),v(!1),P(!1),L(null);const Y=z.map((ae,H)=>({id:`${ae}_${H}_${Math.random()}`,letter:ae,used:!1}));if(r>=2){const ae=["A","E","O","S","R","L","M","P","T"],H=ae[Math.floor(Math.random()*ae.length)];Y.push({id:`extra_${H}_${Math.random()}`,letter:H,used:!1})}for(let ae=Y.length-1;ae>0;ae--){const H=Math.floor(Math.random()*(ae+1));[Y[ae],Y[H]]=[Y[H],Y[ae]]}if(T(Y),c){const ae=r===1?"¡Vamos a formar la palabra con letras mayúsculas!":"¡Forma la palabra!";Wi.speak(`${ae} ${h.hint}`,c)}},[h,r,c]);const N=(z,Y)=>{if(b)return;const ae=_.findIndex(S=>S===null);if(ae===-1)return;On.cardPop(l),Wi.speakLetter(Y,c);const H=[..._];H[ae]=Y,y(H),T(S=>S.map(k=>k.id===z?{...k,used:!0}:k)),ae===E.length-1&&G(H)},X=z=>{if(b)return;const Y=_[z];if(!Y)return;On.cardReturn(l);const ae=[..._];ae[z]=null,y(ae);const H=g.find(S=>S.used&&S.letter===Y);H&&T(S=>S.map(k=>k.id===H.id?{...k,used:!1}:k))},G=z=>{const Y=z.join(""),ae=E.join(""),H=A+1;if(U(H),Y===ae){v(!0),On.success(l),On.coin(l);const S=15+r*5,k=r>=3?2:1;L({coins:S,gems:k});try{Xv({particleCount:70,spread:80,origin:{y:.65},colors:["#38bdf8","#fbbf24","#34d399","#f43f5e","#a855f7"]})}catch{}Wi.speakWord(ae,c),i(ae,r,H,S)}else On.error(l),V(!0),setTimeout(()=>V(!1),600),c&&Wi.speak("¡Casi! Inténtalo de nuevo",c)},j=()=>{On.cardReturn(l),y(new Array(E.length).fill(null)),T(z=>z.map(Y=>({...Y,used:!1})))},Q=()=>{Wi.speak(`${h.hint}`,c)},te=()=>{const z=h.syllables.join(" ... ");Wi.speak(z,c)},q=()=>{On.cardPop(l),m(z=>(z+1)%d.length)},I=()=>{On.cardPop(l),m(z=>(z-1+d.length)%d.length)};return w.jsxs("div",{className:"w-full flex flex-col gap-5",children:[w.jsxs("div",{className:"bg-white/90 backdrop-blur-md rounded-2xl p-3 shadow-md border border-slate-200 flex flex-wrap items-center justify-between gap-2",children:[w.jsxs("div",{className:"flex items-center gap-2",children:[w.jsx("span",{className:"text-xs md:text-sm font-bold text-slate-500 uppercase tracking-wide",children:"Grado Escolar:"}),w.jsx("div",{className:"flex items-center gap-1.5 overflow-x-auto py-1",children:[1,2,3,4,5,6].map(z=>w.jsxs("button",{onClick:()=>{On.cardPop(l),e(z),m(0)},className:`px-3 py-1.5 rounded-xl font-black text-sm md:text-base btn-3d transition ${r===z?"bg-amber-500 text-white shadow-md scale-105 border-2 border-amber-600":"bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-300"}`,children:[z,"º"]},z))})]}),r===1&&w.jsxs("div",{className:"bg-amber-100 text-amber-900 border border-amber-300 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5",children:[w.jsx(sp,{className:"w-3.5 h-3.5 text-amber-600"}),w.jsx("span",{children:"Nivel 1: LETRAS MAYÚSCULAS IMPRENTAS"})]})]}),w.jsxs("div",{className:"bg-white rounded-3xl p-5 md:p-7 shadow-xl border-4 border-sky-100 flex flex-col items-center relative overflow-hidden",children:[w.jsx("div",{className:"absolute -top-16 -right-16 w-56 h-56 rounded-full bg-sky-50 -z-0 pointer-events-none"}),w.jsxs("div",{className:"w-full flex items-center justify-between mb-4 z-10",children:[w.jsx("button",{onClick:I,className:"w-10 h-10 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center btn-3d",title:"Palabra anterior","aria-label":"Palabra anterior",children:w.jsx(GA,{className:"w-6 h-6"})}),w.jsxs("div",{className:"flex items-center gap-2 bg-sky-50 border border-sky-200 px-3.5 py-1.5 rounded-full text-xs md:text-sm font-bold text-sky-800",children:[w.jsx("span",{className:"text-base",children:h.iconEmoji}),w.jsxs("span",{children:["Palabra ",p+1," de ",d.length]})]}),w.jsx("button",{onClick:q,className:"w-10 h-10 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center btn-3d",title:"Siguiente palabra","aria-label":"Siguiente palabra",children:w.jsx(kA,{className:"w-6 h-6"})})]}),w.jsxs("div",{className:"w-full max-w-xl bg-gradient-to-r from-sky-50 via-indigo-50 to-pink-50 rounded-2xl p-4 md:p-5 border border-sky-200/80 shadow-sm flex flex-col items-center text-center gap-3 z-10 mb-6",children:[w.jsx("div",{className:"text-5xl md:text-6xl animate-bounce drop-shadow",children:h.iconEmoji}),w.jsxs("p",{className:"text-base md:text-xl font-bold text-slate-800 leading-snug",children:['"',h.hint,'"']}),w.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-2 pt-1",children:[w.jsxs("button",{onClick:Q,className:"bg-white/90 hover:bg-white text-sky-700 border border-sky-300 px-3 py-1.5 rounded-xl text-xs md:text-sm font-bold flex items-center gap-1.5 shadow-sm btn-3d",children:[w.jsx(kv,{className:"w-4 h-4 text-sky-600"}),w.jsx("span",{children:"Escuchar pista"})]}),w.jsxs("button",{onClick:te,className:"bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 px-3 py-1.5 rounded-xl text-xs md:text-sm font-bold flex items-center gap-1.5 shadow-sm btn-3d",children:[w.jsx(KA,{className:"w-4 h-4 text-indigo-500"}),w.jsxs("span",{children:["Sílabas: ",h.syllables.join(" - ")]})]})]})]}),w.jsxs("div",{className:"w-full flex flex-col items-center gap-3 mb-6 z-10",children:[w.jsx("span",{className:"text-xs font-bold text-slate-500 uppercase tracking-wider",children:"Arma la palabra aquí:"}),w.jsx("div",{className:`flex flex-wrap items-center justify-center gap-2.5 md:gap-3.5 transition-transform ${D?"animate-[shake_0.5s_ease-in-out]":""}`,children:E.map((z,Y)=>{const ae=_[Y];return w.jsx("button",{onClick:()=>X(Y),disabled:!ae||b,className:`w-14 h-16 md:w-18 md:h-22 rounded-2xl flex items-center justify-center font-black text-2xl md:text-4xl transition-all ${ae?"bg-amber-400 text-slate-900 border-4 border-amber-500 shadow-lg scale-105 btn-3d cursor-pointer":"bg-slate-100 text-slate-300 border-3 border-dashed border-slate-300 hover:border-slate-400"}`,"aria-label":ae?`Quitar letra ${ae}`:`Espacio vacío ${Y+1}`,children:ae||""},Y)})}),w.jsxs("button",{onClick:j,disabled:_.every(z=>z===null)||b,className:"text-xs font-bold text-slate-500 hover:text-slate-700 disabled:opacity-30 flex items-center gap-1 mt-1 transition",children:[w.jsx(Vv,{className:"w-3.5 h-3.5"}),w.jsx("span",{children:"Borrar letras para empezar de nuevo"})]})]}),b?w.jsxs("div",{className:"w-full max-w-md bg-emerald-50 border-3 border-emerald-300 rounded-2xl p-5 flex flex-col items-center text-center gap-3 z-10 animate-[scaleIn_0.3s_ease-out]",children:[w.jsx("div",{className:"w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg",children:w.jsx(ap,{className:"w-9 h-9"})}),w.jsx("h3",{className:"text-xl md:text-2xl font-black text-emerald-800",children:"¡CORRECTO! ¡PALABRA ARMADA!"}),w.jsx("div",{className:"text-2xl md:text-3xl font-black tracking-widest text-emerald-900 bg-white px-6 py-2 rounded-2xl border-2 border-emerald-300 shadow-sm",children:h.word}),O&&w.jsxs("div",{className:"flex items-center gap-4 bg-white/90 border border-emerald-200 px-4 py-2 rounded-full text-sm font-bold text-slate-800 shadow-sm",children:[w.jsxs("span",{className:"flex items-center gap-1.5 text-amber-600",children:[w.jsx(Kr,{className:"w-5 h-5 text-amber-500 fill-amber-400"}),"+",O.coins," Monedas"]}),w.jsxs("span",{className:"flex items-center gap-1.5 text-purple-600",children:[w.jsx(w2,{className:"w-4 h-4 text-purple-500"}),"+",O.gems," Gema"]})]}),h.funFact&&w.jsxs("p",{className:"text-xs text-slate-600 italic bg-white/70 p-2.5 rounded-xl border border-emerald-100",children:["⭐ ",h.funFact]}),w.jsxs("div",{className:"w-full flex flex-col sm:flex-row gap-2.5 pt-2",children:[w.jsxs("button",{onClick:q,className:"flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-black py-3 px-4 rounded-2xl shadow-md border-b-4 border-emerald-800 flex items-center justify-center gap-2 btn-3d text-sm md:text-base",children:[w.jsx("span",{children:"Siguiente Palabra"}),w.jsx(LA,{className:"w-5 h-5"})]}),w.jsxs("button",{onClick:s,className:"flex-1 bg-amber-500 hover:bg-amber-600 text-white font-black py-3 px-4 rounded-2xl shadow-md border-b-4 border-amber-700 flex items-center justify-center gap-2 btn-3d text-sm md:text-base",children:[w.jsx("span",{children:"¡Ir a Construir!"}),w.jsx(Kr,{className:"w-5 h-5"})]})]})]}):w.jsxs("div",{className:"w-full flex flex-col items-center gap-3 z-10",children:[w.jsx("span",{className:"text-xs font-bold text-slate-500 uppercase tracking-wider",children:"Toca las cartas de letras para colocarlas:"}),w.jsx("div",{className:"flex flex-wrap items-center justify-center gap-2.5 md:gap-3.5 max-w-xl",children:g.map(z=>w.jsx("button",{onClick:()=>N(z.id,z.letter),disabled:z.used,className:`w-13 h-16 md:w-16 md:h-20 rounded-2xl font-black text-2xl md:text-3xl flex items-center justify-center transition-all ${z.used?"opacity-20 scale-90 bg-slate-200 border-2 border-slate-300 cursor-not-allowed text-slate-400":"bg-white hover:bg-amber-50 text-slate-800 border-4 border-amber-300 shadow-md hover:shadow-lg hover:-translate-y-1 btn-3d"}`,children:z.letter},z.id))}),A>=2&&!F&&w.jsxs("button",{onClick:()=>{P(!0),Wi.speak(`Pista: La palabra empieza con ${E[0]}`,c)},className:"mt-3 bg-amber-50 border border-amber-300 text-amber-800 px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 animate-pulse btn-3d",children:[w.jsx(u2,{className:"w-4 h-4 text-amber-500"}),w.jsx("span",{children:"¿Necesitas una pista de ayuda?"})]}),F&&w.jsxs("div",{className:"mt-2 bg-amber-100 border border-amber-300 text-amber-900 px-4 py-2 rounded-xl text-xs md:text-sm font-semibold text-center",children:["💡 Pista: La primera letra es ",w.jsx("strong",{className:"text-base font-black underline",children:E[0]})," y tiene ",E.length," letras."]})]})]})]})};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const V2=[{id:"foundation",name:"Cimientos y Base",description:"Plataforma sólida de piedra y hormigón donde descansará toda la casa.",cost:20,unlocked:!0,color:"#94a3b8",defaultColor:"#94a3b8",category:"base",order:1},{id:"walls",name:"Paredes Fuertes",description:"Muros firmes de ladrillo que dan forma y calor a las habitaciones.",cost:35,unlocked:!1,color:"#fef08a",defaultColor:"#fef08a",category:"estructura",order:2},{id:"roof",name:"Tejado Inclinado",description:"Techo protector que resguarda de la lluvia y abriga el hogar.",cost:45,unlocked:!1,color:"#ef4444",defaultColor:"#ef4444",category:"estructura",order:3},{id:"door",name:"Puerta Principal",description:"Puerta con marco de madera y picaporte dorado para entrar.",cost:25,unlocked:!1,color:"#d97706",defaultColor:"#d97706",category:"acabados",order:4},{id:"windows",name:"Ventanas Luminosas",description:"Grandes ventanas con marco que dejan entrar la luz solar.",cost:30,unlocked:!1,color:"#38bdf8",defaultColor:"#38bdf8",category:"acabados",order:5},{id:"chimney",name:"Chimenea Cálida",description:"Chimenea de ladrillo para encender la fogata en noches frías.",cost:30,unlocked:!1,color:"#b91c1c",defaultColor:"#b91c1c",category:"acabados",order:6},{id:"path",name:"Camino de Piedras",description:"Hermoso sendero empedrado que conecta la entrada con el jardín.",cost:20,unlocked:!1,color:"#cbd5e1",defaultColor:"#cbd5e1",category:"exterior",order:7},{id:"fence",name:"Cerca del Jardín",description:"Cerco perimetral de madera para proteger las flores y mascotas.",cost:30,unlocked:!1,color:"#ffffff",defaultColor:"#ffffff",category:"exterior",order:8},{id:"garden",name:"Césped y Flores",description:"Pradera verde esmeralda con margaritas y tulipanes silvestres.",cost:25,unlocked:!1,color:"#4ade80",defaultColor:"#4ade80",category:"exterior",order:9},{id:"decorations",name:"Árboles y Farola",description:"Pinos aromáticos, flores colgantes y una farola que alumbra de noche.",cost:40,unlocked:!1,color:"#15803d",defaultColor:"#15803d",category:"exterior",order:10}],k2={walls:[{name:"Amarillo Sol",hex:"#fef08a",badgeEmoji:"☀️"},{name:"Celeste Cielo",hex:"#bae6fd",badgeEmoji:"☁️"},{name:"Rosa Algodón",hex:"#fbcfe8",badgeEmoji:"🌸"},{name:"Verde Menta",hex:"#bbf7d0",badgeEmoji:"🍃"},{name:"Naranja Melocotón",hex:"#fed7aa",badgeEmoji:"🍑"},{name:"Blanco Nieve",hex:"#f8fafc",badgeEmoji:"❄️"},{name:"Lavanda Dulce",hex:"#e9d5ff",badgeEmoji:"💜"}],roof:[{name:"Rojo Teja",hex:"#ef4444",badgeEmoji:"🧱"},{name:"Azul Zafiro",hex:"#2563eb",badgeEmoji:"🌊"},{name:"Verde Bosque",hex:"#16a34a",badgeEmoji:"🌲"},{name:"Morado Encantado",hex:"#9333ea",badgeEmoji:"✨"},{name:"Naranja Atardecer",hex:"#ea580c",badgeEmoji:"🌅"},{name:"Chocolate Cálido",hex:"#78350f",badgeEmoji:"🍫"}],door:[{name:"Madera Roble",hex:"#d97706",badgeEmoji:"🪵"},{name:"Rojo Pasión",hex:"#dc2626",badgeEmoji:"🔴"},{name:"Turquesa Mar",hex:"#06b6d4",badgeEmoji:"🐬"},{name:"Verde Esmeralda",hex:"#059669",badgeEmoji:"🌿"},{name:"Azul Real",hex:"#1d4ed8",badgeEmoji:"👑"},{name:"Amarillo Girasol",hex:"#eab308",badgeEmoji:"🌻"}],windows:[{name:"Azul Cristal",hex:"#38bdf8",badgeEmoji:"🪟"},{name:"Blanco Puro",hex:"#ffffff",badgeEmoji:"🤍"},{name:"Madera Suave",hex:"#b45309",badgeEmoji:"🪵"},{name:"Oro Brillante",hex:"#f59e0b",badgeEmoji:"⭐"},{name:"Menta Fresca",hex:"#34d399",badgeEmoji:"🌱"}],chimney:[{name:"Ladrillo Rústico",hex:"#b91c1c",badgeEmoji:"🧱"},{name:"Piedra Gris",hex:"#64748b",badgeEmoji:"🪨"},{name:"Terracota",hex:"#c2410c",badgeEmoji:"🏺"},{name:"Negro Forja",hex:"#334155",badgeEmoji:"⚒️"}],fence:[{name:"Blanco Campestre",hex:"#ffffff",badgeEmoji:"🤍"},{name:"Madera Natural",hex:"#b45309",badgeEmoji:"🪵"},{name:"Menta Pastel",hex:"#86efac",badgeEmoji:"🌿"},{name:"Celeste Suave",hex:"#93c5fd",badgeEmoji:"💧"},{name:"Rosa Pastel",hex:"#f472b6",badgeEmoji:"🌷"}]},X2=({coins:r,purchasedParts:e,customization:i,onBuyPart:s,onUpdateColor:l,onGoToWords:c,soundEnabled:d})=>{const[p,m]=Ke.useState("materials"),[h,_]=Ke.useState("walls"),y=A=>{r<A.cost||(On.build(d),On.coin(d),s(A))},g=A=>{On.cardPop(d),l({walls:"wallColor",roof:"roofColor",door:"doorColor",windows:"windowColor",chimney:"chimneyColor",fence:"fenceColor"}[h],A)},T=A=>e.includes(A);return w.jsxs("div",{className:"w-full flex flex-col gap-4",children:[w.jsxs("div",{className:"grid grid-cols-2 gap-3 bg-white/90 backdrop-blur-md p-1.5 rounded-2xl border border-slate-200 shadow-sm",children:[w.jsxs("button",{onClick:()=>{On.cardPop(d),m("materials")},className:`flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-black text-sm md:text-base btn-3d transition ${p==="materials"?"bg-amber-500 text-white shadow-md border-b-4 border-amber-700":"text-slate-600 hover:bg-slate-100"}`,children:[w.jsx(Gh,{className:"w-5 h-5"}),w.jsx("span",{children:"Comprar Materiales"})]}),w.jsxs("button",{onClick:()=>{On.cardPop(d),m("colors")},className:`flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-black text-sm md:text-base btn-3d transition ${p==="colors"?"bg-purple-600 text-white shadow-md border-b-4 border-purple-800":"text-slate-600 hover:bg-slate-100"}`,children:[w.jsx(Zd,{className:"w-5 h-5"}),w.jsx("span",{children:"Tienda de Colores"})]})]}),p==="materials"&&w.jsxs("div",{className:"flex flex-col gap-4",children:[w.jsxs("div",{className:"bg-gradient-to-r from-amber-100 via-orange-50 to-amber-50 rounded-2xl p-4 border border-amber-200 shadow-sm flex items-center justify-between",children:[w.jsxs("div",{className:"flex items-center gap-3",children:[w.jsx("div",{className:"w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center shadow",children:w.jsx(l2,{className:"w-6 h-6"})}),w.jsxs("div",{children:[w.jsx("h3",{className:"text-base md:text-lg font-black text-amber-900",children:"Taller de Construcción"}),w.jsx("p",{className:"text-xs md:text-sm font-semibold text-amber-700",children:"Usa tus monedas ganadas para colocar cada elemento de tu casa."})]})]}),w.jsxs("button",{onClick:c,className:"hidden sm:flex items-center gap-2 bg-white text-amber-900 border border-amber-300 px-3.5 py-2 rounded-xl text-xs font-bold hover:bg-amber-50 btn-3d shadow-sm",children:[w.jsx(Kr,{className:"w-4 h-4 text-amber-500 fill-amber-400"}),w.jsx("span",{children:"Ganar más monedas"})]})]}),w.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3.5",children:V2.map(A=>{const U=T(A.id),b=r>=A.cost;return w.jsxs("div",{className:`rounded-2xl p-4 border-3 transition-all flex flex-col justify-between gap-3 ${U?"bg-emerald-50/70 border-emerald-300 shadow-sm":b?"bg-white border-amber-300 hover:border-amber-400 shadow-md":"bg-slate-50 border-slate-200 opacity-90"}`,children:[w.jsx("div",{className:"flex items-start justify-between gap-2",children:w.jsxs("div",{className:"flex items-center gap-3",children:[w.jsx("div",{className:`w-11 h-11 rounded-2xl flex items-center justify-center font-black text-lg shadow-sm ${U?"bg-emerald-500 text-white":b?"bg-amber-400 text-slate-900":"bg-slate-200 text-slate-500"}`,children:A.order}),w.jsxs("div",{children:[w.jsxs("h4",{className:"text-base font-black text-slate-800 flex items-center gap-1.5",children:[w.jsx("span",{children:A.name}),U&&w.jsx(ap,{className:"w-4 h-4 text-emerald-600 inline"})]}),w.jsx("p",{className:"text-xs text-slate-500 line-clamp-2 leading-relaxed",children:A.description})]})]})}),w.jsxs("div",{className:"flex items-center justify-between pt-1 border-t border-slate-100",children:[w.jsxs("div",{className:"flex items-center gap-1 font-black text-sm",children:[w.jsx(Kr,{className:"w-4 h-4 text-amber-500 fill-amber-400"}),w.jsx("span",{className:U?"text-emerald-700":"text-slate-800",children:U?"Instalado":`${A.cost} Monedas`})]}),U?w.jsxs("button",{onClick:()=>{m("colors");const F={walls:"walls",roof:"roof",door:"door",windows:"windows",chimney:"chimney",fence:"fence"}[A.id];F&&_(F)},className:"bg-emerald-100 hover:bg-emerald-200 text-emerald-800 font-bold px-3 py-1.5 rounded-xl text-xs flex items-center gap-1 btn-3d",children:[w.jsx(Zd,{className:"w-3.5 h-3.5"}),w.jsx("span",{children:"Pintar"})]}):w.jsx("button",{onClick:()=>y(A),disabled:!b,className:`font-black text-xs md:text-sm px-4 py-2 rounded-xl flex items-center gap-1.5 shadow-sm btn-3d transition ${b?"bg-amber-500 hover:bg-amber-600 text-white border-b-3 border-amber-700":"bg-slate-200 text-slate-400 border border-slate-300 cursor-not-allowed"}`,children:b?w.jsxs(w.Fragment,{children:[w.jsx(Gh,{className:"w-4 h-4"}),w.jsx("span",{children:"Construir"})]}):w.jsxs(w.Fragment,{children:[w.jsx(d2,{className:"w-3.5 h-3.5"}),w.jsx("span",{children:"Faltan monedas"})]})})]})]},A.id)})})]}),p==="colors"&&w.jsxs("div",{className:"bg-white rounded-3xl p-5 shadow-xl border-3 border-purple-200 flex flex-col gap-5",children:[w.jsxs("div",{className:"flex items-center gap-3 bg-purple-50 p-3.5 rounded-2xl border border-purple-200",children:[w.jsx("div",{className:"w-11 h-11 rounded-2xl bg-purple-600 text-white flex items-center justify-center shadow",children:w.jsx(Zd,{className:"w-6 h-6"})}),w.jsxs("div",{children:[w.jsx("h3",{className:"text-base md:text-lg font-black text-purple-950",children:"Pinta y Personaliza tu Casa"}),w.jsx("p",{className:"text-xs md:text-sm text-purple-700 font-medium",children:"Elige qué parte quieres pintar y selecciona tu color favorito. ¡El cambio se ve al instante en 3D!"})]})]}),w.jsx("div",{className:"flex flex-wrap gap-2",children:[{id:"walls",label:"Paredes",emoji:"🧱"},{id:"roof",label:"Techo",emoji:"🛖"},{id:"door",label:"Puerta",emoji:"🚪"},{id:"windows",label:"Ventanas",emoji:"🪟"},{id:"chimney",label:"Chimenea",emoji:"🔥"},{id:"fence",label:"Cerca",emoji:"🪵"}].map(A=>w.jsxs("button",{onClick:()=>{On.cardPop(d),_(A.id)},className:`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs md:text-sm font-black btn-3d transition ${h===A.id?"bg-purple-600 text-white shadow-md border-b-3 border-purple-800 scale-105":"bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200"}`,children:[w.jsx("span",{children:A.emoji}),w.jsx("span",{children:A.label})]},A.id))}),w.jsxs("div",{className:"flex flex-col gap-3",children:[w.jsxs("span",{className:"text-xs font-bold text-slate-500 uppercase tracking-wider",children:["Colores Disponibles para ",h.toUpperCase(),":"]}),w.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3",children:k2[h].map(A=>{const b=(h==="walls"?i.wallColor:h==="roof"?i.roofColor:h==="door"?i.doorColor:h==="windows"?i.windowColor:h==="chimney"?i.chimneyColor:i.fenceColor).toLowerCase()===A.hex.toLowerCase();return w.jsxs("button",{onClick:()=>g(A.hex),className:`p-3 rounded-2xl border-3 flex items-center gap-3 transition-all text-left btn-3d ${b?"bg-purple-50 border-purple-600 shadow-md ring-2 ring-purple-300 scale-105":"bg-white border-slate-200 hover:border-slate-300 shadow-sm"}`,children:[w.jsx("div",{className:"w-9 h-9 rounded-xl shadow-inner border-2 border-black/10 flex items-center justify-center text-white",style:{backgroundColor:A.hex},children:b&&w.jsx(BA,{className:"w-5 h-5 drop-shadow stroke-[3]"})}),w.jsxs("div",{className:"flex flex-col overflow-hidden",children:[w.jsx("span",{className:"text-xs font-black text-slate-800 truncate",children:A.name}),w.jsx("span",{className:"text-xs text-slate-400",children:A.badgeEmoji})]})]},A.hex)})})]})]})]})},j2=({challenges:r,dailyStreak:e,onClaimReward:i,soundEnabled:s})=>{const l=d=>{if(!(!d.completed||d.claimed)){On.fanfare(s),On.coin(s);try{Xv({particleCount:50,spread:60,origin:{y:.5}})}catch{}i(d.id)}},c=d=>{switch(d){case"facil":return w.jsx("span",{className:"bg-emerald-100 text-emerald-800 border border-emerald-300 text-xs font-black px-2.5 py-1 rounded-full uppercase tracking-wider",children:"Fácil"});case"medio":return w.jsx("span",{className:"bg-amber-100 text-amber-800 border border-amber-300 text-xs font-black px-2.5 py-1 rounded-full uppercase tracking-wider",children:"Medio"});case"experto":return w.jsx("span",{className:"bg-rose-100 text-rose-800 border border-rose-300 text-xs font-black px-2.5 py-1 rounded-full uppercase tracking-wider",children:"Experto"})}};return w.jsxs("div",{className:"w-full flex flex-col gap-4",children:[w.jsxs("div",{className:"bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 rounded-3xl p-5 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4",children:[w.jsxs("div",{className:"flex items-center gap-4",children:[w.jsx("div",{className:"w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-3xl shadow-inner",children:w.jsx(e2,{className:"w-8 h-8 text-yellow-200 fill-yellow-300 animate-pulse"})}),w.jsxs("div",{children:[w.jsxs("div",{className:"flex items-center gap-2",children:[w.jsx("h3",{className:"text-xl font-black",children:"¡Racha de Constructor!"}),w.jsxs("span",{className:"bg-white text-orange-600 text-xs font-black px-2.5 py-0.5 rounded-full",children:[e," Días"]})]}),w.jsx("p",{className:"text-xs sm:text-sm text-yellow-100 font-medium",children:"Vuelve cada día para ganar monedas extras y construir más rápido."})]})]}),w.jsxs("div",{className:"flex items-center gap-2 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-2xl",children:[w.jsx(zA,{className:"w-5 h-5 text-yellow-200"}),w.jsx("span",{className:"text-xs sm:text-sm font-bold",children:"Retos de hoy"})]})]}),w.jsx("div",{className:"flex flex-col gap-3.5",children:r.map(d=>{const p=Math.min(100,Math.round(d.currentCount/d.targetCount*100));return w.jsxs("div",{className:`rounded-3xl p-5 border-3 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${d.claimed?"bg-slate-50 border-slate-200 opacity-70":d.completed?"bg-emerald-50 border-emerald-300 shadow-md ring-2 ring-emerald-200":"bg-white border-slate-200 hover:border-slate-300 shadow-sm"}`,children:[w.jsxs("div",{className:"flex items-start gap-4 flex-1",children:[w.jsx("div",{className:`w-12 h-12 rounded-2xl flex items-center justify-center text-xl shadow-sm ${d.claimed?"bg-slate-200 text-slate-500":d.completed?"bg-emerald-500 text-white":"bg-amber-100 text-amber-700"}`,children:d.claimed?w.jsx(ap,{className:"w-6 h-6"}):w.jsx(Bv,{className:"w-6 h-6"})}),w.jsxs("div",{className:"flex flex-col gap-1 flex-1",children:[w.jsxs("div",{className:"flex items-center gap-2",children:[w.jsx("h4",{className:"text-base font-black text-slate-800",children:d.title}),c(d.difficulty)]}),w.jsx("p",{className:"text-xs sm:text-sm text-slate-600",children:d.description}),w.jsxs("div",{className:"flex items-center gap-3 pt-2 max-w-sm",children:[w.jsx("div",{className:"flex-1 bg-slate-200 h-2.5 rounded-full overflow-hidden",children:w.jsx("div",{className:`h-full rounded-full transition-all duration-500 ${d.completed?"bg-emerald-500":"bg-amber-500"}`,style:{width:`${p}%`}})}),w.jsxs("span",{className:"text-xs font-black text-slate-600 min-w-14 text-right",children:[d.currentCount," / ",d.targetCount]})]})]})]}),w.jsxs("div",{className:"flex items-center justify-between sm:justify-end w-full sm:w-auto gap-4 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100",children:[w.jsxs("div",{className:"flex items-center gap-2.5 font-black text-xs sm:text-sm",children:[w.jsxs("div",{className:"flex items-center gap-1 text-amber-600 bg-amber-50 px-2.5 py-1 rounded-xl border border-amber-200",children:[w.jsx(Kr,{className:"w-4 h-4 fill-amber-400 text-amber-500"}),w.jsxs("span",{children:["+",d.rewardCoins]})]}),w.jsxs("div",{className:"flex items-center gap-1 text-purple-600 bg-purple-50 px-2.5 py-1 rounded-xl border border-purple-200",children:[w.jsx(Gv,{className:"w-4 h-4 text-purple-500"}),w.jsxs("span",{children:["+",d.rewardGems]})]})]}),d.claimed?w.jsx("span",{className:"text-xs font-bold text-slate-400 bg-slate-100 px-4 py-2 rounded-xl",children:"Reclamado"}):d.completed?w.jsxs("button",{onClick:()=>l(d),className:"bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow-md border-b-3 border-emerald-700 flex items-center gap-1.5 animate-bounce btn-3d",children:[w.jsx(i2,{className:"w-4 h-4"}),w.jsx("span",{children:"¡Reclamar!"})]}):w.jsx("span",{className:"text-xs font-semibold text-slate-400 bg-slate-100 px-3 py-1.5 rounded-xl",children:"En progreso"})]})]},d.id)})})]})},W2=({stats:r,currentGrade:e,onGradeChange:i,onResetProgress:s,onClose:l})=>{const[c,d]=Ke.useState(!1),[p]=Ke.useState(()=>{const P=Math.floor(Math.random()*8)+4,D=Math.floor(Math.random()*6)+3;return{a:P,b:D,ans:P+D}}),[m,h]=Ke.useState(""),[_,y]=Ke.useState(!1),[g,T]=Ke.useState(!1),A=Ke.useMemo(()=>r.totalAttempts===0?100:Math.round(r.correctFirstAttempt/Math.max(1,r.totalWordsCompleted)*100),[r]),U=Ke.useMemo(()=>Object.entries(r.lettersPracticed).sort(([,P],[,D])=>Number(D)-Number(P)).slice(0,8),[r.lettersPracticed]),b=Ke.useMemo(()=>Object.entries(r.difficultLetters).sort(([,P],[,D])=>Number(D)-Number(P)).slice(0,5),[r.difficultLetters]),v=P=>{P.preventDefault(),parseInt(m,10)===p.ans?(d(!0),y(!1)):(y(!0),h(""))},F={1:"En 1º de Primaria el objetivo principal es la asociación fonema-grafema con mayúsculas imprentas y sílabas directas (ma, pa, sa). Motiva al niño a decir en voz alta cada letra antes de colocarla.",2:"En 2º de Primaria el niño refuerza combinaciones trabadas (pl, tr, br) y palabras de 2 y 3 sílabas. Felicítale por reconocer los grupos de letras sin titubear.",3:"En 3º de Primaria se refuerzan distinciones ortográficas (b/v, c/s/z, ll/y). Puedes repasar las palabras practicadas en casa inventando oraciones con ellas.",4:"En 4º de Primaria ampliamos el vocabulario descriptivo y reglas de acentuación básica. La construcción de la casa refuerza la comprensión espacial y técnica.",5:"En 5º de Primaria el vocabulario incluye conceptos de arquitectura, física y sostenibilidad. Excelente para vincular la lectura con ciencias naturales.",6:"En 6º de Primaria se trabaja la fluidez léxica avanzada, términos compuestos y sinónimos arquitectónicos."};return w.jsx("div",{className:"w-full flex flex-col gap-6",children:c?w.jsxs("div",{className:"flex flex-col gap-5",children:[w.jsxs("div",{className:"bg-white rounded-3xl p-5 md:p-6 shadow-md border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4",children:[w.jsxs("div",{className:"flex items-center gap-3.5",children:[w.jsx("div",{className:"w-13 h-13 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow",children:w.jsx(s2,{className:"w-7 h-7"})}),w.jsxs("div",{children:[w.jsx("h3",{className:"text-xl font-black text-slate-800",children:"Informe de Progreso Educativo"}),w.jsx("p",{className:"text-xs sm:text-sm text-slate-500",children:"Seguimiento pedagógico de lectura, precisión y vocabulario adquirido."})]})]}),w.jsxs("div",{className:"flex items-center gap-2 bg-indigo-50 px-3.5 py-2 rounded-2xl border border-indigo-200",children:[w.jsx("span",{className:"text-xs font-bold text-indigo-900",children:"Grado:"}),w.jsxs("select",{value:e,onChange:P=>i(parseInt(P.target.value,10)),className:"bg-white text-indigo-900 text-xs font-black px-2 py-1 rounded-xl border border-indigo-300 focus:outline-none",children:[w.jsx("option",{value:1,children:"1º Primaria (Mayúsculas)"}),w.jsx("option",{value:2,children:"2º Primaria (Trabadas)"}),w.jsx("option",{value:3,children:"3º Primaria (Ortografía)"}),w.jsx("option",{value:4,children:"4º Primaria (Vocabulario)"}),w.jsx("option",{value:5,children:"5º Primaria (Avanzado)"}),w.jsx("option",{value:6,children:"6º Primaria (Maestro)"})]})]})]}),w.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-3.5",children:[w.jsxs("div",{className:"bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-1",children:[w.jsx("span",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider",children:"Palabras Aprendidas"}),w.jsxs("div",{className:"flex items-baseline gap-2",children:[w.jsx("span",{className:"text-3xl font-black text-slate-800",children:r.totalWordsCompleted}),w.jsx("span",{className:"text-xs text-emerald-600 font-bold",children:"palabras"})]})]}),w.jsxs("div",{className:"bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-1",children:[w.jsx("span",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider",children:"Acierto al 1er Intento"}),w.jsxs("div",{className:"flex items-baseline gap-2",children:[w.jsxs("span",{className:"text-3xl font-black text-emerald-600",children:[A,"%"]}),w.jsx("span",{className:"text-xs text-slate-500 font-medium",children:"precisión"})]})]}),w.jsxs("div",{className:"bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-1",children:[w.jsx("span",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider",children:"Racha de Días"}),w.jsxs("div",{className:"flex items-baseline gap-2",children:[w.jsx("span",{className:"text-3xl font-black text-amber-500",children:r.dailyStreak}),w.jsx("span",{className:"text-xs text-slate-500 font-medium",children:"días activos"})]})]}),w.jsxs("div",{className:"bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-1",children:[w.jsx("span",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider",children:"Total Intentos"}),w.jsxs("div",{className:"flex items-baseline gap-2",children:[w.jsx("span",{className:"text-3xl font-black text-indigo-600",children:r.totalAttempts}),w.jsx("span",{className:"text-xs text-slate-500 font-medium",children:"intentos"})]})]})]}),w.jsxs("div",{className:"bg-indigo-50/70 border border-indigo-200 rounded-3xl p-5 flex flex-col gap-2",children:[w.jsxs("div",{className:"flex items-center gap-2 text-indigo-900 font-black text-sm",children:[w.jsx(sp,{className:"w-4 h-4 text-indigo-600"}),w.jsxs("span",{children:["Consejo pedagógico para ",e,"º de Primaria:"]})]}),w.jsx("p",{className:"text-xs md:text-sm text-indigo-800 leading-relaxed",children:F[e]})]}),w.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[w.jsxs("div",{className:"bg-white rounded-3xl p-5 border border-slate-200 shadow-sm flex flex-col gap-3",children:[w.jsxs("h4",{className:"text-sm font-black text-slate-800 flex items-center gap-2",children:[w.jsx(qA,{className:"w-4 h-4 text-emerald-500"}),w.jsx("span",{children:"Letras más practicadas:"})]}),U.length===0?w.jsx("p",{className:"text-xs text-slate-400",children:"Aún no hay suficientes datos registrados."}):w.jsx("div",{className:"flex flex-wrap gap-2",children:U.map(([P,D])=>w.jsxs("div",{className:"bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-xl flex items-center gap-2",children:[w.jsx("span",{className:"font-black text-emerald-800 text-sm",children:P}),w.jsxs("span",{className:"text-xs font-bold text-emerald-600 bg-emerald-100 px-1.5 py-0.5 rounded-md",children:[D,"x"]})]},P))})]}),w.jsxs("div",{className:"bg-white rounded-3xl p-5 border border-slate-200 shadow-sm flex flex-col gap-3",children:[w.jsxs("h4",{className:"text-sm font-black text-slate-800 flex items-center gap-2",children:[w.jsx(jA,{className:"w-4 h-4 text-amber-500"}),w.jsx("span",{children:"Letras sugeridas para reforzar:"})]}),b.length===0?w.jsx("p",{className:"text-xs text-slate-500",children:"¡Excelente! No se registran tropiezos frecuentes en ninguna letra."}):w.jsx("div",{className:"flex flex-wrap gap-2",children:b.map(([P,D])=>w.jsxs("div",{className:"bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-xl flex items-center gap-2",children:[w.jsx("span",{className:"font-black text-amber-900 text-sm",children:P}),w.jsxs("span",{className:"text-xs font-bold text-amber-700 bg-amber-100 px-1.5 py-0.5 rounded-md",children:[D," errores"]})]},P))})]})]}),w.jsxs("div",{className:"bg-white rounded-3xl p-5 border border-slate-200 shadow-sm flex flex-col gap-3",children:[w.jsxs("h4",{className:"text-sm font-black text-slate-800 flex items-center gap-2",children:[w.jsx(Hv,{className:"w-4 h-4 text-indigo-600"}),w.jsx("span",{children:"Historial de palabras resueltas recientemente:"})]}),r.completedWordsHistory.length===0?w.jsx("p",{className:"text-xs text-slate-400",children:"El niño aún no ha completado palabras en esta sesión."}):w.jsx("div",{className:"max-h-48 overflow-y-auto divide-y divide-slate-100",children:r.completedWordsHistory.slice(-15).reverse().map((P,D)=>w.jsxs("div",{className:"py-2.5 flex items-center justify-between text-xs",children:[w.jsxs("div",{className:"flex items-center gap-2",children:[w.jsx("span",{className:"font-black text-slate-800 text-sm",children:P.word}),w.jsxs("span",{className:"bg-slate-100 text-slate-600 font-bold px-2 py-0.5 rounded-md",children:["Grado ",P.grade,"º"]})]}),w.jsxs("div",{className:"flex items-center gap-3",children:[w.jsx("span",{className:`font-bold px-2 py-0.5 rounded-md ${P.attempts===1?"bg-emerald-100 text-emerald-800":"bg-amber-100 text-amber-800"}`,children:P.attempts===1?"Al primer intento":`${P.attempts} intentos`}),w.jsx("span",{className:"text-slate-400",children:new Date(P.timestamp).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})})]})]},D))})]}),w.jsxs("div",{className:"pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3",children:[g?w.jsxs("div",{className:"flex items-center gap-3 bg-rose-50 border border-rose-200 p-2.5 rounded-xl",children:[w.jsx("span",{className:"text-xs font-bold text-rose-800",children:"¿Estás seguro de borrar los progresos?"}),w.jsx("button",{onClick:()=>{s(),T(!1),l()},className:"bg-rose-600 text-white font-bold text-xs px-3 py-1 rounded-lg hover:bg-rose-700",children:"Sí, reiniciar"}),w.jsx("button",{onClick:()=>T(!1),className:"text-xs font-bold text-slate-500 hover:text-slate-700",children:"Cancelar"})]}):w.jsxs("button",{onClick:()=>T(!0),className:"text-xs font-bold text-rose-600 hover:text-rose-800 flex items-center gap-1.5",children:[w.jsx(Vv,{className:"w-4 h-4"}),w.jsx("span",{children:"Reiniciar datos y comenzar casa desde cero"})]}),w.jsx("button",{onClick:l,className:"bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs md:text-sm px-5 py-2.5 rounded-xl btn-3d",children:"Volver al Juego"})]})]}):w.jsxs("div",{className:"bg-white rounded-3xl p-6 md:p-8 shadow-xl border-4 border-slate-200 flex flex-col items-center text-center max-w-md mx-auto",children:[w.jsx("div",{className:"w-16 h-16 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-3",children:w.jsx(y2,{className:"w-9 h-9"})}),w.jsx("h3",{className:"text-xl md:text-2xl font-black text-slate-800",children:"Control para Padres"}),w.jsx("p",{className:"text-xs md:text-sm text-slate-500 mt-1 mb-5",children:"Para ver las estadísticas educativas y ajustar el grado escolar, resuelve esta pequeña suma:"}),w.jsxs("form",{onSubmit:v,className:"w-full flex flex-col gap-4",children:[w.jsxs("div",{className:"bg-slate-100 p-4 rounded-2xl text-2xl font-black text-slate-800 tracking-wider",children:[p.a," + ",p.b," = ?"]}),w.jsx("input",{type:"number",value:m,onChange:P=>h(P.target.value),placeholder:"Escribe el resultado",autoFocus:!0,className:"w-full text-center text-xl font-bold py-3 px-4 rounded-2xl border-2 border-slate-300 focus:border-indigo-500 focus:outline-none"}),_&&w.jsx("span",{className:"text-xs font-bold text-rose-500",children:"Respuesta incorrecta. Inténtalo de nuevo."}),w.jsx("button",{type:"submit",className:"w-full bg-indigo-600 hover:bg-indigo-700 text-white font-black py-3 rounded-2xl shadow-md border-b-4 border-indigo-800 btn-3d",children:"Entrar al Panel de Padres"}),w.jsx("button",{type:"button",onClick:l,className:"text-xs font-bold text-slate-400 hover:text-slate-600",children:"Volver al juego"})]})]})})};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function q2(){const[r,e]=Ke.useState(null),[i,s]=Ke.useState(!1),[l,c]=Ke.useState(!1);return Ke.useEffect(()=>{const p=window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone===!0;s(p);const m=window.navigator.userAgent.toLowerCase(),h=/iphone|ipad|ipod/.test(m);c(h);const _=g=>{g.preventDefault(),e(g)},y=()=>{s(!0),e(null)};return window.addEventListener("beforeinstallprompt",_),window.addEventListener("appinstalled",y),()=>{window.removeEventListener("beforeinstallprompt",_),window.removeEventListener("appinstalled",y)}},[]),{isInstallable:!!r,isInstalled:i,isIOS:l,install:async()=>{if(!r)return!1;await r.prompt();const{outcome:p}=await r.userChoice;return p==="accepted"?(s(!0),e(null),!0):!1}}}const Y2=()=>{const{isInstallable:r,isInstalled:e,isIOS:i,install:s}=q2(),[l,c]=Ke.useState(!1);return e?null:r?w.jsxs("button",{onClick:s,className:"flex items-center gap-1.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 px-3 py-1.5 text-xs font-black text-white shadow-md border-b-2 border-emerald-800 btn-3d transition",title:"Instalar para jugar sin conexión",children:[w.jsx(ev,{className:"w-4 h-4"}),w.jsx("span",{className:"hidden sm:inline",children:"Instalar App Offline"}),w.jsx("span",{className:"sm:hidden",children:"Instalar"})]}):i?w.jsxs(w.Fragment,{children:[w.jsxs("button",{onClick:()=>c(!0),className:"flex items-center gap-1.5 rounded-2xl border border-sky-300 bg-white/80 px-2.5 py-1.5 text-xs font-bold text-sky-800 hover:bg-white shadow-sm btn-3d",title:"Instalar en iPad o iPhone",children:[w.jsx(b2,{className:"w-3.5 h-3.5 text-sky-600"}),w.jsx("span",{className:"hidden sm:inline",children:"Jugar Offline"})]}),l&&w.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs",children:w.jsxs("div",{className:"w-full max-w-sm rounded-3xl bg-white p-6 shadow-2xl border-4 border-sky-200 flex flex-col gap-4 text-center",children:[w.jsx("div",{className:"w-12 h-12 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center mx-auto",children:w.jsx(ev,{className:"w-6 h-6"})}),w.jsx("h3",{className:"text-lg font-black text-slate-800",children:"Instalar en iPhone / iPad"}),w.jsxs("p",{className:"text-xs text-slate-600 leading-relaxed text-left bg-sky-50 p-3.5 rounded-2xl border border-sky-100",children:["1. Toca el botón ",w.jsx("strong",{children:"Compartir"})," en la barra de Safari (icono con flecha hacia arriba).",w.jsx("br",{}),"2. Desliza hacia abajo y pulsa en ",w.jsx("strong",{children:'"Añadir a pantalla de inicio"'}),".",w.jsx("br",{}),"3. ¡Listo! Podrás abrirlo y jugar 100% sin internet en cualquier lugar."]}),w.jsx("button",{onClick:()=>c(!1),className:"w-full rounded-2xl bg-sky-600 py-2.5 text-sm font-black text-white hover:bg-sky-700 btn-3d",children:"Entendido"})]})})]}):null};function Z2(){const[r,e]=Ke.useState(typeof navigator<"u"?navigator.onLine:!0);return Ke.useEffect(()=>{const i=()=>e(!0),s=()=>e(!1);return window.addEventListener("online",i),window.addEventListener("offline",s),()=>{window.removeEventListener("online",i),window.removeEventListener("offline",s)}},[]),r}const jv=()=>{const r=Z2();return w.jsx("div",{className:`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border transition ${r?"bg-emerald-50 text-emerald-800 border-emerald-200":"bg-amber-100 text-amber-900 border-amber-300 animate-pulse"}`,title:r?"Conectado a Internet (Modo Offline disponible)":"Modo Offline Activo: Puedes seguir jugando sin conexión.",children:r?w.jsxs(w.Fragment,{children:[w.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-500"}),w.jsx("span",{className:"hidden md:inline",children:"Offline Listo"})]}):w.jsxs(w.Fragment,{children:[w.jsx(O2,{className:"w-3.5 h-3.5 text-amber-600"}),w.jsx("span",{children:"Sin Conexión (Offline OK)"})]})})},K2=({coins:r,gems:e,currentGrade:i,activeTab:s,onSelectTab:l,soundEnabled:c,onToggleSound:d,voiceEnabled:p,onToggleVoice:m,hasUnclaimedChallenges:h})=>w.jsx("header",{className:"w-full bg-white/95 backdrop-blur-md border-b-4 border-sky-200 shadow-sm sticky top-0 z-40 px-3 md:px-6 py-2.5",children:w.jsxs("div",{className:"max-w-7xl mx-auto flex flex-col gap-2",children:[w.jsxs("div",{className:"flex items-center justify-between gap-3",children:[w.jsxs("div",{className:"flex items-center gap-2.5",children:[w.jsx("div",{className:"w-10 h-10 md:w-11 md:h-11 rounded-2xl bg-gradient-to-tr from-sky-500 to-indigo-500 text-white flex items-center justify-center shadow-md text-xl font-black border-2 border-white",children:"🏠"}),w.jsxs("div",{children:[w.jsxs("h1",{className:"text-sm md:text-lg font-black text-slate-800 leading-tight flex items-center gap-1.5",children:[w.jsx("span",{children:"Constructor 3D"}),w.jsxs("span",{className:"bg-amber-400 text-slate-950 text-[10px] md:text-xs font-black px-2 py-0.5 rounded-full shadow-xs",children:[i,"º Primaria"]})]}),w.jsx("p",{className:"text-[10px] md:text-xs font-semibold text-slate-500 hidden sm:block",children:"Aprende a leer y construye tu casa"})]})]}),w.jsxs("div",{className:"flex items-center gap-2 md:gap-3",children:[w.jsxs("div",{className:"flex items-center gap-1.5 bg-amber-50 border-2 border-amber-300 px-3 py-1.5 rounded-2xl shadow-xs",children:[w.jsx(Kr,{className:"w-5 h-5 text-amber-500 fill-amber-400 animate-pulse"}),w.jsx("span",{className:"text-sm md:text-base font-black text-amber-950",children:r})]}),w.jsxs("div",{className:"flex items-center gap-1.5 bg-purple-50 border-2 border-purple-300 px-3 py-1.5 rounded-2xl shadow-xs",children:[w.jsx(Gv,{className:"w-4 h-4 text-purple-600 fill-purple-200"}),w.jsx("span",{className:"text-sm md:text-base font-black text-purple-950",children:e})]}),w.jsx("div",{className:"hidden lg:block",children:w.jsx(jv,{})}),w.jsx(Y2,{}),w.jsx("button",{onClick:m,className:`w-9 h-9 md:w-10 md:h-10 rounded-2xl border flex items-center justify-center btn-3d transition ${p?"bg-sky-50 border-sky-300 text-sky-700":"bg-slate-100 border-slate-300 text-slate-400"}`,title:p?"Voz activada (lee letras y palabras)":"Voz desactivada","aria-label":"Alternar voz",children:w.jsx("span",{className:"text-xs font-black",children:"🗣️"})}),w.jsx("button",{onClick:d,className:`w-9 h-9 md:w-10 md:h-10 rounded-2xl border flex items-center justify-center btn-3d transition ${c?"bg-sky-50 border-sky-300 text-sky-700":"bg-slate-100 border-slate-300 text-slate-400"}`,title:c?"Sonidos activados":"Sonidos silenciados","aria-label":"Alternar sonido",children:c?w.jsx(kv,{className:"w-4 h-4 text-sky-600"}):w.jsx(U2,{className:"w-4 h-4 text-slate-400"})})]})]}),w.jsxs("nav",{className:"grid grid-cols-4 gap-2 pt-1",children:[w.jsxs("button",{onClick:()=>l("words"),className:`flex items-center justify-center gap-1.5 md:gap-2.5 py-2.5 px-2 rounded-2xl font-black text-xs md:text-sm btn-3d transition border-b-4 ${s==="words"?"bg-sky-500 text-white border-sky-700 shadow-md scale-102":"bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300"}`,children:[w.jsx(Hv,{className:"w-4 h-4 md:w-5 md:h-5 shrink-0"}),w.jsx("span",{className:"truncate",children:"Palabras"})]}),w.jsxs("button",{onClick:()=>l("shop"),className:`flex items-center justify-center gap-1.5 md:gap-2.5 py-2.5 px-2 rounded-2xl font-black text-xs md:text-sm btn-3d transition border-b-4 ${s==="shop"?"bg-amber-500 text-white border-amber-700 shadow-md scale-102":"bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300"}`,children:[w.jsx(Gh,{className:"w-4 h-4 md:w-5 md:h-5 shrink-0"}),w.jsx("span",{className:"truncate",children:"Construir"})]}),w.jsxs("button",{onClick:()=>l("challenges"),className:`relative flex items-center justify-center gap-1.5 md:gap-2.5 py-2.5 px-2 rounded-2xl font-black text-xs md:text-sm btn-3d transition border-b-4 ${s==="challenges"?"bg-purple-600 text-white border-purple-800 shadow-md scale-102":"bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300"}`,children:[w.jsx(Bv,{className:"w-4 h-4 md:w-5 md:h-5 shrink-0"}),w.jsx("span",{className:"truncate",children:"Desafíos"}),h&&w.jsx("span",{className:"absolute -top-1 -right-1 w-3.5 h-3.5 bg-rose-500 border-2 border-white rounded-full animate-bounce"})]}),w.jsxs("button",{onClick:()=>l("parents"),className:`flex items-center justify-center gap-1.5 md:gap-2.5 py-2.5 px-2 rounded-2xl font-black text-xs md:text-sm btn-3d transition border-b-4 ${s==="parents"?"bg-indigo-600 text-white border-indigo-800 shadow-md scale-102":"bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300"}`,children:[w.jsx(R2,{className:"w-4 h-4 md:w-5 md:h-5 shrink-0"}),w.jsx("span",{className:"truncate",children:"Padres"})]})]})]})});function Q2(){const[r,e]=Ke.useState(()=>aS()),[i,s]=Ke.useState("words"),[l,c]=Ke.useState(null),[d,p]=Ke.useState(null);Ke.useEffect(()=>{sS(r)},[r]),Ke.useEffect(()=>{const F=setInterval(()=>{e(P=>({...P,parentStats:{...P.parentStats,timeSpentSeconds:P.parentStats.timeSpentSeconds+10}}))},1e4);return()=>clearInterval(F)},[]);const m=F=>{p(F),setTimeout(()=>{p(null)},3500)},h=Ke.useCallback((F,P,D,V)=>{e(O=>{const L=O.coins+V,E=O.parentStats.totalCoinsEarned+V,N={...O.parentStats.lettersPracticed};F.split("").forEach(Q=>{N[Q]=(N[Q]||0)+1});const X={...O.parentStats.difficultLetters};D>1&&F.split("").forEach(Q=>{X[Q]=(X[Q]||0)+1});const G=O.dailyChallenges.map(Q=>{if(Q.completed)return Q;let te=!1;Q.type==="words_count"&&(te=!0),Q.type==="streak_words"&&D===1&&(te=!0),Q.type==="grade_words"&&P===O.currentGrade&&(te=!0);const q=te?Q.currentCount+1:Q.currentCount;return{...Q,currentCount:q,completed:q>=Q.targetCount}}),j=[...O.parentStats.completedWordsHistory,{word:F,grade:P,timestamp:Date.now(),attempts:D}];return{...O,coins:L,dailyChallenges:G,parentStats:{...O.parentStats,totalWordsCompleted:O.parentStats.totalWordsCompleted+1,correctFirstAttempt:D===1?O.parentStats.correctFirstAttempt+1:O.parentStats.correctFirstAttempt,totalAttempts:O.parentStats.totalAttempts+D,totalCoinsEarned:E,lettersPracticed:N,difficultLetters:X,completedWordsHistory:j}}}),m(`¡Ganaste +${V} monedas! Ya puedes ir a construir tu casa.`)},[]),_=Ke.useCallback(F=>{e(P=>P.coins<F.cost||P.purchasedParts.includes(F.id)?P:{...P,coins:P.coins-F.cost,purchasedParts:[...P.purchasedParts,F.id]}),c(F.id),setTimeout(()=>c(null),1e3),m(`¡"${F.name}" agregada a tu casa 3D!`)},[]),y=Ke.useCallback((F,P)=>{e(D=>({...D,customization:{...D.customization,[F]:P}}))},[]),g=Ke.useCallback(F=>{e(P=>{const D=P.dailyChallenges.find(V=>V.id===F);return!D||!D.completed||D.claimed?P:{...P,coins:P.coins+D.rewardCoins,gems:P.gems+D.rewardGems,dailyChallenges:P.dailyChallenges.map(V=>V.id===F?{...V,claimed:!0}:V)}}),m("¡Recompensa de desafío diario reclamada!")},[]),T=Ke.useCallback(F=>{e(P=>({...P,currentGrade:F})),m(`Cambiado a ${F}º de Primaria.`)},[]),A=Ke.useCallback(()=>{e(F=>({...F,soundEnabled:!F.soundEnabled}))},[]),U=Ke.useCallback(()=>{e(F=>({...F,voiceEnabled:!F.voiceEnabled}))},[]),b=Ke.useCallback(()=>{const F=rS();e(F),m("Juego reiniciado correctamente.")},[]),v=Ke.useMemo(()=>r.dailyChallenges.some(F=>F.completed&&!F.claimed),[r.dailyChallenges]);return w.jsxs("div",{className:"min-h-screen bg-slate-100 flex flex-col antialiased selection:bg-amber-300",children:[w.jsx(K2,{coins:r.coins,gems:r.gems,currentGrade:r.currentGrade,activeTab:i,onSelectTab:s,soundEnabled:r.soundEnabled,onToggleSound:A,voiceEnabled:r.voiceEnabled,onToggleVoice:U,hasUnclaimedChallenges:v}),d&&w.jsxs("div",{className:"fixed top-28 left-1/2 -translate-x-1/2 z-50 bg-slate-900/90 text-white backdrop-blur-md px-5 py-2.5 rounded-full shadow-2xl border border-white/20 text-xs md:text-sm font-black flex items-center gap-2 animate-bounce",children:[w.jsx("span",{children:"✨"}),w.jsx("span",{children:d})]}),w.jsx("main",{className:"flex-1 max-w-7xl w-full mx-auto p-3 md:p-6 flex flex-col gap-6",children:w.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-5 items-start",children:[w.jsxs("div",{className:"lg:col-span-5 flex flex-col gap-3 lg:sticky lg:top-24",children:[w.jsxs("div",{className:"flex items-center justify-between px-1",children:[w.jsx("span",{className:"text-xs font-black text-slate-500 uppercase tracking-wider flex items-center gap-1.5",children:w.jsx("span",{children:"Tu Casa en Construcción (3D)"})}),w.jsx("div",{className:"lg:hidden",children:w.jsx(jv,{})})]}),w.jsx("div",{className:"w-full aspect-[4/3] lg:aspect-auto lg:h-[460px]",children:w.jsx(B2,{purchasedParts:r.purchasedParts,customization:r.customization,newlyAddedPartId:l})})]}),w.jsxs("div",{className:"lg:col-span-7 flex flex-col gap-4",children:[i==="words"&&w.jsx(G2,{currentGrade:r.currentGrade,onGradeChange:T,onWordCompleted:h,onGoToShop:()=>s("shop"),soundEnabled:r.soundEnabled,voiceEnabled:r.voiceEnabled}),i==="shop"&&w.jsx(X2,{coins:r.coins,purchasedParts:r.purchasedParts,customization:r.customization,onBuyPart:_,onUpdateColor:y,onGoToWords:()=>s("words"),soundEnabled:r.soundEnabled}),i==="challenges"&&w.jsx(j2,{challenges:r.dailyChallenges,dailyStreak:r.parentStats.dailyStreak,onClaimReward:g,soundEnabled:r.soundEnabled}),i==="parents"&&w.jsx(W2,{stats:r.parentStats,currentGrade:r.currentGrade,onGradeChange:T,onResetProgress:b,onClose:()=>s("words")})]})]})}),w.jsx("footer",{className:"w-full py-4 text-center text-xs text-slate-400 border-t border-slate-200 mt-auto bg-white/50",children:w.jsx("p",{children:"Constructor de Palabras 3D — Aprende a leer jugando y construyendo • Compatible 100% Sin Conexión (Offline)"})})]})}iS.createRoot(document.getElementById("root")).render(w.jsx(Ke.StrictMode,{children:w.jsx(Q2,{})}));
