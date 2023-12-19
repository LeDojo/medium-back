import { Router } from "express";
import {
  getAllArticles,
  getArticle,
  postArticle,
} from "../controllers/articleController";
const articleRouter = Router();

// get all articles
articleRouter.get("/all", getAllArticles);
articleRouter.post("/add", postArticle);
articleRouter.get("/:id", getArticle);

export default articleRouter;
