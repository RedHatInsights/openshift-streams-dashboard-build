"use strict";(self.webpackChunkapplication_services_ui=self.webpackChunkapplication_services_ui||[]).push([[245],{96245:(e,r,t)=>{function n(e){this.message=e}t.r(r),t.d(r,{default:()=>c,InvalidTokenError:()=>i}),n.prototype=new Error,n.prototype.name="InvalidCharacterError";var o="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(e){var r=String(e).replace(/=+$/,"");if(r.length%4==1)throw new n("'atob' failed: The string to be decoded is not correctly encoded.");for(var t,o,a=0,i=0,c="";o=r.charAt(i++);~o&&(t=a%4?64*t+o:o,a++%4)?c+=String.fromCharCode(255&t>>(-2*a&6)):0)o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(o);return c};function a(e){var r=e.replace(/-/g,"+").replace(/_/g,"/");switch(r.length%4){case 0:break;case 2:r+="==";break;case 3:r+="=";break;default:throw"Illegal base64url string!"}try{return function(e){return decodeURIComponent(o(e).replace(/(.)/g,(function(e,r){var t=r.charCodeAt(0).toString(16).toUpperCase();return t.length<2&&(t="0"+t),"%"+t})))}(r)}catch(e){return o(r)}}function i(e){this.message=e}i.prototype=new Error,i.prototype.name="InvalidTokenError";const c=function(e,r){if("string"!=typeof e)throw new i("Invalid token specified");var t=!0===(r=r||{}).header?0:1;try{return JSON.parse(a(e.split(".")[t]))}catch(e){throw new i("Invalid token specified: "+e.message)}}}}]);
//# sourceMappingURL=245.e9824bfade3bd328a2a0.js.map