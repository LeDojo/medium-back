import express from "express";

const app = express();

const port = process.env.PORT || 3456;

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.listen(port, () => {
  console.log("weweeeeweeee");
});
