import type { PhotoData } from "./types/api";

export const html = String.raw;

export const DATA_COUNT = 30;

export const PAGE_SIZE = 9;

export const DUMMY_RESPONSE: PhotoData.Response = {
  type: "type",
  status: 200,
  response: [],
  originalResponse: {
    size: 0,
    timeout: 0,
  },
};
