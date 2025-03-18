(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{5531:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(2265);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),a=(...e)=>e.filter((e,t,r)=>!!e&&r.indexOf(e)===t).join(" ");/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=(0,n.forwardRef)(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:s,className:i="",children:l,iconNode:c,...u},f)=>(0,n.createElement)("svg",{ref:f,...o,width:t,height:t,stroke:e,strokeWidth:s?24*Number(r)/Number(t):r,className:a("lucide",i),...u},[...c.map(([e,t])=>(0,n.createElement)(e,t)),...Array.isArray(l)?l:[l]])),l=(e,t)=>{let r=(0,n.forwardRef)(({className:r,...o},l)=>(0,n.createElement)(i,{ref:l,iconNode:t,className:a(`lucide-${s(e)}`,r),...o}));return r.displayName=`${e}`,r}},4411:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(5531);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,n.Z)("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]])},7210:function(e,t,r){Promise.resolve().then(r.bind(r,7139))},7139:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return i}});var n=r(7437),s=r(2265),a=r(4033),o=r(4411);function i(){let e=(0,a.useRouter)(),[t,r]=(0,s.useState)("");return(0,n.jsx)("main",{className:"min-h-screen bg-black text-white flex items-center justify-center p-4",children:(0,n.jsxs)("div",{className:"max-w-2xl w-full space-y-8 text-center",children:[(0,n.jsxs)("div",{className:"space-y-4",children:[(0,n.jsx)("div",{className:"flex justify-center",children:(0,n.jsx)(o.Z,{className:"h-16 w-16 text-blue-500"})}),(0,n.jsx)("h1",{className:"text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent",children:"Welcome to VeriSage"}),(0,n.jsx)("p",{className:"text-lg text-gray-400",children:"Real-time news verification powered by AI"})]}),(0,n.jsxs)("div",{className:"space-y-4 max-w-md mx-auto",children:[(0,n.jsxs)("div",{className:"space-y-2",children:[(0,n.jsx)("label",{htmlFor:"goal",className:"block text-sm font-medium text-gray-300 text-left",children:"Verification Goal"}),(0,n.jsx)("input",{id:"goal",type:"text",value:t,onChange:e=>r(e.target.value),placeholder:"e.g., verify breaking news or detect propaganda shifts",className:"w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"})]}),(0,n.jsx)("button",{onClick:()=>{t.trim()&&(localStorage.setItem("verificationGoal",t),e.push("/editor"))},className:"w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black",children:"Get Started"})]}),(0,n.jsx)("p",{className:"text-sm text-gray-500",children:"Advanced news verification and disinformation detection"})]})})}},622:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(2265),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var n,a={},c=null,u=null;for(n in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)o.call(t,n)&&!l.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:s,type:e,key:c,ref:u,props:a,_owner:i.current}}t.Fragment=a,t.jsx=c,t.jsxs=c},7437:function(e,t,r){"use strict";e.exports=r(622)},4033:function(e,t,r){e.exports=r(290)}},function(e){e.O(0,[971,864,744],function(){return e(e.s=7210)}),_N_E=e.O()}]);