(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{187:function(t,n,e){},205:function(t,n,e){"use strict";var i=e(187);e.n(i).a},251:function(t,n,e){"use strict";e.r(n);var i={name:"Button",props:{size:String,type:String,nativeType:{type:String,default:"button"},outline:String,block:Boolean,disabled:Boolean,round:Boolean,autofocus:Boolean,icon:{type:String,default:""}},computed:{btnType:function(){return this.type?"w-btn-".concat(this.type):""},btnSize:function(){return this.size?"w-btn-".concat(this.size):""},btnOutline:function(){return this.outline?"w-btn--outline-".concat(this.outline):""},btnBlock:function(){return"true"===this.block?"w-btn-block":""}},methods:{handleClick:function(t){this.$emit("click",t)}},mounted:function(){this.$emit("click",event)}},o=(e(205),e(0)),u=Object(o.a)(i,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("button",{staticClass:"w-btn",class:[t.btnType,t.btnSize,t.btnOutline,t.btnBlock,{"is-disabled":t.disabled,"is-round":t.round}],attrs:{disabled:t.disabled,autofocus:t.autofocus,type:t.nativeType},on:{click:t.handleClick}},[t.icon?e("i",{class:t.icon}):t._e(),t._v(" "),t.$slots.default?e("span",[t._t("default")],2):t._e()])},[],!1,null,null,null);n.default=u.exports}}]);