(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"+S6C":function(t,e,n){"use strict";n.r(e);var r,a,i=n("q1tI"),o=n.n(i),c=(n("Wbzz"),n("vrFN")),u=(n("KQm4"),n("J2m7"),n("Y+p1"),n("iGDP")),l=function(t){var e=t.product,n=(e.options,e.variants),r=e.variants[0],a=e.priceRange.minVariantPrice,c=Object(i.useState)(Object.assign({},r)),l=c[0],s=(c[1],Object(i.useState)(1)),f=s[0],p=(s[1],Object(i.useContext)(u.a)),m=p.addVariantToCart,d=p.store,v=d.client,b=d.adding,h=v.product.helpers.variantForOptions(e,l)||l,x=Object(i.useState)(h.availableForSale),g=x[0],y=x[1],E=Object(i.useCallback)((function(t){v.product.fetch(t).then((function(){var t=n.filter((function(t){return t.shopifyId===h.shopifyId}));y(t[0].availableForSale)}))}),[v.product,h.shopifyId,n]);Object(i.useEffect)((function(){E(e.shopifyId)}),[h,E,e.shopifyId]);var O=Intl.NumberFormat(void 0,{currency:a.currencyCode,minimumFractionDigits:2,style:"currency"}).format(l.price);return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"flex justify-between items-center margin-y-xl"},o.a.createElement("h3",null,O),o.a.createElement("br",null),o.a.createElement("button",{className:"link-btn",type:"submit",disabled:!g||b,onClick:function(){m(h.shopifyId,f)}},"Add to cart →"),!g&&o.a.createElement("p",null,"This Product is out of Stock!")))},s=n("oCA+"),f=n("MUpH"),p=n("5D9J"),m=p.a.h1(r||(r=Object(f.a)(["\n  word-wrap: break-word;\n"]))),d=p.a.div(a||(a=Object(f.a)(["\n\n"])));e.default=function(t){var e=t.data,n=e.shopifyProduct,r=e.shopifyCollection;return console.log(r),o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,{title:n.title,description:n.description}),o.a.createElement(s.a,{className:"padding-top-xxl"},o.a.createElement(s.f,null,o.a.createElement(s.c,null,n.images.map((function(t){return o.a.createElement(s.e,{fluid:t.localFile.childImageSharp.fluid,key:t.id,alt:n.title})}))),o.a.createElement(s.d,null,o.a.createElement(m,{className:"glitch margin-bottom-sm text-xxxl  color-contrast-higher"},n.title),o.a.createElement(d,{dangerouslySetInnerHTML:{__html:n.descriptionHtml}}),o.a.createElement(l,{product:n})))))}},J2m7:function(t,e,n){var r=n("XKAG")(n("UfWW"));t.exports=r},KwMD:function(t,e){t.exports=function(t,e,n,r){for(var a=t.length,i=n+(r?1:-1);r?i--:++i<a;)if(e(t[i],i,t))return i;return-1}},Sxd8:function(t,e,n){var r=n("ZCgT");t.exports=function(t){var e=r(t),n=e%1;return e==e?n?e-n:e:0}},TO8r:function(t,e){var n=/\s/;t.exports=function(t){for(var e=t.length;e--&&n.test(t.charAt(e)););return e}},UfWW:function(t,e,n){var r=n("KwMD"),a=n("ut/Y"),i=n("Sxd8"),o=Math.max;t.exports=function(t,e,n){var c=null==t?0:t.length;if(!c)return-1;var u=null==n?0:i(n);return u<0&&(u=o(c+u,0)),r(t,a(e,3),u)}},XKAG:function(t,e,n){var r=n("ut/Y"),a=n("MMmD"),i=n("7GkX");t.exports=function(t){return function(e,n,o){var c=Object(e);if(!a(e)){var u=r(n,3);e=i(e),n=function(t){return u(c[t],t,c)}}var l=t(e,n,o);return l>-1?c[u?e[l]:l]:void 0}}},"Y+p1":function(t,e,n){var r=n("wF/u");t.exports=function(t,e){return r(t,e)}},ZCgT:function(t,e,n){var r=n("tLB3");t.exports=function(t){return t?(t=r(t))===1/0||t===-1/0?17976931348623157e292*(t<0?-1:1):t==t?t:0:0===t?t:0}},jXQH:function(t,e,n){var r=n("TO8r"),a=/^\s+/;t.exports=function(t){return t?t.slice(0,r(t)+1).replace(a,""):t}},tLB3:function(t,e,n){var r=n("jXQH"),a=n("GoyQ"),i=n("/9aa"),o=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(i(t))return NaN;if(a(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=a(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=r(t);var n=c.test(t);return n||u.test(t)?l(t.slice(2),n?2:8):o.test(t)?NaN:+t}}}]);
//# sourceMappingURL=component---src-templates-product-page-index-js-f59309fbc19be35cfedf.js.map