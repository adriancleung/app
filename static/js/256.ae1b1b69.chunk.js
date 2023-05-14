"use strict";(self.webpackChunkadriancleung_app=self.webpackChunkadriancleung_app||[]).push([[256],{4423:function(e,r,n){n.d(r,{LD:function(){return u},M:function(){return a},T5:function(){return s},c7:function(){return c},fs:function(){return t}});var t="INVALID_TOKEN",a="VALID_TOKEN",u=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,s="https://api.adrianleung.dev",c="https://api.github.com"},3256:function(e,r,n){n.r(r),n.d(r,{default:function(){return g}});var t=n(4165),a=n(5861),u=n(885),s=n(2791),c=n(1223),i=n(513),o=n(9353),l=n(5731),p=n(3906),f=n(2184);function d(){return d=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},d.apply(this,arguments)}var h=(0,s.forwardRef)((function(e,r){return s.createElement(f.x,d({ref:r,viewBox:"0 0 24 24",a11yTitle:"UserAdmin"},e),s.createElement("path",{fill:"none",stroke:"#000",strokeWidth:"2",d:"M8 11A5 5 0 1 0 8 1a5 5 0 0 0 0 10zm5.023 2.023C11.772 11.76 10.013 11 8 11c-4 0-7 3-7 7v5h7m2-3.5a2.5 2.5 0 1 0 5.002-.002A2.5 2.5 0 0 0 10 19.5zM23 15l-3-3-6 6m3.5-3.5 3 3-3-3z"}))}));h.displayName="UserAdmin";var m=n(746),x=n(6871),v=n(4423),w=n(184),g=function(){var e=(0,x.s0)(),r=(0,s.useState)(!1),n=(0,u.Z)(r,2),f=n[0],d=n[1],g=(0,s.useState)({email:"",password:""}),b=(0,u.Z)(g,2),k=b[0],Z=b[1],j=(0,s.useState)(!0),y=(0,u.Z)(j,2),S=y[0],T=y[1];return(0,s.useEffect)((function(){var e=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,m.wt)();case 2:if(e.t0=e.sent,e.t1=v.M,e.t0!==e.t1){e.next=6;break}d(!0);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),f?(0,w.jsx)(x.Fg,{to:"/admin"}):(0,w.jsx)(c.x,{width:"100vw",height:"100vh",background:"dark-3",justify:"center",align:"center",children:(0,w.jsxs)(c.x,{width:"medium",height:"medium",background:"white",round:"medium",pad:"small",gap:"medium",align:"center",border:!0,children:[(0,w.jsx)(h,{size:"large"}),(0,w.jsx)(i.x,{children:"Welcome!"}),(0,w.jsx)(c.x,{height:"100%",children:(0,w.jsx)(o.l,{value:k,onSubmit:function(){(0,m.x4)(k.email,k.password).then((function(r){null!==r.accessToken?e("/admin"):T(!1)})).catch((function(){T(!1)}))},onChange:function(e){return Z(e)},children:(0,w.jsxs)(c.x,{height:"100%",gap:"medium",children:[(0,w.jsxs)(c.x,{gap:"small",children:[(0,w.jsx)(l.W,{name:"email",placeholder:"Username",type:"email",autoComplete:"email"}),(0,w.jsx)(l.W,{name:"password",placeholder:"Password",type:"password",autoComplete:"password"})]}),(0,w.jsx)(i.x,{color:"red",hidden:S,children:"Incorrect username or password"}),(0,w.jsx)(c.x,{direction:"row",justify:"center",children:(0,w.jsx)(p.z,{plain:!0,label:"Login",type:"submit"})})]})})})]})})}},746:function(e,r,n){n.d(r,{kS:function(){return p},ts:function(){return f},wt:function(){return d},x4:function(){return o}});var t=n(4165),a=n(5861),u=n(4569),s=n.n(u),c=n(4423),i=n(3301),o=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(r,n){var a;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().post("".concat(c.T5,"/login"),{email:r,password:n});case 2:return(a=e.sent).data.accessToken&&localStorage.setItem("user",JSON.stringify(a.data)),e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(r,n){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().post("".concat(c.T5,"/verify"),null,{headers:(0,i.Z)()});case 3:if(e.sent.data.userId!==f().userId){e.next=8;break}return e.abrupt("return",c.M);case 8:return e.abrupt("return",c.fs);case 9:e.next=14;break;case 11:return e.prev=11,e.t0=e.catch(0),e.abrupt("return",c.fs);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),p=function(){localStorage.removeItem("user")},f=function(){return JSON.parse(localStorage.getItem("user"))},d=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(){var r;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!f()){e.next=13;break}return e.prev=1,e.next=4,l();case 4:return r=e.sent,e.abrupt("return",r);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",c.fs);case 11:e.next=14;break;case 13:return e.abrupt("return",c.fs);case 14:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}()},3301:function(e,r,n){var t=n(746);r.Z=function(){var e=(0,t.ts)();return e&&e.accessToken?{authorization:"Bearer ".concat(e.accessToken)}:{}}}}]);
//# sourceMappingURL=256.ae1b1b69.chunk.js.map