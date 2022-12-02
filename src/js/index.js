import css from "../scss/style.scss";

import arrowImageData from '../img/arrow.svg';
import btnImageData from '../img/blade-logo.svg';

import {isMobile, translate} from "./utils.js";
import {attributes} from "./models.js";

const SELECTOR = "blade-nft-purchase";

class BladeAirdrop {
  constructor() {
    this.overlay;
    this.stateAttribute = "data-waiting";
    this.isBladeInstalled = false;
    document.addEventListener("hederaWalletLoaded", () => {
      this.isBladeInstalled = true;
    });

    document.querySelectorAll(`.${SELECTOR}`).forEach(this.createButton.bind(this));
    this.observeNewPlaceholders();
  }

  createButton(placeholder) {
    const btn = document.createElement("button");
    btn.innerHTML = translate("btnLabelConnect");
    btn.className = `${SELECTOR}__btn`
    btn.type = "button";
    const img = document.createElement("img");
    img.src = btnImageData;
    img.className = `${SELECTOR}__btn-img`;
    btn.prepend(img);

    placeholder.setAttribute(this.stateAttribute, false)
    placeholder.appendChild(btn);
    this.addBtnListener(btn, placeholder);
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
    this.overlay.className = `${SELECTOR}__overlay`;
    document.body.appendChild(this.overlay);

    const popup = document.createElement("div");
    popup.className = `${SELECTOR}__popup`;
    popup.innerHTML = translate("popupMessage");
    this.overlay.appendChild(popup);

    const img = document.createElement("img");
    img.src = arrowImageData;
    img.className = `${SELECTOR}__popup-img`;
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

  observeNewPlaceholders() {
    const observer = new MutationObserver((mutations) => {
      const placeholders = [];
      mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
          if (node.ELEMENT_NODE) {
            placeholders.push(...node.querySelectorAll(`.${SELECTOR}`));
            if (node.classList.contains(SELECTOR)) {
              placeholders.push(node);
            }
          }
        });
      });
      placeholders.forEach(this.createButton.bind(this));
    });

    observer.observe(document, {childList: true, subtree: true});
  }
}

window.onload = () => {
  new BladeAirdrop();
};
