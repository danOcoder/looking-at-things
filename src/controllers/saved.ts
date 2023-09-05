import "../styles/normalize.css";
import "../styles/reset.css";
import "../styles/index.css";

import { saved } from "../models/saved";
import Nav from "../views/Nav/Nav";

// init
(() => {
  const { state: savedState } = saved;

  Nav.render(savedState.length);
})();
