(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"48fX":function(e,t,r){var n=r("qhzo");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},RNiq:function(e,t,r){"use strict";r.r(t);var n=r("o0o1"),o=r.n(n),a=r("HaE+"),c=r("q1tI"),s=r.n(c),i=r("vDqi"),u=r.n(i),l=r("YFqc"),p=r.n(l),f=s.a.createElement,d=function(){return f("div",{className:"grocery-main-banner"},f("div",{className:"grocery-banner-content"},f("h1",null,"Conveniencia Calegari entregas gratis"),f("p",null,"Produtos de qualidade com pre\xe7os baixos"),f("h2",null,"G\xc1S R$ 60,00 "),f(p.a,{href:"/products?term=grocery"},f("a",{className:"default-btn"},"Compre Agora"))))},m=s.a.createElement,h=function(){return m("div",{className:"grocery-categories-banner-area"},m("div",{className:"ui grid"},m("div",{className:"four wide column"},m("div",{className:"single-grocery-categories-box"},m("img",{src:"https://res.cloudinary.com/dev-empty/image/upload/v1590006640/grocery-category1.jpg",alt:"category"}),m("div",{className:"content"},m("span",null,"10% Desconto"),m("h3",null,"Legumes"),m(p.a,{href:"/products?term=mercearia"},m("a",{className:"default-btn"},"Compre Agora"))))),m("div",{className:"four wide column"},m("div",{className:"single-grocery-categories-box"},m("img",{src:"https://res.cloudinary.com/dev-empty/image/upload/v1590006666/grocery-category2.jpg",alt:"category"}),m("div",{className:"content"},m("span",null,"10% Desconto"),m("h3",null,"Verduras"),m(p.a,{href:"/products?term=mercearia"},m("a",{className:"default-btn"},"Compre Agora"))))),m("div",{className:"four wide column"},m("div",{className:"single-grocery-categories-box"},m("img",{src:"https://res.cloudinary.com/dev-empty/image/upload/v1590006689/grocery-category3.jpg",alt:"category"}),m("div",{className:"content"},m("span",null,"10% OFF"),m("h3",null,"Leite"),m(p.a,{href:"/products?term=mercearia"},m("a",{className:"default-btn"},"Compre Agora"))))),m("div",{className:"four wide column"},m("div",{className:"single-grocery-categories-box"},m("img",{src:"https://res.cloudinary.com/dev-empty/image/upload/v1590006709/grocery-category4.jpg",alt:"category"}),m("div",{className:"content"},m("span",null,"10% Desconto"),m("h3",null,"Ovos"),m(p.a,{href:"/products?term=mercearia"},m("a",{className:"default-btn"},"Compre Agora")))))))},v=s.a.createElement,g=function(e){var t=e.products;return v("div",{className:"grocery-products-area"},v("div",{className:"section-title"},v("span",{className:"sub-title"},"Produtos"),v("h2",null,"Nossas Novidades")),v("div",{className:"ui centered stackable four cards"},t.map((function(e){return v(p.a,{href:"/product/[id]",as:"/product/".concat(e._id),key:e._id},v("a",{className:"ui green fluid card single-grocery-products-box"},v("div",{className:"image"},v("img",{src:e.mediaUrl,alt:e.name})),v("div",{className:"content"},v("div",{className:"header"},e.name),v("div",{className:"meta"},"$",e.price))))}))))},y=r("rjN7"),b=s.a.createElement,N=function(e){var t=e.products;return b(s.a.Fragment,null,b(d,null),b(h,null),b(g,{products:t}))};N.getInitialProps=function(){var e=Object(a.a)(o.a.mark((function e(t){var r,n,a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.query.page?t.query.page:"1",8,"grocery",n="".concat(y.a,"/api/products"),a={params:{page:r,size:8,searchTerm:"grocery"}},e.next=7,u.a.get(n,a);case 7:return c=e.sent,e.abrupt("return",c.data);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();t.default=N},T0f4:function(e,t){function r(t){return e.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(t)}e.exports=r},YFqc:function(e,t,r){e.exports=r("cTJO")},cTJO:function(e,t,r){"use strict";var n=r("/GRZ"),o=r("i2R6"),a=r("48fX"),c=r("tCBg"),s=r("T0f4");function i(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=s(e);if(t){var o=s(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return c(this,r)}}var u=r("AroE"),l=r("7KCV");t.__esModule=!0,t.default=void 0;var p,f=l(r("q1tI")),d=r("QmWs"),m=r("g/15"),h=u(r("nOHt")),v=r("elyg");function g(e){return e&&"object"===typeof e?(0,m.formatWithValidation)(e):e}var y=new Map,b=window.IntersectionObserver,N={};function w(){return p||(b?p=new b((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var E=function(e){a(r,e);var t=i(r);function r(e){var o;return n(this,r),(o=t.call(this,e)).p=void 0,o.cleanUpListeners=function(){},o.formatUrls=function(e){var t=null,r=null,n=null;return function(o,a){if(n&&o===t&&a===r)return n;var c=e(o,a);return t=o,r=a,n=c,c}}((function(e,t){return{href:(0,v.addBasePath)(g(e)),as:t?(0,v.addBasePath)(g(t)):t}})),o.linkClicked=function(e){var t=e.currentTarget,r=t.nodeName,n=t.target;if("A"!==r||!(n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var a=o.formatUrls(o.props.href,o.props.as),c=a.href,s=a.as;if(function(e){var t=(0,d.parse)(e,!1,!0),r=(0,d.parse)((0,m.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===r.protocol&&t.host===r.host}(c)){var i=window.location.pathname;c=(0,d.resolve)(i,c),s=s?(0,d.resolve)(i,s):c,e.preventDefault();var u=o.props.scroll;null==u&&(u=s.indexOf("#")<0),h.default[o.props.replace?"replace":"push"](c,s,{shallow:o.props.shallow}).then((function(e){e&&u&&(window.scrollTo(0,0),document.body.focus())}))}}},o.p=!1!==e.prefetch,o}return o(r,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),r=t.href,n=t.as,o=(0,d.resolve)(e,r);return[o,n?(0,d.resolve)(e,n):o]}},{key:"handleRef",value:function(e){var t=this;this.p&&b&&e&&e.tagName&&(this.cleanUpListeners(),N[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var r=w();return r?(r.observe(e),y.set(e,t),function(){try{r.unobserve(e)}catch(t){console.error(t)}y.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();h.default.prefetch(t[0],t[1],e).catch((function(e){0})),N[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,r=this.formatUrls(this.props.href,this.props.as),n=r.href,o=r.as;"string"===typeof t&&(t=f.default.createElement("a",null,t));var a=f.Children.only(t),c={ref:function(t){e.handleRef(t),a&&"object"===typeof a&&a.ref&&("function"===typeof a.ref?a.ref(t):"object"===typeof a.ref&&(a.ref.current=t))},onMouseEnter:function(t){a.props&&"function"===typeof a.props.onMouseEnter&&a.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){a.props&&"function"===typeof a.props.onClick&&a.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==a.type||"href"in a.props)||(c.href=o||n),f.default.cloneElement(a,c)}}]),r}(f.Component);t.default=E},"m0L+":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r("RNiq")}])},qXWd:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},tCBg:function(e,t,r){var n=r("C+bE"),o=r("qXWd");e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!==typeof t?o(e):t}}},[["m0L+",0,1,2,3]]]);