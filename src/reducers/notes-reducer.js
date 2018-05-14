import { uniqueId } from "lodash";
import { NOTE_ADD, NOTE_UPDATE, NOTE_DELETE } from "../actionTypes";

export default function(state = {}, action) {
  switch (action.type) {
    case NOTE_ADD:
      const { text, color, width, height, x, y } = action.note;
      const id = uniqueId();
      let newNotes = { ...state };
      newNotes[id] = { id, text, color, width, height, x, y };
      return newNotes;
    case NOTE_UPDATE:
      let notesToUpdate = { ...state };
      notesToUpdate[action.note.id] = { ...action.note };
      return notesToUpdate;
    case NOTE_DELETE:
      let notes = { ...state };
      delete notes[action.id];
      return notes;
    default:
      return state;
  }
}
