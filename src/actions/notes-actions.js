import uniqueId from "lodash/uniqueId";
import { NOTE_ADD, NOTE_UPDATE, NOTE_DELETE } from "../actionTypes";

export const addNote = note => ({
  type: NOTE_ADD,
  id: uniqueId(),
  note
});

export const updateNote = note => ({
  type: NOTE_UPDATE,
  note
});

export const deleteNote = id => ({
  type: NOTE_DELETE,
  id
});
