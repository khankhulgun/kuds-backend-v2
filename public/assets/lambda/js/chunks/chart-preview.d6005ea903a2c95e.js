"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9134],{78231:(t,a,s)=>{s.d(a,{Z:()=>e});var r=s(77645);const i={props:["title"],methods:{beforeMount:function(){"mn"!=this.selectedLang&&(0,r.loadLanguageAsync)(this.selectedLang)},switchLanguage:function(t){this.selectedLang=t,(0,r.loadLanguageAsync)(t)}},computed:{lang:function(){var t=this,a=["applications","additions","logistics","letter","fileDirectory","admin","systemAdministrator","personalInformation","settings","logOut","ui_builder","_form"];return a.reduce((function(s,r,i){return s[r]=t.$t("components."+a[i]),s}),{})}}};const e=(0,s(51900).Z)(i,(function(){var t=this,a=t._self._c;return a("subheader",[a("div",{attrs:{slot:"left"},slot:"left"},[a("h3",{staticClass:"title"},[t._v("\n            "+t._s(t.title)+"\n        ")])]),t._v(" "),a("div",{attrs:{slot:"right"},slot:"right"},[a("ul",[a("li",[a("Badge",{attrs:{dot:""}},[a("a",{staticClass:"demo-badge",attrs:{href:"#"}},[a("Icon",{attrs:{type:"ios-bell-outline"}})],1)])],1),t._v(" "),a("li",[a("Poptip",{attrs:{placement:"bottom-end"}},[a("a",{attrs:{href:"javascript:void(0)"}},[a("Icon",{attrs:{type:"ios-keypad"}})],1),t._v(" "),a("div",{staticClass:"header-apps",attrs:{slot:"content"},slot:"content"},[a("Tabs",{attrs:{value:"apps",size:"small"}},[a("TabPane",{attrs:{label:t.lang.applications,name:"apps"}},[a("Row",[a("Col",{attrs:{span:"8"}},[a("a",{attrs:{href:"/logistic"}},[a("img",{attrs:{src:"/images/apps/github.png",alt:""}}),t._v(" "),a("span",[t._v("CMS")])])]),t._v(" "),a("Col",{attrs:{span:"8"}},[a("a",{attrs:{href:"/logistic"}},[a("img",{attrs:{src:"/images/apps/slack.png",alt:""}}),t._v(" "),a("span",[t._v("HR")])])]),t._v(" "),a("Col",{attrs:{span:"8"}},[a("a",{attrs:{href:"/logistic"}},[a("img",{attrs:{src:"/images/apps/bitbucket.png",alt:""}}),t._v(" "),a("span",[t._v("CRM")])])]),t._v(" "),a("Col",{attrs:{span:"8"}},[a("a",{attrs:{href:"/logistic"}},[a("img",{attrs:{src:"/images/apps/dribbble.png",alt:""}}),t._v(" "),a("span",[t._v(t._s(t.lang.logistics))])])]),t._v(" "),a("Col",{attrs:{span:"8"}},[a("a",{attrs:{href:"/logistic"}},[a("img",{attrs:{src:"/images/apps/mail_chimp.png",alt:""}}),t._v(" "),a("span",[t._v(t._s(t.lang.letter))])])]),t._v(" "),a("Col",{attrs:{span:"8"}},[a("a",{attrs:{href:"/logistic"}},[a("img",{attrs:{src:"/images/apps/dropbox.png",alt:""}}),t._v(" "),a("span",[t._v(t._s(t.lang.fileDirectory))])])])],1)],1),t._v(" "),a("TabPane",{attrs:{label:t.lang.additions,name:"plugins"}},[a("Row",[a("Col",{attrs:{span:"8"}},[a("a",{attrs:{href:"/lambda/puzzle"}},[a("img",{attrs:{src:"/images/apps/github.png",alt:""}}),t._v(" "),a("span",[t._v(t._s(t.lang.ui_builder))])])]),t._v(" "),a("Col",{attrs:{span:"8"}},[a("a",{attrs:{href:"/logistic"}},[a("img",{attrs:{src:"/images/apps/mail_chimp.png",alt:""}}),t._v(" "),a("span",[t._v(t._s(t.lang._form))])])])],1)],1)],1)],1)])],1),t._v(" "),a("li",{staticClass:"avatar-item"},[a("Poptip",{attrs:{placement:"bottom-end"}},[a("a",{staticClass:"avatar",attrs:{href:"javascript:void(0)"}},[a("img",{staticClass:"avatar",attrs:{src:"/assets/lambda/images/avatar.png",alt:"avatar"}})]),t._v(" "),a("div",{staticClass:"header-profile",attrs:{slot:"content"},slot:"content"},[a("div",{staticClass:"header-profile-info"},[a("h3",[t._v(t._s(t.lang.admin))]),t._v(" "),a("small",[t._v(t._s(t.lang.systemAdministrator))])]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#"}},[a("Icon",{attrs:{type:"ios-color-filter-outline"}}),t._v(" "),a("span",[t._v(t._s(t.lang.personalInformation))])],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}},[a("Icon",{attrs:{type:"ios-gear-outline"}}),t._v(" "),a("span",[t._v(t._s(t.lang.settings))])],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}},[a("Icon",{attrs:{type:"ios-locked-outline"}}),t._v(" "),a("span",[t._v(t._s(t.lang.logOut))])],1)])])])])],1)])])])}),[],!1,null,null,null).exports},38223:(t,a,s)=>{s.r(a),s.d(a,{default:()=>i});const r={components:{"page-header":s(78231).Z},computed:{sourceUrl:function(){return window.init.projectSettings?window.init.projectSettings.production_url:""},src:function(){return this.$project?"".concat(this.sourceUrl,"/lambda/puzzle/schema-public/chart/").concat(this.$route.params.id):"/lambda/puzzle/schema/chart/".concat(this.$route.params.id)},projectDomain:function(){return window.lambda.domain?"".concat(window.lambda.domain):void 0}}};const i=(0,s(51900).Z)(r,(function(){var t=this,a=t._self._c;return a("section",{staticClass:"page page-preview"},[a("div",{staticClass:"pz-preview"},[t.$project?a("chart",{attrs:{src:t.src,projectID:t.$project.id,projectDomain:t.projectDomain}}):a("chart",{attrs:{src:t.src}})],1)])}),[],!1,null,null,null).exports}}]);