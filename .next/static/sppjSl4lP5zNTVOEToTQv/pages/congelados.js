(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"48fX":function(e,t,r){var n=r("qhzo");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},PtRI:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/congelados",function(){return r("vlHJ")}])},T0f4:function(e,t){function r(t){return e.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(t)}e.exports=r},YFqc:function(e,t,r){e.exports=r("cTJO")},cTJO:function(e,t,r){"use strict";var n=r("/GRZ"),a=r("i2R6"),o=r("48fX"),s=r("tCBg"),i=r("T0f4");function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=i(e);if(t){var a=i(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return s(this,r)}}var u=r("AroE"),l=r("7KCV");t.__esModule=!0,t.default=void 0;var f,p=l(r("q1tI")),d=r("QmWs"),m=r("g/15"),h=u(r("nOHt")),v=r("elyg");function g(e){return e&&"object"===typeof e?(0,m.formatWithValidation)(e):e}var y=new Map,b=window.IntersectionObserver,N={};function w(){return f||(b?f=new b((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var C=function(e){o(r,e);var t=c(r);function r(e){var a;return n(this,r),(a=t.call(this,e)).p=void 0,a.cleanUpListeners=function(){},a.formatUrls=function(e){var t=null,r=null,n=null;return function(a,o){if(n&&a===t&&o===r)return n;var s=e(a,o);return t=a,r=o,n=s,s}}((function(e,t){return{href:(0,v.addBasePath)(g(e)),as:t?(0,v.addBasePath)(g(t)):t}})),a.linkClicked=function(e){var t=e.currentTarget,r=t.nodeName,n=t.target;if("A"!==r||!(n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var o=a.formatUrls(a.props.href,a.props.as),s=o.href,i=o.as;if(function(e){var t=(0,d.parse)(e,!1,!0),r=(0,d.parse)((0,m.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===r.protocol&&t.host===r.host}(s)){var c=window.location.pathname;s=(0,d.resolve)(c,s),i=i?(0,d.resolve)(c,i):s,e.preventDefault();var u=a.props.scroll;null==u&&(u=i.indexOf("#")<0),h.default[a.props.replace?"replace":"push"](s,i,{shallow:a.props.shallow}).then((function(e){e&&u&&(window.scrollTo(0,0),document.body.focus())}))}}},a.p=!1!==e.prefetch,a}return a(r,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),r=t.href,n=t.as,a=(0,d.resolve)(e,r);return[a,n?(0,d.resolve)(e,n):a]}},{key:"handleRef",value:function(e){var t=this;this.p&&b&&e&&e.tagName&&(this.cleanUpListeners(),N[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var r=w();return r?(r.observe(e),y.set(e,t),function(){try{r.unobserve(e)}catch(t){console.error(t)}y.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();h.default.prefetch(t[0],t[1],e).catch((function(e){0})),N[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,r=this.formatUrls(this.props.href,this.props.as),n=r.href,a=r.as;"string"===typeof t&&(t=p.default.createElement("a",null,t));var o=p.Children.only(t),s={ref:function(t){e.handleRef(t),o&&"object"===typeof o&&o.ref&&("function"===typeof o.ref?o.ref(t):"object"===typeof o.ref&&(o.ref.current=t))},onMouseEnter:function(t){o.props&&"function"===typeof o.props.onMouseEnter&&o.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){o.props&&"function"===typeof o.props.onClick&&o.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(s.href=a||n),p.default.cloneElement(o,s)}}]),r}(p.Component);t.default=C},qXWd:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},tCBg:function(e,t,r){var n=r("C+bE"),a=r("qXWd");e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!==typeof t?a(e):t}},vlHJ:function(e,t,r){"use strict";r.r(t);var n=r("o0o1"),a=r.n(n),o=r("HaE+"),s=r("q1tI"),i=r.n(s),c=r("vDqi"),u=r.n(c),l=r("rjN7"),f=r("YFqc"),p=r.n(f),d=i.a.createElement,m=function(){return d("div",{className:"main-banner furniture-bg"},d("div",{className:"main-banner-content"},d("span",{className:"sub-title"},"Produtos Congelados"),d("h1",null,"Produtos Exclusivos!"),d("p",null,"Comprando Pelo Site Voc\xea Ganha Desconto"),d("div",{className:"btn-box"},d(p.a,{href:"/products?term=furniture"},d("a",{className:"default-btn"},"Compre Agora")))))},h=i.a.createElement,v=function(){return h(i.a.Fragment,null,h("div",{className:"categories-banner-area"},h("div",{className:"ui grid"},h("div",{className:"four wide column"},h("div",{className:"single-categories-box on-hover"},h("img",{src:"https://res.cloudinary.com/dev-empty/image/upload/v1590079588/furniture-categories-img1.jpg",alt:"Categories"}),h("div",{className:"content text-white"},h("span",null,"Experimente Novos Sabores"),h("h3",null,"Com Desconto"),h(p.a,{href:"/products?term=congelados"},h("a",{className:"default-btn"},"Compre Agora"))),h(p.a,{href:"/products?term=congelados"},h("a",{className:"link-btn"})))),h("div",{className:"four wide column"},h("div",{className:"single-categories-box on-hover"},h("img",{src:"https://res.cloudinary.com/dev-empty/image/upload/v1590079617/furniture-categories-img2.jpg",alt:"Categories"}),h("div",{className:"content"},h("span",null,"Delicias Praticas"),h("h3",null,"Para Seu Caf\xe9"),h(p.a,{href:"/products?term=congelados"},h("a",{className:"default-btn"},"Compre Agora"))),h(p.a,{href:"/products?term=congelados"},h("a",{className:"link-btn"})))),h("div",{className:"four wide column"},h("div",{className:"single-categories-box on-hover"},h("img",{src:"https://res.cloudinary.com/dev-empty/image/upload/v1590079642/furniture-categories-img3.jpg",alt:"Categories"}),h("div",{className:"content"},h("span",null,"Diferencial "),h("h3",null,"S\xf3 Aqui"),h(p.a,{href:"/products?term=congelados"},h("a",{className:"default-btn"},"Compre Agora"))),h(p.a,{href:"/products?term=congelados"},h("a",{className:"link-btn"})))),h("div",{className:"four wide column"},h("div",{className:"single-categories-box on-hover"},h("img",{src:"https://res.cloudinary.com/dev-empty/image/upload/v1590079662/furniture-categories-img4.jpg",alt:"Categories"}),h("div",{className:"content text-white"},h("span",null,"Pegue 20% Desconto"),h("h3",null,"Coxinha Gourmet!"),h(p.a,{href:"/products?term=congelados"},h("a",{className:"default-btn"},"Compre Agora"))),h(p.a,{href:"/products?term=congelados"},h("a",{className:"link-btn"})))))))},g=i.a.createElement,y=function(e){var t=e.products;return g("div",{className:"grocery-products-area"},g("div",{className:"section-title"},g("span",{className:"sub-title"},"Produtos"),g("h2",null,"Nossas Novidades")),g("div",{className:"ui centered stackable four cards"},t.map((function(e){return g(p.a,{href:"/product/[id]",as:"/product/".concat(e._id),key:e._id},g("a",{className:"ui green fluid card single-grocery-products-box"},g("div",{className:"image"},g("img",{src:e.mediaUrl,alt:e.name})),g("div",{className:"content"},g("div",{className:"header"},e.name),g("div",{className:"meta"},"$",e.price))))}))))},b=i.a.createElement,N=function(e){var t=e.products;return b(i.a.Fragment,null,b(m,null),b(v,null),b(y,{products:t}))};N.getInitialProps=function(){var e=Object(o.a)(a.a.mark((function e(t){var r,n,o,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.query.page?t.query.page:"1",8,"furniture",n="".concat(l.a,"/api/products"),o={params:{page:r,size:8,searchTerm:"furniture"}},e.next=7,u.a.get(n,o);case 7:return s=e.sent,e.abrupt("return",s.data);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();t.default=N}},[["PtRI",0,1,2,3]]]);