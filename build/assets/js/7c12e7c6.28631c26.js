"use strict";(self.webpackChunkpage=self.webpackChunkpage||[]).push([[559],{1013:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var i=n(4848),o=n(8453);const s={sidebar_position:2},r="JSX",a={id:"building-towards-react/Jsx",title:"JSX",description:"What is JSX?",source:"@site/docs/building-towards-react/Jsx.mdx",sourceDirName:"building-towards-react",slug:"/building-towards-react/Jsx",permalink:"/react-basics/building-towards-react/Jsx",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/react-basics/building-towards-react/Outline"},next:{title:"Composition, Data management and Event lifecycle",permalink:"/react-basics/building-towards-react/composition-data-event-lifecycle"}},l={},c=[{value:"What is JSX?",id:"what-is-jsx",level:4},{value:"How do we transpile JSX to Javascript code and HTML?",id:"how-do-we-transpile-jsx-to-javascript-code-and-html",level:4},{value:"How is transpilation different from compilation?",id:"how-is-transpilation-different-from-compilation",level:4},{value:"Time example",id:"time-example",level:4},{value:"How is this approach better?",id:"how-is-this-approach-better",level:4}];function d(e){const t={code:"code",em:"em",h1:"h1",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"jsx",children:"JSX"})}),"\n",(0,i.jsx)(t.h4,{id:"what-is-jsx",children:"What is JSX?"}),"\n",(0,i.jsx)(t.p,{children:"JSX is a syntax extension to JavaScript. It allows us to write HTML-like syntax that transpiles to Javascript objects."}),"\n",(0,i.jsx)(t.h4,{id:"how-do-we-transpile-jsx-to-javascript-code-and-html",children:"How do we transpile JSX to Javascript code and HTML?"}),"\n",(0,i.jsxs)(t.p,{children:["\u2728Babel - ",(0,i.jsx)(t.code,{children:"https://babeljs.io/docs/"})," \u2728"]}),"\n",(0,i.jsx)(t.h4,{id:"how-is-transpilation-different-from-compilation",children:"How is transpilation different from compilation?"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Compilation: Source code converted to another language that has a marked ",(0,i.jsx)(t.em,{children:"lower"})," level of abstraction."]}),"\n",(0,i.jsxs)(t.li,{children:["Transpilation: Source code converted to source code again, with a ",(0,i.jsx)(t.em,{children:"similar"})," level of abstraction."]}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"time-example",children:"Time example"}),"\n",(0,i.jsx)(t.p,{children:"We can re-write our application using CSS and JSX:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"https://codepen.io/grvshrm/pen/KKGYGqE\n"})}),"\n",(0,i.jsx)("iframe",{src:"https://codepen.io/grvshrm/embed/KKGYGqE",style:{width:"100%",height:"400px"}}),"\n",(0,i.jsx)(t.p,{children:"From our example, the following is JSX:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'const Component = () => {\n  const currentTime = new Date();\n\n  return (\n    <div id="container">\n      <h1>Hello world!</h1>\n\n      <p className="text">You opened this page on {currentTime.toLocaleString()}</p>\n      <p className="shaded">What are the odds of it being exactly {currentTime.toLocaleTimeString()}</p>\n    </div>\n  )\n}\n\nReactDOM.render(\n  <Component />,  document.getElementById(\'root\')\n);\n'})}),"\n",(0,i.jsx)(t.h4,{id:"how-is-this-approach-better",children:"How is this approach better?"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["This approach is not ",(0,i.jsx)(t.em,{children:"imperative"}),", but ",(0,i.jsx)(t.strong,{children:"declarative"}),". We're no longer looking for HTML nodes to manipulate. Through JSX, we ",(0,i.jsx)(t.em,{children:"declare"})," what the structure of the HTML should be, and React does the rest."]}),"\n",(0,i.jsx)(t.li,{children:"Writing Javascript together with HTML makes our code concise."}),"\n",(0,i.jsxs)(t.li,{children:['We only need 1 line of HTML - the "root" ',(0,i.jsx)(t.code,{children:"div"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["Unit testing is possible now, I just need to consider the JSX element ",(0,i.jsx)(t.code,{children:"Component"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["Creating ",(0,i.jsx)(t.code,{children:"Component"})," also means that we can modularise our code."]}),"\n",(0,i.jsx)(t.li,{children:"All this means that it is easier to read and extend our code, which means its easier to scale our application."}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var i=n(6540);const o={},s=i.createContext(o);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);