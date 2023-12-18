import express from "express";
import articleRouter from "./routes/articleRoute";

const app = express();
const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/medium_db");
  console.log(`⚡️🤡 database connected successfully`);
}

const port = process.env.PORT || 3456;

app.get("/", (req, res) => {
  res.send("Welcome");
});
app.use("/api/articles", articleRouter);

app.listen(port, () => {
  console.log("weweeeeweeee");
});
