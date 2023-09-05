import type { PhotoData } from "../types/api";
import State from "../types/classes/State";
import { getStateFromStorage } from "../utils/getStateFromStorage";
import { setSateInStorage } from "../utils/setStateInStorage";

// import { DUMMY_DATA } from "../constants";

export type DataType = PhotoData.Photo[];

const INITIAL_STATE: DataType = getStateFromStorage<PhotoData.Photo>("data");

class Data extends State<DataType> {
  constructor(initialState: DataType, stateKey: string) {
    super(initialState, stateKey);
  }

  setData(fn: () => Promise<PhotoData.Response>) {
    fn().then((res) => {
      this._state.update(() => {
        const { response } = res;

        const data = Array.isArray(response) ? response : [];
        setSateInStorage("data", data);

        return data;
      });
    });
  }
}

export const data = new Data(INITIAL_STATE, "Home._state");
