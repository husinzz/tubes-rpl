const mongoose = require("mongoose");
const schema = mongoose.Schema;

const article = new schema({
  title: {
    type: String,
    required: true,
  },
  writing: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
  },
});

const Article = mongoose.model("Article", article);
module.exports = Article;
