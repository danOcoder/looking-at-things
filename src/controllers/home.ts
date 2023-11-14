import "../styles/normalize.css";
import "../styles/reset.css";
import "../styles/index.css";
import "../styles/dialog.css";

import { react } from "signia";

import { saved } from "../models/saved";
import { data } from "../models/data";
import { page } from "../models/page";

import NavHeading from "../views/NavHeading/NavHeading";
import SavedCount from "../views/SavedCount/SavedCount";
import Photos from "../views/Photos/Photos";
import DialogImg from "../views/DialogImg/DialogImg";
import PaginationButtons from "../views/PaginationButtons/PaginationButtons";

import { getRandom } from "../api/getRandom";
import { INITIAL_DATA_COUNT } from "../constants";

// variables
let scrollPosition = 0;

// elements
const dialogEl = document.getElementById("photo-dialog") as HTMLDialogElement;
const bodyEl = document.querySelector("body") as HTMLBodyElement;
const dialogCloseBtn = document.getElementById("photo-dialog-close") as HTMLButtonElement;

// handlers
const handleToggleSaved = (id: string) => {
  const savedIndicatorEl = document.getElementById(
    `${id}-saved`
  ) as unknown as SVGUseElement;

  const savedIndicatorHref = savedIndicatorEl.href.baseVal;

  if (savedIndicatorHref.includes("outline")) {
    saved.setSaved(id);
    savedIndicatorEl.href.baseVal = savedIndicatorHref.replace("outline", "filled");
  } else {
    saved.removeSaved(id);
    savedIndicatorEl.href.baseVal = savedIndicatorHref.replace("filled", "outline");
  }
};

const handleIndicateIsSaved = () => {
  console.info("✅ handleIndicateIsSaved ran ✅");

  const currData = data.state[page.state];

  if (currData) {
    const ids = currData.map((photo) => photo.id);

    ids.forEach((id) => {
      const savedIndicatorEl = document.getElementById(
        `${id}-saved`
      ) as unknown as SVGUseElement;

      const savedIndicatorHref = savedIndicatorEl.href.baseVal;

      if (saved.state.includes(id)) {
        savedIndicatorEl.href.baseVal = savedIndicatorHref.replace("outline", "filled");
      }
    });
  }
};

const handleOpenDialog = (id: string) => {
  const currentPage = page.state;
  const _data = data.state[currentPage];

  scrollPosition = window.scrollY;
  const photoIdx = _data.findIndex((photo) => photo.id === id);

  DialogImg.render(_data[photoIdx]);
  dialogEl.showModal();
  bodyEl.classList.add("dialog-open");
};

const handleNextPage = () => {
  page.incrementPage();
  handleIndicateIsSaved();
  window.scrollTo(0, 0);
};

const handlePreviousPage = () => {
  page.decrementPage();
  handleIndicateIsSaved();
  window.scrollTo(0, 0);
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

// initialization
if (data.state.length === 0) data.setData(getRandom.bind(null, INITIAL_DATA_COUNT));
NavHeading.render();
PaginationButtons.render();
dialogCloseBtn.addEventListener("click", handleCloseDialog);
dialogEl.addEventListener("click", handleCloseDialog);
PaginationButtons.onNextPage(handleNextPage);
PaginationButtons.onPreviousPage(handlePreviousPage);

// signals
react("render photos", () => {
  console.info("📷 rendered photos 📷");

  const currData = data.state[page.state];

  const ids = currData.map((photo) => photo.id);

  Photos.render(currData);
  Photos.onSave(ids, handleToggleSaved);
  Photos.onDialogOpen(ids, handleOpenDialog);
});

react("render saved count", () => {
  console.info("❤️ saved count updated ❤️");

  SavedCount.render(saved.state.length);
});

react("on page change", () => {
  console.info("📄 page changed 📄");

  PaginationButtons.onPageChange(page.state, data.state);
});

// run this once on page load
handleIndicateIsSaved();
PaginationButtons.onPageChange(page.state, data.state);
