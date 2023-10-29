"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[489],{382:function(e,t,n){n.d(t,{O:function(){return h}});var r,o,a,i=n(7689),s=n.p+"static/media/placeholder.f42f155b480bf260cb19.png",c=n(168),u=n(5867),l=n(1087),f=(0,u.ZP)(l.rU)(r||(r=(0,c.Z)(["\n  display: inline-block;\n  width: 100%;\n  max-width: 200px;\n  transition: transform 200ms;\n\n  &:hover {\n    transform: scale(105%);\n    h3 {\n      color: red;\n    }\n  }\n"]))),d=u.ZP.h3(o||(o=(0,c.Z)(["\n  margin: 0;\n  padding: 10px 5px 5px;\n  color: white;\n  transition: color 200ms;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"]))),p=n(184),m=function(e){var t,n=e.movie,r=(0,i.TH)();return(0,p.jsxs)(f,{to:r.pathname.includes("movies")?"".concat(n.id):"movies/".concat(n.id),state:{from:r},children:[(0,p.jsx)("img",{src:n.poster_path?"https://image.tmdb.org/t/p/w300/".concat(n.poster_path):s,width:200,alt:"movie.original_title"}),(0,p.jsx)(d,{children:null!==(t=n.original_title)&&void 0!==t?t:n.original_name})]})},v=u.ZP.ul(a||(a=(0,c.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 60px;\n  flex-wrap: wrap;\n  padding: 20px;\n"]))),h=function(e){var t=e.movies;return(0,p.jsx)(v,{children:t.map((function(e){return(0,p.jsx)("li",{children:(0,p.jsx)(m,{movie:e})},e.id)}))})}},7015:function(e,t,n){n.r(t),n.d(t,{default:function(){return ue}});var r=n(5861),o=n(9439),a=n(7757),i=n.n(a),s=n(2651),c=n(1087),u=n(9983);function l(e){return(0,u.w_)({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"}}]})(e)}var f,d,p,m=n(168),v=n(5867),h=v.ZP.form(f||(f=(0,m.Z)(["\n  position: relative;\n  width: 100%;\n  max-width: 280px;\n  height: 48px;\n  display: block;\n  margin: 0 auto;\n"]))),g=v.ZP.input(d||(d=(0,m.Z)(["\n  height: 100%;\n  width: 100%;\n  border: 3px solid #433f3f;\n  outline: none;\n  padding: 10px;\n  font-size: 16px;\n  background-color: #d0c8bc;\n  border-radius: 4px;\n  margin-right: 10px;\n  padding-left: 50px;\n"]))),y=v.ZP.button(p||(p=(0,m.Z)(["\n  top: 32%;\n  left: 10px;\n  position: absolute;\n  width: 40px;\n  background-color: transparent;\n  border: none;\n  outline: none;\n  cursor: pointer;\n"]))),b=n(184),E=function(){var e=(0,c.lr)(),t=(0,o.Z)(e,2)[1];return(0,b.jsxs)(h,{onSubmit:function(e){e.preventDefault();var n=e.target.elements.movie.value;t(n?{query:n}:{})},children:[(0,b.jsx)(y,{type:"submit",children:(0,b.jsx)(l,{})}),(0,b.jsx)(g,{name:"movie",placeholder:"Enter movie name"})]})},T=n(382),w=n(2791);function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){x(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function C(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var I=n(3433);function L(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=L(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}var k=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=L(e))&&(r&&(r+=" "),r+=t);return r},P=["theme","type"],R=["delay","staleId"],N=function(e){return"number"==typeof e&&!isNaN(e)},Z=function(e){return"string"==typeof e},j=function(e){return"function"==typeof e},S=function(e){return Z(e)||j(e)?e:null},M=function(e){return(0,w.isValidElement)(e)||Z(e)||j(e)||N(e)};function D(e){var t=e.enter,n=e.exit,r=e.appendPosition,o=void 0!==r&&r,a=e.collapse,i=void 0===a||a,s=e.collapseDuration,c=void 0===s?300:s;return function(e){var r=e.children,a=e.position,s=e.preventExitTransition,u=e.done,l=e.nodeRef,f=e.isIn,d=o?"".concat(t,"--").concat(a):t,p=o?"".concat(n,"--").concat(a):n,m=(0,w.useRef)(0);return(0,w.useLayoutEffect)((function(){var e,t=l.current,n=d.split(" "),r=function e(r){var o;r.target===l.current&&(t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",e),t.removeEventListener("animationcancel",e),0===m.current&&"animationcancel"!==r.type&&(o=t.classList).remove.apply(o,(0,I.Z)(n)))};(e=t.classList).add.apply(e,(0,I.Z)(n)),t.addEventListener("animationend",r),t.addEventListener("animationcancel",r)}),[]),(0,w.useEffect)((function(){var e=l.current,t=function t(){e.removeEventListener("animationend",t),i?function(e,t,n){void 0===n&&(n=300);var r=e.scrollHeight,o=e.style;requestAnimationFrame((function(){o.minHeight="initial",o.height=r+"px",o.transition="all ".concat(n,"ms"),requestAnimationFrame((function(){o.height="0",o.padding="0",o.margin="0",setTimeout(t,n)}))}))}(e,u,c):u()};f||(s?t():(m.current=1,e.className+=" ".concat(p),e.addEventListener("animationend",t)))}),[f]),w.createElement(w.Fragment,null,r)}}function B(e,t){return null!=e?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}var z={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(r){var o=setTimeout((function(){r.apply(void 0,(0,I.Z)([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(o)}))}},A=function(e){var t=e.theme,n=e.type,r=C(e,P);return w.createElement("svg",_({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-".concat(n,")")},r))},U={info:function(e){return w.createElement(A,_({},e),w.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return w.createElement(A,_({},e),w.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return w.createElement(A,_({},e),w.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return w.createElement(A,_({},e),w.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return w.createElement("div",{className:"Toastify__spinner"})}};function q(e){var t=(0,w.useReducer)((function(e){return e+1}),0),n=(0,o.Z)(t,2)[1],r=(0,w.useState)([]),a=(0,o.Z)(r,2),i=a[0],s=a[1],c=(0,w.useRef)(null),u=(0,w.useRef)(new Map).current,l=function(e){return-1!==i.indexOf(e)},f=(0,w.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:l,getToast:function(e){return u.get(e)}}).current;function d(e){var t=e.containerId;!f.props.limit||t&&f.containerId!==t||(f.count-=f.queue.length,f.queue=[])}function p(e){s((function(t){return null==e?[]:t.filter((function(t){return t!==e}))}))}function m(){var e=f.queue.shift();h(e.toastContent,e.toastProps,e.staleId)}function v(e,t){var r=t.delay,a=t.staleId,i=C(t,R);if(M(e)&&!function(e){return!c.current||f.props.enableMultiContainer&&e.containerId!==f.props.containerId||u.has(e.toastId)&&null==e.updateId}(i)){var s=i.toastId,l=i.updateId,d=i.data,v=f.props,g=function(){return p(s)},y=null==l;y&&f.count++;var b,E,T=_(_(_({},v),{},{style:v.toastStyle,key:f.toastKey++},Object.fromEntries(Object.entries(i).filter((function(e){var t=(0,o.Z)(e,2);t[0];return null!=t[1]})))),{},{toastId:s,updateId:l,data:d,closeToast:g,isIn:!1,className:S(i.className||v.toastClassName),bodyClassName:S(i.bodyClassName||v.bodyClassName),progressClassName:S(i.progressClassName||v.progressClassName),autoClose:!i.isLoading&&(b=i.autoClose,E=v.autoClose,!1===b||N(b)&&b>0?b:E),deleteToast:function(){var e=B(u.get(s),"removed");u.delete(s),z.emit(4,e);var t=f.queue.length;if(f.count=null==s?f.count-f.displayedToast:f.count-1,f.count<0&&(f.count=0),t>0){var r=null==s?f.props.limit:1;if(1===t||1===r)f.displayedToast++,m();else{var o=r>t?t:r;f.displayedToast=o;for(var a=0;a<o;a++)m()}}else n()}});T.iconOut=function(e){var t=e.theme,n=e.type,r=e.isLoading,o=e.icon,a=null,i={theme:t,type:n};return!1===o||(j(o)?a=o(i):(0,w.isValidElement)(o)?a=(0,w.cloneElement)(o,i):Z(o)||N(o)?a=o:r?a=U.spinner():function(e){return e in U}(n)&&(a=U[n](i))),a}(T),j(i.onOpen)&&(T.onOpen=i.onOpen),j(i.onClose)&&(T.onClose=i.onClose),T.closeButton=v.closeButton,!1===i.closeButton||M(i.closeButton)?T.closeButton=i.closeButton:!0===i.closeButton&&(T.closeButton=!M(v.closeButton)||v.closeButton);var x=e;(0,w.isValidElement)(e)&&!Z(e.type)?x=(0,w.cloneElement)(e,{closeToast:g,toastProps:T,data:d}):j(e)&&(x=e({closeToast:g,toastProps:T,data:d})),v.limit&&v.limit>0&&f.count>v.limit&&y?f.queue.push({toastContent:x,toastProps:T,staleId:a}):N(r)?setTimeout((function(){h(x,T,a)}),r):h(x,T,a)}}function h(e,t,n){var r=t.toastId;n&&u.delete(n);var o={content:e,props:t};u.set(r,o),s((function(e){return[].concat((0,I.Z)(e),[r]).filter((function(e){return e!==n}))})),z.emit(4,B(o,null==o.props.updateId?"added":"updated"))}return(0,w.useEffect)((function(){return f.containerId=e.containerId,z.cancelEmit(3).on(0,v).on(1,(function(e){return c.current&&p(e)})).on(5,d).emit(2,f),function(){u.clear(),z.emit(3,f)}}),[]),(0,w.useEffect)((function(){f.props=e,f.isToastActive=l,f.displayedToast=i.length})),{getToastToRender:function(t){var n=new Map,r=Array.from(u.values());return e.newestOnTop&&r.reverse(),r.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:c,isToastActive:l}}function F(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function H(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function Q(e){var t=(0,w.useState)(!1),n=(0,o.Z)(t,2),r=n[0],a=n[1],i=(0,w.useState)(!1),s=(0,o.Z)(i,2),c=s[0],u=s[1],l=(0,w.useRef)(null),f=(0,w.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,d=(0,w.useRef)(e),p=e.autoClose,m=e.pauseOnHover,v=e.closeToast,h=e.onClick,g=e.closeOnClick;function y(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),f.didMove=!1,document.addEventListener("mousemove",x),document.addEventListener("mouseup",O),document.addEventListener("touchmove",x),document.addEventListener("touchend",O);var n=l.current;f.canCloseOnClick=!0,f.canDrag=!0,f.boundingRect=n.getBoundingClientRect(),n.style.transition="",f.x=F(t.nativeEvent),f.y=H(t.nativeEvent),"x"===e.draggableDirection?(f.start=f.x,f.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(f.start=f.y,f.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function b(t){if(f.boundingRect){var n=f.boundingRect,r=n.top,o=n.bottom,a=n.left,i=n.right;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&f.x>=a&&f.x<=i&&f.y>=r&&f.y<=o?T():E()}}function E(){a(!0)}function T(){a(!1)}function x(t){var n=l.current;f.canDrag&&n&&(f.didMove=!0,r&&T(),f.x=F(t),f.y=H(t),f.delta="x"===e.draggableDirection?f.x-f.start:f.y-f.start,f.start!==f.x&&(f.canCloseOnClick=!1),n.style.transform="translate".concat(e.draggableDirection,"(").concat(f.delta,"px)"),n.style.opacity=""+(1-Math.abs(f.delta/f.removalDistance)))}function O(){document.removeEventListener("mousemove",x),document.removeEventListener("mouseup",O),document.removeEventListener("touchmove",x),document.removeEventListener("touchend",O);var t=l.current;if(f.canDrag&&f.didMove&&t){if(f.canDrag=!1,Math.abs(f.delta)>f.removalDistance)return u(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate".concat(e.draggableDirection,"(0)"),t.style.opacity="1"}}(0,w.useEffect)((function(){d.current=e})),(0,w.useEffect)((function(){return l.current&&l.current.addEventListener("d",E,{once:!0}),j(e.onOpen)&&e.onOpen((0,w.isValidElement)(e.children)&&e.children.props),function(){var e=d.current;j(e.onClose)&&e.onClose((0,w.isValidElement)(e.children)&&e.children.props)}}),[]),(0,w.useEffect)((function(){return e.pauseOnFocusLoss&&(document.hasFocus()||T(),window.addEventListener("focus",E),window.addEventListener("blur",T)),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",E),window.removeEventListener("blur",T))}}),[e.pauseOnFocusLoss]);var _={onMouseDown:y,onTouchStart:y,onMouseUp:b,onTouchEnd:b};return p&&m&&(_.onMouseEnter=T,_.onMouseLeave=E),g&&(_.onClick=function(e){h&&h(e),f.canCloseOnClick&&v()}),{playToast:E,pauseToast:T,isRunning:r,preventExitTransition:c,toastRef:l,eventHandlers:_}}function V(e){var t=e.closeToast,n=e.theme,r=e.ariaLabel,o=void 0===r?"close":r;return w.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":o},w.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},w.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function Y(e){var t=e.delay,n=e.isRunning,r=e.closeToast,o=e.type,a=void 0===o?"default":o,i=e.hide,s=e.className,c=e.style,u=e.controlledProgress,l=e.progress,f=e.rtl,d=e.isIn,p=e.theme,m=i||u&&0===l,v=_(_({},c),{},{animationDuration:"".concat(t,"ms"),animationPlayState:n?"running":"paused",opacity:m?0:1});u&&(v.transform="scaleX(".concat(l,")"));var h=k("Toastify__progress-bar",u?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(p),"Toastify__progress-bar--".concat(a),{"Toastify__progress-bar--rtl":f}),g=j(s)?s({rtl:f,type:a,defaultClassName:h}):k(h,s);return w.createElement("div",x({role:"progressbar","aria-hidden":m?"true":"false","aria-label":"notification timer",className:g,style:v},u&&l>=1?"onTransitionEnd":"onAnimationEnd",u&&l<1?null:function(){d&&r()}))}var G=function(e){var t=Q(e),n=t.isRunning,r=t.preventExitTransition,o=t.toastRef,a=t.eventHandlers,i=e.closeButton,s=e.children,c=e.autoClose,u=e.onClick,l=e.type,f=e.hideProgressBar,d=e.closeToast,p=e.transition,m=e.position,v=e.className,h=e.style,g=e.bodyClassName,y=e.bodyStyle,b=e.progressClassName,E=e.progressStyle,T=e.updateId,x=e.role,O=e.progress,C=e.rtl,I=e.toastId,L=e.deleteToast,P=e.isIn,R=e.isLoading,N=e.iconOut,Z=e.closeOnClick,S=e.theme,M=k("Toastify__toast","Toastify__toast-theme--".concat(S),"Toastify__toast--".concat(l),{"Toastify__toast--rtl":C},{"Toastify__toast--close-on-click":Z}),D=j(v)?v({rtl:C,position:m,type:l,defaultClassName:M}):k(M,v),B=!!O||!c,z={closeToast:d,type:l,theme:S},A=null;return!1===i||(A=j(i)?i(z):(0,w.isValidElement)(i)?(0,w.cloneElement)(i,z):V(z)),w.createElement(p,{isIn:P,done:L,position:m,preventExitTransition:r,nodeRef:o},w.createElement("div",_(_({id:I,onClick:u,className:D},a),{},{style:h,ref:o}),w.createElement("div",_(_({},P&&{role:x}),{},{className:j(g)?g({type:l}):k("Toastify__toast-body",g),style:y}),null!=N&&w.createElement("div",{className:k("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!R})},N),w.createElement("div",null,s)),A,w.createElement(Y,_(_({},T&&!B?{key:"pb-".concat(T)}:{}),{},{rtl:C,theme:S,delay:c,isRunning:n,isIn:P,closeToast:d,hide:f,type:l,style:E,className:b,controlledProgress:B,progress:O||0}))))},W=function(e,t){return void 0===t&&(t=!1),{enter:"Toastify--animate Toastify__".concat(e,"-enter"),exit:"Toastify--animate Toastify__".concat(e,"-exit"),appendPosition:t}},X=D(W("bounce",!0)),K=(D(W("slide",!0)),D(W("zoom")),D(W("flip")),(0,w.forwardRef)((function(e,t){var n=q(e),r=n.getToastToRender,o=n.containerRef,a=n.isToastActive,i=e.className,s=e.style,c=e.rtl,u=e.containerId;function l(e){var t=k("Toastify__toast-container","Toastify__toast-container--".concat(e),{"Toastify__toast-container--rtl":c});return j(i)?i({position:e,rtl:c,defaultClassName:t}):k(t,S(i))}return(0,w.useEffect)((function(){t&&(t.current=o.current)}),[]),w.createElement("div",{ref:o,className:"Toastify",id:u},r((function(e,t){var n=t.length?_({},s):_(_({},s),{},{pointerEvents:"none"});return w.createElement("div",{className:l(e),style:n,key:"container-".concat(e)},t.map((function(e,n){var r=e.content,o=e.props;return w.createElement(G,_(_({},o),{},{isIn:a(o.toastId),style:_(_({},o.style),{},{"--nth":n+1,"--len":t.length}),key:"toast-".concat(o.key)}),r)})))})))})));K.displayName="ToastContainer",K.defaultProps={position:"top-right",transition:X,autoClose:5e3,closeButton:V,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var J,$=new Map,ee=[],te=1;function ne(){return""+te++}function re(e){return e&&(Z(e.toastId)||N(e.toastId))?e.toastId:ne()}function oe(e,t){return $.size>0?z.emit(0,e,t):ee.push({content:e,options:t}),t.toastId}function ae(e,t){return _(_({},t),{},{type:t&&t.type||e,toastId:re(t)})}function ie(e){return function(t,n){return oe(t,ae(e,n))}}function se(e,t){return oe(e,ae("default",t))}se.loading=function(e,t){return oe(e,ae("default",_({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},se.promise=function(e,t,n){var r,o=t.pending,a=t.error,i=t.success;o&&(r=Z(o)?se.loading(o,n):se.loading(o.render,_(_({},n),o)));var s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},c=function(e,t,o){if(null!=t){var a=_(_(_({type:e},s),n),{},{data:o}),i=Z(t)?{render:t}:t;return r?se.update(r,_(_({},a),i)):se(i.render,_(_({},a),i)),o}se.dismiss(r)},u=j(e)?e():e;return u.then((function(e){return c("success",i,e)})).catch((function(e){return c("error",a,e)})),u},se.success=ie("success"),se.info=ie("info"),se.error=ie("error"),se.warning=ie("warning"),se.warn=se.warning,se.dark=function(e,t){return oe(e,ae("default",_({theme:"dark"},t)))},se.dismiss=function(e){$.size>0?z.emit(1,e):ee=ee.filter((function(t){return null!=e&&t.options.toastId!==e}))},se.clearWaitingQueue=function(e){return void 0===e&&(e={}),z.emit(5,e)},se.isActive=function(e){var t=!1;return $.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},se.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,r=$.get(n||J);return r&&r.getToast(e)}(e,t);if(n){var r=n.props,o=n.content,a=_(_(_({delay:100},r),t),{},{toastId:t.toastId||e,updateId:ne()});a.toastId!==e&&(a.staleId=e);var i=a.render||o;delete a.render,oe(i,a)}}),0)},se.done=function(e){se.update(e,{progress:1})},se.onChange=function(e){return z.on(4,e),function(){z.off(4,e)}},se.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},se.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},z.on(2,(function(e){J=e.containerId||e,$.set(J,e),ee.forEach((function(e){z.emit(0,e.content,e.options)})),ee=[]})).on(3,(function(e){$.delete(e.containerId||e),0===$.size&&z.off(0).off(1).off(5)}));var ce=n(1207),ue=function(){var e=(0,w.useState)([]),t=(0,o.Z)(e,2),n=t[0],a=t[1],u=(0,w.useState)(!1),l=(0,o.Z)(u,2),f=l[0],d=l[1],p=(0,c.lr)(),m=(0,o.Z)(p,1)[0].get("query");return(0,w.useEffect)((function(){if(m){d(!0);var e=function(){var e=(0,r.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,ce.Ny)(m);case 3:if((t=e.sent).results.length){e.next=6;break}throw new Error("Error");case 6:a(t.results),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),se.error("Nothing was found with query ".concat(m,"!"));case 12:return e.prev=12,d(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}}),[m]),(0,b.jsxs)("div",{children:[(0,b.jsx)(K,{autoClose:3e3}),(0,b.jsx)(E,{}),f&&(0,b.jsx)(s.a,{}),(0,b.jsx)(T.O,{movies:n})]})}},1207:function(e,t,n){n.d(t,{Hx:function(){return f},Ny:function(){return c},Tg:function(){return s},Y5:function(){return u},uV:function(){return l}});var r=n(5861),o=n(7757),a=n.n(o),i=n(1243);i.Z.defaults.baseURL="https://api.themoviedb.org";var s=function(){var e=(0,r.Z)(a().mark((function e(){var t,n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new URLSearchParams({language:"en-US",api_key:"bc8bedeb0e6d632b70f1bff9aa069a85"}),e.next=3,i.Z.get("/3/trending/all/day?".concat(t));case 3:return n=e.sent,r=n.data,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r,o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URLSearchParams({language:"en-US",api_key:"bc8bedeb0e6d632b70f1bff9aa069a85",include_adult:!1,query:t,page:1}),e.next=3,i.Z.get("/3/search/movie?".concat(n));case 3:return r=e.sent,o=r.data,e.abrupt("return",o);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r,o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URLSearchParams({language:"en-US",api_key:"bc8bedeb0e6d632b70f1bff9aa069a85"}),e.next=3,i.Z.get("/3/movie/".concat(t,"?").concat(n));case 3:return r=e.sent,o=r.data,e.abrupt("return",o);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r,o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URLSearchParams({language:"en-US",api_key:"bc8bedeb0e6d632b70f1bff9aa069a85"}),e.next=3,i.Z.get("/3/movie/".concat(t,"/credits?").concat(n));case 3:return r=e.sent,o=r.data,e.abrupt("return",o);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r,o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URLSearchParams({language:"en-US",api_key:"bc8bedeb0e6d632b70f1bff9aa069a85",page:1}),e.next=3,i.Z.get("/3/movie/".concat(t,"/reviews?").concat(n));case 3:return r=e.sent,o=r.data,e.abrupt("return",o);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=489.a4855fe1.chunk.js.map