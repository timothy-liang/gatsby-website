(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{143:function(t,n,e){"use strict";e.r(n);var i=e(151),o=e.n(i),a=e(0),r=e.n(a),c=e(144),s=e(150),l=(e(36),e(74)),u=e.n(l),p=e(145),d=c.b.div.withConfig({displayName:"contentGrid__ContentGrid",componentId:"sc-1athpd0-0"})(["max-width:1200px;margin:0px auto;display:grid;grid-gap:25px;grid-template-columns:repeat(auto-fit,500px);grid-template-rows:repeat(2,400px);align-items:center;justify-content:center;"]),m=c.b.div.withConfig({displayName:"contentGrid__ContentBox",componentId:"sc-1athpd0-1"})(["background-color:",";background-image:url(",");background-position:center;background-repeat:no-repeat;background-size:auto ",";width:500px;height:400px;border-radius:3px;box-shadow:0 0 20px 3px rgba(0,0,0,0.1);font-size:15px;font-family:Asap,sans-serif;display:flex;align-items:center;justify-content:center;"],function(t){return t.backgroundColor},function(t){return t.backgroundImage},function(t){return t.backgroundSize}),g=Object(c.b)(function(t){t.backgroundColor;var n=u()(t,["backgroundColor"]);return r.a.createElement(p.a,n)}).withConfig({displayName:"contentGrid__ContentOverlay",componentId:"sc-1athpd0-2"})(["width:100%;height:100%;position:relative;opacity:0;transition:opacity:0s,background-color .2s;transition-timing-function:ease;background-color:",";text-decoration:none;overflow:hidden;:hover{cursor:pointer;background-color:",";opacity:1;transition:opacity .4s;}"],function(t){return x(t.backgroundColor,0)},function(t){return x(t.backgroundColor,80)}),b=c.b.div.withConfig({displayName:"contentGrid__ContentTitle",componentId:"sc-1athpd0-3"})(["position:relative;top:30%;left:10%;color:white;font:Asap;font-size:50px;letter-spacing:2px;"]),f=c.b.div.withConfig({displayName:"contentGrid__ContentSubTitle",componentId:"sc-1athpd0-4"})(["position:relative;top:30%;left:12%;color:white;font:Asap;font-size:25px;letter-spacing:1px;"]),h=function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,null,t.title),r.a.createElement(f,null,t.subtitle))},v=function(t,n,e,i,o,a){return r.a.createElement(m,{backgroundColor:t,backgroundImage:n,backgroundSize:e},r.a.createElement(g,{backgroundColor:t,to:a},r.a.createElement(h,{title:i,subtitle:o})))},x=function(t,n){return t=t.replace("#",""),"rgba("+parseInt(t.substring(0,2),16)+","+parseInt(t.substring(2,4),16)+","+parseInt(t.substring(4,6),16)+","+n/100+")"},y=function(){return r.a.createElement(d,null,v("#dfe6e9","ads_logo.svg","38%","Google","Intern","/about/"),v("#E56969","ig_logo_2.svg","43%","Facebook","Intern","/about/"),v("#463F3A","chrome_logo_2.svg","32%","Google","Intern","/about/"),v("#BCB8B1","vandy_logo.png","35%","Vanderbilt","Researcher & TA","/about/"))},w=e(149);function k(){var t=o()(["\n  body {\n    padding: 0;\n    margin: 0;\n  }\n"]);return k=function(){return t},t}var _=Object(c.a)(k()),C=c.b.div.withConfig({displayName:"pages__MainPage",componentId:"ifild7-0"})(["margin:auto;"]);n.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(_,null),r.a.createElement(C,null,r.a.createElement(s.a,{focus:"Work"}),r.a.createElement(y,null),r.a.createElement(w.a,null)))}},145:function(t,n,e){"use strict";var i=e(0),o=e.n(i),a=e(4),r=e.n(a),c=e(33),s=e.n(c);e.d(n,"a",function(){return s.a});e(146),o.a.createContext({});r.a.object,r.a.string.isRequired,r.a.func,r.a.func},146:function(t,n,e){var i;t.exports=(i=e(148))&&i.default||i},148:function(t,n,e){"use strict";e.r(n);e(34);var i=e(0),o=e.n(i),a=e(4),r=e.n(a),c=e(55),s=e(2),l=function(t){var n=t.location,e=s.default.getResourcesForPathnameSync(n.pathname);return e?o.a.createElement(c.a,Object.assign({location:n,pageResources:e},e.json)):null};l.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},n.default=l},149:function(t,n,e){"use strict";var i=e(0),o=e.n(i),a=e(144).b.div.withConfig({displayName:"footer__Footer",componentId:"sc-1abtvul-0"})(["width:100%;text-align:center;margin:100px auto 100px auto;color:#555555;font-size:16px;font-family:'Asap',sans-serif;letter-spacing:1px;"]);n.a=function(){return o.a.createElement(a,null,"© ",(new Date).getFullYear()," Tim Liang")}},150:function(t,n,e){"use strict";var i=e(74),o=e.n(i),a=e(0),r=e.n(a),c=e(144),s=e(145),l=(e(147),e(35)),u=e.n(l),p=e(7),d=e.n(p),m=c.b.button.withConfig({displayName:"hamburger__Hamburger",componentId:"sc-1epbw9o-0"})(["z-index:100;padding:15px 15px;display:inline-block;cursor:pointer;transition-property:opacity,filter;transition-duration:0.15s;transition-timing-function:linear;font:inherit;color:inherit;text-transform:none;background-color:transparent;border:0;margin:0;overflow:visible;:hover{opacity:0.7;}outline:none;@media (min-width:1000px){display:none;}"]),g=c.b.span.withConfig({displayName:"hamburger__HamburgerBox",componentId:"sc-1epbw9o-1"})(["width:40px;height:24px;display:inline-block;position:relative;"]),b=c.b.span.withConfig({displayName:"hamburger__HamburgerInner",componentId:"sc-1epbw9o-2"})(['top:50%;margin-top:-2px;&,::before,::after{background-color:#000;width:40px;height:4px;border-radius:4px;position:absolute;transition-property:transform;transition-duration:0.15s;transition-timing-function:ease;content:"";display:block;}top:auto;bottom:0;transition-duration:0.13s;transition-delay:0.13s;transition-timing-function:cubic-bezier(0.55,0.055,0.675,0.19);::after{top:-20px;transition:top 0.2s 0.2s cubic-bezier(0.33333,0.66667,0.66667,1),opacity 0.1s linear;}::before{top -10px;transition:top 0.12s 0.2s cubic-bezier(0.33333,0.66667,0.66667,1),transform 0.13s cubic-bezier(0.55,0.055,0.675,0.19);}',""],function(t){return t.active?"\n    transform: translate3d(0, -10px, 0) rotate(-45deg);\n    transition-delay: 0.22s;\n    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n\n    ::after {\n      top: 0;\n      opacity: 0;\n      transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), opacity 0.1s 0.22s linear;\n    }\n\n    ::before {\n      top: 0;\n      transform: rotate(-90deg);\n      transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);\n    }\n  ":""}),f=Object(c.b)(function(t){t.active;var n=o()(t,["active"]);return r.a.createElement(s.a,n)}).withConfig({displayName:"hamburger__HamburgerLink",componentId:"sc-1epbw9o-3"})(["position:relative;width:200px;display:block;border:none;margin:20px auto;top:25%;font-family:Asap;font-size:30px;text-decoration:none;color:black;text-align:center;:hover{cursor:pointer;}opacity:",";transition:opacity ",";transition-timing-function:ease-in;"],function(t){return t.active?"1":"0"},function(t){return t.active?".7s":"0s"}),h=c.b.div.withConfig({displayName:"hamburger__HamburgerMenu",componentId:"sc-1epbw9o-4"})(["background-color:white;width:100%;position:absolute;top:75px;left:0px;height:",";transition:height .32s;transition-timing-function:ease;z-index:2;"],function(t){return t.active?"40%":"0%"}),v=function(t){function n(n){var e;return(e=t.call(this,n)||this).state={isActive:!1},e.handleClick=e.handleClick.bind(u()(e)),e}d()(n,t);var e=n.prototype;return e.handleClick=function(){this.setState(function(t){return{isActive:!t.isActive}})},e.render=function(){return r.a.createElement("span",null,r.a.createElement(m,{onClick:this.handleClick},r.a.createElement(g,null,r.a.createElement(b,{active:this.state.isActive}))),r.a.createElement(h,{active:this.state.isActive},r.a.createElement(f,{to:"/",active:this.state.isActive},"Work"),r.a.createElement(f,{to:"/about/",active:this.state.isActive},"About")))},n}(r.a.Component),x=c.b.div.withConfig({displayName:"navBar__NavBar",componentId:"sc-1i4ruxv-0"})(["margin-bottom:6%;padding:0px 20px;display:flex;flex-flow:row nowrap;justify-content:space-between;"]),y=c.b.div.withConfig({displayName:"navBar__NavCluster",componentId:"sc-1i4ruxv-1"})([""]),w=Object(c.b)(function(t){t.focused;var n=o()(t,["focused"]);return r.a.createElement(s.a,n)}).withConfig({displayName:"navBar__NavLink",componentId:"sc-1i4ruxv-2"})(["background-color:White;display:inline-box;border:none;margin:20px;padding:2px 0px;font-family:Asap;font-size:23px;letter-spacing:1px;text-decoration:none;color:",";:hover{cursor:pointer;}@media (max-width:1000px){display:none;}"],function(t){return t.focused?"black":"gray"}),k=c.b.div.withConfig({displayName:"navBar__NavLogo",componentId:"sc-1i4ruxv-3"})(["margin:20px;font-family:Asap;font-size:23px;letter-spacing:1px;"]);n.a=function(t){return r.a.createElement(x,null,r.a.createElement(y,null,r.a.createElement(k,null,"TIM LIANG")),r.a.createElement(y,null,r.a.createElement(w,{to:"/",focused:"Work"===t.focus},"Work"),r.a.createElement(w,{to:"/about/",focused:"About"===t.focus},"About"),r.a.createElement(v,null)))}}}]);
//# sourceMappingURL=component---src-pages-index-js-dd78dfa2cc548c9dd6ea.js.map