import{m as c}from"./_mixin.cf6a452e.js";import{_ as b,r as a,o as f,k as _,w as t,b as n,d as g,t as v,a as N}from"./entry.44501f88.js";const h={mixins:[c],computed:{lang(){const e=["createNumber"];return e.reduce((o,m,r)=>(o[m]=this.$t("dataForm."+e[r]),o),{})}},methods:{generateNumber(){this.model.form[this.model.component]=Math.floor(1e3+Math.random()*9e5)}}};function k(e,o,m,r,$,l){const d=a("inline-svg"),i=a("a-tooltip"),p=a("a-input-number"),u=a("lambda-form-item");return f(),_(u,{label:e.label,name:e.model.component,meta:e.meta},{default:t(()=>[n(p,{type:"number",value:e.model.form[e.model.component],"onUpdate:value":o[1]||(o[1]=s=>e.model.form[e.model.component]=s),placeholder:e.placeholder,disabled:e.disabled},{addonAfter:t(()=>[n(i,{slot:"append"},{title:t(()=>[g(v(l.lang.createNumber),1)]),default:t(()=>[N("span",{class:"svg-icon",onClick:o[0]||(o[0]=s=>l.generateNumber())},[n(d,{src:"/assets/icons/duotone/Home/Key.svg"})])]),_:1})]),_:1},8,["value","placeholder","disabled"])]),_:1},8,["label","name","meta"])}const C=b(h,[["render",k]]);export{C as default};
