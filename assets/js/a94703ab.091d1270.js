"use strict";(self.webpackChunkpage=self.webpackChunkpage||[]).push([[48],{8001:(e,t,n)=>{n.r(t),n.d(t,{default:()=>be});var a=n(6540),o=n(8215),i=n(9817),l=n(8630),r=n(1054),c=n(40),d=n(3230),s=n(4245),u=n(4067);const m={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"};var b=n(2445);function h(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,o]=(0,a.useState)(!1),i=(0,a.useRef)(!1),{startScroll:l,cancelScroll:r}=(0,s.gk)();return(0,s.Mq)(((e,n)=>{let{scrollY:a}=e;const l=n?.scrollY;l&&(i.current?i.current=!1:a>=l?(r(),o(!1)):a<t?o(!1):a+window.innerHeight<document.documentElement.scrollHeight&&o(!0))})),(0,u.$)((e=>{e.location.hash&&(i.current=!0,o(!1))})),{shown:n,scrollToTop:()=>l(0)}}({threshold:300});return(0,b.Y)("button",{"aria-label":(0,d.T)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,o.A)("clean-btn",l.G.common.backToTopButton,m.backToTopButton,e&&m.backToTopButtonShow),type:"button",onClick:t})}var p=n(6350),f=n(6347),v=n(2216),Y=n(6957),_=n(20);function g(e){return(0,b.Y)("svg",{width:"20",height:"20","aria-hidden":"true",...e,children:(0,b.FD)("g",{fill:"#7a7a7a",children:[(0,b.Y)("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),(0,b.Y)("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})]})})}const A={collapseSidebarButton:"collapseSidebarButton_PEFL",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_kv0_"};function k(e){let{onClick:t}=e;return(0,b.Y)("button",{type:"button",title:(0,d.T)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,d.T)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,o.A)("button button--secondary button--outline",A.collapseSidebarButton),onClick:t,children:(0,b.Y)(g,{className:A.collapseSidebarButtonIcon})})}var C=n(2),S=n(4799);const T=Symbol("EmptyContext"),N=a.createContext(T);function I(e){let{children:t}=e;const[n,o]=(0,a.useState)(null),i=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:o})),[n]);return(0,b.Y)(N.Provider,{value:i,children:t})}var x=n(4549),B=n(260),y=n(4783),w=n(1062);function L(e){let{collapsed:t,categoryLabel:n,onClick:a}=e;return(0,b.Y)("button",{"aria-label":t?(0,d.T)({id:"theme.DocSidebarItem.expandCategoryAriaLabel",message:"Expand sidebar category '{label}'",description:"The ARIA label to expand the sidebar category"},{label:n}):(0,d.T)({id:"theme.DocSidebarItem.collapseCategoryAriaLabel",message:"Collapse sidebar category '{label}'",description:"The ARIA label to collapse the sidebar category"},{label:n}),"aria-expanded":!t,type:"button",className:"clean-btn menu__caret",onClick:a})}function E(e){let{item:t,onItemClick:n,activePath:i,level:c,index:d,...s}=e;const{items:u,label:m,collapsible:h,className:p,href:f}=t,{docs:{sidebar:{autoCollapseCategories:v}}}=(0,Y.p)(),_=function(e){const t=(0,w.A)();return(0,a.useMemo)((()=>e.href&&!e.linkUnlisted?e.href:!t&&e.collapsible?(0,r.Nr)(e):void 0),[e,t])}(t),g=(0,r.w8)(t,i),A=(0,B.ys)(f,i),{collapsed:k,setCollapsed:C}=(0,x.u)({initialState:()=>!!h&&(!g&&t.collapsed)}),{expandedItem:I,setExpandedItem:E}=function(){const e=(0,a.useContext)(N);if(e===T)throw new S.dV("DocSidebarItemsExpandedStateProvider");return e}(),D=function(e){void 0===e&&(e=!k),E(e?null:d),C(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:o}=e;const i=(0,S.ZC)(t);(0,a.useEffect)((()=>{t&&!i&&n&&o(!1)}),[t,i,n,o])}({isActive:g,collapsed:k,updateCollapsed:D}),(0,a.useEffect)((()=>{h&&null!=I&&I!==d&&v&&C(!0)}),[h,I,d,C,v]),(0,b.FD)("li",{className:(0,o.A)(l.G.docs.docSidebarItemCategory,l.G.docs.docSidebarItemCategoryLevel(c),"menu__list-item",{"menu__list-item--collapsed":k},p),children:[(0,b.FD)("div",{className:(0,o.A)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":A}),children:[(0,b.Y)(y.A,{className:(0,o.A)("menu__link",{"menu__link--sublist":h,"menu__link--sublist-caret":!f&&h,"menu__link--active":g}),onClick:h?e=>{n?.(t),f?D(!1):(e.preventDefault(),D())}:()=>{n?.(t)},"aria-current":A?"page":void 0,role:h&&!f?"button":void 0,"aria-expanded":h&&!f?!k:void 0,href:h?_??"#":_,...s,children:m}),f&&h&&(0,b.Y)(L,{collapsed:k,categoryLabel:m,onClick:e=>{e.preventDefault(),D()}})]}),(0,b.Y)(x.N,{lazy:!0,as:"ul",className:"menu__list",collapsed:k,children:(0,b.Y)(U,{items:u,tabIndex:k?-1:0,onItemClick:n,activePath:i,level:c+1})})]})}var D=n(877),M=n(716);const H={menuExternalLink:"menuExternalLink_NmtK"};function F(e){let{item:t,onItemClick:n,activePath:a,level:i,index:c,...d}=e;const{href:s,label:u,className:m,autoAddBaseUrl:h}=t,p=(0,r.w8)(t,a),f=(0,D.A)(s);return(0,b.Y)("li",{className:(0,o.A)(l.G.docs.docSidebarItemLink,l.G.docs.docSidebarItemLinkLevel(i),"menu__list-item",m),children:(0,b.FD)(y.A,{className:(0,o.A)("menu__link",!f&&H.menuExternalLink,{"menu__link--active":p}),autoAddBaseUrl:h,"aria-current":p?"page":void 0,to:s,...f&&{onClick:n?()=>n(t):void 0},...d,children:[u,!f&&(0,b.Y)(M.A,{})]})},u)}const G={menuHtmlItem:"menuHtmlItem_M9Kj"};function W(e){let{item:t,level:n,index:a}=e;const{value:i,defaultStyle:r,className:c}=t;return(0,b.Y)("li",{className:(0,o.A)(l.G.docs.docSidebarItemLink,l.G.docs.docSidebarItemLinkLevel(n),r&&[G.menuHtmlItem,"menu__list-item"],c),dangerouslySetInnerHTML:{__html:i}},a)}function P(e){let{item:t,...n}=e;switch(t.type){case"category":return(0,b.Y)(E,{item:t,...n});case"html":return(0,b.Y)(W,{item:t,...n});default:return(0,b.Y)(F,{item:t,...n})}}function R(e){let{items:t,...n}=e;const a=(0,r.Y)(t,n.activePath);return(0,b.Y)(I,{children:a.map(((e,t)=>(0,b.Y)(P,{item:e,index:t,...n},t)))})}const U=(0,a.memo)(R),V={menu:"menu_SIkG",menuWithAnnouncementBar:"menuWithAnnouncementBar_GW3s"};function K(e){let{path:t,sidebar:n,className:i}=e;const r=function(){const{isActive:e}=(0,C.M)(),[t,n]=(0,a.useState)(e);return(0,s.Mq)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return(0,b.Y)("nav",{"aria-label":(0,d.T)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,o.A)("menu thin-scrollbar",V.menu,r&&V.menuWithAnnouncementBar,i),children:(0,b.Y)("ul",{className:(0,o.A)(l.G.docs.docSidebarMenu,"menu__list"),children:(0,b.Y)(U,{items:n,activePath:t,level:1})})})}const j="sidebar_njMd",z="sidebarWithHideableNavbar_wUlq",q="sidebarHidden_VK0M",O="sidebarLogo_isFc";function J(e){let{path:t,sidebar:n,onCollapse:a,isHidden:i}=e;const{navbar:{hideOnScroll:l},docs:{sidebar:{hideable:r}}}=(0,Y.p)();return(0,b.FD)("div",{className:(0,o.A)(j,l&&z,i&&q),children:[l&&(0,b.Y)(_.A,{tabIndex:-1,className:O}),(0,b.Y)(K,{path:t,sidebar:n}),r&&(0,b.Y)(k,{onClick:a})]})}const Q=a.memo(J);var X=n(763),Z=n(5755);const $=e=>{let{sidebar:t,path:n}=e;const a=(0,Z.M)();return(0,b.Y)("ul",{className:(0,o.A)(l.G.docs.docSidebarMenu,"menu__list"),children:(0,b.Y)(U,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&a.toggle(),"link"===e.type&&a.toggle()},level:1})})};function ee(e){return(0,b.Y)(X.GX,{component:$,props:e})}const te=a.memo(ee);function ne(e){const t=(0,v.l)(),n="desktop"===t||"ssr"===t,a="mobile"===t;return(0,b.FD)(b.FK,{children:[n&&(0,b.Y)(Q,{...e}),a&&(0,b.Y)(te,{...e})]})}const ae={expandButton:"expandButton_TmdG",expandButtonIcon:"expandButtonIcon_i1dp"};function oe(e){let{toggleSidebar:t}=e;return(0,b.Y)("div",{className:ae.expandButton,title:(0,d.T)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,d.T)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t,children:(0,b.Y)(g,{className:ae.expandButtonIcon})})}const ie={docSidebarContainer:"docSidebarContainer_YfHR",docSidebarContainerHidden:"docSidebarContainerHidden_DPk8",sidebarViewport:"sidebarViewport_aRkj"};function le(e){let{children:t}=e;const n=(0,c.t)();return(0,b.Y)(a.Fragment,{children:t},n?.name??"noSidebar")}function re(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:i}=e;const{pathname:r}=(0,f.zy)(),[c,d]=(0,a.useState)(!1),s=(0,a.useCallback)((()=>{c&&d(!1),!c&&(0,p.O)()&&d(!0),i((e=>!e))}),[i,c]);return(0,b.Y)("aside",{className:(0,o.A)(l.G.docs.docSidebarContainer,ie.docSidebarContainer,n&&ie.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(ie.docSidebarContainer)&&n&&d(!0)},children:(0,b.Y)(le,{children:(0,b.FD)("div",{className:(0,o.A)(ie.sidebarViewport,c&&ie.sidebarViewportHidden),children:[(0,b.Y)(ne,{sidebar:t,path:r,onCollapse:s,isHidden:c}),c&&(0,b.Y)(oe,{toggleSidebar:s})]})})})}const ce={docMainContainer:"docMainContainer_TBSr",docMainContainerEnhanced:"docMainContainerEnhanced_lQrH",docItemWrapperEnhanced:"docItemWrapperEnhanced_JWYK"};function de(e){let{hiddenSidebarContainer:t,children:n}=e;const a=(0,c.t)();return(0,b.Y)("main",{className:(0,o.A)(ce.docMainContainer,(t||!a)&&ce.docMainContainerEnhanced),children:(0,b.Y)("div",{className:(0,o.A)("container padding-top--md padding-bottom--lg",ce.docItemWrapper,t&&ce.docItemWrapperEnhanced),children:n})})}const se={docRoot:"docRoot_UBD9",docsWrapper:"docsWrapper_hBAB"};function ue(e){let{children:t}=e;const n=(0,c.t)(),[o,i]=(0,a.useState)(!1);return(0,b.FD)("div",{className:se.docsWrapper,children:[(0,b.Y)(h,{}),(0,b.FD)("div",{className:se.docRoot,children:[n&&(0,b.Y)(re,{sidebar:n.items,hiddenSidebarContainer:o,setHiddenSidebarContainer:i}),(0,b.Y)(de,{hiddenSidebarContainer:o,children:t})]})]})}var me=n(3510);function be(e){const t=(0,r.B5)(e);if(!t)return(0,b.Y)(me.A,{});const{docElement:n,sidebarName:a,sidebarItems:d}=t;return(0,b.Y)(i.e3,{className:(0,o.A)(l.G.page.docsDocPage),children:(0,b.Y)(c.V,{name:a,items:d,children:(0,b.Y)(ue,{children:n})})})}},3510:(e,t,n)=>{n.d(t,{A:()=>r});n(6540);var a=n(8215),o=n(3230),i=n(5225),l=n(2445);function r(e){let{className:t}=e;return(0,l.Y)("main",{className:(0,a.A)("container margin-vert--xl",t),children:(0,l.Y)("div",{className:"row",children:(0,l.FD)("div",{className:"col col--6 col--offset-3",children:[(0,l.Y)(i.A,{as:"h1",className:"hero__title",children:(0,l.Y)(o.A,{id:"theme.NotFound.title",description:"The title of the 404 page",children:"Page Not Found"})}),(0,l.Y)("p",{children:(0,l.Y)(o.A,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page",children:"We could not find what you were looking for."})}),(0,l.Y)("p",{children:(0,l.Y)(o.A,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page",children:"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."})})]})})})}}}]);