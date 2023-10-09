import { produceWithPatches, enablePatches } from "immer";
import { atom } from "signia";

enablePatches();

abstract class State<T> {
  constructor(private readonly initialState: T, private readonly stateKey: string) {}

  protected readonly _state = atom<T>(this.stateKey, this.initialState, {
    historyLength: 10,
    computeDiff: (prev, next) => {
      return produceWithPatches(prev, () => {
        return next;
      });
    },
  });

  get state() {
    return this._state.value;
  }
}

export default State;
