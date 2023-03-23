"use strict";(self.webpackChunkapplication_services_ui=self.webpackChunkapplication_services_ui||[]).push([[305,2623],{50058:(e,n,t)=>{t.r(n),t.d(n,{AppEntry:()=>S,default:()=>C});var i=t(70655),r=t(85893),s=t(93264),o=t(86706),d=t(73685),a=t(94500),c=t.n(a),l=t(71631),u=t(76166),m=t(40493),v=t(26836),h=t(18047),p=t(31589),b=t(36494),f=t(37687),g=t(71355),x=t(70959),j=t(97644),k=(t(79658),t(85169)),y=t(68698);null!==window.localStorage.getItem("xstate-inspect")&&(0,l.XY)({iframe:!1});const w=({children:e})=>{const[n,t]=(0,s.useState)(),a=(0,m.aC)(),c=(0,o.useDispatch)(),l=(0,m.gI)();(0,s.useEffect)((()=>{(0,i.mG)(void 0,void 0,void 0,(function*(){const e=yield l();t(e)}))}),[l]);const u={addAlert:({title:e,variant:n,description:t,dataTestId:i,autoDismiss:r,dismissable:s,dismissDelay:o,requestId:d,sentryId:a})=>{c((0,g.addNotification)({title:e,variant:n,description:t,dataTestId:i,autoDismiss:r||!0,dismissable:s||!0,dismissDelay:o||8e3,requestId:d,sentryId:a}))}},v=(0,f.Z)(window.location.pathname),{kas:h,getUsername:p,isOrgAdmin:b}=a;return(0,r.jsx)(j.AuthContext.Provider,Object.assign({value:a},{children:(0,r.jsx)(k.V.Provider,Object.assign({value:{getToken:h.getToken,getUsername:p,isOrgAdmin:b,tokenEndPointUrl:null==n?void 0:n.token_url}},{children:(0,r.jsx)(j.AlertContext.Provider,Object.assign({value:u},{children:(0,r.jsx)(x.ModalProvider,{children:(0,r.jsx)(d.BrowserRouter,Object.assign({basename:v},{children:(0,r.jsx)(y.Gg,{children:e})}))})}))}))}))},I=({children:e})=>void 0===(0,s.useContext)(j.ConfigContext)?(0,r.jsx)(x.AppServicesLoading,{}):(0,r.jsx)(w,{children:e}),S=(0,s.memo)((({children:e})=>(0,r.jsx)(o.Provider,Object.assign({store:(0,b.S)(c()).getStore()},{children:(0,r.jsx)(x.I18nProvider,Object.assign({lng:"en",resources:{en:{common:()=>t.e(3389).then(t.t.bind(t,3389,19)),"create-kafka-instance":()=>t.e(2192).then(t.t.bind(t,12192,19)),kafka:()=>t.e(4309).then(t.t.bind(t,94309,19)),metrics:()=>t.e(4564).then(t.t.bind(t,84564,19)),overview:()=>t.e(6449).then(t.t.bind(t,96449,19)),datascienceoverview:()=>t.e(2844).then(t.t.bind(t,2844,19)),apimgmtoverview:()=>t.e(6651).then(t.t.bind(t,26651,19)),kafkaoverview:()=>t.e(8891).then(t.t.bind(t,18891,19)),"message-browser":()=>t.e(4431).then(t.t.bind(t,24431,19)),appTemporaryFixMe:()=>t.e(5174).then(t.t.bind(t,65174,19)),kafkaTemporaryFixMe:()=>t.e(1517).then(t.t.bind(t,61517,19)),kasTemporaryFixMe:()=>t.e(784).then(t.t.bind(t,784,19)),srsTemporaryFixMe:()=>t.e(9604).then(t.t.bind(t,79604,19)),"manage-kafka-permissions":()=>t.e(3972).then(t.t.bind(t,23972,19)),"overview-v2":()=>t.e(2646).then(t.t.bind(t,2646,19)),"kafkaoverview-v2":()=>t.e(4073).then(t.t.bind(t,64073,19)),"connection-tab-p1":()=>t.e(1465).then(t.t.bind(t,31465,19)),"service-registry":()=>t.e(4767).then(t.t.bind(t,14767,19)),"kafkaoverview-v3":()=>t.e(347).then(t.t.bind(t,20347,19)),"overview-v4":()=>t.e(8275).then(t.t.bind(t,28275,19)),"connection-tab":()=>t.e(9260).then(t.t.bind(t,69260,19)),topic:()=>t.e(1908).then(t.t.bind(t,71908,19))}},debug:!0},{children:(0,r.jsx)(p.O1,{children:(0,r.jsx)(v.N,{children:(0,r.jsx)(h.B,{children:(0,r.jsx)(I,{children:e})})})})}))})))),C=()=>(0,r.jsx)(S,{children:(0,r.jsx)(u.Z,{})})},78866:(e,n,t)=>{t.d(n,{I:()=>l});var i=t(70655),r=t(85893),s=t(93264),o=t(97644),d=t(68698),a=t(70959);const c=()=>{const e=(0,s.useRef)(!1);return(0,s.useEffect)((()=>(e.current=!0,()=>{e.current=!1})),[]),e};const l=(0,s.memo)((({scope:e,module:n,render:t,fallback:o})=>{console.log("Dynamic federated module",e,n);const a=c(),{getModuleInfo:l,modules:m}=(0,d.N)(),[v,h]=(0,s.useState)();return(0,s.useEffect)((()=>{(0,i.mG)(void 0,void 0,void 0,(function*(){const n=yield l(m[e].basePath,e,m[e].fallbackBasePath);a.current&&h(n)}))}),[e,m,l,a]),void 0!==v?(0,r.jsx)(u,{scope:e,module:n,render:t,moduleInfo:v}):void 0!==o?(0,r.jsx)(r.Fragment,{children:o}):null}),((e,n)=>e.scope===n.scope&&e.module===n.module)),u=({moduleInfo:e,fallback:n,scope:d,render:l,module:u})=>{const{ready:m,failed:v}=(e=>{const n=c(),[t,i]=(0,s.useState)(!1),[r,o]=(0,s.useState)(!1);return(0,s.useEffect)((()=>{let t;if(n.current){if(!e)return void o(!0);t=document.createElement("script"),t.src=e,t.type="text/javascript",t.async=!0,i(!1),o(!1),t.onload=()=>{console.log(`Dynamic federated module Loaded: ${e}`),i(!0)},t.onerror=()=>{console.error(`Dynamic federated module Error: ${e}`),i(!1),o(!0)},document.head.appendChild(t)}return()=>{t&&(console.log(`Dynamic federated module Removed: ${e}`),document.head.removeChild(t))}}),[n,e]),{ready:t,failed:r}})(e.entryPoint);if(m&&!v){const n=(0,s.lazy)(function(e,n){return()=>(0,i.mG)(this,void 0,void 0,(function*(){yield t.I("default");const i=window[e];yield i.init(t.S.default);const r=(yield i.get(n))();return console.debug(`loaded ${n} from ${e}`),r}))}(d,u)),c=()=>e.basePath;return(0,r.jsx)(o.AssetsContext.Provider,Object.assign({value:{getPath:c}},{children:(0,r.jsx)(s.Suspense,Object.assign({fallback:(0,r.jsx)(a.AppServicesLoading,{})},{children:l(n)}))}))}return n?(0,r.jsx)(r.Fragment,{children:n}):null}},36595:(e,n,t)=>{t.r(n),t.d(n,{TopicSchema:()=>u,default:()=>v});var i=t(85893),r=t(93264),s=t(68698),o=t(70959),d=t(97644),a=t(13179),c=t(50058);const l=()=>"",u=({topicName:e})=>{const n=(0,r.useCallback)((n=>(0,i.jsx)(m,{Component:n,topicName:e})),[e]);return(0,i.jsx)(c.AppEntry,{children:(0,i.jsx)(d.BasenameContext.Provider,Object.assign({value:{getBasename:l}},{children:(0,i.jsx)(s.IG,{scope:"srs",module:"./ServiceRegistryMapping",fallback:(0,i.jsx)(o.AppServicesLoading,{}),render:n})}))})},m=({Component:e,topicName:n})=>{const t="/service-registry";return(0,i.jsx)(e,{basename:t,topicName:n,renderSchema:e=>(0,i.jsx)(a.P,{module:"./FederatedSchemaMapping",registry:e,topicName:n,groupId:null,version:"latest",registryId:null==e?void 0:e.id,basename:t})})},v=u}}]);
