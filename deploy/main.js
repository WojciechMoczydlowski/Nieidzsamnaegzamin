!function(e){function t(t){for(var r,o,l=t[0],u=t[1],c=t[2],f=0,m=[];f<l.length;f++)o=l[f],a[o]&&m.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(s&&s(t);m.length;)m.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,l=1;l<n.length;l++){var u=n[l];0!==a[u]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={0:0},i=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var l=window.webpackJsonp=window.webpackJsonp||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var s=u;i.push([111,1]),n()}({111:function(e,t,n){e.exports=n(159)},159:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(9),o=n.n(i),l=(n(116),n(43),n(51),n(52),n(53),n(42),n(54),n(55),n(56),n(100)),u=n.n(l).a.initializeApp({apiKey:"AIzaSyDuDC-HqsY8Twl6mhgXKcHszL66yUUPorU",authDomain:"nieidzsamnaegzamin-3d87b.firebaseapp.com",databaseURL:"https://nieidzsamnaegzamin-3d87b.firebaseio.com",projectId:"nieidzsamnaegzamin-3d87b",storageBucket:"",messagingSenderId:"453891393309",appId:"1:453891393309:web:617c00b087110e20"}),c=n(198),s=n(199),f=n(200),m=n(195),d=n(194);function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(r=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var v=Object(d.a)(f.a)({textAlign:"center"}),g=Object(d.a)(m.a)({display:"flex",flexDirection:"row",justifyContent:"center"}),y=Object(d.a)("div")({display:"flex",flexDirection:"column",justifyContent:"center"}),h=function(e){var t=e.setSingingSection,n=p(Object(r.useState)(""),2),i=n[0],o=n[1],l=p(Object(r.useState)(""),2),f=l[0],m=l[1],d=p(Object(r.useState)(void 0),2),h=d[0],b=d[1],j=p(Object(r.useState)(void 0),2),E=j[0],w=j[1],S=function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())};return a.a.createElement(a.a.Fragment,null,a.a.createElement(v,null,"Aby się zalogować, uzupełnij swoje dane"),a.a.createElement(y,null,a.a.createElement(c.a,{autoFocus:!0,margin:"dense",placeholder:"Email",type:"email",fullWidth:!0,value:i,onChange:function(e){return o(e.target.value)},error:void 0!==h,helperText:h}),a.a.createElement(c.a,{margin:"dense",placeholder:"Hasło",type:"password",fullWidth:!0,value:f,onChange:function(e){return m(e.target.value)},error:void 0!==E,helperText:E})),a.a.createElement(g,null,a.a.createElement(s.a,{color:"primary",onClick:function(){(function(){if(""===i){var e="Email jest wymagany";return b(e),e}if(!S(i)){var t="Niepoprawny format email";return b(t),t}b(void 0)})()||function(){if(""===f){var e="Hasło jest wymagane";return w(e),e}w(void 0)}()?console.error("validation problem"):u.auth().signInWithEmailAndPassword(i,f).catch(function(e){var t=e.code,n=e.message;console.error(t,n)})}},"Zaloguj"),a.a.createElement(s.a,{color:"primary",onClick:function(){return t("signing_up")}},"Zarejestruj")))};function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(r=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var j=Object(d.a)(f.a)({textAlign:"center"}),E=Object(d.a)(m.a)({display:"flex",flexDirection:"row",justifyContent:"center"}),w=Object(d.a)("div")({display:"flex",flexDirection:"column",justifyContent:"center"}),S=function(e){var t=e.setSingingSection,n=b(Object(r.useState)(""),2),i=(n[0],n[1],b(Object(r.useState)(""),2)),o=(i[0],i[1],b(Object(r.useState)(""),2)),l=o[0],f=o[1],m=b(Object(r.useState)(""),2),d=m[0],p=m[1],v=b(Object(r.useState)(void 0),2),g=(v[0],v[1],b(Object(r.useState)(void 0),2)),y=(g[0],g[1],b(Object(r.useState)(void 0),2)),h=y[0],S=y[1],O=b(Object(r.useState)(void 0),2),x=O[0],A=O[1],z=function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())};return a.a.createElement(a.a.Fragment,null,a.a.createElement(j,null,"Uzupełnij swoje dane"),a.a.createElement(w,null,a.a.createElement(c.a,{autoFocus:!0,margin:"dense",id:"email",placeholder:"Email",type:"email",fullWidth:!0,value:l,onChange:function(e){return f(e.target.value)},error:void 0!==h,helperText:h}),a.a.createElement(c.a,{margin:"dense",placeholder:"Hasło",type:"password",fullWidth:!0,value:d,onChange:function(e){return p(e.target.value)},error:void 0!==x,helperText:x})),a.a.createElement(E,null,a.a.createElement(s.a,{color:"primary",onClick:function(){return t("signing_in")}},"Wstecz"),a.a.createElement(s.a,{color:"primary",onClick:function(){(function(){if(""===l){var e="Email jest wymagany";return S(e),e}if(!z(l)){var t="Email jest wymagany";return S(t),t}S(void 0)})()||function(){if(""===d){var e="Hasło jest wymagane";return A(e),e}A(void 0)}()?console.error("validation problem"):u.auth().createUserWithEmailAndPassword(l,d).then(function(){return t("signing_in")}).catch(function(e){var t=e.code,n=e.message;console.error(t,n)})}},"Załóż konto")))},O=n(196),x=n(197);function A(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(r=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var z=Object(d.a)("h2")({width:"100%",textAlign:"center"}),C=Object(d.a)(x.a)({width:"30%",margin:"250px auto",display:"flex",flexDirection:"column",justifyContent:"center",overflow:"hidden",padding:"20px"}),_=function(){var e=A(Object(r.useState)("signing_in"),2),t=e[0],n=e[1];return a.a.createElement(C,null,a.a.createElement(z,null,"Nie idź sam na egzamin"),a.a.createElement(O.a,null,"signing_in"===t&&a.a.createElement(h,{setSingingSection:n})||"signing_up"===t&&a.a.createElement(S,{setSingingSection:n})))};function T(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(r=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var I=function(e){var t=T(Object(r.useState)(null),2),n=t[0],i=t[1];return u.auth().onAuthStateChanged(function(e){return i(e)}),n?a.a.createElement(a.a.Fragment,null,e.children):a.a.createElement(_,null)},P=function(e){return a.a.createElement(a.a.Fragment,null,e.children)},k=n(201),D=n(106),W=Object(d.a)("div")({cursor:"pointer"}),H=function(){return a.a.createElement("div",null,a.a.createElement("div",null,"HomePage"),a.a.createElement(W,{onClick:function(){return u.auth().signOut()}},"Wyloguj"))},Z=n(20),F=(n(99),a.a.memo(function(){return a.a.createElement(Z.c,null,a.a.createElement(Z.a,{component:H}))})),U=n(107),L=Object(U.a)({palette:{primary:{main:"#000000"}}}),M=a.a.memo(function(){return a.a.createElement(D.a,null,a.a.createElement(k.a,{theme:L},a.a.createElement(P,null,a.a.createElement(I,null,a.a.createElement(F,null)))))});o.a.render(a.a.createElement(M,null),document.getElementById("root"))},99:function(e,t,n){}});