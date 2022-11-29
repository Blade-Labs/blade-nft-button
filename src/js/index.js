import css from "../scss/style.scss";

import arrowImageData from '../img/arrow.svg';
import btnImageData from '../img/blade-logo.svg';

import {isMobile, translate} from "./utils.js";
import {attributes} from "./models.js"

class BladeAirdrop {
  constructor() {
    this.overlay;
    this.stateAttribute = "data-waiting";
    this.isBladeInstalled = false;
    this.init();
  }

  init() {
    document.addEventListener("hederaWalletLoaded", () => {
      this.isBladeInstalled = true;
    })

    document.querySelectorAll(".blade-nft-purchase")
      .forEach(ph => {
        const btn = document.createElement("button");
        btn.innerHTML = translate("btnLabelConnect");
        btn.className = "blade-nft-purchase__btn"
        btn.type = "button";
        const img = document.createElement("img");
        img.src = btnImageData;
        img.className = "blade-nft-purchase__btn-img";
        btn.prepend(img);

        ph.setAttribute(this.stateAttribute, false)
        ph.appendChild(btn);
        this.addBtnListener(btn, ph);
      });
  }

  addBtnListener(btn, ph) {
    btn.addEventListener('click', (e) => {
      this.actionClick(ph);
    })
  }

  actionClick(ph) {
    if (isMobile()) {
      const deeplink = this.generateDeeplink(ph);
      window.open(deeplink);
    } else {
      if (this.isBladeInstalled || window.bladeConnect) {
        this.createOverlay();
        ph.setAttribute(this.stateAttribute, true);
        this.observeBox(ph);
      } else {
        window.open(process.env.WEB_LINK);
      }
    }
  }

  createOverlay() {
    this.overlay = document.createElement("div");
    this.overlay.className = "blade-nft-purchase__overlay";
    document.body.appendChild(this.overlay);

    const popup = document.createElement("div");
    popup.className = "blade-nft-purchase__popup";
    popup.innerHTML = translate("popupMessage");
    this.overlay.appendChild(popup);

    const img = document.createElement("img");
    img.src = arrowImageData;
    img.className = "blade-nft-purchase__popup-img";
    popup.prepend(img);
  }

  generateDeeplink(ph) {
    let firebase = process.env.NODE_ENV === "development"
      ? process.env.F_DEEPLINK_DEV
      : process.env.F_DEEPLINK_PROD;
    let deeplink = new URL(process.env.DEEPLINK);
    const attributes = this.getAttributes(ph);

    for (let key in attributes) {
      deeplink.searchParams.set(key, attributes[key])
    }

    deeplink.search = encodeURIComponent(deeplink.search).replace("%3F", "");
    return firebase + deeplink + "&apn=org.bladelabs.wallet"; //&isi=1623849951&ibi=org.bladelabs.bladewallet"
  }

  getAttributes(ph) {
    const attrs = {};
    attributes.forEach(elem => {
      const value = ph.dataset[elem.attr];

      if (elem.required) {
        value
          ? attrs[elem.paramsTag] = value
          : console.error("Required param missing", elem.attr);
      } else {
        value
          ? attrs[elem.paramsTag] = value
          : delete attrs[elem.paramsTag];
      }
    });
    return attrs;
  }

  observeBox(ph) {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach(record => {
        if (record.target.dataset.waiting === "false" || !record.target.dataset.waiting) {
          this.overlay.remove();
          observer.disconnect();
        }
      })
    });

    observer.observe(ph, {attributes: true, attributeFilter: ["data-waiting"]});
  }
}

window.onload = () => {
  new BladeAirdrop();
};
