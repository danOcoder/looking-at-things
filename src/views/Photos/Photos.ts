import styles from "./Photos.module.css";

import View from "../../types/classes/View";
import { html } from "../../constants";
import { PhotoData } from "../../types/api";
import HeartIcon from "../../assets/heart.svg";

type State = PhotoData.Photo[];

class Photos extends View<State> {
  constructor(parentElement: HTMLElement) {
    super(parentElement);
  }

  generateMarkup(state: State) {
    const chunk = Math.floor(state.length / 3);

    const stateCopy = [...state];

    const columns: PhotoData.Photo[][] = Array.from({ length: 3 }).map((_, i, arr) => {
      if (i < arr.length - 1) {
        return stateCopy.splice(0, chunk);
      } else {
        return stateCopy.splice(0);
      }
    });

    const longestColIdx = columns.reduce(
      (acc, curr, i) => {
        if (curr.length > acc.length) {
          acc = { length: curr.length, idx: i };
        }

        return acc;
      },
      { length: 0, idx: 0 }
    ).idx;

    const shortCols = columns.filter((_, i) => i !== longestColIdx);

    return [shortCols[0], columns[longestColIdx], shortCols[1]]
      .map((col) => {
        return html`
          <div class="${styles["container__uber"]}">
            ${col
              .map((photo) => {
                const { id, urls, alt_description, user, width, height } = photo;
                const { name } = user;
                const { regular } = urls;
                const { portfolio_url } = user.social;

                const isLandScape = width > height;

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
                      <button
                        id="${id}-photo-btn"
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
                        />
                      </button>
                    </div>
                    <div class=${styles["container__details"]}>
                      ${nameEl.outerHTML}
                      <button
                        aria-label="Indicate saved"
                        class=${styles["btn__save"]}
                        id="${id}-save-btn"
                        name="save"
                      >
                        <svg width="35px" height="35px">
                          <use
                            class=${styles["icon__saved"]}
                            id="${id}-saved"
                            href="${HeartIcon}#outline"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                `;
              })
              .toString()
              .replace(/,/g, "")}
          </div>
        `;
      })
      .toString()
      .replace(/,/g, "");

    // return html`
    //   ${state
    //     .map((photo) => {
    //       const { id, urls, alt_description, user, width, height } = photo;
    //       const { name } = user;
    //       const { regular } = urls;
    //       const { portfolio_url } = user.social;

    //       const isLandScape = width > height;

    //       const nameText = name ? name : "Unknown";
    //       let nameEl;

    //       if (portfolio_url) {
    //         nameEl = document.createElement("a");
    //         nameEl.href = portfolio_url;
    //         nameEl.textContent = nameText;
    //         nameEl.target = "_blank";
    //         nameEl.rel = "noopener noreferrer";
    //         nameEl.setAttribute("aria-label", `Visit ${nameText}'s portfolio`);
    //         nameEl.classList.add(styles["text__name"], styles["text__name--link"]);
    //       } else {
    //         nameEl = document.createElement("p");
    //         nameEl.textContent = nameText;
    //         nameEl.classList.add(styles["text__name"]);
    //       }

    //       return html`
    //         <div class=${styles["container__card"]}>
    //           <div class=${styles["container__photo--uber"]}>
    //             <button
    //               id="${id}-photo-btn"
    //               class="${[
    //                 styles["container__photo"],
    //                 isLandScape && styles["container__photo--landscape"],
    //               ].join(" ")}"
    //             >
    //               <img
    //                 class="${[
    //                   styles["img__photo"],
    //                   isLandScape && styles["img__photo--landscape"],
    //                 ].join(" ")}"
    //                 src=${regular}
    //                 alt=${alt_description}
    //               />
    //             </button>
    //           </div>
    //           <div class=${styles["container__details"]}>
    //             ${nameEl.outerHTML}
    //             <button
    //               aria-label="Indicate saved"
    //               class=${styles["btn__save"]}
    //               id="${id}-save-btn"
    //               name="save"
    //             >
    //               <svg width="35px" height="35px">
    //                 <use
    //                   class=${styles["icon__saved"]}
    //                   id="${id}-saved"
    //                   href="${HeartIcon}#outline"
    //                 />
    //               </svg>
    //             </button>
    //           </div>
    //         </div>
    //       `;
    //     })
    //     .toString()
    //     .replace(/,/g, "")}
    // `;
  }

  onSave(photoIds: string[], cb: (id: string) => void) {
    photoIds.forEach((id) => {
      const saveBtn = document.getElementById(`${id}-save-btn`) as HTMLButtonElement;

      saveBtn.addEventListener("click", () => {
        cb(id);
      });
    });
  }

  onDialogOpen(photoIds: string[], cb: (id: string) => void) {
    photoIds.forEach((id) => {
      const photoBtn = document.getElementById(`${id}-photo-btn`) as HTMLImageElement;

      photoBtn.addEventListener("click", () => {
        cb(id);
      });
    });
  }
}

const photos = new Photos(document.getElementById("photos_container") as HTMLElement);

export default photos;
