"use strict";(self.webpackChunkadriancleung_app=self.webpackChunkadriancleung_app||[]).push([[513],{3279:function(e,t,n){n.d(t,{U:function(){return R}});var r=n(2791),o=n(4164),i=n(955),a=n(3029),u=n(6461),l=n(4756),c=n(4491),s=n(2068),f=n(3792),p=n(798),d=n(1223),g=n(2186),m=n(679);var h=(0,i.keyframes)(["0%{opacity:0.5;transform:scale(0.8);}100%{opacity:1;transform:scale(1);}"]),v=i.default.div.withConfig({displayName:"StyledDrop",componentId:"sc-16s5rx8-0"})([""," "," position:fixed;z-index:",";outline:none;"," "," opacity:0;transform-origin:",";animation:"," 0.1s forwards;animation-delay:0.01s;@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){display:flex;align-items:stretch;}",""],m.Oh,(function(e){return!e.plain&&(e.round&&(0,m.bS)(e.round,!0,e.theme)||"border-radius: "+e.theme.global.drop.border.radius+";")}),(function(e){return e.theme.global.drop.zIndex}),(function(e){return!e.plain&&(0,p.Nu)(e.background||e.theme.global.drop.background,e.theme)}),(function(e){return!e.plain&&(e.margin||e.theme.global.drop.margin)&&e.theme.global&&function(e,t,n,r,o){var i=e.global.edgeSize[n]||n,a={},u="string"===typeof i&&i.split(" ").length>1;return!0!==e.global.drop.intelligentMargin||u||"string"!==typeof i?(0,m.oW)("margin",o||e.global.drop.margin,r,e.global.edgeSize.responsiveBreakpoint,e):("bottom"===t.top?a.top=i:"top"===t.bottom&&(a.bottom=i),"left"===t.right?a.left="-"+i:"right"===t.left&&(a.left=i),Object.keys(a)||(a="none"),(0,m.oW)("margin",a,r,e.global.edgeSize.responsiveBreakpoint,e))}(e.theme,e.alignProp,e.theme.global.drop.margin,e.responsive,e.margin)}),(function(e){return function(e){var t="top";e.bottom&&(t="bottom");var n="left";return e.right&&(n="right"),t+" "+n}(e.alignProp)}),h,(function(e){return e.theme.global.drop&&e.theme.global.drop.extend}));v.defaultProps={},Object.setPrototypeOf(v.defaultProps,a.l);var y=["a11yTitle","aria-label","align","background","onAlign","children","dropTarget","elevation","onClickOutside","onEsc","onKeyDown","overflow","plain","responsive","restrictFocus","stretch","trapFocus"];function b(){return b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},b.apply(this,arguments)}var O=function(e){27===(e.keyCode?e.keyCode:e.which)&&e.stopPropagation()},w={top:"top",left:"left"},x=[],T=(0,r.forwardRef)((function(e,t){var n=e.a11yTitle,o=e["aria-label"],m=e.align,h=void 0===m?w:m,T=e.background,E=e.onAlign,C=e.children,k=e.dropTarget,P=e.elevation,A=e.onClickOutside,z=e.onEsc,B=e.onKeyDown,N=e.overflow,j=void 0===N?"auto":N,L=e.plain,F=e.responsive,M=e.restrictFocus,R=e.stretch,S=void 0===R?"width":R,D=e.trapFocus,H=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,y),W=(0,r.useContext)(l.c),I=(0,r.useContext)(i.ThemeContext)||a.l.theme,U=(0,r.useContext)(s.w)||x,q=(0,r.useMemo)((function(){return U.length}),[U]),K=(0,r.useMemo)((function(){return[].concat(U,[q])}),[U,q]),$=(0,r.useRef)();(0,r.useEffect)((function(){var e,n=function(e){var n=window.innerWidth,r=window.innerHeight,o=k,i=(t||$).current;if(i&&o){i.style.left="",i.style.top="",i.style.bottom="",i.style.width="",e||(i.style.maxHeight="");var a,u,l,c,s=o.getBoundingClientRect(),p=i.getBoundingClientRect();a=S?Math.min("align"===S?Math.min(s.width,p.width):Math.max(s.width,p.width),n):Math.min(p.width,n),h.left?"left"===h.left?u=s.left:"right"===h.left&&(u=s.left+s.width):h.right?"left"===h.right?u=s.left-a:"right"===h.right&&(u=s.left+s.width-a):u=s.left+s.width/2-a/2,u+a>n?u-=u+a-n:u<0&&(u=0);var d=p.height;if(h.top){l="top"===h.top?s.top:s.bottom;var g=100-s.bottom/r*100;r===l||g<=20?(l="",d=c="bottom"===h.top?s.top:s.bottom,i.style.maxHeight=d+"px"):l>0?(d=r-l,i.style.maxHeight=d+"px"):d=r-l}else h.bottom?(d=c="bottom"===h.bottom?s.bottom:s.top,i.style.maxHeight=d+"px"):d=r-(l=s.top+s.height/2-p.height/2);F&&(p.height>d||d<r/10)&&(h.top&&l>r/2?(l="",d=c="bottom"===h.top?s.top:s.bottom):h.bottom&&d<r/2&&(c="",d=r-(l="bottom"===h.bottom?s.top:s.bottom))),i.style.left=u+"px",S&&(i.style.width=a+.1+"px"),""!==l&&(i.style.top=l+"px"),""!==c&&(i.style.bottom=r-c+"px"),e||(I.drop&&I.drop.maxHeight&&(d=Math.min(d,(0,f.gd)(I.drop.maxHeight))),i.style.maxHeight=d+"px")}E&&function(){var e=""!==(t||$).current.style.top?"top":"bottom";E(e)}()},r=function(){(e=(0,u.sq)(k)).forEach((function(e){return e.addEventListener("scroll",n)}))},o=function(){e.forEach((function(e){return e.removeEventListener("scroll",n)})),e=[]},i=function(e){for(var t=null,n=W===document.body?e.target:null==e?void 0:e.path[0];null===t&&n!==document;){var r=n.getAttribute("data-g-portal-id");null!==r&&(t=parseInt(r,10)),n=n.parentNode}null!==t&&-1===U.indexOf(t)||A(e)},a=function(){o(),r(),n(!1)};return r(),window.addEventListener("resize",a),A&&document.addEventListener("mousedown",i),n(!1),function(){o(),window.removeEventListener("resize",a),A&&document.removeEventListener("mousedown",i)}}),[h,W,E,k,A,U,q,t,F,M,S,I.drop]),(0,r.useEffect)((function(){M&&(t||$).current.focus()}),[t,M]);var Y=r.createElement(v,b({"aria-label":n||o,ref:t||$,as:d.x,background:T,plain:L,elevation:L?void 0:P||I.global.drop.elevation||I.global.drop.shadowSize||"small",tabIndex:"-1",alignProp:h,overflow:j,"data-g-portal-id":q},H),C),_=(0,r.useMemo)((function(){var e;return(T||I.global.drop.background)&&(e=(0,p.im)(T||I.global.drop.background,I)),b({},I,{dark:e})}),[T,I]),V=_.dark;return void 0!==V&&V!==I.dark&&(Y=r.createElement(i.ThemeContext.Provider,{value:_},Y)),r.createElement(s.w.Provider,{value:K},r.createElement(c.l,{onKeyDown:z&&O,trapFocus:D},r.createElement(g.N,{capture:!0,onEsc:z?function(e){e.stopPropagation(),z(e)}:void 0,onKeyDown:B,target:"document"},Y)))})),E=n(9634),C=n.n(E),k=(C().string,C().oneOfType([C().oneOf(["baseline","center","end","start","stretch"]),C().string]),C().oneOfType([C().string,C().shape({dark:C().string,light:C().string})])),P=C().oneOfType([C().string,C().shape({color:k,dark:C().oneOfType([C().bool,C().string]),image:C().string,position:C().string,opacity:C().oneOfType([C().string,C().bool,C().number,C().oneOf(["weak","medium","strong"])]),repeat:C().oneOfType([C().oneOf(["no-repeat","repeat"]),C().string]),size:C().oneOfType([C().oneOf(["cover","contain"]),C().string]),light:C().string})]),A=["xxsmall","xsmall","small","medium","large","xlarge"],z=(C().oneOfType([C().oneOf(["none"].concat(A)),C().shape({bottom:C().oneOfType([C().oneOf(A),C().string]),end:C().oneOfType([C().oneOf(A),C().string]),horizontal:C().oneOfType([C().oneOf(A),C().string]),left:C().oneOfType([C().oneOf(A),C().string]),right:C().oneOfType([C().oneOf(A),C().string]),start:C().oneOfType([C().oneOf(A),C().string]),top:C().oneOfType([C().oneOf(A),C().string]),vertical:C().oneOfType([C().oneOf(A),C().string])}),C().string]),["xxsmall","xsmall","small","medium","large","xlarge"]),B=(C().oneOfType([C().oneOf(["none"].concat(z)),C().shape({bottom:C().oneOfType([C().oneOf(z),C().string]),end:C().oneOfType([C().oneOf(z),C().string]),horizontal:C().oneOfType([C().oneOf(z),C().string]),left:C().oneOfType([C().oneOf(z),C().string]),right:C().oneOfType([C().oneOf(z),C().string]),start:C().oneOfType([C().oneOf(z),C().string]),top:C().oneOfType([C().oneOf(z),C().string]),vertical:C().oneOfType([C().oneOf(z),C().string])}),C().string]),C().oneOf(["start","center","end","stretch"]),C().string,C().oneOfType([C().oneOf(["none","xsmall","small","medium","large","xlarge"]),C().string])),N=(C().oneOfType([C().bool,C().string,C().oneOf(["background"]),P,C().shape({background:P,elevation:B})]),C().oneOf(["circle","diamond","square","star","triangle","triangleDown"]),C().oneOf(["squares","circles","stripesHorizontal","stripesVertical","stripesDiagonalDown","stripesDiagonalUp"]),C().oneOfType([C().bool,C().oneOf(["xsmall","small","medium","large","xlarge","full"]),C().string,C().shape({corner:C().oneOf(["top","left","bottom","right","top-left","top-right","bottom-left","bottom-right"]),size:C().oneOfType([C().oneOf(["xsmall","small","medium","large","xlarge"]),C().string])})]),C().oneOf(["xxsmall","xsmall","small","medium","large","xlarge","xxlarge"])),j=(C().oneOfType([N,C().string,C().shape({height:C().oneOfType([N,C().string]),min:C().oneOfType([N,C().string]),max:C().oneOfType([N,C().string])})]),C().oneOfType([N,C().string,C().shape({width:C().oneOfType([N,C().string]),min:C().oneOfType([N,C().string]),max:C().oneOfType([N,C().string])})]),["auto","hidden","scroll","visible"]);C().oneOfType([C().oneOf(j),C().shape({horizontal:C().oneOf(j),vertical:C().oneOf(j)}),C().string]);var L={},F=["inline","restrictFocus","target","trapFocus"];function M(){return M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},M.apply(this,arguments)}var R=(0,r.forwardRef)((function(e,t){var n=e.inline,c=e.restrictFocus,s=e.target,f=e.trapFocus,p=void 0===f||f,d=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,F),g=(0,r.useContext)(i.ThemeContext)||a.l.theme,m=(0,r.useState)(),h=m[0],v=m[1];(0,r.useEffect)((function(){return v(document.activeElement)}),[]);var y=(0,r.useState)(),b=y[0],O=y[1],w=(0,r.useContext)(l.c);(0,r.useEffect)((function(){return O(n?void 0:(0,u.r9)(w))}),[w,n]),(0,r.useEffect)((function(){return function(){c&&h&&(h.focus?(0,u.Mv)(h):h.parentNode&&h.parentNode.focus&&(0,u.Mv)(h.parentNode)),b&&w.removeChild(b)}}),[w,b,h,c]);var x=r.createElement(T,M({ref:t,dir:g&&g.dir,dropTarget:s,restrictFocus:c,trapFocus:p},d));return n?x:b?(0,o.createPortal)(x,b):null}));R.displayName="Drop",R.propTypes=L},4491:function(e,t,n){n.d(t,{l:function(){return l}});var r=n(2791),o=n(6461),i=n(1891),a=["hidden","restrictScroll","children","trapFocus"];function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}var l=function(e){var t=e.hidden,n=void 0!==t&&t,l=e.restrictScroll,c=void 0!==l&&l,s=e.children,f=e.trapFocus,p=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a),d=(0,r.useState)(""),g=d[0],m=d[1],h=(0,r.useRef)(null),v=(0,r.useContext)(i.Y),y=(0,r.useState)(v),b=y[0],O=y[1];return(0,r.useEffect)((function(){h.current&&O([].concat(v,[h.current]))}),[v]),(0,r.useEffect)((function(){return"hidden"!==g&&!n&&c&&f&&(m(document.body.style.overflow),document.body.style.overflow="hidden"),function(){"hidden"!==g&&!n&&c&&f&&(document.body.style.overflow=g)}}),[g,n,f,c]),(0,r.useEffect)((function(){var e=setTimeout((function(){!n&&f&&v&&v[0]&&v.forEach(o.Ui)}),0);return function(){v&&v[0]&&(0,o.e$)(v[v.length-1]),clearTimeout(e)}}),[n,v,f]),r.createElement(i.Y.Provider,{value:b},r.createElement("div",u({ref:h,"aria-hidden":n},p),s))}},513:function(e,t,n){n.d(t,{x:function(){return b}});var r=n(2791),o=n(564),i=n(955),a=n(2131),u=n(679),l=n(3029),c=(0,i.css)(["color:",";"],(function(e){return(0,a.ut)(e.colorProp,e.theme)})),s=(0,i.css)(["font-weight:",";"],(function(e){return e.weight})),f=(0,i.css)(["word-break:",";"],(function(e){return e.wordBreak})),p=(0,i.css)(["font-family:",";"],(function(e){return e.theme.text.font.family})),d=(0,i.default)("span").withConfig({shouldForwardProp:function(e,t){return t(e)&&"size"!==e}}).withConfig({displayName:"StyledText",componentId:"sc-1sadyjn-0"})([""," "," "," "," "," "," "," "," ",""],u.$G,(function(e){return function(e){var t=e.size||"medium",n=e.theme.text[t];return n?(0,i.css)(["font-size:",";line-height:",";"],n.size,n.height):(0,i.css)(["font-size:",";line-height:normal;"],t)}(e)}),(function(e){return e.textAlign&&u.jt}),(function(e){return e.truncate&&"\n  white-space: nowrap;\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"}),(function(e){return e.colorProp&&c}),(function(e){return e.weight&&s}),(function(e){return e.wordBreak&&f}),(function(e){return e.theme.text.font&&e.theme.text.font.family&&p}),(function(e){return e.theme.text&&e.theme.text.extend}));d.defaultProps={},Object.setPrototypeOf(d.defaultProps,l.l);var g=n(9898),m=n(9479);var h={},v=["children","color","tag","as","tip","a11yTitle","truncate"];function y(){return y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y.apply(this,arguments)}var b=(0,r.forwardRef)((function(e,t){var n=e.children,i=e.color,a=e.tag,u=e.as,l=e.tip,c=e.a11yTitle,s=void 0===c?"string"===typeof l&&l||(null==l?void 0:l.content)||void 0:c,f=e.truncate,p=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,v),h=(0,m.t)(t),b=(0,r.useState)(!1),O=b[0],w=b[1];(0,o.b)((function(){var e=function(){w(!1),"tip"===f&&h.current&&h.current.scrollWidth>h.current.offsetWidth&&w(!0)};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[h,f]);var x=r.createElement(d,y({as:!u&&a?a:u,colorProp:i,"aria-label":s,truncate:f},p,{ref:h}),n);if(l||O){if(O)return r.createElement(g.C,y({content:n},l),x);if("tip"!==f)return r.createElement(g.C,l,x)}return x}));b.displayName="Text",b.defaultProps={level:1},b.propTypes=h},9898:function(e,t,n){n.d(t,{C:function(){return s}});var r=n(2791),o=n(955),i=n(1223),a=n(3279),u=n(9479);var l={};function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}var s=(0,r.forwardRef)((function(e,t){var n=e.children,l=e.content,s=e.dropProps,f=e.plain,p=(0,r.useContext)(o.ThemeContext),d=(0,r.useState)(!1),g=d[0],m=d[1],h=(0,r.useState)(),v=h[0],y=h[1],b=function(){return y(!1)},O=function(){return y(!0)};(0,r.useEffect)((function(){return document.addEventListener("mousedown",b),document.addEventListener("keydown",O),function(){document.removeEventListener("mousedown",b),document.removeEventListener("keydown",O)}}),[]);var w=(0,u.t)(t),x=r.Children.count(n)<=1&&!r.isValidElement(n)&&r.createElement("span",null,n)||r.Children.only(n);return[(0,r.cloneElement)(x,{onMouseEnter:function(e){var t;m(!0),null!=(t=x.props)&&t.onMouseEnter&&x.props.onMouseEnter(e)},onMouseLeave:function(e){var t;m(!1),null!=(t=x.props)&&t.onMouseLeave&&x.props.onMouseLeave(e)},onFocus:function(e){var t;v&&m(!0),null!=(t=x.props)&&t.onFocus&&x.props.onFocus(e)},onBlur:function(e){var t;v&&m(!1),null!=(t=x.props)&&t.onBlur&&x.props.onBlur(e)},key:"tip-child",ref:function(e){"function"===typeof w?w(e):w&&(w.current=e);var t=x.ref;"function"===typeof t?t(e):t&&(t.current=e)}}),g&&r.createElement(a.U,c({target:w.current,trapFocus:!1,key:"tip-drop"},p.tip.drop,s),f?l:r.createElement(i.x,p.tip.content,l))]}));s.displayName="Tip",s.propTypes=l},6461:function(e,t,n){n.d(t,{Mv:function(){return s},Ui:function(){return m},_8:function(){return v},e$:function(){return d},ey:function(){return l},r9:function(){return c},rc:function(){return y},sT:function(){return a},sq:function(){return i},xD:function(){return r},zw:function(){return h}});var r=function(e,t){var n;if(e){for(var r=e.parentNode;!n&&r&&r.getBoundingClientRect;){var o=r.getBoundingClientRect();t?o.width&&r.scrollWidth>o.width+10&&(n=r):o.height&&r.scrollHeight>o.height+10&&(n=r),r=r.parentNode}n?"body"===n.tagName.toLowerCase()&&(n=document):n=document}return n},o=["html","body"],i=function(e,t){var n=[];if(e){for(var r=e.parentNode;r&&r.getBoundingClientRect;){var i=r.getBoundingClientRect();t?i.width&&r.scrollWidth>i.width+10&&n.push(r):i.height&&r.scrollHeight>i.height+10&&n.push(r),r=r.parentNode}n.length&&o.includes(n[0].tagName.toLowerCase())&&(n.length=0),n.push(document)}return n},a=function(e){for(var t=document.activeElement;t&&t!==e;)t=t.parentElement;return!!t},u=function(e){var t=e.tagName.toLowerCase();return"input"===t||"select"===t||"textarea"===t},l=function(){var e=document.activeElement;return!!u(e)||!!function(e){for(var t=e.getElementsByTagName("*"),n=0;n<t.length;n+=1){var r=t[n];if(u(r))return r}}(e)},c=function(e,t){void 0===e&&(e=document.body);var n=document.createElement("div");return"first"===t?e.prepend(n):e.appendChild(n),n},s=function(e){var t=window.scrollX,n=window.scrollY;e.focus(),window.scrollTo(t,n)},f="tabindex",p="data-g-tabindex",d=function(e){if(!e.hasAttribute("aria-live")){e.removeAttribute("aria-hidden");var t=e.getElementsByTagName("*");Array.prototype.filter.call(t||[],(function(e){return e.hasAttribute(p)})).forEach((function(e){var t=e.getAttribute(p);t>=0?e.setAttribute(f,e.getAttribute(p)):"none"===t&&e.removeAttribute(f),e.removeAttribute(p)}))}},g=/(a|area|input|select|textarea|button|iframe)$/,m=function(e){if(!e.hasAttribute("aria-live")){e.setAttribute("aria-hidden",!0);var t=e.getElementsByTagName("*");Array.prototype.filter.call(t||[],(function(e){return null!==e.getAttribute(f)})).forEach((function(e){e.setAttribute(p,e.getAttribute(f)),e.setAttribute(f,-1)})),Array.prototype.filter.call(t||[],(function(e){return e.tagName.toLowerCase().match(g)&&e.focus&&null===e.getAttribute(p)})).forEach((function(e){e.setAttribute(p,"none"),e.setAttribute(f,-1)}))}},h=function e(t){if(t)return t.offsetParent?t:e(t.parentElement)||t},v=function(e,t){var n=e.getBoundingClientRect().bottom,r=t.getBoundingClientRect?t.getBoundingClientRect():{height:0,top:0},o=r.height;return n>=r.top+o},y=function(e,t){return e.getBoundingClientRect().top<=(t.getBoundingClientRect?t.getBoundingClientRect():{top:0}).top}},2068:function(e,t,n){n.d(t,{w:function(){return r}});var r=n(2791).createContext(void 0)}}]);
//# sourceMappingURL=513.2a6ba9a0.chunk.js.map