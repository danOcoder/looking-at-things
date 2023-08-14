import express from "express";
import * as path from "path";
import routes from "./routes";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static(path.join(__dirname, "../../../dist")));

app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Application is running on http://localhost:${PORT}/`);
});
