"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8035],{35085:(t,e,s)=>{s.d(e,{Z:()=>o});var i=s(23645),n=s.n(i)()((function(t){return t[1]}));n.push([t.id,".blackout[data-v-52044ea0]{background-color:rgba(0,0,0,.3);height:100vh;left:0;position:fixed;top:0;width:100vw;z-index:10}.dock[data-v-52044ea0]{box-shadow:-2px 3px 3px rgba(0,0,0,.2);position:absolute;right:0;top:0;z-index:3000}.dock[data-v-52044ea0],section[data-v-52044ea0]{height:100%;overflow:hidden}section[data-v-52044ea0]{box-sizing:border-box;display:inline-block;position:relative}.panel>div[data-v-52044ea0]{height:100%;overflow:auto}.panel.default[data-v-52044ea0]{background-color:#fff;position:relative}.action-close[data-v-52044ea0]{cursor:pointer;font-size:24px;position:absolute;right:12px;top:6px;z-index:10}.action-extra.default[data-v-52044ea0]{bottom:1rem;cursor:pointer;position:absolute;right:1rem}.vsp-br[data-v-52044ea0]{border-right:2px solid rgba(0,0,0,.2)}.vsp-bl[data-v-52044ea0]{border-left:2px solid rgba(0,0,0,.1)}.slide-out-enter-active[data-v-52044ea0],.slide-out-leave-active[data-v-52044ea0]{transition:transform .4s cubic-bezier(.215,.61,.355,1)}.slide-out-enter[data-v-52044ea0],.slide-out-leave-to[data-v-52044ea0]{transform:translateX(100%)}.fade-enter-active[data-v-52044ea0],.fade-leave-active[data-v-52044ea0]{transition:opacity .4s ease-in}.fade-enter[data-v-52044ea0],.fade-leave-to[data-v-52044ea0]{opacity:0}.bg-transparent[data-v-52044ea0]{background-color:transparent!important}",""]);const o=n},23645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var s=t(e);return e[2]?"@media ".concat(e[2]," {").concat(s,"}"):s})).join("")},e.i=function(t,s,i){"string"==typeof t&&(t=[[null,t,""]]);var n={};if(i)for(var o=0;o<this.length;o++){var r=this[o][0];null!=r&&(n[r]=!0)}for(var a=0;a<t.length;a++){var c=[].concat(t[a]);i&&n[c[0]]||(s&&(c[2]?c[2]="".concat(s," and ").concat(c[2]):c[2]=s),e.push(c))}},e}},93379:(t,e,s)=>{var i,n=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},o=function(){var t={};return function(e){if(void 0===t[e]){var s=document.querySelector(e);if(window.HTMLIFrameElement&&s instanceof window.HTMLIFrameElement)try{s=s.contentDocument.head}catch(t){s=null}t[e]=s}return t[e]}}(),r=[];function a(t){for(var e=-1,s=0;s<r.length;s++)if(r[s].identifier===t){e=s;break}return e}function c(t,e){for(var s={},i=[],n=0;n<t.length;n++){var o=t[n],c=e.base?o[0]+e.base:o[0],l=s[c]||0,d="".concat(c," ").concat(l);s[c]=l+1;var u=a(d),f={css:o[1],media:o[2],sourceMap:o[3]};-1!==u?(r[u].references++,r[u].updater(f)):r.push({identifier:d,updater:b(f,e),references:1}),i.push(d)}return i}function l(t){var e=document.createElement("style"),i=t.attributes||{};if(void 0===i.nonce){var n=s.nc;n&&(i.nonce=n)}if(Object.keys(i).forEach((function(t){e.setAttribute(t,i[t])})),"function"==typeof t.insert)t.insert(e);else{var r=o(t.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}return e}var d,u=(d=[],function(t,e){return d[t]=e,d.filter(Boolean).join("\n")});function f(t,e,s,i){var n=s?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(t.styleSheet)t.styleSheet.cssText=u(e,n);else{var o=document.createTextNode(n),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(o,r[e]):t.appendChild(o)}}function h(t,e,s){var i=s.css,n=s.media,o=s.sourceMap;if(n?t.setAttribute("media",n):t.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var p=null,v=0;function b(t,e){var s,i,n;if(e.singleton){var o=v++;s=p||(p=l(e)),i=f.bind(null,s,o,!1),n=f.bind(null,s,o,!0)}else s=l(e),i=h.bind(null,s,e),n=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(s)};return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else n()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=n());var s=c(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var i=0;i<s.length;i++){var n=a(s[i]);r[n].references--}for(var o=c(t,e),l=0;l<s.length;l++){var d=a(s[l]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}s=o}}}},19710:(t,e,s)=>{s.d(e,{Z:()=>d});function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}var n="cubic-bezier(0.39, 0.575, 0.565, 1)";const o={name:"VueSideoutPanel",props:{closeByBtn:{default:!1,required:!1},value:{default:!1,required:!0},count:{default:1,validator:function(t){return t>0&&t<=2}},closeHtml:{default:"Close"},closeAllHtml:{type:String,default:"Close all"},widths:{type:Array,default:function(){return 1==this.count?["100%"]:["100%","50%"]},validator:function(t){return t.reduce((function(t,e){return t&&/col-(\w+-)?\d+|\d+px|\d+%/.test(e)}),!0)}},classes:{type:Array,default:function(){return new Array(5).fill("default")},validator:function(t){return t.reduce((function(t,e){return t&&(!e||"string"==typeof e)}),!0)}},styles:{type:Array,default:function(){return[{},{},{},{},{}]},validator:function(t){return t.reduce((function(t,e){return t&&(!e||"object"==i(e))}),!0)}}},data:function(){return{isVisibleDock:this.value,isVisibleSections:[],isShifted:!1,d_styles:[],d_classes:[]}},created:function(){this.init()},watch:{value:function(){this.isVisibleDock=this.value},widths:function(){this.init()}},computed:{isVisibleCloseAll:function(){return 2==this.count&&!this.isShifted}},methods:{init:function(){var t=this;this.isShifted=!1,this.d_styles=[],this.d_classes=[];for(var e=0;e<5;e++)this.classes[e]&&this.classes[e].length>=0?2==e&&"same"==this.classes[e]?this.d_classes.push(this.classes[e-1]):this.d_classes.push(this.classes[e]):this.d_classes.push("default");2==this.count&&(this.d_classes[1]+=" vsp-br",this.d_classes[2]+=" vsp-bl");for(var s=0;s<5;s++)2==s&&this.styles[s]&&this.styles[s].same?this.d_styles.push(Object.assign({},this.styles[s-1]||{})):this.d_styles.push(this.styles[s]||{});var i=!1;1==this.count?(this.widths[0]=this.widths[0]||this.widths[1],this.widths[1]="100%"):/\d+%/.test(this.widths[1])&&(this.d_styles[2].width="".concat(100-this.widths[1].slice(0,-1),"%"),i=!0),this.widths.forEach((function(e,s){if(/col-(\w+-)?\d+/.test(e))t.d_classes[s]+=" "+e;else{if(2==s&&i)return;t.d_styles[s].width=e}})),this.isVisibleSections=new Array(this.count).fill(1)},_style:function(t){return this.d_styles[t]},_class:function(t){return this.d_classes[t]},setTransform:function(t,e){["webkitTransform","MozTransform","msTransform","OTransform","transform"].forEach((function(s){t.style[s]=e[0]})),t.style.transitionTimingFunction=e[1],t.style.transitionDuration=e[2]},d_shift:function(){var t=-this.$refs.section[1].offsetWidth;this.setTransform(this.$refs.dock,["right","cubic-bezier(0.215, 0.61, 0.355, 1)",".8s"]),this.$refs.dock.style.right="".concat(t,"px"),this.isShifted=!0},s_beforeLeave:function(){this.isVisibleSections[1]?(this.$refs.dock.style.boxShadow="none",this.$refs.section[1].style.boxShadow="-3px 3px 9px rgba(0, 0, 0, 0.3)"):this.d_shift()},s_afterLeave:function(){this.isVisibleSections[1]&&(this.$refs.dock.style.boxShadow="-3px 3px 9px rgba(0, 0, 0, 0.3)",this.$refs.dock.style.width=this.$refs.section[0].offsetWidth+"px",this.$refs.section[0].style.width="100%")},d_enter:function(){2==this.count&&!this.showExtra&&this.d_shift()},closeDock:function(){this.isVisibleDock=!1,this.init(),this.$emit("close")},close:function(t){1==this.count?this.closeDock():this.isShifted?(this.setTransform(this.$refs.dock,["right",n,"1.2s"]),this.closeDock()):0==t?this.$set(this.isVisibleSections,0,0):1==t&&this.isVisibleSections[0]?this.d_shift():this.closeDock()},closeAll:function(){this.closeByBtn||(this.isShifted&&this.setTransform(this.$refs.dock,["right",n,"1.2ss"]),this.closeDock())}}};var r=s(93379),a=s.n(r),c=s(35085),l={insert:"head",singleton:!1};a()(c.Z,l);c.Z.locals;const d=(0,s(51900).Z)(o,(function(){var t=this,e=t._self._c;return e("div",[e("transition",{attrs:{name:"fade"}},[t.isVisibleDock?e("div",{staticClass:"blackout",on:{click:t.closeAll}}):t._e()]),t._v(" "),e("transition",{attrs:{name:"slide-out"},on:{enter:t.d_enter}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isVisibleDock,expression:"isVisibleDock"}],ref:"dock",staticClass:"dock",class:t._class(0),style:t._style(0)},[e("transition-group",{attrs:{name:"slide-out"},on:{"before-leave":t.s_beforeLeave,afterLeave:t.s_afterLeave}},t._l(t.isVisibleSections,(function(s,i){return s?e("section",{key:"k"+i,ref:"section",refInFor:!0,staticClass:"panel",class:t._class(i+1),style:t._style(i+1)},[e("a",{staticClass:"action-close",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.close(i)}}},[e("Icon",{attrs:{type:"ios-close-circle-outline"}})],1),t._v(" "),t._t("default")],2):t._e()})),0)],1)])],1)}),[],!1,null,"52044ea0",null).exports},83748:(t,e,s)=>{s.r(e),s.d(e,{default:()=>n});const i={props:["title","grid","form"],components:{"slide-panel":s(19710).Z},data:function(){return{gridSrc:"",formSrc:"",openSlidePanel:!1,editMode:!1}},created:function(){this.$emit("grid-add")},methods:{view:function(t){console.log(t)},edit:function(t){this.openSlidePanel=!0,this.editMode=!0,this.$refs.form.editModel(t)},quickEdit:function(t){console.log(t)},onSuccess:function(t){this.editMode?this.$refs.grid.update(t):this.$refs.grid.append(t)},onError:function(t){}}};const n=(0,s(51900).Z)(i,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"template2"},[e("div",{staticClass:"crud-page"},[e("div",{staticClass:"crud-page-header"},[e("div",{staticClass:"crud-page-header-left"},[e("h3",[t._v(t._s(t.$props.title.replace("-"," ")))])]),t._v(" "),e("div",{staticClass:"crud-page-header-right"},[t._t("tooloptions"),t._v(" "),e("krudtools",{attrs:{search:t.search,refresh:t.refresh,exportExcel:t.exportExcel}})],2)]),t._v(" "),e("div",{staticClass:"crud-page-body"},[e("div",{staticClass:"data-grid"},[e("datagrid",{ref:"grid",attrs:{schemaID:t.grid,paginate:50,fnEdit:t.edit,fnQuickEdit:t.quickEdit,fnView:t.view,actions:t.$props.actions}})],1),t._v(" "),e("div",{staticClass:"data-form"},[e("dataform",{ref:"form",attrs:{schemaID:t.form,editMode:t.editMode,onSuccess:t.onSuccess,onError:t.onError}})],1)])])])}),[],!1,null,null,null).exports}}]);