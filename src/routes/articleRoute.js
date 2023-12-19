import { Router } from "express";
import {
  getAllArticles,
  getArticle,
  postArticle,
  putArticle,
} from "../controllers/articleController";
const articleRouter = Router();

// get all articles
articleRouter.get("/all", getAllArticles);
articleRouter.post("/add", postArticle);
articleRouter.get("/:id", getArticle);
articleRouter.put("/:id/edit", putArticle);

export default articleRouter;
