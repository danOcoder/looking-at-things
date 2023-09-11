import styles from "./SavedCount.module.css";

import View from "../../types/classes/View";
import { html } from "../../constants";
import HeartIcon from "../../assets/heart.svg";

type State = number;

class SavedCount extends View<State> {
  constructor(parentElement: HTMLElement) {
    super(parentElement, "");
  }

  generateMarkup(state: State) {
    return html`
      <span class="${styles["text__count"]}">${state}</span>
      <svg
        class="${["svg__heart", state !== 0 && "svg__heart--active"].join(" ")}"
        width="85px"
        height="85px"
      >
        <use href="${HeartIcon}#heart" />
      </svg>
    `;
  }
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const savedLink = new SavedCount(document.getElementById("saved")!);

export default savedLink;
