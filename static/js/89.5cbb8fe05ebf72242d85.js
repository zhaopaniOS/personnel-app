webpackJsonp([89],{"Iu5+":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{class:e.className,style:{height:e.height,width:e.width}})},s=[];i._withStripped=!0;var a={render:i,staticRenderFns:s};t.a=a},gSHH:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("yeZC"),s=n("Iu5+"),a=n("sACD"),r=a(i.a,s.a,null,null,null);r.options.__file="src/views/dashboard/admin/fenxingqifendianzhongChart.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] fenxingqifendianzhongChart.vue: functional components are not supported with templates, they should use render functions."),t.default=r.exports},yeZC:function(e,t,n){"use strict";var i=n("QP9f"),s=n.n(i),a=n("0xDb");n("KhDz"),t.a={props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"350px"},autoResize:{type:Boolean,default:!0}},data:function(){return{chart:null}},mounted:function(){var e=this;this.initChart(),this.autoResize&&(this.__resizeHanlder=n.i(a.c)(function(){e.chart&&e.chart.resize()},100),window.addEventListener("resize",this.__resizeHanlder)),document.getElementsByClassName("sidebar-container")[0].addEventListener("transitionend",this.__resizeHanlder)},beforeDestroy:function(){if(this.chart){this.autoResize&&window.removeEventListener("resize",this.__resizeHanlder);document.getElementsByClassName("sidebar-container")[0].removeEventListener("transitionend",this.__resizeHanlder),this.chart.dispose(),this.chart=null}},methods:{initChart:function(){this.chart=s.a.init(this.$el,"macarons");var e=["1:00","2:00","3:00","4:00","5:00","6:00","7:00","8:00","9:00","10:00","11:00","12:00","13:00","14:00","15:00","17:00","18:00"],t=["星期一","星期二","星期三","星期四","星期五","星期六","星期天"],n=[[0,0,0],[0,1,0],[0,2,0],[0,3,0],[0,4,1],[0,5,1],[0,6,1],[0,7,0],[0,8,2],[0,9,3],[0,10,2],[0,11,3],[0,12,5],[0,13,19],[0,14,6],[0,15,11],[0,16,0],[1,0,0],[1,1,1],[1,2,0],[1,3,0],[1,4,1],[1,5,0],[1,6,0],[1,7,0],[1,8,3],[1,9,1],[1,10,1],[1,11,4],[1,12,2],[1,13,5],[1,14,6],[1,15,6],[1,16,0],[2,0,0],[2,1,1],[2,2,0],[2,3,2],[2,4,0],[2,5,1],[2,6,1],[2,7,4],[2,8,1],[2,9,3],[2,10,10],[2,11,6],[2,12,1],[2,13,3],[2,14,5],[2,15,1],[2,16,0],[3,0,0],[3,1,0],[3,2,0],[3,3,3],[3,4,3],[3,5,4],[3,6,3],[3,7,3],[3,8,3],[3,9,0],[3,10,1],[3,11,0],[3,12,2],[3,13,1],[3,14,0],[3,15,0],[3,16,0],[4,0,0],[4,1,0],[4,2,0],[4,3,4],[4,4,3],[4,5,6],[4,6,2],[4,7,2],[4,8,5],[4,9,0],[4,10,0],[4,11,1],[4,12,1],[4,13,0],[4,14,0],[4,15,0],[4,16,0],[5,0,0],[5,1,0],[5,2,0],[5,3,2],[5,4,0],[5,5,1],[5,6,2],[5,7,3],[5,8,3],[5,9,1],[5,10,2],[5,11,0],[5,12,0],[5,13,1],[5,14,1],[5,15,0],[5,16,0],[6,0,0],[6,1,0],[6,2,0],[6,3,0],[6,4,0],[6,5,0],[6,6,0],[6,7,7],[6,8,4],[6,9,4],[6,10,5],[6,11,1],[6,12,1],[6,13,2],[6,14,2],[6,15,3],[6,16,0]];n=n.map(function(e){return[e[1],e[0],e[2]]}),this.chart.setOption({title:{text:"年员工请假时间段统计",link:"https://github.com/pissang/echarts-next/graphs/punch-card"},legend:{data:["论文数量"],left:"right"},toolbox:{feature:{saveAsImage:{show:!0}}},tooltip:{position:"top",formatter:function(n){return"在"+e[n.value[0]]+"年期间，"+t[n.value[1]]+"共发表了"+n.value[2]+"份论文"}},grid:{left:2,bottom:10,right:10,containLabel:!0},xAxis:{type:"category",data:e,boundaryGap:!1,splitLine:{show:!0,lineStyle:{color:"#999",type:"dashed"}},axisLine:{show:!1}},yAxis:{type:"category",data:t,axisLine:{show:!1}},series:[{name:"论文数量",type:"scatter",symbolSize:function(e){return 4.2*e[2]},data:n,animationDelay:function(e){return 5*e}}]})}}}}});