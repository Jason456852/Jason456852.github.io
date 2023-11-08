"use strict";(self.webpackChunkjason456852_github_io=self.webpackChunkjason456852_github_io||[]).push([[507],{1507:(e,t,a)=>{a.r(t),a.d(t,{default:()=>ae});var o=a(7924),r=a(7462),n=a(3366),i=a(2791),l=a(3733),s=a(4419),c=a(1402),d=a(6934),p=a(5878),v=a(1217);function h(e){return(0,v.Z)("MuiTableContainer",e)}(0,p.Z)("MuiTableContainer",["root"]);var g=a(184);const u=["className","component"],m=(0,d.ZP)("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(e,t)=>t.root})({width:"100%",overflowX:"auto"}),f=i.forwardRef((function(e,t){const a=(0,c.Z)({props:e,name:"MuiTableContainer"}),{className:o,component:i="div"}=a,d=(0,n.Z)(a,u),p=(0,r.Z)({},a,{component:i}),v=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"]},h,t)})(p);return(0,g.jsx)(m,(0,r.Z)({ref:t,as:i,className:(0,l.Z)(v.root,o),ownerState:p},d))}));var b=a(5527);const Z=i.createContext();function x(e){return(0,v.Z)("MuiTable",e)}(0,p.Z)("MuiTable",["root","stickyHeader"]);const y=["className","component","padding","size","stickyHeader"],w=(0,d.ZP)("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.stickyHeader&&t.stickyHeader]}})((e=>{let{theme:t,ownerState:a}=e;return(0,r.Z)({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":(0,r.Z)({},t.typography.body2,{padding:t.spacing(2),color:(t.vars||t).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},a.stickyHeader&&{borderCollapse:"separate"})})),k="table",R=i.forwardRef((function(e,t){const a=(0,c.Z)({props:e,name:"MuiTable"}),{className:o,component:d=k,padding:p="normal",size:v="medium",stickyHeader:h=!1}=a,u=(0,n.Z)(a,y),m=(0,r.Z)({},a,{component:d,padding:p,size:v,stickyHeader:h}),f=(e=>{const{classes:t,stickyHeader:a}=e,o={root:["root",a&&"stickyHeader"]};return(0,s.Z)(o,x,t)})(m),b=i.useMemo((()=>({padding:p,size:v,stickyHeader:h})),[p,v,h]);return(0,g.jsx)(Z.Provider,{value:b,children:(0,g.jsx)(w,(0,r.Z)({as:d,role:d===k?null:"table",ref:t,className:(0,l.Z)(f.root,o),ownerState:m},u))})}));const C=i.createContext();function S(e){return(0,v.Z)("MuiTableHead",e)}(0,p.Z)("MuiTableHead",["root"]);const M=["className","component"],j=(0,d.ZP)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-header-group"}),T={variant:"head"},H="thead",N=i.forwardRef((function(e,t){const a=(0,c.Z)({props:e,name:"MuiTableHead"}),{className:o,component:i=H}=a,d=(0,n.Z)(a,M),p=(0,r.Z)({},a,{component:i}),v=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"]},S,t)})(p);return(0,g.jsx)(C.Provider,{value:T,children:(0,g.jsx)(j,(0,r.Z)({as:i,className:(0,l.Z)(v.root,o),ref:t,role:i===H?null:"rowgroup",ownerState:p},d))})}));var A=a(2065);function F(e){return(0,v.Z)("MuiTableRow",e)}const z=(0,p.Z)("MuiTableRow",["root","selected","hover","head","footer"]),P=["className","component","hover","selected"],I=(0,d.ZP)("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.head&&t.head,a.footer&&t.footer]}})((e=>{let{theme:t}=e;return{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,["&.".concat(z.hover,":hover")]:{backgroundColor:(t.vars||t).palette.action.hover},["&.".concat(z.selected)]:{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / ").concat(t.vars.palette.action.selectedOpacity,")"):(0,A.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity),"&:hover":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / calc(").concat(t.vars.palette.action.selectedOpacity," + ").concat(t.vars.palette.action.hoverOpacity,"))"):(0,A.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity)}}}})),q="tr",W=i.forwardRef((function(e,t){const a=(0,c.Z)({props:e,name:"MuiTableRow"}),{className:o,component:d=q,hover:p=!1,selected:v=!1}=a,h=(0,n.Z)(a,P),u=i.useContext(C),m=(0,r.Z)({},a,{component:d,hover:p,selected:v,head:u&&"head"===u.variant,footer:u&&"footer"===u.variant}),f=(e=>{const{classes:t,selected:a,hover:o,head:r,footer:n}=e,i={root:["root",a&&"selected",o&&"hover",r&&"head",n&&"footer"]};return(0,s.Z)(i,F,t)})(m);return(0,g.jsx)(I,(0,r.Z)({as:d,ref:t,className:(0,l.Z)(f.root,o),role:d===q?null:"row",ownerState:m},h))})),D=W;var L=a(4036);function B(e){return(0,v.Z)("MuiTableCell",e)}const O=(0,p.Z)("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),V=["align","className","component","padding","scope","size","sortDirection","variant"],_=(0,d.ZP)("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant],t["size".concat((0,L.Z)(a.size))],"normal"!==a.padding&&t["padding".concat((0,L.Z)(a.padding))],"inherit"!==a.align&&t["align".concat((0,L.Z)(a.align))],a.stickyHeader&&t.stickyHeader]}})((e=>{let{theme:t,ownerState:a}=e;return(0,r.Z)({},t.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:t.vars?"1px solid ".concat(t.vars.palette.TableCell.border):"1px solid\n    ".concat("light"===t.palette.mode?(0,A.$n)((0,A.Fq)(t.palette.divider,1),.88):(0,A._j)((0,A.Fq)(t.palette.divider,1),.68)),textAlign:"left",padding:16},"head"===a.variant&&{color:(t.vars||t).palette.text.primary,lineHeight:t.typography.pxToRem(24),fontWeight:t.typography.fontWeightMedium},"body"===a.variant&&{color:(t.vars||t).palette.text.primary},"footer"===a.variant&&{color:(t.vars||t).palette.text.secondary,lineHeight:t.typography.pxToRem(21),fontSize:t.typography.pxToRem(12)},"small"===a.size&&{padding:"6px 16px",["&.".concat(O.paddingCheckbox)]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},"checkbox"===a.padding&&{width:48,padding:"0 0 0 4px"},"none"===a.padding&&{padding:0},"left"===a.align&&{textAlign:"left"},"center"===a.align&&{textAlign:"center"},"right"===a.align&&{textAlign:"right",flexDirection:"row-reverse"},"justify"===a.align&&{textAlign:"justify"},a.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(t.vars||t).palette.background.default})})),E=i.forwardRef((function(e,t){const a=(0,c.Z)({props:e,name:"MuiTableCell"}),{align:o="inherit",className:d,component:p,padding:v,scope:h,size:u,sortDirection:m,variant:f}=a,b=(0,n.Z)(a,V),x=i.useContext(Z),y=i.useContext(C),w=y&&"head"===y.variant;let k;k=p||(w?"th":"td");let R=h;"td"===k?R=void 0:!R&&w&&(R="col");const S=f||y&&y.variant,M=(0,r.Z)({},a,{align:o,component:k,padding:v||(x&&x.padding?x.padding:"normal"),size:u||(x&&x.size?x.size:"medium"),sortDirection:m,stickyHeader:"head"===S&&x&&x.stickyHeader,variant:S}),j=(e=>{const{classes:t,variant:a,align:o,padding:r,size:n,stickyHeader:i}=e,l={root:["root",a,i&&"stickyHeader","inherit"!==o&&"align".concat((0,L.Z)(o)),"normal"!==r&&"padding".concat((0,L.Z)(r)),"size".concat((0,L.Z)(n))]};return(0,s.Z)(l,B,t)})(M);let T=null;return m&&(T="asc"===m?"ascending":"descending"),(0,g.jsx)(_,(0,r.Z)({as:k,ref:t,className:(0,l.Z)(j.root,d),"aria-sort":T,scope:R,ownerState:M},b))})),X=E;function J(e){return(0,v.Z)("MuiTableBody",e)}(0,p.Z)("MuiTableBody",["root"]);const $=["className","component"],G=(0,d.ZP)("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-row-group"}),K={variant:"body"},Q="tbody",U=i.forwardRef((function(e,t){const a=(0,c.Z)({props:e,name:"MuiTableBody"}),{className:o,component:i=Q}=a,d=(0,n.Z)(a,$),p=(0,r.Z)({},a,{component:i}),v=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"]},J,t)})(p);return(0,g.jsx)(C.Provider,{value:K,children:(0,g.jsx)(G,(0,r.Z)({className:(0,l.Z)(v.root,o),as:i,ref:t,role:i===Q?null:"rowgroup",ownerState:p},d))})}));var Y=a(43),ee=a(6003);const te=[{target:"Email",hrefString:"mailto:pakling.yeung456852@gmail.com",label:"pakling.yeung456852@gmail.com"},{target:"LinkedIn",hrefString:"https://www.linkedin.com/in/jasonyeungpakling/",label:"https://www.linkedin.com/in/jasonyeungpakling/"},{target:"Indeed",hrefString:"https://profile.indeed.com/p/jasony-1vr81m9",label:"https://profile.indeed.com/p/jasony-1vr81m9"}],ae=()=>(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(o.Z,{children:"Contact",size:"sm",sx:{fontFamily:ee.fc,color:ee.FZ}}),(0,g.jsx)(f,{component:b.Z,sx:{maxWidth:600,margin:"0 auto",marginTop:5,backgroundColor:"black",border:"1px solid green"},children:(0,g.jsxs)(R,{children:[(0,g.jsx)("caption",{style:{fontFamily:ee.fc,color:ee.HX},children:"Email is preferred."}),(0,g.jsx)(N,{children:(0,g.jsxs)(D,{children:[(0,g.jsx)(X,{width:150,sx:{fontFamily:ee.fc,color:ee.FZ,fontWeight:"bold"},children:"Method"}),(0,g.jsx)(X,{sx:{fontFamily:ee.fc,color:ee.FZ,fontWeight:"bold"},children:"Detail"})]})}),(0,g.jsx)(U,{children:te.map((e=>(0,g.jsxs)(D,{children:[(0,g.jsx)(X,{component:"th",scope:"row",sx:{fontFamily:ee.fc,color:ee.FZ},children:e.target}),(0,g.jsx)(X,{sx:{fontFamily:ee.fc,color:ee.FZ},children:(0,g.jsx)(Y.Z,{sx:{fontFamily:ee.fc,color:ee.FZ},button:!0,component:"a",target:"_blank",href:e.hrefString,children:e.label},"Email")})]},e.name)))})]})})]})},7924:(e,t,a)=>{a.d(t,{Z:()=>Z});var o=a(3366),r=a(7462),n=a(2791),i=a(3733),l=a(4419),s=a(2065),c=a(6934),d=a(1402),p=a(5878),v=a(1217);function h(e){return(0,v.Z)("MuiDivider",e)}(0,p.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);var g=a(184);const u=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],m=(0,c.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.absolute&&t.absolute,t[a.variant],a.light&&t.light,"vertical"===a.orientation&&t.vertical,a.flexItem&&t.flexItem,a.children&&t.withChildren,a.children&&"vertical"===a.orientation&&t.withChildrenVertical,"right"===a.textAlign&&"vertical"!==a.orientation&&t.textAlignRight,"left"===a.textAlign&&"vertical"!==a.orientation&&t.textAlignLeft]}})((e=>{let{theme:t,ownerState:a}=e;return(0,r.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin"},a.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},a.light&&{borderColor:t.vars?"rgba(".concat(t.vars.palette.dividerChannel," / 0.08)"):(0,s.Fq)(t.palette.divider,.08)},"inset"===a.variant&&{marginLeft:72},"middle"===a.variant&&"horizontal"===a.orientation&&{marginLeft:t.spacing(2),marginRight:t.spacing(2)},"middle"===a.variant&&"vertical"===a.orientation&&{marginTop:t.spacing(1),marginBottom:t.spacing(1)},"vertical"===a.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},a.flexItem&&{alignSelf:"stretch",height:"auto"})}),(e=>{let{ownerState:t}=e;return(0,r.Z)({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{content:'""',alignSelf:"center"}})}),(e=>{let{theme:t,ownerState:a}=e;return(0,r.Z)({},a.children&&"vertical"!==a.orientation&&{"&::before, &::after":{width:"100%",borderTop:"thin solid ".concat((t.vars||t).palette.divider)}})}),(e=>{let{theme:t,ownerState:a}=e;return(0,r.Z)({},a.children&&"vertical"===a.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:"thin solid ".concat((t.vars||t).palette.divider)}})}),(e=>{let{ownerState:t}=e;return(0,r.Z)({},"right"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})})),f=(0,c.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.wrapper,"vertical"===a.orientation&&t.wrapperVertical]}})((e=>{let{theme:t,ownerState:a}=e;return(0,r.Z)({display:"inline-block",paddingLeft:"calc(".concat(t.spacing(1)," * 1.2)"),paddingRight:"calc(".concat(t.spacing(1)," * 1.2)")},"vertical"===a.orientation&&{paddingTop:"calc(".concat(t.spacing(1)," * 1.2)"),paddingBottom:"calc(".concat(t.spacing(1)," * 1.2)")})})),b=n.forwardRef((function(e,t){const a=(0,d.Z)({props:e,name:"MuiDivider"}),{absolute:n=!1,children:s,className:c,component:p=(s?"div":"hr"),flexItem:v=!1,light:b=!1,orientation:Z="horizontal",role:x=("hr"!==p?"separator":void 0),textAlign:y="center",variant:w="fullWidth"}=a,k=(0,o.Z)(a,u),R=(0,r.Z)({},a,{absolute:n,component:p,flexItem:v,light:b,orientation:Z,role:x,textAlign:y,variant:w}),C=(e=>{const{absolute:t,children:a,classes:o,flexItem:r,light:n,orientation:i,textAlign:s,variant:c}=e,d={root:["root",t&&"absolute",c,n&&"light","vertical"===i&&"vertical",r&&"flexItem",a&&"withChildren",a&&"vertical"===i&&"withChildrenVertical","right"===s&&"vertical"!==i&&"textAlignRight","left"===s&&"vertical"!==i&&"textAlignLeft"],wrapper:["wrapper","vertical"===i&&"wrapperVertical"]};return(0,l.Z)(d,h,o)})(R);return(0,g.jsx)(m,(0,r.Z)({as:p,className:(0,i.Z)(C.root,c),role:x,ref:t,ownerState:R},k,{children:s?(0,g.jsx)(f,{className:C.wrapper,ownerState:R,children:s}):null}))}));b.muiSkipListHighlight=!0;const Z=b},5527:(e,t,a)=>{a.d(t,{Z:()=>b});var o=a(3366),r=a(7462),n=a(2791),i=a(3733),l=a(4419),s=a(2065),c=a(6934);const d=e=>{let t;return t=e<1?5.11916*e**2:4.5*Math.log(e+1)+2,(t/100).toFixed(2)};var p=a(1402),v=a(5878),h=a(1217);function g(e){return(0,h.Z)("MuiPaper",e)}(0,v.Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var u=a(184);const m=["className","component","elevation","square","variant"],f=(0,c.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant],!a.square&&t.rounded,"elevation"===a.variant&&t["elevation".concat(a.elevation)]]}})((e=>{let{theme:t,ownerState:a}=e;var o;return(0,r.Z)({backgroundColor:(t.vars||t).palette.background.paper,color:(t.vars||t).palette.text.primary,transition:t.transitions.create("box-shadow")},!a.square&&{borderRadius:t.shape.borderRadius},"outlined"===a.variant&&{border:"1px solid ".concat((t.vars||t).palette.divider)},"elevation"===a.variant&&(0,r.Z)({boxShadow:(t.vars||t).shadows[a.elevation]},!t.vars&&"dark"===t.palette.mode&&{backgroundImage:"linear-gradient(".concat((0,s.Fq)("#fff",d(a.elevation)),", ").concat((0,s.Fq)("#fff",d(a.elevation)),")")},t.vars&&{backgroundImage:null==(o=t.vars.overlays)?void 0:o[a.elevation]}))})),b=n.forwardRef((function(e,t){const a=(0,p.Z)({props:e,name:"MuiPaper"}),{className:n,component:s="div",elevation:c=1,square:d=!1,variant:v="elevation"}=a,h=(0,o.Z)(a,m),b=(0,r.Z)({},a,{component:s,elevation:c,square:d,variant:v}),Z=(e=>{const{square:t,elevation:a,variant:o,classes:r}=e,n={root:["root",o,!t&&"rounded","elevation"===o&&"elevation".concat(a)]};return(0,l.Z)(n,g,r)})(b);return(0,u.jsx)(f,(0,r.Z)({as:s,ownerState:b,className:(0,i.Z)(Z.root,n),ref:t},h))}))}}]);
//# sourceMappingURL=507.a24d2b9a.chunk.js.map