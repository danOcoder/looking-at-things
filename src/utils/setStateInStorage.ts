export function setSateInStorage<T>(key: string, state: T) {
  const stateJSON = JSON.stringify(state);
  sessionStorage.setItem(key, stateJSON);
}
