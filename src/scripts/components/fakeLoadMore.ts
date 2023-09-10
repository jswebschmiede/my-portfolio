class FakeLoadMore {
  private element: HTMLElement;
  private elementItems: NodeListOf<HTMLElement>;
  private loadmoreBtn: HTMLElement | null;

  constructor(element: HTMLElement) {
    this.element = element;
    this.elementItems = this.element.querySelectorAll("article");
    this.loadmoreBtn = document.querySelector(".ajax-load-more") || null;

    this.init();
  }

  private init(): void {
    if (!this.loadmoreBtn) {
      console.error("No loadmore button found");
      return;
    }

    this.loadmoreBtn.addEventListener("click", this.handleClick);
  }

  private handleClick = (event: Event): void => {
    event.preventDefault();
    event.stopPropagation();

    let k = 6;
    let j = this.elementItems.length;
    const range = `article:nth-child(n+${k}):nth-child(-n+${j})`;

    this.element.querySelectorAll(range).forEach((item) => {
      item.setAttribute("style", "display: block");
    });

    if (this.elementItems.length <= j) {
      this.loadmoreBtn?.classList.add("hidden");
    } else {
      k += 5;
      j += 5;
    }
  };
}

export { FakeLoadMore };
