import{m as s}from"./_mixin.h9E7hkPO.js";import{_ as i,r as d,o as l,k as r,w as u}from"./entry.MJ5yZK23.js";const f={mixins:[s]};function b(e,a,c,$,v,g){const m=d("a-input-number"),t=d("lambda-form-item");return l(),r(t,{label:e.label,name:e.model.component,meta:e.meta},{default:u(()=>[e.meta.no_format?(l(),r(m,{key:0,type:"number",value:e.model.form[e.model.component],"onUpdate:value":a[0]||(a[0]=o=>e.model.form[e.model.component]=o),placeholder:e.placeholder,disabled:e.disabled,number:!0},null,8,["value","placeholder","disabled"])):(l(),r(m,{key:1,value:e.model.form[e.model.component],"onUpdate:value":a[1]||(a[1]=o=>e.model.form[e.model.component]=o),formatter:o=>{const[p,n]=`${o}`.split(".");return`${p.replace(/\B(?=(\d{3})+(?!\d))/g,",")}${n?"."+n.slice(0,e.meta.precision?e.meta.precision*1:3):""}`},parser:o=>o.replace(/\$\s?|(,*)/g,""),placeholder:e.placeholder,disabled:e.disabled},null,8,["value","formatter","parser","placeholder","disabled"]))]),_:1},8,["label","name","meta"])}const B=i(f,[["render",b]]);export{B as default};