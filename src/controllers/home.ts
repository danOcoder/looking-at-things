import "../styles/normalize.css";
import "../styles/reset.css";
import "../styles/index.css";

import { react } from "signia";

import { saved } from "../models/saved";
import { data } from "../models/data";
import { page } from "../models/page";

import NavHeading from "../views/NavHeading/NavHeading";
import SavedCount from "../views/SavedCount/SavedCount";
import Photos from "../views/Photos/Photos";
import PhotoDialog from "../views/PhotoDialog/PhotoDialog";
import PaginationButtons from "../views/PaginationButtons/PaginationButtons";

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
  const currentPage = page.state;
  const _data = data.state[currentPage];

  scrollPosition = window.scrollY;
  const photoIdx = _data.findIndex((photo) => photo.id === id);

  PhotoDialog.render(_data[photoIdx]);
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
// signals
react("update photos", () => {
  console.log("photos updated");

  if (data.state.length === 0) {
    data.setData(getRandom.bind(null, INITIAL_DATA_COUNT));
  }

  const currentPage = page.state;
  const _data = data.state[currentPage];

  console.log("currentPage", currentPage);
  console.log("_data", _data);

  const ids = _data.map((photo) => photo.id);

  Photos.render(_data);
  Photos.handleSave(ids, handleToggleSaved);
  Photos.handleDialog(ids, handleOpenDialog);
});
react("update saved count", () => {
  console.log("saved count updated");

  SavedCount.render(saved.state.length);
});
react("update page", () => {
  console.log("page updated");

  const currentPage = page.state;
  const _data = data.state[currentPage];

  PaginationButtons.render({
    currentPage: currentPage,
    totalPages: _data.length,
  });

  PaginationButtons.handleIncrementPage(() => {
    page.incrementPage();
  });
  PaginationButtons.handleDecrementPage(() => {
    page.decrementPage();
  });
});

// initial render
NavHeading.render(null);
dialogCloseEl.addEventListener("click", handleCloseDialog);
dialogEl.addEventListener("click", handleCloseDialog);

const ids = data.state[page.state].map((photo) => photo.id);
ids.forEach((id) => {
  const savedIndicatorEl = document.getElementById(`${id}-saved`) as HTMLElement;

  if (saved.state.includes(id)) {
    savedIndicatorEl.classList.add("svg__heart--active");
  } else {
    savedIndicatorEl.classList.remove("svg__heart--active");
  }
});
