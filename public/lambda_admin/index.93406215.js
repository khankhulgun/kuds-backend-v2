import{_ as d,o as l,c as n,a as e,t as c,F as r,l as u,n as _,j as g,c8 as h,ao as v}from"./entry.44501f88.js";const b={props:["lambda","subTitle","languages","copyright","title","selectedLang","switchLanguage"],name:"default",data(){return{loading:!1,isSuccess:!1,isError:!1,credentials:{login:null,password:null}}},computed:{lang(){const t=["title","subtitle"];return t.reduce((o,s,i)=>(o[s]=this.$t("user."+t[i]),o),{})}}},f={class:"wrap"},m={class:"content"},y=e("div",{class:"content-blur"},null,-1),k=e("div",{class:"content-color-layer"},null,-1),w={id:"slideshow"},x={class:"one"},L={class:"auth"},S=e("div",{class:"auth-blur"},null,-1),p=e("div",{class:"auth-color-layer"},null,-1),C={key:0,class:"lang-switcher"},z=["onClick"];function B(t,o,s,i,E,F){return l(),n("div",{class:"login default-theme",style:v({backgroundImage:"url("+s.lambda.bg+")",backgroundSize:"cover",backgroundPosition:"center top"})},[e("div",f,[e("div",m,[y,k,e("div",w,[e("div",x,[e("h2",null,[e("span",null,c(s.title),1)]),e("p",null,c(s.subTitle),1)])])]),e("div",L,[S,p,s.lambda.has_language&&s.languages.length>=2?(l(),n("div",C,[(l(!0),n(r,null,u(s.languages,a=>(l(),n("a",{key:a.index,class:_(s.selectedLang==a.value?"active":""),href:"javascript:void(0)",onClick:N=>s.switchLanguage(a.code)},c(a.label),11,z))),128))])):g("",!0),h(t.$slots,"default")])])],4)}const V=d(b,[["render",B]]);export{V as default};
