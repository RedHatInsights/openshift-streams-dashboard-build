"use strict";(self.webpackChunkapplication_services_ui=self.webpackChunkapplication_services_ui||[]).push([[6158],{75485:(e,t,n)=>{n.r(t);var i=n(85893),s=n(3644),r=n.n(s),a=n(70655),d=n(93264),o=n(38714),c=n(73685),v=n(27571),l=n.n(v),h=n(47091),b=n(76166),m=n(40493),u=n(26836),g=n(18047),k=n(31589),x=n(36494),p=n(37687),j=n(3973),w=n(36384),f=n(50834),y=(n(79658),n(85169));null!==window.localStorage.getItem("xstate-inspect")&&(0,h.XY)({iframe:!1});const I=()=>{const[e,t]=(0,d.useState)(),n=(0,m.aC)(),s=(0,o.useDispatch)(),r=(0,m.gI)();(0,d.useEffect)((()=>{(0,a.mG)(void 0,void 0,void 0,(function*(){const e=yield r();t(e)}))}),[r]);const v={addAlert:({title:e,variant:t,description:n,dataTestId:i,autoDismiss:r,dismissable:a,dismissDelay:d,requestId:o,sentryId:c})=>{s((0,j.addNotification)({title:e,variant:t,description:n,dataTestId:i,autoDismiss:r||!0,dismissable:a||!0,dismissDelay:d||8e3,requestId:o,sentryId:c}))}},l=(0,p.Z)(window.location.pathname),{kas:h,getUsername:u,isOrgAdmin:g}=n;return(0,i.jsx)(f.AuthContext.Provider,Object.assign({value:n},{children:(0,i.jsx)(y.V.Provider,Object.assign({value:{getToken:h.getToken,getUsername:u,isOrgAdmin:g,tokenEndPointUrl:null==e?void 0:e.token_url}},{children:(0,i.jsx)(f.AlertContext.Provider,Object.assign({value:v},{children:(0,i.jsx)(w.ModalProvider,{children:(0,i.jsx)(c.BrowserRouter,Object.assign({basename:l},{children:(0,i.jsx)(b.Z,{})}))})}))}))}))},O=()=>void 0===(0,d.useContext)(f.ConfigContext)?(0,i.jsx)(w.AppServicesLoading,{}):(0,i.jsx)(I,{}),C=(0,d.memo)((()=>(0,i.jsx)(o.Provider,Object.assign({store:(0,x.S)(l()).getStore()},{children:(0,i.jsx)(w.I18nProvider,Object.assign({lng:"en",resources:{en:{common:()=>n.e(3389).then(n.t.bind(n,3389,19)),"create-kafka-instance":()=>n.e(2192).then(n.t.bind(n,12192,19)),kafka:()=>n.e(4309).then(n.t.bind(n,94309,19)),metrics:()=>n.e(4564).then(n.t.bind(n,84564,19)),overview:()=>n.e(6449).then(n.t.bind(n,96449,19)),datascienceoverview:()=>n.e(2844).then(n.t.bind(n,2844,19)),apimgmtoverview:()=>n.e(6651).then(n.t.bind(n,26651,19)),kafkaoverview:()=>n.e(8891).then(n.t.bind(n,18891,19)),"message-browser":()=>n.e(4431).then(n.t.bind(n,24431,19)),appTemporaryFixMe:()=>n.e(5174).then(n.t.bind(n,65174,19)),kafkaTemporaryFixMe:()=>n.e(1517).then(n.t.bind(n,61517,19)),kasTemporaryFixMe:()=>n.e(784).then(n.t.bind(n,784,19)),srsTemporaryFixMe:()=>n.e(9604).then(n.t.bind(n,79604,19)),"manage-kafka-permissions":()=>n.e(3972).then(n.t.bind(n,23972,19)),"overview-v2":()=>n.e(2646).then(n.t.bind(n,2646,19)),"kafkaoverview-v2":()=>n.e(4073).then(n.t.bind(n,64073,19)),"connection-tab-p1":()=>n.e(1465).then(n.t.bind(n,31465,19)),"service-registry":()=>n.e(4767).then(n.t.bind(n,14767,19)),"kafkaoverview-v3":()=>n.e(347).then(n.t.bind(n,20347,19)),"overview-v4":()=>n.e(8275).then(n.t.bind(n,28275,19)),"connection-tab":()=>n.e(9260).then(n.t.bind(n,69260,19))}},debug:!0},{children:(0,i.jsx)(k.O1,{children:(0,i.jsx)(u.N,{children:(0,i.jsx)(g.B,{children:(0,i.jsx)(O,{})})})})}))})))),T=document.getElementById("root");r().render((0,i.jsx)(C,{}),T)}}]);
