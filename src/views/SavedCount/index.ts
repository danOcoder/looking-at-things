import styles from "./styles.module.css";

import View from "../../types/classes/View";
import { html } from "../../constants";
import HeartIcon from "../../assets/heart.svg";

type State = number;

class SavedCount extends View<State> {
  constructor(parentElement: HTMLElement) {
    super(parentElement);
  }

  generateMarkup(state: State) {
    return html`
      <span
        class="${styles["text__count"]}${state
          ? " " + styles["text__count--visible"]
          : ""}"
        >${state}</span
      >
      <svg width="85px" height="85px" class="${state ? "icon__heart--filled" : ""}">
        <use href="${HeartIcon}#${state ? "filled" : "outline"}" />
      </svg>
    `;
  }
}

const savedLink = new SavedCount(document.getElementById("saved") as HTMLElement);

export default savedLink;
