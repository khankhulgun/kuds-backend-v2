import{_ as i,o as a,c as n,a as s,t as l,F as o,l as d,n as r,j as _,c8 as g,ao as u}from"./entry.44501f88.js";const h={props:["lambda","subTitle","languages","copyright","title","selectedLang","switchLanguage"],data(){return{loading:!1,isSuccess:!1,isError:!1,credentials:{login:null,password:null}}}},m={class:"content"},y=s("div",{class:"content-layer"},null,-1),v={class:"title"},f={style:{"max-width":"600px"}},x={class:"auth"},b={key:0,class:"lang-switcher"},k=["onClick"],w={class:"form-wrap"},L=["innerHTML"];function C(c,S,e,T,B,z){return a(),n("div",{class:"login aside-theme",style:u({backgroundImage:"url("+e.lambda.bg+")"})},[s("div",m,[y,s("div",v,[s("h2",f,l(e.title),1),s("p",null,l(e.subTitle),1)])]),s("div",x,[e.lambda.has_language&&e.languages.length>=2?(a(),n("div",b,[(a(!0),n(o,null,d(e.languages,t=>(a(),n("a",{key:t.index,class:r(e.selectedLang===t.code?"active":""),onClick:E=>e.switchLanguage(t.code)},l(t.label),11,k))),128))])):_("",!0),s("div",w,[g(c.$slots,"default"),s("div",{class:"copyright",style:{width:"70%","text-align":"center"},innerHTML:e.copyright},null,8,L)])])],4)}const H=i(h,[["render",C]]);export{H as default};
