"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[315],{91929:(t,e,o)=>{o.r(e),o.d(e,{default:()=>s});const a={components:{},data:function(){return{editMode:!1,src:""}},created:function(){var t=this.$route.params.id;this.$project?void 0!==t&&""!==t&&null!==t?(this.editMode=!0,this.src="/lambda/puzzle/project/".concat(this.$project.id,"/datasource/").concat(this.$route.params.id)):this.src="/lambda/puzzle/project/".concat(this.$project.id,"/datasource"):void 0!==t&&""!==t&&null!==t&&(this.editMode=!0,this.src="/lambda/puzzle/schema/datasource/".concat(this.$route.params.id))},methods:{onCreate:function(){this.$router.push("/datasource")},onUpdate:function(){this.$router.push("/datasource")}}};const s=(0,o(51900).Z)(a,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"page"},[t.$project?e("data-source",{attrs:{projectID:t.$project.id,editMode:t.editMode,src:t.src,onCreate:t.onCreate,onUpdate:t.onUpdate}}):e("data-source",{attrs:{editMode:t.editMode,src:t.src,onCreate:t.onCreate,onUpdate:t.onUpdate}})],1)}),[],!1,null,null,null).exports}}]);