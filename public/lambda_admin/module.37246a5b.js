import{_ as v,S as $,a as f,b as h,c as b}from"./SideMenu.a24fb106.js";import{g as A,y as m,a9 as E,z as P,aa as p,m as s,ab as n,B as D,A as H,ac as N,ad as z,ae as R,D as V,af as W,ag as j,ah as G,ai as L,aj as O,ak as F,al as I,_ as Y,r as l,o as u,k as r,w as o,n as g,b as t,a as c,j as q,an as J,a4 as K,a8 as Q}from"./entry.44501f88.js";import"./nuxt-link.296568ef.js";import"./SettingOutlined.5793d1f1.js";import"./RenderSubMenu.6919a40b.js";const U=A({name:"BasicLayout",components:{MultiTab:v,SideMenu:$,GlobalHeader:f,GlobalFooter:h,SettingDrawer:b},setup(){const e=m(!1);m([]);const i=E(),d=P(()=>!p.value||s.value?"0":n.value?"256px":"70px");return D(()=>n.value,a=>{e.value=!a}),H(()=>{navigator.userAgent.indexOf("Edge")>-1&&N(()=>{e.value=!e.value,setTimeout(()=>{e.value=!e.value},16)}),n.value||(e.value=!0)}),{collapsed:e,contentPaddingLeft:d,toggle:()=>{e.value=!e.value,i.commit(O,!e.value),F()},paddingCalc:()=>{let a="";return n.value?a=I.value?"256px":"70px":a=s.value&&"0"||p.value&&"70px"||"0",a},drawerClose:()=>{e.value=!1},multiTab:z,device:R,layoutMode:V,contentWidth:W,fixedHeader:j,navTheme:G,isMobile:s,isSideMenu:L}}}),X={class:"bg-slate-60 dark:bg-slate-800",style:"height: 100%; "},Z={class:"flex"};function ee(e,i,d,y,T,x){const a=f,k=v,w=Q,C=l("a-layout-content"),S=h,M=l("a-layout-footer"),B=b,_=l("a-layout");return u(),r(_,{class:g(["layout",e.device])},{default:o(()=>[t(_,{class:g([e.layoutMode,`content-width-${e.contentWidth}`]),style:{minHeight:"100vh"}},{default:o(()=>[t(a,{class:"module-page",theme:e.navTheme,collapsed:!0,moduleHeader:!0,device:e.device,onToggle:e.toggle},null,8,["theme","device","onToggle"]),t(C,null,{default:o(()=>[c("div",X,[e.multiTab?(u(),r(k,{key:0})):q("",!0),t(J,{name:"page-transition"},{default:o(()=>[c("section",null,[c("div",Z,[(u(),r(w,{key:(e._.provides[K]||e.$route).fullPath}))])])]),_:1})])]),_:1}),t(M,{class:""},{default:o(()=>[t(S)]),_:1}),t(B)]),_:1},8,["class"])]),_:1},8,["class"])}const le=Y(U,[["render",ee]]);export{le as default};
