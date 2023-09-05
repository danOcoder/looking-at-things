export function getStateFromStorage<T>(key: string): T[] {
  const state = sessionStorage.getItem(key);

  if (!state) {
    return [];
  }

  return JSON.parse(state);
}
