// import { html } from "../../constants";

export default abstract class View<T> {
  protected readonly parentElement: HTMLElement;
  // private fallbackMessage: string;

  constructor(
    parentElement: HTMLElement
    //  fallbackMessage: string
  ) {
    this.parentElement = parentElement;
    // this.fallbackMessage = fallbackMessage;
  }

  abstract generateMarkup(data: T): string;

  render(data: T) {
    // TODO: figure out how/when to handle this
    // if (!data) {
    //   this.renderFallback();
    // }

    const markup = this.generateMarkup(data);

    this.updateDOM(markup);
  }

  // private renderFallback() {
  //   const markup = html`
  //     <div>
  //       <p>${this.fallbackMessage}</p>
  //     </div>
  //   `;

  //   this.updateDOM(markup);
  // }

  private clear() {
    this.parentElement.innerHTML = "";
  }

  private updateDOM(markup: string) {
    // clear current markup
    this.clear();

    // insert new markup
    this.parentElement.insertAdjacentHTML("afterbegin", markup);
  }
}
