(()=>{"use strict";var e,a,t,f,r,c={},b={};function d(e){var a=b[e];if(void 0!==a)return a.exports;var t=b[e]={id:e,loaded:!1,exports:{}};return c[e].call(t.exports,t,t.exports,d),t.loaded=!0,t.exports}d.m=c,d.c=b,e=[],d.O=(a,t,f,r)=>{if(!t){var c=1/0;for(i=0;i<e.length;i++){t=e[i][0],f=e[i][1],r=e[i][2];for(var b=!0,o=0;o<t.length;o++)(!1&r||c>=r)&&Object.keys(d.O).every((e=>d.O[e](t[o])))?t.splice(o--,1):(b=!1,r<c&&(c=r));if(b){e.splice(i--,1);var n=f();void 0!==n&&(a=n)}}return a}r=r||0;for(var i=e.length;i>0&&e[i-1][2]>r;i--)e[i]=e[i-1];e[i]=[t,f,r]},d.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return d.d(a,{a:a}),a},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,d.t=function(e,f){if(1&f&&(e=this(e)),8&f)return e;if("object"==typeof e&&e){if(4&f&&e.__esModule)return e;if(16&f&&"function"==typeof e.then)return e}var r=Object.create(null);d.r(r);var c={};a=a||[null,t({}),t([]),t(t)];for(var b=2&f&&e;"object"==typeof b&&!~a.indexOf(b);b=t(b))Object.getOwnPropertyNames(b).forEach((a=>c[a]=()=>e[a]));return c.default=()=>e,d.d(r,c),r},d.d=(e,a)=>{for(var t in a)d.o(a,t)&&!d.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},d.f={},d.e=e=>Promise.all(Object.keys(d.f).reduce(((a,t)=>(d.f[t](e,a),a)),[])),d.u=e=>"assets/js/"+({32:"0645a605",497:"a80da1cf",896:"e86357a2",1249:"39a6c39b",1398:"096bfee4",1497:"e16015ca",1972:"73664a40",1991:"b2b675dd",2111:"73c658bd",2161:"4c9e35b1",2513:"5f366e5d",2634:"c4f5d8e4",2711:"9e4087bc",3249:"ccc49370",3499:"709c2094",3637:"f4f34a3a",3669:"30a24c52",3694:"8717b14a",4045:"12735402",4134:"393be207",4374:"66406991",4625:"7cdbccb6",4648:"8974510e",4655:"01379f2d",4722:"608ae6a4",4813:"6875c492",5557:"d9f32620",5769:"7b9931a4",5894:"b2f554cd",6061:"1f391b9e",6133:"f5bf02f1",6334:"031793e1",6849:"18ba09e8",6969:"14eb3368",7031:"cb43b198",7098:"a7bd4aaa",7472:"814f3328",7643:"a6aa9e1f",7895:"02530e58",8209:"01a85c17",8255:"c350ed64",8401:"17896441",8581:"935f2afb",8609:"925b3f96",8737:"7661071f",9048:"a94703ab",9186:"534a1e95",9267:"a7023ddc",9323:"c7566254",9325:"59362658",9328:"e273c56f",9647:"5e95c892"}[e]||e)+"."+{32:"59106a75",497:"66bf16d7",896:"5c62812e",1249:"6fa88b88",1398:"50b34cfe",1497:"93e5c454",1972:"06ec7128",1991:"623b4f7e",2111:"0cf947ce",2125:"aab352ab",2161:"a4ff5dd8",2237:"9a94a712",2513:"4c0d21ad",2634:"4389791d",2711:"921b47af",3249:"b9509851",3499:"4d996f78",3637:"f8a2111c",3669:"9e915c6e",3694:"649962fd",4045:"a219ffaa",4134:"38786f23",4374:"8deced4b",4625:"c2918163",4648:"c7eed3e5",4655:"44bc1532",4722:"8fb6d760",4813:"479c162a",5557:"17895977",5769:"67ab3d95",5894:"eb1ce27c",6061:"4a1f1132",6133:"0ebd58ff",6334:"70c937f4",6849:"e5304568",6969:"66b49cbe",7031:"e78dd29e",7098:"c9660d4a",7472:"59e7c876",7643:"b7a513d7",7895:"c68bf5fb",8209:"d6316b03",8255:"f31bedf9",8401:"6ac5edbb",8581:"c348d1c0",8609:"9ebeeaa1",8737:"865cb909",8747:"991fb75b",9048:"90414e7c",9186:"fbdbf002",9267:"786eb9bf",9323:"6d8da36a",9325:"b5dea877",9328:"323646c9",9647:"3558fc3a"}[e]+".js",d.miniCssF=e=>{},d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),f={},r="jd-scratchified-docs:",d.l=(e,a,t,c)=>{if(f[e])f[e].push(a);else{var b,o;if(void 0!==t)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==r+t){b=u;break}}b||(o=!0,(b=document.createElement("script")).charset="utf-8",b.timeout=120,d.nc&&b.setAttribute("nonce",d.nc),b.setAttribute("data-webpack",r+t),b.src=e),f[e]=[a];var l=(a,t)=>{b.onerror=b.onload=null,clearTimeout(s);var r=f[e];if(delete f[e],b.parentNode&&b.parentNode.removeChild(b),r&&r.forEach((e=>e(t))),a)return a(t)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:b}),12e4);b.onerror=l.bind(null,b.onerror),b.onload=l.bind(null,b.onload),o&&document.head.appendChild(b)}},d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.p="/",d.gca=function(e){return e={12735402:"4045",17896441:"8401",59362658:"9325",66406991:"4374","0645a605":"32",a80da1cf:"497",e86357a2:"896","39a6c39b":"1249","096bfee4":"1398",e16015ca:"1497","73664a40":"1972",b2b675dd:"1991","73c658bd":"2111","4c9e35b1":"2161","5f366e5d":"2513",c4f5d8e4:"2634","9e4087bc":"2711",ccc49370:"3249","709c2094":"3499",f4f34a3a:"3637","30a24c52":"3669","8717b14a":"3694","393be207":"4134","7cdbccb6":"4625","8974510e":"4648","01379f2d":"4655","608ae6a4":"4722","6875c492":"4813",d9f32620:"5557","7b9931a4":"5769",b2f554cd:"5894","1f391b9e":"6061",f5bf02f1:"6133","031793e1":"6334","18ba09e8":"6849","14eb3368":"6969",cb43b198:"7031",a7bd4aaa:"7098","814f3328":"7472",a6aa9e1f:"7643","02530e58":"7895","01a85c17":"8209",c350ed64:"8255","935f2afb":"8581","925b3f96":"8609","7661071f":"8737",a94703ab:"9048","534a1e95":"9186",a7023ddc:"9267",c7566254:"9323",e273c56f:"9328","5e95c892":"9647"}[e]||e,d.p+d.u(e)},(()=>{var e={5354:0,1869:0};d.f.j=(a,t)=>{var f=d.o(e,a)?e[a]:void 0;if(0!==f)if(f)t.push(f[2]);else if(/^(1869|5354)$/.test(a))e[a]=0;else{var r=new Promise(((t,r)=>f=e[a]=[t,r]));t.push(f[2]=r);var c=d.p+d.u(a),b=new Error;d.l(c,(t=>{if(d.o(e,a)&&(0!==(f=e[a])&&(e[a]=void 0),f)){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;b.message="Loading chunk "+a+" failed.\n("+r+": "+c+")",b.name="ChunkLoadError",b.type=r,b.request=c,f[1](b)}}),"chunk-"+a,a)}},d.O.j=a=>0===e[a];var a=(a,t)=>{var f,r,c=t[0],b=t[1],o=t[2],n=0;if(c.some((a=>0!==e[a]))){for(f in b)d.o(b,f)&&(d.m[f]=b[f]);if(o)var i=o(d)}for(a&&a(t);n<c.length;n++)r=c[n],d.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return d.O(i)},t=self.webpackChunkjd_scratchified_docs=self.webpackChunkjd_scratchified_docs||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))})()})();