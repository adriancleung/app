"use strict";(self.webpackChunkadriancleung_app=self.webpackChunkadriancleung_app||[]).push([[77],{3708:function(e,n,t){t.d(n,{Gh:function(){return r},fs:function(){return a},M:function(){return u},LD:function(){return c},T5:function(){return s},c7:function(){return i}});var r=200,a="INVALID_TOKEN",u="VALID_TOKEN",c=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,s="https://api.adrianleung.dev",i="https://api.github.com"},4077:function(e,n,t){t.r(n),t.d(n,{default:function(){return g}});var r=t(885),a=t(2791),u=t(1223),c=t(513),s=t(9353),i=t(5731),o=t(3906),l=t(2184);function f(){return f=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},f.apply(this,arguments)}var d=(0,a.forwardRef)((function(e,n){return a.createElement(l.x,f({ref:n,viewBox:"0 0 24 24",a11yTitle:"UserAdmin"},e),a.createElement("path",{fill:"none",stroke:"#000",strokeWidth:"2",d:"M8 11A5 5 0 1 0 8 1a5 5 0 0 0 0 10zm5.023 2.023C11.772 11.76 10.013 11 8 11c-4 0-7 3-7 7v5h7m2-3.5a2.5 2.5 0 1 0 5.002-.002A2.5 2.5 0 0 0 10 19.5zM23 15l-3-3-6 6m3.5-3.5 3 3-3-3z"}))}));d.displayName="UserAdmin";var p=t(746),h=t(6871),m=t(3708),x=t(184),g=function(e){var n=(0,h.s0)(),t=(0,a.useState)(!1),l=(0,r.Z)(t,2),f=l[0],g=l[1],v=(0,a.useState)({email:"",password:""}),w=(0,r.Z)(v,2),k=w[0],j=w[1],b=(0,a.useState)(!0),y=(0,r.Z)(b,2),S=y[0],T=y[1];return(0,a.useEffect)((function(){(0,p.wt)()===m.M&&g(!0)}),[]),f?(0,x.jsx)(h.Fg,{to:"/admin"}):(0,x.jsx)(u.x,{width:"100vw",height:"100vh",background:"dark-3",justify:"center",align:"center",children:(0,x.jsxs)(u.x,{width:"medium",height:"medium",background:"white",round:"medium",pad:"small",gap:"medium",align:"center",border:!0,children:[(0,x.jsx)(d,{size:"large"}),(0,x.jsx)(c.x,{children:"Welcome!"}),(0,x.jsx)(u.x,{height:"100%",children:(0,x.jsx)(s.l,{value:k,onSubmit:function(){(0,p.x4)(k.email,k.password).then((function(e){null!==e.accessToken?n("/admin"):T(!1)})).catch((function(){T(!1)}))},onChange:function(e){return j(e)},children:(0,x.jsxs)(u.x,{height:"100%",gap:"medium",children:[(0,x.jsxs)(u.x,{gap:"small",children:[(0,x.jsx)(i.W,{name:"email",placeholder:"Username",type:"email",autoComplete:"email"}),(0,x.jsx)(i.W,{name:"password",placeholder:"Password",type:"password",autoComplete:"password"})]}),(0,x.jsx)(c.x,{color:"red",hidden:S,children:"Incorrect username or password"}),(0,x.jsx)(u.x,{direction:"row",justify:"center",children:(0,x.jsx)(o.z,{plain:!0,label:"Login",type:"submit"})})]})})})]})})}},746:function(e,n,t){t.d(n,{x4:function(){return l},kS:function(){return d},ts:function(){return p},wt:function(){return h}});var r=t(5861),a=t(7757),u=t.n(a),c=t(4569),s=t.n(c),i=t(3708),o=t(9444),l=function(){var e=(0,r.Z)(u().mark((function e(n,t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().post("".concat(i.T5,"/auth/login"),{email:n,password:t});case 2:return(r=e.sent).data.accessToken&&localStorage.setItem("user",JSON.stringify(r.data)),e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().post("".concat(i.T5,"/auth/verify"),null,{headers:(0,o.Z)()});case 3:if(e.sent.data.userId!==p().id){e.next=8;break}return e.abrupt("return",i.M);case 8:return e.abrupt("return",i.fs);case 9:e.next=14;break;case 11:return e.prev=11,e.t0=e.catch(0),e.abrupt("return",i.fs);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),d=function(){localStorage.removeItem("user")},p=function(){return JSON.parse(localStorage.getItem("user"))},h=function(){if(!p())return i.fs;f().then((function(e){return e})).catch((function(e){return i.fs}))}},9444:function(e,n,t){var r=t(746);n.Z=function(){var e=(0,r.ts)();return e&&e.accessToken?{"x-access-token":e.accessToken}:{}}}}]);
//# sourceMappingURL=77.05accec2.chunk.js.map