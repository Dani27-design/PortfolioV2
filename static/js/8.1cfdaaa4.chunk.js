(this["webpackJsonpportfolio-v2"]=this["webpackJsonpportfolio-v2"]||[]).push([[8],{118:function(e,t,n){"use strict";n.r(t);var a=n(7),c=n(0),i=n(1),o=function(){var e=Object(c.useState)({x_left:0,x_right:0,y_top:0,y_bottom:0}),t=Object(a.a)(e,2),n=t[0],i=t[1],o=function(){i({x_left:window.pageXOffset,x_right:window.pageXOffset+window.innerWidth,y_top:window.pageYOffset,y_bottom:window.pageYOffset+window.innerHeight})};return Object(c.useEffect)((function(){return window.addEventListener("scroll",o),function(){window.removeEventListener("scroll",o)}}),[]),n},s=function(e){var t=e.targetId,n=e.duration,a=document.querySelector("#"+t).getBoundingClientRect().top,c=window.pageYOffset,i=null,o=function(e,t,n,a){return(e/=a/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t};requestAnimationFrame((function e(t){null===i&&(i=t);var s=t-i,r=o(s,c,a,n);window.scrollTo(0,r),s<n&&requestAnimationFrame(e)}))},r=n(66),l=n(12),d=n(5);var j=function(){var e=Object(c.useState)(!1),t=Object(a.a)(e,2),n=t[0],j=t[1],u=Object(c.useState)("Daniansyah"),b=Object(a.a)(u,2),f=b[0],m=b[1],h=Object(c.useState)(!1),v=Object(a.a)(h,2),O=v[0],g=v[1];window.addEventListener("scroll",(function(){window.scrollY>=50?(j(!0),g(!1)):j(!1)}));var p=o().y_top,x=Object(i.c)().pathname,w=0;return Object(c.useEffect)((function(){var e=document.querySelectorAll(".link-con .navi-link");"/"!==x&&(w=100),e.forEach((function(e,t){e.addEventListener("click",(function(t){t.preventDefault();var n=e.getAttribute("name");"home"===n&&m("Daniansyah"),"project"===n&&m("Daniansyah | Project"),"certification"===n&&m("Daniansyah | Certification"),"contact"===n&&m("Daniansyah | Contact");setTimeout((function(){s({targetId:n,duration:1e3}),w=0}),w)}))}))}),[]),Object(c.useEffect)((function(){var e=document.querySelector("nav");p>0?e.classList.add("active"):e.classList.remove("active")}),[p]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(l.a,{title:f,defer:!1}),Object(d.jsxs)("nav",{className:n?"nav active":"nav",children:[Object(d.jsx)("div",{className:"link-con logo-gambar",children:Object(d.jsxs)("a",{href:"home",name:"home",className:"navi-link logo-navbar",children:["DC",Object(d.jsx)("img",{className:"dot-navbar",src:"".concat("//dani27-design.github.io/PortfolioV2","/dot-navbar.png"),alt:""})]})}),Object(d.jsxs)("div",{className:"link-con menu",children:[Object(d.jsx)("a",{href:"project",name:"project",className:"navi-link",children:"Project"}),Object(d.jsx)("a",{href:"certification",name:"certification",className:"navi-link",children:"Certification"}),Object(d.jsx)("a",{href:"contact",name:"contact",className:"navi-link",children:"Contact"})]})]}),Object(d.jsx)(r.bubble,{customBurgerIcon:Object(d.jsx)("img",{className:"menu-icon",src:"".concat("//dani27-design.github.io/PortfolioV2","/Menu.svg"),alt:""}),customCrossIcon:Object(d.jsx)("img",{className:"close-icon",src:"".concat("//dani27-design.github.io/PortfolioV2","/Close.svg"),alt:""}),width:"80%",isOpen:O,onOpen:function(){g(!O)},disableAutoFocus:!0,children:Object(d.jsx)("nav",{className:"navi",children:Object(d.jsxs)("div",{className:"link-con menu",children:[Object(d.jsxs)("a",{href:"home",name:"home",className:"navi-link logo-navbar",children:["DC",Object(d.jsx)("img",{className:"dot-navbar",src:"".concat("//dani27-design.github.io/PortfolioV2","/dot-navbar.png"),alt:""})]}),Object(d.jsx)("a",{href:"project",name:"project",className:"navi-link",children:"Project"}),Object(d.jsx)("a",{href:"certification",name:"certification",className:"navi-link",children:"Certification"}),Object(d.jsx)("a",{href:"contact",name:"contact",className:"navi-link",children:"Contact"})]})})})]})},u=n(83),b=n.n(u),f=n(60),m=n(84);t.default=function(){var e=Object(c.useState)(!1),t=Object(a.a)(e,2),n=t[0],r=t[1],u=Object(c.useState)(!1),h=Object(a.a)(u,2),v=h[0],O=h[1],g=Object(c.useState)("Daniansyah"),p=Object(a.a)(g,2),x=p[0],w=p[1];window.addEventListener("scroll",(function(){window.scrollY>=50?r(!0):r(!1)})),v?document.body.classList.add("light-theme"):document.body.classList.remove("light-theme");var N=o().y_top,k=Object(i.c)().pathname,y=0;Object(c.useEffect)((function(){var e=document.querySelectorAll(".container-button .button");"/"!==k&&(y=100),e.forEach((function(e,t){e.addEventListener("click",(function(t){t.preventDefault();var n=e.getAttribute("name");"project"===n&&w("Daniansyah | Project");setTimeout((function(){s({targetId:n,duration:1e3}),y=0}),y)}))}))}),[]),Object(c.useEffect)((function(){var e=document.querySelector("nav");N>0?e.classList.add("active"):e.classList.remove("active")}),[N]);var C=function(){var e=Object(c.useRef)(null);return Object(c.useEffect)((function(){var t=new b.a(e.current,{strings:["Daniansyah","Frontend Developer","Mobile Developer","UI Designer"],typeSpeed:40,loop:!0});return function(){t.destroy()}}),[]),Object(d.jsx)("span",{ref:e})};return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{id:"home",children:[Object(d.jsx)(l.a,{title:x,defer:!0}),Object(d.jsx)(j,{}),Object(d.jsxs)("div",{className:"hero",children:[Object(d.jsxs)("div",{className:"kiri",children:[Object(d.jsx)("p",{className:"teks-hello",children:"Hello"}),Object(d.jsxs)("div",{className:"container-teks-gerak",children:[Object(d.jsxs)("p",{className:"teks-gerak",children:["Im ",Object(d.jsx)(C,{})]}),Object(d.jsx)("img",{src:"".concat("//dani27-design.github.io/PortfolioV2","/dot.svg"),alt:"",className:"dot-teks"})]}),Object(d.jsx)("p",{className:"teks-about",children:"Are u know me so well? Let me introduce myself :)"}),Object(d.jsxs)("div",{className:"container-button",children:[Object(d.jsx)("a",{href:"-",className:"button",onClick:function(){window.open("mailto:muhammad.19043@mhs.unesa.ac.id?subject=I%20Want%20To%20Hire%20You&body=I%20need%20","_self")},children:"Hire Me"}),Object(d.jsx)("a",{href:"-",className:"button",onClick:function(){window.open("https://drive.google.com/file/d/17CUOqM02Jq2S17qY6S64cfXwuquVF5nS/view?usp=sharing","_self")},children:"Get CV"}),Object(d.jsx)("a",{href:"project",name:"project",className:"button",children:"Project"})]})]}),Object(d.jsx)(f.a,{reset:!0,children:Object(d.jsx)("div",{className:"gambar-header",children:Object(d.jsx)("img",{src:"".concat("//dani27-design.github.io/PortfolioV2","/header-image.png"),alt:"",className:"gambar-header"})})})]}),Object(d.jsx)("img",{"data-for":"bubble","data-tip":"Click me",onClick:function(){return O(!v)},src:"".concat("//dani27-design.github.io/PortfolioV2","/lolisister.gif"),alt:"",className:n?"anime-active":"anime"}),Object(d.jsx)(m.a,{id:"bubble",className:"bubble",textColor:v?"#fff":"#252525",backgroundColor:v?"#252525":"#fff",place:"left"})]})})}}}]);
//# sourceMappingURL=8.1cfdaaa4.chunk.js.map