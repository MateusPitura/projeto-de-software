import{x as C,r as i,I as p,v,w,a as S,j as t,B as h,c as E,o as F}from"./index-ipymASk9.js";import{b as k,I as c}from"./index-tcTpQIC0.js";import{L as q}from"./Loading-fuqjUss0.js";function z(e,a){const o=C(),n=o.getQueryCache();return i.useSyncExternalStore(i.useCallback(d=>n.subscribe(p.batchCalls(d)),[n]),()=>o.isFetching(e),()=>o.isFetching(e))}function s(e,a){return a?`${a}.${e}`:e}function H({inputNamePrefix:e}){const[a,o]=i.useState(""),{setValue:n,trigger:d,getValues:g}=k(),{safeFetch:m}=v(),{showErrorSnackbar:b}=w();async function u(){if(await d(s("cep",e))){const j=g(s("cep",e));o(j)}}async function f(l){return await m(`https://viacep.com.br/ws/${l}/json/`,{enableCookie:!1})}const{data:r,isFetching:x}=S({queryKey:["cepApi",a],queryFn:({queryKey:l})=>f(l[1]),enabled:!!a});i.useEffect(()=>{if(r!=null&&r.erro){b({title:"CEP não encontrado",description:"Por favor, insira um CEP válido"});return}r&&(n(s("street",e),r.logradouro,{shouldDirty:!0}),n(s("neighborhood",e),r.bairro,{shouldDirty:!0}),n(s("city",e),r.localidade,{shouldDirty:!0}),n(s("state",e),r.uf,{shouldDirty:!0}))},[r,e]);function y(l){l.key==="Enter"&&(l.preventDefault(),u())}return t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"flex items-center justify-between gap-1",onKeyDown:y,children:[t.jsx(c,{label:"CEP",name:s("cep",e),mask:"cep",maxLength:9,required:!0}),t.jsx(h,{variant:"quaternary",label:"Preencher automaticamente",onClick:u,padding:"none",state:x?"loading":void 0})]}),t.jsx(c,{label:"Número",name:s("number",e),required:!0}),t.jsx(c,{label:"Rua",name:s("street",e)}),t.jsx(c,{label:"Bairro",name:s("neighborhood",e)}),t.jsx(c,{label:"Cidade",name:s("city",e)}),t.jsx(c,{label:"Estado",name:s("state",e)}),t.jsx(c,{label:"Complemento",name:s("complement",e)})]})}const L=E(t.jsx("path",{d:"m14.06 9.02.92.92L5.92 19H5v-.92zM17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29m-3.6 3.19L3 17.25V21h3.75L17.81 9.94z"}),"EditOutlined");function I({children:e}){return t.jsx("div",{className:"flex flex-col gap-4 w-[56rem]",children:e})}function V({children:e}){return t.jsx("div",{className:"rounded-md overflow-hidden",children:e})}function D({title:e}){return t.jsx("span",{className:"text-light-onSurface text-title-medium",children:e})}function A({title:e}){return t.jsx("div",{className:"bg-light-tertiaryContainer p-4",children:t.jsx("span",{className:"text-body-large text-light-onTertiaryContainer",children:e})})}function B({label:e,value:a,onEdit:o,isLoading:n=!1}){return t.jsxs("div",{className:"bg-light-surfaceContainerLowest p-4 border-b flex last:border-none",children:[t.jsxs("div",{className:"w-full flex items-center",children:[t.jsx("span",{className:"text-light-onSurface flex-1 text-body-large",children:e}),t.jsx(q,{className:"flex-1 text-light-onSurface text-body-large line-clamp-1",isLoading:n,children:a})]}),t.jsx(h,{variant:"quaternary",onClick:o,state:n?"loading":void 0,iconLeft:t.jsx(L,{})})]})}function O({children:e,className:a}){return t.jsx("div",{className:F("bg-light-surfaceContainerLowest p-4 grid grid-cols-2 gap-4",a),children:e})}const K=Object.assign(I,{Title:D,Group:V,Header:A,Row:B,Body:O});export{H as A,K as S,z as u};
