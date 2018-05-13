import { uniqueId } from "lodash";
import { ADD_NEW_NOTE, REMOVE_NOTE } from "../actionTypes";

export default function(state = {}, action) {
  switch (action.type) {
    case ADD_NEW_NOTE:
      const { text, color, width, height, x, y } = action.note;
      const id = uniqueId();
      let newNotes = { ...state };
      newNotes[id] = { id, text, color, width, height, x, y };
      return newNotes;
    case REMOVE_NOTE:
      let notes = { ...state };
      delete notes[action.id];
      return notes;
    default:
      return state;
  }
}
