"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[129],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3080:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(4137));const i={sidebar_position:1},o="HTML, CSS and JS",s={unversionedId:"background/HtmlCssJs",id:"background/HtmlCssJs",title:"HTML, CSS and JS",description:"HTML (Hypertext Markup Language)",source:"@site/docs/background/HtmlCssJs.mdx",sourceDirName:"background",slug:"/background/HtmlCssJs",permalink:"/react-basics/background/HtmlCssJs",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Background",permalink:"/react-basics/category/background"},next:{title:"Building blocks of React",permalink:"/react-basics/category/building-blocks-of-react"}},l={},c=[{value:"HTML (Hypertext Markup Language)",id:"html-hypertext-markup-language",level:3},{value:"CSS (Cascading Style Sheets)",id:"css-cascading-style-sheets",level:3},{value:"Adding styles to the content",id:"adding-styles-to-the-content",level:4},{value:"Javascript",id:"javascript",level:3},{value:"Adding logic using vanilla JS",id:"adding-logic-using-vanilla-js",level:4},{value:"See it in action",id:"see-it-in-action",level:4},{value:"What are the issues here?",id:"what-are-the-issues-here",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...i}=e;return(0,r.kt)(u,(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"html-css-and-js"},"HTML, CSS and JS"),(0,r.kt)("h3",{id:"html-hypertext-markup-language"},"HTML (Hypertext Markup Language)"),(0,r.kt)("p",null,"HTML defines the structure of a webpage using a sequence of user-written tags. Every tag has an opening and closing syntax."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},' <html lang="en">\n <head>\n    <meta charset="UTF-8" />\n </head>\n\n <body>\n   <h1>Hello!</h1>\n\n   <p>Welcome to this webpage</p>\n   <p>You opened this web page on</p>\n </body>\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"html",src:n(8546).Z,width:"205",height:"125"})),(0,r.kt)("h3",{id:"css-cascading-style-sheets"},"CSS (Cascading Style Sheets)"),(0,r.kt)("h4",{id:"adding-styles-to-the-content"},"Adding styles to the content"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," body {\n   padding: 50px;\n   font-size: 20px;\n }\n\n .text {\n   margin: 20px 0;\n   color: blue;\n }\n\n #time {\n   color: maroon;\n }\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Further resources"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://internetingishard.netlify.app/html-and-css/index.html"},"https://internetingishard.netlify.app/html-and-css/index.html")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"html",src:n(4162).Z,width:"380",height:"324"})),(0,r.kt)("h3",{id:"javascript"},"Javascript"),(0,r.kt)("h4",{id:"adding-logic-using-vanilla-js"},"Adding logic using vanilla JS"),(0,r.kt)("p",null,"We want to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add the current time to the content"),(0,r.kt)("li",{parentName:"ul"},"Display how many seconds have elapsed since the start of the current minute")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'// 1. Find the present time\nconst currentTime = new Date();\n\n// 2. Find element in DOM and change its text content\nvar paragraphs = document.querySelectorAll("p");\nvar timeParagraph = paragraphs[1];\ntimeParagraph.textContent =\n  timeParagraph.textContent + " " + currentTime.toString();\n\n// 3. Add a new paragraph to tell us the seconds in the current minute\nvar p = document.createElement("p");\nvar body = document.body;\nif (currentTime.getSeconds() % 2 == 0) {\n  p.textContent = `${currentTime.getSeconds()} seconds have passed since the start of the minute. We\'re on an even second`;\n} else {\n  p.textContent = `${currentTime.getSeconds()} seconds have passed since the start of the minute. We\'re on an even second`;\n}\np.className = "text";\n\nbody.appendChild(p);\n')),(0,r.kt)("h4",{id:"see-it-in-action"},"See it in action"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://codepen.io/grvshrm/pen/eYPoPzw\n")),(0,r.kt)("iframe",{src:"https://codepen.io/grvshrm/embed/eYPoPzw",style:{width:"100%",height:"400px"}}),(0,r.kt)("h3",{id:"what-are-the-issues-here"},"What are the issues here?"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"This is an ",(0,r.kt)("em",{parentName:"li"},"imperative")," approach to writing software. We have to specify line by line what the HTML should look like, and our javascript code is tightly coupled to the HTML layout (e.g. i need to get the second paragraph to do xyz)"),(0,r.kt)("li",{parentName:"ol"},"the tight coupling leads to unexpected breaking changes. If somebody adds a paragraph to the top of the html page, our javascript code with break"),(0,r.kt)("li",{parentName:"ol"},"imperative style is awkward and verbose. we have to reach inside the DOM, get the node, change the node in javascript, and then stick it back in the DOM."),(0,r.kt)("li",{parentName:"ol"},"Not unit-testable"),(0,r.kt)("li",{parentName:"ol"},"Difficult to modularize. As this app grows, the javascript/HTML file is likely to grow longer and longer.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Further resources"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://web.dev/howbrowserswork"},"How browsers work")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.codecademy.com/learn/introduction-to-javascript"},"Javascript tutorial - Codecademy")))))}d.isMDXComponent=!0},4162:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/css-d30128fdae5922949c6c0751ac7bc818.png"},8546:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM0AAAB9CAYAAAABduccAAAd90lEQVR4Xu3dCdxu1fQH8DQpSiWiQcnQoDRQVKQZZSpDmUNzUkoDGZpElNIgkUKTMhNFE4ompAylASFkJqRM5///bp/1tJ/znHc4vTfve+9dv8/n+dz7PGfvc/bZe/3WsM9515qnSSQSvTBP+4dEIjE+kjSJRE8kaRKJnpjnP//5T/u3RCIxDtLSJBI9kZYmkeiJJE0i0RPpniUSPZGkSSR6IkmTSPREkiaR6IkJSfOb3/ymufDCC5uvfvWr4360ueaaa0qfH/7wh5Puc8stt7SuOHncfvvtzUUXXTR0zq985SvN1Vdf3fzzn/8sbX7yk580F1988VCbSy65pLn22mub+2IT5LLLLmt222235iUveUlz6qmnNnfffXe7SWI2x4SkueCCC5qll166mWeeecb9LLHEEs2OO+5Y+hxyyCHNQx/60JE27Y82733ve1tXnDzOPffcZsEFFxw574orrtj89re/LW3e9773Nfe73/1G2my44YazXKCvuuqqZvHFFx+6zuGHH95ulpjNMSFp/vGPfzQ/+9nPmpNPPrl5wAMeMCJ8PrvvvnuxGHfccUfp87e//a1o+EMPPbRZYIEFRtrPP//8zWGHHVba3Hnnna0rTh6E/stf/nKz2GKLDZ1/hRVWGJDGWD7ykY+MjOMpT3nKLCfNgQceOHKvq6222pTuMTHzMCFpamy88cYjQvHwhz+8+cUvftFuWkAoV1555ZE+a6655iwV2FVXXXXo/I985CMHpIE//OEPI9byqU996iwdA7C07Xtdcsklm9///vftponZGL1I88pXvnJEKB7/+McPLEwXnvjEJ4702XzzzdvNpgRjqM/fJg2hXXbZZYfa3Bek2WuvvUbu9TGPeUzzl7/8pd00MRujF2m23377EaFI0tyDD37wgyP3uvXWW98nGw6J6UOSZhbiBz/4QbPwwgsPXeed73xnu1liNseMJM3111/fHHXUUc12223XbLbZZs1OO+3UnHHGGc2f/vSndtOCWU0aMRqr4X7tshnDHnvs0XzqU59q/vrXv7abD2DTZJ111hlcw4aHHbXEnIVeL2ze16TxbMUWre1r7QTvW2211eD7uuuu2ymEs5I0p512WrP88suXNvPOO2/znOc8p9l0000H/dZff/3miiuuaHcboN5BW2mllcYlWWL2xJQtzRprrNHcdddd7aYD1Jo3Pl2kQd43vOENgzaI8q1vfasc++IXv9jc//73L78T/htuuGGo76wizQknnNDMN998gzYnnnji4Nguu+wy+N3zpUsvvbTqeQ/OO++8QjbtXvayl7UPJ+YATNnS2FLdc889mwMOOKDZf//9hz5+syXd7tNFms997nNDbWj4ALfHLlQce8ELXtD861//GhyfFaTxJP+BD3zg4HjbSlx55ZXNQgstNDju+cvvfve7wfHAbbfdNnhudMwxx7QPJ+YATJk09+bTJg23bJNNNhlqw82pUR9fZJFFhl6/mSppEHDLLbccOr7NNtsM+sc5llpqqaE2XUF+/WzK6zuJOQ9Tds8e9ahHlXfI+PmXX3750Id2XmWVVUb6tElz0003DeKW+Hj9pca22247dPzTn/704NhUScPdq62MT7wSFGDt2g9quZ5t15QSEod5defmm28eOpaYMzBl0syKmEbM0m6z+uqrFzeMxvdpvyrj/bbAVElz1llnjVzfg8oarNEGG2ww1Mb28q233jrUDsQ/SJhvAsyZmDJpZsXu2cc+9rGRNmIhQrreeuuVj61fr/H4bLTRRs1JJ5006D9V0hx//PEj1993330H/eHf//730C6ajy1lb1S3cfDBB5cYLN85mzMxI0hz5plnjrR5/etfX1wdGr7rU8diUyXNscceO3L9vffee9AfXM/zmrqNnTZuaBv+nOLGG2/MNwHmUMwI0ohP2m28fjJZTJU0H/rQh0auv88++wz6A0vztKc9baiNN6eRIzF3YUaQxiZCPIeJD8Hv2tLtwlRJ841vfGPk73J23XXXQX+ww+ft7LrNox/96ObPf/7zUDuv0nDPPHOyjZ6Y89CLNK961auGhMbHRsB4b/F2kWaLLbYYauP1GALYbnfKKacMtQscd9xxJQ4KTJU0nsd47lIff+lLXzroH22WWWaZoTYC/hrXXXfd0HMpO2hT+SO7xMxEL9I873nPGxIaHwGvv1cZC2uttdZIHwLb9vff+MY3jrRbbrnlihUI/PGPfywPTR2rt6TbAu+P0GorNRZpbCMH2i6aTYj4k2mwffygBz1ocNz/kaTGfvvtN3IPj33sY/NVmjkMkyaNv7J8xCMeMSIU/Pr6mUkNAv/gBz94pI+3CDzDqfGrX/2qWXvttUfaLrroos0LX/jCZueddx4886k1PEIgV93Hdi83KfDd7353SOB9WCMBewCBXvziFw+Ocxfrd8yOPPLIoT+bPvroowfHAsbYHr8HouMplcTshwlJ873vfa/ZYYcdRv7ysf4gjmcq3gwGbwNLLNF+YFh/CLF3s84///zBtSTk8GfI7bb1x67a3//+99L+29/+dvOEJzxhpI2PPAH+FFqijS7Xz0ffeL8NxCeveMUrBsf9Rejpp5/eHHHEEYM/9favNwHalhL8WXX7Gu1XfhKzPyYkDYvgFf2Xv/zlJabp+viLTlr67W9/e+nD1fGdALbbxscxbc4+++yh6/mbfnGAnSrxgZcjCb130T772c8Otf3a175WYo/2uX2MF3k9OB1r7PrKTlODgJ9zzjnNs5/97OLSsS62lrlZzvP1r399qH0Nfd/2treVtySMnTv74x//uN0sMZtjQtJMF7hLXDZ/2zJdT9ZtJnBLJRYRT00W4iljt02dmPPQ64XNRCIxgy1NIjFTkZYmkeiJJE0i0RPpniUSPZGkSSR6IkmTSPREkiaR6IkkTSLRE0maRKInkjSJRE8kaRKJnkjSJBI9kaRJJHoiSZNI9ESSJpHoiXxhM5HoibQ0iURPpKVJJHoiSZNI9ES6Z4lETyRpEomeSNIkEj2RpEkkeiJJk0j0RJImkeiJJE0i0RNJmkSiJ5I0iURPJGkSiZ5I0iQSPTHhu2cKJ3384x9vPvOZz5QiSbfffvvQb5/4xCea66+/vrRVSUxFY+UE/a4AbRduu+220l+dzV//+tftw3M01KwxX2qGKjjVBWuiqpzPROtzX8A11eRRDPijH/1o+/BcjwktjUphKnsphafMt+JGqoFFRWXVzBQ+AlXMTjrppGbhhRcuhBir6vN5551Xqj6raxl9ZzrqorX3BgQRYZQ+jKK8b3nLW9rNClxLJbgNN9xwyte9NzBOhFX+8bnPfW778FyPCUkDJtAiK40XUMrPb9tvv/09Df8fCNWunNwFdSstyq233to+NOPw/e9/vzn00EPbP/eC/jfeeGP5v8puCy64YHPwwQe3Wt0DldSm0wojjpqk22yzTfvQXI8J3TOweMsss0wpfx4ulzLfvqve/NOf/nTQViHZd7zjHYPvd999d/PLX/6yueOOOwa/wbvf/e5O0rBkP/rRj0bag2tyG7qOIWkUhFX2L4rZgnJ+XX20MbbxSpZzJZ/85Cc3z3rWs8p5as3vnMYzXn9jev/731+s6uWXX16sr/P4rkap42ONQdu6BKH7UszXHHUpJXOtYjVSauuc1s53brVr+U2buhxi1xo5/5Oe9KRSWRv07yqhGN6EMo/atOFeVdceSwGYv5///Oed9+PeKY+u604nJkUa2HXXXYtlEccAYXrYwx5WfuOfA0IRsChHriS6Cs4Ktj7ucY9rjjvuuMH53vWudw2RxgQpULvTTjuVaykM++EPf3jg03/gAx8olZJ33HHHspgHHnhgc9dddw0K26oK7TcFaJVupyUvu+yyZu+99y7nUgJdHBX40pe+VArVKki7xhprlMrMXTjssMPKPer/mte8prnpppvKmN7znvc02267bfPqV7+6WXfddYui6HKlVMemXJwD8dwHIV5kkUVKBWzurXk0P1dddVXpc/HFF5djm222Wbk/MHaukvFssMEGZW7aUHr96U9/einue9RRRxXX1zl832+//Zo777yzWLu11lprUFQYkRUadm5jOOGEE8rv7mX99dcv8/qiF72oWXzxxYvijDUkB1tttVWz+eablzVTmFfF7gMOOKD0NUeUhePWmvdhnQJkRT/z5zyu4ztlCjfccEM5hrSrrLJKWVvkngmYlHsGl1xySVn45z//+eX7iSeeWIR3scUWa9Zbb70ySSZyyy23LARQ1XidddYZCMJee+1V+l944YXle5s0xxxzTBGGKErLnyf8FvqMM85ollhiiVK+3HXCNWTVEMdC+248l156aSmDvtBCCxVB15d2NpY111yzaNvrrruufCdAzkdA559//qHy6AGadKmllirCzTIFuQlJEChKoXe5cK6HYI7bAKBRWQGkERfaVLn22mtLqXUVr4HScS+qWrs/fWqlgzDmrws2a1zLRgwoC+/7mWeeWb4jIUGm4c09Ark+7LLLLqWttQaCvOSSS5a1pmQoIvOE1O5lpZVWKmtos0B5eq6c/p/85CeLdVAZO+K2o48+unglrBwgwfLLL1/ujawsuuiiRXlZP33FdO7F/Lpv51U1fCZg0qQhvKuttlq5OcLyjGc8o0yeiTKR11xzTdFYNCkcfvjhRbD23Xff8kE22uqII44ox4M04d4Q8FNPPXVwPQKNYITOdS10DdcnaFwC5t24jj/++MFxfZRRD7z1rW8tGh0J9tlnn2bFFVds9t9/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"}}]);