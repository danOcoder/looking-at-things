import { createApi } from "unsplash-js";
import dotenv from "dotenv";

dotenv.config();

let { ACCESS_KEY, SECRET_KEY } = process.env;

console.log(process.env.ACCESS_KEY);

// on your node server
const serverApi = createApi({
  accessKey: process.env.ACCESS_KEY,
  //...other fetch options
});

// non-feed example
serverApi.search
  .getUsers({
    query: "cat",
    page: 1,
    perPage: 10,
  })
  .then((result) => {
    if (result.errors) {
      // handle error here
      console.log("error occurred: ", result.errors[0]);
    } else {
      // handle success here
      const photo = result.response;
      console.log(photo);
    }
  });
