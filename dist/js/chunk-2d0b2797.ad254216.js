(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b2797"],{"23ee":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{},[i("div",{staticClass:"widget--fantasy"},[i("div",{staticClass:"widget--fantasy-title"},[i("h1",{staticClass:"m-0"},[t.english?i("strong",[t._v("Multimedia")]):t._e(),t.french?i("strong",[t._v("Multimédia")]):t._e()])])]),i("section",{staticClass:"container mt-5"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-xs-12 col-md-8 pr-md-5"},[i("div",{staticClass:"row"},t._l(t.multimedia,function(e){return i("div",{key:e.id,staticClass:"col-xs-12"},[i("div",{staticClass:"panel panel-default w-100 secondary--background widget--multimedia widget--borderless"},[i("div",{staticClass:"panel-body row"},[i("div",{staticClass:"col-xs-12 col-md-6"},[e.url?i("youtube",{staticClass:"youtube-player",attrs:{"video-id":t.getVideoId(e.url)}}):t._e()],1),i("div",{staticClass:"col-xs-12 col-md-6"},[t.english&&e.title_en?i("h3",{staticClass:"mt-1"},[t._v(t._s(e.title_en))]):t._e(),t.french&&e.title_fr||!e.title_en?i("h3",{staticClass:"mt-1"},[t._v(t._s(e.title_fr))]):t._e(),e.authors?i("h4",{staticClass:"widget--title mt-2"},t._l(e.authors,function(e,s){return i("strong",{key:e},[t._v("\n                      "+t._s(e)+" "),s>1?i("span",{staticClass:"mx-1"},[t._v("/")]):t._e()])}),0):t._e(),e.description_en&&t.english?i("p",[t._v(t._s(e.description_en))]):t._e(),e.description_fr&&t.french?i("p",[t._v(t._s(e.description_fr))]):t._e(),e.createdAt?i("h5",{staticClass:"mt-4"},[i("i",{staticClass:"fa fa-clock-o mr-1",attrs:{"aria-hidden":"true"}}),t._v(" "+t._s(t._f("date")(e.createdAt)))]):t._e()])])])])}),0)]),i("div",{staticClass:"col-xs-12 col-md-4"},[i("Sidebar")],1)])]),t.recommandations.length?i("section",[i("div",{staticClass:"container mt-5 mb-3"},[i("h4",{staticClass:"pull-left widget--see-more"},[t.french?i("span",[t._v("Voir aussi")]):t._e(),t.english?i("span",[t._v("See more")]):t._e()]),i("div",{staticClass:"pull-right"},[i("a",{staticClass:"widget--hover-brand-color pointer",on:{click:t.scrollRight}},[i("i",{staticClass:"fa fa-angle-left mr-4 w3-xxlarge"})]),i("a",{staticClass:"widget--hover-brand-color pointer",on:{click:t.scrollLeft}},[i("i",{staticClass:"fa fa-angle-right w3-xxlarge"})])])]),i("div",{staticClass:"primary--background"},[i("div",{staticClass:"container py-4"},[i("div",{staticClass:"d-flex flex-nowrap flex-row align-items-center widget--more",attrs:{id:"widget--more"}},t._l(t.recommandations,function(e){return i("div",{key:e.id,staticClass:"widget--more-box"},[i("div",{staticClass:"widget--more-boxing"},[i("h4",{staticClass:"my-0"},[t.french?i("strong",[t._v(t._s(e.title_fr))]):t._e(),t.english?i("strong",[t._v(t._s(e.title_en))]):t._e()]),i("router-link",{staticClass:"btn widget--brand widget--radius-link mr-4 widget--position",attrs:{tag:"button",type:"button",to:e.link}},[i("i",{staticClass:"fa fa-angle-right mr-2",attrs:{"aria-hidden":"true"}}),t.french?i("span",[t._v("Lire plus")]):t._e(),t.english?i("span",[t._v("Read more")]):t._e()])],1)])}),0)])])]):t._e()])},a=[],l=i("cebc"),r=i("2f62"),o=i("72fb"),n=i("f6dd"),c={mixins:[o["a"]],data:function(){return{videos:[{url:"https://www.youtube.com/watch?v=HWiwQdVYwNI",author:"Déborah Mpombolo",createdAt:"31-01-2019",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},{url:"https://www.youtube.com/watch?v=RwYThDRd4Qc&t=50s",author:"Déborah Mpombolo",createdAt:"31-01-2019"},{url:"https://www.youtube.com/watch?v=x-F7IO7pcWs",author:"Déborah Mpombolo",createdAt:"31-01-2019"},{url:"https://www.youtube.com/watch?v=qnIUuP2G2xw",author:"Déborah Mpombolo",createdAt:"31-01-2019"},{url:"https://www.youtube.com/watch?v=cu_uwC_8xFI&t=107s",author:"Déborah Mpombolo",createdAt:"31-01-2019"}],recommandations:[{title_en:"News",title_fr:"Actualités",link:"/news"},{title_en:"Alerts",title_fr:"Alertes",link:"/alerts"},{title_en:"Publications",title_fr:"Publications",link:"/publications"},{title_en:"Events",title_fr:"Evénements",link:"/events"},{title_en:"Webinars",title_fr:"Webinaires",link:"/webinars"}]}},computed:Object(l["a"])({},Object(r["b"])(["multimedia"])),methods:{getVideoId:function(t){return Object(n["b"])(t)}},created:function(){this.multimedia.length||this.$store.dispatch("getMultimedia")}},d=c,u=i("2877"),m=Object(u["a"])(d,s,a,!1,null,null,null);e["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2d0b2797.ad254216.js.map