import{s as Ha,n as Ll,r as za,p as Ml,o as td}from"../chunks/DOCO80rQ.js";import{S as Ka,i as Ga,d as W,s as gt,b as nt,c as g,x as Zr,e as R,f as ce,g as Ce,h as D,D as ee,j as S,k as Re,l as V,y as rc,q as ic,t as sc,a as oc,u as ac,v as lc,r as uc,G as nd,z as pe,A as Z,B as so,C as we,w as M,E as xl}from"../chunks/DMoWhKn6.js";import{e as vo}from"../chunks/D6YF6ztN.js";import{b as rd}from"../chunks/C-VctM24.js";var Ul={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},id=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[t++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[t++],a=n[t++],u=n[t++],h=((i&7)<<18|(o&63)<<12|(a&63)<<6|u&63)-65536;e[r++]=String.fromCharCode(55296+(h>>10)),e[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return e.join("")},hc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],a=i+1<n.length,u=a?n[i+1]:0,h=i+2<n.length,d=h?n[i+2]:0,p=o>>2,I=(o&3)<<4|u>>4;let b=(u&15)<<2|d>>6,k=d&63;h||(k=64,a||(b=64)),r.push(t[p],t[I],t[b],t[k])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(cc(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):id(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=t[n.charAt(i++)],u=i<n.length?t[n.charAt(i)]:0;++i;const d=i<n.length?t[n.charAt(i)]:64;++i;const I=i<n.length?t[n.charAt(i)]:64;if(++i,o==null||u==null||d==null||I==null)throw new sd;const b=o<<2|u>>4;if(r.push(b),d!==64){const k=u<<4&240|d>>2;if(r.push(k),I!==64){const O=d<<6&192|I;r.push(O)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class sd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const od=function(n){const e=cc(n);return hc.encodeByteArray(e,!0)},Eo=function(n){return od(n).replace(/\./g,"")},dc=function(n){try{return hc.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ad(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ld=()=>ad().__FIREBASE_DEFAULTS__,ud=()=>{if(typeof process>"u"||typeof Ul>"u")return;const n=Ul.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},cd=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&dc(n[1]);return e&&JSON.parse(e)},Oo=()=>{try{return ld()||ud()||cd()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},fc=n=>{var e,t;return(t=(e=Oo())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},hd=n=>{const e=fc(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},pc=()=>{var n;return(n=Oo())===null||n===void 0?void 0:n.config},mc=n=>{var e;return(e=Oo())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fd(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Eo(JSON.stringify(t)),Eo(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function pd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(vt())}function md(){var n;const e=(n=Oo())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function gd(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function _d(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function yd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vd(){const n=vt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Ed(){return!md()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Td(){try{return typeof indexedDB=="object"}catch{return!1}}function Id(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wd="FirebaseError";class or extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=wd,Object.setPrototypeOf(this,or.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hs.prototype.create)}}class Hs{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,o=this.errors[e],a=o?Ad(o,r):"Error",u=`${this.serviceName}: ${a} (${i}).`;return new or(i,u,r)}}function Ad(n,e){return n.replace(bd,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const bd=/\{\$([^}]+)}/g;function Cd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function To(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const o=n[i],a=e[i];if(Fl(o)&&Fl(a)){if(!To(o,a))return!1}else if(o!==a)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Fl(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zs(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function bs(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function Cs(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Rd(n,e){const t=new Sd(n,e);return t.subscribe.bind(t)}class Sd{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Pd(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=aa),i.error===void 0&&(i.error=aa),i.complete===void 0&&(i.complete=aa);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Pd(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function aa(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(n){return n&&n._delegate?n._delegate:n}class si{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new dd;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Dd(e))try{this.getOrInitializeService({instanceIdentifier:ei})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=ei){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ei){return this.instances.has(e)}getOptions(e=ei){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[o,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);r===u&&a.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const a=this.instances.get(i);return a&&e(a,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Nd(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ei){return this.component?this.component.multipleInstances?e:ei:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Nd(n){return n===ei?void 0:n}function Dd(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new kd(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var he;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(he||(he={}));const Od={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},Ld=he.INFO,Md={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},xd=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=Md[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Wa{constructor(e){this.name=e,this._logLevel=Ld,this._logHandler=xd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Od[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}const Ud=(n,e)=>e.some(t=>n instanceof t);let Bl,jl;function Fd(){return Bl||(Bl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Bd(){return jl||(jl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gc=new WeakMap,va=new WeakMap,_c=new WeakMap,la=new WeakMap,Qa=new WeakMap;function jd(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{t(Pr(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&gc.set(t,n)}).catch(()=>{}),Qa.set(e,n),e}function qd(n){if(va.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});va.set(n,e)}let Ea={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return va.get(n);if(e==="objectStoreNames")return n.objectStoreNames||_c.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Pr(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Hd(n){Ea=n(Ea)}function zd(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(ua(this),e,...t);return _c.set(r,e.sort?e.sort():[e]),Pr(r)}:Bd().includes(n)?function(...e){return n.apply(ua(this),e),Pr(gc.get(this))}:function(...e){return Pr(n.apply(ua(this),e))}}function Kd(n){return typeof n=="function"?zd(n):(n instanceof IDBTransaction&&qd(n),Ud(n,Fd())?new Proxy(n,Ea):n)}function Pr(n){if(n instanceof IDBRequest)return jd(n);if(la.has(n))return la.get(n);const e=Kd(n);return e!==n&&(la.set(n,e),Qa.set(e,n)),e}const ua=n=>Qa.get(n);function Gd(n,e,{blocked:t,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(n,e),u=Pr(a);return r&&a.addEventListener("upgradeneeded",h=>{r(Pr(a.result),h.oldVersion,h.newVersion,Pr(a.transaction),h)}),t&&a.addEventListener("blocked",h=>t(h.oldVersion,h.newVersion,h)),u.then(h=>{o&&h.addEventListener("close",()=>o()),i&&h.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}const Wd=["get","getKey","getAll","getAllKeys","count"],Qd=["put","add","delete","clear"],ca=new Map;function ql(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ca.get(e))return ca.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=Qd.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Wd.includes(t)))return;const o=async function(a,...u){const h=this.transaction(a,i?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(u.shift())),(await Promise.all([d[t](...u),i&&h.done]))[0]};return ca.set(e,o),o}Hd(n=>({...n,get:(e,t,r)=>ql(e,t)||n.get(e,t,r),has:(e,t)=>!!ql(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Jd(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Jd(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ta="@firebase/app",Hl="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr=new Wa("@firebase/app"),$d="@firebase/app-compat",Xd="@firebase/analytics-compat",Zd="@firebase/analytics",ef="@firebase/app-check-compat",tf="@firebase/app-check",nf="@firebase/auth",rf="@firebase/auth-compat",sf="@firebase/database",of="@firebase/data-connect",af="@firebase/database-compat",lf="@firebase/functions",uf="@firebase/functions-compat",cf="@firebase/installations",hf="@firebase/installations-compat",df="@firebase/messaging",ff="@firebase/messaging-compat",pf="@firebase/performance",mf="@firebase/performance-compat",gf="@firebase/remote-config",_f="@firebase/remote-config-compat",yf="@firebase/storage",vf="@firebase/storage-compat",Ef="@firebase/firestore",Tf="@firebase/vertexai-preview",If="@firebase/firestore-compat",wf="firebase",Af="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ia="[DEFAULT]",bf={[Ta]:"fire-core",[$d]:"fire-core-compat",[Zd]:"fire-analytics",[Xd]:"fire-analytics-compat",[tf]:"fire-app-check",[ef]:"fire-app-check-compat",[nf]:"fire-auth",[rf]:"fire-auth-compat",[sf]:"fire-rtdb",[of]:"fire-data-connect",[af]:"fire-rtdb-compat",[lf]:"fire-fn",[uf]:"fire-fn-compat",[cf]:"fire-iid",[hf]:"fire-iid-compat",[df]:"fire-fcm",[ff]:"fire-fcm-compat",[pf]:"fire-perf",[mf]:"fire-perf-compat",[gf]:"fire-rc",[_f]:"fire-rc-compat",[yf]:"fire-gcs",[vf]:"fire-gcs-compat",[Ef]:"fire-fst",[If]:"fire-fst-compat",[Tf]:"fire-vertex","fire-js":"fire-js",[wf]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Io=new Map,Cf=new Map,wa=new Map;function zl(n,e){try{n.container.addComponent(e)}catch(t){rr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function zi(n){const e=n.name;if(wa.has(e))return rr.debug(`There were multiple attempts to register component ${e}.`),!1;wa.set(e,n);for(const t of Io.values())zl(t,n);for(const t of Cf.values())zl(t,n);return!0}function Ya(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Xn(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},kr=new Hs("app","Firebase",Rf);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new si("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw kr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xi=Af;function yc(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ia,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw kr.create("bad-app-name",{appName:String(i)});if(t||(t=pc()),!t)throw kr.create("no-options");const o=Io.get(i);if(o){if(To(t,o.options)&&To(r,o.config))return o;throw kr.create("duplicate-app",{appName:i})}const a=new Vd(i);for(const h of wa.values())a.addComponent(h);const u=new Sf(t,r,a);return Io.set(i,u),u}function vc(n=Ia){const e=Io.get(n);if(!e&&n===Ia&&pc())return yc();if(!e)throw kr.create("no-app",{appName:n});return e}function Nr(n,e,t){var r;let i=(r=bf[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const o=i.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const u=[`Unable to register library "${i}" with version "${e}":`];o&&u.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&u.push("and"),a&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),rr.warn(u.join(" "));return}zi(new si(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pf="firebase-heartbeat-database",kf=1,Ls="firebase-heartbeat-store";let ha=null;function Ec(){return ha||(ha=Gd(Pf,kf,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ls)}catch(t){console.warn(t)}}}}).catch(n=>{throw kr.create("idb-open",{originalErrorMessage:n.message})})),ha}async function Nf(n){try{const t=(await Ec()).transaction(Ls),r=await t.objectStore(Ls).get(Tc(n));return await t.done,r}catch(e){if(e instanceof or)rr.warn(e.message);else{const t=kr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});rr.warn(t.message)}}}async function Kl(n,e){try{const r=(await Ec()).transaction(Ls,"readwrite");await r.objectStore(Ls).put(e,Tc(n)),await r.done}catch(t){if(t instanceof or)rr.warn(t.message);else{const r=kr.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});rr.warn(r.message)}}}function Tc(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Df=1024,Vf=30*24*60*60*1e3;class Of{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Mf(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Gl();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const u=new Date(a.date).valueOf();return Date.now()-u<=Vf}),this._storage.overwrite(this._heartbeatsCache))}catch(r){rr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Gl(),{heartbeatsToSend:r,unsentEntries:i}=Lf(this._heartbeatsCache.heartbeats),o=Eo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return rr.warn(t),""}}}function Gl(){return new Date().toISOString().substring(0,10)}function Lf(n,e=Df){const t=[];let r=n.slice();for(const i of n){const o=t.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),Wl(t)>e){o.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Wl(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Mf{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Td()?Id().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Nf(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Kl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Kl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Wl(n){return Eo(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xf(n){zi(new si("platform-logger",e=>new Yd(e),"PRIVATE")),zi(new si("heartbeat",e=>new Of(e),"PRIVATE")),Nr(Ta,Hl,n),Nr(Ta,Hl,"esm2017"),Nr("fire-js","")}xf("");var Uf="firebase",Ff="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nr(Uf,Ff,"app");function Ja(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function Ic(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Bf=Ic,wc=new Hs("auth","Firebase",Ic());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wo=new Wa("@firebase/auth");function jf(n,...e){wo.logLevel<=he.WARN&&wo.warn(`Auth (${Xi}): ${n}`,...e)}function ho(n,...e){wo.logLevel<=he.ERROR&&wo.error(`Auth (${Xi}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(n,...e){throw $a(n,...e)}function Nn(n,...e){return $a(n,...e)}function Ac(n,e,t){const r=Object.assign(Object.assign({},Bf()),{[e]:t});return new Hs("auth","Firebase",r).create(e,{appName:n.name})}function Dr(n){return Ac(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function $a(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return wc.create(n,...e)}function re(n,e,...t){if(!n)throw $a(e,...t)}function Zn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ho(e),new Error(e)}function ir(n,e){n||Zn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aa(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function qf(){return Ql()==="http:"||Ql()==="https:"}function Ql(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hf(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(qf()||_d()||"connection"in navigator)?navigator.onLine:!0}function zf(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e,t){this.shortDelay=e,this.longDelay=t,ir(t>e,"Short delay should be less than long delay!"),this.isMobile=pd()||yd()}get(){return Hf()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xa(n,e){ir(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Zn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Zn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Zn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kf={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gf=new Ks(3e4,6e4);function ci(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Mr(n,e,t,r,i={}){return Cc(n,i,async()=>{let o={},a={};r&&(e==="GET"?a=r:o={body:JSON.stringify(r)});const u=zs(Object.assign({key:n.config.apiKey},a)).slice(1),h=await n._getAdditionalHeaders();h["Content-Type"]="application/json",n.languageCode&&(h["X-Firebase-Locale"]=n.languageCode);const d=Object.assign({method:e,headers:h},o);return gd()||(d.referrerPolicy="no-referrer"),bc.fetch()(Rc(n,n.config.apiHost,t,u),d)})}async function Cc(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Kf),e);try{const i=new Qf(n),o=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw oo(n,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const u=o.ok?a.errorMessage:a.error.message,[h,d]=u.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw oo(n,"credential-already-in-use",a);if(h==="EMAIL_EXISTS")throw oo(n,"email-already-in-use",a);if(h==="USER_DISABLED")throw oo(n,"user-disabled",a);const p=r[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Ac(n,p,d);gn(n,p)}}catch(i){if(i instanceof or)throw i;gn(n,"network-request-failed",{message:String(i)})}}async function Lo(n,e,t,r,i={}){const o=await Mr(n,e,t,r,i);return"mfaPendingCredential"in o&&gn(n,"multi-factor-auth-required",{_serverResponse:o}),o}function Rc(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?Xa(n.config,i):`${n.config.apiScheme}://${i}`}function Wf(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Qf{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Nn(this.auth,"network-request-failed")),Gf.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function oo(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Nn(n,e,r);return i.customData._tokenResponse=t,i}function Yl(n){return n!==void 0&&n.enterprise!==void 0}class Yf{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Wf(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Jf(n,e){return Mr(n,"GET","/v2/recaptchaConfig",ci(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $f(n,e){return Mr(n,"POST","/v1/accounts:delete",e)}async function Sc(n,e){return Mr(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ks(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Xf(n,e=!1){const t=ar(n),r=await t.getIdToken(e),i=Za(r);re(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,a=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:ks(da(i.auth_time)),issuedAtTime:ks(da(i.iat)),expirationTime:ks(da(i.exp)),signInProvider:a||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function da(n){return Number(n)*1e3}function Za(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return ho("JWT malformed, contained fewer than 3 sections"),null;try{const i=dc(t);return i?JSON.parse(i):(ho("Failed to decode base64 JWT payload"),null)}catch(i){return ho("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Jl(n){const e=Za(n);return re(e,"internal-error"),re(typeof e.exp<"u","internal-error"),re(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ms(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof or&&Zf(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Zf({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ks(this.lastLoginAt),this.creationTime=ks(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ao(n){var e;const t=n.auth,r=await n.getIdToken(),i=await Ms(n,Sc(t,{idToken:r}));re(i==null?void 0:i.users.length,t,"internal-error");const o=i.users[0];n._notifyReloadListener(o);const a=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?Pc(o.providerUserInfo):[],u=np(n.providerData,a),h=n.isAnonymous,d=!(n.email&&o.passwordHash)&&!(u!=null&&u.length),p=h?d:!1,I={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new ba(o.createdAt,o.lastLoginAt),isAnonymous:p};Object.assign(n,I)}async function tp(n){const e=ar(n);await Ao(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function np(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Pc(n){return n.map(e=>{var{providerId:t}=e,r=Ja(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rp(n,e){const t=await Cc(n,{},async()=>{const r=zs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=n.config,a=Rc(n,i,"/v1/token",`key=${o}`),u=await n._getAdditionalHeaders();return u["Content-Type"]="application/x-www-form-urlencoded",bc.fetch()(a,{method:"POST",headers:u,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function ip(n,e){return Mr(n,"POST","/v2/accounts:revokeToken",ci(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){re(e.idToken,"internal-error"),re(typeof e.idToken<"u","internal-error"),re(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Jl(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){re(e.length!==0,"internal-error");const t=Jl(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(re(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:o}=await rp(e,t);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:o}=t,a=new Fi;return r&&(re(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(re(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),o&&(re(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Fi,this.toJSON())}_performRefresh(){return Zn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(n,e){re(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class er{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,o=Ja(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ep(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new ba(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await Ms(this,this.stsTokenManager.getToken(this.auth,e));return re(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Xf(this,e)}reload(){return tp(this)}_assign(e){this!==e&&(re(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new er(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){re(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Ao(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Xn(this.auth.app))return Promise.reject(Dr(this.auth));const e=await this.getIdToken();return await Ms(this,$f(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,o,a,u,h,d,p;const I=(r=t.displayName)!==null&&r!==void 0?r:void 0,b=(i=t.email)!==null&&i!==void 0?i:void 0,k=(o=t.phoneNumber)!==null&&o!==void 0?o:void 0,O=(a=t.photoURL)!==null&&a!==void 0?a:void 0,C=(u=t.tenantId)!==null&&u!==void 0?u:void 0,N=(h=t._redirectEventId)!==null&&h!==void 0?h:void 0,$=(d=t.createdAt)!==null&&d!==void 0?d:void 0,Q=(p=t.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:z,emailVerified:q,isAnonymous:F,providerData:B,stsTokenManager:E}=t;re(z&&E,e,"internal-error");const m=Fi.fromJSON(this.name,E);re(typeof z=="string",e,"internal-error"),Ir(I,e.name),Ir(b,e.name),re(typeof q=="boolean",e,"internal-error"),re(typeof F=="boolean",e,"internal-error"),Ir(k,e.name),Ir(O,e.name),Ir(C,e.name),Ir(N,e.name),Ir($,e.name),Ir(Q,e.name);const _=new er({uid:z,auth:e,email:b,emailVerified:q,displayName:I,isAnonymous:F,photoURL:O,phoneNumber:k,tenantId:C,stsTokenManager:m,createdAt:$,lastLoginAt:Q});return B&&Array.isArray(B)&&(_.providerData=B.map(v=>Object.assign({},v))),N&&(_._redirectEventId=N),_}static async _fromIdTokenResponse(e,t,r=!1){const i=new Fi;i.updateFromServerResponse(t);const o=new er({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ao(o),o}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];re(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?Pc(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),u=new Fi;u.updateFromIdToken(r);const h=new er({uid:i.localId,auth:e,stsTokenManager:u,isAnonymous:a}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new ba(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(h,d),h}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $l=new Map;function tr(n){ir(n instanceof Function,"Expected a class definition");let e=$l.get(n);return e?(ir(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,$l.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}kc.type="NONE";const Xl=kc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fo(n,e,t){return`firebase:${n}:${e}:${t}`}class Bi{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=fo(this.userKey,i.apiKey,o),this.fullPersistenceKey=fo("persistence",i.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?er._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Bi(tr(Xl),e,r);const i=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let o=i[0]||tr(Xl);const a=fo(r,e.config.apiKey,e.name);let u=null;for(const d of t)try{const p=await d._get(a);if(p){const I=er._fromJSON(e,p);d!==o&&(u=I),o=d;break}}catch{}const h=i.filter(d=>d._shouldAllowMigration);return!o._shouldAllowMigration||!h.length?new Bi(o,e,r):(o=h[0],u&&await o._set(a,u.toJSON()),await Promise.all(t.map(async d=>{if(d!==o)try{await d._remove(a)}catch{}})),new Bi(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zl(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Oc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Nc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Mc(e))return"Blackberry";if(xc(e))return"Webos";if(Dc(e))return"Safari";if((e.includes("chrome/")||Vc(e))&&!e.includes("edge/"))return"Chrome";if(Lc(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Nc(n=vt()){return/firefox\//i.test(n)}function Dc(n=vt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Vc(n=vt()){return/crios\//i.test(n)}function Oc(n=vt()){return/iemobile/i.test(n)}function Lc(n=vt()){return/android/i.test(n)}function Mc(n=vt()){return/blackberry/i.test(n)}function xc(n=vt()){return/webos/i.test(n)}function el(n=vt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function sp(n=vt()){var e;return el(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function op(){return vd()&&document.documentMode===10}function Uc(n=vt()){return el(n)||Lc(n)||xc(n)||Mc(n)||/windows phone/i.test(n)||Oc(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fc(n,e=[]){let t;switch(n){case"Browser":t=Zl(vt());break;case"Worker":t=`${Zl(vt())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Xi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=o=>new Promise((a,u)=>{try{const h=e(o);a(h)}catch(h){u(h)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lp(n,e={}){return Mr(n,"GET","/v2/passwordPolicy",ci(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const up=6;class cp{constructor(e){var t,r,i,o;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:up,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,o,a,u;const h={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,h),this.validatePasswordCharacterOptions(e,h),h.isValid&&(h.isValid=(t=h.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),h.isValid&&(h.isValid=(r=h.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),h.isValid&&(h.isValid=(i=h.containsLowercaseLetter)!==null&&i!==void 0?i:!0),h.isValid&&(h.isValid=(o=h.containsUppercaseLetter)!==null&&o!==void 0?o:!0),h.isValid&&(h.isValid=(a=h.containsNumericCharacter)!==null&&a!==void 0?a:!0),h.isValid&&(h.isValid=(u=h.containsNonAlphanumericCharacter)!==null&&u!==void 0?u:!0),h}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new eu(this),this.idTokenSubscription=new eu(this),this.beforeStateQueue=new ap(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=wc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=tr(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Bi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Sc(this,{idToken:e}),r=await er._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Xn(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(u,u))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,u=i==null?void 0:i._redirectEventId,h=await this.tryRedirectSignIn(e);(!a||a===u)&&(h!=null&&h.user)&&(i=h.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return re(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ao(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=zf()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Xn(this.app))return Promise.reject(Dr(this));const t=e?ar(e):null;return t&&re(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&re(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Xn(this.app)?Promise.reject(Dr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Xn(this.app)?Promise.reject(Dr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(tr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await lp(this),t=new cp(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Hs("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await ip(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&tr(e)||this._popupRedirectResolver;re(t,this,"argument-error"),this.redirectPersistenceManager=await Bi.create(this,[tr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t);let a=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(re(u,this,"internal-error"),u.then(()=>{a||o(this.currentUser)}),typeof t=="function"){const h=e.addObserver(t,r,i);return()=>{a=!0,h()}}else{const h=e.addObserver(t);return()=>{a=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return re(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Fc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&jf(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Zi(n){return ar(n)}class eu{constructor(e){this.auth=e,this.observer=null,this.addObserver=Rd(t=>this.observer=t)}get next(){return re(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function dp(n){Mo=n}function Bc(n){return Mo.loadJS(n)}function fp(){return Mo.recaptchaEnterpriseScript}function pp(){return Mo.gapiScript}function mp(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const gp="recaptcha-enterprise",_p="NO_RECAPTCHA";class yp{constructor(e){this.type=gp,this.auth=Zi(e)}async verify(e="verify",t=!1){async function r(o){if(!t){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(a,u)=>{Jf(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(h=>{if(h.recaptchaKey===void 0)u(new Error("recaptcha Enterprise site key undefined"));else{const d=new Yf(h);return o.tenantId==null?o._agentRecaptchaConfig=d:o._tenantRecaptchaConfigs[o.tenantId]=d,a(d.siteKey)}}).catch(h=>{u(h)})})}function i(o,a,u){const h=window.grecaptcha;Yl(h)?h.enterprise.ready(()=>{h.enterprise.execute(o,{action:e}).then(d=>{a(d)}).catch(()=>{a(_p)})}):u(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,a)=>{r(this.auth).then(u=>{if(!t&&Yl(window.grecaptcha))i(u,o,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let h=fp();h.length!==0&&(h+=u),Bc(h).then(()=>{i(u,o,a)}).catch(d=>{a(d)})}}).catch(u=>{a(u)})})}}async function tu(n,e,t,r=!1){const i=new yp(n);let o;try{o=await i.verify(t)}catch{o=await i.verify(t,!0)}const a=Object.assign({},e);return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function nu(n,e,t,r){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await tu(n,e,t,t==="getOobCode");return r(n,o)}else return r(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await tu(n,e,t,t==="getOobCode");return r(n,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vp(n,e){const t=Ya(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),o=t.getOptions();if(To(o,e??{}))return i;gn(i,"already-initialized")}return t.initialize({options:e})}function Ep(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(tr);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Tp(n,e,t){const r=Zi(n);re(r._canInitEmulator,r,"emulator-config-failed"),re(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,o=jc(e),{host:a,port:u}=Ip(e),h=u===null?"":`:${u}`;r.config.emulator={url:`${o}//${a}${h}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:u,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),wp()}function jc(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Ip(n){const e=jc(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:ru(r.substr(o.length+1))}}else{const[o,a]=r.split(":");return{host:o,port:ru(a)}}}function ru(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function wp(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Zn("not implemented")}_getIdTokenResponse(e){return Zn("not implemented")}_linkToIdToken(e,t){return Zn("not implemented")}_getReauthenticationResolver(e){return Zn("not implemented")}}async function Ap(n,e){return Mr(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bp(n,e){return Lo(n,"POST","/v1/accounts:signInWithPassword",ci(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cp(n,e){return Lo(n,"POST","/v1/accounts:signInWithEmailLink",ci(n,e))}async function Rp(n,e){return Lo(n,"POST","/v1/accounts:signInWithEmailLink",ci(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs extends tl{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new xs(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new xs(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return nu(e,t,"signInWithPassword",bp);case"emailLink":return Cp(e,{email:this._email,oobCode:this._password});default:gn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return nu(e,r,"signUpPassword",Ap);case"emailLink":return Rp(e,{idToken:t,email:this._email,oobCode:this._password});default:gn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ji(n,e){return Lo(n,"POST","/v1/accounts:signInWithIdp",ci(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sp="http://localhost";class oi extends tl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new oi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):gn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,o=Ja(t,["providerId","signInMethod"]);if(!r||!i)return null;const a=new oi(r,i);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return ji(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,ji(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ji(e,t)}buildRequest(){const e={requestUri:Sp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=zs(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pp(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function kp(n){const e=bs(Cs(n)).link,t=e?bs(Cs(e)).deep_link_id:null,r=bs(Cs(n)).deep_link_id;return(r?bs(Cs(r)).link:null)||r||t||e||n}class nl{constructor(e){var t,r,i,o,a,u;const h=bs(Cs(e)),d=(t=h.apiKey)!==null&&t!==void 0?t:null,p=(r=h.oobCode)!==null&&r!==void 0?r:null,I=Pp((i=h.mode)!==null&&i!==void 0?i:null);re(d&&p&&I,"argument-error"),this.apiKey=d,this.operation=I,this.code=p,this.continueUrl=(o=h.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(a=h.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(u=h.tenantId)!==null&&u!==void 0?u:null}static parseLink(e){const t=kp(e);try{return new nl(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(){this.providerId=es.PROVIDER_ID}static credential(e,t){return xs._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=nl.parseLink(t);return re(r,"argument-error"),xs._fromEmailAndCode(e,r.code,r.tenantId)}}es.PROVIDER_ID="password";es.EMAIL_PASSWORD_SIGN_IN_METHOD="password";es.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs extends qc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr extends Gs{constructor(){super("facebook.com")}static credential(e){return oi._fromParams({providerId:wr.PROVIDER_ID,signInMethod:wr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wr.credentialFromTaggedObject(e)}static credentialFromError(e){return wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wr.credential(e.oauthAccessToken)}catch{return null}}}wr.FACEBOOK_SIGN_IN_METHOD="facebook.com";wr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar extends Gs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return oi._fromParams({providerId:Ar.PROVIDER_ID,signInMethod:Ar.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ar.credentialFromTaggedObject(e)}static credentialFromError(e){return Ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Ar.credential(t,r)}catch{return null}}}Ar.GOOGLE_SIGN_IN_METHOD="google.com";Ar.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br extends Gs{constructor(){super("github.com")}static credential(e){return oi._fromParams({providerId:br.PROVIDER_ID,signInMethod:br.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return br.credentialFromTaggedObject(e)}static credentialFromError(e){return br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return br.credential(e.oauthAccessToken)}catch{return null}}}br.GITHUB_SIGN_IN_METHOD="github.com";br.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr extends Gs{constructor(){super("twitter.com")}static credential(e,t){return oi._fromParams({providerId:Cr.PROVIDER_ID,signInMethod:Cr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Cr.credentialFromTaggedObject(e)}static credentialFromError(e){return Cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Cr.credential(t,r)}catch{return null}}}Cr.TWITTER_SIGN_IN_METHOD="twitter.com";Cr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const o=await er._fromIdTokenResponse(e,r,i),a=iu(r);return new Ki({user:o,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=iu(r);return new Ki({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function iu(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo extends or{constructor(e,t,r,i){var o;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,bo.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new bo(e,t,r,i)}}function Hc(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?bo._fromErrorAndOperation(n,o,e,r):o})}async function Np(n,e,t=!1){const r=await Ms(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ki._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dp(n,e,t=!1){const{auth:r}=n;if(Xn(r.app))return Promise.reject(Dr(r));const i="reauthenticate";try{const o=await Ms(n,Hc(r,i,e,n),t);re(o.idToken,r,"internal-error");const a=Za(o.idToken);re(a,r,"internal-error");const{sub:u}=a;return re(n.uid===u,r,"user-mismatch"),Ki._forOperation(n,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&gn(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zc(n,e,t=!1){if(Xn(n.app))return Promise.reject(Dr(n));const r="signIn",i=await Hc(n,r,e),o=await Ki._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(o.user),o}async function Vp(n,e){return zc(Zi(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Op(n){const e=Zi(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function Lp(n,e,t){return Xn(n.app)?Promise.reject(Dr(n)):Vp(ar(n),es.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Op(n),r})}function Mp(n,e,t,r){return ar(n).onIdTokenChanged(e,t,r)}function xp(n,e,t){return ar(n).beforeAuthStateChanged(e,t)}function Up(n,e,t,r){return ar(n).onAuthStateChanged(e,t,r)}const Co="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Co,"1"),this.storage.removeItem(Co),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fp=1e3,Bp=10;class Gc extends Kc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Uc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,u,h)=>{this.notifyListeners(a,h)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},o=this.storage.getItem(r);op()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Bp):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Fp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Gc.type="LOCAL";const jp=Gc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc extends Kc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Wc.type="SESSION";const Qc=Wc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qp(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new xo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:o}=t.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const u=Array.from(a).map(async d=>d(t.origin,o)),h=await qp(u);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:h})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}xo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rl(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,a;return new Promise((u,h)=>{const d=rl("",20);i.port1.start();const p=setTimeout(()=>{h(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(I){const b=I;if(b.data.eventId===d)switch(b.data.status){case"ack":clearTimeout(p),o=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),u(b.data.response);break;default:clearTimeout(p),clearTimeout(o),h(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(){return window}function zp(n){Dn().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yc(){return typeof Dn().WorkerGlobalScope<"u"&&typeof Dn().importScripts=="function"}async function Kp(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Gp(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Wp(){return Yc()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jc="firebaseLocalStorageDb",Qp=1,Ro="firebaseLocalStorage",$c="fbase_key";class Ws{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Uo(n,e){return n.transaction([Ro],e?"readwrite":"readonly").objectStore(Ro)}function Yp(){const n=indexedDB.deleteDatabase(Jc);return new Ws(n).toPromise()}function Ca(){const n=indexedDB.open(Jc,Qp);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Ro,{keyPath:$c})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Ro)?e(r):(r.close(),await Yp(),e(await Ca()))})})}async function su(n,e,t){const r=Uo(n,!0).put({[$c]:e,value:t});return new Ws(r).toPromise()}async function Jp(n,e){const t=Uo(n,!1).get(e),r=await new Ws(t).toPromise();return r===void 0?null:r.value}function ou(n,e){const t=Uo(n,!0).delete(e);return new Ws(t).toPromise()}const $p=800,Xp=3;class Xc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ca(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Xp)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Yc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xo._getInstance(Wp()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Kp(),!this.activeServiceWorker)return;this.sender=new Hp(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Gp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ca();return await su(e,Co,"1"),await ou(e,Co),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>su(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Jp(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ou(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=Uo(i,!1).getAll();return new Ws(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$p)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Xc.type="LOCAL";const Zp=Xc;new Ks(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function em(n,e){return e?tr(e):(re(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il extends tl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ji(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ji(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ji(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function tm(n){return zc(n.auth,new il(n),n.bypassAuthState)}function nm(n){const{auth:e,user:t}=n;return re(t,e,"internal-error"),Dp(t,new il(n),n.bypassAuthState)}async function rm(n){const{auth:e,user:t}=n;return re(t,e,"internal-error"),Np(t,new il(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(e,t,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:o,error:a,type:u}=e;if(a){this.reject(a);return}const h={auth:this.auth,requestUri:t,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(h))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return tm;case"linkViaPopup":case"linkViaRedirect":return rm;case"reauthViaPopup":case"reauthViaRedirect":return nm;default:gn(this.auth,"internal-error")}}resolve(e){ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const im=new Ks(2e3,1e4);class Ui extends Zc{constructor(e,t,r,i,o){super(e,t,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Ui.currentPopupAction&&Ui.currentPopupAction.cancel(),Ui.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return re(e,this.auth,"internal-error"),e}async onExecution(){ir(this.filter.length===1,"Popup operations only handle one event");const e=rl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Nn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Nn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ui.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Nn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,im.get())};e()}}Ui.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sm="pendingRedirect",po=new Map;class om extends Zc{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=po.get(this.auth._key());if(!e){try{const r=await am(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}po.set(this.auth._key(),e)}return this.bypassAuthState||po.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function am(n,e){const t=cm(e),r=um(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function lm(n,e){po.set(n._key(),e)}function um(n){return tr(n._redirectPersistence)}function cm(n){return fo(sm,n.config.apiKey,n.name)}async function hm(n,e,t=!1){if(Xn(n.app))return Promise.reject(Dr(n));const r=Zi(n),i=em(r,e),a=await new om(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dm=10*60*1e3;class fm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!pm(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!eh(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Nn(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=dm&&this.cachedEventUids.clear(),this.cachedEventUids.has(au(e))}saveEventToCache(e){this.cachedEventUids.add(au(e)),this.lastProcessedEventTime=Date.now()}}function au(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function eh({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function pm(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return eh(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mm(n,e={}){return Mr(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,_m=/^https?/;async function ym(n){if(n.config.emulator)return;const{authorizedDomains:e}=await mm(n);for(const t of e)try{if(vm(t))return}catch{}gn(n,"unauthorized-domain")}function vm(n){const e=Aa(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!_m.test(t))return!1;if(gm.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Em=new Ks(3e4,6e4);function lu(){const n=Dn().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Tm(n){return new Promise((e,t)=>{var r,i,o;function a(){lu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{lu(),t(Nn(n,"network-request-failed"))},timeout:Em.get()})}if(!((i=(r=Dn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=Dn().gapi)===null||o===void 0)&&o.load)a();else{const u=mp("iframefcb");return Dn()[u]=()=>{gapi.load?a():t(Nn(n,"network-request-failed"))},Bc(`${pp()}?onload=${u}`).catch(h=>t(h))}}).catch(e=>{throw mo=null,e})}let mo=null;function Im(n){return mo=mo||Tm(n),mo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wm=new Ks(5e3,15e3),Am="__/auth/iframe",bm="emulator/auth/iframe",Cm={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Rm=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Sm(n){const e=n.config;re(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Xa(e,bm):`https://${n.config.authDomain}/${Am}`,r={apiKey:e.apiKey,appName:n.name,v:Xi},i=Rm.get(n.config.apiHost);i&&(r.eid=i);const o=n._getFrameworks();return o.length&&(r.fw=o.join(",")),`${t}?${zs(r).slice(1)}`}async function Pm(n){const e=await Im(n),t=Dn().gapi;return re(t,n,"internal-error"),e.open({where:document.body,url:Sm(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Cm,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const a=Nn(n,"network-request-failed"),u=Dn().setTimeout(()=>{o(a)},wm.get());function h(){Dn().clearTimeout(u),i(r)}r.ping(h).then(h,()=>{o(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const km={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Nm=500,Dm=600,Vm="_blank",Om="http://localhost";class uu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Lm(n,e,t,r=Nm,i=Dm){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let u="";const h=Object.assign(Object.assign({},km),{width:r.toString(),height:i.toString(),top:o,left:a}),d=vt().toLowerCase();t&&(u=Vc(d)?Vm:t),Nc(d)&&(e=e||Om,h.scrollbars="yes");const p=Object.entries(h).reduce((b,[k,O])=>`${b}${k}=${O},`,"");if(sp(d)&&u!=="_self")return Mm(e||"",u),new uu(null);const I=window.open(e||"",u,p);re(I,n,"popup-blocked");try{I.focus()}catch{}return new uu(I)}function Mm(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xm="__/auth/handler",Um="emulator/auth/handler",Fm=encodeURIComponent("fac");async function cu(n,e,t,r,i,o){re(n.config.authDomain,n,"auth-domain-config-required"),re(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Xi,eventId:i};if(e instanceof qc){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Cd(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,I]of Object.entries({}))a[p]=I}if(e instanceof Gs){const p=e.getScopes().filter(I=>I!=="");p.length>0&&(a.scopes=p.join(","))}n.tenantId&&(a.tid=n.tenantId);const u=a;for(const p of Object.keys(u))u[p]===void 0&&delete u[p];const h=await n._getAppCheckToken(),d=h?`#${Fm}=${encodeURIComponent(h)}`:"";return`${Bm(n)}?${zs(u).slice(1)}${d}`}function Bm({config:n}){return n.emulator?Xa(n,Um):`https://${n.authDomain}/${xm}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fa="webStorageSupport";class jm{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Qc,this._completeRedirectFn=hm,this._overrideRedirectResult=lm}async _openPopup(e,t,r,i){var o;ir((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const a=await cu(e,t,r,Aa(),i);return Lm(e,a,rl())}async _openRedirect(e,t,r,i){await this._originValidation(e);const o=await cu(e,t,r,Aa(),i);return zp(o),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:o}=this.eventManagers[t];return i?Promise.resolve(i):(ir(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Pm(e),r=new fm(e);return t.register("authEvent",i=>(re(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(fa,{type:fa},i=>{var o;const a=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[fa];a!==void 0&&t(!!a),gn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ym(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Uc()||Dc()||el()}}const qm=jm;var hu="@firebase/auth",du="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){re(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zm(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Km(n){zi(new si("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:u}=r.options;re(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const h={apiKey:a,authDomain:u,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Fc(n)},d=new hp(r,i,o,h);return Ep(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),zi(new si("auth-internal",e=>{const t=Zi(e.getProvider("auth").getImmediate());return(r=>new Hm(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Nr(hu,du,zm(n)),Nr(hu,du,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gm=5*60,Wm=mc("authIdTokenMaxAge")||Gm;let fu=null;const Qm=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Wm)return;const i=t==null?void 0:t.token;fu!==i&&(fu=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Ym(n=vc()){const e=Ya(n,"auth");if(e.isInitialized())return e.getImmediate();const t=vp(n,{popupRedirectResolver:qm,persistence:[Zp,jp,Qc]}),r=mc("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const a=Qm(o.toString());xp(t,a,()=>a(t.currentUser)),Mp(t,u=>a(u))}}const i=fc("auth");return i&&Tp(t,`http://${i}`),t}function Jm(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}dp({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const o=Nn("internal-error");o.customData=i,t(o)},r.type="text/javascript",r.charset="UTF-8",Jm().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Km("Browser");var pu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ni,th;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,m){function _(){}_.prototype=m.prototype,E.D=m.prototype,E.prototype=new _,E.prototype.constructor=E,E.C=function(v,T,w){for(var y=Array(arguments.length-2),se=2;se<arguments.length;se++)y[se-2]=arguments[se];return m.prototype[T].apply(v,y)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,m,_){_||(_=0);var v=Array(16);if(typeof m=="string")for(var T=0;16>T;++T)v[T]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(T=0;16>T;++T)v[T]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=E.g[0],_=E.g[1],T=E.g[2];var w=E.g[3],y=m+(w^_&(T^w))+v[0]+3614090360&4294967295;m=_+(y<<7&4294967295|y>>>25),y=w+(T^m&(_^T))+v[1]+3905402710&4294967295,w=m+(y<<12&4294967295|y>>>20),y=T+(_^w&(m^_))+v[2]+606105819&4294967295,T=w+(y<<17&4294967295|y>>>15),y=_+(m^T&(w^m))+v[3]+3250441966&4294967295,_=T+(y<<22&4294967295|y>>>10),y=m+(w^_&(T^w))+v[4]+4118548399&4294967295,m=_+(y<<7&4294967295|y>>>25),y=w+(T^m&(_^T))+v[5]+1200080426&4294967295,w=m+(y<<12&4294967295|y>>>20),y=T+(_^w&(m^_))+v[6]+2821735955&4294967295,T=w+(y<<17&4294967295|y>>>15),y=_+(m^T&(w^m))+v[7]+4249261313&4294967295,_=T+(y<<22&4294967295|y>>>10),y=m+(w^_&(T^w))+v[8]+1770035416&4294967295,m=_+(y<<7&4294967295|y>>>25),y=w+(T^m&(_^T))+v[9]+2336552879&4294967295,w=m+(y<<12&4294967295|y>>>20),y=T+(_^w&(m^_))+v[10]+4294925233&4294967295,T=w+(y<<17&4294967295|y>>>15),y=_+(m^T&(w^m))+v[11]+2304563134&4294967295,_=T+(y<<22&4294967295|y>>>10),y=m+(w^_&(T^w))+v[12]+1804603682&4294967295,m=_+(y<<7&4294967295|y>>>25),y=w+(T^m&(_^T))+v[13]+4254626195&4294967295,w=m+(y<<12&4294967295|y>>>20),y=T+(_^w&(m^_))+v[14]+2792965006&4294967295,T=w+(y<<17&4294967295|y>>>15),y=_+(m^T&(w^m))+v[15]+1236535329&4294967295,_=T+(y<<22&4294967295|y>>>10),y=m+(T^w&(_^T))+v[1]+4129170786&4294967295,m=_+(y<<5&4294967295|y>>>27),y=w+(_^T&(m^_))+v[6]+3225465664&4294967295,w=m+(y<<9&4294967295|y>>>23),y=T+(m^_&(w^m))+v[11]+643717713&4294967295,T=w+(y<<14&4294967295|y>>>18),y=_+(w^m&(T^w))+v[0]+3921069994&4294967295,_=T+(y<<20&4294967295|y>>>12),y=m+(T^w&(_^T))+v[5]+3593408605&4294967295,m=_+(y<<5&4294967295|y>>>27),y=w+(_^T&(m^_))+v[10]+38016083&4294967295,w=m+(y<<9&4294967295|y>>>23),y=T+(m^_&(w^m))+v[15]+3634488961&4294967295,T=w+(y<<14&4294967295|y>>>18),y=_+(w^m&(T^w))+v[4]+3889429448&4294967295,_=T+(y<<20&4294967295|y>>>12),y=m+(T^w&(_^T))+v[9]+568446438&4294967295,m=_+(y<<5&4294967295|y>>>27),y=w+(_^T&(m^_))+v[14]+3275163606&4294967295,w=m+(y<<9&4294967295|y>>>23),y=T+(m^_&(w^m))+v[3]+4107603335&4294967295,T=w+(y<<14&4294967295|y>>>18),y=_+(w^m&(T^w))+v[8]+1163531501&4294967295,_=T+(y<<20&4294967295|y>>>12),y=m+(T^w&(_^T))+v[13]+2850285829&4294967295,m=_+(y<<5&4294967295|y>>>27),y=w+(_^T&(m^_))+v[2]+4243563512&4294967295,w=m+(y<<9&4294967295|y>>>23),y=T+(m^_&(w^m))+v[7]+1735328473&4294967295,T=w+(y<<14&4294967295|y>>>18),y=_+(w^m&(T^w))+v[12]+2368359562&4294967295,_=T+(y<<20&4294967295|y>>>12),y=m+(_^T^w)+v[5]+4294588738&4294967295,m=_+(y<<4&4294967295|y>>>28),y=w+(m^_^T)+v[8]+2272392833&4294967295,w=m+(y<<11&4294967295|y>>>21),y=T+(w^m^_)+v[11]+1839030562&4294967295,T=w+(y<<16&4294967295|y>>>16),y=_+(T^w^m)+v[14]+4259657740&4294967295,_=T+(y<<23&4294967295|y>>>9),y=m+(_^T^w)+v[1]+2763975236&4294967295,m=_+(y<<4&4294967295|y>>>28),y=w+(m^_^T)+v[4]+1272893353&4294967295,w=m+(y<<11&4294967295|y>>>21),y=T+(w^m^_)+v[7]+4139469664&4294967295,T=w+(y<<16&4294967295|y>>>16),y=_+(T^w^m)+v[10]+3200236656&4294967295,_=T+(y<<23&4294967295|y>>>9),y=m+(_^T^w)+v[13]+681279174&4294967295,m=_+(y<<4&4294967295|y>>>28),y=w+(m^_^T)+v[0]+3936430074&4294967295,w=m+(y<<11&4294967295|y>>>21),y=T+(w^m^_)+v[3]+3572445317&4294967295,T=w+(y<<16&4294967295|y>>>16),y=_+(T^w^m)+v[6]+76029189&4294967295,_=T+(y<<23&4294967295|y>>>9),y=m+(_^T^w)+v[9]+3654602809&4294967295,m=_+(y<<4&4294967295|y>>>28),y=w+(m^_^T)+v[12]+3873151461&4294967295,w=m+(y<<11&4294967295|y>>>21),y=T+(w^m^_)+v[15]+530742520&4294967295,T=w+(y<<16&4294967295|y>>>16),y=_+(T^w^m)+v[2]+3299628645&4294967295,_=T+(y<<23&4294967295|y>>>9),y=m+(T^(_|~w))+v[0]+4096336452&4294967295,m=_+(y<<6&4294967295|y>>>26),y=w+(_^(m|~T))+v[7]+1126891415&4294967295,w=m+(y<<10&4294967295|y>>>22),y=T+(m^(w|~_))+v[14]+2878612391&4294967295,T=w+(y<<15&4294967295|y>>>17),y=_+(w^(T|~m))+v[5]+4237533241&4294967295,_=T+(y<<21&4294967295|y>>>11),y=m+(T^(_|~w))+v[12]+1700485571&4294967295,m=_+(y<<6&4294967295|y>>>26),y=w+(_^(m|~T))+v[3]+2399980690&4294967295,w=m+(y<<10&4294967295|y>>>22),y=T+(m^(w|~_))+v[10]+4293915773&4294967295,T=w+(y<<15&4294967295|y>>>17),y=_+(w^(T|~m))+v[1]+2240044497&4294967295,_=T+(y<<21&4294967295|y>>>11),y=m+(T^(_|~w))+v[8]+1873313359&4294967295,m=_+(y<<6&4294967295|y>>>26),y=w+(_^(m|~T))+v[15]+4264355552&4294967295,w=m+(y<<10&4294967295|y>>>22),y=T+(m^(w|~_))+v[6]+2734768916&4294967295,T=w+(y<<15&4294967295|y>>>17),y=_+(w^(T|~m))+v[13]+1309151649&4294967295,_=T+(y<<21&4294967295|y>>>11),y=m+(T^(_|~w))+v[4]+4149444226&4294967295,m=_+(y<<6&4294967295|y>>>26),y=w+(_^(m|~T))+v[11]+3174756917&4294967295,w=m+(y<<10&4294967295|y>>>22),y=T+(m^(w|~_))+v[2]+718787259&4294967295,T=w+(y<<15&4294967295|y>>>17),y=_+(w^(T|~m))+v[9]+3951481745&4294967295,E.g[0]=E.g[0]+m&4294967295,E.g[1]=E.g[1]+(T+(y<<21&4294967295|y>>>11))&4294967295,E.g[2]=E.g[2]+T&4294967295,E.g[3]=E.g[3]+w&4294967295}r.prototype.u=function(E,m){m===void 0&&(m=E.length);for(var _=m-this.blockSize,v=this.B,T=this.h,w=0;w<m;){if(T==0)for(;w<=_;)i(this,E,w),w+=this.blockSize;if(typeof E=="string"){for(;w<m;)if(v[T++]=E.charCodeAt(w++),T==this.blockSize){i(this,v),T=0;break}}else for(;w<m;)if(v[T++]=E[w++],T==this.blockSize){i(this,v),T=0;break}}this.h=T,this.o+=m},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var m=1;m<E.length-8;++m)E[m]=0;var _=8*this.o;for(m=E.length-8;m<E.length;++m)E[m]=_&255,_/=256;for(this.u(E),E=Array(16),m=_=0;4>m;++m)for(var v=0;32>v;v+=8)E[_++]=this.g[m]>>>v&255;return E};function o(E,m){var _=u;return Object.prototype.hasOwnProperty.call(_,E)?_[E]:_[E]=m(E)}function a(E,m){this.h=m;for(var _=[],v=!0,T=E.length-1;0<=T;T--){var w=E[T]|0;v&&w==m||(_[T]=w,v=!1)}this.g=_}var u={};function h(E){return-128<=E&&128>E?o(E,function(m){return new a([m|0],0>m?-1:0)}):new a([E|0],0>E?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return I;if(0>E)return N(d(-E));for(var m=[],_=1,v=0;E>=_;v++)m[v]=E/_|0,_*=4294967296;return new a(m,0)}function p(E,m){if(E.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(E.charAt(0)=="-")return N(p(E.substring(1),m));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=d(Math.pow(m,8)),v=I,T=0;T<E.length;T+=8){var w=Math.min(8,E.length-T),y=parseInt(E.substring(T,T+w),m);8>w?(w=d(Math.pow(m,w)),v=v.j(w).add(d(y))):(v=v.j(_),v=v.add(d(y)))}return v}var I=h(0),b=h(1),k=h(16777216);n=a.prototype,n.m=function(){if(C(this))return-N(this).m();for(var E=0,m=1,_=0;_<this.g.length;_++){var v=this.i(_);E+=(0<=v?v:4294967296+v)*m,m*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(O(this))return"0";if(C(this))return"-"+N(this).toString(E);for(var m=d(Math.pow(E,6)),_=this,v="";;){var T=q(_,m).g;_=$(_,T.j(m));var w=((0<_.g.length?_.g[0]:_.h)>>>0).toString(E);if(_=T,O(_))return w+v;for(;6>w.length;)w="0"+w;v=w+v}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function O(E){if(E.h!=0)return!1;for(var m=0;m<E.g.length;m++)if(E.g[m]!=0)return!1;return!0}function C(E){return E.h==-1}n.l=function(E){return E=$(this,E),C(E)?-1:O(E)?0:1};function N(E){for(var m=E.g.length,_=[],v=0;v<m;v++)_[v]=~E.g[v];return new a(_,~E.h).add(b)}n.abs=function(){return C(this)?N(this):this},n.add=function(E){for(var m=Math.max(this.g.length,E.g.length),_=[],v=0,T=0;T<=m;T++){var w=v+(this.i(T)&65535)+(E.i(T)&65535),y=(w>>>16)+(this.i(T)>>>16)+(E.i(T)>>>16);v=y>>>16,w&=65535,y&=65535,_[T]=y<<16|w}return new a(_,_[_.length-1]&-2147483648?-1:0)};function $(E,m){return E.add(N(m))}n.j=function(E){if(O(this)||O(E))return I;if(C(this))return C(E)?N(this).j(N(E)):N(N(this).j(E));if(C(E))return N(this.j(N(E)));if(0>this.l(k)&&0>E.l(k))return d(this.m()*E.m());for(var m=this.g.length+E.g.length,_=[],v=0;v<2*m;v++)_[v]=0;for(v=0;v<this.g.length;v++)for(var T=0;T<E.g.length;T++){var w=this.i(v)>>>16,y=this.i(v)&65535,se=E.i(T)>>>16,ke=E.i(T)&65535;_[2*v+2*T]+=y*ke,Q(_,2*v+2*T),_[2*v+2*T+1]+=w*ke,Q(_,2*v+2*T+1),_[2*v+2*T+1]+=y*se,Q(_,2*v+2*T+1),_[2*v+2*T+2]+=w*se,Q(_,2*v+2*T+2)}for(v=0;v<m;v++)_[v]=_[2*v+1]<<16|_[2*v];for(v=m;v<2*m;v++)_[v]=0;return new a(_,0)};function Q(E,m){for(;(E[m]&65535)!=E[m];)E[m+1]+=E[m]>>>16,E[m]&=65535,m++}function z(E,m){this.g=E,this.h=m}function q(E,m){if(O(m))throw Error("division by zero");if(O(E))return new z(I,I);if(C(E))return m=q(N(E),m),new z(N(m.g),N(m.h));if(C(m))return m=q(E,N(m)),new z(N(m.g),m.h);if(30<E.g.length){if(C(E)||C(m))throw Error("slowDivide_ only works with positive integers.");for(var _=b,v=m;0>=v.l(E);)_=F(_),v=F(v);var T=B(_,1),w=B(v,1);for(v=B(v,2),_=B(_,2);!O(v);){var y=w.add(v);0>=y.l(E)&&(T=T.add(_),w=y),v=B(v,1),_=B(_,1)}return m=$(E,T.j(m)),new z(T,m)}for(T=I;0<=E.l(m);){for(_=Math.max(1,Math.floor(E.m()/m.m())),v=Math.ceil(Math.log(_)/Math.LN2),v=48>=v?1:Math.pow(2,v-48),w=d(_),y=w.j(m);C(y)||0<y.l(E);)_-=v,w=d(_),y=w.j(m);O(w)&&(w=b),T=T.add(w),E=$(E,y)}return new z(T,E)}n.A=function(E){return q(this,E).h},n.and=function(E){for(var m=Math.max(this.g.length,E.g.length),_=[],v=0;v<m;v++)_[v]=this.i(v)&E.i(v);return new a(_,this.h&E.h)},n.or=function(E){for(var m=Math.max(this.g.length,E.g.length),_=[],v=0;v<m;v++)_[v]=this.i(v)|E.i(v);return new a(_,this.h|E.h)},n.xor=function(E){for(var m=Math.max(this.g.length,E.g.length),_=[],v=0;v<m;v++)_[v]=this.i(v)^E.i(v);return new a(_,this.h^E.h)};function F(E){for(var m=E.g.length+1,_=[],v=0;v<m;v++)_[v]=E.i(v)<<1|E.i(v-1)>>>31;return new a(_,E.h)}function B(E,m){var _=m>>5;m%=32;for(var v=E.g.length-_,T=[],w=0;w<v;w++)T[w]=0<m?E.i(w+_)>>>m|E.i(w+_+1)<<32-m:E.i(w+_);return new a(T,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,th=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,ni=a}).apply(typeof pu<"u"?pu:typeof self<"u"?self:typeof window<"u"?window:{});var ao=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var nh,Rs,rh,go,Ra,ih,sh,oh;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,l,c){return s==Array.prototype||s==Object.prototype||(s[l]=c.value),s};function t(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof ao=="object"&&ao];for(var l=0;l<s.length;++l){var c=s[l];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var r=t(this);function i(s,l){if(l)e:{var c=r;s=s.split(".");for(var f=0;f<s.length-1;f++){var A=s[f];if(!(A in c))break e;c=c[A]}s=s[s.length-1],f=c[s],l=l(f),l!=f&&l!=null&&e(c,s,{configurable:!0,writable:!0,value:l})}}function o(s,l){s instanceof String&&(s+="");var c=0,f=!1,A={next:function(){if(!f&&c<s.length){var P=c++;return{value:l(P,s[P]),done:!1}}return f=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}i("Array.prototype.values",function(s){return s||function(){return o(this,function(l,c){return c})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function h(s){var l=typeof s;return l=l!="object"?l:s?Array.isArray(s)?"array":l:"null",l=="array"||l=="object"&&typeof s.length=="number"}function d(s){var l=typeof s;return l=="object"&&s!=null||l=="function"}function p(s,l,c){return s.call.apply(s.bind,arguments)}function I(s,l,c){if(!s)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,f),s.apply(l,A)}}return function(){return s.apply(l,arguments)}}function b(s,l,c){return b=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:I,b.apply(null,arguments)}function k(s,l){var c=Array.prototype.slice.call(arguments,1);return function(){var f=c.slice();return f.push.apply(f,arguments),s.apply(this,f)}}function O(s,l){function c(){}c.prototype=l.prototype,s.aa=l.prototype,s.prototype=new c,s.prototype.constructor=s,s.Qb=function(f,A,P){for(var x=Array(arguments.length-2),Ie=2;Ie<arguments.length;Ie++)x[Ie-2]=arguments[Ie];return l.prototype[A].apply(f,x)}}function C(s){const l=s.length;if(0<l){const c=Array(l);for(let f=0;f<l;f++)c[f]=s[f];return c}return[]}function N(s,l){for(let c=1;c<arguments.length;c++){const f=arguments[c];if(h(f)){const A=s.length||0,P=f.length||0;s.length=A+P;for(let x=0;x<P;x++)s[A+x]=f[x]}else s.push(f)}}class ${constructor(l,c){this.i=l,this.j=c,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function Q(s){return/^[\s\xa0]*$/.test(s)}function z(){var s=u.navigator;return s&&(s=s.userAgent)?s:""}function q(s){return q[" "](s),s}q[" "]=function(){};var F=z().indexOf("Gecko")!=-1&&!(z().toLowerCase().indexOf("webkit")!=-1&&z().indexOf("Edge")==-1)&&!(z().indexOf("Trident")!=-1||z().indexOf("MSIE")!=-1)&&z().indexOf("Edge")==-1;function B(s,l,c){for(const f in s)l.call(c,s[f],f,s)}function E(s,l){for(const c in s)l.call(void 0,s[c],c,s)}function m(s){const l={};for(const c in s)l[c]=s[c];return l}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function v(s,l){let c,f;for(let A=1;A<arguments.length;A++){f=arguments[A];for(c in f)s[c]=f[c];for(let P=0;P<_.length;P++)c=_[P],Object.prototype.hasOwnProperty.call(f,c)&&(s[c]=f[c])}}function T(s){var l=1;s=s.split(":");const c=[];for(;0<l&&s.length;)c.push(s.shift()),l--;return s.length&&c.push(s.join(":")),c}function w(s){u.setTimeout(()=>{throw s},0)}function y(){var s=De;let l=null;return s.g&&(l=s.g,s.g=s.g.next,s.g||(s.h=null),l.next=null),l}class se{constructor(){this.h=this.g=null}add(l,c){const f=ke.get();f.set(l,c),this.h?this.h.next=f:this.g=f,this.h=f}}var ke=new $(()=>new St,s=>s.reset());class St{constructor(){this.next=this.g=this.h=null}set(l,c){this.h=l,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let Y,X=!1,De=new se,Qe=()=>{const s=u.Promise.resolve(void 0);Y=()=>{s.then(Mn)}};var Mn=()=>{for(var s;s=y();){try{s.h.call(s.g)}catch(c){w(c)}var l=ke;l.j(s),100>l.h&&(l.h++,s.next=l.g,l.g=s)}X=!1};function Xe(){this.s=this.s,this.C=this.C}Xe.prototype.s=!1,Xe.prototype.ma=function(){this.s||(this.s=!0,this.N())},Xe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function de(s,l){this.type=s,this.g=this.target=l,this.defaultPrevented=!1}de.prototype.h=function(){this.defaultPrevented=!0};var Ot=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var s=!1,l=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const c=()=>{};u.addEventListener("test",c,l),u.removeEventListener("test",c,l)}catch{}return s}();function ct(s,l){if(de.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var c=this.type=s.type,f=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=l,l=s.relatedTarget){if(F){e:{try{q(l.nodeName);var A=!0;break e}catch{}A=!1}A||(l=null)}}else c=="mouseover"?l=s.fromElement:c=="mouseout"&&(l=s.toElement);this.relatedTarget=l,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:rn[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&ct.aa.h.call(this)}}O(ct,de);var rn={2:"touch",3:"pen",4:"mouse"};ct.prototype.h=function(){ct.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var Ze="closure_listenable_"+(1e6*Math.random()|0),Pt=0;function kt(s,l,c,f,A){this.listener=s,this.proxy=null,this.src=l,this.type=c,this.capture=!!f,this.ha=A,this.key=++Pt,this.da=this.fa=!1}function Lt(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function ht(s){this.src=s,this.g={},this.h=0}ht.prototype.add=function(s,l,c,f,A){var P=s.toString();s=this.g[P],s||(s=this.g[P]=[],this.h++);var x=Nt(s,l,f,A);return-1<x?(l=s[x],c||(l.fa=!1)):(l=new kt(l,this.src,P,!!f,A),l.fa=c,s.push(l)),l};function Me(s,l){var c=l.type;if(c in s.g){var f=s.g[c],A=Array.prototype.indexOf.call(f,l,void 0),P;(P=0<=A)&&Array.prototype.splice.call(f,A,1),P&&(Lt(l),s.g[c].length==0&&(delete s.g[c],s.h--))}}function Nt(s,l,c,f){for(var A=0;A<s.length;++A){var P=s[A];if(!P.da&&P.listener==l&&P.capture==!!c&&P.ha==f)return A}return-1}var Mt="closure_lm_"+(1e6*Math.random()|0),rt={};function xe(s,l,c,f,A){if(Array.isArray(l)){for(var P=0;P<l.length;P++)xe(s,l[P],c,f,A);return null}return c=Ue(c),s&&s[Ze]?s.K(l,c,d(f)?!!f.capture:!1,A):xn(s,l,c,!1,f,A)}function xn(s,l,c,f,A,P){if(!l)throw Error("Invalid event type");var x=d(A)?!!A.capture:!!A,Ie=Ee(s);if(Ie||(s[Mt]=Ie=new ht(s)),c=Ie.add(l,c,f,x,P),c.proxy)return c;if(f=sn(),c.proxy=f,f.src=s,f.listener=c,s.addEventListener)Ot||(A=x),A===void 0&&(A=!1),s.addEventListener(l.toString(),f,A);else if(s.attachEvent)s.attachEvent(xt(l.toString()),f);else if(s.addListener&&s.removeListener)s.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return c}function sn(){function s(c){return l.call(s.src,s.listener,c)}const l=Se;return s}function Ve(s,l,c,f,A){if(Array.isArray(l))for(var P=0;P<l.length;P++)Ve(s,l[P],c,f,A);else f=d(f)?!!f.capture:!!f,c=Ue(c),s&&s[Ze]?(s=s.i,l=String(l).toString(),l in s.g&&(P=s.g[l],c=Nt(P,c,f,A),-1<c&&(Lt(P[c]),Array.prototype.splice.call(P,c,1),P.length==0&&(delete s.g[l],s.h--)))):s&&(s=Ee(s))&&(l=s.g[l.toString()],s=-1,l&&(s=Nt(l,c,f,A)),(c=-1<s?l[s]:null)&&Et(c))}function Et(s){if(typeof s!="number"&&s&&!s.da){var l=s.src;if(l&&l[Ze])Me(l.i,s);else{var c=s.type,f=s.proxy;l.removeEventListener?l.removeEventListener(c,f,s.capture):l.detachEvent?l.detachEvent(xt(c),f):l.addListener&&l.removeListener&&l.removeListener(f),(c=Ee(l))?(Me(c,s),c.h==0&&(c.src=null,l[Mt]=null)):Lt(s)}}}function xt(s){return s in rt?rt[s]:rt[s]="on"+s}function Se(s,l){if(s.da)s=!0;else{l=new ct(l,this);var c=s.listener,f=s.ha||s.src;s.fa&&Et(s),s=c.call(f,l)}return s}function Ee(s){return s=s[Mt],s instanceof ht?s:null}var Ut="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ue(s){return typeof s=="function"?s:(s[Ut]||(s[Ut]=function(l){return s.handleEvent(l)}),s[Ut])}function ge(){Xe.call(this),this.i=new ht(this),this.M=this,this.F=null}O(ge,Xe),ge.prototype[Ze]=!0,ge.prototype.removeEventListener=function(s,l,c,f){Ve(this,s,l,c,f)};function Ne(s,l){var c,f=s.F;if(f)for(c=[];f;f=f.F)c.push(f);if(s=s.M,f=l.type||l,typeof l=="string")l=new de(l,s);else if(l instanceof de)l.target=l.target||s;else{var A=l;l=new de(f,s),v(l,A)}if(A=!0,c)for(var P=c.length-1;0<=P;P--){var x=l.g=c[P];A=Tt(x,f,!0,l)&&A}if(x=l.g=s,A=Tt(x,f,!0,l)&&A,A=Tt(x,f,!1,l)&&A,c)for(P=0;P<c.length;P++)x=l.g=c[P],A=Tt(x,f,!1,l)&&A}ge.prototype.N=function(){if(ge.aa.N.call(this),this.i){var s=this.i,l;for(l in s.g){for(var c=s.g[l],f=0;f<c.length;f++)Lt(c[f]);delete s.g[l],s.h--}}this.F=null},ge.prototype.K=function(s,l,c,f){return this.i.add(String(s),l,!1,c,f)},ge.prototype.L=function(s,l,c,f){return this.i.add(String(s),l,!0,c,f)};function Tt(s,l,c,f){if(l=s.i.g[String(l)],!l)return!0;l=l.concat();for(var A=!0,P=0;P<l.length;++P){var x=l[P];if(x&&!x.da&&x.capture==c){var Ie=x.listener,Be=x.ha||x.src;x.fa&&Me(s.i,x),A=Ie.call(Be,f)!==!1&&A}}return A&&!f.defaultPrevented}function Ae(s,l,c){if(typeof s=="function")c&&(s=b(s,c));else if(s&&typeof s.handleEvent=="function")s=b(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:u.setTimeout(s,l||0)}function Fe(s){s.g=Ae(()=>{s.g=null,s.i&&(s.i=!1,Fe(s))},s.l);const l=s.h;s.h=null,s.m.apply(null,l)}class ze extends Xe{constructor(l,c){super(),this.m=l,this.l=c,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Fe(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function et(s){Xe.call(this),this.h=s,this.g={}}O(et,Xe);var lr=[];function on(s){B(s.g,function(l,c){this.g.hasOwnProperty(c)&&Et(l)},s),s.g={}}et.prototype.N=function(){et.aa.N.call(this),on(this)},et.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var dt=u.JSON.stringify,_n=u.JSON.parse,ur=class{stringify(s){return u.JSON.stringify(s,void 0)}parse(s){return u.JSON.parse(s,void 0)}};function xr(){}xr.prototype.h=null;function yn(s){return s.h||(s.h=s.i())}function is(){}var Un={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ft(){de.call(this,"d")}O(Ft,de);function Ur(){de.call(this,"c")}O(Ur,de);var an={},hi=null;function zt(){return hi=hi||new ge}an.La="serverreachability";function ss(s){de.call(this,an.La,s)}O(ss,de);function Fn(s){const l=zt();Ne(l,new ss(l))}an.STAT_EVENT="statevent";function Kt(s,l){de.call(this,an.STAT_EVENT,s),this.stat=l}O(Kt,de);function Ye(s){const l=zt();Ne(l,new Kt(l,s))}an.Ma="timingevent";function di(s,l){de.call(this,an.Ma,s),this.size=l}O(di,de);function Bn(s,l){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){s()},l)}function K(){this.g=!0}K.prototype.xa=function(){this.g=!1};function cr(s,l,c,f,A,P){s.info(function(){if(s.g)if(P)for(var x="",Ie=P.split("&"),Be=0;Be<Ie.length;Be++){var le=Ie[Be].split("=");if(1<le.length){var _e=le[0];le=le[1];var Ke=_e.split("_");x=2<=Ke.length&&Ke[1]=="type"?x+(_e+"="+le+"&"):x+(_e+"=redacted&")}}else x=null;else x=P;return"XMLHTTP REQ ("+f+") [attempt "+A+"]: "+l+`
`+c+`
`+x})}function Xs(s,l,c,f,A,P,x){s.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+A+"]: "+l+`
`+c+`
`+P+" "+x})}function vn(s,l,c,f){s.info(function(){return"XMLHTTP TEXT ("+l+"): "+Zs(s,c)+(f?" "+f:"")})}function jn(s,l){s.info(function(){return"TIMEOUT: "+l})}K.prototype.info=function(){};function Zs(s,l){if(!s.g)return l;if(!l)return null;try{var c=JSON.parse(l);if(c){for(s=0;s<c.length;s++)if(Array.isArray(c[s])){var f=c[s];if(!(2>f.length)){var A=f[1];if(Array.isArray(A)&&!(1>A.length)){var P=A[0];if(P!="noop"&&P!="stop"&&P!="close")for(var x=1;x<A.length;x++)A[x]=""}}}}return dt(c)}catch{return l}}var hr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Gt={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Fr;function dr(){}O(dr,xr),dr.prototype.g=function(){return new XMLHttpRequest},dr.prototype.i=function(){return{}},Fr=new dr;function Wt(s,l,c,f){this.j=s,this.i=l,this.l=c,this.R=f||1,this.U=new et(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new En}function En(){this.i=null,this.g="",this.h=!1}var os={},Br={};function Bt(s,l,c){s.L=1,s.v=mr(qt(l)),s.m=c,s.P=!0,fi(s,null)}function fi(s,l){s.F=Date.now(),Qt(s),s.A=qt(s.v);var c=s.A,f=s.R;Array.isArray(f)||(f=[String(f)]),ps(c.i,"t",f),s.C=0,c=s.j.J,s.h=new En,s.g=ki(s.j,c?l:null,!s.m),0<s.O&&(s.M=new ze(b(s.Y,s,s.g),s.O)),l=s.U,c=s.g,f=s.ca;var A="readystatechange";Array.isArray(A)||(A&&(lr[0]=A.toString()),A=lr);for(var P=0;P<A.length;P++){var x=xe(c,A[P],f||l.handleEvent,!1,l.h||l);if(!x)break;l.g[x.key]=x}l=s.H?m(s.H):{},s.m?(s.u||(s.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,l)):(s.u="GET",s.g.ea(s.A,s.u,null,l)),Fn(),cr(s.i,s.u,s.A,s.l,s.R,s.m)}Wt.prototype.ca=function(s){s=s.target;const l=this.M;l&&Zt(s)==3?l.j():this.Y(s)},Wt.prototype.Y=function(s){try{if(s==this.g)e:{const Ke=Zt(this.g);var l=this.g.Ba();const Sn=this.g.Z();if(!(3>Ke)&&(Ke!=3||this.g&&(this.h.h||this.g.oa()||Ai(this.g)))){this.J||Ke!=4||l==7||(l==8||0>=Sn?Fn(3):Fn(2)),jr(this);var c=this.g.Z();this.X=c;t:if(pi(this)){var f=Ai(this.g);s="";var A=f.length,P=Zt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ln(this),It(this);var x="";break t}this.h.i=new u.TextDecoder}for(l=0;l<A;l++)this.h.h=!0,s+=this.h.i.decode(f[l],{stream:!(P&&l==A-1)});f.length=0,this.h.g+=s,this.C=0,x=this.h.g}else x=this.g.oa();if(this.o=c==200,Xs(this.i,this.u,this.A,this.l,this.R,Ke,c),this.o){if(this.T&&!this.K){t:{if(this.g){var Ie,Be=this.g;if((Ie=Be.g?Be.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Q(Ie)){var le=Ie;break t}}le=null}if(c=le)vn(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,qr(this,c);else{this.o=!1,this.s=3,Ye(12),ln(this),It(this);break e}}if(this.P){c=!0;let Ge;for(;!this.J&&this.C<x.length;)if(Ge=as(this,x),Ge==Br){Ke==4&&(this.s=4,Ye(14),c=!1),vn(this.i,this.l,null,"[Incomplete Response]");break}else if(Ge==os){this.s=4,Ye(15),vn(this.i,this.l,x,"[Invalid Chunk]"),c=!1;break}else vn(this.i,this.l,Ge,null),qr(this,Ge);if(pi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ke!=4||x.length!=0||this.h.h||(this.s=1,Ye(16),c=!1),this.o=this.o&&c,!c)vn(this.i,this.l,x,"[Invalid Chunked Response]"),ln(this),It(this);else if(0<x.length&&!this.W){this.W=!0;var _e=this.j;_e.g==this&&_e.ba&&!_e.M&&(_e.j.info("Great, no buffering proxy detected. Bytes received: "+x.length),Ri(_e),_e.M=!0,Ye(11))}}else vn(this.i,this.l,x,null),qr(this,x);Ke==4&&ln(this),this.o&&!this.J&&(Ke==4?Wr(this.j,this):(this.o=!1,Qt(this)))}else Dt(this.g),c==400&&0<x.indexOf("Unknown SID")?(this.s=3,Ye(12)):(this.s=0,Ye(13)),ln(this),It(this)}}}catch{}finally{}};function pi(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function as(s,l){var c=s.C,f=l.indexOf(`
`,c);return f==-1?Br:(c=Number(l.substring(c,f)),isNaN(c)?os:(f+=1,f+c>l.length?Br:(l=l.slice(f,f+c),s.C=f+c,l)))}Wt.prototype.cancel=function(){this.J=!0,ln(this)};function Qt(s){s.S=Date.now()+s.I,ls(s,s.I)}function ls(s,l){if(s.B!=null)throw Error("WatchDog timer not null");s.B=Bn(b(s.ba,s),l)}function jr(s){s.B&&(u.clearTimeout(s.B),s.B=null)}Wt.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(jn(this.i,this.A),this.L!=2&&(Fn(),Ye(17)),ln(this),this.s=2,It(this)):ls(this,this.S-s)};function It(s){s.j.G==0||s.J||Wr(s.j,s)}function ln(s){jr(s);var l=s.M;l&&typeof l.ma=="function"&&l.ma(),s.M=null,on(s.U),s.g&&(l=s.g,s.g=null,l.abort(),l.ma())}function qr(s,l){try{var c=s.j;if(c.G!=0&&(c.g==s||jt(c.h,s))){if(!s.K&&jt(c.h,s)&&c.G==3){try{var f=c.Da.g.parse(l)}catch{f=null}if(Array.isArray(f)&&f.length==3){var A=f;if(A[0]==0){e:if(!c.u){if(c.g)if(c.g.F+3e3<s.F)Rn(c),Kr(c);else break e;Cn(c),Ye(18)}}else c.za=A[1],0<c.za-c.T&&37500>A[2]&&c.F&&c.v==0&&!c.C&&(c.C=Bn(b(c.Za,c),6e3));if(1>=mi(c.h)&&c.ca){try{c.ca()}catch{}c.ca=void 0}}else fn(c,11)}else if((s.K||c.g==s)&&Rn(c),!Q(l))for(A=c.Da.g.parse(l),l=0;l<A.length;l++){let le=A[l];if(c.T=le[0],le=le[1],c.G==2)if(le[0]=="c"){c.K=le[1],c.ia=le[2];const _e=le[3];_e!=null&&(c.la=_e,c.j.info("VER="+c.la));const Ke=le[4];Ke!=null&&(c.Aa=Ke,c.j.info("SVER="+c.Aa));const Sn=le[5];Sn!=null&&typeof Sn=="number"&&0<Sn&&(f=1.5*Sn,c.L=f,c.j.info("backChannelRequestTimeoutMs_="+f)),f=c;const Ge=s.g;if(Ge){const je=Ge.g?Ge.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(je){var P=f.h;P.g||je.indexOf("spdy")==-1&&je.indexOf("quic")==-1&&je.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(Hr(P,P.h),P.h=null))}if(f.D){const Qr=Ge.g?Ge.g.getResponseHeader("X-HTTP-Session-Id"):null;Qr&&(f.ya=Qr,be(f.I,f.D,Qr))}}c.G=3,c.l&&c.l.ua(),c.ba&&(c.R=Date.now()-s.F,c.j.info("Handshake RTT: "+c.R+"ms")),f=c;var x=s;if(f.qa=Es(f,f.J?f.ia:null,f.W),x.K){gi(f.h,x);var Ie=x,Be=f.L;Be&&(Ie.I=Be),Ie.B&&(jr(Ie),Qt(Ie)),f.g=x}else Ci(f);0<c.i.length&&Gr(c)}else le[0]!="stop"&&le[0]!="close"||fn(c,7);else c.G==3&&(le[0]=="stop"||le[0]=="close"?le[0]=="stop"?fn(c,7):Ht(c):le[0]!="noop"&&c.l&&c.l.ta(le),c.v=0)}}Fn(4)}catch{}}var us=class{constructor(s,l){this.g=s,this.map=l}};function Tn(s){this.l=s||10,u.PerformanceNavigationTiming?(s=u.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function cs(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function mi(s){return s.h?1:s.g?s.g.size:0}function jt(s,l){return s.h?s.h==l:s.g?s.g.has(l):!1}function Hr(s,l){s.g?s.g.add(l):s.h=l}function gi(s,l){s.h&&s.h==l?s.h=null:s.g&&s.g.has(l)&&s.g.delete(l)}Tn.prototype.cancel=function(){if(this.i=_i(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function _i(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let l=s.i;for(const c of s.g.values())l=l.concat(c.D);return l}return C(s.i)}function qn(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(h(s)){for(var l=[],c=s.length,f=0;f<c;f++)l.push(s[f]);return l}l=[],c=0;for(f in s)l[c++]=s[f];return l}function eo(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(h(s)||typeof s=="string"){var l=[];s=s.length;for(var c=0;c<s;c++)l.push(c);return l}l=[],c=0;for(const f in s)l[c++]=f;return l}}}function yi(s,l){if(s.forEach&&typeof s.forEach=="function")s.forEach(l,void 0);else if(h(s)||typeof s=="string")Array.prototype.forEach.call(s,l,void 0);else for(var c=eo(s),f=qn(s),A=f.length,P=0;P<A;P++)l.call(void 0,f[P],c&&c[P],s)}var Yt=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function hs(s,l){if(s){s=s.split("&");for(var c=0;c<s.length;c++){var f=s[c].indexOf("="),A=null;if(0<=f){var P=s[c].substring(0,f);A=s[c].substring(f+1)}else P=s[c];l(P,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function un(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof un){this.h=s.h,fr(this,s.j),this.o=s.o,this.g=s.g,pr(this,s.s),this.l=s.l;var l=s.i,c=new Kn;c.i=l.i,l.g&&(c.g=new Map(l.g),c.h=l.h),In(this,c),this.m=s.m}else s&&(l=String(s).match(Yt))?(this.h=!1,fr(this,l[1]||"",!0),this.o=wt(l[2]||""),this.g=wt(l[3]||"",!0),pr(this,l[4]),this.l=wt(l[5]||"",!0),In(this,l[6]||"",!0),this.m=wt(l[7]||"")):(this.h=!1,this.i=new Kn(null,this.h))}un.prototype.toString=function(){var s=[],l=this.j;l&&s.push(Hn(l,vi,!0),":");var c=this.g;return(c||l=="file")&&(s.push("//"),(l=this.o)&&s.push(Hn(l,vi,!0),"@"),s.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.s,c!=null&&s.push(":",String(c))),(c=this.l)&&(this.g&&c.charAt(0)!="/"&&s.push("/"),s.push(Hn(c,c.charAt(0)=="/"?to:zn,!0))),(c=this.i.toString())&&s.push("?",c),(c=this.m)&&s.push("#",Hn(c,cn)),s.join("")};function qt(s){return new un(s)}function fr(s,l,c){s.j=c?wt(l,!0):l,s.j&&(s.j=s.j.replace(/:$/,""))}function pr(s,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);s.s=l}else s.s=null}function In(s,l,c){l instanceof Kn?(s.i=l,hn(s.i,s.h)):(c||(l=Hn(l,fs)),s.i=new Kn(l,s.h))}function be(s,l,c){s.i.set(l,c)}function mr(s){return be(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function wt(s,l){return s?l?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function Hn(s,l,c){return typeof s=="string"?(s=encodeURI(s).replace(l,ds),c&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function ds(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var vi=/[#\/\?@]/g,zn=/[#\?:]/g,to=/[#\?]/g,fs=/[#\?@]/g,cn=/#/g;function Kn(s,l){this.h=this.g=null,this.i=s||null,this.j=!!l}function Jt(s){s.g||(s.g=new Map,s.h=0,s.i&&hs(s.i,function(l,c){s.add(decodeURIComponent(l.replace(/\+/g," ")),c)}))}n=Kn.prototype,n.add=function(s,l){Jt(this),this.i=null,s=An(this,s);var c=this.g.get(s);return c||this.g.set(s,c=[]),c.push(l),this.h+=1,this};function Ei(s,l){Jt(s),l=An(s,l),s.g.has(l)&&(s.i=null,s.h-=s.g.get(l).length,s.g.delete(l))}function wn(s,l){return Jt(s),l=An(s,l),s.g.has(l)}n.forEach=function(s,l){Jt(this),this.g.forEach(function(c,f){c.forEach(function(A){s.call(l,A,f,this)},this)},this)},n.na=function(){Jt(this);const s=Array.from(this.g.values()),l=Array.from(this.g.keys()),c=[];for(let f=0;f<l.length;f++){const A=s[f];for(let P=0;P<A.length;P++)c.push(l[f])}return c},n.V=function(s){Jt(this);let l=[];if(typeof s=="string")wn(this,s)&&(l=l.concat(this.g.get(An(this,s))));else{s=Array.from(this.g.values());for(let c=0;c<s.length;c++)l=l.concat(s[c])}return l},n.set=function(s,l){return Jt(this),this.i=null,s=An(this,s),wn(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[l]),this.h+=1,this},n.get=function(s,l){return s?(s=this.V(s),0<s.length?String(s[0]):l):l};function ps(s,l,c){Ei(s,l),0<c.length&&(s.i=null,s.g.set(An(s,l),C(c)),s.h+=c.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],l=Array.from(this.g.keys());for(var c=0;c<l.length;c++){var f=l[c];const P=encodeURIComponent(String(f)),x=this.V(f);for(f=0;f<x.length;f++){var A=P;x[f]!==""&&(A+="="+encodeURIComponent(String(x[f]))),s.push(A)}}return this.i=s.join("&")};function An(s,l){return l=String(l),s.j&&(l=l.toLowerCase()),l}function hn(s,l){l&&!s.j&&(Jt(s),s.i=null,s.g.forEach(function(c,f){var A=f.toLowerCase();f!=A&&(Ei(this,f),ps(this,A,c))},s)),s.j=l}function ms(s,l){const c=new K;if(u.Image){const f=new Image;f.onload=k($t,c,"TestLoadImage: loaded",!0,l,f),f.onerror=k($t,c,"TestLoadImage: error",!1,l,f),f.onabort=k($t,c,"TestLoadImage: abort",!1,l,f),f.ontimeout=k($t,c,"TestLoadImage: timeout",!1,l,f),u.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=s}else l(!1)}function gs(s,l){const c=new K,f=new AbortController,A=setTimeout(()=>{f.abort(),$t(c,"TestPingServer: timeout",!1,l)},1e4);fetch(s,{signal:f.signal}).then(P=>{clearTimeout(A),P.ok?$t(c,"TestPingServer: ok",!0,l):$t(c,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(A),$t(c,"TestPingServer: error",!1,l)})}function $t(s,l,c,f,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),f(c)}catch{}}function At(){this.g=new ur}function Gn(s,l,c){const f=c||"";try{yi(s,function(A,P){let x=A;d(A)&&(x=dt(A)),l.push(f+P+"="+encodeURIComponent(x))})}catch(A){throw l.push(f+"type="+encodeURIComponent("_badmap")),A}}function zr(s){this.l=s.Ub||null,this.j=s.eb||!1}O(zr,xr),zr.prototype.g=function(){return new gr(this.l,this.j)},zr.prototype.i=function(s){return function(){return s}}({});function gr(s,l){ge.call(this),this.D=s,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}O(gr,ge),n=gr.prototype,n.open=function(s,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=l,this.readyState=1,_r(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(l.body=s),(this.D||u).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,bt(this)),this.readyState=0},n.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,_r(this)),this.g&&(this.readyState=3,_r(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ft(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function ft(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}n.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var l=s.value?s.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!s.done}))&&(this.response=this.responseText+=l)}s.done?bt(this):_r(this),this.readyState==3&&ft(this)}},n.Ra=function(s){this.g&&(this.response=this.responseText=s,bt(this))},n.Qa=function(s){this.g&&(this.response=s,bt(this))},n.ga=function(){this.g&&bt(this)};function bt(s){s.readyState=4,s.l=null,s.j=null,s.v=null,_r(s)}n.setRequestHeader=function(s,l){this.u.append(s,l)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],l=this.h.entries();for(var c=l.next();!c.done;)c=c.value,s.push(c[0]+": "+c[1]),c=l.next();return s.join(`\r
`)};function _r(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(gr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function Xt(s){let l="";return B(s,function(c,f){l+=f,l+=":",l+=c,l+=`\r
`}),l}function Ti(s,l,c){e:{for(f in c){var f=!1;break e}f=!0}f||(c=Xt(c),typeof s=="string"?c!=null&&encodeURIComponent(String(c)):be(s,l,c))}function ve(s){ge.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}O(ve,ge);var no=/^https?$/i,dn=["POST","PUT"];n=ve.prototype,n.Ha=function(s){this.J=s},n.ea=function(s,l,c,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);l=l?l.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Fr.g(),this.v=this.o?yn(this.o):yn(Fr),this.g.onreadystatechange=b(this.Ea,this);try{this.B=!0,this.g.open(l,String(s),!0),this.B=!1}catch(P){_s(this,P);return}if(s=c||"",c=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var A in f)c.set(A,f[A]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const P of f.keys())c.set(P,f.get(P));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(c.keys()).find(P=>P.toLowerCase()=="content-type"),A=u.FormData&&s instanceof u.FormData,!(0<=Array.prototype.indexOf.call(dn,l,void 0))||f||A||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,x]of c)this.g.setRequestHeader(P,x);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{bn(this),this.u=!0,this.g.send(s),this.u=!1}catch(P){_s(this,P)}};function _s(s,l){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=l,s.m=5,Ii(s),yr(s)}function Ii(s){s.A||(s.A=!0,Ne(s,"complete"),Ne(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,Ne(this,"complete"),Ne(this,"abort"),yr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),yr(this,!0)),ve.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?wi(this):this.bb())},n.bb=function(){wi(this)};function wi(s){if(s.h&&typeof a<"u"&&(!s.v[1]||Zt(s)!=4||s.Z()!=2)){if(s.u&&Zt(s)==4)Ae(s.Ea,0,s);else if(Ne(s,"readystatechange"),Zt(s)==4){s.h=!1;try{const x=s.Z();e:switch(x){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var c;if(!(c=l)){var f;if(f=x===0){var A=String(s.D).match(Yt)[1]||null;!A&&u.self&&u.self.location&&(A=u.self.location.protocol.slice(0,-1)),f=!no.test(A?A.toLowerCase():"")}c=f}if(c)Ne(s,"complete"),Ne(s,"success");else{s.m=6;try{var P=2<Zt(s)?s.g.statusText:""}catch{P=""}s.l=P+" ["+s.Z()+"]",Ii(s)}}finally{yr(s)}}}}function yr(s,l){if(s.g){bn(s);const c=s.g,f=s.v[0]?()=>{}:null;s.g=null,s.v=null,l||Ne(s,"ready");try{c.onreadystatechange=f}catch{}}}function bn(s){s.I&&(u.clearTimeout(s.I),s.I=null)}n.isActive=function(){return!!this.g};function Zt(s){return s.g?s.g.readyState:0}n.Z=function(){try{return 2<Zt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(s){if(this.g){var l=this.g.responseText;return s&&l.indexOf(s)==0&&(l=l.substring(s.length)),_n(l)}};function Ai(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Dt(s){const l={};s=(s.g&&2<=Zt(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<s.length;f++){if(Q(s[f]))continue;var c=T(s[f]);const A=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const P=l[A]||[];l[A]=P,P.push(c)}E(l,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ct(s,l,c){return c&&c.internalChannelParams&&c.internalChannelParams[s]||l}function ys(s){this.Aa=0,this.i=[],this.j=new K,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ct("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ct("baseRetryDelayMs",5e3,s),this.cb=Ct("retryDelaySeedMs",1e4,s),this.Wa=Ct("forwardChannelMaxRetries",2,s),this.wa=Ct("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new Tn(s&&s.concurrentRequestLimit),this.Da=new At,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=ys.prototype,n.la=8,n.G=1,n.connect=function(s,l,c,f){Ye(0),this.W=s,this.H=l||{},c&&f!==void 0&&(this.H.OSID=c,this.H.OAID=f),this.F=this.X,this.I=Es(this,null,this.W),Gr(this)};function Ht(s){if(en(s),s.G==3){var l=s.U++,c=qt(s.I);if(be(c,"SID",s.K),be(c,"RID",l),be(c,"TYPE","terminate"),Wn(s,c),l=new Wt(s,s.j,l),l.L=2,l.v=mr(qt(c)),c=!1,u.navigator&&u.navigator.sendBeacon)try{c=u.navigator.sendBeacon(l.v.toString(),"")}catch{}!c&&u.Image&&(new Image().src=l.v,c=!0),c||(l.g=ki(l.j,null),l.g.ea(l.v)),l.F=Date.now(),Qt(l)}Qn(s)}function Kr(s){s.g&&(Ri(s),s.g.cancel(),s.g=null)}function en(s){Kr(s),s.u&&(u.clearTimeout(s.u),s.u=null),Rn(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&u.clearTimeout(s.s),s.s=null)}function Gr(s){if(!cs(s.h)&&!s.s){s.s=!0;var l=s.Ga;Y||Qe(),X||(Y(),X=!0),De.add(l,s),s.B=0}}function vs(s,l){return mi(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=l.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=Bn(b(s.Ga,s,l),Pi(s,s.B)),s.B++,!0)}n.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const A=new Wt(this,this.j,s);let P=this.o;if(this.S&&(P?(P=m(P),v(P,this.S)):P=this.S),this.m!==null||this.O||(A.H=P,P=null),this.P)e:{for(var l=0,c=0;c<this.i.length;c++){t:{var f=this.i[c];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(l+=f,4096<l){l=c;break e}if(l===4096||c===this.i.length-1){l=c+1;break e}}l=1e3}else l=1e3;l=Je(this,A,l),c=qt(this.I),be(c,"RID",s),be(c,"CVER",22),this.D&&be(c,"X-HTTP-Session-Id",this.D),Wn(this,c),P&&(this.O?l="headers="+encodeURIComponent(String(Xt(P)))+"&"+l:this.m&&Ti(c,this.m,P)),Hr(this.h,A),this.Ua&&be(c,"TYPE","init"),this.P?(be(c,"$req",l),be(c,"SID","null"),A.T=!0,Bt(A,c,null)):Bt(A,c,l),this.G=2}}else this.G==3&&(s?bi(this,s):this.i.length==0||cs(this.h)||bi(this))};function bi(s,l){var c;l?c=l.l:c=s.U++;const f=qt(s.I);be(f,"SID",s.K),be(f,"RID",c),be(f,"AID",s.T),Wn(s,f),s.m&&s.o&&Ti(f,s.m,s.o),c=new Wt(s,s.j,c,s.B+1),s.m===null&&(c.H=s.o),l&&(s.i=l.D.concat(s.i)),l=Je(s,c,1e3),c.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),Hr(s.h,c),Bt(c,f,l)}function Wn(s,l){s.H&&B(s.H,function(c,f){be(l,f,c)}),s.l&&yi({},function(c,f){be(l,f,c)})}function Je(s,l,c){c=Math.min(s.i.length,c);var f=s.l?b(s.l.Na,s.l,s):null;e:{var A=s.i;let P=-1;for(;;){const x=["count="+c];P==-1?0<c?(P=A[0].g,x.push("ofs="+P)):P=0:x.push("ofs="+P);let Ie=!0;for(let Be=0;Be<c;Be++){let le=A[Be].g;const _e=A[Be].map;if(le-=P,0>le)P=Math.max(0,A[Be].g-100),Ie=!1;else try{Gn(_e,x,"req"+le+"_")}catch{f&&f(_e)}}if(Ie){f=x.join("&");break e}}}return s=s.i.splice(0,c),l.D=s,f}function Ci(s){if(!s.g&&!s.u){s.Y=1;var l=s.Fa;Y||Qe(),X||(Y(),X=!0),De.add(l,s),s.v=0}}function Cn(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=Bn(b(s.Fa,s),Pi(s,s.v)),s.v++,!0)}n.Fa=function(){if(this.u=null,Si(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=Bn(b(this.ab,this),s)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ye(10),Kr(this),Si(this))};function Ri(s){s.A!=null&&(u.clearTimeout(s.A),s.A=null)}function Si(s){s.g=new Wt(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var l=qt(s.qa);be(l,"RID","rpc"),be(l,"SID",s.K),be(l,"AID",s.T),be(l,"CI",s.F?"0":"1"),!s.F&&s.ja&&be(l,"TO",s.ja),be(l,"TYPE","xmlhttp"),Wn(s,l),s.m&&s.o&&Ti(l,s.m,s.o),s.L&&(s.g.I=s.L);var c=s.g;s=s.ia,c.L=1,c.v=mr(qt(l)),c.m=null,c.P=!0,fi(c,s)}n.Za=function(){this.C!=null&&(this.C=null,Kr(this),Cn(this),Ye(19))};function Rn(s){s.C!=null&&(u.clearTimeout(s.C),s.C=null)}function Wr(s,l){var c=null;if(s.g==l){Rn(s),Ri(s),s.g=null;var f=2}else if(jt(s.h,l))c=l.D,gi(s.h,l),f=1;else return;if(s.G!=0){if(l.o)if(f==1){c=l.m?l.m.length:0,l=Date.now()-l.F;var A=s.B;f=zt(),Ne(f,new di(f,c)),Gr(s)}else Ci(s);else if(A=l.s,A==3||A==0&&0<l.X||!(f==1&&vs(s,l)||f==2&&Cn(s)))switch(c&&0<c.length&&(l=s.h,l.i=l.i.concat(c)),A){case 1:fn(s,5);break;case 4:fn(s,10);break;case 3:fn(s,6);break;default:fn(s,2)}}}function Pi(s,l){let c=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(c*=2),c*l}function fn(s,l){if(s.j.info("Error code "+l),l==2){var c=b(s.fb,s),f=s.Xa;const A=!f;f=new un(f||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||fr(f,"https"),mr(f),A?ms(f.toString(),c):gs(f.toString(),c)}else Ye(2);s.G=0,s.l&&s.l.sa(l),Qn(s),en(s)}n.fb=function(s){s?(this.j.info("Successfully pinged google.com"),Ye(2)):(this.j.info("Failed to ping google.com"),Ye(1))};function Qn(s){if(s.G=0,s.ka=[],s.l){const l=_i(s.h);(l.length!=0||s.i.length!=0)&&(N(s.ka,l),N(s.ka,s.i),s.h.i.length=0,C(s.i),s.i.length=0),s.l.ra()}}function Es(s,l,c){var f=c instanceof un?qt(c):new un(c);if(f.g!="")l&&(f.g=l+"."+f.g),pr(f,f.s);else{var A=u.location;f=A.protocol,l=l?l+"."+A.hostname:A.hostname,A=+A.port;var P=new un(null);f&&fr(P,f),l&&(P.g=l),A&&pr(P,A),c&&(P.l=c),f=P}return c=s.D,l=s.ya,c&&l&&be(f,c,l),be(f,"VER",s.la),Wn(s,f),f}function ki(s,l,c){if(l&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=s.Ca&&!s.pa?new ve(new zr({eb:c})):new ve(s.pa),l.Ha(s.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function vr(){}n=vr.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Yn(){}Yn.prototype.g=function(s,l){return new it(s,l)};function it(s,l){ge.call(this),this.g=new ys(l),this.l=s,this.h=l&&l.messageUrlParams||null,s=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(s?s["X-WebChannel-Content-Type"]=l.messageContentType:s={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(s?s["X-WebChannel-Client-Profile"]=l.va:s={"X-WebChannel-Client-Profile":l.va}),this.g.S=s,(s=l&&l.Sb)&&!Q(s)&&(this.g.m=s),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!Q(l)&&(this.g.D=l,s=this.h,s!==null&&l in s&&(s=this.h,l in s&&delete s[l])),this.j=new tn(this)}O(it,ge),it.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},it.prototype.close=function(){Ht(this.g)},it.prototype.o=function(s){var l=this.g;if(typeof s=="string"){var c={};c.__data__=s,s=c}else this.u&&(c={},c.__data__=dt(s),s=c);l.i.push(new us(l.Ya++,s)),l.G==3&&Gr(l)},it.prototype.N=function(){this.g.l=null,delete this.j,Ht(this.g),delete this.g,it.aa.N.call(this)};function Jn(s){Ft.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var l=s.__sm__;if(l){e:{for(const c in l){s=c;break e}s=void 0}(this.i=s)&&(s=this.i,l=l!==null&&s in l?l[s]:void 0),this.data=l}else this.data=s}O(Jn,Ft);function Ni(){Ur.call(this),this.status=1}O(Ni,Ur);function tn(s){this.g=s}O(tn,vr),tn.prototype.ua=function(){Ne(this.g,"a")},tn.prototype.ta=function(s){Ne(this.g,new Jn(s))},tn.prototype.sa=function(s){Ne(this.g,new Ni)},tn.prototype.ra=function(){Ne(this.g,"b")},Yn.prototype.createWebChannel=Yn.prototype.g,it.prototype.send=it.prototype.o,it.prototype.open=it.prototype.m,it.prototype.close=it.prototype.close,oh=function(){return new Yn},sh=function(){return zt()},ih=an,Ra={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},hr.NO_ERROR=0,hr.TIMEOUT=8,hr.HTTP_ERROR=6,go=hr,Gt.COMPLETE="complete",rh=Gt,is.EventType=Un,Un.OPEN="a",Un.CLOSE="b",Un.ERROR="c",Un.MESSAGE="d",ge.prototype.listen=ge.prototype.K,Rs=is,ve.prototype.listenOnce=ve.prototype.L,ve.prototype.getLastError=ve.prototype.Ka,ve.prototype.getLastErrorCode=ve.prototype.Ba,ve.prototype.getStatus=ve.prototype.Z,ve.prototype.getResponseJson=ve.prototype.Oa,ve.prototype.getResponseText=ve.prototype.oa,ve.prototype.send=ve.prototype.ea,ve.prototype.setWithCredentials=ve.prototype.Ha,nh=ve}).apply(typeof ao<"u"?ao:typeof self<"u"?self:typeof window<"u"?window:{});const mu="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}_t.UNAUTHENTICATED=new _t(null),_t.GOOGLE_CREDENTIALS=new _t("google-credentials-uid"),_t.FIRST_PARTY=new _t("first-party-uid"),_t.MOCK_USER=new _t("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ts="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai=new Wa("@firebase/firestore");function ws(){return ai.logLevel}function G(n,...e){if(ai.logLevel<=he.DEBUG){const t=e.map(sl);ai.debug(`Firestore (${ts}): ${n}`,...t)}}function sr(n,...e){if(ai.logLevel<=he.ERROR){const t=e.map(sl);ai.error(`Firestore (${ts}): ${n}`,...t)}}function Gi(n,...e){if(ai.logLevel<=he.WARN){const t=e.map(sl);ai.warn(`Firestore (${ts}): ${n}`,...t)}}function sl(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(n="Unexpected state"){const e=`FIRESTORE (${ts}) INTERNAL ASSERTION FAILED: `+n;throw sr(e),new Error(e)}function Le(n,e){n||ue()}function me(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class te extends or{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class $m{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(_t.UNAUTHENTICATED))}shutdown(){}}class Xm{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Zm{constructor(e){this.t=e,this.currentUser=_t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Le(this.o===void 0);let r=this.i;const i=h=>this.i!==r?(r=this.i,t(h)):Promise.resolve();let o=new ri;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new ri,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const h=o;e.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},u=h=>{G("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>u(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?u(h):(G("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new ri)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(G("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Le(typeof r.accessToken=="string"),new ah(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Le(e===null||typeof e=="string"),new _t(e)}}class eg{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=_t.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class tg{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new eg(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(_t.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ng{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class rg{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Le(this.o===void 0);const r=o=>{o.error!=null&&G("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,G("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{G("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):G("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Le(typeof t.token=="string"),this.R=t.token,new ng(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ig(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=ig(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<t&&(r+=e.charAt(i[o]%e.length))}return r}}function Te(n,e){return n<e?-1:n>e?1:0}function Wi(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new te(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new te(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new te(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new te(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Vt.fromMillis(Date.now())}static fromDate(e){return Vt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Vt(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Te(this.nanoseconds,e.nanoseconds):Te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ae(e)}static min(){return new ae(new Vt(0,0))}static max(){return new ae(new Vt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e,t,r){t===void 0?t=0:t>e.length&&ue(),r===void 0?r=e.length-t:r>e.length-t&&ue(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Us.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Us?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const o=e.get(i),a=t.get(i);if(o<a)return-1;if(o>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Oe extends Us{construct(e,t,r){return new Oe(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new te(j.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new Oe(t)}static emptyPath(){return new Oe([])}}const sg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Rt extends Us{construct(e,t,r){return new Rt(e,t,r)}static isValidIdentifier(e){return sg.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Rt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Rt(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const o=()=>{if(r.length===0)throw new te(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;i<e.length;){const u=e[i];if(u==="\\"){if(i+1===e.length)throw new te(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const h=e[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new te(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=h,i+=2}else u==="`"?(a=!a,i++):u!=="."||a?(r+=u,i++):(o(),i++)}if(o(),a)throw new te(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Rt(t)}static emptyPath(){return new Rt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this.path=e}static fromPath(e){return new ne(Oe.fromString(e))}static fromName(e){return new ne(Oe.fromString(e).popFirst(5))}static empty(){return new ne(Oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Oe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ne(new Oe(e.slice()))}}function og(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=ae.fromTimestamp(r===1e9?new Vt(t+1,0):new Vt(t,r));return new Vr(i,ne.empty(),e)}function ag(n){return new Vr(n.readTime,n.key,-1)}class Vr{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Vr(ae.min(),ne.empty(),-1)}static max(){return new Vr(ae.max(),ne.empty(),-1)}}function lg(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ne.comparator(n.documentKey,e.documentKey),t!==0?t:Te(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ug="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class cg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ol(n){if(n.code!==j.FAILED_PRECONDITION||n.message!==ug)throw n;G("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ue(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new L((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(t,o).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof L?t:L.resolve(t)}catch(t){return L.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):L.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):L.reject(t)}static resolve(e){return new L((t,r)=>{t(e)})}static reject(e){return new L((t,r)=>{r(e)})}static waitFor(e){return new L((t,r)=>{let i=0,o=0,a=!1;e.forEach(u=>{++i,u.next(()=>{++o,a&&o===i&&t()},h=>r(h))}),a=!0,o===i&&t()})}static or(e){let t=L.resolve(!1);for(const r of e)t=t.next(i=>i?L.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,o)=>{r.push(t.call(this,i,o))}),this.waitFor(r)}static mapArray(e,t){return new L((r,i)=>{const o=e.length,a=new Array(o);let u=0;for(let h=0;h<o;h++){const d=h;t(e[d]).next(p=>{a[d]=p,++u,u===o&&r(a)},p=>i(p))}})}static doWhile(e,t){return new L((r,i)=>{const o=()=>{e()===!0?t().next(()=>{o()},i):r()};o()})}}function hg(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Qs(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}al.oe=-1;function Fo(n){return n==null}function Sa(n){return n===0&&1/n==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gu(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Bo(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function dg(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,t){this.comparator=e,this.root=t||at.EMPTY}insert(e,t){return new He(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,at.BLACK,null,null))}remove(e){return new He(this.comparator,this.root.remove(e,this.comparator).copy(null,null,at.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new lo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new lo(this.root,e,this.comparator,!1)}getReverseIterator(){return new lo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new lo(this.root,e,this.comparator,!0)}}class lo{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?r(e.key,t):1,t&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class at{constructor(e,t,r,i,o){this.key=e,this.value=t,this.color=r??at.RED,this.left=i??at.EMPTY,this.right=o??at.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,o){return new at(e??this.key,t??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,t,r),null):o===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return at.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ue();const e=this.left.check();if(e!==this.right.check())throw ue();return e+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw ue()}get value(){throw ue()}get color(){throw ue()}get left(){throw ue()}get right(){throw ue()}copy(e,t,r,i,o){return this}insert(e,t,r){return new at(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.comparator=e,this.data=new He(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new _u(this.data.getIterator())}getIteratorFrom(e){return new _u(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof lt)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new lt(this.comparator);return t.data=e,t}}class _u{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e){this.fields=e,e.sort(Rt.comparator)}static empty(){return new Rr([])}unionWith(e){let t=new lt(Rt.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Rr(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Wi(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new uh("Invalid base64 string: "+o):o}}(e);return new ut(t)}static fromUint8Array(e){const t=function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o}(e);return new ut(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ut.EMPTY_BYTE_STRING=new ut("");const fg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Or(n){if(Le(!!n),typeof n=="string"){let e=0;const t=fg.exec(n);if(Le(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:qe(n.seconds),nanos:qe(n.nanos)}}function qe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function li(n){return typeof n=="string"?ut.fromBase64String(n):ut.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ll(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function ul(n){const e=n.mapValue.fields.__previous_value__;return ll(e)?ul(e):e}function Fs(n){const e=Or(n.mapValue.fields.__local_write_time__.timestampValue);return new Vt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(e,t,r,i,o,a,u,h,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=h,this.useFetchStreams=d}}class Bs{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Bs("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Bs&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uo={mapValue:{}};function ui(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ll(n)?4:gg(n)?9007199254740991:mg(n)?10:11:ue()}function On(n,e){if(n===e)return!0;const t=ui(n);if(t!==ui(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Fs(n).isEqual(Fs(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=Or(i.timestampValue),u=Or(o.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,o){return li(i.bytesValue).isEqual(li(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,o){return qe(i.geoPointValue.latitude)===qe(o.geoPointValue.latitude)&&qe(i.geoPointValue.longitude)===qe(o.geoPointValue.longitude)}(n,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return qe(i.integerValue)===qe(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const a=qe(i.doubleValue),u=qe(o.doubleValue);return a===u?Sa(a)===Sa(u):isNaN(a)&&isNaN(u)}return!1}(n,e);case 9:return Wi(n.arrayValue.values||[],e.arrayValue.values||[],On);case 10:case 11:return function(i,o){const a=i.mapValue.fields||{},u=o.mapValue.fields||{};if(gu(a)!==gu(u))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(u[h]===void 0||!On(a[h],u[h])))return!1;return!0}(n,e);default:return ue()}}function js(n,e){return(n.values||[]).find(t=>On(t,e))!==void 0}function Qi(n,e){if(n===e)return 0;const t=ui(n),r=ui(e);if(t!==r)return Te(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Te(n.booleanValue,e.booleanValue);case 2:return function(o,a){const u=qe(o.integerValue||o.doubleValue),h=qe(a.integerValue||a.doubleValue);return u<h?-1:u>h?1:u===h?0:isNaN(u)?isNaN(h)?0:-1:1}(n,e);case 3:return yu(n.timestampValue,e.timestampValue);case 4:return yu(Fs(n),Fs(e));case 5:return Te(n.stringValue,e.stringValue);case 6:return function(o,a){const u=li(o),h=li(a);return u.compareTo(h)}(n.bytesValue,e.bytesValue);case 7:return function(o,a){const u=o.split("/"),h=a.split("/");for(let d=0;d<u.length&&d<h.length;d++){const p=Te(u[d],h[d]);if(p!==0)return p}return Te(u.length,h.length)}(n.referenceValue,e.referenceValue);case 8:return function(o,a){const u=Te(qe(o.latitude),qe(a.latitude));return u!==0?u:Te(qe(o.longitude),qe(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return vu(n.arrayValue,e.arrayValue);case 10:return function(o,a){var u,h,d,p;const I=o.fields||{},b=a.fields||{},k=(u=I.value)===null||u===void 0?void 0:u.arrayValue,O=(h=b.value)===null||h===void 0?void 0:h.arrayValue,C=Te(((d=k==null?void 0:k.values)===null||d===void 0?void 0:d.length)||0,((p=O==null?void 0:O.values)===null||p===void 0?void 0:p.length)||0);return C!==0?C:vu(k,O)}(n.mapValue,e.mapValue);case 11:return function(o,a){if(o===uo.mapValue&&a===uo.mapValue)return 0;if(o===uo.mapValue)return 1;if(a===uo.mapValue)return-1;const u=o.fields||{},h=Object.keys(u),d=a.fields||{},p=Object.keys(d);h.sort(),p.sort();for(let I=0;I<h.length&&I<p.length;++I){const b=Te(h[I],p[I]);if(b!==0)return b;const k=Qi(u[h[I]],d[p[I]]);if(k!==0)return k}return Te(h.length,p.length)}(n.mapValue,e.mapValue);default:throw ue()}}function yu(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Te(n,e);const t=Or(n),r=Or(e),i=Te(t.seconds,r.seconds);return i!==0?i:Te(t.nanos,r.nanos)}function vu(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const o=Qi(t[i],r[i]);if(o)return o}return Te(t.length,r.length)}function Yi(n){return Pa(n)}function Pa(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Or(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return li(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return ne.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const o of t.values||[])i?i=!1:r+=",",r+=Pa(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Pa(t.fields[a])}`;return i+"}"}(n.mapValue):ue()}function ka(n){return!!n&&"integerValue"in n}function cl(n){return!!n&&"arrayValue"in n}function Eu(n){return!!n&&"nullValue"in n}function Tu(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function pa(n){return!!n&&"mapValue"in n}function mg(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Ns(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Bo(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Ns(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ns(n.arrayValue.values[t]);return e}return Object.assign({},n)}function gg(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e){this.value=e}static empty(){return new kn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!pa(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ns(t)}setAll(e){let t=Rt.emptyPath(),r={},i=[];e.forEach((a,u)=>{if(!t.isImmediateParentOf(u)){const h=this.getFieldsMap(t);this.applyChanges(h,r,i),r={},i=[],t=u.popLast()}a?r[u.lastSegment()]=Ns(a):i.push(u.lastSegment())});const o=this.getFieldsMap(t);this.applyChanges(o,r,i)}delete(e){const t=this.field(e.popLast());pa(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return On(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];pa(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Bo(t,(i,o)=>e[i]=o);for(const i of r)delete e[i]}clone(){return new kn(Ns(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e,t,r,i,o,a,u){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=o,this.data=a,this.documentState=u}static newInvalidDocument(e){return new yt(e,0,ae.min(),ae.min(),ae.min(),kn.empty(),0)}static newFoundDocument(e,t,r,i){return new yt(e,1,t,ae.min(),r,i,0)}static newNoDocument(e,t){return new yt(e,2,t,ae.min(),ae.min(),kn.empty(),0)}static newUnknownDocument(e,t){return new yt(e,3,t,ae.min(),ae.min(),kn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ae.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=kn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=kn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof yt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new yt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e,t){this.position=e,this.inclusive=t}}function Iu(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const o=e[i],a=n.position[i];if(o.field.isKeyField()?r=ne.comparator(ne.fromName(a.referenceValue),t.key):r=Qi(a,t.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function wu(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!On(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e,t="asc"){this.field=e,this.dir=t}}function _g(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{}class $e extends ch{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new vg(e,t,r):t==="array-contains"?new Ig(e,r):t==="in"?new wg(e,r):t==="not-in"?new Ag(e,r):t==="array-contains-any"?new bg(e,r):new $e(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Eg(e,r):new Tg(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Qi(t,this.value)):t!==null&&ui(this.value)===ui(t)&&this.matchesComparison(Qi(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ue()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ln extends ch{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Ln(e,t)}matches(e){return hh(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function hh(n){return n.op==="and"}function dh(n){return yg(n)&&hh(n)}function yg(n){for(const e of n.filters)if(e instanceof Ln)return!1;return!0}function Na(n){if(n instanceof $e)return n.field.canonicalString()+n.op.toString()+Yi(n.value);if(dh(n))return n.filters.map(e=>Na(e)).join(",");{const e=n.filters.map(t=>Na(t)).join(",");return`${n.op}(${e})`}}function fh(n,e){return n instanceof $e?function(r,i){return i instanceof $e&&r.op===i.op&&r.field.isEqual(i.field)&&On(r.value,i.value)}(n,e):n instanceof Ln?function(r,i){return i instanceof Ln&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,a,u)=>o&&fh(a,i.filters[u]),!0):!1}(n,e):void ue()}function ph(n){return n instanceof $e?function(t){return`${t.field.canonicalString()} ${t.op} ${Yi(t.value)}`}(n):n instanceof Ln?function(t){return t.op.toString()+" {"+t.getFilters().map(ph).join(" ,")+"}"}(n):"Filter"}class vg extends $e{constructor(e,t,r){super(e,t,r),this.key=ne.fromName(r.referenceValue)}matches(e){const t=ne.comparator(e.key,this.key);return this.matchesComparison(t)}}class Eg extends $e{constructor(e,t){super(e,"in",t),this.keys=mh("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Tg extends $e{constructor(e,t){super(e,"not-in",t),this.keys=mh("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function mh(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>ne.fromName(r.referenceValue))}class Ig extends $e{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return cl(t)&&js(t.arrayValue,this.value)}}class wg extends $e{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&js(this.value.arrayValue,t)}}class Ag extends $e{constructor(e,t){super(e,"not-in",t)}matches(e){if(js(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!js(this.value.arrayValue,t)}}class bg extends $e{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!cl(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>js(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(e,t=null,r=[],i=[],o=null,a=null,u=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=a,this.endAt=u,this.ue=null}}function Au(n,e=null,t=[],r=[],i=null,o=null,a=null){return new Cg(n,e,t,r,i,o,a)}function hl(n){const e=me(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Na(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Fo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Yi(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Yi(r)).join(",")),e.ue=t}return e.ue}function dl(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!_g(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!fh(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!wu(n.startAt,e.startAt)&&wu(n.endAt,e.endAt)}function Da(n){return ne.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e,t=null,r=[],i=[],o=null,a="F",u=null,h=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=a,this.startAt=u,this.endAt=h,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Rg(n,e,t,r,i,o,a,u){return new jo(n,e,t,r,i,o,a,u)}function fl(n){return new jo(n)}function bu(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Sg(n){return n.collectionGroup!==null}function Ds(n){const e=me(n);if(e.ce===null){e.ce=[];const t=new Set;for(const o of e.explicitOrderBy)e.ce.push(o),t.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new lt(Rt.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(u=u.add(d.field))})}),u})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.ce.push(new Po(o,r))}),t.has(Rt.keyField().canonicalString())||e.ce.push(new Po(Rt.keyField(),r))}return e.ce}function Vn(n){const e=me(n);return e.le||(e.le=Pg(e,Ds(n))),e.le}function Pg(n,e){if(n.limitType==="F")return Au(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new Po(i.field,o)});const t=n.endAt?new So(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new So(n.startAt.position,n.startAt.inclusive):null;return Au(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Va(n,e,t){return new jo(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function qo(n,e){return dl(Vn(n),Vn(e))&&n.limitType===e.limitType}function gh(n){return`${hl(Vn(n))}|lt:${n.limitType}`}function Li(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>ph(i)).join(", ")}]`),Fo(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>Yi(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>Yi(i)).join(",")),`Target(${r})`}(Vn(n))}; limitType=${n.limitType})`}function Ho(n,e){return e.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):ne.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,e)&&function(r,i){for(const o of Ds(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(a,u,h){const d=Iu(a,u,h);return a.inclusive?d<=0:d<0}(r.startAt,Ds(r),i)||r.endAt&&!function(a,u,h){const d=Iu(a,u,h);return a.inclusive?d>=0:d>0}(r.endAt,Ds(r),i))}(n,e)}function kg(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function _h(n){return(e,t)=>{let r=!1;for(const i of Ds(n)){const o=Ng(i,e,t);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function Ng(n,e,t){const r=n.field.isKeyField()?ne.comparator(e.key,t.key):function(o,a,u){const h=a.data.field(o),d=u.data.field(o);return h!==null&&d!==null?Qi(h,d):ue()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return ue()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Bo(this.inner,(t,r)=>{for(const[i,o]of r)e(i,o)})}isEmpty(){return dg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dg=new He(ne.comparator);function Lr(){return Dg}const yh=new He(ne.comparator);function Ss(...n){let e=yh;for(const t of n)e=e.insert(t.key,t);return e}function Vg(n){let e=yh;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function ti(){return Vs()}function vh(){return Vs()}function Vs(){return new ns(n=>n.toString(),(n,e)=>n.isEqual(e))}const Og=new lt(ne.comparator);function ye(...n){let e=Og;for(const t of n)e=e.add(t);return e}const Lg=new lt(Te);function Mg(){return Lg}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xg(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Sa(e)?"-0":e}}function Ug(n){return{integerValue:""+n}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(){this._=void 0}}function Fg(n,e,t){return n instanceof Oa?function(i,o){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&ll(o)&&(o=ul(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(t,e):n instanceof ko?Eh(n,e):n instanceof No?Th(n,e):function(i,o){const a=jg(i,o),u=Cu(a)+Cu(i.Pe);return ka(a)&&ka(i.Pe)?Ug(u):xg(i.serializer,u)}(n,e)}function Bg(n,e,t){return n instanceof ko?Eh(n,e):n instanceof No?Th(n,e):t}function jg(n,e){return n instanceof La?function(r){return ka(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class Oa extends zo{}class ko extends zo{constructor(e){super(),this.elements=e}}function Eh(n,e){const t=Ih(e);for(const r of n.elements)t.some(i=>On(i,r))||t.push(r);return{arrayValue:{values:t}}}class No extends zo{constructor(e){super(),this.elements=e}}function Th(n,e){let t=Ih(e);for(const r of n.elements)t=t.filter(i=>!On(i,r));return{arrayValue:{values:t}}}class La extends zo{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Cu(n){return qe(n.integerValue||n.doubleValue)}function Ih(n){return cl(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function qg(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof ko&&i instanceof ko||r instanceof No&&i instanceof No?Wi(r.elements,i.elements,On):r instanceof La&&i instanceof La?On(r.Pe,i.Pe):r instanceof Oa&&i instanceof Oa}(n.transform,e.transform)}class ii{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ii}static exists(e){return new ii(void 0,e)}static updateTime(e){return new ii(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function _o(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class pl{}function wh(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new zg(n.key,ii.none()):new ml(n.key,n.data,ii.none());{const t=n.data,r=kn.empty();let i=new lt(Rt.comparator);for(let o of e.fields)if(!i.has(o)){let a=t.field(o);a===null&&o.length>1&&(o=o.popLast(),a=t.field(o)),a===null?r.delete(o):r.set(o,a),i=i.add(o)}return new Ko(n.key,r,new Rr(i.toArray()),ii.none())}}function Hg(n,e,t){n instanceof ml?function(i,o,a){const u=i.value.clone(),h=Su(i.fieldTransforms,o,a.transformResults);u.setAll(h),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):n instanceof Ko?function(i,o,a){if(!_o(i.precondition,o))return void o.convertToUnknownDocument(a.version);const u=Su(i.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(Ah(i)),h.setAll(u),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,e,t):function(i,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Os(n,e,t,r){return n instanceof ml?function(o,a,u,h){if(!_o(o.precondition,a))return u;const d=o.value.clone(),p=Pu(o.fieldTransforms,h,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof Ko?function(o,a,u,h){if(!_o(o.precondition,a))return u;const d=Pu(o.fieldTransforms,h,a),p=a.data;return p.setAll(Ah(o)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(I=>I.field))}(n,e,t,r):function(o,a,u){return _o(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(n,e,t)}function Ru(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Wi(r,i,(o,a)=>qg(o,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class ml extends pl{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ko extends pl{constructor(e,t,r,i,o=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Ah(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Su(n,e,t){const r=new Map;Le(n.length===t.length);for(let i=0;i<t.length;i++){const o=n[i],a=o.transform,u=e.data.field(o.field);r.set(o.field,Bg(a,u,t[i]))}return r}function Pu(n,e,t){const r=new Map;for(const i of n){const o=i.transform,a=t.data.field(i.field);r.set(i.field,Fg(o,a,e))}return r}class zg extends pl{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&Hg(o,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Os(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Os(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=vh();return this.mutations.forEach(i=>{const o=e.get(i.key),a=o.overlayedDocument;let u=this.applyToLocalView(a,o.mutatedFields);u=t.has(i.key)?null:u;const h=wh(a,u);h!==null&&r.set(i.key,h),a.isValidDocument()||a.convertToNoDocument(ae.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ye())}isEqual(e){return this.batchId===e.batchId&&Wi(this.mutations,e.mutations,(t,r)=>Ru(t,r))&&Wi(this.baseMutations,e.baseMutations,(t,r)=>Ru(t,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var We,fe;function bh(n){if(n===void 0)return sr("GRPC error has no .code"),j.UNKNOWN;switch(n){case We.OK:return j.OK;case We.CANCELLED:return j.CANCELLED;case We.UNKNOWN:return j.UNKNOWN;case We.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case We.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case We.INTERNAL:return j.INTERNAL;case We.UNAVAILABLE:return j.UNAVAILABLE;case We.UNAUTHENTICATED:return j.UNAUTHENTICATED;case We.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case We.NOT_FOUND:return j.NOT_FOUND;case We.ALREADY_EXISTS:return j.ALREADY_EXISTS;case We.PERMISSION_DENIED:return j.PERMISSION_DENIED;case We.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case We.ABORTED:return j.ABORTED;case We.OUT_OF_RANGE:return j.OUT_OF_RANGE;case We.UNIMPLEMENTED:return j.UNIMPLEMENTED;case We.DATA_LOSS:return j.DATA_LOSS;default:return ue()}}(fe=We||(We={}))[fe.OK=0]="OK",fe[fe.CANCELLED=1]="CANCELLED",fe[fe.UNKNOWN=2]="UNKNOWN",fe[fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",fe[fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",fe[fe.NOT_FOUND=5]="NOT_FOUND",fe[fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",fe[fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",fe[fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",fe[fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",fe[fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",fe[fe.ABORTED=10]="ABORTED",fe[fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",fe[fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",fe[fe.INTERNAL=13]="INTERNAL",fe[fe.UNAVAILABLE=14]="UNAVAILABLE",fe[fe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qg(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yg=new ni([4294967295,4294967295],0);function ku(n){const e=Qg().encode(n),t=new th;return t.update(e),new Uint8Array(t.digest())}function Nu(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new ni([t,r],0),new ni([i,o],0)]}class gl{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Ps(`Invalid padding: ${t}`);if(r<0)throw new Ps(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ps(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Ps(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=ni.fromNumber(this.Ie)}Ee(e,t,r){let i=e.add(t.multiply(ni.fromNumber(r)));return i.compare(Yg)===1&&(i=new ni([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=ku(e),[r,i]=Nu(t);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,i,o);if(!this.de(a))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),a=new gl(o,i,t);return r.forEach(u=>a.insert(u)),a}insert(e){if(this.Ie===0)return;const t=ku(e),[r,i]=Nu(t);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,i,o);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Ps extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e,t,r,i,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,Ys.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Go(ae.min(),i,new He(Te),Lr(),ye())}}class Ys{constructor(e,t,r,i,o){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Ys(r,t,ye(),ye(),ye())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e,t,r,i){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=i}}class Ch{constructor(e,t){this.targetId=e,this.me=t}}class Rh{constructor(e,t,r=ut.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Du{constructor(){this.fe=0,this.ge=Ou(),this.pe=ut.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ye(),t=ye(),r=ye();return this.ge.forEach((i,o)=>{switch(o){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:ue()}}),new Ys(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=Ou()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Le(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Jg{constructor(e){this.Le=e,this.Be=new Map,this.ke=Lr(),this.qe=Vu(),this.Qe=new He(Te)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:ue()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,i)=>{this.ze(i)&&t(i)})}He(e){const t=e.targetId,r=e.me.count,i=this.Je(t);if(i){const o=i.target;if(Da(o))if(r===0){const a=new ne(o.path);this.Ue(t,a,yt.newNoDocument(a,ae.min()))}else Le(r===1);else{const a=this.Ye(t);if(a!==r){const u=this.Ze(e),h=u?this.Xe(u,e,a):1;if(h!==0){this.je(t);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,d)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=t;let a,u;try{a=li(r).toUint8Array()}catch(h){if(h instanceof uh)return Gi("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{u=new gl(a,i,o)}catch(h){return Gi(h instanceof Ps?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return u.Ie===0?null:u}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let i=0;return r.forEach(o=>{const a=this.Le.tt(),u=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;e.mightContain(u)||(this.Ue(t,o,null),i++)}),i}rt(e){const t=new Map;this.Be.forEach((o,a)=>{const u=this.Je(a);if(u){if(o.current&&Da(u.target)){const h=new ne(u.target.path);this.ke.get(h)!==null||this.it(a,h)||this.Ue(a,h,yt.newNoDocument(h,e))}o.be&&(t.set(a,o.ve()),o.Ce())}});let r=ye();this.qe.forEach((o,a)=>{let u=!0;a.forEachWhile(h=>{const d=this.Je(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(r=r.add(o))}),this.ke.forEach((o,a)=>a.setReadTime(e));const i=new Go(e,t,this.Qe,this.ke,r);return this.ke=Lr(),this.qe=Vu(),this.Qe=new He(Te),i}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Du,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new lt(Te),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||G("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Du),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Vu(){return new He(ne.comparator)}function Ou(){return new He(ne.comparator)}const $g={asc:"ASCENDING",desc:"DESCENDING"},Xg={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Zg={and:"AND",or:"OR"};class e_{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ma(n,e){return n.useProto3Json||Fo(e)?e:{value:e}}function t_(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function n_(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function qi(n){return Le(!!n),ae.fromTimestamp(function(t){const r=Or(t);return new Vt(r.seconds,r.nanos)}(n))}function r_(n,e){return xa(n,e).canonicalString()}function xa(n,e){const t=function(i){return new Oe(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Sh(n){const e=Oe.fromString(n);return Le(Vh(e)),e}function ma(n,e){const t=Sh(e);if(t.get(1)!==n.databaseId.projectId)throw new te(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new te(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ne(kh(t))}function Ph(n,e){return r_(n.databaseId,e)}function i_(n){const e=Sh(n);return e.length===4?Oe.emptyPath():kh(e)}function Lu(n){return new Oe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function kh(n){return Le(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function s_(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:ue()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(d,p){return d.useProto3Json?(Le(p===void 0||typeof p=="string"),ut.fromBase64String(p||"")):(Le(p===void 0||p instanceof Buffer||p instanceof Uint8Array),ut.fromUint8Array(p||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,u=a&&function(d){const p=d.code===void 0?j.UNKNOWN:bh(d.code);return new te(p,d.message||"")}(a);t=new Rh(r,i,o,u||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ma(n,r.document.name),o=qi(r.document.updateTime),a=r.document.createTime?qi(r.document.createTime):ae.min(),u=new kn({mapValue:{fields:r.document.fields}}),h=yt.newFoundDocument(i,o,a,u),d=r.targetIds||[],p=r.removedTargetIds||[];t=new yo(d,p,h.key,h)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ma(n,r.document),o=r.readTime?qi(r.readTime):ae.min(),a=yt.newNoDocument(i,o),u=r.removedTargetIds||[];t=new yo([],u,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ma(n,r.document),o=r.removedTargetIds||[];t=new yo([],o,i,null)}else{if(!("filter"in e))return ue();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,a=new Wg(i,o),u=r.targetId;t=new Ch(u,a)}}return t}function o_(n,e){return{documents:[Ph(n,e.path)]}}function a_(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Ph(n,i);const o=function(d){if(d.length!==0)return Dh(Ln.create(d,"and"))}(e.filters);o&&(t.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(p=>function(b){return{field:Mi(b.field),direction:c_(b.dir)}}(p))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const u=Ma(n,e.limit);return u!==null&&(t.structuredQuery.limit=u),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:t,parent:i}}function l_(n){let e=i_(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){Le(r===1);const p=t.from[0];p.allDescendants?i=p.collectionId:e=e.child(p.collectionId)}let o=[];t.where&&(o=function(I){const b=Nh(I);return b instanceof Ln&&dh(b)?b.getFilters():[b]}(t.where));let a=[];t.orderBy&&(a=function(I){return I.map(b=>function(O){return new Po(xi(O.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(O.direction))}(b))}(t.orderBy));let u=null;t.limit&&(u=function(I){let b;return b=typeof I=="object"?I.value:I,Fo(b)?null:b}(t.limit));let h=null;t.startAt&&(h=function(I){const b=!!I.before,k=I.values||[];return new So(k,b)}(t.startAt));let d=null;return t.endAt&&(d=function(I){const b=!I.before,k=I.values||[];return new So(k,b)}(t.endAt)),Rg(e,i,a,o,u,"F",h,d)}function u_(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ue()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Nh(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=xi(t.unaryFilter.field);return $e.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=xi(t.unaryFilter.field);return $e.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=xi(t.unaryFilter.field);return $e.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=xi(t.unaryFilter.field);return $e.create(a,"!=",{nullValue:"NULL_VALUE"});default:return ue()}}(n):n.fieldFilter!==void 0?function(t){return $e.create(xi(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ue()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Ln.create(t.compositeFilter.filters.map(r=>Nh(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ue()}}(t.compositeFilter.op))}(n):ue()}function c_(n){return $g[n]}function h_(n){return Xg[n]}function d_(n){return Zg[n]}function Mi(n){return{fieldPath:n.canonicalString()}}function xi(n){return Rt.fromServerFormat(n.fieldPath)}function Dh(n){return n instanceof $e?function(t){if(t.op==="=="){if(Tu(t.value))return{unaryFilter:{field:Mi(t.field),op:"IS_NAN"}};if(Eu(t.value))return{unaryFilter:{field:Mi(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Tu(t.value))return{unaryFilter:{field:Mi(t.field),op:"IS_NOT_NAN"}};if(Eu(t.value))return{unaryFilter:{field:Mi(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Mi(t.field),op:h_(t.op),value:t.value}}}(n):n instanceof Ln?function(t){const r=t.getFilters().map(i=>Dh(i));return r.length===1?r[0]:{compositeFilter:{op:d_(t.op),filters:r}}}(n):ue()}function Vh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e,t,r,i,o=ae.min(),a=ae.min(),u=ut.EMPTY_BYTE_STRING,h=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=h}withSequenceNumber(e){return new Sr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Sr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Sr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Sr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(e){this.ct=e}}function p_(n){const e=l_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Va(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(){this.un=new g_}addToCollectionParentIndex(e,t){return this.un.add(t),L.resolve()}getCollectionParents(e,t){return L.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return L.resolve()}deleteFieldIndex(e,t){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,t){return L.resolve()}getDocumentsMatchingTarget(e,t){return L.resolve(null)}getIndexType(e,t){return L.resolve(0)}getFieldIndexes(e,t){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,t){return L.resolve(Vr.min())}getMinOffsetFromCollectionGroup(e,t){return L.resolve(Vr.min())}updateCollectionGroup(e,t,r){return L.resolve()}updateIndexEntries(e,t){return L.resolve()}}class g_{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new lt(Oe.comparator),o=!i.has(r);return this.index[t]=i.add(r),o}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new lt(Oe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Ji(0)}static kn(){return new Ji(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{constructor(){this.changes=new ns(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,yt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?L.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&Os(r.mutation,i,Rr.empty(),Vt.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,ye()).next(()=>r))}getLocalViewOfDocuments(e,t,r=ye()){const i=ti();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(o=>{let a=Ss();return o.forEach((u,h)=>{a=a.insert(u,h.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=ti();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,ye()))}populateOverlays(e,t,r){const i=[];return r.forEach(o=>{t.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((a,u)=>{t.set(a,u)})})}computeViews(e,t,r,i){let o=Lr();const a=Vs(),u=function(){return Vs()}();return t.forEach((h,d)=>{const p=r.get(d.key);i.has(d.key)&&(p===void 0||p.mutation instanceof Ko)?o=o.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),Os(p.mutation,d,p.mutation.getFieldMask(),Vt.now())):a.set(d.key,Rr.empty())}),this.recalculateAndSaveOverlays(e,o).next(h=>(h.forEach((d,p)=>a.set(d,p)),t.forEach((d,p)=>{var I;return u.set(d,new y_(p,(I=a.get(d))!==null&&I!==void 0?I:null))}),u))}recalculateAndSaveOverlays(e,t){const r=Vs();let i=new He((a,u)=>a-u),o=ye();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const u of a)u.keys().forEach(h=>{const d=t.get(h);if(d===null)return;let p=r.get(h)||Rr.empty();p=u.applyToLocalView(d,p),r.set(h,p);const I=(i.get(u.batchId)||ye()).add(h);i=i.insert(u.batchId,I)})}).next(()=>{const a=[],u=i.getReverseIterator();for(;u.hasNext();){const h=u.getNext(),d=h.key,p=h.value,I=vh();p.forEach(b=>{if(!o.has(b)){const k=wh(t.get(b),r.get(b));k!==null&&I.set(b,k),o=o.add(b)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,I))}return L.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(a){return ne.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Sg(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(o=>{const a=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-o.size):L.resolve(ti());let u=-1,h=o;return a.next(d=>L.forEach(d,(p,I)=>(u<I.largestBatchId&&(u=I.largestBatchId),o.get(p)?L.resolve():this.remoteDocumentCache.getEntry(e,p).next(b=>{h=h.insert(p,b)}))).next(()=>this.populateOverlays(e,d,o)).next(()=>this.computeViews(e,h,d,ye())).next(p=>({batchId:u,changes:Vg(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ne(t)).next(r=>{let i=Ss();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const o=t.collectionGroup;let a=Ss();return this.indexManager.getCollectionParents(e,o).next(u=>L.forEach(u,h=>{const d=function(I,b){return new jo(b,null,I.explicitOrderBy.slice(),I.filters.slice(),I.limit,I.limitType,I.startAt,I.endAt)}(t,h.child(o));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(p=>{p.forEach((I,b)=>{a=a.insert(I,b)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,o,i))).next(a=>{o.forEach((h,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,yt.newInvalidDocument(p)))});let u=Ss();return a.forEach((h,d)=>{const p=o.get(h);p!==void 0&&Os(p.mutation,d,Rr.empty(),Vt.now()),Ho(t,d)&&(u=u.insert(h,d))}),u})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return L.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:qi(i.createTime)}}(t)),L.resolve()}getNamedQuery(e,t){return L.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(i){return{name:i.name,query:p_(i.bundledQuery),readTime:qi(i.readTime)}}(t)),L.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(){this.overlays=new He(ne.comparator),this.Ir=new Map}getOverlay(e,t){return L.resolve(this.overlays.get(t))}getOverlays(e,t){const r=ti();return L.forEach(t,i=>this.getOverlay(e,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,o)=>{this.ht(e,t,o)}),L.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(r)),L.resolve()}getOverlaysForCollection(e,t,r){const i=ti(),o=t.length+1,a=new ne(t.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const h=u.getNext().value,d=h.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&i.set(h.getKey(),h)}return L.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let o=new He((d,p)=>d-p);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let p=o.get(d.largestBatchId);p===null&&(p=ti(),o=o.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const u=ti(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,p)=>u.set(d,p)),!(u.size()>=i)););return L.resolve(u)}ht(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Gg(t,r));let o=this.Ir.get(t);o===void 0&&(o=ye(),this.Ir.set(t,o)),this.Ir.set(t,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(){this.sessionToken=ut.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,L.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(){this.Tr=new lt(tt.Er),this.dr=new lt(tt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new tt(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new tt(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new ne(new Oe([])),r=new tt(t,e),i=new tt(t,e+1),o=[];return this.dr.forEachInRange([r,i],a=>{this.Vr(a),o.push(a.key)}),o}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new ne(new Oe([])),r=new tt(t,e),i=new tt(t,e+1);let o=ye();return this.dr.forEachInRange([r,i],a=>{o=o.add(a.key)}),o}containsKey(e){const t=new tt(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class tt{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return ne.comparator(e.key,t.key)||Te(e.wr,t.wr)}static Ar(e,t){return Te(e.wr,t.wr)||ne.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new lt(tt.Er)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Kg(o,t,r,i);this.mutationQueue.push(a);for(const u of i)this.br=this.br.add(new tt(u.key,o)),this.indexManager.addToCollectionParentIndex(e,u.key.path.popLast());return L.resolve(a)}lookupMutationBatch(e,t){return L.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.vr(r),o=i<0?0:i;return L.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new tt(t,0),i=new tt(t,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([r,i],a=>{const u=this.Dr(a.wr);o.push(u)}),L.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new lt(Te);return t.forEach(i=>{const o=new tt(i,0),a=new tt(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,a],u=>{r=r.add(u.wr)})}),L.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let o=r;ne.isDocumentKey(o)||(o=o.child(""));const a=new tt(new ne(o),0);let u=new lt(Te);return this.br.forEachWhile(h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(u=u.add(h.wr)),!0)},a),L.resolve(this.Cr(u))}Cr(e){const t=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){Le(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return L.forEach(t.mutations,i=>{const o=new tt(i.key,t.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new tt(t,0),i=this.br.firstAfterOrEqual(r);return L.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(e){this.Mr=e,this.docs=function(){return new He(ne.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),o=i?i.size:0,a=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return L.resolve(r?r.document.mutableCopy():yt.newInvalidDocument(t))}getEntries(e,t){let r=Lr();return t.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():yt.newInvalidDocument(i))}),L.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let o=Lr();const a=t.path,u=new ne(a.child("")),h=this.docs.getIteratorFrom(u);for(;h.hasNext();){const{key:d,value:{document:p}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||lg(ag(p),r)<=0||(i.has(p.key)||Ho(t,p))&&(o=o.insert(p.key,p.mutableCopy()))}return L.resolve(o)}getAllFromCollectionGroup(e,t,r,i){ue()}Or(e,t){return L.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new b_(this)}getSize(e){return L.resolve(this.size)}}class b_ extends __{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),L.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(e){this.persistence=e,this.Nr=new ns(t=>hl(t),dl),this.lastRemoteSnapshotVersion=ae.min(),this.highestTargetId=0,this.Lr=0,this.Br=new _l,this.targetCount=0,this.kr=Ji.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,i)=>t(i)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),L.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new Ji(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,L.resolve()}updateTargetData(e,t){return this.Kn(t),L.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,t,r){let i=0;const o=[];return this.Nr.forEach((a,u)=>{u.sequenceNumber<=t&&r.get(u.targetId)===null&&(this.Nr.delete(a),o.push(this.removeMatchingKeysForTargetId(e,u.targetId)),i++)}),L.waitFor(o).next(()=>i)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return L.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),L.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const i=this.persistence.referenceDelegate,o=[];return i&&t.forEach(a=>{o.push(i.markPotentiallyOrphaned(e,a))}),L.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),L.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return L.resolve(r)}containsKey(e,t){return L.resolve(this.Br.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(e,t){this.qr={},this.overlays={},this.Qr=new al(0),this.Kr=!1,this.Kr=!0,this.$r=new I_,this.referenceDelegate=e(this),this.Ur=new C_(this),this.indexManager=new m_,this.remoteDocumentCache=function(i){return new A_(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new f_(t),this.Gr=new E_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new T_,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new w_(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){G("MemoryPersistence","Starting transaction:",e);const i=new S_(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(o=>this.referenceDelegate.jr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Hr(e,t){return L.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class S_ extends cg{constructor(e){super(),this.currentSequenceNumber=e}}class yl{constructor(e){this.persistence=e,this.Jr=new _l,this.Yr=null}static Zr(e){return new yl(e)}get Xr(){if(this.Yr)return this.Yr;throw ue()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),L.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),L.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(o=>this.Xr.add(o.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.Xr,r=>{const i=ne.fromPath(r);return this.ei(e,i).next(o=>{o||t.removeEntry(i,ae.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return L.or([()=>L.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=i}static Wi(e,t){let r=ye(),i=ye();for(const o of t.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new vl(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Ed()?8:hg(vt())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,i){const o={result:null};return this.Yi(e,t).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.Zi(e,t,i,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new P_;return this.Xi(e,t,a).next(u=>{if(o.result=u,this.zi)return this.es(e,t,a,u.size)})}).next(()=>o.result)}es(e,t,r,i){return r.documentReadCount<this.ji?(ws()<=he.DEBUG&&G("QueryEngine","SDK will not create cache indexes for query:",Li(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),L.resolve()):(ws()<=he.DEBUG&&G("QueryEngine","Query:",Li(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(ws()<=he.DEBUG&&G("QueryEngine","The SDK decides to create cache indexes for query:",Li(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Vn(t))):L.resolve())}Yi(e,t){if(bu(t))return L.resolve(null);let r=Vn(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Va(t,null,"F"),r=Vn(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const a=ye(...o);return this.Ji.getDocuments(e,a).next(u=>this.indexManager.getMinOffset(e,r).next(h=>{const d=this.ts(t,u);return this.ns(t,d,a,h.readTime)?this.Yi(e,Va(t,null,"F")):this.rs(e,d,t,h)}))})))}Zi(e,t,r,i){return bu(t)||i.isEqual(ae.min())?L.resolve(null):this.Ji.getDocuments(e,r).next(o=>{const a=this.ts(t,o);return this.ns(t,a,r,i)?L.resolve(null):(ws()<=he.DEBUG&&G("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Li(t)),this.rs(e,a,t,og(i,-1)).next(u=>u))})}ts(e,t){let r=new lt(_h(e));return t.forEach((i,o)=>{Ho(e,o)&&(r=r.add(o))}),r}ns(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Xi(e,t,r){return ws()<=he.DEBUG&&G("QueryEngine","Using full collection scan to execute query:",Li(t)),this.Ji.getDocumentsMatchingQuery(e,t,Vr.min(),r)}rs(e,t,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(o=>(t.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(e,t,r,i){this.persistence=e,this.ss=t,this.serializer=i,this.os=new He(Te),this._s=new ns(o=>hl(o),dl),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new v_(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function D_(n,e,t,r){return new N_(n,e,t,r)}async function Oh(n,e){const t=me(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],u=[];let h=ye();for(const d of i){a.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}for(const d of o){u.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}return t.localDocuments.getDocuments(r,h).next(d=>({hs:d,removedBatchIds:a,addedBatchIds:u}))})})}function Lh(n){const e=me(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function V_(n,e){const t=me(n),r=e.snapshotVersion;let i=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=t.cs.newChangeBuffer({trackRemovals:!0});i=t.os;const u=[];e.targetChanges.forEach((p,I)=>{const b=i.get(I);if(!b)return;u.push(t.Ur.removeMatchingKeys(o,p.removedDocuments,I).next(()=>t.Ur.addMatchingKeys(o,p.addedDocuments,I)));let k=b.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(I)!==null?k=k.withResumeToken(ut.EMPTY_BYTE_STRING,ae.min()).withLastLimboFreeSnapshotVersion(ae.min()):p.resumeToken.approximateByteSize()>0&&(k=k.withResumeToken(p.resumeToken,r)),i=i.insert(I,k),function(C,N,$){return C.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=3e8?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0}(b,k,p)&&u.push(t.Ur.updateTargetData(o,k))});let h=Lr(),d=ye();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&u.push(t.persistence.referenceDelegate.updateLimboDocument(o,p))}),u.push(O_(o,a,e.documentUpdates).next(p=>{h=p.Ps,d=p.Is})),!r.isEqual(ae.min())){const p=t.Ur.getLastRemoteSnapshotVersion(o).next(I=>t.Ur.setTargetsMetadata(o,o.currentSequenceNumber,r));u.push(p)}return L.waitFor(u).next(()=>a.apply(o)).next(()=>t.localDocuments.getLocalViewOfDocuments(o,h,d)).next(()=>h)}).then(o=>(t.os=i,o))}function O_(n,e,t){let r=ye(),i=ye();return t.forEach(o=>r=r.add(o)),e.getEntries(n,r).next(o=>{let a=Lr();return t.forEach((u,h)=>{const d=o.get(u);h.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(u)),h.isNoDocument()&&h.version.isEqual(ae.min())?(e.removeEntry(u,h.readTime),a=a.insert(u,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(h),a=a.insert(u,h)):G("LocalStore","Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",h.version)}),{Ps:a,Is:i}})}function L_(n,e){const t=me(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Ur.getTargetData(r,e).next(o=>o?(i=o,L.resolve(i)):t.Ur.allocateTargetId(r).next(a=>(i=new Sr(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function Ua(n,e,t){const r=me(n),i=r.os.get(e),o=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!Qs(a))throw a;G("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Mu(n,e,t){const r=me(n);let i=ae.min(),o=ye();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,d,p){const I=me(h),b=I._s.get(p);return b!==void 0?L.resolve(I.os.get(b)):I.Ur.getTargetData(d,p)}(r,a,Vn(e)).next(u=>{if(u)return i=u.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,u.targetId).next(h=>{o=h})}).next(()=>r.ss.getDocumentsMatchingQuery(a,e,t?i:ae.min(),t?o:ye())).next(u=>(M_(r,kg(e),u),{documents:u,Ts:o})))}function M_(n,e,t){let r=n.us.get(e)||ae.min();t.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.us.set(e,r)}class xu{constructor(){this.activeTargetIds=Mg()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class x_{constructor(){this.so=new xu,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new xu,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){G("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){G("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let co=null;function ga(){return co===null?co=function(){return 268435456+Math.round(2147483648*Math.random())}():co++,"0x"+co.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt="WebChannelConnection";class j_ extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${i}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Fo(){return!1}Mo(t,r,i,o,a){const u=ga(),h=this.xo(t,r.toUriEncodedString());G("RestConnection",`Sending RPC '${t}' ${u}:`,h,i);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,o,a),this.No(t,h,d,i).then(p=>(G("RestConnection",`Received RPC '${t}' ${u}: `,p),p),p=>{throw Gi("RestConnection",`RPC '${t}' ${u} failed with error: `,p,"url: ",h,"request:",i),p})}Lo(t,r,i,o,a,u){return this.Mo(t,r,i,o,a)}Oo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ts}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,a)=>t[a]=o),i&&i.headers.forEach((o,a)=>t[a]=o)}xo(t,r){const i=F_[t];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,i){const o=ga();return new Promise((a,u)=>{const h=new nh;h.setWithCredentials(!0),h.listenOnce(rh.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case go.NO_ERROR:const p=h.getResponseJson();G(mt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),a(p);break;case go.TIMEOUT:G(mt,`RPC '${e}' ${o} timed out`),u(new te(j.DEADLINE_EXCEEDED,"Request time out"));break;case go.HTTP_ERROR:const I=h.getStatus();if(G(mt,`RPC '${e}' ${o} failed with status:`,I,"response text:",h.getResponseText()),I>0){let b=h.getResponseJson();Array.isArray(b)&&(b=b[0]);const k=b==null?void 0:b.error;if(k&&k.status&&k.message){const O=function(N){const $=N.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf($)>=0?$:j.UNKNOWN}(k.status);u(new te(O,k.message))}else u(new te(j.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new te(j.UNAVAILABLE,"Connection failed."));break;default:ue()}}finally{G(mt,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(i);G(mt,`RPC '${e}' ${o} sending request:`,i),h.send(t,"POST",d,r,15)})}Bo(e,t,r){const i=ga(),o=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=oh(),u=sh(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Oo(h.initMessageHeaders,t,r),h.encodeInitMessageHeaders=!0;const p=o.join("");G(mt,`Creating RPC '${e}' stream ${i}: ${p}`,h);const I=a.createWebChannel(p,h);let b=!1,k=!1;const O=new B_({Io:N=>{k?G(mt,`Not sending because RPC '${e}' stream ${i} is closed:`,N):(b||(G(mt,`Opening RPC '${e}' stream ${i} transport.`),I.open(),b=!0),G(mt,`RPC '${e}' stream ${i} sending:`,N),I.send(N))},To:()=>I.close()}),C=(N,$,Q)=>{N.listen($,z=>{try{Q(z)}catch(q){setTimeout(()=>{throw q},0)}})};return C(I,Rs.EventType.OPEN,()=>{k||(G(mt,`RPC '${e}' stream ${i} transport opened.`),O.yo())}),C(I,Rs.EventType.CLOSE,()=>{k||(k=!0,G(mt,`RPC '${e}' stream ${i} transport closed`),O.So())}),C(I,Rs.EventType.ERROR,N=>{k||(k=!0,Gi(mt,`RPC '${e}' stream ${i} transport errored:`,N),O.So(new te(j.UNAVAILABLE,"The operation could not be completed")))}),C(I,Rs.EventType.MESSAGE,N=>{var $;if(!k){const Q=N.data[0];Le(!!Q);const z=Q,q=z.error||(($=z[0])===null||$===void 0?void 0:$.error);if(q){G(mt,`RPC '${e}' stream ${i} received error:`,q);const F=q.status;let B=function(_){const v=We[_];if(v!==void 0)return bh(v)}(F),E=q.message;B===void 0&&(B=j.INTERNAL,E="Unknown error status: "+F+" with message "+q.message),k=!0,O.So(new te(B,E)),I.close()}else G(mt,`RPC '${e}' stream ${i} received:`,Q),O.bo(Q)}}),C(u,ih.STAT_EVENT,N=>{N.stat===Ra.PROXY?G(mt,`RPC '${e}' stream ${i} detected buffering proxy`):N.stat===Ra.NOPROXY&&G(mt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{O.wo()},0),O}}function _a(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mh(n){return new e_(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(e,t,r=1e3,i=1.5,o=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=i,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,t-r);i>0&&G("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{constructor(e,t,r,i,o,a,u,h){this.ui=e,this.Ho=r,this.Jo=i,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=h,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new xh(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===j.RESOURCE_EXHAUSTED?(sr(t.toString()),sr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===t&&this.P_(r,i)},r=>{e(()=>{const i=new te(j.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return G("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(G("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class H_ extends q_{constructor(e,t,r,i,o,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,a),this.serializer=o}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=s_(this.serializer,e),r=function(o){if(!("targetChange"in o))return ae.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?ae.min():a.readTime?qi(a.readTime):ae.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=Lu(this.serializer),t.addTarget=function(o,a){let u;const h=a.target;if(u=Da(h)?{documents:o_(o,h)}:{query:a_(o,h)._t},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=n_(o,a.resumeToken);const d=Ma(o,a.expectedCount);d!==null&&(u.expectedCount=d)}else if(a.snapshotVersion.compareTo(ae.min())>0){u.readTime=t_(o,a.snapshotVersion.toTimestamp());const d=Ma(o,a.expectedCount);d!==null&&(u.expectedCount=d)}return u}(this.serializer,e);const r=u_(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=Lu(this.serializer),t.removeTarget=e,this.a_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_ extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new te(j.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Mo(e,xa(t,r),i,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new te(j.UNKNOWN,o.toString())})}Lo(e,t,r,i,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Lo(e,xa(t,r),i,a,u,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new te(j.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class K_{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(sr(t),this.D_=!1):G("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(e,t,r,i,o){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(a=>{r.enqueueAndForget(async()=>{$s(this)&&(G("RemoteStore","Restarting streams for network reachability change."),await async function(h){const d=me(h);d.L_.add(4),await Js(d),d.q_.set("Unknown"),d.L_.delete(4),await Wo(d)}(this))})}),this.q_=new K_(r,i)}}async function Wo(n){if($s(n))for(const e of n.B_)await e(!0)}async function Js(n){for(const e of n.B_)await e(!1)}function Uh(n,e){const t=me(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),wl(t)?Il(t):rs(t).r_()&&Tl(t,e))}function El(n,e){const t=me(n),r=rs(t);t.N_.delete(e),r.r_()&&Fh(t,e),t.N_.size===0&&(r.r_()?r.o_():$s(t)&&t.q_.set("Unknown"))}function Tl(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ae.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}rs(n).A_(e)}function Fh(n,e){n.Q_.xe(e),rs(n).R_(e)}function Il(n){n.Q_=new Jg({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),rs(n).start(),n.q_.v_()}function wl(n){return $s(n)&&!rs(n).n_()&&n.N_.size>0}function $s(n){return me(n).L_.size===0}function Bh(n){n.Q_=void 0}async function W_(n){n.q_.set("Online")}async function Q_(n){n.N_.forEach((e,t)=>{Tl(n,e)})}async function Y_(n,e){Bh(n),wl(n)?(n.q_.M_(e),Il(n)):n.q_.set("Unknown")}async function J_(n,e,t){if(n.q_.set("Online"),e instanceof Rh&&e.state===2&&e.cause)try{await async function(i,o){const a=o.cause;for(const u of o.targetIds)i.N_.has(u)&&(await i.remoteSyncer.rejectListen(u,a),i.N_.delete(u),i.Q_.removeTarget(u))}(n,e)}catch(r){G("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Fu(n,r)}else if(e instanceof yo?n.Q_.Ke(e):e instanceof Ch?n.Q_.He(e):n.Q_.We(e),!t.isEqual(ae.min()))try{const r=await Lh(n.localStore);t.compareTo(r)>=0&&await function(o,a){const u=o.Q_.rt(a);return u.targetChanges.forEach((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const p=o.N_.get(d);p&&o.N_.set(d,p.withResumeToken(h.resumeToken,a))}}),u.targetMismatches.forEach((h,d)=>{const p=o.N_.get(h);if(!p)return;o.N_.set(h,p.withResumeToken(ut.EMPTY_BYTE_STRING,p.snapshotVersion)),Fh(o,h);const I=new Sr(p.target,h,d,p.sequenceNumber);Tl(o,I)}),o.remoteSyncer.applyRemoteEvent(u)}(n,t)}catch(r){G("RemoteStore","Failed to raise snapshot:",r),await Fu(n,r)}}async function Fu(n,e,t){if(!Qs(e))throw e;n.L_.add(1),await Js(n),n.q_.set("Offline"),t||(t=()=>Lh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{G("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await Wo(n)})}async function Bu(n,e){const t=me(n);t.asyncQueue.verifyOperationInProgress(),G("RemoteStore","RemoteStore received new credentials");const r=$s(t);t.L_.add(3),await Js(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await Wo(t)}async function $_(n,e){const t=me(n);e?(t.L_.delete(2),await Wo(t)):e||(t.L_.add(2),await Js(t),t.q_.set("Unknown"))}function rs(n){return n.K_||(n.K_=function(t,r,i){const o=me(t);return o.w_(),new H_(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Eo:W_.bind(null,n),Ro:Q_.bind(null,n),mo:Y_.bind(null,n),d_:J_.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),wl(n)?Il(n):n.q_.set("Unknown")):(await n.K_.stop(),Bh(n))})),n.K_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(e,t,r,i,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new ri,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,o){const a=Date.now()+r,u=new Al(e,t,a,i,o);return u.start(r),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new te(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function jh(n,e){if(sr("AsyncQueue",`${e}: ${n}`),Qs(n))return new te(j.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e){this.comparator=e?(t,r)=>e(t,r)||ne.comparator(t.key,r.key):(t,r)=>ne.comparator(t.key,r.key),this.keyedMap=Ss(),this.sortedSet=new He(this.comparator)}static emptySet(e){return new Hi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Hi)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Hi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(){this.W_=new He(ne.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):ue():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class $i{constructor(e,t,r,i,o,a,u,h,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,i,o){const a=[];return t.forEach(u=>{a.push({type:0,doc:u})}),new $i(e,t,Hi.emptySet(t),a,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&qo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class Z_{constructor(){this.queries=qu(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const i=me(t),o=i.queries;i.queries=qu(),o.forEach((a,u)=>{for(const h of u.j_)h.onError(r)})})(this,new te(j.ABORTED,"Firestore shutting down"))}}function qu(){return new ns(n=>gh(n),qo)}async function ey(n,e){const t=me(n);let r=3;const i=e.query;let o=t.queries.get(i);o?!o.H_()&&e.J_()&&(r=2):(o=new X_,r=e.J_()?0:1);try{switch(r){case 0:o.z_=await t.onListen(i,!0);break;case 1:o.z_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){const u=jh(a,`Initialization of query '${Li(e.query)}' failed`);return void e.onError(u)}t.queries.set(i,o),o.j_.push(e),e.Z_(t.onlineState),o.z_&&e.X_(o.z_)&&bl(t)}async function ty(n,e){const t=me(n),r=e.query;let i=3;const o=t.queries.get(r);if(o){const a=o.j_.indexOf(e);a>=0&&(o.j_.splice(a,1),o.j_.length===0?i=e.J_()?0:1:!o.H_()&&e.J_()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function ny(n,e){const t=me(n);let r=!1;for(const i of e){const o=i.query,a=t.queries.get(o);if(a){for(const u of a.j_)u.X_(i)&&(r=!0);a.z_=i}}r&&bl(t)}function ry(n,e,t){const r=me(n),i=r.queries.get(e);if(i)for(const o of i.j_)o.onError(t);r.queries.delete(e)}function bl(n){n.Y_.forEach(e=>{e.next()})}var Fa,Hu;(Hu=Fa||(Fa={})).ea="default",Hu.Cache="cache";class iy{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new $i(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=$i.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Fa.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(e){this.key=e}}class Hh{constructor(e){this.key=e}}class sy{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ye(),this.mutatedKeys=ye(),this.Aa=_h(e),this.Ra=new Hi(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new ju,i=t?t.Ra:this.Ra;let o=t?t.mutatedKeys:this.mutatedKeys,a=i,u=!1;const h=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((p,I)=>{const b=i.get(p),k=Ho(this.query,I)?I:null,O=!!b&&this.mutatedKeys.has(b.key),C=!!k&&(k.hasLocalMutations||this.mutatedKeys.has(k.key)&&k.hasCommittedMutations);let N=!1;b&&k?b.data.isEqual(k.data)?O!==C&&(r.track({type:3,doc:k}),N=!0):this.ga(b,k)||(r.track({type:2,doc:k}),N=!0,(h&&this.Aa(k,h)>0||d&&this.Aa(k,d)<0)&&(u=!0)):!b&&k?(r.track({type:0,doc:k}),N=!0):b&&!k&&(r.track({type:1,doc:b}),N=!0,(h||d)&&(u=!0)),N&&(k?(a=a.add(k),o=C?o.add(p):o.delete(p)):(a=a.delete(p),o=o.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),o=o.delete(p.key),r.track({type:1,doc:p})}return{Ra:a,fa:r,ns:u,mutatedKeys:o}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const o=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort((p,I)=>function(k,O){const C=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ue()}};return C(k)-C(O)}(p.type,I.type)||this.Aa(p.doc,I.doc)),this.pa(r),i=i!=null&&i;const u=t&&!i?this.ya():[],h=this.da.size===0&&this.current&&!i?1:0,d=h!==this.Ea;return this.Ea=h,a.length!==0||d?{snapshot:new $i(this.query,e.Ra,o,a,e.mutatedKeys,h===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:u}:{wa:u}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new ju,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ye(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new Hh(r))}),this.da.forEach(r=>{e.has(r)||t.push(new qh(r))}),t}ba(e){this.Ta=e.Ts,this.da=ye();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return $i.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class oy{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class ay{constructor(e){this.key=e,this.va=!1}}class ly{constructor(e,t,r,i,o,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new ns(u=>gh(u),qo),this.Ma=new Map,this.xa=new Set,this.Oa=new He(ne.comparator),this.Na=new Map,this.La=new _l,this.Ba={},this.ka=new Map,this.qa=Ji.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function uy(n,e,t=!0){const r=Qh(n);let i;const o=r.Fa.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Da()):i=await zh(r,e,t,!0),i}async function cy(n,e){const t=Qh(n);await zh(t,e,!0,!1)}async function zh(n,e,t,r){const i=await L_(n.localStore,Vn(e)),o=i.targetId,a=n.sharedClientState.addLocalQueryTarget(o,t);let u;return r&&(u=await hy(n,e,o,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&Uh(n.remoteStore,i),u}async function hy(n,e,t,r,i){n.Ka=(I,b,k)=>async function(C,N,$,Q){let z=N.view.ma($);z.ns&&(z=await Mu(C.localStore,N.query,!1).then(({documents:E})=>N.view.ma(E,z)));const q=Q&&Q.targetChanges.get(N.targetId),F=Q&&Q.targetMismatches.get(N.targetId)!=null,B=N.view.applyChanges(z,C.isPrimaryClient,q,F);return Ku(C,N.targetId,B.wa),B.snapshot}(n,I,b,k);const o=await Mu(n.localStore,e,!0),a=new sy(e,o.Ts),u=a.ma(o.documents),h=Ys.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),d=a.applyChanges(u,n.isPrimaryClient,h);Ku(n,t,d.wa);const p=new oy(e,t,a);return n.Fa.set(e,p),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),d.snapshot}async function dy(n,e,t){const r=me(n),i=r.Fa.get(e),o=r.Ma.get(i.targetId);if(o.length>1)return r.Ma.set(i.targetId,o.filter(a=>!qo(a,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Ua(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&El(r.remoteStore,i.targetId),Ba(r,i.targetId)}).catch(ol)):(Ba(r,i.targetId),await Ua(r.localStore,i.targetId,!0))}async function fy(n,e){const t=me(n),r=t.Fa.get(e),i=t.Ma.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),El(t.remoteStore,r.targetId))}async function Kh(n,e){const t=me(n);try{const r=await V_(t.localStore,e);e.targetChanges.forEach((i,o)=>{const a=t.Na.get(o);a&&(Le(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.va=!0:i.modifiedDocuments.size>0?Le(a.va):i.removedDocuments.size>0&&(Le(a.va),a.va=!1))}),await Wh(t,r,e)}catch(r){await ol(r)}}function zu(n,e,t){const r=me(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Fa.forEach((o,a)=>{const u=a.view.Z_(e);u.snapshot&&i.push(u.snapshot)}),function(a,u){const h=me(a);h.onlineState=u;let d=!1;h.queries.forEach((p,I)=>{for(const b of I.j_)b.Z_(u)&&(d=!0)}),d&&bl(h)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function py(n,e,t){const r=me(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Na.get(e),o=i&&i.key;if(o){let a=new He(ne.comparator);a=a.insert(o,yt.newNoDocument(o,ae.min()));const u=ye().add(o),h=new Go(ae.min(),new Map,new He(Te),a,u);await Kh(r,h),r.Oa=r.Oa.remove(o),r.Na.delete(e),Cl(r)}else await Ua(r.localStore,e,!1).then(()=>Ba(r,e,t)).catch(ol)}function Ba(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||Gh(n,r)})}function Gh(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(El(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),Cl(n))}function Ku(n,e,t){for(const r of t)r instanceof qh?(n.La.addReference(r.key,e),my(n,r)):r instanceof Hh?(G("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||Gh(n,r.key)):ue()}function my(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(G("SyncEngine","New document in limbo: "+t),n.xa.add(r),Cl(n))}function Cl(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new ne(Oe.fromString(e)),r=n.qa.next();n.Na.set(r,new ay(t)),n.Oa=n.Oa.insert(t,r),Uh(n.remoteStore,new Sr(Vn(fl(t.path)),r,"TargetPurposeLimboResolution",al.oe))}}async function Wh(n,e,t){const r=me(n),i=[],o=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((u,h)=>{a.push(r.Ka(h,e,t).then(d=>{var p;if((d||t)&&r.isPrimaryClient){const I=d?!d.fromCache:(p=t==null?void 0:t.targetChanges.get(h.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(h.targetId,I?"current":"not-current")}if(d){i.push(d);const I=vl.Wi(h.targetId,d);o.push(I)}}))}),await Promise.all(a),r.Ca.d_(i),await async function(h,d){const p=me(h);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",I=>L.forEach(d,b=>L.forEach(b.$i,k=>p.persistence.referenceDelegate.addReference(I,b.targetId,k)).next(()=>L.forEach(b.Ui,k=>p.persistence.referenceDelegate.removeReference(I,b.targetId,k)))))}catch(I){if(!Qs(I))throw I;G("LocalStore","Failed to update sequence numbers: "+I)}for(const I of d){const b=I.targetId;if(!I.fromCache){const k=p.os.get(b),O=k.snapshotVersion,C=k.withLastLimboFreeSnapshotVersion(O);p.os=p.os.insert(b,C)}}}(r.localStore,o))}async function gy(n,e){const t=me(n);if(!t.currentUser.isEqual(e)){G("SyncEngine","User change. New user:",e.toKey());const r=await Oh(t.localStore,e);t.currentUser=e,function(o,a){o.ka.forEach(u=>{u.forEach(h=>{h.reject(new te(j.CANCELLED,a))})}),o.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Wh(t,r.hs)}}function _y(n,e){const t=me(n),r=t.Na.get(e);if(r&&r.va)return ye().add(r.key);{let i=ye();const o=t.Ma.get(e);if(!o)return i;for(const a of o){const u=t.Fa.get(a);i=i.unionWith(u.view.Va)}return i}}function Qh(n){const e=me(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Kh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=_y.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=py.bind(null,e),e.Ca.d_=ny.bind(null,e.eventManager),e.Ca.$a=ry.bind(null,e.eventManager),e}class Do{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Mh(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return D_(this.persistence,new k_,e.initialUser,this.serializer)}Ga(e){return new R_(yl.Zr,this.serializer)}Wa(e){return new x_}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Do.provider={build:()=>new Do};class ja{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>zu(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=gy.bind(null,this.syncEngine),await $_(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Z_}()}createDatastore(e){const t=Mh(e.databaseInfo.databaseId),r=function(o){return new j_(o)}(e.databaseInfo);return function(o,a,u,h){return new z_(o,a,u,h)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,o,a,u){return new G_(r,i,o,a,u)}(this.localStore,this.datastore,e.asyncQueue,t=>zu(this.syncEngine,t,0),function(){return Uu.D()?new Uu:new U_}())}createSyncEngine(e,t){return function(i,o,a,u,h,d,p){const I=new ly(i,o,a,u,h,d);return p&&(I.Qa=!0),I}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const o=me(i);G("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await Js(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}ja.provider={build:()=>new ja};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):sr("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy{constructor(e,t,r,i,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=_t.UNAUTHENTICATED,this.clientId=lh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{G("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(G("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ri;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=jh(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ya(n,e){n.asyncQueue.verifyOperationInProgress(),G("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Oh(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Gu(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Ey(n);G("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Bu(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Bu(e.remoteStore,i)),n._onlineComponents=e}async function Ey(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){G("FirestoreClient","Using user provided OfflineComponentProvider");try{await ya(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===j.FAILED_PRECONDITION||i.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;Gi("Error using user provided cache. Falling back to memory cache: "+t),await ya(n,new Do)}}else G("FirestoreClient","Using default OfflineComponentProvider"),await ya(n,new Do);return n._offlineComponents}async function Ty(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(G("FirestoreClient","Using user provided OnlineComponentProvider"),await Gu(n,n._uninitializedComponentsProvider._online)):(G("FirestoreClient","Using default OnlineComponentProvider"),await Gu(n,new ja))),n._onlineComponents}async function Iy(n){const e=await Ty(n),t=e.eventManager;return t.onListen=uy.bind(null,e.syncEngine),t.onUnlisten=dy.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=cy.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=fy.bind(null,e.syncEngine),t}function wy(n,e,t={}){const r=new ri;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,u,h,d){const p=new yy({next:b=>{p.Za(),a.enqueueAndForget(()=>ty(o,I));const k=b.docs.has(u);!k&&b.fromCache?d.reject(new te(j.UNAVAILABLE,"Failed to get document because the client is offline.")):k&&b.fromCache&&h&&h.source==="server"?d.reject(new te(j.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(b)},error:b=>d.reject(b)}),I=new iy(fl(u.path),p,{includeMetadataChanges:!0,_a:!0});return ey(o,I)}(await Iy(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yh(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wu=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ay(n,e,t){if(!t)throw new te(j.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function by(n,e,t,r){if(e===!0&&r===!0)throw new te(j.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Qu(n){if(!ne.isDocumentKey(n))throw new te(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Cy(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ue()}function qa(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new te(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Cy(n);throw new te(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new te(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new te(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}by("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Yh((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new te(j.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new te(j.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new te(j.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Rl{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Yu({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new te(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new te(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Yu(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new $m;switch(r.type){case"firstParty":return new tg(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new te(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Wu.get(t);r&&(G("ComponentProvider","Removing Datastore"),Wu.delete(t),r.terminate())}(this),Promise.resolve()}}function Ry(n,e,t,r={}){var i;const o=(n=qa(n,Rl))._getSettings(),a=`${e}:${t}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&Gi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let u,h;if(typeof r.mockUserToken=="string")u=r.mockUserToken,h=_t.MOCK_USER;else{u=fd(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new te(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new _t(d)}n._authCredentials=new Xm(new ah(u,h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Sl(this.firestore,e,this._query)}}class nr{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new qs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new nr(this.firestore,e,this._key)}}class qs extends Sl{constructor(e,t,r){super(e,t,fl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new nr(this.firestore,null,new ne(e))}withConverter(e){return new qs(this.firestore,e,this._path)}}function Sy(n,e,...t){if(n=ar(n),arguments.length===1&&(e=lh.newId()),Ay("doc","path",e),n instanceof Rl){const r=Oe.fromString(e,...t);return Qu(r),new nr(n,null,new ne(r))}{if(!(n instanceof nr||n instanceof qs))throw new te(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Oe.fromString(e,...t));return Qu(r),new nr(n.firestore,n instanceof qs?n.converter:null,new ne(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new xh(this,"async_queue_retry"),this.Vu=()=>{const r=_a();r&&G("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=_a();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=_a();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new ri;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Qs(e))throw e;G("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(a){let u=a.message||"";return a.stack&&(u=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),u}(r);throw sr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const i=Al.createAndSchedule(this,e,t,r,o=>this.yu(o));return this.Tu.push(i),i}fu(){this.Eu&&ue()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}class Jh extends Rl{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new Ju,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ju(e),this._firestoreClient=void 0,await e}}}function Py(n,e){const t=typeof n=="object"?n:vc(),r=typeof n=="string"?n:"(default)",i=Ya(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=hd("firestore");o&&Ry(i,...o)}return i}function ky(n){if(n._terminated)throw new te(j.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Ny(n),n._firestoreClient}function Ny(n){var e,t,r;const i=n._freezeSettings(),o=function(u,h,d,p){return new pg(u,h,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,Yh(p.experimentalLongPollingOptions),p.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new vy(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(u){const h=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(h),_online:h}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Vo(ut.fromBase64String(e))}catch(t){throw new te(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Vo(ut.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new te(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Rt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new te(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new te(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Te(this._lat,e._lat)||Te(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,e._values)}}const Oy=new RegExp("[~\\*/\\[\\]]");function Ly(n,e,t){if(e.search(Oy)>=0)throw $u(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new $h(...e.split("."))._internalPath}catch{throw $u(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function $u(n,e,t,r,i){let o=`Function ${e}() called with invalid data`;o+=". ";let a="";return new te(j.INVALID_ARGUMENT,o+n+a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(e,t,r,i,o){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new nr(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new My(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Zh("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class My extends Xh{data(){return super.data()}}function Zh(n,e){return typeof e=="string"?Ly(n,e):e instanceof $h?e._internalPath:e._delegate._internalPath}class xy{convertValue(e,t="none"){switch(ui(e)){case 0:return null;case 1:return e.booleanValue;case 2:return qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(li(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ue()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Bo(e,(i,o)=>{r[i]=this.convertValue(o,t)}),r}convertVectorValue(e){var t,r,i;const o=(i=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(a=>qe(a.doubleValue));return new Vy(o)}convertGeoPoint(e){return new Dy(qe(e.latitude),qe(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=ul(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Fs(e));default:return null}}convertTimestamp(e){const t=Or(e);return new Vt(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Oe.fromString(e);Le(Vh(r));const i=new Bs(r.get(1),r.get(3)),o=new ne(r.popFirst(5));return i.isEqual(t)||sr(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ed extends Xh{constructor(e,t,r,i,o,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Fy(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Zh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Fy extends ed{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function By(n){n=qa(n,nr);const e=qa(n.firestore,Jh);return wy(ky(e),n._key).then(t=>qy(e,n,t))}class jy extends xy{constructor(e){super(),this.firestore=e}convertBytes(e){return new Vo(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new nr(this.firestore,null,t)}}function qy(n,e,t){const r=t.docs.get(e._key),i=new jy(n);return new ed(n,i,e._key,r,new Uy(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(i){ts=i})(Xi),zi(new si("firestore",(r,{instanceIdentifier:i,options:o})=>{const a=r.getProvider("app").getImmediate(),u=new Jh(new Zm(r.getProvider("auth-internal")),new rg(r.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new te(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Bs(d.options.projectId,p)}(a,i),a);return o=Object.assign({useFetchStreams:t},o),u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),Nr(mu,"4.7.3",e),Nr(mu,"4.7.3","esm2017")})();function As(n,e,t=0){if(!e)return 0;const r=n-t,i=Math.round(r*100);let o=0,a=i;for(const u of e.rates){if(a<=0)break;const{limit:h,rate:d}=u,p=Math.round(h*100),I=Math.min(a,p),b=Math.round(I*d);o+=b,a-=I}return o/100}const Hy={2023:{rates:[{limit:160200,rate:.062},{limit:1/0,rate:0}]},2024:{rates:[{limit:168600,rate:.062},{limit:1/0,rate:0}]},2025:{rates:[{limit:176100,rate:.062},{limit:1/0,rate:0}]}},zy={rates:[{limit:25e4,rate:.0145},{limit:1/0,rate:.0235}]},$n={2023:{joint:{federal:27700,"New York":{state:16050,city:0},"New Jersey":{state:0,city:0}},single:{federal:13850,"New York":{state:8e3,city:0},"New Jersey":{state:0,city:0}}},2024:{joint:{federal:29200,"New York":{state:18e3,city:0},"New Jersey":{state:0,city:0}},single:{federal:14600,"New York":{state:8e3,city:0},"New Jersey":{state:0,city:0}}},2025:{joint:{federal:3e4,"New York":{state:18e3,city:0},"New Jersey":{state:0,city:0}},single:{federal:15e3,"New York":{state:8e3,city:0},"New Jersey":{state:0,city:0}}}},Pe=n=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(n),Xu={2023:{"New York":{rates:[{limit:21950,rate:.04},{limit:45200,rate:.045},{limit:161550,rate:.0525},{limit:323200,rate:.059},{limit:1/0,rate:.0633}]},"New Jersey":{rates:[{limit:2e4,rate:.014},{limit:35e3,rate:.0175},{limit:4e4,rate:.035},{limit:75e3,rate:.05525},{limit:15e4,rate:.0637},{limit:5e5,rate:.0897},{limit:1/0,rate:.1075}]},Federal:{rates:[{limit:22e3,rate:.1},{limit:89450,rate:.12},{limit:190750,rate:.22},{limit:364200,rate:.24},{limit:462500,rate:.32},{limit:693750,rate:.35},{limit:1/0,rate:.37}]}},2024:{"New York":{rates:[{limit:17150,rate:.04},{limit:23600,rate:.045},{limit:27900,rate:.0525},{limit:161550,rate:.055},{limit:323200,rate:.06},{limit:2155350,rate:.0685},{limit:5e6,rate:.0965},{limit:25e6,rate:.103},{limit:1/0,rate:.109}]},"New Jersey":{rates:[{limit:2e4,rate:.014},{limit:35e3,rate:.0175},{limit:4e4,rate:.035},{limit:75e3,rate:.05525},{limit:15e4,rate:.0637},{limit:5e5,rate:.0897},{limit:1/0,rate:.1075}]},Federal:{rates:[{limit:23200,rate:.1},{limit:94300,rate:.12},{limit:201050,rate:.22},{limit:383900,rate:.24},{limit:487450,rate:.32},{limit:731200,rate:.35},{limit:1/0,rate:.37}]}},2025:{"New York":{rates:[{limit:17150,rate:.04},{limit:23600,rate:.045},{limit:27900,rate:.0525},{limit:161550,rate:.055},{limit:323200,rate:.06},{limit:2155350,rate:.0685},{limit:5e6,rate:.0965},{limit:25e6,rate:.103},{limit:1/0,rate:.109}]},"New Jersey":{rates:[{limit:2e4,rate:.014},{limit:35e3,rate:.0175},{limit:4e4,rate:.035},{limit:75e3,rate:.05525},{limit:15e4,rate:.0637},{limit:5e5,rate:.0897},{limit:1/0,rate:.1075}]},Federal:{rates:[{limit:23850,rate:.1},{limit:96950,rate:.12},{limit:206700,rate:.22},{limit:394600,rate:.24},{limit:501050,rate:.32},{limit:751600,rate:.35},{limit:1/0,rate:.37}]}}},Ky={2023:{"New York":{rates:[{limit:21600,rate:.03078},{limit:45e3,rate:.03762},{limit:9e4,rate:.03819},{limit:1/0,rate:.03867}]}},2024:{"New York":{rates:[{limit:21600,rate:.03078},{limit:45e3,rate:.03762},{limit:9e4,rate:.03819},{limit:1/0,rate:.03867}]}},2025:{"New York":{rates:[{limit:21600,rate:.03078},{limit:45e3,rate:.03762},{limit:9e4,rate:.03819},{limit:1/0,rate:.03867}]}}},Gy=(n,e)=>{typeof window>"u"||localStorage.setItem(n,e)},Wy=n=>{if(!(typeof window>"u"))return localStorage.getItem(n)};function Qy(n){let e,t,r,i,o,a,u,h="<tr><th>Tax</th> <th>Amount</th></tr>",d,p,I,b,k="Federal",O,C,N=Pe(n[3])+"",$,Q,z,q,F="State",B,E,m=Pe(n[2])+"",_,v,T,w,y="City",se,ke,St=Pe(n[4])+"",Y,X,De,Qe,Mn="Social Security",Xe,de,Ot=Pe(n[5])+"",ct,rn,Ze,Pt,kt="Medicare",Lt,ht,Me=Pe(n[6])+"",Nt,Mt,rt,xe,xn="Total",sn,Ve,Et=Pe(n[7])+"",xt;return{c(){e=S("h2"),t=Re(n[0]),r=Re(" Taxes - "),i=Re(n[1]),o=V(),a=S("table"),u=S("thead"),u.innerHTML=h,d=V(),p=S("tbody"),I=S("tr"),b=S("td"),b.textContent=k,O=V(),C=S("td"),$=Re(N),Q=V(),z=S("tr"),q=S("td"),q.textContent=F,B=V(),E=S("td"),_=Re(m),v=V(),T=S("tr"),w=S("td"),w.textContent=y,se=V(),ke=S("td"),Y=Re(St),X=V(),De=S("tr"),Qe=S("td"),Qe.textContent=Mn,Xe=V(),de=S("td"),ct=Re(Ot),rn=V(),Ze=S("tr"),Pt=S("td"),Pt.textContent=kt,Lt=V(),ht=S("td"),Nt=Re(Me),Mt=V(),rt=S("tr"),xe=S("td"),xe.textContent=xn,sn=V(),Ve=S("td"),xt=Re(Et),this.h()},l(Se){e=R(Se,"H2",{style:!0});var Ee=ce(e);t=Ce(Ee,n[0]),r=Ce(Ee," Taxes - "),i=Ce(Ee,n[1]),Ee.forEach(W),o=D(Se),a=R(Se,"TABLE",{style:!0});var Ut=ce(a);u=R(Ut,"THEAD",{"data-svelte-h":!0}),ee(u)!=="svelte-91siwn"&&(u.innerHTML=h),d=D(Ut),p=R(Ut,"TBODY",{});var Ue=ce(p);I=R(Ue,"TR",{});var ge=ce(I);b=R(ge,"TD",{"data-svelte-h":!0}),ee(b)!=="svelte-6waqll"&&(b.textContent=k),O=D(ge),C=R(ge,"TD",{});var Ne=ce(C);$=Ce(Ne,N),Ne.forEach(W),ge.forEach(W),Q=D(Ue),z=R(Ue,"TR",{});var Tt=ce(z);q=R(Tt,"TD",{"data-svelte-h":!0}),ee(q)!=="svelte-qr71y5"&&(q.textContent=F),B=D(Tt),E=R(Tt,"TD",{});var Ae=ce(E);_=Ce(Ae,m),Ae.forEach(W),Tt.forEach(W),v=D(Ue),T=R(Ue,"TR",{});var Fe=ce(T);w=R(Fe,"TD",{"data-svelte-h":!0}),ee(w)!=="svelte-1yvq8zx"&&(w.textContent=y),se=D(Fe),ke=R(Fe,"TD",{});var ze=ce(ke);Y=Ce(ze,St),ze.forEach(W),Fe.forEach(W),X=D(Ue),De=R(Ue,"TR",{});var et=ce(De);Qe=R(et,"TD",{"data-svelte-h":!0}),ee(Qe)!=="svelte-1mp8mpj"&&(Qe.textContent=Mn),Xe=D(et),de=R(et,"TD",{});var lr=ce(de);ct=Ce(lr,Ot),lr.forEach(W),et.forEach(W),rn=D(Ue),Ze=R(Ue,"TR",{});var on=ce(Ze);Pt=R(on,"TD",{"data-svelte-h":!0}),ee(Pt)!=="svelte-b4njfe"&&(Pt.textContent=kt),Lt=D(on),ht=R(on,"TD",{});var dt=ce(ht);Nt=Ce(dt,Me),dt.forEach(W),on.forEach(W),Mt=D(Ue),rt=R(Ue,"TR",{});var _n=ce(rt);xe=R(_n,"TD",{style:!0,"data-svelte-h":!0}),ee(xe)!=="svelte-dm4jeo"&&(xe.textContent=xn),sn=D(_n),Ve=R(_n,"TD",{style:!0});var ur=ce(Ve);xt=Ce(ur,Et),ur.forEach(W),_n.forEach(W),Ue.forEach(W),Ut.forEach(W),this.h()},h(){Zr(e,"text-transform","capitalize"),Zr(xe,"border-top","1px solid black"),Zr(xe,"font-weight","bold"),Zr(Ve,"border-top","1px solid black"),Zr(Ve,"font-weight","bold"),Zr(a,"border-collapse","collapse")},m(Se,Ee){nt(Se,e,Ee),g(e,t),g(e,r),g(e,i),nt(Se,o,Ee),nt(Se,a,Ee),g(a,u),g(a,d),g(a,p),g(p,I),g(I,b),g(I,O),g(I,C),g(C,$),g(p,Q),g(p,z),g(z,q),g(z,B),g(z,E),g(E,_),g(p,v),g(p,T),g(T,w),g(T,se),g(T,ke),g(ke,Y),g(p,X),g(p,De),g(De,Qe),g(De,Xe),g(De,de),g(de,ct),g(p,rn),g(p,Ze),g(Ze,Pt),g(Ze,Lt),g(Ze,ht),g(ht,Nt),g(p,Mt),g(p,rt),g(rt,xe),g(rt,sn),g(rt,Ve),g(Ve,xt)},p(Se,[Ee]){Ee&1&&gt(t,Se[0]),Ee&2&&gt(i,Se[1]),Ee&8&&N!==(N=Pe(Se[3])+"")&&gt($,N),Ee&4&&m!==(m=Pe(Se[2])+"")&&gt(_,m),Ee&16&&St!==(St=Pe(Se[4])+"")&&gt(Y,St),Ee&32&&Ot!==(Ot=Pe(Se[5])+"")&&gt(ct,Ot),Ee&64&&Me!==(Me=Pe(Se[6])+"")&&gt(Nt,Me),Ee&128&&Et!==(Et=Pe(Se[7])+"")&&gt(xt,Et)},i:Ll,o:Ll,d(Se){Se&&(W(e),W(o),W(a))}}}function Yy(n,e,t){let{stateTaxAmount:r,federalTaxAmount:i,cityTaxAmount:o,socialSecurityTaxAmount:a,medicareTaxAmount:u,interval:h,currentState:d}=e,p=r,I=i,b=o,k=a,O=u,C=r+i+o+a+u;return n.$$set=N=>{"stateTaxAmount"in N&&t(8,r=N.stateTaxAmount),"federalTaxAmount"in N&&t(9,i=N.federalTaxAmount),"cityTaxAmount"in N&&t(10,o=N.cityTaxAmount),"socialSecurityTaxAmount"in N&&t(11,a=N.socialSecurityTaxAmount),"medicareTaxAmount"in N&&t(12,u=N.medicareTaxAmount),"interval"in N&&t(0,h=N.interval),"currentState"in N&&t(1,d=N.currentState)},n.$$.update=()=>{if(n.$$.dirty&8061)switch(h){case"annual":t(2,p=r),t(3,I=i),t(4,b=o),t(5,k=a),t(6,O=u),t(7,C=p+I+b+k+O);break;case"monthly":t(2,p=r/12),t(3,I=i/12),t(4,b=o/12),t(5,k=a/12),t(6,O=u/12),t(7,C=p+I+b+k+O);break;case"fortnightly":t(2,p=r/26),t(3,I=i/26),t(4,b=o/26),t(5,k=a/26),t(6,O=u/26),t(7,C=p+I+b+k+O);break}},[h,d,p,I,b,k,O,C,r,i,o,a,u]}class Jy extends Ka{constructor(e){super(),Ga(this,e,Yy,Qy,Ha,{stateTaxAmount:8,federalTaxAmount:9,cityTaxAmount:10,socialSecurityTaxAmount:11,medicareTaxAmount:12,interval:0,currentState:1})}}function Zu(n,e,t){const r=n.slice();return r[28]=e[t],r[30]=t,r}function ec(n){let e,t,r=n[30]+1+"",i,o,a=Pe(n[9][n[30]])+"",u;return{c(){e=S("h3"),t=Re("Income "),i=Re(r),o=Re(`
	Taxable income: `),u=Re(a)},l(h){e=R(h,"H3",{});var d=ce(e);t=Ce(d,"Income "),i=Ce(d,r),d.forEach(W),o=Ce(h,`
	Taxable income: `),u=Ce(h,a)},m(h,d){nt(h,e,d),g(e,t),g(e,i),nt(h,o,d),nt(h,u,d)},p(h,d){d&512&&a!==(a=Pe(h[9][h[30]])+"")&&gt(u,a)},d(h){h&&(W(e),W(o),W(u))}}}function $y(n){let e,t,r,i,o,a=Pe(n[10][0]+n[10][1])+"",u,h,d,p,I=Pe(n[11][0]+n[11][1])+"",b,k,O,C,N=Pe(n[8][0]+n[8][1])+"",$,Q,z=vo(n[1]),q=[];for(let F=0;F<z.length;F+=1)q[F]=ec(Zu(n,z,F));return t=new Jy({props:{federalTaxAmount:n[3][0]+n[3][1],stateTaxAmount:n[4][0]+n[4][1],cityTaxAmount:n[5][0]+n[5][1],socialSecurityTaxAmount:n[6][0]+n[6][1],medicareTaxAmount:n[7][0]+n[7][1],interval:n[2],currentState:n[0]}}),{c(){for(let F=0;F<q.length;F+=1)q[F].c();e=V(),uc(t.$$.fragment),r=V(),i=S("p"),o=Re("Your monthly take-home pay: "),u=Re(a),h=V(),d=S("br"),p=Re(`
	Your biweekly take-home pay: `),b=Re(I),k=V(),O=S("br"),C=Re(`
	Your annual take-home pay: `),$=Re(N)},l(F){for(let E=0;E<q.length;E+=1)q[E].l(F);e=D(F),lc(t.$$.fragment,F),r=D(F),i=R(F,"P",{});var B=ce(i);o=Ce(B,"Your monthly take-home pay: "),u=Ce(B,a),h=D(B),d=R(B,"BR",{}),p=Ce(B,`
	Your biweekly take-home pay: `),b=Ce(B,I),k=D(B),O=R(B,"BR",{}),C=Ce(B,`
	Your annual take-home pay: `),$=Ce(B,N),B.forEach(W)},m(F,B){for(let E=0;E<q.length;E+=1)q[E]&&q[E].m(F,B);nt(F,e,B),ac(t,F,B),nt(F,r,B),nt(F,i,B),g(i,o),g(i,u),g(i,h),g(i,d),g(i,p),g(i,b),g(i,k),g(i,O),g(i,C),g(i,$),Q=!0},p(F,[B]){if(B&514){z=vo(F[1]);let m;for(m=0;m<z.length;m+=1){const _=Zu(F,z,m);q[m]?q[m].p(_,B):(q[m]=ec(_),q[m].c(),q[m].m(e.parentNode,e))}for(;m<q.length;m+=1)q[m].d(1);q.length=z.length}const E={};B&8&&(E.federalTaxAmount=F[3][0]+F[3][1]),B&16&&(E.stateTaxAmount=F[4][0]+F[4][1]),B&32&&(E.cityTaxAmount=F[5][0]+F[5][1]),B&64&&(E.socialSecurityTaxAmount=F[6][0]+F[6][1]),B&128&&(E.medicareTaxAmount=F[7][0]+F[7][1]),B&4&&(E.interval=F[2]),B&1&&(E.currentState=F[0]),t.$set(E),(!Q||B&1024)&&a!==(a=Pe(F[10][0]+F[10][1])+"")&&gt(u,a),(!Q||B&2048)&&I!==(I=Pe(F[11][0]+F[11][1])+"")&&gt(b,I),(!Q||B&256)&&N!==(N=Pe(F[8][0]+F[8][1])+"")&&gt($,N)},i(F){Q||(oc(t.$$.fragment,F),Q=!0)},o(F){sc(t.$$.fragment,F),Q=!1},d(F){F&&(W(e),W(r),W(i)),rc(q,F),ic(t,F)}}}function Xy(n,e,t){let{currentYear:r="2023",currentState:i="New York",yearlySalaries:o=[],contributionPercentages:a=[],health_care_fsa_contributions:u=[],dependent_care_fsa_contributions:h=[],interval:d,monthlyMedicalContributions:p=[0,0],monthlyDentalContributions:I=[0,0],monthlyVisionContributions:b=[0,0],filingStatus:k="joint"}=e,O=[],C=[],N=[],$=[],Q=[],z=[],q=[],F=[],B=[],E=[],m=[],_=[],v=[],T=[],w=[],y;return n.$$set=se=>{"currentYear"in se&&t(12,r=se.currentYear),"currentState"in se&&t(0,i=se.currentState),"yearlySalaries"in se&&t(1,o=se.yearlySalaries),"contributionPercentages"in se&&t(13,a=se.contributionPercentages),"health_care_fsa_contributions"in se&&t(14,u=se.health_care_fsa_contributions),"dependent_care_fsa_contributions"in se&&t(15,h=se.dependent_care_fsa_contributions),"interval"in se&&t(2,d=se.interval),"monthlyMedicalContributions"in se&&t(16,p=se.monthlyMedicalContributions),"monthlyDentalContributions"in se&&t(17,I=se.monthlyDentalContributions),"monthlyVisionContributions"in se&&t(18,b=se.monthlyVisionContributions),"filingStatus"in se&&t(19,k=se.filingStatus)},n.$$.update=()=>{if(n.$$.dirty&134214651){t(26,y=Xu[r][i]),t(20,O=o.map((Y,X)=>Y*(a[X]/100))),t(21,q=o.map((Y,X)=>u[X])),t(22,F=o.map((Y,X)=>h[X]));let se=p.map(Y=>Y*12),ke=I.map(Y=>Y*12),St=b.map(Y=>Y*12);t(9,w=o.map((Y,X)=>Y-O[X]-q[X]-F[X]-se[X]-ke[X]-St[X])),t(23,B=o.map(()=>{var Y,X,De;return((De=(X=(Y=$n==null?void 0:$n[r])==null?void 0:Y[k])==null?void 0:X[i])==null?void 0:De.state)??0})),t(24,E=o.map(()=>{var Y,X;return((X=(Y=$n==null?void 0:$n[r])==null?void 0:Y[k])==null?void 0:X.federal)??0})),t(25,m=o.map(()=>{var Y,X,De;return((De=(X=(Y=$n==null?void 0:$n[r])==null?void 0:Y[k])==null?void 0:X[i])==null?void 0:De.city)??0})),t(4,N=w.map((Y,X)=>As(Y,y,B[X]))),t(3,C=w.map((Y,X)=>As(Y,Xu[r].Federal,E[X]))),t(5,$=w.map((Y,X)=>As(Y,Ky[r][i],m[X]))),t(6,Q=w.map(Y=>As(Y,Hy[r]))),t(7,z=w.map(Y=>As(Y,zy))),t(8,T=w.map((Y,X)=>Y-N[X]-C[X]-$[X]-Q[X]-z[X])),t(10,_=T.map(Y=>Y/12)),t(11,v=T.map(Y=>Y/26))}},[i,o,d,C,N,$,Q,z,T,w,_,v,r,a,u,h,p,I,b,k,O,q,F,B,E,m,y]}class Zy extends Ka{constructor(e){super(),Ga(this,e,Xy,$y,Ha,{currentYear:12,currentState:0,yearlySalaries:1,contributionPercentages:13,health_care_fsa_contributions:14,dependent_care_fsa_contributions:15,interval:2,monthlyMedicalContributions:16,monthlyDentalContributions:17,monthlyVisionContributions:18,filingStatus:19})}}function tc(n,e,t){const r=n.slice();return r[64]=e[t],r[65]=e,r[66]=t,r}function ev(n){let e,t="Sign In",r,i,o,a,u="Email:",h,d,p,I,b,k,O="Password:",C,N,$,Q,z,q,F="Sign In",B,E;return{c(){e=S("h2"),e.textContent=t,r=V(),i=S("div"),o=S("form"),a=S("label"),a.textContent=u,h=V(),d=S("input"),p=V(),I=S("br"),b=V(),k=S("label"),k.textContent=O,C=V(),N=S("input"),$=V(),Q=S("br"),z=V(),q=S("button"),q.textContent=F,this.h()},l(m){e=R(m,"H2",{"data-svelte-h":!0}),ee(e)!=="svelte-1f1zcva"&&(e.textContent=t),r=D(m),i=R(m,"DIV",{});var _=ce(i);o=R(_,"FORM",{action:!0});var v=ce(o);a=R(v,"LABEL",{for:!0,"data-svelte-h":!0}),ee(a)!=="svelte-1flf0h4"&&(a.textContent=u),h=D(v),d=R(v,"INPUT",{type:!0,id:!0,autocomplete:!0}),p=D(v),I=R(v,"BR",{}),b=D(v),k=R(v,"LABEL",{for:!0,"data-svelte-h":!0}),ee(k)!=="svelte-bhu94"&&(k.textContent=O),C=D(v),N=R(v,"INPUT",{type:!0,id:!0,autocomplete:!0}),$=D(v),Q=R(v,"BR",{}),z=D(v),q=R(v,"BUTTON",{"data-svelte-h":!0}),ee(q)!=="svelte-14tztva"&&(q.textContent=F),v.forEach(W),_.forEach(W),this.h()},h(){M(a,"for","email"),M(d,"type","email"),M(d,"id","email"),M(d,"autocomplete","email"),M(k,"for","password"),M(N,"type","password"),M(N,"id","password"),M(N,"autocomplete","current-password"),M(o,"action","")},m(m,_){nt(m,e,_),nt(m,r,_),nt(m,i,_),g(i,o),g(o,a),g(o,h),g(o,d),Z(d,n[8]),g(o,p),g(o,I),g(o,b),g(o,k),g(o,C),g(o,N),Z(N,n[9]),g(o,$),g(o,Q),g(o,z),g(o,q),B||(E=[we(d,"input",n[31]),we(N,"input",n[32]),we(q,"click",n[29])],B=!0)},p(m,_){_[0]&256&&d.value!==m[8]&&Z(d,m[8]),_[0]&512&&N.value!==m[9]&&Z(N,m[9])},d(m){m&&(W(e),W(r),W(i)),B=!1,za(E)}}}function tv(n){let e,t=n[7].email+"",r,i,o,a="Sign out",u,h;return{c(){e=Re("Signed in as "),r=Re(t),i=V(),o=S("button"),o.textContent=a},l(d){e=Ce(d,"Signed in as "),r=Ce(d,t),i=D(d),o=R(d,"BUTTON",{"data-svelte-h":!0}),ee(o)!=="svelte-6agn43"&&(o.textContent=a)},m(d,p){nt(d,e,p),nt(d,r,p),nt(d,i,p),nt(d,o,p),u||(h=we(o,"click",n[30]),u=!0)},p(d,p){p[0]&128&&t!==(t=d[7].email+"")&&gt(r,t)},d(d){d&&(W(e),W(r),W(i),W(o)),u=!1,h()}}}function nc(n){let e,t,r,i,o,a,u="Remove",h,d,p;function I(){n[56].call(t,n[65],n[66])}function b(){n[57].call(i,n[65],n[66])}function k(){return n[58](n[66])}return{c(){e=S("div"),t=S("input"),r=V(),i=S("input"),o=V(),a=S("button"),a.textContent=u,h=V(),this.h()},l(O){e=R(O,"DIV",{});var C=ce(e);t=R(C,"INPUT",{type:!0,placeholder:!0}),r=D(C),i=R(C,"INPUT",{type:!0,placeholder:!0}),o=D(C),a=R(C,"BUTTON",{"data-svelte-h":!0}),ee(a)!=="svelte-cieyql"&&(a.textContent=u),h=D(C),C.forEach(W),this.h()},h(){M(t,"type","text"),M(t,"placeholder","Expense Label"),M(i,"type","number"),M(i,"placeholder","Expense Amount")},m(O,C){nt(O,e,C),g(e,t),Z(t,n[64].label),g(e,r),g(e,i),Z(i,n[64].amount),g(e,o),g(e,a),g(e,h),d||(p=[we(t,"input",I),we(i,"input",b),we(a,"click",k)],d=!0)},p(O,C){n=O,C[0]&64&&t.value!==n[64].label&&Z(t,n[64].label),C[0]&64&&pe(i.value)!==n[64].amount&&Z(i,n[64].amount)},d(O){O&&W(e),d=!1,za(p)}}}function nv(n){let e,t,r="Go to Checking Page",i,o,a="Budget Calculator v1",u,h,d,p,I,b="Salary input",k,O,C,N,$="Person 1",Q,z,q="Yearly Salary:",F,B,E,m,_,v,T="Increase Salary by (%):",w,y,se,ke,St="Increase Salary",Y,X,De,Qe,Mn="Expected Bonus (%):",Xe,de,Ot,ct,rn,Ze,Pt,kt,Lt="401k Contribution (%):",ht,Me,Nt,Mt,rt,xe,xn="Healthcare FSA Contribution ($):",sn,Ve,Et,xt,Se,Ee,Ut="Dependent Care FSA Contribution ($):",Ue,ge,Ne,Tt,Ae,Fe,ze,et,lr="Medical Deduction ($):",on,dt,_n,ur,xr,yn,is="Dental Deduction ($):",Un,Ft,Ur,an,hi,zt,ss="Vision Deduction ($):",Fn,Kt,Ye,di,Bn,K,cr,Xs="Person 2",vn,jn,Zs="Yearly Salary:",hr,Gt,Fr,dr,Wt,En,os="Expected Bonus (%):",Br,Bt,fi,pi,as,Qt,ls="401k Contribution (%):",jr,It,ln,qr,us,Tn,cs="Healthcare FSA Contribution ($):",mi,jt,Hr,gi,_i,qn,eo="Dependent Care FSA Contribution ($):",yi,Yt,hs,un,qt,fr,pr,In,be="Medical Deduction ($):",mr,wt,Hn,ds,vi,zn,to="Dental Deduction ($):",fs,cn,Kn,Jt,Ei,wn,ps="Vision Deduction ($):",An,hn,ms,gs,$t,At,Gn,zr="Current Year:",gr,ft,bt,_r="-- Select Year --",Xt,Ti="2023",ve,no="2024",dn,_s="2025",Ii,wi,yr,bn,Zt="Current US State:",Ai,Dt,Ct,ys="-- Select State --",Ht,Kr="New York (NY)",en,Gr="New Jersey (NJ)",vs,bi,Wn,Je,Ci,Cn,Ri="Bonus:",Si,Rn=Pe(n[23])+"",Wr,Pi,fn,Qn,Es="401K Contribution:",ki,vr=Pe(n[24])+"",Yn,it,Jn,Ni,tn=Pe(n[0]/12+n[3]/12)+"",s,l,c,f,A,P,x,Ie="Interval:",Be,le,_e,Ke,Sn,Ge,je,Qr,Qo,Er,pt,Yo,Jo,Yr,Ts,Tr,$o,pn,Di,Pl="Expenses",Xo,Jr,kl="Add Expense",Zo,$r,ea,ta,Nl;function Dl(U,ie){return U[7]?tv:ev}let ro=Dl(n),mn=ro(n);Tr=new Zy({props:{currentState:n[20],currentYear:n[21],taxableIncome:n[26],health_care_fsa_contributions:[n[10],n[15]],dependent_care_fsa_contributions:[n[11],n[16]],yearlySalaries:[n[0],n[3]],contributionPercentages:[n[2],n[5]],interval:n[22],monthlyDentalContributions:[n[13]/12,n[18]/12],monthlyMedicalContributions:[n[12]/12,n[17]/12],monthlyVisionContributions:[n[14]/12,n[19]/12]}});let Vi=vo(n[6]),st=[];for(let U=0;U<Vi.length;U+=1)st[U]=nc(tc(n,Vi,U));return ea=nd(n[53][0]),{c(){e=S("main"),t=S("a"),t.textContent=r,i=V(),o=S("h1"),o.textContent=a,u=V(),h=S("section"),mn.c(),d=V(),p=S("section"),I=S("h2"),I.textContent=b,k=V(),O=S("div"),C=S("div"),N=S("h3"),N.textContent=$,Q=V(),z=S("label"),z.textContent=q,F=V(),B=S("input"),E=V(),m=S("br"),_=V(),v=S("label"),v.textContent=T,w=V(),y=S("input"),se=V(),ke=S("button"),ke.textContent=St,Y=V(),X=S("br"),De=V(),Qe=S("label"),Qe.textContent=Mn,Xe=V(),de=S("input"),Ot=V(),ct=S("br"),rn=V(),Ze=S("br"),Pt=V(),kt=S("label"),kt.textContent=Lt,ht=V(),Me=S("input"),Nt=V(),Mt=S("br"),rt=V(),xe=S("label"),xe.textContent=xn,sn=V(),Ve=S("input"),Et=V(),xt=S("br"),Se=V(),Ee=S("label"),Ee.textContent=Ut,Ue=V(),ge=S("input"),Ne=V(),Tt=S("br"),Ae=V(),Fe=S("br"),ze=V(),et=S("label"),et.textContent=lr,on=V(),dt=S("input"),_n=V(),ur=S("br"),xr=V(),yn=S("label"),yn.textContent=is,Un=V(),Ft=S("input"),Ur=V(),an=S("br"),hi=V(),zt=S("label"),zt.textContent=ss,Fn=V(),Kt=S("input"),Ye=V(),di=S("br"),Bn=V(),K=S("div"),cr=S("h3"),cr.textContent=Xs,vn=V(),jn=S("label"),jn.textContent=Zs,hr=V(),Gt=S("input"),Fr=V(),dr=S("br"),Wt=V(),En=S("label"),En.textContent=os,Br=V(),Bt=S("input"),fi=V(),pi=S("br"),as=V(),Qt=S("label"),Qt.textContent=ls,jr=V(),It=S("input"),ln=V(),qr=S("br"),us=V(),Tn=S("label"),Tn.textContent=cs,mi=V(),jt=S("input"),Hr=V(),gi=S("br"),_i=V(),qn=S("label"),qn.textContent=eo,yi=V(),Yt=S("input"),hs=V(),un=S("br"),qt=V(),fr=S("br"),pr=V(),In=S("label"),In.textContent=be,mr=V(),wt=S("input"),Hn=V(),ds=S("br"),vi=V(),zn=S("label"),zn.textContent=to,fs=V(),cn=S("input"),Kn=V(),Jt=S("br"),Ei=V(),wn=S("label"),wn.textContent=ps,An=V(),hn=S("input"),ms=V(),gs=S("br"),$t=V(),At=S("p"),Gn=S("label"),Gn.textContent=zr,gr=V(),ft=S("select"),bt=S("option"),bt.textContent=_r,Xt=S("option"),Xt.textContent=Ti,ve=S("option"),ve.textContent=no,dn=S("option"),dn.textContent=_s,Ii=V(),wi=S("br"),yr=V(),bn=S("label"),bn.textContent=Zt,Ai=V(),Dt=S("select"),Ct=S("option"),Ct.textContent=ys,Ht=S("option"),Ht.textContent=Kr,en=S("option"),en.textContent=Gr,vs=V(),bi=S("hr"),Wn=V(),Je=S("div"),Ci=S("br"),Cn=S("b"),Cn.textContent=Ri,Si=V(),Wr=Re(Rn),Pi=V(),fn=S("br"),Qn=S("b"),Qn.textContent=Es,ki=V(),Yn=Re(vr),it=V(),Jn=S("p"),Ni=Re("Gross Monthly Income: "),s=Re(tn),l=V(),c=S("hr"),f=V(),A=S("br"),P=V(),x=S("label"),x.textContent=Ie,Be=V(),le=S("label"),_e=S("input"),Ke=Re(`
			Annual`),Sn=V(),Ge=S("label"),je=S("input"),Qr=Re(`
			Monthly`),Qo=V(),Er=S("label"),pt=S("input"),Yo=Re(`
			Fortnightly`),Jo=V(),Yr=S("div"),Ts=S("div"),uc(Tr.$$.fragment),$o=V(),pn=S("section"),Di=S("h3"),Di.textContent=Pl,Xo=V(),Jr=S("button"),Jr.textContent=kl,Zo=V();for(let U=0;U<st.length;U+=1)st[U].c();this.h()},l(U){e=R(U,"MAIN",{class:!0});var ie=ce(e);t=R(ie,"A",{href:!0,"data-svelte-h":!0}),ee(t)!=="svelte-ppopvo"&&(t.textContent=r),i=D(ie),o=R(ie,"H1",{"data-svelte-h":!0}),ee(o)!=="svelte-12rxga8"&&(o.textContent=a),u=D(ie),h=R(ie,"SECTION",{});var oe=ce(h);mn.l(oe),d=D(oe),p=R(oe,"SECTION",{});var ot=ce(p);I=R(ot,"H2",{"data-svelte-h":!0}),ee(I)!=="svelte-gzk6ig"&&(I.textContent=b),k=D(ot),O=R(ot,"DIV",{class:!0});var Xr=ce(O);C=R(Xr,"DIV",{});var H=ce(C);N=R(H,"H3",{"data-svelte-h":!0}),ee(N)!=="svelte-goopbe"&&(N.textContent=$),Q=D(H),z=R(H,"LABEL",{for:!0,"data-svelte-h":!0}),ee(z)!=="svelte-908ltx"&&(z.textContent=q),F=D(H),B=R(H,"INPUT",{type:!0,id:!0}),E=D(H),m=R(H,"BR",{}),_=D(H),v=R(H,"LABEL",{for:!0,"data-svelte-h":!0}),ee(v)!=="svelte-i5oryw"&&(v.textContent=T),w=D(H),y=R(H,"INPUT",{type:!0,id:!0}),se=D(H),ke=R(H,"BUTTON",{"data-svelte-h":!0}),ee(ke)!=="svelte-ew2fh4"&&(ke.textContent=St),Y=D(H),X=R(H,"BR",{}),De=D(H),Qe=R(H,"LABEL",{for:!0,"data-svelte-h":!0}),ee(Qe)!=="svelte-1cqojg7"&&(Qe.textContent=Mn),Xe=D(H),de=R(H,"INPUT",{type:!0,id:!0}),Ot=D(H),ct=R(H,"BR",{}),rn=D(H),Ze=R(H,"BR",{}),Pt=D(H),kt=R(H,"LABEL",{for:!0,"data-svelte-h":!0}),ee(kt)!=="svelte-1jizrnf"&&(kt.textContent=Lt),ht=D(H),Me=R(H,"INPUT",{type:!0,id:!0}),Nt=D(H),Mt=R(H,"BR",{}),rt=D(H),xe=R(H,"LABEL",{for:!0,"data-svelte-h":!0}),ee(xe)!=="svelte-euf23"&&(xe.textContent=xn),sn=D(H),Ve=R(H,"INPUT",{type:!0,id:!0}),Et=D(H),xt=R(H,"BR",{}),Se=D(H),Ee=R(H,"LABEL",{for:!0,"data-svelte-h":!0}),ee(Ee)!=="svelte-1e2sjer"&&(Ee.textContent=Ut),Ue=D(H),ge=R(H,"INPUT",{type:!0,id:!0}),Ne=D(H),Tt=R(H,"BR",{}),Ae=D(H),Fe=R(H,"BR",{}),ze=D(H),et=R(H,"LABEL",{for:!0,"data-svelte-h":!0}),ee(et)!=="svelte-1wejyn7"&&(et.textContent=lr),on=D(H),dt=R(H,"INPUT",{type:!0,id:!0}),_n=D(H),ur=R(H,"BR",{}),xr=D(H),yn=R(H,"LABEL",{for:!0,"data-svelte-h":!0}),ee(yn)!=="svelte-1v1rhud"&&(yn.textContent=is),Un=D(H),Ft=R(H,"INPUT",{type:!0,id:!0}),Ur=D(H),an=R(H,"BR",{}),hi=D(H),zt=R(H,"LABEL",{for:!0,"data-svelte-h":!0}),ee(zt)!=="svelte-zdn7gl"&&(zt.textContent=ss),Fn=D(H),Kt=R(H,"INPUT",{type:!0,id:!0}),Ye=D(H),di=R(H,"BR",{}),H.forEach(W),Bn=D(Xr),K=R(Xr,"DIV",{});var J=ce(K);cr=R(J,"H3",{"data-svelte-h":!0}),ee(cr)!=="svelte-1a84iof"&&(cr.textContent=Xs),vn=D(J),jn=R(J,"LABEL",{for:!0,"data-svelte-h":!0}),ee(jn)!=="svelte-mttl8q"&&(jn.textContent=Zs),hr=D(J),Gt=R(J,"INPUT",{type:!0,id:!0}),Fr=D(J),dr=R(J,"BR",{}),Wt=D(J),En=R(J,"LABEL",{for:!0,"data-svelte-h":!0}),ee(En)!=="svelte-1weqosu"&&(En.textContent=os),Br=D(J),Bt=R(J,"INPUT",{type:!0,id:!0}),fi=D(J),pi=R(J,"BR",{}),as=D(J),Qt=R(J,"LABEL",{for:!0,"data-svelte-h":!0}),ee(Qt)!=="svelte-128ukag"&&(Qt.textContent=ls),jr=D(J),It=R(J,"INPUT",{type:!0,id:!0}),ln=D(J),qr=R(J,"BR",{}),us=D(J),Tn=R(J,"LABEL",{for:!0,"data-svelte-h":!0}),ee(Tn)!=="svelte-euf23"&&(Tn.textContent=cs),mi=D(J),jt=R(J,"INPUT",{type:!0,id:!0}),Hr=D(J),gi=R(J,"BR",{}),_i=D(J),qn=R(J,"LABEL",{for:!0,"data-svelte-h":!0}),ee(qn)!=="svelte-1e2sjer"&&(qn.textContent=eo),yi=D(J),Yt=R(J,"INPUT",{type:!0,id:!0}),hs=D(J),un=R(J,"BR",{}),qt=D(J),fr=R(J,"BR",{}),pr=D(J),In=R(J,"LABEL",{for:!0,"data-svelte-h":!0}),ee(In)!=="svelte-1wejyn7"&&(In.textContent=be),mr=D(J),wt=R(J,"INPUT",{type:!0,id:!0}),Hn=D(J),ds=R(J,"BR",{}),vi=D(J),zn=R(J,"LABEL",{for:!0,"data-svelte-h":!0}),ee(zn)!=="svelte-1v1rhud"&&(zn.textContent=to),fs=D(J),cn=R(J,"INPUT",{type:!0,id:!0}),Kn=D(J),Jt=R(J,"BR",{}),Ei=D(J),wn=R(J,"LABEL",{for:!0,"data-svelte-h":!0}),ee(wn)!=="svelte-zdn7gl"&&(wn.textContent=ps),An=D(J),hn=R(J,"INPUT",{type:!0,id:!0}),ms=D(J),gs=R(J,"BR",{}),J.forEach(W),Xr.forEach(W),ot.forEach(W),$t=D(oe),At=R(oe,"P",{});var Pn=ce(At);Gn=R(Pn,"LABEL",{for:!0,"data-svelte-h":!0}),ee(Gn)!=="svelte-17urc6i"&&(Gn.textContent=zr),gr=D(Pn),ft=R(Pn,"SELECT",{id:!0});var Is=ce(ft);bt=R(Is,"OPTION",{"data-svelte-h":!0}),ee(bt)!=="svelte-121j27n"&&(bt.textContent=_r),Xt=R(Is,"OPTION",{"data-svelte-h":!0}),ee(Xt)!=="svelte-185o45e"&&(Xt.textContent=Ti),ve=R(Is,"OPTION",{"data-svelte-h":!0}),ee(ve)!=="svelte-d7saby"&&(ve.textContent=no),dn=R(Is,"OPTION",{"data-svelte-h":!0}),ee(dn)!=="svelte-9aiaj6"&&(dn.textContent=_s),Is.forEach(W),Ii=D(Pn),wi=R(Pn,"BR",{}),yr=D(Pn),bn=R(Pn,"LABEL",{for:!0,"data-svelte-h":!0}),ee(bn)!=="svelte-x7pvh8"&&(bn.textContent=Zt),Ai=D(Pn),Dt=R(Pn,"SELECT",{id:!0});var io=ce(Dt);Ct=R(io,"OPTION",{"data-svelte-h":!0}),ee(Ct)!=="svelte-30b5j3"&&(Ct.textContent=ys),Ht=R(io,"OPTION",{"data-svelte-h":!0}),ee(Ht)!=="svelte-14igjfs"&&(Ht.textContent=Kr),en=R(io,"OPTION",{"data-svelte-h":!0}),ee(en)!=="svelte-1xli4ar"&&(en.textContent=Gr),io.forEach(W),Pn.forEach(W),vs=D(oe),bi=R(oe,"HR",{}),Wn=D(oe),Je=R(oe,"DIV",{class:!0});var nn=ce(Je);Ci=R(nn,"BR",{}),Cn=R(nn,"B",{"data-svelte-h":!0}),ee(Cn)!=="svelte-1ydzksd"&&(Cn.textContent=Ri),Si=D(nn),Wr=Ce(nn,Rn),Pi=D(nn),fn=R(nn,"BR",{}),Qn=R(nn,"B",{"data-svelte-h":!0}),ee(Qn)!=="svelte-8fadtk"&&(Qn.textContent=Es),ki=D(nn),Yn=Ce(nn,vr),it=D(nn),Jn=R(nn,"P",{});var na=ce(Jn);Ni=Ce(na,"Gross Monthly Income: "),s=Ce(na,tn),na.forEach(W),nn.forEach(W),l=D(oe),c=R(oe,"HR",{}),f=D(oe),A=R(oe,"BR",{}),P=D(oe),x=R(oe,"LABEL",{for:!0,"data-svelte-h":!0}),ee(x)!=="svelte-1o5vfq0"&&(x.textContent=Ie),Be=D(oe),le=R(oe,"LABEL",{class:!0,for:!0});var ra=ce(le);_e=R(ra,"INPUT",{class:!0,type:!0,id:!0,name:!0}),Ke=Ce(ra,`
			Annual`),ra.forEach(W),Sn=D(oe),Ge=R(oe,"LABEL",{class:!0,for:!0});var ia=ce(Ge);je=R(ia,"INPUT",{class:!0,type:!0,id:!0,name:!0}),Qr=Ce(ia,`
			Monthly`),ia.forEach(W),Qo=D(oe),Er=R(oe,"LABEL",{class:!0,for:!0});var sa=ce(Er);pt=R(sa,"INPUT",{class:!0,type:!0,id:!0,name:!0}),Yo=Ce(sa,`
			Fortnightly`),sa.forEach(W),Jo=D(oe),Yr=R(oe,"DIV",{id:!0,class:!0});var Vl=ce(Yr);Ts=R(Vl,"DIV",{});var Ol=ce(Ts);lc(Tr.$$.fragment,Ol),Ol.forEach(W),Vl.forEach(W),$o=D(oe),pn=R(oe,"SECTION",{style:!0});var Oi=ce(pn);Di=R(Oi,"H3",{"data-svelte-h":!0}),ee(Di)!=="svelte-11jkbap"&&(Di.textContent=Pl),Xo=D(Oi),Jr=R(Oi,"BUTTON",{"data-svelte-h":!0}),ee(Jr)!=="svelte-rmce5g"&&(Jr.textContent=kl),Zo=D(Oi);for(let oa=0;oa<st.length;oa+=1)st[oa].l(Oi);Oi.forEach(W),oe.forEach(W),ie.forEach(W),this.h()},h(){M(t,"href",rd+"/checking"),M(z,"for","yearlySalary1"),M(B,"type","number"),M(B,"id","yearlySalary1"),M(v,"for","salaryIncreasePercentage1"),M(y,"type","number"),M(y,"id","salaryIncreasePercentage1"),M(Qe,"for","bonusPercentage1"),M(de,"type","number"),M(de,"id","bonusPercentage1"),M(kt,"for","contributionPercentage1"),M(Me,"type","number"),M(Me,"id","contributionPercentage1"),M(xe,"for","healthCareContribution"),M(Ve,"type","number"),M(Ve,"id","healthCareContribution"),M(Ee,"for","dependentCareContribution"),M(ge,"type","number"),M(ge,"id","dependentCareContribution"),M(et,"for","medicalDeduction"),M(dt,"type","number"),M(dt,"id","medicalDeduction"),M(yn,"for","dentalDeduction"),M(Ft,"type","number"),M(Ft,"id","dentalDeduction"),M(zt,"for","visionDeduction"),M(Kt,"type","number"),M(Kt,"id","visionDeduction"),M(jn,"for","yearlySalary2"),M(Gt,"type","number"),M(Gt,"id","yearlySalary2"),M(En,"for","bonusPercentage2"),M(Bt,"type","number"),M(Bt,"id","bonusPercentage2"),M(Qt,"for","contributionPercentage2"),M(It,"type","number"),M(It,"id","contributionPercentage2"),M(Tn,"for","healthCareContribution"),M(jt,"type","number"),M(jt,"id","healthCareContribution"),M(qn,"for","dependentCareContribution"),M(Yt,"type","number"),M(Yt,"id","dependentCareContribution"),M(In,"for","medicalDeduction"),M(wt,"type","number"),M(wt,"id","medicalDeduction"),M(zn,"for","dentalDeduction"),M(cn,"type","number"),M(cn,"id","dentalDeduction"),M(wn,"for","visionDeduction"),M(hn,"type","number"),M(hn,"id","visionDeduction"),M(O,"class","splitDisplay svelte-ug7cs4"),M(Gn,"for","currentYear"),bt.__value="",Z(bt,bt.__value),Xt.__value="2023",Z(Xt,Xt.__value),ve.__value="2024",Z(ve,ve.__value),dn.__value="2025",Z(dn,dn.__value),M(ft,"id","currentYear"),n[21]===void 0&&Ml(()=>n[50].call(ft)),M(bn,"for","currentState"),Ct.__value="",Z(Ct,Ct.__value),Ht.__value="New York",Z(Ht,Ht.__value),en.__value="New Jersey",Z(en,en.__value),M(Dt,"id","currentState"),n[20]===void 0&&Ml(()=>n[51].call(Dt)),M(Je,"class","splitDisplay svelte-ug7cs4"),M(x,"for","interval"),M(_e,"class","interval svelte-ug7cs4"),M(_e,"type","radio"),M(_e,"id","annual"),M(_e,"name","interval"),_e.__value="annual",Z(_e,_e.__value),M(le,"class","interval svelte-ug7cs4"),M(le,"for","annual"),M(je,"class","interval svelte-ug7cs4"),M(je,"type","radio"),M(je,"id","monthly"),M(je,"name","interval"),je.__value="monthly",Z(je,je.__value),M(Ge,"class","interval svelte-ug7cs4"),M(Ge,"for","monthly"),M(pt,"class","interval svelte-ug7cs4"),M(pt,"type","radio"),M(pt,"id","fortnightly"),M(pt,"name","interval"),pt.__value="fortnightly",Z(pt,pt.__value),M(Er,"class","interval svelte-ug7cs4"),M(Er,"for","fortnightly"),M(Yr,"id","taxDisplay"),M(Yr,"class","svelte-ug7cs4"),Zr(pn,"display","none"),M(e,"class","svelte-ug7cs4"),ea.p(_e,je,pt)},m(U,ie){nt(U,e,ie),g(e,t),g(e,i),g(e,o),g(e,u),g(e,h),mn.m(h,null),g(h,d),g(h,p),g(p,I),g(p,k),g(p,O),g(O,C),g(C,N),g(C,Q),g(C,z),g(C,F),g(C,B),Z(B,n[0]),g(C,E),g(C,m),g(C,_),g(C,v),g(C,w),g(C,y),g(C,se),g(C,ke),g(C,Y),g(C,X),g(C,De),g(C,Qe),g(C,Xe),g(C,de),Z(de,n[1]),g(C,Ot),g(C,ct),g(C,rn),g(C,Ze),g(C,Pt),g(C,kt),g(C,ht),g(C,Me),Z(Me,n[2]),g(C,Nt),g(C,Mt),g(C,rt),g(C,xe),g(C,sn),g(C,Ve),Z(Ve,n[10]),g(C,Et),g(C,xt),g(C,Se),g(C,Ee),g(C,Ue),g(C,ge),Z(ge,n[11]),g(C,Ne),g(C,Tt),g(C,Ae),g(C,Fe),g(C,ze),g(C,et),g(C,on),g(C,dt),Z(dt,n[12]),g(C,_n),g(C,ur),g(C,xr),g(C,yn),g(C,Un),g(C,Ft),Z(Ft,n[13]),g(C,Ur),g(C,an),g(C,hi),g(C,zt),g(C,Fn),g(C,Kt),Z(Kt,n[14]),g(C,Ye),g(C,di),g(O,Bn),g(O,K),g(K,cr),g(K,vn),g(K,jn),g(K,hr),g(K,Gt),Z(Gt,n[3]),g(K,Fr),g(K,dr),g(K,Wt),g(K,En),g(K,Br),g(K,Bt),Z(Bt,n[4]),g(K,fi),g(K,pi),g(K,as),g(K,Qt),g(K,jr),g(K,It),Z(It,n[5]),g(K,ln),g(K,qr),g(K,us),g(K,Tn),g(K,mi),g(K,jt),Z(jt,n[15]),g(K,Hr),g(K,gi),g(K,_i),g(K,qn),g(K,yi),g(K,Yt),Z(Yt,n[16]),g(K,hs),g(K,un),g(K,qt),g(K,fr),g(K,pr),g(K,In),g(K,mr),g(K,wt),Z(wt,n[17]),g(K,Hn),g(K,ds),g(K,vi),g(K,zn),g(K,fs),g(K,cn),Z(cn,n[18]),g(K,Kn),g(K,Jt),g(K,Ei),g(K,wn),g(K,An),g(K,hn),Z(hn,n[19]),g(K,ms),g(K,gs),g(h,$t),g(h,At),g(At,Gn),g(At,gr),g(At,ft),g(ft,bt),g(ft,Xt),g(ft,ve),g(ft,dn),so(ft,n[21],!0),g(At,Ii),g(At,wi),g(At,yr),g(At,bn),g(At,Ai),g(At,Dt),g(Dt,Ct),g(Dt,Ht),g(Dt,en),so(Dt,n[20],!0),g(h,vs),g(h,bi),g(h,Wn),g(h,Je),g(Je,Ci),g(Je,Cn),g(Je,Si),g(Je,Wr),g(Je,Pi),g(Je,fn),g(Je,Qn),g(Je,ki),g(Je,Yn),g(Je,it),g(Je,Jn),g(Jn,Ni),g(Jn,s),g(h,l),g(h,c),g(h,f),g(h,A),g(h,P),g(h,x),g(h,Be),g(h,le),g(le,_e),_e.checked=_e.__value===n[22],g(le,Ke),g(h,Sn),g(h,Ge),g(Ge,je),je.checked=je.__value===n[22],g(Ge,Qr),g(h,Qo),g(h,Er),g(Er,pt),pt.checked=pt.__value===n[22],g(Er,Yo),g(h,Jo),g(h,Yr),g(Yr,Ts),ac(Tr,Ts,null),g(h,$o),g(h,pn),g(pn,Di),g(pn,Xo),g(pn,Jr),g(pn,Zo);for(let oe=0;oe<st.length;oe+=1)st[oe]&&st[oe].m(pn,null);$r=!0,ta||(Nl=[we(B,"input",n[33]),we(ke,"click",n[34]),we(de,"input",n[35]),we(Me,"input",n[36]),we(Ve,"input",n[37]),we(ge,"input",n[38]),we(dt,"input",n[39]),we(Ft,"input",n[40]),we(Kt,"input",n[41]),we(Gt,"input",n[42]),we(Bt,"input",n[43]),we(It,"input",n[44]),we(jt,"input",n[45]),we(Yt,"input",n[46]),we(wt,"input",n[47]),we(cn,"input",n[48]),we(hn,"input",n[49]),we(ft,"change",n[50]),we(Dt,"change",n[51]),we(_e,"change",n[52]),we(je,"change",n[54]),we(pt,"change",n[55]),we(Jr,"click",n[27])],ta=!0)},p(U,ie){ro===(ro=Dl(U))&&mn?mn.p(U,ie):(mn.d(1),mn=ro(U),mn&&(mn.c(),mn.m(h,d))),ie[0]&1&&pe(B.value)!==U[0]&&Z(B,U[0]),ie[0]&2&&pe(de.value)!==U[1]&&Z(de,U[1]),ie[0]&4&&pe(Me.value)!==U[2]&&Z(Me,U[2]),ie[0]&1024&&pe(Ve.value)!==U[10]&&Z(Ve,U[10]),ie[0]&2048&&pe(ge.value)!==U[11]&&Z(ge,U[11]),ie[0]&4096&&pe(dt.value)!==U[12]&&Z(dt,U[12]),ie[0]&8192&&pe(Ft.value)!==U[13]&&Z(Ft,U[13]),ie[0]&16384&&pe(Kt.value)!==U[14]&&Z(Kt,U[14]),ie[0]&8&&pe(Gt.value)!==U[3]&&Z(Gt,U[3]),ie[0]&16&&pe(Bt.value)!==U[4]&&Z(Bt,U[4]),ie[0]&32&&pe(It.value)!==U[5]&&Z(It,U[5]),ie[0]&32768&&pe(jt.value)!==U[15]&&Z(jt,U[15]),ie[0]&65536&&pe(Yt.value)!==U[16]&&Z(Yt,U[16]),ie[0]&131072&&pe(wt.value)!==U[17]&&Z(wt,U[17]),ie[0]&262144&&pe(cn.value)!==U[18]&&Z(cn,U[18]),ie[0]&524288&&pe(hn.value)!==U[19]&&Z(hn,U[19]),ie[0]&2097152&&so(ft,U[21]),ie[0]&1048576&&so(Dt,U[20]),(!$r||ie[0]&8388608)&&Rn!==(Rn=Pe(U[23])+"")&&gt(Wr,Rn),(!$r||ie[0]&16777216)&&vr!==(vr=Pe(U[24])+"")&&gt(Yn,vr),(!$r||ie[0]&9)&&tn!==(tn=Pe(U[0]/12+U[3]/12)+"")&&gt(s,tn),ie[0]&4194304&&(_e.checked=_e.__value===U[22]),ie[0]&4194304&&(je.checked=je.__value===U[22]),ie[0]&4194304&&(pt.checked=pt.__value===U[22]);const oe={};if(ie[0]&1048576&&(oe.currentState=U[20]),ie[0]&2097152&&(oe.currentYear=U[21]),ie[0]&33792&&(oe.health_care_fsa_contributions=[U[10],U[15]]),ie[0]&67584&&(oe.dependent_care_fsa_contributions=[U[11],U[16]]),ie[0]&9&&(oe.yearlySalaries=[U[0],U[3]]),ie[0]&36&&(oe.contributionPercentages=[U[2],U[5]]),ie[0]&4194304&&(oe.interval=U[22]),ie[0]&270336&&(oe.monthlyDentalContributions=[U[13]/12,U[18]/12]),ie[0]&135168&&(oe.monthlyMedicalContributions=[U[12]/12,U[17]/12]),ie[0]&540672&&(oe.monthlyVisionContributions=[U[14]/12,U[19]/12]),Tr.$set(oe),ie[0]&268435520){Vi=vo(U[6]);let ot;for(ot=0;ot<Vi.length;ot+=1){const Xr=tc(U,Vi,ot);st[ot]?st[ot].p(Xr,ie):(st[ot]=nc(Xr),st[ot].c(),st[ot].m(pn,null))}for(;ot<st.length;ot+=1)st[ot].d(1);st.length=Vi.length}},i(U){$r||(oc(Tr.$$.fragment,U),$r=!0)},o(U){sc(Tr.$$.fragment,U),$r=!1},d(U){U&&W(e),mn.d(),ic(Tr),rc(st,U),ea.r(),ta=!1,za(Nl)}}}function rv(n,e,t){const i=yc({apiKey:"AIzaSyC_wqKaOmHf0Nq31JOZtCt3pSQN_m1FOLk",authDomain:"budget-e231f.firebaseapp.com",projectId:"budget-e231f",storageBucket:"budget-e231f.appspot.com",messagingSenderId:"324153005171",appId:"1:324153005171:web:1a3196daf6a3b148b94606"}),o=Ym(i),a=Py(i);let u=o.currentUser,h,d,p=1e5,I=5,b=3,k=100,O=100,C=1234,N=123,$=12,Q=0,z=0,q=0,F=0,B=0,E=0,m=0,_=0,v="New Jersey",T="2024",w="annual",y=[],se,ke,St;td(()=>{const Ae=Wy("expenses");t(6,y=Ae?JSON.parse(Ae):[])});function Y(){t(6,y=[...y,{label:"",amount:0}])}function X(Ae){t(6,y=y.filter((Fe,ze)=>ze!==Ae))}function De(){if(!h||!d)return console.log("Email and password are required");Lp(o,h,d).then(Ae=>{const Fe=Ae.user;console.log(Fe)}).catch(Ae=>{console.log(Ae)})}Up(o,async Ae=>{if(Ae){t(7,u=Ae);const Fe=await By(Sy(a,"users",Ae.uid)),ze=Fe.data();ze&&(t(2,b=ze["401k_contribution_1"]),t(10,k=ze.healthcare_fsa_contribution_1),t(11,O=ze.dependent_care_fsa_contribution_1),t(12,C=ze.annual_medical_deduction_1),t(13,N=ze.annual_dental_deduction_1),t(14,$??($=ze.annual_vision_deduction_1)),t(0,p=ze.yearly_salary_1??p),t(1,I=ze.expected_bonus_1)),console.log(Fe.data())}else t(7,u=null)});const Qe=[[]],Mn=()=>o.signOut();function Xe(){h=this.value,t(8,h)}function de(){d=this.value,t(9,d)}function Ot(){p=pe(this.value),t(0,p)}const ct=()=>t(0,p+=p*(document.getElementById("salaryIncreasePercentage1").value/100));function rn(){I=pe(this.value),t(1,I)}function Ze(){b=pe(this.value),t(2,b)}function Pt(){k=pe(this.value),t(10,k)}function kt(){O=pe(this.value),t(11,O)}function Lt(){C=pe(this.value),t(12,C)}function ht(){N=pe(this.value),t(13,N)}function Me(){$=pe(this.value),t(14,$)}function Nt(){Q=pe(this.value),t(3,Q)}function Mt(){z=pe(this.value),t(4,z)}function rt(){q=pe(this.value),t(5,q)}function xe(){F=pe(this.value),t(15,F)}function xn(){B=pe(this.value),t(16,B)}function sn(){E=pe(this.value),t(17,E)}function Ve(){m=pe(this.value),t(18,m)}function Et(){_=pe(this.value),t(19,_)}function xt(){T=xl(this),t(21,T)}function Se(){v=xl(this),t(20,v)}function Ee(){w=this.__value,t(22,w)}function Ut(){w=this.__value,t(22,w)}function Ue(){w=this.__value,t(22,w)}function ge(Ae,Fe){Ae[Fe].label=this.value,t(6,y)}function Ne(Ae,Fe){Ae[Fe].amount=pe(this.value),t(6,y)}const Tt=Ae=>X(Ae);return n.$$.update=()=>{n.$$.dirty[0]&63&&(t(23,se=p*(I/100)),t(24,ke=p*(b/100))),n.$$.dirty[0]&64&&Gy("expenses",JSON.stringify(y))},[p,I,b,Q,z,q,y,u,h,d,k,O,C,N,$,F,B,E,m,_,v,T,w,se,ke,o,St,Y,X,De,Mn,Xe,de,Ot,ct,rn,Ze,Pt,kt,Lt,ht,Me,Nt,Mt,rt,xe,xn,sn,Ve,Et,xt,Se,Ee,Qe,Ut,Ue,ge,Ne,Tt]}class hv extends Ka{constructor(e){super(),Ga(this,e,rv,nv,Ha,{},null,[-1,-1,-1])}}export{hv as component};
