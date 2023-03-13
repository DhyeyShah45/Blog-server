const mongoose = require('mongoose')

const Schema = mongoose.Schema

// Creating a Schema
const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true,
  },
}, { timestamps: true });

// Creating a model with the name of collections you want by the rules of Schema
const Blog = mongoose.model('blog',blogSchema);
module.exports = Blog