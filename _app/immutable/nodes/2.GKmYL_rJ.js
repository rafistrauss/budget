import{s as dl,n as zu,k as Hu,r as fl,o as dp}from"../chunks/scheduler.zMJaRgub.js";import{S as pl,i as ml,e as m,b as at,s as v,c as g,d as Y,f as lt,g as O,h as E,y as q,p as En,j as Mt,k as h,l as Gt,u as vh,v as Eh,w as Th,t as Ih,a as wh,x as Ah,z as fp,o as C,A as G,B as ss,C as dt,D as ft,E as pp,F as Ku}from"../chunks/index.DYQo7L2x.js";function Gu(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}var Wu={};/**
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
 */const Ch=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},mp=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const i=n[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[e++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[e++],o=n[e++],a=n[e++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const s=n[e++],o=n[e++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},Rh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,l=i+2<n.length,u=l?n[i+2]:0,c=s>>2,f=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,p=u&63;l||(p=64,o||(d=64)),r.push(e[c],e[f],e[d],e[p])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Ch(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):mp(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=e[n.charAt(i++)],a=i<n.length?e[n.charAt(i)]:0;++i;const u=i<n.length?e[n.charAt(i)]:64;++i;const f=i<n.length?e[n.charAt(i)]:64;if(++i,s==null||a==null||u==null||f==null)throw new gp;const d=s<<2|a>>4;if(r.push(d),u!==64){const p=a<<4&240|u>>2;if(r.push(p),f!==64){const A=u<<6&192|f;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class gp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _p=function(n){const t=Ch(n);return Rh.encodeByteArray(t,!0)},Ts=function(n){return _p(n).replace(/\./g,"")},Sh=function(n){try{return Rh.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function yp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const vp=()=>yp().__FIREBASE_DEFAULTS__,Ep=()=>{if(typeof process>"u"||typeof Wu>"u")return;const n=Wu.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Tp=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Sh(n[1]);return t&&JSON.parse(t)},Bs=()=>{try{return vp()||Ep()||Tp()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ph=n=>{var t,e;return(e=(t=Bs())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Ip=n=>{const t=Ph(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},bh=()=>{var n;return(n=Bs())===null||n===void 0?void 0:n.config},kh=n=>{var t;return(t=Bs())===null||t===void 0?void 0:t[`_${n}`]};/**
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
 */class wp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function Ap(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ts(JSON.stringify(e)),Ts(JSON.stringify(o)),""].join(".")}/**
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
 */function At(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Cp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(At())}function Rp(){var n;const t=(n=Bs())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Sp(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Pp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function bp(){const n=At();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function kp(){return!Rp()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Dh(){try{return typeof indexedDB=="object"}catch{return!1}}function Dp(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(e){t(e)}})}/**
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
 */const Np="FirebaseError";class on extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Np,Object.setPrototypeOf(this,on.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Mi.prototype.create)}}class Mi{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?Op(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new on(i,a,r)}}function Op(n,t){return n.replace(Vp,(e,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Vp=/\{\$([^}]+)}/g;function Lp(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}function Is(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const i of e){if(!r.includes(i))return!1;const s=n[i],o=t[i];if(Qu(s)&&Qu(o)){if(!Is(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!e.includes(i))return!1;return!0}function Qu(n){return n!==null&&typeof n=="object"}/**
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
 */function xi(n){const t=[];for(const[e,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function oi(n){const t={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(s)}}),t}function ai(n){const t=n.indexOf("?");if(!t)return"";const e=n.indexOf("#",t);return n.substring(t,e>0?e:void 0)}function Mp(n,t){const e=new xp(n,t);return e.subscribe.bind(e)}class xp{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,r){let i;if(t===void 0&&e===void 0&&r===void 0)throw new Error("Missing Observer.");Fp(t,["next","error","complete"])?i=t:i={next:t,error:e,complete:r},i.next===void 0&&(i.next=pa),i.error===void 0&&(i.error=pa),i.complete===void 0&&(i.complete=pa);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Fp(n,t){if(typeof n!="object"||n===null)return!1;for(const e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function pa(){}/**
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
 */function an(n){return n&&n._delegate?n._delegate:n}class rr{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Qn="[DEFAULT]";/**
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
 */class Up{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new wp;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(jp(t))try{this.getOrInitializeService({instanceIdentifier:Qn})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=Qn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Qn){return this.instances.has(t)}getOptions(t=Qn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,e){var r;const i=this.normalizeInstanceIdentifier(e),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const i of r)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Bp(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Qn){return this.component?this.component.multipleInstances?t:Qn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Bp(n){return n===Qn?void 0:n}function jp(n){return n.instantiationMode==="EAGER"}/**
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
 */class qp{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Up(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var J;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(J||(J={}));const zp={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},Hp=J.INFO,Kp={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},Gp=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),i=Kp[t];if(i)console[i](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class gl{constructor(t){this.name=t,this._logLevel=Hp,this._logHandler=Gp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in J))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?zp[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...t),this._logHandler(this,J.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...t),this._logHandler(this,J.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,J.INFO,...t),this._logHandler(this,J.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,J.WARN,...t),this._logHandler(this,J.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...t),this._logHandler(this,J.ERROR,...t)}}const Wp=(n,t)=>t.some(e=>n instanceof e);let Yu,Ju;function Qp(){return Yu||(Yu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Yp(){return Ju||(Ju=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Nh=new WeakMap,Va=new WeakMap,Oh=new WeakMap,ma=new WeakMap,_l=new WeakMap;function Jp(n){const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{e(Sn(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return t.then(e=>{e instanceof IDBCursor&&Nh.set(e,n)}).catch(()=>{}),_l.set(t,n),t}function $p(n){if(Va.has(n))return;const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{e(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});Va.set(n,t)}let La={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Va.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Oh.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Sn(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Xp(n){La=n(La)}function Zp(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(ga(this),t,...e);return Oh.set(r,t.sort?t.sort():[t]),Sn(r)}:Yp().includes(n)?function(...t){return n.apply(ga(this),t),Sn(Nh.get(this))}:function(...t){return Sn(n.apply(ga(this),t))}}function tm(n){return typeof n=="function"?Zp(n):(n instanceof IDBTransaction&&$p(n),Wp(n,Qp())?new Proxy(n,La):n)}function Sn(n){if(n instanceof IDBRequest)return Jp(n);if(ma.has(n))return ma.get(n);const t=tm(n);return t!==n&&(ma.set(n,t),_l.set(t,n)),t}const ga=n=>_l.get(n);function em(n,t,{blocked:e,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,t),a=Sn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Sn(o.result),l.oldVersion,l.newVersion,Sn(o.transaction),l)}),e&&o.addEventListener("blocked",l=>e(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const nm=["get","getKey","getAll","getAllKeys","count"],rm=["put","add","delete","clear"],_a=new Map;function $u(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(_a.get(t))return _a.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,i=rm.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(i||nm.includes(e)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[e](...a),i&&l.done]))[0]};return _a.set(t,s),s}Xp(n=>({...n,get:(t,e,r)=>$u(t,e)||n.get(t,e,r),has:(t,e)=>!!$u(t,e)||n.has(t,e)}));/**
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
 */class im{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(sm(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function sm(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ma="@firebase/app",Xu="0.9.26";/**
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
 */const ir=new gl("@firebase/app"),om="@firebase/app-compat",am="@firebase/analytics-compat",lm="@firebase/analytics",um="@firebase/app-check-compat",cm="@firebase/app-check",hm="@firebase/auth",dm="@firebase/auth-compat",fm="@firebase/database",pm="@firebase/database-compat",mm="@firebase/functions",gm="@firebase/functions-compat",_m="@firebase/installations",ym="@firebase/installations-compat",vm="@firebase/messaging",Em="@firebase/messaging-compat",Tm="@firebase/performance",Im="@firebase/performance-compat",wm="@firebase/remote-config",Am="@firebase/remote-config-compat",Cm="@firebase/storage",Rm="@firebase/storage-compat",Sm="@firebase/firestore",Pm="@firebase/firestore-compat",bm="firebase",km="10.7.2";/**
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
 */const xa="[DEFAULT]",Dm={[Ma]:"fire-core",[om]:"fire-core-compat",[lm]:"fire-analytics",[am]:"fire-analytics-compat",[cm]:"fire-app-check",[um]:"fire-app-check-compat",[hm]:"fire-auth",[dm]:"fire-auth-compat",[fm]:"fire-rtdb",[pm]:"fire-rtdb-compat",[mm]:"fire-fn",[gm]:"fire-fn-compat",[_m]:"fire-iid",[ym]:"fire-iid-compat",[vm]:"fire-fcm",[Em]:"fire-fcm-compat",[Tm]:"fire-perf",[Im]:"fire-perf-compat",[wm]:"fire-rc",[Am]:"fire-rc-compat",[Cm]:"fire-gcs",[Rm]:"fire-gcs-compat",[Sm]:"fire-fst",[Pm]:"fire-fst-compat","fire-js":"fire-js",[bm]:"fire-js-all"};/**
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
 */const ws=new Map,Fa=new Map;function Nm(n,t){try{n.container.addComponent(t)}catch(e){ir.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Vr(n){const t=n.name;if(Fa.has(t))return ir.debug(`There were multiple attempts to register component ${t}.`),!1;Fa.set(t,n);for(const e of ws.values())Nm(e,n);return!0}function yl(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
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
 */const Om={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Pn=new Mi("app","Firebase",Om);/**
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
 */class Vm{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new rr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Pn.create("app-deleted",{appName:this._name})}}/**
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
 */const zr=km;function Vh(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:xa,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Pn.create("bad-app-name",{appName:String(i)});if(e||(e=bh()),!e)throw Pn.create("no-options");const s=ws.get(i);if(s){if(Is(e,s.options)&&Is(r,s.config))return s;throw Pn.create("duplicate-app",{appName:i})}const o=new qp(i);for(const l of Fa.values())o.addComponent(l);const a=new Vm(e,r,o);return ws.set(i,a),a}function Lh(n=xa){const t=ws.get(n);if(!t&&n===xa&&bh())return Vh();if(!t)throw Pn.create("no-app",{appName:n});return t}function bn(n,t,e){var r;let i=(r=Dm[n])!==null&&r!==void 0?r:n;e&&(i+=`-${e}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ir.warn(a.join(" "));return}Vr(new rr(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const Lm="firebase-heartbeat-database",Mm=1,vi="firebase-heartbeat-store";let ya=null;function Mh(){return ya||(ya=em(Lm,Mm,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(vi)}catch(e){console.warn(e)}}}}).catch(n=>{throw Pn.create("idb-open",{originalErrorMessage:n.message})})),ya}async function xm(n){try{return await(await Mh()).transaction(vi).objectStore(vi).get(xh(n))}catch(t){if(t instanceof on)ir.warn(t.message);else{const e=Pn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});ir.warn(e.message)}}}async function Zu(n,t){try{const r=(await Mh()).transaction(vi,"readwrite");await r.objectStore(vi).put(t,xh(n)),await r.done}catch(e){if(e instanceof on)ir.warn(e.message);else{const r=Pn.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});ir.warn(r.message)}}}function xh(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Fm=1024,Um=30*24*60*60*1e3;class Bm{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new qm(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=tc();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Um}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=tc(),{heartbeatsToSend:r,unsentEntries:i}=jm(this._heartbeatsCache.heartbeats),s=Ts(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function tc(){return new Date().toISOString().substring(0,10)}function jm(n,t=Fm){const e=[];let r=n.slice();for(const i of n){const s=e.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),ec(e)>t){s.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),ec(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class qm{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Dh()?Dp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await xm(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Zu(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Zu(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function ec(n){return Ts(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function zm(n){Vr(new rr("platform-logger",t=>new im(t),"PRIVATE")),Vr(new rr("heartbeat",t=>new Bm(t),"PRIVATE")),bn(Ma,Xu,n),bn(Ma,Xu,"esm2017"),bn("fire-js","")}zm("");var Hm="firebase",Km="10.7.2";/**
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
 */bn(Hm,Km,"app");function vl(n,t){var e={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.indexOf(r)<0&&(e[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(e[r[i]]=n[r[i]]);return e}function Fh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Gm=Fh,Uh=new Mi("auth","Firebase",Fh());/**
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
 */const As=new gl("@firebase/auth");function Wm(n,...t){As.logLevel<=J.WARN&&As.warn(`Auth (${zr}): ${n}`,...t)}function ms(n,...t){As.logLevel<=J.ERROR&&As.error(`Auth (${zr}): ${n}`,...t)}/**
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
 */function Re(n,...t){throw El(n,...t)}function Ue(n,...t){return El(n,...t)}function Qm(n,t,e){const r=Object.assign(Object.assign({},Gm()),{[t]:e});return new Mi("auth","Firebase",r).create(t,{appName:n.name})}function El(n,...t){if(typeof n!="string"){const e=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(e,...r)}return Uh.create(n,...t)}function x(n,t,...e){if(!n)throw El(t,...e)}function Ze(n){const t="INTERNAL ASSERTION FAILED: "+n;throw ms(t),new Error(t)}function rn(n,t){n||Ze(t)}/**
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
 */function Ua(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Ym(){return nc()==="http:"||nc()==="https:"}function nc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Jm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ym()||Sp()||"connection"in navigator)?navigator.onLine:!0}function $m(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Fi{constructor(t,e){this.shortDelay=t,this.longDelay=e,rn(e>t,"Short delay should be less than long delay!"),this.isMobile=Cp()||Pp()}get(){return Jm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Tl(n,t){rn(n.emulator,"Emulator should always be set here");const{url:e}=n.emulator;return t?`${e}${t.startsWith("/")?t.slice(1):t}`:e}/**
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
 */class Bh{static initialize(t,e,r){this.fetchImpl=t,e&&(this.headersImpl=e),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ze("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ze("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ze("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Xm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Zm=new Fi(3e4,6e4);function ur(n,t){return n.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:n.tenantId}):t}async function Vn(n,t,e,r,i={}){return jh(n,i,async()=>{let s={},o={};r&&(t==="GET"?o=r:s={body:JSON.stringify(r)});const a=xi(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),Bh.fetch()(qh(n,n.config.apiHost,e,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},s))})}async function jh(n,t,e){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Xm),t);try{const i=new eg(n),s=await Promise.race([e(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw os(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw os(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw os(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw os(n,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Qm(n,c,u);Re(n,c)}}catch(i){if(i instanceof on)throw i;Re(n,"network-request-failed",{message:String(i)})}}async function js(n,t,e,r,i={}){const s=await Vn(n,t,e,r,i);return"mfaPendingCredential"in s&&Re(n,"multi-factor-auth-required",{_serverResponse:s}),s}function qh(n,t,e,r){const i=`${t}${e}?${r}`;return n.config.emulator?Tl(n.config,i):`${n.config.apiScheme}://${i}`}function tg(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class eg{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((e,r)=>{this.timer=setTimeout(()=>r(Ue(this.auth,"network-request-failed")),Zm.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function os(n,t,e){const r={appName:n.name};e.email&&(r.email=e.email),e.phoneNumber&&(r.phoneNumber=e.phoneNumber);const i=Ue(n,t,r);return i.customData._tokenResponse=e,i}function rc(n){return n!==void 0&&n.enterprise!==void 0}class ng{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const e of this.recaptchaEnforcementState)if(e.provider&&e.provider===t)return tg(e.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function rg(n,t){return Vn(n,"GET","/v2/recaptchaConfig",ur(n,t))}/**
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
 */async function ig(n,t){return Vn(n,"POST","/v1/accounts:delete",t)}async function sg(n,t){return Vn(n,"POST","/v1/accounts:lookup",t)}/**
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
 */function di(n){if(n)try{const t=new Date(Number(n));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function og(n,t=!1){const e=an(n),r=await e.getIdToken(t),i=Il(r);x(i&&i.exp&&i.auth_time&&i.iat,e.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:di(va(i.auth_time)),issuedAtTime:di(va(i.iat)),expirationTime:di(va(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function va(n){return Number(n)*1e3}function Il(n){const[t,e,r]=n.split(".");if(t===void 0||e===void 0||r===void 0)return ms("JWT malformed, contained fewer than 3 sections"),null;try{const i=Sh(e);return i?JSON.parse(i):(ms("Failed to decode base64 JWT payload"),null)}catch(i){return ms("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function ag(n){const t=Il(n);return x(t,"internal-error"),x(typeof t.exp<"u","internal-error"),x(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Ei(n,t,e=!1){if(e)return t;try{return await t}catch(r){throw r instanceof on&&lg(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function lg({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class ug{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((e=this.user.stsTokenManager.expirationTime)!==null&&e!==void 0?e:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class zh{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=di(this.lastLoginAt),this.creationTime=di(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Cs(n){var t;const e=n.auth,r=await n.getIdToken(),i=await Ei(n,sg(e,{idToken:r}));x(i==null?void 0:i.users.length,e,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?dg(s.providerUserInfo):[],a=hg(n.providerData,o),l=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new zh(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(n,f)}async function cg(n){const t=an(n);await Cs(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function hg(n,t){return[...n.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function dg(n){return n.map(t=>{var{providerId:e}=t,r=vl(t,["providerId"]);return{providerId:e,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function fg(n,t){const e=await jh(n,{},async()=>{const r=xi({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=qh(n,i,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Bh.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}async function pg(n,t){return Vn(n,"POST","/v2/accounts:revokeToken",ur(n,t))}/**
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
 */class Ti{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){x(t.idToken,"internal-error"),x(typeof t.idToken<"u","internal-error"),x(typeof t.refreshToken<"u","internal-error");const e="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):ag(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return x(!this.accessToken||this.refreshToken,t,"user-token-expired"),!e&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:r,refreshToken:i,expiresIn:s}=await fg(t,e);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,e,r){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,e){const{refreshToken:r,accessToken:i,expirationTime:s}=e,o=new Ti;return r&&(x(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(x(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),s&&(x(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Ti,this.toJSON())}_performRefresh(){return Ze("not implemented")}}/**
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
 */function vn(n,t){x(typeof n=="string"||typeof n>"u","internal-error",{appName:t})}class tr{constructor(t){var{uid:e,auth:r,stsTokenManager:i}=t,s=vl(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ug(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new zh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const e=await Ei(this,this.stsTokenManager.getToken(this.auth,t));return x(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return og(this,t)}reload(){return cg(this)}_assign(t){this!==t&&(x(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(e=>Object.assign({},e)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new tr(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){x(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),e&&await Cs(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Ei(this,ig(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var r,i,s,o,a,l,u,c;const f=(r=e.displayName)!==null&&r!==void 0?r:void 0,d=(i=e.email)!==null&&i!==void 0?i:void 0,p=(s=e.phoneNumber)!==null&&s!==void 0?s:void 0,A=(o=e.photoURL)!==null&&o!==void 0?o:void 0,I=(a=e.tenantId)!==null&&a!==void 0?a:void 0,y=(l=e._redirectEventId)!==null&&l!==void 0?l:void 0,j=(u=e.createdAt)!==null&&u!==void 0?u:void 0,W=(c=e.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:L,emailVerified:U,isAnonymous:$,providerData:b,stsTokenManager:P}=e;x(L&&P,t,"internal-error");const M=Ti.fromJSON(this.name,P);x(typeof L=="string",t,"internal-error"),vn(f,t.name),vn(d,t.name),x(typeof U=="boolean",t,"internal-error"),x(typeof $=="boolean",t,"internal-error"),vn(p,t.name),vn(A,t.name),vn(I,t.name),vn(y,t.name),vn(j,t.name),vn(W,t.name);const et=new tr({uid:L,auth:t,email:d,emailVerified:U,displayName:f,isAnonymous:$,photoURL:A,phoneNumber:p,tenantId:I,stsTokenManager:M,createdAt:j,lastLoginAt:W});return b&&Array.isArray(b)&&(et.providerData=b.map(K=>Object.assign({},K))),y&&(et._redirectEventId=y),et}static async _fromIdTokenResponse(t,e,r=!1){const i=new Ti;i.updateFromServerResponse(e);const s=new tr({uid:e.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Cs(s),s}}/**
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
 */const ic=new Map;function tn(n){rn(n instanceof Function,"Expected a class definition");let t=ic.get(n);return t?(rn(t instanceof n,"Instance stored in cache mismatched with class"),t):(t=new n,ic.set(n,t),t)}/**
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
 */class Hh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return e===void 0?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}Hh.type="NONE";const sc=Hh;/**
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
 */function gs(n,t,e){return`firebase:${n}:${t}:${e}`}class Pr{constructor(t,e,r){this.persistence=t,this.auth=e,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=gs(this.userKey,i.apiKey,s),this.fullPersistenceKey=gs("persistence",i.apiKey,s),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?tr._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,e)return this.setCurrentUser(e)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,r="authUser"){if(!e.length)return new Pr(tn(sc),t,r);const i=(await Promise.all(e.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||tn(sc);const o=gs(r,t.config.apiKey,t.name);let a=null;for(const u of e)try{const c=await u._get(o);if(c){const f=tr._fromJSON(t,c);u!==s&&(a=f),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Pr(s,t,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(e.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Pr(s,t,r))}}/**
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
 */function oc(n){const t=n.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Wh(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Kh(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Yh(t))return"Blackberry";if(Jh(t))return"Webos";if(wl(t))return"Safari";if((t.includes("chrome/")||Gh(t))&&!t.includes("edge/"))return"Chrome";if(Qh(t))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(e);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Kh(n=At()){return/firefox\//i.test(n)}function wl(n=At()){const t=n.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Gh(n=At()){return/crios\//i.test(n)}function Wh(n=At()){return/iemobile/i.test(n)}function Qh(n=At()){return/android/i.test(n)}function Yh(n=At()){return/blackberry/i.test(n)}function Jh(n=At()){return/webos/i.test(n)}function qs(n=At()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function mg(n=At()){var t;return qs(n)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function gg(){return bp()&&document.documentMode===10}function $h(n=At()){return qs(n)||Qh(n)||Jh(n)||Yh(n)||/windows phone/i.test(n)||Wh(n)}function _g(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Xh(n,t=[]){let e;switch(n){case"Browser":e=oc(At());break;case"Worker":e=`${oc(At())}-${n}`;break;default:e=n}const r=t.length?t.join(","):"FirebaseCore-web";return`${e}/JsCore/${zr}/${r}`}/**
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
 */class yg{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const r=s=>new Promise((o,a)=>{try{const l=t(s);o(l)}catch(l){a(l)}});r.onAbort=e,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const r of this.queue)await r(t),r.onAbort&&e.push(r.onAbort)}catch(r){e.reverse();for(const i of e)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function vg(n,t={}){return Vn(n,"GET","/v2/passwordPolicy",ur(n,t))}/**
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
 */const Eg=6;class Tg{constructor(t){var e,r,i,s;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(e=o.minPasswordLength)!==null&&e!==void 0?e:Eg,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var e,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(e=l.meetsMinPasswordLength)!==null&&e!==void 0?e:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(t,e){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(e.meetsMinPasswordLength=t.length>=r),i&&(e.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,e){this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(e,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,e,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
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
 */class Ig{constructor(t,e,r,i){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ac(this),this.idTokenSubscription=new ac(this),this.beforeStateQueue=new yg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Uh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=tn(e)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Pr.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(e),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var e;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(e=this.redirectUser)===null||e===void 0?void 0:e._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return x(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Cs(t)}catch(e){if((e==null?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=$m()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?an(t):null;return e&&x(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&x(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(tn(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await vg(this),e=new Tg(t);this.tenantId===null?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Mi("auth","Firebase",t())}onAuthStateChanged(t,e,r){return this.registerStateListener(this.authStateSubscription,t,e,r)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,r){return this.registerStateListener(this.idTokenSubscription,t,e,r)}authStateReady(){return new Promise((t,e)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},e)}})}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};this.tenantId!=null&&(r.tenantId=this.tenantId),await pg(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,e){const r=await this.getOrInitRedirectPersistenceManager(e);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&tn(t)||this._popupRedirectResolver;x(e,this,"argument-error"),this.redirectPersistenceManager=await Pr.create(this,[tn(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,r;return this._isInitialized&&await this.queue(async()=>{}),((e=this._currentUser)===null||e===void 0?void 0:e._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(e=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&e!==void 0?e:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,r,i){if(this._deleted)return()=>{};const s=typeof e=="function"?e:e.next.bind(e);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(x(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof e=="function"){const l=t.addObserver(e,r,i);return()=>{o=!0,l()}}else{const l=t.addObserver(e);return()=>{o=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return x(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Xh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(e["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var t;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return e!=null&&e.error&&Wm(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Hr(n){return an(n)}class ac{constructor(t){this.auth=t,this.observer=null,this.addObserver=Mp(e=>this.observer=e)}get next(){return x(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function wg(){var n,t;return(t=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&t!==void 0?t:document}function Zh(n){return new Promise((t,e)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=t,r.onerror=i=>{const s=Ue("internal-error");s.customData=i,e(s)},r.type="text/javascript",r.charset="UTF-8",wg().appendChild(r)})}function Ag(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const Cg="https://www.google.com/recaptcha/enterprise.js?render=",Rg="recaptcha-enterprise",Sg="NO_RECAPTCHA";class Pg{constructor(t){this.type=Rg,this.auth=Hr(t)}async verify(t="verify",e=!1){async function r(s){if(!e){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{rg(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new ng(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;rc(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:t}).then(u=>{o(u)}).catch(()=>{o(Sg)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!e&&rc(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Zh(Cg+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function lc(n,t,e,r=!1){const i=new Pg(n);let s;try{s=await i.verify(e)}catch{s=await i.verify(e,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function uc(n,t,e,r){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await lc(n,t,e,e==="getOobCode");return r(n,s)}else return r(n,t).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${e} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await lc(n,t,e,e==="getOobCode");return r(n,o)}else return Promise.reject(s)})}/**
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
 */function bg(n,t){const e=yl(n,"auth");if(e.isInitialized()){const i=e.getImmediate(),s=e.getOptions();if(Is(s,t??{}))return i;Re(i,"already-initialized")}return e.initialize({options:t})}function kg(n,t){const e=(t==null?void 0:t.persistence)||[],r=(Array.isArray(e)?e:[e]).map(tn);t!=null&&t.errorMap&&n._updateErrorMap(t.errorMap),n._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function Dg(n,t,e){const r=Hr(n);x(r._canInitEmulator,r,"emulator-config-failed"),x(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(e!=null&&e.disableWarnings),s=td(t),{host:o,port:a}=Ng(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Og()}function td(n){const t=n.indexOf(":");return t<0?"":n.substr(0,t+1)}function Ng(n){const t=td(n),e=/(\/\/)?([^?#/]+)/.exec(n.substr(t.length));if(!e)return{host:"",port:null};const r=e[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:cc(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:cc(o)}}}function cc(n){if(!n)return null;const t=Number(n);return isNaN(t)?null:t}function Og(){function n(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Al{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return Ze("not implemented")}_getIdTokenResponse(t){return Ze("not implemented")}_linkToIdToken(t,e){return Ze("not implemented")}_getReauthenticationResolver(t){return Ze("not implemented")}}async function Vg(n,t){return Vn(n,"POST","/v1/accounts:signUp",t)}/**
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
 */async function Lg(n,t){return js(n,"POST","/v1/accounts:signInWithPassword",ur(n,t))}/**
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
 */async function Mg(n,t){return js(n,"POST","/v1/accounts:signInWithEmailLink",ur(n,t))}async function xg(n,t){return js(n,"POST","/v1/accounts:signInWithEmailLink",ur(n,t))}/**
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
 */class Ii extends Al{constructor(t,e,r,i=null){super("password",r),this._email=t,this._password=e,this._tenantId=i}static _fromEmailAndPassword(t,e){return new Ii(t,e,"password")}static _fromEmailAndCode(t,e,r=null){return new Ii(t,e,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t;if(e!=null&&e.email&&(e!=null&&e.password)){if(e.signInMethod==="password")return this._fromEmailAndPassword(e.email,e.password);if(e.signInMethod==="emailLink")return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const e={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return uc(t,e,"signInWithPassword",Lg);case"emailLink":return Mg(t,{email:this._email,oobCode:this._password});default:Re(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":const r={idToken:e,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return uc(t,r,"signUpPassword",Vg);case"emailLink":return xg(t,{idToken:e,email:this._email,oobCode:this._password});default:Re(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function br(n,t){return js(n,"POST","/v1/accounts:signInWithIdp",ur(n,t))}/**
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
 */const Fg="http://localhost";class sr extends Al{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new sr(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):Re("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=e,s=vl(e,["providerId","signInMethod"]);if(!r||!i)return null;const o=new sr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const e=this.buildRequest();return br(t,e)}_linkToIdToken(t,e){const r=this.buildRequest();return r.idToken=e,br(t,r)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,br(t,e)}buildRequest(){const t={requestUri:Fg,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=xi(e)}return t}}/**
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
 */function Ug(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Bg(n){const t=oi(ai(n)).link,e=t?oi(ai(t)).deep_link_id:null,r=oi(ai(n)).deep_link_id;return(r?oi(ai(r)).link:null)||r||e||t||n}class Cl{constructor(t){var e,r,i,s,o,a;const l=oi(ai(t)),u=(e=l.apiKey)!==null&&e!==void 0?e:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,f=Ug((i=l.mode)!==null&&i!==void 0?i:null);x(u&&c&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const e=Bg(t);try{return new Cl(e)}catch{return null}}}/**
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
 */class Kr{constructor(){this.providerId=Kr.PROVIDER_ID}static credential(t,e){return Ii._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const r=Cl.parseLink(e);return x(r,"argument-error"),Ii._fromEmailAndCode(t,r.code,r.tenantId)}}Kr.PROVIDER_ID="password";Kr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Kr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ed{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ui extends ed{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Tn extends Ui{constructor(){super("facebook.com")}static credential(t){return sr._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Tn.credentialFromTaggedObject(t)}static credentialFromError(t){return Tn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Tn.credential(t.oauthAccessToken)}catch{return null}}}Tn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Tn.PROVIDER_ID="facebook.com";/**
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
 */class In extends Ui{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return sr._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return In.credentialFromTaggedObject(t)}static credentialFromError(t){return In.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:r}=t;if(!e&&!r)return null;try{return In.credential(e,r)}catch{return null}}}In.GOOGLE_SIGN_IN_METHOD="google.com";In.PROVIDER_ID="google.com";/**
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
 */class wn extends Ui{constructor(){super("github.com")}static credential(t){return sr._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return wn.credentialFromTaggedObject(t)}static credentialFromError(t){return wn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return wn.credential(t.oauthAccessToken)}catch{return null}}}wn.GITHUB_SIGN_IN_METHOD="github.com";wn.PROVIDER_ID="github.com";/**
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
 */class An extends Ui{constructor(){super("twitter.com")}static credential(t,e){return sr._fromParams({providerId:An.PROVIDER_ID,signInMethod:An.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return An.credentialFromTaggedObject(t)}static credentialFromError(t){return An.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:r}=t;if(!e||!r)return null;try{return An.credential(e,r)}catch{return null}}}An.TWITTER_SIGN_IN_METHOD="twitter.com";An.PROVIDER_ID="twitter.com";/**
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
 */class Lr{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,r,i=!1){const s=await tr._fromIdTokenResponse(t,r,i),o=hc(r);return new Lr({user:s,providerId:o,_tokenResponse:r,operationType:e})}static async _forOperation(t,e,r){await t._updateTokensIfNecessary(r,!0);const i=hc(r);return new Lr({user:t,providerId:i,_tokenResponse:r,operationType:e})}}function hc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Rs extends on{constructor(t,e,r,i){var s;super(e.code,e.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Rs.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:e.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,e,r,i){return new Rs(t,e,r,i)}}function nd(n,t,e,r){return(t==="reauthenticate"?e._getReauthenticationResolver(n):e._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Rs._fromErrorAndOperation(n,s,t,r):s})}async function jg(n,t,e=!1){const r=await Ei(n,t._linkToIdToken(n.auth,await n.getIdToken()),e);return Lr._forOperation(n,"link",r)}/**
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
 */async function qg(n,t,e=!1){const{auth:r}=n,i="reauthenticate";try{const s=await Ei(n,nd(r,i,t,n),e);x(s.idToken,r,"internal-error");const o=Il(s.idToken);x(o,r,"internal-error");const{sub:a}=o;return x(n.uid===a,r,"user-mismatch"),Lr._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Re(r,"user-mismatch"),s}}/**
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
 */async function rd(n,t,e=!1){const r="signIn",i=await nd(n,r,t),s=await Lr._fromIdTokenResponse(n,r,i);return e||await n._updateCurrentUser(s.user),s}async function zg(n,t){return rd(Hr(n),t)}/**
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
 */async function Hg(n){const t=Hr(n);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}function Kg(n,t,e){return zg(an(n),Kr.credential(t,e)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Hg(n),r})}function Gg(n,t,e,r){return an(n).onIdTokenChanged(t,e,r)}function Wg(n,t,e){return an(n).beforeAuthStateChanged(t,e)}function Qg(n,t,e,r){return an(n).onAuthStateChanged(t,e,r)}const Ss="__sak";/**
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
 */class id{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(Ss,"1"),this.storage.removeItem(Ss),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Yg(){const n=At();return wl(n)||qs(n)}const Jg=1e3,$g=10;class sd extends id{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Yg()&&_g(),this.fallbackToPolling=$h(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const r=this.storage.getItem(e),i=this.localCache[e];r!==i&&t(e,i,r)}}onStorageEvent(t,e=!1){if(!t.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!e)return}const i=()=>{const o=this.storage.getItem(r);!e&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);gg()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,$g):i()}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(e&&JSON.parse(e))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:r}),!0)})},Jg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}sd.type="LOCAL";const Xg=sd;/**
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
 */class od extends id{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}od.type="SESSION";const ad=od;/**
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
 */function Zg(n){return Promise.all(n.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(e){return{fulfilled:!1,reason:e}}}))}/**
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
 */class zs{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(i=>i.isListeningto(t));if(e)return e;const r=new zs(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:r,eventType:i,data:s}=e.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;e.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(e.origin,s)),l=await Zg(a);e.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,e){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),(!e||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}zs.receivers=[];/**
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
 */function Rl(n="",t=10){let e="";for(let r=0;r<t;r++)e+=Math.floor(Math.random()*10);return n+e}/**
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
 */class t_{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Rl("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const d=f;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:u,data:e},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Be(){return window}function e_(n){Be().location.href=n}/**
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
 */function ld(){return typeof Be().WorkerGlobalScope<"u"&&typeof Be().importScripts=="function"}async function n_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function r_(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function i_(){return ld()?self:null}/**
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
 */const ud="firebaseLocalStorageDb",s_=1,Ps="firebaseLocalStorage",cd="fbase_key";class Bi{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function Hs(n,t){return n.transaction([Ps],t?"readwrite":"readonly").objectStore(Ps)}function o_(){const n=indexedDB.deleteDatabase(ud);return new Bi(n).toPromise()}function Ba(){const n=indexedDB.open(ud,s_);return new Promise((t,e)=>{n.addEventListener("error",()=>{e(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Ps,{keyPath:cd})}catch(i){e(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Ps)?t(r):(r.close(),await o_(),t(await Ba()))})})}async function dc(n,t,e){const r=Hs(n,!0).put({[cd]:t,value:e});return new Bi(r).toPromise()}async function a_(n,t){const e=Hs(n,!1).get(t),r=await new Bi(e).toPromise();return r===void 0?null:r.value}function fc(n,t){const e=Hs(n,!0).delete(t);return new Bi(e).toPromise()}const l_=800,u_=3;class hd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ba(),this.db)}async _withRetries(t){let e=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(e++>u_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ld()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=zs._getInstance(i_()),this.receiver._subscribe("keyChanged",async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)})),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await n_(),!this.activeServiceWorker)return;this.sender=new t_(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((e=r[0])===null||e===void 0)&&e.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||r_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Ba();return await dc(t,Ss,"1"),await fc(t,Ss),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(r=>dc(r,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(r=>a_(r,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>fc(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=Hs(i,!1).getAll();return new Bi(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const e=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),e.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),e.push(i));return e}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),l_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}hd.type="LOCAL";const c_=hd;new Fi(3e4,6e4);/**
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
 */function h_(n,t){return t?tn(t):(x(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Sl extends Al{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return br(t,this._buildIdpRequest())}_linkToIdToken(t,e){return br(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return br(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function d_(n){return rd(n.auth,new Sl(n),n.bypassAuthState)}function f_(n){const{auth:t,user:e}=n;return x(e,t,"internal-error"),qg(e,new Sl(n),n.bypassAuthState)}async function p_(n){const{auth:t,user:e}=n;return x(e,t,"internal-error"),jg(e,new Sl(n),n.bypassAuthState)}/**
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
 */class dd{constructor(t,e,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=t;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:e,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return d_;case"linkViaPopup":case"linkViaRedirect":return p_;case"reauthViaPopup":case"reauthViaRedirect":return f_;default:Re(this.auth,"internal-error")}}resolve(t){rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const m_=new Fi(2e3,1e4);class Rr extends dd{constructor(t,e,r,i,s){super(t,e,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Rr.currentPopupAction&&Rr.currentPopupAction.cancel(),Rr.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return x(t,this.auth,"internal-error"),t}async onExecution(){rn(this.filter.length===1,"Popup operations only handle one event");const t=Rl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(Ue(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Ue(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Rr.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,r;if(!((r=(e=this.authWindow)===null||e===void 0?void 0:e.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ue(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,m_.get())};t()}}Rr.currentPopupAction=null;/**
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
 */const g_="pendingRedirect",_s=new Map;class __ extends dd{constructor(t,e,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,r),this.eventId=null}async execute(){let t=_s.get(this.auth._key());if(!t){try{const r=await y_(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(e){t=()=>Promise.reject(e)}_s.set(this.auth._key(),t)}return this.bypassAuthState||_s.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function y_(n,t){const e=T_(t),r=E_(n);if(!await r._isAvailable())return!1;const i=await r._get(e)==="true";return await r._remove(e),i}function v_(n,t){_s.set(n._key(),t)}function E_(n){return tn(n._redirectPersistence)}function T_(n){return gs(g_,n.config.apiKey,n.name)}async function I_(n,t,e=!1){const r=Hr(n),i=h_(r,t),o=await new __(r,i,e).execute();return o&&!e&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
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
 */const w_=10*60*1e3;class A_{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(e=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!C_(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var r;if(t.error&&!fd(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";e.onError(Ue(this.auth,i))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const r=e.eventId===null||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=w_&&this.cachedEventUids.clear(),this.cachedEventUids.has(pc(t))}saveEventToCache(t){this.cachedEventUids.add(pc(t)),this.lastProcessedEventTime=Date.now()}}function pc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(t=>t).join("-")}function fd({type:n,error:t}){return n==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function C_(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fd(n);default:return!1}}/**
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
 */async function R_(n,t={}){return Vn(n,"GET","/v1/projects",t)}/**
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
 */const S_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,P_=/^https?/;async function b_(n){if(n.config.emulator)return;const{authorizedDomains:t}=await R_(n);for(const e of t)try{if(k_(e))return}catch{}Re(n,"unauthorized-domain")}function k_(n){const t=Ua(),{protocol:e,hostname:r}=new URL(t);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?e==="chrome-extension:"&&n.replace("chrome-extension://","")===t.replace("chrome-extension://",""):e==="chrome-extension:"&&o.hostname===r}if(!P_.test(e))return!1;if(S_.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const D_=new Fi(3e4,6e4);function mc(){const n=Be().___jsl;if(n!=null&&n.H){for(const t of Object.keys(n.H))if(n.H[t].r=n.H[t].r||[],n.H[t].L=n.H[t].L||[],n.H[t].r=[...n.H[t].L],n.CP)for(let e=0;e<n.CP.length;e++)n.CP[e]=null}}function N_(n){return new Promise((t,e)=>{var r,i,s;function o(){mc(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{mc(),e(Ue(n,"network-request-failed"))},timeout:D_.get()})}if(!((i=(r=Be().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=Be().gapi)===null||s===void 0)&&s.load)o();else{const a=Ag("iframefcb");return Be()[a]=()=>{gapi.load?o():e(Ue(n,"network-request-failed"))},Zh(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>e(l))}}).catch(t=>{throw ys=null,t})}let ys=null;function O_(n){return ys=ys||N_(n),ys}/**
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
 */const V_=new Fi(5e3,15e3),L_="__/auth/iframe",M_="emulator/auth/iframe",x_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},F_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function U_(n){const t=n.config;x(t.authDomain,n,"auth-domain-config-required");const e=t.emulator?Tl(t,M_):`https://${n.config.authDomain}/${L_}`,r={apiKey:t.apiKey,appName:n.name,v:zr},i=F_.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${e}?${xi(r).slice(1)}`}async function B_(n){const t=await O_(n),e=Be().gapi;return x(e,n,"internal-error"),t.open({where:document.body,url:U_(n),messageHandlersFilter:e.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:x_,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ue(n,"network-request-failed"),a=Be().setTimeout(()=>{s(o)},V_.get());function l(){Be().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const j_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},q_=500,z_=600,H_="_blank",K_="http://localhost";class gc{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function G_(n,t,e,r=q_,i=z_){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},j_),{width:r.toString(),height:i.toString(),top:s,left:o}),u=At().toLowerCase();e&&(a=Gh(u)?H_:e),Kh(u)&&(t=t||K_,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[p,A])=>`${d}${p}=${A},`,"");if(mg(u)&&a!=="_self")return W_(t||"",a),new gc(null);const f=window.open(t||"",a,c);x(f,n,"popup-blocked");try{f.focus()}catch{}return new gc(f)}function W_(n,t){const e=document.createElement("a");e.href=n,e.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),e.dispatchEvent(r)}/**
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
 */const Q_="__/auth/handler",Y_="emulator/auth/handler",J_=encodeURIComponent("fac");async function _c(n,t,e,r,i,s){x(n.config.authDomain,n,"auth-domain-config-required"),x(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:e,redirectUrl:r,v:zr,eventId:i};if(t instanceof ed){t.setDefaultLanguage(n.languageCode),o.providerId=t.providerId||"",Lp(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[c,f]of Object.entries(s||{}))o[c]=f}if(t instanceof Ui){const c=t.getScopes().filter(f=>f!=="");c.length>0&&(o.scopes=c.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await n._getAppCheckToken(),u=l?`#${J_}=${encodeURIComponent(l)}`:"";return`${$_(n)}?${xi(a).slice(1)}${u}`}function $_({config:n}){return n.emulator?Tl(n,Y_):`https://${n.authDomain}/${Q_}`}/**
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
 */const Ea="webStorageSupport";class X_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ad,this._completeRedirectFn=I_,this._overrideRedirectResult=v_}async _openPopup(t,e,r,i){var s;rn((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await _c(t,e,r,Ua(),i);return G_(t,o,Rl())}async _openRedirect(t,e,r,i){await this._originValidation(t);const s=await _c(t,e,r,Ua(),i);return e_(s),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:i,promise:s}=this.eventManagers[e];return i?Promise.resolve(i):(rn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[e]={promise:r},r.catch(()=>{delete this.eventManagers[e]}),r}async initAndGetManager(t){const e=await B_(t),r=new A_(t);return e.register("authEvent",i=>(x(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=e,r}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(Ea,{type:Ea},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ea];o!==void 0&&e(!!o),Re(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=b_(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return $h()||wl()||qs()}}const Z_=X_;var yc="@firebase/auth",vc="1.5.1";/**
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
 */class ty{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){x(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function ey(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ny(n){Vr(new rr("auth",(t,{options:e})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;x(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Xh(n)},u=new Ig(r,i,s,l);return kg(u,e),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,r)=>{t.getProvider("auth-internal").initialize()})),Vr(new rr("auth-internal",t=>{const e=Hr(t.getProvider("auth").getImmediate());return(r=>new ty(r))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),bn(yc,vc,ey(n)),bn(yc,vc,"esm2017")}/**
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
 */const ry=5*60,iy=kh("authIdTokenMaxAge")||ry;let Ec=null;const sy=n=>async t=>{const e=t&&await t.getIdTokenResult(),r=e&&(new Date().getTime()-Date.parse(e.issuedAtTime))/1e3;if(r&&r>iy)return;const i=e==null?void 0:e.token;Ec!==i&&(Ec=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function oy(n=Lh()){const t=yl(n,"auth");if(t.isInitialized())return t.getImmediate();const e=bg(n,{popupRedirectResolver:Z_,persistence:[c_,Xg,ad]}),r=kh("authTokenSyncURL");if(r){const s=sy(r);Wg(e,s,()=>s(e.currentUser)),Gg(e,o=>s(o))}const i=Ph("auth");return i&&Dg(e,`http://${i}`),e}ny("Browser");var ay=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},w,Pl=Pl||{},F=ay||self;function Ks(n){var t=typeof n;return t=t!="object"?t:n?Array.isArray(n)?"array":t:"null",t=="array"||t=="object"&&typeof n.length=="number"}function ji(n){var t=typeof n;return t=="object"&&n!=null||t=="function"}function ly(n){return Object.prototype.hasOwnProperty.call(n,Ta)&&n[Ta]||(n[Ta]=++uy)}var Ta="closure_uid_"+(1e9*Math.random()>>>0),uy=0;function cy(n,t,e){return n.call.apply(n.bind,arguments)}function hy(n,t,e){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),n.apply(t,i)}}return function(){return n.apply(t,arguments)}}function Yt(n,t,e){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Yt=cy:Yt=hy,Yt.apply(null,arguments)}function as(n,t){var e=Array.prototype.slice.call(arguments,1);return function(){var r=e.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function bt(n,t){function e(){}e.prototype=t.prototype,n.$=t.prototype,n.prototype=new e,n.prototype.constructor=n,n.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function Ln(){this.s=this.s,this.o=this.o}var dy=0;Ln.prototype.s=!1;Ln.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),dy!=0)&&ly(this)};Ln.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const pd=Array.prototype.indexOf?function(n,t){return Array.prototype.indexOf.call(n,t,void 0)}:function(n,t){if(typeof n=="string")return typeof t!="string"||t.length!=1?-1:n.indexOf(t,0);for(let e=0;e<n.length;e++)if(e in n&&n[e]===t)return e;return-1};function bl(n){const t=n.length;if(0<t){const e=Array(t);for(let r=0;r<t;r++)e[r]=n[r];return e}return[]}function Tc(n,t){for(let e=1;e<arguments.length;e++){const r=arguments[e];if(Ks(r)){const i=n.length||0,s=r.length||0;n.length=i+s;for(let o=0;o<s;o++)n[i+o]=r[o]}else n.push(r)}}function Jt(n,t){this.type=n,this.g=this.target=t,this.defaultPrevented=!1}Jt.prototype.h=function(){this.defaultPrevented=!0};var fy=function(){if(!F.addEventListener||!Object.defineProperty)return!1;var n=!1,t=Object.defineProperty({},"passive",{get:function(){n=!0}});try{const e=()=>{};F.addEventListener("test",e,t),F.removeEventListener("test",e,t)}catch{}return n}();function wi(n){return/^[\s\xa0]*$/.test(n)}function Gs(){var n=F.navigator;return n&&(n=n.userAgent)?n:""}function Le(n){return Gs().indexOf(n)!=-1}function kl(n){return kl[" "](n),n}kl[" "]=function(){};function py(n,t){var e=ov;return Object.prototype.hasOwnProperty.call(e,n)?e[n]:e[n]=t(n)}var my=Le("Opera"),Mr=Le("Trident")||Le("MSIE"),md=Le("Edge"),ja=md||Mr,gd=Le("Gecko")&&!(Gs().toLowerCase().indexOf("webkit")!=-1&&!Le("Edge"))&&!(Le("Trident")||Le("MSIE"))&&!Le("Edge"),gy=Gs().toLowerCase().indexOf("webkit")!=-1&&!Le("Edge");function _d(){var n=F.document;return n?n.documentMode:void 0}var qa;t:{var Ia="",wa=function(){var n=Gs();if(gd)return/rv:([^\);]+)(\)|;)/.exec(n);if(md)return/Edge\/([\d\.]+)/.exec(n);if(Mr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(gy)return/WebKit\/(\S+)/.exec(n);if(my)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(wa&&(Ia=wa?wa[1]:""),Mr){var Aa=_d();if(Aa!=null&&Aa>parseFloat(Ia)){qa=String(Aa);break t}}qa=Ia}var za;if(F.document&&Mr){var Ic=_d();za=Ic||parseInt(qa,10)||void 0}else za=void 0;var _y=za;function Ai(n,t){if(Jt.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var e=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=t,t=n.relatedTarget){if(gd){t:{try{kl(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else e=="mouseover"?t=n.fromElement:e=="mouseout"&&(t=n.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:yy[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&Ai.$.h.call(this)}}bt(Ai,Jt);var yy={2:"touch",3:"pen",4:"mouse"};Ai.prototype.h=function(){Ai.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var qi="closure_listenable_"+(1e6*Math.random()|0),vy=0;function Ey(n,t,e,r,i){this.listener=n,this.proxy=null,this.src=t,this.type=e,this.capture=!!r,this.la=i,this.key=++vy,this.fa=this.ia=!1}function Ws(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function Dl(n,t,e){for(const r in n)t.call(e,n[r],r,n)}function Ty(n,t){for(const e in n)t.call(void 0,n[e],e,n)}function yd(n){const t={};for(const e in n)t[e]=n[e];return t}const wc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function vd(n,t){let e,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(e in r)n[e]=r[e];for(let s=0;s<wc.length;s++)e=wc[s],Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e])}}function Qs(n){this.src=n,this.g={},this.h=0}Qs.prototype.add=function(n,t,e,r,i){var s=n.toString();n=this.g[s],n||(n=this.g[s]=[],this.h++);var o=Ka(n,t,r,i);return-1<o?(t=n[o],e||(t.ia=!1)):(t=new Ey(t,this.src,s,!!r,i),t.ia=e,n.push(t)),t};function Ha(n,t){var e=t.type;if(e in n.g){var r=n.g[e],i=pd(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Ws(t),n.g[e].length==0&&(delete n.g[e],n.h--))}}function Ka(n,t,e,r){for(var i=0;i<n.length;++i){var s=n[i];if(!s.fa&&s.listener==t&&s.capture==!!e&&s.la==r)return i}return-1}var Nl="closure_lm_"+(1e6*Math.random()|0),Ca={};function Ed(n,t,e,r,i){if(r&&r.once)return Id(n,t,e,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)Ed(n,t[s],e,r,i);return null}return e=Ll(e),n&&n[qi]?n.O(t,e,ji(r)?!!r.capture:!!r,i):Td(n,t,e,!1,r,i)}function Td(n,t,e,r,i,s){if(!t)throw Error("Invalid event type");var o=ji(i)?!!i.capture:!!i,a=Vl(n);if(a||(n[Nl]=a=new Qs(n)),e=a.add(t,e,r,o,s),e.proxy)return e;if(r=Iy(),e.proxy=r,r.src=n,r.listener=e,n.addEventListener)fy||(i=o),i===void 0&&(i=!1),n.addEventListener(t.toString(),r,i);else if(n.attachEvent)n.attachEvent(Ad(t.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return e}function Iy(){function n(e){return t.call(n.src,n.listener,e)}const t=wy;return n}function Id(n,t,e,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)Id(n,t[s],e,r,i);return null}return e=Ll(e),n&&n[qi]?n.P(t,e,ji(r)?!!r.capture:!!r,i):Td(n,t,e,!0,r,i)}function wd(n,t,e,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)wd(n,t[s],e,r,i);else r=ji(r)?!!r.capture:!!r,e=Ll(e),n&&n[qi]?(n=n.i,t=String(t).toString(),t in n.g&&(s=n.g[t],e=Ka(s,e,r,i),-1<e&&(Ws(s[e]),Array.prototype.splice.call(s,e,1),s.length==0&&(delete n.g[t],n.h--)))):n&&(n=Vl(n))&&(t=n.g[t.toString()],n=-1,t&&(n=Ka(t,e,r,i)),(e=-1<n?t[n]:null)&&Ol(e))}function Ol(n){if(typeof n!="number"&&n&&!n.fa){var t=n.src;if(t&&t[qi])Ha(t.i,n);else{var e=n.type,r=n.proxy;t.removeEventListener?t.removeEventListener(e,r,n.capture):t.detachEvent?t.detachEvent(Ad(e),r):t.addListener&&t.removeListener&&t.removeListener(r),(e=Vl(t))?(Ha(e,n),e.h==0&&(e.src=null,t[Nl]=null)):Ws(n)}}}function Ad(n){return n in Ca?Ca[n]:Ca[n]="on"+n}function wy(n,t){if(n.fa)n=!0;else{t=new Ai(t,this);var e=n.listener,r=n.la||n.src;n.ia&&Ol(n),n=e.call(r,t)}return n}function Vl(n){return n=n[Nl],n instanceof Qs?n:null}var Ra="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ll(n){return typeof n=="function"?n:(n[Ra]||(n[Ra]=function(t){return n.handleEvent(t)}),n[Ra])}function Pt(){Ln.call(this),this.i=new Qs(this),this.S=this,this.J=null}bt(Pt,Ln);Pt.prototype[qi]=!0;Pt.prototype.removeEventListener=function(n,t,e,r){wd(this,n,t,e,r)};function xt(n,t){var e,r=n.J;if(r)for(e=[];r;r=r.J)e.push(r);if(n=n.S,r=t.type||t,typeof t=="string")t=new Jt(t,n);else if(t instanceof Jt)t.target=t.target||n;else{var i=t;t=new Jt(r,n),vd(t,i)}if(i=!0,e)for(var s=e.length-1;0<=s;s--){var o=t.g=e[s];i=ls(o,r,!0,t)&&i}if(o=t.g=n,i=ls(o,r,!0,t)&&i,i=ls(o,r,!1,t)&&i,e)for(s=0;s<e.length;s++)o=t.g=e[s],i=ls(o,r,!1,t)&&i}Pt.prototype.N=function(){if(Pt.$.N.call(this),this.i){var n=this.i,t;for(t in n.g){for(var e=n.g[t],r=0;r<e.length;r++)Ws(e[r]);delete n.g[t],n.h--}}this.J=null};Pt.prototype.O=function(n,t,e,r){return this.i.add(String(n),t,!1,e,r)};Pt.prototype.P=function(n,t,e,r){return this.i.add(String(n),t,!0,e,r)};function ls(n,t,e,r){if(t=n.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==e){var a=o.listener,l=o.la||o.src;o.ia&&Ha(n.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Ml=F.JSON.stringify;class Ay{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function Cy(){var n=xl;let t=null;return n.g&&(t=n.g,n.g=n.g.next,n.g||(n.h=null),t.next=null),t}class Ry{constructor(){this.h=this.g=null}add(t,e){const r=Cd.get();r.set(t,e),this.h?this.h.next=r:this.g=r,this.h=r}}var Cd=new Ay(()=>new Sy,n=>n.reset());class Sy{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Py(n){var t=1;n=n.split(":");const e=[];for(;0<t&&n.length;)e.push(n.shift()),t--;return n.length&&e.push(n.join(":")),e}function by(n){F.setTimeout(()=>{throw n},0)}let Ci,Ri=!1,xl=new Ry,Rd=()=>{const n=F.Promise.resolve(void 0);Ci=()=>{n.then(ky)}};var ky=()=>{for(var n;n=Cy();){try{n.h.call(n.g)}catch(e){by(e)}var t=Cd;t.j(n),100>t.h&&(t.h++,n.next=t.g,t.g=n)}Ri=!1};function Ys(n,t){Pt.call(this),this.h=n||1,this.g=t||F,this.j=Yt(this.qb,this),this.l=Date.now()}bt(Ys,Pt);w=Ys.prototype;w.ga=!1;w.T=null;w.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),xt(this,"tick"),this.ga&&(Fl(this),this.start()))}};w.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Fl(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}w.N=function(){Ys.$.N.call(this),Fl(this),delete this.g};function Ul(n,t,e){if(typeof n=="function")e&&(n=Yt(n,e));else if(n&&typeof n.handleEvent=="function")n=Yt(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:F.setTimeout(n,t||0)}function Sd(n){n.g=Ul(()=>{n.g=null,n.i&&(n.i=!1,Sd(n))},n.j);const t=n.h;n.h=null,n.m.apply(null,t)}class Dy extends Ln{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Sd(this)}N(){super.N(),this.g&&(F.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Si(n){Ln.call(this),this.h=n,this.g={}}bt(Si,Ln);var Ac=[];function Pd(n,t,e,r){Array.isArray(e)||(e&&(Ac[0]=e.toString()),e=Ac);for(var i=0;i<e.length;i++){var s=Ed(t,e[i],r||n.handleEvent,!1,n.h||n);if(!s)break;n.g[s.key]=s}}function bd(n){Dl(n.g,function(t,e){this.g.hasOwnProperty(e)&&Ol(t)},n),n.g={}}Si.prototype.N=function(){Si.$.N.call(this),bd(this)};Si.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Js(){this.g=!0}Js.prototype.Ea=function(){this.g=!1};function Ny(n,t,e,r,i,s){n.info(function(){if(n.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var f=c.split("_");o=2<=f.length&&f[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+e+`
`+o})}function Oy(n,t,e,r,i,s,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+e+`
`+s+" "+o})}function Sr(n,t,e,r){n.info(function(){return"XMLHTTP TEXT ("+t+"): "+Ly(n,e)+(r?" "+r:"")})}function Vy(n,t){n.info(function(){return"TIMEOUT: "+t})}Js.prototype.info=function(){};function Ly(n,t){if(!n.g)return t;if(!t)return null;try{var e=JSON.parse(t);if(e){for(n=0;n<e.length;n++)if(Array.isArray(e[n])){var r=e[n];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Ml(e)}catch{return t}}var cr={},Cc=null;function $s(){return Cc=Cc||new Pt}cr.Ta="serverreachability";function kd(n){Jt.call(this,cr.Ta,n)}bt(kd,Jt);function Pi(n){const t=$s();xt(t,new kd(t))}cr.STAT_EVENT="statevent";function Dd(n,t){Jt.call(this,cr.STAT_EVENT,n),this.stat=t}bt(Dd,Jt);function ee(n){const t=$s();xt(t,new Dd(t,n))}cr.Ua="timingevent";function Nd(n,t){Jt.call(this,cr.Ua,n),this.size=t}bt(Nd,Jt);function zi(n,t){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return F.setTimeout(function(){n()},t)}var Xs={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Od={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Bl(){}Bl.prototype.h=null;function Rc(n){return n.h||(n.h=n.i())}function Vd(){}var Hi={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function jl(){Jt.call(this,"d")}bt(jl,Jt);function ql(){Jt.call(this,"c")}bt(ql,Jt);var Ga;function Zs(){}bt(Zs,Bl);Zs.prototype.g=function(){return new XMLHttpRequest};Zs.prototype.i=function(){return{}};Ga=new Zs;function Ki(n,t,e,r){this.l=n,this.j=t,this.m=e,this.W=r||1,this.U=new Si(this),this.P=My,n=ja?125:void 0,this.V=new Ys(n),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Ld}function Ld(){this.i=null,this.g="",this.h=!1}var My=45e3,Md={},Wa={};w=Ki.prototype;w.setTimeout=function(n){this.P=n};function Qa(n,t,e){n.L=1,n.A=eo(sn(t)),n.u=e,n.S=!0,xd(n,null)}function xd(n,t){n.G=Date.now(),Gi(n),n.B=sn(n.A);var e=n.B,r=n.W;Array.isArray(r)||(r=[String(r)]),Kd(e.i,"t",r),n.o=0,e=n.l.J,n.h=new Ld,n.g=ff(n.l,e?t:null,!n.u),0<n.O&&(n.M=new Dy(Yt(n.Pa,n,n.g),n.O)),Pd(n.U,n.g,"readystatechange",n.nb),t=n.I?yd(n.I):{},n.u?(n.v||(n.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.B,n.v,n.u,t)):(n.v="GET",n.g.ha(n.B,n.v,null,t)),Pi(),Ny(n.j,n.v,n.B,n.m,n.W,n.u)}w.nb=function(n){n=n.target;const t=this.M;t&&xe(n)==3?t.l():this.Pa(n)};w.Pa=function(n){try{if(n==this.g)t:{const c=xe(this.g);var t=this.g.Ia();const f=this.g.da();if(!(3>c)&&(c!=3||ja||this.g&&(this.h.h||this.g.ja()||kc(this.g)))){this.J||c!=4||t==7||(t==8||0>=f?Pi(3):Pi(2)),to(this);var e=this.g.da();this.ca=e;e:if(Fd(this)){var r=kc(this.g);n="";var i=r.length,s=xe(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Jn(this),fi(this);var o="";break e}this.h.i=new F.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,n+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.length=0,this.h.g+=n,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=e==200,Oy(this.j,this.v,this.B,this.m,this.W,c,e),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!wi(a)){var u=a;break e}}u=null}if(e=u)Sr(this.j,this.m,e,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ya(this,e);else{this.i=!1,this.s=3,ee(12),Jn(this),fi(this);break t}}this.S?(Ud(this,c,o),ja&&this.i&&c==3&&(Pd(this.U,this.V,"tick",this.mb),this.V.start())):(Sr(this.j,this.m,o,null),Ya(this,o)),c==4&&Jn(this),this.i&&!this.J&&(c==4?uf(this.l,this):(this.i=!1,Gi(this)))}else rv(this.g),e==400&&0<o.indexOf("Unknown SID")?(this.s=3,ee(12)):(this.s=0,ee(13)),Jn(this),fi(this)}}}catch{}finally{}};function Fd(n){return n.g?n.v=="GET"&&n.L!=2&&n.l.Ha:!1}function Ud(n,t,e){let r=!0,i;for(;!n.J&&n.o<e.length;)if(i=xy(n,e),i==Wa){t==4&&(n.s=4,ee(14),r=!1),Sr(n.j,n.m,null,"[Incomplete Response]");break}else if(i==Md){n.s=4,ee(15),Sr(n.j,n.m,e,"[Invalid Chunk]"),r=!1;break}else Sr(n.j,n.m,i,null),Ya(n,i);Fd(n)&&n.o!=0&&(n.h.g=n.h.g.slice(n.o),n.o=0),t!=4||e.length!=0||n.h.h||(n.s=1,ee(16),r=!1),n.i=n.i&&r,r?0<e.length&&!n.ba&&(n.ba=!0,t=n.l,t.g==n&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+e.length),Ql(t),t.M=!0,ee(11))):(Sr(n.j,n.m,e,"[Invalid Chunked Response]"),Jn(n),fi(n))}w.mb=function(){if(this.g){var n=xe(this.g),t=this.g.ja();this.o<t.length&&(to(this),Ud(this,n,t),this.i&&n!=4&&Gi(this))}};function xy(n,t){var e=n.o,r=t.indexOf(`
`,e);return r==-1?Wa:(e=Number(t.substring(e,r)),isNaN(e)?Md:(r+=1,r+e>t.length?Wa:(t=t.slice(r,r+e),n.o=r+e,t)))}w.cancel=function(){this.J=!0,Jn(this)};function Gi(n){n.Y=Date.now()+n.P,Bd(n,n.P)}function Bd(n,t){if(n.C!=null)throw Error("WatchDog timer not null");n.C=zi(Yt(n.lb,n),t)}function to(n){n.C&&(F.clearTimeout(n.C),n.C=null)}w.lb=function(){this.C=null;const n=Date.now();0<=n-this.Y?(Vy(this.j,this.B),this.L!=2&&(Pi(),ee(17)),Jn(this),this.s=2,fi(this)):Bd(this,this.Y-n)};function fi(n){n.l.H==0||n.J||uf(n.l,n)}function Jn(n){to(n);var t=n.M;t&&typeof t.sa=="function"&&t.sa(),n.M=null,Fl(n.V),bd(n.U),n.g&&(t=n.g,n.g=null,t.abort(),t.sa())}function Ya(n,t){try{var e=n.l;if(e.H!=0&&(e.g==n||Ja(e.i,n))){if(!n.K&&Ja(e.i,n)&&e.H==3){try{var r=e.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){t:if(!e.u){if(e.g)if(e.g.G+3e3<n.G)Ds(e),so(e);else break t;Wl(e),ee(18)}}else e.Fa=i[1],0<e.Fa-e.V&&37500>i[2]&&e.G&&e.A==0&&!e.v&&(e.v=zi(Yt(e.ib,e),6e3));if(1>=Qd(e.i)&&e.oa){try{e.oa()}catch{}e.oa=void 0}}else $n(e,11)}else if((n.K||e.g==n)&&Ds(e),!wi(t))for(i=e.Ja.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(e.V=u[0],u=u[1],e.H==2)if(u[0]=="c"){e.K=u[1],e.pa=u[2];const c=u[3];c!=null&&(e.ra=c,e.l.info("VER="+e.ra));const f=u[4];f!=null&&(e.Ga=f,e.l.info("SVER="+e.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,e.L=r,e.l.info("backChannelRequestTimeoutMs_="+r)),r=e;const p=n.g;if(p){const A=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(A){var s=r.i;s.g||A.indexOf("spdy")==-1&&A.indexOf("quic")==-1&&A.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(zl(s,s.h),s.h=null))}if(r.F){const I=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;I&&(r.Da=I,ct(r.I,r.F,I))}}e.H=3,e.h&&e.h.Ba(),e.ca&&(e.S=Date.now()-n.G,e.l.info("Handshake RTT: "+e.S+"ms")),r=e;var o=n;if(r.wa=df(r,r.J?r.pa:null,r.Y),o.K){Yd(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.C&&(to(a),Gi(a)),r.g=o}else af(r);0<e.j.length&&oo(e)}else u[0]!="stop"&&u[0]!="close"||$n(e,7);else e.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?$n(e,7):Gl(e):u[0]!="noop"&&e.h&&e.h.Aa(u),e.A=0)}}Pi(4)}catch{}}function Fy(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(Ks(n)){for(var t=[],e=n.length,r=0;r<e;r++)t.push(n[r]);return t}t=[],e=0;for(r in n)t[e++]=n[r];return t}function Uy(n){if(n.ta&&typeof n.ta=="function")return n.ta();if(!n.Z||typeof n.Z!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(Ks(n)||typeof n=="string"){var t=[];n=n.length;for(var e=0;e<n;e++)t.push(e);return t}t=[],e=0;for(const r in n)t[e++]=r;return t}}}function jd(n,t){if(n.forEach&&typeof n.forEach=="function")n.forEach(t,void 0);else if(Ks(n)||typeof n=="string")Array.prototype.forEach.call(n,t,void 0);else for(var e=Uy(n),r=Fy(n),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],e&&e[s],n)}var qd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function By(n,t){if(n){n=n.split("&");for(var e=0;e<n.length;e++){var r=n[e].indexOf("="),i=null;if(0<=r){var s=n[e].substring(0,r);i=n[e].substring(r+1)}else s=n[e];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function er(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof er){this.h=n.h,bs(this,n.j),this.s=n.s,this.g=n.g,ks(this,n.m),this.l=n.l;var t=n.i,e=new bi;e.i=t.i,t.g&&(e.g=new Map(t.g),e.h=t.h),Sc(this,e),this.o=n.o}else n&&(t=String(n).match(qd))?(this.h=!1,bs(this,t[1]||"",!0),this.s=li(t[2]||""),this.g=li(t[3]||"",!0),ks(this,t[4]),this.l=li(t[5]||"",!0),Sc(this,t[6]||"",!0),this.o=li(t[7]||"")):(this.h=!1,this.i=new bi(null,this.h))}er.prototype.toString=function(){var n=[],t=this.j;t&&n.push(ui(t,Pc,!0),":");var e=this.g;return(e||t=="file")&&(n.push("//"),(t=this.s)&&n.push(ui(t,Pc,!0),"@"),n.push(encodeURIComponent(String(e)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e=this.m,e!=null&&n.push(":",String(e))),(e=this.l)&&(this.g&&e.charAt(0)!="/"&&n.push("/"),n.push(ui(e,e.charAt(0)=="/"?zy:qy,!0))),(e=this.i.toString())&&n.push("?",e),(e=this.o)&&n.push("#",ui(e,Ky)),n.join("")};function sn(n){return new er(n)}function bs(n,t,e){n.j=e?li(t,!0):t,n.j&&(n.j=n.j.replace(/:$/,""))}function ks(n,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);n.m=t}else n.m=null}function Sc(n,t,e){t instanceof bi?(n.i=t,Gy(n.i,n.h)):(e||(t=ui(t,Hy)),n.i=new bi(t,n.h))}function ct(n,t,e){n.i.set(t,e)}function eo(n){return ct(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function li(n,t){return n?t?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function ui(n,t,e){return typeof n=="string"?(n=encodeURI(n).replace(t,jy),e&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function jy(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var Pc=/[#\/\?@]/g,qy=/[#\?:]/g,zy=/[#\?]/g,Hy=/[#\?@]/g,Ky=/#/g;function bi(n,t){this.h=this.g=null,this.i=n||null,this.j=!!t}function Mn(n){n.g||(n.g=new Map,n.h=0,n.i&&By(n.i,function(t,e){n.add(decodeURIComponent(t.replace(/\+/g," ")),e)}))}w=bi.prototype;w.add=function(n,t){Mn(this),this.i=null,n=Gr(this,n);var e=this.g.get(n);return e||this.g.set(n,e=[]),e.push(t),this.h+=1,this};function zd(n,t){Mn(n),t=Gr(n,t),n.g.has(t)&&(n.i=null,n.h-=n.g.get(t).length,n.g.delete(t))}function Hd(n,t){return Mn(n),t=Gr(n,t),n.g.has(t)}w.forEach=function(n,t){Mn(this),this.g.forEach(function(e,r){e.forEach(function(i){n.call(t,i,r,this)},this)},this)};w.ta=function(){Mn(this);const n=Array.from(this.g.values()),t=Array.from(this.g.keys()),e=[];for(let r=0;r<t.length;r++){const i=n[r];for(let s=0;s<i.length;s++)e.push(t[r])}return e};w.Z=function(n){Mn(this);let t=[];if(typeof n=="string")Hd(this,n)&&(t=t.concat(this.g.get(Gr(this,n))));else{n=Array.from(this.g.values());for(let e=0;e<n.length;e++)t=t.concat(n[e])}return t};w.set=function(n,t){return Mn(this),this.i=null,n=Gr(this,n),Hd(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[t]),this.h+=1,this};w.get=function(n,t){return n?(n=this.Z(n),0<n.length?String(n[0]):t):t};function Kd(n,t,e){zd(n,t),0<e.length&&(n.i=null,n.g.set(Gr(n,t),bl(e)),n.h+=e.length)}w.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],t=Array.from(this.g.keys());for(var e=0;e<t.length;e++){var r=t[e];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),n.push(i)}}return this.i=n.join("&")};function Gr(n,t){return t=String(t),n.j&&(t=t.toLowerCase()),t}function Gy(n,t){t&&!n.j&&(Mn(n),n.i=null,n.g.forEach(function(e,r){var i=r.toLowerCase();r!=i&&(zd(this,r),Kd(this,i,e))},n)),n.j=t}var Wy=class{constructor(n,t){this.g=n,this.map=t}};function Gd(n){this.l=n||Qy,F.PerformanceNavigationTiming?(n=F.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(F.g&&F.g.Ka&&F.g.Ka()&&F.g.Ka().dc),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Qy=10;function Wd(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function Qd(n){return n.h?1:n.g?n.g.size:0}function Ja(n,t){return n.h?n.h==t:n.g?n.g.has(t):!1}function zl(n,t){n.g?n.g.add(t):n.h=t}function Yd(n,t){n.h&&n.h==t?n.h=null:n.g&&n.g.has(t)&&n.g.delete(t)}Gd.prototype.cancel=function(){if(this.i=Jd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function Jd(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let t=n.i;for(const e of n.g.values())t=t.concat(e.F);return t}return bl(n.i)}var Yy=class{stringify(n){return F.JSON.stringify(n,void 0)}parse(n){return F.JSON.parse(n,void 0)}};function Jy(){this.g=new Yy}function $y(n,t,e){const r=e||"";try{jd(n,function(i,s){let o=i;ji(i)&&(o=Ml(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function Xy(n,t){const e=new Js;if(F.Image){const r=new Image;r.onload=as(us,e,r,"TestLoadImage: loaded",!0,t),r.onerror=as(us,e,r,"TestLoadImage: error",!1,t),r.onabort=as(us,e,r,"TestLoadImage: abort",!1,t),r.ontimeout=as(us,e,r,"TestLoadImage: timeout",!1,t),F.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else t(!1)}function us(n,t,e,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function no(n){this.l=n.ec||null,this.j=n.ob||!1}bt(no,Bl);no.prototype.g=function(){return new ro(this.l,this.j)};no.prototype.i=function(n){return function(){return n}}({});function ro(n,t){Pt.call(this),this.F=n,this.u=t,this.m=void 0,this.readyState=Hl,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}bt(ro,Pt);var Hl=0;w=ro.prototype;w.open=function(n,t){if(this.readyState!=Hl)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=t,this.readyState=1,ki(this)};w.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(t.body=n),(this.F||F).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};w.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Wi(this)),this.readyState=Hl};w.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,ki(this)),this.g&&(this.readyState=3,ki(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof F.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;$d(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function $d(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}w.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var t=n.value?n.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!n.done}))&&(this.response=this.responseText+=t)}n.done?Wi(this):ki(this),this.readyState==3&&$d(this)}};w.Za=function(n){this.g&&(this.response=this.responseText=n,Wi(this))};w.Ya=function(n){this.g&&(this.response=n,Wi(this))};w.ka=function(){this.g&&Wi(this)};function Wi(n){n.readyState=4,n.l=null,n.j=null,n.A=null,ki(n)}w.setRequestHeader=function(n,t){this.v.append(n,t)};w.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};w.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],t=this.h.entries();for(var e=t.next();!e.done;)e=e.value,n.push(e[0]+": "+e[1]),e=t.next();return n.join(`\r
`)};function ki(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(ro.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var Zy=F.JSON.parse;function gt(n){Pt.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Xd,this.L=this.M=!1}bt(gt,Pt);var Xd="",tv=/^https?$/i,ev=["POST","PUT"];w=gt.prototype;w.Oa=function(n){this.M=n};w.ha=function(n,t,e,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);t=t?t.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Ga.g(),this.C=this.u?Rc(this.u):Rc(Ga),this.g.onreadystatechange=Yt(this.La,this);try{this.G=!0,this.g.open(t,String(n),!0),this.G=!1}catch(s){bc(this,s);return}if(n=e||"",e=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)e.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())e.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(e.keys()).find(s=>s.toLowerCase()=="content-type"),i=F.FormData&&n instanceof F.FormData,!(0<=pd(ev,t))||r||i||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of e)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{ef(this),0<this.B&&((this.L=nv(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Yt(this.ua,this)):this.A=Ul(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(s){bc(this,s)}};function nv(n){return Mr&&typeof n.timeout=="number"&&n.ontimeout!==void 0}w.ua=function(){typeof Pl<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,xt(this,"timeout"),this.abort(8))};function bc(n,t){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=t,n.m=5,Zd(n),io(n)}function Zd(n){n.F||(n.F=!0,xt(n,"complete"),xt(n,"error"))}w.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,xt(this,"complete"),xt(this,"abort"),io(this))};w.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),io(this,!0)),gt.$.N.call(this)};w.La=function(){this.s||(this.G||this.v||this.l?tf(this):this.kb())};w.kb=function(){tf(this)};function tf(n){if(n.h&&typeof Pl<"u"&&(!n.C[1]||xe(n)!=4||n.da()!=2)){if(n.v&&xe(n)==4)Ul(n.La,0,n);else if(xt(n,"readystatechange"),xe(n)==4){n.h=!1;try{const o=n.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var e;if(!(e=t)){var r;if(r=o===0){var i=String(n.I).match(qd)[1]||null;!i&&F.self&&F.self.location&&(i=F.self.location.protocol.slice(0,-1)),r=!tv.test(i?i.toLowerCase():"")}e=r}if(e)xt(n,"complete"),xt(n,"success");else{n.m=6;try{var s=2<xe(n)?n.g.statusText:""}catch{s=""}n.j=s+" ["+n.da()+"]",Zd(n)}}finally{io(n)}}}}function io(n,t){if(n.g){ef(n);const e=n.g,r=n.C[0]?()=>{}:null;n.g=null,n.C=null,t||xt(n,"ready");try{e.onreadystatechange=r}catch{}}}function ef(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(F.clearTimeout(n.A),n.A=null)}w.isActive=function(){return!!this.g};function xe(n){return n.g?n.g.readyState:0}w.da=function(){try{return 2<xe(this)?this.g.status:-1}catch{return-1}};w.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};w.Wa=function(n){if(this.g){var t=this.g.responseText;return n&&t.indexOf(n)==0&&(t=t.substring(n.length)),Zy(t)}};function kc(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case Xd:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function rv(n){const t={};n=(n.g&&2<=xe(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<n.length;r++){if(wi(n[r]))continue;var e=Py(n[r]);const i=e[0];if(e=e[1],typeof e!="string")continue;e=e.trim();const s=t[i]||[];t[i]=s,s.push(e)}Ty(t,function(r){return r.join(", ")})}w.Ia=function(){return this.m};w.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function nf(n){let t="";return Dl(n,function(e,r){t+=r,t+=":",t+=e,t+=`\r
`}),t}function Kl(n,t,e){t:{for(r in e){var r=!1;break t}r=!0}r||(e=nf(e),typeof n=="string"?e!=null&&encodeURIComponent(String(e)):ct(n,t,e))}function ni(n,t,e){return e&&e.internalChannelParams&&e.internalChannelParams[n]||t}function rf(n){this.Ga=0,this.j=[],this.l=new Js,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ni("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ni("baseRetryDelayMs",5e3,n),this.hb=ni("retryDelaySeedMs",1e4,n),this.eb=ni("forwardChannelMaxRetries",2,n),this.xa=ni("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.useFetchStreams||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new Gd(n&&n.concurrentRequestLimit),this.Ja=new Jy,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}w=rf.prototype;w.ra=8;w.H=1;function Gl(n){if(sf(n),n.H==3){var t=n.W++,e=sn(n.I);if(ct(e,"SID",n.K),ct(e,"RID",t),ct(e,"TYPE","terminate"),Qi(n,e),t=new Ki(n,n.l,t),t.L=2,t.A=eo(sn(e)),e=!1,F.navigator&&F.navigator.sendBeacon)try{e=F.navigator.sendBeacon(t.A.toString(),"")}catch{}!e&&F.Image&&(new Image().src=t.A,e=!0),e||(t.g=ff(t.l,null),t.g.ha(t.A)),t.G=Date.now(),Gi(t)}hf(n)}function so(n){n.g&&(Ql(n),n.g.cancel(),n.g=null)}function sf(n){so(n),n.u&&(F.clearTimeout(n.u),n.u=null),Ds(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&F.clearTimeout(n.m),n.m=null)}function oo(n){if(!Wd(n.i)&&!n.m){n.m=!0;var t=n.Na;Ci||Rd(),Ri||(Ci(),Ri=!0),xl.add(t,n),n.C=0}}function iv(n,t){return Qd(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.j=t.F.concat(n.j),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=zi(Yt(n.Na,n,t),cf(n,n.C)),n.C++,!0)}w.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const i=new Ki(this,this.l,n);let s=this.s;if(this.U&&(s?(s=yd(s),vd(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)t:{for(var t=0,e=0;e<this.j.length;e++){e:{var r=this.j[e];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=e;break t}if(t===4096||e===this.j.length-1){t=e+1;break t}}t=1e3}else t=1e3;t=of(this,i,t),e=sn(this.I),ct(e,"RID",n),ct(e,"CVER",22),this.F&&ct(e,"X-HTTP-Session-Id",this.F),Qi(this,e),s&&(this.O?t="headers="+encodeURIComponent(String(nf(s)))+"&"+t:this.o&&Kl(e,this.o,s)),zl(this.i,i),this.bb&&ct(e,"TYPE","init"),this.P?(ct(e,"$req",t),ct(e,"SID","null"),i.aa=!0,Qa(i,e,null)):Qa(i,e,t),this.H=2}}else this.H==3&&(n?Dc(this,n):this.j.length==0||Wd(this.i)||Dc(this))};function Dc(n,t){var e;t?e=t.m:e=n.W++;const r=sn(n.I);ct(r,"SID",n.K),ct(r,"RID",e),ct(r,"AID",n.V),Qi(n,r),n.o&&n.s&&Kl(r,n.o,n.s),e=new Ki(n,n.l,e,n.C+1),n.o===null&&(e.I=n.s),t&&(n.j=t.F.concat(n.j)),t=of(n,e,1e3),e.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),zl(n.i,e),Qa(e,r,t)}function Qi(n,t){n.na&&Dl(n.na,function(e,r){ct(t,r,e)}),n.h&&jd({},function(e,r){ct(t,r,e)})}function of(n,t,e){e=Math.min(n.j.length,e);var r=n.h?Yt(n.h.Va,n.h,n):null;t:{var i=n.j;let s=-1;for(;;){const o=["count="+e];s==-1?0<e?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<e;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{$y(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break t}}}return n=n.j.splice(0,e),t.F=n,r}function af(n){if(!n.g&&!n.u){n.ba=1;var t=n.Ma;Ci||Rd(),Ri||(Ci(),Ri=!0),xl.add(t,n),n.A=0}}function Wl(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=zi(Yt(n.Ma,n),cf(n,n.A)),n.A++,!0)}w.Ma=function(){if(this.u=null,lf(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=zi(Yt(this.jb,this),n)}};w.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ee(10),so(this),lf(this))};function Ql(n){n.B!=null&&(F.clearTimeout(n.B),n.B=null)}function lf(n){n.g=new Ki(n,n.l,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var t=sn(n.wa);ct(t,"RID","rpc"),ct(t,"SID",n.K),ct(t,"AID",n.V),ct(t,"CI",n.G?"0":"1"),!n.G&&n.qa&&ct(t,"TO",n.qa),ct(t,"TYPE","xmlhttp"),Qi(n,t),n.o&&n.s&&Kl(t,n.o,n.s),n.L&&n.g.setTimeout(n.L);var e=n.g;n=n.pa,e.L=1,e.A=eo(sn(t)),e.u=null,e.S=!0,xd(e,n)}w.ib=function(){this.v!=null&&(this.v=null,so(this),Wl(this),ee(19))};function Ds(n){n.v!=null&&(F.clearTimeout(n.v),n.v=null)}function uf(n,t){var e=null;if(n.g==t){Ds(n),Ql(n),n.g=null;var r=2}else if(Ja(n.i,t))e=t.F,Yd(n.i,t),r=1;else return;if(n.H!=0){if(t.i)if(r==1){e=t.u?t.u.length:0,t=Date.now()-t.G;var i=n.C;r=$s(),xt(r,new Nd(r,e)),oo(n)}else af(n);else if(i=t.s,i==3||i==0&&0<t.ca||!(r==1&&iv(n,t)||r==2&&Wl(n)))switch(e&&0<e.length&&(t=n.i,t.i=t.i.concat(e)),i){case 1:$n(n,5);break;case 4:$n(n,10);break;case 3:$n(n,6);break;default:$n(n,2)}}}function cf(n,t){let e=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(e*=2),e*t}function $n(n,t){if(n.l.info("Error code "+t),t==2){var e=null;n.h&&(e=null);var r=Yt(n.pb,n);e||(e=new er("//www.google.com/images/cleardot.gif"),F.location&&F.location.protocol=="http"||bs(e,"https"),eo(e)),Xy(e.toString(),r)}else ee(2);n.H=0,n.h&&n.h.za(t),hf(n),sf(n)}w.pb=function(n){n?(this.l.info("Successfully pinged google.com"),ee(2)):(this.l.info("Failed to ping google.com"),ee(1))};function hf(n){if(n.H=0,n.ma=[],n.h){const t=Jd(n.i);(t.length!=0||n.j.length!=0)&&(Tc(n.ma,t),Tc(n.ma,n.j),n.i.i.length=0,bl(n.j),n.j.length=0),n.h.ya()}}function df(n,t,e){var r=e instanceof er?sn(e):new er(e);if(r.g!="")t&&(r.g=t+"."+r.g),ks(r,r.m);else{var i=F.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new er(null);r&&bs(s,r),t&&(s.g=t),i&&ks(s,i),e&&(s.l=e),r=s}return e=n.F,t=n.Da,e&&t&&ct(r,e,t),ct(r,"VER",n.ra),Qi(n,r),r}function ff(n,t,e){if(t&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n.Ha&&!n.va?new gt(new no({ob:e})):new gt(n.va),t.Oa(n.J),t}w.isActive=function(){return!!this.h&&this.h.isActive(this)};function pf(){}w=pf.prototype;w.Ba=function(){};w.Aa=function(){};w.za=function(){};w.ya=function(){};w.isActive=function(){return!0};w.Va=function(){};function Ns(){if(Mr&&!(10<=Number(_y)))throw Error("Environmental error: no available transport.")}Ns.prototype.g=function(n,t){return new he(n,t)};function he(n,t){Pt.call(this),this.g=new rf(t),this.l=n,this.h=t&&t.messageUrlParams||null,n=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(n?n["X-WebChannel-Content-Type"]=t.messageContentType:n={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(n?n["X-WebChannel-Client-Profile"]=t.Ca:n={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=n,(n=t&&t.cc)&&!wi(n)&&(this.g.o=n),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!wi(t)&&(this.g.F=t,n=this.h,n!==null&&t in n&&(n=this.h,t in n&&delete n[t])),this.j=new Wr(this)}bt(he,Pt);he.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,t=this.l,e=this.h||void 0;ee(0),n.Y=t,n.na=e||{},n.G=n.aa,n.I=df(n,null,n.Y),oo(n)};he.prototype.close=function(){Gl(this.g)};he.prototype.u=function(n){var t=this.g;if(typeof n=="string"){var e={};e.__data__=n,n=e}else this.v&&(e={},e.__data__=Ml(n),n=e);t.j.push(new Wy(t.fb++,n)),t.H==3&&oo(t)};he.prototype.N=function(){this.g.h=null,delete this.j,Gl(this.g),delete this.g,he.$.N.call(this)};function mf(n){jl.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var t=n.__sm__;if(t){t:{for(const e in t){n=e;break t}n=void 0}(this.i=n)&&(n=this.i,t=t!==null&&n in t?t[n]:void 0),this.data=t}else this.data=n}bt(mf,jl);function gf(){ql.call(this),this.status=1}bt(gf,ql);function Wr(n){this.g=n}bt(Wr,pf);Wr.prototype.Ba=function(){xt(this.g,"a")};Wr.prototype.Aa=function(n){xt(this.g,new mf(n))};Wr.prototype.za=function(n){xt(this.g,new gf)};Wr.prototype.ya=function(){xt(this.g,"b")};function sv(){this.blockSize=-1}function Se(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}bt(Se,sv);Se.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Sa(n,t,e){e||(e=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(e++)|t.charCodeAt(e++)<<8|t.charCodeAt(e++)<<16|t.charCodeAt(e++)<<24;else for(i=0;16>i;++i)r[i]=t[e++]|t[e++]<<8|t[e++]<<16|t[e++]<<24;t=n.g[0],e=n.g[1],i=n.g[2];var s=n.g[3],o=t+(s^e&(i^s))+r[0]+3614090360&4294967295;t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[3]+3250441966&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(s^e&(i^s))+r[4]+4118548399&4294967295,t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[7]+4249261313&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(s^e&(i^s))+r[8]+1770035416&4294967295,t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[11]+2304563134&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(s^e&(i^s))+r[12]+1804603682&4294967295,t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[15]+1236535329&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(e^i))+r[1]+4129170786&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[0]+3921069994&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(e^i))+r[5]+3593408605&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[4]+3889429448&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(e^i))+r[9]+568446438&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[8]+1163531501&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(e^i))+r[13]+2850285829&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[12]+2368359562&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(e^i^s)+r[5]+4294588738&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[14]+4259657740&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(e^i^s)+r[1]+2763975236&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[10]+3200236656&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(e^i^s)+r[13]+681279174&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[6]+76029189&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(e^i^s)+r[9]+3654602809&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[2]+3299628645&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(i^(e|~s))+r[0]+4096336452&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[5]+4237533241&4294967295,e=i+(o<<21&4294967295|o>>>11),o=t+(i^(e|~s))+r[12]+1700485571&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[1]+2240044497&4294967295,e=i+(o<<21&4294967295|o>>>11),o=t+(i^(e|~s))+r[8]+1873313359&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[13]+1309151649&4294967295,e=i+(o<<21&4294967295|o>>>11),o=t+(i^(e|~s))+r[4]+4149444226&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[9]+3951481745&4294967295,n.g[0]=n.g[0]+t&4294967295,n.g[1]=n.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+i&4294967295,n.g[3]=n.g[3]+s&4294967295}Se.prototype.j=function(n,t){t===void 0&&(t=n.length);for(var e=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=e;)Sa(this,n,s),s+=this.blockSize;if(typeof n=="string"){for(;s<t;)if(r[i++]=n.charCodeAt(s++),i==this.blockSize){Sa(this,r),i=0;break}}else for(;s<t;)if(r[i++]=n[s++],i==this.blockSize){Sa(this,r),i=0;break}}this.h=i,this.i+=t};Se.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var t=1;t<n.length-8;++t)n[t]=0;var e=8*this.i;for(t=n.length-8;t<n.length;++t)n[t]=e&255,e/=256;for(this.j(n),n=Array(16),t=e=0;4>t;++t)for(var r=0;32>r;r+=8)n[e++]=this.g[t]>>>r&255;return n};function rt(n,t){this.h=t;for(var e=[],r=!0,i=n.length-1;0<=i;i--){var s=n[i]|0;r&&s==t||(e[i]=s,r=!1)}this.g=e}var ov={};function Yl(n){return-128<=n&&128>n?py(n,function(t){return new rt([t|0],0>t?-1:0)}):new rt([n|0],0>n?-1:0)}function Fe(n){if(isNaN(n)||!isFinite(n))return kr;if(0>n)return Lt(Fe(-n));for(var t=[],e=1,r=0;n>=e;r++)t[r]=n/e|0,e*=$a;return new rt(t,0)}function _f(n,t){if(n.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(n.charAt(0)=="-")return Lt(_f(n.substring(1),t));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var e=Fe(Math.pow(t,8)),r=kr,i=0;i<n.length;i+=8){var s=Math.min(8,n.length-i),o=parseInt(n.substring(i,i+s),t);8>s?(s=Fe(Math.pow(t,s)),r=r.R(s).add(Fe(o))):(r=r.R(e),r=r.add(Fe(o)))}return r}var $a=4294967296,kr=Yl(0),Xa=Yl(1),Nc=Yl(16777216);w=rt.prototype;w.ea=function(){if(Ee(this))return-Lt(this).ea();for(var n=0,t=1,e=0;e<this.g.length;e++){var r=this.D(e);n+=(0<=r?r:$a+r)*t,t*=$a}return n};w.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(en(this))return"0";if(Ee(this))return"-"+Lt(this).toString(n);for(var t=Fe(Math.pow(n,6)),e=this,r="";;){var i=Vs(e,t).g;e=Os(e,i.R(t));var s=((0<e.g.length?e.g[0]:e.h)>>>0).toString(n);if(e=i,en(e))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};w.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function en(n){if(n.h!=0)return!1;for(var t=0;t<n.g.length;t++)if(n.g[t]!=0)return!1;return!0}function Ee(n){return n.h==-1}w.X=function(n){return n=Os(this,n),Ee(n)?-1:en(n)?0:1};function Lt(n){for(var t=n.g.length,e=[],r=0;r<t;r++)e[r]=~n.g[r];return new rt(e,~n.h).add(Xa)}w.abs=function(){return Ee(this)?Lt(this):this};w.add=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(n.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(n.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,e[i]=o<<16|s}return new rt(e,e[e.length-1]&-2147483648?-1:0)};function Os(n,t){return n.add(Lt(t))}w.R=function(n){if(en(this)||en(n))return kr;if(Ee(this))return Ee(n)?Lt(this).R(Lt(n)):Lt(Lt(this).R(n));if(Ee(n))return Lt(this.R(Lt(n)));if(0>this.X(Nc)&&0>n.X(Nc))return Fe(this.ea()*n.ea());for(var t=this.g.length+n.g.length,e=[],r=0;r<2*t;r++)e[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<n.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=n.D(i)>>>16,l=n.D(i)&65535;e[2*r+2*i]+=o*l,cs(e,2*r+2*i),e[2*r+2*i+1]+=s*l,cs(e,2*r+2*i+1),e[2*r+2*i+1]+=o*a,cs(e,2*r+2*i+1),e[2*r+2*i+2]+=s*a,cs(e,2*r+2*i+2)}for(r=0;r<t;r++)e[r]=e[2*r+1]<<16|e[2*r];for(r=t;r<2*t;r++)e[r]=0;return new rt(e,0)};function cs(n,t){for(;(n[t]&65535)!=n[t];)n[t+1]+=n[t]>>>16,n[t]&=65535,t++}function ri(n,t){this.g=n,this.h=t}function Vs(n,t){if(en(t))throw Error("division by zero");if(en(n))return new ri(kr,kr);if(Ee(n))return t=Vs(Lt(n),t),new ri(Lt(t.g),Lt(t.h));if(Ee(t))return t=Vs(n,Lt(t)),new ri(Lt(t.g),t.h);if(30<n.g.length){if(Ee(n)||Ee(t))throw Error("slowDivide_ only works with positive integers.");for(var e=Xa,r=t;0>=r.X(n);)e=Oc(e),r=Oc(r);var i=Ir(e,1),s=Ir(r,1);for(r=Ir(r,2),e=Ir(e,2);!en(r);){var o=s.add(r);0>=o.X(n)&&(i=i.add(e),s=o),r=Ir(r,1),e=Ir(e,1)}return t=Os(n,i.R(t)),new ri(i,t)}for(i=kr;0<=n.X(t);){for(e=Math.max(1,Math.floor(n.ea()/t.ea())),r=Math.ceil(Math.log(e)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Fe(e),o=s.R(t);Ee(o)||0<o.X(n);)e-=r,s=Fe(e),o=s.R(t);en(s)&&(s=Xa),i=i.add(s),n=Os(n,o)}return new ri(i,n)}w.gb=function(n){return Vs(this,n).h};w.and=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)&n.D(r);return new rt(e,this.h&n.h)};w.or=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)|n.D(r);return new rt(e,this.h|n.h)};w.xor=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)^n.D(r);return new rt(e,this.h^n.h)};function Oc(n){for(var t=n.g.length+1,e=[],r=0;r<t;r++)e[r]=n.D(r)<<1|n.D(r-1)>>>31;return new rt(e,n.h)}function Ir(n,t){var e=t>>5;t%=32;for(var r=n.g.length-e,i=[],s=0;s<r;s++)i[s]=0<t?n.D(s+e)>>>t|n.D(s+e+1)<<32-t:n.D(s+e);return new rt(i,n.h)}Ns.prototype.createWebChannel=Ns.prototype.g;he.prototype.send=he.prototype.u;he.prototype.open=he.prototype.m;he.prototype.close=he.prototype.close;Xs.NO_ERROR=0;Xs.TIMEOUT=8;Xs.HTTP_ERROR=6;Od.COMPLETE="complete";Vd.EventType=Hi;Hi.OPEN="a";Hi.CLOSE="b";Hi.ERROR="c";Hi.MESSAGE="d";Pt.prototype.listen=Pt.prototype.O;gt.prototype.listenOnce=gt.prototype.P;gt.prototype.getLastError=gt.prototype.Sa;gt.prototype.getLastErrorCode=gt.prototype.Ia;gt.prototype.getStatus=gt.prototype.da;gt.prototype.getResponseJson=gt.prototype.Wa;gt.prototype.getResponseText=gt.prototype.ja;gt.prototype.send=gt.prototype.ha;gt.prototype.setWithCredentials=gt.prototype.Oa;Se.prototype.digest=Se.prototype.l;Se.prototype.reset=Se.prototype.reset;Se.prototype.update=Se.prototype.j;rt.prototype.add=rt.prototype.add;rt.prototype.multiply=rt.prototype.R;rt.prototype.modulo=rt.prototype.gb;rt.prototype.compare=rt.prototype.X;rt.prototype.toNumber=rt.prototype.ea;rt.prototype.toString=rt.prototype.toString;rt.prototype.getBits=rt.prototype.D;rt.fromNumber=Fe;rt.fromString=_f;var av=function(){return new Ns},lv=function(){return $s()},Pa=Xs,uv=Od,cv=cr,Vc={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},hs=Vd,hv=gt,dv=Se,Dr=rt;const Lc="@firebase/firestore";/**
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
 */class Wt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Wt.UNAUTHENTICATED=new Wt(null),Wt.GOOGLE_CREDENTIALS=new Wt("google-credentials-uid"),Wt.FIRST_PARTY=new Wt("first-party-uid"),Wt.MOCK_USER=new Wt("mock-user");/**
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
 */let Qr="10.7.2";/**
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
 */const or=new gl("@firebase/firestore");function ii(){return or.logLevel}function R(n,...t){if(or.logLevel<=J.DEBUG){const e=t.map(Jl);or.debug(`Firestore (${Qr}): ${n}`,...e)}}function qe(n,...t){if(or.logLevel<=J.ERROR){const e=t.map(Jl);or.error(`Firestore (${Qr}): ${n}`,...e)}}function xr(n,...t){if(or.logLevel<=J.WARN){const e=t.map(Jl);or.warn(`Firestore (${Qr}): ${n}`,...e)}}function Jl(n){if(typeof n=="string")return n;try{/**
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
 */function H(n="Unexpected state"){const t=`FIRESTORE (${Qr}) INTERNAL ASSERTION FAILED: `+n;throw qe(t),new Error(t)}function wt(n,t){n||H()}function tt(n,t){return n}/**
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
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends on{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class kn{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class yf{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class fv{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(Wt.UNAUTHENTICATED))}shutdown(){}}class pv{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class mv{constructor(t){this.t=t,this.currentUser=Wt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let r=this.i;const i=l=>this.i!==r?(r=this.i,e(l)):Promise.resolve();let s=new kn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new kn,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;t.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{R("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(R("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new kn)}},0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(R("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(wt(typeof r.accessToken=="string"),new yf(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return wt(t===null||typeof t=="string"),new Wt(t)}}class gv{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=Wt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class _v{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new gv(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(Wt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class yv{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class vv{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const r=s=>{s.error!=null&&R("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,R("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?e(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{R("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):R("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(wt(typeof e.token=="string"),this.R=e.token,new yv(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Ev(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
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
 */class vf{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=Ev(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<e&&(r+=t.charAt(i[s]%t.length))}return r}}function nt(n,t){return n<t?-1:n>t?1:0}function Fr(n,t,e){return n.length===t.length&&n.every((r,i)=>e(r,t[i]))}/**
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
 */class se{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new N(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new N(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new N(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new N(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return se.fromMillis(Date.now())}static fromDate(t){return se.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new se(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?nt(this.nanoseconds,t.nanoseconds):nt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class B{constructor(t){this.timestamp=t}static fromTimestamp(t){return new B(t)}static min(){return new B(new se(0,0))}static max(){return new B(new se(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Di{constructor(t,e,r){e===void 0?e=0:e>t.length&&H(),r===void 0?r=t.length-e:r>t.length-e&&H(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Di.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Di?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const s=t.get(i),o=e.get(i);if(s<o)return-1;if(s>o)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class mt extends Di{construct(t,e,r){return new mt(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new N(T.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(i=>i.length>0))}return new mt(e)}static emptyPath(){return new mt([])}}const Tv=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class te extends Di{construct(t,e,r){return new te(t,e,r)}static isValidIdentifier(t){return Tv.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),te.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new te(["__name__"])}static fromServerFormat(t){const e=[];let r="",i=0;const s=()=>{if(r.length===0)throw new N(T.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new N(T.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new N(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new N(T.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new te(e)}static emptyPath(){return new te([])}}/**
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
 */class V{constructor(t){this.path=t}static fromPath(t){return new V(mt.fromString(t))}static fromName(t){return new V(mt.fromString(t).popFirst(5))}static empty(){return new V(mt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&mt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return mt.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new V(new mt(t.slice()))}}function Iv(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=B.fromTimestamp(r===1e9?new se(e+1,0):new se(e,r));return new Dn(i,V.empty(),t)}function wv(n){return new Dn(n.readTime,n.key,-1)}class Dn{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Dn(B.min(),V.empty(),-1)}static max(){return new Dn(B.max(),V.empty(),-1)}}function Av(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=V.comparator(n.documentKey,t.documentKey),e!==0?e:nt(n.largestBatchId,t.largestBatchId))}/**
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
 */const Cv="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Rv{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function $l(n){if(n.code!==T.FAILED_PRECONDITION||n.message!==Cv)throw n;R("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class _{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&H(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new _((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(e,s).next(r,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof _?e:_.resolve(e)}catch(e){return _.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):_.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):_.reject(e)}static resolve(t){return new _((e,r)=>{e(t)})}static reject(t){return new _((e,r)=>{r(t)})}static waitFor(t){return new _((e,r)=>{let i=0,s=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&e()},l=>r(l))}),o=!0,s===i&&e()})}static or(t){let e=_.resolve(!1);for(const r of t)e=e.next(i=>i?_.resolve(i):r());return e}static forEach(t,e){const r=[];return t.forEach((i,s)=>{r.push(e.call(this,i,s))}),this.waitFor(r)}static mapArray(t,e){return new _((r,i)=>{const s=t.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;e(t[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(t,e){return new _((r,i)=>{const s=()=>{t()===!0?e().next(()=>{s()},i):r()};s()})}}/**
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
 */class Xl{constructor(t,e){this.action=t,this.transaction=e,this.aborted=!1,this.V=new kn,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{e.error?this.V.reject(new pi(t,e.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=Zl(r.target.error);this.V.reject(new pi(t,i))}}static open(t,e,r,i){try{return new Xl(e,t.transaction(i,r))}catch(s){throw new pi(e,s)}}get m(){return this.V.promise}abort(t){t&&this.V.reject(t),this.aborted||(R("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const t=this.transaction;this.aborted||typeof t.commit!="function"||t.commit()}store(t){const e=this.transaction.objectStore(t);return new Pv(e)}}class Xn{constructor(t,e,r){this.name=t,this.version=e,this.p=r,Xn.S(At())===12.2&&qe("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(t){return R("SimpleDb","Removing database:",t),Yn(window.indexedDB.deleteDatabase(t)).toPromise()}static D(){if(!Dh())return!1;if(Xn.C())return!0;const t=At(),e=Xn.S(t),r=0<e&&e<10,i=Xn.v(t),s=0<i&&i<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||r||s)}static C(){var t;return typeof process<"u"&&((t=process.__PRIVATE_env)===null||t===void 0?void 0:t.F)==="YES"}static M(t,e){return t.store(e)}static S(t){const e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=e?e[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(t){const e=t.match(/Android ([\d.]+)/i),r=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(t){return this.db||(R("SimpleDb","Opening database:",this.name),this.db=await new Promise((e,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;e(o)},i.onblocked=()=>{r(new pi(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new N(T.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new N(T.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new pi(t,o))},i.onupgradeneeded=s=>{R("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.N(o,i.transaction,s.oldVersion,this.version).next(()=>{R("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=e=>this.B(e)),this.db}L(t){this.B=t,this.db&&(this.db.onversionchange=e=>t(e))}async runTransaction(t,e,r,i){const s=e==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(t);const a=Xl.open(this.db,t,s?"readonly":"readwrite",r),l=i(a).next(u=>(a.g(),u)).catch(u=>(a.abort(u),_.reject(u))).toPromise();return l.catch(()=>{}),await a.m,l}catch(a){const l=a,u=l.name!=="FirebaseError"&&o<3;if(R("SimpleDb","Transaction failed with error:",l.message,"Retrying:",u),this.close(),!u)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Sv{constructor(t){this.k=t,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(t){this.k=t}done(){this.q=!0}U(t){this.K=t}delete(){return Yn(this.k.delete())}}class pi extends N{constructor(t,e){super(T.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${e}`),this.name="IndexedDbTransactionError"}}function Yi(n){return n.name==="IndexedDbTransactionError"}class Pv{constructor(t){this.store=t}put(t,e){let r;return e!==void 0?(R("SimpleDb","PUT",this.store.name,t,e),r=this.store.put(e,t)):(R("SimpleDb","PUT",this.store.name,"<auto-key>",t),r=this.store.put(t)),Yn(r)}add(t){return R("SimpleDb","ADD",this.store.name,t,t),Yn(this.store.add(t))}get(t){return Yn(this.store.get(t)).next(e=>(e===void 0&&(e=null),R("SimpleDb","GET",this.store.name,t,e),e))}delete(t){return R("SimpleDb","DELETE",this.store.name,t),Yn(this.store.delete(t))}count(){return R("SimpleDb","COUNT",this.store.name),Yn(this.store.count())}W(t,e){const r=this.options(t,e),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new _((o,a)=>{s.onerror=l=>{a(l.target.error)},s.onsuccess=l=>{o(l.target.result)}})}{const s=this.cursor(r),o=[];return this.G(s,(a,l)=>{o.push(l)}).next(()=>o)}}j(t,e){const r=this.store.getAll(t,e===null?void 0:e);return new _((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}H(t,e){R("SimpleDb","DELETE ALL",this.store.name);const r=this.options(t,e);r.J=!1;const i=this.cursor(r);return this.G(i,(s,o,a)=>a.delete())}Y(t,e){let r;e?r=t:(r={},e=t);const i=this.cursor(r);return this.G(i,e)}Z(t){const e=this.cursor({});return new _((r,i)=>{e.onerror=s=>{const o=Zl(s.target.error);i(o)},e.onsuccess=s=>{const o=s.target.result;o?t(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(t,e){const r=[];return new _((i,s)=>{t.onerror=o=>{s(o.target.error)},t.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const l=new Sv(a),u=e(a.primaryKey,a.value,l);if(u instanceof _){const c=u.catch(f=>(l.done(),_.reject(f)));r.push(c)}l.isDone?i():l.$===null?a.continue():a.continue(l.$)}}).next(()=>_.waitFor(r))}options(t,e){let r;return t!==void 0&&(typeof t=="string"?r=t:e=t),{index:r,range:e}}cursor(t){let e="next";if(t.reverse&&(e="prev"),t.index){const r=this.store.index(t.index);return t.J?r.openKeyCursor(t.range,e):r.openCursor(t.range,e)}return this.store.openCursor(t.range,e)}}function Yn(n){return new _((t,e)=>{n.onsuccess=r=>{const i=r.target.result;t(i)},n.onerror=r=>{const i=Zl(r.target.error);e(i)}})}let Mc=!1;function Zl(n){const t=Xn.S(At());if(t>=12.2&&t<13){const e="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(e)>=0){const r=new N("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Mc||(Mc=!0,setTimeout(()=>{throw r},0)),r}}return n}/**
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
 */class tu{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.se(r),this.oe=r=>e.writeSequenceNumber(r))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}tu._e=-1;function ao(n){return n==null}function Za(n){return n===0&&1/n==-1/0}/**
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
 */function xc(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function lo(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function bv(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class yt{constructor(t,e){this.comparator=t,this.root=e||Vt.EMPTY}insert(t,e){return new yt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Vt.BLACK,null,null))}remove(t){return new yt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Vt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ds(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ds(this.root,t,this.comparator,!1)}getReverseIterator(){return new ds(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ds(this.root,t,this.comparator,!0)}}class ds{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?r(t.key,e):1,e&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Vt{constructor(t,e,r,i,s){this.key=t,this.value=e,this.color=r??Vt.RED,this.left=i??Vt.EMPTY,this.right=s??Vt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,s){return new Vt(t??this.key,e??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,e,r),null):s===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Vt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return Vt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Vt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Vt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw H();const t=this.left.check();if(t!==this.right.check())throw H();return t+(this.isRed()?0:1)}}Vt.EMPTY=null,Vt.RED=!0,Vt.BLACK=!1;Vt.EMPTY=new class{constructor(){this.size=0}get key(){throw H()}get value(){throw H()}get color(){throw H()}get left(){throw H()}get right(){throw H()}copy(t,e,r,i,s){return this}insert(t,e,r){return new Vt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ft{constructor(t){this.comparator=t,this.data=new yt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Fc(this.data.getIterator())}getIteratorFrom(t){return new Fc(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof Ft)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Ft(this.comparator);return e.data=t,e}}class Fc{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Cn{constructor(t){this.fields=t,t.sort(te.comparator)}static empty(){return new Cn([])}unionWith(t){let e=new Ft(te.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Cn(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Fr(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
 */class Ef extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class $t{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Ef("Invalid base64 string: "+s):s}}(t);return new $t(e)}static fromUint8Array(t){const e=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(t);return new $t(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return nt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}$t.EMPTY_BYTE_STRING=new $t("");const kv=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Nn(n){if(wt(!!n),typeof n=="string"){let t=0;const e=kv.exec(n);if(wt(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:It(n.seconds),nanos:It(n.nanos)}}function It(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ar(n){return typeof n=="string"?$t.fromBase64String(n):$t.fromUint8Array(n)}/**
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
 */function eu(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function nu(n){const t=n.mapValue.fields.__previous_value__;return eu(t)?nu(t):t}function Ni(n){const t=Nn(n.mapValue.fields.__local_write_time__.timestampValue);return new se(t.seconds,t.nanos)}/**
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
 */class Dv{constructor(t,e,r,i,s,o,a,l,u){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Oi{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Oi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Oi&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const fs={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function lr(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?eu(n)?4:Nv(n)?9007199254740991:10:H()}function ze(n,t){if(n===t)return!0;const e=lr(n);if(e!==lr(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Ni(n).isEqual(Ni(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Nn(i.timestampValue),a=Nn(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,s){return ar(i.bytesValue).isEqual(ar(s.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,s){return It(i.geoPointValue.latitude)===It(s.geoPointValue.latitude)&&It(i.geoPointValue.longitude)===It(s.geoPointValue.longitude)}(n,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return It(i.integerValue)===It(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=It(i.doubleValue),a=It(s.doubleValue);return o===a?Za(o)===Za(a):isNaN(o)&&isNaN(a)}return!1}(n,t);case 9:return Fr(n.arrayValue.values||[],t.arrayValue.values||[],ze);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(xc(o)!==xc(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!ze(o[l],a[l])))return!1;return!0}(n,t);default:return H()}}function Vi(n,t){return(n.values||[]).find(e=>ze(e,t))!==void 0}function Ur(n,t){if(n===t)return 0;const e=lr(n),r=lr(t);if(e!==r)return nt(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return nt(n.booleanValue,t.booleanValue);case 2:return function(s,o){const a=It(s.integerValue||s.doubleValue),l=It(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(n,t);case 3:return Uc(n.timestampValue,t.timestampValue);case 4:return Uc(Ni(n),Ni(t));case 5:return nt(n.stringValue,t.stringValue);case 6:return function(s,o){const a=ar(s),l=ar(o);return a.compareTo(l)}(n.bytesValue,t.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=nt(a[u],l[u]);if(c!==0)return c}return nt(a.length,l.length)}(n.referenceValue,t.referenceValue);case 8:return function(s,o){const a=nt(It(s.latitude),It(o.latitude));return a!==0?a:nt(It(s.longitude),It(o.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=Ur(a[u],l[u]);if(c)return c}return nt(a.length,l.length)}(n.arrayValue,t.arrayValue);case 10:return function(s,o){if(s===fs.mapValue&&o===fs.mapValue)return 0;if(s===fs.mapValue)return 1;if(o===fs.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let f=0;f<l.length&&f<c.length;++f){const d=nt(l[f],c[f]);if(d!==0)return d;const p=Ur(a[l[f]],u[c[f]]);if(p!==0)return p}return nt(l.length,c.length)}(n.mapValue,t.mapValue);default:throw H()}}function Uc(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return nt(n,t);const e=Nn(n),r=Nn(t),i=nt(e.seconds,r.seconds);return i!==0?i:nt(e.nanos,r.nanos)}function Br(n){return tl(n)}function tl(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=Nn(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return ar(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return V.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",i=!0;for(const s of e.values||[])i?i=!1:r+=",",r+=tl(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${tl(e.fields[o])}`;return i+"}"}(n.mapValue):H()}function el(n){return!!n&&"integerValue"in n}function ru(n){return!!n&&"arrayValue"in n}function Bc(n){return!!n&&"nullValue"in n}function jc(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ba(n){return!!n&&"mapValue"in n}function mi(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return lo(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=mi(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=mi(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Nv(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Me{constructor(t){this.value=t}static empty(){return new Me({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!ba(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=mi(e)}setAll(t){let e=te.emptyPath(),r={},i=[];t.forEach((o,a)=>{if(!e.isImmediateParentOf(a)){const l=this.getFieldsMap(e);this.applyChanges(l,r,i),r={},i=[],e=a.popLast()}o?r[a.lastSegment()]=mi(o):i.push(a.lastSegment())});const s=this.getFieldsMap(e);this.applyChanges(s,r,i)}delete(t){const e=this.field(t.popLast());ba(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return ze(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];ba(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){lo(e,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new Me(mi(this.value))}}/**
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
 */class Qt{constructor(t,e,r,i,s,o,a){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new Qt(t,0,B.min(),B.min(),B.min(),Me.empty(),0)}static newFoundDocument(t,e,r,i){return new Qt(t,1,e,B.min(),r,i,0)}static newNoDocument(t,e){return new Qt(t,2,e,B.min(),B.min(),Me.empty(),0)}static newUnknownDocument(t,e){return new Qt(t,3,e,B.min(),B.min(),Me.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(B.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Me.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Me.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=B.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Qt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Qt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ls{constructor(t,e){this.position=t,this.inclusive=e}}function qc(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const s=t[i],o=n.position[i];if(s.field.isKeyField()?r=V.comparator(V.fromName(o.referenceValue),e.key):r=Ur(o,e.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function zc(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!ze(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class Ms{constructor(t,e="asc"){this.field=t,this.dir=e}}function Ov(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class Tf{}class Ct extends Tf{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Lv(t,e,r):e==="array-contains"?new Fv(t,r):e==="in"?new Uv(t,r):e==="not-in"?new Bv(t,r):e==="array-contains-any"?new jv(t,r):new Ct(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Mv(t,r):new xv(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Ur(e,this.value)):e!==null&&lr(this.value)===lr(e)&&this.matchesComparison(Ur(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return H()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class He extends Tf{constructor(t,e){super(),this.filters=t,this.op=e,this.ue=null}static create(t,e){return new He(t,e)}matches(t){return If(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function If(n){return n.op==="and"}function wf(n){return Vv(n)&&If(n)}function Vv(n){for(const t of n.filters)if(t instanceof He)return!1;return!0}function nl(n){if(n instanceof Ct)return n.field.canonicalString()+n.op.toString()+Br(n.value);if(wf(n))return n.filters.map(t=>nl(t)).join(",");{const t=n.filters.map(e=>nl(e)).join(",");return`${n.op}(${t})`}}function Af(n,t){return n instanceof Ct?function(r,i){return i instanceof Ct&&r.op===i.op&&r.field.isEqual(i.field)&&ze(r.value,i.value)}(n,t):n instanceof He?function(r,i){return i instanceof He&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&Af(o,i.filters[a]),!0):!1}(n,t):void H()}function Cf(n){return n instanceof Ct?function(e){return`${e.field.canonicalString()} ${e.op} ${Br(e.value)}`}(n):n instanceof He?function(e){return e.op.toString()+" {"+e.getFilters().map(Cf).join(" ,")+"}"}(n):"Filter"}class Lv extends Ct{constructor(t,e,r){super(t,e,r),this.key=V.fromName(r.referenceValue)}matches(t){const e=V.comparator(t.key,this.key);return this.matchesComparison(e)}}class Mv extends Ct{constructor(t,e){super(t,"in",e),this.keys=Rf("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class xv extends Ct{constructor(t,e){super(t,"not-in",e),this.keys=Rf("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Rf(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>V.fromName(r.referenceValue))}class Fv extends Ct{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return ru(e)&&Vi(e.arrayValue,this.value)}}class Uv extends Ct{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Vi(this.value.arrayValue,e)}}class Bv extends Ct{constructor(t,e){super(t,"not-in",e)}matches(t){if(Vi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Vi(this.value.arrayValue,e)}}class jv extends Ct{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!ru(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>Vi(this.value.arrayValue,r))}}/**
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
 */class qv{constructor(t,e=null,r=[],i=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function Hc(n,t=null,e=[],r=[],i=null,s=null,o=null){return new qv(n,t,e,r,i,s,o)}function iu(n){const t=tt(n);if(t.ce===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>nl(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),ao(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Br(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Br(r)).join(",")),t.ce=e}return t.ce}function su(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Ov(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Af(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!zc(n.startAt,t.startAt)&&zc(n.endAt,t.endAt)}function rl(n){return V.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class uo{constructor(t,e=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function zv(n,t,e,r,i,s,o,a){return new uo(n,t,e,r,i,s,o,a)}function ou(n){return new uo(n)}function Kc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Hv(n){return n.collectionGroup!==null}function gi(n){const t=tt(n);if(t.le===null){t.le=[];const e=new Set;for(const s of t.explicitOrderBy)t.le.push(s),e.add(s.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Ft(te.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(t).forEach(s=>{e.has(s.canonicalString())||s.isKeyField()||t.le.push(new Ms(s,r))}),e.has(te.keyField().canonicalString())||t.le.push(new Ms(te.keyField(),r))}return t.le}function je(n){const t=tt(n);return t.he||(t.he=Kv(t,gi(n))),t.he}function Kv(n,t){if(n.limitType==="F")return Hc(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Ms(i.field,s)});const e=n.endAt?new Ls(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Ls(n.startAt.position,n.startAt.inclusive):null;return Hc(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function il(n,t,e){return new uo(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function co(n,t){return su(je(n),je(t))&&n.limitType===t.limitType}function Sf(n){return`${iu(je(n))}|lt:${n.limitType}`}function wr(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(i=>Cf(i)).join(", ")}]`),ao(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(i=>Br(i)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(i=>Br(i)).join(",")),`Target(${r})`}(je(n))}; limitType=${n.limitType})`}function ho(n,t){return t.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):V.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,t)&&function(r,i){for(const s of gi(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,t)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,t)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=qc(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,gi(r),i)||r.endAt&&!function(o,a,l){const u=qc(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,gi(r),i))}(n,t)}function Gv(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Pf(n){return(t,e)=>{let r=!1;for(const i of gi(n)){const s=Wv(i,t,e);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Wv(n,t,e){const r=n.field.isKeyField()?V.comparator(t.key,e.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?Ur(l,u):H()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return H()}}/**
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
 */class Yr{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){lo(this.inner,(e,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return bv(this.inner)}size(){return this.innerSize}}/**
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
 */const Qv=new yt(V.comparator);function On(){return Qv}const bf=new yt(V.comparator);function ci(...n){let t=bf;for(const e of n)t=t.insert(e.key,e);return t}function Yv(n){let t=bf;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function Zn(){return _i()}function kf(){return _i()}function _i(){return new Yr(n=>n.toString(),(n,t)=>n.isEqual(t))}const Jv=new Ft(V.comparator);function Z(...n){let t=Jv;for(const e of n)t=t.add(e);return t}const $v=new Ft(nt);function Xv(){return $v}/**
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
 */function Zv(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Za(t)?"-0":t}}function tE(n){return{integerValue:""+n}}/**
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
 */class fo{constructor(){this._=void 0}}function eE(n,t,e){return n instanceof sl?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&eu(s)&&(s=nu(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(e,t):n instanceof xs?Df(n,t):n instanceof Fs?Nf(n,t):function(i,s){const o=rE(i,s),a=Gc(o)+Gc(i.Ie);return el(o)&&el(i.Ie)?tE(a):Zv(i.serializer,a)}(n,t)}function nE(n,t,e){return n instanceof xs?Df(n,t):n instanceof Fs?Nf(n,t):e}function rE(n,t){return n instanceof ol?function(r){return el(r)||function(s){return!!s&&"doubleValue"in s}(r)}(t)?t:{integerValue:0}:null}class sl extends fo{}class xs extends fo{constructor(t){super(),this.elements=t}}function Df(n,t){const e=Of(t);for(const r of n.elements)e.some(i=>ze(i,r))||e.push(r);return{arrayValue:{values:e}}}class Fs extends fo{constructor(t){super(),this.elements=t}}function Nf(n,t){let e=Of(t);for(const r of n.elements)e=e.filter(i=>!ze(i,r));return{arrayValue:{values:e}}}class ol extends fo{constructor(t,e){super(),this.serializer=t,this.Ie=e}}function Gc(n){return It(n.integerValue||n.doubleValue)}function Of(n){return ru(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function iE(n,t){return n.field.isEqual(t.field)&&function(r,i){return r instanceof xs&&i instanceof xs||r instanceof Fs&&i instanceof Fs?Fr(r.elements,i.elements,ze):r instanceof ol&&i instanceof ol?ze(r.Ie,i.Ie):r instanceof sl&&i instanceof sl}(n.transform,t.transform)}class nr{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new nr}static exists(t){return new nr(void 0,t)}static updateTime(t){return new nr(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function vs(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class au{}function Vf(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new oE(n.key,nr.none()):new lu(n.key,n.data,nr.none());{const e=n.data,r=Me.empty();let i=new Ft(te.comparator);for(let s of t.fields)if(!i.has(s)){let o=e.field(s);o===null&&s.length>1&&(s=s.popLast(),o=e.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new po(n.key,r,new Cn(i.toArray()),nr.none())}}function sE(n,t,e){n instanceof lu?function(i,s,o){const a=i.value.clone(),l=Qc(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,t,e):n instanceof po?function(i,s,o){if(!vs(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Qc(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(Lf(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,t,e):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,e)}function yi(n,t,e,r){return n instanceof lu?function(s,o,a,l){if(!vs(s.precondition,o))return a;const u=s.value.clone(),c=Yc(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(n,t,e,r):n instanceof po?function(s,o,a,l){if(!vs(s.precondition,o))return a;const u=Yc(s.fieldTransforms,l,o),c=o.data;return c.setAll(Lf(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(n,t,e,r):function(s,o,a){return vs(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,t,e)}function Wc(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Fr(r,i,(s,o)=>iE(s,o))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class lu extends au{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class po extends au{constructor(t,e,r,i,s=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Lf(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function Qc(n,t,e){const r=new Map;wt(n.length===e.length);for(let i=0;i<e.length;i++){const s=n[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,nE(o,a,e[i]))}return r}function Yc(n,t,e){const r=new Map;for(const i of n){const s=i.transform,o=e.data.field(i.field);r.set(i.field,eE(s,o,t))}return r}class oE extends au{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class aE{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&sE(s,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=yi(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=yi(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=kf();return this.mutations.forEach(i=>{const s=t.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=e.has(i.key)?null:a;const l=Vf(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(B.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),Z())}isEqual(t){return this.batchId===t.batchId&&Fr(this.mutations,t.mutations,(e,r)=>Wc(e,r))&&Fr(this.baseMutations,t.baseMutations,(e,r)=>Wc(e,r))}}/**
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
 */class lE{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class uE{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var Tt,X;function Mf(n){if(n===void 0)return qe("GRPC error has no .code"),T.UNKNOWN;switch(n){case Tt.OK:return T.OK;case Tt.CANCELLED:return T.CANCELLED;case Tt.UNKNOWN:return T.UNKNOWN;case Tt.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case Tt.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case Tt.INTERNAL:return T.INTERNAL;case Tt.UNAVAILABLE:return T.UNAVAILABLE;case Tt.UNAUTHENTICATED:return T.UNAUTHENTICATED;case Tt.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case Tt.NOT_FOUND:return T.NOT_FOUND;case Tt.ALREADY_EXISTS:return T.ALREADY_EXISTS;case Tt.PERMISSION_DENIED:return T.PERMISSION_DENIED;case Tt.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case Tt.ABORTED:return T.ABORTED;case Tt.OUT_OF_RANGE:return T.OUT_OF_RANGE;case Tt.UNIMPLEMENTED:return T.UNIMPLEMENTED;case Tt.DATA_LOSS:return T.DATA_LOSS;default:return H()}}(X=Tt||(Tt={}))[X.OK=0]="OK",X[X.CANCELLED=1]="CANCELLED",X[X.UNKNOWN=2]="UNKNOWN",X[X.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",X[X.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",X[X.NOT_FOUND=5]="NOT_FOUND",X[X.ALREADY_EXISTS=6]="ALREADY_EXISTS",X[X.PERMISSION_DENIED=7]="PERMISSION_DENIED",X[X.UNAUTHENTICATED=16]="UNAUTHENTICATED",X[X.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",X[X.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",X[X.ABORTED=10]="ABORTED",X[X.OUT_OF_RANGE=11]="OUT_OF_RANGE",X[X.UNIMPLEMENTED=12]="UNIMPLEMENTED",X[X.INTERNAL=13]="INTERNAL",X[X.UNAVAILABLE=14]="UNAVAILABLE",X[X.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function cE(){return new TextEncoder}/**
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
 */const hE=new Dr([4294967295,4294967295],0);function Jc(n){const t=cE().encode(n),e=new dv;return e.update(t),new Uint8Array(e.digest())}function $c(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new Dr([e,r],0),new Dr([i,s],0)]}class uu{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new hi(`Invalid padding: ${e}`);if(r<0)throw new hi(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new hi(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new hi(`Invalid padding when bitmap length is 0: ${e}`);this.Te=8*t.length-e,this.Ee=Dr.fromNumber(this.Te)}de(t,e,r){let i=t.add(e.multiply(Dr.fromNumber(r)));return i.compare(hE)===1&&(i=new Dr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const e=Jc(t),[r,i]=$c(e);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(t,e,r){const i=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),o=new uu(s,i,e);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.Te===0)return;const e=Jc(t),[r,i]=$c(e);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class hi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class mo{constructor(t,e,r,i,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const i=new Map;return i.set(t,Ji.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new mo(B.min(),i,new yt(nt),On(),Z())}}class Ji{constructor(t,e,r,i,s){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new Ji(r,e,Z(),Z(),Z())}}/**
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
 */class Es{constructor(t,e,r,i){this.Ve=t,this.removedTargetIds=e,this.key=r,this.me=i}}class xf{constructor(t,e){this.targetId=t,this.fe=e}}class Ff{constructor(t,e,r=$t.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=i}}class Xc{constructor(){this.ge=0,this.pe=th(),this.ye=$t.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.ye=t)}ve(){let t=Z(),e=Z(),r=Z();return this.pe.forEach((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:r=r.add(i);break;default:H()}}),new Ji(this.ye,this.we,t,e,r)}Fe(){this.Se=!1,this.pe=th()}Me(t,e){this.Se=!0,this.pe=this.pe.insert(t,e)}xe(t){this.Se=!0,this.pe=this.pe.remove(t)}Oe(){this.ge+=1}Ne(){this.ge-=1,wt(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class dE{constructor(t){this.Le=t,this.ke=new Map,this.qe=On(),this.Qe=Zc(),this.Ke=new yt(nt)}$e(t){for(const e of t.Ve)t.me&&t.me.isFoundDocument()?this.Ue(e,t.me):this.We(e,t.key,t.me);for(const e of t.removedTargetIds)this.We(e,t.key,t.me)}Ge(t){this.forEachTarget(t,e=>{const r=this.ze(e);switch(t.state){case 0:this.je(e)&&r.Ce(t.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(t.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(e);break;case 3:this.je(e)&&(r.Be(),r.Ce(t.resumeToken));break;case 4:this.je(e)&&(this.He(e),r.Ce(t.resumeToken));break;default:H()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ke.forEach((r,i)=>{this.je(i)&&e(i)})}Je(t){const e=t.targetId,r=t.fe.count,i=this.Ye(e);if(i){const s=i.target;if(rl(s))if(r===0){const o=new V(s.path);this.We(e,o,Qt.newNoDocument(o,B.min()))}else wt(r===1);else{const o=this.Ze(e);if(o!==r){const a=this.Xe(t),l=a?this.et(a,t,o):1;if(l!==0){this.He(e);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(e,u)}}}}}Xe(t){const e=t.fe.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=e;let o,a;try{o=ar(r).toUint8Array()}catch(l){if(l instanceof Ef)return xr("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new uu(o,i,s)}catch(l){return xr(l instanceof hi?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(t,e,r){return e.fe.count===r-this.rt(t,e.targetId)?0:2}rt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;t.mightContain(a)||(this.We(e,s,null),i++)}),i}it(t){const e=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&rl(a.target)){const l=new V(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,Qt.newNoDocument(l,t))}s.De&&(e.set(o,s.ve()),s.Fe())}});let r=Z();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Ye(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(t));const i=new mo(t,e,this.Ke,this.qe,r);return this.qe=On(),this.Qe=Zc(),this.Ke=new yt(nt),i}Ue(t,e){if(!this.je(t))return;const r=this.st(t,e.key)?2:0;this.ze(t).Me(e.key,r),this.qe=this.qe.insert(e.key,e),this.Qe=this.Qe.insert(e.key,this.ot(e.key).add(t))}We(t,e,r){if(!this.je(t))return;const i=this.ze(t);this.st(t,e)?i.Me(e,1):i.xe(e),this.Qe=this.Qe.insert(e,this.ot(e).delete(t)),r&&(this.qe=this.qe.insert(e,r))}removeTarget(t){this.ke.delete(t)}Ze(t){const e=this.ze(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Oe(t){this.ze(t).Oe()}ze(t){let e=this.ke.get(t);return e||(e=new Xc,this.ke.set(t,e)),e}ot(t){let e=this.Qe.get(t);return e||(e=new Ft(nt),this.Qe=this.Qe.insert(t,e)),e}je(t){const e=this.Ye(t)!==null;return e||R("WatchChangeAggregator","Detected inactive target",t),e}Ye(t){const e=this.ke.get(t);return e&&e.be?null:this.Le._t(t)}He(t){this.ke.set(t,new Xc),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.We(t,e,null)})}st(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Zc(){return new yt(V.comparator)}function th(){return new yt(V.comparator)}const fE={asc:"ASCENDING",desc:"DESCENDING"},pE={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},mE={and:"AND",or:"OR"};class gE{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function al(n,t){return n.useProto3Json||ao(t)?t:{value:t}}function _E(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function yE(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Nr(n){return wt(!!n),B.fromTimestamp(function(e){const r=Nn(e);return new se(r.seconds,r.nanos)}(n))}function vE(n,t){return ll(n,t).canonicalString()}function ll(n,t){const e=function(i){return new mt(["projects",i.projectId,"databases",i.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Uf(n){const t=mt.fromString(n);return wt(Hf(t)),t}function ka(n,t){const e=Uf(t);if(e.get(1)!==n.databaseId.projectId)throw new N(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new N(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new V(jf(e))}function Bf(n,t){return vE(n.databaseId,t)}function EE(n){const t=Uf(n);return t.length===4?mt.emptyPath():jf(t)}function eh(n){return new mt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function jf(n){return wt(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function TE(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:H()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(wt(c===void 0||typeof c=="string"),$t.fromBase64String(c||"")):(wt(c===void 0||c instanceof Uint8Array),$t.fromUint8Array(c||new Uint8Array))}(n,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(u){const c=u.code===void 0?T.UNKNOWN:Mf(u.code);return new N(c,u.message||"")}(o);e=new Ff(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=ka(n,r.document.name),s=Nr(r.document.updateTime),o=r.document.createTime?Nr(r.document.createTime):B.min(),a=new Me({mapValue:{fields:r.document.fields}}),l=Qt.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];e=new Es(u,c,l.key,l)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=ka(n,r.document),s=r.readTime?Nr(r.readTime):B.min(),o=Qt.newNoDocument(i,s),a=r.removedTargetIds||[];e=new Es([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=ka(n,r.document),s=r.removedTargetIds||[];e=new Es([],s,i,null)}else{if(!("filter"in t))return H();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new uE(i,s),a=r.targetId;e=new xf(a,o)}}return e}function IE(n,t){return{documents:[Bf(n,t.path)]}}function wE(n,t){const e={structuredQuery:{}},r=t.path;let i;t.collectionGroup!==null?(i=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Bf(n,i);const s=function(u){if(u.length!==0)return zf(He.create(u,"and"))}(t.filters);s&&(e.structuredQuery.where=s);const o=function(u){if(u.length!==0)return u.map(c=>function(d){return{field:Ar(d.field),direction:RE(d.dir)}}(c))}(t.orderBy);o&&(e.structuredQuery.orderBy=o);const a=al(n,t.limit);return a!==null&&(e.structuredQuery.limit=a),t.startAt&&(e.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(t.endAt)),{ut:e,parent:i}}function AE(n){let t=EE(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){wt(r===1);const c=e.from[0];c.allDescendants?i=c.collectionId:t=t.child(c.collectionId)}let s=[];e.where&&(s=function(f){const d=qf(f);return d instanceof He&&wf(d)?d.getFilters():[d]}(e.where));let o=[];e.orderBy&&(o=function(f){return f.map(d=>function(A){return new Ms(Cr(A.field),function(y){switch(y){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(d))}(e.orderBy));let a=null;e.limit&&(a=function(f){let d;return d=typeof f=="object"?f.value:f,ao(d)?null:d}(e.limit));let l=null;e.startAt&&(l=function(f){const d=!!f.before,p=f.values||[];return new Ls(p,d)}(e.startAt));let u=null;return e.endAt&&(u=function(f){const d=!f.before,p=f.values||[];return new Ls(p,d)}(e.endAt)),zv(t,i,o,s,a,"F",l,u)}function CE(n,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return H()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function qf(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Cr(e.unaryFilter.field);return Ct.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Cr(e.unaryFilter.field);return Ct.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Cr(e.unaryFilter.field);return Ct.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Cr(e.unaryFilter.field);return Ct.create(o,"!=",{nullValue:"NULL_VALUE"});default:return H()}}(n):n.fieldFilter!==void 0?function(e){return Ct.create(Cr(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return H()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return He.create(e.compositeFilter.filters.map(r=>qf(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return H()}}(e.compositeFilter.op))}(n):H()}function RE(n){return fE[n]}function SE(n){return pE[n]}function PE(n){return mE[n]}function Ar(n){return{fieldPath:n.canonicalString()}}function Cr(n){return te.fromServerFormat(n.fieldPath)}function zf(n){return n instanceof Ct?function(e){if(e.op==="=="){if(jc(e.value))return{unaryFilter:{field:Ar(e.field),op:"IS_NAN"}};if(Bc(e.value))return{unaryFilter:{field:Ar(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(jc(e.value))return{unaryFilter:{field:Ar(e.field),op:"IS_NOT_NAN"}};if(Bc(e.value))return{unaryFilter:{field:Ar(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ar(e.field),op:SE(e.op),value:e.value}}}(n):n instanceof He?function(e){const r=e.getFilters().map(i=>zf(i));return r.length===1?r[0]:{compositeFilter:{op:PE(e.op),filters:r}}}(n):H()}function Hf(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Rn{constructor(t,e,r,i,s=B.min(),o=B.min(),a=$t.EMPTY_BYTE_STRING,l=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(t){return new Rn(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Rn(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Rn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Rn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class bE{constructor(t){this.ct=t}}function kE(n){const t=AE({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?il(t,t.limit,"L"):t}/**
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
 */class DE{constructor(){this._n=new NE}addToCollectionParentIndex(t,e){return this._n.add(e),_.resolve()}getCollectionParents(t,e){return _.resolve(this._n.getEntries(e))}addFieldIndex(t,e){return _.resolve()}deleteFieldIndex(t,e){return _.resolve()}deleteAllFieldIndexes(t){return _.resolve()}createTargetIndexes(t,e){return _.resolve()}getDocumentsMatchingTarget(t,e){return _.resolve(null)}getIndexType(t,e){return _.resolve(0)}getFieldIndexes(t,e){return _.resolve([])}getNextCollectionGroupToUpdate(t){return _.resolve(null)}getMinOffset(t,e){return _.resolve(Dn.min())}getMinOffsetFromCollectionGroup(t,e){return _.resolve(Dn.min())}updateCollectionGroup(t,e,r){return _.resolve()}updateIndexEntries(t,e){return _.resolve()}}class NE{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new Ft(mt.comparator),s=!i.has(r);return this.index[e]=i.add(r),s}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new Ft(mt.comparator)).toArray()}}/**
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
 */class jr{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new jr(0)}static Bn(){return new jr(-1)}}/**
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
 */class OE{constructor(){this.changes=new Yr(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Qt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?_.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class VE{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class LE{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(r!==null&&yi(r.mutation,i,Cn.empty(),se.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,Z()).next(()=>r))}getLocalViewOfDocuments(t,e,r=Z()){const i=Zn();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,r).next(s=>{let o=ci();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(t,e){const r=Zn();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,Z()))}populateOverlays(t,e,r){const i=[];return r.forEach(s=>{e.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((o,a)=>{e.set(o,a)})})}computeViews(t,e,r,i){let s=On();const o=_i(),a=function(){return _i()}();return e.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof po)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),yi(c.mutation,u,c.mutation.getFieldMask(),se.now())):o.set(u.key,Cn.empty())}),this.recalculateAndSaveOverlays(t,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),e.forEach((u,c)=>{var f;return a.set(u,new VE(c,(f=o.get(u))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(t,e){const r=_i();let i=new yt((o,a)=>o-a),s=Z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=e.get(l);if(u===null)return;let c=r.get(l)||Cn.empty();c=a.applyToLocalView(u,c),r.set(l,c);const f=(i.get(a.batchId)||Z()).add(l);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,f=kf();c.forEach(d=>{if(!s.has(d)){const p=Vf(e.get(d),r.get(d));p!==null&&f.set(d,p),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,f))}return _.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,i){return function(o){return V.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Hv(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-s.size):_.resolve(Zn());let a=-1,l=s;return o.next(u=>_.forEach(u,(c,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(c)?_.resolve():this.remoteDocumentCache.getEntry(t,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(t,u,s)).next(()=>this.computeViews(t,l,u,Z())).next(c=>({batchId:a,changes:Yv(c)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new V(e)).next(r=>{let i=ci();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const s=e.collectionGroup;let o=ci();return this.indexManager.getCollectionParents(t,s).next(a=>_.forEach(a,l=>{const u=function(f,d){return new uo(d,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(e,l.child(s));return this.getDocumentsMatchingCollectionQuery(t,u,r,i).next(c=>{c.forEach((f,d)=>{o=o.insert(f,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,e,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,s,i))).next(o=>{s.forEach((l,u)=>{const c=u.getKey();o.get(c)===null&&(o=o.insert(c,Qt.newInvalidDocument(c)))});let a=ci();return o.forEach((l,u)=>{const c=s.get(l);c!==void 0&&yi(c.mutation,u,Cn.empty(),se.now()),ho(e,u)&&(a=a.insert(l,u))}),a})}}/**
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
 */class ME{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,e){return _.resolve(this.cr.get(e))}saveBundleMetadata(t,e){return this.cr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:Nr(i.createTime)}}(e)),_.resolve()}getNamedQuery(t,e){return _.resolve(this.lr.get(e))}saveNamedQuery(t,e){return this.lr.set(e.name,function(i){return{name:i.name,query:kE(i.bundledQuery),readTime:Nr(i.readTime)}}(e)),_.resolve()}}/**
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
 */class xE{constructor(){this.overlays=new yt(V.comparator),this.hr=new Map}getOverlay(t,e){return _.resolve(this.overlays.get(e))}getOverlays(t,e){const r=Zn();return _.forEach(e,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((i,s)=>{this.ht(t,e,s)}),_.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),_.resolve()}getOverlaysForCollection(t,e,r){const i=Zn(),s=e.length+1,o=new V(e.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!e.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return _.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let s=new yt((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===e&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Zn(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Zn(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return _.resolve(a)}ht(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new lE(e,r));let s=this.hr.get(e);s===void 0&&(s=Z(),this.hr.set(e,s)),this.hr.set(e,s.add(r.key))}}/**
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
 */class cu{constructor(){this.Pr=new Ft(St.Ir),this.Tr=new Ft(St.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,e){const r=new St(t,e);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Ar(new St(t,e))}Rr(t,e){t.forEach(r=>this.removeReference(r,e))}Vr(t){const e=new V(new mt([])),r=new St(e,t),i=new St(e,t+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const e=new V(new mt([])),r=new St(e,t),i=new St(e,t+1);let s=Z();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(t){const e=new St(t,0),r=this.Pr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class St{constructor(t,e){this.key=t,this.pr=e}static Ir(t,e){return V.comparator(t.key,e.key)||nt(t.pr,e.pr)}static Er(t,e){return nt(t.pr,e.pr)||V.comparator(t.key,e.key)}}/**
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
 */class FE{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.yr=1,this.wr=new Ft(St.Ir)}checkEmpty(t){return _.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new aE(s,e,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new St(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return _.resolve(o)}lookupMutationBatch(t,e){return _.resolve(this.Sr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.br(r),s=i<0?0:i;return _.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return _.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return _.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new St(e,0),i=new St(e,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),_.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new Ft(nt);return e.forEach(i=>{const s=new St(i,0),o=new St(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),_.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let s=r;V.isDocumentKey(s)||(s=s.child(""));const o=new St(new V(s),0);let a=new Ft(nt);return this.wr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.pr)),!0)},o),_.resolve(this.Dr(a))}Dr(t){const e=[];return t.forEach(r=>{const i=this.Sr(r);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){wt(this.Cr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return _.forEach(e.mutations,i=>{const s=new St(i.key,e.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.wr=r})}Mn(t){}containsKey(t,e){const r=new St(e,0),i=this.wr.firstAfterOrEqual(r);return _.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,_.resolve()}Cr(t,e){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const e=this.br(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class UE{constructor(t){this.vr=t,this.docs=function(){return new yt(V.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return _.resolve(r?r.document.mutableCopy():Qt.newInvalidDocument(e))}getEntries(t,e){let r=On();return e.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Qt.newInvalidDocument(i))}),_.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let s=On();const o=e.path,a=new V(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Av(wv(c),r)<=0||(i.has(c.key)||ho(e,c))&&(s=s.insert(c.key,c.mutableCopy()))}return _.resolve(s)}getAllFromCollectionGroup(t,e,r,i){H()}Fr(t,e){return _.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new BE(this)}getSize(t){return _.resolve(this.size)}}class BE extends OE{constructor(t){super(),this.ar=t}applyChanges(t){const e=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?e.push(this.ar.addEntry(t,i)):this.ar.removeEntry(r)}),_.waitFor(e)}getFromCache(t,e){return this.ar.getEntry(t,e)}getAllFromCache(t,e){return this.ar.getEntries(t,e)}}/**
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
 */class jE{constructor(t){this.persistence=t,this.Mr=new Yr(e=>iu(e),su),this.lastRemoteSnapshotVersion=B.min(),this.highestTargetId=0,this.Or=0,this.Nr=new cu,this.targetCount=0,this.Br=jr.Nn()}forEachTarget(t,e){return this.Mr.forEach((r,i)=>e(i)),_.resolve()}getLastRemoteSnapshotVersion(t){return _.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return _.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Br.next(),_.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Or&&(this.Or=e),_.resolve()}qn(t){this.Mr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Br=new jr(e),this.highestTargetId=e),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,e){return this.qn(e),this.targetCount+=1,_.resolve()}updateTargetData(t,e){return this.qn(e),_.resolve()}removeTargetData(t,e){return this.Mr.delete(e.target),this.Nr.Vr(e.targetId),this.targetCount-=1,_.resolve()}removeTargets(t,e,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=e&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),_.waitFor(s).next(()=>i)}getTargetCount(t){return _.resolve(this.targetCount)}getTargetData(t,e){const r=this.Mr.get(e)||null;return _.resolve(r)}addMatchingKeys(t,e,r){return this.Nr.dr(e,r),_.resolve()}removeMatchingKeys(t,e,r){this.Nr.Rr(e,r);const i=this.persistence.referenceDelegate,s=[];return i&&e.forEach(o=>{s.push(i.markPotentiallyOrphaned(t,o))}),_.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.Nr.Vr(e),_.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Nr.gr(e);return _.resolve(r)}containsKey(t,e){return _.resolve(this.Nr.containsKey(e))}}/**
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
 */class qE{constructor(t,e){this.Lr={},this.overlays={},this.kr=new tu(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new jE(this),this.indexManager=new DE,this.remoteDocumentCache=function(i){return new UE(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new bE(e),this.$r=new ME(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new xE,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Lr[t.toKey()];return r||(r=new FE(e,this.referenceDelegate),this.Lr[t.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,e,r){R("MemoryPersistence","Starting transaction:",t);const i=new zE(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(t,e){return _.or(Object.values(this.Lr).map(r=>()=>r.containsKey(t,e)))}}class zE extends Rv{constructor(t){super(),this.currentSequenceNumber=t}}class hu{constructor(t){this.persistence=t,this.zr=new cu,this.jr=null}static Hr(t){return new hu(t)}get Jr(){if(this.jr)return this.jr;throw H()}addReference(t,e,r){return this.zr.addReference(r,e),this.Jr.delete(r.toString()),_.resolve()}removeReference(t,e,r){return this.zr.removeReference(r,e),this.Jr.add(r.toString()),_.resolve()}markPotentiallyOrphaned(t,e){return this.Jr.add(e.toString()),_.resolve()}removeTarget(t,e){this.zr.Vr(e.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(t,e))}Ur(){this.jr=new Set}Wr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return _.forEach(this.Jr,r=>{const i=V.fromPath(r);return this.Yr(t,i).next(s=>{s||e.removeEntry(i,B.min())})}).next(()=>(this.jr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Yr(t,e).next(r=>{r?this.Jr.delete(e.toString()):this.Jr.add(e.toString())})}Kr(t){return 0}Yr(t,e){return _.or([()=>_.resolve(this.zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gr(t,e)])}}/**
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
 */class du{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.qi=r,this.Qi=i}static Ki(t,e){let r=Z(),i=Z();for(const s of e.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new du(t,e.fromCache,r,i)}}/**
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
 */class HE{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class KE{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return kp()?8:Xn.v(At())>0?6:4}()}initialize(t,e){this.zi=t,this.indexManager=e,this.$i=!0}getDocumentsMatchingQuery(t,e,r,i){const s={result:null};return this.ji(t,e).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(t,e,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new HE;return this.Ji(t,e,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(t,e,o,a.size)})}).next(()=>s.result)}Yi(t,e,r,i){return r.documentReadCount<this.Wi?(ii()<=J.DEBUG&&R("QueryEngine","SDK will not create cache indexes for query:",wr(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),_.resolve()):(ii()<=J.DEBUG&&R("QueryEngine","Query:",wr(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(ii()<=J.DEBUG&&R("QueryEngine","The SDK decides to create cache indexes for query:",wr(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,je(e))):_.resolve())}ji(t,e){if(Kc(e))return _.resolve(null);let r=je(e);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=il(e,null,"F"),r=je(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const o=Z(...s);return this.zi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(l=>{const u=this.Zi(e,a);return this.Xi(e,u,o,l.readTime)?this.ji(t,il(e,null,"F")):this.es(t,u,e,l)}))})))}Hi(t,e,r,i){return Kc(e)||i.isEqual(B.min())?_.resolve(null):this.zi.getDocuments(t,r).next(s=>{const o=this.Zi(e,s);return this.Xi(e,o,r,i)?_.resolve(null):(ii()<=J.DEBUG&&R("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),wr(e)),this.es(t,o,e,Iv(i,-1)).next(a=>a))})}Zi(t,e){let r=new Ft(Pf(t));return e.forEach((i,s)=>{ho(t,s)&&(r=r.add(s))}),r}Xi(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const s=t.limitType==="F"?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(t,e,r){return ii()<=J.DEBUG&&R("QueryEngine","Using full collection scan to execute query:",wr(e)),this.zi.getDocumentsMatchingQuery(t,e,Dn.min(),r)}es(t,e,r,i){return this.zi.getDocumentsMatchingQuery(t,r,i).next(s=>(e.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class GE{constructor(t,e,r,i){this.persistence=t,this.ts=e,this.serializer=i,this.ns=new yt(nt),this.rs=new Yr(s=>iu(s),su),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(r)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new LE(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.ns))}}function WE(n,t,e,r){return new GE(n,t,e,r)}async function Kf(n,t){const e=tt(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,e._s(t),e.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=Z();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return e.localDocuments.getDocuments(r,l).next(u=>({us:u,removedBatchIds:o,addedBatchIds:a}))})})}function Gf(n){const t=tt(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Qr.getLastRemoteSnapshotVersion(e))}function QE(n,t){const e=tt(n),r=t.snapshotVersion;let i=e.ns;return e.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=e.os.newChangeBuffer({trackRemovals:!0});i=e.ns;const a=[];t.targetChanges.forEach((c,f)=>{const d=i.get(f);if(!d)return;a.push(e.Qr.removeMatchingKeys(s,c.removedDocuments,f).next(()=>e.Qr.addMatchingKeys(s,c.addedDocuments,f)));let p=d.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(f)!==null?p=p.withResumeToken($t.EMPTY_BYTE_STRING,B.min()).withLastLimboFreeSnapshotVersion(B.min()):c.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(c.resumeToken,r)),i=i.insert(f,p),function(I,y,j){return I.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-I.snapshotVersion.toMicroseconds()>=3e8?!0:j.addedDocuments.size+j.modifiedDocuments.size+j.removedDocuments.size>0}(d,p,c)&&a.push(e.Qr.updateTargetData(s,p))});let l=On(),u=Z();if(t.documentUpdates.forEach(c=>{t.resolvedLimboDocuments.has(c)&&a.push(e.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(YE(s,o,t.documentUpdates).next(c=>{l=c.cs,u=c.ls})),!r.isEqual(B.min())){const c=e.Qr.getLastRemoteSnapshotVersion(s).next(f=>e.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return _.waitFor(a).next(()=>o.apply(s)).next(()=>e.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(e.ns=i,s))}function YE(n,t,e){let r=Z(),i=Z();return e.forEach(s=>r=r.add(s)),t.getEntries(n,r).next(s=>{let o=On();return e.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(B.min())?(t.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(l),o=o.insert(a,l)):R("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{cs:o,ls:i}})}function JE(n,t){const e=tt(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return e.Qr.getTargetData(r,t).next(s=>s?(i=s,_.resolve(i)):e.Qr.allocateTargetId(r).next(o=>(i=new Rn(t,o,"TargetPurposeListen",r.currentSequenceNumber),e.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=e.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.ns=e.ns.insert(r.targetId,r),e.rs.set(t,r.targetId)),r})}async function ul(n,t,e){const r=tt(n),i=r.ns.get(t),s=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Yi(o))throw o;R("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.ns=r.ns.remove(t),r.rs.delete(i.target)}function nh(n,t,e){const r=tt(n);let i=B.min(),s=Z();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,c){const f=tt(l),d=f.rs.get(c);return d!==void 0?_.resolve(f.ns.get(d)):f.Qr.getTargetData(u,c)}(r,o,je(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.ts.getDocumentsMatchingQuery(o,t,e?i:B.min(),e?s:Z())).next(a=>($E(r,Gv(t),a),{documents:a,hs:s})))}function $E(n,t,e){let r=n.ss.get(t)||B.min();e.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.ss.set(t,r)}class rh{constructor(){this.activeTargetIds=Xv()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class XE{constructor(){this.no=new rh,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,e,r){this.ro[t]=e}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new rh,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class ZE{io(t){}shutdown(){}}/**
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
 */class ih{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){R("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){R("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ps=null;function Da(){return ps===null?ps=function(){return 268435456+Math.round(2147483648*Math.random())}():ps++,"0x"+ps.toString(16)}/**
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
 */const tT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class eT{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}onMessage(t){this.Ao=t}close(){this.ho()}send(t){this.lo(t)}Ro(){this.Io()}Vo(t){this.Eo(t)}mo(t){this.Ao(t)}}/**
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
 */const Kt="WebChannelConnection";class nT extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+e.host,this.po=`projects/${i}/databases/${s}`,this.yo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get wo(){return!1}So(e,r,i,s,o){const a=Da(),l=this.bo(e,r.toUriEncodedString());R("RestConnection",`Sending RPC '${e}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(u,s,o),this.Co(e,l,u,i).then(c=>(R("RestConnection",`Received RPC '${e}' ${a}: `,c),c),c=>{throw xr("RestConnection",`RPC '${e}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}vo(e,r,i,s,o,a){return this.So(e,r,i,s,o)}Do(e,r,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Qr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>e[o]=s),i&&i.headers.forEach((s,o)=>e[o]=s)}bo(e,r){const i=tT[e];return`${this.fo}/v1/${r}:${i}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Co(t,e,r,i){const s=Da();return new Promise((o,a)=>{const l=new hv;l.setWithCredentials(!0),l.listenOnce(uv.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Pa.NO_ERROR:const c=l.getResponseJson();R(Kt,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(c)),o(c);break;case Pa.TIMEOUT:R(Kt,`RPC '${t}' ${s} timed out`),a(new N(T.DEADLINE_EXCEEDED,"Request time out"));break;case Pa.HTTP_ERROR:const f=l.getStatus();if(R(Kt,`RPC '${t}' ${s} failed with status:`,f,"response text:",l.getResponseText()),f>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const A=function(y){const j=y.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(j)>=0?j:T.UNKNOWN}(p.status);a(new N(A,p.message))}else a(new N(T.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new N(T.UNAVAILABLE,"Connection failed."));break;default:H()}}finally{R(Kt,`RPC '${t}' ${s} completed.`)}});const u=JSON.stringify(i);R(Kt,`RPC '${t}' ${s} sending request:`,i),l.send(e,"POST",u,r,15)})}Fo(t,e,r){const i=Da(),s=[this.fo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=av(),a=lv(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,e,r),l.encodeInitMessageHeaders=!0;const c=s.join("");R(Kt,`Creating RPC '${t}' stream ${i}: ${c}`,l);const f=o.createWebChannel(c,l);let d=!1,p=!1;const A=new eT({lo:y=>{p?R(Kt,`Not sending because RPC '${t}' stream ${i} is closed:`,y):(d||(R(Kt,`Opening RPC '${t}' stream ${i} transport.`),f.open(),d=!0),R(Kt,`RPC '${t}' stream ${i} sending:`,y),f.send(y))},ho:()=>f.close()}),I=(y,j,W)=>{y.listen(j,L=>{try{W(L)}catch(U){setTimeout(()=>{throw U},0)}})};return I(f,hs.EventType.OPEN,()=>{p||R(Kt,`RPC '${t}' stream ${i} transport opened.`)}),I(f,hs.EventType.CLOSE,()=>{p||(p=!0,R(Kt,`RPC '${t}' stream ${i} transport closed`),A.Vo())}),I(f,hs.EventType.ERROR,y=>{p||(p=!0,xr(Kt,`RPC '${t}' stream ${i} transport errored:`,y),A.Vo(new N(T.UNAVAILABLE,"The operation could not be completed")))}),I(f,hs.EventType.MESSAGE,y=>{var j;if(!p){const W=y.data[0];wt(!!W);const L=W,U=L.error||((j=L[0])===null||j===void 0?void 0:j.error);if(U){R(Kt,`RPC '${t}' stream ${i} received error:`,U);const $=U.status;let b=function(et){const K=Tt[et];if(K!==void 0)return Mf(K)}($),P=U.message;b===void 0&&(b=T.INTERNAL,P="Unknown error status: "+$+" with message "+U.message),p=!0,A.Vo(new N(b,P)),f.close()}else R(Kt,`RPC '${t}' stream ${i} received:`,W),A.mo(W)}}),I(a,cv.STAT_EVENT,y=>{y.stat===Vc.PROXY?R(Kt,`RPC '${t}' stream ${i} detected buffering proxy`):y.stat===Vc.NOPROXY&&R(Kt,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{A.Ro()},0),A}}function Na(){return typeof document<"u"?document:null}/**
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
 */function Wf(n){return new gE(n,!0)}/**
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
 */class Qf{constructor(t,e,r=1e3,i=1.5,s=6e4){this.oi=t,this.timerId=e,this.Mo=r,this.xo=i,this.Oo=s,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(t){this.cancel();const e=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Lo),i=Math.max(0,e-r);i>0&&R("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Lo=Date.now(),t())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Bo!==null&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){this.Bo!==null&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
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
 */class rT{constructor(t,e,r,i,s,o,a,l){this.oi=t,this.$o=r,this.Uo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new Qf(t,e)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(t){this.n_(),this.stream.send(t)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(t,e){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,t!==4?this.jo.reset():e&&e.code===T.RESOURCE_EXHAUSTED?(qe(e.toString()),qe("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):e&&e.code===T.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.To(e)}i_(){}auth(){this.state=1;const t=this.s_(this.Wo),e=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Wo===e&&this.o_(r,i)},r=>{t(()=>{const i=new N(T.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(i)})})}o_(t,e){const r=this.s_(this.Wo);this.stream=this.a_(t,e),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(i=>{r(()=>this.__(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(t){return R("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}s_(t){return e=>{this.oi.enqueueAndForget(()=>this.Wo===t?e():(R("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class iT extends rT{constructor(t,e,r,i,s,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,i,o),this.serializer=s}a_(t,e){return this.connection.Fo("Listen",t,e)}onMessage(t){this.jo.reset();const e=TE(this.serializer,t),r=function(s){if(!("targetChange"in s))return B.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?B.min():o.readTime?Nr(o.readTime):B.min()}(t);return this.listener.u_(e,r)}c_(t){const e={};e.database=eh(this.serializer),e.addTarget=function(s,o){let a;const l=o.target;if(a=rl(l)?{documents:IE(s,l)}:{query:wE(s,l).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=yE(s,o.resumeToken);const u=al(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(B.min())>0){a.readTime=_E(s,o.snapshotVersion.toTimestamp());const u=al(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,t);const r=CE(this.serializer,t);r&&(e.labels=r),this.t_(e)}l_(t){const e={};e.database=eh(this.serializer),e.removeTarget=t,this.t_(e)}}/**
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
 */class sT extends class{}{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.A_=!1}R_(){if(this.A_)throw new N(T.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,e,r,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.So(t,ll(e,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new N(T.UNKNOWN,s.toString())})}vo(t,e,r,i,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(t,ll(e,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new N(T.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class oT{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(t){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.y_("Offline")))}set(t){this.b_(),this.m_=0,t==="Online"&&(this.g_=!1),this.y_(t)}y_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}w_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(qe(e),this.g_=!1):R("OnlineStateTracker",e)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
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
 */class aT{constructor(t,e,r,i,s){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=s,this.M_.io(o=>{r.enqueueAndForget(async()=>{Xi(this)&&(R("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=tt(l);u.v_.add(4),await $i(u),u.x_.set("Unknown"),u.v_.delete(4),await go(u)}(this))})}),this.x_=new oT(r,i)}}async function go(n){if(Xi(n))for(const t of n.F_)await t(!0)}async function $i(n){for(const t of n.F_)await t(!1)}function Yf(n,t){const e=tt(n);e.C_.has(t.targetId)||(e.C_.set(t.targetId,t),mu(e)?pu(e):Jr(e).Jo()&&fu(e,t))}function Jf(n,t){const e=tt(n),r=Jr(e);e.C_.delete(t),r.Jo()&&$f(e,t),e.C_.size===0&&(r.Jo()?r.Xo():Xi(e)&&e.x_.set("Unknown"))}function fu(n,t){if(n.O_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(B.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Jr(n).c_(t)}function $f(n,t){n.O_.Oe(t),Jr(n).l_(t)}function pu(n){n.O_=new dE({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>n.C_.get(t)||null,nt:()=>n.datastore.serializer.databaseId}),Jr(n).start(),n.x_.p_()}function mu(n){return Xi(n)&&!Jr(n).Ho()&&n.C_.size>0}function Xi(n){return tt(n).v_.size===0}function Xf(n){n.O_=void 0}async function lT(n){n.C_.forEach((t,e)=>{fu(n,t)})}async function uT(n,t){Xf(n),mu(n)?(n.x_.S_(t),pu(n)):n.x_.set("Unknown")}async function cT(n,t,e){if(n.x_.set("Online"),t instanceof Ff&&t.state===2&&t.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.C_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.C_.delete(a),i.O_.removeTarget(a))}(n,t)}catch(r){R("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await sh(n,r)}else if(t instanceof Es?n.O_.$e(t):t instanceof xf?n.O_.Je(t):n.O_.Ge(t),!e.isEqual(B.min()))try{const r=await Gf(n.localStore);e.compareTo(r)>=0&&await function(s,o){const a=s.O_.it(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.C_.get(u);c&&s.C_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.C_.get(l);if(!c)return;s.C_.set(l,c.withResumeToken($t.EMPTY_BYTE_STRING,c.snapshotVersion)),$f(s,l);const f=new Rn(c.target,l,u,c.sequenceNumber);fu(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(n,e)}catch(r){R("RemoteStore","Failed to raise snapshot:",r),await sh(n,r)}}async function sh(n,t,e){if(!Yi(t))throw t;n.v_.add(1),await $i(n),n.x_.set("Offline"),e||(e=()=>Gf(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{R("RemoteStore","Retrying IndexedDB access"),await e(),n.v_.delete(1),await go(n)})}async function oh(n,t){const e=tt(n);e.asyncQueue.verifyOperationInProgress(),R("RemoteStore","RemoteStore received new credentials");const r=Xi(e);e.v_.add(3),await $i(e),r&&e.x_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.v_.delete(3),await go(e)}async function hT(n,t){const e=tt(n);t?(e.v_.delete(2),await go(e)):t||(e.v_.add(2),await $i(e),e.x_.set("Unknown"))}function Jr(n){return n.N_||(n.N_=function(e,r,i){const s=tt(e);return s.R_(),new iT(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Po:lT.bind(null,n),To:uT.bind(null,n),u_:cT.bind(null,n)}),n.F_.push(async t=>{t?(n.N_.Zo(),mu(n)?pu(n):n.x_.set("Unknown")):(await n.N_.stop(),Xf(n))})),n.N_}/**
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
 */class gu{constructor(t,e,r,i,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new kn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,s){const o=Date.now()+r,a=new gu(t,e,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(T.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Zf(n,t){if(qe("AsyncQueue",`${t}: ${n}`),Yi(n))return new N(T.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class Or{constructor(t){this.comparator=t?(e,r)=>t(e,r)||V.comparator(e.key,r.key):(e,r)=>V.comparator(e.key,r.key),this.keyedMap=ci(),this.sortedSet=new yt(this.comparator)}static emptySet(t){return new Or(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Or)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Or;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
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
 */class ah{constructor(){this.L_=new yt(V.comparator)}track(t){const e=t.doc.key,r=this.L_.get(e);r?t.type!==0&&r.type===3?this.L_=this.L_.insert(e,t):t.type===3&&r.type!==1?this.L_=this.L_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.L_=this.L_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.L_=this.L_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.L_=this.L_.remove(e):t.type===1&&r.type===2?this.L_=this.L_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.L_=this.L_.insert(e,{type:2,doc:t.doc}):H():this.L_=this.L_.insert(e,t)}k_(){const t=[];return this.L_.inorderTraversal((e,r)=>{t.push(r)}),t}}class qr{constructor(t,e,r,i,s,o,a,l,u){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(t,e,r,i,s){const o=[];return e.forEach(a=>{o.push({type:0,doc:a})}),new qr(t,e,Or.emptySet(e),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&co(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==r[i].type||!e[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class dT{constructor(){this.q_=void 0,this.Q_=[]}}class fT{constructor(){this.queries=new Yr(t=>Sf(t),co),this.onlineState="Unknown",this.K_=new Set}}async function pT(n,t){const e=tt(n),r=t.query;let i=!1,s=e.queries.get(r);if(s||(i=!0,s=new dT),i)try{s.q_=await e.onListen(r)}catch(o){const a=Zf(o,`Initialization of query '${wr(t.query)}' failed`);return void t.onError(a)}e.queries.set(r,s),s.Q_.push(t),t.U_(e.onlineState),s.q_&&t.W_(s.q_)&&_u(e)}async function mT(n,t){const e=tt(n),r=t.query;let i=!1;const s=e.queries.get(r);if(s){const o=s.Q_.indexOf(t);o>=0&&(s.Q_.splice(o,1),i=s.Q_.length===0)}if(i)return e.queries.delete(r),e.onUnlisten(r)}function gT(n,t){const e=tt(n);let r=!1;for(const i of t){const s=i.query,o=e.queries.get(s);if(o){for(const a of o.Q_)a.W_(i)&&(r=!0);o.q_=i}}r&&_u(e)}function _T(n,t,e){const r=tt(n),i=r.queries.get(t);if(i)for(const s of i.Q_)s.onError(e);r.queries.delete(t)}function _u(n){n.K_.forEach(t=>{t.next()})}class yT{constructor(t,e,r){this.query=t,this.G_=e,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new qr(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.z_?this.H_(t)&&(this.G_.next(t),e=!0):this.J_(t,this.onlineState)&&(this.Y_(t),e=!0),this.j_=t,e}onError(t){this.G_.error(t)}U_(t){this.onlineState=t;let e=!1;return this.j_&&!this.z_&&this.J_(this.j_,t)&&(this.Y_(this.j_),e=!0),e}J_(t,e){if(!t.fromCache)return!0;const r=e!=="Offline";return(!this.options.Z_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}H_(t){if(t.docChanges.length>0)return!0;const e=this.j_&&this.j_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}Y_(t){t=qr.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.z_=!0,this.G_.next(t)}}/**
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
 */class tp{constructor(t){this.key=t}}class ep{constructor(t){this.key=t}}class vT{constructor(t,e){this.query=t,this.oa=e,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=Z(),this.mutatedKeys=Z(),this.ua=Pf(t),this.ca=new Or(this.ua)}get la(){return this.oa}ha(t,e){const r=e?e.Pa:new ah,i=e?e.ca:this.ca;let s=e?e.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((c,f)=>{const d=i.get(c),p=ho(this.query,f)?f:null,A=!!d&&this.mutatedKeys.has(d.key),I=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let y=!1;d&&p?d.data.isEqual(p.data)?A!==I&&(r.track({type:3,doc:p}),y=!0):this.Ia(d,p)||(r.track({type:2,doc:p}),y=!0,(l&&this.ua(p,l)>0||u&&this.ua(p,u)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),y=!0):d&&!p&&(r.track({type:1,doc:d}),y=!0,(l||u)&&(a=!0)),y&&(p?(o=o.add(p),s=I?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{ca:o,Pa:r,Xi:a,mutatedKeys:s}}Ia(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,i){const s=this.ca;this.ca=t.ca,this.mutatedKeys=t.mutatedKeys;const o=t.Pa.k_();o.sort((c,f)=>function(p,A){const I=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return H()}};return I(p)-I(A)}(c.type,f.type)||this.ua(c.doc,f.doc)),this.Ta(r),i=i!=null&&i;const a=e&&!i?this.Ea():[],l=this.aa.size===0&&this.current&&!i?1:0,u=l!==this._a;return this._a=l,o.length!==0||u?{snapshot:new qr(this.query,t.ca,s,o,t.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),da:a}:{da:a}}U_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new ah,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{da:[]}}Aa(t){return!this.oa.has(t)&&!!this.ca.has(t)&&!this.ca.get(t).hasLocalMutations}Ta(t){t&&(t.addedDocuments.forEach(e=>this.oa=this.oa.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.oa=this.oa.delete(e)),this.current=t.current)}Ea(){if(!this.current)return[];const t=this.aa;this.aa=Z(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const e=[];return t.forEach(r=>{this.aa.has(r)||e.push(new ep(r))}),this.aa.forEach(r=>{t.has(r)||e.push(new tp(r))}),e}Ra(t){this.oa=t.hs,this.aa=Z();const e=this.ha(t.documents);return this.applyChanges(e,!0)}Va(){return qr.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class ET{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class TT{constructor(t){this.key=t,this.ma=!1}}class IT{constructor(t,e,r,i,s,o){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new Yr(a=>Sf(a),co),this.pa=new Map,this.ya=new Set,this.wa=new yt(V.comparator),this.Sa=new Map,this.ba=new cu,this.Da={},this.Ca=new Map,this.va=jr.Bn(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function wT(n,t){const e=kT(n);let r,i;const s=e.ga.get(t);if(s)r=s.targetId,e.sharedClientState.addLocalQueryTarget(r),i=s.view.Va();else{const o=await JE(e.localStore,je(t)),a=e.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await AT(e,t,r,a==="current",o.resumeToken),e.isPrimaryClient&&Yf(e.remoteStore,o)}return i}async function AT(n,t,e,r,i){n.Ma=(f,d,p)=>async function(I,y,j,W){let L=y.view.ha(j);L.Xi&&(L=await nh(I.localStore,y.query,!1).then(({documents:P})=>y.view.ha(P,L)));const U=W&&W.targetChanges.get(y.targetId),$=W&&W.targetMismatches.get(y.targetId)!=null,b=y.view.applyChanges(L,I.isPrimaryClient,U,$);return uh(I,y.targetId,b.da),b.snapshot}(n,f,d,p);const s=await nh(n.localStore,t,!0),o=new vT(t,s.hs),a=o.ha(s.documents),l=Ji.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",i),u=o.applyChanges(a,n.isPrimaryClient,l);uh(n,e,u.da);const c=new ET(t,e,o);return n.ga.set(t,c),n.pa.has(e)?n.pa.get(e).push(t):n.pa.set(e,[t]),u.snapshot}async function CT(n,t){const e=tt(n),r=e.ga.get(t),i=e.pa.get(r.targetId);if(i.length>1)return e.pa.set(r.targetId,i.filter(s=>!co(s,t))),void e.ga.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(r.targetId),e.sharedClientState.isActiveQueryTarget(r.targetId)||await ul(e.localStore,r.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(r.targetId),Jf(e.remoteStore,r.targetId),cl(e,r.targetId)}).catch($l)):(cl(e,r.targetId),await ul(e.localStore,r.targetId,!0))}async function np(n,t){const e=tt(n);try{const r=await QE(e.localStore,t);t.targetChanges.forEach((i,s)=>{const o=e.Sa.get(s);o&&(wt(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ma=!0:i.modifiedDocuments.size>0?wt(o.ma):i.removedDocuments.size>0&&(wt(o.ma),o.ma=!1))}),await ip(e,r,t)}catch(r){await $l(r)}}function lh(n,t,e){const r=tt(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.ga.forEach((s,o)=>{const a=o.view.U_(t);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=tt(o);l.onlineState=a;let u=!1;l.queries.forEach((c,f)=>{for(const d of f.Q_)d.U_(a)&&(u=!0)}),u&&_u(l)}(r.eventManager,t),i.length&&r.fa.u_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function RT(n,t,e){const r=tt(n);r.sharedClientState.updateQueryState(t,"rejected",e);const i=r.Sa.get(t),s=i&&i.key;if(s){let o=new yt(V.comparator);o=o.insert(s,Qt.newNoDocument(s,B.min()));const a=Z().add(s),l=new mo(B.min(),new Map,new yt(nt),o,a);await np(r,l),r.wa=r.wa.remove(s),r.Sa.delete(t),yu(r)}else await ul(r.localStore,t,!1).then(()=>cl(r,t,e)).catch($l)}function cl(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.pa.get(t))n.ga.delete(r),e&&n.fa.xa(r,e);n.pa.delete(t),n.isPrimaryClient&&n.ba.Vr(t).forEach(r=>{n.ba.containsKey(r)||rp(n,r)})}function rp(n,t){n.ya.delete(t.path.canonicalString());const e=n.wa.get(t);e!==null&&(Jf(n.remoteStore,e),n.wa=n.wa.remove(t),n.Sa.delete(e),yu(n))}function uh(n,t,e){for(const r of e)r instanceof tp?(n.ba.addReference(r.key,t),ST(n,r)):r instanceof ep?(R("SyncEngine","Document no longer in limbo: "+r.key),n.ba.removeReference(r.key,t),n.ba.containsKey(r.key)||rp(n,r.key)):H()}function ST(n,t){const e=t.key,r=e.path.canonicalString();n.wa.get(e)||n.ya.has(r)||(R("SyncEngine","New document in limbo: "+e),n.ya.add(r),yu(n))}function yu(n){for(;n.ya.size>0&&n.wa.size<n.maxConcurrentLimboResolutions;){const t=n.ya.values().next().value;n.ya.delete(t);const e=new V(mt.fromString(t)),r=n.va.next();n.Sa.set(r,new TT(e)),n.wa=n.wa.insert(e,r),Yf(n.remoteStore,new Rn(je(ou(e.path)),r,"TargetPurposeLimboResolution",tu._e))}}async function ip(n,t,e){const r=tt(n),i=[],s=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,l)=>{o.push(r.Ma(l,t,e).then(u=>{if((u||e)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=du.Ki(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.fa.u_(i),await async function(l,u){const c=tt(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>_.forEach(u,d=>_.forEach(d.qi,p=>c.persistence.referenceDelegate.addReference(f,d.targetId,p)).next(()=>_.forEach(d.Qi,p=>c.persistence.referenceDelegate.removeReference(f,d.targetId,p)))))}catch(f){if(!Yi(f))throw f;R("LocalStore","Failed to update sequence numbers: "+f)}for(const f of u){const d=f.targetId;if(!f.fromCache){const p=c.ns.get(d),A=p.snapshotVersion,I=p.withLastLimboFreeSnapshotVersion(A);c.ns=c.ns.insert(d,I)}}}(r.localStore,s))}async function PT(n,t){const e=tt(n);if(!e.currentUser.isEqual(t)){R("SyncEngine","User change. New user:",t.toKey());const r=await Kf(e.localStore,t);e.currentUser=t,function(s,o){s.Ca.forEach(a=>{a.forEach(l=>{l.reject(new N(T.CANCELLED,o))})}),s.Ca.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await ip(e,r.us)}}function bT(n,t){const e=tt(n),r=e.Sa.get(t);if(r&&r.ma)return Z().add(r.key);{let i=Z();const s=e.pa.get(t);if(!s)return i;for(const o of s){const a=e.ga.get(o);i=i.unionWith(a.view.la)}return i}}function kT(n){const t=tt(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=np.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=bT.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=RT.bind(null,t),t.fa.u_=gT.bind(null,t.eventManager),t.fa.xa=_T.bind(null,t.eventManager),t}class ch{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Wf(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return WE(this.persistence,new KE,t.initialUser,this.serializer)}createPersistence(t){return new qE(hu.Hr,this.serializer)}createSharedClientState(t){return new XE}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class DT{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>lh(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=PT.bind(null,this.syncEngine),await hT(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new fT}()}createDatastore(t){const e=Wf(t.databaseInfo.databaseId),r=function(s){return new nT(s)}(t.databaseInfo);return function(s,o,a,l){return new sT(s,o,a,l)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,i,s,o,a){return new aT(r,i,s,o,a)}(this.localStore,this.datastore,t.asyncQueue,e=>lh(this.syncEngine,e,0),function(){return ih.D()?new ih:new ZE}())}createSyncEngine(t,e){return function(i,s,o,a,l,u,c){const f=new IT(i,s,o,a,l,u);return c&&(f.Fa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t;await async function(r){const i=tt(r);R("RemoteStore","RemoteStore shutting down."),i.v_.add(5),await $i(i),i.M_.shutdown(),i.x_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
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
 */class NT{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ba(this.observer.next,t)}error(t){this.observer.error?this.Ba(this.observer.error,t):qe("Uncaught Error in snapshot listener:",t.toString())}La(){this.muted=!0}Ba(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */class OT{constructor(t,e,r,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=Wt.UNAUTHENTICATED,this.clientId=vf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{R("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(R("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new N(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new kn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Zf(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Oa(n,t){n.asyncQueue.verifyOperationInProgress(),R("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Kf(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function hh(n,t){n.asyncQueue.verifyOperationInProgress();const e=await LT(n);R("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>oh(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>oh(t.remoteStore,i)),n._onlineComponents=t}function VT(n){return n.name==="FirebaseError"?n.code===T.FAILED_PRECONDITION||n.code===T.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function LT(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){R("FirestoreClient","Using user provided OfflineComponentProvider");try{await Oa(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!VT(e))throw e;xr("Error using user provided cache. Falling back to memory cache: "+e),await Oa(n,new ch)}}else R("FirestoreClient","Using default OfflineComponentProvider"),await Oa(n,new ch);return n._offlineComponents}async function MT(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(R("FirestoreClient","Using user provided OnlineComponentProvider"),await hh(n,n._uninitializedComponentsProvider._online)):(R("FirestoreClient","Using default OnlineComponentProvider"),await hh(n,new DT))),n._onlineComponents}async function xT(n){const t=await MT(n),e=t.eventManager;return e.onListen=wT.bind(null,t.syncEngine),e.onUnlisten=CT.bind(null,t.syncEngine),e}function FT(n,t,e={}){const r=new kn;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new NT({next:d=>{o.enqueueAndForget(()=>mT(s,f));const p=d.docs.has(a);!p&&d.fromCache?u.reject(new N(T.UNAVAILABLE,"Failed to get document because the client is offline.")):p&&d.fromCache&&l&&l.source==="server"?u.reject(new N(T.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(d)},error:d=>u.reject(d)}),f=new yT(ou(a.path),c,{includeMetadataChanges:!0,Z_:!0});return pT(s,f)}(await xT(n),n.asyncQueue,t,e,r)),r.promise}/**
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
 */function sp(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const dh=new Map;/**
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
 */function UT(n,t,e){if(!e)throw new N(T.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function BT(n,t,e,r){if(t===!0&&r===!0)throw new N(T.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function fh(n){if(!V.isDocumentKey(n))throw new N(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function jT(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":H()}function hl(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new N(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=jT(n);throw new N(T.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */class ph{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new N(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new N(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}BT("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=sp((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new N(T.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new N(T.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new N(T.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class vu{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ph({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new N(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new N(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ph(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new fv;switch(r.type){case"firstParty":return new _v(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new N(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=dh.get(e);r&&(R("ComponentProvider","Removing Datastore"),dh.delete(e),r.terminate())}(this),Promise.resolve()}}function qT(n,t,e,r={}){var i;const s=(n=hl(n,vu))._getSettings(),o=`${t}:${e}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&xr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Wt.MOCK_USER;else{a=Ap(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new N(T.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Wt(u)}n._authCredentials=new pv(new yf(a,l))}}/**
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
 */class Eu{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Eu(this.firestore,t,this._query)}}class nn{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Li(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new nn(this.firestore,t,this._key)}}class Li extends Eu{constructor(t,e,r){super(t,e,ou(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new nn(this.firestore,null,new V(t))}withConverter(t){return new Li(this.firestore,t,this._path)}}function zT(n,t,...e){if(n=an(n),arguments.length===1&&(t=vf.newId()),UT("doc","path",t),n instanceof vu){const r=mt.fromString(t,...e);return fh(r),new nn(n,null,new V(r))}{if(!(n instanceof nn||n instanceof Li))throw new N(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(mt.fromString(t,...e));return fh(r),new nn(n.firestore,n instanceof Li?n.converter:null,new V(r))}}/**
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
 */class HT{constructor(){this.Xa=Promise.resolve(),this.eu=[],this.tu=!1,this.nu=[],this.ru=null,this.iu=!1,this.su=!1,this.ou=[],this.jo=new Qf(this,"async_queue_retry"),this._u=()=>{const e=Na();e&&R("AsyncQueue","Visibility state changed to "+e.visibilityState),this.jo.Ko()};const t=Na();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._u)}get isShuttingDown(){return this.tu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.au(),this.uu(t)}enterRestrictedMode(t){if(!this.tu){this.tu=!0,this.su=t||!1;const e=Na();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._u)}}enqueue(t){if(this.au(),this.tu)return new Promise(()=>{});const e=new kn;return this.uu(()=>this.tu&&this.su?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.eu.push(t),this.cu()))}async cu(){if(this.eu.length!==0){try{await this.eu[0](),this.eu.shift(),this.jo.reset()}catch(t){if(!Yi(t))throw t;R("AsyncQueue","Operation failed with retryable error: "+t)}this.eu.length>0&&this.jo.qo(()=>this.cu())}}uu(t){const e=this.Xa.then(()=>(this.iu=!0,t().catch(r=>{this.ru=r,this.iu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw qe("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.iu=!1,r))));return this.Xa=e,e}enqueueAfterDelay(t,e,r){this.au(),this.ou.indexOf(t)>-1&&(e=0);const i=gu.createAndSchedule(this,t,e,r,s=>this.lu(s));return this.nu.push(i),i}au(){this.ru&&H()}verifyOperationInProgress(){}async hu(){let t;do t=this.Xa,await t;while(t!==this.Xa)}Pu(t){for(const e of this.nu)if(e.timerId===t)return!0;return!1}Iu(t){return this.hu().then(()=>{this.nu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.nu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.hu()})}Tu(t){this.ou.push(t)}lu(t){const e=this.nu.indexOf(t);this.nu.splice(e,1)}}class op extends vu{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=function(){return new HT}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ap(this),this._firestoreClient.terminate()}}function KT(n,t){const e=typeof n=="object"?n:Lh(),r=typeof n=="string"?n:t||"(default)",i=yl(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Ip("firestore");s&&qT(i,...s)}return i}function GT(n){return n._firestoreClient||ap(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function ap(n){var t,e,r;const i=n._freezeSettings(),s=function(a,l,u,c){return new Dv(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,sp(c.experimentalLongPollingOptions),c.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new OT(n._authCredentials,n._appCheckCredentials,n._queue,s),!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class Us{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Us($t.fromBase64String(t))}catch(e){throw new N(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Us($t.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class lp{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new N(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new te(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class WT{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new N(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new N(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return nt(this._lat,t._lat)||nt(this._long,t._long)}}const QT=new RegExp("[~\\*/\\[\\]]");function YT(n,t,e){if(t.search(QT)>=0)throw mh(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new lp(...t.split("."))._internalPath}catch{throw mh(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function mh(n,t,e,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;e&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new N(T.INVALID_ARGUMENT,a+n+l)}/**
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
 */class up{constructor(t,e,r,i,s){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new nn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new JT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(cp("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class JT extends up{data(){return super.data()}}function cp(n,t){return typeof t=="string"?YT(n,t):t instanceof lp?t._internalPath:t._delegate._internalPath}class $T{convertValue(t,e="none"){switch(lr(t)){case 0:return null;case 1:return t.booleanValue;case 2:return It(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ar(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw H()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return lo(t,(i,s)=>{r[i]=this.convertValue(s,e)}),r}convertGeoPoint(t){return new WT(It(t.latitude),It(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=nu(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(Ni(t));default:return null}}convertTimestamp(t){const e=Nn(t);return new se(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=mt.fromString(t);wt(Hf(r));const i=new Oi(r.get(1),r.get(3)),s=new V(r.popFirst(5));return i.isEqual(e)||qe(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}/**
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
 */class XT{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class hp extends up{constructor(t,e,r,i,s,o){super(t,e,r,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new ZT(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(cp("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class ZT extends hp{data(t={}){return super.data(t)}}/**
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
 */function tI(n){n=hl(n,nn);const t=hl(n.firestore,op);return FT(GT(t),n._key).then(e=>nI(t,n,e))}class eI extends $T{constructor(t){super(),this.firestore=t}convertBytes(t){return new Us(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new nn(this.firestore,null,e)}}function nI(n,t,e){const r=e.docs.get(t._key),i=new eI(n);return new hp(n,i,t._key,r,new XT(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(i){Qr=i})(zr),Vr(new rr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new op(new mv(r.getProvider("auth-internal")),new vv(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new N(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Oi(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:e},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),bn(Lc,"4.4.1",t),bn(Lc,"4.4.1","esm2017")})();function si(n,t,e=0){if(!t)return 0;const r=n-e,i=Math.round(r*100);let s=0,o=i;for(const a of t.rates){if(o<=0)break;const{limit:l,rate:u}=a,c=Math.round(l*100),f=Math.min(o,c),d=Math.round(f*u);s+=d,o-=f}return s/100}const rI={2023:{rates:[{limit:160200,rate:.062},{limit:1/0,rate:0}]},2024:{rates:[{limit:168600,rate:.062},{limit:1/0,rate:0}]}},iI={rates:[{limit:25e4,rate:.0145},{limit:1/0,rate:.0235}]},Xe={2023:{joint:{federal:27700,"New York":{state:16050,city:0},"New Jersey":{state:0,city:0}},single:{federal:13850,"New York":{state:8e3,city:0},"New Jersey":{state:0,city:0}}},2024:{joint:{federal:29200,"New York":{state:18e3,city:0},"New Jersey":{state:0,city:0}},single:{federal:14600,"New York":{state:8e3,city:0},"New Jersey":{state:0,city:0}}}},ot=n=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(n),gh={2023:{"New York":{rates:[{limit:21950,rate:.04},{limit:45200,rate:.045},{limit:161550,rate:.0525},{limit:323200,rate:.059},{limit:1/0,rate:.0633}]},"New Jersey":{rates:[{limit:2e4,rate:.014},{limit:35e3,rate:.0175},{limit:4e4,rate:.035},{limit:75e3,rate:.05525},{limit:15e4,rate:.0637},{limit:5e5,rate:.0897},{limit:1/0,rate:.1075}]},Federal:{rates:[{limit:22e3,rate:.1},{limit:89450,rate:.12},{limit:190750,rate:.22},{limit:364200,rate:.24},{limit:462500,rate:.32},{limit:693750,rate:.35},{limit:1/0,rate:.37}]}},2024:{"New York":{rates:[{limit:17150,rate:.04},{limit:23600,rate:.045},{limit:27900,rate:.0525},{limit:161550,rate:.055},{limit:323200,rate:.06},{limit:2155350,rate:.0685},{limit:5e6,rate:.0965},{limit:25e6,rate:.103},{limit:1/0,rate:.109}]},"New Jersey":{rates:[{limit:2e4,rate:.014},{limit:35e3,rate:.0175},{limit:4e4,rate:.035},{limit:75e3,rate:.05525},{limit:15e4,rate:.0637},{limit:5e5,rate:.0897},{limit:1/0,rate:.1075}]},Federal:{rates:[{limit:23200,rate:.1},{limit:94300,rate:.12},{limit:201050,rate:.22},{limit:383900,rate:.24},{limit:487450,rate:.32},{limit:731200,rate:.35},{limit:1/0,rate:.37}]}}},sI={2023:{"New York":{rates:[{limit:21600,rate:.03078},{limit:45e3,rate:.03762},{limit:9e4,rate:.03819},{limit:1/0,rate:.03867}]}},2024:{"New York":{rates:[{limit:21600,rate:.03078},{limit:45e3,rate:.03762},{limit:9e4,rate:.03819},{limit:1/0,rate:.03867}]}}},oI=(n,t)=>{typeof window>"u"||localStorage.setItem(n,t)},aI=n=>{if(!(typeof window>"u"))return localStorage.getItem(n)};function lI(n){let t,e,r,i,s,o,a,l="<tr><th>Tax</th> <th>Amount</th></tr>",u,c,f,d,p="Federal",A,I,y=ot(n[3])+"",j,W,L,U,$="State",b,P,M=ot(n[2])+"",et,K,Ut,kt,oe="City",Q,ne,Rt=ot(n[4])+"",de,fe,pt,Xt,Te="Social Security",Ie,Dt,pe=ot(n[5])+"",Pe,Zt,ae,me,ln="Medicare",le,be,we=ot(n[6])+"",Bt,Ke,ue,re,un="Total",st,ut,vt=ot(n[7])+"",cn;return{c(){t=m("h2"),e=at(n[0]),r=at(" Taxes - "),i=at(n[1]),s=v(),o=m("table"),a=m("thead"),a.innerHTML=l,u=v(),c=m("tbody"),f=m("tr"),d=m("td"),d.textContent=p,A=v(),I=m("td"),j=at(y),W=v(),L=m("tr"),U=m("td"),U.textContent=$,b=v(),P=m("td"),et=at(M),K=v(),Ut=m("tr"),kt=m("td"),kt.textContent=oe,Q=v(),ne=m("td"),de=at(Rt),fe=v(),pt=m("tr"),Xt=m("td"),Xt.textContent=Te,Ie=v(),Dt=m("td"),Pe=at(pe),Zt=v(),ae=m("tr"),me=m("td"),me.textContent=ln,le=v(),be=m("td"),Bt=at(we),Ke=v(),ue=m("tr"),re=m("td"),re.textContent=un,st=v(),ut=m("td"),cn=at(vt),this.h()},l(it){t=g(it,"H2",{style:!0});var _t=Y(t);e=lt(_t,n[0]),r=lt(_t," Taxes - "),i=lt(_t,n[1]),_t.forEach(O),s=E(it),o=g(it,"TABLE",{style:!0});var hn=Y(o);a=g(hn,"THEAD",{"data-svelte-h":!0}),q(a)!=="svelte-91siwn"&&(a.innerHTML=l),u=E(hn),c=g(hn,"TBODY",{});var jt=Y(c);f=g(jt,"TR",{});var ge=Y(f);d=g(ge,"TD",{"data-svelte-h":!0}),q(d)!=="svelte-6waqll"&&(d.textContent=p),A=E(ge),I=g(ge,"TD",{});var $r=Y(I);j=lt($r,y),$r.forEach(O),ge.forEach(O),W=E(jt),L=g(jt,"TR",{});var dn=Y(L);U=g(dn,"TD",{"data-svelte-h":!0}),q(U)!=="svelte-qr71y5"&&(U.textContent=$),b=E(dn),P=g(dn,"TD",{});var _e=Y(P);et=lt(_e,M),_e.forEach(O),dn.forEach(O),K=E(jt),Ut=g(jt,"TR",{});var fn=Y(Ut);kt=g(fn,"TD",{"data-svelte-h":!0}),q(kt)!=="svelte-1yvq8zx"&&(kt.textContent=oe),Q=E(fn),ne=g(fn,"TD",{});var hr=Y(ne);de=lt(hr,Rt),hr.forEach(O),fn.forEach(O),fe=E(jt),pt=g(jt,"TR",{});var pn=Y(pt);Xt=g(pn,"TD",{"data-svelte-h":!0}),q(Xt)!=="svelte-1mp8mpj"&&(Xt.textContent=Te),Ie=E(pn),Dt=g(pn,"TD",{});var ke=Y(Dt);Pe=lt(ke,pe),ke.forEach(O),pn.forEach(O),Zt=E(jt),ae=g(jt,"TR",{});var xn=Y(ae);me=g(xn,"TD",{"data-svelte-h":!0}),q(me)!=="svelte-b4njfe"&&(me.textContent=ln),le=E(xn),be=g(xn,"TD",{});var dr=Y(be);Bt=lt(dr,we),dr.forEach(O),xn.forEach(O),Ke=E(jt),ue=g(jt,"TR",{});var ie=Y(ue);re=g(ie,"TD",{style:!0,"data-svelte-h":!0}),q(re)!=="svelte-dm4jeo"&&(re.textContent=un),st=E(ie),ut=g(ie,"TD",{style:!0});var fr=Y(ut);cn=lt(fr,vt),fr.forEach(O),ie.forEach(O),jt.forEach(O),hn.forEach(O),this.h()},h(){En(t,"text-transform","capitalize"),En(re,"border-top","1px solid black"),En(re,"font-weight","bold"),En(ut,"border-top","1px solid black"),En(ut,"font-weight","bold"),En(o,"border-collapse","collapse")},m(it,_t){Mt(it,t,_t),h(t,e),h(t,r),h(t,i),Mt(it,s,_t),Mt(it,o,_t),h(o,a),h(o,u),h(o,c),h(c,f),h(f,d),h(f,A),h(f,I),h(I,j),h(c,W),h(c,L),h(L,U),h(L,b),h(L,P),h(P,et),h(c,K),h(c,Ut),h(Ut,kt),h(Ut,Q),h(Ut,ne),h(ne,de),h(c,fe),h(c,pt),h(pt,Xt),h(pt,Ie),h(pt,Dt),h(Dt,Pe),h(c,Zt),h(c,ae),h(ae,me),h(ae,le),h(ae,be),h(be,Bt),h(c,Ke),h(c,ue),h(ue,re),h(ue,st),h(ue,ut),h(ut,cn)},p(it,[_t]){_t&1&&Gt(e,it[0]),_t&2&&Gt(i,it[1]),_t&8&&y!==(y=ot(it[3])+"")&&Gt(j,y),_t&4&&M!==(M=ot(it[2])+"")&&Gt(et,M),_t&16&&Rt!==(Rt=ot(it[4])+"")&&Gt(de,Rt),_t&32&&pe!==(pe=ot(it[5])+"")&&Gt(Pe,pe),_t&64&&we!==(we=ot(it[6])+"")&&Gt(Bt,we),_t&128&&vt!==(vt=ot(it[7])+"")&&Gt(cn,vt)},i:zu,o:zu,d(it){it&&(O(t),O(s),O(o))}}}function uI(n,t,e){let{stateTaxAmount:r,federalTaxAmount:i,cityTaxAmount:s,socialSecurityTaxAmount:o,medicareTaxAmount:a,interval:l,currentState:u}=t,c=r,f=i,d=s,p=o,A=a,I=r+i+s+o+a;return n.$$set=y=>{"stateTaxAmount"in y&&e(8,r=y.stateTaxAmount),"federalTaxAmount"in y&&e(9,i=y.federalTaxAmount),"cityTaxAmount"in y&&e(10,s=y.cityTaxAmount),"socialSecurityTaxAmount"in y&&e(11,o=y.socialSecurityTaxAmount),"medicareTaxAmount"in y&&e(12,a=y.medicareTaxAmount),"interval"in y&&e(0,l=y.interval),"currentState"in y&&e(1,u=y.currentState)},n.$$.update=()=>{if(n.$$.dirty&8061)switch(l){case"annual":e(2,c=r),e(3,f=i),e(4,d=s),e(5,p=o),e(6,A=a),e(7,I=c+f+d+p+A);break;case"monthly":e(2,c=r/12),e(3,f=i/12),e(4,d=s/12),e(5,p=o/12),e(6,A=a/12),e(7,I=c+f+d+p+A);break;case"fortnightly":e(2,c=r/26),e(3,f=i/26),e(4,d=s/26),e(5,p=o/26),e(6,A=a/26),e(7,I=c+f+d+p+A);break}},[l,u,c,f,d,p,A,I,r,i,s,o,a]}class cI extends pl{constructor(t){super(),ml(this,t,uI,lI,dl,{stateTaxAmount:8,federalTaxAmount:9,cityTaxAmount:10,socialSecurityTaxAmount:11,medicareTaxAmount:12,interval:0,currentState:1})}}function hI(n){let t,e=ot(n[0])+"",r,i,s,o,a,l,u=ot(n[9])+"",c,f,d,p,A=ot(n[10])+"",I,y,j,W,L=ot(n[8])+"",U,$;return s=new cI({props:{federalTaxAmount:n[3],stateTaxAmount:n[4],cityTaxAmount:n[5],socialSecurityTaxAmount:n[6],medicareTaxAmount:n[7],interval:n[2],currentState:n[1]}}),{c(){t=at("Taxable income: "),r=at(e),i=v(),vh(s.$$.fragment),o=v(),a=m("p"),l=at("Your monthly take-home pay: "),c=at(u),f=v(),d=m("br"),p=at(`
	Your biweekly take-home pay: `),I=at(A),y=v(),j=m("br"),W=at(`
	Your annual take-home pay: `),U=at(L)},l(b){t=lt(b,"Taxable income: "),r=lt(b,e),i=E(b),Eh(s.$$.fragment,b),o=E(b),a=g(b,"P",{});var P=Y(a);l=lt(P,"Your monthly take-home pay: "),c=lt(P,u),f=E(P),d=g(P,"BR",{}),p=lt(P,`
	Your biweekly take-home pay: `),I=lt(P,A),y=E(P),j=g(P,"BR",{}),W=lt(P,`
	Your annual take-home pay: `),U=lt(P,L),P.forEach(O)},m(b,P){Mt(b,t,P),Mt(b,r,P),Mt(b,i,P),Th(s,b,P),Mt(b,o,P),Mt(b,a,P),h(a,l),h(a,c),h(a,f),h(a,d),h(a,p),h(a,I),h(a,y),h(a,j),h(a,W),h(a,U),$=!0},p(b,[P]){(!$||P&1)&&e!==(e=ot(b[0])+"")&&Gt(r,e);const M={};P&8&&(M.federalTaxAmount=b[3]),P&16&&(M.stateTaxAmount=b[4]),P&32&&(M.cityTaxAmount=b[5]),P&64&&(M.socialSecurityTaxAmount=b[6]),P&128&&(M.medicareTaxAmount=b[7]),P&4&&(M.interval=b[2]),P&2&&(M.currentState=b[1]),s.$set(M),(!$||P&512)&&u!==(u=ot(b[9])+"")&&Gt(c,u),(!$||P&1024)&&A!==(A=ot(b[10])+"")&&Gt(I,A),(!$||P&256)&&L!==(L=ot(b[8])+"")&&Gt(U,L)},i(b){$||(Ih(s.$$.fragment,b),$=!0)},o(b){wh(s.$$.fragment,b),$=!1},d(b){b&&(O(t),O(r),O(i),O(o),O(a)),Ah(s,b)}}}function dI(n,t,e){let{currentYear:r="2023",currentState:i="New York",taxableIncome:s,yearlySalary:o,contributionPercentage:a,health_care_fsa_contribution:l,dependent_care_fsa_contribution:u,interval:c,monthlyMedicalContribution:f=0,monthlyDentalContribution:d=0,monthlyVisionContribution:p=0,filingStatus:A="joint"}=t,I,y,j,W,L,U,$,b,P,M,et,K=0,Ut=0,kt=0,oe;return n.$$set=Q=>{"currentYear"in Q&&e(11,r=Q.currentYear),"currentState"in Q&&e(1,i=Q.currentState),"taxableIncome"in Q&&e(0,s=Q.taxableIncome),"yearlySalary"in Q&&e(12,o=Q.yearlySalary),"contributionPercentage"in Q&&e(13,a=Q.contributionPercentage),"health_care_fsa_contribution"in Q&&e(14,l=Q.health_care_fsa_contribution),"dependent_care_fsa_contribution"in Q&&e(15,u=Q.dependent_care_fsa_contribution),"interval"in Q&&e(2,c=Q.interval),"monthlyMedicalContribution"in Q&&e(16,f=Q.monthlyMedicalContribution),"monthlyDentalContribution"in Q&&e(17,d=Q.monthlyDentalContribution),"monthlyVisionContribution"in Q&&e(18,p=Q.monthlyVisionContribution),"filingStatus"in Q&&e(19,A=Q.filingStatus)},n.$$.update=()=>{var Q,ne,Rt,de,fe,pt,Xt,Te;if(n.$$.dirty&134216187){e(26,oe=gh[r][i]),e(20,I=o*(a/100)),e(21,$=l),e(22,b=u);let Ie=f*12,Dt=d*12,pe=p*12;e(0,s=o-I-$-b-Ie-Dt-pe),e(23,P=((Rt=(ne=(Q=Xe==null?void 0:Xe[r])==null?void 0:Q[A])==null?void 0:ne[i])==null?void 0:Rt.state)??0),e(24,M=((fe=(de=Xe==null?void 0:Xe[r])==null?void 0:de[A])==null?void 0:fe.federal)??0),e(25,et=((Te=(Xt=(pt=Xe==null?void 0:Xe[r])==null?void 0:pt[A])==null?void 0:Xt[i])==null?void 0:Te.city)??0),e(4,j=si(s,oe,P)),e(3,y=si(s,gh[r].Federal,M)),e(5,W=si(s,sI[r][i],et)),e(6,L=si(s,rI[r])),e(7,U=si(s,iI)),e(8,kt=s-j-y-W-L-U),e(9,K=kt/12),e(10,Ut=kt/26)}},[s,i,c,y,j,W,L,U,kt,K,Ut,r,o,a,l,u,f,d,p,A,I,$,b,P,M,et,oe]}class fI extends pl{constructor(t){super(),ml(this,t,dI,hI,dl,{currentYear:11,currentState:1,taxableIncome:0,yearlySalary:12,contributionPercentage:13,health_care_fsa_contribution:14,dependent_care_fsa_contribution:15,interval:2,monthlyMedicalContribution:16,monthlyDentalContribution:17,monthlyVisionContribution:18,filingStatus:19})}}function _h(n,t,e){const r=n.slice();return r[53]=t[e],r[54]=t,r[55]=e,r}function pI(n){let t,e="Sign In",r,i,s,o,a="Email:",l,u,c,f,d,p,A="Password:",I,y,j,W,L,U,$="Sign In",b,P;return{c(){t=m("h2"),t.textContent=e,r=v(),i=m("div"),s=m("form"),o=m("label"),o.textContent=a,l=v(),u=m("input"),c=v(),f=m("br"),d=v(),p=m("label"),p.textContent=A,I=v(),y=m("input"),j=v(),W=m("br"),L=v(),U=m("button"),U.textContent=$,this.h()},l(M){t=g(M,"H2",{"data-svelte-h":!0}),q(t)!=="svelte-1f1zcva"&&(t.textContent=e),r=E(M),i=g(M,"DIV",{});var et=Y(i);s=g(et,"FORM",{action:!0});var K=Y(s);o=g(K,"LABEL",{for:!0,"data-svelte-h":!0}),q(o)!=="svelte-1flf0h4"&&(o.textContent=a),l=E(K),u=g(K,"INPUT",{type:!0,id:!0,autocomplete:!0}),c=E(K),f=g(K,"BR",{}),d=E(K),p=g(K,"LABEL",{for:!0,"data-svelte-h":!0}),q(p)!=="svelte-bhu94"&&(p.textContent=A),I=E(K),y=g(K,"INPUT",{type:!0,id:!0,autocomplete:!0}),j=E(K),W=g(K,"BR",{}),L=E(K),U=g(K,"BUTTON",{"data-svelte-h":!0}),q(U)!=="svelte-14tztva"&&(U.textContent=$),K.forEach(O),et.forEach(O),this.h()},h(){C(o,"for","email"),C(u,"type","email"),C(u,"id","email"),C(u,"autocomplete","email"),C(p,"for","password"),C(y,"type","password"),C(y,"id","password"),C(y,"autocomplete","current-password"),C(s,"action","")},m(M,et){Mt(M,t,et),Mt(M,r,et),Mt(M,i,et),h(i,s),h(s,o),h(s,l),h(s,u),G(u,n[8]),h(s,c),h(s,f),h(s,d),h(s,p),h(s,I),h(s,y),G(y,n[9]),h(s,j),h(s,W),h(s,L),h(s,U),b||(P=[dt(u,"input",n[26]),dt(y,"input",n[27]),dt(U,"click",n[24])],b=!0)},p(M,et){et[0]&256&&u.value!==M[8]&&G(u,M[8]),et[0]&512&&y.value!==M[9]&&G(y,M[9])},d(M){M&&(O(t),O(r),O(i)),b=!1,fl(P)}}}function mI(n){let t,e=n[7].email+"",r,i,s,o="Sign out",a,l;return{c(){t=at("Signed in as "),r=at(e),i=v(),s=m("button"),s.textContent=o},l(u){t=lt(u,"Signed in as "),r=lt(u,e),i=E(u),s=g(u,"BUTTON",{"data-svelte-h":!0}),q(s)!=="svelte-6agn43"&&(s.textContent=o)},m(u,c){Mt(u,t,c),Mt(u,r,c),Mt(u,i,c),Mt(u,s,c),a||(l=dt(s,"click",n[25]),a=!0)},p(u,c){c[0]&128&&e!==(e=u[7].email+"")&&Gt(r,e)},d(u){u&&(O(t),O(r),O(i),O(s)),a=!1,l()}}}function yh(n){let t,e,r,i,s,o,a="Remove",l,u,c;function f(){n[45].call(e,n[54],n[55])}function d(){n[46].call(i,n[54],n[55])}function p(){return n[47](n[55])}return{c(){t=m("div"),e=m("input"),r=v(),i=m("input"),s=v(),o=m("button"),o.textContent=a,l=v(),this.h()},l(A){t=g(A,"DIV",{});var I=Y(t);e=g(I,"INPUT",{type:!0,placeholder:!0}),r=E(I),i=g(I,"INPUT",{type:!0,placeholder:!0}),s=E(I),o=g(I,"BUTTON",{"data-svelte-h":!0}),q(o)!=="svelte-cieyql"&&(o.textContent=a),l=E(I),I.forEach(O),this.h()},h(){C(e,"type","text"),C(e,"placeholder","Expense Label"),C(i,"type","number"),C(i,"placeholder","Expense Amount")},m(A,I){Mt(A,t,I),h(t,e),G(e,n[53].label),h(t,r),h(t,i),G(i,n[53].amount),h(t,s),h(t,o),h(t,l),u||(c=[dt(e,"input",f),dt(i,"input",d),dt(o,"click",p)],u=!0)},p(A,I){n=A,I[0]&64&&e.value!==n[53].label&&G(e,n[53].label),I[0]&64&&ft(i.value)!==n[53].amount&&G(i,n[53].amount)},d(A){A&&O(t),u=!1,fl(c)}}}function gI(n){let t,e,r="Budget Calculator",i,s,o,a,l,u="Salary input",c,f,d,p,A="Person 1",I,y,j="Yearly Salary:",W,L,U,$,b,P,M="Expected Bonus (%):",et,K,Ut,kt,oe,Q,ne,Rt,de="401k Contribution (%):",fe,pt,Xt,Te,Ie,Dt,pe="Healthcare FSA Contribution ($):",Pe,Zt,ae,me,ln,le,be="Dependent Care FSA Contribution ($):",we,Bt,Ke,ue,re,un,st,ut,vt="Medical Deduction ($):",cn,it,_t,hn,jt,ge,$r="Dental Deduction ($):",dn,_e,fn,hr,pn,ke,xn="Vision Deduction ($):",dr,ie,fr,_o,yo,ht,pr,Tu="Multiple salaries not yet supported",vo,mr,Iu="Person 2",Eo,Fn,wu="Yearly Salary:",To,De,Io,wo,Ao,Un,Au="Expected Bonus (%):",Co,Ne,Ro,So,Po,Bn,Cu="401k Contribution (%):",bo,Oe,ko,ce,jn,Ru="Current Year:",Do,ye,Ge,Su="-- Select Year --",We,Pu="2023",Qe,bu="2024",No,Oo,Vo,qn,ku="Current US State:",Lo,ve,Ye,Du="-- Select State --",Je,Nu="New York (NY)",$e,Ou="New Jersey (NJ)",Mo,xo,Fo,Uo,gr,Vu="Bonus:",Bo,Xr=ot(n[18])+"",Zi,jo,qo,_r,Lu="401K Contribution:",zo,Zr=ot(n[19])+"",ts,Ho,yr,Ko,ti=ot(n[0]/12+n[3]/12)+"",es,Go,Wo,Qo,Yo,Jo,zn,Mu="Interval:",$o,mn,qt,Xo,Zo,gn,zt,ta,ea,_n,Ht,na,ra,Hn,ei,yn,ia,Ae,vr,xu="Expenses",sa,Kn,Fu="Add Expense",oa,Gn,aa,la,Uu;function Bu(S,z){return S[7]?mI:pI}let ns=Bu(n),Ce=ns(n);yn=new fI({props:{currentState:n[15],currentYear:n[16],taxableIncome:n[21],health_care_fsa_contribution:n[10],dependent_care_fsa_contribution:n[11],yearlySalary:n[0]+n[3],contributionPercentage:n[2]+n[5],interval:n[17],monthlyDentalContribution:n[13]/12,monthlyMedicalContribution:n[12]/12,monthlyVisionContribution:n[14]/12}});let Er=Gu(n[6]),Nt=[];for(let S=0;S<Er.length;S+=1)Nt[S]=yh(_h(n,Er,S));return aa=fp(n[42][0]),{c(){t=m("main"),e=m("h1"),e.textContent=r,i=v(),s=m("section"),Ce.c(),o=v(),a=m("section"),l=m("h2"),l.textContent=u,c=v(),f=m("div"),d=m("div"),p=m("h3"),p.textContent=A,I=v(),y=m("label"),y.textContent=j,W=v(),L=m("input"),U=v(),$=m("br"),b=v(),P=m("label"),P.textContent=M,et=v(),K=m("input"),Ut=v(),kt=m("br"),oe=v(),Q=m("br"),ne=v(),Rt=m("label"),Rt.textContent=de,fe=v(),pt=m("input"),Xt=v(),Te=m("br"),Ie=v(),Dt=m("label"),Dt.textContent=pe,Pe=v(),Zt=m("input"),ae=v(),me=m("br"),ln=v(),le=m("label"),le.textContent=be,we=v(),Bt=m("input"),Ke=v(),ue=m("br"),re=v(),un=m("br"),st=v(),ut=m("label"),ut.textContent=vt,cn=v(),it=m("input"),_t=v(),hn=m("br"),jt=v(),ge=m("label"),ge.textContent=$r,dn=v(),_e=m("input"),fn=v(),hr=m("br"),pn=v(),ke=m("label"),ke.textContent=xn,dr=v(),ie=m("input"),fr=v(),_o=m("br"),yo=v(),ht=m("div"),pr=m("em"),pr.textContent=Tu,vo=v(),mr=m("h3"),mr.textContent=Iu,Eo=v(),Fn=m("label"),Fn.textContent=wu,To=v(),De=m("input"),Io=v(),wo=m("br"),Ao=v(),Un=m("label"),Un.textContent=Au,Co=v(),Ne=m("input"),Ro=v(),So=m("br"),Po=v(),Bn=m("label"),Bn.textContent=Cu,bo=v(),Oe=m("input"),ko=v(),ce=m("p"),jn=m("label"),jn.textContent=Ru,Do=v(),ye=m("select"),Ge=m("option"),Ge.textContent=Su,We=m("option"),We.textContent=Pu,Qe=m("option"),Qe.textContent=bu,No=v(),Oo=m("br"),Vo=v(),qn=m("label"),qn.textContent=ku,Lo=v(),ve=m("select"),Ye=m("option"),Ye.textContent=Du,Je=m("option"),Je.textContent=Nu,$e=m("option"),$e.textContent=Ou,Mo=v(),xo=m("hr"),Fo=v(),Uo=m("br"),gr=m("b"),gr.textContent=Vu,Bo=v(),Zi=at(Xr),jo=v(),qo=m("br"),_r=m("b"),_r.textContent=Lu,zo=v(),ts=at(Zr),Ho=v(),yr=m("p"),Ko=at("Gross Monthly Income: "),es=at(ti),Go=v(),Wo=m("hr"),Qo=v(),Yo=m("br"),Jo=v(),zn=m("label"),zn.textContent=Mu,$o=v(),mn=m("label"),qt=m("input"),Xo=at(`
			Annual`),Zo=v(),gn=m("label"),zt=m("input"),ta=at(`
			Monthly`),ea=v(),_n=m("label"),Ht=m("input"),na=at(`
			Fortnightly`),ra=v(),Hn=m("div"),ei=m("div"),vh(yn.$$.fragment),ia=v(),Ae=m("section"),vr=m("h3"),vr.textContent=xu,sa=v(),Kn=m("button"),Kn.textContent=Fu,oa=v();for(let S=0;S<Nt.length;S+=1)Nt[S].c();this.h()},l(S){t=g(S,"MAIN",{class:!0});var z=Y(t);e=g(z,"H1",{"data-svelte-h":!0}),q(e)!=="svelte-u5wzxj"&&(e.textContent=r),i=E(z),s=g(z,"SECTION",{});var D=Y(s);Ce.l(D),o=E(D),a=g(D,"SECTION",{});var Ot=Y(a);l=g(Ot,"H2",{"data-svelte-h":!0}),q(l)!=="svelte-gzk6ig"&&(l.textContent=u),c=E(Ot),f=g(Ot,"DIV",{id:!0,class:!0});var Wn=Y(f);d=g(Wn,"DIV",{});var k=Y(d);p=g(k,"H3",{"data-svelte-h":!0}),q(p)!=="svelte-goopbe"&&(p.textContent=A),I=E(k),y=g(k,"LABEL",{for:!0,"data-svelte-h":!0}),q(y)!=="svelte-908ltx"&&(y.textContent=j),W=E(k),L=g(k,"INPUT",{type:!0,id:!0}),U=E(k),$=g(k,"BR",{}),b=E(k),P=g(k,"LABEL",{for:!0,"data-svelte-h":!0}),q(P)!=="svelte-1cqojg7"&&(P.textContent=M),et=E(k),K=g(k,"INPUT",{type:!0,id:!0}),Ut=E(k),kt=g(k,"BR",{}),oe=E(k),Q=g(k,"BR",{}),ne=E(k),Rt=g(k,"LABEL",{for:!0,"data-svelte-h":!0}),q(Rt)!=="svelte-1jizrnf"&&(Rt.textContent=de),fe=E(k),pt=g(k,"INPUT",{type:!0,id:!0}),Xt=E(k),Te=g(k,"BR",{}),Ie=E(k),Dt=g(k,"LABEL",{for:!0,"data-svelte-h":!0}),q(Dt)!=="svelte-euf23"&&(Dt.textContent=pe),Pe=E(k),Zt=g(k,"INPUT",{type:!0,id:!0}),ae=E(k),me=g(k,"BR",{}),ln=E(k),le=g(k,"LABEL",{for:!0,"data-svelte-h":!0}),q(le)!=="svelte-1e2sjer"&&(le.textContent=be),we=E(k),Bt=g(k,"INPUT",{type:!0,id:!0}),Ke=E(k),ue=g(k,"BR",{}),re=E(k),un=g(k,"BR",{}),st=E(k),ut=g(k,"LABEL",{for:!0,"data-svelte-h":!0}),q(ut)!=="svelte-1wejyn7"&&(ut.textContent=vt),cn=E(k),it=g(k,"INPUT",{type:!0,id:!0}),_t=E(k),hn=g(k,"BR",{}),jt=E(k),ge=g(k,"LABEL",{for:!0,"data-svelte-h":!0}),q(ge)!=="svelte-1v1rhud"&&(ge.textContent=$r),dn=E(k),_e=g(k,"INPUT",{type:!0,id:!0}),fn=E(k),hr=g(k,"BR",{}),pn=E(k),ke=g(k,"LABEL",{for:!0,"data-svelte-h":!0}),q(ke)!=="svelte-zdn7gl"&&(ke.textContent=xn),dr=E(k),ie=g(k,"INPUT",{type:!0,id:!0}),fr=E(k),_o=g(k,"BR",{}),k.forEach(O),yo=E(Wn),ht=g(Wn,"DIV",{style:!0});var Et=Y(ht);pr=g(Et,"EM",{"data-svelte-h":!0}),q(pr)!=="svelte-bcdtnj"&&(pr.textContent=Tu),vo=E(Et),mr=g(Et,"H3",{"data-svelte-h":!0}),q(mr)!=="svelte-1a84iof"&&(mr.textContent=Iu),Eo=E(Et),Fn=g(Et,"LABEL",{for:!0,"data-svelte-h":!0}),q(Fn)!=="svelte-mttl8q"&&(Fn.textContent=wu),To=E(Et),De=g(Et,"INPUT",{type:!0,id:!0}),Io=E(Et),wo=g(Et,"BR",{}),Ao=E(Et),Un=g(Et,"LABEL",{for:!0,"data-svelte-h":!0}),q(Un)!=="svelte-1weqosu"&&(Un.textContent=Au),Co=E(Et),Ne=g(Et,"INPUT",{type:!0,id:!0}),Ro=E(Et),So=g(Et,"BR",{}),Po=E(Et),Bn=g(Et,"LABEL",{for:!0,"data-svelte-h":!0}),q(Bn)!=="svelte-128ukag"&&(Bn.textContent=Cu),bo=E(Et),Oe=g(Et,"INPUT",{type:!0,id:!0}),Et.forEach(O),Wn.forEach(O),Ot.forEach(O),ko=E(D),ce=g(D,"P",{});var Ve=Y(ce);jn=g(Ve,"LABEL",{for:!0,"data-svelte-h":!0}),q(jn)!=="svelte-17urc6i"&&(jn.textContent=Ru),Do=E(Ve),ye=g(Ve,"SELECT",{id:!0});var rs=Y(ye);Ge=g(rs,"OPTION",{"data-svelte-h":!0}),q(Ge)!=="svelte-121j27n"&&(Ge.textContent=Su),We=g(rs,"OPTION",{"data-svelte-h":!0}),q(We)!=="svelte-185o45e"&&(We.textContent=Pu),Qe=g(rs,"OPTION",{"data-svelte-h":!0}),q(Qe)!=="svelte-d7saby"&&(Qe.textContent=bu),rs.forEach(O),No=E(Ve),Oo=g(Ve,"BR",{}),Vo=E(Ve),qn=g(Ve,"LABEL",{for:!0,"data-svelte-h":!0}),q(qn)!=="svelte-x7pvh8"&&(qn.textContent=ku),Lo=E(Ve),ve=g(Ve,"SELECT",{id:!0});var is=Y(ve);Ye=g(is,"OPTION",{"data-svelte-h":!0}),q(Ye)!=="svelte-30b5j3"&&(Ye.textContent=Du),Je=g(is,"OPTION",{"data-svelte-h":!0}),q(Je)!=="svelte-14igjfs"&&(Je.textContent=Nu),$e=g(is,"OPTION",{"data-svelte-h":!0}),q($e)!=="svelte-1xli4ar"&&($e.textContent=Ou),is.forEach(O),Ve.forEach(O),Mo=E(D),xo=g(D,"HR",{}),Fo=E(D),Uo=g(D,"BR",{}),gr=g(D,"B",{"data-svelte-h":!0}),q(gr)!=="svelte-1ydzksd"&&(gr.textContent=Vu),Bo=E(D),Zi=lt(D,Xr),jo=E(D),qo=g(D,"BR",{}),_r=g(D,"B",{"data-svelte-h":!0}),q(_r)!=="svelte-8fadtk"&&(_r.textContent=Lu),zo=E(D),ts=lt(D,Zr),Ho=E(D),yr=g(D,"P",{});var ua=Y(yr);Ko=lt(ua,"Gross Monthly Income: "),es=lt(ua,ti),ua.forEach(O),Go=E(D),Wo=g(D,"HR",{}),Qo=E(D),Yo=g(D,"BR",{}),Jo=E(D),zn=g(D,"LABEL",{for:!0,"data-svelte-h":!0}),q(zn)!=="svelte-1o5vfq0"&&(zn.textContent=Mu),$o=E(D),mn=g(D,"LABEL",{class:!0,for:!0});var ca=Y(mn);qt=g(ca,"INPUT",{class:!0,type:!0,id:!0,name:!0}),Xo=lt(ca,`
			Annual`),ca.forEach(O),Zo=E(D),gn=g(D,"LABEL",{class:!0,for:!0});var ha=Y(gn);zt=g(ha,"INPUT",{class:!0,type:!0,id:!0,name:!0}),ta=lt(ha,`
			Monthly`),ha.forEach(O),ea=E(D),_n=g(D,"LABEL",{class:!0,for:!0});var da=Y(_n);Ht=g(da,"INPUT",{class:!0,type:!0,id:!0,name:!0}),na=lt(da,`
			Fortnightly`),da.forEach(O),ra=E(D),Hn=g(D,"DIV",{id:!0,class:!0});var ju=Y(Hn);ei=g(ju,"DIV",{});var qu=Y(ei);Eh(yn.$$.fragment,qu),qu.forEach(O),ju.forEach(O),ia=E(D),Ae=g(D,"SECTION",{style:!0});var Tr=Y(Ae);vr=g(Tr,"H3",{"data-svelte-h":!0}),q(vr)!=="svelte-11jkbap"&&(vr.textContent=xu),sa=E(Tr),Kn=g(Tr,"BUTTON",{"data-svelte-h":!0}),q(Kn)!=="svelte-rmce5g"&&(Kn.textContent=Fu),oa=E(Tr);for(let fa=0;fa<Nt.length;fa+=1)Nt[fa].l(Tr);Tr.forEach(O),D.forEach(O),z.forEach(O),this.h()},h(){C(y,"for","yearlySalary1"),C(L,"type","number"),C(L,"id","yearlySalary1"),C(P,"for","bonusPercentage1"),C(K,"type","number"),C(K,"id","bonusPercentage1"),C(Rt,"for","contributionPercentage1"),C(pt,"type","number"),C(pt,"id","contributionPercentage1"),C(Dt,"for","healthCareContribution"),C(Zt,"type","number"),C(Zt,"id","healthCareContribution"),C(le,"for","dependentCareContribution"),C(Bt,"type","number"),C(Bt,"id","dependentCareContribution"),C(ut,"for","medicalDeduction"),C(it,"type","number"),C(it,"id","medicalDeduction"),C(ge,"for","dentalDeduction"),C(_e,"type","number"),C(_e,"id","dentalDeduction"),C(ke,"for","visionDeduction"),C(ie,"type","number"),C(ie,"id","visionDeduction"),C(Fn,"for","yearlySalary2"),De.disabled="disabled",C(De,"type","number"),C(De,"id","yearlySalary2"),C(Un,"for","bonusPercentage2"),Ne.disabled="disabled",C(Ne,"type","number"),C(Ne,"id","bonusPercentage2"),C(Bn,"for","contributionPercentage2"),Oe.disabled="disabled",C(Oe,"type","number"),C(Oe,"id","contributionPercentage2"),En(ht,"color","gray"),C(f,"id","salaryInput"),C(f,"class","svelte-7tf6md"),C(jn,"for","currentYear"),Ge.__value="",G(Ge,Ge.__value),We.__value="2023",G(We,We.__value),Qe.__value="2024",G(Qe,Qe.__value),C(ye,"id","currentYear"),n[16]===void 0&&Hu(()=>n[39].call(ye)),C(qn,"for","currentState"),Ye.__value="",G(Ye,Ye.__value),Je.__value="New York",G(Je,Je.__value),$e.__value="New Jersey",G($e,$e.__value),C(ve,"id","currentState"),n[15]===void 0&&Hu(()=>n[40].call(ve)),C(zn,"for","interval"),C(qt,"class","interval svelte-7tf6md"),C(qt,"type","radio"),C(qt,"id","annual"),C(qt,"name","interval"),qt.__value="annual",G(qt,qt.__value),C(mn,"class","interval svelte-7tf6md"),C(mn,"for","annual"),C(zt,"class","interval svelte-7tf6md"),C(zt,"type","radio"),C(zt,"id","monthly"),C(zt,"name","interval"),zt.__value="monthly",G(zt,zt.__value),C(gn,"class","interval svelte-7tf6md"),C(gn,"for","monthly"),C(Ht,"class","interval svelte-7tf6md"),C(Ht,"type","radio"),C(Ht,"id","fortnightly"),C(Ht,"name","interval"),Ht.__value="fortnightly",G(Ht,Ht.__value),C(_n,"class","interval svelte-7tf6md"),C(_n,"for","fortnightly"),C(Hn,"id","taxDisplay"),C(Hn,"class","svelte-7tf6md"),En(Ae,"display","none"),C(t,"class","svelte-7tf6md"),aa.p(qt,zt,Ht)},m(S,z){Mt(S,t,z),h(t,e),h(t,i),h(t,s),Ce.m(s,null),h(s,o),h(s,a),h(a,l),h(a,c),h(a,f),h(f,d),h(d,p),h(d,I),h(d,y),h(d,W),h(d,L),G(L,n[0]),h(d,U),h(d,$),h(d,b),h(d,P),h(d,et),h(d,K),G(K,n[1]),h(d,Ut),h(d,kt),h(d,oe),h(d,Q),h(d,ne),h(d,Rt),h(d,fe),h(d,pt),G(pt,n[2]),h(d,Xt),h(d,Te),h(d,Ie),h(d,Dt),h(d,Pe),h(d,Zt),G(Zt,n[10]),h(d,ae),h(d,me),h(d,ln),h(d,le),h(d,we),h(d,Bt),G(Bt,n[11]),h(d,Ke),h(d,ue),h(d,re),h(d,un),h(d,st),h(d,ut),h(d,cn),h(d,it),G(it,n[12]),h(d,_t),h(d,hn),h(d,jt),h(d,ge),h(d,dn),h(d,_e),G(_e,n[13]),h(d,fn),h(d,hr),h(d,pn),h(d,ke),h(d,dr),h(d,ie),G(ie,n[14]),h(d,fr),h(d,_o),h(f,yo),h(f,ht),h(ht,pr),h(ht,vo),h(ht,mr),h(ht,Eo),h(ht,Fn),h(ht,To),h(ht,De),G(De,n[3]),h(ht,Io),h(ht,wo),h(ht,Ao),h(ht,Un),h(ht,Co),h(ht,Ne),G(Ne,n[4]),h(ht,Ro),h(ht,So),h(ht,Po),h(ht,Bn),h(ht,bo),h(ht,Oe),G(Oe,n[5]),h(s,ko),h(s,ce),h(ce,jn),h(ce,Do),h(ce,ye),h(ye,Ge),h(ye,We),h(ye,Qe),ss(ye,n[16],!0),h(ce,No),h(ce,Oo),h(ce,Vo),h(ce,qn),h(ce,Lo),h(ce,ve),h(ve,Ye),h(ve,Je),h(ve,$e),ss(ve,n[15],!0),h(s,Mo),h(s,xo),h(s,Fo),h(s,Uo),h(s,gr),h(s,Bo),h(s,Zi),h(s,jo),h(s,qo),h(s,_r),h(s,zo),h(s,ts),h(s,Ho),h(s,yr),h(yr,Ko),h(yr,es),h(s,Go),h(s,Wo),h(s,Qo),h(s,Yo),h(s,Jo),h(s,zn),h(s,$o),h(s,mn),h(mn,qt),qt.checked=qt.__value===n[17],h(mn,Xo),h(s,Zo),h(s,gn),h(gn,zt),zt.checked=zt.__value===n[17],h(gn,ta),h(s,ea),h(s,_n),h(_n,Ht),Ht.checked=Ht.__value===n[17],h(_n,na),h(s,ra),h(s,Hn),h(Hn,ei),Th(yn,ei,null),h(s,ia),h(s,Ae),h(Ae,vr),h(Ae,sa),h(Ae,Kn),h(Ae,oa);for(let D=0;D<Nt.length;D+=1)Nt[D]&&Nt[D].m(Ae,null);Gn=!0,la||(Uu=[dt(L,"input",n[28]),dt(K,"input",n[29]),dt(pt,"input",n[30]),dt(Zt,"input",n[31]),dt(Bt,"input",n[32]),dt(it,"input",n[33]),dt(_e,"input",n[34]),dt(ie,"input",n[35]),dt(De,"input",n[36]),dt(Ne,"input",n[37]),dt(Oe,"input",n[38]),dt(ye,"change",n[39]),dt(ve,"change",n[40]),dt(qt,"change",n[41]),dt(zt,"change",n[43]),dt(Ht,"change",n[44]),dt(Kn,"click",n[22])],la=!0)},p(S,z){ns===(ns=Bu(S))&&Ce?Ce.p(S,z):(Ce.d(1),Ce=ns(S),Ce&&(Ce.c(),Ce.m(s,o))),z[0]&1&&ft(L.value)!==S[0]&&G(L,S[0]),z[0]&2&&ft(K.value)!==S[1]&&G(K,S[1]),z[0]&4&&ft(pt.value)!==S[2]&&G(pt,S[2]),z[0]&1024&&ft(Zt.value)!==S[10]&&G(Zt,S[10]),z[0]&2048&&ft(Bt.value)!==S[11]&&G(Bt,S[11]),z[0]&4096&&ft(it.value)!==S[12]&&G(it,S[12]),z[0]&8192&&ft(_e.value)!==S[13]&&G(_e,S[13]),z[0]&16384&&ft(ie.value)!==S[14]&&G(ie,S[14]),z[0]&8&&ft(De.value)!==S[3]&&G(De,S[3]),z[0]&16&&ft(Ne.value)!==S[4]&&G(Ne,S[4]),z[0]&32&&ft(Oe.value)!==S[5]&&G(Oe,S[5]),z[0]&65536&&ss(ye,S[16]),z[0]&32768&&ss(ve,S[15]),(!Gn||z[0]&262144)&&Xr!==(Xr=ot(S[18])+"")&&Gt(Zi,Xr),(!Gn||z[0]&524288)&&Zr!==(Zr=ot(S[19])+"")&&Gt(ts,Zr),(!Gn||z[0]&9)&&ti!==(ti=ot(S[0]/12+S[3]/12)+"")&&Gt(es,ti),z[0]&131072&&(qt.checked=qt.__value===S[17]),z[0]&131072&&(zt.checked=zt.__value===S[17]),z[0]&131072&&(Ht.checked=Ht.__value===S[17]);const D={};if(z[0]&32768&&(D.currentState=S[15]),z[0]&65536&&(D.currentYear=S[16]),z[0]&1024&&(D.health_care_fsa_contribution=S[10]),z[0]&2048&&(D.dependent_care_fsa_contribution=S[11]),z[0]&9&&(D.yearlySalary=S[0]+S[3]),z[0]&36&&(D.contributionPercentage=S[2]+S[5]),z[0]&131072&&(D.interval=S[17]),z[0]&8192&&(D.monthlyDentalContribution=S[13]/12),z[0]&4096&&(D.monthlyMedicalContribution=S[12]/12),z[0]&16384&&(D.monthlyVisionContribution=S[14]/12),yn.$set(D),z[0]&8388672){Er=Gu(S[6]);let Ot;for(Ot=0;Ot<Er.length;Ot+=1){const Wn=_h(S,Er,Ot);Nt[Ot]?Nt[Ot].p(Wn,z):(Nt[Ot]=yh(Wn),Nt[Ot].c(),Nt[Ot].m(Ae,null))}for(;Ot<Nt.length;Ot+=1)Nt[Ot].d(1);Nt.length=Er.length}},i(S){Gn||(Ih(yn.$$.fragment,S),Gn=!0)},o(S){wh(yn.$$.fragment,S),Gn=!1},d(S){S&&O(t),Ce.d(),Ah(yn),pp(Nt,S),aa.r(),la=!1,fl(Uu)}}}function _I(n,t,e){const i=Vh({apiKey:"AIzaSyC_wqKaOmHf0Nq31JOZtCt3pSQN_m1FOLk",authDomain:"budget-e231f.firebaseapp.com",projectId:"budget-e231f",storageBucket:"budget-e231f.appspot.com",messagingSenderId:"324153005171",appId:"1:324153005171:web:1a3196daf6a3b148b94606"}),s=oy(i),o=KT(i);let a=s.currentUser,l,u,c=1e5,f=5,d=3,p=100,A=100,I=1234,y=123,j=12,W=0,L=0,U=0,$="New Jersey",b="2024",P="annual",M=[],et,K,Ut;dp(()=>{const st=aI("expenses");e(6,M=st?JSON.parse(st):[])});function kt(){e(6,M=[...M,{label:"",amount:0}])}function oe(st){e(6,M=M.filter((ut,vt)=>vt!==st))}function Q(){if(!l||!u)return console.log("Email and password are required");Kg(s,l,u).then(st=>{const ut=st.user;console.log(ut)}).catch(st=>{console.log(st)})}Qg(s,async st=>{if(st){e(7,a=st);const ut=await tI(zT(o,"users",st.uid)),vt=ut.data();vt&&(e(2,d=vt["401k_contribution_1"]),e(10,p=vt.healthcare_fsa_contribution_1),e(11,A=vt.dependent_care_fsa_contribution_1),e(12,I=vt.annual_medical_deduction_1),e(13,y=vt.annual_dental_deduction_1),e(14,j??(j=vt.annual_vision_deduction_1)),e(0,c=vt.yearly_salary_1??c),e(1,f=vt.expected_bonus_1)),console.log(ut.data())}else e(7,a=null)});const ne=[[]],Rt=()=>s.signOut();function de(){l=this.value,e(8,l)}function fe(){u=this.value,e(9,u)}function pt(){c=ft(this.value),e(0,c)}function Xt(){f=ft(this.value),e(1,f)}function Te(){d=ft(this.value),e(2,d)}function Ie(){p=ft(this.value),e(10,p)}function Dt(){A=ft(this.value),e(11,A)}function pe(){I=ft(this.value),e(12,I)}function Pe(){y=ft(this.value),e(13,y)}function Zt(){j=ft(this.value),e(14,j)}function ae(){W=ft(this.value),e(3,W)}function me(){L=ft(this.value),e(4,L)}function ln(){U=ft(this.value),e(5,U)}function le(){b=Ku(this),e(16,b)}function be(){$=Ku(this),e(15,$)}function we(){P=this.__value,e(17,P)}function Bt(){P=this.__value,e(17,P)}function Ke(){P=this.__value,e(17,P)}function ue(st,ut){st[ut].label=this.value,e(6,M)}function re(st,ut){st[ut].amount=ft(this.value),e(6,M)}const un=st=>oe(st);return n.$$.update=()=>{n.$$.dirty[0]&63&&(e(18,et=c*(f/100)),e(19,K=c*(d/100))),n.$$.dirty[0]&64&&oI("expenses",JSON.stringify(M))},[c,f,d,W,L,U,M,a,l,u,p,A,I,y,j,$,b,P,et,K,s,Ut,kt,oe,Q,Rt,de,fe,pt,Xt,Te,Ie,Dt,pe,Pe,Zt,ae,me,ln,le,be,we,ne,Bt,Ke,ue,re,un]}class wI extends pl{constructor(t){super(),ml(this,t,_I,gI,dl,{},null,[-1,-1])}}export{wI as component};
