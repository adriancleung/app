(this["webpackJsonpadriancleung-app"]=this["webpackJsonpadriancleung-app"]||[]).push([[2],{268:function(t,e,n){"use strict";n.d(e,"a",(function(){return _}));var o=n(0),r=n.n(o),i=n(1),a=n(31),c=n(4),u=n(13);n(2);var l={},d=n(110),b=n(276),s=n(3),h=n(38),f=n(42),p=Object(i.css)([""," "," flex-grow:1;display:flex;"],(function(t){return!0===t.fillContainer||"horizontal"===t.fillContainer?"\n        width: 100%;\n        max-width: none;\n      ":""}),(function(t){return!0===t.fillContainer||"vertical"===t.fillContainer?"height: 100%;":""})),m=i.default.div.withConfig({displayName:"StyledStack",componentId:"sc-ajspsk-0"})(["position:relative;"," "," ",""],f.h,(function(t){return t.fillContainer&&p}),(function(t){return t.theme.stack&&t.theme.stack.extend}));m.defaultProps={},Object.setPrototypeOf(m.defaultProps,u.a);var v={fill:"\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n  ",center:"\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  ",left:"\n    top: 50%;\n    left: 0;\n    transform: translateY(-50%);\n  ",right:"\n    top: 50%;\n    right: 0;\n    transform: translateY(-50%);\n  ",top:"\n    top: 0;\n    left: 50%;\n    transform: translateX(-50%);\n  ",bottom:"\n    bottom: 0;\n    left: 50%;\n    transform: translateX(-50%);\n  ","top-left":"\n    top: 0;\n    left: 0;\n  ","bottom-left":"\n    bottom: 0;\n    left: 0;\n  ","top-right":"\n    top: 0;\n    right: 0;\n  ","bottom-right":"\n    bottom: 0;\n    right: 0;\n  "},g=i.default.div.withConfig({displayName:"StyledStack__StyledStackLayer",componentId:"sc-ajspsk-1"})(["position:",";"," "," "," ",""],(function(t){return t.guiding?"relative":"absolute"}),(function(t){return t.guiding&&"display: block;"}),(function(t){return!t.guiding&&v[t.anchor||"fill"]+";"}),(function(t){return t.fillContainer&&"\n    width: 100%;\n    height: 100%;\n  "}),(function(t){return!t.interactive&&"pointer-events: none;"}));g.defaultProps={},Object.setPrototypeOf(g.defaultProps,u.a);var y={},j=["anchor","children","fill","guidingChild","interactiveChild"];function O(){return(O=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}var x=Object(o.forwardRef)((function(t,e){var n=t.anchor,i=t.children,a=t.fill,c=t.guidingChild,u=t.interactiveChild,l=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,j),d=o.Children.toArray(i).filter((function(t){return t})),b=function(t){var e=t;return"first"!==e&&e?"last"===e&&(e=d.length-1):e=0,e},s=b(c),h=u&&b(u),f=d.map(function(t){var e=t.anchor,n=t.fill,o=t.guidingIndex,i=t.interactiveChild,a=t.interactiveIndex;return function(t,c){var u=void 0===i||a===c,l=c===o?{guiding:!0,fillContainer:n}:{anchor:e};return r.a.createElement(g,O({key:c,interactive:u},l),t)}}({anchor:n,fill:a,guidingIndex:s,interactiveChild:u,interactiveIndex:h}));return r.a.createElement(m,O({ref:e,fillContainer:a},l),f)}));x.displayName="Stack",x.propTypes=y;var z=n(272),k=Object(i.default)(d.a).withConfig({displayName:"Badge__StyledBadgeContainer",componentId:"sc-1es4ws1-0"})(["",""],(function(t){return t.theme.button.badge.container.extend})),w=function(t){var e,n,a=t.children,c=t.content,u=Object(o.useContext)(i.ThemeContext),l=Object(o.useRef)(),b=Object(o.useRef)(),f="boolean"===typeof c||c&&c.value&&"boolean"===typeof c.value?Object(s.b)(u.button.badge.size.medium)/2+"px":u.button.badge.size.medium,p=Object(o.useState)(f),m=p[0],v=p[1],g=Object(o.useState)(m),y=g[0],j=g[1];if(Object(h.a)((function(){var t=function(){if(l&&l.current)if("number"===typeof c||"object"===typeof c&&c.value){var t=l.current.getBoundingClientRect(),e=t.height,n=t.width;if(e){var o=2.5*(Object(s.b)(m)-e);j(Math.max(Object(s.b)(y),Math.ceil(n+o))+"px")}}else j(l.current.getBoundingClientRect().width+"px"),v(l.current.getBoundingClientRect().height+"px")};return window.addEventListener("resize",t),t(),function(){window.removeEventListener("resize",t)}}),[c,m,y]),Object(h.a)((function(){if(b&&b.current){var t="boolean"===typeof c||c&&!0===c.value?3.5:2,e={right:"-"+Math.round(Object(s.b)(y)/t)+"px",top:"-"+Math.round(Object(s.b)(m)/t)+"px"};b.current.children[1].style.top=e.top,b.current.children[1].style.right=e.right}}),[c,m,y]),"number"===typeof c?e=c:"object"===typeof c&&(e=c.value),"number"===typeof e||"boolean"===typeof e||"boolean"===typeof c){if("number"===typeof e){var O=c.max||9;n=r.a.createElement(z.a,{color:"text-strong",size:u.button.badge.text.size.medium,weight:"normal",ref:l},e>O?O+"+":e)}n=r.a.createElement(k,{align:"center",background:c.background||u.button.badge.container.background,flex:!1,height:{min:m},justify:"center",round:!0,pad:"boolean"!==typeof e&&"boolean"!==typeof c?u.button.badge.container.pad:void 0,width:{min:y}},n)}else n=r.a.createElement(d.a,{ref:l},c);return r.a.createElement(x,{ref:b,anchor:"top-right"},a,n)},C=function(t){var e=t.hasIcon&&!t.hasLabel,n=t.sizeProp;return!e&&n&&t.theme.button.size&&t.theme.button.size[n]?t.theme.button.size[n].border.radius:t.theme.button.border.radius},P=function(t){return Object(i.css)(["border:"," solid ",";border-radius:",";color:",";padding:",";",""],t.theme.button.border.width,Object(c.c)(t.colorValue||t.theme.button.border.color||"control",t.theme),C(t),Object(c.c)(t.theme.button.color||"text",t.theme),function(t){var e=t.sizeProp;return e&&t.theme.button.size&&t.theme.button.size[e]?Object(i.css)([""," ",""],t.theme.button.size[e].pad.vertical,t.theme.button.size[e].pad.horizontal):Object(i.css)([""," ",""],t.theme.button.padding.vertical,t.theme.button.padding.horizontal)}(t),function(t){var e=t.sizeProp||"medium",n=t.theme.text[e];return Object(i.css)(["font-size:",";line-height:",";"],n.size,n.height)}(t))};var I=Object(i.css)(["&:hover{"," ",";}"],(function(t){return t.hoverIndicator&&Object(a.e)(t.hoverIndicator,t.theme)}),(function(t){return!t.plain&&Object(i.css)(["box-shadow:0px 0px 0px 2px ",";"],function(t){return t.colorValue?Object(c.c)(t.colorValue,t.theme):t.active&&t.primary&&t.theme.button.primary&&t.theme.button.primary.active&&t.theme.button.primary.active.border&&t.theme.button.primary.active.border.color?Object(c.c)(t.theme.button.primary.active.border.color,t.theme):Object(c.c)(t.theme.button.border.color||"control",t.theme)}(t))})),E=i.default.button.withConfig({displayName:"StyledButton",componentId:"sc-323bzc-0"})(["display:inline-block;box-sizing:border-box;cursor:pointer;font:inherit;text-decoration:none;margin:0;background:transparent;overflow:visible;text-transform:none;"," "," "," "," "," "," "," &:focus{","}&:focus:not(:focus-visible){","}"," "," "," "," ",""],f.h,(function(t){return t.plain&&function(t){return Object(i.css)(["color:",";outline:none;border:none;padding:0;text-align:inherit;"],Object(c.c)(t.colorValue||"inherit",t.theme))}(t)}),(function(t){return!t.plain&&P(t)}),(function(t){return t.primary&&function(t){return Object(i.css)([""," border-radius:",";",""],Object(a.d)(Object(c.c)(t.colorValue||t.theme.button.primary&&t.theme.button.primary.color||"control",t.theme),t.theme,t.theme.button.color),C(t),t.theme.button.primary&&t.theme.button.primary.extend)}(t)}),(function(t){return!t.disabled&&!t.selected&&!t.focus&&I}),(function(t){return!t.disabled&&t.active&&function(t){return Object(i.css)([""," "," ",""],a.a,t.primary&&t.theme.button.primary&&t.theme.button.primary.active&&t.theme.button.primary.active.border&&t.theme.button.primary.active.border.color&&"border: "+t.theme.button.border.width+" solid\n    "+Object(c.c)(t.theme.button.primary.active.border.color,t.theme)+";\n    ",t.primary&&t.theme.button.primary&&t.theme.button.primary.active&&t.theme.button.primary.active.extend)}(t)}),(function(t){return t.disabled&&t.theme.button&&t.theme.button.disabled&&function(t){return Object(i.css)([""," "," "," ",""],Object(f.d)(t.theme.button.disabled.opacity),!t.plain&&t.theme.button.disabled.border&&t.theme.button.disabled.border.color&&"border: "+t.theme.button.border.width+" solid\n    "+Object(c.c)(t.theme.button.disabled.border.color,t.theme)+";",t.theme.button.disabled.color&&(t.primary?Object(a.d)(Object(c.c)(t.theme.button.disabled.color,t.theme),t.theme,t.theme.button.color):"color: "+Object(c.c)(t.theme.button.disabled.color,t.theme)+";"),t.theme.button.disabled&&t.theme.button.disabled.extend)}(t)}),(function(t){return(!t.plain||t.focusIndicator)&&Object(f.g)()}),Object(f.r)(),(function(t){return!t.plain&&t.theme.button.transition&&"\n    transition-property: "+t.theme.button.transition.properties.join(",")+";\n    transition-duration: "+t.theme.button.transition.duration+"s;\n    transition-timing-function: "+t.theme.button.transition.timing+";\n  "}),(function(t){return t.fillContainer&&("horizontal"===(e=t.fillContainer)?"width: 100%;":"vertical"===e?"height: 100%;":e?"\n      width: 100%;\n      height: 100%;\n      max-width: none;\n      flex: 1 0 auto;\n    ":void 0);var e}),(function(t){return t.hasIcon&&!t.hasLabel&&"\n    line-height: 0;\n  "}),(function(t){return t.pad&&t.hasIcon&&!t.hasLabel&&"\n    padding: "+t.theme.global.edgeSize.small+";\n  "}),(function(t){return t.theme.button&&t.theme.button.extend}));E.defaultProps={},Object.setPrototypeOf(E.defaultProps,u.a);var M=function(t,e,n){return void 0===t&&(t="medium"),t&&n.size&&n.size[t]&&n.size[t].pad?{vertical:n.size[t].pad.vertical,horizontal:n.size[t].pad.horizontal}:e.button.padding?{vertical:e.global.edgeSize[e.button.padding.vertical]||e.button.padding.vertical,horizontal:e.global.edgeSize[e.button.padding.horizontal]||e.button.padding.horizontal}:void 0},S=function(t){return Object(i.css)(["border:none;",";"," "," ",""],function(t){var e=t.sizeProp,n="object"===typeof t.kind?t.kind:t.theme.button;return e&&n.size&&n.size[e]?Object(i.css)(["border-radius:",";"],n.size[e].border.radius):n.border&&n.border.radius?Object(i.css)(["border-radius:",";"],n.border.radius):""}(t),function(t){var e=t.sizeProp,n=t.theme,o=t.kind,r="object"===typeof o?o:n.button,a=M(e,n,r);return a?Object(i.css)(["padding:"," ",";"],a.vertical,a.horizontal):""}(t),function(t){var e=t.sizeProp||"medium",n=t.theme.text[e];return Object(i.css)(["font-size:",";line-height:",";"],n.size,n.height)}(t),t.badge?"\n  svg {\n    vertical-align: bottom;\n  }":"> svg {\n    vertical-align: bottom;\n  }")},B=function(t,e){var n;if(e){n=t;for(var o=e.split(".");n&&o.length;)n=n[o.shift()]}return n},L=function(t,e){var n=Object(s.b)(e);return Object(i.css)(["padding:","px ","px;"],Math.max(Object(s.b)(t.vertical)-n,0),Math.max(Object(s.b)(t.horizontal)-n,0))},V=i.default.button.withConfig({shouldForwardProp:function(t,e){return!["kind"].includes(t)&&e(t)}}).withConfig({displayName:"StyledButtonKind",componentId:"sc-1vhfpnt-0"})(["display:inline-block;box-sizing:border-box;cursor:pointer;font:inherit;text-decoration:none;margin:0;background:transparent;overflow:visible;text-transform:none;"," "," "," "," "," "," "," "," &:focus{","}&:focus:not(:focus-visible){","}"," "," ",""],f.h,(function(t){return t.plain&&Object(i.css)(["outline:none;border:none;padding:0;text-align:inherit;color:inherit;> svg{vertical-align:bottom;}"])}),(function(t){return!t.disabled&&t.active&&a.a}),(function(t){return!t.plain&&S(t)}),(function(t){return!t.plain&&function(t){var e=t.colorValue,n=t.kind,o=t.sizeProp,r=t.themePaths,a=t.theme,c=[],u="object"===typeof n?n:a.button,l=M(o,a,u);if(r.base.forEach((function(t){var n=B(u,t);n&&(c.push(Object(f.l)(n,a,e)),n.border&&n.border.width&&l&&!n.padding&&c.push(L(l,n.border.width)))})),!r.base.length&&"object"===typeof n){var d=n;d&&(c.push(Object(f.l)(d,a,e)),d.border&&d.border.width&&l&&!d.padding&&c.push(L(l,d.border.width)))}return r.hover.forEach((function(t){var e=B(u,t);if(e){var n=Object(f.l)(e,a),o="";e.border&&e.border.width&&l&&!e.padding&&(o=L(l,e.border.width)),n.length>0&&c.push(Object(i.css)(["&:hover{"," ","}"],n,o))}})),c}(t)}),(function(t){return!t.plain&&t.align&&"\n    text-align: "+t.align+";\n    "}),(function(t){return!t.disabled&&t.hoverIndicator&&function(t){var e=t.hoverIndicator,n=t.theme,o={};!0===e||"background"===e?o.background=n.global.hover.background:e.color||e.background?(e.background&&(o.background=e.background),e.color&&(o.color=e.color)):o.background=e;var r=Object(f.l)(o,n);return r.length>0?Object(i.css)(["&:hover{","}"],r):""}(t)}),(function(t){return t.disabled&&Object(f.d)(t.theme.button.disabled.opacity)}),(function(t){return(!t.plain||t.focusIndicator)&&Object(f.g)()}),Object(f.r)(),(function(t){return!t.plain&&t.theme.button.transition&&"\n    transition-property: "+t.theme.button.transition.properties.join(",")+";\n    transition-duration: "+t.theme.button.transition.duration+"s;\n    transition-timing-function: "+t.theme.button.transition.timing+";\n  "}),(function(t){return t.fillContainer&&("horizontal"===(e=t.fillContainer)?"width: 100%;":"vertical"===e?"height: 100%;":e?"\n      width: 100%;\n      height: 100%;\n      max-width: none;\n      flex: 1 0 auto;\n    ":void 0);var e}),(function(t){return t.theme.button&&t.theme.button.extend}));V.defaultProps={},Object.setPrototypeOf(V.defaultProps,u.a);var N=["active","align","aria-label","badge","color","children","disabled","icon","focusIndicator","gap","fill","href","justify","kind","label","onBlur","onClick","onFocus","onMouseOut","onMouseOver","plain","primary","reverse","secondary","selected","size","tip","type","a11yTitle","as"];function R(){return(R=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}var T=function(t,e,n,o){void 0===t&&(t=[]);var r=[],i=t.length-1;for("object"===typeof o&&(i=0);i>=0&&!r[1];){var c="object"===typeof o&&o||e.button;if(t[i])for(var u=t[i].split(".");c&&u.length;)c=c[u.shift()];if(c){var l=n&&c.background&&c.background.color?n:c.background,d=c.color||(!Object.prototype.hasOwnProperty.call(c,"color")||void 0!==c.color)&&void 0,b=!n||c.background&&c.background.color||c.border&&c.border.color?d:n;r=Object(a.b)(l,b,e)}i-=1}return r[1]||void 0},F=function(t,e,n,o,r){var i;if(void 0===e&&(e=[]),o){var a="object"===typeof o&&o||n.button;if(e[0])for(var c=e[0].split(".");a&&c.length;)a=a[c.shift()];a&&(i=a[t]||a[t]&&a[t].color)}else i=r&&n&&n.button&&n.button.primary?n.button.primary[t]||n.button.primary[t]&&n.button.primary[t].color:n&&n.button&&n.button[t]||n&&n.button&&n.button[t]&&n.button[t].color;return i},_=Object(o.forwardRef)((function(t,e){var n=t.active,l=t.align,s=void 0===l?"center":l,h=t["aria-label"],f=t.badge,p=t.color,m=t.children,v=t.disabled,g=t.icon,y=t.focusIndicator,j=void 0===y||y,O=t.gap,x=void 0===O?"small":O,z=t.fill,k=t.href,C=t.justify,P=t.kind,I=t.label,M=t.onBlur,S=t.onClick,B=t.onFocus,L=t.onMouseOut,_=t.onMouseOver,J=t.plain,X=t.primary,Y=t.reverse,A=t.secondary,K=t.selected,q=t.size,D=t.tip,G=t.type,H=void 0===G?"button":G,Q=t.a11yTitle,U=void 0===Q?"string"===typeof D?D:void 0:Q,W=t.as,Z=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,N),$=Object(o.useContext)(i.ThemeContext)||u.a.theme,tt=Object(o.useState)(),et=tt[0],nt=tt[1],ot=Object(o.useState)(!1),rt=ot[0],it=ot[1];(g||I)&&m&&console.warn("Button should not have children if icon or label is provided");var at=Object(o.useMemo)((function(){return"object"===typeof P}),[P]),ct=Object(o.useMemo)((function(){if($.button.default||at)return P||(X?"primary":A?"secondary":"default")}),[P,at,X,A,$]),ut=Object(o.useMemo)((function(){if(ct&&!J){var t={base:[],hover:[]};return at||t.base.push(ct),K&&(t.base.push("selected"),at||t.base.push("selected."+ct)),v?(t.base.push("disabled"),at||t.base.push("disabled."+ct)):(n&&(t.base.push("active"),at||t.base.push("active."+ct)),t.hover.push("hover"),at||t.hover.push("hover."+ct),n&&(t.hover.push("hover.active"),at||t.hover.push("hover.active."+ct))),t}}),[n,v,ct,at,J,K]),lt=function(t){it(!0),_&&_(t)},dt=function(t){it(!1),L&&L(t)},bt=g;if(g&&!g.props.color)if(ct){if(!J){var st=rt&&T(ut.hover,$)||T(ut.base,$,p,ct);st&&(bt=Object(o.cloneElement)(g,{color:st}))}}else X&&(bt=Object(o.cloneElement)(g,{color:$.global.colors.text[function(){var t=Object(a.f)(Object(c.c)(p||$.button.primary&&$.button.primary.color||$.global.colors.control||"brand",$),$);return Object(c.a)(t,$)}()?"dark":"light"]}));var ht,ft=!W&&k?"a":W,pt=Y?I:bt,mt=Y?bt:I;ht=pt&&mt?r.a.createElement(d.a,{direction:"row",align:"center",justify:C||("center"===s?"center":"between"),gap:x,responsive:!1},pt,mt):"function"===typeof m?m({disabled:v,hover:rt,focus:et}):pt||mt||m;var vt,gt=F("background",ut&&ut.base,$,ct,X),yt=F("border",ut&&ut.base,$,ct,X),jt=!gt&&!yt||!ct&&g&&!I;return f&&jt&&(ht=r.a.createElement(w,{content:f},ht)),vt=ct?r.a.createElement(V,R({},Z,{as:ft,ref:e,active:n,align:s,"aria-label":h||U,badge:f,colorValue:p,disabled:v,hasIcon:!!g,gap:x,hasLabel:!!I,fillContainer:z,focus:et,focusIndicator:j,href:k,kind:ct,themePaths:ut,onClick:S,onFocus:function(t){nt(!0),B&&B(t)},onBlur:function(t){nt(!1),M&&M(t)},onMouseOver:lt,onMouseOut:dt,plain:J||o.Children.count(m)>0,primary:X,sizeProp:q,type:k?void 0:H}),ht):r.a.createElement(E,R({},Z,{as:ft,ref:e,"aria-label":h||U,colorValue:p,active:n,selected:K,disabled:v,hasIcon:!!g,gap:x,hasLabel:!!I,fillContainer:z,focus:et,focusIndicator:j,href:k,kind:ct,themePaths:ut,onClick:S,onFocus:function(t){nt(!0),B&&B(t)},onBlur:function(t){nt(!1),M&&M(t)},onMouseOver:lt,onMouseOut:dt,pad:!J,plain:"undefined"!==typeof J?J:o.Children.count(m)>0||g&&!I,primary:X,sizeProp:q,type:k?void 0:H}),ht),D&&(vt="string"===typeof D?r.a.createElement(b.a,{content:D},vt):r.a.createElement(b.a,D,vt)),f&&!jt&&(vt=r.a.createElement(w,{content:f},vt)),vt}));_.displayName="Button",_.propTypes=l}}]);
//# sourceMappingURL=2.9baae781.chunk.js.map