import { marked } from "./marked.js";

const markdown = (html, comp) => {
  comp = comp || document.body;
  comp.innerHTML = marked(html);
};

class MarkDown extends HTMLElement {
  constructor() {
    super();
    const src = this.getAttribute("src");
    if (src) {
      (async () => {
        const text = await (await fetch(src)).text();
        markdown(text, this);
      })();
    } else {
      markdown(this.textContent, this);
    }
  }
}

customElements.define("mark-down", MarkDown);

export { markdown };
