const router = require("express").Router();
let Note = require("../model/note.model");

router.route("/").get((req, res) => {
  Note.find()
    .then((note) => res.json(note))
    .catch((err) => res.status(400).json("Error : " + err));
});

router.route("/add").post((req, res) => {
  const title = req.body.title;
  const writing = req.body.writing;
  const date = Date.parse(new Date());

  const newNote = new Note({
    title,
    writing,
    date,
  });

  newNote
    .save()
    .then(() => res.json("Note added!"))
    .catch((err) => res.status(400).json("Error : " + err));
});

router.route("/delete/:id").delete((req, res) => {
  Note.findByIdAndDelete(req.params.id)
    .then(() => res.json("Note deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/note/:id").get((req, res) => {
  Note.findById(req.params.id)
    .then((note) => res.json(note))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/edit/:id").get((req, res) => {
  Note.findById(req.params.id)
    .then((note) => res.json(note))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/edit/:id").post((req, res) => {
  Note.findById(req.params.id)
    .then((note) => {
      note.title = req.body.title;
      note.writing = req.body.writing;
      note.date = Date.parse(req.body.date);

      note
        .save()
        .then(() => res.json("Note updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
