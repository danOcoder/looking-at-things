import "../styles/normalize.css";
import "../styles/reset.css";
import "../styles/index.css";

import model from "../models/home";
import Nav from "../views/Nav/Nav";

// init
(() => {
  Nav.render(model.state.saved.length);
})();
