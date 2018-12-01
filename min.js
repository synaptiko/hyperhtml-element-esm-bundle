/*! (c) Andrea Giammarchi (ISC) */var hyperHTML=function(e){function t(){return this}function n(e){return e.join(U).replace(oe,o).replace(ie,r)}function r(e,t,n,r){return"<"+t+n.replace(ae,i)+r}function i(e,t,n){return t+(n||'"')+Z+(n||'"')}function o(e,t,n){return Y.test(t)?e:"<"+t+n+"></"+t+">"}function a(e,t,n){return{type:e,name:n,node:t,path:function(e){var t,n=[];switch(e.nodeType){case J:case q:t=e;break;case V:t=e.parentNode,l(n,t,e);break;default:t=e.ownerElement}for(;t=(e=t).parentNode;)l(n,t,e);return n}(t)}}function s(e,t){for(var n=t.length,r=0;r<n;)e=e.childNodes[t[r++]];return e}function u(e,t,n){for(var r=e.childNodes,i=r.length,o=0;o<i;){var s=r[o++];switch(s.nodeType){case J:c(s,t,n),u(s,t,n);break;case V:s.textContent===Z&&(n.shift(),t.push(X.test(e.nodeName)?a("text",e):a("any",s)));break;case Q:X.test(e.nodeName)&&se.call(s.textContent)===U&&(n.shift(),t.push(a("text",e)))}}}function c(t,n,r){for(var i=new N,o=t.attributes,s=[],u=s.slice.call(o,0),c=u.length,l=0;l<c;){var f=u[l++];if(f.value===Z){var d=f.name;if(!i.has(d)){var h=r.shift().replace(/^(?:|[\S\s]*?\s)(\S+?)\s*=\s*['"]?$/,"$1"),p=o[h]||o[h.toLowerCase()];i.set(d,p),n.push(a("attr",p,h))}s.push(f)}}for(c=s.length,l=0;l<c;){var v=s[l++];/^id$/i.test(v.name)?t.removeAttribute(v.name):t.removeAttributeNode(v)}var y=t.nodeName;if(/^script$/i.test(y)){var m=e.createElement(y);for(c=o.length,l=0;l<c;)m.setAttributeNode(o[l++].cloneNode(!0));m.textContent=t.textContent,t.parentNode.replaceChild(m,t)}}function l(e,t,n){e.unshift(e.indexOf.call(t.childNodes,n))}function f(e,t){var r=n(t),i=e.transform;i&&(r=i(r));var o=K(r,e.type),a=[];u(o,a,t.slice(0));var c={content:o,updates:function(n){for(var r=[],i=a.length,o=0;o<i;){var u=a[o++],c=s(n,u.path);switch(u.type){case"any":r.push(e.any(c,[]));break;case"attr":r.push(e.attribute(c,u.name,u.node));break;case"text":r.push(e.text(c)),c.textContent=""}}return function(){var e=arguments.length,o=e-1,a=1;if(i!==o)throw new Error(o+" values instead of "+i+"\n"+t.join(", "));for(;a<e;)r[a-1](arguments[a++]);return n}}};return ue.set(t,c),c}function d(t,n){var r=ue.get(n)||f(t,n),i=z.call(e,r.content,!0),o={content:i,template:n,updates:r.updates(i)};return ce.set(t,o),o}function h(e){this.childNodes=e,this.length=e.length,this.first=e[0],this.last=e[this.length-1],this._=null}function p(e){return this.type=e,function(e){return function(t){var n=ce.get(e);return null!=n&&n.template===t||(n=d(e,t)),n.updates.apply(null,arguments),n.content}}(this)}function v(){var e=Te.get(this),t=me.apply(null,arguments);return e&&e.template===t[0]?e.tagger.apply(null,t):function(){var e=me.apply(null,arguments),t=new p(de in this?"svg":"html");Te.set(this,{tagger:t,template:e[0]}),this.textContent="",this.appendChild(t.apply(null,e))}.apply(this,t),this}function y(e){return arguments.length<2?null==e?Ce("html"):"string"==typeof e?y.wire(null,e):"raw"in e?Ce("html")(e):"nodeType"in e?y.bind(e):ke(e,"html"):("raw"in e?Ce("html"):y.wire).apply(null,arguments)}/*! (c) Andrea Giammarchi - ISC */var m={};try{m.WeakMap=WeakMap}catch(e){m.WeakMap=function(e,t){function n(t){i(this,"_",{value:"_@ungap/weakmap"+e++}),t&&t.forEach(r,this)}function r(e){this.set(e[0],e[1])}var i=t.defineProperty,o=t.hasOwnProperty,a=n.prototype;return a.delete=function(e){return this.has(e)&&delete e[this._]},a.get=function(e){return this.has(e)?e[this._]:void 0},a.has=function(e){return o.call(e,this._)},a.set=function(e,t){return i(e,this._,{configurable:!0,value:t}),this},n}(Math.random(),Object)}var g=m.WeakMap,b={};try{b.WeakSet=WeakSet}catch(e){!function(e,t){function n(){t(this,"_",{value:"_@ungap/weakmap"+e++})}var r=n.prototype;r.add=function(e){return this.has(e)||t(e,this._,{value:!0,configurable:!0}),this},r.has=function(e){return this.hasOwnProperty.call(e,this._)},r.delete=function(e){return this.has(e)&&delete e[this._]},b.WeakSet=n}(Math.random(),Object.defineProperty)}var w=b.WeakSet,E={};try{E.Map=Map}catch(e){E.Map=function(){function e(e){return-1<(t=n.indexOf(e))}var t=0,n=[],r=[];return{delete:function(i){var o=e(i);return o&&(n.splice(t,1),r.splice(t,1)),o},get:function(n){return e(n)?r[t]:void 0},has:function(t){return e(t)},set:function(i,o){return r[e(i)?t:n.push(i)-1]=o,this}}}}var N=E.Map,_=function(e,t,n,r,i,o){if(i-r<2)t.insertBefore(e(n[r],1),o);else{for(var a=t.ownerDocument.createDocumentFragment();r<i;)a.appendChild(e(n[r++],1));t.insertBefore(a,o)}},O=function(e,t){return e==t},P=function(e){return e},x=function(e,t,n,r,i,o,a){var s=o-i;if(s<1)return-1;for(;n-t>=s;){for(var u=t,c=i;u<n&&c<o&&a(e[u],r[c]);)u++,c++;if(c===o)return t;t=u+1}return-1},C=function(e,t,n,r,i){return n<r?e(t[n],0):0<n?e(t[n-1],-0).nextSibling:i},k=function(e,t,n,r,i){if(i-r<2)t.removeChild(e(n[r],-1));else{var o=t.ownerDocument.createRange();o.setStartBefore(e(n[r],-1)),o.setEndAfter(e(n[i-1],-1)),o.deleteContents()}},A=function(e,t,n){for(var r=1,i=t;r<i;){var o=(r+i)/2>>>0;n<e[o]?i=o:r=o+1}return r},T=function(e,t,n,r,i,o,a,s,u,c,l,f,d){!function(e,t,n,r,i,o,a,s,u){for(var c=new N,l=e.length,f=a,d=0;d<l;)switch(e[d++]){case 0:i++,f++;break;case 1:c.set(r[i],1),_(t,n,r,i++,i,f<s?t(o[f],1):u);break;case-1:f++}for(d=0;d<l;)switch(e[d++]){case 0:a++;break;case-1:c.has(o[a])?a++:k(t,n,o,a++,a)}}(function(e,t,n,r,i,o,a){var s=n+o,u=[],c=void 0,l=void 0,f=void 0,d=void 0,h=void 0,p=void 0,v=void 0;e:for(c=0;c<=s;c++){if(c>50)return null;for(v=c-1,h=c?u[c-1]:[0,0],p=u[c]=[],l=-c;l<=c;l+=2){for(f=(d=l===-c||l!==c&&h[v+l-1]<h[v+l+1]?h[v+l+1]:h[v+l-1]+1)-l;d<o&&f<n&&a(r[i+d],e[t+f]);)d++,f++;if(d===o&&f===n)break e;p[c+l]=d}}var y=Array(c/2+s/2),m=y.length-1;for(c=u.length-1;c>=0;c--){for(;d>0&&f>0&&a(r[i+d-1],e[t+f-1]);)y[m--]=0,d--,f--;if(!c)break;v=c-1,h=c?u[c-1]:[0,0],(l=d-f)==-c||l!==c&&h[v+l-1]<h[v+l+1]?(f--,y[m--]=1):(d--,y[m--]=-1)}return y}(n,r,o,a,s,c,f)||function(e,t,n,r,i,o,a,s){var u=0,c=r<s?r:s,l=Array(c++),f=Array(c);f[0]=-1;for(var d=1;d<c;d++)f[d]=a;for(var h=new N,p=o;p<a;p++)h.set(i[p],p);for(var v=t;v<n;v++){var y=h.get(e[v]);null!=y&&-1<(u=A(f,c,y))&&(f[u]=y,l[u]={newi:v,oldi:y,prev:l[u-1]})}for(u=--c,--a;f[u]>a;)--u;c=s+r-u;var m=Array(c),g=l[u];for(--n;g;){for(var b=g,w=b.newi,E=b.oldi;n>w;)m[--c]=1,--n;for(;a>E;)m[--c]=-1,--a;m[--c]=0,--n,--a,g=g.prev}for(;n>=t;)m[--c]=1,--n;for(;a>=o;)m[--c]=-1,--a;return m}(n,r,i,o,a,s,u,c),e,t,n,r,a,s,l,d)},$=function(e,t,n,r){r||(r={});for(var i=r.compare||O,o=r.node||P,a=null==r.before?null:o(r.before,0),s=t.length,u=s,c=0,l=n.length,f=0;c<u&&f<l&&i(t[c],n[f]);)c++,f++;for(;c<u&&f<l&&i(t[u-1],n[l-1]);)u--,l--;var d=c===u,h=f===l;if(d&&h)return n;if(d&&f<l)return _(o,e,n,f,l,C(o,t,c,s,a)),n;if(h&&c<u)return k(o,e,t,c,u),n;var p=u-c,v=l-f,y=-1;if(p<v){if(-1<(y=x(n,f,l,t,c,u,i)))return _(o,e,n,f,y,o(t[c],0)),_(o,e,n,y+p,l,C(o,t,u,s,a)),n}else if(v<p&&-1<(y=x(t,c,u,n,f,l,i)))return k(o,e,t,c,y),k(o,e,t,y+v,u),n;return p<2||v<2?(_(o,e,n,f,l,o(t[c],0)),k(o,e,t,c,u),n):p===v&&function(e,t,n,r,i,o){for(;r<i&&o(n[r],e[t-1]);)r++,t--;return 0===t}(n,l,t,c,u,i)?(_(o,e,n,f,l,C(o,t,u,s,a)),n):(T(o,e,n,f,l,v,t,c,u,p,s,i,a),n)},L={};try{L.CustomEvent=new CustomEvent(".").constructor}catch(t){L.CustomEvent=function(t,n){n||(n={});var r=!!n.bubbles,i=!!n.cancelable,o=e.createEvent("Event");o.initEvent(t,r,i),o.detail=n.detail;try{o.bubbles=r,o.cancelable=i}catch(o){}return o}}var S=L.CustomEvent,M=function(e,t){var n="_"+e+"$";return{get:function(){return this[n]||H(this,n,t.call(this,e))},set:function(e){H(this,n,e)}}},H=function(e,t,n){return Object.defineProperty(e,t,{configurable:!0,value:"function"==typeof n?function(){return e._wire$=n.apply(this,arguments)}:n})[t]},j={},R={},D=[],W=R.hasOwnProperty,B=0,F={attributes:j,define:function(e,t){e.indexOf("-")<0?(e in R||(B=D.push(e)),R[e]=t):j[e]=t},invoke:function(e,t){for(var n=0;n<B;n++){var r=D[n];if(W.call(e,r))return R[r](e[r],t)}}},I=Array.isArray||function(e){var t=e.call([]);return function(n){return e.call(n)===t}}({}.toString),K=function(e){function t(e,t){for(var n=t.length;n--;)e.appendChild(t[0])}function n(t){return t===i?e.createDocumentFragment():e.createElement(t)}function r(e){var r=n(i),o=n("div");return o.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>",t(r,o.firstChild.childNodes),r}var i="fragment",o="content"in n("template")?function(e){var t=n("template");return t.innerHTML=e,t.content}:function(e){var r=n(i),o=n("template"),a=null;if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(e)){var s=RegExp.$1;o.innerHTML="<table>"+e+"</table>",a=o.querySelectorAll(s)}else o.innerHTML=e,a=o.childNodes;return t(r,a),r};return function(e,t){return("svg"===t?r:o)(e)}}(e),z=function(e,t,n,r,i){var o="importNode"in e,a=e.createDocumentFragment();return a.appendChild(e.createTextNode("g")),a.appendChild(e.createTextNode("")),(o?e.importNode(a,!0):a.cloneNode(!0)).childNodes.length<2?function e(t,n){for(var r=t.cloneNode(),i=t.childNodes||[],o=i.length,a=0;n&&a<o;a++)r.appendChild(e(i[a],n));return r}:o?e.importNode:function(e,t){return e.cloneNode(!!t)}}(e),G="content"in e.createElement("template"),Z=(G?"-":"_dt: ")+Math.random().toFixed(6)+(G?"%":";"),U="\x3c!--"+Z+"--\x3e",V=8,q=11,J=1,Q=3,X=/^(?:style|textarea)$/i,Y=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i,ee=" \\f\\n\\r\\t",te="[ "+ee+"]+[^  \\f\\n\\r\\t\\/>\"'=]+",ne="<([A-Za-z]+[A-Za-z0-9:_-]*)((?:",re="(?:\\s*=\\s*(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|[^  \\f\\n\\r\\t\\/>\"'=]+))?)",ie=new RegExp(ne+te+re+"+)([ "+ee+"]*/?>)","g"),oe=new RegExp(ne+te+re+"*)([ "+ee+"]*/>)","g"),ae=new RegExp("("+te+"\\s*=\\s*)(['\"]?)"+U+"\\2","gi"),se="".trim||function(){return String(this).replace(/^\s+|\s+/g,"")},ue=new g,ce=new g,le=function(){function e(e,t,n){return t+"-"+n.toLowerCase()}function t(t){var n,r=[];for(n in t)r.push(n.replace(i,e),":",t[n],";");return r.join("")}function n(e,n){var i,o;return function(a){var s,u,c,l;switch(typeof a){case"object":if(a){if("object"===i){if(!n&&o!==a)for(u in o)u in a||(e[u]="")}else n?e.value="":e.cssText="";for(u in s=n?{}:e,a)c="number"!=typeof(l=a[u])||r.test(u)?l:l+"px",!n&&/^--/.test(u)?s.setProperty(u,c):s[u]=c;i="object",n?e.value=t(o=s):o=a;break}default:o!=a&&(i="string",o=a,n?e.value=a||"":e.cssText=a||"")}}}var r=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,i=/([^A-Z])([A-Z]+)/g;return function(e,t){return"ownerSVGElement"in e?function(e,t){var r;return t?r=t.cloneNode(!0):(e.setAttribute("style","--hyper:style;"),r=e.getAttributeNode("style")),r.value="",e.setAttributeNode(r),n(r,!0)}(e,t):n(e.style,!1)}}(),fe=e.defaultView,de="ownerSVGElement",he=function(){var t=!1,n=function(r){if(!("raw"in r)||r.propertyIsEnumerable("raw")||!Object.isFrozen(r.raw)||/Firefox\/(\d+)/.test((e.defaultView.navigator||{}).userAgent)&&parseFloat(RegExp.$1)<55){var i={};return(n=function(e){var t="raw"+e.join("raw");return i[t]||(i[t]=e)})(r)}return t=!0,r};return function(e){return t?e:n(e)}}(),pe=function(e){return e.ownerDocument||e},ve=function(e){return pe(e).createDocumentFragment()},ye="append"in ve(e)?function(e,t){e.append.apply(e,t)}:function(e,t){for(var n=t.length,r=0;r<n;r++)e.appendChild(t[r])},me=function(e){for(var t=[he(e)],n=1,r=arguments.length;n<r;n++)t[n]=arguments[n];return t},ge=[].slice;h.prototype.valueOf=function(e){var t=null==this._;return t&&(this._=ve(this.first)),(t||e)&&ye(this._,this.childNodes),this._},h.prototype.remove=function(){this._=null;var e=this.first,t=this.last;if(2===this.length)t.parentNode.removeChild(t);else{var n=pe(e).createRange();n.setStartBefore(this.childNodes[1]),n.setEndAfter(t),n.deleteContents()}return e};var be=/*! (c) Andrea Giammarchi */
function(e){var t="connected",n="dis"+t,r=e.Event,i=e.WeakSet,o=!0,a=new i;return function(e){return o&&(o=!o,function(e){function o(e){l=new c;for(var r,i=e.length,o=0;o<i;o++)s((r=e[o]).removedNodes,n,t),s(r.addedNodes,t,n);l=null}function s(e,t,n){for(var i,o=new r(t),a=e.length,s=0;s<a;1===(i=e[s++]).nodeType&&u(i,o,t,n));}function u(e,t,n,r){a.has(e)&&!l[n].has(e)&&(l[r].delete(e),l[n].add(e),e.dispatchEvent(t));for(var i=e.children||[],o=i.length,s=0;s<o;u(i[s++],t,n,r));}function c(){this[t]=new i,this[n]=new i}var l=null;try{new MutationObserver(o).observe(e,{subtree:!0,childList:!0})}catch(t){var f=0,d=[],h=function(e){d.push(e),clearTimeout(f),f=setTimeout(function(){o(d.splice(f=0,d.length))},0)};e.addEventListener("DOMNodeRemoved",function(e){h({addedNodes:[],removedNodes:[e.target]})},!0),e.addEventListener("DOMNodeInserted",function(e){h({addedNodes:[e.target],removedNodes:[]})},!0)}}(e.ownerDocument)),a.add(e),e}}({Event:S,WeakSet:w}),we=function(e){return{html:e}},Ee=function e(t,n){return"ELEMENT_NODE"in t?t:t.constructor===h?1/n<0?n?t.remove():t.last:n?t.valueOf(!0):t.first:e(t.render(),n)},Ne=function(e){return"ELEMENT_NODE"in e||e instanceof h||e instanceof t},_e=function(e,t){t(e.placeholder),"text"in e?Promise.resolve(e.text).then(String).then(t):"any"in e?Promise.resolve(e.any).then(t):"html"in e?Promise.resolve(e.html).then(we).then(t):Promise.resolve(F.invoke(e,t)).then(t)},Oe=function(e){return null!=e&&"then"in e},Pe=/^(?:form|list)$/i;p.prototype={attribute:function(e,t,n){var r=de in e,i=void 0;if("style"===t)return le(e,n,r);if(/^on/.test(t)){var o=t.slice(2);return"connected"===o||"disconnected"===o?be(e):t.toLowerCase()in e&&(o=o.toLowerCase()),function(t){i!==t&&(i&&e.removeEventListener(o,i,!1),i=t,t&&e.addEventListener(o,t,!1))}}if("data"===t||!r&&t in e&&!Pe.test(t))return function(n){i!==n&&(i=n,e[t]!==n&&(e[t]=n,null==n&&e.removeAttribute(t)))};if(t in F.attributes)return function(n){i=F.attributes[t](e,n),e.setAttribute(t,null==i?"":i)};var a=!1,s=n.cloneNode(!0);return function(t){i!==t&&(i=t,s.value!==t&&(null==t?(a&&(a=!1,e.removeAttributeNode(s)),s.value=t):(s.value=t,a||(a=!0,e.setAttributeNode(s)))))}},any:function(e,t){var n={node:Ee,before:e},r=de in e?"svg":"html",i=!1,o=void 0;return function a(s){switch(typeof s){case"string":case"number":case"boolean":i?o!==s&&(o=s,t[0].textContent=s):(i=!0,o=s,t=$(e.parentNode,t,[function(e,t){return pe(e).createTextNode(t)}(e,s)],n));break;case"function":a(s(e));break;case"object":case"undefined":if(null==s){i=!1,t=$(e.parentNode,t,[],n);break}default:if(i=!1,o=s,I(s))if(0===s.length)t.length&&(t=$(e.parentNode,t,[],n));else switch(typeof s[0]){case"string":case"number":case"boolean":a({html:s});break;case"object":if(I(s[0])&&(s=s.concat.apply([],s)),Oe(s[0])){Promise.all(s).then(a);break}default:t=$(e.parentNode,t,s,n)}else Ne(s)?t=$(e.parentNode,t,11===s.nodeType?ge.call(s.childNodes):[s],n):Oe(s)?s.then(a):"placeholder"in s?_e(s,a):"text"in s?a(String(s.text)):"any"in s?a(s.any):"html"in s?t=$(e.parentNode,t,ge.call(K([].concat(s.html).join(""),r).childNodes),n):a("length"in s?ge.call(s):F.invoke(s,a))}}},text:function(e){var t=void 0;return function n(r){if(t!==r){t=r;var i=typeof r;"object"===i&&r?Oe(r)?r.then(n):"placeholder"in r?_e(r,n):n("text"in r?String(r.text):"any"in r?r.any:"html"in r?[].concat(r.html).join(""):"length"in r?ge.call(r).join(""):F.invoke(r,n)):"function"===i?n(r(e)):e.textContent=null==r?"":r}}}};var xe=new g,Ce=function(e){var t=void 0,n=void 0,r=void 0;return function(){var i=me.apply(null,arguments);return r!==i[0]?(r=i[0],n=new p(e),t=Ae(n.apply(n,i))):n.apply(n,i),t}},ke=function(e,t){var n=t.indexOf(":"),r=xe.get(e),i=t;return-1<n&&(i=t.slice(n+1),t=t.slice(0,n)||"html"),r||xe.set(e,r={}),r[i]||(r[i]=Ce(t))},Ae=function(e){for(var t=e.childNodes,n=t.length,r=[],i=0;i<n;i++){var o=t[i];1!==o.nodeType&&0===se.call(o.textContent).length||r.push(o)}return 1===r.length?r[0]:new h(r)},Te=new g,$e=F.define,Le=p.prototype;return y.Component=t,y.bind=function(e){return v.bind(e)},y.define=$e,y.diff=$,y.hyper=y,y.observe=be,y.tagger=Le,y.wire=function(e,t){return null==e?Ce(t||"html"):ke(e,t||"html")},y._={global:fe,WeakMap:g,WeakSet:w},function(e){var n=new g,r=Object.create,i=function(e,t){var n={w:null,p:null};return t.set(e,n),n};Object.defineProperties(t,{for:{configurable:!0,value:function(e,t){return function(e,t,n,o){var a=t.get(e)||i(e,t);switch(typeof o){case"object":case"function":var s=a.w||(a.w=new g);return s.get(o)||function(e,t,n){return e.set(t,n),n}(s,o,new e(n));default:var u=a.p||(a.p=r(null));return u[o]||(u[o]=new e(n))}}(this,n.get(e)||function(e){var t=new N;return n.set(e,t),t}(e),e,null==t?"default":t)}}}),Object.defineProperties(t.prototype,{handleEvent:{value:function(e){var t=e.currentTarget;this["getAttribute"in t&&t.getAttribute("data-call")||"on"+e.type](e)}},html:M("html",e),svg:M("svg",e),state:M("state",function(){return this.defaultState}),defaultState:{get:function(){return{}}},dispatch:{value:function(e,t){var n=this._wire$;if(n){var r=new S(e,{bubbles:!0,cancelable:!0,detail:t});return r.component=this,(n.dispatchEvent?n:n.childNodes[0]).dispatchEvent(r)}return!1}},setState:{value:function(e,t){var n=this.state,r="function"==typeof e?e.call(this,n):e;for(var i in r)n[i]=r[i];return!1!==t&&this.render(),this}}})}(Ce),y}(document);const{Component:Component,bind:bind,define:define,diff:diff,hyper:hyper,wire:wire}=hyperHTML,ATTRIBUTE_CHANGED_CALLBACK="attributeChangedCallback",O=Object,classes=[],defineProperty=O.defineProperty,getOwnPropertyDescriptor=O.getOwnPropertyDescriptor,getOwnPropertyNames=O.getOwnPropertyNames,getOwnPropertySymbols=O.getOwnPropertySymbols||(()=>[]),getPrototypeOf=O.getPrototypeOf||(e=>e.__proto__),ownKeys="object"==typeof Reflect&&Reflect.ownKeys||(e=>getOwnPropertyNames(e).concat(getOwnPropertySymbols(e))),setPrototypeOf=O.setPrototypeOf||((e,t)=>(e.__proto__=t,e)),camel=e=>e.replace(/-([a-z])/g,(e,t)=>t.toUpperCase());
/*! (C) 2017-2018 Andrea Giammarchi - ISC Style License */class HyperHTMLElement extends HTMLElement{static define(e,t){const n=this,r=n.prototype,i=r[ATTRIBUTE_CHANGED_CALLBACK],o=!!i,a=n.booleanAttributes||[];a.forEach(e=>{e in r||defineProperty(r,camel(e),{configurable:!0,get(){return this.hasAttribute(e)},set(t){t&&"false"!==t?this.setAttribute(e,t):this.removeAttribute(e)}})});const s=n.observedAttributes||[];s.forEach(e=>{e in r||defineProperty(r,camel(e),{configurable:!0,get(){return this.getAttribute(e)},set(t){null==t?this.removeAttribute(e):this.setAttribute(e,t)}})});const u=a.concat(s);u.length&&defineProperty(n,"observedAttributes",{get:()=>u});const c=r.created||function(){this.render()};defineProperty(r,"_init$",{configurable:!0,writable:!0,value:!0}),defineProperty(r,ATTRIBUTE_CHANGED_CALLBACK,{configurable:!0,value:function e(t,n,r){if(this._init$&&(checkReady.call(this,c),this._init$))return this._init$$.push(e.bind(this,t,n,r));o&&n!==r&&i.apply(this,arguments)}});const l=r.connectedCallback,f=!!l;if(defineProperty(r,"connectedCallback",{configurable:!0,value:function e(){if(this._init$&&(checkReady.call(this,c),this._init$))return this._init$$.push(e.bind(this));f&&l.apply(this,arguments)}}),getOwnPropertyNames(r).forEach(e=>{if(/^handle[A-Z]/.test(e)){const t="_"+e+"$",n=r[e];defineProperty(r,e,{configurable:!0,get(){return this[t]||(this[t]=n.bind(this))}})}}),"handleEvent"in r||defineProperty(r,"handleEvent",{configurable:!0,value(e){this[(e.currentTarget.dataset||{}).call||"on"+e.type](e)}}),t&&t.extends){const i=document.createElement(t.extends).constructor,o=class extends i{},a=getPrototypeOf(n);ownKeys(a).filter(e=>["length","name","arguments","caller","prototype"].indexOf(e)<0).forEach(e=>defineProperty(o,e,getOwnPropertyDescriptor(a,e))),ownKeys(a.prototype).forEach(e=>defineProperty(o.prototype,e,getOwnPropertyDescriptor(a.prototype,e))),setPrototypeOf(n,o),setPrototypeOf(r,o.prototype),customElements.define(e,n,t)}else customElements.define(e,n);return classes.push(n),n}get html(){return this._html$||(this.html=bind(this.shadowRoot||this._shadowRoot||this))}set html(e){defineProperty(this,"_html$",{configurable:!0,value:e})}render(){}get defaultState(){return{}}get state(){return this._state$||(this.state=this.defaultState)}set state(e){defineProperty(this,"_state$",{configurable:!0,value:e})}setState(e,t){const n=this.state,r="function"==typeof e?e.call(this,n):e;for(const e in r)n[e]=r[e];return!1!==t&&this.render(),this}}HyperHTMLElement.Component=Component,HyperHTMLElement.bind=bind,HyperHTMLElement.intent=define,HyperHTMLElement.wire=wire,HyperHTMLElement.hyper=hyper;try{Symbol.hasInstance&&classes.push(defineProperty(HyperHTMLElement,Symbol.hasInstance,{enumerable:!1,configurable:!0,value:e=>classes.some(isPrototypeOf,getPrototypeOf(e))}))}catch(e){}const dom={type:"DOMContentLoaded",handleEvent(){dom.ready()?(document.removeEventListener(dom.type,dom,!1),dom.list.splice(0).forEach(invoke)):setTimeout(dom.handleEvent)},ready:()=>"complete"===document.readyState,list:[]};function checkReady(e){if(dom.ready()||isReady.call(this,e)){if(this._init$){const t=this._init$$;t&&delete this._init$$,e.call(defineProperty(this,"_init$",{value:!1})),t&&t.forEach(invoke)}}else this.hasOwnProperty("_init$$")||defineProperty(this,"_init$$",{configurable:!0,value:[]}),dom.list.push(checkReady.bind(this,e))}function invoke(e){e()}function isPrototypeOf(e){return this===e.prototype}function isReady(e){let t=this;do{if(t.nextSibling)return!0}while(t=t.parentNode);return setTimeout(checkReady.bind(this,e)),!1}dom.ready()||document.addEventListener(dom.type,dom,!1);export default HyperHTMLElement;export{Component,bind,define,hyper,wire};