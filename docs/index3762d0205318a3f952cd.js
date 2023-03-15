(()=>{"use strict";var e={807:(e,t,r)=>{r.d(t,{Z:()=>s});var a=r(81),n=r.n(a),o=r(645),i=r.n(o)()(n());i.push([e.id,".blade-nft-purchase__btn{width:100%;padding:.8em;border:none;display:flex;flex-direction:row;justify-content:center;align-items:center;color:#000;font-weight:500;font-size:1em;background-color:#f45f23 !important;cursor:pointer}.blade-nft-purchase__btn-img{width:1.2em;height:1.2em;margin-right:.4em;display:none}.blade-nft-purchase__overlay{display:block;overflow:hidden;position:fixed;top:0;left:0;width:100%;height:100%;backdrop-filter:blur(3px);background-color:rgba(244,95,35,.15)}.blade-nft-purchase__popup{position:absolute;top:150px;right:200px;width:100%;max-width:280px;padding:18px 22px;background:#f45f23;box-shadow:0 4px 4px rgba(244,95,35,.25);border-radius:16px;color:#000;font-weight:500;font-size:1em;line-height:1.4;text-align:center}.blade-nft-purchase__popup-img{display:block;position:absolute;top:50%;transform:translateY(-100%);right:-58px;width:64px;height:196px}",""]);const s=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",a=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),a&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),a&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,a,n,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(a)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);a&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),n&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=n):d[4]="".concat(n)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function r(e){for(var r=-1,a=0;a<t.length;a++)if(t[a].identifier===e){r=a;break}return r}function a(e,a){for(var o={},i=[],s=0;s<e.length;s++){var c=e[s],l=a.base?c[0]+a.base:c[0],d=o[l]||0,p="".concat(l," ").concat(d);o[l]=d+1;var u=r(p),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(h);else{var g=n(h,a);a.byIndex=s,t.splice(s,0,{identifier:p,updater:g,references:1})}i.push(p)}return i}function n(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,n){var o=a(e=e||[],n=n||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var s=r(o[i]);t[s].references--}for(var c=a(e,n),l=0;l<o.length;l++){var d=r(o[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}o=c}}},569:e=>{var t={};e.exports=function(e,r){var a=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(r)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var a="";r.supports&&(a+="@supports (".concat(r.supports,") {")),r.media&&(a+="@media ".concat(r.media," {"));var n=void 0!==r.layer;n&&(a+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),a+=r.css,n&&(a+="}"),r.media&&(a+="}"),r.supports&&(a+="}");var o=r.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function r(a){var n=t[a];if(void 0!==n)return n.exports;var o=t[a]={id:a,exports:{}};return e[a](o,o.exports,r),o.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.nc=void 0,(()=>{var e=r(379),t=r.n(e),a=r(795),n=r.n(a),o=r(569),i=r.n(o),s=r(565),c=r.n(s),l=r(216),d=r.n(l),p=r(589),u=r.n(p),h=r(807),g={};g.styleTagTransform=u(),g.setAttributes=c(),g.insert=i().bind(null,"head"),g.domAPI=n(),g.insertStyleElement=d(),t()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals;const f={btnLabelConnect:"Purchase NFT",popupMessage:"Click on Blade Wallet icon from your browser extensions panel and follow instructions."},b=e=>f[e]??"",m=[{attr:"useTestnet",required:!0,paramsTag:"useTestnet"},{attr:"dappCode",required:!0,paramsTag:"dApp_code"},{attr:"dappNonce",required:!1,paramsTag:"dApp_nonce"},{attr:"tokenId",required:!0,paramsTag:"tokenId"},{attr:"serial",required:!1,paramsTag:"serial"},{attr:"price",required:!0,paramsTag:"price"},{attr:"currency",required:!1,paramsTag:"currency"}],v="blade-nft-purchase";class y{constructor(){this.overlay,this.stateAttribute="data-waiting",this.isBladeInstalled=!1,document.addEventListener("hederaWalletLoaded",(()=>{this.isBladeInstalled=!0})),document.querySelectorAll(`.${v}`).forEach(this.createButton.bind(this)),this.observeNewPlaceholders()}createButton(e){const t=document.createElement("button");t.innerHTML=b("btnLabelConnect"),t.className=`${v}__btn`,t.type="button";const r=document.createElement("img");r.src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSIxNyIgaGVpZ2h0PSIxNyIgcng9IjguNSIgc3Ryb2tlPSIjQjFCMUIxIi8+CjxwYXRoIGQ9Ik03LjQwNjc2IDExLjg5MjJMOC41NjM4MyA5LjA1NDFMNy42MzU2IDYuNzI0MzdMNC43OTk5OSAxMy43OTJMMTAuNDQ1NSAxMy44MDAyTDkuNjk0NTYgMTEuODkyMkg3LjQwNjc2WiIgZmlsbD0iI0VFRUVFRSIvPgo8cGF0aCBkPSJNOC42OTk1NCAzTDguMDE0NDkgNC43MjMzNEw3Ljk4NjkgNC43OTE4MUM3LjgyODU2IDUuMjUwOTcgNy43NzU5OSA1LjczOTc5IDcuODMzMSA2LjIyMTk4QzcuODUxNjUgNi40MTczMyA3Ljg5MTAxIDYuNjEwMTYgNy45NTA1MSA2Ljc5NzIxQzcuOTYyMjUgNi44MzI5MSA3Ljk3NDU4IDYuODY4MDIgNy45ODgwOCA2LjkwMTk2TDEwLjc1NyAxMy44SDEzLjA3OThMOC42OTk1NCAzWiIgZmlsbD0iI0VFRUVFRSIvPgo8L3N2Zz4K",r.className=`${v}__btn-img`,t.prepend(r),e.setAttribute(this.stateAttribute,!1),e.appendChild(t),this.addBtnListener(t,e)}addBtnListener(e,t){e.addEventListener("click",(e=>{this.actionClick(t)}))}actionClick(e){if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){const t=this.generateDeeplink(e);window.open(t)}else this.isBladeInstalled||window.bladeConnect?(this.createOverlay(),e.setAttribute(this.stateAttribute,!0),this.observeBox(e)):window.open("https://chrome.google.com/webstore/detail/blade-%E2%80%93-hedera-web3-digit/abogmiocnneedmmepnohnhlijcjpcifd")}createOverlay(){this.overlay=document.createElement("div"),this.overlay.className=`${v}__overlay`,document.body.appendChild(this.overlay);const e=document.createElement("div");e.className=`${v}__popup`,e.innerHTML=b("popupMessage"),this.overlay.appendChild(e)}generateDeeplink(e){let t=new URL("https://api.bladewallet.io/mobile/profile/attachAccount");const r=this.getAttributes(e);for(let e in r)t.searchParams.set(e,r[e]);return t.search=encodeURIComponent(t.search).replace("%3F",""),"https://link.bladewallet.io/?link="+t+"&apn=org.bladelabs.wallet&isi=1623849951&ibi=org.bladelabs.bladewallet"}getAttributes(e){const t={};return m.forEach((r=>{const a=e.dataset[r.attr];r.required?a?t[r.paramsTag]=a:console.error("Required param missing",r.attr):a?t[r.paramsTag]=a:delete t[r.paramsTag]})),t}observeBox(e){const t=new MutationObserver((e=>{e.forEach((e=>{"false"!==e.target.dataset.waiting&&e.target.dataset.waiting||(this.overlay.remove(),t.disconnect())}))}));t.observe(e,{attributes:!0,attributeFilter:["data-waiting"]})}observeNewPlaceholders(){new MutationObserver((e=>{const t=[];e.forEach((e=>{e.addedNodes.forEach((e=>{e.nodeType===e.ELEMENT_NODE&&(t.push(...e.querySelectorAll(`.${v}`)),e.classList.contains(v)&&t.push(e))}))})),t.forEach(this.createButton.bind(this))})).observe(document,{childList:!0,subtree:!0})}}window.onload=()=>{new y}})()})();