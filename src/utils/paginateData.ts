import { PAGE_SIZE } from "../constants";

export function paginateData<T>(data: T[]) {
  const dataCopy = [...data];

  return Array.from({ length: data.length / PAGE_SIZE }, () => []).map(() => {
    if (dataCopy.length > PAGE_SIZE) {
      return [...dataCopy.splice(0, PAGE_SIZE)];
    } else {
      return [...dataCopy.splice(0, dataCopy.length)];
    }
  });
}
