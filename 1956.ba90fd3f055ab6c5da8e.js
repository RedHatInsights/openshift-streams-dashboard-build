"use strict";(self.webpackChunkapplication_services_ui=self.webpackChunkapplication_services_ui||[]).push([[1956,2623,8571],{50058:(e,t,n)=>{n.r(t),n.d(t,{AppEntry:()=>I,default:()=>C});var i=n(70655),r=n(85893),s=n(93264),d=n(86706),o=n(73685),a=n(94500),c=n.n(a),l=n(71631),u=n(76166),v=n(40493),h=n(26836),m=n(18047),f=n(31589),p=n(36494),b=n(37687),g=n(71355),x=n(83463),j=n(97644),k=(n(79658),n(85169)),y=n(68698);null!==window.localStorage.getItem("xstate-inspect")&&(0,l.XY)({iframe:!1});const w=({children:e})=>{const[t,n]=(0,s.useState)(),a=(0,v.aC)(),c=(0,d.useDispatch)(),l=(0,v.gI)();(0,s.useEffect)((()=>{(0,i.mG)(void 0,void 0,void 0,(function*(){const e=yield l();n(e)}))}),[l]);const u={addAlert:({title:e,variant:t,description:n,dataTestId:i,autoDismiss:r,dismissable:s,dismissDelay:d,requestId:o,sentryId:a})=>{c((0,g.addNotification)({title:e,variant:t,description:n,dataTestId:i,autoDismiss:r||!0,dismissable:s||!0,dismissDelay:d||8e3,requestId:o,sentryId:a}))}},h=(0,b.Z)(window.location.pathname),{kas:m,getUsername:f,isOrgAdmin:p}=a;return(0,r.jsx)(j.AuthContext.Provider,Object.assign({value:a},{children:(0,r.jsx)(k.V.Provider,Object.assign({value:{getToken:m.getToken,getUsername:f,isOrgAdmin:p,tokenEndPointUrl:null==t?void 0:t.token_url}},{children:(0,r.jsx)(j.AlertContext.Provider,Object.assign({value:u},{children:(0,r.jsx)(x.ModalProvider,{children:(0,r.jsx)(o.BrowserRouter,Object.assign({basename:h},{children:(0,r.jsx)(y.Gg,{children:e})}))})}))}))}))},S=({children:e})=>void 0===(0,s.useContext)(j.ConfigContext)?(0,r.jsx)(x.AppServicesLoading,{}):(0,r.jsx)(w,{children:e}),I=(0,s.memo)((({children:e})=>(0,r.jsx)(d.Provider,Object.assign({store:(0,p.S)(c()).getStore()},{children:(0,r.jsx)(x.I18nProvider,Object.assign({lng:"en",resources:{en:{common:()=>n.e(3389).then(n.t.bind(n,3389,19)),"create-kafka-instance":()=>n.e(2192).then(n.t.bind(n,12192,19)),kafka:()=>n.e(4309).then(n.t.bind(n,94309,19)),metrics:()=>n.e(4564).then(n.t.bind(n,84564,19)),overview:()=>n.e(6449).then(n.t.bind(n,96449,19)),datascienceoverview:()=>n.e(2844).then(n.t.bind(n,2844,19)),apimgmtoverview:()=>n.e(6651).then(n.t.bind(n,26651,19)),kafkaoverview:()=>n.e(8891).then(n.t.bind(n,18891,19)),"message-browser":()=>n.e(4431).then(n.t.bind(n,24431,19)),appTemporaryFixMe:()=>n.e(5174).then(n.t.bind(n,65174,19)),kafkaTemporaryFixMe:()=>n.e(1517).then(n.t.bind(n,61517,19)),kasTemporaryFixMe:()=>n.e(784).then(n.t.bind(n,784,19)),srsTemporaryFixMe:()=>n.e(9604).then(n.t.bind(n,79604,19)),"manage-kafka-permissions":()=>n.e(3972).then(n.t.bind(n,23972,19)),"overview-v2":()=>n.e(2646).then(n.t.bind(n,2646,19)),"kafkaoverview-v2":()=>n.e(4073).then(n.t.bind(n,64073,19)),"connection-tab-p1":()=>n.e(1465).then(n.t.bind(n,31465,19)),"service-registry":()=>n.e(4767).then(n.t.bind(n,14767,19)),"kafkaoverview-v3":()=>n.e(347).then(n.t.bind(n,20347,19)),"overview-v4":()=>n.e(8275).then(n.t.bind(n,28275,19)),"connection-tab":()=>n.e(9260).then(n.t.bind(n,69260,19)),topic:()=>n.e(1908).then(n.t.bind(n,71908,19))}},debug:!0},{children:(0,r.jsx)(f.O1,{children:(0,r.jsx)(h.N,{children:(0,r.jsx)(m.B,{children:(0,r.jsx)(S,{children:e})})})})}))})))),C=()=>(0,r.jsx)(I,{children:(0,r.jsx)(u.Z,{})})},78866:(e,t,n)=>{n.d(t,{I:()=>l});var i=n(70655),r=n(85893),s=n(93264),d=n(97644),o=n(68698),a=n(83463);const c=()=>{const e=(0,s.useRef)(!1);return(0,s.useEffect)((()=>(e.current=!0,()=>{e.current=!1})),[]),e};const l=(0,s.memo)((({scope:e,module:t,render:n,fallback:d})=>{console.log("Dynamic federated module",e,t);const a=c(),{getModuleInfo:l,modules:v}=(0,o.N)(),[h,m]=(0,s.useState)();return(0,s.useEffect)((()=>{(0,i.mG)(void 0,void 0,void 0,(function*(){const t=yield l(v[e].basePath,e,v[e].fallbackBasePath);a.current&&m(t)}))}),[e,v,l,a]),void 0!==h?(0,r.jsx)(u,{scope:e,module:t,render:n,moduleInfo:h}):void 0!==d?(0,r.jsx)(r.Fragment,{children:d}):null}),((e,t)=>e.scope===t.scope&&e.module===t.module)),u=({moduleInfo:e,fallback:t,scope:o,render:l,module:u})=>{const{ready:v,failed:h}=(e=>{const t=c(),[n,i]=(0,s.useState)(!1),[r,d]=(0,s.useState)(!1);return(0,s.useEffect)((()=>{let n;if(t.current){if(!e)return void d(!0);n=document.createElement("script"),n.src=e,n.type="text/javascript",n.async=!0,i(!1),d(!1),n.onload=()=>{console.log(`Dynamic federated module Loaded: ${e}`),i(!0)},n.onerror=()=>{console.error(`Dynamic federated module Error: ${e}`),i(!1),d(!0)},document.head.appendChild(n)}return()=>{n&&(console.log(`Dynamic federated module Removed: ${e}`),document.head.removeChild(n))}}),[t,e]),{ready:n,failed:r}})(e.entryPoint);if(v&&!h){const t=(0,s.lazy)(function(e,t){return()=>(0,i.mG)(this,void 0,void 0,(function*(){yield n.I("default");const i=window[e];yield i.init(n.S.default);const r=(yield i.get(t))();return console.debug(`loaded ${t} from ${e}`),r}))}(o,u)),c=()=>e.basePath;return(0,r.jsx)(d.AssetsContext.Provider,Object.assign({value:{getPath:c}},{children:(0,r.jsx)(s.Suspense,Object.assign({fallback:(0,r.jsx)(a.AppServicesLoading,{})},{children:l(t)}))}))}return t?(0,r.jsx)(r.Fragment,{children:t}):null}},58571:(e,t,n)=>{n.r(t),n.d(t,{QuickStartLoaderFederated:()=>u,appIdentifier:()=>l,default:()=>h});var i=n(85893),r=n(78866),s=n(93264),d=n(97644),o=n(36425),a=n.n(o),c=n(83463);const l="applicationServices",u=()=>(0,i.jsx)(r.I,{scope:"guides",module:"./QuickStartLoader",render:e=>(0,i.jsx)(v,{Component:e})}),v=({Component:e})=>{const[t,n]=(0,s.useState)(!1),r=a()(),{quickStarts:o}=r,u=(0,d.useConfig)();if(void 0===u)return(0,i.jsx)(c.AppServicesLoading,{});return t?null:(0,i.jsx)(e,{showDrafts:null==u?void 0:u.guides.showDrafts,onLoad:e=>{o&&(n(!0),o.set(l,e))}})},h=u},62552:(e,t,n)=>{n.r(t),n.d(t,{Guides:()=>d,default:()=>o});var i=n(85893),r=n(58571),s=n(50058);const d=()=>(0,i.jsx)(s.AppEntry,{children:(0,i.jsx)(r.default,{})}),o=d}}]);
//# sourceMappingURL=1956.ba90fd3f055ab6c5da8e.js.map