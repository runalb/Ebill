"use strict";(self.webpackChunkadminto_angular=self.webpackChunkadminto_angular||[]).push([[351],{5351:(Bn,$e,Ce)=>{Ce.d($e,{QN:()=>jn,bQ:()=>Fn});var R=Ce(6026);function Oe(o,e){var t=Object.keys(o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(o);e&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(o,i).enumerable})),t.push.apply(t,n)}return t}function Q(o){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?Oe(Object(t),!0).forEach(function(n){Qe(o,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(t)):Oe(Object(t)).forEach(function(n){Object.defineProperty(o,n,Object.getOwnPropertyDescriptor(t,n))})}return o}function Yt(o){return(Yt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(o)}function Qe(o,e,t){return e in o?Object.defineProperty(o,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):o[e]=t,o}function K(){return K=Object.assign||function(o){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(o[n]=t[n])}return o},K.apply(this,arguments)}function Je(o,e){if(null==o)return{};var n,i,t=function Ze(o,e){if(null==o)return{};var i,r,t={},n=Object.keys(o);for(r=0;r<n.length;r++)!(e.indexOf(i=n[r])>=0)&&(t[i]=o[i]);return t}(o,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(o);for(i=0;i<r.length;i++)!(e.indexOf(n=r[i])>=0)&&(!Object.prototype.propertyIsEnumerable.call(o,n)||(t[n]=o[n]))}return t}function et(o){if("undefined"!=typeof window&&window.navigator)return!!navigator.userAgent.match(o)}var nt=et(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),Et=et(/Edge/i),Ie=et(/firefox/i),St=et(/safari/i)&&!et(/chrome/i)&&!et(/android/i),Te=et(/iP(ad|od|hone)/i),sn=et(/chrome/i)&&et(/android/i),Ae={capture:!1,passive:!1};function w(o,e,t){o.addEventListener(e,t,!nt&&Ae)}function y(o,e,t){o.removeEventListener(e,t,!nt&&Ae)}function Gt(o,e){if(e){if(">"===e[0]&&(e=e.substring(1)),o)try{if(o.matches)return o.matches(e);if(o.msMatchesSelector)return o.msMatchesSelector(e);if(o.webkitMatchesSelector)return o.webkitMatchesSelector(e)}catch(t){return!1}return!1}}function ln(o){return o.host&&o!==document&&o.host.nodeType?o.host:o.parentNode}function V(o,e,t,n){if(o){t=t||document;do{if(null!=e&&(">"===e[0]?o.parentNode===t&&Gt(o,e):Gt(o,e))||n&&o===t)return o;if(o===t)break}while(o=ln(o))}return null}var Dt,Ne=/\s+/g;function I(o,e,t){if(o&&e)if(o.classList)o.classList[t?"add":"remove"](e);else{var n=(" "+o.className+" ").replace(Ne," ").replace(" "+e+" "," ");o.className=(n+(t?" "+e:"")).replace(Ne," ")}}function h(o,e,t){var n=o&&o.style;if(n){if(void 0===t)return document.defaultView&&document.defaultView.getComputedStyle?t=document.defaultView.getComputedStyle(o,""):o.currentStyle&&(t=o.currentStyle),void 0===e?t:t[e];!(e in n)&&-1===e.indexOf("webkit")&&(e="-webkit-"+e),n[e]=t+("string"==typeof t?"":"px")}}function ut(o,e){var t="";if("string"==typeof o)t=o;else do{var n=h(o,"transform");n&&"none"!==n&&(t=n+" "+t)}while(!e&&(o=o.parentNode));var i=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return i&&new i(t)}function xe(o,e,t){if(o){var n=o.getElementsByTagName(e),i=0,r=n.length;if(t)for(;i<r;i++)t(n[i],i);return n}return[]}function Z(){return document.scrollingElement||document.documentElement}function C(o,e,t,n,i){if(o.getBoundingClientRect||o===window){var r,a,s,l,u,d,f;if(o!==window&&o.parentNode&&o!==Z()?(a=(r=o.getBoundingClientRect()).top,s=r.left,l=r.bottom,u=r.right,d=r.height,f=r.width):(a=0,s=0,l=window.innerHeight,u=window.innerWidth,d=window.innerHeight,f=window.innerWidth),(e||t)&&o!==window&&(i=i||o.parentNode,!nt))do{if(i&&i.getBoundingClientRect&&("none"!==h(i,"transform")||t&&"static"!==h(i,"position"))){var p=i.getBoundingClientRect();a-=p.top+parseInt(h(i,"border-top-width")),s-=p.left+parseInt(h(i,"border-left-width")),l=a+r.height,u=s+r.width;break}}while(i=i.parentNode);if(n&&o!==window){var E=ut(i||o),b=E&&E.a,S=E&&E.d;E&&(l=(a/=S)+(d/=S),u=(s/=b)+(f/=b))}return{top:a,left:s,bottom:l,right:u,width:f,height:d}}}function Me(o,e,t){for(var n=it(o,!0),i=C(o)[e];n;){var r=C(n)[t];if(!("top"===t||"left"===t?i>=r:i<=r))return n;if(n===Z())break;n=it(n,!1)}return!1}function gt(o,e,t,n){for(var i=0,r=0,a=o.children;r<a.length;){if("none"!==a[r].style.display&&a[r]!==g.ghost&&(n||a[r]!==g.dragged)&&V(a[r],t.draggable,o,!1)){if(i===e)return a[r];i++}r++}return null}function re(o,e){for(var t=o.lastElementChild;t&&(t===g.ghost||"none"===h(t,"display")||e&&!Gt(t,e));)t=t.previousElementSibling;return t||null}function T(o,e){var t=0;if(!o||!o.parentNode)return-1;for(;o=o.previousElementSibling;)"TEMPLATE"!==o.nodeName.toUpperCase()&&o!==g.clone&&(!e||Gt(o,e))&&t++;return t}function Pe(o){var e=0,t=0,n=Z();if(o)do{var i=ut(o);e+=o.scrollLeft*i.a,t+=o.scrollTop*i.d}while(o!==n&&(o=o.parentNode));return[e,t]}function it(o,e){if(!o||!o.getBoundingClientRect)return Z();var t=o,n=!1;do{if(t.clientWidth<t.scrollWidth||t.clientHeight<t.scrollHeight){var i=h(t);if(t.clientWidth<t.scrollWidth&&("auto"==i.overflowX||"scroll"==i.overflowX)||t.clientHeight<t.scrollHeight&&("auto"==i.overflowY||"scroll"==i.overflowY)){if(!t.getBoundingClientRect||t===document.body)return Z();if(n||e)return t;n=!0}}}while(t=t.parentNode);return Z()}function ae(o,e){return Math.round(o.top)===Math.round(e.top)&&Math.round(o.left)===Math.round(e.left)&&Math.round(o.height)===Math.round(e.height)&&Math.round(o.width)===Math.round(e.width)}function je(o,e){return function(){if(!Dt){var t=arguments,n=this;1===t.length?o.call(n,t[0]):o.apply(n,t),Dt=setTimeout(function(){Dt=void 0},e)}}}function Fe(o,e,t){o.scrollLeft+=e,o.scrollTop+=t}function se(o){var e=window.Polymer,t=window.jQuery||window.Zepto;return e&&e.dom?e.dom(o).cloneNode(!0):t?t(o).clone(!0)[0]:o.cloneNode(!0)}var F="Sortable"+(new Date).getTime();var mt=[],ue={initializeByDefault:!0},_t={mount:function(e){for(var t in ue)ue.hasOwnProperty(t)&&!(t in e)&&(e[t]=ue[t]);mt.forEach(function(n){if(n.pluginName===e.pluginName)throw"Sortable: Cannot mount plugin ".concat(e.pluginName," more than once")}),mt.push(e)},pluginEvent:function(e,t,n){var i=this;this.eventCanceled=!1,n.cancel=function(){i.eventCanceled=!0};var r=e+"Global";mt.forEach(function(a){!t[a.pluginName]||(t[a.pluginName][r]&&t[a.pluginName][r](Q({sortable:t},n)),t.options[a.pluginName]&&t[a.pluginName][e]&&t[a.pluginName][e](Q({sortable:t},n)))})},initializePlugins:function(e,t,n,i){for(var r in mt.forEach(function(s){var l=s.pluginName;if(e.options[l]||s.initializeByDefault){var u=new s(e,t,e.options);u.sortable=e,u.options=e.options,e[l]=u,K(n,u.defaults)}}),e.options)if(e.options.hasOwnProperty(r)){var a=this.modifyOption(e,r,e.options[r]);void 0!==a&&(e.options[r]=a)}},getEventProperties:function(e,t){var n={};return mt.forEach(function(i){"function"==typeof i.eventProperties&&K(n,i.eventProperties.call(t[i.pluginName],e))}),n},modifyOption:function(e,t,n){var i;return mt.forEach(function(r){!e[r.pluginName]||r.optionListeners&&"function"==typeof r.optionListeners[t]&&(i=r.optionListeners[t].call(e[r.pluginName],n))}),i}};var gn=["evt"],X=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=n.evt,r=Je(n,gn);_t.pluginEvent.bind(g)(e,t,Q({dragEl:c,parentEl:A,ghostEl:v,rootEl:O,nextEl:ct,lastDownEl:Ht,cloneEl:N,cloneHidden:rt,dragStarted:It,putSortable:j,activeSortable:g.active,originalEvent:i,oldIndex:vt,oldDraggableIndex:Ot,newIndex:H,newDraggableIndex:at,hideGhostForTarget:We,unhideGhostForTarget:Le,cloneNowHidden:function(){rt=!0},cloneNowShown:function(){rt=!1},dispatchSortableEvent:function(s){B({sortable:t,name:s,originalEvent:i})}},r))};function B(o){!function Ct(o){var e=o.sortable,t=o.rootEl,n=o.name,i=o.targetEl,r=o.cloneEl,a=o.toEl,s=o.fromEl,l=o.oldIndex,u=o.newIndex,d=o.oldDraggableIndex,f=o.newDraggableIndex,p=o.originalEvent,E=o.putSortable,b=o.extraEventProperties;if(e=e||t&&t[F]){var S,M=e.options,U="on"+n.charAt(0).toUpperCase()+n.substr(1);!window.CustomEvent||nt||Et?(S=document.createEvent("Event")).initEvent(n,!0,!0):S=new CustomEvent(n,{bubbles:!0,cancelable:!0}),S.to=a||t,S.from=s||t,S.item=i||t,S.clone=r,S.oldIndex=l,S.newIndex=u,S.oldDraggableIndex=d,S.newDraggableIndex=f,S.originalEvent=p,S.pullMode=E?E.lastPutMode:void 0;var P=Q(Q({},b),_t.getEventProperties(n,e));for(var G in P)S[G]=P[G];t&&t.dispatchEvent(S),M[U]&&M[U].call(e,S)}}(Q({putSortable:j,cloneEl:N,targetEl:c,rootEl:O,oldIndex:vt,oldDraggableIndex:Ot,newIndex:H,newDraggableIndex:at},o))}var c,A,v,O,ct,Ht,N,rt,vt,H,Ot,at,Wt,j,ft,q,ce,fe,Re,Be,It,yt,Tt,Ut,k,bt=!1,Lt=!1,Kt=[],At=!1,zt=!1,de=[],he=!1,Vt=[],qt="undefined"!=typeof document,$t=Te,Xe=Et||nt?"cssFloat":"float",mn=qt&&!sn&&!Te&&"draggable"in document.createElement("div"),Ye=function(){if(qt){if(nt)return!1;var o=document.createElement("x");return o.style.cssText="pointer-events:auto","auto"===o.style.pointerEvents}}(),Ge=function(e,t){var n=h(e),i=parseInt(n.width)-parseInt(n.paddingLeft)-parseInt(n.paddingRight)-parseInt(n.borderLeftWidth)-parseInt(n.borderRightWidth),r=gt(e,0,t),a=gt(e,1,t),s=r&&h(r),l=a&&h(a),u=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+C(r).width,d=l&&parseInt(l.marginLeft)+parseInt(l.marginRight)+C(a).width;return"flex"===n.display?"column"===n.flexDirection||"column-reverse"===n.flexDirection?"vertical":"horizontal":"grid"===n.display?n.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal":r&&s.float&&"none"!==s.float?!a||"both"!==l.clear&&l.clear!==("left"===s.float?"left":"right")?"horizontal":"vertical":r&&("block"===s.display||"flex"===s.display||"table"===s.display||"grid"===s.display||u>=i&&"none"===n[Xe]||a&&"none"===n[Xe]&&u+d>i)?"vertical":"horizontal"},He=function(e){function t(r,a){return function(s,l,u,d){if(null==r&&(a||s.options.group.name&&l.options.group.name&&s.options.group.name===l.options.group.name))return!0;if(null==r||!1===r)return!1;if(a&&"clone"===r)return r;if("function"==typeof r)return t(r(s,l,u,d),a)(s,l,u,d);var p=(a?s:l).options.group.name;return!0===r||"string"==typeof r&&r===p||r.join&&r.indexOf(p)>-1}}var n={},i=e.group;(!i||"object"!=Yt(i))&&(i={name:i}),n.name=i.name,n.checkPull=t(i.pull,!0),n.checkPut=t(i.put),n.revertClone=i.revertClone,e.group=n},We=function(){!Ye&&v&&h(v,"display","none")},Le=function(){!Ye&&v&&h(v,"display","")};qt&&document.addEventListener("click",function(o){if(Lt)return o.preventDefault(),o.stopPropagation&&o.stopPropagation(),o.stopImmediatePropagation&&o.stopImmediatePropagation(),Lt=!1,!1},!0);var dt=function(e){if(c){var t=function(e,t){var n;return Kt.some(function(i){var r=i[F].options.emptyInsertThreshold;if(r&&!re(i)){var a=C(i);if(e>=a.left-r&&e<=a.right+r&&t>=a.top-r&&t<=a.bottom+r)return n=i}}),n}((e=e.touches?e.touches[0]:e).clientX,e.clientY);if(t){var n={};for(var i in e)e.hasOwnProperty(i)&&(n[i]=e[i]);n.target=n.rootEl=t,n.preventDefault=void 0,n.stopPropagation=void 0,t[F]._onDragOver(n)}}},yn=function(e){c&&c.parentNode[F]._isOutsideThisEl(e.target)};function g(o,e){if(!o||!o.nodeType||1!==o.nodeType)throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(o));this.el=o,this.options=e=K({},e),o[F]=this;var t={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(o.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return Ge(o,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(a,s){a.setData("Text",s.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:!1!==g.supportPointer&&"PointerEvent"in window&&!St,emptyInsertThreshold:5};for(var n in _t.initializePlugins(this,o,t),t)!(n in e)&&(e[n]=t[n]);for(var i in He(e),this)"_"===i.charAt(0)&&"function"==typeof this[i]&&(this[i]=this[i].bind(this));this.nativeDraggable=!e.forceFallback&&mn,this.nativeDraggable&&(this.options.touchStartThreshold=1),e.supportPointer?w(o,"pointerdown",this._onTapStart):(w(o,"mousedown",this._onTapStart),w(o,"touchstart",this._onTapStart)),this.nativeDraggable&&(w(o,"dragover",this),w(o,"dragenter",this)),Kt.push(this.el),e.store&&e.store.get&&this.sort(e.store.get(this)||[]),K(this,function dn(){var e,o=[];return{captureAnimationState:function(){o=[],this.options.animation&&[].slice.call(this.el.children).forEach(function(i){if("none"!==h(i,"display")&&i!==g.ghost){o.push({target:i,rect:C(i)});var r=Q({},o[o.length-1].rect);if(i.thisAnimationDuration){var a=ut(i,!0);a&&(r.top-=a.f,r.left-=a.e)}i.fromRect=r}})},addAnimationState:function(n){o.push(n)},removeAnimationState:function(n){o.splice(function un(o,e){for(var t in o)if(o.hasOwnProperty(t))for(var n in e)if(e.hasOwnProperty(n)&&e[n]===o[t][n])return Number(t);return-1}(o,{target:n}),1)},animateAll:function(n){var i=this;if(!this.options.animation)return clearTimeout(e),void("function"==typeof n&&n());var r=!1,a=0;o.forEach(function(s){var l=0,u=s.target,d=u.fromRect,f=C(u),p=u.prevFromRect,E=u.prevToRect,b=s.rect,S=ut(u,!0);S&&(f.top-=S.f,f.left-=S.e),u.toRect=f,u.thisAnimationDuration&&ae(p,f)&&!ae(d,f)&&(b.top-f.top)/(b.left-f.left)==(d.top-f.top)/(d.left-f.left)&&(l=function pn(o,e,t,n){return Math.sqrt(Math.pow(e.top-o.top,2)+Math.pow(e.left-o.left,2))/Math.sqrt(Math.pow(e.top-t.top,2)+Math.pow(e.left-t.left,2))*n.animation}(b,p,E,i.options)),ae(f,d)||(u.prevFromRect=d,u.prevToRect=f,l||(l=i.options.animation),i.animate(u,b,f,l)),l&&(r=!0,a=Math.max(a,l),clearTimeout(u.animationResetTimer),u.animationResetTimer=setTimeout(function(){u.animationTime=0,u.prevFromRect=null,u.fromRect=null,u.prevToRect=null,u.thisAnimationDuration=null},l),u.thisAnimationDuration=l)}),clearTimeout(e),r?e=setTimeout(function(){"function"==typeof n&&n()},a):"function"==typeof n&&n(),o=[]},animate:function(n,i,r,a){if(a){h(n,"transition",""),h(n,"transform","");var s=ut(this.el),d=(i.left-r.left)/(s&&s.a||1),f=(i.top-r.top)/(s&&s.d||1);n.animatingX=!!d,n.animatingY=!!f,h(n,"transform","translate3d("+d+"px,"+f+"px,0)"),this.forRepaintDummy=function hn(o){return o.offsetWidth}(n),h(n,"transition","transform "+a+"ms"+(this.options.easing?" "+this.options.easing:"")),h(n,"transform","translate3d(0,0,0)"),"number"==typeof n.animated&&clearTimeout(n.animated),n.animated=setTimeout(function(){h(n,"transition",""),h(n,"transform",""),n.animated=!1,n.animatingX=!1,n.animatingY=!1},a)}}}}())}function Qt(o,e,t,n,i,r,a,s){var l,f,u=o[F],d=u.options.onMove;return!window.CustomEvent||nt||Et?(l=document.createEvent("Event")).initEvent("move",!0,!0):l=new CustomEvent("move",{bubbles:!0,cancelable:!0}),l.to=e,l.from=o,l.dragged=t,l.draggedRect=n,l.related=i||e,l.relatedRect=r||C(e),l.willInsertAfter=s,l.originalEvent=a,o.dispatchEvent(l),d&&(f=d.call(u,l,a)),f}function pe(o){o.draggable=!1}function En(){he=!1}function On(o){for(var e=o.tagName+o.className+o.src+o.href+o.textContent,t=e.length,n=0;t--;)n+=e.charCodeAt(t);return n.toString(36)}function Zt(o){return setTimeout(o,0)}function ge(o){return clearTimeout(o)}g.prototype={constructor:g,_isOutsideThisEl:function(e){!this.el.contains(e)&&e!==this.el&&(yt=null)},_getDirection:function(e,t){return"function"==typeof this.options.direction?this.options.direction.call(this,e,t,c):this.options.direction},_onTapStart:function(e){if(e.cancelable){var t=this,n=this.el,i=this.options,r=i.preventOnFilter,a=e.type,s=e.touches&&e.touches[0]||e.pointerType&&"touch"===e.pointerType&&e,l=(s||e).target,u=e.target.shadowRoot&&(e.path&&e.path[0]||e.composedPath&&e.composedPath()[0])||l,d=i.filter;if(function In(o){Vt.length=0;for(var e=o.getElementsByTagName("input"),t=e.length;t--;){var n=e[t];n.checked&&Vt.push(n)}}(n),!c&&!(/mousedown|pointerdown/.test(a)&&0!==e.button||i.disabled)&&!u.isContentEditable&&(this.nativeDraggable||!St||!l||"SELECT"!==l.tagName.toUpperCase())&&!((l=V(l,i.draggable,n,!1))&&l.animated||Ht===l)){if(vt=T(l),Ot=T(l,i.draggable),"function"==typeof d){if(d.call(this,e,l,this))return B({sortable:t,rootEl:u,name:"filter",targetEl:l,toEl:n,fromEl:n}),X("filter",t,{evt:e}),void(r&&e.cancelable&&e.preventDefault())}else if(d&&(d=d.split(",").some(function(f){if(f=V(u,f.trim(),n,!1))return B({sortable:t,rootEl:f,name:"filter",targetEl:l,fromEl:n,toEl:n}),X("filter",t,{evt:e}),!0})))return void(r&&e.cancelable&&e.preventDefault());i.handle&&!V(u,i.handle,n,!1)||this._prepareDragStart(e,s,l)}}},_prepareDragStart:function(e,t,n){var l,i=this,r=i.el,a=i.options,s=r.ownerDocument;if(n&&!c&&n.parentNode===r){var u=C(n);if(O=r,A=(c=n).parentNode,ct=c.nextSibling,Ht=n,Wt=a.group,g.dragged=c,Re=(ft={target:c,clientX:(t||e).clientX,clientY:(t||e).clientY}).clientX-u.left,Be=ft.clientY-u.top,this._lastX=(t||e).clientX,this._lastY=(t||e).clientY,c.style["will-change"]="all",l=function(){X("delayEnded",i,{evt:e}),g.eventCanceled?i._onDrop():(i._disableDelayedDragEvents(),!Ie&&i.nativeDraggable&&(c.draggable=!0),i._triggerDragStart(e,t),B({sortable:i,name:"choose",originalEvent:e}),I(c,a.chosenClass,!0))},a.ignore.split(",").forEach(function(d){xe(c,d.trim(),pe)}),w(s,"dragover",dt),w(s,"mousemove",dt),w(s,"touchmove",dt),w(s,"mouseup",i._onDrop),w(s,"touchend",i._onDrop),w(s,"touchcancel",i._onDrop),Ie&&this.nativeDraggable&&(this.options.touchStartThreshold=4,c.draggable=!0),X("delayStart",this,{evt:e}),!a.delay||a.delayOnTouchOnly&&!t||this.nativeDraggable&&(Et||nt))l();else{if(g.eventCanceled)return void this._onDrop();w(s,"mouseup",i._disableDelayedDrag),w(s,"touchend",i._disableDelayedDrag),w(s,"touchcancel",i._disableDelayedDrag),w(s,"mousemove",i._delayedDragTouchMoveHandler),w(s,"touchmove",i._delayedDragTouchMoveHandler),a.supportPointer&&w(s,"pointermove",i._delayedDragTouchMoveHandler),i._dragStartTimer=setTimeout(l,a.delay)}}},_delayedDragTouchMoveHandler:function(e){var t=e.touches?e.touches[0]:e;Math.max(Math.abs(t.clientX-this._lastX),Math.abs(t.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){c&&pe(c),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var e=this.el.ownerDocument;y(e,"mouseup",this._disableDelayedDrag),y(e,"touchend",this._disableDelayedDrag),y(e,"touchcancel",this._disableDelayedDrag),y(e,"mousemove",this._delayedDragTouchMoveHandler),y(e,"touchmove",this._delayedDragTouchMoveHandler),y(e,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(e,t){t=t||"touch"==e.pointerType&&e,!this.nativeDraggable||t?w(document,this.options.supportPointer?"pointermove":t?"touchmove":"mousemove",this._onTouchMove):(w(c,"dragend",this),w(O,"dragstart",this._onDragStart));try{document.selection?Zt(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch(n){}},_dragStarted:function(e,t){if(bt=!1,O&&c){X("dragStarted",this,{evt:t}),this.nativeDraggable&&w(document,"dragover",yn);var n=this.options;!e&&I(c,n.dragClass,!1),I(c,n.ghostClass,!0),g.active=this,e&&this._appendGhost(),B({sortable:this,name:"start",originalEvent:t})}else this._nulling()},_emulateDragOver:function(){if(q){this._lastX=q.clientX,this._lastY=q.clientY,We();for(var e=document.elementFromPoint(q.clientX,q.clientY),t=e;e&&e.shadowRoot&&(e=e.shadowRoot.elementFromPoint(q.clientX,q.clientY))!==t;)t=e;if(c.parentNode[F]._isOutsideThisEl(e),t)do{if(t[F]&&t[F]._onDragOver({clientX:q.clientX,clientY:q.clientY,target:e,rootEl:t})&&!this.options.dragoverBubble)break;e=t}while(t=t.parentNode);Le()}},_onTouchMove:function(e){if(ft){var t=this.options,n=t.fallbackTolerance,i=t.fallbackOffset,r=e.touches?e.touches[0]:e,a=v&&ut(v,!0),s=v&&a&&a.a,l=v&&a&&a.d,u=$t&&k&&Pe(k),d=(r.clientX-ft.clientX+i.x)/(s||1)+(u?u[0]-de[0]:0)/(s||1),f=(r.clientY-ft.clientY+i.y)/(l||1)+(u?u[1]-de[1]:0)/(l||1);if(!g.active&&!bt){if(n&&Math.max(Math.abs(r.clientX-this._lastX),Math.abs(r.clientY-this._lastY))<n)return;this._onDragStart(e,!0)}if(v){a?(a.e+=d-(ce||0),a.f+=f-(fe||0)):a={a:1,b:0,c:0,d:1,e:d,f};var p="matrix(".concat(a.a,",").concat(a.b,",").concat(a.c,",").concat(a.d,",").concat(a.e,",").concat(a.f,")");h(v,"webkitTransform",p),h(v,"mozTransform",p),h(v,"msTransform",p),h(v,"transform",p),ce=d,fe=f,q=r}e.cancelable&&e.preventDefault()}},_appendGhost:function(){if(!v){var e=this.options.fallbackOnBody?document.body:O,t=C(c,!0,$t,!0,e),n=this.options;if($t){for(k=e;"static"===h(k,"position")&&"none"===h(k,"transform")&&k!==document;)k=k.parentNode;k!==document.body&&k!==document.documentElement?(k===document&&(k=Z()),t.top+=k.scrollTop,t.left+=k.scrollLeft):k=Z(),de=Pe(k)}I(v=c.cloneNode(!0),n.ghostClass,!1),I(v,n.fallbackClass,!0),I(v,n.dragClass,!0),h(v,"transition",""),h(v,"transform",""),h(v,"box-sizing","border-box"),h(v,"margin",0),h(v,"top",t.top),h(v,"left",t.left),h(v,"width",t.width),h(v,"height",t.height),h(v,"opacity","0.8"),h(v,"position",$t?"absolute":"fixed"),h(v,"zIndex","100000"),h(v,"pointerEvents","none"),g.ghost=v,e.appendChild(v),h(v,"transform-origin",Re/parseInt(v.style.width)*100+"% "+Be/parseInt(v.style.height)*100+"%")}},_onDragStart:function(e,t){var n=this,i=e.dataTransfer,r=n.options;X("dragStart",this,{evt:e}),g.eventCanceled?this._onDrop():(X("setupClone",this),g.eventCanceled||((N=se(c)).draggable=!1,N.style["will-change"]="",this._hideClone(),I(N,this.options.chosenClass,!1),g.clone=N),n.cloneId=Zt(function(){X("clone",n),!g.eventCanceled&&(n.options.removeCloneOnHide||O.insertBefore(N,c),n._hideClone(),B({sortable:n,name:"clone"}))}),!t&&I(c,r.dragClass,!0),t?(Lt=!0,n._loopId=setInterval(n._emulateDragOver,50)):(y(document,"mouseup",n._onDrop),y(document,"touchend",n._onDrop),y(document,"touchcancel",n._onDrop),i&&(i.effectAllowed="move",r.setData&&r.setData.call(n,i,c)),w(document,"drop",n),h(c,"transform","translateZ(0)")),bt=!0,n._dragStartId=Zt(n._dragStarted.bind(n,t,e)),w(document,"selectstart",n),It=!0,St&&h(document.body,"user-select","none"))},_onDragOver:function(e){var i,r,a,E,t=this.el,n=e.target,s=this.options,l=s.group,u=g.active,d=Wt===l,f=s.sort,p=j||u,b=this,S=!1;if(!he){if(void 0!==e.preventDefault&&e.cancelable&&e.preventDefault(),n=V(n,s.draggable,t,!0),M("dragOver"),g.eventCanceled)return S;if(c.contains(e.target)||n.animated&&n.animatingX&&n.animatingY||b._ignoreWhileAnimating===n)return P(!1);if(Lt=!1,u&&!s.disabled&&(d?f||(a=A!==O):j===this||(this.lastPutMode=Wt.checkPull(this,u,c,e))&&l.checkPut(this,u,c,e))){if(E="vertical"===this._getDirection(e,n),i=C(c),M("dragOverValid"),g.eventCanceled)return S;if(a)return A=O,U(),this._hideClone(),M("revert"),g.eventCanceled||(ct?O.insertBefore(c,ct):O.appendChild(c)),P(!0);var D=re(t,s.draggable);if(!D||function Dn(o,e,t){var n=C(re(t.el,t.options.draggable));return e?o.clientX>n.right+10||o.clientX<=n.right&&o.clientY>n.bottom&&o.clientX>=n.left:o.clientX>n.right&&o.clientY>n.top||o.clientX<=n.right&&o.clientY>n.bottom+10}(e,E,this)&&!D.animated){if(D===c)return P(!1);if(D&&t===e.target&&(n=D),n&&(r=C(n)),!1!==Qt(O,t,c,i,n,r,e,!!n))return U(),t.appendChild(c),A=t,G(),P(!0)}else if(D&&function Sn(o,e,t){var n=C(gt(t.el,0,t.options,!0));return e?o.clientX<n.left-10||o.clientY<n.top&&o.clientX<n.right:o.clientY<n.top-10||o.clientY<n.bottom&&o.clientX<n.left}(e,E,this)){var J=gt(t,0,s,!0);if(J===c)return P(!1);if(r=C(n=J),!1!==Qt(O,t,c,i,n,r,e,!1))return U(),t.insertBefore(c,J),A=t,G(),P(!0)}else if(n.parentNode===t){r=C(n);var tt,ht,ot,Ft=c.parentNode!==t,L=!function(e,t,n){var i=n?e.left:e.top,s=n?t.left:t.top;return i===s||(n?e.right:e.bottom)===(n?t.right:t.bottom)||i+(n?e.width:e.height)/2===s+(n?t.width:t.height)/2}(c.animated&&c.toRect||i,n.animated&&n.toRect||r,E),kt=E?"top":"left",st=Me(n,"top","top")||Me(c,"top","top"),Rt=st?st.scrollTop:void 0;if(yt!==n&&(ht=r[kt],At=!1,zt=!L&&s.invertSwap||Ft),tt=function _n(o,e,t,n,i,r,a,s){var l=n?o.clientY:o.clientX,u=n?t.height:t.width,d=n?t.top:t.left,f=n?t.bottom:t.right,p=!1;if(!a)if(s&&Ut<u*i){if(!At&&(1===Tt?l>d+u*r/2:l<f-u*r/2)&&(At=!0),At)p=!0;else if(1===Tt?l<d+Ut:l>f-Ut)return-Tt}else if(l>d+u*(1-i)/2&&l<f-u*(1-i)/2)return function Cn(o){return T(c)<T(o)?1:-1}(e);return(p=p||a)&&(l<d+u*r/2||l>f-u*r/2)?l>d+u/2?1:-1:0}(e,n,r,E,L?1:s.swapThreshold,null==s.invertedSwapThreshold?s.swapThreshold:s.invertedSwapThreshold,zt,yt===n),0!==tt){var pt=T(c);do{ot=A.children[pt-=tt]}while(ot&&("none"===h(ot,"display")||ot===v))}if(0===tt||ot===n)return P(!1);yt=n,Tt=tt;var Bt=n.nextElementSibling,lt=!1,oe=Qt(O,t,c,i,n,r,e,lt=1===tt);if(!1!==oe)return(1===oe||-1===oe)&&(lt=1===oe),he=!0,setTimeout(En,30),U(),lt&&!Bt?t.appendChild(c):n.parentNode.insertBefore(c,lt?Bt:n),st&&Fe(st,0,Rt-st.scrollTop),A=c.parentNode,void 0!==ht&&!zt&&(Ut=Math.abs(ht-C(n)[kt])),G(),P(!0)}if(t.contains(c))return P(!1)}return!1}function M(Xt,kn){X(Xt,b,Q({evt:e,isOwner:d,axis:E?"vertical":"horizontal",revert:a,dragRect:i,targetRect:r,canSort:f,fromSortable:p,target:n,completed:P,onMove:function(qe,Rn){return Qt(O,t,c,i,qe,C(qe),e,Rn)},changed:G},kn))}function U(){M("dragOverAnimationCapture"),b.captureAnimationState(),b!==p&&p.captureAnimationState()}function P(Xt){return M("dragOverCompleted",{insertion:Xt}),Xt&&(d?u._hideClone():u._showClone(b),b!==p&&(I(c,j?j.options.ghostClass:u.options.ghostClass,!1),I(c,s.ghostClass,!0)),j!==b&&b!==g.active?j=b:b===g.active&&j&&(j=null),p===b&&(b._ignoreWhileAnimating=n),b.animateAll(function(){M("dragOverAnimationComplete"),b._ignoreWhileAnimating=null}),b!==p&&(p.animateAll(),p._ignoreWhileAnimating=null)),(n===c&&!c.animated||n===t&&!n.animated)&&(yt=null),!s.dragoverBubble&&!e.rootEl&&n!==document&&(c.parentNode[F]._isOutsideThisEl(e.target),!Xt&&dt(e)),!s.dragoverBubble&&e.stopPropagation&&e.stopPropagation(),S=!0}function G(){H=T(c),at=T(c,s.draggable),B({sortable:b,name:"change",toEl:t,newIndex:H,newDraggableIndex:at,originalEvent:e})}},_ignoreWhileAnimating:null,_offMoveEvents:function(){y(document,"mousemove",this._onTouchMove),y(document,"touchmove",this._onTouchMove),y(document,"pointermove",this._onTouchMove),y(document,"dragover",dt),y(document,"mousemove",dt),y(document,"touchmove",dt)},_offUpEvents:function(){var e=this.el.ownerDocument;y(e,"mouseup",this._onDrop),y(e,"touchend",this._onDrop),y(e,"pointerup",this._onDrop),y(e,"touchcancel",this._onDrop),y(document,"selectstart",this)},_onDrop:function(e){var t=this.el,n=this.options;H=T(c),at=T(c,n.draggable),X("drop",this,{evt:e}),A=c&&c.parentNode,H=T(c),at=T(c,n.draggable),g.eventCanceled||(bt=!1,zt=!1,At=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),ge(this.cloneId),ge(this._dragStartId),this.nativeDraggable&&(y(document,"drop",this),y(t,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),St&&h(document.body,"user-select",""),h(c,"transform",""),e&&(It&&(e.cancelable&&e.preventDefault(),!n.dropBubble&&e.stopPropagation()),v&&v.parentNode&&v.parentNode.removeChild(v),(O===A||j&&"clone"!==j.lastPutMode)&&N&&N.parentNode&&N.parentNode.removeChild(N),c&&(this.nativeDraggable&&y(c,"dragend",this),pe(c),c.style["will-change"]="",It&&!bt&&I(c,j?j.options.ghostClass:this.options.ghostClass,!1),I(c,this.options.chosenClass,!1),B({sortable:this,name:"unchoose",toEl:A,newIndex:null,newDraggableIndex:null,originalEvent:e}),O!==A?(H>=0&&(B({rootEl:A,name:"add",toEl:A,fromEl:O,originalEvent:e}),B({sortable:this,name:"remove",toEl:A,originalEvent:e}),B({rootEl:A,name:"sort",toEl:A,fromEl:O,originalEvent:e}),B({sortable:this,name:"sort",toEl:A,originalEvent:e})),j&&j.save()):H!==vt&&H>=0&&(B({sortable:this,name:"update",toEl:A,originalEvent:e}),B({sortable:this,name:"sort",toEl:A,originalEvent:e})),g.active&&((null==H||-1===H)&&(H=vt,at=Ot),B({sortable:this,name:"end",toEl:A,originalEvent:e}),this.save())))),this._nulling()},_nulling:function(){X("nulling",this),O=c=A=v=ct=N=Ht=rt=ft=q=It=H=at=vt=Ot=yt=Tt=j=Wt=g.dragged=g.ghost=g.clone=g.active=null,Vt.forEach(function(e){e.checked=!0}),Vt.length=ce=fe=0},handleEvent:function(e){switch(e.type){case"drop":case"dragend":this._onDrop(e);break;case"dragenter":case"dragover":c&&(this._onDragOver(e),function wn(o){o.dataTransfer&&(o.dataTransfer.dropEffect="move"),o.cancelable&&o.preventDefault()}(e));break;case"selectstart":e.preventDefault()}},toArray:function(){for(var t,e=[],n=this.el.children,i=0,r=n.length,a=this.options;i<r;i++)V(t=n[i],a.draggable,this.el,!1)&&e.push(t.getAttribute(a.dataIdAttr)||On(t));return e},sort:function(e,t){var n={},i=this.el;this.toArray().forEach(function(r,a){var s=i.children[a];V(s,this.options.draggable,i,!1)&&(n[r]=s)},this),t&&this.captureAnimationState(),e.forEach(function(r){n[r]&&(i.removeChild(n[r]),i.appendChild(n[r]))}),t&&this.animateAll()},save:function(){var e=this.options.store;e&&e.set&&e.set(this)},closest:function(e,t){return V(e,t||this.options.draggable,this.el,!1)},option:function(e,t){var n=this.options;if(void 0===t)return n[e];var i=_t.modifyOption(this,e,t);n[e]=void 0!==i?i:t,"group"===e&&He(n)},destroy:function(){X("destroy",this);var e=this.el;e[F]=null,y(e,"mousedown",this._onTapStart),y(e,"touchstart",this._onTapStart),y(e,"pointerdown",this._onTapStart),this.nativeDraggable&&(y(e,"dragover",this),y(e,"dragenter",this)),Array.prototype.forEach.call(e.querySelectorAll("[draggable]"),function(t){t.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),Kt.splice(Kt.indexOf(this.el),1),this.el=e=null},_hideClone:function(){if(!rt){if(X("hideClone",this),g.eventCanceled)return;h(N,"display","none"),this.options.removeCloneOnHide&&N.parentNode&&N.parentNode.removeChild(N),rt=!0}},_showClone:function(e){if("clone"===e.lastPutMode){if(rt){if(X("showClone",this),g.eventCanceled)return;c.parentNode!=O||this.options.group.revertClone?ct?O.insertBefore(N,ct):O.appendChild(N):O.insertBefore(N,c),this.options.group.revertClone&&this.animate(c,N),h(N,"display",""),rt=!1}}else this._hideClone()}},qt&&w(document,"touchmove",function(o){(g.active||bt)&&o.cancelable&&o.preventDefault()}),g.utils={on:w,off:y,css:h,find:xe,is:function(e,t){return!!V(e,t,e,!1)},extend:function cn(o,e){if(o&&e)for(var t in e)e.hasOwnProperty(t)&&(o[t]=e[t]);return o},throttle:je,closest:V,toggleClass:I,clone:se,index:T,nextTick:Zt,cancelNextTick:ge,detectDirection:Ge,getChild:gt},g.get=function(o){return o[F]},g.mount=function(){for(var o=arguments.length,e=new Array(o),t=0;t<o;t++)e[t]=arguments[t];e[0].constructor===Array&&(e=e[0]),e.forEach(function(n){if(!n.prototype||!n.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(n));n.utils&&(g.utils=Q(Q({},g.utils),n.utils)),_t.mount(n)})},g.create=function(o,e){return new g(o,e)},g.version="1.14.0";var Nt,me,be,ye,Jt,xt,x=[],ve=!1;function te(){x.forEach(function(o){clearInterval(o.pid)}),x=[]}function Ke(){clearInterval(xt)}var we=je(function(o,e,t,n){if(e.scroll){var d,i=(o.touches?o.touches[0]:o).clientX,r=(o.touches?o.touches[0]:o).clientY,a=e.scrollSensitivity,s=e.scrollSpeed,l=Z(),u=!1;me!==t&&(me=t,te(),d=e.scrollFn,!0===(Nt=e.scroll)&&(Nt=it(t,!0)));var f=0,p=Nt;do{var E=p,b=C(E),S=b.top,M=b.bottom,U=b.left,P=b.right,G=b.width,D=b.height,J=void 0,tt=void 0,ht=E.scrollWidth,Ft=E.scrollHeight,L=h(E),kt=E.scrollLeft,st=E.scrollTop;E===l?(J=G<ht&&("auto"===L.overflowX||"scroll"===L.overflowX||"visible"===L.overflowX),tt=D<Ft&&("auto"===L.overflowY||"scroll"===L.overflowY||"visible"===L.overflowY)):(J=G<ht&&("auto"===L.overflowX||"scroll"===L.overflowX),tt=D<Ft&&("auto"===L.overflowY||"scroll"===L.overflowY));var Rt=J&&(Math.abs(P-i)<=a&&kt+G<ht)-(Math.abs(U-i)<=a&&!!kt),ot=tt&&(Math.abs(M-r)<=a&&st+D<Ft)-(Math.abs(S-r)<=a&&!!st);if(!x[f])for(var pt=0;pt<=f;pt++)x[pt]||(x[pt]={});(x[f].vx!=Rt||x[f].vy!=ot||x[f].el!==E)&&(x[f].el=E,x[f].vx=Rt,x[f].vy=ot,clearInterval(x[f].pid),(0!=Rt||0!=ot)&&(u=!0,x[f].pid=setInterval(function(){n&&0===this.layer&&g.active._onTouchMove(Jt);var Bt=x[this.layer].vy?x[this.layer].vy*s:0,lt=x[this.layer].vx?x[this.layer].vx*s:0;"function"==typeof d&&"continue"!==d.call(g.dragged.parentNode[F],lt,Bt,o,Jt,x[this.layer].el)||Fe(x[this.layer].el,lt,Bt)}.bind({layer:f}),24))),f++}while(e.bubbleScroll&&p!==l&&(p=it(p,!1)));ve=u}},30),ze=function(e){var t=e.originalEvent,n=e.putSortable,i=e.dragEl,a=e.dispatchSortableEvent,l=e.unhideGhostForTarget;if(t){var u=n||e.activeSortable;(0,e.hideGhostForTarget)();var d=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:t,f=document.elementFromPoint(d.clientX,d.clientY);l(),u&&!u.el.contains(f)&&(a("spill"),this.onSpill({dragEl:i,putSortable:n}))}};function Ee(){}function Se(){}Ee.prototype={startIndex:null,dragStart:function(e){this.startIndex=e.oldDraggableIndex},onSpill:function(e){var t=e.dragEl,n=e.putSortable;this.sortable.captureAnimationState(),n&&n.captureAnimationState();var i=gt(this.sortable.el,this.startIndex,this.options);i?this.sortable.el.insertBefore(t,i):this.sortable.el.appendChild(t),this.sortable.animateAll(),n&&n.animateAll()},drop:ze},K(Ee,{pluginName:"revertOnSpill"}),Se.prototype={onSpill:function(e){var t=e.dragEl,i=e.putSortable||this.sortable;i.captureAnimationState(),t.parentNode&&t.parentNode.removeChild(t),i.animateAll()},drop:ze},K(Se,{pluginName:"removeOnSpill"}),g.mount(new function Tn(){function o(){for(var e in this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0},this)"_"===e.charAt(0)&&"function"==typeof this[e]&&(this[e]=this[e].bind(this))}return o.prototype={dragStarted:function(t){var n=t.originalEvent;this.sortable.nativeDraggable?w(document,"dragover",this._handleAutoScroll):w(document,this.options.supportPointer?"pointermove":n.touches?"touchmove":"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(t){var n=t.originalEvent;!this.options.dragOverBubble&&!n.rootEl&&this._handleAutoScroll(n)},drop:function(){this.sortable.nativeDraggable?y(document,"dragover",this._handleAutoScroll):(y(document,"pointermove",this._handleFallbackAutoScroll),y(document,"touchmove",this._handleFallbackAutoScroll),y(document,"mousemove",this._handleFallbackAutoScroll)),Ke(),te(),function fn(){clearTimeout(Dt),Dt=void 0}()},nulling:function(){Jt=me=Nt=ve=xt=be=ye=null,x.length=0},_handleFallbackAutoScroll:function(t){this._handleAutoScroll(t,!0)},_handleAutoScroll:function(t,n){var i=this,r=(t.touches?t.touches[0]:t).clientX,a=(t.touches?t.touches[0]:t).clientY,s=document.elementFromPoint(r,a);if(Jt=t,n||this.options.forceAutoScrollFallback||Et||nt||St){we(t,this.options,s,n);var l=it(s,!0);ve&&(!xt||r!==be||a!==ye)&&(xt&&Ke(),xt=setInterval(function(){var u=it(document.elementFromPoint(r,a),!0);u!==l&&(l=u,te()),we(t,i.options,u,n)},10),be=r,ye=a)}else{if(!this.options.bubbleScroll||it(s,!0)===Z())return void te();we(t,this.options,it(s,!1),!1)}}},K(o,{pluginName:"scroll",initializeByDefault:!0})}),g.mount(Se,Ee);const De=g,Ve=new R.InjectionToken("Global config for sortablejs");class xn{constructor(e){this.target=e}insert(e,t){this.isFormArray?this.target.insert(e,t):this.target.splice(e,0,t)}get(e){return this.isFormArray?this.target.at(e):this.target[e]}remove(e){let t;return this.isFormArray?(t=this.target.at(e),this.target.removeAt(e)):t=this.target.splice(e,1)[0],t}get isFormArray(){return!!this.target.at&&!!this.target.insert&&!!this.target.reset}}class _e{constructor(e){this.bindings=e.map(t=>new xn(t))}injectIntoEvery(e,t){this.bindings.forEach((n,i)=>n.insert(e,t[i]))}getFromEvery(e){return this.bindings.map(t=>t.get(e))}extractFromEvery(e){return this.bindings.map(t=>t.remove(e))}get provided(){return!!this.bindings.length}}let Mn=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275prov=(0,R.\u0275\u0275defineInjectable)({factory:function(){return new o},token:o,providedIn:"root"}),o})(),jn=(()=>{class o{constructor(t,n,i,r,a){this.globalConfig=t,this.service=n,this.element=i,this.zone=r,this.renderer=a,this.sortablejsInit=new R.EventEmitter}ngOnInit(){De&&De.create&&this.create()}ngOnChanges(t){const n=t.sortablejsOptions;if(n&&!n.isFirstChange()){const i=n.previousValue,r=n.currentValue;Object.keys(r).forEach(a=>{r[a]!==i[a]&&this.sortableInstance.option(a,this.options[a])})}}ngOnDestroy(){this.sortableInstance&&this.sortableInstance.destroy()}create(){const t=this.sortablejsContainer?this.element.nativeElement.querySelector(this.sortablejsContainer):this.element.nativeElement;setTimeout(()=>{this.sortableInstance=De.create(t,this.options),this.sortablejsInit.emit(this.sortableInstance)},0)}getBindings(){return this.sortablejs?this.sortablejs instanceof _e?this.sortablejs:new _e([this.sortablejs]):new _e([])}get options(){return Object.assign(Object.assign({},this.optionsWithoutEvents),this.overridenOptions)}get optionsWithoutEvents(){return Object.assign(Object.assign({},this.globalConfig||{}),this.sortablejsOptions||{})}proxyEvent(t,...n){this.zone.run(()=>{this.optionsWithoutEvents&&this.optionsWithoutEvents[t]&&this.optionsWithoutEvents[t](...n)})}get isCloning(){return"clone"===this.sortableInstance.options.group.checkPull(this.sortableInstance,this.sortableInstance)}clone(t){return(this.sortablejsCloneFunction||(n=>n))(t)}get overridenOptions(){return{onAdd:t=>{this.service.transfer=n=>{this.getBindings().injectIntoEvery(t.newIndex,n),this.proxyEvent("onAdd",t)},this.proxyEvent("onAddOriginal",t)},onRemove:t=>{const n=this.getBindings();n.provided&&(this.isCloning?(this.service.transfer(n.getFromEvery(t.oldIndex).map(i=>this.clone(i))),this.renderer.removeChild(t.item.parentNode,t.item),this.renderer.insertBefore(t.clone.parentNode,t.item,t.clone),this.renderer.removeChild(t.clone.parentNode,t.clone)):this.service.transfer(n.extractFromEvery(t.oldIndex)),this.service.transfer=null),this.proxyEvent("onRemove",t)},onUpdate:t=>{const n=this.getBindings(),i=(o=>o.hasOwnProperty("newDraggableIndex")&&o.hasOwnProperty("oldDraggableIndex")?{new:o.newDraggableIndex,old:o.oldDraggableIndex}:{new:o.newIndex,old:o.oldIndex})(t);n.injectIntoEvery(i.new,n.extractFromEvery(i.old)),this.proxyEvent("onUpdate",t)}}}}return o.\u0275fac=function(t){return new(t||o)(R.\u0275\u0275directiveInject(Ve,8),R.\u0275\u0275directiveInject(Mn),R.\u0275\u0275directiveInject(R.ElementRef),R.\u0275\u0275directiveInject(R.NgZone),R.\u0275\u0275directiveInject(R.Renderer2))},o.\u0275dir=R.\u0275\u0275defineDirective({type:o,selectors:[["","sortablejs",""]],inputs:{sortablejs:"sortablejs",sortablejsContainer:"sortablejsContainer",sortablejsOptions:"sortablejsOptions",sortablejsCloneFunction:"sortablejsCloneFunction"},outputs:{sortablejsInit:"sortablejsInit"},features:[R.\u0275\u0275NgOnChangesFeature]}),o})(),Fn=(()=>{class o{static forRoot(t){return{ngModule:o,providers:[{provide:Ve,useValue:t}]}}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=R.\u0275\u0275defineNgModule({type:o}),o.\u0275inj=R.\u0275\u0275defineInjector({}),o})()}}]);