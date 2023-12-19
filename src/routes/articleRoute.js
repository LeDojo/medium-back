import { Router } from "express";
import { getAllArticles, postArticle } from "../controllers/articleController";
const articleRouter = Router();

// get all articles
articleRouter.get("/all", getAllArticles);
articleRouter.post("/add", postArticle);

export default articleRouter;
