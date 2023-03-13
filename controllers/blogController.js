const Blog = require("../models/blogSchema");

const blog_view_all = (req, response) => {
  Blog.find()
    .then((res) => response.send(res))
    .catch((err) => console.log(err));
};

const blog_view_one = (req, response) => {
  // console.log(req.params);
  Blog.findById(req.params.id)
    .then((res) => response.send(res))
    .catch((err) => console.log(err));
};

const blog_create = (req, res) => {
  // console.log(req.body);
  const blog = new Blog(req.body);
  blog
    .save()
    .then(() => res.send("Blog Created!!"))
    .catch((err) => console.log(err));
};

const blog_delete = (req, response) => {
  Blog.findByIdAndDelete(req.params.id)
    .then((res) => response.send(res))
    .catch((err) => console.log(err));
};

module.exports = {
  blog_create,
  blog_delete,
  blog_view_all,
  blog_view_one,
};
