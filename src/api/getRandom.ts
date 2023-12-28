import { DUMMY_RESPONSE } from "../constants";
import { PhotoData } from "../types/api";
import { getJSON } from "./getJSON";

// const API_URL = process.env.API_URL;
// harding coding for now – test to see if this fixes issue with cyclic
const API_URL = "https://zany-pink-jackrabbit-belt.cyclic.app/";

export const getRandom = async (
  count: number,
  query: string | undefined = undefined
): Promise<PhotoData.Response> => {
  const queryParam = query ? `&query=${query}` : "";

  try {
    const response = await getJSON(`${API_URL}random?count=${count}${queryParam}`);

    return response as PhotoData.Response;
  } catch (error) {
    // TODO: Add error handling - Sentry?
    console.error(error);

    return DUMMY_RESPONSE;
  }
};
