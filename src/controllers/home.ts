import "../styles/normalize.css";
import "../styles/reset.css";
import "../styles/index.css";

import { react } from "signia";

import { saved } from "../models/saved";
import { data } from "../models/data";

import SavedCount from "../views/SavedCount/SavedCount";
import Photos from "../views/Photos/Photos";

import { getRandom } from "../api/getRandom";
import { INITIAL_DATA_COUNT } from "../constants";

const handleToggleSaved = (id: string) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const savedIndicatorEl = document.getElementById(`${id}-saved`)!;

  if (saved.state.includes(id)) {
    saved.removeSaved(id);
    savedIndicatorEl.classList.remove("svg__heart--active");
  } else {
    saved.setSaved(id);
    savedIndicatorEl.classList.add("svg__heart--active");
  }
};

react("update photos", () => {
  console.log("photos updated");
  const ids = data.state.map((photo) => photo.id);

  console.log("data.state", data.state);

  Photos.render(data.state);
  Photos.handleSave(ids, handleToggleSaved);

  if (data.state.length === 0) {
    data.setData(getRandom.bind(null, INITIAL_DATA_COUNT));
  }
});

react("update saved count", () => {
  console.log("saved count updated");

  SavedCount.render(saved.state.length);
});

// initialize
(() => {
  const ids = data.state.map((photo) => photo.id);

  ids.forEach((id) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const savedIndicatorEl = document.getElementById(`${id}-saved`)!;

    if (saved.state.includes(id)) {
      savedIndicatorEl.classList.add("svg__heart--active");
    } else {
      savedIndicatorEl.classList.remove("svg__heart--active");
    }
  });
})();
