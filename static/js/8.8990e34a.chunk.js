(this["webpackJsonpadriancleung-app"]=this["webpackJsonpadriancleung-app"]||[]).push([[8],{111:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"e",(function(){return c})),n.d(t,"f",(function(){return u})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return l}));var a=200,r="INVALID_TOKEN",c="VALID_TOKEN",u=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,o="https://api.adrianleung.dev",l="https://api.github.com"},117:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return d})),n.d(t,"b",(function(){return f})),n.d(t,"a",(function(){return p}));var a=n(118),r=n.n(a),c=n(120),u=n(121),o=n.n(u),l=n(111),i=n(119),s=function(){var e=Object(c.a)(r.a.mark((function e(t,n){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.post("".concat(l.a,"/auth/login"),{email:t,password:n});case 2:return(a=e.sent).data.accessToken&&localStorage.setItem("user",JSON.stringify(a.data)),e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),m=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.post("".concat(l.a,"/auth/verify"),null,{headers:Object(i.a)()});case 3:if(e.sent.data.userId!==f().id){e.next=8;break}return e.abrupt("return",l.e);case 8:return e.abrupt("return",l.c);case 9:e.next=14;break;case 11:return e.prev=11,e.t0=e.catch(0),e.abrupt("return",l.c);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),d=function(){localStorage.removeItem("user")},f=function(){return JSON.parse(localStorage.getItem("user"))},p=function(){if(!f())return l.c;m().then((function(e){return e}))}},119:function(e,t,n){"use strict";var a=n(117);t.a=function(){var e=Object(a.b)();return e&&e.accessToken?{"x-access-token":e.accessToken}:{}}},127:function(e,t,n){"use strict";n.d(t,"d",(function(){return s})),n.d(t,"c",(function(){return m})),n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return f}));var a=n(118),r=n.n(a),c=n(120),u=n(121),o=n.n(u),l=n(111),i=n(119),s=function(){var e=Object(c.a)(r.a.mark((function e(t,n,a,c){var u;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.post("".concat(l.a,"/mail"),{firstName:t,lastName:n,email:a,message:c});case 3:return u=e.sent,e.abrupt("return",u);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n,a,r){return e.apply(this,arguments)}}(),m=function(){var e=Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.get("".concat(l.a,"/resume"));case 3:return t=e.sent,e.abrupt("return",t);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.get("".concat(l.a,"/mail"),{headers:Object(i.a)()});case 3:return t=e.sent,e.abrupt("return",t);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.get("".concat(l.a,"/about"));case 3:return t=e.sent,e.abrupt("return",t);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},171:function(e,t,n){e.exports={ZoomOnHover:"SocialLinks_ZoomOnHover__2fejp"}},227:function(e,t){},228:function(e,t){},229:function(e,t){},230:function(e,t){},231:function(e,t){},278:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(109),u=n(236),o=n(280),l=n(143),i=n.n(l),s=n(174),m=n.n(s),d=n(175),f=n.n(d),p=n(171),h=n.n(p),g=function(e){return r.a.createElement(c.a,{direction:"row",gap:"medium"},r.a.createElement(o.a,{href:"https://github.com/adriancleung"},r.a.createElement(i.a,{className:h.a.ZoomOnHover,style:{fontSize:"48px"}})),r.a.createElement(o.a,{href:"https://linkedin.com/in/adriancleung"},r.a.createElement(m.a,{className:h.a.ZoomOnHover,style:{fontSize:"48px"}})),r.a.createElement(o.a,{href:"mailto:contact@adrianleung.dev"},r.a.createElement(f.a,{className:h.a.ZoomOnHover,style:{fontSize:"48px"}})))},b=n(124),v=n(282),E=n(261),w=n(284),y=n(38),j=n(127),O=n(111),k=n(193),x=n.n(k),S=function(e){var t=Object(a.useState)(""),n=Object(b.a)(t,2),u=n[0],o=n[1],l=Object(a.useState)(!0),i=Object(b.a)(l,2),s=i[0],m=i[1];return Object(a.useEffect)((function(){Object(j.a)().then((function(e){return e.status===O.d?o(e.data):null})).catch((function(e){return console.error(e)})).finally((function(){return m(!1)}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{width:"100%",height:"100%",justify:"center",align:"center"},r.a.createElement(y.ScaleLoader,{loading:s,height:60,width:10,radius:20,color:"white"})),!s&&r.a.createElement(c.a,{overflow:"scroll"},r.a.createElement(w.a,{style:{textAlign:"justify"},margin:"medium"},x()(u))))},L=n(285),T=n(260),z=n(277),C=n(286),I=function(e){var t=Object(a.useState)({name:"",email:"",message:""}),n=Object(b.a)(t,2),u=n[0],l=n[1];return r.a.createElement(c.a,{overflow:"scroll"},r.a.createElement(w.a,{margin:"medium"},"Thank you for visiting my website. If you would like to contact me, feel free to fill out this form or contact me by email or phone.",r.a.createElement("br",null),r.a.createElement("br",null),"Tel:"," ",r.a.createElement(L.a,{href:"tel:7809017155",color:"white",weight:"bold"},"(780) 901-7155"),r.a.createElement("br",null),"Email:"," ",r.a.createElement(L.a,{href:"mailto:contact@adrianleung.dev",color:"white",weight:"bold"},"contact@adrianleung.dev")),r.a.createElement(T.a,{value:u,onChange:function(e){return l(e)},onSubmit:function(){Object(j.d)(String(u.name).split(" ")[0],void 0===String(u.name).split(" ")[1]?"":String(u.name).split(" ")[1],u.email,u.message).then((function(t){t.status===O.d?(alert("Thank you for your message. I will get back to you shortly!"),l({name:"",email:"",message:""}),e.showContact(!1)):alert("Message was unable to send. Please try again")})).catch((function(e){return alert("Message was unable to send. Please try again")}))},onReset:function(){return l({name:"",email:"",message:""})}},r.a.createElement(z.a,{validate:function(e,t){return""===e?{message:"Required",status:"error"}:{message:"",status:"info"}},name:"name",placeholder:"Name",margin:"medium"}),r.a.createElement(z.a,{validate:function(e,t){return""===e?{message:"Required",status:"error"}:O.f.test(String(e).toLowerCase())?{message:"",status:"info"}:{message:"Invalid",status:"error"}},name:"email",placeholder:"Email",margin:"medium"}),r.a.createElement(z.a,{validate:function(e,t){return""===t.message?{message:"Required",status:"error"}:{message:"",status:"info"}},margin:"medium"},r.a.createElement(C.a,{id:"message-text-area",placeholder:"Message",name:"message",value:u.message,rows:15,resize:!1})),r.a.createElement(c.a,{direction:"row",gap:"medium",margin:"medium",justify:"end"},r.a.createElement(o.a,{type:"submit",label:"Submit",style:{fontWeight:"bolder"}}),r.a.createElement(o.a,{type:"reset",label:"Reset"}))))},N=function(e){var t=Object(a.useState)(!1),n=Object(b.a)(t,2),u=n[0],l=n[1],i=Object(a.useState)(!1),s=Object(b.a)(i,2),m=s[0],d=s[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{direction:"row",justify:"evenly"},r.a.createElement(o.a,{label:"About".toUpperCase(),onClick:function(){return l(!u)}}),r.a.createElement(o.a,{label:"Contact".toUpperCase(),onClick:function(){return d(!m)}})),u&&r.a.createElement(v.a,{onEsc:function(){return l(!1)},onClickOutside:function(){return l(!1)}},r.a.createElement(c.a,{width:"xlarge",pad:{bottom:"10vh"}},r.a.createElement(c.a,{height:"xsmall"},r.a.createElement(o.a,{onClick:function(){return l(!1)},alignSelf:"end",margin:"small"},r.a.createElement(E.a,{size:"medium"}))),r.a.createElement(S,null))),m&&r.a.createElement(v.a,{onEsc:function(){return d(!1)},onClickOutside:function(){return d(!1)}},r.a.createElement(c.a,{width:"xlarge",pad:{bottom:"10vh"}},r.a.createElement(c.a,{height:"xxsmall"},r.a.createElement(o.a,{onClick:function(){return d(!1)},alignSelf:"end",margin:"small"},r.a.createElement(E.a,{size:"medium"}))),r.a.createElement(I,{showContact:function(e){return d(e)}}))))},P=function(e){return r.a.createElement(c.a,{margin:"large",gap:"medium",animation:{type:"fadeIn",duration:2e3}},r.a.createElement(u.a,{size:"xlarge",margin:{bottom:"xsmall"}},"Adrian Leung"),r.a.createElement(g,null),r.a.createElement(N,null))},A=n(262),R=n(287),Z=n(263),_=n(288),D=n(118),H=n.n(D),M=n(120),W=n(121),F=n.n(W),J=function(){var e=Object(M.a)(H.a.mark((function e(){var t;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F.a.get("".concat(O.b,"/users/adriancleung/repos"),{headers:{Accept:"application/vnd.github.v3+json"}});case 3:return t=e.sent,e.abrupt("return",t);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),Y=function(e){var t=e.title,n=e.body,c=e.fullTitle,u=e.link,l=e.language,s=Object(a.useState)(!1),m=Object(b.a)(s,2),d=m[0],f=m[1];return r.a.createElement(A.a,{style:{flexGrow:0,flexShrink:0,flexBasis:"auto",transform:d?"translate(0px, -10px)":null},onMouseOver:function(){return f(!0)},onMouseOut:function(){return f(!1)},id:"card",height:"medium",width:"medium",background:"black"},r.a.createElement(R.a,{pad:"medium",style:{fontWeight:"bolder",fontSize:"1.5rem"}},t,r.a.createElement(w.a,{size:"small",weight:"normal"},l)),r.a.createElement(Z.a,{pad:"medium"},n),r.a.createElement(_.a,{pad:"small"},r.a.createElement(o.a,{href:u},r.a.createElement(i.a,{style:{padding:"10px"}})),r.a.createElement(w.a,null,c)))},q=function(e){var t=e.projectsLoading,n=e.data,u=Object(a.useRef)(),o={top:0,left:0,x:0,y:0};return r.a.createElement(c.a,{ref:u,animation:t?null:{type:"fadeIn",duration:2e3},width:"100vw",direction:"row",gap:"medium",id:"box",pad:"medium",onWheel:function(e){return function(e){e.preventDefault(),(u.current.scrollLeft>=u.current.scrollWidth-u.current.clientWidth||0===u.current.scrollLeft)&&window.scrollTo({top:document.documentElement.scrollTop+e.deltaY,behavior:"smooth"}),u.current.scrollTo({top:0,left:u.current.scrollLeft+e.deltaY,behaviour:"smooth"})}(e)},onMouseDown:function(e){return function(e){u.current.style.cursor="grabbing",u.current.style.userSelect="none",u.current.style["-webkit-user-select"]="none",u.current.style["-webkit-touch-callout"]="none",u.current.style["-moz-user-select"]="none",u.current.style["-ms-user-select"]="none",o.left=u.current.scrollLeft,o.right=u.current.scrollTop,o.x=e.clientX,o.y=e.clientY;var t=function(e){var t=e.clientX-o.x,n=e.clientY-o.y;u.current.scrollTop=o.top-n,u.current.scrollLeft=o.left-t};document.addEventListener("mouseup",(function(e){u.current.style.cursor="grab",u.current.style.removeProperty("user-select"),u.current.style.removeProperty("-webkit-user-select"),u.current.style.removeProperty("-webkit-touch-callout"),u.current.style.removeProperty("-moz-user-select"),u.current.style.removeProperty("-ms-user-select"),document.removeEventListener("mousemove",t),document.removeEventListener("mouseup",void 0)})),document.addEventListener("mousemove",t)}(e)},style:{cursor:"grab",userSelect:"none"},overflow:{horizontal:"scroll",vertical:"hidden"},wrap:!1},n.map((function(e,t){return r.a.createElement(Y,{key:t,title:e.title,body:e.body,fullTitle:e.fullTitle,link:e.link,language:e.language})})))},G=function(e){var t=Object(a.useState)(!0),n=Object(b.a)(t,2),o=n[0],l=n[1],i=Object(a.useState)([]),s=Object(b.a)(i,2),m=s[0],d=s[1];return Object(a.useEffect)((function(){J().then((function(e){var t=[];e.data.forEach((function(e){t.push({loading:o,title:e.name,body:e.description,fullTitle:e.full_name,link:e.html_url,language:e.language})})),d(t),l(!1)})).catch((function(e){console.error(e)}))}),[]),r.a.createElement(c.a,{height:"100%"},r.a.createElement(u.a,{margin:"medium"},"Projects"),r.a.createElement(c.a,{height:"100%",justify:"center",align:"center"},r.a.createElement(y.ScaleLoader,{loading:o,height:60,width:10,radius:20}),!o&&r.a.createElement(q,{loading:o,data:m})))},K=n(235);n(233);K.c.GlobalWorkerOptions.workerSrc="//cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(K.c.version,"/pdf.worker.min.js");var U=function(e){var t=Object(a.useState)(!0),n=Object(b.a)(t,2),o=n[0],l=n[1],i=Object(a.useState)(),s=Object(b.a)(i,2),m=s[0],d=s[1];return Object(a.useEffect)((function(){Object(j.c)().then((function(e){return e.status===O.d?d(e.data):null})).catch((function(e){return console.error(e)})).finally((function(){return l(!1)}))}),[]),r.a.createElement(c.a,{height:"100%"},r.a.createElement(u.a,null,"Resume"),r.a.createElement(c.a,{height:"100%",justify:"center",align:"center"},r.a.createElement(y.ScaleLoader,{loading:o,height:60,width:10,radius:20,color:"white"}),!o&&r.a.createElement(K.a,{file:m?"data:application/pdf;base64,".concat(m):null,noData:"Failed to load PDF file."},r.a.createElement(K.b,{scale:window.screen.width<600?.5:window.screen.width<768?.6:window.screen.width<992?.7:window.screen.width<1200?.8:.9,pageNumber:1}))))};t.default=function(e){var t=function(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px"))};return Object(a.useEffect)((function(){return t(),window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}})),r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{direction:"column",justify:"center",pad:"medium",background:"black",height:"calc(var(--vh, 1vh) * 100)",width:"100vw"},r.a.createElement(P,null)),r.a.createElement(c.a,{direction:"column",justify:"start",background:"white",height:"calc(var(--vh, 1vh) * 100)",width:"100vw"},r.a.createElement(G,null)),r.a.createElement(c.a,{direction:"column",justify:"start",pad:"medium",background:"black",height:"calc(var(--vh, 1,vh) * 100)",width:"100vw"},r.a.createElement(U,null)))}}}]);
//# sourceMappingURL=8.8990e34a.chunk.js.map