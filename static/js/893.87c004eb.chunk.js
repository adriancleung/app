"use strict";(self.webpackChunkadriancleung_app=self.webpackChunkadriancleung_app||[]).push([[893],{4423:function(e,n,t){t.d(n,{LD:function(){return s},M:function(){return a},T5:function(){return u},c7:function(){return i},fs:function(){return r}});var r="INVALID_TOKEN",a="VALID_TOKEN",s=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,u="https://api.adrianleung.dev",i="https://api.github.com"},5893:function(e,n,t){t.r(n),t.d(n,{default:function(){return _}});var r,a=t(4165),s=t(5861),u=t(885),i=t(2791),c=t(1223),o=t(4541),l=t(6871),p=t(4805),d=t(1413),x=t(2482),f=t(6586),h=t(5977),m=t(3008),g=t(4459),j=t(1033),b=t(184),v=function(e){var n=e.firstName,t=e.lastName,r=e.email,a=e.message,s=(0,p.useMediaQuery)({maxWidth:1224}),u="".concat(n," ").concat(t);return(0,b.jsx)(x.S,{children:s?(0,b.jsxs)(f.p,{scope:"col",border:"bottom",children:[u," <",r,">",(0,b.jsx)("br",{}),(0,b.jsx)("br",{}),a]}):(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(f.p,{scope:"col",border:"bottom",children:u}),(0,b.jsx)(f.p,{scope:"col",border:"bottom",children:r}),(0,b.jsx)(f.p,{scope:"col",border:"bottom",children:a})]})})},Z=function(){var e=(0,p.useMediaQuery)({maxWidth:1224}),n=(0,i.useState)([]),t=(0,u.Z)(n,2),r=t[0],c=t[1],o=(0,i.useState)(!0),l=(0,u.Z)(o,2),Z=l[0],k=l[1],w=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.Z.mail.get();case 3:n=e.sent,c(n.mails),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:return e.prev=10,k(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(){return e.apply(this,arguments)}}();return(0,i.useEffect)((function(){w()}),[]),Z?null:(0,b.jsxs)(h.i,{children:[(0,b.jsx)(m.x,{children:(0,b.jsx)(x.S,{children:e?(0,b.jsx)(f.p,{scope:"col",border:"bottom",children:(0,b.jsx)("strong",{children:"Messages"})}):(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(f.p,{scope:"col",border:"bottom",children:(0,b.jsx)("strong",{children:"Name"})}),(0,b.jsx)(f.p,{scope:"col",border:"bottom",children:(0,b.jsx)("strong",{children:"Email"})}),(0,b.jsx)(f.p,{scope:"col",border:"bottom",children:(0,b.jsx)("strong",{children:"Message"})})]})})}),(0,b.jsx)(g.R,{children:r.map((function(e,n){return(0,b.jsx)(v,(0,d.Z)({},e),n)}))})]})},k=t(5723),w=t(6280),S=t(513),z=t(3906),A=t(8134),y=t(8235),T=t(805),C=t(5604),E=t(2925),I=t(5207),M=t(7816);!function(e){e.ABOUT="about",e.MAIL="mail",e.RESUME="resume",e.SETTINGS="settings"}(r||(r={}));var N=function(e){var n=e.option;return(0,b.jsx)(k.Y,{responsive:!1,width:"300px",round:{corner:"right",size:"small"},background:"#0984e3",elevation:"xlarge",pad:{left:"medium",right:"large",top:"medium"},header:(0,b.jsxs)(c.x,{width:"100%",direction:"row",gap:"small",justify:"center",align:"center",wrap:!0,children:[(0,b.jsx)(w.q,{background:"#DADADA",round:"full",children:(0,b.jsx)(y.n,{size:"medium"})}),(0,b.jsx)(S.x,{textAlign:"center",margin:{vertical:"small"},children:"Adrian Leung"})]}),footer:(0,b.jsx)(z.z,{plain:!0,alignSelf:"start",icon:(0,b.jsx)(T.R,{size:"medium",style:{padding:"10px"}}),href:"/logout",label:"Logout"}),children:(0,b.jsx)(c.x,{width:"100%",children:(0,b.jsxs)(A.J,{gap:"large",children:[(0,b.jsx)(c.x,{children:(0,b.jsx)(z.z,{plain:!0,alignSelf:"start",icon:(0,b.jsx)(C.d,{}),label:"About",onClick:function(e){n(r.ABOUT)}})}),(0,b.jsx)(c.x,{children:(0,b.jsx)(z.z,{plain:!0,alignSelf:"start",icon:(0,b.jsx)(E.c,{}),label:"Mail",onClick:function(e){n(r.MAIL)}})}),(0,b.jsx)(c.x,{children:(0,b.jsx)(z.z,{plain:!0,alignSelf:"start",icon:(0,b.jsx)(I.o,{}),label:"Resume",onClick:function(e){n(r.RESUME)}})}),(0,b.jsx)(c.x,{children:(0,b.jsx)(z.z,{plain:!0,alignSelf:"start",icon:(0,b.jsx)(M.X,{}),label:"Settings",onClick:function(e){n(r.SETTINGS)}})})]})})})},U=t(4347),L=t(4885),R=function(e){var n=e.option;return(0,b.jsx)(c.x,{fill:"horizontal",children:(0,b.jsx)(U.U,{animate:!0,round:{corner:"bottom",size:"medium"},style:{zIndex:999,position:"fixed",width:"100%"},children:(0,b.jsxs)(L.H,{label:"Admin",children:[(0,b.jsxs)(c.x,{pad:{horizontal:"medium"},background:"#0984e3",height:"xsmall",gap:"medium",direction:"row",justify:"start",align:"center",wrap:!0,children:[(0,b.jsx)(w.q,{background:"#DADADA",round:"full",children:(0,b.jsx)(y.n,{size:"medium"})}),(0,b.jsx)(S.x,{textAlign:"center",margin:{vertical:"small"},children:"Adrian Leung"})]}),(0,b.jsx)(c.x,{background:"#0984e3",height:"xxsmall",pad:{horizontal:"medium"},children:(0,b.jsx)(z.z,{plain:!0,alignSelf:"start",icon:(0,b.jsx)(C.d,{}),label:"About",onClick:function(e){n(r.ABOUT)}})}),(0,b.jsx)(c.x,{background:"#0984e3",height:"xxsmall",pad:{horizontal:"medium"},children:(0,b.jsx)(z.z,{plain:!0,alignSelf:"start",icon:(0,b.jsx)(E.c,{}),label:"Mail",onClick:function(e){n(r.MAIL)}})}),(0,b.jsx)(c.x,{background:"#0984e3",height:"xxsmall",pad:{horizontal:"medium"},children:(0,b.jsx)(z.z,{plain:!0,alignSelf:"start",icon:(0,b.jsx)(I.o,{}),label:"Resume",onClick:function(e){n(r.RESUME)}})}),(0,b.jsx)(c.x,{background:"#0984e3",height:"xxsmall",pad:{horizontal:"medium"},children:(0,b.jsx)(z.z,{plain:!0,alignSelf:"start",icon:(0,b.jsx)(M.X,{}),label:"Settings",onClick:function(e){n(r.SETTINGS)}})}),(0,b.jsx)(c.x,{background:"#0984e3",height:"xxsmall",round:{corner:"bottom",size:"medium"},pad:{horizontal:"medium"},children:(0,b.jsx)(z.z,{plain:!0,alignSelf:"start",icon:(0,b.jsx)(T.R,{size:"medium"}),href:"/logout",label:"Logout"})})]})})})},O=t(746),D=t(4423),F=t(4633),B=function(){var e=(0,i.useState)(),n=(0,u.Z)(e,2),t=n[0],r=n[1];return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(S.x,{children:"Upload Resume:"}),(0,b.jsx)(F.S,{name:"resume",multiple:!1,renderFile:function(e){return(0,b.jsx)(S.x,{children:e.name})},onChange:function(e){var n;r((null===e||void 0===e||null===(n=e.target)||void 0===n?void 0:n.files)&&e.target.files[0])}}),(0,b.jsx)(z.z,{onClick:(0,s.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t){e.next=4;break}return alert("No file selected"),e.abrupt("return");case 4:return e.next=6,j.Z.resume.update(t);case 6:"OK"===e.sent?alert("Resume updated"):alert("Could not update resume"),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0),alert("Could not update resume");case 14:case"end":return e.stop()}}),e,null,[[0,10]])}))),children:"Submit"})]})},K=t(5258),G=function(){var e=(0,i.useState)(""),n=(0,u.Z)(e,2),t=n[0],r=n[1],c=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.Z.about.get();case 3:n=e.sent,r(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return(0,i.useEffect)((function(){c()}),[]),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(S.x,{children:"Update About Section:"}),(0,b.jsx)(K.K,{size:"small",fill:!0,value:t,onChange:function(e){return r(e.target.value)}}),(0,b.jsx)(z.z,{onClick:(0,s.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.Z.about.update(t);case 3:"OK"===e.sent?alert("About section updated"):alert("Could not update about section"),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0),alert("Could not update about section");case 11:case"end":return e.stop()}}),e,null,[[0,7]])}))),children:"Submit"})]})},_=function(){var e=(0,i.useState)(!1),n=(0,u.Z)(e,2),t=n[0],d=n[1],x=(0,p.useMediaQuery)({maxWidth:1224}),f=(0,i.useState)(r.ABOUT),h=(0,u.Z)(f,2),m=h[0],g=h[1],j=function(){switch(m){case r.ABOUT:return(0,b.jsx)(G,{});case r.MAIL:return(0,b.jsx)(Z,{});case r.RESUME:return(0,b.jsx)(B,{});case r.SETTINGS:default:return(0,b.jsx)(b.Fragment,{})}};return(0,i.useEffect)((function(){var e=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,O.wt)();case 2:if(e.t0=e.sent,e.t1=D.fs,e.t0!==e.t1){e.next=6;break}d(!0);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),t?(0,b.jsx)(l.Fg,{to:"/login"}):(0,b.jsxs)(c.x,{width:"100vw",height:"100vh",gap:x?"medium":"small",direction:x?"column":"row",children:[x?(0,b.jsx)(R,{option:function(e){return g(e)}}):(0,b.jsx)(N,{option:function(e){return g(e)}}),(0,b.jsxs)(c.x,{width:"100%",height:"100%",pad:"small",margin:{top:x?"50px":void 0},children:[(0,b.jsx)(o.X,{margin:"small",children:m}),(0,b.jsx)(j,{})]})]})}},1033:function(e,n,t){var r=t(4165),a=t(5861),s=t(4569),u=t.n(s),i=t(4423),c=t(3301),o=u().create({baseURL:i.T5});o.interceptors.request.use(function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.headers=n.headers||{},(t=(0,c.Z)())&&(n.headers.authorization=t),e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}());var l={about:{get:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.get("/about");case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),update:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.post("/about",{content:n});case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},chat:{response:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.post("/chat",{content:n});case 2:return e.abrupt("return",e.sent.data.message);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},mail:{get:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.get("/mails");case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),send:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t,a,s){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.post("/mails",{firstName:n,lastName:t,email:a,message:s});case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));return function(n,t,r,a){return e.apply(this,arguments)}}()},resume:{get:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.get("/resume");case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),update:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new FormData).append("resume",n),e.next=4,o.post("/resume",t);case 4:return e.abrupt("return",e.sent.data);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}};n.Z=l},746:function(e,n,t){t.d(n,{kS:function(){return p},ts:function(){return d},wt:function(){return x},x4:function(){return o}});var r=t(4165),a=t(5861),s=t(4569),u=t.n(s),i=t(4423),c=t(3301),o=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u().post("".concat(i.T5,"/login"),{email:n,password:t});case 2:return(a=e.sent).data.accessToken&&localStorage.setItem("user",JSON.stringify(a.data)),e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u().post("".concat(i.T5,"/verify"),null,{headers:(0,c.Z)()});case 3:if(e.sent.data.userId!==d().userId){e.next=8;break}return e.abrupt("return",i.M);case 8:return e.abrupt("return",i.fs);case 9:e.next=14;break;case 11:return e.prev=11,e.t0=e.catch(0),e.abrupt("return",i.fs);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),p=function(){localStorage.removeItem("user")},d=function(){return JSON.parse(localStorage.getItem("user"))},x=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!d()){e.next=13;break}return e.prev=1,e.next=4,l();case 4:return n=e.sent,e.abrupt("return",n);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",i.fs);case 11:e.next=14;break;case 13:return e.abrupt("return",i.fs);case 14:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}()},3301:function(e,n,t){var r=t(746);n.Z=function(){var e=(0,r.ts)();return e&&e.accessToken?{authorization:"Bearer ".concat(e.accessToken)}:{}}}}]);
//# sourceMappingURL=893.87c004eb.chunk.js.map