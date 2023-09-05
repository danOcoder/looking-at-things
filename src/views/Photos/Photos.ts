import styles from "./Photos.module.css";
import utils from "../../styles/utils.module.css";

import View from "../../types/classes/View";
import { html } from "../../constants";
import { PhotoData } from "../../types/api";
import HeartIcon from "../../assets/heart.svg";

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
interface State {
  data: PhotoData.Photo[];
  saved: string[];
}

class Photos extends View<State> {
  constructor(parentElement: HTMLElement, fallbackMessage: string) {
    super(parentElement, fallbackMessage);
  }

  generateMarkup(state: State): string {
    const { data, saved } = state;

    return html`
      <div class="${[styles["container__uber"], utils["container"]].join(" ")}">
        ${data
          .map((photo) => {
            const { id, urls, alt_description, user } = photo;
            const { name } = user;
            const { regular } = urls;
            const { portfolio_url } = user.social;

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
              <div class="${styles["container__card"]}">
                <div class="${styles["container__photo"]}">
                  <div class="${styles["container__photo--inner"]}">
                    <img
                      class="${styles["img__photo"]}"
                      src="${regular}"
                      alt="${alt_description}"
                      data-id="${id}"
                    />
                  </div>
                </div>
                <div class="${styles["container__details--outer"]}">
                  <div class="${styles["container__details--inner"]}">
                    ${nameEl.outerHTML}
                    <button class="${styles["btn__save"]}" id="${id}" name="save">
                      <svg
                        class="${[
                          utils["svg__heart"],
                          saved.includes(id) && utils["svg__heart--active"],
                        ].join(" ")}"
                        width="35px"
                        height="35px"
                      >
                        <use href="${HeartIcon}#heart" />
                      </svg>
                      <span class="${utils["visually-hidden"]}">Indicate saved</span>
                    </button>
                  </div>
                  <div class"${styles["container__socials"]}">
                    <a href="http://">
                    <span class="${utils["visually-hidden"]}">${
              user.name
            } Instagram</span>
                    </a>
                  </div>
                </div>
              </div>
            `;
          })
          .toString()
          .replace(/,/g, "")}
      </div>
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

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export default new Photos(document.getElementById("photos")!, "Nothing to see here...");
