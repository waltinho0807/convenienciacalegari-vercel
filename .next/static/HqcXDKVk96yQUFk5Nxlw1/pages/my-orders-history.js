(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{C1Jb:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/my-orders-history",function(){return r("bcJn")}])},NyWP:function(e,t,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var i=r("iVi/"),o=r("U0US"),a=function(){return"undefined"!==typeof window};function s(e,t){var r=e.sameSite===t.sameSite;return"string"===typeof e.sameSite&&"string"===typeof t.sameSite&&(r=e.sameSite.toLowerCase()===t.sameSite.toLowerCase()),function(e,t){var r=Object.getOwnPropertyNames(e),n=Object.getOwnPropertyNames(t);if(r.length!==n.length)return!1;for(var i=0;i<r.length;i++){var o=r[i];if(e[o]!==t[o])return!1}return!0}(n(n({},e),{sameSite:void 0}),n(n({},t),{sameSite:void 0}))&&r}function u(e,t){return e&&e.req&&e.req.headers&&e.req.headers.cookie?i.parse(e.req.headers.cookie,t):a()?i.parse(document.cookie,t):{}}function c(e,t,r,u){if(e&&e.res&&e.res.getHeader&&e.res.setHeader){var c=e.res.getHeader("Set-Cookie")||[];"string"===typeof c&&(c=[c]),"number"===typeof c&&(c=[]);var l=o.parse(c),p=[];l.forEach((function(e){s(e,function(e,t,r){var i=r.sameSite;!0===i&&(i="strict"),void 0!==i&&!1!==i||(i="lax");var o=n(n({},r),{sameSite:i});return delete o.encode,n({name:e,value:t},o)}(t,r,u))||p.push(i.serialize(e.name,e.value,n({},e)))})),p.push(i.serialize(t,r,u)),e.res.finished||e.res.setHeader("Set-Cookie",p)}if(a()){if(u&&u.httpOnly)throw new Error("Can not set a httpOnly cookie in the browser.");document.cookie=i.serialize(t,r,u)}return{}}function l(e,t,r){var o=n(n({},r||{}),{maxAge:-1});if(e&&e.res&&e.res.setHeader&&e.res.getHeader){var s=e.res.getHeader("Set-Cookie")||[];"string"===typeof s&&(s=[s]),"number"===typeof s&&(s=[]),s.push(i.serialize(t,"",o)),e.res.setHeader("Set-Cookie",s)}return a()&&(document.cookie=i.serialize(t,"",o)),{}}t.parseCookies=u,t.setCookie=c,t.destroyCookie=l,t.default={set:c,get:u,destroy:l}},U0US:function(e,t,r){"use strict";var n={decodeValues:!0,map:!1,silent:!1};function i(e){return"string"===typeof e&&!!e.trim()}function o(e,t){var r=e.split(";").filter(i),o=r.shift().split("="),a=o.shift(),s=o.join("="),u={name:a,value:(t=t?Object.assign({},n,t):n).decodeValues?decodeURIComponent(s):s};return r.forEach((function(e){var t=e.split("="),r=t.shift().trimLeft().toLowerCase(),n=t.join("=");"expires"===r?u.expires=new Date(n):"max-age"===r?u.maxAge=parseInt(n,10):"secure"===r?u.secure=!0:"httponly"===r?u.httpOnly=!0:"samesite"===r?u.sameSite=n:u[r]=n})),u}function a(e,t){if(!e)return[];if(t=t?Object.assign({},n,t):n,e.headers&&e.headers["set-cookie"])e=e.headers["set-cookie"];else if(e.headers){var r=e.headers[Object.keys(e.headers).find((function(e){return"set-cookie"===e.toLowerCase()}))];r||!e.headers.cookie||t.silent||console.warn("Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."),e=r}if(Array.isArray(e)||(e=[e]),(t=t?Object.assign({},n,t):n).map){return e.filter(i).reduce((function(e,r){var n=o(r,t);return e[n.name]=n,e}),{})}return e.filter(i).map((function(e){return o(e,t)}))}e.exports=a,e.exports.parse=a,e.exports.parseString=o,e.exports.splitCookiesString=function(e){if(Array.isArray(e))return e;if("string"!==typeof e)return[];var t,r,n,i,o,a=[],s=0;function u(){for(;s<e.length&&/\s/.test(e.charAt(s));)s+=1;return s<e.length}for(;s<e.length;){for(t=s,o=!1;u();)if(","===(r=e.charAt(s))){for(n=s,s+=1,u(),i=s;s<e.length&&"="!==(r=e.charAt(s))&&";"!==r&&","!==r;)s+=1;s<e.length&&"="===e.charAt(s)?(o=!0,s=i,a.push(e.substring(t,n)),t=s):s=n+1}else s+=1;(!o||s>=e.length)&&a.push(e.substring(t,e.length))}return a}},asDA:function(e,t){e.exports=function(e,t,r,n){var i=-1,o=null==e?0:e.length;for(n&&o&&(r=e[++i]);++i<o;)r=t(r,e[i],i,e);return r}},bcJn:function(e,t,r){"use strict";r.r(t);var n=r("o0o1"),i=r.n(n),o=r("HaE+"),a=r("q1tI"),s=r.n(a),u=r("NyWP"),c=r("vDqi"),l=r.n(c),p=r("yE/o"),d=r("MqQV"),f=r("Pj1C"),h=r("T5N5"),m=r("WYlG"),g=r("5XkN"),v=r("aQu0"),y=r("D1pA"),w=r("3mGJ"),b=r("QetY"),S=r("hHGt"),k=r("nOHt"),x=r("GUDI"),C=s.a.createElement,O=function(e){var t=e.orders,r=void 0===t?[]:t,n=Object(k.useRouter)();return C(s.a.Fragment,null,C(v.a,{as:"h2"},C(y.a,{name:"folder open"}),"My Order History"),0===r.length?C(w.a,{inverted:!0,tertiary:!0,color:"pink",textAlign:"center"},C(v.a,{icon:!0},C(y.a,{name:"copy outline"}),"No Past Orders."),C(b.a,{onClick:function(){return n.push("/products")},color:"violet"},"View Products")):C(S.a,{fluid:!0,styled:!0,exclusive:!1,panels:function(e){return e.map((function(e){return{key:e._id,title:{content:C(s.a.Fragment,null,C(d.a,{color:"blue",content:Object(x.a)(e.createdAt)}),C(f.a,{trigger:C(h.a,{toggle:!0,disabled:!0,label:"delivered"==e.status?"Delivered":"Pending",checked:"delivered"==e.status,fitted:!0}),header:"Delivery Status",content:"delivered"==e.status?"Delivered":"Pending",position:"top center",on:["hover"]}))},content:{content:C(s.a.Fragment,null,C(m.a.Header,{as:"h3"},"Total: $",e.total,C(d.a,{content:e.email,icon:"mail",basic:!0,horizontal:!0,style:{marginLeft:"1em"}})),C(m.a,null,e.products.map((function(e){return C(m.a.Item,{key:e.product._id},C(g.a,{avatar:!0,src:e.product.mediaUrl}),C(m.a.Content,null,C(m.a.Header,null,e.product.name),C(m.a.Description,null,e.quantity," . $",e.product.price)),C(m.a.Content,{floated:"right"},C(d.a,{tag:!0,color:"red",size:"tiny"},e.product.sku)))}))))}}}))}(r)}))},A=r("rjN7"),E=s.a.createElement,j=function(e){var t=e.orders;return E(p.a,{className:"order-history-area"},E(O,{orders:t}))};j.getInitialProps=function(){var e=Object(o.a)(i.a.mark((function e(t){var r,n,o,a,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=Object(u.parseCookies)(t),n=r.token){e.next=3;break}return e.abrupt("return",{orders:[]});case 3:return o={headers:{Authorization:n}},a="".concat(A.a,"/api/orders"),e.next=7,l.a.get(a,o);case 7:return s=e.sent,e.abrupt("return",s.data);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();t.default=j},"iVi/":function(e,t,r){"use strict";t.parse=function(e,t){if("string"!==typeof e)throw new TypeError("argument str must be a string");for(var r={},i=t||{},a=e.split(o),u=i.decode||n,c=0;c<a.length;c++){var l=a[c],p=l.indexOf("=");if(!(p<0)){var d=l.substr(0,p).trim(),f=l.substr(++p,l.length).trim();'"'==f[0]&&(f=f.slice(1,-1)),void 0==r[d]&&(r[d]=s(f,u))}}return r},t.serialize=function(e,t,r){var n=r||{},o=n.encode||i;if("function"!==typeof o)throw new TypeError("option encode is invalid");if(!a.test(e))throw new TypeError("argument name is invalid");var s=o(t);if(s&&!a.test(s))throw new TypeError("argument val is invalid");var u=e+"="+s;if(null!=n.maxAge){var c=n.maxAge-0;if(isNaN(c)||!isFinite(c))throw new TypeError("option maxAge is invalid");u+="; Max-Age="+Math.floor(c)}if(n.domain){if(!a.test(n.domain))throw new TypeError("option domain is invalid");u+="; Domain="+n.domain}if(n.path){if(!a.test(n.path))throw new TypeError("option path is invalid");u+="; Path="+n.path}if(n.expires){if("function"!==typeof n.expires.toUTCString)throw new TypeError("option expires is invalid");u+="; Expires="+n.expires.toUTCString()}n.httpOnly&&(u+="; HttpOnly");n.secure&&(u+="; Secure");if(n.sameSite){switch("string"===typeof n.sameSite?n.sameSite.toLowerCase():n.sameSite){case!0:u+="; SameSite=Strict";break;case"lax":u+="; SameSite=Lax";break;case"strict":u+="; SameSite=Strict";break;case"none":u+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return u};var n=decodeURIComponent,i=encodeURIComponent,o=/; */,a=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function s(e,t){try{return t(e)}catch(r){return e}}}},[["C1Jb",0,1,2,3,4,5,6,7,8,10,13]]]);