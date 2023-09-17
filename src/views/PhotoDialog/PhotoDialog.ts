import styles from "./PhotoDialog.module.css";

import type { PhotoData } from "../../types/api";

import View from "../../types/classes/View";
import { html } from "../../constants";

type State = PhotoData.Photo;

class PhotoDialogImg extends View<State> {
  constructor(parentElement: HTMLElement) {
    super(parentElement, "");
  }

  generateMarkup(state: State): string {
    const { urls, alt_description, width, height } = state;
    const { regular } = urls;

    const isPortrait = width < height;

    return html`
      <div
        class="${[
          styles["container__img"],
          isPortrait && styles["container__img--portrait"],
        ].join(" ")}"
      >
        <img class="${[styles["img"]].join(" ")}" src=${regular} alt=${alt_description} />
      </div>
    `;
  }
}

const photoDialog = new PhotoDialogImg(
  document.getElementById("photo-dialog-container") as HTMLElement
);

export default photoDialog;
