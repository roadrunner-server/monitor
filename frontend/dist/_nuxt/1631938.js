(window.webpackJsonp=window.webpackJsonp||[]).push([[21,10,11,12,18],{614:function(t,e,r){"use strict";r.r(e);var n={name:"WarningMessage"},o=r(45),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"alert alert-warning border d-flex align-items-center mb-0",attrs:{role:"alert"}},[e("div",{staticClass:"mr-3"},[e("b-icon",{attrs:{icon:"exclamation-triangle-fill",variant:"danger","font-scale":"1.5"}})],1),t._v(" "),e("div",[t._t("default")],2)])}),[],!1,null,"1db0f313",null);e.default=component.exports},615:function(t,e,r){"use strict";var n=r(11);r(10),r(53),r(59),r(79),r(58);e.a={mounted:function(){this.refreshPeriodically()},beforeDestroy:function(){this.resetPeriodically()},methods:{fetchData:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},resetPeriodically:function(){clearTimeout(this.timeout)},refreshPeriodically:function(){var t=this;Promise.all([this.fetchData()]).then((function(){t.timeout=setTimeout((function(){t.refreshPeriodically()}),t.refreshTimeout||5e3)}))}}}},616:function(t,e,r){"use strict";r.d(e,"b",(function(){return n})),r.d(e,"a",(function(){return o}));r(299);var n=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=e?1e3:1024;if(Math.abs(t)<n)return t+" B";var o=e?["kB","MB","GB","TB","PB","EB","ZB","YB"]:["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],u=-1,l=Math.pow(10,r);do{t/=n,++u}while(Math.round(Math.abs(t)*l)/l>=n&&u<o.length-1);return t.toFixed(r)+" "+o[u]},o=function(t){return t.toFixed(3)+"%"}},617:function(t,e,r){var content=r(620);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(91).default)("4627ee83",content,!0,{sourceMap:!1})},619:function(t,e,r){"use strict";r(617)},620:function(t,e,r){var n=r(90)(!1);n.push([t.i,".worker-status{width:12px;height:12px}",""]),t.exports=n},621:function(t,e,r){"use strict";r.r(e);var n=r(628),o=r.n(n),l=r(616),c={props:{worker:Object},computed:{classStr:function(){return this.failed?"bg-warning":this.ready?"bg-success":"bg-primary"},working:function(){return 2===this.worker.status},failed:function(){return 0===this.worker.status},ready:function(){return 1===this.worker.status},cpuUsage:function(){return Object(l.a)(this.worker.CPUPercent)},memoryUsage:function(){return Object(l.b)(this.worker.memoryUsage)},created:function(){var t=new o.a(this.worker.created);return this.$moment(t.toISOStringFull()).fromNow()}}},d=(r(619),r(45)),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"list-group-item d-flex justify-content-between"},[e("div",{staticClass:"d-flex align-items-center"},[e("div",{staticClass:"rounded-circle worker-status mr-2",class:t.classStr,attrs:{role:"status"}}),t._v(" "),e("span",{staticClass:"badge badge-light border mr-2"},[t._v("PID #"+t._s(t.worker.pid))]),t._v(" "),e("span",{staticClass:"badge badge-light border mr-2"},[t._v("CPU - "+t._s(t.cpuUsage))]),t._v(" "),e("span",{staticClass:"badge badge-light border mr-2"},[t._v("Memory - "+t._s(t.memoryUsage))]),t._v(" "),e("span",{staticClass:"badge badge-light border mr-2"},[t._v("Execs - "+t._s(t.worker.numExecs))]),t._v(" "),t.worker.created>0?e("span",{staticClass:"badge badge-light border mr-2"},[t._v("Created - "+t._s(t.created))]):t._e()]),t._v(" "),t.worker.statusStr?e("span",{staticClass:"badge text-white border mr-2",class:t.classStr},[t._v("\n      Status - "+t._s(t.worker.statusStr)+"\n  ")]):t._e()])}),[],!1,null,null,null);e.default=component.exports},625:function(t,e,r){"use strict";r.r(e);r(48);var n=r(11),o=(r(58),r(40),{props:{server:String,plugin:Object,showLink:{type:Boolean,default:!0}},data:function(){return{loading:!1,open:!0,settings:["jobs","service"]}},methods:{toggle:function(){this.open=!this.open},hasSettings:function(){return this.settings.indexOf(this.plugin.name)>-1},reset:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.loading=!0,e.next=4,t.$api.plugins.reset(t.server,t.plugin.name);case 4:t.loading=!1,t.$toast.success("".concat(t.pluginName," workers on server ").concat(t.server," were restarted.")),t.$emit("reset"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t.$toast.error(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}},computed:{pluginName:function(){return this.plugin.name.capitalize()},hasWorkers:function(){return this.plugin.workers.length>0},sortedWorkers:function(){return this.plugin.workers}}}),l=r(45),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"card mb-4 shadow-sm"},[e("div",{staticClass:"card-header d-flex justify-content-between"},[t.showLink?e("div",{staticClass:"d-flex align-items-center"},[e("b-icon",{attrs:{icon:"puzzle","font-scale":"1.4"}}),t._v(" "),e("h5",{staticClass:"ml-3 mb-0"},[t.hasSettings()?e("NuxtLink",{attrs:{to:"/plugin/".concat(t.plugin.name)}},[t._v("\n          "+t._s(t.pluginName)+" plugin\n        ")]):e("span",[t._v("\n          "+t._s(t.pluginName)+" plugin\n        ")])],1)],1):e("span",[t._v("\n        Workers\n    ")]),t._v(" "),e("div",{staticClass:"d-flex align-items-center"},[e("span",{staticClass:"badge badge-light border mr-2"},[t._v("\n        Workers: "),e("strong",[t._v(t._s(t.plugin.workers.length))])]),t._v(" "),e("button",{staticClass:"btn btn-light-outline btn-sm",on:{click:t.toggle}},[t.open?e("b-icon",{attrs:{icon:"chevron-up"}}):e("b-icon",{attrs:{icon:"chevron-down"}})],1)])]),t._v(" "),t.open?e("div",[t.hasWorkers?e("div",{staticClass:"list-group list-group-flush"},t._l(t.sortedWorkers,(function(t){return e("PluginsWorker",{key:t.pid,attrs:{worker:t}})})),1):e("UIWarningMessage",[t._v("\n      There are no run workers.\n    ")]),t._v(" "),t.plugin.is_ressetable?e("div",{staticClass:"card-footer p-2"},[e("button",{staticClass:"btn btn-sm btn-danger ml-2",attrs:{type:"button"},on:{click:t.reset}},[e("b-icon",{attrs:{icon:"arrow-clockwise"}}),t._v("\n        Restart\n      ")],1)]):t._e()],1):t._e()])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PluginsWorker:r(621).default,UIWarningMessage:r(614).default})},638:function(t,e,r){"use strict";r.r(e);r(48);var n=r(11),o=(r(58),r(300),{mixins:[r(615).a],props:{server:String,refreshTimeout:{type:Number,default:2e3}},methods:{onReset:function(){this.fetchData()},fetchData:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("plugins/fetchPlugins",t.server);case 2:case"end":return e.stop()}}),e)})))()}},watch:{server:function(){this.fetchData()}},computed:{plugins:function(){return this.$store.getters["plugins/getPlugins"]},hasPlugins:function(){return this.plugins.length>0}}}),l=r(45),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",[t.hasPlugins?e("div",t._l(t.plugins,(function(r){return e("PluginsItem",{key:r.name,attrs:{server:t.server,plugin:r},on:{reset:t.onReset}})})),1):e("UIWarningMessage",[t._v("\n    There are no available plugins on "),e("strong",[t._v(t._s(t.server))]),t._v(" server.\n  ")])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PluginsItem:r(625).default,UIWarningMessage:r(614).default})},649:function(t,e,r){"use strict";r.r(e);var n={computed:{server:function(){return this.$store.getters["servers/getDefaultServer"]}}},o=r(45),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return t.server?e("div",[e("PluginsList",{attrs:{server:t.server}})],1):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PluginsList:r(638).default})}}]);