"use strict";(self.webpackChunkapplication_services_ui=self.webpackChunkapplication_services_ui||[]).push([[7834],{28011:function(e,t,s){var r=this&&this.__createBinding||(Object.create?function(e,t,s,r){void 0===r&&(r=s),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[s]}})}:function(e,t,s,r){void 0===r&&(r=s),e[r]=t[s]}),i=this&&this.__exportStar||function(e,t){for(var s in e)"default"===s||Object.prototype.hasOwnProperty.call(t,s)||r(t,e,s)};Object.defineProperty(t,"__esModule",{value:!0}),i(s(37475),t),i(s(25952),t),i(s(17765),t)},37475:function(e,t,s){var r=this&&this.__awaiter||function(e,t,s,r){return new(s||(s=Promise))((function(i,a){function n(e){try{c(r.next(e))}catch(e){a(e)}}function o(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(n,o)}c((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.DefaultApi=t.DefaultApiFactory=t.DefaultApiFp=t.DefaultApiAxiosParamCreator=void 0;const i=s(35898),a=s(64754),n=s(67056);t.DefaultApiAxiosParamCreator=function(e){return{createKafka:(t,s,i={})=>r(this,void 0,void 0,(function*(){(0,a.assertParamExists)("createKafka","async",t),(0,a.assertParamExists)("createKafka","kafkaRequestPayload",s);const r=new URL("/api/kafkas_mgmt/v1/kafkas",a.DUMMY_BASE_URL);let n;e&&(n=e.baseOptions);const o=Object.assign(Object.assign({method:"POST"},n),i),c={},u={};yield(0,a.setBearerAuthToObject)(c,e),void 0!==t&&(u.async=t),c["Content-Type"]="application/json",(0,a.setSearchParams)(r,u,i.query);let d=n&&n.headers?n.headers:{};return o.headers=Object.assign(Object.assign(Object.assign({},c),d),i.headers),o.data=(0,a.serializeDataIfNeeded)(s,o,e),{url:(0,a.toPathString)(r),options:o}})),deleteKafkaById:(t,s,i={})=>r(this,void 0,void 0,(function*(){(0,a.assertParamExists)("deleteKafkaById","id",t),(0,a.assertParamExists)("deleteKafkaById","async",s);const r="/api/kafkas_mgmt/v1/kafkas/{id}".replace("{id}",encodeURIComponent(String(t))),n=new URL(r,a.DUMMY_BASE_URL);let o;e&&(o=e.baseOptions);const c=Object.assign(Object.assign({method:"DELETE"},o),i),u={},d={};yield(0,a.setBearerAuthToObject)(u,e),void 0!==s&&(d.async=s),(0,a.setSearchParams)(n,d,i.query);let h=o&&o.headers?o.headers:{};return c.headers=Object.assign(Object.assign(Object.assign({},u),h),i.headers),{url:(0,a.toPathString)(n),options:c}})),federateMetrics:(t,s={})=>r(this,void 0,void 0,(function*(){(0,a.assertParamExists)("federateMetrics","id",t);const r="/api/kafkas_mgmt/v1/kafkas/{id}/metrics/federate".replace("{id}",encodeURIComponent(String(t))),i=new URL(r,a.DUMMY_BASE_URL);let n;e&&(n=e.baseOptions);const o=Object.assign(Object.assign({method:"GET"},n),s),c={};yield(0,a.setBearerAuthToObject)(c,e),(0,a.setSearchParams)(i,{},s.query);let u=n&&n.headers?n.headers:{};return o.headers=Object.assign(Object.assign(Object.assign({},c),u),s.headers),{url:(0,a.toPathString)(i),options:o}})),getCloudProviderRegions:(t,s,i,n,o={})=>r(this,void 0,void 0,(function*(){(0,a.assertParamExists)("getCloudProviderRegions","id",t);const r="/api/kafkas_mgmt/v1/cloud_providers/{id}/regions".replace("{id}",encodeURIComponent(String(t))),c=new URL(r,a.DUMMY_BASE_URL);let u;e&&(u=e.baseOptions);const d=Object.assign(Object.assign({method:"GET"},u),o),h={},l={};yield(0,a.setBearerAuthToObject)(h,e),void 0!==s&&(l.page=s),void 0!==i&&(l.size=i),void 0!==n&&(l.instance_type=n),(0,a.setSearchParams)(c,l,o.query);let f=u&&u.headers?u.headers:{};return d.headers=Object.assign(Object.assign(Object.assign({},h),f),o.headers),{url:(0,a.toPathString)(c),options:d}})),getCloudProviders:(t,s,i={})=>r(this,void 0,void 0,(function*(){const r=new URL("/api/kafkas_mgmt/v1/cloud_providers",a.DUMMY_BASE_URL);let n;e&&(n=e.baseOptions);const o=Object.assign(Object.assign({method:"GET"},n),i),c={},u={};yield(0,a.setBearerAuthToObject)(c,e),void 0!==t&&(u.page=t),void 0!==s&&(u.size=s),(0,a.setSearchParams)(r,u,i.query);let d=n&&n.headers?n.headers:{};return o.headers=Object.assign(Object.assign(Object.assign({},c),d),i.headers),{url:(0,a.toPathString)(r),options:o}})),getKafkaById:(t,s={})=>r(this,void 0,void 0,(function*(){(0,a.assertParamExists)("getKafkaById","id",t);const r="/api/kafkas_mgmt/v1/kafkas/{id}".replace("{id}",encodeURIComponent(String(t))),i=new URL(r,a.DUMMY_BASE_URL);let n;e&&(n=e.baseOptions);const o=Object.assign(Object.assign({method:"GET"},n),s),c={};yield(0,a.setBearerAuthToObject)(c,e),(0,a.setSearchParams)(i,{},s.query);let u=n&&n.headers?n.headers:{};return o.headers=Object.assign(Object.assign(Object.assign({},c),u),s.headers),{url:(0,a.toPathString)(i),options:o}})),getKafkas:(t,s,i,n,o={})=>r(this,void 0,void 0,(function*(){const r=new URL("/api/kafkas_mgmt/v1/kafkas",a.DUMMY_BASE_URL);let c;e&&(c=e.baseOptions);const u=Object.assign(Object.assign({method:"GET"},c),o),d={},h={};yield(0,a.setBearerAuthToObject)(d,e),void 0!==t&&(h.page=t),void 0!==s&&(h.size=s),void 0!==i&&(h.orderBy=i),void 0!==n&&(h.search=n),(0,a.setSearchParams)(r,h,o.query);let l=c&&c.headers?c.headers:{};return u.headers=Object.assign(Object.assign(Object.assign({},d),l),o.headers),{url:(0,a.toPathString)(r),options:u}})),getMetricsByInstantQuery:(t,s,i={})=>r(this,void 0,void 0,(function*(){(0,a.assertParamExists)("getMetricsByInstantQuery","id",t);const r="/api/kafkas_mgmt/v1/kafkas/{id}/metrics/query".replace("{id}",encodeURIComponent(String(t))),n=new URL(r,a.DUMMY_BASE_URL);let o;e&&(o=e.baseOptions);const c=Object.assign(Object.assign({method:"GET"},o),i),u={},d={};yield(0,a.setBearerAuthToObject)(u,e),s&&(d.filters=s),(0,a.setSearchParams)(n,d,i.query);let h=o&&o.headers?o.headers:{};return c.headers=Object.assign(Object.assign(Object.assign({},u),h),i.headers),{url:(0,a.toPathString)(n),options:c}})),getMetricsByRangeQuery:(t,s,i,n,o={})=>r(this,void 0,void 0,(function*(){(0,a.assertParamExists)("getMetricsByRangeQuery","id",t),(0,a.assertParamExists)("getMetricsByRangeQuery","duration",s),(0,a.assertParamExists)("getMetricsByRangeQuery","interval",i);const r="/api/kafkas_mgmt/v1/kafkas/{id}/metrics/query_range".replace("{id}",encodeURIComponent(String(t))),c=new URL(r,a.DUMMY_BASE_URL);let u;e&&(u=e.baseOptions);const d=Object.assign(Object.assign({method:"GET"},u),o),h={},l={};yield(0,a.setBearerAuthToObject)(h,e),void 0!==s&&(l.duration=s),void 0!==i&&(l.interval=i),n&&(l.filters=n),(0,a.setSearchParams)(c,l,o.query);let f=u&&u.headers?u.headers:{};return d.headers=Object.assign(Object.assign(Object.assign({},h),f),o.headers),{url:(0,a.toPathString)(c),options:d}})),getServiceStatus:(t={})=>r(this,void 0,void 0,(function*(){const s=new URL("/api/kafkas_mgmt/v1/status",a.DUMMY_BASE_URL);let r;e&&(r=e.baseOptions);const i=Object.assign(Object.assign({method:"GET"},r),t),n={};yield(0,a.setBearerAuthToObject)(n,e),(0,a.setSearchParams)(s,{},t.query);let o=r&&r.headers?r.headers:{};return i.headers=Object.assign(Object.assign(Object.assign({},n),o),t.headers),{url:(0,a.toPathString)(s),options:i}})),getVersionMetadata:(t={})=>r(this,void 0,void 0,(function*(){const s=new URL("/api/kafkas_mgmt/v1",a.DUMMY_BASE_URL);let r;e&&(r=e.baseOptions);const i=Object.assign(Object.assign({method:"GET"},r),t);(0,a.setSearchParams)(s,{},t.query);let n=r&&r.headers?r.headers:{};return i.headers=Object.assign(Object.assign(Object.assign({},{}),n),t.headers),{url:(0,a.toPathString)(s),options:i}})),updateKafkaById:(t,s,i={})=>r(this,void 0,void 0,(function*(){(0,a.assertParamExists)("updateKafkaById","id",t),(0,a.assertParamExists)("updateKafkaById","kafkaUpdateRequest",s);const r="/api/kafkas_mgmt/v1/kafkas/{id}".replace("{id}",encodeURIComponent(String(t))),n=new URL(r,a.DUMMY_BASE_URL);let o;e&&(o=e.baseOptions);const c=Object.assign(Object.assign({method:"PATCH"},o),i),u={};yield(0,a.setBearerAuthToObject)(u,e),u["Content-Type"]="application/json",(0,a.setSearchParams)(n,{},i.query);let d=o&&o.headers?o.headers:{};return c.headers=Object.assign(Object.assign(Object.assign({},u),d),i.headers),c.data=(0,a.serializeDataIfNeeded)(s,c,e),{url:(0,a.toPathString)(n),options:c}}))}};t.DefaultApiFp=function(e){const s=(0,t.DefaultApiAxiosParamCreator)(e);return{createKafka(t,o,c){return r(this,void 0,void 0,(function*(){const r=yield s.createKafka(t,o,c);return(0,a.createRequestFunction)(r,i.default,n.BASE_PATH,e)}))},deleteKafkaById(t,o,c){return r(this,void 0,void 0,(function*(){const r=yield s.deleteKafkaById(t,o,c);return(0,a.createRequestFunction)(r,i.default,n.BASE_PATH,e)}))},federateMetrics(t,o){return r(this,void 0,void 0,(function*(){const r=yield s.federateMetrics(t,o);return(0,a.createRequestFunction)(r,i.default,n.BASE_PATH,e)}))},getCloudProviderRegions(t,o,c,u,d){return r(this,void 0,void 0,(function*(){const r=yield s.getCloudProviderRegions(t,o,c,u,d);return(0,a.createRequestFunction)(r,i.default,n.BASE_PATH,e)}))},getCloudProviders(t,o,c){return r(this,void 0,void 0,(function*(){const r=yield s.getCloudProviders(t,o,c);return(0,a.createRequestFunction)(r,i.default,n.BASE_PATH,e)}))},getKafkaById(t,o){return r(this,void 0,void 0,(function*(){const r=yield s.getKafkaById(t,o);return(0,a.createRequestFunction)(r,i.default,n.BASE_PATH,e)}))},getKafkas(t,o,c,u,d){return r(this,void 0,void 0,(function*(){const r=yield s.getKafkas(t,o,c,u,d);return(0,a.createRequestFunction)(r,i.default,n.BASE_PATH,e)}))},getMetricsByInstantQuery(t,o,c){return r(this,void 0,void 0,(function*(){const r=yield s.getMetricsByInstantQuery(t,o,c);return(0,a.createRequestFunction)(r,i.default,n.BASE_PATH,e)}))},getMetricsByRangeQuery(t,o,c,u,d){return r(this,void 0,void 0,(function*(){const r=yield s.getMetricsByRangeQuery(t,o,c,u,d);return(0,a.createRequestFunction)(r,i.default,n.BASE_PATH,e)}))},getServiceStatus(t){return r(this,void 0,void 0,(function*(){const r=yield s.getServiceStatus(t);return(0,a.createRequestFunction)(r,i.default,n.BASE_PATH,e)}))},getVersionMetadata(t){return r(this,void 0,void 0,(function*(){const r=yield s.getVersionMetadata(t);return(0,a.createRequestFunction)(r,i.default,n.BASE_PATH,e)}))},updateKafkaById(t,o,c){return r(this,void 0,void 0,(function*(){const r=yield s.updateKafkaById(t,o,c);return(0,a.createRequestFunction)(r,i.default,n.BASE_PATH,e)}))}}};t.DefaultApiFactory=function(e,s,r){const i=(0,t.DefaultApiFp)(e);return{createKafka:(e,t,a)=>i.createKafka(e,t,a).then((e=>e(r,s))),deleteKafkaById:(e,t,a)=>i.deleteKafkaById(e,t,a).then((e=>e(r,s))),federateMetrics:(e,t)=>i.federateMetrics(e,t).then((e=>e(r,s))),getCloudProviderRegions:(e,t,a,n,o)=>i.getCloudProviderRegions(e,t,a,n,o).then((e=>e(r,s))),getCloudProviders:(e,t,a)=>i.getCloudProviders(e,t,a).then((e=>e(r,s))),getKafkaById:(e,t)=>i.getKafkaById(e,t).then((e=>e(r,s))),getKafkas:(e,t,a,n,o)=>i.getKafkas(e,t,a,n,o).then((e=>e(r,s))),getMetricsByInstantQuery:(e,t,a)=>i.getMetricsByInstantQuery(e,t,a).then((e=>e(r,s))),getMetricsByRangeQuery:(e,t,a,n,o)=>i.getMetricsByRangeQuery(e,t,a,n,o).then((e=>e(r,s))),getServiceStatus:e=>i.getServiceStatus(e).then((e=>e(r,s))),getVersionMetadata:e=>i.getVersionMetadata(e).then((e=>e(r,s))),updateKafkaById:(e,t,a)=>i.updateKafkaById(e,t,a).then((e=>e(r,s)))}};class o extends n.BaseAPI{createKafka(e,s,r){return(0,t.DefaultApiFp)(this.configuration).createKafka(e,s,r).then((e=>e(this.axios,this.basePath)))}deleteKafkaById(e,s,r){return(0,t.DefaultApiFp)(this.configuration).deleteKafkaById(e,s,r).then((e=>e(this.axios,this.basePath)))}federateMetrics(e,s){return(0,t.DefaultApiFp)(this.configuration).federateMetrics(e,s).then((e=>e(this.axios,this.basePath)))}getCloudProviderRegions(e,s,r,i,a){return(0,t.DefaultApiFp)(this.configuration).getCloudProviderRegions(e,s,r,i,a).then((e=>e(this.axios,this.basePath)))}getCloudProviders(e,s,r){return(0,t.DefaultApiFp)(this.configuration).getCloudProviders(e,s,r).then((e=>e(this.axios,this.basePath)))}getKafkaById(e,s){return(0,t.DefaultApiFp)(this.configuration).getKafkaById(e,s).then((e=>e(this.axios,this.basePath)))}getKafkas(e,s,r,i,a){return(0,t.DefaultApiFp)(this.configuration).getKafkas(e,s,r,i,a).then((e=>e(this.axios,this.basePath)))}getMetricsByInstantQuery(e,s,r){return(0,t.DefaultApiFp)(this.configuration).getMetricsByInstantQuery(e,s,r).then((e=>e(this.axios,this.basePath)))}getMetricsByRangeQuery(e,s,r,i,a){return(0,t.DefaultApiFp)(this.configuration).getMetricsByRangeQuery(e,s,r,i,a).then((e=>e(this.axios,this.basePath)))}getServiceStatus(e){return(0,t.DefaultApiFp)(this.configuration).getServiceStatus(e).then((e=>e(this.axios,this.basePath)))}getVersionMetadata(e){return(0,t.DefaultApiFp)(this.configuration).getVersionMetadata(e).then((e=>e(this.axios,this.basePath)))}updateKafkaById(e,s,r){return(0,t.DefaultApiFp)(this.configuration).updateKafkaById(e,s,r).then((e=>e(this.axios,this.basePath)))}}t.DefaultApi=o},25952:function(e,t,s){var r=this&&this.__awaiter||function(e,t,s,r){return new(s||(s=Promise))((function(i,a){function n(e){try{c(r.next(e))}catch(e){a(e)}}function o(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(n,o)}c((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.ErrorsApi=t.ErrorsApiFactory=t.ErrorsApiFp=t.ErrorsApiAxiosParamCreator=void 0;const i=s(35898),a=s(64754),n=s(67056);t.ErrorsApiAxiosParamCreator=function(e){return{getErrorById:(t,s={})=>r(this,void 0,void 0,(function*(){(0,a.assertParamExists)("getErrorById","id",t);const r="/api/kafkas_mgmt/v1/errors/{id}".replace("{id}",encodeURIComponent(String(t))),i=new URL(r,a.DUMMY_BASE_URL);let n;e&&(n=e.baseOptions);const o=Object.assign(Object.assign({method:"GET"},n),s);(0,a.setSearchParams)(i,{},s.query);let c=n&&n.headers?n.headers:{};return o.headers=Object.assign(Object.assign(Object.assign({},{}),c),s.headers),{url:(0,a.toPathString)(i),options:o}})),getErrors:(t={})=>r(this,void 0,void 0,(function*(){const s=new URL("/api/kafkas_mgmt/v1/errors",a.DUMMY_BASE_URL);let r;e&&(r=e.baseOptions);const i=Object.assign(Object.assign({method:"GET"},r),t);(0,a.setSearchParams)(s,{},t.query);let n=r&&r.headers?r.headers:{};return i.headers=Object.assign(Object.assign(Object.assign({},{}),n),t.headers),{url:(0,a.toPathString)(s),options:i}}))}};t.ErrorsApiFp=function(e){const s=(0,t.ErrorsApiAxiosParamCreator)(e);return{getErrorById(t,o){return r(this,void 0,void 0,(function*(){const r=yield s.getErrorById(t,o);return(0,a.createRequestFunction)(r,i.default,n.BASE_PATH,e)}))},getErrors(t){return r(this,void 0,void 0,(function*(){const r=yield s.getErrors(t);return(0,a.createRequestFunction)(r,i.default,n.BASE_PATH,e)}))}}};t.ErrorsApiFactory=function(e,s,r){const i=(0,t.ErrorsApiFp)(e);return{getErrorById:(e,t)=>i.getErrorById(e,t).then((e=>e(r,s))),getErrors:e=>i.getErrors(e).then((e=>e(r,s)))}};class o extends n.BaseAPI{getErrorById(e,s){return(0,t.ErrorsApiFp)(this.configuration).getErrorById(e,s).then((e=>e(this.axios,this.basePath)))}getErrors(e){return(0,t.ErrorsApiFp)(this.configuration).getErrors(e).then((e=>e(this.axios,this.basePath)))}}t.ErrorsApi=o},17765:function(e,t,s){var r=this&&this.__awaiter||function(e,t,s,r){return new(s||(s=Promise))((function(i,a){function n(e){try{c(r.next(e))}catch(e){a(e)}}function o(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(n,o)}c((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.SecurityApi=t.SecurityApiFactory=t.SecurityApiFp=t.SecurityApiAxiosParamCreator=void 0;const i=s(35898),a=s(64754),n=s(67056);t.SecurityApiAxiosParamCreator=function(e){return{createServiceAccount:(t,s={})=>r(this,void 0,void 0,(function*(){(0,a.assertParamExists)("createServiceAccount","serviceAccountRequest",t);const r=new URL("/api/kafkas_mgmt/v1/service_accounts",a.DUMMY_BASE_URL);let i;e&&(i=e.baseOptions);const n=Object.assign(Object.assign({method:"POST"},i),s),o={};yield(0,a.setBearerAuthToObject)(o,e),o["Content-Type"]="application/json",(0,a.setSearchParams)(r,{},s.query);let c=i&&i.headers?i.headers:{};return n.headers=Object.assign(Object.assign(Object.assign({},o),c),s.headers),n.data=(0,a.serializeDataIfNeeded)(t,n,e),{url:(0,a.toPathString)(r),options:n}})),deleteServiceAccountById:(t,s={})=>r(this,void 0,void 0,(function*(){(0,a.assertParamExists)("deleteServiceAccountById","id",t);const r="/api/kafkas_mgmt/v1/service_accounts/{id}".replace("{id}",encodeURIComponent(String(t))),i=new URL(r,a.DUMMY_BASE_URL);let n;e&&(n=e.baseOptions);const o=Object.assign(Object.assign({method:"DELETE"},n),s),c={};yield(0,a.setBearerAuthToObject)(c,e),(0,a.setSearchParams)(i,{},s.query);let u=n&&n.headers?n.headers:{};return o.headers=Object.assign(Object.assign(Object.assign({},c),u),s.headers),{url:(0,a.toPathString)(i),options:o}})),getServiceAccountById:(t,s={})=>r(this,void 0,void 0,(function*(){(0,a.assertParamExists)("getServiceAccountById","id",t);const r="/api/kafkas_mgmt/v1/service_accounts/{id}".replace("{id}",encodeURIComponent(String(t))),i=new URL(r,a.DUMMY_BASE_URL);let n;e&&(n=e.baseOptions);const o=Object.assign(Object.assign({method:"GET"},n),s),c={};yield(0,a.setBearerAuthToObject)(c,e),(0,a.setSearchParams)(i,{},s.query);let u=n&&n.headers?n.headers:{};return o.headers=Object.assign(Object.assign(Object.assign({},c),u),s.headers),{url:(0,a.toPathString)(i),options:o}})),getServiceAccounts:(t={})=>r(this,void 0,void 0,(function*(){const s=new URL("/api/kafkas_mgmt/v1/service_accounts",a.DUMMY_BASE_URL);let r;e&&(r=e.baseOptions);const i=Object.assign(Object.assign({method:"GET"},r),t),n={};yield(0,a.setBearerAuthToObject)(n,e),(0,a.setSearchParams)(s,{},t.query);let o=r&&r.headers?r.headers:{};return i.headers=Object.assign(Object.assign(Object.assign({},n),o),t.headers),{url:(0,a.toPathString)(s),options:i}})),resetServiceAccountCreds:(t,s={})=>r(this,void 0,void 0,(function*(){(0,a.assertParamExists)("resetServiceAccountCreds","id",t);const r="/api/kafkas_mgmt/v1/service_accounts/{id}/reset_credentials".replace("{id}",encodeURIComponent(String(t))),i=new URL(r,a.DUMMY_BASE_URL);let n;e&&(n=e.baseOptions);const o=Object.assign(Object.assign({method:"POST"},n),s),c={};yield(0,a.setBearerAuthToObject)(c,e),(0,a.setSearchParams)(i,{},s.query);let u=n&&n.headers?n.headers:{};return o.headers=Object.assign(Object.assign(Object.assign({},c),u),s.headers),{url:(0,a.toPathString)(i),options:o}}))}};t.SecurityApiFp=function(e){const s=(0,t.SecurityApiAxiosParamCreator)(e);return{createServiceAccount(t,o){return r(this,void 0,void 0,(function*(){const r=yield s.createServiceAccount(t,o);return(0,a.createRequestFunction)(r,i.default,n.BASE_PATH,e)}))},deleteServiceAccountById(t,o){return r(this,void 0,void 0,(function*(){const r=yield s.deleteServiceAccountById(t,o);return(0,a.createRequestFunction)(r,i.default,n.BASE_PATH,e)}))},getServiceAccountById(t,o){return r(this,void 0,void 0,(function*(){const r=yield s.getServiceAccountById(t,o);return(0,a.createRequestFunction)(r,i.default,n.BASE_PATH,e)}))},getServiceAccounts(t){return r(this,void 0,void 0,(function*(){const r=yield s.getServiceAccounts(t);return(0,a.createRequestFunction)(r,i.default,n.BASE_PATH,e)}))},resetServiceAccountCreds(t,o){return r(this,void 0,void 0,(function*(){const r=yield s.resetServiceAccountCreds(t,o);return(0,a.createRequestFunction)(r,i.default,n.BASE_PATH,e)}))}}};t.SecurityApiFactory=function(e,s,r){const i=(0,t.SecurityApiFp)(e);return{createServiceAccount:(e,t)=>i.createServiceAccount(e,t).then((e=>e(r,s))),deleteServiceAccountById:(e,t)=>i.deleteServiceAccountById(e,t).then((e=>e(r,s))),getServiceAccountById:(e,t)=>i.getServiceAccountById(e,t).then((e=>e(r,s))),getServiceAccounts:e=>i.getServiceAccounts(e).then((e=>e(r,s))),resetServiceAccountCreds:(e,t)=>i.resetServiceAccountCreds(e,t).then((e=>e(r,s)))}};class o extends n.BaseAPI{createServiceAccount(e,s){return(0,t.SecurityApiFp)(this.configuration).createServiceAccount(e,s).then((e=>e(this.axios,this.basePath)))}deleteServiceAccountById(e,s){return(0,t.SecurityApiFp)(this.configuration).deleteServiceAccountById(e,s).then((e=>e(this.axios,this.basePath)))}getServiceAccountById(e,s){return(0,t.SecurityApiFp)(this.configuration).getServiceAccountById(e,s).then((e=>e(this.axios,this.basePath)))}getServiceAccounts(e){return(0,t.SecurityApiFp)(this.configuration).getServiceAccounts(e).then((e=>e(this.axios,this.basePath)))}resetServiceAccountCreds(e,s){return(0,t.SecurityApiFp)(this.configuration).resetServiceAccountCreds(e,s).then((e=>e(this.axios,this.basePath)))}}t.SecurityApi=o},67056:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.RequiredError=t.BaseAPI=t.COLLECTION_FORMATS=t.BASE_PATH=void 0;const r=s(35898);t.BASE_PATH="https://api.openshift.com".replace(/\/+$/,""),t.COLLECTION_FORMATS={csv:",",ssv:" ",tsv:"\t",pipes:"|"};t.BaseAPI=class{constructor(e,s=t.BASE_PATH,i=r.default){this.basePath=s,this.axios=i,e&&(this.configuration=e,this.basePath=e.basePath||this.basePath)}};class i extends Error{constructor(e,t){super(t),this.field=e,this.name="RequiredError"}}t.RequiredError=i},64754:function(e,t,s){var r=this&&this.__awaiter||function(e,t,s,r){return new(s||(s=Promise))((function(i,a){function n(e){try{c(r.next(e))}catch(e){a(e)}}function o(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(n,o)}c((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.createRequestFunction=t.toPathString=t.serializeDataIfNeeded=t.setSearchParams=t.setOAuthToObject=t.setBearerAuthToObject=t.setBasicAuthToObject=t.setApiKeyToObject=t.assertParamExists=t.DUMMY_BASE_URL=void 0;const i=s(67056);t.DUMMY_BASE_URL="https://example.com";t.assertParamExists=function(e,t,s){if(null==s)throw new i.RequiredError(t,`Required parameter ${t} was null or undefined when calling ${e}.`)};t.setApiKeyToObject=function(e,t,s){return r(this,void 0,void 0,(function*(){if(s&&s.apiKey){const r="function"==typeof s.apiKey?yield s.apiKey(t):yield s.apiKey;e[t]=r}}))};t.setBasicAuthToObject=function(e,t){t&&(t.username||t.password)&&(e.auth={username:t.username,password:t.password})};t.setBearerAuthToObject=function(e,t){return r(this,void 0,void 0,(function*(){if(t&&t.accessToken){const s="function"==typeof t.accessToken?yield t.accessToken():yield t.accessToken;e.Authorization="Bearer "+s}}))};t.setOAuthToObject=function(e,t,s,i){return r(this,void 0,void 0,(function*(){if(i&&i.accessToken){const r="function"==typeof i.accessToken?yield i.accessToken(t,s):yield i.accessToken;e.Authorization="Bearer "+r}}))};t.setSearchParams=function(e,...t){const s=new URLSearchParams(e.search);for(const e of t)for(const t in e)if(Array.isArray(e[t])){s.delete(t);for(const r of e[t])s.append(t,r)}else s.set(t,e[t]);e.search=s.toString()};t.serializeDataIfNeeded=function(e,t,s){const r="string"!=typeof e;return(r&&s&&s.isJsonMime?s.isJsonMime(t.headers["Content-Type"]):r)?JSON.stringify(void 0!==e?e:{}):e||""};t.toPathString=function(e){return e.pathname+e.search+e.hash};t.createRequestFunction=function(e,t,s,r){return(i=t,a=s)=>{const n=Object.assign(Object.assign({},e.options),{url:((null==r?void 0:r.basePath)||a)+e.url});return i.request(n)}}},97899:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Configuration=void 0;t.Configuration=class{constructor(e={}){this.apiKey=e.apiKey,this.username=e.username,this.password=e.password,this.accessToken=e.accessToken,this.basePath=e.basePath,this.baseOptions=e.baseOptions,this.formDataCtor=e.formDataCtor}isJsonMime(e){const t=new RegExp("^(application/json|[^;/ \t]+/[^;/ \t]+[+]json)[ \t]*(;.*)?$","i");return null!==e&&(t.test(e)||"application/json-patch+json"===e.toLowerCase())}}},33438:function(e,t,s){var r=this&&this.__createBinding||(Object.create?function(e,t,s,r){void 0===r&&(r=s),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[s]}})}:function(e,t,s,r){void 0===r&&(r=s),e[r]=t[s]}),i=this&&this.__exportStar||function(e,t){for(var s in e)"default"===s||Object.prototype.hasOwnProperty.call(t,s)||r(t,e,s)};Object.defineProperty(t,"__esModule",{value:!0}),i(s(28011),t),i(s(97899),t),i(s(65306),t)},81557:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},2971:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},52095:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},51430:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},53512:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},62879:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},90961:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},25137:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},18949:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},65306:function(e,t,s){var r=this&&this.__createBinding||(Object.create?function(e,t,s,r){void 0===r&&(r=s),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[s]}})}:function(e,t,s,r){void 0===r&&(r=s),e[r]=t[s]}),i=this&&this.__exportStar||function(e,t){for(var s in e)"default"===s||Object.prototype.hasOwnProperty.call(t,s)||r(t,e,s)};Object.defineProperty(t,"__esModule",{value:!0}),i(s(52095),t),i(s(2971),t),i(s(81557),t),i(s(62879),t),i(s(53512),t),i(s(51430),t),i(s(90961),t),i(s(18949),t),i(s(25137),t),i(s(84881),t),i(s(61089),t),i(s(26791),t),i(s(73758),t),i(s(32278),t),i(s(80199),t),i(s(77432),t),i(s(69996),t),i(s(3428),t),i(s(98196),t),i(s(75503),t),i(s(3623),t),i(s(48430),t),i(s(59246),t),i(s(32292),t),i(s(87591),t),i(s(33125),t),i(s(86171),t),i(s(69983),t),i(s(40411),t),i(s(1766),t),i(s(20494),t),i(s(28749),t),i(s(87160),t),i(s(38444),t),i(s(31066),t),i(s(40924),t)},84881:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},26791:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},32278:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},73758:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},80199:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},61089:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},77432:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},69996:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},98196:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},3428:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},3623:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},75503:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},48430:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},59246:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},32292:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},33125:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},69983:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},1766:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},40411:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},86171:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},20494:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},87591:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},87160:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},28749:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},38444:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},40924:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},31066:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},77834:function(e,t,s){var r=this&&this.__createBinding||(Object.create?function(e,t,s,r){void 0===r&&(r=s),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[s]}})}:function(e,t,s,r){void 0===r&&(r=s),e[r]=t[s]}),i=this&&this.__exportStar||function(e,t){for(var s in e)"default"===s||Object.prototype.hasOwnProperty.call(t,s)||r(t,e,s)};Object.defineProperty(t,"__esModule",{value:!0}),i(s(33438),t)}}]);
