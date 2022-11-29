import { attributes } from "./models.js"

class Demo{
  constructor() {
    this.$btn;
    this.$box;
    this.dangerClass = "border-red-500";

    this.init();
  }

  init() {
    this.$btn = document.querySelector("#customBtn");
    this.$box = document.querySelector(".blade-nft-purchase");

    this.$btn.addEventListener("click", (e) => {
      e.preventDefault();
      this.setValues();
    })
  }

  setValues() {
    attributes.forEach(elem => {
      const input = document.querySelector(`#${elem.attr}`);
      const newVal = input.value;

      if (elem.required) {
        if (newVal) {
          input.classList.remove(this.dangerClass);
          this.$box.dataset[elem.attr] = newVal;
        } else {
          input.classList.add(this.dangerClass);
        }
      } else {
        if (newVal) {
          this.$box.dataset[elem.attr] = newVal;
        } else {
          this.$box.dataset[elem.attr] = "";
        }
      }
    });
  }
}

new Demo();
