import "../styles/normalize.css";
import "../styles/reset.css";
import "../styles/index.css";

import { react } from "signia";

import { saved } from "../models/saved";
import { data } from "../models/data";

import NavHeading from "../views/NavHeading/NavHeading";
import SavedCount from "../views/SavedCount/SavedCount";
import Photos from "../views/Photos/Photos";
import PhotoDialog from "../views/PhotoDialog/PhotoDialog";

import { getRandom } from "../api/getRandom";
import { INITIAL_DATA_COUNT } from "../constants";

// elements
const dialogEl = document.getElementById("photo-dialog") as HTMLDialogElement;
const dialogCloseEl = document.getElementById("photo-dialog-close") as HTMLButtonElement;
const bodyEl = document.querySelector("body") as HTMLBodyElement;

// variables
let scrollPosition = 0;

// event handlers
const handleToggleSaved = (id: string) => {
  const savedIndicatorEl = document.getElementById(`${id}-saved`) as HTMLElement;

  if (saved.state.includes(id)) {
    saved.removeSaved(id);
    savedIndicatorEl.classList.remove("svg__heart--active");
  } else {
    saved.setSaved(id);
    savedIndicatorEl.classList.add("svg__heart--active");
  }
};
const handleOpenDialog = (id: string) => {
  scrollPosition = window.scrollY;
  const photoIdx = data.state.findIndex((photo) => photo.id === id);

  PhotoDialog.render(data.state[photoIdx]);
  dialogEl.showModal();
  bodyEl.classList.add("dialog-open");
};
const handleCloseDialog = () => {
  dialogEl.classList.add("is-hidden");
  const handleAnimationEnd = () => {
    dialogEl.classList.remove("is-hidden");
    window.scrollTo(0, scrollPosition);
    dialogEl.close();
    dialogEl.removeEventListener("webkitAnimationEnd", handleAnimationEnd, false);
  };
  dialogEl.addEventListener("webkitAnimationEnd", handleAnimationEnd, false);
  bodyEl.classList.remove("dialog-open");
};

// react
react("update photos", () => {
  console.log("photos updated");
  const ids = data.state.map((photo) => photo.id);

  Photos.render(data.state);
  Photos.handleSave(ids, handleToggleSaved);
  Photos.handleDialog(ids, handleOpenDialog);

  if (data.state.length === 0) {
    data.setData(getRandom.bind(null, INITIAL_DATA_COUNT));
  }
});
react("update saved count", () => {
  console.log("saved count updated");

  SavedCount.render(saved.state.length);
});

// initial render
NavHeading.render(null);
dialogCloseEl.addEventListener("click", handleCloseDialog);
dialogEl.addEventListener("click", handleCloseDialog);
const ids = data.state.map((photo) => photo.id);
ids.forEach((id) => {
  const savedIndicatorEl = document.getElementById(`${id}-saved`) as HTMLElement;

  if (saved.state.includes(id)) {
    savedIndicatorEl.classList.add("svg__heart--active");
  } else {
    savedIndicatorEl.classList.remove("svg__heart--active");
  }
});
