(self.webpackChunkadriancleung_app=self.webpackChunkadriancleung_app||[]).push([[166],{3708:function(e,t,n){"use strict";n.d(t,{Gh:function(){return r},fs:function(){return a},M:function(){return s},LD:function(){return u},T5:function(){return i},c7:function(){return c}});var r=200,a="INVALID_TOKEN",s="VALID_TOKEN",u=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,i="https://api.adrianleung.dev",c="https://api.github.com"},2980:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return B}});var r=n(2791),a=n(1223),s=n(4541),u=n(3906),i=n(3820),c=n(8704),o=n(9225),l="SocialLinks_ZoomOnHover__ovdKT",d=n(184),f=function(e){return(0,d.jsxs)(a.x,{direction:"row",gap:"medium",children:[(0,d.jsx)(u.z,{href:"https://github.com/adriancleung",children:(0,d.jsx)(i.Z,{className:l,style:{fontSize:"48px"}})}),(0,d.jsx)(u.z,{href:"https://linkedin.com/in/adriancleung",children:(0,d.jsx)(c.Z,{className:l,style:{fontSize:"48px"}})}),(0,d.jsx)(u.z,{href:"mailto:contact@adrianleung.dev",children:(0,d.jsx)(o.Z,{className:l,style:{fontSize:"48px"}})})]})},h=n(885),m=n(9745),p=n(9782),x=n(513),g=n(2575),v=n(4390),j=n(3708),w=n(3540),b=function(e){var t=(0,r.useState)(""),n=(0,h.Z)(t,2),s=n[0],u=n[1],i=(0,r.useState)(!0),c=(0,h.Z)(i,2),o=c[0],l=c[1];return(0,r.useEffect)((function(){(0,v.r$)().then((function(e){return e.status===j.Gh?u(e.data):null})).catch((function(e){return console.error(e)})).finally((function(){return l(!1)}))}),[]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a.x,{width:"100%",height:"100%",justify:"center",align:"center",children:(0,d.jsx)(g.ScaleLoader,{loading:o,height:60,width:10,radius:20,color:"white"})}),!o&&(0,d.jsx)(a.x,{overflow:"scroll",children:(0,d.jsx)(x.x,{style:{textAlign:"justify"},margin:"medium",children:(0,w.ZP)(s)})})]})},y=n(7005),k=n(9353),S=n(5731),Z=n(5258),z=function(e){var t=(0,r.useState)({name:"",email:"",message:""}),n=(0,h.Z)(t,2),s=n[0],i=n[1];return(0,d.jsxs)(a.x,{overflow:"scroll",children:[(0,d.jsxs)(x.x,{margin:"medium",children:["Thank you for visiting my website. If you would like to contact me, feel free to fill out this form or contact me by email or phone.",(0,d.jsx)("br",{}),(0,d.jsx)("br",{}),"Tel:"," ",(0,d.jsx)(y.e,{href:"tel:7809017155",color:"white",weight:"bold",children:"(780) 901-7155"}),(0,d.jsx)("br",{}),"Email:"," ",(0,d.jsx)(y.e,{href:"mailto:contact@adrianleung.dev",color:"white",weight:"bold",children:"contact@adrianleung.dev"})]}),(0,d.jsxs)(k.l,{value:s,onChange:function(e){return i(e)},onSubmit:function(){(0,v.bG)(String(s.name).split(" ")[0],void 0===String(s.name).split(" ")[1]?"":String(s.name).split(" ")[1],s.email,s.message).then((function(t){t.status===j.Gh?(alert("Thank you for your message. I will get back to you shortly!"),i({name:"",email:"",message:""}),e.showContact(!1)):alert("Message was unable to send. Please try again")})).catch((function(e){return alert("Message was unable to send. Please try again")}))},onReset:function(){return i({name:"",email:"",message:""})},children:[(0,d.jsx)(S.W,{validate:function(e,t){return""===e?{message:"Required",status:"error"}:{message:"",status:"info"}},name:"name",placeholder:"Name",margin:"medium"}),(0,d.jsx)(S.W,{validate:function(e,t){return""===e?{message:"Required",status:"error"}:j.LD.test(String(e).toLowerCase())?{message:"",status:"info"}:{message:"Invalid",status:"error"}},name:"email",placeholder:"Email",margin:"medium"}),(0,d.jsx)(S.W,{validate:function(e,t){return""===t.message?{message:"Required",status:"error"}:{message:"",status:"info"}},margin:"medium",children:(0,d.jsx)(Z.K,{id:"message-text-area",placeholder:"Message",name:"message",value:s.message,rows:15,resize:!1})}),(0,d.jsxs)(a.x,{direction:"row",gap:"medium",margin:"medium",justify:"end",children:[(0,d.jsx)(u.z,{type:"submit",label:"Submit",style:{fontWeight:"bolder"}}),(0,d.jsx)(u.z,{type:"reset",label:"Reset"})]})]})]})},T=function(e){var t=(0,r.useState)(!1),n=(0,h.Z)(t,2),s=n[0],i=n[1],c=(0,r.useState)(!1),o=(0,h.Z)(c,2),l=o[0],f=o[1];return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(a.x,{direction:"row",justify:"evenly",children:[(0,d.jsx)(u.z,{label:"About".toUpperCase(),onClick:function(){return i(!s)}}),(0,d.jsx)(u.z,{label:"Contact".toUpperCase(),onClick:function(){return f(!l)}})]}),s&&(0,d.jsx)(m.m,{onEsc:function(){return i(!1)},onClickOutside:function(){return i(!1)},children:(0,d.jsxs)(a.x,{width:"xlarge",pad:{bottom:"10vh"},children:[(0,d.jsx)(a.x,{height:"xsmall",children:(0,d.jsx)(u.z,{onClick:function(){return i(!1)},alignSelf:"end",margin:"small",children:(0,d.jsx)(p.x,{size:"medium"})})}),(0,d.jsx)(b,{})]})}),l&&(0,d.jsx)(m.m,{onEsc:function(){return f(!1)},onClickOutside:function(){return f(!1)},children:(0,d.jsxs)(a.x,{width:"xlarge",pad:{bottom:"10vh"},children:[(0,d.jsx)(a.x,{height:"xxsmall",children:(0,d.jsx)(u.z,{onClick:function(){return f(!1)},alignSelf:"end",margin:"small",children:(0,d.jsx)(p.x,{size:"medium"})})}),(0,d.jsx)(z,{showContact:function(e){return f(e)}})]})})]})},L=function(e){return(0,d.jsxs)(a.x,{margin:"large",gap:"medium",animation:{type:"fadeIn",duration:2e3},children:[(0,d.jsx)(s.X,{size:"xlarge",margin:{bottom:"xsmall"},children:"Adrian Leung"}),(0,d.jsx)(f,{}),(0,d.jsx)(T,{})]})},E=n(4627),C=n(7504),I=n(7868),N=n(7958),O=n(5861),P=n(7757),D=n.n(P),R=n(4569),W=n.n(R),_=function(){var e=(0,O.Z)(D().mark((function e(){var t;return D().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,W().get("".concat(j.c7,"/users/adriancleung/repos"),{headers:{Accept:"application/vnd.github.v3+json"}});case 3:return t=e.sent,e.abrupt("return",t);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),A=function(e){var t=e.title,n=e.body,a=e.fullTitle,s=e.link,c=e.language,o=(0,r.useState)(!1),l=(0,h.Z)(o,2),f=l[0],m=l[1];return(0,d.jsxs)(E.Z,{style:{flexGrow:0,flexShrink:0,flexBasis:"auto",transform:f?"translate(0px, -10px)":null},onMouseOver:function(){return m(!0)},onMouseOut:function(){return m(!1)},id:"card",height:"medium",width:"medium",background:"black",children:[(0,d.jsxs)(C.O,{pad:"medium",style:{fontWeight:"bolder",fontSize:"1.5rem"},children:[t,(0,d.jsx)(x.x,{size:"small",weight:"normal",children:c})]}),(0,d.jsx)(I.e,{pad:"medium",children:n}),(0,d.jsxs)(N.e,{pad:"small",children:[(0,d.jsx)(u.z,{href:s,children:(0,d.jsx)(i.Z,{style:{padding:"10px"}})}),(0,d.jsx)(x.x,{children:a})]})]})},M=function(e){var t=e.projectsLoading,n=e.data,s=(0,r.useRef)(),u={top:0,left:0,x:0,y:0};return(0,d.jsx)(a.x,{ref:s,animation:t?null:{type:"fadeIn",duration:2e3},width:"100vw",direction:"row",gap:"medium",id:"box",pad:"medium",onWheel:function(e){return function(e){e.preventDefault(),(s.current.scrollLeft>=s.current.scrollWidth-s.current.clientWidth||0===s.current.scrollLeft)&&window.scrollTo({top:document.documentElement.scrollTop+e.deltaY,behavior:"smooth"}),s.current.scrollTo({top:0,left:s.current.scrollLeft+e.deltaY,behaviour:"smooth"})}(e)},onMouseDown:function(e){return function(e){s.current.style.cursor="grabbing",s.current.style.userSelect="none",s.current.style["-webkit-user-select"]="none",s.current.style["-webkit-touch-callout"]="none",s.current.style["-moz-user-select"]="none",s.current.style["-ms-user-select"]="none",u.left=s.current.scrollLeft,u.right=s.current.scrollTop,u.x=e.clientX,u.y=e.clientY;var t=function(e){var t=e.clientX-u.x,n=e.clientY-u.y;s.current.scrollTop=u.top-n,s.current.scrollLeft=u.left-t};document.addEventListener("mouseup",(function(e){s.current.style.cursor="grab",s.current.style.removeProperty("user-select"),s.current.style.removeProperty("-webkit-user-select"),s.current.style.removeProperty("-webkit-touch-callout"),s.current.style.removeProperty("-moz-user-select"),s.current.style.removeProperty("-ms-user-select"),document.removeEventListener("mousemove",t),document.removeEventListener("mouseup",void 0)})),document.addEventListener("mousemove",t)}(e)},style:{cursor:"grab",userSelect:"none"},overflow:{horizontal:"scroll",vertical:"hidden"},wrap:!1,children:n.map((function(e,t){return(0,d.jsx)(A,{title:e.title,body:e.body,fullTitle:e.fullTitle,link:e.link,language:e.language},t)}))})},F=function(e){var t=(0,r.useState)(!0),n=(0,h.Z)(t,2),u=n[0],i=n[1],c=(0,r.useState)([]),o=(0,h.Z)(c,2),l=o[0],f=o[1];return(0,r.useEffect)((function(){_().then((function(e){var t=[];e.data.forEach((function(e){t.push({loading:u,title:e.name,body:e.description,fullTitle:e.full_name,link:e.html_url,language:e.language})})),f(t),i(!1)})).catch((function(e){console.error(e)}))}),[]),(0,d.jsxs)(a.x,{height:"100%",children:[(0,d.jsx)(s.X,{margin:"medium",children:"Projects"}),(0,d.jsxs)(a.x,{height:"100%",justify:"center",align:"center",children:[(0,d.jsx)(g.ScaleLoader,{loading:u,height:60,width:10,radius:20}),!u&&(0,d.jsx)(M,{loading:u,data:l})]})]})},G=n(4836);G.v0.GlobalWorkerOptions.workerSrc="//cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(G.v0.version,"/pdf.worker.min.js");var X=function(e){return(0,d.jsxs)(a.x,{height:"100%",children:[(0,d.jsx)(s.X,{children:"Resume"}),(0,d.jsxs)(a.x,{height:"100%",justify:"center",align:"center",children:[(0,d.jsx)(G.BB,{file:"".concat(j.T5,"/resume"),noData:"Failed to load PDF file.",children:(0,d.jsx)(G.T3,{scale:window.screen.width<600?.5:window.screen.width<768?.6:window.screen.width<992?.7:window.screen.width<1200?.8:.9,pageNumber:1})}),(0,d.jsx)(u.z,{style:{backgroundColor:"white",borderRadius:5,color:"black",padding:10,paddingLeft:20,paddingRight:20,margin:10},hoverIndicator:!0,label:"Download Resume",size:"small",href:"".concat(j.T5,"/resume?download=true")})]})]})},B=function(e){var t=function(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px"))};return(0,r.useEffect)((function(){return t(),window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}})),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a.x,{direction:"column",justify:"center",pad:"medium",background:"black",height:"calc(var(--vh, 1vh) * 100)",width:"100vw",children:(0,d.jsx)(L,{})}),(0,d.jsx)(a.x,{direction:"column",justify:"start",background:"white",height:"calc(var(--vh, 1vh) * 100)",width:"100vw",children:(0,d.jsx)(F,{})}),(0,d.jsx)(a.x,{direction:"column",justify:"start",pad:"medium",background:"black",height:"calc(var(--vh, 1,vh) * 100)",width:"100vw",children:(0,d.jsx)(X,{})})]})}},4390:function(e,t,n){"use strict";n.d(t,{bG:function(){return l},FU:function(){return d},kv:function(){return f},r$:function(){return h},zB:function(){return m}});var r=n(5861),a=n(7757),s=n.n(a),u=n(4569),i=n.n(u),c=n(3708),o=n(9444),l=function(){var e=(0,r.Z)(s().mark((function e(t,n,r,a){var u;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i().post("".concat(c.T5,"/mail"),{firstName:t,lastName:n,email:r,message:a});case 3:return u=e.sent,e.abrupt("return",u);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n,r,a){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(s().mark((function e(t,n){var r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=new FormData).append("name",t),r.append("file",n),e.prev=3,e.next=6,i().post("".concat(c.T5,"/resume"),r,{headers:(0,o.Z)()});case 6:return a=e.sent,e.abrupt("return",a);case 10:return e.prev=10,e.t0=e.catch(3),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t,n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i().get("".concat(c.T5,"/mail"),{headers:(0,o.Z)()});case 3:return t=e.sent,e.abrupt("return",t);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i().get("".concat(c.T5,"/about"));case 3:return t=e.sent,e.abrupt("return",t);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i().post("".concat(c.T5,"/about"),{content:t},{headers:(0,o.Z)()});case 3:return n=e.sent,e.abrupt("return",n);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},746:function(e,t,n){"use strict";n.d(t,{x4:function(){return l},kS:function(){return f},ts:function(){return h},wt:function(){return m}});var r=n(5861),a=n(7757),s=n.n(a),u=n(4569),i=n.n(u),c=n(3708),o=n(9444),l=function(){var e=(0,r.Z)(s().mark((function e(t,n){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().post("".concat(c.T5,"/auth/login"),{email:t,password:n});case 2:return(r=e.sent).data.accessToken&&localStorage.setItem("user",JSON.stringify(r.data)),e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i().post("".concat(c.T5,"/auth/verify"),null,{headers:(0,o.Z)()});case 3:if(e.sent.data.userId!==h().id){e.next=8;break}return e.abrupt("return",c.M);case 8:return e.abrupt("return",c.fs);case 9:e.next=14;break;case 11:return e.prev=11,e.t0=e.catch(0),e.abrupt("return",c.fs);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),f=function(){localStorage.removeItem("user")},h=function(){return JSON.parse(localStorage.getItem("user"))},m=function(){if(!h())return c.fs;d().then((function(e){return e})).catch((function(e){return c.fs}))}},9444:function(e,t,n){"use strict";var r=n(746);t.Z=function(){var e=(0,r.ts)();return e&&e.accessToken?{"x-access-token":e.accessToken}:{}}},4601:function(){},2767:function(){},8251:function(){},7677:function(){},1543:function(){},7324:function(){}}]);
//# sourceMappingURL=166.ed481ec4.chunk.js.map