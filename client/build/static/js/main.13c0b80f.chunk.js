(this.webpackJsonpporfolio=this.webpackJsonpporfolio||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){},16:function(e,t,c){},18:function(e,t,c){},19:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),i=c(4),r=c.n(i),a=(c(14),c(15),c(2)),j=c(5),o=(c(16),c(0));var u=function(e){var t=e.url,c=e.title,n=e.source;return Object(o.jsxs)("div",{className:"image",children:[Object(o.jsx)("img",{src:t,alt:c,width:"250px",height:"250px"}),Object(o.jsxs)("div",{className:"info",children:[Object(o.jsx)("h1",{children:c}),Object(o.jsx)("button",{children:Object(o.jsx)("a",{href:n,children:"More"})})]})]})};c(18);var l=function(){var e=Object(n.useState)([]),t=Object(a.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)(""),r=Object(a.a)(i,2),l=r[0],b=r[1],h=Object(n.useState)(!1),d=Object(a.a)(h,2),O=d[0],x=d[1];return Object(n.useEffect)((function(){s([]),fetch("/api/".concat(l)).then((function(e){return e.json()})).then((function(e){return s(JSON.parse(e).items)})),x(!1)}),[O]),Object(o.jsxs)("section",{className:"main",children:[Object(o.jsxs)("div",{className:"search-container",children:[Object(o.jsx)("p",{children:"Coding Challenge"}),Object(o.jsxs)("div",{className:"search",children:[Object(o.jsx)("input",{type:"text",onChange:function(e){return b(e.target.value)}}),Object(o.jsx)("button",{className:"searchButton",type:"button",onClick:function(){return x(!0)},children:Object(o.jsx)(j.a,{size:35})})]})]}),Object(o.jsx)("div",{className:"content-container",children:0===c.length?Object(o.jsx)("p",{children:"No hits"}):c.map((function(e){return Object(o.jsx)(u,{url:e.media.m,title:e.title,source:e.link},e.media.m)}))})]})};var b=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(l,{})," "]})};r.a.createRoot(document.getElementById("root")).render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(b,{})}))}},[[19,1,2]]]);
//# sourceMappingURL=main.13c0b80f.chunk.js.map