(this["webpackJsonpadriancleung-app"]=this["webpackJsonpadriancleung-app"]||[]).push([[1],{124:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(u){o=!0,i=u}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(t,e)||function(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(e,"a",(function(){return o}))},126:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var r=n(0),o=n.n(r),i=n(1),a=n(43);var c={global:{colors:{icon:"#666666"}},icon:{size:{small:"12px",medium:"24px",large:"48px",xlarge:"96px"}}},u={theme:c};function l(){return(l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var s=Object(i.css)([""," ",' g{fill:inherit;stroke:inherit;}*:not([stroke]){&[fill="none"]{stroke-width:0;}}*[stroke*="#"],*[STROKE*="#"]{stroke:inherit;fill:none;}*[fill-rule],*[FILL-RULE],*[fill*="#"],*[FILL*="#"]{fill:inherit;stroke:none;}'],(function(t){return Object(a.a)("fill",t.color||t.theme.global.colors.icon,t.theme)}),(function(t){return Object(a.a)("stroke",t.color||t.theme.global.colors.icon,t.theme)})),d=function(t){var e=t.a11yTitle,n=(t.color,t.size,t.theme,function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,["a11yTitle","color","size","theme"]));return o.a.createElement("svg",l({"aria-label":e},n))};d.displayName="Icon";var f=Object(i.default)(d).withConfig({displayName:"StyledIcon",componentId:"ofa7kd-0"})(["display:inline-block;flex:0 0 auto;"," "," ",""],(function(t){var e,n=t.size,r=void 0===n?"medium":n,o=t.theme,i=(t.viewBox||"0 0 24 24").split(" "),a=i[2],c=i[3],u=a/c,l=(e=o.icon.size[r]||r,parseFloat(e.match(/\d+(\.\d+)?/),10));return a<c?"\n      width: "+l+"px;\n      height: "+l/u+"px;\n    ":c<a?"\n      width: "+l*u+"px;\n      height: "+l+"px;\n    ":"\n      width: "+l+"px;\n      height: "+l+"px;\n    "}),(function(t){return"plain"!==t.color&&s}),(function(t){var e=t.theme;return e&&e.icon.extend}));f.defaultProps={},Object.setPrototypeOf(f.defaultProps,u)},142:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n(0),o=n.n(r),i=n(258);function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var c=function(t){return function(e){return!e.contains(t)}},u=function(t){var e=t.hidden,n=void 0!==e&&e,u=t.restrictScroll,l=void 0!==u&&u,s=t.children,d=t.trapFocus,f=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,["hidden","restrictScroll","children","trapFocus"]),b=Object(r.useState)(""),h=b[0],p=b[1],m=Object(r.useRef)(null);return Object(r.useEffect)((function(){var t=setTimeout((function(){!n&&d&&function(){var t=m.current;Object(i.d)().filter(c(t)).forEach(i.i),l&&"hidden"!==h&&(p(document.body.style.overflow),document.body.style.overflow="hidden")}()}),0);return function(){!function(){var t=m.current;Object(i.d)().filter(c(t)).forEach(i.h),l&&(document.body.style.overflow=h)}(),clearTimeout(t)}}),[n,h,l,d]),o.a.createElement("div",a({ref:m,"aria-hidden":n},f),s)}},172:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(0),o=function(t){var e=Object(r.useRef)(null);return Object(r.useEffect)((function(){t&&("function"===typeof t?t(e.current):t.current=e.current)})),e}},258:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i})),n.d(e,"d",(function(){return a})),n.d(e,"e",(function(){return c})),n.d(e,"j",(function(){return u})),n.d(e,"h",(function(){return l})),n.d(e,"i",(function(){return d})),n.d(e,"c",(function(){return f})),n.d(e,"f",(function(){return b})),n.d(e,"g",(function(){return h}));var r=function(t,e){var n;if(t){for(var r=t.parentNode;!n&&r&&r.getBoundingClientRect;){var o=r.getBoundingClientRect();e?o.width&&r.scrollWidth>o.width+10&&(n=r):o.height&&r.scrollHeight>o.height+10&&(n=r),r=r.parentNode}n?"body"===n.tagName.toLowerCase()&&(n=document):n=document}return n},o=["html","body"],i=function(t,e){var n=[];if(t){for(var r=t.parentNode;r&&r.getBoundingClientRect;){var i=r.getBoundingClientRect();e?i.width&&r.scrollWidth>i.width+10&&n.push(r):i.height&&r.scrollHeight>i.height+10&&n.push(r),r=r.parentNode}0===n.length?n.push(document):o.includes(n[0].tagName.toLowerCase())&&(n.length=0,n.push(document))}return n},a=function(){var t=/^(script|link)$/i,e=[];return[].forEach.call(document.body.children,(function(n){t.test(n.tagName)||e.push(n)})),e},c=function(t,e){void 0===t&&(t=document.body);var n=document.createElement("div");return"first"===e?t.prepend(n):t.appendChild(n),n},u=function(t){var e=window.scrollX,n=window.scrollY;t.focus(),window.scrollTo(e,n)},l=function(t){if(!t.hasAttribute("aria-live")){t.setAttribute("aria-hidden",!1);var e=t.getElementsByTagName("*");Array.prototype.filter.call(e||[],(function(t){return t.hasAttribute("data-g-tabindex")})).forEach((function(t){var e=t.getAttribute("data-g-tabindex");e>=0?t.setAttribute("tabindex",t.getAttribute("data-g-tabindex")):"none"===e&&t.removeAttribute("tabindex"),t.removeAttribute("data-g-tabindex")}))}},s=/(a|area|input|select|textarea|button|iframe)$/,d=function(t){if(!t.hasAttribute("aria-live")){t.setAttribute("aria-hidden",!0);var e=t.getElementsByTagName("*");Array.prototype.filter.call(e||[],(function(t){return null!==t.getAttribute("tabindex")})).forEach((function(t){t.setAttribute("data-g-tabindex",t.getAttribute("tabindex")),t.setAttribute("tabindex",-1)})),Array.prototype.filter.call(e||[],(function(t){return t.tagName.toLowerCase().match(s)&&t.focus&&null===t.getAttribute("data-g-tabindex")})).forEach((function(t){t.setAttribute("data-g-tabindex","none"),t.setAttribute("tabindex",-1)}))}},f=function t(e){if(e)return e.offsetParent?e:t(e.parentElement)||e},b=function(t,e){var n=t.getBoundingClientRect().bottom,r=e.getBoundingClientRect?e.getBoundingClientRect():{height:0,top:0},o=r.height;return n>=r.top+o},h=function(t,e){return t.getBoundingClientRect().top<=(e.getBoundingClientRect?e.getBoundingClientRect():{top:0}).top}},259:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(0),o=n.n(r).a.createContext(void 0)},280:function(t,e,n){"use strict";n.d(e,"a",(function(){return E}));var r=n(0),o=n.n(r),i=n(1),a=n(29),c=n(3),u=n(13),l=n(109),s=n(281),d=n(172);function f(){return(f=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var b=Object(r.forwardRef)((function(t,e){var n=t.children,a=t.content,c=t.dropProps,u=t.plain,b=Object(r.useContext)(i.ThemeContext),h=Object(r.useState)(!1),p=h[0],m=h[1],v=Object(d.a)(e),g=1===r.Children.count(n)?o.a.isValidElement(n)?n:o.a.createElement("span",null,n):r.Children.only(n);return[Object(r.cloneElement)(g,{onMouseOver:function(){return m(!0)},onMouseLeave:function(){return m(!1)},onFocus:function(){return m(!0)},onBlur:function(){return m(!1)},key:"tip-child",ref:function(t){"function"===typeof v?v(t):v&&(v.current=t);var e=g.ref;"function"===typeof e?e(t):e&&(e.current=t)}}),p&&o.a.createElement(s.a,f({target:v.current,trapFocus:!1,key:"tip-drop",plain:!0},b.tip.drop,c),u?a:o.a.createElement(l.a,b.tip.content,a))]}));b.displayName="Tip";var h=b,p=n(104),m=function(t){var e=t.hasIcon&&!t.hasLabel,n=t.sizeProp;return!e&&n&&t.theme.button.size&&t.theme.button.size[n]?t.theme.button.size[n].border.radius:t.theme.button.border.radius},v=function(t){return Object(i.css)(["border:"," solid ",";border-radius:",";color:",";padding:",";",""],t.theme.button.border.width,Object(c.c)(t.colorValue||t.theme.button.border.color||"control",t.theme),m(t),Object(c.c)(t.theme.button.color||"text",t.theme),function(t){var e=t.sizeProp;return e&&t.theme.button.size&&t.theme.button.size[e]?Object(i.css)([""," ",""],t.theme.button.size[e].pad.vertical,t.theme.button.size[e].pad.horizontal):Object(i.css)([""," ",""],t.theme.button.padding.vertical,t.theme.button.padding.horizontal)}(t),function(t){var e=t.sizeProp||"medium",n=t.theme.text[e];return Object(i.css)(["font-size:",";line-height:",";"],n.size,n.height)}(t))};var g=Object(i.css)(["&:hover{"," ",";}"],(function(t){return t.hoverIndicator&&Object(a.e)(t.hoverIndicator,t.theme)}),(function(t){return!t.plain&&Object(i.css)(["box-shadow:0px 0px 0px 2px ",";"],function(t){return t.colorValue?Object(c.c)(t.colorValue,t.theme):t.active&&t.primary&&t.theme.button.primary&&t.theme.button.primary.active&&t.theme.button.primary.active.border&&t.theme.button.primary.active.border.color?Object(c.c)(t.theme.button.primary.active.border.color,t.theme):Object(c.c)(t.theme.button.border.color||"control",t.theme)}(t))})),y=i.default.button.withConfig({displayName:"StyledButton",componentId:"sc-323bzc-0"})(["display:inline-block;box-sizing:border-box;cursor:pointer;font:inherit;text-decoration:none;margin:0;background:transparent;overflow:visible;text-transform:none;"," "," "," "," "," "," "," &:focus{","}"," "," "," "," ",""],p.f,(function(t){return t.plain&&function(t){return Object(i.css)(["color:",";outline:none;border:none;padding:0;text-align:inherit;"],Object(c.c)(t.colorValue||"inherit",t.theme))}(t)}),(function(t){return!t.plain&&v(t)}),(function(t){return t.primary&&function(t){return Object(i.css)([""," border-radius:",";",""],Object(a.d)(Object(c.c)(t.colorValue||t.theme.button.primary&&t.theme.button.primary.color||"control",t.theme),t.theme,t.theme.button.color),m(t),t.theme.button.primary&&t.theme.button.primary.extend)}(t)}),(function(t){return!t.disabled&&!t.focus&&g}),(function(t){return!t.disabled&&t.active&&function(t){return Object(i.css)([""," "," ",""],a.a,t.primary&&t.theme.button.primary&&t.theme.button.primary.active&&t.theme.button.primary.active.border&&t.theme.button.primary.active.border.color&&"border: "+t.theme.button.border.width+" solid\n    "+Object(c.c)(t.theme.button.primary.active.border.color,t.theme)+";\n    ",t.primary&&t.theme.button.primary&&t.theme.button.primary.active&&t.theme.button.primary.active.extend)}(t)}),(function(t){return t.disabled&&t.theme.button&&t.theme.button.disabled&&function(t){return Object(i.css)([""," "," "," ",""],Object(p.b)(t.theme.button.disabled.opacity),!t.plain&&t.theme.button.disabled.border&&t.theme.button.disabled.border.color&&"border: "+t.theme.button.border.width+" solid\n    "+Object(c.c)(t.theme.button.disabled.border.color,t.theme)+";",t.theme.button.disabled.color&&(t.primary?Object(a.d)(Object(c.c)(t.theme.button.disabled.color,t.theme),t.theme,t.theme.button.color):"color: "+Object(c.c)(t.theme.button.disabled.color,t.theme)+";"),t.theme.button.disabled&&t.theme.button.disabled.extend)}(t)}),(function(t){return(!t.plain||t.focusIndicator)&&Object(p.e)()}),(function(t){return!t.plain&&t.theme.button.transition&&"\n    transition-property: "+t.theme.button.transition.properties.join(",")+";\n    transition-duration: "+t.theme.button.transition.duration+"s;\n    transition-timing-function: "+t.theme.button.transition.timing+";\n  "}),(function(t){return t.fillContainer&&("horizontal"===(e=t.fillContainer)?"width: 100%;":"vertical"===e?"height: 100%;":e?"\n      width: 100%;\n      height: 100%;\n      max-width: none;\n      flex: 1 0 auto;\n    ":void 0);var e}),(function(t){return t.hasIcon&&!t.hasLabel&&"\n    line-height: 0;\n  "}),(function(t){return t.pad&&t.hasIcon&&!t.hasLabel&&"\n    padding: "+t.theme.global.edgeSize.small+";\n  "}),(function(t){return t.theme.button&&t.theme.button.extend}));y.defaultProps={},Object.setPrototypeOf(y.defaultProps,u.a);var O=function(t){return Object(i.css)(["border:none;",";"," "," > svg{vertical-align:bottom;}"],function(t){var e=t.sizeProp;return e&&t.theme.button.size&&t.theme.button.size[e]?Object(i.css)(["border-radius:",";"],t.theme.button.size[e].border.radius):t.theme.button.border&&t.theme.button.border.radius?Object(i.css)(["border-radius:",";"],t.theme.button.border.radius):""}(t),function(t){var e=t.sizeProp,n=t.theme;return e&&n.button.size&&n.button.size[e]&&n.button.size[e].pad?Object(i.css)(["padding:"," ",";"],n.button.size[e].pad.vertical,n.button.size[e].pad.horizontal):n.button.padding?Object(i.css)(["padding:"," ",";"],n.global.edgeSize[n.button.padding.vertical]||n.button.padding.vertical,n.global.edgeSize[n.button.padding.horizontal]||n.button.padding.horizontal):""}(t),function(t){var e=t.sizeProp||"medium",n=t.theme.text[e];return Object(i.css)(["font-size:",";line-height:",";"],n.size,n.height)}(t))},j=i.default.button.withConfig({displayName:"StyledButtonKind",componentId:"sc-1vhfpnt-0"})(["display:inline-block;box-sizing:border-box;cursor:pointer;font:inherit;text-decoration:none;margin:0;background:transparent;overflow:visible;text-transform:none;"," "," "," "," "," "," "," "," &:focus{","}"," "," ",""],p.f,(function(t){return t.plain&&Object(i.css)(["outline:none;border:none;padding:0;text-align:inherit;color:inherit;> svg{vertical-align:bottom;}"])}),(function(t){return!t.disabled&&t.active&&a.a}),(function(t){return!t.plain&&O(t)}),(function(t){return!t.plain&&function(t){var e=t.colorValue,n=t.themePaths,r=t.theme,o=[];return n.base.forEach((function(t){var n=r.button;if(t)for(var i=t.split(".");n&&i.length;)n=n[i.shift()];n&&o.push(Object(p.i)(n,r,e))})),n.hover.forEach((function(t){var e=r.button;if(t){for(var n=t.split(".");e&&n.length;)e=e[n.shift()];if(e){var a=Object(p.i)(e,r);a.length>0&&o.push(Object(i.css)(["&:hover{","}"],a))}}})),o}(t)}),(function(t){return!t.plain&&t.align&&"\n    text-align: "+t.align+";\n    "}),(function(t){return!t.disabled&&t.hoverIndicator&&function(t){var e=t.hoverIndicator,n=t.theme,r={};r.background=!0===e||"background"===e?n.global.hover.background:e;var o=Object(p.i)(r,n);return o.length>0?Object(i.css)(["&:hover{","}"],o):""}(t)}),(function(t){return t.disabled&&Object(p.b)(t.theme.button.disabled.opacity)}),(function(t){return(!t.plain||t.focusIndicator)&&Object(p.e)()}),(function(t){return!t.plain&&t.theme.button.transition&&"\n    transition-property: "+t.theme.button.transition.properties.join(",")+";\n    transition-duration: "+t.theme.button.transition.duration+"s;\n    transition-timing-function: "+t.theme.button.transition.timing+";\n  "}),(function(t){return t.fillContainer&&("horizontal"===(e=t.fillContainer)?"width: 100%;":"vertical"===e?"height: 100%;":e?"\n      width: 100%;\n      height: 100%;\n      max-width: none;\n      flex: 1 0 auto;\n    ":void 0);var e}),(function(t){return t.theme.button&&t.theme.button.extend}));function x(){return(x=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}j.defaultProps={},Object.setPrototypeOf(j.defaultProps,u.a);var w=function(t,e,n){void 0===t&&(t=[]);for(var r=[],o=t.length-1;o>=0&&!r[1];){var i=e.button;if(t[o])for(var c=t[o].split(".");i&&c.length;)i=i[c.shift()];if(i){var u=n&&i.background&&i.background.color?n:i.background,l=i.color||(!Object.prototype.hasOwnProperty.call(i,"color")||void 0!==i.color)&&void 0,s=!n||i.background&&i.background.color||i.border&&i.border.color?l:n;r=Object(a.b)(u,s,e)}o-=1}return r[1]||void 0},z=Object(r.forwardRef)((function(t,e){var n=t.a11yTitle,s=t.active,d=t.align,f=void 0===d?"center":d,b=t.color,p=t.children,m=t.disabled,v=t.icon,g=t.focusIndicator,O=void 0===g||g,z=t.gap,E=void 0===z?"small":z,k=t.fill,C=t.href,P=t.kind,I=t.label,A=t.onBlur,B=t.onClick,N=t.onFocus,S=t.onMouseOut,T=t.onMouseOver,F=t.plain,R=t.primary,M=t.reverse,L=t.secondary,H=t.selected,V=t.size,D=t.tip,K=t.type,W=void 0===K?"button":K,$=t.as,J=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,["a11yTitle","active","align","color","children","disabled","icon","focusIndicator","gap","fill","href","kind","label","onBlur","onClick","onFocus","onMouseOut","onMouseOver","plain","primary","reverse","secondary","selected","size","tip","type","as"]),U=Object(r.useContext)(i.ThemeContext)||u.a.theme,X=Object(r.useState)(),Y=X[0],q=X[1],G=Object(r.useState)(!1),Q=G[0],Z=G[1];(v||I)&&p&&console.warn("Button should not have children if icon or label is provided");var _=Object(r.useMemo)((function(){if(U.button.default)return P||(R?"primary":L?"secondary":"default")}),[P,R,L,U.button.default]),tt=Object(r.useMemo)((function(){if(_&&!F){var t={base:[],hover:[]};return t.base.push(_),H&&(t.base.push("selected"),_&&t.base.push("selected."+_)),m?(t.base.push("disabled"),_&&t.base.push("disabled."+_)):(s&&(t.base.push("active"),_&&t.base.push("active."+_)),t.hover.push("hover"),_&&t.hover.push("hover."+_),s&&(t.hover.push("hover.active"),_&&t.hover.push("hover.active."+_))),t}}),[s,m,_,F,H]),et=function(t){Z(!0),T&&T(t)},nt=function(t){Z(!1),S&&S(t)},rt=v;if(v&&!v.props.color)if(_){if(!F){var ot=Q&&w(tt.hover,U)||w(tt.base,U,b);ot&&(rt=Object(r.cloneElement)(v,{color:ot}))}}else R&&(rt=Object(r.cloneElement)(v,{color:U.global.colors.text[function(){var t=Object(a.f)(Object(c.c)(b||U.button.primary&&U.button.primary.color||U.global.colors.control||"brand",U),U);return Object(c.a)(t,U)}()?"dark":"light"]}));var it,at,ct=!$&&C?"a":$,ut=M?I:rt,lt=M?rt:I;return it=ut&&lt?o.a.createElement(l.a,{direction:"row",align:"center",justify:"center"===f?"center":"between",gap:E,responsive:!1},ut,lt):"function"===typeof p?p({disabled:m,hover:Q,focus:Y}):ut||lt||p,at=_?o.a.createElement(j,x({},J,{as:ct,ref:e,active:s,align:f,"aria-label":n,colorValue:b,disabled:m,gap:E,fillContainer:k,focus:Y,focusIndicator:O,href:C,kind:_,themePaths:tt,onClick:B,onFocus:function(t){q(!0),N&&N(t)},onBlur:function(t){q(!1),A&&A(t)},onMouseOver:et,onMouseOut:nt,plain:F||r.Children.count(p)>0,primary:R,sizeProp:V,type:C?void 0:W}),it):o.a.createElement(y,x({},J,{as:ct,ref:e,"aria-label":n,colorValue:b,active:s,selected:H,disabled:m,hasIcon:!!v,gap:E,hasLabel:!!I,fillContainer:k,focus:Y,focusIndicator:O,href:C,kind:_,themePaths:tt,onClick:B,onFocus:function(t){q(!0),N&&N(t)},onBlur:function(t){q(!1),A&&A(t)},onMouseOver:et,onMouseOut:nt,pad:!F,plain:"undefined"!==typeof F?F:r.Children.count(p)>0||v&&!I,primary:R,sizeProp:V,type:C?void 0:W}),it),D?"string"===typeof D?o.a.createElement(h,{content:D},at):o.a.createElement(h,D,at):at}));z.displayName="Button";var E=z},281:function(t,e,n){"use strict";n.d(e,"a",(function(){return k}));var r=n(0),o=n.n(r),i=n(40),a=n(1),c=n(13),u=n(258),l=n(142),s=n(259),d=n(4),f=n(29),b=n(109),h=n(106),p=n(104);var m=Object(a.keyframes)(["0%{opacity:0.5;transform:scale(0.8);}100%{opacity:1;transform:scale(1);}"]),v=a.default.div.withConfig({displayName:"StyledDrop",componentId:"sc-16s5rx8-0"})([""," border-radius:",";position:fixed;z-index:",";outline:none;"," opacity:0;transform-origin:",";animation:"," 0.1s forwards;animation-delay:0.01s;@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){display:flex;align-items:stretch;}",""],p.a,(function(t){return t.theme.global.drop.border.radius}),(function(t){return t.theme.global.drop.zIndex}),(function(t){return!t.plain&&Object(f.d)(t.theme.global.drop.background,t.theme)}),(function(t){return function(t){var e="top";t.bottom&&(e="bottom");var n="left";return t.right&&(n="right"),e+" "+n}(t.alignProp)}),m,(function(t){return t.theme.global.drop&&t.theme.global.drop.extend}));function g(){return(g=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}v.defaultProps={},Object.setPrototypeOf(v.defaultProps,c.a);var y=function(t){27===(t.keyCode?t.keyCode:t.which)&&t.stopPropagation()},O={top:"top",left:"left"},j=[],x=Object(r.forwardRef)((function(t,e){var n=t.align,i=void 0===n?O:n,p=t.children,m=t.dropTarget,x=t.elevation,w=t.onClickOutside,z=t.onEsc,E=t.onKeyDown,k=t.overflow,C=void 0===k?"auto":k,P=t.plain,I=t.responsive,A=t.restrictFocus,B=t.stretch,N=void 0===B?"width":B,S=t.trapFocus,T=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,["align","children","dropTarget","elevation","onClickOutside","onEsc","onKeyDown","overflow","plain","responsive","restrictFocus","stretch","trapFocus"]),F=Object(r.useContext)(a.ThemeContext)||c.a.theme,R=Object(r.useContext)(s.a)||j,M=Object(r.useMemo)((function(){return R.length}),[R]),L=Object(r.useMemo)((function(){return[].concat(R,[M])}),[R,M]),H=Object(r.useRef)();Object(r.useEffect)((function(){var t,n=function(t){var n=window.innerWidth,r=window.innerHeight,o=m,a=(e||H).current;if(a&&o){a.style.left="",a.style.top="",a.style.bottom="",a.style.width="",t||(a.style.maxHeight="");var c,u,l,s,f=o.getBoundingClientRect(),b=a.getBoundingClientRect();c=N?Math.min("align"===N?Math.min(f.width,b.width):Math.max(f.width,b.width),n):Math.min(b.width,n),i.left?"left"===i.left?u=f.left:"right"===i.left&&(u=f.left+f.width):i.right?"left"===i.right?u=f.left-c:"right"===i.right&&(u=f.left+f.width-c):u=f.left+f.width/2-c/2,u+c>n?u-=u+c-n:u<0&&(u=0);var h=b.height;if(i.top){l="top"===i.top?f.top:f.bottom;var p=100-f.bottom/r*100;r===l||p<=20?(l="",h=s="bottom"===i.top?f.top:f.bottom,a.style.maxHeight=h+"px"):l>0?(h=r-l,a.style.maxHeight=h+"px"):h=r-l}else i.bottom?(h=s="bottom"===i.bottom?f.bottom:f.top,a.style.maxHeight=h+"px"):h=r-(l=f.top+f.height/2-b.height/2);I&&(b.height>h||h<r/10)&&(i.top&&l>r/2?(l="",h=s="bottom"===i.top?f.top:f.bottom):i.bottom&&h<r/2&&(s="",h=r-(l="bottom"===i.bottom?f.top:f.bottom))),a.style.left=u+"px",N&&(a.style.width=c+.1+"px"),""!==l&&(a.style.top=l+"px"),""!==s&&(a.style.bottom=r-s+"px"),t||(F.drop&&F.drop.maxHeight&&(h=Math.min(h,Object(d.b)(F.drop.maxHeight))),a.style.maxHeight=h+"px")}},r=function(){(t=Object(u.b)(m)).forEach((function(t){return t.addEventListener("scroll",n)}))},o=function(){t.forEach((function(t){return t.removeEventListener("scroll",n)})),t=[]},a=function(t){for(var e=null,n=t.target;null===e&&n!==document;){var r=n.getAttribute("data-g-portal-id");null!==r&&(e=parseInt(r,10)),n=n.parentNode}null!==e&&-1===R.indexOf(e)||w(t)},c=function(){o(),r(),n(!1)};return r(),window.addEventListener("resize",c),w&&document.addEventListener("mousedown",a),n(!1),function(){o(),window.removeEventListener("resize",c),w&&document.removeEventListener("mousedown",a)}}),[i,m,w,R,M,e,I,A,N,F.drop]),Object(r.useEffect)((function(){A&&(e||H).current.focus()}),[e,A]);var V=o.a.createElement(v,g({ref:e||H,as:b.a,plain:P,elevation:P?void 0:x||F.global.drop.shadowSize||"small",tabIndex:"-1",alignProp:i,overflow:C,"data-g-portal-id":M},T),p);if(F.global.drop.background){var D=Object(f.c)(F.global.drop.background,F);void 0!==D&&D!==F.dark&&(V=o.a.createElement(a.ThemeContext.Provider,{value:g({},F,{dark:D})},V))}return o.a.createElement(s.a.Provider,{value:L},o.a.createElement(l.a,{onKeyDown:z&&y,trapFocus:S},o.a.createElement(h.a,{onEsc:z?function(t){t.stopPropagation(),z(t)}:void 0,onKeyDown:E,target:"document"},V)))})),w=n(107);function z(){return(z=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var E=Object(r.forwardRef)((function(t,e){var n=t.restrictFocus,l=t.target,s=t.trapFocus,d=void 0===s||s,f=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,["restrictFocus","target","trapFocus"]),b=Object(r.useContext)(a.ThemeContext)||c.a.theme,h=Object(r.useState)(),p=h[0],m=h[1];Object(r.useEffect)((function(){return m(document.activeElement)}),[]);var v=Object(r.useState)(),g=v[0],y=v[1],O=Object(r.useContext)(w.a);return Object(r.useEffect)((function(){return y(Object(u.e)(O))}),[O]),Object(r.useEffect)((function(){return function(){n&&p&&(p.focus?Object(u.j)(p):p.parentNode&&p.parentNode.focus&&Object(u.j)(p.parentNode)),g&&O.removeChild(g)}}),[O,g,p,n]),g?Object(i.createPortal)(o.a.createElement(x,z({ref:e,dir:b&&b.dir,dropTarget:l,restrictFocus:n,trapFocus:d},f)),g):null}));E.displayName="Drop";var k=E},284:function(t,e,n){"use strict";n.d(e,"a",(function(){return m}));var r=n(0),o=n.n(r),i=n(1),a=n(3),c=n(104),u=n(13),l=Object(i.css)(["color:",";"],(function(t){return Object(a.c)(t.colorProp,t.theme)})),s=Object(i.css)(["font-weight:",";"],(function(t){return t.weight})),d=Object(i.css)(["word-break:",";"],(function(t){return t.wordBreak})),f=Object(i.css)(["font-family:",";"],(function(t){return t.theme.text.font.family})),b=Object(i.default)("span").withConfig({shouldForwardProp:function(t,e){return e(t)&&"size"!==t}}).withConfig({displayName:"StyledText",componentId:"sc-1sadyjn-0"})([""," "," "," "," "," "," "," "," ",""],c.f,(function(t){return function(t){var e=t.size||"medium",n=t.theme.text[e];return n?Object(i.css)(["font-size:",";line-height:",";"],n.size,n.height):Object(i.css)(["font-size:",";line-height:normal;"],e)}(t)}),(function(t){return t.textAlign&&c.m}),(function(t){return t.truncate&&"\n  white-space: nowrap;\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"}),(function(t){return t.colorProp&&l}),(function(t){return t.weight&&s}),(function(t){return t.wordBreak&&d}),(function(t){return t.theme.text.font&&t.theme.text.font.family&&f}),(function(t){return t.theme.text&&t.theme.text.extend}));function h(){return(h=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}b.defaultProps={},Object.setPrototypeOf(b.defaultProps,u.a);var p=Object(r.forwardRef)((function(t,e){var n=t.color,r=t.tag,i=t.as,a=t.a11yTitle,c=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,["color","tag","as","a11yTitle"]);return o.a.createElement(b,h({as:!i&&r?r:i,colorProp:n,"aria-label":a},c,{ref:e}))}));p.displayName="Text",p.defaultProps={level:1};var m=p}}]);
//# sourceMappingURL=1.b9ed9211.chunk.js.map