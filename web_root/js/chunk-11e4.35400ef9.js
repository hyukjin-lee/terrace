(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-11e4"],{"3d68":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"blog"},[void 0==t.year?a("div",{attrs:{id:"blog-main"}},[a("h1",[t._v("Blog")]),a("p",[t._v("Under development. "),a("router-link",{attrs:{to:"/blog/2018/09/11/this-is-test-document1"}},[t._v("Go to test doc")])],1),a("img",{attrs:{src:"https://cdn.myeongjae.kim/res/logo1.jpg",width:"300px"}})]):a("div",{attrs:{id:"blog-contents"}},[a("div",{staticClass:"blog-title"},[a("h1",[t._v(t._s(t.title))]),a("p",{staticClass:"meta"},[t._v(t._s(t.year)+" / "+t._s(t.month)+" / "+t._s(t.day))])]),a("div",{domProps:{innerHTML:t._s(t.article)}})])])},i=[],n=(a("cadf"),a("551c"),a("097d"),{name:"Blog",mounted:function(){this.getPage()},updated:function(){var t=document.querySelector("#blog-contents");null!=t&&(t=t.querySelectorAll("h1"),1!=t.length&&(this.title=t[1].innerHTML,t[1].remove()))},data:function(){return{year:this.$route.params.year,month:this.$route.params.month,day:this.$route.params.day,title:this.$route.params.title,article:"Loading..."}},watch:{$route:function(t,e){this.year=t.params.year,this.month=t.params.month,this.day=t.params.day,this.title=t.params.title,this.getPage()}},methods:{getPage:function(){if(void 0!=this.year){var t="/blog_contents/"+this.year+"/"+this.month+"/"+this.day+"/"+this.title+".html",e=this,a=new XMLHttpRequest;a.open("GET",t,!0),a.onreadystatechange=function(){4===a.readyState&&("<!DO"==a.responseText.substring(0,4)?window.location.href="/#/404":e.article=a.responseText)},a.send()}}}}),o=n,r=(a("dd5d"),a("2877")),d=Object(r["a"])(o,s,i,!1,null,"eb3e8cee",null);d.options.__file="Blog.vue";e["default"]=d.exports},"7cca":function(t,e,a){},dd5d:function(t,e,a){"use strict";var s=a("7cca"),i=a.n(s);i.a}}]);
//# sourceMappingURL=chunk-11e4.35400ef9.js.map