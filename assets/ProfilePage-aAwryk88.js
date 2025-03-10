import{r as g,j as e,v as D,w as B,x as v,y as w,z as C,a as A}from"./index-ipymASk9.js";import{P as E}from"./Loading-fuqjUss0.js";import{u as k,A as N,S as i}from"./Section-BAXdDecc.js";import{s as M}from"./safeFormat-KZryEU5L.js";import{F as u,c as x,I as j,e as L,f as q,a as P}from"./index-tcTpQIC0.js";import{g as d,i as o,f as z}from"./Dialog-ClwVsdvK.js";import{I as f}from"./InputPassword-DZ3WJmUy.js";const R=g.createContext(null);function T({children:a}){const[s,n]=g.useState("");function r(t){n(t)}const c=g.useMemo(()=>({example:s,handleExample:r}),[s]);return e.jsx(R.Provider,{value:c,children:a})}function m({onSuccessSubmit:a,snackbarTitle:s,shouldInvalidateQuery:n=!0}){const{safeFetch:r}=D(),{showSuccessSnackbar:c}=B(),t=v();async function l(y){await r(`${C}/profile`,{method:"PATCH",body:y})}const{mutate:h,isPending:b}=w({mutationFn:l,onSuccess:()=>{n&&(t.invalidateQueries({queryKey:["profile"]}),t.invalidateQueries({queryKey:["usersDashboard"]})),c({title:s}),a()}});return{mutate:h,isPending:b}}const V=x.pick({email:!0});function H({defaultValues:a}){const{closeDialog:s}=d(),{mutate:n,isPending:r}=m({onSuccessSubmit:s,snackbarTitle:"Email atualizado com sucesso"});return e.jsx(u,{onSubmit:n,defaultValues:a,schema:V,children:e.jsx(Q,{isPending:r})})}function Q({isPending:a}){return e.jsxs(e.Fragment,{children:[e.jsx(o.Body,{children:e.jsx(j,{name:"email",label:"Email",required:!0})}),e.jsx(o.Footer,{labelPrimaryBtn:"Alterar",primaryBtnState:a?"loading":void 0,dirty:!0})]})}function K(){const{closeDialog:a}=d(),{mutate:s,isPending:n}=m({onSuccessSubmit:a,snackbarTitle:"Senha atualizada com sucesso",shouldInvalidateQuery:!1});function r(c){s({password:c.newPassword})}return e.jsx(u,{onSubmit:r,schema:L,defaultValues:{confirmPassword:"",newPassword:""},children:e.jsx(U,{isPending:n})})}function U({isPending:a}){return e.jsxs(e.Fragment,{children:[e.jsxs(o.Body,{children:[e.jsx(f,{label:"Nova senha",name:"newPassword",required:!0}),e.jsx(f,{label:"Confirmar senha",name:"confirmPassword",required:!0})]}),e.jsx(o.Footer,{labelPrimaryBtn:"Alterar",primaryBtnState:a?"loading":void 0,dirty:!0})]})}const G=x.pick({fullName:!0});function $({defaultValues:a}){const{closeDialog:s}=d(),{mutate:n,isPending:r}=m({onSuccessSubmit:s,snackbarTitle:"Nome completo atualizado com sucesso"});return e.jsx(u,{onSubmit:n,defaultValues:a,schema:G,children:e.jsx(_,{isPending:r})})}function _({isPending:a}){return e.jsxs(e.Fragment,{children:[e.jsx(o.Body,{children:e.jsx(j,{name:"fullName",label:"Nome completo",required:!0})}),e.jsx(o.Footer,{labelPrimaryBtn:"Alterar",primaryBtnState:a?"loading":void 0,dirty:!0})]})}const J=q;function O({defaultValues:a}){const{closeDialog:s}=d(),{mutate:n,isPending:r}=m({onSuccessSubmit:s,snackbarTitle:"Endereço atualizado com sucesso"});function c(t){n({address:t})}return e.jsx(u,{onSubmit:c,schema:J,defaultValues:a,onlyDirty:!0,children:e.jsx(W,{isPending:r})})}function W({isPending:a}){const s=k({queryKey:["cepApi"]});return e.jsxs(e.Fragment,{children:[e.jsx(o.Body,{children:e.jsx(N,{})}),e.jsx(o.Footer,{labelPrimaryBtn:"Alterar",primaryBtnState:a||s?"loading":void 0,dirty:!0})]})}const X=x.pick({birthDate:!0});function Y({defaultValues:a}){const{closeDialog:s}=d(),{mutate:n,isPending:r}=m({onSuccessSubmit:s,snackbarTitle:"Data de nascimento atualizada com sucesso"});return e.jsx(u,{onSubmit:n,defaultValues:a,schema:X,children:e.jsx(Z,{isPending:r})})}function Z({isPending:a}){return e.jsxs(e.Fragment,{children:[e.jsx(o.Body,{children:e.jsx(j,{name:"birthDate",label:"Data de nascimento",type:"date"})}),e.jsx(o.Footer,{primaryBtnState:a?"loading":void 0,dirty:!0,labelPrimaryBtn:"Alterar"})]})}const I=x.pick({cpf:!0});function ee({defaultValues:a}){const{closeDialog:s}=d(),{isPending:n,mutate:r}=m({onSuccessSubmit:s,snackbarTitle:"CPF atualizado com sucesso"});return e.jsx(u,{onSubmit:r,defaultValues:a,schema:I,children:e.jsx(te,{isPending:n})})}function te({isPending:a}){return e.jsxs(e.Fragment,{children:[e.jsx(o.Body,{children:e.jsx(j,{name:"cpf",label:"CPF",mask:"cpf",maxLength:14})}),e.jsx(o.Footer,{primaryBtnState:a?"loading":void 0,dirty:!0,labelPrimaryBtn:"Alterar"})]})}const ae=x.pick({code:!0});function se({defaultValues:a}){const{closeDialog:s}=d(),{mutate:n,isPending:r}=m({onSuccessSubmit:s,snackbarTitle:"Matrícula atualizada com sucesso"});return e.jsx(u,{onSubmit:n,defaultValues:a,schema:ae,children:e.jsx(ne,{isPending:r})})}function ne({isPending:a}){return e.jsxs(e.Fragment,{children:[e.jsx(o.Body,{children:e.jsx(j,{name:"code",label:"Matrícula"})}),e.jsx(o.Footer,{labelPrimaryBtn:"Alterar",primaryBtnState:a?"loading":void 0,dirty:!0})]})}const re=x.pick({cellPhone:!0});function oe({defaultValues:a}){const{closeDialog:s}=d(),{mutate:n,isPending:r}=m({onSuccessSubmit:s,snackbarTitle:"Celular atualizado com sucesso"});return e.jsx(u,{onSubmit:n,defaultValues:a,schema:re,children:e.jsx(ie,{isPending:r})})}function ie({isPending:a}){return e.jsxs(e.Fragment,{children:[e.jsx(o.Body,{children:e.jsx(j,{name:"cellPhone",label:"Celular",mask:"cellphone",maxLength:15})}),e.jsx(o.Footer,{labelPrimaryBtn:"Alterar",primaryBtnState:a?"loading":void 0,dirty:!0})]})}function le(a){var s,n,r,c,t,l,h;return{fullName:a.fullName,email:a.email,cellPhone:P(a.cellPhone,"cellphone")??"",cpf:P(a.cpf,"cpf")??"",code:a.code??"",birthDate:a.birthDate,address:{cep:P((s=a.address)==null?void 0:s.cep,"cep")??"",number:((n=a.address)==null?void 0:n.number)??"",street:((r=a.address)==null?void 0:r.street)??"",complement:((c=a.address)==null?void 0:c.complement)??"",neighborhood:((t=a.address)==null?void 0:t.neighborhood)??"",city:((l=a.address)==null?void 0:l.city)??"",state:((h=a.address)==null?void 0:h.state)??""}}}function ce({title:a,content:s,...n}){return e.jsxs(o,{...n,children:[e.jsx(o.Header,{title:a}),s]})}function ue(){var y,S;const[a,s]=g.useState({title:"",content:void 0}),n=z(),{safeFetch:r}=D();async function c(){return await r(`${C}/profile`)}const{data:t,isFetching:l}=A({queryKey:["profile"],queryFn:c,select:le}),h=g.useMemo(()=>{var F,p;return[(F=t==null?void 0:t.address)==null?void 0:F.street,(p=t==null?void 0:t.address)==null?void 0:p.number].filter(Boolean).join(", ")},[(y=t==null?void 0:t.address)==null?void 0:y.street,(S=t==null?void 0:t.address)==null?void 0:S.number]);function b(F){return t!=null&&t.birthDate?M({date:new Date(t==null?void 0:t.birthDate),format:F}):""}return e.jsxs(e.Fragment,{children:[e.jsx(ce,{...a,...n}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(E,{title:"Perfil"}),e.jsx("div",{className:"flex justify-center",children:e.jsxs(i,{children:[e.jsx(i.Title,{title:"Informações Pessoais"}),e.jsxs(i.Group,{children:[e.jsx(i.Header,{title:"Conta"}),e.jsx(i.Row,{label:"Email",value:t==null?void 0:t.email,isLoading:l,onEdit:()=>{n.openDialog(),s({title:"Alterar email",content:e.jsx(H,{defaultValues:{email:t==null?void 0:t.email}})})}}),e.jsx(i.Row,{label:"Senha",value:"••••••••••••",isLoading:l,onEdit:()=>{n.openDialog(),s({title:"Alterar senha",content:e.jsx(K,{})})}})]}),e.jsxs(i.Group,{children:[e.jsx(i.Header,{title:"Dados"}),e.jsx(i.Row,{label:"Nome completo",value:t==null?void 0:t.fullName,isLoading:l,onEdit:()=>{n.openDialog(),s({title:"Alterar nome completo",content:e.jsx($,{defaultValues:{fullName:t==null?void 0:t.fullName}})})}}),e.jsx(i.Row,{label:"Endereço",value:h,isLoading:l,onEdit:()=>{n.openDialog(),s({title:"Alterar endereço",content:e.jsx(O,{defaultValues:{...t==null?void 0:t.address}})})}}),e.jsx(i.Row,{label:"Data de nascimento",value:b("dd/MM/yyyy"),isLoading:l,onEdit:()=>{n.openDialog(),s({title:"Alterar data de nascimento",content:e.jsx(Y,{defaultValues:{birthDate:b("yyyy-MM-dd")}})})}}),e.jsx(i.Row,{label:"CPF",value:t==null?void 0:t.cpf,isLoading:l,onEdit:()=>{n.openDialog(),s({title:"Alterar CPF",content:e.jsx(ee,{defaultValues:{cpf:t==null?void 0:t.cpf}})})}}),e.jsx(i.Row,{label:"Matrícula",value:t==null?void 0:t.code,isLoading:l,onEdit:()=>{n.openDialog(),s({title:"Alterar matrícula",content:e.jsx(se,{defaultValues:{code:t==null?void 0:t.code}})})}}),e.jsx(i.Row,{label:"Celular",value:t==null?void 0:t.cellPhone,isLoading:l,onEdit:()=>{n.openDialog(),s({title:"Alterar celular",content:e.jsx(oe,{defaultValues:{cellPhone:t==null?void 0:t.cellPhone}})})}})]})]})})]})]})}function ye(){return e.jsx(T,{children:e.jsx(ue,{})})}export{ye as default};
