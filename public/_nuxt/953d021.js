(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{364:function(t,e,n){var content=n(372);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(130).default)("2ab8ce4c",content,!0,{sourceMap:!1})},371:function(t,e,n){"use strict";n(364)},372:function(t,e,n){var o=n(129)((function(i){return i[1]}));o.push([t.i,"/*purgecss start ignore*/\n.nuxt-content p{\n  margin-bottom:20px\n}\n.nuxt-content h2{\n  font-weight:700;\n  font-size:28px\n}\n.nuxt-content h3{\n  font-weight:700;\n  font-size:22px\n}\n.icon.icon-link{\n  display:inline-block;\n  width:20px;\n  height:20px;\n  background-size:20px 20px\n}\n\n/*purgecss end ignore*/",""]),o.locals={},t.exports=o},377:function(t,e,n){"use strict";n.r(e);n(227),n(18);var o=n(369),r=n(95),l=n(354),c=Object(r.b)({components:{NavBar:o.a},setup:function(){var t=Object(r.j)(),e=Object(l.a)(),n=Object(r.a)((function(){return t.value.params.id}));console.log("postId: ",n.value);var o=Object(r.a)((function(){return e.posts.find((function(p){return p.id===n.value}))}));console.log("Post: ",o.value.title);return{post:o,formatDate:function(t){return new Date(1e3*t.seconds).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}}}),v=(n(371),n(70)),component=Object(v.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav-bar"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("div",{staticClass:"w-3/4 mx-auto overflow-hidden rounded-lg shadow-lg cursor-pointer"},[n("img",{staticClass:"object-cover w-full h-96",attrs:{src:t.post.imageUrl,alt:"Post Image"}}),t._v(" "),n("div",{staticClass:"absolute top-32 left-0 px-6 py-4"},[n("p",{staticClass:"leading-normal text-gray-100"},[t._v(t._s(t.formatDate(t.post.createdOn)))]),t._v(" "),n("h4",{staticClass:"mb-3 text-2xl font-semibold tracking-tight text-white"},[t._v(t._s(t.post.title))]),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("p",{staticClass:"leading-normal text-gray-100"},[t._v(t._s(t.post.message))])])]),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("div",{staticClass:"flex flex-col justify-center items-center cursor-pointer"},[n("a",{staticClass:"group relative inline-flex items-center px-3 py-3",attrs:{href:"/"}},[n("svg-icon",{staticClass:"h-5 w-5 group-hover:text-indigo-700",attrs:{name:"circle-left"}}),t._v(" "),n("span",{staticClass:"ml-2 text-lg font-semibold"},[t._v(" Back to Home")])],1)])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{NavBar:n(363).default})}}]);