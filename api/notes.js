import express from "express";
import { addNote, getNoteById, getNotes } from "#db/notes";

const router = express.Router();

router.get("/", (req, res) => {
  res.send(getNotes());
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const note = getNoteById(id);

  if (!note) {
    res.status(404).send("note does not exist");
  }

  res.status(200).send(note);
});

router.post("/", (req, res) => {
  const data = req.body;

  if (!data) {
    res.status(400).send("Request must have a body.");
  }
  if (!data.text) {
    res.status(400).send("New note must have text.");
  }

  res.status(201).send(addNote(data.text));
});

export default router;
