import { Router } from "express";
import { home, saved } from "./controllers";

const router = Router();

router.get("/", home);

router.get("/saved", saved);

export default router;
