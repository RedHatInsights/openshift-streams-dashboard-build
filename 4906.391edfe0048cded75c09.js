"use strict";(self.webpackChunkapplication_services_ui=self.webpackChunkapplication_services_ui||[]).push([[4906],{50058:(e,t,i)=>{i.r(t),i.d(t,{default:()=>I});var n=i(70655),s=i(85893),a=i(93264),r=i(86706),d=i(73685),o=i(94500),c=i.n(o),v=i(71631),h=i(76166),l=i(40493),b=i(26836),m=i(18047),u=i(31589),g=i(36494),k=i(37687),p=i(71355),x=i(83463),j=i(97644),f=(i(79658),i(85169));null!==window.localStorage.getItem("xstate-inspect")&&(0,v.XY)({iframe:!1});const w=()=>{const[e,t]=(0,a.useState)(),i=(0,l.aC)(),o=(0,r.useDispatch)(),c=(0,l.gI)();(0,a.useEffect)((()=>{(0,n.mG)(void 0,void 0,void 0,(function*(){const e=yield c();t(e)}))}),[c]);const v={addAlert:({title:e,variant:t,description:i,dataTestId:n,autoDismiss:s,dismissable:a,dismissDelay:r,requestId:d,sentryId:c})=>{o((0,p.addNotification)({title:e,variant:t,description:i,dataTestId:n,autoDismiss:s||!0,dismissable:a||!0,dismissDelay:r||8e3,requestId:d,sentryId:c}))}},b=(0,k.Z)(window.location.pathname),{kas:m,getUsername:u,isOrgAdmin:g}=i;return(0,s.jsx)(j.AuthContext.Provider,Object.assign({value:i},{children:(0,s.jsx)(f.V.Provider,Object.assign({value:{getToken:m.getToken,getUsername:u,isOrgAdmin:g,tokenEndPointUrl:null==e?void 0:e.token_url}},{children:(0,s.jsx)(j.AlertContext.Provider,Object.assign({value:v},{children:(0,s.jsx)(x.ModalProvider,{children:(0,s.jsx)(d.BrowserRouter,Object.assign({basename:b},{children:(0,s.jsx)(h.Z,{})}))})}))}))}))},y=()=>void 0===(0,a.useContext)(j.ConfigContext)?(0,s.jsx)(x.AppServicesLoading,{}):(0,s.jsx)(w,{}),I=(0,a.memo)((()=>(0,s.jsx)(r.Provider,Object.assign({store:(0,g.S)(c()).getStore()},{children:(0,s.jsx)(x.I18nProvider,Object.assign({lng:"en",resources:{en:{common:()=>i.e(3389).then(i.t.bind(i,3389,19)),"create-kafka-instance":()=>i.e(2192).then(i.t.bind(i,12192,19)),kafka:()=>i.e(4309).then(i.t.bind(i,94309,19)),metrics:()=>i.e(4564).then(i.t.bind(i,84564,19)),overview:()=>i.e(6449).then(i.t.bind(i,96449,19)),datascienceoverview:()=>i.e(2844).then(i.t.bind(i,2844,19)),apimgmtoverview:()=>i.e(6651).then(i.t.bind(i,26651,19)),kafkaoverview:()=>i.e(8891).then(i.t.bind(i,18891,19)),"message-browser":()=>i.e(4431).then(i.t.bind(i,24431,19)),appTemporaryFixMe:()=>i.e(5174).then(i.t.bind(i,65174,19)),kafkaTemporaryFixMe:()=>i.e(1517).then(i.t.bind(i,61517,19)),kasTemporaryFixMe:()=>i.e(784).then(i.t.bind(i,784,19)),srsTemporaryFixMe:()=>i.e(9604).then(i.t.bind(i,79604,19)),"manage-kafka-permissions":()=>i.e(3972).then(i.t.bind(i,23972,19)),"overview-v2":()=>i.e(2646).then(i.t.bind(i,2646,19)),"kafkaoverview-v2":()=>i.e(4073).then(i.t.bind(i,64073,19)),"connection-tab-p1":()=>i.e(1465).then(i.t.bind(i,31465,19)),"service-registry":()=>i.e(4767).then(i.t.bind(i,14767,19)),"kafkaoverview-v3":()=>i.e(347).then(i.t.bind(i,20347,19)),"overview-v4":()=>i.e(8275).then(i.t.bind(i,28275,19)),"connection-tab":()=>i.e(9260).then(i.t.bind(i,69260,19)),topic:()=>i.e(1908).then(i.t.bind(i,71908,19))}},debug:!0},{children:(0,s.jsx)(u.O1,{children:(0,s.jsx)(b.N,{children:(0,s.jsx)(m.B,{children:(0,s.jsx)(y,{})})})})}))}))))}}]);
