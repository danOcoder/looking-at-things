export function getStateFromStorage<T>(key: string, fallback: T): T {
  const state = sessionStorage.getItem(key);

  if (!state) {
    return fallback;
  }

  return JSON.parse(state);
}
