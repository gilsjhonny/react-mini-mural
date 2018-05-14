import {
  SELECTED_NOTE_SET,
  SELECTED_NOTE_PUSH,
  SELECTED_NOTES_CLEAR,
  MULTIPLE_SELECTION_ENABLE,
  MULTIPLE_SELECTION_DISABLE
} from "../actionTypes";

export default function(state = {}, action) {
  switch (action.type) {
    case SELECTED_NOTE_SET:
      let newSelectedNote = {};
      newSelectedNote[action.id] = { note_id: action.id };
      return { ...state, selected_notes: newSelectedNote };

    case SELECTED_NOTE_PUSH:
      let newSelectedNotes = { ...state["selected_notes"] };
      newSelectedNotes[action.id] = { note_id: action.id };
      return { ...state, selected_notes: newSelectedNotes };

    case SELECTED_NOTES_CLEAR:
      return { ...state, selected_notes: {} };

    case MULTIPLE_SELECTION_ENABLE:
      return { ...state, multipleSelection: true };

    case MULTIPLE_SELECTION_DISABLE:
      return { ...state, multipleSelection: false };

    default:
      return state;
  }
}
