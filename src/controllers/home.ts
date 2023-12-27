import "../styles/normalize.css";
import "../styles/reset.css";
import "../styles/index.css";
import "../styles/dialog.css";

import { react } from "signia";

import { saved } from "../models/saved";
import { data } from "../models/data";
import { page } from "../models/page";

import NavHeading from "../views/NavHeading";
import SavedCount from "../views/SavedCount";
import Search from "../views/Search";
import Photos from "../views/Photos";
import DialogImg from "../views/DialogImg";
import PaginationButtons from "../views/PaginationButtons";

import { getRandom } from "../api/getRandom";
import { DATA_COUNT } from "../constants";
import { setSateInStorage } from "../utils/setStateInStorage";
import { getStateFromStorage } from "../utils/getStateFromStorage";

// variables
let scrollPosition = 0;
const searchQuery = getStateFromStorage<string>("query", "");

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
    savedIndicatorEl.classList.add("icon__heart--filled");
  } else {
    saved.removeSaved(id);
    savedIndicatorEl.href.baseVal = savedIndicatorHref.replace("filled", "outline");
    savedIndicatorEl.classList.remove("icon__heart--filled");
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
        savedIndicatorEl.classList.add("icon__heart--filled");
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

const handleSearchSubmit = function (this: HTMLFormElement, event: SubmitEvent) {
  event.preventDefault();

  const formData = new FormData(this);
  const queryParam = Object.fromEntries(formData.entries())["search-query"] as string;

  if (!queryParam.trim()) {
    const searchInputEl = document.getElementById("search-query") as HTMLInputElement;
    searchInputEl.value = "";
    return;
  }

  data.setData(getRandom.bind(null, DATA_COUNT, queryParam));
  setSateInStorage("query", queryParam);

  if (page.state !== 0) {
    page.resetPage();
  }
};

const handleClearSearchInput = () => {
  const searchInputEl = document.getElementById("search-query") as HTMLInputElement;
  if (searchInputEl.value) searchInputEl.value = "";
};

const handleGetRandom = () => {
  data.setData(getRandom.bind(null, DATA_COUNT));
  setSateInStorage("query", "");

  if (page.state !== 0) {
    page.resetPage();
  }

  handleClearSearchInput();
};

const handleClearSearch = () => {
  const currSearchQuery = getStateFromStorage<string>("query", "");

  if (currSearchQuery !== "") {
    handleGetRandom();
  }

  handleClearSearchInput();
};

// initialization
if (data.state.length === 0 && !searchQuery) {
  data.setData(getRandom.bind(null, DATA_COUNT));
}
NavHeading();
PaginationButtons.render();
Search.render(searchQuery);
dialogCloseBtn.addEventListener("click", handleCloseDialog);
dialogEl.addEventListener("click", handleCloseDialog);
PaginationButtons.onNextPage(handleNextPage);
PaginationButtons.onPreviousPage(handlePreviousPage);
PaginationButtons.onPageChange(page.state, data.state);
Search.onSubmit(handleSearchSubmit);
Search.onRandom(handleGetRandom);
Search.onClear(handleClearSearch);

// signals
react("render photos", () => {
  console.info("📷 rendered photos 📷");

  const noResultsContainerEl = document.getElementById("no_results") as HTMLElement;
  const photosContainerEl = document.getElementById("photos_container") as HTMLElement;

  const currData = data.state[page.state];

  Photos.render(currData);

  if (currData) {
    photosContainerEl.classList.remove("hide");
    photosContainerEl.classList.add("show");
    noResultsContainerEl.classList.remove("show");
    noResultsContainerEl.classList.add("hide");

    const ids = currData.map((photo) => photo.id);
    Photos.onSave(ids, handleToggleSaved);
    Photos.onDialogOpen(ids, handleOpenDialog);
  } else {
    photosContainerEl.classList.remove("show");
    photosContainerEl.classList.add("hide");
    noResultsContainerEl.classList.remove("hide");
    noResultsContainerEl.classList.add("show");
  }
});

react("render saved count", () => {
  console.info("❤️ saved count updated ❤️");

  SavedCount.render(saved.state.length);
});

react("on page change", () => {
  console.info("📄 page changed 📄");

  PaginationButtons.onPageChange(page.state, data.state);
});

// initial render
handleIndicateIsSaved();
