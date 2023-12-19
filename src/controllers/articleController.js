import Article from "../models/ArticleModel";

const getAllArticles = async (req, res) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (error) {
    res.json(error.message);
  }
};

const postArticle = async (req, res) => {
  try {
    const newArticle = await new Article({
      title: req.body.title,
      content: req.body.content
    })
    newArticle.save();
    res.json({newArticle, message:" has been added"
    });
  } catch (error) {
    res.json(error.message);
  }
}


export { getAllArticles, postArticle};
