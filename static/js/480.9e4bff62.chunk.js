"use strict";(self.webpackChunkjason456852_github_io=self.webpackChunkjason456852_github_io||[]).push([[480],{5727:(e,o,t)=>{t.r(o),t.d(o,{default:()=>le});var a=t(7924),r=t(7462),n=t(3366),i=t(2791),l=t(3733),s=t(4419),c=t(1402),d=t(6934),p=t(5878),m=t(1217);function g(e){return(0,m.Z)("MuiTableContainer",e)}(0,p.Z)("MuiTableContainer",["root"]);var u=t(184);const h=["className","component"],f=(0,d.ZP)("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(e,o)=>o.root})({width:"100%",overflowX:"auto"}),Z=i.forwardRef((function(e,o){const t=(0,c.Z)({props:e,name:"MuiTableContainer"}),{className:a,component:i="div"}=t,d=(0,n.Z)(t,h),p=(0,r.Z)({},t,{component:i}),m=(e=>{const{classes:o}=e;return(0,s.Z)({root:["root"]},g,o)})(p);return(0,u.jsx)(f,(0,r.Z)({ref:o,as:i,className:(0,l.Z)(m.root,a),ownerState:p},d))}));var y=t(5527);const x=i.createContext();function v(e){return(0,m.Z)("MuiTable",e)}(0,p.Z)("MuiTable",["root","stickyHeader"]);const b=["className","component","padding","size","stickyHeader"],j=(0,d.ZP)("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,t.stickyHeader&&o.stickyHeader]}})((e=>{let{theme:o,ownerState:t}=e;return(0,r.Z)({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":(0,r.Z)({},o.typography.body2,{padding:o.spacing(2),color:(o.vars||o).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},t.stickyHeader&&{borderCollapse:"separate"})})),k="table",w=i.forwardRef((function(e,o){const t=(0,c.Z)({props:e,name:"MuiTable"}),{className:a,component:d=k,padding:p="normal",size:m="medium",stickyHeader:g=!1}=t,h=(0,n.Z)(t,b),f=(0,r.Z)({},t,{component:d,padding:p,size:m,stickyHeader:g}),Z=(e=>{const{classes:o,stickyHeader:t}=e,a={root:["root",t&&"stickyHeader"]};return(0,s.Z)(a,v,o)})(f),y=i.useMemo((()=>({padding:p,size:m,stickyHeader:g})),[p,m,g]);return(0,u.jsx)(x.Provider,{value:y,children:(0,u.jsx)(j,(0,r.Z)({as:d,role:d===k?null:"table",ref:o,className:(0,l.Z)(Z.root,a),ownerState:f},h))})}));const C=i.createContext();function F(e){return(0,m.Z)("MuiTableHead",e)}(0,p.Z)("MuiTableHead",["root"]);const T=["className","component"],H=(0,d.ZP)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,o)=>o.root})({display:"table-header-group"}),M={variant:"head"},R="thead",S=i.forwardRef((function(e,o){const t=(0,c.Z)({props:e,name:"MuiTableHead"}),{className:a,component:i=R}=t,d=(0,n.Z)(t,T),p=(0,r.Z)({},t,{component:i}),m=(e=>{const{classes:o}=e;return(0,s.Z)({root:["root"]},F,o)})(p);return(0,u.jsx)(C.Provider,{value:M,children:(0,u.jsx)(H,(0,r.Z)({as:i,className:(0,l.Z)(m.root,a),ref:o,role:i===R?null:"rowgroup",ownerState:p},d))})}));var N=t(2065);function z(e){return(0,m.Z)("MuiTableRow",e)}const P=(0,p.Z)("MuiTableRow",["root","selected","hover","head","footer"]),D=["className","component","hover","selected"],A=(0,d.ZP)("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,t.head&&o.head,t.footer&&o.footer]}})((e=>{let{theme:o}=e;return{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,["&.".concat(P.hover,":hover")]:{backgroundColor:(o.vars||o).palette.action.hover},["&.".concat(P.selected)]:{backgroundColor:o.vars?"rgba(".concat(o.vars.palette.primary.mainChannel," / ").concat(o.vars.palette.action.selectedOpacity,")"):(0,N.Fq)(o.palette.primary.main,o.palette.action.selectedOpacity),"&:hover":{backgroundColor:o.vars?"rgba(".concat(o.vars.palette.primary.mainChannel," / calc(").concat(o.vars.palette.action.selectedOpacity," + ").concat(o.vars.palette.action.hoverOpacity,"))"):(0,N.Fq)(o.palette.primary.main,o.palette.action.selectedOpacity+o.palette.action.hoverOpacity)}}}})),L="tr",B=i.forwardRef((function(e,o){const t=(0,c.Z)({props:e,name:"MuiTableRow"}),{className:a,component:d=L,hover:p=!1,selected:m=!1}=t,g=(0,n.Z)(t,D),h=i.useContext(C),f=(0,r.Z)({},t,{component:d,hover:p,selected:m,head:h&&"head"===h.variant,footer:h&&"footer"===h.variant}),Z=(e=>{const{classes:o,selected:t,hover:a,head:r,footer:n}=e,i={root:["root",t&&"selected",a&&"hover",r&&"head",n&&"footer"]};return(0,s.Z)(i,z,o)})(f);return(0,u.jsx)(A,(0,r.Z)({as:d,ref:o,className:(0,l.Z)(Z.root,a),role:d===L?null:"row",ownerState:f},g))})),O=B;var W=t(4036);function X(e){return(0,m.Z)("MuiTableCell",e)}const _=(0,p.Z)("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),G=["align","className","component","padding","scope","size","sortDirection","variant"],q=(0,d.ZP)("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,o[t.variant],o["size".concat((0,W.Z)(t.size))],"normal"!==t.padding&&o["padding".concat((0,W.Z)(t.padding))],"inherit"!==t.align&&o["align".concat((0,W.Z)(t.align))],t.stickyHeader&&o.stickyHeader]}})((e=>{let{theme:o,ownerState:t}=e;return(0,r.Z)({},o.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:o.vars?"1px solid ".concat(o.vars.palette.TableCell.border):"1px solid\n    ".concat("light"===o.palette.mode?(0,N.$n)((0,N.Fq)(o.palette.divider,1),.88):(0,N._j)((0,N.Fq)(o.palette.divider,1),.68)),textAlign:"left",padding:16},"head"===t.variant&&{color:(o.vars||o).palette.text.primary,lineHeight:o.typography.pxToRem(24),fontWeight:o.typography.fontWeightMedium},"body"===t.variant&&{color:(o.vars||o).palette.text.primary},"footer"===t.variant&&{color:(o.vars||o).palette.text.secondary,lineHeight:o.typography.pxToRem(21),fontSize:o.typography.pxToRem(12)},"small"===t.size&&{padding:"6px 16px",["&.".concat(_.paddingCheckbox)]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},"checkbox"===t.padding&&{width:48,padding:"0 0 0 4px"},"none"===t.padding&&{padding:0},"left"===t.align&&{textAlign:"left"},"center"===t.align&&{textAlign:"center"},"right"===t.align&&{textAlign:"right",flexDirection:"row-reverse"},"justify"===t.align&&{textAlign:"justify"},t.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(o.vars||o).palette.background.default})})),E=i.forwardRef((function(e,o){const t=(0,c.Z)({props:e,name:"MuiTableCell"}),{align:a="inherit",className:d,component:p,padding:m,scope:g,size:h,sortDirection:f,variant:Z}=t,y=(0,n.Z)(t,G),v=i.useContext(x),b=i.useContext(C),j=b&&"head"===b.variant;let k;k=p||(j?"th":"td");let w=g;"td"===k?w=void 0:!w&&j&&(w="col");const F=Z||b&&b.variant,T=(0,r.Z)({},t,{align:a,component:k,padding:m||(v&&v.padding?v.padding:"normal"),size:h||(v&&v.size?v.size:"medium"),sortDirection:f,stickyHeader:"head"===F&&v&&v.stickyHeader,variant:F}),H=(e=>{const{classes:o,variant:t,align:a,padding:r,size:n,stickyHeader:i}=e,l={root:["root",t,i&&"stickyHeader","inherit"!==a&&"align".concat((0,W.Z)(a)),"normal"!==r&&"padding".concat((0,W.Z)(r)),"size".concat((0,W.Z)(n))]};return(0,s.Z)(l,X,o)})(T);let M=null;return f&&(M="asc"===f?"ascending":"descending"),(0,u.jsx)(q,(0,r.Z)({as:k,ref:o,className:(0,l.Z)(H.root,d),"aria-sort":M,scope:w,ownerState:T},y))})),I=E;function Y(e){return(0,m.Z)("MuiTableBody",e)}(0,p.Z)("MuiTableBody",["root"]);const V=["className","component"],J=(0,d.ZP)("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(e,o)=>o.root})({display:"table-row-group"}),$={variant:"body"},K="tbody",Q=i.forwardRef((function(e,o){const t=(0,c.Z)({props:e,name:"MuiTableBody"}),{className:a,component:i=K}=t,d=(0,n.Z)(t,V),p=(0,r.Z)({},t,{component:i}),m=(e=>{const{classes:o}=e;return(0,s.Z)({root:["root"]},Y,o)})(p);return(0,u.jsx)(C.Provider,{value:$,children:(0,u.jsx)(J,(0,r.Z)({className:(0,l.Z)(m.root,a),as:i,ref:o,role:i===K?null:"rowgroup",ownerState:p},d))})}));var U=t(43),ee=t(6003);const oe=[{target:"Email",hrefString:"mailto:pakling.yeung456852@gmail.com",label:"pakling.yeung456852@gmail.com"},{target:"LinkedIn",hrefString:"https://www.linkedin.com/in/jasonyeungpakling/",label:"https://www.linkedin.com/in/jasonyeungpakling/"},{target:"Indeed",hrefString:"https://profile.indeed.com/p/jasony-1vr81m9",label:"https://profile.indeed.com/p/jasony-1vr81m9"}];var te=t(2569);const ae=t.p+"static/media/CV - Pak Ling Yeung - General.4d827cead03c18fb2a31.pdf",re=t.p+"static/media/CV - Pak Ling Yeung - Developer.1ec1a9ab07a766a01a56.pdf",ne=t.p+"static/media/Cover Letter.d69348673cc8e8d9538b.pdf",ie=[new te.p(ae,"pdf","Resume - General","This resume is for all job types.","Google Docs","08-11-2023"),new te.p(re,"pdf","Resume - Developer","This resume is for software development job types.","Google Docs","08-11-2023"),new te.p(ne,"pdf","Cover Letter","This cover letter is for all job types.","Google Docs","08-11-2023")],le=()=>(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(a.Z,{children:"Contact",size:"sm",sx:{fontFamily:ee.fc,color:ee.FZ}}),(0,u.jsx)(Z,{component:y.Z,sx:{maxWidth:700,margin:"0 auto",marginTop:5,backgroundColor:"black",border:"1px solid green"},children:(0,u.jsxs)(w,{children:[(0,u.jsx)("caption",{style:{fontFamily:ee.fc,color:ee.HX},children:"Email is preferred."}),(0,u.jsx)(S,{children:(0,u.jsxs)(O,{children:[(0,u.jsx)(I,{width:150,sx:{fontFamily:ee.fc,color:ee.FZ,fontWeight:"bold"},children:"Method"}),(0,u.jsx)(I,{sx:{fontFamily:ee.fc,color:ee.FZ,fontWeight:"bold"},children:"Detail"})]})}),(0,u.jsx)(Q,{children:oe.map((e=>(0,u.jsxs)(O,{children:[(0,u.jsx)(I,{component:"th",scope:"row",sx:{fontFamily:ee.fc,color:ee.FZ},children:"> "+e.target}),(0,u.jsxs)(I,{sx:{fontFamily:ee.fc,color:ee.FZ},children:["> ",(0,u.jsx)(U.Z,{sx:{fontFamily:ee.fc,color:ee.FZ},button:!0,component:"a",target:"_blank",href:e.hrefString,children:e.label},"Email")]})]},e.name)))})]})}),(0,u.jsx)(te.Z,{files:ie,buttonName:"Resumes and Cover Letter"})]})},2569:(e,o,t)=>{t.d(o,{Z:()=>b,p:()=>v});var a=t(2791),r=t(4518),n=t(8081),i=t(5661),l=t(9157),s=t(7621),c=t(2169),d=t(1691),p=t(890),m=t(7123),g=t(5763),u=t(3400),h=t(2646),f=t(215),Z=t(9823),y=t(6003),x=t(184);function v(e,o,t,a,r,n){this.target=e,this.type=o,this.name=t,this.description=a,this.location=r,this.timeTag=n}const b=e=>{let{files:o,buttonName:t}=e;const[v,b]=(0,a.useState)(!1),[j,k]=(0,a.useState)(0);(0,a.useEffect)((()=>{console.log(o,t)}),[]);const w=()=>{b(!1)};return(0,x.jsxs)("div",{children:[(0,x.jsx)(r.Z,{variant:"outlined",color:"primary",onClick:()=>(k(0),void b(!0)),sx:{marginY:2,fontFamily:y.fc,color:y.HX,borderColor:y.HX,"&:hover":{color:y.FZ,borderColor:y.FZ}},children:t}),(0,x.jsxs)(n.Z,{fullWidth:!0,open:v,onClose:w,sx:{margin:"0 auto"},children:[(0,x.jsx)(i.Z,{color:y.FZ,fontFamily:y.fc,children:o[j].name}),(0,x.jsxs)(l.Z,{children:[(0,x.jsxs)(s.Z,{children:["img"===o[j].type&&(0,x.jsx)(c.Z,{component:"img",image:o[j].target}),"pdf"===o[j].type&&(0,x.jsx)(c.Z,{component:"iframe",src:o[j].target,height:500})]}),(0,x.jsxs)(d.Z,{sx:{marginTop:2},children:[(0,x.jsxs)(p.Z,{variant:"body2",color:y.HX,fontFamily:y.fc,children:["Built by / Source: ",o[j].location]}),(0,x.jsx)(p.Z,{paragraph:!0,variant:"body2",color:y.FZ,fontFamily:y.fc,children:"> "+o[j].description})]})]}),(0,x.jsxs)(m.Z,{children:[(0,x.jsxs)(p.Z,{fontSize:12,color:y.HX,fontFamily:y.fc,children:["Last Modified: ",o[j].timeTag]}),(0,x.jsx)(g.Z,{componentsProps:{tooltip:{sx:{color:y.FZ,backgroundColor:"black",fontFamily:y.fc}}},title:"Previous",arrow:!0,children:(0,x.jsx)(u.Z,{onClick:()=>{const e=(j-1+o.length)%o.length;k(e)},color:"primary",children:(0,x.jsx)(h.Z,{sx:{margin:"0 auto",color:y.FZ}})})}),(0,x.jsx)(g.Z,{componentsProps:{tooltip:{sx:{color:y.FZ,backgroundColor:"black",fontFamily:y.fc}}},title:"Next",arrow:!0,children:(0,x.jsx)(u.Z,{onClick:()=>{const e=(j+1)%o.length;k(e)},color:"primary",children:(0,x.jsx)(f.Z,{sx:{margin:"0 auto",color:y.FZ}})})}),(0,x.jsx)(g.Z,{componentsProps:{tooltip:{sx:{color:y.FZ,backgroundColor:"black",fontFamily:y.fc}}},title:"Close",arrow:!0,children:(0,x.jsx)(u.Z,{onClick:w,color:"primary",children:(0,x.jsx)(Z.Z,{sx:{margin:"0 auto",color:y.FZ}})})})]})]})]})}}}]);
//# sourceMappingURL=480.9e4bff62.chunk.js.map