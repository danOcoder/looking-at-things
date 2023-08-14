import { html } from "../../constants";

export default abstract class View<T> {
  protected readonly parentElement: HTMLElement;
  private errorMessage: string;

  constructor(parentElement: HTMLElement, errorMessage: string) {
    this.parentElement = parentElement;
    this.errorMessage = errorMessage;
  }

  abstract generateMarkup(data: T): string;

  render(data: T) {
    if (data === "" || (Array.isArray(data) && !data.length)) {
      return this.renderError();
    }

    // generate new markup
    const markup = this.generateMarkup(data);

    // clear current markup
    this.clear();

    // append new markup
    this.parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  private clear() {
    this.parentElement.innerHTML = "";
  }

  private renderError(message = this.errorMessage) {
    if (!message) {
      return;
    }

    const markup = html`
      <div class="error">
        <span> 💥💥💥 </span>
        <p>${message}</p>
      </div>
    `;

    this.clear();

    this.parentElement.insertAdjacentHTML("afterbegin", markup);
  }
}
