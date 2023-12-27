import styles from "./styles.module.css";

import View from "../../types/classes/View";
import { html } from "../../constants";
import SearchIcon from "../../assets/search.svg";

type State = string;

class Search extends View<State> {
  constructor(parentElement: HTMLElement) {
    super(parentElement);
  }

  generateMarkup(state: State) {
    return html`
      <form id="search-form" class="${styles["container__form"]}">
        <div class="${styles["container__input"]}">
          <label for="search-input" class="visually-hidden">Search for things</label>
          <input
            id="search-query"
            name="search-query"
            class="${styles["input__query"]}"
            type="text"
            placeholder="Search for things"
            value="${state}"
            required
          />
          <button
            id="clear-button"
            class="${styles["btn__clear"]}"
            aria-label="Clear search query"
            type="button"
          >
            <svg width="20px" height="20px">
              <use href="${SearchIcon}#clear" />
            </svg>
          </button>
        </div>
        <button
          id="search-button"
          class="${styles["btn__search"]}"
          type="submit"
          aria-label="Search"
        >
          <svg width="30px" height="30px">
            <use href="${SearchIcon}#search" />
          </svg>
        </button>
      </form>
      <button id="random-button" class="${styles["btn__random"]}">
        See random things
      </button>
    `;
  }

  onSubmit(cb: (event: SubmitEvent) => void) {
    const form = document.getElementById("search-form") as HTMLFormElement;

    form.addEventListener("submit", cb);
  }

  onRandom(cb: () => void) {
    const btn = document.getElementById("random-button") as HTMLButtonElement;

    btn.addEventListener("click", cb);
  }

  onClear(cb: () => void) {
    const btn = document.getElementById("clear-button") as HTMLButtonElement;

    btn.addEventListener("click", cb);
  }
}

const search = new Search(document.getElementById("search") as HTMLElement);

export default search;
