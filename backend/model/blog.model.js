const mongoose = require('mongoose');
const schema = mongoose.Schema;

const article = new  schema({
  title : {
    type : String,
    required : true
  },
  tags : {
    type : String,
  },
  writing : {
    type : String,
    required : true
  },
  // date : {
  //   type : Date,
  //   required : true
  // }
});

const Article = mongoose.model('Article', article);
module.exports = Article;