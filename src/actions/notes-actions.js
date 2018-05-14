import cuid from "cuid";
import { NOTE_ADD, NOTE_UPDATE, NOTE_DELETE } from "../actionTypes";

export const addNote = note => ({
  type: NOTE_ADD,
  note: { id: cuid(), ...note }
});

export const updateNote = note => ({
  type: NOTE_UPDATE,
  note
});

export const deleteNote = id => ({
  type: NOTE_DELETE,
  id
});
