"use strict";(self.webpackChunkapplication_services_ui=self.webpackChunkapplication_services_ui||[]).push([[2770],{50058:(e,t,i)=>{i.r(t),i.d(t,{default:()=>O});var n=i(70655),s=i(85893),a=i(93264),r=i(26718),o=i(68199),d=i(27571),c=i.n(d),l=i(47091),v=i(76166),k=i(40493),g=i(26836),h=i(18047),b=i(31589),m=i(36494),u=i(37687),p=i(3973),x=i(31571),j=i(52212),f=(i(79658),i(85169));null!==window.localStorage.getItem("xstate-inspect")&&(0,l.XY)({iframe:!1});const w=()=>{const[e,t]=(0,a.useState)(),[i,d]=(0,a.useState)();console.log("starting appwithkeycloak");let c=(0,k.aC)();const l=(0,r.useDispatch)(),g=(0,k.gI)();(0,a.useEffect)((()=>{(0,n.mG)(void 0,void 0,void 0,(function*(){d(!0);const e=yield g();t(e),d(!1)}))}),[g]);if(!1===i&&"mas_sso"!==(null==e?void 0:e.name)){const{kas:{getToken:e}}=c;c=Object.assign(Object.assign({},c),{kafka:{getToken:e},apicurio_registry:{getToken:e}})}const h={addAlert:({title:e,variant:t,description:i,dataTestId:n,autoDismiss:s,dismissable:a,dismissDelay:r,requestId:o,sentryId:d})=>{l((0,p.addNotification)({title:e,variant:t,description:i,dataTestId:n,autoDismiss:s||!0,dismissable:a||!0,dismissDelay:r||8e3,requestId:o,sentryId:d}))}},b=(0,u.Z)(window.location.pathname),{kas:m,kafka:w,getUsername:T,isOrgAdmin:O}=c;return(0,s.jsx)(j.AuthContext.Provider,Object.assign({value:c},{children:(0,s.jsx)(f.V.Provider,Object.assign({value:{getToken:m.getToken,getMASSSOToken:w.getToken,getUsername:T,isOrgAdmin:O,tokenEndPointUrl:null==e?void 0:e.token_url}},{children:(0,s.jsx)(j.AlertContext.Provider,Object.assign({value:h},{children:(0,s.jsx)(x.ModalProvider,{children:(0,s.jsx)(o.BrowserRouter,Object.assign({basename:b},{children:(0,s.jsx)(v.Z,{})}))})}))}))}))},T=()=>void 0===(0,a.useContext)(j.ConfigContext)?(0,s.jsx)(x.AppServicesLoading,{}):(0,s.jsx)(w,{}),O=(0,a.memo)((()=>(0,s.jsx)(r.Provider,Object.assign({store:(0,m.S)(c()).getStore()},{children:(0,s.jsx)(x.I18nProvider,Object.assign({lng:"en",resources:{en:{common:()=>i.e(3389).then(i.t.bind(i,3389,19)),"create-kafka-instance":()=>i.e(2192).then(i.t.bind(i,12192,19)),kafka:()=>i.e(4309).then(i.t.bind(i,94309,19)),metrics:()=>i.e(4564).then(i.t.bind(i,84564,19)),overview:()=>i.e(6449).then(i.t.bind(i,96449,19)),datascienceoverview:()=>i.e(2844).then(i.t.bind(i,2844,19)),apimgmtoverview:()=>i.e(6651).then(i.t.bind(i,26651,19)),kafkaoverview:()=>i.e(8891).then(i.t.bind(i,18891,19)),"message-browser":()=>i.e(4431).then(i.t.bind(i,24431,19)),appTemporaryFixMe:()=>i.e(5174).then(i.t.bind(i,65174,19)),kafkaTemporaryFixMe:()=>i.e(1517).then(i.t.bind(i,61517,19)),kasTemporaryFixMe:()=>i.e(784).then(i.t.bind(i,784,19)),srsTemporaryFixMe:()=>i.e(9604).then(i.t.bind(i,79604,19)),"manage-kafka-permissions":()=>i.e(3972).then(i.t.bind(i,23972,19)),"overview-v2":()=>i.e(2646).then(i.t.bind(i,2646,19)),"kafkaoverview-v2":()=>i.e(4073).then(i.t.bind(i,64073,19))}},debug:!0},{children:(0,s.jsx)(b.O1,{children:(0,s.jsx)(g.N,{children:(0,s.jsx)(h.B,{children:(0,s.jsx)(T,{})})})})}))}))))}}]);
//# sourceMappingURL=2770.fd0340ab12ef219f0d97.js.map