(function(t){function e(e){for(var a,i,s=e[0],l=e[1],c=e[2],u=0,m=[];u<s.length;u++)i=s[u],o[i]&&m.push(o[i][0]),o[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(m.length)m.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(a=!1)}a&&(r.splice(e--,1),t=l(l.s=n[0]))}return t}var a={},i={app:0},o={app:0},r=[];function s(t){return l.p+"js/"+({}[t]||t)+"."+{"chunk-4ba7440a":"06d8d33e","chunk-56479946":"1d7f29b9"}[t]+".js"}function l(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(t){var e=[],n={"chunk-4ba7440a":1,"chunk-56479946":1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise(function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-4ba7440a":"90d48f53","chunk-56479946":"59ffc13f"}[t]+".css",o=l.p+a,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var c=r[s],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===a||u===o))return e()}var m=document.getElementsByTagName("style");for(s=0;s<m.length;s++){c=m[s],u=c.getAttribute("data-href");if(u===a||u===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var a=e&&e.target&&e.target.src||o,r=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");r.request=a,delete i[t],d.parentNode.removeChild(d),n(r)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)}).then(function(){i[t]=0}));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise(function(e,n){a=o[t]=[e,n]});e.push(a[2]=r);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=s(t),c=function(e){u.onerror=u.onload=null,clearTimeout(m);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,r=new Error("Loading chunk "+t+" failed.\n("+a+": "+i+")");r.type=a,r.request=i,n[1](r)}o[t]=void 0}};var m=setTimeout(function(){c({type:"timeout",target:u})},12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=a,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(n,a,function(e){return t[e]}.bind(null,a));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var m=0;m<c.length;m++)e(c[m]);var d=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("64a9"),i=n.n(a);i.a},"296f":function(t,e,n){},3399:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"site-title"}},[n("router-link",{staticClass:"mat-button no-shadow",attrs:{to:"/"}},[t._v("Myeongjae Kim")])],1),n("nav",[n("router-link",{staticClass:"mat-button no-shadow",attrs:{to:"/"}},[t._v("About")]),n("router-link",{staticClass:"mat-button no-shadow",attrs:{to:"/blog/"}},[t._v("Blog")]),n("router-link",{staticClass:"mat-button no-shadow",attrs:{to:"/musings/"}},[t._v("Musings")]),n("router-link",{staticClass:"mat-button no-shadow",attrs:{to:"/places/"}},[t._v("Places")])],1),n("router-view")],1)},o=[],r=(n("96cf"),n("3b8d")),s=(n("ac6a"),{name:"app",metaInfo:{title:"About",titleTemplate:"%s :: Myeongjae Kim",meta:[{charset:"utf-8"},{property:"og:title",content:"About",template:function(t){return"".concat(t," :: Myeongjae Kim")},vmid:"og:title"},{property:"og:description",content:"Information of Myeongjae Kim",template:function(t){return"".concat(t)},vmid:"og:description"},{property:"og:image",content:"https://avatars2.githubusercontent.com/u/15189621",template:function(t){return"".concat(t)},vmid:"og:image"}]},mounted:function(){function t(t){var e=t.target,n=e.getBoundingClientRect(),a=document.createElement("span");a.className="ripple",a.style.height=a.style.width=Math.max(n.width,n.height)+"px",e.appendChild(a),setTimeout(function(){a.parentNode.removeChild(a)},2e3);var i=t.pageY-n.top-a.offsetHeight/2-document.body.scrollTop,o=t.pageX-n.left-a.offsetWidth/2-document.body.scrollLeft;return a.style.top=i+"px",a.style.left=o+"px",!1}[].forEach.call(document.querySelectorAll(".mat-button"),function(e){e.addEventListener("mousedown",t)}),this.loadWebFonts()},methods:{loadWebFonts:function(){Object(r["a"])(regeneratorRuntime.mark(function t(){var e,n,a,i,o,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:r=function(t){var e=document.createElement("style");e.setAttribute("type","text/css"),e.styleSheet?e.styleSheet.cssText=t:e.innerHTML=t,document.getElementsByTagName("head")[0].appendChild(e)},o=function(){var t=function(t){if(!("FontFace"in t))return!1;var e=new FontFace("t",'url( "data:application/font-woff2;base64,d09GMgABAAAAAADcAAoAAAAAAggAAACWAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAABk4ALAoUNAE2AiQDCAsGAAQgBSAHIBtvAcieB3aD8wURQ+TZazbRE9HvF5vde4KCYGhiCgq/NKPF0i6UIsZynbP+Xi9Ng+XLbNlmNz/xIBBqq61FIQRJhC/+QA/08PJQJ3sK5TZFMlWzC/iK5GUN40psgqvxwBjBOg6JUSJ7ewyKE2AAaXZrfUB4v+hze37ugJ9d+DeYqiDwVgCawviwVFGnuttkLqIMGivmDg" ) format( "woff2" )',{});return e.load()["catch"](function(){}),"loading"==e.status||"loaded"==e.status}(window),a=e;if(t&&(a=n),i(a))r(localStorage.fontCache);else{var o=new XMLHttpRequest;o.open("GET",a,!0),o.onreadystatechange=function(){if(4===o.readyState){if("<"===o.responseText[0])return;r(o.responseText),localStorage.fontCache=o.responseText,localStorage.fontCacheFile=a}},o.send()}},i=function(t){return window.localStorage&&localStorage.fontCache&&localStorage.fontCacheFile===t},a=function(t,e,n){t.addEventListener?t.addEventListener(e,n,!1):t.attachEvent&&t.attachEvent("on"+e,n)},e="https://cdn.myeongjae.kim/css/fonts_woff.css",n="https://cdn.myeongjae.kim/css/fonts_woff2.css",window.localStorage&&localStorage.fontCache||document.cookie.indexOf("fontCache")>-1?o():a(window,"load",o);case 7:case"end":return t.stop()}},t,this)}))()}}}),l=s,c=(n("034f"),n("2877")),u=Object(c["a"])(l,i,o,!1,null,null,null);u.options.__file="App.vue";var m=u.exports,d=n("8c4f"),p=n("0a89"),f=n.n(p),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("img",{staticClass:"shadow",attrs:{id:"profileImage",alt:"dev@myeongjae.kim from gravatar.com",width:"200px",height:"200px"}}),n("img",{staticStyle:{display:"none"},attrs:{id:"baedal-move"}}),t._m(0),n("div",{attrs:{id:"personal-info"}},[n("div",{staticClass:"record"},[n("div",{staticClass:"icon"},[n("font-awesome-icon",{attrs:{icon:["fas","child"]}})],1),n("div",{staticClass:"text"},[t._v("Software Engineer")])]),n("div",{staticClass:"record"},[n("div",{staticClass:"icon"},[n("font-awesome-icon",{attrs:{icon:"map-marker-alt"}})],1),n("div",{staticClass:"text"},[n("router-link",{attrs:{to:"/places/"}},[t._v("Seoul, Korea")])],1)]),n("div",{staticClass:"record"},[n("div",{staticClass:"icon"},[n("font-awesome-icon",{attrs:{icon:"user-tie"}})],1),n("div",{staticClass:"text"},[t._v("Résumé")])]),n("div",{staticClass:"record"},[n("div",{staticClass:"icon"},[n("font-awesome-icon",{attrs:{icon:["fab","github"]}})],1),t._m(1)]),n("div",{staticClass:"record"},[n("div",{staticClass:"icon"},[n("font-awesome-icon",{attrs:{icon:"envelope"}})],1),t._m(2)]),n("div",{staticClass:"record"},[n("div",{staticClass:"icon"},[n("font-awesome-icon",{attrs:{icon:"pen-nib"}})],1),t._m(3)])]),n("footer",{attrs:{id:"footer"}},[n("img",{staticClass:"baedal",staticStyle:{float:"left",opacity:"0"},attrs:{src:t.baedal_img}}),t._v("\n    If you like my website, you can copy it from\n    "),n("a",{attrs:{href:"https://github.com/hrzon/terrace"}},[t._v("here")]),t._v("\n    .\n    "),n("a",{attrs:{href:"https://www.woowahan.com/"}},[n("img",{staticClass:"baedal",attrs:{src:t.baedal_img,border:"0"}})])])])},g=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[n("span",{attrs:{id:"name-eng"}},[t._v("Myeongjae Kim")]),n("span",{attrs:{id:"name-kor"}},[t._v("(김명재)")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text"},[n("a",{attrs:{href:"https://github.com/myeongjae-kim"}},[t._v("g.com/myeongjae-kim")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text"},[n("a",{attrs:{href:"mailto:dev@myeongjae.kim"}},[t._v("dev@myeongjae.kim")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text"},[n("a",{attrs:{href:"https://blog.myeongjae.kim"}},[t._v("blog.myeongjae.kim")])])}],v={name:"About",data:function(){return{baedal_img:"https://cdn.myeongjae.kim/res/baedal.gif"}},mounted:function(){Object(r["a"])(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:e=new Image,n=document.getElementById("profileImage"),e.onload=function(){n.src=e.src},e.src="https://cdn.myeongjae.kim/res/profile.jpeg";case 4:case"end":return t.stop()}},t,this)}))();var t=function(t,e){return Math.floor(Math.random()*(e-t+1))+t};this.baedal_img="https://cdn.myeongjae.kim/res/about_logos/"+t(0,2)+".png"}},b=v,y=(n("60bd"),Object(c["a"])(b,h,g,!1,null,"2c79b00c",null));y.options.__file="About.vue";var x=y.exports,_=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},w=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"places"},[n("h1",{staticClass:"component-title"},[t._v("Places")]),n("p",[t._v("where I have been")]),n("div",{attrs:{id:"map-wrapper"}},[n("iframe",{staticClass:"center shadow",attrs:{id:"map",src:"https://api.mapbox.com/styles/v1/myeongjae/cjl07pcz14j9t2sqmsp0swqhg.html?fresh=true&title=true&access_token=pk.eyJ1IjoibXllb25namFlIiwiYSI6ImNqbDAzdWFhZjEwd2kza3Bncmo0emFtM2wifQ.j2Y4BLsTivJxT7BU_bWFKg"}})])])}],A={name:"Places",metaInfo:{title:"Places",meta:[{charset:"utf-8"},{property:"og:title",content:"Places",template:function(t){return"".concat(t," :: Myeongjae Kim")},vmid:"og:title"},{property:"og:description",content:"where I have been",template:function(t){return"".concat(t)},vmid:"og:description"}]}},C=A,k=(n("e2b7"),Object(c["a"])(C,_,w,!1,null,"1be7949d",null));k.options.__file="Places.vue";var j=k.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"musings"}},[n("div",{attrs:{id:"musings-main"}},[n("h1",{staticClass:"component-title"},[t._v("Quotes")]),t._l(t.musings,function(e){return n("div",{key:e.key,attrs:{id:"musings-list"}},[n("div",{staticClass:"musing-element",style:e.css},[t._l(e.sentences,function(e){return n("p",{key:e,staticClass:"musing-sentence"},[t._v(t._s(e))])}),n("p",{staticClass:"musing-author"},[t._v(t._s(e.author))])],2)])})],2)])},E=[],M=(n("a481"),{name:"Musings",metaInfo:{title:"Musings",meta:[{charset:"utf-8"},{property:"og:title",content:"Musings",template:function(t){return"".concat(t," :: Myeongjae Kim")},vmid:"og:title"},{property:"og:description",content:"which inspire me",template:function(t){return"".concat(t)},vmid:"og:description"}]},beforeDestroy:function(){var t=document.querySelector("nav");t.setAttribute("class",t.getAttribute("class").replace(/ musing-font/gi,""))},data:function(){return{musings:[{key:0,sentences:["“많이 말하지도 말고,","갑자기 성내지도 말 것이다.”"],author:"- 정약용, <목민심서>, 창비, 2005",css:""},{key:1,sentences:["“The one thing you can’t take away from me is the way I choose to respond to what you do to me. The last of one’s freedoms is to choose one’s attitude in any given circumstance.”"],author:"- Viktor E. Frankl, <Man's Search for Meaning>",css:"font-family: 'Bad Script'; font-style:normal;"},{key:2,sentences:["“대화는 철학, 예술, 시, 정치, 사랑, 소문, 날씨라고","하는 7개의 현을 가진 7현금에 비유할 수 있다.”"],author:"- 안나 브라우넬 제임슨, <프랭클린 플래너, 2015년 11월 27일>",css:""},{key:3,sentences:["“It seems that perfection is attained not when there is nothing more to add, but when there is nothing more to remove.”"],author:"- Antoine de Saint Exupéry, <Wind, Sand and Stars>, 1939, Chapter 3",css:"font-family: 'Bad Script'; font-style:normal;"},{key:3,sentences:["“과학자라는 인간이 '빨간색으로 이름을 쓰면 죽는다'라는 미신에 휘둘려 이렇게 평정심을 잃은 모습을 보면서 제 자신이 얼마나 비과학적인 삶을 살고 있는가에 대해 생각해보게 됐습니다. 그래서 그 자리에서 일어나 책상에 불을 켜고 앉아서 하얀색 종이에다가 빨간색으로 제 이름을 썼어요. 그날 저는 비로소 '과학자 정재승'으로 다시 태어났습니다.”"],author:"- 정재승, <열두 발자국>, 2018, 여섯 번째 발자국, p160",css:"line-height: 2.2em;"}]}},mounted:function(){var t=document.querySelector("nav"),e=t.getAttribute("class");null==e&&(e=""),t.setAttribute("class",e+" musing-font"),[].forEach.call(document.querySelectorAll(".text"),function(t){for(var e=t.innerHTML,n="",a=0;a<e.length;a++)n+="<span>"+e[a]+"</span>";t.innerHTML=n})}}),L=M,T=(n("f477"),n("f4ef"),Object(c["a"])(L,S,E,!1,null,"2778fbae",null));T.options.__file="Musings.vue";var B=T.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[void 0!==t.year?n("div",{domProps:{innerHTML:t._s(t.articleHtmlSource)}}):n("div",t._l(t.index,function(e){return n("div",{key:e,staticClass:"blog-list-element"},[n("router-link",{attrs:{to:e.uri}},[t._v(t._s(e.title))]),n("br"),t._v("\n      "+t._s(e.date)+"\n    ")],1)}),0)])},I=[],O={name:"blogExample",data:function(){return{index:[{title:"[웹] SPA에서 Disqus 적용하기",uri:"/blog-example/2018/10/05/웹-spa에서-disqus-적용하기/",date:"2018/10/05"},{title:"[웹] Single Page App의 Search Engine Optimization과 VueJS",uri:"/blog-example/2018/09/23/single-page-app의-search-engine-optimizaion과-vuejs/",date:"2018/09/23"},{title:"[웹] 블로깅 시스템을 만들었습니다",uri:"/blog-example/2018/09/18/블로깅-시스템을-만들었습니다/",date:"2018/09/18"},{title:"[기술] Rob Pike의 프로그래밍 규칙 5가지",uri:"/blog-example/2017/09/17/rob-pike의-프로그래밍-규칙-5가지/",date:"2017/09/17"},{title:"[vim/Linux] 13. vim-go와 deoplete-go, Go언어를 위한 플러그인",uri:"/blog-example/2017/07/20/vimlinux-13-vim-go와-deoplete-go-go언어를-위한-플러그인/",date:"2017/07/20"},{title:"[vim/Linux] 12. 고요(Goyo), 방해금지 모드 플러그인",uri:"/blog-example/2017/07/20/vimlinux-12-고요goyo-방해금지-모드-플러그인/",date:"2017/07/20"},{title:"[vim/Linux] 11. NERD Commenter, 주석 단축키 플러그인",uri:"/blog-example/2017/07/19/vimlinux-11-nerd-commenter-주석-단축키-플러그인/",date:"2017/07/19"},{title:"[vim/Linux] 10. deoplete과 clang_complete, 자동 완성 플러그인",uri:"/blog-example/2017/07/19/vimlinux-10-deoplete과-clang_complete-자동-완성-플러그인/",date:"2017/07/19"},{title:"[vim/Linux] 9. Synatstic, 문법 체크 플러그인",uri:"/blog-example/2017/07/18/vimlinux-9-synatstic-문법-체크-플러그인/",date:"2017/07/18"},{title:"[vim/Linux] 8. UltiSnip과 vim-snippets",uri:"/blog-example/2017/07/15/vimlinux-8-ultisnip과-vim-snippets/",date:"2017/07/15"},{title:"[vim/Linux] 7. delimitMate, 괄호 자동 완성 플러그인",uri:"/blog-example/2017/07/15/vimlinux-7-delimitmate-괄호-자동-완성-플러그인/",date:"2017/07/15"},{title:"[vim/Linux] 6. vim-multiple-cursor와 vim-smooth-scroll",uri:"/blog-example/2017/07/14/vimlinux-6-vim-multiple-cursor와-vim-smooth-scroll/",date:"2017/07/14"},{title:"끝까지 가자",uri:"/blog-example/2016/12/03/끝까지-가자/",date:"2016/12/03"},{title:"[macOS] 맥 터미널로 우분투 사용하기",uri:"/blog-example/2016/11/02/macos-맥-터미널로-우분투-사용하기/",date:"2016/11/02"},{title:"[vim/Linux] 4. 플러그인 매니저를 설치하고 vim-airline 설치하기",uri:"/blog-example/2016/10/06/vimlinux-4-플러그인-매니저를-설치하고-vim-airline-설치하기/",date:"2016/10/06"},{title:"[vim/Linux] 3. vimrc 기본설정",uri:"/blog-example/2016/10/02/vimlinux-3-vimrc-기본설정/",date:"2016/10/02"},{title:"[vim/Linux] 2. Neovim 설치하고 24bit 컬러 적용하기",uri:"/blog-example/2016/10/01/vimlinux-2-neovim-설치하고-24bit-컬러-적용하기/",date:"2016/10/01"},{title:"[vim/Linux] 1. vim을 왜 쓰냐고?",uri:"/blog-example/2016/10/01/vimlinux-1-vim을-왜-쓰냐고/",date:"2016/10/01"},{title:"[책] ‘소프트웨어 장인’에서 언급한 책 10권",uri:"/blog-example/2016/06/27/책-소프트웨어-장인에서-언급한-책-10권/",date:"2016/06/27"},{title:"[책] 소프트웨어 장인",uri:"/blog-example/2016/03/01/소프트웨어-장인정신-서평/",date:"2016/03/01"},{title:"[발췌] 상아탑 아키텍트 대처하기",uri:"/blog-example/2016/03/01/발췌-상아탑-아키텍트-대처하기/",date:"2016/03/01"},{title:"[책] 소프트웨어, 누가 이렇게 개떡같이 만든거야?",uri:"/blog-example/2016/02/26/소프트웨어-누가-이렇-개떡-같이-만든거야/",date:"2016/02/26"},{title:"[발췌] 마초를 만드는 환경",uri:"/blog-example/2016/02/10/마초를-만드는-환경/",date:"2016/02/10"},{title:"[발췌] 남자아이가 마초가 되어가는 과정",uri:"/blog-example/2016/02/10/남자아이가-마초가-되어가는-과정/",date:"2016/02/10"},{title:"[발췌] 가장 오래된 작품들이 가장 덜 낡았다",uri:"/blog-example/2016/01/19/가장-오래된-작품들이-가장-덜-낡았다/",date:"2016/01/19"},{title:"[발췌] 진정한 교양?",uri:"/blog-example/2016/01/14/진정한-교양/",date:"2016/01/14"},{title:"[발췌] 독자는 의무가 아닌 애정의 행로를 따라가야 한다",uri:"/blog-example/2016/01/14/독자는-의무가-아닌-애정의-행로를-따라가야-한다/",date:"2016/01/14"},{title:"[책] The C Programming Language",uri:"/blog-example/2015/10/17/the-c-programming-language/",date:"2015/10/17"}],year:this.$route.params.year,month:this.$route.params.month,day:this.$route.params.day,title:this.$route.params.title,articleHtmlSource:""}},watch:{$route:function(t){var e=this;if(this.year=t.params.year,this.month=t.params.month,this.day=t.params.day,this.title=t.params.title,void 0!==this.year){var n="/blog_contents/"+this.year+"/"+this.month+"/"+this.day+"/"+this.title+".html";fetch(n).then(function(t){return t.text()}).then(function(t){return e.articleHtmlSource=t})}}}},F=O,q=(n("b5f6"),Object(c["a"])(F,P,I,!1,null,"eca7b750",null));q.options.__file="BlogExample.vue";var N=q.exports,$=function(){return n.e("chunk-4ba7440a").then(n.bind(null,"3d68"))},K=function(){return n.e("chunk-56479946").then(n.bind(null,"be4d"))};a["a"].use(d["a"]),a["a"].use(f.a);var R=new d["a"]({mode:"history",routes:[{path:"/",name:"About",component:x},{path:"/main",redirect:"/"},{path:"/about",redirect:"/"},{path:"/home",redirect:"/"},{path:"/blog",name:"Blog",component:$,children:[{path:":year/:month/:day/:title"}]},{path:"/places",name:"Places",component:j},{path:"/musings",name:"Musings",component:B},{path:"/404",name:"NotFound",component:K},{path:"/blog-example",name:"BlogExample",component:N,children:[{path:":year/:month/:day/:title"}]},{path:"*",redirect:"/404"}]}),H=n("ecee"),J=n("ad3d"),z=n("c074"),D=n("f2d1");H["c"].add(z["e"],z["c"],z["f"],z["b"],z["d"],D["a"],z["a"]),a["a"].component("font-awesome-icon",J["a"]),a["a"].config.productionTip=!1,new a["a"]({router:R,render:function(t){return t(m)}}).$mount("#app")},"60bd":function(t,e,n){"use strict";var a=n("dae7"),i=n.n(a);i.a},"64a9":function(t,e,n){},"770d":function(t,e,n){},b5f6:function(t,e,n){"use strict";var a=n("bf60"),i=n.n(a);i.a},bf60:function(t,e,n){},dae7:function(t,e,n){},e2b7:function(t,e,n){"use strict";var a=n("770d"),i=n.n(a);i.a},f477:function(t,e,n){"use strict";var a=n("3399"),i=n.n(a);i.a},f4ef:function(t,e,n){"use strict";var a=n("296f"),i=n.n(a);i.a}});
//# sourceMappingURL=app.1b987f80.js.map