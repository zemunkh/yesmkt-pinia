(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{358:function(t,e,n){"use strict";n.r(e);var o=n(95),r=Object(o.b)({props:{isLoading:{type:Boolean,default:!1},buttonText:{type:String,default:"Post"},loadingText:{type:String,default:"Posting"},iconName:{type:String,default:"circle-up"}},setup:function(t,e){var n=e.emit;return{clickEvent:function(){return n("clickEvent",t.buttonText)}}}}),l=n(70),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.isLoading?n("button",{staticClass:"group -ml-px relative inline-flex items-center px-3 py-3 border border-indigo-300 text-sm leading-5 font-medium rounded-r-md text-white bg-indigo-700 hover:text-indigo-700 hover:bg-white focus:outline-none focus:shadow-outline-blue focus:border-indigo-300 active:bg-gray-100 active:text-indigo-700 transition ease-in-out duration-150"},[n("svg",{staticClass:"text-white h-5 w-5 group-hover:text-indigo-700 animate-spin",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"}})]),t._v(" "),n("span",{staticClass:"ml-2 text-sm font-semibold"},[t._v(t._s(t.loadingText))])]):n("button",{staticClass:"group -ml-px relative inline-flex items-center px-3 py-3 border border-indigo-300 text-sm leading-5 font-medium rounded-r-md text-white bg-indigo-700 hover:text-indigo-700 hover:bg-white focus:outline-none focus:shadow-outline-blue focus:border-indigo-300 active:bg-gray-100 active:text-indigo-700 transition ease-in-out duration-150",on:{click:t.clickEvent}},[n("svg-icon",{staticClass:"h-5 w-5 group-hover:text-indigo-700",attrs:{name:t.iconName}}),t._v(" "),n("span",{staticClass:"ml-2 text-sm font-semibold"},[t._v(t._s(t.buttonText))])],1)])}),[],!1,null,null,null);e.default=component.exports}}]);