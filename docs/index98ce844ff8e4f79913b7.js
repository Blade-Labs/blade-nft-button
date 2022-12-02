(()=>{"use strict";var e={807:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(81),i=a.n(r),n=a(645),o=a.n(n)()(i());o.push([e.id,".blade-nft-purchase__btn{width:100%;padding:.8em;border:none;display:flex;flex-direction:row;justify-content:center;align-items:center;color:#000;font-weight:500;font-size:1em;background-color:#f45f23 !important;cursor:pointer}.blade-nft-purchase__btn-img{width:1.2em;height:1.2em;margin-right:.4em;display:none}.blade-nft-purchase__overlay{display:block;overflow:hidden;position:fixed;top:0;left:0;width:100%;height:100%;backdrop-filter:blur(3px);background-color:rgba(244,95,35,.15)}.blade-nft-purchase__popup{position:absolute;top:150px;right:200px;width:100%;max-width:280px;padding:18px 22px;background:#f45f23;box-shadow:0 4px 4px rgba(244,95,35,.25);border-radius:16px;color:#000;font-weight:500;font-size:1em;line-height:1.4;text-align:center}.blade-nft-purchase__popup-img{display:block;position:absolute;top:50%;transform:translateY(-100%);right:-58px;width:64px;height:196px}",""]);const s=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var a="",r=void 0!==t[5];return t[4]&&(a+="@supports (".concat(t[4],") {")),t[2]&&(a+="@media ".concat(t[2]," {")),r&&(a+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),a+=e(t),r&&(a+="}"),t[2]&&(a+="}"),t[4]&&(a+="}"),a})).join("")},t.i=function(e,a,r,i,n){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(o[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&o[l[0]]||(void 0!==n&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=n),a&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=a):l[2]=a),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function a(e){for(var a=-1,r=0;r<t.length;r++)if(t[r].identifier===e){a=r;break}return a}function r(e,r){for(var n={},o=[],s=0;s<e.length;s++){var c=e[s],d=r.base?c[0]+r.base:c[0],l=n[d]||0,u="".concat(d," ").concat(l);n[d]=l+1;var M=a(u),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==M)t[M].references++,t[M].updater(p);else{var g=i(p,r);r.byIndex=s,t.splice(s,0,{identifier:u,updater:g,references:1})}o.push(u)}return o}function i(e,t){var a=t.domAPI(t);return a.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;a.update(e=t)}else a.remove()}}e.exports=function(e,i){var n=r(e=e||[],i=i||{});return function(e){e=e||[];for(var o=0;o<n.length;o++){var s=a(n[o]);t[s].references--}for(var c=r(e,i),d=0;d<n.length;d++){var l=a(n[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}n=c}}},569:e=>{var t={};e.exports=function(e,a){var r=function(e){if(void 0===t[e]){var a=document.querySelector(e);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(e){a=null}t[e]=a}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(a)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,a)=>{e.exports=function(e){var t=a.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(a){!function(e,t,a){var r="";a.supports&&(r+="@supports (".concat(a.supports,") {")),a.media&&(r+="@media ".concat(a.media," {"));var i=void 0!==a.layer;i&&(r+="@layer".concat(a.layer.length>0?" ".concat(a.layer):""," {")),r+=a.css,i&&(r+="}"),a.media&&(r+="}"),a.supports&&(r+="}");var n=a.sourceMap;n&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(n))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,a)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function a(r){var i=t[r];if(void 0!==i)return i.exports;var n=t[r]={id:r,exports:{}};return e[r](n,n.exports,a),n.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.nc=void 0,(()=>{var e=a(379),t=a.n(e),r=a(795),i=a.n(r),n=a(569),o=a.n(n),s=a(565),c=a.n(s),d=a(216),l=a.n(d),u=a(589),M=a.n(u),p=a(807),g={};g.styleTagTransform=M(),g.setAttributes=c(),g.insert=o().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=l(),t()(p.Z,g),p.Z&&p.Z.locals&&p.Z.locals;const N={btnLabelConnect:"Purchase with Blade",popupMessage:"Click on Blade Wallet icon from your browser extensions panel and follow instructions."},I=e=>N[e]??"",h=[{attr:"useTestnet",required:!0,paramsTag:"useTestnet"},{attr:"dappCode",required:!0,paramsTag:"dApp_code"},{attr:"dappNonce",required:!1,paramsTag:"dApp_nonce"},{attr:"tokenId",required:!0,paramsTag:"token_id"},{attr:"serial",required:!1,paramsTag:"serial"},{attr:"price",required:!0,paramsTag:"price"},{attr:"currency",required:!1,paramsTag:"currency"}],D="blade-nft-purchase";class j{constructor(){this.overlay,this.stateAttribute="data-waiting",this.isBladeInstalled=!1,document.addEventListener("hederaWalletLoaded",(()=>{this.isBladeInstalled=!0})),document.querySelectorAll(`.${D}`).forEach(this.createButton.bind(this)),this.observeNewPlaceholders()}createButton(e){const t=document.createElement("button");t.innerHTML=I("btnLabelConnect"),t.className=`${D}__btn`,t.type="button";const a=document.createElement("img");a.src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSIxNyIgaGVpZ2h0PSIxNyIgcng9IjguNSIgc3Ryb2tlPSIjQjFCMUIxIi8+CjxwYXRoIGQ9Ik03LjQwNjc2IDExLjg5MjJMOC41NjM4MyA5LjA1NDFMNy42MzU2IDYuNzI0MzdMNC43OTk5OSAxMy43OTJMMTAuNDQ1NSAxMy44MDAyTDkuNjk0NTYgMTEuODkyMkg3LjQwNjc2WiIgZmlsbD0iI0VFRUVFRSIvPgo8cGF0aCBkPSJNOC42OTk1NCAzTDguMDE0NDkgNC43MjMzNEw3Ljk4NjkgNC43OTE4MUM3LjgyODU2IDUuMjUwOTcgNy43NzU5OSA1LjczOTc5IDcuODMzMSA2LjIyMTk4QzcuODUxNjUgNi40MTczMyA3Ljg5MTAxIDYuNjEwMTYgNy45NTA1MSA2Ljc5NzIxQzcuOTYyMjUgNi44MzI5MSA3Ljk3NDU4IDYuODY4MDIgNy45ODgwOCA2LjkwMTk2TDEwLjc1NyAxMy44SDEzLjA3OThMOC42OTk1NCAzWiIgZmlsbD0iI0VFRUVFRSIvPgo8L3N2Zz4K",a.className=`${D}__btn-img`,t.prepend(a),e.setAttribute(this.stateAttribute,!1),e.appendChild(t),this.addBtnListener(t,e)}addBtnListener(e,t){e.addEventListener("click",(e=>{this.actionClick(t)}))}actionClick(e){if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){const t=this.generateDeeplink(e);window.open(t)}else this.isBladeInstalled||window.bladeConnect?(this.createOverlay(),e.setAttribute(this.stateAttribute,!0),this.observeBox(e)):window.open("https://chrome.google.com/webstore/detail/blade-%E2%80%93-hedera-web3-digit/abogmiocnneedmmepnohnhlijcjpcifd")}createOverlay(){this.overlay=document.createElement("div"),this.overlay.className=`${D}__overlay`,document.body.appendChild(this.overlay);const e=document.createElement("div");e.className=`${D}__popup`,e.innerHTML=I("popupMessage"),this.overlay.appendChild(e);const t=document.createElement("img");t.src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjUiIGhlaWdodD0iMTk2IiB2aWV3Qm94PSIwIDAgNjUgMTk2IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8bWFzayBpZD0ibWFzazBfMV85IiBzdHlsZT0ibWFzay10eXBlOmFscGhhIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSIxIiB5PSIwIiB3aWR0aD0iNjQiIGhlaWdodD0iMTk2Ij4KPHJlY3QgeD0iMSIgd2lkdGg9IjY0IiBoZWlnaHQ9IjE5NiIgZmlsbD0iI0Q5RDlEOSIvPgo8L21hc2s+CjxnIG1hc2s9InVybCgjbWFzazBfMV85KSI+CjxwYXRoIGQ9Ik0wLjY2NjY2NyAxODlDMC42NjY2NjcgMTkxLjk0NiAzLjA1NDQ4IDE5NC4zMzMgNiAxOTQuMzMzQzguOTQ1NTIgMTk0LjMzMyAxMS4zMzMzIDE5MS45NDYgMTEuMzMzMyAxODlDMTEuMzMzMyAxODYuMDU0IDguOTQ1NTIgMTgzLjY2NyA2IDE4My42NjdDMy4wNTQ0OCAxODMuNjY3IDAuNjY2NjY3IDE4Ni4wNTQgMC42NjY2NjcgMTg5Wk0zOC44MDIxIDYuMDQ0NTRDMzguMjc0NCA1Ljg4MTU1IDM3LjcxNDUgNi4xNzcyIDM3LjU1MTYgNi43MDQ4OEwzNC44OTU1IDE1LjMwNEMzNC43MzI1IDE1LjgzMTcgMzUuMDI4MiAxNi4zOTE2IDM1LjU1NTkgMTYuNTU0NkMzNi4wODM1IDE2LjcxNzYgMzYuNjQzNCAxNi40MjIgMzYuODA2NCAxNS44OTQzTDM5LjE2NzQgOC4yNTA1OEw0Ni44MTExIDEwLjYxMTVDNDcuMzM4NyAxMC43NzQ1IDQ3Ljg5ODYgMTAuNDc4OCA0OC4wNjE2IDkuOTUxMTZDNDguMjI0NiA5LjQyMzQ3IDQ3LjkyOSA4Ljg2MzU3IDQ3LjQwMTMgOC43MDA1OEwzOC44MDIxIDYuMDQ0NTRaTTYgMTkwQzEzLjgwMiAxOTAgMjMuMDIyOCAxODQuNTI1IDMxLjU4MjEgMTc1LjA4NkM0MC4xODExIDE2NS42MDMgNDguMjY0IDE1MS45NjEgNTMuNzcyMyAxMzUuMjUxQzY0Ljc5NDcgMTAxLjgxMyA2NS41Mjc2IDU2LjAzMDYgMzkuMzkxMyA2LjUzMzA3TDM3LjYyMjcgNy40NjY5M0M2My40OTc3IDU2LjQ2OTQgNjIuNzMwMiAxMDEuNjg3IDUxLjg3MjkgMTM0LjYyNEM0Ni40NDEzIDE1MS4xMDIgMzguNDg5NiAxNjQuNDkxIDMwLjEwMDUgMTczLjc0MkMyMS42NzE4IDE4My4wMzcgMTIuOTUxMiAxODggNiAxODhWMTkwWiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzFfOSkiLz4KPC9nPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzFfOSIgeDE9IjQzLjUwODEiIHkxPSItNi41IiB4Mj0iNi4wMTU3MiIgeTI9IjIwOS41MDMiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0id2hpdGUiIHN0b3Atb3BhY2l0eT0iMC43NSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IndoaXRlIiBzdG9wLW9wYWNpdHk9IjAuNTUiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K",t.className=`${D}__popup-img`,e.prepend(t)}generateDeeplink(e){let t=new URL("https://api.bladewallet.io/mobile/profile/attachAccount");const a=this.getAttributes(e);for(let e in a)t.searchParams.set(e,a[e]);return t.search=encodeURIComponent(t.search).replace("%3F",""),"https://link.bladewallet.io/?link="+t+"&apn=org.bladelabs.wallet"}getAttributes(e){const t={};return h.forEach((a=>{const r=e.dataset[a.attr];a.required?r?t[a.paramsTag]=r:console.error("Required param missing",a.attr):r?t[a.paramsTag]=r:delete t[a.paramsTag]})),t}observeBox(e){const t=new MutationObserver((e=>{e.forEach((e=>{"false"!==e.target.dataset.waiting&&e.target.dataset.waiting||(this.overlay.remove(),t.disconnect())}))}));t.observe(e,{attributes:!0,attributeFilter:["data-waiting"]})}observeNewPlaceholders(){new MutationObserver((e=>{const t=[];e.forEach((e=>{e.addedNodes.forEach((e=>{e.ELEMENT_NODE&&(t.push(...e.querySelectorAll(`.${D}`)),e.classList.contains(D)&&t.push(e))}))})),t.forEach(this.createButton.bind(this))})).observe(document,{childList:!0,subtree:!0})}}window.onload=()=>{new j}})()})();