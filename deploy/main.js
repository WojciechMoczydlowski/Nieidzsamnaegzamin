!function(e){function t(t){for(var a,i,l=t[0],c=t[1],u=t[2],d=0,p=[];d<l.length;d++)i=l[d],r[i]&&p.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);for(s&&s(t);p.length;)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,l=1;l<n.length;l++){var c=n[l];0!==r[c]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={0:0},o=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var s=c;o.push([114,1]),n()}({100:function(e,t,n){e.exports=n.p+"images/landingPageBackground-11722.png"},101:function(e,t,n){e.exports=n.p+"images/landingpageBackgroundMobile-8683c.png"},102:function(e,t,n){e.exports=n.p+"images/rectangle-43516.svg"},103:function(e,t,n){e.exports=n.p+"images/leftArrow-dc880.svg"},104:function(e,t,n){e.exports=n.p+"images/facebook-b6d96.svg"},105:function(e,t,n){e.exports=n.p+"images/google-0f5f2.svg"},114:function(e,t,n){e.exports=n(172)},166:function(e,t,n){},172:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(40),i=n.n(o),l=(n(119),n(28),n(34),n(35),n(36),n(30),n(37),n(38),n(39),n(24)),c=n.n(l),u=c.a.initializeApp({apiKey:"AIzaSyDuDC-HqsY8Twl6mhgXKcHszL66yUUPorU",authDomain:"nieidzsamnaegzamin-3d87b.firebaseapp.com",databaseURL:"https://nieidzsamnaegzamin-3d87b.firebaseio.com",projectId:"nieidzsamnaegzamin-3d87b",storageBucket:"",messagingSenderId:"453891393309",appId:"1:453891393309:web:617c00b087110e20"}),s=n(100),d=n.n(s),p=n(101),f=n.n(p),m=n(102),g=n.n(m),h=n(103),v=n.n(h),b=n(46),y=n.n(b),x=n(104),w=n.n(x),E=n(105),j=n.n(E),O=n(188),S=n(190),k=function(){return r.a.createElement(C,null,r.a.createElement(A,null,r.a.createElement(O.a,null)))},C=Object(S.a)("div")({position:"fixed",top:0,right:0,bottom:0,left:0,zIndex:1e3,display:"flex",flexDirection:"column",justifyContent:"center",background:"rgba(200, 200, 200, 0.3)"}),A=Object(S.a)("div")({position:"absolute",top:"50%",left:"50%",transform:"translateX(-50%) translateY(-50%)"});n(154),n(156),n(159),n(161),n(162),n(163),n(164),n(165);function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){I(e,t,n[t])})}return e}function I(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var F=new function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),I(this,"handleLoginError",function(e){switch(e){case"auth/invalid-email":return"Niepoprawny format adresu email";case"auth/user-disabled":return"Konto użytkownika jest niedostępne";case"auth/user-not-found":return"Nie istnieje konto dla tego emaila";case"auth/wrong-password":return"Nieprawidłowe hasło";default:return"Bład serwera"}}),I(this,"handleRegistrationError",function(e){switch(e){case"auth/invalid-email":return"Niepoprawny format adresu email";case"auth/email-already-in-use":return"Email jest już używany";case"auth/weak-password":return"Zbyt słabe hasło";case"auth/operation-not-allowed":return"Nie można wykonać operacji";default:return"Błąd serwera"}}),I(this,"trySignInWithEmailAndPassword",function(e,n,a,r){a(!0),u.auth().signInWithEmailAndPassword(e,n).then(function(){r(void 0),a(!1)}).catch(function(e){if(a(!1),e){var n=t.handleLoginError(e.code);r(n)}})}),I(this,"trySignUpWithEmailAndPassword",function(e,n,a,r,o,i){o(!0),u.auth().createUserWithEmailAndPassword(e,n).then(function(e){o(!1),i(void 0);var t=e.user;t&&t.updateProfile({displayName:"".concat(a," ").concat(r)}).then(function(){return console.log("success")}).catch(function(e){return console.error(e)})}).catch(function(e){if(e){var n=t.handleRegistrationError(e.code);i(n),o(!1)}})}),I(this,"loginWithGoogle",function(e,t){t(!0);var n=new c.a.auth.GoogleAuthProvider;n.addScope("profile"),c.a.auth().useDeviceLanguage(),c.a.auth().signInWithPopup(n).then(function(n){if(n&&n.additionalUserInfo&&n.additionalUserInfo.profile&&n.additionalUserInfo.profile){var a=z({},n.additionalUserInfo.profile).name,r=void 0===a?void 0:a,o=u.auth().currentUser;r&&o&&!o.displayName&&o.updateProfile({displayName:r}).then(function(){return console.log("success")}).catch(function(e){})}e(void 0),t(!1)}).catch(function(n){"auth/account-exists-with-different-credential"===n.code&&e("Email w użyciu.Spróbuj zalogowac się innym dostawcą"),t(!1)})}),I(this,"loginWithFacebook",function(e,t){t(!0);var n=new c.a.auth.FacebookAuthProvider;c.a.auth().useDeviceLanguage(),c.a.auth().signInWithPopup(n).then(function(n){if(n&&n.additionalUserInfo&&n.additionalUserInfo.profile&&n.additionalUserInfo.profile){var a=z({},n.additionalUserInfo.profile).name,r=void 0===a?void 0:a,o=u.auth().currentUser;r&&o&&!o.displayName&&o.updateProfile({displayName:r}).then(function(){return console.log("success")}).catch(function(e){console.error(e)})}e(void 0),t(!1)}).catch(function(n){"auth/account-exists-with-different-credential"===n.code&&(e("Email w użyciu.Spróbuj zalogowac się innym dostawcą"),t(!1))})}),I(this,"resetPassword",function(e,t,n,a){t(!0),c.a.auth().sendPasswordResetEmail(e).then(function(){t(!1),n(void 0),a("Wiadomość została poprawnie wysłana")}).catch(function(e){var a=e.code;"auth/invalid-email"===a&&n("Niepoprawny format email"),"auth/user-not-found"===a&&n("Nie istnieje konto przypisane do danego emaila"),t(!1)})}),I(this,"signOut",function(){u.auth().signOut().catch(function(e){console.log(e)})})},P=n(191),R=n(192);function U(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,r=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(a=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==l.return||l.return()}finally{if(r)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var L=Object(S.a)(P.a)({width:"100%",height:"56px",margin:"20px 0",display:"flex",position:"relative",justifyContent:"center",alignItems:"center",background:"transparent linear-gradient(90deg, #3C5A99 0%, #8088FF 100%) 0% 0% no-repeat padding-box",borderRadius:"4px"}),N=Object(S.a)(P.a)({width:"100%",height:"56px",margin:"20px 0",display:"flex",position:"relative",justifyContent:"center",alignItems:"center",background:"transparent linear-gradient(90deg, #DB4437 0%, #8088FF 100%) 0% 0% no-repeat padding-box",borderRadius:"4px"}),T=Object(S.a)("div")({textAlign:"center",font:"400 12px/14px Roboto",letterSpacing:"0.4px",color:"#000000",opacity:.6}),B=Object(S.a)("div")({textAlign:"center",font:"400 12px/14px Roboto",letterSpacing:"0.4px",color:"#000000",opacity:.6,cursor:"pointer",margin:"20px 0"}),W=Object(S.a)("img")({marginRight:"16px"}),Z=Object(S.a)(R.a)({width:"100%",height:"56px",margin:"20px 0",display:"flex",position:"relative",justifyContent:"center",alignItems:"center",borderRadius:"4px",background:"transparent linear-gradient(90deg, #007BFA 0%, #8088FF 100%) 0% 0% no-repeat padding-box"}),D=Object(S.a)("div")({letterSpacing:0,color:"#FFFFFF",font:"500 14px/17px Roboto"}),_=Object(S.a)("div")({position:"relative",marginTop:"20px"}),G=Object(S.a)("input")({border:"1px solid #000000",padding:"16px 18px",width:"100%",opacity:.6,color:"#000000",outline:"none",borderRadius:"4px",fontSize:"16px ","&:focus":{border:"2px solid #2699FB"}}),H=Object(S.a)("img")({position:"absolute",top:"50%",right:"12px",transform:"translate(0,-50%)",cursor:"pointer"}),J=Object(S.a)("div")({textAlign:"left",font:"400 12px/14px Roboto",letterSpacing:"0.4px",color:"#DB4437",marginTop:"4px",marginLeft:"16px"}),K=function(e){var t=e.setLoginSection,n=U(Object(a.useState)(""),2),o=n[0],i=n[1],l=U(Object(a.useState)(""),2),c=l[0],u=l[1],s=U(Object(a.useState)("password"),2),d=s[0],p=s[1],f=U(Object(a.useState)(!1),2),m=f[0],g=f[1],h=U(Object(a.useState)(void 0),2),v=h[0],b=h[1];return r.a.createElement(r.a.Fragment,null,m&&r.a.createElement(k,null),r.a.createElement(L,{onClick:function(){F.loginWithFacebook(b,g)}},r.a.createElement(W,{src:w.a,alt:"facebook"}),r.a.createElement(D,null,"ZALOGUJ PRZEZ FACEBOOK")),r.a.createElement(N,{onClick:function(e){F.loginWithGoogle(e,g)}},r.a.createElement(W,{src:j.a,alt:"google"}),r.a.createElement(D,null,"ZALOGUJ PRZEZ GOOGLE")),r.a.createElement(T,null,"lub zaloguj przez email:"),r.a.createElement(_,null,r.a.createElement(G,{value:o,onChange:function(e){return i(e.target.value)},placeholder:"Email"})),r.a.createElement(_,null,r.a.createElement(G,{type:d,value:c,onChange:function(e){return u(e.target.value)},placeholder:"Hasło"}),r.a.createElement(H,{src:y.a,alt:"eye",onClick:function(){p("password"===d?"text":"password")}})),v&&r.a.createElement(J,null,v),r.a.createElement(Z,{onClick:function(){F.trySignInWithEmailAndPassword(o,c,g,b)}},r.a.createElement(D,null,"ZALOGUJ")),r.a.createElement(B,{onClick:function(){return t("recover_account")}},"Nie pamiętasz hasła?"))};function M(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,r=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(a=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==l.return||l.return()}finally{if(r)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object(S.a)(R.a)({width:"100%",height:"56px",margin:"20px 0",display:"flex",position:"relative",justifyContent:"center",alignItems:"center",borderRadius:"4px",backgroundColor:"#2699FB","&:hover":{backgroundColor:"#2699FB"}});var Y=Object(S.a)("img")({width:"7px",height:"12px",margin:" 0 10px"}),X=Object(S.a)("div")({display:"flex",alignItems:"center",justifyContent:"flex-start",font:"400 12px/14px Roboto",letterSpacing:"0.4px",color:"#000000",opacity:.6,cursor:"pointer",margin:"20px 0"}),$=Object(S.a)(T)({textAlign:"left",font:"400 12px/14px Roboto",letterSpacing:"0.4px",marginTop:"4px",marginLeft:"16px"}),q=function(e){var t=e.setLoginSection,n=M(Object(a.useState)(""),2),o=n[0],i=n[1],l=M(Object(a.useState)(void 0),2),c=l[0],u=l[1],s=M(Object(a.useState)(void 0),2),d=s[0],p=s[1],f=M(Object(a.useState)(!1),2),m=f[0],g=f[1],h=M(Object(a.useState)(void 0),2),b=h[0],y=h[1],x=function(){if(""===o){var e="Niepoprawny format email";return p(e),e}if(!function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(o))return p(""),"";p(void 0)};return r.a.createElement(r.a.Fragment,null,m&&r.a.createElement(k,null),r.a.createElement(_,null,r.a.createElement(G,{value:o,onChange:function(e){return i(e.target.value)},placeholder:"Email"})),d&&r.a.createElement(J,null,d),b&&r.a.createElement(J,null,b),c&&r.a.createElement($,null,c),r.a.createElement(Z,{onClick:function(){x()||F.resetPassword(o,g,y,u)}},r.a.createElement(D,null,"ODZYSKAJ DOSTĘP")),r.a.createElement(X,{onClick:function(){return t("signing_in")}},r.a.createElement(Y,{src:v.a,alt:"leftArrow"}),r.a.createElement("div",null,"Powrót do logowania")))};function Q(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,r=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(a=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==l.return||l.return()}finally{if(r)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var V=Object(S.a)(R.a)({width:"100%",height:"56px",margin:"20px 0",display:"flex",position:"relative",justifyContent:"center",alignItems:"center",borderRadius:"4px",backgroundColor:"#2699FB","&:hover":{backgroundColor:"#2699FB"}}),ee=function(){var e=Q(Object(a.useState)(""),2),t=e[0],n=e[1],o=Q(Object(a.useState)(""),2),i=o[0],l=o[1],c=Q(Object(a.useState)(""),2),u=c[0],s=c[1],d=Q(Object(a.useState)(""),2),p=d[0],f=d[1],m=Q(Object(a.useState)(""),2),g=m[0],h=m[1],v=Q(Object(a.useState)(!1),2),b=v[0],x=v[1],w=Q(Object(a.useState)("password"),2),E=w[0],j=w[1],O=Q(Object(a.useState)("password"),2),S=O[0],C=O[1],A=Q(Object(a.useState)(void 0),2),z=A[0],I=A[1],P=Q(Object(a.useState)(void 0),2),R=P[0],U=P[1],L=Q(Object(a.useState)(void 0),2),N=L[0],T=L[1],B=Q(Object(a.useState)(void 0),2),W=B[0],Z=B[1],K=Q(Object(a.useState)(void 0),2),M=K[0],Y=K[1],X=function(){if(""===t){var e="Imię jest wymagane";return I(e),e}I(void 0)},$=function(){if(""===i){var e="Nazwisko jest wymagane";return U(e),e}U(void 0)},q=function(){if(""===u){var e="Niepoprawny format email";return T(e),e}if(!te(u))return T(""),"";T(void 0)},ee=function(){if(""===p){var e="Hasło jest wymagane";return Z(e),e}if(p!==g)return Z("Hasła się różnią"),"Hasła się różnią";Z(void 0)},te=function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())},ne=function(e){"first"===e&&j("password"===E?"text":"password"),"second"===e&&C("password"===S?"text":"password")};return r.a.createElement(r.a.Fragment,null,b&&r.a.createElement(k,null),r.a.createElement(_,null,r.a.createElement(G,{value:t,onChange:function(e){return n(e.target.value)},placeholder:"Wprowadź imię"}),z&&r.a.createElement(J,null,z)),r.a.createElement(_,null,r.a.createElement(G,{value:i,onChange:function(e){return l(e.target.value)},placeholder:"Nazwisko"}),R&&r.a.createElement(J,null,R)),r.a.createElement(_,null,r.a.createElement(G,{value:u,onChange:function(e){return s(e.target.value)},placeholder:"Email"}),N&&r.a.createElement(J,null,N)),r.a.createElement(_,null,r.a.createElement(G,{type:E,value:p,onChange:function(e){return f(e.target.value)},placeholder:"Hasło"}),r.a.createElement(H,{src:y.a,alt:"eye",onClick:function(){return ne("first")}})),r.a.createElement(_,null,r.a.createElement(G,{type:S,value:g,onChange:function(e){return h(e.target.value)},placeholder:"Hasło"}),r.a.createElement(H,{src:y.a,alt:"eye",onClick:function(){return ne("second")}}),W&&r.a.createElement(J,null,W)),M&&r.a.createElement(J,null,M),r.a.createElement(V,{onClick:function(){return Y(void 0),X(),$(),q(),ee(),void(X()||$()||q()||ee()||F.trySignUpWithEmailAndPassword(u,p,t,i,x,Y))}},r.a.createElement(D,null,"ZAREJESTRUJ")))},te=n(194),ne=n(193);function ae(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,r=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(a=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==l.return||l.return()}finally{if(r)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var re=Object(S.a)("div")({height:"100vh",width:"100%",display:"flex",flexDirection:"row",flexWrap:"wrap"}),oe=Object(S.a)("div")({backgroundImage:"url(".concat(d.a,")"),backgroundSize:"cover",width:"50%",position:"relative","@media only screen and (max-width : 960px)":{width:"100%",backgroundImage:"none",height:"100vh"}}),ie=Object(S.a)("div")({width:"50%",display:"grid",gridTemplateColumns:"3fr 328px 7fr",gridTemplateRows:"3fr auto 7fr","@media only screen and (max-width : 960px)":{display:"flex",width:"100%",zIndex:10,backgroundSize:"cover",backgroundImage:"url(".concat(f.a,")"),height:"100vh"}}),le=Object(S.a)("div")({gridColumnStart:2,gridColumnEnd:3,gridRowStart:2,gridRowEnd:3,"@media only screen and (max-width : 960px)":{backgroundImage:"url(".concat(g.a,")"),padding:"74px 27px 0 27px"}}),ce=Object(S.a)("div")({letterSpacing:"-0.53px",font:"300 60px/72px Roboto",marginBottom:"10px","@media only screen and (max-width : 960px)":{font:"300 34px/41px Roboto",letterSpacing:" 0.24px",textAlign:"left",opacity:.87}}),ue=Object(S.a)("div")({font:"300 14px/17px Roboto",letterSpacing:"-0.24px",opacity:.6}),se=Object(S.a)("div")({background:"#FFFFFF 0% 0% no-repeat padding-box",borderRadius:"25px",opacity:1,padding:"6px 42px",position:"absolute",width:"412px",top:"23vh",left:"50%",transform:"translate(-50%,0)","@media only screen and (max-width : 960px)":{position:"static",transform:"translate(0,0)",width:"100%",borderRadius:"25px",padding:"6px 28px"}}),de=Object(S.a)("div")({font:"700 14px/17px Roboto",letterSpacing:" 1.25px"}),pe=function(){var e=ae(Object(a.useState)(0),2),t=e[0],n=e[1],o=ae(Object(a.useState)("signing_in"),2),i=o[0],l=o[1];return r.a.createElement(re,null,r.a.createElement(ie,null,r.a.createElement(le,null,r.a.createElement(ce,null,"Nie idź sam na egzamin"),r.a.createElement(ue,null,"Egzaminy coraz bliżej, a czasu na powtórki coraz mnniej? Spokojnie! Tu wspieramy się nawzajem podczas egzaminów poprzez pamięć i modlitwę"))),r.a.createElement(oe,null,r.a.createElement(se,null,r.a.createElement(te.a,{value:t,onChange:function(e,t){n(t)},indicatorColor:"primary",textColor:"primary",centered:!0},r.a.createElement(ne.a,{label:r.a.createElement(de,null,"Zaloguj")}),r.a.createElement(ne.a,{label:r.a.createElement(de,null,"Zarejestruj")})),0===t&&("signing_in"===i&&r.a.createElement(K,{setLoginSection:l})||"recover_account"===i&&r.a.createElement(q,{setLoginSection:l})),1===t&&r.a.createElement(ee,null))))};function fe(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,r=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(a=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==l.return||l.return()}finally{if(r)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var me=function(e){var t=fe(Object(a.useState)(null),2),n=t[0],o=t[1];return u.auth().onAuthStateChanged(function(e){return o(e)}),n?r.a.createElement(r.a.Fragment,null,e.children):r.a.createElement(pe,null)},ge=function(e){return r.a.createElement(r.a.Fragment,null,e.children)};function he(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,r=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(a=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==l.return||l.return()}finally{if(r)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var ve=Object(S.a)("h3")({cursor:"pointer"}),be=function(){var e=he(Object(a.useState)(null),2),t=(e[0],e[1]);return Object(a.useEffect)(function(){var e=u.auth().currentUser;e&&t(e)},[]),r.a.createElement(ve,{onClick:function(){return F.signOut()}}," Wyloguj")},ye=n(195),xe=n(111),we=(n(166),n(110)),Ee=Object(we.a)({palette:{primary:{main:"#2699FB"}}}),je=r.a.memo(function(){return r.a.createElement(xe.a,null,r.a.createElement(ye.a,{theme:Ee},r.a.createElement(ge,null,r.a.createElement(me,null,r.a.createElement(be,null)))))});i.a.render(r.a.createElement(je,null),document.getElementById("root"))},46:function(e,t,n){e.exports=n.p+"images/eye-dcf6a.svg"}});