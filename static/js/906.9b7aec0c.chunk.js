"use strict";(self.webpackChunkadriancleung_app=self.webpackChunkadriancleung_app||[]).push([[906],{3906:function(t,e,n){n.d(e,{z:function(){return _}});var o=n(2791),r=n(955),i=n(798),a=n(2131),u=n(3029);var l={},c=n(1223),d=n(9898),s=n(3792),h=n(564),b=n(679),f=(0,r.css)([""," "," flex-grow:1;display:flex;"],(function(t){return!0===t.fillContainer||"horizontal"===t.fillContainer?"\n        width: 100%;\n        max-width: none;\n      ":""}),(function(t){return!0===t.fillContainer||"vertical"===t.fillContainer?"height: 100%;":""})),p=r.default.div.withConfig({displayName:"StyledStack",componentId:"sc-ajspsk-0"})(["position:relative;"," "," ",""],b.$G,(function(t){return t.fillContainer&&f}),(function(t){return t.theme.stack&&t.theme.stack.extend}));p.defaultProps={},Object.setPrototypeOf(p.defaultProps,u.l);var m={fill:"\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n  ",center:"\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  ",left:"\n    top: 50%;\n    left: 0;\n    transform: translateY(-50%);\n  ",right:"\n    top: 50%;\n    right: 0;\n    transform: translateY(-50%);\n  ",top:"\n    top: 0;\n    left: 50%;\n    transform: translateX(-50%);\n  ",bottom:"\n    bottom: 0;\n    left: 50%;\n    transform: translateX(-50%);\n  ","top-left":"\n    top: 0;\n    left: 0;\n  ","bottom-left":"\n    bottom: 0;\n    left: 0;\n  ","top-right":"\n    top: 0;\n    right: 0;\n  ","bottom-right":"\n    bottom: 0;\n    right: 0;\n  "},v=r.default.div.withConfig({displayName:"StyledStack__StyledStackLayer",componentId:"sc-ajspsk-1"})(["position:",";"," "," "," ",""],(function(t){return t.guiding?"relative":"absolute"}),(function(t){return t.guiding&&"display: block;"}),(function(t){return!t.guiding&&m[t.anchor||"fill"]+";"}),(function(t){return t.fillContainer&&"\n    width: 100%;\n    height: 100%;\n  "}),(function(t){return!t.interactive&&"pointer-events: none;"}));v.defaultProps={},Object.setPrototypeOf(v.defaultProps,u.l);var g={},y=["anchor","children","fill","guidingChild","interactiveChild"];function x(){return x=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},x.apply(this,arguments)}var z=(0,o.forwardRef)((function(t,e){var n=t.anchor,r=t.children,i=t.fill,a=t.guidingChild,u=t.interactiveChild,l=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,y),c=o.Children.toArray(r).filter((function(t){return t})),d=function(t){var e=t;return"first"!==e&&e?"last"===e&&(e=c.length-1):e=0,e},s=d(a),h=u&&d(u),b=c.map(function(t){var e=t.anchor,n=t.fill,r=t.guidingIndex,i=t.interactiveChild,a=t.interactiveIndex;return function(t,u){var l=void 0===i||a===u,c=u===r?{guiding:!0,fillContainer:n}:{anchor:e};return o.createElement(v,x({key:u,interactive:l},c),t)}}({anchor:n,fill:i,guidingIndex:s,interactiveChild:u,interactiveIndex:h}));return o.createElement(p,x({ref:e,fillContainer:i},l),b)}));z.displayName="Stack",z.propTypes=g;var k=n(513),w=(0,r.default)(c.x).withConfig({displayName:"Badge__StyledBadgeContainer",componentId:"sc-1es4ws1-0"})(["",""],(function(t){return t.theme.button.badge.container.extend})),C=function(t){var e,n,i=t.children,a=t.content,u=(0,o.useContext)(r.ThemeContext),l=(0,o.useRef)(),d=(0,o.useRef)(),b="boolean"===typeof a||a&&a.value&&"boolean"===typeof a.value?(0,s.gd)(u.button.badge.size.medium)/2+"px":u.button.badge.size.medium,f=(0,o.useState)(b),p=f[0],m=f[1],v=(0,o.useState)(p),g=v[0],y=v[1];if((0,h.b)((function(){var t=function(){if(l&&l.current)if("number"===typeof a||"object"===typeof a&&a.value){var t=l.current.getBoundingClientRect(),e=t.height,n=t.width;if(e){var o=2.5*((0,s.gd)(p)-e);y(Math.max((0,s.gd)(g),Math.ceil(n+o))+"px")}}else y(l.current.getBoundingClientRect().width+"px"),m(l.current.getBoundingClientRect().height+"px")};return window.addEventListener("resize",t),t(),function(){window.removeEventListener("resize",t)}}),[a,p,g]),(0,h.b)((function(){if(d&&d.current){var t="boolean"===typeof a||a&&!0===a.value?3.5:2,e={right:"-"+Math.round((0,s.gd)(g)/t)+"px",top:"-"+Math.round((0,s.gd)(p)/t)+"px"};d.current.children[1].style.top=e.top,d.current.children[1].style.right=e.right}}),[a,p,g]),"number"===typeof a?e=a:"object"===typeof a&&(e=a.value),"number"===typeof e||"boolean"===typeof e||"boolean"===typeof a){if("number"===typeof e){var x=a.max||9;n=o.createElement(k.x,{color:"text-strong",size:u.button.badge.text.size.medium,weight:"normal",ref:l},e>x?x+"+":e)}n=o.createElement(w,{align:"center",background:a.background||u.button.badge.container.background,flex:!1,height:{min:p},justify:"center",round:!0,pad:"boolean"!==typeof e&&"boolean"!==typeof a?u.button.badge.container.pad:void 0,width:{min:g}},n)}else n=o.createElement(c.x,{ref:l},a);return o.createElement(z,{ref:d,anchor:"top-right"},i,n)},j=function(t){var e=t.hasIcon&&!t.hasLabel,n=t.sizeProp;return!e&&n&&t.theme.button.size&&t.theme.button.size[n]?t.theme.button.size[n].border.radius:t.theme.button.border.radius},P=function(t){return(0,r.css)(["border:"," solid ",";border-radius:",";color:",";padding:",";",""],t.theme.button.border.width,(0,a.ut)(t.colorValue||t.theme.button.border.color||"control",t.theme),j(t),(0,a.ut)(t.theme.button.color||"text",t.theme),function(t){var e=t.sizeProp;return e&&t.theme.button.size&&t.theme.button.size[e]?(0,r.css)([""," ",""],t.theme.button.size[e].pad.vertical,t.theme.button.size[e].pad.horizontal):(0,r.css)([""," ",""],t.theme.button.padding.vertical,t.theme.button.padding.horizontal)}(t),function(t){var e=t.sizeProp||"medium",n=t.theme.text[e];return(0,r.css)(["font-size:",";line-height:",";"],n.size,n.height)}(t))};var O=(0,r.css)(["&:hover{"," ",";}"],(function(t){return t.hoverIndicator&&(0,i.AM)(t.hoverIndicator,t.theme)}),(function(t){return!t.plain&&(0,r.css)(["box-shadow:0px 0px 0px 2px ",";"],function(t){return t.colorValue?(0,a.ut)(t.colorValue,t.theme):t.active&&t.primary&&t.theme.button.primary&&t.theme.button.primary.active&&t.theme.button.primary.active.border&&t.theme.button.primary.active.border.color?(0,a.ut)(t.theme.button.primary.active.border.color,t.theme):(0,a.ut)(t.theme.button.border.color||"control",t.theme)}(t))})),I=r.default.button.withConfig({displayName:"StyledButton",componentId:"sc-323bzc-0"})(["display:inline-block;box-sizing:border-box;cursor:pointer;font:inherit;text-decoration:none;margin:0;background:transparent;overflow:visible;text-transform:none;"," "," "," "," "," "," "," &:focus{","}&:focus:not(:focus-visible){","}"," "," "," "," ",""],b.$G,(function(t){return t.plain&&function(t){return(0,r.css)(["color:",";outline:none;border:none;padding:0;text-align:inherit;"],(0,a.ut)(t.colorValue||"inherit",t.theme))}(t)}),(function(t){return!t.plain&&P(t)}),(function(t){return t.primary&&function(t){return(0,r.css)([""," border-radius:",";",""],(0,i.Nu)((0,a.ut)(t.colorValue||t.theme.button.primary&&t.theme.button.primary.color||"control",t.theme),t.theme,t.theme.button.color),j(t),t.theme.button.primary&&t.theme.button.primary.extend)}(t)}),(function(t){return!t.disabled&&!t.selected&&!t.focus&&O}),(function(t){return!t.disabled&&t.active&&function(t){return(0,r.css)([""," "," ",""],i.Ii,t.primary&&t.theme.button.primary&&t.theme.button.primary.active&&t.theme.button.primary.active.border&&t.theme.button.primary.active.border.color&&"border: "+t.theme.button.border.width+" solid\n    "+(0,a.ut)(t.theme.button.primary.active.border.color,t.theme)+";\n    ",t.primary&&t.theme.button.primary&&t.theme.button.primary.active&&t.theme.button.primary.active.extend)}(t)}),(function(t){return t.disabled&&t.theme.button&&t.theme.button.disabled&&function(t){return(0,r.css)([""," "," "," ",""],(0,b.Cv)(t.theme.button.disabled.opacity),!t.plain&&t.theme.button.disabled.border&&t.theme.button.disabled.border.color&&"border: "+t.theme.button.border.width+" solid\n    "+(0,a.ut)(t.theme.button.disabled.border.color,t.theme)+";",t.theme.button.disabled.color&&(t.primary?(0,i.Nu)((0,a.ut)(t.theme.button.disabled.color,t.theme),t.theme,t.theme.button.color):"color: "+(0,a.ut)(t.theme.button.disabled.color,t.theme)+";"),t.theme.button.disabled&&t.theme.button.disabled.extend)}(t)}),(function(t){return(!t.plain||t.focusIndicator)&&(0,b.jq)()}),(0,b.GA)(),(function(t){return!t.plain&&t.theme.button.transition&&"\n    transition-property: "+t.theme.button.transition.properties.join(",")+";\n    transition-duration: "+t.theme.button.transition.duration+"s;\n    transition-timing-function: "+t.theme.button.transition.timing+";\n  "}),(function(t){return t.fillContainer&&("horizontal"===(e=t.fillContainer)?"width: 100%;":"vertical"===e?"height: 100%;":e?"\n      width: 100%;\n      height: 100%;\n      max-width: none;\n      flex: 1 0 auto;\n    ":void 0);var e}),(function(t){return t.hasIcon&&!t.hasLabel&&"\n    line-height: 0;\n  "}),(function(t){return t.pad&&t.hasIcon&&!t.hasLabel&&"\n    padding: "+t.theme.global.edgeSize.small+";\n  "}),(function(t){return t.theme.button&&t.theme.button.extend}));I.defaultProps={},Object.setPrototypeOf(I.defaultProps,u.l);var E=function(t,e,n){return void 0===t&&(t="medium"),t&&n.size&&n.size[t]&&n.size[t].pad?{vertical:n.size[t].pad.vertical,horizontal:n.size[t].pad.horizontal}:e.button.padding?{vertical:e.global.edgeSize[e.button.padding.vertical]||e.button.padding.vertical,horizontal:e.global.edgeSize[e.button.padding.horizontal]||e.button.padding.horizontal}:void 0},M=function(t){return(0,r.css)(["border:none;",";"," "," ",""],function(t){var e=t.sizeProp,n="object"===typeof t.kind?t.kind:t.theme.button;return e&&n.size&&n.size[e]?(0,r.css)(["border-radius:",";"],n.size[e].border.radius):n.border&&n.border.radius?(0,r.css)(["border-radius:",";"],n.border.radius):""}(t),function(t){var e=t.sizeProp,n=t.theme,o=t.kind,i="object"===typeof o?o:n.button,a=E(e,n,i);return a?(0,r.css)(["padding:"," ",";"],a.vertical,a.horizontal):""}(t),function(t){var e=t.sizeProp||"medium",n=t.theme.text[e];return(0,r.css)(["font-size:",";line-height:",";"],n.size,n.height)}(t),t.icon&&"\n    > svg {\n      display: flex;\n      align-self: center;\n      vertical-align: middle;\n    }\n  ")},S=function(t,e){var n;if(e){n=t;for(var o=e.split(".");n&&o.length;)n=n[o.shift()]}return n},B=function(t,e){var n=(0,s.gd)(e);return(0,r.css)(["padding:","px ","px;"],Math.max((0,s.gd)(t.vertical)-n,0),Math.max((0,s.gd)(t.horizontal)-n,0))},N=r.default.button.withConfig({shouldForwardProp:function(t,e){return!["kind"].includes(t)&&e(t)}}).withConfig({displayName:"StyledButtonKind",componentId:"sc-1vhfpnt-0"})(["display:inline-block;box-sizing:border-box;cursor:pointer;font:inherit;text-decoration:none;margin:0;background:transparent;overflow:visible;text-transform:none;"," "," "," "," "," "," "," "," &:focus{","}&:focus:not(:focus-visible){","}"," "," ",""],b.$G,(function(t){return t.plain&&function(t){return(0,r.css)(["outline:none;border:none;padding:0;text-align:inherit;color:inherit;",""],t.icon&&"\n    > svg {\n      display: flex;\n      align-self: center;\n      vertical-align: middle;\n    }\n  ")}(t)}),(function(t){return!t.disabled&&t.active&&i.Ii}),(function(t){return!t.plain&&M(t)}),(function(t){return!t.plain&&function(t){var e=t.colorValue,n=t.kind,o=t.sizeProp,i=t.themePaths,a=t.theme,u=[],l="object"===typeof n?n:a.button,c=E(o,a,l);if(i.base.forEach((function(t){var n=S(l,t);n&&(u.push((0,b.mJ)(n,a,e)),n.border&&n.border.width&&c&&!n.padding&&u.push(B(c,n.border.width)))})),!i.base.length&&"object"===typeof n){var d=n;d&&(u.push((0,b.mJ)(d,a,e)),d.border&&d.border.width&&c&&!d.padding&&u.push(B(c,d.border.width)))}return i.hover.forEach((function(t){var e=S(l,t);if(e){var n=(0,b.mJ)(e,a),o="";e.border&&e.border.width&&c&&!e.padding&&(o=B(c,e.border.width)),n.length>0&&u.push((0,r.css)(["&:hover{"," ","}"],n,o))}})),u}(t)}),(function(t){return!t.plain&&t.align&&"\n    text-align: "+t.align+";\n    "}),(function(t){return!t.disabled&&t.hoverIndicator&&function(t){var e=t.hoverIndicator,n=t.theme,o={};!0===e||"background"===e?o.background=n.global.hover.background:e.color||e.background?(e.background&&(o.background=e.background),e.color&&(o.color=e.color)):o.background=e;var i=(0,b.mJ)(o,n);return i.length>0?(0,r.css)(["&:hover{","}"],i):""}(t)}),(function(t){return t.disabled&&(0,b.Cv)(t.theme.button.disabled.opacity)}),(function(t){return(!t.plain||t.focusIndicator)&&(0,b.jq)()}),(0,b.GA)(),(function(t){return!t.plain&&t.theme.button.transition&&"\n    transition-property: "+t.theme.button.transition.properties.join(",")+";\n    transition-duration: "+t.theme.button.transition.duration+"s;\n    transition-timing-function: "+t.theme.button.transition.timing+";\n  "}),(function(t){return t.fillContainer&&("horizontal"===(e=t.fillContainer)?"width: 100%;":"vertical"===e?"height: 100%;":e?"\n      width: 100%;\n      height: 100%;\n      max-width: none;\n      flex: 1 0 auto;\n    ":void 0);var e}),(function(t){return t.theme.button&&t.theme.button.extend}));N.defaultProps={},Object.setPrototypeOf(N.defaultProps,u.l);var L=["active","align","aria-label","badge","color","children","disabled","icon","focusIndicator","gap","fill","href","justify","kind","label","onBlur","onClick","onFocus","onMouseOut","onMouseOver","plain","primary","reverse","secondary","selected","size","tip","type","a11yTitle","as"];function V(){return V=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},V.apply(this,arguments)}var R=function(t,e,n,o){void 0===t&&(t=[]);var r=[],a=t.length-1;for("object"===typeof o&&(a=0);a>=0&&!r[1];){var u="object"===typeof o&&o||e.button;if(t[a])for(var l=t[a].split(".");u&&l.length;)u=u[l.shift()];if(u){var c=n&&u.background&&u.background.color?n:u.background,d=u.color||(!Object.prototype.hasOwnProperty.call(u,"color")||void 0!==u.color)&&void 0,s=!n||u.background&&u.background.color||u.border&&u.border.color?d:n;r=(0,i.Ap)(c,s,e)}a-=1}return r[1]||void 0},T=function(t,e,n,o,r){var i;if(void 0===e&&(e=[]),o){var a="object"===typeof o&&o||n.button;if(e[0])for(var u=e[0].split(".");a&&u.length;)a=a[u.shift()];a&&(i=a[t]||a[t]&&a[t].color)}else i=r&&n&&n.button&&n.button.primary?n.button.primary[t]||n.button.primary[t]&&n.button.primary[t].color:n&&n.button&&n.button[t]||n&&n.button&&n.button[t]&&n.button[t].color;return i},_=(0,o.forwardRef)((function(t,e){var n=t.active,l=t.align,s=void 0===l?"center":l,h=t["aria-label"],b=t.badge,f=t.color,p=t.children,m=t.disabled,v=t.icon,g=t.focusIndicator,y=void 0===g||g,x=t.gap,z=t.fill,k=t.href,w=t.justify,j=t.kind,P=t.label,O=t.onBlur,E=t.onClick,M=t.onFocus,S=t.onMouseOut,B=t.onMouseOver,_=t.plain,A=t.primary,F=t.reverse,G=t.secondary,J=t.selected,$=t.size,q=t.tip,X=t.type,Y=void 0===X?"button":X,K=t.a11yTitle,D=void 0===K?"string"===typeof q?q:void 0:K,H=t.as,Q=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,L),U=(0,o.useContext)(r.ThemeContext)||u.l.theme,W=(0,o.useState)(),Z=W[0],tt=W[1],et=(0,o.useState)(!1),nt=et[0],ot=et[1];(v||P)&&p&&console.warn("Button should not have children if icon or label is provided");var rt=(0,o.useMemo)((function(){return"object"===typeof j}),[j]),it=(0,o.useMemo)((function(){if(U.button.default||rt)return j||(A?"primary":G?"secondary":"default")}),[j,rt,A,G,U]),at=(0,o.useMemo)((function(){if(it&&!_){var t={base:[],hover:[]};return rt||t.base.push(it),J&&(t.base.push("selected"),rt||t.base.push("selected."+it)),m?(t.base.push("disabled"),rt||t.base.push("disabled."+it)):(n&&(t.base.push("active"),rt||t.base.push("active."+it)),t.hover.push("hover"),rt||t.hover.push("hover."+it),n&&(t.hover.push("hover.active"),rt||t.hover.push("hover.active."+it))),t}}),[n,m,it,rt,_,J]),ut=function(t){ot(!0),B&&B(t)},lt=function(t){ot(!1),S&&S(t)},ct=v;if(v&&!v.props.color)if(it){if(!_){var dt=nt&&R(at.hover,U)||R(at.base,U,f,it);dt&&(ct=(0,o.cloneElement)(v,{color:dt}))}}else A&&(ct=(0,o.cloneElement)(v,{color:U.global.colors.text[function(){var t=(0,i.rj)((0,a.ut)(f||U.button.primary&&U.button.primary.color||U.global.colors.control||"brand",U),U);return(0,a.Pi)(t,U)}()?"dark":"light"]}));var st,ht=!H&&k?"a":H,bt=F?P:ct,ft=F?ct:P;st=bt&&ft?o.createElement(c.x,{direction:"row",align:"center",justify:w||("center"===s?"center":"between"),gap:x||U.button.gap,responsive:!1},bt,ft):"function"===typeof p?p({disabled:m,hover:nt,focus:Z}):bt||ft||p;var pt,mt=T("background",at&&at.base,U,it,A),vt=T("border",at&&at.base,U,it,A),gt=!mt&&!vt||!it&&v&&!P;return b&&gt&&(st=o.createElement(C,{content:b},st)),pt=it?o.createElement(N,V({},Q,{as:ht,ref:e,active:n,align:s,"aria-label":h||D,badge:b,colorValue:f,disabled:m,hasIcon:!!v,gap:x,hasLabel:!!P,icon:v,fillContainer:z,focus:Z,focusIndicator:y,href:k,kind:it,themePaths:at,onClick:E,onFocus:function(t){tt(!0),M&&M(t)},onBlur:function(t){tt(!1),O&&O(t)},onMouseOver:ut,onMouseOut:lt,plain:_||o.Children.count(p)>0,primary:A,sizeProp:$,type:k?void 0:Y}),st):o.createElement(I,V({},Q,{as:ht,ref:e,"aria-label":h||D,colorValue:f,active:n,selected:J,disabled:m,hasIcon:!!v,gap:x,hasLabel:!!P,fillContainer:z,focus:Z,focusIndicator:y,href:k,kind:it,themePaths:at,onClick:E,onFocus:function(t){tt(!0),M&&M(t)},onBlur:function(t){tt(!1),O&&O(t)},onMouseOver:ut,onMouseOut:lt,pad:!_,plain:"undefined"!==typeof _?_:o.Children.count(p)>0||v&&!P,primary:A,sizeProp:$,type:k?void 0:Y}),st),q&&(pt="string"===typeof q?o.createElement(d.C,{content:q},pt):o.createElement(d.C,q,pt)),b&&!gt&&(pt=o.createElement(C,{content:b},pt)),pt}));_.displayName="Button",_.propTypes=l}}]);
//# sourceMappingURL=906.9b7aec0c.chunk.js.map