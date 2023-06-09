"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[195],{470:(e,t,r)=>{r.r(t),r.d(t,{default:()=>h});var n=r(7294),a=r(94),i=r(3699);const l=a.Z.div`
font-size: ${e=>{let{size:t}=e;return t?`${t}px`:"11px"}};
${e=>{let{color:t}=e;return t?`color: ${t};`:null}}
${e=>{let{weight:t}=e;return t?`font-weight: ${t};`:null}};
${e=>{let{padding:t}=e;return t?`padding: ${t};`:null}};
${e=>{let{margin:t}=e;return t?`padding: ${t};`:null}};
${e=>{let{lineHeight:t}=e;return t?`line-height: ${t};`:null}};
`,o=()=>n.createElement(c,null,n.createElement(s,null,n.createElement(i.Z,{to:"/basics-react"},n.createElement(d,null,n.createElement(l,{weight:700,size:28,lineHeight:1.2},"React basics"),n.createElement(l,{size:12,color:"#C9CCCC"},"Gitbook course"),n.createElement(l,{size:14,margin:"10px 0 0"},"Learn the basics of ReactJS and front-end development"))),n.createElement(d,null,n.createElement(l,{weight:700,size:28,lineHeight:1.2},"Computation engine"),n.createElement(l,{size:12,color:"#C9CCCC"},"Productivity"),n.createElement(l,{size:14,margin:"10px 0 0"},"MacOS menubar calculator app"))),n.createElement(u,null,n.createElement(p,{size:84},"Hello there,"),n.createElement(p,{size:42,delayed:!0},"welcome to my page."))),c=a.Z.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 50px 20px;

  color: white;

  @keyframes drop-in {
    from {
      opacity: 0;
      transform: translateY(-100px);
    }
    to {
      opacity: 1;
      transform: translate(0px);
    }
  }

  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`,s=a.Z.div`
  margin: 20% 10px 0 10%;
  animation: appear 1200ms ease 500ms backwards;

  a {
    color: none;
    text-decoration: none;
    transition: none;
  }
`,u=a.Z.div`
  margin: 20px 10% 0 10px;
`,p=a.Z.div`
  font-size: ${e=>{let{size:t=24}=e;return`${t}px`}};
  color: #fff;
  line-height: 1;
  animation: ${e=>{let{delayed:t}=e;return`drop-in ${t?"1200ms":"1s"} ease ${t?"500ms":"200ms"} backwards`}};
`,d=a.Z.div`
    padding: 20px;
    background-color: #000;
    opacity: 0.6;
    border-radius: 5px;
    color: #fff;
    margin: 10px;
    cursor: pointer;
    width: 350px;

    :hover {
      opacity: 0.75
    }
`;class m extends n.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(e){return{hasError:!0}}render(){return this.state.hasError?n.createElement("div",null,n.createElement("div",null,n.createElement("h1",null,"Oops. Something went wrong \ud83d\ude15"))):this.props.children}}const g=r.p+"assets/images/universe-00c537ef5324991ecab20bed46ec3f9c.jpeg";function h(){return n.createElement(f,null,n.createElement(m,null,n.createElement(o,null)))}const f=a.Z.div`
background-image: url(${g});
background-position: center;
background-size: cover;
background-repeat: no-repeat;
width: 100vw;
height: 100vh;
`}}]);