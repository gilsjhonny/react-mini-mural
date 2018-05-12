import {
  SET_SELECTED_NOTE,
  PUSH_SELECTED_NOTE,
  REMOVE_ALL_SELECTED_NOTES,
  ENABLE_MULTIPLE_SELECTION,
  DISABLE_MULTIPLE_SELECTION
} from "../actionTypes";

export default function(state = {}, action) {
  switch (action.type) {
    case SET_SELECTED_NOTE:
      let newSelectedNote = {};
      newSelectedNote[action.id] = { note_id: action.id };
      return { ...state, selected_notes: newSelectedNote };

    case PUSH_SELECTED_NOTE:
      let newSelectedNotes = { ...state["selected_notes"] };
      newSelectedNotes[action.id] = { note_id: action.id };
      return { ...state, selected_notes: newSelectedNotes };

    case REMOVE_ALL_SELECTED_NOTES:
      return { ...state, selected_notes: {} };

    case ENABLE_MULTIPLE_SELECTION:
      return { ...state, multipleSelection: true };

    case DISABLE_MULTIPLE_SELECTION:
      return { ...state, multipleSelection: false };

    default:
      return state;
  }
}
