"use strict";(self.webpackChunkpage=self.webpackChunkpage||[]).push([[557],{4899:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var o=t(4848),i=t(8453);const a={sidebar_position:3,slug:"composition-data-event-lifecycle"},s="Composition, Data management and Event lifecycle",r={id:"react-js/building-towards-react/ReactBuildingBlocks",title:"Composition, Data management and Event lifecycle",description:"2. React Components",source:"@site/docs/react-js/building-towards-react/ReactBuildingBlocks.md",sourceDirName:"react-js/building-towards-react",slug:"/react-js/building-towards-react/composition-data-event-lifecycle",permalink:"/software-basics/react-js/building-towards-react/composition-data-event-lifecycle",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,slug:"composition-data-event-lifecycle"},sidebar:"tutorialSidebar",previous:{title:"JSX",permalink:"/software-basics/react-js/building-towards-react/Jsx"},next:{title:"Examples",permalink:"/software-basics/examples"}},c={},l=[{value:"2. React Components",id:"2-react-components",level:3},{value:"3. React Element",id:"3-react-element",level:3},{value:"4. Props",id:"4-props",level:3},{value:"5. State",id:"5-state",level:3},{value:"6. Rendering a virtual DOM",id:"6-rendering-a-virtual-dom",level:3},{value:"React is a Single Page Application",id:"react-is-a-single-page-application",level:4},{value:"7. Event Lifecycle",id:"7-event-lifecycle",level:3},{value:"Mounting",id:"mounting",level:4},{value:"Updating (or re-rendering)",id:"updating-or-re-rendering",level:4},{value:"Unmounting",id:"unmounting",level:4},{value:"Error",id:"error",level:4},{value:"8. React Hooks",id:"8-react-hooks",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"composition-data-management-and-event-lifecycle",children:"Composition, Data management and Event lifecycle"})}),"\n",(0,o.jsx)(n.h3,{id:"2-react-components",children:"2. React Components"}),"\n",(0,o.jsx)(n.p,{children:"React lets us split UI into independent, reusable pieces called 'Components`, so that we can think about each piece in isolation and test each component in isolation."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"const App = () => {\n  return <p>Hello React</p>;\n};\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://codepen.io/grvshrm/pen/ZEmBYLp",children:"(See on Codepen)"})}),"\n",(0,o.jsxs)(n.p,{children:["A react component is simply the declaration of a component as above. In this case, it's a ",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.em,{children:"Functional component"})}),", but can be a ",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.em,{children:"Class component"})})," too. ",(0,o.jsx)(n.strong,{children:"A functional component is declared as a JavaScript function which returns JSX"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"3-react-element",children:"3. React Element"}),"\n",(0,o.jsxs)(n.p,{children:["Components can be composed of other components. This is what makes React modular. In order to render a component inside another component, we place the child component name inside ",(0,o.jsx)(n.em,{children:"angular brackets"})," this way:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"const Greeting = () => {\n  return <p>Hello React</p>;\n};\n\nconst App = () => {\n  return <Greeting />;\n};\n"})}),"\n",(0,o.jsxs)(n.p,{children:["React elements are real Javascript objects, and beneath the syntactic sugar, React is just calling",(0,o.jsx)(n.code,{children:"React.createElement()"})," to create a new React element."]}),"\n",(0,o.jsx)(n.h3,{id:"4-props",children:"4. Props"}),"\n",(0,o.jsx)(n.p,{children:"Props enables components to exchange information between each other. 'Props' is the name give by react to an object that a parent component will always pass its child component. We can pass individual pieces of data to a child component as keys of the Prop object."}),"\n",(0,o.jsxs)(n.p,{children:["In the example above, ",(0,o.jsx)(n.code,{children:"text"})," is one such defined prop, who's value is set to 'Hello React' and is passed down from the ",(0,o.jsx)(n.code,{children:"App"})," component to the ",(0,o.jsx)(n.code,{children:"Greeting"})," component. ",(0,o.jsx)(n.code,{children:"Greeting"})," could be re-written as:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'const Greeting = ({ text }) => {\n  return <p>{text}</p>;\n};\n\nconst App = () => {\n  return <Greeting text={"Hello React"} />;\n};\n'})}),"\n",(0,o.jsxs)(n.admonition,{type:"info",children:[(0,o.jsxs)(n.p,{children:["When writing the ",(0,o.jsx)(n.code,{children:"Greeting"})," component above, we are destructuring the props object. Destructuring is a Javascript syntactic sugar. The component can we re-written as:"]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"    const Greeting = (props) => {\n        const text = props.text;\n        return <p>{text}</p>;\n    }\n"})})]}),"\n",(0,o.jsx)(n.h3,{id:"5-state",children:"5. State"}),"\n",(0,o.jsx)(n.p,{children:"A React application would typically need to maintain some state information. For example, if you are booking a transport on a ride-hailing service, the application would need to store the following information in state before it calls an API to make a booking:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Customer's name and id"}),"\n",(0,o.jsx)(n.li,{children:"Current location"}),"\n",(0,o.jsx)(n.li,{children:"Destination"}),"\n",(0,o.jsx)(n.li,{children:"Type of transport request (4-seater, premium, van etc)"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"In React, a state is a simple JS object, that can be stored internally in a component, whose value is persisted across re-renders."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"A state should be private to the component it is created in."}),"\n",(0,o.jsxs)(n.li,{children:["If we violate this principle of encapsulation, we end up with tighly coupled code that is hard to interpret, change and extend. ",(0,o.jsx)(n.strong,{children:"We don't want to do this"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Using React hooks, we can create a state in a component as follows:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'import { useState } from \'react\'\n\nconst App = () => {\n    const [state, setState] = useState("");\n\n    return (\n        <div>\n            <button onClick={() => setState("Hello React")}>Click me to set state!</button>\n            <p>{state}</p>\n        </div>\n    );\n};\n'})}),"\n",(0,o.jsx)(n.p,{children:"We'll see it in action in the demo later."}),"\n",(0,o.jsx)(n.h3,{id:"6-rendering-a-virtual-dom",children:"6. Rendering a virtual DOM"}),"\n",(0,o.jsx)(n.p,{children:"A React application is composed of such components and elements. React reads these components and formulates a 'virtual DOM', that it then attaches to one DOM node specified by our single line of HTML. This attachment is done as follows:"}),"\n",(0,o.jsx)(n.p,{children:"HTML"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'    <div id="root"></div>\n'})}),"\n",(0,o.jsx)(n.p,{children:"JSX"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"    ReactDOM.render(\n        <App />,\n        document.getElementById('root')\n    );\n"})}),"\n",(0,o.jsxs)(n.admonition,{type:"info",children:[(0,o.jsx)(n.h4,{id:"react-is-a-single-page-application",children:"React is a Single Page Application"}),(0,o.jsxs)(n.p,{children:["The virtual DOM that we construct using JSX written in React components attaches to a single HTML element (",(0,o.jsx)(n.code,{children:"div"})," with ",(0,o.jsx)(n.code,{children:"id=root"}),"). This happens whenever we load a new component to the page. This means that whenever we change a route on a React application, say from ",(0,o.jsx)(n.code,{children:"hello.com"})," to ",(0,o.jsx)(n.code,{children:"hello.com/learn/react"}),", the browser only makes it ",(0,o.jsx)(n.em,{children:"look like"})," the page has been changed. In reality, we're on the same HTML ",(0,o.jsx)(n.code,{children:"div"})," element, just that a new virtual DOM has been attached to it."]})]}),"\n",(0,o.jsx)(n.h3,{id:"7-event-lifecycle",children:"7. Event Lifecycle"}),"\n",(0,o.jsx)(n.p,{children:"There are 4 main stages in the life of a page."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Event Lifecycle",src:t(8331).A+"",width:"3153",height:"1723"})}),"\n",(0,o.jsxs)(n.p,{children:["React provides us with a function (actually a ",(0,o.jsx)(n.code,{children:"hook"}),") to carry out actions for each of these events."]}),"\n",(0,o.jsx)(n.h4,{id:"mounting",children:"Mounting"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'  import { useEffect, useState } from \'react\';\n\n  const App = () => {\n    const [state, setState] = useState("");\n\n    useEffect(() => {\n      setState("Hello React")\n    }, [])\n\n    return (\n        <div>\n            <p>{state}</p>\n        </div>\n    );\n};\n'})}),"\n",(0,o.jsx)(n.h4,{id:"updating-or-re-rendering",children:"Updating (or re-rendering)"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'  import { useEffect, useState } from \'react\';\n\n  const App = ({ sayHello }) => {\n    const [state, setState] = useState("");\n\n    useEffect(() => {\n      if(sayHello) {\n        setState("Hello React");\n      } else {\n        setState("")\n      }\n    }, [sayHello])\n\n    return (\n        <div>\n            <p>{state}</p>\n        </div>\n    );\n};\n'})}),"\n",(0,o.jsx)(n.h4,{id:"unmounting",children:"Unmounting"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:' import { useEffect, useState } from \'react\';\n\n  const App = () => {\n    const [state, setState] = useState("Hello React");\n\n    useEffect(() => {\n      return () => {\n        setState("")\n      }\n    }, [])\n\n    return (\n        <div>\n            <p>{state}</p>\n        </div>\n    );\n  };\n'})}),"\n",(0,o.jsx)(n.h4,{id:"error",children:"Error"}),"\n",(0,o.jsxs)(n.p,{children:["Currently, if we want to catch an error inside a React component, instead of using a functional component, need to write a stateful component and use the ",(0,o.jsx)(n.code,{children:"getDerivedStateFromError"})," method. This is not a common occurence, as most errors arise in Javascript functions and are handling using ",(0,o.jsx)(n.code,{children:"try-catch"})," blocks, or their equivalent. Therefore it is not very important right now, and we will look at ",(0,o.jsx)(n.code,{children:"getDerivedStateFromError"})," in stateful components later if we are able to finish the the exercises in time."]}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["Generally, the entire nest of React components is wrapped in one stateful component with ",(0,o.jsx)(n.code,{children:"getDerivedStateFromError"})," to catch any JSX-based errors."]})}),"\n",(0,o.jsx)(n.h3,{id:"8-react-hooks",children:"8. React Hooks"}),"\n",(0,o.jsxs)(n.p,{children:["Hooks let us access state, add actions to lifecycle events, memoise expensive computations in components among a wide variety of other features. ",(0,o.jsx)(n.code,{children:"useState"}),", ",(0,o.jsx)(n.code,{children:"useEffect"}),", ",(0,o.jsx)(n.code,{children:"useMemo"}),", ",(0,o.jsx)(n.code,{children:"useCallback"})," are all hooks provided out-of-the-box with react. We will see these hooks in action in the exercises next. You can read more about available hooks ",(0,o.jsx)(n.a,{href:"https://legacy.reactjs.org/docs/hooks-intro.html",children:"here"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["We can define our own custom hooks to. Hooks are a great way to modularise ",(0,o.jsx)(n.em,{children:"logic"})," (as opposed to UI, which is modularised with the help of react components) between componenets. For example, I can write a custom hook to fetch weather data, and then re-use the hook by calling it in every React component on every page where the weather data is required. See ",(0,o.jsx)(n.a,{href:"https://react.dev/learn/reusing-logic-with-custom-hooks",children:"Reusing Logic with Custom Hooks"})," for more details."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8331:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/event-lifecycle-6bb3a686dc195bd8084a663c357712f9.png"},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var o=t(6540);const i={},a=o.createContext(i);function s(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);