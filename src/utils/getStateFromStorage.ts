export const getStateFromStorage = (key: string) => {
  const state = sessionStorage.getItem(key);

  if (!state) {
    return null;
  }

  return JSON.parse(state);
};
