import styles from "./styles.module.css";

import { html } from "../../constants";
import Logo from "../../assets/logo.png";

const navHeading = () => {
  const markup = html`
    <div class=${styles["container__logo"]}>
      <img class=${styles["img__logo"]} src=${Logo} alt="" />
    </div>
    <h1 class=${styles["text__heading"]}>Looking At Things</h1>
  `;

  const parentElement = document.getElementById("nav-heading") as HTMLElement;

  parentElement.insertAdjacentHTML("afterbegin", markup);
};

export default navHeading;
