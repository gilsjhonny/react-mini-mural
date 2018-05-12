import { ADD_SELECTED_NOTE, REMOVE_ALL_SELECTED_NOTES } from "../actionTypes";

export default function(state = {}, action) {
  switch (action.type) {
    case ADD_SELECTED_NOTE:
      const { id } = action;
      let newSelectedNotes = { ...state["selected_notes"] };
      newSelectedNotes[id] = { note_id: id };
      return { ...state, selected_notes: newSelectedNotes };

    case REMOVE_ALL_SELECTED_NOTES:
      return { ...state, selected_notes: {} };

    default:
      return state;
  }
}
