(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"48fX":function(e,t,r){var a=r("qhzo");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}},"CSV+":function(e,t,r){"use strict";r.r(t);var a=r("o0o1"),n=r.n(a),o=r("HaE+"),s=r("q1tI"),c=r.n(s),i=r("vDqi"),l=r.n(i),u=r("YFqc"),f=r.n(u),p=c.a.createElement,d=function(){return p("div",{className:"jewelry-main-banner"},p("div",{className:"jewelry-banner-content"},p("div",{className:"line"}),p("span",{className:"sub-title"},"Saboreie Deliosas Massas"),p("h1",null,"Massas Prontas"),p("p",null,"Massas deliciosas de otima qualidade preparo muito facil experimente!. Qualidade Garantida "),p(f.a,{href:"/products?term=massas"},p("a",{className:"default-btn"},"Compre Agora"))))},m=c.a.createElement,h=function(){return m("div",{className:"grocery-categories-banner-area"},m("div",{className:"ui grid"},m("div",{className:"four wide column"},m("div",{className:"single-grocery-categories-box jewelry-categorie"},m("img",{src:"images/jewelry-category1.jpg",alt:"Categories"}),m("div",{className:"content"},m("span",null,"10% Desconto"),m("h3",null,"Rondele"),m(f.a,{href:"/products?term=massas"},m("a",{className:"default-btn"},"Compre Agora"))))),m("div",{className:"four wide column"},m("div",{className:"single-grocery-categories-box jewelry-categorie overly"},m("img",{src:"images/jewelry-category2.jpg",alt:"Categories"}),m("div",{className:"content"},m("span",{className:"color-white"},"20% Desconto"),m("h3",{className:"color-white"},"Inhoque"),m(f.a,{href:"/products?term=massas"},m("a",{className:"default-btn"},"Compre Agora"))))),m("div",{className:"four wide column"},m("div",{className:"single-grocery-categories-box jewelry-categorie overly"},m("img",{src:"images/jewelry-category3.jpg",alt:"Categories"}),m("div",{className:"content"},m("span",{className:"color-white"},"10% Desconto"),m("h3",{className:"color-white"},"Canelone"),m(f.a,{href:"/products?term=massas"},m("a",{className:"default-btn"},"Compre Agora"))))),m("div",{className:"four wide column "},m("div",{className:"single-grocery-categories-box jewelry-categorie overly"},m("img",{src:"images/jewelry-category4.jpg",alt:"Categories"}),m("div",{className:"content"},m("span",{className:"color-white"},"10% Desconto"),m("h3",{className:"color-white"},"Panqueca"),m(f.a,{href:"/products?term=massas"},m("a",{className:"default-btn"},"Compre Agora")))))))},v=c.a.createElement,g=function(e){var t=e.products;return v("div",{className:"hot-products-area"},v("div",{className:"section-title"},v("span",{className:"sub-title"},"Produtos"),v("h2",null,"Nossas Novidades")),v("div",{className:"ui centered stackable four cards"},t.map((function(e){return v(f.a,{href:"/product/[id]",as:"/product/".concat(e._id),key:e._id},v("a",{className:"ui green fluid card single-products-box"},v("div",{className:"image"},v("img",{src:e.mediaUrl,alt:e.name})),v("div",{className:"content"},v("div",{className:"header"},e.name),v("div",{className:"meta"},"$",e.price))))}))))},y=r("rjN7"),w=c.a.createElement,N=function(e){var t=e.products;return w(c.a.Fragment,null,w(d,null),w(h,null),w(g,{products:t}))};N.getInitialProps=function(){var e=Object(o.a)(n.a.mark((function e(t){var r,a,o,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.query.page?t.query.page:"1",8,"jewelry",a="".concat(y.a,"/api/products"),o={params:{page:r,size:8,searchTerm:"jewelry"}},e.next=7,l.a.get(a,o);case 7:return s=e.sent,e.abrupt("return",s.data);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();t.default=N},T0f4:function(e,t){function r(t){return e.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(t)}e.exports=r},YFqc:function(e,t,r){e.exports=r("cTJO")},bxhR:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/massas",function(){return r("CSV+")}])},cTJO:function(e,t,r){"use strict";var a=r("/GRZ"),n=r("i2R6"),o=r("48fX"),s=r("tCBg"),c=r("T0f4");function i(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=c(e);if(t){var n=c(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return s(this,r)}}var l=r("AroE"),u=r("7KCV");t.__esModule=!0,t.default=void 0;var f,p=u(r("q1tI")),d=r("QmWs"),m=r("g/15"),h=l(r("nOHt")),v=r("elyg");function g(e){return e&&"object"===typeof e?(0,m.formatWithValidation)(e):e}var y=new Map,w=window.IntersectionObserver,N={};function b(){return f||(w?f=new w((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var j=function(e){o(r,e);var t=i(r);function r(e){var n;return a(this,r),(n=t.call(this,e)).p=void 0,n.cleanUpListeners=function(){},n.formatUrls=function(e){var t=null,r=null,a=null;return function(n,o){if(a&&n===t&&o===r)return a;var s=e(n,o);return t=n,r=o,a=s,s}}((function(e,t){return{href:(0,v.addBasePath)(g(e)),as:t?(0,v.addBasePath)(g(t)):t}})),n.linkClicked=function(e){var t=e.currentTarget,r=t.nodeName,a=t.target;if("A"!==r||!(a&&"_self"!==a||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var o=n.formatUrls(n.props.href,n.props.as),s=o.href,c=o.as;if(function(e){var t=(0,d.parse)(e,!1,!0),r=(0,d.parse)((0,m.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===r.protocol&&t.host===r.host}(s)){var i=window.location.pathname;s=(0,d.resolve)(i,s),c=c?(0,d.resolve)(i,c):s,e.preventDefault();var l=n.props.scroll;null==l&&(l=c.indexOf("#")<0),h.default[n.props.replace?"replace":"push"](s,c,{shallow:n.props.shallow}).then((function(e){e&&l&&(window.scrollTo(0,0),document.body.focus())}))}}},n.p=!1!==e.prefetch,n}return n(r,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),r=t.href,a=t.as,n=(0,d.resolve)(e,r);return[n,a?(0,d.resolve)(e,a):n]}},{key:"handleRef",value:function(e){var t=this;this.p&&w&&e&&e.tagName&&(this.cleanUpListeners(),N[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var r=b();return r?(r.observe(e),y.set(e,t),function(){try{r.unobserve(e)}catch(t){console.error(t)}y.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();h.default.prefetch(t[0],t[1],e).catch((function(e){0})),N[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,r=this.formatUrls(this.props.href,this.props.as),a=r.href,n=r.as;"string"===typeof t&&(t=p.default.createElement("a",null,t));var o=p.Children.only(t),s={ref:function(t){e.handleRef(t),o&&"object"===typeof o&&o.ref&&("function"===typeof o.ref?o.ref(t):"object"===typeof o.ref&&(o.ref.current=t))},onMouseEnter:function(t){o.props&&"function"===typeof o.props.onMouseEnter&&o.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){o.props&&"function"===typeof o.props.onClick&&o.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(s.href=n||a),p.default.cloneElement(o,s)}}]),r}(p.Component);t.default=j},qXWd:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},tCBg:function(e,t,r){var a=r("C+bE"),n=r("qXWd");e.exports=function(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?n(e):t}}},[["bxhR",0,1,2,3]]]);