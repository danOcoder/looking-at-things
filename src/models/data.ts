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
      this._state.update(() => {
        const { response } = res;

        const data = Array.isArray(response) ? paginateData(response) : [];

        console.log("data", data);

        setSateInStorage("data", data);
        return data;
      });
    });
  }
}

export const data = new Data(INITIAL_STATE, "Data._state");
