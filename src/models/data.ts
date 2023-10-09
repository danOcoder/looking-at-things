import type { PhotoData } from "../types/api";

import State from "../types/classes/State";
import { getStateFromStorage } from "../utils/getStateFromStorage";
import { setSateInStorage } from "../utils/setStateInStorage";
import { paginateData } from "../utils/paginateData";

export type DataType = PhotoData.Photo[][];

const INITIAL_STATE = getStateFromStorage<DataType>("data", []);

class Data extends State<DataType> {
  constructor(initialState: DataType, stateKey: string) {
    super(initialState, stateKey);
  }

  setData(fn: () => Promise<PhotoData.Response>) {
    fn().then((res) => {
      const { response } = res;

      const data = Array.isArray(response) ? paginateData(response) : [];

      this._state.set(data);
      setSateInStorage("data", data);
    });
  }
}

export const data = new Data(INITIAL_STATE, "Data._state");

// import type { Patch } from "immer";

// const startEpoch = this._state.lastChangedEpoch;

// this._state.set(page + 1);

// const computedDiff = this._state.getDiffSince(startEpoch) as [
//   [PageType, Patch[], Patch[]]
// ];

// this._prevState.set(computedDiff[0][2][0].value);
