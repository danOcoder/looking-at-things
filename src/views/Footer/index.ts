import styles from "./styles.module.css";
import { html } from "../../constants";

import Linkedin from "../../assets/linkedin.png";
import Github from "../../assets/github.png";

const Footer = () => {
  const markup = html` <div class="${styles["container__uber"]}">
      <p class="${styles["text__spacer"]}">Dan O'Connor</p>
      <p class="${styles["text__spacer"]}">Front-End Engineer</p>
      <div class="${styles["container__socials"]}">
        <a
          class="${styles["link__social"]}"
          href="http://www.linkedin.com/in/danocoder"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="visually-hidden">Connect with me on LinkedIn</span
          ><img class="${styles["img__logo"]}" src="${Linkedin}" alt=""
        /></a>
        <span class="${styles["text__spacer"]}"></span>
        <a
          class="${styles["link__social"]}"
          href="https://github.com/danOcoder?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          ><span class="visually-hidden"> View my projects on Github</span
          ><img class="${styles["img__logo"]}" src="${Github}" alt=""
        /></a>
      </div>
    </div>

    <p class="${styles["text__copyright"]}">© 2023 (jk you can totally copy this)</p>`;

  const parentElement = document.getElementById("footer") as HTMLElement;

  parentElement.insertAdjacentHTML("afterbegin", markup);
};

export default Footer;
