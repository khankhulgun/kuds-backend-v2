import{H as p,T as f}from"./components.PTWu7n3A.js";import{_ as u,f as m,s as h,U as v,r as d,o as b,c as g,b as s,w as a,a as e,d as w,t as c}from"./entry.MJ5yZK23.js";import"./vue.f36acd1f.4vPdO74M.js";const y={name:"profile",data(){return{editMode:!0,base_url:m}},methods:{onSuccess(t){},editUser(){this.$nextTick(()=>{let t=h.get(v);this.$refs.form.editModel(t.id)})}}},x={class:"card drawer-wrappper"},M={class:"page-title float-left"},S={class:"float-left pt-5"},T={class:"text-gray-700 dark:text-gray-200 text-base m-0"},k={class:"offcanvas-template"},N={class:"crud-page"},U={class:"crud-page-body"},B={class:""},H={class:"ant-drawer-content"},R={class:"ant-drawer-wrapper-body"},V={class:"ant-drawer-body"};function $(t,A,C,D,o,r){const n=f,i=p,l=d("portal"),_=d("dataform");return b(),g("div",x,[s(i,null,{default:a(()=>[s(n,null,{default:a(()=>[w(c(t.$t("appAdmin.profile")),1)]),_:1})]),_:1}),s(l,{to:"header-left"},{default:a(()=>[e("div",M,[e("div",S,[e("h1",T,c(t.$t("appAdmin.profile")),1)])])]),_:1}),e("section",k,[e("div",N,[e("div",U,[e("div",B,[e("div",H,[e("div",R,[e("div",V,[s(_,{ref:"form",url:o.base_url,hideTitle:!0,schemaID:"user_profile_user",editMode:o.editMode,do_render:o.editMode,onReady:r.editUser,onSuccess:r.onSuccess},null,8,["url","editMode","do_render","onReady","onSuccess"])])])])])])])])])}const O=u(y,[["render",$]]);export{O as default};