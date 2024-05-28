"use strict";(self.webpackChunkjd_scratchified_docs=self.webpackChunkjd_scratchified_docs||[]).push([[4045],{2257:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>r,toc:()=>h});var n=i(4848),o=i(8453);const s={sidebar_position:9},a="6 - Adding Pictograms",r={id:"addingpictograms",title:"6 - Adding Pictograms",description:"Pictograms are icons that show the player what moves to perform while playing. The game can work without them, but they're a core part of the authentic Just Dance experience, so it's recommended to include them if possible.",source:"@site/docs/6_addingpictograms.md",sourceDirName:".",slug:"/addingpictograms",permalink:"/docs/addingpictograms",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"5 - Adding a Background",permalink:"/docs/addingabackground"},next:{title:"7 - Adding Lyrics",permalink:"/docs/addinglyrics"}},c={},h=[{value:"Basic Technical Info",id:"basic-technical-info",level:2},{value:"The rest is up to you",id:"the-rest-is-up-to-you",level:2}];function d(e){const t={admonition:"admonition",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"6---adding-pictograms",children:"6 - Adding Pictograms"}),"\n",(0,n.jsx)(t.p,{children:"Pictograms are icons that show the player what moves to perform while playing. The game can work without them, but they're a core part of the authentic Just Dance experience, so it's recommended to include them if possible."}),"\n",(0,n.jsx)(t.h2,{id:"basic-technical-info",children:"Basic Technical Info"}),"\n",(0,n.jsx)(t.p,{children:'JDS stores each individual pictogram as a costume in the "Pictograms" sprite, which (by default) is near the top of the sprite list.'}),"\n",(0,n.jsxs)(t.p,{children:["The game is programmed to recognize a specific naming convention for these costumes. Each one should be named ",(0,n.jsx)(t.strong,{children:"codename//x"}),", where ",(0,n.jsx)(t.strong,{children:"codename"})," is your song's codename and ",(0,n.jsx)(t.strong,{children:"x"}),' is a unique identifier that you will use to "call on" the pictogram in your code. (I usually just use numbers to keep things simple, but it can be anything.)']}),"\n",(0,n.jsx)(t.p,{children:'Pictogram spawning is managed by a single script (per song) in that same sprite. It is done using the "!picto" custom block. The first argument in the block is the picto\'s unique identifier, and the second argument is the delay before spawning it.'}),"\n",(0,n.jsx)(t.p,{children:"Let's look at an example."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Example pictogram script",src:i(6265).A+"",width:"518",height:"325"})}),"\n",(0,n.jsx)(t.p,{children:'This script will wait for exactly 4 beats after the song starts, then spawn the "1" pictogram. After that, it will wait another 2 beats, then spawn the "2" pictogram.'}),"\n",(0,n.jsx)(t.p,{children:'There is a script starter ready for use at the far left of the code in the Pictograms sprite. After you\'ve added the pictograms themselves, you can keep adding "!picto" blocks to that script to spawn them at the appropriate times.'}),"\n",(0,n.jsx)(t.h2,{id:"the-rest-is-up-to-you",children:"The rest is up to you"}),"\n",(0,n.jsx)(t.p,{children:"Pictograms are literally just images, so there aren't really any limitations as to how you can add them."}),"\n",(0,n.jsx)(t.p,{children:"If you're porting a real Just Dance routine, you have the option to simply import the official pictos and use them. Alternatively, you can create them yourself in the Scratch vector editor."}),"\n",(0,n.jsx)(t.p,{children:"There are examples of custom pictograms included in the project; feel free to copy-paste any of them and modify the vertices to make what you want."}),"\n",(0,n.jsxs)(t.admonition,{title:"Tip",type:"tip",children:[(0,n.jsx)(t.p,{children:"Some points to keep in mind:"}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Finished pictograms need to be horizontally centered on the drawing canvas."}),"\n",(0,n.jsx)(t.li,{children:"Arrows and other symbols should use the color of the glove that the coach is wearing on their left hand (the one that the player's right hand follows). If there is no glove or other accessory there, use the color that you think fits best."}),"\n",(0,n.jsx)(t.li,{children:"If any dancer can't be selected on the coach select screen, you don't need to depict them in pictograms."}),"\n",(0,n.jsx)(t.li,{children:'By default, Solo pictos take 4 beats to reach the end of the pictogram bar, and Duet pictos take 3. You can manually override this by entering 3, 4, or 5 into the "pictoTimeOverride" variable setter (which is near the top of the coach sprite\'s main script).'}),"\n"]})]})]})}function l(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},6265:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/pictoblock-bf4878606530ea90e81337368600c6c9.png"},8453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>r});var n=i(6540);const o={},s=n.createContext(o);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);