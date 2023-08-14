import { produce } from "immer";
import { State } from "../types/classes/State";
import { getStateFromStorage } from "../utils/getStateFromStorage";
import { setSateInStorage } from "../utils/setStateInStorage";

export type HomeState = {
  saved: string[];
};

const INITIAL_STATE: HomeState = {
  saved: getStateFromStorage("saved") || [],
};

class Model extends State<HomeState> {
  constructor(initialState: HomeState, stateKey: string) {
    super(initialState, stateKey);
  }

  removeSaved(id: string) {
    this._state.update(
      produce((draft) => {
        const idx = draft.saved.indexOf(id);
        draft.saved.splice(idx, 1);
        setSateInStorage("saved", draft.saved);
      })
    );
  }

  setSaved(id: string) {
    this._state.update(
      produce((draft) => {
        draft.saved.push(id);
        setSateInStorage("saved", draft.saved);
      })
    );
  }
}

const model = new Model(INITIAL_STATE, "Home._state");

export default model;
