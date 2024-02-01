import{H as I,T as S}from"./components.PTWu7n3A.js";import{g as N,S as R,h as C,i as $,_ as T,r as b,o as s,c as n,n as f,j as t,k as a,a as m,t as d,F as g,l as v,w as h,d as y,s as k,K as B,P as D,L,M as A,m as P,f as V,q as E,b as M}from"./entry.MJ5yZK23.js";import{_ as F}from"./nuxt-link.VkhsQTov.js";import{S as O}from"./SettingOutlined.OelKhQOD.js";import"./vue.f36acd1f.4vPdO74M.js";const K=N({name:"HomeMenuRender",props:["item","cruds","permissions","title","children"],components:{SvgIcon:R,SettingOutlined:O},data(){return{}},methods:{getModuleItem(e){if(e.children)return e},findActivehild(e){let r=0;for(;!this.can(e.children[r]);)r++;return{...e.children[r],svg:e.svg,icon:e.icon}},getPath(e){return C(e,this.permissions)},can(e){return this.permissions[e.id]?!!this.permissions[e.id].show:!1},getTitleHome(e,r){return this.title&&!r?this.title:$(e,this.cruds)},hasItems(e){return e&&e.children!==void 0&&e.children.length>0?e.children.filter(r=>this.permissions[r.id]&&this.permissions[r.id].show===!0).length>0:!1}}}),U=["href"],j={key:2,class:"module-menus"},q={key:0},z={key:2,class:"module-menus"},G={key:0},J={key:2,class:"module-menus"},Q={key:0};function W(e,r,_,i,u,H){const c=b("inline-svg"),p=F,w=b("HomeMenuRender",!0);return s(),n(g,null,[e.can(e.item)&&!e.hasItems(e.item)&&e.item.link_to==="link"?(s(),n("a",{key:0,class:"card p-4 sm:p-5 shadow-md bg-white dark:bg-slate-900 bg-white dark:bg-slate-900",href:e.item.url,target:"_blank"},[e.item.icon?(s(),n("i",{key:0,class:f(e.item.icon)},null,2)):t("",!0),e.item.svg?(s(),a(c,{key:1,class:"svg-icon",src:e.item.svg},null,8,["src"])):t("",!0),m("span",null,d(e.getTitleHome(e.item)),1),e.children?(s(),n("p",j,[(s(!0),n(g,null,v(e.children,(o,l)=>(s(),n("span",{key:o.index},[l>=1?(s(),n("span",q,", ")):t("",!0),y(d(e.getTitleHome(o,!0)),1)]))),128))])):t("",!0)],8,U)):e.can(e.item)&&!e.hasItems(e.item)&&e.item.link_to==="router-link"?(s(),a(p,{key:1,to:e.item.url,class:"card p-4 sm:p-5 shadow-md bg-white dark:bg-slate-900 bg-white dark:bg-slate-900"},{default:h(()=>[e.item.icon?(s(),n("i",{key:0,class:f(e.item.icon)},null,2)):t("",!0),e.item.svg?(s(),a(c,{key:1,class:"svg-icon",src:e.item.svg},null,8,["src"])):t("",!0),m("span",null,d(e.getTitleHome(e.item)),1),e.children?(s(),n("p",z,[(s(!0),n(g,null,v(e.children,(o,l)=>(s(),n("span",{key:o.index},[l>=1?(s(),n("span",G,", ")):t("",!0),y(d(e.getTitleHome(o,!0)),1)]))),128))])):t("",!0)]),_:1},8,["to"])):e.can(e.item)&&!e.hasItems(e.item)&&e.item.link_to!=="divider"?(s(),a(p,{key:2,to:`/admin/p/${e.item.id}`,class:"card p-4 sm:p-5 shadow-md bg-white dark:bg-slate-900 bg-white dark:bg-slate-900"},{default:h(()=>[e.item.icon?(s(),n("i",{key:0,class:f(e.item.icon)},null,2)):t("",!0),e.item.svg?(s(),a(c,{key:1,class:"svg-icon",src:e.item.svg},null,8,["src"])):t("",!0),m("span",null,d(e.getTitleHome(e.item)),1),e.children?(s(),n("p",J,[(s(!0),n(g,null,v(e.children,(o,l)=>(s(),n("span",{key:l},[l>=1?(s(),n("span",Q,", ")):t("",!0),y(d(e.getTitleHome(o,!0)),1)]))),128))])):t("",!0)]),_:1},8,["to"])):t("",!0),e.can(e.item)&&e.hasItems(e.item)?(s(),a(w,{key:3,title:e.getTitleHome(e.item),children:e.item.children,item:e.findActivehild(e.item),cruds:e.cruds,permissions:e.permissions},null,8,["title","children","item","cruds","permissions"])):t("",!0)],64)}const X=T(K,[["render",W],["__scopeId","data-v-38ece5b1"]]),Y={name:"index",components:{HomeMenuRender:X},setup(e,{emit:r}){const _=k.get(B),i=k.get(D),u=k.get(L),H=k.get(A);return{isMobile:P,menu:H,permissions:i,kruds:_,title:u.title,logo:u.logo,logoDark:u.logo_dark,base_url:V,darkMode:E}}},Z={class:"grid grow grid-nogutter module-page container pb-16 px-4 mx-auto"},x=m("div",{class:"flex-grow"},null,-1),ee=["src","alt"],se=["src","alt"],ne={class:"module-navigation"};function ie(e,r,_,i,u,H){const c=S,p=I,w=b("portal"),o=b("HomeMenuRender");return s(),n("div",Z,[M(p,null,{default:h(()=>[M(c,null,{default:h(()=>[y(d(i.title),1)]),_:1})]),_:1}),M(w,{to:"header-left"},{default:h(()=>[x]),_:1}),m("div",null,[i.darkMode?(s(),n("img",{key:0,src:`${i.base_url}${i.logoDark}`,class:"logo-light",alt:i.title},null,8,ee)):t("",!0),i.darkMode?t("",!0):(s(),n("img",{key:1,src:`${i.base_url}${i.logo}`,class:"logo-dark",alt:i.title},null,8,se)),m("nav",ne,[m("div",{class:f(i.isMobile?"grid grid-cols-1  gap-4":"grid grid-cols-3  gap-4")},[(s(!0),n(g,null,v(i.menu,l=>(s(),a(o,{key:l.index,item:l,cruds:i.kruds,permissions:i.permissions.permissions},null,8,["item","cruds","permissions"]))),128))],2)])])])}const de=T(Y,[["render",ie]]);export{de as default};