import{_ as m,R as h,o as l,c as o,a as s,t as r,T as _,V as f,W as g,j as d,X as v}from"./entry.44501f88.js";const k={props:["selectedLang"],name:"aside-forgot",data(){return{loading:!1,isSuccess:!1,isError:!1,errorMsg:"",successMsg:"",credentials:{email:null}}},beforeCreate(){},computed:{lang(){const e=["forgot","email","forgotDescription","sendPasswordResetCode","emailSendError"];return e.reduce((t,n,u)=>(t[n]=this.$t("user."+e[u]),t),{})}},methods:{onSubmit(){this.isSuccess=!1,this.isError=!1,this.loading||(this.loading=!0,h.post("/auth/send-forgot-mail",{...this.credentials,lang:this.selectedLang}).then(({data:e})=>{setTimeout(()=>{this.loading=!1,e.status?(this.isSuccess=!0,this.successMsg=e.msg,setTimeout(()=>{this.$router.push("/auth/password-reset?email="+this.credentials.email)},2100)):(this.isError=!0,this.errorMsg=this.lang.emailSendError)},1e3)}).catch(e=>{this.errorMsg=e.response.data.error,setTimeout(()=>{this.loading=!1,this.isError=!0},1e3)}))}}},p={class:"form-wrap"},b={class:"form-content"},S={class:"form-element input"},M=["placeholder"],x=s("span",{class:"icon user"},null,-1),E={class:"form-element"},w={style:{"font-size":"12px"}},y={class:"form-element"},T=["disabled"],V={id:"submitTxt"},C={class:"loader"},D={key:0,class:"sk-fading-circle"},B=v('<div class="sk-circle1 sk-circle"></div><div class="sk-circle2 sk-circle"></div><div class="sk-circle3 sk-circle"></div><div class="sk-circle4 sk-circle"></div><div class="sk-circle5 sk-circle"></div><div class="sk-circle6 sk-circle"></div><div class="sk-circle7 sk-circle"></div><div class="sk-circle8 sk-circle"></div><div class="sk-circle9 sk-circle"></div><div class="sk-circle10 sk-circle"></div><div class="sk-circle11 sk-circle"></div><div class="sk-circle12 sk-circle"></div>',12),N=[B],R={id:"msg"},L={key:0,class:"success"},P={key:1,class:"error"};function z(e,t,n,u,i,c){return l(),o("div",p,[s("div",b,[s("h2",null,r(c.lang.forgot),1),s("form",{onSubmit:t[1]||(t[1]=_((...a)=>c.onSubmit&&c.onSubmit(...a),["prevent"])),method:"post",class:"login-form"},[s("div",S,[f(s("input",{type:"text",id:"email","onUpdate:modelValue":t[0]||(t[0]=a=>i.credentials.email=a),name:"email",autocomplete:"off",placeholder:c.lang.email},null,8,M),[[g,i.credentials.email]]),x]),s("div",E,[s("label",w,r(c.lang.forgotDescription),1)]),s("div",y,[s("button",{id:"submit",class:"button",disabled:i.loading,style:{width:"100%"}},[s("span",V,r(c.lang.sendPasswordResetCode),1),s("span",C,[i.loading?(l(),o("div",D,N)):d("",!0)])],8,T)])],32),s("div",R,[i.isSuccess?(l(),o("span",L,r(i.successMsg),1)):d("",!0),i.isError?(l(),o("span",P,r(i.errorMsg),1)):d("",!0)])])])}const W=m(k,[["render",z]]);export{W as default};
