const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors')
const mongoose = require("mongoose");
const Blog = require("./models/blogSchema");
require("dotenv").config();
const app = express();

const CONNECTION = process.env.MONGO_URL;

app.use(cors({
  origin:"http://localhost:3000",
}))
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/blogs", (req, response) => {
  Blog.find()
    .then((res) => response.send(res))
    .catch((err) => console.log(err));
});

app.get("/blog/:id", (req, response) => {
  // console.log(req.params);
  Blog.findById(req.params.id)
    .then((res) => response.send(res))
    .catch((err) => console.log(err));
});

app.delete("/blog/:id", (req, response) => {
  Blog.findByIdAndDelete(req.params.id)
    .then((res) => response.send(res))
    .catch((err) => console.log(err));
});

app.post("/blog/add-new-blog", (req, res) => {
  // console.log(req.body);
  const blog = new Blog(req.body);
  blog
    .save()
    .then(() => res.send("Blog Created!!"))
    .catch((err) => console.log(err));
});

mongoose
  .connect(CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(8000, () => console.log("running on port 8000")))
  .catch((err) => console.log(err));
