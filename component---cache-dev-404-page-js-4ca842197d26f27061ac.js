(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{295:function(e,t,a){"use strict";a.r(t),a.d(t,"pagesQuery",(function(){return l}));a(87),a(172),a(23),a(2),a(50),a(34),a(13),a(64);var n=a(0),r=a.n(n),s=a(28);function o(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var i=function(e){var t,a;function n(t){var a,n=(a=e.call(this,t)||this).props.data.allSitePage.nodes.map((function(e){return e.path}));return a.state={showCustom404:!1,initPagePaths:n,pagePaths:n,pagePathSearchTerms:""},a.showCustom404=a.showCustom404.bind(h(a)),a.handlePagePathSearch=a.handlePagePathSearch.bind(h(a)),a.handleSearchTermChange=a.handleSearchTermChange.bind(h(a)),a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var i=n.prototype;return i.showCustom404=function(){this.setState({showCustom404:!0})},i.handleSearchTermChange=function(e){this.setState({pagePathSearchTerms:e.target.value})},i.handlePagePathSearch=function(e){e.preventDefault();var t=o(this.state.initPagePaths),a=new RegExp(""+this.state.pagePathSearchTerms);this.setState({pagePaths:t.filter((function(e){return a.test(e)}))})},i.render=function(){var e,t=this.props.location.pathname;return e="/"===t?"src/pages/index.js":"/"===t.slice(-1)?"src/pages"+t.slice(0,-1)+".js":"src/pages"+t+".js",this.state.showCustom404?this.props.custom404:r.a.createElement("div",null,r.a.createElement("h1",null,"Gatsby.js development 404 page"),r.a.createElement("p",null,"There's not a page yet at ",r.a.createElement("code",null,t)),this.props.custom404?r.a.createElement("p",null,r.a.createElement("button",{onClick:this.showCustom404},"Preview custom 404 page")):r.a.createElement("p",null,"A custom 404 page wasn't detected - if you would like to add one, create a component in your site directory at ",r.a.createElement("code",null,"src/pages/404.js"),"."),r.a.createElement("p",null,"Create a React.js component in your site directory at"," ",r.a.createElement("code",null,e)," ","and this page will automatically refresh to show the new page component you created."),this.state.initPagePaths.length>0&&r.a.createElement("div",null,r.a.createElement("p",null,"If you were trying to reach another page, perhaps you can find it below."),r.a.createElement("h2",null,"Pages (",this.state.pagePaths.length!=this.state.initPagePaths.length?this.state.pagePaths.length+"/"+this.state.initPagePaths.length:this.state.initPagePaths.length,")"),r.a.createElement("form",{onSubmit:this.handlePagePathSearch},r.a.createElement("label",null,"Search:",r.a.createElement("input",{type:"text",id:"search",placeholder:"Search pages...",value:this.state.pageSearchTerm,onChange:this.handleSearchTermChange})),r.a.createElement("input",{type:"submit",value:"Submit"})),r.a.createElement("ul",null,this.state.pagePaths.map((function(e,t){return t<100&&r.a.createElement("li",{key:e},r.a.createElement(s.Link,{to:e},e))})),this.state.pagePaths.length>100&&r.a.createElement("p",{style:{fontWeight:"bold"}},"... and ",this.state.pagePaths.length-100," more."))))},n}(r.a.Component);t.default=i;var l="2363535085"}}]);
//# sourceMappingURL=component---cache-dev-404-page-js-4ca842197d26f27061ac.js.map