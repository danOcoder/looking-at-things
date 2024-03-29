import styles from "./styles.module.css";

import type { PhotoData } from "../../types/api";

import View from "../../types/classes/View";
import { html } from "../../constants";

type State = PhotoData.Photo;

class DialogImg extends View<State> {
  constructor(parentElement: HTMLElement) {
    super(parentElement);
  }

  generateMarkup(state: State): string {
    const { urls, alt_description, width, height } = state;
    const { regular } = urls;

    const isPortrait = width < height;

    return html`
      <div
        style="${isPortrait ? "aspect-ratio: 1 / 1.5;" : "aspect-ratio: 1.5 / 1;"}"
        class="${styles["container__img"]}"
      >
        <img class="${[styles["img"]].join(" ")}" src=${regular} alt=${alt_description} />
      </div>
    `;
  }
}

const dialogImg = new DialogImg(
  document.getElementById("photo-dialog-container") as HTMLElement
);

export default dialogImg;
