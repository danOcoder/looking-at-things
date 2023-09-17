import styles from "./Photos.module.css";

import View from "../../types/classes/View";
import { html } from "../../constants";
import { PhotoData } from "../../types/api";
import HeartIcon from "../../assets/heart.svg";

type State = PhotoData.Photo[];

class Photos extends View<State> {
  constructor(parentElement: HTMLElement, fallbackMessage: string) {
    super(parentElement, fallbackMessage);
  }

  generateMarkup(state: State): string {
    return html`
      ${state
        .map((photo) => {
          const { id, urls, alt_description, user, width, height } = photo;
          const { name } = user;
          const { regular } = urls;
          const { portfolio_url } = user.social;

          const isLandScape = width > height;

          console.log("isLandScape", isLandScape);

          const nameText = name ? name : "Unknown";
          let nameEl;

          if (portfolio_url) {
            nameEl = document.createElement("a");
            nameEl.href = portfolio_url;
            nameEl.textContent = nameText;
            nameEl.target = "_blank";
            nameEl.rel = "noopener noreferrer";
            nameEl.setAttribute("aria-label", `Visit ${nameText}'s portfolio`);
            nameEl.classList.add(styles["text__name"], styles["text__name--link"]);
          } else {
            nameEl = document.createElement("p");
            nameEl.textContent = nameText;
            nameEl.classList.add(styles["text__name"]);
          }

          return html`
            <div class=${styles["container__card"]}>
              <div class=${styles["container__photo--uber"]}>
                <div
                  class="${[
                    styles["container__photo"],
                    isLandScape && styles["container__photo--landscape"],
                  ].join(" ")}"
                >
                  <img
                    class="${[
                      styles["img__photo"],
                      isLandScape && styles["img__photo--landscape"],
                    ].join(" ")}"
                    src=${regular}
                    alt=${alt_description}
                    id=${id}
                  />
                </div>
              </div>
              <div class=${styles["container__details"]}>
                ${nameEl.outerHTML}
                <button class=${styles["btn__save"]} id=${id} name="save">
                  <svg id="${id}-saved" class="svg__heart" width="35px" height="35px">
                    <use href="${HeartIcon}#heart" />
                  </svg>
                  <span class="visually-hidden">Indicate saved</span>
                </button>
              </div>
            </div>
          `;
        })
        .toString()
        .replace(/,/g, "")}
    `;
  }

  handleSave(photoIds: string[], cb: (id: string) => void) {
    photoIds.forEach((id) => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const saveBtn = document.getElementById(id)!;

      saveBtn.addEventListener("click", () => {
        cb(id);
      });
    });
  }
}

const photos = new Photos(
  document.getElementById("photos_container") as HTMLElement,
  "Nothing to see here..."
);

export default photos;
