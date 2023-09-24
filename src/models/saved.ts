import { produce } from "immer";
import State from "../types/classes/State";
import { setSateInStorage } from "../utils/setStateInStorage";
import { getStateFromStorage } from "../utils/getStateFromStorage";

export type SavedType = string[];

const INITIAL_STATE = getStateFromStorage<SavedType>("saved", []);

class Saved extends State<SavedType> {
  constructor(initialState: SavedType, stateKey: string) {
    super(initialState, stateKey);
  }

  removeSaved(id: string) {
    this._state.update((state) =>
      produce(state, (draft) => {
        const idx = draft.indexOf(id);
        draft.splice(idx, 1);
        setSateInStorage("saved", draft);
      })
    );
  }

  setSaved(id: string) {
    this._state.update((state) =>
      produce(state, (draft) => {
        draft.push(id);
        setSateInStorage("saved", draft);
      })
    );
  }
}

export const saved = new Saved(INITIAL_STATE, "Saved._state");
