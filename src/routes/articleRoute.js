import { Router } from "express";
import { getAllArticles } from "../controllers/articleController";
const articleRouter = Router();
// get all articles
articleRouter.get("/all", getAllArticles);
export default articleRouter;
