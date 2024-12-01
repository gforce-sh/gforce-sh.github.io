"use strict";(self.webpackChunkpage=self.webpackChunkpage||[]).push([[488],{289:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var t=o(4848),i=o(8453);const a={sidebar_position:6,slug:"/conceptual-review"},r="The big picture",s={id:"react-js/Review",title:"The big picture",description:'"What makes a good programmer is how they think about the bigger picture and pay',source:"@site/docs/react-js/Review.md",sourceDirName:"react-js",slug:"/conceptual-review",permalink:"/react-basics/conceptual-review",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,slug:"/conceptual-review"},sidebar:"tutorialSidebar",previous:{title:"#4: Route my emoji",permalink:"/react-basics/react-js/lab/route-my-emoji"},next:{title:"Component-driven development",permalink:"/react-basics/category/component-driven-development"}},c={},d=[{value:"What does the big picture of our emoji app look like?",id:"what-does-the-big-picture-of-our-emoji-app-look-like",level:3},{value:"How did we refactor our demo app?",id:"how-did-we-refactor-our-demo-app",level:4},{value:"Examples of how we used key development concepts of React in our demo?",id:"examples-of-how-we-used-key-development-concepts-of-react-in-our-demo",level:3},{value:"1. Modularisation",id:"1-modularisation",level:4},{value:"2. Declarative vs Imperative",id:"2-declarative-vs-imperative",level:4},{value:"3. Component re-usability",id:"3-component-re-usability",level:4},{value:"4. Component hierarchy",id:"4-component-hierarchy",level:4},{value:"5. Flow of information",id:"5-flow-of-information",level:4}];function l(e){const n={admonition:"admonition",code:"code",em:"em",h1:"h1",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"the-big-picture",children:"The big picture"})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:'"What makes a good programmer is how they think about the bigger picture and pay\nattention to breaking changes, and how\nto rollback in case of a problem."'})}),"\n",(0,t.jsx)(n.h3,{id:"what-does-the-big-picture-of-our-emoji-app-look-like",children:"What does the big picture of our emoji app look like?"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"flow",src:o(4233).A+"",width:"4152",height:"1966"})}),"\n",(0,t.jsxs)(n.p,{children:["The architecture of components, how they are composed and how they communicate\nwith each other is critical in building a\nscalable application. Realising this architecture is generally not step one. We\nshould have an idea of what the\ndesign of our application will look like just as we're starting to implement the\napp, but this will likely evolve and\nimprove as the granular details of our implementation become clearer, as we\nbegin to identify code that overlaps in our\nimplementation, or as the business requirements evolve over time. We need to\nconstantly ",(0,t.jsx)(n.strong,{children:"refactor"})," our implementation\nto reflect a cleaner and more understandable design, ",(0,t.jsx)(n.em,{children:"and we\ngenerally only have clarity of this final architecture just prior to the final\nrefactor"}),". It is therefore imperative\nthat we write code in an agile manner, following OOP and SOLID principles. This\nensures we can make changes sustainably\nand with the least effort."]}),"\n",(0,t.jsx)(n.p,{children:'Ultimately, as you spend more time working on React applications, how you reach\nthe "big picture" will become clearer\nto you.'}),"\n",(0,t.jsx)(n.h4,{id:"how-did-we-refactor-our-demo-app",children:"How did we refactor our demo app?"}),"\n",(0,t.jsxs)(n.p,{children:["We initially placed all our UI JSX to show 1 emoji row directly inside ",(0,t.jsx)(n.code,{children:"App"}),",\nwhen we wanted to just get the application up and running. First, we refactored\nthis UI into the ",(0,t.jsx)(n.code,{children:"EmojiRow"})," component. Subsequently, our ",(0,t.jsx)(n.code,{children:"App"})," component\nconsisted of several ",(0,t.jsx)(n.code,{children:"EmojiRow"}),"s and the Input components. Our second refactor\nwas to group ",(0,t.jsx)(n.code,{children:"Input"})," and ",(0,t.jsx)(n.code,{children:"EmojiRow"}),"s inside a new ",(0,t.jsx)(n.code,{children:"EmojiSearch"})," component. This\nadded semantic meaning by separating the responsibility of ",(0,t.jsx)(n.code,{children:"App"}),"\nand ",(0,t.jsx)(n.code,{children:"EmojiSearch"}),". This also gave us a clean enough architecture to\nintegrate ",(0,t.jsx)(n.code,{children:"Routes"})," into ",(0,t.jsx)(n.code,{children:"App"})," in exercise 3."]}),"\n",(0,t.jsx)(n.h3,{id:"examples-of-how-we-used-key-development-concepts-of-react-in-our-demo",children:"Examples of how we used key development concepts of React in our demo?"}),"\n",(0,t.jsx)(n.h4,{id:"1-modularisation",children:"1. Modularisation"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"EmojiRow"})," formed into a modular component, that we then used with the\nJavascript ",(0,t.jsx)(n.code,{children:".map()"})," method to re-instantiate\nmultiple times for all emojis"]}),"\n",(0,t.jsx)(n.h4,{id:"2-declarative-vs-imperative",children:"2. Declarative vs Imperative"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"EmojiRow"})," was re-instantiated for each emoji that the endpoint returned. We\ndidn't have to keep track of how many rows\nwe needed to create in HTML every time we changed the input. We just ",(0,t.jsx)(n.em,{children:"declared"}),"\nwhat the row should look like, and React\nhandled the rest for every emoji the server returned."]}),"\n",(0,t.jsx)(n.h4,{id:"3-component-re-usability",children:"3. Component re-usability"}),"\n",(0,t.jsxs)(n.p,{children:["We were able to reuse ",(0,t.jsx)(n.code,{children:"EmojiRow"})," and ",(0,t.jsx)(n.code,{children:"List"})," multiple times. Even ",(0,t.jsx)(n.code,{children:"Loader"}),"\nand ",(0,t.jsx)(n.code,{children:"Placeholder"})," that we imported\nfrom ",(0,t.jsx)(n.code,{children:"semantic-ui"}),' are modular re-usable components that we can "plug-and-play"\nanywhere in our app.']}),"\n",(0,t.jsx)(n.h4,{id:"4-component-hierarchy",children:"4. Component hierarchy"}),"\n",(0,t.jsx)(n.p,{children:"This allows us to separate concerns of functionality."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["We were able to abstract away logic to route to different components by\nwrapping our search and details pages\ninside ",(0,t.jsx)(n.code,{children:"<Routes/>"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["We carried out all the external data fetching in parent\ncomponent ",(0,t.jsx)(n.code,{children:"EmojiSearch"}),", and passed the data to\nchild ",(0,t.jsx)(n.code,{children:"EmojiRow"}),"s."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"5-flow-of-information",children:"5. Flow of information"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"data",src:o(5147).A+"",width:"2480",height:"1964"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},4233:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/emoji-demo-flow-diagram-703685aef5653baa154be8642df56f6d.png"},5147:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/flow-of-data-demo-a202efd2fcd0e64a58ac00267d768743.png"},8453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>s});var t=o(6540);const i={},a=t.createContext(i);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);