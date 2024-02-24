import{d as m,M as f,I as u,e as x}from"./index-DLecA35h.js";import{u as l}from"./index-CG9NbRqz.js";import"./iframe-CZ-TuoIS.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BRugYpS_.js";import"./index-BNKdAXne.js";import"./index-DrFu-skq.js";var d={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g=m,j=Symbol.for("react.element"),_=Symbol.for("react.fragment"),w=Object.prototype.hasOwnProperty,v=g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y={key:!0,ref:!0,__self:!0,__source:!0};function p(i,e,t){var n,o={},a=null,h=null;t!==void 0&&(a=""+t),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(h=e.ref);for(n in e)w.call(e,n)&&!y.hasOwnProperty(n)&&(o[n]=e[n]);if(i&&i.defaultProps)for(n in e=i.defaultProps,e)o[n]===void 0&&(o[n]=e[n]);return{$$typeof:j,type:i,key:a,ref:h,props:o,_owner:v.current}}s.Fragment=_;s.jsx=p;s.jsxs=p;d.exports=s;var r=d.exports;const b=["hi-angle-down","hi-angle-dropdown","hi-angle-left","hi-angle-right","hi-arrow-down","hi-arrow-left","hi-arrow-right","hi-arrow-up","hi-arrow-up-down","hi-bell","hi-calendar","hi-cancel","hi-close","hi-delete","hi-diagram","hi-dots-horizontal","hi-dots-vertical","hi-download","hi-download-file","hi-edit","hi-envelope-o","hi-estimate","hi-exclamation","hi-feedback","hi-file","hi-hide","hi-icon-filter","hi-info","hi-magnifier","hi-person","hi-pfizer","hi-plus-fill","hi-reset","hi-round-check","hi-square-menu","hi-square-menu-fill","hi-star","hi-text-file","hi-thumb","hi-unfold-more","hi-upload-cloud","hi-view"],N=()=>{const i=Object.assign({svg:"svg",path:"path"},l());return r.jsx(i.svg,{viewBox:"0 0 14 14",width:"8px",height:"14px",style:{marginLeft:"4px",display:"inline-block",shapeRendering:"inherit",verticalAlign:"middle",fill:"currentColor","path fill":"currentColor"},children:r.jsx(i.path,{d:"m11.1 7.35-5.5 5.5a.5.5 0 0 1-.7-.7L10.04 7 4.9 1.85a.5.5 0 1 1 .7-.7l5.5 5.5c.2.2.2.5 0 .7Z"})})};function c(i){const e=Object.assign({h1:"h1",span:"span"},l(),i.components);return r.jsxs(r.Fragment,{children:[r.jsx(f,{title:"Icons"}),`
`,r.jsx("div",{className:"sb-container",children:r.jsxs("div",{className:"sb-section ",children:[r.jsx(e.h1,{id:"icons",children:"Icons"}),r.jsx(u,{children:b.map(t=>r.jsx(x,{name:t,children:r.jsx(e.span,{className:t})}))})]})}),`
`,r.jsx("style",{children:`
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-items: center;
    gap: 1rem;
  }

  #icons {
    grid-column: 1/4;
    justify-self: start;
  }

  span {
    font-size: 2rem;
  `})]})}function D(i={}){const{wrapper:e}=Object.assign({},l(),i.components);return e?r.jsx(e,Object.assign({},i,{children:r.jsx(c,i)})):c(i)}export{N as RightArrow,D as default};
//# sourceMappingURL=Icons-KyCuJAow.js.map
