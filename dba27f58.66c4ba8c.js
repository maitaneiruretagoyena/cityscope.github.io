(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{127:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/CityScopeJS_arch-fbcfe17353a25c81f7465768449446e7.jpg"},80:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return a})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var i=r(2),n=r(6),o=(r(0),r(86)),c={id:"CityScope Ecosystem"},a={unversionedId:"general/CityScope Ecosystem",id:"general/CityScope Ecosystem",isDocsHomePage:!1,title:"CityScope Ecosystem",description:"CityScopeJS is a modular, open-ended architecture for MIT CityScope project.",source:"@site/docs/general/ecosystem.md",slug:"/general/CityScope Ecosystem",permalink:"/general/CityScope Ecosystem",editUrl:"https://github.com/CityScope/cityscope.github.io/blob/new_docsite/docsite/docs/general/ecosystem.md",version:"current",sidebar:"sidebar",previous:{title:"Introduction",permalink:"/"},next:{title:"Guideline",permalink:"/general/Guideline"}},s=[{value:"CityScope Architecture",id:"cityscope-architecture",children:[]},{value:"Analysis modules",id:"analysis-modules",children:[]},{value:"CityScope Server (cityIO)",id:"cityscope-server-cityio",children:[]},{value:"Tangible User Interfaces",id:"tangible-user-interfaces",children:[]}],l={rightToc:s};function p(e){var t=e.components,c=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},l,c,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"CityScopeJS is a modular, open-ended architecture for MIT CityScope project."),Object(o.b)("h2",{id:"cityscope-architecture"},"CityScope Architecture"),Object(o.b)("p",null,Object(o.b)("img",{alt:"CityScopeJS Architecture",src:r(127).default})),Object(o.b)("p",null,"CityScopeJS includes several other modules for building, testing and deploying an end-to-end CityScope platform. Each module is developed as a standalone part of the system with minimal dependency on others. Data flow between modules is done using ",Object(o.b)("a",{parentName:"p",href:"https://cityio.media.mit.edu"},"cityIO"),", which operates between the different modules."),Object(o.b)("h2",{id:"analysis-modules"},"Analysis modules"),Object(o.b)("p",null,"Different analysis modules calculate various indicators on urban performance, such as noise, mobility, energy and others. These analysis modules are developed by experts in each evaluation field."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Urban Indicators module: ",Object(o.b)("a",{parentName:"li",href:"https://github.com/CityScope/CS_Urban_Indicators"},"https://github.com/CityScope/CS_Urban_Indicators")),Object(o.b)("li",{parentName:"ul"},"A service providing mobility simulation, Agent Based Simulation, and aggregated mobility prediction for CityScope projects ",Object(o.b)("a",{parentName:"li",href:"https://github.com/CityScope/CS_Mobility_Service"},"https://github.com/CityScope/CS_Mobility_Service")),Object(o.b)("li",{parentName:"ul"},"Noise Modeling for Grasbrook, Hamburg: ",Object(o.b)("a",{parentName:"li",href:"https://github.com/CityScope/CSL_Hamburg_Noise"},"https://github.com/CityScope/CSL_Hamburg_Noise")),Object(o.b)("li",{parentName:"ul"},"Agent Based Modeling ",Object(o.b)("a",{parentName:"li",href:"https://github.com/CityScope/CS_Simulation_GAMA"},"https://github.com/CityScope/CS_Simulation_GAMA")),Object(o.b)("li",{parentName:"ul"},"Traffic Simulation module using DLR SUMO ",Object(o.b)("a",{parentName:"li",href:"https://github.com/CityScope/CS_SUMOscope"},"https://github.com/CityScope/CS_SUMOscope"))),Object(o.b)("h2",{id:"cityscope-server-cityio"},"CityScope Server (cityIO)"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://github.com/CityScope/CS_CityIO"},"https://github.com/CityScope/CS_CityIO")),Object(o.b)("h2",{id:"tangible-user-interfaces"},"Tangible User Interfaces"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"CityScope Scanner: ",Object(o.b)("a",{parentName:"li",href:"https://github.com/CityScope/CS_CityScoPy"},"https://github.com/CityScope/CS_CityScoPy"))))}p.isMDXComponent=!0},86:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var i=r(0),n=r.n(i);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},y=n.a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),y=i,m=u["".concat(c,".").concat(y)]||u[y]||b[y]||o;return r?n.a.createElement(m,a(a({ref:t},l),{},{components:r})):n.a.createElement(m,a({ref:t},l))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,c=new Array(o);c[0]=y;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var l=2;l<o;l++)c[l]=r[l];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}y.displayName="MDXCreateElement"}}]);