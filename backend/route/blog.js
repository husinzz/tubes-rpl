const router = require("express").Router();
let Article = require("../model/blog.model");

router.route("/").get((req, res) => {
  Article.find()
    .then((article) => res.json(article))
    .catch((err) => res.status(400).json("Error : " + err));
});

router.route("/add").post((req, res) => {
  const title = req.body.title;
  const writing = req.body.writing;
  const date = Date.parse(new Date());

  const newArticle = new Article({
    title,
    writing,
    date,
  });

  newArticle
    .save()
    .then(() => res.json("Article added!"))
    .catch((err) => res.status(400).json("Error : " + err));
});

router.route("/delete/:id").delete((req, res) => {
  Article.findByIdAndDelete(req.params.id)
    .then(() => res.json("Article deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/blog/:id").get((req, res) => {
  Article.findById(req.params.id)
    .then((article) => res.json(article))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/edit/:id").get((req, res) => {
  Article.findById(req.params.id)
    .then((article) => res.json(article))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/edit/:id").post((req, res) => {
  Article.findById(req.params.id)
    .then((article) => {
      article.title = req.body.title;
      article.writing = req.body.writing;
      article.date = Date.parse(req.body.date);

      article
        .save()
        .then(() => res.json("Article updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
