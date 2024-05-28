"use strict";(self.webpackChunkjd_scratchified_docs=self.webpackChunkjd_scratchified_docs||[]).push([[4625],{5205:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>h});var o=n(4848),i=n(8453);const s={sidebar_position:6},a="3 - Setting Up the Project",r={id:"settinguptheproject",title:"3 - Setting Up the Project",description:"We've prepared everything we need, so we're finally ready to open up the .sb3 project you downloaded earlier.",source:"@site/docs/3_settinguptheproject.md",sourceDirName:".",slug:"/settinguptheproject",permalink:"/docs/settinguptheproject",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"2 - Preparing the GIF",permalink:"/docs/preparingthegif"},next:{title:"4 - Animating the Coach",permalink:"/docs/animatingthecoach"}},l={},h=[{value:"Song Metadata",id:"song-metadata",level:2},{value:"Menu Setup",id:"menu-setup",level:2},{value:"Menu Visuals",id:"menu-visuals",level:2},{value:"Importing Assets",id:"importing-assets",level:2}];function d(e){const t={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"3---setting-up-the-project",children:"3 - Setting Up the Project"}),"\n",(0,o.jsx)(t.p,{children:"We've prepared everything we need, so we're finally ready to open up the .sb3 project you downloaded earlier."}),"\n",(0,o.jsxs)(t.admonition,{title:"Warning",type:"danger",children:[(0,o.jsxs)(t.p,{children:["Use the ",(0,o.jsx)(t.a,{href:"https://turbowarp.org/editor",children:"TurboWarp editor"}),". You WILL NOT be able to follow this guide using only vanilla Scratch."]}),(0,o.jsx)(t.p,{children:"If you want to be able to access your project from other devices, save it to a flash drive or use a cloud storage service like Google Drive."}),(0,o.jsx)(t.p,{children:"You will still be able to share your project to Scratch once you're finished."})]}),"\n",(0,o.jsx)(t.h2,{id:"song-metadata",children:"Song Metadata"}),"\n",(0,o.jsx)(t.p,{children:"The JDS engine contains several lists (pictured below) that define important metadata for songs. The  names of the lists all start with \"Song\" so that they're conveniently placed next to each other in the project's... uh, list of lists."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"The metadata lists",src:n(9657).A+"",width:"220",height:"325"})}),"\n",(0,o.jsxs)(t.p,{children:["These lists all contain ",(0,o.jsx)(t.em,{children:"one"})," item per song. If you're using the blank JDS template project (which you should be, unless you're trying to add multiple custom songs to one project), then your song's index in these lists will be ",(0,o.jsx)(t.strong,{children:"1"}),". That means the ",(0,o.jsx)(t.strong,{children:"first"})," item in each list will be the one that your routine uses."]}),"\n",(0,o.jsx)(t.p,{children:'In the JDS template project, the lists already contain one "example" item, which you should now replace as follows:'}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"List Name"}),(0,o.jsx)(t.th,{children:"What you should enter"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Song # of Coaches"}),(0,o.jsx)(t.td,{children:"The number of coaches in your routine (1 for Solos, 2 for Duets, and so on). If you're using non-JD media, any dancers with exactly the same choreography should be counted as 1 coach."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Song BPMs"}),(0,o.jsx)(t.td,{children:"The tempo of the song you're using, in beats per minute. You can use decimals if you need to. Mid-song tempo changes are unfortunately not yet supported, but this may change in a future update."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Song Codenames"}),(0,o.jsx)(t.td,{children:"The same codename that you used as the file name for your GIF. This is CASE SENSITIVE. Do not include the .gif extension."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Song Delays"}),(0,o.jsx)(t.td,{children:"Leave this at 0 for now. We'll figure it out later."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Song List"}),(0,o.jsx)(t.td,{children:"The actual title of your routine. Keep it under 40 characters if you can."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Song Lyric Colors"}),(0,o.jsx)(t.td,{children:"The color that will be applied to words in the lyrics when they are highlighted. This works like a hue shift, with a range of 0 to 200, using red as the base."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Song Origin Games"}),(0,o.jsx)(t.td,{children:'The Just Dance game that your routine is from. This uses abbreviations like "JD1", "JD2024", and so on. Enter "FANMADE" for fan-made routines, or "FANMADEMU" for fan-made Mashups. Enter "NA" if your routine isn\'t from JD.'})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Song Volumes"}),(0,o.jsx)(t.td,{children:"Leave this at 75 for now. Once you import the song to the project, you can adjust the audio balancing at any time by changing this value. Caps at 100."})]})]})]}),"\n",(0,o.jsx)(t.admonition,{title:"Tip",type:"tip",children:(0,o.jsx)(t.p,{children:"JDS works best with BPMs between 80 and 180. If your song's tempo is not within this range, consider halving or doubling the value in the Song BPMs list to make it fit."})}),"\n",(0,o.jsx)(t.h2,{id:"menu-setup",children:"Menu Setup"}),"\n",(0,o.jsx)(t.p,{children:"We need to actually be able to select the song in-game to enter it, so let's do a bit of preparation for that."}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:'Open the "Menus" sprite folder.'}),"\n",(0,o.jsx)(t.li,{children:'Click on the "Menu Icons" sprite to select it.'}),"\n",(0,o.jsx)(t.li,{children:"Open the Costumes tab."}),"\n"]}),"\n",(0,o.jsx)(t.admonition,{title:"Warning",type:"danger",children:(0,o.jsx)(t.p,{children:'Many sprites in the game (including this one) have a "boundary test" costume consisting of a large white rectangle. Never mess with it- the game WILL break if you do.'})}),"\n",(0,o.jsxs)(t.ol,{start:"4",children:["\n",(0,o.jsx)(t.li,{children:'Select the costume called "Song Name".'}),"\n",(0,o.jsx)(t.li,{children:"Replace that costume's name with your song's title (it must be exactly the same as in the Song List)."}),"\n",(0,o.jsx)(t.li,{children:"Change the text at the bottom of the costume itself to match your song's title. You can use multiple lines if you need to."}),"\n",(0,o.jsx)(t.li,{children:'With the Menus sprite folder still open, select the "Highlighted Title" sprite.'}),"\n",(0,o.jsx)(t.li,{children:'Select the "Codename" costume and replace its name with the song codename you\'ve been using.'}),"\n",(0,o.jsx)(t.li,{children:'Change the costume\'s "Artist" and "Song Title" text boxes as appropriate for your routine. You can resize them and/or use multiple lines if you need to.'}),"\n",(0,o.jsx)(t.li,{children:'Go back to the "Menus" sprite folder once again and select the "Coach + Text" sprite.'}),"\n",(0,o.jsx)(t.li,{children:'There are placeholder costumes called "1Codename", "2Codename" and so on. Replace "Codename" in these costume names with your routine\'s actual codename.'}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Your song should now appear on the menu. It will act a bit glitchy when highlighted because no preview has been made yet, but we'll deal with that later on, so don't worry about it yet."}),"\n",(0,o.jsx)(t.h2,{id:"menu-visuals",children:"Menu Visuals"}),"\n",(0,o.jsxs)(t.p,{children:["If you'd like to go ahead and do this now, you can also add the visuals for the menu icon and coach select portraits. You can get these from a song's page on the ",(0,o.jsx)(t.a,{href:"https://justdance.fandom.com/wiki/Home",children:"Just Dance wiki"})," (yes, Fandom is disgusting, but there is no alternative here), or you can remake them yourself."]}),"\n",(0,o.jsx)(t.p,{children:"If your routine isn't from JD, you'll need to get a bit creative with the menu icon and coach portrait(s), but it shouldn't be too difficult. There are examples provided in the project."}),"\n",(0,o.jsx)(t.p,{children:"If you'd prefer to wait before adding these visuals (I usually add them after I've actually made the routine so I can use a screenshot as the menu icon), you can just come back here later."}),"\n",(0,o.jsx)(t.h2,{id:"importing-assets",children:"Importing Assets"}),"\n",(0,o.jsx)(t.p,{children:"Now, we'll actually upload the files we got earlier. Do the following in order:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Upload your song's .mp3 into the Backdrop. Then, change the sound's name to the name you entered into the Song List. Like before, it must match exactly."}),"\n",(0,o.jsx)(t.li,{children:"Save a backup copy of the project before continuing. If you need to undo the GIF upload for any reason, reloading this save is easier than manually deleting all the costumes."}),"\n",(0,o.jsx)(t.li,{children:"Locate the sprite called \"[Song Title Here]\" (it's near the bottom). We will insert the GIF of your routine's coach(es) into this sprite. Replace the sprite name with the name of your song. Then, go to the Costumes tab and upload your GIF. It will take a minute or two; let it do its thing until the loading icon at the top disappears."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:'Now that your GIF is in the project, we need to make it actually "work" in-game. This will be done on the next page.'})]})}function c(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},9657:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/metalists-0b94a60d2cd34a75b4d24343ea389da0.PNG"},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var o=n(6540);const i={},s=o.createContext(i);function a(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);