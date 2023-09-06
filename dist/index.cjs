var e,t="colors",r="sizes",n="space",o={gap:n,gridGap:n,columnGap:n,gridColumnGap:n,rowGap:n,gridRowGap:n,inset:n,insetBlock:n,insetBlockEnd:n,insetBlockStart:n,insetInline:n,insetInlineEnd:n,insetInlineStart:n,margin:n,marginTop:n,marginRight:n,marginBottom:n,marginLeft:n,marginBlock:n,marginBlockEnd:n,marginBlockStart:n,marginInline:n,marginInlineEnd:n,marginInlineStart:n,padding:n,paddingTop:n,paddingRight:n,paddingBottom:n,paddingLeft:n,paddingBlock:n,paddingBlockEnd:n,paddingBlockStart:n,paddingInline:n,paddingInlineEnd:n,paddingInlineStart:n,top:n,right:n,bottom:n,left:n,scrollMargin:n,scrollMarginTop:n,scrollMarginRight:n,scrollMarginBottom:n,scrollMarginLeft:n,scrollMarginX:n,scrollMarginY:n,scrollMarginBlock:n,scrollMarginBlockEnd:n,scrollMarginBlockStart:n,scrollMarginInline:n,scrollMarginInlineEnd:n,scrollMarginInlineStart:n,scrollPadding:n,scrollPaddingTop:n,scrollPaddingRight:n,scrollPaddingBottom:n,scrollPaddingLeft:n,scrollPaddingX:n,scrollPaddingY:n,scrollPaddingBlock:n,scrollPaddingBlockEnd:n,scrollPaddingBlockStart:n,scrollPaddingInline:n,scrollPaddingInlineEnd:n,scrollPaddingInlineStart:n,fontSize:"fontSizes",background:t,backgroundColor:t,backgroundImage:t,borderImage:t,border:t,borderBlock:t,borderBlockEnd:t,borderBlockStart:t,borderBottom:t,borderBottomColor:t,borderColor:t,borderInline:t,borderInlineEnd:t,borderInlineStart:t,borderLeft:t,borderLeftColor:t,borderRight:t,borderRightColor:t,borderTop:t,borderTopColor:t,caretColor:t,color:t,columnRuleColor:t,fill:t,outline:t,outlineColor:t,stroke:t,textDecorationColor:t,fontFamily:"fonts",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",blockSize:r,minBlockSize:r,maxBlockSize:r,inlineSize:r,minInlineSize:r,maxInlineSize:r,width:r,minWidth:r,maxWidth:r,height:r,minHeight:r,maxHeight:r,flexBasis:r,gridTemplateColumns:r,gridTemplateRows:r,borderWidth:"borderWidths",borderTopWidth:"borderWidths",borderRightWidth:"borderWidths",borderBottomWidth:"borderWidths",borderLeftWidth:"borderWidths",borderStyle:"borderStyles",borderTopStyle:"borderStyles",borderRightStyle:"borderStyles",borderBottomStyle:"borderStyles",borderLeftStyle:"borderStyles",borderRadius:"radii",borderTopLeftRadius:"radii",borderTopRightRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",boxShadow:"shadows",textShadow:"shadows",transition:"transitions",zIndex:"zIndices"},i=(e,t)=>"function"==typeof t?{"()":Function.prototype.toString.call(t)}:t,s=()=>{const e=Object.create(null);return(t,r,...n)=>{const o=(e=>JSON.stringify(e,i))(t);return o in e?e[o]:e[o]=r(t,...n)}},l=Symbol.for("sxs.internal"),a=(e,t)=>Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)),c=e=>{for(const t in e)return!0;return!1},{hasOwnProperty:d}=Object.prototype,p=e=>e.includes("-")?e:e.replace(/[A-Z]/g,(e=>"-"+e.toLowerCase())),u=/\s+(?![^()]*\))/,g=e=>t=>e(..."string"==typeof t?String(t).split(u):[t]),f={appearance:e=>({WebkitAppearance:e,appearance:e}),backfaceVisibility:e=>({WebkitBackfaceVisibility:e,backfaceVisibility:e}),backdropFilter:e=>({WebkitBackdropFilter:e,backdropFilter:e}),backgroundClip:e=>({WebkitBackgroundClip:e,backgroundClip:e}),boxDecorationBreak:e=>({WebkitBoxDecorationBreak:e,boxDecorationBreak:e}),clipPath:e=>({WebkitClipPath:e,clipPath:e}),content:e=>({content:e.includes('"')||e.includes("'")||/^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e)?e:`"${e}"`}),hyphens:e=>({WebkitHyphens:e,hyphens:e}),maskImage:e=>({WebkitMaskImage:e,maskImage:e}),maskSize:e=>({WebkitMaskSize:e,maskSize:e}),textSizeAdjust:e=>({WebkitTextSizeAdjust:e,textSizeAdjust:e}),userSelect:e=>({WebkitUserSelect:e,userSelect:e}),marginBlock:g(((e,t)=>({marginBlockStart:e,marginBlockEnd:t||e}))),marginInline:g(((e,t)=>({marginInlineStart:e,marginInlineEnd:t||e}))),maxSize:g(((e,t)=>({maxBlockSize:e,maxInlineSize:t||e}))),minSize:g(((e,t)=>({minBlockSize:e,minInlineSize:t||e}))),paddingBlock:g(((e,t)=>({paddingBlockStart:e,paddingBlockEnd:t||e}))),paddingInline:g(((e,t)=>({paddingInlineStart:e,paddingInlineEnd:t||e})))},h=/([\d.]+)([^]*)/,m=(e,t)=>e.length?e.reduce(((e,r)=>(e.push(...t.map((e=>e.includes("&")?e.replace(/&/g,/[ +>|~]/.test(r)&&/&.*&/.test(e)?`:is(${r})`:r):r+" "+e))),e)),[]):t,b=(e,t)=>e in S&&"string"==typeof t?t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/,((t,r,n,o)=>r+("stretch"===n?`-moz-available${o};${p(e)}:${r}-webkit-fill-available`:`-moz-fit-content${o};${p(e)}:${r}fit-content`)+o)):String(t),S={blockSize:1,height:1,inlineSize:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,width:1},y=e=>e?e+"-":"",k=(e,t,r)=>e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g,((e,n,o,i,s)=>"$"==i==!!o?e:(n||"--"==i?"calc(":"")+"var(--"+("$"===i?y(t)+(s.includes("$")?"":y(r))+s.replace(/\$/g,"-"):s)+")"+(n||"--"==i?"*"+(n||"")+(o||"1")+")":""))),$=/\s*,\s*(?![^()]*\))/,x=Object.prototype.toString,w=(e,t,r,n,o)=>{let i,s,l;const a=(e,t,r)=>{let c,d;const u=e=>{for(c in e){const w=64===c.charCodeAt(0),R=w&&Array.isArray(e[c])?e[c]:[e[c]];for(d of R){const e=/[A-Z]/.test(S=c)?S:S.replace(/-[^]/g,(e=>e[1].toUpperCase())),R="object"==typeof d&&d&&d.toString===x&&(!n.utils[e]||!t.length);if(e in n.utils&&!R){const t=n.utils[e];if(t!==s){s=t,u(t(d)),s=null;continue}}else if(e in f){const t=f[e];if(t!==l){l=t,u(t(d)),l=null;continue}}if(w&&(g=c.slice(1)in n.media?"@media "+n.media[c.slice(1)]:c,c=g.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g,((e,t,r,n,o,i)=>{const s=h.test(t),l=.0625*(s?-1:1),[a,c]=s?[n,t]:[t,n];return"("+("="===r[0]?"":">"===r[0]===s?"max-":"min-")+a+":"+("="!==r[0]&&1===r.length?c.replace(h,((e,t,n)=>Number(t)+l*(">"===r?1:-1)+n)):c)+(o?") and ("+(">"===o[0]?"min-":"max-")+a+":"+(1===o.length?i.replace(h,((e,t,r)=>Number(t)+l*(">"===o?-1:1)+r)):i):"")+")"}))),R){const e=w?r.concat(c):[...r],n=w?[...t]:m(t,c.split($));void 0!==i&&o(B(...i)),i=void 0,a(d,n,e)}else void 0===i&&(i=[[],t,r]),c=w||36!==c.charCodeAt(0)?c:`--${y(n.prefix)}${c.slice(1).replace(/\$/g,"-")}`,d=R?d:"number"==typeof d?d&&!(e in j)&&45!==c.charCodeAt(0)?String(d)+"px":String(d):k(b(e,null==d?"":d),n.prefix,n.themeMap[e]),i[0].push(`${w?`${c} `:`${p(c)}:`}${d}`)}}var g,S};u(e),void 0!==i&&o(B(...i)),i=void 0};a(e,t,r)},B=(e,t,r)=>`${r.map((e=>`${e}{`)).join("")}${t.length?`${t.join(",")}{`:""}${e.join(";")}${t.length?"}":""}${Array(r.length?r.length+1:0).join("}")}`,j={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},R=e=>String.fromCharCode(e+(e>25?39:97)),I=e=>(e=>{let t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=R(t%52)+r;return R(t%52)+r})(((e,t)=>{let r=t.length;for(;r;)e=33*e^t.charCodeAt(--r);return e})(5381,JSON.stringify(e))>>>0),C=["themed","global","styled","onevar","resonevar","allvar","inline"],z=e=>{if(e.href&&!e.href.startsWith(location.origin))return!1;try{return!!e.cssRules}catch(e){return!1}},v=e=>{let t;const r=()=>{const{cssRules:e}=t.sheet;return[].map.call(e,((r,n)=>{const{cssText:o}=r;let i="";if(o.startsWith("--sxs"))return"";if(e[n-1]&&(i=e[n-1].cssText).startsWith("--sxs")){if(!r.cssRules.length)return"";for(const e in t.rules)if(t.rules[e].group===r)return`--sxs{--sxs:${[...t.rules[e].cache].join(" ")}}${o}`;return r.cssRules.length?`${i}${o}`:""}return o})).join("")},n=()=>{if(t){const{rules:e,sheet:r}=t;if(!r.deleteRule){for(;3===Object(Object(r.cssRules)[0]).type;)r.cssRules.splice(0,1);r.cssRules=[]}for(const t in e)delete e[t]}const o=Object(e).styleSheets||[];for(const e of o)if(z(e)){for(let o=0,i=e.cssRules;i[o];++o){const s=Object(i[o]);if(1!==s.type)continue;const l=Object(i[o+1]);if(4!==l.type)continue;++o;const{cssText:a}=s;if(!a.startsWith("--sxs"))continue;const c=a.slice(14,-3).trim().split(/\s+/),d=C[c[0]];d&&(t||(t={sheet:e,reset:n,rules:{},toString:r}),t.rules[d]={group:l,index:o,cache:new Set(c)})}if(t)break}if(!t){const o=(e,t)=>({type:t,cssRules:[],insertRule(e,t){this.cssRules.splice(t,0,o(e,{import:3,undefined:1}[(e.toLowerCase().match(/^@([a-z]+)/)||[])[1]]||4))},get cssText(){return"@media{}"===e?`@media{${[].map.call(this.cssRules,(e=>e.cssText)).join("")}}`:e}});t={sheet:(()=>{if(!e)return o("","text/css");const t=document.createElement("style"),r=void 0!==window.__webpack_nonce__?window.__webpack_nonce__:void 0!==window.nonce?window.nonce:null;return r&&t.setAttribute("nonce",r),(e.head||e).appendChild(t).sheet})(),rules:{},reset:n,toString:r}}const{sheet:i,rules:s}=t;for(let e=C.length-1;e>=0;--e){const t=C[e];if(!s[t]){const r=C[e+1],n=s[r]?s[r].index:i.cssRules.length;i.insertRule("@media{}",n),i.insertRule(`--sxs{--sxs:${e}}`,n),s[t]={group:i.cssRules[n+1],index:n,cache:new Set([e])}}W(s[t])}};return n(),t},W=e=>{const t=e.group;let r=t.cssRules.length;e.apply=e=>{try{t.insertRule(e,r),++r}catch(e){}}},E=Symbol(),O=s(),T=(e,t)=>O(e,(()=>{const r=(r,n={})=>{let o={type:null,composers:new Set};for(const t of r)if(null!=t)if(t[l]){null==o.type&&(o.type=t[l].type);for(const e of t[l].composers)o.composers.add(e)}else t.constructor!==Object||t.$$typeof?null==o.type&&(o.type=t):o.composers.add(P(t,e,n));return null==o.type&&(o.type="span"),o.composers.size||o.composers.add(["PJLV",{},[],[],{},[]]),M(e,o,t,n)},n=(...e)=>r(e);return n.withConfig=e=>(...t)=>r(t,e),n})),P=(e,t,r)=>{let{componentId:n,displayName:o}=r,{variants:i,compoundVariants:s,defaultVariants:l,...a}=e;const p=n||I(a),u=o?"c-"+o:"c",g=`${y(t.prefix)}${u}-${p}`,f=[],h=[],m=Object.create(null),b=[];for(const e in l)m[e]=String(l[e]);if("object"==typeof i&&i)for(const e in i){S=m,k=e,d.call(S,k)||(m[e]="undefined");const t=i[e];for(const r in t){const n={[e]:String(r)};"undefined"===String(r)&&b.push(e);const o=t[r],i=[n,o,!c(o)];f.push(i)}}var S,k;if("object"==typeof s&&s)for(const e of s){let{css:t,...r}=e;t="object"==typeof t&&t||{};for(const e in r)r[e]=String(r[e]);const n=[r,t,!c(t)];h.push(n)}return[g,a,f,h,m,b]},M=(e,t,r,n)=>{let{shouldForwardStitchesProp:o}=n;const[i,s,c,d]=N(t.composers),p="function"==typeof t.type||t.type.$$typeof?(e=>{function t(){for(let r=0;r<t[E].length;r++){const[n,o]=t[E][r];e.rules[n].apply(o)}return t[E]=[],null}return t[E]=[],t.rules={},C.forEach((e=>t.rules[e]={apply:r=>t[E].push([e,r])})),t})(r):null,u=(p||r).rules,g=`.${i}${s.length>1?`:where(.${s.slice(1).join(".")})`:""}`,f=n=>{n="object"==typeof n&&n||L;const{...l}=n,a={};for(const e in c)if(e in n){o?.(e)||delete l[e];let t=n[e];"object"==typeof t&&t?a[e]={"@initial":c[e],...t}:(t=String(t),a[e]="undefined"!==t||d.has(e)?t:c[e])}else a[e]=c[e];const f=new Set([...s]);for(const[n,o,i,s]of t.composers){r.rules.styled.cache.has(n)||(r.rules.styled.cache.add(n),w(o,[`.${n}`],[],e,(e=>{u.styled.apply(e)}))),i.forEach((t=>{const o=t[2],i=Object.keys(t[0])[0],s=t[0][i],l=t[1],a=`${i}-${s}`,c=`${n}-${I(l)}-${a}`,d=(o?r.rules.resonevar:r.rules.onevar).cache;if(!d.has(c)){d.add(c);const t=o?u.resonevar:u.onevar;r.rules.allvar.cache.has(c)||w(l,[`.${c}`],[],e,(e=>{t.apply(e)}))}}));const t=A(i,a,e.media),l=A(s,a,e.media,!0);for(const e of t)if(void 0!==e)for(const[t,r]of e){const e=`${n}-${I(r)}-${t}`;f.add(e)}for(const t of l)if(void 0!==t)for(const[o,i]of t){const t=`${n}-${I(i)}-${o}`;f.add(t),r.rules.allvar.cache.has(t)||(r.rules.allvar.cache.add(t),w(i,[`.${t}`],[],e,(e=>{u.allvar.apply(e)})))}}const h=l.css;if("object"==typeof h&&h){o?.("css")||delete l.css;const t=`${i}-i${I(h)}-css`;f.add(t),r.rules.inline.cache.has(t)||(r.rules.inline.cache.add(t),w(h,[`.${t}`],[],e,(e=>{u.inline.apply(e)})))}for(const e of String(n.className||"").trim().split(/\s+/))e&&f.add(e);const m=l.className=[...f].join(" ");return{type:t.type,className:m,selector:g,props:l,toString:()=>m,deferredInjector:p}};return a(f,{className:i,selector:g,[l]:t,toString:()=>(r.rules.styled.cache.has(i)||f(),i)})},N=e=>{let t="";const r=[],n={},o=[];for(const[i,,,,s,l]of e){""===t&&(t=i),r.push(i),o.push(...l);for(const e in s){const t=s[e];(void 0===n[e]||"undefined"!==t||l.includes(t))&&(n[e]=t)}}return[t,r,n,new Set(o)]},A=(e,t,r,n)=>{const o=[];e:for(let[i,s,l]of e){if(l)continue;let e,a=0,c=!1;for(e in i){const n=i[e];let o=t[e];if(o!==n){if("object"!=typeof o||!o)continue e;{let e,t,i=0;for(const s in o){if(n===String(o[s])){if("@initial"!==s){const e=s.slice(1);(t=t||[]).push(e in r?r[e]:s.replace(/^@media ?/,"")),c=!0}a+=i,e=!0}++i}if(t&&t.length&&(s={["@media "+t.join(", ")]:s}),!e)continue e}}}(o[a]=o[a]||[]).push([n?"cv":`${e}-${i[e]}`,s,c])}return o},L={},G=s(),F=(e,t)=>G(e,(()=>(...r)=>{const n=()=>{for(let n of r){n="object"==typeof n&&n||{};let r=I(n);if(!t.rules.global.cache.has(r)){if(t.rules.global.cache.add(r),"@import"in n){let e=[].indexOf.call(t.sheet.cssRules,t.rules.themed.group)-1;for(let r of[].concat(n["@import"]))r=r.includes('"')||r.includes("'")?r:`"${r}"`,t.sheet.insertRule(`@import ${r};`,e++);delete n["@import"]}w(n,[],[],e,(e=>{t.rules.global.apply(e)}))}}return""};return a(n,{toString:n})})),_=s(),H=(e,t)=>_(e,(()=>r=>{const n=`${y(e.prefix)}k-${I(r)}`,o=()=>{if(!t.rules.global.cache.has(n)){t.rules.global.cache.add(n);const o=[];w(r,[],[],e,(e=>o.push(e)));const i=`@keyframes ${n}{${o.join("")}}`;t.rules.global.apply(i)}return n};return a(o,{get name(){return o()},toString:o})})),V=class{constructor(e,t,r,n){this.token=null==e?"":String(e),this.value=null==t?"":String(t),this.scale=null==r?"":String(r),this.prefix=null==n?"":String(n)}get computedValue(){return"var("+this.variable+")"}get variable(){return"--"+y(this.prefix)+y(this.scale)+this.token}toString(){return this.computedValue}},D=s(),J=(e,t)=>D(e,(()=>(r,n)=>{n="object"==typeof r&&r||Object(n);const o=`.${r=(r="string"==typeof r?r:"")||`${y(e.prefix)}t-${I(n)}`}`,i={},s=[];for(const t in n){i[t]={};for(const r in n[t]){const o=`--${y(e.prefix)}${t}-${r}`,l=k(String(n[t][r]),e.prefix,t);i[t][r]=new V(r,l,t,e.prefix),s.push(`${o}:${l}`)}}const l=()=>{if(s.length&&!t.rules.themed.cache.has(r)){t.rules.themed.cache.add(r);const o=`${n===e.theme?":root,":""}.${r}{${s.join(";")}}`;t.rules.themed.apply(o)}return r};return{...i,get className(){return l()},selector:o,toString:l}})),Z=s(),q=require("react"),U=s(),X=e=>{const t=(e=>{let t=!1;const r=Z(e,(e=>{t=!0;const r="prefix"in(e="object"==typeof e&&e||{})?String(e.prefix):"",n="object"==typeof e.media&&e.media||{},i="object"==typeof e.root?e.root||null:globalThis.document||null,s="object"==typeof e.theme&&e.theme||{},l={prefix:r,media:n,theme:s,themeMap:"object"==typeof e.themeMap&&e.themeMap||{...o},utils:"object"==typeof e.utils&&e.utils||{}},a=v(i),c={css:T(l,a),globalCss:F(l,a),keyframes:H(l,a),createTheme:J(l,a),reset(){a.reset(),c.theme.toString()},theme:{},sheet:a,config:l,prefix:r,getCssText:a.toString,toString:a.toString};return String(c.theme=c.createTheme(s)),c}));return t||r.reset(),r})(e);return t.styled=(e=>{let{config:t,sheet:r}=e;return U(t,(()=>{const e=T(t,r),n=(t,r=e,{displayName:n,shouldForwardStitchesProp:o}={})=>{const i=r(...t),s=i[l].type,a=o?.("as"),c=q.forwardRef(((e,t)=>{const r=e?.as&&!a?e?.as:s,{props:n,deferredInjector:o}=i(e);return a||delete n.as,n.ref=t,o?q.createElement(q.Fragment,null,q.createElement(r,n),q.createElement(o,null)):q.createElement(r,n)}));return c.className=i.className,c.displayName=n||`Styled.${s.displayName||s.name||s}`,c.selector=i.selector,c.toString=()=>i.selector,c[l]=i[l],c},o=(...e)=>n(e);return o.withConfig=t=>(...r)=>{const o=e.withConfig(t);return n(r,o,t)},o}))})(t),t},Y=()=>e||(e=X());module.exports={createStitches:X,createTheme:(...e)=>Y().createTheme(...e),css:(...e)=>Y().css(...e),defaultThemeMap:o,globalCss:(...e)=>Y().globalCss(...e),keyframes:(...e)=>Y().keyframes(...e),styled:(...e)=>Y().styled(...e)};
//# sourceMappingUrl=index.map