import { PAGE_SIZE } from "../constants";

export function paginateData<T>(data: T[]) {
  const dataCopy = [...data];

  const numOfPages = Math.ceil(data.length / PAGE_SIZE);

  return Array.from({ length: numOfPages }, () => []).map(() => {
    if (dataCopy.length > PAGE_SIZE) {
      return [...dataCopy.splice(0, PAGE_SIZE)];
    } else {
      return [...dataCopy.splice(0)];
    }
  });
}
