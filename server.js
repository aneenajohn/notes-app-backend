const express = require('express');
const cors = require('cors');
require("dotenv").config();
const bodyParser = require('body-parser');
const notesDB = require("./data/db");
const {initializeDBConnection}=require("./db/db.js");

const { notesRouter } = require("./routes/notes.routes");

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json());

initializeDBConnection();

app.get('/', (req, res) => {
    res.json({data: notesDB })
  });

app.use("/notes",notesRouter);

app.listen(process.env.PORT || PORT, () => {
  console.log("Server started on port ", PORT);
});