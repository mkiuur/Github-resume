(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"16l3":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=(n("q4sD"),n("J9yo"),n("wx14")),i=n("zLVn"),u=n("ZCiN");var c=function(e,t){var n=Object(r.useRef)(!0);Object(r.useEffect)((function(){if(!n.current)return e();n.current=!1}),t)},s=n("XcHJ"),l=n("i52p"),f=Math.pow(2,31)-1;function d(){var e=Object(s.a)(),t=Object(r.useRef)();return Object(l.a)((function(){return clearTimeout(t.current)})),Object(r.useMemo)((function(){var n=function(){return clearTimeout(t.current)};return{set:function(r,a){void 0===a&&(a=0),e()&&(n(),a<=f?t.current=setTimeout(r,a):function e(t,n,r){var a=r-Date.now();t.current=a<=f?setTimeout(n,a):setTimeout((function(){return e(t,n,r)}),f)}(t,r,Date.now()+a))},clear:n}}),[])}var p=n("TSYQ"),v=n.n(p),b=n("7j6X"),m=n("GEtZ");function h(e,t,n){void 0===n&&(n=5);var r=!1,a=setTimeout((function(){r||function(e){var t=document.createEvent("HTMLEvents");t.initEvent("transitionend",!0,!0),e.dispatchEvent(t)}(e)}),t+n),o=Object(m.a)(e,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(a),o()}}function E(e,t,n,r){var a,o,i;null==n&&(a=e,o=Object(b.a)(a,"transitionDuration")||"",i=-1===o.indexOf("ms")?1e3:1,n=parseFloat(o)*i||0);var u=h(e,n,r),c=Object(m.a)(e,"transitionend",t);return function(){u(),c()}}var x=n("dI71"),O=n("i8i4"),y=n.n(O),j=!1,g=a.a.createContext(null),w=function(e){function t(t,n){var r;r=e.call(this,t,n)||this;var a,o=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?o?(a="exited",r.appearStatus="entering"):a="entered":a=t.unmountOnExit||t.mountOnEnter?"unmounted":"exited",r.state={status:a},r.nextCallback=null,r}Object(x.a)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&"unmounted"===t.status?{status:"exited"}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?"entering"!==n&&"entered"!==n&&(t="entering"):"entering"!==n&&"entered"!==n||(t="exiting")}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!=typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),"entering"===t?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&"exited"===this.state.status&&this.setState({status:"unmounted"})},n.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,a=this.props.nodeRef?[r]:[y.a.findDOMNode(this),r],o=a[0],i=a[1],u=this.getTimeouts(),c=r?u.appear:u.enter;!e&&!n||j?this.safeSetState({status:"entered"},(function(){t.props.onEntered(o)})):(this.props.onEnter(o,i),this.safeSetState({status:"entering"},(function(){t.props.onEntering(o,i),t.onTransitionEnd(c,(function(){t.safeSetState({status:"entered"},(function(){t.props.onEntered(o,i)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:y.a.findDOMNode(this);t&&!j?(this.props.onExit(r),this.safeSetState({status:"exiting"},(function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:"exited"},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:"exited"},(function(){e.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:y.a.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var a=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],o=a[0],i=a[1];this.props.addEndListener(o,i)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if("unmounted"===e)return null;var t=this.props,n=t.children,r=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,Object(i.a)(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return a.a.createElement(g.Provider,{value:null},"function"==typeof n?n(e,r):a.a.cloneElement(a.a.Children.only(n),r))},t}(a.a.Component);function C(){}w.contextType=g,w.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:C,onEntering:C,onEntered:C,onExit:C,onExiting:C,onExited:C},w.UNMOUNTED="unmounted",w.EXITED="exited",w.ENTERING="entering",w.ENTERED="entered",w.EXITING="exiting";var S=w,k=n("17x9"),N=n.n(k),T=n("JCAc"),I=/-(.)/g;var L=n("vUet"),D=function(e){return e[0].toUpperCase()+(t=e,t.replace(I,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function R(e,t){var n=void 0===t?{}:t,r=n.displayName,u=void 0===r?D(e):r,c=n.Component,s=n.defaultProps,l=a.a.forwardRef((function(t,n){var r=t.className,u=t.bsPrefix,s=t.as,l=void 0===s?c||"div":s,f=Object(i.a)(t,["className","bsPrefix","as"]),d=Object(L.a)(u,e);return a.a.createElement(l,Object(o.a)({ref:n,className:v()(r,d)},f))}));return l.defaultProps=s,l.displayName=u,l}var P=R("carousel-caption"),M=R("carousel-item");function A(e,t){var n=0;return a.a.Children.map(e,(function(e){return a.a.isValidElement(e)?t(e,n++):e}))}var X=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!=typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];e.apply(this,r),t.apply(this,r)}}),null)};function q(e){return!e||"#"===e.trim()}var J=a.a.forwardRef((function(e,t){var n=e.as,r=void 0===n?"a":n,u=e.disabled,c=e.onKeyDown,s=Object(i.a)(e,["as","disabled","onKeyDown"]),l=function(e){var t=s.href,n=s.onClick;(u||q(t))&&e.preventDefault(),u?e.stopPropagation():n&&n(e)};return q(s.href)&&(s.role=s.role||"button",s.href=s.href||"#"),u&&(s.tabIndex=-1,s["aria-disabled"]=!0),a.a.createElement(r,Object(o.a)({ref:t},s,{onClick:l,onKeyDown:X((function(e){" "===e.key&&(e.preventDefault(),l(e))}),c)}))}));J.displayName="SafeAnchor";var U=J;var V={bsPrefix:N.a.string,as:N.a.elementType,slide:N.a.bool,fade:N.a.bool,controls:N.a.bool,indicators:N.a.bool,activeIndex:N.a.number,onSelect:N.a.func,onSlide:N.a.func,onSlid:N.a.func,interval:N.a.number,keyboard:N.a.bool,pause:N.a.oneOf(["hover",!1]),wrap:N.a.bool,touch:N.a.bool,prevIcon:N.a.node,prevLabel:N.a.string,nextIcon:N.a.node,nextLabel:N.a.string},Z={slide:!0,fade:!1,controls:!0,indicators:!0,defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:a.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:a.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};var _=a.a.forwardRef((function(e,t){var n=Object(T.a)(e,{activeIndex:"onSelect"}),s=n.as,l=void 0===s?"div":s,f=n.bsPrefix,p=n.slide,b=n.fade,m=n.controls,h=n.indicators,x=n.activeIndex,O=n.onSelect,y=n.onSlide,j=n.onSlid,g=n.interval,w=n.keyboard,C=n.onKeyDown,k=n.pause,N=n.onMouseOver,I=n.onMouseOut,D=n.wrap,R=n.touch,P=n.onTouchStart,M=n.onTouchMove,X=n.onTouchEnd,q=n.prevIcon,J=n.prevLabel,V=n.nextIcon,Z=n.nextLabel,_=n.className,K=n.children,H=Object(i.a)(n,["as","bsPrefix","slide","fade","controls","indicators","activeIndex","onSelect","onSlide","onSlid","interval","keyboard","onKeyDown","pause","onMouseOver","onMouseOut","wrap","touch","onTouchStart","onTouchMove","onTouchEnd","prevIcon","prevLabel","nextIcon","nextLabel","className","children"]),G=Object(L.a)(f,"carousel"),Y=Object(r.useRef)(null),z=Object(r.useState)("next"),F=z[0],Q=z[1],$=Object(r.useState)(!1),W=$[0],B=$[1],ee=Object(r.useState)(x||0),te=ee[0],ne=ee[1];W||x===te||(Y.current?(Q(Y.current),Y.current=null):Q((x||0)>te?"next":"prev"),p&&B(!0),ne(x||0));var re=a.a.Children.toArray(K).filter(a.a.isValidElement).length,ae=Object(r.useCallback)((function(e){if(!W){var t=te-1;if(t<0){if(!D)return;t=re-1}Y.current="prev",O&&O(t,e)}}),[W,te,O,D,re]),oe=Object(u.a)((function(e){if(!W){var t=te+1;if(t>=re){if(!D)return;t=0}Y.current="next",O&&O(t,e)}})),ie=Object(r.useRef)();Object(r.useImperativeHandle)(t,(function(){return{element:ie.current,prev:ae,next:oe}}));var ue=Object(u.a)((function(){!document.hidden&&function(e){if(!(e&&e.style&&e.parentNode&&e.parentNode.style))return!1;var t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility&&"none"!==getComputedStyle(e.parentNode).display}(ie.current)&&oe()})),ce="next"===F?"left":"right";c((function(){p||(y&&y(te,ce),j&&j(te,ce))}),[te]);var se=G+"-item-"+F,le=G+"-item-"+ce,fe=Object(r.useCallback)((function(e){!function(e){e.offsetHeight}(e),y&&y(te,ce)}),[y,te,ce]),de=Object(r.useCallback)((function(){B(!1),j&&j(te,ce)}),[j,te,ce]),pe=Object(r.useCallback)((function(e){if(w&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void ae(e);case"ArrowRight":return e.preventDefault(),void oe(e)}C&&C(e)}),[w,C,ae,oe]),ve=Object(r.useState)(!1),be=ve[0],me=ve[1],he=Object(r.useCallback)((function(e){"hover"===k&&me(!0),N&&N(e)}),[k,N]),Ee=Object(r.useCallback)((function(e){me(!1),I&&I(e)}),[I]),xe=Object(r.useRef)(0),Oe=Object(r.useRef)(0),ye=Object(r.useState)(!1),je=ye[0],ge=ye[1],we=d(),Ce=Object(r.useCallback)((function(e){xe.current=e.touches[0].clientX,Oe.current=0,R&&ge(!0),P&&P(e)}),[R,P]),Se=Object(r.useCallback)((function(e){e.touches&&e.touches.length>1?Oe.current=0:Oe.current=e.touches[0].clientX-xe.current,M&&M(e)}),[M]),ke=Object(r.useCallback)((function(e){if(R){var t=Oe.current;if(Math.abs(t)<=40)return;t>0?ae(e):oe(e)}we.set((function(){ge(!1)}),g||void 0),X&&X(e)}),[R,ae,oe,we,g,X]),Ne=null!=g&&!be&&!je&&!W,Te=Object(r.useRef)();Object(r.useEffect)((function(){if(Ne)return Te.current=window.setInterval(document.visibilityState?ue:oe,g||void 0),function(){null!==Te.current&&clearInterval(Te.current)}}),[Ne,oe,g,ue]);var Ie=Object(r.useMemo)((function(){return h&&Array.from({length:re},(function(e,t){return function(e){O&&O(t,e)}}))}),[h,re,O]);return a.a.createElement(l,Object(o.a)({ref:ie},H,{onKeyDown:pe,onMouseOver:he,onMouseOut:Ee,onTouchStart:Ce,onTouchMove:Se,onTouchEnd:ke,className:v()(_,G,p&&"slide",b&&G+"-fade")}),h&&a.a.createElement("ol",{className:G+"-indicators"},A(K,(function(e,t){return a.a.createElement("li",{key:t,className:t===te?"active":void 0,onClick:Ie?Ie[t]:void 0})}))),a.a.createElement("div",{className:G+"-inner"},A(K,(function(e,t){var n=t===te;return p?a.a.createElement(S,{in:n,onEnter:n?fe:void 0,onEntered:n?de:void 0,addEndListener:E},(function(t){return a.a.cloneElement(e,{className:v()(e.props.className,n&&"entered"!==t&&se,("entered"===t||"exiting"===t)&&"active",("entering"===t||"exiting"===t)&&le)})})):a.a.cloneElement(e,{className:v()(e.props.className,n&&"active")})}))),m&&a.a.createElement(a.a.Fragment,null,(D||0!==x)&&a.a.createElement(U,{className:G+"-control-prev",onClick:ae},q,J&&a.a.createElement("span",{className:"sr-only"},J)),(D||x!==re-1)&&a.a.createElement(U,{className:G+"-control-next",onClick:oe},V,Z&&a.a.createElement("span",{className:"sr-only"},Z))))}));_.displayName="Carousel",_.propTypes=V,_.defaultProps=Z,_.Caption=P,_.Item=M;var K=_,H=n("fCgX"),G=n.n(H);t.default=function(){return a.a.createElement(K,null,a.a.createElement(K.Item,null,a.a.createElement("img",{className:"d-block w-100",src:G.a,alt:"this is the first slide"})),a.a.createElement(K.Item,null,a.a.createElement("img",{className:"d-block w-100",src:G.a,alt:"this is the first slide"})))}},"7j6X":function(e,t,n){"use strict";var r=n("dZvc");function a(e,t){return function(e){var t=Object(r.a)(e);return t&&t.defaultView||window}(e).getComputedStyle(e,t)}var o=/([A-Z])/g;var i=/^ms-/;function u(e){return function(e){return e.replace(o,"-$1").toLowerCase()}(e).replace(i,"-ms-")}var c=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;t.a=function(e,t){var n="",r="";if("string"==typeof t)return e.style.getPropertyValue(u(t))||a(e).getPropertyValue(u(t));Object.keys(t).forEach((function(a){var o=t[a];o||0===o?!function(e){return!(!e||!c.test(e))}(a)?n+=u(a)+": "+o+";":r+=a+"("+o+") ":e.style.removeProperty(u(a))})),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n}},GEtZ:function(e,t,n){"use strict";var r=n("SJxq"),a=!1,o=!1;try{var i={get passive(){return a=!0},get once(){return o=a=!0}};r.a&&(window.addEventListener("test",i,i),window.removeEventListener("test",i,!0))}catch(s){}var u=function(e,t,n,r){if(r&&"boolean"!=typeof r&&!o){var i=r.once,u=r.capture,c=n;!o&&i&&(c=n.__once||function e(r){this.removeEventListener(t,e,u),n.call(this,r)},n.__once=c),e.addEventListener(t,c,a?r:u)}e.addEventListener(t,n,r)};var c=function(e,t,n,r){var a=r&&"boolean"!=typeof r?r.capture:r;e.removeEventListener(t,n,a),n.__once&&e.removeEventListener(t,n.__once,a)};t.a=function(e,t,n,r){return u(e,t,n,r),function(){c(e,t,n,r)}}},J9yo:function(e,t,n){},JCAc:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("wx14"),a=n("zLVn"),o=n("q1tI");n("QLaP");function i(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function u(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function c(e,t){return Object.keys(t).reduce((function(n,c){var s,l=n,f=l[i(c)],d=l[c],p=Object(a.a)(l,[i(c),c].map(u)),v=t[c],b=function(e,t,n){var r=Object(o.useRef)(void 0!==e),a=Object(o.useState)(t),i=a[0],u=a[1],c=void 0!==e,s=r.current;return r.current=c,!c&&s&&i!==t&&u(t),[c?e:i,Object(o.useCallback)((function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];n&&n.apply(void 0,[e].concat(r)),u(e)}),[n])]}(d,f,e[v]),m=b[0],h=b[1];return Object(r.a)({},p,((s={})[c]=m,s[v]=h,s))}),e)}n("dI71"),n("94VI")},SJxq:function(e,t,n){"use strict";t.a=!("undefined"==typeof window||!window.document||!window.document.createElement)},TSYQ:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var u in r)n.call(r,u)&&r[u]&&e.push(u)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},XcHJ:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("q1tI");function a(){var e=Object(r.useRef)(!0),t=Object(r.useRef)((function(){return e.current}));return Object(r.useEffect)((function(){return function(){e.current=!1}}),[]),t.current}},ZCiN:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("q1tI");var a=function(e){var t=Object(r.useRef)(e);return Object(r.useEffect)((function(){t.current=e}),[e]),t};function o(e){var t=a(e);return Object(r.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}},dZvc:function(e,t,n){"use strict";function r(e){return e&&e.ownerDocument||document}n.d(t,"a",(function(){return r}))},fCgX:function(e,t,n){e.exports=n.p+"static/profile-afa816b40a55fcb8fa741467dd1913c7.jpg"},i52p:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("q1tI");function a(e){var t,n,a=(t=e,(n=Object(r.useRef)(t)).current=t,n);Object(r.useEffect)((function(){return function(){return a.current()}}),[])}},q4sD:function(e,t,n){},vUet:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n("wx14");var r=n("q1tI"),a=n.n(r),o=a.a.createContext({});o.Consumer,o.Provider;function i(e,t){var n=Object(r.useContext)(o);return e||n[t]||t}},wx14:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},zLVn:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,"a",(function(){return r}))}}]);
//# sourceMappingURL=component---src-pages-projects-js-60eada99116c0d7b8336.js.map