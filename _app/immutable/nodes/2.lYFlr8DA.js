import{s as Wl,n as bc,k as Pc,r as Ql,o as Zp}from"../chunks/scheduler.zMJaRgub.js";import{S as Yl,i as Jl,e as p,b as ht,s as y,c as m,d as Z,f as dt,g as N,h as v,y as H,p as or,j as Vt,k as h,l as Jt,u as sd,v as od,w as ad,t as ld,a as ud,z as cd,x as hd,A as tm,o as T,B,C as gs,D as ut,E as it,F as kc}from"../chunks/index.fMps07_v.js";function Ns(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}var Dc={};/**
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
 */const dd=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},em=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const i=n[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[e++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[e++],o=n[e++],a=n[e++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const s=n[e++],o=n[e++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},fd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,l=i+2<n.length,u=l?n[i+2]:0,c=s>>2,f=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(d=64)),r.push(e[c],e[f],e[d],e[g])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(dd(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):em(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=e[n.charAt(i++)],a=i<n.length?e[n.charAt(i)]:0;++i;const u=i<n.length?e[n.charAt(i)]:64;++i;const f=i<n.length?e[n.charAt(i)]:64;if(++i,s==null||a==null||u==null||f==null)throw new nm;const d=s<<2|a>>4;if(r.push(d),u!==64){const g=a<<4&240|u>>2;if(r.push(g),f!==64){const b=u<<6&192|f;r.push(b)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class nm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rm=function(n){const t=dd(n);return fd.encodeByteArray(t,!0)},Os=function(n){return rm(n).replace(/\./g,"")},pd=function(n){try{return fd.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function im(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const sm=()=>im().__FIREBASE_DEFAULTS__,om=()=>{if(typeof process>"u"||typeof Dc>"u")return;const n=Dc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},am=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&pd(n[1]);return t&&JSON.parse(t)},Xs=()=>{try{return sm()||om()||am()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},md=n=>{var t,e;return(e=(t=Xs())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},lm=n=>{const t=md(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},gd=()=>{var n;return(n=Xs())===null||n===void 0?void 0:n.config},_d=n=>{var t;return(t=Xs())===null||t===void 0?void 0:t[`_${n}`]};/**
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
 */class um{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function cm(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Os(JSON.stringify(e)),Os(JSON.stringify(o)),""].join(".")}/**
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
 */function Pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pt())}function dm(){var n;const t=(n=Xs())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function fm(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function pm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mm(){const n=Pt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function gm(){return!dm()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function yd(){try{return typeof indexedDB=="object"}catch{return!1}}function _m(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(e){t(e)}})}/**
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
 */const ym="FirebaseError";class gn extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=ym,Object.setPrototypeOf(this,gn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wi.prototype.create)}}class Wi{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?vm(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new gn(i,a,r)}}function vm(n,t){return n.replace(Em,(e,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Em=/\{\$([^}]+)}/g;function Tm(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}function Vs(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const i of e){if(!r.includes(i))return!1;const s=n[i],o=t[i];if(Nc(s)&&Nc(o)){if(!Vs(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!e.includes(i))return!1;return!0}function Nc(n){return n!==null&&typeof n=="object"}/**
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
 */function Qi(n){const t=[];for(const[e,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function _i(n){const t={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(s)}}),t}function yi(n){const t=n.indexOf("?");if(!t)return"";const e=n.indexOf("#",t);return n.substring(t,e>0?e:void 0)}function Im(n,t){const e=new wm(n,t);return e.subscribe.bind(e)}class wm{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,r){let i;if(t===void 0&&e===void 0&&r===void 0)throw new Error("Missing Observer.");Am(t,["next","error","complete"])?i=t:i={next:t,error:e,complete:r},i.next===void 0&&(i.next=Ya),i.error===void 0&&(i.error=Ya),i.complete===void 0&&(i.complete=Ya);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Am(n,t){if(typeof n!="object"||n===null)return!1;for(const e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function Ya(){}/**
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
 */function _n(n){return n&&n._delegate?n._delegate:n}class gr{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const ar="[DEFAULT]";/**
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
 */class Cm{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new um;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Sm(t))try{this.getOrInitializeService({instanceIdentifier:ar})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=ar){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ar){return this.instances.has(t)}getOptions(t=ar){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,e){var r;const i=this.normalizeInstanceIdentifier(e),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const i of r)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Rm(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=ar){return this.component?this.component.multipleInstances?t:ar:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Rm(n){return n===ar?void 0:n}function Sm(n){return n.instantiationMode==="EAGER"}/**
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
 */class bm{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Cm(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var et;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(et||(et={}));const Pm={debug:et.DEBUG,verbose:et.VERBOSE,info:et.INFO,warn:et.WARN,error:et.ERROR,silent:et.SILENT},km=et.INFO,Dm={[et.DEBUG]:"log",[et.VERBOSE]:"log",[et.INFO]:"info",[et.WARN]:"warn",[et.ERROR]:"error"},Nm=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),i=Dm[t];if(i)console[i](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class $l{constructor(t){this.name=t,this._logLevel=km,this._logHandler=Nm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in et))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Pm[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,et.DEBUG,...t),this._logHandler(this,et.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,et.VERBOSE,...t),this._logHandler(this,et.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,et.INFO,...t),this._logHandler(this,et.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,et.WARN,...t),this._logHandler(this,et.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,et.ERROR,...t),this._logHandler(this,et.ERROR,...t)}}const Om=(n,t)=>t.some(e=>n instanceof e);let Oc,Vc;function Vm(){return Oc||(Oc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Lm(){return Vc||(Vc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const vd=new WeakMap,ml=new WeakMap,Ed=new WeakMap,Ja=new WeakMap,Xl=new WeakMap;function Mm(n){const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{e(On(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return t.then(e=>{e instanceof IDBCursor&&vd.set(e,n)}).catch(()=>{}),Xl.set(t,n),t}function xm(n){if(ml.has(n))return;const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{e(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});ml.set(n,t)}let gl={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return ml.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Ed.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return On(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Fm(n){gl=n(gl)}function Um(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call($a(this),t,...e);return Ed.set(r,t.sort?t.sort():[t]),On(r)}:Lm().includes(n)?function(...t){return n.apply($a(this),t),On(vd.get(this))}:function(...t){return On(n.apply($a(this),t))}}function Bm(n){return typeof n=="function"?Um(n):(n instanceof IDBTransaction&&xm(n),Om(n,Vm())?new Proxy(n,gl):n)}function On(n){if(n instanceof IDBRequest)return Mm(n);if(Ja.has(n))return Ja.get(n);const t=Bm(n);return t!==n&&(Ja.set(n,t),Xl.set(t,n)),t}const $a=n=>Xl.get(n);function jm(n,t,{blocked:e,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,t),a=On(o);return r&&o.addEventListener("upgradeneeded",l=>{r(On(o.result),l.oldVersion,l.newVersion,On(o.transaction),l)}),e&&o.addEventListener("blocked",l=>e(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const qm=["get","getKey","getAll","getAllKeys","count"],Hm=["put","add","delete","clear"],Xa=new Map;function Lc(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Xa.get(t))return Xa.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,i=Hm.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(i||qm.includes(e)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[e](...a),i&&l.done]))[0]};return Xa.set(t,s),s}Fm(n=>({...n,get:(t,e,r)=>Lc(t,e)||n.get(t,e,r),has:(t,e)=>!!Lc(t,e)||n.has(t,e)}));/**
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
 */class zm{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Km(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function Km(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const _l="@firebase/app",Mc="0.9.26";/**
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
 */const _r=new $l("@firebase/app"),Gm="@firebase/app-compat",Wm="@firebase/analytics-compat",Qm="@firebase/analytics",Ym="@firebase/app-check-compat",Jm="@firebase/app-check",$m="@firebase/auth",Xm="@firebase/auth-compat",Zm="@firebase/database",tg="@firebase/database-compat",eg="@firebase/functions",ng="@firebase/functions-compat",rg="@firebase/installations",ig="@firebase/installations-compat",sg="@firebase/messaging",og="@firebase/messaging-compat",ag="@firebase/performance",lg="@firebase/performance-compat",ug="@firebase/remote-config",cg="@firebase/remote-config-compat",hg="@firebase/storage",dg="@firebase/storage-compat",fg="@firebase/firestore",pg="@firebase/firestore-compat",mg="firebase",gg="10.7.2";/**
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
 */const yl="[DEFAULT]",_g={[_l]:"fire-core",[Gm]:"fire-core-compat",[Qm]:"fire-analytics",[Wm]:"fire-analytics-compat",[Jm]:"fire-app-check",[Ym]:"fire-app-check-compat",[$m]:"fire-auth",[Xm]:"fire-auth-compat",[Zm]:"fire-rtdb",[tg]:"fire-rtdb-compat",[eg]:"fire-fn",[ng]:"fire-fn-compat",[rg]:"fire-iid",[ig]:"fire-iid-compat",[sg]:"fire-fcm",[og]:"fire-fcm-compat",[ag]:"fire-perf",[lg]:"fire-perf-compat",[ug]:"fire-rc",[cg]:"fire-rc-compat",[hg]:"fire-gcs",[dg]:"fire-gcs-compat",[fg]:"fire-fst",[pg]:"fire-fst-compat","fire-js":"fire-js",[mg]:"fire-js-all"};/**
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
 */const Ls=new Map,vl=new Map;function yg(n,t){try{n.container.addComponent(t)}catch(e){_r.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Gr(n){const t=n.name;if(vl.has(t))return _r.debug(`There were multiple attempts to register component ${t}.`),!1;vl.set(t,n);for(const e of Ls.values())yg(e,n);return!0}function Zl(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
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
 */const vg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Vn=new Wi("app","Firebase",vg);/**
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
 */class Eg{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new gr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Vn.create("app-deleted",{appName:this._name})}}/**
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
 */const ei=gg;function Td(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:yl,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Vn.create("bad-app-name",{appName:String(i)});if(e||(e=gd()),!e)throw Vn.create("no-options");const s=Ls.get(i);if(s){if(Vs(e,s.options)&&Vs(r,s.config))return s;throw Vn.create("duplicate-app",{appName:i})}const o=new bm(i);for(const l of vl.values())o.addComponent(l);const a=new Eg(e,r,o);return Ls.set(i,a),a}function Id(n=yl){const t=Ls.get(n);if(!t&&n===yl&&gd())return Td();if(!t)throw Vn.create("no-app",{appName:n});return t}function Ln(n,t,e){var r;let i=(r=_g[n])!==null&&r!==void 0?r:n;e&&(i+=`-${e}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),_r.warn(a.join(" "));return}Gr(new gr(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const Tg="firebase-heartbeat-database",Ig=1,ki="firebase-heartbeat-store";let Za=null;function wd(){return Za||(Za=jm(Tg,Ig,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(ki)}catch(e){console.warn(e)}}}}).catch(n=>{throw Vn.create("idb-open",{originalErrorMessage:n.message})})),Za}async function wg(n){try{return await(await wd()).transaction(ki).objectStore(ki).get(Ad(n))}catch(t){if(t instanceof gn)_r.warn(t.message);else{const e=Vn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});_r.warn(e.message)}}}async function xc(n,t){try{const r=(await wd()).transaction(ki,"readwrite");await r.objectStore(ki).put(t,Ad(n)),await r.done}catch(e){if(e instanceof gn)_r.warn(e.message);else{const r=Vn.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});_r.warn(r.message)}}}function Ad(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Ag=1024,Cg=30*24*60*60*1e3;class Rg{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new bg(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Fc();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Cg}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Fc(),{heartbeatsToSend:r,unsentEntries:i}=Sg(this._heartbeatsCache.heartbeats),s=Os(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Fc(){return new Date().toISOString().substring(0,10)}function Sg(n,t=Ag){const e=[];let r=n.slice();for(const i of n){const s=e.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Uc(e)>t){s.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),Uc(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class bg{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yd()?_m().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await wg(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return xc(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return xc(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Uc(n){return Os(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Pg(n){Gr(new gr("platform-logger",t=>new zm(t),"PRIVATE")),Gr(new gr("heartbeat",t=>new Rg(t),"PRIVATE")),Ln(_l,Mc,n),Ln(_l,Mc,"esm2017"),Ln("fire-js","")}Pg("");var kg="firebase",Dg="10.7.2";/**
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
 */Ln(kg,Dg,"app");function tu(n,t){var e={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.indexOf(r)<0&&(e[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(e[r[i]]=n[r[i]]);return e}function Cd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ng=Cd,Rd=new Wi("auth","Firebase",Cd());/**
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
 */const Ms=new $l("@firebase/auth");function Og(n,...t){Ms.logLevel<=et.WARN&&Ms.warn(`Auth (${ei}): ${n}`,...t)}function Rs(n,...t){Ms.logLevel<=et.ERROR&&Ms.error(`Auth (${ei}): ${n}`,...t)}/**
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
 */function Ce(n,...t){throw eu(n,...t)}function Ue(n,...t){return eu(n,...t)}function Vg(n,t,e){const r=Object.assign(Object.assign({},Ng()),{[t]:e});return new Wi("auth","Firebase",r).create(t,{appName:n.name})}function eu(n,...t){if(typeof n!="string"){const e=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(e,...r)}return Rd.create(n,...t)}function z(n,t,...e){if(!n)throw eu(t,...e)}function cn(n){const t="INTERNAL ASSERTION FAILED: "+n;throw Rs(t),new Error(t)}function pn(n,t){n||cn(t)}/**
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
 */function El(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Lg(){return Bc()==="http:"||Bc()==="https:"}function Bc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Mg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Lg()||fm()||"connection"in navigator)?navigator.onLine:!0}function xg(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Yi{constructor(t,e){this.shortDelay=t,this.longDelay=e,pn(e>t,"Short delay should be less than long delay!"),this.isMobile=hm()||pm()}get(){return Mg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function nu(n,t){pn(n.emulator,"Emulator should always be set here");const{url:e}=n.emulator;return t?`${e}${t.startsWith("/")?t.slice(1):t}`:e}/**
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
 */class Sd{static initialize(t,e,r){this.fetchImpl=t,e&&(this.headersImpl=e),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;cn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;cn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;cn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Fg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Ug=new Yi(3e4,6e4);function Ir(n,t){return n.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:n.tenantId}):t}async function Bn(n,t,e,r,i={}){return bd(n,i,async()=>{let s={},o={};r&&(t==="GET"?o=r:s={body:JSON.stringify(r)});const a=Qi(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),Sd.fetch()(Pd(n,n.config.apiHost,e,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},s))})}async function bd(n,t,e){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Fg),t);try{const i=new jg(n),s=await Promise.race([e(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw _s(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw _s(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw _s(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw _s(n,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Vg(n,c,u);Ce(n,c)}}catch(i){if(i instanceof gn)throw i;Ce(n,"network-request-failed",{message:String(i)})}}async function Zs(n,t,e,r,i={}){const s=await Bn(n,t,e,r,i);return"mfaPendingCredential"in s&&Ce(n,"multi-factor-auth-required",{_serverResponse:s}),s}function Pd(n,t,e,r){const i=`${t}${e}?${r}`;return n.config.emulator?nu(n.config,i):`${n.config.apiScheme}://${i}`}function Bg(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class jg{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((e,r)=>{this.timer=setTimeout(()=>r(Ue(this.auth,"network-request-failed")),Ug.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function _s(n,t,e){const r={appName:n.name};e.email&&(r.email=e.email),e.phoneNumber&&(r.phoneNumber=e.phoneNumber);const i=Ue(n,t,r);return i.customData._tokenResponse=e,i}function jc(n){return n!==void 0&&n.enterprise!==void 0}class qg{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const e of this.recaptchaEnforcementState)if(e.provider&&e.provider===t)return Bg(e.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function Hg(n,t){return Bn(n,"GET","/v2/recaptchaConfig",Ir(n,t))}/**
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
 */async function zg(n,t){return Bn(n,"POST","/v1/accounts:delete",t)}async function Kg(n,t){return Bn(n,"POST","/v1/accounts:lookup",t)}/**
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
 */function wi(n){if(n)try{const t=new Date(Number(n));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Gg(n,t=!1){const e=_n(n),r=await e.getIdToken(t),i=ru(r);z(i&&i.exp&&i.auth_time&&i.iat,e.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:wi(tl(i.auth_time)),issuedAtTime:wi(tl(i.iat)),expirationTime:wi(tl(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function tl(n){return Number(n)*1e3}function ru(n){const[t,e,r]=n.split(".");if(t===void 0||e===void 0||r===void 0)return Rs("JWT malformed, contained fewer than 3 sections"),null;try{const i=pd(e);return i?JSON.parse(i):(Rs("Failed to decode base64 JWT payload"),null)}catch(i){return Rs("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Wg(n){const t=ru(n);return z(t,"internal-error"),z(typeof t.exp<"u","internal-error"),z(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Di(n,t,e=!1){if(e)return t;try{return await t}catch(r){throw r instanceof gn&&Qg(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Qg({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Yg{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((e=this.user.stsTokenManager.expirationTime)!==null&&e!==void 0?e:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class kd{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=wi(this.lastLoginAt),this.creationTime=wi(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function xs(n){var t;const e=n.auth,r=await n.getIdToken(),i=await Di(n,Kg(e,{idToken:r}));z(i==null?void 0:i.users.length,e,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?Xg(s.providerUserInfo):[],a=$g(n.providerData,o),l=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new kd(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(n,f)}async function Jg(n){const t=_n(n);await xs(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function $g(n,t){return[...n.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function Xg(n){return n.map(t=>{var{providerId:e}=t,r=tu(t,["providerId"]);return{providerId:e,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Zg(n,t){const e=await bd(n,{},async()=>{const r=Qi({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=Pd(n,i,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Sd.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}async function t_(n,t){return Bn(n,"POST","/v2/accounts:revokeToken",Ir(n,t))}/**
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
 */class Ni{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){z(t.idToken,"internal-error"),z(typeof t.idToken<"u","internal-error"),z(typeof t.refreshToken<"u","internal-error");const e="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Wg(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return z(!this.accessToken||this.refreshToken,t,"user-token-expired"),!e&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:r,refreshToken:i,expiresIn:s}=await Zg(t,e);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,e,r){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,e){const{refreshToken:r,accessToken:i,expirationTime:s}=e,o=new Ni;return r&&(z(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(z(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),s&&(z(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Ni,this.toJSON())}_performRefresh(){return cn("not implemented")}}/**
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
 */function Rn(n,t){z(typeof n=="string"||typeof n>"u","internal-error",{appName:t})}class fr{constructor(t){var{uid:e,auth:r,stsTokenManager:i}=t,s=tu(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Yg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new kd(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const e=await Di(this,this.stsTokenManager.getToken(this.auth,t));return z(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return Gg(this,t)}reload(){return Jg(this)}_assign(t){this!==t&&(z(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(e=>Object.assign({},e)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new fr(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),e&&await xs(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Di(this,zg(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var r,i,s,o,a,l,u,c;const f=(r=e.displayName)!==null&&r!==void 0?r:void 0,d=(i=e.email)!==null&&i!==void 0?i:void 0,g=(s=e.phoneNumber)!==null&&s!==void 0?s:void 0,b=(o=e.photoURL)!==null&&o!==void 0?o:void 0,R=(a=e.tenantId)!==null&&a!==void 0?a:void 0,E=(l=e._redirectEventId)!==null&&l!==void 0?l:void 0,W=(u=e.createdAt)!==null&&u!==void 0?u:void 0,J=(c=e.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:M,emailVerified:k,isAnonymous:A,providerData:P,stsTokenManager:x}=e;z(M&&x,t,"internal-error");const j=Ni.fromJSON(this.name,x);z(typeof M=="string",t,"internal-error"),Rn(f,t.name),Rn(d,t.name),z(typeof k=="boolean",t,"internal-error"),z(typeof A=="boolean",t,"internal-error"),Rn(g,t.name),Rn(b,t.name),Rn(R,t.name),Rn(E,t.name),Rn(W,t.name),Rn(J,t.name);const nt=new fr({uid:M,auth:t,email:d,emailVerified:k,displayName:f,isAnonymous:A,photoURL:b,phoneNumber:g,tenantId:R,stsTokenManager:j,createdAt:W,lastLoginAt:J});return P&&Array.isArray(P)&&(nt.providerData=P.map($=>Object.assign({},$))),E&&(nt._redirectEventId=E),nt}static async _fromIdTokenResponse(t,e,r=!1){const i=new Ni;i.updateFromServerResponse(e);const s=new fr({uid:e.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await xs(s),s}}/**
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
 */const qc=new Map;function hn(n){pn(n instanceof Function,"Expected a class definition");let t=qc.get(n);return t?(pn(t instanceof n,"Instance stored in cache mismatched with class"),t):(t=new n,qc.set(n,t),t)}/**
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
 */class Dd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return e===void 0?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}Dd.type="NONE";const Hc=Dd;/**
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
 */function Ss(n,t,e){return`firebase:${n}:${t}:${e}`}class Br{constructor(t,e,r){this.persistence=t,this.auth=e,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ss(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ss("persistence",i.apiKey,s),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?fr._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,e)return this.setCurrentUser(e)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,r="authUser"){if(!e.length)return new Br(hn(Hc),t,r);const i=(await Promise.all(e.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||hn(Hc);const o=Ss(r,t.config.apiKey,t.name);let a=null;for(const u of e)try{const c=await u._get(o);if(c){const f=fr._fromJSON(t,c);u!==s&&(a=f),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Br(s,t,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(e.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Br(s,t,r))}}/**
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
 */function zc(n){const t=n.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Vd(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Nd(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Md(t))return"Blackberry";if(xd(t))return"Webos";if(iu(t))return"Safari";if((t.includes("chrome/")||Od(t))&&!t.includes("edge/"))return"Chrome";if(Ld(t))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(e);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Nd(n=Pt()){return/firefox\//i.test(n)}function iu(n=Pt()){const t=n.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Od(n=Pt()){return/crios\//i.test(n)}function Vd(n=Pt()){return/iemobile/i.test(n)}function Ld(n=Pt()){return/android/i.test(n)}function Md(n=Pt()){return/blackberry/i.test(n)}function xd(n=Pt()){return/webos/i.test(n)}function to(n=Pt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function e_(n=Pt()){var t;return to(n)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function n_(){return mm()&&document.documentMode===10}function Fd(n=Pt()){return to(n)||Ld(n)||xd(n)||Md(n)||/windows phone/i.test(n)||Vd(n)}function r_(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Ud(n,t=[]){let e;switch(n){case"Browser":e=zc(Pt());break;case"Worker":e=`${zc(Pt())}-${n}`;break;default:e=n}const r=t.length?t.join(","):"FirebaseCore-web";return`${e}/JsCore/${ei}/${r}`}/**
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
 */class i_{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const r=s=>new Promise((o,a)=>{try{const l=t(s);o(l)}catch(l){a(l)}});r.onAbort=e,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const r of this.queue)await r(t),r.onAbort&&e.push(r.onAbort)}catch(r){e.reverse();for(const i of e)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function s_(n,t={}){return Bn(n,"GET","/v2/passwordPolicy",Ir(n,t))}/**
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
 */const o_=6;class a_{constructor(t){var e,r,i,s;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(e=o.minPasswordLength)!==null&&e!==void 0?e:o_,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var e,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(e=l.meetsMinPasswordLength)!==null&&e!==void 0?e:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(t,e){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(e.meetsMinPasswordLength=t.length>=r),i&&(e.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,e){this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(e,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,e,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
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
 */class l_{constructor(t,e,r,i){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Kc(this),this.idTokenSubscription=new Kc(this),this.beforeStateQueue=new i_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Rd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=hn(e)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Br.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(e),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var e;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(e=this.redirectUser)===null||e===void 0?void 0:e._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await xs(t)}catch(e){if((e==null?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=xg()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?_n(t):null;return e&&z(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&z(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(hn(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await s_(this),e=new a_(t);this.tenantId===null?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Wi("auth","Firebase",t())}onAuthStateChanged(t,e,r){return this.registerStateListener(this.authStateSubscription,t,e,r)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,r){return this.registerStateListener(this.idTokenSubscription,t,e,r)}authStateReady(){return new Promise((t,e)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},e)}})}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};this.tenantId!=null&&(r.tenantId=this.tenantId),await t_(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,e){const r=await this.getOrInitRedirectPersistenceManager(e);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&hn(t)||this._popupRedirectResolver;z(e,this,"argument-error"),this.redirectPersistenceManager=await Br.create(this,[hn(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,r;return this._isInitialized&&await this.queue(async()=>{}),((e=this._currentUser)===null||e===void 0?void 0:e._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(e=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&e!==void 0?e:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,r,i){if(this._deleted)return()=>{};const s=typeof e=="function"?e:e.next.bind(e);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(z(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof e=="function"){const l=t.addObserver(e,r,i);return()=>{o=!0,l()}}else{const l=t.addObserver(e);return()=>{o=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Ud(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(e["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var t;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return e!=null&&e.error&&Og(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function ni(n){return _n(n)}class Kc{constructor(t){this.auth=t,this.observer=null,this.addObserver=Im(e=>this.observer=e)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function u_(){var n,t;return(t=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&t!==void 0?t:document}function Bd(n){return new Promise((t,e)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=t,r.onerror=i=>{const s=Ue("internal-error");s.customData=i,e(s)},r.type="text/javascript",r.charset="UTF-8",u_().appendChild(r)})}function c_(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const h_="https://www.google.com/recaptcha/enterprise.js?render=",d_="recaptcha-enterprise",f_="NO_RECAPTCHA";class p_{constructor(t){this.type=d_,this.auth=ni(t)}async verify(t="verify",e=!1){async function r(s){if(!e){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Hg(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new qg(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;jc(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:t}).then(u=>{o(u)}).catch(()=>{o(f_)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!e&&jc(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Bd(h_+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Gc(n,t,e,r=!1){const i=new p_(n);let s;try{s=await i.verify(e)}catch{s=await i.verify(e,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Wc(n,t,e,r){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Gc(n,t,e,e==="getOobCode");return r(n,s)}else return r(n,t).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${e} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Gc(n,t,e,e==="getOobCode");return r(n,o)}else return Promise.reject(s)})}/**
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
 */function m_(n,t){const e=Zl(n,"auth");if(e.isInitialized()){const i=e.getImmediate(),s=e.getOptions();if(Vs(s,t??{}))return i;Ce(i,"already-initialized")}return e.initialize({options:t})}function g_(n,t){const e=(t==null?void 0:t.persistence)||[],r=(Array.isArray(e)?e:[e]).map(hn);t!=null&&t.errorMap&&n._updateErrorMap(t.errorMap),n._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function __(n,t,e){const r=ni(n);z(r._canInitEmulator,r,"emulator-config-failed"),z(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(e!=null&&e.disableWarnings),s=jd(t),{host:o,port:a}=y_(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||v_()}function jd(n){const t=n.indexOf(":");return t<0?"":n.substr(0,t+1)}function y_(n){const t=jd(n),e=/(\/\/)?([^?#/]+)/.exec(n.substr(t.length));if(!e)return{host:"",port:null};const r=e[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Qc(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Qc(o)}}}function Qc(n){if(!n)return null;const t=Number(n);return isNaN(t)?null:t}function v_(){function n(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class su{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return cn("not implemented")}_getIdTokenResponse(t){return cn("not implemented")}_linkToIdToken(t,e){return cn("not implemented")}_getReauthenticationResolver(t){return cn("not implemented")}}async function E_(n,t){return Bn(n,"POST","/v1/accounts:signUp",t)}/**
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
 */async function T_(n,t){return Zs(n,"POST","/v1/accounts:signInWithPassword",Ir(n,t))}/**
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
 */async function I_(n,t){return Zs(n,"POST","/v1/accounts:signInWithEmailLink",Ir(n,t))}async function w_(n,t){return Zs(n,"POST","/v1/accounts:signInWithEmailLink",Ir(n,t))}/**
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
 */class Oi extends su{constructor(t,e,r,i=null){super("password",r),this._email=t,this._password=e,this._tenantId=i}static _fromEmailAndPassword(t,e){return new Oi(t,e,"password")}static _fromEmailAndCode(t,e,r=null){return new Oi(t,e,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t;if(e!=null&&e.email&&(e!=null&&e.password)){if(e.signInMethod==="password")return this._fromEmailAndPassword(e.email,e.password);if(e.signInMethod==="emailLink")return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const e={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Wc(t,e,"signInWithPassword",T_);case"emailLink":return I_(t,{email:this._email,oobCode:this._password});default:Ce(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":const r={idToken:e,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Wc(t,r,"signUpPassword",E_);case"emailLink":return w_(t,{idToken:e,email:this._email,oobCode:this._password});default:Ce(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function jr(n,t){return Zs(n,"POST","/v1/accounts:signInWithIdp",Ir(n,t))}/**
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
 */const A_="http://localhost";class yr extends su{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new yr(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):Ce("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=e,s=tu(e,["providerId","signInMethod"]);if(!r||!i)return null;const o=new yr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const e=this.buildRequest();return jr(t,e)}_linkToIdToken(t,e){const r=this.buildRequest();return r.idToken=e,jr(t,r)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,jr(t,e)}buildRequest(){const t={requestUri:A_,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=Qi(e)}return t}}/**
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
 */function C_(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function R_(n){const t=_i(yi(n)).link,e=t?_i(yi(t)).deep_link_id:null,r=_i(yi(n)).deep_link_id;return(r?_i(yi(r)).link:null)||r||e||t||n}class ou{constructor(t){var e,r,i,s,o,a;const l=_i(yi(t)),u=(e=l.apiKey)!==null&&e!==void 0?e:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,f=C_((i=l.mode)!==null&&i!==void 0?i:null);z(u&&c&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const e=R_(t);try{return new ou(e)}catch{return null}}}/**
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
 */class ri{constructor(){this.providerId=ri.PROVIDER_ID}static credential(t,e){return Oi._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const r=ou.parseLink(e);return z(r,"argument-error"),Oi._fromEmailAndCode(t,r.code,r.tenantId)}}ri.PROVIDER_ID="password";ri.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ri.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class qd{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ji extends qd{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Sn extends Ji{constructor(){super("facebook.com")}static credential(t){return yr._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Sn.credentialFromTaggedObject(t)}static credentialFromError(t){return Sn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Sn.credential(t.oauthAccessToken)}catch{return null}}}Sn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Sn.PROVIDER_ID="facebook.com";/**
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
 */class bn extends Ji{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return yr._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return bn.credentialFromTaggedObject(t)}static credentialFromError(t){return bn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:r}=t;if(!e&&!r)return null;try{return bn.credential(e,r)}catch{return null}}}bn.GOOGLE_SIGN_IN_METHOD="google.com";bn.PROVIDER_ID="google.com";/**
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
 */class Pn extends Ji{constructor(){super("github.com")}static credential(t){return yr._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Pn.credentialFromTaggedObject(t)}static credentialFromError(t){return Pn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Pn.credential(t.oauthAccessToken)}catch{return null}}}Pn.GITHUB_SIGN_IN_METHOD="github.com";Pn.PROVIDER_ID="github.com";/**
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
 */class kn extends Ji{constructor(){super("twitter.com")}static credential(t,e){return yr._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return kn.credentialFromTaggedObject(t)}static credentialFromError(t){return kn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:r}=t;if(!e||!r)return null;try{return kn.credential(e,r)}catch{return null}}}kn.TWITTER_SIGN_IN_METHOD="twitter.com";kn.PROVIDER_ID="twitter.com";/**
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
 */class Wr{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,r,i=!1){const s=await fr._fromIdTokenResponse(t,r,i),o=Yc(r);return new Wr({user:s,providerId:o,_tokenResponse:r,operationType:e})}static async _forOperation(t,e,r){await t._updateTokensIfNecessary(r,!0);const i=Yc(r);return new Wr({user:t,providerId:i,_tokenResponse:r,operationType:e})}}function Yc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Fs extends gn{constructor(t,e,r,i){var s;super(e.code,e.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Fs.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:e.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,e,r,i){return new Fs(t,e,r,i)}}function Hd(n,t,e,r){return(t==="reauthenticate"?e._getReauthenticationResolver(n):e._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Fs._fromErrorAndOperation(n,s,t,r):s})}async function S_(n,t,e=!1){const r=await Di(n,t._linkToIdToken(n.auth,await n.getIdToken()),e);return Wr._forOperation(n,"link",r)}/**
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
 */async function b_(n,t,e=!1){const{auth:r}=n,i="reauthenticate";try{const s=await Di(n,Hd(r,i,t,n),e);z(s.idToken,r,"internal-error");const o=ru(s.idToken);z(o,r,"internal-error");const{sub:a}=o;return z(n.uid===a,r,"user-mismatch"),Wr._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ce(r,"user-mismatch"),s}}/**
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
 */async function zd(n,t,e=!1){const r="signIn",i=await Hd(n,r,t),s=await Wr._fromIdTokenResponse(n,r,i);return e||await n._updateCurrentUser(s.user),s}async function P_(n,t){return zd(ni(n),t)}/**
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
 */async function k_(n){const t=ni(n);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}function D_(n,t,e){return P_(_n(n),ri.credential(t,e)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&k_(n),r})}function N_(n,t,e,r){return _n(n).onIdTokenChanged(t,e,r)}function O_(n,t,e){return _n(n).beforeAuthStateChanged(t,e)}function V_(n,t,e,r){return _n(n).onAuthStateChanged(t,e,r)}const Us="__sak";/**
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
 */class Kd{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(Us,"1"),this.storage.removeItem(Us),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function L_(){const n=Pt();return iu(n)||to(n)}const M_=1e3,x_=10;class Gd extends Kd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=L_()&&r_(),this.fallbackToPolling=Fd(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const r=this.storage.getItem(e),i=this.localCache[e];r!==i&&t(e,i,r)}}onStorageEvent(t,e=!1){if(!t.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!e)return}const i=()=>{const o=this.storage.getItem(r);!e&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);n_()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,x_):i()}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(e&&JSON.parse(e))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:r}),!0)})},M_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}Gd.type="LOCAL";const F_=Gd;/**
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
 */class Wd extends Kd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}Wd.type="SESSION";const Qd=Wd;/**
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
 */function U_(n){return Promise.all(n.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(e){return{fulfilled:!1,reason:e}}}))}/**
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
 */class eo{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(i=>i.isListeningto(t));if(e)return e;const r=new eo(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:r,eventType:i,data:s}=e.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;e.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(e.origin,s)),l=await U_(a);e.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,e){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),(!e||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}eo.receivers=[];/**
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
 */function au(n="",t=10){let e="";for(let r=0;r<t;r++)e+=Math.floor(Math.random()*10);return n+e}/**
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
 */class B_{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=au("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const d=f;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:u,data:e},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Be(){return window}function j_(n){Be().location.href=n}/**
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
 */function Yd(){return typeof Be().WorkerGlobalScope<"u"&&typeof Be().importScripts=="function"}async function q_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function H_(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function z_(){return Yd()?self:null}/**
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
 */const Jd="firebaseLocalStorageDb",K_=1,Bs="firebaseLocalStorage",$d="fbase_key";class $i{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function no(n,t){return n.transaction([Bs],t?"readwrite":"readonly").objectStore(Bs)}function G_(){const n=indexedDB.deleteDatabase(Jd);return new $i(n).toPromise()}function Tl(){const n=indexedDB.open(Jd,K_);return new Promise((t,e)=>{n.addEventListener("error",()=>{e(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Bs,{keyPath:$d})}catch(i){e(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Bs)?t(r):(r.close(),await G_(),t(await Tl()))})})}async function Jc(n,t,e){const r=no(n,!0).put({[$d]:t,value:e});return new $i(r).toPromise()}async function W_(n,t){const e=no(n,!1).get(t),r=await new $i(e).toPromise();return r===void 0?null:r.value}function $c(n,t){const e=no(n,!0).delete(t);return new $i(e).toPromise()}const Q_=800,Y_=3;class Xd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Tl(),this.db)}async _withRetries(t){let e=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(e++>Y_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Yd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=eo._getInstance(z_()),this.receiver._subscribe("keyChanged",async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)})),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await q_(),!this.activeServiceWorker)return;this.sender=new B_(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((e=r[0])===null||e===void 0)&&e.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||H_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Tl();return await Jc(t,Us,"1"),await $c(t,Us),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(r=>Jc(r,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(r=>W_(r,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>$c(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=no(i,!1).getAll();return new $i(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const e=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),e.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),e.push(i));return e}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Q_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Xd.type="LOCAL";const J_=Xd;new Yi(3e4,6e4);/**
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
 */function $_(n,t){return t?hn(t):(z(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class lu extends su{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return jr(t,this._buildIdpRequest())}_linkToIdToken(t,e){return jr(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return jr(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function X_(n){return zd(n.auth,new lu(n),n.bypassAuthState)}function Z_(n){const{auth:t,user:e}=n;return z(e,t,"internal-error"),b_(e,new lu(n),n.bypassAuthState)}async function ty(n){const{auth:t,user:e}=n;return z(e,t,"internal-error"),S_(e,new lu(n),n.bypassAuthState)}/**
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
 */class Zd{constructor(t,e,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=t;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:e,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return X_;case"linkViaPopup":case"linkViaRedirect":return ty;case"reauthViaPopup":case"reauthViaRedirect":return Z_;default:Ce(this.auth,"internal-error")}}resolve(t){pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const ey=new Yi(2e3,1e4);class Fr extends Zd{constructor(t,e,r,i,s){super(t,e,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Fr.currentPopupAction&&Fr.currentPopupAction.cancel(),Fr.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return z(t,this.auth,"internal-error"),t}async onExecution(){pn(this.filter.length===1,"Popup operations only handle one event");const t=au();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(Ue(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Ue(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Fr.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,r;if(!((r=(e=this.authWindow)===null||e===void 0?void 0:e.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ue(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,ey.get())};t()}}Fr.currentPopupAction=null;/**
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
 */const ny="pendingRedirect",bs=new Map;class ry extends Zd{constructor(t,e,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,r),this.eventId=null}async execute(){let t=bs.get(this.auth._key());if(!t){try{const r=await iy(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(e){t=()=>Promise.reject(e)}bs.set(this.auth._key(),t)}return this.bypassAuthState||bs.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function iy(n,t){const e=ay(t),r=oy(n);if(!await r._isAvailable())return!1;const i=await r._get(e)==="true";return await r._remove(e),i}function sy(n,t){bs.set(n._key(),t)}function oy(n){return hn(n._redirectPersistence)}function ay(n){return Ss(ny,n.config.apiKey,n.name)}async function ly(n,t,e=!1){const r=ni(n),i=$_(r,t),o=await new ry(r,i,e).execute();return o&&!e&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
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
 */const uy=10*60*1e3;class cy{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(e=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!hy(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var r;if(t.error&&!tf(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";e.onError(Ue(this.auth,i))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const r=e.eventId===null||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=uy&&this.cachedEventUids.clear(),this.cachedEventUids.has(Xc(t))}saveEventToCache(t){this.cachedEventUids.add(Xc(t)),this.lastProcessedEventTime=Date.now()}}function Xc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(t=>t).join("-")}function tf({type:n,error:t}){return n==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function hy(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return tf(n);default:return!1}}/**
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
 */async function dy(n,t={}){return Bn(n,"GET","/v1/projects",t)}/**
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
 */const fy=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,py=/^https?/;async function my(n){if(n.config.emulator)return;const{authorizedDomains:t}=await dy(n);for(const e of t)try{if(gy(e))return}catch{}Ce(n,"unauthorized-domain")}function gy(n){const t=El(),{protocol:e,hostname:r}=new URL(t);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?e==="chrome-extension:"&&n.replace("chrome-extension://","")===t.replace("chrome-extension://",""):e==="chrome-extension:"&&o.hostname===r}if(!py.test(e))return!1;if(fy.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const _y=new Yi(3e4,6e4);function Zc(){const n=Be().___jsl;if(n!=null&&n.H){for(const t of Object.keys(n.H))if(n.H[t].r=n.H[t].r||[],n.H[t].L=n.H[t].L||[],n.H[t].r=[...n.H[t].L],n.CP)for(let e=0;e<n.CP.length;e++)n.CP[e]=null}}function yy(n){return new Promise((t,e)=>{var r,i,s;function o(){Zc(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Zc(),e(Ue(n,"network-request-failed"))},timeout:_y.get()})}if(!((i=(r=Be().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=Be().gapi)===null||s===void 0)&&s.load)o();else{const a=c_("iframefcb");return Be()[a]=()=>{gapi.load?o():e(Ue(n,"network-request-failed"))},Bd(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>e(l))}}).catch(t=>{throw Ps=null,t})}let Ps=null;function vy(n){return Ps=Ps||yy(n),Ps}/**
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
 */const Ey=new Yi(5e3,15e3),Ty="__/auth/iframe",Iy="emulator/auth/iframe",wy={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ay=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Cy(n){const t=n.config;z(t.authDomain,n,"auth-domain-config-required");const e=t.emulator?nu(t,Iy):`https://${n.config.authDomain}/${Ty}`,r={apiKey:t.apiKey,appName:n.name,v:ei},i=Ay.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${e}?${Qi(r).slice(1)}`}async function Ry(n){const t=await vy(n),e=Be().gapi;return z(e,n,"internal-error"),t.open({where:document.body,url:Cy(n),messageHandlersFilter:e.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wy,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ue(n,"network-request-failed"),a=Be().setTimeout(()=>{s(o)},Ey.get());function l(){Be().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const Sy={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},by=500,Py=600,ky="_blank",Dy="http://localhost";class th{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ny(n,t,e,r=by,i=Py){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Sy),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Pt().toLowerCase();e&&(a=Od(u)?ky:e),Nd(u)&&(t=t||Dy,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[g,b])=>`${d}${g}=${b},`,"");if(e_(u)&&a!=="_self")return Oy(t||"",a),new th(null);const f=window.open(t||"",a,c);z(f,n,"popup-blocked");try{f.focus()}catch{}return new th(f)}function Oy(n,t){const e=document.createElement("a");e.href=n,e.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),e.dispatchEvent(r)}/**
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
 */const Vy="__/auth/handler",Ly="emulator/auth/handler",My=encodeURIComponent("fac");async function eh(n,t,e,r,i,s){z(n.config.authDomain,n,"auth-domain-config-required"),z(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:e,redirectUrl:r,v:ei,eventId:i};if(t instanceof qd){t.setDefaultLanguage(n.languageCode),o.providerId=t.providerId||"",Tm(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[c,f]of Object.entries(s||{}))o[c]=f}if(t instanceof Ji){const c=t.getScopes().filter(f=>f!=="");c.length>0&&(o.scopes=c.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await n._getAppCheckToken(),u=l?`#${My}=${encodeURIComponent(l)}`:"";return`${xy(n)}?${Qi(a).slice(1)}${u}`}function xy({config:n}){return n.emulator?nu(n,Ly):`https://${n.authDomain}/${Vy}`}/**
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
 */const el="webStorageSupport";class Fy{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Qd,this._completeRedirectFn=ly,this._overrideRedirectResult=sy}async _openPopup(t,e,r,i){var s;pn((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await eh(t,e,r,El(),i);return Ny(t,o,au())}async _openRedirect(t,e,r,i){await this._originValidation(t);const s=await eh(t,e,r,El(),i);return j_(s),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:i,promise:s}=this.eventManagers[e];return i?Promise.resolve(i):(pn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[e]={promise:r},r.catch(()=>{delete this.eventManagers[e]}),r}async initAndGetManager(t){const e=await Ry(t),r=new cy(t);return e.register("authEvent",i=>(z(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=e,r}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(el,{type:el},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[el];o!==void 0&&e(!!o),Ce(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=my(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return Fd()||iu()||to()}}const Uy=Fy;var nh="@firebase/auth",rh="1.5.1";/**
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
 */class By{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function jy(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function qy(n){Gr(new gr("auth",(t,{options:e})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ud(n)},u=new l_(r,i,s,l);return g_(u,e),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,r)=>{t.getProvider("auth-internal").initialize()})),Gr(new gr("auth-internal",t=>{const e=ni(t.getProvider("auth").getImmediate());return(r=>new By(r))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ln(nh,rh,jy(n)),Ln(nh,rh,"esm2017")}/**
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
 */const Hy=5*60,zy=_d("authIdTokenMaxAge")||Hy;let ih=null;const Ky=n=>async t=>{const e=t&&await t.getIdTokenResult(),r=e&&(new Date().getTime()-Date.parse(e.issuedAtTime))/1e3;if(r&&r>zy)return;const i=e==null?void 0:e.token;ih!==i&&(ih=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Gy(n=Id()){const t=Zl(n,"auth");if(t.isInitialized())return t.getImmediate();const e=m_(n,{popupRedirectResolver:Uy,persistence:[J_,F_,Qd]}),r=_d("authTokenSyncURL");if(r){const s=Ky(r);O_(e,s,()=>s(e.currentUser)),N_(e,o=>s(o))}const i=md("auth");return i&&__(e,`http://${i}`),e}qy("Browser");var Wy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},C,uu=uu||{},G=Wy||self;function ro(n){var t=typeof n;return t=t!="object"?t:n?Array.isArray(n)?"array":t:"null",t=="array"||t=="object"&&typeof n.length=="number"}function Xi(n){var t=typeof n;return t=="object"&&n!=null||t=="function"}function Qy(n){return Object.prototype.hasOwnProperty.call(n,nl)&&n[nl]||(n[nl]=++Yy)}var nl="closure_uid_"+(1e9*Math.random()>>>0),Yy=0;function Jy(n,t,e){return n.call.apply(n.bind,arguments)}function $y(n,t,e){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),n.apply(t,i)}}return function(){return n.apply(t,arguments)}}function Zt(n,t,e){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Zt=Jy:Zt=$y,Zt.apply(null,arguments)}function ys(n,t){var e=Array.prototype.slice.call(arguments,1);return function(){var r=e.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function Mt(n,t){function e(){}e.prototype=t.prototype,n.$=t.prototype,n.prototype=new e,n.prototype.constructor=n,n.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function jn(){this.s=this.s,this.o=this.o}var Xy=0;jn.prototype.s=!1;jn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Xy!=0)&&Qy(this)};jn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ef=Array.prototype.indexOf?function(n,t){return Array.prototype.indexOf.call(n,t,void 0)}:function(n,t){if(typeof n=="string")return typeof t!="string"||t.length!=1?-1:n.indexOf(t,0);for(let e=0;e<n.length;e++)if(e in n&&n[e]===t)return e;return-1};function cu(n){const t=n.length;if(0<t){const e=Array(t);for(let r=0;r<t;r++)e[r]=n[r];return e}return[]}function sh(n,t){for(let e=1;e<arguments.length;e++){const r=arguments[e];if(ro(r)){const i=n.length||0,s=r.length||0;n.length=i+s;for(let o=0;o<s;o++)n[i+o]=r[o]}else n.push(r)}}function te(n,t){this.type=n,this.g=this.target=t,this.defaultPrevented=!1}te.prototype.h=function(){this.defaultPrevented=!0};var Zy=function(){if(!G.addEventListener||!Object.defineProperty)return!1;var n=!1,t=Object.defineProperty({},"passive",{get:function(){n=!0}});try{const e=()=>{};G.addEventListener("test",e,t),G.removeEventListener("test",e,t)}catch{}return n}();function Vi(n){return/^[\s\xa0]*$/.test(n)}function io(){var n=G.navigator;return n&&(n=n.userAgent)?n:""}function Le(n){return io().indexOf(n)!=-1}function hu(n){return hu[" "](n),n}hu[" "]=function(){};function tv(n,t){var e=Gv;return Object.prototype.hasOwnProperty.call(e,n)?e[n]:e[n]=t(n)}var ev=Le("Opera"),Qr=Le("Trident")||Le("MSIE"),nf=Le("Edge"),Il=nf||Qr,rf=Le("Gecko")&&!(io().toLowerCase().indexOf("webkit")!=-1&&!Le("Edge"))&&!(Le("Trident")||Le("MSIE"))&&!Le("Edge"),nv=io().toLowerCase().indexOf("webkit")!=-1&&!Le("Edge");function sf(){var n=G.document;return n?n.documentMode:void 0}var wl;t:{var rl="",il=function(){var n=io();if(rf)return/rv:([^\);]+)(\)|;)/.exec(n);if(nf)return/Edge\/([\d\.]+)/.exec(n);if(Qr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(nv)return/WebKit\/(\S+)/.exec(n);if(ev)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(il&&(rl=il?il[1]:""),Qr){var sl=sf();if(sl!=null&&sl>parseFloat(rl)){wl=String(sl);break t}}wl=rl}var Al;if(G.document&&Qr){var oh=sf();Al=oh||parseInt(wl,10)||void 0}else Al=void 0;var rv=Al;function Li(n,t){if(te.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var e=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=t,t=n.relatedTarget){if(rf){t:{try{hu(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else e=="mouseover"?t=n.fromElement:e=="mouseout"&&(t=n.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:iv[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&Li.$.h.call(this)}}Mt(Li,te);var iv={2:"touch",3:"pen",4:"mouse"};Li.prototype.h=function(){Li.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var Zi="closure_listenable_"+(1e6*Math.random()|0),sv=0;function ov(n,t,e,r,i){this.listener=n,this.proxy=null,this.src=t,this.type=e,this.capture=!!r,this.la=i,this.key=++sv,this.fa=this.ia=!1}function so(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function du(n,t,e){for(const r in n)t.call(e,n[r],r,n)}function av(n,t){for(const e in n)t.call(void 0,n[e],e,n)}function of(n){const t={};for(const e in n)t[e]=n[e];return t}const ah="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function af(n,t){let e,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(e in r)n[e]=r[e];for(let s=0;s<ah.length;s++)e=ah[s],Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e])}}function oo(n){this.src=n,this.g={},this.h=0}oo.prototype.add=function(n,t,e,r,i){var s=n.toString();n=this.g[s],n||(n=this.g[s]=[],this.h++);var o=Rl(n,t,r,i);return-1<o?(t=n[o],e||(t.ia=!1)):(t=new ov(t,this.src,s,!!r,i),t.ia=e,n.push(t)),t};function Cl(n,t){var e=t.type;if(e in n.g){var r=n.g[e],i=ef(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(so(t),n.g[e].length==0&&(delete n.g[e],n.h--))}}function Rl(n,t,e,r){for(var i=0;i<n.length;++i){var s=n[i];if(!s.fa&&s.listener==t&&s.capture==!!e&&s.la==r)return i}return-1}var fu="closure_lm_"+(1e6*Math.random()|0),ol={};function lf(n,t,e,r,i){if(r&&r.once)return cf(n,t,e,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)lf(n,t[s],e,r,i);return null}return e=gu(e),n&&n[Zi]?n.O(t,e,Xi(r)?!!r.capture:!!r,i):uf(n,t,e,!1,r,i)}function uf(n,t,e,r,i,s){if(!t)throw Error("Invalid event type");var o=Xi(i)?!!i.capture:!!i,a=mu(n);if(a||(n[fu]=a=new oo(n)),e=a.add(t,e,r,o,s),e.proxy)return e;if(r=lv(),e.proxy=r,r.src=n,r.listener=e,n.addEventListener)Zy||(i=o),i===void 0&&(i=!1),n.addEventListener(t.toString(),r,i);else if(n.attachEvent)n.attachEvent(df(t.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return e}function lv(){function n(e){return t.call(n.src,n.listener,e)}const t=uv;return n}function cf(n,t,e,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)cf(n,t[s],e,r,i);return null}return e=gu(e),n&&n[Zi]?n.P(t,e,Xi(r)?!!r.capture:!!r,i):uf(n,t,e,!0,r,i)}function hf(n,t,e,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)hf(n,t[s],e,r,i);else r=Xi(r)?!!r.capture:!!r,e=gu(e),n&&n[Zi]?(n=n.i,t=String(t).toString(),t in n.g&&(s=n.g[t],e=Rl(s,e,r,i),-1<e&&(so(s[e]),Array.prototype.splice.call(s,e,1),s.length==0&&(delete n.g[t],n.h--)))):n&&(n=mu(n))&&(t=n.g[t.toString()],n=-1,t&&(n=Rl(t,e,r,i)),(e=-1<n?t[n]:null)&&pu(e))}function pu(n){if(typeof n!="number"&&n&&!n.fa){var t=n.src;if(t&&t[Zi])Cl(t.i,n);else{var e=n.type,r=n.proxy;t.removeEventListener?t.removeEventListener(e,r,n.capture):t.detachEvent?t.detachEvent(df(e),r):t.addListener&&t.removeListener&&t.removeListener(r),(e=mu(t))?(Cl(e,n),e.h==0&&(e.src=null,t[fu]=null)):so(n)}}}function df(n){return n in ol?ol[n]:ol[n]="on"+n}function uv(n,t){if(n.fa)n=!0;else{t=new Li(t,this);var e=n.listener,r=n.la||n.src;n.ia&&pu(n),n=e.call(r,t)}return n}function mu(n){return n=n[fu],n instanceof oo?n:null}var al="__closure_events_fn_"+(1e9*Math.random()>>>0);function gu(n){return typeof n=="function"?n:(n[al]||(n[al]=function(t){return n.handleEvent(t)}),n[al])}function Lt(){jn.call(this),this.i=new oo(this),this.S=this,this.J=null}Mt(Lt,jn);Lt.prototype[Zi]=!0;Lt.prototype.removeEventListener=function(n,t,e,r){hf(this,n,t,e,r)};function qt(n,t){var e,r=n.J;if(r)for(e=[];r;r=r.J)e.push(r);if(n=n.S,r=t.type||t,typeof t=="string")t=new te(t,n);else if(t instanceof te)t.target=t.target||n;else{var i=t;t=new te(r,n),af(t,i)}if(i=!0,e)for(var s=e.length-1;0<=s;s--){var o=t.g=e[s];i=vs(o,r,!0,t)&&i}if(o=t.g=n,i=vs(o,r,!0,t)&&i,i=vs(o,r,!1,t)&&i,e)for(s=0;s<e.length;s++)o=t.g=e[s],i=vs(o,r,!1,t)&&i}Lt.prototype.N=function(){if(Lt.$.N.call(this),this.i){var n=this.i,t;for(t in n.g){for(var e=n.g[t],r=0;r<e.length;r++)so(e[r]);delete n.g[t],n.h--}}this.J=null};Lt.prototype.O=function(n,t,e,r){return this.i.add(String(n),t,!1,e,r)};Lt.prototype.P=function(n,t,e,r){return this.i.add(String(n),t,!0,e,r)};function vs(n,t,e,r){if(t=n.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==e){var a=o.listener,l=o.la||o.src;o.ia&&Cl(n.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var _u=G.JSON.stringify;class cv{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function hv(){var n=yu;let t=null;return n.g&&(t=n.g,n.g=n.g.next,n.g||(n.h=null),t.next=null),t}class dv{constructor(){this.h=this.g=null}add(t,e){const r=ff.get();r.set(t,e),this.h?this.h.next=r:this.g=r,this.h=r}}var ff=new cv(()=>new fv,n=>n.reset());class fv{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function pv(n){var t=1;n=n.split(":");const e=[];for(;0<t&&n.length;)e.push(n.shift()),t--;return n.length&&e.push(n.join(":")),e}function mv(n){G.setTimeout(()=>{throw n},0)}let Mi,xi=!1,yu=new dv,pf=()=>{const n=G.Promise.resolve(void 0);Mi=()=>{n.then(gv)}};var gv=()=>{for(var n;n=hv();){try{n.h.call(n.g)}catch(e){mv(e)}var t=ff;t.j(n),100>t.h&&(t.h++,n.next=t.g,t.g=n)}xi=!1};function ao(n,t){Lt.call(this),this.h=n||1,this.g=t||G,this.j=Zt(this.qb,this),this.l=Date.now()}Mt(ao,Lt);C=ao.prototype;C.ga=!1;C.T=null;C.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),qt(this,"tick"),this.ga&&(vu(this),this.start()))}};C.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function vu(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}C.N=function(){ao.$.N.call(this),vu(this),delete this.g};function Eu(n,t,e){if(typeof n=="function")e&&(n=Zt(n,e));else if(n&&typeof n.handleEvent=="function")n=Zt(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:G.setTimeout(n,t||0)}function mf(n){n.g=Eu(()=>{n.g=null,n.i&&(n.i=!1,mf(n))},n.j);const t=n.h;n.h=null,n.m.apply(null,t)}class _v extends jn{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:mf(this)}N(){super.N(),this.g&&(G.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Fi(n){jn.call(this),this.h=n,this.g={}}Mt(Fi,jn);var lh=[];function gf(n,t,e,r){Array.isArray(e)||(e&&(lh[0]=e.toString()),e=lh);for(var i=0;i<e.length;i++){var s=lf(t,e[i],r||n.handleEvent,!1,n.h||n);if(!s)break;n.g[s.key]=s}}function _f(n){du(n.g,function(t,e){this.g.hasOwnProperty(e)&&pu(t)},n),n.g={}}Fi.prototype.N=function(){Fi.$.N.call(this),_f(this)};Fi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function lo(){this.g=!0}lo.prototype.Ea=function(){this.g=!1};function yv(n,t,e,r,i,s){n.info(function(){if(n.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var f=c.split("_");o=2<=f.length&&f[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+e+`
`+o})}function vv(n,t,e,r,i,s,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+e+`
`+s+" "+o})}function Ur(n,t,e,r){n.info(function(){return"XMLHTTP TEXT ("+t+"): "+Tv(n,e)+(r?" "+r:"")})}function Ev(n,t){n.info(function(){return"TIMEOUT: "+t})}lo.prototype.info=function(){};function Tv(n,t){if(!n.g)return t;if(!t)return null;try{var e=JSON.parse(t);if(e){for(n=0;n<e.length;n++)if(Array.isArray(e[n])){var r=e[n];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return _u(e)}catch{return t}}var wr={},uh=null;function uo(){return uh=uh||new Lt}wr.Ta="serverreachability";function yf(n){te.call(this,wr.Ta,n)}Mt(yf,te);function Ui(n){const t=uo();qt(t,new yf(t))}wr.STAT_EVENT="statevent";function vf(n,t){te.call(this,wr.STAT_EVENT,n),this.stat=t}Mt(vf,te);function oe(n){const t=uo();qt(t,new vf(t,n))}wr.Ua="timingevent";function Ef(n,t){te.call(this,wr.Ua,n),this.size=t}Mt(Ef,te);function ts(n,t){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return G.setTimeout(function(){n()},t)}var co={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Tf={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Tu(){}Tu.prototype.h=null;function ch(n){return n.h||(n.h=n.i())}function If(){}var es={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Iu(){te.call(this,"d")}Mt(Iu,te);function wu(){te.call(this,"c")}Mt(wu,te);var Sl;function ho(){}Mt(ho,Tu);ho.prototype.g=function(){return new XMLHttpRequest};ho.prototype.i=function(){return{}};Sl=new ho;function ns(n,t,e,r){this.l=n,this.j=t,this.m=e,this.W=r||1,this.U=new Fi(this),this.P=Iv,n=Il?125:void 0,this.V=new ao(n),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new wf}function wf(){this.i=null,this.g="",this.h=!1}var Iv=45e3,Af={},bl={};C=ns.prototype;C.setTimeout=function(n){this.P=n};function Pl(n,t,e){n.L=1,n.A=po(mn(t)),n.u=e,n.S=!0,Cf(n,null)}function Cf(n,t){n.G=Date.now(),rs(n),n.B=mn(n.A);var e=n.B,r=n.W;Array.isArray(r)||(r=[String(r)]),Of(e.i,"t",r),n.o=0,e=n.l.J,n.h=new wf,n.g=tp(n.l,e?t:null,!n.u),0<n.O&&(n.M=new _v(Zt(n.Pa,n,n.g),n.O)),gf(n.U,n.g,"readystatechange",n.nb),t=n.I?of(n.I):{},n.u?(n.v||(n.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.B,n.v,n.u,t)):(n.v="GET",n.g.ha(n.B,n.v,null,t)),Ui(),yv(n.j,n.v,n.B,n.m,n.W,n.u)}C.nb=function(n){n=n.target;const t=this.M;t&&xe(n)==3?t.l():this.Pa(n)};C.Pa=function(n){try{if(n==this.g)t:{const c=xe(this.g);var t=this.g.Ia();const f=this.g.da();if(!(3>c)&&(c!=3||Il||this.g&&(this.h.h||this.g.ja()||ph(this.g)))){this.J||c!=4||t==7||(t==8||0>=f?Ui(3):Ui(2)),fo(this);var e=this.g.da();this.ca=e;e:if(Rf(this)){var r=ph(this.g);n="";var i=r.length,s=xe(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ur(this),Ai(this);var o="";break e}this.h.i=new G.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,n+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.length=0,this.h.g+=n,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=e==200,vv(this.j,this.v,this.B,this.m,this.W,c,e),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Vi(a)){var u=a;break e}}u=null}if(e=u)Ur(this.j,this.m,e,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,kl(this,e);else{this.i=!1,this.s=3,oe(12),ur(this),Ai(this);break t}}this.S?(Sf(this,c,o),Il&&this.i&&c==3&&(gf(this.U,this.V,"tick",this.mb),this.V.start())):(Ur(this.j,this.m,o,null),kl(this,o)),c==4&&ur(this),this.i&&!this.J&&(c==4?Jf(this.l,this):(this.i=!1,rs(this)))}else Hv(this.g),e==400&&0<o.indexOf("Unknown SID")?(this.s=3,oe(12)):(this.s=0,oe(13)),ur(this),Ai(this)}}}catch{}finally{}};function Rf(n){return n.g?n.v=="GET"&&n.L!=2&&n.l.Ha:!1}function Sf(n,t,e){let r=!0,i;for(;!n.J&&n.o<e.length;)if(i=wv(n,e),i==bl){t==4&&(n.s=4,oe(14),r=!1),Ur(n.j,n.m,null,"[Incomplete Response]");break}else if(i==Af){n.s=4,oe(15),Ur(n.j,n.m,e,"[Invalid Chunk]"),r=!1;break}else Ur(n.j,n.m,i,null),kl(n,i);Rf(n)&&n.o!=0&&(n.h.g=n.h.g.slice(n.o),n.o=0),t!=4||e.length!=0||n.h.h||(n.s=1,oe(16),r=!1),n.i=n.i&&r,r?0<e.length&&!n.ba&&(n.ba=!0,t=n.l,t.g==n&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+e.length),Pu(t),t.M=!0,oe(11))):(Ur(n.j,n.m,e,"[Invalid Chunked Response]"),ur(n),Ai(n))}C.mb=function(){if(this.g){var n=xe(this.g),t=this.g.ja();this.o<t.length&&(fo(this),Sf(this,n,t),this.i&&n!=4&&rs(this))}};function wv(n,t){var e=n.o,r=t.indexOf(`
`,e);return r==-1?bl:(e=Number(t.substring(e,r)),isNaN(e)?Af:(r+=1,r+e>t.length?bl:(t=t.slice(r,r+e),n.o=r+e,t)))}C.cancel=function(){this.J=!0,ur(this)};function rs(n){n.Y=Date.now()+n.P,bf(n,n.P)}function bf(n,t){if(n.C!=null)throw Error("WatchDog timer not null");n.C=ts(Zt(n.lb,n),t)}function fo(n){n.C&&(G.clearTimeout(n.C),n.C=null)}C.lb=function(){this.C=null;const n=Date.now();0<=n-this.Y?(Ev(this.j,this.B),this.L!=2&&(Ui(),oe(17)),ur(this),this.s=2,Ai(this)):bf(this,this.Y-n)};function Ai(n){n.l.H==0||n.J||Jf(n.l,n)}function ur(n){fo(n);var t=n.M;t&&typeof t.sa=="function"&&t.sa(),n.M=null,vu(n.V),_f(n.U),n.g&&(t=n.g,n.g=null,t.abort(),t.sa())}function kl(n,t){try{var e=n.l;if(e.H!=0&&(e.g==n||Dl(e.i,n))){if(!n.K&&Dl(e.i,n)&&e.H==3){try{var r=e.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){t:if(!e.u){if(e.g)if(e.g.G+3e3<n.G)Hs(e),yo(e);else break t;bu(e),oe(18)}}else e.Fa=i[1],0<e.Fa-e.V&&37500>i[2]&&e.G&&e.A==0&&!e.v&&(e.v=ts(Zt(e.ib,e),6e3));if(1>=Mf(e.i)&&e.oa){try{e.oa()}catch{}e.oa=void 0}}else cr(e,11)}else if((n.K||e.g==n)&&Hs(e),!Vi(t))for(i=e.Ja.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(e.V=u[0],u=u[1],e.H==2)if(u[0]=="c"){e.K=u[1],e.pa=u[2];const c=u[3];c!=null&&(e.ra=c,e.l.info("VER="+e.ra));const f=u[4];f!=null&&(e.Ga=f,e.l.info("SVER="+e.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,e.L=r,e.l.info("backChannelRequestTimeoutMs_="+r)),r=e;const g=n.g;if(g){const b=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(b){var s=r.i;s.g||b.indexOf("spdy")==-1&&b.indexOf("quic")==-1&&b.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Au(s,s.h),s.h=null))}if(r.F){const R=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;R&&(r.Da=R,_t(r.I,r.F,R))}}e.H=3,e.h&&e.h.Ba(),e.ca&&(e.S=Date.now()-n.G,e.l.info("Handshake RTT: "+e.S+"ms")),r=e;var o=n;if(r.wa=Zf(r,r.J?r.pa:null,r.Y),o.K){xf(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.C&&(fo(a),rs(a)),r.g=o}else Qf(r);0<e.j.length&&vo(e)}else u[0]!="stop"&&u[0]!="close"||cr(e,7);else e.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?cr(e,7):Su(e):u[0]!="noop"&&e.h&&e.h.Aa(u),e.A=0)}}Ui(4)}catch{}}function Av(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(ro(n)){for(var t=[],e=n.length,r=0;r<e;r++)t.push(n[r]);return t}t=[],e=0;for(r in n)t[e++]=n[r];return t}function Cv(n){if(n.ta&&typeof n.ta=="function")return n.ta();if(!n.Z||typeof n.Z!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(ro(n)||typeof n=="string"){var t=[];n=n.length;for(var e=0;e<n;e++)t.push(e);return t}t=[],e=0;for(const r in n)t[e++]=r;return t}}}function Pf(n,t){if(n.forEach&&typeof n.forEach=="function")n.forEach(t,void 0);else if(ro(n)||typeof n=="string")Array.prototype.forEach.call(n,t,void 0);else for(var e=Cv(n),r=Av(n),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],e&&e[s],n)}var kf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Rv(n,t){if(n){n=n.split("&");for(var e=0;e<n.length;e++){var r=n[e].indexOf("="),i=null;if(0<=r){var s=n[e].substring(0,r);i=n[e].substring(r+1)}else s=n[e];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function pr(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof pr){this.h=n.h,js(this,n.j),this.s=n.s,this.g=n.g,qs(this,n.m),this.l=n.l;var t=n.i,e=new Bi;e.i=t.i,t.g&&(e.g=new Map(t.g),e.h=t.h),hh(this,e),this.o=n.o}else n&&(t=String(n).match(kf))?(this.h=!1,js(this,t[1]||"",!0),this.s=vi(t[2]||""),this.g=vi(t[3]||"",!0),qs(this,t[4]),this.l=vi(t[5]||"",!0),hh(this,t[6]||"",!0),this.o=vi(t[7]||"")):(this.h=!1,this.i=new Bi(null,this.h))}pr.prototype.toString=function(){var n=[],t=this.j;t&&n.push(Ei(t,dh,!0),":");var e=this.g;return(e||t=="file")&&(n.push("//"),(t=this.s)&&n.push(Ei(t,dh,!0),"@"),n.push(encodeURIComponent(String(e)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e=this.m,e!=null&&n.push(":",String(e))),(e=this.l)&&(this.g&&e.charAt(0)!="/"&&n.push("/"),n.push(Ei(e,e.charAt(0)=="/"?Pv:bv,!0))),(e=this.i.toString())&&n.push("?",e),(e=this.o)&&n.push("#",Ei(e,Dv)),n.join("")};function mn(n){return new pr(n)}function js(n,t,e){n.j=e?vi(t,!0):t,n.j&&(n.j=n.j.replace(/:$/,""))}function qs(n,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);n.m=t}else n.m=null}function hh(n,t,e){t instanceof Bi?(n.i=t,Nv(n.i,n.h)):(e||(t=Ei(t,kv)),n.i=new Bi(t,n.h))}function _t(n,t,e){n.i.set(t,e)}function po(n){return _t(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function vi(n,t){return n?t?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function Ei(n,t,e){return typeof n=="string"?(n=encodeURI(n).replace(t,Sv),e&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function Sv(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var dh=/[#\/\?@]/g,bv=/[#\?:]/g,Pv=/[#\?]/g,kv=/[#\?@]/g,Dv=/#/g;function Bi(n,t){this.h=this.g=null,this.i=n||null,this.j=!!t}function qn(n){n.g||(n.g=new Map,n.h=0,n.i&&Rv(n.i,function(t,e){n.add(decodeURIComponent(t.replace(/\+/g," ")),e)}))}C=Bi.prototype;C.add=function(n,t){qn(this),this.i=null,n=ii(this,n);var e=this.g.get(n);return e||this.g.set(n,e=[]),e.push(t),this.h+=1,this};function Df(n,t){qn(n),t=ii(n,t),n.g.has(t)&&(n.i=null,n.h-=n.g.get(t).length,n.g.delete(t))}function Nf(n,t){return qn(n),t=ii(n,t),n.g.has(t)}C.forEach=function(n,t){qn(this),this.g.forEach(function(e,r){e.forEach(function(i){n.call(t,i,r,this)},this)},this)};C.ta=function(){qn(this);const n=Array.from(this.g.values()),t=Array.from(this.g.keys()),e=[];for(let r=0;r<t.length;r++){const i=n[r];for(let s=0;s<i.length;s++)e.push(t[r])}return e};C.Z=function(n){qn(this);let t=[];if(typeof n=="string")Nf(this,n)&&(t=t.concat(this.g.get(ii(this,n))));else{n=Array.from(this.g.values());for(let e=0;e<n.length;e++)t=t.concat(n[e])}return t};C.set=function(n,t){return qn(this),this.i=null,n=ii(this,n),Nf(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[t]),this.h+=1,this};C.get=function(n,t){return n?(n=this.Z(n),0<n.length?String(n[0]):t):t};function Of(n,t,e){Df(n,t),0<e.length&&(n.i=null,n.g.set(ii(n,t),cu(e)),n.h+=e.length)}C.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],t=Array.from(this.g.keys());for(var e=0;e<t.length;e++){var r=t[e];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),n.push(i)}}return this.i=n.join("&")};function ii(n,t){return t=String(t),n.j&&(t=t.toLowerCase()),t}function Nv(n,t){t&&!n.j&&(qn(n),n.i=null,n.g.forEach(function(e,r){var i=r.toLowerCase();r!=i&&(Df(this,r),Of(this,i,e))},n)),n.j=t}var Ov=class{constructor(n,t){this.g=n,this.map=t}};function Vf(n){this.l=n||Vv,G.PerformanceNavigationTiming?(n=G.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(G.g&&G.g.Ka&&G.g.Ka()&&G.g.Ka().dc),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Vv=10;function Lf(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function Mf(n){return n.h?1:n.g?n.g.size:0}function Dl(n,t){return n.h?n.h==t:n.g?n.g.has(t):!1}function Au(n,t){n.g?n.g.add(t):n.h=t}function xf(n,t){n.h&&n.h==t?n.h=null:n.g&&n.g.has(t)&&n.g.delete(t)}Vf.prototype.cancel=function(){if(this.i=Ff(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function Ff(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let t=n.i;for(const e of n.g.values())t=t.concat(e.F);return t}return cu(n.i)}var Lv=class{stringify(n){return G.JSON.stringify(n,void 0)}parse(n){return G.JSON.parse(n,void 0)}};function Mv(){this.g=new Lv}function xv(n,t,e){const r=e||"";try{Pf(n,function(i,s){let o=i;Xi(i)&&(o=_u(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function Fv(n,t){const e=new lo;if(G.Image){const r=new Image;r.onload=ys(Es,e,r,"TestLoadImage: loaded",!0,t),r.onerror=ys(Es,e,r,"TestLoadImage: error",!1,t),r.onabort=ys(Es,e,r,"TestLoadImage: abort",!1,t),r.ontimeout=ys(Es,e,r,"TestLoadImage: timeout",!1,t),G.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else t(!1)}function Es(n,t,e,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function mo(n){this.l=n.ec||null,this.j=n.ob||!1}Mt(mo,Tu);mo.prototype.g=function(){return new go(this.l,this.j)};mo.prototype.i=function(n){return function(){return n}}({});function go(n,t){Lt.call(this),this.F=n,this.u=t,this.m=void 0,this.readyState=Cu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Mt(go,Lt);var Cu=0;C=go.prototype;C.open=function(n,t){if(this.readyState!=Cu)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=t,this.readyState=1,ji(this)};C.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(t.body=n),(this.F||G).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};C.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,is(this)),this.readyState=Cu};C.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,ji(this)),this.g&&(this.readyState=3,ji(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof G.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Uf(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function Uf(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}C.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var t=n.value?n.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!n.done}))&&(this.response=this.responseText+=t)}n.done?is(this):ji(this),this.readyState==3&&Uf(this)}};C.Za=function(n){this.g&&(this.response=this.responseText=n,is(this))};C.Ya=function(n){this.g&&(this.response=n,is(this))};C.ka=function(){this.g&&is(this)};function is(n){n.readyState=4,n.l=null,n.j=null,n.A=null,ji(n)}C.setRequestHeader=function(n,t){this.v.append(n,t)};C.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};C.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],t=this.h.entries();for(var e=t.next();!e.done;)e=e.value,n.push(e[0]+": "+e[1]),e=t.next();return n.join(`\r
`)};function ji(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(go.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var Uv=G.JSON.parse;function Tt(n){Lt.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Bf,this.L=this.M=!1}Mt(Tt,Lt);var Bf="",Bv=/^https?$/i,jv=["POST","PUT"];C=Tt.prototype;C.Oa=function(n){this.M=n};C.ha=function(n,t,e,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);t=t?t.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Sl.g(),this.C=this.u?ch(this.u):ch(Sl),this.g.onreadystatechange=Zt(this.La,this);try{this.G=!0,this.g.open(t,String(n),!0),this.G=!1}catch(s){fh(this,s);return}if(n=e||"",e=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)e.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())e.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(e.keys()).find(s=>s.toLowerCase()=="content-type"),i=G.FormData&&n instanceof G.FormData,!(0<=ef(jv,t))||r||i||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of e)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Hf(this),0<this.B&&((this.L=qv(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Zt(this.ua,this)):this.A=Eu(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(s){fh(this,s)}};function qv(n){return Qr&&typeof n.timeout=="number"&&n.ontimeout!==void 0}C.ua=function(){typeof uu<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,qt(this,"timeout"),this.abort(8))};function fh(n,t){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=t,n.m=5,jf(n),_o(n)}function jf(n){n.F||(n.F=!0,qt(n,"complete"),qt(n,"error"))}C.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,qt(this,"complete"),qt(this,"abort"),_o(this))};C.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),_o(this,!0)),Tt.$.N.call(this)};C.La=function(){this.s||(this.G||this.v||this.l?qf(this):this.kb())};C.kb=function(){qf(this)};function qf(n){if(n.h&&typeof uu<"u"&&(!n.C[1]||xe(n)!=4||n.da()!=2)){if(n.v&&xe(n)==4)Eu(n.La,0,n);else if(qt(n,"readystatechange"),xe(n)==4){n.h=!1;try{const o=n.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var e;if(!(e=t)){var r;if(r=o===0){var i=String(n.I).match(kf)[1]||null;!i&&G.self&&G.self.location&&(i=G.self.location.protocol.slice(0,-1)),r=!Bv.test(i?i.toLowerCase():"")}e=r}if(e)qt(n,"complete"),qt(n,"success");else{n.m=6;try{var s=2<xe(n)?n.g.statusText:""}catch{s=""}n.j=s+" ["+n.da()+"]",jf(n)}}finally{_o(n)}}}}function _o(n,t){if(n.g){Hf(n);const e=n.g,r=n.C[0]?()=>{}:null;n.g=null,n.C=null,t||qt(n,"ready");try{e.onreadystatechange=r}catch{}}}function Hf(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(G.clearTimeout(n.A),n.A=null)}C.isActive=function(){return!!this.g};function xe(n){return n.g?n.g.readyState:0}C.da=function(){try{return 2<xe(this)?this.g.status:-1}catch{return-1}};C.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};C.Wa=function(n){if(this.g){var t=this.g.responseText;return n&&t.indexOf(n)==0&&(t=t.substring(n.length)),Uv(t)}};function ph(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case Bf:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function Hv(n){const t={};n=(n.g&&2<=xe(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<n.length;r++){if(Vi(n[r]))continue;var e=pv(n[r]);const i=e[0];if(e=e[1],typeof e!="string")continue;e=e.trim();const s=t[i]||[];t[i]=s,s.push(e)}av(t,function(r){return r.join(", ")})}C.Ia=function(){return this.m};C.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function zf(n){let t="";return du(n,function(e,r){t+=r,t+=":",t+=e,t+=`\r
`}),t}function Ru(n,t,e){t:{for(r in e){var r=!1;break t}r=!0}r||(e=zf(e),typeof n=="string"?e!=null&&encodeURIComponent(String(e)):_t(n,t,e))}function fi(n,t,e){return e&&e.internalChannelParams&&e.internalChannelParams[n]||t}function Kf(n){this.Ga=0,this.j=[],this.l=new lo,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=fi("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=fi("baseRetryDelayMs",5e3,n),this.hb=fi("retryDelaySeedMs",1e4,n),this.eb=fi("forwardChannelMaxRetries",2,n),this.xa=fi("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.useFetchStreams||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new Vf(n&&n.concurrentRequestLimit),this.Ja=new Mv,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}C=Kf.prototype;C.ra=8;C.H=1;function Su(n){if(Gf(n),n.H==3){var t=n.W++,e=mn(n.I);if(_t(e,"SID",n.K),_t(e,"RID",t),_t(e,"TYPE","terminate"),ss(n,e),t=new ns(n,n.l,t),t.L=2,t.A=po(mn(e)),e=!1,G.navigator&&G.navigator.sendBeacon)try{e=G.navigator.sendBeacon(t.A.toString(),"")}catch{}!e&&G.Image&&(new Image().src=t.A,e=!0),e||(t.g=tp(t.l,null),t.g.ha(t.A)),t.G=Date.now(),rs(t)}Xf(n)}function yo(n){n.g&&(Pu(n),n.g.cancel(),n.g=null)}function Gf(n){yo(n),n.u&&(G.clearTimeout(n.u),n.u=null),Hs(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&G.clearTimeout(n.m),n.m=null)}function vo(n){if(!Lf(n.i)&&!n.m){n.m=!0;var t=n.Na;Mi||pf(),xi||(Mi(),xi=!0),yu.add(t,n),n.C=0}}function zv(n,t){return Mf(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.j=t.F.concat(n.j),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=ts(Zt(n.Na,n,t),$f(n,n.C)),n.C++,!0)}C.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const i=new ns(this,this.l,n);let s=this.s;if(this.U&&(s?(s=of(s),af(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)t:{for(var t=0,e=0;e<this.j.length;e++){e:{var r=this.j[e];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=e;break t}if(t===4096||e===this.j.length-1){t=e+1;break t}}t=1e3}else t=1e3;t=Wf(this,i,t),e=mn(this.I),_t(e,"RID",n),_t(e,"CVER",22),this.F&&_t(e,"X-HTTP-Session-Id",this.F),ss(this,e),s&&(this.O?t="headers="+encodeURIComponent(String(zf(s)))+"&"+t:this.o&&Ru(e,this.o,s)),Au(this.i,i),this.bb&&_t(e,"TYPE","init"),this.P?(_t(e,"$req",t),_t(e,"SID","null"),i.aa=!0,Pl(i,e,null)):Pl(i,e,t),this.H=2}}else this.H==3&&(n?mh(this,n):this.j.length==0||Lf(this.i)||mh(this))};function mh(n,t){var e;t?e=t.m:e=n.W++;const r=mn(n.I);_t(r,"SID",n.K),_t(r,"RID",e),_t(r,"AID",n.V),ss(n,r),n.o&&n.s&&Ru(r,n.o,n.s),e=new ns(n,n.l,e,n.C+1),n.o===null&&(e.I=n.s),t&&(n.j=t.F.concat(n.j)),t=Wf(n,e,1e3),e.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),Au(n.i,e),Pl(e,r,t)}function ss(n,t){n.na&&du(n.na,function(e,r){_t(t,r,e)}),n.h&&Pf({},function(e,r){_t(t,r,e)})}function Wf(n,t,e){e=Math.min(n.j.length,e);var r=n.h?Zt(n.h.Va,n.h,n):null;t:{var i=n.j;let s=-1;for(;;){const o=["count="+e];s==-1?0<e?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<e;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{xv(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break t}}}return n=n.j.splice(0,e),t.F=n,r}function Qf(n){if(!n.g&&!n.u){n.ba=1;var t=n.Ma;Mi||pf(),xi||(Mi(),xi=!0),yu.add(t,n),n.A=0}}function bu(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=ts(Zt(n.Ma,n),$f(n,n.A)),n.A++,!0)}C.Ma=function(){if(this.u=null,Yf(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=ts(Zt(this.jb,this),n)}};C.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,oe(10),yo(this),Yf(this))};function Pu(n){n.B!=null&&(G.clearTimeout(n.B),n.B=null)}function Yf(n){n.g=new ns(n,n.l,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var t=mn(n.wa);_t(t,"RID","rpc"),_t(t,"SID",n.K),_t(t,"AID",n.V),_t(t,"CI",n.G?"0":"1"),!n.G&&n.qa&&_t(t,"TO",n.qa),_t(t,"TYPE","xmlhttp"),ss(n,t),n.o&&n.s&&Ru(t,n.o,n.s),n.L&&n.g.setTimeout(n.L);var e=n.g;n=n.pa,e.L=1,e.A=po(mn(t)),e.u=null,e.S=!0,Cf(e,n)}C.ib=function(){this.v!=null&&(this.v=null,yo(this),bu(this),oe(19))};function Hs(n){n.v!=null&&(G.clearTimeout(n.v),n.v=null)}function Jf(n,t){var e=null;if(n.g==t){Hs(n),Pu(n),n.g=null;var r=2}else if(Dl(n.i,t))e=t.F,xf(n.i,t),r=1;else return;if(n.H!=0){if(t.i)if(r==1){e=t.u?t.u.length:0,t=Date.now()-t.G;var i=n.C;r=uo(),qt(r,new Ef(r,e)),vo(n)}else Qf(n);else if(i=t.s,i==3||i==0&&0<t.ca||!(r==1&&zv(n,t)||r==2&&bu(n)))switch(e&&0<e.length&&(t=n.i,t.i=t.i.concat(e)),i){case 1:cr(n,5);break;case 4:cr(n,10);break;case 3:cr(n,6);break;default:cr(n,2)}}}function $f(n,t){let e=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(e*=2),e*t}function cr(n,t){if(n.l.info("Error code "+t),t==2){var e=null;n.h&&(e=null);var r=Zt(n.pb,n);e||(e=new pr("//www.google.com/images/cleardot.gif"),G.location&&G.location.protocol=="http"||js(e,"https"),po(e)),Fv(e.toString(),r)}else oe(2);n.H=0,n.h&&n.h.za(t),Xf(n),Gf(n)}C.pb=function(n){n?(this.l.info("Successfully pinged google.com"),oe(2)):(this.l.info("Failed to ping google.com"),oe(1))};function Xf(n){if(n.H=0,n.ma=[],n.h){const t=Ff(n.i);(t.length!=0||n.j.length!=0)&&(sh(n.ma,t),sh(n.ma,n.j),n.i.i.length=0,cu(n.j),n.j.length=0),n.h.ya()}}function Zf(n,t,e){var r=e instanceof pr?mn(e):new pr(e);if(r.g!="")t&&(r.g=t+"."+r.g),qs(r,r.m);else{var i=G.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new pr(null);r&&js(s,r),t&&(s.g=t),i&&qs(s,i),e&&(s.l=e),r=s}return e=n.F,t=n.Da,e&&t&&_t(r,e,t),_t(r,"VER",n.ra),ss(n,r),r}function tp(n,t,e){if(t&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n.Ha&&!n.va?new Tt(new mo({ob:e})):new Tt(n.va),t.Oa(n.J),t}C.isActive=function(){return!!this.h&&this.h.isActive(this)};function ep(){}C=ep.prototype;C.Ba=function(){};C.Aa=function(){};C.za=function(){};C.ya=function(){};C.isActive=function(){return!0};C.Va=function(){};function zs(){if(Qr&&!(10<=Number(rv)))throw Error("Environmental error: no available transport.")}zs.prototype.g=function(n,t){return new me(n,t)};function me(n,t){Lt.call(this),this.g=new Kf(t),this.l=n,this.h=t&&t.messageUrlParams||null,n=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(n?n["X-WebChannel-Content-Type"]=t.messageContentType:n={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(n?n["X-WebChannel-Client-Profile"]=t.Ca:n={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=n,(n=t&&t.cc)&&!Vi(n)&&(this.g.o=n),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Vi(t)&&(this.g.F=t,n=this.h,n!==null&&t in n&&(n=this.h,t in n&&delete n[t])),this.j=new si(this)}Mt(me,Lt);me.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,t=this.l,e=this.h||void 0;oe(0),n.Y=t,n.na=e||{},n.G=n.aa,n.I=Zf(n,null,n.Y),vo(n)};me.prototype.close=function(){Su(this.g)};me.prototype.u=function(n){var t=this.g;if(typeof n=="string"){var e={};e.__data__=n,n=e}else this.v&&(e={},e.__data__=_u(n),n=e);t.j.push(new Ov(t.fb++,n)),t.H==3&&vo(t)};me.prototype.N=function(){this.g.h=null,delete this.j,Su(this.g),delete this.g,me.$.N.call(this)};function np(n){Iu.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var t=n.__sm__;if(t){t:{for(const e in t){n=e;break t}n=void 0}(this.i=n)&&(n=this.i,t=t!==null&&n in t?t[n]:void 0),this.data=t}else this.data=n}Mt(np,Iu);function rp(){wu.call(this),this.status=1}Mt(rp,wu);function si(n){this.g=n}Mt(si,ep);si.prototype.Ba=function(){qt(this.g,"a")};si.prototype.Aa=function(n){qt(this.g,new np(n))};si.prototype.za=function(n){qt(this.g,new rp)};si.prototype.ya=function(){qt(this.g,"b")};function Kv(){this.blockSize=-1}function Re(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Mt(Re,Kv);Re.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function ll(n,t,e){e||(e=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(e++)|t.charCodeAt(e++)<<8|t.charCodeAt(e++)<<16|t.charCodeAt(e++)<<24;else for(i=0;16>i;++i)r[i]=t[e++]|t[e++]<<8|t[e++]<<16|t[e++]<<24;t=n.g[0],e=n.g[1],i=n.g[2];var s=n.g[3],o=t+(s^e&(i^s))+r[0]+3614090360&4294967295;t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[3]+3250441966&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(s^e&(i^s))+r[4]+4118548399&4294967295,t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[7]+4249261313&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(s^e&(i^s))+r[8]+1770035416&4294967295,t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[11]+2304563134&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(s^e&(i^s))+r[12]+1804603682&4294967295,t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[15]+1236535329&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(e^i))+r[1]+4129170786&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[0]+3921069994&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(e^i))+r[5]+3593408605&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[4]+3889429448&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(e^i))+r[9]+568446438&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[8]+1163531501&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(e^i))+r[13]+2850285829&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[12]+2368359562&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(e^i^s)+r[5]+4294588738&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[14]+4259657740&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(e^i^s)+r[1]+2763975236&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[10]+3200236656&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(e^i^s)+r[13]+681279174&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[6]+76029189&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(e^i^s)+r[9]+3654602809&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[2]+3299628645&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(i^(e|~s))+r[0]+4096336452&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[5]+4237533241&4294967295,e=i+(o<<21&4294967295|o>>>11),o=t+(i^(e|~s))+r[12]+1700485571&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[1]+2240044497&4294967295,e=i+(o<<21&4294967295|o>>>11),o=t+(i^(e|~s))+r[8]+1873313359&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[13]+1309151649&4294967295,e=i+(o<<21&4294967295|o>>>11),o=t+(i^(e|~s))+r[4]+4149444226&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[9]+3951481745&4294967295,n.g[0]=n.g[0]+t&4294967295,n.g[1]=n.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+i&4294967295,n.g[3]=n.g[3]+s&4294967295}Re.prototype.j=function(n,t){t===void 0&&(t=n.length);for(var e=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=e;)ll(this,n,s),s+=this.blockSize;if(typeof n=="string"){for(;s<t;)if(r[i++]=n.charCodeAt(s++),i==this.blockSize){ll(this,r),i=0;break}}else for(;s<t;)if(r[i++]=n[s++],i==this.blockSize){ll(this,r),i=0;break}}this.h=i,this.i+=t};Re.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var t=1;t<n.length-8;++t)n[t]=0;var e=8*this.i;for(t=n.length-8;t<n.length;++t)n[t]=e&255,e/=256;for(this.j(n),n=Array(16),t=e=0;4>t;++t)for(var r=0;32>r;r+=8)n[e++]=this.g[t]>>>r&255;return n};function ct(n,t){this.h=t;for(var e=[],r=!0,i=n.length-1;0<=i;i--){var s=n[i]|0;r&&s==t||(e[i]=s,r=!1)}this.g=e}var Gv={};function ku(n){return-128<=n&&128>n?tv(n,function(t){return new ct([t|0],0>t?-1:0)}):new ct([n|0],0>n?-1:0)}function Fe(n){if(isNaN(n)||!isFinite(n))return qr;if(0>n)return jt(Fe(-n));for(var t=[],e=1,r=0;n>=e;r++)t[r]=n/e|0,e*=Nl;return new ct(t,0)}function ip(n,t){if(n.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(n.charAt(0)=="-")return jt(ip(n.substring(1),t));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var e=Fe(Math.pow(t,8)),r=qr,i=0;i<n.length;i+=8){var s=Math.min(8,n.length-i),o=parseInt(n.substring(i,i+s),t);8>s?(s=Fe(Math.pow(t,s)),r=r.R(s).add(Fe(o))):(r=r.R(e),r=r.add(Fe(o)))}return r}var Nl=4294967296,qr=ku(0),Ol=ku(1),gh=ku(16777216);C=ct.prototype;C.ea=function(){if(Te(this))return-jt(this).ea();for(var n=0,t=1,e=0;e<this.g.length;e++){var r=this.D(e);n+=(0<=r?r:Nl+r)*t,t*=Nl}return n};C.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(dn(this))return"0";if(Te(this))return"-"+jt(this).toString(n);for(var t=Fe(Math.pow(n,6)),e=this,r="";;){var i=Gs(e,t).g;e=Ks(e,i.R(t));var s=((0<e.g.length?e.g[0]:e.h)>>>0).toString(n);if(e=i,dn(e))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};C.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function dn(n){if(n.h!=0)return!1;for(var t=0;t<n.g.length;t++)if(n.g[t]!=0)return!1;return!0}function Te(n){return n.h==-1}C.X=function(n){return n=Ks(this,n),Te(n)?-1:dn(n)?0:1};function jt(n){for(var t=n.g.length,e=[],r=0;r<t;r++)e[r]=~n.g[r];return new ct(e,~n.h).add(Ol)}C.abs=function(){return Te(this)?jt(this):this};C.add=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(n.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(n.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,e[i]=o<<16|s}return new ct(e,e[e.length-1]&-2147483648?-1:0)};function Ks(n,t){return n.add(jt(t))}C.R=function(n){if(dn(this)||dn(n))return qr;if(Te(this))return Te(n)?jt(this).R(jt(n)):jt(jt(this).R(n));if(Te(n))return jt(this.R(jt(n)));if(0>this.X(gh)&&0>n.X(gh))return Fe(this.ea()*n.ea());for(var t=this.g.length+n.g.length,e=[],r=0;r<2*t;r++)e[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<n.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=n.D(i)>>>16,l=n.D(i)&65535;e[2*r+2*i]+=o*l,Ts(e,2*r+2*i),e[2*r+2*i+1]+=s*l,Ts(e,2*r+2*i+1),e[2*r+2*i+1]+=o*a,Ts(e,2*r+2*i+1),e[2*r+2*i+2]+=s*a,Ts(e,2*r+2*i+2)}for(r=0;r<t;r++)e[r]=e[2*r+1]<<16|e[2*r];for(r=t;r<2*t;r++)e[r]=0;return new ct(e,0)};function Ts(n,t){for(;(n[t]&65535)!=n[t];)n[t+1]+=n[t]>>>16,n[t]&=65535,t++}function pi(n,t){this.g=n,this.h=t}function Gs(n,t){if(dn(t))throw Error("division by zero");if(dn(n))return new pi(qr,qr);if(Te(n))return t=Gs(jt(n),t),new pi(jt(t.g),jt(t.h));if(Te(t))return t=Gs(n,jt(t)),new pi(jt(t.g),t.h);if(30<n.g.length){if(Te(n)||Te(t))throw Error("slowDivide_ only works with positive integers.");for(var e=Ol,r=t;0>=r.X(n);)e=_h(e),r=_h(r);var i=Vr(e,1),s=Vr(r,1);for(r=Vr(r,2),e=Vr(e,2);!dn(r);){var o=s.add(r);0>=o.X(n)&&(i=i.add(e),s=o),r=Vr(r,1),e=Vr(e,1)}return t=Ks(n,i.R(t)),new pi(i,t)}for(i=qr;0<=n.X(t);){for(e=Math.max(1,Math.floor(n.ea()/t.ea())),r=Math.ceil(Math.log(e)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Fe(e),o=s.R(t);Te(o)||0<o.X(n);)e-=r,s=Fe(e),o=s.R(t);dn(s)&&(s=Ol),i=i.add(s),n=Ks(n,o)}return new pi(i,n)}C.gb=function(n){return Gs(this,n).h};C.and=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)&n.D(r);return new ct(e,this.h&n.h)};C.or=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)|n.D(r);return new ct(e,this.h|n.h)};C.xor=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)^n.D(r);return new ct(e,this.h^n.h)};function _h(n){for(var t=n.g.length+1,e=[],r=0;r<t;r++)e[r]=n.D(r)<<1|n.D(r-1)>>>31;return new ct(e,n.h)}function Vr(n,t){var e=t>>5;t%=32;for(var r=n.g.length-e,i=[],s=0;s<r;s++)i[s]=0<t?n.D(s+e)>>>t|n.D(s+e+1)<<32-t:n.D(s+e);return new ct(i,n.h)}zs.prototype.createWebChannel=zs.prototype.g;me.prototype.send=me.prototype.u;me.prototype.open=me.prototype.m;me.prototype.close=me.prototype.close;co.NO_ERROR=0;co.TIMEOUT=8;co.HTTP_ERROR=6;Tf.COMPLETE="complete";If.EventType=es;es.OPEN="a";es.CLOSE="b";es.ERROR="c";es.MESSAGE="d";Lt.prototype.listen=Lt.prototype.O;Tt.prototype.listenOnce=Tt.prototype.P;Tt.prototype.getLastError=Tt.prototype.Sa;Tt.prototype.getLastErrorCode=Tt.prototype.Ia;Tt.prototype.getStatus=Tt.prototype.da;Tt.prototype.getResponseJson=Tt.prototype.Wa;Tt.prototype.getResponseText=Tt.prototype.ja;Tt.prototype.send=Tt.prototype.ha;Tt.prototype.setWithCredentials=Tt.prototype.Oa;Re.prototype.digest=Re.prototype.l;Re.prototype.reset=Re.prototype.reset;Re.prototype.update=Re.prototype.j;ct.prototype.add=ct.prototype.add;ct.prototype.multiply=ct.prototype.R;ct.prototype.modulo=ct.prototype.gb;ct.prototype.compare=ct.prototype.X;ct.prototype.toNumber=ct.prototype.ea;ct.prototype.toString=ct.prototype.toString;ct.prototype.getBits=ct.prototype.D;ct.fromNumber=Fe;ct.fromString=ip;var Wv=function(){return new zs},Qv=function(){return uo()},ul=co,Yv=Tf,Jv=wr,yh={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Is=If,$v=Tt,Xv=Re,Hr=ct;const vh="@firebase/firestore";/**
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
 */class $t{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}$t.UNAUTHENTICATED=new $t(null),$t.GOOGLE_CREDENTIALS=new $t("google-credentials-uid"),$t.FIRST_PARTY=new $t("first-party-uid"),$t.MOCK_USER=new $t("mock-user");/**
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
 */let oi="10.7.2";/**
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
 */const vr=new $l("@firebase/firestore");function mi(){return vr.logLevel}function S(n,...t){if(vr.logLevel<=et.DEBUG){const e=t.map(Du);vr.debug(`Firestore (${oi}): ${n}`,...e)}}function qe(n,...t){if(vr.logLevel<=et.ERROR){const e=t.map(Du);vr.error(`Firestore (${oi}): ${n}`,...e)}}function Yr(n,...t){if(vr.logLevel<=et.WARN){const e=t.map(Du);vr.warn(`Firestore (${oi}): ${n}`,...e)}}function Du(n){if(typeof n=="string")return n;try{/**
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
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
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
 */function X(n="Unexpected state"){const t=`FIRESTORE (${oi}) INTERNAL ASSERTION FAILED: `+n;throw qe(t),new Error(t)}function bt(n,t){n||X()}function ot(n,t){return n}/**
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
 */const w={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class V extends gn{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Mn{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class sp{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Zv{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e($t.UNAUTHENTICATED))}shutdown(){}}class tE{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class eE{constructor(t){this.t=t,this.currentUser=$t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let r=this.i;const i=l=>this.i!==r?(r=this.i,e(l)):Promise.resolve();let s=new Mn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Mn,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;t.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{S("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(S("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Mn)}},0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(S("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(bt(typeof r.accessToken=="string"),new sp(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return bt(t===null||typeof t=="string"),new $t(t)}}class nE{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=$t.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class rE{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new nE(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e($t.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class iE{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class sE{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const r=s=>{s.error!=null&&S("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,S("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?e(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{S("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):S("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(bt(typeof e.token=="string"),this.R=e.token,new iE(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function oE(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
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
 */class op{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=oE(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<e&&(r+=t.charAt(i[s]%t.length))}return r}}function lt(n,t){return n<t?-1:n>t?1:0}function Jr(n,t,e){return n.length===t.length&&n.every((r,i)=>e(r,t[i]))}/**
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
 */class ce{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new V(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new V(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new V(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new V(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return ce.fromMillis(Date.now())}static fromDate(t){return ce.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new ce(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?lt(this.nanoseconds,t.nanoseconds):lt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Y{constructor(t){this.timestamp=t}static fromTimestamp(t){return new Y(t)}static min(){return new Y(new ce(0,0))}static max(){return new Y(new ce(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class qi{constructor(t,e,r){e===void 0?e=0:e>t.length&&X(),r===void 0?r=t.length-e:r>t.length-e&&X(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return qi.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof qi?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const s=t.get(i),o=e.get(i);if(s<o)return-1;if(s>o)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Et extends qi{construct(t,e,r){return new Et(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new V(w.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(i=>i.length>0))}return new Et(e)}static emptyPath(){return new Et([])}}const aE=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class se extends qi{construct(t,e,r){return new se(t,e,r)}static isValidIdentifier(t){return aE.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),se.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new se(["__name__"])}static fromServerFormat(t){const e=[];let r="",i=0;const s=()=>{if(r.length===0)throw new V(w.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new V(w.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new V(w.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new V(w.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new se(e)}static emptyPath(){return new se([])}}/**
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
 */class U{constructor(t){this.path=t}static fromPath(t){return new U(Et.fromString(t))}static fromName(t){return new U(Et.fromString(t).popFirst(5))}static empty(){return new U(Et.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Et.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Et.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new U(new Et(t.slice()))}}function lE(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=Y.fromTimestamp(r===1e9?new ce(e+1,0):new ce(e,r));return new xn(i,U.empty(),t)}function uE(n){return new xn(n.readTime,n.key,-1)}class xn{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new xn(Y.min(),U.empty(),-1)}static max(){return new xn(Y.max(),U.empty(),-1)}}function cE(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=U.comparator(n.documentKey,t.documentKey),e!==0?e:lt(n.largestBatchId,t.largestBatchId))}/**
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
 */const hE="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class dE{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Nu(n){if(n.code!==w.FAILED_PRECONDITION||n.message!==hE)throw n;S("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class _{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&X(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new _((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(e,s).next(r,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof _?e:_.resolve(e)}catch(e){return _.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):_.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):_.reject(e)}static resolve(t){return new _((e,r)=>{e(t)})}static reject(t){return new _((e,r)=>{r(t)})}static waitFor(t){return new _((e,r)=>{let i=0,s=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&e()},l=>r(l))}),o=!0,s===i&&e()})}static or(t){let e=_.resolve(!1);for(const r of t)e=e.next(i=>i?_.resolve(i):r());return e}static forEach(t,e){const r=[];return t.forEach((i,s)=>{r.push(e.call(this,i,s))}),this.waitFor(r)}static mapArray(t,e){return new _((r,i)=>{const s=t.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;e(t[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(t,e){return new _((r,i)=>{const s=()=>{t()===!0?e().next(()=>{s()},i):r()};s()})}}/**
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
 */class Ou{constructor(t,e){this.action=t,this.transaction=e,this.aborted=!1,this.V=new Mn,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{e.error?this.V.reject(new Ci(t,e.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=Vu(r.target.error);this.V.reject(new Ci(t,i))}}static open(t,e,r,i){try{return new Ou(e,t.transaction(i,r))}catch(s){throw new Ci(e,s)}}get m(){return this.V.promise}abort(t){t&&this.V.reject(t),this.aborted||(S("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const t=this.transaction;this.aborted||typeof t.commit!="function"||t.commit()}store(t){const e=this.transaction.objectStore(t);return new pE(e)}}class hr{constructor(t,e,r){this.name=t,this.version=e,this.p=r,hr.S(Pt())===12.2&&qe("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(t){return S("SimpleDb","Removing database:",t),lr(window.indexedDB.deleteDatabase(t)).toPromise()}static D(){if(!yd())return!1;if(hr.C())return!0;const t=Pt(),e=hr.S(t),r=0<e&&e<10,i=hr.v(t),s=0<i&&i<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||r||s)}static C(){var t;return typeof process<"u"&&((t=process.__PRIVATE_env)===null||t===void 0?void 0:t.F)==="YES"}static M(t,e){return t.store(e)}static S(t){const e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=e?e[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(t){const e=t.match(/Android ([\d.]+)/i),r=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(t){return this.db||(S("SimpleDb","Opening database:",this.name),this.db=await new Promise((e,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;e(o)},i.onblocked=()=>{r(new Ci(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new V(w.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new V(w.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Ci(t,o))},i.onupgradeneeded=s=>{S("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.N(o,i.transaction,s.oldVersion,this.version).next(()=>{S("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=e=>this.B(e)),this.db}L(t){this.B=t,this.db&&(this.db.onversionchange=e=>t(e))}async runTransaction(t,e,r,i){const s=e==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(t);const a=Ou.open(this.db,t,s?"readonly":"readwrite",r),l=i(a).next(u=>(a.g(),u)).catch(u=>(a.abort(u),_.reject(u))).toPromise();return l.catch(()=>{}),await a.m,l}catch(a){const l=a,u=l.name!=="FirebaseError"&&o<3;if(S("SimpleDb","Transaction failed with error:",l.message,"Retrying:",u),this.close(),!u)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}class fE{constructor(t){this.k=t,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(t){this.k=t}done(){this.q=!0}U(t){this.K=t}delete(){return lr(this.k.delete())}}class Ci extends V{constructor(t,e){super(w.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${e}`),this.name="IndexedDbTransactionError"}}function os(n){return n.name==="IndexedDbTransactionError"}class pE{constructor(t){this.store=t}put(t,e){let r;return e!==void 0?(S("SimpleDb","PUT",this.store.name,t,e),r=this.store.put(e,t)):(S("SimpleDb","PUT",this.store.name,"<auto-key>",t),r=this.store.put(t)),lr(r)}add(t){return S("SimpleDb","ADD",this.store.name,t,t),lr(this.store.add(t))}get(t){return lr(this.store.get(t)).next(e=>(e===void 0&&(e=null),S("SimpleDb","GET",this.store.name,t,e),e))}delete(t){return S("SimpleDb","DELETE",this.store.name,t),lr(this.store.delete(t))}count(){return S("SimpleDb","COUNT",this.store.name),lr(this.store.count())}W(t,e){const r=this.options(t,e),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new _((o,a)=>{s.onerror=l=>{a(l.target.error)},s.onsuccess=l=>{o(l.target.result)}})}{const s=this.cursor(r),o=[];return this.G(s,(a,l)=>{o.push(l)}).next(()=>o)}}j(t,e){const r=this.store.getAll(t,e===null?void 0:e);return new _((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}H(t,e){S("SimpleDb","DELETE ALL",this.store.name);const r=this.options(t,e);r.J=!1;const i=this.cursor(r);return this.G(i,(s,o,a)=>a.delete())}Y(t,e){let r;e?r=t:(r={},e=t);const i=this.cursor(r);return this.G(i,e)}Z(t){const e=this.cursor({});return new _((r,i)=>{e.onerror=s=>{const o=Vu(s.target.error);i(o)},e.onsuccess=s=>{const o=s.target.result;o?t(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(t,e){const r=[];return new _((i,s)=>{t.onerror=o=>{s(o.target.error)},t.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const l=new fE(a),u=e(a.primaryKey,a.value,l);if(u instanceof _){const c=u.catch(f=>(l.done(),_.reject(f)));r.push(c)}l.isDone?i():l.$===null?a.continue():a.continue(l.$)}}).next(()=>_.waitFor(r))}options(t,e){let r;return t!==void 0&&(typeof t=="string"?r=t:e=t),{index:r,range:e}}cursor(t){let e="next";if(t.reverse&&(e="prev"),t.index){const r=this.store.index(t.index);return t.J?r.openKeyCursor(t.range,e):r.openCursor(t.range,e)}return this.store.openCursor(t.range,e)}}function lr(n){return new _((t,e)=>{n.onsuccess=r=>{const i=r.target.result;t(i)},n.onerror=r=>{const i=Vu(r.target.error);e(i)}})}let Eh=!1;function Vu(n){const t=hr.S(Pt());if(t>=12.2&&t<13){const e="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(e)>=0){const r=new V("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Eh||(Eh=!0,setTimeout(()=>{throw r},0)),r}}return n}/**
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
 */class Lu{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.se(r),this.oe=r=>e.writeSequenceNumber(r))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}Lu._e=-1;function Eo(n){return n==null}function Vl(n){return n===0&&1/n==-1/0}/**
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
 */function Th(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function To(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function mE(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class It{constructor(t,e){this.comparator=t,this.root=e||Bt.EMPTY}insert(t,e){return new It(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Bt.BLACK,null,null))}remove(t){return new It(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Bt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ws(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ws(this.root,t,this.comparator,!1)}getReverseIterator(){return new ws(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ws(this.root,t,this.comparator,!0)}}class ws{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?r(t.key,e):1,e&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Bt{constructor(t,e,r,i,s){this.key=t,this.value=e,this.color=r??Bt.RED,this.left=i??Bt.EMPTY,this.right=s??Bt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,s){return new Bt(t??this.key,e??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,e,r),null):s===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Bt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return Bt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Bt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Bt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw X();const t=this.left.check();if(t!==this.right.check())throw X();return t+(this.isRed()?0:1)}}Bt.EMPTY=null,Bt.RED=!0,Bt.BLACK=!1;Bt.EMPTY=new class{constructor(){this.size=0}get key(){throw X()}get value(){throw X()}get color(){throw X()}get left(){throw X()}get right(){throw X()}copy(t,e,r,i,s){return this}insert(t,e,r){return new Bt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ht{constructor(t){this.comparator=t,this.data=new It(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ih(this.data.getIterator())}getIteratorFrom(t){return new Ih(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof Ht)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Ht(this.comparator);return e.data=t,e}}class Ih{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Dn{constructor(t){this.fields=t,t.sort(se.comparator)}static empty(){return new Dn([])}unionWith(t){let e=new Ht(se.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Dn(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Jr(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
 */class ap extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ee{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new ap("Invalid base64 string: "+s):s}}(t);return new ee(e)}static fromUint8Array(t){const e=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(t);return new ee(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return lt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ee.EMPTY_BYTE_STRING=new ee("");const gE=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Fn(n){if(bt(!!n),typeof n=="string"){let t=0;const e=gE.exec(n);if(bt(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:St(n.seconds),nanos:St(n.nanos)}}function St(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Er(n){return typeof n=="string"?ee.fromBase64String(n):ee.fromUint8Array(n)}/**
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
 */function Mu(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function xu(n){const t=n.mapValue.fields.__previous_value__;return Mu(t)?xu(t):t}function Hi(n){const t=Fn(n.mapValue.fields.__local_write_time__.timestampValue);return new ce(t.seconds,t.nanos)}/**
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
 */class _E{constructor(t,e,r,i,s,o,a,l,u){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class zi{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new zi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof zi&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const As={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Tr(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Mu(n)?4:yE(n)?9007199254740991:10:X()}function He(n,t){if(n===t)return!0;const e=Tr(n);if(e!==Tr(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Hi(n).isEqual(Hi(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Fn(i.timestampValue),a=Fn(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,s){return Er(i.bytesValue).isEqual(Er(s.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,s){return St(i.geoPointValue.latitude)===St(s.geoPointValue.latitude)&&St(i.geoPointValue.longitude)===St(s.geoPointValue.longitude)}(n,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return St(i.integerValue)===St(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=St(i.doubleValue),a=St(s.doubleValue);return o===a?Vl(o)===Vl(a):isNaN(o)&&isNaN(a)}return!1}(n,t);case 9:return Jr(n.arrayValue.values||[],t.arrayValue.values||[],He);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Th(o)!==Th(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!He(o[l],a[l])))return!1;return!0}(n,t);default:return X()}}function Ki(n,t){return(n.values||[]).find(e=>He(e,t))!==void 0}function $r(n,t){if(n===t)return 0;const e=Tr(n),r=Tr(t);if(e!==r)return lt(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return lt(n.booleanValue,t.booleanValue);case 2:return function(s,o){const a=St(s.integerValue||s.doubleValue),l=St(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(n,t);case 3:return wh(n.timestampValue,t.timestampValue);case 4:return wh(Hi(n),Hi(t));case 5:return lt(n.stringValue,t.stringValue);case 6:return function(s,o){const a=Er(s),l=Er(o);return a.compareTo(l)}(n.bytesValue,t.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=lt(a[u],l[u]);if(c!==0)return c}return lt(a.length,l.length)}(n.referenceValue,t.referenceValue);case 8:return function(s,o){const a=lt(St(s.latitude),St(o.latitude));return a!==0?a:lt(St(s.longitude),St(o.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=$r(a[u],l[u]);if(c)return c}return lt(a.length,l.length)}(n.arrayValue,t.arrayValue);case 10:return function(s,o){if(s===As.mapValue&&o===As.mapValue)return 0;if(s===As.mapValue)return 1;if(o===As.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let f=0;f<l.length&&f<c.length;++f){const d=lt(l[f],c[f]);if(d!==0)return d;const g=$r(a[l[f]],u[c[f]]);if(g!==0)return g}return lt(l.length,c.length)}(n.mapValue,t.mapValue);default:throw X()}}function wh(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return lt(n,t);const e=Fn(n),r=Fn(t),i=lt(e.seconds,r.seconds);return i!==0?i:lt(e.nanos,r.nanos)}function Xr(n){return Ll(n)}function Ll(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=Fn(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return Er(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return U.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",i=!0;for(const s of e.values||[])i?i=!1:r+=",",r+=Ll(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Ll(e.fields[o])}`;return i+"}"}(n.mapValue):X()}function Ml(n){return!!n&&"integerValue"in n}function Fu(n){return!!n&&"arrayValue"in n}function Ah(n){return!!n&&"nullValue"in n}function Ch(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function cl(n){return!!n&&"mapValue"in n}function Ri(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return To(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=Ri(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Ri(n.arrayValue.values[e]);return t}return Object.assign({},n)}function yE(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Me{constructor(t){this.value=t}static empty(){return new Me({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!cl(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ri(e)}setAll(t){let e=se.emptyPath(),r={},i=[];t.forEach((o,a)=>{if(!e.isImmediateParentOf(a)){const l=this.getFieldsMap(e);this.applyChanges(l,r,i),r={},i=[],e=a.popLast()}o?r[a.lastSegment()]=Ri(o):i.push(a.lastSegment())});const s=this.getFieldsMap(e);this.applyChanges(s,r,i)}delete(t){const e=this.field(t.popLast());cl(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return He(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];cl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){To(e,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new Me(Ri(this.value))}}/**
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
 */class Xt{constructor(t,e,r,i,s,o,a){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new Xt(t,0,Y.min(),Y.min(),Y.min(),Me.empty(),0)}static newFoundDocument(t,e,r,i){return new Xt(t,1,e,Y.min(),r,i,0)}static newNoDocument(t,e){return new Xt(t,2,e,Y.min(),Y.min(),Me.empty(),0)}static newUnknownDocument(t,e){return new Xt(t,3,e,Y.min(),Y.min(),Me.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Me.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Me.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Xt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Xt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ws{constructor(t,e){this.position=t,this.inclusive=e}}function Rh(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const s=t[i],o=n.position[i];if(s.field.isKeyField()?r=U.comparator(U.fromName(o.referenceValue),e.key):r=$r(o,e.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Sh(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!He(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class Qs{constructor(t,e="asc"){this.field=t,this.dir=e}}function vE(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class lp{}class kt extends lp{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new TE(t,e,r):e==="array-contains"?new AE(t,r):e==="in"?new CE(t,r):e==="not-in"?new RE(t,r):e==="array-contains-any"?new SE(t,r):new kt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new IE(t,r):new wE(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison($r(e,this.value)):e!==null&&Tr(this.value)===Tr(e)&&this.matchesComparison($r(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return X()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ze extends lp{constructor(t,e){super(),this.filters=t,this.op=e,this.ue=null}static create(t,e){return new ze(t,e)}matches(t){return up(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function up(n){return n.op==="and"}function cp(n){return EE(n)&&up(n)}function EE(n){for(const t of n.filters)if(t instanceof ze)return!1;return!0}function xl(n){if(n instanceof kt)return n.field.canonicalString()+n.op.toString()+Xr(n.value);if(cp(n))return n.filters.map(t=>xl(t)).join(",");{const t=n.filters.map(e=>xl(e)).join(",");return`${n.op}(${t})`}}function hp(n,t){return n instanceof kt?function(r,i){return i instanceof kt&&r.op===i.op&&r.field.isEqual(i.field)&&He(r.value,i.value)}(n,t):n instanceof ze?function(r,i){return i instanceof ze&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&hp(o,i.filters[a]),!0):!1}(n,t):void X()}function dp(n){return n instanceof kt?function(e){return`${e.field.canonicalString()} ${e.op} ${Xr(e.value)}`}(n):n instanceof ze?function(e){return e.op.toString()+" {"+e.getFilters().map(dp).join(" ,")+"}"}(n):"Filter"}class TE extends kt{constructor(t,e,r){super(t,e,r),this.key=U.fromName(r.referenceValue)}matches(t){const e=U.comparator(t.key,this.key);return this.matchesComparison(e)}}class IE extends kt{constructor(t,e){super(t,"in",e),this.keys=fp("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class wE extends kt{constructor(t,e){super(t,"not-in",e),this.keys=fp("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function fp(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>U.fromName(r.referenceValue))}class AE extends kt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Fu(e)&&Ki(e.arrayValue,this.value)}}class CE extends kt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Ki(this.value.arrayValue,e)}}class RE extends kt{constructor(t,e){super(t,"not-in",e)}matches(t){if(Ki(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Ki(this.value.arrayValue,e)}}class SE extends kt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Fu(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>Ki(this.value.arrayValue,r))}}/**
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
 */class bE{constructor(t,e=null,r=[],i=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function bh(n,t=null,e=[],r=[],i=null,s=null,o=null){return new bE(n,t,e,r,i,s,o)}function Uu(n){const t=ot(n);if(t.ce===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>xl(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Eo(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Xr(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Xr(r)).join(",")),t.ce=e}return t.ce}function Bu(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!vE(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!hp(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Sh(n.startAt,t.startAt)&&Sh(n.endAt,t.endAt)}function Fl(n){return U.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Io{constructor(t,e=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function PE(n,t,e,r,i,s,o,a){return new Io(n,t,e,r,i,s,o,a)}function ju(n){return new Io(n)}function Ph(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function kE(n){return n.collectionGroup!==null}function Si(n){const t=ot(n);if(t.le===null){t.le=[];const e=new Set;for(const s of t.explicitOrderBy)t.le.push(s),e.add(s.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Ht(se.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(t).forEach(s=>{e.has(s.canonicalString())||s.isKeyField()||t.le.push(new Qs(s,r))}),e.has(se.keyField().canonicalString())||t.le.push(new Qs(se.keyField(),r))}return t.le}function je(n){const t=ot(n);return t.he||(t.he=DE(t,Si(n))),t.he}function DE(n,t){if(n.limitType==="F")return bh(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Qs(i.field,s)});const e=n.endAt?new Ws(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Ws(n.startAt.position,n.startAt.inclusive):null;return bh(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Ul(n,t,e){return new Io(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function wo(n,t){return Bu(je(n),je(t))&&n.limitType===t.limitType}function pp(n){return`${Uu(je(n))}|lt:${n.limitType}`}function Lr(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(i=>dp(i)).join(", ")}]`),Eo(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(i=>Xr(i)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(i=>Xr(i)).join(",")),`Target(${r})`}(je(n))}; limitType=${n.limitType})`}function Ao(n,t){return t.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):U.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,t)&&function(r,i){for(const s of Si(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,t)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,t)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=Rh(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,Si(r),i)||r.endAt&&!function(o,a,l){const u=Rh(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,Si(r),i))}(n,t)}function NE(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function mp(n){return(t,e)=>{let r=!1;for(const i of Si(n)){const s=OE(i,t,e);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function OE(n,t,e){const r=n.field.isKeyField()?U.comparator(t.key,e.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?$r(l,u):X()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return X()}}/**
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
 */class ai{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){To(this.inner,(e,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return mE(this.inner)}size(){return this.innerSize}}/**
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
 */const VE=new It(U.comparator);function Un(){return VE}const gp=new It(U.comparator);function Ti(...n){let t=gp;for(const e of n)t=t.insert(e.key,e);return t}function LE(n){let t=gp;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function dr(){return bi()}function _p(){return bi()}function bi(){return new ai(n=>n.toString(),(n,t)=>n.isEqual(t))}const ME=new Ht(U.comparator);function st(...n){let t=ME;for(const e of n)t=t.add(e);return t}const xE=new Ht(lt);function FE(){return xE}/**
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
 */function UE(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Vl(t)?"-0":t}}function BE(n){return{integerValue:""+n}}/**
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
 */class Co{constructor(){this._=void 0}}function jE(n,t,e){return n instanceof Bl?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Mu(s)&&(s=xu(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(e,t):n instanceof Ys?yp(n,t):n instanceof Js?vp(n,t):function(i,s){const o=HE(i,s),a=kh(o)+kh(i.Ie);return Ml(o)&&Ml(i.Ie)?BE(a):UE(i.serializer,a)}(n,t)}function qE(n,t,e){return n instanceof Ys?yp(n,t):n instanceof Js?vp(n,t):e}function HE(n,t){return n instanceof jl?function(r){return Ml(r)||function(s){return!!s&&"doubleValue"in s}(r)}(t)?t:{integerValue:0}:null}class Bl extends Co{}class Ys extends Co{constructor(t){super(),this.elements=t}}function yp(n,t){const e=Ep(t);for(const r of n.elements)e.some(i=>He(i,r))||e.push(r);return{arrayValue:{values:e}}}class Js extends Co{constructor(t){super(),this.elements=t}}function vp(n,t){let e=Ep(t);for(const r of n.elements)e=e.filter(i=>!He(i,r));return{arrayValue:{values:e}}}class jl extends Co{constructor(t,e){super(),this.serializer=t,this.Ie=e}}function kh(n){return St(n.integerValue||n.doubleValue)}function Ep(n){return Fu(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function zE(n,t){return n.field.isEqual(t.field)&&function(r,i){return r instanceof Ys&&i instanceof Ys||r instanceof Js&&i instanceof Js?Jr(r.elements,i.elements,He):r instanceof jl&&i instanceof jl?He(r.Ie,i.Ie):r instanceof Bl&&i instanceof Bl}(n.transform,t.transform)}class mr{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new mr}static exists(t){return new mr(void 0,t)}static updateTime(t){return new mr(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ks(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class qu{}function Tp(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new GE(n.key,mr.none()):new Hu(n.key,n.data,mr.none());{const e=n.data,r=Me.empty();let i=new Ht(se.comparator);for(let s of t.fields)if(!i.has(s)){let o=e.field(s);o===null&&s.length>1&&(s=s.popLast(),o=e.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ro(n.key,r,new Dn(i.toArray()),mr.none())}}function KE(n,t,e){n instanceof Hu?function(i,s,o){const a=i.value.clone(),l=Nh(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,t,e):n instanceof Ro?function(i,s,o){if(!ks(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Nh(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(Ip(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,t,e):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,e)}function Pi(n,t,e,r){return n instanceof Hu?function(s,o,a,l){if(!ks(s.precondition,o))return a;const u=s.value.clone(),c=Oh(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(n,t,e,r):n instanceof Ro?function(s,o,a,l){if(!ks(s.precondition,o))return a;const u=Oh(s.fieldTransforms,l,o),c=o.data;return c.setAll(Ip(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(n,t,e,r):function(s,o,a){return ks(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,t,e)}function Dh(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Jr(r,i,(s,o)=>zE(s,o))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Hu extends qu{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ro extends qu{constructor(t,e,r,i,s=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Ip(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function Nh(n,t,e){const r=new Map;bt(n.length===e.length);for(let i=0;i<e.length;i++){const s=n[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,qE(o,a,e[i]))}return r}function Oh(n,t,e){const r=new Map;for(const i of n){const s=i.transform,o=e.data.field(i.field);r.set(i.field,jE(s,o,t))}return r}class GE extends qu{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class WE{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&KE(s,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=Pi(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=Pi(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=_p();return this.mutations.forEach(i=>{const s=t.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=e.has(i.key)?null:a;const l=Tp(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),st())}isEqual(t){return this.batchId===t.batchId&&Jr(this.mutations,t.mutations,(e,r)=>Dh(e,r))&&Jr(this.baseMutations,t.baseMutations,(e,r)=>Dh(e,r))}}/**
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
 */class QE{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class YE{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var Rt,rt;function wp(n){if(n===void 0)return qe("GRPC error has no .code"),w.UNKNOWN;switch(n){case Rt.OK:return w.OK;case Rt.CANCELLED:return w.CANCELLED;case Rt.UNKNOWN:return w.UNKNOWN;case Rt.DEADLINE_EXCEEDED:return w.DEADLINE_EXCEEDED;case Rt.RESOURCE_EXHAUSTED:return w.RESOURCE_EXHAUSTED;case Rt.INTERNAL:return w.INTERNAL;case Rt.UNAVAILABLE:return w.UNAVAILABLE;case Rt.UNAUTHENTICATED:return w.UNAUTHENTICATED;case Rt.INVALID_ARGUMENT:return w.INVALID_ARGUMENT;case Rt.NOT_FOUND:return w.NOT_FOUND;case Rt.ALREADY_EXISTS:return w.ALREADY_EXISTS;case Rt.PERMISSION_DENIED:return w.PERMISSION_DENIED;case Rt.FAILED_PRECONDITION:return w.FAILED_PRECONDITION;case Rt.ABORTED:return w.ABORTED;case Rt.OUT_OF_RANGE:return w.OUT_OF_RANGE;case Rt.UNIMPLEMENTED:return w.UNIMPLEMENTED;case Rt.DATA_LOSS:return w.DATA_LOSS;default:return X()}}(rt=Rt||(Rt={}))[rt.OK=0]="OK",rt[rt.CANCELLED=1]="CANCELLED",rt[rt.UNKNOWN=2]="UNKNOWN",rt[rt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",rt[rt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",rt[rt.NOT_FOUND=5]="NOT_FOUND",rt[rt.ALREADY_EXISTS=6]="ALREADY_EXISTS",rt[rt.PERMISSION_DENIED=7]="PERMISSION_DENIED",rt[rt.UNAUTHENTICATED=16]="UNAUTHENTICATED",rt[rt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",rt[rt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",rt[rt.ABORTED=10]="ABORTED",rt[rt.OUT_OF_RANGE=11]="OUT_OF_RANGE",rt[rt.UNIMPLEMENTED=12]="UNIMPLEMENTED",rt[rt.INTERNAL=13]="INTERNAL",rt[rt.UNAVAILABLE=14]="UNAVAILABLE",rt[rt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function JE(){return new TextEncoder}/**
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
 */const $E=new Hr([4294967295,4294967295],0);function Vh(n){const t=JE().encode(n),e=new Xv;return e.update(t),new Uint8Array(e.digest())}function Lh(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new Hr([e,r],0),new Hr([i,s],0)]}class zu{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new Ii(`Invalid padding: ${e}`);if(r<0)throw new Ii(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Ii(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new Ii(`Invalid padding when bitmap length is 0: ${e}`);this.Te=8*t.length-e,this.Ee=Hr.fromNumber(this.Te)}de(t,e,r){let i=t.add(e.multiply(Hr.fromNumber(r)));return i.compare($E)===1&&(i=new Hr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const e=Vh(t),[r,i]=Lh(e);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(t,e,r){const i=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),o=new zu(s,i,e);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.Te===0)return;const e=Vh(t),[r,i]=Lh(e);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class Ii extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class So{constructor(t,e,r,i,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const i=new Map;return i.set(t,as.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new So(Y.min(),i,new It(lt),Un(),st())}}class as{constructor(t,e,r,i,s){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new as(r,e,st(),st(),st())}}/**
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
 */class Ds{constructor(t,e,r,i){this.Ve=t,this.removedTargetIds=e,this.key=r,this.me=i}}class Ap{constructor(t,e){this.targetId=t,this.fe=e}}class Cp{constructor(t,e,r=ee.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=i}}class Mh{constructor(){this.ge=0,this.pe=Fh(),this.ye=ee.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.ye=t)}ve(){let t=st(),e=st(),r=st();return this.pe.forEach((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:r=r.add(i);break;default:X()}}),new as(this.ye,this.we,t,e,r)}Fe(){this.Se=!1,this.pe=Fh()}Me(t,e){this.Se=!0,this.pe=this.pe.insert(t,e)}xe(t){this.Se=!0,this.pe=this.pe.remove(t)}Oe(){this.ge+=1}Ne(){this.ge-=1,bt(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class XE{constructor(t){this.Le=t,this.ke=new Map,this.qe=Un(),this.Qe=xh(),this.Ke=new It(lt)}$e(t){for(const e of t.Ve)t.me&&t.me.isFoundDocument()?this.Ue(e,t.me):this.We(e,t.key,t.me);for(const e of t.removedTargetIds)this.We(e,t.key,t.me)}Ge(t){this.forEachTarget(t,e=>{const r=this.ze(e);switch(t.state){case 0:this.je(e)&&r.Ce(t.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(t.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(e);break;case 3:this.je(e)&&(r.Be(),r.Ce(t.resumeToken));break;case 4:this.je(e)&&(this.He(e),r.Ce(t.resumeToken));break;default:X()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ke.forEach((r,i)=>{this.je(i)&&e(i)})}Je(t){const e=t.targetId,r=t.fe.count,i=this.Ye(e);if(i){const s=i.target;if(Fl(s))if(r===0){const o=new U(s.path);this.We(e,o,Xt.newNoDocument(o,Y.min()))}else bt(r===1);else{const o=this.Ze(e);if(o!==r){const a=this.Xe(t),l=a?this.et(a,t,o):1;if(l!==0){this.He(e);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(e,u)}}}}}Xe(t){const e=t.fe.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=e;let o,a;try{o=Er(r).toUint8Array()}catch(l){if(l instanceof ap)return Yr("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new zu(o,i,s)}catch(l){return Yr(l instanceof Ii?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(t,e,r){return e.fe.count===r-this.rt(t,e.targetId)?0:2}rt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;t.mightContain(a)||(this.We(e,s,null),i++)}),i}it(t){const e=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&Fl(a.target)){const l=new U(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,Xt.newNoDocument(l,t))}s.De&&(e.set(o,s.ve()),s.Fe())}});let r=st();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Ye(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(t));const i=new So(t,e,this.Ke,this.qe,r);return this.qe=Un(),this.Qe=xh(),this.Ke=new It(lt),i}Ue(t,e){if(!this.je(t))return;const r=this.st(t,e.key)?2:0;this.ze(t).Me(e.key,r),this.qe=this.qe.insert(e.key,e),this.Qe=this.Qe.insert(e.key,this.ot(e.key).add(t))}We(t,e,r){if(!this.je(t))return;const i=this.ze(t);this.st(t,e)?i.Me(e,1):i.xe(e),this.Qe=this.Qe.insert(e,this.ot(e).delete(t)),r&&(this.qe=this.qe.insert(e,r))}removeTarget(t){this.ke.delete(t)}Ze(t){const e=this.ze(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Oe(t){this.ze(t).Oe()}ze(t){let e=this.ke.get(t);return e||(e=new Mh,this.ke.set(t,e)),e}ot(t){let e=this.Qe.get(t);return e||(e=new Ht(lt),this.Qe=this.Qe.insert(t,e)),e}je(t){const e=this.Ye(t)!==null;return e||S("WatchChangeAggregator","Detected inactive target",t),e}Ye(t){const e=this.ke.get(t);return e&&e.be?null:this.Le._t(t)}He(t){this.ke.set(t,new Mh),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.We(t,e,null)})}st(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function xh(){return new It(U.comparator)}function Fh(){return new It(U.comparator)}const ZE={asc:"ASCENDING",desc:"DESCENDING"},t0={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},e0={and:"AND",or:"OR"};class n0{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function ql(n,t){return n.useProto3Json||Eo(t)?t:{value:t}}function r0(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function i0(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function zr(n){return bt(!!n),Y.fromTimestamp(function(e){const r=Fn(e);return new ce(r.seconds,r.nanos)}(n))}function s0(n,t){return Hl(n,t).canonicalString()}function Hl(n,t){const e=function(i){return new Et(["projects",i.projectId,"databases",i.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Rp(n){const t=Et.fromString(n);return bt(Dp(t)),t}function hl(n,t){const e=Rp(t);if(e.get(1)!==n.databaseId.projectId)throw new V(w.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new V(w.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new U(bp(e))}function Sp(n,t){return s0(n.databaseId,t)}function o0(n){const t=Rp(n);return t.length===4?Et.emptyPath():bp(t)}function Uh(n){return new Et(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function bp(n){return bt(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function a0(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:X()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(bt(c===void 0||typeof c=="string"),ee.fromBase64String(c||"")):(bt(c===void 0||c instanceof Uint8Array),ee.fromUint8Array(c||new Uint8Array))}(n,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(u){const c=u.code===void 0?w.UNKNOWN:wp(u.code);return new V(c,u.message||"")}(o);e=new Cp(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=hl(n,r.document.name),s=zr(r.document.updateTime),o=r.document.createTime?zr(r.document.createTime):Y.min(),a=new Me({mapValue:{fields:r.document.fields}}),l=Xt.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];e=new Ds(u,c,l.key,l)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=hl(n,r.document),s=r.readTime?zr(r.readTime):Y.min(),o=Xt.newNoDocument(i,s),a=r.removedTargetIds||[];e=new Ds([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=hl(n,r.document),s=r.removedTargetIds||[];e=new Ds([],s,i,null)}else{if(!("filter"in t))return X();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new YE(i,s),a=r.targetId;e=new Ap(a,o)}}return e}function l0(n,t){return{documents:[Sp(n,t.path)]}}function u0(n,t){const e={structuredQuery:{}},r=t.path;let i;t.collectionGroup!==null?(i=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Sp(n,i);const s=function(u){if(u.length!==0)return kp(ze.create(u,"and"))}(t.filters);s&&(e.structuredQuery.where=s);const o=function(u){if(u.length!==0)return u.map(c=>function(d){return{field:Mr(d.field),direction:d0(d.dir)}}(c))}(t.orderBy);o&&(e.structuredQuery.orderBy=o);const a=ql(n,t.limit);return a!==null&&(e.structuredQuery.limit=a),t.startAt&&(e.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(t.endAt)),{ut:e,parent:i}}function c0(n){let t=o0(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){bt(r===1);const c=e.from[0];c.allDescendants?i=c.collectionId:t=t.child(c.collectionId)}let s=[];e.where&&(s=function(f){const d=Pp(f);return d instanceof ze&&cp(d)?d.getFilters():[d]}(e.where));let o=[];e.orderBy&&(o=function(f){return f.map(d=>function(b){return new Qs(xr(b.field),function(E){switch(E){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(b.direction))}(d))}(e.orderBy));let a=null;e.limit&&(a=function(f){let d;return d=typeof f=="object"?f.value:f,Eo(d)?null:d}(e.limit));let l=null;e.startAt&&(l=function(f){const d=!!f.before,g=f.values||[];return new Ws(g,d)}(e.startAt));let u=null;return e.endAt&&(u=function(f){const d=!f.before,g=f.values||[];return new Ws(g,d)}(e.endAt)),PE(t,i,o,s,a,"F",l,u)}function h0(n,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return X()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Pp(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=xr(e.unaryFilter.field);return kt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=xr(e.unaryFilter.field);return kt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=xr(e.unaryFilter.field);return kt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=xr(e.unaryFilter.field);return kt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return X()}}(n):n.fieldFilter!==void 0?function(e){return kt.create(xr(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return X()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return ze.create(e.compositeFilter.filters.map(r=>Pp(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return X()}}(e.compositeFilter.op))}(n):X()}function d0(n){return ZE[n]}function f0(n){return t0[n]}function p0(n){return e0[n]}function Mr(n){return{fieldPath:n.canonicalString()}}function xr(n){return se.fromServerFormat(n.fieldPath)}function kp(n){return n instanceof kt?function(e){if(e.op==="=="){if(Ch(e.value))return{unaryFilter:{field:Mr(e.field),op:"IS_NAN"}};if(Ah(e.value))return{unaryFilter:{field:Mr(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Ch(e.value))return{unaryFilter:{field:Mr(e.field),op:"IS_NOT_NAN"}};if(Ah(e.value))return{unaryFilter:{field:Mr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Mr(e.field),op:f0(e.op),value:e.value}}}(n):n instanceof ze?function(e){const r=e.getFilters().map(i=>kp(i));return r.length===1?r[0]:{compositeFilter:{op:p0(e.op),filters:r}}}(n):X()}function Dp(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Nn{constructor(t,e,r,i,s=Y.min(),o=Y.min(),a=ee.EMPTY_BYTE_STRING,l=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(t){return new Nn(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Nn(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Nn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Nn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class m0{constructor(t){this.ct=t}}function g0(n){const t=c0({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ul(t,t.limit,"L"):t}/**
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
 */class _0{constructor(){this._n=new y0}addToCollectionParentIndex(t,e){return this._n.add(e),_.resolve()}getCollectionParents(t,e){return _.resolve(this._n.getEntries(e))}addFieldIndex(t,e){return _.resolve()}deleteFieldIndex(t,e){return _.resolve()}deleteAllFieldIndexes(t){return _.resolve()}createTargetIndexes(t,e){return _.resolve()}getDocumentsMatchingTarget(t,e){return _.resolve(null)}getIndexType(t,e){return _.resolve(0)}getFieldIndexes(t,e){return _.resolve([])}getNextCollectionGroupToUpdate(t){return _.resolve(null)}getMinOffset(t,e){return _.resolve(xn.min())}getMinOffsetFromCollectionGroup(t,e){return _.resolve(xn.min())}updateCollectionGroup(t,e,r){return _.resolve()}updateIndexEntries(t,e){return _.resolve()}}class y0{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new Ht(Et.comparator),s=!i.has(r);return this.index[e]=i.add(r),s}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new Ht(Et.comparator)).toArray()}}/**
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
 */class Zr{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new Zr(0)}static Bn(){return new Zr(-1)}}/**
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
 */class v0{constructor(){this.changes=new ai(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Xt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?_.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class E0{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class T0{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(r!==null&&Pi(r.mutation,i,Dn.empty(),ce.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,st()).next(()=>r))}getLocalViewOfDocuments(t,e,r=st()){const i=dr();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,r).next(s=>{let o=Ti();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(t,e){const r=dr();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,st()))}populateOverlays(t,e,r){const i=[];return r.forEach(s=>{e.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((o,a)=>{e.set(o,a)})})}computeViews(t,e,r,i){let s=Un();const o=bi(),a=function(){return bi()}();return e.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Ro)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Pi(c.mutation,u,c.mutation.getFieldMask(),ce.now())):o.set(u.key,Dn.empty())}),this.recalculateAndSaveOverlays(t,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),e.forEach((u,c)=>{var f;return a.set(u,new E0(c,(f=o.get(u))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(t,e){const r=bi();let i=new It((o,a)=>o-a),s=st();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=e.get(l);if(u===null)return;let c=r.get(l)||Dn.empty();c=a.applyToLocalView(u,c),r.set(l,c);const f=(i.get(a.batchId)||st()).add(l);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,f=_p();c.forEach(d=>{if(!s.has(d)){const g=Tp(e.get(d),r.get(d));g!==null&&f.set(d,g),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,f))}return _.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,i){return function(o){return U.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):kE(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-s.size):_.resolve(dr());let a=-1,l=s;return o.next(u=>_.forEach(u,(c,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(c)?_.resolve():this.remoteDocumentCache.getEntry(t,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(t,u,s)).next(()=>this.computeViews(t,l,u,st())).next(c=>({batchId:a,changes:LE(c)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new U(e)).next(r=>{let i=Ti();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const s=e.collectionGroup;let o=Ti();return this.indexManager.getCollectionParents(t,s).next(a=>_.forEach(a,l=>{const u=function(f,d){return new Io(d,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(e,l.child(s));return this.getDocumentsMatchingCollectionQuery(t,u,r,i).next(c=>{c.forEach((f,d)=>{o=o.insert(f,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,e,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,s,i))).next(o=>{s.forEach((l,u)=>{const c=u.getKey();o.get(c)===null&&(o=o.insert(c,Xt.newInvalidDocument(c)))});let a=Ti();return o.forEach((l,u)=>{const c=s.get(l);c!==void 0&&Pi(c.mutation,u,Dn.empty(),ce.now()),Ao(e,u)&&(a=a.insert(l,u))}),a})}}/**
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
 */class I0{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,e){return _.resolve(this.cr.get(e))}saveBundleMetadata(t,e){return this.cr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:zr(i.createTime)}}(e)),_.resolve()}getNamedQuery(t,e){return _.resolve(this.lr.get(e))}saveNamedQuery(t,e){return this.lr.set(e.name,function(i){return{name:i.name,query:g0(i.bundledQuery),readTime:zr(i.readTime)}}(e)),_.resolve()}}/**
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
 */class w0{constructor(){this.overlays=new It(U.comparator),this.hr=new Map}getOverlay(t,e){return _.resolve(this.overlays.get(e))}getOverlays(t,e){const r=dr();return _.forEach(e,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((i,s)=>{this.ht(t,e,s)}),_.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),_.resolve()}getOverlaysForCollection(t,e,r){const i=dr(),s=e.length+1,o=new U(e.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!e.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return _.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let s=new It((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===e&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=dr(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=dr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return _.resolve(a)}ht(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new QE(e,r));let s=this.hr.get(e);s===void 0&&(s=st(),this.hr.set(e,s)),this.hr.set(e,s.add(r.key))}}/**
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
 */class Ku{constructor(){this.Pr=new Ht(Ot.Ir),this.Tr=new Ht(Ot.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,e){const r=new Ot(t,e);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Ar(new Ot(t,e))}Rr(t,e){t.forEach(r=>this.removeReference(r,e))}Vr(t){const e=new U(new Et([])),r=new Ot(e,t),i=new Ot(e,t+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const e=new U(new Et([])),r=new Ot(e,t),i=new Ot(e,t+1);let s=st();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(t){const e=new Ot(t,0),r=this.Pr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class Ot{constructor(t,e){this.key=t,this.pr=e}static Ir(t,e){return U.comparator(t.key,e.key)||lt(t.pr,e.pr)}static Er(t,e){return lt(t.pr,e.pr)||U.comparator(t.key,e.key)}}/**
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
 */class A0{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.yr=1,this.wr=new Ht(Ot.Ir)}checkEmpty(t){return _.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new WE(s,e,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new Ot(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return _.resolve(o)}lookupMutationBatch(t,e){return _.resolve(this.Sr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.br(r),s=i<0?0:i;return _.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return _.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return _.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new Ot(e,0),i=new Ot(e,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),_.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new Ht(lt);return e.forEach(i=>{const s=new Ot(i,0),o=new Ot(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),_.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let s=r;U.isDocumentKey(s)||(s=s.child(""));const o=new Ot(new U(s),0);let a=new Ht(lt);return this.wr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.pr)),!0)},o),_.resolve(this.Dr(a))}Dr(t){const e=[];return t.forEach(r=>{const i=this.Sr(r);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){bt(this.Cr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return _.forEach(e.mutations,i=>{const s=new Ot(i.key,e.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.wr=r})}Mn(t){}containsKey(t,e){const r=new Ot(e,0),i=this.wr.firstAfterOrEqual(r);return _.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,_.resolve()}Cr(t,e){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const e=this.br(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class C0{constructor(t){this.vr=t,this.docs=function(){return new It(U.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return _.resolve(r?r.document.mutableCopy():Xt.newInvalidDocument(e))}getEntries(t,e){let r=Un();return e.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Xt.newInvalidDocument(i))}),_.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let s=Un();const o=e.path,a=new U(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||cE(uE(c),r)<=0||(i.has(c.key)||Ao(e,c))&&(s=s.insert(c.key,c.mutableCopy()))}return _.resolve(s)}getAllFromCollectionGroup(t,e,r,i){X()}Fr(t,e){return _.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new R0(this)}getSize(t){return _.resolve(this.size)}}class R0 extends v0{constructor(t){super(),this.ar=t}applyChanges(t){const e=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?e.push(this.ar.addEntry(t,i)):this.ar.removeEntry(r)}),_.waitFor(e)}getFromCache(t,e){return this.ar.getEntry(t,e)}getAllFromCache(t,e){return this.ar.getEntries(t,e)}}/**
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
 */class S0{constructor(t){this.persistence=t,this.Mr=new ai(e=>Uu(e),Bu),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Ku,this.targetCount=0,this.Br=Zr.Nn()}forEachTarget(t,e){return this.Mr.forEach((r,i)=>e(i)),_.resolve()}getLastRemoteSnapshotVersion(t){return _.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return _.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Br.next(),_.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Or&&(this.Or=e),_.resolve()}qn(t){this.Mr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Br=new Zr(e),this.highestTargetId=e),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,e){return this.qn(e),this.targetCount+=1,_.resolve()}updateTargetData(t,e){return this.qn(e),_.resolve()}removeTargetData(t,e){return this.Mr.delete(e.target),this.Nr.Vr(e.targetId),this.targetCount-=1,_.resolve()}removeTargets(t,e,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=e&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),_.waitFor(s).next(()=>i)}getTargetCount(t){return _.resolve(this.targetCount)}getTargetData(t,e){const r=this.Mr.get(e)||null;return _.resolve(r)}addMatchingKeys(t,e,r){return this.Nr.dr(e,r),_.resolve()}removeMatchingKeys(t,e,r){this.Nr.Rr(e,r);const i=this.persistence.referenceDelegate,s=[];return i&&e.forEach(o=>{s.push(i.markPotentiallyOrphaned(t,o))}),_.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.Nr.Vr(e),_.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Nr.gr(e);return _.resolve(r)}containsKey(t,e){return _.resolve(this.Nr.containsKey(e))}}/**
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
 */class b0{constructor(t,e){this.Lr={},this.overlays={},this.kr=new Lu(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new S0(this),this.indexManager=new _0,this.remoteDocumentCache=function(i){return new C0(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new m0(e),this.$r=new I0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new w0,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Lr[t.toKey()];return r||(r=new A0(e,this.referenceDelegate),this.Lr[t.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,e,r){S("MemoryPersistence","Starting transaction:",t);const i=new P0(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(t,e){return _.or(Object.values(this.Lr).map(r=>()=>r.containsKey(t,e)))}}class P0 extends dE{constructor(t){super(),this.currentSequenceNumber=t}}class Gu{constructor(t){this.persistence=t,this.zr=new Ku,this.jr=null}static Hr(t){return new Gu(t)}get Jr(){if(this.jr)return this.jr;throw X()}addReference(t,e,r){return this.zr.addReference(r,e),this.Jr.delete(r.toString()),_.resolve()}removeReference(t,e,r){return this.zr.removeReference(r,e),this.Jr.add(r.toString()),_.resolve()}markPotentiallyOrphaned(t,e){return this.Jr.add(e.toString()),_.resolve()}removeTarget(t,e){this.zr.Vr(e.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(t,e))}Ur(){this.jr=new Set}Wr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return _.forEach(this.Jr,r=>{const i=U.fromPath(r);return this.Yr(t,i).next(s=>{s||e.removeEntry(i,Y.min())})}).next(()=>(this.jr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Yr(t,e).next(r=>{r?this.Jr.delete(e.toString()):this.Jr.add(e.toString())})}Kr(t){return 0}Yr(t,e){return _.or([()=>_.resolve(this.zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gr(t,e)])}}/**
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
 */class Wu{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.qi=r,this.Qi=i}static Ki(t,e){let r=st(),i=st();for(const s of e.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Wu(t,e.fromCache,r,i)}}/**
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
 */class k0{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class D0{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return gm()?8:hr.v(Pt())>0?6:4}()}initialize(t,e){this.zi=t,this.indexManager=e,this.$i=!0}getDocumentsMatchingQuery(t,e,r,i){const s={result:null};return this.ji(t,e).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(t,e,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new k0;return this.Ji(t,e,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(t,e,o,a.size)})}).next(()=>s.result)}Yi(t,e,r,i){return r.documentReadCount<this.Wi?(mi()<=et.DEBUG&&S("QueryEngine","SDK will not create cache indexes for query:",Lr(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),_.resolve()):(mi()<=et.DEBUG&&S("QueryEngine","Query:",Lr(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(mi()<=et.DEBUG&&S("QueryEngine","The SDK decides to create cache indexes for query:",Lr(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,je(e))):_.resolve())}ji(t,e){if(Ph(e))return _.resolve(null);let r=je(e);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=Ul(e,null,"F"),r=je(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const o=st(...s);return this.zi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(l=>{const u=this.Zi(e,a);return this.Xi(e,u,o,l.readTime)?this.ji(t,Ul(e,null,"F")):this.es(t,u,e,l)}))})))}Hi(t,e,r,i){return Ph(e)||i.isEqual(Y.min())?_.resolve(null):this.zi.getDocuments(t,r).next(s=>{const o=this.Zi(e,s);return this.Xi(e,o,r,i)?_.resolve(null):(mi()<=et.DEBUG&&S("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Lr(e)),this.es(t,o,e,lE(i,-1)).next(a=>a))})}Zi(t,e){let r=new Ht(mp(t));return e.forEach((i,s)=>{Ao(t,s)&&(r=r.add(s))}),r}Xi(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const s=t.limitType==="F"?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(t,e,r){return mi()<=et.DEBUG&&S("QueryEngine","Using full collection scan to execute query:",Lr(e)),this.zi.getDocumentsMatchingQuery(t,e,xn.min(),r)}es(t,e,r,i){return this.zi.getDocumentsMatchingQuery(t,r,i).next(s=>(e.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class N0{constructor(t,e,r,i){this.persistence=t,this.ts=e,this.serializer=i,this.ns=new It(lt),this.rs=new ai(s=>Uu(s),Bu),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(r)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new T0(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.ns))}}function O0(n,t,e,r){return new N0(n,t,e,r)}async function Np(n,t){const e=ot(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,e._s(t),e.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=st();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return e.localDocuments.getDocuments(r,l).next(u=>({us:u,removedBatchIds:o,addedBatchIds:a}))})})}function Op(n){const t=ot(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Qr.getLastRemoteSnapshotVersion(e))}function V0(n,t){const e=ot(n),r=t.snapshotVersion;let i=e.ns;return e.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=e.os.newChangeBuffer({trackRemovals:!0});i=e.ns;const a=[];t.targetChanges.forEach((c,f)=>{const d=i.get(f);if(!d)return;a.push(e.Qr.removeMatchingKeys(s,c.removedDocuments,f).next(()=>e.Qr.addMatchingKeys(s,c.addedDocuments,f)));let g=d.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(f)!==null?g=g.withResumeToken(ee.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):c.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(c.resumeToken,r)),i=i.insert(f,g),function(R,E,W){return R.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=3e8?!0:W.addedDocuments.size+W.modifiedDocuments.size+W.removedDocuments.size>0}(d,g,c)&&a.push(e.Qr.updateTargetData(s,g))});let l=Un(),u=st();if(t.documentUpdates.forEach(c=>{t.resolvedLimboDocuments.has(c)&&a.push(e.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(L0(s,o,t.documentUpdates).next(c=>{l=c.cs,u=c.ls})),!r.isEqual(Y.min())){const c=e.Qr.getLastRemoteSnapshotVersion(s).next(f=>e.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return _.waitFor(a).next(()=>o.apply(s)).next(()=>e.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(e.ns=i,s))}function L0(n,t,e){let r=st(),i=st();return e.forEach(s=>r=r.add(s)),t.getEntries(n,r).next(s=>{let o=Un();return e.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(Y.min())?(t.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(l),o=o.insert(a,l)):S("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{cs:o,ls:i}})}function M0(n,t){const e=ot(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return e.Qr.getTargetData(r,t).next(s=>s?(i=s,_.resolve(i)):e.Qr.allocateTargetId(r).next(o=>(i=new Nn(t,o,"TargetPurposeListen",r.currentSequenceNumber),e.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=e.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.ns=e.ns.insert(r.targetId,r),e.rs.set(t,r.targetId)),r})}async function zl(n,t,e){const r=ot(n),i=r.ns.get(t),s=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!os(o))throw o;S("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.ns=r.ns.remove(t),r.rs.delete(i.target)}function Bh(n,t,e){const r=ot(n);let i=Y.min(),s=st();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,c){const f=ot(l),d=f.rs.get(c);return d!==void 0?_.resolve(f.ns.get(d)):f.Qr.getTargetData(u,c)}(r,o,je(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.ts.getDocumentsMatchingQuery(o,t,e?i:Y.min(),e?s:st())).next(a=>(x0(r,NE(t),a),{documents:a,hs:s})))}function x0(n,t,e){let r=n.ss.get(t)||Y.min();e.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.ss.set(t,r)}class jh{constructor(){this.activeTargetIds=FE()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class F0{constructor(){this.no=new jh,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,e,r){this.ro[t]=e}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new jh,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class U0{io(t){}shutdown(){}}/**
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
 */class qh{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){S("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){S("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Cs=null;function dl(){return Cs===null?Cs=function(){return 268435456+Math.round(2147483648*Math.random())}():Cs++,"0x"+Cs.toString(16)}/**
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
 */const B0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class j0{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}onMessage(t){this.Ao=t}close(){this.ho()}send(t){this.lo(t)}Ro(){this.Io()}Vo(t){this.Eo(t)}mo(t){this.Ao(t)}}/**
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
 */const Yt="WebChannelConnection";class q0 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+e.host,this.po=`projects/${i}/databases/${s}`,this.yo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get wo(){return!1}So(e,r,i,s,o){const a=dl(),l=this.bo(e,r.toUriEncodedString());S("RestConnection",`Sending RPC '${e}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(u,s,o),this.Co(e,l,u,i).then(c=>(S("RestConnection",`Received RPC '${e}' ${a}: `,c),c),c=>{throw Yr("RestConnection",`RPC '${e}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}vo(e,r,i,s,o,a){return this.So(e,r,i,s,o)}Do(e,r,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+oi}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>e[o]=s),i&&i.headers.forEach((s,o)=>e[o]=s)}bo(e,r){const i=B0[e];return`${this.fo}/v1/${r}:${i}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Co(t,e,r,i){const s=dl();return new Promise((o,a)=>{const l=new $v;l.setWithCredentials(!0),l.listenOnce(Yv.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case ul.NO_ERROR:const c=l.getResponseJson();S(Yt,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(c)),o(c);break;case ul.TIMEOUT:S(Yt,`RPC '${t}' ${s} timed out`),a(new V(w.DEADLINE_EXCEEDED,"Request time out"));break;case ul.HTTP_ERROR:const f=l.getStatus();if(S(Yt,`RPC '${t}' ${s} failed with status:`,f,"response text:",l.getResponseText()),f>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const g=d==null?void 0:d.error;if(g&&g.status&&g.message){const b=function(E){const W=E.toLowerCase().replace(/_/g,"-");return Object.values(w).indexOf(W)>=0?W:w.UNKNOWN}(g.status);a(new V(b,g.message))}else a(new V(w.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new V(w.UNAVAILABLE,"Connection failed."));break;default:X()}}finally{S(Yt,`RPC '${t}' ${s} completed.`)}});const u=JSON.stringify(i);S(Yt,`RPC '${t}' ${s} sending request:`,i),l.send(e,"POST",u,r,15)})}Fo(t,e,r){const i=dl(),s=[this.fo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=Wv(),a=Qv(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,e,r),l.encodeInitMessageHeaders=!0;const c=s.join("");S(Yt,`Creating RPC '${t}' stream ${i}: ${c}`,l);const f=o.createWebChannel(c,l);let d=!1,g=!1;const b=new j0({lo:E=>{g?S(Yt,`Not sending because RPC '${t}' stream ${i} is closed:`,E):(d||(S(Yt,`Opening RPC '${t}' stream ${i} transport.`),f.open(),d=!0),S(Yt,`RPC '${t}' stream ${i} sending:`,E),f.send(E))},ho:()=>f.close()}),R=(E,W,J)=>{E.listen(W,M=>{try{J(M)}catch(k){setTimeout(()=>{throw k},0)}})};return R(f,Is.EventType.OPEN,()=>{g||S(Yt,`RPC '${t}' stream ${i} transport opened.`)}),R(f,Is.EventType.CLOSE,()=>{g||(g=!0,S(Yt,`RPC '${t}' stream ${i} transport closed`),b.Vo())}),R(f,Is.EventType.ERROR,E=>{g||(g=!0,Yr(Yt,`RPC '${t}' stream ${i} transport errored:`,E),b.Vo(new V(w.UNAVAILABLE,"The operation could not be completed")))}),R(f,Is.EventType.MESSAGE,E=>{var W;if(!g){const J=E.data[0];bt(!!J);const M=J,k=M.error||((W=M[0])===null||W===void 0?void 0:W.error);if(k){S(Yt,`RPC '${t}' stream ${i} received error:`,k);const A=k.status;let P=function(nt){const $=Rt[nt];if($!==void 0)return wp($)}(A),x=k.message;P===void 0&&(P=w.INTERNAL,x="Unknown error status: "+A+" with message "+k.message),g=!0,b.Vo(new V(P,x)),f.close()}else S(Yt,`RPC '${t}' stream ${i} received:`,J),b.mo(J)}}),R(a,Jv.STAT_EVENT,E=>{E.stat===yh.PROXY?S(Yt,`RPC '${t}' stream ${i} detected buffering proxy`):E.stat===yh.NOPROXY&&S(Yt,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{b.Ro()},0),b}}function fl(){return typeof document<"u"?document:null}/**
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
 */function Vp(n){return new n0(n,!0)}/**
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
 */class Lp{constructor(t,e,r=1e3,i=1.5,s=6e4){this.oi=t,this.timerId=e,this.Mo=r,this.xo=i,this.Oo=s,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(t){this.cancel();const e=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Lo),i=Math.max(0,e-r);i>0&&S("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Lo=Date.now(),t())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Bo!==null&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){this.Bo!==null&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
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
 */class H0{constructor(t,e,r,i,s,o,a,l){this.oi=t,this.$o=r,this.Uo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new Lp(t,e)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(t){this.n_(),this.stream.send(t)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(t,e){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,t!==4?this.jo.reset():e&&e.code===w.RESOURCE_EXHAUSTED?(qe(e.toString()),qe("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):e&&e.code===w.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.To(e)}i_(){}auth(){this.state=1;const t=this.s_(this.Wo),e=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Wo===e&&this.o_(r,i)},r=>{t(()=>{const i=new V(w.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(i)})})}o_(t,e){const r=this.s_(this.Wo);this.stream=this.a_(t,e),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(i=>{r(()=>this.__(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(t){return S("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}s_(t){return e=>{this.oi.enqueueAndForget(()=>this.Wo===t?e():(S("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class z0 extends H0{constructor(t,e,r,i,s,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,i,o),this.serializer=s}a_(t,e){return this.connection.Fo("Listen",t,e)}onMessage(t){this.jo.reset();const e=a0(this.serializer,t),r=function(s){if(!("targetChange"in s))return Y.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?zr(o.readTime):Y.min()}(t);return this.listener.u_(e,r)}c_(t){const e={};e.database=Uh(this.serializer),e.addTarget=function(s,o){let a;const l=o.target;if(a=Fl(l)?{documents:l0(s,l)}:{query:u0(s,l).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=i0(s,o.resumeToken);const u=ql(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(Y.min())>0){a.readTime=r0(s,o.snapshotVersion.toTimestamp());const u=ql(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,t);const r=h0(this.serializer,t);r&&(e.labels=r),this.t_(e)}l_(t){const e={};e.database=Uh(this.serializer),e.removeTarget=t,this.t_(e)}}/**
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
 */class K0 extends class{}{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.A_=!1}R_(){if(this.A_)throw new V(w.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,e,r,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.So(t,Hl(e,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new V(w.UNKNOWN,s.toString())})}vo(t,e,r,i,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(t,Hl(e,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new V(w.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class G0{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(t){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.y_("Offline")))}set(t){this.b_(),this.m_=0,t==="Online"&&(this.g_=!1),this.y_(t)}y_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}w_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(qe(e),this.g_=!1):S("OnlineStateTracker",e)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
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
 */class W0{constructor(t,e,r,i,s){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=s,this.M_.io(o=>{r.enqueueAndForget(async()=>{us(this)&&(S("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=ot(l);u.v_.add(4),await ls(u),u.x_.set("Unknown"),u.v_.delete(4),await bo(u)}(this))})}),this.x_=new G0(r,i)}}async function bo(n){if(us(n))for(const t of n.F_)await t(!0)}async function ls(n){for(const t of n.F_)await t(!1)}function Mp(n,t){const e=ot(n);e.C_.has(t.targetId)||(e.C_.set(t.targetId,t),Ju(e)?Yu(e):li(e).Jo()&&Qu(e,t))}function xp(n,t){const e=ot(n),r=li(e);e.C_.delete(t),r.Jo()&&Fp(e,t),e.C_.size===0&&(r.Jo()?r.Xo():us(e)&&e.x_.set("Unknown"))}function Qu(n,t){if(n.O_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Y.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}li(n).c_(t)}function Fp(n,t){n.O_.Oe(t),li(n).l_(t)}function Yu(n){n.O_=new XE({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>n.C_.get(t)||null,nt:()=>n.datastore.serializer.databaseId}),li(n).start(),n.x_.p_()}function Ju(n){return us(n)&&!li(n).Ho()&&n.C_.size>0}function us(n){return ot(n).v_.size===0}function Up(n){n.O_=void 0}async function Q0(n){n.C_.forEach((t,e)=>{Qu(n,t)})}async function Y0(n,t){Up(n),Ju(n)?(n.x_.S_(t),Yu(n)):n.x_.set("Unknown")}async function J0(n,t,e){if(n.x_.set("Online"),t instanceof Cp&&t.state===2&&t.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.C_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.C_.delete(a),i.O_.removeTarget(a))}(n,t)}catch(r){S("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Hh(n,r)}else if(t instanceof Ds?n.O_.$e(t):t instanceof Ap?n.O_.Je(t):n.O_.Ge(t),!e.isEqual(Y.min()))try{const r=await Op(n.localStore);e.compareTo(r)>=0&&await function(s,o){const a=s.O_.it(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.C_.get(u);c&&s.C_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.C_.get(l);if(!c)return;s.C_.set(l,c.withResumeToken(ee.EMPTY_BYTE_STRING,c.snapshotVersion)),Fp(s,l);const f=new Nn(c.target,l,u,c.sequenceNumber);Qu(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(n,e)}catch(r){S("RemoteStore","Failed to raise snapshot:",r),await Hh(n,r)}}async function Hh(n,t,e){if(!os(t))throw t;n.v_.add(1),await ls(n),n.x_.set("Offline"),e||(e=()=>Op(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{S("RemoteStore","Retrying IndexedDB access"),await e(),n.v_.delete(1),await bo(n)})}async function zh(n,t){const e=ot(n);e.asyncQueue.verifyOperationInProgress(),S("RemoteStore","RemoteStore received new credentials");const r=us(e);e.v_.add(3),await ls(e),r&&e.x_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.v_.delete(3),await bo(e)}async function $0(n,t){const e=ot(n);t?(e.v_.delete(2),await bo(e)):t||(e.v_.add(2),await ls(e),e.x_.set("Unknown"))}function li(n){return n.N_||(n.N_=function(e,r,i){const s=ot(e);return s.R_(),new z0(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Po:Q0.bind(null,n),To:Y0.bind(null,n),u_:J0.bind(null,n)}),n.F_.push(async t=>{t?(n.N_.Zo(),Ju(n)?Yu(n):n.x_.set("Unknown")):(await n.N_.stop(),Up(n))})),n.N_}/**
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
 */class $u{constructor(t,e,r,i,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Mn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,s){const o=Date.now()+r,a=new $u(t,e,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(w.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Bp(n,t){if(qe("AsyncQueue",`${t}: ${n}`),os(n))return new V(w.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class Kr{constructor(t){this.comparator=t?(e,r)=>t(e,r)||U.comparator(e.key,r.key):(e,r)=>U.comparator(e.key,r.key),this.keyedMap=Ti(),this.sortedSet=new It(this.comparator)}static emptySet(t){return new Kr(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Kr)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Kr;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
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
 */class Kh{constructor(){this.L_=new It(U.comparator)}track(t){const e=t.doc.key,r=this.L_.get(e);r?t.type!==0&&r.type===3?this.L_=this.L_.insert(e,t):t.type===3&&r.type!==1?this.L_=this.L_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.L_=this.L_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.L_=this.L_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.L_=this.L_.remove(e):t.type===1&&r.type===2?this.L_=this.L_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.L_=this.L_.insert(e,{type:2,doc:t.doc}):X():this.L_=this.L_.insert(e,t)}k_(){const t=[];return this.L_.inorderTraversal((e,r)=>{t.push(r)}),t}}class ti{constructor(t,e,r,i,s,o,a,l,u){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(t,e,r,i,s){const o=[];return e.forEach(a=>{o.push({type:0,doc:a})}),new ti(t,e,Kr.emptySet(e),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&wo(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==r[i].type||!e[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class X0{constructor(){this.q_=void 0,this.Q_=[]}}class Z0{constructor(){this.queries=new ai(t=>pp(t),wo),this.onlineState="Unknown",this.K_=new Set}}async function tT(n,t){const e=ot(n),r=t.query;let i=!1,s=e.queries.get(r);if(s||(i=!0,s=new X0),i)try{s.q_=await e.onListen(r)}catch(o){const a=Bp(o,`Initialization of query '${Lr(t.query)}' failed`);return void t.onError(a)}e.queries.set(r,s),s.Q_.push(t),t.U_(e.onlineState),s.q_&&t.W_(s.q_)&&Xu(e)}async function eT(n,t){const e=ot(n),r=t.query;let i=!1;const s=e.queries.get(r);if(s){const o=s.Q_.indexOf(t);o>=0&&(s.Q_.splice(o,1),i=s.Q_.length===0)}if(i)return e.queries.delete(r),e.onUnlisten(r)}function nT(n,t){const e=ot(n);let r=!1;for(const i of t){const s=i.query,o=e.queries.get(s);if(o){for(const a of o.Q_)a.W_(i)&&(r=!0);o.q_=i}}r&&Xu(e)}function rT(n,t,e){const r=ot(n),i=r.queries.get(t);if(i)for(const s of i.Q_)s.onError(e);r.queries.delete(t)}function Xu(n){n.K_.forEach(t=>{t.next()})}class iT{constructor(t,e,r){this.query=t,this.G_=e,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new ti(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.z_?this.H_(t)&&(this.G_.next(t),e=!0):this.J_(t,this.onlineState)&&(this.Y_(t),e=!0),this.j_=t,e}onError(t){this.G_.error(t)}U_(t){this.onlineState=t;let e=!1;return this.j_&&!this.z_&&this.J_(this.j_,t)&&(this.Y_(this.j_),e=!0),e}J_(t,e){if(!t.fromCache)return!0;const r=e!=="Offline";return(!this.options.Z_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}H_(t){if(t.docChanges.length>0)return!0;const e=this.j_&&this.j_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}Y_(t){t=ti.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.z_=!0,this.G_.next(t)}}/**
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
 */class jp{constructor(t){this.key=t}}class qp{constructor(t){this.key=t}}class sT{constructor(t,e){this.query=t,this.oa=e,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=st(),this.mutatedKeys=st(),this.ua=mp(t),this.ca=new Kr(this.ua)}get la(){return this.oa}ha(t,e){const r=e?e.Pa:new Kh,i=e?e.ca:this.ca;let s=e?e.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((c,f)=>{const d=i.get(c),g=Ao(this.query,f)?f:null,b=!!d&&this.mutatedKeys.has(d.key),R=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let E=!1;d&&g?d.data.isEqual(g.data)?b!==R&&(r.track({type:3,doc:g}),E=!0):this.Ia(d,g)||(r.track({type:2,doc:g}),E=!0,(l&&this.ua(g,l)>0||u&&this.ua(g,u)<0)&&(a=!0)):!d&&g?(r.track({type:0,doc:g}),E=!0):d&&!g&&(r.track({type:1,doc:d}),E=!0,(l||u)&&(a=!0)),E&&(g?(o=o.add(g),s=R?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{ca:o,Pa:r,Xi:a,mutatedKeys:s}}Ia(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,i){const s=this.ca;this.ca=t.ca,this.mutatedKeys=t.mutatedKeys;const o=t.Pa.k_();o.sort((c,f)=>function(g,b){const R=E=>{switch(E){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X()}};return R(g)-R(b)}(c.type,f.type)||this.ua(c.doc,f.doc)),this.Ta(r),i=i!=null&&i;const a=e&&!i?this.Ea():[],l=this.aa.size===0&&this.current&&!i?1:0,u=l!==this._a;return this._a=l,o.length!==0||u?{snapshot:new ti(this.query,t.ca,s,o,t.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),da:a}:{da:a}}U_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new Kh,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{da:[]}}Aa(t){return!this.oa.has(t)&&!!this.ca.has(t)&&!this.ca.get(t).hasLocalMutations}Ta(t){t&&(t.addedDocuments.forEach(e=>this.oa=this.oa.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.oa=this.oa.delete(e)),this.current=t.current)}Ea(){if(!this.current)return[];const t=this.aa;this.aa=st(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const e=[];return t.forEach(r=>{this.aa.has(r)||e.push(new qp(r))}),this.aa.forEach(r=>{t.has(r)||e.push(new jp(r))}),e}Ra(t){this.oa=t.hs,this.aa=st();const e=this.ha(t.documents);return this.applyChanges(e,!0)}Va(){return ti.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class oT{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class aT{constructor(t){this.key=t,this.ma=!1}}class lT{constructor(t,e,r,i,s,o){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new ai(a=>pp(a),wo),this.pa=new Map,this.ya=new Set,this.wa=new It(U.comparator),this.Sa=new Map,this.ba=new Ku,this.Da={},this.Ca=new Map,this.va=Zr.Bn(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function uT(n,t){const e=gT(n);let r,i;const s=e.ga.get(t);if(s)r=s.targetId,e.sharedClientState.addLocalQueryTarget(r),i=s.view.Va();else{const o=await M0(e.localStore,je(t)),a=e.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await cT(e,t,r,a==="current",o.resumeToken),e.isPrimaryClient&&Mp(e.remoteStore,o)}return i}async function cT(n,t,e,r,i){n.Ma=(f,d,g)=>async function(R,E,W,J){let M=E.view.ha(W);M.Xi&&(M=await Bh(R.localStore,E.query,!1).then(({documents:x})=>E.view.ha(x,M)));const k=J&&J.targetChanges.get(E.targetId),A=J&&J.targetMismatches.get(E.targetId)!=null,P=E.view.applyChanges(M,R.isPrimaryClient,k,A);return Wh(R,E.targetId,P.da),P.snapshot}(n,f,d,g);const s=await Bh(n.localStore,t,!0),o=new sT(t,s.hs),a=o.ha(s.documents),l=as.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",i),u=o.applyChanges(a,n.isPrimaryClient,l);Wh(n,e,u.da);const c=new oT(t,e,o);return n.ga.set(t,c),n.pa.has(e)?n.pa.get(e).push(t):n.pa.set(e,[t]),u.snapshot}async function hT(n,t){const e=ot(n),r=e.ga.get(t),i=e.pa.get(r.targetId);if(i.length>1)return e.pa.set(r.targetId,i.filter(s=>!wo(s,t))),void e.ga.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(r.targetId),e.sharedClientState.isActiveQueryTarget(r.targetId)||await zl(e.localStore,r.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(r.targetId),xp(e.remoteStore,r.targetId),Kl(e,r.targetId)}).catch(Nu)):(Kl(e,r.targetId),await zl(e.localStore,r.targetId,!0))}async function Hp(n,t){const e=ot(n);try{const r=await V0(e.localStore,t);t.targetChanges.forEach((i,s)=>{const o=e.Sa.get(s);o&&(bt(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ma=!0:i.modifiedDocuments.size>0?bt(o.ma):i.removedDocuments.size>0&&(bt(o.ma),o.ma=!1))}),await Kp(e,r,t)}catch(r){await Nu(r)}}function Gh(n,t,e){const r=ot(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.ga.forEach((s,o)=>{const a=o.view.U_(t);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=ot(o);l.onlineState=a;let u=!1;l.queries.forEach((c,f)=>{for(const d of f.Q_)d.U_(a)&&(u=!0)}),u&&Xu(l)}(r.eventManager,t),i.length&&r.fa.u_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function dT(n,t,e){const r=ot(n);r.sharedClientState.updateQueryState(t,"rejected",e);const i=r.Sa.get(t),s=i&&i.key;if(s){let o=new It(U.comparator);o=o.insert(s,Xt.newNoDocument(s,Y.min()));const a=st().add(s),l=new So(Y.min(),new Map,new It(lt),o,a);await Hp(r,l),r.wa=r.wa.remove(s),r.Sa.delete(t),Zu(r)}else await zl(r.localStore,t,!1).then(()=>Kl(r,t,e)).catch(Nu)}function Kl(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.pa.get(t))n.ga.delete(r),e&&n.fa.xa(r,e);n.pa.delete(t),n.isPrimaryClient&&n.ba.Vr(t).forEach(r=>{n.ba.containsKey(r)||zp(n,r)})}function zp(n,t){n.ya.delete(t.path.canonicalString());const e=n.wa.get(t);e!==null&&(xp(n.remoteStore,e),n.wa=n.wa.remove(t),n.Sa.delete(e),Zu(n))}function Wh(n,t,e){for(const r of e)r instanceof jp?(n.ba.addReference(r.key,t),fT(n,r)):r instanceof qp?(S("SyncEngine","Document no longer in limbo: "+r.key),n.ba.removeReference(r.key,t),n.ba.containsKey(r.key)||zp(n,r.key)):X()}function fT(n,t){const e=t.key,r=e.path.canonicalString();n.wa.get(e)||n.ya.has(r)||(S("SyncEngine","New document in limbo: "+e),n.ya.add(r),Zu(n))}function Zu(n){for(;n.ya.size>0&&n.wa.size<n.maxConcurrentLimboResolutions;){const t=n.ya.values().next().value;n.ya.delete(t);const e=new U(Et.fromString(t)),r=n.va.next();n.Sa.set(r,new aT(e)),n.wa=n.wa.insert(e,r),Mp(n.remoteStore,new Nn(je(ju(e.path)),r,"TargetPurposeLimboResolution",Lu._e))}}async function Kp(n,t,e){const r=ot(n),i=[],s=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,l)=>{o.push(r.Ma(l,t,e).then(u=>{if((u||e)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Wu.Ki(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.fa.u_(i),await async function(l,u){const c=ot(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>_.forEach(u,d=>_.forEach(d.qi,g=>c.persistence.referenceDelegate.addReference(f,d.targetId,g)).next(()=>_.forEach(d.Qi,g=>c.persistence.referenceDelegate.removeReference(f,d.targetId,g)))))}catch(f){if(!os(f))throw f;S("LocalStore","Failed to update sequence numbers: "+f)}for(const f of u){const d=f.targetId;if(!f.fromCache){const g=c.ns.get(d),b=g.snapshotVersion,R=g.withLastLimboFreeSnapshotVersion(b);c.ns=c.ns.insert(d,R)}}}(r.localStore,s))}async function pT(n,t){const e=ot(n);if(!e.currentUser.isEqual(t)){S("SyncEngine","User change. New user:",t.toKey());const r=await Np(e.localStore,t);e.currentUser=t,function(s,o){s.Ca.forEach(a=>{a.forEach(l=>{l.reject(new V(w.CANCELLED,o))})}),s.Ca.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Kp(e,r.us)}}function mT(n,t){const e=ot(n),r=e.Sa.get(t);if(r&&r.ma)return st().add(r.key);{let i=st();const s=e.pa.get(t);if(!s)return i;for(const o of s){const a=e.ga.get(o);i=i.unionWith(a.view.la)}return i}}function gT(n){const t=ot(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Hp.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=mT.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=dT.bind(null,t),t.fa.u_=nT.bind(null,t.eventManager),t.fa.xa=rT.bind(null,t.eventManager),t}class Qh{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Vp(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return O0(this.persistence,new D0,t.initialUser,this.serializer)}createPersistence(t){return new b0(Gu.Hr,this.serializer)}createSharedClientState(t){return new F0}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class _T{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Gh(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=pT.bind(null,this.syncEngine),await $0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Z0}()}createDatastore(t){const e=Vp(t.databaseInfo.databaseId),r=function(s){return new q0(s)}(t.databaseInfo);return function(s,o,a,l){return new K0(s,o,a,l)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,i,s,o,a){return new W0(r,i,s,o,a)}(this.localStore,this.datastore,t.asyncQueue,e=>Gh(this.syncEngine,e,0),function(){return qh.D()?new qh:new U0}())}createSyncEngine(t,e){return function(i,s,o,a,l,u,c){const f=new lT(i,s,o,a,l,u);return c&&(f.Fa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t;await async function(r){const i=ot(r);S("RemoteStore","RemoteStore shutting down."),i.v_.add(5),await ls(i),i.M_.shutdown(),i.x_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
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
 */class yT{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ba(this.observer.next,t)}error(t){this.observer.error?this.Ba(this.observer.error,t):qe("Uncaught Error in snapshot listener:",t.toString())}La(){this.muted=!0}Ba(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */class vT{constructor(t,e,r,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=$t.UNAUTHENTICATED,this.clientId=op.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{S("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(S("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new V(w.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Mn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Bp(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function pl(n,t){n.asyncQueue.verifyOperationInProgress(),S("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Np(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Yh(n,t){n.asyncQueue.verifyOperationInProgress();const e=await TT(n);S("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>zh(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>zh(t.remoteStore,i)),n._onlineComponents=t}function ET(n){return n.name==="FirebaseError"?n.code===w.FAILED_PRECONDITION||n.code===w.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function TT(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){S("FirestoreClient","Using user provided OfflineComponentProvider");try{await pl(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!ET(e))throw e;Yr("Error using user provided cache. Falling back to memory cache: "+e),await pl(n,new Qh)}}else S("FirestoreClient","Using default OfflineComponentProvider"),await pl(n,new Qh);return n._offlineComponents}async function IT(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(S("FirestoreClient","Using user provided OnlineComponentProvider"),await Yh(n,n._uninitializedComponentsProvider._online)):(S("FirestoreClient","Using default OnlineComponentProvider"),await Yh(n,new _T))),n._onlineComponents}async function wT(n){const t=await IT(n),e=t.eventManager;return e.onListen=uT.bind(null,t.syncEngine),e.onUnlisten=hT.bind(null,t.syncEngine),e}function AT(n,t,e={}){const r=new Mn;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new yT({next:d=>{o.enqueueAndForget(()=>eT(s,f));const g=d.docs.has(a);!g&&d.fromCache?u.reject(new V(w.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&d.fromCache&&l&&l.source==="server"?u.reject(new V(w.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(d)},error:d=>u.reject(d)}),f=new iT(ju(a.path),c,{includeMetadataChanges:!0,Z_:!0});return tT(s,f)}(await wT(n),n.asyncQueue,t,e,r)),r.promise}/**
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
 */function Gp(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const Jh=new Map;/**
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
 */function CT(n,t,e){if(!e)throw new V(w.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function RT(n,t,e,r){if(t===!0&&r===!0)throw new V(w.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function $h(n){if(!U.isDocumentKey(n))throw new V(w.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ST(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":X()}function Gl(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new V(w.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=ST(n);throw new V(w.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */class Xh{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new V(w.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new V(w.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}RT("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Gp((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new V(w.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new V(w.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new V(w.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class tc{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Xh({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new V(w.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new V(w.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Xh(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Zv;switch(r.type){case"firstParty":return new rE(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new V(w.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=Jh.get(e);r&&(S("ComponentProvider","Removing Datastore"),Jh.delete(e),r.terminate())}(this),Promise.resolve()}}function bT(n,t,e,r={}){var i;const s=(n=Gl(n,tc))._getSettings(),o=`${t}:${e}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Yr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=$t.MOCK_USER;else{a=cm(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new V(w.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new $t(u)}n._authCredentials=new tE(new sp(a,l))}}/**
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
 */class ec{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new ec(this.firestore,t,this._query)}}class fn{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Gi(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new fn(this.firestore,t,this._key)}}class Gi extends ec{constructor(t,e,r){super(t,e,ju(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new fn(this.firestore,null,new U(t))}withConverter(t){return new Gi(this.firestore,t,this._path)}}function PT(n,t,...e){if(n=_n(n),arguments.length===1&&(t=op.newId()),CT("doc","path",t),n instanceof tc){const r=Et.fromString(t,...e);return $h(r),new fn(n,null,new U(r))}{if(!(n instanceof fn||n instanceof Gi))throw new V(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Et.fromString(t,...e));return $h(r),new fn(n.firestore,n instanceof Gi?n.converter:null,new U(r))}}/**
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
 */class kT{constructor(){this.Xa=Promise.resolve(),this.eu=[],this.tu=!1,this.nu=[],this.ru=null,this.iu=!1,this.su=!1,this.ou=[],this.jo=new Lp(this,"async_queue_retry"),this._u=()=>{const e=fl();e&&S("AsyncQueue","Visibility state changed to "+e.visibilityState),this.jo.Ko()};const t=fl();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._u)}get isShuttingDown(){return this.tu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.au(),this.uu(t)}enterRestrictedMode(t){if(!this.tu){this.tu=!0,this.su=t||!1;const e=fl();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._u)}}enqueue(t){if(this.au(),this.tu)return new Promise(()=>{});const e=new Mn;return this.uu(()=>this.tu&&this.su?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.eu.push(t),this.cu()))}async cu(){if(this.eu.length!==0){try{await this.eu[0](),this.eu.shift(),this.jo.reset()}catch(t){if(!os(t))throw t;S("AsyncQueue","Operation failed with retryable error: "+t)}this.eu.length>0&&this.jo.qo(()=>this.cu())}}uu(t){const e=this.Xa.then(()=>(this.iu=!0,t().catch(r=>{this.ru=r,this.iu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw qe("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.iu=!1,r))));return this.Xa=e,e}enqueueAfterDelay(t,e,r){this.au(),this.ou.indexOf(t)>-1&&(e=0);const i=$u.createAndSchedule(this,t,e,r,s=>this.lu(s));return this.nu.push(i),i}au(){this.ru&&X()}verifyOperationInProgress(){}async hu(){let t;do t=this.Xa,await t;while(t!==this.Xa)}Pu(t){for(const e of this.nu)if(e.timerId===t)return!0;return!1}Iu(t){return this.hu().then(()=>{this.nu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.nu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.hu()})}Tu(t){this.ou.push(t)}lu(t){const e=this.nu.indexOf(t);this.nu.splice(e,1)}}class Wp extends tc{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=function(){return new kT}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Qp(this),this._firestoreClient.terminate()}}function DT(n,t){const e=typeof n=="object"?n:Id(),r=typeof n=="string"?n:t||"(default)",i=Zl(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=lm("firestore");s&&bT(i,...s)}return i}function NT(n){return n._firestoreClient||Qp(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Qp(n){var t,e,r;const i=n._freezeSettings(),s=function(a,l,u,c){return new _E(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,Gp(c.experimentalLongPollingOptions),c.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new vT(n._authCredentials,n._appCheckCredentials,n._queue,s),!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class $s{constructor(t){this._byteString=t}static fromBase64String(t){try{return new $s(ee.fromBase64String(t))}catch(e){throw new V(w.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new $s(ee.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Yp{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new V(w.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new se(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class OT{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new V(w.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new V(w.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return lt(this._lat,t._lat)||lt(this._long,t._long)}}const VT=new RegExp("[~\\*/\\[\\]]");function LT(n,t,e){if(t.search(VT)>=0)throw Zh(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Yp(...t.split("."))._internalPath}catch{throw Zh(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Zh(n,t,e,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;e&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new V(w.INVALID_ARGUMENT,a+n+l)}/**
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
 */class Jp{constructor(t,e,r,i,s){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new fn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new MT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field($p("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class MT extends Jp{data(){return super.data()}}function $p(n,t){return typeof t=="string"?LT(n,t):t instanceof Yp?t._internalPath:t._delegate._internalPath}class xT{convertValue(t,e="none"){switch(Tr(t)){case 0:return null;case 1:return t.booleanValue;case 2:return St(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Er(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw X()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return To(t,(i,s)=>{r[i]=this.convertValue(s,e)}),r}convertGeoPoint(t){return new OT(St(t.latitude),St(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=xu(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(Hi(t));default:return null}}convertTimestamp(t){const e=Fn(t);return new ce(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=Et.fromString(t);bt(Dp(r));const i=new zi(r.get(1),r.get(3)),s=new U(r.popFirst(5));return i.isEqual(e)||qe(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}/**
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
 */class FT{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Xp extends Jp{constructor(t,e,r,i,s,o){super(t,e,r,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new UT(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field($p("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class UT extends Xp{data(t={}){return super.data(t)}}/**
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
 */function BT(n){n=Gl(n,fn);const t=Gl(n.firestore,Wp);return AT(NT(t),n._key).then(e=>qT(t,n,e))}class jT extends xT{constructor(t){super(),this.firestore=t}convertBytes(t){return new $s(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new fn(this.firestore,null,e)}}function qT(n,t,e){const r=e.docs.get(t._key),i=new jT(n);return new Xp(n,i,t._key,r,new FT(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(i){oi=i})(ei),Gr(new gr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Wp(new eE(r.getProvider("auth-internal")),new sE(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new V(w.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new zi(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:e},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Ln(vh,"4.4.1",t),Ln(vh,"4.4.1","esm2017")})();function gi(n,t,e=0){if(!t)return 0;const r=n-e,i=Math.round(r*100);let s=0,o=i;for(const a of t.rates){if(o<=0)break;const{limit:l,rate:u}=a,c=Math.round(l*100),f=Math.min(o,c),d=Math.round(f*u);s+=d,o-=f}return s/100}const HT={2023:{rates:[{limit:160200,rate:.062},{limit:1/0,rate:0}]},2024:{rates:[{limit:168600,rate:.062},{limit:1/0,rate:0}]}},zT={rates:[{limit:25e4,rate:.0145},{limit:1/0,rate:.0235}]},un={2023:{joint:{federal:27700,"New York":{state:16050,city:0},"New Jersey":{state:0,city:0}},single:{federal:13850,"New York":{state:8e3,city:0},"New Jersey":{state:0,city:0}}},2024:{joint:{federal:29200,"New York":{state:18e3,city:0},"New Jersey":{state:0,city:0}},single:{federal:14600,"New York":{state:8e3,city:0},"New Jersey":{state:0,city:0}}}},mt=n=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(n),td={2023:{"New York":{rates:[{limit:21950,rate:.04},{limit:45200,rate:.045},{limit:161550,rate:.0525},{limit:323200,rate:.059},{limit:1/0,rate:.0633}]},"New Jersey":{rates:[{limit:2e4,rate:.014},{limit:35e3,rate:.0175},{limit:4e4,rate:.035},{limit:75e3,rate:.05525},{limit:15e4,rate:.0637},{limit:5e5,rate:.0897},{limit:1/0,rate:.1075}]},Federal:{rates:[{limit:22e3,rate:.1},{limit:89450,rate:.12},{limit:190750,rate:.22},{limit:364200,rate:.24},{limit:462500,rate:.32},{limit:693750,rate:.35},{limit:1/0,rate:.37}]}},2024:{"New York":{rates:[{limit:17150,rate:.04},{limit:23600,rate:.045},{limit:27900,rate:.0525},{limit:161550,rate:.055},{limit:323200,rate:.06},{limit:2155350,rate:.0685},{limit:5e6,rate:.0965},{limit:25e6,rate:.103},{limit:1/0,rate:.109}]},"New Jersey":{rates:[{limit:2e4,rate:.014},{limit:35e3,rate:.0175},{limit:4e4,rate:.035},{limit:75e3,rate:.05525},{limit:15e4,rate:.0637},{limit:5e5,rate:.0897},{limit:1/0,rate:.1075}]},Federal:{rates:[{limit:23200,rate:.1},{limit:94300,rate:.12},{limit:201050,rate:.22},{limit:383900,rate:.24},{limit:487450,rate:.32},{limit:731200,rate:.35},{limit:1/0,rate:.37}]}}},KT={2023:{"New York":{rates:[{limit:21600,rate:.03078},{limit:45e3,rate:.03762},{limit:9e4,rate:.03819},{limit:1/0,rate:.03867}]}},2024:{"New York":{rates:[{limit:21600,rate:.03078},{limit:45e3,rate:.03762},{limit:9e4,rate:.03819},{limit:1/0,rate:.03867}]}}},GT=(n,t)=>{typeof window>"u"||localStorage.setItem(n,t)},WT=n=>{if(!(typeof window>"u"))return localStorage.getItem(n)};function QT(n){let t,e,r,i,s,o,a,l="<tr><th>Tax</th> <th>Amount</th></tr>",u,c,f,d,g="Federal",b,R,E=mt(n[3])+"",W,J,M,k,A="State",P,x,j=mt(n[2])+"",nt,$,wt,ft,At="City",tt,ne,Dt=mt(n[4])+"",q,F,gt,ge,yn="Social Security",Ke,re,Se=mt(n[5])+"",be,ie,he,_e,vn="Medicare",de,Pe,Ie=mt(n[6])+"",zt,Ge,fe,ae,En="Total",We,xt,ke=mt(n[7])+"",De;return{c(){t=p("h2"),e=ht(n[0]),r=ht(" Taxes - "),i=ht(n[1]),s=y(),o=p("table"),a=p("thead"),a.innerHTML=l,u=y(),c=p("tbody"),f=p("tr"),d=p("td"),d.textContent=g,b=y(),R=p("td"),W=ht(E),J=y(),M=p("tr"),k=p("td"),k.textContent=A,P=y(),x=p("td"),nt=ht(j),$=y(),wt=p("tr"),ft=p("td"),ft.textContent=At,tt=y(),ne=p("td"),q=ht(Dt),F=y(),gt=p("tr"),ge=p("td"),ge.textContent=yn,Ke=y(),re=p("td"),be=ht(Se),ie=y(),he=p("tr"),_e=p("td"),_e.textContent=vn,de=y(),Pe=p("td"),zt=ht(Ie),Ge=y(),fe=p("tr"),ae=p("td"),ae.textContent=En,We=y(),xt=p("td"),De=ht(ke),this.h()},l(at){t=m(at,"H2",{style:!0});var yt=Z(t);e=dt(yt,n[0]),r=dt(yt," Taxes - "),i=dt(yt,n[1]),yt.forEach(N),s=v(at),o=m(at,"TABLE",{style:!0});var Ne=Z(o);a=m(Ne,"THEAD",{"data-svelte-h":!0}),H(a)!=="svelte-91siwn"&&(a.innerHTML=l),u=v(Ne),c=m(Ne,"TBODY",{});var Nt=Z(c);f=m(Nt,"TR",{});var le=Z(f);d=m(le,"TD",{"data-svelte-h":!0}),H(d)!=="svelte-6waqll"&&(d.textContent=g),b=v(le),R=m(le,"TD",{});var Hn=Z(R);W=dt(Hn,E),Hn.forEach(N),le.forEach(N),J=v(Nt),M=m(Nt,"TR",{});var pt=Z(M);k=m(pt,"TD",{"data-svelte-h":!0}),H(k)!=="svelte-qr71y5"&&(k.textContent=A),P=v(pt),x=m(pt,"TD",{});var vt=Z(x);nt=dt(vt,j),vt.forEach(N),pt.forEach(N),$=v(Nt),wt=m(Nt,"TR",{});var Ct=Z(wt);ft=m(Ct,"TD",{"data-svelte-h":!0}),H(ft)!=="svelte-1yvq8zx"&&(ft.textContent=At),tt=v(Ct),ne=m(Ct,"TD",{});var Ar=Z(ne);q=dt(Ar,Dt),Ar.forEach(N),Ct.forEach(N),F=v(Nt),gt=m(Nt,"TR",{});var Tn=Z(gt);ge=m(Tn,"TD",{"data-svelte-h":!0}),H(ge)!=="svelte-1mp8mpj"&&(ge.textContent=yn),Ke=v(Tn),re=m(Tn,"TD",{});var Oe=Z(re);be=dt(Oe,Se),Oe.forEach(N),Tn.forEach(N),ie=v(Nt),he=m(Nt,"TR",{});var zn=Z(he);_e=m(zn,"TD",{"data-svelte-h":!0}),H(_e)!=="svelte-b4njfe"&&(_e.textContent=vn),de=v(zn),Pe=m(zn,"TD",{});var Cr=Z(Pe);zt=dt(Cr,Ie),Cr.forEach(N),zn.forEach(N),Ge=v(Nt),fe=m(Nt,"TR",{});var ue=Z(fe);ae=m(ue,"TD",{style:!0,"data-svelte-h":!0}),H(ae)!=="svelte-dm4jeo"&&(ae.textContent=En),We=v(ue),xt=m(ue,"TD",{style:!0});var Rr=Z(xt);De=dt(Rr,ke),Rr.forEach(N),ue.forEach(N),Nt.forEach(N),Ne.forEach(N),this.h()},h(){or(t,"text-transform","capitalize"),or(ae,"border-top","1px solid black"),or(ae,"font-weight","bold"),or(xt,"border-top","1px solid black"),or(xt,"font-weight","bold"),or(o,"border-collapse","collapse")},m(at,yt){Vt(at,t,yt),h(t,e),h(t,r),h(t,i),Vt(at,s,yt),Vt(at,o,yt),h(o,a),h(o,u),h(o,c),h(c,f),h(f,d),h(f,b),h(f,R),h(R,W),h(c,J),h(c,M),h(M,k),h(M,P),h(M,x),h(x,nt),h(c,$),h(c,wt),h(wt,ft),h(wt,tt),h(wt,ne),h(ne,q),h(c,F),h(c,gt),h(gt,ge),h(gt,Ke),h(gt,re),h(re,be),h(c,ie),h(c,he),h(he,_e),h(he,de),h(he,Pe),h(Pe,zt),h(c,Ge),h(c,fe),h(fe,ae),h(fe,We),h(fe,xt),h(xt,De)},p(at,[yt]){yt&1&&Jt(e,at[0]),yt&2&&Jt(i,at[1]),yt&8&&E!==(E=mt(at[3])+"")&&Jt(W,E),yt&4&&j!==(j=mt(at[2])+"")&&Jt(nt,j),yt&16&&Dt!==(Dt=mt(at[4])+"")&&Jt(q,Dt),yt&32&&Se!==(Se=mt(at[5])+"")&&Jt(be,Se),yt&64&&Ie!==(Ie=mt(at[6])+"")&&Jt(zt,Ie),yt&128&&ke!==(ke=mt(at[7])+"")&&Jt(De,ke)},i:bc,o:bc,d(at){at&&(N(t),N(s),N(o))}}}function YT(n,t,e){let{stateTaxAmount:r,federalTaxAmount:i,cityTaxAmount:s,socialSecurityTaxAmount:o,medicareTaxAmount:a,interval:l,currentState:u}=t,c=r,f=i,d=s,g=o,b=a,R=r+i+s+o+a;return n.$$set=E=>{"stateTaxAmount"in E&&e(8,r=E.stateTaxAmount),"federalTaxAmount"in E&&e(9,i=E.federalTaxAmount),"cityTaxAmount"in E&&e(10,s=E.cityTaxAmount),"socialSecurityTaxAmount"in E&&e(11,o=E.socialSecurityTaxAmount),"medicareTaxAmount"in E&&e(12,a=E.medicareTaxAmount),"interval"in E&&e(0,l=E.interval),"currentState"in E&&e(1,u=E.currentState)},n.$$.update=()=>{if(n.$$.dirty&8061)switch(l){case"annual":e(2,c=r),e(3,f=i),e(4,d=s),e(5,g=o),e(6,b=a),e(7,R=c+f+d+g+b);break;case"monthly":e(2,c=r/12),e(3,f=i/12),e(4,d=s/12),e(5,g=o/12),e(6,b=a/12),e(7,R=c+f+d+g+b);break;case"fortnightly":e(2,c=r/26),e(3,f=i/26),e(4,d=s/26),e(5,g=o/26),e(6,b=a/26),e(7,R=c+f+d+g+b);break}},[l,u,c,f,d,g,b,R,r,i,s,o,a]}class JT extends Yl{constructor(t){super(),Jl(this,t,YT,QT,Wl,{stateTaxAmount:8,federalTaxAmount:9,cityTaxAmount:10,socialSecurityTaxAmount:11,medicareTaxAmount:12,interval:0,currentState:1})}}function ed(n,t,e){const r=n.slice();return r[28]=t[e],r[30]=e,r}function nd(n){let t,e,r=n[30]+1+"",i,s,o=mt(n[9][n[30]])+"",a;return{c(){t=p("h3"),e=ht("Income "),i=ht(r),s=ht(`
	Taxable income: `),a=ht(o)},l(l){t=m(l,"H3",{});var u=Z(t);e=dt(u,"Income "),i=dt(u,r),u.forEach(N),s=dt(l,`
	Taxable income: `),a=dt(l,o)},m(l,u){Vt(l,t,u),h(t,e),h(t,i),Vt(l,s,u),Vt(l,a,u)},p(l,u){u&512&&o!==(o=mt(l[9][l[30]])+"")&&Jt(a,o)},d(l){l&&(N(t),N(s),N(a))}}}function $T(n){let t,e,r,i,s,o=mt(n[10][0]+n[10][1])+"",a,l,u,c,f=mt(n[11][0]+n[11][1])+"",d,g,b,R,E=mt(n[8][0]+n[8][1])+"",W,J,M=Ns(n[1]),k=[];for(let A=0;A<M.length;A+=1)k[A]=nd(ed(n,M,A));return e=new JT({props:{federalTaxAmount:n[3][0]+n[3][1],stateTaxAmount:n[4][0]+n[4][1],cityTaxAmount:n[5][0]+n[5][1],socialSecurityTaxAmount:n[6][0]+n[6][1],medicareTaxAmount:n[7][0]+n[7][1],interval:n[2],currentState:n[0]}}),{c(){for(let A=0;A<k.length;A+=1)k[A].c();t=y(),sd(e.$$.fragment),r=y(),i=p("p"),s=ht("Your monthly take-home pay: "),a=ht(o),l=y(),u=p("br"),c=ht(`
	Your biweekly take-home pay: `),d=ht(f),g=y(),b=p("br"),R=ht(`
	Your annual take-home pay: `),W=ht(E)},l(A){for(let x=0;x<k.length;x+=1)k[x].l(A);t=v(A),od(e.$$.fragment,A),r=v(A),i=m(A,"P",{});var P=Z(i);s=dt(P,"Your monthly take-home pay: "),a=dt(P,o),l=v(P),u=m(P,"BR",{}),c=dt(P,`
	Your biweekly take-home pay: `),d=dt(P,f),g=v(P),b=m(P,"BR",{}),R=dt(P,`
	Your annual take-home pay: `),W=dt(P,E),P.forEach(N)},m(A,P){for(let x=0;x<k.length;x+=1)k[x]&&k[x].m(A,P);Vt(A,t,P),ad(e,A,P),Vt(A,r,P),Vt(A,i,P),h(i,s),h(i,a),h(i,l),h(i,u),h(i,c),h(i,d),h(i,g),h(i,b),h(i,R),h(i,W),J=!0},p(A,[P]){if(P&514){M=Ns(A[1]);let j;for(j=0;j<M.length;j+=1){const nt=ed(A,M,j);k[j]?k[j].p(nt,P):(k[j]=nd(nt),k[j].c(),k[j].m(t.parentNode,t))}for(;j<k.length;j+=1)k[j].d(1);k.length=M.length}const x={};P&8&&(x.federalTaxAmount=A[3][0]+A[3][1]),P&16&&(x.stateTaxAmount=A[4][0]+A[4][1]),P&32&&(x.cityTaxAmount=A[5][0]+A[5][1]),P&64&&(x.socialSecurityTaxAmount=A[6][0]+A[6][1]),P&128&&(x.medicareTaxAmount=A[7][0]+A[7][1]),P&4&&(x.interval=A[2]),P&1&&(x.currentState=A[0]),e.$set(x),(!J||P&1024)&&o!==(o=mt(A[10][0]+A[10][1])+"")&&Jt(a,o),(!J||P&2048)&&f!==(f=mt(A[11][0]+A[11][1])+"")&&Jt(d,f),(!J||P&256)&&E!==(E=mt(A[8][0]+A[8][1])+"")&&Jt(W,E)},i(A){J||(ld(e.$$.fragment,A),J=!0)},o(A){ud(e.$$.fragment,A),J=!1},d(A){A&&(N(t),N(r),N(i)),cd(k,A),hd(e,A)}}}function XT(n,t,e){let{currentYear:r="2023",currentState:i="New York",yearlySalaries:s=[],contributionPercentages:o=[],health_care_fsa_contributions:a=[],dependent_care_fsa_contributions:l=[],interval:u,monthlyMedicalContributions:c=[0,0],monthlyDentalContributions:f=[0,0],monthlyVisionContributions:d=[0,0],filingStatus:g="joint"}=t,b=[],R=[],E=[],W=[],J=[],M=[],k=[],A=[],P=[],x=[],j=[],nt=[],$=[],wt=[],ft=[],At;return n.$$set=tt=>{"currentYear"in tt&&e(12,r=tt.currentYear),"currentState"in tt&&e(0,i=tt.currentState),"yearlySalaries"in tt&&e(1,s=tt.yearlySalaries),"contributionPercentages"in tt&&e(13,o=tt.contributionPercentages),"health_care_fsa_contributions"in tt&&e(14,a=tt.health_care_fsa_contributions),"dependent_care_fsa_contributions"in tt&&e(15,l=tt.dependent_care_fsa_contributions),"interval"in tt&&e(2,u=tt.interval),"monthlyMedicalContributions"in tt&&e(16,c=tt.monthlyMedicalContributions),"monthlyDentalContributions"in tt&&e(17,f=tt.monthlyDentalContributions),"monthlyVisionContributions"in tt&&e(18,d=tt.monthlyVisionContributions),"filingStatus"in tt&&e(19,g=tt.filingStatus)},n.$$.update=()=>{if(n.$$.dirty&134214651){e(26,At=td[r][i]),e(20,b=s.map((q,F)=>q*(o[F]/100))),e(21,k=s.map((q,F)=>a[F])),e(22,A=s.map((q,F)=>l[F]));let tt=c.map(q=>q*12);console.log("🔥 ~ monthlyMedicalContributions:",c);let ne=f.map(q=>q*12);console.log("🔥 ~ monthlyDentalContributions:",f);let Dt=d.map(q=>q*12);console.log("🔥 ~ monthlyVisionContributions:",d),e(9,ft=s.map((q,F)=>(console.log({salary:q,yearly401kContributions:b[F],yearlyHealthcareFSAContributions:k[F],yearlyDependentCareFSAContributions:A[F],yearlyMedicalContributions:tt[F],yearlyDentalContributions:ne[F],yearlyVisionContributions:Dt[F]}),q-b[F]-k[F]-A[F]-tt[F]-ne[F]-Dt[F]))),e(23,P=s.map(()=>{var q,F,gt;return((gt=(F=(q=un==null?void 0:un[r])==null?void 0:q[g])==null?void 0:F[i])==null?void 0:gt.state)??0})),e(24,x=s.map(()=>{var q,F;return((F=(q=un==null?void 0:un[r])==null?void 0:q[g])==null?void 0:F.federal)??0})),e(25,j=s.map(()=>{var q,F,gt;return((gt=(F=(q=un==null?void 0:un[r])==null?void 0:q[g])==null?void 0:F[i])==null?void 0:gt.city)??0})),e(4,E=ft.map((q,F)=>gi(q,At,P[F]))),e(3,R=ft.map((q,F)=>gi(q,td[r].Federal,x[F]))),e(5,W=ft.map((q,F)=>gi(q,KT[r][i],j[F]))),e(6,J=ft.map(q=>gi(q,HT[r]))),e(7,M=ft.map(q=>gi(q,zT))),e(8,wt=ft.map((q,F)=>q-E[F]-R[F]-W[F]-J[F]-M[F])),e(10,nt=wt.map(q=>q/12)),e(11,$=wt.map(q=>q/26))}},[i,s,u,R,E,W,J,M,wt,ft,nt,$,r,o,a,l,c,f,d,g,b,k,A,P,x,j,At]}class ZT extends Yl{constructor(t){super(),Jl(this,t,XT,$T,Wl,{currentYear:12,currentState:0,yearlySalaries:1,contributionPercentages:13,health_care_fsa_contributions:14,dependent_care_fsa_contributions:15,interval:2,monthlyMedicalContributions:16,monthlyDentalContributions:17,monthlyVisionContributions:18,filingStatus:19})}}function rd(n,t,e){const r=n.slice();return r[63]=t[e],r[64]=t,r[65]=e,r}function tI(n){let t,e="Sign In",r,i,s,o,a="Email:",l,u,c,f,d,g,b="Password:",R,E,W,J,M,k,A="Sign In",P,x;return{c(){t=p("h2"),t.textContent=e,r=y(),i=p("div"),s=p("form"),o=p("label"),o.textContent=a,l=y(),u=p("input"),c=y(),f=p("br"),d=y(),g=p("label"),g.textContent=b,R=y(),E=p("input"),W=y(),J=p("br"),M=y(),k=p("button"),k.textContent=A,this.h()},l(j){t=m(j,"H2",{"data-svelte-h":!0}),H(t)!=="svelte-1f1zcva"&&(t.textContent=e),r=v(j),i=m(j,"DIV",{});var nt=Z(i);s=m(nt,"FORM",{action:!0});var $=Z(s);o=m($,"LABEL",{for:!0,"data-svelte-h":!0}),H(o)!=="svelte-1flf0h4"&&(o.textContent=a),l=v($),u=m($,"INPUT",{type:!0,id:!0,autocomplete:!0}),c=v($),f=m($,"BR",{}),d=v($),g=m($,"LABEL",{for:!0,"data-svelte-h":!0}),H(g)!=="svelte-bhu94"&&(g.textContent=b),R=v($),E=m($,"INPUT",{type:!0,id:!0,autocomplete:!0}),W=v($),J=m($,"BR",{}),M=v($),k=m($,"BUTTON",{"data-svelte-h":!0}),H(k)!=="svelte-14tztva"&&(k.textContent=A),$.forEach(N),nt.forEach(N),this.h()},h(){T(o,"for","email"),T(u,"type","email"),T(u,"id","email"),T(u,"autocomplete","email"),T(g,"for","password"),T(E,"type","password"),T(E,"id","password"),T(E,"autocomplete","current-password"),T(s,"action","")},m(j,nt){Vt(j,t,nt),Vt(j,r,nt),Vt(j,i,nt),h(i,s),h(s,o),h(s,l),h(s,u),B(u,n[8]),h(s,c),h(s,f),h(s,d),h(s,g),h(s,R),h(s,E),B(E,n[9]),h(s,W),h(s,J),h(s,M),h(s,k),P||(x=[ut(u,"input",n[31]),ut(E,"input",n[32]),ut(k,"click",n[29])],P=!0)},p(j,nt){nt[0]&256&&u.value!==j[8]&&B(u,j[8]),nt[0]&512&&E.value!==j[9]&&B(E,j[9])},d(j){j&&(N(t),N(r),N(i)),P=!1,Ql(x)}}}function eI(n){let t,e=n[7].email+"",r,i,s,o="Sign out",a,l;return{c(){t=ht("Signed in as "),r=ht(e),i=y(),s=p("button"),s.textContent=o},l(u){t=dt(u,"Signed in as "),r=dt(u,e),i=v(u),s=m(u,"BUTTON",{"data-svelte-h":!0}),H(s)!=="svelte-6agn43"&&(s.textContent=o)},m(u,c){Vt(u,t,c),Vt(u,r,c),Vt(u,i,c),Vt(u,s,c),a||(l=ut(s,"click",n[30]),a=!0)},p(u,c){c[0]&128&&e!==(e=u[7].email+"")&&Jt(r,e)},d(u){u&&(N(t),N(r),N(i),N(s)),a=!1,l()}}}function id(n){let t,e,r,i,s,o,a="Remove",l,u,c;function f(){n[55].call(e,n[64],n[65])}function d(){n[56].call(i,n[64],n[65])}function g(){return n[57](n[65])}return{c(){t=p("div"),e=p("input"),r=y(),i=p("input"),s=y(),o=p("button"),o.textContent=a,l=y(),this.h()},l(b){t=m(b,"DIV",{});var R=Z(t);e=m(R,"INPUT",{type:!0,placeholder:!0}),r=v(R),i=m(R,"INPUT",{type:!0,placeholder:!0}),s=v(R),o=m(R,"BUTTON",{"data-svelte-h":!0}),H(o)!=="svelte-cieyql"&&(o.textContent=a),l=v(R),R.forEach(N),this.h()},h(){T(e,"type","text"),T(e,"placeholder","Expense Label"),T(i,"type","number"),T(i,"placeholder","Expense Amount")},m(b,R){Vt(b,t,R),h(t,e),B(e,n[63].label),h(t,r),h(t,i),B(i,n[63].amount),h(t,s),h(t,o),h(t,l),u||(c=[ut(e,"input",f),ut(i,"input",d),ut(o,"click",g)],u=!0)},p(b,R){n=b,R[0]&64&&e.value!==n[63].label&&B(e,n[63].label),R[0]&64&&it(i.value)!==n[63].amount&&B(i,n[63].amount)},d(b){b&&N(t),u=!1,Ql(c)}}}function nI(n){let t,e,r="Budget Calculator",i,s,o,a,l,u="Salary input",c,f,d,g,b="Person 1",R,E,W="Yearly Salary:",J,M,k,A,P,x,j="Expected Bonus (%):",nt,$,wt,ft,At,tt,ne,Dt,q="401k Contribution (%):",F,gt,ge,yn,Ke,re,Se="Healthcare FSA Contribution ($):",be,ie,he,_e,vn,de,Pe="Dependent Care FSA Contribution ($):",Ie,zt,Ge,fe,ae,En,We,xt,ke="Medical Deduction ($):",De,at,yt,Ne,Nt,le,Hn="Dental Deduction ($):",pt,vt,Ct,Ar,Tn,Oe,zn="Vision Deduction ($):",Cr,ue,Rr,Po,ko,D,Sr,nc="Person 2",Do,Kn,rc="Yearly Salary:",No,Qe,Oo,Vo,Lo,Gn,ic="Expected Bonus (%):",Mo,Ye,xo,Fo,Uo,Wn,sc="401k Contribution (%):",Bo,Je,jo,qo,Ho,Qn,oc="Healthcare FSA Contribution ($):",zo,$e,Ko,Go,Wo,Yn,ac="Dependent Care FSA Contribution ($):",Qo,Xe,Yo,Jo,$o,Xo,Zo,Jn,lc="Medical Deduction ($):",ta,Ze,ea,na,ra,$n,uc="Dental Deduction ($):",ia,tn,sa,oa,aa,Xn,cc="Vision Deduction ($):",la,en,ua,ca,ha,pe,Zn,hc="Current Year:",da,ye,nn,dc="-- Select Year --",rn,fc="2023",sn,pc="2024",fa,pa,ma,tr,mc="Current US State:",ga,ve,on,gc="-- Select State --",an,_c="New York (NY)",ln,yc="New Jersey (NJ)",_a,ya,va,Kt,Ea,br,vc="Bonus:",Ta,ui=mt(n[23])+"",cs,Ia,wa,Pr,Ec="401K Contribution:",Aa,ci=mt(n[24])+"",hs,Ca,kr,Ra,hi=mt(n[0]/12+n[3]/12)+"",ds,Sa,ba,Pa,ka,Da,er,Tc="Interval:",Na,In,Gt,Oa,Va,wn,Wt,La,Ma,An,Qt,xa,Fa,nr,di,Cn,Ua,we,Dr,Ic="Expenses",Ba,rr,wc="Add Expense",ja,ir,qa,Ha,Ac;function Cc(I,K){return I[7]?eI:tI}let fs=Cc(n),Ae=fs(n);Cn=new ZT({props:{currentState:n[20],currentYear:n[21],taxableIncome:n[26],health_care_fsa_contributions:[n[10],n[15]],dependent_care_fsa_contributions:[n[11],n[16]],yearlySalaries:[n[0],n[3]],contributionPercentages:[n[2],n[5]],interval:n[22],monthlyDentalContributions:[n[13]/12,n[18]/12],monthlyMedicalContributions:[n[12]/12,n[17]/12],monthlyVisionContributions:[n[14]/12,n[19]/12]}});let Nr=Ns(n[6]),Ft=[];for(let I=0;I<Nr.length;I+=1)Ft[I]=id(rd(n,Nr,I));return qa=tm(n[52][0]),{c(){t=p("main"),e=p("h1"),e.textContent=r,i=y(),s=p("section"),Ae.c(),o=y(),a=p("section"),l=p("h2"),l.textContent=u,c=y(),f=p("div"),d=p("div"),g=p("h3"),g.textContent=b,R=y(),E=p("label"),E.textContent=W,J=y(),M=p("input"),k=y(),A=p("br"),P=y(),x=p("label"),x.textContent=j,nt=y(),$=p("input"),wt=y(),ft=p("br"),At=y(),tt=p("br"),ne=y(),Dt=p("label"),Dt.textContent=q,F=y(),gt=p("input"),ge=y(),yn=p("br"),Ke=y(),re=p("label"),re.textContent=Se,be=y(),ie=p("input"),he=y(),_e=p("br"),vn=y(),de=p("label"),de.textContent=Pe,Ie=y(),zt=p("input"),Ge=y(),fe=p("br"),ae=y(),En=p("br"),We=y(),xt=p("label"),xt.textContent=ke,De=y(),at=p("input"),yt=y(),Ne=p("br"),Nt=y(),le=p("label"),le.textContent=Hn,pt=y(),vt=p("input"),Ct=y(),Ar=p("br"),Tn=y(),Oe=p("label"),Oe.textContent=zn,Cr=y(),ue=p("input"),Rr=y(),Po=p("br"),ko=y(),D=p("div"),Sr=p("h3"),Sr.textContent=nc,Do=y(),Kn=p("label"),Kn.textContent=rc,No=y(),Qe=p("input"),Oo=y(),Vo=p("br"),Lo=y(),Gn=p("label"),Gn.textContent=ic,Mo=y(),Ye=p("input"),xo=y(),Fo=p("br"),Uo=y(),Wn=p("label"),Wn.textContent=sc,Bo=y(),Je=p("input"),jo=y(),qo=p("br"),Ho=y(),Qn=p("label"),Qn.textContent=oc,zo=y(),$e=p("input"),Ko=y(),Go=p("br"),Wo=y(),Yn=p("label"),Yn.textContent=ac,Qo=y(),Xe=p("input"),Yo=y(),Jo=p("br"),$o=y(),Xo=p("br"),Zo=y(),Jn=p("label"),Jn.textContent=lc,ta=y(),Ze=p("input"),ea=y(),na=p("br"),ra=y(),$n=p("label"),$n.textContent=uc,ia=y(),tn=p("input"),sa=y(),oa=p("br"),aa=y(),Xn=p("label"),Xn.textContent=cc,la=y(),en=p("input"),ua=y(),ca=p("br"),ha=y(),pe=p("p"),Zn=p("label"),Zn.textContent=hc,da=y(),ye=p("select"),nn=p("option"),nn.textContent=dc,rn=p("option"),rn.textContent=fc,sn=p("option"),sn.textContent=pc,fa=y(),pa=p("br"),ma=y(),tr=p("label"),tr.textContent=mc,ga=y(),ve=p("select"),on=p("option"),on.textContent=gc,an=p("option"),an.textContent=_c,ln=p("option"),ln.textContent=yc,_a=y(),ya=p("hr"),va=y(),Kt=p("div"),Ea=p("br"),br=p("b"),br.textContent=vc,Ta=y(),cs=ht(ui),Ia=y(),wa=p("br"),Pr=p("b"),Pr.textContent=Ec,Aa=y(),hs=ht(ci),Ca=y(),kr=p("p"),Ra=ht("Gross Monthly Income: "),ds=ht(hi),Sa=y(),ba=p("hr"),Pa=y(),ka=p("br"),Da=y(),er=p("label"),er.textContent=Tc,Na=y(),In=p("label"),Gt=p("input"),Oa=ht(`
			Annual`),Va=y(),wn=p("label"),Wt=p("input"),La=ht(`
			Monthly`),Ma=y(),An=p("label"),Qt=p("input"),xa=ht(`
			Fortnightly`),Fa=y(),nr=p("div"),di=p("div"),sd(Cn.$$.fragment),Ua=y(),we=p("section"),Dr=p("h3"),Dr.textContent=Ic,Ba=y(),rr=p("button"),rr.textContent=wc,ja=y();for(let I=0;I<Ft.length;I+=1)Ft[I].c();this.h()},l(I){t=m(I,"MAIN",{class:!0});var K=Z(t);e=m(K,"H1",{"data-svelte-h":!0}),H(e)!=="svelte-u5wzxj"&&(e.textContent=r),i=v(K),s=m(K,"SECTION",{});var Q=Z(s);Ae.l(Q),o=v(Q),a=m(Q,"SECTION",{});var Ut=Z(a);l=m(Ut,"H2",{"data-svelte-h":!0}),H(l)!=="svelte-gzk6ig"&&(l.textContent=u),c=v(Ut),f=m(Ut,"DIV",{class:!0});var sr=Z(f);d=m(sr,"DIV",{});var O=Z(d);g=m(O,"H3",{"data-svelte-h":!0}),H(g)!=="svelte-goopbe"&&(g.textContent=b),R=v(O),E=m(O,"LABEL",{for:!0,"data-svelte-h":!0}),H(E)!=="svelte-908ltx"&&(E.textContent=W),J=v(O),M=m(O,"INPUT",{type:!0,id:!0}),k=v(O),A=m(O,"BR",{}),P=v(O),x=m(O,"LABEL",{for:!0,"data-svelte-h":!0}),H(x)!=="svelte-1cqojg7"&&(x.textContent=j),nt=v(O),$=m(O,"INPUT",{type:!0,id:!0}),wt=v(O),ft=m(O,"BR",{}),At=v(O),tt=m(O,"BR",{}),ne=v(O),Dt=m(O,"LABEL",{for:!0,"data-svelte-h":!0}),H(Dt)!=="svelte-1jizrnf"&&(Dt.textContent=q),F=v(O),gt=m(O,"INPUT",{type:!0,id:!0}),ge=v(O),yn=m(O,"BR",{}),Ke=v(O),re=m(O,"LABEL",{for:!0,"data-svelte-h":!0}),H(re)!=="svelte-euf23"&&(re.textContent=Se),be=v(O),ie=m(O,"INPUT",{type:!0,id:!0}),he=v(O),_e=m(O,"BR",{}),vn=v(O),de=m(O,"LABEL",{for:!0,"data-svelte-h":!0}),H(de)!=="svelte-1e2sjer"&&(de.textContent=Pe),Ie=v(O),zt=m(O,"INPUT",{type:!0,id:!0}),Ge=v(O),fe=m(O,"BR",{}),ae=v(O),En=m(O,"BR",{}),We=v(O),xt=m(O,"LABEL",{for:!0,"data-svelte-h":!0}),H(xt)!=="svelte-1wejyn7"&&(xt.textContent=ke),De=v(O),at=m(O,"INPUT",{type:!0,id:!0}),yt=v(O),Ne=m(O,"BR",{}),Nt=v(O),le=m(O,"LABEL",{for:!0,"data-svelte-h":!0}),H(le)!=="svelte-1v1rhud"&&(le.textContent=Hn),pt=v(O),vt=m(O,"INPUT",{type:!0,id:!0}),Ct=v(O),Ar=m(O,"BR",{}),Tn=v(O),Oe=m(O,"LABEL",{for:!0,"data-svelte-h":!0}),H(Oe)!=="svelte-zdn7gl"&&(Oe.textContent=zn),Cr=v(O),ue=m(O,"INPUT",{type:!0,id:!0}),Rr=v(O),Po=m(O,"BR",{}),O.forEach(N),ko=v(sr),D=m(sr,"DIV",{});var L=Z(D);Sr=m(L,"H3",{"data-svelte-h":!0}),H(Sr)!=="svelte-1a84iof"&&(Sr.textContent=nc),Do=v(L),Kn=m(L,"LABEL",{for:!0,"data-svelte-h":!0}),H(Kn)!=="svelte-mttl8q"&&(Kn.textContent=rc),No=v(L),Qe=m(L,"INPUT",{type:!0,id:!0}),Oo=v(L),Vo=m(L,"BR",{}),Lo=v(L),Gn=m(L,"LABEL",{for:!0,"data-svelte-h":!0}),H(Gn)!=="svelte-1weqosu"&&(Gn.textContent=ic),Mo=v(L),Ye=m(L,"INPUT",{type:!0,id:!0}),xo=v(L),Fo=m(L,"BR",{}),Uo=v(L),Wn=m(L,"LABEL",{for:!0,"data-svelte-h":!0}),H(Wn)!=="svelte-128ukag"&&(Wn.textContent=sc),Bo=v(L),Je=m(L,"INPUT",{type:!0,id:!0}),jo=v(L),qo=m(L,"BR",{}),Ho=v(L),Qn=m(L,"LABEL",{for:!0,"data-svelte-h":!0}),H(Qn)!=="svelte-euf23"&&(Qn.textContent=oc),zo=v(L),$e=m(L,"INPUT",{type:!0,id:!0}),Ko=v(L),Go=m(L,"BR",{}),Wo=v(L),Yn=m(L,"LABEL",{for:!0,"data-svelte-h":!0}),H(Yn)!=="svelte-1e2sjer"&&(Yn.textContent=ac),Qo=v(L),Xe=m(L,"INPUT",{type:!0,id:!0}),Yo=v(L),Jo=m(L,"BR",{}),$o=v(L),Xo=m(L,"BR",{}),Zo=v(L),Jn=m(L,"LABEL",{for:!0,"data-svelte-h":!0}),H(Jn)!=="svelte-1wejyn7"&&(Jn.textContent=lc),ta=v(L),Ze=m(L,"INPUT",{type:!0,id:!0}),ea=v(L),na=m(L,"BR",{}),ra=v(L),$n=m(L,"LABEL",{for:!0,"data-svelte-h":!0}),H($n)!=="svelte-1v1rhud"&&($n.textContent=uc),ia=v(L),tn=m(L,"INPUT",{type:!0,id:!0}),sa=v(L),oa=m(L,"BR",{}),aa=v(L),Xn=m(L,"LABEL",{for:!0,"data-svelte-h":!0}),H(Xn)!=="svelte-zdn7gl"&&(Xn.textContent=cc),la=v(L),en=m(L,"INPUT",{type:!0,id:!0}),ua=v(L),ca=m(L,"BR",{}),L.forEach(N),sr.forEach(N),Ut.forEach(N),ha=v(Q),pe=m(Q,"P",{});var Ve=Z(pe);Zn=m(Ve,"LABEL",{for:!0,"data-svelte-h":!0}),H(Zn)!=="svelte-17urc6i"&&(Zn.textContent=hc),da=v(Ve),ye=m(Ve,"SELECT",{id:!0});var ps=Z(ye);nn=m(ps,"OPTION",{"data-svelte-h":!0}),H(nn)!=="svelte-121j27n"&&(nn.textContent=dc),rn=m(ps,"OPTION",{"data-svelte-h":!0}),H(rn)!=="svelte-185o45e"&&(rn.textContent=fc),sn=m(ps,"OPTION",{"data-svelte-h":!0}),H(sn)!=="svelte-d7saby"&&(sn.textContent=pc),ps.forEach(N),fa=v(Ve),pa=m(Ve,"BR",{}),ma=v(Ve),tr=m(Ve,"LABEL",{for:!0,"data-svelte-h":!0}),H(tr)!=="svelte-x7pvh8"&&(tr.textContent=mc),ga=v(Ve),ve=m(Ve,"SELECT",{id:!0});var ms=Z(ve);on=m(ms,"OPTION",{"data-svelte-h":!0}),H(on)!=="svelte-30b5j3"&&(on.textContent=gc),an=m(ms,"OPTION",{"data-svelte-h":!0}),H(an)!=="svelte-14igjfs"&&(an.textContent=_c),ln=m(ms,"OPTION",{"data-svelte-h":!0}),H(ln)!=="svelte-1xli4ar"&&(ln.textContent=yc),ms.forEach(N),Ve.forEach(N),_a=v(Q),ya=m(Q,"HR",{}),va=v(Q),Kt=m(Q,"DIV",{class:!0});var Ee=Z(Kt);Ea=m(Ee,"BR",{}),br=m(Ee,"B",{"data-svelte-h":!0}),H(br)!=="svelte-1ydzksd"&&(br.textContent=vc),Ta=v(Ee),cs=dt(Ee,ui),Ia=v(Ee),wa=m(Ee,"BR",{}),Pr=m(Ee,"B",{"data-svelte-h":!0}),H(Pr)!=="svelte-8fadtk"&&(Pr.textContent=Ec),Aa=v(Ee),hs=dt(Ee,ci),Ca=v(Ee),kr=m(Ee,"P",{});var za=Z(kr);Ra=dt(za,"Gross Monthly Income: "),ds=dt(za,hi),za.forEach(N),Ee.forEach(N),Sa=v(Q),ba=m(Q,"HR",{}),Pa=v(Q),ka=m(Q,"BR",{}),Da=v(Q),er=m(Q,"LABEL",{for:!0,"data-svelte-h":!0}),H(er)!=="svelte-1o5vfq0"&&(er.textContent=Tc),Na=v(Q),In=m(Q,"LABEL",{class:!0,for:!0});var Ka=Z(In);Gt=m(Ka,"INPUT",{class:!0,type:!0,id:!0,name:!0}),Oa=dt(Ka,`
			Annual`),Ka.forEach(N),Va=v(Q),wn=m(Q,"LABEL",{class:!0,for:!0});var Ga=Z(wn);Wt=m(Ga,"INPUT",{class:!0,type:!0,id:!0,name:!0}),La=dt(Ga,`
			Monthly`),Ga.forEach(N),Ma=v(Q),An=m(Q,"LABEL",{class:!0,for:!0});var Wa=Z(An);Qt=m(Wa,"INPUT",{class:!0,type:!0,id:!0,name:!0}),xa=dt(Wa,`
			Fortnightly`),Wa.forEach(N),Fa=v(Q),nr=m(Q,"DIV",{id:!0,class:!0});var Rc=Z(nr);di=m(Rc,"DIV",{});var Sc=Z(di);od(Cn.$$.fragment,Sc),Sc.forEach(N),Rc.forEach(N),Ua=v(Q),we=m(Q,"SECTION",{style:!0});var Or=Z(we);Dr=m(Or,"H3",{"data-svelte-h":!0}),H(Dr)!=="svelte-11jkbap"&&(Dr.textContent=Ic),Ba=v(Or),rr=m(Or,"BUTTON",{"data-svelte-h":!0}),H(rr)!=="svelte-rmce5g"&&(rr.textContent=wc),ja=v(Or);for(let Qa=0;Qa<Ft.length;Qa+=1)Ft[Qa].l(Or);Or.forEach(N),Q.forEach(N),K.forEach(N),this.h()},h(){T(E,"for","yearlySalary1"),T(M,"type","number"),T(M,"id","yearlySalary1"),T(x,"for","bonusPercentage1"),T($,"type","number"),T($,"id","bonusPercentage1"),T(Dt,"for","contributionPercentage1"),T(gt,"type","number"),T(gt,"id","contributionPercentage1"),T(re,"for","healthCareContribution"),T(ie,"type","number"),T(ie,"id","healthCareContribution"),T(de,"for","dependentCareContribution"),T(zt,"type","number"),T(zt,"id","dependentCareContribution"),T(xt,"for","medicalDeduction"),T(at,"type","number"),T(at,"id","medicalDeduction"),T(le,"for","dentalDeduction"),T(vt,"type","number"),T(vt,"id","dentalDeduction"),T(Oe,"for","visionDeduction"),T(ue,"type","number"),T(ue,"id","visionDeduction"),T(Kn,"for","yearlySalary2"),T(Qe,"type","number"),T(Qe,"id","yearlySalary2"),T(Gn,"for","bonusPercentage2"),T(Ye,"type","number"),T(Ye,"id","bonusPercentage2"),T(Wn,"for","contributionPercentage2"),T(Je,"type","number"),T(Je,"id","contributionPercentage2"),T(Qn,"for","healthCareContribution"),T($e,"type","number"),T($e,"id","healthCareContribution"),T(Yn,"for","dependentCareContribution"),T(Xe,"type","number"),T(Xe,"id","dependentCareContribution"),T(Jn,"for","medicalDeduction"),T(Ze,"type","number"),T(Ze,"id","medicalDeduction"),T($n,"for","dentalDeduction"),T(tn,"type","number"),T(tn,"id","dentalDeduction"),T(Xn,"for","visionDeduction"),T(en,"type","number"),T(en,"id","visionDeduction"),T(f,"class","splitDisplay svelte-ug7cs4"),T(Zn,"for","currentYear"),nn.__value="",B(nn,nn.__value),rn.__value="2023",B(rn,rn.__value),sn.__value="2024",B(sn,sn.__value),T(ye,"id","currentYear"),n[21]===void 0&&Pc(()=>n[49].call(ye)),T(tr,"for","currentState"),on.__value="",B(on,on.__value),an.__value="New York",B(an,an.__value),ln.__value="New Jersey",B(ln,ln.__value),T(ve,"id","currentState"),n[20]===void 0&&Pc(()=>n[50].call(ve)),T(Kt,"class","splitDisplay svelte-ug7cs4"),T(er,"for","interval"),T(Gt,"class","interval svelte-ug7cs4"),T(Gt,"type","radio"),T(Gt,"id","annual"),T(Gt,"name","interval"),Gt.__value="annual",B(Gt,Gt.__value),T(In,"class","interval svelte-ug7cs4"),T(In,"for","annual"),T(Wt,"class","interval svelte-ug7cs4"),T(Wt,"type","radio"),T(Wt,"id","monthly"),T(Wt,"name","interval"),Wt.__value="monthly",B(Wt,Wt.__value),T(wn,"class","interval svelte-ug7cs4"),T(wn,"for","monthly"),T(Qt,"class","interval svelte-ug7cs4"),T(Qt,"type","radio"),T(Qt,"id","fortnightly"),T(Qt,"name","interval"),Qt.__value="fortnightly",B(Qt,Qt.__value),T(An,"class","interval svelte-ug7cs4"),T(An,"for","fortnightly"),T(nr,"id","taxDisplay"),T(nr,"class","svelte-ug7cs4"),or(we,"display","none"),T(t,"class","svelte-ug7cs4"),qa.p(Gt,Wt,Qt)},m(I,K){Vt(I,t,K),h(t,e),h(t,i),h(t,s),Ae.m(s,null),h(s,o),h(s,a),h(a,l),h(a,c),h(a,f),h(f,d),h(d,g),h(d,R),h(d,E),h(d,J),h(d,M),B(M,n[0]),h(d,k),h(d,A),h(d,P),h(d,x),h(d,nt),h(d,$),B($,n[1]),h(d,wt),h(d,ft),h(d,At),h(d,tt),h(d,ne),h(d,Dt),h(d,F),h(d,gt),B(gt,n[2]),h(d,ge),h(d,yn),h(d,Ke),h(d,re),h(d,be),h(d,ie),B(ie,n[10]),h(d,he),h(d,_e),h(d,vn),h(d,de),h(d,Ie),h(d,zt),B(zt,n[11]),h(d,Ge),h(d,fe),h(d,ae),h(d,En),h(d,We),h(d,xt),h(d,De),h(d,at),B(at,n[12]),h(d,yt),h(d,Ne),h(d,Nt),h(d,le),h(d,pt),h(d,vt),B(vt,n[13]),h(d,Ct),h(d,Ar),h(d,Tn),h(d,Oe),h(d,Cr),h(d,ue),B(ue,n[14]),h(d,Rr),h(d,Po),h(f,ko),h(f,D),h(D,Sr),h(D,Do),h(D,Kn),h(D,No),h(D,Qe),B(Qe,n[3]),h(D,Oo),h(D,Vo),h(D,Lo),h(D,Gn),h(D,Mo),h(D,Ye),B(Ye,n[4]),h(D,xo),h(D,Fo),h(D,Uo),h(D,Wn),h(D,Bo),h(D,Je),B(Je,n[5]),h(D,jo),h(D,qo),h(D,Ho),h(D,Qn),h(D,zo),h(D,$e),B($e,n[15]),h(D,Ko),h(D,Go),h(D,Wo),h(D,Yn),h(D,Qo),h(D,Xe),B(Xe,n[16]),h(D,Yo),h(D,Jo),h(D,$o),h(D,Xo),h(D,Zo),h(D,Jn),h(D,ta),h(D,Ze),B(Ze,n[17]),h(D,ea),h(D,na),h(D,ra),h(D,$n),h(D,ia),h(D,tn),B(tn,n[18]),h(D,sa),h(D,oa),h(D,aa),h(D,Xn),h(D,la),h(D,en),B(en,n[19]),h(D,ua),h(D,ca),h(s,ha),h(s,pe),h(pe,Zn),h(pe,da),h(pe,ye),h(ye,nn),h(ye,rn),h(ye,sn),gs(ye,n[21],!0),h(pe,fa),h(pe,pa),h(pe,ma),h(pe,tr),h(pe,ga),h(pe,ve),h(ve,on),h(ve,an),h(ve,ln),gs(ve,n[20],!0),h(s,_a),h(s,ya),h(s,va),h(s,Kt),h(Kt,Ea),h(Kt,br),h(Kt,Ta),h(Kt,cs),h(Kt,Ia),h(Kt,wa),h(Kt,Pr),h(Kt,Aa),h(Kt,hs),h(Kt,Ca),h(Kt,kr),h(kr,Ra),h(kr,ds),h(s,Sa),h(s,ba),h(s,Pa),h(s,ka),h(s,Da),h(s,er),h(s,Na),h(s,In),h(In,Gt),Gt.checked=Gt.__value===n[22],h(In,Oa),h(s,Va),h(s,wn),h(wn,Wt),Wt.checked=Wt.__value===n[22],h(wn,La),h(s,Ma),h(s,An),h(An,Qt),Qt.checked=Qt.__value===n[22],h(An,xa),h(s,Fa),h(s,nr),h(nr,di),ad(Cn,di,null),h(s,Ua),h(s,we),h(we,Dr),h(we,Ba),h(we,rr),h(we,ja);for(let Q=0;Q<Ft.length;Q+=1)Ft[Q]&&Ft[Q].m(we,null);ir=!0,Ha||(Ac=[ut(M,"input",n[33]),ut($,"input",n[34]),ut(gt,"input",n[35]),ut(ie,"input",n[36]),ut(zt,"input",n[37]),ut(at,"input",n[38]),ut(vt,"input",n[39]),ut(ue,"input",n[40]),ut(Qe,"input",n[41]),ut(Ye,"input",n[42]),ut(Je,"input",n[43]),ut($e,"input",n[44]),ut(Xe,"input",n[45]),ut(Ze,"input",n[46]),ut(tn,"input",n[47]),ut(en,"input",n[48]),ut(ye,"change",n[49]),ut(ve,"change",n[50]),ut(Gt,"change",n[51]),ut(Wt,"change",n[53]),ut(Qt,"change",n[54]),ut(rr,"click",n[27])],Ha=!0)},p(I,K){fs===(fs=Cc(I))&&Ae?Ae.p(I,K):(Ae.d(1),Ae=fs(I),Ae&&(Ae.c(),Ae.m(s,o))),K[0]&1&&it(M.value)!==I[0]&&B(M,I[0]),K[0]&2&&it($.value)!==I[1]&&B($,I[1]),K[0]&4&&it(gt.value)!==I[2]&&B(gt,I[2]),K[0]&1024&&it(ie.value)!==I[10]&&B(ie,I[10]),K[0]&2048&&it(zt.value)!==I[11]&&B(zt,I[11]),K[0]&4096&&it(at.value)!==I[12]&&B(at,I[12]),K[0]&8192&&it(vt.value)!==I[13]&&B(vt,I[13]),K[0]&16384&&it(ue.value)!==I[14]&&B(ue,I[14]),K[0]&8&&it(Qe.value)!==I[3]&&B(Qe,I[3]),K[0]&16&&it(Ye.value)!==I[4]&&B(Ye,I[4]),K[0]&32&&it(Je.value)!==I[5]&&B(Je,I[5]),K[0]&32768&&it($e.value)!==I[15]&&B($e,I[15]),K[0]&65536&&it(Xe.value)!==I[16]&&B(Xe,I[16]),K[0]&131072&&it(Ze.value)!==I[17]&&B(Ze,I[17]),K[0]&262144&&it(tn.value)!==I[18]&&B(tn,I[18]),K[0]&524288&&it(en.value)!==I[19]&&B(en,I[19]),K[0]&2097152&&gs(ye,I[21]),K[0]&1048576&&gs(ve,I[20]),(!ir||K[0]&8388608)&&ui!==(ui=mt(I[23])+"")&&Jt(cs,ui),(!ir||K[0]&16777216)&&ci!==(ci=mt(I[24])+"")&&Jt(hs,ci),(!ir||K[0]&9)&&hi!==(hi=mt(I[0]/12+I[3]/12)+"")&&Jt(ds,hi),K[0]&4194304&&(Gt.checked=Gt.__value===I[22]),K[0]&4194304&&(Wt.checked=Wt.__value===I[22]),K[0]&4194304&&(Qt.checked=Qt.__value===I[22]);const Q={};if(K[0]&1048576&&(Q.currentState=I[20]),K[0]&2097152&&(Q.currentYear=I[21]),K[0]&33792&&(Q.health_care_fsa_contributions=[I[10],I[15]]),K[0]&67584&&(Q.dependent_care_fsa_contributions=[I[11],I[16]]),K[0]&9&&(Q.yearlySalaries=[I[0],I[3]]),K[0]&36&&(Q.contributionPercentages=[I[2],I[5]]),K[0]&4194304&&(Q.interval=I[22]),K[0]&270336&&(Q.monthlyDentalContributions=[I[13]/12,I[18]/12]),K[0]&135168&&(Q.monthlyMedicalContributions=[I[12]/12,I[17]/12]),K[0]&540672&&(Q.monthlyVisionContributions=[I[14]/12,I[19]/12]),Cn.$set(Q),K[0]&268435520){Nr=Ns(I[6]);let Ut;for(Ut=0;Ut<Nr.length;Ut+=1){const sr=rd(I,Nr,Ut);Ft[Ut]?Ft[Ut].p(sr,K):(Ft[Ut]=id(sr),Ft[Ut].c(),Ft[Ut].m(we,null))}for(;Ut<Ft.length;Ut+=1)Ft[Ut].d(1);Ft.length=Nr.length}},i(I){ir||(ld(Cn.$$.fragment,I),ir=!0)},o(I){ud(Cn.$$.fragment,I),ir=!1},d(I){I&&N(t),Ae.d(),hd(Cn),cd(Ft,I),qa.r(),Ha=!1,Ql(Ac)}}}function rI(n,t,e){const i=Td({apiKey:"AIzaSyC_wqKaOmHf0Nq31JOZtCt3pSQN_m1FOLk",authDomain:"budget-e231f.firebaseapp.com",projectId:"budget-e231f",storageBucket:"budget-e231f.appspot.com",messagingSenderId:"324153005171",appId:"1:324153005171:web:1a3196daf6a3b148b94606"}),s=Gy(i),o=DT(i);let a=s.currentUser,l,u,c=1e5,f=5,d=3,g=100,b=100,R=1234,E=123,W=12,J=0,M=0,k=0,A=0,P=0,x=0,j=0,nt=0,$="New Jersey",wt="2024",ft="annual",At=[],tt,ne,Dt;Zp(()=>{const pt=WT("expenses");e(6,At=pt?JSON.parse(pt):[])});function q(){e(6,At=[...At,{label:"",amount:0}])}function F(pt){e(6,At=At.filter((vt,Ct)=>Ct!==pt))}function gt(){if(!l||!u)return console.log("Email and password are required");D_(s,l,u).then(pt=>{const vt=pt.user;console.log(vt)}).catch(pt=>{console.log(pt)})}V_(s,async pt=>{if(pt){e(7,a=pt);const vt=await BT(PT(o,"users",pt.uid)),Ct=vt.data();Ct&&(e(2,d=Ct["401k_contribution_1"]),e(10,g=Ct.healthcare_fsa_contribution_1),e(11,b=Ct.dependent_care_fsa_contribution_1),e(12,R=Ct.annual_medical_deduction_1),e(13,E=Ct.annual_dental_deduction_1),e(14,W??(W=Ct.annual_vision_deduction_1)),e(0,c=Ct.yearly_salary_1??c),e(1,f=Ct.expected_bonus_1)),console.log(vt.data())}else e(7,a=null)});const ge=[[]],yn=()=>s.signOut();function Ke(){l=this.value,e(8,l)}function re(){u=this.value,e(9,u)}function Se(){c=it(this.value),e(0,c)}function be(){f=it(this.value),e(1,f)}function ie(){d=it(this.value),e(2,d)}function he(){g=it(this.value),e(10,g)}function _e(){b=it(this.value),e(11,b)}function vn(){R=it(this.value),e(12,R)}function de(){E=it(this.value),e(13,E)}function Pe(){W=it(this.value),e(14,W)}function Ie(){J=it(this.value),e(3,J)}function zt(){M=it(this.value),e(4,M)}function Ge(){k=it(this.value),e(5,k)}function fe(){A=it(this.value),e(15,A)}function ae(){P=it(this.value),e(16,P)}function En(){x=it(this.value),e(17,x)}function We(){j=it(this.value),e(18,j)}function xt(){nt=it(this.value),e(19,nt)}function ke(){wt=kc(this),e(21,wt)}function De(){$=kc(this),e(20,$)}function at(){ft=this.__value,e(22,ft)}function yt(){ft=this.__value,e(22,ft)}function Ne(){ft=this.__value,e(22,ft)}function Nt(pt,vt){pt[vt].label=this.value,e(6,At)}function le(pt,vt){pt[vt].amount=it(this.value),e(6,At)}const Hn=pt=>F(pt);return n.$$.update=()=>{n.$$.dirty[0]&63&&(e(23,tt=c*(f/100)),e(24,ne=c*(d/100))),n.$$.dirty[0]&64&&GT("expenses",JSON.stringify(At))},[c,f,d,J,M,k,At,a,l,u,g,b,R,E,W,A,P,x,j,nt,$,wt,ft,tt,ne,s,Dt,q,F,gt,yn,Ke,re,Se,be,ie,he,_e,vn,de,Pe,Ie,zt,Ge,fe,ae,En,We,xt,ke,De,at,ge,yt,Ne,Nt,le,Hn]}class uI extends Yl{constructor(t){super(),Jl(this,t,rI,nI,Wl,{},null,[-1,-1,-1])}}export{uI as component};
