import { NOTE_ADD, NOTE_COPY, NOTE_UPDATE, NOTE_DELETE } from "../actionTypes";

export default function(state = {}, action) {
  let newNotes;

  switch (action.type) {
    case NOTE_ADD:
      newNotes = { ...state };
      newNotes[action.note.id] = { ...action.note };
      return newNotes;

    case NOTE_COPY:
      newNotes = { ...state };
      newNotes[action.newId] = { id: action.newId, ...action.note };
      return newNotes;

    case NOTE_UPDATE:
      newNotes = { ...state };
      newNotes[action.note.id] = { ...action.note };
      return newNotes;

    case NOTE_DELETE:
      newNotes = { ...state };
      delete newNotes[action.id];
      return newNotes;

    default:
      return state;
  }
}
