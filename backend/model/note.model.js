const mongoose = require("mongoose");
const schema = mongoose.Schema;

const note = new schema({
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

const Note = mongoose.model("Note", note);
module.exports = Note;
