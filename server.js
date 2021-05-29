const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const notesDB = require("./data/db");

app.use(cors());

app.get('/', (req, res) => {
    res.json({data: notesDB })
  });


app.listen(port, () => {
    console.log(`server started on port ${port}`);
  });

