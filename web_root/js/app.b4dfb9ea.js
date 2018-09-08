(function(t){function e(e){for(var r,i,s=e[0],l=e[1],c=e[2],p=0,f=[];p<s.length;p++)i=s[p],a[i]&&f.push(a[i][0]),a[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var l=n[s];0!==a[l]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("04f5"),a=n.n(r);a.a},"04f5":function(t,e,n){},"21b6":function(t,e,n){"use strict";var r=n("891e"),a=n.n(r);a.a},5212:function(t,e,n){"use strict";var r=n("5886"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"site-title"}},[n("router-link",{attrs:{to:"/"}},[t._v("Myeongjae Kim")])],1),n("nav",[n("router-link",{attrs:{to:"/"}},[t._v("About")]),n("router-link",{attrs:{to:"/blog"}},[t._v("Blog")]),n("router-link",{attrs:{to:"/places"}},[t._v("Places")])],1),n("router-view")],1)},o=[],i={name:"app"},s=i,l=(n("034f"),n("2877")),c=Object(l["a"])(s,a,o,!1,null,null,null);c.options.__file="App.vue";var u=c.exports,p=n("8c4f"),f=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("img",{attrs:{id:"profileImage",alt:"Profile Image",src:"https://cdn.myeongjae.kim/res/profile.jpeg",width:"200px",height:"200px"}}),n("h1",[t._v("Greetings!")]),n("p",[t._v("Nice to meet you :)")]),n("p",[t._v("안녕하세요?")])])}],d={name:"About"},m=d,_=(n("5212"),Object(l["a"])(m,f,v,!1,null,"79e79ae2",null));_.options.__file="About.vue";var h=_.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"blog"},[void 0==t.year?n("div",{attrs:{id:"blog-main"}},[n("h1",[t._v("Blog")]),n("p",[t._v("Under development.")]),n("img",{attrs:{src:"https://cdn.myeongjae.kim/res/logo2.jpg",width:"400px"}})]):n("div",{attrs:{id:"blog-contents"}},[n("p",[t._v(" "+t._s(t.year)+" / "+t._s(t.month)+" / "+t._s(t.day)+" / "+t._s(t.title))])])])},g=[],y={name:"Blog",data:function(){return{year:this.$route.params.year,month:this.$route.params.month,day:this.$route.params.day,title:this.$route.params.title}}},j=y,w=(n("21b6"),Object(l["a"])(j,b,g,!1,null,"7c5c8c7b",null));w.options.__file="Blog.vue";var x=w.exports,O=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},P=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"places"},[n("h1",[t._v("Places")]),n("p",[t._v("where I have been")]),n("div",{attrs:{id:"map-wrapper"}},[n("iframe",{attrs:{id:"map",src:"https://api.mapbox.com/styles/v1/myeongjae/cjl07pcz14j9t2sqmsp0swqhg.html?fresh=true&title=true&access_token=pk.eyJ1IjoibXllb25namFlIiwiYSI6ImNqbDAzdWFhZjEwd2kza3Bncmo0emFtM2wifQ.j2Y4BLsTivJxT7BU_bWFKg"}})])])}],$={name:"Places"},k=$,E=(n("6269"),Object(l["a"])(k,O,P,!1,null,"186da064",null));E.options.__file="Places.vue";var B=E.exports,F=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},I=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"not-found"}},[n("div",{staticClass:"circles"},[n("p",[t._v("404"),n("br"),n("small",[t._v("PAGE NOT FOUND")])]),n("span",{staticClass:"circle big"}),n("span",{staticClass:"circle med"}),n("span",{staticClass:"circle small"})])])}],S={name:"NotFound"},A=S,C=(n("640d"),Object(l["a"])(A,F,I,!1,null,"42e205fa",null));C.options.__file="NotFound.vue";var N=C.exports;r["a"].use(p["a"]);var M=new p["a"]({routes:[{path:"/",name:"About",component:h},{path:"/blog",name:"Blog",component:x,children:[{path:":year/:month/:day/:title"}]},{path:"/places",name:"Places",component:B},{path:"*",name:"NotFound",component:N}]}),T=n("27d6"),J=n.n(T);r["a"].config.productionTip=!1,new r["a"]({router:M,render:function(t){return t(u)}}).$mount("#app"),function(){J.a.load({google:{families:["Source Sans Pro:300,700","Inconsolata"]}})}()},5886:function(t,e,n){},6269:function(t,e,n){"use strict";var r=n("6b82"),a=n.n(r);a.a},"640d":function(t,e,n){"use strict";var r=n("c78a"),a=n.n(r);a.a},"6b82":function(t,e,n){},"891e":function(t,e,n){},c78a:function(t,e,n){}});
//# sourceMappingURL=app.b4dfb9ea.js.map