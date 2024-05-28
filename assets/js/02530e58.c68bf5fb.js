"use strict";(self.webpackChunkjd_scratchified_docs=self.webpackChunkjd_scratchified_docs||[]).push([[7895],{3958:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var o=n(4848),a=n(8453);const i={sidebar_position:8},s="5 - Adding a Background",r={id:"addingabackground",title:"5 - Adding a Background",description:"This only applies to masked routines. If you're using an unmasked routine, go on to the next page.",source:"@site/docs/5_addingabackground.md",sourceDirName:".",slug:"/addingabackground",permalink:"/docs/addingabackground",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"4 - Animating the Coach",permalink:"/docs/animatingthecoach"},next:{title:"6 - Adding Pictograms",permalink:"/docs/addingpictograms"}},c={},d=[];function u(e){const t={admonition:"admonition",h1:"h1",img:"img",p:"p",strong:"strong",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"5---adding-a-background",children:"5 - Adding a Background"}),"\n",(0,o.jsx)(t.p,{children:"This only applies to masked routines. If you're using an unmasked routine, go on to the next page."}),"\n",(0,o.jsx)(t.p,{children:'By default, the template project uses the background from "Kids in America". This is contained in the aptly-named "Background" sprite, and you can change its visuals to be whatever you want.'}),"\n",(0,o.jsxs)(t.admonition,{title:"Warning",type:"danger",children:[(0,o.jsx)(t.p,{children:'When desigining backgrounds, please remember that vanilla Scratch runs in 4:3, so if anyone plays your routine on the Scratch website, the screen will be "cut off" at the left and right. Also, sprites will not be able to move as far on the x-axis before Scratch stops them because they hit the edge.'}),(0,o.jsxs)(t.p,{children:['If you know that your routine\'s visuals will not work in 4:3 at all, the JDS engine has a property called "TurboWarp only?" that can be adjusted in the "Startup Notice" sprite. If you set it to 1, the game will tell players to use TurboWarp if 4:3 is detected. ',(0,o.jsx)(t.strong,{children:"Please only use this as a last resort."})," TurboWarp discourages users from sharing Scratch projects that force people to use it."]})]}),"\n",(0,o.jsx)(t.admonition,{title:"Note",type:"note",children:(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"If you plan on adding multiple songs to the same project:"})," Add a check that stops each song's background sprite from interfering whenever the \"S",":songCodename","\" variable doesn't match that song's codename."]})}),"\n",(0,o.jsx)(t.p,{children:'To reset properties/variables in the Background sprite before the routine starts, you can use code attached to a receiver of the "load in" message (which is broadcasted right before the loading screen fades away).'}),"\n",(0,o.jsx)(t.p,{children:"If you want to run code on the sprite at certain points during the routine, you can do it like this:"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"An example of using &quot;wait&quot; blocks with the &quot;!beat&quot; variable",src:n(1844).A+"",width:"482",height:"270"})}),"\n",(0,o.jsx)(t.p,{children:'Replace "x" with the time (measured in beats) when you want the code below that block to activate.'})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},1844:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/backgroundcodeexample-46439394bc25e5a2be3b187e4c092e21.png"},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>r});var o=n(6540);const a={},i=o.createContext(a);function s(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);