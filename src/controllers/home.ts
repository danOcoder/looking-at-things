import "../styles/normalize.css";
import "../styles/reset.css";
import "../styles/index.css";

import { react } from "signia";
import { saved } from "../models/saved";
import { data } from "../models/data";
import Nav from "../views/Nav/Nav";
import Photos from "../views/Photos/Photos";
import { getRandom } from "../api/getRandom";
import { INITIAL_DATA_COUNT } from "../constants";

const handleToggleSaved = (id: string) => {
  if (saved.state.includes(id)) {
    saved.removeSaved(id);
  } else {
    saved.setSaved(id);
  }
};

react("update nav", () => {
  console.log("Nav updated");

  Nav.render(saved.state.length);
});

react("update photos", () => {
  const ids = data.state.map((photo) => photo.id);

  Photos.render({ data: data.state, saved: saved.state });
  Photos.handleSave(ids, handleToggleSaved);

  if (data.state.length === 0) {
    data.setData(getRandom.bind(null, INITIAL_DATA_COUNT));
  }
});
