(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{87:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(8),o=(n(0),n(97)),i={id:"react-navigation-integration",title:"React Navigation Integration",description:"Bottom Sheet React Navigation integration.",keywords:["bottomsheet","bottom-sheet","bottom sheet","react-native","react native","ios","android","sheet","modal","presentation modal","reanimated"],image:"/img/bottom-sheet-preview.gif",slug:"/react-navigation-integration"},c={unversionedId:"guides/react-navigation-integration",id:"guides/react-navigation-integration",isDocsHomePage:!1,title:"React Navigation Integration",description:"Bottom Sheet React Navigation integration.",source:"@site/docs/guides/react-naigation.md",slug:"/react-navigation-integration",permalink:"/react-native-bottom-sheet/react-navigation-integration",editUrl:"https://github.com/gorhom/react-native-bottom-sheet/edit/master/website/docs/guides/react-naigation.md",version:"current",sidebar:"packages",previous:{title:"Adding Shadow",permalink:"/react-native-bottom-sheet/adding-shadow"},next:{title:"Troubleshooting",permalink:"/react-native-bottom-sheet/troubleshooting"}},l=[],s={toc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"One of the main goal of this library, is to allow user to fully integrate a stack navigator in the bottom sheet. This integration allow lots of opportunities for a native-like experience in your app \ud83d\ude07"),Object(o.b)("p",null,"However, there are some tricks has to be follow to enable both libraries to work together seamlessly."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"You need to override ",Object(o.b)("inlineCode",{parentName:"li"},"safeAreaInsets"),", by default ",Object(o.b)("inlineCode",{parentName:"li"},"React Navigation")," add the safe area insets to all its navigators, but since your navigator will properly won't cover full screen, you will need to override it and set it to ",Object(o.b)("inlineCode",{parentName:"li"},"0"),".")),Object(o.b)("p",null,"For more details regarding the implementation, please have a look at the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/gorhom/react-native-bottom-sheet/blob/master/example/src/screens/advanced/NavigatorExample.tsx"},"Navigator Example"),"."))}u.isMDXComponent=!0},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return g}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,g=p["".concat(i,".").concat(m)]||p[m]||b[m]||o;return n?a.a.createElement(g,c(c({ref:t},s),{},{components:n})):a.a.createElement(g,c({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);