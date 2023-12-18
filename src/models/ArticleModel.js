import { Schema, mongoose } from "mongoose";
const articleSchema = new Schema({
  title: { type: String },
  content: { type: String },
});
const Article = mongoose.model("Article", ArticleSchema);
export default Article;
