!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("vueImages",[],e):"object"==typeof exports?exports.vueImages=e():t.vueImages=e()}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var s=n[i]={exports:{},id:i,loaded:!1};return t[i].call(s.exports,s,s.exports,e),s.loaded=!0,s.exports}var n={};return e.m=t,e.c=n,e.p="./",e(0)}([function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),n(12);var s=n(23),o=i(s);e.default=o.default},function(t,e,n){var i,s;n(16),i=n(6);var o=n(27);s=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(s=i=i.default),"function"==typeof s&&(s=s.options),s.render=o.render,s.staticRenderFns=o.staticRenderFns,t.exports=i},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return'<svg fill="'+t+'" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 512 512" xml:space="preserve">\n    <path d="M213.7,256L213.7,256L213.7,256L380.9,81.9c4.2-4.3,4.1-11.4-0.2-15.8l-29.9-30.6c-4.3-4.4-11.3-4.5-15.5-0.2L131.1,247.9 c-2.2,2.2-3.2,5.2-3,8.1c-0.1,3,0.9,5.9,3,8.1l204.2,212.7c4.2,4.3,11.2,4.2,15.5-0.2l29.9-30.6c4.3-4.4,4.4-11.5,0.2-15.8 L213.7,256z"/>\n  </svg>'}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return'<svg fill="'+t+'" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 512 512" xml:space="preserve">\n    <path d="M298.3,256L298.3,256L298.3,256L131.1,81.9c-4.2-4.3-4.1-11.4,0.2-15.8l29.9-30.6c4.3-4.4,11.3-4.5,15.5-0.2l204.2,212.7 c2.2,2.2,3.2,5.2,3,8.1c0.1,3-0.9,5.9-3,8.1L176.7,476.8c-4.2,4.3-11.2,4.2-15.5-0.2L131.3,446c-4.3-4.4-4.4-11.5-0.2-15.8 L298.3,256z"/>\n  </svg>'}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return'<svg fill="'+t+'" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">\n    <path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4 L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1 c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1 c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z"/>\n  </svg>'}},function(t,e,n){"use strict";t.exports={arrowLeft:n(2),arrowRight:n(3),close:n(4)}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(5),o=i(s);e.default={props:{type:String,color:String},computed:{icon:function(){return o.default[this.type]?o.default[this.type].default(this.color):(console.log("Icon render error -- type not exist"),"")}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{imageUrl:String}}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(1),o=i(s);e.default={props:{index:Number,images:Array,animate:{type:Boolean,default:!1}},data:function(){return{next:!0,animation:!1}},methods:{decIndex:function(){this.$refs.images[this.index].classList.add("slideOutRight");var t=this;window.setTimeout(function(){t.$emit("decIndex"),t.next=!0,t.animation=!0},350)},addIndex:function(){if(this.index<this.images[this.index].total-1){this.$refs.images[this.index].classList.add("slideOutLeft");var t=this;window.setTimeout(function(){t.$emit("addIndex"),t.next=!1,t.animation=!0},350)}},close:function(){this.$emit("close"),this.animation=!1}},watch:{index:function(){var t=this;this.$refs.images[this.index].classList.remove("slideInLeft","slideInRight","slideOutLeft","slideOutRight");var e=this.next?"slideInLeft":"slideInRight";(this.animation||this.animate)&&this.$refs.images[this.index].classList.add(e),this.$nextTick(function(){t.animation=!1})}},components:{icon:o.default}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{images:Array},methods:{setActive:function(t){this.$emit("changeIndex",t)}}}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(1),o=i(s),a=n(19),c=i(a);e.default={props:{images:Array,activeIndex:Number},data:function(){return{index:0}},computed:{activeImages:function(){return this.images.slice(this.index,this.index+5)}},mounted:function(){this.index=this.setIndex(this.activeIndex),this.setActive(this.activeIndex)},watch:{activeIndex:function(){this.index=this.setIndex(this.activeIndex),this.setActive(this.activeIndex)}},methods:{setIndex:function(t){return t<=this.images.length-3&&t>=2?t-2:t<2?0:this.images.length-5},setActive:function(t){t!==this.activeIndex&&this.$emit("changeIndex",t),this.images.forEach(function(t){t.isActive=!1}),this.images[t].isActive=!0}},components:{icon:o.default,thumbnail:c.default}}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(21),o=i(s),a=n(20),c=i(a),r=n(22),d=i(r);e.default={name:"lightbox",props:{imgs:Array},computed:{images:function(){var t=[],e=this.imgs.length;return this.imgs.forEach(function(n,i){n.index=i+1,n.total=e,n.isActive=!1,t.push(n)}),t}},data:function(){return{isShow:!1,index:2,touchPoint:{prev:0,now:0}}},created:function(){this.isShow&&(window.addEventListener("keydown",this.keyFun),window.addEventListener("mousewheel",this.wheelFun),this.$refs.lightbox.addEventListener("touchstart",this.touchFun))},methods:{openImg:function(){this.isShow=!0},closeImg:function(){this.isShow=!1},nextImg:function(){this.index<this.images.length-1&&this.index++},prevImg:function(){this.index>0&&this.index--},changeImg:function(t){this.isShow=!0,this.index=t},keyFun:function(t){var e=this;switch(t.keyCode){case 27:this.closeImg();break;case 37:this.index>0&&(this.$refs.fancybox.$refs.images[this.index].classList.add("slideOutRight"),window.setTimeout(function(){e.$refs.fancybox._data.next=!0,e.$refs.fancybox._data.animation=!0,e.prevImg()},375));break;case 39:this.index<this.images[this.index].total-1&&(this.$refs.fancybox.$refs.images[this.index].classList.add("slideOutLeft"),window.setTimeout(function(){e.$refs.fancybox._data.next=!1,e.$refs.fancybox._data.animation=!0,e.nextImg()},375));break;default:return}},wheelFun:function(t){var e=this;t.deltaY>0?this.index<this.images[this.index].total-1&&(this.$refs.fancybox.$refs.images[this.index].classList.add("slideOutLeft"),window.setTimeout(function(){e.$refs.fancybox._data.next=!1,e.$refs.fancybox._data.animation=!0,e.nextImg()},375)):this.index>0&&(this.$refs.fancybox.$refs.images[this.index].classList.add("slideOutRight"),window.setTimeout(function(){e.$refs.fancybox._data.next=!0,e.$refs.fancybox._data.animation=!0,e.prevImg()},375))},touchFun:function(t){this.touchPoint.prev=t.touches[0].clientX},endFun:function(t){this.touchPoint.now=t.changedTouches[0].clientX;var e=this;this.touchPoint.prev>this.touchPoint.now+50?this.index<this.images[this.index].total-1&&(this.$refs.fancybox.$refs.images[this.index].classList.add("slideOutLeft"),window.setTimeout(function(){e.$refs.fancybox._data.next=!1,e.$refs.fancybox._data.animation=!0,e.nextImg()},375)):this.touchPoint.now>this.touchPoint.prev+50&&this.index>0&&(this.$refs.fancybox.$refs.images[this.index].classList.add("slideOutRight"),window.setTimeout(function(){e.$refs.fancybox._data.next=!0,e.$refs.fancybox._data.animation=!0,e.prevImg()},375))}},watch:{isShow:function(){this.isShow?(window.addEventListener("keydown",this.keyFun),window.addEventListener("mousewheel",this.wheelFun),this.$refs.lightbox.addEventListener("touchstart",this.touchFun),this.$refs.lightbox.addEventListener("touchend",this.endFun)):(window.removeEventListener("keydown",this.keyFun),window.removeEventListener("mousewheel",this.wheelFun),this.$refs.lightbox.removeEventListener("touchstart",this.touchFun),this.$refs.lightbox.removeEventListener("touchend",this.endFun))}},components:{gallery:o.default,fancybox:c.default,paginator:d.default}}},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,n){var i,s;n(17),i=n(7);var o=n(28);s=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(s=i=i.default),"function"==typeof s&&(s=s.options),s.render=o.render,s.staticRenderFns=o.staticRenderFns,t.exports=i},function(t,e,n){var i,s;n(15),i=n(8);var o=n(26);s=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(s=i=i.default),"function"==typeof s&&(s=s.options),s.render=o.render,s.staticRenderFns=o.staticRenderFns,t.exports=i},function(t,e,n){var i,s;n(14),i=n(9);var o=n(25);s=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(s=i=i.default),"function"==typeof s&&(s=s.options),s.render=o.render,s.staticRenderFns=o.staticRenderFns,s._scopeId="data-v-0cb4f183",t.exports=i},function(t,e,n){var i,s;n(13),i=n(10);var o=n(24);s=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(s=i=i.default),"function"==typeof s&&(s=s.options),s.render=o.render,s.staticRenderFns=o.staticRenderFns,t.exports=i},function(t,e,n){var i,s;n(18),i=n(11);var o=n(29);s=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(s=i=i.default),"function"==typeof s&&(s=s.options),s.render=o.render,s.staticRenderFns=o.staticRenderFns,t.exports=i},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"paginator"},[t.index>0?n("div",{staticClass:"arrow left",on:{click:function(e){e.stopPropagation(),t.index-=1}}},[n("icon",{attrs:{type:"arrowLeft",color:"#ccc"}})],1):t._e(),t._v(" "),t._l(t.activeImages,function(e){return n("div",{staticClass:"thumbnail-wrapper",on:{click:function(n){n.stopPropagation(),t.setActive(e.index-1)}}},[n("thumbnail",{class:{active:e.isActive},attrs:{imageUrl:e.imageUrl}})],1)}),t._v(" "),t.index<t.images.length-5?n("div",{staticClass:"arrow right",on:{click:function(e){e.stopPropagation(),t.index+=1}}},[n("icon",{attrs:{type:"arrowRight",color:"#ccc"}})],1):t._e()],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"gallery"},t._l(t.images,function(e,i){return n("div",{staticClass:"wrapper"},[n("img",{attrs:{src:e.imageUrl},on:{click:function(e){t.setActive(i)}}})])}))},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fancybox"},[n("div",{staticClass:"image-wrapper"},[n("div",{staticClass:"header"},[n("div",{staticClass:"close",on:{click:function(e){e.stopPropagation(),t.close(e)}}},[n("icon",{attrs:{type:"close",color:"#ccc"}})],1)]),t._v(" "),t._l(t.images,function(e){return n("img",{directives:[{name:"show",rawName:"v-show",value:e.index===t.index+1,expression:"item.index===index+1"}],ref:"images",refInFor:!0,staticClass:"image animated",attrs:{src:e.imageUrl},on:{click:function(e){e.stopPropagation(),t.addIndex(e)}}})}),t._v(" "),n("div",{staticClass:"footer"},[n("span",{staticClass:"caption",on:{click:function(t){t.stopPropagation()}}},[t._v(t._s(t.images[t.index].caption))]),t._v(" "),n("span",{staticClass:"count",on:{click:function(t){t.stopPropagation()}}},[t._v(t._s(t.index+1)+" of "+t._s(t.images[t.index].total))])])],2),t._v(" "),t.index>0?n("div",{staticClass:"arrow left",on:{click:function(e){e.stopPropagation(),t.decIndex(e)}}},[n("icon",{attrs:{type:"arrowLeft",color:"#ccc"}})],1):t._e(),t._v(" "),t.index<t.images[t.index].total-1?n("div",{staticClass:"arrow right",on:{click:function(e){e.stopPropagation(),t.addIndex(e)}}},[n("icon",{attrs:{type:"arrowRight",color:"#ccc"}})],1):t._e()])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{domProps:{innerHTML:t._s(t.icon)}})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"thumbnail",style:{backgroundImage:"url("+t.imageUrl+")"}})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vue-images"},[n("gallery",{attrs:{images:t.images},on:{changeIndex:function(e){t.changeImg(e)}}}),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],ref:"lightbox",staticClass:"lightbox",on:{click:t.closeImg}},[n("fancybox",{ref:"fancybox",attrs:{images:t.images,index:t.index},on:{close:t.closeImg,addIndex:t.nextImg,decIndex:t.prevImg}}),t._v(" "),n("paginator",{attrs:{images:t.images,activeIndex:t.index},on:{changeIndex:function(e){t.changeImg(e)}}})],1)],1)},staticRenderFns:[]}}])});