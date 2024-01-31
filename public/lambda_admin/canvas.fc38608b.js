import{m as v,c as E,K as k}from"./mixin.6aad618d.js";import{_ as U,r as o,o as d,c as P,b as n,w as a,a as i,n as t,k as p,j as c}from"./entry.44501f88.js";const R={inheritAttrs:!1,name:"Canvas",mixins:[v],data(){return{openSlidePanel:!1,exportLoading:!1}},components:{common:E,Krudtools:k},methods:{hideSide(){this.openSlidePanel=!1,this.editMode=!1},openSide(){this.openSlidePanel=!0},templateEdit(){this.openSide()},templateOnSuccess(){this.hideSide()}}},I={class:"krud-canvas"},M={class:"offcanvas-template"},L={class:"crud-page"},b={class:"crud-page-body"},y={id:"drawer-container"};function V(e,l,A,B,s,r){const m=o("common"),u=o("Krudtools"),f=o("portal"),h=o("datagrid"),g=o("dataform"),w=o("crud-log"),S=o("a-drawer");return d(),P("div",I,[n(m,{parent:e.parent,title:e.title,addAction:r.openSide,permissions:e.permissions},null,8,["parent","title","addAction","permissions"]),n(f,{to:"header-right"},{default:a(()=>[n(u,{search:e.search,refresh:e.refresh,exportExcel:e.exportExcel,exportLoading:s.exportLoading,print:e.print,save:e.save,isPrint:e.isPrint,isExcel:e.isExcel,isExcelUpload:e.isExcelUpload,excelUploadCustomUrl:e.excelUploadCustomUrl,excelUploadMethod:e.excelUploadMethod,isRefresh:e.isRefresh,isSave:e.isSave,isSearch:!1},null,8,["search","refresh","exportExcel","exportLoading","print","save","isPrint","isExcel","isExcelUpload","excelUploadCustomUrl","excelUploadMethod","isRefresh","isSave"])]),_:1}),i("section",M,[i("div",L,[i("div",b,[i("div",y,[i("div",{class:t(s.openSlidePanel?"dg-flex open-drawer":"dg-flex")},[e.permissions&&e.permissions.r?(d(),p(h,{key:0,ref:"grid",url:e.url,schemaID:e.grid,paginate:50,fnClone:e.clone,fnEdit:e.edit,fnQuickEdit:e.quickEdit,fnView:e.view,actions:e.$props.actions,dblClick:e.$props.dbClickAction,onRowSelect:e.$props.onRowSelect,permissions:e.permissions,page_id:e.page_id,custom_condition:e.$props.custom_condition?e.$props.custom_condition:null,user_condition:e.user_condition?e.user_condition.gridCondition:null},null,8,["url","schemaID","fnClone","fnEdit","fnQuickEdit","fnView","actions","dblClick","onRowSelect","permissions","page_id","custom_condition","user_condition"])):c("",!0)],2)])])])]),n(S,{open:s.openSlidePanel,"onUpdate:open":l[0]||(l[0]=C=>s.openSlidePanel=C),class:"canvas-drawer",maskClosable:!1,forceRender:!0,title:e.withCrudLog&&e.rowId?`${e.title} : ${e.rowId}`:e.title,width:e.form_width,placement:"right",onClose:r.hideSide},{default:a(()=>[i("div",{class:t(e.withCrudLog&&e.editMode?"with-crud-log":"crud-form")},[n(g,{ref:"form",hideTitle:!0,schemaID:e.form,title:e.title,url:e.url,editMode:e.editMode,onSuccess:e.onSuccess,onReady:e.onReady,do_render:s.openSlidePanel,permissions:e.permissions,page_id:e.page_id,user_condition:e.user_condition?e.user_condition.formCondition:null,onError:e.onError,close:r.hideSide},null,8,["schemaID","title","url","editMode","onSuccess","onReady","do_render","permissions","page_id","user_condition","onError","close"]),e.withCrudLog&&e.editMode?(d(),p(w,{key:0,form:e.form,rowId:e.rowId,grid:e.grid},null,8,["form","rowId","grid"])):c("",!0)],2)]),_:1},8,["open","title","width","onClose"])])}const N=U(R,[["render",V]]);export{N as default};
