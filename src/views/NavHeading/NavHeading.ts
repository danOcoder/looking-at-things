import styles from "./NavHeading.module.css";

import { html } from "../../constants";
import Logo from "../../assets/logo.png";

class NavHeading {
  constructor(private parentElement: HTMLElement) {}

  generateMarkup() {
    return html`
      <div class=${styles["container__logo"]}>
        <img class=${styles["img__logo"]} src=${Logo} alt="" />
      </div>
      <h1 class=${styles["text__heading"]}>Looking At Things</h1>
    `;
  }

  render() {
    this.parentElement.insertAdjacentHTML("afterbegin", this.generateMarkup());
  }
}

const navHeading = new NavHeading(document.getElementById("nav-heading") as HTMLElement);

export default navHeading;
