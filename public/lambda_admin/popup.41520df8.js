import{m as S,c as g,K as E}from"./mixin.6aad618d.js";import{_ as w,cx as C,r as o,o as l,c as v,b as s,w as a,a as n,n as U,k,j as P}from"./entry.44501f88.js";const R={inheritAttrs:!1,name:"Canvas",mixins:[S],data(){return{form_width:800,openSlidePanel:!1,exportLoading:!1}},components:{common:g,Krudtools:E,"a-modal":C},methods:{hideSide(){this.openSlidePanel=!1,this.editMode=!1},openSide(){this.openSlidePanel=!0},templateEdit(){this.openSide()},templateOnSuccess(){this.hideSide()}},mounted(){}},M={class:"card drawer-wrappper"},_={class:"offcanvas-template"},b={class:"crud-page"},y={class:"crud-page-body"},I={id:"drawer-container"};function L(e,r,V,A,i,d){const t=o("common"),p=o("Krudtools"),c=o("portal"),m=o("datagrid"),u=o("dataform"),f=o("a-modal");return l(),v("div",M,[s(t,{parent:e.parent,title:e.title,addAction:d.openSide,permissions:e.permissions},null,8,["parent","title","addAction","permissions"]),s(c,{to:"header-right"},{default:a(()=>[s(p,{search:e.search,refresh:e.refresh,exportExcel:e.exportExcel,exportLoading:i.exportLoading,print:e.print,save:e.save,isPrint:e.isPrint,isExcel:e.isExcel,isExcelUpload:e.isExcelUpload,excelUploadCustomUrl:e.excelUploadCustomUrl,excelUploadMethod:e.excelUploadMethod,isRefresh:e.isRefresh,isSave:e.isSave,isSearch:!1},null,8,["search","refresh","exportExcel","exportLoading","print","save","isPrint","isExcel","isExcelUpload","excelUploadCustomUrl","excelUploadMethod","isRefresh","isSave"])]),_:1}),n("section",_,[n("div",b,[n("div",y,[n("div",I,[n("div",{class:U(i.openSlidePanel?"dg-flex open-drawer":"dg-flex")},[e.permissions&&e.permissions.r?(l(),k(m,{key:0,ref:"grid",url:e.url,schemaID:e.grid,paginate:50,fnClone:e.clone,fnEdit:e.edit,fnQuickEdit:e.quickEdit,fnView:e.view,actions:e.$props.actions,dblClick:e.$props.dbClickAction,onRowSelect:e.$props.onRowSelect,permissions:e.permissions,page_id:e.page_id,custom_condition:e.$props.custom_condition?e.$props.custom_condition:null,user_condition:e.user_condition?e.user_condition.gridCondition:null},null,8,["url","schemaID","fnClone","fnEdit","fnQuickEdit","fnView","actions","dblClick","onRowSelect","permissions","page_id","custom_condition","user_condition"])):P("",!0)],2)])])])]),s(f,{open:i.openSlidePanel,"onUpdate:open":r[0]||(r[0]=h=>i.openSlidePanel=h),class:"create",maskClosable:!1,title:e.withCrudLog?`${e.title} : ${e.rowId}`:e.title,forceRender:!0,width:this.form_width,footer:null,placement:"right"},{default:a(()=>[s(u,{ref:"form",hideTitle:!0,schemaID:e.form,title:e.title,url:e.url,editMode:e.editMode,onSuccess:e.onSuccess,onReady:e.onReady,do_render:i.openSlidePanel,permissions:e.permissions,page_id:e.page_id,user_condition:e.user_condition?e.user_condition.formCondition:null,onError:e.onError,close:d.hideSide},null,8,["schemaID","title","url","editMode","onSuccess","onReady","do_render","permissions","page_id","user_condition","onError","close"])]),_:1},8,["open","title","width"])])}const K=w(R,[["render",L]]);export{K as default};
