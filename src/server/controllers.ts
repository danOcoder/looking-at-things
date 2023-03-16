import { Response, Request } from "express";
import * as path from "path";

export const home = (_: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "public", "home-page.html"));
};

export const saved = (_: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "public", "saved-page.html"));
};
