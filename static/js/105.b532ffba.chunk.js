"use strict";(self.webpackChunkadriancleung_app=self.webpackChunkadriancleung_app||[]).push([[105],{3708:function(n,e,t){t.d(e,{Gh:function(){return r},fs:function(){return a},M:function(){return i},LD:function(){return u},T5:function(){return s},c7:function(){return c}});var r=200,a="INVALID_TOKEN",i="VALID_TOKEN",u=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,s="https://api.adrianleung.dev",c="https://api.github.com"},7105:function(n,e,t){t.r(e),t.d(e,{default:function(){return O}});var r=t(885),a=t(2791),i=t(1223),u=t(4541),s=t(6871),c=t(4805),o=t(2482),l=t(6586),d=t(5977),x=t(3008),f=t(4459),p=t(4390),h=t(184),m=function(n){var e=n.name,t=n.email,r=n.message,a=(0,c.useMediaQuery)({maxWidth:1224});return(0,h.jsx)(o.S,{children:a?(0,h.jsxs)(l.p,{scope:"col",border:"bottom",children:[e," <",t,">",(0,h.jsx)("br",{}),(0,h.jsx)("br",{}),r]}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(l.p,{scope:"col",border:"bottom",children:e}),(0,h.jsx)(l.p,{scope:"col",border:"bottom",children:t}),(0,h.jsx)(l.p,{scope:"col",border:"bottom",children:r})]})})},g=function(){var n=(0,c.useMediaQuery)({maxWidth:1224}),e=(0,a.useState)([]),t=(0,r.Z)(e,2),i=t[0],u=t[1],s=(0,a.useState)(!0),g=(0,r.Z)(s,2),j=g[0],b=g[1];return(0,a.useEffect)((function(){(0,p.kv)().then((function(n){var e=[];n.data.mail.forEach((function(n){e.push({name:"".concat(n.firstName," ").concat(n.lastName),email:n.email,message:n.message})})),u(e)})).catch((function(n){return console.error(n)})).finally((function(){return b(!1)}))}),[]),!j&&(0,h.jsxs)(d.i,{children:[(0,h.jsx)(x.x,{children:(0,h.jsx)(o.S,{children:n?(0,h.jsx)(l.p,{scope:"col",border:"bottom",children:(0,h.jsx)("strong",{children:"Messages"})}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(l.p,{scope:"col",border:"bottom",children:(0,h.jsx)("strong",{children:"Name"})}),(0,h.jsx)(l.p,{scope:"col",border:"bottom",children:(0,h.jsx)("strong",{children:"Email"})}),(0,h.jsx)(l.p,{scope:"col",border:"bottom",children:(0,h.jsx)("strong",{children:"Message"})})]})})}),(0,h.jsx)(f.R,{children:i.map((function(n,e){return(0,h.jsx)(m,{name:n.name,email:n.email,message:n.message},e)}))})]})},j=t(5723),b=t(6280),v=t(513),k=t(3906),w=t(8134),z=t(8235),S=t(805),A=t(5604),Z=t(2925),y=t(5207),C=t(7816),T=function(n){var e=n.option;return(0,h.jsx)(j.Y,{responsive:!1,width:"300px",round:{corner:"right",size:"small"},background:"#0984e3",elevation:"xlarge",pad:{left:"medium",right:"large",top:"medium"},header:(0,h.jsxs)(i.x,{width:"100%",direction:"row",gap:"small",justify:"center",align:"center",wrap:!0,children:[(0,h.jsx)(b.q,{background:"#DADADA",round:"full",children:(0,h.jsx)(z.n,{size:"medium"})}),(0,h.jsx)(v.x,{textAlign:"center",margin:{vertical:"small"},children:"Adrian Leung"})]}),footer:(0,h.jsx)(k.z,{plain:!0,alignSelf:"start",icon:(0,h.jsx)(S.R,{size:"medium",style:{padding:"10px"}}),href:"/logout",label:"Logout"}),children:(0,h.jsx)(i.x,{width:"100%",children:(0,h.jsxs)(w.J,{gap:"large",children:[(0,h.jsx)(i.x,{children:(0,h.jsx)(k.z,{plain:!0,alignSelf:"start",icon:(0,h.jsx)(A.d,{}),label:"About",onClick:function(n){e("About")}})}),(0,h.jsx)(i.x,{children:(0,h.jsx)(k.z,{plain:!0,alignSelf:"start",icon:(0,h.jsx)(Z.c,{}),label:"Mail",onClick:function(n){e("Mail")}})}),(0,h.jsx)(i.x,{children:(0,h.jsx)(k.z,{plain:!0,alignSelf:"start",icon:(0,h.jsx)(y.o,{}),label:"Resume",onClick:function(n){e("Resume")}})}),(0,h.jsx)(i.x,{children:(0,h.jsx)(k.z,{plain:!0,alignSelf:"start",icon:(0,h.jsx)(C.X,{}),label:"Settings",onClick:function(n){e("Settings")}})})]})})})},M=t(4347),D=t(4885),F=function(n){var e=n.option;return(0,h.jsx)(i.x,{fill:"horizontal",children:(0,h.jsx)(M.U,{animate:!0,round:{corner:"bottom",size:"medium"},style:{zIndex:999,position:"fixed",width:"100%"},children:(0,h.jsxs)(D.H,{label:"Admin",background:"#0984e3",children:[(0,h.jsxs)(i.x,{pad:{horizontal:"medium"},background:"#0984e3",height:"xsmall",gap:"medium",direction:"row",justify:"start",align:"center",wrap:!0,children:[(0,h.jsx)(b.q,{background:"#DADADA",round:"full",children:(0,h.jsx)(z.n,{size:"medium"})}),(0,h.jsx)(v.x,{textAlign:"center",margin:{vertical:"small"},children:"Adrian Leung"})]}),(0,h.jsx)(i.x,{background:"#0984e3",height:"xxsmall",pad:{horizontal:"medium"},children:(0,h.jsx)(k.z,{plain:!0,alignSelf:"start",icon:(0,h.jsx)(A.d,{}),label:"About",onClick:function(n){e("About")}})}),(0,h.jsx)(i.x,{background:"#0984e3",height:"xxsmall",pad:{horizontal:"medium"},children:(0,h.jsx)(k.z,{plain:!0,alignSelf:"start",icon:(0,h.jsx)(Z.c,{}),label:"Mail",onClick:function(n){e("Mail")}})}),(0,h.jsx)(i.x,{background:"#0984e3",height:"xxsmall",pad:{horizontal:"medium"},children:(0,h.jsx)(k.z,{plain:!0,alignSelf:"start",icon:(0,h.jsx)(y.o,{}),label:"Resume",onClick:function(n){e("Resume")}})}),(0,h.jsx)(i.x,{background:"#0984e3",height:"xxsmall",pad:{horizontal:"medium"},children:(0,h.jsx)(k.z,{plain:!0,alignSelf:"start",icon:(0,h.jsx)(C.X,{}),label:"Settings",onClick:function(n){e("Settings")}})}),(0,h.jsx)(i.x,{background:"#0984e3",height:"xxsmall",round:{corner:"bottom",size:"medium"},pad:{horizontal:"medium"},children:(0,h.jsx)(k.z,{plain:!0,alignSelf:"start",icon:(0,h.jsx)(S.R,{size:"medium"}),href:"/logout",label:"Logout"})})]})})})},N=t(746),R=t(3708),I=t(4633),E=function(){var n=(0,a.useState)(null),e=(0,r.Z)(n,2),t=e[0],i=e[1];return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(v.x,{children:"Upload Resume:"}),(0,h.jsx)(I.S,{name:"Resume",multiple:!1,renderFile:function(n){return(0,h.jsx)(v.x,{children:n.name})},onChange:function(n){var e=n.target.files;i(e[0])}}),(0,h.jsx)(k.z,{onClick:function(){return(0,p.FU)(t.name,t)},children:"Submit"})]})},L=t(5258),U=function(){var n=(0,a.useState)(""),e=(0,r.Z)(n,2),t=e[0],i=e[1];return(0,a.useEffect)((function(){(0,p.r$)().then((function(n){return i(n.data)}))}),[]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(v.x,{children:"Update About Section:"}),(0,h.jsx)(L.K,{size:"small",fill:!0,value:t,onChange:function(n){return i(n.target.value)}}),(0,h.jsx)(k.z,{onClick:function(){(0,p.zB)(t)},children:"Submit"})]})},O=function(n){var e=(0,a.useState)(!1),t=(0,r.Z)(e,2),o=t[0],l=t[1],d=(0,c.useMediaQuery)({maxWidth:1224}),x=(0,a.useState)("About"),f=(0,r.Z)(x,2),p=f[0],m=f[1],j=function(){switch(p){case"About":return(0,h.jsx)(U,{});case"Mail":return(0,h.jsx)(g,{});case"Resume":return(0,h.jsx)(E,{});default:return(0,h.jsx)(h.Fragment,{})}};return(0,a.useEffect)((function(){(0,N.wt)()===R.fs&&l(!0)}),[]),o?(0,h.jsx)(s.Fg,{to:"/login"}):(0,h.jsxs)(i.x,{width:"100vw",height:"100vh",gap:d?"medium":"small",direction:d?"column":"row",children:[d?(0,h.jsx)(F,{option:function(n){return m(n)}}):(0,h.jsx)(T,{option:function(n){return m(n)}}),(0,h.jsxs)(i.x,{width:"100%",height:"100%",pad:"small",margin:{top:d?"50px":null},children:[(0,h.jsx)(u.X,{margin:"small",children:p}),(0,h.jsx)(j,{})]})]})}},4390:function(n,e,t){t.d(e,{bG:function(){return l},FU:function(){return d},kv:function(){return x},r$:function(){return f},zB:function(){return p}});var r=t(5861),a=t(7757),i=t.n(a),u=t(4569),s=t.n(u),c=t(3708),o=t(9444),l=function(){var n=(0,r.Z)(i().mark((function n(e,t,r,a){var u;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s().post("".concat(c.T5,"/mail"),{firstName:e,lastName:t,email:r,message:a});case 3:return u=n.sent,n.abrupt("return",u);case 7:return n.prev=7,n.t0=n.catch(0),n.abrupt("return",n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e,t,r,a){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e,t){var r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(r=new FormData).append("name",e),r.append("file",t),n.prev=3,n.next=6,s().post("".concat(c.T5,"/resume"),r,{headers:(0,o.Z)()});case 6:return a=n.sent,n.abrupt("return",a);case 10:return n.prev=10,n.t0=n.catch(3),n.abrupt("return",n.t0);case 13:case"end":return n.stop()}}),n,null,[[3,10]])})));return function(e,t){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s().get("".concat(c.T5,"/mail"),{headers:(0,o.Z)()});case 3:return e=n.sent,n.abrupt("return",e);case 7:return n.prev=7,n.t0=n.catch(0),n.abrupt("return",n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s().get("".concat(c.T5,"/about"));case 3:return e=n.sent,n.abrupt("return",e);case 7:return n.prev=7,n.t0=n.catch(0),n.abrupt("return",n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s().post("".concat(c.T5,"/about"),{content:e},{headers:(0,o.Z)()});case 3:return t=n.sent,n.abrupt("return",t);case 7:return n.prev=7,n.t0=n.catch(0),n.abrupt("return",n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()},746:function(n,e,t){t.d(e,{x4:function(){return l},kS:function(){return x},ts:function(){return f},wt:function(){return p}});var r=t(5861),a=t(7757),i=t.n(a),u=t(4569),s=t.n(u),c=t(3708),o=t(9444),l=function(){var n=(0,r.Z)(i().mark((function n(e,t){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().post("".concat(c.T5,"/auth/login"),{email:e,password:t});case 2:return(r=n.sent).data.accessToken&&localStorage.setItem("user",JSON.stringify(r.data)),n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s().post("".concat(c.T5,"/auth/verify"),null,{headers:(0,o.Z)()});case 3:if(n.sent.data.userId!==f().id){n.next=8;break}return n.abrupt("return",c.M);case 8:return n.abrupt("return",c.fs);case 9:n.next=14;break;case 11:return n.prev=11,n.t0=n.catch(0),n.abrupt("return",c.fs);case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(){return n.apply(this,arguments)}}(),x=function(){localStorage.removeItem("user")},f=function(){return JSON.parse(localStorage.getItem("user"))},p=function(){if(!f())return c.fs;d().then((function(n){return n})).catch((function(n){return c.fs}))}},9444:function(n,e,t){var r=t(746);e.Z=function(){var n=(0,r.ts)();return n&&n.accessToken?{"x-access-token":n.accessToken}:{}}}}]);
//# sourceMappingURL=105.b532ffba.chunk.js.map