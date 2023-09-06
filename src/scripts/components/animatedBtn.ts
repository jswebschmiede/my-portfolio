class AnimatedBtn {
  private element: HTMLElement;
  private mobileNav: HTMLElement;

  constructor(element: HTMLElement) {
    this.element = element;
    this.mobileNav = document.getElementById("mobile-nav") as HTMLElement;
    this.element.addEventListener("click", this.toggleBtn);
    this.init();
  }

  init = () => {
    this.setCurrentPage();
  };

  setCurrentPage = () => {
    const navLinks = Array.from(this.mobileNav.querySelectorAll("a"));

    // set aria-current and active nav link
    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      const path = window.location.pathname;
      const span = link.children[0];

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

  toggleMobileNav = () => {
    if (this.mobileNav) {
      this.mobileNav.classList.toggle("hidden");
    }
  };

  toggleBtn = () => {
    // toggle aria-expanded
    const ariaExpanded = this.element.getAttribute("aria-expanded");
    if (ariaExpanded === "true") {
      this.element.setAttribute("aria-expanded", "false");
      this.toggleMobileNav();
    } else {
      this.element.setAttribute("aria-expanded", "true");
      this.toggleMobileNav();
    }
  };
}

export { AnimatedBtn };
