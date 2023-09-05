import styles from "./Nav.module.css";
import utils from "../../styles/utils.module.css";

import View from "../../types/classes/View";
import { html } from "../../constants";
import Logo from "../../assets/logo.png";
import HeartIcon from "../../assets/heart.svg";

type State = number;

class Nav extends View<State> {
  constructor(parentElement: HTMLElement) {
    super(parentElement, "");
  }

  generateMarkup(state: State) {
    const url = new URL(document.URL);
    const { pathname } = url;

    return html`
      <nav class="${[styles["container__uber"], utils["container"]].join(" ")}">
        <div class=${styles["container__uber--inner"]}>
          <div class=${styles["container__heading"]}>
            <div class=${styles["container__logo"]}>
              <img class=${styles["img__logo"]} src=${Logo} alt="" />
            </div>
            <h1 class=${styles["text__heading"]}>Looking At Things</h1>
          </div>

          <a class=${styles["link__saved"]} href="${process.env.SAVED_PAGE_ROUTE}">
            <span class="${styles["text__count"]}">${state}</span>
            <svg
              class="${[
                utils["svg__heart"],
                state !== 0 && utils["svg__heart--active"],
              ].join(" ")}"
              width="85px"
              height="85px"
            >
              <use href="${HeartIcon}#heart" />
            </svg>
          </a>
        </div>

        <a
          class="${[
            pathname === process.env.SAVED_PAGE_ROUTE ? utils["show"] : utils["hide"],
          ].join(" ")}"
          href="/"
          >back</a
        >
      </nav>
    `;
  }
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export default new Nav(document.getElementById("header")!);
