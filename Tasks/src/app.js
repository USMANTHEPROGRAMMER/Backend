const express = require("express");
const app = express();
app.use(express.json());

const notes = [];

app.post("/notes", (req, res) => {
  const note = req.body;
  notes.push(note);

  res.status(201).json({
    message: "Note Added Succssfully",
  });
  // res.send({ message: "Note added successfully", note}, {status: 201});
});

app.get("/notes", (req, res) => {
  res.status(200).json({
    note: "Data Fetched Successfully",
    notes,
  });
});

app.delete("/notes/:id", (req, res) => {
  const index = parseInt(req.params.id);

  if (index >= 0 && index < notes.length) {
    console.log(`Deleted Notes Index is ${index}`);

    notes.splice(index, 1);

    res.status(200).json({
      note: "Data Deleted Successfully",
      index,
      notes,
    });
  } else {
    res.status(404).json({
      message: "Note not found",
    });
  }
});

app.patch('/notes/:id', (req, res) => {
  const index = parseInt(req.params.id);
  console.log("Requested Index:", index, "Total Notes:", notes.length); // Check terminal

  if (index >= 0 && index < notes.length) {
    notes[index] = { ...notes[index], ...req.body };
    res.status(200).json({ message: "Note updated", note: notes[index] });
  } else {
    // Change this temporarily so you know exactly WHY it's 404
    res.status(404).send(`Route matched, but index ${index} is invalid. Array length is ${notes.length}`);
  }
});


module.exports = app;
