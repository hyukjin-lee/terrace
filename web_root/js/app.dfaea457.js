(function(t){function e(e){for(var a,o,i=e[0],c=e[1],u=e[2],l=0,d=[];l<i.length;l++)o=i[l],r[o]&&d.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);m&&m(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,o=1;o<n.length;o++){var i=n[o];0!==r[i]&&(a=!1)}a&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},o={app:0},r={app:0},s=[];function i(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-1a81":"8b5214cb","chunk-1aae":"84cb65f7"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-1a81":1,"chunk-1aae":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise(function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-1a81":"58822ab7","chunk-1aae":"e6a1c6e7"}[t]+".css",o=c.p+a,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var i=r[s],u=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(u===a||u===o))return e()}var l=document.getElementsByTagName("style");for(s=0;s<l.length;s++){i=l[s],u=i.getAttribute("data-href");if(u===a||u===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var a=e&&e.target&&e.target.src||o,r=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");r.request=a,n(r)},d.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(d)}).then(function(){o[t]=0}));var a=r[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise(function(e,n){a=r[t]=[e,n]});e.push(a[2]=s);var u,l=document.getElementsByTagName("head")[0],d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=i(t),u=function(e){d.onerror=d.onload=null,clearTimeout(m);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+a+": "+o+")");s.type=a,s.request=o,n[1](s)}r[t]=void 0}};var m=setTimeout(function(){u({type:"timeout",target:d})},12e4);d.onerror=d.onload=u,l.appendChild(d)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var m=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("04f5"),o=n.n(a);o.a},"04f5":function(t,e,n){},"160c":function(t,e,n){},"4ac8":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"site-title"}},[n("router-link",{staticClass:"mat-button no-shadow",attrs:{to:"/"}},[t._v("Myeongjae Kim")])],1),n("nav",[n("router-link",{staticClass:"mat-button no-shadow",attrs:{to:"/"}},[t._v("About")]),n("router-link",{staticClass:"mat-button no-shadow",attrs:{to:"/blog/"}},[t._v("Blog")]),n("router-link",{staticClass:"mat-button no-shadow",attrs:{to:"/musings/"}},[t._v("Musings")]),n("router-link",{staticClass:"mat-button no-shadow",attrs:{to:"/places/"}},[t._v("Places")])],1),n("router-view")],1)},r=[],s=(n("96cf"),n("3040")),i=(n("ac6a"),{name:"app",metaInfo:{title:"About",titleTemplate:"%s :: Myeongjae Kim",meta:[{charset:"utf-8"},{property:"og:title",content:"About",template:function(t){return"".concat(t," :: Myeongjae Kim")},vmid:"og:title"},{property:"og:description",content:"Information of Myeongjae Kim",template:function(t){return"".concat(t)},vmid:"og:description"},{property:"og:image",content:"https://avatars2.githubusercontent.com/u/15189621",template:function(t){return"".concat(t)},vmid:"og:image"}]},mounted:function(){function t(t){var e=t.target,n=e.getBoundingClientRect(),a=document.createElement("span");a.className="ripple",a.style.height=a.style.width=Math.max(n.width,n.height)+"px",e.appendChild(a),setTimeout(function(){a.parentNode.removeChild(a)},2e3);var o=t.pageY-n.top-a.offsetHeight/2-document.body.scrollTop,r=t.pageX-n.left-a.offsetWidth/2-document.body.scrollLeft;return a.style.top=o+"px",a.style.left=r+"px",!1}[].forEach.call(document.querySelectorAll(".mat-button"),function(e){e.addEventListener("mousedown",t)}),this.loadWebFonts()},methods:{loadWebFonts:function(){Object(s["a"])(regeneratorRuntime.mark(function t(){var e,n,a,o,r,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:s=function(t){var e=document.createElement("style");e.setAttribute("type","text/css"),e.styleSheet?e.styleSheet.cssText=t:e.innerHTML=t,document.getElementsByTagName("head")[0].appendChild(e)},r=function(){var t=function(t){if(!("FontFace"in t))return!1;var e=new FontFace("t",'url( "data:application/font-woff2;base64,d09GMgABAAAAAADcAAoAAAAAAggAAACWAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAABk4ALAoUNAE2AiQDCAsGAAQgBSAHIBtvAcieB3aD8wURQ+TZazbRE9HvF5vde4KCYGhiCgq/NKPF0i6UIsZynbP+Xi9Ng+XLbNlmNz/xIBBqq61FIQRJhC/+QA/08PJQJ3sK5TZFMlWzC/iK5GUN40psgqvxwBjBOg6JUSJ7ewyKE2AAaXZrfUB4v+hze37ugJ9d+DeYqiDwVgCawviwVFGnuttkLqIMGivmDg" ) format( "woff2" )',{});return e.load()["catch"](function(){}),"loading"==e.status||"loaded"==e.status}(window),a=e;if(t&&(a=n),o(a))s(localStorage.fontCache);else{var r=new XMLHttpRequest;r.open("GET",a,!0),r.onreadystatechange=function(){if(4===r.readyState){if("<"===r.responseText[0])return;s(r.responseText),localStorage.fontCache=r.responseText,localStorage.fontCacheFile=a}},r.send()}},o=function(t){return window.localStorage&&localStorage.fontCache&&localStorage.fontCacheFile===t},a=function(t,e,n){t.addEventListener?t.addEventListener(e,n,!1):t.attachEvent&&t.attachEvent("on"+e,n)},e="https://cdn.myeongjae.kim/css/fonts_woff.css",n="https://cdn.myeongjae.kim/css/fonts_woff2.css",window.localStorage&&localStorage.fontCache||document.cookie.indexOf("fontCache")>-1?r():a(window,"load",r);case 7:case"end":return t.stop()}},t,this)}))()}}}),c=i,u=(n("034f"),n("2877")),l=Object(u["a"])(c,o,r,!1,null,null,null);l.options.__file="App.vue";var d=l.exports,m=n("8c4f"),f=n("0a89"),p=n.n(f),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("img",{staticClass:"shadow",attrs:{id:"profileImage",alt:"dev@myeongjae.kim from gravatar.com",width:"200px",height:"200px"}}),n("img",{staticStyle:{display:"none"},attrs:{id:"baedal-move"}}),t._m(0),n("div",{attrs:{id:"personal-info"}},[n("div",{staticClass:"record"},[n("div",{staticClass:"icon"},[n("font-awesome-icon",{attrs:{icon:["fas","child"]}})],1),n("div",{staticClass:"text"},[t._v("Software Engineer")])]),n("div",{staticClass:"record"},[n("div",{staticClass:"icon"},[n("font-awesome-icon",{attrs:{icon:"map-marker-alt"}})],1),n("div",{staticClass:"text"},[n("router-link",{attrs:{to:"/places/"}},[t._v("Seoul, Korea")])],1)]),n("div",{staticClass:"record"},[n("div",{staticClass:"icon"},[n("font-awesome-icon",{attrs:{icon:"user-tie"}})],1),n("div",{staticClass:"text"},[t._v("Résumé")])]),n("div",{staticClass:"record"},[n("div",{staticClass:"icon"},[n("font-awesome-icon",{attrs:{icon:["fab","github"]}})],1),t._m(1)]),n("div",{staticClass:"record"},[n("div",{staticClass:"icon"},[n("font-awesome-icon",{attrs:{icon:"envelope"}})],1),t._m(2)]),n("div",{staticClass:"record"},[n("div",{staticClass:"icon"},[n("font-awesome-icon",{attrs:{icon:"pen-nib"}})],1),t._m(3)])]),n("div",[n("div",[n("button",{on:{click:t.sendMessage}},[t._v("Send Test Message")])])]),n("footer",{attrs:{id:"footer"}},[n("img",{staticClass:"baedal",staticStyle:{float:"left",opacity:"0"},attrs:{src:t.baedal_img}}),t._v("\n\n    If you like my website, you can copy it from\n      "),n("a",{attrs:{href:"https://github.com/hrzon/terrace"}},[t._v("here")]),t._v(".\n\n  "),n("a",{attrs:{href:"https://www.woowahan.com/"}},[n("img",{staticClass:"baedal",attrs:{src:t.baedal_img,border:"0"}})])])])},g=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[n("span",{attrs:{id:"name-eng"}},[t._v("Myeongjae Kim")]),n("span",{attrs:{id:"name-kor"}},[t._v("(김명재)")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text"},[n("a",{attrs:{href:"https://github.com/hrzon"}},[t._v("github.com/hrzon")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text"},[n("a",{attrs:{href:"mailto:dev@myeongjae.kim"}},[t._v("dev@myeongjae.kim")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text"},[n("a",{attrs:{href:"https://blog.myeongjae.kim"}},[t._v("blog.myeongjae.kim")])])}],v={name:"About",data:function(){return{baedal_img:"https://cdn.myeongjae.kim/res/baedal.gif"}},mounted:function(){Object(s["a"])(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:e=new Image,n=document.getElementById("profileImage"),e.onload=function(){n.src=e.src},e.src="https://cdn.myeongjae.kim/res/profile.jpeg";case 4:case"end":return t.stop()}},t,this)}))();var t=function(t,e){return Math.floor(Math.random()*(e-t+1))+t};this.baedal_img="https://cdn.myeongjae.kim/res/about_logos/"+t(0,3)+".png"},methods:{sendMessage:function(t){var e=new XMLHttpRequest;e.open("POST","https://notify-api.line.me/api/notify",!0),e.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),e.setRequestHeader("Authorization","Bearer H4lh8bHFX7NuZTHGaDc1uOb4iITTWrwVQ93eg1PgK8P"),e.onreadystatechange=function(){this.readyState===XMLHttpRequest.DONE&&this.status},e.send("message=testmessage")}}},y=v,b=(n("a7ca"),Object(u["a"])(y,h,g,!1,null,"e8809dec",null));b.options.__file="About.vue";var w=b.exports,A=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},_=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"places"},[n("h1",{staticClass:"component-title"},[t._v("Places")]),n("p",[t._v("where I have been")]),n("div",{attrs:{id:"map-wrapper"}},[n("iframe",{staticClass:"center shadow",attrs:{id:"map",src:"https://api.mapbox.com/styles/v1/myeongjae/cjl07pcz14j9t2sqmsp0swqhg.html?fresh=true&title=true&access_token=pk.eyJ1IjoibXllb25namFlIiwiYSI6ImNqbDAzdWFhZjEwd2kza3Bncmo0emFtM2wifQ.j2Y4BLsTivJxT7BU_bWFKg"}})])])}],C={name:"Places",metaInfo:{title:"Places",meta:[{charset:"utf-8"},{property:"og:title",content:"Places",template:function(t){return"".concat(t," :: Myeongjae Kim")},vmid:"og:title"},{property:"og:description",content:"where I have been",template:function(t){return"".concat(t)},vmid:"og:description"}]}},k=C,j=(n("e2b7"),Object(u["a"])(k,A,_,!1,null,"1be7949d",null));j.options.__file="Places.vue";var x=j.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"musings"}},[n("div",{attrs:{id:"musings-main"}},[n("h1",{staticClass:"component-title"},[t._v("Quotes")]),t._l(t.musings,function(e){return n("div",{key:e.key,attrs:{id:"musings-list"}},[n("div",{staticClass:"musing-element",style:e.css},[t._l(e.sentences,function(e){return n("p",{key:e,staticClass:"musing-sentence"},[t._v(t._s(e))])}),n("p",{staticClass:"musing-author"},[t._v(t._s(e.author))])],2)])})],2)])},S=[],M=(n("a481"),{name:"Musings",metaInfo:{title:"Musings",meta:[{charset:"utf-8"},{property:"og:title",content:"Musings",template:function(t){return"".concat(t," :: Myeongjae Kim")},vmid:"og:title"},{property:"og:description",content:"which inspire me",template:function(t){return"".concat(t)},vmid:"og:description"}]},beforeDestroy:function(){var t=document.querySelector("nav");t.setAttribute("class",t.getAttribute("class").replace(/ musing-font/gi,""))},data:function(){return{musings:[{key:0,sentences:["“많이 말하지도 말고,","갑자기 성내지도 말 것이다.”"],author:"- 정약용, <목민심서>, 창비, 2005",css:""},{key:1,sentences:["“The one thing you can’t take away from me is the way I choose to respond to what you do to me. The last of one’s freedoms is to choose one’s attitude in any given circumstance.”"],author:"- Viktor E. Frankl, <Man's Search for Meaning>",css:"font-family: 'Bad Script'; font-style:normal;"},{key:2,sentences:["“대화는 철학, 예술, 시, 정치, 사랑, 소문, 날씨라고","하는 7개의 현을 가진 7현금에 비유할 수 있다.”"],author:"- 안나 브라우넬 제임슨, <프랭클린 플래너, 2015년 11월 27일>",css:""},{key:3,sentences:["“It seems that perfection is attained not when there is nothing more to add, but when there is nothing more to remove.”"],author:"- Antoine de Saint Exupéry, <Wind, Sand and Stars>, 1939, Chapter 3",css:"font-family: 'Bad Script'; font-style:normal;"}]}},mounted:function(){var t=document.querySelector("nav"),e=t.getAttribute("class");null==e&&(e=""),t.setAttribute("class",e+" musing-font"),[].forEach.call(document.querySelectorAll(".text"),function(t){for(var e=t.innerHTML,n="",a=0;a<e.length;a++)n+="<span>"+e[a]+"</span>";t.innerHTML=n})}}),T=M,B=(n("f477"),n("bc82"),Object(u["a"])(T,E,S,!1,null,"3029b4df",null));B.options.__file="Musings.vue";var I=B.exports,P=function(){return n.e("chunk-1a81").then(n.bind(null,"3d68"))},F=function(){return n.e("chunk-1aae").then(n.bind(null,"be4d"))};a["a"].use(m["a"]),a["a"].use(p.a);var q=new m["a"]({mode:"history",routes:[{path:"/",name:"About",component:w},{path:"/main",redirect:"/"},{path:"/about",redirect:"/"},{path:"/home",redirect:"/"},{path:"/blog",name:"Blog",component:P,children:[{path:":year/:month/:day/:title"}]},{path:"/places",name:"Places",component:x},{path:"/musings",name:"Musings",component:I},{path:"/404",name:"NotFound",component:F},{path:"*",redirect:"/404"}]}),O=n("ecee"),N=n("7a55"),L=n("c074"),K=n("f2d1");O["library"].add(L["e"],L["c"],L["f"],L["b"],L["d"],K["a"],L["a"]),a["a"].component("font-awesome-icon",N["FontAwesomeIcon"]),a["a"].config.productionTip=!1,new a["a"]({router:q,render:function(t){return t(d)}}).$mount("#app")},"67e1":function(t,e,n){},a7ca:function(t,e,n){"use strict";var a=n("160c"),o=n.n(a);o.a},aaa9:function(t,e,n){},bc82:function(t,e,n){"use strict";var a=n("4ac8"),o=n.n(a);o.a},e2b7:function(t,e,n){"use strict";var a=n("aaa9"),o=n.n(a);o.a},f477:function(t,e,n){"use strict";var a=n("67e1"),o=n.n(a);o.a}});
//# sourceMappingURL=app.dfaea457.js.map