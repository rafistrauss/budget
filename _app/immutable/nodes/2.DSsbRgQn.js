import{s as Ba,n as Dl,l as Vl,r as ja,o as Xh}from"../chunks/DiXKfncd.js";import{S as qa,i as za,e as C,b as Ae,s as N,c as R,d as ce,f as be,g as Q,h as D,y as ne,p as Yr,j as tt,k as g,l as mt,u as ec,v as tc,w as nc,t as rc,a as ic,z as sc,x as oc,A as Zh,o as L,B as X,C as ro,D as ve,E as pe,F as Ol}from"../chunks/B4_tskYg.js";function _o(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}var Ll={};/**
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
 */const ac=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},ed=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[t++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[t++],a=n[t++],u=n[t++],h=((i&7)<<18|(o&63)<<12|(a&63)<<6|u&63)-65536;e[r++]=String.fromCharCode(55296+(h>>10)),e[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return e.join("")},lc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],a=i+1<n.length,u=a?n[i+1]:0,h=i+2<n.length,d=h?n[i+2]:0,p=o>>2,A=(o&3)<<4|u>>4;let E=(u&15)<<2|d>>6,P=d&63;h||(P=64,a||(E=64)),r.push(t[p],t[A],t[E],t[P])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(ac(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):ed(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=t[n.charAt(i++)],u=i<n.length?t[n.charAt(i)]:0;++i;const d=i<n.length?t[n.charAt(i)]:64;++i;const A=i<n.length?t[n.charAt(i)]:64;if(++i,o==null||u==null||d==null||A==null)throw new td;const E=o<<2|u>>4;if(r.push(E),d!==64){const P=u<<4&240|d>>2;if(r.push(P),A!==64){const O=d<<6&192|A;r.push(O)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class td extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const nd=function(n){const e=ac(n);return lc.encodeByteArray(e,!0)},yo=function(n){return nd(n).replace(/\./g,"")},uc=function(n){try{return lc.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function rd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const id=()=>rd().__FIREBASE_DEFAULTS__,sd=()=>{if(typeof process>"u"||typeof Ll>"u")return;const n=Ll.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},od=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&uc(n[1]);return e&&JSON.parse(e)},Do=()=>{try{return id()||sd()||od()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},cc=n=>{var e,t;return(t=(e=Do())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},ad=n=>{const e=cc(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},hc=()=>{var n;return(n=Do())===null||n===void 0?void 0:n.config},dc=n=>{var e;return(e=Do())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class ld{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function ud(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[yo(JSON.stringify(t)),yo(JSON.stringify(a)),""].join(".")}/**
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
 */function yt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function cd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(yt())}function hd(){var n;const e=(n=Do())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function dd(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function fd(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function pd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function md(){const n=yt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function gd(){return!hd()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function _d(){try{return typeof indexedDB=="object"}catch{return!1}}function yd(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(t){e(t)}})}/**
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
 */const Ed="FirebaseError";class nr extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Ed,Object.setPrototypeOf(this,nr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hs.prototype.create)}}class Hs{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,o=this.errors[e],a=o?Td(o,r):"Error",u=`${this.serviceName}: ${a} (${i}).`;return new nr(i,u,r)}}function Td(n,e){return n.replace(vd,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const vd=/\{\$([^}]+)}/g;function Id(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Eo(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const o=n[i],a=e[i];if(Ml(o)&&Ml(a)){if(!Eo(o,a))return!1}else if(o!==a)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Ml(n){return n!==null&&typeof n=="object"}/**
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
 */function Ks(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Cs(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function Rs(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function wd(n,e){const t=new Ad(n,e);return t.subscribe.bind(t)}class Ad{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");bd(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=ia),i.error===void 0&&(i.error=ia),i.complete===void 0&&(i.complete=ia);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function bd(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ia(){}/**
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
 */function rr(n){return n&&n._delegate?n._delegate:n}class ti{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Jr="[DEFAULT]";/**
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
 */class Cd{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new ld;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Sd(e))try{this.getOrInitializeService({instanceIdentifier:Jr})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=Jr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Jr){return this.instances.has(e)}getOptions(e=Jr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[o,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);r===u&&a.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const a=this.instances.get(i);return a&&e(a,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Rd(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Jr){return this.component?this.component.multipleInstances?e:Jr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Rd(n){return n===Jr?void 0:n}function Sd(n){return n.instantiationMode==="EAGER"}/**
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
 */class Pd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Cd(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var de;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(de||(de={}));const kd={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},Nd=de.INFO,Dd={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},Vd=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=Dd[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ha{constructor(e){this.name=e,this._logLevel=Nd,this._logHandler=Vd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?kd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}}const Od=(n,e)=>e.some(t=>n instanceof t);let xl,Ul;function Ld(){return xl||(xl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Md(){return Ul||(Ul=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fc=new WeakMap,ga=new WeakMap,pc=new WeakMap,sa=new WeakMap,Ka=new WeakMap;function xd(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{t(br(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&fc.set(t,n)}).catch(()=>{}),Ka.set(e,n),e}function Ud(n){if(ga.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});ga.set(n,e)}let _a={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ga.get(n);if(e==="objectStoreNames")return n.objectStoreNames||pc.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return br(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Fd(n){_a=n(_a)}function Bd(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(oa(this),e,...t);return pc.set(r,e.sort?e.sort():[e]),br(r)}:Md().includes(n)?function(...e){return n.apply(oa(this),e),br(fc.get(this))}:function(...e){return br(n.apply(oa(this),e))}}function jd(n){return typeof n=="function"?Bd(n):(n instanceof IDBTransaction&&Ud(n),Od(n,Ld())?new Proxy(n,_a):n)}function br(n){if(n instanceof IDBRequest)return xd(n);if(sa.has(n))return sa.get(n);const e=jd(n);return e!==n&&(sa.set(n,e),Ka.set(e,n)),e}const oa=n=>Ka.get(n);function qd(n,e,{blocked:t,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(n,e),u=br(a);return r&&a.addEventListener("upgradeneeded",h=>{r(br(a.result),h.oldVersion,h.newVersion,br(a.transaction),h)}),t&&a.addEventListener("blocked",h=>t(h.oldVersion,h.newVersion,h)),u.then(h=>{o&&h.addEventListener("close",()=>o()),i&&h.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}const zd=["get","getKey","getAll","getAllKeys","count"],Hd=["put","add","delete","clear"],aa=new Map;function Fl(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(aa.get(e))return aa.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=Hd.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||zd.includes(t)))return;const o=async function(a,...u){const h=this.transaction(a,i?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(u.shift())),(await Promise.all([d[t](...u),i&&h.done]))[0]};return aa.set(e,o),o}Fd(n=>({...n,get:(e,t,r)=>Fl(e,t)||n.get(e,t,r),has:(e,t)=>!!Fl(e,t)||n.has(e,t)}));/**
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
 */class Kd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Gd(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Gd(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ya="@firebase/app",Bl="0.10.13";/**
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
 */const Zn=new Ha("@firebase/app"),Wd="@firebase/app-compat",Qd="@firebase/analytics-compat",Yd="@firebase/analytics",Jd="@firebase/app-check-compat",$d="@firebase/app-check",Xd="@firebase/auth",Zd="@firebase/auth-compat",ef="@firebase/database",tf="@firebase/data-connect",nf="@firebase/database-compat",rf="@firebase/functions",sf="@firebase/functions-compat",of="@firebase/installations",af="@firebase/installations-compat",lf="@firebase/messaging",uf="@firebase/messaging-compat",cf="@firebase/performance",hf="@firebase/performance-compat",df="@firebase/remote-config",ff="@firebase/remote-config-compat",pf="@firebase/storage",mf="@firebase/storage-compat",gf="@firebase/firestore",_f="@firebase/vertexai-preview",yf="@firebase/firestore-compat",Ef="firebase",Tf="10.14.1";/**
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
 */const Ea="[DEFAULT]",vf={[ya]:"fire-core",[Wd]:"fire-core-compat",[Yd]:"fire-analytics",[Qd]:"fire-analytics-compat",[$d]:"fire-app-check",[Jd]:"fire-app-check-compat",[Xd]:"fire-auth",[Zd]:"fire-auth-compat",[ef]:"fire-rtdb",[tf]:"fire-data-connect",[nf]:"fire-rtdb-compat",[rf]:"fire-fn",[sf]:"fire-fn-compat",[of]:"fire-iid",[af]:"fire-iid-compat",[lf]:"fire-fcm",[uf]:"fire-fcm-compat",[cf]:"fire-perf",[hf]:"fire-perf-compat",[df]:"fire-rc",[ff]:"fire-rc-compat",[pf]:"fire-gcs",[mf]:"fire-gcs-compat",[gf]:"fire-fst",[yf]:"fire-fst-compat",[_f]:"fire-vertex","fire-js":"fire-js",[Ef]:"fire-js-all"};/**
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
 */const To=new Map,If=new Map,Ta=new Map;function jl(n,e){try{n.container.addComponent(e)}catch(t){Zn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function zi(n){const e=n.name;if(Ta.has(e))return Zn.debug(`There were multiple attempts to register component ${e}.`),!1;Ta.set(e,n);for(const t of To.values())jl(t,n);for(const t of If.values())jl(t,n);return!0}function Ga(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Qn(n){return n.settings!==void 0}/**
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
 */const wf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Cr=new Hs("app","Firebase",wf);/**
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
 */class Af{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ti("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Cr.create("app-deleted",{appName:this._name})}}/**
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
 */const $i=Tf;function mc(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ea,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Cr.create("bad-app-name",{appName:String(i)});if(t||(t=hc()),!t)throw Cr.create("no-options");const o=To.get(i);if(o){if(Eo(t,o.options)&&Eo(r,o.config))return o;throw Cr.create("duplicate-app",{appName:i})}const a=new Pd(i);for(const h of Ta.values())a.addComponent(h);const u=new Af(t,r,a);return To.set(i,u),u}function gc(n=Ea){const e=To.get(n);if(!e&&n===Ea&&hc())return mc();if(!e)throw Cr.create("no-app",{appName:n});return e}function Rr(n,e,t){var r;let i=(r=vf[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const o=i.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const u=[`Unable to register library "${i}" with version "${e}":`];o&&u.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&u.push("and"),a&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Zn.warn(u.join(" "));return}zi(new ti(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const bf="firebase-heartbeat-database",Cf=1,Ms="firebase-heartbeat-store";let la=null;function _c(){return la||(la=qd(bf,Cf,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ms)}catch(t){console.warn(t)}}}}).catch(n=>{throw Cr.create("idb-open",{originalErrorMessage:n.message})})),la}async function Rf(n){try{const t=(await _c()).transaction(Ms),r=await t.objectStore(Ms).get(yc(n));return await t.done,r}catch(e){if(e instanceof nr)Zn.warn(e.message);else{const t=Cr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Zn.warn(t.message)}}}async function ql(n,e){try{const r=(await _c()).transaction(Ms,"readwrite");await r.objectStore(Ms).put(e,yc(n)),await r.done}catch(t){if(t instanceof nr)Zn.warn(t.message);else{const r=Cr.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Zn.warn(r.message)}}}function yc(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Sf=1024,Pf=30*24*60*60*1e3;class kf{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Df(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=zl();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const u=new Date(a.date).valueOf();return Date.now()-u<=Pf}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Zn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=zl(),{heartbeatsToSend:r,unsentEntries:i}=Nf(this._heartbeatsCache.heartbeats),o=yo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return Zn.warn(t),""}}}function zl(){return new Date().toISOString().substring(0,10)}function Nf(n,e=Sf){const t=[];let r=n.slice();for(const i of n){const o=t.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),Hl(t)>e){o.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Hl(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Df{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _d()?yd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Rf(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return ql(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return ql(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Hl(n){return yo(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Vf(n){zi(new ti("platform-logger",e=>new Kd(e),"PRIVATE")),zi(new ti("heartbeat",e=>new kf(e),"PRIVATE")),Rr(ya,Bl,n),Rr(ya,Bl,"esm2017"),Rr("fire-js","")}Vf("");var Of="firebase",Lf="10.14.1";/**
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
 */Rr(Of,Lf,"app");function Wa(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function Ec(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Mf=Ec,Tc=new Hs("auth","Firebase",Ec());/**
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
 */const vo=new Ha("@firebase/auth");function xf(n,...e){vo.logLevel<=de.WARN&&vo.warn(`Auth (${$i}): ${n}`,...e)}function uo(n,...e){vo.logLevel<=de.ERROR&&vo.error(`Auth (${$i}): ${n}`,...e)}/**
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
 */function _n(n,...e){throw Qa(n,...e)}function kn(n,...e){return Qa(n,...e)}function vc(n,e,t){const r=Object.assign(Object.assign({},Mf()),{[e]:t});return new Hs("auth","Firebase",r).create(e,{appName:n.name})}function Sr(n){return vc(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Qa(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Tc.create(n,...e)}function re(n,e,...t){if(!n)throw Qa(e,...t)}function Yn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw uo(e),new Error(e)}function er(n,e){n||Yn(e)}/**
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
 */function va(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Uf(){return Kl()==="http:"||Kl()==="https:"}function Kl(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Ff(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Uf()||fd()||"connection"in navigator)?navigator.onLine:!0}function Bf(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Gs{constructor(e,t){this.shortDelay=e,this.longDelay=t,er(t>e,"Short delay should be less than long delay!"),this.isMobile=cd()||pd()}get(){return Ff()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ya(n,e){er(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Ic{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Yn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Yn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Yn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const jf={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const qf=new Gs(3e4,6e4);function oi(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Dr(n,e,t,r,i={}){return wc(n,i,async()=>{let o={},a={};r&&(e==="GET"?a=r:o={body:JSON.stringify(r)});const u=Ks(Object.assign({key:n.config.apiKey},a)).slice(1),h=await n._getAdditionalHeaders();h["Content-Type"]="application/json",n.languageCode&&(h["X-Firebase-Locale"]=n.languageCode);const d=Object.assign({method:e,headers:h},o);return dd()||(d.referrerPolicy="no-referrer"),Ic.fetch()(Ac(n,n.config.apiHost,t,u),d)})}async function wc(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},jf),e);try{const i=new Hf(n),o=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw io(n,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const u=o.ok?a.errorMessage:a.error.message,[h,d]=u.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw io(n,"credential-already-in-use",a);if(h==="EMAIL_EXISTS")throw io(n,"email-already-in-use",a);if(h==="USER_DISABLED")throw io(n,"user-disabled",a);const p=r[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw vc(n,p,d);_n(n,p)}}catch(i){if(i instanceof nr)throw i;_n(n,"network-request-failed",{message:String(i)})}}async function Vo(n,e,t,r,i={}){const o=await Dr(n,e,t,r,i);return"mfaPendingCredential"in o&&_n(n,"multi-factor-auth-required",{_serverResponse:o}),o}function Ac(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?Ya(n.config,i):`${n.config.apiScheme}://${i}`}function zf(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Hf{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(kn(this.auth,"network-request-failed")),qf.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function io(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=kn(n,e,r);return i.customData._tokenResponse=t,i}function Gl(n){return n!==void 0&&n.enterprise!==void 0}class Kf{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return zf(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Gf(n,e){return Dr(n,"GET","/v2/recaptchaConfig",oi(n,e))}/**
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
 */async function Wf(n,e){return Dr(n,"POST","/v1/accounts:delete",e)}async function bc(n,e){return Dr(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ns(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Qf(n,e=!1){const t=rr(n),r=await t.getIdToken(e),i=Ja(r);re(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,a=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Ns(ua(i.auth_time)),issuedAtTime:Ns(ua(i.iat)),expirationTime:Ns(ua(i.exp)),signInProvider:a||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function ua(n){return Number(n)*1e3}function Ja(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return uo("JWT malformed, contained fewer than 3 sections"),null;try{const i=uc(t);return i?JSON.parse(i):(uo("Failed to decode base64 JWT payload"),null)}catch(i){return uo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Wl(n){const e=Ja(n);return re(e,"internal-error"),re(typeof e.exp<"u","internal-error"),re(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function xs(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof nr&&Yf(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Yf({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Jf{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ia{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ns(this.lastLoginAt),this.creationTime=Ns(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Io(n){var e;const t=n.auth,r=await n.getIdToken(),i=await xs(n,bc(t,{idToken:r}));re(i==null?void 0:i.users.length,t,"internal-error");const o=i.users[0];n._notifyReloadListener(o);const a=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?Cc(o.providerUserInfo):[],u=Xf(n.providerData,a),h=n.isAnonymous,d=!(n.email&&o.passwordHash)&&!(u!=null&&u.length),p=h?d:!1,A={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Ia(o.createdAt,o.lastLoginAt),isAnonymous:p};Object.assign(n,A)}async function $f(n){const e=rr(n);await Io(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Xf(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Cc(n){return n.map(e=>{var{providerId:t}=e,r=Wa(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Zf(n,e){const t=await wc(n,{},async()=>{const r=Ks({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=n.config,a=Ac(n,i,"/v1/token",`key=${o}`),u=await n._getAdditionalHeaders();return u["Content-Type"]="application/x-www-form-urlencoded",Ic.fetch()(a,{method:"POST",headers:u,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function ep(n,e){return Dr(n,"POST","/v2/accounts:revokeToken",oi(n,e))}/**
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
 */class Ui{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){re(e.idToken,"internal-error"),re(typeof e.idToken<"u","internal-error"),re(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Wl(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){re(e.length!==0,"internal-error");const t=Wl(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(re(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:o}=await Zf(e,t);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:o}=t,a=new Ui;return r&&(re(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(re(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),o&&(re(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ui,this.toJSON())}_performRefresh(){return Yn("not implemented")}}/**
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
 */function yr(n,e){re(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Jn{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,o=Wa(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Jf(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Ia(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await xs(this,this.stsTokenManager.getToken(this.auth,e));return re(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Qf(this,e)}reload(){return $f(this)}_assign(e){this!==e&&(re(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Jn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){re(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Io(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Qn(this.auth.app))return Promise.reject(Sr(this.auth));const e=await this.getIdToken();return await xs(this,Wf(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,o,a,u,h,d,p;const A=(r=t.displayName)!==null&&r!==void 0?r:void 0,E=(i=t.email)!==null&&i!==void 0?i:void 0,P=(o=t.phoneNumber)!==null&&o!==void 0?o:void 0,O=(a=t.photoURL)!==null&&a!==void 0?a:void 0,M=(u=t.tenantId)!==null&&u!==void 0?u:void 0,k=(h=t._redirectEventId)!==null&&h!==void 0?h:void 0,$=(d=t.createdAt)!==null&&d!==void 0?d:void 0,Y=(p=t.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:H,emailVerified:z,isAnonymous:F,providerData:j,stsTokenManager:T}=t;re(H&&T,e,"internal-error");const m=Ui.fromJSON(this.name,T);re(typeof H=="string",e,"internal-error"),yr(A,e.name),yr(E,e.name),re(typeof z=="boolean",e,"internal-error"),re(typeof F=="boolean",e,"internal-error"),yr(P,e.name),yr(O,e.name),yr(M,e.name),yr(k,e.name),yr($,e.name),yr(Y,e.name);const _=new Jn({uid:H,auth:e,email:E,emailVerified:z,displayName:A,isAnonymous:F,photoURL:O,phoneNumber:P,tenantId:M,stsTokenManager:m,createdAt:$,lastLoginAt:Y});return j&&Array.isArray(j)&&(_.providerData=j.map(v=>Object.assign({},v))),k&&(_._redirectEventId=k),_}static async _fromIdTokenResponse(e,t,r=!1){const i=new Ui;i.updateFromServerResponse(t);const o=new Jn({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Io(o),o}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];re(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?Cc(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),u=new Ui;u.updateFromIdToken(r);const h=new Jn({uid:i.localId,auth:e,stsTokenManager:u,isAnonymous:a}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Ia(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(h,d),h}}/**
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
 */const Ql=new Map;function $n(n){er(n instanceof Function,"Expected a class definition");let e=Ql.get(n);return e?(er(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Ql.set(n,e),e)}/**
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
 */class Rc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Rc.type="NONE";const Yl=Rc;/**
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
 */function co(n,e,t){return`firebase:${n}:${e}:${t}`}class Fi{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=co(this.userKey,i.apiKey,o),this.fullPersistenceKey=co("persistence",i.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Jn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Fi($n(Yl),e,r);const i=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let o=i[0]||$n(Yl);const a=co(r,e.config.apiKey,e.name);let u=null;for(const d of t)try{const p=await d._get(a);if(p){const A=Jn._fromJSON(e,p);d!==o&&(u=A),o=d;break}}catch{}const h=i.filter(d=>d._shouldAllowMigration);return!o._shouldAllowMigration||!h.length?new Fi(o,e,r):(o=h[0],u&&await o._set(a,u.toJSON()),await Promise.all(t.map(async d=>{if(d!==o)try{await d._remove(a)}catch{}})),new Fi(o,e,r))}}/**
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
 */function Jl(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Nc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Sc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Vc(e))return"Blackberry";if(Oc(e))return"Webos";if(Pc(e))return"Safari";if((e.includes("chrome/")||kc(e))&&!e.includes("edge/"))return"Chrome";if(Dc(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Sc(n=yt()){return/firefox\//i.test(n)}function Pc(n=yt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function kc(n=yt()){return/crios\//i.test(n)}function Nc(n=yt()){return/iemobile/i.test(n)}function Dc(n=yt()){return/android/i.test(n)}function Vc(n=yt()){return/blackberry/i.test(n)}function Oc(n=yt()){return/webos/i.test(n)}function $a(n=yt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function tp(n=yt()){var e;return $a(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function np(){return md()&&document.documentMode===10}function Lc(n=yt()){return $a(n)||Dc(n)||Oc(n)||Vc(n)||/windows phone/i.test(n)||Nc(n)}/**
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
 */function Mc(n,e=[]){let t;switch(n){case"Browser":t=Jl(yt());break;case"Worker":t=`${Jl(yt())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${$i}/${r}`}/**
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
 */class rp{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=o=>new Promise((a,u)=>{try{const h=e(o);a(h)}catch(h){u(h)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function ip(n,e={}){return Dr(n,"GET","/v2/passwordPolicy",oi(n,e))}/**
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
 */const sp=6;class op{constructor(e){var t,r,i,o;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:sp,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,o,a,u;const h={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,h),this.validatePasswordCharacterOptions(e,h),h.isValid&&(h.isValid=(t=h.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),h.isValid&&(h.isValid=(r=h.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),h.isValid&&(h.isValid=(i=h.containsLowercaseLetter)!==null&&i!==void 0?i:!0),h.isValid&&(h.isValid=(o=h.containsUppercaseLetter)!==null&&o!==void 0?o:!0),h.isValid&&(h.isValid=(a=h.containsNumericCharacter)!==null&&a!==void 0?a:!0),h.isValid&&(h.isValid=(u=h.containsNonAlphanumericCharacter)!==null&&u!==void 0?u:!0),h}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
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
 */class ap{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $l(this),this.idTokenSubscription=new $l(this),this.beforeStateQueue=new rp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Tc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=$n(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Fi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await bc(this,{idToken:e}),r=await Jn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Qn(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(u,u))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,u=i==null?void 0:i._redirectEventId,h=await this.tryRedirectSignIn(e);(!a||a===u)&&(h!=null&&h.user)&&(i=h.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return re(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Io(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Bf()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Qn(this.app))return Promise.reject(Sr(this));const t=e?rr(e):null;return t&&re(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&re(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Qn(this.app)?Promise.reject(Sr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Qn(this.app)?Promise.reject(Sr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence($n(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ip(this),t=new op(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Hs("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await ep(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&$n(e)||this._popupRedirectResolver;re(t,this,"argument-error"),this.redirectPersistenceManager=await Fi.create(this,[$n(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t);let a=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(re(u,this,"internal-error"),u.then(()=>{a||o(this.currentUser)}),typeof t=="function"){const h=e.addObserver(t,r,i);return()=>{a=!0,h()}}else{const h=e.addObserver(t);return()=>{a=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return re(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Mc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&xf(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Xi(n){return rr(n)}class $l{constructor(e){this.auth=e,this.observer=null,this.addObserver=wd(t=>this.observer=t)}get next(){return re(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Oo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function lp(n){Oo=n}function xc(n){return Oo.loadJS(n)}function up(){return Oo.recaptchaEnterpriseScript}function cp(){return Oo.gapiScript}function hp(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const dp="recaptcha-enterprise",fp="NO_RECAPTCHA";class pp{constructor(e){this.type=dp,this.auth=Xi(e)}async verify(e="verify",t=!1){async function r(o){if(!t){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(a,u)=>{Gf(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(h=>{if(h.recaptchaKey===void 0)u(new Error("recaptcha Enterprise site key undefined"));else{const d=new Kf(h);return o.tenantId==null?o._agentRecaptchaConfig=d:o._tenantRecaptchaConfigs[o.tenantId]=d,a(d.siteKey)}}).catch(h=>{u(h)})})}function i(o,a,u){const h=window.grecaptcha;Gl(h)?h.enterprise.ready(()=>{h.enterprise.execute(o,{action:e}).then(d=>{a(d)}).catch(()=>{a(fp)})}):u(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,a)=>{r(this.auth).then(u=>{if(!t&&Gl(window.grecaptcha))i(u,o,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let h=up();h.length!==0&&(h+=u),xc(h).then(()=>{i(u,o,a)}).catch(d=>{a(d)})}}).catch(u=>{a(u)})})}}async function Xl(n,e,t,r=!1){const i=new pp(n);let o;try{o=await i.verify(t)}catch{o=await i.verify(t,!0)}const a=Object.assign({},e);return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Zl(n,e,t,r){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Xl(n,e,t,t==="getOobCode");return r(n,o)}else return r(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Xl(n,e,t,t==="getOobCode");return r(n,a)}else return Promise.reject(o)})}/**
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
 */function mp(n,e){const t=Ga(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),o=t.getOptions();if(Eo(o,e??{}))return i;_n(i,"already-initialized")}return t.initialize({options:e})}function gp(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map($n);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function _p(n,e,t){const r=Xi(n);re(r._canInitEmulator,r,"emulator-config-failed"),re(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,o=Uc(e),{host:a,port:u}=yp(e),h=u===null?"":`:${u}`;r.config.emulator={url:`${o}//${a}${h}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:u,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),Ep()}function Uc(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function yp(n){const e=Uc(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:eu(r.substr(o.length+1))}}else{const[o,a]=r.split(":");return{host:o,port:eu(a)}}}function eu(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Ep(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Xa{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Yn("not implemented")}_getIdTokenResponse(e){return Yn("not implemented")}_linkToIdToken(e,t){return Yn("not implemented")}_getReauthenticationResolver(e){return Yn("not implemented")}}async function Tp(n,e){return Dr(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function vp(n,e){return Vo(n,"POST","/v1/accounts:signInWithPassword",oi(n,e))}/**
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
 */async function Ip(n,e){return Vo(n,"POST","/v1/accounts:signInWithEmailLink",oi(n,e))}async function wp(n,e){return Vo(n,"POST","/v1/accounts:signInWithEmailLink",oi(n,e))}/**
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
 */class Us extends Xa{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Us(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Us(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zl(e,t,"signInWithPassword",vp);case"emailLink":return Ip(e,{email:this._email,oobCode:this._password});default:_n(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zl(e,r,"signUpPassword",Tp);case"emailLink":return wp(e,{idToken:t,email:this._email,oobCode:this._password});default:_n(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Bi(n,e){return Vo(n,"POST","/v1/accounts:signInWithIdp",oi(n,e))}/**
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
 */const Ap="http://localhost";class ni extends Xa{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ni(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):_n("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,o=Wa(t,["providerId","signInMethod"]);if(!r||!i)return null;const a=new ni(r,i);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Bi(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Bi(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Bi(e,t)}buildRequest(){const e={requestUri:Ap,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ks(t)}return e}}/**
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
 */function bp(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Cp(n){const e=Cs(Rs(n)).link,t=e?Cs(Rs(e)).deep_link_id:null,r=Cs(Rs(n)).deep_link_id;return(r?Cs(Rs(r)).link:null)||r||t||e||n}class Za{constructor(e){var t,r,i,o,a,u;const h=Cs(Rs(e)),d=(t=h.apiKey)!==null&&t!==void 0?t:null,p=(r=h.oobCode)!==null&&r!==void 0?r:null,A=bp((i=h.mode)!==null&&i!==void 0?i:null);re(d&&p&&A,"argument-error"),this.apiKey=d,this.operation=A,this.code=p,this.continueUrl=(o=h.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(a=h.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(u=h.tenantId)!==null&&u!==void 0?u:null}static parseLink(e){const t=Cp(e);try{return new Za(t)}catch{return null}}}/**
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
 */class Zi{constructor(){this.providerId=Zi.PROVIDER_ID}static credential(e,t){return Us._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Za.parseLink(t);return re(r,"argument-error"),Us._fromEmailAndCode(e,r.code,r.tenantId)}}Zi.PROVIDER_ID="password";Zi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Zi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Fc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ws extends Fc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Er extends Ws{constructor(){super("facebook.com")}static credential(e){return ni._fromParams({providerId:Er.PROVIDER_ID,signInMethod:Er.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Er.credentialFromTaggedObject(e)}static credentialFromError(e){return Er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Er.credential(e.oauthAccessToken)}catch{return null}}}Er.FACEBOOK_SIGN_IN_METHOD="facebook.com";Er.PROVIDER_ID="facebook.com";/**
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
 */class Tr extends Ws{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ni._fromParams({providerId:Tr.PROVIDER_ID,signInMethod:Tr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Tr.credentialFromTaggedObject(e)}static credentialFromError(e){return Tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Tr.credential(t,r)}catch{return null}}}Tr.GOOGLE_SIGN_IN_METHOD="google.com";Tr.PROVIDER_ID="google.com";/**
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
 */class vr extends Ws{constructor(){super("github.com")}static credential(e){return ni._fromParams({providerId:vr.PROVIDER_ID,signInMethod:vr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vr.credentialFromTaggedObject(e)}static credentialFromError(e){return vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vr.credential(e.oauthAccessToken)}catch{return null}}}vr.GITHUB_SIGN_IN_METHOD="github.com";vr.PROVIDER_ID="github.com";/**
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
 */class Ir extends Ws{constructor(){super("twitter.com")}static credential(e,t){return ni._fromParams({providerId:Ir.PROVIDER_ID,signInMethod:Ir.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ir.credentialFromTaggedObject(e)}static credentialFromError(e){return Ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Ir.credential(t,r)}catch{return null}}}Ir.TWITTER_SIGN_IN_METHOD="twitter.com";Ir.PROVIDER_ID="twitter.com";/**
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
 */class Hi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const o=await Jn._fromIdTokenResponse(e,r,i),a=tu(r);return new Hi({user:o,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=tu(r);return new Hi({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function tu(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class wo extends nr{constructor(e,t,r,i){var o;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,wo.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new wo(e,t,r,i)}}function Bc(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?wo._fromErrorAndOperation(n,o,e,r):o})}async function Rp(n,e,t=!1){const r=await xs(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Hi._forOperation(n,"link",r)}/**
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
 */async function Sp(n,e,t=!1){const{auth:r}=n;if(Qn(r.app))return Promise.reject(Sr(r));const i="reauthenticate";try{const o=await xs(n,Bc(r,i,e,n),t);re(o.idToken,r,"internal-error");const a=Ja(o.idToken);re(a,r,"internal-error");const{sub:u}=a;return re(n.uid===u,r,"user-mismatch"),Hi._forOperation(n,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&_n(r,"user-mismatch"),o}}/**
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
 */async function jc(n,e,t=!1){if(Qn(n.app))return Promise.reject(Sr(n));const r="signIn",i=await Bc(n,r,e),o=await Hi._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(o.user),o}async function Pp(n,e){return jc(Xi(n),e)}/**
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
 */async function kp(n){const e=Xi(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function Np(n,e,t){return Qn(n.app)?Promise.reject(Sr(n)):Pp(rr(n),Zi.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&kp(n),r})}function Dp(n,e,t,r){return rr(n).onIdTokenChanged(e,t,r)}function Vp(n,e,t){return rr(n).beforeAuthStateChanged(e,t)}function Op(n,e,t,r){return rr(n).onAuthStateChanged(e,t,r)}const Ao="__sak";/**
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
 */class qc{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ao,"1"),this.storage.removeItem(Ao),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Lp=1e3,Mp=10;class zc extends qc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Lc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,u,h)=>{this.notifyListeners(a,h)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},o=this.storage.getItem(r);np()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Mp):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Lp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}zc.type="LOCAL";const xp=zc;/**
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
 */class Hc extends qc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Hc.type="SESSION";const Kc=Hc;/**
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
 */function Up(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Lo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Lo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:o}=t.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const u=Array.from(a).map(async d=>d(t.origin,o)),h=await Up(u);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:h})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Lo.receivers=[];/**
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
 */function el(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Fp{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,a;return new Promise((u,h)=>{const d=el("",20);i.port1.start();const p=setTimeout(()=>{h(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(A){const E=A;if(E.data.eventId===d)switch(E.data.status){case"ack":clearTimeout(p),o=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),u(E.data.response);break;default:clearTimeout(p),clearTimeout(o),h(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function Nn(){return window}function Bp(n){Nn().location.href=n}/**
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
 */function Gc(){return typeof Nn().WorkerGlobalScope<"u"&&typeof Nn().importScripts=="function"}async function jp(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function qp(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function zp(){return Gc()?self:null}/**
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
 */const Wc="firebaseLocalStorageDb",Hp=1,bo="firebaseLocalStorage",Qc="fbase_key";class Qs{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Mo(n,e){return n.transaction([bo],e?"readwrite":"readonly").objectStore(bo)}function Kp(){const n=indexedDB.deleteDatabase(Wc);return new Qs(n).toPromise()}function wa(){const n=indexedDB.open(Wc,Hp);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(bo,{keyPath:Qc})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(bo)?e(r):(r.close(),await Kp(),e(await wa()))})})}async function nu(n,e,t){const r=Mo(n,!0).put({[Qc]:e,value:t});return new Qs(r).toPromise()}async function Gp(n,e){const t=Mo(n,!1).get(e),r=await new Qs(t).toPromise();return r===void 0?null:r.value}function ru(n,e){const t=Mo(n,!0).delete(e);return new Qs(t).toPromise()}const Wp=800,Qp=3;class Yc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await wa(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Qp)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Gc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Lo._getInstance(zp()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await jp(),!this.activeServiceWorker)return;this.sender=new Fp(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||qp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await wa();return await nu(e,Ao,"1"),await ru(e,Ao),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>nu(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Gp(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ru(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=Mo(i,!1).getAll();return new Qs(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Wp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Yc.type="LOCAL";const Yp=Yc;new Gs(3e4,6e4);/**
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
 */function Jp(n,e){return e?$n(e):(re(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class tl extends Xa{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Bi(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Bi(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Bi(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function $p(n){return jc(n.auth,new tl(n),n.bypassAuthState)}function Xp(n){const{auth:e,user:t}=n;return re(t,e,"internal-error"),Sp(t,new tl(n),n.bypassAuthState)}async function Zp(n){const{auth:e,user:t}=n;return re(t,e,"internal-error"),Rp(t,new tl(n),n.bypassAuthState)}/**
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
 */class Jc{constructor(e,t,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:o,error:a,type:u}=e;if(a){this.reject(a);return}const h={auth:this.auth,requestUri:t,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(h))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return $p;case"linkViaPopup":case"linkViaRedirect":return Zp;case"reauthViaPopup":case"reauthViaRedirect":return Xp;default:_n(this.auth,"internal-error")}}resolve(e){er(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){er(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const em=new Gs(2e3,1e4);class xi extends Jc{constructor(e,t,r,i,o){super(e,t,i,o),this.provider=r,this.authWindow=null,this.pollId=null,xi.currentPopupAction&&xi.currentPopupAction.cancel(),xi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return re(e,this.auth,"internal-error"),e}async onExecution(){er(this.filter.length===1,"Popup operations only handle one event");const e=el();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(kn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(kn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,xi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(kn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,em.get())};e()}}xi.currentPopupAction=null;/**
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
 */const tm="pendingRedirect",ho=new Map;class nm extends Jc{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=ho.get(this.auth._key());if(!e){try{const r=await rm(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}ho.set(this.auth._key(),e)}return this.bypassAuthState||ho.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function rm(n,e){const t=om(e),r=sm(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function im(n,e){ho.set(n._key(),e)}function sm(n){return $n(n._redirectPersistence)}function om(n){return co(tm,n.config.apiKey,n.name)}async function am(n,e,t=!1){if(Qn(n.app))return Promise.reject(Sr(n));const r=Xi(n),i=Jp(r,e),a=await new nm(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const lm=10*60*1e3;class um{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!cm(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!$c(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(kn(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=lm&&this.cachedEventUids.clear(),this.cachedEventUids.has(iu(e))}saveEventToCache(e){this.cachedEventUids.add(iu(e)),this.lastProcessedEventTime=Date.now()}}function iu(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function $c({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function cm(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $c(n);default:return!1}}/**
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
 */async function hm(n,e={}){return Dr(n,"GET","/v1/projects",e)}/**
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
 */const dm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,fm=/^https?/;async function pm(n){if(n.config.emulator)return;const{authorizedDomains:e}=await hm(n);for(const t of e)try{if(mm(t))return}catch{}_n(n,"unauthorized-domain")}function mm(n){const e=va(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!fm.test(t))return!1;if(dm.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const gm=new Gs(3e4,6e4);function su(){const n=Nn().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function _m(n){return new Promise((e,t)=>{var r,i,o;function a(){su(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{su(),t(kn(n,"network-request-failed"))},timeout:gm.get()})}if(!((i=(r=Nn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=Nn().gapi)===null||o===void 0)&&o.load)a();else{const u=hp("iframefcb");return Nn()[u]=()=>{gapi.load?a():t(kn(n,"network-request-failed"))},xc(`${cp()}?onload=${u}`).catch(h=>t(h))}}).catch(e=>{throw fo=null,e})}let fo=null;function ym(n){return fo=fo||_m(n),fo}/**
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
 */const Em=new Gs(5e3,15e3),Tm="__/auth/iframe",vm="emulator/auth/iframe",Im={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},wm=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Am(n){const e=n.config;re(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Ya(e,vm):`https://${n.config.authDomain}/${Tm}`,r={apiKey:e.apiKey,appName:n.name,v:$i},i=wm.get(n.config.apiHost);i&&(r.eid=i);const o=n._getFrameworks();return o.length&&(r.fw=o.join(",")),`${t}?${Ks(r).slice(1)}`}async function bm(n){const e=await ym(n),t=Nn().gapi;return re(t,n,"internal-error"),e.open({where:document.body,url:Am(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Im,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const a=kn(n,"network-request-failed"),u=Nn().setTimeout(()=>{o(a)},Em.get());function h(){Nn().clearTimeout(u),i(r)}r.ping(h).then(h,()=>{o(a)})}))}/**
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
 */const Cm={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Rm=500,Sm=600,Pm="_blank",km="http://localhost";class ou{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Nm(n,e,t,r=Rm,i=Sm){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let u="";const h=Object.assign(Object.assign({},Cm),{width:r.toString(),height:i.toString(),top:o,left:a}),d=yt().toLowerCase();t&&(u=kc(d)?Pm:t),Sc(d)&&(e=e||km,h.scrollbars="yes");const p=Object.entries(h).reduce((E,[P,O])=>`${E}${P}=${O},`,"");if(tp(d)&&u!=="_self")return Dm(e||"",u),new ou(null);const A=window.open(e||"",u,p);re(A,n,"popup-blocked");try{A.focus()}catch{}return new ou(A)}function Dm(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const Vm="__/auth/handler",Om="emulator/auth/handler",Lm=encodeURIComponent("fac");async function au(n,e,t,r,i,o){re(n.config.authDomain,n,"auth-domain-config-required"),re(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:$i,eventId:i};if(e instanceof Fc){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Id(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,A]of Object.entries({}))a[p]=A}if(e instanceof Ws){const p=e.getScopes().filter(A=>A!=="");p.length>0&&(a.scopes=p.join(","))}n.tenantId&&(a.tid=n.tenantId);const u=a;for(const p of Object.keys(u))u[p]===void 0&&delete u[p];const h=await n._getAppCheckToken(),d=h?`#${Lm}=${encodeURIComponent(h)}`:"";return`${Mm(n)}?${Ks(u).slice(1)}${d}`}function Mm({config:n}){return n.emulator?Ya(n,Om):`https://${n.authDomain}/${Vm}`}/**
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
 */const ca="webStorageSupport";class xm{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Kc,this._completeRedirectFn=am,this._overrideRedirectResult=im}async _openPopup(e,t,r,i){var o;er((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const a=await au(e,t,r,va(),i);return Nm(e,a,el())}async _openRedirect(e,t,r,i){await this._originValidation(e);const o=await au(e,t,r,va(),i);return Bp(o),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:o}=this.eventManagers[t];return i?Promise.resolve(i):(er(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await bm(e),r=new um(e);return t.register("authEvent",i=>(re(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ca,{type:ca},i=>{var o;const a=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[ca];a!==void 0&&t(!!a),_n(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=pm(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Lc()||Pc()||$a()}}const Um=xm;var lu="@firebase/auth",uu="1.7.9";/**
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
 */class Fm{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){re(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Bm(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function jm(n){zi(new ti("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:u}=r.options;re(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const h={apiKey:a,authDomain:u,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Mc(n)},d=new ap(r,i,o,h);return gp(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),zi(new ti("auth-internal",e=>{const t=Xi(e.getProvider("auth").getImmediate());return(r=>new Fm(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Rr(lu,uu,Bm(n)),Rr(lu,uu,"esm2017")}/**
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
 */const qm=5*60,zm=dc("authIdTokenMaxAge")||qm;let cu=null;const Hm=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>zm)return;const i=t==null?void 0:t.token;cu!==i&&(cu=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Km(n=gc()){const e=Ga(n,"auth");if(e.isInitialized())return e.getImmediate();const t=mp(n,{popupRedirectResolver:Um,persistence:[Yp,xp,Kc]}),r=dc("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const a=Hm(o.toString());Vp(t,a,()=>a(t.currentUser)),Dp(t,u=>a(u))}}const i=cc("auth");return i&&_p(t,`http://${i}`),t}function Gm(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}lp({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const o=kn("internal-error");o.customData=i,t(o)},r.type="text/javascript",r.charset="UTF-8",Gm().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});jm("Browser");var hu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Xr,Xc;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,m){function _(){}_.prototype=m.prototype,T.D=m.prototype,T.prototype=new _,T.prototype.constructor=T,T.C=function(v,I,w){for(var y=Array(arguments.length-2),ie=2;ie<arguments.length;ie++)y[ie-2]=arguments[ie];return m.prototype[I].apply(v,y)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,m,_){_||(_=0);var v=Array(16);if(typeof m=="string")for(var I=0;16>I;++I)v[I]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(I=0;16>I;++I)v[I]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=T.g[0],_=T.g[1],I=T.g[2];var w=T.g[3],y=m+(w^_&(I^w))+v[0]+3614090360&4294967295;m=_+(y<<7&4294967295|y>>>25),y=w+(I^m&(_^I))+v[1]+3905402710&4294967295,w=m+(y<<12&4294967295|y>>>20),y=I+(_^w&(m^_))+v[2]+606105819&4294967295,I=w+(y<<17&4294967295|y>>>15),y=_+(m^I&(w^m))+v[3]+3250441966&4294967295,_=I+(y<<22&4294967295|y>>>10),y=m+(w^_&(I^w))+v[4]+4118548399&4294967295,m=_+(y<<7&4294967295|y>>>25),y=w+(I^m&(_^I))+v[5]+1200080426&4294967295,w=m+(y<<12&4294967295|y>>>20),y=I+(_^w&(m^_))+v[6]+2821735955&4294967295,I=w+(y<<17&4294967295|y>>>15),y=_+(m^I&(w^m))+v[7]+4249261313&4294967295,_=I+(y<<22&4294967295|y>>>10),y=m+(w^_&(I^w))+v[8]+1770035416&4294967295,m=_+(y<<7&4294967295|y>>>25),y=w+(I^m&(_^I))+v[9]+2336552879&4294967295,w=m+(y<<12&4294967295|y>>>20),y=I+(_^w&(m^_))+v[10]+4294925233&4294967295,I=w+(y<<17&4294967295|y>>>15),y=_+(m^I&(w^m))+v[11]+2304563134&4294967295,_=I+(y<<22&4294967295|y>>>10),y=m+(w^_&(I^w))+v[12]+1804603682&4294967295,m=_+(y<<7&4294967295|y>>>25),y=w+(I^m&(_^I))+v[13]+4254626195&4294967295,w=m+(y<<12&4294967295|y>>>20),y=I+(_^w&(m^_))+v[14]+2792965006&4294967295,I=w+(y<<17&4294967295|y>>>15),y=_+(m^I&(w^m))+v[15]+1236535329&4294967295,_=I+(y<<22&4294967295|y>>>10),y=m+(I^w&(_^I))+v[1]+4129170786&4294967295,m=_+(y<<5&4294967295|y>>>27),y=w+(_^I&(m^_))+v[6]+3225465664&4294967295,w=m+(y<<9&4294967295|y>>>23),y=I+(m^_&(w^m))+v[11]+643717713&4294967295,I=w+(y<<14&4294967295|y>>>18),y=_+(w^m&(I^w))+v[0]+3921069994&4294967295,_=I+(y<<20&4294967295|y>>>12),y=m+(I^w&(_^I))+v[5]+3593408605&4294967295,m=_+(y<<5&4294967295|y>>>27),y=w+(_^I&(m^_))+v[10]+38016083&4294967295,w=m+(y<<9&4294967295|y>>>23),y=I+(m^_&(w^m))+v[15]+3634488961&4294967295,I=w+(y<<14&4294967295|y>>>18),y=_+(w^m&(I^w))+v[4]+3889429448&4294967295,_=I+(y<<20&4294967295|y>>>12),y=m+(I^w&(_^I))+v[9]+568446438&4294967295,m=_+(y<<5&4294967295|y>>>27),y=w+(_^I&(m^_))+v[14]+3275163606&4294967295,w=m+(y<<9&4294967295|y>>>23),y=I+(m^_&(w^m))+v[3]+4107603335&4294967295,I=w+(y<<14&4294967295|y>>>18),y=_+(w^m&(I^w))+v[8]+1163531501&4294967295,_=I+(y<<20&4294967295|y>>>12),y=m+(I^w&(_^I))+v[13]+2850285829&4294967295,m=_+(y<<5&4294967295|y>>>27),y=w+(_^I&(m^_))+v[2]+4243563512&4294967295,w=m+(y<<9&4294967295|y>>>23),y=I+(m^_&(w^m))+v[7]+1735328473&4294967295,I=w+(y<<14&4294967295|y>>>18),y=_+(w^m&(I^w))+v[12]+2368359562&4294967295,_=I+(y<<20&4294967295|y>>>12),y=m+(_^I^w)+v[5]+4294588738&4294967295,m=_+(y<<4&4294967295|y>>>28),y=w+(m^_^I)+v[8]+2272392833&4294967295,w=m+(y<<11&4294967295|y>>>21),y=I+(w^m^_)+v[11]+1839030562&4294967295,I=w+(y<<16&4294967295|y>>>16),y=_+(I^w^m)+v[14]+4259657740&4294967295,_=I+(y<<23&4294967295|y>>>9),y=m+(_^I^w)+v[1]+2763975236&4294967295,m=_+(y<<4&4294967295|y>>>28),y=w+(m^_^I)+v[4]+1272893353&4294967295,w=m+(y<<11&4294967295|y>>>21),y=I+(w^m^_)+v[7]+4139469664&4294967295,I=w+(y<<16&4294967295|y>>>16),y=_+(I^w^m)+v[10]+3200236656&4294967295,_=I+(y<<23&4294967295|y>>>9),y=m+(_^I^w)+v[13]+681279174&4294967295,m=_+(y<<4&4294967295|y>>>28),y=w+(m^_^I)+v[0]+3936430074&4294967295,w=m+(y<<11&4294967295|y>>>21),y=I+(w^m^_)+v[3]+3572445317&4294967295,I=w+(y<<16&4294967295|y>>>16),y=_+(I^w^m)+v[6]+76029189&4294967295,_=I+(y<<23&4294967295|y>>>9),y=m+(_^I^w)+v[9]+3654602809&4294967295,m=_+(y<<4&4294967295|y>>>28),y=w+(m^_^I)+v[12]+3873151461&4294967295,w=m+(y<<11&4294967295|y>>>21),y=I+(w^m^_)+v[15]+530742520&4294967295,I=w+(y<<16&4294967295|y>>>16),y=_+(I^w^m)+v[2]+3299628645&4294967295,_=I+(y<<23&4294967295|y>>>9),y=m+(I^(_|~w))+v[0]+4096336452&4294967295,m=_+(y<<6&4294967295|y>>>26),y=w+(_^(m|~I))+v[7]+1126891415&4294967295,w=m+(y<<10&4294967295|y>>>22),y=I+(m^(w|~_))+v[14]+2878612391&4294967295,I=w+(y<<15&4294967295|y>>>17),y=_+(w^(I|~m))+v[5]+4237533241&4294967295,_=I+(y<<21&4294967295|y>>>11),y=m+(I^(_|~w))+v[12]+1700485571&4294967295,m=_+(y<<6&4294967295|y>>>26),y=w+(_^(m|~I))+v[3]+2399980690&4294967295,w=m+(y<<10&4294967295|y>>>22),y=I+(m^(w|~_))+v[10]+4293915773&4294967295,I=w+(y<<15&4294967295|y>>>17),y=_+(w^(I|~m))+v[1]+2240044497&4294967295,_=I+(y<<21&4294967295|y>>>11),y=m+(I^(_|~w))+v[8]+1873313359&4294967295,m=_+(y<<6&4294967295|y>>>26),y=w+(_^(m|~I))+v[15]+4264355552&4294967295,w=m+(y<<10&4294967295|y>>>22),y=I+(m^(w|~_))+v[6]+2734768916&4294967295,I=w+(y<<15&4294967295|y>>>17),y=_+(w^(I|~m))+v[13]+1309151649&4294967295,_=I+(y<<21&4294967295|y>>>11),y=m+(I^(_|~w))+v[4]+4149444226&4294967295,m=_+(y<<6&4294967295|y>>>26),y=w+(_^(m|~I))+v[11]+3174756917&4294967295,w=m+(y<<10&4294967295|y>>>22),y=I+(m^(w|~_))+v[2]+718787259&4294967295,I=w+(y<<15&4294967295|y>>>17),y=_+(w^(I|~m))+v[9]+3951481745&4294967295,T.g[0]=T.g[0]+m&4294967295,T.g[1]=T.g[1]+(I+(y<<21&4294967295|y>>>11))&4294967295,T.g[2]=T.g[2]+I&4294967295,T.g[3]=T.g[3]+w&4294967295}r.prototype.u=function(T,m){m===void 0&&(m=T.length);for(var _=m-this.blockSize,v=this.B,I=this.h,w=0;w<m;){if(I==0)for(;w<=_;)i(this,T,w),w+=this.blockSize;if(typeof T=="string"){for(;w<m;)if(v[I++]=T.charCodeAt(w++),I==this.blockSize){i(this,v),I=0;break}}else for(;w<m;)if(v[I++]=T[w++],I==this.blockSize){i(this,v),I=0;break}}this.h=I,this.o+=m},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var m=1;m<T.length-8;++m)T[m]=0;var _=8*this.o;for(m=T.length-8;m<T.length;++m)T[m]=_&255,_/=256;for(this.u(T),T=Array(16),m=_=0;4>m;++m)for(var v=0;32>v;v+=8)T[_++]=this.g[m]>>>v&255;return T};function o(T,m){var _=u;return Object.prototype.hasOwnProperty.call(_,T)?_[T]:_[T]=m(T)}function a(T,m){this.h=m;for(var _=[],v=!0,I=T.length-1;0<=I;I--){var w=T[I]|0;v&&w==m||(_[I]=w,v=!1)}this.g=_}var u={};function h(T){return-128<=T&&128>T?o(T,function(m){return new a([m|0],0>m?-1:0)}):new a([T|0],0>T?-1:0)}function d(T){if(isNaN(T)||!isFinite(T))return A;if(0>T)return k(d(-T));for(var m=[],_=1,v=0;T>=_;v++)m[v]=T/_|0,_*=4294967296;return new a(m,0)}function p(T,m){if(T.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(T.charAt(0)=="-")return k(p(T.substring(1),m));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=d(Math.pow(m,8)),v=A,I=0;I<T.length;I+=8){var w=Math.min(8,T.length-I),y=parseInt(T.substring(I,I+w),m);8>w?(w=d(Math.pow(m,w)),v=v.j(w).add(d(y))):(v=v.j(_),v=v.add(d(y)))}return v}var A=h(0),E=h(1),P=h(16777216);n=a.prototype,n.m=function(){if(M(this))return-k(this).m();for(var T=0,m=1,_=0;_<this.g.length;_++){var v=this.i(_);T+=(0<=v?v:4294967296+v)*m,m*=4294967296}return T},n.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(O(this))return"0";if(M(this))return"-"+k(this).toString(T);for(var m=d(Math.pow(T,6)),_=this,v="";;){var I=z(_,m).g;_=$(_,I.j(m));var w=((0<_.g.length?_.g[0]:_.h)>>>0).toString(T);if(_=I,O(_))return w+v;for(;6>w.length;)w="0"+w;v=w+v}},n.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function O(T){if(T.h!=0)return!1;for(var m=0;m<T.g.length;m++)if(T.g[m]!=0)return!1;return!0}function M(T){return T.h==-1}n.l=function(T){return T=$(this,T),M(T)?-1:O(T)?0:1};function k(T){for(var m=T.g.length,_=[],v=0;v<m;v++)_[v]=~T.g[v];return new a(_,~T.h).add(E)}n.abs=function(){return M(this)?k(this):this},n.add=function(T){for(var m=Math.max(this.g.length,T.g.length),_=[],v=0,I=0;I<=m;I++){var w=v+(this.i(I)&65535)+(T.i(I)&65535),y=(w>>>16)+(this.i(I)>>>16)+(T.i(I)>>>16);v=y>>>16,w&=65535,y&=65535,_[I]=y<<16|w}return new a(_,_[_.length-1]&-2147483648?-1:0)};function $(T,m){return T.add(k(m))}n.j=function(T){if(O(this)||O(T))return A;if(M(this))return M(T)?k(this).j(k(T)):k(k(this).j(T));if(M(T))return k(this.j(k(T)));if(0>this.l(P)&&0>T.l(P))return d(this.m()*T.m());for(var m=this.g.length+T.g.length,_=[],v=0;v<2*m;v++)_[v]=0;for(v=0;v<this.g.length;v++)for(var I=0;I<T.g.length;I++){var w=this.i(v)>>>16,y=this.i(v)&65535,ie=T.i(I)>>>16,je=T.i(I)&65535;_[2*v+2*I]+=y*je,Y(_,2*v+2*I),_[2*v+2*I+1]+=w*je,Y(_,2*v+2*I+1),_[2*v+2*I+1]+=y*ie,Y(_,2*v+2*I+1),_[2*v+2*I+2]+=w*ie,Y(_,2*v+2*I+2)}for(v=0;v<m;v++)_[v]=_[2*v+1]<<16|_[2*v];for(v=m;v<2*m;v++)_[v]=0;return new a(_,0)};function Y(T,m){for(;(T[m]&65535)!=T[m];)T[m+1]+=T[m]>>>16,T[m]&=65535,m++}function H(T,m){this.g=T,this.h=m}function z(T,m){if(O(m))throw Error("division by zero");if(O(T))return new H(A,A);if(M(T))return m=z(k(T),m),new H(k(m.g),k(m.h));if(M(m))return m=z(T,k(m)),new H(k(m.g),m.h);if(30<T.g.length){if(M(T)||M(m))throw Error("slowDivide_ only works with positive integers.");for(var _=E,v=m;0>=v.l(T);)_=F(_),v=F(v);var I=j(_,1),w=j(v,1);for(v=j(v,2),_=j(_,2);!O(v);){var y=w.add(v);0>=y.l(T)&&(I=I.add(_),w=y),v=j(v,1),_=j(_,1)}return m=$(T,I.j(m)),new H(I,m)}for(I=A;0<=T.l(m);){for(_=Math.max(1,Math.floor(T.m()/m.m())),v=Math.ceil(Math.log(_)/Math.LN2),v=48>=v?1:Math.pow(2,v-48),w=d(_),y=w.j(m);M(y)||0<y.l(T);)_-=v,w=d(_),y=w.j(m);O(w)&&(w=E),I=I.add(w),T=$(T,y)}return new H(I,T)}n.A=function(T){return z(this,T).h},n.and=function(T){for(var m=Math.max(this.g.length,T.g.length),_=[],v=0;v<m;v++)_[v]=this.i(v)&T.i(v);return new a(_,this.h&T.h)},n.or=function(T){for(var m=Math.max(this.g.length,T.g.length),_=[],v=0;v<m;v++)_[v]=this.i(v)|T.i(v);return new a(_,this.h|T.h)},n.xor=function(T){for(var m=Math.max(this.g.length,T.g.length),_=[],v=0;v<m;v++)_[v]=this.i(v)^T.i(v);return new a(_,this.h^T.h)};function F(T){for(var m=T.g.length+1,_=[],v=0;v<m;v++)_[v]=T.i(v)<<1|T.i(v-1)>>>31;return new a(_,T.h)}function j(T,m){var _=m>>5;m%=32;for(var v=T.g.length-_,I=[],w=0;w<v;w++)I[w]=0<m?T.i(w+_)>>>m|T.i(w+_+1)<<32-m:T.i(w+_);return new a(I,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Xc=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,Xr=a}).apply(typeof hu<"u"?hu:typeof self<"u"?self:typeof window<"u"?window:{});var so=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Zc,Ss,eh,po,Aa,th,nh,rh;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,l,c){return s==Array.prototype||s==Object.prototype||(s[l]=c.value),s};function t(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof so=="object"&&so];for(var l=0;l<s.length;++l){var c=s[l];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var r=t(this);function i(s,l){if(l)e:{var c=r;s=s.split(".");for(var f=0;f<s.length-1;f++){var b=s[f];if(!(b in c))break e;c=c[b]}s=s[s.length-1],f=c[s],l=l(f),l!=f&&l!=null&&e(c,s,{configurable:!0,writable:!0,value:l})}}function o(s,l){s instanceof String&&(s+="");var c=0,f=!1,b={next:function(){if(!f&&c<s.length){var S=c++;return{value:l(S,s[S]),done:!1}}return f=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}i("Array.prototype.values",function(s){return s||function(){return o(this,function(l,c){return c})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function h(s){var l=typeof s;return l=l!="object"?l:s?Array.isArray(s)?"array":l:"null",l=="array"||l=="object"&&typeof s.length=="number"}function d(s){var l=typeof s;return l=="object"&&s!=null||l=="function"}function p(s,l,c){return s.call.apply(s.bind,arguments)}function A(s,l,c){if(!s)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,f),s.apply(l,b)}}return function(){return s.apply(l,arguments)}}function E(s,l,c){return E=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:A,E.apply(null,arguments)}function P(s,l){var c=Array.prototype.slice.call(arguments,1);return function(){var f=c.slice();return f.push.apply(f,arguments),s.apply(this,f)}}function O(s,l){function c(){}c.prototype=l.prototype,s.aa=l.prototype,s.prototype=new c,s.prototype.constructor=s,s.Qb=function(f,b,S){for(var x=Array(arguments.length-2),oe=2;oe<arguments.length;oe++)x[oe-2]=arguments[oe];return l.prototype[b].apply(f,x)}}function M(s){const l=s.length;if(0<l){const c=Array(l);for(let f=0;f<l;f++)c[f]=s[f];return c}return[]}function k(s,l){for(let c=1;c<arguments.length;c++){const f=arguments[c];if(h(f)){const b=s.length||0,S=f.length||0;s.length=b+S;for(let x=0;x<S;x++)s[b+x]=f[x]}else s.push(f)}}class ${constructor(l,c){this.i=l,this.j=c,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function Y(s){return/^[\s\xa0]*$/.test(s)}function H(){var s=u.navigator;return s&&(s=s.userAgent)?s:""}function z(s){return z[" "](s),s}z[" "]=function(){};var F=H().indexOf("Gecko")!=-1&&!(H().toLowerCase().indexOf("webkit")!=-1&&H().indexOf("Edge")==-1)&&!(H().indexOf("Trident")!=-1||H().indexOf("MSIE")!=-1)&&H().indexOf("Edge")==-1;function j(s,l,c){for(const f in s)l.call(c,s[f],f,s)}function T(s,l){for(const c in s)l.call(void 0,s[c],c,s)}function m(s){const l={};for(const c in s)l[c]=s[c];return l}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function v(s,l){let c,f;for(let b=1;b<arguments.length;b++){f=arguments[b];for(c in f)s[c]=f[c];for(let S=0;S<_.length;S++)c=_[S],Object.prototype.hasOwnProperty.call(f,c)&&(s[c]=f[c])}}function I(s){var l=1;s=s.split(":");const c=[];for(;0<l&&s.length;)c.push(s.shift()),l--;return s.length&&c.push(s.join(":")),c}function w(s){u.setTimeout(()=>{throw s},0)}function y(){var s=De;let l=null;return s.g&&(l=s.g,s.g=s.g.next,s.g||(s.h=null),l.next=null),l}class ie{constructor(){this.h=this.g=null}add(l,c){const f=je.get();f.set(l,c),this.h?this.h.next=f:this.g=f,this.h=f}}var je=new $(()=>new Et,s=>s.reset());class Et{constructor(){this.next=this.g=this.h=null}set(l,c){this.h=l,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let W,te=!1,De=new ie,Me=()=>{const s=u.Promise.resolve(void 0);W=()=>{s.then(yn)}};var yn=()=>{for(var s;s=y();){try{s.h.call(s.g)}catch(c){w(c)}var l=je;l.j(s),100>l.h&&(l.h++,s.next=l.g,l.g=s)}te=!1};function $e(){this.s=this.s,this.C=this.C}$e.prototype.s=!1,$e.prototype.ma=function(){this.s||(this.s=!0,this.N())},$e.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function we(s,l){this.type=s,this.g=this.target=l,this.defaultPrevented=!1}we.prototype.h=function(){this.defaultPrevented=!0};var Ut=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var s=!1,l=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const c=()=>{};u.addEventListener("test",c,l),u.removeEventListener("test",c,l)}catch{}return s}();function ct(s,l){if(we.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var c=this.type=s.type,f=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=l,l=s.relatedTarget){if(F){e:{try{z(l.nodeName);var b=!0;break e}catch{}b=!1}b||(l=null)}}else c=="mouseover"?l=s.fromElement:c=="mouseout"&&(l=s.toElement);this.relatedTarget=l,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:Tt[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&ct.aa.h.call(this)}}O(ct,we);var Tt={2:"touch",3:"pen",4:"mouse"};ct.prototype.h=function(){ct.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var nt="closure_listenable_"+(1e6*Math.random()|0),kt=0;function ht(s,l,c,f,b){this.listener=s,this.proxy=null,this.src=l,this.type=c,this.capture=!!f,this.ha=b,this.key=++kt,this.da=this.fa=!1}function Nt(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function dt(s){this.src=s,this.g={},this.h=0}dt.prototype.add=function(s,l,c,f,b){var S=s.toString();s=this.g[S],s||(s=this.g[S]=[],this.h++);var x=Xe(s,l,f,b);return-1<x?(l=s[x],c||(l.fa=!1)):(l=new ht(l,this.src,S,!!f,b),l.fa=c,s.push(l)),l};function vt(s,l){var c=l.type;if(c in s.g){var f=s.g[c],b=Array.prototype.indexOf.call(f,l,void 0),S;(S=0<=b)&&Array.prototype.splice.call(f,b,1),S&&(Nt(l),s.g[c].length==0&&(delete s.g[c],s.h--))}}function Xe(s,l,c,f){for(var b=0;b<s.length;++b){var S=s[b];if(!S.da&&S.listener==l&&S.capture==!!c&&S.ha==f)return b}return-1}var zt="closure_lm_"+(1e6*Math.random()|0),rt={};function Ve(s,l,c,f,b){if(Array.isArray(l)){for(var S=0;S<l.length;S++)Ve(s,l[S],c,f,b);return null}return c=xe(c),s&&s[nt]?s.K(l,c,d(f)?!!f.capture:!1,b):En(s,l,c,!1,f,b)}function En(s,l,c,f,b,S){if(!l)throw Error("Invalid event type");var x=d(b)?!!b.capture:!!b,oe=ge(s);if(oe||(s[zt]=oe=new dt(s)),c=oe.add(l,c,f,x,S),c.proxy)return c;if(f=tn(),c.proxy=f,f.src=s,f.listener=c,s.addEventListener)Ut||(b=x),b===void 0&&(b=!1),s.addEventListener(l.toString(),f,b);else if(s.attachEvent)s.attachEvent(Ht(l.toString()),f);else if(s.addListener&&s.removeListener)s.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return c}function tn(){function s(c){return l.call(s.src,s.listener,c)}const l=Re;return s}function ft(s,l,c,f,b){if(Array.isArray(l))for(var S=0;S<l.length;S++)ft(s,l[S],c,f,b);else f=d(f)?!!f.capture:!!f,c=xe(c),s&&s[nt]?(s=s.i,l=String(l).toString(),l in s.g&&(S=s.g[l],c=Xe(S,c,f,b),-1<c&&(Nt(S[c]),Array.prototype.splice.call(S,c,1),S.length==0&&(delete s.g[l],s.h--)))):s&&(s=ge(s))&&(l=s.g[l.toString()],s=-1,l&&(s=Xe(l,c,f,b)),(c=-1<s?l[s]:null)&&We(c))}function We(s){if(typeof s!="number"&&s&&!s.da){var l=s.src;if(l&&l[nt])vt(l.i,s);else{var c=s.type,f=s.proxy;l.removeEventListener?l.removeEventListener(c,f,s.capture):l.detachEvent?l.detachEvent(Ht(c),f):l.addListener&&l.removeListener&&l.removeListener(f),(c=ge(l))?(vt(c,s),c.h==0&&(c.src=null,l[zt]=null)):Nt(s)}}}function Ht(s){return s in rt?rt[s]:rt[s]="on"+s}function Re(s,l){if(s.da)s=!0;else{l=new ct(l,this);var c=s.listener,f=s.ha||s.src;s.fa&&We(s),s=c.call(f,l)}return s}function ge(s){return s=s[zt],s instanceof dt?s:null}var Dt="__closure_events_fn_"+(1e9*Math.random()>>>0);function xe(s){return typeof s=="function"?s:(s[Dt]||(s[Dt]=function(l){return s.handleEvent(l)}),s[Dt])}function Ce(){$e.call(this),this.i=new dt(this),this.M=this,this.F=null}O(Ce,$e),Ce.prototype[nt]=!0,Ce.prototype.removeEventListener=function(s,l,c,f){ft(this,s,l,c,f)};function Ne(s,l){var c,f=s.F;if(f)for(c=[];f;f=f.F)c.push(f);if(s=s.M,f=l.type||l,typeof l=="string")l=new we(l,s);else if(l instanceof we)l.target=l.target||s;else{var b=l;l=new we(f,s),v(l,b)}if(b=!0,c)for(var S=c.length-1;0<=S;S--){var x=l.g=c[S];b=It(x,f,!0,l)&&b}if(x=l.g=s,b=It(x,f,!0,l)&&b,b=It(x,f,!1,l)&&b,c)for(S=0;S<c.length;S++)x=l.g=c[S],b=It(x,f,!1,l)&&b}Ce.prototype.N=function(){if(Ce.aa.N.call(this),this.i){var s=this.i,l;for(l in s.g){for(var c=s.g[l],f=0;f<c.length;f++)Nt(c[f]);delete s.g[l],s.h--}}this.F=null},Ce.prototype.K=function(s,l,c,f){return this.i.add(String(s),l,!1,c,f)},Ce.prototype.L=function(s,l,c,f){return this.i.add(String(s),l,!0,c,f)};function It(s,l,c,f){if(l=s.i.g[String(l)],!l)return!0;l=l.concat();for(var b=!0,S=0;S<l.length;++S){var x=l[S];if(x&&!x.da&&x.capture==c){var oe=x.listener,Ue=x.ha||x.src;x.fa&&vt(s.i,x),b=oe.call(Ue,f)!==!1&&b}}return b&&!f.defaultPrevented}function Ee(s,l,c){if(typeof s=="function")c&&(s=E(s,c));else if(s&&typeof s.handleEvent=="function")s=E(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:u.setTimeout(s,l||0)}function qe(s){s.g=Ee(()=>{s.g=null,s.i&&(s.i=!1,qe(s))},s.l);const l=s.h;s.h=null,s.m.apply(null,l)}class ze extends $e{constructor(l,c){super(),this.m=l,this.l=c,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:qe(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function He(s){$e.call(this),this.h=s,this.g={}}O(He,$e);var Ln=[];function nn(s){j(s.g,function(l,c){this.g.hasOwnProperty(c)&&We(l)},s),s.g={}}He.prototype.N=function(){He.aa.N.call(this),nn(this)},He.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Tn=u.JSON.stringify,Vt=u.JSON.parse,Vr=class{stringify(s){return u.JSON.stringify(s,void 0)}parse(s){return u.JSON.parse(s,void 0)}};function Or(){}Or.prototype.h=null;function Kt(s){return s.h||(s.h=s.i())}function ai(){}var Mn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Lr(){we.call(this,"d")}O(Lr,we);function rn(){we.call(this,"c")}O(rn,we);var vn={},li=null;function Ot(){return li=li||new Ce}vn.La="serverreachability";function ui(s){we.call(this,vn.La,s)}O(ui,we);function xn(s){const l=Ot();Ne(l,new ui(l))}vn.STAT_EVENT="statevent";function ci(s,l){we.call(this,vn.STAT_EVENT,s),this.stat=l}O(ci,we);function q(s){const l=Ot();Ne(l,new ci(l,s))}vn.Ma="timingevent";function Un(s,l){we.call(this,vn.Ma,s),this.size=l}O(Un,we);function ir(s,l){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){s()},l)}function Fn(){this.g=!0}Fn.prototype.xa=function(){this.g=!1};function Bn(s,l,c,f,b,S){s.info(function(){if(s.g)if(S)for(var x="",oe=S.split("&"),Ue=0;Ue<oe.length;Ue++){var he=oe[Ue].split("=");if(1<he.length){var ke=he[0];he=he[1];var _e=ke.split("_");x=2<=_e.length&&_e[1]=="type"?x+(ke+"="+he+"&"):x+(ke+"=redacted&")}}else x=null;else x=S;return"XMLHTTP REQ ("+f+") [attempt "+b+"]: "+l+`
`+c+`
`+x})}function Zs(s,l,c,f,b,S,x){s.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+b+"]: "+l+`
`+c+`
`+S+" "+x})}function In(s,l,c,f){s.info(function(){return"XMLHTTP TEXT ("+l+"): "+rs(s,c)+(f?" "+f:"")})}function sn(s,l){s.info(function(){return"TIMEOUT: "+l})}Fn.prototype.info=function(){};function rs(s,l){if(!s.g)return l;if(!l)return null;try{var c=JSON.parse(l);if(c){for(s=0;s<c.length;s++)if(Array.isArray(c[s])){var f=c[s];if(!(2>f.length)){var b=f[1];if(Array.isArray(b)&&!(1>b.length)){var S=b[0];if(S!="noop"&&S!="stop"&&S!="close")for(var x=1;x<b.length;x++)b[x]=""}}}}return Tn(c)}catch{return l}}var sr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},hi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},on;function Mr(){}O(Mr,Or),Mr.prototype.g=function(){return new XMLHttpRequest},Mr.prototype.i=function(){return{}},on=new Mr;function Gt(s,l,c,f){this.j=s,this.i=l,this.l=c,this.R=f||1,this.U=new He(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Wt}function Wt(){this.i=null,this.g="",this.h=!1}var di={},xr={};function Ur(s,l,c){s.L=1,s.v=ar(it(l)),s.m=c,s.P=!0,wn(s,null)}function wn(s,l){s.F=Date.now(),Lt(s),s.A=it(s.v);var c=s.A,f=s.R;Array.isArray(f)||(f=[String(f)]),Ii(c.i,"t",f),s.C=0,c=s.j.J,s.h=new Wt,s.g=Pi(s.j,c?l:null,!s.m),0<s.O&&(s.M=new ze(E(s.Y,s,s.g),s.O)),l=s.U,c=s.g,f=s.ca;var b="readystatechange";Array.isArray(b)||(b&&(Ln[0]=b.toString()),b=Ln);for(var S=0;S<b.length;S++){var x=Ve(c,b[S],f||l.handleEvent,!1,l.h||l);if(!x)break;l.g[x.key]=x}l=s.H?m(s.H):{},s.m?(s.u||(s.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,l)):(s.u="GET",s.g.ea(s.A,s.u,null,l)),xn(),Bn(s.i,s.u,s.A,s.l,s.R,s.m)}Gt.prototype.ca=function(s){s=s.target;const l=this.M;l&&Qe(s)==3?l.j():this.Y(s)},Gt.prototype.Y=function(s){try{if(s==this.g)e:{const _e=Qe(this.g);var l=this.g.Ba();const Rn=this.g.Z();if(!(3>_e)&&(_e!=3||this.g&&(this.h.h||this.g.oa()||Es(this.g)))){this.J||_e!=4||l==7||(l==8||0>=Rn?xn(3):xn(2)),Fr(this);var c=this.g.Z();this.X=c;t:if(is(this)){var f=Es(this.g);s="";var b=f.length,S=Qe(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){wt(this),jn(this);var x="";break t}this.h.i=new u.TextDecoder}for(l=0;l<b;l++)this.h.h=!0,s+=this.h.i.decode(f[l],{stream:!(S&&l==b-1)});f.length=0,this.h.g+=s,this.C=0,x=this.h.g}else x=this.g.oa();if(this.o=c==200,Zs(this.i,this.u,this.A,this.l,this.R,_e,c),this.o){if(this.T&&!this.K){t:{if(this.g){var oe,Ue=this.g;if((oe=Ue.g?Ue.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Y(oe)){var he=oe;break t}}he=null}if(c=he)In(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,pi(this,c);else{this.o=!1,this.s=3,q(12),wt(this),jn(this);break e}}if(this.P){c=!0;let St;for(;!this.J&&this.C<x.length;)if(St=ss(this,x),St==xr){_e==4&&(this.s=4,q(14),c=!1),In(this.i,this.l,null,"[Incomplete Response]");break}else if(St==di){this.s=4,q(15),In(this.i,this.l,x,"[Invalid Chunk]"),c=!1;break}else In(this.i,this.l,St,null),pi(this,St);if(is(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),_e!=4||x.length!=0||this.h.h||(this.s=1,q(16),c=!1),this.o=this.o&&c,!c)In(this.i,this.l,x,"[Invalid Chunked Response]"),wt(this),jn(this);else if(0<x.length&&!this.W){this.W=!0;var ke=this.j;ke.g==this&&ke.ba&&!ke.M&&(ke.j.info("Great, no buffering proxy detected. Bytes received: "+x.length),fr(ke),ke.M=!0,q(11))}}else In(this.i,this.l,x,null),pi(this,x);_e==4&&wt(this),this.o&&!this.J&&(_e==4?Kn(this.j,this):(this.o=!1,Lt(this)))}else fn(this.g),c==400&&0<x.indexOf("Unknown SID")?(this.s=3,q(12)):(this.s=0,q(13)),wt(this),jn(this)}}}catch{}finally{}};function is(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function ss(s,l){var c=s.C,f=l.indexOf(`
`,c);return f==-1?xr:(c=Number(l.substring(c,f)),isNaN(c)?di:(f+=1,f+c>l.length?xr:(l=l.slice(f,f+c),s.C=f+c,l)))}Gt.prototype.cancel=function(){this.J=!0,wt(this)};function Lt(s){s.S=Date.now()+s.I,fi(s,s.I)}function fi(s,l){if(s.B!=null)throw Error("WatchDog timer not null");s.B=ir(E(s.ba,s),l)}function Fr(s){s.B&&(u.clearTimeout(s.B),s.B=null)}Gt.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(sn(this.i,this.A),this.L!=2&&(xn(),q(17)),wt(this),this.s=2,jn(this)):fi(this,this.S-s)};function jn(s){s.j.G==0||s.J||Kn(s.j,s)}function wt(s){Fr(s);var l=s.M;l&&typeof l.ma=="function"&&l.ma(),s.M=null,nn(s.U),s.g&&(l=s.g,s.g=null,l.abort(),l.ma())}function pi(s,l){try{var c=s.j;if(c.G!=0&&(c.g==s||Br(c.h,s))){if(!s.K&&Br(c.h,s)&&c.G==3){try{var f=c.Da.g.parse(l)}catch{f=null}if(Array.isArray(f)&&f.length==3){var b=f;if(b[0]==0){e:if(!c.u){if(c.g)if(c.g.F+3e3<s.F)pr(c),hr(c);else break e;Hn(c),q(18)}}else c.za=b[1],0<c.za-c.T&&37500>b[2]&&c.F&&c.v==0&&!c.C&&(c.C=ir(E(c.Za,c),6e3));if(1>=gi(c.h)&&c.ca){try{c.ca()}catch{}c.ca=void 0}}else pn(c,11)}else if((s.K||c.g==s)&&pr(c),!Y(l))for(b=c.Da.g.parse(l),l=0;l<b.length;l++){let he=b[l];if(c.T=he[0],he=he[1],c.G==2)if(he[0]=="c"){c.K=he[1],c.ia=he[2];const ke=he[3];ke!=null&&(c.la=ke,c.j.info("VER="+c.la));const _e=he[4];_e!=null&&(c.Aa=_e,c.j.info("SVER="+c.Aa));const Rn=he[5];Rn!=null&&typeof Rn=="number"&&0<Rn&&(f=1.5*Rn,c.L=f,c.j.info("backChannelRequestTimeoutMs_="+f)),f=c;const St=s.g;if(St){const qt=St.g?St.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(qt){var S=f.h;S.g||qt.indexOf("spdy")==-1&&qt.indexOf("quic")==-1&&qt.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(an(S,S.h),S.h=null))}if(f.D){const Ke=St.g?St.g.getResponseHeader("X-HTTP-Session-Id"):null;Ke&&(f.ya=Ke,Ie(f.I,f.D,Ke))}}c.G=3,c.l&&c.l.ua(),c.ba&&(c.R=Date.now()-s.F,c.j.info("Handshake RTT: "+c.R+"ms")),f=c;var x=s;if(f.qa=zr(f,f.J?f.ia:null,f.W),x.K){as(f.h,x);var oe=x,Ue=f.L;Ue&&(oe.I=Ue),oe.B&&(Fr(oe),Lt(oe)),f.g=x}else Ri(f);0<c.i.length&&dr(c)}else he[0]!="stop"&&he[0]!="close"||pn(c,7);else c.G==3&&(he[0]=="stop"||he[0]=="close"?he[0]=="stop"?pn(c,7):Ai(c):he[0]!="noop"&&c.l&&c.l.ta(he),c.v=0)}}xn(4)}catch{}}var os=class{constructor(s,l){this.g=s,this.map=l}};function Qt(s){this.l=s||10,u.PerformanceNavigationTiming?(s=u.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function mi(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function gi(s){return s.h?1:s.g?s.g.size:0}function Br(s,l){return s.h?s.h==l:s.g?s.g.has(l):!1}function an(s,l){s.g?s.g.add(l):s.h=l}function as(s,l){s.h&&s.h==l?s.h=null:s.g&&s.g.has(l)&&s.g.delete(l)}Qt.prototype.cancel=function(){if(this.i=_i(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function _i(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let l=s.i;for(const c of s.g.values())l=l.concat(c.D);return l}return M(s.i)}function ln(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(h(s)){for(var l=[],c=s.length,f=0;f<c;f++)l.push(s[f]);return l}l=[],c=0;for(f in s)l[c++]=s[f];return l}function ls(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(h(s)||typeof s=="string"){var l=[];s=s.length;for(var c=0;c<s;c++)l.push(c);return l}l=[],c=0;for(const f in s)l[c++]=f;return l}}}function yi(s,l){if(s.forEach&&typeof s.forEach=="function")s.forEach(l,void 0);else if(h(s)||typeof s=="string")Array.prototype.forEach.call(s,l,void 0);else for(var c=ls(s),f=ln(s),b=f.length,S=0;S<b;S++)l.call(void 0,f[S],c&&c[S],s)}var Ei=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function us(s,l){if(s){s=s.split("&");for(var c=0;c<s.length;c++){var f=s[c].indexOf("="),b=null;if(0<=f){var S=s[c].substring(0,f);b=s[c].substring(f+1)}else S=s[c];l(S,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function un(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof un){this.h=s.h,jr(this,s.j),this.o=s.o,this.g=s.g,or(this,s.s),this.l=s.l;var l=s.i,c=new Bt;c.i=l.i,l.g&&(c.g=new Map(l.g),c.h=l.h),Yt(this,c),this.m=s.m}else s&&(l=String(s).match(Ei))?(this.h=!1,jr(this,l[1]||"",!0),this.o=qn(l[2]||""),this.g=qn(l[3]||"",!0),or(this,l[4]),this.l=qn(l[5]||"",!0),Yt(this,l[6]||"",!0),this.m=qn(l[7]||"")):(this.h=!1,this.i=new Bt(null,this.h))}un.prototype.toString=function(){var s=[],l=this.j;l&&s.push(Ft(l,Ti,!0),":");var c=this.g;return(c||l=="file")&&(s.push("//"),(l=this.o)&&s.push(Ft(l,Ti,!0),"@"),s.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.s,c!=null&&s.push(":",String(c))),(c=this.l)&&(this.g&&c.charAt(0)!="/"&&s.push("/"),s.push(Ft(c,c.charAt(0)=="/"?cs:cn,!0))),(c=this.i.toString())&&s.push("?",c),(c=this.m)&&s.push("#",Ft(c,ds)),s.join("")};function it(s){return new un(s)}function jr(s,l,c){s.j=c?qn(l,!0):l,s.j&&(s.j=s.j.replace(/:$/,""))}function or(s,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);s.s=l}else s.s=null}function Yt(s,l,c){l instanceof Bt?(s.i=l,fs(s.i,s.h)):(c||(l=Ft(l,hs)),s.i=new Bt(l,s.h))}function Ie(s,l,c){s.i.set(l,c)}function ar(s){return Ie(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function qn(s,l){return s?l?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function Ft(s,l,c){return typeof s=="string"?(s=encodeURI(s).replace(l,eo),c&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function eo(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var Ti=/[#\/\?@]/g,cn=/[#\?:]/g,cs=/[#\?]/g,hs=/[#\?@]/g,ds=/#/g;function Bt(s,l){this.h=this.g=null,this.i=s||null,this.j=!!l}function hn(s){s.g||(s.g=new Map,s.h=0,s.i&&us(s.i,function(l,c){s.add(decodeURIComponent(l.replace(/\+/g," ")),c)}))}n=Bt.prototype,n.add=function(s,l){hn(this),this.i=null,s=An(this,s);var c=this.g.get(s);return c||this.g.set(s,c=[]),c.push(l),this.h+=1,this};function vi(s,l){hn(s),l=An(s,l),s.g.has(l)&&(s.i=null,s.h-=s.g.get(l).length,s.g.delete(l))}function Jt(s,l){return hn(s),l=An(s,l),s.g.has(l)}n.forEach=function(s,l){hn(this),this.g.forEach(function(c,f){c.forEach(function(b){s.call(l,b,f,this)},this)},this)},n.na=function(){hn(this);const s=Array.from(this.g.values()),l=Array.from(this.g.keys()),c=[];for(let f=0;f<l.length;f++){const b=s[f];for(let S=0;S<b.length;S++)c.push(l[f])}return c},n.V=function(s){hn(this);let l=[];if(typeof s=="string")Jt(this,s)&&(l=l.concat(this.g.get(An(this,s))));else{s=Array.from(this.g.values());for(let c=0;c<s.length;c++)l=l.concat(s[c])}return l},n.set=function(s,l){return hn(this),this.i=null,s=An(this,s),Jt(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[l]),this.h+=1,this},n.get=function(s,l){return s?(s=this.V(s),0<s.length?String(s[0]):l):l};function Ii(s,l,c){vi(s,l),0<c.length&&(s.i=null,s.g.set(An(s,l),M(c)),s.h+=c.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],l=Array.from(this.g.keys());for(var c=0;c<l.length;c++){var f=l[c];const S=encodeURIComponent(String(f)),x=this.V(f);for(f=0;f<x.length;f++){var b=S;x[f]!==""&&(b+="="+encodeURIComponent(String(x[f]))),s.push(b)}}return this.i=s.join("&")};function An(s,l){return l=String(l),s.j&&(l=l.toLowerCase()),l}function fs(s,l){l&&!s.j&&(hn(s),s.i=null,s.g.forEach(function(c,f){var b=f.toLowerCase();f!=b&&(vi(this,f),Ii(this,b,c))},s)),s.j=l}function At(s,l){const c=new Fn;if(u.Image){const f=new Image;f.onload=P(dn,c,"TestLoadImage: loaded",!0,l,f),f.onerror=P(dn,c,"TestLoadImage: error",!1,l,f),f.onabort=P(dn,c,"TestLoadImage: abort",!1,l,f),f.ontimeout=P(dn,c,"TestLoadImage: timeout",!1,l,f),u.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=s}else l(!1)}function zn(s,l){const c=new Fn,f=new AbortController,b=setTimeout(()=>{f.abort(),dn(c,"TestPingServer: timeout",!1,l)},1e4);fetch(s,{signal:f.signal}).then(S=>{clearTimeout(b),S.ok?dn(c,"TestPingServer: ok",!0,l):dn(c,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(b),dn(c,"TestPingServer: error",!1,l)})}function dn(s,l,c,f,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),f(c)}catch{}}function ps(){this.g=new Vr}function bt(s,l,c){const f=c||"";try{yi(s,function(b,S){let x=b;d(b)&&(x=Tn(b)),l.push(f+S+"="+encodeURIComponent(x))})}catch(b){throw l.push(f+"type="+encodeURIComponent("_badmap")),b}}function Mt(s){this.l=s.Ub||null,this.j=s.eb||!1}O(Mt,Or),Mt.prototype.g=function(){return new qr(this.l,this.j)},Mt.prototype.i=function(s){return function(){return s}}({});function qr(s,l){Ce.call(this),this.D=s,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}O(qr,Ce),n=qr.prototype,n.open=function(s,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=l,this.readyState=1,Ct(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(l.body=s),(this.D||u).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,lr(this)),this.readyState=0},n.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,Ct(this)),this.g&&(this.readyState=3,Ct(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;$t(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function $t(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}n.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var l=s.value?s.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!s.done}))&&(this.response=this.responseText+=l)}s.done?lr(this):Ct(this),this.readyState==3&&$t(this)}},n.Ra=function(s){this.g&&(this.response=this.responseText=s,lr(this))},n.Qa=function(s){this.g&&(this.response=s,lr(this))},n.ga=function(){this.g&&lr(this)};function lr(s){s.readyState=4,s.l=null,s.j=null,s.v=null,Ct(s)}n.setRequestHeader=function(s,l){this.u.append(s,l)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],l=this.h.entries();for(var c=l.next();!c.done;)c=c.value,s.push(c[0]+": "+c[1]),c=l.next();return s.join(`\r
`)};function Ct(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(qr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function ms(s){let l="";return j(s,function(c,f){l+=f,l+=":",l+=c,l+=`\r
`}),l}function jt(s,l,c){e:{for(f in c){var f=!1;break e}f=!0}f||(c=ms(c),typeof s=="string"?c!=null&&encodeURIComponent(String(c)):Ie(s,l,c))}function Pe(s){Ce.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}O(Pe,Ce);var gs=/^https?$/i,_s=["POST","PUT"];n=Pe.prototype,n.Ha=function(s){this.J=s},n.ea=function(s,l,c,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);l=l?l.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():on.g(),this.v=this.o?Kt(this.o):Kt(on),this.g.onreadystatechange=E(this.Ea,this);try{this.B=!0,this.g.open(l,String(s),!0),this.B=!1}catch(S){wi(this,S);return}if(s=c||"",c=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var b in f)c.set(b,f[b]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const S of f.keys())c.set(S,f.get(S));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(c.keys()).find(S=>S.toLowerCase()=="content-type"),b=u.FormData&&s instanceof u.FormData,!(0<=Array.prototype.indexOf.call(_s,l,void 0))||f||b||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,x]of c)this.g.setRequestHeader(S,x);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Rt(this),this.u=!0,this.g.send(s),this.u=!1}catch(S){wi(this,S)}};function wi(s,l){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=l,s.m=5,bn(s),ur(s)}function bn(s){s.A||(s.A=!0,Ne(s,"complete"),Ne(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,Ne(this,"complete"),Ne(this,"abort"),ur(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ur(this,!0)),Pe.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ys(this):this.bb())},n.bb=function(){ys(this)};function ys(s){if(s.h&&typeof a<"u"&&(!s.v[1]||Qe(s)!=4||s.Z()!=2)){if(s.u&&Qe(s)==4)Ee(s.Ea,0,s);else if(Ne(s,"readystatechange"),Qe(s)==4){s.h=!1;try{const x=s.Z();e:switch(x){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var c;if(!(c=l)){var f;if(f=x===0){var b=String(s.D).match(Ei)[1]||null;!b&&u.self&&u.self.location&&(b=u.self.location.protocol.slice(0,-1)),f=!gs.test(b?b.toLowerCase():"")}c=f}if(c)Ne(s,"complete"),Ne(s,"success");else{s.m=6;try{var S=2<Qe(s)?s.g.statusText:""}catch{S=""}s.l=S+" ["+s.Z()+"]",bn(s)}}finally{ur(s)}}}}function ur(s,l){if(s.g){Rt(s);const c=s.g,f=s.v[0]?()=>{}:null;s.g=null,s.v=null,l||Ne(s,"ready");try{c.onreadystatechange=f}catch{}}}function Rt(s){s.I&&(u.clearTimeout(s.I),s.I=null)}n.isActive=function(){return!!this.g};function Qe(s){return s.g?s.g.readyState:0}n.Z=function(){try{return 2<Qe(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(s){if(this.g){var l=this.g.responseText;return s&&l.indexOf(s)==0&&(l=l.substring(s.length)),Vt(l)}};function Es(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function fn(s){const l={};s=(s.g&&2<=Qe(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<s.length;f++){if(Y(s[f]))continue;var c=I(s[f]);const b=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const S=l[b]||[];l[b]=S,S.push(c)}T(l,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function cr(s,l,c){return c&&c.internalChannelParams&&c.internalChannelParams[s]||l}function Xt(s){this.Aa=0,this.i=[],this.j=new Fn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=cr("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=cr("baseRetryDelayMs",5e3,s),this.cb=cr("retryDelaySeedMs",1e4,s),this.Wa=cr("forwardChannelMaxRetries",2,s),this.wa=cr("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new Qt(s&&s.concurrentRequestLimit),this.Da=new ps,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Xt.prototype,n.la=8,n.G=1,n.connect=function(s,l,c,f){q(0),this.W=s,this.H=l||{},c&&f!==void 0&&(this.H.OSID=c,this.H.OAID=f),this.F=this.X,this.I=zr(this,null,this.W),dr(this)};function Ai(s){if(bi(s),s.G==3){var l=s.U++,c=it(s.I);if(Ie(c,"SID",s.K),Ie(c,"RID",l),Ie(c,"TYPE","terminate"),Zt(s,c),l=new Gt(s,s.j,l),l.L=2,l.v=ar(it(c)),c=!1,u.navigator&&u.navigator.sendBeacon)try{c=u.navigator.sendBeacon(l.v.toString(),"")}catch{}!c&&u.Image&&(new Image().src=l.v,c=!0),c||(l.g=Pi(l.j,null),l.g.ea(l.v)),l.F=Date.now(),Lt(l)}mr(s)}function hr(s){s.g&&(fr(s),s.g.cancel(),s.g=null)}function bi(s){hr(s),s.u&&(u.clearTimeout(s.u),s.u=null),pr(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&u.clearTimeout(s.s),s.s=null)}function dr(s){if(!mi(s.h)&&!s.s){s.s=!0;var l=s.Ga;W||Me(),te||(W(),te=!0),De.add(l,s),s.B=0}}function Ze(s,l){return gi(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=l.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=ir(E(s.Ga,s,l),vs(s,s.B)),s.B++,!0)}n.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const b=new Gt(this,this.j,s);let S=this.o;if(this.S&&(S?(S=m(S),v(S,this.S)):S=this.S),this.m!==null||this.O||(b.H=S,S=null),this.P)e:{for(var l=0,c=0;c<this.i.length;c++){t:{var f=this.i[c];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(l+=f,4096<l){l=c;break e}if(l===4096||c===this.i.length-1){l=c+1;break e}}l=1e3}else l=1e3;l=Ts(this,b,l),c=it(this.I),Ie(c,"RID",s),Ie(c,"CVER",22),this.D&&Ie(c,"X-HTTP-Session-Id",this.D),Zt(this,c),S&&(this.O?l="headers="+encodeURIComponent(String(ms(S)))+"&"+l:this.m&&jt(c,this.m,S)),an(this.h,b),this.Ua&&Ie(c,"TYPE","init"),this.P?(Ie(c,"$req",l),Ie(c,"SID","null"),b.T=!0,Ur(b,c,null)):Ur(b,c,l),this.G=2}}else this.G==3&&(s?Ci(this,s):this.i.length==0||mi(this.h)||Ci(this))};function Ci(s,l){var c;l?c=l.l:c=s.U++;const f=it(s.I);Ie(f,"SID",s.K),Ie(f,"RID",c),Ie(f,"AID",s.T),Zt(s,f),s.m&&s.o&&jt(f,s.m,s.o),c=new Gt(s,s.j,c,s.B+1),s.m===null&&(c.H=s.o),l&&(s.i=l.D.concat(s.i)),l=Ts(s,c,1e3),c.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),an(s.h,c),Ur(c,f,l)}function Zt(s,l){s.H&&j(s.H,function(c,f){Ie(l,f,c)}),s.l&&yi({},function(c,f){Ie(l,f,c)})}function Ts(s,l,c){c=Math.min(s.i.length,c);var f=s.l?E(s.l.Na,s.l,s):null;e:{var b=s.i;let S=-1;for(;;){const x=["count="+c];S==-1?0<c?(S=b[0].g,x.push("ofs="+S)):S=0:x.push("ofs="+S);let oe=!0;for(let Ue=0;Ue<c;Ue++){let he=b[Ue].g;const ke=b[Ue].map;if(he-=S,0>he)S=Math.max(0,b[Ue].g-100),oe=!1;else try{bt(ke,x,"req"+he+"_")}catch{f&&f(ke)}}if(oe){f=x.join("&");break e}}}return s=s.i.splice(0,c),l.D=s,f}function Ri(s){if(!s.g&&!s.u){s.Y=1;var l=s.Fa;W||Me(),te||(W(),te=!0),De.add(l,s),s.v=0}}function Hn(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=ir(E(s.Fa,s),vs(s,s.v)),s.v++,!0)}n.Fa=function(){if(this.u=null,Si(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=ir(E(this.ab,this),s)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,q(10),hr(this),Si(this))};function fr(s){s.A!=null&&(u.clearTimeout(s.A),s.A=null)}function Si(s){s.g=new Gt(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var l=it(s.qa);Ie(l,"RID","rpc"),Ie(l,"SID",s.K),Ie(l,"AID",s.T),Ie(l,"CI",s.F?"0":"1"),!s.F&&s.ja&&Ie(l,"TO",s.ja),Ie(l,"TYPE","xmlhttp"),Zt(s,l),s.m&&s.o&&jt(l,s.m,s.o),s.L&&(s.g.I=s.L);var c=s.g;s=s.ia,c.L=1,c.v=ar(it(l)),c.m=null,c.P=!0,wn(c,s)}n.Za=function(){this.C!=null&&(this.C=null,hr(this),Hn(this),q(19))};function pr(s){s.C!=null&&(u.clearTimeout(s.C),s.C=null)}function Kn(s,l){var c=null;if(s.g==l){pr(s),fr(s),s.g=null;var f=2}else if(Br(s.h,l))c=l.D,as(s.h,l),f=1;else return;if(s.G!=0){if(l.o)if(f==1){c=l.m?l.m.length:0,l=Date.now()-l.F;var b=s.B;f=Ot(),Ne(f,new Un(f,c)),dr(s)}else Ri(s);else if(b=l.s,b==3||b==0&&0<l.X||!(f==1&&Ze(s,l)||f==2&&Hn(s)))switch(c&&0<c.length&&(l=s.h,l.i=l.i.concat(c)),b){case 1:pn(s,5);break;case 4:pn(s,10);break;case 3:pn(s,6);break;default:pn(s,2)}}}function vs(s,l){let c=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(c*=2),c*l}function pn(s,l){if(s.j.info("Error code "+l),l==2){var c=E(s.fb,s),f=s.Xa;const b=!f;f=new un(f||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||jr(f,"https"),ar(f),b?At(f.toString(),c):zn(f.toString(),c)}else q(2);s.G=0,s.l&&s.l.sa(l),mr(s),bi(s)}n.fb=function(s){s?(this.j.info("Successfully pinged google.com"),q(2)):(this.j.info("Failed to ping google.com"),q(1))};function mr(s){if(s.G=0,s.ka=[],s.l){const l=_i(s.h);(l.length!=0||s.i.length!=0)&&(k(s.ka,l),k(s.ka,s.i),s.h.i.length=0,M(s.i),s.i.length=0),s.l.ra()}}function zr(s,l,c){var f=c instanceof un?it(c):new un(c);if(f.g!="")l&&(f.g=l+"."+f.g),or(f,f.s);else{var b=u.location;f=b.protocol,l=l?l+"."+b.hostname:b.hostname,b=+b.port;var S=new un(null);f&&jr(S,f),l&&(S.g=l),b&&or(S,b),c&&(S.l=c),f=S}return c=s.D,l=s.ya,c&&l&&Ie(f,c,l),Ie(f,"VER",s.la),Zt(s,f),f}function Pi(s,l,c){if(l&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=s.Ca&&!s.pa?new Pe(new Mt({eb:c})):new Pe(s.pa),l.Ha(s.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Gn(){}n=Gn.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function gr(){}gr.prototype.g=function(s,l){return new Ye(s,l)};function Ye(s,l){Ce.call(this),this.g=new Xt(l),this.l=s,this.h=l&&l.messageUrlParams||null,s=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(s?s["X-WebChannel-Content-Type"]=l.messageContentType:s={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(s?s["X-WebChannel-Client-Profile"]=l.va:s={"X-WebChannel-Client-Profile":l.va}),this.g.S=s,(s=l&&l.Sb)&&!Y(s)&&(this.g.m=s),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!Y(l)&&(this.g.D=l,s=this.h,s!==null&&l in s&&(s=this.h,l in s&&delete s[l])),this.j=new Cn(this)}O(Ye,Ce),Ye.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ye.prototype.close=function(){Ai(this.g)},Ye.prototype.o=function(s){var l=this.g;if(typeof s=="string"){var c={};c.__data__=s,s=c}else this.u&&(c={},c.__data__=Tn(s),s=c);l.i.push(new os(l.Ya++,s)),l.G==3&&dr(l)},Ye.prototype.N=function(){this.g.l=null,delete this.j,Ai(this.g),delete this.g,Ye.aa.N.call(this)};function Hr(s){Lr.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var l=s.__sm__;if(l){e:{for(const c in l){s=c;break e}s=void 0}(this.i=s)&&(s=this.i,l=l!==null&&s in l?l[s]:void 0),this.data=l}else this.data=s}O(Hr,Lr);function ki(){rn.call(this),this.status=1}O(ki,rn);function Cn(s){this.g=s}O(Cn,Gn),Cn.prototype.ua=function(){Ne(this.g,"a")},Cn.prototype.ta=function(s){Ne(this.g,new Hr(s))},Cn.prototype.sa=function(s){Ne(this.g,new ki)},Cn.prototype.ra=function(){Ne(this.g,"b")},gr.prototype.createWebChannel=gr.prototype.g,Ye.prototype.send=Ye.prototype.o,Ye.prototype.open=Ye.prototype.m,Ye.prototype.close=Ye.prototype.close,rh=function(){return new gr},nh=function(){return Ot()},th=vn,Aa={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},sr.NO_ERROR=0,sr.TIMEOUT=8,sr.HTTP_ERROR=6,po=sr,hi.COMPLETE="complete",eh=hi,ai.EventType=Mn,Mn.OPEN="a",Mn.CLOSE="b",Mn.ERROR="c",Mn.MESSAGE="d",Ce.prototype.listen=Ce.prototype.K,Ss=ai,Pe.prototype.listenOnce=Pe.prototype.L,Pe.prototype.getLastError=Pe.prototype.Ka,Pe.prototype.getLastErrorCode=Pe.prototype.Ba,Pe.prototype.getStatus=Pe.prototype.Z,Pe.prototype.getResponseJson=Pe.prototype.Oa,Pe.prototype.getResponseText=Pe.prototype.oa,Pe.prototype.send=Pe.prototype.ea,Pe.prototype.setWithCredentials=Pe.prototype.Ha,Zc=Pe}).apply(typeof so<"u"?so:typeof self<"u"?self:typeof window<"u"?window:{});const du="@firebase/firestore";/**
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
 */class gt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}gt.UNAUTHENTICATED=new gt(null),gt.GOOGLE_CREDENTIALS=new gt("google-credentials-uid"),gt.FIRST_PARTY=new gt("first-party-uid"),gt.MOCK_USER=new gt("mock-user");/**
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
 */let es="10.14.0";/**
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
 */const ri=new Ha("@firebase/firestore");function As(){return ri.logLevel}function G(n,...e){if(ri.logLevel<=de.DEBUG){const t=e.map(nl);ri.debug(`Firestore (${es}): ${n}`,...t)}}function tr(n,...e){if(ri.logLevel<=de.ERROR){const t=e.map(nl);ri.error(`Firestore (${es}): ${n}`,...t)}}function Ki(n,...e){if(ri.logLevel<=de.WARN){const t=e.map(nl);ri.warn(`Firestore (${es}): ${n}`,...t)}}function nl(n){if(typeof n=="string")return n;try{/**
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
 */function ue(n="Unexpected state"){const e=`FIRESTORE (${es}) INTERNAL ASSERTION FAILED: `+n;throw tr(e),new Error(e)}function Le(n,e){n||ue()}function me(n,e){return n}/**
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
 */const B={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Z extends nr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Zr{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class ih{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Wm{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(gt.UNAUTHENTICATED))}shutdown(){}}class Qm{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Ym{constructor(e){this.t=e,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Le(this.o===void 0);let r=this.i;const i=h=>this.i!==r?(r=this.i,t(h)):Promise.resolve();let o=new Zr;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Zr,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const h=o;e.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},u=h=>{G("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>u(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?u(h):(G("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Zr)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(G("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Le(typeof r.accessToken=="string"),new ih(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Le(e===null||typeof e=="string"),new gt(e)}}class Jm{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class $m{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new Jm(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(gt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Xm{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Zm{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Le(this.o===void 0);const r=o=>{o.error!=null&&G("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,G("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{G("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):G("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Le(typeof t.token=="string"),this.R=t.token,new Xm(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function eg(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class sh{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=eg(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<t&&(r+=e.charAt(i[o]%e.length))}return r}}function Te(n,e){return n<e?-1:n>e?1:0}function Gi(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
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
 */class xt{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Z(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Z(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new Z(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Z(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return xt.fromMillis(Date.now())}static fromDate(e){return xt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new xt(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Te(this.nanoseconds,e.nanoseconds):Te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class le{constructor(e){this.timestamp=e}static fromTimestamp(e){return new le(e)}static min(){return new le(new xt(0,0))}static max(){return new le(new xt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Fs{constructor(e,t,r){t===void 0?t=0:t>e.length&&ue(),r===void 0?r=e.length-t:r>e.length-t&&ue(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Fs.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Fs?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const o=e.get(i),a=t.get(i);if(o<a)return-1;if(o>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Oe extends Fs{construct(e,t,r){return new Oe(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new Z(B.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new Oe(t)}static emptyPath(){return new Oe([])}}const tg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Pt extends Fs{construct(e,t,r){return new Pt(e,t,r)}static isValidIdentifier(e){return tg.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Pt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Pt(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const o=()=>{if(r.length===0)throw new Z(B.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;i<e.length;){const u=e[i];if(u==="\\"){if(i+1===e.length)throw new Z(B.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const h=e[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new Z(B.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=h,i+=2}else u==="`"?(a=!a,i++):u!=="."||a?(r+=u,i++):(o(),i++)}if(o(),a)throw new Z(B.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Pt(t)}static emptyPath(){return new Pt([])}}/**
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
 */class ee{constructor(e){this.path=e}static fromPath(e){return new ee(Oe.fromString(e))}static fromName(e){return new ee(Oe.fromString(e).popFirst(5))}static empty(){return new ee(Oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Oe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ee(new Oe(e.slice()))}}function ng(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=le.fromTimestamp(r===1e9?new xt(t+1,0):new xt(t,r));return new Pr(i,ee.empty(),e)}function rg(n){return new Pr(n.readTime,n.key,-1)}class Pr{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Pr(le.min(),ee.empty(),-1)}static max(){return new Pr(le.max(),ee.empty(),-1)}}function ig(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ee.comparator(n.documentKey,e.documentKey),t!==0?t:Te(n.largestBatchId,e.largestBatchId))}/**
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
 */const sg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class og{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function rl(n){if(n.code!==B.FAILED_PRECONDITION||n.message!==sg)throw n;G("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ue(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new V((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(t,o).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof V?t:V.resolve(t)}catch(t){return V.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):V.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):V.reject(t)}static resolve(e){return new V((t,r)=>{t(e)})}static reject(e){return new V((t,r)=>{r(e)})}static waitFor(e){return new V((t,r)=>{let i=0,o=0,a=!1;e.forEach(u=>{++i,u.next(()=>{++o,a&&o===i&&t()},h=>r(h))}),a=!0,o===i&&t()})}static or(e){let t=V.resolve(!1);for(const r of e)t=t.next(i=>i?V.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,o)=>{r.push(t.call(this,i,o))}),this.waitFor(r)}static mapArray(e,t){return new V((r,i)=>{const o=e.length,a=new Array(o);let u=0;for(let h=0;h<o;h++){const d=h;t(e[d]).next(p=>{a[d]=p,++u,u===o&&r(a)},p=>i(p))}})}static doWhile(e,t){return new V((r,i)=>{const o=()=>{e()===!0?t().next(()=>{o()},i):r()};o()})}}function ag(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Ys(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class il{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}il.oe=-1;function xo(n){return n==null}function ba(n){return n===0&&1/n==-1/0}/**
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
 */function fu(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Uo(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function lg(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class Be{constructor(e,t){this.comparator=e,this.root=t||at.EMPTY}insert(e,t){return new Be(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,at.BLACK,null,null))}remove(e){return new Be(this.comparator,this.root.remove(e,this.comparator).copy(null,null,at.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new oo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new oo(this.root,e,this.comparator,!1)}getReverseIterator(){return new oo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new oo(this.root,e,this.comparator,!0)}}class oo{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?r(e.key,t):1,t&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class at{constructor(e,t,r,i,o){this.key=e,this.value=t,this.color=r??at.RED,this.left=i??at.EMPTY,this.right=o??at.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,o){return new at(e??this.key,t??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,t,r),null):o===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return at.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ue();const e=this.left.check();if(e!==this.right.check())throw ue();return e+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw ue()}get value(){throw ue()}get color(){throw ue()}get left(){throw ue()}get right(){throw ue()}copy(e,t,r,i,o){return this}insert(e,t,r){return new at(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class lt{constructor(e){this.comparator=e,this.data=new Be(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new pu(this.data.getIterator())}getIteratorFrom(e){return new pu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof lt)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new lt(this.comparator);return t.data=e,t}}class pu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class wr{constructor(e){this.fields=e,e.sort(Pt.comparator)}static empty(){return new wr([])}unionWith(e){let t=new lt(Pt.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new wr(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Gi(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class oh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ut{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new oh("Invalid base64 string: "+o):o}}(e);return new ut(t)}static fromUint8Array(e){const t=function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o}(e);return new ut(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ut.EMPTY_BYTE_STRING=new ut("");const ug=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function kr(n){if(Le(!!n),typeof n=="string"){let e=0;const t=ug.exec(n);if(Le(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Fe(n.seconds),nanos:Fe(n.nanos)}}function Fe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ii(n){return typeof n=="string"?ut.fromBase64String(n):ut.fromUint8Array(n)}/**
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
 */function sl(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function ol(n){const e=n.mapValue.fields.__previous_value__;return sl(e)?ol(e):e}function Bs(n){const e=kr(n.mapValue.fields.__local_write_time__.timestampValue);return new xt(e.seconds,e.nanos)}/**
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
 */class cg{constructor(e,t,r,i,o,a,u,h,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=h,this.useFetchStreams=d}}class js{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new js("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof js&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const ao={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function si(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?sl(n)?4:dg(n)?9007199254740991:hg(n)?10:11:ue()}function Vn(n,e){if(n===e)return!0;const t=si(n);if(t!==si(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Bs(n).isEqual(Bs(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=kr(i.timestampValue),u=kr(o.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,o){return ii(i.bytesValue).isEqual(ii(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,o){return Fe(i.geoPointValue.latitude)===Fe(o.geoPointValue.latitude)&&Fe(i.geoPointValue.longitude)===Fe(o.geoPointValue.longitude)}(n,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return Fe(i.integerValue)===Fe(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const a=Fe(i.doubleValue),u=Fe(o.doubleValue);return a===u?ba(a)===ba(u):isNaN(a)&&isNaN(u)}return!1}(n,e);case 9:return Gi(n.arrayValue.values||[],e.arrayValue.values||[],Vn);case 10:case 11:return function(i,o){const a=i.mapValue.fields||{},u=o.mapValue.fields||{};if(fu(a)!==fu(u))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(u[h]===void 0||!Vn(a[h],u[h])))return!1;return!0}(n,e);default:return ue()}}function qs(n,e){return(n.values||[]).find(t=>Vn(t,e))!==void 0}function Wi(n,e){if(n===e)return 0;const t=si(n),r=si(e);if(t!==r)return Te(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Te(n.booleanValue,e.booleanValue);case 2:return function(o,a){const u=Fe(o.integerValue||o.doubleValue),h=Fe(a.integerValue||a.doubleValue);return u<h?-1:u>h?1:u===h?0:isNaN(u)?isNaN(h)?0:-1:1}(n,e);case 3:return mu(n.timestampValue,e.timestampValue);case 4:return mu(Bs(n),Bs(e));case 5:return Te(n.stringValue,e.stringValue);case 6:return function(o,a){const u=ii(o),h=ii(a);return u.compareTo(h)}(n.bytesValue,e.bytesValue);case 7:return function(o,a){const u=o.split("/"),h=a.split("/");for(let d=0;d<u.length&&d<h.length;d++){const p=Te(u[d],h[d]);if(p!==0)return p}return Te(u.length,h.length)}(n.referenceValue,e.referenceValue);case 8:return function(o,a){const u=Te(Fe(o.latitude),Fe(a.latitude));return u!==0?u:Te(Fe(o.longitude),Fe(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return gu(n.arrayValue,e.arrayValue);case 10:return function(o,a){var u,h,d,p;const A=o.fields||{},E=a.fields||{},P=(u=A.value)===null||u===void 0?void 0:u.arrayValue,O=(h=E.value)===null||h===void 0?void 0:h.arrayValue,M=Te(((d=P==null?void 0:P.values)===null||d===void 0?void 0:d.length)||0,((p=O==null?void 0:O.values)===null||p===void 0?void 0:p.length)||0);return M!==0?M:gu(P,O)}(n.mapValue,e.mapValue);case 11:return function(o,a){if(o===ao.mapValue&&a===ao.mapValue)return 0;if(o===ao.mapValue)return 1;if(a===ao.mapValue)return-1;const u=o.fields||{},h=Object.keys(u),d=a.fields||{},p=Object.keys(d);h.sort(),p.sort();for(let A=0;A<h.length&&A<p.length;++A){const E=Te(h[A],p[A]);if(E!==0)return E;const P=Wi(u[h[A]],d[p[A]]);if(P!==0)return P}return Te(h.length,p.length)}(n.mapValue,e.mapValue);default:throw ue()}}function mu(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Te(n,e);const t=kr(n),r=kr(e),i=Te(t.seconds,r.seconds);return i!==0?i:Te(t.nanos,r.nanos)}function gu(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const o=Wi(t[i],r[i]);if(o)return o}return Te(t.length,r.length)}function Qi(n){return Ca(n)}function Ca(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=kr(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return ii(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return ee.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const o of t.values||[])i?i=!1:r+=",",r+=Ca(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Ca(t.fields[a])}`;return i+"}"}(n.mapValue):ue()}function Ra(n){return!!n&&"integerValue"in n}function al(n){return!!n&&"arrayValue"in n}function _u(n){return!!n&&"nullValue"in n}function yu(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ha(n){return!!n&&"mapValue"in n}function hg(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Ds(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Uo(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Ds(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ds(n.arrayValue.values[t]);return e}return Object.assign({},n)}function dg(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Pn{constructor(e){this.value=e}static empty(){return new Pn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!ha(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ds(t)}setAll(e){let t=Pt.emptyPath(),r={},i=[];e.forEach((a,u)=>{if(!t.isImmediateParentOf(u)){const h=this.getFieldsMap(t);this.applyChanges(h,r,i),r={},i=[],t=u.popLast()}a?r[u.lastSegment()]=Ds(a):i.push(u.lastSegment())});const o=this.getFieldsMap(t);this.applyChanges(o,r,i)}delete(e){const t=this.field(e.popLast());ha(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Vn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];ha(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Uo(t,(i,o)=>e[i]=o);for(const i of r)delete e[i]}clone(){return new Pn(Ds(this.value))}}/**
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
 */class _t{constructor(e,t,r,i,o,a,u){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=o,this.data=a,this.documentState=u}static newInvalidDocument(e){return new _t(e,0,le.min(),le.min(),le.min(),Pn.empty(),0)}static newFoundDocument(e,t,r,i){return new _t(e,1,t,le.min(),r,i,0)}static newNoDocument(e,t){return new _t(e,2,t,le.min(),le.min(),Pn.empty(),0)}static newUnknownDocument(e,t){return new _t(e,3,t,le.min(),le.min(),Pn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(le.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Pn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Pn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=le.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof _t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new _t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Co{constructor(e,t){this.position=e,this.inclusive=t}}function Eu(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const o=e[i],a=n.position[i];if(o.field.isKeyField()?r=ee.comparator(ee.fromName(a.referenceValue),t.key):r=Wi(a,t.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Tu(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Vn(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Ro{constructor(e,t="asc"){this.field=e,this.dir=t}}function fg(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class ah{}class Je extends ah{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new mg(e,t,r):t==="array-contains"?new yg(e,r):t==="in"?new Eg(e,r):t==="not-in"?new Tg(e,r):t==="array-contains-any"?new vg(e,r):new Je(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new gg(e,r):new _g(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Wi(t,this.value)):t!==null&&si(this.value)===si(t)&&this.matchesComparison(Wi(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ue()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class On extends ah{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new On(e,t)}matches(e){return lh(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function lh(n){return n.op==="and"}function uh(n){return pg(n)&&lh(n)}function pg(n){for(const e of n.filters)if(e instanceof On)return!1;return!0}function Sa(n){if(n instanceof Je)return n.field.canonicalString()+n.op.toString()+Qi(n.value);if(uh(n))return n.filters.map(e=>Sa(e)).join(",");{const e=n.filters.map(t=>Sa(t)).join(",");return`${n.op}(${e})`}}function ch(n,e){return n instanceof Je?function(r,i){return i instanceof Je&&r.op===i.op&&r.field.isEqual(i.field)&&Vn(r.value,i.value)}(n,e):n instanceof On?function(r,i){return i instanceof On&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,a,u)=>o&&ch(a,i.filters[u]),!0):!1}(n,e):void ue()}function hh(n){return n instanceof Je?function(t){return`${t.field.canonicalString()} ${t.op} ${Qi(t.value)}`}(n):n instanceof On?function(t){return t.op.toString()+" {"+t.getFilters().map(hh).join(" ,")+"}"}(n):"Filter"}class mg extends Je{constructor(e,t,r){super(e,t,r),this.key=ee.fromName(r.referenceValue)}matches(e){const t=ee.comparator(e.key,this.key);return this.matchesComparison(t)}}class gg extends Je{constructor(e,t){super(e,"in",t),this.keys=dh("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class _g extends Je{constructor(e,t){super(e,"not-in",t),this.keys=dh("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function dh(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>ee.fromName(r.referenceValue))}class yg extends Je{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return al(t)&&qs(t.arrayValue,this.value)}}class Eg extends Je{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&qs(this.value.arrayValue,t)}}class Tg extends Je{constructor(e,t){super(e,"not-in",t)}matches(e){if(qs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!qs(this.value.arrayValue,t)}}class vg extends Je{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!al(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>qs(this.value.arrayValue,r))}}/**
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
 */class Ig{constructor(e,t=null,r=[],i=[],o=null,a=null,u=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=a,this.endAt=u,this.ue=null}}function vu(n,e=null,t=[],r=[],i=null,o=null,a=null){return new Ig(n,e,t,r,i,o,a)}function ll(n){const e=me(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Sa(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),xo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Qi(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Qi(r)).join(",")),e.ue=t}return e.ue}function ul(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!fg(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!ch(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Tu(n.startAt,e.startAt)&&Tu(n.endAt,e.endAt)}function Pa(n){return ee.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Fo{constructor(e,t=null,r=[],i=[],o=null,a="F",u=null,h=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=a,this.startAt=u,this.endAt=h,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function wg(n,e,t,r,i,o,a,u){return new Fo(n,e,t,r,i,o,a,u)}function cl(n){return new Fo(n)}function Iu(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Ag(n){return n.collectionGroup!==null}function Vs(n){const e=me(n);if(e.ce===null){e.ce=[];const t=new Set;for(const o of e.explicitOrderBy)e.ce.push(o),t.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new lt(Pt.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(u=u.add(d.field))})}),u})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.ce.push(new Ro(o,r))}),t.has(Pt.keyField().canonicalString())||e.ce.push(new Ro(Pt.keyField(),r))}return e.ce}function Dn(n){const e=me(n);return e.le||(e.le=bg(e,Vs(n))),e.le}function bg(n,e){if(n.limitType==="F")return vu(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new Ro(i.field,o)});const t=n.endAt?new Co(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Co(n.startAt.position,n.startAt.inclusive):null;return vu(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function ka(n,e,t){return new Fo(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Bo(n,e){return ul(Dn(n),Dn(e))&&n.limitType===e.limitType}function fh(n){return`${ll(Dn(n))}|lt:${n.limitType}`}function Oi(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>hh(i)).join(", ")}]`),xo(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>Qi(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>Qi(i)).join(",")),`Target(${r})`}(Dn(n))}; limitType=${n.limitType})`}function jo(n,e){return e.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):ee.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,e)&&function(r,i){for(const o of Vs(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(a,u,h){const d=Eu(a,u,h);return a.inclusive?d<=0:d<0}(r.startAt,Vs(r),i)||r.endAt&&!function(a,u,h){const d=Eu(a,u,h);return a.inclusive?d>=0:d>0}(r.endAt,Vs(r),i))}(n,e)}function Cg(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function ph(n){return(e,t)=>{let r=!1;for(const i of Vs(n)){const o=Rg(i,e,t);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function Rg(n,e,t){const r=n.field.isKeyField()?ee.comparator(e.key,t.key):function(o,a,u){const h=a.data.field(o),d=u.data.field(o);return h!==null&&d!==null?Wi(h,d):ue()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return ue()}}/**
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
 */class ts{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Uo(this.inner,(t,r)=>{for(const[i,o]of r)e(i,o)})}isEmpty(){return lg(this.inner)}size(){return this.innerSize}}/**
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
 */const Sg=new Be(ee.comparator);function Nr(){return Sg}const mh=new Be(ee.comparator);function Ps(...n){let e=mh;for(const t of n)e=e.insert(t.key,t);return e}function Pg(n){let e=mh;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function $r(){return Os()}function gh(){return Os()}function Os(){return new ts(n=>n.toString(),(n,e)=>n.isEqual(e))}const kg=new lt(ee.comparator);function ye(...n){let e=kg;for(const t of n)e=e.add(t);return e}const Ng=new lt(Te);function Dg(){return Ng}/**
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
 */function Vg(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ba(e)?"-0":e}}function Og(n){return{integerValue:""+n}}/**
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
 */class qo{constructor(){this._=void 0}}function Lg(n,e,t){return n instanceof Na?function(i,o){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&sl(o)&&(o=ol(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(t,e):n instanceof So?_h(n,e):n instanceof Po?yh(n,e):function(i,o){const a=xg(i,o),u=wu(a)+wu(i.Pe);return Ra(a)&&Ra(i.Pe)?Og(u):Vg(i.serializer,u)}(n,e)}function Mg(n,e,t){return n instanceof So?_h(n,e):n instanceof Po?yh(n,e):t}function xg(n,e){return n instanceof Da?function(r){return Ra(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class Na extends qo{}class So extends qo{constructor(e){super(),this.elements=e}}function _h(n,e){const t=Eh(e);for(const r of n.elements)t.some(i=>Vn(i,r))||t.push(r);return{arrayValue:{values:t}}}class Po extends qo{constructor(e){super(),this.elements=e}}function yh(n,e){let t=Eh(e);for(const r of n.elements)t=t.filter(i=>!Vn(i,r));return{arrayValue:{values:t}}}class Da extends qo{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function wu(n){return Fe(n.integerValue||n.doubleValue)}function Eh(n){return al(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Ug(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof So&&i instanceof So||r instanceof Po&&i instanceof Po?Gi(r.elements,i.elements,Vn):r instanceof Da&&i instanceof Da?Vn(r.Pe,i.Pe):r instanceof Na&&i instanceof Na}(n.transform,e.transform)}class ei{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ei}static exists(e){return new ei(void 0,e)}static updateTime(e){return new ei(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function mo(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class hl{}function Th(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Bg(n.key,ei.none()):new dl(n.key,n.data,ei.none());{const t=n.data,r=Pn.empty();let i=new lt(Pt.comparator);for(let o of e.fields)if(!i.has(o)){let a=t.field(o);a===null&&o.length>1&&(o=o.popLast(),a=t.field(o)),a===null?r.delete(o):r.set(o,a),i=i.add(o)}return new zo(n.key,r,new wr(i.toArray()),ei.none())}}function Fg(n,e,t){n instanceof dl?function(i,o,a){const u=i.value.clone(),h=bu(i.fieldTransforms,o,a.transformResults);u.setAll(h),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):n instanceof zo?function(i,o,a){if(!mo(i.precondition,o))return void o.convertToUnknownDocument(a.version);const u=bu(i.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(vh(i)),h.setAll(u),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,e,t):function(i,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Ls(n,e,t,r){return n instanceof dl?function(o,a,u,h){if(!mo(o.precondition,a))return u;const d=o.value.clone(),p=Cu(o.fieldTransforms,h,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof zo?function(o,a,u,h){if(!mo(o.precondition,a))return u;const d=Cu(o.fieldTransforms,h,a),p=a.data;return p.setAll(vh(o)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(A=>A.field))}(n,e,t,r):function(o,a,u){return mo(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(n,e,t)}function Au(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Gi(r,i,(o,a)=>Ug(o,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class dl extends hl{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class zo extends hl{constructor(e,t,r,i,o=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function vh(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function bu(n,e,t){const r=new Map;Le(n.length===t.length);for(let i=0;i<t.length;i++){const o=n[i],a=o.transform,u=e.data.field(o.field);r.set(o.field,Mg(a,u,t[i]))}return r}function Cu(n,e,t){const r=new Map;for(const i of n){const o=i.transform,a=t.data.field(i.field);r.set(i.field,Lg(o,a,e))}return r}class Bg extends hl{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class jg{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&Fg(o,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Ls(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Ls(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=gh();return this.mutations.forEach(i=>{const o=e.get(i.key),a=o.overlayedDocument;let u=this.applyToLocalView(a,o.mutatedFields);u=t.has(i.key)?null:u;const h=Th(a,u);h!==null&&r.set(i.key,h),a.isValidDocument()||a.convertToNoDocument(le.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ye())}isEqual(e){return this.batchId===e.batchId&&Gi(this.mutations,e.mutations,(t,r)=>Au(t,r))&&Gi(this.baseMutations,e.baseMutations,(t,r)=>Au(t,r))}}/**
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
 */class qg{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class zg{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Ge,fe;function Ih(n){if(n===void 0)return tr("GRPC error has no .code"),B.UNKNOWN;switch(n){case Ge.OK:return B.OK;case Ge.CANCELLED:return B.CANCELLED;case Ge.UNKNOWN:return B.UNKNOWN;case Ge.DEADLINE_EXCEEDED:return B.DEADLINE_EXCEEDED;case Ge.RESOURCE_EXHAUSTED:return B.RESOURCE_EXHAUSTED;case Ge.INTERNAL:return B.INTERNAL;case Ge.UNAVAILABLE:return B.UNAVAILABLE;case Ge.UNAUTHENTICATED:return B.UNAUTHENTICATED;case Ge.INVALID_ARGUMENT:return B.INVALID_ARGUMENT;case Ge.NOT_FOUND:return B.NOT_FOUND;case Ge.ALREADY_EXISTS:return B.ALREADY_EXISTS;case Ge.PERMISSION_DENIED:return B.PERMISSION_DENIED;case Ge.FAILED_PRECONDITION:return B.FAILED_PRECONDITION;case Ge.ABORTED:return B.ABORTED;case Ge.OUT_OF_RANGE:return B.OUT_OF_RANGE;case Ge.UNIMPLEMENTED:return B.UNIMPLEMENTED;case Ge.DATA_LOSS:return B.DATA_LOSS;default:return ue()}}(fe=Ge||(Ge={}))[fe.OK=0]="OK",fe[fe.CANCELLED=1]="CANCELLED",fe[fe.UNKNOWN=2]="UNKNOWN",fe[fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",fe[fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",fe[fe.NOT_FOUND=5]="NOT_FOUND",fe[fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",fe[fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",fe[fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",fe[fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",fe[fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",fe[fe.ABORTED=10]="ABORTED",fe[fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",fe[fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",fe[fe.INTERNAL=13]="INTERNAL",fe[fe.UNAVAILABLE=14]="UNAVAILABLE",fe[fe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Hg(){return new TextEncoder}/**
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
 */const Kg=new Xr([4294967295,4294967295],0);function Ru(n){const e=Hg().encode(n),t=new Xc;return t.update(e),new Uint8Array(t.digest())}function Su(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new Xr([t,r],0),new Xr([i,o],0)]}class fl{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new ks(`Invalid padding: ${t}`);if(r<0)throw new ks(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ks(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new ks(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Xr.fromNumber(this.Ie)}Ee(e,t,r){let i=e.add(t.multiply(Xr.fromNumber(r)));return i.compare(Kg)===1&&(i=new Xr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=Ru(e),[r,i]=Su(t);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,i,o);if(!this.de(a))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),a=new fl(o,i,t);return r.forEach(u=>a.insert(u)),a}insert(e){if(this.Ie===0)return;const t=Ru(e),[r,i]=Su(t);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,i,o);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class ks extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ho{constructor(e,t,r,i,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,Js.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Ho(le.min(),i,new Be(Te),Nr(),ye())}}class Js{constructor(e,t,r,i,o){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Js(r,t,ye(),ye(),ye())}}/**
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
 */class go{constructor(e,t,r,i){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=i}}class wh{constructor(e,t){this.targetId=e,this.me=t}}class Ah{constructor(e,t,r=ut.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Pu{constructor(){this.fe=0,this.ge=Nu(),this.pe=ut.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ye(),t=ye(),r=ye();return this.ge.forEach((i,o)=>{switch(o){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:ue()}}),new Js(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=Nu()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Le(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Gg{constructor(e){this.Le=e,this.Be=new Map,this.ke=Nr(),this.qe=ku(),this.Qe=new Be(Te)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:ue()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,i)=>{this.ze(i)&&t(i)})}He(e){const t=e.targetId,r=e.me.count,i=this.Je(t);if(i){const o=i.target;if(Pa(o))if(r===0){const a=new ee(o.path);this.Ue(t,a,_t.newNoDocument(a,le.min()))}else Le(r===1);else{const a=this.Ye(t);if(a!==r){const u=this.Ze(e),h=u?this.Xe(u,e,a):1;if(h!==0){this.je(t);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,d)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=t;let a,u;try{a=ii(r).toUint8Array()}catch(h){if(h instanceof oh)return Ki("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{u=new fl(a,i,o)}catch(h){return Ki(h instanceof ks?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return u.Ie===0?null:u}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let i=0;return r.forEach(o=>{const a=this.Le.tt(),u=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;e.mightContain(u)||(this.Ue(t,o,null),i++)}),i}rt(e){const t=new Map;this.Be.forEach((o,a)=>{const u=this.Je(a);if(u){if(o.current&&Pa(u.target)){const h=new ee(u.target.path);this.ke.get(h)!==null||this.it(a,h)||this.Ue(a,h,_t.newNoDocument(h,e))}o.be&&(t.set(a,o.ve()),o.Ce())}});let r=ye();this.qe.forEach((o,a)=>{let u=!0;a.forEachWhile(h=>{const d=this.Je(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(r=r.add(o))}),this.ke.forEach((o,a)=>a.setReadTime(e));const i=new Ho(e,t,this.Qe,this.ke,r);return this.ke=Nr(),this.qe=ku(),this.Qe=new Be(Te),i}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Pu,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new lt(Te),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||G("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Pu),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function ku(){return new Be(ee.comparator)}function Nu(){return new Be(ee.comparator)}const Wg={asc:"ASCENDING",desc:"DESCENDING"},Qg={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Yg={and:"AND",or:"OR"};class Jg{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Va(n,e){return n.useProto3Json||xo(e)?e:{value:e}}function $g(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Xg(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function ji(n){return Le(!!n),le.fromTimestamp(function(t){const r=kr(t);return new xt(r.seconds,r.nanos)}(n))}function Zg(n,e){return Oa(n,e).canonicalString()}function Oa(n,e){const t=function(i){return new Oe(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function bh(n){const e=Oe.fromString(n);return Le(kh(e)),e}function da(n,e){const t=bh(e);if(t.get(1)!==n.databaseId.projectId)throw new Z(B.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new Z(B.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ee(Rh(t))}function Ch(n,e){return Zg(n.databaseId,e)}function e_(n){const e=bh(n);return e.length===4?Oe.emptyPath():Rh(e)}function Du(n){return new Oe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Rh(n){return Le(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function t_(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:ue()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(d,p){return d.useProto3Json?(Le(p===void 0||typeof p=="string"),ut.fromBase64String(p||"")):(Le(p===void 0||p instanceof Buffer||p instanceof Uint8Array),ut.fromUint8Array(p||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,u=a&&function(d){const p=d.code===void 0?B.UNKNOWN:Ih(d.code);return new Z(p,d.message||"")}(a);t=new Ah(r,i,o,u||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=da(n,r.document.name),o=ji(r.document.updateTime),a=r.document.createTime?ji(r.document.createTime):le.min(),u=new Pn({mapValue:{fields:r.document.fields}}),h=_t.newFoundDocument(i,o,a,u),d=r.targetIds||[],p=r.removedTargetIds||[];t=new go(d,p,h.key,h)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=da(n,r.document),o=r.readTime?ji(r.readTime):le.min(),a=_t.newNoDocument(i,o),u=r.removedTargetIds||[];t=new go([],u,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=da(n,r.document),o=r.removedTargetIds||[];t=new go([],o,i,null)}else{if(!("filter"in e))return ue();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,a=new zg(i,o),u=r.targetId;t=new wh(u,a)}}return t}function n_(n,e){return{documents:[Ch(n,e.path)]}}function r_(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Ch(n,i);const o=function(d){if(d.length!==0)return Ph(On.create(d,"and"))}(e.filters);o&&(t.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(p=>function(E){return{field:Li(E.field),direction:o_(E.dir)}}(p))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const u=Va(n,e.limit);return u!==null&&(t.structuredQuery.limit=u),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:t,parent:i}}function i_(n){let e=e_(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){Le(r===1);const p=t.from[0];p.allDescendants?i=p.collectionId:e=e.child(p.collectionId)}let o=[];t.where&&(o=function(A){const E=Sh(A);return E instanceof On&&uh(E)?E.getFilters():[E]}(t.where));let a=[];t.orderBy&&(a=function(A){return A.map(E=>function(O){return new Ro(Mi(O.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(O.direction))}(E))}(t.orderBy));let u=null;t.limit&&(u=function(A){let E;return E=typeof A=="object"?A.value:A,xo(E)?null:E}(t.limit));let h=null;t.startAt&&(h=function(A){const E=!!A.before,P=A.values||[];return new Co(P,E)}(t.startAt));let d=null;return t.endAt&&(d=function(A){const E=!A.before,P=A.values||[];return new Co(P,E)}(t.endAt)),wg(e,i,a,o,u,"F",h,d)}function s_(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ue()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Sh(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Mi(t.unaryFilter.field);return Je.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Mi(t.unaryFilter.field);return Je.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Mi(t.unaryFilter.field);return Je.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Mi(t.unaryFilter.field);return Je.create(a,"!=",{nullValue:"NULL_VALUE"});default:return ue()}}(n):n.fieldFilter!==void 0?function(t){return Je.create(Mi(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ue()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return On.create(t.compositeFilter.filters.map(r=>Sh(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ue()}}(t.compositeFilter.op))}(n):ue()}function o_(n){return Wg[n]}function a_(n){return Qg[n]}function l_(n){return Yg[n]}function Li(n){return{fieldPath:n.canonicalString()}}function Mi(n){return Pt.fromServerFormat(n.fieldPath)}function Ph(n){return n instanceof Je?function(t){if(t.op==="=="){if(yu(t.value))return{unaryFilter:{field:Li(t.field),op:"IS_NAN"}};if(_u(t.value))return{unaryFilter:{field:Li(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(yu(t.value))return{unaryFilter:{field:Li(t.field),op:"IS_NOT_NAN"}};if(_u(t.value))return{unaryFilter:{field:Li(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Li(t.field),op:a_(t.op),value:t.value}}}(n):n instanceof On?function(t){const r=t.getFilters().map(i=>Ph(i));return r.length===1?r[0]:{compositeFilter:{op:l_(t.op),filters:r}}}(n):ue()}function kh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Ar{constructor(e,t,r,i,o=le.min(),a=le.min(),u=ut.EMPTY_BYTE_STRING,h=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=h}withSequenceNumber(e){return new Ar(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ar(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ar(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ar(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class u_{constructor(e){this.ct=e}}function c_(n){const e=i_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ka(e,e.limit,"L"):e}/**
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
 */class h_{constructor(){this.un=new d_}addToCollectionParentIndex(e,t){return this.un.add(t),V.resolve()}getCollectionParents(e,t){return V.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return V.resolve()}deleteFieldIndex(e,t){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,t){return V.resolve()}getDocumentsMatchingTarget(e,t){return V.resolve(null)}getIndexType(e,t){return V.resolve(0)}getFieldIndexes(e,t){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,t){return V.resolve(Pr.min())}getMinOffsetFromCollectionGroup(e,t){return V.resolve(Pr.min())}updateCollectionGroup(e,t,r){return V.resolve()}updateIndexEntries(e,t){return V.resolve()}}class d_{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new lt(Oe.comparator),o=!i.has(r);return this.index[t]=i.add(r),o}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new lt(Oe.comparator)).toArray()}}/**
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
 */class Yi{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Yi(0)}static kn(){return new Yi(-1)}}/**
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
 */class f_{constructor(){this.changes=new ts(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,_t.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?V.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class p_{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class m_{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&Ls(r.mutation,i,wr.empty(),xt.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,ye()).next(()=>r))}getLocalViewOfDocuments(e,t,r=ye()){const i=$r();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(o=>{let a=Ps();return o.forEach((u,h)=>{a=a.insert(u,h.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=$r();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,ye()))}populateOverlays(e,t,r){const i=[];return r.forEach(o=>{t.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((a,u)=>{t.set(a,u)})})}computeViews(e,t,r,i){let o=Nr();const a=Os(),u=function(){return Os()}();return t.forEach((h,d)=>{const p=r.get(d.key);i.has(d.key)&&(p===void 0||p.mutation instanceof zo)?o=o.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),Ls(p.mutation,d,p.mutation.getFieldMask(),xt.now())):a.set(d.key,wr.empty())}),this.recalculateAndSaveOverlays(e,o).next(h=>(h.forEach((d,p)=>a.set(d,p)),t.forEach((d,p)=>{var A;return u.set(d,new p_(p,(A=a.get(d))!==null&&A!==void 0?A:null))}),u))}recalculateAndSaveOverlays(e,t){const r=Os();let i=new Be((a,u)=>a-u),o=ye();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const u of a)u.keys().forEach(h=>{const d=t.get(h);if(d===null)return;let p=r.get(h)||wr.empty();p=u.applyToLocalView(d,p),r.set(h,p);const A=(i.get(u.batchId)||ye()).add(h);i=i.insert(u.batchId,A)})}).next(()=>{const a=[],u=i.getReverseIterator();for(;u.hasNext();){const h=u.getNext(),d=h.key,p=h.value,A=gh();p.forEach(E=>{if(!o.has(E)){const P=Th(t.get(E),r.get(E));P!==null&&A.set(E,P),o=o.add(E)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,A))}return V.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(a){return ee.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Ag(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(o=>{const a=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-o.size):V.resolve($r());let u=-1,h=o;return a.next(d=>V.forEach(d,(p,A)=>(u<A.largestBatchId&&(u=A.largestBatchId),o.get(p)?V.resolve():this.remoteDocumentCache.getEntry(e,p).next(E=>{h=h.insert(p,E)}))).next(()=>this.populateOverlays(e,d,o)).next(()=>this.computeViews(e,h,d,ye())).next(p=>({batchId:u,changes:Pg(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ee(t)).next(r=>{let i=Ps();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const o=t.collectionGroup;let a=Ps();return this.indexManager.getCollectionParents(e,o).next(u=>V.forEach(u,h=>{const d=function(A,E){return new Fo(E,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)}(t,h.child(o));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(p=>{p.forEach((A,E)=>{a=a.insert(A,E)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,o,i))).next(a=>{o.forEach((h,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,_t.newInvalidDocument(p)))});let u=Ps();return a.forEach((h,d)=>{const p=o.get(h);p!==void 0&&Ls(p.mutation,d,wr.empty(),xt.now()),jo(t,d)&&(u=u.insert(h,d))}),u})}}/**
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
 */class g_{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return V.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:ji(i.createTime)}}(t)),V.resolve()}getNamedQuery(e,t){return V.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(i){return{name:i.name,query:c_(i.bundledQuery),readTime:ji(i.readTime)}}(t)),V.resolve()}}/**
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
 */class __{constructor(){this.overlays=new Be(ee.comparator),this.Ir=new Map}getOverlay(e,t){return V.resolve(this.overlays.get(t))}getOverlays(e,t){const r=$r();return V.forEach(t,i=>this.getOverlay(e,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,o)=>{this.ht(e,t,o)}),V.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(r)),V.resolve()}getOverlaysForCollection(e,t,r){const i=$r(),o=t.length+1,a=new ee(t.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const h=u.getNext().value,d=h.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&i.set(h.getKey(),h)}return V.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let o=new Be((d,p)=>d-p);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let p=o.get(d.largestBatchId);p===null&&(p=$r(),o=o.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const u=$r(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,p)=>u.set(d,p)),!(u.size()>=i)););return V.resolve(u)}ht(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new qg(t,r));let o=this.Ir.get(t);o===void 0&&(o=ye(),this.Ir.set(t,o)),this.Ir.set(t,o.add(r.key))}}/**
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
 */class y_{constructor(){this.sessionToken=ut.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,V.resolve()}}/**
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
 */class pl{constructor(){this.Tr=new lt(et.Er),this.dr=new lt(et.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new et(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new et(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new ee(new Oe([])),r=new et(t,e),i=new et(t,e+1),o=[];return this.dr.forEachInRange([r,i],a=>{this.Vr(a),o.push(a.key)}),o}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new ee(new Oe([])),r=new et(t,e),i=new et(t,e+1);let o=ye();return this.dr.forEachInRange([r,i],a=>{o=o.add(a.key)}),o}containsKey(e){const t=new et(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class et{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return ee.comparator(e.key,t.key)||Te(e.wr,t.wr)}static Ar(e,t){return Te(e.wr,t.wr)||ee.comparator(e.key,t.key)}}/**
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
 */class E_{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new lt(et.Er)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new jg(o,t,r,i);this.mutationQueue.push(a);for(const u of i)this.br=this.br.add(new et(u.key,o)),this.indexManager.addToCollectionParentIndex(e,u.key.path.popLast());return V.resolve(a)}lookupMutationBatch(e,t){return V.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.vr(r),o=i<0?0:i;return V.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new et(t,0),i=new et(t,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([r,i],a=>{const u=this.Dr(a.wr);o.push(u)}),V.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new lt(Te);return t.forEach(i=>{const o=new et(i,0),a=new et(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,a],u=>{r=r.add(u.wr)})}),V.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let o=r;ee.isDocumentKey(o)||(o=o.child(""));const a=new et(new ee(o),0);let u=new lt(Te);return this.br.forEachWhile(h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(u=u.add(h.wr)),!0)},a),V.resolve(this.Cr(u))}Cr(e){const t=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){Le(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return V.forEach(t.mutations,i=>{const o=new et(i.key,t.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new et(t,0),i=this.br.firstAfterOrEqual(r);return V.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class T_{constructor(e){this.Mr=e,this.docs=function(){return new Be(ee.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),o=i?i.size:0,a=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return V.resolve(r?r.document.mutableCopy():_t.newInvalidDocument(t))}getEntries(e,t){let r=Nr();return t.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():_t.newInvalidDocument(i))}),V.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let o=Nr();const a=t.path,u=new ee(a.child("")),h=this.docs.getIteratorFrom(u);for(;h.hasNext();){const{key:d,value:{document:p}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||ig(rg(p),r)<=0||(i.has(p.key)||jo(t,p))&&(o=o.insert(p.key,p.mutableCopy()))}return V.resolve(o)}getAllFromCollectionGroup(e,t,r,i){ue()}Or(e,t){return V.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new v_(this)}getSize(e){return V.resolve(this.size)}}class v_ extends f_{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),V.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
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
 */class I_{constructor(e){this.persistence=e,this.Nr=new ts(t=>ll(t),ul),this.lastRemoteSnapshotVersion=le.min(),this.highestTargetId=0,this.Lr=0,this.Br=new pl,this.targetCount=0,this.kr=Yi.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,i)=>t(i)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),V.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new Yi(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,V.resolve()}updateTargetData(e,t){return this.Kn(t),V.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,t,r){let i=0;const o=[];return this.Nr.forEach((a,u)=>{u.sequenceNumber<=t&&r.get(u.targetId)===null&&(this.Nr.delete(a),o.push(this.removeMatchingKeysForTargetId(e,u.targetId)),i++)}),V.waitFor(o).next(()=>i)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return V.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),V.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const i=this.persistence.referenceDelegate,o=[];return i&&t.forEach(a=>{o.push(i.markPotentiallyOrphaned(e,a))}),V.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),V.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return V.resolve(r)}containsKey(e,t){return V.resolve(this.Br.containsKey(t))}}/**
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
 */class w_{constructor(e,t){this.qr={},this.overlays={},this.Qr=new il(0),this.Kr=!1,this.Kr=!0,this.$r=new y_,this.referenceDelegate=e(this),this.Ur=new I_(this),this.indexManager=new h_,this.remoteDocumentCache=function(i){return new T_(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new u_(t),this.Gr=new g_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new __,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new E_(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){G("MemoryPersistence","Starting transaction:",e);const i=new A_(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(o=>this.referenceDelegate.jr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Hr(e,t){return V.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class A_ extends og{constructor(e){super(),this.currentSequenceNumber=e}}class ml{constructor(e){this.persistence=e,this.Jr=new pl,this.Yr=null}static Zr(e){return new ml(e)}get Xr(){if(this.Yr)return this.Yr;throw ue()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),V.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),V.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(o=>this.Xr.add(o.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.Xr,r=>{const i=ee.fromPath(r);return this.ei(e,i).next(o=>{o||t.removeEntry(i,le.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return V.or([()=>V.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
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
 */class gl{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=i}static Wi(e,t){let r=ye(),i=ye();for(const o of t.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new gl(e,t.fromCache,r,i)}}/**
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
 */class b_{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class C_{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return gd()?8:ag(yt())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,i){const o={result:null};return this.Yi(e,t).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.Zi(e,t,i,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new b_;return this.Xi(e,t,a).next(u=>{if(o.result=u,this.zi)return this.es(e,t,a,u.size)})}).next(()=>o.result)}es(e,t,r,i){return r.documentReadCount<this.ji?(As()<=de.DEBUG&&G("QueryEngine","SDK will not create cache indexes for query:",Oi(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),V.resolve()):(As()<=de.DEBUG&&G("QueryEngine","Query:",Oi(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(As()<=de.DEBUG&&G("QueryEngine","The SDK decides to create cache indexes for query:",Oi(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Dn(t))):V.resolve())}Yi(e,t){if(Iu(t))return V.resolve(null);let r=Dn(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=ka(t,null,"F"),r=Dn(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const a=ye(...o);return this.Ji.getDocuments(e,a).next(u=>this.indexManager.getMinOffset(e,r).next(h=>{const d=this.ts(t,u);return this.ns(t,d,a,h.readTime)?this.Yi(e,ka(t,null,"F")):this.rs(e,d,t,h)}))})))}Zi(e,t,r,i){return Iu(t)||i.isEqual(le.min())?V.resolve(null):this.Ji.getDocuments(e,r).next(o=>{const a=this.ts(t,o);return this.ns(t,a,r,i)?V.resolve(null):(As()<=de.DEBUG&&G("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Oi(t)),this.rs(e,a,t,ng(i,-1)).next(u=>u))})}ts(e,t){let r=new lt(ph(e));return t.forEach((i,o)=>{jo(e,o)&&(r=r.add(o))}),r}ns(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Xi(e,t,r){return As()<=de.DEBUG&&G("QueryEngine","Using full collection scan to execute query:",Oi(t)),this.Ji.getDocumentsMatchingQuery(e,t,Pr.min(),r)}rs(e,t,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(o=>(t.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
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
 */class R_{constructor(e,t,r,i){this.persistence=e,this.ss=t,this.serializer=i,this.os=new Be(Te),this._s=new ts(o=>ll(o),ul),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new m_(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function S_(n,e,t,r){return new R_(n,e,t,r)}async function Nh(n,e){const t=me(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],u=[];let h=ye();for(const d of i){a.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}for(const d of o){u.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}return t.localDocuments.getDocuments(r,h).next(d=>({hs:d,removedBatchIds:a,addedBatchIds:u}))})})}function Dh(n){const e=me(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function P_(n,e){const t=me(n),r=e.snapshotVersion;let i=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=t.cs.newChangeBuffer({trackRemovals:!0});i=t.os;const u=[];e.targetChanges.forEach((p,A)=>{const E=i.get(A);if(!E)return;u.push(t.Ur.removeMatchingKeys(o,p.removedDocuments,A).next(()=>t.Ur.addMatchingKeys(o,p.addedDocuments,A)));let P=E.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(A)!==null?P=P.withResumeToken(ut.EMPTY_BYTE_STRING,le.min()).withLastLimboFreeSnapshotVersion(le.min()):p.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(p.resumeToken,r)),i=i.insert(A,P),function(M,k,$){return M.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-M.snapshotVersion.toMicroseconds()>=3e8?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0}(E,P,p)&&u.push(t.Ur.updateTargetData(o,P))});let h=Nr(),d=ye();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&u.push(t.persistence.referenceDelegate.updateLimboDocument(o,p))}),u.push(k_(o,a,e.documentUpdates).next(p=>{h=p.Ps,d=p.Is})),!r.isEqual(le.min())){const p=t.Ur.getLastRemoteSnapshotVersion(o).next(A=>t.Ur.setTargetsMetadata(o,o.currentSequenceNumber,r));u.push(p)}return V.waitFor(u).next(()=>a.apply(o)).next(()=>t.localDocuments.getLocalViewOfDocuments(o,h,d)).next(()=>h)}).then(o=>(t.os=i,o))}function k_(n,e,t){let r=ye(),i=ye();return t.forEach(o=>r=r.add(o)),e.getEntries(n,r).next(o=>{let a=Nr();return t.forEach((u,h)=>{const d=o.get(u);h.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(u)),h.isNoDocument()&&h.version.isEqual(le.min())?(e.removeEntry(u,h.readTime),a=a.insert(u,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(h),a=a.insert(u,h)):G("LocalStore","Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",h.version)}),{Ps:a,Is:i}})}function N_(n,e){const t=me(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Ur.getTargetData(r,e).next(o=>o?(i=o,V.resolve(i)):t.Ur.allocateTargetId(r).next(a=>(i=new Ar(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function La(n,e,t){const r=me(n),i=r.os.get(e),o=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!Ys(a))throw a;G("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Vu(n,e,t){const r=me(n);let i=le.min(),o=ye();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,d,p){const A=me(h),E=A._s.get(p);return E!==void 0?V.resolve(A.os.get(E)):A.Ur.getTargetData(d,p)}(r,a,Dn(e)).next(u=>{if(u)return i=u.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,u.targetId).next(h=>{o=h})}).next(()=>r.ss.getDocumentsMatchingQuery(a,e,t?i:le.min(),t?o:ye())).next(u=>(D_(r,Cg(e),u),{documents:u,Ts:o})))}function D_(n,e,t){let r=n.us.get(e)||le.min();t.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.us.set(e,r)}class Ou{constructor(){this.activeTargetIds=Dg()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class V_{constructor(){this.so=new Ou,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Ou,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class O_{_o(e){}shutdown(){}}/**
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
 */class Lu{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){G("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){G("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let lo=null;function fa(){return lo===null?lo=function(){return 268435456+Math.round(2147483648*Math.random())}():lo++,"0x"+lo.toString(16)}/**
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
 */const L_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class M_{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const pt="WebChannelConnection";class x_ extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${i}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get Fo(){return!1}Mo(t,r,i,o,a){const u=fa(),h=this.xo(t,r.toUriEncodedString());G("RestConnection",`Sending RPC '${t}' ${u}:`,h,i);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,o,a),this.No(t,h,d,i).then(p=>(G("RestConnection",`Received RPC '${t}' ${u}: `,p),p),p=>{throw Ki("RestConnection",`RPC '${t}' ${u} failed with error: `,p,"url: ",h,"request:",i),p})}Lo(t,r,i,o,a,u){return this.Mo(t,r,i,o,a)}Oo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+es}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,a)=>t[a]=o),i&&i.headers.forEach((o,a)=>t[a]=o)}xo(t,r){const i=L_[t];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,i){const o=fa();return new Promise((a,u)=>{const h=new Zc;h.setWithCredentials(!0),h.listenOnce(eh.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case po.NO_ERROR:const p=h.getResponseJson();G(pt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),a(p);break;case po.TIMEOUT:G(pt,`RPC '${e}' ${o} timed out`),u(new Z(B.DEADLINE_EXCEEDED,"Request time out"));break;case po.HTTP_ERROR:const A=h.getStatus();if(G(pt,`RPC '${e}' ${o} failed with status:`,A,"response text:",h.getResponseText()),A>0){let E=h.getResponseJson();Array.isArray(E)&&(E=E[0]);const P=E==null?void 0:E.error;if(P&&P.status&&P.message){const O=function(k){const $=k.toLowerCase().replace(/_/g,"-");return Object.values(B).indexOf($)>=0?$:B.UNKNOWN}(P.status);u(new Z(O,P.message))}else u(new Z(B.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new Z(B.UNAVAILABLE,"Connection failed."));break;default:ue()}}finally{G(pt,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(i);G(pt,`RPC '${e}' ${o} sending request:`,i),h.send(t,"POST",d,r,15)})}Bo(e,t,r){const i=fa(),o=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=rh(),u=nh(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Oo(h.initMessageHeaders,t,r),h.encodeInitMessageHeaders=!0;const p=o.join("");G(pt,`Creating RPC '${e}' stream ${i}: ${p}`,h);const A=a.createWebChannel(p,h);let E=!1,P=!1;const O=new M_({Io:k=>{P?G(pt,`Not sending because RPC '${e}' stream ${i} is closed:`,k):(E||(G(pt,`Opening RPC '${e}' stream ${i} transport.`),A.open(),E=!0),G(pt,`RPC '${e}' stream ${i} sending:`,k),A.send(k))},To:()=>A.close()}),M=(k,$,Y)=>{k.listen($,H=>{try{Y(H)}catch(z){setTimeout(()=>{throw z},0)}})};return M(A,Ss.EventType.OPEN,()=>{P||(G(pt,`RPC '${e}' stream ${i} transport opened.`),O.yo())}),M(A,Ss.EventType.CLOSE,()=>{P||(P=!0,G(pt,`RPC '${e}' stream ${i} transport closed`),O.So())}),M(A,Ss.EventType.ERROR,k=>{P||(P=!0,Ki(pt,`RPC '${e}' stream ${i} transport errored:`,k),O.So(new Z(B.UNAVAILABLE,"The operation could not be completed")))}),M(A,Ss.EventType.MESSAGE,k=>{var $;if(!P){const Y=k.data[0];Le(!!Y);const H=Y,z=H.error||(($=H[0])===null||$===void 0?void 0:$.error);if(z){G(pt,`RPC '${e}' stream ${i} received error:`,z);const F=z.status;let j=function(_){const v=Ge[_];if(v!==void 0)return Ih(v)}(F),T=z.message;j===void 0&&(j=B.INTERNAL,T="Unknown error status: "+F+" with message "+z.message),P=!0,O.So(new Z(j,T)),A.close()}else G(pt,`RPC '${e}' stream ${i} received:`,Y),O.bo(Y)}}),M(u,th.STAT_EVENT,k=>{k.stat===Aa.PROXY?G(pt,`RPC '${e}' stream ${i} detected buffering proxy`):k.stat===Aa.NOPROXY&&G(pt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{O.wo()},0),O}}function pa(){return typeof document<"u"?document:null}/**
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
 */function Vh(n){return new Jg(n,!0)}/**
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
 */class Oh{constructor(e,t,r=1e3,i=1.5,o=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=i,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,t-r);i>0&&G("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class U_{constructor(e,t,r,i,o,a,u,h){this.ui=e,this.Ho=r,this.Jo=i,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=h,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Oh(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===B.RESOURCE_EXHAUSTED?(tr(t.toString()),tr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===B.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===t&&this.P_(r,i)},r=>{e(()=>{const i=new Z(B.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return G("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(G("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class F_ extends U_{constructor(e,t,r,i,o,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,a),this.serializer=o}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=t_(this.serializer,e),r=function(o){if(!("targetChange"in o))return le.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?le.min():a.readTime?ji(a.readTime):le.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=Du(this.serializer),t.addTarget=function(o,a){let u;const h=a.target;if(u=Pa(h)?{documents:n_(o,h)}:{query:r_(o,h)._t},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=Xg(o,a.resumeToken);const d=Va(o,a.expectedCount);d!==null&&(u.expectedCount=d)}else if(a.snapshotVersion.compareTo(le.min())>0){u.readTime=$g(o,a.snapshotVersion.toTimestamp());const d=Va(o,a.expectedCount);d!==null&&(u.expectedCount=d)}return u}(this.serializer,e);const r=s_(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=Du(this.serializer),t.removeTarget=e,this.a_(t)}}/**
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
 */class B_ extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new Z(B.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Mo(e,Oa(t,r),i,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Z(B.UNKNOWN,o.toString())})}Lo(e,t,r,i,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Lo(e,Oa(t,r),i,a,u,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new Z(B.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class j_{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(tr(t),this.D_=!1):G("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class q_{constructor(e,t,r,i,o){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(a=>{r.enqueueAndForget(async()=>{Xs(this)&&(G("RemoteStore","Restarting streams for network reachability change."),await async function(h){const d=me(h);d.L_.add(4),await $s(d),d.q_.set("Unknown"),d.L_.delete(4),await Ko(d)}(this))})}),this.q_=new j_(r,i)}}async function Ko(n){if(Xs(n))for(const e of n.B_)await e(!0)}async function $s(n){for(const e of n.B_)await e(!1)}function Lh(n,e){const t=me(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),Tl(t)?El(t):ns(t).r_()&&yl(t,e))}function _l(n,e){const t=me(n),r=ns(t);t.N_.delete(e),r.r_()&&Mh(t,e),t.N_.size===0&&(r.r_()?r.o_():Xs(t)&&t.q_.set("Unknown"))}function yl(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(le.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ns(n).A_(e)}function Mh(n,e){n.Q_.xe(e),ns(n).R_(e)}function El(n){n.Q_=new Gg({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),ns(n).start(),n.q_.v_()}function Tl(n){return Xs(n)&&!ns(n).n_()&&n.N_.size>0}function Xs(n){return me(n).L_.size===0}function xh(n){n.Q_=void 0}async function z_(n){n.q_.set("Online")}async function H_(n){n.N_.forEach((e,t)=>{yl(n,e)})}async function K_(n,e){xh(n),Tl(n)?(n.q_.M_(e),El(n)):n.q_.set("Unknown")}async function G_(n,e,t){if(n.q_.set("Online"),e instanceof Ah&&e.state===2&&e.cause)try{await async function(i,o){const a=o.cause;for(const u of o.targetIds)i.N_.has(u)&&(await i.remoteSyncer.rejectListen(u,a),i.N_.delete(u),i.Q_.removeTarget(u))}(n,e)}catch(r){G("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Mu(n,r)}else if(e instanceof go?n.Q_.Ke(e):e instanceof wh?n.Q_.He(e):n.Q_.We(e),!t.isEqual(le.min()))try{const r=await Dh(n.localStore);t.compareTo(r)>=0&&await function(o,a){const u=o.Q_.rt(a);return u.targetChanges.forEach((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const p=o.N_.get(d);p&&o.N_.set(d,p.withResumeToken(h.resumeToken,a))}}),u.targetMismatches.forEach((h,d)=>{const p=o.N_.get(h);if(!p)return;o.N_.set(h,p.withResumeToken(ut.EMPTY_BYTE_STRING,p.snapshotVersion)),Mh(o,h);const A=new Ar(p.target,h,d,p.sequenceNumber);yl(o,A)}),o.remoteSyncer.applyRemoteEvent(u)}(n,t)}catch(r){G("RemoteStore","Failed to raise snapshot:",r),await Mu(n,r)}}async function Mu(n,e,t){if(!Ys(e))throw e;n.L_.add(1),await $s(n),n.q_.set("Offline"),t||(t=()=>Dh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{G("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await Ko(n)})}async function xu(n,e){const t=me(n);t.asyncQueue.verifyOperationInProgress(),G("RemoteStore","RemoteStore received new credentials");const r=Xs(t);t.L_.add(3),await $s(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await Ko(t)}async function W_(n,e){const t=me(n);e?(t.L_.delete(2),await Ko(t)):e||(t.L_.add(2),await $s(t),t.q_.set("Unknown"))}function ns(n){return n.K_||(n.K_=function(t,r,i){const o=me(t);return o.w_(),new F_(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Eo:z_.bind(null,n),Ro:H_.bind(null,n),mo:K_.bind(null,n),d_:G_.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),Tl(n)?El(n):n.q_.set("Unknown")):(await n.K_.stop(),xh(n))})),n.K_}/**
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
 */class vl{constructor(e,t,r,i,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Zr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,o){const a=Date.now()+r,u=new vl(e,t,a,i,o);return u.start(r),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Z(B.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Uh(n,e){if(tr("AsyncQueue",`${e}: ${n}`),Ys(n))return new Z(B.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class qi{constructor(e){this.comparator=e?(t,r)=>e(t,r)||ee.comparator(t.key,r.key):(t,r)=>ee.comparator(t.key,r.key),this.keyedMap=Ps(),this.sortedSet=new Be(this.comparator)}static emptySet(e){return new qi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof qi)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new qi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class Uu{constructor(){this.W_=new Be(ee.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):ue():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Ji{constructor(e,t,r,i,o,a,u,h,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,i,o){const a=[];return t.forEach(u=>{a.push({type:0,doc:u})}),new Ji(e,t,qi.emptySet(t),a,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Bo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class Q_{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class Y_{constructor(){this.queries=Fu(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const i=me(t),o=i.queries;i.queries=Fu(),o.forEach((a,u)=>{for(const h of u.j_)h.onError(r)})})(this,new Z(B.ABORTED,"Firestore shutting down"))}}function Fu(){return new ts(n=>fh(n),Bo)}async function J_(n,e){const t=me(n);let r=3;const i=e.query;let o=t.queries.get(i);o?!o.H_()&&e.J_()&&(r=2):(o=new Q_,r=e.J_()?0:1);try{switch(r){case 0:o.z_=await t.onListen(i,!0);break;case 1:o.z_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){const u=Uh(a,`Initialization of query '${Oi(e.query)}' failed`);return void e.onError(u)}t.queries.set(i,o),o.j_.push(e),e.Z_(t.onlineState),o.z_&&e.X_(o.z_)&&Il(t)}async function $_(n,e){const t=me(n),r=e.query;let i=3;const o=t.queries.get(r);if(o){const a=o.j_.indexOf(e);a>=0&&(o.j_.splice(a,1),o.j_.length===0?i=e.J_()?0:1:!o.H_()&&e.J_()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function X_(n,e){const t=me(n);let r=!1;for(const i of e){const o=i.query,a=t.queries.get(o);if(a){for(const u of a.j_)u.X_(i)&&(r=!0);a.z_=i}}r&&Il(t)}function Z_(n,e,t){const r=me(n),i=r.queries.get(e);if(i)for(const o of i.j_)o.onError(t);r.queries.delete(e)}function Il(n){n.Y_.forEach(e=>{e.next()})}var Ma,Bu;(Bu=Ma||(Ma={})).ea="default",Bu.Cache="cache";class ey{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ji(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=Ji.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Ma.Cache}}/**
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
 */class Fh{constructor(e){this.key=e}}class Bh{constructor(e){this.key=e}}class ty{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ye(),this.mutatedKeys=ye(),this.Aa=ph(e),this.Ra=new qi(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new Uu,i=t?t.Ra:this.Ra;let o=t?t.mutatedKeys:this.mutatedKeys,a=i,u=!1;const h=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((p,A)=>{const E=i.get(p),P=jo(this.query,A)?A:null,O=!!E&&this.mutatedKeys.has(E.key),M=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let k=!1;E&&P?E.data.isEqual(P.data)?O!==M&&(r.track({type:3,doc:P}),k=!0):this.ga(E,P)||(r.track({type:2,doc:P}),k=!0,(h&&this.Aa(P,h)>0||d&&this.Aa(P,d)<0)&&(u=!0)):!E&&P?(r.track({type:0,doc:P}),k=!0):E&&!P&&(r.track({type:1,doc:E}),k=!0,(h||d)&&(u=!0)),k&&(P?(a=a.add(P),o=M?o.add(p):o.delete(p)):(a=a.delete(p),o=o.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),o=o.delete(p.key),r.track({type:1,doc:p})}return{Ra:a,fa:r,ns:u,mutatedKeys:o}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const o=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort((p,A)=>function(P,O){const M=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ue()}};return M(P)-M(O)}(p.type,A.type)||this.Aa(p.doc,A.doc)),this.pa(r),i=i!=null&&i;const u=t&&!i?this.ya():[],h=this.da.size===0&&this.current&&!i?1:0,d=h!==this.Ea;return this.Ea=h,a.length!==0||d?{snapshot:new Ji(this.query,e.Ra,o,a,e.mutatedKeys,h===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:u}:{wa:u}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Uu,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ye(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new Bh(r))}),this.da.forEach(r=>{e.has(r)||t.push(new Fh(r))}),t}ba(e){this.Ta=e.Ts,this.da=ye();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return Ji.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class ny{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class ry{constructor(e){this.key=e,this.va=!1}}class iy{constructor(e,t,r,i,o,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new ts(u=>fh(u),Bo),this.Ma=new Map,this.xa=new Set,this.Oa=new Be(ee.comparator),this.Na=new Map,this.La=new pl,this.Ba={},this.ka=new Map,this.qa=Yi.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function sy(n,e,t=!0){const r=Kh(n);let i;const o=r.Fa.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Da()):i=await jh(r,e,t,!0),i}async function oy(n,e){const t=Kh(n);await jh(t,e,!0,!1)}async function jh(n,e,t,r){const i=await N_(n.localStore,Dn(e)),o=i.targetId,a=n.sharedClientState.addLocalQueryTarget(o,t);let u;return r&&(u=await ay(n,e,o,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&Lh(n.remoteStore,i),u}async function ay(n,e,t,r,i){n.Ka=(A,E,P)=>async function(M,k,$,Y){let H=k.view.ma($);H.ns&&(H=await Vu(M.localStore,k.query,!1).then(({documents:T})=>k.view.ma(T,H)));const z=Y&&Y.targetChanges.get(k.targetId),F=Y&&Y.targetMismatches.get(k.targetId)!=null,j=k.view.applyChanges(H,M.isPrimaryClient,z,F);return qu(M,k.targetId,j.wa),j.snapshot}(n,A,E,P);const o=await Vu(n.localStore,e,!0),a=new ty(e,o.Ts),u=a.ma(o.documents),h=Js.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),d=a.applyChanges(u,n.isPrimaryClient,h);qu(n,t,d.wa);const p=new ny(e,t,a);return n.Fa.set(e,p),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),d.snapshot}async function ly(n,e,t){const r=me(n),i=r.Fa.get(e),o=r.Ma.get(i.targetId);if(o.length>1)return r.Ma.set(i.targetId,o.filter(a=>!Bo(a,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await La(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&_l(r.remoteStore,i.targetId),xa(r,i.targetId)}).catch(rl)):(xa(r,i.targetId),await La(r.localStore,i.targetId,!0))}async function uy(n,e){const t=me(n),r=t.Fa.get(e),i=t.Ma.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),_l(t.remoteStore,r.targetId))}async function qh(n,e){const t=me(n);try{const r=await P_(t.localStore,e);e.targetChanges.forEach((i,o)=>{const a=t.Na.get(o);a&&(Le(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.va=!0:i.modifiedDocuments.size>0?Le(a.va):i.removedDocuments.size>0&&(Le(a.va),a.va=!1))}),await Hh(t,r,e)}catch(r){await rl(r)}}function ju(n,e,t){const r=me(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Fa.forEach((o,a)=>{const u=a.view.Z_(e);u.snapshot&&i.push(u.snapshot)}),function(a,u){const h=me(a);h.onlineState=u;let d=!1;h.queries.forEach((p,A)=>{for(const E of A.j_)E.Z_(u)&&(d=!0)}),d&&Il(h)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function cy(n,e,t){const r=me(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Na.get(e),o=i&&i.key;if(o){let a=new Be(ee.comparator);a=a.insert(o,_t.newNoDocument(o,le.min()));const u=ye().add(o),h=new Ho(le.min(),new Map,new Be(Te),a,u);await qh(r,h),r.Oa=r.Oa.remove(o),r.Na.delete(e),wl(r)}else await La(r.localStore,e,!1).then(()=>xa(r,e,t)).catch(rl)}function xa(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||zh(n,r)})}function zh(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(_l(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),wl(n))}function qu(n,e,t){for(const r of t)r instanceof Fh?(n.La.addReference(r.key,e),hy(n,r)):r instanceof Bh?(G("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||zh(n,r.key)):ue()}function hy(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(G("SyncEngine","New document in limbo: "+t),n.xa.add(r),wl(n))}function wl(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new ee(Oe.fromString(e)),r=n.qa.next();n.Na.set(r,new ry(t)),n.Oa=n.Oa.insert(t,r),Lh(n.remoteStore,new Ar(Dn(cl(t.path)),r,"TargetPurposeLimboResolution",il.oe))}}async function Hh(n,e,t){const r=me(n),i=[],o=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((u,h)=>{a.push(r.Ka(h,e,t).then(d=>{var p;if((d||t)&&r.isPrimaryClient){const A=d?!d.fromCache:(p=t==null?void 0:t.targetChanges.get(h.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(h.targetId,A?"current":"not-current")}if(d){i.push(d);const A=gl.Wi(h.targetId,d);o.push(A)}}))}),await Promise.all(a),r.Ca.d_(i),await async function(h,d){const p=me(h);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",A=>V.forEach(d,E=>V.forEach(E.$i,P=>p.persistence.referenceDelegate.addReference(A,E.targetId,P)).next(()=>V.forEach(E.Ui,P=>p.persistence.referenceDelegate.removeReference(A,E.targetId,P)))))}catch(A){if(!Ys(A))throw A;G("LocalStore","Failed to update sequence numbers: "+A)}for(const A of d){const E=A.targetId;if(!A.fromCache){const P=p.os.get(E),O=P.snapshotVersion,M=P.withLastLimboFreeSnapshotVersion(O);p.os=p.os.insert(E,M)}}}(r.localStore,o))}async function dy(n,e){const t=me(n);if(!t.currentUser.isEqual(e)){G("SyncEngine","User change. New user:",e.toKey());const r=await Nh(t.localStore,e);t.currentUser=e,function(o,a){o.ka.forEach(u=>{u.forEach(h=>{h.reject(new Z(B.CANCELLED,a))})}),o.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Hh(t,r.hs)}}function fy(n,e){const t=me(n),r=t.Na.get(e);if(r&&r.va)return ye().add(r.key);{let i=ye();const o=t.Ma.get(e);if(!o)return i;for(const a of o){const u=t.Fa.get(a);i=i.unionWith(u.view.Va)}return i}}function Kh(n){const e=me(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=qh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=fy.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=cy.bind(null,e),e.Ca.d_=X_.bind(null,e.eventManager),e.Ca.$a=Z_.bind(null,e.eventManager),e}class ko{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Vh(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return S_(this.persistence,new C_,e.initialUser,this.serializer)}Ga(e){return new w_(ml.Zr,this.serializer)}Wa(e){return new V_}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ko.provider={build:()=>new ko};class Ua{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ju(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=dy.bind(null,this.syncEngine),await W_(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Y_}()}createDatastore(e){const t=Vh(e.databaseInfo.databaseId),r=function(o){return new x_(o)}(e.databaseInfo);return function(o,a,u,h){return new B_(o,a,u,h)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,o,a,u){return new q_(r,i,o,a,u)}(this.localStore,this.datastore,e.asyncQueue,t=>ju(this.syncEngine,t,0),function(){return Lu.D()?new Lu:new O_}())}createSyncEngine(e,t){return function(i,o,a,u,h,d,p){const A=new iy(i,o,a,u,h,d);return p&&(A.Qa=!0),A}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const o=me(i);G("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await $s(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Ua.provider={build:()=>new Ua};/**
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
 */class py{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):tr("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class my{constructor(e,t,r,i,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=gt.UNAUTHENTICATED,this.clientId=sh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{G("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(G("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Zr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Uh(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ma(n,e){n.asyncQueue.verifyOperationInProgress(),G("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Nh(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function zu(n,e){n.asyncQueue.verifyOperationInProgress();const t=await gy(n);G("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>xu(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>xu(e.remoteStore,i)),n._onlineComponents=e}async function gy(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){G("FirestoreClient","Using user provided OfflineComponentProvider");try{await ma(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===B.FAILED_PRECONDITION||i.code===B.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;Ki("Error using user provided cache. Falling back to memory cache: "+t),await ma(n,new ko)}}else G("FirestoreClient","Using default OfflineComponentProvider"),await ma(n,new ko);return n._offlineComponents}async function _y(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(G("FirestoreClient","Using user provided OnlineComponentProvider"),await zu(n,n._uninitializedComponentsProvider._online)):(G("FirestoreClient","Using default OnlineComponentProvider"),await zu(n,new Ua))),n._onlineComponents}async function yy(n){const e=await _y(n),t=e.eventManager;return t.onListen=sy.bind(null,e.syncEngine),t.onUnlisten=ly.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=oy.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=uy.bind(null,e.syncEngine),t}function Ey(n,e,t={}){const r=new Zr;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,u,h,d){const p=new py({next:E=>{p.Za(),a.enqueueAndForget(()=>$_(o,A));const P=E.docs.has(u);!P&&E.fromCache?d.reject(new Z(B.UNAVAILABLE,"Failed to get document because the client is offline.")):P&&E.fromCache&&h&&h.source==="server"?d.reject(new Z(B.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(E)},error:E=>d.reject(E)}),A=new ey(cl(u.path),p,{includeMetadataChanges:!0,_a:!0});return J_(o,A)}(await yy(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function Gh(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Hu=new Map;/**
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
 */function Ty(n,e,t){if(!t)throw new Z(B.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function vy(n,e,t,r){if(e===!0&&r===!0)throw new Z(B.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Ku(n){if(!ee.isDocumentKey(n))throw new Z(B.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Iy(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ue()}function Fa(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new Z(B.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Iy(n);throw new Z(B.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */class Gu{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Z(B.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Z(B.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}vy("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Gh((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new Z(B.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new Z(B.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new Z(B.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Al{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Gu({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Z(B.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Z(B.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Gu(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Wm;switch(r.type){case"firstParty":return new $m(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Z(B.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Hu.get(t);r&&(G("ComponentProvider","Removing Datastore"),Hu.delete(t),r.terminate())}(this),Promise.resolve()}}function wy(n,e,t,r={}){var i;const o=(n=Fa(n,Al))._getSettings(),a=`${e}:${t}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&Ki("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let u,h;if(typeof r.mockUserToken=="string")u=r.mockUserToken,h=gt.MOCK_USER;else{u=ud(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new Z(B.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new gt(d)}n._authCredentials=new Qm(new ih(u,h))}}/**
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
 */class bl{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new bl(this.firestore,e,this._query)}}class Xn{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new zs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Xn(this.firestore,e,this._key)}}class zs extends bl{constructor(e,t,r){super(e,t,cl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Xn(this.firestore,null,new ee(e))}withConverter(e){return new zs(this.firestore,e,this._path)}}function Ay(n,e,...t){if(n=rr(n),arguments.length===1&&(e=sh.newId()),Ty("doc","path",e),n instanceof Al){const r=Oe.fromString(e,...t);return Ku(r),new Xn(n,null,new ee(r))}{if(!(n instanceof Xn||n instanceof zs))throw new Z(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Oe.fromString(e,...t));return Ku(r),new Xn(n.firestore,n instanceof zs?n.converter:null,new ee(r))}}/**
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
 */class Wu{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Oh(this,"async_queue_retry"),this.Vu=()=>{const r=pa();r&&G("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=pa();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=pa();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new Zr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Ys(e))throw e;G("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(a){let u=a.message||"";return a.stack&&(u=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),u}(r);throw tr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const i=vl.createAndSchedule(this,e,t,r,o=>this.yu(o));return this.Tu.push(i),i}fu(){this.Eu&&ue()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}class Wh extends Al{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new Wu,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Wu(e),this._firestoreClient=void 0,await e}}}function by(n,e){const t=typeof n=="object"?n:gc(),r=typeof n=="string"?n:"(default)",i=Ga(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=ad("firestore");o&&wy(i,...o)}return i}function Cy(n){if(n._terminated)throw new Z(B.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Ry(n),n._firestoreClient}function Ry(n){var e,t,r;const i=n._freezeSettings(),o=function(u,h,d,p){return new cg(u,h,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,Gh(p.experimentalLongPollingOptions),p.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new my(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(u){const h=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(h),_online:h}}(n._componentsProvider))}/**
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
 */class No{constructor(e){this._byteString=e}static fromBase64String(e){try{return new No(ut.fromBase64String(e))}catch(t){throw new Z(B.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new No(ut.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Qh{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new Z(B.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Pt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Sy{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Z(B.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Z(B.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Te(this._lat,e._lat)||Te(this._long,e._long)}}/**
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
 */class Py{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,e._values)}}const ky=new RegExp("[~\\*/\\[\\]]");function Ny(n,e,t){if(e.search(ky)>=0)throw Qu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new Qh(...e.split("."))._internalPath}catch{throw Qu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function Qu(n,e,t,r,i){let o=`Function ${e}() called with invalid data`;o+=". ";let a="";return new Z(B.INVALID_ARGUMENT,o+n+a)}/**
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
 */class Yh{constructor(e,t,r,i,o){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Xn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Dy(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Jh("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Dy extends Yh{data(){return super.data()}}function Jh(n,e){return typeof e=="string"?Ny(n,e):e instanceof Qh?e._internalPath:e._delegate._internalPath}class Vy{convertValue(e,t="none"){switch(si(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Fe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ii(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ue()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Uo(e,(i,o)=>{r[i]=this.convertValue(o,t)}),r}convertVectorValue(e){var t,r,i;const o=(i=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(a=>Fe(a.doubleValue));return new Py(o)}convertGeoPoint(e){return new Sy(Fe(e.latitude),Fe(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=ol(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Bs(e));default:return null}}convertTimestamp(e){const t=kr(e);return new xt(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Oe.fromString(e);Le(kh(r));const i=new js(r.get(1),r.get(3)),o=new ee(r.popFirst(5));return i.isEqual(t)||tr(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}/**
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
 */class Oy{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class $h extends Yh{constructor(e,t,r,i,o,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ly(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Jh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Ly extends $h{data(e={}){return super.data(e)}}/**
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
 */function My(n){n=Fa(n,Xn);const e=Fa(n.firestore,Wh);return Ey(Cy(e),n._key).then(t=>Uy(e,n,t))}class xy extends Vy{constructor(e){super(),this.firestore=e}convertBytes(e){return new No(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Xn(this.firestore,null,t)}}function Uy(n,e,t){const r=t.docs.get(e._key),i=new xy(n);return new $h(n,i,e._key,r,new Oy(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(i){es=i})($i),zi(new ti("firestore",(r,{instanceIdentifier:i,options:o})=>{const a=r.getProvider("app").getImmediate(),u=new Wh(new Ym(r.getProvider("auth-internal")),new Zm(r.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new Z(B.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new js(d.options.projectId,p)}(a,i),a);return o=Object.assign({useFetchStreams:t},o),u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),Rr(du,"4.7.3",e),Rr(du,"4.7.3","esm2017")})();function bs(n,e,t=0){if(!e)return 0;const r=n-t,i=Math.round(r*100);let o=0,a=i;for(const u of e.rates){if(a<=0)break;const{limit:h,rate:d}=u,p=Math.round(h*100),A=Math.min(a,p),E=Math.round(A*d);o+=E,a-=A}return o/100}const Fy={2023:{rates:[{limit:160200,rate:.062},{limit:1/0,rate:0}]},2024:{rates:[{limit:168600,rate:.062},{limit:1/0,rate:0}]},2025:{rates:[{limit:176100,rate:.062},{limit:1/0,rate:0}]}},By={rates:[{limit:25e4,rate:.0145},{limit:1/0,rate:.0235}]},Wn={2023:{joint:{federal:27700,"New York":{state:16050,city:0},"New Jersey":{state:0,city:0}},single:{federal:13850,"New York":{state:8e3,city:0},"New Jersey":{state:0,city:0}}},2024:{joint:{federal:29200,"New York":{state:18e3,city:0},"New Jersey":{state:0,city:0}},single:{federal:14600,"New York":{state:8e3,city:0},"New Jersey":{state:0,city:0}}},2025:{joint:{federal:3e4,"New York":{state:18e3,city:0},"New Jersey":{state:0,city:0}},single:{federal:15e3,"New York":{state:8e3,city:0},"New Jersey":{state:0,city:0}}}},Se=n=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(n),Yu={2023:{"New York":{rates:[{limit:21950,rate:.04},{limit:45200,rate:.045},{limit:161550,rate:.0525},{limit:323200,rate:.059},{limit:1/0,rate:.0633}]},"New Jersey":{rates:[{limit:2e4,rate:.014},{limit:35e3,rate:.0175},{limit:4e4,rate:.035},{limit:75e3,rate:.05525},{limit:15e4,rate:.0637},{limit:5e5,rate:.0897},{limit:1/0,rate:.1075}]},Federal:{rates:[{limit:22e3,rate:.1},{limit:89450,rate:.12},{limit:190750,rate:.22},{limit:364200,rate:.24},{limit:462500,rate:.32},{limit:693750,rate:.35},{limit:1/0,rate:.37}]}},2024:{"New York":{rates:[{limit:17150,rate:.04},{limit:23600,rate:.045},{limit:27900,rate:.0525},{limit:161550,rate:.055},{limit:323200,rate:.06},{limit:2155350,rate:.0685},{limit:5e6,rate:.0965},{limit:25e6,rate:.103},{limit:1/0,rate:.109}]},"New Jersey":{rates:[{limit:2e4,rate:.014},{limit:35e3,rate:.0175},{limit:4e4,rate:.035},{limit:75e3,rate:.05525},{limit:15e4,rate:.0637},{limit:5e5,rate:.0897},{limit:1/0,rate:.1075}]},Federal:{rates:[{limit:23200,rate:.1},{limit:94300,rate:.12},{limit:201050,rate:.22},{limit:383900,rate:.24},{limit:487450,rate:.32},{limit:731200,rate:.35},{limit:1/0,rate:.37}]}},2025:{"New York":{rates:[{limit:17150,rate:.04},{limit:23600,rate:.045},{limit:27900,rate:.0525},{limit:161550,rate:.055},{limit:323200,rate:.06},{limit:2155350,rate:.0685},{limit:5e6,rate:.0965},{limit:25e6,rate:.103},{limit:1/0,rate:.109}]},"New Jersey":{rates:[{limit:2e4,rate:.014},{limit:35e3,rate:.0175},{limit:4e4,rate:.035},{limit:75e3,rate:.05525},{limit:15e4,rate:.0637},{limit:5e5,rate:.0897},{limit:1/0,rate:.1075}]},Federal:{rates:[{limit:23850,rate:.1},{limit:96950,rate:.12},{limit:206700,rate:.22},{limit:394600,rate:.24},{limit:501050,rate:.32},{limit:751600,rate:.35},{limit:1/0,rate:.37}]}}},jy={2023:{"New York":{rates:[{limit:21600,rate:.03078},{limit:45e3,rate:.03762},{limit:9e4,rate:.03819},{limit:1/0,rate:.03867}]}},2024:{"New York":{rates:[{limit:21600,rate:.03078},{limit:45e3,rate:.03762},{limit:9e4,rate:.03819},{limit:1/0,rate:.03867}]}},2025:{"New York":{rates:[{limit:21600,rate:.03078},{limit:45e3,rate:.03762},{limit:9e4,rate:.03819},{limit:1/0,rate:.03867}]}}},qy=(n,e)=>{typeof window>"u"||localStorage.setItem(n,e)},zy=n=>{if(!(typeof window>"u"))return localStorage.getItem(n)};function Hy(n){let e,t,r,i,o,a,u,h="<tr><th>Tax</th> <th>Amount</th></tr>",d,p,A,E,P="Federal",O,M,k=Se(n[3])+"",$,Y,H,z,F="State",j,T,m=Se(n[2])+"",_,v,I,w,y="City",ie,je,Et=Se(n[4])+"",W,te,De,Me,yn="Social Security",$e,we,Ut=Se(n[5])+"",ct,Tt,nt,kt,ht="Medicare",Nt,dt,vt=Se(n[6])+"",Xe,zt,rt,Ve,En="Total",tn,ft,We=Se(n[7])+"",Ht;return{c(){e=C("h2"),t=Ae(n[0]),r=Ae(" Taxes - "),i=Ae(n[1]),o=N(),a=C("table"),u=C("thead"),u.innerHTML=h,d=N(),p=C("tbody"),A=C("tr"),E=C("td"),E.textContent=P,O=N(),M=C("td"),$=Ae(k),Y=N(),H=C("tr"),z=C("td"),z.textContent=F,j=N(),T=C("td"),_=Ae(m),v=N(),I=C("tr"),w=C("td"),w.textContent=y,ie=N(),je=C("td"),W=Ae(Et),te=N(),De=C("tr"),Me=C("td"),Me.textContent=yn,$e=N(),we=C("td"),ct=Ae(Ut),Tt=N(),nt=C("tr"),kt=C("td"),kt.textContent=ht,Nt=N(),dt=C("td"),Xe=Ae(vt),zt=N(),rt=C("tr"),Ve=C("td"),Ve.textContent=En,tn=N(),ft=C("td"),Ht=Ae(We),this.h()},l(Re){e=R(Re,"H2",{style:!0});var ge=ce(e);t=be(ge,n[0]),r=be(ge," Taxes - "),i=be(ge,n[1]),ge.forEach(Q),o=D(Re),a=R(Re,"TABLE",{style:!0});var Dt=ce(a);u=R(Dt,"THEAD",{"data-svelte-h":!0}),ne(u)!=="svelte-91siwn"&&(u.innerHTML=h),d=D(Dt),p=R(Dt,"TBODY",{});var xe=ce(p);A=R(xe,"TR",{});var Ce=ce(A);E=R(Ce,"TD",{"data-svelte-h":!0}),ne(E)!=="svelte-6waqll"&&(E.textContent=P),O=D(Ce),M=R(Ce,"TD",{});var Ne=ce(M);$=be(Ne,k),Ne.forEach(Q),Ce.forEach(Q),Y=D(xe),H=R(xe,"TR",{});var It=ce(H);z=R(It,"TD",{"data-svelte-h":!0}),ne(z)!=="svelte-qr71y5"&&(z.textContent=F),j=D(It),T=R(It,"TD",{});var Ee=ce(T);_=be(Ee,m),Ee.forEach(Q),It.forEach(Q),v=D(xe),I=R(xe,"TR",{});var qe=ce(I);w=R(qe,"TD",{"data-svelte-h":!0}),ne(w)!=="svelte-1yvq8zx"&&(w.textContent=y),ie=D(qe),je=R(qe,"TD",{});var ze=ce(je);W=be(ze,Et),ze.forEach(Q),qe.forEach(Q),te=D(xe),De=R(xe,"TR",{});var He=ce(De);Me=R(He,"TD",{"data-svelte-h":!0}),ne(Me)!=="svelte-1mp8mpj"&&(Me.textContent=yn),$e=D(He),we=R(He,"TD",{});var Ln=ce(we);ct=be(Ln,Ut),Ln.forEach(Q),He.forEach(Q),Tt=D(xe),nt=R(xe,"TR",{});var nn=ce(nt);kt=R(nn,"TD",{"data-svelte-h":!0}),ne(kt)!=="svelte-b4njfe"&&(kt.textContent=ht),Nt=D(nn),dt=R(nn,"TD",{});var Tn=ce(dt);Xe=be(Tn,vt),Tn.forEach(Q),nn.forEach(Q),zt=D(xe),rt=R(xe,"TR",{});var Vt=ce(rt);Ve=R(Vt,"TD",{style:!0,"data-svelte-h":!0}),ne(Ve)!=="svelte-dm4jeo"&&(Ve.textContent=En),tn=D(Vt),ft=R(Vt,"TD",{style:!0});var Vr=ce(ft);Ht=be(Vr,We),Vr.forEach(Q),Vt.forEach(Q),xe.forEach(Q),Dt.forEach(Q),this.h()},h(){Yr(e,"text-transform","capitalize"),Yr(Ve,"border-top","1px solid black"),Yr(Ve,"font-weight","bold"),Yr(ft,"border-top","1px solid black"),Yr(ft,"font-weight","bold"),Yr(a,"border-collapse","collapse")},m(Re,ge){tt(Re,e,ge),g(e,t),g(e,r),g(e,i),tt(Re,o,ge),tt(Re,a,ge),g(a,u),g(a,d),g(a,p),g(p,A),g(A,E),g(A,O),g(A,M),g(M,$),g(p,Y),g(p,H),g(H,z),g(H,j),g(H,T),g(T,_),g(p,v),g(p,I),g(I,w),g(I,ie),g(I,je),g(je,W),g(p,te),g(p,De),g(De,Me),g(De,$e),g(De,we),g(we,ct),g(p,Tt),g(p,nt),g(nt,kt),g(nt,Nt),g(nt,dt),g(dt,Xe),g(p,zt),g(p,rt),g(rt,Ve),g(rt,tn),g(rt,ft),g(ft,Ht)},p(Re,[ge]){ge&1&&mt(t,Re[0]),ge&2&&mt(i,Re[1]),ge&8&&k!==(k=Se(Re[3])+"")&&mt($,k),ge&4&&m!==(m=Se(Re[2])+"")&&mt(_,m),ge&16&&Et!==(Et=Se(Re[4])+"")&&mt(W,Et),ge&32&&Ut!==(Ut=Se(Re[5])+"")&&mt(ct,Ut),ge&64&&vt!==(vt=Se(Re[6])+"")&&mt(Xe,vt),ge&128&&We!==(We=Se(Re[7])+"")&&mt(Ht,We)},i:Dl,o:Dl,d(Re){Re&&(Q(e),Q(o),Q(a))}}}function Ky(n,e,t){let{stateTaxAmount:r,federalTaxAmount:i,cityTaxAmount:o,socialSecurityTaxAmount:a,medicareTaxAmount:u,interval:h,currentState:d}=e,p=r,A=i,E=o,P=a,O=u,M=r+i+o+a+u;return n.$$set=k=>{"stateTaxAmount"in k&&t(8,r=k.stateTaxAmount),"federalTaxAmount"in k&&t(9,i=k.federalTaxAmount),"cityTaxAmount"in k&&t(10,o=k.cityTaxAmount),"socialSecurityTaxAmount"in k&&t(11,a=k.socialSecurityTaxAmount),"medicareTaxAmount"in k&&t(12,u=k.medicareTaxAmount),"interval"in k&&t(0,h=k.interval),"currentState"in k&&t(1,d=k.currentState)},n.$$.update=()=>{if(n.$$.dirty&8061)switch(h){case"annual":t(2,p=r),t(3,A=i),t(4,E=o),t(5,P=a),t(6,O=u),t(7,M=p+A+E+P+O);break;case"monthly":t(2,p=r/12),t(3,A=i/12),t(4,E=o/12),t(5,P=a/12),t(6,O=u/12),t(7,M=p+A+E+P+O);break;case"fortnightly":t(2,p=r/26),t(3,A=i/26),t(4,E=o/26),t(5,P=a/26),t(6,O=u/26),t(7,M=p+A+E+P+O);break}},[h,d,p,A,E,P,O,M,r,i,o,a,u]}class Gy extends qa{constructor(e){super(),za(this,e,Ky,Hy,Ba,{stateTaxAmount:8,federalTaxAmount:9,cityTaxAmount:10,socialSecurityTaxAmount:11,medicareTaxAmount:12,interval:0,currentState:1})}}function Ju(n,e,t){const r=n.slice();return r[28]=e[t],r[30]=t,r}function $u(n){let e,t,r=n[30]+1+"",i,o,a=Se(n[9][n[30]])+"",u;return{c(){e=C("h3"),t=Ae("Income "),i=Ae(r),o=Ae(`
	Taxable income: `),u=Ae(a)},l(h){e=R(h,"H3",{});var d=ce(e);t=be(d,"Income "),i=be(d,r),d.forEach(Q),o=be(h,`
	Taxable income: `),u=be(h,a)},m(h,d){tt(h,e,d),g(e,t),g(e,i),tt(h,o,d),tt(h,u,d)},p(h,d){d&512&&a!==(a=Se(h[9][h[30]])+"")&&mt(u,a)},d(h){h&&(Q(e),Q(o),Q(u))}}}function Wy(n){let e,t,r,i,o,a=Se(n[10][0]+n[10][1])+"",u,h,d,p,A=Se(n[11][0]+n[11][1])+"",E,P,O,M,k=Se(n[8][0]+n[8][1])+"",$,Y,H=_o(n[1]),z=[];for(let F=0;F<H.length;F+=1)z[F]=$u(Ju(n,H,F));return t=new Gy({props:{federalTaxAmount:n[3][0]+n[3][1],stateTaxAmount:n[4][0]+n[4][1],cityTaxAmount:n[5][0]+n[5][1],socialSecurityTaxAmount:n[6][0]+n[6][1],medicareTaxAmount:n[7][0]+n[7][1],interval:n[2],currentState:n[0]}}),{c(){for(let F=0;F<z.length;F+=1)z[F].c();e=N(),ec(t.$$.fragment),r=N(),i=C("p"),o=Ae("Your monthly take-home pay: "),u=Ae(a),h=N(),d=C("br"),p=Ae(`
	Your biweekly take-home pay: `),E=Ae(A),P=N(),O=C("br"),M=Ae(`
	Your annual take-home pay: `),$=Ae(k)},l(F){for(let T=0;T<z.length;T+=1)z[T].l(F);e=D(F),tc(t.$$.fragment,F),r=D(F),i=R(F,"P",{});var j=ce(i);o=be(j,"Your monthly take-home pay: "),u=be(j,a),h=D(j),d=R(j,"BR",{}),p=be(j,`
	Your biweekly take-home pay: `),E=be(j,A),P=D(j),O=R(j,"BR",{}),M=be(j,`
	Your annual take-home pay: `),$=be(j,k),j.forEach(Q)},m(F,j){for(let T=0;T<z.length;T+=1)z[T]&&z[T].m(F,j);tt(F,e,j),nc(t,F,j),tt(F,r,j),tt(F,i,j),g(i,o),g(i,u),g(i,h),g(i,d),g(i,p),g(i,E),g(i,P),g(i,O),g(i,M),g(i,$),Y=!0},p(F,[j]){if(j&514){H=_o(F[1]);let m;for(m=0;m<H.length;m+=1){const _=Ju(F,H,m);z[m]?z[m].p(_,j):(z[m]=$u(_),z[m].c(),z[m].m(e.parentNode,e))}for(;m<z.length;m+=1)z[m].d(1);z.length=H.length}const T={};j&8&&(T.federalTaxAmount=F[3][0]+F[3][1]),j&16&&(T.stateTaxAmount=F[4][0]+F[4][1]),j&32&&(T.cityTaxAmount=F[5][0]+F[5][1]),j&64&&(T.socialSecurityTaxAmount=F[6][0]+F[6][1]),j&128&&(T.medicareTaxAmount=F[7][0]+F[7][1]),j&4&&(T.interval=F[2]),j&1&&(T.currentState=F[0]),t.$set(T),(!Y||j&1024)&&a!==(a=Se(F[10][0]+F[10][1])+"")&&mt(u,a),(!Y||j&2048)&&A!==(A=Se(F[11][0]+F[11][1])+"")&&mt(E,A),(!Y||j&256)&&k!==(k=Se(F[8][0]+F[8][1])+"")&&mt($,k)},i(F){Y||(rc(t.$$.fragment,F),Y=!0)},o(F){ic(t.$$.fragment,F),Y=!1},d(F){F&&(Q(e),Q(r),Q(i)),sc(z,F),oc(t,F)}}}function Qy(n,e,t){let{currentYear:r="2023",currentState:i="New York",yearlySalaries:o=[],contributionPercentages:a=[],health_care_fsa_contributions:u=[],dependent_care_fsa_contributions:h=[],interval:d,monthlyMedicalContributions:p=[0,0],monthlyDentalContributions:A=[0,0],monthlyVisionContributions:E=[0,0],filingStatus:P="joint"}=e,O=[],M=[],k=[],$=[],Y=[],H=[],z=[],F=[],j=[],T=[],m=[],_=[],v=[],I=[],w=[],y;return n.$$set=ie=>{"currentYear"in ie&&t(12,r=ie.currentYear),"currentState"in ie&&t(0,i=ie.currentState),"yearlySalaries"in ie&&t(1,o=ie.yearlySalaries),"contributionPercentages"in ie&&t(13,a=ie.contributionPercentages),"health_care_fsa_contributions"in ie&&t(14,u=ie.health_care_fsa_contributions),"dependent_care_fsa_contributions"in ie&&t(15,h=ie.dependent_care_fsa_contributions),"interval"in ie&&t(2,d=ie.interval),"monthlyMedicalContributions"in ie&&t(16,p=ie.monthlyMedicalContributions),"monthlyDentalContributions"in ie&&t(17,A=ie.monthlyDentalContributions),"monthlyVisionContributions"in ie&&t(18,E=ie.monthlyVisionContributions),"filingStatus"in ie&&t(19,P=ie.filingStatus)},n.$$.update=()=>{if(n.$$.dirty&134214651){t(26,y=Yu[r][i]),t(20,O=o.map((W,te)=>W*(a[te]/100))),t(21,z=o.map((W,te)=>u[te])),t(22,F=o.map((W,te)=>h[te]));let ie=p.map(W=>W*12),je=A.map(W=>W*12),Et=E.map(W=>W*12);t(9,w=o.map((W,te)=>W-O[te]-z[te]-F[te]-ie[te]-je[te]-Et[te])),t(23,j=o.map(()=>{var W,te,De;return((De=(te=(W=Wn==null?void 0:Wn[r])==null?void 0:W[P])==null?void 0:te[i])==null?void 0:De.state)??0})),t(24,T=o.map(()=>{var W,te;return((te=(W=Wn==null?void 0:Wn[r])==null?void 0:W[P])==null?void 0:te.federal)??0})),t(25,m=o.map(()=>{var W,te,De;return((De=(te=(W=Wn==null?void 0:Wn[r])==null?void 0:W[P])==null?void 0:te[i])==null?void 0:De.city)??0})),t(4,k=w.map((W,te)=>bs(W,y,j[te]))),t(3,M=w.map((W,te)=>bs(W,Yu[r].Federal,T[te]))),t(5,$=w.map((W,te)=>bs(W,jy[r][i],m[te]))),t(6,Y=w.map(W=>bs(W,Fy[r]))),t(7,H=w.map(W=>bs(W,By))),t(8,I=w.map((W,te)=>W-k[te]-M[te]-$[te]-Y[te]-H[te])),t(10,_=I.map(W=>W/12)),t(11,v=I.map(W=>W/26))}},[i,o,d,M,k,$,Y,H,I,w,_,v,r,a,u,h,p,A,E,P,O,z,F,j,T,m,y]}class Yy extends qa{constructor(e){super(),za(this,e,Qy,Wy,Ba,{currentYear:12,currentState:0,yearlySalaries:1,contributionPercentages:13,health_care_fsa_contributions:14,dependent_care_fsa_contributions:15,interval:2,monthlyMedicalContributions:16,monthlyDentalContributions:17,monthlyVisionContributions:18,filingStatus:19})}}function Xu(n,e,t){const r=n.slice();return r[64]=e[t],r[65]=e,r[66]=t,r}function Jy(n){let e,t="Sign In",r,i,o,a,u="Email:",h,d,p,A,E,P,O="Password:",M,k,$,Y,H,z,F="Sign In",j,T;return{c(){e=C("h2"),e.textContent=t,r=N(),i=C("div"),o=C("form"),a=C("label"),a.textContent=u,h=N(),d=C("input"),p=N(),A=C("br"),E=N(),P=C("label"),P.textContent=O,M=N(),k=C("input"),$=N(),Y=C("br"),H=N(),z=C("button"),z.textContent=F,this.h()},l(m){e=R(m,"H2",{"data-svelte-h":!0}),ne(e)!=="svelte-1f1zcva"&&(e.textContent=t),r=D(m),i=R(m,"DIV",{});var _=ce(i);o=R(_,"FORM",{action:!0});var v=ce(o);a=R(v,"LABEL",{for:!0,"data-svelte-h":!0}),ne(a)!=="svelte-1flf0h4"&&(a.textContent=u),h=D(v),d=R(v,"INPUT",{type:!0,id:!0,autocomplete:!0}),p=D(v),A=R(v,"BR",{}),E=D(v),P=R(v,"LABEL",{for:!0,"data-svelte-h":!0}),ne(P)!=="svelte-bhu94"&&(P.textContent=O),M=D(v),k=R(v,"INPUT",{type:!0,id:!0,autocomplete:!0}),$=D(v),Y=R(v,"BR",{}),H=D(v),z=R(v,"BUTTON",{"data-svelte-h":!0}),ne(z)!=="svelte-14tztva"&&(z.textContent=F),v.forEach(Q),_.forEach(Q),this.h()},h(){L(a,"for","email"),L(d,"type","email"),L(d,"id","email"),L(d,"autocomplete","email"),L(P,"for","password"),L(k,"type","password"),L(k,"id","password"),L(k,"autocomplete","current-password"),L(o,"action","")},m(m,_){tt(m,e,_),tt(m,r,_),tt(m,i,_),g(i,o),g(o,a),g(o,h),g(o,d),X(d,n[8]),g(o,p),g(o,A),g(o,E),g(o,P),g(o,M),g(o,k),X(k,n[9]),g(o,$),g(o,Y),g(o,H),g(o,z),j||(T=[ve(d,"input",n[31]),ve(k,"input",n[32]),ve(z,"click",n[29])],j=!0)},p(m,_){_[0]&256&&d.value!==m[8]&&X(d,m[8]),_[0]&512&&k.value!==m[9]&&X(k,m[9])},d(m){m&&(Q(e),Q(r),Q(i)),j=!1,ja(T)}}}function $y(n){let e,t=n[7].email+"",r,i,o,a="Sign out",u,h;return{c(){e=Ae("Signed in as "),r=Ae(t),i=N(),o=C("button"),o.textContent=a},l(d){e=be(d,"Signed in as "),r=be(d,t),i=D(d),o=R(d,"BUTTON",{"data-svelte-h":!0}),ne(o)!=="svelte-6agn43"&&(o.textContent=a)},m(d,p){tt(d,e,p),tt(d,r,p),tt(d,i,p),tt(d,o,p),u||(h=ve(o,"click",n[30]),u=!0)},p(d,p){p[0]&128&&t!==(t=d[7].email+"")&&mt(r,t)},d(d){d&&(Q(e),Q(r),Q(i),Q(o)),u=!1,h()}}}function Zu(n){let e,t,r,i,o,a,u="Remove",h,d,p;function A(){n[56].call(t,n[65],n[66])}function E(){n[57].call(i,n[65],n[66])}function P(){return n[58](n[66])}return{c(){e=C("div"),t=C("input"),r=N(),i=C("input"),o=N(),a=C("button"),a.textContent=u,h=N(),this.h()},l(O){e=R(O,"DIV",{});var M=ce(e);t=R(M,"INPUT",{type:!0,placeholder:!0}),r=D(M),i=R(M,"INPUT",{type:!0,placeholder:!0}),o=D(M),a=R(M,"BUTTON",{"data-svelte-h":!0}),ne(a)!=="svelte-cieyql"&&(a.textContent=u),h=D(M),M.forEach(Q),this.h()},h(){L(t,"type","text"),L(t,"placeholder","Expense Label"),L(i,"type","number"),L(i,"placeholder","Expense Amount")},m(O,M){tt(O,e,M),g(e,t),X(t,n[64].label),g(e,r),g(e,i),X(i,n[64].amount),g(e,o),g(e,a),g(e,h),d||(p=[ve(t,"input",A),ve(i,"input",E),ve(a,"click",P)],d=!0)},p(O,M){n=O,M[0]&64&&t.value!==n[64].label&&X(t,n[64].label),M[0]&64&&pe(i.value)!==n[64].amount&&X(i,n[64].amount)},d(O){O&&Q(e),d=!1,ja(p)}}}function Xy(n){let e,t,r="Budget Calculator",i,o,a,u,h,d="Salary input",p,A,E,P,O="Person 1",M,k,$="Yearly Salary:",Y,H,z,F,j,T,m="Increase Salary by (%):",_,v,I,w,y="Increase Salary",ie,je,Et,W,te="Expected Bonus (%):",De,Me,yn,$e,we,Ut,ct,Tt,nt="401k Contribution (%):",kt,ht,Nt,dt,vt,Xe,zt="Healthcare FSA Contribution ($):",rt,Ve,En,tn,ft,We,Ht="Dependent Care FSA Contribution ($):",Re,ge,Dt,xe,Ce,Ne,It,Ee,qe="Medical Deduction ($):",ze,He,Ln,nn,Tn,Vt,Vr="Dental Deduction ($):",Or,Kt,ai,Mn,Lr,rn,vn="Vision Deduction ($):",li,Ot,ui,xn,ci,q,Un,ir="Person 2",Fn,Bn,Zs="Yearly Salary:",In,sn,rs,sr,hi,on,Mr="Expected Bonus (%):",Gt,Wt,di,xr,Ur,wn,is="401k Contribution (%):",ss,Lt,fi,Fr,jn,wt,pi="Healthcare FSA Contribution ($):",os,Qt,mi,gi,Br,an,as="Dependent Care FSA Contribution ($):",_i,ln,ls,yi,Ei,us,un,it,jr="Medical Deduction ($):",or,Yt,Ie,ar,qn,Ft,eo="Dental Deduction ($):",Ti,cn,cs,hs,ds,Bt,hn="Vision Deduction ($):",vi,Jt,Ii,An,fs,At,zn,dn="Current Year:",ps,bt,Mt,qr="-- Select Year --",$t,lr="2023",Ct,ms="2024",jt,Pe="2025",gs,_s,wi,bn,ys="Current US State:",ur,Rt,Qe,Es="-- Select State --",fn,cr="New York (NY)",Xt,Ai="New Jersey (NJ)",hr,bi,dr,Ze,Ci,Zt,Ts="Bonus:",Ri,Hn=Se(n[23])+"",fr,Si,pr,Kn,vs="401K Contribution:",pn,mr=Se(n[24])+"",zr,Pi,Gn,gr,Ye=Se(n[0]/12+n[3]/12)+"",Hr,ki,Cn,s,l,c,f,b="Interval:",S,x,oe,Ue,he,ke,_e,Rn,St,qt,Ke,Go,Wo,Kr,Is,_r,Qo,mn,Ni,Cl="Expenses",Yo,Gr,Rl="Add Expense",Jo,Wr,$o,Xo,Sl;function Pl(U,se){return U[7]?$y:Jy}let to=Pl(n),gn=to(n);_r=new Yy({props:{currentState:n[20],currentYear:n[21],taxableIncome:n[26],health_care_fsa_contributions:[n[10],n[15]],dependent_care_fsa_contributions:[n[11],n[16]],yearlySalaries:[n[0],n[3]],contributionPercentages:[n[2],n[5]],interval:n[22],monthlyDentalContributions:[n[13]/12,n[18]/12],monthlyMedicalContributions:[n[12]/12,n[17]/12],monthlyVisionContributions:[n[14]/12,n[19]/12]}});let Di=_o(n[6]),st=[];for(let U=0;U<Di.length;U+=1)st[U]=Zu(Xu(n,Di,U));return $o=Zh(n[53][0]),{c(){e=C("main"),t=C("h1"),t.textContent=r,i=N(),o=C("section"),gn.c(),a=N(),u=C("section"),h=C("h2"),h.textContent=d,p=N(),A=C("div"),E=C("div"),P=C("h3"),P.textContent=O,M=N(),k=C("label"),k.textContent=$,Y=N(),H=C("input"),z=N(),F=C("br"),j=N(),T=C("label"),T.textContent=m,_=N(),v=C("input"),I=N(),w=C("button"),w.textContent=y,ie=N(),je=C("br"),Et=N(),W=C("label"),W.textContent=te,De=N(),Me=C("input"),yn=N(),$e=C("br"),we=N(),Ut=C("br"),ct=N(),Tt=C("label"),Tt.textContent=nt,kt=N(),ht=C("input"),Nt=N(),dt=C("br"),vt=N(),Xe=C("label"),Xe.textContent=zt,rt=N(),Ve=C("input"),En=N(),tn=C("br"),ft=N(),We=C("label"),We.textContent=Ht,Re=N(),ge=C("input"),Dt=N(),xe=C("br"),Ce=N(),Ne=C("br"),It=N(),Ee=C("label"),Ee.textContent=qe,ze=N(),He=C("input"),Ln=N(),nn=C("br"),Tn=N(),Vt=C("label"),Vt.textContent=Vr,Or=N(),Kt=C("input"),ai=N(),Mn=C("br"),Lr=N(),rn=C("label"),rn.textContent=vn,li=N(),Ot=C("input"),ui=N(),xn=C("br"),ci=N(),q=C("div"),Un=C("h3"),Un.textContent=ir,Fn=N(),Bn=C("label"),Bn.textContent=Zs,In=N(),sn=C("input"),rs=N(),sr=C("br"),hi=N(),on=C("label"),on.textContent=Mr,Gt=N(),Wt=C("input"),di=N(),xr=C("br"),Ur=N(),wn=C("label"),wn.textContent=is,ss=N(),Lt=C("input"),fi=N(),Fr=C("br"),jn=N(),wt=C("label"),wt.textContent=pi,os=N(),Qt=C("input"),mi=N(),gi=C("br"),Br=N(),an=C("label"),an.textContent=as,_i=N(),ln=C("input"),ls=N(),yi=C("br"),Ei=N(),us=C("br"),un=N(),it=C("label"),it.textContent=jr,or=N(),Yt=C("input"),Ie=N(),ar=C("br"),qn=N(),Ft=C("label"),Ft.textContent=eo,Ti=N(),cn=C("input"),cs=N(),hs=C("br"),ds=N(),Bt=C("label"),Bt.textContent=hn,vi=N(),Jt=C("input"),Ii=N(),An=C("br"),fs=N(),At=C("p"),zn=C("label"),zn.textContent=dn,ps=N(),bt=C("select"),Mt=C("option"),Mt.textContent=qr,$t=C("option"),$t.textContent=lr,Ct=C("option"),Ct.textContent=ms,jt=C("option"),jt.textContent=Pe,gs=N(),_s=C("br"),wi=N(),bn=C("label"),bn.textContent=ys,ur=N(),Rt=C("select"),Qe=C("option"),Qe.textContent=Es,fn=C("option"),fn.textContent=cr,Xt=C("option"),Xt.textContent=Ai,hr=N(),bi=C("hr"),dr=N(),Ze=C("div"),Ci=C("br"),Zt=C("b"),Zt.textContent=Ts,Ri=N(),fr=Ae(Hn),Si=N(),pr=C("br"),Kn=C("b"),Kn.textContent=vs,pn=N(),zr=Ae(mr),Pi=N(),Gn=C("p"),gr=Ae("Gross Monthly Income: "),Hr=Ae(Ye),ki=N(),Cn=C("hr"),s=N(),l=C("br"),c=N(),f=C("label"),f.textContent=b,S=N(),x=C("label"),oe=C("input"),Ue=Ae(`
			Annual`),he=N(),ke=C("label"),_e=C("input"),Rn=Ae(`
			Monthly`),St=N(),qt=C("label"),Ke=C("input"),Go=Ae(`
			Fortnightly`),Wo=N(),Kr=C("div"),Is=C("div"),ec(_r.$$.fragment),Qo=N(),mn=C("section"),Ni=C("h3"),Ni.textContent=Cl,Yo=N(),Gr=C("button"),Gr.textContent=Rl,Jo=N();for(let U=0;U<st.length;U+=1)st[U].c();this.h()},l(U){e=R(U,"MAIN",{class:!0});var se=ce(e);t=R(se,"H1",{"data-svelte-h":!0}),ne(t)!=="svelte-u5wzxj"&&(t.textContent=r),i=D(se),o=R(se,"SECTION",{});var ae=ce(o);gn.l(ae),a=D(ae),u=R(ae,"SECTION",{});var ot=ce(u);h=R(ot,"H2",{"data-svelte-h":!0}),ne(h)!=="svelte-gzk6ig"&&(h.textContent=d),p=D(ot),A=R(ot,"DIV",{class:!0});var Qr=ce(A);E=R(Qr,"DIV",{});var K=ce(E);P=R(K,"H3",{"data-svelte-h":!0}),ne(P)!=="svelte-goopbe"&&(P.textContent=O),M=D(K),k=R(K,"LABEL",{for:!0,"data-svelte-h":!0}),ne(k)!=="svelte-908ltx"&&(k.textContent=$),Y=D(K),H=R(K,"INPUT",{type:!0,id:!0}),z=D(K),F=R(K,"BR",{}),j=D(K),T=R(K,"LABEL",{for:!0,"data-svelte-h":!0}),ne(T)!=="svelte-i5oryw"&&(T.textContent=m),_=D(K),v=R(K,"INPUT",{type:!0,id:!0}),I=D(K),w=R(K,"BUTTON",{"data-svelte-h":!0}),ne(w)!=="svelte-ew2fh4"&&(w.textContent=y),ie=D(K),je=R(K,"BR",{}),Et=D(K),W=R(K,"LABEL",{for:!0,"data-svelte-h":!0}),ne(W)!=="svelte-1cqojg7"&&(W.textContent=te),De=D(K),Me=R(K,"INPUT",{type:!0,id:!0}),yn=D(K),$e=R(K,"BR",{}),we=D(K),Ut=R(K,"BR",{}),ct=D(K),Tt=R(K,"LABEL",{for:!0,"data-svelte-h":!0}),ne(Tt)!=="svelte-1jizrnf"&&(Tt.textContent=nt),kt=D(K),ht=R(K,"INPUT",{type:!0,id:!0}),Nt=D(K),dt=R(K,"BR",{}),vt=D(K),Xe=R(K,"LABEL",{for:!0,"data-svelte-h":!0}),ne(Xe)!=="svelte-euf23"&&(Xe.textContent=zt),rt=D(K),Ve=R(K,"INPUT",{type:!0,id:!0}),En=D(K),tn=R(K,"BR",{}),ft=D(K),We=R(K,"LABEL",{for:!0,"data-svelte-h":!0}),ne(We)!=="svelte-1e2sjer"&&(We.textContent=Ht),Re=D(K),ge=R(K,"INPUT",{type:!0,id:!0}),Dt=D(K),xe=R(K,"BR",{}),Ce=D(K),Ne=R(K,"BR",{}),It=D(K),Ee=R(K,"LABEL",{for:!0,"data-svelte-h":!0}),ne(Ee)!=="svelte-1wejyn7"&&(Ee.textContent=qe),ze=D(K),He=R(K,"INPUT",{type:!0,id:!0}),Ln=D(K),nn=R(K,"BR",{}),Tn=D(K),Vt=R(K,"LABEL",{for:!0,"data-svelte-h":!0}),ne(Vt)!=="svelte-1v1rhud"&&(Vt.textContent=Vr),Or=D(K),Kt=R(K,"INPUT",{type:!0,id:!0}),ai=D(K),Mn=R(K,"BR",{}),Lr=D(K),rn=R(K,"LABEL",{for:!0,"data-svelte-h":!0}),ne(rn)!=="svelte-zdn7gl"&&(rn.textContent=vn),li=D(K),Ot=R(K,"INPUT",{type:!0,id:!0}),ui=D(K),xn=R(K,"BR",{}),K.forEach(Q),ci=D(Qr),q=R(Qr,"DIV",{});var J=ce(q);Un=R(J,"H3",{"data-svelte-h":!0}),ne(Un)!=="svelte-1a84iof"&&(Un.textContent=ir),Fn=D(J),Bn=R(J,"LABEL",{for:!0,"data-svelte-h":!0}),ne(Bn)!=="svelte-mttl8q"&&(Bn.textContent=Zs),In=D(J),sn=R(J,"INPUT",{type:!0,id:!0}),rs=D(J),sr=R(J,"BR",{}),hi=D(J),on=R(J,"LABEL",{for:!0,"data-svelte-h":!0}),ne(on)!=="svelte-1weqosu"&&(on.textContent=Mr),Gt=D(J),Wt=R(J,"INPUT",{type:!0,id:!0}),di=D(J),xr=R(J,"BR",{}),Ur=D(J),wn=R(J,"LABEL",{for:!0,"data-svelte-h":!0}),ne(wn)!=="svelte-128ukag"&&(wn.textContent=is),ss=D(J),Lt=R(J,"INPUT",{type:!0,id:!0}),fi=D(J),Fr=R(J,"BR",{}),jn=D(J),wt=R(J,"LABEL",{for:!0,"data-svelte-h":!0}),ne(wt)!=="svelte-euf23"&&(wt.textContent=pi),os=D(J),Qt=R(J,"INPUT",{type:!0,id:!0}),mi=D(J),gi=R(J,"BR",{}),Br=D(J),an=R(J,"LABEL",{for:!0,"data-svelte-h":!0}),ne(an)!=="svelte-1e2sjer"&&(an.textContent=as),_i=D(J),ln=R(J,"INPUT",{type:!0,id:!0}),ls=D(J),yi=R(J,"BR",{}),Ei=D(J),us=R(J,"BR",{}),un=D(J),it=R(J,"LABEL",{for:!0,"data-svelte-h":!0}),ne(it)!=="svelte-1wejyn7"&&(it.textContent=jr),or=D(J),Yt=R(J,"INPUT",{type:!0,id:!0}),Ie=D(J),ar=R(J,"BR",{}),qn=D(J),Ft=R(J,"LABEL",{for:!0,"data-svelte-h":!0}),ne(Ft)!=="svelte-1v1rhud"&&(Ft.textContent=eo),Ti=D(J),cn=R(J,"INPUT",{type:!0,id:!0}),cs=D(J),hs=R(J,"BR",{}),ds=D(J),Bt=R(J,"LABEL",{for:!0,"data-svelte-h":!0}),ne(Bt)!=="svelte-zdn7gl"&&(Bt.textContent=hn),vi=D(J),Jt=R(J,"INPUT",{type:!0,id:!0}),Ii=D(J),An=R(J,"BR",{}),J.forEach(Q),Qr.forEach(Q),ot.forEach(Q),fs=D(ae),At=R(ae,"P",{});var Sn=ce(At);zn=R(Sn,"LABEL",{for:!0,"data-svelte-h":!0}),ne(zn)!=="svelte-17urc6i"&&(zn.textContent=dn),ps=D(Sn),bt=R(Sn,"SELECT",{id:!0});var ws=ce(bt);Mt=R(ws,"OPTION",{"data-svelte-h":!0}),ne(Mt)!=="svelte-121j27n"&&(Mt.textContent=qr),$t=R(ws,"OPTION",{"data-svelte-h":!0}),ne($t)!=="svelte-185o45e"&&($t.textContent=lr),Ct=R(ws,"OPTION",{"data-svelte-h":!0}),ne(Ct)!=="svelte-d7saby"&&(Ct.textContent=ms),jt=R(ws,"OPTION",{"data-svelte-h":!0}),ne(jt)!=="svelte-9aiaj6"&&(jt.textContent=Pe),ws.forEach(Q),gs=D(Sn),_s=R(Sn,"BR",{}),wi=D(Sn),bn=R(Sn,"LABEL",{for:!0,"data-svelte-h":!0}),ne(bn)!=="svelte-x7pvh8"&&(bn.textContent=ys),ur=D(Sn),Rt=R(Sn,"SELECT",{id:!0});var no=ce(Rt);Qe=R(no,"OPTION",{"data-svelte-h":!0}),ne(Qe)!=="svelte-30b5j3"&&(Qe.textContent=Es),fn=R(no,"OPTION",{"data-svelte-h":!0}),ne(fn)!=="svelte-14igjfs"&&(fn.textContent=cr),Xt=R(no,"OPTION",{"data-svelte-h":!0}),ne(Xt)!=="svelte-1xli4ar"&&(Xt.textContent=Ai),no.forEach(Q),Sn.forEach(Q),hr=D(ae),bi=R(ae,"HR",{}),dr=D(ae),Ze=R(ae,"DIV",{class:!0});var en=ce(Ze);Ci=R(en,"BR",{}),Zt=R(en,"B",{"data-svelte-h":!0}),ne(Zt)!=="svelte-1ydzksd"&&(Zt.textContent=Ts),Ri=D(en),fr=be(en,Hn),Si=D(en),pr=R(en,"BR",{}),Kn=R(en,"B",{"data-svelte-h":!0}),ne(Kn)!=="svelte-8fadtk"&&(Kn.textContent=vs),pn=D(en),zr=be(en,mr),Pi=D(en),Gn=R(en,"P",{});var Zo=ce(Gn);gr=be(Zo,"Gross Monthly Income: "),Hr=be(Zo,Ye),Zo.forEach(Q),en.forEach(Q),ki=D(ae),Cn=R(ae,"HR",{}),s=D(ae),l=R(ae,"BR",{}),c=D(ae),f=R(ae,"LABEL",{for:!0,"data-svelte-h":!0}),ne(f)!=="svelte-1o5vfq0"&&(f.textContent=b),S=D(ae),x=R(ae,"LABEL",{class:!0,for:!0});var ea=ce(x);oe=R(ea,"INPUT",{class:!0,type:!0,id:!0,name:!0}),Ue=be(ea,`
			Annual`),ea.forEach(Q),he=D(ae),ke=R(ae,"LABEL",{class:!0,for:!0});var ta=ce(ke);_e=R(ta,"INPUT",{class:!0,type:!0,id:!0,name:!0}),Rn=be(ta,`
			Monthly`),ta.forEach(Q),St=D(ae),qt=R(ae,"LABEL",{class:!0,for:!0});var na=ce(qt);Ke=R(na,"INPUT",{class:!0,type:!0,id:!0,name:!0}),Go=be(na,`
			Fortnightly`),na.forEach(Q),Wo=D(ae),Kr=R(ae,"DIV",{id:!0,class:!0});var kl=ce(Kr);Is=R(kl,"DIV",{});var Nl=ce(Is);tc(_r.$$.fragment,Nl),Nl.forEach(Q),kl.forEach(Q),Qo=D(ae),mn=R(ae,"SECTION",{style:!0});var Vi=ce(mn);Ni=R(Vi,"H3",{"data-svelte-h":!0}),ne(Ni)!=="svelte-11jkbap"&&(Ni.textContent=Cl),Yo=D(Vi),Gr=R(Vi,"BUTTON",{"data-svelte-h":!0}),ne(Gr)!=="svelte-rmce5g"&&(Gr.textContent=Rl),Jo=D(Vi);for(let ra=0;ra<st.length;ra+=1)st[ra].l(Vi);Vi.forEach(Q),ae.forEach(Q),se.forEach(Q),this.h()},h(){L(k,"for","yearlySalary1"),L(H,"type","number"),L(H,"id","yearlySalary1"),L(T,"for","salaryIncreasePercentage1"),L(v,"type","number"),L(v,"id","salaryIncreasePercentage1"),L(W,"for","bonusPercentage1"),L(Me,"type","number"),L(Me,"id","bonusPercentage1"),L(Tt,"for","contributionPercentage1"),L(ht,"type","number"),L(ht,"id","contributionPercentage1"),L(Xe,"for","healthCareContribution"),L(Ve,"type","number"),L(Ve,"id","healthCareContribution"),L(We,"for","dependentCareContribution"),L(ge,"type","number"),L(ge,"id","dependentCareContribution"),L(Ee,"for","medicalDeduction"),L(He,"type","number"),L(He,"id","medicalDeduction"),L(Vt,"for","dentalDeduction"),L(Kt,"type","number"),L(Kt,"id","dentalDeduction"),L(rn,"for","visionDeduction"),L(Ot,"type","number"),L(Ot,"id","visionDeduction"),L(Bn,"for","yearlySalary2"),L(sn,"type","number"),L(sn,"id","yearlySalary2"),L(on,"for","bonusPercentage2"),L(Wt,"type","number"),L(Wt,"id","bonusPercentage2"),L(wn,"for","contributionPercentage2"),L(Lt,"type","number"),L(Lt,"id","contributionPercentage2"),L(wt,"for","healthCareContribution"),L(Qt,"type","number"),L(Qt,"id","healthCareContribution"),L(an,"for","dependentCareContribution"),L(ln,"type","number"),L(ln,"id","dependentCareContribution"),L(it,"for","medicalDeduction"),L(Yt,"type","number"),L(Yt,"id","medicalDeduction"),L(Ft,"for","dentalDeduction"),L(cn,"type","number"),L(cn,"id","dentalDeduction"),L(Bt,"for","visionDeduction"),L(Jt,"type","number"),L(Jt,"id","visionDeduction"),L(A,"class","splitDisplay svelte-ug7cs4"),L(zn,"for","currentYear"),Mt.__value="",X(Mt,Mt.__value),$t.__value="2023",X($t,$t.__value),Ct.__value="2024",X(Ct,Ct.__value),jt.__value="2025",X(jt,jt.__value),L(bt,"id","currentYear"),n[21]===void 0&&Vl(()=>n[50].call(bt)),L(bn,"for","currentState"),Qe.__value="",X(Qe,Qe.__value),fn.__value="New York",X(fn,fn.__value),Xt.__value="New Jersey",X(Xt,Xt.__value),L(Rt,"id","currentState"),n[20]===void 0&&Vl(()=>n[51].call(Rt)),L(Ze,"class","splitDisplay svelte-ug7cs4"),L(f,"for","interval"),L(oe,"class","interval svelte-ug7cs4"),L(oe,"type","radio"),L(oe,"id","annual"),L(oe,"name","interval"),oe.__value="annual",X(oe,oe.__value),L(x,"class","interval svelte-ug7cs4"),L(x,"for","annual"),L(_e,"class","interval svelte-ug7cs4"),L(_e,"type","radio"),L(_e,"id","monthly"),L(_e,"name","interval"),_e.__value="monthly",X(_e,_e.__value),L(ke,"class","interval svelte-ug7cs4"),L(ke,"for","monthly"),L(Ke,"class","interval svelte-ug7cs4"),L(Ke,"type","radio"),L(Ke,"id","fortnightly"),L(Ke,"name","interval"),Ke.__value="fortnightly",X(Ke,Ke.__value),L(qt,"class","interval svelte-ug7cs4"),L(qt,"for","fortnightly"),L(Kr,"id","taxDisplay"),L(Kr,"class","svelte-ug7cs4"),Yr(mn,"display","none"),L(e,"class","svelte-ug7cs4"),$o.p(oe,_e,Ke)},m(U,se){tt(U,e,se),g(e,t),g(e,i),g(e,o),gn.m(o,null),g(o,a),g(o,u),g(u,h),g(u,p),g(u,A),g(A,E),g(E,P),g(E,M),g(E,k),g(E,Y),g(E,H),X(H,n[0]),g(E,z),g(E,F),g(E,j),g(E,T),g(E,_),g(E,v),g(E,I),g(E,w),g(E,ie),g(E,je),g(E,Et),g(E,W),g(E,De),g(E,Me),X(Me,n[1]),g(E,yn),g(E,$e),g(E,we),g(E,Ut),g(E,ct),g(E,Tt),g(E,kt),g(E,ht),X(ht,n[2]),g(E,Nt),g(E,dt),g(E,vt),g(E,Xe),g(E,rt),g(E,Ve),X(Ve,n[10]),g(E,En),g(E,tn),g(E,ft),g(E,We),g(E,Re),g(E,ge),X(ge,n[11]),g(E,Dt),g(E,xe),g(E,Ce),g(E,Ne),g(E,It),g(E,Ee),g(E,ze),g(E,He),X(He,n[12]),g(E,Ln),g(E,nn),g(E,Tn),g(E,Vt),g(E,Or),g(E,Kt),X(Kt,n[13]),g(E,ai),g(E,Mn),g(E,Lr),g(E,rn),g(E,li),g(E,Ot),X(Ot,n[14]),g(E,ui),g(E,xn),g(A,ci),g(A,q),g(q,Un),g(q,Fn),g(q,Bn),g(q,In),g(q,sn),X(sn,n[3]),g(q,rs),g(q,sr),g(q,hi),g(q,on),g(q,Gt),g(q,Wt),X(Wt,n[4]),g(q,di),g(q,xr),g(q,Ur),g(q,wn),g(q,ss),g(q,Lt),X(Lt,n[5]),g(q,fi),g(q,Fr),g(q,jn),g(q,wt),g(q,os),g(q,Qt),X(Qt,n[15]),g(q,mi),g(q,gi),g(q,Br),g(q,an),g(q,_i),g(q,ln),X(ln,n[16]),g(q,ls),g(q,yi),g(q,Ei),g(q,us),g(q,un),g(q,it),g(q,or),g(q,Yt),X(Yt,n[17]),g(q,Ie),g(q,ar),g(q,qn),g(q,Ft),g(q,Ti),g(q,cn),X(cn,n[18]),g(q,cs),g(q,hs),g(q,ds),g(q,Bt),g(q,vi),g(q,Jt),X(Jt,n[19]),g(q,Ii),g(q,An),g(o,fs),g(o,At),g(At,zn),g(At,ps),g(At,bt),g(bt,Mt),g(bt,$t),g(bt,Ct),g(bt,jt),ro(bt,n[21],!0),g(At,gs),g(At,_s),g(At,wi),g(At,bn),g(At,ur),g(At,Rt),g(Rt,Qe),g(Rt,fn),g(Rt,Xt),ro(Rt,n[20],!0),g(o,hr),g(o,bi),g(o,dr),g(o,Ze),g(Ze,Ci),g(Ze,Zt),g(Ze,Ri),g(Ze,fr),g(Ze,Si),g(Ze,pr),g(Ze,Kn),g(Ze,pn),g(Ze,zr),g(Ze,Pi),g(Ze,Gn),g(Gn,gr),g(Gn,Hr),g(o,ki),g(o,Cn),g(o,s),g(o,l),g(o,c),g(o,f),g(o,S),g(o,x),g(x,oe),oe.checked=oe.__value===n[22],g(x,Ue),g(o,he),g(o,ke),g(ke,_e),_e.checked=_e.__value===n[22],g(ke,Rn),g(o,St),g(o,qt),g(qt,Ke),Ke.checked=Ke.__value===n[22],g(qt,Go),g(o,Wo),g(o,Kr),g(Kr,Is),nc(_r,Is,null),g(o,Qo),g(o,mn),g(mn,Ni),g(mn,Yo),g(mn,Gr),g(mn,Jo);for(let ae=0;ae<st.length;ae+=1)st[ae]&&st[ae].m(mn,null);Wr=!0,Xo||(Sl=[ve(H,"input",n[33]),ve(w,"click",n[34]),ve(Me,"input",n[35]),ve(ht,"input",n[36]),ve(Ve,"input",n[37]),ve(ge,"input",n[38]),ve(He,"input",n[39]),ve(Kt,"input",n[40]),ve(Ot,"input",n[41]),ve(sn,"input",n[42]),ve(Wt,"input",n[43]),ve(Lt,"input",n[44]),ve(Qt,"input",n[45]),ve(ln,"input",n[46]),ve(Yt,"input",n[47]),ve(cn,"input",n[48]),ve(Jt,"input",n[49]),ve(bt,"change",n[50]),ve(Rt,"change",n[51]),ve(oe,"change",n[52]),ve(_e,"change",n[54]),ve(Ke,"change",n[55]),ve(Gr,"click",n[27])],Xo=!0)},p(U,se){to===(to=Pl(U))&&gn?gn.p(U,se):(gn.d(1),gn=to(U),gn&&(gn.c(),gn.m(o,a))),se[0]&1&&pe(H.value)!==U[0]&&X(H,U[0]),se[0]&2&&pe(Me.value)!==U[1]&&X(Me,U[1]),se[0]&4&&pe(ht.value)!==U[2]&&X(ht,U[2]),se[0]&1024&&pe(Ve.value)!==U[10]&&X(Ve,U[10]),se[0]&2048&&pe(ge.value)!==U[11]&&X(ge,U[11]),se[0]&4096&&pe(He.value)!==U[12]&&X(He,U[12]),se[0]&8192&&pe(Kt.value)!==U[13]&&X(Kt,U[13]),se[0]&16384&&pe(Ot.value)!==U[14]&&X(Ot,U[14]),se[0]&8&&pe(sn.value)!==U[3]&&X(sn,U[3]),se[0]&16&&pe(Wt.value)!==U[4]&&X(Wt,U[4]),se[0]&32&&pe(Lt.value)!==U[5]&&X(Lt,U[5]),se[0]&32768&&pe(Qt.value)!==U[15]&&X(Qt,U[15]),se[0]&65536&&pe(ln.value)!==U[16]&&X(ln,U[16]),se[0]&131072&&pe(Yt.value)!==U[17]&&X(Yt,U[17]),se[0]&262144&&pe(cn.value)!==U[18]&&X(cn,U[18]),se[0]&524288&&pe(Jt.value)!==U[19]&&X(Jt,U[19]),se[0]&2097152&&ro(bt,U[21]),se[0]&1048576&&ro(Rt,U[20]),(!Wr||se[0]&8388608)&&Hn!==(Hn=Se(U[23])+"")&&mt(fr,Hn),(!Wr||se[0]&16777216)&&mr!==(mr=Se(U[24])+"")&&mt(zr,mr),(!Wr||se[0]&9)&&Ye!==(Ye=Se(U[0]/12+U[3]/12)+"")&&mt(Hr,Ye),se[0]&4194304&&(oe.checked=oe.__value===U[22]),se[0]&4194304&&(_e.checked=_e.__value===U[22]),se[0]&4194304&&(Ke.checked=Ke.__value===U[22]);const ae={};if(se[0]&1048576&&(ae.currentState=U[20]),se[0]&2097152&&(ae.currentYear=U[21]),se[0]&33792&&(ae.health_care_fsa_contributions=[U[10],U[15]]),se[0]&67584&&(ae.dependent_care_fsa_contributions=[U[11],U[16]]),se[0]&9&&(ae.yearlySalaries=[U[0],U[3]]),se[0]&36&&(ae.contributionPercentages=[U[2],U[5]]),se[0]&4194304&&(ae.interval=U[22]),se[0]&270336&&(ae.monthlyDentalContributions=[U[13]/12,U[18]/12]),se[0]&135168&&(ae.monthlyMedicalContributions=[U[12]/12,U[17]/12]),se[0]&540672&&(ae.monthlyVisionContributions=[U[14]/12,U[19]/12]),_r.$set(ae),se[0]&268435520){Di=_o(U[6]);let ot;for(ot=0;ot<Di.length;ot+=1){const Qr=Xu(U,Di,ot);st[ot]?st[ot].p(Qr,se):(st[ot]=Zu(Qr),st[ot].c(),st[ot].m(mn,null))}for(;ot<st.length;ot+=1)st[ot].d(1);st.length=Di.length}},i(U){Wr||(rc(_r.$$.fragment,U),Wr=!0)},o(U){ic(_r.$$.fragment,U),Wr=!1},d(U){U&&Q(e),gn.d(),oc(_r),sc(st,U),$o.r(),Xo=!1,ja(Sl)}}}function Zy(n,e,t){const i=mc({apiKey:"AIzaSyC_wqKaOmHf0Nq31JOZtCt3pSQN_m1FOLk",authDomain:"budget-e231f.firebaseapp.com",projectId:"budget-e231f",storageBucket:"budget-e231f.appspot.com",messagingSenderId:"324153005171",appId:"1:324153005171:web:1a3196daf6a3b148b94606"}),o=Km(i),a=by(i);let u=o.currentUser,h,d,p=1e5,A=5,E=3,P=100,O=100,M=1234,k=123,$=12,Y=0,H=0,z=0,F=0,j=0,T=0,m=0,_=0,v="New Jersey",I="2024",w="annual",y=[],ie,je,Et;Xh(()=>{const Ee=zy("expenses");t(6,y=Ee?JSON.parse(Ee):[])});function W(){t(6,y=[...y,{label:"",amount:0}])}function te(Ee){t(6,y=y.filter((qe,ze)=>ze!==Ee))}function De(){if(!h||!d)return console.log("Email and password are required");Np(o,h,d).then(Ee=>{const qe=Ee.user;console.log(qe)}).catch(Ee=>{console.log(Ee)})}Op(o,async Ee=>{if(Ee){t(7,u=Ee);const qe=await My(Ay(a,"users",Ee.uid)),ze=qe.data();ze&&(t(2,E=ze["401k_contribution_1"]),t(10,P=ze.healthcare_fsa_contribution_1),t(11,O=ze.dependent_care_fsa_contribution_1),t(12,M=ze.annual_medical_deduction_1),t(13,k=ze.annual_dental_deduction_1),t(14,$??($=ze.annual_vision_deduction_1)),t(0,p=ze.yearly_salary_1??p),t(1,A=ze.expected_bonus_1)),console.log(qe.data())}else t(7,u=null)});const Me=[[]],yn=()=>o.signOut();function $e(){h=this.value,t(8,h)}function we(){d=this.value,t(9,d)}function Ut(){p=pe(this.value),t(0,p)}const ct=()=>t(0,p+=p*(document.getElementById("salaryIncreasePercentage1").value/100));function Tt(){A=pe(this.value),t(1,A)}function nt(){E=pe(this.value),t(2,E)}function kt(){P=pe(this.value),t(10,P)}function ht(){O=pe(this.value),t(11,O)}function Nt(){M=pe(this.value),t(12,M)}function dt(){k=pe(this.value),t(13,k)}function vt(){$=pe(this.value),t(14,$)}function Xe(){Y=pe(this.value),t(3,Y)}function zt(){H=pe(this.value),t(4,H)}function rt(){z=pe(this.value),t(5,z)}function Ve(){F=pe(this.value),t(15,F)}function En(){j=pe(this.value),t(16,j)}function tn(){T=pe(this.value),t(17,T)}function ft(){m=pe(this.value),t(18,m)}function We(){_=pe(this.value),t(19,_)}function Ht(){I=Ol(this),t(21,I)}function Re(){v=Ol(this),t(20,v)}function ge(){w=this.__value,t(22,w)}function Dt(){w=this.__value,t(22,w)}function xe(){w=this.__value,t(22,w)}function Ce(Ee,qe){Ee[qe].label=this.value,t(6,y)}function Ne(Ee,qe){Ee[qe].amount=pe(this.value),t(6,y)}const It=Ee=>te(Ee);return n.$$.update=()=>{n.$$.dirty[0]&63&&(t(23,ie=p*(A/100)),t(24,je=p*(E/100))),n.$$.dirty[0]&64&&qy("expenses",JSON.stringify(y))},[p,A,E,Y,H,z,y,u,h,d,P,O,M,k,$,F,j,T,m,_,v,I,w,ie,je,o,Et,W,te,De,yn,$e,we,Ut,ct,Tt,nt,kt,ht,Nt,dt,vt,Xe,zt,rt,Ve,En,tn,ft,We,Ht,Re,ge,Me,Dt,xe,Ce,Ne,It]}class sE extends qa{constructor(e){super(),za(this,e,Zy,Xy,Ba,{},null,[-1,-1,-1])}}export{sE as component};
