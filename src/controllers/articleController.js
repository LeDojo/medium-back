import Article from "../models/ArticleModel";

const getAllArticles = async (req, res) => {
  try {
    const articles = await Article.find();
    res.send(articles);
  } catch (error) {
    res.send(error.message);
  }
};
export { getAllArticles };
