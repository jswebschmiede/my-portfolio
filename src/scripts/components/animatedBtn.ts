import { twMerge } from "tailwind-merge";

class AnimatedBtn {
  private element: HTMLElement;

  constructor(element: HTMLElement) {
    this.element = element;
    this.element.addEventListener("click", this.toggleBtn);
  }

  init = () => {};

  toggleBtn = () => {
    // toggle aria-expanded
    const ariaExpanded = this.element.getAttribute("aria-expanded");
    if (ariaExpanded === "true") {
      this.element.setAttribute("aria-expanded", "false");
    } else {
      this.element.setAttribute("aria-expanded", "true");
    }
  };
}

export { AnimatedBtn };
