const { extend } = require("lodash");
const { Notes } = require("../models/notes.model");


const getAllNotes = async (req, res) => {
  try{
    const notes = await Notes.find({});
  res.json({
    success: true,
    notes,
    });
  }
  catch (err) {
    res.json({
      success: false,
      errorMessage: err.message,
    });
  };
}

const addNote = async (req, res) => {
  const { title, details, category} = req.body;
  const newNote = new Notes({title, details, category});
  try {
    const addedNote = await newNote.save();
    res.status(201).json({
      success: true,
      noteAdded: addedNote,
    });
  } catch (err) {
    res.json({
      success: false,
      errorMessage: err.message,
    });
  }

}

module.exports= { getAllNotes,addNote}