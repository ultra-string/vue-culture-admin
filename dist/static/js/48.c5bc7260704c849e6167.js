webpackJsonp([48],{rwV5:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("s3ol"),a=n("c/Tr"),l=n.n(a),r=n("7+uW");function o(e,t,n,i,a){var s=[],c=[];return l()(e).forEach(function(e){void 0===e._expanded&&r.default.set(e,"_expanded",t);var l=1;if(void 0!==i&&null!==i&&(l=i+1),r.default.set(e,"_level",l),n?(r.default.set(e,"parent",n),s[l]||(s[l]=0),r.default.set(e,"_marginLeft",s[l]+n._marginLeft),r.default.set(e,"_width",e[a]/n[a]*n._width),s[l]+=e._width):(s[e.id]=[],s[e.id][l]=0,r.default.set(e,"_marginLeft",0),r.default.set(e,"_width",1)),c.push(e),e.children&&e.children.length>0){var d=o(e.children,t,e,l,a);c=c.concat(d)}}),c}var s={name:"customTreeTableDemo",components:{treeTable:i.a},data:function(){return{func:o,expandAll:!1,data:{id:1,event:"事件1",timeLine:100,comment:"无",children:[{id:2,event:"事件2",timeLine:10,comment:"无"},{id:3,event:"事件3",timeLine:90,comment:"无",children:[{id:4,event:"事件4",timeLine:5,comment:"无"},{id:5,event:"事件5",timeLine:10,comment:"无"},{id:6,event:"事件6",timeLine:75,comment:"无",children:[{id:7,event:"事件7",timeLine:50,comment:"无",children:[{id:71,event:"事件71",timeLine:25,comment:"xx"},{id:72,event:"事件72",timeLine:5,comment:"xx"},{id:73,event:"事件73",timeLine:20,comment:"xx"}]},{id:8,event:"事件8",timeLine:25,comment:"无"}]}]}]},args:[null,null,"timeLine"]}},methods:{message:function(e){this.$message.info(e.event)}}},c={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("el-tag",{staticStyle:{"margin-bottom":"20px"}},[n("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/tree/master/src/components/TreeTable",target:"_blank"}},[e._v("Documentation")])]),e._v(" "),n("tree-table",{attrs:{data:e.data,evalFunc:e.func,evalArgs:e.args,expandAll:e.expandAll,border:""}},[n("el-table-column",{attrs:{label:"事件"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",{staticStyle:{color:"sandybrown"}},[e._v(e._s(t.row.event))]),e._v(" "),n("el-tag",[e._v(e._s(t.row.timeLine+"ms"))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"时间线"},scopedSlots:e._u([{key:"default",fn:function(e){return[n("el-tooltip",{attrs:{effect:"dark",content:e.row.timeLine+"ms",placement:"left"}},[n("div",{staticClass:"processContainer"},[n("div",{staticClass:"process",style:{width:500*e.row._width+"px",background:e.row._width>.5?"rgba(233,0,0,.5)":"rgba(0,0,233,0.5)",marginLeft:500*e.row._marginLeft+"px"}},[n("span",{staticStyle:{display:"inline-block"}})])])])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"操作",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"text"},on:{click:function(n){e.message(t.row)}}},[e._v("点击")])]}}])})],1)],1)},staticRenderFns:[]},d=n("VU/8")(s,c,!1,null,null,null);t.default=d.exports}});