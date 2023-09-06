stitches=(()=>{var e,t="borderStyles",n="borderWidths",r="colors",o="radii",i="shadows",s="sizes",l="space",a={gap:l,gridGap:l,columnGap:l,gridColumnGap:l,rowGap:l,gridRowGap:l,inset:l,insetBlock:l,insetBlockEnd:l,insetBlockStart:l,insetInline:l,insetInlineEnd:l,insetInlineStart:l,margin:l,marginTop:l,marginRight:l,marginBottom:l,marginLeft:l,marginBlock:l,marginBlockEnd:l,marginBlockStart:l,marginInline:l,marginInlineEnd:l,marginInlineStart:l,padding:l,paddingTop:l,paddingRight:l,paddingBottom:l,paddingLeft:l,paddingBlock:l,paddingBlockEnd:l,paddingBlockStart:l,paddingInline:l,paddingInlineEnd:l,paddingInlineStart:l,top:l,right:l,bottom:l,left:l,scrollMargin:l,scrollMarginTop:l,scrollMarginRight:l,scrollMarginBottom:l,scrollMarginLeft:l,scrollMarginX:l,scrollMarginY:l,scrollMarginBlock:l,scrollMarginBlockEnd:l,scrollMarginBlockStart:l,scrollMarginInline:l,scrollMarginInlineEnd:l,scrollMarginInlineStart:l,scrollPadding:l,scrollPaddingTop:l,scrollPaddingRight:l,scrollPaddingBottom:l,scrollPaddingLeft:l,scrollPaddingX:l,scrollPaddingY:l,scrollPaddingBlock:l,scrollPaddingBlockEnd:l,scrollPaddingBlockStart:l,scrollPaddingInline:l,scrollPaddingInlineEnd:l,scrollPaddingInlineStart:l,fontSize:"fontSizes",background:r,backgroundColor:r,backgroundImage:r,borderImage:r,border:r,borderBlock:r,borderBlockEnd:r,borderBlockStart:r,borderBottom:r,borderBottomColor:r,borderColor:r,borderInline:r,borderInlineEnd:r,borderInlineStart:r,borderLeft:r,borderLeftColor:r,borderRight:r,borderRightColor:r,borderTop:r,borderTopColor:r,caretColor:r,color:r,columnRuleColor:r,fill:r,outline:r,outlineColor:r,stroke:r,textDecorationColor:r,fontFamily:"fonts",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",blockSize:s,minBlockSize:s,maxBlockSize:s,inlineSize:s,minInlineSize:s,maxInlineSize:s,width:s,minWidth:s,maxWidth:s,height:s,minHeight:s,maxHeight:s,flexBasis:s,gridTemplateColumns:s,gridTemplateRows:s,borderWidth:n,borderTopWidth:n,borderRightWidth:n,borderBottomWidth:n,borderLeftWidth:n,borderStyle:t,borderTopStyle:t,borderRightStyle:t,borderBottomStyle:t,borderLeftStyle:t,borderRadius:o,borderTopLeftRadius:o,borderTopRightRadius:o,borderBottomRightRadius:o,borderBottomLeftRadius:o,boxShadow:i,textShadow:i,transition:"transitions",zIndex:"zIndices"},c=(e,t)=>"function"==typeof t?{"()":Function.prototype.toString.call(t)}:t,d=()=>{const e=Object.create(null);return(t,n,...r)=>{const o=(e=>JSON.stringify(e,c))(t);return o in e?e[o]:e[o]=n(t,...r)}},p=Symbol.for("sxs.internal"),u=(e,t)=>Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)),g=e=>{for(const t in e)return!0;return!1},{hasOwnProperty:f}=Object.prototype,h=e=>e.includes("-")?e:e.replace(/[A-Z]/g,(e=>"-"+e.toLowerCase())),m=/\s+(?![^()]*\))/,b=e=>t=>e(..."string"==typeof t?String(t).split(m):[t]),S={appearance:e=>({WebkitAppearance:e,appearance:e}),backfaceVisibility:e=>({WebkitBackfaceVisibility:e,backfaceVisibility:e}),backdropFilter:e=>({WebkitBackdropFilter:e,backdropFilter:e}),backgroundClip:e=>({WebkitBackgroundClip:e,backgroundClip:e}),boxDecorationBreak:e=>({WebkitBoxDecorationBreak:e,boxDecorationBreak:e}),clipPath:e=>({WebkitClipPath:e,clipPath:e}),content:e=>({content:e.includes('"')||e.includes("'")||/^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e)?e:`"${e}"`}),hyphens:e=>({WebkitHyphens:e,hyphens:e}),maskImage:e=>({WebkitMaskImage:e,maskImage:e}),maskSize:e=>({WebkitMaskSize:e,maskSize:e}),textSizeAdjust:e=>({WebkitTextSizeAdjust:e,textSizeAdjust:e}),userSelect:e=>({WebkitUserSelect:e,userSelect:e}),marginBlock:b(((e,t)=>({marginBlockStart:e,marginBlockEnd:t||e}))),marginInline:b(((e,t)=>({marginInlineStart:e,marginInlineEnd:t||e}))),maxSize:b(((e,t)=>({maxBlockSize:e,maxInlineSize:t||e}))),minSize:b(((e,t)=>({minBlockSize:e,minInlineSize:t||e}))),paddingBlock:b(((e,t)=>({paddingBlockStart:e,paddingBlockEnd:t||e}))),paddingInline:b(((e,t)=>({paddingInlineStart:e,paddingInlineEnd:t||e})))},y=/([\d.]+)([^]*)/,k=(e,t)=>e.length?e.reduce(((e,n)=>(e.push(...t.map((e=>e.includes("&")?e.replace(/&/g,/[ +>|~]/.test(n)&&/&.*&/.test(e)?`:is(${n})`:n):n+" "+e))),e)),[]):t,$=(e,t)=>e in x&&"string"==typeof t?t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/,((t,n,r,o)=>n+("stretch"===r?`-moz-available${o};${h(e)}:${n}-webkit-fill-available`:`-moz-fit-content${o};${h(e)}:${n}fit-content`)+o)):String(t),x={blockSize:1,height:1,inlineSize:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,width:1},R=e=>e?e+"-":"",w=(e,t,n)=>e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g,((e,r,o,i,s)=>"$"==i==!!o?e:(r||"--"==i?"calc(":"")+"var(--"+("$"===i?R(t)+(s.includes("$")?"":R(n))+s.replace(/\$/g,"-"):s)+")"+(r||"--"==i?"*"+(r||"")+(o||"1")+")":""))),B=/\s*,\s*(?![^()]*\))/,j=Object.prototype.toString,I=(e,t,n,r,o)=>{let i,s,l;const a=(e,t,n)=>{let c,d;const p=e=>{for(c in e){const f=64===c.charCodeAt(0),m=f&&Array.isArray(e[c])?e[c]:[e[c]];for(d of m){const e=/[A-Z]/.test(g=c)?g:g.replace(/-[^]/g,(e=>e[1].toUpperCase())),m="object"==typeof d&&d&&d.toString===j&&(!r.utils[e]||!t.length);if(e in r.utils&&!m){const t=r.utils[e];if(t!==s){s=t,p(t(d)),s=null;continue}}else if(e in S){const t=S[e];if(t!==l){l=t,p(t(d)),l=null;continue}}if(f&&(u=c.slice(1)in r.media?"@media "+r.media[c.slice(1)]:c,c=u.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g,((e,t,n,r,o,i)=>{const s=y.test(t),l=.0625*(s?-1:1),[a,c]=s?[r,t]:[t,r];return"("+("="===n[0]?"":">"===n[0]===s?"max-":"min-")+a+":"+("="!==n[0]&&1===n.length?c.replace(y,((e,t,r)=>Number(t)+l*(">"===n?1:-1)+r)):c)+(o?") and ("+(">"===o[0]?"min-":"max-")+a+":"+(1===o.length?i.replace(y,((e,t,n)=>Number(t)+l*(">"===o?-1:1)+n)):i):"")+")"}))),m){const e=f?n.concat(c):[...n],r=f?[...t]:k(t,c.split(B));void 0!==i&&o(C(...i)),i=void 0,a(d,r,e)}else void 0===i&&(i=[[],t,n]),c=f||36!==c.charCodeAt(0)?c:`--${R(r.prefix)}${c.slice(1).replace(/\$/g,"-")}`,d=m?d:"number"==typeof d?d&&!(e in z)&&45!==c.charCodeAt(0)?String(d)+"px":String(d):w($(e,null==d?"":d),r.prefix,r.themeMap[e]),i[0].push(`${f?`${c} `:`${h(c)}:`}${d}`)}}var u,g};p(e),void 0!==i&&o(C(...i)),i=void 0};a(e,t,n)},C=(e,t,n)=>`${n.map((e=>`${e}{`)).join("")}${t.length?`${t.join(",")}{`:""}${e.join(";")}${t.length?"}":""}${Array(n.length?n.length+1:0).join("}")}`,z={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},v=e=>String.fromCharCode(e+(e>25?39:97)),W=e=>(e=>{let t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=v(t%52)+n;return v(t%52)+n})(((e,t)=>{let n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e})(5381,JSON.stringify(e))>>>0),E=["themed","global","styled","onevar","resonevar","allvar","inline"],O=e=>{if(e.href&&!e.href.startsWith(location.origin))return!1;try{return!!e.cssRules}catch(e){return!1}},T=e=>{let t;const n=()=>{const{cssRules:e}=t.sheet;return[].map.call(e,((n,r)=>{const{cssText:o}=n;let i="";if(o.startsWith("--sxs"))return"";if(e[r-1]&&(i=e[r-1].cssText).startsWith("--sxs")){if(!n.cssRules.length)return"";for(const e in t.rules)if(t.rules[e].group===n)return`--sxs{--sxs:${[...t.rules[e].cache].join(" ")}}${o}`;return n.cssRules.length?`${i}${o}`:""}return o})).join("")},r=()=>{if(t){const{rules:e,sheet:n}=t;if(!n.deleteRule){for(;3===Object(Object(n.cssRules)[0]).type;)n.cssRules.splice(0,1);n.cssRules=[]}for(const t in e)delete e[t]}const o=Object(e).styleSheets||[];for(const e of o)if(O(e)){for(let o=0,i=e.cssRules;i[o];++o){const s=Object(i[o]);if(1!==s.type)continue;const l=Object(i[o+1]);if(4!==l.type)continue;++o;const{cssText:a}=s;if(!a.startsWith("--sxs"))continue;const c=a.slice(14,-3).trim().split(/\s+/),d=E[c[0]];d&&(t||(t={sheet:e,reset:r,rules:{},toString:n}),t.rules[d]={group:l,index:o,cache:new Set(c)})}if(t)break}if(!t){const o=(e,t)=>({type:t,cssRules:[],insertRule(e,t){this.cssRules.splice(t,0,o(e,{import:3,undefined:1}[(e.toLowerCase().match(/^@([a-z]+)/)||[])[1]]||4))},get cssText(){return"@media{}"===e?`@media{${[].map.call(this.cssRules,(e=>e.cssText)).join("")}}`:e}});t={sheet:(()=>{if(!e)return o("","text/css");const t=document.createElement("style"),n=void 0!==window.__webpack_nonce__?window.__webpack_nonce__:void 0!==window.nonce?window.nonce:null;return n&&t.setAttribute("nonce",n),(e.head||e).appendChild(t).sheet})(),rules:{},reset:r,toString:n}}const{sheet:i,rules:s}=t;for(let e=E.length-1;e>=0;--e){const t=E[e];if(!s[t]){const n=E[e+1],r=s[n]?s[n].index:i.cssRules.length;i.insertRule("@media{}",r),i.insertRule(`--sxs{--sxs:${e}}`,r),s[t]={group:i.cssRules[r+1],index:r,cache:new Set([e])}}P(s[t])}};return r(),t},P=e=>{const t=e.group;let n=t.cssRules.length;e.apply=e=>{try{t.insertRule(e,n),++n}catch(e){}}},M=Symbol(),N=d(),A=(e,t)=>N(e,(()=>{const n=(n,r={})=>{let o={type:null,composers:new Set};for(const t of n)if(null!=t)if(t[p]){null==o.type&&(o.type=t[p].type);for(const e of t[p].composers)o.composers.add(e)}else t.constructor!==Object||t.$$typeof?null==o.type&&(o.type=t):o.composers.add(L(t,e,r));return null==o.type&&(o.type="span"),o.composers.size||o.composers.add(["PJLV",{},[],[],{},[]]),G(e,o,t,r)},r=(...e)=>n(e);return r.withConfig=e=>(...t)=>n(t,e),r})),L=({variants:e,compoundVariants:t,defaultVariants:n,...r},o,{componentId:i,displayName:s})=>{const l=i||W(r),a=s?"c-"+s:"c",c=`${R(o.prefix)}${a}-${l}`,d=[],p=[],u=Object.create(null),h=[];for(const e in n)u[e]=String(n[e]);if("object"==typeof e&&e)for(const t in e){m=u,b=t,f.call(m,b)||(u[t]="undefined");const n=e[t];for(const e in n){const r={[t]:String(e)};"undefined"===String(e)&&h.push(t);const o=n[e],i=[r,o,!g(o)];d.push(i)}}var m,b;if("object"==typeof t&&t)for(const e of t){let{css:t,...n}=e;t="object"==typeof t&&t||{};for(const e in n)n[e]=String(n[e]);const r=[n,t,!g(t)];p.push(r)}return[c,r,d,p,u,h]},G=(e,t,n,{shouldForwardStitchesProp:r})=>{const[o,i,s,l]=F(t.composers),a="function"==typeof t.type||t.type.$$typeof?(e=>{function t(){for(let n=0;n<t[M].length;n++){const[r,o]=t[M][n];e.rules[r].apply(o)}return t[M]=[],null}return t[M]=[],t.rules={},E.forEach((e=>t.rules[e]={apply:n=>t[M].push([e,n])})),t})(n):null,c=(a||n).rules,d=`.${o}${i.length>1?`:where(.${i.slice(1).join(".")})`:""}`,g=p=>{p="object"==typeof p&&p||H;const{...u}=p,g={};for(const e in s)if(e in p){r?.(e)||delete u[e];let t=p[e];"object"==typeof t&&t?g[e]={"@initial":s[e],...t}:(t=String(t),g[e]="undefined"!==t||l.has(e)?t:s[e])}else g[e]=s[e];const f=new Set([...i]);for(const[r,o,i,s]of t.composers){n.rules.styled.cache.has(r)||(n.rules.styled.cache.add(r),I(o,[`.${r}`],[],e,(e=>{c.styled.apply(e)}))),i.forEach((t=>{const o=t[2],i=Object.keys(t[0])[0],s=t[0][i],l=t[1],a=`${i}-${s}`,d=`${r}-${W(l)}-${a}`,p=(o?n.rules.resonevar:n.rules.onevar).cache;if(!p.has(d)){p.add(d);const t=o?c.resonevar:c.onevar;n.rules.allvar.cache.has(d)||I(l,[`.${d}`],[],e,(e=>{t.apply(e)}))}}));const t=_(i,g,e.media),l=_(s,g,e.media,!0);for(const e of t)if(void 0!==e)for(const[t,n]of e){const e=`${r}-${W(n)}-${t}`;f.add(e)}for(const t of l)if(void 0!==t)for(const[o,i]of t){const t=`${r}-${W(i)}-${o}`;f.add(t),n.rules.allvar.cache.has(t)||(n.rules.allvar.cache.add(t),I(i,[`.${t}`],[],e,(e=>{c.allvar.apply(e)})))}}const h=u.css;if("object"==typeof h&&h){r?.("css")||delete u.css;const t=`${o}-i${W(h)}-css`;f.add(t),n.rules.inline.cache.has(t)||(n.rules.inline.cache.add(t),I(h,[`.${t}`],[],e,(e=>{c.inline.apply(e)})))}for(const e of String(p.className||"").trim().split(/\s+/))e&&f.add(e);const m=u.className=[...f].join(" ");return{type:t.type,className:m,selector:d,props:u,toString:()=>m,deferredInjector:a}};return u(g,{className:o,selector:d,[p]:t,toString:()=>(n.rules.styled.cache.has(o)||g(),o)})},F=e=>{let t="";const n=[],r={},o=[];for(const[i,,,,s,l]of e){""===t&&(t=i),n.push(i),o.push(...l);for(const e in s){const t=s[e];(void 0===r[e]||"undefined"!==t||l.includes(t))&&(r[e]=t)}}return[t,n,r,new Set(o)]},_=(e,t,n,r)=>{const o=[];e:for(let[i,s,l]of e){if(l)continue;let e,a=0,c=!1;for(e in i){const r=i[e];let o=t[e];if(o!==r){if("object"!=typeof o||!o)continue e;{let e,t,i=0;for(const s in o){if(r===String(o[s])){if("@initial"!==s){const e=s.slice(1);(t=t||[]).push(e in n?n[e]:s.replace(/^@media ?/,"")),c=!0}a+=i,e=!0}++i}if(t&&t.length&&(s={["@media "+t.join(", ")]:s}),!e)continue e}}}(o[a]=o[a]||[]).push([r?"cv":`${e}-${i[e]}`,s,c])}return o},H={},V=d(),D=(e,t)=>V(e,(()=>(...n)=>{const r=()=>{for(let r of n){r="object"==typeof r&&r||{};let n=W(r);if(!t.rules.global.cache.has(n)){if(t.rules.global.cache.add(n),"@import"in r){let e=[].indexOf.call(t.sheet.cssRules,t.rules.themed.group)-1;for(let n of[].concat(r["@import"]))n=n.includes('"')||n.includes("'")?n:`"${n}"`,t.sheet.insertRule(`@import ${n};`,e++);delete r["@import"]}I(r,[],[],e,(e=>{t.rules.global.apply(e)}))}}return""};return u(r,{toString:r})})),J=d(),Z=(e,t)=>J(e,(()=>n=>{const r=`${R(e.prefix)}k-${W(n)}`,o=()=>{if(!t.rules.global.cache.has(r)){t.rules.global.cache.add(r);const o=[];I(n,[],[],e,(e=>o.push(e)));const i=`@keyframes ${r}{${o.join("")}}`;t.rules.global.apply(i)}return r};return u(o,{get name(){return o()},toString:o})})),U=class{constructor(e,t,n,r){this.token=null==e?"":String(e),this.value=null==t?"":String(t),this.scale=null==n?"":String(n),this.prefix=null==r?"":String(r)}get computedValue(){return"var("+this.variable+")"}get variable(){return"--"+R(this.prefix)+R(this.scale)+this.token}toString(){return this.computedValue}},X=d(),Y=(e,t)=>X(e,(()=>(n,r)=>{r="object"==typeof n&&n||Object(r);const o=`.${n=(n="string"==typeof n?n:"")||`${R(e.prefix)}t-${W(r)}`}`,i={},s=[];for(const t in r){i[t]={};for(const n in r[t]){const o=`--${R(e.prefix)}${t}-${n}`,l=w(String(r[t][n]),e.prefix,t);i[t][n]=new U(n,l,t,e.prefix),s.push(`${o}:${l}`)}}const l=()=>{if(s.length&&!t.rules.themed.cache.has(n)){t.rules.themed.cache.add(n);const o=`${r===e.theme?":root,":""}.${n}{${s.join(";")}}`;t.rules.themed.apply(o)}return n};return{...i,get className(){return l()},selector:o,toString:l}})),q=d(),K=d(),Q=e=>{const t=(e=>{let t=!1;const n=q(e,(e=>{t=!0;const n="prefix"in(e="object"==typeof e&&e||{})?String(e.prefix):"",r="object"==typeof e.media&&e.media||{},o="object"==typeof e.root?e.root||null:globalThis.document||null,i="object"==typeof e.theme&&e.theme||{},s={prefix:n,media:r,theme:i,themeMap:"object"==typeof e.themeMap&&e.themeMap||{...a},utils:"object"==typeof e.utils&&e.utils||{}},l=T(o),c={css:A(s,l),globalCss:D(s,l),keyframes:Z(s,l),createTheme:Y(s,l),reset(){l.reset(),c.theme.toString()},theme:{},sheet:l,config:s,prefix:n,getCssText:l.toString,toString:l.toString};return String(c.theme=c.createTheme(i)),c}));return t||n.reset(),n})(e);return t.styled=(({config:e,sheet:t})=>K(e,(()=>{const n=A(e,t),r=(e,t=n,{displayName:r,shouldForwardStitchesProp:o}={})=>{const i=t(...e),s=i[p].type,l=o?.("as"),a=React.forwardRef(((e,t)=>{const n=e?.as&&!l?e?.as:s,{props:r,deferredInjector:o}=i(e);return l||delete r.as,r.ref=t,o?React.createElement(React.Fragment,null,React.createElement(n,r),React.createElement(o,null)):React.createElement(n,r)}));return a.className=i.className,a.displayName=r||`Styled.${s.displayName||s.name||s}`,a.selector=i.selector,a.toString=()=>i.selector,a[p]=i[p],a},o=(...e)=>r(e);return o.withConfig=e=>(...t)=>{const o=n.withConfig(e);return r(t,o,e)},o})))(t),t},ee=()=>e||(e=Q());return{createStitches:Q,createTheme:(...e)=>ee().createTheme(...e),css:(...e)=>ee().css(...e),defaultThemeMap:a,globalCss:(...e)=>ee().globalCss(...e),keyframes:(...e)=>ee().keyframes(...e),styled:(...e)=>ee().styled(...e)}})();
//# sourceMappingUrl=index.map