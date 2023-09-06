class AnimatedBtn {
  private element: HTMLElement;
  private mobileNav: HTMLElement;
  private ariaExpanded: boolean = false;

  constructor(element: HTMLElement) {
    this.element = element;
    this.mobileNav = document.getElementById("mobile-nav") as HTMLElement;
    this.element.addEventListener("click", this.clickHandler);
    this.init();
  }

  private init = () => {
    this.setCurrentPage();
    this.addClickHandler();
    (window as any).AnimateBtn = this;
  };

  private clickHandler = (e: Event) => {
    e.preventDefault();
    this.toggleBtn();
  };

  private removeClickHandler() {
    this.element.removeEventListener("click", this.clickHandler);
  }

  private addClickHandler() {
    this.element.addEventListener("click", this.clickHandler);
  }

  public destroy() {
    this.removeClickHandler();
    this.updateAriaExpanded(false);
    this.toggleMobileNav(false);
  }

  private setCurrentPage = () => {
    const navLinks = Array.from(this.mobileNav.querySelectorAll("a"));

    // Set aria-current and active nav link
    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      const path = window.location.pathname;
      const span = link.children[0] as HTMLElement | null;

      if (span) {
        if (href === path) {
          link.setAttribute("aria-current", "page");
          span.classList.add("w-5", "bg-whitegreen-100");
        } else {
          link.removeAttribute("aria-current");
          span.classList.remove("w-5", "bg-whitegreen-100");
          span.classList.add("w-0", "bg-whitegreen-100");
        }
      }
    });
  };

  private toggleMobileNav = (show: boolean = true) => {
    if (this.mobileNav) {
      this.mobileNav.classList.toggle("hidden", !show);
    }
  };

  private updateAriaExpanded(expanded: boolean) {
    this.ariaExpanded = expanded;
    this.element.setAttribute("aria-expanded", expanded.toString());
  }

  private toggleBtn = () => {
    this.updateAriaExpanded(!this.ariaExpanded);
    this.toggleMobileNav(this.ariaExpanded);
  };
}

export { AnimatedBtn };
