import { e, c, d, a, f, g, b } from './chunk-2LLIEKPA.mjs';
import { jsx } from 'react/jsx-runtime';

var Q=e(re=>{re._=re._interop_require_default=Sr;function Sr(e){return e&&e.__esModule?e:{default:e}}});var oe=e(ne=>{Object.defineProperty(ne,"__esModule",{value:!0});function Cr(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]});}Cr(ne,{searchParamsToUrlQuery:function(){return jr},urlQueryToSearchParams:function(){return Ir},assign:function(){return Mr}});function jr(e){let t={};return e.forEach((r,n)=>{typeof t[n]=="undefined"?t[n]=r:Array.isArray(t[n])?t[n].push(r):t[n]=[t[n],r];}),t}function ot(e){return typeof e=="string"||typeof e=="number"&&!isNaN(e)||typeof e=="boolean"?String(e):""}function Ir(e){let t=new URLSearchParams;return Object.entries(e).forEach(r=>{let[n,o]=r;Array.isArray(o)?o.forEach(i=>t.append(n,ot(i))):t.set(n,ot(o));}),t}function Mr(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return r.forEach(o=>{Array.from(o.keys()).forEach(i=>e.delete(i)),o.forEach((i,a)=>e.append(a,i));}),e}});var ut=e(ie=>{function it(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,r=new WeakMap;return (it=function(n){return n?r:t})(e)}ie._=ie._interop_require_wildcard=Ar;function Ar(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return {default:e};var r=it(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(i!=="default"&&Object.prototype.hasOwnProperty.call(e,i)){var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(n,i,a):n[i]=e[i];}return n.default=e,r&&r.set(e,n),n}});var se=e(ue=>{Object.defineProperty(ue,"__esModule",{value:!0});function Lr(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]});}Lr(ue,{formatUrl:function(){return st},urlObjectKeys:function(){return at},formatWithValidation:function(){return kr}});var qr=ut(),Ur=qr._(oe()),Dr=/https?|ftp|gopher|file/;function st(e){let{auth:t,hostname:r}=e,n=e.protocol||"",o=e.pathname||"",i=e.hash||"",a=e.query||"",s=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?s=t+e.host:r&&(s=t+(~r.indexOf(":")?"["+r+"]":r),e.port&&(s+=":"+e.port)),a&&typeof a=="object"&&(a=String(Ur.urlQueryToSearchParams(a)));let u=e.search||a&&"?"+a||"";return n&&!n.endsWith(":")&&(n+=":"),e.slashes||(!n||Dr.test(n))&&s!==!1?(s="//"+(s||""),o&&o[0]!=="/"&&(o="/"+o)):s||(s=""),i&&i[0]!=="#"&&(i="#"+i),u&&u[0]!=="?"&&(u="?"+u),o=o.replace(/[?#]/g,encodeURIComponent),u=u.replace("#","%23"),""+n+s+o+u+i}var at=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function kr(e){return process.env.NODE_ENV==="development"&&e!==null&&typeof e=="object"&&Object.keys(e).forEach(t=>{at.includes(t)||console.warn("Unknown key passed via urlObject into url.format: "+t);}),st(e)}});var lt=e(ae=>{Object.defineProperty(ae,"__esModule",{value:!0});Object.defineProperty(ae,"omit",{enumerable:!0,get:function(){return zr}});function zr(e,t){let r={};return Object.keys(e).forEach(n=>{t.includes(n)||(r[n]=e[n]);}),r}});var V=e(he=>{Object.defineProperty(he,"__esModule",{value:!0});function Wr(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]});}Wr(he,{WEB_VITALS:function(){return Hr},execOnce:function(){return Vr},isAbsoluteUrl:function(){return Kr},getLocationOrigin:function(){return ct},getURL:function(){return Fr},getDisplayName:function(){return Y},isResSent:function(){return ft},normalizeRepeatedSlashes:function(){return Gr},loadGetInitialProps:function(){return dt},SP:function(){return pt},ST:function(){return $r},DecodeError:function(){return le},NormalizeError:function(){return ce},PageNotFoundError:function(){return fe},MissingStaticPage:function(){return de},MiddlewareNotFoundError:function(){return pe},stringifyError:function(){return Xr}});var Hr=["CLS","FCP","FID","INP","LCP","TTFB"];function Vr(e){let t=!1,r;return function(){for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return t||(t=!0,r=e(...o)),r}}var Br=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,Kr=e=>Br.test(e);function ct(){let{protocol:e,hostname:t,port:r}=window.location;return e+"//"+t+(r?":"+r:"")}function Fr(){let{href:e}=window.location,t=ct();return e.substring(t.length)}function Y(e){return typeof e=="string"?e:e.displayName||e.name||"Unknown"}function ft(e){return e.finished||e.headersSent}function Gr(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}function dt(e,t){return g(this,null,function*(){if(process.env.NODE_ENV!=="production"){var r;if((r=e.prototype)!=null&&r.getInitialProps){let i='"'+Y(e)+'.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.';throw new Error(i)}}let n=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:yield dt(t.Component,t.ctx)}:{};let o=yield e.getInitialProps(t);if(n&&ft(n))return o;if(!o){let i='"'+Y(e)+'.getInitialProps()" should resolve to an object. But found "'+o+'" instead.';throw new Error(i)}return process.env.NODE_ENV!=="production"&&Object.keys(o).length===0&&!t.ctx&&console.warn(""+Y(e)+" returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps"),o})}var pt=typeof performance!="undefined",$r=pt&&["mark","measure","getEntriesByName"].every(e=>typeof performance[e]=="function"),le=class extends Error{},ce=class extends Error{},fe=class extends Error{constructor(t){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+t;}},de=class extends Error{constructor(t,r){super(),this.message="Failed to load static file for page: "+t+" "+r;}},pe=class extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module";}};function Xr(e){return JSON.stringify({message:e.message,stack:e.stack})}});var ge=e(me=>{Object.defineProperty(me,"__esModule",{value:!0});Object.defineProperty(me,"removeTrailingSlash",{enumerable:!0,get:function(){return Qr}});function Qr(e){return e.replace(/\/$/,"")||"/"}});var Z=e(_e=>{Object.defineProperty(_e,"__esModule",{value:!0});Object.defineProperty(_e,"parsePath",{enumerable:!0,get:function(){return Yr}});function Yr(e){let t=e.indexOf("#"),r=e.indexOf("?"),n=r>-1&&(t<0||r<t);return n||t>-1?{pathname:e.substring(0,n?r:t),query:n?e.substring(r,t>-1?t:void 0):"",hash:t>-1?e.slice(t):""}:{pathname:e,query:"",hash:""}}});var B=e((P,mt)=>{Object.defineProperty(P,"__esModule",{value:!0});Object.defineProperty(P,"normalizePathTrailingSlash",{enumerable:!0,get:function(){return Jr}});var ht=ge(),Zr=Z(),Jr=e=>{if(!e.startsWith("/")||process.env.__NEXT_MANUAL_TRAILING_SLASH)return e;let{pathname:t,query:r,hash:n}=(0, Zr.parsePath)(e);return process.env.__NEXT_TRAILING_SLASH?/\.[^/]+\/?$/.test(t)?""+(0, ht.removeTrailingSlash)(t)+r+n:t.endsWith("/")?""+t+r+n:t+"/"+r+n:""+(0, ht.removeTrailingSlash)(t)+r+n};(typeof P.default=="function"||typeof P.default=="object"&&P.default!==null)&&typeof P.default.__esModule=="undefined"&&(Object.defineProperty(P.default,"__esModule",{value:!0}),Object.assign(P.default,P),mt.exports=P.default);});var be=e(ye=>{Object.defineProperty(ye,"__esModule",{value:!0});Object.defineProperty(ye,"pathHasPrefix",{enumerable:!0,get:function(){return tn}});var en=Z();function tn(e,t){if(typeof e!="string")return !1;let{pathname:r}=(0, en.parsePath)(e);return r===t||r.startsWith(t+"/")}});var _t=e((R,gt)=>{Object.defineProperty(R,"__esModule",{value:!0});Object.defineProperty(R,"hasBasePath",{enumerable:!0,get:function(){return on}});var rn=be(),nn=process.env.__NEXT_ROUTER_BASEPATH||"";function on(e){return (0, rn.pathHasPrefix)(e,nn)}(typeof R.default=="function"||typeof R.default=="object"&&R.default!==null)&&typeof R.default.__esModule=="undefined"&&(Object.defineProperty(R.default,"__esModule",{value:!0}),Object.assign(R.default,R),gt.exports=R.default);});var Re=e(Pe=>{Object.defineProperty(Pe,"__esModule",{value:!0});Object.defineProperty(Pe,"isLocalURL",{enumerable:!0,get:function(){return sn}});var yt=V(),un=_t();function sn(e){if(!(0, yt.isAbsoluteUrl)(e))return !0;try{let t=(0,yt.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,un.hasBasePath)(r.pathname)}catch(t){return !1}}});var bt=e(Ee=>{Object.defineProperty(Ee,"__esModule",{value:!0});Object.defineProperty(Ee,"getSortedRoutes",{enumerable:!0,get:function(){return an}});var K=class{insert(t){this._insert(t.split("/").filter(Boolean),[],!1);}smoosh(){return this._smoosh()}_smoosh(t){t===void 0&&(t="/");let r=[...this.children.keys()].sort();this.slugName!==null&&r.splice(r.indexOf("[]"),1),this.restSlugName!==null&&r.splice(r.indexOf("[...]"),1),this.optionalRestSlugName!==null&&r.splice(r.indexOf("[[...]]"),1);let n=r.map(o=>this.children.get(o)._smoosh(""+t+o+"/")).reduce((o,i)=>[...o,...i],[]);if(this.slugName!==null&&n.push(...this.children.get("[]")._smoosh(t+"["+this.slugName+"]/")),!this.placeholder){let o=t==="/"?"/":t.slice(0,-1);if(this.optionalRestSlugName!=null)throw new Error('You cannot define a route with the same specificity as a optional catch-all route ("'+o+'" and "'+o+"[[..."+this.optionalRestSlugName+']]").');n.unshift(o);}return this.restSlugName!==null&&n.push(...this.children.get("[...]")._smoosh(t+"[..."+this.restSlugName+"]/")),this.optionalRestSlugName!==null&&n.push(...this.children.get("[[...]]")._smoosh(t+"[[..."+this.optionalRestSlugName+"]]/")),n}_insert(t,r,n){if(t.length===0){this.placeholder=!1;return}if(n)throw new Error("Catch-all must be the last part of the URL.");let o=t[0];if(o.startsWith("[")&&o.endsWith("]")){let s=function(u,l){if(u!==null&&u!==l)throw new Error("You cannot use different slug names for the same dynamic path ('"+u+"' !== '"+l+"').");r.forEach(p=>{if(p===l)throw new Error('You cannot have the same slug name "'+l+'" repeat within a single dynamic path');if(p.replace(/\W/g,"")===o.replace(/\W/g,""))throw new Error('You cannot have the slug names "'+p+'" and "'+l+'" differ only by non-word symbols within a single dynamic path')}),r.push(l);},i=o.slice(1,-1),a=!1;if(i.startsWith("[")&&i.endsWith("]")&&(i=i.slice(1,-1),a=!0),i.startsWith("...")&&(i=i.substring(3),n=!0),i.startsWith("[")||i.endsWith("]"))throw new Error("Segment names may not start or end with extra brackets ('"+i+"').");if(i.startsWith("."))throw new Error("Segment names may not start with erroneous periods ('"+i+"').");if(n)if(a){if(this.restSlugName!=null)throw new Error('You cannot use both an required and optional catch-all route at the same level ("[...'+this.restSlugName+']" and "'+t[0]+'" ).');s(this.optionalRestSlugName,i),this.optionalRestSlugName=i,o="[[...]]";}else {if(this.optionalRestSlugName!=null)throw new Error('You cannot use both an optional and required catch-all route at the same level ("[[...'+this.optionalRestSlugName+']]" and "'+t[0]+'").');s(this.restSlugName,i),this.restSlugName=i,o="[...]";}else {if(a)throw new Error('Optional route parameters are not yet supported ("'+t[0]+'").');s(this.slugName,i),this.slugName=i,o="[]";}}this.children.has(o)||this.children.set(o,new K),this.children.get(o)._insert(t.slice(1),r,n);}constructor(){this.placeholder=!0,this.children=new Map,this.slugName=null,this.restSlugName=null,this.optionalRestSlugName=null;}};function an(e){let t=new K;return e.forEach(r=>t.insert(r)),t.smoosh()}});var Pt=e(Oe=>{Object.defineProperty(Oe,"__esModule",{value:!0});Object.defineProperty(Oe,"isDynamicRoute",{enumerable:!0,get:function(){return cn}});var ln=/\/\[[^/]+?\](?=\/|$)/;function cn(e){return ln.test(e)}});var Rt=e(ve=>{Object.defineProperty(ve,"__esModule",{value:!0});function fn(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]});}fn(ve,{getSortedRoutes:function(){return dn.getSortedRoutes},isDynamicRoute:function(){return pn.isDynamicRoute}});var dn=bt(),pn=Pt();});var Et=e(Ne=>{Object.defineProperty(Ne,"__esModule",{value:!0});Object.defineProperty(Ne,"getRouteMatcher",{enumerable:!0,get:function(){return mn}});var hn=V();function mn(e){let{re:t,groups:r}=e;return n=>{let o=t.exec(n);if(!o)return !1;let i=s=>{try{return decodeURIComponent(s)}catch(u){throw new hn.DecodeError("failed to decode param")}},a={};return Object.keys(r).forEach(s=>{let u=r[s],l=o[u.pos];l!==void 0&&(a[s]=~l.indexOf("/")?l.split("/").map(p=>i(p)):u.repeat?[i(l)]:i(l));}),a}}});var Ot=e(Te=>{Object.defineProperty(Te,"__esModule",{value:!0});Object.defineProperty(Te,"ensureLeadingSlash",{enumerable:!0,get:function(){return gn}});function gn(e){return e.startsWith("/")?e:"/"+e}});var vt=e(we=>{Object.defineProperty(we,"__esModule",{value:!0});Object.defineProperty(we,"isGroupSegment",{enumerable:!0,get:function(){return _n}});function _n(e){return e[0]==="("&&e.endsWith(")")}});var Nt=e(xe=>{Object.defineProperty(xe,"__esModule",{value:!0});function yn(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]});}yn(xe,{normalizeAppPath:function(){return Rn},normalizeRscPath:function(){return En}});var bn=Ot(),Pn=vt();function Rn(e){return (0, bn.ensureLeadingSlash)(e.split("/").reduce((t,r,n,o)=>!r||(0, Pn.isGroupSegment)(r)||r[0]==="@"||(r==="page"||r==="route")&&n===o.length-1?t:t+"/"+r,""))}function En(e,t){return t?e.replace(/\.rsc($|\?)/,"$1"):e}});var Tt=e(Ce=>{Object.defineProperty(Ce,"__esModule",{value:!0});function On(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]});}On(Ce,{INTERCEPTION_ROUTE_MARKERS:function(){return Se},isInterceptionRouteAppPath:function(){return Nn},extractInterceptionRouteInformation:function(){return Tn}});var vn=Nt(),Se=["(..)(..)","(.)","(..)","(...)"];function Nn(e){return e.split("/").find(t=>Se.find(r=>t.startsWith(r)))!==void 0}function Tn(e){let t,r,n;for(let o of e.split("/"))if(r=Se.find(i=>o.startsWith(i)),r){[t,n]=e.split(r,2);break}if(!t||!r||!n)throw new Error(`Invalid interception route: ${e}. Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>`);switch(t=(0, vn.normalizeAppPath)(t),r){case"(.)":t==="/"?n=`/${n}`:n=t+"/"+n;break;case"(..)":if(t==="/")throw new Error(`Invalid interception route: ${e}. Cannot use (..) marker at the root level, use (.) instead.`);n=t.split("/").slice(0,-1).concat(n).join("/");break;case"(...)":n="/"+n;break;case"(..)(..)":let o=t.split("/");if(o.length<=2)throw new Error(`Invalid interception route: ${e}. Cannot use (..)(..) marker at the root level or one level up.`);n=o.slice(0,-2).concat(n).join("/");break;default:throw new Error("Invariant: unexpected marker")}return {interceptingRoute:t,interceptedRoute:n}}});var wt=e(je=>{Object.defineProperty(je,"__esModule",{value:!0});Object.defineProperty(je,"escapeStringRegexp",{enumerable:!0,get:function(){return Sn}});var wn=/[|\\{}()[\]^$+*?.-]/,xn=/[|\\{}()[\]^$+*?.-]/g;function Sn(e){return wn.test(e)?e.replace(xn,"\\$&"):e}});var At=e(Ae=>{Object.defineProperty(Ae,"__esModule",{value:!0});function Cn(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]});}Cn(Ae,{getRouteRegex:function(){return It},getNamedRouteRegex:function(){return An},getNamedMiddlewareRegex:function(){return Ln}});var St=Tt(),Ie=wt(),Ct=ge(),jn="nxtP",In="nxtI";function Me(e){let t=e.startsWith("[")&&e.endsWith("]");t&&(e=e.slice(1,-1));let r=e.startsWith("...");return r&&(e=e.slice(3)),{key:e,repeat:r,optional:t}}function jt(e){let t=(0, Ct.removeTrailingSlash)(e).slice(1).split("/"),r={},n=1;return {parameterizedRoute:t.map(o=>{let i=St.INTERCEPTION_ROUTE_MARKERS.find(s=>o.startsWith(s)),a=o.match(/\[((?:\[.*\])|.+)\]/);if(i&&a){let{key:s,optional:u,repeat:l}=Me(a[1]);return r[s]={pos:n++,repeat:l,optional:u},"/"+(0, Ie.escapeStringRegexp)(i)+"([^/]+?)"}else if(a){let{key:s,repeat:u,optional:l}=Me(a[1]);return r[s]={pos:n++,repeat:u,optional:l},u?l?"(?:/(.+?))?":"/(.+?)":"/([^/]+?)"}else return "/"+(0, Ie.escapeStringRegexp)(o)}).join(""),groups:r}}function It(e){let{parameterizedRoute:t,groups:r}=jt(e);return {re:new RegExp("^"+t+"(?:/)?$"),groups:r}}function Mn(){let e=0;return ()=>{let t="",r=++e;for(;r>0;)t+=String.fromCharCode(97+(r-1)%26),r=Math.floor((r-1)/26);return t}}function xt(e){let{getSafeRouteKey:t,segment:r,routeKeys:n,keyPrefix:o}=e,{key:i,optional:a,repeat:s}=Me(r),u=i.replace(/\W/g,"");o&&(u=""+o+u);let l=!1;return (u.length===0||u.length>30)&&(l=!0),isNaN(parseInt(u.slice(0,1)))||(l=!0),l&&(u=t()),o?n[u]=""+o+i:n[u]=""+i,s?a?"(?:/(?<"+u+">.+?))?":"/(?<"+u+">.+?)":"/(?<"+u+">[^/]+?)"}function Mt(e,t){let r=(0, Ct.removeTrailingSlash)(e).slice(1).split("/"),n=Mn(),o={};return {namedParameterizedRoute:r.map(i=>{let a=St.INTERCEPTION_ROUTE_MARKERS.some(u=>i.startsWith(u)),s=i.match(/\[((?:\[.*\])|.+)\]/);return a&&s?xt({getSafeRouteKey:n,segment:s[1],routeKeys:o,keyPrefix:t?In:void 0}):s?xt({getSafeRouteKey:n,segment:s[1],routeKeys:o,keyPrefix:t?jn:void 0}):"/"+(0, Ie.escapeStringRegexp)(i)}).join(""),routeKeys:o}}function An(e,t){let r=Mt(e,t);return b(a({},It(e)),{namedRegex:"^"+r.namedParameterizedRoute+"(?:/)?$",routeKeys:r.routeKeys})}function Ln(e,t){let{parameterizedRoute:r}=jt(e),{catchAll:n=!0}=t;if(r==="/")return {namedRegex:"^/"+(n?".*":"")+"$"};let{namedParameterizedRoute:o}=Mt(e,!1),i=n?"(?:(/.*)?)":"";return {namedRegex:"^"+o+i+"$"}}});var Lt=e(Le=>{Object.defineProperty(Le,"__esModule",{value:!0});Object.defineProperty(Le,"interpolateAs",{enumerable:!0,get:function(){return Dn}});var qn=Et(),Un=At();function Dn(e,t,r){let n="",o=(0, Un.getRouteRegex)(e),i=o.groups,a=(t!==e?(0, qn.getRouteMatcher)(o)(t):"")||r;n=e;let s=Object.keys(i);return s.every(u=>{let l=a[u]||"",{repeat:p,optional:A}=i[u],h="["+(p?"...":"")+u+"]";return A&&(h=(l?"":"/")+"["+h+"]"),p&&!Array.isArray(l)&&(l=[l]),(A||u in a)&&(n=n.replace(h,p?l.map(I=>encodeURIComponent(I)).join("/"):encodeURIComponent(l))||"/")})||(n=""),{params:s,result:n}}});var Dt=e((E,Ut)=>{Object.defineProperty(E,"__esModule",{value:!0});Object.defineProperty(E,"resolveHref",{enumerable:!0,get:function(){return Fn}});var kn=oe(),qt=se(),zn=lt(),Wn=V(),Hn=B(),Vn=Re(),Bn=Rt(),Kn=Lt();function Fn(e,t,r){let n,o=typeof t=="string"?t:(0, qt.formatWithValidation)(t),i=o.match(/^[a-zA-Z]{1,}:\/\//),a=i?o.slice(i[0].length):o;if((a.split("?")[0]||"").match(/(\/\/|\\)/)){console.error("Invalid href '"+o+"' passed to next/router in page: '"+e.pathname+"'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");let u=(0, Wn.normalizeRepeatedSlashes)(a);o=(i?i[0]:"")+u;}if(!(0, Vn.isLocalURL)(o))return r?[o]:o;try{n=new URL(o.startsWith("#")?e.asPath:e.pathname,"http://n");}catch(u){n=new URL("/","http://n");}try{let u=new URL(o,n);u.pathname=(0,Hn.normalizePathTrailingSlash)(u.pathname);let l="";if((0,Bn.isDynamicRoute)(u.pathname)&&u.searchParams&&r){let A=(0,kn.searchParamsToUrlQuery)(u.searchParams),{result:h,params:I}=(0,Kn.interpolateAs)(u.pathname,u.pathname,A);h&&(l=(0,qt.formatWithValidation)({pathname:h,hash:u.hash,query:(0,zn.omit)(A,I)}));}let p=u.origin===n.origin?u.href.slice(u.origin.length):u.href;return r?[p,l||p]:p}catch(u){return r?[o]:o}}(typeof E.default=="function"||typeof E.default=="object"&&E.default!==null)&&typeof E.default.__esModule=="undefined"&&(Object.defineProperty(E.default,"__esModule",{value:!0}),Object.assign(E.default,E),Ut.exports=E.default);});var Ue=e(qe=>{Object.defineProperty(qe,"__esModule",{value:!0});Object.defineProperty(qe,"addPathPrefix",{enumerable:!0,get:function(){return $n}});var Gn=Z();function $n(e,t){if(!e.startsWith("/")||!t)return e;let{pathname:r,query:n,hash:o}=(0, Gn.parsePath)(e);return ""+t+r+n+o}});var zt=e(De=>{Object.defineProperty(De,"__esModule",{value:!0});Object.defineProperty(De,"addLocale",{enumerable:!0,get:function(){return Qn}});var Xn=Ue(),kt=be();function Qn(e,t,r,n){if(!t||t===r)return e;let o=e.toLowerCase();return !n&&((0, kt.pathHasPrefix)(o,"/api")||(0, kt.pathHasPrefix)(o,"/"+t.toLowerCase()))?e:(0, Xn.addPathPrefix)(e,"/"+t)}});var Ht=e((O,Wt)=>{Object.defineProperty(O,"__esModule",{value:!0});Object.defineProperty(O,"addLocale",{enumerable:!0,get:function(){return Zn}});var Yn=B(),Zn=function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return process.env.__NEXT_I18N_SUPPORT?(0, Yn.normalizePathTrailingSlash)(zt().addLocale(e,...r)):e};(typeof O.default=="function"||typeof O.default=="object"&&O.default!==null)&&typeof O.default.__esModule=="undefined"&&(Object.defineProperty(O.default,"__esModule",{value:!0}),Object.assign(O.default,O),Wt.exports=O.default);});var Bt=e(ke=>{Object.defineProperty(ke,"__esModule",{value:!0});Object.defineProperty(ke,"RouterContext",{enumerable:!0,get:function(){return Vt}});var Jn=Q(),eo=Jn._(c("react")),Vt=eo.default.createContext(null);process.env.NODE_ENV!=="production"&&(Vt.displayName="RouterContext");});var Xt=e(We=>{"use client";Object.defineProperty(We,"__esModule",{value:!0});function to(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]});}to(We,{CacheStates:function(){return ze},AppRouterContext:function(){return Kt},LayoutRouterContext:function(){return Ft},GlobalLayoutRouterContext:function(){return Gt},TemplateContext:function(){return $t}});var ro=Q(),J=ro._(c("react")),ze;(function(e){e.LAZY_INITIALIZED="LAZYINITIALIZED",e.DATA_FETCH="DATAFETCH",e.READY="READY";})(ze||(ze={}));var Kt=J.default.createContext(null),Ft=J.default.createContext(null),Gt=J.default.createContext(null),$t=J.default.createContext(null);process.env.NODE_ENV!=="production"&&(Kt.displayName="AppRouterContext",Ft.displayName="LayoutRouterContext",Gt.displayName="GlobalLayoutRouterContext",$t.displayName="TemplateContext");});var Yt=e((v,Qt)=>{Object.defineProperty(v,"__esModule",{value:!0});function no(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]});}no(v,{requestIdleCallback:function(){return oo},cancelIdleCallback:function(){return io}});var oo=typeof self!="undefined"&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}});},1)},io=typeof self!="undefined"&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};(typeof v.default=="function"||typeof v.default=="object"&&v.default!==null)&&typeof v.default.__esModule=="undefined"&&(Object.defineProperty(v.default,"__esModule",{value:!0}),Object.assign(v.default,v),Qt.exports=v.default);});var tr=e((N,er)=>{Object.defineProperty(N,"__esModule",{value:!0});Object.defineProperty(N,"useIntersection",{enumerable:!0,get:function(){return ao}});var F=c("react"),Zt=Yt(),Jt=typeof IntersectionObserver=="function",He=new Map,ee=[];function uo(e){let t={root:e.root||null,margin:e.rootMargin||""},r=ee.find(a=>a.root===t.root&&a.margin===t.margin),n;if(r&&(n=He.get(r),n))return n;let o=new Map,i=new IntersectionObserver(a=>{a.forEach(s=>{let u=o.get(s.target),l=s.isIntersecting||s.intersectionRatio>0;u&&l&&u(l);});},e);return n={id:t,observer:i,elements:o},ee.push(t),He.set(t,n),n}function so(e,t,r){let{id:n,observer:o,elements:i}=uo(r);return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),i.size===0){o.disconnect(),He.delete(n);let s=ee.findIndex(u=>u.root===n.root&&u.margin===n.margin);s>-1&&ee.splice(s,1);}}}function ao(e){let{rootRef:t,rootMargin:r,disabled:n}=e,o=n||!Jt,[i,a]=(0, F.useState)(!1),s=(0, F.useRef)(null),u=(0, F.useCallback)(p=>{s.current=p;},[]);(0, F.useEffect)(()=>{if(Jt){if(o||i)return;let p=s.current;if(p&&p.tagName)return so(p,h=>h&&a(h),{root:t==null?void 0:t.current,rootMargin:r})}else if(!i){let p=(0, Zt.requestIdleCallback)(()=>a(!0));return ()=>(0, Zt.cancelIdleCallback)(p)}},[o,r,t,i,s.current]);let l=(0, F.useCallback)(()=>{a(!1);},[]);return [u,i,l]}(typeof N.default=="function"||typeof N.default=="object"&&N.default!==null)&&typeof N.default.__esModule=="undefined"&&(Object.defineProperty(N.default,"__esModule",{value:!0}),Object.assign(N.default,N),er.exports=N.default);});var rr=e(Ve=>{Object.defineProperty(Ve,"__esModule",{value:!0});Object.defineProperty(Ve,"normalizeLocalePath",{enumerable:!0,get:function(){return lo}});function lo(e,t){let r,n=e.split("/");return (t||[]).some(o=>n[1]&&n[1].toLowerCase()===o.toLowerCase()?(r=o,n.splice(1,1),e=n.join("/")||"/",!0):!1),{pathname:e,detectedLocale:r}}});var or=e((T,nr)=>{Object.defineProperty(T,"__esModule",{value:!0});Object.defineProperty(T,"normalizeLocalePath",{enumerable:!0,get:function(){return co}});var co=(e,t)=>process.env.__NEXT_I18N_SUPPORT?rr().normalizeLocalePath(e,t):{pathname:e,detectedLocale:void 0};(typeof T.default=="function"||typeof T.default=="object"&&T.default!==null)&&typeof T.default.__esModule=="undefined"&&(Object.defineProperty(T.default,"__esModule",{value:!0}),Object.assign(T.default,T),nr.exports=T.default);});var ir=e(Be=>{Object.defineProperty(Be,"__esModule",{value:!0});Object.defineProperty(Be,"detectDomainLocale",{enumerable:!0,get:function(){return fo}});function fo(e,t,r){if(e){r&&(r=r.toLowerCase());for(let i of e){var n,o;let a=(n=i.domain)==null?void 0:n.split(":")[0].toLowerCase();if(t===a||r===i.defaultLocale.toLowerCase()||(o=i.locales)!=null&&o.some(s=>s.toLowerCase()===r))return i}}}});var sr=e((w,ur)=>{Object.defineProperty(w,"__esModule",{value:!0});Object.defineProperty(w,"detectDomainLocale",{enumerable:!0,get:function(){return po}});var po=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];if(process.env.__NEXT_I18N_SUPPORT)return ir().detectDomainLocale(...t)};(typeof w.default=="function"||typeof w.default=="object"&&w.default!==null)&&typeof w.default.__esModule=="undefined"&&(Object.defineProperty(w.default,"__esModule",{value:!0}),Object.assign(w.default,w),ur.exports=w.default);});var lr=e((x,ar)=>{Object.defineProperty(x,"__esModule",{value:!0});Object.defineProperty(x,"getDomainLocale",{enumerable:!0,get:function(){return go}});var ho=B(),mo=process.env.__NEXT_ROUTER_BASEPATH||"";function go(e,t,r,n){if(process.env.__NEXT_I18N_SUPPORT){let o=or().normalizeLocalePath,i=sr().detectDomainLocale,a=t||o(e,r).detectedLocale,s=i(n,void 0,a);if(s){let u="http"+(s.http?"":"s")+"://",l=a===s.defaultLocale?"":"/"+a;return ""+u+s.domain+(0, ho.normalizePathTrailingSlash)(""+mo+l+e)}return !1}else return !1}(typeof x.default=="function"||typeof x.default=="object"&&x.default!==null)&&typeof x.default.__esModule=="undefined"&&(Object.defineProperty(x.default,"__esModule",{value:!0}),Object.assign(x.default,x),ar.exports=x.default);});var fr=e((S,cr)=>{Object.defineProperty(S,"__esModule",{value:!0});Object.defineProperty(S,"addBasePath",{enumerable:!0,get:function(){return Po}});var _o=Ue(),yo=B(),bo=process.env.__NEXT_ROUTER_BASEPATH||"";function Po(e,t){return (0, yo.normalizePathTrailingSlash)(process.env.__NEXT_MANUAL_CLIENT_BASE_PATH&&!t?e:(0, _o.addPathPrefix)(e,bo))}(typeof S.default=="function"||typeof S.default=="object"&&S.default!==null)&&typeof S.default.__esModule=="undefined"&&(Object.defineProperty(S.default,"__esModule",{value:!0}),Object.assign(S.default,S),cr.exports=S.default);});var pr=e((C,dr)=>{Object.defineProperty(C,"__esModule",{value:!0});function Ro(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]});}Ro(C,{PrefetchKind:function(){return Ke},ACTION_REFRESH:function(){return Eo},ACTION_NAVIGATE:function(){return Oo},ACTION_RESTORE:function(){return vo},ACTION_SERVER_PATCH:function(){return No},ACTION_PREFETCH:function(){return To},ACTION_FAST_REFRESH:function(){return wo},ACTION_SERVER_ACTION:function(){return xo}});var Eo="refresh",Oo="navigate",vo="restore",No="server-patch",To="prefetch",wo="fast-refresh",xo="server-action",Ke;(function(e){e.AUTO="auto",e.FULL="full",e.TEMPORARY="temporary";})(Ke||(Ke={}));(typeof C.default=="function"||typeof C.default=="object"&&C.default!==null)&&typeof C.default.__esModule=="undefined"&&(Object.defineProperty(C.default,"__esModule",{value:!0}),Object.assign(C.default,C),dr.exports=C.default);});var Pr=e((j,br)=>{"use client";Object.defineProperty(j,"__esModule",{value:!0});Object.defineProperty(j,"default",{enumerable:!0,get:function(){return Wo}});var So=Q(),_=So._(c("react")),hr=Dt(),yr=Re(),Co=se(),jo=V(),Io=Ht(),Mo=Bt(),Ao=Xt(),Lo=tr(),qo=lr(),Uo=fr(),mr=pr(),gr=new Set;function Fe(e,t,r,n,o,i){if(typeof window=="undefined"||!i&&!(0, yr.isLocalURL)(t))return;if(!n.bypassPrefetchedCheck){let s=typeof n.locale!="undefined"?n.locale:"locale"in e?e.locale:void 0,u=t+"%"+r+"%"+s;if(gr.has(u))return;gr.add(u);}let a=i?e.prefetch(t,o):e.prefetch(t,r,n);Promise.resolve(a).catch(s=>{if(process.env.NODE_ENV!=="production")throw s});}function Do(e){let r=e.currentTarget.getAttribute("target");return r&&r!=="_self"||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&e.nativeEvent.which===2}function ko(e,t,r,n,o,i,a,s,u,l){let{nodeName:p}=e.currentTarget;if(p.toUpperCase()==="A"&&(Do(e)||!u&&!(0, yr.isLocalURL)(r)))return;e.preventDefault();let h=()=>{let I=a!=null?a:!0;"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:i,locale:s,scroll:I}):t[o?"replace":"push"](n||r,{forceOptimisticNavigation:!l,scroll:I});};u?_.default.startTransition(h):h();}function _r(e){return typeof e=="string"?e:(0, Co.formatUrl)(e)}var zo=_.default.forwardRef(function(t,r){let n,Je=t,{href:o,as:i,children:a$1,prefetch:s=null,passHref:u,replace:l,shallow:p,scroll:A,locale:h,onClick:I,onMouseEnter:te,onTouchStart:Ge,legacyBehavior:b=!1}=Je,Nr=d(Je,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=a$1,b&&(typeof n=="string"||typeof n=="number")&&(n=_.default.createElement("a",null,n));let m=_.default.useContext(Mo.RouterContext),Tr=_.default.useContext(Ao.AppRouterContext),L=m!=null?m:Tr,q=!m,z=s!==!1,G=s===null?mr.PrefetchKind.AUTO:mr.PrefetchKind.FULL;if(process.env.NODE_ENV!=="production"){let f=function(d){return new Error("Failed prop type: The prop `"+d.key+"` expects a "+d.expected+" in `<Link>`, but got `"+d.actual+"` instead."+(typeof window!="undefined"?`
Open your browser's console to view the Component stack trace.`:""))};Object.keys({href:!0}).forEach(d=>{if(d==="href"){if(t[d]==null||typeof t[d]!="string"&&typeof t[d]!="object")throw f({key:d,expected:"`string` or `object`",actual:t[d]===null?"null":typeof t[d]})}}),Object.keys({as:!0,replace:!0,scroll:!0,shallow:!0,passHref:!0,prefetch:!0,locale:!0,onClick:!0,onMouseEnter:!0,onTouchStart:!0,legacyBehavior:!0}).forEach(d=>{let M=typeof t[d];if(d==="as"){if(t[d]&&M!=="string"&&M!=="object")throw f({key:d,expected:"`string` or `object`",actual:M})}else if(d==="locale"){if(t[d]&&M!=="string")throw f({key:d,expected:"`string`",actual:M})}else if(d==="onClick"||d==="onMouseEnter"||d==="onTouchStart"){if(t[d]&&M!=="function")throw f({key:d,expected:"`function`",actual:M})}else if(d==="replace"||d==="scroll"||d==="shallow"||d==="passHref"||d==="prefetch"||d==="legacyBehavior"){if(t[d]!=null&&M!=="boolean")throw f({key:d,expected:"`boolean`",actual:M})}else;});let et=_.default.useRef(!1);t.prefetch&&!et.current&&!q&&(et.current=!0,console.warn("Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated"));}if(process.env.NODE_ENV!=="production"&&q&&!i){let f;if(typeof o=="string"?f=o:typeof o=="object"&&typeof o.pathname=="string"&&(f=o.pathname),f&&f.split("/").some(k=>k.startsWith("[")&&k.endsWith("]")))throw new Error("Dynamic href `"+f+"` found in <Link> while using the `/app` router, this is not supported. Read more: https://nextjs.org/docs/messages/app-dir-dynamic-href")}let{href:U,as:y}=_.default.useMemo(()=>{if(!m){let k=_r(o);return {href:k,as:i?_r(i):k}}let[f,W]=(0, hr.resolveHref)(m,o,!0);return {href:f,as:i?(0, hr.resolveHref)(m,i):W||f}},[m,o,i]),$e=_.default.useRef(U),Xe=_.default.useRef(y),g;if(b)if(process.env.NODE_ENV==="development"){I&&console.warn('"onClick" was passed to <Link> with `href` of `'+o+'` but "legacyBehavior" was set. The legacy behavior requires onClick be set on the child of next/link'),te&&console.warn('"onMouseEnter" was passed to <Link> with `href` of `'+o+'` but "legacyBehavior" was set. The legacy behavior requires onMouseEnter be set on the child of next/link');try{g=_.default.Children.only(n);}catch(f){throw n?new Error("Multiple children were passed to <Link> with `href` of `"+o+"` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children"+(typeof window!="undefined"?` 
Open your browser's console to view the Component stack trace.`:"")):new Error("No children were passed to <Link> with `href` of `"+o+"` but one child is required https://nextjs.org/docs/messages/link-no-children")}}else g=_.default.Children.only(n);else if(process.env.NODE_ENV==="development"&&(n==null?void 0:n.type)==="a")throw new Error(`Invalid <Link> with <a> child. Please remove <a> or use <Link legacyBehavior>.
Learn more: https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor`);let D=b?g&&typeof g=="object"&&g.ref:r,[Qe,Ye,Ze]=(0, Lo.useIntersection)({rootMargin:"200px"}),wr=_.default.useCallback(f=>{(Xe.current!==y||$e.current!==U)&&(Ze(),Xe.current=y,$e.current=U),Qe(f),D&&(typeof D=="function"?D(f):typeof D=="object"&&(D.current=f));},[y,D,U,Ze,Qe]);_.default.useEffect(()=>{process.env.NODE_ENV==="production"&&L&&(!Ye||!z||Fe(L,U,y,{locale:h},{kind:G},q));},[y,U,Ye,h,z,m==null?void 0:m.locale,L,q,G]);let $={ref:wr,onClick(f){if(process.env.NODE_ENV!=="production"&&!f)throw new Error('Component rendered inside next/link has to pass click event to "onClick" prop.');!b&&typeof I=="function"&&I(f),b&&g.props&&typeof g.props.onClick=="function"&&g.props.onClick(f),L&&(f.defaultPrevented||ko(f,L,U,y,l,p,A,h,q,z));},onMouseEnter(f){!b&&typeof te=="function"&&te(f),b&&g.props&&typeof g.props.onMouseEnter=="function"&&g.props.onMouseEnter(f),L&&((!z||process.env.NODE_ENV==="development")&&q||Fe(L,U,y,{locale:h,priority:!0,bypassPrefetchedCheck:!0},{kind:G},q));},onTouchStart(f){!b&&typeof Ge=="function"&&Ge(f),b&&g.props&&typeof g.props.onTouchStart=="function"&&g.props.onTouchStart(f),L&&(!z&&q||Fe(L,U,y,{locale:h,priority:!0,bypassPrefetchedCheck:!0},{kind:G},q));}};if((0, jo.isAbsoluteUrl)(y))$.href=y;else if(!b||u||g.type==="a"&&!("href"in g.props)){let f=typeof h!="undefined"?h:m==null?void 0:m.locale,W=(m==null?void 0:m.isLocaleDomain)&&(0, qo.getDomainLocale)(y,f,m==null?void 0:m.locales,m==null?void 0:m.domainLocales);$.href=W||(0, Uo.addBasePath)((0, Io.addLocale)(y,f,m==null?void 0:m.defaultLocale));}return b?_.default.cloneElement(g,$):_.default.createElement("a",a(a({},Nr),$),n)}),Wo=zo;(typeof j.default=="function"||typeof j.default=="object"&&j.default!==null)&&typeof j.default.__esModule=="undefined"&&(Object.defineProperty(j.default,"__esModule",{value:!0}),Object.assign(j.default,j),br.exports=j.default);});var Er=e((Ri,Rr)=>{Rr.exports=Pr();});var vr=f(Er());function Ei({children:e,onClick:t,href:r,className:n,id:o,type:i="button",disabled:a}){return r?jsx(vr.default,{className:n,href:r,id:o,children:e}):jsx("button",{className:n,disabled:a,id:o,onClick:t,type:i,children:e})}

export { Ei as a };