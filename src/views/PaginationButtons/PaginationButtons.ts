import styles from "./PaginationButtons.module.css";

import View from "../../types/classes/View";
import { html } from "../../constants";

type State = {
  currentPage: number;
  totalPages: number;
};

class PaginationButtons extends View<State> {
  constructor(parentElement: HTMLElement) {
    super(parentElement, "");
  }

  generateMarkup(state: State): string {
    console.log("state", state);

    return html`
      <div class=${styles["container__inner"]}>
        <button
          class=${styles["btn__page"]}
          id="prev-page-btn"
          aria-label="Previous Page"
        >
          Previous Page
        </button>
        <button class=${styles["btn__page"]} id="next-page-btn" aria-label="Next Page">
          Next Page
        </button>
      </div>
    `;
  }

  handleIncrementPage(cb: () => void) {
    const nextBtnEl = document.getElementById("next-page-btn") as HTMLButtonElement;

    nextBtnEl.addEventListener("click", cb);
  }

  handleDecrementPage(cb: () => void) {
    const prevBtnEl = document.getElementById("prev-page-btn") as HTMLButtonElement;

    prevBtnEl.addEventListener("click", cb);
  }
}

const paginationButtons = new PaginationButtons(
  document.getElementById("pagination_buttons") as HTMLElement
);

export default paginationButtons;
