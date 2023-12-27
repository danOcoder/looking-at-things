import { DUMMY_RESPONSE } from "../constants";
import { PhotoData } from "../types/api";
import { getJSON } from "./getJSON";

export const getRandom = async (
  count: number,
  query: string | undefined = undefined
): Promise<PhotoData.Response> => {
  const queryParam = query ? `&query=${query}` : "";

  try {
    const response = await getJSON(
      `${process.env.API_URL}random?count=${count}${queryParam}`
    );

    return response as PhotoData.Response;
  } catch (error) {
    // TODO: Add error handling - Sentry?
    console.error(error);

    return DUMMY_RESPONSE;
  }
};
