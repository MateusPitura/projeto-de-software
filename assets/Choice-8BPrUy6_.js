import{r as n,j as e}from"./index-ipymASk9.js";import{b as i,d as l,E as d}from"./index-tcTpQIC0.js";const b=20,g=1,j=2;function p({children:t,name:r,hideErrorLabel:s}){const o=n.useMemo(()=>n.Children.map(t,a=>n.cloneElement(a,{name:r,hideErrorLabel:s})),[t,r,s]);return e.jsx(e.Fragment,{children:o})}function u({label:t,name:r,hideErrorLabel:s,...o}){const{register:a}=i(),{errors:c}=l({name:r});if(r)return e.jsxs("label",{className:"flex gap-2 items-start cursor-pointer hover:opacity-50",children:[e.jsxs("div",{className:"grid place-items-center mt-1",children:[e.jsx("input",{type:"radio",...a(r),className:"peer col-start-1 row-start-1 appearance-none shrink-0 w-4 h-4 border-2 border-light-primary rounded-full disabled:border-neutral-300 cursor-pointer",...o}),e.jsx("div",{className:"col-start-1 row-start-1 w-2 h-2 rounded-full peer-checked:bg-light-primary peer-checked:peer-disabled:bg-neutral-300"})]}),e.jsx("div",{className:"text-body-large text-light-onSurface",children:t}),s||e.jsx(d,{errors:c,name:r})]})}function h({label:t,name:r,hideErrorLabel:s,...o}){const{register:a}=i(),{errors:c}=l({name:r});if(r)return e.jsxs("label",{className:"flex gap-2 items-center cursor-pointer hover:opacity-50",children:[e.jsx("input",{type:"checkbox",...a(r),className:"col-start-1 row-start-1 shrink-0 w-4 h-4 border-2 accent-light-primary disabled:border-neutral-300 cursor-pointer",...o}),e.jsx("div",{className:"text-body-large text-light-onSurface",children:t}),s||e.jsx(d,{errors:c,name:r})]})}const E=Object.assign(p,{Radio:u,Checkbox:h});export{E as C,b as I,g as S,j as a};
