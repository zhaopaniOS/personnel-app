webpackJsonp([67],{"8e00":function(t,e,n){"use strict";var a=n("viA7");e.a={data:function(){return{list:null,listLoading:!0,downloadLoading:!1}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;this.listLoading=!0,n.i(a.a)().then(function(e){t.list=e.data.items,t.listLoading=!1})},handleDownload:function(){var t=this;this.downloadLoading=!0,Promise.all([n.e(108),n.e(109)]).then(function(){var e=n("zWO4"),a=e.export_json_to_excel,o=["序号","文章标题","作者","阅读数","发布时间"],i=["id","title","author","pageviews","display_time"],l=t.list;a(o,t.formatJson(i,l),"列表excel"),t.downloadLoading=!1}.bind(null,n)).catch(n.oe)},formatJson:function(t,e){return e.map(function(e){return t.map(function(t){return e[t]})})}}}},OqES:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("8e00"),o=n("R5af"),i=n("sACD"),l=i(a.a,o.a,null,null,null);l.options.__file="src/views/excel/index.vue",l.esModule&&Object.keys(l.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),l.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.default=l.exports},R5af:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-button",{staticStyle:{"margin-bottom":"20px"},attrs:{type:"primary",icon:"document",loading:t.downloadLoading},on:{click:t.handleDownload}},[t._v("导出excel")]),t._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:t.listLoading,expression:"listLoading",modifiers:{body:!0}}],attrs:{data:t.list,"element-loading-text":"拼命加载中",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"ID",width:"95"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.$index)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"文章标题"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.title)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"作者",width:"95",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-tag",[t._v(t._s(e.row.author))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"阅读数",width:"115",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.pageviews)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",prop:"created_at",label:"发布时间",width:"220"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("i",{staticClass:"el-icon-time"}),t._v(" "),n("span",[t._v(t._s(e.row.display_time))])]}}])})],1)],1)},o=[];a._withStripped=!0;var i={render:a,staticRenderFns:o};e.a=i},viA7:function(t,e,n){"use strict";function a(t){return n.i(l.a)({url:"/article/list",method:"get",params:t})}function o(){return n.i(l.a)({url:"/article/detail",method:"get"})}function i(t){return n.i(l.a)({url:"/article/pv",method:"get",params:{pv:t}})}e.a=a,e.c=o,e.b=i;var l=n("Vo7i")}});