import{_ as C,S as L,a as S,b as $,c as B}from"./SideMenu.a24fb106.js";import{g as R,v as V,y as h,a9 as W,z as j,aa as y,m as u,ab as r,B as T,A as G,ac as O,ad as F,ae as I,D as Y,af as q,ag as J,ah as K,ai as Q,aj as U,ak as X,al as Z,_ as x,r as l,o as n,k as s,w as i,n as w,am as M,b as o,j as p,a as m,an as ee,a4 as ae,ao as k,a8 as oe}from"./entry.44501f88.js";import"./nuxt-link.296568ef.js";import"./SettingOutlined.5793d1f1.js";import"./RenderSubMenu.6919a40b.js";const te=R({name:"BasicLayout",components:{MultiTab:C,SideMenu:L,GlobalHeader:S,GlobalFooter:$,SettingDrawer:B},setup(){const e=V(),a=h(!1);h([]);const v=W(),g=j(()=>!y.value||u.value?"0":r.value?"256px":"70px");r.value?a.value=!1:a.value=!0,T(()=>r.value,t=>{a.value=!t}),T(()=>e.fullPath,t=>{u.value&&d()}),G(()=>{navigator.userAgent.indexOf("Edge")>-1&&O(()=>{a.value=!a.value,setTimeout(()=>{a.value=!a.value},16)})});const _=()=>{a.value=!a.value,v.commit(U,!a.value),X()},f=()=>{let t="";return r.value?t=Z.value?"256px":"70px":t=u.value&&"0"||y.value&&"70px"||"0",t},d=()=>{a.value=!1};return{collapsed:a,contentPaddingLeft:g,toggle:_,paddingCalc:f,drawerClose:d,multiTab:F,device:I,layoutMode:Y,contentWidth:q,fixedHeader:J,navTheme:K,isMobile:u,isSideMenu:Q}}}),le={class:"flex"},ne={class:"w-full"};function se(e,a,v,g,_,f){const d=l("side-menu"),t=l("a-drawer"),N=S,P=C,c=l("portal-target"),A=oe,E=l("a-layout-content"),z=$,D=l("a-layout-footer"),H=B,b=l("a-layout");return n(),s(b,{class:w(["layout",e.device])},{default:i(()=>[("isMobile"in e?e.isMobile:M(u))?(n(),s(t,{key:0,placement:"left",wrapClassName:`drawer-sider ${e.navTheme}`,closable:!1,visible:e.collapsed,width:"275",onClose:e.drawerClose},{default:i(()=>[o(d,{mode:"inline",theme:e.navTheme,collapsed:!1,collapsible:!0,onToggle:e.toggle,device:e.device},null,8,["theme","onToggle","device"])]),_:1},8,["wrapClassName","visible","onClose"])):e.isSideMenu()?(n(),s(d,{key:1,mode:"inline",theme:e.navTheme,collapsed:e.collapsed,collapsible:!0,onToggle:e.toggle,device:e.device},null,8,["theme","collapsed","onToggle","device"])):p("",!0),o(b,{class:w([e.layoutMode,`content-width-${e.contentWidth}`]),style:k({paddingLeft:e.contentPaddingLeft,minHeight:"100vh"})},{default:i(()=>[o(N,{mode:e.layoutMode,theme:e.navTheme,collapsed:e.collapsed,device:e.device,onToggle:e.toggle},null,8,["mode","theme","collapsed","device","onToggle"]),o(E,null,{default:i(()=>[m("div",{class:"bg-slate-60 dark:bg-slate-800",style:k(`height: 100%; padding: ${e.fixedHeader?e.layoutMode==="levelmenu"?"20px":"87px":"20px"} 24px 20px;`)},[e.multiTab?(n(),s(P,{key:0})):p("",!0),o(ee,{name:"page-transition"},{default:i(()=>[m("section",null,[("isMobile"in e?e.isMobile:M(u))||e.layoutMode==="topmenu"?(n(),s(c,{key:0,name:"mobile-page-title"})):p("",!0),m("div",le,[o(c,{name:"level-menu"}),m("div",ne,[o(c,{name:"sub-top-menu"}),(n(),s(A,{key:(e._.provides[ae]||e.$route).path}))])])])]),_:1})],4)]),_:1}),o(D,{class:""},{default:i(()=>[o(z)]),_:1}),o(H)]),_:1},8,["class","style"])]),_:1},8,["class"])}const ce=x(te,[["render",se]]);export{ce as default};
