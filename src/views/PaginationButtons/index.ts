import styles from "./styles.module.css";

import type { DataType } from "../../models/data";

import { html } from "../../constants";
import NextIcon from "../../assets/next.svg";
import PreviousIcon from "../../assets/previous.svg";

class PaginationButtons {
  constructor(private parentElement: HTMLElement) {}

  generateMarkup(): string {
    return html`
      <div class=${styles["container__inner"]}>
        <button id="prev-page-btn" aria-label="Previous Page" class=${styles["btn"]}>
          <svg width="65px" height="65px">
            <use href="${PreviousIcon}#previous" />
          </svg>
        </button>
        <button id="next-page-btn" aria-label="Next Page">
          <svg width="65px" height="65px">
            <use href="${NextIcon}#next" />
          </svg>
        </button>
      </div>
    `;
  }

  render() {
    this.parentElement.insertAdjacentHTML("afterbegin", this.generateMarkup());
  }

  onNextPage(cb: (e: MouseEvent) => void) {
    const nextBtnEl = document.getElementById("next-page-btn") as HTMLButtonElement;

    nextBtnEl.addEventListener("click", cb);
  }

  onPreviousPage(cb: () => void) {
    const prevBtnEl = document.getElementById("prev-page-btn") as HTMLButtonElement;

    prevBtnEl.addEventListener("click", cb);
  }

  onPageChange(page: number, data: DataType) {
    console.log("data", data);

    const prevPageBtn = document.getElementById("prev-page-btn") as HTMLButtonElement;
    const nextPageBtn = document.getElementById("next-page-btn") as HTMLButtonElement;

    if (data.length === 0) {
      prevPageBtn.disabled = true;
      prevPageBtn.classList.add("btn__disabled");

      nextPageBtn.disabled = true;
      nextPageBtn.classList.add("btn__disabled");

      return;
    }

    if (prevPageBtn && nextPageBtn) {
      if (page === 0) {
        prevPageBtn.disabled = true;
        prevPageBtn.classList.add("btn__disabled");
      } else {
        prevPageBtn.disabled = false;
        prevPageBtn.classList.remove("btn__disabled");
      }

      if (page === data.length - 1) {
        nextPageBtn.disabled = true;
        nextPageBtn.classList.add("btn__disabled");
      } else {
        nextPageBtn.disabled = false;
        nextPageBtn.classList.remove("btn__disabled");
      }
    }
  }
}

const paginationButtons = new PaginationButtons(
  document.getElementById("pagination_buttons") as HTMLElement
);

export default paginationButtons;
