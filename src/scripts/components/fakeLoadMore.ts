class FakeLoadMore {
  private element: HTMLElement;
  private elementItems: NodeListOf<HTMLElement>;
  private loadmoreBtn: HTMLElement | null;
  private k = 5;
  private j = 9;

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

    const range = `article:nth-child(n+${this.k}):nth-child(-n+${this.j})`;

    console.log(range);

    this.element.querySelectorAll(range).forEach((item) => {
      item.setAttribute("style", "display: block");
    });

    if (this.elementItems.length <= this.j) {
      this.loadmoreBtn?.classList.add("hidden");
    } else {
      this.k += 4;
      this.j += 4;
    }
  };
}

export { FakeLoadMore };
