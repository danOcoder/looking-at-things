import { atom } from "signia";

export abstract class State<T> {
  constructor(private readonly initialState: T, private readonly stateKey: string) {}

  protected readonly _state = atom<T>(this.stateKey, this.initialState);

  get state() {
    return this._state.value;
  }
}