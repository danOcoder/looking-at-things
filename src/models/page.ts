import State from "../types/classes/State";

type PageType = number;

const INITIAL_STATE = 0;

class Page extends State<PageType> {
  constructor(initialState: PageType, stateKey: string) {
    super(initialState, stateKey);
  }

  incrementPage() {
    this._state.update((prev) => prev + 1);
  }

  decrementPage() {
    this._state.update((prev) => prev - 1);
  }
}

export const page = new Page(INITIAL_STATE, "Page._state");