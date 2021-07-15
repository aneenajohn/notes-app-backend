const express = require("express");
const notesRouter = express.Router();

const {
  getAllNotes,
  addNote
} = require("../controllers/notes.controllers.js");

notesRouter.route("/")
.get(getAllNotes)
.post(addNote);



module.exports = { notesRouter };